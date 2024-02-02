"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4504],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>g});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,g=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(45072),i=(n(11504),n(95788));const a={title:"BITMAP_FROM_STRING",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-from-string",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-from-string",title:"BITMAP_FROM_STRING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-from-string.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-from-string",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-from-string",draft:!1,tags:[],version:"2.0",frontMatter:{title:"BITMAP_FROM_STRING",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_HASH",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-hash"},next:{title:"BITMAP_TO_STRING",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-to-string"}},l={},p=[{value:"bitmap_from_string",id:"bitmap_from_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_from_string"},"bitmap_from_string"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_FROM_STRING(VARCHAR input)")),(0,i.yg)("p",null,'\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u4e00\u4e2aBITMAP\uff0c\u5b57\u7b26\u4e32\u662f\u7531\u9017\u53f7\u5206\u9694\u7684\u4e00\u7ec4unsigned bigint\u6570\u5b57\u7ec4\u6210.(\u6570\u5b57\u53d6\u503c\u5728:0 ~ 18446744073709551615)\n\u6bd4\u5982"0, 1, 2"\u5b57\u7b26\u4e32\u4f1a\u8f6c\u5316\u4e3a\u4e00\u4e2aBitmap\uff0c\u5176\u4e2d\u7684\u7b2c0, 1, 2\u4f4d\u88ab\u8bbe\u7f6e.\n\u5f53\u8f93\u5165\u5b57\u6bb5\u4e0d\u5408\u6cd5\u65f6\uff0c\u8fd4\u56deNULL'),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select bitmap_to_string(bitmap_from_string(\"0, 1, 2\"));\n+-------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 2')) |\n+-------------------------------------------------+\n| 0,1,2                                           |\n+-------------------------------------------------+\n\nmysql> select bitmap_from_string(\"-1, 0, 1, 2\");\n+-----------------------------------+\n| bitmap_from_string('-1, 0, 1, 2') |\n+-----------------------------------+\n| NULL                              |\n+-----------------------------------+\n\nmysql> select bitmap_to_string(bitmap_from_string(\"0, 1, 18446744073709551615\"));\n+--------------------------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 18446744073709551615')) |\n+--------------------------------------------------------------------+\n| 0,1,18446744073709551615                                           |\n+--------------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_FROM_STRING,BITMAP\n")))}u.isMDXComponent=!0}}]);