"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[21423],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||y[f]||l;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},957983:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const l={title:"Release 1.2.7",language:"zh-CN"},o=void 0,i={unversionedId:"releasenotes/release-1.2.7",id:"version-2.1/releasenotes/release-1.2.7",title:"Release 1.2.7",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/releasenotes/release-1.2.7.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.2.7",permalink:"/zh-CN/docs/releasenotes/release-1.2.7",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Release 1.2.7",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 2.0-Alpha",permalink:"/zh-CN/docs/releasenotes/release-2.0-Alpha"},next:{title:"Release 1.2.6",permalink:"/zh-CN/docs/releasenotes/release-1.2.6"}},s={},c=[],u={toc:c},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bugfix"},"Bugfix"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u4e00\u4e9b\u67e5\u8be2\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u4e00\u4e9b\u5b58\u50a8\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u4e00\u4e9b\u5c0f\u6570\u7cbe\u5ea6\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u7531\u65e0\u6548\u7684 sql_select_limit \u4f1a\u8bdd\u53d8\u91cf\u503c\u5f15\u8d77\u7684\u67e5\u8be2\u9519\u8bef\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u65e0\u6cd5\u4f7f\u7528 hdfs \u77ed\u8def\u8bfb\u53d6\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u817e\u8baf\u4e91 cosn \u65e0\u6cd5\u8bbf\u95ee\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u4e00\u4e9b Hive Catalog kerberos \u8bbf\u95ee\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d Stream load Profile \u65e0\u6cd5\u4f7f\u7528\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d Promethus \u76d1\u63a7\u53c2\u6570\u683c\u5f0f\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u521b\u5efa\u5927\u91cf Tablet \u65f6\u5efa\u8868\u8d85\u65f6\u7684\u95ee\u9898\u3002")),(0,a.yg)("h1",{id:"\u6700\u65b0\u7279\u6027"},"\u6700\u65b0\u7279\u6027"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Unique Key \u6a21\u578b\u652f\u6301\u5c06\u6570\u7ec4\u7c7b\u578b\u4f5c\u4e3a Key \u5217\uff1b\n-\u6dfb\u52a0\u4e86 have_query_cache \u53d8\u91cf\u4ee5\u4fdd\u8bc1\u4e0e MySQL \u751f\u6001\u7cfb\u7edf\u517c\u5bb9\u3002\n-\u6dfb\u52a0 enable_strong _consistency_read \u4ee5\u652f\u6301\u4f1a\u8bdd\u4e4b\u95f4\u7684\u5f3a\u4e00\u81f4\u6027\u8bfb\u53d6\u3002\n-FE \u6307\u6807\u652f\u6301\u7528\u6237\u7ea7\u7684\u67e5\u8be2\u8ba1\u6570\u5668\u3002")))}y.isMDXComponent=!0}}]);