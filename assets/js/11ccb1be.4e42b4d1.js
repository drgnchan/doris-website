"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5708],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(45072),i=(t(11504),t(95788));const o={title:"NOW",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/date-time-functions/now",id:"version-2.0/sql-manual/sql-functions/date-time-functions/now",title:"NOW",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/now.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/now",permalink:"/docs/sql-manual/sql-functions/date-time-functions/now",draft:!1,tags:[],version:"2.0",frontMatter:{title:"NOW",language:"en"},sidebar:"docs",previous:{title:"LOCALTIME,LOCALTIMESTAMP",permalink:"/docs/sql-manual/sql-functions/date-time-functions/localtime"},next:{title:"YEAR",permalink:"/docs/sql-manual/sql-functions/date-time-functions/year"}},s={},c=[{value:"now",id:"now",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"now"},"now"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME NOW ()")),(0,i.yg)("p",null,"Get the current time and return it in Datetime type."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select now();\n+---------------------+\n| now()               |\n+---------------------+\n| 2019-05-27 15:58:25 |\n+---------------------+\n")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIMEV2 NOW(INT precision)")),(0,i.yg)("p",null,"Get the current time and return it in DatetimeV2 type.\nPrecision represents the second precision that the user wants. The current precision supports up to microseconds, that is, the value range of precision is ","[0, 6]","."),(0,i.yg)("h3",{id:"example-1"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select now(3);\n+-------------------------+\n| now(3)                  |\n+-------------------------+\n| 2022-09-06 16:13:30.078 |\n+-------------------------+\n")),(0,i.yg)("p",null,"Note:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Currently, only DatetimeV2 type supports precision."),(0,i.yg)("li",{parentName:"ol"},"Limited by the JDK implementation, if you use jdk8 to build FE, the precision can be up to milliseconds (three decimal places), and the larger precision bits will be filled with 0. If you need higher accuracy, please use jdk11 to build FE.")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"NOW\n")))}d.isMDXComponent=!0}}]);