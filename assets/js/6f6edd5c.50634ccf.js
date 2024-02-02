"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51591],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(45072),a=(n(11504),n(95788));const o={title:"Bootstrap Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/bootstrap-action",id:"admin-manual/http-actions/fe/bootstrap-action",title:"Bootstrap Action",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/fe/bootstrap-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/bootstrap-action",permalink:"/docs/dev/admin-manual/http-actions/fe/bootstrap-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Bootstrap Action",language:"en"},sidebar:"docs",previous:{title:"Backends Action",permalink:"/docs/dev/admin-manual/http-actions/fe/backends-action"},next:{title:"Cancel Load Action",permalink:"/docs/dev/admin-manual/http-actions/fe/cancel-load-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bootstrap-action"},"Bootstrap Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/bootstrap")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"It is used to judge whether the FE has started. When no parameters are provided, only whether the startup is successful is returned. If ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")," are provided, more detailed information is returned."),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"none"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.yg)("p",{parentName:"li"},"  The cluster id. It can be viewed in the file ",(0,a.yg)("inlineCode",{parentName:"p"},"doris-meta/image/VERSION"),".\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"token")),(0,a.yg)("p",{parentName:"li"},"  Cluster token. It can be viewed in the file ",(0,a.yg)("inlineCode",{parentName:"p"},"doris-meta/image/VERSION"),"."))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"none"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"No parameters provided"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')),(0,a.yg)("p",{parentName:"li"},"  A code of 0 means that the FE node has started successfully. Error codes other than 0 indicate other errors.\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Provide ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "arrowFlightSqlPort": 9040,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"queryPort")," is the MySQL protocol port of the FE node."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"rpcPort")," is the thrift RPC port of the FE node."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"maxReplayedJournal")," represents the maximum metadata journal id currently played back by the FE node."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"arrowFlightSqlPort")," is the Arrow Flight SQL port of the FE node.")))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"No parameters"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/bootstrap\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Provide ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/bootstrap?cluster_id=935437471&token=ad87f6dd-c93f-4880-bcdb-8ca8c9ab3031\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "arrowFlightSqlPort": 9040,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);