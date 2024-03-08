"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29930],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var l=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=l.createContext({}),s=function(e){var n=l.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return l.createElement(c.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},f=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,d=p["".concat(c,".").concat(f)]||p[f]||y[f]||a;return t?l.createElement(d,o(o({ref:n},u),{},{components:t})):l.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},203842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=t(58168),r=(t(296540),t(15680));const a={title:"HLL_EMPTY",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/hll-functions/hll-empty",id:"sql-manual/sql-functions/hll-functions/hll-empty",title:"HLL_EMPTY",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/hll-functions/hll-empty.md",sourceDirName:"sql-manual/sql-functions/hll-functions",slug:"/sql-manual/sql-functions/hll-functions/hll-empty",permalink:"/docs/dev/sql-manual/sql-functions/hll-functions/hll-empty",draft:!1,tags:[],version:"current",frontMatter:{title:"HLL_EMPTY",language:"en"},sidebar:"docs",previous:{title:"HLL_CARDINALITY",permalink:"/docs/dev/sql-manual/sql-functions/hll-functions/hll-cardinality"},next:{title:"HLL_HASH",permalink:"/docs/dev/sql-manual/sql-functions/hll-functions/hll-hash"}},c={},s=[{value:"HLL_EMPTY",id:"hll_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,l.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"hll_empty"},"HLL_EMPTY"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"HLL_EMPTY(value)")),(0,r.yg)("p",null,"HLL_EMPTY returns a null value of type hll."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"MySQL > select hll_cardinality(hll_empty());\n+------------------------------+\n| hll_cardinality(hll_empty()) |\n+------------------------------+\n|                            0 |\n+------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"HLL,HLL_EMPTY"))}y.isMDXComponent=!0}}]);