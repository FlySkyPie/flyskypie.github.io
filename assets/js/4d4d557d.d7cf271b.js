"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[4954],{85733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(11527),o=n(88717);const s={slug:"2024-05-26_polis-gpu-context-issue",authors:["weiji"],tags:["Polis","Hakoniwa","The Key of Huanche"]},a="\u95dc\u65bc Polis \u7684 GPU Context \u554f\u984c",r={permalink:"/blog/2024-05-26_polis-gpu-context-issue",source:"@site/blog/2024-05-26_polis-gpu-context-issue/index.md",title:"\u95dc\u65bc Polis \u7684 GPU Context \u554f\u984c",description:"\u9019\u500b\u554f\u984c\u4e00\u76f4\u4f54\u7528\u6211\u7684\u5927\u8166\u8cc7\u6e90\uff0c\u7136\u800c\u76ee\u524d\u6211\u6b63\u5728\u5fd9\u65bc\u5176\u4ed6 Side Project\uff0c\u7121\u5fc3\u8655\u7406\u9019\u500b\u554f\u984c\uff0c\u6240\u4ee5\u6211\u60f3\u5beb\u4e00\u7bc7\u6587\u7ae0\u5148\u628a\u9019\u5806\u6771\u897f\u5012\u51fa\u53bb\uff0c\u8b93\u8166\u6839\u5b50\u6e05\u975c\u4e00\u9ede\uff0c\u65e5\u5f8c\u518d\u56de\u982d\u4f86\u8655\u7406\u3002",date:"2024-05-26T00:00:00.000Z",formattedDate:"May 26, 2024",tags:[{label:"Polis",permalink:"/blog/tags/polis"},{label:"Hakoniwa",permalink:"/blog/tags/hakoniwa"},{label:"The Key of Huanche",permalink:"/blog/tags/the-key-of-huanche"}],readingTime:.915,hasTruncateMarker:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2024-05-26_polis-gpu-context-issue",authors:["weiji"],tags:["Polis","Hakoniwa","The Key of Huanche"]},unlisted:!1,prevItem:{title:"\u6211\u559c\u6b61 Minecraft\uff0c\u4e0d\u904e\u53ef\u80fd\u4e0d\u662f\u4e00\u822c\u4eba\u8a8d\u77e5\u7684\u90a3\u7a2e",permalink:"/blog/2024-05-29_I-like-minecraft-but-its-might-no-the-way-you-think"},nextItem:{title:"\u6211\u7684 Tiddlywiki \u4e4b\u65c5 - Kanban",permalink:"/blog/2024-04-03_tiddlywiki-journey-3"}},c={authorsImageUrls:[void 0]},l=[];function u(e){const t={blockquote:"blockquote",code:"code",img:"img",p:"p",...(0,o.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:(0,i.jsx)("meta",{property:"og:image",content:"https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/blog/2024-05-26_polis-gpu-context-issue/img/01_architecture.webp"})}),"\n",(0,i.jsx)(t.p,{children:"\u9019\u500b\u554f\u984c\u4e00\u76f4\u4f54\u7528\u6211\u7684\u5927\u8166\u8cc7\u6e90\uff0c\u7136\u800c\u76ee\u524d\u6211\u6b63\u5728\u5fd9\u65bc\u5176\u4ed6 Side Project\uff0c\u7121\u5fc3\u8655\u7406\u9019\u500b\u554f\u984c\uff0c\u6240\u4ee5\u6211\u60f3\u5beb\u4e00\u7bc7\u6587\u7ae0\u5148\u628a\u9019\u5806\u6771\u897f\u5012\u51fa\u53bb\uff0c\u8b93\u8166\u6839\u5b50\u6e05\u975c\u4e00\u9ede\uff0c\u65e5\u5f8c\u518d\u56de\u982d\u4f86\u8655\u7406\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u9019\u662f Polis \u9810\u8a08\u4f7f\u7528\u7684\u67b6\u69cb\uff1a"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(8659).Z+"",width:"1254",height:"1504"})}),"\n",(0,i.jsxs)(t.p,{children:["\u56e0\u70ba Canvas \u63d0\u4f9b\u4e00\u500b ",(0,i.jsx)(t.code,{children:"captureStream()"})," \u65b9\u6cd5\u5141\u8a31\u628a Canvas \u7684\u756b\u9762\u8f49\u63db\u6210 ",(0,i.jsx)(t.code,{children:"MediaStream"})," \u7269\u4ef6\uff0c\u800c ",(0,i.jsx)(t.code,{children:"MediaStream"}),"  \u53c8\u80fd\u5920\u62bd\u51fa ",(0,i.jsx)(t.code,{children:"MediaStreamTrack"})," \u900f\u904e WebRTC \u7684 API \u4e32\u6d41\u51fa\u53bb\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u4f46\u662f\u6700\u8fd1\u6211\u767c\u73fe\u4e00\u500b\u554f\u984c\uff0c\u5c31\u662f WebGL (Three.js) \u5b58\u5728\u4e00\u4e9b\u9650\u5236\uff1a"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"\u4e00\u500b WebGLRenderingContext \u88ab\u7d81\u5b9a\u5230\u4e00\u500b Canvas"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u800c GL context \u4e4b\u9593\u662f\u7121\u6cd5\u4e92\u901a\u7684\uff0c\u56e0\u6b64\u8907\u6578\u500b Canvas \u7121\u6cd5\u5171\u7528\u540c\u4e00\u7d44 GPU Context\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8659:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/01_architecture-c124b45da57979da527c27f59d830b0b.webp"},88717:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(50959);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);