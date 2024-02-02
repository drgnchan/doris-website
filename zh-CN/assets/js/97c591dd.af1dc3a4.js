"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[500],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>g});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},E="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),E=p(a),u=n,g=E["".concat(o,".").concat(u)]||E[u]||m[u]||l;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[E]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(45072),n=(a(11504),a(95788));const l={title:"CREATE-TABLE-LIKE",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE",title:"CREATE-TABLE-LIKE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-TABLE-LIKE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-TABLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},next:{title:"CREATE-TABLE-AS-SELECT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT"}},o={},p=[{value:"CREATE-TABLE-LIKE",id:"create-table-like",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},E="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(E,(0,r.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"create-table-like"},"CREATE-TABLE-LIKE"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"CREATE TABLE LIKE"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u8868\u7ed3\u6784\u548c\u53e6\u4e00\u5f20\u8868\u5b8c\u5168\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u540c\u65f6\u4e5f\u80fd\u591f\u53ef\u9009\u590d\u5236\u4e00\u4e9brollup\u3002 "),(0,n.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name [WITH ROLLUP (r1,r2,r3,...)]\n")),(0,n.yg)("p",null,"\u8bf4\u660e: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u590d\u5236\u7684\u8868\u7ed3\u6784\u5305\u62ecColumn Definition\u3001Partitions\u3001Table Properties\u7b49 "),(0,n.yg)("li",{parentName:"ul"},"\u7528\u6237\u9700\u8981\u5bf9\u590d\u5236\u7684\u539f\u8868\u6709",(0,n.yg)("inlineCode",{parentName:"li"},"SELECT"),"\u6743\u9650 "),(0,n.yg)("li",{parentName:"ul"},"\u652f\u6301\u590d\u5236MySQL\u7b49\u5916\u8868 "),(0,n.yg)("li",{parentName:"ul"},"\u652f\u6301\u590d\u5236OLAP Table\u7684rollup")),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctable1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test1.table2 LIKE test1.table1\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728test2\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctest1.table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test2.table2 LIKE test1.table1\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctable1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684r1\uff0cr2\u4e24\u4e2arollup"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctable1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684\u6240\u6709rollup"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728test2\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctest1.table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684r1\uff0cr2\u4e24\u4e2arollup"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728test2\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548ctest1.table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2\uff0c\u540c\u65f6\u590d\u5236table1\u7684\u6240\u6709rollup"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728test1\u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548cMySQL\u5916\u8868table1\u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3atable2"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test1.table2 LIKE test1.table1\n")))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"CREATE, TABLE, LIKE\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);