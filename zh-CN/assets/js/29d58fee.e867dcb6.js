"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[8376],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={title:"json_extract",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json_extract",id:"version-1.2/sql-manual/sql-functions/json-functions/json_extract",title:"json_extract",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/json-functions/json_extract.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_extract",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_extract",draft:!1,tags:[],version:"1.2",frontMatter:{title:"json_extract",language:"zh-CN"},sidebar:"docs",previous:{title:"json_valid",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_valid"},next:{title:"murmur_hash3_32",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_32"}},l={},c=[{value:"json_extract",id:"json_extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"json_extract"},"json_extract"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR json_extract(VARCHAR json_str, VARCHAR path[, VARCHAR path] ...))")),(0,o.yg)("p",null,"json_extract\u51fd\u6570\u4ece JSON \u6587\u6863\u4e2d\u8fd4\u56de\u6570\u636e\uff0c\u8fd9\u4e9b\u6570\u636e\u662f\u4ece\u4e0e ",(0,o.yg)("inlineCode",{parentName:"p"},"path")," \u53c2\u6570\u6240\u5339\u914d\u7684\u6587\u6863\u90e8\u5206\u4e2d\u9009\u62e9\u7684\u3002\u5982\u679c\u4efb\u4f55\u53c2\u6570\u4e3a NULL \u6216\u8005 ",(0,o.yg)("inlineCode",{parentName:"p"},"json_str")," \u53c2\u6570\u4e0d\u662f\u6709\u6548\u7684 JSON \u6587\u6863\uff0c\u5219\u8fd4\u56de NULL\u3002\u5982\u679c ",(0,o.yg)("inlineCode",{parentName:"p"},"path")," \u53c2\u6570\u4e0d\u662f\u4e00\u4e2a\u6709\u6548\u7684\u8def\u5f84(\u5373\u8fd9\u4e2a\u8def\u5f84\u6ca1\u6709\u51fa\u73b0\u5728JSON\u6587\u6863\u4e2d)\uff0c\u5219\u8fd4\u56de\u7684\u6570\u7ec4\u4e2d\u5bf9\u5e94\u7684\u9879\u4e3a NULL(\u89c1\u4e0b\u9762\u4f8b\u5b50)\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id');\n+------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id') |\n+------------------------------------------------------+\n| 123                                                  |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('[1, 2, 3]', '$.[1]');\n+------------------------------------+\n| json_extract('[1, 2, 3]', '$.[1]') |\n+------------------------------------+\n| 2                                  |\n+------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]');\n+-------------------------------------------------------------------------------------------------------------------+\n| json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]') |\n+-------------------------------------------------------------------------------------------------------------------+\n| [\"v1\",6.6,[1,2],2]                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name');\n+-----------------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name') |\n+-----------------------------------------------------------------+\n| [null,\"doris\"]                                                  |\n+-----------------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"JSON, EXTRACT, JSON_EXTRACT"))}d.isMDXComponent=!0}}]);