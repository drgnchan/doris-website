"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93212],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>y});var r=t(296540);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,p=function(e,a){if(null==e)return{};var t,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=r.createContext({}),c=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},s=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,p=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(t),u=p,y=g["".concat(o,".").concat(u)]||g[u]||m[u]||l;return t?r.createElement(y,n(n({ref:a},s),{},{components:t})):r.createElement(y,n({ref:a},s))}));function y(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var l=t.length,n=new Array(l);n[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[g]="string"==typeof e?e:p,n[1]=i;for(var c=2;c<l;c++)n[c]=t[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},711999:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(58168),p=(t(296540),t(15680));const l={title:"Release 2.0-Alpha",language:"zh-CN"},n=void 0,i={unversionedId:"releasenotes/release-2.0-Alpha",id:"releasenotes/release-2.0-Alpha",title:"Release 2.0-Alpha",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/release-2.0-Alpha.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0-Alpha",permalink:"/zh-CN/docs/dev/releasenotes/release-2.0-Alpha",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 2.0-Alpha",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 2.0-Beta",permalink:"/zh-CN/docs/dev/releasenotes/release-2.0-Beta"},next:{title:"Release 1.2.7",permalink:"/zh-CN/docs/dev/releasenotes/release-1.2.7"}},o={},c=[{value:"1. \u534a\u7ed3\u6784\u5316\u6570\u636e\u5b58\u50a8\u4e0e\u6781\u901f\u5206\u6790",id:"1-\u534a\u7ed3\u6784\u5316\u6570\u636e\u5b58\u50a8\u4e0e\u6781\u901f\u5206\u6790",level:3},{value:"2. \u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u70b9\u67e5\u8be2",id:"2-\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u70b9\u67e5\u8be2",level:3},{value:"3. Vertical Compaction\uff08\u9ed8\u8ba4\u5f00\u542f\uff09",id:"3-vertical-compaction\u9ed8\u8ba4\u5f00\u542f",level:3},{value:"4. \u51b7\u70ed\u6570\u636e\u5206\u79bb",id:"4-\u51b7\u70ed\u6570\u636e\u5206\u79bb",level:3},{value:"5. Pipeline \u6267\u884c\u5f15\u64ce\uff08\u9ed8\u8ba4\u672a\u5f00\u542f\uff09",id:"5-pipeline-\u6267\u884c\u5f15\u64ce\u9ed8\u8ba4\u672a\u5f00\u542f",level:3},{value:"6. \u57fa\u4e8e\u4ee3\u4ef7\u6a21\u578b\u7684\u5168\u65b0\u67e5\u8be2\u4f18\u5316\u5668 Nereids \uff08\u9ed8\u8ba4\u672a\u5f00\u542f\uff09",id:"6-\u57fa\u4e8e\u4ee3\u4ef7\u6a21\u578b\u7684\u5168\u65b0\u67e5\u8be2\u4f18\u5316\u5668-nereids-\u9ed8\u8ba4\u672a\u5f00\u542f",level:3}],s={toc:c},g="wrapper";function m(e){let{components:a,...t}=e;return(0,p.yg)(g,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,p.yg)("p",null,"Apache Doris 2.0-Alpha \u7248\u672c\u662f 2.0 \u7cfb\u5217\u7684\u9996\u4e2a\u7248\u672c\uff0c\u5305\u542b\u4e86\u5012\u6392\u7d22\u5f15\u3001\u9ad8\u5e76\u53d1\u70b9\u67e5\u8be2\u3001\u51b7\u70ed\u6570\u636e\u5206\u79bb\u3001Pipeline \u6267\u884c\u5f15\u64ce\u3001\u5168\u65b0\u67e5\u8be2\u4f18\u5316\u5668 Nereids \u7b49\u4f17\u591a\u91cd\u8981\u7279\u6027\uff0c\u4e3b\u8981\u662f\u4f5c\u4e3a\u6700\u65b0\u7279\u6027\u7684\u529f\u80fd\u9a8c\u8bc1\u3002\u56e0\u6b64\u5efa\u8bae\u5728\u65b0\u7684\u6d4b\u8bd5\u96c6\u7fa4\u4e2d\u90e8\u7f72 2.0-Alpha \u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4f46",(0,p.yg)("strong",{parentName:"p"},"\u4e0d\u5e94\u90e8\u7f72\u5728\u751f\u4ea7\u96c6\u7fa4\u4e2d"),"\u3002"),(0,p.yg)("h1",{id:"\u91cd\u8981\u7279\u6027"},"\u91cd\u8981\u7279\u6027"),(0,p.yg)("h3",{id:"1-\u534a\u7ed3\u6784\u5316\u6570\u636e\u5b58\u50a8\u4e0e\u6781\u901f\u5206\u6790"},"1. \u534a\u7ed3\u6784\u5316\u6570\u636e\u5b58\u50a8\u4e0e\u6781\u901f\u5206\u6790"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5168\u65b0\u5012\u6392\u7d22\u5f15\uff1a\u652f\u6301\u5168\u6587\u68c0\u7d22\u4ee5\u53ca\u66f4\u52a0\u9ad8\u6548\u7684\u7b49\u503c\u67e5\u8be2\u3001\u8303\u56f4\u67e5\u8be2"),(0,p.yg)("ul",{parentName:"li"},(0,p.yg)("li",{parentName:"ul"},"\u589e\u52a0\u4e86\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u5168\u6587\u68c0\u7d22",(0,p.yg)("ul",{parentName:"li"},(0,p.yg)("li",{parentName:"ul"},"\u652f\u6301\u82f1\u6587\u3001\u4e2d\u6587\u5206\u8bcd"),(0,p.yg)("li",{parentName:"ul"},"\u652f\u6301\u5b57\u7b26\u4e32\u7c7b\u578b\u548c\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b\u7684\u5168\u6587\u68c0\u7d22"))),(0,p.yg)("li",{parentName:"ul"},"\u652f\u6301\u5b57\u7b26\u4e32\u3001\u6570\u503c\u3001\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\u7684\u7b49\u503c\u67e5\u8be2\u548c\u8303\u56f4\u67e5\u8be2"),(0,p.yg)("li",{parentName:"ul"},"\u652f\u6301\u591a\u4e2a\u6761\u4ef6\u7684\u903b\u8f91\u7ec4\u5408\uff0c\u4e0d\u4ec5\u652f\u6301 AND\uff0c\u8fd8\u652f\u6301 OR \u548c not "),(0,p.yg)("li",{parentName:"ul"},"\u5728 esrally http \u65e5\u5fd7\u57fa\u51c6\u6d4b\u8bd5\u4e2d\uff0c\u4e0e Elasticsearch \u76f8\u6bd4\u6548\u7387\u66f4\u9ad8\uff1a\u6570\u636e\u5bfc\u5165\u901f\u5ea6\u63d0\u9ad8\u4e86 4 \u500d\uff0c\u5b58\u50a8\u8d44\u6e90\u6d88\u8017\u51cf\u5c11\u4e8680%\uff0c\u67e5\u8be2\u901f\u5ea6\u63d0\u9ad8\u4e86 2 \u500d\u4ee5\u4e0a")),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003\u6587\u6863\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/data-table/index/inverted-index"},"https://doris.apache.org/zh-CN/docs/dev/data-table/index/inverted-index"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u590d\u6742\u6570\u636e\u7c7b\u578b"),(0,p.yg)("ul",{parentName:"li"},(0,p.yg)("li",{parentName:"ul"},"JSONB \u6570\u636e\u7c7b\u578b\u901a\u8fc7 simdjson \u83b7\u5f97\u66f4\u9ad8\u6548\u7684\u9996\u6b21\u6570\u636e\u89e3\u6790\u901f\u5ea6"),(0,p.yg)("li",{parentName:"ul"},"ARRAY \u6570\u636e\u7c7b\u578b\u66f4\u52a0\u6210\u719f\uff0c\u589e\u52a0\u4e86\u6570\u5341\u4e2a\u6570\u7ec4\u51fd\u6570"),(0,p.yg)("li",{parentName:"ul"},"\u65b0\u589e MAP \u6570\u636e\u7c7b\u578b\uff0c\u7528\u4e8e\u5b58\u50a8 Key-Value \u952e\u503c\u5bf9\u6570\u636e"),(0,p.yg)("li",{parentName:"ul"},"\u65b0\u589e STRUCT \u6570\u636e\u7c7b\u578b\uff0c\u901a\u8fc7\u6570\u636e\u7c7b\u578b\u7684\u5d4c\u5957\u53ef\u4ee5\u5b58\u50a8\u66f4\u52a0\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784")))),(0,p.yg)("h3",{id:"2-\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u70b9\u67e5\u8be2"},"2. \u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u70b9\u67e5\u8be2"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5f15\u5165\u884c\u5f0f\u5b58\u50a8\u683c\u5f0f\u548c\u884c\u5f0f\u7f13\u5b58\u4ee5\u52a0\u5feb\u6574\u884c\u6570\u636e\u7684\u8bfb\u53d6\u901f\u5ea6")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5b9e\u73b0\u77ed\u8def\u5f84\u67e5\u8be2\u8ba1\u5212\uff0c\u5728\u6267\u884c\u4e3b\u952e\u67e5\u8be2\u5982 ",(0,p.yg)("inlineCode",{parentName:"p"},"SELECT * FROM tablex WHERE id = xxx"),"\u6027\u80fd\u8868\u73b0\u66f4\u4f73")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4f7f\u7528 PreparedStatement \u7f13\u5b58\u5df2\u7f16\u8bd1\u7684\u67e5\u8be2\u8ba1\u5212")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5728\u5355\u53f0 16 Core 64G \u5185\u5b58 4*1T \u786c\u76d8\u89c4\u683c\u7684\u4e91\u670d\u52a1\u5668\u4e0a\u5b9e\u73b0\u4e86\u5355\u8282\u70b9 30000 QPS \u7684\u5e76\u53d1\u8868\u73b0\uff0c\u8f83\u8fc7\u53bb\u7248\u672c\u63d0\u5347\u8d85 20\u500d"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003\u6587\u6863\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/query-acceleration/hight-concurrent-point-query"},"https://doris.apache.org/zh-CN/docs/dev/query-acceleration/hight-concurrent-point-query")))),(0,p.yg)("h3",{id:"3-vertical-compaction\u9ed8\u8ba4\u5f00\u542f"},"3. Vertical Compaction\uff08\u9ed8\u8ba4\u5f00\u542f\uff09"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5c06 Rowset \u6309\u7167\u5217\u5207\u5206\u4e3a\u5217\u7ec4\uff0c\u6309\u5217\u5408\u5e76\u6570\u636e\uff0c\u5355\u6b21\u5408\u5e76\u53ea\u9700\u8981\u52a0\u8f7d\u90e8\u5206\u5217\u7684\u6570\u636e\uff0c\u56e0\u6b64\u80fd\u591f\u6781\u5927\u51cf\u5c11\u5408\u5e76\u8fc7\u7a0b\u4e2d\u7684\u5185\u5b58\u5360\u7528\uff0c\u63d0\u9ad8\u538b\u7f29\u7684\u6267\u884c\u901f\u5ea6\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5728\u5b9e\u9645\u6d4b\u8bd5\u4e2d\uff0cVertical Compaction \u4f7f\u7528\u5185\u5b58\u4ec5\u4e3a\u539f\u6709 Compaction \u7b97\u6cd5\u7684 1/10\uff0cCompaction \u901f\u7387\u63d0\u5347 15%\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003\u6587\u6863\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/advanced/best-practice/compaction/#vertical-compaction"},"https://doris.apache.org/zh-CN/docs/dev/advanced/best-practice/compaction/#vertical-compaction")))),(0,p.yg)("h3",{id:"4-\u51b7\u70ed\u6570\u636e\u5206\u79bb"},"4. \u51b7\u70ed\u6570\u636e\u5206\u79bb"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SQL \u8bbe\u7f6e\u51b7\u70ed\u6570\u636e\u7b56\u7565\uff0c\u4ece\u800c\u5c06\u5386\u53f2\u6570\u636e\u8f6c\u79fb\u5230\u5bf9\u8c61\u5b58\u50a8\u7b49\u5ec9\u4ef7\u5b58\u50a8\u4e2d\uff0c\u4ee5\u964d\u4f4e\u5b58\u50a8\u6210\u672c\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u51b7\u6570\u636e\u4ecd\u7136\u53ef\u4ee5\u88ab\u76f4\u63a5\u8bbf\u95ee\uff0cDoris \u63d0\u4f9b\u4e86\u672c\u5730\u7f13\u5b58\u4ee5\u63d0\u9ad8\u51b7\u6570\u636e\u7684\u8bbf\u95ee\u6548\u7387\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003\u6587\u6863\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/advanced/cold_hot_separation"},"https://doris.apache.org/zh-CN/docs/dev/advanced/cold_hot_separation")))),(0,p.yg)("h3",{id:"5-pipeline-\u6267\u884c\u5f15\u64ce\u9ed8\u8ba4\u672a\u5f00\u542f"},"5. Pipeline \u6267\u884c\u5f15\u64ce\uff08\u9ed8\u8ba4\u672a\u5f00\u542f\uff09"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u963b\u585e\u7b97\u5b50\u5f02\u6b65\u5316\uff1a\u5404\u4e2a\u67e5\u8be2\u6267\u884c\u8fc7\u7a0b\u4e4b\u4e2d\u7684\u963b\u585e\u7b97\u5b50\u88ab\u62c6\u5206\u6210\u4e0d\u540c Pipeline\uff0c\u5404\u4e2a Pipeline \u80fd\u5426\u83b7\u53d6\u6267\u884c\u7ebf\u7a0b\u8c03\u5ea6\u6267\u884c\u53d6\u51b3\u4e8e\u524d\u7f6e\u6570\u636e\u662f\u5426\u5c31\u7eea\u3002\u963b\u585e\u7b97\u5b50\u5c06\u4e0d\u518d\u5360\u7528\u7ebf\u7a0b\u8d44\u6e90\uff0c\u4e0d\u518d\u4ea7\u751f\u7ebf\u7a0b\u5207\u6362\u7684\u5f00\u9500\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u81ea\u9002\u5e94\u8d1f\u8f7d\uff1a\u91c7\u7528\u591a\u7ea7\u53cd\u9988\u961f\u5217\u6765\u8c03\u5ea6\u67e5\u8be2\u4f18\u5148\u7ea7\u3002\u5728\u6df7\u5408\u8d1f\u8f7d\u573a\u666f\u4e2d\uff0c\u6bcf\u4e2a\u67e5\u8be2\u90fd\u53ef\u4ee5\u516c\u5e73\u5730\u5206\u914d\u5230\u4e00\u4e2a\u56fa\u5b9a\u7684\u7ebf\u7a0b\u8c03\u5ea6\u65f6\u95f4\u7247\uff0c\u4ece\u800c\u786e\u4fdd Doris \u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u8d1f\u8f7d\u4e0b\u5177\u6709\u66f4\u7a33\u5b9a\u7684\u6027\u80fd\u8868\u73b0\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u53ef\u63a7\u7684\u7ebf\u7a0b\u6570\u76ee\uff1aPipeline \u6267\u884c\u5f15\u64ce\u9ed8\u8ba4\u7684\u6267\u884c\u7ebf\u7a0b\u6570\u76ee\u4e3a CPU \u548c\u6838\u6570\uff0cDoris \u542f\u52a8\u4e86\u5bf9\u5e94\u7684\u6267\u884c\u7ebf\u7a0b\u6c60\u8fdb\u884c\u6267\u884c\u7ebf\u7a0b\u7684\u7ba1\u7406\u3002\u7528\u6237\u7684 SQL \u6267\u884c\u548c\u7ebf\u7a0b\u8fdb\u884c\u4e86\u89e3\u7ed1\uff0c\u5bf9\u4e8e\u7ebf\u7a0b\u7684\u8d44\u6e90\u4f7f\u7528\u66f4\u52a0\u53ef\u63a7\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003\u6587\u6863\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/query-acceleration/pipeline-execution-engine"},"https://doris.apache.org/zh-CN/docs/dev/query-acceleration/pipeline-execution-engine")))),(0,p.yg)("h3",{id:"6-\u57fa\u4e8e\u4ee3\u4ef7\u6a21\u578b\u7684\u5168\u65b0\u67e5\u8be2\u4f18\u5316\u5668-nereids-\u9ed8\u8ba4\u672a\u5f00\u542f"},"6. \u57fa\u4e8e\u4ee3\u4ef7\u6a21\u578b\u7684\u5168\u65b0\u67e5\u8be2\u4f18\u5316\u5668 Nereids \uff08\u9ed8\u8ba4\u672a\u5f00\u542f\uff09"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u66f4\u667a\u80fd\uff1a\u65b0\u4f18\u5316\u5668\u5c06\u6bcf\u4e2a RBO \u548c CBO \u7684\u4f18\u5316\u70b9\u4ee5\u89c4\u5219\u7684\u5f62\u5f0f\u5448\u73b0\u3002\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u89c4\u5219\uff0c\u65b0\u4f18\u5316\u5668\u90fd\u63d0\u4f9b\u4e86\u4e00\u7ec4\u7528\u4e8e\u63cf\u8ff0\u67e5\u8be2\u8ba1\u5212\u5f62\u72b6\u7684\u6a21\u5f0f\uff0c\u53ef\u4ee5\u7cbe\u786e\u7684\u5339\u914d\u53ef\u4f18\u5316\u7684\u67e5\u8be2\u8ba1\u5212\u3002\u57fa\u4e8e\u6b64\uff0c\u65b0\u4f18\u5316\u5668\u66f4\u597d\u7684\u53ef\u4ee5\u652f\u6301\u8bf8\u5982\u591a\u5c42\u5b50\u67e5\u8be2\u5d4c\u5957\u7b49\u66f4\u4e3a\u590d\u6742\u7684\u67e5\u8be2\u8bed\u53e5\u3002\n\u540c\u65f6\u65b0\u4f18\u5316\u5668\u7684 CBO \u57fa\u4e8e\u5148\u8fdb\u7684 cascades \u6846\u67b6\uff0c\u4f7f\u7528\u4e86\u66f4\u4e3a\u4e30\u5bcc\u7684\u6570\u636e\u7edf\u8ba1\u4fe1\u606f\uff0c\u5e76\u5e94\u7528\u4e86\u7ef4\u5ea6\u66f4\u79d1\u5b66\u7684\u4ee3\u4ef7\u6a21\u578b\u3002\u8fd9\u4f7f\u5f97\u65b0\u4f18\u5316\u5668\u5728\u9762\u5bf9\u591a\u8868 Join \u7684\u67e5\u8be2\u65f6\u66f4\u52a0\u5f97\u5fc3\u5e94\u624b\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u66f4\u5065\u58ee\uff1a\u65b0\u4f18\u5316\u5668\u7684\u6240\u6709\u4f18\u5316\u89c4\u5219\uff0c\u5747\u5728\u903b\u8f91\u6267\u884c\u8ba1\u5212\u6811\u4e0a\u5b8c\u6210\u3002\u5f53\u67e5\u8be2\u8bed\u6cd5\u8bed\u4e49\u89e3\u6790\u5b8c\u6210\u540e\uff0c\u53d8\u8f6c\u6362\u4e3a\u4e00\u9897\u6811\u72b6\u7ed3\u6784\u3002\u76f8\u6bd4\u4e8e\u65e7\u4f18\u5316\u5668\u7684\u5185\u90e8\u6570\u636e\u7ed3\u6784\u66f4\u4e3a\u5408\u7406\u3001\u7edf\u4e00\u3002\u4ee5\u5b50\u67e5\u8be2\u5904\u7406\u4e3a\u4f8b\uff0c\u65b0\u4f18\u5316\u5668\u57fa\u4e8e\u65b0\u7684\u6570\u636e\u7ed3\u6784\uff0c\u907f\u514d\u4e86\u65e7\u4f18\u5316\u5668\u4e2d\u4f17\u591a\u89c4\u5219\u5bf9\u4e8e\u5b50\u67e5\u8be2\u7684\u5355\u72ec\u5904\u7406\u3002\u8fdb\u800c\u51cf\u5c11\u4e86\u4f18\u5316\u89c4\u5219\u903b\u8f91\u9519\u8bef\u7684\u53ef\u80fd\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u66f4\u7075\u6d3b\uff1a\u65b0\u4f18\u5316\u5668\u7684\u67b6\u6784\u8bbe\u8ba1\u66f4\u5408\u7406\uff0c\u66f4\u73b0\u4ee3\u3002\u53ef\u4ee5\u65b9\u4fbf\u7684\u6269\u5c55\u4f18\u5316\u89c4\u5219\u548c\u5904\u7406\u9636\u6bb5\u3002\u80fd\u591f\u66f4\u4e3a\u8fc5\u901f\u7684\u54cd\u5e94\u7528\u6237\u7684\u9700\u6c42\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003\u6587\u6863\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/query-acceleration/nereids"},"https://doris.apache.org/zh-CN/docs/dev/query-acceleration/nereids")))),(0,p.yg)("h1",{id:"\u884c\u4e3a\u53d8\u66f4"},"\u884c\u4e3a\u53d8\u66f4"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u5f00\u542f Light Weight Schema Change\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u4f7f\u7528 datev2\u3001datetimev2\u3001decimalv3 \u6765\u521b\u5efa\u8868\uff0c\u4e0d\u652f\u6301 datav1\u3001datetimev1\u3001decimalv2 \u521b\u5efa\u8868\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003 PR\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/19077"},"https://github.com/apache/doris/pull/19077"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5728 JDBC \u548c Iceberg \u7684 Catalog \u4e2d\u9ed8\u8ba4\u4f7f\u7528 Decimalv3\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003 PR\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18926"},"https://github.com/apache/doris/pull/18926"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5728 BE \u7684\u542f\u52a8\u811a\u672c\u4e2d\uff0c\u589e\u52a0\u4e86 max_openfiles \u548c swap \u7684\u68c0\u67e5\uff0c\u6240\u4ee5\u5982\u679c\u7cfb\u7edf\u914d\u7f6e\u4e0d\u5408\u7406\uff0cBE \u6709\u53ef\u80fd\u4f1a\u542f\u52a8\u5931\u8d25\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003 PR\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18888"},"https://github.com/apache/doris/pull/18888"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u7981\u6b62\u5728 localhost \u8bbf\u95ee FE \u65f6\u65e0\u5bc6\u7801\u767b\u5f55\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003 PR\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18816"},"https://github.com/apache/doris/pull/18816"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5f53\u7cfb\u7edf\u4e2d\u5b58\u5728 Multi Catalog \u65f6\uff0c\u67e5\u8be2 Information Schema \u7684\u6570\u636e\u65f6\uff0c\u9ed8\u8ba4\u53ea\u663e\u793a Internal Catalog \u7684\u6570\u636e\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003 PR\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18662"},"https://github.com/apache/doris/pull/18662"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5bf9 Doris \u8fdb\u7a0b\u540d\u91cd\u547d\u540d\u4e3a DorisFE \u548c DorisBE\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003 PR\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18167"},"https://github.com/apache/doris/pull/18167"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u7cfb\u7edf\u4e2d\u79fb\u9664\u4e86\u975e\u5411\u91cf\u5316\u4ee3\u7801\uff0c\u6240\u4ee5 ",(0,p.yg)("inlineCode",{parentName:"p"},"enable_vectorized_engine")," \u53c2\u6570\u4e0d\u518d\u751f\u6548\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003 PR\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18166"},"https://github.com/apache/doris/pull/18166"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u9650\u5236\u4e86\u8868\u8fbe\u5f0f\u6811\u7684\u6df1\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 200\u3002"),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003 PR\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/17314"},"https://github.com/apache/doris/pull/17314"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4e3a\u4e86\u4e0e BI \u5de5\u5177\u517c\u5bb9\uff0c\u5728 ",(0,p.yg)("inlineCode",{parentName:"p"},"show create table")," \u65f6\uff0c\u5c06 datev2 \u548c datetimev2 \u663e\u793a\u4e3a date \u548c datetime. "),(0,p.yg)("p",{parentName:"li"},"\u53c2\u8003 PR\uff1a",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/18358"},"https://github.com/apache/doris/pull/18358")))))}m.isMDXComponent=!0}}]);