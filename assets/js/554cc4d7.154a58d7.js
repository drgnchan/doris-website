"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78456],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>f});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,f=u["".concat(s,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const o={title:"YEARS_ADD",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/years-add",id:"sql-manual/sql-functions/date-time-functions/years-add",title:"YEARS_ADD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/years-add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/years-add",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/years-add",draft:!1,tags:[],version:"current",frontMatter:{title:"YEARS_ADD",language:"en"},sidebar:"docs",previous:{title:"MONTHS_SUB",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/months-sub"},next:{title:"YEARS_DIFF",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/years-diff"}},s={},c=[{value:"years_add",id:"years_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"years_add"},"years_add"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME YEARS_ADD(DATETIME date, INT years)")),(0,a.yg)("p",null,"ADD a specified number of years from a datetime or date"),(0,a.yg)("p",null,"The parameter date can be DATETIME or DATE, and the return type is consistent with that of the parameter date."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select years_add(\"2020-01-31 02:02:02\", 1);\n+-------------------------------------+\n| years_add('2020-01-31 02:02:02', 1) |\n+-------------------------------------+\n| 2021-01-31 02:02:02                 |\n+-------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"YEARS_ADD\n")))}p.isMDXComponent=!0}}]);