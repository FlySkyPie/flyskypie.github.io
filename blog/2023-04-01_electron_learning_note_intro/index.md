---
slug: 2023-04-01_electron_learning_note_intro
authors: [weiji,]
tags: [learning note, javascript, electron ]
--- 

# Electron 學習筆記 - 概敘

<head>
  <meta property="og:image" content="https://i.imgur.com/YNYYp47.png" />
</head>

![Electron in the frontend roadmap](./img/electron-in-the-frontend-roadmap.webp)

Electron 可以說是前端軟體工程師必學的經典工具之一 (2023 年)，也是我個人有興趣學習的主題之一，只是一直缺乏明確的動機或目的去使用它，直到那天 (2023-03-30) 協助友人改善他 Side Project UI，同一天另外一個朋友又剛好問我 Electron 的問題，看來這是要我學習 Electron 的天意啊（？）

稍微試了幾個專案樣板，然後讀了一點官方文件，我稍微整理出它的架構：

![](./img/architecture.svg)

這裡有幾個知識點最好在學習 Electron 之前先知道：
- Javascript 是一種程式語言，但是它的直譯器不只一種
- 瀏覽器上的 Javascript 執行環境和 Node.js 的執行環境不同
- 在瀏覽器上開發者可以用 Javascript 使用 Web API (`window.*`, `CSS`, `DOM`...等)和 ES Module (符合 ES6 規範的 Javascript 模組)
- 在 Node.js 上開發者可以使用 Node.js 的內建模組 (`fs`, `os`, `path`...等)和 NPM 上提供的 CommonJS Module
- 在瀏覽器上 Javascript 沒有權限進行一些涉及作業系統的操作，如：對檔案系統進行讀寫

然後我整理了幾個關於 Electron 的知識點整理：
- Electron 應用程式分成兩個區塊
  - 瀏覽器（基於 Chromium）
  - Node.js
- 兩個區塊彼此獨立
  - Main Process 不能操作 DOM
  - Render Process 不能使用 Node.js 模組讀寫檔案系統或是 spawn 子行程
- 一個應用程式可能有複數個視窗
- Preload Prcess 能夠同時訪問瀏覽器區塊和 Node.js 區塊
  - 我們可以把原本被隔離的兩個區塊曝露部份操作給彼此
  - 透過 Electron 提供的 IPC API

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。