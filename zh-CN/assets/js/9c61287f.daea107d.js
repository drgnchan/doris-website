"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93496],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>f});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(r),y=a,f=g["".concat(c,".").concat(y)]||g[y]||p[y]||l;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},65400:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=r(45072),a=(r(11504),r(95788));const l={title:"ARRAY_AGG",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/array-agg",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/array-agg",title:"ARRAY_AGG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/aggregate-functions/array-agg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/array-agg",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/array-agg",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_AGG",language:"zh-CN"}},c={},s=[{value:"ARRAY_AGG",id:"array_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},g="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(g,(0,t.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_agg"},"ARRAY_AGG"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY_AGG(col)")),(0,a.yg)("p",null,"\u5c06\u4e00\u5217\u4e2d\u7684\u503c\uff08\u5305\u62ec\u7a7a\u503c null\uff09\u4e32\u8054\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u4ee5\u7528\u4e8e\u591a\u884c\u8f6c\u4e00\u884c\uff08\u884c\u8f6c\u5217\uff09\u3002"),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6570\u7ec4\u4e2d\u5143\u7d20\u4e0d\u4fdd\u8bc1\u987a\u5e8f\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u8fd4\u56de\u8f6c\u6362\u751f\u6210\u7684\u6570\u7ec4\u3002\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u4e0e ",(0,a.yg)("inlineCode",{parentName:"li"},"col")," \u7c7b\u578b\u4e00\u81f4\u3002")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from test_doris_array_agg;\n\n+------+------+\n\n| c1   | c2   |\n\n+------+------+\n\n|    1 | a    |\n\n|    1 | b    |\n\n|    2 | c    |\n\n|    2 | NULL |\n\n|    3 | NULL |\n\n+------+------+\n\nmysql> select c1, array_agg(c2) from test_doris_array_agg group by c1;\n\n+------+-----------------+\n\n| c1   | array_agg(`c2`) |\n\n+------+-----------------+\n\n|    1 | ["a","b"]       |\n\n|    2 | [NULL,"c"]      |\n\n|    3 | [NULL]          |\n\n+------+-----------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY_AGG"))}p.isMDXComponent=!0}}]);