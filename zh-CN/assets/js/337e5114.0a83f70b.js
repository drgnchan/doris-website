"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[60724],{3905:(e,r,n)=>{n.d(r,{Zo:()=>f,kt:()=>d});var a=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=a.createContext({}),c=function(e){var r=a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},f=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),i=c(n),p=t,d=i["".concat(u,".").concat(p)]||i[p]||y[p]||l;return n?a.createElement(d,s(s({ref:r},f),{},{components:n})):a.createElement(d,s({ref:r},f))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,s=new Array(l);s[0]=p;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[i]="string"==typeof e?e:t,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70505:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),t=(n(67294),n(3905));const l={title:"array_shuffle",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_shuffle",id:"version-1.2/sql-manual/sql-functions/array-functions/array_shuffle",title:"array_shuffle",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_shuffle.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_shuffle",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_shuffle",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_shuffle",language:"zh-CN"},sidebar:"docs",previous:{title:"array_concat",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_concat"},next:{title:"array_cum_sum",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_cum_sum"}},u={},c=[{value:"array_shuffle",id:"array_shuffle",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],f={toc:c},i="wrapper";function y(e){let{components:r,...n}=e;return(0,t.kt)(i,(0,a.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"array_shuffle"},"array_shuffle"),(0,t.kt)("version",{since:"2.0"},(0,t.kt)("p",null,"array_shuffle\nshuffle")),(0,t.kt)("h3",{id:"description"},"description"),(0,t.kt)("h4",{id:"syntax"},"Syntax"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_shuffle(ARRAY<T> array1, [INT seed])\nARRAY<T> shuffle(ARRAY<T> array1, [INT seed])\n")),(0,t.kt)("p",null,"\u5c06\u6570\u7ec4\u4e2d\u5143\u7d20\u8fdb\u884c\u968f\u673a\u6392\u5217\u3002\u5176\u4e2d\uff0c\u53c2\u6570array1\u4e3a\u8981\u8fdb\u884c\u968f\u673a\u6392\u5217\u7684\u6570\u7ec4\uff0c\u53ef\u9009\u53c2\u6570seed\u662f\u8bbe\u5b9a\u4f2a\u968f\u673a\u6570\u751f\u6210\u5668\u7528\u4e8e\u751f\u6210\u4f2a\u968f\u673a\u6570\u7684\u521d\u59cb\u6570\u503c\u3002\nshuffle\u4e0earray_shuffle\u529f\u80fd\u76f8\u540c\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"array_shuffle(array1);\narray_shuffle(array1, 0);\nshuffle(array1);\nshuffle(array1, 0);\n")),(0,t.kt)("h3",{id:"example"},"example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"\nmysql [test]> select c_array1, array_shuffle(c_array1) from array_test; \n+-----------------------+---------------------------+\n| c_array1              | array_shuffle(`c_array1`) |\n+-----------------------+---------------------------+\n| [1, 2, 3, 4, 5, NULL] | [2, NULL, 5, 3, 4, 1]     |\n| [6, 7, 8, NULL]       | [7, NULL, 8, 6]           |\n| [1, NULL]             | [1, NULL]                 |\n| NULL                  | NULL                      |\n+-----------------------+---------------------------+\n4 rows in set (0.01 sec)\n\nMySQL [test]> select c_array1, array_shuffle(c_array1, 0) from array_test; \n+-----------------------+------------------------------+\n| c_array1              | array_shuffle(`c_array1`, 0) |\n+-----------------------+------------------------------+\n| [1, 2, 3, 4, 5, NULL] | [1, 3, 2, NULL, 4, 5]        |\n| [6, 7, 8, NULL]       | [6, 8, 7, NULL]              |\n| [1, NULL]             | [1, NULL]                    |\n| NULL                  | NULL                         |\n+-----------------------+------------------------------+\n4 rows in set (0.01 sec)\n\n")),(0,t.kt)("h3",{id:"keywords"},"keywords"),(0,t.kt)("p",null,"ARRAY,ARRAY_SHUFFLE,SHUFFLE"))}y.isMDXComponent=!0}}]);