"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61247],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>s});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,s=d["".concat(c,".").concat(y)]||d[y]||m[y]||i;return n?r.createElement(s,l(l({ref:t},u),{},{components:n})):r.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},500699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const i={title:"\u6570\u636e\u6062\u590d",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/data-admin/data-recovery",id:"admin-manual/data-admin/data-recovery",title:"\u6570\u636e\u6062\u590d",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/data-admin/data-recovery.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/data-recovery",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/data-recovery",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u6062\u590d",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u5907\u4efd\u6062\u590d",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/restore"},next:{title:"\u6570\u636e\u5220\u9664\u6062\u590d",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/delete-recover"}},c={},p=[{value:"\u7b80\u8981\u539f\u7406\u8bf4\u660e",id:"\u7b80\u8981\u539f\u7406\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u4f8b\u5b50",id:"\u4f7f\u7528\u4f8b\u5b50",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6570\u636e\u6062\u590d"},"\u6570\u636e\u6062\u590d"),(0,a.yg)("p",null,"\u5bf9\u4e8eUnique Key Merge on Write\u8868\uff0c\u5728\u67d0\u4e9bDoris\u7684\u7248\u672c\u4e2d\u5b58\u5728bug\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u5728\u8ba1\u7b97delete bitmap\u65f6\u51fa\u73b0\u9519\u8bef\uff0c\u5bfc\u81f4\u51fa\u73b0\u91cd\u590d\u4e3b\u952e\uff0c\u6b64\u65f6\u53ef\u4ee5\u5229\u7528full compaction\u529f\u80fd\u8fdb\u884c\u6570\u636e\u7684\u4fee\u590d\u3002\u672c\u529f\u80fd\u5bf9\u4e8e\u975eUnique Key Merge on Write\u8868\u65e0\u6548\u3002"),(0,a.yg)("p",null,"\u8be5\u529f\u80fd\u9700\u8981 Doris \u7248\u672c 2.0+\u3002"),(0,a.yg)("p",null,"\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u9700\u8981\u5c3d\u53ef\u80fd\u505c\u6b62\u5bfc\u5165\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u5bfc\u5165\u8d85\u65f6\u7b49\u95ee\u9898\u3002"),(0,a.yg)("h2",{id:"\u7b80\u8981\u539f\u7406\u8bf4\u660e"},"\u7b80\u8981\u539f\u7406\u8bf4\u660e"),(0,a.yg)("p",null,"\u6267\u884cfull compaction\u540e\uff0c\u4f1a\u5bf9delete bitmap\u8fdb\u884c\u91cd\u65b0\u8ba1\u7b97\uff0c\u5c06\u9519\u8bef\u7684delete bitmap\u6570\u636e\u5220\u9664\uff0c\u4ee5\u5b8c\u6210\u6570\u636e\u7684\u4fee\u590d\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?tablet_id={int}&compact_type=full")),(0,a.yg)("p",null,"\u6216"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?table_id={int}&compact_type=full")),(0,a.yg)("p",null,"\u6ce8\u610f\uff0ctablet_id\u548ctable_id\u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\uff0c\u4e0d\u80fd\u591f\u540c\u65f6\u6307\u5b9a\uff0c\u6307\u5b9atable_id\u540e\u4f1a\u81ea\u52a8\u5bf9\u6b64table\u4e0b\u6240\u6709tablet\u6267\u884cfull_compaction\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u4f8b\u5b50"},"\u4f7f\u7528\u4f8b\u5b50"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8040/api/compaction/run?tablet_id=10015&compact_type=full"\ncurl -X POST "http://127.0.0.1:8040/api/compaction/run?table_id=10104&compact_type=full"\n')))}m.isMDXComponent=!0}}]);