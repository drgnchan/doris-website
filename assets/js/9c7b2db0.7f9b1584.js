"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[38040],{95788:(t,n,e)=>{e.d(n,{Iu:()=>m,yg:()=>_});var r=e(11504);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var p=r.createContext({}),l=function(t){var n=r.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},m=function(t){var n=l(t.components);return r.createElement(p.Provider,{value:n},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=l(e),b=a,_=c["".concat(p,".").concat(b)]||c[b]||u[b]||i;return e?r.createElement(_,o(o({ref:n},m),{},{components:e})):r.createElement(_,o({ref:n},m))}));function _(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,o=new Array(i);o[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=t,s[c]="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=e[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}b.displayName="MDXCreateElement"},24236:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=e(45072),a=(e(11504),e(95788));const i={title:"BITMAP_AND_NOT,BITMAP_ANDNOT",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-and-not",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-not",title:"BITMAP_AND_NOT,BITMAP_ANDNOT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-not.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-and-not",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-and-not",draft:!1,tags:[],version:"2.0",frontMatter:{title:"BITMAP_AND_NOT,BITMAP_ANDNOT",language:"en"},sidebar:"docs",previous:{title:"BITMAP_NOT",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-not"},next:{title:"BITMAP_SUBSET_LIMIT",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit"}},p={},l=[{value:"bitmap_and_not,bitmap_andnot",id:"bitmap_and_notbitmap_andnot",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:l},c="wrapper";function u(t){let{components:n,...e}=t;return(0,a.yg)(c,(0,r.c)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_and_notbitmap_andnot"},"bitmap_and_not,bitmap_andnot"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND_NOT(BITMAP lhs, BITMAP rhs)")),(0,a.yg)("p",null,"Calculate the set after lhs minus intersection of two input bitmaps, return the new bitmap."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_and_not(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')));\n+--------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'))) |\n+--------------------------------------------------------------------------------------------+\n| 1,2                                                                                        |\n+--------------------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'),bitmap_empty())) ;\n+-------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'), bitmap_empty())) |\n+-------------------------------------------------------------------------------+\n| 1,2,3                                                                         |\n+-------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'),NULL));\n+---------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and_not(bitmap_from_string('1,2,3'), NULL)) |\n+---------------------------------------------------------------------+\n| NULL                                                                |\n+---------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_AND_NOT,BITMAP_ANDNOT,BITMAP\n")))}u.isMDXComponent=!0}}]);