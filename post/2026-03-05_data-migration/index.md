---
slug: 2026-03-05_data-migration
authors: [weiji]
tags: [homelab]
---

# Homelab 資料遷移筆記

## 前情提要

我正在把 Homelab 的服務從一台機器的 Docker Swarm 遷移到另外一台機器的 kubernetes，其中比較棘手的服務之一是 Jellyfin，因為這個服務包含了 1.3TB 的資料。

為什麼 1.3TB 是個問題？可以見前一篇文章：

[Homelab 遷移近況 (2026-02-25)](https://flyskypie.github.io/posts/2026-02-25_homelabe-status/)

## 結論

過程中其實有遇到一些挫折，不過我先講結論，過程等等提。

我使用了以下指令完成遷移：

```shell
ssh -A -R localhost:50000:192.168.0.138:32222 root@arachne-node-beta \
'rsync -avh --info=progress2 --info=name0 --delete --bwlimit=20m -e "ssh -p 50000" -vuar /mnt/das-storage/volumes/jellyfin_media-data/ linuxserver.io@localhost:/config/data/media-data/'
```

指令本身我是參考網路上的。`arachne-node-beta` 是我 homelab 內部使用的 hostname，之後簡稱 Beta 節點。

[^rsync-remote]: shell - How to rsync files between two remotes? - Unix & Linux Stack Exchange. Retrieved 2026-03-05, from https://unix.stackexchange.com/a/183516

### `-R`

```shell
-R localhost:50000:192.168.0.138:32222
```

這段參數的意思是，把 `192.168.0.138:32222` 接到 `localhost:50000` 去（對 Beta 節點而言），所以在 Beta 節點上訪問 `localhost:50000` 時實際上會連到 `192.168.0.138:32222` 去。

![](./01_ssh-forwarding.svg)

:::info
可以用 "SSH Remote Port Forwarding" 之類的關鍵字搜尋這個 flag 相關的資訊與用法。
:::

### `-A`

透過 ssh-agent 建立一個代理，把遠端的認證丟回本機處理，這樣就不用在 Beta 節點設定對目標（在這個案例中是 `192.168.0.138`）的金鑰。

![](./02_ssh-agent.svg)

### rsync

指令參數看起來有點髒的原因是混合了我平時自己備份資料常用的：

```
-avh --info=progress2 --info=name0 --delete
```

和網路上找到的：

```
-e "ssh -p 50000" -vuar
```

`--bwlimit=20m` 則是為了處理 I/O 背壓 (Backpressure) 問題， 稍後解釋。

```
/mnt/das-storage/volumes/jellyfin_media-data/ 
linuxserver.io@localhost:/config/data/media-data/
```

分別是來源跟目標。

![](./03_rsync.svg)

### 準備工作

先在 K8s 佈署 OpenSSH 的 Pod：

<details>
<summary>
`statefulset.yaml`
</summary>
```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  labels:
    io.kompose.service: openssh
  name: openssh
spec:
  replicas: 1
  selector:
    matchLabels:
      io.kompose.service: openssh
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      partition: 0
  template:
    metadata:
      labels:
        io.kompose.service: openssh
    spec:
      containers:
        - image: docker.io/linuxserver/openssh-server:latest
          name: openssh
          env:
            - name: PASSWORD_ACCESS
              value: "true"
            - name: PGID
              value: "1000"
            - name: PUID
              value: "1000"
            - name: TZ
              value: Asia/Taipei
            - name: USER_PASSWORD
              value: password
          ports:
            - containerPort: 2222
              protocol: TCP
          volumeMounts:
            - mountPath: /config/data/jellyfin-cache
              name: jellyfin-cache
            - mountPath: /config/data/jellyfin-config
              name: jellyfin-config
            - mountPath: /config/data/media-data
              name: media-data
      restartPolicy: Always
      volumes:
        - name: jellyfin-cache
          persistentVolumeClaim:
            claimName: jellyfin-cache
        - name: jellyfin-config
          persistentVolumeClaim:
            claimName: jellyfin-config
        - name: media-data
          persistentVolumeClaim:
            claimName: media-data
---
apiVersion: v1
kind: Service
metadata:
  labels:
    io.kompose.service: openssh
  name: openssh-service
spec:
  type: NodePort
  selector:
    io.kompose.service: openssh
  ports:
    - protocol: TCP
      port: 2222
      targetPort: 2222
      nodePort: 32222
```
</details>

這邊是使用 `linuxserver/openssh-server` 這個別人做好的 image。我是使用獨立的 Pod 而不是和 Jellyfin 共用 Pod 因為這樣 YAML 比較乾淨。

這邊是用 NodePort 處理，因為我暫時還不想煩惱設定 LoadBalancer。

作為 OpenSSH 伺服器的 Container 還需要完成幾件事：

- 配置和本地對應的 public key
- 安裝 rsync

在本地則是：

- 使用 `ssh-add` 把要用來訪問 OpenSSH 伺服器的 private key 放進 SSH Agent 內。

## 歷程

接著來談過程中遇到的挫折