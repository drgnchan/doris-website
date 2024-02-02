"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46848],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>m});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},13996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(45072),r=(a(11504),a(95788));const i={title:"Partition Cache",language:"en"},o=void 0,s={unversionedId:"advanced/cache/partition-cache",id:"version-1.2/advanced/cache/partition-cache",title:"Partition Cache",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/advanced/cache/partition-cache.md",sourceDirName:"advanced/cache",slug:"/advanced/cache/partition-cache",permalink:"/docs/1.2/advanced/cache/partition-cache",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Partition Cache",language:"en"},sidebar:"docs",previous:{title:"Temporary partition",permalink:"/docs/1.2/advanced/partition/table-temp-partition"},next:{title:"AutoBucket",permalink:"/docs/1.2/advanced/autobucket"}},l={},c=[{value:"Demand scenario",id:"demand-scenario",level:2},{value:"Solution",id:"solution",level:2},{value:"SQLCache",id:"sqlcache",level:2},{value:"PartitionCache",id:"partitioncache",level:2},{value:"Design Principles",id:"design-principles",level:3},{value:"Some restrictions",id:"some-restrictions",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"Enable SQLCache",id:"enable-sqlcache",level:3},{value:"Enable PartitionCache",id:"enable-partitioncache",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Optimization parameters",id:"optimization-parameters",level:3},{value:"Unfinished Matters",id:"unfinished-matters",level:2}],u={toc:c},h="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(h,(0,n.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"partition-cache"},"Partition Cache"),(0,r.yg)("h2",{id:"demand-scenario"},"Demand scenario"),(0,r.yg)("p",null,"In most data analysis scenarios, write less and read more. Data is written once and read frequently. For example, the dimensions and indicators involved in a report are calculated at one time in the early morning, but there are hundreds or even thousands of times every day. page access, so it is very suitable for caching the result set. In data analysis or BI applications, the following business scenarios exist:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"High concurrency scenario"),", Doris can better support high concurrency, but a single server cannot carry too high QPS"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Kanban for complex charts"),", complex Dashboard or large-screen applications, the data comes from multiple tables, each page has dozens of queries, although each query is only tens of milliseconds, but the overall query time will be in a few seconds"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Trend analysis"),", the query for a given date range, the indicators are displayed by day, such as querying the trend of the number of users in the last 7 days, this type of query has a large amount of data and a wide range of queries, and the query time often takes tens of seconds"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"User repeated query"),", if the product does not have an anti-reload mechanism, the user repeatedly refreshes the page due to hand error or other reasons, resulting in a large number of repeated SQL submissions")),(0,r.yg)("p",null,"In the above four scenarios, the solution at the application layer is to put the query results in Redis, update the cache periodically or manually refresh the cache by the user, but this solution has the following problems:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Data inconsistency"),", unable to perceive the update of data, causing users to often see old data"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Low hit rate"),", cache the entire query result, if the data is written in real time, the cache is frequently invalidated, the hit rate is low and the system load is heavy"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Additional cost"),", the introduction of external cache components will bring system complexity and increase additional costs")),(0,r.yg)("h2",{id:"solution"},"Solution"),(0,r.yg)("p",null,"This partitioned caching strategy can solve the above problems, giving priority to ensuring data consistency. On this basis, the cache granularity is refined and the hit rate is improved. Therefore, it has the following characteristics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Users do not need to worry about data consistency, cache invalidation is controlled by version, and the cached data is consistent with the data queried from BE"),(0,r.yg)("li",{parentName:"ul"},"No additional components and costs, cached results are stored in BE's memory, users can adjust the cache memory size as needed"),(0,r.yg)("li",{parentName:"ul"},"Implemented two caching strategies, SQLCache and PartitionCache, the latter has a finer cache granularity"),(0,r.yg)("li",{parentName:"ul"},"Use consistent hashing to solve the problem of BE nodes going online and offline. The caching algorithm in BE is an improved LRU")),(0,r.yg)("h2",{id:"sqlcache"},"SQLCache"),(0,r.yg)("p",null,"SQLCache stores and retrieves the cache according to the SQL signature, the partition ID of the queried table, and the latest version of the partition. The combination of the three determines a cached data set. If any one changes, such as SQL changes, such as query fields or conditions are different, or the version changes after the data is updated, the cache will not be hit."),(0,r.yg)("p",null,"If multiple tables are joined, use the latest updated partition ID and the latest version number. If one of the tables is updated, the partition ID or version number will be different, and the cache will also not be hit."),(0,r.yg)("p",null,"SQLCache is more suitable for T+1 update scenarios. Data is updated in the early morning. The results obtained from the BE for the first query are put into the cache, and subsequent identical queries are obtained from the cache. Real-time update data can also be used, but there may be a problem of low hit rate. You can refer to the following PartitionCache."),(0,r.yg)("h2",{id:"partitioncache"},"PartitionCache"),(0,r.yg)("h3",{id:"design-principles"},"Design Principles"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"SQL can be split in parallel, Q = Q1 \u222a Q2 ... \u222a Qn, R= R1 \u222a R2 ... \u222a Rn, Q is the query statement, R is the result set"),(0,r.yg)("li",{parentName:"ol"},"Split into read-only partitions and updatable partitions, read-only partitions are cached, and update partitions are not cached")),(0,r.yg)("p",null,"As above, query the number of users per day in the last 7 days, such as partitioning by date, the data is only written to the partition of the day, and the data of other partitions other than the day is fixed. Under the same query SQL, query a certain part that does not update Partition indicators are fixed. As follows, the number of users in the first 7 days is queried on 2020-03-09, the data from 2020-03-03 to 2020-03-07 comes from the cache, the first query on 2020-03-08 comes from the partition, and subsequent queries come from the cache , 2020-03-09 is from the partition because it is constantly being written that day."),(0,r.yg)("p",null,"Therefore, when querying N days of data, the data is updated on the most recent D days. Every day is only a query with a different date range and a similar query. Only D partitions need to be queried, and the other parts are from the cache, which can effectively reduce the cluster load and reduce query time."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> SELECT eventdate,count(userid) FROM testdb.appevent WHERE eventdate>="2020-03-03" AND eventdate<="2020-03-09" GROUP BY eventdate ORDER BY eventdate;\n+------------+-----------------+\n| eventdate  | count(`userid`) |\n+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n| 2020-03-08 |              40 | //First from partition, subsequent from cache\n| 2020-03-09 |              25 | //from partition\n+------------+-----------------+\n7 rows in set (0.02 sec)\n')),(0,r.yg)("p",null,"In PartitionCache, the first-level key of the cache is the 128-bit MD5 signature of the SQL after the partition condition is removed. The following is the rewritten SQL to be signed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT eventdate,count(userid) FROM testdb.appevent GROUP BY eventdate ORDER BY eventdate;\n")),(0,r.yg)("p",null,"The cached second-level key is the content of the partition field of the query result set, such as the content of the eventdate column of the query result above, and the auxiliary information of the second-level key is the version number and version update time of the partition."),(0,r.yg)("p",null,"The following demonstrates the process of executing the above SQL for the first time on 2020-03-09:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Get data from cache")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n+------------+-----------------+\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"SQL and data to get data from BE SQL and data to get data from BE")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT eventdate,count(userid) FROM testdb.appevent WHERE eventdate>="2020-03-08" AND eventdate<="2020-03-09" GROUP BY eventdate ORDER BY eventdate;\n\n+------------+-----------------+\n| 2020-03-08 |              40 |\n+------------+-----------------+\n| 2020-03-09 |              25 | \n+------------+-----------------+\n')),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The last data sent to the terminal")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+------------+-----------------+\n| eventdate  | count(`userid`) |\n+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n| 2020-03-08 |              40 |\n| 2020-03-09 |              25 |\n+------------+-----------------+\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"data sent to cache")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+------------+-----------------+\n| 2020-03-08 |              40 |\n+------------+-----------------+\n")),(0,r.yg)("p",null,"Partition cache is suitable for partitioning by date, some partitions are updated in real time, and the query SQL is relatively fixed."),(0,r.yg)("p",null,"Partition fields can also be other fields, but need to ensure that only a small number of partition updates."),(0,r.yg)("h3",{id:"some-restrictions"},"Some restrictions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Only OlapTable is supported, other tables such as MySQL have no version information and cannot sense whether the data is updated"),(0,r.yg)("li",{parentName:"ul"},"Only supports grouping by partition field, does not support grouping by other fields, grouping by other fields, the grouped data may be updated, which will cause the cache to be invalid"),(0,r.yg)("li",{parentName:"ul"},"Only the first half of the result set, the second half of the result set and all cache hits are supported, and the result set is not supported to be divided into several parts by the cached data")),(0,r.yg)("h2",{id:"how-to-use"},"How to use"),(0,r.yg)("h3",{id:"enable-sqlcache"},"Enable SQLCache"),(0,r.yg)("p",null,"Make sure cache_enable_sql_mode=true in fe.conf (default is true)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_enable_sql_mode=true\n")),(0,r.yg)("p",null,"Setting variables in MySQL command line"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> set [global] enable_sql_cache=true;\n")),(0,r.yg)("p",null,"Note: global is a global variable, not referring to the current session variable"),(0,r.yg)("h3",{id:"enable-partitioncache"},"Enable PartitionCache"),(0,r.yg)("p",null,"Make sure cache_enable_partition_mode=true in fe.conf (default is true)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_enable_partition_mode=true\n")),(0,r.yg)("p",null,"Setting variables in MySQL command line"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> set [global] enable_partition_cache=true;\n")),(0,r.yg)("p",null,"If two caching strategies are enabled at the same time, the following parameters need to be paid attention to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"cache_last_version_interval_second=900\n")),(0,r.yg)("p",null,"If the interval between the latest version of the partition is greater than cache_last_version_interval_second, the entire query result will be cached first. If it is less than this interval, if it meets the conditions of PartitionCache, press PartitionCache data."),(0,r.yg)("h3",{id:"monitoring"},"Monitoring"),(0,r.yg)("p",null,"FE monitoring items:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"query_table          //Number of tables in Query\nquery_olap_table     //Number of Olap tables in Query\ncache_mode_sql       //Identify the number of queries whose cache mode is sql\ncache_hit_sql        //The number of Cache hits by Query with mode sql\nquery_mode_partition //Identify the number of queries whose cache mode is Partition\ncache_hit_partition  //Number of queries hit by Partition\npartition_all        //All partitions scanned in Query\npartition_hit        //Number of partitions hit by Cache\n\nCache hit ratio = (cache_hit_sql + cache_hit_partition) / query_olap_table\nPartition hit ratio = partition_hit / partition_all\n")),(0,r.yg)("p",null,"BE's monitoring items:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"query_cache_memory_total_byte     //Cache memory size\nquery_query_cache_sql_total_count //Number of SQL in Cache\nquery_cache_partition_total_count //Number of Cache partitions\n\nSQL average data size = cache_memory_total / cache_sql_total\nPartition average data size = cache_memory_total / cache_partition_total\n")),(0,r.yg)("p",null,"Other monitoring: You can view the CPU and memory indicators of the BE node, the Query Percentile and other indicators in the Query statistics from Grafana, and adjust the Cache parameters to achieve business goals."),(0,r.yg)("h3",{id:"optimization-parameters"},"Optimization parameters"),(0,r.yg)("p",null,"The configuration item cache_result_max_row_count of FE, the maximum number of rows in the cache for the query result set, can be adjusted according to the actual situation, but it is recommended not to set it too large to avoid taking up too much memory, and the result set exceeding this size will not be cached."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_result_max_row_count=3000\n")),(0,r.yg)("p",null,"The maximum number of partitions in BE cache_max_partition_count refers to the maximum number of partitions corresponding to each SQL. If it is partitioned by date, it can cache data for more than 2 years. If you want to keep the cache for a longer time, please set this parameter to a larger value and modify it at the same time. Parameter of cache_result_max_row_count."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim be/conf/be.conf\ncache_max_partition_count=1024\n")),(0,r.yg)("p",null,"The cache memory setting in BE consists of two parameters, query_cache_max_size and query_cache_elasticity_size (in MB). If the memory exceeds query_cache_max_size + cache_elasticity_size, it will start to clean up and control the memory to below query_cache_max_size. These two parameters can be set according to the number of BE nodes, node memory size, and cache hit rate."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"query_cache_max_size_mb=256\nquery_cache_elasticity_size_mb=128\n")),(0,r.yg)("p",null,"Calculation method:"),(0,r.yg)("p",null,"If 10000 queries are cached, each query caches 1000 rows, each row is 128 bytes, distributed on 10 BEs, then each BE requires about 128M memory (10000 ",(0,r.yg)("em",{parentName:"p"}," 1000 ")," 128/10)."),(0,r.yg)("h2",{id:"unfinished-matters"},"Unfinished Matters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Can the data of T+1 also be cached by Partition? Currently not supported"),(0,r.yg)("li",{parentName:"ul"},"Similar SQL, 2 indicators were queried before, but now 3 indicators are queried. Can the cache of 2 indicators be used? Not currently supported"),(0,r.yg)("li",{parentName:"ul"},"Partition by date, but need to aggregate data by week dimension, is PartitionCache available? Not currently supported")))}d.isMDXComponent=!0}}]);