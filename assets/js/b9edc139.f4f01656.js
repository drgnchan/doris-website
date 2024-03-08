"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57391],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(296540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),y=o,h=c["".concat(s,".").concat(y)]||c[y]||m[y]||l;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},114336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(58168),o=(r(296540),r(15680));const l={title:"Export Query Result",language:"en"},a=void 0,i={unversionedId:"data-operate/export/outfile",id:"version-2.1/data-operate/export/outfile",title:"Export Query Result",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/data-operate/export/outfile.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/outfile",permalink:"/docs/data-operate/export/outfile",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Export Query Result",language:"en"},sidebar:"docs",previous:{title:"Export Overview",permalink:"/docs/data-operate/export/export-manual"},next:{title:"Export Data or Table Structure with MYSQLDUMP ",permalink:"/docs/data-operate/export/export-with-mysql-dump"}},s={},u=[{value:"Examples",id:"examples",level:2},{value:"Export to HDFS",id:"export-to-hdfs",level:3},{value:"Export to Local Files",id:"export-to-local-files",level:3},{value:"Concurrent Export",id:"concurrent-export",level:2},{value:"How to Verify that the Result Set is Exported Concurrently",id:"how-to-verify-that-the-result-set-is-exported-concurrently",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Return Results",id:"return-results",level:2},{value:"Notice",id:"notice",level:2},{value:"More Help",id:"more-help",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"export-query-result"},"Export Query Result"),(0,o.yg)("p",null,"This document describes how to use the  ",(0,o.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"},"SELECT INTO OUTFILE"),"  command to export query results."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," is a synchronous command, which means that the operation is completed when the command returns. It also returns a row of results to show the execution result of the export."),(0,o.yg)("h2",{id:"examples"},"Examples"),(0,o.yg)("h3",{id:"export-to-hdfs"},"Export to HDFS"),(0,o.yg)("p",null,"Export simple query results to the file ",(0,o.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),", specifying the export format as CSV."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n"\n);\n')),(0,o.yg)("h3",{id:"export-to-local-files"},"Export to Local Files"),(0,o.yg)("p",null,"When exporting to a local file, you need to configure ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_outfile_to_local=true")," in fe.conf first"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'select * from tbl1 limit 10 \nINTO OUTFILE "file:///home/work/path/result_";\n')),(0,o.yg)("p",null,"For more usage, see ",(0,o.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"},"OUTFILE documentation"),"."),(0,o.yg)("h2",{id:"concurrent-export"},"Concurrent Export"),(0,o.yg)("p",null,"By default, the export of the query result set is non-concurrent, that is, a single point of export. If the user wants the query result set to be exported concurrently, the following conditions need to be met:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"session variable 'enable_parallel_outfile' to enable concurrent export: ",(0,o.yg)("inlineCode",{parentName:"li"},"set enable_parallel_outfile = true;")),(0,o.yg)("li",{parentName:"ol"},"The export method is S3, HDFS instead of using a broker"),(0,o.yg)("li",{parentName:"ol"},"The query can meet the needs of concurrent export, for example, the top level does not contain single point nodes such as sort. (I will give an example later, which is a query that does not export the result set concurrently)")),(0,o.yg)("p",null,"If the above three conditions are met, the concurrent export query result set can be triggered. Concurrency = ",(0,o.yg)("inlineCode",{parentName:"p"},"be_instacne_num * parallel_fragment_exec_instance_num")),(0,o.yg)("h3",{id:"how-to-verify-that-the-result-set-is-exported-concurrently"},"How to Verify that the Result Set is Exported Concurrently"),(0,o.yg)("p",null,"After the user enables concurrent export through the session variable setting, if you want to verify whether the current query can be exported concurrently, you can use the following method."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'explain select xxx from xxx where xxx into outfile "s3://xxx" format as csv properties ("AWS_ENDPOINT" = "xxx", ...);\n')),(0,o.yg)("p",null,"After explaining the query, Doris will return the plan of the query. If you find that ",(0,o.yg)("inlineCode",{parentName:"p"},"RESULT FILE SINK")," appears in ",(0,o.yg)("inlineCode",{parentName:"p"},"PLAN FRAGMENT 1"),", it means that the export concurrency has been opened successfully.\nIf ",(0,o.yg)("inlineCode",{parentName:"p"},"RESULT FILE SINK")," appears in ",(0,o.yg)("inlineCode",{parentName:"p"},"PLAN FRAGMENT 0"),", it means that the current query cannot be exported concurrently (the current query does not satisfy the three conditions of concurrent export at the same time)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Planning example for concurrent export:\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:<slot 2> | <slot 3> | <slot 4> | <slot 5>                     |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   1:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:`k1` + `k2`                                                   |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:test`.`multi_tablet`.`k1`   |\n|                                                                             |\n|   RESULT FILE SINK                                                          |\n|   FILE PATH: s3://ml-bd-repo/bpit_test/outfile_1951_                        |\n|   STORAGE TYPE: S3                                                          |\n|                                                                             |\n|   0:OlapScanNode                                                            |\n|      TABLE: multi_tablet                                                    |\n+-----------------------------------------------------------------------------+\n")),(0,o.yg)("h2",{id:"usage-examples"},"Usage Examples"),(0,o.yg)("p",null,"For details, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"},"OUTFILE Document"),"."),(0,o.yg)("h2",{id:"return-results"},"Return Results"),(0,o.yg)("p",null,"The command is a synchronization command. The command returns, which means the operation is over.\nAt the same time, a row of results will be returned to show the exported execution result."),(0,o.yg)("p",null,"If it exports and returns normally, the result is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> select * from tbl1 limit 10 into outfile "file:///home/work/path/result_";\n+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         2 |        8 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n1 row in set (0.05 sec)\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"FileNumber: The number of files finally generated."),(0,o.yg)("li",{parentName:"ul"},"TotalRows: The number of rows in the result set."),(0,o.yg)("li",{parentName:"ul"},"FileSize: The total size of the exported file. Unit byte."),(0,o.yg)("li",{parentName:"ul"},"URL: If it is exported to a local disk, the Compute Node to which it is exported is displayed here.")),(0,o.yg)("p",null,"If a concurrent export is performed, multiple rows of data will be returned."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         3 |        7 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n|          1 |         2 |        4 | file:///192.168.1.11/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n2 rows in set (2.218 sec)\n")),(0,o.yg)("p",null,"If the execution is incorrect, an error message will be returned, such as:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT * FROM tbl INTO OUTFILE ...\nERROR 1064 (HY000): errCode = 2, detailMessage = Open broker writer failed ...\n")),(0,o.yg)("h2",{id:"notice"},"Notice"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The CSV format does not support exporting binary types, such as BITMAP and HLL types. These types will be output as ",(0,o.yg)("inlineCode",{parentName:"li"},"\\N"),", which is null."),(0,o.yg)("li",{parentName:"ul"},"If you do not enable concurrent export, the query result is exported by a single BE node in a single thread. Therefore, the export time and the export result set size are positively correlated. Turning on concurrent export can reduce the export time."),(0,o.yg)("li",{parentName:"ul"},"The export command does not check whether the file and file path exist. Whether the path will be automatically created or whether the existing file will be overwritten is entirely determined by the semantics of the remote storage system."),(0,o.yg)("li",{parentName:"ul"},"If an error occurs during the export process, the exported file may remain on the remote storage system. Doris will not clean these files. The user needs to manually clean up."),(0,o.yg)("li",{parentName:"ul"},"The timeout of the export command is the same as the timeout of the query. It can be set by ",(0,o.yg)("inlineCode",{parentName:"li"},"SET query_timeout = xxx"),"."),(0,o.yg)("li",{parentName:"ul"},"For empty result query, there will be an empty file."),(0,o.yg)("li",{parentName:"ul"},"File spliting will ensure that a row of data is stored in a single file. Therefore, the size of the file is not strictly equal to ",(0,o.yg)("inlineCode",{parentName:"li"},"max_file_size"),"."),(0,o.yg)("li",{parentName:"ul"},"For functions whose output is invisible characters, such as BITMAP and HLL types, the output is ",(0,o.yg)("inlineCode",{parentName:"li"},"\\N"),", which is NULL."),(0,o.yg)("li",{parentName:"ul"},"At present, the output type of some geo functions, such as ",(0,o.yg)("inlineCode",{parentName:"li"},"ST_Point")," is VARCHAR, but the actual output value is an encoded binary character. Currently these functions will output garbled characters. For geo functions, use ",(0,o.yg)("inlineCode",{parentName:"li"},"ST_AsText")," for output.")),(0,o.yg)("h2",{id:"more-help"},"More Help"),(0,o.yg)("p",null,"For more detailed syntax and best practices for using OUTFILE, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"},"OUTFILE")," command manual, you can also More help information can be obtained by typing ",(0,o.yg)("inlineCode",{parentName:"p"},"HELP OUTFILE")," at the command line of the MySql client."))}m.isMDXComponent=!0}}]);