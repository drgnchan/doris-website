"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27761],{15680:(e,t,r)=>{r.d(t,{xA:()=>E,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},E=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,E=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return r?n.createElement(y,i(i({ref:t},E),{},{components:r})):n.createElement(y,i({ref:t},E))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},922297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(58168),a=(r(296540),r(15680));const l={title:"RESUME-MATERIALIZED-VIEW",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Utility-Statements/RESUME-MATERIALIZED-VIEW",id:"sql-manual/sql-reference/Utility-Statements/RESUME-MATERIALIZED-VIEW",title:"RESUME-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Utility-Statements/RESUME-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/RESUME-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/RESUME-MATERIALIZED-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"RESUME-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"REFRESH-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH-MATERIALIZED-VIEW"},next:{title:"REFRESH-LDAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH-LDAP"}},c={},s=[{value:"RESUME-MATERIALIZED-VIEW",id:"resume-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],E={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"resume-materialized-view"},"RESUME-MATERIALIZED-VIEW"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"RESUME MATERIALIZED VIEW"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6682\u6062\u590d\u7269\u5316\u89c6\u56fe\u7684\u5b9a\u65f6\u8c03\u5ea6"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"RESUME MATERIALIZED VIEW JOB ON mvName=multipartIdentifier\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6062\u590d\u7269\u5316\u89c6\u56femv1\u7684\u5b9a\u65f6\u8c03\u5ea6"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"RESUME MATERIALIZED VIEW mv1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"RESUME, MATERIALIZED, VIEW\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);