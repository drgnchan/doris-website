"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73585],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),y=r,d=s["".concat(p,".").concat(y)]||s[y]||m[y]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},644112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"\u89e6\u53d1Compaction",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/http-actions/be/compaction-run",id:"admin-manual/http-actions/be/compaction-run",title:"\u89e6\u53d1Compaction",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/be/compaction-run.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/compaction-run",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/be/compaction-run",draft:!1,tags:[],version:"current",frontMatter:{title:"\u89e6\u53d1Compaction",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u770bCompaction\u72b6\u6001",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/be/compaction-status"},next:{title:"\u67e5\u8be2\u5143\u4fe1\u606f",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/be/meta"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u89e6\u53d1Compaction",id:"\u89e6\u53d1compaction-1",level:3},{value:"\u67e5\u8be2\u72b6\u6001",id:"\u67e5\u8be2\u72b6\u6001",level:3},{value:"Examples",id:"examples",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u89e6\u53d1compaction"},"\u89e6\u53d1Compaction"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?tablet_id={int}&compact_type={enum}"),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?table_id={int}&compact_type=full")," \u6ce8\u610f\uff0ctable_id=xxx\u53ea\u6709\u5728compact_type=full\u65f6\u6307\u5b9a\u624d\u4f1a\u751f\u6548\u3002\n",(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/compaction/run_status?tablet_id={int}")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u624b\u52a8\u89e6\u53d1 Compaction \u4ee5\u53ca\u72b6\u6001\u67e5\u8be2\u3002"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"tablet_id")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"tablet\u7684id"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"table_id")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"table\u7684id\u3002\u6ce8\u610f\uff0ctable_id=xxx\u53ea\u6709\u5728compact_type=full\u65f6\u6307\u5b9a\u624d\u4f1a\u751f\u6548\uff0c\u5e76\u4e14tablet_id\u548ctable_id\u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\uff0c\u4e0d\u80fd\u591f\u540c\u65f6\u6307\u5b9a\uff0c\u6307\u5b9atable_id\u540e\u4f1a\u81ea\u52a8\u5bf9\u6b64table\u4e0b\u6240\u6709tablet\u6267\u884cfull_compaction\u3002"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"compact_type")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u53d6\u503c\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"base"),"\u6216",(0,r.yg)("inlineCode",{parentName:"li"},"cumulative"),"\u6216",(0,r.yg)("inlineCode",{parentName:"li"},"full"),"\u3002full_compaction\u7684\u4f7f\u7528\u573a\u666f\u8bf7\u53c2\u8003",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/admin-manual/data-admin/data-recovery"},"\u6570\u636e\u6062\u590d"),"\u3002")))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("h3",{id:"\u89e6\u53d1compaction-1"},"\u89e6\u53d1Compaction"),(0,r.yg)("p",null,"\u82e5 tablet \u4e0d\u5b58\u5728\uff0c\u8fd4\u56de JSON \u683c\u5f0f\u7684\u9519\u8bef\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,r.yg)("p",null,"\u82e5 compaction \u6267\u884c\u4efb\u52a1\u89e6\u53d1\u5931\u8d25\u65f6\uff0c\u8fd4\u56de JSON \u683c\u5f0f\u7684\u9519\u8bef\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n')),(0,r.yg)("p",null,"\u82e5 compaction \u6267\u884c\u89e6\u53d1\u6210\u529f\u65f6\uff0c\u5219\u8fd4\u56de JSON \u683c\u5f0f\u7684\u7ed3\u679c:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n')),(0,r.yg)("p",null,"\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"status\uff1a\u89e6\u53d1\u4efb\u52a1\u72b6\u6001\uff0c\u5f53\u6210\u529f\u89e6\u53d1\u65f6\u4e3aSuccess\uff1b\u5f53\u56e0\u67d0\u4e9b\u539f\u56e0\uff08\u6bd4\u5982\uff0c\u6ca1\u6709\u83b7\u53d6\u5230\u5408\u9002\u7684\u7248\u672c\uff09\u65f6\uff0c\u8fd4\u56deFail\u3002"),(0,r.yg)("li",{parentName:"ul"},"msg\uff1a\u7ed9\u51fa\u5177\u4f53\u7684\u6210\u529f\u6216\u5931\u8d25\u7684\u4fe1\u606f\u3002")),(0,r.yg)("h3",{id:"\u67e5\u8be2\u72b6\u6001"},"\u67e5\u8be2\u72b6\u6001"),(0,r.yg)("p",null,"\u82e5 tablet \u4e0d\u5b58\u5728\uff0c\u8fd4\u56de JSON \u683c\u5f0f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,r.yg)("p",null,"\u82e5 tablet \u5b58\u5728\u5e76\u4e14 tablet \u4e0d\u5728\u6b63\u5728\u6267\u884c compaction\uff0c\u8fd4\u56de JSON \u683c\u5f0f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : ""\n}\n')),(0,r.yg)("p",null,"\u82e5 tablet \u5b58\u5728\u5e76\u4e14 tablet \u6b63\u5728\u6267\u884c compaction\uff0c\u8fd4\u56de JSON \u683c\u5f0f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : "cumulative"\n}\n')),(0,r.yg)("p",null,"\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"run_status\uff1a\u83b7\u53d6\u5f53\u524d\u624b\u52a8 compaction \u4efb\u52a1\u6267\u884c\u72b6\u6001")),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8040/api/compaction/run?tablet_id=10015&compact_type=cumulative"\n')))}m.isMDXComponent=!0}}]);