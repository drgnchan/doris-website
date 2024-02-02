"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12728],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const l={title:"KILL",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/KILL",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/KILL",title:"KILL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/KILL.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/KILL",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/KILL",draft:!1,tags:[],version:"2.0",frontMatter:{title:"KILL",language:"zh-CN"},sidebar:"docs",previous:{title:"RECOVER",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/RECOVER"},next:{title:"ADMIN-REBALANCE-DISK",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK"}},o={},c=[{value:"KILL",id:"kill",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"kill"},"KILL"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"KILL"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u6bcf\u4e2a Doris \u7684\u8fde\u63a5\u90fd\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u7ebf\u7a0b\u4e2d\u8fd0\u884c\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 KILL processlist_id \u8bed\u53e5\u7ec8\u6b62\u7ebf\u7a0b\u3002"),(0,a.yg)("p",null,"\u7ebf\u7a0b\u8fdb\u7a0b\u5217\u8868\u6807\u8bc6\u7b26\u53ef\u4ee5\u4ece INFORMATION_SCHEMA PROCESSLIST \u8868\u7684 ID \u5217\u3001SHOW PROCESSLIST \u8f93\u51fa\u7684 Id \u5217\u548c\u6027\u80fd\u6a21\u5f0f\u7ebf\u7a0b\u8868\u7684 PROCESSLIST_ID \u5217\u786e\u5b9a\u3002 "),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"KILL [CONNECTION] processlist_id\n")),(0,a.yg)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 processlist_id \u6216\u8005 query_id \u7ec8\u6b62\u6b63\u5728\u6267\u884c\u7684\u67e5\u8be2\u547d\u4ee4"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"KILL QUERY processlist_id | query_id\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"KILL\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);