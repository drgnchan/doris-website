"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96458],{95788:(e,n,a)=>{a.d(n,{Iu:()=>s,yg:()=>y});var t=a(11504);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),d=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},s=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,y=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?t.createElement(y,r(r({ref:n},s),{},{components:a})):t.createElement(y,r({ref:n},s))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82788:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=a(45072),i=(a(11504),a(95788));const l={title:"Bitmap Index",language:"en"},r=void 0,o={unversionedId:"data-table/index/bitmap-index",id:"version-1.2/data-table/index/bitmap-index",title:"Bitmap Index",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/data-table/index/bitmap-index.md",sourceDirName:"data-table/index",slug:"/data-table/index/bitmap-index",permalink:"/docs/1.2/data-table/index/bitmap-index",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Bitmap Index",language:"en"},sidebar:"docs",previous:{title:"BloomFilter index",permalink:"/docs/1.2/data-table/index/bloomfilter"},next:{title:"Import Overview",permalink:"/docs/1.2/data-operate/import/load-manual"}},p={},d=[{value:"Glossary",id:"glossary",level:2},{value:"Basic Principles",id:"basic-principles",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Create index",id:"create-index",level:3},{value:"View index",id:"view-index",level:3},{value:"Delete index",id:"delete-index",level:3},{value:"Notice",id:"notice",level:2},{value:"More Help",id:"more-help",level:3}],s={toc:d},m="wrapper";function c(e){let{components:n,...a}=e;return(0,i.yg)(m,(0,t.c)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"bitmap-index"},"Bitmap Index"),(0,i.yg)("p",null,"Users can speed up queries by creating a bitmap index\nThis document focuses on how to create an index job, as well as some considerations and frequently asked questions when creating an index."),(0,i.yg)("h2",{id:"glossary"},"Glossary"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"bitmap index: a fast data structure that speeds up queries")),(0,i.yg)("h2",{id:"basic-principles"},"Basic Principles"),(0,i.yg)("p",null,"Creating and dropping index is essentially a schema change job. For details, please refer to\n",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/advanced/alter-table/schema-change"},"Schema Change"),"."),(0,i.yg)("h2",{id:"syntax"},"Syntax"),(0,i.yg)("h3",{id:"create-index"},"Create index"),(0,i.yg)("p",null,"Create a bitmap index for siteid on table1"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX [IF NOT EXISTS] index_name ON table1 (siteid) USING BITMAP COMMENT 'balabala';\n")),(0,i.yg)("h3",{id:"view-index"},"View index"),(0,i.yg)("p",null,"Display the lower index of the specified table_name"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW INDEX FROM example_db.table_name;\n")),(0,i.yg)("h3",{id:"delete-index"},"Delete index"),(0,i.yg)("p",null,"Delete the lower index of the specified table_name"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DROP INDEX [IF EXISTS] index_name ON [db_name.]table_name;\n")),(0,i.yg)("h2",{id:"notice"},"Notice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Currently only index of bitmap type is supported."),(0,i.yg)("li",{parentName:"ul"},"The bitmap index is only created on a single column."),(0,i.yg)("li",{parentName:"ul"},"Bitmap indexes can be applied to all columns of the ",(0,i.yg)("inlineCode",{parentName:"li"},"Duplicate")," , ",(0,i.yg)("inlineCode",{parentName:"li"},"Uniq"),"  data model and key columns of the ",(0,i.yg)("inlineCode",{parentName:"li"},"Aggregate"),"  models."),(0,i.yg)("li",{parentName:"ul"},"The data types supported by bitmap indexes are as follows:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"TINYINT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SMALLINT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"INT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"BIGINT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CHAR")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"VARCHAR")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DATE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DATETIME")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"LARGEINT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DECIMAL")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"BOOL")))),(0,i.yg)("li",{parentName:"ul"},"The bitmap index takes effect only in segmentV2. The table's storage format will be converted to V2 automatically when creating index.")),(0,i.yg)("h3",{id:"more-help"},"More Help"),(0,i.yg)("p",null,"For more detailed syntax and best practices for using bitmap indexes, please refer to the  ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"},"CREARE INDEX")," / ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-INDEX"},"SHOW INDEX")," / ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX"},"DROP INDEX"),"  command manual. You can also enter HELP CREATE INDEX / HELP SHOW INDEX / HELP DROP INDEX on the MySql client command line."))}c.isMDXComponent=!0}}]);