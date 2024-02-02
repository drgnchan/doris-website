"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59104],{95788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>f});var a=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),s=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=s(r),p=t,f=y["".concat(l,".").concat(p)]||y[p]||m[p]||i;return r?a.createElement(f,u(u({ref:n},c),{},{components:r})):a.createElement(f,u({ref:n},c))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,u=new Array(i);u[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[y]="string"==typeof e?e:t,u[1]=o;for(var s=2;s<i;s++)u[s]=r[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},89464:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(45072),t=(r(11504),r(95788));const i={title:"array_enumerate_uniq",language:"en"},u=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_enumerate_uniq",id:"version-1.2/sql-manual/sql-functions/array-functions/array_enumerate_uniq",title:"array_enumerate_uniq",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_enumerate_uniq.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_enumerate_uniq",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_enumerate_uniq",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_enumerate_uniq",language:"en"},sidebar:"docs",previous:{title:"array_enumerate",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_enumerate"},next:{title:"array_popback",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_popback"}},l={},s=[{value:"array_enumerate_uniq",id:"array_enumerate_uniq",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},y="wrapper";function m(e){let{components:n,...r}=e;return(0,t.yg)(y,(0,a.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_enumerate_uniq"},"array_enumerate_uniq"),(0,t.yg)("version",{since:"1.2.3"},(0,t.yg)("p",null,"array_enumerate_uniq")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_enumerate_uniq(ARRAY<T> arr)")),(0,t.yg)("p",null,"Returns an array the same size as the source array, indicating for each element what its position is among elements with the same value. For example, array_enumerate_uniq(","[1, 2, 1, 4]",") = ","[1, 1, 2, 1]",".\nThe array_enumerate_uniq function can take multiple arrays of the same size as arguments. In this case, uniqueness is considered for tuples of elements in the same positions in all the arrays. For example, array_enumerate_uniq(","[1, 2, 1, 1, 2]",", ","[2, 1, 2, 2, 1]",") = ","[1, 1, 2, 3, 2]","."),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mysql> select k2, array_enumerate_uniq([1, 2, 3, 1, 2, 3]);\n+-----------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 2, 3, 1, 2, 3))       |\n+-----------------------------------------------------+\n| [1, 1, 1, 2, 2, 2]                                  |\n+-----------------------------------------------------+\nmysql> select array_enumerate_uniq([1, 1, 1, 1, 1], [2, 1, 2, 1, 2], [3, 1, 3, 1, 3]);\n+----------------------------------------------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 1, 1, 1, 1), ARRAY(2, 1, 2, 1, 2), ARRAY(3, 1, 3, 1, 3)) |\n+----------------------------------------------------------------------------------------+\n| [1, 1, 2, 1, 3]                                                                        |\n+----------------------------------------------------------------------------------------+\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,ENUMERATE_UNIQ,ARRAY_ENUMERATE_UNIQ"))}m.isMDXComponent=!0}}]);