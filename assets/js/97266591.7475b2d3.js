"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[83686],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},484598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const o={title:"Login Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/login-action",id:"version-2.0/admin-manual/http-actions/fe/login-action",title:"Login Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/http-actions/fe/login-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/login-action",permalink:"/docs/2.0/admin-manual/http-actions/fe/login-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Login Action",language:"en"},sidebar:"docs",previous:{title:"Log Action",permalink:"/docs/2.0/admin-manual/http-actions/fe/log-action"},next:{title:"Logout Action",permalink:"/docs/2.0/admin-manual/http-actions/fe/logout-action"}},c={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"login-action"},"Login Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"POST /rest/v1/login")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to log in to the service."),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Login success"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "Login success!",\n    "code": 200\n}\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Login failure"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "Error msg...",\n    "code": xxx,\n    "data": "Error data...",\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);