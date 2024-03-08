"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[21766],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(y,l(l({ref:t},p),{},{components:a})):n.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},727357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const o={title:"SHOW-CATALOG-RECYCLE-BIN",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",id:"sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",title:"SHOW-CATALOG-RECYCLE-BIN",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CATALOG-RECYCLE-BIN",language:"en"},sidebar:"docs",previous:{title:"SHOW-POLICY",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-POLICY"},next:{title:"SHOW-QUERY-STATS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS"}},s={},c=[{value:"SHOW-CATALOG-RECYCLE-BIN",id:"show-catalog-recycle-bin",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-catalog-recycle-bin"},"SHOW-CATALOG-RECYCLE-BIN"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW CATALOG RECYCLE BIN"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to display the dropped meta informations that can be recovered"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n')),(0,r.yg)("p",null,"grammar: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"The meaning of each column is as follows:\n        Type\uff1a                type of meta information:Database\u3001Table\u3001Partition\n        Name\uff1a                name of meta information\n        DbId\uff1a                id of database\n        TableId\uff1a             id of table\n        PartitionId\uff1a         id of partition\n        DropTime\uff1a            drop time of meta information\n        DataSize\uff1a            the amount of data. If the type is database, this value includes the data size of the recycled tables and partitions in the database\n        RemoteDataSize\uff1a      the amount of data on remote storage(hdfs or object storage). If the type is database, this value includes the remote data size of the recycled tables and partitions in the database\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display all meta informations that can be recovered"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW CATALOG RECYCLE BIN;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display meta informations with name 'test'"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW CATALOG RECYCLE BIN WHERE NAME = 'test';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, CATALOG RECYCLE BIN\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);