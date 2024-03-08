"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55294],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>f});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),m=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=m(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,f=d["".concat(i,".").concat(u)]||d[u]||p[u]||l;return a?t.createElement(f,s(s({ref:n},c),{},{components:a})):t.createElement(f,s({ref:n},c))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var m=2;m<l;m++)s[m]=a[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},529371:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var t=a(58168),r=(a(296540),a(15680));const l={title:"SHOW-LOAD-PROFILE",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",id:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",title:"SHOW-LOAD-PROFILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-LOAD-PROFILE",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-LAST-INSERT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT"},next:{title:"SHOW-LOAD-WARNINGS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS"}},i={},m=[{value:"SHOW-LOAD-PROFILE",id:"show-load-profile",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:m},d="wrapper";function p(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-load-profile"},"SHOW-LOAD-PROFILE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW LOAD PROFILE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u662f\u7528\u6765\u67e5\u770b\u5bfc\u5165\u64cd\u4f5c\u7684Profile\u4fe1\u606f\uff0c\u8be5\u529f\u80fd\u9700\u8981\u7528\u6237\u6253\u5f00 Profile \u8bbe\u7f6e\uff0c0.15 \u4e4b\u524d\u7248\u672c\u6267\u884c\u4e0b\u9762\u7684\u8bbe\u7f6e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,r.yg)("p",null,"0.15 \u53ca\u4e4b\u540e\u7684\u7248\u672c\u6267\u884c\u4e0b\u9762\u7684\u8bbe\u7f6e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET [GLOBAL] enable_profile=true;\n")),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'show load profile "/";\n\nshow load profile "/[queryId]"\n\nshow load profile "/[queryId]/[TaskId]"\n\nshow load profile "/[queryId]/[TaskId]/[FragmentId]/"\n\nshow load profile "/[queryId]/[TaskId]/[FragmentId]/[InstanceId]"\n')),(0,r.yg)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5217\u51fa\u5f53\u524d\u4fdd\u5b58\u7684\u6240\u6709\u5bfc\u5165 Profile\u3002\u6bcf\u884c\u5bf9\u5e94\u4e00\u4e2a\u5bfc\u5165\u3002\u5176\u4e2d QueryId \u5217\u4e3a\u5bfc\u5165\u4f5c\u4e1a\u7684 ID\u3002\u8fd9\u4e2a ID \u4e5f\u53ef\u4ee5\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b\u62ff\u5230\u3002\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u6211\u4eec\u60f3\u770b\u7684 Profile \u5bf9\u5e94\u7684 QueryId\uff0c\u67e5\u770b\u5177\u4f53\u60c5\u51b5"),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5217\u51fa\u6240\u6709\u7684 Load Profile"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/"\\G\n*************************** 1. row ***************************\n              JobId: 20010\n            QueryId: 980014623046410a-af5d36f23381017f\n               User: root\n          DefaultDb: default_cluster:test\n                SQL: LOAD LABEL xxx\n          QueryType: Load\n          StartTime: 2023-03-07 19:48:24\n            EndTime: 2023-03-07 19:50:45\n          TotalTime: 2m21s\n         QueryState: N/A\n            TraceId:\n       AnalysisTime: NULL\n           PlanTime: NULL\n       ScheduleTime: NULL\n    FetchResultTime: NULL\n    WriteResultTime: NULL\nWaitAndFetchResultTime: NULL\n*************************** 2. row ***************************\n              JobId: N/A\n            QueryId: 7cc2d0282a7a4391-8dd75030185134d8\n               User: root\n          DefaultDb: default_cluster:test\n                SQL: insert into xxx\n          QueryType: Load\n          StartTime: 2023-03-07 19:49:15\n            EndTime: 2023-03-07 19:49:15\n          TotalTime: 102ms\n         QueryState: OK\n            TraceId:\n       AnalysisTime: 825.277us\n           PlanTime: 4.126ms\n       ScheduleTime: N/A\n    FetchResultTime: 0ns\n    WriteResultTime: 0ns\nWaitAndFetchResultTime: N/A\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u6709\u5bfc\u5165\u4f5c\u4e1a\u7684\u5b50\u4efb\u52a1\u6982\u51b5\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------+\n| TaskId                            | ActiveTime |\n+-----------------------------------+------------+\n| 980014623046410a-af5d36f23381017f | 3m14s      |\n+-----------------------------------+------------+\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u5b50\u4efb\u52a1\u7684\u6267\u884c\u6811\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f";\n\n                      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                      \u2502[-1: OlapTableSink]    \u2502\n                      \u2502Fragment: 0            \u2502\n                      \u2502MaxActiveTime: 86.541ms\u2502\n                      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                  \u2502\n                                  \u2502\n                        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                        \u2502[1: VEXCHANGE_NODE]\u2502\n                        \u2502Fragment: 0        \u2502\n                        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n        \u2502                                 \u2502\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510              \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502[MemoryUsage]\u2502              \u2502[1: VDataStreamSender] \u2502\n \u2502Fragment: 0  \u2502              \u2502Fragment: 1            \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518              \u2502MaxActiveTime: 34.882ms\u2502\n                              \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                          \u2502\n                                          \u2502\n                            \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                            \u2502[0: VNewOlapScanNode(tbl1)]\u2502\n                            \u2502Fragment: 1                \u2502\n                            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                        \u2502                         \u2502\n                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510            \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                 \u2502[MemoryUsage]\u2502            \u2502[VScanner] \u2502\n                 \u2502Fragment: 1  \u2502            \u2502Fragment: 1\u2502\n                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                          \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                                          \u2502                 \u2502\n                                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                                 \u2502[SegmentIterator]\u2502 \u2502[MemoryUsage]\u2502\n                                 \u2502Fragment: 1      \u2502 \u2502Fragment: 1  \u2502\n                                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n```sql\n\n\u8fd9\u4e00\u5c42\u4f1a\u663e\u793a\u5b50\u4efb\u52a1\u7684\u67e5\u8be2\u6811\uff0c\u5176\u4e2d\u6807\u6ce8\u4e86 Fragment id\u3002\n\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u6307\u5b9aFragment \u7684 Instance \u6982\u51b5"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/1";\n+-----------------------------------+------------------+------------+\n| Instances                         | Host             | ActiveTime |\n+-----------------------------------+------------------+------------+\n| 980014623046410a-88e260f0c43031f2 | 10.81.85.89:9067 | 3m7s       |\n| 980014623046410a-88e260f0c43031f3 | 10.81.85.89:9067 | 3m6s       |\n| 980014623046410a-88e260f0c43031f4 | 10.81.85.89:9067 | 3m10s      |\n| 980014623046410a-88e260f0c43031f5 | 10.81.85.89:9067 | 3m14s      |\n+-----------------------------------+------------------+------------+\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7ee7\u7eed\u67e5\u770b\u67d0\u4e00\u4e2a\u5177\u4f53\u7684 Instance \u4e0a\u5404\u4e2a\u7b97\u5b50\u7684\u8be6\u7ec6 Profile"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/1/980014623046410a-88e260f0c43031f5"\\G\n\n*************************** 1. row ***************************\n\nInstance:\n\n      \u250c-----------------------------------------\u2510\n      \u2502[-1: OlapTableSink]                      \u2502\n      \u2502(Active: 2m17s, non-child: 70.91)        \u2502\n      \u2502  - Counters:                            \u2502\n      \u2502      - CloseWaitTime: 1m53s             \u2502\n      \u2502      - ConvertBatchTime: 0ns            \u2502\n      \u2502      - MaxAddBatchExecTime: 1m46s       \u2502\n      \u2502      - NonBlockingSendTime: 3m11s       \u2502\n      \u2502      - NumberBatchAdded: 782            \u2502\n      \u2502      - NumberNodeChannels: 1            \u2502\n      \u2502      - OpenTime: 743.822us              \u2502\n      \u2502      - RowsFiltered: 0                  \u2502\n      \u2502      - RowsRead: 1.599729M (1599729)    \u2502\n      \u2502      - RowsReturned: 1.599729M (1599729)\u2502\n      \u2502      - SendDataTime: 11s761ms           \u2502\n      \u2502      - TotalAddBatchExecTime: 1m46s     \u2502\n      \u2502      - ValidateDataTime: 9s802ms        \u2502\n      \u2514-----------------------------------------\u2518\n                           \u2502\n\u250c-----------------------------------------------------\u2510\n\u2502[0: BROKER_SCAN_NODE]                                \u2502\n\u2502(Active: 56s537ms, non-child: 29.06)                 \u2502\n\u2502  - Counters:                                        \u2502\n\u2502      - BytesDecompressed: 0.00                      \u2502\n\u2502      - BytesRead: 5.77 GB                           \u2502\n\u2502      - DecompressTime: 0ns                          \u2502\n\u2502      - FileReadTime: 34s263ms                       \u2502\n\u2502      - MaterializeTupleTime(*): 45s54ms             \u2502\n\u2502      - NumDiskAccess: 0                             \u2502\n\u2502      - PeakMemoryUsage: 33.03 MB                    \u2502\n\u2502      - RowsRead: 1.599729M (1599729)                \u2502\n\u2502      - RowsReturned: 1.599729M (1599729)            \u2502\n\u2502      - RowsReturnedRate: 28.295K sec                \u2502\n\u2502      - TotalRawReadTime(*): 1m20s                   \u2502\n\u2502      - TotalReadThroughput: 30.39858627319336 MB/sec\u2502\n\u2502      - WaitScannerTime: 56s528ms                    \u2502\n\u2514-----------------------------------------------------\u2518\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, LOAD, PROFILE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);