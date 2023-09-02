"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),p=i,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},84695:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={title:"Choosing an OLAP Engine for Financial Risk Management: What to Consider?",summary:"This post provides reference for what you should take into account when choosing an OLAP engine in a financial scenario.",date:"2023-08-17",author:"Jianbo Liu",tags:["Best Practice"]},r=void 0,s={permalink:"/blog/Xingyun",source:"@site/blog/Xingyun.md",title:"Choosing an OLAP Engine for Financial Risk Management: What to Consider?",description:"\x3c!--",date:"2023-08-17T00:00:00.000Z",formattedDate:"August 17, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Jianbo Liu"}],frontMatter:{title:"Choosing an OLAP Engine for Financial Risk Management: What to Consider?",summary:"This post provides reference for what you should take into account when choosing an OLAP engine in a financial scenario.",date:"2023-08-17",author:"Jianbo Liu",tags:["Best Practice"]},prevItem:{title:"LLM-Powered OLAP: the Tencent Experience with Apache Doris",permalink:"/blog/Tencent-LLM"},nextItem:{title:"Auto-Synchronization of an Entire MySQL Database for Data Analysis",permalink:"/blog/FDC"}},c={authorsImageUrls:[void 0]},l=[{value:"Data Must Be Combined",id:"data-must-be-combined",level:2},{value:"High Concurrency &amp; High Throughput",id:"high-concurrency--high-throughput",level:2},{value:"Log Analysis",id:"log-analysis",level:2},{value:"Easy Maintenance",id:"easy-maintenance",level:2},{value:"Architecture Overview",id:"architecture-overview",level:2}],d={toc:l},u="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"From a data engineer's point of view, financial risk management is a series of data analysis activities on financial data. The financial sector imposes its unique requirements on data engineering. This post explains them with a use case of Apache Doris, and provides reference for what you should take into account when choosing an OLAP engine in a financial scenario. "),(0,i.kt)("h2",{id:"data-must-be-combined"},"Data Must Be Combined"),(0,i.kt)("p",null,"The financial data landscape is evolving from standalone to distributed, heterogeneous systems. For example, in this use case scenario, the fintech service provider needs to connect the various transaction processing (TP) systems (MySQL, Oracle, and PostgreSQL) of its partnering banks. Before they adopted an OLAP engine, they were using Kettle to collect data. The ETL tool did not support join queries across different data sources and it could not store data. The ever-enlarging data size at the source end was pushing the system towards latency and instability. That's when they decided to introduce an OLAP engine."),(0,i.kt)("p",null,"The financial user's main pursuit is quick queries on large data volume with as least engineering and maintenance efforts as possible, so when it comes to the choice of OLAP engines, SQL on Hadoop should be crossed off the list due to its huge ecosystem and complicated components. One reason that they landed on Apache Doris was the metadata management capability. Apache Doris collects metadata of various data sources via API so it is a fit for the case which requires combination of different TP systems. "),(0,i.kt)("h2",{id:"high-concurrency--high-throughput"},"High Concurrency & High Throughput"),(0,i.kt)("p",null,"Financial risk control is based on analysis of large amounts of transaction data. Sometimes analysts identify abnormalities by combining data from different large tables, and often times they need to check a certain data record, which comes in the form of concurrent point queries in the data system. Thus, the OLAP engine should be able to handle both high-throughput queries and high-concurrency queries. "),(0,i.kt)("p",null,"To speed up the highly concurrent point queries, you can create ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/query-acceleration/materialized-view/"},"Materialized Views")," in Apache Doris. A Materialized View is a pre-computed data set stored in Apache Doris so that the system can respond much faster to queries that are frequently conducted. "),(0,i.kt)("p",null,"To facilitate queries on large tables, you can leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/query-acceleration/join-optimization/colocation-join/"},"Colocation Join")," mechanism. Colocation Join minimizes data transfer between computation nodes to reduce overheads brought by data movement. Thus, it can largely improve query speed when joining large tables."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(28447).Z,width:"1280",height:"687"})),(0,i.kt)("h2",{id:"log-analysis"},"Log Analysis"),(0,i.kt)("p",null,"Log analysis is important in financial data processing. Real-time processing and monitoring of logs can expose risks in time. Apache Doris provides data storage and analytics capabilities to make log analysis easier and more efficient. As logs are bulky, Apache Doris can deliver a high data compression rate to lower storage costs. "),(0,i.kt)("p",null,"Retrieval is a major part of log analysis, so ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/releasenotes/release-2.0.0"},"Apache Doris 2.0")," supports inverted index, which is a way to accelerate text searching and equivalence/range queries on numerics and datetime. It allows users to quickly locate the log record that they need among the massive data. The JSON storage feature in Apache Doris is reported to reduce storage costs of user activity logs by 70%, and the variety of parse functions provided can save data engineers from developing their own SQl functions. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(48658).Z,width:"1280",height:"473"})),(0,i.kt)("h2",{id:"easy-maintenance"},"Easy Maintenance"),(0,i.kt)("p",null,"In addition to the easy deployment, Apache Doris has a few mechanisms that are designed to save maintenance efforts. For example, it ensures high availability of cluster nodes with Systemd, and high availability of data with multi-replica and auto-balancing of replicas, so all maintenance required is to backup metadata on a regular basis. Apache Doris also supports ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition/"},"dynamic partitioning of data"),", which means it will automatically create or delete data partitions according to the rules specified by the user. This saves efforts in partition management and eliminates possible efforts caused by manual management."),(0,i.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,i.kt)("p",null,"This is overall data architecture in the case. The user utilizes Apache Flume for log data collection, and DataX for data update. Data from multiple sources will be collected into Apache Doris to form a data mart, from which analysts extract information to generate reports and dashboards for reference in risk control and business decisions. As for stability of the data mart itself, Grafana and Prometheus are used to monitor memory usage, compaction score and query response time of Apache Doris to make sure it is running well."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(95890).Z,width:"1280",height:"792"})))}h.isMDXComponent=!0},28447:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Xingyun_1-d07e739500944ff34d4ad3c75968850b.png"},48658:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Xingyun_2-84440a0d5bfc678448d3a3e3063bd7f9.png"},95890:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Xingyun_3-ef9c50ef508df963514a76a7365b0490.png"}}]);