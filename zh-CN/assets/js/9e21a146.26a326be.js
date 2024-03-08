"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52318],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||y[f]||l;return n?t.createElement(d,o(o({ref:r},u),{},{components:n})):t.createElement(d,o({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},418262:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const l={title:"ARRAYS_OVERLAP",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/arrays-overlap",id:"sql-manual/sql-functions/array-functions/arrays-overlap",title:"ARRAYS_OVERLAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/arrays-overlap.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/arrays-overlap",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/arrays-overlap",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAYS_OVERLAP",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_LAST",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-last"},next:{title:"ARRAY_COUNT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-count"}},s={},c=[{value:"arrays_overlap",id:"arrays_overlap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"arrays_overlap"},"arrays_overlap"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"arrays_overlap")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BOOLEAN arrays_overlap(ARRAY<T> left, ARRAY<T> right)")),(0,a.yg)("p",null,"\u5224\u65adleft\u548cright\u6570\u7ec4\u4e2d\u662f\u5426\u5305\u542b\u516c\u5171\u5143\u7d20\u3002\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1    - left\u548cright\u6570\u7ec4\u5b58\u5728\u516c\u5171\u5143\u7d20\uff1b\n0    - left\u548cright\u6570\u7ec4\u4e0d\u5b58\u5728\u516c\u5171\u5143\u7d20\uff1b\nNULL - left\u6216\u8005right\u6570\u7ec4\u4e3aNULL\uff1b\u6216\u8005left\u548cright\u6570\u7ec4\u4e2d\uff0c\u4efb\u610f\u5143\u7d20\u4e3aNULL\uff1b\n")),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select c_left,c_right,arrays_overlap(c_left,c_right) from array_test;\n+--------------+-----------+-------------------------------------+\n| c_left       | c_right   | arrays_overlap(`c_left`, `c_right`) |\n+--------------+-----------+-------------------------------------+\n| [1, 2, 3]    | [3, 4, 5] |                                   1 |\n| [1, 2, 3]    | [5, 6]    |                                   0 |\n| [1, 2, NULL] | [1]       |                                NULL |\n| NULL         | [1, 2]    |                                NULL |\n| [1, 2, 3]    | [1, 2]    |                                   1 |\n+--------------+-----------+-------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,ARRAYS,OVERLAP,ARRAYS_OVERLAP"))}y.isMDXComponent=!0}}]);