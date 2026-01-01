---
slug: 2025-12-31_learn-k8s
authors: [weiji]
tags: [k8s]
---

# K8s 學習筆記 - Cluster 和它快樂的小夥伴們

<head>
  <meta property="og:image" content="https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/post/2025-12-31_learn-k8s/01_k8s-cluster.webp" />
</head>

![](./01_k8s-cluster.webp)

- Node
  - 一個安裝 K8s 的實體機器或虛擬機器。
- Cluster
  - 多個 Node 構成的叢集。
- Pod
  - K8s 的最小佈署單位。
  - 通常包含一個 Container。
  - 視情況可以包含多個 Container。
- Container
  - OCI (Open Container Initiative) 容器。

## Namespace

![](./02_k8s-namespace.webp)

在同一個 Cluster 下可以再設定一個 Namespace 來隔離資源，知道有這個東西就好，初學者可以先不管它的存在。
