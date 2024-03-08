"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46143],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var a=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},708060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(58168),o=(t(296540),t(15680));const r={title:"Auto synchronization of an entire MySQL database for data analysis",summary:"Flink-Doris-Connector 1.4.0 allows users to ingest a whole database (MySQL or Oracle) that contains thousands of tables into Apache Doris, in one step.",date:"2023-08-16",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/auto-synchronize.png"},i=void 0,s={permalink:"/blog/Auto-Synchronization-of-an-Entire-MySQL-Database-for-Data-Analysis",source:"@site/blog/Auto-Synchronization-of-an-Entire-MySQL-Database-for-Data-Analysis.md",title:"Auto synchronization of an entire MySQL database for data analysis",description:"\x3c!--",date:"2023-08-16T00:00:00.000Z",formattedDate:"August 16, 2023",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Auto synchronization of an entire MySQL database for data analysis",summary:"Flink-Doris-Connector 1.4.0 allows users to ingest a whole database (MySQL or Oracle) that contains thousands of tables into Apache Doris, in one step.",date:"2023-08-16",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/auto-synchronize.png"},prevItem:{title:"Choosing an OLAP engine for financial risk management: what to consider?",permalink:"/blog/Choosing-an-OLAP-Engine-for-Financial-Risk-Management-What-to-Consider"},nextItem:{title:"New milestone: Apache Doris 2.0.0 just released",permalink:"/blog/release-note-2.0.0"}},l={authorsImageUrls:[void 0]},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"How to Use It",id:"how-to-use-it",level:2},{value:"How It Performs",id:"how-it-performs",level:2},{value:"How It Benefits Data Engineers",id:"how-it-benefits-data-engineers",level:2},{value:"Other Features",id:"other-features",level:2},{value:"Example Usage",id:"example-usage",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,a.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Flink-Doris-Connector 1.4.0 allows users to ingest a whole database (",(0,o.yg)("strong",{parentName:"p"},"MySQL")," or ",(0,o.yg)("strong",{parentName:"p"},"Oracle"),") that contains thousands of tables into ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/"},"Apache Doris"),", a real-time analytic database, ",(0,o.yg)("strong",{parentName:"p"},"in one step"),"."),(0,o.yg)("p",null,"With built-in Flink CDC, the Connector can directly synchronize the table schema and data from the upstream source to Apache Doris, which means users no longer have to write a DataStream program or pre-create mapping tables in Doris. "),(0,o.yg)("p",null,"When a Flink job starts, the Connector automatically checks for data equivalence between the source database and Apache Doris. If the data source contains tables which do not exist in Doris, the Connector will automatically create those same tables in Doris, and utilizes the side outputs of Flink to facilitate the ingestion of multiple tables at once; if there is a schema change in the source, it will automatically obtain the DDL statement and make the same schema change in Doris. "),(0,o.yg)("h2",{id:"quick-start"},"Quick Start"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"For MySQL"),":"),(0,o.yg)("p",null,"Download JAR file: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-flink-connector/releases/tag/1.4.0"},"https://github.com/apache/doris-flink-connector/releases/tag/1.4.0")),(0,o.yg)("p",null,"Maven: "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>flink-doris-connector-1.15</artifactId>\n  \x3c!--artifactId>flink-doris-connector-1.16</artifactId--\x3e\n  \x3c!--artifactId>flink-doris-connector-1.17</artifactId--\x3e\n  <version>1.4.0</version>\n</dependency>\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"For Oracle"),":"),(0,o.yg)("p",null,"Download JAR file: ",(0,o.yg)("a",{parentName:"p",href:"http://justtmp-bj-1308700295.cos.ap-beijing.myqcloud.com/oracle/flink-doris-connector-1.15-1.5.0-SNAPSHOT.jar"},"Flink 1.15"),", ",(0,o.yg)("a",{parentName:"p",href:"http://justtmp-bj-1308700295.cos.ap-beijing.myqcloud.com/oracle/flink-doris-connector-1.16-1.5.0-SNAPSHOT.jar"},"Flink 1.16"),", ",(0,o.yg)("a",{parentName:"p",href:"http://justtmp-bj-1308700295.cos.ap-beijing.myqcloud.com/oracle/flink-doris-connector-1.17-1.5.0-SNAPSHOT.jar"},"Flink 1.17")),(0,o.yg)("h2",{id:"how-to-use-it"},"How to Use It"),(0,o.yg)("p",null,"For example, to ingest a whole MySQL database ",(0,o.yg)("inlineCode",{parentName:"p"},"mysql_db")," into Doris (the MySQL table names start with ",(0,o.yg)("inlineCode",{parentName:"p"},"tbl")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"test"),"), simply execute the following command (no need to create the tables in Doris in advance):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},'<FLINK_HOME>/bin/flink run \\\n    -Dexecution.checkpointing.interval=10s \\\n    -Dparallelism.default=1 \\\n    -c org.apache.doris.flink.tools.cdc.CdcTools \\\n    lib/flink-doris-connector-1.16-1.4.0.jar \\\n    mysql-sync-database \\\n    --database test_db \\\n    --mysql-conf hostname=127.0.0.1 \\\n    --mysql-conf username=root \\\n    --mysql-conf password=123456 \\\n    --mysql-conf database-name=mysql_db \\\n    --including-tables "tbl|test.*" \\\n    --sink-conf fenodes=127.0.0.1:8030 \\\n    --sink-conf username=root \\\n    --sink-conf password=123456 \\\n    --sink-conf jdbc-url=jdbc:mysql://127.0.0.1:9030 \\\n    --sink-conf sink.label-prefix=label1 \\\n    --table-conf replication_num=1 \n')),(0,o.yg)("p",null,"To ingest an Oracle database: please refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-flink-connector/pull/156"},"example code"),"."),(0,o.yg)("h2",{id:"how-it-performs"},"How It Performs"),(0,o.yg)("p",null,"When it comes to synchronizing a whole database (containing hundreds or even thousands of tables, active or inactive), most users want it to be done within seconds. So we tested the Connector to see if it came up to scratch:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"1000 MySQL tables, each having 100 fields. All tables were active (which meant they were continuously updated and each data writing involved over a hundred rows)"),(0,o.yg)("li",{parentName:"ul"},"Flink job checkpoint: 10s")),(0,o.yg)("p",null,"Under pressure test, the system showed high stability, with key metrics as follows:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Flink-Doris-Connector",src:t(14263).A,width:"1280",height:"243"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Flink-CDC",src:t(425532).A,width:"1280",height:"487"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Doris-Cluster-Compaction-Score",src:t(743045).A,width:"1280",height:"306"})),(0,o.yg)("p",null,"According to feedback from early adopters, the Connector has also delivered high performance and system stability in 10,000-table database synchronization in their production environment. This proves that the combination of Apache Doris and Flink CDC is capable of large-scale data synchronization with high efficiency and reliability."),(0,o.yg)("h2",{id:"how-it-benefits-data-engineers"},"How It Benefits Data Engineers"),(0,o.yg)("p",null,"Engineers no longer have to worry about table creation or table schema maintenance, saving them days of tedious and error-prone work. Previously in Flink CDC, you need to create a Flink job for each table and build a log parsing link at the source end, but now with whole-database ingestion, resouce consumption in the source database is largely reduced. It is also a unified solution for incremental update and full update."),(0,o.yg)("h2",{id:"other-features"},"Other Features"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1. Joining dimension table and fact table")),(0,o.yg)("p",null,"The common practice is to put dimension tables in Doris and run join queries via the real-time stream of Flink. Based on the ",(0,o.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/dev/datastream/operators/asyncio/"},"Async I/O of Flink"),", Flink-Doris-Connector 1.4.0 implements asynchronous Lookup Join, so the Flink real-time stream won't be blocked due to queries. Also, the Connector allows you to combine mulitple queries into one big query, and send it to Doris at once for processing. This improves the efficiency and throughput of such join queries."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2. Thrift")," ",(0,o.yg)("strong",{parentName:"p"},"SDK")),(0,o.yg)("p",null,"We introduced Thrift-Service SDK into the Connector so users no longer have to use Thrift plug-ins or configure a Thrift environment in compilation. This makes the compilation process much simpler."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"3. On-Demand Stream Load")),(0,o.yg)("p",null,"During data synchronization, when there is no new data ingestion, no Stream Load requests will be issued. This avoids unnecessary consumption of cluster resources."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"4. Polling of Backend Nodes")),(0,o.yg)("p",null,"For data ingestion, Doris calls a frontend node to obtain a list of the backend nodes, and randomly chooses one to launch an ingestion request. That backend node will be the Coordinator. Flink-Doris-Connector 1.4.0 allows users to enable the polling mechanism, which is to have a different backend node to be the Coordinator at each Flink checkpoint to avoid too much pressure on a single backend node for a long time."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"5. Support for More Data Types")),(0,o.yg)("p",null,"In addition to the common data types, Flink-Doris-Connector 1.4.0 supports DecimalV3/DateV2/DateTimev2/Array/JSON in Doris."),(0,o.yg)("h2",{id:"example-usage"},"Example Usage"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Read from Apache Doris:")," "),(0,o.yg)("p",null,"You can read data from Doris via DataStream or FlinkSQL (bounded stream). Predicate pushdown is supported."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Java"},"CREATE TABLE flink_doris_source (\n    name STRING,\n    age INT,\n    score DECIMAL(5,2)\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = '127.0.0.1:8030',\n      'table.identifier' = 'database.table',\n      'username' = 'root',\n      'password' = 'password',\n      'doris.filter.query' = 'age=18'\n);\n\nSELECT * FROM flink_doris_source;\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Join dimension table and fact table"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Java"},"CREATE TABLE fact_table (\n  `id` BIGINT,\n  `name` STRING,\n  `city` STRING,\n  `process_time` as proctime()\n) WITH (\n  'connector' = 'kafka',\n  ...\n);\n\ncreate table dim_city(\n  `city` STRING,\n  `level` INT ,\n  `province` STRING,\n  `country` STRING\n) WITH (\n  'connector' = 'doris',\n  'fenodes' = '127.0.0.1:8030',\n  'jdbc-url' = 'jdbc:mysql://127.0.0.1:9030',\n  'lookup.jdbc.async' = 'true',\n  'table.identifier' = 'dim.dim_city',\n  'username' = 'root',\n  'password' = ''\n);\n\nSELECT a.id, a.name, a.city, c.province, c.country,c.level \nFROM fact_table a\nLEFT JOIN dim_city FOR SYSTEM_TIME AS OF a.process_time AS c\nON a.city = c.city\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Write to Apache Doris"),": "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Java"},"CREATE TABLE doris_sink (\n    name STRING,\n    age INT,\n    score DECIMAL(5,2)\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = '127.0.0.1:8030',\n      'table.identifier' = 'database.table',\n      'username' = 'root',\n      'password' = '',\n      'sink.label-prefix' = 'doris_label',\n      //json write in\n      'sink.properties.format' = 'json',\n      'sink.properties.read_json_by_line' = 'true'\n);\n")),(0,o.yg)("p",null,"If you've got any questions, find Apache Doris developers on ",(0,o.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"Slack"),"."))}u.isMDXComponent=!0},14263:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/FDC_1-ce2b3c35d3126c743a9b9df1105dd1ce.png"},425532:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/FDC_2-18b4e1b3346d90e6430b992d74e9a64f.png"},743045:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/FDC_3-5e973914e448c11df5e3e408823f2ded.png"}}]);