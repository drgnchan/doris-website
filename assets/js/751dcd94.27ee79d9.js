"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[60820],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>f});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(45072),a=(n(11504),n(95788));const o={title:"extract",language:"en"},i=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/extract",id:"version-1.2/sql-manual/sql-functions/date-time-functions/extract",title:"extract",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/extract.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/extract",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/extract",draft:!1,tags:[],version:"1.2",frontMatter:{title:"extract",language:"en"},sidebar:"docs",previous:{title:"time_to_sec",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/time_to_sec"},next:{title:"makedate",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/makedate"}},l={},s=[{value:"extract",id:"extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"extract"},"extract"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT extract(unit FROM DATETIME)")),(0,a.yg)("p",null,"Extract DATETIME The value of a specified unit. The unit can be year, day, hour, minute, or second"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select extract(year from '2022-09-22 17:01:30') as year,\n    -> extract(month from '2022-09-22 17:01:30') as month,\n    -> extract(day from '2022-09-22 17:01:30') as day,\n    -> extract(hour from '2022-09-22 17:01:30') as hour,\n    -> extract(minute from '2022-09-22 17:01:30') as minute,\n    -> extract(second from '2022-09-22 17:01:30') as second;\n+------+-------+------+------+--------+--------+\n| year | month | day  | hour | minute | second |\n+------+-------+------+------+--------+--------+\n| 2022 |     9 |   22 |   17 |      1 |     30 |\n+------+-------+------+------+--------+--------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"extract\n")))}d.isMDXComponent=!0}}]);