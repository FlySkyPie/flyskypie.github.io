---
slug: 2022-11-25_3ds_hack_note
authors: [weiji,]
tags: [learning note, 3ds ]
---  

# 3DS 刷機筆記

關於刷機流程，已經有非常詳盡的[教學](https://3ds.hacks.guide/zh_TW/get-started.html)，並且操作細節跟跟當前 3DS 版本或是機型會有一些落差， 繁瑣過得流程我就不在本文一一介紹。

## 刷 CFW (Custom firmware)

不論型號，第一步就是刷 CFW，如此一來我們就能透過 CFW 作為 bootloader 去載入其他 bootloader 程式。

根據不同的系統版本，能夠利用的漏洞會有所差異，而本人持有的 3DS 處於 5.x.x 版的狀態，因此選擇 [soundhax](https://3ds.hacks.guide/zh_TW/installing-boot9strap-(soundhax)) 來安裝 [boot9strap](#boot9strap)。

## Luma3DS

Luma3DS 是一個系統補丁，允許使用者獲得更多權限或功能，並且能夠安裝非官方的 3DS 應用程式。

並且它能夠進行 chainload，也就是 boot9strap 引導到 Luma3DS；Luma3DS 再引導到其他韌體，如：Linux。

在「[完成安裝](https://3ds.hacks.guide/zh_TW/finalizing-setup)」的步驟中，包含了安裝 Luma3DS、更新系統、安裝第三方應用程式等操作。

## 名詞註解

### boot9strap

boot9strap 是一個漏洞利用工具，效果是能夠使 3DS 載入並執行第三方的程式。

Boot9 (ARM9 BootROM) 是任天堂在晶片內燒錄的韌體，它會對載入的韌體進行加密驗證，來確保韌體來自任天堂官方，然而這個算法存在漏洞，允許第三方韌體欺騙 BootROM 並被載入到 3DS 中執行獲得控制權。該漏洞由 derrekr 在 [33C3](#33C3) 發表[^33C3-derrekr]。 網路上有[中文的資料](http://www.databusworld.cn/9963.html)對漏洞的具體技術細節做更進一步的解釋，有興趣的朋友可以參考看看。

並且更進一步的 boot9strap 透過 NDMA 漏洞對受保護的 Boot9 記憶體位址寫入資料，從而執行其他程式[^boot9strap-hack]。

[^33C3-derrekr]: Nintendo Hacking 2016 - Game Over 33C3. derrekr. Retrieved 2022-11-25, from https://derrekr.github.io/3ds/33c3

[^boot9strap-hack]: sighax and boot9strap. SciresM. Retrieved 2022-11-25, from https://sciresm.github.io/33-and-a-half-c3/

### 33C3 

全名是 「The 33rd Chaos Communication Congress」，總之就是一個非常大的駭客年會。[^33C3-intro]

[^33C3-intro]: 33c3 intro | Just for noting. (n.d.). Retrieved 2022-11-25, from https://blog.m157q.tw/posts/2016/12/27/33c3-0/

### NDMA (DSi New DMA)

暫存器的名稱。[^ndma-1][^DMA_registers]

[^ndma-1]: GBATEK - GBA/NDS Technical Info. (n.d.). Retrieved 2022-11-25, from https://problemkaputt.de/gbatek.htm#dsinewdmandma

[^DMA_registers]: Super NES Programming/DMA tutorial - Wikibooks, open books for an open world. (n.d.). Retrieved 2022-11-25, from https://en.wikibooks.org/wiki/Super_NES_Programming/DMA_tutorial#DMA_registers
