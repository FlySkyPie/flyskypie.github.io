---
slug: 2025-10-06_a-idea-about-using-tiddlywiki-as-llmstxt
authors: [weiji]
tags: [homelab]
---

# 一種人類友善 `llms.txt` 構想

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/blog/2025-10-06_a-idea-about-using-tiddlywiki-as-llmstxt/img/00_cover.webp" />
</head>

## 前情提要

:::info
前情提要有點長，摘要如下：
- 我的開源專案口袋名單有很多專案等著我去探索，LLM (Large language model) 是一種潛在能協助我的工具。
- 我不傾向使用 LLM 來寫程式。[^oil-seller]
- 就算使用 LLM 產生文件也應該處於某種程度的控制。[^llm-and-robot-arm]
- 文件本身應該是 RAG 體系兼容或是 RAG 體系友善的。[^the-cornerstone-of-llm-system-rag]

[^llm-and-robot-arm]: LLM 與機械手臂的類比. Retrieved 2025-10-06 from https://flyskypie.github.io/posts/2025-09-09_llm-and-robot-arm
[^oil-seller]: 從賣油翁談「人寫程式」與「人寫提示詞讓 LLM 寫程式」的抉擇. Retrieved 2025-10-06 from https://flyskypie.github.io/posts/2025-10-06_oil-seller
[^the-cornerstone-of-llm-system-rag]: 回到一切的原點、LLM 系統的基石 - LLMs.txt、向量資料庫與 RAG. Retrieved 2025-10-06 from https://flyskypie.github.io/posts/2025-10-06_the-cornerstone-of-llm-system-rag
:::

### 閃亮事物

作為一個重度閃亮事物症候群患者，我的口袋名單裡有一堆「我想理解、我想修改」的開源專案，諸如：

- https://github.com/fogleman/Craft
  - 10.8k ⭐
  - 一個優雅的純 C 「Classic Minecraft」實做
- https://github.com/swift502/Sketchbook
  - 1.7k ⭐
  - 一個建構於 Three.js 之上的「迷你 GTA (Grand Theft Auto)」實做
- https://github.com/screeps/screeps
  - 3.2k ⭐
  - 一個用 Javscript 實做的「零玩家 RTS (Real-time strategy)」伺服器端實做
  - 客戶端是閉源的，並且在 Steam 上販售
- https://github.com/ill-inc/biomes-game
  - 2.6k ⭐
  - 一個（主要是） Typescript 實做的多人連線 Minecraft 風格遊戲
  - 該專案自從背後的開發商被 OpenAI 收購之後就被棄置了
- https://github.com/FlySkyPie/SweetHome3DTS
  - 我從 Sweet Home 3D 專案 fork 出來的版本
  - 從 「Java 佐 Javscript 實做」遷移到純 Typescript 實做
  - 大約還有七萬行的程序化生成程式碼需要重構、拆解。

:::info
「Classic Minecraft」是指非常早期的 Minecraft 版本，不包含血量、怪物...等生存要素，事實是網路上流傳很多工程師練手的開源「Minecraft Clone」 都是 Classic 版。
:::

### LLM

LLM 橫空出世，衝擊了產業生態，甚至公司內也開始推廣使用 Agent Coding，具體地說是使用 Cursor 寫程式。親自使用一段時間之後，加上公司內其他人的使用情況，我認為這不是正確的 LLM 使用方式。

### 用 LLM 來「寫文件」

同事使用 LLM 生成的數千行的垃圾文件讓我有感而發寫了一篇「[LLM 與機械手臂的類比](https://flyskypie.github.io/posts/2025-09-09_llm-and-robot-arm)」，簡單來說：忽略「人類大腦處理資料的能力是有限的」而讓大量生成式資訊灌入專案反而是一種精神傷害而沒有任何幫助。

### 用 LLM 來「寫程式」

LLM 用來產生「零到一」的範例程式碼確實方便，不過 LLM 有「自己造輪子」的傾向，在複雜的專案中它的表現不盡理想。從職涯規劃的角度，我也有感而發寫了一篇「[從賣油翁談『人寫程式』與『人寫提示詞讓 LLM 寫程式』的抉擇](https://flyskypie.github.io/posts/2025-10-06_oil-seller)」，簡單來說：手寫磨練自己的肌肉記憶或是用提示詞來逃避程式碼，我個人傾向選擇前者。

### `llms.txt` 的缺點

為了將資訊傳遞給 LLM，出現了像是 `repomix` 或 `gitingest` 這樣的工具，用來將其他型態的資料轉換成一個巨大的純文字檔案。這種檔案不只不適合人類閱讀，而且很容易超出 LLM 的上下文窗口，實際上依然需要透過切塊 (Chunk)、嵌入 (Embedding)、向量資料庫...等流程建立的 RAG 系統才能有效的使用這些資訊。

在嘗試使用了 AnythingLLM、Repomix 和 Gitingest 等工具之後，有感而發寫了一篇關於 `llms.txt` 的廢文「[回到一切的原點、LLM 系統的基石 - LLMs.txt、向量資料庫與 RAG](https://flyskypie.github.io/posts/2025-10-06_the-cornerstone-of-llm-system-rag)」。

## TiddlyWiki - 人類與機器通用的可攜格式

![](./img/00_cover.webp)

TiddlyWiki 的幾個特點剛好可以用來解決上述問題，TiddlyWiki 有兩種儲存資料的型態：

- 前端的 SPA 模式：單一 html 包含了資料以及 Tiddlywiki 本身的程式。
- 後端的 server 模式：每個條目(Tiddlers)可以獨立以檔案的形式存在。

在 SPA 模式下，它提供一種人類友善的可攜體驗，只要有網頁瀏覽器就能閱讀或編輯，無須安裝其他軟體。並且其「非線性閱讀」的特性可以大幅降低認知負荷，避免人類在上千行的文件穿梭。

在 server 模式下，條目(Tiddlers) 可以放在個別的檔案內，提供一個版本控制 (git) 友善的環境。更可以透過 HTTP API 對條目進行新增、修改、移除。

TiddlyWiki 的設計上，鼓勵不要在一個 Tiddler 放入過多的資訊，每個 Tiddler 都應該像便條紙一樣傳遞一個單一主題的資訊，如此設計除了有效的降低人類的認知負荷以外，更讓 Tiddler 成為 RAG 切塊絕佳的單元，大型單一文件進行切塊的風險就是可能切割在不理想的地方造成語意被破壞。

因此 TiddlyWiki 提供了一種可攜、適合人類而且同時適合機械的資料型態。