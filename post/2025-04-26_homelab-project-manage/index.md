---
slug: 2025-04-26_homelab-project-manage
authors: [weiji]
tags: []
---

# 自架專案管理軟體

最近在自架專案管理的工具，目前是使用 Vikunja，不過這裡還是把當時查資料時的其他候選方案簡單列一下。

- https://github.com/go-vikunja/vikunja
  - 1.4k ⭐
- https://github.com/mattermost-community/focalboard
  - 23.1k ⭐
- https://github.com/wekan/wekan
  - 19.6k ⭐
- https://github.com/opf/openproject
  - 10.1k ⭐
- https://github.com/redmine/redmine
  - 5.4k ⭐
- https://github.com/Leantime/leantime
  - 4.8k ⭐
- https://github.com/plankanban/planka
  - 7.8k ⭐
- https://github.com/JordanKnott/taskcafe
  - 4.6k ⭐
- https://github.com/kanboard/kanboard
  - 8.7k ⭐

Planka 明眼人都看得出來它是衝著 [Trello](https://en.wikipedia.org/wiki/Trello) 去的，因此作為一個「Kanban 本位主義」的專案管理軟體，使用案例著重在看板本身，對於卡片 (Ticket/Issue) 的管理就稍微薄弱，比如沒有人類友善的流水號可以辨別卡片。

OpenProject 則是側重卡片管理，可以堆疊巢狀結構也可以建立關聯，但是 UI 顯得比較老氣一點。

Wekan 和 Planka 一樣屬於「Kanban 本位主義」，可以從設定啟用人類友善流水號，不過對於卡片管理的功能比較缺乏，巢狀堆疊的設計不是很理想，而且沒辦法建立其他卡片關聯。
