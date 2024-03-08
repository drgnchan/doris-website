"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93193],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},234886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"ADMIN-CHECK-TABLET",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET",id:"version-2.1/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET",title:"ADMIN-CHECK-TABLET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ADMIN-CHECK-TABLET",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-CANCEL-REPAIR",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"},next:{title:"SHOW TABLET DIAGNOSIS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS"}},s={},c=[{value:"ADMIN-CHECK-TABLET",id:"admin-check-tablet",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"admin-check-tablet"},"ADMIN-CHECK-TABLET"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ADMIN CHECK TABLET"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u4e00\u7ec4 tablet \u6267\u884c\u6307\u5b9a\u7684\u68c0\u67e5\u64cd\u4f5c"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN CHECK TABLET (tablet_id1, tablet_id2, ...)\nPROPERTIES("type" = "...");\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5fc5\u987b\u6307\u5b9a tablet id \u5217\u8868\u4ee5\u53ca PROPERTIES \u4e2d\u7684 type \u5c5e\u6027\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u76ee\u524d type \u4ec5\u652f\u6301\uff1a"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"consistency: \u5bf9tablet\u7684\u526f\u672c\u6570\u636e\u4e00\u81f4\u6027\u8fdb\u884c\u68c0\u67e5\u3002\u8be5\u547d\u4ee4\u4e3a\u5f02\u6b65\u547d\u4ee4\uff0c\u53d1\u9001\u540e\uff0cDoris \u4f1a\u5f00\u59cb\u6267\u884c\u5bf9\u5e94 tablet \u7684\u4e00\u81f4\u6027\u68c0\u67e5\u4f5c\u4e1a\u3002\u6700\u7ec8\u7684\u7ed3\u679c\uff0c\u5c06\u4f53\u73b0\u5728 ",(0,a.yg)("inlineCode",{parentName:"li"},'SHOW PROC "/cluster_health/tablet_health";')," \u7ed3\u679c\u4e2d\u7684 InconsistentTabletNum \u5217\u3002")))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5bf9\u6307\u5b9a\u7684\u4e00\u7ec4 tablet \u8fdb\u884c\u526f\u672c\u6570\u636e\u4e00\u81f4\u6027\u68c0\u67e5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'ADMIN CHECK TABLET (10000, 10001)\nPROPERTIES("type" = "consistency");\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ADMIN, CHECK, TABLET\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);