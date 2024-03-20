"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96246],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var a=t(296540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),u=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(o.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),g=n,y=c["".concat(o,".").concat(g)]||c[g]||d[g]||l;return t?a.createElement(y,s(s({ref:r},p),{},{components:t})):a.createElement(y,s({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=g;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<l;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},345968:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(58168),n=(t(296540),t(15680));const l={title:"Release 1.2.8",language:"en"},s=void 0,i={unversionedId:"releasenotes/release-1.2.8",id:"releasenotes/release-1.2.8",title:"Release 1.2.8",description:"\x3c!--",source:"@site/docs/releasenotes/release-1.2.8.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.2.8",permalink:"/docs/dev/releasenotes/release-1.2.8",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 1.2.8",language:"en"},sidebar:"docs",previous:{title:"Release 2.0-Alpha",permalink:"/docs/dev/releasenotes/release-2.0-Alpha"},next:{title:"Release 1.2.7",permalink:"/docs/dev/releasenotes/release-1.2.7"}},o={},u=[{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:u},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Quick Download\uff1a")," ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with query execution."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with Spark Load."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with Parquet Reader."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with Orc Reader."),(0,n.yg)("li",{parentName:"ul"},'Fixed Broker "FileSystem closed" problem.'),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with Broker Load."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with CTAS execution."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with backup and restore."),(0,n.yg)("li",{parentName:"ul"},'Added "Catalog" column in audit log.'),(0,n.yg)("li",{parentName:"ul"},"Optimized the metadata cache of Iceberg Catalog."),(0,n.yg)("li",{parentName:"ul"},"Fixed several issues with outfile/export feature."),(0,n.yg)("li",{parentName:"ul"},'Fixed an issue with "replayEraseTable" edit log causing FE start to fail.'),(0,n.yg)("li",{parentName:"ul"},"Fixed some security issues.")))}d.isMDXComponent=!0}}]);