"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71718],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,y=d["".concat(p,".").concat(b)]||d[b]||m[b]||l;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},955790:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const l={title:"Replace Table",language:"en"},i=void 0,o={unversionedId:"advanced/alter-table/replace-table",id:"advanced/alter-table/replace-table",title:"Replace Table",description:"\x3c!--",source:"@site/docs/advanced/alter-table/replace-table.md",sourceDirName:"advanced/alter-table",slug:"/advanced/alter-table/replace-table",permalink:"/docs/dev/advanced/alter-table/replace-table",draft:!1,tags:[],version:"current",frontMatter:{title:"Replace Table",language:"en"},sidebar:"docs",previous:{title:"Schema Change",permalink:"/docs/dev/advanced/alter-table/schema-change"},next:{title:"Dynamic Partition",permalink:"/docs/dev/advanced/partition/dynamic-partition"}},p={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Principle",id:"principle",level:2},{value:"Notice",id:"notice",level:2},{value:"Best Practices",id:"best-practices",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"replace-table"},"Replace Table"),(0,r.yg)("p",null,"In version 0.14, Doris supports atomic replacement of two tables.\nThis operation only applies to OLAP tables."),(0,r.yg)("p",null,"For partition level replacement operations, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/advanced/partition/table-temp-partition"},"Temporary Partition Document")),(0,r.yg)("h2",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER TABLE [db.]tbl1 REPLACE WITH tbl2\n[PROPERTIES('swap' = 'true')];\n")),(0,r.yg)("p",null,"Replace table ",(0,r.yg)("inlineCode",{parentName:"p"},"tbl1")," with table ",(0,r.yg)("inlineCode",{parentName:"p"},"tbl2"),"."),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"swap")," parameter is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", after replacement, the data in the table named ",(0,r.yg)("inlineCode",{parentName:"p"},"tbl1")," is the data in the original ",(0,r.yg)("inlineCode",{parentName:"p"},"tbl2")," table. The data in the table named ",(0,r.yg)("inlineCode",{parentName:"p"},"tbl2")," is the data in the original table ",(0,r.yg)("inlineCode",{parentName:"p"},"tbl1"),". That is, the data of the two tables are interchanged."),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"swap")," parameter is ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),", after replacement, the data in the table named ",(0,r.yg)("inlineCode",{parentName:"p"},"tbl1")," is the data in the original ",(0,r.yg)("inlineCode",{parentName:"p"},"tbl2")," table. The table named ",(0,r.yg)("inlineCode",{parentName:"p"},"tbl2")," is dropped."),(0,r.yg)("h2",{id:"principle"},"Principle"),(0,r.yg)("p",null,"The replacement table function actually turns the following set of operations into an atomic operation."),(0,r.yg)("p",null,"Suppose you want to replace table A with table B, and ",(0,r.yg)("inlineCode",{parentName:"p"},"swap")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", the operation is as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Rename table B to table A."),(0,r.yg)("li",{parentName:"ol"},"Rename table A to table B.")),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"swap")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),", the operation is as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Drop table A."),(0,r.yg)("li",{parentName:"ol"},"Rename table B to table A.")),(0,r.yg)("h2",{id:"notice"},"Notice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"swap")," parameter defaults to ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),". That is, the replacement table operation is equivalent to the exchange of two table data."),(0,r.yg)("li",{parentName:"ol"},"If the ",(0,r.yg)("inlineCode",{parentName:"li"},"swap")," parameter is set to ",(0,r.yg)("inlineCode",{parentName:"li"},"false"),", the replaced table (table A) will be dropped and cannot be recovered."),(0,r.yg)("li",{parentName:"ol"},"The replacement operation can only occur between two OLAP tables, and the table structure of the two tables is not checked for consistency."),(0,r.yg)("li",{parentName:"ol"},"The replacement operation will not change the original permission settings. Because the permission check is based on the table name.")),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Atomic Overwrite Operation"),(0,r.yg)("p",{parentName:"li"},"In some cases, the user wants to be able to rewrite the data of a certain table, but if it is dropped and then imported, there will be a period of time in which the data cannot be viewed. At this time, the user can first use the ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE TABLE LIKE")," statement to create a new table with the same structure, import the new data into the new table, and replace the old table atomically through the replacement operation to achieve the goal. For partition level atomic overwrite operation, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/advanced/partition/table-temp-partition"},"Temporary partition document")))))}m.isMDXComponent=!0}}]);