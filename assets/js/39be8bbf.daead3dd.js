"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53722],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=l,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(45072),l=(t(11504),t(95788));const a={title:"HLL_HASH",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/hll-functions/hll-hash",id:"sql-manual/sql-functions/hll-functions/hll-hash",title:"HLL_HASH",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/hll-functions/hll-hash.md",sourceDirName:"sql-manual/sql-functions/hll-functions",slug:"/sql-manual/sql-functions/hll-functions/hll-hash",permalink:"/docs/dev/sql-manual/sql-functions/hll-functions/hll-hash",draft:!1,tags:[],version:"current",frontMatter:{title:"HLL_HASH",language:"en"},sidebar:"docs",previous:{title:"HLL_EMPTY",permalink:"/docs/dev/sql-manual/sql-functions/hll-functions/hll-empty"},next:{title:"CONV",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/conv"}},c={},s=[{value:"HLL_HASH",id:"hll_hash",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"hll_hash"},"HLL_HASH"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"HLL_HASH(value)")),(0,l.yg)("p",null,"HLL_HASH converts a value to hll type.\nTypically used when loading data."),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"MySQL > select HLL_CARDINALITY(HLL_HASH('abc'));\n+----------------------------------+\n| hll_cardinality(HLL_HASH('abc')) |\n+----------------------------------+\n|                                1 |\n+----------------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"HLL,HLL_HASH"))}d.isMDXComponent=!0}}]);