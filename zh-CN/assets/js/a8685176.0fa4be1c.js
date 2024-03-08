"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22895],{15680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>g});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=a.createContext({}),s=function(e){var r=a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},d=function(e){var r=s(e.components);return a.createElement(i.Provider,{value:r},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=s(n),u=t,g=y["".concat(i,".").concat(u)]||y[u]||c[u]||l;return n?a.createElement(g,p(p({ref:r},d),{},{components:n})):a.createElement(g,p({ref:r},d))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[y]="string"==typeof e?e:t,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},959060:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),t=(n(296540),n(15680));const l={title:"\u8d44\u6e90\u7ba1\u7406",language:"zh-CN"},p=void 0,o={unversionedId:"advanced/resource",id:"version-2.0/advanced/resource",title:"\u8d44\u6e90\u7ba1\u7406",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/advanced/resource.md",sourceDirName:"advanced",slug:"/advanced/resource",permalink:"/zh-CN/docs/2.0/advanced/resource",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u8d44\u6e90\u7ba1\u7406",language:"zh-CN"},sidebar:"docs",previous:{title:"Compaction",permalink:"/zh-CN/docs/2.0/advanced/best-practice/compaction"},next:{title:"BITMAP \u7cbe\u51c6\u53bb\u91cd",permalink:"/zh-CN/docs/2.0/advanced/orthogonal-bitmap-manual"}},i={},s=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5177\u4f53\u64cd\u4f5c",id:"\u5177\u4f53\u64cd\u4f5c",level:2},{value:"\u652f\u6301\u7684\u8d44\u6e90",id:"\u652f\u6301\u7684\u8d44\u6e90",level:2},{value:"Spark",id:"spark",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"Spark \u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a",id:"spark-\u76f8\u5173\u53c2\u6570\u5982\u4e0b",level:5},{value:"\u5982\u679cSpark\u7528\u4e8eETL\uff0c\u8fd8\u9700\u8981\u6307\u5b9a\u4ee5\u4e0b\u53c2\u6570\uff1a",id:"\u5982\u679cspark\u7528\u4e8eetl\u8fd8\u9700\u8981\u6307\u5b9a\u4ee5\u4e0b\u53c2\u6570",level:5},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"ODBC",id:"odbc",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"ODBC \u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a",id:"odbc-\u76f8\u5173\u53c2\u6570\u5982\u4e0b",level:5},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4}],d={toc:s},y="wrapper";function c(e){let{components:r,...n}=e;return(0,t.yg)(y,(0,a.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u8d44\u6e90\u7ba1\u7406"},"\u8d44\u6e90\u7ba1\u7406"),(0,t.yg)("p",null,"\u4e3a\u4e86\u8282\u7701Doris\u96c6\u7fa4\u5185\u7684\u8ba1\u7b97\u3001\u5b58\u50a8\u8d44\u6e90\uff0cDoris\u9700\u8981\u5f15\u5165\u4e00\u4e9b\u5176\u4ed6\u5916\u90e8\u8d44\u6e90\u6765\u5b8c\u6210\u76f8\u5173\u7684\u5de5\u4f5c\uff0c\u5982Spark/GPU\u7528\u4e8e\u67e5\u8be2\uff0cHDFS/S3\u7528\u4e8e\u5916\u90e8\u5b58\u50a8\uff0cSpark/MapReduce\u7528\u4e8eETL, \u901a\u8fc7ODBC\u8fde\u63a5\u5916\u90e8\u5b58\u50a8\u7b49\uff0c\u56e0\u6b64\u6211\u4eec\u5f15\u5165\u8d44\u6e90\u7ba1\u7406\u673a\u5236\u6765\u7ba1\u7406Doris\u4f7f\u7528\u7684\u8fd9\u4e9b\u5916\u90e8\u8d44\u6e90\u3002"),(0,t.yg)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,t.yg)("p",null,"\u4e00\u4e2a\u8d44\u6e90\u5305\u542b\u540d\u5b57\u3001\u7c7b\u578b\u7b49\u57fa\u672c\u4fe1\u606f\uff0c\u540d\u5b57\u4e3a\u5168\u5c40\u552f\u4e00\uff0c\u4e0d\u540c\u7c7b\u578b\u7684\u8d44\u6e90\u5305\u542b\u4e0d\u540c\u7684\u5c5e\u6027\uff0c\u5177\u4f53\u53c2\u8003\u5404\u8d44\u6e90\u7684\u4ecb\u7ecd\u3002"),(0,t.yg)("p",null,"\u8d44\u6e90\u7684\u521b\u5efa\u548c\u5220\u9664\u53ea\u80fd\u7531\u62e5\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"admin")," \u6743\u9650\u7684\u7528\u6237\u8fdb\u884c\u64cd\u4f5c\u3002\u4e00\u4e2a\u8d44\u6e90\u96b6\u5c5e\u4e8e\u6574\u4e2aDoris\u96c6\u7fa4\u3002\u62e5\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"admin")," \u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u5c06\u4f7f\u7528\u6743\u9650",(0,t.yg)("inlineCode",{parentName:"p"},"usage_priv")," \u8d4b\u7ed9\u666e\u901a\u7528\u6237\u3002\u53ef\u53c2\u8003",(0,t.yg)("inlineCode",{parentName:"p"},"HELP GRANT"),"\u6216\u8005\u6743\u9650\u6587\u6863\u3002"),(0,t.yg)("h2",{id:"\u5177\u4f53\u64cd\u4f5c"},"\u5177\u4f53\u64cd\u4f5c"),(0,t.yg)("p",null,"\u8d44\u6e90\u7ba1\u7406\u4e3b\u8981\u6709\u4e09\u4e2a\u547d\u4ee4\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"CREATE RESOURCE"),"\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"DROP RESOURCE"),"\u548c",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW RESOURCES"),"\uff0c\u5206\u522b\u4e3a\u521b\u5efa\u3001\u5220\u9664\u548c\u67e5\u770b\u8d44\u6e90\u3002\u8fd9\u4e09\u4e2a\u547d\u4ee4\u7684\u5177\u4f53\u8bed\u6cd5\u53ef\u4ee5\u901a\u8fc7MySQL\u5ba2\u6237\u7aef\u8fde\u63a5\u5230 Doris \u540e\uff0c\u6267\u884c ",(0,t.yg)("inlineCode",{parentName:"p"},"HELP cmd")," \u7684\u65b9\u5f0f\u67e5\u770b\u5e2e\u52a9\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"CREATE RESOURCE"),(0,t.yg)("p",{parentName:"li"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u8d44\u6e90\u3002\u5177\u4f53\u64cd\u4f5c\u53ef\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"},"CREATE RESOURCE"),"\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"DROP RESOURCE"),(0,t.yg)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u53ef\u4ee5\u5220\u9664\u4e00\u4e2a\u5df2\u5b58\u5728\u7684\u8d44\u6e90\u3002\u5177\u4f53\u64cd\u4f5c\u89c1 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE"},"DROP RESOURCE")," \u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"SHOW RESOURCES"),(0,t.yg)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u7528\u6237\u6709\u4f7f\u7528\u6743\u9650\u7684\u8d44\u6e90\u3002\u5177\u4f53\u64cd\u4f5c\u89c1  ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES"},"SHOW RESOURCES"),"\u3002"))),(0,t.yg)("h2",{id:"\u652f\u6301\u7684\u8d44\u6e90"},"\u652f\u6301\u7684\u8d44\u6e90"),(0,t.yg)("p",null,"\u76ee\u524dDoris\u80fd\u591f\u652f\u6301"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Spark\u8d44\u6e90 : \u5b8c\u6210ETL\u5de5\u4f5c\u3002"),(0,t.yg)("li",{parentName:"ul"},"ODBC\u8d44\u6e90\uff1a\u67e5\u8be2\u548c\u5bfc\u5165\u5916\u90e8\u8868\u7684\u6570\u636e")),(0,t.yg)("p",null,"\u4e0b\u9762\u5c06\u5206\u522b\u5c55\u793a\u4e24\u79cd\u8d44\u6e90\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,t.yg)("h3",{id:"spark"},"Spark"),(0,t.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,t.yg)("h5",{id:"spark-\u76f8\u5173\u53c2\u6570\u5982\u4e0b"},"Spark \u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"spark.master"),": \u5fc5\u586b\uff0c\u76ee\u524d\u652f\u6301yarn\uff0cspark://host:port\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"spark.submit.deployMode"),": Spark \u7a0b\u5e8f\u7684\u90e8\u7f72\u6a21\u5f0f\uff0c\u5fc5\u586b\uff0c\u652f\u6301 cluster\uff0cclient \u4e24\u79cd\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"spark.hadoop.yarn.resourcemanager.address"),": master\u4e3ayarn\u65f6\u5fc5\u586b\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"spark.hadoop.fs.defaultFS"),": master\u4e3ayarn\u65f6\u5fc5\u586b\u3002"),(0,t.yg)("p",null,"\u5176\u4ed6\u53c2\u6570\u4e3a\u53ef\u9009\uff0c\u53c2\u8003",(0,t.yg)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/configuration.html"},"http://spark.apache.org/docs/latest/configuration.html")),(0,t.yg)("h5",{id:"\u5982\u679cspark\u7528\u4e8eetl\u8fd8\u9700\u8981\u6307\u5b9a\u4ee5\u4e0b\u53c2\u6570"},"\u5982\u679cSpark\u7528\u4e8eETL\uff0c\u8fd8\u9700\u8981\u6307\u5b9a\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"working_dir"),": ETL \u4f7f\u7528\u7684\u76ee\u5f55\u3002spark\u4f5c\u4e3aETL\u8d44\u6e90\u4f7f\u7528\u65f6\u5fc5\u586b\u3002\u4f8b\u5982\uff1ahdfs://host:port/tmp/doris\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"broker"),": broker \u540d\u5b57\u3002spark\u4f5c\u4e3aETL\u8d44\u6e90\u4f7f\u7528\u65f6\u5fc5\u586b\u3002\u9700\u8981\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD BROKER")," \u547d\u4ee4\u63d0\u524d\u5b8c\u6210\u914d\u7f6e\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"broker.property_key"),": broker\u8bfb\u53d6ETL\u751f\u6210\u7684\u4e2d\u95f4\u6587\u4ef6\u65f6\u9700\u8981\u6307\u5b9a\u7684\u8ba4\u8bc1\u4fe1\u606f\u7b49\u3002")),(0,t.yg)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,t.yg)("p",null,"\u521b\u5efa yarn cluster \u6a21\u5f0f\uff0c\u540d\u4e3a spark0 \u7684 Spark \u8d44\u6e90\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES\n(\n  "type" = "spark",\n  "spark.master" = "yarn",\n  "spark.submit.deployMode" = "cluster",\n  "spark.jars" = "xxx.jar,yyy.jar",\n  "spark.files" = "/tmp/aaa,/tmp/bbb",\n  "spark.executor.memory" = "1g",\n  "spark.yarn.queue" = "queue0",\n  "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n  "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n  "working_dir" = "hdfs://127.0.0.1:10000/tmp/doris",\n  "broker" = "broker0",\n  "broker.username" = "user0",\n  "broker.password" = "password0"\n);\n')),(0,t.yg)("h3",{id:"odbc"},"ODBC"),(0,t.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,t.yg)("h5",{id:"odbc-\u76f8\u5173\u53c2\u6570\u5982\u4e0b"},"ODBC \u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"type"),": \u5fc5\u586b\uff0c\u4e14\u5fc5\u987b\u4e3a",(0,t.yg)("inlineCode",{parentName:"p"},"odbc_catalog"),"\u3002\u4f5c\u4e3aresource\u7684\u7c7b\u578b\u6807\u8bc6\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"user"),": \u5916\u90e8\u8868\u7684\u8d26\u53f7\uff0c\u5fc5\u586b\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"password"),": \u5916\u90e8\u8868\u7684\u5bc6\u7801\uff0c\u5fc5\u586b\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"host"),": \u5916\u90e8\u8868\u7684\u8fde\u63a5ip\u5730\u5740\uff0c\u5fc5\u586b\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"port"),": \u5916\u90e8\u8868\u7684\u8fde\u63a5\u7aef\u53e3\uff0c\u5fc5\u586b\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"odbc_type"),": \u6807\u793a\u5916\u90e8\u8868\u7684\u7c7b\u578b\uff0c\u5f53\u524ddoris\u652f\u6301",(0,t.yg)("inlineCode",{parentName:"p"},"mysql"),"\u4e0e",(0,t.yg)("inlineCode",{parentName:"p"},"oracle"),"\uff0c\u672a\u6765\u53ef\u80fd\u652f\u6301\u66f4\u591a\u7684\u6570\u636e\u5e93\u3002\u5f15\u7528\u8be5resource\u7684ODBC\u5916\u8868\u5fc5\u586b\uff0c\u65e7\u7684mysql\u5916\u8868\u9009\u586b\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"driver"),": \u6807\u793a\u5916\u90e8\u8868\u4f7f\u7528\u7684driver\u52a8\u6001\u5e93\uff0c\u5f15\u7528\u8be5resource\u7684ODBC\u5916\u8868\u5fc5\u586b\uff0c\u65e7\u7684mysql\u5916\u8868\u9009\u586b\u3002"),(0,t.yg)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,t.yg)("p",null,"\u521b\u5efaoracle\u7684odbc resource\uff0c\u540d\u4e3a odbc_oracle \u7684 odbc_catalog\u7684 \u8d44\u6e90\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n"type" = "odbc_catalog",\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"odbc_type" = "oracle",\n"driver" = "Oracle 19 ODBC driver"\n);\n')))}c.isMDXComponent=!0}}]);