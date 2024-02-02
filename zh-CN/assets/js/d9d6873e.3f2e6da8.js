"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[36552],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,f=d["".concat(o,".").concat(y)]||d[y]||p[y]||l;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},49404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=t(45072),a=(t(11504),t(95788));const l={title:"l2_distance",language:"zh-CN"},i=void 0,c={unversionedId:"sql-manual/sql-functions/distance-functions/l2-distance",id:"version-2.0/sql-manual/sql-functions/distance-functions/l2-distance",title:"l2_distance",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/distance-functions/l2-distance.md",sourceDirName:"sql-manual/sql-functions/distance-functions",slug:"/sql-manual/sql-functions/distance-functions/l2-distance",permalink:"/zh-CN/docs/sql-manual/sql-functions/distance-functions/l2-distance",draft:!1,tags:[],version:"2.0",frontMatter:{title:"l2_distance",language:"zh-CN"},sidebar:"docs",previous:{title:"l1_distance",permalink:"/zh-CN/docs/sql-manual/sql-functions/distance-functions/l1-distance"},next:{title:"CAST",permalink:"/zh-CN/docs/sql-manual/sql-functions/cast"}},o={},s=[{value:"l2_distance",id:"l2_distance",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"l2_distance"},"l2_distance"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DOUBLE l2_distance(ARRAY<T> array1, ARRAY<T> array2)\n")),(0,a.yg)("p",null,"\u8ba1\u7b97\u6b27\u51e0\u91cc\u5f97\u7a7a\u95f4\u4e2d\u4e24\u70b9\uff08\u5411\u91cf\u503c\u4e3a\u5750\u6807\uff09\u4e4b\u95f4\u7684\u8ddd\u79bb\n\u5982\u679c\u8f93\u5165array\u4e3aNULL\uff0c\u6216\u8005array\u4e2d\u4efb\u4f55\u5143\u7d20\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL"),(0,a.yg)("h4",{id:"notice"},"Notice"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8f93\u5165\u6570\u7ec4\u7684\u5b50\u7c7b\u578b\u652f\u6301\uff1aTINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE"),(0,a.yg)("li",{parentName:"ul"},"\u8f93\u5165\u6570\u7ec4array1\u548carray2\uff0c\u5143\u7d20\u6570\u91cf\u9700\u4fdd\u6301\u4e00\u81f4")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sql> SELECT l2_distance([1, 2], [2, 3]);\n+---------------------------------------+\n| l2_distance(ARRAY(1, 2), ARRAY(2, 3)) |\n+---------------------------------------+\n|                    1.4142135623730951 |\n+---------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"L2_DISTANCE,DISTANCE,L2,ARRAY\n")))}p.isMDXComponent=!0}}]);