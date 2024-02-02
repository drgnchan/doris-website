"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66852],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>d});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(45072),i=(t(11504),t(95788));const o={title:"POSITIVE",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/positive",id:"sql-manual/sql-functions/numeric-functions/positive",title:"POSITIVE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/positive.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/positive",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/positive",draft:!1,tags:[],version:"current",frontMatter:{title:"POSITIVE",language:"zh-CN"},sidebar:"docs",previous:{title:"SIGN",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/sign"},next:{title:"NEGATIVE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/negative"}},s={},c=[{value:"positive",id:"positive",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"positive"},"positive"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"BIGINT positive(BIGINT x)\nDOUBLE positive(DOUBLE x)\nDECIMAL positive(DECIMAL x)\n")),(0,i.yg)("p",null,"\u8fd4\u56de",(0,i.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SELECT positive(-10);\n+---------------+\n| positive(-10) |\n+---------------+\n|           -10 |\n+---------------+\nmysql> SELECT positive(12);\n+--------------+\n| positive(12) |\n+--------------+\n|           12 |\n+--------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"POSITIVE\n")))}f.isMDXComponent=!0}}]);