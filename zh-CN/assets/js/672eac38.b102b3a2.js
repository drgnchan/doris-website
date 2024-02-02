"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54484],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var a=t(11504);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),g=u(t),y=l,m=g["".concat(p,".").concat(y)]||g[y]||s[y]||i;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=y;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[g]="string"==typeof e?e:l,o[1]=r;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},32448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=t(45072),l=(t(11504),t(95788));const i={title:"\u4ee3\u7801\u6253\u6869",language:"zh-CN"},o=void 0,r={unversionedId:"admin-manual/http-actions/fe/debug-point-action",id:"admin-manual/http-actions/fe/debug-point-action",title:"\u4ee3\u7801\u6253\u6869",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/debug-point-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/debug-point-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/debug-point-action",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ee3\u7801\u6253\u6869",language:"zh-CN"},sidebar:"docs",previous:{title:"Meta Info Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/meta-info-action-V2"},next:{title:"Statistic Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/statistic-action"}},p={},u=[{value:"\u6728\u6869\u4ee3\u7801\u793a\u4f8b",id:"\u6728\u6869\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u603b\u5f00\u5173",id:"\u603b\u5f00\u5173",level:2},{value:"\u6253\u5f00\u6728\u6869",id:"\u6253\u5f00\u6728\u6869",level:2},{value:"API",id:"api",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"\u5411\u6728\u6869\u4f20\u9012\u53c2\u6570",id:"\u5411\u6728\u6869\u4f20\u9012\u53c2\u6570",level:2},{value:"API",id:"api-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"\u5728 FE \u548c BE \u4ee3\u7801\u4e2d\u4f7f\u7528\u53c2\u6570",id:"\u5728-fe-\u548c-be-\u4ee3\u7801\u4e2d\u4f7f\u7528\u53c2\u6570",level:3},{value:"\u5173\u95ed\u6728\u6869",id:"\u5173\u95ed\u6728\u6869",level:2},{value:"API",id:"api-2",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"\u6e05\u9664\u6240\u6709\u6728\u6869",id:"\u6e05\u9664\u6240\u6709\u6728\u6869",level:2},{value:"API",id:"api-3",level:3},{value:"Request body",id:"request-body-3",level:3},{value:"Response",id:"response-3",level:3},{value:"Examples",id:"examples-3",level:3},{value:"\u5728\u56de\u5f52\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u6728\u6869",id:"\u5728\u56de\u5f52\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u6728\u6869",level:2},{value:"\u5e76\u53d1\u95ee\u9898",id:"\u5e76\u53d1\u95ee\u9898",level:3},{value:"Examples",id:"examples-4",level:3}],d={toc:u},g="wrapper";function s(e){let{components:n,...t}=e;return(0,l.yg)(g,(0,a.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u4ee3\u7801\u6253\u6869"},"\u4ee3\u7801\u6253\u6869"),(0,l.yg)("p",null,"\u4ee3\u7801\u6253\u6869\uff0c\u662f\u6307\u5728 FE \u6216 BE \u6e90\u7801\u4e2d\u63d2\u5165\u4e00\u6bb5\u4ee3\u7801\uff0c\u5f53\u7a0b\u5e8f\u6267\u884c\u5230\u8fd9\u91cc\u65f6\uff0c\u53ef\u4ee5\u6539\u53d8\u7a0b\u5e8f\u7684\u53d8\u91cf\u6216\u884c\u4e3a\uff0c\u8fd9\u6837\u7684\u4e00\u6bb5\u4ee3\u7801\u79f0\u4e3a\u4e00\u4e2a",(0,l.yg)("inlineCode",{parentName:"p"},"\u6728\u6869"),"\u3002"),(0,l.yg)("p",null,"\u4e3b\u8981\u7528\u4e8e\u5355\u5143\u6d4b\u8bd5\u6216\u56de\u5f52\u6d4b\u8bd5\uff0c\u7528\u6765\u6784\u9020\u6b63\u5e38\u65b9\u6cd5\u65e0\u6cd5\u5b9e\u73b0\u7684\u5f02\u5e38\u3002"),(0,l.yg)("p",null,"\u6bcf\u4e00\u4e2a\u6728\u6869\u90fd\u6709\u4e00\u4e2a\u540d\u79f0\uff0c\u53ef\u4ee5\u968f\u4fbf\u53d6\u540d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u673a\u5236\u63a7\u5236\u6728\u6869\u7684\u5f00\u5173\uff0c\u8fd8\u53ef\u4ee5\u5411\u6728\u6869\u4f20\u9012\u53c2\u6570\u3002"),(0,l.yg)("p",null,"FE \u548c BE \u90fd\u652f\u6301\u4ee3\u7801\u6253\u6869\uff0c\u6253\u6869\u5b8c\u540e\u8981\u91cd\u65b0\u7f16\u8bd1 BE \u6216 FE\u3002"),(0,l.yg)("h2",{id:"\u6728\u6869\u4ee3\u7801\u793a\u4f8b"},"\u6728\u6869\u4ee3\u7801\u793a\u4f8b"),(0,l.yg)("p",null,"FE \u6869\u5b50\u793a\u4f8b\u4ee3\u7801"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'private Status foo() {  \n    // dbug_fe_foo_do_nothing \u662f\u4e00\u4e2a\u6728\u6869\u540d\u5b57\uff0c\n    // \u6253\u5f00\u8fd9\u4e2a\u6728\u6869\u4e4b\u540e\uff0cDebugPointUtil.isEnable("dbug_fe_foo_do_nothing") \u5c06\u4f1a\u8fd4\u56detrue\n    if (DebugPointUtil.isEnable("dbug_fe_foo_do_nothing")) {\n        return Status.Nothing;\n    }\n        \n     do_foo_action();\n     \n     return Status.Ok;\n}\n')),(0,l.yg)("p",null,"BE \u6869\u5b50\u793a\u4f8b\u4ee3\u7801"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c++"},'void Status foo() {\n\n     // dbug_be_foo_do_nothing \u662f\u4e00\u4e2a\u6728\u6869\u540d\u5b57\uff0c\n     // \u6253\u5f00\u8fd9\u4e2a\u6728\u6869\u4e4b\u540e\uff0cDBUG_EXECUTE_IF \u5c06\u4f1a\u6267\u884c\u5b8f\u53c2\u6570\u4e2d\u7684\u4ee3\u7801\u5757\n     DBUG_EXECUTE_IF("dbug_be_foo_do_nothing",  { return Status.Nothing; });\n   \n     do_foo_action();\n     \n     return Status.Ok;\n}\n')),(0,l.yg)("h2",{id:"\u603b\u5f00\u5173"},"\u603b\u5f00\u5173"),(0,l.yg)("p",null,"\u9700\u8981\u628a\u6728\u6869\u603b\u5f00\u5173 ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_debug_points")," \u6253\u5f00\u4e4b\u540e\uff0c\u624d\u80fd\u6fc0\u6d3b\u6728\u6869\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6728\u6869\u603b\u5f00\u5173\u662f\u5173\u95ed\u7684\u3002"),(0,l.yg)("p",null,"\u603b\u5f00\u5173",(0,l.yg)("inlineCode",{parentName:"p"},"enable_debug_points")," \u5206\u522b\u5728 FE \u7684 fe.conf \u548c BE \u7684 be.conf \u4e2d\u914d\u7f6e\u3002"),(0,l.yg)("h2",{id:"\u6253\u5f00\u6728\u6869"},"\u6253\u5f00\u6728\u6869"),(0,l.yg)("p",null,"\u6253\u5f00\u603b\u5f00\u5173\u540e\uff0c\u8fd8\u9700\u8981\u901a\u8fc7\u5411 FE \u6216 BE \u53d1\u9001 http \u8bf7\u6c42\u7684\u65b9\u5f0f\uff0c\u6253\u5f00\u6216\u5173\u95ed\u6307\u5b9a\u540d\u79f0\u7684\u6728\u6869\uff0c\u53ea\u6709\u8fd9\u6837\u5f53\u4ee3\u7801\u6267\u884c\u5230\u8fd9\u4e2a\u6728\u6869\u65f6\uff0c\u76f8\u5173\u4ee3\u7801\u624d\u4f1a\u88ab\u6267\u884c\u3002"),(0,l.yg)("h3",{id:"api"},"API"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"POST /api/debug_point/add/{debug_point_name}[?timeout=<int>&execute=<int>]\n")),(0,l.yg)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"debug_point_name"),"\n\u6728\u6869\u540d\u5b57\u3002\u5fc5\u586b\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"timeout"),"\n\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u8d85\u65f6\u4e4b\u540e\uff0c\u6728\u6869\u5931\u6d3b\u3002\u9ed8\u8ba4\u503c-1\u8868\u793a\u6c38\u8fdc\u4e0d\u8d85\u65f6\u3002\u53ef\u9009\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"execute"),"\n\u6728\u6869\u6700\u5927\u6267\u884c\u6b21\u6570\u3002\u9ed8\u8ba4\u503c-1\u8868\u793a\u4e0d\u9650\u6267\u884c\u6b21\u6570\u3002\u53ef\u9009\u3002       "))),(0,l.yg)("h3",{id:"request-body"},"Request body"),(0,l.yg)("p",null,"\u65e0"),(0,l.yg)("h3",{id:"response"},"Response"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0\n}\n')),(0,l.yg)("h3",{id:"examples"},"Examples"),(0,l.yg)("p",null,"\u6253\u5f00\u6728\u6869 ",(0,l.yg)("inlineCode",{parentName:"p"},"foo"),"\uff0c\u6700\u591a\u6267\u884c5\u6b21\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8030/api/debug_point/add/foo?execute=5"\n\n')),(0,l.yg)("h2",{id:"\u5411\u6728\u6869\u4f20\u9012\u53c2\u6570"},"\u5411\u6728\u6869\u4f20\u9012\u53c2\u6570"),(0,l.yg)("p",null,"\u6fc0\u6d3b\u6728\u6869\u65f6\uff0c\u9664\u4e86\u524d\u6587\u6240\u8ff0\u7684 timeout \u548c execute\uff0c\u8fd8\u53ef\u4ee5\u4f20\u9012\u5176\u5b83\u81ea\u5b9a\u4e49\u53c2\u6570\u3002",(0,l.yg)("br",null),"\n\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5f62\u5982 key=value \u7684 key-value \u5bf9\uff0c\u5728 url \u7684\u8def\u5f84\u90e8\u5206\uff0c\u7d27\u8ddf\u5728\u6728\u6869\u540d\u79f0\u540e\uff0c\u4ee5\u5b57\u7b26 '?' \u5f00\u5934\u3002"),(0,l.yg)("h3",{id:"api-1"},"API"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"POST /api/debug_point/add/{debug_point_name}[?k1=v1&k2=v2&k3=v3...]\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"k1=v1"),"\nk1\u4e3a\u53c2\u6570\u540d\u79f0\uff0cv1\u4e3a\u53c2\u6570\u503c\uff0c\u591a\u4e2a\u53c2\u6570\u7528&\u5206\u9694\u3002")),(0,l.yg)("h3",{id:"request-body-1"},"Request body"),(0,l.yg)("p",null,"\u65e0"),(0,l.yg)("h3",{id:"response-1"},"Response"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0\n}\n')),(0,l.yg)("h3",{id:"examples-1"},"Examples"),(0,l.yg)("p",null,"\u5047\u8bbe FE \u5728 fe.conf \u4e2d\u6709\u914d\u7f6e http_port=8030\uff0c\u5219\u4e0b\u9762\u7684\u8bf7\u6c42\u6fc0\u6d3b FE \u4e2d\u7684\u6728\u6869",(0,l.yg)("inlineCode",{parentName:"p"},"foo"),"\uff0c\u5e76\u4f20\u9012\u4e86\u4e24\u4e2a\u53c2\u6570 ",(0,l.yg)("inlineCode",{parentName:"p"},"percent")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"duration"),"\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'curl -u root: -X POST "http://127.0.0.1:8030/api/debug_point/add/foo?percent=0.5&duration=3"\n')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u6ce8\u610f\uff1a\n1\u3001\u5728 FE \u6216 BE \u7684\u4ee3\u7801\u4e2d\uff0c\u53c2\u6570\u540d\u548c\u53c2\u6570\u503c\u90fd\u662f\u5b57\u7b26\u4e32\u3002\n2\u3001\u5728 FE \u6216 BE \u7684\u4ee3\u7801\u4e2d\u548c http \u8bf7\u6c42\u4e2d\uff0c\u53c2\u6570\u540d\u79f0\u548c\u503c\u90fd\u662f\u5927\u5c0f\u5199\u654f\u611f\u7684\u3002\n3\u3001\u53d1\u7ed9 FE \u6216 BE \u7684 http \u8bf7\u6c42\uff0c\u8def\u5f84\u90e8\u5206\u683c\u5f0f\u662f\u76f8\u540c\u7684\uff0c\u53ea\u662f IP \u5730\u5740\u548c\u7aef\u53e3\u53f7\u4e0d\u540c\u3002\n")),(0,l.yg)("h3",{id:"\u5728-fe-\u548c-be-\u4ee3\u7801\u4e2d\u4f7f\u7528\u53c2\u6570"},"\u5728 FE \u548c BE \u4ee3\u7801\u4e2d\u4f7f\u7528\u53c2\u6570"),(0,l.yg)("p",null,"\u6fc0\u6d3b FE \u4e2d\u7684\u6728\u6869",(0,l.yg)("inlineCode",{parentName:"p"},"OlapTableSink.write_random_choose_sink"),"\u5e76\u4f20\u9012\u53c2\u6570 ",(0,l.yg)("inlineCode",{parentName:"p"},"needCatchUp")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"sinkNum"),":"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u53ef\u80fd\u9700\u8981\u7528\u6237\u540d\u548c\u5bc6\u7801"),(0,l.yg)("pre",{parentName:"blockquote"},(0,l.yg)("code",{parentName:"pre"},'curl -u root: -X POST "http://127.0.0.1:8030/api/debug_point/add/OlapTableSink.write_random_choose_sink?needCatchUp=true&sinkNum=3"\n'))),(0,l.yg)("p",null,"\u5728 FE \u4ee3\u7801\u4e2d\u4f7f\u7528\u6728\u6869 OlapTableSink.write_random_choose_sink \u7684\u53c2\u6570 ",(0,l.yg)("inlineCode",{parentName:"p"},"needCatchUp")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"sinkNum"),"\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},'private void debugWriteRandomChooseSink(Tablet tablet, long version, Multimap<Long, Long> bePathsMap) {\n    DebugPoint debugPoint = DebugPointUtil.getDebugPoint("OlapTableSink.write_random_choose_sink");\n    if (debugPoint == null) {\n        return;\n    }\n    boolean needCatchup = debugPoint.param("needCatchUp", false);\n    int sinkNum = debugPoint.param("sinkNum", 0);\n    ...\n}\n')),(0,l.yg)("p",null,"\u6fc0\u6d3b BE \u4e2d\u7684\u6728\u6869",(0,l.yg)("inlineCode",{parentName:"p"},"TxnManager.prepare_txn.random_failed"),"\u5e76\u4f20\u9012\u53c2\u6570 ",(0,l.yg)("inlineCode",{parentName:"p"},"percent"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8040/api/debug_point/add/TxnManager.prepare_txn.random_failed?percent=0.7\n')),(0,l.yg)("p",null,"\u5728 BE \u4ee3\u7801\u4e2d\u4f7f\u7528\u6728\u6869 ",(0,l.yg)("inlineCode",{parentName:"p"},"TxnManager.prepare_txn.random_failed")," \u7684\u53c2\u6570 ",(0,l.yg)("inlineCode",{parentName:"p"},"percent"),"\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c++"},'DBUG_EXECUTE_IF("TxnManager.prepare_txn.random_failed",\n        {if (rand() % 100 < (100 * dp->param("percent", 0.5))) {\n                LOG_WARNING("TxnManager.prepare_txn.random_failed random failed");\n                return Status::InternalError("debug prepare txn random failed");\n        }}\n);\n')),(0,l.yg)("h2",{id:"\u5173\u95ed\u6728\u6869"},"\u5173\u95ed\u6728\u6869"),(0,l.yg)("h3",{id:"api-2"},"API"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"POST /api/debug_point/remove/{debug_point_name}\n")),(0,l.yg)("h3",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"debug_point_name"),"\n\u6728\u6869\u540d\u5b57\u3002\u5fc5\u586b\u3002     ")),(0,l.yg)("h3",{id:"request-body-2"},"Request body"),(0,l.yg)("p",null,"\u65e0"),(0,l.yg)("h3",{id:"response-2"},"Response"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0\n}\n')),(0,l.yg)("h3",{id:"examples-2"},"Examples"),(0,l.yg)("p",null,"\u5173\u95ed\u6728\u6869",(0,l.yg)("inlineCode",{parentName:"p"},"foo"),"\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8030/api/debug_point/remove/foo"\n')),(0,l.yg)("h2",{id:"\u6e05\u9664\u6240\u6709\u6728\u6869"},"\u6e05\u9664\u6240\u6709\u6728\u6869"),(0,l.yg)("h3",{id:"api-3"},"API"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"POST /api/debug_point/clear\n")),(0,l.yg)("h3",{id:"request-body-3"},"Request body"),(0,l.yg)("p",null,"\u65e0"),(0,l.yg)("h3",{id:"response-3"},"Response"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0\n}\n')),(0,l.yg)("h3",{id:"examples-3"},"Examples"),(0,l.yg)("p",null,"\u6e05\u9664\u6240\u6709\u6728\u6869\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8030/api/debug_point/clear"\n')),(0,l.yg)("h2",{id:"\u5728\u56de\u5f52\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u6728\u6869"},"\u5728\u56de\u5f52\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u6728\u6869"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u63d0\u4ea4PR\u65f6\uff0c\u793e\u533a CI \u7cfb\u7edf\u9ed8\u8ba4\u5f00\u542f FE \u548c BE \u7684",(0,l.yg)("inlineCode",{parentName:"p"},"enable_debug_points"),"\u914d\u7f6e\u3002")),(0,l.yg)("p",null,"\u56de\u5f52\u6d4b\u8bd5\u6846\u67b6\u63d0\u4f9b\u65b9\u6cd5\u51fd\u6570\u6765\u5f00\u5173\u6307\u5b9a\u7684\u6728\u6869\uff0c\u5b83\u4eec\u58f0\u660e\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-groovy"},"// \u6253\u5f00\u6728\u6869\uff0cname \u662f\u6728\u6869\u540d\u79f0\uff0cparams \u662f\u4e00\u4e2akey-value\u5217\u8868\uff0c\u662f\u4f20\u7ed9\u6728\u6869\u7684\u53c2\u6570\ndef enableDebugPointForAllFEs(String name, Map<String, String> params = null);\ndef enableDebugPointForAllBEs(String name, Map<String, String> params = null);\n// \u5173\u95ed\u6728\u6869\uff0cname \u662f\u6728\u6869\u7684\u540d\u79f0\ndef disableDebugPointForAllFEs(String name);\ndef disableDebugPointForAllFEs(String name);\n")),(0,l.yg)("p",null,"\u9700\u8981\u5728\u8c03\u7528\u6d4b\u8bd5 action \u4e4b\u524d\u8c03\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"enableDebugPointForAllFEs()")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"p"},"enableDebugPointForAllBEs()")," \u6765\u5f00\u542f\u6728\u6869\uff0c ",(0,l.yg)("br",null),"\n\u8fd9\u6837\u6267\u884c\u5230\u6728\u6869\u4ee3\u7801\u65f6\uff0c\u76f8\u5173\u4ee3\u7801\u624d\u4f1a\u88ab\u6267\u884c\uff0c",(0,l.yg)("br",null),"\n\u7136\u540e\u5728\u8c03\u7528\u6d4b\u8bd5 action \u4e4b\u540e\u8c03\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"disableDebugPointForAllFEs()")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"p"},"disableDebugPointForAllBEs()")," \u6765\u5173\u95ed\u6728\u6869\u3002"),(0,l.yg)("h3",{id:"\u5e76\u53d1\u95ee\u9898"},"\u5e76\u53d1\u95ee\u9898"),(0,l.yg)("p",null,"FE \u6216 BE \u4e2d\u5f00\u542f\u7684\u6728\u6869\u662f\u5168\u5c40\u751f\u6548\u7684\uff0c\u540c\u4e00\u4e2a Pull Request \u4e2d\uff0c\u5e76\u53d1\u8dd1\u7684\u5176\u5b83\u6d4b\u8bd5\uff0c\u53ef\u80fd\u4f1a\u53d7\u5f71\u54cd\u800c\u610f\u5916\u5931\u8d25\u3002\n\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u89c4\u5b9a\uff0c\u4f7f\u7528\u6728\u6869\u7684\u56de\u5f52\u6d4b\u8bd5\uff0c\u5fc5\u987b\u653e\u5728 regression-test/suites/fault_injection_p0 \u76ee\u5f55\u4e0b\uff0c\n\u4e14\u7ec4\u540d\u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"nonConcurrent"),"\uff0c\u793e\u533a CI \u7cfb\u7edf\u5bf9\u4e8e\u8fd9\u4e9b\u7528\u4f8b\uff0c\u4f1a\u4e32\u884c\u8fd0\u884c\u3002"),(0,l.yg)("h3",{id:"examples-4"},"Examples"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-groovy"},"// \u6d4b\u8bd5\u7528\u4f8b\u7684.groovy \u6587\u4ef6\u5fc5\u987b\u653e\u5728 regression-test/suites/fault_injection_p0 \u76ee\u5f55\u4e0b\uff0c\n// \u4e14\u7ec4\u540d\u8bbe\u7f6e\u4e3a 'nonConcurrent'\nsuite('debugpoint_action', 'nonConcurrent') {\n    try {\n        // \u6253\u5f00\u6240\u6709FE\u4e2d\uff0c\u540d\u4e3a \"PublishVersionDaemon.stop_publish\" \u7684\u6728\u6869\n        // \u4f20\u53c2\u6570 timeout\n        // \u4e0e\u4e0a\u9762curl\u8c03\u7528\u65f6\u4e00\u6837\uff0cexecute \u662f\u6267\u884c\u6b21\u6570\uff0ctimeout \u662f\u8d85\u65f6\u79d2\u6570\n        GetDebugPoint().enableDebugPointForAllFEs('PublishVersionDaemon.stop_publish', [timeout:1])\n        // \u6253\u5f00\u6240\u6709BE\u4e2d\uff0c\u540d\u4e3a \"Tablet.build_tablet_report_info.version_miss\" \u7684\u6728\u6869\n        // \u4f20\u53c2\u6570 tablet_id, version_miss \u548c timeout\n        GetDebugPoint().enableDebugPointForAllBEs('Tablet.build_tablet_report_info.version_miss',\n                                                  [tablet_id:'12345', version_miss:true, timeout:1])\n\n        // \u6d4b\u8bd5\u7528\u4f8b\uff0c\u4f1a\u89e6\u53d1\u6728\u6869\u4ee3\u7801\u7684\u6267\u884c\n        sql \"\"\"CREATE TABLE tbl_1 (k1 INT, k2 INT)\n               DUPLICATE KEY (k1)\n               DISTRIBUTED BY HASH(k1)\n               BUCKETS 3\n               PROPERTIES (\"replication_allocation\" = \"tag.location.default: 1\");\n            \"\"\"\n        sql \"INSERT INTO tbl_1 VALUES (1, 10)\"\n        sql \"INSERT INTO tbl_1 VALUES (2, 20)\"\n        order_qt_select_1_1 'SELECT * FROM tbl_1'\n\n    } finally {\n        GetDebugPoint().disableDebugPointForAllFEs('PublishVersionDaemon.stop_publish')\n        GetDebugPoint().disableDebugPointForAllBEs('Tablet.build_tablet_report_info.version_miss')\n    }\n}\n")))}s.isMDXComponent=!0}}]);