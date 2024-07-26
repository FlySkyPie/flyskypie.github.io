---
slug: 2024-07-25_i-removed-python
authors: [weiji,]
tags: []
--- 

# 我把 Python 移除了，然後就嗚呼了

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2024-07-25_i-removed-python/00_hero.webp" />
</head>

最近在處理一些 Python 的專案，然後心想「既然我已經在虛擬環境 (Poetry) 裡處理好 Python 了，host 的應該就能移掉了吧？」，然後我的 Ubuntu 就嗚呼了：
- 選擇使用者的程式不見了
  - 原因： `lightdm-gtk-greeter` 被移除
- 有線網路不見了
  - 原因： `netplan.io` 被移除

儼然這張梗圖：
![](./01.webp)
