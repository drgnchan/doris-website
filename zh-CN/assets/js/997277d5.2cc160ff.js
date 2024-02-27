"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[83045],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,y=p["".concat(c,".").concat(m)]||p[m]||g[m]||l;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={title:"ALTER-CATALOG",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",title:"ALTER-CATALOG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-CATALOG",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-JOB",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-JOB"},next:{title:"ALTER-DATABASE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE"}},c={},s=[{value:"ALTER-CATALOG",id:"alter-catalog",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-catalog"},"ALTER-CATALOG"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"1.2"},(0,r.yg)("p",null,"ALTER CATALOG")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u6570\u636e\u76ee\u5f55\u7684\u5c5e\u6027\u3002\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff09"),(0,r.yg)("p",null,"1) \u91cd\u547d\u540d\u6570\u636e\u76ee\u5f55"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name RENAME new_catalog_name;\n")),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"internal")," \u662f\u5185\u7f6e\u6570\u636e\u76ee\u5f55\uff0c\u4e0d\u5141\u8bb8\u91cd\u547d\u540d"),(0,r.yg)("li",{parentName:"ul"},"\u5bf9 ",(0,r.yg)("inlineCode",{parentName:"li"},"catalog_name")," \u62e5\u6709 Alter \u6743\u9650\u624d\u5141\u8bb8\u5bf9\u5176\u91cd\u547d\u540d"),(0,r.yg)("li",{parentName:"ul"},"\u91cd\u547d\u540d\u6570\u636e\u76ee\u5f55\u540e\uff0c\u5982\u9700\u8981\uff0c\u8bf7\u4f7f\u7528 REVOKE \u548c GRANT \u547d\u4ee4\u4fee\u6539\u76f8\u5e94\u7684\u7528\u6237\u6743\u9650\u3002")),(0,r.yg)("p",null,"2) \u8bbe\u7f6e\u6570\u636e\u76ee\u5f55\u5c5e\u6027"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name SET PROPERTIES ('key1' = 'value1' [, 'key' = 'value2']); \n")),(0,r.yg)("p",null,"\u66f4\u65b0\u6307\u5b9a\u5c5e\u6027\u7684\u503c\u4e3a\u6307\u5b9a\u7684 value\u3002\u5982\u679c SET PROPERTIES \u4ece\u53e5\u4e2d\u7684 key \u5728\u6307\u5b9a catalog \u5c5e\u6027\u4e2d\u4e0d\u5b58\u5728\uff0c\u5219\u65b0\u589e\u6b64 key\u3002"),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4e0d\u53ef\u66f4\u6539\u6570\u636e\u76ee\u5f55\u7c7b\u578b\uff0c\u5373 ",(0,r.yg)("inlineCode",{parentName:"li"},"type")," \u5c5e\u6027"),(0,r.yg)("li",{parentName:"ul"},"\u4e0d\u53ef\u66f4\u6539\u5185\u7f6e\u6570\u636e\u76ee\u5f55 ",(0,r.yg)("inlineCode",{parentName:"li"},"internal")," \u7684\u5c5e\u6027")),(0,r.yg)("p",null,"3) \u4fee\u6539\u6570\u636e\u76ee\u5f55\u6ce8\u91ca"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER CATALOG catalog_name MODIFY COMMENT "new catalog comment";\n')),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"internal")," \u662f\u5185\u7f6e\u6570\u636e\u76ee\u5f55\uff0c\u4e0d\u5141\u8bb8\u4fee\u6539\u6ce8\u91ca")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5c06\u6570\u636e\u76ee\u5f55 ctlg_hive \u91cd\u547d\u540d\u4e3a hive")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG ctlg_hive RENAME hive;\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u66f4\u65b0\u540d\u4e3a hive \u6570\u636e\u76ee\u5f55\u7684\u5c5e\u6027 ",(0,r.yg)("inlineCode",{parentName:"li"},"hive.metastore.uris"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG hive SET PROPERTIES ('hive.metastore.uris'='thrift://172.21.0.1:9083');\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u66f4\u6539\u540d\u4e3a hive \u6570\u636e\u76ee\u5f55\u7684\u6ce8\u91ca")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER CATALOG hive MODIFY COMMENT "new catalog comment";\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"ALTER,CATALOG,RENAME,PROPERTY"),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}g.isMDXComponent=!0}}]);