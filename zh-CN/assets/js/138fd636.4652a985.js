"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45712],{95788:(e,n,l)=>{l.d(n,{Iu:()=>u,yg:()=>m});var a=l(11504);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,a,t=function(e,n){if(null==e)return{};var l,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var s=a.createContext({}),c=function(e){var n=a.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(l),d=t,m=p["".concat(s,".").concat(d)]||p[d]||y[d]||r;return l?a.createElement(m,o(o({ref:n},u),{},{components:l})):a.createElement(m,o({ref:n},u))}));function m(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=l.length,o=new Array(r);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:t,o[1]=i;for(var c=2;c<r;c++)o[c]=l[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},44236:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=l(45072),t=(l(11504),l(95788));const r={title:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe",language:"zh-CN"},o=void 0,i={unversionedId:"query-acceleration/async-materialized-view/async-materialized-view",id:"query-acceleration/async-materialized-view/async-materialized-view",title:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/async-materialized-view/async-materialized-view.md",sourceDirName:"query-acceleration/async-materialized-view",slug:"/query-acceleration/async-materialized-view/",permalink:"/zh-CN/docs/dev/query-acceleration/async-materialized-view/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe",language:"zh-CN"},sidebar:"docs",previous:{title:"Doris Join \u4f18\u5316\u539f\u7406",permalink:"/zh-CN/docs/dev/query-acceleration/join-optimization/doris-join-optimization"},next:{title:"\u67e5\u8be2\u5f02\u6b65\u7269\u5316\u89c6\u56fe",permalink:"/zh-CN/docs/dev/query-acceleration/async-materialized-view/query-async-materialized-view"}},s={},c=[{value:"\u7269\u5316\u89c6\u56fe\u7684\u6784\u5efa\u548c\u7ef4\u62a4",id:"\u7269\u5316\u89c6\u56fe\u7684\u6784\u5efa\u548c\u7ef4\u62a4",level:2},{value:"\u521b\u5efa\u7269\u5316\u89c6\u56fe",id:"\u521b\u5efa\u7269\u5316\u89c6\u56fe",level:3},{value:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u5143\u4fe1\u606f",id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u5143\u4fe1\u606f",level:3},{value:"\u5237\u65b0\u7269\u5316\u89c6\u56fe",id:"\u5237\u65b0\u7269\u5316\u89c6\u56fe",level:3},{value:"\u4efb\u52a1\u7ba1\u7406",id:"\u4efb\u52a1\u7ba1\u7406",level:3},{value:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684job",id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684job",level:4},{value:"\u6682\u505c\u7269\u5316\u89c6\u56fejob\u5b9a\u65f6\u8c03\u5ea6",id:"\u6682\u505c\u7269\u5316\u89c6\u56fejob\u5b9a\u65f6\u8c03\u5ea6",level:4},{value:"\u6062\u590d\u7269\u5316\u89c6\u56fejob\u5b9a\u65f6\u8c03\u5ea6",id:"\u6062\u590d\u7269\u5316\u89c6\u56fejob\u5b9a\u65f6\u8c03\u5ea6",level:4},{value:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684task",id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684task",level:4},{value:"\u53d6\u6d88\u7269\u5316\u89c6\u56fe\u7684task",id:"\u53d6\u6d88\u7269\u5316\u89c6\u56fe\u7684task",level:4},{value:"\u4fee\u6539\u7269\u5316\u89c6\u56fe",id:"\u4fee\u6539\u7269\u5316\u89c6\u56fe",level:3},{value:"\u5220\u9664\u7269\u5316\u89c6\u56fe",id:"\u5220\u9664\u7269\u5316\u89c6\u56fe",level:3},{value:"\u7269\u5316\u89c6\u56fe\u7684\u4f7f\u7528",id:"\u7269\u5316\u89c6\u56fe\u7684\u4f7f\u7528",level:2}],u={toc:c},p="wrapper";function y(e){let{components:n,...l}=e;return(0,t.yg)(p,(0,a.c)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe"},"\u5f02\u6b65\u7269\u5316\u89c6\u56fe"),(0,t.yg)("h2",{id:"\u7269\u5316\u89c6\u56fe\u7684\u6784\u5efa\u548c\u7ef4\u62a4"},"\u7269\u5316\u89c6\u56fe\u7684\u6784\u5efa\u548c\u7ef4\u62a4"),(0,t.yg)("h3",{id:"\u521b\u5efa\u7269\u5316\u89c6\u56fe"},"\u521b\u5efa\u7269\u5316\u89c6\u56fe"),(0,t.yg)("p",null,"\u51c6\u5907\u4e24\u5f20\u8868\u548c\u6570\u636e"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"use tpch;\n\nCREATE TABLE IF NOT EXISTS orders  (\n    o_orderkey       integer not null,\n    o_custkey        integer not null,\n    o_orderstatus    char(1) not null,\n    o_totalprice     decimalv3(15,2) not null,\n    o_orderdate      date not null,\n    o_orderpriority  char(15) not null,\n    o_clerk          char(15) not null,\n    o_shippriority   integer not null,\n    o_comment        varchar(79) not null\n    )\n    DUPLICATE KEY(o_orderkey, o_custkey)\n    PARTITION BY RANGE(o_orderdate)(\n    FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\n    DISTRIBUTED BY HASH(o_orderkey) BUCKETS 3\n    PROPERTIES (\"replication_num\" = \"1\");\n\ninsert into orders values\n   (1, 1, 'ok', 99.5, '2023-10-17', 'a', 'b', 1, 'yy'),\n   (2, 2, 'ok', 109.2, '2023-10-18', 'c','d',2, 'mm'),\n   (3, 3, 'ok', 99.5, '2023-10-19', 'a', 'b', 1, 'yy');\n\nCREATE TABLE IF NOT EXISTS lineitem (\n    l_orderkey    integer not null,\n    l_partkey     integer not null,\n    l_suppkey     integer not null,\n    l_linenumber  integer not null,\n    l_quantity    decimalv3(15,2) not null,\n    l_extendedprice  decimalv3(15,2) not null,\n    l_discount    decimalv3(15,2) not null,\n    l_tax         decimalv3(15,2) not null,\n    l_returnflag  char(1) not null,\n    l_linestatus  char(1) not null,\n    l_shipdate    date not null,\n    l_commitdate  date not null,\n    l_receiptdate date not null,\n    l_shipinstruct char(25) not null,\n    l_shipmode     char(10) not null,\n    l_comment      varchar(44) not null\n    )\n    DUPLICATE KEY(l_orderkey, l_partkey, l_suppkey, l_linenumber)\n    PARTITION BY RANGE(l_shipdate)\n    (FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\n    DISTRIBUTED BY HASH(l_orderkey) BUCKETS 3\n    PROPERTIES (\"replication_num\" = \"1\");\n\ninsert into lineitem values\n (1, 2, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-17', '2023-10-17', '2023-10-17', 'a', 'b', 'yyyyyyyyy'),\n (2, 2, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-18', '2023-10-18', '2023-10-18', 'a', 'b', 'yyyyyyyyy'),\n (3, 2, 3, 6, 7.5, 8.5, 9.5, 10.5, 'k', 'o', '2023-10-19', '2023-10-19', '2023-10-19', 'c', 'd', 'xxxxxxxxx');\n")),(0,t.yg)("p",null,"\u521b\u5efa\u7269\u5316\u89c6\u56fe"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1 \n        BUILD DEFERRED REFRESH AUTO ON MANUAL\n        partition by(l_shipdate)\n        DISTRIBUTED BY RANDOM BUCKETS 2\n        PROPERTIES ('replication_num' = '1') \n        AS \n        select l_shipdate, o_orderdate, l_partkey, l_suppkey, sum(o_totalprice) as sum_total\n            from lineitem\n            left join orders on lineitem.l_orderkey = orders.o_orderkey and l_shipdate = o_orderdate\n            group by\n            l_shipdate,\n            o_orderdate,\n            l_partkey,\n            l_suppkey;\n")),(0,t.yg)("p",null,"\u5177\u4f53\u7684\u8bed\u6cd5\u53ef\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"},"CREATE MATERIALIZED VIEW")),(0,t.yg)("h3",{id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u5143\u4fe1\u606f"},"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u5143\u4fe1\u606f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'select * from mv_infos("database"="tpch") where Name="mv1";\n')),(0,t.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u72ec\u6709\u7684\u7279\u6027\u53ef\u4ee5\u901a\u8fc7",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/mv_infos"},"mv_infos()"),"\u67e5\u770b"),(0,t.yg)("p",null,"\u548ctable\u76f8\u5173\u7684\u5c5e\u6027\uff0c\u4ecd\u901a\u8fc7",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLES"},"SHOW TABLES"),"\u6765\u67e5\u770b"),(0,t.yg)("h3",{id:"\u5237\u65b0\u7269\u5316\u89c6\u56fe"},"\u5237\u65b0\u7269\u5316\u89c6\u56fe"),(0,t.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u652f\u6301\u4e0d\u540c\u5237\u65b0\u7b56\u7565\uff0c\u5982\u5b9a\u65f6\u5237\u65b0\u548c\u624b\u52a8\u5237\u65b0\u3002\u4e5f\u652f\u6301\u4e0d\u540c\u7684\u5237\u65b0\u7c92\u5ea6\uff0c\u5982\u5168\u91cf\u5237\u65b0\uff0c\u5206\u533a\u7c92\u5ea6\u7684\u589e\u91cf\u5237\u65b0\u7b49\u3002\u8fd9\u91cc\u6211\u4eec\u4ee5\u624b\u52a8\u5237\u65b0\u7269\u5316\u89c6\u56fe\u7684\u90e8\u5206\u5206\u533a\u4e3a\u4f8b\u3002"),(0,t.yg)("p",null,"\u9996\u5148\u67e5\u770b\u7269\u5316\u89c6\u56fe\u5206\u533a\u5217\u8868"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PARTITIONS FROM mv1;\n")),(0,t.yg)("p",null,"\u5237\u65b0\u540d\u5b57\u4e3a",(0,t.yg)("inlineCode",{parentName:"p"},"p_20231017_20231018"),"\u7684\u5206\u533a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mv1 partitions(p_20231017_20231018);\n")),(0,t.yg)("p",null,"\u5177\u4f53\u7684\u8bed\u6cd5\u53ef\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH-MATERIALIZED-VIEW"},"REFRESH MATERIALIZED VIEW")),(0,t.yg)("h3",{id:"\u4efb\u52a1\u7ba1\u7406"},"\u4efb\u52a1\u7ba1\u7406"),(0,t.yg)("p",null,"\u6bcf\u4e2a\u7269\u5316\u89c6\u56fe\u90fd\u4f1a\u9ed8\u8ba4\u6709\u4e00\u4e2ajob\u8d1f\u8d23\u5237\u65b0\u6570\u636e\uff0cjob\u7528\u6765\u63cf\u8ff0\u7269\u5316\u89c6\u56fe\u7684\u5237\u65b0\u7b56\u7565\u7b49\u4fe1\u606f\uff0c\u6bcf\u6b21\u89e6\u53d1\u5237\u65b0\uff0c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2atask\uff0c\ntask\u7528\u6765\u63cf\u8ff0\u5177\u4f53\u7684\u4e00\u6b21\u5237\u65b0\u4fe1\u606f\uff0c\u4f8b\u5982\u5237\u65b0\u7528\u7684\u65f6\u95f4\uff0c\u5237\u65b0\u4e86\u54ea\u4e9b\u5206\u533a\u7b49"),(0,t.yg)("h4",{id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684job"},"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684job"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'select * from jobs("type"="mv") order by CreateTime;\n')),(0,t.yg)("p",null,"\u5177\u4f53\u7684\u8bed\u6cd5\u53ef\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/jobs"},'jobs("type"="mv")')),(0,t.yg)("h4",{id:"\u6682\u505c\u7269\u5316\u89c6\u56fejob\u5b9a\u65f6\u8c03\u5ea6"},"\u6682\u505c\u7269\u5316\u89c6\u56fejob\u5b9a\u65f6\u8c03\u5ea6"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE MATERIALIZED VIEW JOB ON mv1;\n")),(0,t.yg)("p",null,"\u53ef\u4ee5\u6682\u505c\u7269\u5316\u89c6\u56fe\u7684\u5b9a\u65f6\u8c03\u5ea6"),(0,t.yg)("p",null,"\u5177\u4f53\u7684\u8bed\u6cd5\u53ef\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/PAUSE-MATERIALIZED-VIEW"},"PAUSE MATERIALIZED VIEW JOB")),(0,t.yg)("h4",{id:"\u6062\u590d\u7269\u5316\u89c6\u56fejob\u5b9a\u65f6\u8c03\u5ea6"},"\u6062\u590d\u7269\u5316\u89c6\u56fejob\u5b9a\u65f6\u8c03\u5ea6"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"RESUME MATERIALIZED VIEW JOB ON mv1;\n")),(0,t.yg)("p",null,"\u53ef\u4ee5\u6062\u590d\u7269\u5316\u89c6\u56fe\u7684\u5b9a\u65f6\u8c03\u5ea6"),(0,t.yg)("p",null,"\u5177\u4f53\u7684\u8bed\u6cd5\u53ef\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/RESUME-MATERIALIZED-VIEW"},"RESUME MATERIALIZED VIEW JOB")),(0,t.yg)("h4",{id:"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684task"},"\u67e5\u770b\u7269\u5316\u89c6\u56fe\u7684task"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'select * from tasks("type"="mv");\n')),(0,t.yg)("p",null,"\u5177\u4f53\u7684\u8bed\u6cd5\u53ef\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/tasks"},'tasks("type"="mv")')),(0,t.yg)("h4",{id:"\u53d6\u6d88\u7269\u5316\u89c6\u56fe\u7684task"},"\u53d6\u6d88\u7269\u5316\u89c6\u56fe\u7684task"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL MATERIALIZED VIEW TASK realTaskId on mv1;\n")),(0,t.yg)("p",null,"\u53ef\u4ee5\u53d6\u6d88\u672c\u6b21task\u7684\u8fd0\u884c"),(0,t.yg)("p",null,"\u5177\u4f53\u7684\u8bed\u6cd5\u53ef\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK"},"CANCEL MATERIALIZED VIEW TASK")),(0,t.yg)("h3",{id:"\u4fee\u6539\u7269\u5316\u89c6\u56fe"},"\u4fee\u6539\u7269\u5316\u89c6\u56fe"),(0,t.yg)("p",null,"\u4fee\u6539\u7269\u5316\u89c6\u56fe\u7684\u5c5e\u6027"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER MATERIALIZED VIEW mv1 set("grace_period"="3333");\n')),(0,t.yg)("p",null,"\u4fee\u6539\u7269\u5316\u89c6\u56fe\u7684\u540d\u5b57\uff0c\u7269\u5316\u89c6\u56fe\u7684\u5237\u65b0\u65b9\u5f0f\u53ca\u7269\u5316\u89c6\u56fe\u7279\u6709\u7684property\u53ef\u901a\u8fc7",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-ASYNC-MATERIALIZED-VIEW"},"ALTER MATERIALIZED VIEW"),"\u6765\u4fee\u6539"),(0,t.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u672c\u8eab\u4e5f\u662f\u4e00\u4e2a Table\uff0c\u6240\u4ee5 Table \u76f8\u5173\u7684\u5c5e\u6027\uff0c\u4f8b\u5982\u526f\u672c\u6570\uff0c\u4ecd\u901a\u8fc7",(0,t.yg)("inlineCode",{parentName:"p"},"ALTER TABLE"),"\u76f8\u5173\u7684\u8bed\u6cd5\u6765\u4fee\u6539\u3002"),(0,t.yg)("h3",{id:"\u5220\u9664\u7269\u5316\u89c6\u56fe"},"\u5220\u9664\u7269\u5316\u89c6\u56fe"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"DROP MATERIALIZED VIEW mv1;\n")),(0,t.yg)("p",null,"\u7269\u5316\u89c6\u56fe\u6709\u4e13\u95e8\u7684\u5220\u9664\u8bed\u6cd5\uff0c\u4e0d\u80fd\u901a\u8fc7drop table\u6765\u5220\u9664\uff0c"),(0,t.yg)("p",null,"\u5177\u4f53\u7684\u8bed\u6cd5\u53ef\u67e5\u770b",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ASYNC-MATERIALIZED-VIEW"},"DROP MATERIALIZED VIEW")),(0,t.yg)("h2",{id:"\u7269\u5316\u89c6\u56fe\u7684\u4f7f\u7528"},"\u7269\u5316\u89c6\u56fe\u7684\u4f7f\u7528"),(0,t.yg)("p",null,"\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/query-acceleration/async-materialized-view/query-async-materialized-view"},"\u67e5\u8be2\u5f02\u6b65\u7269\u5316\u89c6\u56fe")))}y.isMDXComponent=!0}}]);