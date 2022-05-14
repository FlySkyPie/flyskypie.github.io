"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[6959],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=i(t),k=s,h=N["".concat(l,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(h,r(r({ref:e},o),{},{components:t})):n.createElement(h,r({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},644:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),r=["components"],p={slug:"2019-11-21-A_Kind_of_Method_to_Interrupt_Recursion_by_Topological_Sorting",authors:["weiji"],tags:["Primordial Soup","The Key of Huanche"]},l="\u4e00\u7a2e\u4ee5\u62d3\u64b2\u6392\u5e8f\u4f5c\u70ba\u905e\u8ff4\u4e2d\u6b62\u689d\u4ef6\u4e4b\u65b9\u6cd5",i={permalink:"/blog/2019-11-21-A_Kind_of_Method_to_Interrupt_Recursion_by_Topological_Sorting",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-11-21-A_Kind_of_Method_to_Interrupt_Recursion_by_Topological_Sorting/README.md",source:"@site/blog/2019-11-21-A_Kind_of_Method_to_Interrupt_Recursion_by_Topological_Sorting/README.md",title:"\u4e00\u7a2e\u4ee5\u62d3\u64b2\u6392\u5e8f\u4f5c\u70ba\u905e\u8ff4\u4e2d\u6b62\u689d\u4ef6\u4e4b\u65b9\u6cd5",description:"\u62d3\u64b2\u9032\u5316\u985e\u795e\u7d93\u7db2\u8def (NEAT) \uff0c\u5fc5\u5b9a\u6709\u6703\u81ea\u7136\u6f14\u5316\u51fa\u905e\u6b78 (recurrent) \u7d50\u69cb\uff0c\u82e5\u4e0d\u80fd\u59a5\u5584\u8655\u7406\u905e\u6b78\u884d\u751f\u7684\u554f\u984c\uff0c\u6f14\u7b97\u6cd5\u5c31\u4e0d\u80fd\u5b8c\u5099\u3002\u4e0b\u5716\u662f\u4e00\u500b\u905e\u6b78\u7d50\u69cb\u7684\u7bc4\u4f8b\uff1a",date:"2019-11-21T00:00:00.000Z",formattedDate:"November 21, 2019",tags:[{label:"Primordial Soup",permalink:"/blog/tags/primordial-soup"},{label:"The Key of Huanche",permalink:"/blog/tags/the-key-of-huanche"}],readingTime:4.29,truncated:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2019-11-21-A_Kind_of_Method_to_Interrupt_Recursion_by_Topological_Sorting",authors:["weiji"],tags:["Primordial Soup","The Key of Huanche"]},prevItem:{title:"\u4e00\u7a2e\u8868\u9054\u667a\u80fd\u7684\u65b9\u6cd5",permalink:"/blog/2020-03-13-A_Kind_of_Way_to_Express_Intelligence"},nextItem:{title:"\u4e00\u7a2e\u5e03\u6797\u62d3\u64b2\u9032\u5316\u985e\u795e\u7d93\u7db2\u8def\u57fa\u56e0\u6f14\u7b97\u6cd5",permalink:"/blog/2019-11-19_A_Kind_of_Algorithm_that_Boolean_Neuroevolution_of_Augmenting_Topologies"}},o={authorsImageUrls:[void 0]},c=[{value:"\u985e\u795e\u7d93\u7db2\u8def\u62d3\u64b2\u7d50\u69cb\u7684\u6578\u5b78\u5b9a\u7fa9",id:"\u985e\u795e\u7d93\u7db2\u8def\u62d3\u64b2\u7d50\u69cb\u7684\u6578\u5b78\u5b9a\u7fa9",level:2},{value:"\u62d3\u64b2\u6392\u5e8f",id:"\u62d3\u64b2\u6392\u5e8f",level:2}],N={toc:c};function k(a){var e=a.components,p=(0,s.Z)(a,r);return(0,m.kt)("wrapper",(0,n.Z)({},N,p,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"\u62d3\u64b2\u9032\u5316\u985e\u795e\u7d93\u7db2\u8def (NEAT) \uff0c\u5fc5\u5b9a\u6709\u6703\u81ea\u7136\u6f14\u5316\u51fa\u905e\u6b78 (recurrent) \u7d50\u69cb\uff0c\u82e5\u4e0d\u80fd\u59a5\u5584\u8655\u7406\u905e\u6b78\u884d\u751f\u7684\u554f\u984c\uff0c\u6f14\u7b97\u6cd5\u5c31\u4e0d\u80fd\u5b8c\u5099\u3002\u4e0b\u5716\u662f\u4e00\u500b\u905e\u6b78\u7d50\u69cb\u7684\u7bc4\u4f8b\uff1a"),(0,m.kt)("p",null,(0,m.kt)("img",{src:t(4001).Z,width:"1028",height:"580"})),(0,m.kt)("p",null,"\u4e0d\u96e3\u770b\u51fa\u5b83\u662f\u4e00\u500b\u905e\u8ff4\u69cb\u9020\uff0c\u6700\u5927\u7684\u554f\u984c\u5c31\u662f\u5982\u4f55\u8655\u7406\u905e\u6b78\u9023\u7d50\u9020\u6210\u7684\u905e\u8ff4\uff1f\u6709\u4e00\u7a2e\u65b9\u5f0f\u662f\u898f\u5b9a\u905e\u8ff4\u6df1\u5ea6\uff08\u6b21\u6578\uff09",(0,m.kt)("sup",{parentName:"p",id:"fnref-recurrent_1-43fb3a"},(0,m.kt)("a",{parentName:"sup",href:"#fn-recurrent_1-43fb3a",className:"footnote-ref"},"recurrent_1")),"\uff0c\u6216\u662f\u5c07\u6574\u500b\u7db2\u8def\u7684\u9023\u63a5\u90fd\u5b9a\u7fa9\u70ba\u905e\u6b78\u9023\u7d50",(0,m.kt)("sup",{parentName:"p",id:"fnref-recurrent_2-43fb3a"},(0,m.kt)("a",{parentName:"sup",href:"#fn-recurrent_2-43fb3a",className:"footnote-ref"},"recurrent_2")),"\u3002"),(0,m.kt)("h2",{id:"\u985e\u795e\u7d93\u7db2\u8def\u62d3\u64b2\u7d50\u69cb\u7684\u6578\u5b78\u5b9a\u7fa9"},"\u985e\u795e\u7d93\u7db2\u8def\u62d3\u64b2\u7d50\u69cb\u7684\u6578\u5b78\u5b9a\u7fa9"),(0,m.kt)("p",null,"\u985e\u795e\u7d93\u7db2\u8def\u662f\u4ee5\u62bd\u8c61\u9023\u7d50\u7684\u65b9\u5f0f\u5b58\u5728\uff0c\u5373\u4f7f\u70ba\u4e86\u8996\u89ba\u5316\u800c\u628a\u7db2\u8def\u6210\u73fe\u5728\u5e73\u9762\u6216\u7acb\u9ad4\u4e2d\uff0c\n\u9019\u4e9b\u9023\u7d50\u7684\u9577\u5ea6\u8207\u795e\u7d93\u5143\u4e4b\u9593\u7684\u8ddd\u96e2\u4e26\u4e0d\u5f71\u97ff\u795e\u7d93\u7db2\u8def\u7684\u6027\u8cea\uff0c\n\u56e0\u6b64\u985e\u795e\u7d93\u7db2\u8def\u5b58\u5728\u65bc\u62d3\u64b2\u7a7a\u9593\u800c\u4e0d\u5b58\u5728\u65bc\u5ea6\u91cf\u7a7a\u9593\uff0c\u53c8\u6216\u662f\u8aaa\u985e\u795e\u7d93\u7db2\u8def\u5177\u6709\u62d3\u64b2\u6027\u8cea\u3002"),(0,m.kt)("p",null,"\u9996\u5148\u6211\u5011\u5b9a\u7fa9\u6709\u5e8f\u5c0d\uff08Ordered pair\uff09",(0,m.kt)("sup",{parentName:"p",id:"fnref-ordered_pair-43fb3a"},(0,m.kt)("a",{parentName:"sup",href:"#fn-ordered_pair-43fb3a",className:"footnote-ref"},"Ordered_pair")),"\uff0c\u4e4b\u5f8c\u8981\u7528\u4f86\u8655\u7406\u6709\u5411\u5716\uff08directed graph\uff09\u7684\u9023\u7d50\uff1a"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"y"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},":"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"}"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"y"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"}"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"}")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(x,y):=\\{\\{x\\} ,\\{x,y\\} \\}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},":="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"{{"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"}"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"}}")))))),(0,m.kt)("p",null,"\u5b9a\u7fa9\u9019\u500b\u7684\u4f5c\u7528\u662f\u4ec0\u9ebc\uff1f\u62d3\u64b2\u5b78\u6703\u5927\u91cf\u4f7f\u7528\u96c6\u5408\u8ad6\uff0c\u4f46\u662f\u5982\u679c\u6211\u5011\u628a\u9023\u7d50\u7684\u982d\u5c3e\u55ae\u7d14\u4e1f\u5230\u4e00\u500b\u96c6\u5408\u4e2d\uff0c\u5982\uff1a ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mn",{parentName:"msub"},"1")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mn",{parentName:"msub"},"2")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a = {x_1,x_2}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))))))))," \uff0c\u4e26\u4e0d\u80fd\u63cf\u8ff0\u8ab0\u662f\u982d\u8ab0\u662f\u5c3e\uff0c\u800c\u53ea\u80fd\u63cf\u8ff0\u689d\u9023\u7d50\u7dda\u800c\u5df2\uff0c\u6240\u4ee5\u5b9a\u7fa9\u4e00\u500b\u80fd\u5920\u5c0d\u5169\u500b\u5143\u7d20\u7522\u751f\u5f8c\u5dee\u7570\u7684\u6578\u7d44\u5341\u5206\u91cd\u8981\u3002"),(0,m.kt)("p",null,"\u5b9a\u7fa9\u4e00\u5f35\u6709\u5411\u5716 (Directed Graph)",(0,m.kt)("sup",{parentName:"p",id:"fnref-graph-43fb3a"},(0,m.kt)("a",{parentName:"sup",href:"#fn-graph-43fb3a",className:"footnote-ref"},"Graph")),"\uff1a"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"G"),(0,m.kt)("mo",{parentName:"mrow"},":"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"W"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G := (V,A,W)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},":="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("p",null,"V\uff1a\u9802\u9ede\u96c6\uff08vertices set\uff09\uff0c\u7d00\u9304\u4e86\u6240\u6709\u9ede"),(0,m.kt)("p",null,"A\uff1a\u9023\u7d50\u96c6\uff0c\u7d00\u9304\u4e86\u9ede\u8207\u9ede\u7684\u6709\u5411\u9023\u63a5\uff08\u7bad\u982d,arrow\uff09"),(0,m.kt)("p",null,"W\uff1a\u6b0a\u91cd\u96c6\uff0c\u7d00\u9304\u4e86\u9023\u7d50\u7684\u6b0a\u503c"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mo",{parentName:"mrow"},":"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"y"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"y"),(0,m.kt)("mo",{parentName:"mrow"},"\u2208"),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"}"),(0,m.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,m.kt)("mi",{parentName:"mrow"},"W"),(0,m.kt)("mo",{parentName:"mrow"},"\u2208"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R"),(0,m.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow"},":"),(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mo",{parentName:"mrow"},"\u2192"),(0,m.kt)("mi",{parentName:"mrow"},"W")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A :=\\{(x,y)|x,y \\in V\\} \\\\ W \\in \\Bbb R \\\\ f:A \\rightarrow W")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},":="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"{("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"}")),(0,m.kt)("span",{parentName:"span",className:"mspace newline"}),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathbb"},"R")),(0,m.kt)("span",{parentName:"span",className:"mspace newline"}),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},":"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W")))))),(0,m.kt)("h2",{id:"\u62d3\u64b2\u6392\u5e8f"},"\u62d3\u64b2\u6392\u5e8f"),(0,m.kt)("p",null,"\u5c0d\u4e00\u500b\u6709\u5411\u7121\u74b0\u5716 (Directed Acyclic Graph) \u800c\u8a00\uff0c\u5b83\u662f\u53ef\u4ee5\u88ab\u6392\u5e8f\u7684\uff1a"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"https://i.stack.imgur.com/0154o.png",src:t(4195).Z,width:"655",height:"533"})),(0,m.kt)("p",null,"\u7576\u62d3\u64b2\u7d50\u69cb\u88ab\u6392\u5e8f\u5f8c\uff0c\u5c31\u6709\u4e86\u524d\u5f8c\u7684\u76f8\u5c0d\u95dc\u4fc2\uff0c\u5982\u6b64\u4e00\u4f86\u6211\u5011\u5c31\u80fd\u5224\u65b7\u9023\u7d50\u7a76\u7adf\u5c6c\u65bc\u524d\u994b\u7684\u9084\u662f\u905e\u6b78\u9023\u7d50\u3002\u547c\u53eb\u905e\u8ff4\u6642\uff0c\u9023\u7d50\u7531\u524d\u5f80\u5f8c\u50b3\u905e\u6642\u547c\u53eb\u905e\u8ff4\u7522\u751f\u65b0\u503c\uff1b\u7531\u5f8c\u5f80\u524d\u50b3\u905e\u6642\u5247\u56de\u50b3\u820a\u503c\uff0c\u3002"),(0,m.kt)("p",null,"\u4f46\u662f\u62d3\u64b2\u6392\u5e8f\u53ea\u9069\u7528\u65bc\u7121\u74b0\u7684\u7d50\u69cb\uff0c\u7576\u5716\u4e0a\u6709\u74b0\uff0c\u62d3\u6a38\u9806\u5e8f\u5c31\u4e0d\u5b58\u5728\u3002\u56e0\u70ba\u74b0\u4e0a\u6bcf\u4e00\u500b\u9ede\u90fd\u6703\u6709\u9023\u5411\u81ea\u5df1\u7684\u908a\uff0c\u610f\u5473\u8457\u74b0\u4e0a\u6bcf\u4e00\u500b\u9ede\u5fc5\u9808\u6392\u5728\u5176\u4ed6\u9ede\u7684\u5f8c\u65b9\uff0c\u74b0\u4e0a\u6bcf\u4e00\u500b\u9ede\u90fd\u4e0d\u80fd\u5728\u6392\u5217\u9806\u5e8f\u4e2d\u62d4\u5f97\u982d\u7c4c\uff0c\u6240\u4ee5\u5408\u7406\u7684\u6392\u5217\u9806\u5e8f\u4e0d\u5b58\u5728\u3002",(0,m.kt)("sup",{parentName:"p",id:"fnref-directedacyclicgraph-43fb3a"},(0,m.kt)("a",{parentName:"sup",href:"#fn-directedacyclicgraph-43fb3a",className:"footnote-ref"},"DirectedAcyclicGraph"))),(0,m.kt)("p",null,"\u90a3\u9ebc\u5047\u82e5\u62d3\u64b2\u7d50\u69cb\u4e00\u958b\u59cb\u5c31\u5b9a\u7fa9\u4e86\u9806\u5e8f\u5462\uff1f"),(0,m.kt)("p",null,(0,m.kt)("img",{src:t(6196).Z,width:"945",height:"285"})),(0,m.kt)("p",null,"\u5982\u6b64\u4e00\u4f86\u5728\u4efb\u4e00\u7bc0\u9ede\u547c\u53eb\u905e\u8ff4\uff0c\u5fc5\u7136\u5b58\u5728\u4e2d\u6b62\u689d\u4ef6\u3002\u5be6\u505a\u7684\u6642\u5019\u4e5f\u5f88\u65b9\u4fbf\uff0c\u53ef\u4ee5\u76f4\u63a5\u6cbf\u7528\u7bc0\u9ede\u7684\u7de8\u865f\u4f5c\u70ba\u62d3\u64b2\u6392\u5e8f\u7684\u4f9d\u64da\uff0c\u800c\u4e0d\u9700\u8981\u984d\u5916\u7684\u8b8a\u6578\u4f86\u8655\u7406\u905e\u8ff4\u4e2d\u6b62\u689d\u4ef6\u3002"),(0,m.kt)("hr",null),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/4.0/"},(0,m.kt)("img",{parentName:"a",src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png",alt:"\u5275\u7528 CC \u6388\u6b0a\u689d\u6b3e"})),(0,m.kt)("br",{parentName:"p"}),"\n","Wei Ji\u4ee5",(0,m.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/4.0/"},"\u5275\u7528CC \u59d3\u540d\u6a19\u793a-\u76f8\u540c\u65b9\u5f0f\u5206\u4eab 4.0 \u570b\u969b \u6388\u6b0a\u689d\u6b3e"),"\u91cb\u51fa\u3002"),(0,m.kt)("div",{className:"footnotes"},(0,m.kt)("hr",{parentName:"div"}),(0,m.kt)("ol",{parentName:"div"},(0,m.kt)("li",{parentName:"ol",id:"fn-recurrent_1-43fb3a"},"Encog NEAT Structure | Heaton Research. (n.d.). Retrieved 2019-11-21, from ",(0,m.kt)("a",{parentName:"li",href:"https://www.heatonresearch.com/encog/neat/neat_structure.html"},"https://www.heatonresearch.com/encog/neat/neat_structure.html"),(0,m.kt)("a",{parentName:"li",href:"#fnref-recurrent_1-43fb3a",className:"footnote-backref"},"\u21a9")),(0,m.kt)("li",{parentName:"ol",id:"fn-recurrent_2-43fb3a"},"NEAT\uff08\u57fa\u65bcNEAT-Python\u6a21\u7d44\uff09\u5be6\u73fe\u76e3\u7763\u5b78\u7fd2\u548c\u5f37\u5316\u5b78\u7fd2 - IT\u95b1\u8b80. (n.d.). Retrieved 2019-11-21, from ",(0,m.kt)("a",{parentName:"li",href:"https://www.itread01.com/content/1549347330.html"},"https://www.itread01.com/content/1549347330.html"),(0,m.kt)("a",{parentName:"li",href:"#fnref-recurrent_2-43fb3a",className:"footnote-backref"},"\u21a9")),(0,m.kt)("li",{parentName:"ol",id:"fn-ordered_pair-43fb3a"},"\u6709\u5e8f\u5c0d - \u7dad\u57fa\u767e\u79d1\uff0c\u81ea\u7531\u7684\u767e\u79d1\u5168\u66f8. (n.d.). Retrieved 2019-11-21, from ",(0,m.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E6%9C%89%E5%BA%8F%E5%B0%8D"},"https://zh.wikipedia.org/wiki/\u6709\u5e8f\u5c0d"),(0,m.kt)("a",{parentName:"li",href:"#fnref-ordered_pair-43fb3a",className:"footnote-backref"},"\u21a9")),(0,m.kt)("li",{parentName:"ol",id:"fn-graph-43fb3a"},"\u5716 (\u6578\u5b78) - \u7dad\u57fa\u767e\u79d1\uff0c\u81ea\u7531\u7684\u767e\u79d1\u5168\u66f8. (n.d.). Retrieved 2019-11-21, from ",(0,m.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E5%9C%96_(%E6%95%B8%E5%AD%B8)"},"https://zh.wikipedia.org/wiki/\u5716_(\u6578\u5b78)")," ",(0,m.kt)("a",{parentName:"li",href:"#fnref-graph-43fb3a",className:"footnote-backref"},"\u21a9")),(0,m.kt)("li",{parentName:"ol",id:"fn-directedacyclicgraph-43fb3a"},"\u6f14\u7b97\u6cd5\u7b46\u8a18 - Directed Acyclic Graph. (n.d.). Retrieved 2019-11-21, from ",(0,m.kt)("a",{parentName:"li",href:"http://www.csie.ntnu.edu.tw/~u91029/DirectedAcyclicGraph.html"},"http://www.csie.ntnu.edu.tw/~u91029/DirectedAcyclicGraph.html"),(0,m.kt)("a",{parentName:"li",href:"#fnref-directedacyclicgraph-43fb3a",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},6196:function(a,e,t){e.Z=t.p+"assets/images/DAG-d215a1ff77225e1c265e2ff324e14e9a.svg"},4195:function(a,e,t){e.Z=t.p+"assets/images/Topological_Sort-2fbcab92e4d8a7f114e529b54c94f5e3.svg"},4001:function(a,e,t){e.Z=t.p+"assets/images/recurrent_link-a8acb1e12e6daf69e64aa612f0f8d4ef.svg"}}]);