"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18982],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},735738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const l={title:"STOP-SYNC-JOB",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB",id:"version-2.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB",title:"STOP-SYNC-JOB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB",draft:!1,tags:[],version:"2.1",frontMatter:{title:"STOP-SYNC-JOB",language:"zh-CN"},sidebar:"docs",previous:{title:"RESUME-SYNC-JOB",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-SYNC-JOB"},next:{title:"CANCEL-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD"}},c={},s=[{value:"STOP-SYNC-JOB",id:"stop-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"stop-sync-job"},"STOP-SYNC-JOB"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"STOP SYNC JOB"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"job_name")," \u505c\u6b62\u4e00\u4e2a\u6570\u636e\u5e93\u5185\u975e\u505c\u6b62\u72b6\u6001\u7684\u5e38\u9a7b\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"STOP SYNC JOB [db.]job_name\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u505c\u6b62\u540d\u79f0\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"job_name")," \u7684\u6570\u636e\u540c\u6b65\u4f5c\u4e1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"STOP SYNC JOB `job_name`;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"STOP, SYNC, JOB\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);