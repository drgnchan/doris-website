"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96960],{95788:(e,r,a)=>{a.d(r,{Iu:()=>s,yg:()=>m});var t=a(11504);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function p(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?p(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),c=function(e){var r=t.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},s=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var a=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=l,m=u["".concat(o,".").concat(h)]||u[h]||g[h]||p;return a?t.createElement(m,n(n({ref:r},s),{},{components:a})):t.createElement(m,n({ref:r},s))}));function m(e,r){var a=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var p=a.length,n=new Array(p);n[0]=h;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[u]="string"==typeof e?e:l,n[1]=i;for(var c=2;c<p;c++)n[c]=a[c];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},51516:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>g,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var t=a(45072),l=(a(11504),a(95788));const p={title:"Release 1.1.2",language:"zh-CN"},n=void 0,i={unversionedId:"releasenotes/release-1.1.2",id:"releasenotes/release-1.1.2",title:"Release 1.1.2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/release-1.1.2.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.1.2",permalink:"/zh-CN/docs/dev/releasenotes/release-1.1.2",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 1.1.2",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 1.1.3",permalink:"/zh-CN/docs/dev/releasenotes/release-1.1.3"},next:{title:"Release 1.1.1",permalink:"/zh-CN/docs/dev/releasenotes/release-1.1.1"}},o={},c=[{value:"MemTracker",id:"memtracker",level:3},{value:"\u589e\u52a0\u5c55\u793a\u548c\u53d6\u6d88\u6b63\u5728\u6267\u884c Query \u7684 API",id:"\u589e\u52a0\u5c55\u793a\u548c\u53d6\u6d88\u6b63\u5728\u6267\u884c-query-\u7684-api",level:3},{value:"\u652f\u6301\u8bfb\u5199 Emoji \u8868\u60c5\u901a\u8fc7 ODBC \u5916\u8868",id:"\u652f\u6301\u8bfb\u5199-emoji-\u8868\u60c5\u901a\u8fc7-odbc-\u5916\u8868",level:3},{value:"\u6570\u636e\u6e56\u76f8\u5173\u6539\u8fdb",id:"\u6570\u636e\u6e56\u76f8\u5173\u6539\u8fdb",level:3},{value:"\u5728 Spark Load \u4e2d\u589e\u52a0\u5bf9 String \u5b57\u7b26\u4e32\u7c7b\u578b\u548c Text \u6587\u672c\u7c7b\u578b\u7684\u652f\u6301",id:"\u5728-spark-load-\u4e2d\u589e\u52a0\u5bf9-string-\u5b57\u7b26\u4e32\u7c7b\u578b\u548c-text-\u6587\u672c\u7c7b\u578b\u7684\u652f\u6301",level:3},{value:"\u5728\u975e\u5411\u91cf\u5316\u5f15\u64ce\u652f\u6301\u590d\u7528 Block\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\u6709 50%\u6027\u80fd\u63d0\u5347\u3002#11392",id:"\u5728\u975e\u5411\u91cf\u5316\u5f15\u64ce\u652f\u6301\u590d\u7528-block\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\u6709-50\u6027\u80fd\u63d0\u534711392",level:3},{value:"\u63d0\u5347 Like \u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6027\u80fd",id:"\u63d0\u5347-like-\u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6027\u80fd",level:3},{value:"\u7981\u7528 TCMalloc \u7684 aggressive_memory_decommit\u3002",id:"\u7981\u7528-tcmalloc-\u7684-aggressive_memory_decommit",level:3},{value:"\u4fee\u590d\u90e8\u5206\u53ef\u80fd\u5bfc\u81f4 FE \u5931\u8d25\u6216\u8005\u6570\u636e\u635f\u574f\u7684\u95ee\u9898",id:"\u4fee\u590d\u90e8\u5206\u53ef\u80fd\u5bfc\u81f4-fe-\u5931\u8d25\u6216\u8005\u6570\u636e\u635f\u574f\u7684\u95ee\u9898",level:3},{value:"\u4fee\u590d FE \u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u4f1a\u5728 waitFor_rpc \u4e0a Hang \u4f4f\u4ee5\u53ca BE \u5728\u9ad8\u5e76\u53d1\u60c5\u51b5\u4e0b\u4f1a Hang \u4f4f\u7684\u95ee\u9898\u3002",id:"\u4fee\u590d-fe-\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u4f1a\u5728-waitfor_rpc-\u4e0a-hang-\u4f4f\u4ee5\u53ca-be-\u5728\u9ad8\u5e76\u53d1\u60c5\u51b5\u4e0b\u4f1a-hang-\u4f4f\u7684\u95ee\u9898",level:3},{value:"\u4fee\u590d\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u67e5\u8be2\u65f6\u5f97\u5230\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898\u3002",id:"\u4fee\u590d\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u67e5\u8be2\u65f6\u5f97\u5230\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898",level:3},{value:"\u4fee\u590d\u8bb8\u591a Planner \u5bfc\u81f4 BE Core \u6216\u8005\u5904\u4e8e\u4e0d\u6b63\u5e38\u72b6\u6001\u7684\u95ee\u9898\u3002",id:"\u4fee\u590d\u8bb8\u591a-planner-\u5bfc\u81f4-be-core-\u6216\u8005\u5904\u4e8e\u4e0d\u6b63\u5e38\u72b6\u6001\u7684\u95ee\u9898",level:3}],s={toc:c},u="wrapper";function g(e){let{components:r,...a}=e;return(0,l.yg)(u,(0,t.c)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u5728 Apache Doris 1.1.2 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u65b0\u7684 Memtracker\u3001\u6781\u5927\u7a0b\u5ea6\u4e0a\u907f\u514d OOM \u7c7b\u95ee\u9898\u7684\u53d1\u751f\uff0c\u63d0\u5347\u4e86\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u5728\u591a\u6570\u67e5\u8be2\u573a\u666f\u7684\u6027\u80fd\u8868\u73b0\uff0c\u4fee\u590d\u4e86\u8bf8\u591a\u5bfc\u81f4 BE \u548c FE \u53d1\u751f\u5f02\u5e38\u7684\u95ee\u9898\uff0c\u4f18\u5316\u4e86\u5728\u6e56\u4ed3\u8054\u90a6\u67e5\u8be2\u573a\u666f\u7684\u90e8\u5206\u4f53\u9a8c\u95ee\u9898\u5e76\u63d0\u5347\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u7684\u6027\u80fd\u3002"),(0,l.yg)("p",null,"\u76f8\u8f83\u4e8e 1.1.1 \u7248\u672c\uff0c\u5728 1.1.2 \u7248\u672c\u4e2d\u6709\u8d85\u8fc7 170 \u4e2a Issue \u548c\u6027\u80fd\u4f18\u5316\u9879\u88ab\u5408\u5165\uff0c\u7cfb\u7edf\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u90fd\u5f97\u5230\u8fdb\u4e00\u6b65\u52a0\u5f3a\u3002\u4e0e\u6b64\u540c\u65f6\uff0c1.1.2 \u7248\u672c\u8fd8\u5c06\u4f5c\u4e3a Apache Doris \u9996\u4e2a LTS \uff08Long-term Support\uff09\u957f\u5468\u671f\u652f\u6301\u7248\u672c\uff0c\u540e\u7eed\u957f\u671f\u7ef4\u62a4\u548c\u652f\u6301\uff0c\u63a8\u8350\u6240\u6709\u7528\u6237\u4e0b\u8f7d\u548c\u5347\u7ea7\u3002"),(0,l.yg)("h1",{id:"\u65b0\u589e\u529f\u80fd"},"\u65b0\u589e\u529f\u80fd"),(0,l.yg)("h3",{id:"memtracker"},"MemTracker"),(0,l.yg)("p",null,"MemTracker \u662f\u4e00\u4e2a\u7528\u4e8e\u5206\u6790\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u7684\u7edf\u8ba1\u5de5\u5177\uff0c\u5728 1.1.1 \u7248\u672c\u4e2d\u6211\u4eec\u5f15\u5165\u4e86\u7b80\u6613\u7248 Memtracker \u7528\u4ee5\u63a7\u5236 BE \u4fa7\u5185\u5b58\u3002\u5728 1.1.2 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u65b0\u7684 MemTracker\uff0c\u5728\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u548c\u975e\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u4e2d\u90fd\u66f4\u4e3a\u51c6\u786e\u3002"),(0,l.yg)("h3",{id:"\u589e\u52a0\u5c55\u793a\u548c\u53d6\u6d88\u6b63\u5728\u6267\u884c-query-\u7684-api"},"\u589e\u52a0\u5c55\u793a\u548c\u53d6\u6d88\u6b63\u5728\u6267\u884c Query \u7684 API"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/current_queries")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/kill/{query_id}")),(0,l.yg)("p",null,"\u5177\u4f53\u4f7f\u7528\u53c2\u8003\u6587\u6863 ",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/admin-manual/http-actions/fe/manager/query-profile-action?_highlight=current&_highlight=query#request"},"Query Profile Action")),(0,l.yg)("h3",{id:"\u652f\u6301\u8bfb\u5199-emoji-\u8868\u60c5\u901a\u8fc7-odbc-\u5916\u8868"},"\u652f\u6301\u8bfb\u5199 Emoji \u8868\u60c5\u901a\u8fc7 ODBC \u5916\u8868"),(0,l.yg)("h1",{id:"\u4f18\u5316\u6539\u8fdb"},"\u4f18\u5316\u6539\u8fdb"),(0,l.yg)("h3",{id:"\u6570\u636e\u6e56\u76f8\u5173\u6539\u8fdb"},"\u6570\u636e\u6e56\u76f8\u5173\u6539\u8fdb"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u626b\u63cf HDFS ORC \u6587\u4ef6\u65f6\u6027\u80fd\u63d0\u5347\u7ea6 300%\u3002",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11501"},"#11501"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u67e5\u8be2 Iceberg \u8868\u652f\u6301 HDFS \u7684 HA \u6a21\u5f0f\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u652f\u6301\u67e5\u8be2\u7531 ",(0,l.yg)("a",{parentName:"p",href:"https://tez.apache.org/"},"Apache Tez")," \u521b\u5efa\u7684 Hive \u6570\u636e")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u6dfb\u52a0\u963f\u91cc\u4e91 OSS \u4f5c\u4e3a Hive \u5916\u90e8\u652f\u6301"))),(0,l.yg)("h3",{id:"\u5728-spark-load-\u4e2d\u589e\u52a0\u5bf9-string-\u5b57\u7b26\u4e32\u7c7b\u578b\u548c-text-\u6587\u672c\u7c7b\u578b\u7684\u652f\u6301"},"\u5728 Spark Load \u4e2d\u589e\u52a0\u5bf9 String \u5b57\u7b26\u4e32\u7c7b\u578b\u548c Text \u6587\u672c\u7c7b\u578b\u7684\u652f\u6301"),(0,l.yg)("h3",{id:"\u5728\u975e\u5411\u91cf\u5316\u5f15\u64ce\u652f\u6301\u590d\u7528-block\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\u6709-50\u6027\u80fd\u63d0\u534711392"},"\u5728\u975e\u5411\u91cf\u5316\u5f15\u64ce\u652f\u6301\u590d\u7528 Block\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\u6709 50%\u6027\u80fd\u63d0\u5347\u3002",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/11392"},"#11392")),(0,l.yg)("h3",{id:"\u63d0\u5347-like-\u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6027\u80fd"},"\u63d0\u5347 Like \u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6027\u80fd"),(0,l.yg)("h3",{id:"\u7981\u7528-tcmalloc-\u7684-aggressive_memory_decommit"},"\u7981\u7528 TCMalloc \u7684 aggressive_memory_decommit\u3002"),(0,l.yg)("p",null,"\u5728\u67e5\u8be2\u6216\u5bfc\u5165\u65f6\u5c06\u4f1a\u6709 40% \u6027\u80fd\u63d0\u5347\uff0c\u4e5f\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"tc_enable_aggressive_memory_decommit"),"\u6765\u4fee\u6539"),(0,l.yg)("h1",{id:"bug-fix"},"Bug Fix"),(0,l.yg)("h3",{id:"\u4fee\u590d\u90e8\u5206\u53ef\u80fd\u5bfc\u81f4-fe-\u5931\u8d25\u6216\u8005\u6570\u636e\u635f\u574f\u7684\u95ee\u9898"},"\u4fee\u590d\u90e8\u5206\u53ef\u80fd\u5bfc\u81f4 FE \u5931\u8d25\u6216\u8005\u6570\u636e\u635f\u574f\u7684\u95ee\u9898"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5728 HA \u73af\u5883\u4e2d\uff0cBDBJE \u5c06\u4fdd\u7559\u5c3d\u53ef\u80fd\u591a\u7684\u6587\u4ef6\uff0c\u901a\u8fc7\u589e\u52a0\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"bdbje_reserved_disk_bytes "),"\u4ee5\u907f\u514d\u4ea7\u751f\u592a\u591a\u7684 BDBJE \u6587\u4ef6\uff0cBDBJE \u65e5\u5fd7\u53ea\u6709\u5728\u63a5\u8fd1\u78c1\u76d8\u9650\u5236\u65f6\u624d\u4f1a\u5220\u9664\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 BDBJE \u4e2d\u7684\u91cd\u8981\u9519\u8bef\uff0c\u8be5\u9519\u8bef\u5c06\u5bfc\u81f4 FE \u526f\u672c\u65e0\u6cd5\u6b63\u786e\u542f\u52a8\u6216\u6570\u636e\u635f\u574f\u3002"))),(0,l.yg)("h3",{id:"\u4fee\u590d-fe-\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u4f1a\u5728-waitfor_rpc-\u4e0a-hang-\u4f4f\u4ee5\u53ca-be-\u5728\u9ad8\u5e76\u53d1\u60c5\u51b5\u4e0b\u4f1a-hang-\u4f4f\u7684\u95ee\u9898"},"\u4fee\u590d FE \u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u4f1a\u5728 waitFor_rpc \u4e0a Hang \u4f4f\u4ee5\u53ca BE \u5728\u9ad8\u5e76\u53d1\u60c5\u51b5\u4e0b\u4f1a Hang \u4f4f\u7684\u95ee\u9898\u3002"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12459"},"#12459")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12458"},"#12458")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12392"},"#12392")),(0,l.yg)("h3",{id:"\u4fee\u590d\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u67e5\u8be2\u65f6\u5f97\u5230\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898"},"\u4fee\u590d\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\u67e5\u8be2\u65f6\u5f97\u5230\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898\u3002"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11754"},"#11754")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11694"},"#11694")),(0,l.yg)("h3",{id:"\u4fee\u590d\u8bb8\u591a-planner-\u5bfc\u81f4-be-core-\u6216\u8005\u5904\u4e8e\u4e0d\u6b63\u5e38\u72b6\u6001\u7684\u95ee\u9898"},"\u4fee\u590d\u8bb8\u591a Planner \u5bfc\u81f4 BE Core \u6216\u8005\u5904\u4e8e\u4e0d\u6b63\u5e38\u72b6\u6001\u7684\u95ee\u9898\u3002"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12080"},"#12080")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12075"},"#12075")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12040"},"#12040")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12003"},"#12003")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12007"},"#12007")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11971"},"#11971")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11933"},"#11933")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11861"},"#11861")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11859"},"#11859")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11855"},"#11855")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11837"},"#11837")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11834"},"#11834")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11821"},"#11821")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11782"},"#11782")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11723"},"#11723")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11569"},"#11569")))}g.isMDXComponent=!0}}]);