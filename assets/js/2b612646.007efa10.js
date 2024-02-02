"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54480],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>d});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,d=p["".concat(i,".").concat(y)]||p[y]||m[y]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const l={title:"Release 1.2.7",language:"en"},o=void 0,s={unversionedId:"releasenotes/release-1.2.7",id:"releasenotes/release-1.2.7",title:"Release 1.2.7",description:"\x3c!--",source:"@site/docs/releasenotes/release-1.2.7.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.2.7",permalink:"/docs/dev/releasenotes/release-1.2.7",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 1.2.7",language:"en"},sidebar:"docs",previous:{title:"Release 2.0.0",permalink:"/docs/dev/releasenotes/release-2.0.0"},next:{title:"Release 1.2.6",permalink:"/docs/dev/releasenotes/release-1.2.6"}},i={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed some query issues."),(0,a.yg)("li",{parentName:"ul"},"Fix some storage issues."),(0,a.yg)("li",{parentName:"ul"},"Fix some decimal precision issues."),(0,a.yg)("li",{parentName:"ul"},"Fix query error caused by invalid ",(0,a.yg)("inlineCode",{parentName:"li"},"sql_select_limit")," session variable's value."),(0,a.yg)("li",{parentName:"ul"},"Fix the problem that hdfs short-circuit read cannot be used."),(0,a.yg)("li",{parentName:"ul"},"Fix the problem that Tencent Cloud cosn cannot be accessed."),(0,a.yg)("li",{parentName:"ul"},"Fix several issues with hive catalog kerberos access."),(0,a.yg)("li",{parentName:"ul"},"Fix the problem that stream load profile cannot be used."),(0,a.yg)("li",{parentName:"ul"},"Fix promethus monitoring parameter format problem."),(0,a.yg)("li",{parentName:"ul"},"Fix the table creation timeout issue when creating a large number of tablets.")),(0,a.yg)("h1",{id:"new-features"},"New Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Unique Key model supports array type as value column"),(0,a.yg)("li",{parentName:"ul"},"Added ",(0,a.yg)("inlineCode",{parentName:"li"},"have_query_cache")," variable for compatibility with MySQL ecosystem."),(0,a.yg)("li",{parentName:"ul"},"Added ",(0,a.yg)("inlineCode",{parentName:"li"},"enable_strong_consistency_read")," to support strong consistent read between sessions"),(0,a.yg)("li",{parentName:"ul"},"FE metrics supports user-level query counter")))}m.isMDXComponent=!0}}]);