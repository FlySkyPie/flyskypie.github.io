---
slug: 2026-01-05_k8s-longhorn-install-and-helm
authors: [weiji]
tags: [k8s]
---

# K8s 學習筆記 - Longhorn 安裝與 Helm

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2026-01-05_k8s-longhorn-install-and-helm/02_helm.webp" />
</head>

Longhorn 可以用很多方式安裝，包含最基本的 `kubectl` 指令：

```shell
kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/v1.10.1/deploy/longhorn.yaml
```

不過等等！不要急著下指令！讓我們瞄一眼裡面有些什麼：

```shell
wget https://raw.githubusercontent.com/longhorn/longhorn/v1.10.1/deploy/longhorn.yaml
```

![](./01_longhorn-install-yaml.webp)

是的，這是一個有四千多行的 YAML，善於偷懶的聰明開發者們當然不會想直接跟這團東西打交道。

:::info
這個數字可以當作一個參考，一個完整的雲原生軟體佈署到 K8s 需要的聲明的資訊大概會達到這個量體。
:::

## Helm

![](./02_helm.webp)

就像 Longhorn 需要四千多行的 YAML 一樣，還有許許多多的雲原生應用軟體實際都是由大量的 K8s 資源或實體交錯編排而成，於是就有了 Helm 這個工具的誕生：一個 K8s 世界的 APT (Advanced Packaging Tool)。

在 Helm 的世界，這一堆聲明的 YAML 被包裝成一個稱作 Chart 的東西，「安裝」(佈署應用程式到 K8s)大概像這樣：

```shell
helm repo add longhorn https://charts.longhorn.io
helm repo update
helm install longhorn longhorn/longhorn \
    --namespace longhorn-system \
    --create-namespace \
    --version 1.10.1
```

Helm 還有另外一個重要的功能：對 Chart 傳入變數，也是今天我要使用 Helm 的主要原因。

## 用 Helm 安裝 Longhorn

:::info
這個段落的內容主要參考 Longhorn 的官方文件[^longhorn-config]。
:::

首先下載參數檔：

```shell
curl -Lo values.yaml https://raw.githubusercontent.com/longhorn/longhorn/refs/tags/v1.10.1/chart/values.yaml
```

根據需求修改 `values.yaml`，以我目前的需求為例，分別是：

- 持久化須儲存到外部 DAS 的掛載點。
- 目前只有一個工作節點，所以副本只有一份。

```yaml
defaultSettings:
  defaultDataPath: /mnt/das-storage
  defaultReplicaCount: 1
```

安裝 Longhorn 到 K8s：

```shell
helm install longhorn longhorn/longhorn \
    --namespace longhorn-system \
    --create-namespace \
    --version 1.10.1 \
    --values values.yaml
```

拉取 Image 需要時間，過程中可以使用指令檢查是不是所有 Pod 已經就位：

```shell
$ kubectl -n longhorn-system get pod
NAME                                        READY   STATUS              RESTARTS      AGE
engine-image-ei-3154f3aa-tsq6p              0/1     ContainerCreating   0             23s
longhorn-driver-deployer-58768fb7fd-ktpq8   1/1     Running             0             2m58s
longhorn-manager-bsqms                      2/2     Running             2 (44s ago)   2m58s
longhorn-ui-7b9c99fd9-j8bxb                 1/1     Running             0             2m58s
longhorn-ui-7b9c99fd9-w2l6b                 1/1     Running             0             2m58s
```

執行 Tunnel 連線到 Longhorn 的 Dashboard[^longhorn-ui-access]：

```shell
kubectl port-forward \
    service/longhorn-frontend \
    -n longhorn-system 3002:80 \
    --address 0.0.0.0
```

![](./03_longhorn-frontend.webp)

[^longhorn-config]: Longhorn | Documentation. Retrieved 2026-01-05, from https://longhorn.io/docs/1.10.1/advanced-resources/deploy/customizing-default-settings/

[^longhorn-ui-access]: Longhorn 部署筆記 | 翠鳥圖書館 Project Halcyon Library. Retrieved 2026-01-05, from https://wiki.pha.pub/books/109-TAs/page/longhorn
