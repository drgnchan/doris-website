"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98008],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>y});var l=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function E(e,n){if(null==e)return{};var r,l,a=function(e,n){if(null==e)return{};var r,l,a={},t=Object.keys(e);for(l=0;l<t.length;l++)r=t[l],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)r=t[l],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=l.createContext({}),o=function(e){var n=l.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=o(e.components);return l.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var r=e.components,a=e.mdxType,t=e.originalType,p=e.parentName,s=E(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||g[m]||t;return r?l.createElement(y,i(i({ref:n},s),{},{components:r})):l.createElement(y,i({ref:n},s))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=r.length,i=new Array(t);i[0]=m;var E={};for(var p in n)hasOwnProperty.call(n,p)&&(E[p]=n[p]);E.originalType=e,E[u]="string"==typeof e?e:a,i[1]=E;for(var o=2;o<t;o++)i[o]=r[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83814:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>t,metadata:()=>E,toc:()=>o});var l=r(58168),a=(r(96540),r(15680));const t={title:"CREATE-ASYNC-MATERIALIZED-VIEW",language:"zh-CN"},i=void 0,E={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",title:"CREATE-ASYNC-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-ASYNC-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},next:{title:"CREATE-JOB",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-JOB"}},p={},o=[{value:"CREATE-ASYNC-MATERIALIZED-VIEW",id:"create-async-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:4},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:4},{value:"simpleColumnDefs",id:"simplecolumndefs",level:5},{value:"buildMode",id:"buildmode",level:5},{value:"refreshMethod",id:"refreshmethod",level:5},{value:"refreshTrigger",id:"refreshtrigger",level:5},{value:"key",id:"key",level:5},{value:"partition",id:"partition",level:5},{value:"property",id:"property",level:4},{value:"query",id:"query",level:5},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],s={toc:o},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,l.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"create-async-materialized-view"},"CREATE-ASYNC-MATERIALIZED-VIEW"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CREATE ASYNC MATERIALIZED VIEW"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u3002"),(0,a.yg)("h4",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW (IF NOT EXISTS)? mvName=multipartIdentifier\n        (LEFT_PAREN cols=simpleColumnDefs RIGHT_PAREN)? buildMode?\n        (REFRESH refreshMethod? refreshTrigger?)?\n        (KEY keys=identifierList)?\n        (COMMENT STRING_LITERAL)?\n        (PARTITION BY LEFT_PAREN partitionKey = identifier RIGHT_PAREN)?\n        (DISTRIBUTED BY (HASH hashKeys=identifierList | RANDOM) (BUCKETS (INTEGER_VALUE | AUTO))?)?\n        propertyClause?\n        AS query\n")),(0,a.yg)("h4",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.yg)("h5",{id:"simplecolumndefs"},"simpleColumnDefs"),(0,a.yg)("p",null,"\u7528\u6765\u5b9a\u4e49\u7269\u5316\u89c6\u56fecolumn\u4fe1\u606f\uff0c\u5982\u679c\u4e0d\u5b9a\u4e49\uff0c\u5c06\u81ea\u52a8\u63a8\u5bfc"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"simpleColumnDefs\n: cols+=simpleColumnDef (COMMA cols+=simpleColumnDef)*\n    ;\n\nsimpleColumnDef\n: colName=identifier (COMMENT comment=STRING_LITERAL)?\n    ;\n")),(0,a.yg)("p",null,'\u4f8b\u5982:\u5b9a\u4e49\u4e24\u5217aa\u548cbb,\u5176\u4e2daa\u7684\u6ce8\u91ca\u4e3a"name"'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1\n(aa comment "name",bb)\n')),(0,a.yg)("h5",{id:"buildmode"},"buildMode"),(0,a.yg)("p",null,"\u7528\u6765\u5b9a\u4e49\u7269\u5316\u89c6\u56fe\u662f\u5426\u521b\u5efa\u5b8c\u6210\u7acb\u5373\u5237\u65b0,\u9ed8\u8ba4IMMEDIATE"),(0,a.yg)("p",null,"IMMEDIATE\uff1a\u7acb\u5373\u5237\u65b0"),(0,a.yg)("p",null,"DEFERRED\uff1a\u5ef6\u8fdf\u5237\u65b0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"buildMode\n: BUILD (IMMEDIATE | DEFERRED)\n;\n")),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a\u6307\u5b9a\u7269\u5316\u89c6\u56fe\u7acb\u5373\u5237\u65b0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nBUILD IMMEDIATE\n")),(0,a.yg)("h5",{id:"refreshmethod"},"refreshMethod"),(0,a.yg)("p",null,"\u7528\u6765\u5b9a\u4e49\u7269\u5316\u89c6\u56fe\u5237\u65b0\u65b9\u5f0f\uff0c\u9ed8\u8ba4AUTO"),(0,a.yg)("p",null,"COMPLETE\uff1a\u5168\u91cf\u5237\u65b0"),(0,a.yg)("p",null,"AUTO\uff1a\u5c3d\u91cf\u589e\u91cf\u5237\u65b0\uff0c\u5982\u679c\u4e0d\u80fd\u589e\u91cf\u5237\u65b0\uff0c\u5c31\u5168\u91cf\u5237\u65b0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"refreshMethod\n: COMPLETE | AUTO\n;\n")),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a\u6307\u5b9a\u7269\u5316\u89c6\u56fe\u5168\u91cf\u5237\u65b0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nREFRESH COMPLETE\n")),(0,a.yg)("h5",{id:"refreshtrigger"},"refreshTrigger"),(0,a.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u5237\u65b0\u6570\u636e\u7684\u89e6\u53d1\u65b9\u5f0f\uff0c\u9ed8\u8ba4MANUAL"),(0,a.yg)("p",null,"MANUAL\uff1a\u624b\u52a8\u5237\u65b0"),(0,a.yg)("p",null,"SCHEDULE\uff1a\u5b9a\u65f6\u5237\u65b0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"refreshTrigger\n: ON MANUAL\n| ON SCHEDULE refreshSchedule\n;\n    \nrefreshSchedule\n: EVERY INTEGER_VALUE mvRefreshUnit (STARTS STRING_LITERAL)?\n;\n    \nmvRefreshUnit\n: MINUTE | HOUR | DAY | WEEK\n;    \n")),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a\u6bcf2\u5c0f\u65f6\u6267\u884c\u4e00\u6b21\uff0c\u4ece2023-12-13 21:07:09\u5f00\u59cb"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1\nREFRESH ON SCHEDULE EVERY 2 HOUR STARTS "2023-12-13 21:07:09"\n')),(0,a.yg)("h5",{id:"key"},"key"),(0,a.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u4e3aDUPLICATE KEY\u6a21\u578b\uff0c\u56e0\u6b64\u6307\u5b9a\u7684\u5217\u4e3a\u6392\u5e8f\u5217"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"identifierList\n: LEFT_PAREN identifierSeq RIGHT_PAREN\n    ;\n\nidentifierSeq\n: ident+=errorCapturingIdentifier (COMMA ident+=errorCapturingIdentifier)*\n;\n")),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a\u6307\u5b9ak1,k2\u4e3a\u6392\u5e8f\u5217"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nKEY(k1,k2)\n")),(0,a.yg)("h5",{id:"partition"},"partition"),(0,a.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u6709\u4e24\u79cd\u5206\u533a\u65b9\u5f0f\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u5206\u533a\uff0c\u9ed8\u8ba4\u53ea\u6709\u4e00\u4e2a\u5206\u533a\uff0c\u5982\u679c\u6307\u5b9a\u5206\u533a\u5b57\u6bb5\uff0c\u4f1a\u81ea\u52a8\u63a8\u5bfc\u51fa\u5b57\u6bb5\u6765\u81ea\u54ea\u4e2a\u57fa\u8868\u5e76\u540c\u6b65\u57fa\u8868(\u5f53\u524d\u652f\u6301",(0,a.yg)("inlineCode",{parentName:"p"},"OlapTable"),"\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"hive"),")\u7684\u6240\u6709\u5206\u533a\uff08\u9650\u5236\u6761\u4ef6\uff1a\u57fa\u8868\u5982\u679c\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"OlapTable"),"\uff0c\u90a3\u4e48\u53ea\u80fd\u6709\u4e00\u4e2a\u5206\u533a\u5b57\u6bb5\uff09"),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a\u57fa\u8868\u662frange\u5206\u533a\uff0c\u5206\u533a\u5b57\u6bb5\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"create_time"),"\u5e76\u6309\u5929\u5206\u533a\uff0c\u521b\u5efa\u7269\u5316\u89c6\u56fe\u65f6\u6307\u5b9a",(0,a.yg)("inlineCode",{parentName:"p"},"partition by(ct) as select create_time as ct from t1"),"\n\u90a3\u4e48\u7269\u5316\u89c6\u56fe\u4e5f\u4f1a\u662frange\u5206\u533a\uff0c\u5206\u533a\u5b57\u6bb5\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"ct"),",\u5e76\u4e14\u6309\u5929\u5206\u533a"),(0,a.yg)("h4",{id:"property"},"property"),(0,a.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u65e2\u53ef\u4ee5\u6307\u5b9atable\u7684property\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u7269\u5316\u89c6\u56fe\u7279\u6709\u7684property\u3002"),(0,a.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u7279\u6709\u7684property\u5305\u62ec\uff1a"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"grace_period"),"\uff1a\u67e5\u8be2\u6539\u5199\u65f6\u5141\u8bb8\u7269\u5316\u89c6\u56fe\u6570\u636e\u7684\u6700\u5927\u5ef6\u8fdf\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002\u5982\u679c\u5206\u533aA\u548c\u57fa\u8868\u7684\u6570\u636e\u4e0d\u4e00\u81f4\uff0c\u7269\u5316\u89c6\u56fe\u7684\u5206\u533aA\u4e0a\u6b21\u5237\u65b0\u65f6\u95f4\u4e3a1\uff0c\u7cfb\u7edf\u5f53\u524d\u65f6\u95f4\u4e3a2\uff0c\u90a3\u4e48\u8be5\u5206\u533a\u4e0d\u4f1a\u88ab\u900f\u660e\u6539\u5199\u3002\u4f46\u662f\u5982\u679cgrace_period\u5927\u4e8e\u7b49\u4e8e1\uff0c\u8be5\u5206\u533a\u5c31\u4f1a\u88ab\u7528\u4e8e\u900f\u660e\u6539\u5199"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"excluded_trigger_tables"),"\uff1a\u6570\u636e\u5237\u65b0\u65f6\u5ffd\u7565\u7684\u8868\u540d\uff0c\u9017\u53f7\u5206\u5272\u3002\u4f8b\u5982",(0,a.yg)("inlineCode",{parentName:"p"},"table1,table2")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"refresh_partition_num"),"\uff1a\u5355\u6b21insert\u8bed\u53e5\u5237\u65b0\u7684\u5206\u533a\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a1\u3002\u7269\u5316\u89c6\u56fe\u5237\u65b0\u65f6\u4f1a\u5148\u8ba1\u7b97\u8981\u5237\u65b0\u7684\u5206\u533a\u5217\u8868\uff0c\u7136\u540e\u6839\u636e\u8be5\u914d\u7f6e\u62c6\u5206\u6210\u591a\u4e2ainsert\u8bed\u53e5\u987a\u5e8f\u6267\u884c\u3002\u9047\u5230\u5931\u8d25\u7684insert\u8bed\u53e5\uff0c\u6574\u4e2a\u4efb\u52a1\u5c06\u505c\u6b62\u6267\u884c\u3002\u7269\u5316\u89c6\u56fe\u4fdd\u8bc1\u5355\u4e2ainsert\u8bed\u53e5\u7684\u4e8b\u52a1\u6027\uff0c\u5931\u8d25\u7684insert\u8bed\u53e5\u4e0d\u4f1a\u5f71\u54cd\u5230\u5df2\u7ecf\u5237\u65b0\u6210\u529f\u7684\u5206\u533a\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"workload_group"),"\uff1a\u7269\u5316\u89c6\u56fe\u6267\u884c\u5237\u65b0\u4efb\u52a1\u65f6\u4f7f\u7528\u7684workload_group\u540d\u79f0\u3002\u7528\u6765\u9650\u5236\u7269\u5316\u89c6\u56fe\u5237\u65b0\u6570\u636e\u4f7f\u7528\u7684\u8d44\u6e90\uff0c\u907f\u514d\u5f71\u54cd\u5230\u5176\u5b83\u4e1a\u52a1\u7684\u8fd0\u884c\u3002workload_group\u521b\u5efa\u53ca\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/workload-group"},"WORKLOAD-GROUP")),(0,a.yg)("h5",{id:"query"},"query"),(0,a.yg)("p",null,"\u521b\u5efa\u7269\u5316\u89c6\u56fe\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u5176\u7ed3\u679c\u5373\u4e3a\u7269\u5316\u89c6\u56fe\u4e2d\u7684\u6570\u636e"),(0,a.yg)("p",null,"\u4e0d\u652f\u6301\u968f\u673a\u51fd\u6570\uff0c\u4f8b\u5982:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT random() as dd,k3 FROM user\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u7acb\u5373\u5237\u65b0\uff0c\u4e4b\u540e\u6bcf\u5468\u5237\u65b0\u4e00\u6b21\u7684\u7269\u5316\u89c6\u56femv1,\u6570\u636e\u6e90\u4e3ahive catalog"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1 BUILD IMMEDIATE REFRESH COMPLETE ON SCHEDULE EVERY 1 WEEK\n DISTRIBUTED BY RANDOM BUCKETS 2\n PROPERTIES (\n "replication_num" = "1"\n )\n AS SELECT * FROM hive_catalog.db1.user;\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u591a\u8868join\u7684\u7269\u5316\u89c6\u56fe"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW mv1 BUILD IMMEDIATE REFRESH COMPLETE ON SCHEDULE EVERY 1 WEEK\n DISTRIBUTED BY RANDOM BUCKETS 2\n PROPERTIES (\n "replication_num" = "1"\n )\n AS select user.k1,user.k3,com.k4 from user join com on user.k1=com.k1;\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CREATE, ASYNC, MATERIALIZED, VIEW\n")))}g.isMDXComponent=!0}}]);