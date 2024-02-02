"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15360],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>f});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(45072),i=(n(11504),n(95788));const a={title:"MINUTES_SUB",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/minutes-sub",id:"version-2.0/sql-manual/sql-functions/date-time-functions/minutes-sub",title:"MINUTES_SUB",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/minutes-sub.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/minutes-sub",permalink:"/docs/sql-manual/sql-functions/date-time-functions/minutes-sub",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MINUTES_SUB",language:"en"},sidebar:"docs",previous:{title:"MINUTES_DIFF",permalink:"/docs/sql-manual/sql-functions/date-time-functions/minutes-diff"},next:{title:"SECONDS_ADD",permalink:"/docs/sql-manual/sql-functions/date-time-functions/seconds-add"}},l={},u=[{value:"minutes_sub",id:"minutes_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"minutes_sub"},"minutes_sub"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME MINUTES_SUB(DATETIME date, INT minutes)")),(0,i.yg)("p",null,"Subtracts a specified number of minutes from a datetime or date"),(0,i.yg)("p",null,"The parameter date can be DATETIME or DATE, and the return type is DATETIME."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select minutes_sub(\"2020-02-02 02:02:02\", 1);\n+---------------------------------------+\n| minutes_sub('2020-02-02 02:02:02', 1) |\n+---------------------------------------+\n| 2020-02-02 02:01:02                   |\n+---------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MINUTES_SUB\n")))}m.isMDXComponent=!0}}]);