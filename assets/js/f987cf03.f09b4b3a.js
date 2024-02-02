"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53924],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>d});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,d=p["".concat(a,".").concat(y)]||p[y]||f[y]||i;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=y;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},69692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(45072),o=(n(11504),n(95788));const i={title:"BIT_COUNT",language:"en"},l=void 0,c={unversionedId:"sql-manual/sql-functions/bitwise-functions/bitcount",id:"sql-manual/sql-functions/bitwise-functions/bitcount",title:"BIT_COUNT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitwise-functions/bitcount.md",sourceDirName:"sql-manual/sql-functions/bitwise-functions",slug:"/sql-manual/sql-functions/bitwise-functions/bitcount",permalink:"/docs/dev/sql-manual/sql-functions/bitwise-functions/bitcount",draft:!1,tags:[],version:"current",frontMatter:{title:"BIT_COUNT",language:"en"}},a={},u=[{value:"bit_count",id:"bit_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"bit_count"},"bit_count"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BIT_COUNT(Integer-type x)")),(0,o.yg)("p",null,"Returns the exist count of one in 2's complement represent of integer x."),(0,o.yg)("p",null,"Integer-type could be: TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"select \"0b11111111\", bit_count(-1)\n--------------\n\n+--------------+---------------+\n| '0b11111111' | bit_count(-1) |\n+--------------+---------------+\n| 0b11111111   |             8 |\n+--------------+---------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"BITCOUNT, BIT_COUNT\n")))}f.isMDXComponent=!0}}]);