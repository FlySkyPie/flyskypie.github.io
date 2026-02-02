---
slug: 2026-02-02_llm-using-approach
authors: [weiji]
tags: [LLM]
---

# 個人關於如何佈署與使用類神經演算法的一些想法

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2026-02-02_llm-using-approach/00_cover.webp" />
</head>

整個想法其實建立在一個有點複雜的上下文之上，為了避免失焦，我先把結論放在文章前面，中間再補充上下文，最後再回來看整個想法是怎麼建立起來的。

## 一種 LLM 佈署策略與架構

原本是針對 LLM (Large language model) 構想的，不過套用到 SD (Stable Diffusion) 或其他體系的類神經演算法大概也差不多。

### Serverless

拜容器化技術與 OCI (Open Container Initiative) 映像檔的標準化所賜，交付、佈署到運行網路應用程式（通常是 HTTP 伺服器）的流程變得非常容易。

雲端服務業者甚至能夠在沒有人使用服務的時候關閉容器，或是在流量變大的時候動態增加容器的數量來應付需求，這就是 Serverless。

### Serverless Function

但是啟動 OCI 容器需要載入 OCI 映像檔、運行程式完成初始化直到到待命才能開始處理任務，這段時間被稱作冷啟動時間 (cold start time)。OCI 映像檔越大、程式越複雜這個時間就越久。

於是開始出現一種雲端服務是開發者直接佈署幾個函式，而不是寫一整個完整的程式，例如：

```javascript
exports.helloHttp = (req, res) => {
  const msg = (req.body && req.body.message) || 'Hello World!';
  res.status(200).send(msg);
};
```

這個就是 Serverless Function。而 Serverless 是我認為最適合佈署 LLM 應用程式（與其產物）或其他模型的型態。

:::info
Serverless Function 不見得由 OCI 容器實現，但是不少雲端業者的 Function 服務是由 OCI 容器實現的。
:::

### 盒子與製造盒子的盒子

Serverless 能夠打包一個簡單的服務並且佈署成 API 供其他人使用，這個「可以運算某種任務的東西」就像一個盒子，而這是一個傳統算法的盒子：

```javascript
exports.helloHttp = (req, res) => {
  const msg = (req.body && req.body.message) || 'Hello World!';
  res.status(200).send(msg);
};
```

這是一個使用了 LLM 的盒子：

```javascript
exports.helloHttp = async (req, res) => {
    const msg = (req.body && req.body.message) || 'Hello World!';
    const url = "http://awesome-tensorzero-service:8123/openai/v1/chat/completions"
    const headers = {
        "Authorization": `Bearer ANY`,
        "Content-Type": "application/json"
    }
    const payload = {
        "model": "tensorzero::model_name::openrouter::openai/gpt-oss-20b",
        "messages": [
            { "role": "system", "content": "You are a prompts builder." },
            { "role": "user", "content": msg },
        ],
        "modalities": ["text"],
    }

    const result = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
    }).then(r => r.json());


    res.status(200).send(result.choices[0].message.content);
};
```

如此一來你就可以用 LLM 製造盒子或是使用 LLM 的盒子，而盒子本身也可以是一個盒子工廠。

### Knative

我預計使用 Knative 作為這套架構的實現方法。Knative 是一個基於 Kubernetes 運行 Serverless 的工具，同時也是 Google 的 Serverless (GCP Cloud Run) 的基礎技術。


## LLM 的本質

接下來我要解釋上面提到的架構是建立在什麼樣的基礎之上。首先先讓我們來談談 LLM。

作為一般的 App 開發者或是使用者，其實不用知道這個：

![](./01_transformer.webp)

只要有個基本概念就好：

![](./02_llm.webp)

舉例來說 LLM 捏出來的東西就像飯糰，如果你不提供餡料（上下文），你就會的到一顆沒有料的飯糰（幻覺）。

你想解決這個白白的飯糰食之無味的問題，就要給它肉鬆、酸菜、滷蛋、油條...等等餡料（問題的答案、函式庫的用法...等等）。

你**不能**把 LLM 當成一個有智慧的東西，它只是一個揉文字的手手。

我使用「揉合」來譬喻的原因來自於 LLM 的另外一個特性：它擅長把答案跟問題揉在一起得到一個漂亮的答案，但是它不擅長處理當你一次給它一堆問題而需要一次獲得多個答案的情況。

就像你把鹽巴跟水混在一起很容易，但是要分離卻很難一樣。

另外一點，LLM 處理事情是一次性的，它本身沒有記憶功能，只是單純的把一團文字揉成另外一團文字，只是如果原料裡面包含對話紀錄，揉出來的文字就像是針對對話紀錄的回應產生有「記憶的效果」，但是效果歸效果，不代表它的本質有記憶，就像藝人上節目哭哭啼啼做效果，不代表它真的怕被噴乾冰。

## OpenAI API

![](./03_llm.webp)

![](./04_llm.webp)

那個插座就是 OpenAI API，它跟 S3 (Amazon Simple Storage Service) 的發展模式很接近：

雖然是由特定企業設計並使用，但是已經成為實質工業標準；並且同樣是 HTTP 界面。

