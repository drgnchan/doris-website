"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68799],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>u});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),g=r,u=d["".concat(l,".").concat(g)]||d[g]||y[g]||i;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,p[1]=o;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},442604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(58168),r=(a(296540),a(15680));const i={title:"Temporary Partition",language:"en"},p=void 0,o={unversionedId:"advanced/partition/table-temp-partition",id:"advanced/partition/table-temp-partition",title:"Temporary Partition",description:"\x3c!--",source:"@site/docs/advanced/partition/table-temp-partition.md",sourceDirName:"advanced/partition",slug:"/advanced/partition/table-temp-partition",permalink:"/docs/dev/advanced/partition/table-temp-partition",draft:!1,tags:[],version:"current",frontMatter:{title:"Temporary Partition",language:"en"},sidebar:"docs",previous:{title:"Dynamic Partition",permalink:"/docs/dev/advanced/partition/dynamic-partition"},next:{title:"Auto Partition",permalink:"/docs/dev/advanced/partition/auto-partition"}},l={},m=[{value:"Rules",id:"rules",level:2},{value:"Supported operations",id:"supported-operations",level:2},{value:"Add temporary partition",id:"add-temporary-partition",level:3},{value:"Delete temporary partition",id:"delete-temporary-partition",level:3},{value:"Replace partition",id:"replace-partition",level:3},{value:"Load and query of temporary partitions",id:"load-and-query-of-temporary-partitions",level:2},{value:"Relationship to other operations",id:"relationship-to-other-operations",level:2},{value:"DROP",id:"drop",level:3},{value:"TRUNCATE",id:"truncate",level:3},{value:"ALTER",id:"alter",level:3},{value:"Best Practices",id:"best-practices",level:2}],s={toc:m},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"temporary-partition"},"Temporary Partition"),(0,r.yg)("p",null,"Since version 0.12, Doris supports temporary partitioning."),(0,r.yg)("p",null,"A temporary partition belongs to a partitioned table. Only partitioned tables can create temporary partitions."),(0,r.yg)("h2",{id:"rules"},"Rules"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The partition columns of the temporary partition is the same as the formal partition and cannot be modified."),(0,r.yg)("li",{parentName:"ul"},"The partition ranges of all temporary partitions of a table cannot overlap, but the ranges of temporary partitions and formal partitions can overlap."),(0,r.yg)("li",{parentName:"ul"},"The partition name of the temporary partition cannot be the same as the formal partitions and other temporary partitions.")),(0,r.yg)("h2",{id:"supported-operations"},"Supported operations"),(0,r.yg)("p",null,"The temporary partition supports add, delete, and replace operations."),(0,r.yg)("h3",{id:"add-temporary-partition"},"Add temporary partition"),(0,r.yg)("p",null,"You can add temporary partitions to a table with the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER TABLE ADD TEMPORARY PARTITION")," statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'ALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN ("2020-02-01");\n\nALTER TABLE tbl2 ADD TEMPORARY PARTITION tp1 VALUES [("2020-01-01"), ("2020-02-01"));\n\nALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN ("2020-02-01")\n("replication_num" = "1")\nDISTRIBUTED BY HASH (k1) BUCKETS 5;\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai");\n\nALTER TABLE tbl4 ADD TEMPORARY PARTITION tp1 VALUES IN ((1, "Beijing"), (1, "Shanghai"));\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai")\n("replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n\n')),(0,r.yg)("p",null,"See ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP ALTER TABLE;")," for more help and examples."),(0,r.yg)("p",null,"Some instructions for adding operations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Adding a temporary partition is similar to adding a formal partition. The partition range of the temporary partition is independent of the formal partition."),(0,r.yg)("li",{parentName:"ul"},"Temporary partition can independently specify some attributes. Includes information such as the number of buckets, the number of replicas, or the storage medium.")),(0,r.yg)("h3",{id:"delete-temporary-partition"},"Delete temporary partition"),(0,r.yg)("p",null,"A table's temporary partition can be dropped with the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER TABLE DROP TEMPORARY PARTITION")," statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER TABLE tbl1 DROP TEMPORARY PARTITION tp1;\n")),(0,r.yg)("p",null,"See ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP ALTER TABLE;")," for more help and examples."),(0,r.yg)("p",null,"Some instructions for the delete operation:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Deleting the temporary partition will not affect the data of the formal partition.")),(0,r.yg)("h3",{id:"replace-partition"},"Replace partition"),(0,r.yg)("p",null,"You can replace formal partitions of a table with temporary partitions with the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER TABLE REPLACE PARTITION")," statement."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2, tp3);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2)\nPROPERTIES (\n\xa0\xa0\xa0\xa0"strict_range" = "false",\n\xa0\xa0\xa0\xa0"use_temp_partition_name" = "true"\n);\n')),(0,r.yg)("p",null,"See ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP ALTER TABLE;")," for more help and examples."),(0,r.yg)("p",null,"The replace operation has two special optional parameters:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"strict_range")),(0,r.yg)("p",{parentName:"li"},"The default is true. "),(0,r.yg)("p",{parentName:"li"},"For Range partition, When this parameter is true, the range union of all formal partitions to be replaced needs to be the same as the range union of the temporary partitions to be replaced. When set to false, you only need to ensure that the range between the new formal partitions does not overlap after replacement. "),(0,r.yg)("p",{parentName:"li"},"For List partition, this parameter is always true, and the enumeration values of all full partitions to be replaced must be identical to the enumeration values of the temporary partitions to be replaced."),(0,r.yg)("p",{parentName:"li"},"Here are some examples:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Example 1"),(0,r.yg)("p",{parentName:"li"},"  Range of partitions p1, p2, p3 to be replaced (=> union):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"(10, 20), [20, 30), [40, 50) => [10, 30), [40, 50)\n")),(0,r.yg)("p",{parentName:"li"},"  Replace the range of partitions tp1, tp2 (=> union):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"(10, 30), [40, 45), [45, 50) => [10, 30), [40, 50)\n")),(0,r.yg)("p",{parentName:"li"},"  The union of ranges is the same, so you can use tp1 and tp2 to replace p1, p2, p3.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Example 2"),(0,r.yg)("p",{parentName:"li"},"  Range of partition p1 to be replaced (=> union):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"(10, 50) => [10, 50)\n")),(0,r.yg)("p",{parentName:"li"},"  Replace the range of partitions tp1, tp2 (=> union):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"(10, 30), [40, 50) => [10, 30), [40, 50)\n")),(0,r.yg)("p",{parentName:"li"},"  The union of ranges is not the same. If ",(0,r.yg)("inlineCode",{parentName:"p"},"strict_range")," is true, you cannot use tp1 and tp2 to replace p1. If false, and the two partition ranges ",(0,r.yg)("inlineCode",{parentName:"p"},"[10, 30), [40, 50)")," and the other formal partitions do not overlap, they can be replaced.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Example 3"),(0,r.yg)("p",{parentName:"li"},"  Enumerated values of partitions p1, p2 to be replaced (=> union)."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"(1, 2, 3), (4, 5, 6) => (1, 2, 3, 4, 5, 6)\n")),(0,r.yg)("p",{parentName:"li"},"  Replace the enumerated values of partitions tp1, tp2, tp3 (=> union)."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"(1, 2, 3), (4), (5, 6) => (1, 2, 3, 4, 5, 6)\n")),(0,r.yg)("p",{parentName:"li"},"  The enumeration values are the same, you can use tp1, tp2, tp3 to replace p1, p2")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Example 4"),(0,r.yg)("p",{parentName:"li"},"  Enumerated values of partitions p1, p2, p3 to be replaced (=> union)."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'(("1", "beijing"), ("1", "shanghai")), (("2", "beijing"), ("2", "shanghai")), (("3", "beijing"), ("3", "shanghai")) => (("1", "beijing"), ("3", "shanghai")) "), ("1", "shanghai"), ("2", "beijing"), ("2", "shanghai"), ("3", "beijing"), ("3", "shanghai"))\n')),(0,r.yg)("p",{parentName:"li"},"  Replace the enumerated values of partitions tp1, tp2 (=> union)."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'(("1", "beijing"), ("1", "shanghai")), (("2", "beijing"), ("2", "shanghai"), ("3", "beijing"), ("3", "shanghai")) => (("1", "beijing") , ("1", "shanghai"), ("2", "beijing"), ("2", "shanghai"), ("3", "beijing"), ("3", "shanghai"))\n')),(0,r.yg)("p",{parentName:"li"},"  The enumeration values are the same, you can use tp1, tp2 to replace p1, p2, p3")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"use_temp_partition_name")),(0,r.yg)("p",{parentName:"li"},"The default is false. When this parameter is false, and the number of partitions to be replaced is the same as the number of replacement partitions, the name of the formal partition after the replacement remains unchanged. If true, after replacement, the name of the formal partition is the name of the replacement partition. Here are some examples:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Example 1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n")),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"use_temp_partition_name")," is false by default. After replacement, the partition name is still p1, but the related data and attributes are replaced with tp1."),(0,r.yg)("p",{parentName:"li"},"  If ",(0,r.yg)("inlineCode",{parentName:"p"},"use_temp_partition_name")," is true by default, the name of the partition is tp1 after replacement. The p1 partition no longer exists.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Example 2"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1);\n")),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"use_temp_partition_name")," is false by default, but this parameter is invalid because the number of partitions to be replaced and the number of replacement partitions are different. After the replacement, the partition name is tp1, and p1 and p2 no longer exist."))))),(0,r.yg)("p",null,"Some instructions for the replacement operation:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"After the partition is replaced successfully, the replaced partition will be deleted and cannot be recovered.")),(0,r.yg)("h2",{id:"load-and-query-of-temporary-partitions"},"Load and query of temporary partitions"),(0,r.yg)("p",null,"Users can load data into temporary partitions or specify temporary partitions for querying."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Load temporary partition"),(0,r.yg)("p",{parentName:"li"},"The syntax for specifying a temporary partition is slightly different depending on the load method. Here is a simple illustration through an example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"INSERT INTO tbl TEMPORARY PARTITION (tp1, tp2, ...) SELECT ....\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "label: 123" -H "temporary_partition: tp1, tp2, ..." -T testData http: // host: port / api / testDb / testTbl / _stream_load\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'LOAD LABEL example_db.label1\n(\nDATA INFILE ("hdfs: // hdfs_host: hdfs_port / user / palo / data / input / file")\nINTO TABLE `my_table`\nTEMPORARY PARTITION (tp1, tp2, ...)\n...\n)\nWITH BROKER hdfs ("username" = "hdfs_user", "password" = "hdfs_password");\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS (k1, k2, k3, v1, v2, v3 = k1 * 100),\nTEMPORARY PARTITIONS (tp1, tp2, ...),\nWHERE k1> 100\nPROPERTIES\n(...)\nFROM KAFKA\n(...);\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Query the temporary partition"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"SELECT ... FROM\ntbl1 TEMPORARY PARTITION (tp1, tp2, ...)\nJOIN\ntbl2 TEMPORARY PARTITION (tp1, tp2, ...)\nON ...\nWHERE ...;\n")))),(0,r.yg)("h2",{id:"relationship-to-other-operations"},"Relationship to other operations"),(0,r.yg)("h3",{id:"drop"},"DROP"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"After using the ",(0,r.yg)("inlineCode",{parentName:"li"},"DROP")," operation to directly drop the database or table, you can recover the database or table (within a limited time) through the ",(0,r.yg)("inlineCode",{parentName:"li"},"RECOVER")," command, but the temporary partition will not be recovered."),(0,r.yg)("li",{parentName:"ul"},"After the formal partition is dropped using the ",(0,r.yg)("inlineCode",{parentName:"li"},"ALTER")," command, the partition can be recovered by the ",(0,r.yg)("inlineCode",{parentName:"li"},"RECOVER")," command (within a limited time). Operating a formal partition is not related to a temporary partition."),(0,r.yg)("li",{parentName:"ul"},"After the temporary partition is dropped using the ",(0,r.yg)("inlineCode",{parentName:"li"},"ALTER")," command, the temporary partition cannot be recovered through the ",(0,r.yg)("inlineCode",{parentName:"li"},"RECOVER")," command.")),(0,r.yg)("h3",{id:"truncate"},"TRUNCATE"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use the ",(0,r.yg)("inlineCode",{parentName:"li"},"TRUNCATE")," command to empty the table. The temporary partition of the table will be deleted and cannot be recovered."),(0,r.yg)("li",{parentName:"ul"},"When using ",(0,r.yg)("inlineCode",{parentName:"li"},"TRUNCATE")," command to empty the formal partition, it will not affect the temporary partition."),(0,r.yg)("li",{parentName:"ul"},"You cannot use the ",(0,r.yg)("inlineCode",{parentName:"li"},"TRUNCATE")," command to empty the temporary partition.")),(0,r.yg)("h3",{id:"alter"},"ALTER"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When the table has a temporary partition, you cannot use the ",(0,r.yg)("inlineCode",{parentName:"li"},"ALTER")," command to perform Schema Change, Rollup, etc. on the table."),(0,r.yg)("li",{parentName:"ul"},"You cannot add temporary partitions to a table while the table is undergoing a alter operation.")),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Atomic overwrite"),(0,r.yg)("p",{parentName:"li"},"In some cases, the user wants to be able to rewrite the data of a certain partition, but if it is dropped first and then loaded, there will be a period of time when the data cannot be seen. At this moment, the user can first create a corresponding temporary partition, load new data into the temporary partition, and then replace the original partition atomically through the ",(0,r.yg)("inlineCode",{parentName:"p"},"REPLACE")," operation to achieve the purpose. For atomic overwrite operations of non-partitioned tables, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/advanced/alter-table/replace-table"},"Replace Table Document"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the number of buckets"),(0,r.yg)("p",{parentName:"li"},"In some cases, the user used an inappropriate number of buckets when creating a partition. The user can first create a temporary partition corresponding to the partition range and specify a new number of buckets. Then use the ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," command to load the data of the formal partition into the temporary partition. Through the replacement operation, the original partition is replaced atomically to achieve the purpose.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Merge or split partitions"),(0,r.yg)("p",{parentName:"li"},"In some cases, users want to modify the range of partitions, such as merging two partitions, or splitting a large partition into multiple smaller partitions. Then the user can first create temporary partitions corresponding to the merged or divided range, and then load the data of the formal partition into the temporary partition through the ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," command. Through the replacement operation, the original partition is replaced atomically to achieve the purpose."))))}y.isMDXComponent=!0}}]);