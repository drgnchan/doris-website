"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[9336],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||y[d]||i;return n?t.createElement(f,l(l({ref:r},s),{},{components:n})):t.createElement(f,l({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20125:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const i={title:"ARRAY_ZIP",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-zip",id:"sql-manual/sql-functions/array-functions/array-zip",title:"ARRAY_ZIP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-zip.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-zip",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-zip",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_ZIP",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_CONCAT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-concat"},next:{title:"ARRAY_SHUFFLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-shuffle"}},c={},u=[{value:"array_zip",id:"array_zip",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function y(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_zip"},"array_zip"),(0,a.kt)("version",{since:"2.0"},(0,a.kt)("p",null,"array_zip")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u5c06\u6240\u6709\u6570\u7ec4\u5408\u5e76\u6210\u4e00\u4e2a\u5355\u4e00\u7684\u6570\u7ec4\u3002\u7ed3\u679c\u6570\u7ec4\u5305\u542b\u6e90\u6570\u7ec4\u4e2d\u6309\u53c2\u6570\u5217\u8868\u987a\u5e8f\u5206\u7ec4\u7684\u76f8\u5e94\u5143\u7d20\u3002"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array<Struct<T1, T2,...>> array_zip(Array<T1>, Array<T2>, ...)")),(0,a.kt)("h4",{id:"returned-value"},"Returned value"),(0,a.kt)("p",null,"\u5c06\u6765\u81ea\u6e90\u6570\u7ec4\u7684\u5143\u7d20\u5206\u7ec4\u6210\u7ed3\u6784\u4f53\u7684\u6570\u7ec4\u3002\u7ed3\u6784\u4f53\u4e2d\u7684\u6570\u636e\u7c7b\u578b\u4e0e\u8f93\u5165\u6570\u7ec4\u7684\u7c7b\u578b\u76f8\u540c\uff0c\u5e76\u6309\u7167\u4f20\u9012\u6570\u7ec4\u7684\u987a\u5e8f\u6392\u5217\u3002"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select array_zip(['a', 'b', 'c'], [1, 2, 3]);\n+-------------------------------------------------+\n| array_zip(ARRAY('a', 'b', 'c'), ARRAY(1, 2, 3)) |\n+-------------------------------------------------+\n| [{'a', 1}, {'b', 2}, {'c', 3}]                  |\n+-------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,ZIP,ARRAY_ZIP"))}y.isMDXComponent=!0}}]);