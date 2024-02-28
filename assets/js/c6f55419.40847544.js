"use strict";(self.webpackChunkflyskypie_github_io=self.webpackChunkflyskypie_github_io||[]).push([[5871],{1162:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=i(1527),r=i(8717);const t={slug:"2022-11-25_3ds_linux_note",authors:["weiji"],tags:["learning note","3ds"]},s="3DS \u5237 Linux \u7b46\u8a18",c={permalink:"/blog/2022-11-25_3ds_linux_note",source:"@site/blog/2022-11-25_3ds_linux_note/index.md",title:"3DS \u5237 Linux \u7b46\u8a18",description:"\u5237 Linux",date:"2022-11-25T00:00:00.000Z",formattedDate:"November 25, 2022",tags:[{label:"learning note",permalink:"/blog/tags/learning-note"},{label:"3ds",permalink:"/blog/tags/3-ds"}],readingTime:6.445,hasTruncateMarker:!1,authors:[{name:"Wei Ji",title:"\u9583\u4eae\u75c7\u5019\u7fa4\u5de5\u7a0b\u5c4d",url:"https://github.com/FlySkyPie",imageURL:"https://avatars.githubusercontent.com/u/9475660",key:"weiji"}],frontMatter:{slug:"2022-11-25_3ds_linux_note",authors:["weiji"],tags:["learning note","3ds"]},unlisted:!1,prevItem:{title:"3DS \u5237\u6a5f\u7b46\u8a18",permalink:"/blog/2022-11-25_3ds_hack_note"},nextItem:{title:"\u5728 Hordes.io \u5be6\u73fe\u5e02\u5834\u76e3\u63a7 (Market Monitor)",permalink:"/blog/2022-06-18_hordes_auction_monitor"}},d={authorsImageUrls:[void 0]},l=[{value:"\u5237 Linux",id:"\u5237-linux",level:2},{value:"\u88fd\u4f5c\u958b\u6a5f\u6620\u50cf\u6a94",id:"\u88fd\u4f5c\u958b\u6a5f\u6620\u50cf\u6a94",level:2},{value:"\u7522\u751f <code>rootfs.cpio.gz</code>",id:"\u7522\u751f-rootfscpiogz",level:3},{value:"\u7de8\u8f2f <code>cpio</code> \u6a94",id:"\u7de8\u8f2f-cpio-\u6a94",level:3},{value:"\u88fd\u4f5c <code>zImage</code>",id:"\u88fd\u4f5c-zimage",level:3},{value:"\u81ea\u52d5\u639b\u8f09",id:"\u81ea\u52d5\u639b\u8f09",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u5237-linux",children:"\u5237 Linux"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u5df2\u7d93\u5237\u5b8c CFW\uff0c\u4e26\u4e14\u5b89\u88dd Luma3DS \u7684\u8a71\uff0c\u5728 3DS \u4e0a\u8dd1\u8d77\u4f86\u4e26\u4e0d\u6703\u592a\u56f0\u96e3\uff0c\u53ea\u8981\u7167\u8457",(0,o.jsx)(n.a,{href:"https://www.gamebrew.org/wiki/Linux_for_3DS",children:"\u6307\u793a"}),"\u4e0b\u8f09\u6a94\u6848\u4e26\u653e\u5230 SD \u5361\u5167\uff0c\u63a5\u8457\u5f9e Luma3DS \u7684 ChainLoader \u958b\u6a5f\u5c31\u80fd\u6210\u529f\u9032\u5165 Linux \u4e86\u3002\u4f7f\u7528\u8005\u70ba ",(0,o.jsx)(n.code,{children:"root"})," \uff0c\u5bc6\u78bc\u70ba ",(0,o.jsx)(n.code,{children:"toor"})," \u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u7136\u800c\u9019\u500b Linux \u7684\u6a94\u6848\u7cfb\u7d71\u662f\u8dd1\u5728 Ram Disk \u4e0a\uff0c\u4e26\u4e14\u9810\u8a2d\u4e0d\u6703\u639b\u8f09\u8a18\u61b6\u5361\uff0c\u56e0\u6b64\u5728\u7cfb\u7d71\u5167\u9032\u884c\u4efb\u4f55\u4fee\u6539\u5728\u958b\u6a5f\u4e4b\u5f8c\u90fd\u6703\u6d88\u5931\u3002\u8981\u628a\u6a94\u6848\u5f04\u9032\u53bb\u7684\u65b9\u6cd5\u6709\u5169\u7a2e\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u5c07\u6a94\u6848\u653e\u5230 SD \u5361\u5167\uff0c\u4e26\u639b\u8f09 ",(0,o.jsx)(n.code,{children:"/dev/vda1"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u5c07\u6a94\u6848\u653e\u5230\u958b\u6a5f\u6620\u50cf\u6a94 ",(0,o.jsx)(n.code,{children:"zImage"})," \u5167"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5176\u5be6\u55ae\u8ad6\u6211\u7684\u76ee\u7684\u662f\u5728 Linux \u8dd1\u4e00\u500b Jvascript \u7a0b\u5f0f\uff0c\u5927\u53ef\u76f4\u63a5\u7528\u639b\u8f09\u7684\u65b9\u5f0f\u8655\u7406\uff0c\u4f46\u662f\u4f7f\u7528 3DS Linux \u7684\u89f8\u63a7\u677f\u6253\u6307\u4ee4\u771f\u7684\u662f\u4e00\u4ef6\u9817\u9ebb\u7169\u7684\u4e8b\u60c5\uff08\u5305\u542b\u639b\u8f09\u6307\u4ee4\uff09\uff0c\u5982\u679c\u53ef\u4ee5\u9810\u8f09\u4e26\u81ea\u52d5\u57f7\u884c\u4e00\u4e9b\u8173\u672c\u514d\u9664\u6211\u624b\u52d5\u8f38\u5165\u7684\u6b65\u9a5f\u662f\u518d\u597d\u4e0d\u904e\u4e86\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u88fd\u4f5c\u958b\u6a5f\u6620\u50cf\u6a94",children:"\u88fd\u4f5c\u958b\u6a5f\u6620\u50cf\u6a94"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u8655\u7406\u81ea\u52d5\u639b\u8f09\u4ee5\u524d\uff0c\u6211\u5011\u8981\u77e5\u9053\u5982\u4f55\u628a\u6771\u897f\u653e\u9032 ",(0,o.jsx)(n.code,{children:"zImage"})," \u5167\uff0c\u9019\u904e\u7a0b\u6d89\u53ca\u5169\u500b\u6b65\u9a5f\uff1a"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u7522\u751f ",(0,o.jsx)(n.code,{children:"rootfs.cpio.gz"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u88fd\u4f5c ",(0,o.jsx)(n.code,{children:"zImage"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"\u7522\u751f-rootfscpiogz",children:["\u7522\u751f ",(0,o.jsx)(n.code,{children:"rootfs.cpio.gz"})]}),"\n",(0,o.jsxs)(n.p,{children:["cpio \u662f UNIX \u4f5c\u696d\u7cfb\u7d71\u7684\u4e00\u500b\u6a94\u6848\u5099\u4efd\u7a0b\u5f0f\u53ca\u6a94\u6848\u683c\u5f0f",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-cpio-intro-b62f93",id:"user-content-fnref-cpio-intro-b62f93","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\u3002cpio \u662f\u4e00\u500b\u6bd4\u8f03\u53e4\u8001\u7684\u5099\u4efd\u547d\u4ee4\uff0c\u4e5f\u662f\u7528\u65bc\u78c1\u5e36\u6a5f\u5099\u4efd\u7684\u5de5\u5177\uff0c\u96d6\u7136\u5982\u6b64\u73fe\u5728\u8a31\u591a\u6642\u4faf\u4ecd\u7136\u9700\u8981\u4f7f\u7528\u9019\u547d\u4ee4\uff0c\u4f8b\u5982\u88fd\u4f5c\u7cfb\u7d71\u5167\u5b58\u6620\u50cf\u6a94\u6642\u7b49\u3002\u50cf\u662f\u7cfb\u7d71\u6620\u50cf\u6a94\u901a\u5e38\u4f4d\u65bc /boot \u4e2d\uff0c\u6587\u4ef6\u540d\u4ee5 initrd \u958b\u982d\u3002",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-cpio-command-b62f93",id:"user-content-fnref-cpio-command-b62f93","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n",(0,o.jsx)(n.p,{children:"\u56e0\u70ba\u5b83\u662f\u57fa\u65bc\u78c1\u5e36\u7684\u5099\u4efd\u5de5\u5177\uff0c\u56e0\u6b64\u7121\u6cd5\u76f4\u63a5\u66ff\u63db\u6389\u8a72\u6a94\u6848\u88e1\u9762\u7684\u7279\u5b9a\u6587\u4ef6\uff0c\u5fc5\u9808\u8981\u628a\u6574\u500b cpio \u89e3\u5305\u9032\u884c\u7de8\u8f2f\u5f8c\u518d\u5305\u56de\u53bb\u3002"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/linux-3ds",children:"linux-3ds"})," \u7684\u5c08\u6848\u6709\u63d0\u4f9b\u4e00\u500b\u6a23\u677f\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f09\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ wget https://github.com/linux-3ds/buildroot/releases/download/latest/rootfs.cpio.gz\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6216\u662f\u4f60\u4e5f\u53ef\u4ee5\u5f9e buildroot \u81ea\u5df1 build \uff0cBuildroot \u662f\u4e00\u500b\u53ef\u9ad8\u5ea6\u5ba2\u88fd\u5316\u7684\u5d4c\u5165\u5f0f Linux \u6620\u50cf\u6a94\u751f\u6210\u5de5\u5177\u3002Buildroot\u5f88\u5f37\u5927\uff0c\u4e5f\u5f88\u5bb9\u6613\u4e0a\u624b\u4f7f\u7528\u3002",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-buildroot-intro-b62f93",id:"user-content-fnref-buildroot-intro-b62f93","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," Linux 3DS \u5c08\u6848\u4e0b\u6709\u4e00\u500b\u5df2\u7d93\u8207\u5148\u6e96\u5099\u597d\u76f8\u95dc\u8a2d\u5b9a\u7684 ",(0,o.jsx)(n.a,{href:"https://github.com/linux-3ds/buildroot",children:"buildroot fork"}),"\uff0c\u7167\u8457",(0,o.jsx)(n.a,{href:"https://github.com/linux-3ds/buildroot/wiki",children:"\u6307\u793a"}),"\u505a\u4e00\u6a23\u5f88\u5feb\u5c31\u80fd\u751f\u6210 ",(0,o.jsx)(n.code,{children:"cpio"})," \u6a94\u4e86\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:['cpio \u4f5c\u70ba initrd \u7684\u683c\u5f0f\uff0c\u800c initrd \u7684\u82f1\u6587\u542b\u7fa9\u662f boot loader initialized RAM disk\uff0c\u5c31\u662f\u7531 boot loader \u521d\u59cb\u5316\u7684 RAM Disk\u3002\u5728 linux \u6838\u5fc3\u555f\u52d5\u524d\uff0c boot loader \u6703\u5c07\u5132\u5b58\u4ecb\u8cea\u4e2d\u7684 initrd \u6a94\u6848\u8f09\u5165\u5230\u8a18\u61b6\u9ad4\uff0c\u6838\u5fc3\u555f\u52d5\u6642\u6703\u5728\u8a2a\u554f\u771f\u6b63\u7684\u6839\u6a94\u6848\u7cfb\u7d71\u524d\u5148\u8a2a\u554f\u8a72\u8a18\u61b6\u9ad4\u4e2d\u7684 initrd \u6a94\u6848\u7cfb\u7d71\u3002\u5728 boot loader \u7d44\u614b\u4e86 initrd \u7684\u60c5\u6cc1\u4e0b\uff0c\u6838\u5fc3\u555f\u52d5\u88ab\u5206\u6210\u4e86\u5169\u500b\u968e\u6bb5\uff0c\u7b2c\u4e00\u968e\u6bb5\u5148\u57f7\u884c initrd\u6a94\u6848\u7cfb\u7d71\u4e2d\u7684"\u67d0\u500b\u6a94\u6848"\uff0c\u5b8c\u6210\u8f09\u5165\u9a45\u52d5\u6a21\u7d44\u7b49\u4efb\u52d9\uff0c\u7b2c\u4e8c\u968e\u6bb5\u624d\u6703\u57f7\u884c\u771f\u6b63\u7684\u6839\u6a94\u6848\u7cfb\u7d71\u4e2d\u7684 /sbin/init \u8655\u7406\u7a0b\u5e8f\u3002',(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-initrd-b62f93",id:"user-content-fnref-initrd-b62f93","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})]}),"\n",(0,o.jsxs)(n.h3,{id:"\u7de8\u8f2f-cpio-\u6a94",children:["\u7de8\u8f2f ",(0,o.jsx)(n.code,{children:"cpio"})," \u6a94"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u5beb\u4e86\u4e00\u500b\u5c0f\u8173\u672c\u4f86\u8655\u7406\u89e3\u5305\u3001\u8986\u84cb\u3001\u5305\u56de\u53bb\u7684\u6b65\u9a5f\uff0c\n\u53ea\u8981\u628a\u6a94\u6848\u653e\u5728 ",(0,o.jsx)(n.code,{children:"original/rootfs.cpio"}),"\uff0c\n\u8981\u8986\u84cb\u7684\u6a94\u6848\u6a39\u653e\u5728 ",(0,o.jsx)(n.code,{children:"override/"})," \u4e0b\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'#!/bin/bash\n\nEXTRACT_TEMPD=$(mktemp -d)\nOUTPUT_TEMPD=$(mktemp -d)\nWORK_PATH=$(pwd)\n\nif [ ! -e "$EXTRACT_TEMPD" ]; then\n    >&2 echo "Failed to create temp directory"\n    exit 1\nfi\n\necho Extract Path: ${EXTRACT_TEMPD}\necho Output Path: ${OUTPUT_TEMPD}\n\n# Extract and Archive again, /dev/console would missing\nmkdir ${EXTRACT_TEMPD}/root\ncd ${EXTRACT_TEMPD}/root\n\ncpio -idv < "${WORK_PATH}/original/rootfs.cpio" 2> ${EXTRACT_TEMPD}/log.txt\ncp -rf "${WORK_PATH}"/override/* ./\n\n#find . > ${OUTPUT_TEMPD}/log-1.txt\nfind . | cpio -ov -H newc > ${OUTPUT_TEMPD}/rootfs.cpio 2> ${OUTPUT_TEMPD}/log.txt\n\ncd ${OUTPUT_TEMPD}\ngzip -c rootfs.cpio > rootfs.cpio.gz\n\nchown <Normal-User> -R ${OUTPUT_TEMPD}\nchgrp <Normal-User> -R ${OUTPUT_TEMPD}\n\nchown <Normal-User> -R ${EXTRACT_TEMPD}\nchgrp <Normal-User> -R ${EXTRACT_TEMPD}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6bd4\u5982\uff0c\u7de8\u8b6f\u51fa\u4f86\u7684\u7a0b\u5f0f\u6703\u4ef0\u8cf4 ",(0,o.jsx)(n.code,{children:"/usr/lib/ld-linux-armhf.so.3"}),"\uff0c\u4f46\u662f linux 3ds \u63d0\u4f9b\u7684 cpio \u4e26\u6c92\u6709\u9019\u500b\u8def\u5f91\uff0c\u5c31\u53ef\u4ee5\u5728 ",(0,o.jsx)(n.code,{children:"override/"})," \u4e0b\u52a0\u5165\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"./usr/lib:\nld-linux-armhf.so.3 -> ../lib/libc.so\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u8a18\u5f97\u57f7\u884c\u64cd\u4f5c\u7684\u6642\u5019\u8981\u6709 root \u6b0a\u9650\uff0c\u56e0\u70ba ",(0,o.jsx)(n.code,{children:"rootfs.cpio"})," \u88e1\u9762\u6709\u4e9b\u6a94\u6848\u985e\u578b\u9700\u8981 root \u624d\u80fd\u65b0\u589e\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"\u88fd\u4f5c-zimage",children:["\u88fd\u4f5c ",(0,o.jsx)(n.code,{children:"zImage"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u7167\u8457",(0,o.jsx)(n.a,{href:"https://github.com/linux-3ds/linux/wiki",children:"\u6307\u5f15"}),"\u5b89\u88dd\u4ef0\u8cf4\u7684\u51fd\u5f0f\u5eab\u3001clone repo\u3001\u628a ",(0,o.jsx)(n.code,{children:"rootfs.cpio.gz"})," \u653e\u5230\u5c08\u6848\u76ee\u9304\u4e0b\uff0c\u63a5\u8457\u57f7\u884c\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ $ ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- make -j$(nproc) nintendo3ds_defconfig all\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5b83\u5c31\u6703 build \u51fa\u5305\u542b ",(0,o.jsx)(n.code,{children:"zImage"})," \u5728\u5167\uff0c\u5728 3DS \u4e0a\u8dd1\u8d77 Linux \u9700\u8981\u7684\u4e00\u4e9b\u6a94\u6848\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u81ea\u52d5\u639b\u8f09",children:"\u81ea\u52d5\u639b\u8f09"}),"\n",(0,o.jsx)(n.p,{children:"\u9019\u500b Linux \u4e26\u6c92\u6709\u8af8\u5982 systemd, rc.local \u4e4b\u985e\u7684\u9ad8\u7d1a\u73a9\u610f\uff0c\u5012\u662f\u6709\u9019\u4e9b\u6771\u897f\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ ls /etc/init.d\nrcK  rcS  S01syslogd  S02klogd  S02sysctl\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"/etc/init.d/rcS"})," \u627f\u64d4 start \u7684\u529f\u80fd ",(0,o.jsx)(n.code,{children:"/etc/init.d/rcK"})," \u627f\u64d4 kill(stop) \u7684\u529f\u80fd\uff0c\u6703\u4f9d\u5e8f\u57f7\u884c ",(0,o.jsx)(n.code,{children:"/etc/init.d/rcS/S(\\d\\d.*)"}),"\uff0c\u5f88\u597d\u7406\u89e3\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u65bc\u662f\u6211\u5c31\u505a\u4e86\u4e00\u500b ",(0,o.jsx)(n.code,{children:"/etc/init.d/S03sdmnt"})," \u4f86\u81ea\u52d5\u639b\u8f09 SD \u5361\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'#!/bin/sh\n\ncase "$1" in\nstart)\necho "Mount SD card"\n# Mount SD card\nmkdir /mnt/sdcard\nmount /dev/vda1 /mnt/sdcard\n;;\nstop)\necho "Unmount SD card"\n# Todo\n;;\n*)\necho "Usage: /etc/init.d/S03sdmnt {start|stop}"\nexit 1\n;;\nesac\n\nexit 0\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u5c0f\u7d50",children:"\u5c0f\u7d50"}),"\n",(0,o.jsxs)(n.p,{children:["\u7814\u7a76\u5230\u9019\u88e1\uff0c\u6703\u767c\u73fe Chain Loading",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-chain_loading-b62f93",id:"user-content-fnref-chain_loading-b62f93","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})," \u7684\u5f71\u5b50\u975e\u5e38\u660e\u986f\uff1a\n\u5237\u9032\u53bb\u7684 boot9strap \u6703 boot Luma3DS\uff1b\nLuma3DS \u6703\u5f9e ",(0,o.jsx)(n.code,{children:"luma/payloads/"})," boot ",(0,o.jsx)(n.code,{children:"firm_linux_loader.firm"}),"\uff1b\n",(0,o.jsx)(n.code,{children:"firm_linux_loader.firm"})," \u518d\u53bb boot ",(0,o.jsx)(n.code,{children:"arm9linuxfw.bin"}),"\uff1b\n",(0,o.jsx)(n.code,{children:"arm9linuxfw.bin"})," \u518d\u7528 ",(0,o.jsx)(n.code,{children:"zImage"})," \u958b\u6a5f\uff08\uff1f\uff09"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"http://creativecommons.org/licenses/by-sa/4.0/",children:(0,o.jsx)(n.img,{src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png",alt:"\u5275\u7528 CC \u6388\u6b0a\u689d\u6b3e"})}),(0,o.jsx)(n.br,{}),"\n","Wei Ji\u4ee5",(0,o.jsx)(n.a,{href:"http://creativecommons.org/licenses/by-sa/4.0/",children:"\u5275\u7528CC \u59d3\u540d\u6a19\u793a-\u76f8\u540c\u65b9\u5f0f\u5206\u4eab 4.0 \u570b\u969b \u6388\u6b0a\u689d\u6b3e"}),"\u91cb\u51fa\u3002"]}),"\n",(0,o.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,o.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{id:"user-content-fn-cpio-intro-b62f93",children:["\n",(0,o.jsxs)(n.p,{children:["Cpio - \u7dad\u57fa\u767e\u79d1\uff0c\u81ea\u7531\u7684\u767e\u79d1\u5168\u66f8. Retrieved 2022-11-25, from ",(0,o.jsx)(n.a,{href:"https://zh.wikipedia.org/zh-tw/Cpio",children:"https://zh.wikipedia.org/zh-tw/Cpio"})," ",(0,o.jsx)(n.a,{href:"#user-content-fnref-cpio-intro-b62f93","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-cpio-command-b62f93",children:["\n",(0,o.jsxs)(n.p,{children:["\u6703\u7d05\u7684 Linux \u7b46\u8a18: cpio\u6307\u4ee4. Retrieved 2022-11-25, from ",(0,o.jsx)(n.a,{href:"http://canred.blogspot.com/2013/04/cpio.html",children:"http://canred.blogspot.com/2013/04/cpio.html"})," ",(0,o.jsx)(n.a,{href:"#user-content-fnref-cpio-command-b62f93","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-buildroot-intro-b62f93",children:["\n",(0,o.jsxs)(n.p,{children:["\u7cbe\u901a\u5d4c\u5165\u5f0fLinux \u7b2c\u4e09\u7ae0\uff1aBuildroot \u2013 LotLab. Retrieved 2022-11-25, from ",(0,o.jsx)(n.a,{href:"https://www.lotlab.org/2020/04/08/mastering-embedded-linux-part-3-buildroot/",children:"https://www.lotlab.org/2020/04/08/mastering-embedded-linux-part-3-buildroot/"})," ",(0,o.jsx)(n.a,{href:"#user-content-fnref-buildroot-intro-b62f93","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-initrd-b62f93",children:["\n",(0,o.jsxs)(n.p,{children:["\u3010Linux\u6280\u8853\u3011Linux\u6838\u5fc3Initrd\u6a5f\u5236\u89e3\u6790\uff0c\u6838\u5fc3\u66f4\u65b0\u6b65\u9a5f\uff0cgrub\u7d44\u614b\u8aaa\u660e-\u963f\u91cc\u96f2\u958b\u767c\u8005\u793e\u5340. Retrieved 2022-11-25, from ",(0,o.jsx)(n.a,{href:"https://developer.aliyun.com/article/445357",children:"https://developer.aliyun.com/article/445357"})," ",(0,o.jsx)(n.a,{href:"#user-content-fnref-initrd-b62f93","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-chain_loading-b62f93",children:["\n",(0,o.jsxs)(n.p,{children:["Chain loading - Wikipedia. Retrieved 2022-11-25, from ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Chain_loading",children:"https://en.wikipedia.org/wiki/Chain_loading"})," ",(0,o.jsx)(n.a,{href:"#user-content-fnref-chain_loading-b62f93","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8717:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var o=i(959);const r={},t=o.createContext(r);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);