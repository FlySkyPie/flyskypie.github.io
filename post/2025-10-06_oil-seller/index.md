---
slug: 2025-10-06_oil-seller
authors: [weiji]
tags: [LLM, Philosophy]
---

# 從賣油翁談「人寫程式」與「人寫提示詞讓 LLM 寫程式」的抉擇

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2025-10-06_oil-seller/00_cover.webp" />
</head>

我不太記得孔子在國文課本裡說了什麼，但是我記得賣油翁的一句：

> 「但手熟爾」，只是手藝熟練罷了

真正和這句話發生共鳴來自於我高職在練習證照的學科與術科；以及我那算到幾乎快爛掉的基本電學習題的經歷，並且真正發酵是我開始使用 Linux 幾年之後，那幾個原本在學科考古題裡面的指令已經內化成我日常生活的一部分。

程式語言是手段；不是目標，事實是軟體工程師其實經常需要根據需求學習新的語言，原因可能是為了維護舊專案或是針對特定問題的語言特性...等等。不過我認為依然需要選擇一門程式語言當作「母語」，必須是成為肌肉記憶最後帶進棺材的一部分，它可以成為學習其他語言時進行典範 (Paradigm) 參考的基準[^javscript-python-paradigm]。

Javascript/Typescript 是我選擇作為「母語」的語言，我會持續學習它的歷史、它的生態、它的語法，當我試著重構一些老專案的時候，我可以看到過去的開發者如何在 Promise 尚未納入規範就開始使用 Promise[^legacy-promise]；當我試著在 3DS 上建立 Javscript Runtime [^3ds-javscript]，我窺見了 Node.js 的工具鏈以及 Runtime 和 Engine 的差別...

我決定向賣油翁學習，精練一門手藝這件事甚至早在 ChatGPT 橫空出世以前。前一陣子在公司的壓力之下我被迫嘗試使用 Cursor，然而實際上它非常的不好使，有一些特定的任務我要花大量的時間撰寫提示詞來約束它。

「那是你提示詞下的不好」「你應該要多搭配一些規則」...有些人或許會這樣說，不過我想那些「有些人」的心中沒有賣油翁；它們或許本來就討厭寫程式，寫提示詞對它們而言是一種解放。不過對我而言，與其「節省時間」寫提示詞，「浪費時間」打磨我的手藝，反而才是我認為正確的道路 — 賣油翁的道路。

[^javscript-python-paradigm]: 從 Javascript 到 Python 的範式遷移 (Paradigm Migration) | 工程屍 FlyPie 的異想世界. Retrieved 2025-10-06 from https://flyskypie.github.io/blog/2024-06-09_from-javascript-to-python-paradigm-migration/
[^legacy-promise]: kriskowal/q: A promise library for JavaScript. Retrieved 2025-10-06 from https://github.com/kriskowal/q
[^3ds-javscript]: 3DS x Linux x Javascript x Bad Apple | 工程屍 FlyPie 的異想世界. Retrieved 2025-10-06 from https://flyskypie.github.io/blog/2022-12-03_3ds_linux_javascript_bad_apple/