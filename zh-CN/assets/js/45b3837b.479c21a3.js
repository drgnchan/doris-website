"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75768],{95788:(e,a,r)=>{r.d(a,{Iu:()=>m,yg:()=>d});var n=r(11504);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),p=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},m=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(r),u=t,d=c["".concat(i,".").concat(u)]||c[u]||y[u]||l;return r?n.createElement(d,s(s({ref:a},m),{},{components:r})):n.createElement(d,s({ref:a},m))}));function d(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,s=new Array(l);s[0]=u;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[c]="string"==typeof e?e:t,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60660:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(45072),t=(r(11504),r(95788));const l={title:"CREATE-RESOURCE",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE",title:"CREATE-RESOURCE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-RESOURCE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-ENCRYPT-KEY",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY"},next:{title:"CREATE-WORKLOAD-GROUP",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"}},i={},p=[{value:"CREATE-RESOURCE",id:"create-resource",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function y(e){let{components:a,...r}=e;return(0,t.yg)(c,(0,n.c)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"create-resource"},"CREATE-RESOURCE"),(0,t.yg)("h3",{id:"name"},"Name"),(0,t.yg)("p",null,"CREATE RESOURCE"),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u8d44\u6e90\u3002\u4ec5 root \u6216 admin \u7528\u6237\u53ef\u4ee5\u521b\u5efa\u8d44\u6e90\u3002\u76ee\u524d\u652f\u6301 Spark, ODBC, S3, JDBC, HDFS, HMS, ES \u5916\u90e8\u8d44\u6e90\u3002\n\u5c06\u6765\u5176\u4ed6\u5916\u90e8\u8d44\u6e90\u53ef\u80fd\u4f1a\u52a0\u5165\u5230 Doris \u4e2d\u4f7f\u7528\uff0c\u5982 Spark/GPU \u7528\u4e8e\u67e5\u8be2\uff0cHDFS/S3 \u7528\u4e8e\u5916\u90e8\u5b58\u50a8\uff0cMapReduce \u7528\u4e8e ETL \u7b49\u3002"),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE [EXTERNAL] RESOURCE "resource_name"\nPROPERTIES ("key"="value", ...);\n')),(0,t.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},'PROPERTIES\u4e2d\u9700\u8981\u6307\u5b9a\u8d44\u6e90\u7684\u7c7b\u578b "type" = "',"[spark|odbc_catalog|s3|jdbc|hdfs|hms|es]",'"\u3002'),(0,t.yg)("li",{parentName:"ul"},"\u6839\u636e\u8d44\u6e90\u7c7b\u578b\u7684\u4e0d\u540c PROPERTIES \u6709\u6240\u4e0d\u540c\uff0c\u5177\u4f53\u89c1\u793a\u4f8b\u3002")),(0,t.yg)("h3",{id:"example"},"Example"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u521b\u5efayarn cluster \u6a21\u5f0f\uff0c\u540d\u4e3a spark0 \u7684 Spark \u8d44\u6e90\u3002"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES\n(\n  "type" = "spark",\n  "spark.master" = "yarn",\n  "spark.submit.deployMode" = "cluster",\n  "spark.jars" = "xxx.jar,yyy.jar",\n  "spark.files" = "/tmp/aaa,/tmp/bbb",\n  "spark.executor.memory" = "1g",\n  "spark.yarn.queue" = "queue0",\n  "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n  "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n  "working_dir" = "hdfs://127.0.0.1:10000/tmp/doris",\n  "broker" = "broker0",\n  "broker.username" = "user0",\n  "broker.password" = "password0"\n);\n')),(0,t.yg)("p",{parentName:"li"},"Spark \u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"spark.master: \u5fc5\u586b\uff0c\u76ee\u524d\u652f\u6301yarn\uff0cspark://host:port\u3002"),(0,t.yg)("li",{parentName:"ul"},"spark.submit.deployMode: Spark \u7a0b\u5e8f\u7684\u90e8\u7f72\u6a21\u5f0f\uff0c\u5fc5\u586b\uff0c\u652f\u6301 cluster\uff0cclient \u4e24\u79cd\u3002"),(0,t.yg)("li",{parentName:"ul"},"spark.hadoop.yarn.resourcemanager.address: master\u4e3ayarn\u65f6\u5fc5\u586b\u3002"),(0,t.yg)("li",{parentName:"ul"},"spark.hadoop.fs.defaultFS: master\u4e3ayarn\u65f6\u5fc5\u586b\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5176\u4ed6\u53c2\u6570\u4e3a\u53ef\u9009\uff0c\u53c2\u8003",(0,t.yg)("a",{parentName:"li",href:"http://spark.apache.org/docs/latest/configuration.html"},"\u8fd9\u91cc"))))),(0,t.yg)("p",null,"Spark \u7528\u4e8e ETL \u65f6\u9700\u8981\u6307\u5b9a working_dir \u548c broker\u3002\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"working_dir: ETL \u4f7f\u7528\u7684\u76ee\u5f55\u3002spark\u4f5c\u4e3aETL\u8d44\u6e90\u4f7f\u7528\u65f6\u5fc5\u586b\u3002\u4f8b\u5982\uff1ahdfs://host:port/tmp/doris\u3002"),(0,t.yg)("li",{parentName:"ul"},"broker: broker \u540d\u5b57\u3002spark\u4f5c\u4e3aETL\u8d44\u6e90\u4f7f\u7528\u65f6\u5fc5\u586b\u3002\u9700\u8981\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"li"},"ALTER SYSTEM ADD BROKER")," \u547d\u4ee4\u63d0\u524d\u5b8c\u6210\u914d\u7f6e\u3002"),(0,t.yg)("li",{parentName:"ul"},"broker.property_key: broker\u8bfb\u53d6ETL\u751f\u6210\u7684\u4e2d\u95f4\u6587\u4ef6\u65f6\u9700\u8981\u6307\u5b9a\u7684\u8ba4\u8bc1\u4fe1\u606f\u7b49\u3002")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u521b\u5efa ODBC resource"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n    "type" = "odbc_catalog",\n    "host" = "192.168.0.1",\n    "port" = "8086",\n    "user" = "test",\n    "password" = "test",\n    "database" = "test",\n    "odbc_type" = "oracle",\n    "driver" = "Oracle 19 ODBC driver"\n);\n')),(0,t.yg)("p",{parentName:"li"},"ODBC \u7684\u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"hosts\uff1a\u5916\u8868\u6570\u636e\u5e93\u7684IP\u5730\u5740"),(0,t.yg)("li",{parentName:"ul"},"driver\uff1aODBC\u5916\u8868\u7684Driver\u540d\uff0c\u8be5\u540d\u5b57\u9700\u8981\u548cbe/conf/odbcinst.ini\u4e2d\u7684Driver\u540d\u4e00\u81f4\u3002"),(0,t.yg)("li",{parentName:"ul"},"odbc_type\uff1a\u5916\u8868\u6570\u636e\u5e93\u7684\u7c7b\u578b\uff0c\u5f53\u524d\u652f\u6301oracle, mysql, postgresql"),(0,t.yg)("li",{parentName:"ul"},"user\uff1a\u5916\u8868\u6570\u636e\u5e93\u7684\u7528\u6237\u540d"),(0,t.yg)("li",{parentName:"ul"},"password\uff1a\u5bf9\u5e94\u7528\u6237\u7684\u5bc6\u7801\u4fe1\u606f"),(0,t.yg)("li",{parentName:"ul"},"charset: \u6570\u636e\u5e93\u94fe\u63a5\u7684\u7f16\u7801\u4fe1\u606f"),(0,t.yg)("li",{parentName:"ul"},"\u53e6\u5916\u8fd8\u652f\u6301\u6bcf\u4e2aODBC Driver \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u53c2\u6570\uff0c\u53c2\u89c1\u5bf9\u5e94ODBC Driver \u7684\u8bf4\u660e"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u521b\u5efa S3 resource"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n   "type" = "s3",\n   "s3.endpoint" = "bj.s3.com",\n   "s3.region" = "bj",\n   "s3.access_key" = "bbb",\n   "s3.secret_key" = "aaaa",\n   -- the followings are optional\n   "s3.connection.maximum" = "50",\n   "s3.connection.request.timeout" = "3000",\n   "s3.connection.timeout" = "1000"\n);\n')),(0,t.yg)("p",{parentName:"li"},"\u5982\u679c s3 reource \u5728",(0,t.yg)("a",{parentName:"p",href:"../../../../../docs/advanced/cold_hot_separation.md"},"\u51b7\u70ed\u5206\u5c42"),"\u4e2d\u4f7f\u7528\uff0c\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684\u5b57\u6bb5\u3002"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n   "type" = "s3",\n   "s3.endpoint" = "bj.s3.com",\n   "s3.region" = "bj",\n   "s3.access_key" = "bbb",\n   "s3.secret_key" = "aaaa",\n   -- required by cooldown\n   "s3.root.path" = "/path/to/root",\n   "s3.bucket" = "test-bucket"\n);\n')),(0,t.yg)("p",{parentName:"li"},"S3 \u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u5fc5\u9700\u53c2\u6570",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.endpoint"),"\uff1as3 endpoint"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.region"),"\uff1as3 region"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.root.path"),"\uff1as3 \u6839\u76ee\u5f55"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.access_key"),"\uff1as3 access key"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.secret_key"),"\uff1as3 secret key"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.bucket"),"\uff1as3 \u7684\u6876\u540d"))),(0,t.yg)("li",{parentName:"ul"},"\u53ef\u9009\u53c2\u6570",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.connection.maximum"),"\uff1as3 \u6700\u5927\u8fde\u63a5\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a 50"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.connection.request.timeout"),"\uff1as3 \u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a 3000"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.connection.timeout"),"\uff1as3 \u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a 1000"))))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u521b\u5efa JDBC resource"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE mysql_resource PROPERTIES (\n   "type"="jdbc",\n   "user"="root",\n   "password"="123456",\n   "jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n   "driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n"driver_class" = "com.mysql.cj.jdbc.Driver"\n);\n')),(0,t.yg)("p",{parentName:"li"},"JDBC \u7684\u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"user\uff1a\u8fde\u63a5\u6570\u636e\u5e93\u4f7f\u7528\u7684\u7528\u6237\u540d"),(0,t.yg)("li",{parentName:"ul"},"password\uff1a\u8fde\u63a5\u6570\u636e\u5e93\u4f7f\u7528\u7684\u5bc6\u7801"),(0,t.yg)("li",{parentName:"ul"},"jdbc_url: \u8fde\u63a5\u5230\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6807\u8bc6\u7b26"),(0,t.yg)("li",{parentName:"ul"},"driver_url: jdbc\u9a71\u52a8\u5305\u7684url"),(0,t.yg)("li",{parentName:"ul"},"driver_class: jdbc\u9a71\u52a8\u7c7b"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u521b\u5efa HDFS resource"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE hdfs_resource PROPERTIES (\n   "type"="hdfs",\n   "username"="user",\n   "password"="passwd",\n   "dfs.nameservices" = "my_ha",\n   "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n   "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n   "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n   "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,t.yg)("p",{parentName:"li"},"HDFS \u76f8\u5173\u53c2\u6570\u5982\u4e0b:"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"fs.defaultFS: namenode \u5730\u5740\u548c\u7aef\u53e3"),(0,t.yg)("li",{parentName:"ul"},"username: hdfs \u7528\u6237\u540d"),(0,t.yg)("li",{parentName:"ul"},"dfs.nameservices: name service\u540d\u79f0\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4"),(0,t.yg)("li",{parentName:"ul"},"dfs.ha.namenodes.","[nameservice ID]",": namenode\u7684id\u5217\u8868\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4"),(0,t.yg)("li",{parentName:"ul"},"dfs.namenode.rpc-address.","[nameservice ID]",".","[name node ID]",": Name node\u7684rpc\u5730\u5740\uff0c\u6570\u91cf\u4e0enamenode\u6570\u91cf\u76f8\u540c\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u521b\u5efa HMS resource"),(0,t.yg)("p",{parentName:"li"},"HMS resource \u7528\u4e8e ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/lakehouse/multi-catalog/"},"hms catalog")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE RESOURCE hms_resource PROPERTIES (\n   'type'='hms',\n   'hive.metastore.uris' = 'thrift://127.0.0.1:7004',\n   'dfs.nameservices'='HANN',\n   'dfs.ha.namenodes.HANN'='nn1,nn2',\n   'dfs.namenode.rpc-address.HANN.nn1'='nn1_host:rpc_port',\n   'dfs.namenode.rpc-address.HANN.nn2'='nn2_host:rpc_port',\n   'dfs.client.failover.proxy.provider.HANN'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,t.yg)("p",{parentName:"li"},"HMS \u7684\u76f8\u5173\u53c2\u6570\u5982\u4e0b:"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"hive.metastore.uris: hive metastore server\u5730\u5740\n\u53ef\u9009\u53c2\u6570:"),(0,t.yg)("li",{parentName:"ul"},"dfs.*: \u5982\u679c hive \u6570\u636e\u5b58\u653e\u5728hdfs\uff0c\u9700\u8981\u6dfb\u52a0\u7c7b\u4f3c HDFS resource \u7684\u53c2\u6570\uff0c\u4e5f\u53ef\u4ee5\u5c06 hive-site.xml \u62f7\u8d1d\u5230 fe/conf \u76ee\u5f55\u4e0b"),(0,t.yg)("li",{parentName:"ul"},"s3.*: \u5982\u679c hive \u6570\u636e\u5b58\u653e\u5728 s3\uff0c\u9700\u8981\u6dfb\u52a0\u7c7b\u4f3c S3 resource \u7684\u53c2\u6570\u3002\u5982\u679c\u8fde\u63a5 ",(0,t.yg)("a",{parentName:"li",href:"https://www.aliyun.com/product/bigdata/dlf"},"\u963f\u91cc\u4e91 Data Lake Formation"),"\uff0c\u53ef\u4ee5\u5c06 hive-site.xml \u62f7\u8d1d\u5230 fe/conf \u76ee\u5f55\u4e0b"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u521b\u5efa ES resource"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE RESOURCE es_resource PROPERTIES (\n   "type"="es",\n   "hosts"="http://127.0.0.1:29200",\n   "nodes_discovery"="false",\n   "enable_keyword_sniff"="true"\n);\n')),(0,t.yg)("p",{parentName:"li"},"ES \u7684\u76f8\u5173\u53c2\u6570\u5982\u4e0b:"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"hosts: ES \u5730\u5740\uff0c\u53ef\u4ee5\u662f\u4e00\u4e2a\u6216\u591a\u4e2a\uff0c\u4e5f\u53ef\u4ee5\u662f ES \u7684\u8d1f\u8f7d\u5747\u8861\u5730\u5740"),(0,t.yg)("li",{parentName:"ul"},"user: ES \u7528\u6237\u540d"),(0,t.yg)("li",{parentName:"ul"},"password: \u5bf9\u5e94\u7528\u6237\u7684\u5bc6\u7801\u4fe1\u606f"),(0,t.yg)("li",{parentName:"ul"},"enable_docvalue_scan: \u662f\u5426\u5f00\u542f\u901a\u8fc7 ES/Lucene \u5217\u5f0f\u5b58\u50a8\u83b7\u53d6\u67e5\u8be2\u5b57\u6bb5\u7684\u503c\uff0c\u9ed8\u8ba4\u4e3a true"),(0,t.yg)("li",{parentName:"ul"},"enable_keyword_sniff: \u662f\u5426\u5bf9 ES \u4e2d\u5b57\u7b26\u4e32\u5206\u8bcd\u7c7b\u578b text.fields \u8fdb\u884c\u63a2\u6d4b\uff0c\u901a\u8fc7 keyword \u8fdb\u884c\u67e5\u8be2(\u9ed8\u8ba4\u4e3a true\uff0c\u8bbe\u7f6e\u4e3a false \u4f1a\u6309\u7167\u5206\u8bcd\u540e\u7684\u5185\u5bb9\u5339\u914d)"),(0,t.yg)("li",{parentName:"ul"},"nodes_discovery: \u662f\u5426\u5f00\u542f ES \u8282\u70b9\u53d1\u73b0\uff0c\u9ed8\u8ba4\u4e3a true\uff0c\u5728\u7f51\u7edc\u9694\u79bb\u73af\u5883\u4e0b\u8bbe\u7f6e\u4e3a false\uff0c\u53ea\u8fde\u63a5\u6307\u5b9a\u8282\u70b9"),(0,t.yg)("li",{parentName:"ul"},"http_ssl_enabled: ES \u662f\u5426\u5f00\u542f https \u8bbf\u95ee\u6a21\u5f0f\uff0c\u76ee\u524d\u5728 fe/be \u5b9e\u73b0\u65b9\u5f0f\u4e3a\u4fe1\u4efb\u6240\u6709")))),(0,t.yg)("h3",{id:"keywords"},"Keywords"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"CREATE, RESOURCE\n")),(0,t.yg)("h3",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);