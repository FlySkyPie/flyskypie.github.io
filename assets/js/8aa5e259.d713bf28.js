"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[7137],{35105:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var l=i(11527),r=i(88717);const s={slug:"2021-06-10_minerl-challenge_rules",authors:["weiji"],tags:["learning note","minerl","machine learning"]},t="MineRL \u6311\u6230 2021 - \u6bd4\u8cfd\u898f\u5247\uff08\u7ffb\u8b6f\uff09",c={permalink:"/blog/2021-06-10_minerl-challenge_rules",source:"@site/blog/2021-06-10_minerl-challenge_rules/index.md",title:"MineRL \u6311\u6230 2021 - \u6bd4\u8cfd\u898f\u5247\uff08\u7ffb\u8b6f\uff09",description:"\u4ee5\u4e0b\u898f\u5247\u6307\u51fa\u4e86\u6574\u500b\u6bd4\u8cfd\u7684\u7cbe\u795e\uff0c\u4efb\u4f55\u88ab\u767c\u73fe\u9055\u53cd\u898f\u5247\u7684\u63d0\u4ea4\u90fd\u53ef\u80fd\u88ab\u4e3b\u8fa6\u65b9\u8a3b\u92b7\u53c3\u8cfd\u8cc7\u683c\u3002",date:"2021-06-10T00:00:00.000Z",formattedDate:"June 10, 2021",tags:[{label:"learning note",permalink:"/blog/tags/learning-note"},{label:"minerl",permalink:"/blog/tags/minerl"},{label:"machine learning",permalink:"/blog/tags/machine-learning"}],readingTime:7.565,hasTruncateMarker:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2021-06-10_minerl-challenge_rules",authors:["weiji"],tags:["learning note","minerl","machine learning"]},unlisted:!1,prevItem:{title:"MineRL \u6311\u6230 2021 - \u7af6\u8cfd\u6d41\u7a0b\uff08\u7ffb\u8b6f\uff09",permalink:"/blog/2021-06-11_minerl-competition-structure"},nextItem:{title:"A Way to Reward Agent Which Constructed Voxel World (Minecraft) by Shannon Entropy",permalink:"/blog/2020-05-23-A_Way_to_Reward_Agent_Which_Constructed_Voxel_World_Minecraft_by_Shannon_Entropy-en"}},a={authorsImageUrls:[void 0]},o=[{value:"\u4e00\u822c\u898f\u5247",id:"\u4e00\u822c\u898f\u5247",level:2},{value:"Research \u898f\u5247",id:"research-\u898f\u5247",level:2}];function h(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:i(4039).Z+"",width:"5315",height:"1087"})}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u898f\u5247\u6307\u51fa\u4e86\u6574\u500b\u6bd4\u8cfd\u7684\u7cbe\u795e\uff0c\u4efb\u4f55\u88ab\u767c\u73fe\u9055\u53cd\u898f\u5247\u7684\u63d0\u4ea4\u90fd\u53ef\u80fd\u88ab\u4e3b\u8fa6\u65b9\u8a3b\u92b7\u53c3\u8cfd\u8cc7\u683c\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u4e00\u822c\u898f\u5247",children:"\u4e00\u822c\u898f\u5247"}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u898f\u5247\u9069\u7528\u65bc\u5169\u7a2e\u7d44\u5225\uff08Intro \u7d44\u548c Research \u7d44\uff09\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MineRL Diamond \u6311\u6230\u7684\u53c3\u8cfd\u4f5c\u54c1\u5fc5\u9808\u662f\u300c\u516c\u958b\u7684\u300d\u3002 \u5718\u968a\u5c07\u88ab\u671f\u671b\u900f\u9732\u4ed6\u5011\u65b9\u6cd5\u7684\u5927\u90e8\u5206\u7d30\u7bc0\uff0c\u5305\u62ec\u539f\u59cb\u78bc\uff08\u5c0d\u65bc\u7b49\u5f85\u51fa\u7248\u7684\u520a\u7269\u53ef\u80fd\u6703\u6709\u7279\u6b8a\u7684\u4f8b\u5916\uff09\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u5c0d\u65bc\u6709\u8cc7\u683c\u9032\u5165\u6700\u5f8c\u968e\u6bb5\u8cfd\u7a0b\uff08Intro \u7d44\u7b2c\u4e00\u968e\u6bb5\uff0cResearch \u7d44\u7b2c\u4e8c\u968e\u6bb5\uff09\u7684\u5718\u968a\uff0c\u6bcf\u500b\u6210\u54e1\u5fc5\u9808\u6eff\u8db3\u4ee5\u4e0b\u6240\u6709\u689d\u4ef6\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5e74\u6eff 18 \u6b72\u4e14\u81f3\u5c11\u9054\u5230\u5c45\u4f4f\u5730\u7684\u6210\u5e74\u5e74\u9f61"}),"\n",(0,l.jsx)(n.li,{children:"\u4e0d\u5c45\u4f4f\u5728\u53d7\u7f8e\u570b\u51fa\u53e3\u6cd5\u898f\u7d04\u675f\u7684\u4efb\u4f55\u5730\u5340\u6216\u570b\u5bb6"}),"\n",(0,l.jsx)(n.li,{children:"\u4e0d\u662f\u672c\u6b21\u6bd4\u8cfd\u4e3b\u8fa6\u65b9\u7684\u5de5\u4f5c\u4eba\u54e1\uff0c\u4e5f\u4e0d\u662f\u4e3b\u8fa6\u65b9\u5de5\u4f5c\u4eba\u54e1\u7684\u5bb6\u5ead\u6210\u54e1\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u512a\u52dd\u8005\u8005\u5fc5\u9808\u53c3\u52a0 NeurIPS \u7814\u8a0e\u6703\uff0c\u624d\u80fd\u5f9e\u6211\u5011\u7684\u8b9a\u52a9\u5546\u90a3\u88e1\u7372\u5f97\u734e\u9805\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4e00\u500b\u5718\u968a\u53ef\u4ee5\u540c\u6642\u5411\u5169\u500b\u7d44\u5225\u5206\u5225\u63d0\u4ea4\u4f5c\u54c1\uff1b \u4e0d\u540c\u7d44\u5225\u4e2d\u7684\u8868\u73fe\u5c07\u55ae\u7368\u8a55\u5206\u3002 \u5169\u500b\u4f5c\u54c1\u4e4b\u9593\u4e0d\u6703\u4e92\u76f8\u5f71\u97ff\u3002"}),"\n",(0,l.jsx)(n.li,{children:'\u8207\u74b0\u5883\u7684\u4ea4\u4e92\u5fc5\u9808\u901a\u904e "step" \u51fd\u5f0f\uff0c\u53ea\u80fd\u4f7f\u7528\u63d0\u4f9b\u7684 Gym \u754c\u9762\u3002 \u4e0d\u5f97\u4ee5\u4efb\u4f55\u65b9\u5f0f\u5f9e\u6a21\u64ec\u5668\u4e2d\u63d0\u53d6\u9644\u52a0\u4fe1\u606f\u3002'}),"\n",(0,l.jsxs)(n.li,{children:["\u5b98\u65b9\u898f\u5247\u8aaa\u660e\u5c07\u5728 AIcrowd \u7db2\u7ad9\u4e0a\u7684\u5e38\u898b\u554f\u984c\u89e3\u7b54\u4e2d\u9032\u884c\u3002","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"FAQ \u5c07\u6703\u5f35\u8cbc\u5728 AIcrowd \u9801\u9762\u3002"}),"\n",(0,l.jsx)(n.li,{children:"FAQ \u4e2d\u7684\u7b54\u6848\u662f\u5b98\u65b9\u7684\u6b63\u5f0f\u56de\u61c9\u3002 \u4efb\u4f55\u975e\u6b63\u5f0f\u7684\u56de\u7b54\uff08\u4f8b\u5982\uff0c\u901a\u904e\u96fb\u5b50\u90f5\u4ef6\uff09\u90fd\u5c07\u88ab FAQ \u4e2d\u7684\u56de\u7b54\u6240\u53d6\u4ee3\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"research-\u898f\u5247",children:"Research \u898f\u5247"}),"\n",(0,l.jsx)(n.p,{children:"\u9019\u4e9b\u9644\u52a0\u898f\u5247\u50c5\u9069\u7528\u65bc Research \u7d44\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6210\u54c1\u5fc5\u9808\u5728\u4e0d\u4f9d\u8cf4\u4eba\u985e\u9818\u57df\u77e5\u8b58\u7684\u60c5\u6cc1\u4e0b\u8a13\u7df4\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u3002","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e0d\u53ef\u4ee5\u4f7f\u7528\u57fa\u65bc\u4eba\u5de5\u8abf\u9069\u6216 hard-coded \u7684\u72c0\u614b\u734e\u52f5\u51fd\u6578\u3002\u4f8b\u5982\uff0c\u63a5\u8fd1\u50cf\u662f\u6a39\u7684\u7269\u4ef6\u6642\u7d66\u4e88\u734e\u52f5\u662f\u88ab\u7981\u6b62\u7684\uff1b\u4f46\u662f\u6839\u64da\u964c\u751f\u7684\u65b0\u72c0\u614b\u7d66\u4e88\u734e\u52f5 (curiosity rewards) \u5247\u662f\u88ab\u5141\u8a31\u7684\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4e0d\u53ef\u4ee5\u4eba\u5de5\u5f71\u97ff actions/meta-actions/sub-actions/sub-policies\u3002\u4f8b\u5982\uff0c\u6a5f\u5668\u5b78\u7fd2\u7684\u591a\u5c64\u63a7\u5236\u5668\u662f\u88ab\u51c6\u8a31\u7684\uff0c\u800c meta-controllers \u4e0d\u80fd\u57fa\u65bc\u4eba\u5de5\u8a2d\u5b9a\u7684\u689d\u4ef6\u4f86\u9078\u64c7 policies\uff0c\u50cf\u662f\u5224\u65b7 agent \u7684\u80cc\u5305\u4e2d\u662f\u5426\u6709\u7279\u5b9a\u7269\u54c1\u3002\u6b64\u9650\u5236\u5305\u62ec\u52d5\u4f5c\u7684\u7d44\u5408\uff0c\u4f8b\u5982\uff0c\u300c\u6301\u7e8c\u5411\u524d\u8d70\u5169\u79d2\u300d\u6216\u300c\u6572\u4e0b\u539f\u6728\u4e26\u653e\u7f6e\u5408\u6210\u53f0\u300d\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u9664\u5e40\u5806\u758a (frame-stacking) \u5916\uff0c\u72c0\u614b\u8655\u7406/\u9810\u8655\u7406\u4e0d\u80fd\u786c\u7de8\u78bc\u3002\u4f8b\u5982\uff0cagent  \u53ef\u4ee5\u6839\u64da\u6700\u5f8c\u5169\u500b\u89c0\u5bdf\u7d50\u679c\u4e26\u5728\u6bcf\u500b\u5076\u6578\u7684\u5e40\u6578\u505a\u51fa\u53cd\u61c9\uff0c\u4f46\u662f\u4e0d\u80fd\u4f7f\u7528\u4eba\u5de5\u6307\u5b9a\u7684\u908a\u7de3\u6aa2\u6e2c\u5668\u5728\u89c0\u5bdf\u4e0a\u3002\u53e6\u5916\u4e00\u500b\u4f8b\u5b50\uff0cagent \u53ef\u4ee5\u5c0d\u8b80\u89c0\u5bdf\u6b77\u53f2\u6216\u6578\u64da\u96c6\u6b78\u4e00\u5316\u6210 z-score \u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u70ba\u4e86\u78ba\u4fdd\u9644\u52a0\u5230\u52d5\u4f5c\u548c\u89c0\u5bdf\u6a19\u7c64\u7684\u8a9e\u7fa9\u4e0d\u88ab\u5229\u7528\uff0c\u5206\u914d\u7d66\u52d5\u4f5c\u548c\u89c0\u5bdf\u7684\u6a19\u7c64\u5df2\u88ab\u6df7\u6dc6\uff08\u5728\u6578\u64da\u96c6\u548c\u74b0\u5883\u4e2d\uff09\u3002 \u884c\u52d5\u548c\u89c0\u5bdf\uff08POV \u89c0\u5bdf\u9664\u5916\uff09\u5df2\u88ab\u5d4c\u5165\u5230\u4e0d\u540c\u7684\u7a7a\u9593\u4e2d\u3002 \u53e6\u5916\uff0c\u5728\u7b2c\u4e8c\u968e\u6bb5\u63d0\u4ea4\u671f\u9593\uff0c\u5c07\u91cd\u65b0\u5d4c\u5165\u64cd\u4f5c\u3002 \u4efb\u4f55\u7e5e\u904e\u9019\u4e9b\u6df7\u6dc6\u7684\u5617\u8a66\u90fd\u5c07\u69cb\u6210\u5c0d\u898f\u5247\u7684\u9055\u53cd\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u6a21\u578b\u53ea\u88ab\u8a13\u7df4\u7528\u65bc\u8207 -VectorObf \u7d50\u5c3e\u7684 MineRL \u74b0\u5883\u4e92\u52d5\u3002\u6240\u6709 MineRL \u74b0\u5883\u90fd\u6709\u7279\u5b9a\u7684\u7af6\u8cfd\u7248\u672c\uff0c\u5176\u4e2d\u5305\u542b\u52d5\u4f5c\u548c\u89c0\u5bdf\u7a7a\u9593\u6df7\u6dc6\u3002 \u5b83\u5011\u90fd\u5171\u4eab\u76f8\u4f3c\u7684\u89c0\u5bdf\u548c\u52d5\u4f5c\u7a7a\u9593\u5d4c\u5165\uff0c\u9019\u4e9b\u5d4c\u5165\u5728\u7b2c\u4e8c\u968e\u6bb5\u6642\u6703\u88ab\u8abf\u6574\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u57f9\u8a13\u9810\u7b97\u6709\u9650\u3002 \u9664\u4e86\u63d0\u4f9b\u7684\u6578\u64da\u96c6\u4e4b\u5916\uff0c\u9084\u53ef\u4ee5\u8207\u6a21\u64ec\u74b0\u5883\u4e92\u52d5 8,000,000 \u6b21\u3002 \u5982\u679c\u758a\u52a0\u89c0\u5bdf/\u91cd\u8907\u52d5\u4f5c\uff0c\u90a3\u9ebc\u6bcf\u500b\u8df3\u904e\u7684\u5e40\u4ecd\u7136\u8a08\u5165\u6b64\u9810\u7b97\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u8207\u8005\u53ea\u80fd\u4f7f\u7528\u63d0\u4f9b\u7684\u6578\u64da\u96c6\uff1b \u6e90\u6587\u4ef6\u63d0\u4ea4\u4e2d\u4e0d\u5f97\u5305\u542b\u5176\u4ed6\u6578\u64da\u96c6\uff0c\u4e5f\u4e0d\u5f97\u5728\u8a13\u7df4\u9014\u4e2d\u4e0b\u8f09\uff0c\u4f46\u5728 6 \u6708 5 \u65e5\u4e4b\u524d\u5c31\u88ab\u516c\u958b\u4e14\u53ef\u7528\u7684\u9810\u8a13\u7df4\u6a21\u578b\u5247\u662f\u88ab\u5141\u8a31\u7684\u3002","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728\u5c0d\u63d0\u4ea4\u7684\u7a0b\u5f0f\u9032\u884c\u6e2c\u8a66\u6642\uff0c\u5404\u500b\u5bb9\u5668\u5c07\u7121\u6cd5\u8a2a\u554f\u4efb\u4f55\u5916\u90e8\u7db2\u7d61\uff0c\u4ee5\u907f\u514d\u4efb\u4f55\u4fe1\u606f\u6d29\u6f0f\u3002 \u6dfb\u52a0\u4e86\u76f8\u95dc\u4f8b\u5916\uff0c\u4ee5\u78ba\u4fdd\u53c3\u8207\u8005\u53ef\u4ee5\u4e0b\u8f09\u548c\u4f7f\u7528\u6d41\u884c\u6846\u67b6\uff08\u5982 PyTorch \u548c TensorFlow\uff09\u4e2d\u5305\u542b\u7684\u9810\u8a13\u7df4\u6a21\u578b\u3002 \u53c3\u8207\u8005\u53ef\u4ee5\u8acb\u6c42\u70ba\u4efb\u4f55\u5176\u4ed6\u516c\u958b\u53ef\u7528\u7684\u9810\u8a13\u7df4\u6a21\u578b\u6dfb\u52a0\u7db2\u7d61\u4f8b\u5916\uff0c\u9019\u4e9b\u6a21\u578b\u5c07\u7531 AICrowd \u9010\u6848\u9a57\u8b49\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5c07\u6e05\u7406\u6240\u6709\u63d0\u4ea4\u7684\u4ee3\u78bc\u5b58\u5132\u5eab\u4ee5\u522a\u9664\u5927\u65bc 30MB \u7684\u6587\u4ef6\uff0c\u4ee5\u78ba\u4fdd\u53c3\u8207\u8005\u4e0d\u6703\u6aa2\u67e5\u5728\u5df2\u767c\u5e03\u7684\u8a13\u7df4\u6578\u64da\u96c6\u4e0a\u9810\u8a13\u7df4\u7684\u4efb\u4f55\u6a21\u578b\u6b0a\u91cd\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4e0d\u51c6\u8a31\u4f7f\u7528\u5728 MineRL \u8a13\u7df4\u5f97\u9810\u8a13\u7df4\u6a21\u578b\uff0c\u6216\u662f\u4f7f\u7528\u548c Minecraft \u6709\u95dc\u6216\u7121\u95dc\u7684\u8cc7\u6599\u8a13\u7df4\u7684\u9810\u8a13\u7df4\u6a21\u578b\u3002\u8a72\u898f\u5247\u7684\u76ee\u7684\u662f\u5141\u8a31\u53c3\u8207\u8005\u4f7f\u7528\u5728 ImageNet \u6216\u985e\u4f3c\u6578\u64da\u96c6\u4e0a\u8a13\u7df4\u904e\u7684\u6a21\u578b\u3002 \u4e0d\u8981\u6feb\u7528\u9019\u9805\u898f\u5247\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7b2c\u4e00\u968e\u6bb5\u7684\u6bd4\u8cfd\u7a0b\u5e8f\u5982\u4e0b\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728\u7b2c\u4e00\u968e\u6bb5\u6642\uff0c\u5718\u968a\u5fc5\u9808\u63d0\u4ea4\u7a0b\u5f0f\u78bc\u5728\u6307\u5b9a\u5e73\u53f0\u4e0a\u4f86\u8a13\u7df4\u4ed6\u5011\u7684\u6a21\u578b\u3002 \u4e26\u4e14\u5fc5\u9808\u5728\u56db\u5929\u5167\u4e2d\u6b62\u8a13\u7df4\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5c0d\u65bc\u6e2c\u9a57\u5206\u6578\u6700\u9ad8\u7684\u5718\u968a\uff0c\u5c07\u6aa2\u67e5\u6b64\u7a0b\u5f0f\u78bc\u662f\u5426\u7b26\u5408\u898f\u5247\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5c0d\u65bc\u767c\u73fe\u9055\u898f\u7684\u63d0\u4ea4\uff0c\u5c07\u806f\u7e6b\u9055\u898f\u5718\u968a\u9032\u884c\u7533\u8a34\u3002 \u9664\u975e\u4e0a\u8a34\u6210\u529f\uff0c\u5426\u5247\u4e3b\u8fa6\u65b9\u5c07\u5f9e\u6bd4\u8cfd\u4e2d\u522a\u9664\u9019\u4e9b\u63d0\u4ea4\u7684\u5167\u5bb9\uff0c\u7136\u5f8c\u6e2c\u9a57\u5176\u4ed6\u63d0\u4ea4\u7684\u5167\u5bb9\uff0c\u76f4\u5230\u7b2c\u4e8c\u968e\u6bb5\u984d\u6eff\u70ba\u6b62\u3002"}),"\n",(0,l.jsx)(n.li,{children:"Research \u7d44\u7684\u524d 15 \u540d\u5718\u968a\u5c07\u9032\u5165\u7b2c\u4e8c\u968e\u6bb5\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7b2c\u4e8c\u968e\u6bb5\u7684\u6bd4\u8cfd\u7a0b\u5e8f\u5982\u4e0b\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728\u7b2c\u4e8c\u968e\u6bb5\u4e2d\uff0c\u5718\u968a\u6700\u591a\u6bcf\u5169\u9031\u63d0\u4ea4\u4e00\u6b21\u4ed6\u5011\u7684\u7a0b\u5f0f\u78bc\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u6bcf\u6b21\u63d0\u4ea4\u5f8c\uff0c\u6a21\u578b\u5c07\u5728\u91cd\u65b0\u6e32\u67d3\u7684\u79c1\u6709\u6578\u64da\u96c6\u548c\u57df\u4e0a\u8a13\u7df4\u56db\u5929\uff0c\u5718\u968a\u5c07\u6536\u5230\u4ed6\u5011\u6a21\u578b\u7684\u6700\u7d42\u8868\u73fe\u3002 \u6578\u64da\u96c6\u548c domain \u5c07\u5305\u542b\u5c0d\u52d5\u4f5c\u7a7a\u9593\u548c\u89c0\u5bdf\u7a7a\u9593\u7684\u5339\u914d\u5ea6\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5728\u56de\u5408\u7d50\u675f\u6642\uff0c\u6700\u7d42\u6392\u540d\u57fa\u65bc\u6bcf\u500b\u5718\u968a\u5728\u7b2c\u4e8c\u968e\u6bb5\u4e2d\u8868\u73fe\u6700\u597d\u7684\u63d0\u4ea4\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u539f\u6587\uff1a",(0,l.jsx)(n.a,{href:"https://www.aicrowd.com/challenges/neurips-2021-minerl-competition/challenge_rules",children:"https://www.aicrowd.com/challenges/neurips-2021-minerl-competition/challenge_rules"})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4039:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/01_hero-68abe12b3fd2885f712d949654a7f19f.webp"},88717:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var l=i(50959);const r={},s=l.createContext(r);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);