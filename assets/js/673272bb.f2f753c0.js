"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61538],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var i=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||r;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},747772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(58168),a=(n(296540),n(15680));const r={title:"Set Config Action",language:"en"},o=void 0,s={unversionedId:"admin-manual/http-actions/fe/set-config-action",id:"version-2.0/admin-manual/http-actions/fe/set-config-action",title:"Set Config Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/http-actions/fe/set-config-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/set-config-action",permalink:"/docs/2.0/admin-manual/http-actions/fe/set-config-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Set Config Action",language:"en"},sidebar:"docs",previous:{title:"Row Count Action",permalink:"/docs/2.0/admin-manual/http-actions/fe/row-count-action"},next:{title:"Show Data Action",permalink:"/docs/2.0/admin-manual/http-actions/fe/show-data-action"}},l={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"set-config-action"},"Set Config Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/_set_config")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to dynamically set the configuration of FE. This command is passed through the ",(0,a.yg)("inlineCode",{parentName:"p"},"ADMIN SET FRONTEND CONFIG")," command. But this command will only set the configuration of the corresponding FE node. And it will not automatically forward the ",(0,a.yg)("inlineCode",{parentName:"p"},"MasterOnly")," configuration item to the Master FE node."),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"confkey1=confvalue1")),(0,a.yg)("p",{parentName:"li"},"  Specify the configuration name to be set, and its value is the configuration value to be modified.\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"persist")),(0,a.yg)("p",{parentName:"li"},"   Whether to persist the modified configuration. The default is false, which means it is not persisted. If it is true, the modified configuration item will be written into the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," file and will still take effect after FE is restarted.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"reset_persist"),"\nWhether or not to clear the original persist configuration only takes effect when the persist parameter is true. For compatibility with the original version, reset_persist defaults to true.",(0,a.yg)("br",{parentName:"p"}),"\n","If persist is set to true and reset_persist is not set or reset_persist is true, the configuration in the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," file will be cleared before this modified configuration is written to ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_custom.conf"),".",(0,a.yg)("br",{parentName:"p"}),"\n","If persist is set to true and reset_persist is false, this modified configuration item will be incrementally added to ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_custom.conf"),"."))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "set": {\n            "key": "value"\n        },\n        "err": [\n            {\n               "config_name": "",\n               "config_value": "",\n               "err_info": ""\n            }\n        ],\n        "persist":""\n    },\n    "count": 0\n}\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"set")," field indicates the successfully set configuration. The ",(0,a.yg)("inlineCode",{parentName:"p"},"err")," field indicates the configuration that failed to be set. The ",(0,a.yg)("inlineCode",{parentName:"p"},"persist")," field indicates persistent information."),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Set the values of ",(0,a.yg)("inlineCode",{parentName:"p"},"storage_min_left_capacity_bytes"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"replica_ack_policy")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"agent_task_resend_wait_time_ms"),"."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/_set_config?storage_min_left_capacity_bytes=1024&replica_ack_policy=SIMPLE_MAJORITY&agent_task_resend_wait_time_ms=true\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "storage_min_left_capacity_bytes": "1024"\n    },\n    "err": [\n        {\n            "config_name": "replica_ack_policy",\n            "config_value": "SIMPLE_MAJORITY",\n            "err_info": "Not support dynamic modification."\n        },\n        {\n            "config_name": "agent_task_resend_wait_time_ms",\n            "config_value": "true",\n            "err_info": "Unsupported configuration value type."\n        }\n    ],\n    "persist": ""\n},\n"count": 0\n}\n\nstorage_min_left_capacity_bytes  Successfully;    \nreplica_ack_policy  Failed, because the configuration item does not support dynamic modification.  \nagent_task_resend_wait_time_ms  Failed, failed to set the boolean type because the configuration item is of type long.\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Set ",(0,a.yg)("inlineCode",{parentName:"p"},"max_bytes_per_broker_scanner")," and persist it."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/_set_config?max_bytes_per_broker_scanner=21474836480&persist=true&reset_persist=false\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "max_bytes_per_broker_scanner": "21474836480"\n    },\n    "err": [],\n    "persist": "ok"\n},\n"count": 0\n}\n')),(0,a.yg)("p",{parentName:"li"},"The fe/conf directory generates the fe_custom.conf file:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"#THIS IS AN AUTO GENERATED CONFIG FILE.\n#You can modify this file manually, and the configurations in this file\n#will overwrite the configurations in fe.conf\n#Wed Jul 28 12:43:14 CST 2021\nmax_bytes_per_broker_scanner=21474836480\n")))))}m.isMDXComponent=!0}}]);