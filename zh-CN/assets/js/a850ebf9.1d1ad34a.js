"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71484],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>I});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,I=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(I,l(l({ref:t},p),{},{components:n})):r.createElement(I,l({ref:t},p))}));function I(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const i={title:"ADMIN-SET-PARTITION-VERSION",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",title:"ADMIN-SET-PARTITION-VERSION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ADMIN-SET-PARTITION-VERSION",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SET-REPLICA-VERSION",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION"},next:{title:"ADMIN-SET-TABLE-STATUS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS"}},s={},c=[{value:"ADMIN-SET-PARTITION-VERSION",id:"admin-set-partition-version",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"admin-set-partition-version"},"ADMIN-SET-PARTITION-VERSION"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ADMIN SET PARTITION VERSION"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u624b\u52a8\u6539\u53d8\u6307\u5b9a\u5206\u533a\u7684\u53ef\u89c1\u7248\u672c\u3002"),(0,a.yg)("p",null,"\u5728\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u5143\u6570\u636e\u4e2d\u5206\u533a\u7684\u7248\u672c\u6709\u53ef\u80fd\u548c\u5b9e\u9645\u526f\u672c\u7684\u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u8be5\u547d\u4ee4\u53ef\u624b\u52a8\u6539\u53d8\u5143\u6570\u636e\u4e2d\u5206\u533a\u7684\u7248\u672c\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET TABLE table_name PARTITION VERSION\n        PROPERTIES ("key" = "value", ...);\n')),(0,a.yg)("p",null,"\u76ee\u524d\u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},'"partition_id"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u4e00\u4e2a Partition Id.'),(0,a.yg)("li",{parentName:"ol"},'"visible_version"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a Version.')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,a.yg)("p",{parentName:"blockquote"}," \u8bbe\u7f6e\u5206\u533a\u7684\u7248\u672c\u9700\u8981\u5148\u786e\u8ba4Be\u673a\u5668\u4e0a\u5b9e\u9645\u526f\u672c\u7684\u7248\u672c\uff0c\u6b64\u547d\u4ee4\u4e00\u822c\u53ea\u7528\u4e8e\u7d27\u6025\u6545\u969c\u4fee\u590d\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e partition 1769152 \u5728 FE \u5143\u6570\u636e\u4e0a\u7684\u7248\u672c\u4e3a 100\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET TABLE tbl1 PARTITION VERSION PROPERTIES("partition_id" = "1769152", "visible_version" = "100");\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ADMIN, SET, PARTITION, VERSION\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);