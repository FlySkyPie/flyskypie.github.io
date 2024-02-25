---
slug: 2024-02-25_tiddlywiki-journey-1
authors: [weiji,]
tags: [TiddlyWiki]
--- 

# 我的 Tiddlywiki 之旅 - 介紹

我從接觸 Tiddlywiki 到現在 (2023-10-29~2024-01-30) 也已經三個月了，雖然預計要做的事情還沒完成，不過想把累積的筆記做個階段性的總整理。

## 旅程的起點

目前我使用 [Docusaurus](https://docusaurus.io/) 撰寫網誌並作為個人網站，但是用來表達我的 Side Project 仍然不夠合適，想來想去還是 wiki 的形式最符合我的需求，不久前跟人聊天的時候提到了 [Wiki.js](https://js.wiki/)，於是我便朝這個[方向](https://alternativeto.net/software/wiki-js/)去搜尋了。

接著我發現了 Tiddlywiki，當時正戴著耳機聽著[戰鎚 40K 機械神教的 BGM](https://www.youtube.com/watch?v=ztzq05IzYds) ，當下我腦海中浮現了一個念頭：

> Goddess of open source just kissed my forehead.

## 非線性

> 一個非線性的網頁式筆記
> a non-linear personal web notebook

這是 Tiddlywiki 官方對自己簡介，不過「非線性」一詞其實非常抽象，不過我想它想要相對於「線性」概念應該是指線性敘事 ([Linear narrative](https://en.wikipedia.org/wiki/Story_structure#Linear_narrative))，換句話說 Tiddlywiki 指稱的非線性應該是指非線性敘事 ([Nonlinear narrative](https://en.wikipedia.org/wiki/Nonlinear_narrative))；在紀錄或閱讀資料的時候能夠透過超連結在不同的條目之間穿梭瀏覽。相較之下一般的電子文件是由上而下（線性）閱讀的。

## 使用 Tiddlywiki

### 基本模式

一個"經典"的 Tiddlywiki 檔案會是一個單一的 HTML 檔案，一個 Wiki 的資料（條目、檔案...等）和 Tiddlywiki 的程式都被放在這個單一的 HTML 檔案裡面，使用者可以透過網頁瀏覽器開啟這個檔案使用 Tiddlywiki。

當使用者編輯內容，所有修改都會**暫時**存在瀏覽器的記憶體之中，直到使用者按下"儲存"紐，這時瀏覽器會下載一個新的 HTML，這個新的檔案是原本檔案的副本，但是包含了剛才修改的內容。

### 進階模式

在基本模式中，使用者必須反覆下載更新版來實現「存檔」功能，這是因為出於安全考量，一般情況下瀏覽器不具有任意讀寫硬碟上資料的權限。透過一些輔助工具可以提高 Tiddlywiki 的使用者體驗：

- 應用程式
- 瀏覽器插件

#### 應用程式

[TiddlyDesktop](https://github.com/TiddlyWiki/TiddlyDesktop) 或是 [TidGi](https://github.com/tiddly-gittly/TidGi-Desktop) 等應用程式在執行 Tiddlywiki 的同時，允許使用者直接進行存檔（或自動存檔）而無須額外重複下載更新，有些應用程式甚至提供管理多個 Tiddlywiki 檔案的功能。

#### 瀏覽器插件

[Timimi](https://github.com/ibnishak/Timimi/) 同樣可以允許使用者直接對 Tiddlywiki 進行存檔，只是不是以應用程式的方式實現，而是以瀏覽器插件的形式存在。

使用它需要完成兩個前置作業：

- 下載並執行 "Timimi 程式"
- 安裝 "Timimi 瀏覽器插件"

這個方案允許使用者使用自己熟悉的網頁瀏覽器編輯 Tiddlywiki，只是額外的步驟可能會讓人覺得不方便。

### 伺服器 (Node.js) 模式

Tiddlywiki 允許以 Node.js 執行，至於 Node.js 與 NPM (或其他套件管理工具) 的安裝與環境設定我就不在此多做解釋了。安裝 `tiddlywiki` 指令：

```shell
npm install -g tiddlywiki
```

新增一個 Tiddlywiki Node.js 專案：

```shell
tiddlywiki <Name> --init server
```

這個指令會初始化一個 Tiddlywiki 並設定一些在 Node.js 模式下需要的插件，諸如：`tiddlywiki/tiddlyweb` 和 `tiddlywiki/filesystem`。

接著執行：

```shell
tiddlywiki <Name> --listen
```

再打開 http://127.0.0.1:8080 就能看到你的 Tiddlywiki 了！

與「基本模式」和「進階模式」不同是，新增的條目並不會被打包成單一 HTML，而是一個條目對應一（或兩個）檔案的方式儲存在資料夾中。

---

另外值得一提的是，`tiddlywiki` 不只能夠以 Node.js 啟動一個伺服器，還提供了一系列的 CLI 操作，比如：建構 (Build) 靜態版本、從 HTML 抽出指定條目...等。

```shell
$ tiddlywiki --help
usage: tiddlywiki [<wikifolder>] [--<command> [<args>...]...]
Available commands:

* build: Automatically run configured commands
* clearpassword: Clear a password for subsequent crypto operations
* commands: Run commands returned from a filter
* deletetiddlers: Deletes a group of tiddlers
* editions: Lists the available editions of TiddlyWiki
* fetch: Fetch tiddlers from wiki by URL
* help: Display help for TiddlyWiki commands
* import: Import tiddlers from a file
* init: Initialise a new wiki folder
* listen: Provides an HTTP server interface to TiddlyWiki
* load: Load tiddlers from a file
* makelibrary: Construct library plugin required by upgrade process
* output: Set the base output directory for subsequent commands
* password: Set a password for subsequent crypto operations
* render: Renders individual tiddlers to files
* rendertiddler: Render an individual tiddler as a specified ContentType
* rendertiddlers: Render tiddlers matching a filter to a specified ContentType
* save: Saves individual raw tiddlers to files
* savelibrarytiddlers: 
* savetiddler: Saves a raw tiddler to a file
* savetiddlers: Saves a group of raw tiddlers to a directory
* savewikifolder: Saves a wiki to a new wiki folder
* server: Provides an HTTP server interface to TiddlyWiki (deprecated in favour of the new listen command)
* setfield: Prepares external tiddlers for use
* unpackplugin: Unpack the payload tiddlers from a plugin
* verbose: Triggers verbose output mode
* version: Displays the version number of TiddlyWiki
```

## 變體與其他衍生

基於 Tiddlywiki 的設計哲學，而造就了「基本模式」、「進階模式」或是「伺服器模式」這幾種不同的使用方式，不過其實它們都不太符合一般使用者使用軟體的習慣，因此有不少衍生專案正是為了改善它的使用體驗而存在的。這裡是一些我在爬文的過程發現的衍生型 Tiddlywiki[^variant]：

- [NoteSelf](https://noteself.org/)
  - 使用 [PouchDB](https://pouchdb.com/) 將資料儲存在瀏覽器
- [Tiddlyhost](https://tiddlyhost.com/)
  - 使用 Ruby 作為後端語言
  - 可以直接註冊使用
- [Feather Wiki](https://feather.wiki/)
  - 追求輕量化實現的網頁 Wiki

[^variant]: 知識連結的工具：TiddlyWiki. (n.d.). Retrieved 2024-01-30, from https://roulesophy.github.io/知識連結的工具-tiddlywiki/

## 補充說明

「基本模式」、「進階模式」或是「伺服器模式」是我為了方便解釋而使用的詞彙，並以單純使用者的角度去區分，實際上 Tiddlywiki 本身並不是以這樣的方式區分或是稱呼它們。

本文使用的「條目」同樣是為了方便解釋而沿用 Wikipedia 的使用習慣，實際上在 Tiddlywiki 中，條目被稱作 「Tiddler」。
