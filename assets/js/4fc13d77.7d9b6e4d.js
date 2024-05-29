"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[5122],{29810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=n(11527),r=n(88717);const s={slug:"2023-04-11_dependencies-in-cpp-project",authors:["weiji"],tags:["learning note","c++"]},c="\u5728 C++ \u5c08\u6848\u4e2d\u8655\u7406\u4ef0\u8cf4\u5957\u4ef6\u7684\u5e7e\u7a2e\u65b9\u5f0f",o={permalink:"/blog/2023-04-11_dependencies-in-cpp-project",source:"@site/blog/2023-04-11_dependencies-in-cpp-project/index.md",title:"\u5728 C++ \u5c08\u6848\u4e2d\u8655\u7406\u4ef0\u8cf4\u5957\u4ef6\u7684\u5e7e\u7a2e\u65b9\u5f0f",description:"\u9019\u88e1\u6574\u7406\u5e7e\u7a2e C++ \u5c08\u6848\u5e38\u898b\u7684\u8655\u7406\u4ef0\u8cf4\u51fd\u5f0f\u5eab\u7684\u6a21\u5f0f\uff08\u6216\u662f\u5de5\u5177\uff09\u3002",date:"2023-04-11T00:00:00.000Z",formattedDate:"April 11, 2023",tags:[{label:"learning note",permalink:"/blog/tags/learning-note"},{label:"c++",permalink:"/blog/tags/c"}],readingTime:1.63,hasTruncateMarker:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2023-04-11_dependencies-in-cpp-project",authors:["weiji"],tags:["learning note","c++"]},unlisted:!1,prevItem:{title:"Polis Project",permalink:"/blog/2023-05-14_project-polis"},nextItem:{title:"Electron \u5b78\u7fd2\u7b46\u8a18 - \u6982\u6558",permalink:"/blog/2023-04-01_electron_learning_note_intro"}},l={authorsImageUrls:[void 0]},a=[{value:"Copy/Paste Source",id:"copypaste-source",level:2},{value:"Native CMake",id:"native-cmake",level:2},{value:"Git",id:"git",level:2},{value:"Dependencies Tool",id:"dependencies-tool",level:2}];function p(e){const t={a:"a",br:"br",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"\u9019\u88e1\u6574\u7406\u5e7e\u7a2e C++ \u5c08\u6848\u5e38\u898b\u7684\u8655\u7406\u4ef0\u8cf4\u51fd\u5f0f\u5eab\u7684\u6a21\u5f0f\uff08\u6216\u662f\u5de5\u5177\uff09\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"copypaste-source",children:"Copy/Paste Source"}),"\n",(0,i.jsxs)(t.p,{children:["\u6700\u7c21\u55ae\u66b4\u529b\u7684\u65b9\u5f0f\uff0c\u628a\u4ef0\u8cf4\u51fd\u5f0f\u5eab\u7684 source \u8ddf header \u76f4\u63a5\u8907\u88fd\u5230\u5c08\u6848\u7684\u8cc7\u6599\u593e\u4e0b\uff0c\u76f4\u63a5\u7de8\u8b6f\u9032\u53bb\u5c08\u6848\u672c\u8eab\u3002\u8209\u4f8b\u4f86\u8aaa ",(0,i.jsx)(t.a,{href:"https://github.com/fogleman/Craft",children:"fogleman/Craft"})," \u662f\u5c6c\u65bc\u9019\u985e\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"native-cmake",children:"Native CMake"}),"\n",(0,i.jsxs)(t.p,{children:["\u5728 ",(0,i.jsx)(t.a,{href:"https://cmake.org/",children:"CMake"})," \u4e2d\u6709\u500b\u6307\u4ee4 ",(0,i.jsx)(t.code,{children:"find_library"})," \u5141\u8a31\u5728\u5c08\u6848\u7684 config \u968e\u6bb5\u5148\u5075\u6e2c\u74b0\u5883\u4e2d\u662f\u5426\u6709\u6307\u5b9a\u7684\u51fd\u5f0f\u5eab\uff0c\u627e\u4e0d\u5230\u7684\u8a71\u5c31\u6703\u62cb\u51fa\u932f\u8aa4\u3002\u9019\u7a2e\u5c08\u6848\u914d\u7f6e\u5c07\u5b89\u88dd\u4ef0\u8cf4\u51fd\u5f0f\u5eab\u8cac\u4efb\u4ea4\u7d66 host \u672c\u8eab\uff0c\u901a\u5e38\u5c08\u6848\u7684 build guild \u6703\u5beb\u8457 \u300c\u5148\u57f7\u884c ",(0,i.jsx)(t.code,{children:"sudo apt install ...."}),"\u300d\u4e4b\u985e\u7684\u3002\u8209\u4f8b\u4f86\u8aaa ",(0,i.jsx)(t.a,{href:"https://github.com/LibreSprite/LibreSprite/blob/18e16ef410d410f18c180ec7282861ea61def68f/CMakeLists.txt#L144-L187",children:"LibreSprite"})," \u662f\u5c6c\u65bc\u9019\u985e\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"git",children:"Git"}),"\n",(0,i.jsxs)(t.p,{children:["\u5229\u7528 Git \u7684 submodule \u529f\u80fd\uff0c\u628a\u5176\u4ed6 repository \u53c3\u8003\u5230\u5c08\u6848\u4e2d\u3002\u8209\u4f8b\u4f86\u8aaa ",(0,i.jsx)(t.a,{href:"https://github.com/cuberite/cuberite/tree/master/lib",children:"Cuberite"})," \u662f\u5c6c\u65bc\u9019\u985e\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"dependencies-tool",children:"Dependencies Tool"}),"\n",(0,i.jsx)(t.p,{children:"\u5c31\u50cf PHP \u6709 Composer\uff1bNode.js \u6709 NPM\uff1bPython \u6709 pip\uff1bRust \u6709 Cargo \u4e00\u6a23\uff0cC++ \u7684\u958b\u767c\u8005\u5011\u7576\u7136\u4e5f\u88fd\u4f5c\u4e86\u5de5\u5177\u4f86\u8655\u7406\u5c08\u6848\u4ef0\u8cf4\u51fd\u5f0f\u5eab\u7684\u554f\u984c\uff0c\u4e0d\u904e\u53d7\u9650\u65bc C++ \u7684\u8a9e\u8a00\u7279\u6027\uff0c\u76ee\u524d\u4e26\u6c92\u6709\u4e00\u52de\u6c38\u9038\u7684\u6bba\u624b\u7d1a\u5de5\u5177\uff0c\u4ecd\u7136\u8655\u65bc\u767e\u5bb6\u722d\u9cf4\u7684\u72c0\u614b\u3002"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/cpm-cmake/CPM.cmake",children:"CPM.cmake"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://conan.io/",children:"Conan"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/microsoft/vcpkg",children:"Vcpkg"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/cpp-pm/hunter",children:"Hunter"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://buckaroo.pm/",children:"Buckaroo"})}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"http://creativecommons.org/licenses/by-sa/4.0/",children:(0,i.jsx)(t.img,{src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png",alt:"\u5275\u7528 CC \u6388\u6b0a\u689d\u6b3e"})}),(0,i.jsx)(t.br,{}),"\n","Wei Ji\u4ee5",(0,i.jsx)(t.a,{href:"http://creativecommons.org/licenses/by-sa/4.0/",children:"\u5275\u7528CC \u59d3\u540d\u6a19\u793a-\u76f8\u540c\u65b9\u5f0f\u5206\u4eab 4.0 \u570b\u969b \u6388\u6b0a\u689d\u6b3e"}),"\u91cb\u51fa\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},88717:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var i=n(50959);const r={},s=i.createContext(r);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);