"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70411],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>s});var r=n(296540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=r.createContext({}),p=function(e){var a=r.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):m(m({},a),e)),n},y=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=t,s=c["".concat(o,".").concat(d)]||c[d]||g[d]||i;return n?r.createElement(s,m(m({ref:a},y),{},{components:n})):r.createElement(s,m({ref:a},y))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,m=new Array(i);m[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[c]="string"==typeof e?e:t,m[1]=l;for(var p=2;p<i;p++)m[p]=n[p];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},551875:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>m,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),t=(n(296540),n(15680));const i={title:"BE OOM\u5206\u6790",language:"zh-CN"},m=void 0,l={unversionedId:"admin-manual/maint-monitor/memory-management/be-oom-analysis",id:"admin-manual/maint-monitor/memory-management/be-oom-analysis",title:"BE OOM\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/maint-monitor/memory-management/be-oom-analysis.md",sourceDirName:"admin-manual/maint-monitor/memory-management",slug:"/admin-manual/maint-monitor/memory-management/be-oom-analysis",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/memory-management/be-oom-analysis",draft:!1,tags:[],version:"current",frontMatter:{title:"BE OOM\u5206\u6790",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5185\u5b58\u8d85\u9650\u9519\u8bef\u5206\u6790",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis"},next:{title:"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55",permalink:"/zh-CN/docs/dev/admin-manual/config/config-dir"}},o={},p=[{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2},{value:"\u5185\u5b58\u5206\u6790",id:"\u5185\u5b58\u5206\u6790",level:2}],y={toc:p},c="wrapper";function g(e){let{components:a,...n}=e;return(0,t.yg)(c,(0,r.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"be-oom\u5206\u6790"},"BE OOM\u5206\u6790"),(0,t.yg)("version",{since:"1.2.0"},(0,t.yg)("p",null,"\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u5728 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis"},"Memory Limit Exceeded Analysis")," \u4e2d\u6211\u4eec\u5b9a\u65f6\u68c0\u6d4b\u64cd\u4f5c\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\uff0c\u5e76\u5728\u5185\u5b58\u4e0d\u8db3\u65f6\u53ca\u65f6\u54cd\u5e94\uff0c\u5982\u89e6\u53d1\u5185\u5b58GC\u91ca\u653e\u7f13\u5b58\u6216cancel\u5185\u5b58\u8d85\u9650\u7684\u67e5\u8be2\uff0c\u4f46\u56e0\u4e3a\u5237\u65b0\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u548c\u5185\u5b58GC\u90fd\u5177\u6709\u4e00\u5b9a\u7684\u6ede\u540e\u6027\uff0c\u540c\u65f6\u6211\u4eec\u5f88\u96be\u5b8c\u5168catch\u6240\u6709\u5927\u5185\u5b58\u7533\u8bf7\uff0c\u5728\u96c6\u7fa4\u538b\u529b\u8fc7\u5927\u65f6\u4ecd\u6709OOM\u98ce\u9669\u3002"),(0,t.yg)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,t.yg)("p",null,"\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/config/be-config"},"BE \u914d\u7f6e\u9879")," \u5728",(0,t.yg)("inlineCode",{parentName:"p"},"be.conf"),"\u4e2d\u8c03\u5c0f",(0,t.yg)("inlineCode",{parentName:"p"},"mem_limit"),"\uff0c\u8c03\u5927",(0,t.yg)("inlineCode",{parentName:"p"},"max_sys_mem_available_low_water_mark_bytes"),"\u3002"),(0,t.yg)("h2",{id:"\u5185\u5b58\u5206\u6790"},"\u5185\u5b58\u5206\u6790"),(0,t.yg)("p",null,"\u82e5\u5e0c\u671b\u8fdb\u4e00\u6b65\u4e86\u89e3 OOM \u524dBE\u8fdb\u7a0b\u7684\u5185\u5b58\u4f7f\u7528\u4f4d\u7f6e\uff0c\u51cf\u5c11\u8fdb\u7a0b\u5185\u5b58\u4f7f\u7528\uff0c\u53ef\u53c2\u8003\u5982\u4e0b\u6b65\u9aa4\u5206\u6790\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"dmesg -T"),"\u786e\u8ba4 OOM \u7684\u65f6\u95f4\u548c OOM \u65f6\u7684\u8fdb\u7a0b\u5185\u5b58\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u770b be/log/be.INFO \u7684\u6700\u540e\u662f\u5426\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," \u65e5\u5fd7\uff0c\u5982\u679c\u6709\u8bf4\u660e BE \u5df2\u7ecf\u68c0\u6d4b\u5230\u5185\u5b58\u8d85\u9650\uff0c\u5219\u7ee7\u7eed\u6b65\u9aa43\uff0c\u5426\u5219\u7ee7\u7eed\u6b65\u9aa48"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"Memory Tracker Summary:\n    Type=consistency, Used=0(0 B), Peak=0(0 B)\n    Type=batch_load, Used=0(0 B), Peak=0(0 B)\n    Type=clone, Used=0(0 B), Peak=0(0 B)\n    Type=schema_change, Used=0(0 B), Peak=0(0 B)\n    Type=compaction, Used=0(0 B), Peak=0(0 B)\n    Type=load, Used=0(0 B), Peak=0(0 B)\n    Type=query, Used=206.67 MB(216708729 B), Peak=565.26 MB(592723181 B)\n    Type=global, Used=930.42 MB(975614571 B), Peak=1017.42 MB(1066840223 B)\n    Type=tc/jemalloc_cache, Used=51.97 MB(54494616 B), Peak=-1.00 B(-1 B)\n    Type=process, Used=1.16 GB(1246817916 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=474.20 MB(497233597 B), Peak=649.18 MB(680718208 B)\n    MemTracker Label=BufferAllocator, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=LoadChannelMgr, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=StorageEngine, Parent Label=Orphan, Used=320.56 MB(336132488 B), Peak=322.56 MB(338229824 B)\n    MemTracker Label=SegCompaction, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=SegmentMeta, Parent Label=Orphan, Used=948.64 KB(971404 B), Peak=943.64 KB(966285 B)\n    MemTracker Label=TabletManager, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DataPageCache, Type=global, Limit=-1.00 B(-1 B), Used=455.22 MB(477329882 B), Peak=454.18 MB(476244180 B)\n    MemTrackerLimiter Label=IndexPageCache, Type=global, Limit=-1.00 B(-1 B), Used=1.00 MB(1051092 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SegmentCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DiskIO, Type=global, Limit=2.47 GB(2655423201 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=ChunkAllocator, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=LastSuccessChannelCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DeleteBitmap AggCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n")),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5f53 OOM \u524d be/log/be.INFO \u7684\u6700\u540e\u5305\u542b\u7cfb\u7edf\u5185\u5b58\u8d85\u9650\u7684\u65e5\u5fd7\u65f6\uff0c\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis"},"Memory Limit Exceeded Analysis")," \u4e2d\u7684\u65e5\u5fd7\u5206\u6790\u65b9\u6cd5\uff0c\u67e5\u770b\u8fdb\u7a0b\u6bcf\u4e2a\u7c7b\u522b\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3002\u82e5\u5f53\u524d\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"type=query"),"\u5185\u5b58\u4f7f\u7528\u8f83\u591a\uff0c\u82e5\u5df2\u77e5 OOM \u524d\u7684\u67e5\u8be2\u7ee7\u7eed\u6b65\u9aa44\uff0c\u5426\u5219\u7ee7\u7eed\u6b65\u9aa45\uff1b\u82e5\u5f53\u524d\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"type=load"),"\u5185\u5b58\u4f7f\u7528\u591a\u7ee7\u7eed\u6b65\u9aa46\uff0c\u82e5\u5f53\u524d\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"type=global"),"\u5185\u5b58\u4f7f\u7528\u591a\u7ee7\u7eed\u6b65\u9aa47\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"type=query"),"\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u591a\uff0c\u4e14\u5df2\u77e5 OOM \u524d\u7684\u67e5\u8be2\u65f6\uff0c\u6bd4\u5982\u6d4b\u8bd5\u96c6\u7fa4\u6216\u5b9a\u65f6\u4efb\u52a1\uff0c\u91cd\u542fBE\u8282\u70b9\uff0c\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/maint-monitor/memory-management/memory-tracker"},"Memory Tracker")," \u67e5\u770b\u5b9e\u65f6 memory tracker \u7edf\u8ba1\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"set global enable_profile=true"),"\u540e\u91cd\u8bd5\u67e5\u8be2\uff0c\u89c2\u5bdf\u5177\u4f53\u7b97\u5b50\u7684\u5185\u5b58\u4f7f\u7528\u4f4d\u7f6e\uff0c\u786e\u8ba4\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u662f\u5426\u5408\u7406\uff0c\u8fdb\u4e00\u6b65\u8003\u8651\u4f18\u5316SQL\u5185\u5b58\u4f7f\u7528\uff0c\u6bd4\u5982\u8c03\u6574join\u987a\u5e8f\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"type=query"),"\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u591a\uff0c\u4e14\u672a\u77e5 OOM \u524d\u7684\u67e5\u8be2\u65f6\uff0c\u6bd4\u5982\u4f4d\u4e8e\u7ebf\u4e0a\u96c6\u7fa4\uff0c\u5219\u5728",(0,t.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO"),"\u4ece\u540e\u5411\u524d\u641c",(0,t.yg)("inlineCode",{parentName:"p"},"Deregister query/load memory tracker, queryId")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"Register query/load memory tracker, query/load id"),"\uff0c\u540c\u4e00\u4e2aquery id\u82e5\u540c\u65f6\u6253\u51fa\u4e0a\u8ff0\u4e24\u884c\u65e5\u5fd7\u5219\u8868\u793a\u67e5\u8be2\u6216\u5bfc\u5165\u6210\u529f\uff0c\u82e5\u53ea\u6709 Register \u6ca1\u6709 Deregister\uff0c\u5219\u8fd9\u4e2a\u67e5\u8be2\u6216\u5bfc\u5165\u5728 OOM \u524d\u4ecd\u5728\u8fd0\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u5f97\u5230OOM \u524d\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u67e5\u8be2\u548c\u5bfc\u5165\uff0c\u6309\u7167\u6b65\u9aa44\u7684\u65b9\u6cd5\u5bf9\u53ef\u7591\u5927\u5185\u5b58\u67e5\u8be2\u5206\u6790\u5176\u5185\u5b58\u4f7f\u7528\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"type=load"),"\u5bfc\u5165\u5185\u5b58\u4f7f\u7528\u591a\u65f6\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"type=global"),"\u5185\u5b58\u4f7f\u7528\u591a\u65f6\uff0c\u7ee7\u7eed\u67e5\u770b",(0,t.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary"),"\u65e5\u5fd7\u540e\u534a\u90e8\u5206\u5df2\u7ecf\u6253\u51fa\u5f97",(0,t.yg)("inlineCode",{parentName:"p"},"type=global"),"\u8be6\u7ec6\u7edf\u8ba1\u3002\u5f53 DataPageCache\u3001IndexPageCache\u3001SegmentCache\u3001ChunkAllocator\u3001LastSuccessChannelCache \u7b49\u5185\u5b58\u4f7f\u7528\u591a\u65f6\uff0c\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/config/be-config"},"BE \u914d\u7f6e\u9879")," \u8003\u8651\u4fee\u6539cache\u7684\u5927\u5c0f\uff1b\u5f53 Orphan \u5185\u5b58\u4f7f\u7528\u8fc7\u591a\u65f6\uff0c\u5982\u4e0b\u7ee7\u7eed\u5206\u6790\u3002"))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u82e5",(0,t.yg)("inlineCode",{parentName:"li"},"Parent Label=Orphan"),"\u7684tracker\u7edf\u8ba1\u503c\u76f8\u52a0\u53ea\u5360 Orphan \u5185\u5b58\u7684\u5c0f\u90e8\u5206\uff0c\u5219\u8bf4\u660e\u5f53\u524d\u6709\u5927\u91cf\u5185\u5b58\u6ca1\u6709\u51c6\u786e\u7edf\u8ba1\uff0c\u6bd4\u5982 brpc \u8fc7\u7a0b\u7684\u5185\u5b58\uff0c\u6b64\u65f6\u53ef\u4ee5\u8003\u8651\u501f\u52a9 heap profile ",(0,t.yg)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/community/developer-guide/debug-tool"},"Memory Tracker")," \u4e2d\u7684\u65b9\u6cd5\u8fdb\u4e00\u6b65\u5206\u6790\u5185\u5b58\u4f4d\u7f6e\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u82e5",(0,t.yg)("inlineCode",{parentName:"li"},"Parent Label=Orphan"),"\u7684tracker\u7edf\u8ba1\u503c\u76f8\u52a0\u5360 Orphan \u5185\u5b58\u7684\u5927\u90e8\u5206\uff0c\u5f53",(0,t.yg)("inlineCode",{parentName:"li"},"Label=TabletManager"),"\u5185\u5b58\u4f7f\u7528\u591a\u65f6\uff0c\u8fdb\u4e00\u6b65\u67e5\u770b\u96c6\u7fa4 Tablet \u6570\u91cf\uff0c\u82e5 Tablet \u6570\u91cf\u8fc7\u591a\u5219\u8003\u8651\u5220\u9664\u8fc7\u65f6\u4e0d\u4f1a\u88ab\u4f7f\u7528\u7684\u8868\u6216\u6570\u636e\uff1b\u5f53",(0,t.yg)("inlineCode",{parentName:"li"},"Label=StorageEngine"),"\u5185\u5b58\u4f7f\u7528\u8fc7\u591a\u65f6\uff0c\u8fdb\u4e00\u6b65\u67e5\u770b\u96c6\u7fa4 Segment \u6587\u4ef6\u4e2a\u6570\uff0c\u82e5 Segment \u6587\u4ef6\u4e2a\u6570\u8fc7\u591a\u5219\u8003\u8651\u624b\u52a8\u89e6\u53d1compaction\uff1b")),(0,t.yg)("ol",{start:8},(0,t.yg)("li",{parentName:"ol"},"\u82e5",(0,t.yg)("inlineCode",{parentName:"li"},"be/log/be.INFO"),"\u6ca1\u6709\u5728 OOM \u524d\u6253\u5370\u51fa",(0,t.yg)("inlineCode",{parentName:"li"},"Memory Tracker Summary"),"\u65e5\u5fd7\uff0c\u8bf4\u660e BE \u6ca1\u6709\u53ca\u65f6\u68c0\u6d4b\u51fa\u5185\u5b58\u8d85\u9650\uff0c\u89c2\u5bdf Grafana \u5185\u5b58\u76d1\u63a7\u786e\u8ba4BE\u5728 OOM \u524d\u7684\u5185\u5b58\u589e\u957f\u8d8b\u52bf\uff0c\u82e5 OOM \u53ef\u590d\u73b0\uff0c\u8003\u8651\u5728",(0,t.yg)("inlineCode",{parentName:"li"},"be.conf"),"\u4e2d\u589e\u52a0",(0,t.yg)("inlineCode",{parentName:"li"},"memory_debug=true"),"\uff0c\u91cd\u542f\u96c6\u7fa4\u540e\u4f1a\u6bcf\u79d2\u6253\u5370\u96c6\u7fa4\u5185\u5b58\u7edf\u8ba1\uff0c\u89c2\u5bdf OOM \u524d\u7684\u6700\u540e\u4e00\u6b21",(0,t.yg)("inlineCode",{parentName:"li"},"Memory Tracker Summary"),"\u65e5\u5fd7\uff0c\u7ee7\u7eed\u6b65\u9aa43\u5206\u6790\uff1b"))))}g.isMDXComponent=!0}}]);