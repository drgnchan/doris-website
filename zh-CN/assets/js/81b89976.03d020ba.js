"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20184],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>T});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,T=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(T,l(l({ref:t},u),{},{components:n})):r.createElement(T,l({ref:t},u))}));function T(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(45072),o=(n(11504),n(95788));const a={title:"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/spatial-functions/st-geometryfromtext",id:"version-2.0/sql-manual/sql-functions/spatial-functions/st-geometryfromtext",title:"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-geometryfromtext.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-geometryfromtext",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-geometryfromtext",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_CONTAINS",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-contains"},next:{title:"ST_LINEFROMTEXT,ST_LINESTRINGFROMTEXT",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-linefromtext"}},i={},c=[{value:"ST_GeometryFromText,ST_GeomFromText",id:"st_geometryfromtextst_geomfromtext",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"st_geometryfromtextst_geomfromtext"},"ST_GeometryFromText,ST_GeomFromText"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GEOMETRY ST_GeometryFromText(VARCHAR wkt)")),(0,o.yg)("p",null,"\u5c06\u4e00\u4e2aWKT\uff08Well Known Text\uff09\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u5185\u5b58\u7684\u51e0\u4f55\u5f62\u5f0f"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_GeometryFromText(\"LINESTRING (1 1, 2 2)\"));\n+---------------------------------------------------------+\n| st_astext(st_geometryfromtext('LINESTRING (1 1, 2 2)')) |\n+---------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                   |\n+---------------------------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT,ST,GEOMETRYFROMTEXT,GEOMFROMTEXT"))}m.isMDXComponent=!0}}]);