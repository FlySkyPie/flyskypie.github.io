---
slug: 2023-01-17_a-journey-about-2D-skeletal-animation-of-runtime
authors: [weiji,]
tags: [development note, The Key of Huanche, Gear Redolence, 2d animation, skeletal-animation, DragonBones ]
--- 

# 一場關於 2D Skeletal animation 動畫的 Web Runtime 的旅程

## 前情提要

如果對我的 Side Project 「底火的芬芳」不清楚的讀者可能需要先閱讀[底火的芬芳 - 專案起源](/blog/2023-01-04_origin-of-gear-redolence)才能理解這場旅程是怎麼開始的。而最近 (2022-12-19) 在逛 Github 的時候晃到一個 [repo](https://github.com/neko-gg/gfl-combat-simulator)，它是[少女前線](https://en.wikipedia.org/wiki/Girls%27_Frontline)這款遊戲的數值模擬器，往程式語言構成一看是用 Typescript 寫的立刻勾起了我的興趣。

## `neko-gg/gfl-combat-simulator`

2022-12-19 在 Github 上閒逛的時候，看到一個 [repo](https://github.com/neko-gg/gfl-combat-simulator)。

> 喔啦啦，這不是 Typescript 嗎？
> 喔啦啦，這不是 React 嗎？
> 是我的主場呢 = =+
>

於是就 `clone` 下來研究研究。

後來（約 2022-12-20）照著 `README.md` 的指示：
```shell
yarn update-resources
yarn update-assets
```

找到了 [ResourcesUpdater](https://github.com/neko-gg/gfl-combat-simulator/blob/senpai/src/app/data/ResourcesUpdater.ts) 和 [AssetsUpdater](https://github.com/neko-gg/gfl-combat-simulator/blob/senpai/src/app/data/AssetsUpdater.ts) 這兩個程式，發現它把遊戲素材放在另外一個 [repo](https://github.com/36base/girlsfrontline-resources)。以及會從遊戲官方的 cdn 下載名為 `ResData.ab` 的檔案，因為不知道是什麼檔案類型，就用 Hex 瀏覽器打開來看：

![](./img/unity-asset-bundle-binary.webp)

啊啦啦，原來是 Unity ResData Bundle。

另外，從 `ResourcesUpdater` 看到它呼叫了來自 [ChibiUpdater.ts](https://github.com/neko-gg/gfl-combat-simulator/blob/senpai/src/app/data/ChibiUpdater.ts) 的方法，稍微研究一下內容發現它使用 Puppeteer 打開一個[網站](https://naganeko.github.io/spine-gif/)並做了某些事，不過因為程式碼已經有點過時了，網站已經被移到[其他地方](https://naganeko.pages.dev)，DOM 的操作也和原本腳本內的方式有點落差。研究了它使用 Puppeteer 的方式，看得出來目的是取得一張 Chibi 站立的圖片。

- 原始的 Chibi （程式內對人偶的稱呼）檔案是將人偶拆件，並透過組態檔組裝的。
- naganeko 的網站能夠上傳 Spine 檔案，並播放動畫。
- naganeko 的網站也能下載組裝後的圖檔。

試著逆向工程 naganeko 的網站，發現它應該是使用了 Spine 的 Runtime。

## 2D 骨架動畫

在 3D 模型/動畫中，會使用骨架 (Armature) 綁定模型節點，並透過權重、關鍵影格等方式讓模型執行動畫。

透過把模型壓扁，將這種技術應用在 2D 場景就是 2D 骨架動畫，可以解決傳統 Sprite 的一些[限制](#sprite-限制)。另外還有三渲二之類在遊戲開發上常見的手段，不過不在本次題目的討論範圍內。

### Spine

[Spine](http://esotericsoftware.com/) 是目前極為普及的 2D 骨架動畫 tool chain。用工業建模比喻的話就像 SolidWork，或是美術產業中的 PhotoShop 以及 Illustrator。原因在於其應用端成功的布局，包含 Unity3D, 又或是網頁遊戲開發 Three.js, Phaser, PixiJS...之類的執行環境，有著非常廣泛的 [Runtime](http://en.esotericsoftware.com/spine-runtimes) 支援。換句話使用它的產品，佈署目標的選擇十分多元。

然而這個格式終究是商業產品，編輯器本身需要付費，使用者（如：遊戲開發者）也需要購買[授權](#spine-授權)。即便有 Runtime 的原始碼，其授權範圍仍不算開源的範疇，對我而言尋找替代方案就很重要了，因為我只是想寫寫 side project。

### 替代方案

與 Spine 類似的產品還有 [Creature Animation](https://creature.kestrelmoon.com/)、[Rive](https://rive.app/) 之類的，不過它們跟 Spine 一樣都有一股商業味，自然就排除在我的選項之外了。

往開源的生態系望去，則有 Blender 的生態系內有個名為 [COA Tools](https://github.com/ndee85/coa_tools) 的工具能夠製作 2D 動畫。或是 Godot 作為開源的遊戲引擎也有內建的 [2D 骨架動畫系統](https://docs.godotengine.org/en/stable/tutorials/animation/cutout_animation.html)。

只是我懶得自己重頭綁骨架跟刷權重，能夠直接用~~撿到~~的少女前線檔案轉檔是在好不過了。

### DragonBones

最後 (2022-12-22) 決定使用 [DragonBones](https://docs.egret.com/dragonbones/en) 的格式，雖然編輯軟體本身沒開源而且只能在 Windows 執行，但是至少是免費的而且能夠用 Wine 跑起來。這個工具背後的中國公司的 Tech Stack 算是從 Flash 長出來的，後來往 Javascript 轉型。因此它的 [runtime](https://github.com/DragonBones/DragonBonesJS) 支援不少諸如 Three.js Pixi, Phaser 等知名的 Javascript 的套件。

最重要的是，它能夠匯入 Spine 格式的檔案，並輸出成 DragonBones 的格式。~~這樣我就可以直接撿 Chibi 的檔案來用囉～~~還有其他考量就是，如果編輯器也是基於 Javascript 的話，日後逆向工程起來比較容易。

![](./img/smile.webp)

## DragonBonesJS 重構

然而 DragonBonesJS 的 Javascript Runtime 自 2020 就沒有維護了，而且並不支援 ES6 的模組載入方式。從程式碼看得出來它使用的設計是有一個處理事務邏輯的核心，以及針對各種不同套件實作的 Runtime 。因此即便我重構了核心，也無法直接測試，必須選用一個 Runtime 作為測試用途。

原本支援的 Runtime 中，Three.js 是我的目標，但是沒有充足的 Demo code 能夠測試重構，當中的 Phaser 是我有接觸過得遊戲引擎，但是它的[實作](https://github.com/DragonBones/DragonBonesJS/tree/master/Phaser/3.x/src/dragonBones/phaser)較為複雜，而 PixiJS 的版本我雖然沒使用過，但是[實作](https://github.com/DragonBones/DragonBonesJS/tree/master/Pixi/4.x/src/dragonBones/pixi)比較簡單，只有 4 個檔案，於是重構的任務就拆成了 3 個部份：
- Core
  - 真正處理動畫邏輯的部份
- PixiJS Runetime
  - 主要是為了完整的 Demo 範例，好測試 Core 的重構運作正不正常
- Three.js Runtime
  - 目標，因為我想把 Chibi 丟進 3D 的空間中

Core 跟 PixiJS Runtime 的重構過程沒什麼好紀錄的，就是要轉換成 ES6 的寫法跟解決 `tsconfig` 設定不同的問題。Three.js Runtime 的重構過程倒是問題不少。

### Three.js Runtime 重構

DragonBones 提供的 Demo 中，只有線性變換的部份（Translate, Rotation, Scale），並沒有包含網格變形，當我匯入 Chibi 的檔案時，得到了破圖的結果：

![](./img/glitch.gif)

慶幸的是在 issues 撿到野生的 [patch](https://github.com/DragonBones/DragonBonesJS/issues/133)。

接著要處理的要件是升級 Three.js 的版本，DragonBones 遺留的程式碼僅支援到 0.89.0，而目前版本是 0.148.0。升級的過程遇到一個問題是 Three.js 在 0.125.0 的時候棄用了一個名為 Geometry 的物件，而在 DragonBones 的實作中是仰賴這個物件的，即使可以透過 [Legacy Code](https://discourse.threejs.org/t/three-geometry-will-be-removed-from-core-with-r125/22401) 拿來使用，卻會有性能問題。

### 重構成果

- Runtime Demo
  - https://flyskypie.github.io/dragonbones-pixi/demo/
- Github Repo
  - https://github.com/FlySkyPie/dragonbones-js
  - https://github.com/FlySkyPie/dragonbones-pixi
  - https://github.com/FlySkyPie/dragonbones-threejs
- NPM Package
  - https://www.npmjs.com/package/@flyskypie/dragonbones-js
  - https://www.npmjs.com/package/@flyskypie/dragonbones-pixi
  - https://www.npmjs.com/package/@flyskypie/dragonbones-threejs

## Three.js Chibi Game Sample

就只是想做個概念驗證：
- 如果我有一個 2D 人偶
- 放進 3D 空間，像是[Three.js 的範例](https://threejs.org/examples/?q=control#misc_controls_orbit)
- 做成類似[尼爾：自動人形](https://youtu.be/xXOa4xqtnfE)駭客小遊戲的風格

[![](<http://img.youtube.com/vi/lVCbXohxvPQ/0.jpg>)](<https://youtu.be/lVCbXohxvPQ> "Three.js Chibi Animation Shoot Game Prototype")

## 註解

### Sprite 限制

傳統 Sprite 是透過切換數張點陣圖達到視覺暫留的動畫效果，點陣圖除了繪製費工之外、檔案較大還有幀數受限制等問題。

與之相對的 3D 模型是用點數據構成的，也就是所謂的向量圖檔。透過綁定骨架就重複使用同一張貼圖製作不同的動畫。

### Spine 授權

Spine 的授權規則很哆嗦：
- http://zh.esotericsoftware.com/spine-editor-license#s2
- https://github.com/EsotericSoftware/spine-runtimes/blob/4.1/LICENSE

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。