"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14079],{15680:(e,a,n)=>{n.d(a,{xA:()=>N,yg:()=>s});var l=n(296540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=l.createContext({}),y=function(e){var a=l.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},N=function(e){var a=y(e.components);return l.createElement(i.Provider,{value:a},e.children)},o="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},u=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,N=m(e,["components","mdxType","originalType","parentName"]),o=y(n),u=t,s=o["".concat(i,".").concat(u)]||o[u]||g[u]||r;return n?l.createElement(s,p(p({ref:a},N),{},{components:n})):l.createElement(s,p({ref:a},N))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,p=new Array(r);p[0]=u;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m[o]="string"==typeof e?e:t,p[1]=m;for(var y=2;y<r;y++)p[y]=n[y];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},480928:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>m,toc:()=>y});var l=n(58168),t=(n(296540),n(15680));const r={title:"ALTER-TABLE-COLUMN",language:"zh-CN"},p=void 0,m={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",id:"version-2.1/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",title:"ALTER-TABLE-COLUMN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-TABLE-COLUMN",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-DATABASE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE"},next:{title:"ALTER-TABLE-PARTITION",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"}},i={},y=[{value:"Name",id:"name",level:2},{value:"Description",id:"description",level:3},{value:"\u8bed\u6cd5\uff1a",id:"\u8bed\u6cd5",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],N={toc:y},o="wrapper";function g(e){let{components:a,...n}=e;return(0,t.yg)(o,(0,l.A)({},N,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"name"},"Name"),(0,t.yg)("p",null,"ALTER TABLE COLUMN"),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u5df2\u6709 table \u8fdb\u884c Schema change \u64cd\u4f5c\u3002schema change \u662f\u5f02\u6b65\u7684\uff0c\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u5219\u8fd4\u56de\uff0c\u4e4b\u540e\u53ef\u4f7f\u7528",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"},"SHOW ALTER TABLE COLUMN")," \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002"),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"Doris \u5728\u5efa\u8868\u4e4b\u540e\u6709\u7269\u5316\u7d22\u5f15\u7684\u6982\u5ff5\uff0c\u5728\u5efa\u8868\u6210\u529f\u540e\u4e3a base \u8868\uff0c\u7269\u5316\u7d22\u5f15\u4e3a base index\uff0c\u57fa\u4e8e base \u8868\u53ef\u4ee5\u521b\u5efa rollup index\u3002\u5176\u4e2d base index \u548c rollup index \u90fd\u662f\u7269\u5316\u7d22\u5f15\uff0c\u5728\u8fdb\u884c schema change \u64cd\u4f5c\u65f6\u5982\u679c\u4e0d\u6307\u5b9a rollup_index_name \u9ed8\u8ba4\u57fa\u4e8e base \u8868\u8fdb\u884c\u64cd\u4f5c\u3002\nDoris \u5728 1.2.0 \u652f\u6301\u4e86 light schema change \u8f7b\u91cf\u8868\u7ed3\u6784\u53d8\u66f4\uff0c\u5bf9\u4e8e\u503c\u5217\u7684\u52a0\u51cf\u64cd\u4f5c\uff0c\u53ef\u4ee5\u66f4\u5feb\u5730\uff0c\u540c\u6b65\u5730\u5b8c\u6210\u3002\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u624b\u52a8\u6307\u5b9a \"light_schema_change\" = 'true'\uff0c2.0.0 \u53ca\u4e4b\u540e\u7248\u672c\u8be5\u53c2\u6570\u9ed8\u8ba4\u5f00\u542f\u3002")),(0,t.yg)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,t.yg)("p",null,"schema change \u7684 alter_clause \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u4fee\u6539\u65b9\u5f0f\uff1a"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"1. \u6dfb\u52a0\u5217\uff0c\u5411\u6307\u5b9a\u7684 index \u4f4d\u7f6e\u8fdb\u884c\u5217\u6dfb\u52a0")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE [database.]table table_name ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5411 example_db.my_table \u7684 key_1 \u540e\u6dfb\u52a0\u4e00\u4e2a key \u5217 new_col (\u975e\u805a\u5408\u6a21\u578b)"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER key_1;\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5411 example_db.my_table \u7684 value_1 \u540e\u6dfb\u52a0\u4e00\u4e2a value \u5217 new_col (\u975e\u805a\u5408\u6a21\u578b)"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT DEFAULT "0" AFTER value_1;\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5411 example_db.my_table \u7684 key_1 \u540e\u6dfb\u52a0\u4e00\u4e2a key \u5217 new_col (\u805a\u5408\u6a21\u578b)"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER key_1;\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5411 example_db.my_table \u7684 value_1 \u540e\u6dfb\u52a0\u4e00\u4e2a value \u5217 new_col SUM \u805a\u5408\u7c7b\u578b (\u805a\u5408\u6a21\u578b)"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT SUM DEFAULT "0" AFTER value_1; \n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5c06 new_col \u6dfb\u52a0\u5230 example_db.my_table \u8868\u7684\u9996\u5217\u4f4d\u7f6e (\u975e\u805a\u5408\u6a21\u578b)"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" FIRST;\n')))),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u589e\u52a0 value \u5217\uff0c\u9700\u8981\u6307\u5b9a agg_type"),(0,t.yg)("li",{parentName:"ul"},"\u975e\u805a\u5408\u6a21\u578b\uff08\u5982 DUPLICATE KEY\uff09\u5982\u679c\u589e\u52a0key\u5217\uff0c\u9700\u8981\u6307\u5b9aKEY\u5173\u952e\u5b57"),(0,t.yg)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728 rollup index \u4e2d\u589e\u52a0 base index \u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u5217\uff08\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a rollup index\uff09"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"2. \u6dfb\u52a0\u591a\u5217\uff0c\u5411\u6307\u5b9a\u7684 index \u4f4d\u7f6e\u8fdb\u884c\u591a\u5217\u6dfb\u52a0")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE [database.]table table_name ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5411 example_db.my_table \u4e2d\u6dfb\u52a0\u591a\u5217\uff0cnew_col \u548c new_col2 \u90fd\u662f SUM \u805a\u5408\u7c7b\u578b(\u805a\u5408\u6a21\u578b)"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN (new_col1 INT SUM DEFAULT "0" ,new_col2 INT SUM DEFAULT "0");\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5411 example_db.my_table \u4e2d\u6dfb\u52a0\u591a\u5217(\u975e\u805a\u5408\u6a21\u578b)\uff0c\u5176\u4e2d new_col1 \u4e3a KEY \u5217\uff0cnew_col2 \u4e3a value \u5217"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN (new_col1 INT key DEFAULT "0" , new_col2 INT DEFAULT "0");\n')))),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u589e\u52a0 value \u5217\uff0c\u9700\u8981\u6307\u5b9aagg_type"),(0,t.yg)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u589e\u52a0key\u5217\uff0c\u9700\u8981\u6307\u5b9aKEY\u5173\u952e\u5b57"),(0,t.yg)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728 rollup index \u4e2d\u589e\u52a0 base index \u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u5217\uff08\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a rollup index\uff09"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"3. \u5220\u9664\u5217\uff0c\u4ece\u6307\u5b9a index \u4e2d\u5220\u9664\u4e00\u5217")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table table_name DROP COLUMN column_name\n[FROM rollup_index_name]\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4ece example_db.my_table \u4e2d\u5220\u9664 col1 \u5217"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table DROP COLUMN col1;\n")))),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"\u4e0d\u80fd\u5220\u9664\u5206\u533a\u5217"),(0,t.yg)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u4e0d\u80fd\u5220\u9664KEY\u5217"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f\u4ece base index \u4e2d\u5220\u9664\u5217\uff0c\u5219\u5982\u679c rollup index \u4e2d\u5305\u542b\u8be5\u5217\uff0c\u4e5f\u4f1a\u88ab\u5220\u9664"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"4. \u4fee\u6539\u6307\u5b9a\u5217\u7c7b\u578b\u4ee5\u53ca\u5217\u4f4d\u7f6e")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE [database.]table table_name MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539 example_db.my_table \u7684 key \u5217 col1 \u7684\u7c7b\u578b\u4e3a BIGINT\uff0c\u5e76\u79fb\u52a8\u5230 col2 \u5217\u540e\u9762\u3002"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN col1 BIGINT KEY DEFAULT "1" AFTER col2;\n')),(0,t.yg)("admonition",{parentName:"li",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u65e0\u8bba\u662f\u4fee\u6539 key \u5217\u8fd8\u662f value \u5217\u90fd\u9700\u8981\u58f0\u660e\u5b8c\u6574\u7684 column \u4fe1\u606f"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},'\u4fee\u6539 example_db.my_table \u7684 val1 \u5217\u6700\u5927\u957f\u5ea6\u3002\u539f val1 \u4e3a (val1 VARCHAR(32) REPLACE DEFAULT "abc")'),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n')),(0,t.yg)("admonition",{parentName:"li",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u53ea\u80fd\u4fee\u6539\u5217\u7684\u7c7b\u578b\uff0c\u5217\u7684\u5176\u4ed6\u5c5e\u6027\u7ef4\u6301\u539f\u6837"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539 Duplicate key \u8868 Key \u5217\u7684\u67d0\u4e2a\u5b57\u6bb5\u7684\u957f\u5ea6"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table \nMODIFY COLUMN k3 VARCHAR(50) KEY NULL COMMENT 'to 50';\n")))),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"\u805a\u5408\u6a21\u578b\u5982\u679c\u4fee\u6539 value \u5217\uff0c\u9700\u8981\u6307\u5b9a agg_type"),(0,t.yg)("li",{parentName:"ul"},"\u975e\u805a\u5408\u7c7b\u578b\u5982\u679c\u4fee\u6539key\u5217\uff0c\u9700\u8981\u6307\u5b9aKEY\u5173\u952e\u5b57"),(0,t.yg)("li",{parentName:"ul"},"\u53ea\u80fd\u4fee\u6539\u5217\u7684\u7c7b\u578b\uff0c\u5217\u7684\u5176\u4ed6\u5c5e\u6027\u7ef4\u6301\u539f\u6837\uff08\u5373\u5176\u4ed6\u5c5e\u6027\u9700\u5728\u8bed\u53e5\u4e2d\u6309\u7167\u539f\u5c5e\u6027\u663e\u5f0f\u7684\u5199\u51fa\uff0c\u53c2\u89c1 example 8\uff09"),(0,t.yg)("li",{parentName:"ul"},"\u5206\u533a\u5217\u548c\u5206\u6876\u5217\u4e0d\u80fd\u505a\u4efb\u4f55\u4fee\u6539"),(0,t.yg)("li",{parentName:"ul"},"\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u8f6c\u6362\uff08\u7cbe\u5ea6\u635f\u5931\u7531\u7528\u6237\u4fdd\u8bc1\uff09",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE \u7c7b\u578b\u5411\u8303\u56f4\u66f4\u5927\u7684\u6570\u5b57\u7c7b\u578b\u8f6c\u6362"),(0,t.yg)("li",{parentName:"ul"},"TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL \u8f6c\u6362\u6210 VARCHAR"),(0,t.yg)("li",{parentName:"ul"},"VARCHAR \u652f\u6301\u4fee\u6539\u6700\u5927\u957f\u5ea6"),(0,t.yg)("li",{parentName:"ul"},"VARCHAR/CHAR \u8f6c\u6362\u6210 TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE"),(0,t.yg)("li",{parentName:"ul"},'VARCHAR/CHAR \u8f6c\u6362\u6210 DATE (\u76ee\u524d\u652f\u6301"%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d"\u516d\u79cd\u683c\u5f0f\u5316\u683c\u5f0f)'),(0,t.yg)("li",{parentName:"ul"},"DATETIME \u8f6c\u6362\u6210 DATE(\u4ec5\u4fdd\u7559\u5e74-\u6708-\u65e5\u4fe1\u606f, \u4f8b\u5982: ",(0,t.yg)("inlineCode",{parentName:"li"},"2019-12-09 21:47:05")," <--\x3e ",(0,t.yg)("inlineCode",{parentName:"li"},"2019-12-09"),")"),(0,t.yg)("li",{parentName:"ul"},"DATE \u8f6c\u6362\u6210 DATETIME(\u65f6\u5206\u79d2\u81ea\u52a8\u8865\u96f6\uff0c \u4f8b\u5982: ",(0,t.yg)("inlineCode",{parentName:"li"},"2019-12-09")," <--\x3e ",(0,t.yg)("inlineCode",{parentName:"li"},"2019-12-09 00:00:00"),")"),(0,t.yg)("li",{parentName:"ul"},"FLOAT \u8f6c\u6362\u6210 DOUBLE"),(0,t.yg)("li",{parentName:"ul"},"INT \u8f6c\u6362\u6210 DATE (\u5982\u679cINT\u7c7b\u578b\u6570\u636e\u4e0d\u5408\u6cd5\u5219\u8f6c\u6362\u5931\u8d25\uff0c\u539f\u59cb\u6570\u636e\u4e0d\u53d8)"),(0,t.yg)("li",{parentName:"ul"},"\u9664DATE\u4e0eDATETIME\u4ee5\u5916\u90fd\u53ef\u4ee5\u8f6c\u6362\u6210STRING\uff0c\u4f46\u662fSTRING\u4e0d\u80fd\u8f6c\u6362\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b"))))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"5. \u5bf9\u6307\u5b9a\u8868\u7684\u5217\u8fdb\u884c\u91cd\u65b0\u6392\u5e8f")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE [database.]table table_name ORDER BY (column_name1, column_name2, ...)\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u8c03\u6574 example_db.my_table \u7684 key \u5217 \u548c value \u5217\u7684\u987a\u5e8f\uff08\u975e\u805a\u5408\u6a21\u578b\uff09"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `my_table`(\n`k_1` INT NULL,\n`k_2` INT NULL,\n`v_1` INT NULL,\n`v_2` varchar NULL,\n`v_3` varchar NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k_1`, `k_2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k_1`) BUCKETS 5\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n\nALTER TABLE example_db.my_table ORDER BY (k_2,k_1,v_3,v_2,v_1);\n\nmysql> desc my_table;\n+-------+------------+------+-------+---------+-------+\n| Field | Type       | Null | Key   | Default | Extra |\n+-------+------------+------+-------+---------+-------+\n| k_2   | INT        | Yes  | true  | NULL    |       |\n| k_1   | INT        | Yes  | true  | NULL    |       |\n| v_3   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_2   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_1   | INT        | Yes  | false | NULL    | NONE  |\n+-------+------------+------+-------+---------+-------+\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u540c\u65f6\u6267\u884c\u6dfb\u52a0\u5217\u548c\u5217\u6392\u5e8f\u64cd\u4f5c"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `my_table` (\n`k_1` INT NULL,\n`k_2` INT NULL,\n`v_1` INT NULL,\n`v_2` varchar NULL,\n`v_3` varchar NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k_1`, `k_2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k_1`) BUCKETS 5\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n\nALTER TABLE example_db.my_table\nADD COLUMN col INT DEFAULT "0" AFTER v_1,\nORDER BY (k_2,k_1,v_3,v_2,v_1,col);\n\nmysql> desc my_table;\n+-------+------------+------+-------+---------+-------+\n| Field | Type       | Null | Key   | Default | Extra |\n+-------+------------+------+-------+---------+-------+\n| k_2   | INT        | Yes  | true  | NULL    |       |\n| k_1   | INT        | Yes  | true  | NULL    |       |\n| v_3   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_2   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_1   | INT        | Yes  | false | NULL    | NONE  |\n| col   | INT        | Yes  | false | 0       | NONE  |\n+-------+------------+------+-------+---------+-------+\n')))),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"index \u4e2d\u7684\u6240\u6709\u5217\u90fd\u8981\u5199\u51fa\u6765"),(0,t.yg)("li",{parentName:"ul"},"value \u5217\u5728 key \u5217\u4e4b\u540e"),(0,t.yg)("li",{parentName:"ul"},"key \u5217\u53ea\u80fd\u8c03\u6574 key \u5217\u7684\u8303\u56f4\u5185\u8fdb\u884c\u8c03\u6574\uff0cvalue \u5217\u540c\u7406"))),(0,t.yg)("h3",{id:"keywords"},"Keywords"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, COLUMN, ALTER TABLE\n")),(0,t.yg)("h3",{id:"best-practice"},"Best Practice"))}g.isMDXComponent=!0}}]);