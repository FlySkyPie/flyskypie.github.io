"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[4013],{8826:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9496),r=a(5924),n=a(2287),s=a(7380),i=a(1082);const c={sidebar:"sidebar_pncK",sidebarItemTitle:"sidebarItemTitle_bcVE",sidebarItemList:"sidebarItemList_FpKa",sidebarItem:"sidebarItem__Kh8",sidebarItemLink:"sidebarItemLink_oio6",sidebarItemLinkActive:"sidebarItemLinkActive_a7Tu"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var o=a(9127);function g(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function u(e){return l.createElement(o.Zo,{component:g,props:e})}var b=a(159);function d(e){let{sidebar:t}=e;const a=(0,b.i)();return t?.items.length?"mobile"===a?l.createElement(u,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(d,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},3185:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(9496),r=a(8826),n=a(7102),s=a(1082);const i=()=>(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});const c={tag:"tag_tgql"};function m(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c.tag},l.createElement(n.Z,e))))),l.createElement("hr",null))}function o(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(m,{key:e.letter,letterEntry:e}))))}var g=a(9657),u=a(1438),b=a(6798),d=a(5924);function p(e){let{tags:t,sidebar:a}=e;const n=i();return l.createElement(g.FG,{className:(0,d.Z)(u.k.wrapper.blogPages,u.k.page.blogTagsListPage)},l.createElement(g.d,{title:n}),l.createElement(b.Z,{tag:"blog_tags_list"}),l.createElement(r.Z,{sidebar:a},l.createElement("h1",null,n),l.createElement(o,{tags:t})))}},7102:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9496),r=a(5924),n=a(7380);const s={tag:"tag__w44",tagRegular:"tagRegular_tSJm",tagWithCount:"tagWithCount_OrfH"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}}}]);