"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[3085],{6416:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(7294),l=t(6010),r=t(8277),i=t(5290),c=t(50),o=t(1944),s=t(5281);const m={mdxPageWrapper:"mdxPageWrapper_zHyg"};function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return a.createElement(o.FG,{className:(0,l.Z)(f??s.k.wrapper.mdxPages,s.k.page.mdxPage)},a.createElement(o.d,{title:t,description:d}),a.createElement(r.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m.mdxPageWrapper)},a.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},a.createElement(i.Z,null,a.createElement(n,null))),!v&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(c.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},50:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),l=t(7294),r=t(6010),i=t(721);const c={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"},o="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,r.Z)(c.tableOfContents,"thin-scrollbar",n)},l.createElement(i.Z,(0,a.Z)({},t,{linkClassName:o,linkActiveClassName:s})))}},721:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(7462),l=t(7294);function r(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?l.createElement("ul",{className:i?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(r,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const i=l.memo(r);var c=t(6668);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function m(e){const n=e.getBoundingClientRect();return n.top===n.bottom?m(e.parentNode):n}function d(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>m(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function u(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,c.L)();return(0,l.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){const n=(0,l.useRef)(void 0),t=u();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),o=d(c,{anchorTopOffset:t.current}),s=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current?.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const g=(0,c.L)(),h=d??g.tableOfContents.minHeadingLevel,p=u??g.tableOfContents.maxHeadingLevel,L=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:o(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:h,maxHeadingLevel:p});return f((0,l.useMemo)((()=>{if(r&&m)return{linkClassName:r,linkActiveClassName:m,minHeadingLevel:h,maxHeadingLevel:p}}),[r,m,h,p])),l.createElement(i,(0,a.Z)({toc:L,className:t,linkClassName:r},v))}}}]);