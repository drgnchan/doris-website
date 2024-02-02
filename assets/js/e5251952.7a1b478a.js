"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53370],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(45072),a=(n(11504),n(95788));const i={title:"Metrics",language:"en"},o=void 0,l={unversionedId:"admin-manual/http-actions/be/metrics",id:"admin-manual/http-actions/be/metrics",title:"Metrics",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/be/metrics.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/metrics",permalink:"/docs/dev/admin-manual/http-actions/be/metrics",draft:!1,tags:[],version:"current",frontMatter:{title:"Metrics",language:"en"},sidebar:"docs",previous:{title:"Config of BE",permalink:"/docs/dev/admin-manual/http-actions/be/config"},next:{title:"View Tablet Distribution",permalink:"/docs/dev/admin-manual/http-actions/be/tablet-distribution"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"metrics"},"Metrics"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /metrics?type={enum}&with_tablet={bool}")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Provided for prometheus"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"type"),"\nOutput style, Optional with default ",(0,a.yg)("inlineCode",{parentName:"p"},"all")," and the following values:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"core"),": Only core items"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"json"),": Json format"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"with_tablet"),"\nWhether to output tablet-related items\uff0cOptional with default ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"."))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"```\ndoris_be__max_network_receive_bytes_rate LONG 60757\ndoris_be__max_network_send_bytes_rate LONG 16232\ndoris_be_process_thread_num LONG 1120\ndoris_be_process_fd_num_used LONG 336\n\uff0c\uff0c\uff0c\n\n```\n")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'```\n    curl "http://127.0.0.1:8040/metrics?type=json&with_tablet=true"\n```\n')))}m.isMDXComponent=!0}}]);