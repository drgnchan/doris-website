"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62268],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||l;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},73244:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const l={title:"JSON_VALID",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json-valid",id:"sql-manual/sql-functions/json-functions/json-valid",title:"JSON_VALID",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-valid.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-valid",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-valid",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_VALID",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_UNQUOTE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-unquote"},next:{title:"JSON_CONTAINS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-contains"}},s={},c=[{value:"json_valid",id:"json_valid",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"json_valid"},"json_valid"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"json_valid \u51fd\u6570\u8fd4\u56de0\u62161\u4ee5\u8868\u660e\u662f\u5426\u4e3a\u6709\u6548\u7684JSON, \u5982\u679c\u53c2\u6570\u662fNULL\u5219\u8fd4\u56deNULL\u3002"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"JSONB json_valid(VARCHAR json_str)")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u6b63\u5e38JSON\u5b57\u7b26\u4e32")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'MySQL > SELECT json_valid(\'{"k1":"v31","k2":300}\');\n+-------------------------------------+\n| json_valid(\'{"k1":"v31","k2":300}\') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n1 row in set (0.02 sec)\n')),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"\u65e0\u6548\u7684JSON\u5b57\u7b26\u4e32")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > SELECT json_valid('invalid json');\n+----------------------------+\n| json_valid('invalid json') |\n+----------------------------+\n|                          0 |\n+----------------------------+\n1 row in set (0.02 sec)\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"NULL\u53c2\u6570")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > select json_valid(NULL);\n+------------------+\n| json_valid(NULL) |\n+------------------+\n|             NULL |\n+------------------+\n1 row in set (0.02 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"JSON, VALID, JSON_VALID"))}d.isMDXComponent=!0}}]);