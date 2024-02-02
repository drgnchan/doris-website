"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84312],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(45072),a=(r(11504),r(95788));const o={title:"OUTFILE",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",title:"OUTFILE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"OUTFILE",language:"en"},sidebar:"docs",previous:{title:"CANCEL-EXPORT",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"},next:{title:"ADMIN DIAGNOSE TABLET",permalink:"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET"}},l={},p=[{value:"OUTFILE",id:"outfile",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"outfile"},"OUTFILE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"OURFILE"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"This statement is used to export query results to a file using the ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," command. Currently, it supports exporting to remote storage, such as HDFS, S3, BOS, COS (Tencent Cloud), through the Broker process, through the S3 protocol, or directly through the HDFS protocol."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'query_stmt\nINTO OUTFILE "file_path"\n[format_as]\n[properties]\n')),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"file_path"),(0,a.yg)("p",{parentName:"li"},"file",(0,a.yg)("em",{parentName:"p"},"path points to the path where the file is stored and the file prefix. Such as `hdfs://path/to/my_file"),"`."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"The final filename will consist of `my_file_`, the file number and the file format suffix. The file serial number starts from 0, and the number is the number of files to be divided. Such as:\n\nmy_file_abcdefg_0.csv\nmy_file_abcdefg_1.csv\nmy_file_abcdegf_2.csv\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"format_as"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"FORMAT AS CSV\n")),(0,a.yg)("p",{parentName:"li"},"Specifies the export format. Supported formats include CSV, PARQUET, CSV_WITH_NAMES, CSV_WITH_NAMES_AND_TYPES and ORC. Default is CSV.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"properties"),(0,a.yg)("p",{parentName:"li"},"Specify related properties. Currently exporting via the Broker process, or via the S3 protocol is supported."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'grammar:\n[PROPERTIES ("key"="value", ...)]\nThe following properties are supported:\ncolumn_separator: column separator. <version since="1.2.0">Support mulit-bytes, such as: "\\\\x01", "abc"</version>\nline_delimiter: line delimiter. <version since="1.2.0">Support mulit-bytes, such as: "\\\\x01", "abc"</version>\nmax_file_size: the size limit of a single file, if the result exceeds this value, it will be cut into multiple files.\n\nBroker related properties need to be prefixed with `broker.`:\nbroker.name: broker name\nbroker.hadoop.security.authentication: specify the authentication method as kerberos\nbroker.kerberos_principal: specifies the principal of kerberos\nbroker.kerberos_keytab: specifies the path to the keytab file of kerberos. The file must be the absolute path to the file on the server where the broker process is located. and can be accessed by the Broker process\n\nHDFS related properties:\nfs.defaultFS: namenode address and port\nhadoop.username: hdfs username\ndfs.nameservices: if hadoop enable HA, please set fs nameservice. See hdfs-site.xml\ndfs.ha.namenodes.[nameservice ID]\uff1aunique identifiers for each NameNode in the nameservice. See hdfs-site.xml\ndfs.namenode.rpc-address.[nameservice ID].[name node ID]`\uff1athe fully-qualified RPC address for each NameNode to listen on. See hdfs-site.xml\ndfs.client.failover.proxy.provider.[nameservice ID]\uff1athe Java class that HDFS clients use to contact the Active NameNode, usually it is org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\n\nFor a kerberos-authentication enabled Hadoop cluster, additional properties need to be set:\ndfs.namenode.kerberos.principal: HDFS namenode service principal\nhadoop.security.authentication: kerberos\nhadoop.kerberos.principal: the Kerberos pincipal that Doris will use when connectiong to HDFS.\nhadoop.kerberos.keytab: HDFS client keytab location.\n\nFor the S3 protocol, you can directly execute the S3 protocol configuration:\nAWS_ENDPOINT\nAWS_ACCESS_KEY\nAWS_SECRET_KEY\nAWS_REGION\nuse_path_stype: (optional) default false . The S3 SDK uses the virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the use_path_style parameter to force the use of path style access method.\n')))),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Use the broker method to export, and export the simple query results to the file ",(0,a.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),". Specifies that the export format is CSV. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"my_broker")," and set kerberos authentication information. Specify the column separator as ",(0,a.yg)("inlineCode",{parentName:"p"},",")," and the row separator as ",(0,a.yg)("inlineCode",{parentName:"p"},"\\n"),"."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n')),(0,a.yg)("p",{parentName:"li"},"If the final generated file is not larger than 100MB, it will be: ",(0,a.yg)("inlineCode",{parentName:"p"},"result_0.csv"),".\nIf larger than 100MB, it may be ",(0,a.yg)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Export the simple query results to the file ",(0,a.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.parquet"),". Specify the export format as PARQUET. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"my_broker")," and set kerberos authentication information."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "schema"="required,int32,c1;required,byte_array,c2;required,byte_array,c2"\n);\n')),(0,a.yg)("p",{parentName:"li"},"Exporting query results to parquet files requires explicit ",(0,a.yg)("inlineCode",{parentName:"p"},"schema"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Export the query result of the CTE statement to the file ",(0,a.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),". The default export format is CSV. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"my_broker")," and set hdfs high availability information. Use the default row and column separators."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs://path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,a.yg)("p",{parentName:"li"},"If the final generated file is not larger than 1GB, it will be: ",(0,a.yg)("inlineCode",{parentName:"p"},"result_0.csv"),".\nIf larger than 1GB, it may be ",(0,a.yg)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Export the query result of the UNION statement to the file ",(0,a.yg)("inlineCode",{parentName:"p"},"bos://bucket/result.txt"),". Specify the export format as PARQUET. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"my_broker")," and set hdfs high availability information. The PARQUET format does not require a column delimiter to be specified.\nAfter the export is complete, an identity file is generated."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyy",\n    "schema"="required,int32,k1;required,byte_array,k2"\n);\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Export the query result of the select statement to the file ",(0,a.yg)("inlineCode",{parentName:"p"},"s3a://${bucket_name}/path/result.txt"),". Specify the export format as csv.\nAfter the export is complete, an identity file is generated."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "hdfs_broker",\n    "broker.fs.s3a.access.key" = "xxx",\n    "broker.fs.s3a.secret.key" = "xxxx",\n    "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n')),(0,a.yg)("p",{parentName:"li"},"If the final generated file is not larger than 1GB, it will be: ",(0,a.yg)("inlineCode",{parentName:"p"},"my_file_0.csv"),".\nIf larger than 1GB, it may be ",(0,a.yg)("inlineCode",{parentName:"p"},"my_file_0.csv, result_1.csv, ..."),".\nVerify on cos"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"   1. A path that does not exist will be automatically created\n   2. Access.key/secret.key/endpoint needs to be confirmed with students of cos. Especially the value of endpoint does not need to fill in bucket_name.\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Use the s3 protocol to export to bos, and enable concurrent export."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'set enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n')),(0,a.yg)("p",{parentName:"li"},"The resulting file is prefixed with ",(0,a.yg)("inlineCode",{parentName:"p"},"my_file_{fragment_instance_id}_"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Use the s3 protocol to export to bos, and enable concurrent export of session variables.\nNote: However, since the query statement has a top-level sorting node, even if the concurrently exported session variable is enabled for this query, it cannot be exported concurrently."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'set enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Use hdfs export to export simple query results to the file ",(0,a.yg)("inlineCode",{parentName:"p"},"hdfs://${host}:${fileSystem_port}/path/to/result.txt"),". Specify the export format as CSV and the user name as work. Specify the column separator as ",(0,a.yg)("inlineCode",{parentName:"p"},",")," and the row separator as ",(0,a.yg)("inlineCode",{parentName:"p"},"\\n"),"."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'-- the default port of fileSystem_port is 9000\nSELECT * FROM tbl\nINTO OUTFILE "hdfs://${host}:${fileSystem_port}/path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://ip:port",\n    "hadoop.username" = "work"\n);\n')),(0,a.yg)("p",{parentName:"li"},"If the Hadoop cluster is highly available and Kerberos authentication is enabled, you can refer to the following SQL statement:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM tbl\nINTO OUTFILE \"hdfs://path/to/result_\"\nFORMAT AS CSV\nPROPERTIES\n(\n'fs.defaultFS'='hdfs://hacluster/',\n'dfs.nameservices'='hacluster',\n'dfs.ha.namenodes.hacluster'='n1,n2',\n'dfs.namenode.rpc-address.hacluster.n1'='192.168.0.1:8020',\n'dfs.namenode.rpc-address.hacluster.n2'='192.168.0.2:8020',\n'dfs.client.failover.proxy.provider.hacluster'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n'dfs.namenode.kerberos.principal'='hadoop/_HOST@REALM.COM'\n'hadoop.security.authentication'='kerberos',\n'hadoop.kerberos.principal'='doris_test@REALM.COM',\n'hadoop.kerberos.keytab'='/path/to/doris_test.keytab'\n);\n\nIf the final generated file is not larger than 100MB, it will be: `result_0.csv`.\nIf larger than 100MB, it may be `result_0.csv, result_1.csv, ...`.\n\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Export the query result of the select statement to the file ",(0,a.yg)("inlineCode",{parentName:"p"},"cosn://${bucket_name}/path/result.txt")," on Tencent Cloud Object Storage (COS). Specify the export format as csv.\nAfter the export is complete, an identity file is generated."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "cosn://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "broker_name",\n    "broker.fs.cosn.userinfo.secretId" = "xxx",\n    "broker.fs.cosn.userinfo.secretKey" = "xxxx",\n    "broker.fs.cosn.bucket.endpoint_suffix" = "https://cos.xxxxxx.myqcloud.com/",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n')))),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"OUTFILE"),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Export data volume and export efficiency"),(0,a.yg)("p",{parentName:"li"},"This function essentially executes an SQL query command. The final result is a single-threaded output. Therefore, the time-consuming of the entire export includes the time-consuming of the query itself and the time-consuming of writing the final result set. If the query is large, you need to set the session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"query_timeout")," to appropriately extend the query timeout.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Management of export files"),(0,a.yg)("p",{parentName:"li"},"Doris does not manage exported files. Including the successful export, or the remaining files after the export fails, all need to be handled by the user.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Export to local file"),(0,a.yg)("p",{parentName:"li"},"The ability to export to a local file is not available for public cloud users, only for private deployments. And the default user has full control over the cluster nodes. Doris will not check the validity of the export path filled in by the user. If the process user of Doris does not have write permission to the path, or the path does not exist, an error will be reported. At the same time, for security reasons, if a file with the same name already exists in this path, the export will also fail."),(0,a.yg)("p",{parentName:"li"},"Doris does not manage files exported locally, nor does it check disk space, etc. These files need to be managed by the user, such as cleaning and so on.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Results Integrity Guarantee"),(0,a.yg)("p",{parentName:"li"},"This command is a synchronous command, so it is possible that the task connection is disconnected during the execution process, so that it is impossible to live the exported data whether it ends normally, or whether it is complete. At this point, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"success_file_name")," parameter to request that a successful file identifier be generated in the directory after the task is successful. Users can use this file to determine whether the export ends normally."))))}d.isMDXComponent=!0}}]);