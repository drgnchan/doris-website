"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18873],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>p});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var o=r.createContext({}),d=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},c=function(n){var e=d(n.components);return r.createElement(o.Provider,{value:e},n.children)},f="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,o=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),f=d(t),m=i,p=f["".concat(o,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(p,u(u({ref:e},c),{},{components:t})):r.createElement(p,u({ref:e},c))}));function p(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,u=new Array(a);u[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l[f]="string"==typeof n?n:i,u[1]=l;for(var d=2;d<a;d++)u[d]=t[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76186:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={title:"RUNNING_DIFFERENCE",language:"en"},u=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/running-difference",id:"sql-manual/sql-functions/numeric-functions/running-difference",title:"RUNNING_DIFFERENCE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/numeric-functions/running-difference.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/running-difference",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/running-difference",draft:!1,tags:[],version:"current",frontMatter:{title:"RUNNING_DIFFERENCE",language:"en"},sidebar:"docs",previous:{title:"MOD",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/mod"},next:{title:"AES",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/aes"}},o={},d=[{value:"running_difference",id:"running_difference",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:d},f="wrapper";function s(n){let{components:e,...t}=n;return(0,i.kt)(f,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"running_difference"},"running_difference"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T running_difference(T x)")),(0,i.kt)("p",null,"Calculates the difference between successive row values \u200b\u200bin the data block.\nThe result of the function depends on the affected data blocks and the order of data in the block."),(0,i.kt)("p",null,"The rows order used during the calculation of running_difference can differ from the order of rows returned to the user. The function will be deprecated in the future. Please use window function instead, below is the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- running difference(x)\nSELECT running_difference(x) FROM t ORDER BY k;\n\n-- window function\nSELECT x - lag(x, 1, 0) OVER (ORDER BY k) FROM t;\n")),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"x")," - A list of data.TINYINT,SMALLINT,INT,BIGINT,LARGEINT,FLOAT,DOUBLE,DATE,DATETIME,DECIMAL"),(0,i.kt)("h5",{id:"returned-value"},"Returned value"),(0,i.kt)("p",null,"Returns 0 for the first row and the difference from the previous row for each subsequent row"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS running_difference_test;\n\nCREATE TABLE running_difference_test (\n    `id` int NOT NULL COMMENT 'id',\n    `day` date COMMENT 'day', \n    `time_val` datetime COMMENT 'time_val',\n    `doublenum` double NULL COMMENT 'doublenum'\n)\nDUPLICATE KEY(id) \nDISTRIBUTED BY HASH(id) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n                                                  \nINSERT into running_difference_test (id, day, time_val,doublenum) values ('1', '2022-10-28', '2022-03-12 10:41:00', null),\n                                                   ('2','2022-10-27', '2022-03-12 10:41:02', 2.6),\n                                                   ('3','2022-10-28', '2022-03-12 10:41:03', 2.5),\n                                                   ('4','2022-9-29', '2022-03-12 10:41:03', null),\n                                                   ('5','2022-10-31', '2022-03-12 10:42:01', 3.3),\n                                                   ('6', '2022-11-08', '2022-03-12 11:05:04', 4.7); \n\nSELECT * from running_difference_test ORDER BY id ASC;\n\n+------+------------+---------------------+-----------+\n| id   | day        | time_val            | doublenum |\n+------+------------+---------------------+-----------+\n|    1 | 2022-10-28 | 2022-03-12 10:41:00 |      NULL |\n|    2 | 2022-10-27 | 2022-03-12 10:41:02 |       2.6 |\n|    3 | 2022-10-28 | 2022-03-12 10:41:03 |       2.5 |\n|    4 | 2022-09-29 | 2022-03-12 10:41:03 |      NULL |\n|    5 | 2022-10-31 | 2022-03-12 10:42:01 |       3.3 |\n|    6 | 2022-11-08 | 2022-03-12 11:05:04 |       4.7 |\n+------+------------+---------------------+-----------+\n\nSELECT\n    id,\n    running_difference(id) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+------+-------+\n| id   | delta |\n+------+-------+\n|    1 |     0 |\n|    2 |     1 |\n|    3 |     1 |\n|    4 |     1 |\n|    5 |     1 |\n|    6 |     1 |\n+------+-------+\n\nSELECT\n    day,\n    running_difference(day) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+------------+-------+\n| day        | delta |\n+------------+-------+\n| 2022-10-28 |     0 |\n| 2022-10-27 |    -1 |\n| 2022-10-28 |     1 |\n| 2022-09-29 |   -29 |\n| 2022-10-31 |    32 |\n| 2022-11-08 |     8 |\n+------------+-------+\n\nSELECT\n    time_val,\n    running_difference(time_val) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+---------------------+-------+\n| time_val            | delta |\n+---------------------+-------+\n| 2022-03-12 10:41:00 |     0 |\n| 2022-03-12 10:41:02 |     2 |\n| 2022-03-12 10:41:03 |     1 |\n| 2022-03-12 10:41:03 |     0 |\n| 2022-03-12 10:42:01 |    58 |\n| 2022-03-12 11:05:04 |  1383 |\n+---------------------+-------+\n\nSELECT\n    doublenum,\n    running_difference(doublenum) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+-----------+----------------------+\n| doublenum | delta                |\n+-----------+----------------------+\n|      NULL |                 NULL |\n|       2.6 |                 NULL |\n|       2.5 | -0.10000000000000009 |\n|      NULL |                 NULL |\n|       3.3 |                 NULL |\n|       4.7 |   1.4000000000000004 |\n+-----------+----------------------+\n\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"running_difference"))}s.isMDXComponent=!0}}]);