"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41187],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,d=u["".concat(p,".").concat(y)]||u[y]||g[y]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},584357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const o={title:"Log Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/log-action",id:"version-2.1/admin-manual/http-actions/fe/log-action",title:"Log Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/http-actions/fe/log-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/log-action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/log-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Log Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Help Action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/help-action"},next:{title:"Login Action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/login-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],c={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"log-action"},"Log Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GET /rest/v1/log\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"GET \u7528\u4e8e\u83b7\u53d6 Doris \u6700\u65b0\u7684\u4e00\u90e8\u5206 WARNING \u65e5\u5fd7\uff0cPOST \u65b9\u6cd5\u7528\u4e8e\u52a8\u6001\u8bbe\u7f6e FE \u7684\u65e5\u5fd7\u7ea7\u522b\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"add_verbose")),(0,a.yg)("p",{parentName:"li"},"  POST \u65b9\u6cd5\u53ef\u9009\u53c2\u6570\u3002\u5f00\u542f\u6307\u5b9a Package \u7684 DEBUG \u7ea7\u522b\u65e5\u5fd7\u3002\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"del_verbose")),(0,a.yg)("p",{parentName:"li"},"  POST \u65b9\u6cd5\u53ef\u9009\u53c2\u6570\u3002\u5173\u95ed\u6307\u5b9a Package \u7684 DEBUG \u7ea7\u522b\u65e5\u5fd7\u3002"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'GET /rest/v1/log\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogContents": {\n            "logPath": "/home/disk1/cmy/git/doris/core-for-ui/output/fe/log/fe.warn.log",\n            "log": "<pre>2020-08-26 15:54:30,081 WARN (UNKNOWN 10.81.85.89_9213_1597652404352(-1)|1) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: UNKNOWN</br>2020-08-26 15:54:32,089 WARN (RepNode 10.81.85.89_9213_1597652404352(-1)|61) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: MASTER</br>2020-08-26 15:54:35,121 WARN (stateListener|73) [Catalog.replayJournal():2510] replay journal cost too much time: 2975 replayedJournalId: 232383</br>2020-08-26 15:54:48,117 WARN (leaderCheckpointer|75) [Catalog.replayJournal():2510] replay journal cost too much time: 2812 replayedJournalId: 232383</br></pre>",\n            "showingLast": "603 bytes of log"\n        },\n        "LogConfiguration": {\n            "VerboseNames": "org",\n            "AuditNames": "slow_query,query",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}  \n')),(0,a.yg)("p",null,"\u5176\u4e2d ",(0,a.yg)("inlineCode",{parentName:"p"},"data.LogContents.log")," \u8868\u793a\u6700\u65b0\u4e00\u90e8\u5206 ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.warn.log")," \u4e2d\u7684\u65e5\u5fd7\u5185\u5bb9\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'POST /rest/v1/log?add_verbose=org\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogConfiguration": {\n            "VerboseNames": "org",\n            "AuditNames": "slow_query,query",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}\n')))}g.isMDXComponent=!0}}]);