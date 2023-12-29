"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Import Analysis",language:"en"},i=void 0,s={unversionedId:"advanced/best-practice/import-analysis",id:"advanced/best-practice/import-analysis",title:"Import Analysis",description:"\x3c!--",source:"@site/docs/advanced/best-practice/import-analysis.md",sourceDirName:"advanced/best-practice",slug:"/advanced/best-practice/import-analysis",permalink:"/docs/dev/advanced/best-practice/import-analysis",draft:!1,tags:[],version:"current",frontMatter:{title:"Import Analysis",language:"en"},sidebar:"docs",previous:{title:"Query Analysis",permalink:"/docs/dev/advanced/best-practice/query-analysis"},next:{title:"Debug Log",permalink:"/docs/dev/advanced/best-practice/debug-log"}},l={},c=[{value:"Import Plan Tree",id:"import-plan-tree",level:2},{value:"View import Profile",id:"view-import-profile",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"import-analysis"},"Import Analysis"),(0,r.kt)("p",null,"Doris provides a graphical command to help users analyze a specific import more easily. This article describes how to use this feature."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This function is currently only for Broker Load analysis.")),(0,r.kt)("h2",{id:"import-plan-tree"},"Import Plan Tree"),(0,r.kt)("p",null,"If you don't know much about Doris' query plan tree, please read the previous article ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/advanced/best-practice/query-analysis"},"DORIS/best practices/query analysis"),"."),(0,r.kt)("p",null,"The execution process of a ",(0,r.kt)("a",{parentName:"p",href:"../../data-operate/import/import-way/broker-load-manual"},"Broker Load")," request is also based on Doris' query framework. A Broker Load job will be split into multiple subtasks based on the number of DATA INFILE clauses in the import request. Each subtask can be regarded as an independent import execution plan. An import plan consists of only one Fragment, which is composed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502OlapTableSink\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n        \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502BrokerScanNode\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"BrokerScanNode is mainly responsible for reading the source data and sending it to OlapTableSink, and OlapTableSink is responsible for sending data to the corresponding node according to the partition and bucketing rules, and the corresponding node is responsible for the actual data writing."),(0,r.kt)("p",null,"The Fragment of the import execution plan will be divided into one or more Instances according to the number of imported source files, the number of BE nodes and other parameters. Each Instance is responsible for part of the data import."),(0,r.kt)("p",null,"The execution plans of multiple subtasks are executed concurrently, and multiple instances of an execution plan are also executed in parallel."),(0,r.kt)("h2",{id:"view-import-profile"},"View import Profile"),(0,r.kt)("p",null,"The user can open the session variable ",(0,r.kt)("inlineCode",{parentName:"p"},"is_report_success")," with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,r.kt)("p",null,"Then submit a Broker Load import request and wait until the import execution completes. Doris will generate a Profile for this import. Profile contains the execution details of importing each subtask and Instance, which helps us analyze import bottlenecks."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Viewing profiles of unsuccessful import jobs is currently not supported.")),(0,r.kt)("p",null,"We can get the Profile list first with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/"\\G\n*************************** 1. row ***************************\n                 JobId: 20010\n               QueryId: 980014623046410a-af5d36f23381017f\n                  User: root\n             DefaultDb: default_cluster:test\n                   SQL: LOAD LABEL xxx\n             QueryType: Load\n             StartTime: 2023-03-07 19:48:24\n               EndTime: 2023-03-07 19:50:45\n             TotalTime: 2m21s\n            QueryState: N/A\n               TraceId:\n          AnalysisTime: NULL\n              PlanTime: NULL\n          ScheduleTime: NULL\n       FetchResultTime: NULL\n       WriteResultTime: NULL\nWaitAndFetchResultTime: NULL\n*************************** 2. row ***************************\n                 JobId: N/A\n               QueryId: 7cc2d0282a7a4391-8dd75030185134d8\n                  User: root\n             DefaultDb: default_cluster:test\n                   SQL: insert into xxx\n             QueryType: Load\n             StartTime: 2023-03-07 19:49:15\n               EndTime: 2023-03-07 19:49:15\n             TotalTime: 102ms\n            QueryState: OK\n               TraceId:\n          AnalysisTime: 825.277us\n              PlanTime: 4.126ms\n          ScheduleTime: N/A\n       FetchResultTime: 0ns\n       WriteResultTime: 0ns\nWaitAndFetchResultTime: N/A\n')),(0,r.kt)("p",null,"This command will list all currently saved import profiles. Each line corresponds to one import. where the QueryId column is the ID of the import job. This ID can also be viewed through the SHOW LOAD statement. We can select the QueryId corresponding to the Profile we want to see to see the specific situation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Viewing a Profile is divided into 3 steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the subtask overview"),(0,r.kt)("p",{parentName:"li"},"View an overview of subtasks with imported jobs by running the following command:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------+\n| TaskId                            | ActiveTime |\n+-----------------------------------+------------+\n| 980014623046410a-af5d36f23381017f | 3m14s      |\n+-----------------------------------+------------+\n')),(0,r.kt)("p",null,"As shown in the figure above, it means that the import job ",(0,r.kt)("inlineCode",{parentName:"p"},"980014623046410a-af5d36f23381017f")," has a total of one subtask, in which ActiveTime indicates the execution time of the longest instance in this subtask."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the Instance overview of the specified subtask"),(0,r.kt)("p",{parentName:"li"},"When we find that a subtask takes a long time, we can further check the execution time of each instance of the subtask:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------------+------------+\n| Instances                         | Host             | ActiveTime |\n+-----------------------------------+------------------+------------+\n| 980014623046410a-88e260f0c43031f2 | 10.81.85.89:9067 | 3m7s       |\n| 980014623046410a-88e260f0c43031f3 | 10.81.85.89:9067 | 3m6s       |\n| 980014623046410a-88e260f0c43031f4 | 10.81.85.89:9067 | 3m10s      |\n| 980014623046410a-88e260f0c43031f5 | 10.81.85.89:9067 | 3m14s      |\n+-----------------------------------+------------------+------------+\n')),(0,r.kt)("p",null,"This shows the time-consuming of four instances of the subtask 980014623046410a-af5d36f23381017f, and also shows the execution node where the instance is located."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the specific Instance"),(0,r.kt)("p",{parentName:"li"},"We can continue to view the detailed profile of each operator on a specific Instance:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/980014623046410a-88e260f0c43031f5"\\G\n**************************** 1. row ******************** ******\nInstance:\n      \u250c-----------------------------------------\u2510\n      \u2502[-1: OlapTableSink] \u2502\n      \u2502(Active: 2m17s, non-child: 70.91) \u2502\n      \u2502 - Counters: \u2502\n      \u2502 - CloseWaitTime: 1m53s \u2502\n      \u2502 - ConvertBatchTime: 0ns \u2502\n      \u2502 - MaxAddBatchExecTime: 1m46s \u2502\n      \u2502 - NonBlockingSendTime: 3m11s \u2502\n      \u2502 - NumberBatchAdded: 782 \u2502\n      \u2502 - NumberNodeChannels: 1 \u2502\n      \u2502 - OpenTime: 743.822us \u2502\n      \u2502 - RowsFiltered: 0 \u2502\n      \u2502 - RowsRead: 1.599729M (1599729) \u2502\n      \u2502 - RowsReturned: 1.599729M (1599729)\u2502\n      \u2502 - SendDataTime: 11s761ms \u2502\n      \u2502 - TotalAddBatchExecTime: 1m46s \u2502\n      \u2502 - ValidateDataTime: 9s802ms \u2502\n      \u2514-----------------------------------------\u2518\n                           \u2502\n\u250c------------------------------------------------- ----\u2510\n\u2502[0: BROKER_SCAN_NODE] \u2502\n\u2502(Active: 56s537ms, non-child: 29.06) \u2502\n\u2502 - Counters: \u2502\n\u2502 - BytesDecompressed: 0.00 \u2502\n\u2502 - BytesRead: 5.77 GB \u2502\n\u2502 - DecompressTime: 0ns \u2502\n\u2502 - FileReadTime: 34s263ms \u2502\n\u2502 - MaterializeTupleTime(*): 45s54ms \u2502\n\u2502 - NumDiskAccess: 0 \u2502\n\u2502 - PeakMemoryUsage: 33.03 MB \u2502\n\u2502 - RowsRead: 1.599729M (1599729) \u2502\n\u2502 - RowsReturned: 1.599729M (1599729) \u2502\n\u2502 - RowsReturnedRate: 28.295K /sec \u2502\n\u2502 - TotalRawReadTime(*): 1m20s \u2502\n\u2502 - TotalReadThroughput: 30.39858627319336 MB/sec\u2502\n\u2502 - WaitScannerTime: 56s528ms \u2502\n\u2514------------------------------------------------- ----\u2518\n')),(0,r.kt)("p",null,"The figure above shows the specific profiles of each operator of Instance 980014623046410a-af5d36f23381017f in subtask 980014623046410a-88e260f0c43031f5."),(0,r.kt)("p",null,"Through the above three steps, we can gradually check the execution bottleneck of an import task."))}d.isMDXComponent=!0}}]);