"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82412],{95788:(e,r,n)=>{n.d(r,{Iu:()=>y,yg:()=>d});var a=n(11504);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),c=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},y=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=t,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(d,i(i({ref:r},y),{},{components:n})):a.createElement(d,i({ref:r},y))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[u]="string"==typeof e?e:t,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59460:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(45072),t=(n(11504),n(95788));const l={title:"array_max",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_max",id:"version-1.2/sql-manual/sql-functions/array-functions/array_max",title:"array_max",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_max.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_max",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_max",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_max",language:"en"},sidebar:"docs",previous:{title:"array",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array"},next:{title:"array_min",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_min"}},s={},c=[{value:"array_max",id:"array_max",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function p(e){let{components:r,...n}=e;return(0,t.yg)(u,(0,a.c)({},y,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_max"},"array_max"),(0,t.yg)("version",{since:"1.2.0"},(0,t.yg)("p",null,"array_max")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"T array_max(ARRAY<T> array1)")),(0,t.yg)("p",null,"Get the maximum element in an array (",(0,t.yg)("inlineCode",{parentName:"p"},"NULL")," values are skipped).\nWhen the array is empty or all elements in the array are ",(0,t.yg)("inlineCode",{parentName:"p"},"NULL")," values, the function returns ",(0,t.yg)("inlineCode",{parentName:"p"},"NULL"),"."),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> set enable_vectorized_engine = true;    # enable vectorized engine\nmysql> select k2, array_max(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_max(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               3 |\n| [1, NULL, 3] |               3 |\n+--------------+-----------------+\n4 rows in set (0.02 sec)\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,MAX,ARRAY_MAX"))}p.isMDXComponent=!0}}]);