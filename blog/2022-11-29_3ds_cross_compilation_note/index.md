---
slug: 2022-11-29_3ds_cross_compilation_note
authors: [weiji,]
tags: [learning note, 3ds, javascript, cross compilation, quickjs ]
--- 

# 交叉編譯 QuickJs 筆記

## 前情提要

我已經成功的完成了 3DS 刷機並且在它上面跑起了 Linux，作為一個網頁前端工程師，我一點也不想為了在上面跑點東西跑去寫 C，而是想把我的舒適圈帶進去，也就是我要弄一個 Javascript runtime 進去 3DS Linux。

然而 3DS Linux 算是一個相對罕見的環境：Armv6 的硬體以及使用 musl libc，主流的 Javascript runtime 並沒有提供官方版本的 pre-build release，而是需要自己想辦法編譯。

### musl libc

C 語言程式的執行其實仰賴 libc (C Run-Time Library)，並且 libc 的實作[不只一種](https://wdv4758h-notes.readthedocs.io/zh_TW/latest/libc.html)，musl libc 便是其中的一種，而且被不少 Linux 發行版作為 C 標準函式庫。

### 交叉編譯 (Cross Compilation)

![https://preshing.com/images/gcc-cross-compiler.png](img/cross_compilation.webp)

交叉編譯就是先在 host 編譯出交叉編譯器 (cross compiler)，再用這個交叉編譯器去編譯你的程式，最終目的是你的程式能夠跑在 target 上。

另外一個方法就是直接在 target 上跑編譯，但是 target 有可能是性能很低的晶片，這種方法效率非常差甚至無法完成（沒有足夠的記憶體完成編譯之類的），交叉編譯就是為了解決這種問題而存在的。

## QuickJs

眾所皆知 ECMAScript 是一個語言的規範，而不是實作，因此遵守該規範的直譯器 (runtime) 其實有百百種。除了 [Node.js](https://nodejs.org/en/) 之外，Javascript runtime 還有後起之秀 [Deno](https://deno.land/) 和 [Bun](https://bun.sh/)，而引擎 (engnine) 自然也不少，被各種瀏覽器、 Node.js 以及 Deno 使用的 V8 或是被 Bun 使用的 JavaScriptCore，除了這些之外還有[諸多](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)的實作。

[QuickJS](https://bellard.org/quickjs/) 是一個嬌小且可嵌入式的 Javascript 引擎。它支援 ES2020 規範，包含模組、非同步 Generator、Proxy、BigInt。它是以 C 語言撰寫並且沒有仰賴其他函式酷。

## 編譯 Cross Compiler 

已經有人準備了方便的工具 [musl-cross-make](https://github.com/richfelker/musl-cross-make) 讓我們能簡單的製作交叉編譯器。

首先下載這個 repo：
```shell
git clone git@github.com:richfelker/musl-cross-make.git
cd musl-cross-make
```

新增 `config.mak` 檔案：
```shell
touch config.mak
```

加入以下內容：
```
TARGET = arm-linux-musleabihf
COMMON_CONFIG += CFLAGS="-g0 -Os" CXXFLAGS="-g0 -Os" LDFLAGS="-s"
GCC_CONFIG += --with-arch=armv6 --with-mode=arm --with-fpu=vfp
```

執行編譯：
```shell
make -j ${nproc}
```

安裝（輸出執行檔），預設會輸出到專案目錄下的 `output/` 資料夾：
```shell
make install
```

複製到 `home`
```shell
touch ~/.musl-cross-make
cp output/* ~/.musl-cross-make/.
```

把環境變數加到 `.bashrc`
```bash
export MUSL_CROSS_INSTALL="$HOME/.musl-cross-make" 
export PATH="$MUSL_CROSS_INSTALL/bin:$PATH"
```

## 編譯 QuickJs

下載 quickjs
```shell
git clone https://github.com/bellard/quickjs
cd quickjs
```

需要更動 `Makefile` 的一些內容：

新增 `CROSS_PREFIX=arm-linux-musleabihf-`
```
  CROSS_PREFIX=arm-linux-musleabihf-
  HOST_CC=gcc
  CC=$(CROSS_PREFIX)gcc
```

```
LIBS+=-ldl -lpthread          #找到這行
LIBS+=-ldl -lpthread -latomic #增加參數
```

接著跑編譯：
```shell
make -j ${nproc}
```

檢查編譯結果是不是符合我們的目標：
```shell
$ file qjs
qjs: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-musl-armhf.so.1, with debug_info, not stripped
```

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。