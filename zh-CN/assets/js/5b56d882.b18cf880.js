"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[38128],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(45072),a=(n(11504),n(95788));const o={title:"CURDATE,CURRENT_DATE",language:"zh-CN"},i=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/curdate",id:"sql-manual/sql-functions/date-time-functions/curdate",title:"CURDATE,CURRENT_DATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/curdate.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/curdate",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/curdate",draft:!1,tags:[],version:"current",frontMatter:{title:"CURDATE,CURRENT_DATE",language:"zh-CN"},sidebar:"docs",previous:{title:"CONVERT_TZ",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/convert-tz"},next:{title:"CURTIME,CURRENT_TIME",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/curtime"}},l={},u=[{value:"curdate,current_date",id:"curdatecurrent_date",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"curdatecurrent_date"},"curdate,current_date"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATE CURDATE()")),(0,a.yg)("p",null,"\u83b7\u53d6\u5f53\u524d\u7684\u65e5\u671f\uff0c\u4ee5DATE\u7c7b\u578b\u8fd4\u56de"),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT CURDATE();\n+------------+\n| CURDATE()  |\n+------------+\n| 2019-12-20 |\n+------------+\n\nmysql> SELECT CURDATE() + 0;\n+---------------+\n| CURDATE() + 0 |\n+---------------+\n|      20191220 |\n+---------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CURDATE,CURRENT_DATE\n")))}p.isMDXComponent=!0}}]);