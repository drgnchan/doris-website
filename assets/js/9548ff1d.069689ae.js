"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[30206],{15680:(e,a,i)=>{i.d(a,{xA:()=>d,yg:()=>m});var t=i(296540);function n(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function r(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){n(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function s(e,a){if(null==e)return{};var i,t,n=function(e,a){if(null==e)return{};var i,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],a.indexOf(i)>=0||(n[i]=e[i]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),i=a;return e&&(i="function"==typeof e?e(a):o(o({},a),e)),i},d=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(i),p=n,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return i?t.createElement(m,o(o({ref:a},d),{},{components:i})):t.createElement(m,o({ref:a},d))}));function m(e,a){var i=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},321457:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(58168),n=(i(296540),i(15680));const r={title:"Best practice in Kwai: Apache Doris on Elasticsearch",language:"en",summary:"This article mainly focuses on the practice of Apache Doris on Elasticsearch (DOE) in Kwai's business.Kwai\u2019s commercial report engine provides advertisers with real-time query service for multi-dimensional analysis reports. And it also provides query service for multi-dimensional analysis reports for internal users. The engine is committed to dealing with high-performance, high-concurrency, and high-stability query problems in multi-dimensional analysis report cases. After using Doris, query becomes simple. We only need to synchronize the fact table and dim-table on a daily basis and Join while querying. By replacing Druid and Clickhouse with Doris, Doris basically covers all scenarios when we use Druid. In this way, Kwai's commercial report engine greatly improves the aggregation and analysis capabilities of massive data. During the use of Apache Doris, we also found some unexpected benefits: For example, the import method of Routine Load and Broker Load is relatively simple, which improves the query speed; The data occupation is greatly reduced; Doris supports the MySQL protocol, which is much easier for data analyst to fetch data and make charts.",date:"2022-12-14",author:"Xiang He",tags:["Best Practice"],image:"/images/best-practice.png"},o=void 0,s={permalink:"/blog/BestPractice_Kwai",source:"@site/blog/BestPractice_Kwai.md",title:"Best practice in Kwai: Apache Doris on Elasticsearch",description:"\x3c!--",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Xiang He"}],frontMatter:{title:"Best practice in Kwai: Apache Doris on Elasticsearch",language:"en",summary:"This article mainly focuses on the practice of Apache Doris on Elasticsearch (DOE) in Kwai's business.Kwai\u2019s commercial report engine provides advertisers with real-time query service for multi-dimensional analysis reports. And it also provides query service for multi-dimensional analysis reports for internal users. The engine is committed to dealing with high-performance, high-concurrency, and high-stability query problems in multi-dimensional analysis report cases. After using Doris, query becomes simple. We only need to synchronize the fact table and dim-table on a daily basis and Join while querying. By replacing Druid and Clickhouse with Doris, Doris basically covers all scenarios when we use Druid. In this way, Kwai's commercial report engine greatly improves the aggregation and analysis capabilities of massive data. During the use of Apache Doris, we also found some unexpected benefits: For example, the import method of Routine Load and Broker Load is relatively simple, which improves the query speed; The data occupation is greatly reduced; Doris supports the MySQL protocol, which is much easier for data analyst to fetch data and make charts.",date:"2022-12-14",author:"Xiang He",tags:["Best Practice"],image:"/images/best-practice.png"},prevItem:{title:"Apache Doris announced the official release of version 1.1.5",permalink:"/blog/release-note-1.1.5"},nextItem:{title:"Practice and optimization of Apache Doris in Xiaomi",permalink:"/blog/xiaomi_vector"}},l={authorsImageUrls:[void 0]},c=[{value:"1.1 Kwai",id:"11-kwai",level:2},{value:"1.2 Kwai&#39;s Commercial Report Engine",id:"12-kwais-commercial-report-engine",level:2},{value:"2.1 Background",id:"21-background",level:2},{value:"2.2 Requirement for an OLAP Engine",id:"22-requirement-for-an-olap-engine",level:2},{value:"2.3 Previous Architecture: Based on Apache Druid",id:"23-previous-architecture-based-on-apache-druid",level:2},{value:"2.4 Engine of the Reports",id:"24-engine-of-the-reports",level:2},{value:"3.1 Problems Remained",id:"31-problems-remained",level:2},{value:"3.2 Database Research",id:"32-database-research",level:2},{value:"3.3 Good Choice: Doris on Elasticsearch",id:"33-good-choice-doris-on-elasticsearch",level:2},{value:"3.4 Doris on Elasticsearch",id:"34-doris-on-elasticsearch",level:2},{value:"3.4.1 Data Link Upgrade",id:"341-data-link-upgrade",level:3},{value:"3.4.2 Upgrades of the Report Engine",id:"342-upgrades-of-the-report-engine",level:3},{value:"4.1 Fact Table Query Performance Comparison",id:"41-fact-table-query-performance-comparison",level:2},{value:"4.2 Comparison of Cube Table Query Performance in Join",id:"42-comparison-of-cube-table-query-performance-in-join",level:2},{value:"4.3 Benefits",id:"43-benefits",level:2}],d={toc:c},h="wrapper";function u(e){let{components:a,...r}=e;return(0,n.yg)(h,(0,t.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Author: Xiang He, Head Developer of Big Data, Commercialization Team of Kwai")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"kv",src:i(907418).A,width:"900",height:"383"})),(0,n.yg)("h1",{id:"1-about-kwai"},"1 About Kwai"),(0,n.yg)("h2",{id:"11-kwai"},"1.1 Kwai"),(0,n.yg)("p",null,"Kwai(HKG:1024) is a social network for short videos and trends. Discover funny short videos, contribute to the virtual community with recordings, videos of your life, playing daily challenges or likes the best memes and videos. Share your life with short videos and choose from dozens of magical effects and filters for them."),(0,n.yg)("h2",{id:"12-kwais-commercial-report-engine"},"1.2 Kwai's Commercial Report Engine"),(0,n.yg)("p",null,"Kwai\u2019s commercial report engine provides advertisers with real-time query service for multi-dimensional analysis reports. And it also provides query service for multi-dimensional analysis reports for internal users. The engine is committed to dealing with high-performance, high-concurrency, and high-stability query problems in multi-dimensional analysis report cases."),(0,n.yg)("h1",{id:"2-previous-architecture"},"2 Previous Architecture"),(0,n.yg)("h2",{id:"21-background"},"2.1 Background"),(0,n.yg)("p",null,"Traditional OLAP engines deal with multi-dimensional analysis in a more pre-modeled way, by building a data cube (Cube) to perform operations such as Drill-down, Roll-up, Slice, and Dice and Pivot. Modern OLAP analysis introduces the idea of \u200b\u200ba relational model, representing data in two-dimensional relational tables. In the modeling process, usally there are two modeling methods. One is to ingest the data of multiple tables into one wide table through Join; the other is to use the star schema, divide the data into fact table and dim-table.  And then Join them when querying.\nBoth options have some pros and cons:"),(0,n.yg)("p",null,"Wide table:"),(0,n.yg)("p",null,"Taking the idea of \u200b\u200bexchanging space for time. The primary key of the dim-table is the unique ID to fill all dimensions, and multiple dimension data is stored in redundant storage. Its advantage is that it is convenient to query, unnecessary to associate additional dim-tables, which is way better. The disadvantage is that if there is a change in dimension data, the entire table needs to be refreshed, which is bad for high-frequency Update."),(0,n.yg)("p",null,"Star Schema:"),(0,n.yg)("p",null,"Dimension data is completely separated from fact data. Dimension data is often stored in a dedicated engine (such as MySQL, Elasticsearch, etc.). When querying, dimension data is associated with the primary key. The advantage is that changes in dimension data do not affect fact data, which can support high-frequency Update operations. The disadvantage is that the query logic is relatively more complex, and multi-table Join may lead to performance loss."),(0,n.yg)("h2",{id:"22-requirement-for-an-olap-engine"},"2.2 Requirement for an OLAP Engine"),(0,n.yg)("p",null,"In Kwai\u2019s business, the commercial reports engine supports the real-time query of the advertising effect for advertisers. When building the report engine, we expect to meet the following requirements:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Immersive data: the original data of a single table increases by ten billion every day"),(0,n.yg)("li",{parentName:"ul"},"High QPS in Query: thousand-level QPS on average"),(0,n.yg)("li",{parentName:"ul"},"High stability requirements: SLA level of 99.9999 %")),(0,n.yg)("p",null,"Most importantly, due to frequent changes in dimension data, dim-tables need to support Update operations up to thousand-level QPS and further support requirements such as fuzzy matching and word segmentation retrieval.\nBased on the above requirements, we chose star schema and built a report engine architecture with Apache Druid and Elasticsearch."),(0,n.yg)("h2",{id:"23-previous-architecture-based-on-apache-druid"},"2.3 Previous Architecture: Based on Apache Druid"),(0,n.yg)("p",null,"We chose the combination of Elasticsearch and Apache Druid. In data import, we use Flink to pre-aggregate the data at minute-evel, and use Kafka to pre-aggregate the data at hour-level. In data query, the application initiates a query request through RE Front API, and Re Query initiates queries to the dim-table engine (Elasticsearch and MySQL) and the extension engine respectively."),(0,n.yg)("p",null,"Druid is a timing-based query engine that supports real-time data ingestion and is used to store and query large amounts of fact data. We adopt Elasticseach based on those concerns:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"High update frequency, QPS is around 1000"),(0,n.yg)("li",{parentName:"ul"},"Support word segmentation and fuzzy search, which is suitable for Kwai"),(0,n.yg)("li",{parentName:"ul"},"Supports high-level dim-table data, which can be directly qualified without adopting sub-database and sub-table just like MySQL database"),(0,n.yg)("li",{parentName:"ul"},"Supports data synchronization monitoring, and has check and recovery services as well")),(0,n.yg)("h2",{id:"24-engine-of-the-reports"},"2.4 Engine of the Reports"),(0,n.yg)("p",null,"The report engine can be divided into two layers: REFront and REQuery. REMeta is an independent metadata management module. The report engine implements MEMJoin inside REQuery. It supports associative query between fact data in Druid and dimension data in Elasticsearch. And it also provides virtual cube query for upper-layer business, avoiding the exposion of complex cross-engine management and query logic."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_1",src:i(947140).A,width:"709",height:"698"})),(0,n.yg)("h1",{id:"3-new-architecture-based-on-apache-doris"},"3 New Architecture Based on Apache Doris"),(0,n.yg)("h2",{id:"31-problems-remained"},"3.1 Problems Remained"),(0,n.yg)("p",null,"First, we came across a problem when we build the report engine. Mem Join is single-machine with serial execution. When the amount of data pulled from Elasticsearch exceeds 100,000 at a single time, the response time is close to 10s, and the user experience is poor. Moreover, using a single node to execute large-scale data Join will consume a lot of memory, causing Full GC."),(0,n.yg)("p",null,"Second, Druid's Lookup Join function is not so perfect, which is a big problem, and it cannot fully meet our business needs."),(0,n.yg)("h2",{id:"32-database-research"},"3.2 Database Research"),(0,n.yg)("p",null,"So we conducted a survey on popular OLAP databases in the industry, the most representative of which are Apache Doris and Clickhouse. We found out that Apache Doris is more capable of Join between large and wide tables. ClickHouse can support Broadcast memory-based Join, but the performance  is not good for the Join between large and wide tables with a large data volume. Both Doris and Clickhouse support detailed data storage, but the capability for concurrency of Clickhouse is low. On the contrary, Doris supports high-concurrency and low-latency query services, and a single machine supports up to thousands of QPS. When the concurrency increases, horizontal expansion of FE and BE can be supported. However, Clickhouse's data import is not able to support Transaction SQL, which cannot realize Exactly-once semantics and has limited ablility for standard SQL. In contrast, Doris provides Transaction SQL and atomicity for data import. Doris itself can ensure that messages in Kafka are not lost or re-subscribed, which is to say, Exactly-Once semantics is supported. ClickHouse has high learning cost, high operation and maintenance costs, and weak in distribution. The fact that it requires more customization and deeper technical strength is another problem. Doris is different. There are only two core components, FE and BE, and there are fewer external dependencies. We also found that because Doris is closer to the MySQL protocol, it is more convenient than Clickhouse and the cost of migration is not so large. In terms of horizontal expansion, Doris' expansion and contraction can also achieve self-balancing, which is much better than that of Clickhouse."),(0,n.yg)("p",null,"From this point of view, Doris can better improve the performance of Join and is much better in other aspects such as migration cost, horizontal expansion, and concurrency. However, Elasticsearch has inherent advantages in high-frequency Update."),(0,n.yg)("p",null,"It would be an ideal solution to deal with high-frequency Upate and Join performance at the same time by building engines through Doris on Elasticsearch."),(0,n.yg)("h2",{id:"33-good-choice-doris-on-elasticsearch"},"3.3 Good Choice: Doris on Elasticsearch"),(0,n.yg)("p",null,"What is the query performance of Doris on Elasticsearch?"),(0,n.yg)("p",null,"First of all, Apache Doris is a real-time analytical database based on MPP architecture, with strong performance and strong horizontal expansion capability. Doris on Elasticsearch takes advantage on this capability and does a lot of query optimization. Secondly, after integrating Elasticsearch, we have also made a lot of optimizations to the query:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Shard-level concurrency"),(0,n.yg)("li",{parentName:"ul"},"Automatic adaptation of row and column scanning, priority to column scanning"),(0,n.yg)("li",{parentName:"ul"},"Sequential read, terminated early"),(0,n.yg)("li",{parentName:"ul"},"Two-phase query becomes one-phase query"),(0,n.yg)("li",{parentName:"ul"},"Broadcast Join is especially friendly for small batch data")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_2",src:i(232415).A,width:"890",height:"1032"})),(0,n.yg)("h2",{id:"34-doris-on-elasticsearch"},"3.4 Doris on Elasticsearch"),(0,n.yg)("h3",{id:"341-data-link-upgrade"},"3.4.1 Data Link Upgrade"),(0,n.yg)("p",null,"The upgrade of the data link is relatively simple. In the first step, in Doris we build a new Olap table and configure the materialized view. Second, the routine load is initiated based on the Kafka topic of the previous fact data, and then real-time data is ingested. The third step is to ingest offline data from Hive's broker load. The last step is to create an Elasticsearch external table through Doris."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_3",src:i(178614).A,width:"1313",height:"1265"})),(0,n.yg)("h3",{id:"342-upgrades-of-the-report-engine"},"3.4.2 Upgrades of the Report Engine"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_4",src:i(828585).A,width:"1274",height:"895"})),(0,n.yg)("p",null,"Note: The MySQL dim-table associated above is based on future planning. Currently, Elasticsearch is mainly used as the dim-table engine"),(0,n.yg)("p",null,"Report Engine Adaptation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Generate virtual cube table based on Doris's star schema"),(0,n.yg)("li",{parentName:"ul"},"Adapt to cube table query analysis, intelligent Push-down"),(0,n.yg)("li",{parentName:"ul"},"Gray Release")),(0,n.yg)("h1",{id:"4--online-performance"},"4  Online Performance"),(0,n.yg)("h2",{id:"41-fact-table-query-performance-comparison"},"4.1 Fact Table Query Performance Comparison"),(0,n.yg)("p",null,"Druid"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_5",src:i(704384).A,width:"935",height:"276"})),(0,n.yg)("p",null,"Doris"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_6",src:i(601947).A,width:"959",height:"291"})),(0,n.yg)("p",null,"99th percentile of response time:\nDruid: 270ms, Doris: 150ms and which is reduced by 45%"),(0,n.yg)("h2",{id:"42-comparison-of-cube-table-query-performance-in-join"},"4.2 Comparison of Cube Table Query Performance in Join"),(0,n.yg)("p",null,"Druid"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_7",src:i(280402).A,width:"987",height:"316"})),(0,n.yg)("p",null,"Doris"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_8",src:i(809557).A,width:"950",height:"291"})),(0,n.yg)("p",null,"99th percentile of response time:\nDruid: 660ms, Doris: 440ms and which is reduced by 33%"),(0,n.yg)("h2",{id:"43-benefits"},"4.3 Benefits"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The overall time consumption of 99 percentile is reduced by about 35%"),(0,n.yg)("li",{parentName:"ul"},"Resource saving about 50%"),(0,n.yg)("li",{parentName:"ul"},"Remove the complex logic of MemJoin from the report engine; Realize through DO(in the case of large query: dim-table results exceed 100,000, performance improvement exceeds 10 times, 10s to 1s)"),(0,n.yg)("li",{parentName:"ul"},"Richer query semantics (Mem Join is relatively simple and does not support complex queries)")),(0,n.yg)("h1",{id:"5--summary-and-plans"},"5  Summary and Plans"),(0,n.yg)("p",null,"In Kwai's commercial business, Join queries between dimension data and fact data is very common. After using Doris, query becomes simple. We only need to synchronize the fact table and dim-table on a daily basis and Join while querying. By replacing Druid and Clickhouse with Doris, Doris basically covers all scenarios when we use Druid. In this way, Kwai's commercial report engine greatly improves the aggregation and analysis capabilities of massive data. During the use of Apache Doris, we also found some unexpected benefits: For example, the import method of Routine Load and Broker Load is relatively simple, which improves the query speed; The data occupation is greatly reduced; Doris supports the MySQL protocol, which is much easier for data analyst to fetch data and make charts."),(0,n.yg)("p",null,"Although the Doris on Elasticsearch has fully meet our requirement, Elasticsearch external table still requires manual creation. However, Apache Doris recently released the latest version V1.2.0. The new version has added Multi-Catlog, which provides the ability to seamlessly access external table sources such as Hive, Elasticsearch, Hudi, and Iceberg. Users can connect to external tables through the CREATE CATALOG command, and Doris will automatically map the library and table information of the external dable. In this way, we don't need to manually create the Elasticsearch external tables to complete the mapping in the future, which greatly saves us time and cost of development and improves the efficiency of research and development. The power of other new functions such as Vectorization and Ligt Schema Change also gives us new expectations for Apache Doris. Bless Apache Doris!"),(0,n.yg)("h1",{id:"contact-us"},"Contact Us"),(0,n.yg)("p",null,"Apache Doris Website\uff1a",(0,n.yg)("a",{parentName:"p",href:"http://doris.apache.org"},"http://doris.apache.org")),(0,n.yg)("p",null,"Github\uff1a",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"https://github.com/apache/doris")),(0,n.yg)("p",null,"Dev Email\uff1a",(0,n.yg)("a",{parentName:"p",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org")))}u.isMDXComponent=!0},907418:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/kv-846e4e39fd88e1e34d2474b23690d9b2.png"},947140:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/page_1-9e4af3275a17b4c1c893caa7c6f7290b.png"},232415:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/page_2-a916fe2ffe5eeae0b166d30cfe8d8e42.png"},178614:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/page_3-2f23fe1184980f690da326e4446fd7f7.png"},828585:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/page_4-f9c9b95ac997f1d8f09fb5fe182c368f.png"},704384:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/page_5-8e598f4abd11de7482c1a9dcc0747641.png"},601947:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/page_6-7747547b14b4dbce6b2ee99fde03ab16.png"},280402:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/page_7-46c2a88aabf031ee764884d78837880f.png"},809557:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/page_8-cc75cc3a5ced01182cac415175d4048a.png"}}]);