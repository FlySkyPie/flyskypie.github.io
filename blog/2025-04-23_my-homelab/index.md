---
slug: 2025-04-23_my-homelab
authors: [weiji,]
tags: [homelab]
--- 

# 我的 Homelab

![](./img/00_cover.webp)

從我開始計畫建一個 Homelab 至今已經超過半年了，如今它的規模也算是有點東西可以拿出來講了。

## 什麼是 Homelab？

<iframe width="560" height="315" src="https://www.youtube.com/embed/-b3t37SIyBs?si=CR6mSxdgHd1Dtv7i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Homelab 就是資訊工程師平常在公司管伺服器管得不夠爽，所以在自己家裡蓋一個資料中心繼續玩。

![](./img/01_ballshit.webp)

好吧，對某些人來說或許是這樣，不過要稱得上是 Homelab 的門檻其實很低：只要在家中放一台伺服器，它可以是一般的桌機、NAS、筆電或是樹莓派。

## 硬體架構

黑線是乙太網路、藍線是其他（主要是 USB）：

![](./img/02_architecture.webp)

目前我的 Homelab 硬體配置大概如下：

- 4G 路由器
  - TOTOLINK LR350 4G LTE
- 交換器
  - Zyxel GS-108B v3
- 樹莓派
  - Raspberry Pi 3B
- 筆電（伺服器）
  - Lenovo Yoga Slim 7 Carbon 13ITL5
- DAS (Direct-Attached Storage)
  - QNAP TR-004U 4-bay
- USB Dock
  - j5create JCD533
- USB 網路卡
  - j5create JCE145
- 筆電
  - Framework Laptop 13 (13th Intel i7-1360P)

## 入口網站

![](./img/00_cover.webp)

當自架的服務越來越多，一個簡單的入口網站來尋找需要的服務是十分必要的。目前我是使用 [Dashy](https://github.com/Lissy93/dashy)，關於其他最後沒使用的候選方案我補充在[另外一篇貼文](/post/2025-04-26_homelab-homepage)。

## Pi Hole 與 DNS

![](./img/03_pi-hole.svg)

架設的服務一多，單靠埠號去分辨服務其實不理想，而為了實現這個需求就需要 DNS 和反向代理 (Reverse Proxy)，反向代理的部份稍後再回來談，我使用 [Pi-hole](https://github.com/pi-hole/pi-hole) 來擔任我的 DNS 伺服器。

Pi-hole 除了 DNS 另外一個功能是封鎖黑名單內的域名，如此一來就可以在 DNS 層級封鎖掉一些廣告。

## DHCP

因為我會帶著主力筆電出門，如果每次都還要重新設定 DNS 同樣不夠理想，因此 DNS 能夠直接由 DHCP 發送完成設定是十分必要的，最後是成功完成了，然而過程中有遇到一些小阻礙，在此紀錄一下。

### 容器內的 Pi-hole DHCP

Pi-hole 本身就支援 DHCP，但是我是把它跑在 Docker 容器內，因此需要一些額外的處理[^pi-hole-dhcp]，然而在這方面我沒有成功讓容器內的 Pi-hole DHCP 正常運作。

[^pi-hole-dhcp]: Docker DHCP and Network Modes - Pi-hole documentation. Retrieved 2025-04-26 from https://docs.pi-hole.net/docker/dhcp/

### Host 上的 `isc-dhcp-server`

無奈之下我只好在主機 (Host) 上直接安裝 DHCP 伺服器，然而這讓我碰到另外一個問題：

```
receive_packet failed on enx00051b52140f: Network is down
```

要排除問題必須先切到固定 IP 配置遠端進 homelab （或是直接物理訪問伺服器），把 DHCP 的 Daemon 重新啟動：

```
sudo service isc-dhcp-server restart
```

問題發生的時候 Daemon 本身顯示正常，所以我也找不到其他方法偵測問題來自動重起 Daemon。

最後懷疑是 USB 網路卡 j5create JCE145 不夠可靠、掉封包造成 DHCP 故障。

至於為什麼需要掛一個 USB 網路卡是因為擔任伺服器的筆電是薄型筆電，只有三個 USB Type-C。

### 樹莓派上的 `isc-dhcp-server`

剛好之前借給親戚當文書電腦的樹莓派被反還了，索性試著把 DHCP 伺服器轉移到樹莓派上，然後那個討厭的問題就再也沒有出現過了。

DHCP 伺服器，結案。

## Traefik 與反向代理

![](./img/04_traefik.webp)

用 [Apache](https://en.wikipedia.org/wiki/Apache_HTTP_Server) 或 [Nginx](https://nginx.org/) 做反向代理的組態檔我都寫過，因此當我第一次[接觸到 Traefik](/post/2024-07-27_traefik) 的時候是十分的驚豔，確實感受到來自開發團隊所謂的：

> We forgot what was impossible so we could build it![^traefik]

整個流程大概是這樣的，在 Docker 新增一個網路：

```shell
docker network create --driver=overlay --attachable traefik-public
```

開一個容器跑 Traefik 的服務然後接到剛剛開網路：

```yaml
---
services:
  proxy:
    image: traefik:latest
    command:
      - --api.insecure=true
      - --providers.docker
      - --entrypoints.ep1.address=:80
      - --entrypoints.ep2.address=:9090
    ports:
      - "80:80"
      - "127.0.0.1:8080:8080"
      - "9090:9090"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      - traefik-public

networks:
  traefik-public:
    external: true
```

對於想要反向代理的服務則是在它的組態上加上反向代理的資訊像這樣：

```yaml
app1:
  image: docker.io/alpinelinux/darkhttpd:latest
  labels:
    - traefik.http.routers.app1.entrypoints=ep1
    - traefik.http.routers.app1.rule=Host(`example.com`)
```

如此一來就不用每次更改規則的時候都要去修改或重新啟動反向代理的配置與伺服器，又或是目標服務因為某些原因掉線時候讓反向代理伺服器找不目標而出錯，使用上十分方便。

[^traefik]: Traefik 2.0 - The Wait is Over! Retrieved 2025-04-26 from https://traefik.io/blog/traefik-2-0-6531ec5196c2/