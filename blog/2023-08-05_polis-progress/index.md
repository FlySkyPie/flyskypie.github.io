---
slug: 2023-08-05_polis-progress
authors: [weiji,]
tags: [Polis, Hakoniwa, The Key of Huanche, ]
--- 

# Polis 專案研究進度

<head>
  <meta property="og:image" content="https://i.imgur.com/BfkbXOK.png" />
</head>

稍微把 Polis 挖坑至今 (2023-08-05) 累積的嘗試做個紀錄。

## 基本概念

![](./img/01_polis-concept.webp)

整個開放世界會被拆分成不同的區域，每個區域由獨立的節點 (Polis Node) 負責運算，節點跟節點之間會構成 P2P 網路，形成一個可以橫向擴展的架構，而 Client 端則會在由 Polis Node 構成的 P2P 網路所運算的開放世界中進行漫遊 (Roaming)。其實這種分散式的架構在 ITUGV 的時宜就令我十分著迷，不過那就是另外一段故事了，在這裡稍微提及只是為了讓讀者理解筆者對分散式架構抱有特別的偏好，並且這種構想早就存在於早期的其他專案之中。

## POC (Proof Of Concept)

雖然 Polis 作為 Hakoniwa 的子專案，目的一樣是為了建造一個程序化生成 Voxel 開放世界，但是 Polis 將會把重點放在兩個目標上：
- 建立 P2P 網路
- 能夠透過 Client 程式連線

因此在 Polis 的第一個原型中，達到這些條件就算成功完成了概念驗證：

![](./img/02_POC.webp)

## 2023-05-13 ~ 2023-05-26

在這個階段我想用 Deno 作為實作 Polis Node 的手段，有幾個原因：

1. Typescript 目前是我最熟練的語言。
2. WebGPU 已經納入 Web API 中，而部份版本的 Deno 已經實作，因此我能使用 Typescript 解決 server side render 的需求，這麼部份是 Node.js 無法達成的。
3. Deno 內建跨平台編譯 (Cross Compiling)，因此寫一次程式我就能把節點佈署到除了 Linux 以外的 Windows 或是 macOS 上。

### 網路連接技術

在挖了坑並且對技術棧 (Technology Stack) 有了粗略的方向之後，首先我想先處理 Polis 中最關鍵的問題：
> 如何建立 Polis 網路 （P2P 網路）？

