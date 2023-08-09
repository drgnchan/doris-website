"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>E});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,E=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(E,o(o({ref:t},d),{},{components:n})):a.createElement(E,o({ref:t},d))}));function E(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u5916\u90e8\u5b58\u50a8\u6570\u636e\u5bfc\u5165",language:"zh-CN"},o=void 0,i={unversionedId:"data-operate/import/import-scenes/external-storage-load",id:"data-operate/import/import-scenes/external-storage-load",title:"\u5916\u90e8\u5b58\u50a8\u6570\u636e\u5bfc\u5165",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/import-scenes/external-storage-load.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/external-storage-load",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/external-storage-load",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5916\u90e8\u5b58\u50a8\u6570\u636e\u5bfc\u5165",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5bfc\u5165\u672c\u5730\u6570\u636e",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/local-file-load"},next:{title:"\u8ba2\u9605 Kafka \u65e5\u5fd7",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/kafka-load"}},p={},s=[{value:"HDFS LOAD",id:"hdfs-load",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u5f00\u59cb\u5bfc\u5165",id:"\u5f00\u59cb\u5bfc\u5165",level:3},{value:"S3 LOAD",id:"s3-load",level:2},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:3},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c-1",level:3},{value:"\u5f00\u59cb\u5bfc\u5165",id:"\u5f00\u59cb\u5bfc\u5165-1",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],d={toc:s},m="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5916\u90e8\u5b58\u50a8\u6570\u636e\u5bfc\u5165"},"\u5916\u90e8\u5b58\u50a8\u6570\u636e\u5bfc\u5165"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5bfc\u5165\u5916\u90e8\u7cfb\u7edf\u4e2d\u5b58\u50a8\u7684\u6570\u636e\u3002\u4f8b\u5982\uff08HDFS\uff0c\u6240\u6709\u652f\u6301S3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\uff09"),(0,r.kt)("h2",{id:"hdfs-load"},"HDFS LOAD"),(0,r.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u4e0a\u4f20\u9700\u8981\u5bfc\u5165\u7684\u6587\u4ef6\u5230HDFS\u4e0a\uff0c\u5177\u4f53\u547d\u4ee4\u53ef\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/r3.3.2/hadoop-project-dist/hadoop-common/FileSystemShell.html#put"},"HDFS\u4e0a\u4f20\u547d\u4ee4")),(0,r.kt)("h3",{id:"\u5f00\u59cb\u5bfc\u5165"},"\u5f00\u59cb\u5bfc\u5165"),(0,r.kt)("p",null,"Hdfs load \u521b\u5efa\u5bfc\u5165\u8bed\u53e5\uff0c\u5bfc\u5165\u65b9\u5f0f\u548c",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/broker-load-manual"},"Broker Load")," \u57fa\u672c\u76f8\u540c\uff0c\u53ea\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH BROKER broker_name ()")," \u8bed\u53e5\u66ff\u6362\u6210\u5982\u4e0b\u90e8\u5206"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  LOAD LABEL db_name.label_name \n  (data_desc, ...)\n  WITH HDFS\n  [PROPERTIES (key1=value1, ... )]\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u5f20\u8868"),(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," \u547d\u4ee4\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"demo"),"\u521b\u5efa\u4e00\u5f20\u8868\u7528\u4e8e\u5b58\u50a8\u5f85\u5bfc\u5165\u7684\u6570\u636e\u3002\u5177\u4f53\u7684\u5bfc\u5165\u65b9\u5f0f\u8bf7\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")," \u547d\u4ee4\u624b\u518c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS load_hdfs_file_test\n(\n    id INT,\n    age TINYINT,\n    name VARCHAR(50)\n)\nunique key(id)\nDISTRIBUTED BY HASH(id) BUCKETS 3;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5bfc\u5165HDFS\u6587\u4ef6\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL demo.label_20220402\n    (\n    DATA INFILE("hdfs://host:port/tmp/test_hdfs.txt")\n    INTO TABLE `load_hdfs_file_test`\n    COLUMNS TERMINATED BY "\\t"            \n    (id,age,name)\n    )\n    with HDFS (\n    "fs.defaultFS"="hdfs://testFs",\n    "hdfs_user"="user"\n    )\n    PROPERTIES\n    (\n    "timeout"="1200",\n    "max_filter_ratio"="0.1"\n    );\n')),(0,r.kt)("p",{parentName:"li"}," \u5173\u4e8e\u53c2\u6570\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/broker-load-manual"},"Broker Load"),"\uff0cHA\u96c6\u7fa4\u7684\u521b\u5efa\u8bed\u6cd5\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"HELP BROKER LOAD"),"\u67e5\u770b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u5bfc\u5165\u72b6\u6001"),(0,r.kt)("p",{parentName:"li"},"Broker load \u662f\u4e00\u4e2a\u5f02\u6b65\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u5177\u4f53\u5bfc\u5165\u7ed3\u679c\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD"},"SHOW LOAD"),"\u547d\u4ee4\u67e5\u770b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'mysql> show load order by createtime desc limit 1\\G;\n*************************** 1. row ***************************\n         JobId: 41326624\n         Label: broker_load_2022_04_15\n         State: FINISHED\n      Progress: ETL:100%; LOAD:100%\n          Type: BROKER\n       EtlInfo: unselected.rows=0; dpp.abnorm.ALL=0; dpp.norm.ALL=27\n      TaskInfo: cluster:N/A; timeout(s):1200; max_filter_ratio:0.1\n      ErrorMsg: NULL\n    CreateTime: 2022-04-01 18:59:06\n  EtlStartTime: 2022-04-01 18:59:11\n EtlFinishTime: 2022-04-01 18:59:11\n LoadStartTime: 2022-04-01 18:59:11\nLoadFinishTime: 2022-04-01 18:59:11\n           URL: NULL\n    JobDetails: {"Unfinished backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[]},"ScannedRows":27,"TaskNumber":1,"All backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[36728051]},"FileNumber":1,"FileSize":5540}\n1 row in set (0.01 sec)\n')))),(0,r.kt)("h2",{id:"s3-load"},"S3 LOAD"),(0,r.kt)("p",null,"\u4ece0.14 \u7248\u672c\u5f00\u59cb\uff0cDoris \u652f\u6301\u901a\u8fc7S3\u534f\u8bae\u76f4\u63a5\u4ece\u652f\u6301S3\u534f\u8bae\u7684\u5728\u7ebf\u5b58\u50a8\u7cfb\u7edf\u5bfc\u5165\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5bfc\u5165 AWS S3 \u4e2d\u5b58\u50a8\u7684\u6570\u636e\u3002\u4e5f\u652f\u6301\u5bfc\u5165\u5176\u4ed6\u652f\u6301S3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u5bfc\u5165\u3002"),(0,r.kt)("h3",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6e90\u6570\u636e\u5728 \u652f\u6301S3\u534f\u8bae\u7684\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff0c\u5982 S3 \u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5728 \u51e0\u5341\u5230\u767eGB \u7ea7\u522b\u3002")),(0,r.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c-1"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u51c6\u672cAK \u548c SK\n\u9996\u5148\u9700\u8981\u627e\u5230\u6216\u8005\u91cd\u65b0\u751f\u6210 AWS ",(0,r.kt)("inlineCode",{parentName:"li"},"Access keys"),"\uff0c\u53ef\u4ee5\u5728 AWS console \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"My Security Credentials")," \u627e\u5230\u751f\u6210\u65b9\u5f0f\uff0c \u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,r.kt)("a",{target:"_blank",href:n(96328).Z},"AK_SK"),"\n\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Create New Access Key")," \u6ce8\u610f\u4fdd\u5b58\u751f\u6210 AK\u548cSK."),(0,r.kt)("li",{parentName:"ol"},"\u51c6\u5907 REGION \u548c ENDPOINT\nREGION \u53ef\u4ee5\u5728\u521b\u5efa\u6876\u7684\u65f6\u5019\u9009\u62e9\u4e5f\u53ef\u4ee5\u5728\u6876\u5217\u8868\u4e2d\u67e5\u770b\u5230\u3002ENDPOINT \u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u9875\u9762\u901a\u8fc7 REGION \u67e5\u5230 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region"},"AWS \u6587\u6863"))),(0,r.kt)("p",null,"\u5176\u4ed6\u4e91\u5b58\u50a8\u7cfb\u7edf\u53ef\u4ee5\u76f8\u5e94\u7684\u6587\u6863\u627e\u5230\u4e0eS3\u517c\u5bb9\u7684\u76f8\u5173\u4fe1\u606f"),(0,r.kt)("h3",{id:"\u5f00\u59cb\u5bfc\u5165-1"},"\u5f00\u59cb\u5bfc\u5165"),(0,r.kt)("p",null,"\u5bfc\u5165\u65b9\u5f0f\u548c ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/broker-load-manual"},"Broker Load")," \u57fa\u672c\u76f8\u540c\uff0c\u53ea\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH BROKER broker_name ()")," \u8bed\u53e5\u66ff\u6362\u6210\u5982\u4e0b\u90e8\u5206"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')),(0,r.kt)("p",null,"\u5b8c\u6574\u793a\u4f8b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')),(0,r.kt)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"S3 SDK \u9ed8\u8ba4\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"virtual-hosted style")," \u65b9\u5f0f\u3002\u4f46\u67d0\u4e9b\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u53ef\u80fd\u6ca1\u5f00\u542f\u6216\u6ca1\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"virtual-hosted style")," \u65b9\u5f0f\u7684\u8bbf\u95ee\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"use_path_style")," \u53c2\u6570\u6765\u5f3a\u5236\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"path style")," \u65b9\u5f0f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION",\n        "use_path_style" = "true"\n  )\n')),(0,r.kt)("version",{since:"1.2"},(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301\u4f7f\u7528\u4e34\u65f6\u79d8\u94a5\uff08TOKEN) \u8bbf\u95ee\u6240\u6709\u652f\u6301 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_TEMP_ACCESS_KEY",\n        "AWS_SECRET_KEY" = "AWS_TEMP_SECRET_KEY",\n        "AWS_TOKEN" = "AWS_TEMP_TOKEN",\n        "AWS_REGION" = "AWS_REGION"\n  )\n'))))}c.isMDXComponent=!0},96328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/aws_ak_sk-7a2cc3d09728977381b53e321838ccb1.png"}}]);