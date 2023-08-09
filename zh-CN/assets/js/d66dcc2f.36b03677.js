"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[60786],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,f=d["".concat(l,".").concat(y)]||d[y]||p[y]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},49416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={title:"ARRAY_DISTINCT",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-functions/array-functions/array-distinct",id:"sql-manual/sql-functions/array-functions/array-distinct",title:"ARRAY_DISTINCT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-distinct.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-distinct",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-distinct",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_DISTINCT",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_RANGE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-range"},next:{title:"ARRAY_DIFFERENCE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-difference"}},l={},s=[{value:"array_distinct",id:"array_distinct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_distinct"},"array_distinct"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_distinct")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_distinct(ARRAY<T> arr)")),(0,a.kt)("p",null,"\u8fd4\u56de\u53bb\u9664\u4e86\u91cd\u590d\u5143\u7d20\u7684\u6570\u7ec4\uff0c\u5982\u679c\u8f93\u5165\u6570\u7ec4\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\u3002"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select k1, k2, array_distinct(k2) from array_test;\n+------+-----------------------------+---------------------------+\n| k1   | k2                          | array_distinct(k2)        |\n+------+-----------------------------+---------------------------+\n| 1    | [1, 2, 3, 4, 5]             | [1, 2, 3, 4, 5]           |\n| 2    | [6, 7, 8]                   | [6, 7, 8]                 |\n| 3    | []                          | []                        |\n| 4    | NULL                        | NULL                      |\n| 5    | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [1, 2, 3, 4, 5]           |\n| 6    | [1, 2, 3, NULL]             | [1, 2, 3, NULL]           |\n| 7    | [1, 2, 3, NULL, NULL]       | [1, 2, 3, NULL]     |\n+------+-----------------------------+---------------------------+\n\nmysql> select k1, k2, array_distinct(k2) from array_test01;\n+------+------------------------------------------+---------------------------+\n| k1   | k2                                       | array_distinct(`k2`)      |\n+------+------------------------------------------+---------------------------+\n| 1    | ['a', 'b', 'c', 'd', 'e']                | ['a', 'b', 'c', 'd', 'e'] |\n| 2    | ['f', 'g', 'h']                          | ['f', 'g', 'h']           |\n| 3    | ['']                                     | ['']                      |\n| 3    | [NULL]                                   | [NULL]                    |\n| 5    | ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'] | ['a', 'b', 'c', 'd', 'e'] |\n| 6    | NULL                                     | NULL                      |\n| 7    | ['a', 'b', NULL]                         | ['a', 'b', NULL]          |\n| 8    | ['a', 'b', NULL, NULL]                   | ['a', 'b', NULL]    |\n+------+------------------------------------------+---------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY, DISTINCT, ARRAY_DISTINCT"))}p.isMDXComponent=!0}}]);