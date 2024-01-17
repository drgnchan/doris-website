"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28327],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>A});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),i=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=i(e.components);return a.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(t),u=n,A=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return t?a.createElement(A,s(s({ref:r},p),{},{components:t})):a.createElement(A,s({ref:r},p))}));function A(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var i=2;i<l;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85988:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=t(87462),n=(t(67294),t(3905));const l={title:"CREATE-CATALOG",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",title:"CREATE-CATALOG",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-CATALOG",language:"en"},sidebar:"docs",previous:{title:"VARIANT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/VARIANT"},next:{title:"CREATE-DATABASE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE"}},c={},i=[{value:"CREATE-CATALOG",id:"create-catalog",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:i},d="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-catalog"},"CREATE-CATALOG"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"CREATE CATALOG"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"This statement is used to create an external catalog"),(0,n.kt)("p",null,"Syntax:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG [IF NOT EXISTS] catalog_name [comment]\n    PROPERTIES ("key"="value", ...);\n')),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create catalog hive"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive comment 'hive catalog' PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:7004',\n    'dfs.nameservices'='HANN',\n    'dfs.ha.namenodes.HANN'='nn1,nn2',\n    'dfs.namenode.rpc-address.HANN.nn1'='nn1_host:rpc_port',\n    'dfs.namenode.rpc-address.HANN.nn2'='nn2_host:rpc_port',\n    'dfs.client.failover.proxy.provider.HANN'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create catalog es"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG es PROPERTIES (\n    "type"="es",\n    "hosts"="http://127.0.0.1:9200"\n);\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create catalog jdbc"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"mysql")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="123456",\n    "jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n    "driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n    "driver_class" = "com.mysql.cj.jdbc.Driver"\n);\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"postgresql")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="postgres",\n    "password"="123456",\n    "jdbc_url" = "jdbc:postgresql://127.0.0.1:5432/demo",\n    "driver_url" = "file:///path/to/postgresql-42.5.1.jar",\n    "driver_class" = "org.postgresql.Driver"\n);\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"clickhouse")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="default",\n    "password"="123456",\n    "jdbc_url" = "jdbc:clickhouse://127.0.0.1:8123/demo",\n    "driver_url" = "file:///path/to/clickhouse-jdbc-0.3.2-patch11-all.jar",\n    "driver_class" = "com.clickhouse.jdbc.ClickHouseDriver"\n)\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"oracle")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="doris",\n    "password"="123456",\n    "jdbc_url" = "jdbc:oracle:thin:@127.0.0.1:1521:helowin",\n    "driver_url" = "file:///path/to/ojdbc8.jar",\n    "driver_class" = "oracle.jdbc.driver.OracleDriver"\n);  \n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SQLServer")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG sqlserver_catalog PROPERTIES (\n    "type"="jdbc",\n    "user"="SA",\n    "password"="Doris123456",\n    "jdbc_url" = "jdbc:sqlserver://localhost:1433;DataBaseName=doris_test",\n    "driver_url" = "file:///path/to/mssql-jdbc-11.2.3.jre8.jar",\n    "driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n);  \n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SAP HANA")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG saphana_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="SYSTEM",\n   "password"="SAPHANA",\n   "jdbc_url" = "jdbc:sap://localhost:31515/TEST",\n   "driver_url" = "file:///path/to/ngdbc.jar",\n   "driver_class" = "com.sap.db.jdbc.Driver"\n);\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Trino")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG trino_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="hadoop",\n   "password"="",\n   "jdbc_url" = "jdbc:trino://localhost:8080/hive",\n   "driver_url" = "file:///path/to/trino-jdbc-389.jar",\n   "driver_class" = "io.trino.jdbc.TrinoDriver"\n);\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"OceanBase")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG oceanbase_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="root",\n   "password"="",\n   "jdbc_url" = "jdbc:oceanbase://localhost:2881/demo",\n   "driver_url" = "file:///path/to/oceanbase-client-2.4.2.jar",\n   "driver_class" = "com.oceanbase.jdbc.Driver"\n);\n')))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("p",null,"CREATE, CATALOG"),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);