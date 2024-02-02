"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11232],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>O});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,O=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(O,l(l({ref:t},p),{},{components:r})):n.createElement(O,l({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const o={title:"SHOW-PARTITION-ID",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-PARTITION-ID",id:"sql-manual/sql-reference/Show-Statements/SHOW-PARTITION-ID",title:"SHOW-PARTITION-ID",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-PARTITION-ID.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-PARTITION-ID",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-PARTITION-ID",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-PARTITION-ID",language:"en"},sidebar:"docs",previous:{title:"SHOW-MIGRATIONS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-MIGRATIONS"},next:{title:"SHOW-SNAPSHOT",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT"}},c={},s=[{value:"SHOW-PARTITION-ID",id:"show-partition-id",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-partition-id"},"SHOW-PARTITION-ID"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW PARTITION ID"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to find the corresponding database name, table name, partition name according to the partition id (only for administrators)"),(0,a.yg)("p",null,"  grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PARTITION [partition_id]\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Find the corresponding database name, table name, partition name according to the partition id"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PARTITION 10002;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, PARTITION, ID\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);