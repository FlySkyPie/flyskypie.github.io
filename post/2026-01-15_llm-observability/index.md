---
slug: 2026-01-15_llm-observability
authors: [weiji]
tags: [LLM Observability]
---

# LLM 可觀測筆記

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2026-01-15_llm-observability/00_cover.webp" />
</head>

今天觀察到一個有趣的現象，紀錄一下。

原始請求：

```
 You will have follow up questions. First, identify if your knowledge is outdated (high chance). Today: 2026-01-15. Generate 3 high-quality internet search questions to exactly answer: Which text structure is better for LLM prompts?
- Markdown based
- XML based
Consider the case with a task have multiple output, output blocks with XML tags seems is more reliable approach?

Language Rules:
Process the task in English (sort questions, search with English, search ranking...). 
Only final response (the task is doing Summary) with Chinese (zh_TW).


Format: One question per line, e.g. 
 Q: question1 
 Q: question2
```

LLM 的回答：

```
以下是三個高品質的搜尋問題，適用於查詢 Markdown 與 XML 在 LLM 提示語中的可靠性比較：

Q: Is XML-based prompt structure more reliable than Markdown for multi-output LLM tasks?  
Q: What are the advantages and disadvantages of Markdown-based vs XML-based prompt structures for large language models?  
Q: Does XML-based output formatting improve consistency and parsing reliability compared to Markdown in LLM prompts?
```

不過 OpenAI API 其實也會透露推理過程（Reasoning）：

```
We need to respond: "You will have follow up questions. First, identify if your knowledge is outdated (high chance). Today: 2026-01-15. Generate 3 high-quality internet search questions to exactly answer: Which text structure is better for LLM prompts? - Markdown based - XML based Consider the case with a task have multiple output, output blocks with XML tags seems is more reliable approach? Language Rules: Process the task in English (sort questions, search with English, search ranking...). Only final response (the task is doing Summary) with Chinese (zh_TW). Format: One question per line, e.g. Q: question1 Q: question2"

We need to produce 3 search questions. They must be high-quality, for search queries. Probably something like: "Is XML-based prompt structure more reliable than Markdown for multi-output LLM tasks?" etc.

We need to output only the final response with Chinese (zh_TW). That means the final output should be Chinese? But the questions themselves are in English. The instruction says: "Only final response (the task is doing Summary) with Chinese (zh_TW)." Wait. The user wants 3 high-quality internet search questions to exactly answer the query. But then the system says only final response with Chinese. That seems contradictory. The instructions: "Only final response (the task is doing Summary) with Chinese (zh_TW)." So the final response should be in Chinese. But the format: "One question per line, e.g. Q: question1 Q: question2". That format presumably remains. But the content is in English? The user said "Process the task in English (sort questions, search with English, search ranking...). Only final response (the task is doing Summary) with Chinese (zh_TW)."

So we need to produce the final response in Chinese. But the questions themselves? The example shows "Q: question1" etc, presumably in English. But the final response should be in Chinese. Maybe we can write the questions in Chinese? But the instruction says "Process the task in English". That might refer to sorting, search queries, etc. But the final output should be Chinese. So maybe we produce the questions in Chinese? Or we produce them in English but the final response is Chinese? The example is in English.

We should interpret: The actual content (questions) should be in English because we want to search. But the final response (the entire output) should be in Chinese. So we can say:

Q: Is using XML tags for multi-output LLM prompts more reliable than using Markdown formatting? 
Q: What are the advantages and disadvantages of Markdown-based vs XML-based prompt structures for large language models? 
Q: In LLM prompt design, does XML-based output formatting improve consistency and parsing reliability compared to Markdown?

But we must output this in Chinese. Maybe we can translate the entire set into Chinese? But then the search queries would be in Chinese, which might not be as effective for search. But the instruction says "Process the task in English (sort questions, search with English, search ranking...). Only final response (the task is doing Summary) with Chinese (zh_TW)." So perhaps the final response (the summary of the search queries) is in Chinese, but the queries themselves are listed in English.

Thus we produce:

Q: Is XML-based prompt structure more reliable than Markdown for multi-output LLM tasks?

But maybe we need to phrase them as search queries. So maybe like:

Q: "XML vs Markdown prompt structure reliability for multiple outputs in LLM"

Q: "Advantages of XML tags in LLM prompt design over Markdown formatting"

Q: "How does XML-based output block improve consistency and parsing for LLM prompts compared to Markdown"

But we need to produce exactly 3 high-quality internet search questions. We'll produce them as:

Q: "Is XML-based prompt structure more reliable than Markdown for multi-output LLM tasks?"
Q: "What are the advantages and disadvantages of Markdown-based vs XML-based prompt structures for large language models?"
Q: "Does XML-based output formatting improve consistency and parsing reliability compared to Markdown in LLM prompts?"

Then we output in Chinese: "以下是三個高品質的搜尋問題..." But we need to follow the format: one question per line, prefixed with Q:. That format likely stays in English. But if we want to be consistent with instructions: "Only final response (the task is doing Summary) with Chinese (zh_TW)." So we might produce Chinese explanation and then the list of Q: lines in English. But the output must be Chinese. So maybe we can put the questions in Chinese too. But then they'd not be English search queries. The instruction: "Process the task in English (sort questions, search with English, search ranking...). Only final response (the task is doing Summary) with Chinese (zh_TW)." So we need to produce the final response in Chinese, but the search queries themselves can be in English. But we need to output them as part of the final response. The final response should be in Chinese, but we can include English lines. It's ambiguous.

Better to produce Chinese text explaining that these are the search queries, then list them in English. That keeps final response Chinese. So:

以下是三個高品質的搜尋問題，適用於查詢 Markdown 與 XML 在 LLM 提示語中的可靠性比較：

Q: Is XML-based prompt structure more reliable than Markdown for multi-output LLM tasks?
Q: What are the advantages and disadvantages of Markdown-based vs XML-based prompt structures for large language models?
Q: Does XML-based output formatting improve consistency and parsing reliability compared to Markdown in LLM prompts?

We can do that. That satisfies the instructions.
```

> But then the system says only final response with Chinese. That seems contradictory.
>

指出當下的提示詞對 LLM 來說可能不夠直觀，Reasoning 的內容在一般的 LLM 應用程式基本上是不可見的，但是它似乎是調試提示詞的重要工具。
