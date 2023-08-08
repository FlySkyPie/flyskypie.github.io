"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[8610],{4118:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294),r=a(6010),n=a(8277),s=a(9960),i=a(5999);const o={sidebar:"sidebar_TMXw",sidebarItemTitle:"sidebarItemTitle_V4zb",sidebarItemList:"sidebarItemList_uHd5",sidebarItem:"sidebarItem_spIe",sidebarItemLink:"sidebarItemLink_eqrF",sidebarItemLinkActive:"sidebarItemLinkActive_XZSJ"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(o.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(o.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title)))))))}var c=a(3102);function g(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function u(e){return l.createElement(c.Zo,{component:g,props:e})}var d=a(7524);function p(e){let{sidebar:t}=e;const a=(0,d.i)();return t?.items.length?"mobile"===a?l.createElement(u,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},6299:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(5999),n=a(1750);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},6244:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(7294),r=a(6010),n=a(5999),s=a(9960),i=a(4996),o=a(8824),m=a(8780),c=a(5290),g=a(6753);const u={blogPostTitle:"blogPostTitle_rzP5",blogPostData:"blogPostData_Zg1s",blogPostDetailsFull:"blogPostDetailsFull_h6_j"};var d=a(62);function p(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function h(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:i}=t,o=n||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(p,{href:o,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(p,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const b={authorCol:"authorCol_FlmR",imageOnlyAuthorRow:"imageOnlyAuthorRow_trpF",imageOnlyAuthorCol:"imageOnlyAuthorCol_S2np"};function E(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?b.imageOnlyAuthorRow:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?b.imageOnlyAuthorCol:b.authorCol),key:t},l.createElement(h,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function v(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.C)(),{children:p,frontMatter:h,assets:b,metadata:v,truncated:f,isBlogPostPage:_=!1}=e,{date:Z,formattedDate:N,permalink:k,tags:P,readingTime:T,title:w,editUrl:I,authors:y}=v,L=b.image??h.image,A=!_&&f,F=P.length>0,C=_?"h1":"h2";return l.createElement("article",{className:_?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(C,{className:u.blogPostTitle,itemProp:"headline"},_?w:l.createElement(s.Z,{itemProp:"url",to:k},w)),l.createElement("div",{className:(0,r.Z)(u.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:Z,itemProp:"datePublished"},N),void 0!==T&&l.createElement(l.Fragment,null," \xb7 ",t(T))),l.createElement(E,{authors:y,assets:b})),L&&l.createElement("meta",{itemProp:"image",content:a(L,{absolute:!0})}),l.createElement("div",{id:_?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,p)),(F||f)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",_&&u.blogPostDetailsFull)},F&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":A})},l.createElement(d.Z,{tags:P})),_&&I&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:I})),A&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":F})},l.createElement(s.Z,{to:v.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),r=a(9960),n=a(4118),s=a(6244),i=a(5999),o=a(8824),m=a(1944),c=a(5281),g=a(6299),u=a(4739),d=a(6010);function p(e){let{tag:t,items:a,sidebar:p,listMetadata:h}=e;const b=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(t.count),tagName:t.label});return l.createElement(m.FG,{className:(0,d.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},l.createElement(m.d,{title:E}),l.createElement(u.Z,{tag:"blog_tags_posts"}),l.createElement(n.Z,{sidebar:p},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(r.Z,{href:t.allTagsPath},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(g.Z,{metadata:h})))}},6753:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(5999),n=a(7462),s=a(6010);const i={iconEdit:"iconEdit_dcUD"};function o(e){let{className:t,...a}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(5281);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.k.common.editThisPage},l.createElement(o,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(6010),n=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:i}=e;return l.createElement(n.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&l.createElement("div",{className:"pagination-nav__sublabel"},s),l.createElement("div",{className:"pagination-nav__label"},a))}},7774:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(6010),n=a(9960);const s={tag:"tag_hD8n",tagRegular:"tagRegular_D6E_",tagWithCount:"tagWithCount_i0QQ"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}},62:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010),n=a(5999),s=a(7774);const i={tags:"tags_XVD_",tag:"tag_JSN8"};function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:i.tag},l.createElement(s.Z,{label:t,permalink:a}))}))))}},8824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(7294),r=a(2263);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function m(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);