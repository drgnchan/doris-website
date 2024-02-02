"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31120],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>g});var r=a(11504);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=i,g=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return a?r.createElement(g,n(n({ref:t},c),{},{components:a})):r.createElement(g,n({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,n[1]=s;for(var d=2;d<o;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},38892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(45072),i=(a(11504),a(95788));const o={title:"For entry-level data engineers: how to build a simple but solid data architecture",summary:"This article aims to provide reference for non-tech companies who are seeking to empower your business with data analytics.",date:"2023-07-31",author:"Zhenwei Liu",tags:["Best Practice"],image:"/images/how-to-build-a-simple-but-solid-data-architecture.png"},n=void 0,s={permalink:"/zh-CN/blog/For-Entry-Level-Data-Engineers-How-to-Build-a-Simple-but-Solid-Data-Architecture",source:"@site/blog/For-Entry-Level-Data-Engineers-How-to-Build-a-Simple-but-Solid-Data-Architecture.md",title:"For entry-level data engineers: how to build a simple but solid data architecture",description:"\x3c!--",date:"2023-07-31T00:00:00.000Z",formattedDate:"2023\u5e747\u670831\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Zhenwei Liu"}],frontMatter:{title:"For entry-level data engineers: how to build a simple but solid data architecture",summary:"This article aims to provide reference for non-tech companies who are seeking to empower your business with data analytics.",date:"2023-07-31",author:"Zhenwei Liu",tags:["Best Practice"],image:"/images/how-to-build-a-simple-but-solid-data-architecture.png"},prevItem:{title:"Database in fintech: how to support 10,000 dashboards without causing a mess",permalink:"/zh-CN/blog/Database-in-Fintech-How-to-Support-ten-thousand-Dashboards-Without-Causing-a-Mess"},nextItem:{title:"Is your latest data really the latest? check the data update mechanism of your database",permalink:"/zh-CN/blog/Is-Your-Latest-Data-Really-the-Latest-Check-the-Data-Update-Mechanism-of-Your-Database"}},l={authorsImageUrls:[void 0]},d=[{value:"What You Need",id:"what-you-need",level:2},{value:"Simple Architecture",id:"simple-architecture",level:2},{value:"Data Update",id:"data-update",level:2},{value:"Layering of Data Warehouse",id:"layering-of-data-warehouse",level:2},{value:"Reporting",id:"reporting",level:2},{value:"Quick aggregation to produce reports on demand",id:"quick-aggregation-to-produce-reports-on-demand",level:3},{value:"Quick response to data queries",id:"quick-response-to-data-queries",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d},u="wrapper";function h(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,r.c)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This article aims to provide reference for non-tech companies who are seeking to empower your business with data analytics. You will learn the basics about how to build an efficient and easy-to-use data system, and I will walk you through every aspect of it with a use case of Apache Doris, an MPP-based analytic data warehouse. "),(0,i.yg)("h2",{id:"what-you-need"},"What You Need"),(0,i.yg)("p",null,"This case is about a ticketing service provider who want a data platform that boasts quick processing, low maintenance costs, and ease of use, and I think they speak for the majority of entry-level database users."),(0,i.yg)("p",null,"A prominent feature of ticketing services is the periodic spikes in ticket orders, you know, before the shows go on. So from time to time, the company has a huge amount of new data rushing in and requires real-time processing of it, so they can make timely adjustments during the short sales window. But in other time, they don't want to spend too much energy and funds on maintaining the data system. Furthermore, for a beginner of digital operation who only require basic analytic functions, it is better to have a data architecture that is easy-to-grasp and user-friendly. After research and comparison, they came to the Apache Doris community and we help them build a Doris-based data architecture."),(0,i.yg)("h2",{id:"simple-architecture"},"Simple Architecture"),(0,i.yg)("p",null,"The building blocks of this architecture are simple. You only need Apache Flink and Apache Kafka for data ingestion, and Apache Doris as an analytic data warehouse. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"simple-data-architecture-with-Apache-Doris",src:a(45376).c,width:"1280",height:"599"})),(0,i.yg)("p",null,"Connecting data sources to the data warehouse is simple, too. The key component, Apache Doris, supports various data loading methods to fit with different data sources. You can perform column mapping, transforming, and filtering during data loading to avoid duplicate collection of data. To ingest a table, users only need to add the table name to the configurations, instead of writing a script themselves. "),(0,i.yg)("h2",{id:"data-update"},"Data Update"),(0,i.yg)("p",null,"Flink CDC was found to be the optimal choice if you are looking for higher stability in data ingestion. It also allows you to update the dynamically changing tables in real time. The process includes the following steps:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'Configure Flink CDC for the source MySQL database, so that it allows dynamic updating of the table management configurations (which you can think of as the "metadata").'),(0,i.yg)("li",{parentName:"ul"},"Create two CDC jobs in Flink, one to capture the changed data (the Forward stream), the other to update the table management configurations (the Broadcast stream)."),(0,i.yg)("li",{parentName:"ul"},'Configure all tables of the source database at the Sink end (the output end of Flink CDC). When there is newly added table in the source database, the Broadcast stream will be triggered to update the table management configurations. (You just need to configure the tables, instead of "creating" the tables.)')),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"configure-Flink-CDC",src:a(24636).c,width:"1280",height:"899"})),(0,i.yg)("h2",{id:"layering-of-data-warehouse"},"Layering of Data Warehouse"),(0,i.yg)("p",null,"Data flows from various sources into the data warehouse, where it is cleaned and organized before it is ready for queries and analysis. The data processing here is divided into five typical layers. Such layering simplifies the data cleaning process because it provides a clear division of labor and makes things easier to locate and comprehend. "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"ODS"),": This is the prep zone of the data warehouse. The unprocessed original data is put in the ",(0,i.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/data-table/data-model/#unique-model"},"Unique Key Model")," of Apache Doris, which can avoid duplication of data. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"DWD"),": This layer cleans, formats, and de-identifies data to produce fact tables. Every detailed data record is preserved. Data in this layer is also put into the Unique Key Model."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"DWS"),": This layer produces flat tables of a certain theme (order, user, etc.) based on data from the DWD layer. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"ADS"),": This layer auto-aggregates data, which is implemented by the ",(0,i.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/data-table/data-model/#aggregate-model"},"Aggregate Key Model")," of Apache Doris."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"DIM"),": The DIM layer accommodates dimension data (in this case, data about the theaters, projects, and show sessions, etc.), which is used in combination with the order details.")),(0,i.yg)("p",null,"After the original data goes through these layers, it is available for queries via one data export interface."),(0,i.yg)("h2",{id:"reporting"},"Reporting"),(0,i.yg)("p",null,"Like many non-tech business, the ticketing service provider needs a data warehouse mainly for reporting. They derive trends and patterns from all kinds of data reports, and then figure out ways towards efficient management and sales increase. Specifically, this is the information they are observing in their reports:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Statistical Reporting"),": These are the most frequently used reports, including sales reports by theater, distribution channel, sales representative, and show."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Agile Reporting"),": These are reports developed for specific purposes, such as daily and weekly project data reports, sales summary reports, GMV reports, and settlement reports."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Data Analysis"),": This involves data such as membership orders, attendance rates, and user portraits."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Dashboarding"),": This is to visually display sales data.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Real-Time-Data-Warehouse-and-Reporting",src:a(9504).c,width:"1280",height:"584"})),(0,i.yg)("p",null,"These are all entry-level tasks in data analytics. One of the biggest burdens for the data engineers was to quickly develop new reports as the internal analysts required. The ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/data-model#aggregate-model"},"Aggregate Key Model")," of Apache Doris is designed for this. "),(0,i.yg)("h3",{id:"quick-aggregation-to-produce-reports-on-demand"},"Quick aggregation to produce reports on demand"),(0,i.yg)("p",null,"For example, supposing that analysts want a sales report by sales representatives, data engineers can produce that by simple configuration:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Put the original data in the Aggregate Key Model"),(0,i.yg)("li",{parentName:"ol"},"Specify the sales representative ID column and the payment date column as the Key columns, and the order amount column as the Value column")),(0,i.yg)("p",null,"Then, order amounts of the same sale representative within the specified period of time will be auto-aggregated. Bam! That's the report you need! "),(0,i.yg)("p",null,"According to the user, this whole process only takes them 10~30 minutes, depending on the complexity of the report required. So the Aggregate Key Model largely releases data engineers from the pressure of report development."),(0,i.yg)("h3",{id:"quick-response-to-data-queries"},"Quick response to data queries"),(0,i.yg)("p",null,"Most data analysts would just want their target data to be returned the second they need it. In this case, the user often leverages two capabilities of Apache Doris to realize quick query response."),(0,i.yg)("p",null,"Firstly, Apache Doris is famously fast in Join queries. So if you need to extract information across multiple tables, you are in good hands. Secondly, in data analysis, it often happens that analysts frequently input the same request. For example, they frequently want to check the sales data of different theaters. In this scenario, Apache Doris allows you to create a ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/query-acceleration/materialized-view/"},"Materialized View"),", which means you pre-aggregate the sales data of each theater, and store this table in isolation from the original tables. In this way, every time you need to check the sales data by theater, the system directly goes to the Materialized View and reads data from there, instead of scanning the original table all over again. This can increase query speed by orders of magnitudes."),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"This is the overview of a simple data architecture and how it can provide the data services you need. It ensures data ingestion stability and quality with Flink CDC, and quick data analysis with Apache Doris. The deployment of this architecture is simple, too. If you plan for a data analytic upgrade for your business, you might refer to this case. If you need advice and help, you may join our ",(0,i.yg)("a",{parentName:"p",href:"https://t.co/ZxJuNJHXb2"},"community here"),"."))}h.isMDXComponent=!0},45376:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/Poly_1-4657c20d910093fd2ab45c5355bf13dc.png"},24636:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/Poly_2-0bd77b804cf526923be9c603871a34e7.png"},9504:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/Poly_3-8dbc669ac5f492a38335618a36ef214f.png"}}]);