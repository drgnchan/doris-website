"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[80820],{95788:(e,a,t)=>{t.d(a,{Iu:()=>m,yg:()=>c});var n=t(11504);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=s(t),y=r,c=g["".concat(p,".").concat(y)]||g[y]||d[y]||i;return t?n.createElement(c,l(l({ref:a},m),{},{components:t})):n.createElement(c,l({ref:a},m))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},72084:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(45072),r=(t(11504),t(95788));const i={title:"CREATE-ROUTINE-LOAD",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",title:"CREATE-ROUTINE-LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-ROUTINE-LOAD",language:"en"},sidebar:"docs",previous:{title:"RESUME-SYNC-JOB",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB"},next:{title:"STOP-ROUTINE-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD"}},p={},s=[{value:"CREATE-ROUTINE-LOAD",id:"create-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},g="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.c)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-routine-load"},"CREATE-ROUTINE-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE ROUTINE LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"The Routine Load function allows users to submit a resident import task, and import data into Doris by continuously reading data from a specified data source."),(0,r.yg)("p",null,"Currently, only data in CSV or Json format can be imported from Kakfa through unauthenticated or SSL authentication."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD [db.]job_name ON tbl_name\n[merge_type]\n[load_properties]\n[job_properties]\nFROM data_source [data_source_properties]\n[COMMENT "comment"]\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"[db.]job_name")),(0,r.yg)("p",{parentName:"li"},"The name of the import job. Within the same database, only one job with the same name can be running.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"tbl_name")),(0,r.yg)("p",{parentName:"li"},"Specifies the name of the table to be imported.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"merge_type")),(0,r.yg)("p",{parentName:"li"},"Data merge type. The default is APPEND, which means that the imported data are ordinary append write operations. The MERGE and DELETE types are only available for Unique Key model tables. The MERGE type needs to be used with the ","[DELETE ON]"," statement to mark the Delete Flag column. The DELETE type means that all imported data are deleted data.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"load_properties"),(0,r.yg)("p",{parentName:"li"},"Used to describe imported data. The composition is as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"[column_separator],\n[columns_mapping],\n[preceding_filter],\n[where_predicates],\n[partitions],\n[DELETE ON],\n[ORDER BY]\n")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"column_separator")),(0,r.yg)("p",{parentName:"li"},"Specifies the column separator, defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"\\t")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'COLUMNS TERMINATED BY ","'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"columns_mapping")),(0,r.yg)("p",{parentName:"li"},"It is used to specify the mapping relationship between file columns and columns in the table, as well as various column transformations. For a detailed introduction to this part, you can refer to the ","[Column Mapping, Transformation and Filtering]"," document."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"(k1, k2, tmpk1, k3 = tmpk1 + 1)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"preceding_filter")),(0,r.yg)("p",{parentName:"li"},"Filter raw data. For a detailed introduction to this part, you can refer to the ","[Column Mapping, Transformation and Filtering]"," document.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"where_predicates")),(0,r.yg)("p",{parentName:"li"},"Filter imported data based on conditions. For a detailed introduction to this part, you can refer to the ","[Column Mapping, Transformation and Filtering]"," document."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"WHERE k1 > 100 and k2 = 1000"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"partitions")),(0,r.yg)("p",{parentName:"li"},"Specify in which partitions of the import destination table. If not specified, it will be automatically imported into the corresponding partition."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"PARTITION(p1, p2, p3)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"DELETE ON")),(0,r.yg)("p",{parentName:"li"},"It needs to be used with the MEREGE import mode, only for the table of the Unique Key model. Used to specify the columns and calculated relationships in the imported data that represent the Delete Flag."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"DELETE ON v3 >100"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"ORDER BY")),(0,r.yg)("p",{parentName:"li"},"Tables only for the Unique Key model. Used to specify the column in the imported data that represents the Sequence Col. Mainly used to ensure data order when importing.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"job_properties")),(0,r.yg)("p",{parentName:"li"},"Common parameters for specifying routine import jobs."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'PROPERTIES (\n    "key1" = "val1",\n    "key2" = "val2"\n)\n')),(0,r.yg)("p",{parentName:"li"},"Currently we support the following parameters:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"desired_concurrent_number")),(0,r.yg)("p",{parentName:"li"},"Desired concurrency. A routine import job will be divided into multiple subtasks for execution. This parameter specifies the maximum number of tasks a job can execute concurrently. Must be greater than 0. Default is 3."),(0,r.yg)("p",{parentName:"li"},"This degree of concurrency is not the actual degree of concurrency. The actual degree of concurrency will be comprehensively considered by the number of nodes in the cluster, the load situation, and the situation of the data source."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'"desired_concurrent_number" = "3"'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"max_batch_interval/max_batch_rows/max_batch_size")),(0,r.yg)("p",{parentName:"li"},"These three parameters represent:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"The maximum execution time of each subtask, in seconds. The range is 5 to 60. Default is 10."),(0,r.yg)("li",{parentName:"ol"},"The maximum number of lines read by each subtask. Must be greater than or equal to 200000. The default is 200000."),(0,r.yg)("li",{parentName:"ol"},"The maximum number of bytes read by each subtask. The unit is bytes and the range is 100MB to 1GB. The default is 100MB.")),(0,r.yg)("p",{parentName:"li"},"These three parameters are used to control the execution time and processing volume of a subtask. When either one reaches the threshold, the task ends."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'"max_batch_interval" = "20",\n"max_batch_rows" = "300000",\n"max_batch_size" = "209715200"\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"max_error_number")),(0,r.yg)("p",{parentName:"li"},"The maximum number of error lines allowed within the sampling window. Must be greater than or equal to 0. The default is 0, which means no error lines are allowed."),(0,r.yg)("p",{parentName:"li"},"The sampling window is ",(0,r.yg)("inlineCode",{parentName:"p"},"max_batch_rows * 10"),". That is, if the number of error lines is greater than ",(0,r.yg)("inlineCode",{parentName:"p"},"max_error_number")," within the sampling window, the routine operation will be suspended, requiring manual intervention to check data quality problems."),(0,r.yg)("p",{parentName:"li"},"Rows that are filtered out by where conditions are not considered error rows.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"strict_mode")),(0,r.yg)("p",{parentName:"li"},"Whether to enable strict mode, the default is off. If enabled, the column type conversion of non-null raw data will be filtered if the result is NULL. Specify as:"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'"strict_mode" = "true"')),(0,r.yg)("p",{parentName:"li"},"The strict mode mode means strict filtering of column type conversions during the load process. The strict filtering strategy is as follows:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"For column type conversion, if strict mode is true, the wrong data will be filtered. The error data here refers to the fact that the original data is not null, and the result is a null value after participating in the column type conversion."),(0,r.yg)("li",{parentName:"ol"},"When a loaded column is generated by a function transformation, strict mode has no effect on it."),(0,r.yg)("li",{parentName:"ol"},"For a column type loaded with a range limit, if the original data can pass the type conversion normally, but cannot pass the range limit, strict mode will not affect it. For example, if the type is decimal(1,0) and the original data is 10, it is eligible for type conversion but not for column declarations. This data strict has no effect on it.")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"strict mode and load relationship of source data")),(0,r.yg)("p",{parentName:"li"},"Here is an example of a column type of TinyInt."),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Note: When a column in a table allows a null value to be loaded")),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"source data"),(0,r.yg)("th",{parentName:"tr",align:null},"source data example"),(0,r.yg)("th",{parentName:"tr",align:null},"string to int"),(0,r.yg)("th",{parentName:"tr",align:null},"strict_mode"),(0,r.yg)("th",{parentName:"tr",align:null},"result"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"null"),(0,r.yg)("td",{parentName:"tr",align:null},"\\N"),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"true or false"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"not null"),(0,r.yg)("td",{parentName:"tr",align:null},"aaa or 2000"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"invalid data(filtered)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"not null"),(0,r.yg)("td",{parentName:"tr",align:null},"aaa"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"not null"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"true or false"),(0,r.yg)("td",{parentName:"tr",align:null},"correct data")))),(0,r.yg)("p",{parentName:"li"},"Here the column type is Decimal(1,0)"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Note: When a column in a table allows a null value to be loaded")),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"source data"),(0,r.yg)("th",{parentName:"tr",align:null},"source data example"),(0,r.yg)("th",{parentName:"tr",align:null},"string to int"),(0,r.yg)("th",{parentName:"tr",align:null},"strict_mode"),(0,r.yg)("th",{parentName:"tr",align:null},"result"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"null"),(0,r.yg)("td",{parentName:"tr",align:null},"\\N"),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"true or false"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"not null"),(0,r.yg)("td",{parentName:"tr",align:null},"aaa"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"invalid data(filtered)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"not null"),(0,r.yg)("td",{parentName:"tr",align:null},"aaa"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"not null"),(0,r.yg)("td",{parentName:"tr",align:null},"1 or 10"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"true or false"),(0,r.yg)("td",{parentName:"tr",align:null},"correct data")))),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Note: 10 Although it is a value that is out of range, because its type meets the requirements of decimal, strict mode has no effect on it. 10 will eventually be filtered in other ETL processing flows. But it will not be filtered by strict mode."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"timezone")),(0,r.yg)("p",{parentName:"li"},"Specifies the time zone used by the import job. The default is to use the Session's timezone parameter. This parameter affects the results of all time zone-related functions involved in the import.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"format")),(0,r.yg)("p",{parentName:"li"},"Specify the import data format, the default is csv, and the json format is supported.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"jsonpaths")),(0,r.yg)("p",{parentName:"li"},"When the imported data format is json, the fields in the Json data can be extracted by specifying jsonpaths."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'-H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]"'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"strip_outer_array")),(0,r.yg)("p",{parentName:"li"},"When the imported data format is json, strip_outer_array is true, indicating that the Json data is displayed in the form of an array, and each element in the data will be regarded as a row of data. The default value is false."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'-H "strip_outer_array: true"'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"json_root")),(0,r.yg)("p",{parentName:"li"},"When the import data format is json, you can specify the root node of the Json data through json_root. Doris will extract the elements of the root node through json_root for parsing. Default is empty."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'-H "json_root: $.RECORDS"'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"send_batch_parallelism")),(0,r.yg)("p",{parentName:"li"},"Integer, Used to set the default parallelism for sending batch, if the value for parallelism exceed ",(0,r.yg)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job")," in BE config, then the coordinator BE will use the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"load_to_single_tablet"),"\nBoolean type, True means that one task can only load data to one tablet in the corresponding partition at a time. The default value is false. This parameter can only be set when loading data into the OLAP table with random partition.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"FROM data_source [data_source_properties]")),(0,r.yg)("p",{parentName:"li"},"The type of data source. Currently supports:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'FROM KAFKA\n(\n    "key1" = "val1",\n    "key2" = "val2"\n)\n')),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"data_source_properties")," supports the following data source properties:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"kafka_broker_list")),(0,r.yg)("p",{parentName:"li"},"Kafka's broker connection information. The format is ip:host. Separate multiple brokers with commas."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'"kafka_broker_list" = "broker1:9092,broker2:9092"'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"kafka_topic")),(0,r.yg)("p",{parentName:"li"},"Specifies the Kafka topic to subscribe to."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'"kafka_topic" = "my_topic"'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"kafka_partitions/kafka_offsets")),(0,r.yg)("p",{parentName:"li"},"Specify the kafka partition to be subscribed to, and the corresponding starting offset of each partition. If a time is specified, consumption will start at the nearest offset greater than or equal to the time."),(0,r.yg)("p",{parentName:"li"},"offset can specify a specific offset from 0 or greater, or:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OFFSET_BEGINNING"),": Start subscription from where there is data."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OFFSET_END"),": subscribe from the end."),(0,r.yg)("li",{parentName:"ul"},'Time format, such as: "2021-05-22 11:00:00"')),(0,r.yg)("p",{parentName:"li"},"If not specified, all partitions under topic will be subscribed from ",(0,r.yg)("inlineCode",{parentName:"p"},"OFFSET_END")," by default."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'"kafka_partitions" = "0,1,2,3",\n"kafka_offsets" = "101,0,OFFSET_BEGINNING,OFFSET_END"\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'"kafka_partitions" = "0,1,2,3",\n"kafka_offsets" = "2021-05-22 11:00:00,2021-05-22 11:00:00,2021-05-22 11:00:00"\n')),(0,r.yg)("p",{parentName:"li"},"Note that the time format cannot be mixed with the OFFSET format.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"property")),(0,r.yg)("p",{parentName:"li"},'Specify custom kafka parameters. The function is equivalent to the "--property" parameter in the kafka shell.'),(0,r.yg)("p",{parentName:"li"},'When the value of the parameter is a file, you need to add the keyword: "FILE:" before the value.'),(0,r.yg)("p",{parentName:"li"},"For how to create a file, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"../../../Data-Definition-Statements/Create/CREATE-FILE"},"CREATE FILE")," command documentation."),(0,r.yg)("p",{parentName:"li"},"For more supported custom parameters, please refer to the configuration items on the client side in the official CONFIGURATION document of librdkafka. Such as:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'"property.client.id" = "12345",\n"property.ssl.ca.location" = "FILE:ca.pem"\n')),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When connecting to Kafka using SSL, you need to specify the following parameters:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'"property.security.protocol" = "ssl",\n"property.ssl.ca.location" = "FILE:ca.pem",\n"property.ssl.certificate.location" = "FILE:client.pem",\n"property.ssl.key.location" = "FILE:client.key",\n"property.ssl.key.password" = "abcdefg"\n')),(0,r.yg)("p",{parentName:"li"},"in:"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"property.security.protocol")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"property.ssl.ca.location")," are required to indicate the connection method is SSL and the location of the CA certificate."),(0,r.yg)("p",{parentName:"li"},"If client authentication is enabled on the Kafka server side, thenAlso set:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'"property.ssl.certificate.location"\n"property.ssl.key.location"\n"property.ssl.key.password"\n')),(0,r.yg)("p",{parentName:"li"},"They are used to specify the client's public key, private key, and password for the private key, respectively.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Specify the default starting offset of the kafka partition"),(0,r.yg)("p",{parentName:"li"},"If ",(0,r.yg)("inlineCode",{parentName:"p"},"kafka_partitions/kafka_offsets")," is not specified, all partitions are consumed by default."),(0,r.yg)("p",{parentName:"li"},"At this point, you can specify ",(0,r.yg)("inlineCode",{parentName:"p"},"kafka_default_offsets")," to specify the starting offset. Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"OFFSET_END"),", i.e. subscribes from the end."),(0,r.yg)("p",{parentName:"li"},"Example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'"property.kafka_default_offsets" = "OFFSET_BEGINNING"\n'))))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("version",{since:"1.2.3",type:"inline"}," comment "),"Comment for the routine load job.")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a Kafka routine import task named test1 for example_tbl of example_db. Specify the column separator and group.id and client.id, and automatically consume all partitions by default, and start subscribing from the location where there is data (OFFSET_BEGINNING)")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS TERMINATED BY ",",\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100)\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.group.id" = "xxx",\n    "property.client.id" = "xxx",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Create a Kafka routine import task named test1 for example_tbl of example_db. Import tasks are in strict mode.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > 100 and k2 like "%doris%"\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2,3",\n    "kafka_offsets" = "101,0,0,200"\n);\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Import data from the Kafka cluster through SSL authentication. Also set the client.id parameter. The import task is in non-strict mode and the time zone is Africa/Abidjan")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nWHERE k1 > 100 and k2 like "%doris%"\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "timezone" = "Africa/Abidjan"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.security.protocol" = "ssl",\n    "property.ssl.ca.location" = "FILE:ca.pem",\n    "property.ssl.certificate.location" = "FILE:client.pem",\n    "property.ssl.key.location" = "FILE:client.key",\n    "property.ssl.key.password" = "abcdefg",\n    "property.client.id" = "my_client_id"\n);\n')),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Import data in Json format. By default, the field name in Json is used as the column name mapping. Specify to import three partitions 0, 1, and 2, and the starting offsets are all 0")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_json_label_1 ON table1\nCOLUMNS(category,price,author)\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "format" = "json"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n);\n')),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Import Json data, extract fields through Jsonpaths, and specify the root node of the Json document")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "format" = "json",\n    "jsonpaths" = "[\\"$.category\\",\\"$.author\\",\\"$.price\\",\\"$.timestamp\\"]",\n    "json_root" = "$.RECORDS"\n    "strip_outer_array" = "true"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n);\n')),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Create a Kafka routine import task named test1 for example_tbl of example_db. And use conditional filtering.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nWITH MERGE\nCOLUMNS(k1, k2, k3, v1, v2, v3),\nWHERE k1 > 100 and k2 like "%doris%",\nDELETE ON v3 >100\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2,3",\n    "kafka_offsets" = "101,0,0,200"\n);\n')),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"Import data to Unique with sequence column Key model table")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_job ON example_tbl\nCOLUMNS TERMINATED BY ",",\nCOLUMNS(k1,k2,source_sequence,v1,v2),\nORDER BY source_sequence\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "30",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200"\n) FROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2,3",\n    "kafka_offsets" = "101,0,0,200"\n);\n')),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},"Consume from a specified point in time")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_job ON example_tbl\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "30",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200"\n) FROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_default_offset" = "2021-05-21 10:00:00"\n);\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, ROUTINE, LOAD, CREATE LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("p",null,"Partition and Offset for specified consumption"),(0,r.yg)("p",null,"Doris supports the specified Partition and Offset to start consumption, and also supports the function of consumption at a specified time point. The configuration relationship of the corresponding parameters is described here."),(0,r.yg)("p",null,"There are three relevant parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_partitions"),': Specify a list of partitions to be consumed, such as "0, 1, 2, 3".'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_offsets"),": Specify the starting offset of each partition, which must correspond to the number of ",(0,r.yg)("inlineCode",{parentName:"li"},"kafka_partitions"),' list. For example: "1000, 1000, 2000, 2000"'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"property.kafka_default_offset"),": Specifies the default starting offset of the partition.")),(0,r.yg)("p",null,"When creating an import job, these three parameters can have the following combinations:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Composition"),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"kafka_partitions")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"kafka_offsets")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"property.kafka_default_offset")),(0,r.yg)("th",{parentName:"tr",align:null},"Behavior"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"The system will automatically find all partitions corresponding to the topic and start consumption from OFFSET_END")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"The system will automatically find all partitions corresponding to the topic and start consumption from the location specified by default offset")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"The system will start consumption from OFFSET_END of the specified partition")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"The system will start consumption from the specified offset of the specified partition")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"The system will start consumption from the specified partition, the location specified by default offset")))))}d.isMDXComponent=!0}}]);