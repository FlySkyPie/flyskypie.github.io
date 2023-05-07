---
slug: 2023-04-11_dependencies-in-cpp-project
authors: [weiji,]
tags: [learning note, c++ ]
--- 

# 在 C++ 專案中處理仰賴套件的幾種方式

這裡整理幾種 C++ 專案常見的處理仰賴函式庫的模式（或是工具）。

## Copy/Paste Source

最簡單暴力的方式，把仰賴函式庫的 source 跟 header 直接複製到專案的資料夾下，直接編譯進去專案本身。舉例來說 [fogleman/Craft](https://github.com/fogleman/Craft) 是屬於這類。

## Native CMake

在 [CMake](https://cmake.org/) 中有個指令 `find_library` 允許在專案的 config 階段先偵測環境中是否有指定的函式庫，找不到的話就會拋出錯誤。這種專案配置將安裝仰賴函式庫責任交給 host 本身，通常專案的 build guild 會寫著 「先執行 `sudo apt install ....`」之類的。舉例來說 [LibreSprite](https://github.com/LibreSprite/LibreSprite/blob/18e16ef410d410f18c180ec7282861ea61def68f/CMakeLists.txt#L144-L187) 是屬於這類。

## Git

利用 Git 的 submodule 功能，把其他 repository 參考到專案中。舉例來說 [Cuberite](https://github.com/cuberite/cuberite/tree/master/lib) 是屬於這類。

## Dependencies Tool

就像 PHP 有 Composer；Node.js 有 NPM；Python 有 pip；Rust 有 Cargo 一樣，C++ 的開發者們當然也製作了工具來處理專案仰賴函式庫的問題，不過受限於 C++ 的語言特性，目前並沒有一勞永逸的殺手級工具，仍然處於百家爭鳴的狀態。

- [CPM.cmake](https://github.com/cpm-cmake/CPM.cmake)
- [Conan](https://conan.io/)
- [Vcpkg](https://github.com/microsoft/vcpkg)
- [Hunter](https://github.com/cpp-pm/hunter)
- [Buckaroo](https://buckaroo.pm/)

---

[![創用 CC 授權條款](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Wei Ji以[創用CC 姓名標示-相同方式分享 4.0 國際 授權條款](http://creativecommons.org/licenses/by-sa/4.0/)釋出。