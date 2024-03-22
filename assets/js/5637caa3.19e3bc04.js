"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88684],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>y});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),u=r,y=g["".concat(i,".").concat(u)]||g[u]||d[u]||o;return n?t.createElement(y,s(s({ref:a},p),{},{components:n})):t.createElement(y,s({ref:a},p))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},550906:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(58168),r=(n(296540),n(15680));const o={title:"Iceberg",language:"en"},s=void 0,l={unversionedId:"lakehouse/multi-catalog/iceberg",id:"version-2.1/lakehouse/multi-catalog/iceberg",title:"Iceberg",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/lakehouse/multi-catalog/iceberg.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/iceberg",permalink:"/docs/lakehouse/multi-catalog/iceberg",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Iceberg",language:"en"},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/lakehouse/multi-catalog/hive"},next:{title:"Hudi",permalink:"/docs/lakehouse/multi-catalog/hudi"}},i={},c=[{value:"Limitations",id:"limitations",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Create Catalog Based on Hive Metastore",id:"create-catalog-based-on-hive-metastore",level:3},{value:"Create Catalog based on Iceberg API",id:"create-catalog-based-on-iceberg-api",level:3},{value:"Hadoop Catalog",id:"hadoop-catalog",level:4},{value:"Hive Metastore",id:"hive-metastore",level:4},{value:"AWS Glue",id:"aws-glue",level:4},{value:"Alibaba Cloud DLF",id:"alibaba-cloud-dlf",level:4},{value:"REST Catalog",id:"rest-catalog",level:4},{value:"Google Dataproc Metastore",id:"google-dataproc-metastore",level:4},{value:"Iceberg On Object Storage",id:"iceberg-on-object-storage",level:3},{value:"Column type mapping",id:"column-type-mapping",level:2},{value:"Time Travel",id:"time-travel",level:2}],p={toc:c},g="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"iceberg"},"Iceberg"),(0,r.yg)("h2",{id:"limitations"},"Limitations"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Support Iceberg V1/V2."),(0,r.yg)("li",{parentName:"ol"},"The V2 format only supports Position Delete, not Equality Delete.")),(0,r.yg)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.yg)("h3",{id:"create-catalog-based-on-hive-metastore"},"Create Catalog Based on Hive Metastore"),(0,r.yg)("p",null,"It is basically the same as Hive Catalog, and only a simple example is given here. See ",(0,r.yg)("a",{parentName:"p",href:"/docs/lakehouse/multi-catalog/hive"},"Hive Catalog")," for other examples."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h3",{id:"create-catalog-based-on-iceberg-api"},"Create Catalog based on Iceberg API"),(0,r.yg)("p",null,"Use the Iceberg API to access metadata, and support services such as Hadoop File System, Hive, REST, DLF and Glue as Iceberg's Catalog."),(0,r.yg)("h4",{id:"hadoop-catalog"},"Hadoop Catalog"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: The path of ",(0,r.yg)("inlineCode",{parentName:"p"},"warehouse")," should point to the parent path of ",(0,r.yg)("inlineCode",{parentName:"p"},"Database")," level."),(0,r.yg)("p",{parentName:"blockquote"},"Eg: If you path is like ",(0,r.yg)("inlineCode",{parentName:"p"},"s3://bucket/path/to/db1/table1"),", the ",(0,r.yg)("inlineCode",{parentName:"p"},"warehouse")," should be ",(0,r.yg)("inlineCode",{parentName:"p"},"s3://bucket/path/to/"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_hadoop PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-host:8020/dir/key'\n);\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_hadoop_ha PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-nameservice/dir/key',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_s3 PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 's3://bucket/dir/key',\n    's3.endpoint' = 's3.us-east-1.amazonaws.com',\n    's3.access_key' = 'ak',\n    's3.secret_key' = 'sk'\n);\n")),(0,r.yg)("h4",{id:"hive-metastore"},"Hive Metastore"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h4",{id:"aws-glue"},"AWS Glue"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"When connecting Glue, if it's not on the EC2 environment, need copy the ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.aws")," from the EC2 environment to the current environment. And can also download and configure the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"AWS Cli tools"),", which also creates the ",(0,r.yg)("inlineCode",{parentName:"p"},".aws")," directory under the current user directory.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG glue PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n')),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"For Iceberg properties, see ",(0,r.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/aws/#glue-catalog"},"Iceberg Glue Catalog"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If you do not fill the credentials(",(0,r.yg)("inlineCode",{parentName:"p"},"glue.access_key")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"glue.secret_key"),") in glue catalog, the default DefaultAWSCredentialsProviderChain will be used, and it will read credentials and the system environment variables or instance profile properties on AWS EC2."))),(0,r.yg)("h4",{id:"alibaba-cloud-dlf"},"Alibaba Cloud DLF"),(0,r.yg)("p",null,"see ",(0,r.yg)("a",{parentName:"p",href:"/docs/lakehouse/multi-catalog/dlf"},"Alibaba Cloud DLF Catalog")),(0,r.yg)("h4",{id:"rest-catalog"},"REST Catalog"),(0,r.yg)("p",null,"This method needs to provide REST services in advance, and users need to implement the REST interface for obtaining Iceberg metadata."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181'\n);\n")),(0,r.yg)("p",null,"If the data is on HDFS and High Availability (HA) is set up, need to add HA configuration to the Catalog."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.1:8020',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.2:8020',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h4",{id:"google-dataproc-metastore"},"Google Dataproc Metastore"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG iceberg PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type"="hms",\n    "hive.metastore.uris" = "thrift://172.21.0.1:9083",\n    "gs.endpoint" = "https://storage.googleapis.com",\n    "gs.region" = "us-east-1",\n    "gs.access_key" = "ak",\n    "gs.secret_key" = "sk",\n    "use_path_style" = "true"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hive.metastore.uris"),": Dataproc Metastore URI\uff0cSee in Metastore Services \uff1a",(0,r.yg)("a",{parentName:"p",href:"https://console.cloud.google.com/dataproc/metastore"},"Dataproc Metastore Services"),"."),(0,r.yg)("h3",{id:"iceberg-on-object-storage"},"Iceberg On Object Storage"),(0,r.yg)("p",null,"If the data is stored on S3, the following parameters can be used in properties:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"s3.access_key" = "ak"\n"s3.secret_key" = "sk"\n"s3.endpoint" = "s3.us-east-1.amazonaws.com"\n"s3.region" = "us-east-1"\n')),(0,r.yg)("p",null,"The data is stored on Alibaba Cloud OSS:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"oss.access_key" = "ak"\n"oss.secret_key" = "sk"\n"oss.endpoint" = "oss-cn-beijing-internal.aliyuncs.com"\n"oss.region" = "oss-cn-beijing"\n')),(0,r.yg)("p",null,"The data is stored on Tencent Cloud COS:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"cos.access_key" = "ak"\n"cos.secret_key" = "sk"\n"cos.endpoint" = "cos.ap-beijing.myqcloud.com"\n"cos.region" = "ap-beijing"\n')),(0,r.yg)("p",null,"The data is stored on Huawei Cloud OBS:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"obs.access_key" = "ak"\n"obs.secret_key" = "sk"\n"obs.endpoint" = "obs.cn-north-4.myhuaweicloud.com"\n"obs.region" = "cn-north-4"\n')),(0,r.yg)("h2",{id:"column-type-mapping"},"Column type mapping"),(0,r.yg)("p",null,"Consistent with Hive Catalog, please refer to the ",(0,r.yg)("strong",{parentName:"p"},"column type mapping")," section in ",(0,r.yg)("a",{parentName:"p",href:"/docs/lakehouse/multi-catalog/hive"},"Hive Catalog"),"."),(0,r.yg)("h2",{id:"time-travel"},"Time Travel"),(0,r.yg)("p",null,"Supports reading the snapshot specified by the Iceberg table."),(0,r.yg)("p",null,"Every write operation to the iceberg table will generate a new snapshot."),(0,r.yg)("p",null,"By default, read requests will only read the latest version of the snapshot."),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," statements to read historical versions of data based on the snapshot ID or the time when the snapshot was generated. Examples are as follows:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'SELECT * FROM iceberg_tbl FOR TIME AS OF "2022-10-07 17:20:37";')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"SELECT * FROM iceberg_tbl FOR VERSION AS OF 868895038966572;")),(0,r.yg)("p",null,"In addition, you can use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-functions/table-functions/iceberg-meta"},"iceberg_meta")," table function to query the snapshot information of the specified table."))}d.isMDXComponent=!0}}]);