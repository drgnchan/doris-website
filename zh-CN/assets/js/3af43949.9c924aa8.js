"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[91100],{95788:(e,a,t)=>{t.d(a,{Iu:()=>m,yg:()=>T});var l=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=l.createContext({}),u=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=u(e.components);return l.createElement(o.Provider,{value:a},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},y=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(t),y=n,T=s["".concat(o,".").concat(y)]||s[y]||g[y]||r;return t?l.createElement(T,i(i({ref:a},m),{},{components:t})):l.createElement(T,i({ref:a},m))}));function T(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=y;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}y.displayName="MDXCreateElement"},96488:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=t(45072),n=(t(11504),t(95788));const r={title:"ALTER-TABLE-PARTITION",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",title:"ALTER-TABLE-PARTITION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-TABLE-PARTITION",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-COLUMN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},next:{title:"ALTER-TABLE-BITMAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP"}},o={},u=[{value:"ALTER-TABLE-PARTITION",id:"alter-table-partition",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:u},s="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(s,(0,l.c)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"alter-table-partition"},"ALTER-TABLE-PARTITION"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"ALTER TABLE PARTITION"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u6709 partition \u7684 table \u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u3002"),(0,n.yg)("p",null,"\u8fd9\u4e2a\u64cd\u4f5c\u662f\u540c\u6b65\u7684\uff0c\u547d\u4ee4\u8fd4\u56de\u8868\u793a\u6267\u884c\u5b8c\u6bd5\u3002"),(0,n.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,n.yg)("p",null,"partition \u7684 alter_clause \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u4fee\u6539\u65b9\u5f0f"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u589e\u52a0\u5206\u533a")),(0,n.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ADD PARTITION [IF NOT EXISTS] partition_name \npartition_desc ["key"="value"]\n[DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n')),(0,n.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"partition_desc \u652f\u6301\u4ee5\u4e0b\u4e24\u79cd\u5199\u6cd5",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"VALUES LESS THAN ",'[MAXVALUE|("value1", ...)]'),(0,n.yg)("li",{parentName:"ul"},'VALUES [("value1", ...), ("value1", ...))'))),(0,n.yg)("li",{parentName:"ul"},"\u5206\u533a\u4e3a\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\uff0c\u5982\u679c\u7528\u6237\u4ec5\u6307\u5b9a\u53f3\u8fb9\u754c\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u786e\u5b9a\u5de6\u8fb9\u754c"),(0,n.yg)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5206\u6876\u65b9\u5f0f\uff0c\u5219\u81ea\u52a8\u4f7f\u7528\u5efa\u8868\u4f7f\u7528\u7684\u5206\u6876\u65b9\u5f0f\u548c\u5206\u6876\u6570\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5982\u6307\u5b9a\u5206\u6876\u65b9\u5f0f\uff0c\u53ea\u80fd\u4fee\u6539\u5206\u6876\u6570\uff0c\u4e0d\u53ef\u4fee\u6539\u5206\u6876\u65b9\u5f0f\u6216\u5206\u6876\u5217\u3002\u5982\u679c\u6307\u5b9a\u4e86\u5206\u6876\u65b9\u5f0f\uff0c\u4f46\u662f\u6ca1\u6709\u6307\u5b9a\u5206\u6876\u6570\uff0c\u5219\u5206\u6876\u6570\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u503c10\uff0c\u4e0d\u4f1a\u4f7f\u7528\u5efa\u8868\u65f6\u6307\u5b9a\u7684\u5206\u6876\u6570\u3002\u5982\u679c\u8981\u6307\u5b9a\u5206\u6876\u6570\uff0c\u5219\u5fc5\u987b\u6307\u5b9a\u5206\u6876\u65b9\u5f0f\u3002"),(0,n.yg)("li",{parentName:"ul"},'["key"="value"]'," \u90e8\u5206\u53ef\u4ee5\u8bbe\u7f6e\u5206\u533a\u7684\u4e00\u4e9b\u5c5e\u6027\uff0c\u5177\u4f53\u8bf4\u660e\u89c1 ",(0,n.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")),(0,n.yg)("li",{parentName:"ul"},"\u5982\u679c\u5efa\u8868\u65f6\u7528\u6237\u672a\u663e\u5f0f\u521b\u5efaPartition,\u5219\u4e0d\u652f\u6301\u901a\u8fc7ALTER\u7684\u65b9\u5f0f\u589e\u52a0\u5206\u533a"),(0,n.yg)("li",{parentName:"ul"},"\u5982\u679c\u7528\u6237\u4f7f\u7528\u7684\u662fList Partition\u5219\u53ef\u4ee5\u589e\u52a0default partition\uff0cdefault partition\u5c06\u4f1a\u5b58\u50a8\u6240\u6709\u4e0d\u6ee1\u8db3\u5176\u4ed6\u5206\u533a\u952e\u8981\u6c42\u7684\u6570\u636e\u3002",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"ALTER TABLE table_name ADD PARTITION partition_name")))),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"\u5220\u9664\u5206\u533a")),(0,n.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"DROP PARTITION [IF EXISTS] partition_name [FORCE]\n")),(0,n.yg)("p",null," \u6ce8\u610f\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u5206\u533a\u65b9\u5f0f\u7684\u8868\u81f3\u5c11\u8981\u4fdd\u7559\u4e00\u4e2a\u5206\u533a\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u6267\u884c DROP PARTITION \u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u53ef\u4ee5\u901a\u8fc7 RECOVER \u8bed\u53e5\u6062\u590d\u88ab\u5220\u9664\u7684\u5206\u533a\u3002\u8be6\u89c1 SQL\u624b\u518c-\u6570\u636e\u5e93\u7ba1\u7406-RECOVER \u8bed\u53e5"),(0,n.yg)("li",{parentName:"ul"},"\u5982\u679c\u6267\u884c DROP PARTITION FORCE\uff0c\u5219\u7cfb\u7edf\u4e0d\u4f1a\u68c0\u67e5\u8be5\u5206\u533a\u662f\u5426\u5b58\u5728\u672a\u5b8c\u6210\u7684\u4e8b\u52a1\uff0c\u5206\u533a\u5c06\u76f4\u63a5\u88ab\u5220\u9664\u5e76\u4e14\u4e0d\u80fd\u88ab\u6062\u590d\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u6267\u884c\u6b64\u64cd\u4f5c")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u4fee\u6539\u5206\u533a\u5c5e\u6027"),(0,n.yg)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'MODIFY PARTITION p1|(p1[, p2, ...]) SET ("key" = "value", ...)\n')),(0,n.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5f53\u524d\u652f\u6301\u4fee\u6539\u5206\u533a\u7684\u4e0b\u5217\u5c5e\u6027\uff1a",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"storage_medium"),(0,n.yg)("li",{parentName:"ul"},"storage_cooldown_time"),(0,n.yg)("li",{parentName:"ul"},"replication_num "),(0,n.yg)("li",{parentName:"ul"},"in_memory"))),(0,n.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5355\u5206\u533a\u8868\uff0cpartition_name \u540c\u8868\u540d\u3002")),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u589e\u52a0\u5206\u533a, \u73b0\u6709\u5206\u533a [MIN, 2013-01-01)\uff0c\u589e\u52a0\u5206\u533a [2013-01-01, 2014-01-01)\uff0c\u4f7f\u7528\u9ed8\u8ba4\u5206\u6876\u65b9\u5f0f")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2014-01-01");\n')),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"\u589e\u52a0\u5206\u533a\uff0c\u4f7f\u7528\u65b0\u7684\u5206\u6876\u6570")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\nDISTRIBUTED BY HASH(k1) BUCKETS 20;\n')),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"\u589e\u52a0\u5206\u533a\uff0c\u4f7f\u7528\u65b0\u7684\u526f\u672c\u6570")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n("replication_num"="1");\n')),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"\u4fee\u6539\u5206\u533a\u526f\u672c\u6570")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION p1 SET("replication_num"="1");\n')),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"\u6279\u91cf\u4fee\u6539\u6307\u5b9a\u5206\u533a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION (p1, p2, p4) SET("replication_num"="1");\n')),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"\u6279\u91cf\u4fee\u6539\u6240\u6709\u5206\u533a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION (*) SET("storage_medium"="HDD");\n')),(0,n.yg)("ol",{start:7},(0,n.yg)("li",{parentName:"ol"},"\u5220\u9664\u5206\u533a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP PARTITION p1;\n")),(0,n.yg)("ol",{start:8},(0,n.yg)("li",{parentName:"ol"},"\u6279\u91cf\u5220\u9664\u5206\u533a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP PARTITION p1,\nDROP PARTITION p2,\nDROP PARTITION p3;\n")),(0,n.yg)("ol",{start:9},(0,n.yg)("li",{parentName:"ol"},"\u589e\u52a0\u4e00\u4e2a\u6307\u5b9a\u4e0a\u4e0b\u754c\u7684\u5206\u533a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01")); \n')),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, PARTITION, ALTER TABLE\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}g.isMDXComponent=!0}}]);