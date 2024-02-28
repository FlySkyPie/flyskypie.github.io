"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[8143],{2701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(1527),o=t(8717);const i={slug:"2021-07-18-Project_Malmo_Intro",authors:["weiji"],tags:["learning note","malmo","machine learning"]},a="Project Malmo \u7c21\u4ecb",s={permalink:"/blog/2021-07-18-Project_Malmo_Intro",source:"@site/blog/2021-07-18-Project_Malmo_Intro/index.md",title:"Project Malmo \u7c21\u4ecb",description:"\u4f5c\u70ba\u4e00\u500b Minecraft \u73a9\u5bb6\uff0c\u540c\u6642\u4e5f\u662f\u5c0d\u4eba\u5de5\u667a\u6167\u6709\u8208\u8da3\u7684\u5de5\u7a0b\u5c4d\uff0c\u6700\u8fd1\u767c\u73fe\u4e86\u4e00\u500b\u65b0\u73a9\u5177\uff1aProject Malmo\u3002\u4ee5 Minecraft \u9019\u7a2e\u5927\u773e\u5316\u7684\u904a\u6232\u8207\u8fd1\u5e7e\u5e74\u7279\u5225\u71b1\u9580\u7684\u4eba\u5de5\u667a\u6167\u800c\u8a00\uff1b\u9019\u500b\u9805\u76ee\u7684\u66dd\u5149\u5ea6\u548c\u8cc7\u6599\u672a\u514d\u4e5f\u592a\u5c11\u4e86\u5427\uff01\uff1f\u96d6\u7136\u4e0d\u77e5\u9053\u591a\u4e45\u4e4b\u5f8c\u6703\u68c4\u5751\uff0c\u4e0d\u904e\u5c31\u628a\u624b\u908a\u638c\u63e1\u7684\u8cc7\u8a0a\u6574\u7406\u4e00\u4e0b\u4e26\u5206\u4eab\u51fa\u4f86\u5427\uff01\u1555 ( \u141b ) \u1557",date:"2021-07-18T00:00:00.000Z",formattedDate:"July 18, 2021",tags:[{label:"learning note",permalink:"/blog/tags/learning-note"},{label:"malmo",permalink:"/blog/tags/malmo"},{label:"machine learning",permalink:"/blog/tags/machine-learning"}],readingTime:2.885,hasTruncateMarker:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2021-07-18-Project_Malmo_Intro",authors:["weiji"],tags:["learning note","malmo","machine learning"]},unlisted:!1,prevItem:{title:"\u8cc7\u6e90\u4ea4\u63db\u6a94\u6848\u683c\u5f0f (RIFF) \u4ecb\u7d39",permalink:"/blog/2021-11-14_RIFF_Inro"},nextItem:{title:"MineRL \u6311\u6230 2021 - \u7af6\u8cfd\u6d41\u7a0b\uff08\u7ffb\u8b6f\uff09",permalink:"/blog/2021-06-11_minerl-competition-structure"}},c={authorsImageUrls:[void 0]},l=[{value:"\u767c\u5c55",id:"\u767c\u5c55",level:2},{value:"\u67b6\u69cb",id:"\u67b6\u69cb",level:2}];function m(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u4f5c\u70ba\u4e00\u500b Minecraft \u73a9\u5bb6\uff0c\u540c\u6642\u4e5f\u662f\u5c0d\u4eba\u5de5\u667a\u6167\u6709\u8208\u8da3\u7684\u5de5\u7a0b\u5c4d\uff0c\u6700\u8fd1\u767c\u73fe\u4e86\u4e00\u500b\u65b0\u73a9\u5177\uff1aProject Malmo\u3002\u4ee5 Minecraft \u9019\u7a2e\u5927\u773e\u5316\u7684\u904a\u6232\u8207\u8fd1\u5e7e\u5e74\u7279\u5225\u71b1\u9580\u7684\u4eba\u5de5\u667a\u6167\u800c\u8a00\uff1b\u9019\u500b\u9805\u76ee\u7684\u66dd\u5149\u5ea6\u548c\u8cc7\u6599\u672a\u514d\u4e5f\u592a\u5c11\u4e86\u5427\uff01\uff1f\u96d6\u7136\u4e0d\u77e5\u9053\u591a\u4e45\u4e4b\u5f8c\u6703\u68c4\u5751\uff0c\u4e0d\u904e\u5c31\u628a\u624b\u908a\u638c\u63e1\u7684\u8cc7\u8a0a\u6574\u7406\u4e00\u4e0b\u4e26\u5206\u4eab\u51fa\u4f86\u5427\uff01\u1555 ( \u141b ) \u1557"}),"\n",(0,r.jsx)(n.h2,{id:"\u767c\u5c55",children:"\u767c\u5c55"}),"\n",(0,r.jsxs)(n.p,{children:["\u6e90\u81ea\u65bc\u5fae\u8edf\u5167\u90e8\u4e00\u500b\u540d\u53eb Project AIX \u7684\u9805\u76ee",(0,r.jsx)(n.sup,{children:(0,r.jsx)(n.a,{href:"#user-content-fn-project-aix-103b84",id:"user-content-fnref-project-aix-103b84","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\uff0c\u65bc 2016 \u5e74\u958b\u6e90\u91cb\u51fa\uff1b\u4e26\u88ab\u547d\u540d\u70ba Project Malmo\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5fae\u8edf\u5206\u5225\u65bc 2017 (Project Malmo Collaborative AI Challenge ) \u548c 2018 (MARLO 2018) \u5e74\u8209\u8fa6\u7684\u4eba\u5de5\u667a\u6167\u7af6\u8cfd\u5c31\u662f\u57fa\u65bc\u8a72\u6846\u67b6\u9032\u884c\u7684\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["Carnegie Mellon \u5927\u5b78\u7684\u7814\u7a76\u5718\u968a\u5229\u7528\u8a72\u6846\u67b6\u958b\u767c\u4e86 MineRL \u6846\u67b6",(0,r.jsx)(n.sup,{children:(0,r.jsx)(n.a,{href:"#user-content-fn-minerl-103b84",id:"user-content-fnref-minerl-103b84","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"\uff0c\u9019\u4fc3\u6210\u4e86\u65e5\u5f8c\u5728 NeurIPS 2019 \u8209\u8fa6\u7684 MineRL \u947d\u77f3\u6311\u6230 (MineRL Competition 2019)\uff0c\u800c\u8a72\u7af6\u8cfd\u5df2\u7d93\u65bc\u4eca\u5e74 (2021) \u9032\u5165\u4e86\u7b2c\u4e09\u5c46\uff0c\u4e26\u5df2\u7d93\u958b\u59cb\u4e86\u7b2c\u4e00\u968e\u6bb5\u7684\u8cfd\u4e8b\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u67b6\u69cb",children:"\u67b6\u69cb"}),"\n",(0,r.jsxs)(n.p,{children:["\u7a0d\u5fae\u700f\u89bd\u4e86 Malmo \u7684\u7a0b\u5f0f\u78bc",(0,r.jsx)(n.sup,{children:(0,r.jsx)(n.a,{href:"#user-content-fn-malmo-source-103b84",id:"user-content-fnref-malmo-source-103b84","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),"\uff0c\u4e86\u89e3\u5230\u5b83\u7684\u67b6\u69cb\u5927\u81f4\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(7544).Z+"",width:"960",height:"745"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e5f\u5c31\u662f server-client \u67b6\u69cb\uff0c\u53ea\u662f\u5728\u9019\u88e1\u7684 server \u7aef\u624d\u662f\u90a3\u500b\u6709\u8996\u7a97\u7684\u4e00\u65b9\uff08\u7b11\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7576\u904b\u884c\u4e86 server \u7aef\u7684\u555f\u52d5\u8173\u672c\uff0c\u5b83\u6703\u900f\u904e Gradle \u4e0b\u8f09\u4e00\u500b\u4fee\u6539\u904e\u5f97 Minecraft 1.11.2\uff0c\u76f4\u5230\u904a\u6232\u8996\u7a97\u958b\u555f\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(5443).Z+"",width:"855",height:"502"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e4d\u770b\u4e4b\u4e0b\u5c31\u50cf\u4e00\u822c\u7684 Minecraft \u904a\u6232\uff0c\u4f60\u751a\u81f3\u53ef\u4ee5\u9ede\u958b\u55ae\u4eba\u904a\u6232\u958b\u4e00\u5f35\u751f\u5b58\u6a21\u5f0f\u7684\u5716\u958b\u59cb\u904a\u73a9\uff08\u9032\u5165\u904a\u6232\u5f8c\u4f60\u6703\u767c\u73fe\u4e0d\u80fd\u7528\u6ed1\u9f20\u64cd\u4f5c\u8996\u89d2\uff0c\u7136\u800c\u9019\u662f\u53ef\u4ee5\u5207\u63db\u7684\uff09\uff0c\u4f46\u662f\u5be6\u969b\u4e0a\u5b83\u5df2\u7d93\u900f\u904e\u6307\u5b9a\u7684\u57e0\u53e3\u4f5c\u70ba server \u7aef\u5728\u904b\u4f5c\u4e86\uff0c\u4e26\u4e14\u7b49\u5f85\u4f86\u81ea client \u7aef\u7684\u6307\u4ee4\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u8457\u904b\u884c\u4f7f\u7528 API \u7684\u7a0b\u5f0f\uff0c\u6211\u5011\u6703\u767c\u73fe\u904a\u6232\u4e3b\u7a0b\u5f0f\u88ab\u300c\u9059\u63a7\u300d\u4e86\uff0c\u958b\u59cb\u6839\u64da\u900f\u904e API \u63d0\u4f9b\u7684\u8cc7\u8a0a\u5efa\u7acb\u5834\u666f\uff0c\u4e26\u4e14\u5728\u904a\u6232\u958b\u59cb\u5f8c\uff0c\u5916\u90e8\u7a0b\u5f0f\u80fd\u5920\u900f\u904e API \u64cd\u4f5c\u904a\u6232\u5167\u7684\u4eba\u7269\u5728 Minecraft \u7684\u4e16\u754c\u4e2d\u6d3b\u52d5\uff08\u7576\u7136\u4e5f\u53ef\u4ee5\u900f\u904e API \u7372\u53d6\u904a\u6232\u5167\u7684\u8cc7\u8a0a\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(4441).Z+"",width:"801",height:"870"})}),"\n",(0,r.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,r.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{id:"user-content-fn-project-aix-103b84",children:["\n",(0,r.jsxs)(n.p,{children:["Microsoft Project AIX is an open source Minecraft-based artificial intelligence solution. (Brian Fagioli). Retrieved 2021-07-18, from ",(0,r.jsx)(n.a,{href:"https://betanews.com/2016/03/14/microsoft-project-aix-open-source-minecraft-artificial-intelligence/",children:"https://betanews.com/2016/03/14/microsoft-project-aix-open-source-minecraft-artificial-intelligence/"})," ",(0,r.jsx)(n.a,{href:"#user-content-fnref-project-aix-103b84","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{id:"user-content-fn-minerl-103b84",children:["\n",(0,r.jsxs)(n.p,{children:["Project Malmo competition returns with student organizers and a new mission: To democratize reinforcement learning - Microsoft Research. (Microsoft). Retrieved 2021-07-18, from ",(0,r.jsx)(n.a,{href:"https://www.microsoft.com/en-us/research/blog/project-malmo-competition-returns-with-student-organizers-and-a-new-mission-to-democratize-reinforcement-learning/",children:"https://www.microsoft.com/en-us/research/blog/project-malmo-competition-returns-with-student-organizers-and-a-new-mission-to-democratize-reinforcement-learning/"})," ",(0,r.jsx)(n.a,{href:"#user-content-fnref-minerl-103b84","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{id:"user-content-fn-malmo-source-103b84",children:["\n",(0,r.jsxs)(n.p,{children:["Malm\xf6. (Microsoft). Retrieved 2021-07-18, from ",(0,r.jsx)(n.a,{href:"https://github.com/microsoft/malmo",children:"https://github.com/microsoft/malmo"})," ",(0,r.jsx)(n.a,{href:"#user-content-fnref-malmo-source-103b84","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},7544:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/01_Malmo-architecture-1f67ccd7433d8d9b086315d80fce9401.webp"},5443:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/02_minecraft-bc99ff6ab43218ddf425ddb645348830.webp"},4441:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/03_connecting-8f51a8be1697e214a43464bf4a86d6d3.webp"},8717:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(959);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);