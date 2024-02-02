"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26312],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>d});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,d=u["".concat(i,".").concat(f)]||u[f]||y[f]||o;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},97623:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(45072),a=(t(11504),t(95788));const o={title:"VARCHAR",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Types/VARCHAR",id:"version-1.2/sql-manual/sql-reference/Data-Types/VARCHAR",title:"VARCHAR",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Types/VARCHAR.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/VARCHAR",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/VARCHAR",draft:!1,tags:[],version:"1.2",frontMatter:{title:"VARCHAR",language:"en"},sidebar:"docs",previous:{title:"CHAR",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/CHAR"},next:{title:"STRING",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/STRING"}},i={},c=[{value:"VARCHAR",id:"varchar",level:2},{value:"Description",id:"description",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"varchar"},"VARCHAR"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"VARCHAR(M)\nA variable length string, M represents the byte length of a variable length string. The range of M is 1-65533."),(0,a.yg)("p",null,"Note: Variable length strings are stored in UTF-8 encoding, so usually English characters occupies 1 byte, and Chinese characters occupies 3 bytes."),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"VARCHAR"))}y.isMDXComponent=!0}}]);