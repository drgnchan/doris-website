"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87924],{95788:(e,n,t)=>{t.d(n,{Iu:()=>m,yg:()=>h});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),o=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(i.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=o(t),d=r,h=l["".concat(i,".").concat(d)]||l[d]||p[d]||u;return t?a.createElement(h,s(s({ref:n},m),{},{components:t})):a.createElement(h,s({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,s=new Array(u);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[l]="string"==typeof e?e:r,s[1]=c;for(var o=2;o<u;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>o});var a=t(45072),r=(t(11504),t(95788));const u={title:"SEQUENCE_MATCH",language:"en"},s=void 0,c={unversionedId:"sql-manual/sql-functions/aggregate-functions/sequence-match",id:"sql-manual/sql-functions/aggregate-functions/sequence-match",title:"SEQUENCE_MATCH",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/sequence-match.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/sequence-match",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/sequence-match",draft:!1,tags:[],version:"current",frontMatter:{title:"SEQUENCE_MATCH",language:"en"},sidebar:"docs",previous:{title:"RETENTION",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/retention"},next:{title:"SEQUENCE-COUNT",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/sequence-count"}},i={},o=[{value:"SEQUENCE-MATCH",id:"sequence-match",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:o},l="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(l,(0,a.c)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"sequence-match"},"SEQUENCE-MATCH"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"sequence_match(pattern, timestamp, cond1, cond2, ...);")),(0,r.yg)("p",null,"Checks whether the sequence contains an event chain that matches the pattern."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"WARNING!")," "),(0,r.yg)("p",null,"Events that occur at the same second may lay in the sequence in an undefined order affecting the result."),(0,r.yg)("h4",{id:"arguments"},"Arguments"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"pattern")," \u2014 Pattern string."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Pattern syntax")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"(?N)")," \u2014 Matches the condition argument at position N. Conditions are numbered in the ",(0,r.yg)("inlineCode",{parentName:"p"},"[1, 32]")," range. For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"(?1)")," matches the argument passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"cond1")," parameter."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},".*")," \u2014 Matches any number of events. You do not need conditional arguments to match this element of the pattern."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"(?t operator value)")," \u2014  Sets the time in seconds that should separate two events."),(0,r.yg)("p",null,"We define ",(0,r.yg)("inlineCode",{parentName:"p"},"t")," as the difference in seconds between two times,  For example, pattern ",(0,r.yg)("inlineCode",{parentName:"p"},"(?1)(?t>1800)(?2)")," matches events that occur more than 1800 seconds from each other. pattern ",(0,r.yg)("inlineCode",{parentName:"p"},"(?1)(?t>10000)(?2)")," matches events that occur more than 10000 seconds from each other. An arbitrary number of any events can lay between these events. You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},">="),", ",(0,r.yg)("inlineCode",{parentName:"p"},">"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"<"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"<="),", ",(0,r.yg)("inlineCode",{parentName:"p"},"==")," operators."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"timestamp")," \u2014 Column considered to contain time data. Typical data types are ",(0,r.yg)("inlineCode",{parentName:"p"},"Date")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"DateTime"),". You can also use any of the supported UInt data types."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"cond1"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"cond2")," \u2014 Conditions that describe the chain of events. Data type: ",(0,r.yg)("inlineCode",{parentName:"p"},"UInt8"),". You can pass up to 32 condition arguments. The function takes only the events described in these conditions into account. If the sequence contains data that isn\u2019t described in a condition, the function skips them."),(0,r.yg)("h4",{id:"returned-value"},"Returned value"),(0,r.yg)("p",null,"1, if the pattern is matched."),(0,r.yg)("p",null,"0, if the pattern isn\u2019t matched."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"match examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS sequence_match_test1;\n\nCREATE TABLE sequence_match_test1(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_match_test1(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 13:28:02', 2),\n                                                   (3, '2022-11-02 16:15:01', 1),\n                                                   (4, '2022-11-02 19:05:04', 2),\n                                                   (5, '2022-11-02 20:08:44', 3); \n\nSELECT * FROM sequence_match_test1 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 13:28:02 |      2 |\n|    3 | 2022-11-02 16:15:01 |      1 |\n|    4 | 2022-11-02 19:05:04 |      2 |\n|    5 | 2022-11-02 20:08:44 |      3 |\n+------+---------------------+--------+\n\nSELECT sequence_match('(?1)(?2)', date, number = 1, number = 3) FROM sequence_match_test1;\n\n+----------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 3) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n\nSELECT sequence_match('(?1)(?2)', date, number = 1, number = 2) FROM sequence_match_test1;\n\n+----------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 2) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n\nSELECT sequence_match('(?1)(?t>=3600)(?2)', date, number = 1, number = 2) FROM sequence_match_test1;\n\n+---------------------------------------------------------------------------+\n| sequence_match('(?1)(?t>=3600)(?2)', `date`, `number` = 1, `number` = 2) |\n+---------------------------------------------------------------------------+\n|                                                                         1 |\n+---------------------------------------------------------------------------+\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"not match examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS sequence_match_test2;\n\nCREATE TABLE sequence_match_test2(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_match_test2(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 11:41:00', 7),\n                                                   (3, '2022-11-02 16:15:01', 3),\n                                                   (4, '2022-11-02 19:05:04', 4),\n                                                   (5, '2022-11-02 21:24:12', 5);\n\nSELECT * FROM sequence_match_test2 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 11:41:00 |      7 |\n|    3 | 2022-11-02 16:15:01 |      3 |\n|    4 | 2022-11-02 19:05:04 |      4 |\n|    5 | 2022-11-02 21:24:12 |      5 |\n+------+---------------------+--------+\n\nSELECT sequence_match('(?1)(?2)', date, number = 1, number = 2) FROM sequence_match_test2;\n\n+----------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 2) |\n+----------------------------------------------------------------+\n|                                                              0 |\n+----------------------------------------------------------------+\n\nSELECT sequence_match('(?1)(?2).*', date, number = 1, number = 2) FROM sequence_match_test2;\n\n+------------------------------------------------------------------+\n| sequence_match('(?1)(?2).*', `date`, `number` = 1, `number` = 2) |\n+------------------------------------------------------------------+\n|                                                                0 |\n+------------------------------------------------------------------+\n\nSELECT sequence_match('(?1)(?t>3600)(?2)', date, number = 1, number = 7) FROM sequence_match_test2;\n\n+--------------------------------------------------------------------------+\n| sequence_match('(?1)(?t>3600)(?2)', `date`, `number` = 1, `number` = 7) |\n+--------------------------------------------------------------------------+\n|                                                                        0 |\n+--------------------------------------------------------------------------+\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"special examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS sequence_match_test3;\n\nCREATE TABLE sequence_match_test3(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_match_test3(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 11:41:00', 7),\n                                                   (3, '2022-11-02 16:15:01', 3),\n                                                   (4, '2022-11-02 19:05:04', 4),\n                                                   (5, '2022-11-02 21:24:12', 5);\n\nSELECT * FROM sequence_match_test3 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 11:41:00 |      7 |\n|    3 | 2022-11-02 16:15:01 |      3 |\n|    4 | 2022-11-02 19:05:04 |      4 |\n|    5 | 2022-11-02 21:24:12 |      5 |\n+------+---------------------+--------+\n")),(0,r.yg)("p",null,"Perform the query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT sequence_match('(?1)(?2)', date, number = 1, number = 5) FROM sequence_match_test3;\n\n+----------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 5) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n")),(0,r.yg)("p",null,"This is a very simple example. The function found the event chain where number 5 follows number 1. It skipped number 7,3,4 between them, because the number is not described as an event. If we want to take this number into account when searching for the event chain given in the example, we should make a condition for it."),(0,r.yg)("p",null,"Now, perform this query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT sequence_match('(?1)(?2)', date, number = 1, number = 5, number = 4) FROM sequence_match_test3;\n\n+------------------------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 4) |\n+------------------------------------------------------------------------------+\n|                                                                            0 |\n+------------------------------------------------------------------------------+\n")),(0,r.yg)("p",null,"The result is kind of confusing. In this case, the function couldn\u2019t find the event chain matching the pattern, because the event for number 4 occurred between 1 and 5. If in the same case we checked the condition for number 6, the sequence would match the pattern."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT sequence_match('(?1)(?2)', date, number = 1, number = 5, number = 6) FROM sequence_match_test3;\n\n+------------------------------------------------------------------------------+\n| sequence_match('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 6) |\n+------------------------------------------------------------------------------+\n|                                                                            1 |\n+------------------------------------------------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"SEQUENCE_MATCH"))}p.isMDXComponent=!0}}]);