"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93104],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(45072),i=(t(11504),t(95788));const o={title:"SIN",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/numeric-functions/sin",id:"sql-manual/sql-functions/numeric-functions/sin",title:"SIN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/sin.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/sin",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/sin",draft:!1,tags:[],version:"current",frontMatter:{title:"SIN",language:"zh-CN"},sidebar:"docs",previous:{title:"BIN",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/bin"},next:{title:"COS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/cos"}},a={},c=[{value:"sin",id:"sin",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"sin"},"sin"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DOUBLE sin(DOUBLE x)"),"\n\u8fd4\u56de",(0,i.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u6b63\u5f26\u503c\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"x")," \u4e3a\u5f27\u5ea6\u503c."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select sin(0);\n+----------+\n| sin(0.0) |\n+----------+\n|        0 |\n+----------+\nmysql> select sin(1);\n+--------------------+\n| sin(1.0)           |\n+--------------------+\n| 0.8414709848078965 |\n+--------------------+\nmysql> select sin(0.5 * Pi());\n+-----------------+\n| sin(0.5 * pi()) |\n+-----------------+\n|               1 |\n+-----------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SIN\n")))}m.isMDXComponent=!0}}]);