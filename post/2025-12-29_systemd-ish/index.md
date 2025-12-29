---
slug: 2025-12-29_systemd-ish
authors: [weiji]
tags: [systemd]
---

# 從 Docker 開始的 Systemd 小宇宙

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2025-12-29_systemd-ish/00_cover.webp" />
</head>

作為一個網頁前端導向的開發者，接觸 Systemd 的角度較資深一輩的工程師（或正規 CS (Computer Science) 路線出生的人）不太一樣，當前輩們已經在進行「Systemd 大一統」跟「No Systemd」之間的宗教戰爭的時候，我才在 Docker 容器內接觸內接觸第一個行程的問題 (PID 1 Problem)。

這裡紀錄並整理一下自己在這條路上的一些經歷和觀察。

:::info
正確的術語應該是 OCI (Open Container Initiative) 容器，不過為了方便溝通本文會視情況使用俗稱的 Docker。另一方面，筆者在學習過程確實是先使用 Docker，使用 Docker 以外的 Runtime 其實也只是不久之前的事。
:::

## `Dockerfile` 中的 `ENTRYPOINT` 與 `CMD`

實際上 `ENTRYPOINT` 才決定了第一個行程 (Process) 是誰，`CMD` 只是後面被帶進去的參數。

有沒有經歷過 `docker compose down` 但是某個服務 (service) 卻遲遲沒有被關閉，整個過程停頓了一會兒才把整套服務簇釋放掉？

這十之八九是因為 `ENTRYPOINT`  沒有處理 `SIGTERM` 的能力造成的，開發環境或許不打緊，但是在生產環境如果有請求 (request) 掛著還沒處理完，然而容器被更新強制關閉的話，帶來的問題是十分致命的。

## 容器編排 (Container Orchestration)

在 Docker Compose 允許用 YAML 將多個容器組織起來構成服務簇，並且使用 `depends_on` 來設定仰賴關係並控制容器的啟動順序、`restart` 來設定重啟策略、`healthcheck` 判斷容器狀態。

:::info
一個 service 其實可以設定多個容器（透過 `replicas` 或是 `scale`），不過為了簡化描述我在上面並沒有直接指出。
:::

## 多個 Process 的容器

:::info
以下不少經驗來自工作上面對的問題，專案細節就不透漏了。
:::

第一次遇到這樣的需求來自業務上的要求：

> 將調用 SideFX Houdini 的 Python 伺服器容器化
> 

它要求運行一個授權伺服器 (License Server)，透過 Python 載入的 SDK 和這個伺服器之間會定時檢查彼此的存在。當時簡單使用 `entrypoint.sh` 、`&` 語法和 `sleep` 把兩個行程跑了起來。

---

後來遇到另外一個需要解決的問題：

> LibreOffice 作為一個無頭 (headless) 伺服器運作。
> Python 程式使用 UNO (Universal Network Objects) 界面與之溝通。
> 佈署在單一容器的 Serverless 雲環境，因此只能有一個容器。
>

這次我使用了 Supervisor 來解決問題[^Supervisor]。

---

接下來的案例是真正讓我將 「Docker 內的 PID 1 問題」與「主機上的 PID 1 問題」連在一起的關鍵：LinuxServer.io。

Blender 是一個面向 3D 設計師的軟體，它是 Maya 或 3ds Max 這類軟體的開源競爭者。LinuxServer.io 使用了某種黑魔法允許 Blender 被運行在容器內，使用者則透過去網頁瀏覽器與之互動，並且 Blender 並不是唯一被這樣操作的軟體，除此之外 LinuxServer.io 還封裝了各種 GUI 軟體到 Dokcer 容器內。

LinuxServer.io 使用已經存在的實作 (KasmVNC) 來達成這些目標，不過魔法的關鍵在於：

> 使用 s6-overlay 運行與管理包含 X Server 在內的多個程式。
>

[s6-overlay](https://github.com/just-containers/s6-overlay) 不只能夠啟動多個程式，還能聲明程式與程式之間的仰賴關係，來依序啟動，甚至區分了「執行一次」和「持續在背景運作」的程式。

:::info
因為不是本文重點，所以我沒有細談整個過程，大致上就是根據那個 Blender 容器的文件與原始碼找到實作的方式，留下 repo 供參考：
- https://github.com/linuxserver/docker-blender
- https://github.com/linuxserver/docker-baseimage-kasmvnc
:::

[^Supervisor]: 使用 Supervisor 來管理程式 | 《Docker —— 從入門到實踐》正體中文版. Retrieved 2025-12-29, from https://philipzheng.gitbook.io/docker_practice/cases/supervisor

## 嵌入式 Linux 中的 `/etc/init.d/rcS`

我曾經在嵌入式 Linux 看到這樣的東西：

```shell
$ ls /etc/init.d
rcK  rcS  S01syslogd  S02klogd  S02sysctl
```

當時我也根據需求寫了一個簡單的 `S03sdmnt` 腳本來掛載 SD 卡。

後來才知道這是根據 System V Init 簡化後的設計。

:::info
完整的故事跟細節我有寫另外一篇文章描述：

https://flyskypie.github.io/blog/2022-12-03_3ds_linux_javascript_bad_apple/
:::

## Systemd 口味的容器編排軟體

Quadlet 是我試著轉向使用 Podman 得知的東西，雖然最後我並沒有用過就了，而是使用 [Podman Compose](https://github.com/containers/podman-compose)，省得還要另外維護一份語法不一樣的東西。

下面是 Quadlet 聲明一個服務的例子[^podman-orchestration]：

```ini
[Unit]
Description=A minimal container

[Container]
# Use the centos image
Image=quay.io/centos/centos:latest

# In the container we just run sleep
Exec=sleep 60

[Service]
# Restart service when sleep finishes
Restart=always

[Install]
# Start by default on boot
WantedBy=multi-user.target default.target
```

[^podman-orchestration]: 在 Podman 管理多個 container • 鰭狀漏斗. Retrieved 2025-12-29, from https://vrabe.tw/blog/manage-multi-containers-in-podman/

## 從領域驅動（Domain-driven）的角度來看這件事

不難發現上述不同的工具都在解決幾個類似的問題：

- 系統初始化（啟動與關機），如：掛起背景程式。
- 根據背景程式的仰賴關係依序掛起，如：應用程式仰賴資料庫。
- 處理背景程式的異常狀態，如：崩潰重啟。

這些問題構成的問題領域 (Problem Domain) 可以被定位為系統初始化 ([System Init](https://en.wikipedia.org/wiki/Init)) 和行程管理 ([Process Supervision](https://en.wikipedia.org/wiki/Process_supervision))。

而上述工具則是這個 Problem Domain 對應的解決方案領域 (Solution Domain)。

Systemd 則是這個 Solution Domain 中最有名的工具之一。
