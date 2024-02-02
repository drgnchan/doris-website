"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27112],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||y[p]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const l={title:"LAST_DAY",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/last-day",id:"sql-manual/sql-functions/date-time-functions/last-day",title:"LAST_DAY",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/last-day.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/last-day",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/last-day",draft:!1,tags:[],version:"current",frontMatter:{title:"LAST_DAY",language:"en"},sidebar:"docs",previous:{title:"FROM_DAYS",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/from-days"},next:{title:"TO_MONDAY",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/to-monday"}},s={},c=[{value:"last_day",id:"last_day",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"last_day"},"last_day"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATE last_day(DATETIME date)")),(0,a.yg)("p",null,"Return the last day of the month, the return day may be :\n'28'(February and not a leap year),\n'29'(February and a leap year),\n'30'(April, June, September, November),\n'31'(January, March, May, July, August, October, December)"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql > select last_day('2000-02-03');\n+-------------------+\n| last_day('2000-02-03 00:00:00') |\n+-------------------+\n| 2000-02-29        |\n+-------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"LAST_DAY,DAYS\n")))}y.isMDXComponent=!0}}]);