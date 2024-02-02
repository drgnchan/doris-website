"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77204],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>m});var a=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),y=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=y(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=y(r),d=t,m=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return r?a.createElement(m,i(i({ref:n},u),{},{components:r})):a.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:t,i[1]=o;for(var y=2;y<l;y++)i[y]=r[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18664:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>y});var a=r(45072),t=(r(11504),r(95788));const l={title:"array_apply",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_apply",id:"version-1.2/sql-manual/sql-functions/array-functions/array_apply",title:"array_apply",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_apply.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_apply",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_apply",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_apply",language:"en"}},p={},y=[{value:"array_apply",id:"array_apply",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:y},c="wrapper";function s(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,a.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_apply"},"array_apply"),(0,t.yg)("version",{since:"1.2.3"},(0,t.yg)("p",null,"array_apply")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("p",null,"Filter array to match specific binary condition"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"array_apply(arr, op, val)\n")),(0,t.yg)("h4",{id:"arguments"},"Arguments"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"arr")," \u2014 The array to inspect. If it null, null will be returned.\n",(0,t.yg)("inlineCode",{parentName:"p"},"op")," \u2014 The compare operation, op includes ",(0,t.yg)("inlineCode",{parentName:"p"},"="),", ",(0,t.yg)("inlineCode",{parentName:"p"},">="),", ",(0,t.yg)("inlineCode",{parentName:"p"},"<="),", ",(0,t.yg)("inlineCode",{parentName:"p"},">"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"<"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"!="),". Support const value only.\n",(0,t.yg)("inlineCode",{parentName:"p"},"val")," \u2014 The compared value.If it null, null will be returned. Support const value only."),(0,t.yg)("h4",{id:"returned-value"},"Returned value"),(0,t.yg)("p",null,"The filtered array matched with condition."),(0,t.yg)("p",null,"Type: Array."),(0,t.yg)("h3",{id:"notice"},"notice"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'mysql> select array_apply([1, 2, 3, 4, 5], ">=", 2);\n+--------------------------------------------+\n| array_apply(ARRAY(1, 2, 3, 4, 5), \'>=\', 2) |\n+--------------------------------------------+\n| [2, 3, 4, 5]                               |\n+--------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_apply([1000000, 1000001, 1000002], "=", "1000002");\n+-------------------------------------------------------------+\n| array_apply(ARRAY(1000000, 1000001, 1000002), \'=\', 1000002) |\n+-------------------------------------------------------------+\n| [1000002]                                                   |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n')),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,APPLY,ARRAY_APPLY"))}s.isMDXComponent=!0}}]);