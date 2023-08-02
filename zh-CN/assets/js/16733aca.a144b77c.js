"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18018],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},99498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Is Your Latest Data Really the Latest? Check the Data Update Mechanism of Your Database",summary:"This is about how to support both row update and partial column update in a database in a way that is simple in execution and efficient in data quality guarantee.",date:"2023-07-24",author:"Apache Doris",tags:["Tech Sharing"]},i=void 0,s={permalink:"/zh-CN/blog/Data_Update",source:"@site/blog/Data_Update.md",title:"Is Your Latest Data Really the Latest? Check the Data Update Mechanism of Your Database",description:"\x3c!--",date:"2023-07-24T00:00:00.000Z",formattedDate:"2023\u5e747\u670824\u65e5",tags:[{label:"Tech Sharing",permalink:"/zh-CN/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Is Your Latest Data Really the Latest? Check the Data Update Mechanism of Your Database",summary:"This is about how to support both row update and partial column update in a database in a way that is simple in execution and efficient in data quality guarantee.",date:"2023-07-24",author:"Apache Doris",tags:["Tech Sharing"]},prevItem:{title:"For Entry-Level Data Engineers: How to Build a Simple but Solid Data Architecture",permalink:"/zh-CN/blog/Poly"},nextItem:{title:"Database Dissection: How Fast Data Queries Are Implemented",permalink:"/zh-CN/blog/Zhihu"}},l={authorsImageUrls:[void 0]},d=[{value:"Row Update",id:"row-update",level:2},{value:"Partial Column Update",id:"partial-column-update",level:2},{value:"Order of Data Updates",id:"order-of-data-updates",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In databases, data update is to add, delete, or modify data. Timely data update is an important part of high quality data services."),(0,r.kt)("p",null,"Technically speaking, there are two types of data updates: you either update a whole row (",(0,r.kt)("strong",{parentName:"p"},"Row Update"),") or just update part of the columns (",(0,r.kt)("strong",{parentName:"p"},"Partial Column Update"),"). Many databases supports both of them, but in different ways. This post is about one of them, which is simple in execution and efficient in data quality guarantee. "),(0,r.kt)("p",null,"As an open source analytic database, Apache Doris supports both Row Update and Partial Column Update with one data model: the ",(0,r.kt)("strong",{parentName:"p"},"Unique Key Model"),". It is where you put data that doesn't need to be aggregated. In the Unique Key Model, you can specify one column or the combination of several columns as the Unique Key (a.k.a. Primary Key). For one Unique Key, there will always be one row of data: the newly ingested data record replaces the old. That's how data updates work."),(0,r.kt)("p",null,"The idea is straightforward, but in real-life implementation, it happens that the latest data does not arrive the last or doesn't even get written at all, so I'm going to show you how Apache Doris implements data update and avoids messups with its Unique Key Model. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(12456).Z,width:"1280",height:"705"})),(0,r.kt)("h2",{id:"row-update"},"Row Update"),(0,r.kt)("p",null,"For data writing to the Unique Key Model, Apache Doris adopts the ",(0,r.kt)("strong",{parentName:"p"},"Upsert")," semantics, which means ",(0,r.kt)("strong",{parentName:"p"},"Update or Insert"),". If the new data record includes a Unique Key that already exists in the table, the new record will replace the old record; if it includes a brand new Unique Key, the new record will be inserted into the table as a whole. The Upsert operation can provide high throughput and guarantee data reliability."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("p",null,"In the following table, the Unique Key is the combination of three columns: ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id, date, group_id"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> desc test_table;\n+-------------+--------------+------+-------+---------+-------+\n| Field       | Type         | Null | Key   | Default | Extra |\n+-------------+--------------+------+-------+---------+-------+\n| user_id     | BIGINT       | Yes  | true  | NULL    |       |\n| date        | DATE         | Yes  | true  | NULL    |       |\n| group_id    | BIGINT       | Yes  | true  | NULL    |       |\n| modify_date | DATE         | Yes  | false | NULL    | NONE  |\n| keyword     | VARCHAR(128) | Yes  | false | NULL    | NONE  |\n+-------------+--------------+------+-------+---------+-------+\n")),(0,r.kt)("p",null,"Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"insert into")," to write in a data record. Since the table was empty, by the Upsert semantics, it means to add a new row to the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> insert into test_table values (1, \"2023-04-28\", 2, \"2023-04-28\", \"foo\");\nQuery OK, 1 row affected (0.05 sec)\n{'label':'insert_2fb45d1833db4348_b612b8791c97b467', 'status':'VISIBLE', 'txnId':'343'}\n\nmysql> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2023-04-28 |        2 | 2023-04-28  | foo     |\n+---------+------------+----------+-------------+---------+\n")),(0,r.kt)("p",null,"Then insert two more data records, one of which has the same Unique Key with the previously inserted row. Now, by the Upsert semantics, it means to replace the old row with the new one of the same Unique Key, and insert the record of the new Unique Key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> insert into test_table values (1, \"2023-04-28\", 2, \"2023-04-29\", \"foo\"), (2, \"2023-04-29\", 2, \"2023-04-29\", \"bar\");\nQuery OK, 2 rows affected (0.04 sec)\n{'label':'insert_7dd3954468aa4ac1_a63a3852e3573b4c', 'status':'VISIBLE', 'txnId':'344'}\n\nmysql> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       2 | 2023-04-29 |        2 | 2023-04-29  | bar     |\n|       1 | 2023-04-28 |        2 | 2023-04-29  | foo     |\n+---------+------------+----------+-------------+---------+\n")),(0,r.kt)("h2",{id:"partial-column-update"},"Partial Column Update"),(0,r.kt)("p",null,"Besides row update, under many circumstances, data analysts require the convenience of partial column update. For example, in user portraits, they would like to update certain dimensions of their users in real time. Or, if they need to maintain a flat table that is made of data from various source tables, they will prefer partial columm update than complicated join operations as a way of data update. "),(0,r.kt)("p",null,"Apache Doris supports partial column update with the UPDATE statement. It filters the rows that need to be modified, read them, changes a few values, and write the rows back to the table. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("p",null,"Suppose that there is an order table, in which the Order ID is the Unique Key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"+----------+--------------+-----------------+\n| order_id | order_amount | order_status    |\n+----------+--------------+-----------------+\n| 1        |          100 | Payment Pending |\n+----------+--------------+-----------------+\n1 row in set (0.01 sec)\n")),(0,r.kt)("p",null,'When the buyer completes the payment, Apache Doris should change the order status of Order ID 1 from "Payment Pending" to "Delivery Pending". This is when the Update command comes into play.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> UPDATE test_order SET order_status = 'Delivery Pending' WHERE order_id = 1;\nQuery OK, 1 row affected (0.11 sec)\n{'label':'update_20ae22daf0354fe0-b5aceeaaddc666c5', 'status':'VISIBLE', 'txnId':'33', 'queryId':'20ae22daf0354fe0-b5aceeaaddc666c5'}\n")),(0,r.kt)("p",null,"This is the table after updating."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"+----------+--------------+------------------+\n| order_id | order_amount | order_status     |\n+----------+--------------+------------------+\n| 1        |          100 | Delivery Pending |\n+----------+--------------+------------------+\n1 row in set (0.01 sec)\n")),(0,r.kt)("p",null,"The execution of the Update command consists of three steps in the system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step One: Read the row where Order ID = 1 (1, 100, 'Payment Pending')"),(0,r.kt)("li",{parentName:"ul"},'Step Two: Modify the order status from "Payment Pending" to "Delivery Pending" (1, 100, \'Delivery Pending\')'),(0,r.kt)("li",{parentName:"ul"},"Step Three: Insert the new row into the table")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8906).Z,width:"1484",height:"296"})),(0,r.kt)("p",null,"The table is in the Unique Key Model, which means for rows of the same Unique Key, only the last inserted one will be reserved, so this is what the table will finally look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(75319).Z,width:"1500",height:"260"})),(0,r.kt)("h2",{id:"order-of-data-updates"},"Order of Data Updates"),(0,r.kt)("p",null,"So far this sounds simple, but in the actual world, data update might fail due to reasons such as data format errors, and thus mess up the data writing order. The order of data update matters more than you imagine. For example, in financial transactions, messed-up data writing order might lead to transaction data losses, errors, or duplication, which further leads to bigger problems."),(0,r.kt)("p",null,"Apache Doris provides two options for users to guarantee that their data is updated in the correct order:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Update by the order of transaction commit")," "),(0,r.kt)("p",null,"In Apache Doris, each data ingestion task is a transaction. Each successfully ingested task will be given a data version and the number of data versions is strictly increasing. If the ingestion fails, the transaction will be rolled back, and no new data version will be generated."),(0,r.kt)("p",null," By default, the Upsert semantics follows the order of the transaction commits. If there are two data ingestion tasks involving the same Unique Key, the first task generating data version 2 and the second, data version 3, then according to transaction commit order, data version 3 will replace data version 2."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Update by the user-defined order")),(0,r.kt)("p",null,"In real-time data analytics, data updates often happen in high concurrency. It is possible that there are multiple data ingestion tasks updating the same row, but these tasks are committed in unknown order, so the last saved update remains unknown, too."),(0,r.kt)("p",null,'For example, these are two data updates, with "2023-04-30" and "2023-05-01" as the ',(0,r.kt)("inlineCode",{parentName:"p"},"modify_data"),', respectively. If they are written into the system concurrently, but the "2023-05-01" one is successully committed first and the other later, then the "2023-04-30" record will be saved due to its higher data version number, but we know it is not the latest one.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Plain"},"mysql> insert into test_table values (2, \"2023-04-29\", 2, \"2023-05-01\", \"bbb\");\nQuery OK, 1 row affected (0.04 sec)\n{'label':'insert_e2daf8cea5524ee1_94e5c87e7bb74d67', 'status':'VISIBLE', 'txnId':'345'}\n\nmysql> insert into test_table values (2, \"2023-04-29\", 2, \"2023-04-30\", \"aaa\");\nQuery OK, 1 row affected (0.03 sec)\n{'label':'insert_ef906f685a7049d0_b135b6cfee49fb98', 'status':'VISIBLE', 'txnId':'346'}\n\nmysql> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       2 | 2023-04-29 |        2 | 2023-04-30 | aaa     |\n|       1 | 2023-04-28 |        2 | 2023-04-29  | foo     |\n+---------+------------+----------+-------------+---------+\n")),(0,r.kt)("p",null,"That's why in high-concurrency scenarios, Apache Doris allows data update in user-defined order. Users can designate a column to the Sequence Column. In this way, the system will identity save the latest data version based on value in the Sequence Column."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"You can designate a Sequence Column by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"function_column.sequence_col")," property upon table creation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},'CREATE TABLE test.test_table\n(\n    user_id bigint,\n    date date,\n    group_id bigint,\n    modify_date date,\n    keyword VARCHAR(128)\n)\nUNIQUE KEY(user_id, date, group_id)\nDISTRIBUTED BY HASH (user_id) BUCKETS 32\nPROPERTIES(\n    "function_column.sequence_col" = \'modify_date\',\n    "replication_num" = "1",\n    "in_memory" = "false"\n);\n')),(0,r.kt)("p",null,"Then check and see, the data record with the highest value in the Sequence Column will be saved:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> insert into test_table values (2, \"2023-04-29\", 2, \"2023-05-01\", \"bbb\");\nQuery OK, 1 row affected (0.03 sec)\n{'label':'insert_3aac37ae95bc4b5d_b3839b49a4d1ad6f', 'status':'VISIBLE', 'txnId':'349'}\n\nmysql> insert into test_table values (2, \"2023-04-29\", 2, \"2023-04-30\", \"aaa\");\nQuery OK, 1 row affected (0.03 sec)\n{'label':'insert_419d4008768d45f3_a6912e584cf1b500', 'status':'VISIBLE', 'txnId':'350'}\n\nmysql> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       2 | 2023-04-29 |        2 | 2023-05-01  | bbb     |\n|       1 | 2023-04-28 |        2 | 2023-04-29  | foo     |\n+---------+------------+----------+-------------+---------+\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations. Now you've gained an overview of how data updates are implemented in Apache Doris. With this knowledge, you can basically guarantee efficiency and accuracy of data updating. But wait, there is so much more about that. As Apache Doris 2.0 is going to provide more powerful Partial Column Update capabilities, with improved execution of the Update statement and the support for more complicated multi-table Join queries, I will show you how to take advantage of them in details in my follow-up writings. ",(0,r.kt)("a",{parentName:"p",href:"https://t.co/ZxJuNJHXb2"},"We")," are constantly updating our data updates!"))}c.isMDXComponent=!0},12456:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Dataupdate_1-f213a24dcaaac700ff9f45906687c4a9.png"},8906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Dataupdate_2-9a653bfdd528301c5b147351f157da3a.png"},75319:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Dataupdate_3-0af75c350522fdc2c1074db4b2235711.png"}}]);