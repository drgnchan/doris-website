"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[9110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,y=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const l={title:"NOT_NULL_OR_EMPTY",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/not-null-or-empty",id:"sql-manual/sql-functions/string-functions/not-null-or-empty",title:"NOT_NULL_OR_EMPTY",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/not-null-or-empty.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/not-null-or-empty",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/not-null-or-empty",draft:!1,tags:[],version:"current",frontMatter:{title:"NOT_NULL_OR_EMPTY",language:"en"},sidebar:"docs",previous:{title:"NULL_OR_EMPTY",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/null-or-empty"},next:{title:"HEX",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/hex"}},s={},u=[{value:"not_null_or_empty",id:"not_null_or_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"not_null_or_empty"},"not_null_or_empty"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BOOLEAN NOT_NULL_OR_EMPTY (VARCHAR str)")),(0,o.kt)("p",null,"It returns false if the string is an empty string or NULL. Otherwise it returns true."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL [(none)]> select not_null_or_empty(null);\n+-------------------------+\n| not_null_or_empty(NULL) |\n+-------------------------+\n|                       0 |\n+-------------------------+\n\nMySQL [(none)]> select not_null_or_empty(\"\");\n+-----------------------+\n| not_null_or_empty('') |\n+-----------------------+\n|                     0 |\n+-----------------------+\n\nMySQL [(none)]> select not_null_or_empty(\"a\");\n+------------------------+\n| not_null_or_empty('a') |\n+------------------------+\n|                      1 |\n+------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NOT_NULL_OR_EMPTY\n")))}m.isMDXComponent=!0}}]);