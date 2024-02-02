"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53220],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>d});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(i,".").concat(m)]||u[m]||O[m]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>O,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const l={title:"SHOW-CREATE-ROUTINE-LOAD",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-ROUTINE-LOAD",id:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-ROUTINE-LOAD",title:"SHOW-CREATE-ROUTINE-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-ROUTINE-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CREATE-ROUTINE-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-CREATE-REPOSITORY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-REPOSITORY"},next:{title:"SHOW-CREATE-FUNCTION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-FUNCTION"}},i={},s=[{value:"SHOW-CREATE-ROUTINE-LOAD",id:"show-create-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function O(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-create-routine-load"},"SHOW-CREATE-ROUTINE-LOAD"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW CREATE ROUTINE LOAD"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u7684\u521b\u5efa\u8bed\u53e5."),(0,a.yg)("p",null,"\u7ed3\u679c\u4e2d\u7684 kafka partition \u548c offset \u5c55\u793a\u7684\u5f53\u524d\u6d88\u8d39\u7684 partition\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u5f85\u6d88\u8d39\u7684 offset\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [ALL] CREATE ROUTINE LOAD for load_name;\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"      1. `ALL`: \u53ef\u9009\u53c2\u6570\uff0c\u4ee3\u8868\u83b7\u53d6\u6240\u6709\u4f5c\u4e1a\uff0c\u5305\u62ec\u5386\u53f2\u4f5c\u4e1a\n      2.  `load_name`: \u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u540d\u79f0\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u9ed8\u8ba4db\u4e0b\u6307\u5b9a\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u7684\u521b\u5efa\u8bed\u53e5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE ROUTINE LOAD for test_load\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, CREATE, ROUTINE, LOAD\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}O.isMDXComponent=!0}}]);