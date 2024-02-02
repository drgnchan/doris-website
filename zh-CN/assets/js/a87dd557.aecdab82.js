"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45588],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>m});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,m=s["".concat(u,".").concat(d)]||s[d]||y[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(45072),a=(r(11504),r(95788));const o={title:"Query Profile Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/query-profile-action-controller",id:"version-2.0/admin-manual/http-actions/fe/query-profile-action-controller",title:"Query Profile Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/http-actions/fe/query-profile-action-controller.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/query-profile-action-controller",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/query-profile-action-controller",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Query Profile Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Logout Action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/logout-action"},next:{title:"Session Action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/session-action"}},u={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],c={toc:p},s="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"query-profile-action"},"Query Profile Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GET /rest/v1/query_profile/<query_id>\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Query Profile Action \u7528\u4e8e\u83b7\u53d6 Query \u7684 profile"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"<query_id>")),(0,a.yg)("p",{parentName:"li"},"  \u53ef\u9009\u53c2\u6570\u3002\u5f53\u4e0d\u6307\u5b9a\u65f6\uff0c\u8fd4\u56de\u6700\u65b0\u7684 query \u5217\u8868\u3002\u5f53\u6307\u5b9a\u65f6\uff0c\u8fd4\u56de\u6307\u5b9a query \u7684 profile\u3002"))),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Not specify ",(0,a.yg)("inlineCode",{parentName:"p"},"<query_id>")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /rest/v1/query_profile/\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "href_column": ["Query ID"],\n        "column_names": ["Query ID", "User", "Default Db", "Sql Statement", "Query Type", "Start Time", "End Time", "Total", "Query State"],\n        "rows": [{\n            "User": "root",\n            "__hrefPath": ["/query_profile/d73a8a0b004f4b2f-b4829306441913da"],\n            "Query Type": "Query",\n            "Total": "5ms",\n            "Default Db": "default_cluster:db1",\n            "Sql Statement": "select * from tbl1",\n            "Query ID": "d73a8a0b004f4b2f-b4829306441913da",\n            "Start Time": "2020-09-03 10:07:54",\n            "Query State": "EOF",\n            "End Time": "2020-09-03 10:07:54"\n        }, {\n            "User": "root",\n            "__hrefPath": ["/query_profile/fd706dd066824c21-9d1a63af9f5cb50c"],\n            "Query Type": "Query",\n            "Total": "6ms",\n            "Default Db": "default_cluster:db1",\n            "Sql Statement": "select * from tbl1",\n            "Query ID": "fd706dd066824c21-9d1a63af9f5cb50c",\n            "Start Time": "2020-09-03 10:07:54",\n            "Query State": "EOF",\n            "End Time": "2020-09-03 10:07:54"\n        }]\n    },\n    "count": 3\n}\n')),(0,a.yg)("p",{parentName:"li"},"  The returned result is the same as ",(0,a.yg)("inlineCode",{parentName:"p"},"System Action"),", which is a table description.\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Specify ",(0,a.yg)("inlineCode",{parentName:"p"},"<query_id>")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /rest/v1/query_profile/<query_id>\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": "Query:</br>&nbsp;&nbsp;&nbsp;&nbsp;Summary:</br>...",\n    "count": 0\n}\n')),(0,a.yg)("p",{parentName:"li"},"  ",(0,a.yg)("inlineCode",{parentName:"p"},"data")," is the text content of the profile."))))}y.isMDXComponent=!0}}]);