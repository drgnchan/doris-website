"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[38807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"RTRIM",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/rtrim",id:"sql-manual/sql-functions/string-functions/rtrim",title:"RTRIM",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/rtrim.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/rtrim",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/rtrim",draft:!1,tags:[],version:"current",frontMatter:{title:"RTRIM",language:"zh-CN"},sidebar:"docs",previous:{title:"LTRIM",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/ltrim"},next:{title:"NULL_OR_EMPTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/null-or-empty"}},s={},c=[{value:"rtrim",id:"rtrim",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rtrim"},"rtrim"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR rtrim(VARCHAR str[, VARCHAR rhs])")),(0,i.kt)("p",null,"\u5f53\u6ca1\u6709rhs\u53c2\u6570\u65f6\uff0c\u5c06\u53c2\u6570 str \u4e2d\u4ece\u53f3\u4fa7\u90e8\u5206\u5f00\u59cb\u90e8\u5206\u8fde\u7eed\u51fa\u73b0\u7684\u7a7a\u683c\u53bb\u6389\uff0c\u5426\u5219\u53bb\u6389rhs"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT rtrim('ab d   ') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT rtrim('ababccaab','ab') str;\n+---------+\n| str     |\n+---------+\n| ababcca |\n+---------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RTRIM\n")))}m.isMDXComponent=!0}}]);