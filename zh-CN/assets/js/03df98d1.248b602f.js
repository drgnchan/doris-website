"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[91356],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const l={title:"SHOW-BACKENDS",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS",title:"SHOW-BACKENDS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-BACKENDS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-BACKUP",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP"},next:{title:"SHOW-BROKER",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-BROKER"}},c={},s=[{value:"SHOW-BACKENDS",id:"show-backends",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-backends"},"SHOW-BACKENDS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW BACKENDS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b cluster \u5185\u7684 BE \u8282\u70b9"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKENDS;\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    1. LastStartTime \u8868\u793a\u6700\u8fd1\u4e00\u6b21 BE \u542f\u52a8\u65f6\u95f4\u3002\n    2. LastHeartbeat \u8868\u793a\u6700\u8fd1\u4e00\u6b21\u5fc3\u8df3\u3002\n    3. Alive \u8868\u793a\u8282\u70b9\u662f\u5426\u5b58\u6d3b\u3002\n    4. SystemDecommissioned \u4e3a true \u8868\u793a\u8282\u70b9\u6b63\u5728\u5b89\u5168\u4e0b\u7ebf\u4e2d\u3002\n    5. ClusterDecommissioned \u4e3a true \u8868\u793a\u8282\u70b9\u6b63\u5728\u51b2\u5f53\u524dcluster\u4e2d\u4e0b\u7ebf\u3002\n    6. TabletNum \u8868\u793a\u8be5\u8282\u70b9\u4e0a\u5206\u7247\u6570\u91cf\u3002\n    7. DataUsedCapacity \u8868\u793a\u5b9e\u9645\u7528\u6237\u6570\u636e\u6240\u5360\u7528\u7684\u7a7a\u95f4\u3002\n    8. AvailCapacity \u8868\u793a\u78c1\u76d8\u7684\u53ef\u4f7f\u7528\u7a7a\u95f4\u3002\n    9. TotalCapacity \u8868\u793a\u603b\u78c1\u76d8\u7a7a\u95f4\u3002TotalCapacity = AvailCapacity + DataUsedCapacity + \u5176\u4ed6\u975e\u7528\u6237\u6570\u636e\u6587\u4ef6\u5360\u7528\u7a7a\u95f4\u3002\n   10. UsedPct \u8868\u793a\u78c1\u76d8\u5df2\u4f7f\u7528\u91cf\u767e\u5206\u6bd4\u3002\n   11. ErrMsg \u7528\u4e8e\u663e\u793a\u5fc3\u8df3\u5931\u8d25\u65f6\u7684\u9519\u8bef\u4fe1\u606f\u3002\n   12. Status \u7528\u4e8e\u4ee5 JSON \u683c\u5f0f\u663e\u793aBE\u7684\u4e00\u4e9b\u72b6\u6001\u4fe1\u606f, \u76ee\u524d\u5305\u62ec\u6700\u540e\u4e00\u6b21BE\u6c47\u62a5\u5176tablet\u7684\u65f6\u95f4\u4fe1\u606f\u3002\n   13. HeartbeatFailureCounter\uff1a\u73b0\u5728\u5f53\u524d\u8fde\u7eed\u5931\u8d25\u7684\u5fc3\u8df3\u6b21\u6570\uff0c\u5982\u679c\u6b21\u6570\u8d85\u8fc7 `max_backend_heartbeat_failure_tolerance_count` \u914d\u7f6e\uff0c\u5219 isAlive \u5b57\u6bb5\u4f1a\u7f6e\u4e3a false\u3002\n   14. NodeRole\u7528\u4e8e\u5c55\u793a\u8282\u70b9\u89d2\u8272, \u73b0\u5728\u6709\u4e24\u79cd\u7c7b\u578b: Mix\u4ee3\u8868\u539f\u6765\u7684\u8282\u70b9\u7c7b\u578b, computation\u4ee3\u8868\u53ea\u505a\u8ba1\u7b97\u7684\u8282\u70b9\u7c7b\u578b.\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, BACKENDS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);