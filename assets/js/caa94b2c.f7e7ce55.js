"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77449],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var o=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||y[f]||l;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<l;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},550833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=n(58168),r=(n(296540),n(15680));const l={title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/spatial-functions/st_polygon",id:"version-1.2/sql-manual/sql-functions/spatial-functions/st_polygon",title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_polygon.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_polygon",permalink:"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_polygon",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",language:"en"},sidebar:"docs",previous:{title:"St_Point",permalink:"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_point"},next:{title:"ST_AsText,ST_AsWKT",permalink:"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_astext"}},i={},p=[{value:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",id:"st_polygonst_polyfromtextst_polygonfromtext",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:4},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"st_polygonst_polyfromtextst_polygonfromtext"},"ST_Polygon,ST_PolyFromText,ST_PolygonFromText"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GEOMETRY ST_Polygon (VARCHAR wkt)")),(0,r.yg)("p",null,"Converting a WKT (Well Known Text) into a corresponding polygon memory form"),(0,r.yg)("h4",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"));\n+------------------------------------------------------------------+\n| st_astext(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))')) |\n+------------------------------------------------------------------+\n| POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))                          |\n+------------------------------------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT,ST,POLYGON,POLYFROMTEXT,POLYGONFROMTEXT"))}y.isMDXComponent=!0}}]);