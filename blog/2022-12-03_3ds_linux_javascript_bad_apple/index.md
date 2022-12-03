---
slug: 2022-12-03_3ds_linux_javascript_bad_apple
authors: [weiji,]
tags: [learning note, 3ds, javascript, quickjs, cross compilation ]
--- 

# 3DS x Linux x Javascript x Bad Apple

<head>
  <meta property="og:image" content="https://i.imgur.com/FXnapxa.png" />
</head>

![](img/touch.webp)

本文以敘述的方式紀錄我在這個專案上的過程，並省略技術細節。若對實作細節有興趣，以下是以技術筆記的形式紀錄的文章：

- [3DS 刷機筆記](/blog/2022-11-25_3ds_hack_note)
- [3DS 刷 Linux 筆記](/blog/2022-11-25_3ds_linux_note)
- [交叉編譯 QuickJs 筆記](/blog/2022-11-29_3ds_cross_compilation_note)
- [Javascript x Bad Apple x Ascii 筆記](/blog/2022-12-03_3ds_bad_apple_node)

## 前情提要

最近 (2022-11-06) 從天上掉下來的一台 3DS (?)

老實說對於一般過時 N 年的消費性電子產品，我是完全沒興趣多花時間去玩它，根據以往的經驗，hack 這種東西多半吃力不討好；花費大量的時間也只能獲得相對於現代設備少得可憐的算力。 不過個人對於這種「有機械輸入的橫式手持行動裝置」有著莫名憧憬，隨手搜尋看看刷機的資料，發現資源蠻多的，教學也很詳細，就想著來刷刷看。

## 閃亮亮症候群再次發作

跟朋友表示想在 3DS 上刷 Linux 之後，「工程師的成就清單」的話題就這樣被打開了，對話中除了提 「在非常見或非通用功能電腦上安裝 Linux」還提到了「在非常見的顯示器上播放 Bad Apple」。

