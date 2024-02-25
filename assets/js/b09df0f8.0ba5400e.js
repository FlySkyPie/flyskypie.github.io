"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[6210],{9613:(M,I,j)=>{j.d(I,{Zo:()=>c,kt:()=>A});var N=j(9496);function L(M,I,j){return I in M?Object.defineProperty(M,I,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[I]=j,M}function y(M,I){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);I&&(N=N.filter((function(I){return Object.getOwnPropertyDescriptor(M,I).enumerable}))),j.push.apply(j,N)}return j}function t(M){for(var I=1;I<arguments.length;I++){var j=null!=arguments[I]?arguments[I]:{};I%2?y(Object(j),!0).forEach((function(I){L(M,I,j[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):y(Object(j)).forEach((function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(j,I))}))}return M}function T(M,I){if(null==M)return{};var j,N,L=function(M,I){if(null==M)return{};var j,N,L={},y=Object.keys(M);for(N=0;N<y.length;N++)j=y[N],I.indexOf(j)>=0||(L[j]=M[j]);return L}(M,I);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(M);for(N=0;N<y.length;N++)j=y[N],I.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(M,j)&&(L[j]=M[j])}return L}var i=N.createContext({}),u=function(M){var I=N.useContext(i),j=I;return M&&(j="function"==typeof M?M(I):t(t({},I),M)),j},c=function(M){var I=u(M.components);return N.createElement(i.Provider,{value:I},M.children)},D="mdxType",g={inlineCode:"code",wrapper:function(M){var I=M.children;return N.createElement(N.Fragment,{},I)}},z=N.forwardRef((function(M,I){var j=M.components,L=M.mdxType,y=M.originalType,i=M.parentName,c=T(M,["components","mdxType","originalType","parentName"]),D=u(j),z=L,A=D["".concat(i,".").concat(z)]||D[z]||g[z]||y;return j?N.createElement(A,t(t({ref:I},c),{},{components:j})):N.createElement(A,t({ref:I},c))}));function A(M,I){var j=arguments,L=I&&I.mdxType;if("string"==typeof M||L){var y=j.length,t=new Array(y);t[0]=z;var T={};for(var i in I)hasOwnProperty.call(I,i)&&(T[i]=I[i]);T.originalType=M,T[D]="string"==typeof M?M:L,t[1]=T;for(var u=2;u<y;u++)t[u]=j[u];return N.createElement.apply(null,t)}return N.createElement.apply(null,j)}z.displayName="MDXCreateElement"},7117:(M,I,j)=>{j.r(I),j.d(I,{assets:()=>i,contentTitle:()=>t,default:()=>g,frontMatter:()=>y,metadata:()=>T,toc:()=>u});var N=j(8957),L=(j(9496),j(9613));const y={slug:"2024-01-02_mapbox-layer",authors:["weiji"],tags:["Mapbox GL JS"]},t="\u6dfa\u8ac7 Mapbox GL JS \u7684\u6e32\u67d3\u908f\u8f2f",T={permalink:"/blog/2024-01-02_mapbox-layer",source:"@site/blog/2024-01-02_mapbox-layer/index.md",title:"\u6dfa\u8ac7 Mapbox GL JS \u7684\u6e32\u67d3\u908f\u8f2f",description:"\u672c\u4eba\u56e0\u70ba\u516c\u53f8\u7684\u5c08\u6848\u800c\u63a5\u89f8 GIS (Geographic Information System)\uff0c\u4e26\u4e14\u5728 Three.js \u548c Mapbox GL JS \u5169\u500b\u51fd\u5f0f\u5eab\u90fd\u5df2\u7d93\u7d2f\u7a4d\u4e86\u57fa\u672c\u7684\u7d93\u9a57\u3002\u6700\u8fd1\u70ba\u4e86\u8ddf\u5ba2\u6236\u7684\u5f8c\u7aef\u5de5\u7a0b\u5e2b\u89e3\u91cb\u8cc7\u6599\u7d50\u69cb\u800c\u5beb\u4e86\u4e00\u4e9b\u6587\u4ef6\uff0c\u500b\u4eba\u611f\u5230\u5341\u5206\u6eff\u610f\u5c31\u6574\u7406\u4e00\u4e0b\u767c\u6210\u4e00\u7bc7\u6587\u7ae0\u597d\u4e86\u3002",date:"2024-01-02T00:00:00.000Z",formattedDate:"January 2, 2024",tags:[{label:"Mapbox GL JS",permalink:"/blog/tags/mapbox-gl-js"}],readingTime:2.125,truncated:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2024-01-02_mapbox-layer",authors:["weiji"],tags:["Mapbox GL JS"]},prevItem:{title:"\u6211\u7684 Tiddlywiki \u4e4b\u65c5 - \u4ecb\u7d39",permalink:"/blog/2024-02-25_tiddlywiki-journey-1"},nextItem:{title:"\u95dc\u65bc\u6211\u60f3\u7528 ECS \u5be6\u4f5c Minecraft \u4ee5\u5206\u6563\u5f0f\u67b6\u69cb\u904b\u884c\u4e26\u5728\u5176\u4e2d\u7528\u589e\u5f37\u5f0f\u5b78\u7fd2\u8a13\u7df4\u5b8c\u5168\u8996\u89ba\u5316\u4e4b\u905e\u8ff4\u5e03\u6797\u985e\u795e\u7d93\u7db2\u8def\u4ee5\u7522\u51fa\u4e8c\u7dad\u689d\u78bc\u4eba\u9020\u8a9e\u8a00\u90a3\u6a94\u4e8b",permalink:"/blog/about-ecs-distributed-minecraft-rl-rbnn-bar-code-language"}},i={authorsImageUrls:[void 0]},u=[{value:"\u4e0d\u662f Mapbox GL \u7684\u65b9\u5f0f",id:"\u4e0d\u662f-mapbox-gl-\u7684\u65b9\u5f0f",level:2},{value:"Mapbox GL JS \u7684\u65b9\u5f0f",id:"mapbox-gl-js-\u7684\u65b9\u5f0f",level:2}],c={toc:u},D="wrapper";function g(M){let{components:I,...y}=M;return(0,L.kt)(D,(0,N.Z)({},c,y,{components:I,mdxType:"MDXLayout"}),(0,L.kt)("head",null,(0,L.kt)("meta",{property:"og:image",content:"https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/blog/2024-01-02_mapbox-layer/img/02_data-properties-styles.webp"})),(0,L.kt)("p",null,"\u672c\u4eba\u56e0\u70ba\u516c\u53f8\u7684\u5c08\u6848\u800c\u63a5\u89f8 GIS (Geographic Information System)\uff0c\u4e26\u4e14\u5728 Three.js \u548c Mapbox GL JS \u5169\u500b\u51fd\u5f0f\u5eab\u90fd\u5df2\u7d93\u7d2f\u7a4d\u4e86\u57fa\u672c\u7684\u7d93\u9a57\u3002\u6700\u8fd1\u70ba\u4e86\u8ddf\u5ba2\u6236\u7684\u5f8c\u7aef\u5de5\u7a0b\u5e2b\u89e3\u91cb\u8cc7\u6599\u7d50\u69cb\u800c\u5beb\u4e86\u4e00\u4e9b\u6587\u4ef6\uff0c\u500b\u4eba\u611f\u5230\u5341\u5206\u6eff\u610f\u5c31\u6574\u7406\u4e00\u4e0b\u767c\u6210\u4e00\u7bc7\u6587\u7ae0\u597d\u4e86\u3002"),(0,L.kt)("h2",{id:"\u4e0d\u662f-mapbox-gl-\u7684\u65b9\u5f0f"},"\u4e0d\u662f Mapbox GL \u7684\u65b9\u5f0f"),(0,L.kt)("p",null,"\u9019\u662f\u8cc7\u6599\u548c ",(0,L.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"},"DOM"),"\uff1a"),(0,L.kt)("p",null,(0,L.kt)("img",{src:j(9906).Z,width:"927",height:"414"})),(0,L.kt)("p",null,"\u4e00\u822c\u4f86\u8aaa\uff0c\u7db2\u9801\u524d\u7aef\u7684\u958b\u767c\u8005\u6703\u900f\u904e\u8cc7\u6599\u7684\u5c6c\u6027 (properties) \u4f86\u6c7a\u5b9a\u6e32\u67d3\u7684\u6a23\u5f0f (Style)\uff1a"),(0,L.kt)("p",null,(0,L.kt)("img",{src:j(8162).Z,width:"905",height:"350"})),(0,L.kt)("p",null,"\u5982\u679c\u4e0d\u7d93\u904e\u7279\u6b8a\u7684\u8655\u7406\uff0c\u7576\u5927\u91cf\u7684\u8cc7\u6599\u9032\u5165\u7a0b\u5f0f\uff0c\u7a0b\u5f0f\u5c31\u6703\u8a66\u5716\u6e32\u67d3\u5927\u91cf\u7684 DOM\uff1a"),(0,L.kt)("p",null,(0,L.kt)("img",{src:j(1673).Z,width:"1086",height:"424"})),(0,L.kt)("p",null,"\u56e0\u6b64\u57fa\u65bc DOM \u7684 GIS \u51fd\u5f0f\u5eab\u901a\u5e38\u7121\u6cd5\u7528\u4f86\u986f\u793a\u5de8\u91cf\u7684\u8cc7\u6599\u9ede\u3002"),(0,L.kt)("h2",{id:"mapbox-gl-js-\u7684\u65b9\u5f0f"},"Mapbox GL JS \u7684\u65b9\u5f0f"),(0,L.kt)("p",null,"Mapbox GL JS \u9810\u8a2d\u662f\u4ee5 WebGL \u6a21\u5f0f\u8655\u7406\u8cc7\u6599\u7684\uff0c\u4e26\u4e14\u984d\u5916\u652f\u63f4 DOM \u7684\u6e32\u67d3\uff08\u90e8\u4efd GIS \u51fd\u5f0f\u5eab\u525b\u597d\u76f8\u53cd\uff0c\u9810\u8a2d\u662f DOM\uff0cWebGL \u7684\u652f\u63f4\u662f\u9644\u5e36\u7684\uff09\u3002"),(0,L.kt)("p",null,"\u800c\u9019\u662f ",(0,L.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/help/glossary/layer/"},"\u5716\u5c64 (Layer)"),"\uff1a"),(0,L.kt)("p",null,(0,L.kt)("img",{src:j(8904).Z,width:"468",height:"415"})),(0,L.kt)("p",null,"\u4f60\u53ef\u4ee5\u628a Layer \u60f3\u50cf\u6210\u9019\u6a23\uff1a"),(0,L.kt)("p",null,(0,L.kt)("img",{src:j(4623).Z,width:"1809",height:"645"})),(0,L.kt)("p",null,"Layer \u904b\u4f5c\u8d77\u4f86\u5c31\u50cf\u9019\u6a23\uff1a"),(0,L.kt)("p",null,(0,L.kt)("img",{src:j(7540).Z,width:"2045",height:"1640"})),(0,L.kt)("p",null,"\u53ef\u4ee5\u6ce8\u610f\u5230\uff0c\u5b83\u7684\u904b\u4f5c\u65b9\u5f0f\u548c\u4e00\u822c (Data\u2192Style) \u7684\u6709\u6240\u5dee\u7570\uff0c\u8981\u6e32\u67d3\u6210\u4ec0\u9ebc\u6a23\u5b50\u4ec0\u9ebc\u4e0d\u662f\u8cc7\u6599\u6c7a\u5b9a\u7684\uff0c\u800c\u662f Layer \u6c7a\u5b9a\u7684\uff0c\u5b83\u55aa\u5931\u4e86\u5c0d\u55ae\u4e00\u8cc7\u6599\u9ede\u9032\u884c Style \u5ba2\u88fd\u5316\u7684\u5f48\u6027\uff0c\u4f46\u662f\u7372\u5f97\u4e86\u5927\u91cf\u6e32\u67d3\u8cc7\u6599\u7684\u80fd\u529b\u3002"),(0,L.kt)("p",null,"\u95dc\u65bc\u5982\u4f55\u8a2d\u5b9a Layer\uff0cMapbox \u7684",(0,L.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/style-spec/reference/layers/"},"\u5b98\u65b9\u6587\u4ef6"),"\u63d0\u4f9b\u4e86\u5341\u5206\u5145\u8db3\u7684\u8cc7\u8a0a\uff0c\u5373\u4fbf\u662f\u900f\u904e Mapbox \u5b98\u65b9\u7684\u7de8\u8f2f\u5668\u88fd\u4f5c\u7684\u300c\u5ba2\u88fd\u5316\u5730\u5716\u300d\u4e5f\u5b8c\u5168\u9075\u5b88\u9019\u4e9b Style \u7684\u8a2d\u5b9a\uff0c\u53ea\u662f\u5b98\u65b9\u63d0\u4f9b\u7684",(0,L.kt)("a",{parentName:"p",href:"https://www.mapbox.com/gallery"},"\u6a23\u5f0f")," \u4e00\u500b\u5927\u7d04\u6709 200 \u5c64 Layer \u5de6\u53f3\u3002"))}g.isMDXComponent=!0},9906:(M,I,j)=>{j.d(I,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+Cjxzdmcgd2lkdGg9IjI0NS4xN21tIiBoZWlnaHQ9IjEwOS41bW0iIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0NS4xNyAxMDkuNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuNTM1IC0xMTY0LjYpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYuMTc0IC0xMi42OTYpIj48cmVjdCB4PSI0OC43NTgiIHk9IjExNzcuMyIgd2lkdGg9IjI0NS4wNyIgaGVpZ2h0PSIxMDkuNCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjEiIHN0eWxlPSJwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5Ny41NiA4OTYuMTQpIj48ZWxsaXBzZSBjeD0iNDE2LjIxIiBjeT0iMzU4LjM2IiByeD0iNC45NTg1IiByeT0iMi4yMDk4IiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxwYXRoIGQ9Im00MjMuNjUgMzQzLjkzYy01LjQwNjcgNC4zMjQtNC44MDc3IDkuMzY4NC00LjEwNDMgMTQuNDI1IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIi8+PGVsbGlwc2UgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIgY3g9Ii00MzguMTkiIGN5PSIzNTguNjkiIHJ4PSI0Ljk1ODUiIHJ5PSIyLjIwOTgiIHN0eWxlPSJwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIi8+PHBhdGggZD0ibTQzMC41NiAzNDQuMDhjNS40MDY3IDQuMzI0IDQuODA3NyA5LjM2ODQgNC4xMDQzIDE0LjQyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUwLjIgMTExMi41KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiPjxwYXRoIGQ9Im02NjUuMDMgODYtMTUuMDEgOC43NTg4IDE1LjAxIDguNzU4OCIvPjxwYXRoIGQ9Im02OTIuODggODYgMTUuMDEgOC43NTg4LTE1LjAxIDguNzU4OCIvPjxwYXRoIGQ9Im02ODkuMjEgODUuMjEzLTkuMDE4OCAxOS4wOTEiLz48L2c+PGc+PHBhdGggZD0ibTg3LjkyMyAxMjQwLjJjLTIuMDQwMS0wLjU1NzEtMy43MzM0LTIuMDMwMS00LjY5MTEtNC4wODA2bC0wLjU3MjMzLTEuMjI1NXYtNDAuNjQ0bDAuNTcyMzMtMS4yMjU0YzAuNjI0LTEuMzM2MSAxLjY1Mi0yLjUyNCAyLjg0ODgtMy4yOTIxIDEuNjI0Ny0xLjA0MjcgMi4yOTk0LTEuMDk5IDEzLjE1Ni0xLjA5OSA2Ljk5NTUgMCAxMC4yIDAuMDY5IDEwLjUyNiAwLjIyODMgMC41NzMyNSAwLjI3ODkgMTIuMzc0IDEzLjA1MSAxMi44ODIgMTMuOTQyIDAuMzQwMjggMC41OTcyIDAuMzU5MjkgMS42MTE3IDAuMzA2MzYgMTYuMzYzbC0wLjA1NjQgMTUuNzI2LTAuNTQ3MzcgMS4xNjc5Yy0wLjc2NjUzIDEuNjM1NC0yLjE1NDEgMy4wNDczLTMuNjkzOCAzLjc1ODVsLTEuMjczMyAwLjU4ODEtMTQuMTk1IDAuMDQyYy0xMS43NiAwLjAzNC0xNC4zNzgtMC4wMS0xNS4yNjMtMC4yNXptMjkuMjkxLTMuMTc0NmMwLjc3MTQ4LTAuMjkxNCAxLjY1MDEtMS4xNDggMi4xMjU0LTIuMDcyMyAwLjM3MjIyLTAuNzIzNiAwLjM4OTc3LTEuMzc5MyAwLjM4OTc3LTE0LjU1MnYtMTMuNzk0aC0zLjAxMjVjLTEuODYyNCAwLTMuNDAyNC0wLjEwNjgtNC4wMzM3LTAuMjc1Ny0yLjQ4NTUtMC42NjQ5LTQuMTYzOS0yLjAyMjYtNS4xODA1LTQuMTkwNy0wLjUyMjc0LTEuMTE0OC0wLjU0MDE3LTEuMjc4Ni0wLjYwNjMzLTUuNjk4MWwtMC4wNjgxLTQuNTUwMi05LjI2MSAwLjA1N2MtMTAuNDEzIDAuMDY0LTkuNjE1My0wLjA1Ny0xMS4wMTUgMS42NzJsLTAuNjI0NTQgMC43NzE2LTAuMDU5MSAxOS42MzljLTAuMDMyNSAxMC44MDItOGUtMyAxOS45MjMgMC4wNTQxIDIwLjI3IDAuMDYyMiAwLjM0NjggMC40Mjg5MSAwLjk5OTUgMC44MTQ4NiAxLjQ1MDQgMS4zNDUzIDEuNTcxNiAwLjM5ODcxIDEuNDgzNCAxNS45NzUgMS40ODg2IDkuMzUzOCAwIDE0LjExNS0wLjA2NyAxNC41MDEtMC4yMTI2em0tMjMuODQ3LTcuMTE5NmMtMC4zMjgzNS0wLjMyODQtMC41OTcwMS0wLjc5NS0wLjU5NzAxLTEuMDM2OSAwLTAuMjQyIDAuMjY4NjYtMC43MDg2IDAuNTk3MDEtMS4wMzY5bDAuNTk3MDEtMC41OTdoMTQuMzA1bDAuNTU2MDMgMC40NzgzYzAuMzk3MyAwLjM0MTcgMC41NTYwMyAwLjY3MTYgMC41NTYwMyAxLjE1NTZzLTAuMTU4NzMgMC44MTM5LTAuNTU2MDMgMS4xNTU2bC0wLjU1NjAzIDAuNDc4M2gtMTQuMzA1em0tMmUtMyAtNy45NTQ3Yy0wLjM0MTU4LTAuMjc2Ni0wLjQ3MTk2LTAuNTk0Mi0wLjQ3MTk2LTEuMTQ5NiAwLTAuNTU1NSAwLjEzMDM4LTAuODczMSAwLjQ3MTk2LTEuMTQ5NyAwLjQ0NDI2LTAuMzU5NyAwLjk3MTgtMC4zODIxIDguOTkxNy0wLjM4MjFoOC41MTk4bDAuNDQ0MDggMC40NzI3YzAuNTY1MTggMC42MDE2IDAuNTgyMDYgMS42MzU5IDAuMDM1NiAyLjE4MjQtMC4zOTU0OSAwLjM5NTQtMC42ODA4IDAuNDA4NS04Ljk2MzkgMC40MDg1LTguMDU0NyAwLTguNTgzLTAuMDIyLTkuMDI3My0wLjM4MjJ6bTAuMDIzNC03Ljk4NjRjLTAuODkzODMtMC44OTM5LTAuNjI5MDUtMi4yMjkgMC41MjkzOC0yLjY2OTUgMC4yOTY1LTAuMTEyNyA0LjA2NTMtMC4xOTM4IDguOTI0OC0wLjE5MjEgOS4wODIzIDAgOS4xOTExIDAuMDE1IDkuNzA2NSAxLjA5MDUgMC4zNDc5NiAwLjcyNTcgMC4wMjY5IDEuNjA5OC0wLjcwNTY0IDEuOTQzNi0wLjM1MTI3IDAuMTYwMS0zLjE5NDEgMC4yMzA3LTkuMjc5MSAwLjIzMDctOC40NjI3IDAtOC43ODY5LTAuMDE0LTkuMTc1OS0wLjQwMzJ6bTI1LjE4OS0xMS4wODVjLTAuMzQwOTgtMC4zNjUxLTIuMzU0MS0yLjU0NzktNC40NzM1LTQuODUwN3MtMy45MzYzLTQuMjIwOC00LjAzNzQtNC4yNjIyYy0wLjEwNjM2LTAuMDQ0LTAuMTUgMS4yOTA1LTAuMTAzNTcgMy4xNjU3IDAuMDY1MyAyLjYzNjIgMC4xNTAwNiAzLjM3NDQgMC40NTQzMSAzLjk1NTkgMS4wOTk2IDIuMTAxNCAyLjMwMjggMi41OTMxIDYuNDQyNCAyLjYzMjdsMi4zMzc4IDAuMDIyeiIgc3Ryb2tlLXdpZHRoPSIuNzcxOTMiLz48Y2lyY2xlIGN4PSI2NS45MDkiIGN5PSIxMjI4LjIiIHI9IjMuNjkwNCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48ZWxsaXBzZSBjeD0iOTEuNzU1IiBjeT0iMTI1My41IiByeD0iNC45NTg1IiByeT0iMi4yMDk4IiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjwvZz48cGF0aCBkPSJtNjUuMTMyIDEyMjguN2M0LjU5MjItNy4yMjMyIDEwLjczNy0xMC45ODUgMTguNjUzLTEwLjc5NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIvPjxjaXJjbGUgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIgY3g9Ii0xNDAuNzIiIGN5PSIxMjI3LjkiIHI9IjMuNjkwNCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48cGF0aCBkPSJtMTQxLjQ5IDEyMjguNGMtNC41OTIyLTcuMjIzMS0xMC43MzctMTAuOTg1LTE4LjY1My0xMC43OTciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJtOTkuMTk2IDEyMzkuMWMtNS40MDY3IDQuMzIzOS00LjgwNzcgOS4zNjgzLTQuMTA0MyAxNC40MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiLz48ZWxsaXBzZSB0cmFuc2Zvcm09InNjYWxlKC0xLDEpIiBjeD0iLTExMy43MyIgY3k9IjEyNTMuOCIgcng9IjQuOTU4NSIgcnk9IjIuMjA5OCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48cGF0aCBkPSJtMTA2LjEgMTIzOS4yYzUuNDA2NyA0LjMyNCA0LjgwNzcgOS4zNjg0IDQuMTA0MyAxNC40MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIHRyYW5zZm9ybT0ibWF0cml4KC0uODY2MDMgLS41IC0uNSAuODY2MDMgMCAwKSIgY3g9Ii04NDkuMyIgY3k9Ijk0NCIgcj0iMy42OTA0IiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxwYXRoIGQ9Im0yNjMuOTQgMTI0M2MtMC4zNjUzOC04LjU1MTUtMy44MDU4LTE0Ljg4Mi0xMC43NTUtMTguNjc3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIi8+PGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzApIiBjeD0iLTQ1My4wNyIgY3k9IjExNzMuNSIgcj0iMy42OTA0IiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMTkzLjk1IDEyNDMuNmMwLjM2NTM4LTguNTUxNSAzLjgwNTgtMTQuODgyIDEwLjc1NS0xOC42NzciIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMyIvPjxjaXJjbGUgY3g9Ijg5LjM2OSIgY3k9IjEyMDQuMiIgcj0iOS4xMjM1IiBmaWxsPSIjZmZmIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxjaXJjbGUgY3g9IjExNS43MSIgY3k9IjEyMDQuMiIgcj0iOS4xMjM1IiBmaWxsPSIjZmZmIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjwvZz48Y2lyY2xlIGN4PSI4OS4zNjkiIGN5PSIxMjA0LjIiIHI9IjMuNjkwNCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48Y2lyY2xlIGN4PSIxMTUuNzEiIGN5PSIxMjA0LjIiIHI9IjMuNjkwNCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48Y2lyY2xlIGN4PSIyMTYuNjgiIGN5PSIxMjE4LjUiIHI9IjkuMTIzNSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0eWxlPSJwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIi8+PGNpcmNsZSBjeD0iMjQzLjAyIiBjeT0iMTIxOC41IiByPSI5LjEyMzUiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxjaXJjbGUgY3g9IjIxNi42OCIgY3k9IjEyMTguNSIgcj0iMy42OTA0IiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxjaXJjbGUgY3g9IjI0My4wMiIgY3k9IjEyMTguNSIgcj0iMy42OTA0IiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjx0ZXh0IHg9IjgyLjYxMzUxIiB5PSIxMjc0LjkzNzUiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4LjkwMXB4IiBsZXR0ZXItc3BhY2luZz0iMHB4IiBzdHJva2Utd2lkdGg9Ii40NzI1MyIgd29yZC1zcGFjaW5nPSIwcHgiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4geD0iODIuNjEzNTEiIHk9IjEyNzQuOTM3NSIgc3Ryb2tlLXdpZHRoPSIuNDcyNTMiPkRhdGE8L3RzcGFuPjwvdGV4dD48dGV4dCB4PSIyMDcuMzQ3MjEiIHk9IjEyNzQuNTk3NCIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTguOTAxcHgiIGxldHRlci1zcGFjaW5nPSIwcHgiIHN0cm9rZS13aWR0aD0iLjQ3MjUzIiB3b3JkLXNwYWNpbmc9IjBweCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbiB4PSIyMDcuMzQ3MjEiIHk9IjEyNzQuNTk3NCIgc3Ryb2tlLXdpZHRoPSIuNDcyNTMiPkRPTTwvdHNwYW4+PC90ZXh0PjwvZz48L2c+PC9zdmc+Cg=="},8162:(M,I,j)=>{j.d(I,{Z:()=>N});const N=j.p+"assets/images/02_data-properties-styles-f8d53cc2bea14c33baf6b69c5e8a2cd8.webp"},1673:(M,I,j)=>{j.d(I,{Z:()=>N});const N=j.p+"assets/images/03_data-properties-styles-heavy-15a88d4a544afe503fc61a4468d03df4.webp"},8904:(M,I,j)=>{j.d(I,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+Cjxzdmcgd2lkdGg9IjEyMy45MW1tIiBoZWlnaHQ9IjEwOS43OG1tIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjMuOTEgMTA5Ljc4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMy4zMjQgLTE1NDkpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcuNzUyIC01MS4wNDYpIj48cmVjdCB4PSI1MS4xMjYiIHk9IjE2MDAuMSIgd2lkdGg9IjEyMy44MSIgaGVpZ2h0PSIxMDkuNjgiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9Ii4xIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjx0ZXh0IHg9IjgyLjMwNDcwMyIgeT0iMTY5Ny42ODMyIiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOC45MDFweCIgbGV0dGVyLXNwYWNpbmc9IjBweCIgc3Ryb2tlLXdpZHRoPSIuNDcyNTMiIHdvcmQtc3BhY2luZz0iMHB4IiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHRzcGFuIHg9IjgyLjMwNDcwMyIgeT0iMTY5Ny42ODMyIiBzdHJva2Utd2lkdGg9Ii40NzI1MyI+TGF5ZXI8L3RzcGFuPjwvdGV4dD48Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKC0xNi4zMDYpIiBjeD0iLTM5OS4yNCIgY3k9IjE2MDEuMiIgcj0iMy42OTA0IiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxlbGxpcHNlIGN4PSI5OC45MTMiIGN5PSIxNjc0LjQiIHJ4PSI0Ljk1ODUiIHJ5PSIyLjIwOTgiIHN0eWxlPSJwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIi8+PHBhdGggZD0ibTY1Ljc5MSAxNjQ5LjZjMi4zNzk1LTguMjIyIDcuMjIwNy0xMy41NTggMTQuODcxLTE1LjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIHRyYW5zZm9ybT0ibWF0cml4KC0uOTU5NzcgLS4yODA3NyAtLjI4MDc3IC45NTk3NyAwIDApIiBjeD0iLTYwNy41NiIgY3k9IjE1NDEiIHI9IjMuNjkwNCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48cGF0aCBkPSJtMTUxLjA2IDE2NTAuM2MtMi4zNzk1LTguMjIyLTcuMjIwNy0xMy41NTgtMTQuODcxLTE1LjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJtMTA2LjM1IDE2NjBjLTUuNDA2NyA0LjMyNC00LjgwNzcgOS4zNjg0LTQuMTA0MyAxNC40MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiLz48ZWxsaXBzZSB0cmFuc2Zvcm09InNjYWxlKC0xLDEpIiBjeD0iLTEyMC44OSIgY3k9IjE2NzQuNyIgcng9IjQuOTU4NSIgcnk9IjIuMjA5OCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48cGF0aCBkPSJtMTEzLjI2IDE2NjAuMWM1LjQwNjcgNC4zMjM5IDQuODA3NyA5LjM2ODMgNC4xMDQzIDE0LjQyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Im0xMDYuNiAxNjU5LjVjLTMuNzQ1OS0wLjM5NC02LjQ1ODgtMS4xNjk5LTkuNDUwNC0yLjcwMjktMy45NzkzLTIuMDM5Mi03LjQ5MDQtNS4yNTc0LTkuODQyNS05LjAyMTQtMC44MDgzNS0xLjI5MzYtMS43NjM4LTMuMjExNS0yLjI0ODQtNC41MTMzLTAuMjE2ODMtMC41ODI0LTAuNDE1MDQtMS4wNzk3LTAuNDQwNS0xLjEwNTItMC4wMjUxLTAuMDI1LTEuMTQ0NyAwLjAzMS0yLjQ4NyAwLjEyNDktMS4zNDIzIDAuMDk0LTIuNDQ5NCAwLjE2MDgtMi40NjAyIDAuMTQ4MS0wLjAxOTEtMC4wMjMgMS4zMjM1LTEuNzU2IDQuNjUzOC02LjAwNDMgMC45ODAwMS0xLjI1MDEgMS44MTcxLTIuMjU0NSAxLjg2MDMtMi4yMzE5IDAuMjkzMzkgMC4xNTMgNy40NTY5IDcuMjE0OCA3LjM4ODQgNy4yODM0LTAuMDI0MSAwLjAyNC0xLjA1OTMgMC4xMDkxLTIuMzAwOSAwLjE4OTZsLTIuMjU3NiAwLjE0NjIgMC4wMjMxIDAuMzMyNGMwLjAyOTIgMC40MjIyIDEuMTgyNCAyLjcyNSAxLjkxODYgMy44MzIzIDIuMzYyOSAzLjU1NDMgNS44NzQ3IDYuNDQ0MyA5LjY4MTQgNy45NjcxIDIuODI0MiAxLjEyOTggNC43NDMgMS40OTAxIDcuOTM1NiAxLjQ5MDEgMi41MDYyIDAgMy43Nzc3LTAuMTYwOCA1Ljc0Mi0wLjcyNjUgNi4yNjExLTEuODAyOSAxMS4zODItNi40MTQ3IDEzLjc5My0xMi40MjJsMC40MzE5NS0xLjA3NiAyLjA5ODUtMC4wMzNjMS4yMDgtMC4wMTkgMi4wOTg2IDAuMDEzIDIuMDk4NiAwLjA3NiAwIDAuMzQxNy0xLjA2MTMgMy4wOTg5LTEuNjI2OSA0LjIyNjctMS4zMjI4IDIuNjM3NS0yLjU1MTMgNC4zNzE4LTQuNTc5NyA2LjQ2NS0zLjg0NDkgMy45Njc4LTguNzA1NCA2LjQ3ODctMTQuMTkzIDcuMzMxOS0xLjE2NzMgMC4xODE1LTQuNzkwMSAwLjMyMTUtNS43Mzg1IDAuMjIxOHptLTEuMzc1Ni0xMS4yMTh2LTIuMjAwMWwtMC4zMjA0NS0wLjA4Yy0wLjE3NjE5LTAuMDQ0LTAuNzQ1MDctMC4yNzQ1LTEuMjY0LTAuNTExN2wtMC45NDM1OC0wLjQzMTMtMS41NDc5IDEuNTQ0NC0xLjU0NzkgMS41NDQ1LTQuNzIxNy00LjcyMTggMS41NDQ0LTEuNTQ3OSAxLjU0NDUtMS41NDc5LTAuNDIyNy0wLjkzNWMtMC4yMzI0Mi0wLjUxNDItMC40NTc5LTEuMDgzLTAuNTAwOTYtMS4yNjRsLTAuMDc4NS0wLjMyOWgtNC40MjE2di02LjY5OWgyLjIwNWMyLjE4NDkgMCAyLjIwNTYtMWUtMyAyLjI3OTQtMC4yNjkyIDAuMDQxMy0wLjE0OCAwLjI2ODU0LTAuNzE3MiAwLjUwNTktMS4yNjQ4bDAuNDMxNjUtMC45OTU3LTEuNTQzNi0xLjU0NzEtMS41NDM2LTEuNTQ2OSA0LjcyMTctNC43MjE4IDEuNTQ3OSAxLjU0NDQgMS41NDc5IDEuNTQ0NSAwLjk0MzU5LTAuNDMxNGMwLjUxODk4LTAuMjM3MiAxLjA4NzgtMC40Njc0IDEuMjY0LTAuNTExN2wwLjMyMDQ1LTAuMDh2LTQuNDAwMmg2LjY5OXY0LjQwMDJsMC4zMjA0NiAwLjA4YzAuMTc2MTggMC4wNDQgMC43NDUwNyAwLjI3NDUgMS4yNjQgMC41MTE3bDAuOTQzNTkgMC40MzE0IDEuNTQ3OS0xLjU0NDUgMS41NDc5LTEuNTQ0NCA0LjcyMTggNC43MjE4LTMuMDg4OCAzLjA5NTcgMC40MjI2OSAwLjkzNWMwLjIzMjQzIDAuNTE0MyAwLjQ1NzkxIDEuMDgzMSAwLjUwMDk4IDEuMjY0bDAuMDc4NCAwLjMyOWg0LjQyMTZ2Ni43MDg5bC0yLjAwMzctMC4wMWMtMS4xMDIxLTAuMDEtMi4wOTM4LTAuMDEtMi4yMDM4IDAtMC4xMjQzMSAwLTAuMjUzNDUgMC4xNzUxLTAuMzQxMDkgMC40NTM4LTAuMDc3NSAwLjI0NjctMC4zMDY0OCAwLjgxNTItMC41MDg4MiAxLjI2MzNsLTAuMzY3NzUgMC44MTQ2IDEuNTQ1MiAxLjU0ODcgMS41NDUyIDEuNTQ4Ni0yLjM2MDkgMi4zNjA5LTIuMzYwOSAyLjM2MDgtMS41NDc5LTEuNTQ0NC0xLjU0NzktMS41NDQ1LTAuOTM1MDMgMC40MjI3Yy0wLjUxNDI1IDAuMjMyNS0xLjA4MyAwLjQ1NzktMS4yNjQgMC41MDExbC0wLjMyOTAyIDAuMDc4djQuNDIxNmgtNi42OTl2LTIuMjAwMXptNS4yMDg0LTUuOTk4YzIuNzc1OS0wLjcxMzMgNC44MDg1LTIuNjA3NSA1LjgyNDgtNS40MjgyIDAuMzQzMDEtMC45NTIzIDAuNDI4NDMtMy4xNTA5IDAuMTYzMDEtNC4yMDEtMC43NzQ1Ny0zLjA2NDQtMi45MzkxLTUuMjM1NC01Ljk4OTEtNi4wMDY3LTEuMzQwOC0wLjMzOTEtMy4yMTkyLTAuMjUzNS00LjQ2NzUgMC4yMDM1LTMuMTgwNyAxLjE2NDQtNS4yMDIgMy44MjY0LTUuMzczOSA3LjA3NzEtMC4wNzk0IDEuNTA4NyAwLjEwMTM2IDIuNTQ2MyAwLjY2NTU5IDMuODEzMyAwLjkzMTcxIDIuMDkyMiAyLjUyNTQgMy41NDUgNC43MTI3IDQuMjk2MSAxLjE1ODEgMC4zOTc3IDEuMTY3NyAwLjM5OTMgMi41NTAzIDAuNDE1MyAwLjczMzYgMC4wMSAxLjQ3ODYtMC4wNTcgMS45MTQtMC4xNjk0em0xOS40OTQtOC41MTM0Yy0yLjEyNDYtMi4wMzY1LTYuMzk1My02LjMwMTEtNi4zNTI3LTYuMzQzNyAwLjAyNDEtMC4wMjQgMS4wNTkzLTAuMTA5MSAyLjMwMDktMC4xODk1bDIuMjU3NC0wLjE0NjMtMC4wMjMxLTAuMzMyNGMtMC4wMzEyLTAuNDQyNy0xLjIxNjItMi43ODg0LTEuOTc1OC0zLjkxMDEtMy4zMjc1LTQuOTE0MS04LjIyLTguMTA5MS0xNC4wMzEtOS4xNjI1LTEuNjczNi0wLjMwMzQtNS4zODQzLTAuMzAzNC03LjA1NzkgMC03LjI4NzcgMS4zMjExLTEzLjI5NCA2LjE3MzMtMTYuMDA3IDEyLjkzMWwtMC40MzE5NSAxLjA3Ni0yLjA5ODUgMC4wMzNjLTEuMjA4IDAuMDE5LTIuMDk4Ni0wLjAxMy0yLjA5ODYtMC4wNzYgMC0wLjM0MTcgMS4wNjEzLTMuMDk5IDEuNjI2OS00LjIyNjcgMS4zMjI3LTIuNjM3NSAyLjU1MTMtNC4zNzE5IDQuNTc5Ny02LjQ2NTEgMy44NTkzLTMuOTgyNyA4LjYzMDgtNi40NDI2IDE0LjI1NS03LjM0OTIgMS43MjItMC4yNzc1IDUuNjgyOS0wLjI3NzUgNy40MDUgMCA0LjQ2NjMgMC43MTk5IDguMTI4MiAyLjI5OTEgMTEuNzQzIDUuMDY0IDEuMzE5OCAxLjAwOTUgMy41NjI0IDMuMjczNSA0LjU0MzggNC41ODc0IDEuNDEyNyAxLjg5MDkgMi43NjU0IDQuMzM5NSAzLjUyNTcgNi4zODE4IDAuMjE2NzMgMC41ODI0IDAuNDE0OTYgMS4wNzk3IDAuNDQwNTEgMS4xMDUyIDAuMDI1MSAwLjAyNiAxLjE0NDYtMC4wMzEgMi40ODctMC4xMjQ5IDEuMzQyMy0wLjA5NCAyLjQ0OTMtMC4xNjA5IDIuNDU5OS0wLjE0ODIgMC4wMTkxIDAuMDIzLTAuNzgwMjggMS4wNTQzLTQuNDE0MiA1LjY5NzItMS4wMDA2IDEuMjc4NS0xLjg3MzIgMi4zOTM2LTEuOTM5IDIuNDc3OS0wLjA5MDUgMC4xMTY3LTAuMzc4MDMtMC4wOTQtMS4xOTYyLTAuODc4NnoiIHN0cm9rZS13aWR0aD0iLjExOTYyIi8+PGNpcmNsZSBjeD0iOTUuNDk4IiBjeT0iMTYyMy44IiByPSI5LjEyMzUiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxjaXJjbGUgY3g9IjEyMS44NCIgY3k9IjE2MjMuOSIgcj0iOS4xMjM1IiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48Y2lyY2xlIGN4PSI5NS40OTgiIGN5PSIxNjIzLjgiIHI9IjMuNjkwNCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48Y2lyY2xlIGN4PSIxMjEuODQiIGN5PSIxNjIzLjkiIHI9IjMuNjkwNCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz48L2c+PC9nPjwvc3ZnPgo="},4623:(M,I,j)=>{j.d(I,{Z:()=>N});const N=j.p+"assets/images/05_layer-power-0a127750a6c307def72367047402d7c2.webp"},7540:(M,I,j)=>{j.d(I,{Z:()=>N});const N=j.p+"assets/images/06_layer-working-0216d8ee3870da88431514ef05889487.webp"}}]);