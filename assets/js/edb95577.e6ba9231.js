"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75344],{95788:(e,t,n)=>{n.d(t,{Iu:()=>f,yg:()=>p});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,p=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(p,a(a({ref:t},f),{},{components:n})):r.createElement(p,a({ref:t},f))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(45072),o=(n(11504),n(95788));const i={title:"MONTHS_DIFF",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/months-diff",id:"version-2.0/sql-manual/sql-functions/date-time-functions/months-diff",title:"MONTHS_DIFF",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/months-diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/months-diff",permalink:"/docs/sql-manual/sql-functions/date-time-functions/months-diff",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MONTHS_DIFF",language:"en"},sidebar:"docs",previous:{title:"MONTHS_ADD",permalink:"/docs/sql-manual/sql-functions/date-time-functions/months-add"},next:{title:"MONTHS_SUB",permalink:"/docs/sql-manual/sql-functions/date-time-functions/months-sub"}},l={},c=[{value:"months_diff",id:"months_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],f={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.c)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"months_diff"},"months_diff"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT months_diff(DATETIME enddate, DATETIME startdate)")),(0,o.yg)("p",null,"The difference between the start time and the end time is months"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select months_diff('2020-12-25','2020-10-25');\n+-----------------------------------------------------------+\n| months_diff('2020-12-25 00:00:00', '2020-10-25 00:00:00') |\n+-----------------------------------------------------------+\n|                                                         2 |\n+-----------------------------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"months_diff\n")))}d.isMDXComponent=!0}}]);