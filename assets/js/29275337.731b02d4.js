"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[723],{15680:(e,r,a)=>{a.d(r,{xA:()=>d,yg:()=>y});var n=a(296540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=n.createContext({}),p=function(e){var r=n.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},d=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=t,y=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(y,s(s({ref:r},d),{},{components:a})):n.createElement(y,s({ref:r},d))}));function y(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:t,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},992330:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(58168),t=(a(296540),a(15680));const o={title:"Resource Management",language:"en"},s=void 0,l={unversionedId:"advanced/resource",id:"version-2.1/advanced/resource",title:"Resource Management",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/advanced/resource.md",sourceDirName:"advanced",slug:"/advanced/resource",permalink:"/docs/advanced/resource",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Resource Management",language:"en"},sidebar:"docs",previous:{title:"Compaction",permalink:"/docs/advanced/best-practice/compaction"},next:{title:"Orthogonal BITMAP Calculation",permalink:"/docs/advanced/orthogonal-bitmap-manual"}},i={},p=[{value:"Fundamental Concept",id:"fundamental-concept",level:2},{value:"Operation Of Resource",id:"operation-of-resource",level:2},{value:"Resources Supported",id:"resources-supported",level:2},{value:"Spark",id:"spark",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Spark Parameters:",id:"spark-parameters",level:5},{value:"If spark is used for ETL, also need to specify the following parameters:",id:"if-spark-is-used-for-etl-also-need-to-specify-the-following-parameters",level:5},{value:"Example",id:"example",level:4},{value:"ODBC",id:"odbc",level:3},{value:"Parameter",id:"parameter-1",level:4},{value:"ODBC Parameters:",id:"odbc-parameters",level:5},{value:"Example",id:"example-1",level:4}],d={toc:p},u="wrapper";function c(e){let{components:r,...a}=e;return(0,t.yg)(u,(0,n.A)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"resource-management"},"Resource Management"),(0,t.yg)("p",null,"In order to save the compute and storage resources in the Doris cluster, Doris needs to reference to some other external resources to do the related work. such as spark/GPU for query, HDFS/S3 for external storage, spark/MapReduce for ETL, connect to external storage by ODBC driver. Therefore, Doris need a resource management mechanism to manage these external resources."),(0,t.yg)("h2",{id:"fundamental-concept"},"Fundamental Concept"),(0,t.yg)("p",null,"A resource contains basic information such as name and type. The name is globally unique. Different types of resources contain different attributes. Please refer to the introduction of each resource for details."),(0,t.yg)("p",null,"The creation and deletion of resources can only be performed by users own ",(0,t.yg)("inlineCode",{parentName:"p"},"admin")," permission. One resource belongs to the entire Doris cluster. Users with ",(0,t.yg)("inlineCode",{parentName:"p"},"admin")," permission can assign permission of resource to other users. Please refer to ",(0,t.yg)("inlineCode",{parentName:"p"},"HELP GRANT")," or doris document."),(0,t.yg)("h2",{id:"operation-of-resource"},"Operation Of Resource"),(0,t.yg)("p",null,"There are three main commands for resource management: ",(0,t.yg)("inlineCode",{parentName:"p"},"create resource"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"drop resource")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"show resources"),". They are to create, delete and check resources. The specific syntax of these three commands can be viewed by executing ",(0,t.yg)("inlineCode",{parentName:"p"},"help CMD")," after MySQL client connects to Doris."),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"CREATE RESOURCE"),(0,t.yg)("p",{parentName:"li"},"This statement is used to create a resource. For details, please refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"},"CREATE RESOURCE"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"DROP RESOURCE"),(0,t.yg)("p",{parentName:"li"},"This command can delete an existing resource. For details, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE"},"DROP RESOURCE"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"SHOW RESOURCES"),(0,t.yg)("p",{parentName:"li"},"This command can view the resources that the user has permission to use. For details, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES"},"SHOW RESOURCES"),"."))),(0,t.yg)("h2",{id:"resources-supported"},"Resources Supported"),(0,t.yg)("p",null,"Currently, Doris can support"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Spark resource: do ETL work"),(0,t.yg)("li",{parentName:"ul"},"ODBC resource: query and import data from external tables")),(0,t.yg)("p",null,"The following shows how the two resources are used."),(0,t.yg)("h3",{id:"spark"},"Spark"),(0,t.yg)("h4",{id:"parameter"},"Parameter"),(0,t.yg)("h5",{id:"spark-parameters"},"Spark Parameters:"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"spark.master"),": required, currently supported yarn, spark://host:port."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"spark.submit.deployMode"),": The deployment mode of spark. required. It supports cluster and client."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"spark.hadoop.yarn.resourcemanager.address"),": required when master is yarn."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"spark.hadoop.fs.defaultFS"),": required when master is yarn."),(0,t.yg)("p",null,"Other parameters are optional, refer to: ",(0,t.yg)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/configuration.html"},"http://spark.apache.org/docs/latest/configuration.html")),(0,t.yg)("h5",{id:"if-spark-is-used-for-etl-also-need-to-specify-the-following-parameters"},"If spark is used for ETL, also need to specify the following parameters:"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"working_dir"),": Directory used by ETL. Spark is required when used as an ETL resource. For example: hdfs://host:port/tmp/doris."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"broker"),": The name of broker. Is required when spark be used as ETL resource. You need to use the ",(0,t.yg)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD BROKER")," command to complete the configuration in advance. "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"broker.property_key"),": When the broker reads the intermediate file generated by ETL, it needs the specified authentication information.")),(0,t.yg)("h4",{id:"example"},"Example"),(0,t.yg)("p",null,"Create a spark resource named ",(0,t.yg)("inlineCode",{parentName:"p"},"spark0 "),"in the yarn cluster mode."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES\n(\n  "type" = "spark",\n  "spark.master" = "yarn",\n  "spark.submit.deployMode" = "cluster",\n  "spark.jars" = "xxx.jar,yyy.jar",\n  "spark.files" = "/tmp/aaa,/tmp/bbb",\n  "spark.executor.memory" = "1g",\n  "spark.yarn.queue" = "queue0",\n  "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n  "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n  "working_dir" = "hdfs://127.0.0.1:10000/tmp/doris",\n  "broker" = "broker0",\n  "broker.username" = "user0",\n  "broker.password" = "password0"\n);\n')),(0,t.yg)("h3",{id:"odbc"},"ODBC"),(0,t.yg)("h4",{id:"parameter-1"},"Parameter"),(0,t.yg)("h5",{id:"odbc-parameters"},"ODBC Parameters:"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"type"),": Required, must be ",(0,t.yg)("inlineCode",{parentName:"p"},"odbc_catalog"),". As the type identifier of resource."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"user"),": The user name of the external table, required."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"password"),": The user password of the external table, required."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"host"),": The ip address of the external table, required."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"port"),": The port of the external table, required."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"odbc_type"),": Indicates the type of external table. Currently, Doris supports ",(0,t.yg)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"Oracle"),". In the future, it may support more databases. The ODBC external table referring to the resource is required. The old MySQL external table referring to the resource is optional."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"driver"),": Indicates the driver dynamic library used by the ODBC external table.\nThe ODBC external table referring to the resource is required. The old MySQL external table referring to the resource is optional."),(0,t.yg)("h4",{id:"example-1"},"Example"),(0,t.yg)("p",null,"Create the ODBC resource of Oracle, named ",(0,t.yg)("inlineCode",{parentName:"p"},"oracle_odbc"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n"type" = "odbc_catalog",\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"odbc_type" = "oracle",\n"driver" = "Oracle 19 ODBC driver"\n);\n')))}c.isMDXComponent=!0}}]);