"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[9060],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||c;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(45072),a=(n(11504),n(95788));const c={title:"\u68c0\u67e5\u548c\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/http-actions/be/check-reset-rpc-cache",id:"version-1.2/admin-manual/http-actions/be/check-reset-rpc-cache",title:"\u68c0\u67e5\u548c\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/be/check-reset-rpc-cache.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/check-reset-rpc-cache",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/be/check-reset-rpc-cache",draft:!1,tags:[],version:"1.2",frontMatter:{title:"\u68c0\u67e5\u548c\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"GET TABLETS ON A PARTICULAR BE",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/be/get-tablets"},next:{title:"CHECK ALL TABLET SEGMENT LOST",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/be/check-tablet-segment-action"}},p={},l=[{value:"description",id:"description",level:2},{value:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58",id:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58",level:3},{value:"\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58",id:"\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58",level:3},{value:"example",id:"example",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u68c0\u67e5\u548c\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58"},"\u68c0\u67e5\u548c\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58"),(0,a.yg)("h2",{id:"description"},"description"),(0,a.yg)("h3",{id:"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58"},"\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u8be5\u529f\u80fd\u7528\u4e8e\u68c0\u67e5brpc\u7684\u8fde\u63a5\u7f13\u5b58\u3002\n\n\u8bf4\u660e\uff1a\u68c0\u67e5\u8fde\u63a5\u7f13\u5b58\u662f\u5426\u53ef\u7528,\u8d1f\u8f7d\u6700\u592710M\nMETHOD: GET\nURI: http://be_host:be_http_port/api/check_rpc_channel/{host_to_check}/{remot_brpc_port}/{payload_size}\n")),(0,a.yg)("h3",{id:"\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58"},"\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u8be5\u529f\u80fd\u7528\u4e8e\u91cd\u7f6ebrpc\u7684\u8fde\u63a5\u7f13\u5b58\u3002endpoints \u53ef\u4ee5\u65f6\u5982\u4e0b\u5f62\u5f0f `all` \u6e05\u7a7a\u5168\u90e8\u7f13\u5b58\uff0c  `host1:port1,host2:port2,...`: \u6e05\u7a7a\u5230\u6307\u5b9a\u76ee\u6807\u7684\u7f13\u5b58\n\n\u8bf4\u660e\uff1a\u91cd\u7f6e\u8fde\u63a5\u7f13\u5b58,\u8d1f\u8f7d\u6700\u592710M\nMETHOD: GET\nURI: http://be_host:be_http_port/api/reset_rpc_channel/{endpoints}\n")),(0,a.yg)("h2",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl -X GET "http://host:port/api/check_rpc_channel/host2/8060/1024000"\ncurl -X GET "http://host:port/api/reset_rpc_channel/all"\n')))}d.isMDXComponent=!0}}]);