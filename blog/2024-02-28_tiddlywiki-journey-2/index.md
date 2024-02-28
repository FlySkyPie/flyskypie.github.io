---
slug: 2024-02-28_tiddlywiki-journey-2
authors: [weiji,]
tags: [TiddlyWiki]
--- 

# 我的 Tiddlywiki 之旅 - 插件

撰寫 Tiddlywiki 條目的預設語法是 Wikitext，這自然便成為我這個 Markdown 使用者在使用 Tiddlywiki 遇到的第一個問題。幸好這個問題可以透過安裝官方的 [Markdown 插件](https://tiddlywiki.com/plugins/tiddlywiki/markdown/)解決。

## 安裝插件

在 Tiddlywiki 安裝插件的方式有兩種：
- 網頁拖曳[^install-plugin-web]
- 檔案安裝[^install-plugin-nodejs]

[^install-plugin-web]: Manually installing a plugin. Retrieved 2024-02-25, from https://tiddlywiki.com/static/Manually%2520installing%2520a%2520plugin.html

[^install-plugin-nodejs]: Installing custom plugins on Node.js. Retrieved 2024-02-25, from https://tiddlywiki.com/static/Installing%2520custom%2520plugins%2520on%2520Node.js.html

### 網頁拖曳

大部分 Tiddlywiki 的插件都有自己的 Tiddlywiki，然後會有像是這樣的連結：

![](./img/01_install.webp)

對它按下滑鼠，然後拖曳到自己的 Tiddlywiki 上放開，它會引導你匯入東西：

![](./img/02_import.webp)

部份插件會要求重新載入網頁：

![](./img/03_reload.webp)

---

值得注意的是，這個魔法（我猜）是透過瀏覽器實做的 [DataTransfer API](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/dataTransfer) 達成的，因此使用 Desktop 版本的 Tiddlywiki 或是其他跨越瀏覽器的情況（從 Chrome 把插件拉到 Firefox 上）是不支援的。

### 檔案安裝

只能在 Node.js 模式下使用，把插件複製到 `/plugins` 的資料夾下，像這樣：

```
├── plugins/
│   ├── relink/
│   │   ├── js/
│   │   ├── tiddlers/
│   │   └── plugin.info
│   └── relink-markdown/
│       ├── js/
│       ├── plugin.info
│       └── readme.tid
├── tiddlers/
└── tiddlywiki.info
```

## 插件系統

插件本質上是由一組名為「影子條目」的特殊的條目 (Tiddlers) 打包而成的。

### 影子條目 (ShadowTiddlers)

相較於一般的條目只是一些使用者可以任意編輯的資料，影子條目是一些跟 Tiddlywiki 核心運作有關的條目，比如：定義按鈕的外觀與行為。

當使用者編輯影子條目時，Tiddlywiki 會創建一個同名的副本，並且覆蓋原始條目的行為，當使用者刪除這個副本，則會切換回使用原本的影子條目，形同預設值一般的作用。

### 插件的型態

當使用「檔案安裝」時，插件是以類似專案資料夾的方式存在，並且以資料夾下的 `plugin.info` 檔案作為進入點，例如：

```
├── plugins/
    ├── relink/
        ├── js/
        ├── tiddlers/
        └── plugin.info
```

而使用「網頁拖曳」時，插件中的數個影子條目會被打包成單一 JSON 檔的型態，例如：

```
├── tiddlers/
    ├── $__plugins_tiddlywiki_markdown.json
    ├── $__plugins_tiddlywiki_markdown.json.meta
```

## 幾個目前我正在使用的插件

- https://tiddlywiki.com/plugins/tiddlywiki/markdown/
  - 讓條目能夠以 Markdown 撰寫
- https://github.com/kookma/TW-Shiraz
  - 提供一些諸如 Alert 或動態表格之類的 UI 組件
- https://ibnishak.github.io/Tesseract/projects/tekan/Tekan.html
  - 並沒有正在使用，但是是一個讓我越陷越深的兔子洞