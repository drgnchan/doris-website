"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[95897],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=u(n),p=l,d=y["".concat(s,".").concat(p)]||y[p]||m[p]||o;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},225042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(58168),l=(n(296540),n(15680));const o={title:"Advanced Use Guide",language:"en"},r=void 0,i={unversionedId:"data-table/advance-usage",id:"data-table/advance-usage",title:"Advanced Use Guide",description:"\x3c!--",source:"@site/docs/data-table/advance-usage.md",sourceDirName:"data-table",slug:"/data-table/advance-usage",permalink:"/zh-CN/docs/dev/data-table/advance-usage",draft:!1,tags:[],version:"current",frontMatter:{title:"Advanced Use Guide",language:"en"}},s={},u=[{value:"Table Structural Change",id:"table-structural-change",level:2},{value:"Rollup",id:"rollup",level:2},{value:"Query of Data Table",id:"query-of-data-table",level:2},{value:"Memory Limitation",id:"memory-limitation",level:3},{value:"Query Timeout",id:"query-timeout",level:3},{value:"Broadcast/Shuffle Join",id:"broadcastshuffle-join",level:3},{value:"Query Retry and High Availability",id:"query-retry-and-high-availability",level:3}],c={toc:u},y="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(y,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"advanced-use-guide"},"Advanced Use Guide"),(0,l.yg)("p",null,"Here we introduce some of Doris's advanced features."),(0,l.yg)("h2",{id:"table-structural-change"},"Table Structural Change"),(0,l.yg)("p",null,"Schema of the table can be modified using the ",(0,l.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN.md"},"ALTER TABLE COLUMN")," command, including the following modifications:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Additional columns"),(0,l.yg)("li",{parentName:"ul"},"Delete columns"),(0,l.yg)("li",{parentName:"ul"},"Modify column type"),(0,l.yg)("li",{parentName:"ul"},"Changing column order")),(0,l.yg)("p",null,"Examples are given below."),(0,l.yg)("p",null,"Schema of Table 1 is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")),(0,l.yg)("p",null,"We added a new column of uv, type BIGINT, aggregation type SUM, default value is 0:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 ADD COLUMN uv BIGINT SUM DEFAULT '0' after pv;\n")),(0,l.yg)("p",null,"After successful submission, you can view the progress of the job by following commands:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE COLUMN;\n")),(0,l.yg)("p",null,"When the job state is ",(0,l.yg)("inlineCode",{parentName:"p"},"FINISHED"),", the job is completed. The new Schema is in force."),(0,l.yg)("p",null,"After ALTER TABLE is completed, you can view the latest Schema through ",(0,l.yg)("inlineCode",{parentName:"p"},"DESC TABLE"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> DESC table1;\n+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n")),(0,l.yg)("p",null,"The following command can be used to cancel the job currently being executed:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE COLUMN FROM table1;\n")),(0,l.yg)("p",null,"For more help, see ",(0,l.yg)("inlineCode",{parentName:"p"},"HELP ALTER TABLE"),"."),(0,l.yg)("h2",{id:"rollup"},"Rollup"),(0,l.yg)("p",null,"Rollup can be understood as a materialized index structure of Table. ",(0,l.yg)("strong",{parentName:"p"},"materialized"),' because data is store as a concrete ("materialized") table independently, and ',(0,l.yg)("strong",{parentName:"p"},"indexing")," means that Rollup can adjust column order to increase the hit rate of prefix index, or reduce key column to increase data aggregation."),(0,l.yg)("p",null,"Use ",(0,l.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP.md"},"ALTER TABLE ROLLUP")," to perform various rollup changes."),(0,l.yg)("p",null,"Examples are given below."),(0,l.yg)("p",null,"Schema of Table 1 is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")),(0,l.yg)("p",null,"For table1 detailed data, siteid, citycode and username form a set of keys, which aggregate the PV field. If the business side often has the need to see the total amount of PV in the city, it can build a rollup with only citycode and pv."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 ADD ROLLUP rollup_city(citycode, pv);\n")),(0,l.yg)("p",null,"After successful submission, you can view the progress of the job by following commands:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE ROLLUP;\n")),(0,l.yg)("p",null,"When the job state is ",(0,l.yg)("inlineCode",{parentName:"p"},"FINISHED"),", the job is completed."),(0,l.yg)("p",null,"When Rollup is established, you can use ",(0,l.yg)("inlineCode",{parentName:"p"},"DESC table1 ALL")," to view the Rollup information of the table."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-mysql"},"mysql> desc table1 all;\n+-------------+----------+-------------+------+-------+--------+-------+\n| IndexName   | Field    | Type        | Null | Key   | Default | Extra |\n+-------------+----------+-------------+------+-------+---------+-------+\n| table1      | siteid   | int(11)     | No   | true  | 10      |       |\n|             | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | username | varchar(32) | No   | true  |         |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n|             | uv       | bigint(20)  | No   | false | 0       | SUM   |\n|             |          |             |      |       |         |       |\n| rollup_city | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n+-------------+----------+-------------+------+-------+---------+-------+\n8 rows in set (0.01 sec)\n")),(0,l.yg)("p",null,"The following command can be used to cancel the job currently being executed:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-mysql"},"CANCEL ALTER TABLE ROLLUP FROM table1;\n")),(0,l.yg)("p",null,"After Rollup is established, the query does not need to specify Rollup to query. Or specify the original table for query. The program automatically determines whether Rollup should be used. Whether Rollup is hit or not can be viewed by the ",(0,l.yg)("inlineCode",{parentName:"p"},"EXPLAIN your_sql;"),"command."),(0,l.yg)("p",null,"For more help, see ",(0,l.yg)("inlineCode",{parentName:"p"},"HELP ALTER TABLE"),"."),(0,l.yg)("h2",{id:"query-of-data-table"},"Query of Data Table"),(0,l.yg)("h3",{id:"memory-limitation"},"Memory Limitation"),(0,l.yg)("p",null,"To prevent a user's query from consuming too much memory. Queries are controlled in memory. A query task uses no more than 2GB of memory by default on a single BE node."),(0,l.yg)("p",null,"When users use it, if they find a ",(0,l.yg)("inlineCode",{parentName:"p"},"Memory limit exceeded")," error, they usually exceed the memory limit."),(0,l.yg)("p",null,"Users should try to optimize their SQL statements when they encounter memory overrun."),(0,l.yg)("p",null,"If it is found that 2GB memory cannot be satisfied, the memory parameters can be set manually."),(0,l.yg)("p",null,"Display query memory limits:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 2147483648 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')),(0,l.yg)("p",null,"The unit of ",(0,l.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," is byte, and the value of ",(0,l.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," can be changed by the ",(0,l.yg)("inlineCode",{parentName:"p"},"SET")," command. If changed to 8GB."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SET exec_mem_limit = 8589934592;\nQuery OK, 0 rows affected (0.00 sec)\nmysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 8589934592 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')),(0,l.yg)("blockquote",null,(0,l.yg)("ul",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ul"},"The above modification is session level and is only valid within the current connection session. Disconnecting and reconnecting will change back to the default value."),(0,l.yg)("li",{parentName:"ul"},"If you need to modify the global variable, you can set it as follows: ",(0,l.yg)("inlineCode",{parentName:"li"},"SET GLOBAL exec_mem_limit = 8589934592;")," When the setup is complete, disconnect the session and log in again, and the parameters will take effect permanently."))),(0,l.yg)("h3",{id:"query-timeout"},"Query Timeout"),(0,l.yg)("p",null,"The current default query time is set to 300 seconds. If a query is not completed within 300 seconds, the query will be cancelled by the Doris system. Users can use this parameter to customize the timeout time of their applications and achieve a blocking mode similar to wait (timeout)."),(0,l.yg)("p",null,"View the current timeout settings:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW VARIABLES LIKE "%query_timeout%";\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| QUERY_TIMEOUT | 900   |\n+---------------+-------+\n1 row in set (0.00 sec)\n')),(0,l.yg)("p",null,"Modify the timeout to 1 minute:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql>  SET query_timeout = 60;\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,l.yg)("blockquote",null,(0,l.yg)("ul",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ul"},"The current timeout check interval is 5 seconds, so timeouts less than 5 seconds are not very accurate."),(0,l.yg)("li",{parentName:"ul"},"The above modifications are also session level. Global validity can be modified by ",(0,l.yg)("inlineCode",{parentName:"li"},"SET GLOBAL"),"."))),(0,l.yg)("h3",{id:"broadcastshuffle-join"},"Broadcast/Shuffle Join"),(0,l.yg)("p",null,"By default, the system implements Join by conditionally filtering small tables, broadcasting them to the nodes where the large tables are located, forming a memory Hash table, and then streaming out the data of the large tables Hash Join. However, if the amount of data filtered by small tables cannot be put into memory, Join will not be able to complete at this time. The usual error should be caused by memory overrun first."),(0,l.yg)("p",null,"If you encounter the above situation, it is recommended to use Shuffle Join explicitly, also known as Partitioned Join. That is, small and large tables are Hash according to Join's key, and then distributed Join. This memory consumption is allocated to all computing nodes in the cluster."),(0,l.yg)("p",null,"Doris will try to use Broadcast Join first. If small tables are too large to broadcasting, Doris will switch to Shuffle Join automatically. Note that if you use Broadcast Join explicitly in this case, Doris will still switch to Shuffle Join automatically."),(0,l.yg)("p",null,"Use Broadcast Join (default):"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select sum(table1.pv) from table1 join table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")),(0,l.yg)("p",null,"Use Broadcast Join (explicitly specified):"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select sum(table1.pv) from table1 join [broadcast] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")),(0,l.yg)("p",null,"Shuffle Join:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select sum(table1.pv) from table1 join [shuffle] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.15 sec)\n")),(0,l.yg)("h3",{id:"query-retry-and-high-availability"},"Query Retry and High Availability"),(0,l.yg)("p",null,"When multiple FE nodes are deployed, users can deploy load balancing layers on top of multiple FEs to achieve high availability of Doris."),(0,l.yg)("p",null,"Here are some highly available solutions:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"The first")),(0,l.yg)("p",null,"I retry and load balancing in application layer code. For example, if a connection is found to be dead, it will automatically retry on other connections. Application-level code retry requires the application to configure multiple Doris front-end node addresses."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Second")),(0,l.yg)("p",null,"If you use MySQL JDBC connector to connect Doris, you can use jdbc's automatic retry mechanism:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"jdbc:mysql://[host1][:port1],[host2][:port2][,[host3][:port3]]...[/[database]][?propertyName1=propertyValue1[&propertyName2=propertyValue2]...]\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"The third")),(0,l.yg)("p",null,"Applications can connect to and deploy MySQL Proxy on the same machine by configuring MySQL Proxy's Failover and Load Balance functions."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"https://dev.mysql.com/doc/refman/5.6/en/proxy-users.html\n")))}m.isMDXComponent=!0}}]);