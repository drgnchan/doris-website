"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50260],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,g=p["".concat(s,".").concat(y)]||p[y]||f[y]||i;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},83047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"PERCENTILE_ARRAY",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile_array",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/percentile_array",title:"PERCENTILE_ARRAY",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/aggregate-functions/percentile_array.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile_array",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/percentile_array",draft:!1,tags:[],version:"1.2",frontMatter:{title:"PERCENTILE_ARRAY",language:"en"},sidebar:"docs",previous:{title:"PERCENTILE",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/percentile"},next:{title:"HLL_UNION_AGG",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/hll_union_agg"}},s={},c=[{value:"PERCENTILE_ARRAY",id:"percentile_array",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"percentile_array"},"PERCENTILE_ARRAY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY_DOUBLE PERCENTILE_ARRAY(BIGINT, ARRAY_DOUBLE p)")),(0,a.yg)("p",null,"Calculate exact percentiles, suitable for small data volumes. Sorts the specified column in descending order first, then takes the exact pth percentile.\nThe return value is the result of sequentially taking the specified percentages in the array p.\nParameter Description:\nexpr: Required. Columns whose values are of type integer (up to bigint).\np: The exact percentile is required, an array of constants, taking the value ","[0.0, 1.0]","."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select percentile_array(k1,[0.3,0.5,0.9]) from baseall;\n+----------------------------------------------+\n| percentile_array(`k1`, ARRAY(0.3, 0.5, 0.9)) |\n+----------------------------------------------+\n| [5.2, 8, 13.6]                               |\n+----------------------------------------------+\n1 row in set (0.02 sec)\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"PERCENTILE_ARRAY"))}f.isMDXComponent=!0}}]);