因此對於 app 開發者而言，OpenAI API 幾乎就是 LLM 本人：

![](./05_openai-api.webp)

界面的標準化意味著，LLM 實質上變成一個可以抽換的組件，這讓應用程式可以根據需求任意切換成不同的閉源或開源（開放權重）模型。就像遙控器的四號電池你要買國際牌或 GP 牌的都可以。

## Local Deep Research

- https://github.com/LearningCircuit/local-deep-research
  - 3.9k ⭐

Local Deep Research 是一個開源且類似替代 Perplexity AI 方案的軟體，同時也是我認為接近使用 LLM 標準答案的軟體，我想挑幾個面向出來講：

1. OpenAI API
2. 分段處理
3. 提示詞

不過在那之前我先簡單說明一下 Local Deep Research 的使用方法，它有簡答模式與深論模式之分：

![](./10_local-deep-research.webp)

送出問題之後它會使用搜尋引擎試圖找資料來回答問題，最後得到一份報告：

![](./11_local-deep-research.webp)

### OpenAI API

正如我稍早說的，OpenAI API 已經成為實質工業標準，遵守這個似乎並沒有特別值得稱讚。

但是事實上仍然有不少垂直整合的應用程式是和自家的閉源 LLM API 高度綁定，不允許使用者透過 OpenAI API 切換成其他開源（開放權重）模型，形成供應商鎖定。

### 分段處理

以簡答模式模式為例，一次詢問任務會被拆成 4 次 LLM (OpenAI API) request：

![](./06_local-deep-research.webp)

![](./07_local-deep-research.webp)

![](./08_local-deep-research.webp)

![](./07_local-deep-research.webp)

每次 request 的目的不太一樣。

稍微補充一下，可以設定更多搜尋迭代次數，但是我沒用過，因為大於一需要忽要嵌入模型 (Embedding Model)，但是它的嵌入模型目前跟 Ollama 榜定而不支援 OpenAI API，Issue 追蹤在此：

[Is there any chance of having external embedding and reranking support? · Issue #374 · LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research/issues/374)

:::info
Embedding Model 是一種把一團字轉換成一組向量的模型，在搜尋跟分類文字傾向很有用，例如「這是跟釣魚有關的一團字」或是「這是很悲傷的一團文」。
:::

### 提示詞

LLM 是出了名的的會瞎掰、唬爛，但是你猜猜我得到了什麼：

![](./12_local-deep-research.webp)

![](./13_local-deep-research.webp)

![](./14_local-deep-research.webp)

它使用 `openai/gpt-oss-20b` 並不是一個有多特別的模型，為什麼？提示詞。

![](./15_local-deep-research.webp)

> Reflect information from sources critically based on: **Factual‑consistency audit of the 63 listed sources**  
*(Sources without a description were omitted from the analysis.)*  

適當的提示詞工程可以讓 LLM 給出比較謹慎的回應。

:::info
在搜尋結果沒有切合主題的時候，LLM 依然會答非所問，但是依然有「參考出處」的清單可以作為審計的最後一個保險。
:::

## 它們使用 LLM 的方式很不對勁 （Kilo Code）

我解釋完我心目中的「正確答案」了 (Local Deep Research)，這樣你可能就比較能體會我覺得的「不對勁」是哪裡來的。

接下來我以觀察 Kilo Code 的部份為例，它以安裝在 VS Code 的插件的形式來操作 IDE，也就是俗稱的 

### Agentic Coding 運作的基本原理

首先，我要解釋在 OpenAI API 的設計，它的輸入資料就像是一個對話歷史紀錄：

![https://flutterawesome.com/flutter-chat-bubble-speech-bubble-widgets/](./17_chat-bubble.webp)

只是對話紀錄其實還隱藏一個你看不到的角色：

![](./16_openai-api.webp)

於是當你在 IDE 輸入一些內容的第一次 request 長得像這樣：

![](./18_agentic-coding.webp)

原本聊天機器人應該是人類問，機器人答，但是這裡它巧妙的透過 System 提示詞讓 LLM 的答案變成一種請求，然後由 IDE/插件來回答它：

![](./19_agentic-coding.webp)

這個過程會持續進行，直到 LLM 發送一個「完成任務」的請求。

### 不分段處理

因此當你在 Agentic Coding 工具送出一個任務，會變成這樣 N 次的 LLM 請求：

![](./20_agentic-coding.webp)

為了簡化運算，我們假設每一個文字塊大小相同，會發現這是一個等差數列，而等差數列的合為多少？

$$
{\displaystyle {\begin{aligned}S_{n}&={\frac {n}{2}}\,(a+a_{n})\\&={\frac {n}{2}}[2a+(n-1)d]\\&=an+d\cdot {\frac {n(n-1)}{2}}\end{aligned}}}
$$

因此完成一次任務所需要的 LLM request 複雜度是 $O(n^2)$。

所有編譯器、Linter 的錯誤都會在這個上下文反覆被送出

## 它們使用 LLM 的方式很不對勁 （ClawdBot）

### 盒子

## 它們使用 LLM 的方式很不對勁 （Claude）

### 糟糕提示詞


## 它們使用 Diffusion 的方式很不對勁


## 硬體的生態很不對勁