在 2020-03-22 的時候我就有使用 ZeroMQ 進行過傳輸相關的[實驗](https://github.com/FlySkyPie/the-key-of-huanche-recipe/tree/main/src/core/gym/Test_of_Image_Transfer_with_Different_Decode)，也是我在 The Key of Huanche 中一直考慮投入使用的函式庫。直到我因為 Polis 的分散式架構回過頭去翻閱它的官方文件的時候，才發現了一件事：
> And this is the world we’re targeting with ZeroMQ. When we talk of “scale”, we don’t mean hundreds of computers, or even thousands. Think of clouds of tiny smart and perhaps self-replicating machines surrounding every person, filling every space, covering every wall, filling the cracks and eventually, becoming so much a part of us that we get them before birth and they follow us to death. [^ZeroMQ-8]

ZeroMQ 在官方文件 [Chapter 8 - A Framework for Distributed Computing](https://zguide.zeromq.org/docs/chapter8/) 中描述了他們那野心勃勃的願景，老實說這非常打動我。

然而調查下來，發現 Deno 在這方面並沒有多少函式庫可以使用、專案的活躍度也都很低：
- https://github.com/jjeffcaii/deno-zeromq
- https://github.com/rracariu/deno-jszmq
 - 似乎只有實作 WekSocket
 - https://github.com/trs/zmq
   - deno-jszmq 的 fork
- https://github.com/lenkan/deno-amqp
 - 兼容 RabbitMQ
 - 只支援 Server-Client 模式

[^ZeroMQ-8]: Chapter 8 - A Framework for Distributed Computing. Retrieved 2023-08-05, from https://zguide.zeromq.org/docs/chapter8

### 資料傳輸載體

Protobuf (Protocol Buffers) 是另外一個我有意投入 The Key of Huanche 使用的 Technology Stack，第一次知道它的存在是工作上使用 Mapbox 的並因此接觸 [Mapbox Vector Tile](https://github.com/mapbox/vector-tile-spec) 的時候發現它所使用的資料格式。簡言之就是一種預先定義資料結構後，把資料壓成密度比較高的格式進行傳輸，到達目的地之後再用預先定義的資料結構進行解碼，比起使用 JSON 傳輸可以省下很多頻寬。

然而在 Deno 的生態戲中依然有類似的問題，能選用的函式庫很少、而且專案活躍路很低：
- https://github.com/soootaleb/ddapps
  - Deno distributed applications framework 
- https://deno.land/x/protobuf_ts@v1.2.2
  - https://github.com/dancrumb/protobuf.ts
- https://deno.land/x/deno_google_protobuf@4.0.0-rc.2
  - https://github.com/marcushultman/deno-google-protobuf
- https://pbkit.dev/
  - https://deno.land/x/pbkit@v0.0.61
  - https://github.com/pbkit/pbkit

#### 如何分辨序列化資料 Protobuf 的型別？

Polis Node 之間的通訊基本上是一個事件系統，而事件的種類千奇百怪，需要的資料結構當然也是五花八門，但是它們之間會使用同一個序列化的通道，接收端街收到一組序列化資料後要怎麼區分 Protobuf 的類型並使用不同的結構來解碼呢？

沒有辦法直接區分，但是可以透過幾個方法解決這個問題[^protobuf-type-detect]：

- 定義一個 Protobuf 封裝來夾帶型別資訊
  - 用 oneof 封裝 (也被稱作 union)
    - https://stackoverflow.com/a/40040658
    - https://protobuf.dev/programming-guides/proto2/#oneof
    - https://protobuf.dev/programming-guides/proto3/#oneof
  - 將另外一組 proto 封裝成 any 屬性
    - https://protobuf.dev/programming-guides/techniques/#self-description
- 在 buffer 加入幾個 bytes 的前輟作為辨識符

[^protobuf-type-detect]: c# - Protocol buffers detect type from raw message - Stack Overflow. Retrieved 2023-08-06, from https://stackoverflow.com/a/9125119

### 壓垮 Deno （對我的專案而言）的最後一根稻草

我其實很難找到支援 WebGPU 或是活躍的 WebGL 的 Javascript 函式庫進行 "denolize"。

WebGPU 在那個當下只有 0.04% 的覆蓋率，就算打開先行版 Chrome 的 WebGPU flag 也是充滿破圖，因此鮮少有函式庫有支援 WebGPU。

![](./img/03_webgpu-usage.webp)

活躍的 Javascript 3D 繪圖函式庫，諸如：Three.js, Babylon.js，即便當下是基於 WebGL 實作，在 WebGPU 逐漸普及下應該也會逐步支援 WebGPU 才對，但是它們多是基於 Canvas 的繪圖方式，而 Deno 環境下的 WebGPU 實作並不包含 Canvas 相關方法。

加上 WebGPU 的 API 在 1.8 被加入 Deno 之後[^deno-1.8]，又在 1.32.0 中基於性能考量被移除了[^deno-1.32.0]。

也就是「在 Deno 中使用 WebGPU」這件是的前景並不樂觀，我可能必須要面對「使用舊版的 Deno 和相對底層的 WebGPU 手刻整個應用」的問題。

Deno 的 Cross Compiling 的能力是真的很吸引我，但是在繪圖跟網路連線兩面不討好的情況下，加上 IDE 在寫 Deno 程式的時候開發體驗並不好，我決定放棄這條路。

[^deno-1.8]: Deno 1.8 Release Notes. Retrieved 2023-08-05, from https://deno.com/blog/v1.8
[^deno-1.32.0]: Release v1.32.0 · denoland/deno. Retrieved 2023-08-05, from https://github.com/denoland/deno/releases/tag/v1.32.0

## 2023-05-27 ~ 2023-06-11

在 2022-10-06 的時候我就已經嘗試過把網頁上渲染的 Canvas 畫面壓成 Webp 並透過 WebSocket 傳送給伺服器播放了[^simple-stream]，但是當時只是寫了 POC 等級的程式，並不能很好的管理每次連線的 Session，因此良好的串流機制就成了我下一個研究目標。

[^simple-stream]: Day 22 Streaming POC - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天. Retrieved 2023-08-05, from https://ithelp.ithome.com.tw/articles/10305097

### 串流方案

![https://www.wowza.com/wp-content/uploads/latency-continuum-2021-with-protocols-700x300-1.png](./img/04_stream-latency.webp)

花了一點時間 (2023-05-27~2023-05-28) 查資料了解有哪些可能的方案能夠實現我的需求：

- Websocket
  - ✅ Web API 十分普及
  - ❌ 需額外處理影像的解碼與渲染，消費更多的運算與延遲
- WebRTC
  - ✅ Web API 十分普及
  - ✅ 原生設計支援低延遲
  - ❌ 協定複雜
  - ❌ P2P 架構，雖然可能可以透過在伺服器實作底層來欺騙 client 端，但是需付出額外開發成本
- WebTransport/QUIC
  - ✅ 支援 UDP，可降低延遲
  - ✅ 次世代 API
  - ❌ Web API 尚未普及
    - 瀏覽器支援覆蓋率低
    - Nodejs 僅實驗性支援 QUIC
    - Deno 尚不支援
- HTML5 video tag
  - ✅ Web API 十分普及
  - ❌ 高延遲
- Video.js
- MPEG-DASH
  - ✅ 開放的標準
  - ❌ 有點複雜
- FLV
  - ✅ 歷史性因素，仍有許多資源
  - ❌ 過時

### Node-Media-Server

![](./img/05_Node-Media-Server.webp)

之後 (2023-06-04) 發現了 [Node-Media-Server](https://github.com/illuspas/Node-Media-Server) 這個專案，透過 RTMP (Real-Time Messaging Protocol) 向 Node-Media-Server 串流影像，接著能夠使用 [Node-Media-Server-Admin](https://github.com/illuspas/Node-Media-Server-Admin) 打開串流，而且能夠流暢的關閉與重新開啟串流，Session 的管理便是我在 POC 階段所缺失的，並且它能夠使用以 Javascript 撰寫的 code base 對外進行串流，那我只要有辦法用 Javascript 產生 RTMP 流，就能整合成符合我需求的程式。

於是我便試著透過用 Typescript [重構專案](https://github.com/FlySkyPie/Node-Media-Server-ts)的方式理解它是如何實現串流推流的。

## 2023-06-11 ~ 2023-06-25

### RTMP

![](./img/06_RTMP-learning-note.webp)

接著我發現單靠程式碼無法理解它解析 RTMP 封包的邏輯，於是我便打開 [RTMP 的規範文件](https://rtmp.veriskope.com/docs/spec)並搭配一些教學文章試著理解它，不過大約只讀到 Header 的部份，我就意識到就算我能製造 RTMP 堆流，還是需要把影像做編碼，然而 Javascript 的生態系在做這件事情上有點貧弱，於是我把目光轉而投向 WebRTC。

至於 RTMP 的學習筆記我應該會發到另外一篇獨立的文章去，雖然因為我其實沒有把 Spec 完整看完，發個不完整的筆記感覺怪彆扭的。=w="

## 2023-06-25 ~ 2023-08-05

### WebRTC

![](./img/07_webrtc-demo.webp)

7 月份因為工作上的壓力比較大，加上充滿了親戚過世、Steam 夏季特賣、COSUP...等等事件，所以學習 WebRTC 的進度可以說是其極緩慢，不過終於在昨天 (2023-08-05) 理解如何使用這個 Web API 並把[範例](https://github.com/FlySkyPie/canvas-webrtc-sample)做出來了。

同樣的，關於 WebRTC 的學習筆記我會放在另外一篇獨立的文章。

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji 以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。