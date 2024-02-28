"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[5689],{6119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(1527),a=n(8717);const o={slug:"2022-11-25_3ds_hack_note",authors:["weiji"],tags:["learning note","3ds"]},s="3DS \u5237\u6a5f\u7b46\u8a18",i={permalink:"/blog/2022-11-25_3ds_hack_note",source:"@site/blog/2022-11-25_3ds_hack_note/index.md",title:"3DS \u5237\u6a5f\u7b46\u8a18",description:"\u95dc\u65bc\u5237\u6a5f\u6d41\u7a0b\uff0c\u5df2\u7d93\u6709\u975e\u5e38\u8a73\u76e1\u7684\u6559\u5b78\uff0c\u4e26\u4e14\u64cd\u4f5c\u7d30\u7bc0\u8ddf\u8ddf\u7576\u524d 3DS \u7248\u672c\u6216\u662f\u6a5f\u578b\u6703\u6709\u4e00\u4e9b\u843d\u5dee\uff0c \u7e41\u7463\u904e\u5f97\u6d41\u7a0b\u6211\u5c31\u4e0d\u5728\u672c\u6587\u4e00\u4e00\u4ecb\u7d39\u3002",date:"2022-11-25T00:00:00.000Z",formattedDate:"November 25, 2022",tags:[{label:"learning note",permalink:"/blog/tags/learning-note"},{label:"3ds",permalink:"/blog/tags/3-ds"}],readingTime:2.65,hasTruncateMarker:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2022-11-25_3ds_hack_note",authors:["weiji"],tags:["learning note","3ds"]},unlisted:!1,prevItem:{title:"\u4ea4\u53c9\u7de8\u8b6f QuickJs \u7b46\u8a18",permalink:"/blog/2022-11-29_3ds_cross_compilation_note"},nextItem:{title:"3DS \u5237 Linux \u7b46\u8a18",permalink:"/blog/2022-11-25_3ds_linux_note"}},d={authorsImageUrls:[void 0]},c=[{value:"\u5237 CFW (Custom firmware)",id:"\u5237-cfw-custom-firmware",level:2},{value:"Luma3DS",id:"luma3ds",level:2},{value:"\u540d\u8a5e\u8a3b\u89e3",id:"\u540d\u8a5e\u8a3b\u89e3",level:2},{value:"boot9strap",id:"boot9strap",level:3},{value:"33C3",id:"33c3",level:3},{value:"NDMA (DSi New DMA)",id:"ndma-dsi-new-dma",level:3}];function l(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u95dc\u65bc\u5237\u6a5f\u6d41\u7a0b\uff0c\u5df2\u7d93\u6709\u975e\u5e38\u8a73\u76e1\u7684",(0,r.jsx)(t.a,{href:"https://3ds.hacks.guide/zh_TW/get-started.html",children:"\u6559\u5b78"}),"\uff0c\u4e26\u4e14\u64cd\u4f5c\u7d30\u7bc0\u8ddf\u8ddf\u7576\u524d 3DS \u7248\u672c\u6216\u662f\u6a5f\u578b\u6703\u6709\u4e00\u4e9b\u843d\u5dee\uff0c \u7e41\u7463\u904e\u5f97\u6d41\u7a0b\u6211\u5c31\u4e0d\u5728\u672c\u6587\u4e00\u4e00\u4ecb\u7d39\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u5237-cfw-custom-firmware",children:"\u5237 CFW (Custom firmware)"}),"\n",(0,r.jsx)(t.p,{children:"\u4e0d\u8ad6\u578b\u865f\uff0c\u7b2c\u4e00\u6b65\u5c31\u662f\u5237 CFW\uff0c\u5982\u6b64\u4e00\u4f86\u6211\u5011\u5c31\u80fd\u900f\u904e CFW \u4f5c\u70ba bootloader \u53bb\u8f09\u5165\u5176\u4ed6 bootloader \u7a0b\u5f0f\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u6839\u64da\u4e0d\u540c\u7684\u7cfb\u7d71\u7248\u672c\uff0c\u80fd\u5920\u5229\u7528\u7684\u6f0f\u6d1e\u6703\u6709\u6240\u5dee\u7570\uff0c\u800c\u672c\u4eba\u6301\u6709\u7684 3DS \u8655\u65bc 5.x.x \u7248\u7684\u72c0\u614b\uff0c\u56e0\u6b64\u9078\u64c7 ",(0,r.jsx)(t.a,{href:"https://3ds.hacks.guide/zh_TW/installing-boot9strap-(soundhax)",children:"soundhax"})," \u4f86\u5b89\u88dd ",(0,r.jsx)(t.a,{href:"#boot9strap",children:"boot9strap"}),"\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"luma3ds",children:"Luma3DS"}),"\n",(0,r.jsx)(t.p,{children:"Luma3DS \u662f\u4e00\u500b\u7cfb\u7d71\u88dc\u4e01\uff0c\u5141\u8a31\u4f7f\u7528\u8005\u7372\u5f97\u66f4\u591a\u6b0a\u9650\u6216\u529f\u80fd\uff0c\u4e26\u4e14\u80fd\u5920\u5b89\u88dd\u975e\u5b98\u65b9\u7684 3DS \u61c9\u7528\u7a0b\u5f0f\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4e26\u4e14\u5b83\u80fd\u5920\u9032\u884c chainload\uff0c\u4e5f\u5c31\u662f boot9strap \u5f15\u5c0e\u5230 Luma3DS\uff1bLuma3DS \u518d\u5f15\u5c0e\u5230\u5176\u4ed6\u97cc\u9ad4\uff0c\u5982\uff1aLinux\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u300c",(0,r.jsx)(t.a,{href:"https://3ds.hacks.guide/zh_TW/finalizing-setup",children:"\u5b8c\u6210\u5b89\u88dd"}),"\u300d\u7684\u6b65\u9a5f\u4e2d\uff0c\u5305\u542b\u4e86\u5b89\u88dd Luma3DS\u3001\u66f4\u65b0\u7cfb\u7d71\u3001\u5b89\u88dd\u7b2c\u4e09\u65b9\u61c9\u7528\u7a0b\u5f0f\u7b49\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u540d\u8a5e\u8a3b\u89e3",children:"\u540d\u8a5e\u8a3b\u89e3"}),"\n",(0,r.jsx)(t.h3,{id:"boot9strap",children:"boot9strap"}),"\n",(0,r.jsx)(t.p,{children:"boot9strap \u662f\u4e00\u500b\u6f0f\u6d1e\u5229\u7528\u5de5\u5177\uff0c\u6548\u679c\u662f\u80fd\u5920\u4f7f 3DS \u8f09\u5165\u4e26\u57f7\u884c\u7b2c\u4e09\u65b9\u7684\u7a0b\u5f0f\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["Boot9 (ARM9 BootROM) \u662f\u4efb\u5929\u5802\u5728\u6676\u7247\u5167\u71d2\u9304\u7684\u97cc\u9ad4\uff0c\u5b83\u6703\u5c0d\u8f09\u5165\u7684\u97cc\u9ad4\u9032\u884c\u52a0\u5bc6\u9a57\u8b49\uff0c\u4f86\u78ba\u4fdd\u97cc\u9ad4\u4f86\u81ea\u4efb\u5929\u5802\u5b98\u65b9\uff0c\u7136\u800c\u9019\u500b\u7b97\u6cd5\u5b58\u5728\u6f0f\u6d1e\uff0c\u5141\u8a31\u7b2c\u4e09\u65b9\u97cc\u9ad4\u6b3a\u9a19 BootROM \u4e26\u88ab\u8f09\u5165\u5230 3DS \u4e2d\u57f7\u884c\u7372\u5f97\u63a7\u5236\u6b0a\u3002\u8a72\u6f0f\u6d1e\u7531 derrekr \u5728 ",(0,r.jsx)(t.a,{href:"#33C3",children:"33C3"})," \u767c\u8868",(0,r.jsx)(t.sup,{children:(0,r.jsx)(t.a,{href:"#user-content-fn-33c3-derrekr-9a8f08",id:"user-content-fnref-33c3-derrekr-9a8f08","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\u3002 \u7db2\u8def\u4e0a\u6709",(0,r.jsx)(t.a,{href:"http://www.databusworld.cn/9963.html",children:"\u4e2d\u6587\u7684\u8cc7\u6599"}),"\u5c0d\u6f0f\u6d1e\u7684\u5177\u9ad4\u6280\u8853\u7d30\u7bc0\u505a\u66f4\u9032\u4e00\u6b65\u7684\u89e3\u91cb\uff0c\u6709\u8208\u8da3\u7684\u670b\u53cb\u53ef\u4ee5\u53c3\u8003\u770b\u770b\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u4e26\u4e14\u66f4\u9032\u4e00\u6b65\u7684 boot9strap \u900f\u904e NDMA \u6f0f\u6d1e\u5c0d\u53d7\u4fdd\u8b77\u7684 Boot9 \u8a18\u61b6\u9ad4\u4f4d\u5740\u5beb\u5165\u8cc7\u6599\uff0c\u5f9e\u800c\u57f7\u884c\u5176\u4ed6\u7a0b\u5f0f",(0,r.jsx)(t.sup,{children:(0,r.jsx)(t.a,{href:"#user-content-fn-boot9strap-hack-9a8f08",id:"user-content-fnref-boot9strap-hack-9a8f08","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"\u3002"]}),"\n",(0,r.jsx)(t.h3,{id:"33c3",children:"33C3"}),"\n",(0,r.jsxs)(t.p,{children:["\u5168\u540d\u662f \u300cThe 33rd Chaos Communication Congress\u300d\uff0c\u7e3d\u4e4b\u5c31\u662f\u4e00\u500b\u975e\u5e38\u5927\u7684\u99ed\u5ba2\u5e74\u6703\u3002",(0,r.jsx)(t.sup,{children:(0,r.jsx)(t.a,{href:"#user-content-fn-33c3-intro-9a8f08",id:"user-content-fnref-33c3-intro-9a8f08","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),"\n",(0,r.jsx)(t.h3,{id:"ndma-dsi-new-dma",children:"NDMA (DSi New DMA)"}),"\n",(0,r.jsxs)(t.p,{children:["\u66ab\u5b58\u5668\u7684\u540d\u7a31\u3002",(0,r.jsx)(t.sup,{children:(0,r.jsx)(t.a,{href:"#user-content-fn-ndma-1-9a8f08",id:"user-content-fnref-ndma-1-9a8f08","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),(0,r.jsx)(t.sup,{children:(0,r.jsx)(t.a,{href:"#user-content-fn-dma_registers-9a8f08",id:"user-content-fnref-dma_registers-9a8f08","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})]}),"\n",(0,r.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,r.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{id:"user-content-fn-33c3-derrekr-9a8f08",children:["\n",(0,r.jsxs)(t.p,{children:["Nintendo Hacking 2016 - Game Over 33C3. derrekr. Retrieved 2022-11-25, from ",(0,r.jsx)(t.a,{href:"https://derrekr.github.io/3ds/33c3",children:"https://derrekr.github.io/3ds/33c3"})," ",(0,r.jsx)(t.a,{href:"#user-content-fnref-33c3-derrekr-9a8f08","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{id:"user-content-fn-boot9strap-hack-9a8f08",children:["\n",(0,r.jsxs)(t.p,{children:["sighax and boot9strap. SciresM. Retrieved 2022-11-25, from ",(0,r.jsx)(t.a,{href:"https://sciresm.github.io/33-and-a-half-c3/",children:"https://sciresm.github.io/33-and-a-half-c3/"})," ",(0,r.jsx)(t.a,{href:"#user-content-fnref-boot9strap-hack-9a8f08","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{id:"user-content-fn-33c3-intro-9a8f08",children:["\n",(0,r.jsxs)(t.p,{children:["33c3 intro | Just for noting. (n.d.). Retrieved 2022-11-25, from ",(0,r.jsx)(t.a,{href:"https://blog.m157q.tw/posts/2016/12/27/33c3-0/",children:"https://blog.m157q.tw/posts/2016/12/27/33c3-0/"})," ",(0,r.jsx)(t.a,{href:"#user-content-fnref-33c3-intro-9a8f08","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{id:"user-content-fn-ndma-1-9a8f08",children:["\n",(0,r.jsxs)(t.p,{children:["GBATEK - GBA/NDS Technical Info. (n.d.). Retrieved 2022-11-25, from ",(0,r.jsx)(t.a,{href:"https://problemkaputt.de/gbatek.htm#dsinewdmandma",children:"https://problemkaputt.de/gbatek.htm#dsinewdmandma"})," ",(0,r.jsx)(t.a,{href:"#user-content-fnref-ndma-1-9a8f08","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{id:"user-content-fn-dma_registers-9a8f08",children:["\n",(0,r.jsxs)(t.p,{children:["Super NES Programming/DMA tutorial - Wikibooks, open books for an open world. (n.d.). Retrieved 2022-11-25, from ",(0,r.jsx)(t.a,{href:"https://en.wikibooks.org/wiki/Super_NES_Programming/DMA_tutorial#DMA_registers",children:"https://en.wikibooks.org/wiki/Super_NES_Programming/DMA_tutorial#DMA_registers"})," ",(0,r.jsx)(t.a,{href:"#user-content-fnref-dma_registers-9a8f08","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8717:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(959);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);