"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41684],{95788:(t,n,e)=>{e.d(n,{Iu:()=>s,yg:()=>_});var r=e(11504);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var c=r.createContext({}),m=function(t){var n=r.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},s=function(t){var n=m(t.components);return r.createElement(c.Provider,{value:n},t.children)},l="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),l=m(e),b=i,_=l["".concat(c,".").concat(b)]||l[b]||u[b]||o;return e?r.createElement(_,a(a({ref:n},s),{},{components:e})):r.createElement(_,a({ref:n},s))}));function _(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,a=new Array(o);a[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=t,p[l]="string"==typeof t?t:i,a[1]=p;for(var m=2;m<o;m++)a[m]=e[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}b.displayName="MDXCreateElement"},23588:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=e(45072),i=(e(11504),e(95788));const o={title:"BITMAP_OR_COUNT",language:"zh-CN"},a=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-or-count",id:"sql-manual/sql-functions/bitmap-functions/bitmap-or-count",title:"BITMAP_OR_COUNT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap-or-count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-or-count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-or-count",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_OR_COUNT",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_XOR_COUNT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-xor-count"},next:{title:"BITMAP_CONTAINS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-contains"}},c={},m=[{value:"bitmap_or_count",id:"bitmap_or_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:m},l="wrapper";function u(t){let{components:n,...e}=t;return(0,i.yg)(l,(0,r.c)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_or_count"},"bitmap_or_count"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BigIntVal bitmap_or_count(BITMAP lhs, BITMAP rhs, ...)")),(0,i.yg)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u8f93\u5165bitmap\u7684\u5e76\u96c6\uff0c\u8fd4\u56de\u5e76\u96c6\u7684\u4e2a\u6570."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_empty());\n+--------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_empty()) |\n+--------------------------------------------------------------+\n|                                                            3 |\n+--------------------------------------------------------------+\n\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+---------------------------------------------------------------------------+\n|                                                                         3 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+---------------------------------------------------------------------------+\n|                                                                         5 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty());\n+-----------------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty()) |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         6 |\n+-----------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL);\n+-------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL) |\n+-------------------------------------------------------------------------------------------------+\n|                                                                                            NULL |\n+-------------------------------------------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_OR_COUNT,BITMAP\n")))}u.isMDXComponent=!0}}]);