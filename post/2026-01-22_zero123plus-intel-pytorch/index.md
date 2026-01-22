---
slug: 2026-01-22_zero123plus-intel-pytorch
authors: [weiji]
tags: []
---

# XPU 運行 Zero123++ 筆記 (Intel PyTorch)

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2026-01-22_zero123plus-intel-pytorch/04_ram-is-ram.webp" />
</head>

## 前情提要

[Zero123++](https://github.com/SUDO-AI-3D/zero123plus) 是第一個我想要自己跑得模型，它是一個「多視圖重建」模型，通常作為 「2D image to 3D model」的前置處理。

![](01_zero123plus.webp)

我對它有興趣有幾個原因，首先我對生成式 3D 模型有不小的興趣，對於獨立開發而言，經常使用基於 2D 的呈現方式，往往是受限於 3D 建模的成本高昂所致。

比起單純的文字提示詞生成，二維圖像生成三維模型具有有更高的可控性。在類神經模型領域，比起「one shot」我更喜歡將一個大問題切成數個小問題的方式，每個小問題都是單純的資料轉換過程，讓整體算法具有更高的透明度，以及更為可控的行為。並且正如我提到的，Zero123++ 是整個 「2D image to 3D model」 資料流 (pipeline) 的一個關鍵環節。

從高維度的資料萃取特徵，或是轉換成其他低微度資料，是一個不那麼有趣的過程。反之，「多視圖重建」本質是一個提高資料維度任務，因此是一個不適定問題 (ill-posed problem)，不知道為什麼我對這類問題反而比較興奮（？）

![](./02_wakuwaku.webp)

至於為什麼要「自己跑」呢？因為這種需求算不上特別普遍，不像 LLM 已經有不少雲端供應商可以拿 API 直接打，這種野雞模型幾乎只能自己想辦法。

BUT，要運行 Zero123++ 需要大約 5GB 的 vRAM，我手上支援 CUDA 的外接 GPU 只有 4GB，這也是為什麼它是我「想自己跑」而不是「自己跑過」的模型...

![](./03_vram.webp)

## RAM 就是 RAM

最近突然心想：

> vRAM 來 vRAM 去的，啊不然我的內顯也是顯卡唄，它有多少 vRAM？
>

於是我試著下了個指令：

```shell
$ glxinfo | grep -E -i 'device|memory'
    Device: Mesa Intel(R) Iris(R) Xe Graphics (RPL-P) (0xa7a0)
    Video memory: 23941MB
    Unified memory: yes
    GL_AMD_performance_monitor, GL_AMD_pinned_memory, 
    GL_EXT_framebuffer_object, GL_EXT_framebuffer_sRGB, GL_EXT_memory_object, 
    GL_EXT_memory_object_fd, GL_EXT_packed_depth_stencil, GL_EXT_packed_float, 
    GL_AMD_pinned_memory, GL_AMD_query_buffer_object, 
    GL_EXT_gpu_program_parameters, GL_EXT_gpu_shader4, GL_EXT_memory_object, 
    GL_EXT_memory_object_fd, GL_EXT_multi_draw_arrays, 
    GL_EXT_instanced_arrays, GL_EXT_map_buffer_range, GL_EXT_memory_object, 
    GL_EXT_memory_object_fd, GL_EXT_multi_draw_arrays,
```

恩？我什麼時候 vRAM 自由了？

學習了一下才知道 GPU 和 RAM 之間有著頻寬限制，於是 Nvidia 乾脆把 RAM 塞進 GPU 內變成 vRAM，高度整合帶來的優勢就是速度提昇。

但是我不管啊，我就窮啊，要我等可以等啊，明明就有 RAM 卻不給我跑是怎樣？

![](./04_ram-is-ram.webp)

## ZLUDA

當世界壟罩在 Nvidia 的 CUDA 的淫威（？）之下，我越想越覺得這個走向不太對勁，為什麼我想要跑個軟體需要被特定的硬體綁架？vRAM 不夠，請買更多？為什麼用低階設備跑的妥協不存在？

於是最近我其實默默的在蒐集「反 CUDA 對策」口袋清單：

- https://github.com/jgbit/vuda
  - 901 ⭐
- https://github.com/vosen/ZLUDA
  - 13.8k ⭐

VUDA 使用的是替換標頭檔的方式處理：

```cpp
#if defined(__NVCC__)
    #include <cuda_runtime.h>
#else
    #include <vuda_runtime.hpp>
#endif
```

但是這在已經編譯、打包好的 Python 環境顯得不太有效。

反觀，ZLUDA 的處理方式就簡單的多：

```shell
LD_LIBRARY_PATH="<ZLUDA_DIRECTORY>:$LD_LIBRARY_PATH" <APPLICATION> <APPLICATION_ARGUMENTS>
```

也就是直接用實做了 CUDA 界面的動態函式庫直接替換真正的 CUDA。

不過實際試過之後發現不能如預期的運行，調查了一下發現雖然 ZLUDA 自稱「CUDA on non-NVIDIA GPUs」，但是它的首要支援 (First class) 是 Windows + AMD。至於 Intel 嘛...翻來翻去才找到我要的解釋：

> Firstly, if you simply want those frameworks to run on an Intel GPUs, then ZLUDA might not be the best way. Deep Learning is quite high on the Intel priority list. Every major framework (certainly PyTorch, Tensorflow, MXNet, PaddlePaddle) has a dedicated team working on it to bring the best performance on CPU and GPU.
> ...
> cuDNN API is really massive, it is a lot of work[^ZLUDA-pytorch]
>

這才知道 Intel 本身就有在這方面做一些努力，並且工作量也十分龐大，因此 ZLUDA 專案並不優先處理這方面 (Intel) 的需求。

加上 ZLUDA 專案本身跟 AMD 就走得比較近，底層實做也高度仰賴 ROCm [^ZLUDA-amd]。

[^ZLUDA-pytorch]: Any plans for testing this with Pytorch/Tensorflow/mxnet? · Issue #17 · vosen/ZLUDA. https://github.com/vosen/ZLUDA/issues/17

[^ZLUDA-amd]:讓 IntelAMD GPU 直接跑 CUDA 程式的 ZLUDA – Gea-Suan Lin's BLOG. Retrieved 2026-01-22, from https://blog.gslin.org/archives/2024/02/13/11655/%E8%AE%93-intelamd-gpu-%E7%9B%B4%E6%8E%A5%E8%B7%91-cuda-%E7%A8%8B%E5%BC%8F%E7%9A%84-zluda/

## Intel Extension for PyTorch

- Intel Extension for PyTorch
  - 2k ⭐

有一些教學會說要安裝 oneAPI，一開始我也照做了，但是問題依然無法排除，直到我看到：

> When using torch-xpu from the PyTorch channel, **you do not need to manually source your oneAPI environment**. Instead, you can install it directly as follows:
>

所以關於 oneAPI 的東西我這裡就不提了。

而 Intel 官方的安裝指引則是如下[^intel-torch-install]：

```shell
python -m pip install torch==2.8.0 torchvision==0.23.0 torchaudio==2.8.0 --index-url https://download.pytorch.org/whl/xpu
python -m pip install intel-extension-for-pytorch==2.8.10+xpu --extra-index-url https://pytorch-extension.intel.com/release-whl/stable/xpu/us/
python -m pip install oneccl_bind_pt==2.8.0+xpu --index-url https://pytorch-extension.intel.com/release-whl/stable/xpu/us/
```

翻譯成 PDM 大概長這樣：

```toml
# pyproject.toml
dependencies = [
    "torch==2.8.0",
    "torchvision==0.23.0",
    "torchaudio==2.8.0",
    "intel-extension-for-pytorch==2.8.10+xpu",
    "oneccl_bind_pt==2.8.0+xpu",
]
[tool.pdm.scripts]
start.cmd = "python examples/img_to_mv.py"
start.env = { OverrideDefaultFP64Settings = "1", IGC_EnableDPEmulation = "1" }

[[tool.pdm.source]]
name = "pytorch"
url = "https://download.pytorch.org/whl/xpu"
include_packages = ["torch", "torchvision", "torchaudio", "pytorch-triton-xpu"]
exclude_packages = ["*"]

[[tool.pdm.source]]
name = "intel"
url = "https://pytorch-extension.intel.com/release-whl/stable/xpu/us/"
include_packages = ["intel-extension-for-pytorch", "oneccl_bind_pt"]
exclude_packages = ["*"]
```

這兩個環境變數則是用來修復 `UR error` 的問題[^ur-error]：

```shell
set OverrideDefaultFP64Settings=1
set IGC_EnableDPEmulation=1
```

最後成功花了 15 分鐘把這個：

![](./05_input.webp)

變成這個：

![](./06_output.webp)

[^intel-torch-noneed-oneapi]: `RuntimeError: UR error` with XPU · Issue #149953 · pytorch/pytorch. https://github.com/pytorch/pytorch/issues/149953#issuecomment-2753061883
[^intel-torch-install]: Intel® Extension for PyTorch* Installation Guide. Retrieved 2026-01-22, from https://pytorch-extension.intel.com/installation
[^ur-error]: RuntimeError: UR error on ADL-N with IPEX 2.5/2.6 using .to(torch.float16) · Issue #800 · intel/intel-extension-for-pytorch. https://github.com/intel/intel-extension-for-pytorch/issues/800#issuecomment-3166243912