過幾天 (2022-11-09)，我便利用下班之餘試著在 3DS 上刷 Linux。刷機的第一部就是透過系統漏洞刷入 CFW (Custom firmware)，讓 3DS 能夠從 SD Card 讀取 bootloader 開機，因為[教學](https://3ds.hacks.guide/get-started)很詳細，照著步驟做沒有花太多時間就成功刷機了，當中有些教學性質的步驟也讓我看了 [3DS Linux](https://www.gamebrew.org/wiki/Linux_for_3DS) 的頁面之後就知道大概要做什麼，也成功的在 3DS 上進入 Linux 了。

到目前為止都出乎我意料之外的順利，於是我想：
> 我都有一台跑著 Linux 的 3DS 了，寫個程式讓它跑 Bad Apple 應該不難吧？

接著我又想：
> 如果能用我熟悉的 Javascript 寫程式就好了

於是「在 3DS 上跑 Linux 跑 Javascript 顯示 Bad Apple」就變成一個 side project 的目標了，接著這個 side project 就一發不可收拾了。

## 這個 Linux 是金魚腦

試著新增檔案並寫入一些資料，重開機之後卻發現檔案消失了，後來才了解到整個檔案樹是放在啟動 Linux 用的映像檔裡面，那些資料夾在開機之後是掛在 Ram Disk 上 [^linux-3ds-files]，自然沒有儲存的功能。

解決的辦法就是把資料存在 SD 卡上，但是這個 Linux 預設並不會掛載 SD 卡，研究了一會兒才知道它在 `/dev/vda1`，但是每次開機都要打一次指令顯得有點麻煩（提醒，3DS 沒辦法外接鍵盤，我只能用觸控筆敲指令）。

寫個腳本讓它在開機的時候執行便理所當然的變成必須完成的任務，然而它並沒有 systemd, rc.local 這類高級的東西。`/etc/init.d/rcS` 承擔 start 的功能 `/etc/init.d/rcK` 承擔 kill(stop) 的功能，會依序執行 `/etc/init.d/rcS/S(\d\d.*)`。

腳本倒是容易搞定，但是我要怎麼把它包進去開機用的 img 裡面？建置 3DS Linux 的過程涉及一個 `rootfs.cpio.gz` 檔案，我必須把它解包之後加入我要的修改再包回去。

花了一點時間搞懂上述這些東西，才終於讓我的 Linux 開機會自動掛載 SD 卡 (2022-11-12)。

[^linux-3ds-files]: https://github.com/linux-3ds/linux/wiki

## 第一個挫折

依照自己的以往經驗：「要在 Host 上跑 Javascript 就先裝 Node.js」，然而最新版的 Node.js 並沒有 Armv6 的 prebuild release，不過一直到 11 版，還是有官方版的 armv6 prebuild 可以[下載](https://nodejs.org/dist/latest-v11.x/)。下載之後在 3DS 上執行會拋出 `-sh: ./node: not found` 的錯誤，原因是官方的 prebuild 是仰賴 glibc，但是 3DS Linux 使用的是 musl libc。好吧，這個問題我也不是太陌生，之前在包 Docker 接觸過 Alpine Linux，所以對這類問題有個概念。

> 好唄，自己 build 就是了

雖然網路上找了一些 build 參數，但是怎麼試怎麼有問題，畢竟我平常又不寫 C，對專案的編譯配置不熟悉。後來找到一個叫做 [Dockcross](https://github.com/dockcross/dockcross) 的工具專門用來處理交叉編譯 (Cross Compiling)。但是相對舊版的 Node.js 仰賴 Python 2.X，Dockcross 的 Image 只有 3.X，這時我才知道 Node.js 的編譯過程居然仰賴 Python，我內心 OS：「SHAME， 程式語言之恥，Node.js 你作為一個直譯語言的直譯器的編譯過程居然仰賴另外一種直譯語言」。

![](img/shame.webp)

好加在 Dockcross 允許[擴充](https://github.com/dockcross/dockcross#how-to-extend-dockcross-images) Docker image 以符合專案需要，然而事情並沒有這麼簡單。Node.js 的編譯過程仰賴了編譯的產出物，也就是當我指定了編譯目標為 `linux-armv6-musl` ，會生成一些 tool，接著在編譯出 `node` 以前，它會在 host 呼叫這些 tool，但是我的 host 不是 `linux-armv6-musl`；於是拋出錯誤，編譯中止。`(#╯O皿O)╯┻━┻`

接著我發現在建置 3DS Linux 過程中使用的工具：[buildroot](https://github.com/linux-3ds/buildroot) 其實提供了一個界面可以勾選 node，而它的實作方式就是先編譯一份 x86 的版本，再跑 arm 的編譯，而編譯過程中用到的 tool 就回去 call x86 的版本。經過一波三折我終於弄出了「musl-armv6 版本的 Node.js v14」，然而問題並沒有因此解決，不然段落標題就不會是「第一個挫折」了。

```shell
$ node --version
v14.18.3

$ node -h
...
Process node (pid: 153, stack limit = 0xc6135dc6)
...
[<c0111610>] (v6_coherent_kern_range) from [<c01094c0>] (arm_syscall+0x15c/0x26c)
[<c01094c0>] (arm_syscall) from [<c0100060>] (res_fast_syscall+0x0/0x58)
Exception stack (0xc15elfa8 to 0xc15elff0)
```

![](img/too-powerful.webp)

總之 Node.js 對於那個年代的 3DS 來說 too powerful 了。(2022-11-13)

作為 ECMAScript 的信徒，這個挫折讓我很不甘心。

> 如果能用 node.js 跑的話感覺真的滿酷的，用 C 或 shell 就感覺很一般

並且正如我朋友說的，雖然我也不是不會寫 Shell 或是 C，但是感覺這樣就太無聊了（？）既然都難得要解 Bad Apple 的成就了，當然是加點料比較有趣，而且作為網頁前端工程師，窩真的不是很想用 Shell 或是 C 寫啊 `_(:3」∠)_`。誰知道 Node.js 毫無反應，就只是一團 stack 直接死在 Armv6 上。

![](img/rake.webp)

碰巧那天 (2022-11-13) 跟朋友聊天的時候有提到在 Javascript 的圈子有個叫做「包」的東西，後來趁著放假整理瀏覽器書籤的時候發現 Bun 相關的東西，稍微查一下資料才想起來除了 Node.js 之外還有 Deno 跟 Bun 兩個實作 Javascript 的專案。

Bun 因為是後起之秀，Deno 又是用 Rust 寫的，具我所知 Rust 也能拿來寫嵌入式韌體，移植到 3DS Linux 的機率比較高一點，於是我便朝著這個方向去研究。

雖然 Deno 本身有一些很酷的 feature，包含交叉編譯的功能，可以把 Javascript 編譯成目標平台的執行檔。但是它本身卻沒有 arm linux 的 prebuild。就算自己跑編譯也會在下載仰賴套件 `rusty_v8` 的時候失敗，加上官方關於 32 bit ARM 支援的 [issue](https://github.com/denoland/deno/issues/2295) 仍然開著。這些都還不包括 musl libc 可能會遇到的問題。看來此路仍然不通。我甚至一度產生了「乾脆用 Rust 寫吧，順便學一下這個我有興趣但是保持觀望一段時間的語言」的念頭。(2022-11-18)

等等，既然 Javascript 都有諸如 Node.js, Bun, Deno 這些不同的實作，甚至使用不同的 runtime 引擎(V8, JavaScriptCore)，ECMAScript 單純作為標準，它的實作應該不只這樣吧？我也應該不是第一個想在嵌入式系統跑 Javascript 的人吧？

## 「Any application that can be written in JavaScript, will eventually be written in JavaScript.」

[事實](https://stackoverflow.com/questions/5384762)證明我不孤單：

- https://duktape.org/
- https://github.com/gfwilliams/tiny-js
- https://github.com/cesanta/mjs
- https://github.com/jerryscript-project/jerryscript

一開始我嘗試了 tiny-js，因為在問答串的分數也相對高，它看起來足夠精簡，背後又是 Google。然而很快又遇到了 Musl libc 的問題，透過 [musl-cross-make](https://github.com/richfelker/musl-cross-make) 這個工具沒有花多久就排除問題了，但是執行後直接跳 Segmentation fault，畢竟是個年久失修的專案，會這樣似乎也不怎麼意外。

後來我在[這裡](https://github.com/topics/javascript-engine?l=c&o=asc&s=stars)發現 [quickjs](https://github.com/bellard/quickjs) 不只有中文資源，README 也有提到可以直接執行而不是只有 lib，相較於 [jerryscript](https://github.com/jerryscript-project/jerryscript) 的 README 沒有明講是 lib 還是可以直接跑，又有仰賴 Python 編譯，我就先選擇了 quickjs 嘗試。（對，我就歧視 Python，OHO）

它跟 Node.js 一樣，編譯過程仰賴自己編譯的 tool (`qjsc`)，一樣要 build 兩次來解決，因為有前面的經驗，沒有花太久就把問題排除並成功在 3DS Linux 上跑起來了。 (2022-11-20)

![](img/3ds_linux.webp)

## Voila!

Javascript 能夠跑起來，實作的部份就簡單了（？）
1. 用 FFmpeg 對影片以 5 FPS 取樣轉成圖片（原本試過 10 FPS，無奈設備太老舊跟不上）
2. 把圖片轉成 ASCII 文字檔
3. 用 Javascript 讀擋然後 print 出來

因為我現在手上同時有 arm 跟 x86 版本的 qjs 直譯器，改 Javascript 程式執行 debug 的速度就很快了，不用重新編譯，只要在 dev 環境測試到沒問題直接複製到 3DS 去再做第二次測試。

[![](<http://img.youtube.com/vi/xYr9pNCv0YQ/0.jpg>)](<https://youtu.be/xYr9pNCv0YQ> "3DS x Linux x Javascript x Bad Apple")

(縮圖有影片連結)

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。