"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13830],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},988560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"BITMAP_HASH64",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-hash64",id:"sql-manual/sql-functions/bitmap-functions/bitmap-hash64",title:"BITMAP_HASH64",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap-hash64.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-hash64",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-hash64",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_HASH64",language:"zh-CN"},sidebar:"docs",previous:{title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate-count"},next:{title:"BITMAP_FROM_BASE64",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-from-base64"}},s={},c=[{value:"bitmap_hash64",id:"bitmap_hash64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_hash64"},"bitmap_hash64"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_HASH64(expr)")),(0,a.yg)("p",null,"\u5bf9\u4efb\u610f\u7c7b\u578b\u7684\u8f93\u5165\u8ba1\u7b9764\u4f4d\u7684\u54c8\u5e0c\u503c\uff0c\u8fd4\u56de\u5305\u542b\u8be5\u54c8\u5e0c\u503c\u7684bitmap\u3002\u4e3b\u8981\u7528\u4e8estream load\u4efb\u52a1\u5c06\u975e\u6574\u578b\u5b57\u6bb5\u5bfc\u5165Doris\u8868\u7684bitmap\u5b57\u6bb5\u3002\u4f8b\u5982"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,device_id, device_id=bitmap_hash64(device_id)"   http://host:8410/api/test/testDb/_stream_load\n')),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_to_string(bitmap_hash64('hello'));\n+------------------------------------------+\n| bitmap_to_string(bitmap_hash64('hello')) |\n+------------------------------------------+\n| 15231136565543391023                     |\n+------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_HASH,BITMAP\n")))}m.isMDXComponent=!0}}]);