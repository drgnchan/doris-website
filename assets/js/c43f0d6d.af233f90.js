"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58964],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},41763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(45072),r=(n(11504),n(95788));const l={title:"ALTER-TABLE-BITMAP",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP",title:"ALTER-TABLE-BITMAP",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-TABLE-BITMAP",language:"en"},sidebar:"docs",previous:{title:"ALTER-DATABASE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE"},next:{title:"ALTER-TABLE-PARTITION",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"}},s={},p=[{value:"ALTER-TABLE-BITMAP",id:"alter-table-bitmap",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-table-bitmap"},"ALTER-TABLE-BITMAP"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER TABLE BITMAP"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to perform a bitmap index operation on an existing table."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,r.yg)("p",null,"The alter_clause of bitmap index supports the following modification methods"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a bitmap index"),(0,r.yg)("p",{parentName:"li"},"Syntax:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ADD INDEX [IF NOT EXISTS] index_name (column [, ...],) [USING BITMAP] [COMMENT 'balabala'];\n")),(0,r.yg)("p",null,"Notice:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Currently only supports bitmap indexes"),(0,r.yg)("li",{parentName:"ul"},"BITMAP indexes are only created on a single column")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Delete the index")),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP INDEX [IF EXISTS] index_name;\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a bitmap index for siteid on table1")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 ADD INDEX [IF NOT EXISTS] index_name (siteid) [USING BITMAP] COMMENT 'balabala';\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Delete the bitmap index of the siteid column on table1")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 DROP INDEX [IF EXISTS] index_name;\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, BITMAP, INDEX, ALTER TABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);