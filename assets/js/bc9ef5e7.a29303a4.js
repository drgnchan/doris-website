"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61704],{95788:(e,r,n)=>{n.d(r,{Iu:()=>u,yg:()=>f});var t=n(11504);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||y[d]||i;return n?t.createElement(f,o(o({ref:r},u),{},{components:n})):t.createElement(f,o({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3772:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(45072),a=(n(11504),n(95788));const i={title:"ARRAY_ZIP",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array-zip",id:"sql-manual/sql-functions/array-functions/array-zip",title:"ARRAY_ZIP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array-zip.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-zip",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-zip",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_ZIP",language:"en"},sidebar:"docs",previous:{title:"ARRAY_CONCAT",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-concat"},next:{title:"ARRAY_SHUFFLE",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-shuffle"}},s={},c=[{value:"array_zip",id:"array_zip",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.c)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_zip"},"array_zip"),(0,a.yg)("version",{since:"2.0"},(0,a.yg)("p",null,"array_zip")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Combines all all arrays into a single array. The resulting array contains the corresponding elements of the source arrays grouped into structs in the listed order of arguments."),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Array<Struct<T1, T2,...>> array_zip(Array<T1>, Array<T2>, ...)")),(0,a.yg)("h4",{id:"returned-value"},"Returned value"),(0,a.yg)("p",null,"Array with elements from the source arrays grouped into tuples. Data types in the tuple are the same as types of the input arrays and in the same order as arrays are passed."),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_zip(['a', 'b', 'c'], [1, 2, 3]);\n+-------------------------------------------------+\n| array_zip(ARRAY('a', 'b', 'c'), ARRAY(1, 2, 3)) |\n+-------------------------------------------------+\n| [{'a', 1}, {'b', 2}, {'c', 3}]                  |\n+-------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,ZIP,ARRAY_ZIP"))}y.isMDXComponent=!0}}]);