"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57350],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},840868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(58168),a=(t(296540),t(15680));const o={title:"Connection Action",language:"zh-CN"},i=void 0,c={unversionedId:"admin-manual/http-actions/fe/connection-action",id:"admin-manual/http-actions/fe/connection-action",title:"Connection Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/connection-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/connection-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/connection-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Connection Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Check Storage Type Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/check-storage-type-action"},next:{title:"Extra Basepath Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/extra-basepath-action"}},l={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"connection-action"},"Connection Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/connection")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a connection id\uff0c\u8fd4\u56de\u8fd9\u4e2a\u8fde\u63a5\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\uff0c\u6216\u6700\u540e\u4e00\u6b21\u6267\u884c\u5b8c\u6210\u7684 query id\u3002"),(0,a.yg)("p",null,"connection id \u53ef\u4ee5\u901a\u8fc7 MySQL \u547d\u4ee4 ",(0,a.yg)("inlineCode",{parentName:"p"},"show processlist;")," \u4e2d\u7684 id \u5217\u67e5\u770b\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"connection_id")),(0,a.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684 connection id"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n    },\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a connection id \u7684 query id"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/connection?connection_id=101\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n    },\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);