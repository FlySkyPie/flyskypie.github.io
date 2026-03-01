---
slug: 2026-03-01_programming-paradigm
authors: [weiji]
tags: []
---

# 軟體工程層級

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2026-03-01_programming-paradigm/00_cover.webp" />
</head>

我發現網路上一些對於軟體工程範式 (Paradigm) 的討論，對於上下文邊界的設定十分模糊，於是稍微整理一下我看待這個問題的模型。

## 如何撰寫程式語言?

了解如何撰寫程式碼語法，例如以下是「如何撰寫 C++？」

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, world!\n";
}
```

## 如何使用程式語言?

了解特定程式語言的工具鏈，例如以下是「如何使用 Javascript？」

```md
1. Javascript 有至少兩種 runtime：Node.js 和 Web
2. 想要使用套件必須透過 npm, pnpm, yarn 從 `registry.npmjs.org` 下載。
3. 使用 nvm 管理不同的 Node.js。
4. 使用諸如 vite 或 webpack 之類的工具打包專案。
```

## 如何組織 (organize) 程式語言?

了解如何切割程式碼，例如：

- 設計模式
  - 工廠模式
  - 管線模式
  - Facade 模式
  - Adapter 模式
  - etc
- OOP (Object-oriented programming)
- ECS (Entity component system)
- Rich Domain Model
- Anemic Domain Model
- ORM (Object-Relational Mapping)

即處理「程式碼等級的架構問題」。

## 如何編排 (orchestration) 軟體?

了解如何切割軟體模組，例如：

- 前後端分離
- 職責分離成多個函式庫
- Server-Client 架構
- Controller-Worker 架構

即處理「軟體如何被使用、佈署、運行的架構問題」。

## 如何驅動軟體開發？

了解「產生程式碼」其實處於軟體工程的下游，並且決定要用什麼東西當作上游的「單一事實來源」來驅動軟體開發，例如：

- TDD (Test-Driven Development)
- BDD (Behavior-Driven Development)
- DDD (domain-driven design)
- SDD (Specification-Driven Development)

---

## 這個軟體需求是否存在已知供給？

了解到解決問題最好的方法可能不是寫程式（開發軟體），面對需求時先問一個問題：

> 這個需求是否已經被解決過了？

### E2E 解決方案

市場或生態系上是否已經存在完整的 E2E 解決方案？例如：

- 電子商務 -> Shopify 或其他類似方案。
- CMS (content management system) -> WordPress 或其他類似方案。
- 試算表軟體 -> LibreOffice 或其他類似方案。
- 專案管理 -> OpenProject 或其他類似方案。
- etc.

### 軟體解決方案

市場或生態系上是否已經存在解決部份問題的軟體（E2E 以下；函式庫以上）？例如：

- RDBMS (relational database management system) -> MySQL 或其他類似軟體。
- NoSQL 資料庫 -> MongoDB 或其他類似軟體。
- Authentication -> Keyclock 或其他類似軟體。
- Authorization -> OpenFGA 或其他類似軟體。
- 影音編解碼 -> FFmpeg 或其他類似軟體。
- etc.

### 函式庫解決方案

市場或生態系上是否已經存在程式碼實作？例如：

- Material Design -> `mui/material-ui` 或其他類似函式庫。
- 影音編解碼 -> GStreamer
- WebGL 抽象化 -> Three.js
- etc.

### 部份引用

即便不直接使用上述解決方案，依然可以參考該解決方案的已經存在的：

- 領域模型
- 程式碼
- 界面設計
- 軟體架構
- 程式碼架構
