"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5721],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||c;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=t(45072),o=(t(11504),t(95788));const c={title:"MICROSECOND",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/date-time-functions/microsecond",id:"sql-manual/sql-functions/date-time-functions/microsecond",title:"MICROSECOND",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/microsecond.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/microsecond",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/microsecond",draft:!1,tags:[],version:"current",frontMatter:{title:"MICROSECOND",language:"zh-CN"}},l={},s=[{value:"microsecond",id:"microsecond",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"microsecond"},"microsecond"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT MICROSECOND(DATETIMEV2 date)")),(0,o.yg)("p",null,"\u83b7\u5f97\u65e5\u671f\u4e2d\u7684\u5fae\u79d2\u4fe1\u606f\u3002"),(0,o.yg)("p",null,"\u53c2\u6570\u4e3a Datetime \u7c7b\u578b"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select microsecond(cast('1999-01-02 10:11:12.000123' as datetimev2(6))) as microsecond;\n+-------------+\n| microsecond |\n+-------------+\n|         123 |\n+-------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MICROSECOND\n")))}d.isMDXComponent=!0}}]);