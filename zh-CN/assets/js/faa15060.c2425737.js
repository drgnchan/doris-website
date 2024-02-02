"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63096],{95788:(t,n,e)=>{e.d(n,{Iu:()=>c,yg:()=>m});var r=e(11504);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var l=r.createContext({}),p=function(t){var n=r.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},c=function(t){var n=p(t.components);return r.createElement(l.Provider,{value:n},t.children)},u="mdxType",b={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(e),d=a,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return e?r.createElement(m,o(o({ref:n},c),{},{components:e})):r.createElement(m,o({ref:n},c))}));function m(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=t,s[u]="string"==typeof t?t:a,o[1]=s;for(var p=2;p<i;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},56376:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=e(45072),a=(e(11504),e(95788));const i={title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",language:"zh-CN"},o=void 0,s={unversionedId:"admin-manual/http-actions/be/tablets_distribution",id:"version-1.2/admin-manual/http-actions/be/tablets_distribution",title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/be/tablets_distribution.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/tablets_distribution",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/be/tablets_distribution",draft:!1,tags:[],version:"1.2",frontMatter:{title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",language:"zh-CN"},sidebar:"docs",previous:{title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/be/tablet-migration-action"},next:{title:"Compaction Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/be/compaction-action"}},l={},p=[],c={toc:p},u="wrapper";function b(t){let{components:n,...e}=t;return(0,a.yg)(u,(0,r.c)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"get-tablets-distribution-between-different-disks"},"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS"),(0,a.yg)("p",null,"\u83b7\u53d6BE\u8282\u70b9\u4e0a\u6bcf\u4e00\u4e2apartition\u4e0b\u7684tablet\u5728\u4e0d\u540c\u78c1\u76d8\u4e0a\u7684\u5206\u5e03\u60c5\u51b5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u503c\u5c31\u662fBE\u8282\u70b9\u4e0a\u6bcf\u4e00\u4e2apartition\u4e0b\u7684tablet\u5728\u5404\u4e2a\u78c1\u76d8\u4e0a\u7684\u6570\u91cf\u5206\u5e03\uff0c\u53ea\u5305\u542btablet\u6570\u91cf\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n\n            ...\n\n        ]\n    },\n    count: ***\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition&partition_id=xxx\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u503c\u5c31\u662fBE\u8282\u70b9\u4e0a\u6307\u5b9aid\u7684partition\u4e0b\u7684tablet\u5728\u5404\u4e2a\u78c1\u76d8\u4e0a\u7684\u5206\u5e03\uff0c\u5305\u542btablet\u6570\u91cf\u4ee5\u53ca\u6bcf\u4e00\u4e2atablet\u7684id\u3001schema hash\u548ctablet size\u4fe1\u606f\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                        tablets:[\n                            {\n                                tablet_id:***,\n                                schema_hash:***,\n                                tablet_size:***\n                            },\n\n                            ...\n\n                        ]\n                    },\n\n                    ...\n\n                ]\n            }\n        ]\n    },\n    count: ***\n}\n')))}b.isMDXComponent=!0}}]);