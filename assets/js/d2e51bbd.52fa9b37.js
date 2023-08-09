"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},T=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),T=a,d=p["".concat(i,".").concat(T)]||p[T]||f[T]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=T;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}T.displayName="MDXCreateElement"},33622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"ST_ASTEXT,ST_ASWKT",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/spatial-functions/st-astext",id:"sql-manual/sql-functions/spatial-functions/st-astext",title:"ST_ASTEXT,ST_ASWKT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/spatial-functions/st-astext.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-astext",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st-astext",draft:!1,tags:[],version:"current",frontMatter:{title:"ST_ASTEXT,ST_ASWKT",language:"en"},sidebar:"docs",previous:{title:"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st-polygon"},next:{title:"ST_CONTAINS",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st-contains"}},i={},c=[{value:"ST_AsText,ST_AsWKT",id:"st_astextst_aswkt",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"st_astextst_aswkt"},"ST_AsText,ST_AsWKT"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR ST_AsText (GEOMETRY geo)")),(0,a.kt)("p",null,"Converting a geometric figure into a WKT (Well Known Text) representation"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ST_ASTEXT,ST_ASWKT,ST,ASTEXT,ASWKT"))}f.isMDXComponent=!0}}]);