"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[83128],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const o={title:"PAD ROWSET",language:"en"},i=void 0,p={unversionedId:"admin-manual/http-actions/be/pad-rowset",id:"version-1.2/admin-manual/http-actions/be/pad-rowset",title:"PAD ROWSET",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/http-actions/be/pad-rowset.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/pad-rowset",permalink:"/docs/1.2/admin-manual/http-actions/be/pad-rowset",draft:!1,tags:[],version:"1.2",frontMatter:{title:"PAD ROWSET",language:"en"},sidebar:"docs",previous:{title:"RESTORE TABLET",permalink:"/docs/1.2/admin-manual/http-actions/be/restore-tablet"},next:{title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",permalink:"/docs/1.2/admin-manual/http-actions/be/tablet-migration-action"}},l={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"pad-rowset"},"PAD ROWSET"),(0,a.yg)("h2",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Pad one empty rowset as one substitute for error replica.\n\nMETHOD: POST\nURI: http://be_host:be_http_port/api/pad_rowset?tablet_id=xxx&start_version=xxx&end_version=xxx\n")),(0,a.yg)("h2",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl -X POST "http://hostname:8088/api/pad_rowset?tablet_id=123456\\&start_version=1111111\\$end_version=1111112"\n')),(0,a.yg)("h2",{id:"keyword"},"keyword"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ROWSET,TABLET,ROWSET,TABLET\n")))}u.isMDXComponent=!0}}]);