"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[976],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>y});var n=a(11504);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=l,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(45072),l=(a(11504),a(95788));const r={title:"ALTER-TABLE-REPLACE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE",title:"ALTER-TABLE-REPLACE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-TABLE-REPLACE",language:"en"},sidebar:"docs",previous:{title:"ALTER-SQL-BLOCK-RULE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE"},next:{title:"ALTER-TABLE-PROPERTY",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY"}},p={},s=[{value:"ALTER-TABLE-REPLACE",id:"alter-table-replace",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Theory",id:"theory",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.yg)(m,(0,n.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"alter-table-replace"},"ALTER-TABLE-REPLACE"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"ALTER TABLE REPLACE"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"Atomic substitution of two tables. This operation applies only to OLAP tables."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]tbl1 REPLACE WITH TABLE tbl2\n[PROPERTIES('swap' = 'true')];\n")),(0,l.yg)("p",null,"Replace table tbl1 with table tbl2."),(0,l.yg)("p",null,"If the ",(0,l.yg)("inlineCode",{parentName:"p"},"swap")," parameter is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", the data in the table named ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl1")," will be the data in the original table named ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl2")," after the replacement. The data in the table named ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl2")," is the data in the original ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl1")," table. That is, two tables of data have been swapped."),(0,l.yg)("p",null,"If the ",(0,l.yg)("inlineCode",{parentName:"p"},"swap")," parameter is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),", the data in the ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl1")," table will be the data in the ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl2")," table after the replacement. The table named ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl2")," is deleted."),(0,l.yg)("h4",{id:"theory"},"Theory"),(0,l.yg)("p",null,"The replace table function actually turns the following set of operations into an atomic operation."),(0,l.yg)("p",null,"If you want to replace table A with table B and ",(0,l.yg)("inlineCode",{parentName:"p"},"swap")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", do the following:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Rename table B as table A."),(0,l.yg)("li",{parentName:"ol"},"Rename table A as table B.")),(0,l.yg)("p",null,"If ",(0,l.yg)("inlineCode",{parentName:"p"},"swap")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),", do as follows:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Delete table A."),(0,l.yg)("li",{parentName:"ol"},"Rename table B as table A.")),(0,l.yg)("h4",{id:"notice"},"Notice"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"The default ",(0,l.yg)("inlineCode",{parentName:"li"},"swap")," parameter is ",(0,l.yg)("inlineCode",{parentName:"li"},"true"),". That is, a table replacement operation is equivalent to an exchange of data between two tables."),(0,l.yg)("li",{parentName:"ol"},"If the ",(0,l.yg)("inlineCode",{parentName:"li"},"swap")," parameter is set to false, the replaced table (table A) will be deleted and cannot be restored."),(0,l.yg)("li",{parentName:"ol"},"The replacement operation can only occur between two OLAP tables and does not check whether the table structure of the two tables is consistent."),(0,l.yg)("li",{parentName:"ol"},"The original permission Settings are not changed. Because the permission check is based on the table name.")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Swap ",(0,l.yg)("inlineCode",{parentName:"li"},"tbl1")," with ",(0,l.yg)("inlineCode",{parentName:"li"},"tbl2")," without deleting the ",(0,l.yg)("inlineCode",{parentName:"li"},"tbl1")," table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE tbl1 REPLACE WITH TABLE tbl2\n    [PROPERTIES('swap' = 'true')];\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, REPLACE, ALTER TABLE\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Atomic overlay write operations"),(0,l.yg)("p",{parentName:"li"},"In some cases, the user wants to be able to rewrite the data of a certain table, but if the data is deleted first and then imported, the data cannot be viewed for a period of time in between. At this time, the user can first use the ",(0,l.yg)("inlineCode",{parentName:"p"},"CREATE TABLE LIKE")," statement to create a new table with the same structure, import the new data into the new table, and use the replacement operation to atomically replace the old table to achieve the goal. Atomic overwrite write operations at the partition level, see ",(0,l.yg)("a",{parentName:"p",href:"/docs/1.2/advanced/partition/table-temp-partition"},"temp partition documentation"),"."))))}d.isMDXComponent=!0}}]);