---
slug: 2026-04-07_mobile-furnace
authors: [weiji]
tags: []
---

# 大學專題：移動熔爐（重發）

:::info
這篇是 2019 年我在大學時做的畢業專題，原本發在網際網路上[奇怪的地方](https://www.erepublik.com/en/article/-flypie-s-school-time--2688865)做封閉測試（？），簡單整理之後重新發一次。沒有做太多修改，整體結構跟圖文保留。
:::

![](./img/00_cover.webp)

## 電路 POC

這次我決定製作一個電阻式的加熱爐，

並且能夠控制溫度，所以需要用到熱電偶和加熱線，

以下是我在測試固態繼電器、熱電偶這些我第一次使用的電子零件。

![](./img/02_component-test.webp)

![](./img/03_hmi.webp)

為了調整溫度控制器(PID控制器)，所以在嘗試各種常數

![](./img/04_pid.webp)

## 加熱爐爐體

接著是爐體，用耐火磚+水電角鋼焊接而成，先是用鋸床裁切原料

![](./img/05_build-furnace.webp)

![](./img/06_build-furnace.webp)

![](./img/07_build-furnace.webp)

在完全銲死之前先確認加熱效果如何～

![](./img/08_build-furnace.webp)

![](./img/09_build-furnace.webp)

噹啷～完成啦！

![](./img/10_build-furnace.webp)

然後在測試的時候發生：固態繼電器缺乏散熱的問題。畢竟沒用過得電子零件，一開始沒買散熱麒片，接著就發生了慘劇...它熱崩潰啦((( °Д°)))

即使把開關訊號中斷，加熱器仍然無法斷電。後來拿電阻檔去量，隨著繼電器的冷卻，電阻值慢慢上升（恢復斷路）。

很巧的，這時我手邊有一個一體式水冷...

## 一體式水冷

![](./img/01_water-cooling.webp)

♪我有一個水冷排，我有一個缺乏冷卻的固態繼電器♪

於是...我就試著自己改裝了一個一體式水冷XDD

第一件事當然是CAD啦～（痾...後面很多開發因為我無法讓材料去適應設計，而是設計去適應材料，就略過了CAD的步驟，主要是預算不夠充沛的關係），這是要貼在固態繼電器上面的散熱器。

![](./img/11_cooling-cad.webp)

![](./img/12_cooling-cad.webp)

側面的洞洞單純是前人留下來的，這塊鋁是廢料orz

![](./img/13_cooling-block.webp)

接著為了管線的規格統一，所以把水泵的外殼魔改了（基本上...自己造一個新的）

![](./img/14_cooling-cad.webp)

先用銑床弄出長方體，再靠製具進行車削，畢竟手邊沒有四爪夾頭 `¯\_(ツ)_/¯`

![](./img/15_cooling-component.webp)

![](./img/16_cooling-component.webp)

![](./img/17_cooling-component.webp)

原本想用止付螺絲把散熱器加工痕跡鎖起來，之後就可以拆開來維護，不過卻乏密閉性，還是會漏水，最後很可惜的只能用一團膠封起來Q_Q

![](./img/18_cooling-component.webp)

## 配電盤 V1

然後是電箱（版本一，後來改版惹）

![](./img/19_electric-case.webp)

接上線～

![](./img/20_electric-case.webp)

當時有拿著這張圖去請教做水電的網民（？），於是就去買了符合安培大小的電線重配

![](./img/21_electric-case.webp)

## 實驗性質的氣壓式壓罐器

當時其實是抱著「做產線設備」的心情去實做的，所以想說壓易開罐這個動作是不是能順便自動化，就做了一個氣壓式的壓罐器，可惜壓力不夠，罐子要先捏過才壓的扁

![](./img/22_air-compressor.webp)

![](./img/23_air-compressor.webp)

## 簡易坩堝

800度的環境畢竟蠻惡劣的

![](./img/24_hmi-screen.webp)

如果照著Youtube上的方式用奶粉罐裝鋁湯，其實蠻危險的，\
看，~~車諾比前後~~

![](./img/25_can.webp)

於是我去跟我的指導教授要了鐵板，而且是令一組專題生用剩的邊角料XD\
![](./img/26_steel-plate.webp)

...焊了一個坩堝

![](./img/27_crucible.webp)

還順便做了夾具，其中勾勾的部份是我鍛打出來的

![](./img/28_stick.webp)

## 鋁錠鑄造（子系統整合測試）

然後我就很開心的拿著我的~~鑄造套裝~~去玩鑄造了

![](./img/29_casting.webp)

![](./img/30_casting.webp)

![](./img/31_casting.webp)

![](./img/32_casting.webp)

是鋁錠！比我高職做的還大顆耶(๑-̀ω-́)و✧

![](./img/33_casting.webp)

好了，驗證加熱爐可以勝任鑄造的工作之後，開始準備砂模鑄造

## 砂模鑄造

去挖來的沙土因為夾雜很多小石子，會讓砂模的連結性不好，所以要篩掉

![](./img/34_sand-filting.webp)

然後我做了砂箱

![](./img/35_sand-mold.webp)

接著就是澆鑄啦

![](./img/36_casting.webp)

![](./img/37_casting.webp)

![](./img/38_casting.webp)

![](./img/39_casting.webp)

最後得到兩個成品，一大一小的劍，大劍的充滿了失敗orz。這個鑄造的過程我算是跟社團（？）活動綁在一起，要感謝過程協助的其他社群夥伴，不然大劍的成品無法完成。因為坩堝不夠大，所以需要先倒出來一鍋鋁湯到其他容器，然後用噴燈保溫。

![](./img/40_sword.webp)

![](./img/41_knife.webp)

在這之前的鑄造都只是用一些廢棄鋁料拿去融，到這裡為止算是我整個專題完成度最高的部份。但是我原本的題目包含了回收易開罐，所以其實還有一個空氣淨化系統orz，老實說最後功能沒完全實現，畢竟是最後幾個月瘋狂趕工的產物（？）

## 骨架與空氣過濾器

因為易開罐上面其實有塑膠塗層，丟進加熱爐這些塗層會燃燒產生煙霧，所以我打算製作一個裝置能夠淨化這些空氣。原始概念是用水幕去打這些空氣，把污物吸收進水裡變成廢液，最後比較好處理，畢竟比起廢氣和粉塵，液體比較好封存跟運輸。

那個三角錐是我打算用來製作旋風分離器的部份

![](./img/42_frame.webp)

旋風分離器是什麼呢？一言以敝之---「Dyson 吸塵器集塵原理」，就是靠離心力把顆粒跟空氣甩開。

然後我的專題就多了一個750w的離心式風扇，然後還多了一個60w 0.8MPa的水泵。

恩？水+鋁湯應該會發生水蒸氣爆炸，然後我的專題把這兩個東西放這麼近，旁邊還有一個高速轉動具有高動能的風扇！？(╯°Д°)╯︵ ノ(｡ー｡)ヽ

於是我的電箱第二版就出現了，為了解決這個風險，我加入了緊急停止按鈕。

![](./img/43_PowerSystemDiagram.png)

登登～按下按鈕後會把大部分電源切電的電盤就產生了

![](https://lh3.googleusercontent.com/VdOR3FhvuNX5jPQDUeS5dIBlLFLhp0ecH-tH1bnSEbwtw8TVizD3IDtwTTwv6vOZqLisPRsEacverXEjRcwq3KVVrzCXSbIbWP8Usom43LX_-K4DziE5IsqilbplI4Z_eXLmPy1g2Uoq6to9PMbokJRBRZQgFeqd1xSm2EBwvDCcf-hKKxXdKVjctHX29R7sO8xyRaR9nlUuV2QMzGHya2chfgIkKSqx1HzCbSRK2T4hibCqBXnVpyphk8H7lMJXSrqi0z46SL-tr6agLWm4Ymvfi00CD3NYAdMfk7CyuWhM_vTLd_W6x8BWMlaQFb41A2_4g1k750qC3Rkq6mwM_My11xsjiobs0IEd8_izpN9Czd9J9ZUUFTOazOu3KymBRIsw9dBrsH9tYZ7aAIJhLjBoFOlIl9p8fv5SGtFhWctprfiXB9aTgboQ0K8OkozMibeppbj2Tc19N76Fp11LYJq2LOeJZwHG66QlC-ZvbNAegy21kqi8wixXcapqVcJPamVdGCTD3xNkYWXFYQXx7XgUyZNPfv0Xw0b-Yy7J78jshnpDfMrAssj2iec7-SoasmazW5_rW_auYrcRgFuEAKW31hSfTxE3_An8PHMcsRLY0mQhNWi5Su8c-NmYA7povLCdbN8G9sI2zkaiSn1NB4VQ=w970-h645-no-tmp.jpg)

然後為了更降低風險，我要把爐體、電箱、水管三個東西確實的分離，於是我的框架就必須做成完全封閉式的。

![](https://lh3.googleusercontent.com/Qk92IjbbO_P70MvpDz4gp2HI8PpaD8i-kGs-Zc55DBGwOZHzAtKb9rGaWKRRNqcrQaBGVV9AESl4SjXvok3rzfKj8veB7wvW8hOD20AD77I8WxYuS0Ze3vme6Arj2EEkwK2LYU8VNU2DCXIkHTMFrV6_UFBJUWh_Oj_R_NHAL4UeThcU-180hwZiT92RdcdnKTnuVnPA--eNKsk239oiiKMh9ylUapcAmQZqU96JBal47QjF7rRHRqDAnJPK_Lr8rg2aopJCAziCOigBytWFIYqOjoJBHMs5zMFINLNFwEl3GFAHfWBhPszz6j6dQiFMVqjqahnDGIXRZ0h8SO6BlbWALxIJrfAzI5bDzeqGxv36Iberk9PKzXLB_Kgw0fCS5pdYZ5pLVD9NIMPVjfdGd7Dp9bar-bL8Pp35y6bYHUw0Lx_-hbZtk0yXCxQ5UVtDNa1S39TJkP20P0s8A30WsLizzpGrDjX-WyEnyx8Io2Z7Me31tXWBOUt5NrhmXD3HvfPAIMVYRHrDlolFqZDGZxO8PTJmbvil640nTRCzJmx83neDG4QQlkUELuuQf5752awVSMcdD2E3YLRSCsK6NNro73lgdDNhsGgz65Ufj43NJlQBlVQ7I-0PIGJ5nbmhchrBhWOvF1qLVue7Q1rc9Fcz=w970-h645-no-tmp.jpg)

我還弄了補土來把間隙填掉...

![](https://lh3.googleusercontent.com/_m-au3-1CHx7n4F3WDVUnvb2VHsNe7P-d4Oqtg0FnWB4duxL6OeYjj4z59Bt-KEJYyEkMoNmkQqbXJJCvF38vyYB7zhNoJ_kb-yDlqBLh-zDV9cpgQjbDYMJJ0ErGpAhe-U2lqXMZflvorljKt8adNMr7FxECY1j-CTyySKIhkWqiCh0UMuCuHnpB9n5EBKhbtGkKEZLwJ9D440GCNrz5a6GTbmLUb8VYYYedkyVR6XgXQf13KELhWZouF-qcAqUH1GJefCB0QUJzaLnB6MnPwYCs3lyUNFSa_NoNiQV9BoOiYSJn0MDKIhNs10oBcC1IqQ6377kxXbcGUJyAqCTn5pS9WugNuyL5OZ7iiScAcxCdVzOnUc5AIHBpk3oCXF1tk3qcyWN6fIZ20YLKq9cHy_tRH1mCNGpfslreKPLTQ-kLIlonCg4JvvbBZDg4b8vEaUu0ppp-RkdeQrVH2JlWZ175Cy5Rf8-2ULibmncmTccHT9pz_biHdv5KtaOmsUyey-BE_Ppbtlm29CkrOLCEyGl_DCKo0F-zuFO-IdXFBnjnGxgXZlK9RrRgwhmMK-yzw4MppU_OBb36A2gKfkM3Nh13EJj8EjFuP1qahMMNzD5fI0e67L85rtW-W839K47J0DnKIHjTQ120F5yEfibiQE7=w970-h645-no-tmp.jpg)

原本的水冷制動電路則封裝成模組

![](https://lh3.googleusercontent.com/spb3PU0mKdKHSjb-OfjA6EdJasWwriA4zCOHh2sJeWDrtiTnaz9QgNa_D0_OQ4gjfWMMZfaBHk5-8DqSvE4hllUV2VSV01jh0KwYxdneRmSTsm5bSMzbe8fWqxEXO8ZwJOpVA-KkdWRR0m61Lw48NScfwMfNWbbM-NZ7Qg_vjigm5cCfmfaVUS_bTEl6IL3A-VPhIN2X1jTVYG4eIE6ocOziOklC7pM7VMgilW7mcM05edzIyj2biG8zxrfzZYsMpt43GqHHPbJPXFCWq5gt_p8MantQOOlbPegFogq4GsK1yzW8Xm-q5SiH6lbYq13re_xLcrspS_roqA6FC1p3m73kBwjQ5Ueh5Aga_1_0Qj55x51l_dkzWkbiQ3Glhtlw1fdjucIl3jcRNSN-LD7yvhMWfm9I_lxAwk74QTlmhuh1gz_zMyqGVwQpKQt6n068vqYjWD8j2CRHx6xzwdaI1-QokjJsaflppX4RN_3GIy7YOuj4Q6t--0rldTK61znASYX34N3cTvVz0mGZaoH4e4dJMPKNodyVTfzMlc6NuP3N9QU4ZY2XTgMhvae14l9bjwqbUUov6fwAzPdHDXk__rfDlNOPUaDkwIh8iknxQ5JVWrPlz3BPxhCuKen4t5-fv12eUTmIQ5cwLwpboIsfPiQ1=w430-h645-no-tmp.jpg)

總之，把外框上補土、噴漆、挖洞，然後把該放的東西塞進去，之後再蓋起來...就是成品啦

![](https://lh3.googleusercontent.com/6GwB4LKxg8mUCYEGG1eSDSBmDmSEDlm-gf5rIJ-MlYSf56GePw8BlEdTwku8HRy6M90W4FyV31OcKHz1BJWGILXEKZAjBJHYO7eb-oPSLOKiflen7ryanSNxcyV6Mbr7zGDV8L2_l3LJdHuV8RRL9ecU7OQppXBvqHzWS-z1eWqXrbOGFytFOOJBqcC-ttu62hYDQLSZWshygsqrv_cibWiNQCo55WNt9DePdO1ptXE5r9JcftRS3_1jE6oNbUFO5nLC5r5RwBnbOpvvOUR1YNTZTyssjzlvqUhZQA4_HDOLnlpj9ZfBcFy2EgRXZeHFLvl9KCAXx6rXDgGywW3yN_rFG1O691n9xjXtJsc1ak4UnWZrZEeTY48Asdt22mLLHbBQ0WggdDIHGcyouX7DNjd8YtC5HPeNrk7x4QNdq49LIW70_dK-gcAkE7KsxSCRkgdZiFyByDM0Ogwg9OKCQfZ6t0mzcxsp6sfnz-VR_CHJnjcKmDDztW675K82hSBKxe_zVpncJurHuExmsMdtDyGsgM9CfZlNjtPbImgIWlPYvUX8_WuX2yZIMeJvIklbnCPN4z1_rKx8ztC3IvCjrT8rz60Rm5G12Gc8gjpV4NYcKlwrlYqoHeKtTl_irXiOD867cVGWlUQYZhGPLRsPGaWM=w430-h645-no-tmp.jpg)

![](https://lh3.googleusercontent.com/DscFVLKlqPqKi9ctsK16p6tYwORDdMwLxB3W5cL9jWd36le0szXJ8GdSZKkBq3_6L2krmAMxGCwS646hRAcjHa3Ep2ejoTq96kVO4EEKUvar3sf1sD0IGYfOC1xJctxJMVGt9E1wK6G8Zck8Tn65Wmy97j-zX-HtJWVmFaY3EMLpEZNb3tRrkl2AAMYunUWsvN7UYxF70aFLqRmumqDo-zJXHUn23Rkv02j9v6Yvf_jZXShlfninpUufrHi0FENe6Kgtc_TjctJSCmsw83aJVqPaMdBt2V6Iawjopk5u5KCD2ptk2RnRTDMoU9YHTlfPl3xGdDgV0ch8VUdORovmesB63B8zLVhIYSKHXSW7WLCpQuL6g3Xhe6-TBTwFsQNZrMVYlNtL8rrqAcXhpfqUrvNtw0hgyas_RlVXukfF-am4cpP4JjYUaYUMUqBlxRBfPCZSOx42HfB_wb80_AI6txyNdUts5IISibe6FYXwhpj3lTwv3-tKBhUbOe6FIbT1_4tYtGOcjGNLF-hfJOl_RU4d-iTGKSaqsQpf_QjFi0c-NIQ6NYjuP5m7-rniAOD8ZAmZ_mZ2bEnWf6n_ZsHnHa4WbYap_M0GPuCQAZZgdtizGriu6YFMS3mhzpeSi83b76Dg_A2D_jUOeeORA5HfnbvK=w363-h645-no-tmp.jpg)

![](https://lh3.googleusercontent.com/dNBsfmQ7LBEycbYBX1JdIaXUnuurOYuqAEDf-C6NLYQNx5WXbEItMpMWnkMnvFSeQqFlVoyUoVc_Pk7t48GRoB44_xJNg09_whdL8_id28fFibcU9p548aqhpLxjD7ksI4U3kQsEnYaUqJmvd02UhOsW0013Ju5qr4jhqLxQrnCpmOB9hC8eU5q4fKj5KKdN61Eq56eGOPVWD6fmDF5UFB-XvgW4iDU42ErD4GqhYN0vi-sUrXk3a71EZHmAd9fiOmUUlQgPvOHCYCi2iwtWi1mqEyzJuLXrwlpqDUJK-8QTsjjTzKJvq26SRz-ROyrvKGBr7IUasvKDw39Bg4BC-VH4lEVEjbYQJvtp9Lwh-30uHc11TesrZ5SOMvraCyJU_3IK8MLtuf1Pk3O2_5cBH8M5lBEY7e__8H6zRPz3gnJ-K_ckQlBOqyRVQJnuKRb5e5c8yQKfqLB8-O39jaaBY_AXUbFHhBQfuscxg3QCyvO37EVamoUqlnAYb7ER5lD9emZIIMHXpN1D2MPon7diG5S3Dlj-o9WdaYVeD7mWpkj3d4fJfUEYhWAGeqg7J-B0Q_xfIsMOWzMkPe5U29h1jF3BZuKK3rL-B0SpPivXaTJB0aDis5omuQoBmze5hiSBSm18i7qGXCIG1iY2bILv2Hip=w970-h645-no-tmp.jpg)

