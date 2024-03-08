"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89769],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>u});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),s=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(m.Provider,{value:a},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=n,u=p["".concat(m,".").concat(d)]||p[d]||y[d]||o;return t?r.createElement(u,i(i({ref:a},c),{},{components:t})):r.createElement(u,i({ref:a},c))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},895929:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),n=(t(296540),t(15680));const o={title:"Memory Tracker",language:"en"},i=void 0,l={unversionedId:"admin-manual/maint-monitor/memory-management/memory-tracker",id:"version-2.1/admin-manual/maint-monitor/memory-management/memory-tracker",title:"Memory Tracker",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/maint-monitor/memory-management/memory-tracker.md",sourceDirName:"admin-manual/maint-monitor/memory-management",slug:"/admin-manual/maint-monitor/memory-management/memory-tracker",permalink:"/docs/admin-manual/maint-monitor/memory-management/memory-tracker",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Memory Tracker",language:"en"},sidebar:"docs",previous:{title:"Automated Service Startup",permalink:"/docs/admin-manual/maint-monitor/automatic-service-start"},next:{title:"Memory Limit Exceeded Analysis",permalink:"/docs/admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis"}},m={},s=[{value:"principle",id:"principle",level:2},{value:"View statistics",id:"view-statistics",level:2},{value:"Home <code>/mem_tracker</code>",id:"home-mem_tracker",level:3},{value:"Global Type <code>/mem_tracker?type=global</code>",id:"global-type-mem_trackertypeglobal",level:3},{value:"Query Type <code>/mem_tracker?type=query</code>",id:"query-type-mem_trackertypequery",level:3},{value:"Load Type <code>/mem_tracker?type=load</code>",id:"load-type-mem_trackertypeload",level:3}],c={toc:s},p="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(p,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"memory-tracker"},"Memory Tracker"),(0,n.yg)("version",{since:"1.2.0"},(0,n.yg)("p",null,"The Memory Tracker records the memory usage of the Doris BE process, including the memory used in the life cycle of tasks such as query, import, Compaction, and Schema Change, as well as various caches for memory control and analysis."),(0,n.yg)("h2",{id:"principle"},"principle"),(0,n.yg)("p",null,"Each query, import and other tasks in the system will create its own Memory Tracker when it is initialized, and put the Memory Tracker into TLS (Thread Local Storage) during execution, and each memory application and release of the BE process will be in the Mem Hook Consume the Memory Tracker in the middle, and display it after the final summary."),(0,n.yg)("p",null,"For detailed design and implementation, please refer to:\n",(0,n.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-002%3A+Refactor+memory+tracker+on+BE"},"https://cwiki.apache.org/confluence/display/DORIS/DSIP-002%3A+Refactor+memory+tracker+on+BE"),"\n",(0,n.yg)("a",{parentName:"p",href:"https://shimo.im/docs/DT6JXDRkdTvdyV3G"},"https://shimo.im/docs/DT6JXDRkdTvdyV3G")),(0,n.yg)("h2",{id:"view-statistics"},"View statistics"),(0,n.yg)("p",null,"The real-time memory statistics results can be viewed through Doris BE's Web page http://ip:webserver_port/mem_tracker.(webserver_port default is 8040)\nFor the memory statistics results of historical queries, you can view the ",(0,n.yg)("inlineCode",{parentName:"p"},"peakMemoryBytes")," of each query in ",(0,n.yg)("inlineCode",{parentName:"p"},"fe/log/fe.audit.log"),", or search ",(0,n.yg)("inlineCode",{parentName:"p"},"Deregister query/load memory tracker, queryId")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO")," `View memory peaks per query on a single BE."),(0,n.yg)("h3",{id:"home-mem_tracker"},"Home ",(0,n.yg)("inlineCode",{parentName:"h3"},"/mem_tracker")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13197424/202889634-fbfdd2a1-e272-4101-8744-baf05c15c2dc.png",alt:"image"})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Type: Divide the memory used by Doris BE into the following categories")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"process: The total memory of the process, the sum of all other types."),(0,n.yg)("li",{parentName:"ul"},"global: Global Memory Tracker with the same life cycle and process, such as each Cache, Tablet Manager, Storage Engine, etc."),(0,n.yg)("li",{parentName:"ul"},"query: the in-memory sum of all queries."),(0,n.yg)("li",{parentName:"ul"},"load: Sum of all imported memory."),(0,n.yg)("li",{parentName:"ul"},"tc/jemalloc_cache: The general memory allocator TCMalloc or Jemalloc cache, you can view the original profile of the memory allocator in real time at http://ip:webserver_port/memz."),(0,n.yg)("li",{parentName:"ul"},"compaction, schema_change, consistency, batch_load, clone: \u200b\u200bcorresponding to the memory sum of all Compaction, Schema Change, Consistency, Batch Load, and Clone tasks respectively.")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Current Consumption(Bytes): current memory value, unit B."),(0,n.yg)("li",{parentName:"ol"},"Current Consumption(Normalize): .G.M.K formatted output of the current memory value."),(0,n.yg)("li",{parentName:"ol"},"Peak Consumption (Bytes): The peak value of the memory after the BE process is started, the unit is B, and it will be reset after the BE restarts."),(0,n.yg)("li",{parentName:"ol"},"Peak Consumption(Normalize): The .G.M.K formatted output of the memory peak value after the BE process starts, and resets after the BE restarts.")),(0,n.yg)("h3",{id:"global-type-mem_trackertypeglobal"},"Global Type ",(0,n.yg)("inlineCode",{parentName:"h3"},"/mem_tracker?type=global")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13197424/202910945-7ee2bb56-c0a3-4ccb-9422-841c64c65bad.png",alt:"image"})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Label: Memory Tracker name"),(0,n.yg)("li",{parentName:"ol"},"Parent Label: It is used to indicate the parent-child relationship between two Memory Trackers. The memory recorded by the Child Tracker is a subset of the Parent Tracker. There may be intersections between the memories recorded by different Trackers with the same Parent.")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Orphan: Tracker consumed by default. Memory that does not specify a tracker will be recorded in Orphan by default. In addition to the Child Tracker subdivided below, Orphan also includes some memory that is inconvenient to accurately subdivide and count, including BRPC."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"LoadChannelMgr: The sum of the memory of all imported Load Channel stages, used to write the scanned data to the Segment file on disk, a subset of Orphan."),(0,n.yg)("li",{parentName:"ul"},"StorageEngine:, the memory consumed by the storage engine during loading the data directory, a subset of Orphan."),(0,n.yg)("li",{parentName:"ul"},"SegCompaction: The memory sum of all SegCompaction tasks, a subset of Orphan."),(0,n.yg)("li",{parentName:"ul"},"SegmentMeta: memory use by segment meta data such as footer or index page, a subset of Orphan."),(0,n.yg)("li",{parentName:"ul"},"TabletManager: The memory consumed by the storage engine get, add, and delete Tablet, a subset of Orphan."),(0,n.yg)("li",{parentName:"ul"},"BufferAllocator: Only used for memory multiplexing in the non-vectorized Partitioned Agg process, a subset of Orphan."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"DataPageCache: Used to cache data Pages to speed up Scan.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"IndexPageCache: The index used to cache the data Page, used to speed up Scan.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"SegmentCache: Used to cache opened Segments, such as index information.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"DiskIO: Used to cache Disk IO data, only used in non-vectorization.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"ChunkAllocator: Used to cache power-of-2 memory blocks, and reuse memory at the application layer.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"LastSuccessChannelCache: Used to cache the LoadChannel of the import receiver.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"DeleteBitmap AggCache: Gets aggregated delete_bitmap on rowset_id and version."))),(0,n.yg)("h3",{id:"query-type-mem_trackertypequery"},"Query Type ",(0,n.yg)("inlineCode",{parentName:"h3"},"/mem_tracker?type=query")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13197424/202924569-c4f3c556-2f92-4375-962c-c71147704a27.png",alt:"image"})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Limit: The upper limit of memory used by a single query, ",(0,n.yg)("inlineCode",{parentName:"li"},"show session variables")," to view and modify ",(0,n.yg)("inlineCode",{parentName:"li"},"exec_mem_limit"),"."),(0,n.yg)("li",{parentName:"ol"},"Label: The label naming rule of the Tracker for a single query is ",(0,n.yg)("inlineCode",{parentName:"li"},"Query#Id=xxx"),"."),(0,n.yg)("li",{parentName:"ol"},"Parent Label: Parent is the Tracker record of ",(0,n.yg)("inlineCode",{parentName:"li"},"Query#Id=xxx")," to query the memory used by different operators during execution.")),(0,n.yg)("h3",{id:"load-type-mem_trackertypeload"},"Load Type ",(0,n.yg)("inlineCode",{parentName:"h3"},"/mem_tracker?type=load")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13197424/202925855-936889e3-c910-4ca5-bc12-1b9849a09c33.png",alt:"image"})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Limit: The import is divided into two stages: Fragment Scan and Load Channel to write Segment to disk. The upper memory limit of the Scan phase can be viewed and modified through ",(0,n.yg)("inlineCode",{parentName:"li"},"show session variables"),"; the segment write disk phase does not have a separate memory upper limit for each import, but the total upper limit of all imports, corresponding to ",(0,n.yg)("inlineCode",{parentName:"li"},"load_process_max_memory_limit_percent"),"."),(0,n.yg)("li",{parentName:"ol"},"Label: The label naming rule of a single import Scan stage Tracker is ",(0,n.yg)("inlineCode",{parentName:"li"},"Load#Id=xxx"),"; the Label naming rule of a single import Segment write disk stage Tracker is ",(0,n.yg)("inlineCode",{parentName:"li"},"LoadChannel#senderIp=xxx#loadID=xxx"),"."),(0,n.yg)("li",{parentName:"ol"},"Parent Label: Parent is the Tracker of ",(0,n.yg)("inlineCode",{parentName:"li"},"Load#Id=xxx"),", which records the memory used by different operators during the import Scan stage; Parent is the Tracker of ",(0,n.yg)("inlineCode",{parentName:"li"},"LoadChannelMgrTrackerSet"),", which records the Insert and The memory used by the Flush disk process is associated with the last ",(0,n.yg)("inlineCode",{parentName:"li"},"loadID")," of the Label to write to the disk stage Tracker of the Segment."))))}y.isMDXComponent=!0}}]);