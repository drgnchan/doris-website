"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8741],{3905:(r,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function l(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function o(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var s=n.createContext({}),c=function(r){var e=n.useContext(s),t=e;return r&&(t="function"==typeof r?r(e):l(l({},e),r)),t},u=function(r){var e=c(r.components);return n.createElement(s.Provider,{value:e},r.children)},f="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,i=r.originalType,s=r.parentName,u=o(r,["components","mdxType","originalType","parentName"]),f=c(t),y=a,d=f["".concat(s,".").concat(y)]||f[y]||p[y]||i;return t?n.createElement(d,l(l({ref:e},u),{},{components:t})):n.createElement(d,l({ref:e},u))}));function d(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var i=t.length,l=new Array(i);l[0]=y;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=r,o[f]="string"==typeof r?r:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},39226:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={title:"array_first",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_first",id:"sql-manual/sql-functions/array-functions/array_first",title:"array_first",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array_first.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_first",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_first",draft:!1,tags:[],version:"current",frontMatter:{title:"array_first",language:"zh-CN"},sidebar:"docs",previous:{title:"array_last_index",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_last_index"},next:{title:"array_last",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_last"}},s={},c=[{value:"array_first",id:"array_first",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},f="wrapper";function p(r){let{components:e,...t}=r;return(0,a.kt)(f,(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_first"},"array_first"),(0,a.kt)("version",{since:"2.0"},(0,a.kt)("p",null,"array_first")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u4e2afunc(arr1","[i]",")\u503c\u4e0d\u4e3a0\u7684\u5143\u7d20\u3002\u5f53\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u8fdb\u884cfunc(arr1","[i]",")\u90fd\u4e3a0\u65f6\uff0c\u7ed3\u679c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T array_first(lambda, ARRAY<T>)\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u4e00\u4e2alambda\u8868\u8fbe\u5f0f\u548c\u4e00\u4e2aARRAY\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0clambda\u8868\u8fbe\u5f0f\u4e3a\u5e03\u5c14\u578b\uff0c\u7528\u4e8e\u5bf9ARRAY\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8fdb\u884c\u5224\u65ad\u8fd4\u56de\u503c\u3002"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select array_first(x->x>2, [1,2,3,0]) ;\n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 2, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                              3 |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>4, [1,2,3,0]) ; \n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 4, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                           NULL |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>1, [1,2,3,0]) ;\n+---------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x > 1, ARRAY(1, 2, 3, 0))), 1) |\n+---------------------------------------------------------------------------------------------+\n|                                                                                           2 |\n+---------------------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY, LAST, array_first"))}p.isMDXComponent=!0}}]);