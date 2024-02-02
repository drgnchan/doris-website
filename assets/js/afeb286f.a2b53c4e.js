"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94260],{95788:(e,a,t)=>{t.d(a,{Iu:()=>c,yg:()=>m});var o=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),g=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=g(e.components);return o.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=g(t),u=n,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return t?o.createElement(m,l(l({ref:a},c),{},{components:t})):o.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var g=2;g<r;g++)l[g]=t[g];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},15272:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var o=t(45072),n=(t(11504),t(95788));const r={title:"Debug Log",language:"en"},l=void 0,i={unversionedId:"advanced/best-practice/debug-log",id:"version-1.2/advanced/best-practice/debug-log",title:"Debug Log",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/advanced/best-practice/debug-log.md",sourceDirName:"advanced/best-practice",slug:"/advanced/best-practice/debug-log",permalink:"/docs/1.2/advanced/best-practice/debug-log",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Debug Log",language:"en"},sidebar:"docs",previous:{title:"Import Analysis",permalink:"/docs/1.2/advanced/best-practice/import-analysis"},next:{title:"Compaction",permalink:"/docs/1.2/advanced/best-practice/compaction"}},s={},g=[{value:"Enable FE Debug log",id:"enable-fe-debug-log",level:2},{value:"Enable BE Debug log",id:"enable-be-debug-log",level:2}],c={toc:g},p="wrapper";function d(e){let{components:a,...t}=e;return(0,n.yg)(p,(0,o.c)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"debug-log"},"Debug Log"),(0,n.yg)("p",null,"The system operation logs of Doris's FE and BE nodes are at INFO level by default. It can usually satisfy the analysis of system behavior and the localization of basic problems. However, in some cases, it may be necessary to enable DEBUG level logs to further troubleshoot the problem. This document mainly introduces how to enable the DEBUG log level of FE and BE nodes."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"It is not recommended to adjust the log level to WARN or higher, which is not conducive to the analysis of system behavior and the location of problems.")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Enable DEBUG log may cause a large number of logs to be generated, ",(0,n.yg)("strong",{parentName:"p"},"Please be careful to open it in production environment"),".")),(0,n.yg)("h2",{id:"enable-fe-debug-log"},"Enable FE Debug log"),(0,n.yg)("p",null,"The Debug level log of FE can be turned on by modifying the configuration file, or it can be turned on at runtime through the interface or API."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Open via configuration file"),(0,n.yg)("p",{parentName:"li"},"Add the configuration item ",(0,n.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_modules")," to fe.conf. An example is as follows:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"# Only enable Debug log for class org.apache.doris.catalog.Catalog\nsys_log_verbose_modules=org.apache.doris.catalog.Catalog\n\n# Open the Debug log of all classes under the package org.apache.doris.catalog\nsys_log_verbose_modules=org.apache.doris.catalog\n\n# Enable Debug logs for all classes under package org\nsys_log_verbose_modules=org\n")),(0,n.yg)("p",{parentName:"li"},"Add configuration items and restart the FE node to take effect.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Via FE UI interface"),(0,n.yg)("p",{parentName:"li"},"The log level can be modified at runtime through the UI interface. There is no need to restart the FE node. Open the http port of the FE node (8030 by default) in the browser, and log in to the UI interface. Then click on the ",(0,n.yg)("inlineCode",{parentName:"p"},"Log")," tab in the upper navigation bar."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{parentName:"p",src:"https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f87b8c1.png",alt:"image.png"})),(0,n.yg)("p",{parentName:"li"},"We can enter the package name or specific class name in the Add input box to open the corresponding Debug log. For example, enter ",(0,n.yg)("inlineCode",{parentName:"p"},"org.apache.doris.catalog.Catalog")," to open the Debug log of the Catalog class:"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{parentName:"p",src:"https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f0d4a23.png",alt:"image.png"})),(0,n.yg)("p",{parentName:"li"},"You can also enter the package name or specific class name in the Delete input box to close the corresponding Debug log."),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"The modification here will only affect the log level of the corresponding FE node. Does not affect the log level of other FE nodes."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modification via API"),(0,n.yg)("p",{parentName:"li"},"The log level can also be modified at runtime via the following API. There is no need to restart the FE node."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?add_verbose=org.apache.doris.catalog.Catalog\n")),(0,n.yg)("p",{parentName:"li"},"The username and password are the root or admin users who log in to Doris. The ",(0,n.yg)("inlineCode",{parentName:"p"},"add_verbose")," parameter specifies the package or class name to enable Debug logging. Returns if successful:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogConfiguration": {\n            "VerboseNames": "org,org.apache.doris.catalog.Catalog",\n            "AuditNames": "slow_query,query,load",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}\n')),(0,n.yg)("p",{parentName:"li"},"Debug logging can also be turned off via the following API:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?del_verbose=org.apache.doris.catalog.Catalog\n")),(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"del_verbose")," parameter specifies the package or class name for which to turn off Debug logging."))),(0,n.yg)("h2",{id:"enable-be-debug-log"},"Enable BE Debug log"),(0,n.yg)("p",null,"BE's Debug log currently only supports modifying and restarting the BE node through the configuration file to take effect."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=plan_fragment_executor,olap_scan_node\nsys_log_verbose_level=3\n")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_modules")," specifies the file name to be opened, which can be specified by the wildcard *. for example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=*\n")),(0,n.yg)("p",null,"Indicates that all DEBUG logs are enabled."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_level")," indicates the level of DEBUG. The higher the number, the more detailed the DEBUG log. The value range is 1-10."))}d.isMDXComponent=!0}}]);