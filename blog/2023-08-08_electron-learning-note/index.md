---
slug: 2023-08-08_electron-learning-note
authors: [weiji,]
tags: [learning note, javascript, Electron ]
--- 

# Electron 學習筆記 - IPC

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/blog/2023-08-08_electron-learning-note/img/01_electron-ipc-api.webp" />
</head>

行程間通訊 (IPC, Inter Process Communication) 是兩個行程（或以上）或執行緒間傳送資料或訊號的一些技術或方法。 如果有在 Node.js 玩過 `child_process` 模組的 [spawn](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options) 或是使用過 Web API 的 [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) 的話，應該對如何在 Javascript 中使用複數行程 (process) 並不陌生。

## 區塊之間的通訊方式一覽

在[前一篇文章](/blog/2023-04-01_electron_learning_note_intro)提到，在 Electron 中 Render 和 Main 彼此之間是獨立的，必須透過 Preload 和 API 來實現兩者之間的溝通。參考了官方的範例程式碼以及一篇文章[^electron-ipc]之後，整理成一個圖表：

![](./img/01_electron-ipc-api.webp)

[^electron-ipc]: [ Day 9 ] - 動物聊天室(二) - IPC 與訊息交換 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天. Retrieved 2023-08-08, from https://ithelp.ithome.com.tw/articles/10235110

## 後記

這篇文章原本在 2023-04-05 就已經寫好草稿了，沒想到完全忘記這篇還沒歸檔，然後圖表的 SVG 也已經刪掉了。

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji 以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。