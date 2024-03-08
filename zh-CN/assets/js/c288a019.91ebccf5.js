"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[47689],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>c});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),u=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(p.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=u(t),s=r,c=g["".concat(p,".").concat(s)]||g[s]||m[s]||i;return t?n.createElement(c,l(l({ref:a},d),{},{components:t})):n.createElement(c,l({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},507461:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(58168),r=(t(296540),t(15680));const i={title:"Hudi",language:"zh-CN"},l=void 0,o={unversionedId:"lakehouse/multi-catalog/hudi",id:"lakehouse/multi-catalog/hudi",title:"Hudi",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/multi-catalog/hudi.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/hudi",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/hudi",draft:!1,tags:[],version:"current",frontMatter:{title:"Hudi",language:"zh-CN"},sidebar:"docs",previous:{title:"Iceberg",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/iceberg"},next:{title:"Paimon",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/paimon"}},p={},u=[{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u521b\u5efa Catalog",id:"\u521b\u5efa-catalog",level:2},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2},{value:"Skip Merge",id:"skip-merge",level:2},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:2},{value:"Time Travel",id:"time-travel",level:2}],d={toc:u},g="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hudi"},"Hudi"),(0,r.yg)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Hudi \u8868\u652f\u6301\u7684\u67e5\u8be2\u7c7b\u578b\u5982\u4e0b\uff0c\u540e\u7eed\u5c06\u652f\u6301 Incremental Query\u3002")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u8868\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u67e5\u8be2\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Copy On Write"),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot Query + Time Travel")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Merge On Read"),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot Queries + Read Optimized Queries + Time Travel")))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u76ee\u524d\u652f\u6301 Hive Metastore \u548c\u517c\u5bb9 Hive Metastore \u7c7b\u578b(\u4f8b\u5982",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/lakehouse/multi-catalog/hive"},"AWS Glue"),"/",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/lakehouse/multi-catalog/dlf"},"Alibaba DLF"),")\u7684 Catalog\u3002")),(0,r.yg)("h2",{id:"\u521b\u5efa-catalog"},"\u521b\u5efa Catalog"),(0,r.yg)("p",null,"\u548c Hive Catalog \u57fa\u672c\u4e00\u81f4\uff0c\u8fd9\u91cc\u4ec5\u7ed9\u51fa\u7b80\u5355\u793a\u4f8b\u3002\u5176\u4ed6\u793a\u4f8b\u53ef\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/lakehouse/multi-catalog/hive"},"Hive Catalog"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hudi PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("p",null,"\u53ef\u9009\u914d\u7f6e\u53c2\u6570\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"use_hive_sync_partition"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528hms\u5df2\u540c\u6b65\u7684\u5206\u533a\u6570\u636e"),(0,r.yg)("td",{parentName:"tr",align:null},"false")))),(0,r.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("p",null,"\u548c Hive Catalog \u4e00\u81f4\uff0c\u53ef\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/lakehouse/multi-catalog/hive"},"Hive Catalog")," \u4e2d ",(0,r.yg)("strong",{parentName:"p"},"\u5217\u7c7b\u578b\u6620\u5c04")," \u4e00\u8282\u3002"),(0,r.yg)("h2",{id:"skip-merge"},"Skip Merge"),(0,r.yg)("p",null,"Spark \u5728\u521b\u5efa hudi mor \u8868\u7684\u65f6\u5019\uff0c\u4f1a\u521b\u5efa ",(0,r.yg)("inlineCode",{parentName:"p"},"_ro")," \u540e\u7f00\u7684 read optimize \u8868\uff0cdoris \u8bfb\u53d6 read optimize \u8868\u4f1a\u8df3\u8fc7 log \u6587\u4ef6\u7684\u5408\u5e76\u3002doris \u5224\u5b9a\u4e00\u4e2a\u8868\u662f\u5426\u4e3a read optimize \u8868\u5e76\u4e0d\u662f\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"_ro")," \u540e\u7f00\uff0c\u800c\u662f\u901a\u8fc7 hive inputformat\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," \u547d\u4ee4\u89c2\u5bdf cow/mor/read optimize \u8868\u7684 inputformat \u662f\u5426\u76f8\u540c\u3002\n\u6b64\u5916 doris \u652f\u6301\u5728 catalog properties \u6dfb\u52a0 hoodie \u76f8\u5173\u7684\u914d\u7f6e\uff0c\u914d\u7f6e\u9879\u517c\u5bb9 ",(0,r.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#Read-Options"},"Spark Datasource Configs"),"\u3002\u6240\u4ee5\u7528\u6237\u53ef\u4ee5\u5728 catalog properties \u4e2d\u6dfb\u52a0 ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.datasource.merge.type=skip_merge")," \u8df3\u8fc7\u5408\u5e76 log \u6587\u4ef6\u3002"),(0,r.yg)("h2",{id:"\u67e5\u8be2\u4f18\u5316"},"\u67e5\u8be2\u4f18\u5316"),(0,r.yg)("p",null,"Doris \u4f7f\u7528 parquet native reader \u8bfb\u53d6 COW \u8868\u7684\u6570\u636e\u6587\u4ef6\uff0c\u4f7f\u7528 Java SDK(\u901a\u8fc7JNI\u8c03\u7528hudi-bundle) \u8bfb\u53d6 MOR \u8868\u7684\u6570\u636e\u6587\u4ef6\u3002\u5728 upsert \u573a\u666f\u4e0b\uff0cMOR \u4f9d\u7136\u4f1a\u6709\u6570\u636e\u6587\u4ef6\u6ca1\u6709\u88ab\u66f4\u65b0\uff0c\u8fd9\u90e8\u5206\u6587\u4ef6\u53ef\u4ee5\u901a\u8fc7 parquet native reader\u8bfb\u53d6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/advanced/best-practice/query-analysis"},"explain")," \u547d\u4ee4\u67e5\u770b hudi scan \u7684\u6267\u884c\u8ba1\u5212\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"hudiNativeReadSplits")," \u8868\u793a\u6709\u591a\u5c11 split \u6587\u4ef6\u901a\u8fc7 parquet native reader \u8bfb\u53d6\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"|0:VHUDI_SCAN_NODE                                                             |\n|      table: minbatch_mor_rt                                                  |\n|      predicates: `o_orderkey` = 100030752                                    |\n|      inputSplitNum=810, totalFileSize=5645053056, scanRanges=810             |\n|      partition=80/80                                                         |\n|      numNodes=6                                                              |\n|      hudiNativeReadSplits=717/810                                            |\n")),(0,r.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/http-actions/fe/profile-action"},"profile")," \u67e5\u770b Java SDK \u7684\u6027\u80fd\uff0c\u4f8b\u5982:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"-  HudiJniScanner:  0ns\n  -  FillBlockTime:  31.29ms\n  -  GetRecordReaderTime:  1m5s\n  -  JavaScanTime:  35s991ms\n  -  OpenScannerTime:  1m6s\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"OpenScannerTime"),": \u521b\u5efa\u5e76\u521d\u59cb\u5316 JNI Reader \u7684\u65f6\u95f4"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"JavaScanTime"),": Java SDK \u8bfb\u53d6\u6570\u636e\u7684\u65f6\u95f4"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"FillBlockTime"),": Java \u6570\u636e\u62f7\u8d1d\u4e3a C++ \u6570\u636e\u7684\u65f6\u95f4"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"GetRecordReaderTime"),": \u8c03\u7528 Java SDK \u5e76\u521b\u5efa Hudi Record Reader \u7684\u65f6\u95f4")),(0,r.yg)("h2",{id:"time-travel"},"Time Travel"),(0,r.yg)("p",null,"\u652f\u6301\u8bfb\u53d6 Hudi \u8868\u6307\u5b9a\u7684 Snapshot\u3002"),(0,r.yg)("p",null,"\u6bcf\u4e00\u6b21\u5bf9 Hudi \u8868\u7684\u5199\u64cd\u4f5c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u5feb\u7167\u3002"),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u8bf7\u6c42\u53ea\u4f1a\u8bfb\u53d6\u6700\u65b0\u7248\u672c\u7684\u5feb\u7167\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," \u8bed\u53e5\uff0c\u6839\u636e\u5feb\u7167\u7684\u65f6\u95f4(",(0,r.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/quick-start-guide#time-travel-query"},"\u65f6\u95f4\u683c\u5f0f"),"\u548cHudi\u5b98\u7f51\u4fdd\u6301\u4e00\u81f4)\u8bfb\u53d6\u5386\u53f2\u7248\u672c\u7684\u6570\u636e\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'SELECT * FROM hudi_tbl FOR TIME AS OF "2022-10-07 17:20:37";')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'SELECT * FROM hudi_tbl FOR TIME AS OF "20221007172037";')),(0,r.yg)("p",null,"Hudi \u8868\u4e0d\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," \u8bed\u53e5\uff0c\u4f7f\u7528\u8be5\u8bed\u6cd5\u67e5\u8be2 Hudi \u8868\u5c06\u629b\u9519\u3002"))}m.isMDXComponent=!0}}]);