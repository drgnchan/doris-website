"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[47584],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>m});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),p=n,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},66436:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(45072),n=(a(11504),a(95788));const o={title:"ClickHouse & Kudu to Doris: 10X concurrency increased, 70% latency down",language:"en",summary:"The value-added report provided by Linkedcare to customers was initially provided by ClickHouse, which was later replaced by Apache Doris",date:"2023-01-28",author:"Yi Yang",tags:["Best Practice"],image:"/images/clickhouse-kudu-to-doris.png"},i=void 0,s={permalink:"/blog/linkedcare",source:"@site/blog/linkedcare.md",title:"ClickHouse & Kudu to Doris: 10X concurrency increased, 70% latency down",description:"\x3c!--",date:"2023-01-28T00:00:00.000Z",formattedDate:"January 28, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Yi Yang"}],frontMatter:{title:"ClickHouse & Kudu to Doris: 10X concurrency increased, 70% latency down",language:"en",summary:"The value-added report provided by Linkedcare to customers was initially provided by ClickHouse, which was later replaced by Apache Doris",date:"2023-01-28",author:"Yi Yang",tags:["Best Practice"],image:"/images/clickhouse-kudu-to-doris.png"},prevItem:{title:"Apache Doris announced the official release of version 1.2.2",permalink:"/blog/release-note-1.2.2"},nextItem:{title:"A glimpse of the next-generation analytical database",permalink:"/blog/summit"}},c={authorsImageUrls:[void 0]},l=[{value:"Author:",id:"author",level:2},{value:"Data Service Architecture Requirements",id:"data-service-architecture-requirements",level:2},{value:"Early Problems Found: ClickHouse Shuts Down When High-concurrency Occurs",id:"early-problems-found-clickhouse-shuts-down-when-high-concurrency-occurs",level:2},{value:"Selection between Doris, Clickhouse and Kudu",id:"selection-between-doris-clickhouse-and-kudu",level:2},{value:"Data Warehouse Architecture Requirements",id:"data-warehouse-architecture-requirements",level:2},{value:"Early Problems Found: Kudu+Impala Underperforms",id:"early-problems-found-kuduimpala-underperforms",level:2},{value:"New Data Warehouse Architecture Design Based on Doris",id:"new-data-warehouse-architecture-design-based-on-doris",level:2},{value:"GitHub:",id:"github",level:2},{value:"Apache Doris Website:",id:"apache-doris-website",level:2}],u={toc:l},d="wrapper";function h(e){let{components:t,...o}=e;return(0,n.yg)(d,(0,r.c)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"kv",src:a(95628).c,width:"900",height:"383"})),(0,n.yg)("h2",{id:"author"},"Author:"),(0,n.yg)("p",null,"YiYang, Senior Big Data Developer, Linkedcare"),(0,n.yg)("h1",{id:"about-linkedcare"},"About Linkedcare"),(0,n.yg)("p",null,"Linkedcare is a leading SaaS software company in the health technology industry, focusing on the medical dental and cosmetic plastic surgery. In 2021, it was selected as one of the top 150 digital healthcare companies in the world by CB Insights. Linkedcare has served thousands of plastic surgery institutions in Los Angeles, Taiwan, and Hong Kong. Linkedcare also provides integrated management system services for dental clinics, covering electronic medical records, customer relationship management, intelligent marketing, B2B trading platform, insurance payment, BI tools, etc."),(0,n.yg)("h1",{id:"doris-evolution-in-linkedcare"},"Doris' Evolution in Linkedcare"),(0,n.yg)("p",null,"Let me briefly introduce Doris's development in Linkedcare first. In general, the application of Doris in Linkedcare can be divided into two stages:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The value-added report provided by Linkedcare to customers was initially provided by ClickHouse, which was later replaced by Apache Doris;"),(0,n.yg)("li",{parentName:"ol"},"Due to the continuous improvement of real-time data analysis requirements, T+1's data reporting gradually cannot meet business needs. Linkedcare needs a data warehouse that can handle real-time processing, and Doris has been introduced into the company's data warehouse since then. With the support of the Apache Doris community and the SelectDB professional technical team, our business data has been gradually migrated from Kudu to Doris.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"1",src:a(27144).c,width:"1696",height:"866"})),(0,n.yg)("h1",{id:"data-service-architecture-from-clickhouse-to-doris"},"Data Service Architecture: From ClickHouse to Doris"),(0,n.yg)("h2",{id:"data-service-architecture-requirements"},"Data Service Architecture Requirements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Support complex queries: When customers do self-service on the dashboard, a complex SQL query statement will be generated to directly query the database, and the complexity of the statement is unknown, which adds a lot of pressure on the database and affects query performance."),(0,n.yg)("li",{parentName:"ul"},"High concurrency and low latency: At least 100 concurrent queries can be supported, and query results can be return within 1 second;"),(0,n.yg)("li",{parentName:"ul"},"Real-time data update: The report data comes from the SaaS system. When the customer modifies the historical data in the system, the report data must be changed accordingly to ensure consistentency, which requires real-time processing."),(0,n.yg)("li",{parentName:"ul"},"Low cost and easy deployment: There are a lot of private cloud customers in our SaaS business. In order to reduce labor costs, the business requires that the architecture deployment and operation and maintenance be simple enough.")),(0,n.yg)("h2",{id:"early-problems-found-clickhouse-shuts-down-when-high-concurrency-occurs"},"Early Problems Found: ClickHouse Shuts Down When High-concurrency Occurs"),(0,n.yg)("p",null,"The previous project chose ClickHouse to provide data query services, but serious concurrency problems occurred during use:\n10 concurrent queries will cause ClickHouse to shut down, resulting in the inability to provide services to customers normally, which is the direct reason for us to replace ClickHouse."),(0,n.yg)("p",null,"In addition, there are several severe problems:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The cost of ClickHouse services on the cloud is very high, and the dependency on ClickHouse components is relatively high. The frequent interaction between ClickHouse and Zookeeper during data ingestion will put greater pressure on stability."),(0,n.yg)("li",{parentName:"ol"},"How to seamlessly migrate data without affecting the normal use of customers is another problem.")),(0,n.yg)("h2",{id:"selection-between-doris-clickhouse-and-kudu"},"Selection between Doris, Clickhouse and Kudu"),(0,n.yg)("p",null,"To deal with the existing problems and meet the business requirements, we decided to conduct research on Doris (0.14), Clickhouse, and Kudu respectively."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"2",src:a(84636).c,width:"1600",height:"454"})),(0,n.yg)("p",null,"As shown in the table above, we made a deep comparison of these 3 databases. And we can see that Doris has excellent performance in many aspects:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"High concurrency: Doris can handle high-concurrency of 1,000 and more. So it will easily solve the problem of 10 concurrent queries which led ClickHouse to shut down."),(0,n.yg)("li",{parentName:"ul"},"Query performance: Doris can achieve millisecond-level query response. In single-table query, although Doris and ClickHouse are almost equivalent in query performance, in multi-table query, Doris is far better than ClickHouse. Doris can make sure that the QPS won't drop when high-concurrency happens."),(0,n.yg)("li",{parentName:"ul"},"Data update: Doris' data model can meet our needs for data update to ensure the consistency of system data and business data, which will be described in detail below."),(0,n.yg)("li",{parentName:"ul"},"Ease of use: Doris has a flat architecture, simple and fast deployment, fully-completed data ingest functions, and good at scaling out; At the same time, Doris can automatically perform replica balancing internally, and the operation and maintenance cost is extremely low. However, ClickHouse and Kudu rely heavily on components and require a lot of preparatory work for use. This requires a professional team to handle a large number of daily operation and maintenance tasks."),(0,n.yg)("li",{parentName:"ul"},"Standard SQL: Doris is compatible with the MySQL protocol and uses standard SQL. It is easy for developers to get started and does not require additional learning costs."),(0,n.yg)("li",{parentName:"ul"},"Distributed JOINs: Doris supports distributed JOINs, but ClickHouse has limitations in JOIN queries and functions as well as poor maintainability."),(0,n.yg)("li",{parentName:"ul"},"Active community: The Apache Doris open source community is active with passion. At the same time, SelectDB provides a professional and full-time team for technical support for the Doris community. If you encounter problems, you can directly contact the community and find out a solution in time.")),(0,n.yg)("p",null,"From the above research, we can find that Doris has excellent capabilities in all aspects and is very in line with our needs. Therefore, we adopt Doris instead of ClickHouse, which solves the problems of poor concurrency and the shutdown of ClickHouse."),(0,n.yg)("h1",{id:"data-warehouse-architecture-from-kuduimpala-to-doris"},"Data Warehouse Architecture: From Kudu+Impala to Doris"),(0,n.yg)("p",null,"In the process of using data reports, we have gradually discovered many advantages of Doris, so we decided to introduce Doris to the company's data warehouse."),(0,n.yg)("h2",{id:"data-warehouse-architecture-requirements"},"Data Warehouse Architecture Requirements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"When the customer modifies the historical data in the system, the report data should also be changed accordingly. At the same time, there should be a feature that can help customers to change the value of a single column;"),(0,n.yg)("li",{parentName:"ul"},"When Flink extracts the full amount of data from the business database and writes it into the data warehouse frequently, the version compaction must keep up with the speed of new version generation, and will not cause version accumulation;"),(0,n.yg)("li",{parentName:"ul"},"Through resource isolation and other functions, Doris reduces the possibility of resource preemption, improves resource utilization, and makes full use of resources on the core computing nodes;"),(0,n.yg)("li",{parentName:"ul"},"Due to the limited memory resources in the company, overloaded tasks must be completed without increasing the number of clusters.")),(0,n.yg)("h2",{id:"early-problems-found-kuduimpala-underperforms"},"Early Problems Found: Kudu+Impala Underperforms"),(0,n.yg)("p",null,"The early company data warehouse architecture used Kudu and Impala for computing and storage. But we found the following problems during use:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"When the number of concurrent queries (QPS) is large, the simple query response time of Kudu+Impala is always more than a few seconds, which cannot reach the millisecond-level required by the business. The long waiting time has brought bad user experience to customers. "),(0,n.yg)("li",{parentName:"ol"},"The Kudu+Impala engine cannot perform incremental aggregation of factual data, and can barely support real-time data analysis."),(0,n.yg)("li",{parentName:"ol"},"Kudu relies on a large number of primary key lookups when ingesting data. The batch processing efficiency is low and Kudu consumes a lot of CPU, which is not friendly to resource utilization.")),(0,n.yg)("h2",{id:"new-data-warehouse-architecture-design-based-on-doris"},"New Data Warehouse Architecture Design Based on Doris"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"3",src:a(89632).c,width:"1280",height:"690"})),(0,n.yg)("p",null,"As shown in the figure above, Apache Doris is used in the new architecture and is responsible for data warehouse storage and computing; Data ingestion of real-time data and ODS data through Kafka has been replaced with Flink; We use Duckula as our stream computing platform; While we introduce DolphinSchedular for our task scheduling."),(0,n.yg)("h1",{id:"benefits-of-the-new-architecture-based-on-apache-doris"},"Benefits of the new architecture based on Apache Doris:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The new data warehouse architecture based on Doris no longer depends on Hadoop related components, and the operation and maintenance cost is low."),(0,n.yg)("li",{parentName:"ul"},"Higher performance. Doris uses less server resources but provides stronger data processing capabilities;"),(0,n.yg)("li",{parentName:"ul"},"Doris supports high concurrency and can directly support WebApp query services;"),(0,n.yg)("li",{parentName:"ul"},"Doris supports the access to external tables, which enable easy data publishing and data ingestion;"),(0,n.yg)("li",{parentName:"ul"},"Doris supports dynamic scaling out and automatic data balance;"),(0,n.yg)("li",{parentName:"ul"},"Doris supports multiple federated queries, including Hive, ES, MySQL, etc.;"),(0,n.yg)("li",{parentName:"ul"},"Doris' Aggregate Model supports users updating a single column;"),(0,n.yg)("li",{parentName:"ul"},"By adjusting BE parameters and cluster size, the problem of version accumulation can be effectively solved;"),(0,n.yg)("li",{parentName:"ul"},"Through the Resource Tag and Query Block function, cluster resource isolation can be realized, resource usage rate can be reduced, and query performance can be improved.")),(0,n.yg)("p",null,"Thanks to the excellent capabilities of the new architecture, the cluster we use has been reduced from 18 pieces of 16Cores 128G to 12 pieces of 16Cores 128G, saving up to 33% of resources compared to before; Further, the computing performance has been greatly improved. Doris can complete an ETL task that was completed in 3 hours on Kudu in only 1 hour. In addition, in frequent updates, Kudu's internal data fragmentation files cannot be automatically merged so that the performance will become worse and worse, requiring regular rebuilding; While the compaction function of Doris can effectively solve this problem."),(0,n.yg)("h1",{id:"highly-recommended"},"Highly Recommended"),(0,n.yg)("p",null,"The cost of using Doris is very low. Only 3 low-end servers or even desktops can be used to deploy easily a data warehouse based on Apache Doris; For enterprises with limited investment and do not want to be left behind by the market, it is highly recommended to try Apache Doris."),(0,n.yg)("p",null,"Doris is also a mature analytical database with MPP architecture. At the same time, its community is very active and easy to communicate with. SelectDB, the commercial company behind Doris, has set up a full-time technical team for the community. Any questions can be answered within 1 hour. In the last year, the community has been continuously promoted by SelectDB and introduced a series of industry-leading new features. In addition, the community will seriously consider the user habits when iterating, which will bring a lot of convenience."),(0,n.yg)("p",null,"I really appreciate the full support from the Doris community and the SelectDB team. And I sincerely recommend developers and enterprises to start with Apache Doris today."),(0,n.yg)("h1",{id:"apache-doris"},"Apache Doris"),(0,n.yg)("p",null,"Apache Doris is a real-time analytical database based on MPP architecture, known for its high performance and ease of use. It supports both high-concurrency point queries and high-throughput complex analysis. (",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"https://github.com/apache/doris"),")"),(0,n.yg)("h1",{id:"links"},"Links"),(0,n.yg)("h2",{id:"github"},"GitHub:"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"https://github.com/apache/doris")),(0,n.yg)("h2",{id:"apache-doris-website"},"Apache Doris Website:"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org"},"https://doris.apache.org")))}h.isMDXComponent=!0},27144:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/1-39a723280720a07dc2ed0a7de5c99c9b.png"},84636:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/2-bd04a72816c9ff95512e08d3f6e8e05f.png"},89632:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/3-e7990ac868e7345d5fda0512b0ec6b8c.png"},95628:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/kv-c9c4b972a14903911ba1674b76f5edca.png"}}]);