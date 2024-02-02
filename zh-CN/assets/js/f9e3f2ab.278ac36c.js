"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11680],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>A});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,A=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(A,i(i({ref:t},p),{},{components:n})):r.createElement(A,i({ref:t},p))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const l={title:"ADMIN-CANCEL-REPAIR",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",id:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",title:"ADMIN-CANCEL-REPAIR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN-CANCEL-REPAIR",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-REPAIR-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE"},next:{title:"ADMIN-CHECK-TABLET",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET"}},s={},c=[{value:"ADMIN-CANCEL-REPAIR",id:"admin-cancel-repair",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"admin-cancel-repair"},"ADMIN-CANCEL-REPAIR"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ADMIN CANCEL REPAIR"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u53d6\u6d88\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN CANCEL REPAIR TABLE table_name[ PARTITION (p1,...)];\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8be5\u8bed\u53e5\u4ec5\u8868\u793a\u7cfb\u7edf\u4e0d\u518d\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\u3002\u7cfb\u7edf\u4ecd\u4f1a\u4ee5\u9ed8\u8ba4\u8c03\u5ea6\u65b9\u5f0f\u4fee\u590d\u526f\u672c\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u53d6\u6d88\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," ADMIN CANCEL REPAIR TABLE tbl PARTITION(p1);\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ADMIN, CANCEL, REPAIR\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);