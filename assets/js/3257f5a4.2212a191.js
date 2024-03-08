"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87984],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),E=i,c=u["".concat(o,".").concat(E)]||u[E]||m[E]||r;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=E;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}E.displayName="MDXCreateElement"},16600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(58168),i=(a(296540),a(15680));const r={title:"CREATE-ASYNC-MATERIALIZED-VIEW",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",id:"version-2.1/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",title:"CREATE-ASYNC-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CREATE-ASYNC-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"CREATE-SQL-BLOCK-RULE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},next:{title:"CREATE-JOB",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-JOB"}},o={},p=[{value:"CREATE-ASYNC-MATERIALIZED-VIEW",id:"create-async-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"illustrate",id:"illustrate",level:4},{value:"simpleColumnDefs",id:"simplecolumndefs",level:5},{value:"buildMode",id:"buildmode",level:5},{value:"refreshMethod",id:"refreshmethod",level:5},{value:"refreshTrigger",id:"refreshtrigger",level:5},{value:"key",id:"key",level:5},{value:"partition",id:"partition",level:5},{value:"property",id:"property",level:4},{value:"query",id:"query",level:5},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"create-async-materialized-view"},"CREATE-ASYNC-MATERIALIZED-VIEW"),(0,i.yg)("h3",{id:"name"},"Name"),(0,i.yg)("p",null,"CREATE ASYNC MATERIALIZED VIEW"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"This statement is used to create an asynchronous materialized view."),(0,i.yg)("h4",{id:"syntax"},"syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW (IF NOT EXISTS)? mvName=multipartIdentifier\n        (LEFT_PAREN cols=simpleColumnDefs RIGHT_PAREN)? buildMode?\n        (REFRESH refreshMethod? refreshTrigger?)?\n        (KEY keys=identifierList)?\n        (COMMENT STRING_LITERAL)?\n        (PARTITION BY LEFT_PAREN partitionKey = identifier RIGHT_PAREN)?\n        (DISTRIBUTED BY (HASH hashKeys=identifierList | RANDOM) (BUCKETS (INTEGER_VALUE | AUTO))?)?\n        propertyClause?\n        AS query\n")),(0,i.yg)("h4",{id:"illustrate"},"illustrate"),(0,i.yg)("h5",{id:"simplecolumndefs"},"simpleColumnDefs"),(0,i.yg)("p",null,"Used to define the materialized view column information, if not defined, it will be automatically derived"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"simpleColumnDefs\n: cols+=simpleColumnDef (COMMA cols+=simpleColumnDef)*\n    ;\n\nsimpleColumnDef\n: colName=identifier (COMMENT comment=STRING_LITERAL)?\n    ;\n")),(0,i.yg)("p",null,'For example, define two columns aa and bb, where the annotation for aa is "name"'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1\n(aa comment "name",bb)\n')),(0,i.yg)("h5",{id:"buildmode"},"buildMode"),(0,i.yg)("p",null,"Used to define whether the materialized view is refreshed immediately after creation, default to IMMEDIATE"),(0,i.yg)("p",null,"IMMEDIATE\uff1aRefresh Now"),(0,i.yg)("p",null,"DEFERRED\uff1aDelay refresh"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"buildMode\n: BUILD (IMMEDIATE | DEFERRED)\n;\n")),(0,i.yg)("p",null,"For example, specifying the materialized view to refresh immediately"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nBUILD IMMEDIATE\n")),(0,i.yg)("h5",{id:"refreshmethod"},"refreshMethod"),(0,i.yg)("p",null,"Used to define the refresh method for materialized views, default to AUTO"),(0,i.yg)("p",null,"COMPLETE\uff1aFull refresh"),(0,i.yg)("p",null,"AUTO\uff1aTry to refresh incrementally as much as possible. If incremental refresh is not possible, refresh in full"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"refreshMethod\n: COMPLETE | AUTO\n;\n")),(0,i.yg)("p",null,"For example, specifying full refresh of materialized views"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nREFRESH COMPLETE\n")),(0,i.yg)("h5",{id:"refreshtrigger"},"refreshTrigger"),(0,i.yg)("p",null,"Trigger method for refreshing data in materialized views, default to MANUAL"),(0,i.yg)("p",null,"MANUAL\uff1aManual refresh"),(0,i.yg)("p",null,"SCHEDULE\uff1aTimed refresh"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"refreshTrigger\n: ON MANUAL\n| ON SCHEDULE refreshSchedule\n;\n    \nrefreshSchedule\n: EVERY INTEGER_VALUE mvRefreshUnit (STARTS STRING_LITERAL)?\n;\n    \nmvRefreshUnit\n: MINUTE | HOUR | DAY | WEEK\n;    \n")),(0,i.yg)("p",null,"For example: executed every 2 hours, starting from 21:07:09 on December 13, 2023"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1\nREFRESH ON SCHEDULE EVERY 2 HOUR STARTS "2023-12-13 21:07:09"\n')),(0,i.yg)("h5",{id:"key"},"key"),(0,i.yg)("p",null,"The materialized view is the DUPLICATE KEY model, therefore the specified columns are arranged in sequence"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"identifierList\n: LEFT_PAREN identifierSeq RIGHT_PAREN\n    ;\n\nidentifierSeq\n: ident+=errorCapturingIdentifier (COMMA ident+=errorCapturingIdentifier)*\n;\n")),(0,i.yg)("p",null,"For example, specifying k1 and k2 as sorting sequences"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nKEY(k1,k2)\n")),(0,i.yg)("h5",{id:"partition"},"partition"),(0,i.yg)("p",null,"There are two types of partitioning methods for materialized views. If no partitioning is specified, there will be a default single partition. If a partitioning field is specified, the system will automatically deduce the source base table of that field and synchronize all partitions of the base table (currently supporting ",(0,i.yg)("inlineCode",{parentName:"p"},"OlapTable")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"hive"),"). (Limitation: If the base table is an ",(0,i.yg)("inlineCode",{parentName:"p"},"OlapTable"),", it can only have one partition field)"),(0,i.yg)("p",null,"For example, if the base table is a range partition with a partition field of ",(0,i.yg)("inlineCode",{parentName:"p"},"create_time")," and partitioning by day, and ",(0,i.yg)("inlineCode",{parentName:"p"},"partition by(ct) as select create_time as ct from t1")," is specified when creating a materialized view,\nthen the materialized view will also be a range partition with a partition field of 'ct' and partitioning by day"),(0,i.yg)("p",null,'The selection of partition fields and the definition of materialized views must meet the following constraints to be successfully created;\notherwise, an error "Unable to find a suitable base table for partitioning" will occur:'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"At least one of the base tables used by the materialized view must be a partitioned table."),(0,i.yg)("li",{parentName:"ul"},"Partitioned tables used by the materialized view must employ list or range partitioning strategies."),(0,i.yg)("li",{parentName:"ul"},"The top-level partition column in the materialized view can only have one partition field."),(0,i.yg)("li",{parentName:"ul"},"The SQL of the materialized view needs to use partition columns from the base table."),(0,i.yg)("li",{parentName:"ul"},"If GROUP BY is used, the partition column fields must be after the GROUP BY."),(0,i.yg)("li",{parentName:"ul"},"If window functions are used, the partition column fields must be after the PARTITION BY."),(0,i.yg)("li",{parentName:"ul"},"Data changes should occur on partitioned tables. If they occur on non-partitioned tables, the materialized view needs to be fully rebuilt."),(0,i.yg)("li",{parentName:"ul"},"Using the fields that generate nulls in the JOIN as partition fields in the materialized view prohibits partition incremental updates.")),(0,i.yg)("h4",{id:"property"},"property"),(0,i.yg)("p",null,"The materialized view can specify both the properties of the table and the properties unique to the materialized view."),(0,i.yg)("p",null,"The properties unique to materialized views include:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"grace_period"),": When performing query rewrites, there is a maximum allowed delay time (measured in seconds) for the data of the materialized view. If there is a discrepancy between the data of partition A and the base table, and the last refresh time of partition A of the materialized view was 1, while the current system time is 2, then this partition will not undergo transparent rewriting. However, if the grace_period is greater than or equal to 1, this partition will be used for transparent rewriting."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"excluded_trigger_tables"),": Table names ignored during data refresh, separated by commas. For example, ",(0,i.yg)("inlineCode",{parentName:"p"}," table1, table2")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"refresh_partition_num"),": The number of partitions refreshed by a single insert statement is set to 1 by default. When refreshing a materialized view, the system first calculates the list of partitions to be refreshed and then splits it into multiple insert statements that are executed in sequence according to this configuration. If any insert statement fails, the entire task will stop executing. The materialized view ensures the transactionality of individual insert statements, meaning that failed insert statements will not affect partitions that have already been successfully refreshed."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"workload_group"),": The name of the workload_group used by the materialized view when performing refresh tasks. This is used to limit the resources used for refreshing data in the materialized view, in order to avoid affecting the operation of other business processes. For details on how to create and use workload_group, refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/admin-manual/workload-group"},"WORKLOAD-GROUP")),(0,i.yg)("h5",{id:"query"},"query"),(0,i.yg)("p",null,"Create a query statement for the materialized view, and the result is the data in the materialized view"),(0,i.yg)("p",null,"Random functions are not supported, for example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT random() as dd,k3 FROM user\n")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a materialized view mv1 that refreshes immediately and then once a week, with the data source being the hive catalog"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1 BUILD IMMEDIATE REFRESH COMPLETE ON SCHEDULE EVERY 1 WEEK\n DISTRIBUTED BY RANDOM BUCKETS 2\n PROPERTIES (\n "replication_num" = "1"\n )\n AS SELECT * FROM hive_catalog.db1.user;\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a materialized view with multiple table joins"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1 BUILD IMMEDIATE REFRESH COMPLETE ON SCHEDULE EVERY 1 WEEK\n DISTRIBUTED BY RANDOM BUCKETS 2\n PROPERTIES (\n "replication_num" = "1"\n )\n AS select user.k1,user.k3,com.k4 from user join com on user.k1=com.k1;\n')))),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"CREATE, ASYNC, MATERIALIZED, VIEW\n")))}m.isMDXComponent=!0}}]);