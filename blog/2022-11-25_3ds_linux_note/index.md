---
slug: 2022-11-25_3ds_linux_note
authors: [weiji,]
tags: [learning note, 3ds, ]
--- 

# 3DS 刷 Linux 筆記

## 刷 Linux 

如果已經刷完 CFW，並且安裝 Luma3DS 的話，在 3DS 上跑起來並不會太困難，只要照著[指示](https://www.gamebrew.org/wiki/Linux_for_3DS)下載檔案並放到 SD 卡內，接著從 Luma3DS 的 ChainLoader 開機就能成功進入 Linux 了。使用者為 `root` ，密碼為 `toor` 。

然而這個 Linux 的檔案系統是跑在 Ram Disk 上，並且預設不會掛載記憶卡，因此在系統內進行任何修改在開機之後都會消失。要把檔案弄進去的方法有兩種：
1. 將檔案放到 SD 卡內，並掛載 `/dev/vda1`
2. 將檔案放到開機映像檔 `zImage` 內

其實單論我的目的是在 Linux 跑一個 Jvascript 程式，大可直接用掛載的方式處理，但是使用 3DS Linux 的觸控板打指令真的是一件頗麻煩的事情（包含掛載指令），如果可以預載並自動執行一些腳本免除我手動輸入的步驟是再好不過了。

## 製作開機映像檔

在處理自動掛載以前，我們要知道如何把東西放進 `zImage` 內，這過程涉及兩個步驟：
1. 產生 `rootfs.cpio.gz`
2. 製作 `zImage`

### 產生 `rootfs.cpio.gz`

cpio 是 UNIX 作業系統的一個檔案備份程式及檔案格式[^cpio-intro]。cpio 是一個比較古老的備份命令，也是用於磁帶機備份的工具，雖然如此現在許多時侯仍然需要使用這命令，例如製作系統內存映像檔時等。像是系統映像檔通常位於 /boot 中，文件名以 initrd 開頭。[^cpio-command]

因為它是基於磁帶的備份工具，因此無法直接替換掉該檔案裡面的特定文件，必須要把整個 cpio 解包進行編輯後再包回去。

[linux-3ds](https://github.com/linux-3ds) 的專案有提供一個樣板可以直接下載：

```shell
$ wget https://github.com/linux-3ds/buildroot/releases/download/latest/rootfs.cpio.gz
```

或是你也可以從 buildroot 自己 build ，Buildroot 是一個可高度客製化的嵌入式 Linux 映像檔生成工具。Buildroot很強大，也很容易上手使用。[^Buildroot-intro] Linux 3DS 專案下有一個已經與先準備好相關設定的 [buildroot fork](https://github.com/linux-3ds/buildroot)，照著[指示](https://github.com/linux-3ds/buildroot/wiki)做一樣很快就能生成 `cpio` 檔了。

cpio 作為 initrd 的格式，而 initrd 的英文含義是 boot loader initialized RAM disk，就是由 boot loader 初始化的 RAM Disk。在 linux 核心啟動前， boot loader 會將儲存介質中的 initrd 檔案載入到記憶體，核心啟動時會在訪問真正的根檔案系統前先訪問該記憶體中的 initrd 檔案系統。在 boot loader 組態了 initrd 的情況下，核心啟動被分成了兩個階段，第一階段先執行 initrd檔案系統中的"某個檔案"，完成載入驅動模組等任務，第二階段才會執行真正的根檔案系統中的 /sbin/init 處理程序。[^initrd]

[^cpio-intro]: Cpio - 維基百科，自由的百科全書. Retrieved 2022-11-25, from https://zh.wikipedia.org/zh-tw/Cpio

[^cpio-command]: 會紅的 Linux 筆記: cpio指令. Retrieved 2022-11-25, from http://canred.blogspot.com/2013/04/cpio.html

[^Buildroot-intro]: 精通嵌入式Linux 第三章：Buildroot – LotLab. Retrieved 2022-11-25, from https://www.lotlab.org/2020/04/08/mastering-embedded-linux-part-3-buildroot/

[^initrd]: 【Linux技術】Linux核心Initrd機制解析，核心更新步驟，grub組態說明-阿里雲開發者社區. Retrieved 2022-11-25, from https://developer.aliyun.com/article/445357

### 編輯 `cpio` 檔

我寫了一個小腳本來處理解包、覆蓋、包回去的步驟，
只要把檔案放在 `original/rootfs.cpio`，
要覆蓋的檔案樹放在 `override/` 下。

```shell
#!/bin/bash

EXTRACT_TEMPD=$(mktemp -d)
OUTPUT_TEMPD=$(mktemp -d)
WORK_PATH=$(pwd)

if [ ! -e "$EXTRACT_TEMPD" ]; then
    >&2 echo "Failed to create temp directory"
    exit 1
fi

echo Extract Path: ${EXTRACT_TEMPD}
echo Output Path: ${OUTPUT_TEMPD}

# Extract and Archive again, /dev/console would missing
mkdir ${EXTRACT_TEMPD}/root
cd ${EXTRACT_TEMPD}/root

cpio -idv < "${WORK_PATH}/original/rootfs.cpio" 2> ${EXTRACT_TEMPD}/log.txt
cp -rf "${WORK_PATH}"/override/* ./

#find . > ${OUTPUT_TEMPD}/log-1.txt
find . | cpio -ov -H newc > ${OUTPUT_TEMPD}/rootfs.cpio 2> ${OUTPUT_TEMPD}/log.txt

cd ${OUTPUT_TEMPD}
gzip -c rootfs.cpio > rootfs.cpio.gz

chown <Normal-User> -R ${OUTPUT_TEMPD}
chgrp <Normal-User> -R ${OUTPUT_TEMPD}

chown <Normal-User> -R ${EXTRACT_TEMPD}
chgrp <Normal-User> -R ${EXTRACT_TEMPD}
```

比如，編譯出來的程式會仰賴 `/usr/lib/ld-linux-armhf.so.3`，但是 linux 3ds 提供的 cpio 並沒有這個路徑，就可以在 `override/` 下加入：

```
./usr/lib:
ld-linux-armhf.so.3 -> ../lib/libc.so
```

記得執行操作的時候要有 root 權限，因為 `rootfs.cpio` 裡面有些檔案類型需要 root 才能新增。

### 製作 `zImage`

照著[指引](https://github.com/linux-3ds/linux/wiki)安裝仰賴的函式庫、clone repo、把 `rootfs.cpio.gz` 放到專案目錄下，接著執行：

```shell
$ $ ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- make -j$(nproc) nintendo3ds_defconfig all
```

它就會 build 出包含 `zImage` 在內，在 3DS 上跑起 Linux 需要的一些檔案。

## 自動掛載

這個 Linux 並沒有諸如 systemd, rc.local 之類的高級玩意，倒是有這些東西：

```shell
$ ls /etc/init.d
rcK  rcS  S01syslogd  S02klogd  S02sysctl
```

`/etc/init.d/rcS` 承擔 start 的功能 `/etc/init.d/rcK` 承擔 kill(stop) 的功能，會依序執行 `/etc/init.d/rcS/S(\d\d.*)`，很好理解。

於是我就做了一個 `/etc/init.d/S03sdmnt` 來自動掛載 SD 卡：

```shell
#!/bin/sh

case "$1" in
start)
echo "Mount SD card"
# Mount SD card
mkdir /mnt/sdcard
mount /dev/vda1 /mnt/sdcard
;;
stop)
echo "Unmount SD card"
# Todo
;;
*)
echo "Usage: /etc/init.d/S03sdmnt {start|stop}"
exit 1
;;
esac

exit 0
```

## 小結

研究到這裡，會發現 Chain Loading[^Chain_loading] 的影子非常明顯：
刷進去的 boot9strap 會 boot Luma3DS；
Luma3DS 會從 `luma/payloads/` boot `firm_linux_loader.firm`；
`firm_linux_loader.firm` 再去 boot `arm9linuxfw.bin`；
`arm9linuxfw.bin` 再用 `zImage` 開機（？）

[^Chain_loading]: Chain loading - Wikipedia. Retrieved 2022-11-25, from https://en.wikipedia.org/wiki/Chain_loading

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。