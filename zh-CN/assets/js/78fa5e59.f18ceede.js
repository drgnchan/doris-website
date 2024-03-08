"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55581],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),y=r,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||p;return t?a.createElement(d,o(o({ref:n},s),{},{components:t})):a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},250912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=t(58168),r=(t(296540),t(15680));const p={title:"Table Schema Action",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/http-actions/fe/table-schema-action",id:"admin-manual/http-actions/fe/table-schema-action",title:"Table Schema Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/table-schema-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/table-schema-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/table-schema-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Table Schema Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Table Row Count Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/table-row-count-action"},next:{title:"Upload Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/upload-action"}},l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"table-schema-action"},"Table Schema Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/<db>/<table>/_schema")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u8868\u7ed3\u6784\u4fe1\u606f\u3002\u8be5\u63a5\u53e3\u76ee\u524d\u7528\u4e8e Spark/Flink Doris Connector \u4e2d\uff0c \u83b7\u53d6 Doris \u7684\u8868\u7ed3\u6784\u4fe1\u606f\u3002"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<table>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u8868"))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"http\u63a5\u53e3\u8fd4\u56de\u5982\u4e0b\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "properties": [{\n            "type": "INT",\n            "name": "k1",\n            "comment": "",\n            "aggregation_type":""\n        }, {\n            "type": "INT",\n            "name": "k2",\n            "comment": "",\n            "aggregation_type":"MAX"\n        }],\n        "keysType":UNIQUE_KEYS,\n        "status": 200\n    },\n    "count": 0\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"http v2\u63a5\u53e3\u8fd4\u56de\u5982\u4e0b\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "properties": [{\n            "type": "INT",\n            "name": "k1",\n            "comment": ""\n        }, {\n            "type": "INT",\n            "name": "k2",\n            "comment": ""\n        }],\n        "keysType":UNIQUE_KEYS,\n        "status": 200\n    },\n    "count": 0\n}\n')),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a\u533a\u522b\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"http"),"\u65b9\u5f0f\u6bd4",(0,r.yg)("inlineCode",{parentName:"p"},"http v2"),"\u65b9\u5f0f\u591a\u8fd4\u56de",(0,r.yg)("inlineCode",{parentName:"p"},"aggregation_type"),"\u5b57\u6bb5\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"http v2"),"\u5f00\u542f\u662f\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"enable_http_server_v2"),"\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5177\u4f53\u53c2\u6570\u8bf4\u660e\u8be6\u89c1",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/config/fe-config"},"fe\u53c2\u6570\u8bbe\u7f6e")),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7http\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u8868\u7ed3\u6784\u4fe1\u606f\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/db1/tbl1/_schema\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "properties": [{\n            "type": "INT",\n            "name": "k1",\n            "comment": "",\n            "aggregation_type":""\n        }, {\n            "type": "INT",\n            "name": "k2",\n            "comment": "",\n            "aggregation_type":"MAX"\n        }],\n        "keysType":UNIQUE_KEYS,\n        "status": 200\n    },\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7http v2\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u8868\u7ed3\u6784\u4fe1\u606f\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/db1/tbl1/_schema\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "properties": [{\n            "type": "INT",\n            "name": "k1",\n            "comment": ""\n        }, {\n            "type": "INT",\n            "name": "k2",\n            "comment": ""\n        }],\n        "keysType":UNIQUE_KEYS,\n        "status": 200\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);