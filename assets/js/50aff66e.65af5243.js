"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Apache Doris announced the official release of version 1.2.7",summary:"Dear community, Apache Doris 1.2.7 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-09-04",author:"Apache Doris",tags:["Release Notes"]},i=void 0,s={permalink:"/blog/release-note-1.2.7",source:"@site/blog/release-note-1.2.7.md",title:"Apache Doris announced the official release of version 1.2.7",description:"\x3c!--",date:"2023-09-04T00:00:00.000Z",formattedDate:"September 4, 2023",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.7",summary:"Dear community, Apache Doris 1.2.7 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-09-04",author:"Apache Doris",tags:["Release Notes"]},nextItem:{title:"Apache Doris announced the official release of version 2.0.1",permalink:"/blog/release-note-2.0.1"}},l={authorsImageUrls:[void 0]},c=[{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"New Features",id:"new-features",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed some query issues."),(0,a.kt)("li",{parentName:"ul"},"Fix some storage issues."),(0,a.kt)("li",{parentName:"ul"},"Fix some decimal precision issues."),(0,a.kt)("li",{parentName:"ul"},"Fix query error caused by invalid ",(0,a.kt)("inlineCode",{parentName:"li"},"sql_select_limit")," session variable's value."),(0,a.kt)("li",{parentName:"ul"},"Fix the problem that hdfs short-circuit read cannot be used."),(0,a.kt)("li",{parentName:"ul"},"Fix the problem that Tencent Cloud cosn cannot be accessed."),(0,a.kt)("li",{parentName:"ul"},"Fix several issues with hive catalog kerberos access."),(0,a.kt)("li",{parentName:"ul"},"Fix the problem that stream load profile cannot be used."),(0,a.kt)("li",{parentName:"ul"},"Fix promethus monitoring parameter format problem."),(0,a.kt)("li",{parentName:"ul"},"Fix the table creation timeout issue when creating a large number of tablets.")),(0,a.kt)("h2",{id:"new-features"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unique Key model supports array type as value column"),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"have_query_cache")," variable for compatibility with MySQL ecosystem."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"enable_strong_consistency_read")," to support strong consistent read between sessions"),(0,a.kt)("li",{parentName:"ul"},"FE metrics supports user-level query counter")))}m.isMDXComponent=!0}}]);