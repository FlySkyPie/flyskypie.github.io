---
slug: 2026-09-06_openhands-review
authors: [weiji]
tags: [Agent, OpenHands, ReAct]
---

# 圖解 OpenHands

這篇文章並不是針對 OpenHands 準備的，只是在一個調查過程剛好輪到 OpenHands 作為調查對象時產生比較多的結果，於是想說難得都跑起來了，稍微對 OpenHands 進行更多觀察然後紀錄一下好了。

## 前因

我使用 Agnetic Coding 工具的歷程是從 VSCode 開始的，畢竟我就是個 GUI 仔，先後嘗試了 [Cline](https://github.com/cline/cline) 和 [Kilo](https://github.com/kilo-org/kilocode)，我沒有很喜歡專屬 IDE 整合的方案，一方面是會破壞原本的使用習慣，即便它們大部分都是基於 VS Code，但是細微的調整也會帶來日常使用的摩擦，就像不稱手的廚具。

:::info
關於 Agent/Agentic 的概念可以看我之前文章的解釋：

[Agent! Agent! Agent! 所以 Agent 到底是什麼？](https://flyskypie.github.io/posts/2026-03-17_llm-agent/)
:::

使用過程不可避免的發現了一些體驗的問題，首先是對話視窗佔據了專注力，同時 Agent 不斷的操作帶來的畫面變化與閃爍，實際上就是把開發者從工具台上踢開，讓人類看著 LLM 表演，即便 LLM 有分攤工作的能力，在一個 IDE 上實際上同時只能有一個使用者：人類或 LLM。

另一方面，如果留意 CPU 使用量的話，LLM 不斷更新 IDE 上的內容，造成大量的 AST (Abstract Syntax Tree) 重新解析與渲染運算，老實說很浪費算力。

更重要是，IDE 容易讓 LLM 淹沒在非必要的訊息流之中，例如風格警告 (Linter)，這些是可以透過工具自動修復的，但是 LLM 感知到了錯誤或警告訊息就會試圖「手工」修復它，從而浪費不要的 Token 以及造成專注點漂移。

這些基本上是我僅嘗試，但是尚未大量使用的原因，直到今年 (2026) 七月發生了一些變化。

---

找到新工作之後，我必須面對的第一個挑戰就是我已經長達五年無須在日常使用 Windows，但礙於公司制度的問題，我不得不使用公司配發的 Windows 電腦，同時工作環境充斥著 Agent，不只是同事人均手持 Agentic Coding，公司本身也在大力推廣使用，

![](./01_agent.webp)

慶幸的是工作本身大部份是在遠端連線到的 Linux 伺服器上完成，這個變化反而刺激了我學習使用 `tmux` 之類原本在 Linux GUI 上沒有動力使用的東西，另外就是公司配發的 Agnetic 方案，所也索性直接用 Terminal 運行了，IDE 單純拿來**給人類使用**。另外一個變化是 DeepSeek V4 Flash 正式把堪用的智力水準壓到合理的價格範圍，從我的使用紀錄就可以感受到（上圖是過去一年的消費金額，下圖則是 token 用量）：

![](./02_llm-usage.webp)

![](./03_llm-usage.webp)

於是下班之後，我也試著尋找 Terminal 上運行的 Agnetic Coding 工具，使用編譯語言實作是當時的第一考量，先後嘗試了 [Goose](https://github.com/aaif-goose/goose) 和 [Crush](https://github.com/charmbracelet/crush)，第二個考量是「支援 OpenAI Compatible API」，Goose 因為沒能快速的完成設定，而 Crush 卻很快就完成設定，就一直用到現在了。

---

Crush 作為我的日常使用 LLM Agent 工具一個多月了，整體而言還算滿意。這個週末想做一個規模不小（~100 個檔案）的工程文件翻譯任務，這類任務最好在有支援 subagent 的工具下處理，然而 subagent 是 Crush 用戶吵著需要很久但遲遲沒有加入的功能：

- [feat: subagents #431](https://github.com/charmbracelet/crush/issues/431)
- [Add Subagents _please_ #1807](https://github.com/charmbracelet/crush/issues/1807)
- [feat(subagents): add subagents system - #3098](https://github.com/charmbracelet/crush/pull/3098)

想著我現在已經有了 Cursor CLI、Kiro CLI、Cursh 三種 CLI/TUI Agent 工具的使用經驗了，或許該看看其他開源方案，或許有比 Crush 更好用的？（先講結論，目前還沒找到，後面會補充一點原因）

## 各種 CLI/TUI

於是先後調查了一些方案：

- [aaif-goose/goose](https://github.com/aaif-goose/goose)
- [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)
- [anomalyco/opencode](https://github.com/anomalyco/opencode)
- [earendil-works/pi](https://github.com/earendil-works/pi)
- [Cline CLI](https://github.com/cline/cline/blob/main/apps/cli/README.md)

Goose 和 CodeWhale 是相對冷門的方案，先被選中的原因是稍早提到的性能考量，一些需求無法被滿足才又選了 OpenCode 兩個 Pi 用 Typescript 實做但是比較知名的方案。

它們大部分在「支援 OpenAI Compatible API」這個前提上大多都存在問題，不過既然現在我手上有 Crush，讓一個 Agnetic Tool 去設定另外一個 Agnetic Tool 本身不是什麼大問題，另外一個問題的是權限控制。

---

這裡需要回過頭來解釋一下 Agnet 的基本特性：

![](./04_agent.svg)

Agent 是一個由感知和操作建立起來的循環運算（運算過程會有上下文堆積的問題，不過這裡先不考慮），因此 Agent 的能力除了 LLM 的性能以外，主要受到「它能感知什麼？它能操作什麼？」的限制。

![](./05_tools.svg)

Agent 與檔案、網頁之間的交互是透過一個名為 Tools 的東西進行的，這個 Tools 可以是軟體自行實做的，也可以是透過 MCP (Model Context Protocol) 接入的。

對於怎麼實做這個 Tools，出現了設計哲學上的差異，第一種是「簡單至上，Bash 搞定一切」：

![](./06_bash-sovle-everything.svg)

第二種是嚴格區分，各自實做：

![](./07_each-tool.svg)

兩者不是互斥的，只是在觀察工具時，可以發現它們的設計哲學比較傾向哪一方。

---

當 Agent 呼叫 Tools 時，能夠被實做 Agent 的軟體攔截，並且只在獲得人類許可的情況下執行，不論是「感知」還是「操作」，以 Crush 為例，互動畫面如下：

![](./08_approve.webp)

![](./09_approve.webp)

這類權限控制也可以透過組態檔完成，例如：

```json
// ~/.local/share/crush
{
  "$schema": "https://charm.land/crush.json",
  "permissions": {
    "allowed_tools": [
      "agentic_fetch",
      "fetch",
      "mcp_fetch_fetch_html",
      "mcp_fetch_fetch_json",
      "mcp_fetch_fetch_markdown",
      "mcp_fetch_fetch_readable",
      "mcp_fetch_fetch_txt",
      "mcp_fetch_fetch_youtube_transcript",
      "mcp_searxng_searxng_instance_info",
      "mcp_searxng_searxng_search_suggestions",
      "mcp_searxng_searxng_web_search",
      "mcp_searxng_web_url_read",
      "sourcegraph"
    ]
  }
}
```

發現問題了嗎？

第一種方法實做起來比較簡單，使用上也比較自由，很容易讓 Agent 獲得強大的能力來解決問題，而不用人類去操作諸如複製或貼上的繁瑣任務，但是權限控制幾乎形同虛設，即便可以偵測之如 `rm` 之類的危險指令，這種問題防不勝防，對資安有點概念的人就知道「拿到執行任意指令的權限」有多嚴重，即便不是來自攻擊者，LLM 也有可能在長時間的背景運作與嘗試中找到漏洞 (Exploit) 來通過腳本檢查，Agent 可能帶來的影響 (Side Effect) 基本上無法預測。

