"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52111],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,y=m["".concat(i,".").concat(g)]||m[g]||s[g]||r;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},231431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(58168),o=(n(296540),n(15680));const r={title:"\u963f\u91cc\u4e91 Max Compute",language:"zh-CN"},l=void 0,p={unversionedId:"lakehouse/multi-catalog/max-compute",id:"lakehouse/multi-catalog/max-compute",title:"\u963f\u91cc\u4e91 Max Compute",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/multi-catalog/max-compute.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/max-compute",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/max-compute",draft:!1,tags:[],version:"current",frontMatter:{title:"\u963f\u91cc\u4e91 Max Compute",language:"zh-CN"},sidebar:"docs",previous:{title:"\u963f\u91cc\u4e91 DLF",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/dlf"},next:{title:"Elasticsearch",permalink:"/zh-CN/docs/dev/lakehouse/multi-catalog/es"}},i={},c=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u8fde\u63a5 Max Compute",id:"\u8fde\u63a5-max-compute",level:2},{value:"\u9650\u989d",id:"\u9650\u989d",level:2},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u81ea\u5b9a\u4e49\u670d\u52a1\u5730\u5740",id:"\u81ea\u5b9a\u4e49\u670d\u52a1\u5730\u5740",level:2}],u={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u963f\u91cc\u4e91-maxcompute"},"\u963f\u91cc\u4e91 MaxCompute"),(0,o.yg)("p",null,"MaxCompute\u662f\u963f\u91cc\u4e91\u4e0a\u7684\u4f01\u4e1a\u7ea7SaaS\uff08Software as a Service\uff09\u6a21\u5f0f\u4e91\u6570\u636e\u4ed3\u5e93\u3002"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("a",{parentName:"p",href:"https://help.aliyun.com/zh/maxcompute/product-overview/what-is-maxcompute?spm=a2c4g.11174283.0.i1"},"\u4ec0\u4e48\u662f MaxCompute"))),(0,o.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Max Compute Catalog\u57fa\u4e8e",(0,o.yg)("a",{parentName:"li",href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-28?spm=a2c4g.11186623.0.0.376d66c2FNv6aS"},"Max Compute Tunnel SDK"),"\u5f00\u53d1\u3002\u67e5\u8be2\u6027\u80fd\u6709\u4e00\u5b9a\u9650\u5236\u3002"),(0,o.yg)("li",{parentName:"ol"},"\u5728\u4e00\u6b21\u67e5\u8be2\u4e2d\uff0c\u6bcf\u4e2aScan\u90fd\u4f1a\u521b\u5efaMax Compute\u7684DownloadSession\u5bf9\u8c61\uff0c\u5e76\u884c\u8bbf\u95eeMax Compute\u65f6\u6027\u80fd\u4f1a\u4e0b\u964d\uff0c\u5efa\u8bae\u4f7f\u7528Max Compute Catalog\u65f6\uff0c\u5c3d\u91cf\u51cf\u5c11\u67e5\u8be2\u7684\u5206\u533a\u6570\u91cf\u548c\u6570\u636e\u5927\u5c0f\u3002")),(0,o.yg)("h2",{id:"\u8fde\u63a5-max-compute"},"\u8fde\u63a5 Max Compute"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.region" = "cn-beijing",\n  "mc.default.project" = "your-project",\n  "mc.access_key" = "ak",\n  "mc.secret_key" = "sk"\n);\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.region"),"\uff1aMaxCompute\u5f00\u901a\u7684\u5730\u57df\u3002\u53ef\u4ee5\u4eceEndpoint\u4e2d\u627e\u5230\u5bf9\u5e94\u7684Region\uff0c\u53c2\u9605",(0,o.yg)("a",{parentName:"li",href:"https://help.aliyun.com/zh/maxcompute/user-guide/endpoints?spm=a2c4g.11186623.0.0"},"Endpoints"),"\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.default.project"),"\uff1aMaxCompute\u9879\u76ee\u3002\u53ef\u4ee5\u5728",(0,o.yg)("a",{parentName:"li",href:"https://maxcompute.console.aliyun.com/cn-beijing/project-list"},"MaxCompute\u9879\u76ee\u5217\u8868"),"\u4e2d\u521b\u5efa\u548c\u7ba1\u7406\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.access_key"),"\uff1aAccessKey\u3002\u53ef\u4ee5\u5728 ",(0,o.yg)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"\u963f\u91cc\u4e91\u63a7\u5236\u53f0")," \u4e2d\u521b\u5efa\u548c\u7ba1\u7406\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.secret_key"),"\uff1aSecretKey\u3002\u53ef\u4ee5\u5728 ",(0,o.yg)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"\u963f\u91cc\u4e91\u63a7\u5236\u53f0")," \u4e2d\u521b\u5efa\u548c\u7ba1\u7406\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.public_access"),": \u5f53\u914d\u7f6e\u4e86",(0,o.yg)("inlineCode",{parentName:"li"},'"mc.public_access"="true"'),"\uff0c\u53ef\u4ee5\u5f00\u542f\u516c\u7f51\u8bbf\u95ee\uff0c\u5efa\u8bae\u6d4b\u8bd5\u65f6\u4f7f\u7528\u3002")),(0,o.yg)("h2",{id:"\u9650\u989d"},"\u9650\u989d"),(0,o.yg)("p",null,"\u8fde\u63a5MaxCompute\u65f6\uff0c\u6309\u91cf\u4ed8\u8d39\u7684Quota\u67e5\u8be2\u5e76\u53d1\u548c\u4f7f\u7528\u91cf\u6709\u9650\uff0c\u5982\u9700\u589e\u52a0\u8d44\u6e90\uff0c\u8bf7\u53c2\u7167MaxCompute\u6587\u6863\u3002\u53c2\u89c1",(0,o.yg)("a",{parentName:"p",href:"https://help.aliyun.com/zh/maxcompute/user-guide/manage-quotas-in-the-new-maxcompute-console"},"\u914d\u989d\u7ba1\u7406"),"."),(0,o.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,o.yg)("p",null,"\u548c Hive Catalog \u4e00\u81f4\uff0c\u53ef\u53c2\u9605 ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/lakehouse/multi-catalog/hive"},"Hive Catalog")," \u4e2d ",(0,o.yg)("strong",{parentName:"p"},"\u5217\u7c7b\u578b\u6620\u5c04")," \u4e00\u8282\u3002"),(0,o.yg)("h2",{id:"\u81ea\u5b9a\u4e49\u670d\u52a1\u5730\u5740"},"\u81ea\u5b9a\u4e49\u670d\u52a1\u5730\u5740"),(0,o.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cMax Compute Catalog\u6839\u636eregion\u53bb\u9ed8\u8ba4\u751f\u6210\u516c\u7f51\u7684endpoint\u3002"),(0,o.yg)("p",null,"\u9664\u4e86\u9ed8\u8ba4\u7684endpoint\u5730\u5740\u5916\uff0cMax Compute Catalog\u4e5f\u652f\u6301\u5728\u5c5e\u6027\u4e2d\u81ea\u5b9a\u4e49\u670d\u52a1\u5730\u5740\u3002"),(0,o.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2a\u5c5e\u6027\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.odps_endpoint"),"\uff1aMax Compute Endpoint\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.tunnel_endpoint"),": Tunnel Endpoint\uff0cMax Compute Catalog\u4f7f\u7528Tunnel SDK\u83b7\u53d6\u6570\u636e\u3002")),(0,o.yg)("p",null,"Max Compute Endpoint\u548cTunnel Endpoint\u7684\u914d\u7f6e\u8bf7\u53c2\u89c1",(0,o.yg)("a",{parentName:"p",href:"https://help.aliyun.com/zh/maxcompute/user-guide/endpoints"},"\u5404\u5730\u57df\u53ca\u4e0d\u540c\u7f51\u7edc\u8fde\u63a5\u65b9\u5f0f\u4e0b\u7684Endpoint")),(0,o.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.region" = "cn-beijing",\n  "mc.default.project" = "your-project",\n  "mc.access_key" = "ak",\n  "mc.secret_key" = "sk"\n  "mc.odps_endpoint" = "http://service.cn-beijing.maxcompute.aliyun-inc.com/api",\n  "mc.tunnel_endpoint" = "http://dt.cn-beijing.maxcompute.aliyun-inc.com"\n);\n')))}s.isMDXComponent=!0}}]);