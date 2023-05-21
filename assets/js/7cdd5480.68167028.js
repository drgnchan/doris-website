"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[91589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Iceberg",language:"en"},l=void 0,i={unversionedId:"lakehouse/multi-catalog/iceberg",id:"lakehouse/multi-catalog/iceberg",title:"Iceberg",description:"\x3c!--",source:"@site/docs/lakehouse/multi-catalog/iceberg.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/iceberg",permalink:"/docs/dev/lakehouse/multi-catalog/iceberg",draft:!1,tags:[],version:"current",frontMatter:{title:"Iceberg",language:"en"},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/dev/lakehouse/multi-catalog/hive"},next:{title:"Hudi",permalink:"/docs/dev/lakehouse/multi-catalog/hudi"}},s={},c=[{value:"Limitations",id:"limitations",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Create Catalog Based on Hive Metastore",id:"create-catalog-based-on-hive-metastore",level:3},{value:"Create Catalog based on Iceberg API",id:"create-catalog-based-on-iceberg-api",level:3},{value:"Google Dataproc Metastore \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1",id:"google-dataproc-metastore-\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1",level:4},{value:"Column type mapping",id:"column-type-mapping",level:2},{value:"Time Travel",id:"time-travel",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iceberg"},"Iceberg"),(0,n.kt)("h2",{id:"limitations"},"Limitations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Support Iceberg V1/V2."),(0,n.kt)("li",{parentName:"ol"},"The V2 format only supports Position Delete, not Equality Delete.")),(0,n.kt)("h2",{id:"create-catalog"},"Create Catalog"),(0,n.kt)("h3",{id:"create-catalog-based-on-hive-metastore"},"Create Catalog Based on Hive Metastore"),(0,n.kt)("p",null,"It is basically the same as Hive Catalog, and only a simple example is given here. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/lakehouse/multi-catalog/hive"},"Hive Catalog")," for other examples."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,n.kt)("h3",{id:"create-catalog-based-on-iceberg-api"},"Create Catalog based on Iceberg API"),(0,n.kt)("p",null,"Use the Iceberg API to access metadata, and support services such as Hive, REST, and Glue as Iceberg's Catalog."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hive Metastore"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Glue Catalog"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG glue PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n')),(0,n.kt)("p",{parentName:"li"},"  For Iceberg properties, see ",(0,n.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/aws/#glue-catalog"},"Iceberg Glue Catalog"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"REST Catalog"),(0,n.kt)("p",{parentName:"li"},"  This method needs to provide REST services in advance, and users need to implement the REST interface for obtaining Iceberg metadata."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181',\n);\n")))),(0,n.kt)("p",null,"If the data is stored on S3, the following parameters can be used in properties:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"s3.access_key" = "ak"\n"s3.secret_key" = "sk"\n"s3.endpoint" = "http://endpoint-uri"\n"s3.credentials.provider" = "provider-class-name" // \u53ef\u9009\uff0c\u9ed8\u8ba4\u51ed\u8bc1\u7c7b\u57fa\u4e8eBasicAWSCredentials\u5b9e\u73b0\u3002\n')),(0,n.kt)("h4",{id:"google-dataproc-metastore-\u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1"},"Google Dataproc Metastore \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG iceberg PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type"="hms",\n    "hive.metastore.uris" = "thrift://172.21.0.1:9083",\n    "gs.endpoint" = "https://storage.googleapis.com",\n    "gs.region" = "us-east-1",\n    "gs.access_key" = "ak",\n    "gs.secret_key" = "sk",\n    "use_path_style" = "true"\n);\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"hive.metastore.uris"),": Dataproc Metastore URI\uff0cSee in Metastore Services \uff1a",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/dataproc/metastore"},"Dataproc Metastore Services"),"."),(0,n.kt)("h2",{id:"column-type-mapping"},"Column type mapping"),(0,n.kt)("p",null,"Consistent with Hive Catalog, please refer to the ",(0,n.kt)("strong",{parentName:"p"},"column type mapping")," section in ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/lakehouse/multi-catalog/hive"},"Hive Catalog"),"."),(0,n.kt)("h2",{id:"time-travel"},"Time Travel"),(0,n.kt)("p",null,"Supports reading the snapshot specified by the Iceberg table."),(0,n.kt)("p",null,"Every write operation to the iceberg table will generate a new snapshot."),(0,n.kt)("p",null,"By default, read requests will only read the latest version of the snapshot."),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," statements to read historical versions of data based on the snapshot ID or the time when the snapshot was generated. Examples are as follows:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'SELECT * FROM iceberg_tbl FOR TIME AS OF "2022-10-07 17:20:37";')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SELECT * FROM iceberg_tbl FOR VERSION AS OF 868895038966572;")),(0,n.kt)("p",null,"In addition, you can use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/table-functions/iceberg_meta"},"iceberg_meta")," table function to query the snapshot information of the specified table."))}d.isMDXComponent=!0}}]);