"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1332],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>y});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,y=m["".concat(s,".").concat(g)]||m[g]||c[g]||l;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},98664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(45072),r=(a(11504),a(95788));const l={title:"ALTER-TABLE-PARTITION",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",title:"ALTER-TABLE-PARTITION",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-TABLE-PARTITION",language:"en"},sidebar:"docs",previous:{title:"ALTER-TABLE-BITMAP",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP"},next:{title:"ALTER-TABLE-COLUMN",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"}},s={},p=[{value:"ALTER-TABLE-PARTITION",id:"alter-table-partition",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-table-partition"},"ALTER-TABLE-PARTITION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER TABLE PARTITION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to modify the partition of an existing table."),(0,r.yg)("p",null,"This operation is synchronous, and the return of the command indicates the completion of the execution."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,r.yg)("p",null,"The alter_clause of partition supports the following modification methods"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Add partition")),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADD PARTITION [IF NOT EXISTS] partition_name\npartition_desc ["key"="value"]\n[DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n')),(0,r.yg)("p",null,"Notice:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"partition_desc supports the following two ways of writing",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"VALUES LESS THAN ",'[MAXVALUE|("value1", ...)]'),(0,r.yg)("li",{parentName:"ul"},'VALUES [("value1", ...), ("value1", ...))'))),(0,r.yg)("li",{parentName:"ul"},"The partition is left closed and right open. If the user only specifies the right boundary, the system will automatically determine the left boundary"),(0,r.yg)("li",{parentName:"ul"},"If the bucketing method is not specified, the bucketing method and bucket number used for creating the table would be automatically used"),(0,r.yg)("li",{parentName:"ul"},"If the bucketing method is specified, only the number of buckets can be modified, not the bucketing method or the bucketing column. If the bucketing method is specified but the number of buckets not be specified, the default value ",(0,r.yg)("inlineCode",{parentName:"li"},"10")," will be used for bucket number instead of the number specified when the table is created. If the number of buckets modified, the bucketing method needs to be specified simultaneously."),(0,r.yg)("li",{parentName:"ul"},"The ",'["key"="value"]'," section can set some attributes of the partition, see ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")),(0,r.yg)("li",{parentName:"ul"},"If the user does not explicitly create a partition when creating a table, adding a partition by ALTER is not supported"),(0,r.yg)("li",{parentName:"ul"},"If the user uses list partition then they can add default partition to the table",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"ALTER TABLE ADD PARTITION DEFAULT")))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Delete the partition")),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP PARTITION [IF EXISTS] partition_name [FORCE]\n")),(0,r.yg)("p",null," Notice:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"At least one partition must be reserved for tables using partitioning."),(0,r.yg)("li",{parentName:"ul"},"After executing DROP PARTITION for a period of time, the deleted partition can be recovered through the RECOVER statement. For details, see SQL Manual - Database Management - RECOVER Statement"),(0,r.yg)("li",{parentName:"ul"},"If you execute DROP PARTITION FORCE, the system will not check whether there are unfinished transactions in the partition, the partition will be deleted directly and cannot be recovered, this operation is generally not recommended")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the partition properties"),(0,r.yg)("p",{parentName:"li"},"grammar:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MODIFY PARTITION p1|(p1[, p2, ...]) SET ("key" = "value", ...)\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Currently supports modifying the following properties of partitions:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"storage_medium\n-storage_cooldown_time"),(0,r.yg)("li",{parentName:"ul"},"replication_num"),(0,r.yg)("li",{parentName:"ul"},"in_memory"))),(0,r.yg)("li",{parentName:"ul"},"For single-partition tables, partition_name is the same as the table name.")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Add partition, existing partition [MIN, 2013-01-01), add partition [2013-01-01, 2014-01-01), use default bucketing method")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2014-01-01");\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Increase the partition and use the new number of buckets")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\nDISTRIBUTED BY HASH(k1) BUCKETS 20;\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Increase the partition and use the new number of replicas")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n("replication_num"="1");\n')),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Modify the number of partition replicas")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION p1 SET("replication_num"="1");\n')),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Batch modify the specified partition")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION (p1, p2, p4) SET("replication_num"="1");\n')),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Batch modify all partitions")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION (*) SET("storage_medium"="HDD");\n')),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"Delete partition")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP PARTITION p1;\n")),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},"Add a partition specifying upper and lower bounds")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01"));\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, PARTITION, ALTER TABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);