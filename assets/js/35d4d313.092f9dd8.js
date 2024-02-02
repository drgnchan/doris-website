"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16536],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(45072),i=(t(11504),t(95788));const o={title:"INITCAP",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/initcap",id:"version-2.0/sql-manual/sql-functions/string-functions/initcap",title:"INITCAP",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/initcap.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/initcap",permalink:"/docs/sql-manual/sql-functions/string-functions/initcap",draft:!1,tags:[],version:"2.0",frontMatter:{title:"INITCAP",language:"en"},sidebar:"docs",previous:{title:"UCASE",permalink:"/docs/sql-manual/sql-functions/string-functions/ucase"},next:{title:"REPEAT",permalink:"/docs/sql-manual/sql-functions/string-functions/repeat"}},c={},s=[{value:"initcap",id:"initcap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"initcap"},"initcap"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR initcap(VARCHAR str)")),(0,i.yg)("p",null,"Convert the first letter of each word to upper case and the rest to lower case.\nWords are sequences of alphanumeric characters separated by non-alphanumeric characters."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select initcap('hello hello.,HELLO123HELlo');\n+---------------------------------------+\n| initcap('hello hello.,HELLO123HELlo') |\n+---------------------------------------+\n| Hello Hello.,Hello123hello            |\n+---------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"INITCAP\n")))}f.isMDXComponent=!0}}]);