"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86936],{95788:(e,l,n)=>{n.d(l,{Iu:()=>g,yg:()=>m});var a=n(11504);function r(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function t(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?t(Object(n),!0).forEach((function(l){r(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function i(e,l){if(null==e)return{};var n,a,r=function(e,l){if(null==e)return{};var n,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var l=a.useContext(u),n=l;return e&&(n="function"==typeof e?e(l):p(p({},l),e)),n},g=function(e){var l=o(e.components);return a.createElement(u.Provider,{value:l},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},c=a.forwardRef((function(e,l){var n=e.components,r=e.mdxType,t=e.originalType,u=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),y=o(n),c=r,m=y["".concat(u,".").concat(c)]||y[c]||s[c]||t;return n?a.createElement(m,p(p({ref:l},g),{},{components:n})):a.createElement(m,p({ref:l},g))}));function m(e,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var t=n.length,p=new Array(t);p[0]=c;var i={};for(var u in l)hasOwnProperty.call(l,u)&&(i[u]=l[u]);i.originalType=e,i[y]="string"==typeof e?e:r,p[1]=i;for(var o=2;o<t;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86652:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var a=n(45072),r=(n(11504),n(95788));const t={title:"Release 1.2.1",language:"zh-CN"},p=void 0,i={unversionedId:"releasenotes/release-1.2.1",id:"releasenotes/release-1.2.1",title:"Release 1.2.1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/release-1.2.1.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.2.1",permalink:"/zh-CN/docs/dev/releasenotes/release-1.2.1",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 1.2.1",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 1.2.2",permalink:"/zh-CN/docs/dev/releasenotes/release-1.2.2"},next:{title:"Release 1.2.0",permalink:"/zh-CN/docs/dev/releasenotes/release-1.2.0"}},u={},o=[{value:"\u652f\u6301\u9ad8\u7cbe\u5ea6\u5c0f\u6570 DecimalV3",id:"\u652f\u6301\u9ad8\u7cbe\u5ea6\u5c0f\u6570-decimalv3",level:3},{value:"\u652f\u6301 Iceberg V2",id:"\u652f\u6301-iceberg-v2",level:3},{value:"\u652f\u6301 OR \u6761\u4ef6\u8f6c IN",id:"\u652f\u6301-or-\u6761\u4ef6\u8f6c-in",level:3},{value:"\u4f18\u5316 JSONB \u7c7b\u578b\u7684\u5bfc\u5165\u548c\u67e5\u8be2\u6027\u80fd",id:"\u4f18\u5316-jsonb-\u7c7b\u578b\u7684\u5bfc\u5165\u548c\u67e5\u8be2\u6027\u80fd",level:3},{value:"Stream load \u652f\u6301\u5e26\u5f15\u53f7\u7684 CSV \u6570\u636e",id:"stream-load-\u652f\u6301\u5e26\u5f15\u53f7\u7684-csv-\u6570\u636e",level:3},{value:"Broker \u652f\u6301\u817e\u8baf\u4e91 CHDFS \u548c \u767e\u5ea6\u4e91 BOS \u3001AFS",id:"broker-\u652f\u6301\u817e\u8baf\u4e91-chdfs-\u548c-\u767e\u5ea6\u4e91-bos-afs",level:3},{value:"\u65b0\u589e\u51fd\u6570",id:"\u65b0\u589e\u51fd\u6570",level:3},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:3},{value:"\u884c\u4e3a\u6539\u53d8",id:"\u884c\u4e3a\u6539\u53d8",level:3}],g={toc:o},y="wrapper";function s(e){let{components:l,...n}=e;return(0,r.yg)(y,(0,a.c)({},g,n,{components:l,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u5728 1.2.1 \u7248\u672c\u4e2d\uff0cDoris \u56e2\u961f\u5df2\u7ecf\u4fee\u590d\u4e86\u81ea 1.2.0 \u7248\u672c\u53d1\u5e03\u4ee5\u6765\u7ea6 200 \u4e2a\u95ee\u9898\u6216\u6027\u80fd\u6539\u8fdb\u9879\u3002\u540c\u65f6\uff0c1.2.1 \u7248\u672c\u4e5f\u4f5c\u4e3a 1.2 \u7684\u7b2c\u4e00\u4e2a\u8fed\u4ee3\u7248\u672c\uff0c\u5177\u5907\u66f4\u9ad8\u7684\u7a33\u5b9a\u6027\uff0c\u5efa\u8bae\u6240\u6709\u7528\u6237\u5347\u7ea7\u5230\u8fd9\u4e2a\u7248\u672c\u3002"),(0,r.yg)("h1",{id:"\u4f18\u5316\u6539\u8fdb"},"\u4f18\u5316\u6539\u8fdb"),(0,r.yg)("h3",{id:"\u652f\u6301\u9ad8\u7cbe\u5ea6\u5c0f\u6570-decimalv3"},"\u652f\u6301\u9ad8\u7cbe\u5ea6\u5c0f\u6570 DecimalV3"),(0,r.yg)("p",null,"\u652f\u6301\u7cbe\u5ea6\u66f4\u9ad8\u548c\u6027\u80fd\u66f4\u597d\u7684 DecimalV3\uff0c\u76f8\u8f83\u4e8e\u8fc7\u53bb\u7248\u672c\u5177\u6709\u4ee5\u4e0b\u4f18\u52bf\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53ef\u8868\u793a\u8303\u56f4\u66f4\u5927\uff0c\u53d6\u503c\u8303\u56f4\u90fd\u8fdb\u884c\u4e86\u660e\u663e\u6269\u5145\uff0c\u6709\u6548\u6570\u5b57\u8303\u56f4 ","[1,38]","\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6027\u80fd\u66f4\u9ad8\uff0c\u6839\u636e\u4e0d\u540c\u7cbe\u5ea6\uff0c\u5360\u7528\u5b58\u50a8\u7a7a\u95f4\u53ef\u81ea\u9002\u5e94\u8c03\u6574\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u652f\u6301\u66f4\u5b8c\u5907\u7684\u7cbe\u5ea6\u63a8\u6f14\uff0c\u5bf9\u4e8e\u4e0d\u540c\u7684\u8868\u8fbe\u5f0f\uff0c\u5e94\u7528\u4e0d\u540c\u7684\u7cbe\u5ea6\u63a8\u6f14\u89c4\u5219\u5bf9\u7ed3\u679c\u7684\u7cbe\u5ea6\u8fdb\u884c\u63a8\u6f14\u3002"))),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DECIMALV3"},"DecimalV3")),(0,r.yg)("h3",{id:"\u652f\u6301-iceberg-v2"},"\u652f\u6301 Iceberg V2"),(0,r.yg)("p",null,"\u652f\u6301 Iceberg V2 (\u4ec5\u652f\u6301 Position Delete\uff0c Equality Delete \u4f1a\u5728\u540e\u7eed\u7248\u672c\u652f\u6301)\uff0c\u53ef\u4ee5\u901a\u8fc7 Multi-Catalog \u529f\u80fd\u8bbf\u95ee Iceberg V2 \u683c\u5f0f\u7684\u8868\u3002"),(0,r.yg)("h3",{id:"\u652f\u6301-or-\u6761\u4ef6\u8f6c-in"},"\u652f\u6301 OR \u6761\u4ef6\u8f6c IN"),(0,r.yg)("p",null,"\u652f\u6301\u5c06 where \u6761\u4ef6\u8868\u8fbe\u5f0f\u540e\u7684 or \u6761\u4ef6\u8f6c\u6362\u6210 in \u6761\u4ef6\uff0c\u5728\u90e8\u5206\u573a\u666f\u4e2d\u53ef\u4ee5\u63d0\u5347\u6267\u884c\u6548\u7387\u3002 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15437"},"#15437")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12872"},"#12872")),(0,r.yg)("h3",{id:"\u4f18\u5316-jsonb-\u7c7b\u578b\u7684\u5bfc\u5165\u548c\u67e5\u8be2\u6027\u80fd"},"\u4f18\u5316 JSONB \u7c7b\u578b\u7684\u5bfc\u5165\u548c\u67e5\u8be2\u6027\u80fd"),(0,r.yg)("p",null,"\u4f18\u5316 JSONB \u7c7b\u578b\u7684\u5bfc\u5165\u548c\u67e5\u8be2\u6027\u80fd\uff0c\u5728\u6d4b\u8bd5\u6570\u636e\u4e0a\u7ea6\u6709 70% \u7684\u6027\u80fd\u63d0\u5347\u3002  ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15219"},"#15219"),"  ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15219"},"#15219")),(0,r.yg)("h3",{id:"stream-load-\u652f\u6301\u5e26\u5f15\u53f7\u7684-csv-\u6570\u636e"},"Stream load \u652f\u6301\u5e26\u5f15\u53f7\u7684 CSV \u6570\u636e"),(0,r.yg)("p",null,"\u901a\u8fc7\u5bfc\u5165\u4efb\u52a1\u53c2\u6570 ",(0,r.yg)("inlineCode",{parentName:"p"},"trim_double_quotes")," \u6765\u63a7\u5236\uff0c\u9ed8\u8ba4\u503c\u4e3a false\uff0c\u4e3a true \u65f6\u8868\u793a\u88c1\u526a\u6389 CSV \u6587\u4ef6\u6bcf\u4e2a\u5b57\u6bb5\u6700\u5916\u5c42\u7684\u53cc\u5f15\u53f7\u3002  ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15241"},"#15241")),(0,r.yg)("h3",{id:"broker-\u652f\u6301\u817e\u8baf\u4e91-chdfs-\u548c-\u767e\u5ea6\u4e91-bos-afs"},"Broker \u652f\u6301\u817e\u8baf\u4e91 CHDFS \u548c \u767e\u5ea6\u4e91 BOS \u3001AFS"),(0,r.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Broker \u8bbf\u95ee\u5b58\u50a8\u5728\u817e\u8baf\u4e91 CHDFS \u548c \u767e\u5ea6\u667a\u80fd\u4e91 BOS\u3001AFS \u4e0a\u7684\u6570\u636e\u3002 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15297"},"#15297")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15448"},"#15448")),(0,r.yg)("h3",{id:"\u65b0\u589e\u51fd\u6570"},"\u65b0\u589e\u51fd\u6570"),(0,r.yg)("p",null,"\u65b0\u589e\u51fd\u6570 ",(0,r.yg)("inlineCode",{parentName:"p"},"substring_index"),"\u3002 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15373"},"#15373")),(0,r.yg)("h1",{id:"\u95ee\u9898\u4fee\u590d"},"\u95ee\u9898\u4fee\u590d"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u590d\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u4ece 1.1.x \u7248\u672c\u5347\u7ea7\u5230 1.2.0 \u7248\u672c\u540e\uff0c\u7528\u6237\u6743\u9650\u4fe1\u606f\u4e22\u5931\u7684\u95ee\u9898\u3002 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15144"},"#15144"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u590d\u4f7f\u7528 date/datetimev2 \u7c7b\u578b\u8fdb\u884c\u5206\u533a\u65f6\uff0c\u5206\u533a\u503c\u9519\u8bef\u7684\u95ee\u9898\u3002 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15094"},"#15094"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u590d\u90e8\u5206\u5df2\u53d1\u5e03\u529f\u80fd\u7684 Bug\uff0c\u5177\u4f53\u5217\u8868\u53ef\u53c2\u9605\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pulls?q=is%3Apr+label%3Adev%2F1.2.1-merged+is%3Aclosed"},"PR List")))),(0,r.yg)("h1",{id:"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"},"\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"),(0,r.yg)("h3",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8bf7\u52ff\u4f7f\u7528 JDK11 \u4f5c\u4e3a BE \u7684\u8fd0\u884c\u65f6 JDK\uff0c\u4f1a\u5bfc\u81f4 BE Crash\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8be5\u7248\u672c\u5bf9csv\u683c\u5f0f\u7684\u8bfb\u53d6\u6027\u80fd\u6709\u4e0b\u964d\uff0c\u4f1a\u5f71\u54cdcsv\u683c\u5f0f\u7684\u5bfc\u5165\u548c\u8bfb\u53d6\u6548\u7387\uff0c\u6211\u4eec\u4f1a\u5728\u4e0b\u4e00\u4e2a\u4e09\u4f4d\u7248\u672c\u5c3d\u5feb\u4fee\u590d"))),(0,r.yg)("h3",{id:"\u884c\u4e3a\u6539\u53d8"},"\u884c\u4e3a\u6539\u53d8"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"BE \u914d\u7f6e\u9879 ",(0,r.yg)("inlineCode",{parentName:"p"},"high_priority_flush_thread_num_per_store")," \u9ed8\u8ba4\u503c\u7531 1 \u6539\u6210 6 \uff0c\u4ee5\u63d0\u5347 Routine Load \u7684\u5199\u5165\u6548\u7387\u3002",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14775"},"#14775"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FE \u914d\u7f6e\u9879 ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_new_load_scan_node")," \u9ed8\u8ba4\u503c\u6539\u4e3a true \uff0c\u5c06\u4f7f\u7528\u65b0\u7684 File Scan Node \u6267\u884c\u5bfc\u5165\u4efb\u52a1\uff0c\u5bf9\u7528\u6237\u65e0\u5f71\u54cd\u3002 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14808"},"#14808"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664 FE \u914d\u7f6e\u9879 ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_multi_catalog"),"\uff0c\u9ed8\u8ba4\u5f00\u542f Multi-Catalog \u529f\u80fd\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u5f3a\u5236\u5f00\u542f\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u3002\u4f1a\u8bdd\u53d8\u91cf ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_vectorized_engine")," \u5c06\u4e0d\u518d\u751f\u6548\uff0c\u5982\u9700\u91cd\u65b0\u751f\u6548\uff0c\u9700\u5c06 FE \u914d\u7f6e\u9879 ",(0,r.yg)("inlineCode",{parentName:"p"},"disable_enable_vectorized_engine")," \u8bbe\u4e3a false\uff0c\u5e76\u91cd\u542f FE\u3002 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15213"},"#15213")))),(0,r.yg)("h1",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,r.yg)("p",null,"\u6709 45 \u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u5230 1.2.1 \u7248\u672c\u7684\u5f00\u53d1\u4e0e\u5b8c\u5584\u4e2d\uff0c\u611f\u8c22\u4ed6\u4eec\u7684\u4ed8\u51fa\uff0c\u4ed6\u4eec\u5206\u522b\u662f\uff1a"),(0,r.yg)("p",null,"@adonis0147"),(0,r.yg)("p",null,"@AshinGau"),(0,r.yg)("p",null,"@BePPPower"),(0,r.yg)("p",null,"@BiteTheDDDDt"),(0,r.yg)("p",null,"@ByteYue"),(0,r.yg)("p",null,"@caiconghui"),(0,r.yg)("p",null,"@cambyzju"),(0,r.yg)("p",null,"@chenlinzhong"),(0,r.yg)("p",null,"@dataroaring"),(0,r.yg)("p",null,"@Doris-Extras"),(0,r.yg)("p",null,"@dutyu"),(0,r.yg)("p",null,"@eldenmoon"),(0,r.yg)("p",null,"@englefly"),(0,r.yg)("p",null,"@freemandealer"),(0,r.yg)("p",null,"@Gabriel39"),(0,r.yg)("p",null,"@HappenLee"),(0,r.yg)("p",null,"@Henry2SS"),(0,r.yg)("p",null,"@hf200012"),(0,r.yg)("p",null,"@jacktengg"),(0,r.yg)("p",null,"@Jibing-Li"),(0,r.yg)("p",null,"@Kikyou1997"),(0,r.yg)("p",null,"@liaoxin01"),(0,r.yg)("p",null,"@luozenglin"),(0,r.yg)("p",null,"@morningman"),(0,r.yg)("p",null,"@morrySnow"),(0,r.yg)("p",null,"@mrhhsg"),(0,r.yg)("p",null,"@nextdreamblue"),(0,r.yg)("p",null,"@qidaye"),(0,r.yg)("p",null,"@spaces-X"),(0,r.yg)("p",null,"@starocean999"),(0,r.yg)("p",null,"@wangshuo128"),(0,r.yg)("p",null,"@weizuo93"),(0,r.yg)("p",null,"@wsjz"),(0,r.yg)("p",null,"@xiaokang"),(0,r.yg)("p",null,"@xinyiZzz"),(0,r.yg)("p",null,"@xutaoustc"),(0,r.yg)("p",null,"@yangzhg"),(0,r.yg)("p",null,"@yiguolei"),(0,r.yg)("p",null,"@yixiutt"),(0,r.yg)("p",null,"@Yulei-Yang"),(0,r.yg)("p",null,"@yuxuan-luo"),(0,r.yg)("p",null,"@zenoyang"),(0,r.yg)("p",null,"@zhangstar333"),(0,r.yg)("p",null,"@zhannngchen"),(0,r.yg)("p",null,"@zhengshengjun"))}s.isMDXComponent=!0}}]);