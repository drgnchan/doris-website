"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67025],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),p=r,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return a?i.createElement(g,n(n({ref:t},c),{},{components:a})):i.createElement(g,n({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,n[1]=s;for(var d=2;d<o;d++)n[d]=a[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},77071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(87462),r=(a(67294),a(3905));const o={title:"Log Analysis: How to Digest 15 Billion Logs Per Day and Keep Big Queries Within 1 Second",summary:"This article describes a large-scale data warehousing use case to provide reference for data engineers who are looking for log analytic solutions. It introduces the log processing architecture and real case practice in data ingestion, storage, and queries.",date:"2023-09-16",author:"Yuqi Liu",tags:["Best Practice"]},n=void 0,s={permalink:"/zh-CN/blog/Log-Analysis-How-to-Digest-15-Billion-Logs-Per-Day-and-Keep-Big-Queries-Within-1-Second",source:"@site/blog/Log-Analysis-How-to-Digest-15-Billion-Logs-Per-Day-and-Keep-Big-Queries-Within-1-Second.md",title:"Log Analysis: How to Digest 15 Billion Logs Per Day and Keep Big Queries Within 1 Second",description:"\x3c!--",date:"2023-09-16T00:00:00.000Z",formattedDate:"2023\u5e749\u670816\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Yuqi Liu"}],frontMatter:{title:"Log Analysis: How to Digest 15 Billion Logs Per Day and Keep Big Queries Within 1 Second",summary:"This article describes a large-scale data warehousing use case to provide reference for data engineers who are looking for log analytic solutions. It introduces the log processing architecture and real case practice in data ingestion, storage, and queries.",date:"2023-09-16",author:"Yuqi Liu",tags:["Best Practice"]},nextItem:{title:"Apache Doris announced the official release of version 1.2.7",permalink:"/zh-CN/blog/release-note-1.2.7"}},l={authorsImageUrls:[void 0]},d=[{value:"System Architecture",id:"system-architecture",level:2},{value:"Real-Case Practice",id:"real-case-practice",level:2},{value:"Stable ingestion of 15 billion logs per day",id:"stable-ingestion-of-15-billion-logs-per-day",level:3},{value:"Storage strategies to reduce costs by 50%",id:"storage-strategies-to-reduce-costs-by-50",level:3},{value:"Differentiated query strategies based on data size",id:"differentiated-query-strategies-based-on-data-size",level:3},{value:"Ongoing Plans",id:"ongoing-plans",level:2}],c={toc:d},h="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This data warehousing use case is about ",(0,r.kt)("strong",{parentName:"p"},"scale"),". The user is ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/China_Unicom"},"China Unicom"),", one of the world's biggest telecommunication service providers. Using Apache Doris, they deploy multiple petabyte-scale clusters on dozens of machines to support their 15 billion daily log additions from their over 30 business lines. Such a gigantic log analysis system is part of their cybersecurity management. For the need of real-time monitoring, threat tracing, and alerting, they require a log analytic system that can automatically collect, store, analyze, and visualize logs and event records."),(0,r.kt)("p",null,"From an architectural perspective, the system should be able to undertake real-time analysis of various formats of logs, and of course, be scalable to support the huge and ever-enlarging data size. The rest of this post is about what their log processing architecture looks like, and how they realize stable data ingestion, low-cost storage, and quick queries with it."),(0,r.kt)("h2",{id:"system-architecture"},"System Architecture"),(0,r.kt)("p",null,"This is an overview of their data pipeline. The logs are collected into the data warehouse, and go through several layers of processing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"real-time-data-warehouse-2.0",src:a(33298).Z,width:"1280",height:"609"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ODS"),": Original logs and alerts from all sources are gathered into Apache Kafka. Meanwhile, a copy of them will be stored in HDFS for data verification or replay."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DWD"),": This is where the fact tables are. Apache Flink cleans, standardizes, backfills, and de-identifies the data, and write it back to Kafka. These fact tables will also be put into Apache Doris, so that Doris can trace a certain item or use them for dashboarding and reporting. As logs are not averse to duplication, the fact tables will be arranged in the ",(0,r.kt)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/data-table/data-model#duplicate-model"},"Duplicate Key model")," of Apache Doris.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DWS"),": This layer aggregates data from DWD and lays the foundation for queries and analysis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ADS"),": In this layer, Apache Doris auto-aggregates data with its Aggregate Key model, and auto-updates data with its Unique Key model. ")),(0,r.kt)("p",null,"Architecture 2.0 evolves from Architecture 1.0, which is supported by ClickHouse and Apache Hive. The transition arised from the user's needs for real-time data processing and multi-table join queries. In their experience with ClickHouse, they found inadequate support for concurrency and multi-table joins, manifested by frequent timeouts in dashboarding and OOM errors in distributed joins."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"real-time-data-warehouse-1.0",src:a(77361).Z,width:"1280",height:"607"})),(0,r.kt)("p",null,"Now let's take a look at their practice in data ingestion, storage, and queries with Architecture 2.0."),(0,r.kt)("h2",{id:"real-case-practice"},"Real-Case Practice"),(0,r.kt)("h3",{id:"stable-ingestion-of-15-billion-logs-per-day"},"Stable ingestion of 15 billion logs per day"),(0,r.kt)("p",null,"In the user's case, their business churns out 15 billion logs every day. Ingesting such data volume quickly and stably is a real problem. With Apache Doris, the recommended way is to use the Flink-Doris-Connector. It is developed by the Apache Doris community for large-scale data writing. The component requires simple configuration. It implements Stream Load and can reach a writing speed of 200,000~300,000 logs per second, without interrupting the data analytic workloads."),(0,r.kt)("p",null,"A lesson learned is that when using Flink for high-frequency writing, you need to find the right parameter configuration for your case to avoid data version accumulation. In this case, the user made the following optimizations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flink Checkpoint"),": They increase the checkpoint interval from 15s to 60s to reduce writing frequency and the number of transactions processed by Doris per unit of time. This can relieve data writing pressure and avoid generating too many data versions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Pre-Aggregation"),": For data of the same ID but comes from various tables, Flink will pre-aggregate it based on the primary key ID and create a flat table, in order to avoid excessive resource consumption caused by multi-source data writing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Doris Compaction"),": The trick here includes finding the right Doris backend (BE) parameters to allocate the right amount of CPU resources for data compaction, setting the appropriate number of data partitions, buckets, and replicas (too much data tablets will bring huge overheads), and dialing up ",(0,r.kt)("inlineCode",{parentName:"li"},"max_tablet_version_num")," to avoid version accumulation.")),(0,r.kt)("p",null,"These measures together ensure daily ingestion stability. The user has witnessed stable performance and low compaction score in Doris backend. In addition, the combination of data pre-processing in Flink and the ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/data-model#unique-model"},"Unique Key model")," in Doris can ensure quicker data updates."),(0,r.kt)("h3",{id:"storage-strategies-to-reduce-costs-by-50"},"Storage strategies to reduce costs by 50%"),(0,r.kt)("p",null,"The size and generation rate of logs also impose pressure on storage. Among the immense log data, only a part of it is of high informational value, so storage should be differentiated. The user has three storage strategies to reduce costs. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ZSTD (ZStandard) compression algorithm"),': For tables larger than 1TB, specify the compression method as "ZSTD" upon table creation, it will realize a compression ratio of 10:1. '),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tiered storage of hot and cold data"),": This is supported by the ",(0,r.kt)("a",{parentName:"li",href:"https://blog.devgenius.io/hot-cold-data-separation-what-why-and-how-5f7c73e7a3cf"},"new feature"),' of Doris. The user sets a data "cooldown" period of 7 days. That means data from the past 7 days (namely, hot data) will be stored in SSD. As time goes by, hot data "cools down" (getting older than 7 days), it will be automatically moved to HDD, which is less expensive. As data gets even "colder", it will be moved to object storage for much lower storage costs. Plus, in object storage, data will be stored with only one copy instead of three. This further cuts down costs and the overheads brought by redundant storage. '),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Differentiated replica numbers for different data partitions"),": The user has partitioned their data by time range. The principle is to have more replicas for newer data partitions and less for the older ones. In their case, data from the past 3 months is frequently accessed, so they have 2 replicas for this partition. Data that is 3~6 months old has two replicas, and data from 6 months ago has one single copy. ")),(0,r.kt)("p",null,"With these three strategies, the user has reduced their storage costs by 50%."),(0,r.kt)("h3",{id:"differentiated-query-strategies-based-on-data-size"},"Differentiated query strategies based on data size"),(0,r.kt)("p",null,"Some logs must be immediately traced and located, such as those of abnormal events or failures. To ensure real-time response to these queries, the user has different query strategies for different data sizes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Less than 100G"),": The user utilizes the dynamic partitioning feature of Doris. Small tables will be partitioned by date and large tables will be partitioned by hour. This can avoid data skew. To further ensure balance of data within a partition, they use the snowflake ID as the bucketing field. They also set a starting offset of 20 days, which means data of the recent 20 days will be kept. In this way, they find the balance point between data backlog and analytic needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"100G~1T"),": These tables have their materialized views, which are the pre-computed result sets stored in Doris. Thus, queries on these tables will be much faster and less resource-consuming. The DDL syntax of materialized views in Doris is the same as those in PostgreSQL and Oracle."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"More than 100T"),": These tables are put into the Aggregate Key model of Apache Doris and pre-aggregate them. ",(0,r.kt)("strong",{parentName:"li"},"In this way, we enable queries of 2 billion log records to be done in 1~2s.")," ")),(0,r.kt)("p",null,"These strategies have shortened the response time of queries. For example, a query of a specific data item used to take minutes, but now it can be finished in milliseconds. In addition, for big tables that contain 10 billion data records, queries on different dimensions can all be done in a few seconds."),(0,r.kt)("h2",{id:"ongoing-plans"},"Ongoing Plans"),(0,r.kt)("p",null,"The user is now testing with the newly added ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index?_highlight=inverted"},"inverted index")," in Apache Doris. It is designed to speed up full-text search of strings as well as equivalence and range queries of numerics and datetime. They have also provided their valuable feedback about the auto-bucketing logic in Doris: Currently, Doris decides the number of buckets for a partition  based on the data size of the previous partition. The problem for the user is, most of their new data comes in during daytime, but little at nights. So in their case, Doris creates too many buckets for night data but too few in daylight, which is the opposite of what they need. They hope to add a new auto-bucketing logic, where the reference for Doris to decide the number of buckets is the data size and distribution of the previous day. They've come to the ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"Apache Doris community")," and we are now working on this optimization."))}u.isMDXComponent=!0},33298:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Unicom-1-0c734fbe7faf4875c3a647ac5136cce9.png"},77361:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Unicom-2-6b242b382e769bf8acd4f0e08471045f.png"}}]);