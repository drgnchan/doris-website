"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88882],{95788:(t,n,e)=>{e.d(n,{Iu:()=>l,yg:()=>_});var r=e(11504);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var m=r.createContext({}),s=function(t){var n=r.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},l=function(t){var n=s(t.components);return r.createElement(m.Provider,{value:n},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,a=t.originalType,m=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),c=s(e),b=i,_=c["".concat(m,".").concat(b)]||c[b]||u[b]||a;return e?r.createElement(_,o(o({ref:n},l),{},{components:e})):r.createElement(_,o({ref:n},l))}));function _(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var a=e.length,o=new Array(a);o[0]=b;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p[c]="string"==typeof t?t:i,o[1]=p;for(var s=2;s<a;s++)o[s]=e[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}b.displayName="MDXCreateElement"},42440:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=e(45072),i=(e(11504),e(95788));const a={title:"BITMAP_XOR",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-xor",id:"sql-manual/sql-functions/bitmap-functions/bitmap-xor",title:"BITMAP_XOR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap-xor.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-xor",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-xor",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_XOR",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_UNION",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-union"},next:{title:"BITMAP_NOT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-not"}},m={},s=[{value:"bitmap_xor",id:"bitmap_xor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:s},c="wrapper";function u(t){let{components:n,...e}=t;return(0,i.yg)(c,(0,r.c)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_xor"},"bitmap_xor"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_XOR(BITMAP lhs, BITMAP rhs, ...)")),(0,i.yg)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u8f93\u5165bitmap\u7684\u5dee\u96c6\uff0c\u8fd4\u56de\u65b0\u7684bitmap."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4')));\n+----------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'))) |\n+----------------------------------------------------------------------------------------+\n| 1,4                                                                                    |\n+----------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5')));\n+---------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'))) |\n+---------------------------------------------------------------------------------------------------------------------+\n| 1,3,5                                                                                                               |\n+---------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),bitmap_empty()));\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty())) |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| 1,3,5                                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),NULL));\n+---------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL)) |\n+---------------------------------------------------------------------------------------------------------------------------+\n| NULL                                                                                                                      |\n+---------------------------------------------------------------------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_XOR,BITMAP\n")))}u.isMDXComponent=!0}}]);