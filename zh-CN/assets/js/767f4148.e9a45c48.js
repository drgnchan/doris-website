"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45754],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},839343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"asin",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/math-functions/asin",id:"version-1.2/sql-manual/sql-functions/math-functions/asin",title:"asin",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/math-functions/asin.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/asin",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/asin",draft:!1,tags:[],version:"1.2",frontMatter:{title:"asin",language:"zh-CN"},sidebar:"docs",previous:{title:"tan",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/tan"},next:{title:"acos",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/acos"}},l={},c=[{value:"asin",id:"asin",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"asin"},"asin"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE asin(DOUBLE x)"),"\n\u8fd4\u56de",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u53cd\u6b63\u5f26\u503c\uff0c\u82e5 ",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u4e0d\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"-1"),"\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"1"),"\u7684\u8303\u56f4\u4e4b\u5185\uff0c\u5219\u8fd4\u56de ",(0,a.yg)("inlineCode",{parentName:"p"},"nan"),"."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select asin(0.5);\n+---------------------+\n| asin(0.5)           |\n+---------------------+\n| 0.52359877559829893 |\n+---------------------+\nmysql> select asin(2);\n+-----------+\n| asin(2.0) |\n+-----------+\n|       nan |\n+-----------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ASIN\n")))}m.isMDXComponent=!0}}]);