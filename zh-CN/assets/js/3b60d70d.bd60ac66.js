"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"MICROSECONDS_SUB",language:"zh-CN"},s=void 0,a={unversionedId:"sql-manual/sql-functions/date-time-functions/microseconds-sub",id:"sql-manual/sql-functions/date-time-functions/microseconds-sub",title:"MICROSECONDS_SUB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/microseconds-sub.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/microseconds-sub",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/microseconds-sub",draft:!1,tags:[],version:"current",frontMatter:{title:"MICROSECONDS_SUB",language:"zh-CN"}},c={},l=[{value:"microseconds_sub",id:"microseconds_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"microseconds_sub"},"microseconds_sub"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DATETIMEV2 microseconds_sub(DATETIMEV2 basetime, INT delta)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"basetime: DATETIMEV2 \u7c7b\u578b\u8d77\u59cb\u65f6\u95f4"),(0,o.kt)("li",{parentName:"ul"},"delta: \u4ece basetime \u8d77\u9700\u8981\u6263\u51cf\u7684\u5fae\u79d2\u6570"),(0,o.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7c7b\u578b\u4e3a DATETIMEV2")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select now(3), microseconds_sub(now(3), 100000);\n+-------------------------+----------------------------------+\n| now(3)                  | microseconds_sub(now(3), 100000) |\n+-------------------------+----------------------------------+\n| 2023-02-25 02:03:05.174 | 2023-02-25 02:03:05.074          |\n+-------------------------+----------------------------------+\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"now(3)")," \u8fd4\u56de\u7cbe\u5ea6\u4f4d\u6570 3 \u7684 DATETIMEV2 \u7c7b\u578b\u5f53\u524d\u65f6\u95f4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"microseconds_add(now(3), 100000)")," \u8fd4\u56de\u5f53\u524d\u65f6\u95f4\u51cf\u53bb 100000 \u5fae\u79d2\u540e\u7684 DATETIMEV2 \u7c7b\u578b\u65f6\u95f4"),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"microseconds_sub\n")))}d.isMDXComponent=!0}}]);