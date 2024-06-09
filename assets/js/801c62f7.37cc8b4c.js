"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[5193],{94066:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var d=n(11527),l=n(88717);const s={slug:"2024-02-25_tiddlywiki-journey-1",authors:["weiji"],tags:["TiddlyWiki"]},r="\u6211\u7684 Tiddlywiki \u4e4b\u65c5 - \u555f\u7a0b",t={permalink:"/blog/2024-02-25_tiddlywiki-journey-1",source:"@site/blog/2024-02-25_tiddlywiki-intro/index.md",title:"\u6211\u7684 Tiddlywiki \u4e4b\u65c5 - \u555f\u7a0b",description:"\u6211\u5f9e\u63a5\u89f8 Tiddlywiki \u5230\u73fe\u5728 (2023-10-29~2024-01-30) \u4e5f\u5df2\u7d93\u4e09\u500b\u6708\u4e86\uff0c\u96d6\u7136\u9810\u8a08\u8981\u505a\u7684\u4e8b\u60c5\u9084\u6c92\u5b8c\u6210\uff0c\u4e0d\u904e\u60f3\u628a\u7d2f\u7a4d\u7684\u7b46\u8a18\u505a\u500b\u968e\u6bb5\u6027\u7684\u7e3d\u6574\u7406\u3002",date:"2024-02-25T00:00:00.000Z",formattedDate:"February 25, 2024",tags:[{label:"TiddlyWiki",permalink:"/blog/tags/tiddly-wiki"}],readingTime:7.5,hasTruncateMarker:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2024-02-25_tiddlywiki-journey-1",authors:["weiji"],tags:["TiddlyWiki"]},unlisted:!1,prevItem:{title:"\u6211\u7684 Tiddlywiki \u4e4b\u65c5 - \u63d2\u4ef6",permalink:"/blog/2024-02-28_tiddlywiki-journey-2"},nextItem:{title:"\u6dfa\u8ac7 Mapbox GL JS \u7684\u6e32\u67d3\u908f\u8f2f",permalink:"/blog/2024-01-02_mapbox-layer"}},o={authorsImageUrls:[void 0]},a=[{value:"\u65c5\u7a0b\u7684\u8d77\u9ede",id:"\u65c5\u7a0b\u7684\u8d77\u9ede",level:2},{value:"\u975e\u7dda\u6027",id:"\u975e\u7dda\u6027",level:2},{value:"\u4f7f\u7528 Tiddlywiki",id:"\u4f7f\u7528-tiddlywiki",level:2},{value:"\u57fa\u672c\u6a21\u5f0f",id:"\u57fa\u672c\u6a21\u5f0f",level:3},{value:"\u9032\u968e\u6a21\u5f0f",id:"\u9032\u968e\u6a21\u5f0f",level:3},{value:"\u61c9\u7528\u7a0b\u5f0f",id:"\u61c9\u7528\u7a0b\u5f0f",level:4},{value:"\u700f\u89bd\u5668\u63d2\u4ef6",id:"\u700f\u89bd\u5668\u63d2\u4ef6",level:4},{value:"\u4f3a\u670d\u5668 (Node.js) \u6a21\u5f0f",id:"\u4f3a\u670d\u5668-nodejs-\u6a21\u5f0f",level:3},{value:"\u8b8a\u9ad4\u8207\u5176\u4ed6\u884d\u751f",id:"\u8b8a\u9ad4\u8207\u5176\u4ed6\u884d\u751f",level:2},{value:"\u88dc\u5145\u8aaa\u660e",id:"\u88dc\u5145\u8aaa\u660e",level:2}];function c(i){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,l.a)(),...i.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"\u6211\u5f9e\u63a5\u89f8 Tiddlywiki \u5230\u73fe\u5728 (2023-10-29~2024-01-30) \u4e5f\u5df2\u7d93\u4e09\u500b\u6708\u4e86\uff0c\u96d6\u7136\u9810\u8a08\u8981\u505a\u7684\u4e8b\u60c5\u9084\u6c92\u5b8c\u6210\uff0c\u4e0d\u904e\u60f3\u628a\u7d2f\u7a4d\u7684\u7b46\u8a18\u505a\u500b\u968e\u6bb5\u6027\u7684\u7e3d\u6574\u7406\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u65c5\u7a0b\u7684\u8d77\u9ede",children:"\u65c5\u7a0b\u7684\u8d77\u9ede"}),"\n",(0,d.jsxs)(e.p,{children:["\u76ee\u524d\u6211\u4f7f\u7528 ",(0,d.jsx)(e.a,{href:"https://docusaurus.io/",children:"Docusaurus"})," \u64b0\u5beb\u7db2\u8a8c\u4e26\u4f5c\u70ba\u500b\u4eba\u7db2\u7ad9\uff0c\u4f46\u662f\u7528\u4f86\u8868\u9054\u6211\u7684 Side Project \u4ecd\u7136\u4e0d\u5920\u5408\u9069\uff0c\u60f3\u4f86\u60f3\u53bb\u9084\u662f wiki \u7684\u5f62\u5f0f\u6700\u7b26\u5408\u6211\u7684\u9700\u6c42\uff0c\u4e0d\u4e45\u524d\u8ddf\u4eba\u804a\u5929\u7684\u6642\u5019\u63d0\u5230\u4e86 ",(0,d.jsx)(e.a,{href:"https://js.wiki/",children:"Wiki.js"}),"\uff0c\u65bc\u662f\u6211\u4fbf\u671d\u9019\u500b",(0,d.jsx)(e.a,{href:"https://alternativeto.net/software/wiki-js/",children:"\u65b9\u5411"}),"\u53bb\u641c\u5c0b\u4e86\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u63a5\u8457\u6211\u767c\u73fe\u4e86 Tiddlywiki\uff0c\u7576\u6642\u6b63\u6234\u8457\u8033\u6a5f\u807d\u8457",(0,d.jsx)(e.a,{href:"https://www.youtube.com/watch?v=ztzq05IzYds",children:"\u6230\u939a 40K \u6a5f\u68b0\u795e\u6559\u7684 BGM"})," \uff0c\u7576\u4e0b\u6211\u8166\u6d77\u4e2d\u6d6e\u73fe\u4e86\u4e00\u500b\u5ff5\u982d\uff1a"]}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsx)(e.p,{children:"Goddess of open source just kissed my forehead."}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u975e\u7dda\u6027",children:"\u975e\u7dda\u6027"}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsx)(e.p,{children:"\u4e00\u500b\u975e\u7dda\u6027\u7684\u7db2\u9801\u5f0f\u7b46\u8a18\na non-linear personal web notebook"}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u9019\u662f Tiddlywiki \u5b98\u65b9\u5c0d\u81ea\u5df1\u7c21\u4ecb\uff0c\u4e0d\u904e\u300c\u975e\u7dda\u6027\u300d\u4e00\u8a5e\u5176\u5be6\u975e\u5e38\u62bd\u8c61\uff0c\u4e0d\u904e\u6211\u60f3\u5b83\u60f3\u8981\u76f8\u5c0d\u65bc\u300c\u7dda\u6027\u300d\u6982\u5ff5\u61c9\u8a72\u662f\u6307\u7dda\u6027\u6558\u4e8b (",(0,d.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Story_structure#Linear_narrative",children:"Linear narrative"}),")\uff0c\u63db\u53e5\u8a71\u8aaa Tiddlywiki \u6307\u7a31\u7684\u975e\u7dda\u6027\u61c9\u8a72\u662f\u6307\u975e\u7dda\u6027\u6558\u4e8b (",(0,d.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Nonlinear_narrative",children:"Nonlinear narrative"}),")\uff1b\u5728\u7d00\u9304\u6216\u95b1\u8b80\u8cc7\u6599\u7684\u6642\u5019\u80fd\u5920\u900f\u904e\u8d85\u9023\u7d50\u5728\u4e0d\u540c\u7684\u689d\u76ee\u4e4b\u9593\u7a7f\u68ad\u700f\u89bd\u3002\u76f8\u8f03\u4e4b\u4e0b\u4e00\u822c\u7684\u96fb\u5b50\u6587\u4ef6\u662f\u7531\u4e0a\u800c\u4e0b\uff08\u7dda\u6027\uff09\u95b1\u8b80\u7684\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4f7f\u7528-tiddlywiki",children:"\u4f7f\u7528 Tiddlywiki"}),"\n",(0,d.jsx)(e.h3,{id:"\u57fa\u672c\u6a21\u5f0f",children:"\u57fa\u672c\u6a21\u5f0f"}),"\n",(0,d.jsx)(e.p,{children:'\u4e00\u500b"\u7d93\u5178"\u7684 Tiddlywiki \u6a94\u6848\u6703\u662f\u4e00\u500b\u55ae\u4e00\u7684 HTML \u6a94\u6848\uff0c\u4e00\u500b Wiki \u7684\u8cc7\u6599\uff08\u689d\u76ee\u3001\u6a94\u6848...\u7b49\uff09\u548c Tiddlywiki \u7684\u7a0b\u5f0f\u90fd\u88ab\u653e\u5728\u9019\u500b\u55ae\u4e00\u7684 HTML \u6a94\u6848\u88e1\u9762\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u900f\u904e\u7db2\u9801\u700f\u89bd\u5668\u958b\u555f\u9019\u500b\u6a94\u6848\u4f7f\u7528 Tiddlywiki\u3002'}),"\n",(0,d.jsxs)(e.p,{children:["\u7576\u4f7f\u7528\u8005\u7de8\u8f2f\u5167\u5bb9\uff0c\u6240\u6709\u4fee\u6539\u90fd\u6703",(0,d.jsx)(e.strong,{children:"\u66ab\u6642"}),'\u5b58\u5728\u700f\u89bd\u5668\u7684\u8a18\u61b6\u9ad4\u4e4b\u4e2d\uff0c\u76f4\u5230\u4f7f\u7528\u8005\u6309\u4e0b"\u5132\u5b58"\u7d10\uff0c\u9019\u6642\u700f\u89bd\u5668\u6703\u4e0b\u8f09\u4e00\u500b\u65b0\u7684 HTML\uff0c\u9019\u500b\u65b0\u7684\u6a94\u6848\u662f\u539f\u672c\u6a94\u6848\u7684\u526f\u672c\uff0c\u4f46\u662f\u5305\u542b\u4e86\u525b\u624d\u4fee\u6539\u7684\u5167\u5bb9\u3002']}),"\n",(0,d.jsx)(e.h3,{id:"\u9032\u968e\u6a21\u5f0f",children:"\u9032\u968e\u6a21\u5f0f"}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u57fa\u672c\u6a21\u5f0f\u4e2d\uff0c\u4f7f\u7528\u8005\u5fc5\u9808\u53cd\u8986\u4e0b\u8f09\u66f4\u65b0\u7248\u4f86\u5be6\u73fe\u300c\u5b58\u6a94\u300d\u529f\u80fd\uff0c\u9019\u662f\u56e0\u70ba\u51fa\u65bc\u5b89\u5168\u8003\u91cf\uff0c\u4e00\u822c\u60c5\u6cc1\u4e0b\u700f\u89bd\u5668\u4e0d\u5177\u6709\u4efb\u610f\u8b80\u5beb\u786c\u789f\u4e0a\u8cc7\u6599\u7684\u6b0a\u9650\u3002\u900f\u904e\u4e00\u4e9b\u8f14\u52a9\u5de5\u5177\u53ef\u4ee5\u63d0\u9ad8 Tiddlywiki \u7684\u4f7f\u7528\u8005\u9ad4\u9a57\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u61c9\u7528\u7a0b\u5f0f"}),"\n",(0,d.jsx)(e.li,{children:"\u700f\u89bd\u5668\u63d2\u4ef6"}),"\n"]}),"\n",(0,d.jsx)(e.h4,{id:"\u61c9\u7528\u7a0b\u5f0f",children:"\u61c9\u7528\u7a0b\u5f0f"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"https://github.com/TiddlyWiki/TiddlyDesktop",children:"TiddlyDesktop"})," \u6216\u662f ",(0,d.jsx)(e.a,{href:"https://github.com/tiddly-gittly/TidGi-Desktop",children:"TidGi"})," \u7b49\u61c9\u7528\u7a0b\u5f0f\u5728\u57f7\u884c Tiddlywiki \u7684\u540c\u6642\uff0c\u5141\u8a31\u4f7f\u7528\u8005\u76f4\u63a5\u9032\u884c\u5b58\u6a94\uff08\u6216\u81ea\u52d5\u5b58\u6a94\uff09\u800c\u7121\u9808\u984d\u5916\u91cd\u8907\u4e0b\u8f09\u66f4\u65b0\uff0c\u6709\u4e9b\u61c9\u7528\u7a0b\u5f0f\u751a\u81f3\u63d0\u4f9b\u7ba1\u7406\u591a\u500b Tiddlywiki \u6a94\u6848\u7684\u529f\u80fd\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u700f\u89bd\u5668\u63d2\u4ef6",children:"\u700f\u89bd\u5668\u63d2\u4ef6"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"https://github.com/ibnishak/Timimi/",children:"Timimi"})," \u540c\u6a23\u53ef\u4ee5\u5141\u8a31\u4f7f\u7528\u8005\u76f4\u63a5\u5c0d Tiddlywiki \u9032\u884c\u5b58\u6a94\uff0c\u53ea\u662f\u4e0d\u662f\u4ee5\u61c9\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\u5be6\u73fe\uff0c\u800c\u662f\u4ee5\u700f\u89bd\u5668\u63d2\u4ef6\u7684\u5f62\u5f0f\u5b58\u5728\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u4f7f\u7528\u5b83\u9700\u8981\u5b8c\u6210\u5169\u500b\u524d\u7f6e\u4f5c\u696d\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:'\u4e0b\u8f09\u4e26\u57f7\u884c "Timimi \u7a0b\u5f0f"'}),"\n",(0,d.jsx)(e.li,{children:'\u5b89\u88dd "Timimi \u700f\u89bd\u5668\u63d2\u4ef6"'}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u9019\u500b\u65b9\u6848\u5141\u8a31\u4f7f\u7528\u8005\u4f7f\u7528\u81ea\u5df1\u719f\u6089\u7684\u7db2\u9801\u700f\u89bd\u5668\u7de8\u8f2f Tiddlywiki\uff0c\u53ea\u662f\u984d\u5916\u7684\u6b65\u9a5f\u53ef\u80fd\u6703\u8b93\u4eba\u89ba\u5f97\u4e0d\u65b9\u4fbf\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u4f3a\u670d\u5668-nodejs-\u6a21\u5f0f",children:"\u4f3a\u670d\u5668 (Node.js) \u6a21\u5f0f"}),"\n",(0,d.jsxs)(e.p,{children:["Tiddlywiki \u5141\u8a31\u4ee5 Node.js \u57f7\u884c\uff0c\u81f3\u65bc Node.js \u8207 NPM (\u6216\u5176\u4ed6\u5957\u4ef6\u7ba1\u7406\u5de5\u5177) \u7684\u5b89\u88dd\u8207\u74b0\u5883\u8a2d\u5b9a\u6211\u5c31\u4e0d\u5728\u6b64\u591a\u505a\u89e3\u91cb\u4e86\u3002\u5b89\u88dd ",(0,d.jsx)(e.code,{children:"tiddlywiki"})," \u6307\u4ee4\uff1a"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"npm install -g tiddlywiki\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u65b0\u589e\u4e00\u500b Tiddlywiki Node.js \u5c08\u6848\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"tiddlywiki <Name> --init server\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u9019\u500b\u6307\u4ee4\u6703\u521d\u59cb\u5316\u4e00\u500b Tiddlywiki \u4e26\u8a2d\u5b9a\u4e00\u4e9b\u5728 Node.js \u6a21\u5f0f\u4e0b\u9700\u8981\u7684\u63d2\u4ef6\uff0c\u8af8\u5982\uff1a",(0,d.jsx)(e.code,{children:"tiddlywiki/tiddlyweb"})," \u548c ",(0,d.jsx)(e.code,{children:"tiddlywiki/filesystem"}),"\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u63a5\u8457\u57f7\u884c\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"tiddlywiki <Name> --listen\n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u518d\u6253\u958b ",(0,d.jsx)(e.a,{href:"http://127.0.0.1:8080",children:"http://127.0.0.1:8080"})," \u5c31\u80fd\u770b\u5230\u4f60\u7684 Tiddlywiki \u4e86\uff01"]}),"\n",(0,d.jsx)(e.p,{children:"\u8207\u300c\u57fa\u672c\u6a21\u5f0f\u300d\u548c\u300c\u9032\u968e\u6a21\u5f0f\u300d\u4e0d\u540c\u662f\uff0c\u65b0\u589e\u7684\u689d\u76ee\u4e26\u4e0d\u6703\u88ab\u6253\u5305\u6210\u55ae\u4e00 HTML\uff0c\u800c\u662f\u4e00\u500b\u689d\u76ee\u5c0d\u61c9\u4e00\uff08\u6216\u5169\u500b\uff09\u6a94\u6848\u7684\u65b9\u5f0f\u5132\u5b58\u5728\u8cc7\u6599\u593e\u4e2d\u3002"}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsxs)(e.p,{children:["\u53e6\u5916\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c",(0,d.jsx)(e.code,{children:"tiddlywiki"})," \u4e0d\u53ea\u80fd\u5920\u4ee5 Node.js \u555f\u52d5\u4e00\u500b\u4f3a\u670d\u5668\uff0c\u9084\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684 CLI \u64cd\u4f5c\uff0c\u6bd4\u5982\uff1a\u5efa\u69cb (Build) \u975c\u614b\u7248\u672c\u3001\u5f9e HTML \u62bd\u51fa\u6307\u5b9a\u689d\u76ee...\u7b49\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"$ tiddlywiki --help\nusage: tiddlywiki [<wikifolder>] [--<command> [<args>...]...]\nAvailable commands:\n\n* build: Automatically run configured commands\n* clearpassword: Clear a password for subsequent crypto operations\n* commands: Run commands returned from a filter\n* deletetiddlers: Deletes a group of tiddlers\n* editions: Lists the available editions of TiddlyWiki\n* fetch: Fetch tiddlers from wiki by URL\n* help: Display help for TiddlyWiki commands\n* import: Import tiddlers from a file\n* init: Initialise a new wiki folder\n* listen: Provides an HTTP server interface to TiddlyWiki\n* load: Load tiddlers from a file\n* makelibrary: Construct library plugin required by upgrade process\n* output: Set the base output directory for subsequent commands\n* password: Set a password for subsequent crypto operations\n* render: Renders individual tiddlers to files\n* rendertiddler: Render an individual tiddler as a specified ContentType\n* rendertiddlers: Render tiddlers matching a filter to a specified ContentType\n* save: Saves individual raw tiddlers to files\n* savelibrarytiddlers: \n* savetiddler: Saves a raw tiddler to a file\n* savetiddlers: Saves a group of raw tiddlers to a directory\n* savewikifolder: Saves a wiki to a new wiki folder\n* server: Provides an HTTP server interface to TiddlyWiki (deprecated in favour of the new listen command)\n* setfield: Prepares external tiddlers for use\n* unpackplugin: Unpack the payload tiddlers from a plugin\n* verbose: Triggers verbose output mode\n* version: Displays the version number of TiddlyWiki\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u8b8a\u9ad4\u8207\u5176\u4ed6\u884d\u751f",children:"\u8b8a\u9ad4\u8207\u5176\u4ed6\u884d\u751f"}),"\n",(0,d.jsxs)(e.p,{children:["\u57fa\u65bc Tiddlywiki \u7684\u8a2d\u8a08\u54f2\u5b78\uff0c\u800c\u9020\u5c31\u4e86\u300c\u57fa\u672c\u6a21\u5f0f\u300d\u3001\u300c\u9032\u968e\u6a21\u5f0f\u300d\u6216\u662f\u300c\u4f3a\u670d\u5668\u6a21\u5f0f\u300d\u9019\u5e7e\u7a2e\u4e0d\u540c\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u4e0d\u904e\u5176\u5be6\u5b83\u5011\u90fd\u4e0d\u592a\u7b26\u5408\u4e00\u822c\u4f7f\u7528\u8005\u4f7f\u7528\u8edf\u9ad4\u7684\u7fd2\u6163\uff0c\u56e0\u6b64\u6709\u4e0d\u5c11\u884d\u751f\u5c08\u6848\u6b63\u662f\u70ba\u4e86\u6539\u5584\u5b83\u7684\u4f7f\u7528\u9ad4\u9a57\u800c\u5b58\u5728\u7684\u3002\u9019\u88e1\u662f\u4e00\u4e9b\u6211\u5728\u722c\u6587\u7684\u904e\u7a0b\u767c\u73fe\u7684\u884d\u751f\u578b Tiddlywiki",(0,d.jsx)(e.sup,{children:(0,d.jsx)(e.a,{href:"#user-content-fn-variant-57f790",id:"user-content-fnref-variant-57f790","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\uff1a"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"https://noteself.org/",children:"NoteSelf"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,d.jsx)(e.a,{href:"https://pouchdb.com/",children:"PouchDB"})," \u5c07\u8cc7\u6599\u5132\u5b58\u5728\u700f\u89bd\u5668"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"https://tiddlyhost.com/",children:"Tiddlyhost"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u4f7f\u7528 Ruby \u4f5c\u70ba\u5f8c\u7aef\u8a9e\u8a00"}),"\n",(0,d.jsx)(e.li,{children:"\u53ef\u4ee5\u76f4\u63a5\u8a3b\u518a\u4f7f\u7528"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"https://feather.wiki/",children:"Feather Wiki"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u8ffd\u6c42\u8f15\u91cf\u5316\u5be6\u73fe\u7684\u7db2\u9801 Wiki"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u88dc\u5145\u8aaa\u660e",children:"\u88dc\u5145\u8aaa\u660e"}),"\n",(0,d.jsx)(e.p,{children:"\u300c\u57fa\u672c\u6a21\u5f0f\u300d\u3001\u300c\u9032\u968e\u6a21\u5f0f\u300d\u6216\u662f\u300c\u4f3a\u670d\u5668\u6a21\u5f0f\u300d\u662f\u6211\u70ba\u4e86\u65b9\u4fbf\u89e3\u91cb\u800c\u4f7f\u7528\u7684\u8a5e\u5f59\uff0c\u4e26\u4ee5\u55ae\u7d14\u4f7f\u7528\u8005\u7684\u89d2\u5ea6\u53bb\u5340\u5206\uff0c\u5be6\u969b\u4e0a Tiddlywiki \u672c\u8eab\u4e26\u4e0d\u662f\u4ee5\u9019\u6a23\u7684\u65b9\u5f0f\u5340\u5206\u6216\u662f\u7a31\u547c\u5b83\u5011\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u672c\u6587\u4f7f\u7528\u7684\u300c\u689d\u76ee\u300d\u540c\u6a23\u662f\u70ba\u4e86\u65b9\u4fbf\u89e3\u91cb\u800c\u6cbf\u7528 Wikipedia \u7684\u4f7f\u7528\u7fd2\u6163\uff0c\u5be6\u969b\u4e0a\u5728 Tiddlywiki \u4e2d\uff0c\u689d\u76ee\u88ab\u7a31\u4f5c \u300cTiddler\u300d\u3002"}),"\n",(0,d.jsxs)(e.section,{"data-footnotes":!0,className:"footnotes",children:[(0,d.jsx)(e.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{id:"user-content-fn-variant-57f790",children:["\n",(0,d.jsxs)(e.p,{children:["\u77e5\u8b58\u9023\u7d50\u7684\u5de5\u5177\uff1aTiddlyWiki. (n.d.). Retrieved 2024-01-30, from ",(0,d.jsx)(e.a,{href:"https://roulesophy.github.io/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/",children:"https://roulesophy.github.io/\u77e5\u8b58\u9023\u7d50\u7684\u5de5\u5177-tiddlywiki/"})," ",(0,d.jsx)(e.a,{href:"#user-content-fnref-variant-57f790","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(i={}){const{wrapper:e}={...(0,l.a)(),...i.components};return e?(0,d.jsx)(e,{...i,children:(0,d.jsx)(c,{...i})}):c(i)}},88717:(i,e,n)=>{n.d(e,{Z:()=>t,a:()=>r});var d=n(50959);const l={},s=d.createContext(l);function r(i){const e=d.useContext(s);return d.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function t(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(l):i.components||l:r(i.components),d.createElement(s.Provider,{value:e},i.children)}}}]);