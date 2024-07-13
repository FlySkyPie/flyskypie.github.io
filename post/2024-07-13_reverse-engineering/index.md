---
slug: 2024-07-13_reverse-engineering
authors: [weiji,]
tags: []
--- 

# ლ(◉◞౪◟◉ )ლ 尼是閉源軟體？窩看看

閉源軟體：＊出現＊

我：

```shell
$ strace ./blablabla_launcher
```

喔喔喔，這東西想抓什麼 library 都看得到耶～

```shell
$ sudo tcpdump -A -i lo -vv -n tcp port 1715
```

喔拉拉，原來只是打 POST HTTP Request 啊～

很好，我滿意了。＊關掉逆向工程回去做正事＊
