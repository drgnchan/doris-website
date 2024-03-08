"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58972],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"DROP-ASYNC-MATERIALIZED-VIEW",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ASYNC-MATERIALIZED-VIEW",id:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ASYNC-MATERIALIZED-VIEW",title:"DROP-ASYNC-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ASYNC-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ASYNC-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ASYNC-MATERIALIZED-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"DROP-ASYNC-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"TRUNCATE-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE"},next:{title:"DROP-JOB",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-JOB"}},c={},p=[{value:"DROP-ASYNC-MATERIALIZED-VIEW",id:"drop-async-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"drop-async-materialized-view"},"DROP-ASYNC-MATERIALIZED-VIEW"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"DROP ASYNC MATERIALIZED VIEW"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP MATERIALIZED VIEW (IF EXISTS)? mvName=multipartIdentifier\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"IF EXISTS:\n\u5982\u679c\u7269\u5316\u89c6\u56fe\u4e0d\u5b58\u5728\uff0c\u4e0d\u8981\u629b\u51fa\u9519\u8bef\u3002\u5982\u679c\u4e0d\u58f0\u660e\u6b64\u5173\u952e\u5b57\uff0c\u7269\u5316\u89c6\u56fe\u4e0d\u5b58\u5728\u5219\u62a5\u9519\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"mv_name:\n\u5f85\u5220\u9664\u7684\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0\u3002\u5fc5\u586b\u9879\u3002"))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5220\u9664\u8868\u7269\u5316\u89c6\u56femv1")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP MATERIALIZED VIEW mv1;\n")),(0,a.yg)("p",null,"2.\u5982\u679c\u5b58\u5728\uff0c\u5220\u9664\u6307\u5b9a database \u7684\u7269\u5316\u89c6\u56fe"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP MATERIALIZED VIEW IF EXISTS db1.mv1;\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DROP, ASYNC, MATERIALIZED, VIEW\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);