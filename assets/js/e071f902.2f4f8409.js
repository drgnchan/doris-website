"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46736],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>O});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,O=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(O,l(l({ref:t},p),{},{components:r})):n.createElement(O,l({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const o={title:"DROP-RESOURCE",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE",id:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE",title:"DROP-RESOURCE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE",draft:!1,tags:[],version:"current",frontMatter:{title:"DROP-RESOURCE",language:"en"},sidebar:"docs",previous:{title:"DROP-ENCRYPT-KEY",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY"},next:{title:"DROP-WORKLOAD-GROUP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP"}},s={},c=[{value:"DROP-RESOURCE",id:"drop-resource",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"drop-resource"},"DROP-RESOURCE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"DROP RESOURCE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to delete an existing resource. Only the root or admin user can delete resources.\ngrammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP RESOURCE 'resource_name'\n")),(0,a.yg)("p",null,"Note: ODBC/S3 resources in use cannot be deleted."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Delete the Spark resource named spark0:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP RESOURCE 'spark0';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," DROP, RESOURCE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);