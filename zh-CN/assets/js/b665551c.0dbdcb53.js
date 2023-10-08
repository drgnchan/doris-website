"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65329],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),k=l,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||r;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},35179:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={title:"Apache Doris announced the official release of version 1.2.2",summary:"Dear community, Apache Doris 1.2.2 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-02-15",author:"Apache Doris",tags:["Release Notes"]},i=void 0,o={permalink:"/zh-CN/blog/release-note-1.2.2",source:"@site/blog/release-note-1.2.2.md",title:"Apache Doris announced the official release of version 1.2.2",description:"\x3c!--",date:"2023-02-15T00:00:00.000Z",formattedDate:"2023\u5e742\u670815\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.2",summary:"Dear community, Apache Doris 1.2.2 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-02-15",author:"Apache Doris",tags:["Release Notes"]},prevItem:{title:"Best Practice in Duyansoft, Improving Query Speed to Make the Most out of Your Data",permalink:"/zh-CN/blog/Improving-Query-Speed-to-Make-the-Most-out-of-Your-Data"},nextItem:{title:"ClickHouse & Kudu to Doris: 10X Concurrency Increased, 70% Latency Down",permalink:"/zh-CN/blog/linkedcare"}},p={authorsImageUrls:[void 0]},u=[{value:"New Features",id:"new-features",level:2},{value:"Lakehouse",id:"lakehouse",level:3},{value:"Auto Bucket",id:"auto-bucket",level:3},{value:"New Functions",id:"new-functions",level:3},{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Compaction",id:"compaction",level:3},{value:"Lakehouse",id:"lakehouse-1",level:3},{value:"Other",id:"other",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Other",id:"other-1",level:2},{value:"Big Thanks",id:"big-thanks",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"new-features"},"New Features"),(0,l.kt)("h3",{id:"lakehouse"},"Lakehouse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Support automatic synchronization of Hive metastore.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Support reading the Iceberg Snapshot, and viewing the Snapshot history.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JDBC Catalog supports PostgreSQL, Clickhouse, Oracle, SQLServer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JDBC Catalog supports Insert operation"))),(0,l.kt)("p",null,"Reference: ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/")),(0,l.kt)("h3",{id:"auto-bucket"},"Auto Bucket"),(0,l.kt)("p",null," Set and scale the number of buckets for different partitions to keep the number of tablet in a relatively appropriate range."),(0,l.kt)("h3",{id:"new-functions"},"New Functions"),(0,l.kt)("p",null,"Add the new function ",(0,l.kt)("inlineCode",{parentName:"p"},"width_bucket"),". "),(0,l.kt)("p",null,"Reference: ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description"},"https://doris.apache.org/zh-CN/docs/dev/sql-manual/sql-functions/width-bucket/#description")),(0,l.kt)("h2",{id:"behavior-changes"},"Behavior Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Disable BE's page cache by default: ",(0,l.kt)("inlineCode",{parentName:"li"},"disable_storage_page_cache=true"))),(0,l.kt)("p",null,"Turn off this configuration to optimize memory usage and reduce the risk of memory OOM.\nBut it will reduce the query latency of some small queries.\nIf you are sensitive to query latency, or have high concurrency and small query scenarios, you can configure ",(0,l.kt)("em",{parentName:"p"},"disable_storage_page_cache=false")," to enable page cache again."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add new session variable ",(0,l.kt)("inlineCode",{parentName:"li"},"group_by_and_having_use_alias_first"),", used to control whether the group and having clauses use alias.")),(0,l.kt)("p",null,"Reference: ",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/variables"},"https://doris.apache.org/docs/dev/advanced/variables")),(0,l.kt)("h2",{id:"improvements"},"Improvements"),(0,l.kt)("h3",{id:"compaction"},"Compaction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Support ",(0,l.kt)("inlineCode",{parentName:"p"},"Vertical Compaction"),". To optimize the compaction overhead and efficiency of wide tables.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Support ",(0,l.kt)("inlineCode",{parentName:"p"},"Segment ompaction"),". Fix -238 and -235 issues with high frequency imports."))),(0,l.kt)("h3",{id:"lakehouse-1"},"Lakehouse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Hive Catalog can be compatible with Hive version 1/2/3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Hive Catalog can access JuiceFS based HDFS with Broker.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Iceberg Catalog Support Hive Metastore and Rest Catalog type.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ES Catalog support _id column mapping\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Optimize Iceberg V2 read performance with large number of delete rows.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Support for reading Iceberg tables after Schema Evolution")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Parquet Reader handles column name case correctly."))),(0,l.kt)("h3",{id:"other"},"Other"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Support for accessing Hadoop KMS-encrypted HDFS.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Support to cancel the Export export task in progress.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Optimize the performance of ",(0,l.kt)("inlineCode",{parentName:"p"},"explode_split")," with 1x.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Optimize the read performance of nullable columns with 3x.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Optimize some problems of Memtracker, improve memory management accuracy, and optimize memory application."))),(0,l.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed memory leak when loading data with Doris Flink Connector.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed the possible thread scheduling problem of BE and reduce the ",(0,l.kt)("inlineCode",{parentName:"p"},"Fragment sent timeout")," error caused by BE thread exhaustion.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed various correctness and precision issues of column type datetimev2/decimalv3.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed the problem data correctness issue with Unique Key Merge-on-Read table.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed various known issues with the Light Schema Change feature.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed various data correctness issues of bitmap type Runtime Filter.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed the problem of poor reading performance of csv reader introduced in version 1.2.1.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed the problem of BE OOM caused by Spark Load data download phase. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed possible metadata compatibility issues when upgrading from version 1.1 to version 1.2. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed the metadata problem when creating JDBC Catalog with Resource.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed the problem of high CPU usage caused by load operation.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed the problem of FE OOM caused by a large number of failed Broker Load jobs.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed the problem of precision loss when loading floating-point types.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed the problem of memory leak when useing 2PC stream load"))),(0,l.kt)("h2",{id:"other-1"},"Other"),(0,l.kt)("p",null,"Add metrics to view the total rowset and segment numbers on BE"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"doris_be_all_rowsets_num and doris_be_all_segments_num")),(0,l.kt)("h2",{id:"big-thanks"},"Big Thanks"),(0,l.kt)("p",null,"Thanks to ALL who contributed to this release!"),(0,l.kt)("p",null,"@adonis0147"),(0,l.kt)("p",null,"@AshinGau"),(0,l.kt)("p",null,"@BePPPower"),(0,l.kt)("p",null,"@BiteTheDDDDt"),(0,l.kt)("p",null,"@ByteYue"),(0,l.kt)("p",null,"@caiconghui"),(0,l.kt)("p",null,"@cambyzju"),(0,l.kt)("p",null,"@chenlinzhong"),(0,l.kt)("p",null,"@DarvenDuan"),(0,l.kt)("p",null,"@dataroaring"),(0,l.kt)("p",null,"@Doris-Extras"),(0,l.kt)("p",null,"@dutyu"),(0,l.kt)("p",null,"@englefly"),(0,l.kt)("p",null,"@freemandealer"),(0,l.kt)("p",null,"@Gabriel39"),(0,l.kt)("p",null,"@HappenLee"),(0,l.kt)("p",null,"@Henry2SS"),(0,l.kt)("p",null,"@htyoung"),(0,l.kt)("p",null,"@isHuangXin"),(0,l.kt)("p",null,"@JackDrogon"),(0,l.kt)("p",null,"@jacktengg"),(0,l.kt)("p",null,"@Jibing-Li"),(0,l.kt)("p",null,"@kaka11chen"),(0,l.kt)("p",null,"@Kikyou1997"),(0,l.kt)("p",null,"@Lchangliang"),(0,l.kt)("p",null,"@LemonLiTree"),(0,l.kt)("p",null,"@liaoxin01"),(0,l.kt)("p",null,"@liqing-coder"),(0,l.kt)("p",null,"@luozenglin"),(0,l.kt)("p",null,"@morningman"),(0,l.kt)("p",null,"@morrySnow"),(0,l.kt)("p",null,"@mrhhsg"),(0,l.kt)("p",null,"@nextdreamblue"),(0,l.kt)("p",null,"@qidaye"),(0,l.kt)("p",null,"@qzsee"),(0,l.kt)("p",null,"@spaces-X"),(0,l.kt)("p",null,"@stalary"),(0,l.kt)("p",null,"@starocean999"),(0,l.kt)("p",null,"@weizuo93"),(0,l.kt)("p",null,"@wsjz"),(0,l.kt)("p",null,"@xiaokang"),(0,l.kt)("p",null,"@xinyiZzz"),(0,l.kt)("p",null,"@xy720"),(0,l.kt)("p",null,"@yangzhg"),(0,l.kt)("p",null,"@yiguolei"),(0,l.kt)("p",null,"@yixiutt"),(0,l.kt)("p",null,"@Yukang-Lian"),(0,l.kt)("p",null,"@Yulei-Yang"),(0,l.kt)("p",null,"@zclllyybb"),(0,l.kt)("p",null,"@zddr"),(0,l.kt)("p",null,"@zhangstar333"),(0,l.kt)("p",null,"@zhannngchen"),(0,l.kt)("p",null,"@zy-kkk"))}m.isMDXComponent=!0}}]);