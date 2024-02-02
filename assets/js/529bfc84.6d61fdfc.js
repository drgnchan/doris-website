"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11012],{95788:(e,a,t)=>{t.d(a,{Iu:()=>h,yg:()=>u});var i=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),c=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},h=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},g=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=n,u=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return t?i.createElement(u,r(r({ref:a},h),{},{components:t})):i.createElement(u,r({ref:a},h))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},14005:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(45072),n=(t(11504),t(95788));const o={title:"How big data is saving lives in real time: IoV data analytics helps prevent accidents",summary:"What needs to be taken care of in IoV data analysis? What's the difference between a near real-time analytic data platform and an actual real-time analytic data platform?",date:"2023-11-29",author:"Apache Doris",tags:["Best Practice"],image:"/images/Iov.png"},r=void 0,s={permalink:"/blog/how-big-data-is-saving-lives-in-real-time-iov-data-analytics-helps-prevent-accidents",source:"@site/blog/how-big-data-is-saving-lives-in-real-time-iov-data-analytics-helps-prevent-accidents.md",title:"How big data is saving lives in real time: IoV data analytics helps prevent accidents",description:"\x3c!--",date:"2023-11-29T00:00:00.000Z",formattedDate:"November 29, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"How big data is saving lives in real time: IoV data analytics helps prevent accidents",summary:"What needs to be taken care of in IoV data analysis? What's the difference between a near real-time analytic data platform and an actual real-time analytic data platform?",date:"2023-11-29",author:"Apache Doris",tags:["Best Practice"],image:"/images/Iov.png"},prevItem:{title:"Empowering cyber security by enabling 7 times faster log analysis",permalink:"/blog/empowering-cyber-security-by-enabling-seven-times-faster-log-analysis"},nextItem:{title:"Less components, higher performance: Apache Doris instead of ClickHouse, MySQL, Presto, and HBase",permalink:"/blog/less-components-higher-performance-apache-doris-instead-of-clickhouse-mysql-presto-and-hbase"}},l={authorsImageUrls:[void 0]},c=[{value:"What is special about IoV data?",id:"what-is-special-about-iov-data",level:2},{value:"IoV data processing",id:"iov-data-processing",level:2},{value:"From Apache Hive to Apache Doris: a transition to real-time analysis",id:"from-apache-hive-to-apache-doris-a-transition-to-real-time-analysis",level:2},{value:"1. The arrangement of CAN data",id:"1-the-arrangement-of-can-data",level:3},{value:"2. DTC data query",id:"2-dtc-data-query",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c},d="wrapper";function p(e){let{components:a,...o}=e;return(0,n.yg)(d,(0,i.c)({},h,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Internet of Vehicles, or IoV, is the product of the marriage between the automotive industry and IoT. IoV data is expected to get larger and larger, especially with electric vehicles being the new growth engine of the auto market. The question is: Is your data platform ready for that? This post shows you what an OLAP solution for IoV looks like."),(0,n.yg)("h2",{id:"what-is-special-about-iov-data"},"What is special about IoV data?"),(0,n.yg)("p",null,"The idea of IoV is intuitive: to create a network so vehicles can share information with each other or with urban infrastructure. What\u2018s often under-explained is the network within each vehicle itself. On each car, there is something called Controller Area Network (CAN) that works as the communication center for the electronic control systems. For a car traveling on the road, the CAN is the guarantee of its safety and functionality, because it is responsible for:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Vehicle system monitoring"),": The CAN is the pulse of the vehicle system. For example, sensors send the temperature, pressure, or position they detect to the CAN; controllers issue commands (like adjusting the valve or the drive motor) to the executor via the CAN. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Real-time feedback"),": Via the CAN, sensors send the speed, steering angle, and brake status to the controllers, which make timely adjustments to the car to ensure safety. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data sharing and coordination"),": The CAN allows for data exchange (such as status and commands) between various devices, so the whole system can be more performant and efficient."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Network management and troubleshooting"),": The CAN keeps an eye on devices and components in the system. It recognizes, configures, and monitors the devices for maintenance and troubleshooting.")),(0,n.yg)("p",null,"With the CAN being that busy, you can imagine the data size that is traveling through the CAN every day. In the case of this post, we are talking about a car manufacturer who connects 4 million cars together and has to process 100 billion pieces of CAN data every day. "),(0,n.yg)("h2",{id:"iov-data-processing"},"IoV data processing"),(0,n.yg)("p",null,"To turn this huge data size into valuable information that guides product development, production, and sales is the juicy part. Like most data analytic workloads, this comes down to data writing and computation, which are also where challenges exist:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data writing at scale"),": Sensors are everywhere in a car: doors, seats, brake lights... Plus, many sensors collect more than one signal. The 4 million cars add up to a data throughput of millions of TPS, which means dozens of terabytes every day. With increasing car sales, that number is still growing. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Real-time analysis"),': This is perhaps the best manifestation of "time is life". Car manufacturers collect the real-time data from their vehicles to identify potential malfunctions, and fix them before any damage happens.'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Low-cost computation and storage"),": It's hard to talk about huge data size without mentioning its costs. Low cost makes big data processing sustainable.")),(0,n.yg)("h2",{id:"from-apache-hive-to-apache-doris-a-transition-to-real-time-analysis"},"From Apache Hive to Apache Doris: a transition to real-time analysis"),(0,n.yg)("p",null,"Like Rome, a real-time data processing platform is not built in a day. The car manufacturer used to rely on the combination of a batch analytic engine (Apache Hive) and some streaming frameworks and engines (Apache Flink, Apache Kafka) to gain near real-time data analysis performance. They didn't realize they needed real-time that bad until real-time was a problem."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Near Real-Time Data Analysis Platform")),(0,n.yg)("p",null,"This is what used to work for them:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"IoV-Hive-based-data-warehouse",src:t(98011).c,width:"1280",height:"766"})),(0,n.yg)("p",null,"Data from the CAN and vehicle sensors are uploaded via 4G network to the cloud gateway, which writes the data into Kafka. Then, Flink processes this data and forwards it to Hive. Going through several data warehousing layers in Hive, the aggregated data is exported to MySQL. At the end, Hive and MySQL provide data to the application layer for data analysis, dashboarding, etc."),(0,n.yg)("p",null,"Since Hive is primarily designed for batch processing rather than real-time analytics, you can tell the mismatch of it in this use case."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data writing"),": With such a huge data size, the data ingestion time from Flink into Hive was noticeably long. In addition, Hive only supports data updating at the granularity of partitions, which is not enough for some cases."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data analysis"),": The Hive-based analytic solution delivers high query latency, which is a multi-factor issue. Firstly, Hive was slower than expected when handling large tables with 1 billion rows. Secondly, within Hive, data is extracted from one layer to another by the execution of Spark SQL, which could take a while. Thirdly, as Hive needs to work with MySQL to serve all needs from the application side, data transfer between Hive and MySQL also adds to the query latency. ")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Real-Time Data Analysis Platform")),(0,n.yg)("p",null,"This is what happens when they add a real-time analytic engine to the picture:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"IoV-Doris-based-data-warehouse",src:t(84268).c,width:"1280",height:"1058"})),(0,n.yg)("p",null,"Compared to the old Hive-based platform, this new one is more efficient in three ways:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data writing"),": Data ingestion into ",(0,n.yg)("a",{parentName:"li",href:"https://doris.apache.org/"},"Apache Doris")," is quick and easy, without complicated configurations and the introduction of extra components. It supports a variety of data ingestion methods. For example, in this case, data is written from Kafka into Doris via ",(0,n.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/data-operate/import/import-way/stream-load-manual"},"Stream Load"),", and from Hive into Doris via ",(0,n.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load"),". "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data analysis"),": To showcase the query speed of Apache Doris by example, it can return a 10-million-row result set within seconds in a cross-table join query. Also, it can work as a ",(0,n.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/lakehouse/multi-catalog/"},"unified query gateway")," with its quick access to external data (Hive, MySQL, Iceberg, etc.), so analysts don't have to juggle between multiple components."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Computation and storage costs"),": Apache Doris provides the Z-Standard algorithm that can bring a 3~5 times higher data compression ratio. That's how it helps reduce costs in data computation and storage. Moreover, the compression can be done solely in Doris so it won't consume resources from Flink.")),(0,n.yg)("p",null,"A good real-time analytic solution not only stresses data processing speed, it also considers all the way along your data pipeline and smoothens every step of it. Here are two examples:"),(0,n.yg)("h3",{id:"1-the-arrangement-of-can-data"},"1. The arrangement of CAN data"),(0,n.yg)("p",null,"In Kafka, CAN data was arranged by the dimension of CAN ID. However, for the sake of data analysis, analysts had to compare signals from various vehicles, which meant to concatenate data of different CAN ID into a flat table and align it by timestamp. From that flat table, they could derive different tables for different analytic purposes. Such transformation was implemented using Spark SQL, which was time-consuming in the old Hive-based architecture, and the SQL statements are high-maintenance. Moreover, the data was updated by batch on a daily basis, which meant they could only get data from a day ago. "),(0,n.yg)("p",null,"In Apache Doris, all they need is to build the tables with the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-table/data-model#aggregate-model"},"Aggregate Key model"),", specify VIN (Vehicle Identification Number) and timestamp as the Aggregate Key, and define other data fields by ",(0,n.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL"),". With Doris, they don't have to take care of the SQL statements or the flat table, but are able to extract real-time insights from real-time data."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"IoV-CAN-data",src:t(76708).c,width:"1280",height:"937"})),(0,n.yg)("h3",{id:"2-dtc-data-query"},"2. DTC data query"),(0,n.yg)("p",null,"Of all CAN data, DTC (Diagnostic Trouble Code) deserves high attention and separate storage, because it tells you what's wrong with a car. Each day, the manufacturer receives around 1 billion pieces of DTC. To capture life-saving information from the DTC, data engineers need to relate the DTC data to a DTC configuration table in MySQL."),(0,n.yg)("p",null,"What they used to do was to write the DTC data into Kafka every day, process it in Flink, and store the results in Hive. In this way, the DTC data and the DTC configuration table were stored in two different components. That caused a dilemma: a 1-billion-row DTC table was hard to write into MySQL, while querying from Hive was slow. As the DTC configuration table was also constantly updated, engineers could only import a version of it into Hive on a regular basis. That meant they didn't always get to relate the DTC data to the latest DTC configurations. "),(0,n.yg)("p",null,"As is mentioned, Apache Doris can work as a unified query gateway. This is supported by its ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/lakehouse/multi-catalog/"},"Multi-Catalog")," feature. They import their DTC data from Hive into Doris, and then they create a MySQL Catalog in Doris to map to the DTC configuration table in MySQL. When all this is done, they can simply join the two tables within Doris and get real-time query response."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"IoV-DTC-data-query",src:t(760).c,width:"1280",height:"523"})),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"This is an actual real-time analytic solution for IoV. It is designed for data at really large scale, and it is now supporting a car manufacturer who receives 10 billion rows of new data every day in improving driving safety and experience."),(0,n.yg)("p",null,"Building a data platform to suit your use case is not easy, I hope this post helps you in building your own analytic solution."),(0,n.yg)("p",null,"Apache Doris ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"GitHub repo")),(0,n.yg)("p",null,"Find Apache Doris makers on ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"Slack")))}p.isMDXComponent=!0},76708:(e,a,t)=>{t.d(a,{c:()=>i});const i=t.p+"assets/images/IoV-CAN-data-21c4722dff0b60c64dd2286cbf3df3be.jpeg"},760:(e,a,t)=>{t.d(a,{c:()=>i});const i=t.p+"assets/images/IoV-DTC-data-query-7e0534a9aafd3005e1e08439acb288fc.png"},84268:(e,a,t)=>{t.d(a,{c:()=>i});const i=t.p+"assets/images/IoV-Doris-based-data-warehouse-6eb6329ab3bedda6ed707f02219d85c7.png"},98011:(e,a,t)=>{t.d(a,{c:()=>i});const i=t.p+"assets/images/IoV-Hive-based-data-warehouse-1bbef26f4fbb3012d0ae17fc3b1c4fa5.png"}}]);