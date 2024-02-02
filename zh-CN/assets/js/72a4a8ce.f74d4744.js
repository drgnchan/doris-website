"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[39892],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=l,y=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[p]="string"==typeof e?e:l,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(45072),l=(t(11504),t(95788));const a={title:"ST_CIRCLE",language:"zh-CN"},i=void 0,c={unversionedId:"sql-manual/sql-functions/spatial-functions/st-circle",id:"sql-manual/sql-functions/spatial-functions/st-circle",title:"ST_CIRCLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/spatial-functions/st-circle.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-circle",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st-circle",draft:!1,tags:[],version:"current",frontMatter:{title:"ST_CIRCLE",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_Y",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st-y"},next:{title:"ST_DISTANCE_SPHERE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st-distance-sphere"}},o={},s=[{value:"ST_Circle",id:"st_circle",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"st_circle"},"ST_Circle"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"GEOMETRY ST_Circle(DOUBLE center_lng, DOUBLE center_lat, DOUBLE radius)")),(0,l.yg)("p",null,"\u5c06\u4e00\u4e2aWKT\uff08Well Known Text\uff09\u8f6c\u5316\u4e3a\u5730\u7403\u7403\u9762\u4e0a\u7684\u4e00\u4e2a\u5706\u3002\u5176\u4e2d",(0,l.yg)("inlineCode",{parentName:"p"},"center_lng"),"\u8868\u793a\u7684\u5706\u5fc3\u7684\u7ecf\u5ea6\uff0c\n",(0,l.yg)("inlineCode",{parentName:"p"},"center_lat"),"\u8868\u793a\u7684\u662f\u5706\u5fc3\u7684\u7eac\u5ea6\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"radius"),"\u8868\u793a\u7684\u662f\u5706\u7684\u534a\u5f84\uff0c\u5355\u4f4d\u662f\u7c73,\u6700\u5927\u652f\u63019999999"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Circle(111, 64, 10000));\n+--------------------------------------------+\n| st_astext(st_circle(111.0, 64.0, 10000.0)) |\n+--------------------------------------------+\n| CIRCLE ((111 64), 10000)                   |\n+--------------------------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"ST_CIRCLE,ST,CIRCLE"))}d.isMDXComponent=!0}}]);