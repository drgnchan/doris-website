"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94972],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,y=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={title:"exp",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/exp",id:"version-1.2/sql-manual/sql-functions/math-functions/exp",title:"exp",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/math-functions/exp.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/exp",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/exp",draft:!1,tags:[],version:"1.2",frontMatter:{title:"exp",language:"zh-CN"},sidebar:"docs",previous:{title:"Pi",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/pi"},next:{title:"log",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/log"}},s={},c=[{value:"exp",id:"exp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"exp"},"exp"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE exp(DOUBLE x)"),"\n\u8fd4\u56de\u4ee5",(0,o.yg)("inlineCode",{parentName:"p"},"e"),"\u4e3a\u5e95\u7684",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5e42."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select exp(2);\n+------------------+\n| exp(2.0)         |\n+------------------+\n| 7.38905609893065 |\n+------------------+\nmysql> select exp(3.4);\n+--------------------+\n| exp(3.4)           |\n+--------------------+\n| 29.964100047397011 |\n+--------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"EXP\n")))}f.isMDXComponent=!0}}]);