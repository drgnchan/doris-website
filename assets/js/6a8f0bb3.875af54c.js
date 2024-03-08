"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16273],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},149249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-DATA-TYPES",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-DATA-TYPES",id:"version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-DATA-TYPES",title:"SHOW-DATA-TYPES",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-DATA-TYPES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-DATA-TYPES",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-DATA-TYPES",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-DATA-TYPES",language:"en"},sidebar:"docs",previous:{title:"SHOW-DATA",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-DATA"},next:{title:"SHOW-ENGINES",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-ENGINES"}},i={},c=[{value:"SHOW-DATA-TYPES",id:"show-data-types",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-data-types"},"SHOW-DATA-TYPES"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW DATA TYPES"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"This statement is used to view all supported data types.\n\ngrammar:\n    ```sql\n    SHOW DATA TYPES;\n    ```\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1. Display all supported data types\n\n    SHOW DATA TYPES;\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW,DATA,TYPES\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);