"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[17477],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>O});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,O=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(O,o(o({ref:t},p),{},{components:n})):a.createElement(O,o({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},604944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"PAUSE-ROUTINE-LOAD",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD",id:"version-2.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD",title:"PAUSE-ROUTINE-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD",draft:!1,tags:[],version:"2.1",frontMatter:{title:"PAUSE-ROUTINE-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD"},next:{title:"RESUME-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD"}},s={},c=[{value:"PAUSE-ROUTINE-LOAD",id:"pause-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"pause-routine-load"},"PAUSE-ROUTINE-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"PAUSE ROUTINE LOAD "),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u6682\u505c\u4e00\u4e2a Routine Load \u4f5c\u4e1a\u3002\u88ab\u6682\u505c\u7684\u4f5c\u4e1a\u53ef\u4ee5\u901a\u8fc7 RESUME \u547d\u4ee4\u91cd\u65b0\u8fd0\u884c\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE [ALL] ROUTINE LOAD FOR job_name\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6682\u505c\u540d\u79f0\u4e3a test1 \u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE ROUTINE LOAD FOR test1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6682\u505c\u6240\u6709\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE ALL ROUTINE LOAD;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"PAUSE, ROUTINE, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);