---
slug: 2026-06-24_how-I-deploy-llm
authors: [weiji]
tags: [LLM, MLOps, LLMOps, homelab]
---

# 佈署 LLM 的方法

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2026-06-24_how-I-deploy-llm/00_cover.webp" />
</head>


## 前情提要

最近在寫一些小工具，涉及比較敏感的資料，所以不能直接用雲端的 LLM，要用地端/本地的 LLM 處理。不過過程中遇到一點問題，想留個紀錄，但是背景有點複雜，於是想說單獨寫一篇解釋一下我目前的各種技術決策。

## 雲端 LLM

![](/uploads/upload_35f54920f9f469b4629f7cb65c3e9cfb.png)

- Application 端: OpenAI-Compatible API
- 可觀測端：TensorZero
- 模型端：Open Weight Models

:::warning
TensorZero 已經於 2026-06-12 停止維護。
:::

OpenAI-Compatible API 基本上實質產業標準了，不過僅限 LLM 體系，非 LLM 的模型（例如影像或音訊處理）生態比較複雜，沒辦法被這種 API 設計完全覆蓋了。

LLM 可觀測的用途是可以紀錄各種模型、Token 量、費時提示詞以及 reasoning（一般不會直接顯式在應用程式上）。當時選擇 TensorZero 的原因是相對於 Langfuse 和 LiteLLM 的組合更輕量，而且有故障的經驗（雖然事後得知是 ClickHouse 配置失誤的原因）。

模型端則是只使用開放權重的模型，避免供應商鎖定。

## 地端 LLM

![](/uploads/upload_f9d852f34bcbf5217efa354abccfe161.png)

- Application 端: OpenAI-Compatible API
- GPU 端：Vulkan
- 模型運行端：GGUF
- Runtime 佈署端：OCI (Open Container Initiative)
- OCI 佈署端：Docker Registry API V2
- 模型佈署端：Hugging Face API
- 模型快取/鏡像：Olah
- OCI 快取/鏡像：Harbor
- OCI 編排端：Podman-Compose

應用程式同樣使用 OpenAI-Compatible API 使用 LLM。

使用 llama.cpp 運行 LLM，因為它支援多種 GPU 後端（包含主流的 CUDA、ROCm、SYCL...），特別是其中的 Vulkan 可以避免供應商鎖定。其使用的 GGUF 檔案則是針對量化的支援度很高，使用量化模型在該生態系可以說是預設行為，生態系中的模型大多經過量化，量化後的模型較小，可以節省傳輸流量以及運行時的 VRAM 消耗。同時官方提供可以開箱即用的預建置 OCI (Open Container Initiative) 映像檔，對雲原生環境十分親和。

使用 Podman Compose 運行 OCI 容器。使用 Podman 是因為想要試著脫離 Docker 的體系，並且嘗試 Rootless/Daemonless 的方案。Podman 生態系的 Dokcer Compose 對標容器編排方案是 Quadlet；一個 systemd 風味的方案，但是這樣做會偏離主流開發者太遠，所以我使用 Podman Compose 來繼續使用 `docker-compose.yaml`。

我的 homelab 對外網路是 4G 無線路由器加上方案有被限流，所以大部分涉及「套件下載」的東西我都有架設本地鏡像/快取來節省流量，包含：apt、npm、pypi、OCI、Hugging Face。同時把快取的職責甩給 homelab，工作電腦就可以經常清掉暫時用不到的快取，有必要再直接從 homelab 拉下來用。

如此一來就可以在本地快速建立一個 LLM 實例供開發測試使用：

```yaml
services:
  llm:
    image: ghcr.io/ggml-org/llama.cpp:server-vulkan-b8496
    restart: always
    devices:
      - /dev/dri/:/dev/dri/
    ports:
      - 8080:8080
    entrypoint: /app/llama-server
    environment:
      - LLAMA_ARG_HF_REPO=ggml-org/SmolLM3-3B-GGUF
      - LLAMA_ARG_MODEL=SmolLM3-Q4_K_M.gguf
      - LLAMA_ARG_WEBUI=disabled
      - LLAMA_ARG_N_GPU_LAYERS=all
      - LLAMA_ARG_CTX_SIZE=20000
      - LLAMA_ARG_TEMP=0
      - HF_ENDPOINT=http://huggingface.mirrors.solid.arachne
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 10s
      timeout: 20s
      retries: 3
```

## 後記

問題的部份下一篇文章再提。
