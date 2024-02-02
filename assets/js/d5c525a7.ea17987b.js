"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63636],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>b});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(45072),i=(n(11504),n(95788));const a={title:"BITMAP_NOT",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-not",id:"sql-manual/sql-functions/bitmap-functions/bitmap-not",title:"BITMAP_NOT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap-not.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-not",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-not",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_NOT",language:"en"},sidebar:"docs",previous:{title:"BITMAP_XOR",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-xor"},next:{title:"BITMAP_AND_NOT,BITMAP_ANDNOT",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-and-not"}},s={},p=[{value:"bitmap_not",id:"bitmap_not",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_not"},"bitmap_not"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_NOT(BITMAP lhs, BITMAP rhs)")),(0,i.yg)("p",null,"Calculate the set after lhs minus rhs, return the new bitmap."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select bitmap_to_string(bitmap_not(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4')));\n+----------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_not(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'))) |\n+----------------------------------------------------------------------------------------+\n|                                                                                        |\n+----------------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_not(bitmap_from_string('2,3,5'),bitmap_from_string('1,2,3,4')));\n+------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_not(bitmap_from_string('2,3,5'), bitmap_from_string('1,2,3,4'))) |\n+------------------------------------------------------------------------------------------+\n| 5                                                                                        |\n+------------------------------------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_NOT,BITMAP\n")))}u.isMDXComponent=!0}}]);