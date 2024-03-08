"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68211],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(y,o(o({ref:t},p),{},{components:r})):a.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},456352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(58168),n=(r(296540),r(15680));const l={title:"SQL Dialect",language:"zh-CN"},o=void 0,i={unversionedId:"lakehouse/sql-dialect",id:"version-2.1/lakehouse/sql-dialect",title:"SQL Dialect",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/lakehouse/sql-dialect.md",sourceDirName:"lakehouse",slug:"/lakehouse/sql-dialect",permalink:"/docs/lakehouse/sql-dialect",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SQL Dialect",language:"zh-CN"},sidebar:"docs",previous:{title:"External Table Statistics",permalink:"/docs/lakehouse/external-statistics"},next:{title:"File System Benchmark Tools",permalink:"/docs/lakehouse/fs-benchmark-tool"}},s={},c=[{value:"Deploy service",id:"deploy-service",level:2},{value:"Use SQL dialect",id:"use-sql-dialect",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"sql-dialect"},"SQL Dialect"),(0,n.yg)("p",null,"Starting from version 2.1, Doris can support multiple SQL dialects, such as Presto, Trino, Hive, PostgreSQL, Spark, Oracle, Clickhouse, and more. Through this feature, users can directly use the corresponding SQL dialect to query data in Doris, which facilitates users to smoothly migrate their original business to Doris."),(0,n.yg)("blockquote",null,(0,n.yg)("ol",{parentName:"blockquote"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"This function is currently an experimental function. If you encounter any problems during use, you are welcome to provide feedback through the mail group, ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues"},"GitHub issue"),", etc. .")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"This function only supports query statements and does not support other DDL and DML statements including Explain.")))),(0,n.yg)("h2",{id:"deploy-service"},"Deploy service"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download latest ",(0,n.yg)("a",{parentName:"p",href:"https://doris-build-1308700295.cos.ap-beijing.myqcloud.com/transform-doris-tool/transform-doris-tool-1.0.0-bin-x86"},"Doris SQL Convertor"),".")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"On any FE node, start the service through the following command:"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"nohup ./doris-sql-convertor-1.0.1-bin-x86 run --host=0.0.0.0 --port=5001 &")),(0,n.yg)("admonition",{parentName:"li",type:"note"},(0,n.yg)("ol",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"This service is a stateless service and can be started and stopped at any time.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"5001")," is the service port and can be arbitrarily specified as an available port.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"It is recommended to start a separate service on each FE node."))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Start the Doris cluster (version 2.1 or higher)")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Set the URL of the SQL Dialect Conversion Service with the following command in Doris:"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},'MySQL> set global sql_converter_service_url = "http://127.0.0.1:5001/api/v1/convert"')),(0,n.yg)("admonition",{parentName:"li",type:"note"},(0,n.yg)("ol",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"127.0.0.1:5001")," is the deployment node IP and port of the SQL dialect conversion service."))))),(0,n.yg)("h2",{id:"use-sql-dialect"},"Use SQL dialect"),(0,n.yg)("p",null,"Currently supported dialect types include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"presto")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"trino")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"hive")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"spark")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"postgres")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"clickhouse")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"oracle"))),(0,n.yg)("p",null,"example:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Presto")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set sql_dialect=presto;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT cast(start_time as varchar(20)) as col1,\n    ->        array_distinct(arr_int) as col2,\n    ->        FILTER(arr_str, x -> x LIKE '%World%') as col3,\n    ->        to_date(value,'%Y-%m-%d')as col4,\n    ->        YEAR(start_time) as col5,\n    ->        date_add('month', 1, start_time) as col6,\n    ->        date_format(start_time, '%Y%m%d')as col7,\n    ->        REGEXP_EXTRACT_ALL(value, '-.') as col8,\n    ->        JSON_EXTRACT('{\"id\": \"33\"}', '$.id')as col9,\n    ->        element_at(arr_int, 1) as col10,\n    ->        date_trunc('day',start_time) as col11\n    ->     FROM test_sqlconvert\n    ->     where date_trunc('day',start_time)= DATE'2024-05-20'     \n    -> order by id; \n+---------------------+-----------+-----------+-------------+------+---------------------+----------+-------------+------+-------+---------------------+\n| col1                | col2      | col3      | col4        | col5 | col6                | col7     | col8        | col9 | col10 | col11               |\n+---------------------+-----------+-----------+-------------+------+---------------------+----------+-------------+------+-------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14  | 2024 | 2024-06-20 13:14:52 | 20240520 | ['-0','-1'] | \"33\" |     1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+-------------+------+---------------------+----------+-------------+------+-------+---------------------+\n1 row in set (0.13 sec)\n\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Clickhouse")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set sql_dialect=clickhouse;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> select toString(start_time) as col1,\n    ->        arrayCompact(arr_int) as col2,\n    ->        arrayFilter(x -> x like '%World%',arr_str)as col3,\n    ->        toDate(value) as col4,\n    ->        toYear(start_time)as col5,\n    ->        addMonths(start_time, 1)as col6,\n    ->        toYYYYMMDD(start_time, 'US/Eastern')as col7,\n    ->        extractAll(value, '-.')as co8,\n    ->        JSONExtractString('{\"id\": \"33\"}' , 'id')as col9,\n    ->        arrayElement(arr_int, 1) as col10,\n    ->        date_trunc('day',start_time) as col11\n    ->      FROM test_sqlconvert\n    ->      where date_trunc('day',start_time)= '2024-05-20 00:00:00'\n    -> order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+----------+-------------+------+-------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7     | co8         | col9 | col10 | col11               |\n+---------------------+-----------+-----------+------------+------+---------------------+----------+-------------+------+-------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | 20240520 | ['-0','-1'] | \"33\" |     1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+----------+-------------+------+-------+---------------------+\n1 row in set (0.04 sec)\n")))}d.isMDXComponent=!0}}]);