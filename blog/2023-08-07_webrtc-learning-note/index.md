---
slug: 2023-08-07_webrtc-learning-note
authors: [weiji,]
tags: [learning note, javascript, typescript, WebRTC ]
--- 

# WebRTC 學習筆記

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/blog/2023-08-07_webrtc-learning-note/img/01_create-webrtc.webp" />
</head>

:::note

本篇學習筆記以 Javascript 在應用上的實作為切入點，關於 WebRTC 背後的技術並不是本文的重點。

:::

看了幾篇教學仍然對 WebRTC Web API 的使用不是很理解，因為這些文章不是都著墨在 WebRTC 協定本身然後程式碼的實作就簡略帶過；就是跟使用 WebSocket 處理 SDP (Session Description Protocol) 的部份一起講，造成程式碼充滿了各種事件 callback，讓程式碼變得比較不好理解。

後來看到了一個[範例程式](https://github.com/Tinywan/WebRTC-tutorial/tree/master/docs/demo-02)，單純針對 `RTCPeerConnection` 如何建立連線，從而省略實務上會透過其他機制完成 SDP，讓程式碼變得稍微好理解一點。

經過重構、Reivew 之後終於看懂使用 Javascript 建立 WebRTC 連線的流程，我把它整理成一張圖：

![](./img/01_create-webrtc.webp)

大致有三個重點：
1. 兩邊的 Connection 都分別要從自己跟對方獲得 SessionDescription。
2. 成對的 ICE (Interactive Connectivity Establishment) 處理程式 (handler)。
3. `addTrack()` 與 `.on("track")` 用來發送/接收串流。

---

另外我練習[使用 WebRTC 的程式](https://github.com/FlySkyPie/canvas-webrtc-sample)試著用不同的界面分離職責：

![](./img/02_architecture.webp)

- `ITransmittable`: 發送端應用領域對傳輸領域的界面，專住於「對外串流」的職責。
- `IReceivable`: 接收端應用領域對傳輸領域的界面，，專注於「接收串流」的職責。
- `IRTCOfferable`: 發送端對連線建立領域的界面，專注於「發送方的 WebRTC 構成要件」的職責上。
- `IRTCAnswerable`: 接收端對連線建立領域的界面，專注於「接收方的 WebRTC 構成要件」的職責上。

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji 以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。