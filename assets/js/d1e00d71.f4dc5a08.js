"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[5243],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),k=l,d=u["".concat(o,".").concat(k)]||u[k]||m[k]||i;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4248:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const i={slug:"2022-12-03_3ds_linux_javascript_bad_apple",authors:["weiji"],tags:["learning note","3ds","javascript","quickjs","cross compilation"]},r="3DS x Linux x Javascript x Bad Apple",p={permalink:"/blog/2022-12-03_3ds_linux_javascript_bad_apple",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-12-03_3ds_linux_javascript_bad_apple/index.md",source:"@site/blog/2022-12-03_3ds_linux_javascript_bad_apple/index.md",title:"3DS x Linux x Javascript x Bad Apple",description:"\u672c\u6587\u4ee5\u6558\u8ff0\u7684\u65b9\u5f0f\u7d00\u9304\u6211\u5728\u9019\u500b\u5c08\u6848\u4e0a\u7684\u904e\u7a0b\uff0c\u4e26\u7701\u7565\u6280\u8853\u7d30\u7bc0\u3002\u82e5\u5c0d\u5be6\u4f5c\u7d30\u7bc0\u6709\u8208\u8da3\uff0c\u4ee5\u4e0b\u662f\u4ee5\u6280\u8853\u7b46\u8a18\u7684\u5f62\u5f0f\u7d00\u9304\u7684\u6587\u7ae0\uff1a",date:"2022-12-03T00:00:00.000Z",formattedDate:"December 3, 2022",tags:[{label:"learning note",permalink:"/blog/tags/learning-note"},{label:"3ds",permalink:"/blog/tags/3-ds"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"quickjs",permalink:"/blog/tags/quickjs"},{label:"cross compilation",permalink:"/blog/tags/cross-compilation"}],readingTime:11.91,truncated:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2022-12-03_3ds_linux_javascript_bad_apple",authors:["weiji"],tags:["learning note","3ds","javascript","quickjs","cross compilation"]},prevItem:{title:"Javascript x Bad Apple x Ascii \u7b46\u8a18",permalink:"/blog/2022-12-03_3ds_bad_apple_node"},nextItem:{title:"\u4ea4\u53c9\u7de8\u8b6f QuickJs \u7b46\u8a18",permalink:"/blog/2022-11-29_3ds_cross_compilation_note"}},o={authorsImageUrls:[void 0]},s=[{value:"\u524d\u60c5\u63d0\u8981",id:"\u524d\u60c5\u63d0\u8981",level:2},{value:"\u9583\u4eae\u4eae\u75c7\u5019\u7fa4\u518d\u6b21\u767c\u4f5c",id:"\u9583\u4eae\u4eae\u75c7\u5019\u7fa4\u518d\u6b21\u767c\u4f5c",level:2},{value:"\u9019\u500b Linux \u662f\u91d1\u9b5a\u8166",id:"\u9019\u500b-linux-\u662f\u91d1\u9b5a\u8166",level:2},{value:"\u7b2c\u4e00\u500b\u632b\u6298",id:"\u7b2c\u4e00\u500b\u632b\u6298",level:2},{value:"\u300cAny application that can be written in JavaScript, will eventually be written in JavaScript.\u300d",id:"any-application-that-can-be-written-in-javascript-will-eventually-be-written-in-javascript",level:2},{value:"Voila!",id:"voila",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...i}=e;return(0,l.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{property:"og:image",content:"https://i.imgur.com/FXnapxa.png"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(5462).Z,width:"432",height:"324"})),(0,l.kt)("p",null,"\u672c\u6587\u4ee5\u6558\u8ff0\u7684\u65b9\u5f0f\u7d00\u9304\u6211\u5728\u9019\u500b\u5c08\u6848\u4e0a\u7684\u904e\u7a0b\uff0c\u4e26\u7701\u7565\u6280\u8853\u7d30\u7bc0\u3002\u82e5\u5c0d\u5be6\u4f5c\u7d30\u7bc0\u6709\u8208\u8da3\uff0c\u4ee5\u4e0b\u662f\u4ee5\u6280\u8853\u7b46\u8a18\u7684\u5f62\u5f0f\u7d00\u9304\u7684\u6587\u7ae0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/blog/2022-11-25_3ds_hack_note"},"3DS \u5237\u6a5f\u7b46\u8a18")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/blog/2022-11-25_3ds_linux_note"},"3DS \u5237 Linux \u7b46\u8a18")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/blog/2022-11-29_3ds_cross_compilation_note"},"\u4ea4\u53c9\u7de8\u8b6f QuickJs \u7b46\u8a18")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/blog/2022-12-03_3ds_bad_apple_node"},"Javascript x Bad Apple x Ascii \u7b46\u8a18"))),(0,l.kt)("h2",{id:"\u524d\u60c5\u63d0\u8981"},"\u524d\u60c5\u63d0\u8981"),(0,l.kt)("p",null,"\u6700\u8fd1 (2022-11-06) \u5f9e\u5929\u4e0a\u6389\u4e0b\u4f86\u7684\u4e00\u53f0 3DS (?)"),(0,l.kt)("p",null,"\u8001\u5be6\u8aaa\u5c0d\u65bc\u4e00\u822c\u904e\u6642 N \u5e74\u7684\u6d88\u8cbb\u6027\u96fb\u5b50\u7522\u54c1\uff0c\u6211\u662f\u5b8c\u5168\u6c92\u8208\u8da3\u591a\u82b1\u6642\u9593\u53bb\u73a9\u5b83\uff0c\u6839\u64da\u4ee5\u5f80\u7684\u7d93\u9a57\uff0chack \u9019\u7a2e\u6771\u897f\u591a\u534a\u5403\u529b\u4e0d\u8a0e\u597d\uff1b\u82b1\u8cbb\u5927\u91cf\u7684\u6642\u9593\u4e5f\u53ea\u80fd\u7372\u5f97\u76f8\u5c0d\u65bc\u73fe\u4ee3\u8a2d\u5099\u5c11\u5f97\u53ef\u6190\u7684\u7b97\u529b\u3002 \u4e0d\u904e\u500b\u4eba\u5c0d\u65bc\u9019\u7a2e\u300c\u6709\u6a5f\u68b0\u8f38\u5165\u7684\u6a6b\u5f0f\u624b\u6301\u884c\u52d5\u88dd\u7f6e\u300d\u6709\u8457\u83ab\u540d\u61a7\u61ac\uff0c\u96a8\u624b\u641c\u5c0b\u770b\u770b\u5237\u6a5f\u7684\u8cc7\u6599\uff0c\u767c\u73fe\u8cc7\u6e90\u883b\u591a\u7684\uff0c\u6559\u5b78\u4e5f\u5f88\u8a73\u7d30\uff0c\u5c31\u60f3\u8457\u4f86\u5237\u5237\u770b\u3002"),(0,l.kt)("h2",{id:"\u9583\u4eae\u4eae\u75c7\u5019\u7fa4\u518d\u6b21\u767c\u4f5c"},"\u9583\u4eae\u4eae\u75c7\u5019\u7fa4\u518d\u6b21\u767c\u4f5c"),(0,l.kt)("p",null,"\u8ddf\u670b\u53cb\u8868\u793a\u60f3\u5728 3DS \u4e0a\u5237 Linux \u4e4b\u5f8c\uff0c\u300c\u5de5\u7a0b\u5e2b\u7684\u6210\u5c31\u6e05\u55ae\u300d\u7684\u8a71\u984c\u5c31\u9019\u6a23\u88ab\u6253\u958b\u4e86\uff0c\u5c0d\u8a71\u4e2d\u9664\u4e86\u63d0 \u300c\u5728\u975e\u5e38\u898b\u6216\u975e\u901a\u7528\u529f\u80fd\u96fb\u8166\u4e0a\u5b89\u88dd Linux\u300d\u9084\u63d0\u5230\u4e86\u300c\u5728\u975e\u5e38\u898b\u7684\u986f\u793a\u5668\u4e0a\u64ad\u653e Bad Apple\u300d\u3002"),(0,l.kt)("p",null,"\u904e\u5e7e\u5929 (2022-11-09)\uff0c\u6211\u4fbf\u5229\u7528\u4e0b\u73ed\u4e4b\u9918\u8a66\u8457\u5728 3DS \u4e0a\u5237 Linux\u3002\u5237\u6a5f\u7684\u7b2c\u4e00\u90e8\u5c31\u662f\u900f\u904e\u7cfb\u7d71\u6f0f\u6d1e\u5237\u5165 CFW (Custom firmware)\uff0c\u8b93 3DS \u80fd\u5920\u5f9e SD Card \u8b80\u53d6 bootloader \u958b\u6a5f\uff0c\u56e0\u70ba",(0,l.kt)("a",{parentName:"p",href:"https://3ds.hacks.guide/get-started"},"\u6559\u5b78"),"\u5f88\u8a73\u7d30\uff0c\u7167\u8457\u6b65\u9a5f\u505a\u6c92\u6709\u82b1\u592a\u591a\u6642\u9593\u5c31\u6210\u529f\u5237\u6a5f\u4e86\uff0c\u7576\u4e2d\u6709\u4e9b\u6559\u5b78\u6027\u8cea\u7684\u6b65\u9a5f\u4e5f\u8b93\u6211\u770b\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://www.gamebrew.org/wiki/Linux_for_3DS"},"3DS Linux")," \u7684\u9801\u9762\u4e4b\u5f8c\u5c31\u77e5\u9053\u5927\u6982\u8981\u505a\u4ec0\u9ebc\uff0c\u4e5f\u6210\u529f\u7684\u5728 3DS \u4e0a\u9032\u5165 Linux \u4e86\u3002"),(0,l.kt)("p",null,"\u5230\u76ee\u524d\u70ba\u6b62\u90fd\u51fa\u4e4e\u6211\u610f\u6599\u4e4b\u5916\u7684\u9806\u5229\uff0c\u65bc\u662f\u6211\u60f3\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u90fd\u6709\u4e00\u53f0\u8dd1\u8457 Linux \u7684 3DS \u4e86\uff0c\u5beb\u500b\u7a0b\u5f0f\u8b93\u5b83\u8dd1 Bad Apple \u61c9\u8a72\u4e0d\u96e3\u5427\uff1f")),(0,l.kt)("p",null,"\u63a5\u8457\u6211\u53c8\u60f3\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u80fd\u7528\u6211\u719f\u6089\u7684 Javascript \u5beb\u7a0b\u5f0f\u5c31\u597d\u4e86")),(0,l.kt)("p",null,"\u65bc\u662f\u300c\u5728 3DS \u4e0a\u8dd1 Linux \u8dd1 Javascript \u986f\u793a Bad Apple\u300d\u5c31\u8b8a\u6210\u4e00\u500b side project \u7684\u76ee\u6a19\u4e86\uff0c\u63a5\u8457\u9019\u500b side project \u5c31\u4e00\u767c\u4e0d\u53ef\u6536\u62fe\u4e86\u3002"),(0,l.kt)("h2",{id:"\u9019\u500b-linux-\u662f\u91d1\u9b5a\u8166"},"\u9019\u500b Linux \u662f\u91d1\u9b5a\u8166"),(0,l.kt)("p",null,"\u8a66\u8457\u65b0\u589e\u6a94\u6848\u4e26\u5beb\u5165\u4e00\u4e9b\u8cc7\u6599\uff0c\u91cd\u958b\u6a5f\u4e4b\u5f8c\u537b\u767c\u73fe\u6a94\u6848\u6d88\u5931\u4e86\uff0c\u5f8c\u4f86\u624d\u4e86\u89e3\u5230\u6574\u500b\u6a94\u6848\u6a39\u662f\u653e\u5728\u555f\u52d5 Linux \u7528\u7684\u6620\u50cf\u6a94\u88e1\u9762\uff0c\u90a3\u4e9b\u8cc7\u6599\u593e\u5728\u958b\u6a5f\u4e4b\u5f8c\u662f\u639b\u5728 Ram Disk \u4e0a ",(0,l.kt)("sup",{parentName:"p",id:"fnref-linux-3ds-files-0ba2fc"},(0,l.kt)("a",{parentName:"sup",href:"#fn-linux-3ds-files-0ba2fc",className:"footnote-ref"},"linux-3ds-files")),"\uff0c\u81ea\u7136\u6c92\u6709\u5132\u5b58\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u89e3\u6c7a\u7684\u8fa6\u6cd5\u5c31\u662f\u628a\u8cc7\u6599\u5b58\u5728 SD \u5361\u4e0a\uff0c\u4f46\u662f\u9019\u500b Linux \u9810\u8a2d\u4e26\u4e0d\u6703\u639b\u8f09 SD \u5361\uff0c\u7814\u7a76\u4e86\u4e00\u6703\u5152\u624d\u77e5\u9053\u5b83\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/dev/vda1"),"\uff0c\u4f46\u662f\u6bcf\u6b21\u958b\u6a5f\u90fd\u8981\u6253\u4e00\u6b21\u6307\u4ee4\u986f\u5f97\u6709\u9ede\u9ebb\u7169\uff08\u63d0\u9192\uff0c3DS \u6c92\u8fa6\u6cd5\u5916\u63a5\u9375\u76e4\uff0c\u6211\u53ea\u80fd\u7528\u89f8\u63a7\u7b46\u6572\u6307\u4ee4\uff09\u3002"),(0,l.kt)("p",null,"\u5beb\u500b\u8173\u672c\u8b93\u5b83\u5728\u958b\u6a5f\u7684\u6642\u5019\u57f7\u884c\u4fbf\u7406\u6240\u7576\u7136\u7684\u8b8a\u6210\u5fc5\u9808\u5b8c\u6210\u7684\u4efb\u52d9\uff0c\u7136\u800c\u5b83\u4e26\u6c92\u6709 systemd, rc.local \u9019\u985e\u9ad8\u7d1a\u7684\u6771\u897f\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/init.d/rcS")," \u627f\u64d4 start \u7684\u529f\u80fd ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/init.d/rcK")," \u627f\u64d4 kill(stop) \u7684\u529f\u80fd\uff0c\u6703\u4f9d\u5e8f\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/init.d/rcS/S(\\d\\d.*)"),"\u3002"),(0,l.kt)("p",null,"\u8173\u672c\u5012\u662f\u5bb9\u6613\u641e\u5b9a\uff0c\u4f46\u662f\u6211\u8981\u600e\u9ebc\u628a\u5b83\u5305\u9032\u53bb\u958b\u6a5f\u7528\u7684 img \u88e1\u9762\uff1f\u5efa\u7f6e 3DS Linux \u7684\u904e\u7a0b\u6d89\u53ca\u4e00\u500b ",(0,l.kt)("inlineCode",{parentName:"p"},"rootfs.cpio.gz")," \u6a94\u6848\uff0c\u6211\u5fc5\u9808\u628a\u5b83\u89e3\u5305\u4e4b\u5f8c\u52a0\u5165\u6211\u8981\u7684\u4fee\u6539\u518d\u5305\u56de\u53bb\u3002"),(0,l.kt)("p",null,"\u82b1\u4e86\u4e00\u9ede\u6642\u9593\u641e\u61c2\u4e0a\u8ff0\u9019\u4e9b\u6771\u897f\uff0c\u624d\u7d42\u65bc\u8b93\u6211\u7684 Linux \u958b\u6a5f\u6703\u81ea\u52d5\u639b\u8f09 SD \u5361 (2022-11-12)\u3002"),(0,l.kt)("h2",{id:"\u7b2c\u4e00\u500b\u632b\u6298"},"\u7b2c\u4e00\u500b\u632b\u6298"),(0,l.kt)("p",null,"\u4f9d\u7167\u81ea\u5df1\u7684\u4ee5\u5f80\u7d93\u9a57\uff1a\u300c\u8981\u5728 Host \u4e0a\u8dd1 Javascript \u5c31\u5148\u88dd Node.js\u300d\uff0c\u7136\u800c\u6700\u65b0\u7248\u7684 Node.js \u4e26\u6c92\u6709 Armv6 \u7684 prebuild release\uff0c\u4e0d\u904e\u4e00\u76f4\u5230 11 \u7248\uff0c\u9084\u662f\u6709\u5b98\u65b9\u7248\u7684 armv6 prebuild \u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v11.x/"},"\u4e0b\u8f09"),"\u3002\u4e0b\u8f09\u4e4b\u5f8c\u5728 3DS \u4e0a\u57f7\u884c\u6703\u62cb\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"-sh: ./node: not found")," \u7684\u932f\u8aa4\uff0c\u539f\u56e0\u662f\u5b98\u65b9\u7684 prebuild \u662f\u4ef0\u8cf4 glibc\uff0c\u4f46\u662f 3DS Linux \u4f7f\u7528\u7684\u662f musl libc\u3002\u597d\u5427\uff0c\u9019\u500b\u554f\u984c\u6211\u4e5f\u4e0d\u662f\u592a\u964c\u751f\uff0c\u4e4b\u524d\u5728\u5305 Docker \u63a5\u89f8\u904e Alpine Linux\uff0c\u6240\u4ee5\u5c0d\u9019\u985e\u554f\u984c\u6709\u500b\u6982\u5ff5\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u597d\u5504\uff0c\u81ea\u5df1 build \u5c31\u662f\u4e86")),(0,l.kt)("p",null,"\u96d6\u7136\u7db2\u8def\u4e0a\u627e\u4e86\u4e00\u4e9b build \u53c3\u6578\uff0c\u4f46\u662f\u600e\u9ebc\u8a66\u600e\u9ebc\u6709\u554f\u984c\uff0c\u7562\u7adf\u6211\u5e73\u5e38\u53c8\u4e0d\u5beb C\uff0c\u5c0d\u5c08\u6848\u7684\u7de8\u8b6f\u914d\u7f6e\u4e0d\u719f\u6089\u3002\u5f8c\u4f86\u627e\u5230\u4e00\u500b\u53eb\u505a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dockcross/dockcross"},"Dockcross")," \u7684\u5de5\u5177\u5c08\u9580\u7528\u4f86\u8655\u7406\u4ea4\u53c9\u7de8\u8b6f (Cross Compiling)\u3002\u4f46\u662f\u76f8\u5c0d\u820a\u7248\u7684 Node.js \u4ef0\u8cf4 Python 2.X\uff0cDockcross \u7684 Image \u53ea\u6709 3.X\uff0c\u9019\u6642\u6211\u624d\u77e5\u9053 Node.js \u7684\u7de8\u8b6f\u904e\u7a0b\u5c45\u7136\u4ef0\u8cf4 Python\uff0c\u6211\u5167\u5fc3 OS\uff1a\u300cSHAME\uff0c \u7a0b\u5f0f\u8a9e\u8a00\u4e4b\u6065\uff0cNode.js \u4f60\u4f5c\u70ba\u4e00\u500b\u76f4\u8b6f\u8a9e\u8a00\u7684\u76f4\u8b6f\u5668\u7684\u7de8\u8b6f\u904e\u7a0b\u5c45\u7136\u4ef0\u8cf4\u53e6\u5916\u4e00\u7a2e\u76f4\u8b6f\u8a9e\u8a00\u300d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(1835).Z,width:"1536",height:"2048"})),(0,l.kt)("p",null,"\u597d\u52a0\u5728 Dockcross \u5141\u8a31",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dockcross/dockcross#how-to-extend-dockcross-images"},"\u64f4\u5145")," Docker image \u4ee5\u7b26\u5408\u5c08\u6848\u9700\u8981\uff0c\u7136\u800c\u4e8b\u60c5\u4e26\u6c92\u6709\u9019\u9ebc\u7c21\u55ae\u3002Node.js \u7684\u7de8\u8b6f\u904e\u7a0b\u4ef0\u8cf4\u4e86\u7de8\u8b6f\u7684\u7522\u51fa\u7269\uff0c\u4e5f\u5c31\u662f\u7576\u6211\u6307\u5b9a\u4e86\u7de8\u8b6f\u76ee\u6a19\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"linux-armv6-musl")," \uff0c\u6703\u751f\u6210\u4e00\u4e9b tool\uff0c\u63a5\u8457\u5728\u7de8\u8b6f\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"node")," \u4ee5\u524d\uff0c\u5b83\u6703\u5728 host \u547c\u53eb\u9019\u4e9b tool\uff0c\u4f46\u662f\u6211\u7684 host \u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"linux-armv6-musl"),"\uff1b\u65bc\u662f\u62cb\u51fa\u932f\u8aa4\uff0c\u7de8\u8b6f\u4e2d\u6b62\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"(#\u256fO\u76bfO)\u256f\u253b\u2501\u253b")),(0,l.kt)("p",null,"\u63a5\u8457\u6211\u767c\u73fe\u5728\u5efa\u7f6e 3DS Linux \u904e\u7a0b\u4e2d\u4f7f\u7528\u7684\u5de5\u5177\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/linux-3ds/buildroot"},"buildroot")," \u5176\u5be6\u63d0\u4f9b\u4e86\u4e00\u500b\u754c\u9762\u53ef\u4ee5\u52fe\u9078 node\uff0c\u800c\u5b83\u7684\u5be6\u4f5c\u65b9\u5f0f\u5c31\u662f\u5148\u7de8\u8b6f\u4e00\u4efd x86 \u7684\u7248\u672c\uff0c\u518d\u8dd1 arm \u7684\u7de8\u8b6f\uff0c\u800c\u7de8\u8b6f\u904e\u7a0b\u4e2d\u7528\u5230\u7684 tool \u5c31\u56de\u53bb call x86 \u7684\u7248\u672c\u3002\u7d93\u904e\u4e00\u6ce2\u4e09\u6298\u6211\u7d42\u65bc\u5f04\u51fa\u4e86\u300cmusl-armv6 \u7248\u672c\u7684 Node.js v14\u300d\uff0c\u7136\u800c\u554f\u984c\u4e26\u6c92\u6709\u56e0\u6b64\u89e3\u6c7a\uff0c\u4e0d\u7136\u6bb5\u843d\u6a19\u984c\u5c31\u4e0d\u6703\u662f\u300c\u7b2c\u4e00\u500b\u632b\u6298\u300d\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ node --version\nv14.18.3\n\n$ node -h\n...\nProcess node (pid: 153, stack limit = 0xc6135dc6)\n...\n[<c0111610>] (v6_coherent_kern_range) from [<c01094c0>] (arm_syscall+0x15c/0x26c)\n[<c01094c0>] (arm_syscall) from [<c0100060>] (res_fast_syscall+0x0/0x58)\nException stack (0xc15elfa8 to 0xc15elff0)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(4564).Z,width:"800",height:"450"})),(0,l.kt)("p",null,"\u7e3d\u4e4b Node.js \u5c0d\u65bc\u90a3\u500b\u5e74\u4ee3\u7684 3DS \u4f86\u8aaa too powerful \u4e86\u3002(2022-11-13)"),(0,l.kt)("p",null,"\u4f5c\u70ba ECMAScript \u7684\u4fe1\u5f92\uff0c\u9019\u500b\u632b\u6298\u8b93\u6211\u5f88\u4e0d\u7518\u5fc3\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u80fd\u7528 node.js \u8dd1\u7684\u8a71\u611f\u89ba\u771f\u7684\u6eff\u9177\u7684\uff0c\u7528 C \u6216 shell \u5c31\u611f\u89ba\u5f88\u4e00\u822c")),(0,l.kt)("p",null,"\u4e26\u4e14\u6b63\u5982\u6211\u670b\u53cb\u8aaa\u7684\uff0c\u96d6\u7136\u6211\u4e5f\u4e0d\u662f\u4e0d\u6703\u5beb Shell \u6216\u662f C\uff0c\u4f46\u662f\u611f\u89ba\u9019\u6a23\u5c31\u592a\u7121\u804a\u4e86\uff08\uff1f\uff09\u65e2\u7136\u90fd\u96e3\u5f97\u8981\u89e3 Bad Apple \u7684\u6210\u5c31\u4e86\uff0c\u7576\u7136\u662f\u52a0\u9ede\u6599\u6bd4\u8f03\u6709\u8da3\uff0c\u800c\u4e14\u4f5c\u70ba\u7db2\u9801\u524d\u7aef\u5de5\u7a0b\u5e2b\uff0c\u7aa9\u771f\u7684\u4e0d\u662f\u5f88\u60f3\u7528 Shell \u6216\u662f C \u5beb\u554a ",(0,l.kt)("inlineCode",{parentName:"p"},"_(:3\u300d\u2220)_"),"\u3002\u8ab0\u77e5\u9053 Node.js \u6beb\u7121\u53cd\u61c9\uff0c\u5c31\u53ea\u662f\u4e00\u5718 stack \u76f4\u63a5\u6b7b\u5728 Armv6 \u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(3545).Z,width:"720",height:"479"})),(0,l.kt)("p",null,"\u78b0\u5de7\u90a3\u5929 (2022-11-13) \u8ddf\u670b\u53cb\u804a\u5929\u7684\u6642\u5019\u6709\u63d0\u5230\u5728 Javascript \u7684\u5708\u5b50\u6709\u500b\u53eb\u505a\u300c\u5305\u300d\u7684\u6771\u897f\uff0c\u5f8c\u4f86\u8d81\u8457\u653e\u5047\u6574\u7406\u700f\u89bd\u5668\u66f8\u7c64\u7684\u6642\u5019\u767c\u73fe Bun \u76f8\u95dc\u7684\u6771\u897f\uff0c\u7a0d\u5fae\u67e5\u4e00\u4e0b\u8cc7\u6599\u624d\u60f3\u8d77\u4f86\u9664\u4e86 Node.js \u4e4b\u5916\u9084\u6709 Deno \u8ddf Bun \u5169\u500b\u5be6\u4f5c Javascript \u7684\u5c08\u6848\u3002"),(0,l.kt)("p",null,"Bun \u56e0\u70ba\u662f\u5f8c\u8d77\u4e4b\u79c0\uff0cDeno \u53c8\u662f\u7528 Rust \u5beb\u7684\uff0c\u5177\u6211\u6240\u77e5 Rust \u4e5f\u80fd\u62ff\u4f86\u5beb\u5d4c\u5165\u5f0f\u97cc\u9ad4\uff0c\u79fb\u690d\u5230 3DS Linux \u7684\u6a5f\u7387\u6bd4\u8f03\u9ad8\u4e00\u9ede\uff0c\u65bc\u662f\u6211\u4fbf\u671d\u8457\u9019\u500b\u65b9\u5411\u53bb\u7814\u7a76\u3002"),(0,l.kt)("p",null,"\u96d6\u7136 Deno \u672c\u8eab\u6709\u4e00\u4e9b\u5f88\u9177\u7684 feature\uff0c\u5305\u542b\u4ea4\u53c9\u7de8\u8b6f\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u628a Javascript \u7de8\u8b6f\u6210\u76ee\u6a19\u5e73\u53f0\u7684\u57f7\u884c\u6a94\u3002\u4f46\u662f\u5b83\u672c\u8eab\u537b\u6c92\u6709 arm linux \u7684 prebuild\u3002\u5c31\u7b97\u81ea\u5df1\u8dd1\u7de8\u8b6f\u4e5f\u6703\u5728\u4e0b\u8f09\u4ef0\u8cf4\u5957\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"rusty_v8")," \u7684\u6642\u5019\u5931\u6557\uff0c\u52a0\u4e0a\u5b98\u65b9\u95dc\u65bc 32 bit ARM \u652f\u63f4\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno/issues/2295"},"issue")," \u4ecd\u7136\u958b\u8457\u3002\u9019\u4e9b\u90fd\u9084\u4e0d\u5305\u62ec musl libc \u53ef\u80fd\u6703\u9047\u5230\u7684\u554f\u984c\u3002\u770b\u4f86\u6b64\u8def\u4ecd\u7136\u4e0d\u901a\u3002\u6211\u751a\u81f3\u4e00\u5ea6\u7522\u751f\u4e86\u300c\u4e7e\u8106\u7528 Rust \u5beb\u5427\uff0c\u9806\u4fbf\u5b78\u4e00\u4e0b\u9019\u500b\u6211\u6709\u8208\u8da3\u4f46\u662f\u4fdd\u6301\u89c0\u671b\u4e00\u6bb5\u6642\u9593\u7684\u8a9e\u8a00\u300d\u7684\u5ff5\u982d\u3002(2022-11-18)"),(0,l.kt)("p",null,"\u7b49\u7b49\uff0c\u65e2\u7136 Javascript \u90fd\u6709\u8af8\u5982 Node.js, Bun, Deno \u9019\u4e9b\u4e0d\u540c\u7684\u5be6\u4f5c\uff0c\u751a\u81f3\u4f7f\u7528\u4e0d\u540c\u7684 runtime \u5f15\u64ce(V8, JavaScriptCore)\uff0cECMAScript \u55ae\u7d14\u4f5c\u70ba\u6a19\u6e96\uff0c\u5b83\u7684\u5be6\u4f5c\u61c9\u8a72\u4e0d\u53ea\u9019\u6a23\u5427\uff1f\u6211\u4e5f\u61c9\u8a72\u4e0d\u662f\u7b2c\u4e00\u500b\u60f3\u5728\u5d4c\u5165\u5f0f\u7cfb\u7d71\u8dd1 Javascript \u7684\u4eba\u5427\uff1f"),(0,l.kt)("h2",{id:"any-application-that-can-be-written-in-javascript-will-eventually-be-written-in-javascript"},"\u300cAny application that can be written in JavaScript, will eventually be written in JavaScript.\u300d"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/5384762"},"\u4e8b\u5be6"),"\u8b49\u660e\u6211\u4e0d\u5b64\u55ae\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://duktape.org/"},"https://duktape.org/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gfwilliams/tiny-js"},"https://github.com/gfwilliams/tiny-js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cesanta/mjs"},"https://github.com/cesanta/mjs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jerryscript-project/jerryscript"},"https://github.com/jerryscript-project/jerryscript"))),(0,l.kt)("p",null,"\u4e00\u958b\u59cb\u6211\u5617\u8a66\u4e86 tiny-js\uff0c\u56e0\u70ba\u5728\u554f\u7b54\u4e32\u7684\u5206\u6578\u4e5f\u76f8\u5c0d\u9ad8\uff0c\u5b83\u770b\u8d77\u4f86\u8db3\u5920\u7cbe\u7c21\uff0c\u80cc\u5f8c\u53c8\u662f Google\u3002\u7136\u800c\u5f88\u5feb\u53c8\u9047\u5230\u4e86 Musl libc \u7684\u554f\u984c\uff0c\u900f\u904e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/richfelker/musl-cross-make"},"musl-cross-make")," \u9019\u500b\u5de5\u5177\u6c92\u6709\u82b1\u591a\u4e45\u5c31\u6392\u9664\u554f\u984c\u4e86\uff0c\u4f46\u662f\u57f7\u884c\u5f8c\u76f4\u63a5\u8df3 Segmentation fault\uff0c\u7562\u7adf\u662f\u500b\u5e74\u4e45\u5931\u4fee\u7684\u5c08\u6848\uff0c\u6703\u9019\u6a23\u4f3c\u4e4e\u4e5f\u4e0d\u600e\u9ebc\u610f\u5916\u3002"),(0,l.kt)("p",null,"\u5f8c\u4f86\u6211\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/topics/javascript-engine?l=c&o=asc&s=stars"},"\u9019\u88e1"),"\u767c\u73fe ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bellard/quickjs"},"quickjs")," \u4e0d\u53ea\u6709\u4e2d\u6587\u8cc7\u6e90\uff0cREADME \u4e5f\u6709\u63d0\u5230\u53ef\u4ee5\u76f4\u63a5\u57f7\u884c\u800c\u4e0d\u662f\u53ea\u6709 lib\uff0c\u76f8\u8f03\u65bc ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jerryscript-project/jerryscript"},"jerryscript")," \u7684 README \u6c92\u6709\u660e\u8b1b\u662f lib \u9084\u662f\u53ef\u4ee5\u76f4\u63a5\u8dd1\uff0c\u53c8\u6709\u4ef0\u8cf4 Python \u7de8\u8b6f\uff0c\u6211\u5c31\u5148\u9078\u64c7\u4e86 quickjs \u5617\u8a66\u3002\uff08\u5c0d\uff0c\u6211\u5c31\u6b67\u8996 Python\uff0cOHO\uff09"),(0,l.kt)("p",null,"\u5b83\u8ddf Node.js \u4e00\u6a23\uff0c\u7de8\u8b6f\u904e\u7a0b\u4ef0\u8cf4\u81ea\u5df1\u7de8\u8b6f\u7684 tool (",(0,l.kt)("inlineCode",{parentName:"p"},"qjsc"),")\uff0c\u4e00\u6a23\u8981 build \u5169\u6b21\u4f86\u89e3\u6c7a\uff0c\u56e0\u70ba\u6709\u524d\u9762\u7684\u7d93\u9a57\uff0c\u6c92\u6709\u82b1\u592a\u4e45\u5c31\u628a\u554f\u984c\u6392\u9664\u4e26\u6210\u529f\u5728 3DS Linux \u4e0a\u8dd1\u8d77\u4f86\u4e86\u3002 (2022-11-20)"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(8394).Z,width:"2048",height:"1296"})),(0,l.kt)("h2",{id:"voila"},"Voila!"),(0,l.kt)("p",null,"Javascript \u80fd\u5920\u8dd1\u8d77\u4f86\uff0c\u5be6\u4f5c\u7684\u90e8\u4efd\u5c31\u7c21\u55ae\u4e86\uff08\uff1f\uff09"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7528 FFmpeg \u5c0d\u5f71\u7247\u4ee5 5 FPS \u53d6\u6a23\u8f49\u6210\u5716\u7247\uff08\u539f\u672c\u8a66\u904e 10 FPS\uff0c\u7121\u5948\u8a2d\u5099\u592a\u8001\u820a\u8ddf\u4e0d\u4e0a\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u628a\u5716\u7247\u8f49\u6210 ASCII \u6587\u5b57\u6a94"),(0,l.kt)("li",{parentName:"ol"},"\u7528 Javascript \u8b80\u64cb\u7136\u5f8c print \u51fa\u4f86")),(0,l.kt)("p",null,"\u56e0\u70ba\u6211\u73fe\u5728\u624b\u4e0a\u540c\u6642\u6709 arm \u8ddf x86 \u7248\u672c\u7684 qjs \u76f4\u8b6f\u5668\uff0c\u6539 Javascript \u7a0b\u5f0f\u57f7\u884c debug \u7684\u901f\u5ea6\u5c31\u5f88\u5feb\u4e86\uff0c\u4e0d\u7528\u91cd\u65b0\u7de8\u8b6f\uff0c\u53ea\u8981\u5728 dev \u74b0\u5883\u6e2c\u8a66\u5230\u6c92\u554f\u984c\u76f4\u63a5\u8907\u88fd\u5230 3DS \u53bb\u518d\u505a\u7b2c\u4e8c\u6b21\u6e2c\u8a66\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://youtu.be/xYr9pNCv0YQ",title:"3DS x Linux x Javascript x Bad Apple"},(0,l.kt)("img",{parentName:"a",src:"http://img.youtube.com/vi/xYr9pNCv0YQ/0.jpg",alt:null}))),(0,l.kt)("p",null,"(\u7e2e\u5716\u6709\u5f71\u7247\u9023\u7d50)"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/4.0/"},(0,l.kt)("img",{parentName:"a",src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png",alt:"\u5275\u7528 CC \u6388\u6b0a\u689d\u6b3e"})),(0,l.kt)("br",{parentName:"p"}),"\n","Wei Ji\u4ee5",(0,l.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/4.0/"},"\u5275\u7528CC \u59d3\u540d\u6a19\u793a-\u76f8\u540c\u65b9\u5f0f\u5206\u4eab 4.0 \u570b\u969b \u6388\u6b0a\u689d\u6b3e"),"\u91cb\u51fa\u3002"),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-linux-3ds-files-0ba2fc"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/linux-3ds/linux/wiki"},"https://github.com/linux-3ds/linux/wiki"),(0,l.kt)("a",{parentName:"li",href:"#fnref-linux-3ds-files-0ba2fc",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},8394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3ds_linux-d08e47870b383941835e0267a7f618d7.webp"},3545:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rake-9113dbba7c8351351e4f18c878d3bfea.webp"},1835:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/shame-334ebdb49c394aaa13e1aaf95bdd5121.webp"},4564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/too-powerful-7bc66d604bf88ca99154b3ebebe25038.webp"},5462:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/touch-65310ce8b7222c3e34008a6c0e585a87.webp"}}]);