---
slug: 2025-06-17_devpi
authors: [weiji]
tags: [homelab, pypi, python, mirror, proxy, cache]
---

# PyPI 快取、鏡像 - devpi

最近在 Homelab 架了一個 PyPI 快取伺服器，選擇使用 `devpi`：

- https://github.com/devpi/devpi
  - 1k ⭐

Docker 映像檔則是使用：

- https://github.com/JonasAlfredsson/docker-devpi
  - 41 ⭐

然後遇到了一個怪問題，在這邊隨便紀錄一下：

```
INFO  [IDX] Committing 2500 new documents to search index.
[IDX] Error during indexing in /usr/local/lib/python3.13/site-packages/devpi_web/whoosh_index.py:401:handler whoosh.index.LockError
```

症狀就是服務長時間佔用 CPU 長達一、兩天，連進去容器下 `top` 看到一堆像是殭屍的 process（實際上暫用 CPU 的只有一個）。

最後只保留 `/+files` 這個資料夾、把其他快取的檔案刪掉再啟動伺服器就正常了。看起來像是 `devpi` 會下載整個 PyPI 的索引資料，但是同步完成前有什麼錯誤造成檔案損壞後無法從錯誤中恢復過來，所以一直保持「下載與處理索引」的狀態佔用 CPU。
