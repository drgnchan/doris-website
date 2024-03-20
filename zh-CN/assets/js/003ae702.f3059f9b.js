"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55433],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>g});var l=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},E="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),E=u(t),s=r,g=E["".concat(p,".").concat(s)]||E[s]||m[s]||a;return t?l.createElement(g,i(i({ref:n},y),{},{components:t})):l.createElement(g,i({ref:n},y))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[E]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},398452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=t(58168),r=(t(296540),t(15680));const a={title:"\u67e5\u8be2\u5f02\u6b65\u7269\u5316\u89c6\u56fe",language:"zh-CN"},i=void 0,o={unversionedId:"query-acceleration/async-materialized-view/query-async-materialized-view",id:"version-2.1/query-acceleration/async-materialized-view/query-async-materialized-view",title:"\u67e5\u8be2\u5f02\u6b65\u7269\u5316\u89c6\u56fe",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/async-materialized-view/query-async-materialized-view.md",sourceDirName:"query-acceleration/async-materialized-view",slug:"/query-acceleration/async-materialized-view/query-async-materialized-view",permalink:"/zh-CN/docs/query-acceleration/async-materialized-view/query-async-materialized-view",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u67e5\u8be2\u5f02\u6b65\u7269\u5316\u89c6\u56fe",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe",permalink:"/zh-CN/docs/query-acceleration/async-materialized-view/"},next:{title:"join hint \u4f7f\u7528\u6587\u6863",permalink:"/zh-CN/docs/query-acceleration/hint/joinHint"}},p={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u76f4\u67e5\u7269\u5316\u89c6\u56fe",id:"\u76f4\u67e5\u7269\u5316\u89c6\u56fe",level:2},{value:"\u900f\u660e\u6539\u5199\u80fd\u529b",id:"\u900f\u660e\u6539\u5199\u80fd\u529b",level:2},{value:"JOIN \u6539\u5199",id:"join-\u6539\u5199",level:3},{value:"\u805a\u5408\u6539\u5199",id:"\u805a\u5408\u6539\u5199",level:3},{value:"Query partial \u900f\u660e\u6539\u5199\uff08Coming soon\uff09",id:"query-partial-\u900f\u660e\u6539\u5199coming-soon",level:2},{value:"Union \u6539\u5199\uff08Coming soon\uff09",id:"union-\u6539\u5199coming-soon",level:2},{value:"\u8f85\u52a9\u529f\u80fd",id:"\u8f85\u52a9\u529f\u80fd",level:2},{value:"\u76f8\u5173\u73af\u5883\u53d8\u91cf",id:"\u76f8\u5173\u73af\u5883\u53d8\u91cf",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2}],y={toc:u},E="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(E,(0,l.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"Doris \u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u91c7\u7528\u4e86\u57fa\u4e8e SPJG\uff08SELECT-PROJECT-JOIN-GROUP-BY\uff09\u6a21\u5f0f\u7ed3\u6784\u4fe1\u606f\u6765\u8fdb\u884c\u900f\u660e\u6539\u5199\u7684\u7b97\u6cd5\u3002"),(0,r.yg)("p",null,"Doris \u53ef\u4ee5\u5206\u6790\u67e5\u8be2 SQL \u7684\u7ed3\u6784\u4fe1\u606f\uff0c\u81ea\u52a8\u5bfb\u627e\u6ee1\u8db3\u8981\u6c42\u7684\u7269\u5316\u89c6\u56fe\uff0c\u5e76\u5c1d\u8bd5\u8fdb\u884c\u900f\u660e\u6539\u5199\uff0c\u4f7f\u7528\u6700\u4f18\u7684\u7269\u5316\u89c6\u56fe\u6765\u8868\u8fbe\u67e5\u8be2SQL\u3002"),(0,r.yg)("p",null,"\u901a\u8fc7\u4f7f\u7528\u9884\u8ba1\u7b97\u7684\u7269\u5316\u89c6\u56fe\u7ed3\u679c\uff0c\u53ef\u4ee5\u5927\u5e45\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\uff0c\u51cf\u5c11\u8ba1\u7b97\u6210\u672c\u3002"),(0,r.yg)("p",null,"\u4ee5 TPC-H \u7684\u4e09\u5f20 lineitem\uff0corders \u548c partsupp \u8868\u6765\u63cf\u8ff0\u76f4\u63a5\u67e5\u8be2\u7269\u5316\u89c6\u56fe\u548c\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u8fdb\u884c\u67e5\u8be2\u900f\u660e\u6539\u5199\u7684\u80fd\u529b\u3002\n\u8868\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS lineitem (\n    l_orderkey    integer not null,\n    l_partkey     integer not null,\n    l_suppkey     integer not null,\n    l_linenumber  integer not null,\n    l_quantity    decimalv3(15,2) not null,\n    l_extendedprice  decimalv3(15,2) not null,\n    l_discount    decimalv3(15,2) not null,\n    l_tax         decimalv3(15,2) not null,\n    l_returnflag  char(1) not null,\n    l_linestatus  char(1) not null,\n    l_shipdate    date not null,\n    l_commitdate  date not null,\n    l_receiptdate date not null,\n    l_shipinstruct char(25) not null,\n    l_shipmode     char(10) not null,\n    l_comment      varchar(44) not null\n    )\n    DUPLICATE KEY(l_orderkey, l_partkey, l_suppkey, l_linenumber)\n    PARTITION BY RANGE(l_shipdate)\n(FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\n    DISTRIBUTED BY HASH(l_orderkey) BUCKETS 3\n    PROPERTIES (\"replication_num\" = \"1\");\n\ninsert into lineitem values\n                         (1, 2, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-17', '2023-10-17', '2023-10-17', 'a', 'b', 'yyyyyyyyy'),\n                         (2, 4, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-18', '2023-10-18', '2023-10-18', 'a', 'b', 'yyyyyyyyy'),\n                         (3, 2, 4, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-19', '2023-10-19', '2023-10-19', 'a', 'b', 'yyyyyyyyy');\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS orders  (\n    o_orderkey       integer not null,\n    o_custkey        integer not null,\n    o_orderstatus    char(1) not null,\n    o_totalprice     decimalv3(15,2) not null,\n    o_orderdate      date not null,\n    o_orderpriority  char(15) not null,\n    o_clerk          char(15) not null,\n    o_shippriority   integer not null,\n    o_comment        varchar(79) not null\n    )\n    DUPLICATE KEY(o_orderkey, o_custkey)\n    PARTITION BY RANGE(o_orderdate)(\n    FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\n    DISTRIBUTED BY HASH(o_orderkey) BUCKETS 3\n    PROPERTIES (\"replication_num\" = \"1\");\n\n    insert into orders values\n    (1, 1, 'o', 9.5, '2023-10-17', 'a', 'b', 1, 'yy'),\n    (1, 1, 'o', 10.5, '2023-10-18', 'a', 'b', 1, 'yy'),\n    (2, 1, 'o', 11.5, '2023-10-19', 'a', 'b', 1, 'yy'),\n    (3, 1, 'o', 12.5, '2023-10-19', 'a', 'b', 1, 'yy');\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"    CREATE TABLE IF NOT EXISTS partsupp (\n      ps_partkey     INTEGER NOT NULL,\n      ps_suppkey     INTEGER NOT NULL,\n      ps_availqty    INTEGER NOT NULL,\n      ps_supplycost  DECIMALV3(15,2)  NOT NULL,\n      ps_comment     VARCHAR(199) NOT NULL \n    )\n    DUPLICATE KEY(ps_partkey, ps_suppkey)\n    DISTRIBUTED BY HASH(ps_partkey) BUCKETS 3\n    PROPERTIES (\n      \"replication_num\" = \"1\"\n    );\n\n    insert into partsupp values\n    (2, 3, 9, 10.01, 'supply1'),\n    (4, 3, 10, 11.01, 'supply2'),\n    (2, 3, 10, 11.01, 'supply3');\n")),(0,r.yg)("h2",{id:"\u76f4\u67e5\u7269\u5316\u89c6\u56fe"},"\u76f4\u67e5\u7269\u5316\u89c6\u56fe"),(0,r.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u53ef\u4ee5\u770b\u4f5c\u662f\u8868\uff0c\u53ef\u4ee5\u50cf\u6b63\u5e38\u7684\u8868\u4e00\u6837\u76f4\u63a5\u67e5\u8be2\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7528\u4f8b1:")),(0,r.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u7684\u5b9a\u4e49\u8bed\u6cd5\uff0c\u8be6\u60c5\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"},"CREATE-ASYNC-MATERIALIZED-VIEW")),(0,r.yg)("p",null,"mv \u5b9a\u4e49:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nBUILD IMMEDIATE REFRESH AUTO ON SCHEDULE EVERY 1 hour\nDISTRIBUTED BY RANDOM BUCKETS 3\nPROPERTIES ('replication_num' = '1')\nAS\nSELECT t1.l_linenumber,\n       o_custkey,\n       o_orderdate\nFROM (SELECT * FROM lineitem WHERE l_linenumber > 1) t1\nLEFT OUTER JOIN orders\nON l_orderkey = o_orderkey;\n")),(0,r.yg)("p",null,"\u67e5\u8be2\u8bed\u53e5:"),(0,r.yg)("p",null,"\u53ef\u4ee5\u5bf9\u7269\u5316\u89c6\u56fe\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\u548c\u805a\u5408\u7b49\uff0c\u8fdb\u884c\u76f4\u63a5\u67e5\u8be2\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT l_linenumber,\n       o_custkey\nFROM mv1\nWHERE l_linenumber > 1 and o_orderdate = '2023-10-18';\n")),(0,r.yg)("h2",{id:"\u900f\u660e\u6539\u5199\u80fd\u529b"},"\u900f\u660e\u6539\u5199\u80fd\u529b"),(0,r.yg)("h3",{id:"join-\u6539\u5199"},"JOIN \u6539\u5199"),(0,r.yg)("p",null,"Join \u6539\u5199\u6307\u7684\u662f\u67e5\u8be2\u548c\u7269\u5316\u4f7f\u7528\u7684\u8868\u76f8\u540c\uff0c\u53ef\u4ee5\u5728\u7269\u5316\u89c6\u56fe\u548c\u67e5\u8be2 Join \u7684\u8f93\u5165\u6216\u8005 Join \u7684\u5916\u5c42\u5199 where\uff0c\u4f18\u5316\u5668\u5bf9\u6b64 pattern \u7684\u67e5\u8be2\u4f1a\u5c1d\u8bd5\u8fdb\u884c\u900f\u660e\u6539\u5199\u3002"),(0,r.yg)("p",null,"\u652f\u6301\u591a\u8868 Join\uff0c\u652f\u6301 Join \u7684\u7c7b\u578b\u4e3a inner\uff0cleft\u3002\u5176\u4ed6\u7c7b\u578b\u5728\u4e0d\u65ad\u62d3\u5c55\u4e2d\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7528\u4f8b1:")),(0,r.yg)("p",null,"\u5982\u4e0b\u67e5\u8be2\u53ef\u8fdb\u884c\u900f\u660e\u6539\u5199\uff0c\u6761\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"l_linenumber > 1"),"\u53ef\u4ee5\u4e0a\u62c9\uff0c\u4ece\u800c\u8fdb\u884c\u900f\u660e\u6539\u5199\uff0c\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u7684\u9884\u8ba1\u7b97\u7ed3\u679c\u6765\u8868\u8fbe\u67e5\u8be2\u3002"),(0,r.yg)("p",null,"mv \u5b9a\u4e49:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv2\nBUILD IMMEDIATE REFRESH AUTO ON SCHEDULE EVERY 1 hour\nDISTRIBUTED BY RANDOM BUCKETS 3\nPROPERTIES ('replication_num' = '1')\nAS\nSELECT t1.l_linenumber,\n       o_custkey,\n       o_orderdate\nFROM (SELECT * FROM lineitem WHERE l_linenumber > 1) t1\nLEFT OUTER JOIN orders\nON l_orderkey = o_orderkey;\n")),(0,r.yg)("p",null,"\u67e5\u8be2\u8bed\u53e5:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT l_linenumber,\n       o_custkey\nFROM lineitem\nLEFT OUTER JOIN orders\nON l_orderkey = o_orderkey\nWHERE l_linenumber > 1 and o_orderdate = '2023-10-18';\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7528\u4f8b2:")),(0,r.yg)("p",null,"JOIN\u884d\u751f\uff0c\u5f53\u67e5\u8be2\u548c\u7269\u5316\u89c6\u56fe\u7684 JOIN \u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\u65f6\uff0c\u5982\u679c\u7269\u5316\u53ef\u4ee5\u63d0\u4f9b\u67e5\u8be2\u6240\u9700\u7684\u6240\u6709\u6570\u636e\u65f6\uff0c\u901a\u8fc7\u5728 JOIN \u7684\u5916\u90e8\u8865\u507f\u8c13\u8bcd\uff0c\u4e5f\u53ef\u4ee5\u8fdb\u884c\u900f\u660e\u6539\u5199\uff0c"),(0,r.yg)("p",null,"\u4e3e\u4f8b\u5982\u4e0b"),(0,r.yg)("p",null,"mv \u5b9a\u4e49:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv3\nBUILD IMMEDIATE REFRESH AUTO ON SCHEDULE EVERY 1 hour\nDISTRIBUTED BY RANDOM BUCKETS 3\nPROPERTIES ('replication_num' = '1')\nAS\nSELECT\n    l_shipdate, l_suppkey, o_orderdate,\n    sum(o_totalprice) AS sum_total,\n    max(o_totalprice) AS max_total,\n    min(o_totalprice) AS min_total,\n    count(*) AS count_all,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS bitmap_union_basic\nFROM lineitem\nLEFT OUTER JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\nGROUP BY\nl_shipdate,\nl_suppkey,\no_orderdate;\n")),(0,r.yg)("p",null,"\u67e5\u8be2\u8bed\u53e5:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    l_shipdate, l_suppkey, o_orderdate,\n    sum(o_totalprice) AS sum_total,\n    max(o_totalprice) AS max_total,\n    min(o_totalprice) AS min_total,\n    count(*) AS count_all,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS bitmap_union_basic\nFROM lineitem\nINNER JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\nWHERE o_orderdate = '2023-10-18' AND l_suppkey = 3\nGROUP BY\nl_shipdate,\nl_suppkey,\no_orderdate;\n")),(0,r.yg)("h3",{id:"\u805a\u5408\u6539\u5199"},"\u805a\u5408\u6539\u5199"),(0,r.yg)("p",null,"\u67e5\u8be2\u548c\u7269\u5316\u89c6\u56fe\u5b9a\u4e49\u4e2d\uff0c\u805a\u5408\u7684\u7ef4\u5ea6\u53ef\u4ee5\u4e00\u81f4\u6216\u8005\u4e0d\u4e00\u81f4\uff0c\u53ef\u4ee5\u4f7f\u7528\u7ef4\u5ea6\u4e2d\u7684\u5b57\u6bb5\u5199 WHERE \u5bf9\u7ed3\u679c\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,r.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u4f7f\u7528\u7684\u7ef4\u5ea6\u9700\u8981\u5305\u542b\u67e5\u8be2\u7684\u7ef4\u5ea6\uff0c\u5e76\u4e14\u67e5\u8be2\u4f7f\u7528\u7684\u6307\u6807\u53ef\u4ee5\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u7684\u6307\u6807\u6765\u8868\u793a\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7528\u4f8b1")),(0,r.yg)("p",null,"\u5982\u4e0b\u67e5\u8be2\u53ef\u4ee5\u8fdb\u884c\u900f\u660e\u6539\u5199\uff0c\u67e5\u8be2\u548c\u7269\u5316\u4f7f\u7528\u805a\u5408\u7684\u7ef4\u5ea6\u4e00\u81f4\uff0c\u53ef\u4ee5\u4f7f\u7528\u7ef4\u5ea6\u4e2d\u7684\u5b57\u6bb5\u8fdb\u884c\u8fc7\u6ee4\u7ed3\u679c\uff0c\u5e76\u4e14\u67e5\u8be2\u4f1a\u5c1d\u8bd5\u4f7f\u7528\u7269\u5316\u89c6\u56fe SELECT \u540e\u7684\u8868\u8fbe\u5f0f\u3002"),(0,r.yg)("p",null,"mv \u5b9a\u4e49:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv4\nBUILD IMMEDIATE REFRESH AUTO ON SCHEDULE EVERY 1 hour\nDISTRIBUTED BY RANDOM BUCKETS 3\nPROPERTIES ('replication_num' = '1')\nAS\nSELECT\n    o_shippriority, o_comment,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS cnt_1,\n    count(distinct CASE WHEN O_SHIPPRIORITY > 2 AND o_orderkey IN (2) THEN o_custkey ELSE null END) AS cnt_2,\n    sum(o_totalprice),\n    max(o_totalprice),\n    min(o_totalprice),\n    count(*)\nFROM orders\nGROUP BY\no_shippriority,\no_comment;\n")),(0,r.yg)("p",null,"\u67e5\u8be2\u8bed\u53e5:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    o_shippriority, o_comment,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS cnt_1,\n    count(distinct CASE WHEN O_SHIPPRIORITY > 2 AND o_orderkey IN (2) THEN o_custkey ELSE null END) AS cnt_2,\n    sum(o_totalprice),\n    max(o_totalprice),\n    min(o_totalprice),\n    count(*)\nFROM orders\nWHERE o_shippriority in (1, 2)\nGROUP BY\no_shippriority,\no_comment;\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7528\u4f8b2")),(0,r.yg)("p",null,"\u5982\u4e0b\u67e5\u8be2\u53ef\u4ee5\u8fdb\u884c\u900f\u660e\u6539\u5199\uff0c\u67e5\u8be2\u548c\u7269\u5316\u4f7f\u7528\u805a\u5408\u7684\u7ef4\u5ea6\u4e0d\u4e00\u81f4\uff0c\u7269\u5316\u89c6\u56fe\u4f7f\u7528\u7684\u7ef4\u5ea6\u5305\u542b\u67e5\u8be2\u7684\u7ef4\u5ea6\u3002 \u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u7ef4\u5ea6\u4e2d\u7684\u5b57\u6bb5\u5bf9\u7ed3\u679c\u8fdb\u884c\u8fc7\u6ee4\uff0c"),(0,r.yg)("p",null,"\u67e5\u8be2\u4f1a\u5c1d\u8bd5\u4f7f\u7528\u7269\u5316\u89c6\u56fe SELECT \u540e\u7684\u51fd\u6570\u8fdb\u884c\u4e0a\u5377\uff0c\u5982\u7269\u5316\u89c6\u56fe\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"bitmap_union")," \u6700\u540e\u4f1a\u4e0a\u5377\u6210 ",(0,r.yg)("inlineCode",{parentName:"p"},"bitmap_union_count"),"\uff0c\u548c\u67e5\u8be2\u4e2d\n",(0,r.yg)("inlineCode",{parentName:"p"},"count(distinct)")," \u7684\u8bed\u4e49\u4fdd\u6301\u4e00\u81f4\u3002"),(0,r.yg)("p",null,"mv \u5b9a\u4e49:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv5\nBUILD IMMEDIATE REFRESH AUTO ON SCHEDULE EVERY 1 hour\nDISTRIBUTED BY RANDOM BUCKETS 3\nPROPERTIES ('replication_num' = '1')\nAS\nSELECT\n    l_shipdate, o_orderdate, l_partkey, l_suppkey,\n    sum(o_totalprice) AS sum_total,\n    max(o_totalprice) AS max_total,\n    min(o_totalprice) AS min_total,\n    count(*) AS count_all,\n    bitmap_union(to_bitmap(CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END)) AS bitmap_union_basic\nFROM lineitem\nLEFT OUTER JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\nGROUP BY\nl_shipdate,\no_orderdate,\nl_partkey,\nl_suppkey;\n")),(0,r.yg)("p",null,"\u67e5\u8be2\u8bed\u53e5:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    l_shipdate, l_suppkey,\n    sum(o_totalprice) AS sum_total,\n    max(o_totalprice) AS max_total,\n    min(o_totalprice) AS min_total,\n    count(*) AS count_all,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS bitmap_union_basic\nFROM lineitem\nLEFT OUTER JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\nWHERE o_orderdate = '2023-10-18' AND l_partkey = 3\nGROUP BY\nl_shipdate,\nl_suppkey;\n")),(0,r.yg)("p",null,"\u6682\u65f6\u76ee\u524d\u652f\u6301\u7684\u805a\u5408\u4e0a\u5377\u51fd\u6570\u5217\u8868\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u4e2d\u51fd\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7269\u5316\u89c6\u56fe\u4e2d\u51fd\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u51fd\u6570\u4e0a\u5377\u540e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max"),(0,r.yg)("td",{parentName:"tr",align:null},"max"),(0,r.yg)("td",{parentName:"tr",align:null},"max")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min"),(0,r.yg)("td",{parentName:"tr",align:null},"min"),(0,r.yg)("td",{parentName:"tr",align:null},"min")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sum"),(0,r.yg)("td",{parentName:"tr",align:null},"sum"),(0,r.yg)("td",{parentName:"tr",align:null},"sum")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"count"),(0,r.yg)("td",{parentName:"tr",align:null},"count"),(0,r.yg)("td",{parentName:"tr",align:null},"sum")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"count(distinct )"),(0,r.yg)("td",{parentName:"tr",align:null},"bitmap_union"),(0,r.yg)("td",{parentName:"tr",align:null},"bitmap_union_count")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bitmap_union"),(0,r.yg)("td",{parentName:"tr",align:null},"bitmap_union"),(0,r.yg)("td",{parentName:"tr",align:null},"bitmap_union")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bitmap_union_count"),(0,r.yg)("td",{parentName:"tr",align:null},"bitmap_union"),(0,r.yg)("td",{parentName:"tr",align:null},"bitmap_union_count")))),(0,r.yg)("h2",{id:"query-partial-\u900f\u660e\u6539\u5199coming-soon"},"Query partial \u900f\u660e\u6539\u5199\uff08Coming soon\uff09"),(0,r.yg)("p",null,"\u5f53\u7269\u5316\u89c6\u56fe\u7684\u8868\u6bd4\u67e5\u8be2\u591a\u65f6\uff0c\u5982\u679c\u7269\u5316\u89c6\u56fe\u6bd4\u67e5\u8be2\u591a\u7684\u8868\u6ee1\u8db3 JOIN \u6d88\u9664\u7684\u6761\u4ef6\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u8fdb\u884c\u900f\u660e\u6539\u5199\uff0c\u5982\u4e0b\u53ef\u4ee5\u8fdb\u884c\u900f\u660e\u6539\u5199\uff0c\u5f85\u652f\u6301\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7528\u4f8b1")),(0,r.yg)("p",null,"mv \u5b9a\u4e49:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," CREATE MATERIALIZED VIEW mv6\n BUILD IMMEDIATE REFRESH AUTO ON SCHEDULE EVERY 1 hour\n DISTRIBUTED BY RANDOM BUCKETS 3\n PROPERTIES ('replication_num' = '1')\n AS\n SELECT\n     l_linenumber,\n     o_custkey,\n     ps_availqty\n FROM lineitem\n LEFT OUTER JOIN orders ON L_ORDERKEY = O_ORDERKEY\n LEFT OUTER JOIN partsupp ON l_partkey = ps_partkey\n AND l_suppkey = ps_suppkey;\n")),(0,r.yg)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," SELECT\n     l_linenumber,\n     o_custkey,\n     ps_availqty\n FROM lineitem\n LEFT OUTER JOIN orders ON L_ORDERKEY = O_ORDERKEY;\n")),(0,r.yg)("h2",{id:"union-\u6539\u5199coming-soon"},"Union \u6539\u5199\uff08Coming soon\uff09"),(0,r.yg)("p",null,"\u5f53\u7269\u5316\u89c6\u56fe\u4e0d\u8db3\u4ee5\u63d0\u4f9b\u67e5\u8be2\u7684\u6240\u6709\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 Union \u7684\u65b9\u5f0f\uff0c\u5c06\u67e5\u8be2\u539f\u8868\u548c\u7269\u5316\u89c6\u56fe Union \u8d77\u6765\u8fd4\u56de\u6570\u636e\uff0c\u5982\u4e0b\u53ef\u4ee5\u8fdb\u884c\u900f\u660e\u6539\u5199\uff0c\u5f85\u652f\u6301\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7528\u4f8b1")),(0,r.yg)("p",null,"mv \u5b9a\u4e49:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv7\nBUILD IMMEDIATE REFRESH AUTO ON SCHEDULE EVERY 1 hour\nDISTRIBUTED BY RANDOM BUCKETS 3\nPROPERTIES ('replication_num' = '1')\nAS\nSELECT\n    o_orderkey,\n    o_custkey,\n    o_orderstatus,\n    o_totalprice\nFROM orders\nWHERE o_orderkey > 10;\n")),(0,r.yg)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    o_orderkey,\n    o_custkey,\n    o_orderstatus,\n    o_totalprice\nFROM orders\nWHERE o_orderkey > 5;\n")),(0,r.yg)("p",null,"\u6539\u5199\u7ed3\u679c\u793a\u610f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM mv\nUNION ALL\nSELECT\n    o_orderkey,\n    o_custkey,\n    o_orderstatus,\n    o_totalprice\nFROM orders\nWHERE o_orderkey > 5 AND o_orderkey <= 10;\n")),(0,r.yg)("h2",{id:"\u8f85\u52a9\u529f\u80fd"},"\u8f85\u52a9\u529f\u80fd"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u900f\u660e\u6539\u5199\u540e\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"grace_period")," \u7684\u5355\u4f4d\u662f\u79d2\uff0c\u6307\u7684\u662f\u5bb9\u8bb8\u7269\u5316\u89c6\u56fe\u548c\u6240\u7528\u57fa\u8868\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u65f6\u95f4\u3002\n\u6bd4\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},"grace_period")," \u8bbe\u7f6e\u62100\uff0c\u610f\u5473\u8981\u6c42\u7269\u5316\u89c6\u56fe\u548c\u57fa\u8868\u6570\u636e\u4fdd\u6301\u4e00\u81f4\uff0c\u6b64\u7269\u5316\u89c6\u56fe\u624d\u53ef\u7528\u4e8e\u900f\u660e\u6539\u5199\uff1b\u5bf9\u4e8e\u5916\u8868\uff0c\u56e0\u4e3a\u65e0\u6cd5\u611f\u77e5\u6570\u636e\u53d8\u66f4\uff0c\u6240\u4ee5\u7269\u5316\u89c6\u56fe\u4f7f\u7528\u4e86\u5916\u8868\uff0c"),(0,r.yg)("p",null,"\u65e0\u8bba\u5916\u8868\u7684\u6570\u636e\u662f\u4e0d\u662f\u6700\u65b0\u7684\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u6b64\u7269\u5316\u89c6\u56fe\u7528\u4e8e\u900f\u660e\u6539\u5199\uff0c\u5982\u679c\u5916\u8868\u914d\u7f6e\u4e86 HMS \u5143\u6570\u636e\u6e90\uff0c\u662f\u53ef\u4ee5\u611f\u77e5\u6570\u636e\u53d8\u66f4\u7684\uff0c\u914d\u7f6e\u6570\u636e\u6e90\u548c\u611f\u77e5\u6570\u636e\u53d8\u66f4\u7684\u529f\u80fd\u4f1a\u5728\u540e\u9762\u8fed\u4ee3\u652f\u6301\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u8bbe\u7f6e\u621010\uff0c\u610f\u5473\u7269\u5316\u89c6\u56fe\u548c\u57fa\u8868\u6570\u636e\u5141\u8bb810s\u7684\u5ef6\u8fdf\uff0c\u5982\u679c\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u548c\u57fa\u8868\u7684\u6570\u636e\u6709\u5ef6\u8fdf\uff0c\u5982\u679c\u572810s\u5185\uff0c\u6b64\u7269\u5316\u89c6\u56fe\u90fd\u53ef\u4ee5\u7528\u4e8e\u900f\u660e\u6539\u5199\u3002"),(0,r.yg)("p",null,"\u5bf9\u4e8e\u7269\u5316\u89c6\u56fe\u4e2d\u7684\u5185\u8868\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u5b9a ",(0,r.yg)("inlineCode",{parentName:"p"},"grace_period")," \u5c5e\u6027\u6765\u63a7\u5236\u900f\u660e\u6539\u5199\u4f7f\u7528\u7684\u7269\u5316\u89c6\u56fe\u6240\u5141\u8bb8\u6570\u636e\u6700\u5927\u7684\u5ef6\u8fdf\u65f6\u95f4\u3002\n\u53ef\u67e5\u770b ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"},"CREATE-ASYNC-MATERIALIZED-VIEW")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u67e5\u8be2\u900f\u660e\u6539\u5199\u547d\u4e2d\u60c5\u51b5\u67e5\u770b\u548c\u8c03\u8bd5")),(0,r.yg)("p",null,"\u53ef\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684\u900f\u660e\u6539\u5199\u547d\u4e2d\u60c5\u51b5\uff0c\u4f1a\u5c55\u793a\u67e5\u8be2\u900f\u660e\u6539\u5199\u7b80\u8981\u8fc7\u7a0b\u4fe1\u606f\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"explain <query_sql>")," \u8fd4\u56de\u7684\u4fe1\u606f\u5982\u4e0b\uff0c\u622a\u53d6\u4e86\u7269\u5316\u89c6\u56fe\u76f8\u5173\u7684\u4fe1\u606f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"| MaterializedView                                                                                                                                                                                                                                      |\n| MaterializedViewRewriteSuccessAndChose:                                                                                                                                                                                                               |\n|   Names: mv5                                                                                                                                                                                                                                          |\n| MaterializedViewRewriteSuccessButNotChose:                                                                                                                                                                                                            |\n|                                                                                                                                                                                                                                                       |\n| MaterializedViewRewriteFail:                                                                                                                                                                                                                          |\n|   Name: mv4                                                                                                                                                                                                                                           |\n|   FailSummary: Match mode is invalid, View struct info is invalid                                                                                                                                                                                     |\n|   Name: mv3                                                                                                                                                                                                                                           |\n|   FailSummary: Match mode is invalid, Rewrite compensate predicate by view fail, View struct info is invalid                                                                                                                                          |\n|   Name: mv1                                                                                                                                                                                                                                           |\n|   FailSummary: The columns used by query are not in view, View struct info is invalid                                                                                                                                                                 |\n|   Name: mv2                                                                                                                                                                                                                                           |\n|   FailSummary: The columns used by query are not in view, View struct info is invalid\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"MaterializedViewRewriteSuccessAndChose"),"\uff1a\u900f\u660e\u6539\u5199\u6210\u529f\uff0c\u5e76\u4e14CBO\u9009\u62e9\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0\u5217\u8868\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"MaterializedViewRewriteSuccessButNotChose"),"\uff1a\u900f\u660e\u6539\u5199\u6210\u529f\uff0c\u4f46\u662f\u6700\u7ec8CBO\u6ca1\u6709\u9009\u62e9\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0\u5217\u8868\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"MaterializedViewRewriteFail"),"\uff1a\u5217\u4e3e\u900f\u660e\u6539\u5199\u5931\u8d25\u53ca\u539f\u56e0\u6458\u8981\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u60f3\u77e5\u9053\u7269\u5316\u89c6\u56fe\u5019\u9009\uff0c\u6539\u5199\u548c\u6700\u7ec8\u9009\u62e9\u60c5\u51b5\u7684\u8fc7\u7a0b\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u8bed\u53e5\uff0c\u4f1a\u5c55\u793a\u900f\u660e\u6539\u5199\u8fc7\u7a0b\u8be6\u7ec6\u7684\u4fe1\u606f\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"explain memo plan <query_sql>")),(0,r.yg)("h2",{id:"\u76f8\u5173\u73af\u5883\u53d8\u91cf"},"\u76f8\u5173\u73af\u5883\u53d8\u91cf"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u5f00\u5173"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SET enable_nereids_planner = true;"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u53ea\u6709\u5728\u65b0\u4f18\u5316\u5668\u4e0b\u624d\u652f\u6301\uff0c\u6240\u4ee5\u9700\u8981\u5f00\u542f\u65b0\u4f18\u5316\u5668")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SET enable_materialized_view_rewrite = true;"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f00\u542f\u6216\u8005\u5173\u95ed\u67e5\u8be2\u900f\u660e\u6539\u5199\uff0c\u9ed8\u8ba4\u5173\u95ed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SET materialized_view_rewrite_enable_contain_external_table = true;"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53c2\u4e0e\u900f\u660e\u6539\u5199\u7684\u7269\u5316\u89c6\u56fe\u662f\u5426\u5141\u8bb8\u5305\u542b\u5916\u8868\uff0c\u9ed8\u8ba4\u4e0d\u5141\u8bb8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SET materialized_view_rewrite_success_candidate_num = 3;"),(0,r.yg)("td",{parentName:"tr",align:null},"\u900f\u660e\u6539\u5199\u6210\u529f\u7684\u7ed3\u679c\u96c6\u5408\uff0c\u5141\u8bb8\u53c2\u4e0e\u5230CBO\u5019\u9009\u7684\u6700\u5927\u6570\u91cf\uff0c\u9ed8\u8ba4\u662f3\u4e2a")))),(0,r.yg)("h2",{id:"\u9650\u5236"},"\u9650\u5236"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u5b9a\u4e49\u8bed\u53e5\u4e2d\u53ea\u5141\u8bb8\u5305\u542b SELECT\u3001FROM\u3001WHERE\u3001JOIN\u3001GROUP BY \u8bed\u53e5\uff0cJOIN \u7684\u8f93\u5165\u53ef\u4ee5\u5305\u542b\u7b80\u5355\u7684 GROUP BY\uff08\u5355\u8868\u805a\u5408\uff09\uff0c\u5176\u4e2dJOIN\u7684\u652f\u6301\u7684\u7c7b\u578b\u4e3a\nINNER \u548c LEFT OUTER JOIN \u5176\u4ed6\u7c7b\u578b\u7684 JOIN \u64cd\u4f5c\u9010\u6b65\u652f\u6301\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u57fa\u4e8e External Table \u7684\u7269\u5316\u89c6\u56fe\u4e0d\u4fdd\u8bc1\u67e5\u8be2\u7ed3\u679c\u5f3a\u4e00\u81f4\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4f7f\u7528\u975e\u786e\u5b9a\u6027\u51fd\u6570\u6765\u6784\u5efa\u7269\u5316\u89c6\u56fe\uff0c\u5305\u62ec rand\u3001now\u3001current_time\u3001current_date\u3001random\u3001uuid\u7b49\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7a97\u53e3\u51fd\u6570\u7684\u900f\u660e\u6539\u5199\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u67e5\u8be2\u548c\u7269\u5316\u89c6\u56fe\u4e2d\u6709 LIMIT\uff0c\u6682\u65f6\u4e0d\u652f\u6301\u900f\u660e\u6539\u5199\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u7269\u5316\u89c6\u56fe\u7684\u5b9a\u4e49\u6682\u65f6\u4e0d\u80fd\u4f7f\u7528\u89c6\u56fe\u548c\u7269\u5316\u89c6\u56fe\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5f53\u67e5\u8be2\u6216\u8005\u7269\u5316\u89c6\u56fe\u6ca1\u6709\u6570\u636e\u65f6\uff0c\u4e0d\u652f\u6301\u900f\u660e\u6539\u5199\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u76ee\u524d WHERE \u6761\u4ef6\u8865\u507f\uff0c\u652f\u6301\u7269\u5316\u89c6\u56fe\u6ca1\u6709 WHERE\uff0c\u67e5\u8be2\u6709 WHERE\u60c5\u51b5\u7684\u6761\u4ef6\u8865\u507f\uff1b\u6216\u8005\u7269\u5316\u89c6\u56fe\u6709 WHERE \u4e14\u67e5\u8be2\u7684 WHERE \u6761\u4ef6\u662f\u7269\u5316\u89c6\u56fe\u7684\u8d85\u96c6\u3002\n\u76ee\u524d\u6682\u65f6\u8fd8\u4e0d\u652f\u6301\u8303\u56f4\u7684\u6761\u4ef6\u8865\u507f\uff0c\u6bd4\u5982\u7269\u5316\u89c6\u56fe\u5b9a\u4e49\u662f a > 5\uff0c\u67e5\u8be2\u662f a > 10\uff0c\u9010\u6b65\u652f\u6301\u3002")))}m.isMDXComponent=!0}}]);