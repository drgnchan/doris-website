"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[33918],{95788:(e,a,l)=>{l.d(a,{Iu:()=>s,yg:()=>u});var t=l(11504);function n(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function r(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?r(Object(l),!0).forEach((function(a){n(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function p(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=t.createContext({}),m=function(e){var a=t.useContext(i),l=a;return e&&(l="function"==typeof e?e(a):o(o({},a),e)),l},s=function(e){var a=m(e.components);return t.createElement(i.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var l=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=m(l),c=n,u=y["".concat(i,".").concat(c)]||y[c]||g[c]||r;return l?t.createElement(u,o(o({ref:a},s),{},{components:l})):t.createElement(u,o({ref:a},s))}));function u(e,a){var l=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=c;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[y]="string"==typeof e?e:n,o[1]=p;for(var m=2;m<r;m++)o[m]=l[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},76356:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var t=l(45072),n=(l(11504),l(95788));const r={title:"ALTER-TABLE-PROPERTY",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",title:"ALTER-TABLE-PROPERTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-TABLE-PROPERTY",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-REPLACE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE"},next:{title:"ALTER-TABLE-COMMENT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT"}},i={},m=[{value:"ALTER-TABLE-PROPERTY",id:"alter-table-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:m},y="wrapper";function g(e){let{components:a,...l}=e;return(0,n.yg)(y,(0,t.c)({},s,l,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"alter-table-property"},"ALTER-TABLE-PROPERTY"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"ALTER TABLE PROPERTY"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u5df2\u6709 table \u7684 property \u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u3002\u8fd9\u4e2a\u64cd\u4f5c\u662f\u540c\u6b65\u7684\uff0c\u547d\u4ee4\u8fd4\u56de\u8868\u793a\u6267\u884c\u5b8c\u6bd5\u3002"),(0,n.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,n.yg)("p",null,"property \u7684 alter_clause \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u4fee\u6539\u65b9\u5f0f"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u7684 bloom filter \u5217")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");\n')),(0,n.yg)("p",null,"\u4e5f\u53ef\u4ee5\u5408\u5e76\u5230\u4e0a\u9762\u7684 schema change \u64cd\u4f5c\u4e2d\uff08\u6ce8\u610f\u591a\u5b50\u53e5\u7684\u8bed\u6cd5\u6709\u5c11\u8bb8\u533a\u522b\uff09"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nDROP COLUMN col2\nPROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n')),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u7684Colocate \u5c5e\u6027")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n')),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"\u5c06\u8868\u7684\u5206\u6876\u65b9\u5f0f\u7531 Hash Distribution \u6539\u4e3a Random Distribution")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("distribution_type" = "random");\n')),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027(\u652f\u6301\u672a\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027\u7684\u8868\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027)")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "false");\n')),(0,n.yg)("p",null,"\u5982\u679c\u9700\u8981\u5728\u672a\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027\u7684\u8868\u4e2d\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027\uff0c\u5219\u9700\u8981\u6307\u5b9a\u6240\u6709\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027\n(\u6ce8:\u975e\u5206\u533a\u8868\u4e0d\u652f\u6301\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027)"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set (\n  "dynamic_partition.enable" = "true", \n  "dynamic_partition.time_unit" = "DAY", \n  "dynamic_partition.end" = "3", \n  "dynamic_partition.prefix" = "p", \n  "dynamic_partition.buckets" = "32"\n);\n')),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u7684 in_memory \u5c5e\u6027\uff0c\u53ea\u652f\u6301\u4fee\u6539\u4e3a'false'")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("in_memory" = "false");\n')),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"\u542f\u7528 \u6279\u91cf\u5220\u9664\u529f\u80fd")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";\n')),(0,n.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u53ea\u80fd\u7528\u5728unique \u8868"),(0,n.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u65e7\u8868\u652f\u6301\u6279\u91cf\u5220\u9664\u529f\u80fd\uff0c\u65b0\u8868\u521b\u5efa\u65f6\u5df2\u7ecf\u652f\u6301")),(0,n.yg)("ol",{start:7},(0,n.yg)("li",{parentName:"ol"},"\u542f\u7528\u6309\u7167sequence column\u7684\u503c\u6765\u4fdd\u8bc1\u5bfc\u5165\u987a\u5e8f\u7684\u529f\u80fd")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES (\n  "function_column.sequence_type" = "Date"\n);\n')),(0,n.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u53ea\u80fd\u7528\u5728unique \u8868"),(0,n.yg)("li",{parentName:"ul"},"sequence_type\u7528\u6765\u6307\u5b9asequence\u5217\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a\u6574\u578b\u548c\u65f6\u95f4\u7c7b\u578b"),(0,n.yg)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u65b0\u5bfc\u5165\u6570\u636e\u7684\u6709\u5e8f\u6027\uff0c\u5386\u53f2\u6570\u636e\u65e0\u6cd5\u66f4\u6539")),(0,n.yg)("ol",{start:8},(0,n.yg)("li",{parentName:"ol"},"\u5c06\u8868\u7684\u9ed8\u8ba4\u5206\u6876\u6570\u6539\u4e3a50")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table MODIFY DISTRIBUTION DISTRIBUTED BY HASH(k1) BUCKETS 50;\n")),(0,n.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u53ea\u80fd\u7528\u5728\u5206\u533a\u7c7b\u578b\u4e3aRANGE\uff0c\u91c7\u7528\u54c8\u5e0c\u5206\u6876\u7684\u975ecolocate\u8868")),(0,n.yg)("ol",{start:9},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u6ce8\u91ca")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COMMENT "new comment";\n')),(0,n.yg)("ol",{start:10},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u5217\u6ce8\u91ca")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COLUMN k1 COMMENT "k1", MODIFY COLUMN k2 COMMENT "k2";\n')),(0,n.yg)("ol",{start:11},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u6539\u5f15\u64ce\u7c7b\u578b"),(0,n.yg)("p",{parentName:"li"},"\u4ec5\u652f\u6301\u5c06 MySQL \u7c7b\u578b\u4fee\u6539\u4e3a ODBC \u7c7b\u578b\u3002driver \u7684\u503c\u4e3a odbc.init \u914d\u7f6e\u4e2d\u7684 driver \u540d\u79f0\u3002"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table MODIFY ENGINE TO odbc PROPERTIES("driver" = "MySQL");\n')),(0,n.yg)("ol",{start:12},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u526f\u672c\u6570")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table SET ("replication_num" = "2");\nALTER TABLE example_db.mysql_table SET ("default.replication_num" = "2");\nALTER TABLE example_db.mysql_table SET ("replication_allocation" = "tag.location.default: 1");\nALTER TABLE example_db.mysql_table SET ("default.replication_allocation" = "tag.location.default: 1");\n')),(0,n.yg)("p",null,"\u6ce8\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"default \u524d\u7f00\u7684\u5c5e\u6027\u8868\u793a\u4fee\u6539\u8868\u7684\u9ed8\u8ba4\u526f\u672c\u5206\u5e03\u3002\u8fd9\u79cd\u4fee\u6539\u4e0d\u4f1a\u4fee\u6539\u8868\u7684\u5f53\u524d\u5b9e\u9645\u526f\u672c\u5206\u5e03\uff0c\u800c\u53ea\u5f71\u54cd\u5206\u533a\u8868\u4e0a\u65b0\u5efa\u5206\u533a\u7684\u526f\u672c\u5206\u5e03\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u5bf9\u4e8e\u975e\u5206\u533a\u8868\uff0c\u4fee\u6539\u4e0d\u5e26 default \u524d\u7f00\u7684\u526f\u672c\u5206\u5e03\u5c5e\u6027\uff0c\u4f1a\u540c\u65f6\u4fee\u6539\u8868\u7684\u9ed8\u8ba4\u526f\u672c\u5206\u5e03\u548c\u5b9e\u9645\u526f\u672c\u5206\u5e03\u3002\u5373\u4fee\u6539\u540e\uff0c\u901a\u8fc7 ",(0,n.yg)("inlineCode",{parentName:"li"},"show create table")," \u548c ",(0,n.yg)("inlineCode",{parentName:"li"},"show partitions from tbl")," \u8bed\u53e5\u53ef\u4ee5\u770b\u5230\u526f\u672c\u5206\u5e03\u6570\u636e\u90fd\u88ab\u4fee\u6539\u4e86\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u5bf9\u4e8e\u5206\u533a\u8868\uff0c\u8868\u7684\u5b9e\u9645\u526f\u672c\u5206\u5e03\u662f\u5206\u533a\u7ea7\u522b\u7684\uff0c\u5373\u6bcf\u4e2a\u5206\u533a\u6709\u81ea\u5df1\u7684\u526f\u672c\u5206\u5e03\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,n.yg)("inlineCode",{parentName:"li"},"show partitions from tbl")," \u8bed\u53e5\u67e5\u770b\u3002\u5982\u679c\u60f3\u4fee\u6539\u5b9e\u9645\u526f\u672c\u5206\u5e03\uff0c\u8bf7\u53c2\u9605 ",(0,n.yg)("inlineCode",{parentName:"li"},"ALTER TABLE PARTITION"),"\u3002")),(0,n.yg)("p",null,"13","."," ",(0,n.yg)("strong",{parentName:"p"},"[Experimental]")," \u6253\u5f00",(0,n.yg)("inlineCode",{parentName:"p"},"light_schema_change")),(0,n.yg)("p",null,"  \u5bf9\u4e8e\u5efa\u8868\u65f6\u672a\u5f00\u542flight_schema_change\u7684\u8868\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u6253\u5f00\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table SET ("light_schema_change" = "true");\n')),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u7684 bloom filter \u5217")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table SET (\n  "bloom_filter_columns"="k1,k2,k3"\n);\n')),(0,n.yg)("p",null,"\u4e5f\u53ef\u4ee5\u5408\u5e76\u5230\u4e0a\u9762\u7684 schema change \u64cd\u4f5c\u4e2d\uff08\u6ce8\u610f\u591a\u5b50\u53e5\u7684\u8bed\u6cd5\u6709\u5c11\u8bb8\u533a\u522b\uff09"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nDROP COLUMN col2\nPROPERTIES (\n  "bloom_filter_columns"="k1,k2,k3"\n);\n')),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u7684Colocate \u5c5e\u6027")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n')),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"\u5c06\u8868\u7684\u5206\u6876\u65b9\u5f0f\u7531 Hash Distribution \u6539\u4e3a Random Distribution")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set (\n  "distribution_type" = "random"\n);\n')),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027(\u652f\u6301\u672a\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027\u7684\u8868\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027)")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set (\n  "dynamic_partition.enable" = "false"\n);\n')),(0,n.yg)("p",null,"\u5982\u679c\u9700\u8981\u5728\u672a\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027\u7684\u8868\u4e2d\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027\uff0c\u5219\u9700\u8981\u6307\u5b9a\u6240\u6709\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027\n(\u6ce8:\u975e\u5206\u533a\u8868\u4e0d\u652f\u6301\u6dfb\u52a0\u52a8\u6001\u5206\u533a\u5c5e\u6027)"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set (\n  "dynamic_partition.enable" = "true", \n  "dynamic_partition.time_unit" = "DAY", \n  "dynamic_partition.end" = "3", \n  "dynamic_partition.prefix" = "p", \n  "dynamic_partition.buckets" = "32"\n);\n')),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u7684 in_memory \u5c5e\u6027\uff0c\u53ea\u652f\u6301\u4fee\u6539\u4e3a'false'")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("in_memory" = "false");\n')),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"\u542f\u7528 \u6279\u91cf\u5220\u9664\u529f\u80fd")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";\n')),(0,n.yg)("ol",{start:7},(0,n.yg)("li",{parentName:"ol"},"\u542f\u7528\u6309\u7167sequence column\u7684\u503c\u6765\u4fdd\u8bc1\u5bfc\u5165\u987a\u5e8f\u7684\u529f\u80fd")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES (\n  "function_column.sequence_type" = "Date"\n);\n')),(0,n.yg)("ol",{start:8},(0,n.yg)("li",{parentName:"ol"},"\u5c06\u8868\u7684\u9ed8\u8ba4\u5206\u6876\u6570\u6539\u4e3a50")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table MODIFY DISTRIBUTION DISTRIBUTED BY HASH(k1) BUCKETS 50;\n")),(0,n.yg)("ol",{start:9},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u6ce8\u91ca")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COMMENT "new comment";\n')),(0,n.yg)("ol",{start:10},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u5217\u6ce8\u91ca")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COLUMN k1 COMMENT "k1", MODIFY COLUMN k2 COMMENT "k2";\n')),(0,n.yg)("ol",{start:11},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u5f15\u64ce\u7c7b\u578b")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table MODIFY ENGINE TO odbc PROPERTIES("driver" = "MySQL");\n')),(0,n.yg)("ol",{start:12},(0,n.yg)("li",{parentName:"ol"},"\u7ed9\u8868\u6dfb\u52a0\u51b7\u70ed\u5206\u5c42\u6570\u636e\u8fc1\u79fb\u7b56\u7565")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},' ALTER TABLE create_table_not_have_policy set ("storage_policy" = "created_create_table_alter_policy");\n')),(0,n.yg)("p",null,"\u6ce8\uff1a\u8868\u6ca1\u6709\u5173\u8054\u8fc7storage policy\uff0c\u624d\u80fd\u88ab\u6dfb\u52a0\u6210\u529f\uff0c\u4e00\u4e2a\u8868\u53ea\u80fd\u6dfb\u52a0\u4e00\u4e2astorage policy"),(0,n.yg)("ol",{start:13},(0,n.yg)("li",{parentName:"ol"},"\u7ed9\u8868\u7684partition\u6dfb\u52a0\u51b7\u70ed\u5206\u5c42\u6570\u636e\u8fc1\u79fb\u7b56\u7565")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="created_create_table_partition_alter_policy");\n')),(0,n.yg)("p",null,"\u6ce8\uff1a\u8868\u7684partition\u6ca1\u6709\u5173\u8054\u8fc7storage policy\uff0c\u624d\u80fd\u88ab\u6dfb\u52a0\u6210\u529f\uff0c\u4e00\u4e2a\u8868\u53ea\u80fd\u6dfb\u52a0\u4e00\u4e2astorage policy"),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, PROPERTY, ALTER TABLE\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}g.isMDXComponent=!0}}]);