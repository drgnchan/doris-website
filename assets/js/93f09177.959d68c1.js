"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26105],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),y=l,g=d["".concat(p,".").concat(y)]||d[y]||u[y]||r;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},533068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(58168),l=(a(296540),a(15680));const r={title:"Import Strict Mode",language:"en"},i=void 0,o={unversionedId:"data-operate/import/import-scenes/load-strict-mode",id:"data-operate/import/import-scenes/load-strict-mode",title:"Import Strict Mode",description:"\x3c!--",source:"@site/docs/data-operate/import/import-scenes/load-strict-mode.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/load-strict-mode",permalink:"/docs/dev/data-operate/import/import-scenes/load-strict-mode",draft:!1,tags:[],version:"current",frontMatter:{title:"Import Strict Mode",language:"en"},sidebar:"docs",previous:{title:"Data Transformation, Column Mapping and Filtering",permalink:"/docs/dev/data-operate/import/import-scenes/load-data-convert"},next:{title:"Binlog Load",permalink:"/docs/dev/data-operate/import/import-way/binlog-load-manual"}},p={},s=[{value:"How to set",id:"how-to-set",level:2},{value:"The role of strict mode",id:"the-role-of-strict-mode",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"import-strict-mode"},"import strict mode"),(0,l.yg)("p",null,"Strict mode (strict_mode) is configured as a parameter in the import operation. This parameter affects the import behavior of certain values and the final imported data."),(0,l.yg)("p",null,"This document mainly explains how to set strict mode, and the impact of strict mode."),(0,l.yg)("h2",{id:"how-to-set"},"How to set"),(0,l.yg)("p",null,"Strict mode is all False by default, i.e. off."),(0,l.yg)("p",null,"Different import methods set strict mode in different ways."),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"BROKER LOAD")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://my_bucket/input/file.txt")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY ","\n)\nWITH BROKER bos\n(\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey"="yyyyyyyyyyyyyyyyyyyyyyyy"\n)\nPROPERTIES\n(\n    "strict_mode" = "true"\n)\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"STREAM LOAD")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd \\\n-H "strict_mode: true" \\\n-T 1.txt \\\nhttp://host:port/api/example_db/my_table/_stream_load\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ROUTINE LOAD example_db.test_job ON my_table\nPROPERTIES\n(\n    "strict_mode" = "true"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic"\n);\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},"INSERT")),(0,l.yg)("p",{parentName:"li"},"Set via ",(0,l.yg)("a",{parentName:"p",href:"../../../advanced/variables"},"session variables"),":"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET enable_insert_strict = true;\nINSERT INTO my_table ...;\n")))),(0,l.yg)("h2",{id:"the-role-of-strict-mode"},"The role of strict mode"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Restricting the filtering of column type conversions during import.")),(0,l.yg)("p",null,"The strict filtering strategy is as follows:"),(0,l.yg)("p",null,"For column type conversion, if strict mode is turned on, the wrong data will be filtered. The wrong data here refers to: the original data is not ",(0,l.yg)("inlineCode",{parentName:"p"},"null"),", but the result is ",(0,l.yg)("inlineCode",{parentName:"p"},"null")," after column type conversion."),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"column type conversion")," mentioned here does not include the ",(0,l.yg)("inlineCode",{parentName:"p"},"null")," value calculated by the function."),(0,l.yg)("p",null,"For an imported column type that contains range restrictions, if the original data can pass the type conversion normally, but cannot pass the range restrictions, strict mode will not affect it. For example: if the type is ",(0,l.yg)("inlineCode",{parentName:"p"},"decimal(1,0)")," and the original data is 10, it belongs to the range that can be converted by type but is not within the scope of the column declaration. This kind of data strict has no effect on it."),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Take the column type as TinyInt as an example:"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Primitive data type"),(0,l.yg)("th",{parentName:"tr",align:null},"Primitive data example"),(0,l.yg)("th",{parentName:"tr",align:null},"Converted value to TinyInt"),(0,l.yg)("th",{parentName:"tr",align:null},"Strict mode"),(0,l.yg)("th",{parentName:"tr",align:null},"Result"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NULL"),(0,l.yg)("td",{parentName:"tr",align:null},"\\N"),(0,l.yg)("td",{parentName:"tr",align:null},"NULL"),(0,l.yg)("td",{parentName:"tr",align:null},"ON or OFF"),(0,l.yg)("td",{parentName:"tr",align:null},"NULL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Non-null value"),(0,l.yg)("td",{parentName:"tr",align:null},'"abc" or 2000'),(0,l.yg)("td",{parentName:"tr",align:null},"NULL"),(0,l.yg)("td",{parentName:"tr",align:null},"On"),(0,l.yg)("td",{parentName:"tr",align:null},"Illegal value (filtered)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"non-null value"),(0,l.yg)("td",{parentName:"tr",align:null},'"abc"'),(0,l.yg)("td",{parentName:"tr",align:null},"NULL"),(0,l.yg)("td",{parentName:"tr",align:null},"off"),(0,l.yg)("td",{parentName:"tr",align:null},"NULL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"non-null value"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"on or off"),(0,l.yg)("td",{parentName:"tr",align:null},"import correctly")))),(0,l.yg)("blockquote",{parentName:"li"},(0,l.yg)("p",{parentName:"blockquote"},"Description:"),(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"Columns in the table allow to import null values"),(0,l.yg)("li",{parentName:"ol"},"After ",(0,l.yg)("inlineCode",{parentName:"li"},"abc")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"2000")," are converted to TinyInt, they will become NULL due to type or precision issues. When strict mode is on, this data will be filtered. And if it is closed, ",(0,l.yg)("inlineCode",{parentName:"li"},"null")," will be imported.")))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Take the column type as Decimal(1,0) as an example"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Primitive Data Types"),(0,l.yg)("th",{parentName:"tr",align:null},"Examples of Primitive Data"),(0,l.yg)("th",{parentName:"tr",align:null},"Converted to Decimal"),(0,l.yg)("th",{parentName:"tr",align:null},"Strict Mode"),(0,l.yg)("th",{parentName:"tr",align:null},"Result"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Null"),(0,l.yg)("td",{parentName:"tr",align:null},"\\N"),(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"On or Off"),(0,l.yg)("td",{parentName:"tr",align:null},"NULL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"non-null value"),(0,l.yg)("td",{parentName:"tr",align:null},"aaa"),(0,l.yg)("td",{parentName:"tr",align:null},"NULL"),(0,l.yg)("td",{parentName:"tr",align:null},"on"),(0,l.yg)("td",{parentName:"tr",align:null},"illegal value (filtered)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"non-null value"),(0,l.yg)("td",{parentName:"tr",align:null},"aaa"),(0,l.yg)("td",{parentName:"tr",align:null},"NULL"),(0,l.yg)("td",{parentName:"tr",align:null},"off"),(0,l.yg)("td",{parentName:"tr",align:null},"NULL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"non-null value"),(0,l.yg)("td",{parentName:"tr",align:null},"1 or 10"),(0,l.yg)("td",{parentName:"tr",align:null},"1 or 10"),(0,l.yg)("td",{parentName:"tr",align:null},"on or off"),(0,l.yg)("td",{parentName:"tr",align:null},"import correctly")))),(0,l.yg)("blockquote",{parentName:"li"},(0,l.yg)("p",{parentName:"blockquote"},"Description:"),(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"Columns in the table allow to import null values"),(0,l.yg)("li",{parentName:"ol"},"After ",(0,l.yg)("inlineCode",{parentName:"li"},"abc")," is converted to Decimal, it will become NULL due to type problem. When strict mode is on, this data will be filtered. And if it is closed, ",(0,l.yg)("inlineCode",{parentName:"li"},"null")," will be imported."),(0,l.yg)("li",{parentName:"ol"},"Although ",(0,l.yg)("inlineCode",{parentName:"li"},"10")," is an out-of-range value, because its type conforms to the requirements of decimal, strict mode does not affect it. ",(0,l.yg)("inlineCode",{parentName:"li"},"10")," will eventually be filtered in other import processing flows. But not filtered by strict mode."))))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Restricting partial column updates to only existing columns")),(0,l.yg)("p",null,"In strict mode, when performing partial column updates, each row of data inserted must have a key that already exists in the table. In non-strict mode, partial column updates can update existing rows with existing keys or insert new rows with non-existing keys."),(0,l.yg)("p",null,"For example, consider the following table structure:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> desc user_profile;\n+------------------+-----------------+------+-------+---------+-------+\n| Field            | Type            | Null | Key   | Default | Extra |\n+------------------+-----------------+------+-------+---------+-------+\n| id               | INT             | Yes  | true  | NULL    |       |\n| name             | VARCHAR(10)     | Yes  | false | NULL    | NONE  |\n| age              | INT             | Yes  | false | NULL    | NONE  |\n| city             | VARCHAR(10)     | Yes  | false | NULL    | NONE  |\n| balance          | DECIMALV3(9, 0) | Yes  | false | NULL    | NONE  |\n| last_access_time | DATETIME        | Yes  | false | NULL    | NONE  |\n+------------------+-----------------+------+-------+---------+-------+\n")),(0,l.yg)("p",null,"The table contains the following data:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'1,"kevin",18,"shenzhen",400,"2023-07-01 12:00:00"\n')),(0,l.yg)("p",null,"When a user uses non-strict mode stream load for partial column updates and inserts the following data into the table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"1,500,2023-07-03 12:00:01\n3,23,2023-07-03 12:00:02\n18,9999999,2023-07-03 12:00:03\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'curl  --location-trusted -u root -H "partial_columns:true" -H "strict_mode:false" -H "column_separator:," -H "columns:id,balance,last_access_time" -T /tmp/test.csv http://host:port/api/db1/user_profile/_stream_load\n')),(0,l.yg)("p",null,"The existing row in the table will be updated, and two new rows will be inserted. For columns in the inserted data that are not specified by the user, if the column has a default value, it will be filled with the default value. Otherwise, if the column allows NULL, it will be filled with a NULL value. If neither condition is met, the insertion will not succeed."),(0,l.yg)("p",null,"However, when a user uses strict mode stream load for partial column updates and inserts the above data into the table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'curl  --location-trusted -u root -H "partial_columns:true" -H "strict_mode:true" -H "column_separator:," -H "columns:id,balance,last_access_time" -T /tmp/test.csv http://host:port/api/db1/user_profile/_stream_load\n')),(0,l.yg)("p",null,"In this case, since strict mode is enabled and the keys ",(0,l.yg)("inlineCode",{parentName:"p"},"(3)"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"(18)")," in the second and third rows, respectively, do not exist in the original table, the import will fail."))}u.isMDXComponent=!0}}]);