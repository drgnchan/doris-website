"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52394],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>g});var n=t(296540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?n.createElement(g,s(s({ref:a},d),{},{components:t})):n.createElement(g,s({ref:a},d))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},299917:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(58168),i=(t(296540),t(15680));const r={title:"Variant in Apache Doris 2.1.0: a new data type 8 times faster than JSON for semi-structured data analysis",summary:"Doris 2.1.0 provides a new data type: Variant, for semi-structured data analysis, which enables 8 times faster query performance than JSON with one-third storage space.",date:"2024-03-26",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/variant-in-apache-doris-2.1.png"},s=void 0,o={permalink:"/blog/variant-in-apache-doris-2.1",source:"@site/blog/variant-in-apache-doris-2.1.md",title:"Variant in Apache Doris 2.1.0: a new data type 8 times faster than JSON for semi-structured data analysis",description:"\x3c!--",date:"2024-03-26T00:00:00.000Z",formattedDate:"March 26, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Variant in Apache Doris 2.1.0: a new data type 8 times faster than JSON for semi-structured data analysis",summary:"Doris 2.1.0 provides a new data type: Variant, for semi-structured data analysis, which enables 8 times faster query performance than JSON with one-third storage space.",date:"2024-03-26",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/variant-in-apache-doris-2.1.png"},prevItem:{title:"Apache Doris 2.0.7 just released",permalink:"/blog/release-note-2.0.7"},nextItem:{title:"Another big leap: Apache Doris 2.1.0 is released",permalink:"/blog/release-note-2.1.0"}},l={authorsImageUrls:[void 0]},c=[{value:"A newly-added data type: Variant",id:"a-newly-added-data-type-variant",level:2},{value:"Usage guide",id:"usage-guide",level:2},{value:"01  Create table",id:"01--create-table",level:3},{value:"02  Ingest data by Stream Load",id:"02--ingest-data-by-stream-load",level:3},{value:"03  Query",id:"03--query",level:3},{value:"04  Notes",id:"04--notes",level:3},{value:"Variant VS JSON",id:"variant-vs-json",level:2},{value:"01 Storage space",id:"01-storage-space",level:3},{value:"02 Query performance",id:"02-query-performance",level:3},{value:"Design &amp; implementation of Variant",id:"design--implementation-of-variant",level:2},{value:"01  Data writing &amp; type inference",id:"01--data-writing--type-inference",level:3},{value:"02 Column change (column adding or column type changes)",id:"02-column-change-column-adding-or-column-type-changes",level:3},{value:"03 Index &amp; query acceleration",id:"03-index--query-acceleration",level:3},{value:"04  Storage optimization for sparse columns",id:"04--storage-optimization-for-sparse-columns",level:3},{value:"Use case",id:"use-case",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...r}=e;return(0,i.yg)(p,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Semi-structured data is data arranged in flexible formats. Unlike structured data, it does not require data users to pre-define the table schema for it, so it provides convenience for data storage and analysis. Common forms of semi-structured data include XML, JSON, and log files. They are widely seen in the following industry scenarios:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"E-commerce")," platforms store user reviews of products as semi-structured data for sentiment analysis and user behavior pattern mining.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Telecommunication")," use cases often require schemaless support for their network data and complicated nested JSON data.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Mobile applications")," keep records of user behavior in the form of semi-structured data, because after new features are introduced, the user behavior attributes can change. A non-fixed schema can adapt to these changes easily and save the trouble of frequent manual modification. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Internet of Vehicles")," (IoV) and ",(0,i.yg)("strong",{parentName:"p"},"Internet of Things")," (IoT) platforms receive real-time data from vehicle sensors, such as speed, location, and fuel consumption, based on which they perform real-time monitoring, fault alerting, and route planning. Such data is also stored as semi-structured data."))),(0,i.yg)("p",null,"As an open-source real-time data warehouse, ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org"},"Apache Doris")," provides semi-structured data processing capabilities, and the newly-released ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/blog/release-note-2.1.0"},"version 2.1.0")," makes a stride in this direction. Before V2.1, Apache Doris stores semi-structured data as JSON files. However, during query execution, the real-time parsing of JSON data leads to high CPU and I/O consumption in addition to high query latency, especially when the dataset is huge and complicated. Moreover, the lack of a pre-defined schema means there is no handle for query optimization. "),(0,i.yg)("h2",{id:"a-newly-added-data-type-variant"},"A newly-added data type: Variant"),(0,i.yg)("iframe",{width:"880",height:"500",src:"https://www.youtube.com/embed/FVfsnkZUBsU?si=9iqvxZaeHau6HKK7",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,i.yg)("p",null,"In Apache Doris 2.1.0, we have introduced a new data type: ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/sql-manual/sql-reference/Data-Types/VARIANT"},"Variant"),". Fields of the Variant data type can accommodate integers, strings, boolean values, and any combination of them. With Variant, you don't have to define the specific columns in the table schema in advance."),(0,i.yg)("p",null,"The Variant data type is well-suited to handle nested structures, which tend to change dynamically. Upon data writing, the Variant type automatically infers column information based on the data and its structure in the columns, and then merges it into the existing table schema. It stores the JSON keys and their corresponding values as dynamic sub-columns. "),(0,i.yg)("p",null,"Meanwhile, you can include both Variant columns and static columns of pre-defined data types in the same table. This Schema-on-Write method provides greater flexibility in storage and queries. Powered by the columnar storage, vectorized execution engine, and query optimizer of Doris, the Variant type delivers high efficiency in queries and storage. "),(0,i.yg)("p",null,"Compared to the JSON type, storage data in the Variant type can save up to 65% of disk space, and increase query speed by 8 times. (See details later in this post)"),(0,i.yg)("h2",{id:"usage-guide"},"Usage guide"),(0,i.yg)("p",null,"Create table: syntax keyword ",(0,i.yg)("inlineCode",{parentName:"p"},"variant")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},'-- No index\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT\n)\ntable_properties;\n\n-- Create index for the v column, specify the parser\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT,\n    INDEX idx_var(v) USING INVERTED [PROPERTIES("parser" = "english|unicode|chinese")] [COMMENT \'your comment\']\n)\ntable_properties;\n\n-- Create Bloom Filter for the v column\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT\n)\n...\nproperties("replication_num" = "1", "bloom_filter_columns" = "v");\n')),(0,i.yg)("p",null,"Query: access sub-column via ",(0,i.yg)("inlineCode",{parentName:"p"},"[]"),". The sub-columns are also of the Variant type."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},'SELECT v["properties"]["title"] from ${table_name}\n')),(0,i.yg)("p",null,"Now, let's show you how to create a table containing the Variant data type and conduct data ingestion and queries to it. The dataset is Github Events records. This is one of the formatted records:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "14186154924",\n  "type": "PushEvent",\n  "actor": {\n    "id": 282080,\n    "login": "brianchandotcom",\n    "display_login": "brianchandotcom",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/brianchandotcom",\n    "avatar_url": "https://avatars.githubusercontent.com/u/282080?"\n  },\n  "repo": {\n    "id": 1920851,\n    "name": "brianchandotcom/liferay-portal",\n    "url": "https://api.github.com/repos/brianchandotcom/liferay-portal"\n  },\n  "payload": {\n    "push_id": 6027092734,\n    "size": 4,\n    "distinct_size": 4,\n    "ref": "refs/heads/master",\n    "head": "91edd3c8c98c214155191feb852831ec535580ba",\n    "before": "abb58cc0db673a0bd5190000d2ff9c53bb51d04d",\n    "commits": [""]\n  },\n  "public": true,\n  "created_at": "2020-11-13T18:00:00Z"\n}\n')),(0,i.yg)("h3",{id:"01--create-table"},"01  Create table"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Create 3 columns of the Variant type: ",(0,i.yg)("inlineCode",{parentName:"p"},"actor"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"repo")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"payload"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Meanwhile, create inverted index for the ",(0,i.yg)("inlineCode",{parentName:"p"},"payload")," column: ",(0,i.yg)("inlineCode",{parentName:"p"},"idx_payload"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"USING INVERTED")," specifies the index as inverted index, which accelerates conditional filtering on sub-columns"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE test_variant;\n\nUSE test_variant;\n\nCREATE TABLE IF NOT EXISTS github_events (\n    id BIGINT NOT NULL,\n    type VARCHAR(30) NULL,\n    actor VARIANT NULL,\n    repo VARIANT NULL,\n    payload VARIANT NULL,\n    public BOOLEAN NULL,\n    created_at DATETIME NULL,\n    INDEX idx_payload (`payload`) USING INVERTED PROPERTIES("parser" = "english") COMMENT \'inverted index for payload\'\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nproperties("replication_num" = "1");\n')),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: If the ",(0,i.yg)("inlineCode",{parentName:"p"},"Payload")," column has too many sub-columns, creating indexes on it may lead to an excessive number of index columns and decrease data writing performance. If the data analysis only involves equivalence queries, it is advisable to build Bloom Filter index on the Variant columns. This can bring better performance than inverted index. For a single Variant column, if the parsing properties are the same but you have multiple parsing requirements, you can replicate the column and specify various indexes for each of them.")),(0,i.yg)("h3",{id:"02--ingest-data-by-stream-load"},"02  Ingest data by Stream Load"),(0,i.yg)("p",null,"Load the ",(0,i.yg)("inlineCode",{parentName:"p"},"gh_2022-11-07-3.json")," file, which is Github Events records of an hour. One formatted row of it looks like this: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-JSON"},'wget http://doris-build-hk-1308700295.cos.ap-hongkong.myqcloud.com/regression/variant/gh_2022-11-07-3.json\n\ncurl --location-trusted -u root:  -T gh_2022-11-07-3.json -H "read_json_by_line:true" -H "format:json"  http://127.0.0.1:18148/api/test_variant/github_events/_strea\nm_load\n\n{\n    "TxnId": 2,\n    "Label": "086fd46a-20e6-4487-becc-9b6ca80281bf",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 139325,\n    "NumberLoadedRows": 139325,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 633782875,\n    "LoadTimeMs": 7870,\n    "BeginTxnTimeMs": 19,\n    "StreamLoadPutTimeMs": 162,\n    "ReadDataTimeMs": 2416,\n    "WriteDataTimeMs": 7634,\n    "CommitAndPublishTimeMs": 55\n}\n')),(0,i.yg)("p",null,"Check if the data loading succeeds:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'-- Check the number of rows\nmysql> select count() from github_events;\n+----------+\n| count(*) |\n+----------+\n|   139325 |\n+----------+\n1 row in set (0.25 sec)\n\n-- View a random row\nmysql> select * from github_events limit 1;\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| id          | type      | actor                                                                                                                                                                                                                       | repo                                                                                                                                                     | payload                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | public | created_at          |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| 25061821748 | PushEvent | {"gravatar_id":"","display_login":"jfrog-pipelie-intg","url":"https://api.github.com/users/jfrog-pipelie-intg","id":98024358,"login":"jfrog-pipelie-intg","avatar_url":"https://avatars.githubusercontent.com/u/98024358?"} | {"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16","id":562683829,"name":"jfrog-pipelie-intg/jfinte2e_1667789956723_16"} | {"commits":[{"sha":"334433de436baa198024ef9f55f0647721bcd750","author":{"email":"98024358+jfrog-pipelie-intg@users.noreply.github.com","name":"jfrog-pipelie-intg"},"message":"commit message 10238493157623136117","distinct":true,"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16/commits/334433de436baa198024ef9f55f0647721bcd750"}],"before":"f84a26792f44d54305ddd41b7e3a79d25b1a9568","head":"334433de436baa198024ef9f55f0647721bcd750","size":1,"push_id":11572649828,"ref":"refs/heads/test-notification-sent-branch-10238493157623136113","distinct_size":1} |      1 | 2022-11-07 11:00:00 |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n1 row in set (0.23 sec)\n')),(0,i.yg)("p",null,"View schema information via ",(0,i.yg)("inlineCode",{parentName:"p"},"desc"),". The sub-columns will be automatically extended in the storage layer, and the data types of the sub-columns are automatically inferred."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- No display of extended columns\nmysql> desc github_events;\n+------------+-------------+------+-------+---------+-------+\n| Field      | Type        | Null | Key   | Default | Extra |\n+------------+-------------+------+-------+---------+-------+\n| id         | BIGINT      | No   | true  | NULL    |       |\n| type       | VARCHAR(30) | Yes  | false | NULL    | NONE  |\n| actor      | VARIANT     | Yes  | false | NULL    | NONE  |\n| repo       | VARIANT     | Yes  | false | NULL    | NONE  |\n| payload    | VARIANT     | Yes  | false | NULL    | NONE  |\n| public     | BOOLEAN     | Yes  | false | NULL    | NONE  |\n| created_at | DATETIME    | Yes  | false | NULL    | NONE  |\n+------------+-------------+------+-------+---------+-------+\n7 rows in set (0.01 sec)\n\n-- Displaying extended columns of Variant columns\nmysql> set describe_extend_variant_column = true;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> desc github_events;\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| Field                                                      | Type       | Null | Key   | Default | Extra |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| id                                                         | BIGINT     | No   | true  | NULL    |       |\n| type                                                       | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| actor                                                      | VARIANT    | Yes  | false | NULL    | NONE  |\n| actor.avatar_url                                           | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.display_login                                        | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.id                                                   | INT        | Yes  | false | NULL    | NONE  |\n| actor.login                                                | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.url                                                  | TEXT       | Yes  | false | NULL    | NONE  |\n| created_at                                                 | DATETIME   | Yes  | false | NULL    | NONE  |\n| payload                                                    | VARIANT    | Yes  | false | NULL    | NONE  |\n| payload.action                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.before                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.author_association                         | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.body                                       | TEXT       | Yes  | false | NULL    | NONE  |\n....\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n406 rows in set (0.07 sec)\n")),(0,i.yg)("p",null,"With the ",(0,i.yg)("inlineCode",{parentName:"p"},"desc")," statement, you can specify which partition you want to check the schema of: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE ${table_name} PARTITION ($partition_name);\n")),(0,i.yg)("h3",{id:"03--query"},"03  Query"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: When filtering and aggregating sub-columns, an additional CAST operation is required to ensure data type consistency. This is because the storage types may not be fixed, and the ",(0,i.yg)("inlineCode",{parentName:"p"},"CAST")," expression in SQL can unify the data types. For example, ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT * FROM tbl WHERE CAST(var['title'] AS TEXT) MATCH 'hello world'"),".")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"The following are simple examples of queries on Variant columns")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Retrieve the Top 5 repositories with the most Stars from ",(0,i.yg)("inlineCode",{parentName:"li"},"github_events"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT\n    ->     cast(repo[\"name\"] as text) as repo_name, count() AS stars\n    -> FROM github_events\n    -> WHERE type = 'WatchEvent'\n    -> GROUP BY repo_name\n    -> ORDER BY stars DESC LIMIT 5;\n+--------------------------+-------+\n| repo_name                | stars |\n+--------------------------+-------+\n| aplus-framework/app      |    78 |\n| lensterxyz/lenster       |    77 |\n| aplus-framework/database |    46 |\n| stashapp/stash           |    42 |\n| aplus-framework/image    |    34 |\n+--------------------------+-------+\n5 rows in set (0.03 sec)\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Count the number of events containing the keyword ",(0,i.yg)("inlineCode",{parentName:"li"},"doris"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT\n    ->     count() FROM github_events\n    ->     WHERE cast(payload['comment']['body'] as text) MATCH 'doris';\n+---------+\n| count() |\n+---------+\n|       3 |\n+---------+\n1 row in set (0.04 sec)\n")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Check the ID of the issue that has the most comments and the repository it belongs to.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SELECT \n    ->   cast(repo["name"] as string) as repo_name, \n    ->   cast(payload["issue"]["number"] as int) as issue_number, \n    ->   count() AS comments, \n    ->   count(\n    ->     distinct cast(actor["login"] as string)\n    ->   ) AS authors \n    -> FROM  github_events \n    -> WHERE type = \'IssueCommentEvent\' AND (cast(payload["action"] as string) = \'created\') AND (cast(payload["issue"]["number"] as int) > 10) \n    -> GROUP BY repo_name, issue_number \n    -> HAVING authors >= 4\n    -> ORDER BY comments DESC, repo_name\n    -> LIMIT 50;\n+--------------------------------------+--------------+----------+---------+\n| repo_name                            | issue_number | comments | authors |\n+--------------------------------------+--------------+----------+---------+\n| facebook/react-native                |        35228 |        5 |       4 |\n| swsnu/swppfall2022-team4             |           27 |        5 |       4 |\n| belgattitude/nextjs-monorepo-example |         2865 |        4 |       4 |\n+--------------------------------------+--------------+----------+---------+\n3 rows in set (0.03 sec)\n')),(0,i.yg)("h3",{id:"04--notes"},"04  Notes"),(0,i.yg)("p",null,"Based on our test results, it is safe to say that there is no efficiency disparity between Variant dynamic columns and pre-defined static columns. However, in log data processing, when users need to add fields to the table, such as container labels in Kubernetes, JSON parsing and type inference during data writing incur additional overhead."),(0,i.yg)("p",null,"To strike a balance between flexibility and efficiency for the Variant data type, we recommend keeping the number of columns below 1000. A small number of columns will reduce overheads caused by data parsing and type inference and thus increase data writing performance."),(0,i.yg)("p",null,"It is also advisable to ensure field type consistency whenever possible. This is because Doris automatically performs compatible type conversions to unify fields of different data types. If it cannot find a compatible type, it will convert the data to the JSONB type, which may result in degraded performance compared to the int or text type."),(0,i.yg)("h2",{id:"variant-vs-json"},"Variant VS JSON"),(0,i.yg)("p",null,"To see how the newly added Variant type impacts data storage and queries, we did comparison tests on pre-defined static columns, Variant columns, and JSON columns with ClickBench."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Test environment"),": 16 core, 64GB, AWS EC2 instance, 1TB ESSD"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Test result"),":"),(0,i.yg)("h3",{id:"01-storage-space"},"01 Storage space"),(0,i.yg)("p",null,"As the results show, storing data as Variant columns takes up a similar storage space to storing it as pre-defined static columns. Compared with the JSON type, the Variant type requires 65% less space. ",(0,i.yg)("strong",{parentName:"p"},"In other words, the Variant type only takes up one-third of the storage space that JSON does. The difference will be even more notable with low-cardinality data because of columnar storage.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Storage space",src:t(399020).A,width:"1280",height:"476"})),(0,i.yg)("h3",{id:"02-query-performance"},"02 Query performance"),(0,i.yg)("p",null,"We tested with 43",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickBench/blob/main/selectdb/queries.sql"}," Clickbench")," SQL queries. Queries on the Variant columns are about 10% slower than those on pre-defined static columns, and ",(0,i.yg)("strong",{parentName:"p"},"8 times faster than those on")," ",(0,i.yg)("strong",{parentName:"p"},"JSON")," ",(0,i.yg)("strong",{parentName:"p"},"columns"),". (For I/O reasons, most cold runs on JSONB data failed with OOM.) "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Query Performance",src:t(28443).A,width:"1280",height:"394"})),(0,i.yg)("h2",{id:"design--implementation-of-variant"},"Design & implementation of Variant"),(0,i.yg)("h3",{id:"01--data-writing--type-inference"},"01  Data writing & type inference"),(0,i.yg)("p",null,"In Apache Doris, this is a normal writing process: data sorting, merging, and Segment file generation in the Memtable. Variant writing works similarly. It involves type inference and data merging of the same JSON keys within the Memtable, resulting in the creation of a prefix tree. The tree keeps the type and column information of every JSON field, and merges all type information of the same column into the least common type, generates columns, encodes them into the Doris storage formats, and appends them to the segment."),(0,i.yg)("p",null,"Each Segment file not only contains data after type encoding and compaction, but also includes the metadata of dynamically generated columns. Such design ensures data integrity and queryability while also improving storage efficiency. ",(0,i.yg)("strong",{parentName:"p"},"By type inference and merging in the memory, the Variant type largely reduces disk space usage compared to traditional raw text storage"),". "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Data Writing &amp; Type inferece",src:t(457688).A,width:"1280",height:"364"})),(0,i.yg)("h3",{id:"02-column-change-column-adding-or-column-type-changes"},"02 Column change (column adding or column type changes)"),(0,i.yg)("p",null,"During the writing process, all metadata and data of the leaf nodes in the prefix tree will be appended to the Segment file, and the metadata of the Rowsets will be merged. Here is an example of the merging process:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Column change (column adding or column type changes)",src:t(9713).A,width:"1280",height:"245"})),(0,i.yg)("p",null,"In the end, the Rowset will use the ",(0,i.yg)("inlineCode",{parentName:"p"},"Least Common Column Schema")," as the metadata after data merging. (Least common column schema is a schema with the most sub-columns and the sub-column type being the least common type.) This allows for dynamic column extension and type changes. "),(0,i.yg)("p",null,"Based on this mechanism, the stored schema for Variant can be considered data-driven. It offers greater flexibility compared to the Schema Change process in Doris. The diagram below illustrates the directions for type changes (type changes can only be performed in the direction indicated by the arrows, with JSONB being the common type for all types):"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Column change (column adding or column type changes)",src:t(815223).A,width:"1248",height:"474"})),(0,i.yg)("h3",{id:"03-index--query-acceleration"},"03 Index & query acceleration"),(0,i.yg)("p",null,"In Variant, the leaf nodes are stored in a columnar format in the Segment file, which is exactly the same as the storage format for static pre-defined columns. Thus, queries on Variant columns can also be accelerated by dictionary encoding, vectorization, and indexes (ZoneMap, inverted index, BloomFilter, etc.). Since the same column might be of different types in different files, users need to specify a type as the hint during query execution. Here is an example query: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"}," -- var['title'] is to access the 'title' sub-column of var, which is a Variant column. If there is inverted index for var, the queries will be accelerated by inverted index.\n SELECT * FROM tbl where CAST(var['titile'] as text) MATCH \"hello world\"\n \n -- If there is Bloom Filter for var, equivalence queries will be accelerated by Bloom Filter.\n SELECT * FROM tbl where CAST(var['id'] as bigint) = 1010101\n")),(0,i.yg)("p",null,"Predicates will be pushed down to the storage layer (Segment), where the storage type is checked against the target type of the CAST operation. If the types match, a more efficient predicate filtering mechanism will be utilized. This approach reduces unnecessary data reading and conversion, thus improving query performance."),(0,i.yg)("h3",{id:"04--storage-optimization-for-sparse-columns"},"04  Storage optimization for sparse columns"),(0,i.yg)("p",null,"Examples of sparse JSON columns: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'{"a":[1], "b":2, "c":3, "x_1" : 1\uff0c"x_2": "3"}\n{"a":1, "b":2, "c":3, "x_1" : 1\uff0c"x_2": "3"}\n{"a":4, "b":5, "c":6, "x_3" : 1\uff0c"x_4": "3"}\n{"a":7, "b":8, "c":9, "x_5" : 1\uff0c"x_6": "3"}\n...\n')),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"a, b, c")," columns are dense. They are included in almost every row. While the ",(0,i.yg)("inlineCode",{parentName:"p"}," x_\uff1f")," columns are sparse. Only a few of them are not null. If the system stores every column in a columnar way, it will suffer huge storage pressure and exploding meta. "),(0,i.yg)("p",null,"To solve this, Doris detects the sparsity of columns based on the percentage of null values upon data ingestion. The highly sparse columns (with a high proportion of null values) will be packed into JSONB encoding and stored in a separate column. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:" Storage optimization for sparse columns",src:t(396734).A,width:"1280",height:"684"})),(0,i.yg)("p",null,"Such optimization for storing sparse columns will relieve pressure on meta and data compaction and increase flexibility. "),(0,i.yg)("p",null,"Queries on the sparse columns are implemented in exactly the same way as those on other columns."),(0,i.yg)("h2",{id:"use-case"},"Use case"),(0,i.yg)("p",null,"GuanceDB, an observability platform, used an Elasticsearch-based solution for storing logs and user behavior data. However, Elasticsearch has inadequate schemaless support, so it is inefficient in processing large amounts of user-defined fields. Under the Dynamic Mapping mechanism in Elasticsearch, frequent field type conflicts led to data losses and required lots of human intervention. Meanwhile, the writing process in Elasticsearch was resource-intensive and the performance in massive data aggregation was less than ideal."),(0,i.yg)("p",null,"For a data architectural upgrade, GuanceDB works with ",(0,i.yg)("a",{parentName:"p",href:"https://www.velodb.io/"},"VeloDB")," and builds an Apache Doris-based observability solution. They utilize the Variant data type to realize partition-based schema change, which is more flexible and efficient. In addition, Doris imposes no upper limit on the number of columns, meaning that it can better accommodate schema-free data. "),(0,i.yg)("p",null,"The Doris-based solution also delivers lower CPU usage in data writing and higher speed in complicated data aggregation (accelerated by inverted index and query optimization techniques). After the upgrade, GuanceDB ",(0,i.yg)("strong",{parentName:"p"},"decreased their machine costs by 70% and doubled their overall query speed"),", with an over 4-time performance increase in simple queries. "),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"The Variant data type has stood the test of many users before the official release of Apache Doris 2.1.0. It is production-available now. In the future, we plan to realize more lightweight changes for Variant to facilitate data modeling. "),(0,i.yg)("p",null,"For more information about Variant and guides on how to build a semi-structured data analytics solution for your case, come talk to the ",(0,i.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"Apache Doris developer team"),"."))}u.isMDXComponent=!0},9713:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/column-change-c7807e83ad624ebb11654d5ebdcdcc70.png"},815223:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/column-change2-4ae8a9d1a6389b9ca9bc49e5c84b3164.png"},457688:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/data-writing-and-type-inference-ef3da2624eff730ddec2ebceaecfccfb.png"},28443:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/query-performance-9442542741fd22019a68e5807dc1c2fb.png"},396734:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/storage-optimization-for-sparse-columns-4ece65d5d623312590b94532dc8c0237.png"},399020:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/storage-space-1a7ce7030524f8ce1553d8872503825a.png"}}]);