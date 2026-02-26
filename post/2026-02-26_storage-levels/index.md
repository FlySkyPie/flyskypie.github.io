---
slug: 2026-02-26_storage-levels
authors: [weiji]
tags: []
---

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2026-02-26_storage-levels/00_covert.webp" />
</head>

# 儲存等級

最近在整理腦中對於儲存的觀念，試著用「如果儲存是 RPG 等級制」的概念寫了一段虛構的過程，不完全嚴謹，但是應該有助於初學者建立觀念。

## Level 1

你安裝了 Linux 作業系統，在安裝過程把硬碟格式化成 ext4 並切割了磁區：

- `/boot/efi`: fat32
- `/boot`: ext4
- `/home`: ext4
- 剩下的給 `/`: ext4

安裝給系統的檔案會到 `/`，使用者各自囤積的檔案則會儲存在 `/home`。

但是用著用著，你發現 `/home` 快滿了但是 `/` 還很空。

## Level 2

你安裝了 Linux 作業系統，這次你在安裝過程先對硬碟建立 LVM(Logical Volume Manager)：

- `/boot/efi`: fat32
- `/boot`: ext4
- VG (Volume Group)
  - `/home` LV (Logical Volume): ext4
  - 剩下的給 `/` LV: ext4

但是用著用著，你發現 `/home` 快滿了但是 `/` 還很空，於是你利用 LVM 的特性修改 `/home` 和 `/` 這兩個 LV 的大小。

但是用著用著，你發現硬碟滿了，於是你買了另外一個硬碟接上電腦，卻發現現在你有 `sda` 和 `sdb` 兩顆硬碟了，資料夾的安排變得很不方便。

## Level 3

你安裝了 Linux 作業系統，這次你在安裝過程先對硬碟建立 LVM(Logical Volume Manager)：

- `/boot/efi`: fat32
- `/boot`: ext4
- VG (硬碟A + 硬碟B)
  - `/home` LV (Logical Volume): ext4
  - 剩下的給 `/` LV: ext4

你把多個硬碟當成一個硬碟使用，用得很愉快，但是好景不常，外面發生了警匪槍戰，一顆子彈剛好打在你的其中一顆硬碟上，現在你所有的資料都沒辦法讀取了。

## Level 4

你根據教學 (https://std.rocks/gnulinux_mdadm_uefi.html) 折騰了一番，

1. 先在每一個硬碟切出 EFI 和普通磁區
2. 再用 mdadm 將磁區建立 raid 1 （或是 raid 1/0 或是 raid 5）
3. 再把 mdadm 陣列格式化成 LVM
4. 把 LVM 切成 `/` 和 `/home` 要用的邏輯磁區
5. 最後再把 Linux 安裝進 `/`

用著用著，外面又發生了槍戰，你的其中一個硬碟又被打壞了，這次你有恃無恐的更換掉一顆硬碟。

但是重建速度太慢，重建完成之前第二顆硬碟又被子彈打中了，現在你的所有資料又丟失了。

## Level 5

你買了一張硬碟陣列卡，這次你直接在一張 SSD 安裝系統，陣列卡模擬的硬碟直接掛在 `/home` 下，你心想系統壞了就直接重灌就是了。

用著用著，外面又發生了槍戰，你的其中一個硬碟又被打壞了，這次你有恃無恐的更換掉一顆硬碟。

過了幾年外面又發生了槍戰，這次換你的硬碟陣列卡被打中，買不到相同型號的陣列卡，你的資料又報廢了。

## Level 5-1

在 Level 5 陣列卡被打壞後，你意識到 RAID 不是備份 (RAID is not Backup)。你開始實行 3-2-1 原則：

- 3 份資料拷貝。
- 2 種不同的存儲媒介。
- 1 個異地存放

:::info
本段落由 Gemini fast 補充。
:::

## Level 6

這次你決定安裝 ZFS 把多顆硬碟組成陣列，享受它帶來的冗餘與快照功能。

然後你發現你的硬碟數量受到主機板的 I/O 數量限制，雖然你可以用兩台電腦組合成更大的帳面容量，但是你面臨 Level 2 類似的情況，你有兩個檔案目錄不方便管理。

## Level 6-1

在使用 ZFS 後，你發現了「靜態資料損壞」的可怕。你開始定期進行 `zpool scrub`，確保即便子彈沒打中，背景輻射或硬體老化也不會悄悄吃掉你的位元。

:::info
本段落由 Gemini fast 補充。
:::

## Level 7

你決定使用 GlusterFS，現在多個節點的儲存空間可以被視作一個資源池使用了。

## Level 8

你發現在 GlusterFS 的架構下還要為每個節點配置軟體陣列太麻煩了，SDS (Software-defined storage) 本身就有實作冗餘機制，於是你直接使用 JBOD (Just a Bunch Of Disks)。

但是你發現你依然需要管理「儲存空間」這個概念，為什麼我不能有一個「接近無限」的實體而無須在意有多少空間？

## Level 9

你配置了 MinIO，現在你要儲存資料不再關心磁區的概念，而是單純對檔案 CRUD。

你意識到你經歷三種儲存類型：

- File
- Block
- Object

## Level 9-1

在進入分散式存儲後，你發現資料不再是「寫進去就在那裡」。你開始研究 CAP 定理：在網路斷開時，你的系統要選擇「一致性 (Consistency)」還是「可用性 (Availability)」。

:::info
本段落由 Gemini fast 補充。
:::

## Level 10

你配置了 Ceph 處理了所有分散式儲存的需求，但是你發現你需要在每一個節點維護 Ceph 實例有點麻煩。

## Level 11

你使用了 Rook，現在透過 Kubernetes，不論是應用程式還是儲存都透過它管理，只需要維護並運行 K8s 節點/叢集即可。