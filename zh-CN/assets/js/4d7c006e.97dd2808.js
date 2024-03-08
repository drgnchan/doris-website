"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[23430],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},555462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ADMIN-SET-REPLICA-VERSION",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION",id:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION",title:"ADMIN-SET-REPLICA-VERSION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN-SET-REPLICA-VERSION",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SET-REPLICA-STATUS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS"},next:{title:"ADMIN-SET-PARTITION-VERSION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION"}},s={},c=[{value:"ADMIN-SET-REPLICA-VERSION",id:"admin-set-replica-version",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-set-replica-version"},"ADMIN-SET-REPLICA-VERSION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN SET REPLICA VERSION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u526f\u672c\u7684\u7248\u672c\u3001\u6700\u5927\u6210\u529f\u7248\u672c\u3001\u6700\u5927\u5931\u8d25\u7248\u672c\u3002"),(0,r.yg)("p",null,"\u8be5\u547d\u4ee4\u76ee\u524d\u4ec5\u7528\u4e8e\u5728\u7a0b\u5e8f\u5f02\u5e38\u60c5\u51b5\u4e0b\uff0c\u624b\u52a8\u4fee\u590d\u526f\u672c\u7684\u7248\u672c\uff0c\u4ece\u800c\u4f7f\u5f97\u526f\u672c\u4ece\u5f02\u5e38\u72b6\u6001\u6062\u590d\u8fc7\u6765\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA VERSION\n        PROPERTIES ("key" = "value", ...);\n')),(0,r.yg)("p",null," \u76ee\u524d\u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"tablet_id"),"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u4e00\u4e2a Tablet Id."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"backend_id"),"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a Backend Id."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"version"),"\uff1a\u53ef\u9009\u3002\u8bbe\u7f6e\u526f\u672c\u7684\u7248\u672c."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"last_success_version"),"\uff1a\u53ef\u9009\u3002\u8bbe\u7f6e\u526f\u672c\u7684\u6700\u5927\u6210\u529f\u7248\u672c."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"last_failed_version"),"\uff1a\u53ef\u9009\u3002\u8bbe\u7f6e\u526f\u672c\u7684\u6700\u5927\u5931\u8d25\u7248\u672c\u3002")),(0,r.yg)("p",null,"\u5982\u679c\u6307\u5b9a\u7684\u526f\u672c\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u88ab\u5ffd\u7565\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,r.yg)("p",{parentName:"blockquote"}," \u4fee\u6539\u8fd9\u51e0\u4e2a\u6570\u503c\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u540e\u9762\u6570\u636e\u8bfb\u5199\u5931\u8d25\uff0c\u9020\u6210\u6570\u636e\u4e0d\u4e00\u81f4\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01"),(0,r.yg)("p",{parentName:"blockquote"},"  \u4fee\u6539\u4e4b\u524d\u5148\u8bb0\u5f55\u539f\u6765\u7684\u503c\u3002\u4fee\u6539\u5b8c\u6bd5\u4e4b\u540e\uff0c\u5bf9\u8868\u8fdb\u884c\u8bfb\u5199\u9a8c\u8bc1\uff0c\u5982\u679c\u8bfb\u5199\u5931\u8d25\uff0c\u8bf7\u6062\u590d\u539f\u6765\u7684\u503c\uff01\u4f46\u53ef\u80fd\u4f1a\u6062\u590d\u5931\u8d25\uff01"),(0,r.yg)("p",{parentName:"blockquote"},"  \u4e25\u7981\u5bf9\u6b63\u5728\u5199\u5165\u6570\u636e\u7684tablet\u8fdb\u884c\u64cd\u4f5c \uff01")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6e05\u9664 tablet 10003 \u5728 BE 10001 \u4e0a\u7684\u526f\u672c\u72b6\u6001\u5931\u8d25\u6807\u5fd7\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA VERSION PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "last_failed_version" = "-1");\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e tablet 10003 \u5728 BE 10001 \u4e0a\u7684\u526f\u672c\u7248\u672c\u53f7\u4e3a 1004\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA VERSION PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "version" = "1004");\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, SET, REPLICA, VERSION\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);