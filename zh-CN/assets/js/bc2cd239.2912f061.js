"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22964],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>E});var n=a(11504);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),g=l,E=u["".concat(p,".").concat(g)]||u[g]||m[g]||r;return a?n.createElement(E,o(o({ref:t},s),{},{components:a})):n.createElement(E,o({ref:t},s))}));function E(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},68572:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(45072),l=(a(11504),a(95788));const r={title:"ALTER-TABLE-RENAME",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME",title:"ALTER-TABLE-RENAME",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-TABLE-RENAME",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-ROLLUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP"},next:{title:"ALTER-TABLE-REPLACE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE"}},p={},c=[{value:"ALTER-TABLE-RENAME",id:"alter-table-rename",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,n.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"alter-table-rename"},"ALTER-TABLE-RENAME"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"ALTER TABLE RENAME"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u5df2\u6709 table \u5c5e\u6027\u7684\u67d0\u4e9b\u540d\u79f0\u8fdb\u884c\u91cd\u547d\u540d\u64cd\u4f5c\u3002\u8fd9\u4e2a\u64cd\u4f5c\u662f\u540c\u6b65\u7684\uff0c\u547d\u4ee4\u8fd4\u56de\u8868\u793a\u6267\u884c\u5b8c\u6bd5\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,l.yg)("p",null,"rename \u7684 alter_clause \u652f\u6301\u5bf9\u4ee5\u4e0b\u540d\u79f0\u8fdb\u884c\u4fee\u6539"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8868\u540d")),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RENAME new_table_name;\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4fee\u6539 rollup index \u540d\u79f0"),(0,l.yg)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RENAME ROLLUP old_rollup_name new_rollup_name;\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u4fee\u6539 partition \u540d\u79f0")),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RENAME PARTITION old_partition_name new_partition_name;    \n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u4fee\u6539 column \u540d\u79f0")),(0,l.yg)("version",{since:"1.2"},"\u4fee\u6539 column \u540d\u79f0"),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RENAME COLUMN old_column_name new_column_name;    \n")),(0,l.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5efa\u8868\u65f6\u9700\u8981\u5728property\u4e2d\u8bbe\u7f6elight_schema_change=true")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5c06\u540d\u4e3a table1 \u7684\u8868\u4fee\u6539\u4e3a table2")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 RENAME table2;\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u5c06\u8868 example_table \u4e2d\u540d\u4e3a rollup1 \u7684 rollup index \u4fee\u6539\u4e3a rollup2")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_table RENAME ROLLUP rollup1 rollup2;\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u5c06\u8868 example_table \u4e2d\u540d\u4e3a p1 \u7684 partition \u4fee\u6539\u4e3a p2")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_table RENAME PARTITION p1 p2;\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u5c06\u8868 example_table \u4e2d\u540d\u4e3a c1 \u7684 column \u4fee\u6539\u4e3a c2")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_table RENAME COLUMN c1 c2;\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, RENAME, ALTER TABLE\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);