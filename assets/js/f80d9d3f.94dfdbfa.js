"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51050],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const i={title:"KILL",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/KILL",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/KILL",title:"KILL",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/KILL.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/KILL",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/KILL",draft:!1,tags:[],version:"2.0",frontMatter:{title:"KILL",language:"en"},sidebar:"docs",previous:{title:"RECOVER",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/RECOVER"},next:{title:"ADMIN-REBALANCE-DISK",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK"}},s={},c=[{value:"KILL",id:"kill",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"kill"},"KILL"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"KILL"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Each Doris connection runs in a separate thread. You can kill a thread with the KILL processlist_id statement."),(0,a.yg)("p",null,"The thread process list identifier can be determined from the ID column of the INFORMATION_SCHEMA PROCESSLIST table, the Id column of the SHOW PROCESSLIST output, and the PROCESSLIST_ID column of the Performance Schema thread table."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"KILL [CONNECTION] processlist_id\n")),(0,a.yg)("p",null,"In addition, you can also use processlist_id or query_id terminates the executing query command"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"KILL QUERY processlist_id | query_id\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"KILL\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);