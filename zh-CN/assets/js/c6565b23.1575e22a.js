"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||_[d]||a;return n?l.createElement(m,i(i({ref:t},p),{},{components:n})):l.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>_,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const a={title:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f",language:"zh-CN"},i=void 0,s={unversionedId:"lakehouse/external_statistics",id:"lakehouse/external_statistics",title:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/external_statistics.md",sourceDirName:"lakehouse",slug:"/lakehouse/external_statistics",permalink:"/zh-CN/docs/dev/lakehouse/external_statistics",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u7f13\u5b58",permalink:"/zh-CN/docs/dev/lakehouse/filecache"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh-CN/docs/dev/lakehouse/faq"}},o={},c=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u4fe1\u606f\u6536\u96c6",id:"\u4fe1\u606f\u6536\u96c6",level:3},{value:"\u624b\u52a8\u4e00\u6b21\u6027\u6536\u96c6",id:"\u624b\u52a8\u4e00\u6b21\u6027\u6536\u96c6",level:4},{value:"\u5468\u671f\u6027\u6536\u96c6",id:"\u5468\u671f\u6027\u6536\u96c6",level:4},{value:"\u4efb\u52a1\u7ba1\u7406",id:"\u4efb\u52a1\u7ba1\u7406",level:3},{value:"\u4fe1\u606f\u67e5\u770b",id:"\u4fe1\u606f\u67e5\u770b",level:3},{value:"\u8868\u7edf\u8ba1\u4fe1\u606f",id:"\u8868\u7edf\u8ba1\u4fe1\u606f",level:4},{value:"\u5217\u7edf\u8ba1\u4fe1\u606f",id:"\u5217\u7edf\u8ba1\u4fe1\u606f",level:4},{value:"\u4fe1\u606f\u4fee\u6539",id:"\u4fe1\u606f\u4fee\u6539",level:3},{value:"\u4fe1\u606f\u5220\u9664",id:"\u4fe1\u606f\u5220\u9664",level:3},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u7edf\u8ba1\u4fe1\u606f\u6570\u636e\u6765\u6e90",id:"\u7edf\u8ba1\u4fe1\u606f\u6570\u636e\u6765\u6e90",level:3},{value:"\u7f13\u5b58\u7684\u52a0\u8f7d",id:"\u7f13\u5b58\u7684\u52a0\u8f7d",level:3}],p={toc:c},u="wrapper";function _(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f"},"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f"),(0,r.kt)("p",null,"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f\u7684\u6536\u96c6\u65b9\u5f0f\u548c\u6536\u96c6\u5185\u5bb9\u4e0e\u5185\u8868\u57fa\u672c\u4e00\u81f4\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/query-acceleration/statistics"},"\u5185\u8868\u7edf\u8ba1\u4fe1\u606f"),"\u3002\u76ee\u524d\u652f\u6301\u5bf9Hive\uff0cIceberg\u548cHudi\u7b49\u5916\u90e8\u8868\u7684\u6536\u96c6\u3002"),(0,r.kt)("p",null,"\u5916\u8868\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd\u5305\u62ec"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6682\u4e0d\u652f\u6301\u76f4\u65b9\u56fe\u6536\u96c6"),(0,r.kt)("li",{parentName:"ol"},"\u6682\u4e0d\u652f\u6301\u5206\u533a\u7684\u589e\u91cf\u6536\u96c6\u548c\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ol"},"\u6682\u4e0d\u652f\u6301\u81ea\u52a8\u6536\u96c6\uff08with auto)\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5468\u671f\u6027\u6536\u96c6\uff08with period\uff09\u6765\u4ee3\u66ff"),(0,r.kt)("li",{parentName:"ol"},"\u6682\u4e0d\u652f\u6301\u62bd\u6837\u6536\u96c6")),(0,r.kt)("p",null,"\u4e0b\u9762\u4e3b\u8981\u4ecb\u7ecd\u4e00\u4e0b\u5916\u8868\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7684\u793a\u4f8b\u548c\u5b9e\u73b0\u539f\u7406\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u5c55\u793a\u5728Doris\u4e2d\u901a\u8fc7\u6267\u884canalyze\u547d\u4ee4\u6536\u96c6\u5916\u8868\u7edf\u8ba1\u4fe1\u606f\u7684\u76f8\u5173\u793a\u4f8b\u3002\u9664\u4e86\u4e0a\u6587\u63d0\u5230\u7684\u5916\u8868\u6682\u4e0d\u652f\u6301\u76844\u4e2a\u529f\u80fd\uff0c\u5176\u4f59\u548c\u5185\u8868\u4f7f\u7528\u65b9\u5f0f\u76f8\u540c\u3002\u4e0b\u9762\u4ee5hive.tpch100\u6570\u636e\u5e93\u4e3a\u4f8b\u8fdb\u884c\u5c55\u793a\u3002tpch100\u6570\u636e\u5e93\u4e2d\u5305\u542blineitem\uff0corders\uff0cregion\u7b498\u5f20\u8868\u3002"),(0,r.kt)("h3",{id:"\u4fe1\u606f\u6536\u96c6"},"\u4fe1\u606f\u6536\u96c6"),(0,r.kt)("p",null,"\u5916\u8868\u652f\u6301\u624b\u52a8\u4e00\u6b21\u6027\u6536\u96c6\u548c\u5468\u671f\u6027\u6536\u96c6\u4e24\u79cd\u6536\u96c6\u65b9\u5f0f\u3002"),(0,r.kt)("h4",{id:"\u624b\u52a8\u4e00\u6b21\u6027\u6536\u96c6"},"\u624b\u52a8\u4e00\u6b21\u6027\u6536\u96c6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6536\u96c6lineitem\u8868\u7684\u8868\u4fe1\u606f\u4ee5\u53ca\u5168\u90e8\u5217\u7684\u4fe1\u606f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> ANALYZE TABLE hive.tpch100.lineitem;\n+--------------+-------------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n| Catalog_Name | DB_Name                 | Table_Name | Columns                                                                                                                                                                                       | Job_Id |\n+--------------+-------------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n| hive         | default_cluster:tpch100 | lineitem   | [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct] | 16990  |\n+--------------+-------------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n1 row in set (0.06 sec)\n")),(0,r.kt)("p",null,"\u6b64\u64cd\u4f5c\u662f\u5f02\u6b65\u6267\u884c\uff0c\u4f1a\u5728\u540e\u53f0\u521b\u5efa\u6536\u96c6\u4efb\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7job_id\u67e5\u770b\u4efb\u52a1\u8fdb\u5ea6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> SHOW ANALYZE 16990;\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+---------+---------------------------------------------+---------------+\n| job_id | catalog_name | db_name                 | tbl_name | col_name                                                                                                                                                                                      | job_type | analysis_type | message | last_exec_time_in_ms | state   | progress                                    | schedule_type |\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+---------+---------------------------------------------+---------------+\n| 16990  | hive         | default_cluster:tpch100 | lineitem | [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct] | MANUAL   | FUNDAMENTALS  |         | 2023-07-27 16:01:52  | RUNNING | 2 Finished/0 Failed/15 In Progress/17 Total | ONCE          |\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+---------+---------------------------------------------+---------------+\n1 row in set (0.00 sec)\n")),(0,r.kt)("p",null,"\u4ee5\u53ca\u67e5\u770b\u6bcf\u4e00\u5217\u7684task\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> SHOW ANALYZE TASK STATUS 16990;\n+---------+-----------------+---------+------------------------+-----------------+----------+\n| task_id | col_name        | message | last_state_change_time | time_cost_in_ms | state    |\n+---------+-----------------+---------+------------------------+-----------------+----------+\n| 16991   | l_receiptdate   |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 16992   | l_returnflag    |         | 2023-07-27 16:01:44    | 14394           | FINISHED |\n| 16993   | l_tax           |         | 2023-07-27 16:01:52    | 7975            | FINISHED |\n| 16994   | l_shipmode      |         | 2023-07-27 16:02:11    | 18961           | FINISHED |\n| 16995   | l_suppkey       |         | 2023-07-27 16:02:17    | 6684            | FINISHED |\n| 16996   | l_shipdate      |         | 2023-07-27 16:02:26    | 8518            | FINISHED |\n| 16997   | l_commitdate    |         | 2023-07-27 16:02:26    | 0               | RUNNING  |\n| 16998   | l_partkey       |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 16999   | l_quantity      |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17000   | l_orderkey      |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17001   | l_comment       |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17002   | l_linestatus    |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17003   | l_extendedprice |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17004   | l_linenumber    |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17005   | l_shipinstruct  |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17006   | l_discount      |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17007   | TableRowCount   |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n+---------+-----------------+---------+------------------------+-----------------+----------+\n17 rows in set (0.00 sec)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6536\u96c6tpch100\u6570\u636e\u5e93\u6240\u6709\u8868\u7684\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> ANALYZE DATABASE hive.tpch100;\n+--------------+---------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n| Catalog_Name | DB_Name | Table_Name | Columns                                                                                                                                                                                       | Job_Id |\n+--------------+---------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n| hive         | tpch100 | supplier   | [s_comment,s_phone,s_nationkey,s_name,s_address,s_acctbal,s_suppkey]                                                                                                                          | 17018  |\n| hive         | tpch100 | nation     | [n_comment,n_nationkey,n_regionkey,n_name]                                                                                                                                                    | 17027  |\n| hive         | tpch100 | region     | [r_regionkey,r_comment,r_name]                                                                                                                                                                | 17033  |\n| hive         | tpch100 | partsupp   | [ps_suppkey,ps_availqty,ps_comment,ps_partkey,ps_supplycost]                                                                                                                                  | 17038  |\n| hive         | tpch100 | orders     | [o_orderstatus,o_clerk,o_orderdate,o_shippriority,o_custkey,o_totalprice,o_orderkey,o_comment,o_orderpriority]                                                                                | 17045  |\n| hive         | tpch100 | lineitem   | [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct] | 17056  |\n| hive         | tpch100 | part       | [p_partkey,p_container,p_name,p_comment,p_brand,p_type,p_retailprice,p_mfgr,p_size]                                                                                                           | 17074  |\n| hive         | tpch100 | customer   | [c_custkey,c_phone,c_acctbal,c_mktsegment,c_address,c_nationkey,c_name,c_comment]                                                                                                             | 17085  |\n+--------------+---------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n8 rows in set (0.29 sec)\n")),(0,r.kt)("p",null,"\u6b64\u64cd\u4f5c\u4f1a\u6279\u91cf\u63d0\u4ea4tpch100\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6536\u96c6\u4efb\u52a1\uff0c\u4e5f\u662f\u5f02\u6b65\u6267\u884c\uff0c\u4f1a\u7ed9\u6bcf\u4e2a\u8868\u521b\u5efa\u4e00\u4e2ajob_id\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7job_id\u67e5\u770b\u6bcf\u5f20\u8868\u7684\u4efb\u52a1\u8fdb\u5ea6\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u540c\u6b65\u6536\u96c6")),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528with sync\u540c\u6b65\u6536\u96c6\u8868\u6216\u6570\u636e\u5e93\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u8fd9\u65f6\u4e0d\u4f1a\u521b\u5efa\u540e\u53f0\u4efb\u52a1\uff0c\u5ba2\u6237\u7aef\u5728\u6536\u96c6\u5b8c\u6210\u4e4b\u524d\u4f1ablock\u4f4f\uff0c\u76f4\u5230\u6536\u96c6\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u518d\u8fd4\u56de\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> analyze table hive.tpch100.orders with sync;\nQuery OK, 0 rows affected (33.19 sec)\n")),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u540c\u6b65\u6536\u96c6\u53d7query_timeout session\u53d8\u91cf\u5f71\u54cd\uff0c\u5982\u679c\u8d85\u65f6\u5931\u8d25\uff0c\u9700\u8981\u8c03\u5927\u8be5\u53d8\u91cf\u540e\u91cd\u8bd5\u3002\u6bd4\u5982\uff1a\n",(0,r.kt)("inlineCode",{parentName:"p"},"set query_timeout=3600")," (\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e\u4e3a1\u5c0f\u65f6)"),(0,r.kt)("h4",{id:"\u5468\u671f\u6027\u6536\u96c6"},"\u5468\u671f\u6027\u6536\u96c6"),(0,r.kt)("p",null,"\u4f7f\u7528with period\u53ef\u4ee5\u8bbe\u7f6e\u5468\u671f\u6027\u7684\u6267\u884c\u6536\u96c6\u4efb\u52a1\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"analyze table hive.tpch100.orders with period 86400;")),(0,r.kt)("p",null,"\u8fd9\u6761\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u5468\u671f\u6027\u6536\u96c6\u7684\u4efb\u52a1\uff0c\u5468\u671f\u662f1\u5929\uff0c\u6bcf\u5929\u81ea\u52a8\u6536\u96c6\u548c\u66f4\u65b0orders\u8868\u7684\u7edf\u8ba1\u4fe1\u3002"),(0,r.kt)("h3",{id:"\u4efb\u52a1\u7ba1\u7406"},"\u4efb\u52a1\u7ba1\u7406"),(0,r.kt)("p",null,"\u4efb\u52a1\u7ba1\u7406\u7684\u65b9\u5f0f\u4e5f\u548c\u5185\u8868\u76f8\u540c\uff0c\u4e3b\u8981\u5305\u62ec\u67e5\u770bjob\uff0c\u67e5\u770btask\uff0c\u5220\u9664job\u7b49\u529f\u80fd\u3002\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/query-acceleration/statistics"},"\u5185\u8868\u7edf\u8ba1\u4fe1\u606f"),"\u4efb\u52a1\u7ba1\u7406\u90e8\u5206\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6240\u6709job\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> SHOW ANALYZE;\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+----------+---------------------------------------------+---------------+\n| job_id | catalog_name | db_name                 | tbl_name | col_name                                                                                                                                                                                      | job_type | analysis_type | message | last_exec_time_in_ms | state    | progress                                    | schedule_type |\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+----------+---------------------------------------------+---------------+\n| 16990  | hive         | default_cluster:tpch100 | lineitem | [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct] | MANUAL   | FUNDAMENTALS  |         | 2023-07-27 16:05:02  | FINISHED | 17 Finished/0 Failed/0 In Progress/17 Total | ONCE          |\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+----------+---------------------------------------------+---------------+\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u4e00\u4e2ajob\u7684\u6240\u6709task\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> SHOW ANALYZE TASK STATUS 16990;\n+---------+-----------------+---------+------------------------+-----------------+----------+\n| task_id | col_name        | message | last_state_change_time | time_cost_in_ms | state    |\n+---------+-----------------+---------+------------------------+-----------------+----------+\n| 16991   | l_receiptdate   |         | 2023-07-27 16:05:02    | 9560            | FINISHED |\n| 16992   | l_returnflag    |         | 2023-07-27 16:01:44    | 14394           | FINISHED |\n| 16993   | l_tax           |         | 2023-07-27 16:01:52    | 7975            | FINISHED |\n| 16994   | l_shipmode      |         | 2023-07-27 16:02:11    | 18961           | FINISHED |\n| 16995   | l_suppkey       |         | 2023-07-27 16:02:17    | 6684            | FINISHED |\n| 16996   | l_shipdate      |         | 2023-07-27 16:02:26    | 8518            | FINISHED |\n| 16997   | l_commitdate    |         | 2023-07-27 16:02:34    | 8380            | FINISHED |\n| 16998   | l_partkey       |         | 2023-07-27 16:02:40    | 6060            | FINISHED |\n| 16999   | l_quantity      |         | 2023-07-27 16:02:50    | 9768            | FINISHED |\n| 17000   | l_orderkey      |         | 2023-07-27 16:02:57    | 7200            | FINISHED |\n| 17001   | l_comment       |         | 2023-07-27 16:03:36    | 38468           | FINISHED |\n| 17002   | l_linestatus    |         | 2023-07-27 16:03:51    | 15226           | FINISHED |\n| 17003   | l_extendedprice |         | 2023-07-27 16:04:00    | 8713            | FINISHED |\n| 17004   | l_linenumber    |         | 2023-07-27 16:04:06    | 6659            | FINISHED |\n| 17005   | l_shipinstruct  |         | 2023-07-27 16:04:36    | 29777           | FINISHED |\n| 17006   | l_discount      |         | 2023-07-27 16:04:45    | 9212            | FINISHED |\n| 17007   | TableRowCount   |         | 2023-07-27 16:04:52    | 6974            | FINISHED |\n+---------+-----------------+---------+------------------------+-----------------+----------+\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ec8\u6b62\u672a\u5b8c\u6210\u7684job")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"KILL ANALYZE [job_id]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u5468\u671f\u6027\u6536\u96c6job")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DROP ANALYZE JOB [JOB_ID]\n")),(0,r.kt)("h3",{id:"\u4fe1\u606f\u67e5\u770b"},"\u4fe1\u606f\u67e5\u770b"),(0,r.kt)("p",null,"\u4fe1\u606f\u7684\u67e5\u770b\u5305\u62ec\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff08\u8868\u7684\u884c\u6570\uff09\u67e5\u770b\u548c\u5217\u7edf\u8ba1\u4fe1\u606f\u67e5\u770b\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/query-acceleration/statistics"},"\u5185\u8868\u7edf\u8ba1\u4fe1\u606f"),"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u90e8\u5206\u3002"),(0,r.kt)("h4",{id:"\u8868\u7edf\u8ba1\u4fe1\u606f"},"\u8868\u7edf\u8ba1\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> SHOW TABLE STATS hive.tpch100.orders;\n+-----------+---------------------+---------------------+\n| row_count | update_time         | last_analyze_time   |\n+-----------+---------------------+---------------------+\n| 150000000 | 2023-07-11 23:01:49 | 2023-07-11 23:01:44 |\n+-----------+---------------------+---------------------+\n")),(0,r.kt)("h4",{id:"\u5217\u7edf\u8ba1\u4fe1\u606f"},"\u5217\u7edf\u8ba1\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SHOW COLUMN [cached] stats hive.tpch100.orders;\n")),(0,r.kt)("p",null,"\u67e5\u770bstatistics\u8868\u4e2d\u6307\u5b9atable\u7684\u5217\u7edf\u8ba1\u4fe1\u606f\uff0c\u5982\u679c\u6307\u5b9acached\u53c2\u6570\uff0c\u5219\u5c55\u793a\u7684\u662f\u6307\u5b9a\u8868\u5df2\u52a0\u8f7d\u5230\u7f13\u5b58\u4e2d\u7684\u5217\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> SHOW COLUMN stats hive.tpch100.orders;\n+-----------------+-------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n| column_name     | count | ndv          | num_null | data_size            | avg_size_byte | min                   | max                        |\n+-----------------+-------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n| o_orderstatus   | 1.5E8 | 3.0          | 0.0      | 1.50000001E8         | 1.0           | 'F'                   | 'P'                        |\n| o_clerk         | 1.5E8 | 100836.0     | 0.0      | 2.250000015E9        | 15.0          | 'Clerk#000000001'     | 'Clerk#000100000'          |\n| o_orderdate     | 1.5E8 | 2417.0       | 0.0      | 6.00000004E8         | 4.0           | '1992-01-01'          | '1998-08-02'               |\n| o_shippriority  | 1.5E8 | 1.0          | 0.0      | 6.00000004E8         | 4.0           | 0                     | 0                          |\n| o_custkey       | 1.5E8 | 1.0023982E7  | 0.0      | 6.00000004E8         | 4.0           | 1                     | 14999999                   |\n| o_totalprice    | 1.5E8 | 3.4424096E7  | 0.0      | 1.200000008E9        | 8.0           | 811.73                | 591036.15                  |\n| o_orderkey      | 1.5E8 | 1.51621184E8 | 0.0      | 1.200000008E9        | 8.0           | 1                     | 600000000                  |\n| o_comment       | 1.5E8 | 1.10204136E8 | 0.0      | 7.275038757500258E9  | 48.50025806   | ' Tiresias about the' | 'zzle? unusual requests w' |\n| o_orderpriority | 1.5E8 | 5.0          | 0.0      | 1.2600248124001656E9 | 8.40016536    | '1-URGENT'            | '5-LOW'                    |\n+-----------------+-------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n")),(0,r.kt)("h3",{id:"\u4fe1\u606f\u4fee\u6539"},"\u4fe1\u606f\u4fee\u6539"),(0,r.kt)("p",null,"\u4fee\u6539\u4fe1\u606f\u652f\u6301\u7528\u6237\u624b\u52a8\u4fee\u6539\u5217\u7edf\u8ba1\u4fe1\u606f\u3002\u53ef\u4ee5\u4fee\u6539\u6307\u5b9a\u5217\u7684row_count, ndv, num_nulls, min_value, max_value, data_size\u7b49\u4fe1\u606f\u3002\n\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/query-acceleration/statistics"},"\u5185\u8868\u7edf\u8ba1\u4fe1\u606f"),"\u4fee\u6539\u7edf\u8ba1\u4fe1\u606f\u90e8\u5206\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> ALTER TABLE hive.tpch100.orders MODIFY COLUMN o_orderstatus SET STATS ('row_count'='6001215');\nQuery OK, 0 rows affected (0.03 sec)\n\nmysql> SHOW COLUMN stats hive.tpch100.orders;\n+-----------------+-----------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n| column_name     | count     | ndv          | num_null | data_size            | avg_size_byte | min                   | max                        |\n+-----------------+-----------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n| o_orderstatus   | 6001215.0 | 0.0          | 0.0      | 0.0                  | 0.0           | 'NULL'                | 'NULL'                     |\n| o_clerk         | 1.5E8     | 100836.0     | 0.0      | 2.250000015E9        | 15.0          | 'Clerk#000000001'     | 'Clerk#000100000'          |\n| o_orderdate     | 1.5E8     | 2417.0       | 0.0      | 6.00000004E8         | 4.0           | '1992-01-01'          | '1998-08-02'               |\n| o_shippriority  | 1.5E8     | 1.0          | 0.0      | 6.00000004E8         | 4.0           | 0                     | 0                          |\n| o_custkey       | 1.5E8     | 1.0023982E7  | 0.0      | 6.00000004E8         | 4.0           | 1                     | 14999999                   |\n| o_totalprice    | 1.5E8     | 3.4424096E7  | 0.0      | 1.200000008E9        | 8.0           | 811.73                | 591036.15                  |\n| o_orderkey      | 1.5E8     | 1.51621184E8 | 0.0      | 1.200000008E9        | 8.0           | 1                     | 600000000                  |\n| o_comment       | 1.5E8     | 1.10204136E8 | 0.0      | 7.275038757500258E9  | 48.50025806   | ' Tiresias about the' | 'zzle? unusual requests w' |\n| o_orderpriority | 1.5E8     | 5.0          | 0.0      | 1.2600248124001656E9 | 8.40016536    | '1-URGENT'            | '5-LOW'                    |\n+-----------------+-----------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n")),(0,r.kt)("h3",{id:"\u4fe1\u606f\u5220\u9664"},"\u4fe1\u606f\u5220\u9664"),(0,r.kt)("p",null,"\u5220\u9664\u5916\u8868\u7edf\u8ba1\u4fe1\u606f\u652f\u6301\u7528\u6237\u5220\u9664\u4e00\u5f20\u8868\u7684\u8868\u884c\u6570\u4fe1\u606f\u548c\u5217\u7edf\u8ba1\u4fe1\u606f\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u4e86\u5220\u9664\u7684\u5217\u540d\uff0c\u5219\u53ea\u5220\u9664\u8fd9\u4e9b\u5217\u7684\u4fe1\u606f\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u5220\u9664\u6574\u5f20\u8868\u6240\u6709\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u4ee5\u53ca\u8868\u884c\u6570\u4fe1\u606f\u3002\n\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/query-acceleration/statistics"},"\u5185\u8868\u7edf\u8ba1\u4fe1\u606f"),"\u5220\u9664\u7edf\u8ba1\u4fe1\u606f\u90e8\u5206\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u6574\u5f20\u8868\u7684\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DROP STATS hive.tpch100.orders\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u8868\u4e2d\u67d0\u51e0\u5217\u7684\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DROP STATS hive.tpch100.orders (o_orderkey, o_orderdate)\n")),(0,r.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,r.kt)("h3",{id:"\u7edf\u8ba1\u4fe1\u606f\u6570\u636e\u6765\u6e90"},"\u7edf\u8ba1\u4fe1\u606f\u6570\u636e\u6765\u6e90"),(0,r.kt)("p",null,"\u4f18\u5316\u5668\uff08Nereids\uff09\u901a\u8fc7Cache\u8bfb\u53d6\u7edf\u8ba1\u4fe1\u606f\uff0ccache\u7684\u6570\u636e\u6765\u6e90\u6709\u4e24\u4e2a\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u662f\u5185\u90e8\u7684statistics\u8868\uff0cstatistics\u8868\u7684\u6570\u636e\u901a\u8fc7\u7528\u6237\u6267\u884canalyze\u8bed\u53e5\u6536\u96c6\u800c\u6765\u3002\u8fd9\u4e00\u90e8\u5206\u7684\u67b6\u6784\u4e0e\u5185\u8868\u76f8\u540c\uff0c\u7528\u6237\u53ef\u4ee5\u50cf\u5206\u6790\u5185\u8868\u4e00\u6837\uff0c\u5bf9\u5916\u8868\u6267\u884canalyze\u8bed\u53e5\u6765\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4e0e\u5185\u8868\u4e0d\u540c\u7684\u662f\uff0c\u5916\u8868cache\u7684\u6570\u636e\u8fd8\u6709\u7b2c\u4e8c\u4e2a\u6765\u6e90stats collector\u3002stats collector\u5b9a\u4e49\u4e86\u4e00\u4e9b\u63a5\u53e3\uff0c\u7528\u6765\u4ece\u5916\u90e8\u6570\u636e\u6e90\u83b7\u53d6\u7edf\u8ba1\u4fe1\u606f\u3002\u6bd4\u5982\u76ee\u524d\u5df2\u7ecf\u652f\u6301\u7684hive metastore\u548cIceberg\u4e24\u79cd\u6570\u636e\u6e90\uff0c\u8fd9\u4e9b\u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6\u5916\u90e8\u6570\u636e\u6e90\u4e2d\u5df2\u6709\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u4ee5hive\u4e3a\u4f8b\uff0c\u5982\u679c\u7528\u6237\u5728hive\u4e2d\u6267\u884c\u8fc7analyze\u64cd\u4f5c\uff0c\u90a3\u4e48\u5728Doris\u4e2d\u67e5\u8be2\u7684\u65f6\u5019\uff0cDoris\u53ef\u4ee5\u76f4\u63a5\u4ecehive metastore\u4e2d\u52a0\u8f7d\u5df2\u6709\u7684\u7edf\u8ba1\u4fe1\u606f\u5230\u7f13\u5b58\u4e2d\uff0c\u5305\u62ec\u8868\u7684\u884c\u6570\u3001\u5217\u7684\u6700\u5927\u6700\u5c0f\u503c\u7b49\u3002\u5982\u679c\u5916\u90e8\u6570\u636e\u6e90\u4e5f\u6ca1\u6709\u7edf\u8ba1\u4fe1\u606f\uff0cstats connector\u4f1a\u6839\u636e\u8868\u4e2d\u6570\u636e\u6587\u4ef6\u7684\u5927\u5c0f\u548c\u8868\u7684schema\uff0c\u5927\u81f4\u4f30\u7b97\u4e00\u4e2a\u884c\u6570\u63d0\u4f9b\u7ed9\u4f18\u5316\u5668\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u662f\u7f3a\u5931\u7684\uff0c\u53ef\u80fd\u5bfc\u81f4\u4f18\u5316\u5668\u751f\u6210\u6bd4\u8f83\u4f4e\u6548\u7684\u6267\u884c\u8ba1\u5212\u3002"),(0,r.kt)("p",null,"Stats collector\u5728statistics\u8868\u4e2d\u65e0\u6570\u636e\u65f6\u81ea\u52a8\u6267\u884c\uff0c\u5bf9\u7528\u6237\u900f\u660e\uff0c\u7528\u6237\u65e0\u9700\u6267\u884c\u547d\u4ee4\u6216\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u7f13\u5b58\u7684\u52a0\u8f7d"},"\u7f13\u5b58\u7684\u52a0\u8f7d"),(0,r.kt)("p",null,"\u7f13\u5b58\u7684\u52a0\u8f7d\u987a\u5e8f\u662f\uff0c\u9996\u5148\u901a\u8fc7Statistics\u8868\u52a0\u8f7d\uff0c\u5982\u679cStatistics\u8868\u4e2d\u6709\u4fe1\u606f\uff0c\u8bf4\u660e\u7528\u6237\u5728doris\u4e2d\u6267\u884c\u8fc7analyze\u64cd\u4f5c\uff0c\u8fd9\u6837\u6536\u96c6\u4e0a\u6765\u7684\u7edf\u8ba1\u4fe1\u606f\u662f\u6700\u51c6\u786e\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u4f18\u5148\u4eceStatistics\u8868\u4e2d\u52a0\u8f7d\u3002\u5982\u679c\u53d1\u73b0Statistics\u4e2d\u6ca1\u6709\u5f53\u524d\u6240\u9700\u8868\u7684\u4fe1\u606f\uff0c\u518d\u901a\u8fc7stats collector\u4ece\u5916\u90e8\u6570\u636e\u6e90\u83b7\u53d6\u3002\u5982\u679c\u5916\u90e8\u6570\u636e\u6e90\u4e5f\u6ca1\u6709\uff0cstats collector\u4f1a\u4f30\u7b97\u4e00\u4e2a\u884c\u6570\u3002\n\u7531\u4e8e\u7f13\u5b58\u662f\u5f02\u6b65\u52a0\u8f7d\u7684\uff0c\u7b2c\u4e00\u6b21query\u7684\u65f6\u5019\u53ef\u80fd\u6ca1\u6cd5\u5229\u7528\u5230\u4efb\u4f55\u7edf\u8ba1\u4fe1\u606f\uff0c\u56e0\u4e3a\u8fd9\u65f6\u5019\u521a\u521a\u89e6\u53d1\u7f13\u5b58\u52a0\u8f7d\u3002\u4f46\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u7b2c\u4e8c\u6b21\u67e5\u8be2\u67d0\u5f20\u8868\u7684\u65f6\u5019\uff0c\u4f18\u5316\u5668\u53ef\u4ee5\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u5230\u5b83\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"))}_.isMDXComponent=!0}}]);