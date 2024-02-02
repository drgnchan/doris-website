"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45108],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>d});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,d=u["".concat(s,".").concat(f)]||u[f]||y[f]||o;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22357:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(45072),a=(t(11504),t(95788));const o={title:"STRING",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/STRING",id:"version-1.2/sql-manual/sql-reference/Data-Types/STRING",title:"STRING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/STRING.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/STRING",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/STRING",draft:!1,tags:[],version:"1.2",frontMatter:{title:"STRING",language:"zh-CN"},sidebar:"docs",previous:{title:"VARCHAR",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/VARCHAR"},next:{title:"HLL(HyperLogLog)",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/HLL"}},s={},c=[{value:"STRING",id:"string",level:2},{value:"description",id:"description",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"string"},"STRING"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"STRING\n\u53d8\u957f\u5b57\u7b26\u4e32\uff0c\u6700\u5927\uff08\u9ed8\u8ba4\uff09\u652f\u63011048576 \u5b57\u8282\uff081MB\uff09\u3002String\u7c7b\u578b\u7684\u957f\u5ea6\u8fd8\u53d7 be \u914d\u7f6e  `string_type_length_soft_limit_bytes`(\u5b57\u7b26\u4e32\u7c7b\u578b\u957f\u5ea6\u7684\u8f6f\u9650\u5236), String\u7c7b\u578b\u53ea\u80fd\u7528\u5728value \u5217\uff0c\u4e0d\u80fd\u7528\u5728 key \u5217\u548c\u5206\u533a \u5206\u6876\u5217\n\n\u6ce8\u610f\uff1a\u53d8\u957f\u5b57\u7b26\u4e32\u662f\u4ee5UTF-8\u7f16\u7801\u5b58\u50a8\u7684\uff0c\u56e0\u6b64\u901a\u5e38\u82f1\u6587\u5b57\u7b26\u53601\u4e2a\u5b57\u8282\uff0c\u4e2d\u6587\u5b57\u7b26\u53603\u4e2a\u5b57\u8282\u3002\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"STRING\n")))}y.isMDXComponent=!0}}]);