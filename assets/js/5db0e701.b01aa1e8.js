"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86113],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"PMOD",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/numeric-functions/pmod",id:"sql-manual/sql-functions/numeric-functions/pmod",title:"PMOD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/numeric-functions/pmod.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/pmod",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/pmod",draft:!1,tags:[],version:"current",frontMatter:{title:"PMOD",language:"en"},sidebar:"docs",previous:{title:"FLOOR",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/floor"},next:{title:"ROUND",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/round"}},c={},s=[{value:"pmod",id:"pmod",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pmod"},"pmod"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"BIGINT PMOD(BIGINT x, BIGINT y)\nDOUBLE PMOD(DOUBLE x, DOUBLE y)\n")),(0,o.kt)("p",null,"Returns the positive result of x mod y in the residue systems.\nFormally, return ",(0,o.kt)("inlineCode",{parentName:"p"},"(x%y+y)%y"),"."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL [test]> SELECT PMOD(13,5);\n+-------------+\n| pmod(13, 5) |\n+-------------+\n|           3 |\n+-------------+\n\nMySQL [test]> SELECT PMOD(-13,5);\n+-------------+\n| pmod(-13, 5) |\n+-------------+\n|           2 |\n+-------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PMOD\n")))}d.isMDXComponent=!0}}]);