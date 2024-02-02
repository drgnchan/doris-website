"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55608],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>y});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(45072),r=(n(11504),n(95788));const o={title:"Table Row Count Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/table-row-count-action",id:"admin-manual/http-actions/fe/table-row-count-action",title:"Table Row Count Action",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/fe/table-row-count-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/table-row-count-action",permalink:"/docs/dev/admin-manual/http-actions/fe/table-row-count-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Table Row Count Action",language:"en"},sidebar:"docs",previous:{title:"Table Query Plan Action",permalink:"/docs/dev/admin-manual/http-actions/fe/table-query-plan-action"},next:{title:"Table Schema Action",permalink:"/docs/dev/admin-manual/http-actions/fe/table-schema-action"}},c={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"table-row-count-action"},"Table Row Count Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/<db>/<table>/_count")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to obtain statistics about the number of rows in a specified table. This interface is currently used in Spark-Doris-Connector. Spark obtains Doris table statistics."),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  Specify database")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<table>")),(0,r.yg)("p",{parentName:"li"},"  Specify table"))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "size": 1,\n        "status": 200\n    },\n    "count": 0\n}\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"data.size")," field indicates the number of rows in the specified table."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Get the number of rows in the specified table."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/db1/tbl1/_count\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "size": 1,\n        "status": 200\n    },\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);