"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42804],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(45072),a=(n(11504),n(95788));const i={title:"DATE_ADD",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/date-add",id:"sql-manual/sql-functions/date-time-functions/date-add",title:"DATE_ADD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/date-add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date-add",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/date-add",draft:!1,tags:[],version:"current",frontMatter:{title:"DATE_ADD",language:"en"},sidebar:"docs",previous:{title:"TIMESTAMPDIFF",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/timestampdiff"},next:{title:"DATE_SUB",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/date-sub"}},d={},s=[{value:"date_add",id:"date_add",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date_add"},"date_add"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_ADD(DATETIME date, INTERVAL expr type)")),(0,a.yg)("p",null,"Adds a specified time interval to the date."),(0,a.yg)("p",null,"The date parameter is a valid date expression."),(0,a.yg)("p",null,"The expr parameter is the interval you want to add."),(0,a.yg)("p",null,"The type parameter can be the following values: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select date_add('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| date_add('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-12-02 23:59:59                             |\n+-------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATE_ADD,DATE,ADD\n")))}p.isMDXComponent=!0}}]);