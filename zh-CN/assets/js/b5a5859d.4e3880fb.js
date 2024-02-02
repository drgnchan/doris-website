"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[17736],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>f});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),A=a,f=m["".concat(l,".").concat(A)]||m[A]||u[A]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=A;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}A.displayName="MDXCreateElement"},50180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(45072),a=(n(11504),n(95788));const o={title:"BITMAP_FROM_BASE64",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-from-base64",id:"sql-manual/sql-functions/bitmap-functions/bitmap-from-base64",title:"BITMAP_FROM_BASE64",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap-from-base64.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-from-base64",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-from-base64",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_FROM_BASE64",language:"zh-CN"}},l={},p=[{value:"bitmap_from_base64",id:"bitmap_from_base64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_from_base64"},"bitmap_from_base64"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_FROM_BASE64(VARCHAR input)")),(0,a.yg)("p",null,"\u5c06\u4e00\u4e2abase64\u5b57\u7b26\u4e32(",(0,a.yg)("inlineCode",{parentName:"p"},"bitmap_to_base64"),"\u51fd\u6570\u7684\u7ed3\u679c)\u8f6c\u5316\u4e3a\u4e00\u4e2aBITMAP\u3002\u5f53\u8f93\u5165\u5b57\u7b26\u4e32\u4e0d\u5408\u6cd5\u65f6\uff0c\u8fd4\u56deNULL\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> select bitmap_to_string(bitmap_from_base64("AA=="));\n+----------------------------------------------+\n| bitmap_to_string(bitmap_from_base64("AA==")) |\n+----------------------------------------------+\n|                                              |\n+----------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_from_base64("AQEAAAA="));\n+-----------------------------------+\n| bitmap_to_string(bitmap_from_base64("AQEAAAA=")) |\n+-----------------------------------+\n| 1                                 |\n+-----------------------------------+\n\nmysql> select bitmap_to_string(bitmap_from_base64("AjowAAACAAAAAAAAAJgAAAAYAAAAGgAAAAEAf5Y="));\n+----------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_from_base64("AjowAAACAAAAAAAAAJgAAAAYAAAAGgAAAAEAf5Y=")) |\n+----------------------------------------------------------------------------------+\n| 1,9999999                                                                        |\n+----------------------------------------------------------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_FROM_BASE64,BITMAP\n")))}u.isMDXComponent=!0}}]);