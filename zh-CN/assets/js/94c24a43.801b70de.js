"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[36032],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(t),p=o,m=u["".concat(c,".").concat(p)]||u[p]||f[p]||s;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(45072),o=(t(11504),t(95788));const s={title:"seconds_diff",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/date-time-functions/seconds_diff",id:"version-1.2/sql-manual/sql-functions/date-time-functions/seconds_diff",title:"seconds_diff",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/seconds_diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/seconds_diff",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/seconds_diff",draft:!1,tags:[],version:"1.2",frontMatter:{title:"seconds_diff",language:"zh-CN"},sidebar:"docs",previous:{title:"seconds_add",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/seconds_add"},next:{title:"seconds_sub",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/seconds_sub"}},c={},l=[{value:"seconds_diff",id:"seconds_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:l},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"seconds_diff"},"seconds_diff"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT seconds_diff(DATETIME enddate, DATETIME startdate)")),(0,o.yg)("p",null,"\u5f00\u59cb\u65f6\u95f4\u5230\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u51e0\u79d2"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select seconds_diff('2020-12-25 22:00:00','2020-12-25 21:00:00');\n+------------------------------------------------------------+\n| seconds_diff('2020-12-25 22:00:00', '2020-12-25 21:00:00') |\n+------------------------------------------------------------+\n|                                                       3600 |\n+------------------------------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"seconds_diff\n")))}f.isMDXComponent=!0}}]);