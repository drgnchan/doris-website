"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98640],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=i,y=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(y,l(l({ref:t},m),{},{components:a})):n.createElement(y,l({ref:t},m))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},880426:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(58168),i=(a(296540),a(15680));const r={title:"INSERT",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",title:"INSERT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",draft:!1,tags:[],version:"2.0",frontMatter:{title:"INSERT",language:"en"},sidebar:"docs",previous:{title:"CLEAN-LABEL",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL"},next:{title:"SELECT",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT"}},s={},p=[{value:"INSERT",id:"insert",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"insert"},"INSERT"),(0,i.yg)("h3",{id:"name"},"Name"),(0,i.yg)("p",null,"INSERT"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"The change statement is to complete the data insertion operation."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")),(0,i.yg)("p",null," Parameters"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"tablet_name: The destination table for importing data. Can be of the form ",(0,i.yg)("inlineCode",{parentName:"p"},"db_name.table_name")),(0,i.yg)("p",{parentName:"blockquote"},"partitions: Specify the partitions to be imported, which must be partitions that exist in ",(0,i.yg)("inlineCode",{parentName:"p"},"table_name"),". Multiple partition names are separated by commas"),(0,i.yg)("p",{parentName:"blockquote"},"label: specify a label for the Insert task"),(0,i.yg)("p",{parentName:"blockquote"},"column_name: The specified destination column, must be a column that exists in ",(0,i.yg)("inlineCode",{parentName:"p"},"table_name")),(0,i.yg)("p",{parentName:"blockquote"},"expression: the corresponding expression that needs to be assigned to a column"),(0,i.yg)("p",{parentName:"blockquote"},"DEFAULT: let the corresponding column use the default value"),(0,i.yg)("p",{parentName:"blockquote"},"query: a common query, the result of the query will be written to the target"),(0,i.yg)("p",{parentName:"blockquote"},"hint: some indicator used to indicate the execution behavior of ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT"),". You can choose one of this values: ",(0,i.yg)("inlineCode",{parentName:"p"},"/*+ STREAMING */"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"/*+ SHUFFLE */")," or `/",(0,i.yg)("em",{parentName:"p"},"+ NOSHUFFLE "),"/."),(0,i.yg)("ol",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ol"},"STREAMING: At present, it has no practical effect and is only reserved for compatibility with previous versions. (In the previous version, adding this hint would return a label, but now it defaults to returning a label)"),(0,i.yg)("li",{parentName:"ol"},"SHUFFLE: When the target table is a partition table, enabling this hint will do repartiiton."),(0,i.yg)("li",{parentName:"ol"},"NOSHUFFLE: Even if the target table is a partition table, repartiiton will not be performed, but some other operations will be performed to ensure that the data is correctly dropped into each partition."))),(0,i.yg)("p",null,"For a Unique table with merge-on-write enabled, you can also perform partial columns updates using the insert statement. To perform partial column updates with the insert statement, you need to set the session variable enable_unique_key_partial_update to true (the default value for this variable is false, meaning partial columns updates with the insert statement are not allowed by default). When performing partial columns updates, the columns being inserted must contain at least all the Key columns and specify the columns you want to update. If the Key column values for the inserted row already exist in the original table, the data in the row with the same key column values will be updated. If the Key column values for the inserted row do not exist in the original table, a new row will be inserted into the table. In this case, columns not specified in the insert statement must either have default values or be nullable. These missing columns will first attempt to be populated with default values, and if a column has no default value, it will be filled with null. If a column cannot be null, the insert operation will fail."),(0,i.yg)("p",null,"Please note that the default value of the session variable ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),", which controls whether the insert statement operates in strict mode, is true. In other words, the insert statement is in strict mode by default, and in this mode, updating non-existing keys in partial column updates is not allowed. Therefore, when using the insert statement for partial columns update and wishing to insert non-existing keys, you need to set ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_unique_key_partial_update")," to true and simultaneously set ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," to false."),(0,i.yg)("p",null,"Notice:"),(0,i.yg)("p",null,"When executing the ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT")," statement, the default behavior is to filter the data that does not conform to the target table format, such as the string is too long. However, for business scenarios that require data not to be filtered, you can set the session variable ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," to ensure that ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT")," will not be executed successfully when data is filtered out."),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table contains two columns ",(0,i.yg)("inlineCode",{parentName:"p"},"c1"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"c2"),"."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Import a row of data into the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n")),(0,i.yg)("p",null,"The first and second statements have the same effect. When no target column is specified, the column order in the table is used as the default target column.\nThe third and fourth statements express the same meaning, use the default value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"c2")," column to complete the data import."),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Import multiple rows of data into the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table at one time")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1) VALUES (1), (3);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\n")),(0,i.yg)("p",null,"The first and second statements have the same effect, import two pieces of data into the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table at one time\nThe effect of the third and fourth statements is known, and the default value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"c2")," column is used to import two pieces of data into the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," table"),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Import a query result into the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n")),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Import a query result into the ",(0,i.yg)("inlineCode",{parentName:"li"},"test")," table, specifying the partition and label")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"INSERT\n")),(0,i.yg)("h3",{id:"best-practice"},"Best Practice"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"View the returned results"),(0,i.yg)("p",{parentName:"li"},"The INSERT operation is a synchronous operation, and the return of the result indicates the end of the operation. Users need to perform corresponding processing according to the different returned results."),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The execution is successful, the result set is empty"),(0,i.yg)("p",{parentName:"li"},"If the result set of the insert corresponding to the select statement is empty, it will return as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"Query OK")," indicates successful execution. ",(0,i.yg)("inlineCode",{parentName:"p"},"0 rows affected")," means that no data was imported.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The execution is successful, the result set is not empty"),(0,i.yg)("p",{parentName:"li"},"In the case where the result set is not empty. The returned results are divided into the following situations:"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Insert executes successfully and is visible:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"Query OK")," indicates successful execution. ",(0,i.yg)("inlineCode",{parentName:"p"},"4 rows affected")," means that a total of 4 rows of data were imported. ",(0,i.yg)("inlineCode",{parentName:"p"},"2 warnings")," indicates the number of lines to be filtered."),(0,i.yg)("p",{parentName:"li"},"Also returns a json string:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-json"},"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"label")," is a user-specified label or an automatically generated label. Label is the ID of this Insert Into import job. Each import job has a unique Label within a single database."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"status")," indicates whether the imported data is visible. Show ",(0,i.yg)("inlineCode",{parentName:"p"},"visible")," if visible, ",(0,i.yg)("inlineCode",{parentName:"p"},"committed")," if not visible."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"txnId")," is the id of the import transaction corresponding to this insert."),(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"err")," field shows some other unexpected errors."),(0,i.yg)("p",{parentName:"li"},"When you need to view the filtered rows, the user can pass the following statement"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'show load where label="xxx";\n')),(0,i.yg)("p",{parentName:"li"},"The URL in the returned result can be used to query the wrong data. For details, see the summary of ",(0,i.yg)("strong",{parentName:"p"},"Viewing Error Lines")," later."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Invisibility of data is a temporary state, this batch of data will eventually be visible")),(0,i.yg)("p",{parentName:"li"},"You can view the visible status of this batch of data with the following statement:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"show transaction where id=4005;\n")),(0,i.yg)("p",{parentName:"li"},"If the ",(0,i.yg)("inlineCode",{parentName:"p"},"TransactionStatus")," column in the returned result is ",(0,i.yg)("inlineCode",{parentName:"p"},"visible"),", the representation data is visible.")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Execution failed"),(0,i.yg)("p",{parentName:"li"},"Execution failure indicates that no data was successfully imported, and the following is returned:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0\n')),(0,i.yg)("p",{parentName:"li"},"Where ",(0,i.yg)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000): all partitions have no load data")," shows the reason for the failure. The following url can be used to query the wrong data:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'show load warnings on "url";\n')),(0,i.yg)("p",{parentName:"li"},"You can view the specific error line.")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Timeout time"),(0,i.yg)("version",{since:"dev"}),"The timeout for INSERT operations is controlled by [session variable](/docs/2.0/advanced/variables) `insert_timeout`. The default is 4 hours. If it times out, the job will be canceled."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Label and atomicity"),(0,i.yg)("p",{parentName:"li"},"The INSERT operation also guarantees the atomicity of imports, see the ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.0/data-operate/import/import-scenes/load-atomicity"},"Import Transactions and Atomicity")," documentation."),(0,i.yg)("p",{parentName:"li"},"When using ",(0,i.yg)("inlineCode",{parentName:"p"},"CTE(Common Table Expressions)")," as the query part in an insert operation, the ",(0,i.yg)("inlineCode",{parentName:"p"},"WITH LABEL")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"column")," parts must be specified.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Filter Threshold"),(0,i.yg)("p",{parentName:"li"},"Unlike other import methods, INSERT operations cannot specify a filter threshold (",(0,i.yg)("inlineCode",{parentName:"p"},"max_filter_ratio"),"). The default filter threshold is 1, which means that rows with errors can be ignored."),(0,i.yg)("p",{parentName:"li"},"For business scenarios that require data not to be filtered, you can set ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.0/advanced/variables"},"session variable")," ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," to ensure that when there is data When filtered out, ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT")," will not be executed successfully.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Performance issues"),(0,i.yg)("p",{parentName:"li"},"There is no single row insertion using the ",(0,i.yg)("inlineCode",{parentName:"p"},"VALUES")," method. If you must use it this way, combine multiple rows of data into one INSERT statement for bulk commit."))))}c.isMDXComponent=!0}}]);