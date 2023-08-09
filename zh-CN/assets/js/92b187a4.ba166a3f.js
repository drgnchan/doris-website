"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94787],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,d=p["".concat(s,".").concat(y)]||p[y]||f[y]||i;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=y;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},22662:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={title:"ARRAY_FIRST",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-first",id:"sql-manual/sql-functions/array-functions/array-first",title:"ARRAY_FIRST",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-first.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-first",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-first",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_FIRST",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_LAST_INDEX",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-last-index"},next:{title:"ARRAY_LAST",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-last"}},s={},c=[{value:"array_first",id:"array_first",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_first"},"array_first"),(0,a.kt)("version",{since:"2.0"},(0,a.kt)("p",null,"array_first")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u4e2afunc(arr1","[i]",")\u503c\u4e0d\u4e3a0\u7684\u5143\u7d20\u3002\u5f53\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u8fdb\u884cfunc(arr1","[i]",")\u90fd\u4e3a0\u65f6\uff0c\u7ed3\u679c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"T array_first(lambda, ARRAY<T>)\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u4e00\u4e2alambda\u8868\u8fbe\u5f0f\u548c\u4e00\u4e2aARRAY\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0clambda\u8868\u8fbe\u5f0f\u4e3a\u5e03\u5c14\u578b\uff0c\u7528\u4e8e\u5bf9ARRAY\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8fdb\u884c\u5224\u65ad\u8fd4\u56de\u503c\u3002"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select array_first(x->x>2, [1,2,3,0]) ;\n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 2, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                              3 |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>4, [1,2,3,0]) ; \n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 4, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                           NULL |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>1, [1,2,3,0]) ;\n+---------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x > 1, ARRAY(1, 2, 3, 0))), 1) |\n+---------------------------------------------------------------------------------------------+\n|                                                                                           2 |\n+---------------------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY, LAST, array_first"))}f.isMDXComponent=!0}}]);