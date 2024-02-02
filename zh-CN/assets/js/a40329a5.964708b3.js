"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14932],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>f});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=o,f=c["".concat(u,".").concat(d)]||c[d]||g[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(45072),o=(t(11504),t(95788));const a={title:"group_bit_and",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/group_bit_and",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/group_bit_and",title:"group_bit_and",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/aggregate-functions/group_bit_and.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group_bit_and",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bit_and",draft:!1,tags:[],version:"1.2",frontMatter:{title:"group_bit_and",language:"zh-CN"},sidebar:"docs",previous:{title:"group_bitmap_xor",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor"},next:{title:"group_bit_or",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bit_or"}},u={},s=[{value:"group_bit_and",id:"group_bit_and",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},c="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"group_bit_and"},"group_bit_and"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"expr GROUP_BIT_AND(expr)")),(0,o.yg)("p",null,"\u5bf9expr\u8fdb\u884c and \u8ba1\u7b97, \u8fd4\u56de\u65b0\u7684expr\n\u652f\u6301\u6240\u6709INT\u7c7b\u578b"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from group_bit;\n+-------+\n| value |\n+-------+\n|     3 |\n|     1 |\n|     2 |\n|     4 |\n+-------+\n4 rows in set (0.02 sec)\n\nmysql> select group_bit_and(value) from group_bit;\n+------------------------+\n| group_bit_and(`value`) |\n+------------------------+\n|                      0 |\n+------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"GROUP_BIT_AND,BIT\n")))}g.isMDXComponent=!0}}]);