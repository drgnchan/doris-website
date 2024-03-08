"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13220],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>b});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},643431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"GET TABLETS ON A PARTICULAR BE",language:"en"},i=void 0,l={unversionedId:"admin-manual/http-actions/be/get-tablets",id:"version-1.2/admin-manual/http-actions/be/get-tablets",title:"GET TABLETS ON A PARTICULAR BE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/http-actions/be/get-tablets.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/get-tablets",permalink:"/docs/1.2/admin-manual/http-actions/be/get-tablets",draft:!1,tags:[],version:"1.2",frontMatter:{title:"GET TABLETS ON A PARTICULAR BE",language:"en"},sidebar:"docs",previous:{title:"Compaction Action",permalink:"/docs/1.2/admin-manual/http-actions/be/compaction-action"},next:{title:"CHECK/RESET Stub Cache",permalink:"/docs/1.2/admin-manual/http-actions/be/check-reset-rpc-cache"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"get-tablets-on-a-particular-be"},"GET TABLETS ON A PARTICULAR BE"),(0,a.yg)("p",null,"Get the tablet id and schema hash for a certain number of tablets on a particular BE node"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/tablets_page?limit=XXXXX\n")),(0,a.yg)("p",null,'The return is the tablet id and schema hash for a certain number of tablets on the BE node. The data is returned as a rendered Web page. The number of returned tablets is determined by the parameter limit. If parameter limit does not exist, none tablet will be returned. if the value of parameter limit is "all", all the tablets on the BE node will be returned. if the value of parameter limit is non-numeric type other than "all", none tablet will be returned.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/tablets_json?limit=XXXXX\n")),(0,a.yg)("p",null,'The return is the tablet id and schema hash for a certain number of tablets on the BE node. The returned data is organized as a Json object. The number of returned tablets is determined by the parameter limit. If parameter limit does not exist, none tablet will be returned. if the value of parameter limit is "all", all the tablets on the BE node will be returned. if the value of parameter limit is non-numeric type other than "all", none tablet will be returned.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "10.38.157.107",\n        tablets: [\n            {\n                tablet_id: 11119,\n                schema_hash: 714349777\n            },\n\n                ...\n\n            {\n                tablet_id: 11063,\n                schema_hash: 714349777\n            }\n        ]\n    },\n    count: 30\n}\n')))}m.isMDXComponent=!0}}]);