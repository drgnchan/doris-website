"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56177],{95788:(e,n,r)=>{r.d(n,{Iu:()=>s,yg:()=>m});var a=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),u=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=t,m=p["".concat(i,".").concat(d)]||p[d]||y[d]||c;return r?a.createElement(m,l(l({ref:n},s),{},{components:r})):a.createElement(m,l({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,l=new Array(c);l[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:t,l[1]=o;for(var u=2;u<c;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2484:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var a=r(45072),t=(r(11504),r(95788));const c={title:"ARRAY_COMPACY",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-compact",id:"version-2.0/sql-manual/sql-functions/array-functions/array-compact",title:"ARRAY_COMPACY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-compact.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-compact",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-compact",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_COMPACY",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_PUSHBACK",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-pushback"},next:{title:"ARRAY_CONCAT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-concat"}},i={},u=[{value:"array_compact",id:"array_compact",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(p,(0,a.c)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_compact"},"array_compact"),(0,t.yg)("version",{since:"1.2.0"},(0,t.yg)("p",null,"array_compact")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("p",null,"\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u8fde\u7eed\u7684\u91cd\u590d\u5143\u7d20,\u7ed3\u679c\u503c\u7684\u987a\u5e8f\u7531\u6e90\u6570\u7ec4\u4e2d\u7684\u987a\u5e8f\u51b3\u5b9a\u3002"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Array<T> array_compact(arr)")),(0,t.yg)("h4",{id:"arguments"},"Arguments"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"arr")," \u2014 \u9700\u8981\u5904\u7406\u7684\u6570\u7ec4."),(0,t.yg)("h4",{id:"returned-value"},"Returned value"),(0,t.yg)("p",null,"\u4e0d\u5b58\u5728\u8fde\u7eed\u91cd\u590d\u5143\u7d20\u7684\u6570\u7ec4."),(0,t.yg)("p",null,"Type: Array."),(0,t.yg)("h3",{id:"notice"},"notice"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"\u53ea\u652f\u6301\u5728\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528\u3002")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"select array_compact([1, 2, 3, 3, null, null, 4, 4]);\n\n+----------------------------------------------------+\n| array_compact(ARRAY(1, 2, 3, 3, NULL, NULL, 4, 4)) |\n+----------------------------------------------------+\n| [1, 2, 3, NULL, 4]                                 |\n+----------------------------------------------------+\n\nselect array_compact(['aaa','aaa','bbb','ccc','ccccc',null, null,'dddd']);\n\n+-------------------------------------------------------------------------------+\n| array_compact(ARRAY('aaa', 'aaa', 'bbb', 'ccc', 'ccccc', NULL, NULL, 'dddd')) |\n+-------------------------------------------------------------------------------+\n| ['aaa', 'bbb', 'ccc', 'ccccc', NULL, 'dddd']                                  |\n+-------------------------------------------------------------------------------+\n\nselect array_compact(['2015-03-13','2015-03-13']);\n\n+--------------------------------------------------+\n| array_compact(ARRAY('2015-03-13', '2015-03-13')) |\n+--------------------------------------------------+\n| ['2015-03-13']                                   |\n+--------------------------------------------------+\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,COMPACT,ARRAY_COMPACT"))}y.isMDXComponent=!0}}]);