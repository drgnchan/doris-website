"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28289],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=r,p=h["".concat(c,".").concat(m)]||h[m]||d[m]||i;return a?n.createElement(p,o(o({ref:t},u),{},{components:a})):n.createElement(p,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={title:"Query Cache",language:"en"},o=void 0,s={unversionedId:"advanced/cache/query-cache",id:"advanced/cache/query-cache",title:"Query Cache",description:"\x3c!--",source:"@site/docs/advanced/cache/query-cache.md",sourceDirName:"advanced/cache",slug:"/advanced/cache/query-cache",permalink:"/docs/dev/advanced/cache/query-cache",draft:!1,tags:[],version:"current",frontMatter:{title:"Query Cache",language:"en"},sidebar:"docs",previous:{title:"Partition Cache",permalink:"/docs/dev/advanced/cache/partition-cache-manual"},next:{title:"SQL Cache",permalink:"/docs/dev/advanced/cache/sql-cache-manual"}},c={},l=[{value:"Demand scenario",id:"demand-scenario",level:2},{value:"solution",id:"solution",level:2},{value:"scenes to be used",id:"scenes-to-be-used",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Related parameters",id:"related-parameters",level:2},{value:"Unfinished business",id:"unfinished-business",level:2}],u={toc:l},h="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-cache"},"Query Cache"),(0,r.kt)("h2",{id:"demand-scenario"},"Demand scenario"),(0,r.kt)("p",null,"Most data analysis scenarios are to write less and read more. The data is written once and read multiple times frequently. For example, the dimensions and indicators involved in a report are calculated once in the early morning, but hundreds or even thousands of times a day. Page access, so it is very suitable for caching the result set. In data analysis or BI applications, the following business scenarios exist:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"High concurrency scenario"),", Doris can better support high concurrency, but a single server cannot carry too high QPS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Complex Chart Kanban"),", complex Dashboard or large-screen application, data comes from multiple tables, and each page has dozens of queries. Although each query only takes tens of milliseconds, the overall query time will be several seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Trend Analysis"),", for queries within a given date range, indicators are displayed on a daily basis, such as querying the trend of the number of users in the last 7 days. This type of query has a large amount of data, a wide query range, and the query time often takes tens of seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User repeated query"),", if the product does not have an anti-refresh mechanism, the user repeatedly refreshes the page due to manual error or other reasons, resulting in a large number of repeated SQL submissions.")),(0,r.kt)("p",null,"In the above four scenarios, the solution at the application layer puts the query results into Redis and periodically updates the cache or the user manually refreshes the cache. However, this solution has the following problems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inconsistent data"),", unable to detect data updates, causing users to often see old data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Low hit rate"),", the entire query result is cached. If the data is written in real time, the cache fails frequently, the hit rate is low and the system load is heavy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Additional Cost"),", introducing external cache components will bring system complexity and increase additional costs.")),(0,r.kt)("h2",{id:"solution"},"solution"),(0,r.kt)("p",null,"This partition cache strategy can solve the above problems, giving priority to ensuring data consistency, and on this basis, refining the cache granularity and improving the hit rate, so it has the following characteristics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users do not need to worry about data consistency. Cache invalidation is controlled through versioning. The cached data is consistent with the data queried from BE."),(0,r.kt)("li",{parentName:"ul"},"There are no additional components and costs, the cache results are stored in BE's memory, and users can adjust the cache memory size as needed"),(0,r.kt)("li",{parentName:"ul"},"Implemented two caching strategies, SQLCache and PartitionCache, the latter has a finer cache granularity"),(0,r.kt)("li",{parentName:"ul"},"Use consistent hashing to solve the problem of BE nodes going online and offline. The caching algorithm in BE is an improved LRU")),(0,r.kt)("h2",{id:"scenes-to-be-used"},"scenes to be used"),(0,r.kt)("p",null,"Currently, it supports two methods: SQL Cache and Partition Cache, and supports OlapTable internal table and Hive external table."),(0,r.kt)("p",null,"SQL Cache: Only SQL statements that are completely consistent will hit the cache. For details, see: sql-cache-manual.md"),(0,r.kt)("p",null,"Partition Cache: Multiple SQLs can hit the cache using the same table partition, so it has a higher hit rate than SQL Cache. For details, see: partition-cache-manual.md"),(0,r.kt)("h2",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"FE monitoring items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"query_table //The number of tables in Query\nquery_olap_table //The number of Olap tables in Query\ncache_mode_sql //Identify the number of Query whose cache mode is sql\ncache_hit_sql //The number of Query hits in Cache with mode sql\nquery_mode_partition //The number of queries that identify the cache mode as Partition\ncache_hit_partition //The number of Query hits through Partition\npartition_all //All partitions scanned in Query\npartition_hit //Number of partitions hit through Cache\n\nCache hit rate = (cache_hit_sql + cache_hit_partition) / query_olap_table\nPartition hit rate = partition_hit / partition_all\n")),(0,r.kt)("p",null,"BE monitoring items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"query_cache_memory_total_byte //Cache memory size\nquery_query_cache_sql_total_count //The number of SQL cached\nquery_cache_partition_total_count //Number of Cache partitions\n\nSQL average data size = cache_memory_total / cache_sql_total\nPartition average data size = cache_memory_total / cache_partition_total\n")),(0,r.kt)("p",null,"Other monitoring: You can view the CPU and memory indicators of the BE node, Query Percentile and other indicators in the Query statistics from Grafana, and adjust the Cache parameters to achieve business goals."),(0,r.kt)("h2",{id:"related-parameters"},"Related parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"cache_result_max_row_count")),(0,r.kt)("p",null,"The maximum number of rows that the query result set can put into the cache. The default is 3000."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_result_max_row_count=3000\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"cache_result_max_data_size")),(0,r.kt)("p",null,"The maximum data size of the query result set placed in the cache is 30M by default. It can be adjusted according to the actual situation, but it is recommended not to set it too large to avoid excessive memory usage. Result sets exceeding this size will not be cached."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_result_max_data_size=31457280\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"cache_last_version_interval_second")),(0,r.kt)("p",null,"The minimum time interval between the latest version of the cached query partition and the current version. Only the query results of partitions that are larger than this interval and have not been updated will be cached. The default is 900, in seconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_last_version_interval_second=900\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"query_cache_max_size_mb and query_cache_elasticity_size")),(0,r.kt)("p",null,"query_cache_max_size_mb is the upper memory limit of the cache, query_cache_elasticity_size is the memory size that the cache can stretch. When the total cache size on BE exceeds query_cache_max_size + cache_elasticity_size, it will start to be cleaned up and the memory will be controlled below query_cache_max_size."),(0,r.kt)("p",null,"These two parameters can be set according to the number of BE nodes, node memory size, and cache hit rate. Calculation method: If 10,000 Queries are cached, each Query caches 1,000 rows, each row is 128 bytes, and is distributed on 10 BEs, then each BE requires about 128M memory (10,000 ",(0,r.kt)("em",{parentName:"p"}," 1,000 ")," 128/10)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"vim be/conf/be.conf\nquery_cache_max_size_mb=256\nquery_cache_elasticity_size_mb=128\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"cache_max_partition_count")),(0,r.kt)("p",null,"Parameters unique to Partition Cache. The maximum number of BE partitions refers to the maximum number of partitions corresponding to each SQL. If it is partitioned by date, it can cache data for more than 2 years. If you want to keep the cache for a longer time, please set this parameter larger and modify the parameters at the same time. cache_result_max_row_count and cache_result_max_data_size."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"vim be/conf/be.conf\ncache_max_partition_count=1024\n")),(0,r.kt)("h2",{id:"unfinished-business"},"Unfinished business"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can T+1 data also be cached using Partition? Currently it is not supported."),(0,r.kt)("li",{parentName:"ul"},"Similar SQL, 2 indicators were queried before, and now 3 indicators are queried. Can the cache of 2 indicators be used? Not currently supported"),(0,r.kt)("li",{parentName:"ul"},"Partition by date, but the data needs to be summarized by week dimension. Can PartitionCache be used? Not currently supported")))}d.isMDXComponent=!0}}]);