"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46352],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(t),f=l,y=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const o={title:"NULL_OR_EMPTY",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/null-or-empty",id:"sql-manual/sql-functions/string-functions/null-or-empty",title:"NULL_OR_EMPTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/null-or-empty.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/null-or-empty",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/null-or-empty",draft:!1,tags:[],version:"current",frontMatter:{title:"NULL_OR_EMPTY",language:"zh-CN"},sidebar:"docs",previous:{title:"RTRIM",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/rtrim"},next:{title:"NOT_NULL_OR_EMPTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/not-null-or-empty"}},u={},s=[{value:"null_or_empty",id:"null_or_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"null_or_empty"},"null_or_empty"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BOOLEAN NULL_OR_EMPTY (VARCHAR str)")),(0,l.kt)("p",null,"\u5982\u679c\u5b57\u7b26\u4e32\u4e3a\u7a7a\u5b57\u7b26\u4e32\u6216\u8005NULL\uff0c\u8fd4\u56detrue\u3002\u5426\u5219\uff0c\u8fd4\u56defalse\u3002"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MySQL [(none)]> select null_or_empty(null);\n+---------------------+\n| null_or_empty(NULL) |\n+---------------------+\n|                   1 |\n+---------------------+\n\nMySQL [(none)]> select null_or_empty(\"\");\n+-------------------+\n| null_or_empty('') |\n+-------------------+\n|                 1 |\n+-------------------+\n\nMySQL [(none)]> select null_or_empty(\"a\");\n+--------------------+\n| null_or_empty('a') |\n+--------------------+\n|                  0 |\n+--------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NULL_OR_EMPTY\n")))}m.isMDXComponent=!0}}]);