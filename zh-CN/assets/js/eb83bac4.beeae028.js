"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90290],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>j});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),i=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(t),d=r,j=p["".concat(a,".").concat(d)]||p[d]||f[d]||l;return t?o.createElement(j,s(s({ref:n},c),{},{components:t})):o.createElement(j,s({ref:n},c))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u[p]="string"==typeof e?e:r,s[1]=u;for(var i=2;i<l;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var o=t(87462),r=(t(67294),t(3905));const l={title:"JSON_QUOTE",language:"zh-CN"},s=void 0,u={unversionedId:"sql-manual/sql-functions/json-functions/json-quote",id:"sql-manual/sql-functions/json-functions/json-quote",title:"JSON_QUOTE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-quote.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-quote",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-quote",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_QUOTE",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_OBJECT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-object"},next:{title:"JSON_UNQUOTE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-unquote"}},a={},i=[{value:"json_quote",id:"json_quote",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"json_quote"},"json_quote"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VARCHAR json_quote(VARCHAR)")),(0,r.kt)("p",null,'\u5c06json_value\u7528\u53cc\u5f15\u53f7\uff08"\uff09\u62ec\u8d77\u6765\uff0c\u8df3\u8fc7\u5176\u4e2d\u5305\u542b\u7684\u7279\u6b8a\u8f6c\u4e49\u5b57\u7b26'),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'MySQL> SELECT json_quote(\'null\'), json_quote(\'"null"\');\n+--------------------+----------------------+\n| json_quote(\'null\') | json_quote(\'"null"\') |\n+--------------------+----------------------+\n| "null"             | "\\"null\\""           |\n+--------------------+----------------------+\n\n\nMySQL> SELECT json_quote(\'[1, 2, 3]\');\n+-------------------------+\n| json_quote(\'[1, 2, 3]\') |\n+-------------------------+\n| "[1, 2, 3]"             |\n+-------------------------+\n\n\nMySQL> SELECT json_quote(null);\n+------------------+\n| json_quote(null) |\n+------------------+\n| NULL             |\n+------------------+\n\nMySQL> select json_quote("\\n\\b\\r\\t");\n+------------------------+\n| json_quote(\'\\n\\b\\r\\t\') |\n+------------------------+\n| "\\n\\b\\r\\t"             |\n+------------------------+\n')),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"json,quote,json_quote"))}f.isMDXComponent=!0}}]);