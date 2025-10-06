---
slug: 2025-10-06_the-cornerstone-of-llm-system-rag
authors: [weiji]
tags: [LLM]
---

# 回到一切的原點、LLM 系統的基石 - `LLMs.txt`、向量資料庫與 RAG

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2025-10-06_the-cornerstone-of-llm-system-rag/00_cover.webp" />
</head>

:::info
標題主要是描述我的主觀體驗的時序，讀者不需要在意。
:::

## RAG (Retrieval-augmented generation)

LLM 除了「幻覺問題」以外，令一個毛病是：LLM 會過期，訓練完成後定型的權重無法包含訓練之後發生的事情或知識，它就像電影「我的失憶女友 (50 First Dates, 2004)」中的角色；一個順行性失憶症患者，時間被凝固並困在某個時間點的人。

並且訓練與微調 LLM 模型的成本十分高昂，而 RAG 的架構是讓 LLM 真正進入實用化的推手，概念很簡單：把最新或正確的資訊跟使用者的疑問句一起放在輸入，經過 LLM 將文字揉捏之後就能得到最新或是正確的回答了。

### 向量資料庫 (Vector Database)

向量資料庫是 RAG 系統內很重要的一個組件，跟傳統資料庫不一樣的是，傳統資料庫通常仰賴 id 來索引資料，但是向量資料庫則是用一組向量（aka 一堆數字）來索引資料。透過嵌入這個動作（通常由一種不是 LLM 的類神經模型處理），我們可以把一團字變成一團數字，例如：

`[一團字]` → （嵌入） → `[1,2,3...](一團數字)`

接著我們可對另外一團字做一樣的事情：

`[另外一團字]` → （嵌入） → `[4,5,6...](另外一團數字)`

接著我們就可以計算兩團字的距離：

$$
距離 = F(一團數字, 另外一團數字)
$$

當向量資料庫儲存了一堆字團跟數字，我們拋出一個一團，就能用這團字找到另外一團「最接近」的字。

## Agent Coding

透過將 LLM 與 IDE (Integrated Development Environment)，人們透過聊天視窗的形式輸入描述，就能看到 LLM 作為「Agent」在 IDE 上揮灑出程式碼，後來甚至衍生出「Vibe Coding」一詞，並刮起了一陣席捲軟體開發產業的旋風。

## MCP (Model Context Protocol)

MCP 提供了一套更適合 LLM 呼叫的界面，很多人用「LLM 的 USB」來形容它，人們可以透過 MCP 提供一系列工具給 LLM 呼叫，包含讀取的：讀檔案、讀文件、讀網頁、讀 API...；包含寫入的：新增檔案、編輯檔案、操作 git、操作 SQL 資料庫...

## Ask 模式

這些 Agent Tool 除了「Agent 模式」讓 LLM 能夠幫你寫程式以外，通常也有內建「Ask 模式」，也就是鎖定寫入相關的功能，讓人可以「問」關於專案下的問題，不過索引的效果並不是很理想而且容易滿出 LLM 的上下文窗口。

## Context7 MCP

最早我是因為公司內部推廣而得知這東西的存在，簡單來說它會告訴 Agent 「這裡有一個 MCP 可以查詢函式庫的用法，你不知道的話可以問我」，適合用來處理較新的軟體開發環境，比如在網頁前端領域尤其有效。

它的運作方式是輸入一個 GitHub 程式庫的連結，它會去拉取、搜尋文件相關的檔案（如：`.md`,`.mdx`...）並且壓成一個像是這樣的純文字資料準備給 LLM 使用：

```
================
CODE SNIPPETS
================
TITLE: Quickstart Cypress Setup with create-next-app
DESCRIPTION: Use `create-next-app` with the `with-cypress` example to bootstrap a new Next.js project with Cypress already configured. This is the fastest way to get started.

SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/testing/cypress.mdx#_snippet_0

LANGUAGE: bash
CODE:
\```
npx create-next-app@latest --example with-cypress with-cypress-app
\```

--------------------------------

TITLE: Example `create-next-app` Interactive Prompts
DESCRIPTION: An example of the series of questions asked by the `create-next-app` CLI during the interactive setup process. It covers project naming, language choices, tooling, and directory structure.

SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/01-installation.mdx#_snippet_2

LANGUAGE: text
...
```

而 MCP 的作用就是當它被 Agent 呼叫時，就從這份文件抽出一些資訊回傳給 Agent。

我當時就有留意到這個工具並沒有開源而抱有警覺，不出所料，最近打開它的網站時發現已經不能匿名登記新的 Git 程式庫了，必須要登入。

## 其他替代方案

雖然我不喜歡用 LLM 寫程式[^oil-seller]，但是當進入專案時，透過某方式能夠快速掌握專案的情況對我而言確實是一個需求。於是我開始尋找一些類似的方案。

### 嵌入體系

- https://github.com/Mintplex-Labs/anything-llm
  - 49.7k ⭐

AnythingLLM 能夠「從 GitHub 匯入程式庫」，不過更接近：瀏覽一個程式庫然後選擇一些檔案進行嵌入（並儲存到向量資料庫），實際上它不像 Context7 有預處理能力。

### 打包體系

- https://github.com/yamadashy/repomix
  - 19k ⭐
- https://github.com/coderamp-labs/gitingest
  - 12.2k ⭐ 

這些工具能夠將給定的 GitHub 程式庫「打包」成單一純文字檔，但是實際上就是黏貼所有程式碼，再加上一點 markdown meta 做修飾，老實說，這種事情 Grunt 或 Gulp 之類的工具也能做。

## `LLMs.txt`

狹義來講 `LLMs.txt` 是 `robots.txt` 的 LLM 版[^llms-txt]，也就是介紹網站給 LLM 看的純文本文件。

廣義來講 `LLMs.txt` 是指各種經過「純文本化」處理；為了要給 LLM 使用的文字檔[^langchain-llms-txt]，比如： Context7 對外可見的文本或是 Repomix/Gitingest 之類工具生成的檔案。

如果直接使用 `LLMs.txt` 則很容易超出 LLM 的上下文窗口，要嵌入使用的話反而多了一道切塊 (chunking) 的步驟，可能製造更多問題。

推測 Context7 背後的實作很有可能還是向量函式庫，才能在 MCP 進行檢索的時候抽出相關的資訊塊。

## 回歸原本 - RAG

反思 `LLMs.txt` 的問題之後，回過頭來看現在常見的開發架構：

```
LLM <- Agent Tool -> MCP -> Context7 -> Vector Database
```

唉，這不就還是 RAG 系統嗎？只是多了一些絢麗的詞彙包裝而已。

2024 年初為了幫公司的專案進行規劃，開始學習 LLM 系統，當時因此認識了 RAG 系統。幾個月後 MCP 橫空出世、Vide Coding 成為顯學；

「當時的寫的計畫已經過時了」老闆說道，

但是問題的本質其實並沒有改變得太多。

[^oil-seller]: 從賣油翁談「人寫程式」與「人寫提示詞讓 LLM 寫程式」的抉擇. Retrieved 2025-10-06 from https://flyskypie.github.io/posts/2025-10-06_oil-seller
[^llms-txt]: The /llms.txt file – llms-txt. Retrieved 2025-10-06 from https://llmstxt.org/
[^langchain-llms-txt]: llms.txt. Retrieved 2025-10-06 from https://langchain-ai.github.io/langgraph/llms-txt-overview/