"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[4300],{9613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||h[c]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7234:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(8957),r=(a(9496),a(9613));const i={slug:"2023-01-17_a-journey-about-2D-skeletal-animation-of-runtime",authors:["weiji"],tags:["development note","The Key of Huanche","Gear Redolence","2d animation","skeletal-animation","DragonBones"]},o="\u4e00\u5834\u95dc\u65bc 2D Skeletal animation \u52d5\u756b\u7684 Web Runtime \u7684\u65c5\u7a0b",l={permalink:"/blog/2023-01-17_a-journey-about-2D-skeletal-animation-of-runtime",source:"@site/blog/2023-01-17_a-journey-about-2D-skeletal-animation-of-runtime/index.md",title:"\u4e00\u5834\u95dc\u65bc 2D Skeletal animation \u52d5\u756b\u7684 Web Runtime \u7684\u65c5\u7a0b",description:"\u524d\u60c5\u63d0\u8981",date:"2023-01-17T00:00:00.000Z",formattedDate:"January 17, 2023",tags:[{label:"development note",permalink:"/blog/tags/development-note"},{label:"The Key of Huanche",permalink:"/blog/tags/the-key-of-huanche"},{label:"Gear Redolence",permalink:"/blog/tags/gear-redolence"},{label:"2d animation",permalink:"/blog/tags/2-d-animation"},{label:"skeletal-animation",permalink:"/blog/tags/skeletal-animation"},{label:"DragonBones",permalink:"/blog/tags/dragon-bones"}],readingTime:8.905,truncated:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2023-01-17_a-journey-about-2D-skeletal-animation-of-runtime",authors:["weiji"],tags:["development note","The Key of Huanche","Gear Redolence","2d animation","skeletal-animation","DragonBones"]},prevItem:{title:"Electron \u5b78\u7fd2\u7b46\u8a18 - \u6982\u6558",permalink:"/blog/2023-04-01_electron_learning_note_intro"},nextItem:{title:"\u5e95\u706b\u7684\u82ac\u82b3 - \u5c08\u6848\u8d77\u6e90",permalink:"/blog/2023-01-04_origin-of-gear-redolence"}},p={authorsImageUrls:[void 0]},s=[{value:"\u524d\u60c5\u63d0\u8981",id:"\u524d\u60c5\u63d0\u8981",level:2},{value:"<code>neko-gg/gfl-combat-simulator</code>",id:"neko-gggfl-combat-simulator",level:2},{value:"2D \u9aa8\u67b6\u52d5\u756b",id:"2d-\u9aa8\u67b6\u52d5\u756b",level:2},{value:"Spine",id:"spine",level:3},{value:"\u66ff\u4ee3\u65b9\u6848",id:"\u66ff\u4ee3\u65b9\u6848",level:3},{value:"DragonBones",id:"dragonbones",level:3},{value:"DragonBonesJS \u91cd\u69cb",id:"dragonbonesjs-\u91cd\u69cb",level:2},{value:"Three.js Runtime \u91cd\u69cb",id:"threejs-runtime-\u91cd\u69cb",level:3},{value:"\u91cd\u69cb\u6210\u679c",id:"\u91cd\u69cb\u6210\u679c",level:3},{value:"Three.js Chibi Game Sample",id:"threejs-chibi-game-sample",level:2},{value:"\u8a3b\u89e3",id:"\u8a3b\u89e3",level:2},{value:"Sprite \u9650\u5236",id:"sprite-\u9650\u5236",level:3},{value:"Spine \u6388\u6b0a",id:"spine-\u6388\u6b0a",level:3}],m={toc:s},u="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u60c5\u63d0\u8981"},"\u524d\u60c5\u63d0\u8981"),(0,r.kt)("p",null,"\u5982\u679c\u5c0d\u6211\u7684 Side Project \u300c\u5e95\u706b\u7684\u82ac\u82b3\u300d\u4e0d\u6e05\u695a\u7684\u8b80\u8005\u53ef\u80fd\u9700\u8981\u5148\u95b1\u8b80",(0,r.kt)("a",{parentName:"p",href:"/blog/2023-01-04_origin-of-gear-redolence"},"\u5e95\u706b\u7684\u82ac\u82b3 - \u5c08\u6848\u8d77\u6e90"),"\u624d\u80fd\u7406\u89e3\u9019\u5834\u65c5\u7a0b\u662f\u600e\u9ebc\u958b\u59cb\u7684\u3002\u800c\u6700\u8fd1 (2022-12-19) \u5728\u901b Github \u7684\u6642\u5019\u6643\u5230\u4e00\u500b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neko-gg/gfl-combat-simulator"},"repo"),"\uff0c\u5b83\u662f",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Girls%27_Frontline"},"\u5c11\u5973\u524d\u7dda"),"\u9019\u6b3e\u904a\u6232\u7684\u6578\u503c\u6a21\u64ec\u5668\uff0c\u5f80\u7a0b\u5f0f\u8a9e\u8a00\u69cb\u6210\u4e00\u770b\u662f\u7528 Typescript \u5beb\u7684\u7acb\u523b\u52fe\u8d77\u4e86\u6211\u7684\u8208\u8da3\u3002"),(0,r.kt)("h2",{id:"neko-gggfl-combat-simulator"},(0,r.kt)("inlineCode",{parentName:"h2"},"neko-gg/gfl-combat-simulator")),(0,r.kt)("p",null,"2022-12-19 \u5728 Github \u4e0a\u9592\u901b\u7684\u6642\u5019\uff0c\u770b\u5230\u4e00\u500b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neko-gg/gfl-combat-simulator"},"repo"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5594\u5566\u5566\uff0c\u9019\u4e0d\u662f Typescript \u55ce\uff1f\n\u5594\u5566\u5566\uff0c\u9019\u4e0d\u662f React \u55ce\uff1f\n\u662f\u6211\u7684\u4e3b\u5834\u5462 = =+")),(0,r.kt)("p",null,"\u65bc\u662f\u5c31 ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," \u4e0b\u4f86\u7814\u7a76\u7814\u7a76\u3002"),(0,r.kt)("p",null,"\u5f8c\u4f86\uff08\u7d04 2022-12-20\uff09\u7167\u8457 ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," \u7684\u6307\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn update-resources\nyarn update-assets\n")),(0,r.kt)("p",null,"\u627e\u5230\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neko-gg/gfl-combat-simulator/blob/senpai/src/app/data/ResourcesUpdater.ts"},"ResourcesUpdater")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neko-gg/gfl-combat-simulator/blob/senpai/src/app/data/AssetsUpdater.ts"},"AssetsUpdater")," \u9019\u5169\u500b\u7a0b\u5f0f\uff0c\u767c\u73fe\u5b83\u628a\u904a\u6232\u7d20\u6750\u653e\u5728\u53e6\u5916\u4e00\u500b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/36base/girlsfrontline-resources"},"repo"),"\u3002\u4ee5\u53ca\u6703\u5f9e\u904a\u6232\u5b98\u65b9\u7684 cdn \u4e0b\u8f09\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"ResData.ab")," \u7684\u6a94\u6848\uff0c\u56e0\u70ba\u4e0d\u77e5\u9053\u662f\u4ec0\u9ebc\u6a94\u6848\u985e\u578b\uff0c\u5c31\u7528 Hex \u700f\u89bd\u5668\u6253\u958b\u4f86\u770b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8168).Z,width:"355",height:"260"})),(0,r.kt)("p",null,"\u554a\u5566\u5566\uff0c\u539f\u4f86\u662f Unity ResData Bundle\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u5f9e ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourcesUpdater")," \u770b\u5230\u5b83\u547c\u53eb\u4e86\u4f86\u81ea ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neko-gg/gfl-combat-simulator/blob/senpai/src/app/data/ChibiUpdater.ts"},"ChibiUpdater.ts")," \u7684\u65b9\u6cd5\uff0c\u7a0d\u5fae\u7814\u7a76\u4e00\u4e0b\u5167\u5bb9\u767c\u73fe\u5b83\u4f7f\u7528 Puppeteer \u6253\u958b\u4e00\u500b",(0,r.kt)("a",{parentName:"p",href:"https://naganeko.github.io/spine-gif/"},"\u7db2\u7ad9"),"\u4e26\u505a\u4e86\u67d0\u4e9b\u4e8b\uff0c\u4e0d\u904e\u56e0\u70ba\u7a0b\u5f0f\u78bc\u5df2\u7d93\u6709\u9ede\u904e\u6642\u4e86\uff0c\u7db2\u7ad9\u5df2\u7d93\u88ab\u79fb\u5230",(0,r.kt)("a",{parentName:"p",href:"https://naganeko.pages.dev"},"\u5176\u4ed6\u5730\u65b9"),"\uff0cDOM \u7684\u64cd\u4f5c\u4e5f\u548c\u539f\u672c\u8173\u672c\u5167\u7684\u65b9\u5f0f\u6709\u9ede\u843d\u5dee\u3002\u7814\u7a76\u4e86\u5b83\u4f7f\u7528 Puppeteer \u7684\u65b9\u5f0f\uff0c\u770b\u5f97\u51fa\u4f86\u76ee\u7684\u662f\u53d6\u5f97\u4e00\u5f35 Chibi \u7ad9\u7acb\u7684\u5716\u7247\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u539f\u59cb\u7684 Chibi \uff08\u7a0b\u5f0f\u5167\u5c0d\u4eba\u5076\u7684\u7a31\u547c\uff09\u6a94\u6848\u662f\u5c07\u4eba\u5076\u62c6\u4ef6\uff0c\u4e26\u900f\u904e\u7d44\u614b\u6a94\u7d44\u88dd\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"naganeko \u7684\u7db2\u7ad9\u80fd\u5920\u4e0a\u50b3 Spine \u6a94\u6848\uff0c\u4e26\u64ad\u653e\u52d5\u756b\u3002"),(0,r.kt)("li",{parentName:"ul"},"naganeko \u7684\u7db2\u7ad9\u4e5f\u80fd\u4e0b\u8f09\u7d44\u88dd\u5f8c\u7684\u5716\u6a94\u3002")),(0,r.kt)("p",null,"\u8a66\u8457\u9006\u5411\u5de5\u7a0b naganeko \u7684\u7db2\u7ad9\uff0c\u767c\u73fe\u5b83\u61c9\u8a72\u662f\u4f7f\u7528\u4e86 Spine \u7684 Runtime\u3002"),(0,r.kt)("h2",{id:"2d-\u9aa8\u67b6\u52d5\u756b"},"2D \u9aa8\u67b6\u52d5\u756b"),(0,r.kt)("p",null,"\u5728 3D \u6a21\u578b/\u52d5\u756b\u4e2d\uff0c\u6703\u4f7f\u7528\u9aa8\u67b6 (Armature) \u7d81\u5b9a\u6a21\u578b\u7bc0\u9ede\uff0c\u4e26\u900f\u904e\u6b0a\u91cd\u3001\u95dc\u9375\u5f71\u683c\u7b49\u65b9\u5f0f\u8b93\u6a21\u578b\u57f7\u884c\u52d5\u756b\u3002"),(0,r.kt)("p",null,"\u900f\u904e\u628a\u6a21\u578b\u58d3\u6241\uff0c\u5c07\u9019\u7a2e\u6280\u8853\u61c9\u7528\u5728 2D \u5834\u666f\u5c31\u662f 2D \u9aa8\u67b6\u52d5\u756b\uff0c\u53ef\u4ee5\u89e3\u6c7a\u50b3\u7d71 Sprite \u7684\u4e00\u4e9b",(0,r.kt)("a",{parentName:"p",href:"#sprite-%E9%99%90%E5%88%B6"},"\u9650\u5236"),"\u3002\u53e6\u5916\u9084\u6709\u4e09\u6e32\u4e8c\u4e4b\u985e\u5728\u904a\u6232\u958b\u767c\u4e0a\u5e38\u898b\u7684\u624b\u6bb5\uff0c\u4e0d\u904e\u4e0d\u5728\u672c\u6b21\u984c\u76ee\u7684\u8a0e\u8ad6\u7bc4\u570d\u5167\u3002"),(0,r.kt)("h3",{id:"spine"},"Spine"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://esotericsoftware.com/"},"Spine")," \u662f\u76ee\u524d\u6975\u70ba\u666e\u53ca\u7684 2D \u9aa8\u67b6\u52d5\u756b tool chain\u3002\u7528\u5de5\u696d\u5efa\u6a21\u6bd4\u55bb\u7684\u8a71\u5c31\u50cf SolidWork\uff0c\u6216\u662f\u7f8e\u8853\u7522\u696d\u4e2d\u7684 PhotoShop \u4ee5\u53ca Illustrator\u3002\u539f\u56e0\u5728\u65bc\u5176\u61c9\u7528\u7aef\u6210\u529f\u7684\u5e03\u5c40\uff0c\u5305\u542b Unity3D, \u53c8\u6216\u662f\u7db2\u9801\u904a\u6232\u958b\u767c Three.js, Phaser, PixiJS...\u4e4b\u985e\u7684\u57f7\u884c\u74b0\u5883\uff0c\u6709\u8457\u975e\u5e38\u5ee3\u6cdb\u7684 ",(0,r.kt)("a",{parentName:"p",href:"http://en.esotericsoftware.com/spine-runtimes"},"Runtime")," \u652f\u63f4\u3002\u63db\u53e5\u8a71\u4f7f\u7528\u5b83\u7684\u7522\u54c1\uff0c\u4f48\u7f72\u76ee\u6a19\u7684\u9078\u64c7\u5341\u5206\u591a\u5143\u3002"),(0,r.kt)("p",null,"\u7136\u800c\u9019\u500b\u683c\u5f0f\u7d42\u7a76\u662f\u5546\u696d\u7522\u54c1\uff0c\u7de8\u8f2f\u5668\u672c\u8eab\u9700\u8981\u4ed8\u8cbb\uff0c\u4f7f\u7528\u8005\uff08\u5982\uff1a\u904a\u6232\u958b\u767c\u8005\uff09\u4e5f\u9700\u8981\u8cfc\u8cb7",(0,r.kt)("a",{parentName:"p",href:"#spine-%E6%8E%88%E6%AC%8A"},"\u6388\u6b0a"),"\u3002\u5373\u4fbf\u6709 Runtime \u7684\u539f\u59cb\u78bc\uff0c\u5176\u6388\u6b0a\u7bc4\u570d\u4ecd\u4e0d\u7b97\u958b\u6e90\u7684\u7bc4\u7587\uff0c\u5c0d\u6211\u800c\u8a00\u5c0b\u627e\u66ff\u4ee3\u65b9\u6848\u5c31\u5f88\u91cd\u8981\u4e86\uff0c\u56e0\u70ba\u6211\u53ea\u662f\u60f3\u5beb\u5beb side project\u3002"),(0,r.kt)("h3",{id:"\u66ff\u4ee3\u65b9\u6848"},"\u66ff\u4ee3\u65b9\u6848"),(0,r.kt)("p",null,"\u8207 Spine \u985e\u4f3c\u7684\u7522\u54c1\u9084\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://creature.kestrelmoon.com/"},"Creature Animation"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://rive.app/"},"Rive")," \u4e4b\u985e\u7684\uff0c\u4e0d\u904e\u5b83\u5011\u8ddf Spine \u4e00\u6a23\u90fd\u6709\u4e00\u80a1\u5546\u696d\u5473\uff0c\u81ea\u7136\u5c31\u6392\u9664\u5728\u6211\u7684\u9078\u9805\u4e4b\u5916\u4e86\u3002"),(0,r.kt)("p",null,"\u5f80\u958b\u6e90\u7684\u751f\u614b\u7cfb\u671b\u53bb\uff0c\u5247\u6709 Blender \u7684\u751f\u614b\u7cfb\u5167\u6709\u500b\u540d\u70ba ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ndee85/coa_tools"},"COA Tools")," \u7684\u5de5\u5177\u80fd\u5920\u88fd\u4f5c 2D \u52d5\u756b\u3002\u6216\u662f Godot \u4f5c\u70ba\u958b\u6e90\u7684\u904a\u6232\u5f15\u64ce\u4e5f\u6709\u5167\u5efa\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.godotengine.org/en/stable/tutorials/animation/cutout_animation.html"},"2D \u9aa8\u67b6\u52d5\u756b\u7cfb\u7d71"),"\u3002"),(0,r.kt)("p",null,"\u53ea\u662f\u6211\u61f6\u5f97\u81ea\u5df1\u91cd\u982d\u7d81\u9aa8\u67b6\u8ddf\u5237\u6b0a\u91cd\uff0c\u80fd\u5920\u76f4\u63a5\u7528",(0,r.kt)("del",{parentName:"p"},"\u64bf\u5230"),"\u7684\u5c11\u5973\u524d\u7dda\u6a94\u6848\u8f49\u6a94\u662f\u5728\u597d\u4e0d\u904e\u4e86\u3002"),(0,r.kt)("h3",{id:"dragonbones"},"DragonBones"),(0,r.kt)("p",null,"\u6700\u5f8c (2022-12-22) \u6c7a\u5b9a\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.egret.com/dragonbones/en"},"DragonBones")," \u7684\u683c\u5f0f\uff0c\u96d6\u7136\u7de8\u8f2f\u8edf\u9ad4\u672c\u8eab\u6c92\u958b\u6e90\u800c\u4e14\u53ea\u80fd\u5728 Windows \u57f7\u884c\uff0c\u4f46\u662f\u81f3\u5c11\u662f\u514d\u8cbb\u7684\u800c\u4e14\u80fd\u5920\u7528 Wine \u8dd1\u8d77\u4f86\u3002\u9019\u500b\u5de5\u5177\u80cc\u5f8c\u7684\u4e2d\u570b\u516c\u53f8\u7684 Tech Stack \u7b97\u662f\u5f9e Flash \u9577\u51fa\u4f86\u7684\uff0c\u5f8c\u4f86\u5f80 Javascript \u8f49\u578b\u3002\u56e0\u6b64\u5b83\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DragonBones/DragonBonesJS"},"runtime")," \u652f\u63f4\u4e0d\u5c11\u8af8\u5982 Three.js Pixi, Phaser \u7b49\u77e5\u540d\u7684 Javascript \u7684\u5957\u4ef6\u3002"),(0,r.kt)("p",null,"\u6700\u91cd\u8981\u7684\u662f\uff0c\u5b83\u80fd\u5920\u532f\u5165 Spine \u683c\u5f0f\u7684\u6a94\u6848\uff0c\u4e26\u8f38\u51fa\u6210 DragonBones \u7684\u683c\u5f0f\u3002",(0,r.kt)("del",{parentName:"p"},"\u9019\u6a23\u6211\u5c31\u53ef\u4ee5\u76f4\u63a5\u64bf Chibi \u7684\u6a94\u6848\u4f86\u7528\u56c9\uff5e"),"\u9084\u6709\u5176\u4ed6\u8003\u91cf\u5c31\u662f\uff0c\u5982\u679c\u7de8\u8f2f\u5668\u4e5f\u662f\u57fa\u65bc Javascript \u7684\u8a71\uff0c\u65e5\u5f8c\u9006\u5411\u5de5\u7a0b\u8d77\u4f86\u6bd4\u8f03\u5bb9\u6613\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2080).Z,width:"540",height:"360"})),(0,r.kt)("h2",{id:"dragonbonesjs-\u91cd\u69cb"},"DragonBonesJS \u91cd\u69cb"),(0,r.kt)("p",null,"\u7136\u800c DragonBonesJS \u7684 Javascript Runtime \u81ea 2020 \u5c31\u6c92\u6709\u7dad\u8b77\u4e86\uff0c\u800c\u4e14\u4e26\u4e0d\u652f\u63f4 ES6 \u7684\u6a21\u7d44\u8f09\u5165\u65b9\u5f0f\u3002\u5f9e\u7a0b\u5f0f\u78bc\u770b\u5f97\u51fa\u4f86\u5b83\u4f7f\u7528\u7684\u8a2d\u8a08\u662f\u6709\u4e00\u500b\u8655\u7406\u4e8b\u52d9\u908f\u8f2f\u7684\u6838\u5fc3\uff0c\u4ee5\u53ca\u91dd\u5c0d\u5404\u7a2e\u4e0d\u540c\u5957\u4ef6\u5be6\u4f5c\u7684 Runtime \u3002\u56e0\u6b64\u5373\u4fbf\u6211\u91cd\u69cb\u4e86\u6838\u5fc3\uff0c\u4e5f\u7121\u6cd5\u76f4\u63a5\u6e2c\u8a66\uff0c\u5fc5\u9808\u9078\u7528\u4e00\u500b Runtime \u4f5c\u70ba\u6e2c\u8a66\u7528\u9014\u3002"),(0,r.kt)("p",null,"\u539f\u672c\u652f\u63f4\u7684 Runtime \u4e2d\uff0cThree.js \u662f\u6211\u7684\u76ee\u6a19\uff0c\u4f46\u662f\u6c92\u6709\u5145\u8db3\u7684 Demo code \u80fd\u5920\u6e2c\u8a66\u91cd\u69cb\uff0c\u7576\u4e2d\u7684 Phaser \u662f\u6211\u6709\u63a5\u89f8\u904e\u5f97\u904a\u6232\u5f15\u64ce\uff0c\u4f46\u662f\u5b83\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DragonBones/DragonBonesJS/tree/master/Phaser/3.x/src/dragonBones/phaser"},"\u5be6\u4f5c"),"\u8f03\u70ba\u8907\u96dc\uff0c\u800c PixiJS \u7684\u7248\u672c\u6211\u96d6\u7136\u6c92\u4f7f\u7528\u904e\uff0c\u4f46\u662f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DragonBones/DragonBonesJS/tree/master/Pixi/4.x/src/dragonBones/pixi"},"\u5be6\u4f5c"),"\u6bd4\u8f03\u7c21\u55ae\uff0c\u53ea\u6709 4 \u500b\u6a94\u6848\uff0c\u65bc\u662f\u91cd\u69cb\u7684\u4efb\u52d9\u5c31\u62c6\u6210\u4e86 3 \u500b\u90e8\u4efd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u771f\u6b63\u8655\u7406\u52d5\u756b\u908f\u8f2f\u7684\u90e8\u4efd"))),(0,r.kt)("li",{parentName:"ul"},"PixiJS Runetime",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u662f\u70ba\u4e86\u5b8c\u6574\u7684 Demo \u7bc4\u4f8b\uff0c\u597d\u6e2c\u8a66 Core \u7684\u91cd\u69cb\u904b\u4f5c\u6b63\u4e0d\u6b63\u5e38"))),(0,r.kt)("li",{parentName:"ul"},"Three.js Runtime",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u6a19\uff0c\u56e0\u70ba\u6211\u60f3\u628a Chibi \u4e1f\u9032 3D \u7684\u7a7a\u9593\u4e2d")))),(0,r.kt)("p",null,"Core \u8ddf PixiJS Runtime \u7684\u91cd\u69cb\u904e\u7a0b\u6c92\u4ec0\u9ebc\u597d\u7d00\u9304\u7684\uff0c\u5c31\u662f\u8981\u8f49\u63db\u6210 ES6 \u7684\u5beb\u6cd5\u8ddf\u89e3\u6c7a ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig")," \u8a2d\u5b9a\u4e0d\u540c\u7684\u554f\u984c\u3002Three.js Runtime \u7684\u91cd\u69cb\u904e\u7a0b\u5012\u662f\u554f\u984c\u4e0d\u5c11\u3002"),(0,r.kt)("h3",{id:"threejs-runtime-\u91cd\u69cb"},"Three.js Runtime \u91cd\u69cb"),(0,r.kt)("p",null,"DragonBones \u63d0\u4f9b\u7684 Demo \u4e2d\uff0c\u53ea\u6709\u7dda\u6027\u8b8a\u63db\u7684\u90e8\u4efd\uff08Translate, Rotation, Scale\uff09\uff0c\u4e26\u6c92\u6709\u5305\u542b\u7db2\u683c\u8b8a\u5f62\uff0c\u7576\u6211\u532f\u5165 Chibi \u7684\u6a94\u6848\u6642\uff0c\u5f97\u5230\u4e86\u7834\u5716\u7684\u7d50\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1643).Z,width:"252",height:"228"})),(0,r.kt)("p",null,"\u6176\u5e78\u7684\u662f\u5728 issues \u64bf\u5230\u91ce\u751f\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DragonBones/DragonBonesJS/issues/133"},"patch"),"\u3002"),(0,r.kt)("p",null,"\u63a5\u8457\u8981\u8655\u7406\u7684\u8981\u4ef6\u662f\u5347\u7d1a Three.js \u7684\u7248\u672c\uff0cDragonBones \u907a\u7559\u7684\u7a0b\u5f0f\u78bc\u50c5\u652f\u63f4\u5230 0.89.0\uff0c\u800c\u76ee\u524d\u7248\u672c\u662f 0.148.0\u3002\u5347\u7d1a\u7684\u904e\u7a0b\u9047\u5230\u4e00\u500b\u554f\u984c\u662f Three.js \u5728 0.125.0 \u7684\u6642\u5019\u68c4\u7528\u4e86\u4e00\u500b\u540d\u70ba Geometry \u7684\u7269\u4ef6\uff0c\u800c\u5728 DragonBones \u7684\u5be6\u4f5c\u4e2d\u662f\u4ef0\u8cf4\u9019\u500b\u7269\u4ef6\u7684\uff0c\u5373\u4f7f\u53ef\u4ee5\u900f\u904e ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.threejs.org/t/three-geometry-will-be-removed-from-core-with-r125/22401"},"Legacy Code")," \u62ff\u4f86\u4f7f\u7528\uff0c\u537b\u6703\u6709\u6027\u80fd\u554f\u984c\u3002"),(0,r.kt)("h3",{id:"\u91cd\u69cb\u6210\u679c"},"\u91cd\u69cb\u6210\u679c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Runtime Demo",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://flyskypie.github.io/dragonbones-pixi/demo/"},"https://flyskypie.github.io/dragonbones-pixi/demo/")))),(0,r.kt)("li",{parentName:"ul"},"Github Repo",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FlySkyPie/dragonbones-js"},"https://github.com/FlySkyPie/dragonbones-js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FlySkyPie/dragonbones-pixi"},"https://github.com/FlySkyPie/dragonbones-pixi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FlySkyPie/dragonbones-threejs"},"https://github.com/FlySkyPie/dragonbones-threejs")))),(0,r.kt)("li",{parentName:"ul"},"NPM Package",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@flyskypie/dragonbones-js"},"https://www.npmjs.com/package/@flyskypie/dragonbones-js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@flyskypie/dragonbones-pixi"},"https://www.npmjs.com/package/@flyskypie/dragonbones-pixi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@flyskypie/dragonbones-threejs"},"https://www.npmjs.com/package/@flyskypie/dragonbones-threejs"))))),(0,r.kt)("h2",{id:"threejs-chibi-game-sample"},"Three.js Chibi Game Sample"),(0,r.kt)("p",null,"\u5c31\u53ea\u662f\u60f3\u505a\u500b\u6982\u5ff5\u9a57\u8b49\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6211\u6709\u4e00\u500b 2D \u4eba\u5076"),(0,r.kt)("li",{parentName:"ul"},"\u653e\u9032 3D \u7a7a\u9593\uff0c\u50cf\u662f",(0,r.kt)("a",{parentName:"li",href:"https://threejs.org/examples/?q=control#misc_controls_orbit"},"Three.js \u7684\u7bc4\u4f8b")),(0,r.kt)("li",{parentName:"ul"},"\u505a\u6210\u985e\u4f3c",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/xXOa4xqtnfE"},"\u5c3c\u723e\uff1a\u81ea\u52d5\u4eba\u5f62"),"\u99ed\u5ba2\u5c0f\u904a\u6232\u7684\u98a8\u683c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/lVCbXohxvPQ",title:"Three.js Chibi Animation Shoot Game Prototype"},(0,r.kt)("img",{parentName:"a",src:"http://img.youtube.com/vi/lVCbXohxvPQ/0.jpg",alt:null}))),(0,r.kt)("h2",{id:"\u8a3b\u89e3"},"\u8a3b\u89e3"),(0,r.kt)("h3",{id:"sprite-\u9650\u5236"},"Sprite \u9650\u5236"),(0,r.kt)("p",null,"\u50b3\u7d71 Sprite \u662f\u900f\u904e\u5207\u63db\u6578\u5f35\u9ede\u9663\u5716\u9054\u5230\u8996\u89ba\u66ab\u7559\u7684\u52d5\u756b\u6548\u679c\uff0c\u9ede\u9663\u5716\u9664\u4e86\u7e6a\u88fd\u8cbb\u5de5\u4e4b\u5916\u3001\u6a94\u6848\u8f03\u5927\u9084\u6709\u5e40\u6578\u53d7\u9650\u5236\u7b49\u554f\u984c\u3002"),(0,r.kt)("p",null,"\u8207\u4e4b\u76f8\u5c0d\u7684 3D \u6a21\u578b\u662f\u7528\u9ede\u6578\u64da\u69cb\u6210\u7684\uff0c\u4e5f\u5c31\u662f\u6240\u8b02\u7684\u5411\u91cf\u5716\u6a94\u3002\u900f\u904e\u7d81\u5b9a\u9aa8\u67b6\u5c31\u91cd\u8907\u4f7f\u7528\u540c\u4e00\u5f35\u8cbc\u5716\u88fd\u4f5c\u4e0d\u540c\u7684\u52d5\u756b\u3002"),(0,r.kt)("h3",{id:"spine-\u6388\u6b0a"},"Spine \u6388\u6b0a"),(0,r.kt)("p",null,"Spine \u7684\u6388\u6b0a\u898f\u5247\u5f88\u54c6\u55e6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://zh.esotericsoftware.com/spine-editor-license#s2"},"http://zh.esotericsoftware.com/spine-editor-license#s2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/EsotericSoftware/spine-runtimes/blob/4.1/LICENSE"},"https://github.com/EsotericSoftware/spine-runtimes/blob/4.1/LICENSE"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/4.0/"},(0,r.kt)("img",{parentName:"a",src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png",alt:"\u5275\u7528 CC \u6388\u6b0a\u689d\u6b3e"})),(0,r.kt)("br",{parentName:"p"}),"\n","Wei Ji\u4ee5",(0,r.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/4.0/"},"\u5275\u7528CC \u59d3\u540d\u6a19\u793a-\u76f8\u540c\u65b9\u5f0f\u5206\u4eab 4.0 \u570b\u969b \u6388\u6b0a\u689d\u6b3e"),"\u91cb\u51fa\u3002"))}h.isMDXComponent=!0},1643:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/glitch-433919c2c301c10f480f1b177486567c.gif"},2080:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/smile-80f08926f2ee3bb5bbf8f30446881436.webp"},8168:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/unity-asset-bundle-binary-bbcfbbe578f898920ce7ab41171aa256.webp"}}]);