"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[3554],{4024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(1527),s=t(8717);const o={slug:"2023-09-24_a-journey-about-learning-ecs",authors:["weiji"],tags:["learning note","ECS","Miniplex"]},r="ECS \u5b78\u7fd2\u8207 aimAndShoot \u91cd\u69cb\u4e4b\u65c5",l={permalink:"/blog/2023-09-24_a-journey-about-learning-ecs",source:"@site/blog/2023-09-24_a-journey-about-learning-ecs/index.md",title:"ECS \u5b78\u7fd2\u8207 aimAndShoot \u91cd\u69cb\u4e4b\u65c5",description:"\u524d\u60c5\u63d0\u8981",date:"2023-09-24T00:00:00.000Z",formattedDate:"September 24, 2023",tags:[{label:"learning note",permalink:"/blog/tags/learning-note"},{label:"ECS",permalink:"/blog/tags/ecs"},{label:"Miniplex",permalink:"/blog/tags/miniplex"}],readingTime:12.48,hasTruncateMarker:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2023-09-24_a-journey-about-learning-ecs",authors:["weiji"],tags:["learning note","ECS","Miniplex"]},unlisted:!1,prevItem:{title:"\u95dc\u65bc\u6211\u60f3\u7528 ECS \u5be6\u4f5c Minecraft \u4ee5\u5206\u6563\u5f0f\u67b6\u69cb\u904b\u884c\u4e26\u5728\u5176\u4e2d\u7528\u589e\u5f37\u5f0f\u5b78\u7fd2\u8a13\u7df4\u5b8c\u5168\u8996\u89ba\u5316\u4e4b\u905e\u8ff4\u5e03\u6797\u985e\u795e\u7d93\u7db2\u8def\u4ee5\u7522\u51fa\u4e8c\u7dad\u689d\u78bc\u4eba\u9020\u8a9e\u8a00\u90a3\u6a94\u4e8b",permalink:"/blog/about-ecs-distributed-minecraft-rl-rbnn-bar-code-language"},nextItem:{title:"\u958b\u6e90\u7684 Robocraft Clone \u5c08\u6848 - Own War",permalink:"/blog/2023-08-27_opensource-robocraft"}},a={authorsImageUrls:[void 0]},c=[{value:"\u524d\u60c5\u63d0\u8981",id:"\u524d\u60c5\u63d0\u8981",level:2},{value:"ECS (Entity Component System)",id:"ecs-entity-component-system",level:3},{value:"aimAndShoot",id:"aimandshoot",level:3},{value:"Miniplex",id:"miniplex",level:3},{value:"\u91cd\u69cb",id:"\u91cd\u69cb",level:2},{value:"Web Component (Custom Element) \u521d\u9ad4\u9a57",id:"web-component-custom-element-\u521d\u9ad4\u9a57",level:3},{value:"ECS",id:"ecs",level:3},{value:"Joy UI \u521d\u9ad4\u9a57",id:"joy-ui-\u521d\u9ad4\u9a57",level:3},{value:"\u5c0f\u63d2\u66f2",id:"\u5c0f\u63d2\u66f2",level:3},{value:"\u6536\u5b98 (Yose, \u30e8\u30bb)",id:"\u6536\u5b98-yose-\u30e8\u30bb",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",ul:"ul",...(0,s.a)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{children:(0,i.jsx)("meta",{property:"og:image",content:"https://raw.githubusercontent.com/FlySkyPie/flyskypie.github.io/main/blog/2023-09-24_a-journey-about-learning-ecs/img/00_hero.webp"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(3532).Z+"",width:"1440",height:"762"})}),"\n",(0,i.jsx)(n.h2,{id:"\u524d\u60c5\u63d0\u8981",children:"\u524d\u60c5\u63d0\u8981"}),"\n",(0,i.jsx)(n.p,{children:"\u96a8\u8457 Polis \u5c08\u6848\u7684\u4e32\u6d41\u529f\u80fd\u5b8c\u6210\uff0c\u958b\u767c\u958b\u59cb\u5f80\u4e0b\u4e00\u500b\u968e\u6bb5\u767c\u5c55\uff0cPoC \u9084\u5269\u4e0b\u5169\u500b\u529f\u80fd\u9700\u8981\u5be6\u4f5c\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u57fa\u672c\u904a\u6232\u7cfb\u7d71"}),"\n",(0,i.jsx)(n.li,{children:"P2P \u9023\u7dda"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u70ba P2P \u9023\u7dda\u9084\u9700\u8981\u89e3\u6c7a\u904a\u6232\u72c0\u614b\u540c\u6b65\u7684\u554f\u984c\uff0c\u56e0\u6b64\u5b83\u5728\u67d0\u7a2e\u7a0b\u5ea6\u4e0a\u4ef0\u8cf4\u904a\u6232\u7cfb\u7d71\uff0c\u6240\u4ee5\u904a\u6232\u7cfb\u7d71\u7684\u5be6\u4f5c\u5c31\u662f\u6211\u4e0b\u4e00\u500b\u968e\u6bb5\u8981\u8655\u7406\u7684\u4e8b\u60c5\u3002\u800c\u904a\u6232\u7cfb\u7d71\u9810\u8a08\u8981\u4f7f\u7528 ECS (Entity Component System) \u5be6\u4f5c\u5247\u662f\u5f88\u65e9\u5c31\u6c7a\u5b9a\u7684\u4e8b\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"ecs-entity-component-system",children:"ECS (Entity Component System)"}),"\n",(0,i.jsx)(n.p,{children:"\u95dc\u65bc ECS \u7684\u5177\u9ad4\u7d30\u7bc0\u672c\u6587\u5c31\u4e0d\u518d\u8d05\u8ff0\uff0c\u7c21\u8a00\u4e4b\u5c31\u662f\u4f7f\u7528 ECS \u67b6\u69cb\u7684\u904a\u6232\u5728\u505a\u8077\u8cac\u5206\u96e2\u7684\u6642\u5019\u6703\u8ddf\u7269\u4ef6\u5c0e\u5411 (OOP) \u4e2d\u62bd\u8c61\u5316\u7684\u601d\u8003\u65b9\u5f0f\u4e0d\u76f8\u540c\uff0c\u9019\u5c0d\u6211\u800c\u8a00\u662f\u4e00\u500b\u6311\u6230\uff0c\u56e0\u70ba\u6211\u6c92\u6709\u771f\u6b63\u7528 ECS \u67b6\u69cb\u53bb\u5beb\u904a\u6232\u904e\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u65e9\u6703\u63a5\u89f8 ECS \u9019\u500b\u65b0\u9bae\u73a9\u610f\u5152\u662f\u56e0\u70ba\u5de5\u4f5c\u7684\u95dc\u4fc2\u63a5\u89f8\u4e86 ",(0,i.jsx)(n.a,{href:"https://github.com/bberak/react-game-engine",children:"React Game Engine"})," \u4f46\u662f\u5b83\u53ea\u662f ECS \u7684\u5f31\u5be6\u73fe (loose implementation)\uff0c\u56e0\u6b64\u8207\u5be6\u969b ECS \u7684\u601d\u8003\u65b9\u5f0f\u4e4b\u9593\u9084\u662f\u5b58\u5728\u843d\u5dee\uff0c\u52a0\u4e0a\u540c\u4e8b\u5176\u5be6\u8ddf\u6211\u63d0\u904e\u6211\u7684\u5beb\u6cd5\u5f88\u5927\u7a0b\u5ea6\u9084\u662f\u4e00\u822c\u7684 React \u7a0b\u5f0f\uff0c\u4e26\u6c92\u6709\u767c\u63ee ECS \u7684\u7279\u6027\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u500b\u56f0\u64fe\u6211\u7684\u9ede\u662f\uff0c\u90e8\u5206 Javascript/Typescript \u5be6\u4f5c\u7684 ECS \u51fd\u5f0f\u5eab\u8457\u91cd\u65bc ECS \u4e2d\u300c\u8cc7\u6599\u7dca\u6e4a\u300d\u7684\u7279\u6027\uff0c\u5b83\u5011\u4f7f\u7528 TypedArray \u5b9a\u7fa9\u7684\u57fa\u672c\u578b\u614b\u4f86\u5132\u5b58\u8cc7\u6599\uff0c\u9019\u4f7f\u5f97\u5b83\u5011\u7684\u539f\u59cb\u8a2d\u8a08\u8207 Three.js \u6216 Rapier \u9019\u7a2e\u6709\u81ea\u5df1\u5b9a\u7fa9 class \u7684\u51fd\u5f0f\u5eab\u4e4b\u9593\u4e0d\u597d\u5354\u8abf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u6b64\u6211\u8a8d\u70ba\u5728\u6b63\u5f0f\u5f15\u5165 ECS \u9019\u500b\u6280\u8853\u68e7 (Tech Stack) \u5230 Polis \u4ee5\u524d\u61c9\u8a72\u5148\u5beb\u4e00\u500b\u77ed\u671f\u5c08\u6848\u5c0d\u9078\u5b9a\u51fd\u5f0f\u5eab\u7684\u53ef\u884c\u6027\u505a\u9a57\u8b49\uff0c\u4ee5\u53ca\u7d2f\u7a4d\u8db3\u5920\u7684\u300cECS \u601d\u7dad\u300d\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"aimandshoot",children:"aimAndShoot"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/victorqribeiro/aimAndShoot",children:"aimAndShoot"})," \u4fbf\u662f\u6211\u7684\u5be6\u9a57\u5c0d\u8c61\u3002\u5728\u300c",(0,i.jsx)(n.a,{href:"/blog/2023-01-04_origin-of-gear-redolence/",children:"\u5e95\u706b\u7684\u82ac\u82b3 - \u5c08\u6848\u8d77\u6e90"}),"\u300d\u4e00\u6587\u4e2d\u6709\u63d0\u5230\u904e\u9019\u500b repository\uff0c\u5b83\u662f\u4e00\u500b\u6709\u9ede\u50cf ",(0,i.jsx)(n.code,{children:"diep.io"})," \u7684\u7c21\u55ae\u5c0f\u904a\u6232\uff0c\u4f5c\u70ba\u91cd\u69cb\u6539\u5beb\u7684\u5c0d\u8c61\u662f\u518d\u9069\u5408\u4e0d\u904e\u4e86\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"miniplex",children:"Miniplex"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(3218).Z+"",width:"1333",height:"456"})}),"\n",(0,i.jsxs)(n.p,{children:["Javascript/Typescript \u4e2d\u6709\u4e0d\u5c11 ",(0,i.jsx)(n.a,{href:"https://npmtrends.com/@javelin/ecs-vs-ape-ecs-vs-bitecs-vs-ecs-lib-vs-ecsy-vs-miniplex-vs-yagl-ecs",children:"ECS \u5957\u4ef6"}),"\uff0c\u96d6\u7136\u8ddf\u4e00\u822c\u7684\u71b1\u9580\u5957\u4ef6\u76f8\u8f03\u4e4b\u4e0b\u90fd\u7b97\u662f\u51b7\u9580\u5957\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6b63\u5982\u6211\u63d0\u904e\u5f97\uff0c\u5b83\u5011\u4e4b\u4e2d\u7684\u5927\u90e8\u5206\u8457\u91cd\u65bc\u8cc7\u6599\u7dca\u6e4a\u7684\u8a2d\u8a08\uff0c\u6216\u662f\u6709\u8457\u4e0d\u652f\u63f4/\u4e0d\u53cb\u5584 Typescript \u7684\u554f\u984c\uff0c\u53e6\u5916\u4e00\u9ede\u5247\u662f\u4e00\u4e9b\u5957\u4ef6\u66f4\u9810\u8a2d\u4e86\u4e00\u5957\u6846\u67b6\uff0c\u958b\u767c\u8005\u5fc5\u9808\u5728\u9019\u500b\u67b6\u69cb\u4e0b\u958b\u767c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u76f8\u8f03\u4e4b\u4e0b ",(0,i.jsx)(n.a,{href:"https://github.com/hmans/miniplex",children:"Miniplex"})," \u66f4\u6df1\u523b\u7684\u9ad4\u73fe\u4e86\u300c\u4e00\u6b21\u505a\u597d\u4e00\u4ef6\u4e8b\u300d\u7684\u54f2\u5b78\uff0c\u8b93\u6211\u5011\u4f86\u770b\u770b\u5b83\u7684\u4ecb\u7d39\uff1a"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A \ud83d\udc69\u200d\ud83d\udcbb developer-friendly entity management system for \ud83d\udd79 games and similarly demanding applications, based on \ud83d\udee0 ECS architecture."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u662f\u7684\uff0c\u5b83\u53ea\u628a\u81ea\u5df1\u5b9a\u4f4d\u5728\u300cEntity Management\u300d\u7684\u90e8\u4efd\uff0c\u65e2\u4e0d\u7ba1\u8cc7\u6599\u7dca\u4e0d\u50c5\u6e4a\uff0c\u4e5f\u4e0d\u7ba1\u958b\u767c\u8005\u60f3\u600e\u9ebc\u5be6\u4f5c System\uff0c\u5373\u4fbf\u770b\u8457\u7bc4\u4f8b\u7a0b\u5f0f\u78bc\uff0c\u6211\u4e5f\u4e0d\u6703\u6d6e\u73fe\u300c\u9019\u73a9\u610f\u5152\u5230\u5e95\u8981\u600e\u9ebc\u8ddf Three.js \u6216 Rapier \u6574\u5408\uff1f\u300d\u7684\u554f\u984c\uff0c\u6211\u53ea\u9700\u8981\u7169\u60f1\u5982\u4f55\u628a\u554f\u984c\u4f7f\u7528 ECS \u7684\u67b6\u69cb\u53bb\u5be6\u73fe\u5c31\u597d\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u91cd\u69cb",children:"\u91cd\u69cb"}),"\n",(0,i.jsx)(n.p,{children:"\u5f88\u5feb\u5c31\u5b8c\u6210\u4e86\u5f9e Javascript \u8f49\u63db\u6210 Typescript \u7684\u91cd\u69cb (2023-09-13~2023-09-15)\uff0c\u9019\u500b\u90e8\u4efd\u61c9\u8a72\u7b97\u662f\u6574\u500b\u91cd\u69cb\u4e2d\u6700\u7c21\u55ae\u7684\uff0c\u7562\u7adf\u9077\u79fb Legacy Code \u6211\u4e5f\u4e0d\u662f\u7b2c\u4e00\u6b21\u5e79\u4e86\uff0c\u6709\u4e00\u4e9b\u5de5\u5177\u53ef\u4ee5\u5354\u52a9\u5b8c\u6210\u9019\u7a2e\u4e8b\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["AMD to es6","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/jonbretman/amd-to-as6",children:"https://github.com/jonbretman/amd-to-as6"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Prototype to Class","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lebab/lebab",children:"https://github.com/lebab/lebab"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Javascript to Typescript","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/gregjacobs/js-to-ts-converter",children:"https://github.com/gregjacobs/js-to-ts-converter"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"web-component-custom-element-\u521d\u9ad4\u9a57",children:"Web Component (Custom Element) \u521d\u9ad4\u9a57"}),"\n",(0,i.jsx)(n.p,{children:"\u5fae\u524d\u7aef (Micro frontends) \u5176\u5be6\u4e5f\u4e0d\u662f\u4ec0\u9ebc\u65b0\u9bae\u7684\u73a9\u610f\u4e86\uff0c\u4e0d\u904e\u4e00\u76f4\u6c92\u6709\u6a5f\u6703\u6216\u52d5\u6a5f\u53bb\u4f7f\u7528\u5b83\u3002\u7b2c\u4e00\u6b21\u77e5\u9053\u9019\u500b\u6771\u897f\u662f\u70ba\u4e86\u89e3\u6c7a\u5ba2\u6236\u7684\uff08\u76f8\u5c0d\uff09\u5927\u578b\u5c08\u6848\u800c\u67e5\u8cc7\u6599\u67e5\u5230\u7684\uff0c\u53ea\u662f\u5ba2\u6236\u65b9\u9762\u7684\u6280\u8853\u76f8\u5c0d\u843d\u5f8c\uff08\u6c92\u6709 CI/CD\u3001\u6574\u5408\u4ef0\u8cf4\u5ba2\u6236\u7684\u5de5\u7a0b\u5e2b\u624b\u52d5\u8907\u88fd\u7a0b\u5f0f\u78bc\u3001\u9810\u8a08\u4f7f\u7528 iframe \u4f5c\u70ba\u5927\u578b\u5c08\u6848\u7684 solution...\uff09\uff0c\u800c\u516c\u53f8\u4f5c\u70ba\u4ee3\u5de5\u65b9\u4e26\u6c92\u6709\u6280\u8853\u6c7a\u7b56\u7684\u6b0a\u9650\uff0c\u81ea\u5df1\u672c\u8eab\u4e5f\u6c92\u6709 side project \u6709\u9762\u81e8\u985e\u4f3c\u7684\u554f\u984c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f5c\u70ba\u4e00\u500b\u7db2\u9801\u524d\u7aef\u5de5\u7a0b\u5e2b\uff0cUI \u4e4b\u985e\u7684\u554f\u984c\u6211\u4e00\u5f8b\u60f3\u7528 React \u89e3\u6c7a\uff0c\u5728 Canvas \u4e0a\u523b UI \u6839\u672c\u6d6a\u8cbb\u6642\u9593\u6548\u679c\u53c8\u5dee\u3002\u4f46\u662f\u9019\u500b ECS \u7684\u7df4\u7fd2\u6211\u4e26\u4e0d\u60f3\u76f4\u63a5\u8b93\u5b83\u8ddf React App \u8026\u5408\uff0c\u767c\u73fe\u9019\u4f3c\u4e4e\u662f\u4f7f\u7528 Web Component \u9019\u500b ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",children:"Web API"})," \u7684\u597d\u6642\u6a5f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u65bc\u662f\u4e00\u958b\u59cb (2023-09-16) \u6211\u5148\u6839\u64da\u6211\u9810\u60f3\u7684\u6392\u7248\u7528 React \u5be6\u4f5c\uff0c\u518d\u628a\u5b83\u5305\u88dd\u6210 ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",children:"Custom Element"}),"\uff0c\u900f\u904e\u4e00\u500b callback (EventListener) \u7576 Canvas \u88ab\u639b\u4e0a DOM \u4e4b\u5f8c\u56de\u50b3 ",(0,i.jsx)(n.code,{children:"HTMLCanvasElement"})," \uff0c\u518d\u7528\u904a\u6232\u7684\u5be6\u4f8b\u53bb\u63a5\u6536\u5b83\u4f86\u7e6a\u88fd\u904a\u6232\u5167\u5bb9\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7576\u6211\u628a\u904a\u6232\u908f\u8f2f\u5be6\u4f5c\u7684\u5dee\u4e0d\u591a\u4e4b\u5f8c (2023-09-20)\uff0c\u767c\u73fe\u61c9\u8a72\u53cd\u904e\u4f86\u64cd\u4f5c\uff1a"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u628a\u904a\u6232\u5c01\u88dd\u6210 Custom Element \u7d66 React \u4f7f"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u70ba\u6574\u500b\u904a\u6232\u5176\u5be6\u53ea\u4ef0\u8cf4\u4e00\u584a Canvas \u4f5c\u70ba I/O\uff0c\u53ea\u8981\u80fd\u5920\u6070\u7576\u7684\u5b8c\u6210\u521d\u59cb\u5316\u8ddf\u91cb\u653e\u8cc7\u6e90\uff0c\u5c31\u80fd\u88ab\u5c01\u88dd\u5230 React \u7684 Cycle life \u5167\u624d\u5c0d\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53e6\u4e00\u65b9\u9762\u4e5f\u662f\u56e0\u70ba\u6211\u5df2\u7d93\u5728 React \u5167\u5beb\u904e\u8af8\u5982 Three.js \u548c MapBox GL JS \u7684\u6771\u897f\uff0c\u5c0d\u65bc\u9019\u7a2e\u300c\u975e React \u539f\u751f\u7684\u5957\u4ef6\u5982\u4f55\u6574\u5408\u9032 React App \u5167\u300d\u5df2\u7d93\u5f88\u76f4\u89ba\u7684\u77e5\u9053\u600e\u9ebc\u505a\u4e86\uff1a\u7528 ",(0,i.jsx)(n.code,{children:"ref"})," \u53d6\u5f97\u5be6\u4f8b\u4e26\u642d\u914d ",(0,i.jsx)(n.code,{children:"useEffect"})," \u4f86\u628a\u4e8b\u4ef6\u639b\u4e0a\u53bb\u8ddf\u91cb\u653e callback\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"ecs",children:"ECS"}),"\n",(0,i.jsxs)(n.p,{children:["Miniplex \u7684 Typescript \u53cb\u5584\u7a0b\u5ea6\u7b97\u662f\u6bd4\u6211\u9810\u671f\u7684\u7684\u9084\u597d\uff0c\u95dc\u65bc Entity \u7684\u578b\u5225\u5982\u4f55\u8072\u660e\uff0cGithub \u4e0a\u9762\u6709\u4e00\u5247\u8a0e\u8ad6\u7b97\u662f\u7d66\u51fa\u4e86\u883b\u660e\u78ba\u7684\u65b9\u5411",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-miniplex-entity-type-b6b5a5",id:"user-content-fnref-miniplex-entity-type-b6b5a5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type IPosition {\n  position: Vector3\n}\n\ntype IHealth {\n  health: { current: number, max: number }\n}\n\ntype Entity = Partial<IPosition & IHealth & ...>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u500b\u4eba\u662f\u4f7f\u7528\u985e\u4f3c\u4f46\u662f\u6709\u4e00\u9ede\u5dee\u7570\u7684\u65b9\u5f0f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export type AgentEntity = {\n  id: string;\n  particle: ParticleComponent;\n  health: HealthComponent;\n  projectileEmitter: ProjectileEmitterComponent;\n  warrior: WarriorMiscComponent;\n  brain?: DejavuComponent;\n  statistics: WarriorStatisticsComponent;\n};\n\nexport type BulletEntity = {\n  particle: ParticleComponent;\n  attackEffect: AttackEffectComponent;\n};\n\nexport type Entity = Partial<\n  TimeEntity & EventEntity & AgentEntity & BulletEntity\n>;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5 ECS \u7684\u601d\u8003\u6a21\u5f0f\uff0c\u5176\u5be6\u4e26\u4e0d\u5728\u4e4e Entity \u8981\u591a\u5177\u9ad4\uff0c\u800c\u662f\u4ee5 Component \u70ba\u64cd\u4f5c\u55ae\u5143\uff0c\u800c Component \u5728\u4e2d Miniplex \u5be6\u8cea\u7b49\u65bc Entity \u7684 properties\uff0c\u56e0\u6b64\u5982\u679c\u601d\u8003\u65b9\u5f0f\u4f9d\u7136\u53d7\u5230 OOP \u5f71\u97ff\uff0c\u81f3\u5c11\u53ef\u4ee5\u7528\u9019\u7a2e\u65b9\u5f0f\u8f14\u52a9\u7522\u751f\u4e00\u7a2e\u4ecb\u65bc\u300c\u4f9d\u7167\u7269\u4ef6\u8a2d\u8a08\u908f\u8f2f\u7684\u5207\u5272\u65b9\u5f0f\u300d\u8207\u300c\u4f9d\u7167 Component \u908f\u8f2f\u7684\u5207\u5272\u65b9\u4e4b\u300d\u4e4b\u9593\u7684\u904e\u6e21\u72c0\u614b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u5916\u56e0\u70ba\u6211\u662f\u5f9e\u4e00\u500b\u65e2\u5b58\u5c08\u6848\u505a\u91cd\u69cb\uff0c\u56e0\u6b64\u6211\u61f6\u5f97\u91cd\u65b0\u7528\u300cThe Component Way\u300d\u7684\u601d\u8003\u6a21\u5f0f\u53bb\u91cd\u65b0\u8a2d\u8a08\u8cc7\u6599\u7d50\u69cb\uff0c\u6240\u4ee5\u6211\u628a\u7269\u4ef6\u7684\u5c6c\u6027\u96a8\u4fbf\u5305\u6210 Component \u4e1f\u9032\u53bb\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"joy-ui-\u521d\u9ad4\u9a57",children:"Joy UI \u521d\u9ad4\u9a57"}),"\n",(0,i.jsxs)(n.p,{children:["\u5de5\u4f5c\u4e0a\u5f88\u5e38\u8981\u5beb\u4e00\u4e9b B2B \u7684\u5f8c\u53f0 (Dashboard)\uff0c",(0,i.jsx)(n.a,{href:"https://mui.com/material-ui/",children:"Material UI"})," \u7b97\u662f\u6211\u6700\u5e38\u4f7f\u7528\u7684 React \u5957\u4ef6\u4e4b\u4e00\uff0c\u53ef\u4ee5\u5feb\u901f\u642d\u5efa\u51fa\u6709\u6a21\u6709\u6a23\u7684\u7db2\u9801\uff0c\u4f5c\u7528\u8ddf ",(0,i.jsx)(n.a,{href:"https://getbootstrap.com/docs/5.2/getting-started/introduction/",children:"Bootstrap"})," \u5176\u5be6\u5dee\u4e0d\u591a\u3002\u53ea\u662f\u5b83\u5167\u7f6e\u4e86\u4e00\u5957\u8a2d\u8a08\u7cfb\u7d71 (Design System)\uff0c\u5c0d\u65bc\u6c92\u6709\u5f15\u5165 Design System \u7684\u5c08\u6848\u4f86\u8aaa\uff0c\u53cd\u800c\u8981\u70ba\u4e86\u90a3\u4e9b\u7f3a\u4e4f\u4e00\u81f4\u6027\u7684\u5ba2\u88fd\u5316 style \u53bb\u8986\u84cb\u6389\u539f\u672c\u7684\u8a2d\u8a08\u800c\u82b1\u8cbb\u5f88\u591a\u5fc3\u529b\u3002\u4e26\u4e14\u5c0d\u65bc\u500b\u4eba\u4f7f\u7528\u7684\u5c0f\u5c08\u6848\u4f86\u8aaa\u53c8\u7a0d\u5acc\u7b28\u91cd\u4e86\u4e00\u9ede\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u76f4\u5230\u524d\u4e00\u9663\u5b50\u6ce8\u610f\u5230\u9019\u500b\u5957\u4ef6\u51fa\u4e86\u4e00\u500b\u884d\u751f\u5957\u4ef6 ",(0,i.jsx)(n.a,{href:"https://mui.com/joy-ui/getting-started/",children:"Joy UI"}),"\uff0c\u5b83\u7684\u6240\u6709\u7d44\u4ef6\u8207 Material UI \u5e7e\u4e4e\u662f\u4e00\u5c0d\u4e00\u5c0d\u61c9\u7684\uff0c\u53ea\u662f\u5c11\u4e86 ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Material_Design",children:"Material Design"})," \u7684\u90e8\u4efd\u3002\u770b\u4e0a\u53bb\u4e5f\u9084\u7b97\u9806\u773c\uff0c\u65bc\u662f\u4fbf\u8d81\u8457\u9019\u500b\u6a5f\u6703\u4f86\u7528\u7528\u770b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u65bc\u662f\u5728\u5b8c\u6210\u4e86\u904a\u6232\u672c\u9ad4\u4e4b\u5f8c\uff0c\u4fbf\u7528\u9019\u500b\u5957\u4ef6\u65b0\u589e\u4e86\u4e00\u4e9b UI\uff0c\u5305\u542b\uff1a\u73a9\u5bb6\u5217\u8868\u3001\u8a18\u5206\u677f\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5c0f\u63d2\u66f2",children:"\u5c0f\u63d2\u66f2"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u70ba\u8981\u91cd\u69cb\u6210 ECS \u67b6\u69cb\u7684\u95dc\u4fc2\uff0c\u6240\u6709\u7684\u5be6\u4f5c\u6211\u90fd\u5fc5\u9808\u9010\u884c\u95b1\u8b80\u4e86\u89e3\u5176\u610f\u7fa9\u4e4b\u5f8c\u624d\u80fd\u5c07\u908f\u8f2f\u5f9e class \u5167\u62bd\u51fa\u7136\u5f8c\u4e1f\u5230\u7279\u5b9a\u7684 System \u53bb\uff0c\u4e5f\u56e0\u6b64\u8b93\u6211\u6709\u4e86\u610f\u5916\u6536\u7a6b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5e7e\u5e74\u524d (2020)\uff0c\u6211\u66fe\u7d93\u6539\u5beb\u4e86\u540c\u4e00\u500b\u5c08\u6848\uff0c\u79fb\u9664\u4e86\u73a9\u5bb6\u3001\u8b93 Bot \u5206\u6210\u5169\u968a\u4e92\u6bc6\uff0c\u4f46\u662f\u6210\u6548\u4e0d\u4f73\uff0c\u8dd1\u4e86 300 \u591a\u4ee3\u4f9d\u7136\u8822\u8822\u7684\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u91cd\u69cb\u7684\u904e\u7a0b\u6211\u767c\u73fe\u4e86\u6709\u9019\u9ebc\u4e00\u6bb5\u7a0b\u5f0f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"  private selectParent(queries: IQueries) {\n    let total = 0;\n\n    for (const bot of queries.botPlayer) {\n      total += bot.statistics.fitness;\n    }\n\n    let prob = Math.random() * total;\n\n    for (const bot of queries.botPlayer) {\n      if (prob < bot.statistics.fitness) {\n        return bot;\n      }\n\n      prob -= bot.statistics.fitness;\n    }\n\n    return null;\n  }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u539f\u4f5c\u8005\u60f3\u7528\u52a0\u6b0a\u62bd\u7c64\u7684\u65b9\u5f0f\u62bd\u51fa AI \u9032\u884c\u7e41\u6b96\uff0c\u5176\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"fitness"})," \u662f\u5206\u6578\u7684\u610f\u601d\uff0c\u4e5f\u5c31\u662f\u9019\u88e1\u7684\u6b0a\u91cd\u503c\u3002\u7136\u800c\u9019\u500b\u5be6\u4f5c\u6703\u9020\u6210\u4e00\u500b AI \u53ea\u8981\u6709\u4e00\u56de\u5408\u8868\u73fe\u4e0d\u597d\u62ff\u4e86 0 \u5206\uff0c\u5b83\u88ab\u5237\u6389\u6a5f\u7387\u6703\u9054\u5230 100%\u3002\u4e26\u4e14\u53ea\u8981\u6709\u4e00\u56de\u5408\u5927\u5bb6\u904b\u6c23\u4e0d\u597d\u90fd\u62ff\u4e86 0 \u5206\uff0c\u5c31\u6703\u6574\u4ee3\u88ab\u5237\u6389\uff0c\u6f14\u7b97\u6cd5\u6703\u76f4\u63a5 Random \u4e00\u7d44 0 \u7d93\u9a57\u7684\u985e\u795e\u7d93\u7db2\u8def\u4f86\u7e41\u6b96\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u6b64\u5728\u4e0d\u8003\u616e\u8a55\u5206\u6a19\u6e96\u7684\u6578\u5b78\u6a21\u578b\u5230\u5e95\u5408\u7406\u4e0d\u5408\u7406\u7684\u524d\u63d0\u4e0b\uff0cAI \u88ab\u91cd\u7f6e\u7684\u6a5f\u7387\u5176\u5be6\u5f88\u9ad8\uff0c\u9019\u4e5f\u89e3\u91cb\u4e86\u70ba\u4ec0\u9ebc\u6211\u4e4b\u524d\u8dd1\u4e86 300 \u591a\u4ee3 Bot \u4f9d\u7136\u8822\u8822\u7684\u539f\u56e0\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6536\u5b98-yose-\u30e8\u30bb",children:"\u6536\u5b98 (Yose, \u30e8\u30bb)"}),"\n",(0,i.jsx)(n.p,{children:"\u91cd\u69cb\u904e\u7a0b\u5176\u5be6\u8b93\u6211\u5c0d\u9019\u500b\u5c08\u6848\u7522\u751f\u4e86\u4e0d\u5c11\u984d\u5916\u7684\u60f3\u50cf\uff0c\u6bd4\u5982\u8aaa\uff1a\u5229\u7528 ECS \u7684\u7279\u6027\uff0c\u6211\u5176\u5be6\u53ef\u4ee5\u628a\u7576\u524d\u904a\u6232\u5e40\u7684\u6240\u6709\u8cc7\u6599 dump \u51fa\u4f86\uff0c\u4e4b\u5f8c\u91cd\u958b\u7db2\u9801\u518d\u628a\u8cc7\u6599\u5012\u56de\u53bb\u7406\u8ad6\u4e0a\u53ef\u4ee5\u5f88\u8f15\u6613\u7684\u5be6\u73fe\u300c\u904a\u6232\u8b80\u64cb\u300d\u7684\u529f\u80fd\uff0c\u7562\u7adf\u95dc\u65bc\u904a\u6232\u7684\u6240\u6709\u72c0\u614b\u90fd\u585e\u5728\u4e00\u500b\u7531 Entity \u586b\u5145\u7684 Array \u88e1\u9762\uff1b\u53c8\u6216\u662f\u5beb\u4e00\u500b\u8996\u89ba\u5316\u7684\u7d44\u4ef6\u5448\u73fe AI \u7576\u524d\u985e\u795e\u7d93\u7db2\u8def\u7684\u6fc0\u767c\u72c0\u614b\uff1b\u751a\u81f3\u662f\u88fd\u4f5c\u53e6\u4e00\u500b\u6a21\u5f0f\u5be6\u73fe\u6211\u66fe\u7d93\u5be6\u73fe\u904e\u5f97 Zero-player game\uff0c\u7406\u8ad6\u4e0a\u53ea\u8981\u7f6e\u63db System \u5c31\u80fd\u8f15\u6613\u5be6\u73fe\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u800c\u6211\u5176\u5be6\u5c0d\u9019\u500b\u5c08\u6848\u7684\u5b9a\u4f4d\u6709\u7acb\u4e0b\u4e00\u500b\u660e\u78ba\u7684\u76ee\u6a19\uff1a"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u4ee5 ECS \u5be6\u73fe\u539f\u5c08\u6848\u7684\u6240\u6709\u6216\u5927\u90e8\u4efd\u6a5f\u80fd\uff0c\u85c9\u6b64\u7d2f\u7a4d\u4f7f\u7528 Miniplex \u7684\u7d93\u9a57"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u7684\u5df2\u7d93\u9054\u6210\uff0c\u8a72\u6536\u5b98\u4e86\uff0c\u65bc\u662f\u6211\u85c9\u8457\u9019\u500b\u661f\u671f\u516d (2023-09-23) \u9032\u884c\u6700\u5f8c\u6253\u78e8\uff0c\u8b93\u5b83\u81f3\u5c11\u770b\u8d77\u4f86\u6709\u6a21\u6709\u6a23\uff0c\u7136\u5f8c\u628a\u539f\u672c\u5206\u6563\u5728\u5169\u500b repo \u7684 commit \u7528 subtree \u548c rebase \u6574\u7406\u5230 fork \u7684 repo \u53bb\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Demo","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://flyskypie.github.io/aimAndShoot/",children:"https://flyskypie.github.io/aimAndShoot/"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Source Code","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/FlySkyPie/aimAndShoot",children:"https://github.com/FlySkyPie/aimAndShoot"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-miniplex-entity-type-b6b5a5",children:["\n",(0,i.jsxs)(n.p,{children:["Does Entity need to know all possible components?. Retrieved 2023-09-24, from ",(0,i.jsx)(n.a,{href:"https://github.com/hmans/miniplex/discussions/295",children:"https://github.com/hmans/miniplex/discussions/295"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-miniplex-entity-type-b6b5a5","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3532:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/00_hero-e6a285351e1adeec8573e4484429069c.webp"},3218:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/01_ecs-libs-ff9c1ec0cb14d9a23114b45e93215095.webp"},8717:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(959);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);