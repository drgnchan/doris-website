"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:l,r[1]=u;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const o={title:"Sequence Column",language:"en"},r=void 0,u={unversionedId:"data-operate/update-delete/sequence-column-manual",id:"data-operate/update-delete/sequence-column-manual",title:"Sequence Column",description:"\x3c!--",source:"@site/docs/data-operate/update-delete/sequence-column-manual.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/sequence-column-manual",permalink:"/docs/dev/data-operate/update-delete/sequence-column-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Sequence Column",language:"en"},sidebar:"docs",previous:{title:"Delete",permalink:"/docs/dev/data-operate/update-delete/delete-manual"},next:{title:"Schema Change",permalink:"/docs/dev/advanced/alter-table/schema-change"}},i={},s=[{value:"Applicable scene",id:"applicable-scene",level:2},{value:"Fundamental",id:"fundamental",level:2},{value:"Create Table",id:"create-table",level:3},{value:"Import",id:"import",level:3},{value:"Read",id:"read",level:3},{value:"Cumulative Compaction",id:"cumulative-compaction",level:3},{value:"Base Compaction",id:"base-compaction",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Set <code>sequence_col</code>(recommend)",id:"set-sequence_colrecommend",level:4},{value:"Set <code>sequence_type</code>",id:"set-sequence_type",level:3},{value:"Stream Load",id:"stream-load",level:4},{value:"Broker Load",id:"broker-load",level:4},{value:"Routine Load",id:"routine-load",level:4},{value:"Enable sequence column support",id:"enable-sequence-column-support",level:2},{value:"Usage example",id:"usage-example",level:2},{value:"Note",id:"note",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sequence-column"},"Sequence Column"),(0,l.kt)("p",null,"The sequence column currently only supports the Uniq model. The Uniq model is mainly aimed at scenarios that require a unique primary key, which can guarantee the uniqueness constraint of the primary key. However, due to the REPLACE aggregation method, the replacement order of data imported in the same batch is not guaranteed. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/dev/data-table/data-model"},"Data Model"),". If the replacement order cannot be guaranteed, the specific data finally imported into the table cannot be determined, and there is uncertainty."),(0,l.kt)("p",null,"In order to solve this problem, Doris supports the sequence column. The user specifies the sequence column when importing. Under the same key column, the REPLACE aggregation type column will be replaced according to the value of the sequence column. The larger value can replace the smaller value, and vice versa. Cannot be replaced. This method leaves the determination of the order to the user, who controls the replacement order."),(0,l.kt)("h2",{id:"applicable-scene"},"Applicable scene"),(0,l.kt)("p",null,"Sequence columns can only be used under the Uniq data model."),(0,l.kt)("h2",{id:"fundamental"},"Fundamental"),(0,l.kt)("p",null,"By adding a hidden column ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),", the type of the column is specified by the user when creating the table, the specific value of the column is determined during import, and the REPLACE column is replaced according to this value."),(0,l.kt)("h3",{id:"create-table"},"Create Table"),(0,l.kt)("p",null,"When creating a Uniq table, a hidden column ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__")," will be automatically added according to the user-specified type."),(0,l.kt)("h3",{id:"import"},"Import"),(0,l.kt)("p",null,"When importing, fe sets the value of the hidden column to the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"order by")," expression (broker load and routine load), or the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"function_column.sequence_col")," expression (stream load) during the parsing process, the value column will be Replace with this value. The value of the hidden column ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__")," can be set to either a column in the data source or a column in the table structure."),(0,l.kt)("h3",{id:"read"},"Read"),(0,l.kt)("p",null,"When the request contains the value column, the ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__")," column needs to be additionally read. This column is used as the basis for the replacement order of the REPLACE aggregate function under the same key column. The larger value can replace the smaller value, otherwise it cannot be replaced."),(0,l.kt)("h3",{id:"cumulative-compaction"},"Cumulative Compaction"),(0,l.kt)("p",null,"The principle is the same as that of the reading process during Cumulative Compaction."),(0,l.kt)("h3",{id:"base-compaction"},"Base Compaction"),(0,l.kt)("p",null,"The principle is the same as the reading process during Base Compaction."),(0,l.kt)("h3",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"There are two ways to create a table with sequence column. One is to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"sequence_col")," attribute when creating a table, and the other is to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"sequence_type")," attribute when creating a table."),(0,l.kt)("h4",{id:"set-sequence_colrecommend"},"Set ",(0,l.kt)("inlineCode",{parentName:"h4"},"sequence_col"),"(recommend)"),(0,l.kt)("p",null,"When you create the Uniq table, you can specify the mapping of sequence column to other columns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"PROPERTIES (\n    \"function_column.sequence_col\" = 'column_name',\n);\n")),(0,l.kt)("p",null,"The sequence_col is used to specify the mapping of the sequence column to a column in the table, which can be integral and time (DATE, DATETIME). The type of this column cannot be changed after creation."),(0,l.kt)("p",null,"The import method is the same as that without the sequence column. It is relatively simple and recommended."),(0,l.kt)("h3",{id:"set-sequence_type"},"Set ",(0,l.kt)("inlineCode",{parentName:"h3"},"sequence_type")),(0,l.kt)("p",null,"When you create the Uniq table, you can specify the sequence column type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"PROPERTIES (\n    \"function_column.sequence_type\" = 'Date',\n);\n")),(0,l.kt)("p",null,"The sequence_type is used to specify the type of the sequence column, which can be integral and time (DATE / DATETIME). "),(0,l.kt)("p",null,"The mapping column needs to be specified when importing."),(0,l.kt)("h4",{id:"stream-load"},"Stream Load"),(0,l.kt)("p",null,"The syntax of the stream load is to add the mapping of hidden columns corresponding to source_sequence in the ",(0,l.kt)("inlineCode",{parentName:"p"},"function_column.sequence_col")," field in the header, for example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,l.kt)("h4",{id:"broker-load"},"Broker Load"),(0,l.kt)("p",null,"Set the source_sequence field for the hidden column map at ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl1`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n\n')),(0,l.kt)("h4",{id:"routine-load"},"Routine Load"),(0,l.kt)("p",null,"The mapping method is the same as above, as shown below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'   CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, source_sequence, v1, v2),\n    WHERE k1 > 100 and k2 like "%doris%"\n    [ORDER BY source_sequence]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')),(0,l.kt)("h2",{id:"enable-sequence-column-support"},"Enable sequence column support"),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"function_column.sequence_col"),"  or  ",(0,l.kt)("inlineCode",{parentName:"p"},"function_column.sequence_type")," is set when creating a new table, the new table will support sequence column. For a table that does not support sequence column, if you want to use this function, you can use the following statement: ",(0,l.kt)("inlineCode",{parentName:"p"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")')," to enable."),(0,l.kt)("p",null," If you are not sure whether a table supports sequence column, you can display hidden columns by setting a session variable ",(0,l.kt)("inlineCode",{parentName:"p"},"SET show_hidden_columns=true"),", then use ",(0,l.kt)("inlineCode",{parentName:"p"},"desc tablename"),", if there is a ",(0,l.kt)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__")," column in the output, it is supported, if not, it is not supported ."),(0,l.kt)("h2",{id:"usage-example"},"Usage example"),(0,l.kt)("p",null,"Let's take the stream Load as an example to show how to use it"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a table that supports sequence column. ")),(0,l.kt)("p",null,"Create the test_table data table of the unique model and specify that the sequence column maps to the ",(0,l.kt)("inlineCode",{parentName:"p"},"modify_date")," column in the table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE test.test_table\n(\n    user_id bigint,\n    date date,\n    group_id bigint,\n    modify_date date,\n    keyword VARCHAR(128)\n)\nUNIQUE KEY(user_id, date, group_id)\nDISTRIBUTED BY HASH (user_id) BUCKETS 32\nPROPERTIES(\n    "function_column.sequence_col" = \'modify_date\',\n    "replication_num" = "1",\n    "in_memory" = "false"\n);\n')),(0,l.kt)("p",null,"The table structure is shown below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL > desc test_table;\n+-------------+--------------+------+-------+---------+---------+\n| Field       | Type         | Null | Key   | Default | Extra   |\n+-------------+--------------+------+-------+---------+---------+\n| user_id     | BIGINT       | No   | true  | NULL    |         |\n| date        | DATE         | No   | true  | NULL    |         |\n| group_id    | BIGINT       | No   | true  | NULL    |         |\n| modify_date | DATE         | No   | false | NULL    | REPLACE |\n| keyword     | VARCHAR(128) | No   | false | NULL    | REPLACE |\n+-------------+--------------+------+-------+---------+---------+\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Import data normally:")),(0,l.kt)("p",null,"Import the following data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1       2020-02-22      1       2020-02-21      a\n1       2020-02-22      1       2020-02-22      b\n1       2020-02-22      1       2020-03-05      c\n1       2020-02-22      1       2020-02-26      d\n1       2020-02-22      1       2020-02-23      e\n1       2020-02-22      1       2020-02-24      b\n")),(0,l.kt)("p",null,"Take the Stream Load as an example here and map the sequence column to the modify_date column"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location-trusted -u root: -T testData http://host:port/api/test/test_table/_stream_load\n")),(0,l.kt)("p",null,"The results is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL > select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")),(0,l.kt)("p",null,"In this import, the c is eventually retained in the keyword column because the value of the sequence column (the value in modify_date) is the maximum value: '2020-03-05'."),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Guarantee of substitution order")),(0,l.kt)("p",null,"After the above steps are completed, import the following data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-02-23      b\n")),(0,l.kt)("p",null,"Query data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")),(0,l.kt)("p",null,"In this import, the c is eventually retained in the keyword column because the value of the sequence column (the value in modify_date) in all imports is the maximum value: '2020-03-05'.\nTry importing the following data again"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-03-23      w\n")),(0,l.kt)("p",null,"Query data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-23  | w       |\n+---------+------------+----------+-------------+---------+\n")),(0,l.kt)("p",null,"At this point, you can replace the original data in the table. To sum up, the sequence column will be compared among all the batches, the largest value of the same key will be imported into Doris table."),(0,l.kt)("h2",{id:"note"},"Note"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"To prevent misuse, in load tasks like StreamLoad/BrokerLoad, user must specify the sequence column; otherwise, user will receive the following error message:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Table test_tbl has a sequence column, need to specify the sequence column\n")),(0,l.kt)("p",null,"2 Starting from version 2.0, Doris supports partial column updates for Merge-on-Write implementation on Unique Key tables. In load tasks with partial column update, users can update only a subset of columns at a time, so it is not mandatory to include the sequence column. If the import task submitted by the user includes the sequence column, it will have no effect on the behavior. However, if the import task does not include the sequence column, Doris will use the matching historical data's sequence column as the value for the updated row's sequence column. If there is no existing column with the same key in the historical data, it will be automatically filled with null or the default value."))}p.isMDXComponent=!0}}]);