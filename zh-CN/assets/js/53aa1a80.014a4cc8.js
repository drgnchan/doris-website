"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32279],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var n=a(296540);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,h=d["".concat(l,".").concat(u)]||d[u]||g[u]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(58168),s=(a(296540),a(15680));const r={title:"Replacing Apache Hive, Elasticsearch and PostgreSQL with Apache Doris",summary:"How does a data service company build its data warehouse? Simplicity is the best policy. See how a due diligence platform increased data writing efficiency by 75%.",date:"2023-07-01",author:"Tao Wang",tags:["Best Practice"],image:"/images/replacing-apache-hive-es-and-postgresql-with-apache-doris.png"},i=void 0,o={permalink:"/zh-CN/blog/Replacing-Apache-Hive-Elasticsearch-and-PostgreSQL-with-Apache-Doris",source:"@site/blog/Replacing-Apache-Hive-Elasticsearch-and-PostgreSQL-with-Apache-Doris.md",title:"Replacing Apache Hive, Elasticsearch and PostgreSQL with Apache Doris",description:"\x3c!--",date:"2023-07-01T00:00:00.000Z",formattedDate:"2023\u5e747\u67081\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Tao Wang"}],frontMatter:{title:"Replacing Apache Hive, Elasticsearch and PostgreSQL with Apache Doris",summary:"How does a data service company build its data warehouse? Simplicity is the best policy. See how a due diligence platform increased data writing efficiency by 75%.",date:"2023-07-01",author:"Tao Wang",tags:["Best Practice"],image:"/images/replacing-apache-hive-es-and-postgresql-with-apache-doris.png"},prevItem:{title:"Listen to that poor BI engineer: we need fast joins",permalink:"/zh-CN/blog/Listen-to-That-Poor-BI-Engineer-We-Need-Fast-Joins"},nextItem:{title:"Tiered storage for hot and cold data: what, why, and how?",permalink:"/zh-CN/blog/Tiered-Storage-for-Hot-and-Cold-Data-What-Why-and-How"}},l={authorsImageUrls:[void 0]},c=[{value:"Data Flow",id:"data-flow",level:2},{value:"Ad-Hoc Queries",id:"ad-hoc-queries",level:2},{value:"User Segmentation",id:"user-segmentation",level:2},{value:"Trick to Speed up User Segmentation by 70%",id:"trick-to-speed-up-user-segmentation-by-70",level:2},{value:"Example",id:"example",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...r}=e;return(0,s.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"How does a data service company build its data warehouse? I worked as a real-time computing engineer for a due diligence platform, which is designed to allow users to search for a company's business data, financial, and legal details. It has collected information of over 300 million entities in more than 300 dimensions. The duty of my colleagues and I is to ensure real-time updates of such data so we can provide up-to-date information for our registered users. That's the customer-facing function of our data warehouse. Other than that, it needs to support our internal marketing and operation team in ad-hoc queries and user segmentation, which is a new demand that emerged with our growing business. "),(0,s.yg)("p",null,"Our old data warehouse consisted of the most popular components of the time, including ",(0,s.yg)("strong",{parentName:"p"},"Apache")," ",(0,s.yg)("strong",{parentName:"p"},"Hive"),", ",(0,s.yg)("strong",{parentName:"p"},"MySQL"),", ",(0,s.yg)("strong",{parentName:"p"},"Elasticsearch"),", and ",(0,s.yg)("strong",{parentName:"p"},"PostgreSQL"),". They support the data computing and data storage layers of our data warehouse: "),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Data Computing"),": Apache Hive serves as the computation engine."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Data Storage"),": ",(0,s.yg)("strong",{parentName:"li"},"MySQL")," provides data for DataBank, Tableau, and our customer-facing applications. ",(0,s.yg)("strong",{parentName:"li"},"Elasticsearch")," and ",(0,s.yg)("strong",{parentName:"li"},"PostgreSQL")," serve for our DMP user segmentation system: the former stores user profiling data, and the latter stores user group data packets. ")),(0,s.yg)("p",null,"As you can imagine, a long and complicated data pipeline is high-maintenance and detrimental to development efficiency. Moreover, they are not capable of ad-hoc queries. So as an upgrade to our data warehouse, we replaced most of these components with ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Apache Doris"),", a unified analytic database."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"replace-MySQL-Elasticsearch-PostgreSQL-with-Apache-Doris-before",src:a(529374).A,width:"1280",height:"640"})),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"replace-MySQL-Elasticsearch-PostgreSQL-with-Apache-Doris-after",src:a(366101).A,width:"1280",height:"548"})),(0,s.yg)("h2",{id:"data-flow"},"Data Flow"),(0,s.yg)("p",null,"This is a lateral view of our data warehouse, from which you can see how the data flows."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"data-flow",src:a(454476).A,width:"1280",height:"489"})),(0,s.yg)("p",null,"For starters, binlogs from MySQL will be ingested into Kafka via Canal, while user activity logs will be transferred to Kafka via Apache Flume. In Kafka, data will be cleaned and organized into flat tables, which will be later turned into aggregated tables. Then, data will be passed from Kafka to Apache Doris, which serves as the storage and computing engine. "),(0,s.yg)("p",null,"We adopt different data models in Apache Doris for different scenarios: data from MySQL will be arranged in the ",(0,s.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/data-model/#unique-model"},"Unique model"),", log data will be put in the ",(0,s.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/data-model/#duplicate-model"},"Duplicate model"),", while data in the DWS layer will be merged in the ",(0,s.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/data-model/#aggregate-model"},"Aggregate model"),"."),(0,s.yg)("p",null,"This is how Apache Doris replaces the roles of Hive, Elasticsearch, and PostgreSQL in our datawarehouse. Such transformation has saved us lots of efforts in development and maintenance. It also made ad-hoc queries possible and our user segmentation more efficient. "),(0,s.yg)("h2",{id:"ad-hoc-queries"},"Ad-Hoc Queries"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Before"),": Every time a new request was raised, we developed and tested the data model in Hive, and wrote the scheduling task in MySQL so that our customer-facing application platforms could read results from MySQL. It was a complicated process that took a lot of time and development work. "),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"After"),": Since Apache Doris has all the itemized data, whenever it is faced with a new request, it can simply pull the metadata and configure the query conditions. Then it is ready for ad-hoc queries. In short, it only requires low-code configuration to respond to new requests. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"ad-hoc-queries",src:a(503875).A,width:"1280",height:"712"})),(0,s.yg)("h2",{id:"user-segmentation"},"User Segmentation"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Before"),": After a user segmentation task was created based on metadata, the relevant user IDs would be written into the PostgreSQL profile list and the MySQL task list. Meanwhile, Elasticsearch would execute the query according to the task conditions; after the results are produced, it would update status in the task list and write the user group bitmap package into PostgreSQL. (The PostgreSQL plug-in is capable of computing the intersection, union, and difference set of bitmap.) Then PostgreSQL would provide user group packets for downstream operation platforms."),(0,s.yg)("p",null,"Tables in Elasticsearch and PostgreSQL were unreusable, making this architecture cost-ineffective. Plus, we had to pre-define the user tags before we could execute a new type of query. That slowed things down.  "),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"After"),": The user IDs will only be written into the MySQL task list. For first-time segmentation, Apache Doris will execute the ",(0,s.yg)("strong",{parentName:"p"},"ad-hoc query")," based on the task conditions. In subsequent segmentation tasks, Apache Doris will perform ",(0,s.yg)("strong",{parentName:"p"},"micro-batch rolling")," and compute the difference set compared with the previously produced user group packet, and notify downstream platforms of any updates. (This is realized by the ",(0,s.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_union"},"bitmap functions")," in Apache Doris.) "),(0,s.yg)("p",null,"In this Doris-centered user segmentation process, we don't have to pre-define new tags. Instead, tags can be auto-generated based on the task conditions. The processing pipeline has the flexibility that can make our user-group-based A/B testing easier. Also, as both the itemized data and user group packets are in Apache Doris, we don't have to attend to the read and write complexity between multiple components."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"user-segmentation-pipeline",src:a(397690).A,width:"1280",height:"688"})),(0,s.yg)("h2",{id:"trick-to-speed-up-user-segmentation-by-70"},"Trick to Speed up User Segmentation by 70%"),(0,s.yg)("p",null,"Due to risk aversion reasons, random generation of ",(0,s.yg)("inlineCode",{parentName:"p"},"user_id")," is the choice for many companies, but that produces sparse and non-consecutive user IDs in user group packets. Using these IDs in user segmentation, we had to endure a long waiting time for bitmaps to be generated. "),(0,s.yg)("p",null,"To solve that, we created consecutive and dense mappings for these user IDs. ",(0,s.yg)("strong",{parentName:"p"},"In this way, we decreased our user segmentation latency by 70%.")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"user-segmentation-latency-1",src:a(573937).A,width:"1030",height:"218"})),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"user-segmentation-latency-2",src:a(125544).A,width:"1280",height:"698"})),(0,s.yg)("h3",{id:"example"},"Example"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 1: Create a user ID mapping table:")),(0,s.yg)("p",null,"We adopt the Unique model for user ID mapping tables, where the user ID is the unique key. The mapped consecutive IDs usually start from 1 and are strictly increasing. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"create-user-ID-mapping-table",src:a(788959).A,width:"1280",height:"540"})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 2: Create a user group table:")),(0,s.yg)("p",null,"We adopt the Aggregate model for user group tables, where user tags serve as the aggregation keys. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"create-user-group-table",src:a(735158).A,width:"1280",height:"604"})),(0,s.yg)("p",null,"Supposing that we need to pick out the users whose IDs are between 0 and 2000000. "),(0,s.yg)("p",null,"The following snippets use non-consecutive (",(0,s.yg)("inlineCode",{parentName:"p"},"tyc_user_id"),") and consecutive (",(0,s.yg)("inlineCode",{parentName:"p"},"tyc_user_id_continuous"),") user IDs for user segmentation, respectively. There is a big gap between their ",(0,s.yg)("strong",{parentName:"p"},"response time:")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Non-Consecutive User IDs: ",(0,s.yg)("strong",{parentName:"li"},"1843ms")),(0,s.yg)("li",{parentName:"ul"},"Consecutive User IDs: ",(0,s.yg)("strong",{parentName:"li"},"543ms")," ")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"response-time-of-consecutive-and-non-consecutive-user-IDs",src:a(716316).A,width:"1920",height:"736"})),(0,s.yg)("h2",{id:"conclusion"},"Conclusion"),(0,s.yg)("p",null,"We have 2 clusters in Apache Doris accommodating tens of TBs of data, with almost a billion new rows flowing in every day. We used to witness a steep decline in data ingestion speed as data volume expanded. But after upgrading our data warehouse with Apache Doris, we increased our data writing efficiency by 75%. Also, in user segmentation with a result set of less than 5 million, it is able to respond within milliseconds. Most importantly, our data warehouse has been simpler and friendlier to developers and maintainers. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"user-segmentation-latency-3",src:a(952229).A,width:"1280",height:"667"})),(0,s.yg)("p",null,"Lastly, I would like to share with you something that interested us most when we first talked to the ",(0,s.yg)("a",{parentName:"p",href:"https://t.co/KcxAtAJZjZ"},"Apache Doris community"),":"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Apache Doris supports data ingestion transactions so it can ensure data is written ",(0,s.yg)("strong",{parentName:"li"},"exactly once"),"."),(0,s.yg)("li",{parentName:"ul"},"It is well-integrated with the data ecosystem and can smoothly interface with most data sources and data formats."),(0,s.yg)("li",{parentName:"ul"},"It allows us to implement elastic scaling of clusters using the command line interface."),(0,s.yg)("li",{parentName:"ul"},"It outperforms ClickHouse in ",(0,s.yg)("strong",{parentName:"li"},"join queries"),".")),(0,s.yg)("p",null,"Find Apache Doris developers on ",(0,s.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"Slack")))}g.isMDXComponent=!0},529374:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_1-9cc7124fc979257cf029e086ce018e78.png"},716316:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_10-c239e3a39b72d21c1d65fc74858b36a3.png"},952229:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_11-3fe828cadbc9a5972a82bbbd2a0b473e.png"},366101:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_2-56765f2ef0a2d26069c3cd115e694882.png"},454476:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_3-733959d2cc60e873ec5b3b9fc06d9e0e.png"},503875:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_4-9a9132537dbc478b0aa9948131184564.png"},397690:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_5-82288dba1ffdb438be29168a2eafd7f9.png"},573937:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_6-22694f7b8d5e06aa2c8c4757c52c8c05.png"},125544:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_7-e5d5d3312ade5d026533922a01207660.png"},788959:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_8-74c77b6500d66dfb6aa2fc8ba742868c.png"},735158:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Tianyancha_9-76a30c385266aadc57e8ab898cc53bce.png"}}]);