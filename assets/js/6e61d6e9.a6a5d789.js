"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37660],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>f});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={title:"Show Runtime Info Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/show-runtime-info-action",id:"version-2.0/admin-manual/http-actions/fe/show-runtime-info-action",title:"Show Runtime Info Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/http-actions/fe/show-runtime-info-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/show-runtime-info-action",permalink:"/docs/admin-manual/http-actions/fe/show-runtime-info-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Show Runtime Info Action",language:"en"},sidebar:"docs",previous:{title:"Show Proc Action",permalink:"/docs/admin-manual/http-actions/fe/show-proc-action"},next:{title:"Show Table Data Action",permalink:"/docs/admin-manual/http-actions/fe/show-table-data-action"}},s={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"show-runtime-info-action"},"Show Runtime Info Action"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /api/show_runtime_info")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Used to obtain Runtime information of FE JVM"),(0,o.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "free_mem": "855642056",\n        "total_mem": "1037959168",\n        "thread_cnt": "98",\n        "max_mem": "1037959168"\n    },\n    "count": 0\n}\n')),(0,o.yg)("h2",{id:"examples"},"Examples"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Get the JVM information of the current FE node"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'GET /api/show_runtime_info\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "free_mem": "855642056",\n        "total_mem": "1037959168",\n        "thread_cnt": "98",\n        "max_mem": "1037959168"\n    },\n    "count": 0\n}\n')))))}m.isMDXComponent=!0}}]);