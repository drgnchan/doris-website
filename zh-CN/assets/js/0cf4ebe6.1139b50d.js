"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[40936],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>g});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,g=y["".concat(s,".").concat(d)]||y[d]||p[d]||l;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36100:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(45072),a=(r(11504),r(95788));const l={title:"ARRAY_RANGE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-range",id:"version-2.0/sql-manual/sql-functions/array-functions/array-range",title:"ARRAY_RANGE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-range.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-range",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-range",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_RANGE",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_INTERSECT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-intersect"},next:{title:"ARRAY_DISTINCT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-distinct"}},s={},c=[{value:"array_range",id:"array_range",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_range"},"array_range"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"array_range")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<Int> array_range(Int end)\nARRAY<Int> array_range(Int start, Int end)\nARRAY<Int> array_range(Int start, Int end, Int step)\n")),(0,a.yg)("p",null,"\u53c2\u6570\u5747\u4e3a\u6b63\u6574\u6570 start \u9ed8\u8ba4\u4e3a 0, step \u9ed8\u8ba4\u4e3a 1\u3002\n\u6700\u7ec8\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u4ecestart \u5230 end - 1, \u6b65\u957f\u4e3a step\u3002"),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select array_range(10);\n+--------------------------------+\n| array_range(10)                |\n+--------------------------------+\n| [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] |\n+--------------------------------+\n\nmysql> select array_range(10,20);\n+------------------------------------------+\n| array_range(10, 20)                      |\n+------------------------------------------+\n| [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] |\n+------------------------------------------+\n\nmysql> select array_range(0,20,2);\n+-------------------------------------+\n| array_range(0, 20, 2)               |\n+-------------------------------------+\n| [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] |\n+-------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, RANGE, ARRAY_RANGE"))}p.isMDXComponent=!0}}]);