"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82342],{95788:(e,a,n)=>{n.d(a,{Iu:()=>g,yg:()=>u});var t=n(11504);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},g=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=s(n),y=r,u=m["".concat(p,".").concat(y)]||m[y]||d[y]||o;return n?t.createElement(u,l(l({ref:a},g),{},{components:n})):t.createElement(u,l({ref:a},g))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3088:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(45072),r=(n(11504),n(95788));const o={title:"Paimon",language:"en"},l=void 0,i={unversionedId:"lakehouse/multi-catalog/paimon",id:"version-2.0/lakehouse/multi-catalog/paimon",title:"Paimon",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/multi-catalog/paimon.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/paimon",permalink:"/docs/lakehouse/multi-catalog/paimon",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Paimon",language:"en"},sidebar:"docs",previous:{title:"Hudi",permalink:"/docs/lakehouse/multi-catalog/hudi"},next:{title:"Alibaba Cloud DLF",permalink:"/docs/lakehouse/multi-catalog/dlf"}},p={},s=[{value:"Instructions for use",id:"instructions-for-use",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Creating a Catalog Based on FileSystem",id:"creating-a-catalog-based-on-filesystem",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"MINIO",id:"minio",level:4},{value:"COS",id:"cos",level:4},{value:"OSS",id:"oss",level:4},{value:"Creating a Catalog Based on Hive Metastore",id:"creating-a-catalog-based-on-hive-metastore",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2}],g={toc:s},m="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.c)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"paimon"},"Paimon"),(0,r.yg)("version",{since:"dev"}),(0,r.yg)("h2",{id:"instructions-for-use"},"Instructions for use"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"When data in hdfs,need to put core-site.xml, hdfs-site.xml and hive-site.xml in the conf directory of FE and BE. First read the hadoop configuration file in the conf directory, and then read the related to the environment variable ",(0,r.yg)("inlineCode",{parentName:"li"},"HADOOP_CONF_DIR")," configuration file."),(0,r.yg)("li",{parentName:"ol"},"The currently adapted version of the payment is 0.6.0")),(0,r.yg)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.yg)("p",null,"Paimon Catalog Currently supports two types of Metastore creation catalogs:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"filesystem(default),Store both metadata and data in the file system."),(0,r.yg)("li",{parentName:"ul"},"hive metastore,It also stores metadata in Hive metastore. Users can access these tables directly from Hive.")),(0,r.yg)("h3",{id:"creating-a-catalog-based-on-filesystem"},"Creating a Catalog Based on FileSystem"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For versions 2.0.1 and earlier, please use the following ",(0,r.yg)("inlineCode",{parentName:"p"},"Create Catalog based on Hive Metastore"),".")),(0,r.yg)("h4",{id:"hdfs"},"HDFS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hdfs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\n')),(0,r.yg)("h4",{id:"minio"},"MINIO"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note that."),(0,r.yg)("p",{parentName:"blockquote"},"user need download ",(0,r.yg)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.6.0-incubating/paimon-s3-0.6.0-incubating.jar"},"paimon-s3-0.6.0-incubating.jar")),(0,r.yg)("p",{parentName:"blockquote"},"Place it in directory ${DORIS_HOME}/be/lib/java_extensions/preload-extensions and restart be"),(0,r.yg)("p",{parentName:"blockquote"},"Starting from version 2.0.2, this file can be placed in BE's ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_lib/")," directory (if it does not exist, just create it manually) to prevent the file from being lost due to the replacement of the lib directory when upgrading the cluster.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_s3` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://bucket_name/paimons3",\n    "s3.endpoint" = "http://<ip>:<port>",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n);\n\n')),(0,r.yg)("h4",{id:"cos"},"COS"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note that."),(0,r.yg)("p",{parentName:"blockquote"},"user need download ",(0,r.yg)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.6.0-incubating/paimon-s3-0.6.0-incubating.jar"},"paimon-s3-0.6.0-incubating.jar")),(0,r.yg)("p",{parentName:"blockquote"},"Place it in directory ",(0,r.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/be/lib/java_extensions/preload-extensions")," and restart be"),(0,r.yg)("p",{parentName:"blockquote"},"Starting from version 2.0.2, this file can be placed in BE's ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_lib/")," directory (if it does not exist, just create it manually) to prevent the file from being lost due to the replacement of the lib directory when upgrading the cluster.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_cos` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "cosn://paimon-1308700295/paimoncos",\n    "cos.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "cos.access_key" = "ak",\n    "cos.secret_key" = "sk"\n);\n')),(0,r.yg)("h4",{id:"oss"},"OSS"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note that."),(0,r.yg)("p",{parentName:"blockquote"},"user need download ",(0,r.yg)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-oss/0.6.0-incubating/paimon-oss-0.6.0-incubating.jar"},"paimon-oss-0.6.0-incubating.jar")),(0,r.yg)("p",{parentName:"blockquote"},"Place it in directory ",(0,r.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/be/lib/java_extensions/preload-extensions")," and restart be")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_oss` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "oss://paimon-zd/paimonoss",\n    "oss.endpoint" = "oss-cn-beijing.aliyuncs.com",\n    "oss.access_key" = "ak",\n    "oss.secret_key" = "sk"\n);\n\n')),(0,r.yg)("h3",{id:"creating-a-catalog-based-on-hive-metastore"},"Creating a Catalog Based on Hive Metastore"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hms` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\n')),(0,r.yg)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Paimon Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BooleanType"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TinyIntType"),(0,r.yg)("td",{parentName:"tr",align:null},"TinyInt"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SmallIntType"),(0,r.yg)("td",{parentName:"tr",align:null},"SmallInt"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IntType"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FloatType"),(0,r.yg)("td",{parentName:"tr",align:null},"Float"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BigIntType"),(0,r.yg)("td",{parentName:"tr",align:null},"BigInt"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DoubleType"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VarCharType"),(0,r.yg)("td",{parentName:"tr",align:null},"VarChar"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CharType"),(0,r.yg)("td",{parentName:"tr",align:null},"Char"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DecimalType(precision, scale)"),(0,r.yg)("td",{parentName:"tr",align:null},"Decimal(precision, scale)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TimestampType,LocalZonedTimestampType"),(0,r.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DateType"),(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MapType"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"Support Map nesting")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ArrayType"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Support Array nesting")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VarBinaryType, BinaryType"),(0,r.yg)("td",{parentName:"tr",align:null},"Binary"),(0,r.yg)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);