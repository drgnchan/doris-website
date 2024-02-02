"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29840],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>y});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,y=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(45072),r=(a(11504),a(95788));const i={title:"Insert Into",language:"en"},o=void 0,s={unversionedId:"data-operate/import/import-way/insert-into-manual",id:"data-operate/import/import-way/insert-into-manual",title:"Insert Into",description:"\x3c!--",source:"@site/docs/data-operate/import/import-way/insert-into-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/insert-into-manual",permalink:"/docs/dev/data-operate/import/import-way/insert-into-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Insert Into",language:"en"},sidebar:"docs",previous:{title:"S3 Load",permalink:"/docs/dev/data-operate/import/import-way/s3-load-manual"},next:{title:"Importing Data in JSON Format",permalink:"/docs/dev/data-operate/import/import-way/load-json-format"}},l={},m=[{value:"Import operations and load results",id:"import-operations-and-load-results",level:2},{value:"Relevant System Configuration",id:"relevant-system-configuration",level:2},{value:"FE configuration",id:"fe-configuration",level:3},{value:"Session Variables",id:"session-variables",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Application scenarios",id:"application-scenarios",level:3},{value:"Data volume",id:"data-volume",level:3},{value:"Complete examples",id:"complete-examples",level:3},{value:"Common Questions",id:"common-questions",level:2},{value:"more help",id:"more-help",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"insert-into"},"Insert Into"),(0,r.yg)("p",null,"The use of Insert Into statements is similar to that of Insert Into statements in databases such as MySQL. But in Doris, all data writing is a separate import job. So Insert Into is also introduced here as an import method."),(0,r.yg)("p",null,"The main Insert Into command contains the following two kinds;"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"INSERT INTO tbl SELECT ..."),(0,r.yg)("li",{parentName:"ul"},"INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);")),(0,r.yg)("p",null,"The second command is for Demo only, not in a test or production environment."),(0,r.yg)("h2",{id:"import-operations-and-load-results"},"Import operations and load results"),(0,r.yg)("p",null,"The Insert Into command needs to be submitted through MySQL protocol. Creating an import request returns the import result synchronously."),(0,r.yg)("p",null,"The following are examples of the use of two Insert Intos:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO tbl2 WITH LABEL label1 SELECT * FROM tbl3;\nINSERT INTO tbl1 VALUES ("qweasdzxcqweasdzxc"), ("a");\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: When you need to use ",(0,r.yg)("inlineCode",{parentName:"p"},"CTE(Common Table Expressions)")," as the query part in an insert operation, you must specify the ",(0,r.yg)("inlineCode",{parentName:"p"},"WITH LABEL")," and column list parts or wrap ",(0,r.yg)("inlineCode",{parentName:"p"},"CTE"),". Example:"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO tbl1 WITH LABEL label1\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\n\nINSERT INTO tbl1 (k1)\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\nINSERT INTO tbl1 (k1)\nselect * from (\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1) as ret\n"))),(0,r.yg)("p",null,"For specific parameter description, you can refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},"INSERT INTO")," command or execute ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP INSERT ")," to see its help documentation for better use of this import method."),(0,r.yg)("p",null,"Insert Into itself is a SQL command, and the return result is divided into the following types according to the different execution results:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Result set is empty"),(0,r.yg)("p",{parentName:"li"},"If the result set of the insert corresponding SELECT statement is empty, it is returned as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Query OK")," indicates successful execution. ",(0,r.yg)("inlineCode",{parentName:"p"},"0 rows affected")," means that no data was loaded.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The result set is not empty"),(0,r.yg)("p",{parentName:"li"},"In the case where the result set is not empty. The returned results are divided into the following situations:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Insert is successful and data is visible:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Query OK")," indicates successful execution. ",(0,r.yg)("inlineCode",{parentName:"p"},"4 rows affected")," means that a total of 4 rows of data were imported. ",(0,r.yg)("inlineCode",{parentName:"p"},"2 warnings")," indicates the number of lines to be filtered."),(0,r.yg)("p",{parentName:"li"},"Also returns a json string:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005', 'err': 'some other error'}\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"label")," is a user-specified label or an automatically generated label. Label is the ID of this Insert Into load job. Each load job has a label that is unique within a single database."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"status")," indicates whether the loaded data is visible. If visible, show ",(0,r.yg)("inlineCode",{parentName:"p"},"visible"),", if not, show",(0,r.yg)("inlineCode",{parentName:"p"},"committed"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"txnId")," is the id of the load transaction corresponding to this insert."),(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"err")," field displays some other unexpected errors."),(0,r.yg)("p",{parentName:"li"},"When user need to view the filtered rows, the user can use the following statement"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'show load where label = "xxx";\n')),(0,r.yg)("p",{parentName:"li"},"The URL in the returned result can be used to query the wrong data. For details, see the following ",(0,r.yg)("strong",{parentName:"p"},"View Error Lines")," Summary.    ",(0,r.yg)("strong",{parentName:"p"},'"Data is not visible" is a temporary status, this batch of data must be visible eventually')),(0,r.yg)("p",{parentName:"li"},"You can view the visible status of this batch of data with the following statement:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"show transaction where id = 4005;\n")),(0,r.yg)("p",{parentName:"li"},"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"TransactionStatus")," column in the returned result is ",(0,r.yg)("inlineCode",{parentName:"p"},"visible"),", the data is visible.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Insert fails"),(0,r.yg)("p",{parentName:"li"},"Execution failure indicates that no data was successfully loaded, and returns as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. Url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de850e8de850\n')),(0,r.yg)("p",{parentName:"li"},"Where ",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000): all partitions have no load data")," shows the reason for the failure. The latter url can be used to query the wrong data. For details, see the following ",(0,r.yg)("strong",{parentName:"p"},"View Error Lines")," Summary."))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"In summary, the correct processing logic for the results returned by the insert operation should be:")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If the returned result is ",(0,r.yg)("inlineCode",{parentName:"li"},"ERROR 1064 (HY000)"),", it means that the import failed."),(0,r.yg)("li",{parentName:"ol"},"If the returned result is ",(0,r.yg)("inlineCode",{parentName:"li"},"Query OK"),", it means the execution was successful.",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"If ",(0,r.yg)("inlineCode",{parentName:"li"},"rows affected")," is 0, the result set is empty and no data is loaded."),(0,r.yg)("li",{parentName:"ol"},"If",(0,r.yg)("inlineCode",{parentName:"li"},"rows affected")," is greater than 0:",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"If ",(0,r.yg)("inlineCode",{parentName:"li"},"status")," is",(0,r.yg)("inlineCode",{parentName:"li"},"committed"),", the data is not yet visible. You need to check the status through the ",(0,r.yg)("inlineCode",{parentName:"li"},"show transaction")," statement until ",(0,r.yg)("inlineCode",{parentName:"li"},"visible"),"."),(0,r.yg)("li",{parentName:"ol"},"If ",(0,r.yg)("inlineCode",{parentName:"li"},"status")," is",(0,r.yg)("inlineCode",{parentName:"li"},"visible"),", the data is loaded successfully."))),(0,r.yg)("li",{parentName:"ol"},"If ",(0,r.yg)("inlineCode",{parentName:"li"},"warnings")," is greater than 0, it means that some data is filtered. You can get the url through the ",(0,r.yg)("inlineCode",{parentName:"li"},"show load")," statement to see the filtered rows.")))),(0,r.yg)("p",null,"In the previous section, we described how to follow up on the results of insert operations. However, it is difficult to get the json string of the returned result in some mysql libraries. Therefore, Doris also provides the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW LAST INSERT")," command to explicitly retrieve the results of the last insert operation."),(0,r.yg)("p",null,"After executing an insert operation, you can execute ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW LAST INSERT")," on the same session connection. This command returns the result of the most recent insert operation, e.g."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show last insert\\G\n*************************** 1. row ***************************\n    TransactionId: 64067\n            Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n         Database: default_cluster:db1\n            Table: t1\nTransactionStatus: VISIBLE\n       LoadedRows: 2\n     FilteredRows: 0\n")),(0,r.yg)("p",null,"This command returns the insert results and the details of the corresponding transaction. Therefore, you can continue to execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"show last insert")," command after each insert operation to get the insert results."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: This command will only return the results of the last insert operation within the same session connection. If the connection is broken or replaced with a new one, the empty set will be returned.")),(0,r.yg)("h2",{id:"relevant-system-configuration"},"Relevant System Configuration"),(0,r.yg)("h3",{id:"fe-configuration"},"FE configuration"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"time out"),(0,r.yg)("p",{parentName:"li"},"The timeout time of the import task (in seconds) will be cancelled by the system if the import task is not completed within the set timeout time, and will become CANCELLED."),(0,r.yg)("p",{parentName:"li"},"At present, Insert Into does not support custom import timeout time. All Insert Into imports have a uniform timeout time. The default timeout time is 4 hours. If the imported source file cannot complete the import within the specified time, the parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"insert_load_default_timeout_second")," of FE needs to be adjusted."),(0,r.yg)("version",{since:"dev"}),"At the same time, the Insert Into statement receives the restriction of the Session variable `insert_timeout`. You can increase the timeout time by `SET insert_timeout = xxx;` in seconds.")),(0,r.yg)("h3",{id:"session-variables"},"Session Variables"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"enable_insert_strict"),(0,r.yg)("p",{parentName:"li"},"The Insert Into import itself cannot control the tolerable error rate of the import. Users can only use the Session parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),". When this parameter is set to false, it indicates that at least one data has been imported correctly, and then it returns successfully. When this parameter is set to true, the import fails if there is a data error. The default is false. It can be set by ",(0,r.yg)("inlineCode",{parentName:"p"},"SET enable_insert_strict = true;"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"query_timeout"),(0,r.yg)("p",{parentName:"li"},"Insert Into itself is also an SQL command, and the Insert Into statement is restricted by the Session variable ",(0,r.yg)("version",{since:"dev",type:"inline"},(0,r.yg)("inlineCode",{parentName:"p"},"insert_timeout")),". You can increase the timeout time by ",(0,r.yg)("inlineCode",{parentName:"p"},"SET insert_timeout = xxx;")," in seconds."))),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("h3",{id:"application-scenarios"},"Application scenarios"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Users want to import only a few false data to verify the functionality of Doris system. The grammar of INSERT INTO VALUES is suitable at this time."),(0,r.yg)("li",{parentName:"ol"},"Users want to convert the data already in the Doris table into ETL and import it into a new Doris table, which is suitable for using INSERT INTO SELECT grammar."),(0,r.yg)("li",{parentName:"ol"},"Users can create an external table, such as MySQL external table mapping a table in MySQL system. Or create Broker external tables to map data files on HDFS. Then the data from the external table is imported into the Doris table for storage through the INSERT INTO SELECT grammar.")),(0,r.yg)("h3",{id:"data-volume"},"Data volume"),(0,r.yg)("p",null,"Insert Into has no limitation on the amount of data, and large data imports can also be supported. However, Insert Into has a default timeout time, and the amount of imported data estimated by users is too large, so it is necessary to modify the system's Insert Into import timeout time."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"Import data volume = 36G or less than 3600s*10M/s\nAmong them, 10M/s is the maximum import speed limit. Users need to calculate the average import speed according to the current cluster situation to replace 10M/s in the formula.\n")),(0,r.yg)("h3",{id:"complete-examples"},"Complete examples"),(0,r.yg)("p",null,"Users have a table store sales in the database sales. Users create a table called bj store sales in the database sales. Users want to import the data recorded in the store sales into the new table bj store sales. The amount of data imported is about 10G."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"large sales scheme\n(id, total, user_id, sale_timestamp, region)\n\nOrder large sales schedule:\n(id, total, user_id, sale_timestamp)\n")),(0,r.yg)("p",null,"Cluster situation: The average import speed of current user cluster is about 5M/s"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step1: Determine whether you want to modify the default timeout of Insert Into"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"Calculate the approximate time of import\n10G / 5M /s = 2000s\n\nModify FE configuration\ninsert_load_default_timeout_second = 2000\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step2: Create Import Tasks"),(0,r.yg)("p",{parentName:"li"},"Since users want to ETL data from a table and import it into the target table, they should use the Insert in query\\stmt mode to import it."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'INSERT INTO bj_store_sales SELECT id, total, user_id, sale_timestamp FROM store_sales where region = "bj";\n')))),(0,r.yg)("h2",{id:"common-questions"},"Common Questions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"View the wrong line"),(0,r.yg)("p",{parentName:"li"},"Because Insert Into can't control the error rate, it can only tolerate or ignore the error data completely by ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),". So if ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," is set to true, Insert Into may fail. If ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," is set to false, then only some qualified data may be imported. However, in either case, Doris is currently unable to provide the ability to view substandard data rows. Therefore, the user cannot view the specific import error through the Insert Into statement."),(0,r.yg)("p",{parentName:"li"},"The causes of errors are usually: source data column length exceeds destination data column length, column type mismatch, partition mismatch, column order mismatch, etc. When it's still impossible to check for problems. At present, it is only recommended that the SELECT command in the Insert Into statement be run to export the data to a file, and then import the file through Stream load to see the specific errors."))),(0,r.yg)("h2",{id:"more-help"},"more help"),(0,r.yg)("p",null,"For more detailed syntax and best practices used by insert into, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},"insert")," command manual, you can also enter ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP INSERT")," in the MySql client command line for more help information."))}u.isMDXComponent=!0}}]);