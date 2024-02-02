"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98762],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>g});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(45072),o=(n(11504),n(95788));const a={title:"APPROX_COUNT_DISTINCT",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-functions/aggregate-functions/approx-count-distinct",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/approx-count-distinct",title:"APPROX_COUNT_DISTINCT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/aggregate-functions/approx-count-distinct.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/approx-count-distinct",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/approx-count-distinct",draft:!1,tags:[],version:"2.0",frontMatter:{title:"APPROX_COUNT_DISTINCT",language:"en"},sidebar:"docs",previous:{title:"VARIANCE_SAMP,VARIANCE_SAMP",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/var-samp"},next:{title:"VARIANCE,VAR_POP,VARIANCE_POP",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/variance"}},l={},c=[{value:"APPROX_COUNT_DISTINCT",id:"approx_count_distinct",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"approx_count_distinct"},"APPROX_COUNT_DISTINCT"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT (expr)")),(0,o.yg)("p",null,"Returns an approximate aggregation function similar to the result of COUNT (DISTINCT col)."),(0,o.yg)("p",null,"It combines COUNT and DISTINCT faster and uses fixed-size memory, so less memory can be used for columns with high cardinality."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > select approx_count_distinct(query_id) from log_statis group by datetime;\n+-----------------+\n| approx_count_distinct(`query_id`) |\n+-----------------+\n| 17721           |\n+-----------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"APPROX_COUNT_DISTINCT"))}d.isMDXComponent=!0}}]);