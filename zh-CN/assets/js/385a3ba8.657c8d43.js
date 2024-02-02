"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10176],{95788:(e,l,a)=>{a.d(l,{Iu:()=>i,yg:()=>s});var n=a(11504);function t(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function r(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?r(Object(a),!0).forEach((function(l){t(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function o(e,l){if(null==e)return{};var a,n,t=function(e,l){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],l.indexOf(a)>=0||(t[a]=e[a]);return t}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=n.createContext({}),m=function(e){var l=n.useContext(u),a=l;return e&&(a="function"==typeof e?e(l):p(p({},l),e)),a},i=function(e){var l=m(e.components);return n.createElement(u.Provider,{value:l},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(e,l){var a=e.components,t=e.mdxType,r=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),y=m(a),c=t,s=y["".concat(u,".").concat(c)]||y[c]||g[c]||r;return a?n.createElement(s,p(p({ref:l},i),{},{components:a})):n.createElement(s,p({ref:l},i))}));function s(e,l){var a=arguments,t=l&&l.mdxType;if("string"==typeof e||t){var r=a.length,p=new Array(r);p[0]=c;var o={};for(var u in l)hasOwnProperty.call(l,u)&&(o[u]=l[u]);o.originalType=e,o[y]="string"==typeof e?e:t,p[1]=o;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47728:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(45072),t=(a(11504),a(95788));const r={title:"ALTER-TABLE-COLUMN",language:"zh-CN"},p=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",title:"ALTER-TABLE-COLUMN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ALTER-TABLE-COLUMN",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-DATABASE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE"},next:{title:"ALTER-TABLE-PARTITION",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"}},u={},m=[{value:"ALTER-TABLE-COLUMN",id:"alter-table-column",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],i={toc:m},y="wrapper";function g(e){let{components:l,...a}=e;return(0,t.yg)(y,(0,n.c)({},i,a,{components:l,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"alter-table-column"},"ALTER-TABLE-COLUMN"),(0,t.yg)("h3",{id:"name"},"Name"),(0,t.yg)("p",null,"ALTER TABLE COLUMN"),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u5df2\u6709 table \u8fdb\u884c Schema change \u64cd\u4f5c\u3002schema change \u662f\u5f02\u6b65\u7684\uff0c\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u5219\u8fd4\u56de\uff0c\u4e4b\u540e\u53ef\u4f7f\u7528",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"},"SHOW ALTER TABLE COLUMN")," \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002"),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,t.yg)("p",null,"schema change \u7684 alter_clause \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u4fee\u6539\u65b9\u5f0f\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5411\u6307\u5b9a index \u7684\u6307\u5b9a\u4f4d\u7f6e\u6dfb\u52a0\u4e00\u5217")),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("p",null," \u6ce8\u610f\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u589e\u52a0 value \u5217\uff0c\u9700\u8981\u6307\u5b9a agg_type"),(0,t.yg)("li",{parentName:"ul"},"\u975e\u805a\u5408\u6a21\u578b\uff08\u5982 DUPLICATE KEY\uff09\u5982\u679c\u589e\u52a0key\u5217\uff0c\u9700\u8981\u6307\u5b9aKEY\u5173\u952e\u5b57"),(0,t.yg)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728 rollup index \u4e2d\u589e\u52a0 base index \u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u5217\uff08\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a rollup index\uff09")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u5411\u6307\u5b9a index \u6dfb\u52a0\u591a\u5217")),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u589e\u52a0 value \u5217\uff0c\u9700\u8981\u6307\u5b9aagg_type"),(0,t.yg)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u589e\u52a0key\u5217\uff0c\u9700\u8981\u6307\u5b9aKEY\u5173\u952e\u5b57"),(0,t.yg)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728 rollup index \u4e2d\u589e\u52a0 base index \u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u5217\uff08\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a rollup index\uff09")),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},"\u4ece\u6307\u5b9a index \u4e2d\u5220\u9664\u4e00\u5217")),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"DROP COLUMN column_name\n[FROM rollup_index_name]\n")),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4e0d\u80fd\u5220\u9664\u5206\u533a\u5217"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f\u4ece base index \u4e2d\u5220\u9664\u5217\uff0c\u5219\u5982\u679c rollup index \u4e2d\u5305\u542b\u8be5\u5217\uff0c\u4e5f\u4f1a\u88ab\u5220\u9664")),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u6307\u5b9a index \u7684\u5217\u7c7b\u578b\u4ee5\u53ca\u5217\u4f4d\u7f6e"),(0,t.yg)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u4fee\u6539 value \u5217\uff0c\u9700\u8981\u6307\u5b9a agg_type"),(0,t.yg)("li",{parentName:"ul"},"\u975e\u805a\u5408\u7c7b\u578b\u5982\u679c\u4fee\u6539key\u5217\uff0c\u9700\u8981\u6307\u5b9aKEY\u5173\u952e\u5b57"),(0,t.yg)("li",{parentName:"ul"},"\u53ea\u80fd\u4fee\u6539\u5217\u7684\u7c7b\u578b\uff0c\u5217\u7684\u5176\u4ed6\u5c5e\u6027\u7ef4\u6301\u539f\u6837\uff08\u5373\u5176\u4ed6\u5c5e\u6027\u9700\u5728\u8bed\u53e5\u4e2d\u6309\u7167\u539f\u5c5e\u6027\u663e\u5f0f\u7684\u5199\u51fa\uff0c\u53c2\u89c1 example 8\uff09"),(0,t.yg)("li",{parentName:"ul"},"\u5206\u533a\u5217\u548c\u5206\u6876\u5217\u4e0d\u80fd\u505a\u4efb\u4f55\u4fee\u6539"),(0,t.yg)("li",{parentName:"ul"},"\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u8f6c\u6362\uff08\u7cbe\u5ea6\u635f\u5931\u7531\u7528\u6237\u4fdd\u8bc1\uff09",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE \u7c7b\u578b\u5411\u8303\u56f4\u66f4\u5927\u7684\u6570\u5b57\u7c7b\u578b\u8f6c\u6362"),(0,t.yg)("li",{parentName:"ul"},"TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL \u8f6c\u6362\u6210 VARCHAR"),(0,t.yg)("li",{parentName:"ul"},"VARCHAR \u652f\u6301\u4fee\u6539\u6700\u5927\u957f\u5ea6"),(0,t.yg)("li",{parentName:"ul"},"VARCHAR/CHAR \u8f6c\u6362\u6210 TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE"),(0,t.yg)("li",{parentName:"ul"},'VARCHAR/CHAR \u8f6c\u6362\u6210 DATE (\u76ee\u524d\u652f\u6301"%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d"\u516d\u79cd\u683c\u5f0f\u5316\u683c\u5f0f)'),(0,t.yg)("li",{parentName:"ul"},"DATETIME \u8f6c\u6362\u6210 DATE(\u4ec5\u4fdd\u7559\u5e74-\u6708-\u65e5\u4fe1\u606f, \u4f8b\u5982: ",(0,t.yg)("inlineCode",{parentName:"li"},"2019-12-09 21:47:05")," <--\x3e ",(0,t.yg)("inlineCode",{parentName:"li"},"2019-12-09"),")"),(0,t.yg)("li",{parentName:"ul"},"DATE \u8f6c\u6362\u6210 DATETIME(\u65f6\u5206\u79d2\u81ea\u52a8\u8865\u96f6\uff0c \u4f8b\u5982: ",(0,t.yg)("inlineCode",{parentName:"li"},"2019-12-09")," <--\x3e ",(0,t.yg)("inlineCode",{parentName:"li"},"2019-12-09 00:00:00"),")"),(0,t.yg)("li",{parentName:"ul"},"FLOAT \u8f6c\u6362\u6210 DOUBLE"),(0,t.yg)("li",{parentName:"ul"},"INT \u8f6c\u6362\u6210 DATE (\u5982\u679cINT\u7c7b\u578b\u6570\u636e\u4e0d\u5408\u6cd5\u5219\u8f6c\u6362\u5931\u8d25\uff0c\u539f\u59cb\u6570\u636e\u4e0d\u53d8)"),(0,t.yg)("li",{parentName:"ul"},"\u9664DATE\u4e0eDATETIME\u4ee5\u5916\u90fd\u53ef\u4ee5\u8f6c\u6362\u6210STRING\uff0c\u4f46\u662fSTRING\u4e0d\u80fd\u8f6c\u6362\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b")))),(0,t.yg)("ol",{start:5},(0,t.yg)("li",{parentName:"ol"},"\u5bf9\u6307\u5b9a index \u7684\u5217\u8fdb\u884c\u91cd\u65b0\u6392\u5e8f")),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ORDER BY (column_name1, column_name2, ...)\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"index \u4e2d\u7684\u6240\u6709\u5217\u90fd\u8981\u5199\u51fa\u6765"),(0,t.yg)("li",{parentName:"ul"},"value \u5217\u5728 key \u5217\u4e4b\u540e")),(0,t.yg)("h3",{id:"example"},"Example"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5411 example_rollup_index \u7684 col1 \u540e\u6dfb\u52a0\u4e00\u4e2akey\u5217 new_col(\u975e\u805a\u5408\u6a21\u578b)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER col1\nTO example_rollup_index;\n')),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u5411example_rollup_index\u7684col1\u540e\u6dfb\u52a0\u4e00\u4e2avalue\u5217new_col(\u975e\u805a\u5408\u6a21\u578b)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT DEFAULT "0" AFTER col1    \nTO example_rollup_index;\n')),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},"\u5411example_rollup_index\u7684col1\u540e\u6dfb\u52a0\u4e00\u4e2akey\u5217new_col(\u805a\u5408\u6a21\u578b)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT DEFAULT "0" AFTER col1    \nTO example_rollup_index;\n')),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},"\u5411example_rollup_index\u7684col1\u540e\u6dfb\u52a0\u4e00\u4e2avalue\u5217new_col SUM\u805a\u5408\u7c7b\u578b(\u805a\u5408\u6a21\u578b)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT SUM DEFAULT "0" AFTER col1    \nTO example_rollup_index;\n')),(0,t.yg)("ol",{start:5},(0,t.yg)("li",{parentName:"ol"},"\u5411 example_rollup_index \u6dfb\u52a0\u591a\u5217(\u805a\u5408\u6a21\u578b)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN (col1 INT DEFAULT "1", col2 FLOAT SUM DEFAULT "2.3")\nTO example_rollup_index;\n')),(0,t.yg)("ol",{start:6},(0,t.yg)("li",{parentName:"ol"},"\u4ece example_rollup_index \u5220\u9664\u4e00\u5217")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP COLUMN col2\nFROM example_rollup_index;\n")),(0,t.yg)("ol",{start:7},(0,t.yg)("li",{parentName:"ol"},"\u4fee\u6539 base index \u7684 key \u5217 col1 \u7684\u7c7b\u578b\u4e3a BIGINT\uff0c\u5e76\u79fb\u52a8\u5230 col2 \u5217\u540e\u9762\u3002")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN col1 BIGINT KEY DEFAULT "1" AFTER col2;\n')),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a\u65e0\u8bba\u662f\u4fee\u6539 key \u5217\u8fd8\u662f value \u5217\u90fd\u9700\u8981\u58f0\u660e\u5b8c\u6574\u7684 column \u4fe1\u606f"),(0,t.yg)("ol",{start:8},(0,t.yg)("li",{parentName:"ol"},'\u4fee\u6539 base index \u7684 val1 \u5217\u6700\u5927\u957f\u5ea6\u3002\u539f val1 \u4e3a (val1 VARCHAR(32) REPLACE DEFAULT "abc")')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n')),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a\u53ea\u80fd\u4fee\u6539\u5217\u7684\u7c7b\u578b\uff0c\u5217\u7684\u5176\u4ed6\u5c5e\u6027\u7ef4\u6301\u539f\u6837"),(0,t.yg)("ol",{start:9},(0,t.yg)("li",{parentName:"ol"},"\u91cd\u65b0\u6392\u5e8f example_rollup_index \u4e2d\u7684\u5217\uff08\u8bbe\u539f\u5217\u987a\u5e8f\u4e3a\uff1ak1,k2,k3,v1,v2\uff09")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nORDER BY (k3,k1,k2,v2,v1)\nFROM example_rollup_index;\n")),(0,t.yg)("ol",{start:10},(0,t.yg)("li",{parentName:"ol"},"\u540c\u65f6\u6267\u884c\u4e24\u79cd\u64cd\u4f5c")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN v2 INT MAX DEFAULT "0" AFTER k2 TO example_rollup_index,\nORDER BY (k3,k1,k2,v2,v1) FROM example_rollup_index;\n')),(0,t.yg)("ol",{start:11},(0,t.yg)("li",{parentName:"ol"},"\u4fee\u6539Duplicate key \u8868 Key \u5217\u7684\u67d0\u4e2a\u5b57\u6bb5\u7684\u957f\u5ea6")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"alter table example_tbl modify column k3 varchar(50) key null comment 'to 50'\n")),(0,t.yg)("h3",{id:"keywords"},"Keywords"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, COLUMN, ALTER TABLE\n")),(0,t.yg)("h3",{id:"best-practice"},"Best Practice"))}g.isMDXComponent=!0}}]);