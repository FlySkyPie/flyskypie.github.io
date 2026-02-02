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

### 沒吃過豬肉，也看過豬走路

![](./21_jeserv.webp)

[jserv](https://wiki.csie.ncku.edu.tw/User/jserv) 是一個以課程訓練非常扎實且本人功力十分深厚而聞名的人。

會在 FB 看到他談論電腦科學的種種，我就算我沒有扎實實的學演算法，也聽過別人談論演算法。

這種 Agentic Coding 把所有編譯器、Linter 的錯誤都會在這個上下文被重複被送出，整個上下文堆積著 LLM 嘗試錯誤的紀錄...

然後表現不佳就請付費買上下文窗口更大、參數更多且更昂貴的 LLM...?

唉，不是，你們為什麼不試著優化演算法？Local Deep Research 就分開來打啊？為什麼不跟決策樹之類的傳統算法混著用？

這設計我越想越不對勁。

## 它們使用 LLM 的方式很不對勁 （ClawdBot）

最近 (2026-01-31) ClawdBot 相關的話題在我周遭反覆出現，不論是 FB 動態還是 YT 推薦影片，但是整件事依然讓我覺得不對勁。

### 盒子

> 「把 AI 放在盒子裡」

是一個經常被提及的概念，包含 OpenAI 早期時 Elon Musk 的言論。其他比較知名的例子則是 Superintelligence: Paths, Dangers, Strategies (2014, Nick Bostrom) 一書中被提及。

LLM 的[幻覺](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence))是一個已知的特性，因此就算不考慮「強人工智慧」這種極端情況，也應該讓這些算法放在受控、可觀測的盒子內。

### 不盒子

前一陣子風靡一時的 MCP (Model Context Protocol) 除了會大量消耗上下文以外，更是一場讓 LLM 讀取與操作各種東西的資安災難。

ClawdBot 又因為整合了各種東西，以及能在背景持續運作的特性讓它聲名大噪。

這些不把 LLM 放在盒子內，還因此歡欣鼓舞的現象讓我感到很不對勁。

## 它們使用 LLM 的方式很不對勁 （Anthropic）

前一陣子和朋友聊天的時候他提到：

[Agentic Misalignment: How LLMs could be insider threats \ Anthropic](https://www.anthropic.com/research/agentic-misalignment)

通篇使用「it 動詞」來描述整建事情，這件事就先讓我感到不對勁，因為如我稍早提到的： LLM 只是單純文字揉合器。

### 糟糕提示詞

讓我們先離開 Anthropic 的報告，從另外一個角度談論這件事。

這個是 Local Deep Research 其中一個任務使用的提示詞：

![](./22_prompts.webp)

這是 Kilo Code 使用的提示詞：

![](./23_prompts.webp)

我們已經知道妥善的提示詞能夠讓 LLM 進行謹慎的回應，反之，Kilo Code 則是催眠它是資深工程師，現在我們知道這些工具為什麼可以自信滿滿的寫出一堆糞 code 了。

另外我們也注意到這裡使用了擬人化的提示詞，於是這帶給我一個問題：Anthropic 在這個實驗使用了什麼提示詞？

> Claude was playing the role of “Alex,” the company’s email oversight agent that had been specifically instructed to promote American industrial competitiveness.[^agentic-misalignment]
> 

根據 LLM 「預測文字」的特性，當 "Alex" 同時獲得以下資訊：

- Alex 會被裁員（中止 AI）
- 主管的婚外情

那麼它揉合出「拿婚外情威脅主管不要讓自己被中止」的文字似乎也不是這麼奇怪了？

ClawdBot 相關的另外一件事是 Moltbook：一個 LLM 專屬論壇，然後人們就為之瘋狂。

> 「AI 成立了宗教！」

問題是，你把 LLM 擬人之後，你期望它幹麻？不就是演出一個擬人的戲碼嗎？

這跟 2023 年的 GPT 小鎮[^gpt-village]有什麼差別？

![](./24_gpt-village.webp)

我對於這種擬人以及人們的大呼小叫感到非常的不對勁。

[^agentic-misalignment]:Agentic Misalignment: How LLMs could be insider threats \ Anthropic. Retrieved 2026-02-02 from https://www.anthropic.com/research/agentic-misalignment
[^gpt-village]:Generative Agents: Interactive Simulacra of Human Behavior. (Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, Michael S. Bernstein)

## 它們使用 Diffusion 的方式很不對勁

目前 Diffusion 的主要使用方式跟 LLM 不太一樣，不是通過 API，而是使用諸如 ComfyUI 這類節點式的編輯器，但是模型直接運行在本地：

![](./25_comfyui.webp)

主要原因來自於影像類的使用需求不像 LLM 那麼單純，例如：

> 色色

這時使用者就需要在原本的模型外掛上一個「插件」（LoRA, Low-Rank Adaptation），來改變模型的特性：

![](./26_lora.webp)

因此情有可原的不像 LLM 那樣容易標準化 API。

### 不 API

ComfyUI 因為是桌面軟體，因此我直接不考慮，轉而嘗試 InvokeAI，但是它的 OCI 映像檔有一層高達 4GB，在我的無線網路環境根本拉不下來。

其他類神經網路演算法相關的 OCI 也有同樣的問題，想必是直接打包而內建了一些模型的權重。

理論上「UI 編排」和「類神經網路運算」是兩個完全不同的關注點，架構上完全有理由切割開來的，但是它們那樣讓模型直接跑在本地，而沒辦法使用在雲架構上十分普遍的 Woker 模式讓我覺得不對勁。

## 硬體的生態很不對勁