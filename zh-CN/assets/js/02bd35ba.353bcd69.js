"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52192],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),y=a,f=p["".concat(l,".").concat(y)]||p[y]||d[y]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},61528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(45072),a=(t(11504),t(95788));const i={title:"inner_product",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-functions/distance-functions/inner-product",id:"sql-manual/sql-functions/distance-functions/inner-product",title:"inner_product",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/distance-functions/inner-product.md",sourceDirName:"sql-manual/sql-functions/distance-functions",slug:"/sql-manual/sql-functions/distance-functions/inner-product",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/distance-functions/inner-product",draft:!1,tags:[],version:"current",frontMatter:{title:"inner_product",language:"zh-CN"},sidebar:"docs",previous:{title:"cosine_distance",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/distance-functions/cosine-distance"},next:{title:"l1_distance",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/distance-functions/l1-distance"}},l={},s=[{value:"inner_product",id:"inner_product",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"inner_product"},"inner_product"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DOUBLE inner_product(ARRAY<T> array1, ARRAY<T> array2)\n")),(0,a.yg)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u5927\u5c0f\u76f8\u540c\u7684\u5411\u91cf\u7684\u6807\u91cf\u79ef\n\u5982\u679c\u8f93\u5165array\u4e3aNULL\uff0c\u6216\u8005array\u4e2d\u4efb\u4f55\u5143\u7d20\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL"),(0,a.yg)("h4",{id:"notice"},"Notice"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8f93\u5165\u6570\u7ec4\u7684\u5b50\u7c7b\u578b\u652f\u6301\uff1aTINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE"),(0,a.yg)("li",{parentName:"ul"},"\u8f93\u5165\u6570\u7ec4array1\u548carray2\uff0c\u5143\u7d20\u6570\u91cf\u9700\u4fdd\u6301\u4e00\u81f4")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sql> SELECT inner_product([1, 2], [2, 3]);\n+-----------------------------------------+\n| inner_product(ARRAY(1, 2), ARRAY(2, 3)) |\n+-----------------------------------------+\n|                                       8 |\n+-----------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"INNER_PRODUCT,DISTANCE,ARRAY\n")))}d.isMDXComponent=!0}}]);