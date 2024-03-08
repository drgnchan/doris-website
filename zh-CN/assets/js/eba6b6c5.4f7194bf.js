"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55119],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},319568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const a={title:"PMOD",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/pmod",id:"sql-manual/sql-functions/numeric-functions/pmod",title:"PMOD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/pmod.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/pmod",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/pmod",draft:!1,tags:[],version:"current",frontMatter:{title:"PMOD",language:"zh-CN"},sidebar:"docs",previous:{title:"FLOOR",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/floor"},next:{title:"ROUND",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/round"}},c={},u=[{value:"pmod",id:"pmod",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"pmod"},"pmod"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"BIGINT PMOD(BIGINT x, BIGINT y)\nDOUBLE PMOD(DOUBLE x, DOUBLE y)\n")),(0,o.yg)("p",null,"\u8fd4\u56de\u5728\u6a21\u7cfb\u4e0b",(0,o.yg)("inlineCode",{parentName:"p"},"x mod y"),"\u7684\u6700\u5c0f\u6b63\u6570\u89e3.\n\u5177\u4f53\u5730\u6765\u8bf4, \u8fd4\u56de ",(0,o.yg)("inlineCode",{parentName:"p"},"(x%y+y)%y"),"."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL [test]> SELECT PMOD(13,5);\n+-------------+\n| pmod(13, 5) |\n+-------------+\n|           3 |\n+-------------+\nMySQL [test]> SELECT PMOD(-13,5);\n+-------------+\n| pmod(-13, 5) |\n+-------------+\n|           2 |\n+-------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"PMOD\n")))}d.isMDXComponent=!0}}]);