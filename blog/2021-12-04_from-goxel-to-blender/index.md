---
slug: 2021-12-04_from-goxel-to-blender
authors: [weiji,]
tags: [learning note, 3d, goxel, blender ]
--- 

# 從 Goxel 到 Blender (Voxel art → 綁人物模型骨架)

<head>
  <meta property="og:image" content="https://i.imgur.com/2XIyxSJ.png" />
</head>

## 緣起 （aka 廢話）

*（這一段在講整個學習過程的因果關係，只想看步驟的人可以直接跳到下一個段落）*

前一陣子在尋找合適的方案來儲存 Voxel terrain 的資料，所以花了一點時間在琢磨 voxel 的檔案格式。

接著想想，或許我該把 side project 的風格都統一成 Voxel ，這樣彼此之間就可以共用技術棧，而同時手邊還有一個 FPS 相關的專案，就想：

> 去找找看免費的 Voxel 槍模型匯進遊戲內看效果怎樣。

就跑去 Github 翻 Ace Of Spades 的開源專案，然後發現它使用的模型檔案是 `.kv6` ，全名是 "Ken Silverman's version 6 model file" 如果順著這條線索會找到一個頗有年代感的網頁[^Ken-Silverman-web]。

在找這個檔案相關資料的過程中，會找到一堆 voxel 編輯器。接著我想：

> 既然都有編輯器了，我還用現成的幹麻，自己畫啊？

於是找到了：

- MagicaVoxel
- VoxelShop
- Goxel

MagicaVoxel 雖然是免費的但是沒有開源；VoxelShop 則是用 Java 寫的，於是最後我就使用了 Goxel。

而在找軟體的過程想到，最近看到同事在用看起來很炫的 PureRef，但是它沒有開源，最後找了個 BeeRef 來用。

![](./img/01_beeref.webp)

不過我想畫的角色有點複雜，一開始還是從簡單的開始好了，於是我就試著一邊摸索一邊畫我的 Minecraft avatar。

![](./img/02_minecraft-avatar.webp)

接著要輸出通用的 3D 檔案格式，我試著匯出幾個格式到 blender 但是會有幾個問題：

- 貼圖遺失
- 每個 voxel 由 2 個三角面構成；沒有 optimized，而且 mesh 沒有封閉

我想起在查資料的過程，有個 github repo 提供免費的 voxel 模型，並且作者有提到自己是怎麼輸出的。[^Mini-Mikes-Metro-Minis]

於是我又載了 VoxelShop 為了做轉檔，最後成功匯進 Blender ，下一步是綁骨架；試了一個晚上還是沒能設定好權重，剛好有在 FB 看到 Blender 相關的線下小聚，就報名了。在小聚上遇到野生路人指點與陪伴，終於學會正確的流程，但是權重還是沒畫好。

隔天剛好有遊戲開發相關的小聚，原本是不打算去的（前一個禮拜才去過），但是到家後發現主辦方貼文表示：「人太少啦～人來即可入場」。

> 去一趟吧。

到了會場我就默默的打開筆電繼續沒完成的調權重，不過還是不太熟悉要怎麼操作，沒辦法作到細緻的操作，直到一個野生的路人指點才豁然開朗。

![](./img/03_result.gif)

## 製作 Voxel

個人是習慣使用 Goxel 作圖，輸出成 `.vox`：

![](./img/04_goxel.webp)

再匯入 VoxelShop ，只是圖層資訊會遺失，匯入後要重建圖層。

當然也可以直接在 VoxelShop 完成繪圖，包含調色盤、對稱繪圖等功能比 Goxel 更完整。

題外話，`.vox` 檔案的規格是公開的[^vox-spec]，完全可以照它的格式實做在其他軟體上。

## 輸出 Collada (.dae)

