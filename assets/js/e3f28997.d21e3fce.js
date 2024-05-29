"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[995],{10347:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=n(11527),l=n(88717);const r={slug:"2022-11-29_3ds_cross_compilation_note",authors:["weiji"],tags:["learning note","3ds","javascript","cross compilation","quickjs"]},c="\u4ea4\u53c9\u7de8\u8b6f QuickJs \u7b46\u8a18",a={permalink:"/blog/2022-11-29_3ds_cross_compilation_note",source:"@site/blog/2022-11-29_3ds_cross_compilation_note/index.md",title:"\u4ea4\u53c9\u7de8\u8b6f QuickJs \u7b46\u8a18",description:"\u524d\u60c5\u63d0\u8981",date:"2022-11-29T00:00:00.000Z",formattedDate:"November 29, 2022",tags:[{label:"learning note",permalink:"/blog/tags/learning-note"},{label:"3ds",permalink:"/blog/tags/3-ds"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"cross compilation",permalink:"/blog/tags/cross-compilation"},{label:"quickjs",permalink:"/blog/tags/quickjs"}],readingTime:3.705,hasTruncateMarker:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2022-11-29_3ds_cross_compilation_note",authors:["weiji"],tags:["learning note","3ds","javascript","cross compilation","quickjs"]},unlisted:!1,prevItem:{title:"3DS x Linux x Javascript x Bad Apple",permalink:"/blog/2022-12-03_3ds_linux_javascript_bad_apple"},nextItem:{title:"3DS \u5237\u6a5f\u7b46\u8a18",permalink:"/blog/2022-11-25_3ds_hack_note"}},t={authorsImageUrls:[void 0]},o=[{value:"\u524d\u60c5\u63d0\u8981",id:"\u524d\u60c5\u63d0\u8981",level:2},{value:"musl libc",id:"musl-libc",level:3},{value:"\u4ea4\u53c9\u7de8\u8b6f (Cross Compilation)",id:"\u4ea4\u53c9\u7de8\u8b6f-cross-compilation",level:3},{value:"QuickJs",id:"quickjs",level:2},{value:"\u7de8\u8b6f Cross Compiler",id:"\u7de8\u8b6f-cross-compiler",level:2},{value:"\u7de8\u8b6f QuickJs",id:"\u7de8\u8b6f-quickjs",level:2}];function h(e){const s={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"\u524d\u60c5\u63d0\u8981",children:"\u524d\u60c5\u63d0\u8981"}),"\n",(0,i.jsx)(s.p,{children:"\u6211\u5df2\u7d93\u6210\u529f\u7684\u5b8c\u6210\u4e86 3DS \u5237\u6a5f\u4e26\u4e14\u5728\u5b83\u4e0a\u9762\u8dd1\u8d77\u4e86 Linux\uff0c\u4f5c\u70ba\u4e00\u500b\u7db2\u9801\u524d\u7aef\u5de5\u7a0b\u5e2b\uff0c\u6211\u4e00\u9ede\u4e5f\u4e0d\u60f3\u70ba\u4e86\u5728\u4e0a\u9762\u8dd1\u9ede\u6771\u897f\u8dd1\u53bb\u5beb C\uff0c\u800c\u662f\u60f3\u628a\u6211\u7684\u8212\u9069\u5708\u5e36\u9032\u53bb\uff0c\u4e5f\u5c31\u662f\u6211\u8981\u5f04\u4e00\u500b Javascript runtime \u9032\u53bb 3DS Linux\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u7136\u800c 3DS Linux \u7b97\u662f\u4e00\u500b\u76f8\u5c0d\u7f55\u898b\u7684\u74b0\u5883\uff1aArmv6 \u7684\u786c\u9ad4\u4ee5\u53ca\u4f7f\u7528 musl libc\uff0c\u4e3b\u6d41\u7684 Javascript runtime \u4e26\u6c92\u6709\u63d0\u4f9b\u5b98\u65b9\u7248\u672c\u7684 pre-build release\uff0c\u800c\u662f\u9700\u8981\u81ea\u5df1\u60f3\u8fa6\u6cd5\u7de8\u8b6f\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"musl-libc",children:"musl libc"}),"\n",(0,i.jsxs)(s.p,{children:["C \u8a9e\u8a00\u7a0b\u5f0f\u7684\u57f7\u884c\u5176\u5be6\u4ef0\u8cf4 libc (C Run-Time Library)\uff0c\u4e26\u4e14 libc \u7684\u5be6\u4f5c",(0,i.jsx)(s.a,{href:"https://wdv4758h-notes.readthedocs.io/zh_TW/latest/libc.html",children:"\u4e0d\u53ea\u4e00\u7a2e"}),"\uff0cmusl libc \u4fbf\u662f\u5176\u4e2d\u7684\u4e00\u7a2e\uff0c\u800c\u4e14\u88ab\u4e0d\u5c11 Linux \u767c\u884c\u7248\u4f5c\u70ba C \u6a19\u6e96\u51fd\u5f0f\u5eab\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"\u4ea4\u53c9\u7de8\u8b6f-cross-compilation",children:"\u4ea4\u53c9\u7de8\u8b6f (Cross Compilation)"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"https://preshing.com/images/gcc-cross-compiler.png",src:n(20866).Z+"",width:"596",height:"291"})}),"\n",(0,i.jsx)(s.p,{children:"\u4ea4\u53c9\u7de8\u8b6f\u5c31\u662f\u5148\u5728 host \u7de8\u8b6f\u51fa\u4ea4\u53c9\u7de8\u8b6f\u5668 (cross compiler)\uff0c\u518d\u7528\u9019\u500b\u4ea4\u53c9\u7de8\u8b6f\u5668\u53bb\u7de8\u8b6f\u4f60\u7684\u7a0b\u5f0f\uff0c\u6700\u7d42\u76ee\u7684\u662f\u4f60\u7684\u7a0b\u5f0f\u80fd\u5920\u8dd1\u5728 target \u4e0a\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u53e6\u5916\u4e00\u500b\u65b9\u6cd5\u5c31\u662f\u76f4\u63a5\u5728 target \u4e0a\u8dd1\u7de8\u8b6f\uff0c\u4f46\u662f target \u6709\u53ef\u80fd\u662f\u6027\u80fd\u5f88\u4f4e\u7684\u6676\u7247\uff0c\u9019\u7a2e\u65b9\u6cd5\u6548\u7387\u975e\u5e38\u5dee\u751a\u81f3\u7121\u6cd5\u5b8c\u6210\uff08\u6c92\u6709\u8db3\u5920\u7684\u8a18\u61b6\u9ad4\u5b8c\u6210\u7de8\u8b6f\u4e4b\u985e\u7684\uff09\uff0c\u4ea4\u53c9\u7de8\u8b6f\u5c31\u662f\u70ba\u4e86\u89e3\u6c7a\u9019\u7a2e\u554f\u984c\u800c\u5b58\u5728\u7684\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"quickjs",children:"QuickJs"}),"\n",(0,i.jsxs)(s.p,{children:["\u773e\u6240\u7686\u77e5 ECMAScript \u662f\u4e00\u500b\u8a9e\u8a00\u7684\u898f\u7bc4\uff0c\u800c\u4e0d\u662f\u5be6\u4f5c\uff0c\u56e0\u6b64\u9075\u5b88\u8a72\u898f\u7bc4\u7684\u76f4\u8b6f\u5668 (runtime) \u5176\u5be6\u6709\u767e\u767e\u7a2e\u3002\u9664\u4e86 ",(0,i.jsx)(s.a,{href:"https://nodejs.org/en/",children:"Node.js"})," \u4e4b\u5916\uff0cJavascript runtime \u9084\u6709\u5f8c\u8d77\u4e4b\u79c0 ",(0,i.jsx)(s.a,{href:"https://deno.land/",children:"Deno"})," \u548c ",(0,i.jsx)(s.a,{href:"https://bun.sh/",children:"Bun"}),"\uff0c\u800c\u5f15\u64ce (engnine) \u81ea\u7136\u4e5f\u4e0d\u5c11\uff0c\u88ab\u5404\u7a2e\u700f\u89bd\u5668\u3001 Node.js \u4ee5\u53ca Deno \u4f7f\u7528\u7684 V8 \u6216\u662f\u88ab Bun \u4f7f\u7528\u7684 JavaScriptCore\uff0c\u9664\u4e86\u9019\u4e9b\u4e4b\u5916\u9084\u6709",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/List_of_ECMAScript_engines",children:"\u8af8\u591a"}),"\u7684\u5be6\u4f5c\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://bellard.org/quickjs/",children:"QuickJS"})," \u662f\u4e00\u500b\u5b0c\u5c0f\u4e14\u53ef\u5d4c\u5165\u5f0f\u7684 Javascript \u5f15\u64ce\u3002\u5b83\u652f\u63f4 ES2020 \u898f\u7bc4\uff0c\u5305\u542b\u6a21\u7d44\u3001\u975e\u540c\u6b65 Generator\u3001Proxy\u3001BigInt\u3002\u5b83\u662f\u4ee5 C \u8a9e\u8a00\u64b0\u5beb\u4e26\u4e14\u6c92\u6709\u4ef0\u8cf4\u5176\u4ed6\u51fd\u5f0f\u9177\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u7de8\u8b6f-cross-compiler",children:"\u7de8\u8b6f Cross Compiler"}),"\n",(0,i.jsxs)(s.p,{children:["\u5df2\u7d93\u6709\u4eba\u6e96\u5099\u4e86\u65b9\u4fbf\u7684\u5de5\u5177 ",(0,i.jsx)(s.a,{href:"https://github.com/richfelker/musl-cross-make",children:"musl-cross-make"})," \u8b93\u6211\u5011\u80fd\u7c21\u55ae\u7684\u88fd\u4f5c\u4ea4\u53c9\u7de8\u8b6f\u5668\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u9996\u5148\u4e0b\u8f09\u9019\u500b repo\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"git clone git@github.com:richfelker/musl-cross-make.git\ncd musl-cross-make\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u65b0\u589e ",(0,i.jsx)(s.code,{children:"config.mak"})," \u6a94\u6848\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"touch config.mak\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u52a0\u5165\u4ee5\u4e0b\u5167\u5bb9\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'TARGET = arm-linux-musleabihf\nCOMMON_CONFIG += CFLAGS="-g0 -Os" CXXFLAGS="-g0 -Os" LDFLAGS="-s"\nGCC_CONFIG += --with-arch=armv6 --with-mode=arm --with-fpu=vfp\n'})}),"\n",(0,i.jsx)(s.p,{children:"\u57f7\u884c\u7de8\u8b6f\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"make -j ${nproc}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5b89\u88dd\uff08\u8f38\u51fa\u57f7\u884c\u6a94\uff09\uff0c\u9810\u8a2d\u6703\u8f38\u51fa\u5230\u5c08\u6848\u76ee\u9304\u4e0b\u7684 ",(0,i.jsx)(s.code,{children:"output/"})," \u8cc7\u6599\u593e\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"make install\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u8907\u88fd\u5230 ",(0,i.jsx)(s.code,{children:"home"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"touch ~/.musl-cross-make\ncp output/* ~/.musl-cross-make/.\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u628a\u74b0\u5883\u8b8a\u6578\u52a0\u5230 ",(0,i.jsx)(s.code,{children:".bashrc"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'export MUSL_CROSS_INSTALL="$HOME/.musl-cross-make" \nexport PATH="$MUSL_CROSS_INSTALL/bin:$PATH"\n'})}),"\n",(0,i.jsx)(s.h2,{id:"\u7de8\u8b6f-quickjs",children:"\u7de8\u8b6f QuickJs"}),"\n",(0,i.jsx)(s.p,{children:"\u4e0b\u8f09 quickjs"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"git clone https://github.com/bellard/quickjs\ncd quickjs\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u9700\u8981\u66f4\u52d5 ",(0,i.jsx)(s.code,{children:"Makefile"})," \u7684\u4e00\u4e9b\u5167\u5bb9\uff1a"]}),"\n",(0,i.jsxs)(s.p,{children:["\u65b0\u589e ",(0,i.jsx)(s.code,{children:"CROSS_PREFIX=arm-linux-musleabihf-"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"  CROSS_PREFIX=arm-linux-musleabihf-\n  HOST_CC=gcc\n  CC=$(CROSS_PREFIX)gcc\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"LIBS+=-ldl -lpthread          #\u627e\u5230\u9019\u884c\nLIBS+=-ldl -lpthread -latomic #\u589e\u52a0\u53c3\u6578\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u63a5\u8457\u8dd1\u7de8\u8b6f\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"make -j ${nproc}\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u6aa2\u67e5\u7de8\u8b6f\u7d50\u679c\u662f\u4e0d\u662f\u7b26\u5408\u6211\u5011\u7684\u76ee\u6a19\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ file qjs\nqjs: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-musl-armhf.so.1, with debug_info, not stripped\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"http://creativecommons.org/licenses/by-sa/4.0/",children:(0,i.jsx)(s.img,{src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png",alt:"\u5275\u7528 CC \u6388\u6b0a\u689d\u6b3e"})}),(0,i.jsx)(s.br,{}),"\n","Wei Ji\u4ee5",(0,i.jsx)(s.a,{href:"http://creativecommons.org/licenses/by-sa/4.0/",children:"\u5275\u7528CC \u59d3\u540d\u6a19\u793a-\u76f8\u540c\u65b9\u5f0f\u5206\u4eab 4.0 \u570b\u969b \u6388\u6b0a\u689d\u6b3e"}),"\u91cb\u51fa\u3002"]})]})}function d(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},20866:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/cross_compilation-ea4a5f6193c4232b545e0746c3eaa312.webp"},88717:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>c});var i=n(50959);const l={},r=i.createContext(l);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);