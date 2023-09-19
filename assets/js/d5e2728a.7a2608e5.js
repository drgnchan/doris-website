"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71308],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=o,p=h["".concat(l,".").concat(d)]||h[d]||u[d]||n;return a?r.createElement(p,i(i({ref:t},m),{},{components:a})):r.createElement(p,i({ref:t},m))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const n={title:"Say Goodbye to OOM Crashes",summary:"A more robust and flexible memory management solution with optimizations in memory allocation, memory tracking, and memory limit.",date:"2023-06-16",author:"Apache Doris",tags:["Tech Sharing"]},i=void 0,s={permalink:"/blog/Memory_Management",source:"@site/blog/Memory_Management.md",title:"Say Goodbye to OOM Crashes",description:"\x3c!--",date:"2023-06-16T00:00:00.000Z",formattedDate:"June 16, 2023",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Say Goodbye to OOM Crashes",summary:"A more robust and flexible memory management solution with optimizations in memory allocation, memory tracking, and memory limit.",date:"2023-06-16",author:"Apache Doris",tags:["Tech Sharing"]},prevItem:{title:"Apache Doris announced the official release of version 1.2.5",permalink:"/blog/release-note-1.2.5"},nextItem:{title:"Understanding Data Compaction in 3 Minutes",permalink:"/blog/Compaction"}},l={authorsImageUrls:[void 0]},c=[{value:"Memory Allocation",id:"memory-allocation",level:2},{value:"Data Structures in Memory",id:"data-structures-in-memory",level:3},{value:"Memory Interface",id:"memory-interface",level:3},{value:"Memory Reuse",id:"memory-reuse",level:3},{value:"Memory Tracking",id:"memory-tracking",level:2},{value:"Structure of MemTrackers",id:"structure-of-memtrackers",level:3},{value:"How MemTracker Works",id:"how-memtracker-works",level:3},{value:"How to Use MemTracker",id:"how-to-use-memtracker",level:3},{value:"Memory Limit",id:"memory-limit",level:2},{value:"Memory Limit on Query",id:"memory-limit-on-query",level:3},{value:"Memory Limit on Process",id:"memory-limit-on-process",level:3},{value:"Influences and Outcomes",id:"influences-and-outcomes",level:2}],m={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What guarantees system stability in large data query tasks? It is an effective memory allocation and monitoring mechanism. It is how you speed up computation, avoid memory hotspots, promptly respond to insufficient memory, and minimize OOM errors. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(27030).Z,width:"1226",height:"214"})),(0,o.kt)("p",null,"From a database user's perspective, how do they suffer from bad memory management? This is a list of things that used to bother our users:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OOM errors cause backend processes to crash. To quote one of our community members: Hi, Apache Doris, it's okay to slow things down or fail a few tasks when you are short of memory, but throwing a downtime is just not cool."),(0,o.kt)("li",{parentName:"ul"},"Backend processes consume too much memory space, but there is no way to find the exact task to blame or limit the memory usage for a single query."),(0,o.kt)("li",{parentName:"ul"},"It is hard to set a proper memory size for each query, so chances are that a query gets canceled even when there is plenty of memory space."),(0,o.kt)("li",{parentName:"ul"},"High-concurrency queries are disproportionately slow, and memory hotspots are hard to locate."),(0,o.kt)("li",{parentName:"ul"},"Intermediate data during HashTable creation cannot be flushed to disks, so join queries between two large tables often fail due to OOM. ")),(0,o.kt)("p",null,"Luckily, those dark days are behind us, because we have improved our memory management mechanism from the bottom up. Now get ready, things are going to be intensive."),(0,o.kt)("h2",{id:"memory-allocation"},"Memory Allocation"),(0,o.kt)("p",null,"In Apache Doris, we have a one-and-only interface for memory allocation: ",(0,o.kt)("strong",{parentName:"p"},"Allocator"),". It will make adjustments as it sees appropriate to keep memory usage efficient and under control. Also, MemTrackers are in place to track the allocated or released memory size, and three different data structures are responsible for large memory allocation in operator execution (we will get to them immediately).   "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4981).Z,width:"1228",height:"568"})),(0,o.kt)("h3",{id:"data-structures-in-memory"},"Data Structures in Memory"),(0,o.kt)("p",null,"As different queries have different memory hotspot patterns in execution, Apache Doris provides three different in-memory data structures: ",(0,o.kt)("strong",{parentName:"p"},"Arena"),", ",(0,o.kt)("strong",{parentName:"p"},"HashTable"),", and ",(0,o.kt)("strong",{parentName:"p"},"PODArray"),". They are all under the reign of the Allocator."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(56386).Z,width:"1222",height:"758"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Arena")),(0,o.kt)("p",null,"The Arena is a memory pool that maintains a list of chunks, which are to be allocated upon request from the Allocator. The chunks support memory alignment. They exist throughout the lifespan of the Arena, and will be freed up upon destruction (usually when the query is completed). Chunks are mainly used to store the serialized or deserialized data during Shuffle, or the serialized Keys in HashTables."),(0,o.kt)("p",null,"The initial size of a chunk is 4096 bytes. If the current chunk is smaller than the requested memory, a new chunk will be added to the list. If the current chunk is smaller than 128M, the new chunk will double its size; if it is larger than 128M, the new chunk will, at most, be 128M larger than what is required. The old small chunk will not be allocated for new requests. There is a cursor to mark the dividing line of chunks allocated and those unallocated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. HashTable")),(0,o.kt)("p",null,"HashTables are applicable for Hash Joins, aggregations, set operations, and window functions. The PartitionedHashTable structure supports no more than 16 sub-HashTables. It also supports the parallel merging of HashTables and each sub-Hash Join can be scaled independently. These can reduce overall memory usage and the latency caused by scaling."),(0,o.kt)("p",null,"If the current HashTable is smaller than 8M, it will be scaled by a factor of 4; "),(0,o.kt)("p",null,"If it is larger than 8M, it will be scaled by a factor of 2; "),(0,o.kt)("p",null,"If it is smaller than 2G, it will be scaled when it is 50% full;"),(0,o.kt)("p",null,"And if it is larger than 2G, it will be scaled when it is 75% full. "),(0,o.kt)("p",null,"The newly created HashTables will be pre-scaled based on how much data it is going to have. We also provide different types of HashTables for different scenarios. For example, for aggregations, you can apply PHmap."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. PODArray")),(0,o.kt)("p",null,"PODArray, as the name suggests, is a dynamic array of POD. The difference between it and ",(0,o.kt)("inlineCode",{parentName:"p"},"std::vector")," is that PODArray does not initialize elements. It supports memory alignment and some interfaces of ",(0,o.kt)("inlineCode",{parentName:"p"},"std::vector"),". It is scaled by a factor of 2. In destruction, instead of calling the destructor function for each element, it releases memory of the whole PODArray. PODArray is mainly used to save strings in columns and is applicable in many function computation and expression filtering."),(0,o.kt)("h3",{id:"memory-interface"},"Memory Interface"),(0,o.kt)("p",null,"As the only interface that coordinates Arena, PODArray, and HashTable, the Allocator executes memory mapping (MMAP) allocation for requests larger than 64M. Those smaller than 4K will be directly allocated from the system via malloc/free; and those in between will be accelerated by a general-purpose caching ChunkAllocator, which brings a 10% performance increase according to our benchmarking results. The ChunkAllocator will try and retrieve a chunk of the specified size from the FreeList of the current core in a lock-free manner; if such a chunk doesn't exist, it will try from other cores in a lock-based manner; if that still fails, it will request the specified memory size from the system and encapsulate it into a chunk."),(0,o.kt)("p",null,'We chose Jemalloc over TCMalloc after experience with both of them. We tried TCMalloc in our high-concurrency tests and noticed that Spin Lock in CentralFreeList took up 40% of the total query time. Disabling "aggressive memory decommit" made things better, but that brought much more memory usage, so we had to use an individual thread to regularly recycle cache. Jemalloc, on the other hand, was more performant and stable in high-concurrency queries. After fine-tuning for other scenarios, it delivered the same performance as TCMalloc but consumed less memory.'),(0,o.kt)("h3",{id:"memory-reuse"},"Memory Reuse"),(0,o.kt)("p",null,"Memory reuse is widely executed on the execution layer of Apache Doris. For example, data blocks will be reused throughout the execution of a query. During Shuffle, there will be two blocks at the Sender end and they work alternately, one receiving data and the other in RPC transport. When reading a tablet, Doris will reuse the predicate column, implement cyclic reading, filter, copy filtered data to the upper block, and then clear. When ingesting data into an Aggregate Key table, once the MemTable that caches data reaches a certain size, it will be pre-aggregated and then more data will be written in. "),(0,o.kt)("p",null,"Memory reuse is executed in data scanning, too. Before the scanning starts, a number of free blocks (depending on the number of scanners and threads) will be allocated to the scanning task. During each scanner scheduling, one of the free blocks will be passed to the storage layer for data reading. After data reading, the block will be put into the producer queue for consumption of the upper operators in subsequent computation. Once an upper operator has copied the computation data from the block, the block will go back in the free blocks for next scanner scheduling. The thread the preallocates the free blocks will also be responsible for freeing them up after data scanning, so there won't be extra overheads. The number of free blocks somehow determines the concurrency of data scanning."),(0,o.kt)("h2",{id:"memory-tracking"},"Memory Tracking"),(0,o.kt)("p",null," Apache Doris uses MemTrackers to follow up on the allocation and releasing of memory while analyzing memory hotspots. The MemTrackers keep records of each data query, data ingestion, data compaction task, and the memory size of each global object, such as Cache and TabletMeta. It supports both manual counting and MemHook auto-tracking. Users can view the real-time memory usage in Doris backend on a Web page. "),(0,o.kt)("h3",{id:"structure-of-memtrackers"},"Structure of MemTrackers"),(0,o.kt)("p",null,"The MemTracker system before Apache Doris 1.2.0 was in a hierarchical tree structure, consisting of process_mem_tracker, query_pool_mem_tracker, query_mem_tracker, instance_mem_tracker, ExecNode_mem_tracker and so on. MemTrackers of two neighbouring layers are of parent-child relationship. Hence, any calculation mistakes in a child MemTracker will be accumulated all the way up and result in a larger scale of incredibility. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(37722).Z,width:"1280",height:"419"})),(0,o.kt)("p",null,"In Apache Doris 1.2.0 and newer, we made the structure of MemTrackers much simpler. MemTrackers are only divided into two types based on their roles: ",(0,o.kt)("strong",{parentName:"p"},"MemTracker Limiter")," and the others. MemTracker Limiter, monitoring memory usage, is unique in every query/ingestion/compaction task and global object; while the other MemTrackers traces the memory hotspots in query execution, such as HashTables in Join/Aggregation/Sort/Window functions and intermediate data in serialization, to give a picture of how memory is used in different operators or provide reference for memory control in data flushing."),(0,o.kt)("p",null,"The parent-child relationship between MemTracker Limiter and other MemTrackers is only manifested in snapshot printing. You can think of such a relationship as a symbolic link. They are not consumed at the same time, and the lifecycle of one does not affect that of the other. This makes it much easier for developers to understand and use them. "),(0,o.kt)("p",null,"MemTrackers (including MemTracker Limiter and the others) are put into a group of Maps. They allow users to print overall MemTracker type snapshot, Query/Load/Compaction task snapshot, and find out the Query/Load with the most memory usage or the most memory overusage. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(21308).Z,width:"1280",height:"1063"})),(0,o.kt)("h3",{id:"how-memtracker-works"},"How MemTracker Works"),(0,o.kt)("p",null,"To calculate memory usage of a certain execution, a MemTracker is added to a stack in Thread Local of the current thread. By reloading the malloc/free/realloc in Jemalloc or TCMalloc, MemHook obtains the actual size of the memory allocated or released, and records it in Thread Local of the current thread. When an execution is done, the relevant MemTracker will be removed from the stack. At the bottom of the stack is the MemTracker that records memory usage during the whole query/load execution process."),(0,o.kt)("p",null,"Now let me explain with a simplified query execution process."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After a Doris backend node starts, the memory usage of all threads will be recorded in the Process MemTracker."),(0,o.kt)("li",{parentName:"ul"},"When a query is submitted, a ",(0,o.kt)("strong",{parentName:"li"},"Query MemTracker")," will be added to the Thread Local Storage(TLS) Stack in the fragment execution thread."),(0,o.kt)("li",{parentName:"ul"},"Once a ScanNode is scheduled, a ",(0,o.kt)("strong",{parentName:"li"},"ScanNode MemTracker")," will be added to Thread Local Storage(TLS) Stack in the fragment execution thread. Then, any memory allocated or released in this thread will be recorded into both the Query MemTracker and the ScanNode MemTracker."),(0,o.kt)("li",{parentName:"ul"},"After a Scanner is scheduled, a Query MemTracker and a ",(0,o.kt)("strong",{parentName:"li"},"Scanner MemTracker")," will be added to the TLS Stack of the Scanner thread."),(0,o.kt)("li",{parentName:"ul"},"When the scanning is done, all MemTrackers in the Scanner Thread TLS Stack will be removed. When the ScanNode scheduling is done, the ScanNode MemTracker will be removed from the fragment execution thread. Then, similarly, when an aggregation node is scheduled, an ",(0,o.kt)("strong",{parentName:"li"},"AggregationNode MemTracker")," will be added to the fragment execution thread TLS Stack, and get removed after the scheduling is done."),(0,o.kt)("li",{parentName:"ul"},"If the query is completed, the Query MemTracker will be removed from the fragment execution thread TLS Stack. At this point, this stack should be empty. Then, from the QueryProfile, you can view the peak memory usage during the whole query execution as well as each phase (scanning, aggregation, etc.).")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(56399).Z,width:"1280",height:"424"})),(0,o.kt)("h3",{id:"how-to-use-memtracker"},"How to Use MemTracker"),(0,o.kt)("p",null,"The Doris backend Web page demonstrates real-time memory usage, which is divided into types: Query/Load/Compaction/Global. Current memory consumption and peak consumption are shown. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(45500).Z,width:"1280",height:"562"})),(0,o.kt)("p",null,"The Global types include MemTrackers of Cache and TabletMeta."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(28296).Z,width:"1280",height:"489"})),(0,o.kt)("p",null,"From the Query types, you can see the current memory consumption and peak consumption of the current query and the operators it involves (you can tell how they are related from the labels). For memory statistics of historical queries, you can check the Doris FE audit logs or BE INFO logs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(34545).Z,width:"1280",height:"762"})),(0,o.kt)("h2",{id:"memory-limit"},"Memory Limit"),(0,o.kt)("p",null,"With widely implemented memory tracking in Doris backends, we are one step closer to eliminating OOM, the cause of backend downtime and large-scale query failures. The next step is to optimize the memory limit on queries and processes to keep memory usage under control."),(0,o.kt)("h3",{id:"memory-limit-on-query"},"Memory Limit on Query"),(0,o.kt)("p",null,"Users can put a memory limit on every query. If that limit is exceeded during execution, the query will be canceled. But since version 1.2, we have allowed Memory Overcommit, which is a more flexible memory limit control. If there are sufficient memory resources, a query can consume more memory than the limit without being canceled, so users don't have to pay extra attention to memory usage; if there are not, the query will wait until new memory space is allocated; only when the newly freed up memory is not enough for the query will the query be canceled."),(0,o.kt)("p",null,'While in Apache Doris 2.0, we have realized exception safety for queries. That means any insufficient memory allocation will immediately cause the query to be canceled, which saves the trouble of checking "Cancel" status in subsequent steps.'),(0,o.kt)("h3",{id:"memory-limit-on-process"},"Memory Limit on Process"),(0,o.kt)("p",null,"On a regular basis, Doris backend retrieves the physical memory of processes and the currently available memory size from the system. Meanwhile, it collects MemTracker snapshots of all Query/Load/Compaction tasks. If a backend process exceeds its memory limit or there is insufficient memory, Doris will free up some memory space by clearing Cache and cancelling a number of queries or data ingestion tasks. These will be executed by an individual GC thread regularly."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13937).Z,width:"1280",height:"610"})),(0,o.kt)("p",null,"If the process memory consumed is over the SoftMemLimit (81% of total system memory, by default), or the available system memory drops below the Warning Water Mark (less than 3.2GB), ",(0,o.kt)("strong",{parentName:"p"},"Minor GC"),' will be triggered. At this moment, query execution will be paused at the memory allocation step, the cached data in data ingestion tasks will be force flushed, and part of the Data Page Cache and the outdated Segment Cache will be released. If the newly released memory does not cover 10% of the process memory, with Memory Overcommit enabled, Doris will start cancelling the queries which are the biggest "overcommitters" until the 10% target is met or all queries are canceled. Then, Doris will shorten the system memory checking interval and the GC interval. The queries will be continued after more memory is available.'),(0,o.kt)("p",null,"If the process memory consumed is beyond the MemLimit (90% of total system memory, by default), or the available system memory drops below the Low Water Mark (less than 1.6GB), ",(0,o.kt)("strong",{parentName:"p"},"Full GC")," will be triggered. At this time, data ingestion tasks will be stopped, and all Data Page Cache and most other Cache will be released. If, after all these steps, the newly released memory does not cover 20% of the process memory, Doris will look into all MemTrackers and find the most memory-consuming queries and ingestion tasks, and cancel them one by one. Only after the 20% target is met will the system memory checking interval and the GC interval be extended, and the queries and ingestion tasks be continued. (One garbage collection operation usually takes hundreds of \u03bcs to dozens of ms.)"),(0,o.kt)("h2",{id:"influences-and-outcomes"},"Influences and Outcomes"),(0,o.kt)("p",null,"After optimizations in memory allocation, memory tracking, and memory limit, we have substantially increased the stability and high-concurrency performance of Apache Doris as a real-time analytic data warehouse platform. OOM crash in the backend is a rare scene now. Even if there is an OOM, users can locate the problem root based on the logs and then fix it. In addition, with more flexible memory limits on queries and data ingestion, users don't have to spend extra effort taking care of memory when memory space is adequate. "),(0,o.kt)("p",null,"In the next phase, we plan to ensure completion of queries in memory overcommitment, which means less queries will have to be canceled due to memory shortage. We have broken this objective into specific directions of work: exception safety, memory isolation between resource groups, and the flushing mechanism of intermediate data. If you want to meet our developers, ",(0,o.kt)("a",{parentName:"p",href:"https://t.co/XD4uUSROft"},"this is where you find us"),"."))}u.isMDXComponent=!0},27030:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_1-cbcc6d864b892831d6e8e3acf37a356f.png"},13937:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_10-4926bcb7439768952d6d973697de2468.png"},4981:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_2-2804f7f38fc4bfec4b20bb6f1ce2416e.png"},56386:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_3-9450598001ffa0bb838abad7bc62efb6.png"},37722:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_4-90b44adf02bc4653708948cf5e65d50e.png"},21308:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_5-beba9f4c16d66d0df644f9e69a3b7db3.png"},56399:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_6-cf0ef627ae1b9d5448b54ab92f9c3180.png"},45500:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_7-4fef601c6c9f9a5fcc53b785485057d3.png"},28296:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_8-a007e2d4fa06263628f5d603471a3f79.png"},34545:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/OOM_9-32f7ad3c6b10088f0735cfd1ff0e1e39.png"}}]);