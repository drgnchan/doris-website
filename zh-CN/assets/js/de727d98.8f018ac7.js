"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15712],{95788:(e,t,n)=>{n.d(t,{Iu:()=>m,yg:()=>y});var o=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,y=u["".concat(l,".").concat(s)]||u[s]||g[s]||c;return n?o.createElement(y,r(r({ref:t},m),{},{components:n})):o.createElement(y,r({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<c;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var o=n(45072),a=(n(11504),n(95788));const c={title:"Compaction",language:"zh-CN"},r=void 0,i={unversionedId:"advanced/best-practice/compaction",id:"version-1.2/advanced/best-practice/compaction",title:"Compaction",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/advanced/best-practice/compaction.md",sourceDirName:"advanced/best-practice",slug:"/advanced/best-practice/compaction",permalink:"/zh-CN/docs/1.2/advanced/best-practice/compaction",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Compaction",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5982\u4f55\u5f00\u542fDebug\u65e5\u5fd7",permalink:"/zh-CN/docs/1.2/advanced/best-practice/debug-log"},next:{title:"\u8d44\u6e90\u7ba1\u7406",permalink:"/zh-CN/docs/1.2/advanced/resource"}},l={},p=[{value:"Vertical compaction",id:"vertical-compaction",level:2},{value:"Segment compaction",id:"segment-compaction",level:2}],m={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,o.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"compaction"},"Compaction"),(0,a.yg)("p",null,"Doris \u901a\u8fc7\u7c7b\u4f3c LSM-Tree \u7684\u7ed3\u6784\u5199\u5165\u6570\u636e\uff0c\u5728\u540e\u53f0\u901a\u8fc7 Compaction \u673a\u5236\u4e0d\u65ad\u5c06\u5c0f\u6587\u4ef6\u5408\u5e76\u6210\u6709\u5e8f\u7684\u5927\u6587\u4ef6\uff0c\u540c\u65f6\u4e5f\u4f1a\u5904\u7406\u6570\u636e\u7684\u5220\u9664\u3001\u66f4\u65b0\u7b49\u64cd\u4f5c\u3002\u9002\u5f53\u7684\u8c03\u6574 Compaction \u7684\u7b56\u7565\uff0c\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u5347\u5bfc\u5165\u6548\u7387\u548c\u67e5\u8be2\u6548\u7387\u3002\nDoris \u63d0\u4f9b\u5982\u4e0b2\u79cdcompaction\u65b9\u5f0f\u8fdb\u884c\u8c03\u4f18\uff1a"),(0,a.yg)("h2",{id:"vertical-compaction"},"Vertical compaction"),(0,a.yg)("version",{since:"1.2.2"}),(0,a.yg)("p",null,"Vertical compaction \u662f Doris 1.2.2 \u7248\u672c\u4e2d\u5b9e\u73b0\u7684\u65b0\u7684 Compaction \u7b97\u6cd5\uff0c\u7528\u4e8e\u89e3\u51b3\u5927\u5bbd\u8868\u573a\u666f\u4e0b\u7684 Compaction \u6267\u884c\u6548\u7387\u548c\u8d44\u6e90\u5f00\u9500\u95ee\u9898\u3002\u53ef\u4ee5\u6709\u6548\u964d\u4f4eCompaction\u7684\u5185\u5b58\u5f00\u9500\uff0c\u5e76\u63d0\u5347 Compaction \u7684\u6267\u884c\u901f\u5ea6\u3002\n\u5b9e\u9645\u6d4b\u8bd5\u4e2d\uff0cVertical compaction \u4f7f\u7528\u5185\u5b58\u4ec5\u4e3a\u539f\u6709compaction\u7b97\u6cd5\u76841/10\uff0c\u540c\u65f6compaction\u901f\u7387\u63d0\u534715%\u3002"),(0,a.yg)("p",null,"Vertical compaction\u4e2d\u5c06\u6309\u884c\u5408\u5e76\u7684\u65b9\u5f0f\u6539\u53d8\u4e3a\u6309\u5217\u7ec4\u5408\u5e76\uff0c\u6bcf\u6b21\u53c2\u4e0e\u5408\u5e76\u7684\u7c92\u5ea6\u53d8\u6210\u5217\u7ec4\uff0c\u964d\u4f4e\u5355\u6b21compaction\u5185\u90e8\u53c2\u4e0e\u7684\u6570\u636e\u91cf\uff0c\u51cf\u5c11compaction\u671f\u95f4\u7684\u5185\u5b58\u4f7f\u7528\u3002"),(0,a.yg)("p",null,"\u5f00\u542f\u548c\u914d\u7f6e\u65b9\u6cd5(BE \u914d\u7f6e)\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"enable_vertical_compaction = true")," \u53ef\u4ee5\u5f00\u542f\u8be5\u529f\u80fd"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"vertical_compaction_num_columns_per_group = 5")," \u6bcf\u4e2a\u5217\u7ec4\u5305\u542b\u7684\u5217\u4e2a\u6570\uff0c\u7ecf\u6d4b\u8bd5\uff0c\u9ed8\u8ba45\u5217\u4e00\u7ec4compaction\u7684\u6548\u7387\u53ca\u5185\u5b58\u4f7f\u7528\u8f83\u53cb\u597d"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"vertical_compaction_max_segment_size")," \u7528\u4e8e\u914d\u7f6evertical compaction\u4e4b\u540e\u843d\u76d8\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u503c268435456(\u5b57\u8282)")),(0,a.yg)("h2",{id:"segment-compaction"},"Segment compaction"),(0,a.yg)("p",null,"Segment compaction \u4e3b\u8981\u5e94\u5bf9\u5355\u6279\u6b21\u5927\u6570\u636e\u91cf\u7684\u5bfc\u5165\u573a\u666f\u3002\u548c Vertical compaction \u7684\u89e6\u53d1\u673a\u5236\u4e0d\u540c\uff0cSegment compaction \u662f\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u9488\u5bf9\u4e00\u6279\u6b21\u6570\u636e\u5185\uff0c\u591a\u4e2a Segment \u8fdb\u884c\u7684\u5408\u5e76\u64cd\u4f5c\u3002\u8fd9\u79cd\u673a\u5236\u53ef\u4ee5\u6709\u6548\u51cf\u5c11\u6700\u7ec8\u751f\u6210\u7684 Segment \u6570\u91cf\uff0c\u907f\u514d -238 \uff08OLAP_ERR_TOO_MANY_SEGMENTS\uff09\u9519\u8bef\u7684\u51fa\u73b0\u3002\nSegment compaction \u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u51cf\u5c11\u5bfc\u5165\u4ea7\u751f\u7684 segment \u6570\u91cf"),(0,a.yg)("li",{parentName:"ul"},"\u5408\u5e76\u8fc7\u7a0b\u4e0e\u5bfc\u5165\u8fc7\u7a0b\u5e76\u884c\uff0c\u4e0d\u4f1a\u989d\u5916\u589e\u52a0\u5bfc\u5165\u65f6\u95f4"),(0,a.yg)("li",{parentName:"ul"},"\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u7684\u5185\u5b58\u548c\u8ba1\u7b97\u8d44\u6e90\u7684\u4f7f\u7528\u91cf\u4f1a\u6709\u589e\u52a0\uff0c\u4f46\u56e0\u4e3a\u5e73\u644a\u5728\u6574\u4e2a\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u6240\u4ee5\u6da8\u5e45\u8f83\u4f4e"),(0,a.yg)("li",{parentName:"ul"},"\u7ecf\u8fc7 Segment compaction \u540e\u7684\u6570\u636e\u5728\u8fdb\u884c\u540e\u7eed\u67e5\u8be2\u4ee5\u53ca\u6807\u51c6 compaction \u65f6\u4f1a\u6709\u8d44\u6e90\u548c\u6027\u80fd\u4e0a\u7684\u4f18\u52bf")),(0,a.yg)("p",null,"\u5f00\u542f\u548c\u914d\u7f6e\u65b9\u6cd5(BE \u914d\u7f6e)\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"enable_segcompaction = true")," \u53ef\u4ee5\u4f7f\u80fd\u8be5\u529f\u80fd"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"segcompaction_threshold_segment_num")," \u7528\u4e8e\u914d\u7f6e\u5408\u5e76\u7684\u95f4\u9694\u3002\u9ed8\u8ba4 10 \u8868\u793a\u6bcf\u751f\u6210 10 \u4e2a segment \u6587\u4ef6\u5c06\u4f1a\u8fdb\u884c\u4e00\u6b21 segment compaction\u3002\u4e00\u822c\u8bbe\u7f6e\u4e3a 10 - 30\uff0c\u8fc7\u5927\u7684\u503c\u4f1a\u589e\u52a0 segment compaction \u7684\u5185\u5b58\u7528\u91cf\u3002")),(0,a.yg)("p",null,"\u5982\u6709\u4ee5\u4e0b\u573a\u666f\u6216\u95ee\u9898\uff0c\u5efa\u8bae\u5f00\u542f\u6b64\u529f\u80fd\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5bfc\u5165\u5927\u91cf\u6570\u636e\u89e6\u53d1 OLAP_ERR_TOO_MANY_SEGMENTS (errcode -238) \u9519\u8bef\u5bfc\u81f4\u5bfc\u5165\u5931\u8d25\u3002\u6b64\u65f6\u5efa\u8bae\u6253\u5f00 segment compaction \u7684\u529f\u80fd\uff0c\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u5bf9 segment \u8fdb\u884c\u5408\u5e76\u63a7\u5236\u6700\u7ec8\u7684\u6570\u91cf\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u5927\u91cf\u7684\u5c0f\u6587\u4ef6\uff1a\u867d\u7136\u5bfc\u5165\u6570\u636e\u91cf\u4e0d\u5927\uff0c\u4f46\u56e0\u4e3a\u4f4e\u57fa\u6570\u6570\u636e\uff0c\u6216\u56e0\u4e3a\u5185\u5b58\u7d27\u5f20\u89e6\u53d1 memtable \u63d0\u524d\u4e0b\u5237\uff0c\u4ea7\u751f\u5927\u91cf\u5c0f segment  \u6587\u4ef6\u4e5f\u53ef\u80fd\u4f1a\u89e6\u53d1 OLAP_ERR_TOO_MANY_SEGMENTS \u5bfc\u81f4\u5bfc\u5165\u5931\u8d25\u3002\u6b64\u65f6\u5efa\u8bae\u6253\u5f00\u8be5\u529f\u80fd\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5bfc\u5165\u5927\u91cf\u6570\u636e\u540e\u7acb\u5373\u8fdb\u884c\u67e5\u8be2\uff1a\u521a\u5bfc\u5165\u5b8c\u6210\u3001\u6807\u51c6 compaction \u8fd8\u6ca1\u6709\u5b8c\u6210\u5de5\u4f5c\u65f6\uff0c\u6b64\u65f6 segment \u6587\u4ef6\u8fc7\u591a\u4f1a\u5f71\u54cd\u540e\u7eed\u67e5\u8be2\u6548\u7387\u3002\u5982\u679c\u7528\u6237\u6709\u5bfc\u5165\u540e\u7acb\u5373\u67e5\u8be2\u7684\u9700\u6c42\uff0c\u5efa\u8bae\u6253\u5f00\u8be5\u529f\u80fd\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5bfc\u5165\u540e\u6807\u51c6 compaction \u538b\u529b\u5927\uff1asegment compaction \u672c\u8d28\u4e0a\u662f\u628a\u6807\u51c6 compaction \u7684\u4e00\u90e8\u5206\u538b\u529b\u653e\u5728\u4e86\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u5904\u7406\uff0c\u6b64\u65f6\u5efa\u8bae\u6253\u5f00\u8be5\u529f\u80fd\u3002")),(0,a.yg)("p",null,"\u4e0d\u5efa\u8bae\u4f7f\u7528\u7684\u60c5\u51b5\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5bfc\u5165\u64cd\u4f5c\u672c\u8eab\u5df2\u7ecf\u8017\u5c3d\u4e86\u5185\u5b58\u8d44\u6e90\u65f6\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528 segment compaction \u4ee5\u514d\u8fdb\u4e00\u6b65\u589e\u52a0\u5185\u5b58\u538b\u529b\u4f7f\u5bfc\u5165\u5931\u8d25\u3002")),(0,a.yg)("p",null,"\u5173\u4e8e segment compaction \u7684\u5b9e\u73b0\u548c\u6d4b\u8bd5\u7ed3\u679c\u53ef\u4ee5\u67e5\u9605",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12866"},"\u6b64\u94fe\u63a5"),"\u3002"))}g.isMDXComponent=!0}}]);