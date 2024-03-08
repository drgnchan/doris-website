"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37994],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>I});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,I=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(I,i(i({ref:t},p),{},{components:n})):r.createElement(I,i({ref:t},p))}));function I(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},723994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-REPLICA-DISTRIBUTION",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",id:"version-2.1/sql-manual/sql-reference/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",title:"SHOW-REPLICA-DISTRIBUTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-REPLICA-DISTRIBUTION",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SET-TABLE-STATUS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS"},next:{title:"SHOW-REPLICA-STATUS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/SHOW-REPLICA-STATUS"}},s={},c=[{value:"SHOW-REPLICA-DISTRIBUTION",id:"show-replica-distribution",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-replica-distribution"},"SHOW-REPLICA-DISTRIBUTION"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW REPLICA DISTRIBUTION"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4e00\u4e2a\u8868\u6216\u5206\u533a\u526f\u672c\u5206\u5e03\u72b6\u6001"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA DISTRIBUTION FROM [db_name.]tbl_name [PARTITION (p1, ...)];\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u7ed3\u679c\u4e2d\u7684 Graph \u5217\u4ee5\u56fe\u5f62\u7684\u5f62\u5f0f\u5c55\u793a\u526f\u672c\u5206\u5e03\u6bd4\u4f8b")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u7684\u526f\u672c\u5206\u5e03"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA DISTRIBUTION FROM tbl1;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u7684\u5206\u533a\u7684\u526f\u672c\u5206\u5e03"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPLICA DISTRIBUTION FROM db1.tbl1 PARTITION(p1, p2);\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, REPLICA, DISTRIBUTION\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);