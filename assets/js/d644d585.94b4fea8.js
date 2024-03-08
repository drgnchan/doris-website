"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68913],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,f=y["".concat(s,".").concat(d)]||y[d]||u[d]||i;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[y]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},688704:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const i={title:"ARRAY_POSITION",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array-position",id:"version-2.0/sql-manual/sql-functions/array-functions/array-position",title:"ARRAY_POSITION",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-position.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-position",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-position",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_POSITION",language:"en"},sidebar:"docs",previous:{title:"ARRAY_SORTBY",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-sortby"},next:{title:"ARRAY_CONTAINS",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-contains"}},s={},c=[{value:"array_position",id:"array_position",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},y="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_position"},"array_position"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"array_position")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT array_position(ARRAY<T> arr, T value)")),(0,a.yg)("p",null,"Returns a position/index of first occurrence of the ",(0,a.yg)("inlineCode",{parentName:"p"},"value")," in the given array."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"position - value position in array (starts with 1);\n0        - if value does not present in the array;\nNULL     - when array is NULL.\n")),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,array_position(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_position(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            5 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n\nmysql> select array_position([1, null], null);\n+--------------------------------------+\n| array_position(ARRAY(1, NULL), NULL) |\n+--------------------------------------+\n|                                    2 |\n+--------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,POSITION,ARRAY_POSITION"))}u.isMDXComponent=!0}}]);