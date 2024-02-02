"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66440],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>c});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,c=u["".concat(d,".").concat(y)]||u[y]||g[y]||i;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(45072),r=(n(11504),n(95788));const i={title:"Index Overview",language:"en"},l=void 0,o={unversionedId:"data-table/index/index-overview",id:"data-table/index/index-overview",title:"Index Overview",description:"\x3c!--",source:"@site/docs/data-table/index/index-overview.md",sourceDirName:"data-table/index",slug:"/data-table/index/index-overview",permalink:"/docs/dev/data-table/index/index-overview",draft:!1,tags:[],version:"current",frontMatter:{title:"Index Overview",language:"en"},sidebar:"docs",previous:{title:"Best Practices",permalink:"/docs/dev/data-table/best-practice"},next:{title:"Inverted Index",permalink:"/docs/dev/data-table/index/inverted-index"}},d={},s=[{value:"Prefix Index",id:"prefix-index",level:2},{value:"Examples",id:"examples",level:2},{value:"Adjust Prefix Index by ROLLUP",id:"adjust-prefix-index-by-rollup",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"index-overview"},"Index Overview"),(0,r.yg)("p",null,"Indexes are used to help quickly filter or find data."),(0,r.yg)("p",null,"Doris currently supports two main types of indexes:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"built-in smart indexes, including prefix indexes and ZoneMap indexes."),(0,r.yg)("li",{parentName:"ol"},"User-created secondary indexes, including the ",(0,r.yg)("a",{parentName:"li",href:"/docs/dev/data-table/index/inverted-index"},"inverted index"),", ",(0,r.yg)("a",{parentName:"li",href:"/docs/dev/data-table/index/bloomfilter"},"bloomfilter index"),"\u3001",(0,r.yg)("a",{parentName:"li",href:"/docs/dev/data-table/index/ngram-bloomfilter-index"},"ngram bloomfilter index")," and ",(0,r.yg)("a",{parentName:"li",href:"/docs/dev/data-table/index/bitmap-index"},"bitmap index"),".")),(0,r.yg)("p",null,"The ZoneMap index is the index information automatically maintained for each column in the column storage format, including Min/Max, the number of Null values, and so on. This index is transparent to the user."),(0,r.yg)("h2",{id:"prefix-index"},"Prefix Index"),(0,r.yg)("p",null,"Unlike traditional database designs, Doris does not support creating indexes on arbitrary columns. an OLAP database with an MPP architecture like Doris is typically designed to handle large amounts of data by increasing concurrency."),(0,r.yg)("p",null,"Essentially, Doris data is stored in a data structure similar to an SSTable (Sorted String Table). This structure is an ordered data structure that can be stored sorted by specified columns. On this data structure, it will be very efficient to perform lookups with sorted columns as a condition."),(0,r.yg)("p",null,"In the Aggregate, Unique and Duplicate data models. The underlying data storage is sorted and stored according to the columns specified in the respective table building statements, AGGREGATE KEY, UNIQUE KEY and DUPLICATE KEY."),(0,r.yg)("p",null,"The prefix index, which is based on sorting, is an indexing method to query data quickly based on a given prefix column."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"We use the first 36 bytes of a row of data as the prefix index of this row of data. Prefix indexes are simply truncated when a VARCHAR type is encountered. We give an example:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The prefix index of the following table structure is user_id(8 Bytes) + age(4 Bytes) + message(prefix 20 Bytes)."),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_id"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The prefix index of the following table structure is user_name(20 Bytes). Even if it does not reach 36 bytes, because VARCHAR is encountered, it is directly truncated and will not continue further."),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_name"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(20)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")))))),(0,r.yg)("p",null,"When our query condition is the prefix of the prefix index, the query speed can be greatly accelerated. For example, in the first example, we execute the following query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE user_id=1829239 and age=20\uff1b\n")),(0,r.yg)("p",null,"This query will be much more efficient than the following query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE age=20\uff1b\n")),(0,r.yg)("p",null,"Therefore, when building a table, choosing the correct column order can greatly improve query efficiency."),(0,r.yg)("h2",{id:"adjust-prefix-index-by-rollup"},"Adjust Prefix Index by ROLLUP"),(0,r.yg)("p",null,"Because the column order has been specified when the table is created, there is only one prefix index for a table. This may not be efficient for queries that use other columns that cannot hit the prefix index as conditions. Therefore, we can artificially adjust the column order by creating a ROLLUP. For details, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/data-table/hit-the-rollup"},"ROLLUP"),"."))}g.isMDXComponent=!0}}]);