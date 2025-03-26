---
slug: 2025-03-26_rpg-maker
authors: [weiji]
tags: []
---

# RPG Maker MV 與 NW.js

週末買了 RPG Maker MV，然後不出意外的出意外了（Linux 使用者日常）：

```
Check failed: InitDefaultFont(). Could not find the default font
```

先講結論 RPG Maker MV 不管目標平台是什麼，都是輸出成 [NW.js](https://github.com/nwjs/nw.js) 程式，而 RPG Maker MV 內建的 NW.js 樣板版本太舊：

```shell
./nw --version
nwjs 65.0.3325.146
```

這個當下 (2025-03-26) 最新的 NW.js 是 `0.97.0`，照著網路上查到的資料[^discussions]，從 http://nwjs.io 下載 Normal 和 SDK 並且放到 `~/.steam/steam/steamapps/common/RPG Maker MV/` 之類的路徑下就能解決了：

- `/nwjs-lnx`
  - Normal NW.js
- `/nwjs-lnx-test`
  - SDK NW.js

兩者的差別是在編輯器按「測試」執行跟「發布」執行。

[^discussions]: [LINUX/MV 1.6.2] Fresh Install with new project and play test button doesn’t work :: RPG Maker MV Tech Support. Retrieved 2025-03-26 from https://steamcommunity.com/app/363890/discussions/1/2653116024334677568/#c2653116235598796183

## NW.js

NW.js 一個類似於 [Electron](https://github.com/electron/electron) 用「寫網頁的方式製作桌面應用程式」的工具，不過兩者實做的方式不太一樣，我先不在這邊做比較。

NW.js 專案提供了一個 `nw.exe` 執行檔（和一些動態函式庫），而這個執行檔就像是 Chromium 和 Node.js 的奇美拉，只是 Node.js 會去找 `app,js` 而 `nw` 會去找 `index.html` 來執行，看似跑在 Chromium 瀏覽器上卻又能解析 Commonjs 的 `require()` 和 Node.js 的核心模組。發布應用程式的時候就是把 `nw.exe` 和 Javascript 以及其他網頁 assets 打包給使用者。

## RPG Maker MV

另我驚訝的是當輸出專案時，所有在編輯器完成的調整都會變成 JSON 組態，遊戲程式則是 Javascript 明碼，連混淆都沒有！我甚至可以直接看到它繪圖的基礎是使用 [PixiJS](https://github.com/pixijs/pixijs) 完成的。雖然程式碼裡面充滿了 `prototype` 之類的古早味語法就是了。
