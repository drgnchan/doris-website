"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=l,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={title:"ST_CIRCLE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/spatial-functions/st-circle",id:"sql-manual/sql-functions/spatial-functions/st-circle",title:"ST_CIRCLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/spatial-functions/st-circle.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-circle",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st-circle",draft:!1,tags:[],version:"current",frontMatter:{title:"ST_CIRCLE",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_Y",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st-y"},next:{title:"ST_DISTANCE_SPHERE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st-distance-sphere"}},c={},s=[{value:"ST_Circle",id:"st_circle",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"st_circle"},"ST_Circle"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GEOMETRY ST_Circle(DOUBLE center_lng, DOUBLE center_lat, DOUBLE radius)")),(0,l.kt)("p",null,"\u5c06\u4e00\u4e2aWKT\uff08Well Known Text\uff09\u8f6c\u5316\u4e3a\u5730\u7403\u7403\u9762\u4e0a\u7684\u4e00\u4e2a\u5706\u3002\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"center_lng"),"\u8868\u793a\u7684\u5706\u5fc3\u7684\u7ecf\u5ea6\uff0c\n",(0,l.kt)("inlineCode",{parentName:"p"},"center_lat"),"\u8868\u793a\u7684\u662f\u5706\u5fc3\u7684\u7eac\u5ea6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"radius"),"\u8868\u793a\u7684\u662f\u5706\u7684\u534a\u5f84\uff0c\u5355\u4f4d\u662f\u7c73,\u6700\u5927\u652f\u63019999999"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Circle(111, 64, 10000));\n+--------------------------------------------+\n| st_astext(st_circle(111.0, 64.0, 10000.0)) |\n+--------------------------------------------+\n| CIRCLE ((111 64), 10000)                   |\n+--------------------------------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"ST_CIRCLE,ST,CIRCLE"))}d.isMDXComponent=!0}}]);