到[這裡](https://github.com/simlu/voxelshop/releases)可以下載 VoxelShop，執行方式如下：

```shell
java -jar voxelshop-start.jar
```

輸出的時候 Object Seoaration 記得選 "Per Layer"， "Merged" 會把所有圖層合併：

![](./img/05_VoxelShop.webp)

完成輸出後，你會得到兩個檔案：

- `<name>_texture0.png`
- `<name>.dae`

其中 dae 檔中對於貼圖路徑的描述在 blender 匯入的時候會有問題，至少在這個環境下是有問題的：

- Linux (Ubuntu)
- VoxelShop 1.8.26
- Blender 2.82

要把 dae 檔案中的：

```xml
<init_from>file://test_texture0.png</init_from>
```

改成（檔名請依實際情況做修改）：

```xml
<init_from>./test_texture0.png</init_from>
```

## Blender Time

### 改變貼圖模式

匯入模型後會發現貼圖糊糊的：

![](./img/06_blender.webp)

這需要修改貼圖的內插模式 (texture interpolation)，選擇模型後到材質的工具選項，展開 Base Color ，把 `Linear` 改成 `Closest`：

![](./img/07_blender.webp)

### 重新命名 UV map

因為需要把拆件的模型合併成單一物件才能綁骨架，但是直接進行合併的話會造成 UV map 設定損壞（貼圖失效），在合併之前要先把 UV map 命名成相同的名稱。

▼依序點開不同的部件然後修改成相同的名稱

![](./img/08_blender.webp)

### Join 模型

▼匡選所有要合併的部件後，按下滑鼠右鍵之後選擇 "Join"

![](./img/09_blender.webp)

### 綁骨架

▼`Shift + A` 叫出選單後選擇 Armature

![](./img/10_blender.webp)

▼開啟 `In Front` 我們才能看到被模型包住的骨架

![](./img/11_blender.webp)

▼在選擇 Armature 時的編輯模式，按 `Shift + A` 可以繼續新增骨架

![](./img/12_blender.webp)

▼持續新增、調整位置的動作直到完成骨架

![](./img/13_blender.webp)

▼記得要幫骨架命名，不然等等調權重時候會分不清楚是在調哪個骨架的權重

![](./img/14_blender.webp)


▼接著先用滑鼠選擇人物模型，按住 `Shift` 再用滑鼠選擇骨架，然後按下 `Ctrl + P` 會跳出選單

![](./img/15_blender.webp)

一般的骨架教學會選擇 "With Automatic Weights" 即自動權重，不過因為 Voxel 的模型所需要的權重模式和自動權重賦予的模式不相同，這裡我們選 "With Empty Groups" 就好，選了自動權重也沒關係，就是要把多餘的權重「塗掉」有點麻煩。

▼接著我們選擇模型後進入權重編輯模式

![](./img/16_blender.webp)

![](./img/17_blender.webp)

▼在編輯權重之前記得從 「Vertex Groups」 選擇想要編輯的骨架

![](./img/18_blender.webp)

▼接著我們需要選定要編輯的區域，「塗權重」時候才不會影響到不想影響的頂點。

1. 進入面選擇模式
2. 選擇一個三角面
3. `Ctrl + L` 選擇所有相連的頂點

![](./img/19_blender.webp)

▼選擇筆刷模式後，選擇點編輯模式，接著拿筆刷對著頂點塗塗塗

![](./img/20_blender.webp)

▼設定完權重之後，骨架的綁定才算完成，接著只要控制骨架就能控制模型囉！

![](./img/03_result.gif)

## 後記（aka 廢話 part 2）

除了 Warzone2100, FreeCiv 這種被文章盤點開源遊戲時一定會收錄的「大作」之外，我平時也會在 Github 上逛逛看有沒有不知名但是有趣的開源遊戲，撇除程式面的不完整，大部分作品就算具備相對完整的遊戲機制但是其美術方面通常都慘不忍睹，或是其素材的部份並沒有給出開源的 license。

舉例來說這是 Javscript 圈最大型的 Voxel 專案 (つд⊂)：

![https://miro.medium.com/max/5752/1*cuXvo8U9Vj0VILU9yXwYew.png](./img/21_voxel.webp)

當然這樣比較有失公允，畢竟開源圈也有 0 A.D. 這種優質作品。

而另外一個面向是素材平台，opengameart 上的素材不論是質還是量都比不上 itch 這類還是以上架為核心訴求的平台。

當然這種比較基本上是滷蛋比雞腿，開源圈跟獨立遊戲圈的創作者（一併稱呼開發者跟媒體創作者）其根源就不太一樣。獨立遊戲的創作者的終極目標通常是上架獲利，對於 license 的開放與重視程度也比不上開源圈的創作者，itch 上就有很多「免費素材」但是上傳者並沒有明確的聲明 license。

而開源圈 (github) 上許多作品都是工程師拿來練手的 side project，頂多就是進階版的「Hello World」，完成度當然不能跟本就衝著遊戲開發去獨立創作者相提並論。

雖然自己也會畫一些 pixel 素材用在專案上，但是我感興趣的題目類型還是 3D 的居多。

> 希望我的 side project 有個好看一點的門面

在這樣的心情下，試著去學習如何使用 blender 實現我的目的。

從產生動機到綁完骨架的時間順序大致如下：

> 2021-11-27 找到畫 voxel 的開源軟體
>
> 2021-11-28 把人物生出來
>
> 2021-11-29 試著輸出成拆件的模型（有些軟體輸出面數很高，甚至不是封閉面）
>
> 2021-11-30 試著匯入 blender
>
> 2021-12-01 匯入 blender 試著綁骨架
>
> 2021-12-02 早上摸了一會還是不會調權重，畫面跟教學長得不一樣
>
> 2021-12-02 晚上參加 blender 小聚，解決模型合併跟 UV map 壞掉的問題（野生路人一起討論）
>
> 2021-12-03 晚上參加獨立開發小聚，解決不會畫權重的問題（野生路人指點）
>

我都覺得自己在「speedrun 學習綁骨架」了 (°﹃°)

雖然本職是軟體工程師，不過畢竟本人不算真正意義上的零經驗者：

- 有學過參數建模（俗稱工程建模）
- 做過 CS 1.6 地圖
- ~~在遊戲公司上班，可以從空氣中吸收美術同事的經驗值~~

所以我想這個 Blender 學習曲線不能當作通例 XD

[^Ken-Silverman-web]: Ken Silverman's Voxlap Page. (Ken Silverman). Retrieved 2021-12-10, from http://advsys.net/ken/voxlap.htm

[^Mini-Mikes-Metro-Minis]: mikelovesrobots/mmmm. (Mike Judge). Retrieved 2021-12-10, from https://github.com/mikelovesrobots/mmmm

[^vox-spec]: voxel-model. (ephtracy). Retrieved 2021-12-10, from https://github.com/ephtracy/voxel-model/blob/master/MagicaVoxel-file-format-vox.txt


---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。