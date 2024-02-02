"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[44512],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>d});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(c,".").concat(f)]||p[f]||g[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(45072),o=(n(11504),n(95788));const a={title:"COUNT",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/count",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/count",title:"COUNT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/aggregate-functions/count.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/count",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/count",draft:!1,tags:[],version:"2.0",frontMatter:{title:"COUNT",language:"en"},sidebar:"docs",previous:{title:"TOPN_WEIGHTED",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/topn-weighted"},next:{title:"SUM",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/sum"}},c={},s=[{value:"COUNT",id:"count",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"count"},"COUNT"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"COUNT([DISTINCT] expr)")),(0,o.yg)("p",null,"Number of rows used to return the required rows"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > select count(*) from log_statis group by datetime;\n+----------+\n| count(*) |\n+----------+\n| 28515903 |\n+----------+\n\nMySQL > select count(datetime) from log_statis group by datetime;\n+-------------------+\n| count(`datetime`) |\n+-------------------+\n|         28521682  |\n+-------------------+\n\nMySQL > select count(distinct datetime) from log_statis group by datetime;\n+-------------------------------+\n| count(DISTINCT `datetime`)    |\n+-------------------------------+\n|                       71045   |\n+-------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"COUNT"))}g.isMDXComponent=!0}}]);