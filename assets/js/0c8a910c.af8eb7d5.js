"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31580],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>g});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},32628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(45072),n=(a(11504),a(95788));const o={title:"External Storage Data Import",language:"en"},l=void 0,i={unversionedId:"data-operate/import/import-scenes/external-storage-load",id:"version-2.0/data-operate/import/import-scenes/external-storage-load",title:"External Storage Data Import",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/import/import-scenes/external-storage-load.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/external-storage-load",permalink:"/docs/data-operate/import/import-scenes/external-storage-load",draft:!1,tags:[],version:"2.0",frontMatter:{title:"External Storage Data Import",language:"en"},sidebar:"docs",previous:{title:"Import Local Data",permalink:"/docs/data-operate/import/import-scenes/local-file-load"},next:{title:"Kafka Data Subscription",permalink:"/docs/data-operate/import/import-scenes/kafka-load"}},s={},p=[{value:"HDFS LOAD",id:"hdfs-load",level:2},{value:"Ready to work",id:"ready-to-work",level:3},{value:"start import",id:"start-import",level:3},{value:"S3 LOAD",id:"s3-load",level:2},{value:"Applicable scenarios",id:"applicable-scenarios",level:3},{value:"Preparing",id:"preparing",level:3},{value:"Start Loading",id:"start-loading",level:3},{value:"FAQ",id:"faq",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,r.c)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"external-storage-data-import"},"External Storage Data Import"),(0,n.yg)("p",null,"The following mainly introduces how to import data stored in an external system. For example (HDFS, All object stores that support the S3 protocol)"),(0,n.yg)("h2",{id:"hdfs-load"},"HDFS LOAD"),(0,n.yg)("h3",{id:"ready-to-work"},"Ready to work"),(0,n.yg)("p",null,"Upload the files to be imported to HDFS. For specific commands, please refer to ",(0,n.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/r3.3.2/hadoop-project-dist/hadoop-common/FileSystemShell.html#put"},"HDFS upload command")),(0,n.yg)("h3",{id:"start-import"},"start import"),(0,n.yg)("p",null,"Hdfs load creates an import statement. The import method is basically the same as ",(0,n.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load"),", only need to ",(0,n.yg)("inlineCode",{parentName:"p"},"WITH BROKER broker_name () ")," statement with the following"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"  LOAD LABEL db_name.label_name \n  (data_desc, ...)\n  WITH HDFS\n  [PROPERTIES (key1=value1, ... )]\n")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"create a table"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS load_hdfs_file_test\n(\n    id INT,\n    age TINYINT,\n    name VARCHAR(50)\n)\nunique key(id)\nDISTRIBUTED BY HASH(id) BUCKETS 3;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Import data Execute the following command to import HDFS files:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL demo.label_20220402\n    (\n    DATA INFILE("hdfs://host:port/tmp/test_hdfs.txt")\n    INTO TABLE `load_hdfs_file_test`\n    COLUMNS TERMINATED BY "\\t"            \n    (id,age,name)\n    )\n    with HDFS (\n    "fs.defaultFS"="hdfs://testFs",\n    "hdfs_user"="user"\n    )\n    PROPERTIES\n    (\n    "timeout"="1200",\n    "max_filter_ratio"="0.1"\n    );\n')),(0,n.yg)("p",{parentName:"li"},"For parameter introduction, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load"),", HA cluster creation syntax, view through ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP BROKER LOAD"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Check import status"),(0,n.yg)("p",{parentName:"li"},"Broker load is an asynchronous import method. The specific import results can be accessed through ",(0,n.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD"},"SHOW LOAD")," command to view"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'mysql> show load order by createtime desc limit 1\\G;\n*************************** 1. row ***************************\n         JobId: 41326624\n         Label: broker_load_2022_04_15\n         State: FINISHED\n      Progress: ETL:100%; LOAD:100%\n          Type: BROKER\n       EtlInfo: unselected.rows=0; dpp.abnorm.ALL=0; dpp.norm.ALL=27\n      TaskInfo: cluster:N/A; timeout(s):1200; max_filter_ratio:0.1\n      ErrorMsg: NULL\n    CreateTime: 2022-04-01 18:59:06\n  EtlStartTime: 2022-04-01 18:59:11\n EtlFinishTime: 2022-04-01 18:59:11\n LoadStartTime: 2022-04-01 18:59:11\nLoadFinishTime: 2022-04-01 18:59:11\n           URL: NULL\n    JobDetails: {"Unfinished backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[]},"ScannedRows":27,"TaskNumber":1,"All backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[36728051]},"FileNumber":1,"FileSize":5540}\n1 row in set (0.01 sec)\n')))),(0,n.yg)("h2",{id:"s3-load"},"S3 LOAD"),(0,n.yg)("p",null,"Starting from version 0.14, Doris supports the direct import of data from online storage systems that support the S3 protocol through the S3 protocol."),(0,n.yg)("p",null,"This document mainly introduces how to import data stored in AWS S3. It also supports the import of other object storage systems that support the S3 protocol."),(0,n.yg)("h3",{id:"applicable-scenarios"},"Applicable scenarios"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Source data in S3 protocol accessible storage systems, such as S3."),(0,n.yg)("li",{parentName:"ul"},"Data volumes range from tens to hundreds of GB.")),(0,n.yg)("h3",{id:"preparing"},"Preparing"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Standard AK and SK\nFirst, you need to find or regenerate AWS ",(0,n.yg)("inlineCode",{parentName:"li"},"Access keys"),", you can find the generation method in ",(0,n.yg)("inlineCode",{parentName:"li"},"My Security Credentials")," of AWS console, as shown in the following figure:\n",(0,n.yg)("a",{target:"_blank",href:a(58052).c},"AK_SK"),"\nSelect ",(0,n.yg)("inlineCode",{parentName:"li"},"Create New Access Key")," and pay attention to save and generate AK and SK."),(0,n.yg)("li",{parentName:"ol"},"Prepare REGION and ENDPOINT\nREGION can be selected when creating the bucket or can be viewed in the bucket list. ENDPOINT can be found through REGION on the following page ",(0,n.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region"},"AWS Documentation"))),(0,n.yg)("p",null,"Other cloud storage systems can find relevant information compatible with S3 in corresponding documents"),(0,n.yg)("h3",{id:"start-loading"},"Start Loading"),(0,n.yg)("p",null,"Like ",(0,n.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load"),"  just replace ",(0,n.yg)("inlineCode",{parentName:"p"},"WITH BROKER broker_name ()")," with"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')),(0,n.yg)("p",null,"example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')),(0,n.yg)("h3",{id:"faq"},"FAQ"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"S3 SDK uses virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the ",(0,n.yg)("inlineCode",{parentName:"li"},"use_path_style")," parameter to force the use of path style:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'   WITH S3\n   (\n         "AWS_ENDPOINT" = "AWS_ENDPOINT",\n         "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n         "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n         "AWS_REGION" = "AWS_REGION",\n         "use_path_style" = "true"\n   )\n')),(0,n.yg)("version",{since:"1.2"},(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Support using temporary security credentials to access object stores that support the S3 protocol:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_TEMP_ACCESS_KEY",\n        "AWS_SECRET_KEY" = "AWS_TEMP_SECRET_KEY",\n        "AWS_TOKEN" = "AWS_TEMP_TOKEN",\n        "AWS_REGION" = "AWS_REGION"\n  )\n'))))}m.isMDXComponent=!0},58052:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/files/aws_ak_sk-7a2cc3d09728977381b53e321838ccb1.png"}}]);