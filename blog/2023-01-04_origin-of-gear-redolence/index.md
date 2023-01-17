---
slug: 2023-01-041_origin-of-gear-redolence
authors: [weiji,]
tags: [development note, The Key of Huanche, Gear Redolence ]
--- 

# 底火的芬芳 - 專案起源

<head>
  <meta property="og:image" content="https://i.imgur.com/5goLufj.png" />
</head>

大約 2019 年四月的時候，身邊有玩少女前線的朋友，並且當時又接觸一個名為 [Dental Defender: Saga of the Candy Horde](#dental-defender-saga-of-the-candy-horde) 的[小遊戲](https://github.com/cshepp/candyjam)，它使用 Phaser 引擎撰寫，於是我稍微試著了解一下 Phaser 引擎的運作方式與 Tiled 劃地圖的方法並分別在 FB 留下了[兩篇](https://www.facebook.com/wei.ji.355/videos/1201535273352416/)[貼文](https://www.facebook.com/wei.ji.355/videos/1220239104815366/)。

2020 年六月份的時候在 Github 晃到一個 [repo](https://github.com/victorqribeiro/aimAndShoot)，它是一個有點像 diep.io 的簡單小遊戲，只是主軸是人類玩家對抗一堆 BOT，並且這些 BOT 透過簡單的機器學習理（論上應該）會越來越強，然後當玩家輸掉時遊戲還會嘲諷「你真是人類之恥」。因為我很好奇這個機器學習的效果如何，於是就簡單的改寫程式變成 BOT 4v4 的形式。

[![](<http://img.youtube.com/vi/li8QD1xyldo/0.jpg>)](<https://youtu.be/li8QD1xyldo> "aim and shoot test")

接著我又想「何不把機器學習包裝成類似少女前線這樣的角色蒐集遊戲？角色的強度依靠機器學習的性能而不是由開發商設定參數決定」，並且把這個概念寫成簡單的 UI。

[![](<http://img.youtube.com/vi/P_3_XaCzm5I/0.jpg>)](<https://youtu.be/P_3_XaCzm5I> "UI Prototype")

2020 年七月底，透過[重構](https://github.com/FlySkyPie/dental-defender) Dental Defender 來熟悉 Typescript 與 Phaser 引擎，就是為了實作這個概念而做的準備。也大約是這個時間，這個專案的名稱敲定為「底火的芬芳」。然而後來 Sprite 畫得有點煩加上工作忙碌再加上又跑去追其他[蝴蝶](#蝴蝶)，因為跟 AI 相關，這個專案就併入 The Key Of Huanche 作為子專案並暫時被冷凍了起來。

---

後來斷斷續續有畫一些素材也是為了這個專案：

![](./img/health-bar.gif)

![](./img/spirte.png)

## 名詞解釋

### Dental Defender: Saga of the Candy Horde

遊戲開發圈有一種活動叫做 [Game Jam](https://zh.wikipedia.org/wiki/Game_Jam)，就是聚集一群愛好者在數小時到數天之內完成一款遊戲。而這個小遊戲來自一場名為 candyjam 的 Game Jam，原因是一間名為 `King.com` 的公司（就是 Candy Crush 的那間公司）在 2014 年將 "candy" 一詞申請商標，並指控一些獨立開發公司侵犯他們的商標。這一舉動激怒了獨立開發圈，於是他們舉辦一場 Game Jam 專門製作 "Cahndy" 相關的遊戲來對 `King.com` 表示抗議。[^candy-crush]


### 蝴蝶

本人有嚴重的[閃亮事物症候群](https://en.wikipedia.org/wiki/Shiny_object_syndrome)，習慣將自己跑去玩其他 Side Project 比喻成追蝴蝶。

[^candy-crush]:  Indie Developers Troll King Games Hard With 'Candy Jam' | WIRED. Retrieved 2023-01-17, from https://www.wired.com/2014/02/candy-crush/

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。