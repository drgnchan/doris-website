"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37752],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>O});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,O=u["".concat(i,".").concat(y)]||u[y]||m[y]||l;return r?n.createElement(O,o(o({ref:t},p),{},{components:r})):n.createElement(O,o({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},72144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const l={title:"SHOW-SYNC-JOB",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-SYNC-JOB",id:"sql-manual/sql-reference/Show-Statements/SHOW-SYNC-JOB",title:"SHOW-SYNC-JOB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-SYNC-JOB.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-SYNC-JOB",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SYNC-JOB",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-SYNC-JOB",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD"},next:{title:"SHOW-WHITE-LIST",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-WHITE-LIST"}},i={},s=[{value:"SHOW-SYNC-JOB",id:"show-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-sync-job"},"SHOW-SYNC-JOB"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW SYNC JOB"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u6b64\u547d\u4ee4\u7528\u4e8e\u5f53\u524d\u663e\u793a\u6240\u6709\u6570\u636e\u5e93\u5185\u7684\u5e38\u9a7b\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u72b6\u6001\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW SYNC JOB [FROM db_name]\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u5f53\u524d\u6570\u636e\u5e93\u7684\u6240\u6709\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u72b6\u6001\u3002"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW SYNC JOB;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6570\u636e\u5e93 ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db")," \u4e0b\u7684\u6240\u6709\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u72b6\u6001\u3002"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW SYNC JOB FROM `test_db`;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, SYNC, JOB\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);