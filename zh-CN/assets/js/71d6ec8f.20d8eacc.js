"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[38979],{15680:(e,r,o)=>{o.d(r,{xA:()=>g,yg:()=>c});var l=o(296540);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,l)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function u(e,r){if(null==e)return{};var o,l,a=function(e,r){if(null==e)return{};var o,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)o=n[l],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)o=n[l],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var t=l.createContext({}),i=function(e){var r=l.useContext(t),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},g=function(e){var r=i(e.components);return l.createElement(t.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return l.createElement(l.Fragment,{},r)}},y=l.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,t=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),m=i(o),y=a,c=m["".concat(t,".").concat(y)]||m[y]||d[y]||n;return o?l.createElement(c,p(p({ref:r},g),{},{components:o})):l.createElement(c,p({ref:r},g))}));function c(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,p=new Array(n);p[0]=y;var u={};for(var t in r)hasOwnProperty.call(r,t)&&(u[t]=r[t]);u.originalType=e,u[m]="string"==typeof e?e:a,p[1]=u;for(var i=2;i<n;i++)p[i]=o[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,o)}y.displayName="MDXCreateElement"},623262:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>t,contentTitle:()=>p,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>i});var l=o(58168),a=(o(296540),o(15680));const n={title:"WORKLOAD GROUP",language:"zh-CN"},p=void 0,u={unversionedId:"admin-manual/workload-group",id:"version-2.1/admin-manual/workload-group",title:"WORKLOAD GROUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/workload-group.md",sourceDirName:"admin-manual",slug:"/admin-manual/workload-group",permalink:"/zh-CN/docs/admin-manual/workload-group",draft:!1,tags:[],version:"2.1",frontMatter:{title:"WORKLOAD GROUP",language:"zh-CN"},sidebar:"docs",previous:{title:"rowsets",permalink:"/zh-CN/docs/admin-manual/system-table/rowsets"},next:{title:"\u591a\u79df\u6237\u548c\u8d44\u6e90\u5212\u5206",permalink:"/zh-CN/docs/admin-manual/multi-tenant"}},t={},i=[{value:"\u7248\u672c\u8bf4\u660e",id:"\u7248\u672c\u8bf4\u660e",level:2},{value:"\u5347\u7ea7\u5230 2.0 \u7248\u672c",id:"\u5347\u7ea7\u5230-20-\u7248\u672c",level:4},{value:"\u5347\u7ea7\u5230 2.1 \u7248\u672c",id:"\u5347\u7ea7\u5230-21-\u7248\u672c",level:4},{value:"workload group \u5c5e\u6027",id:"workload-group-\u5c5e\u6027",level:2},{value:"\u914d\u7f6e cgroup v1 \u7684\u73af\u5883",id:"\u914d\u7f6e-cgroup-v1-\u7684\u73af\u5883",level:2},{value:"workload group \u4f7f\u7528",id:"workload-group-\u4f7f\u7528",level:2},{value:"\u67e5\u8be2\u6392\u961f\u529f\u80fd",id:"\u67e5\u8be2\u6392\u961f\u529f\u80fd",level:3},{value:"\u914d\u7f6e CPU \u7684\u786c\u9650",id:"\u914d\u7f6e-cpu-\u7684\u786c\u9650",level:3},{value:"CPU \u8f6f\u786c\u9650\u6a21\u5f0f\u5207\u6362\u7684\u8bf4\u660e",id:"cpu-\u8f6f\u786c\u9650\u6a21\u5f0f\u5207\u6362\u7684\u8bf4\u660e",level:3}],g={toc:i},m="wrapper";function d(e){let{components:r,...o}=e;return(0,a.yg)(m,(0,l.A)({},g,o,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"workload-group"},"WORKLOAD GROUP"),(0,a.yg)("version",{since:"dev"}),(0,a.yg)("p",null,"workload group \u53ef\u9650\u5236\u7ec4\u5185\u4efb\u52a1\u5728\u5355\u4e2a be \u8282\u70b9\u4e0a\u7684\u8ba1\u7b97\u8d44\u6e90\u548c\u5185\u5b58\u8d44\u6e90\u7684\u4f7f\u7528\u3002\u5f53\u524d\u652f\u6301 query \u7ed1\u5b9a\u5230 workload group\u3002"),(0,a.yg)("h2",{id:"\u7248\u672c\u8bf4\u660e"},"\u7248\u672c\u8bf4\u660e"),(0,a.yg)("p",null,"Workload Group \u662f\u4ece 2.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u7684\u529f\u80fd\uff0cWorkload Group \u5728 2.0 \u7248\u672c\u548c 2.1 \u7248\u672c\u7684\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff0c2.0 \u7248\u672c\u7684 Workload Group \u4e0d\u4f9d\u8d56 CGroup\uff0c\u800c 2.1 \u7248\u672c\u7684 Workload Group \u4f9d\u8d56 CGroup\uff0c\u56e0\u6b64\u4f7f\u7528 2.1 \u7248\u672c\u7684 Workload Group \u65f6\u8981\u914d\u7f6e CGroup \u7684\u73af\u5883\u3002"),(0,a.yg)("h4",{id:"\u5347\u7ea7\u5230-20-\u7248\u672c"},"\u5347\u7ea7\u5230 2.0 \u7248\u672c"),(0,a.yg)("p",null,"1 \u5982\u679c\u662f\u4ece 1.2 \u7248\u672c\u5347\u7ea7\u5230 2.0 \u7248\u672c\u65f6\uff0c\u5efa\u8bae Doris \u96c6\u7fa4\u6574\u4f53\u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u518d\u5f00\u542f WorkloadGroup \u529f\u80fd\u3002\u56e0\u4e3a\u5982\u679c\u53ea\u5347\u7ea7\u5355\u53f0 Follower \u5c31\u5f00\u542f\u6b64\u529f\u80fd\uff0c\u7531\u4e8e Master \u7684 FE \u4ee3\u7801\u8fd8\u6ca1\u6709\u66f4\u65b0\uff0c\u6b64\u65f6 Doris \u96c6\u7fa4\u4e2d\u5e76\u6ca1\u6709 Workload Group \u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u5df2\u5347\u7ea7\u7684 Follower \u8282\u70b9\u7684\u67e5\u8be2\u5931\u8d25\u3002\u5efa\u8bae\u7684\u5347\u7ea7\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5148\u628a Doris \u96c6\u7fa4\u6574\u4f53\u4ee3\u7801\u5347\u7ea7\u5230 2.0 \u7248\u672c\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u518d\u6839\u636e\u4e0b\u6587\u4e2d",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"workload group \u4f7f\u7528")),"\u7684\u7ae0\u8282\u5f00\u59cb\u4f7f\u7528\u8be5\u529f\u80fd\u3002")),(0,a.yg)("h4",{id:"\u5347\u7ea7\u5230-21-\u7248\u672c"},"\u5347\u7ea7\u5230 2.1 \u7248\u672c"),(0,a.yg)("p",null,"2 \u5982\u679c\u4ee3\u7801\u7248\u672c\u662f\u4ece 2.0 \u5347\u7ea7\u5230 2.1 \u7684\uff0c\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,a.yg)("p",null,"\u60c5\u51b5 1\uff1a\u5728 2.1 \u7248\u672c\u5982\u679c\u5df2\u7ecf\u4f7f\u7528\u4e86 Workload Group \u529f\u80fd\uff0c\u90a3\u4e48\u53ea\u9700\u8981\u53c2\u8003\u4e0b\u6587\u4e2d\u914d\u7f6e cgroup v1 \u7684\u6d41\u7a0b\u5373\u53ef\u4f7f\u7528\u65b0\u7248\u672c\u7684 Workload Group \u529f\u80fd\u3002"),(0,a.yg)("p",null,"\u60c5\u51b5 2\uff1a\u5982\u679c\u5728 2.0 \u7248\u672c\u6ca1\u6709\u4f7f\u7528 Workload Group \u529f\u80fd\uff0c\u90a3\u4e48\u4e5f\u9700\u8981\u5148\u628a Doris \u96c6\u7fa4\u6574\u4f53\u5347\u7ea7\u5230 2.1 \u7248\u672c\u540e\uff0c\u518d\u6839\u636e\u4e0b\u6587\u7684",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"workload group \u4f7f\u7528")),"\u7684\u7ae0\u8282\u5f00\u59cb\u4f7f\u7528\u8be5\u529f\u80fd\u3002"),(0,a.yg)("h2",{id:"workload-group-\u5c5e\u6027"},"workload group \u5c5e\u6027"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"cpu_share: \u53ef\u9009\uff0c\u9ed8\u8ba4\u503c\u4e3a 1024\uff0c\u53d6\u503c\u8303\u56f4\u662f\u6b63\u6574\u6570\u3002\u7528\u4e8e\u8bbe\u7f6e workload group \u83b7\u53d6 cpu \u65f6\u95f4\u7684\u591a\u5c11\uff0c\u53ef\u4ee5\u5b9e\u73b0 cpu \u8d44\u6e90\u8f6f\u9694\u79bb\u3002cpu_share \u662f\u76f8\u5bf9\u503c\uff0c\u8868\u793a\u6b63\u5728\u8fd0\u884c\u7684 workload group \u53ef\u83b7\u53d6 cpu \u8d44\u6e90\u7684\u6743\u91cd\u3002\u4f8b\u5982\uff0c\u7528\u6237\u521b\u5efa\u4e86 3 \u4e2a workload group g-a\u3001g-b \u548c g-c\uff0ccpu_share \u5206\u522b\u4e3a 10\u300130\u300140\uff0c\u67d0\u4e00\u65f6\u523b g-a \u548c g-b \u6b63\u5728\u8dd1\u4efb\u52a1\uff0c\u800c g-c \u6ca1\u6709\u4efb\u52a1\uff0c\u6b64\u65f6 g-a \u53ef\u83b7\u5f97 25% (10 / (10 + 30)) \u7684 cpu \u8d44\u6e90\uff0c\u800c g-b \u53ef\u83b7\u5f97 75% \u7684 cpu \u8d44\u6e90\u3002\u5982\u679c\u7cfb\u7edf\u53ea\u6709\u4e00\u4e2a workload group \u6b63\u5728\u8fd0\u884c\uff0c\u5219\u4e0d\u7ba1\u5176 cpu_share \u7684\u503c\u4e3a\u591a\u5c11\uff0c\u5b83\u90fd\u53ef\u83b7\u53d6\u5168\u90e8\u7684 cpu \u8d44\u6e90\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"memory_limit: \u53ef\u9009\uff0c\u9ed8\u8ba4\u503c 0%\uff0c\u4e0d\u9650\u5236\uff0c\u53d6\u503c\u8303\u56f4 1%~100%\uff0c\u7528\u4e8e\u8bbe\u7f6e workload group \u53ef\u4ee5\u4f7f\u7528 be \u5185\u5b58\u7684\u767e\u5206\u6bd4\u3002Workload Group \u53ef\u7528\u7684\u6700\u5927\u5185\u5b58\uff0c\u6240\u6709 group \u7684\u7d2f\u52a0\u503c\u4e0d\u53ef\u4ee5\u8d85\u8fc7 100%\uff0c\u901a\u5e38\u4e0e enable_memory_overcommit \u914d\u5408\u4f7f\u7528\u3002\u5982\u679c\u4e00\u4e2a\u673a\u5668\u7684\u5185\u5b58\u4e3a 64G\uff0cmem_limit=50%\uff0c\u90a3\u4e48\u8be5 group \u7684\u5b9e\u9645\u7269\u7406\u5185\u5b58=64G ",(0,a.yg)("em",{parentName:"p"}," 90%(be conf mem_limit) ")," 50%= 28.8G\uff0c\u8fd9\u91cc\u7684 90% \u662f BE \u8fdb\u7a0b\u7ea7\u522b\u7684 mem_limit \u53c2\u6570\uff0c\u9650\u5236\u6574\u4e2a BE \u8fdb\u7a0b\u7684\u5185\u5b58\u7528\u91cf\u3002\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u6240\u6709 Workload Group \u7684 memory_limit \u7684\u7d2f\u52a0\u503c\u4e0d\u80fd\u8d85\u8fc7 100%\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"enable_memory_overcommit: \u53ef\u9009\uff0c\u7528\u4e8e\u5f00\u542f workload group \u5185\u5b58\u8f6f\u9694\u79bb\uff0c\u9ed8\u8ba4\u4e3a true\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a false\uff0c\u5219\u8be5 workload group \u4e3a\u5185\u5b58\u786c\u9694\u79bb\uff0c\u7cfb\u7edf\u68c0\u6d4b\u5230 workload group \u5185\u5b58\u4f7f\u7528\u8d85\u51fa\u9650\u5236\u540e\u5c06\u7acb\u5373 cancel \u7ec4\u5185\u5185\u5b58\u5360\u7528\u6700\u5927\u7684\u82e5\u5e72\u4e2a\u4efb\u52a1\uff0c\u4ee5\u91ca\u653e\u8d85\u51fa\u7684\u5185\u5b58\uff1b\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u5219\u8be5 workload group \u4e3a\u5185\u5b58\u8f6f\u9694\u79bb\uff0c\u5982\u679c\u7cfb\u7edf\u6709\u7a7a\u95f2\u5185\u5b58\u8d44\u6e90\u5219\u8be5 workload group \u5728\u8d85\u51fa memory_limit \u7684\u9650\u5236\u540e\u53ef\u7ee7\u7eed\u4f7f\u7528\u7cfb\u7edf\u5185\u5b58\uff0c\u5728\u7cfb\u7edf\u603b\u5185\u5b58\u7d27\u5f20\u65f6\u4f1a cancel \u7ec4\u5185\u5185\u5b58\u5360\u7528\u6700\u5927\u7684\u82e5\u5e72\u4e2a\u4efb\u52a1\uff0c\u91ca\u653e\u90e8\u5206\u8d85\u51fa\u7684\u5185\u5b58\u4ee5\u7f13\u89e3\u7cfb\u7edf\u5185\u5b58\u538b\u529b\u3002\u5efa\u8bae\u5728\u6709 workload group \u5f00\u542f\u8be5\u914d\u7f6e\u65f6\uff0c\u6240\u6709 workload group \u7684 memory_limit \u603b\u548c\u4f4e\u4e8e 100%\uff0c\u5269\u4f59\u90e8\u5206\u7528\u4e8e workload group \u5185\u5b58\u8d85\u53d1\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"cpu_hard_limit\uff1a\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c -1%\uff0c\u4e0d\u9650\u5236\u3002\u53d6\u503c\u8303\u56f4 1%~100%\uff0cCPU \u786c\u9650\u5236\u6a21\u5f0f\u4e0b\uff0cWorkload Group \u6700\u5927\u53ef\u7528\u7684 CPU \u767e\u5206\u6bd4\uff0c\u4e0d\u7ba1\u5f53\u524d\u673a\u5668\u7684 CPU \u8d44\u6e90\u662f\u5426\u88ab\u7528\u6ee1\uff0cWorkload Group \u7684\u6700\u5927 CPU \u7528\u91cf\u90fd\u4e0d\u80fd\u8d85\u8fc7 cpu_hard_limit\uff0c\n\u6240\u6709 Workload Group \u7684 cpu_hard_limit \u7d2f\u52a0\u503c\u4e0d\u80fd\u8d85\u8fc7 100%\u30022.1 \u7248\u672c\u65b0\u589e\u5c5e\u6027")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"max_concurrency\uff1a\u53ef\u9009\uff0c\u6700\u5927\u67e5\u8be2\u5e76\u53d1\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a\u6574\u578b\u6700\u5927\u503c\uff0c\u4e5f\u5c31\u662f\u4e0d\u505a\u5e76\u53d1\u7684\u9650\u5236\u3002\u8fd0\u884c\u4e2d\u7684\u67e5\u8be2\u6570\u91cf\u8fbe\u5230\u8be5\u503c\u65f6\uff0c\u65b0\u6765\u7684\u67e5\u8be2\u4f1a\u8fdb\u5165\u6392\u961f\u7684\u903b\u8f91\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"max_queue_size\uff1a\u53ef\u9009\uff0c\u67e5\u8be2\u6392\u961f\u961f\u5217\u7684\u957f\u5ea6\uff0c\u5f53\u6392\u961f\u961f\u5217\u5df2\u6ee1\u65f6\uff0c\u65b0\u6765\u7684\u67e5\u8be2\u4f1a\u88ab\u62d2\u7edd\u3002\u9ed8\u8ba4\u503c\u4e3a 0\uff0c\u542b\u4e49\u662f\u4e0d\u6392\u961f\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"queue_timeout\uff1a\u53ef\u9009\uff0c\u67e5\u8be2\u5728\u6392\u961f\u961f\u5217\u4e2d\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\uff0c\u5982\u679c\u67e5\u8be2\u5728\u961f\u5217\u4e2d\u7684\u6392\u961f\u65f6\u95f4\u8d85\u8fc7\u8fd9\u4e2a\u503c\uff0c\u90a3\u4e48\u5c31\u4f1a\u76f4\u63a5\u629b\u51fa\u5f02\u5e38\u7ed9\u5ba2\u6237\u7aef\u3002\u9ed8\u8ba4\u503c\u4e3a 0\uff0c\u542b\u4e49\u662f\u4e0d\u6392\u961f\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"scan_thread_num\uff1a\u53ef\u9009\uff0c\u5f53\u524d workload group \u7528\u4e8e scan \u7684\u7ebf\u7a0b\u4e2a\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a -1\uff0c\u542b\u4e49\u662f\u4e0d\u751f\u6548\uff0c\u6b64\u65f6\u4ee5 be \u914d\u7f6e\u4e2d\u7684 scan \u7ebf\u7a0b\u6570\u4e3a\u51c6\u3002\u53d6\u503c\u4e3a\u5927\u4e8e 0 \u7684\u6574\u6570\u3002"))),(0,a.yg)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,a.yg)("p",null,"1 \u76ee\u524d\u6682\u4e0d\u652f\u6301 CPU \u7684\u8f6f\u9650\u548c\u786c\u9650\u7684\u540c\u65f6\u4f7f\u7528\uff0c\u4e00\u4e2a\u96c6\u7fa4\u67d0\u4e00\u65f6\u523b\u53ea\u80fd\u662f\u8f6f\u9650\u6216\u8005\u786c\u9650\uff0c\u4e0b\u6587\u4e2d\u4f1a\u63cf\u8ff0\u5207\u6362\u65b9\u6cd5\u3002"),(0,a.yg)("p",null,"2 \u6240\u6709\u5c5e\u6027\u5747\u4e3a\u53ef\u9009\uff0c\u4f46\u662f\u5728\u521b\u5efa Workload Group \u65f6\u9700\u8981\u6307\u5b9a\u81f3\u5c11\u4e00\u4e2a\u5c5e\u6027\u3002"),(0,a.yg)("h2",{id:"\u914d\u7f6e-cgroup-v1-\u7684\u73af\u5883"},"\u914d\u7f6e cgroup v1 \u7684\u73af\u5883"),(0,a.yg)("p",null,"Doris \u7684 2.0 \u7248\u672c\u4f7f\u7528\u57fa\u4e8e Doris \u7684\u8c03\u5ea6\u5b9e\u73b0 CPU \u8d44\u6e90\u7684\u9650\u5236\uff0c\u4f46\u662f\u4ece 2.1 \u7248\u672c\u8d77\uff0cDoris \u9ed8\u8ba4\u4f7f\u7528\u57fa\u4e8e CGroup v1 \u7248\u672c\u5bf9 CPU \u8d44\u6e90\u8fdb\u884c\u9650\u5236\uff08\u6682\u4e0d\u652f\u6301 CGroup v2\uff09\uff0c\u56e0\u6b64\u5982\u679c\u671f\u671b\u5728 2.1 \u7248\u672c\u5bf9 CPU \u8d44\u6e90\u8fdb\u884c\u7ea6\u675f\uff0c\u90a3\u4e48\u9700\u8981 BE \u6240\u5728\u7684\u8282\u70b9\u4e0a\u5df2\u7ecf\u5b89\u88c5\u597d CGroup v1 \u7684\u73af\u5883\u3002"),(0,a.yg)("p",null,"\u7528\u6237\u5982\u679c\u5728 2.0 \u7248\u672c\u4f7f\u7528\u4e86 Workload Group \u7684\u8f6f\u9650\u5e76\u5347\u7ea7\u5230\u4e86 2.1 \u7248\u672c\uff0c\u90a3\u4e48\u4e5f\u9700\u8981\u914d\u7f6e CGroup\uff0c\u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u8f6f\u9650\u5931\u6548\u3002"),(0,a.yg)("p",null,"\u5728\u4e0d\u914d\u7f6e cgroup \u7684\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 workload group \u9664 CPU \u9650\u5236\u5916\u7684\u6240\u6709\u529f\u80fd\u3002"),(0,a.yg)("p",null,"1 \u9996\u5148\u786e\u8ba4 BE \u6240\u5728\u8282\u70b9\u5df2\u7ecf\u5b89\u88c5\u597d CGroup v1 \u7248\u672c\uff0c\u786e\u8ba4\u5b58\u5728\u8def\u5f84",(0,a.yg)("inlineCode",{parentName:"p"},"/sys/fs/cgroup/cpu/"),"\u5373\u53ef"),(0,a.yg)("p",null,"2 \u5728 cgroup \u7684 cpu \u8def\u5f84\u4e0b\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a doris \u7684\u76ee\u5f55\uff0c\u8fd9\u4e2a\u76ee\u5f55\u540d\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u6307\u5b9a"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"mkdir /sys/fs/cgroup/cpu/doris")),(0,a.yg)("p",null,"3 \u9700\u8981\u4fdd\u8bc1 Doris \u7684 BE \u8fdb\u7a0b\u5bf9\u4e8e\u8fd9\u4e2a\u76ee\u5f55\u6709\u8bfb/\u5199/\u6267\u884c\u6743\u9650"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// \u4fee\u6539\u8fd9\u4e2a\u76ee\u5f55\u7684\u6743\u9650\u4e3a\u53ef\u8bfb\u53ef\u5199\u53ef\u6267\u884c\nchmod 770 /sys/fs/cgroup/cpu/doris\n\n// \u628a\u8fd9\u4e2a\u76ee\u5f55\u7684\u5f52\u5c5e\u5212\u5206\u7ed9doris\u7684\u8d26\u6237\nchonw -R doris:doris /sys/fs/cgroup/cpu/doris\n")),(0,a.yg)("p",null,"4 \u4fee\u6539 BE \u7684\u914d\u7f6e\uff0c\u6307\u5b9a cgroup \u7684\u8def\u5f84"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"doris_cgroup_cpu_path = /sys/fs/cgroup/cpu/doris\n")),(0,a.yg)("p",null,'5 \u91cd\u542f BE\uff0c\u5728\u65e5\u5fd7\uff08be.INFO\uff09\u53ef\u4ee5\u770b\u5230"add thread xxx to group"\u7684\u5b57\u6837\u4ee3\u8868\u914d\u7f6e\u6210\u529f'),(0,a.yg)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u76ee\u524d\u7684 workload group \u6682\u65f6\u4e0d\u652f\u6301\u4e00\u4e2a\u673a\u5668\u591a\u4e2a BE \u7684\u90e8\u7f72\u65b9\u5f0f\u3002"),(0,a.yg)("h2",{id:"workload-group-\u4f7f\u7528"},"workload group \u4f7f\u7528"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u624b\u52a8\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a normal \u7684 Workload Group\uff0c\u8fd9\u4e2a Workload Group \u4e3a\u7cfb\u7edf\u9ed8\u8ba4\u7684 Workload Group\uff0c\u4e0d\u53ef\u5220\u9664\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"create workload group if not exists normal \nproperties (\n    'cpu_share'='1024',\n    'memory_limit'='30%',\n    'enable_memory_overcommit'='true'\n);\n")),(0,a.yg)("p",null,"normal Group \u7684\u4f5c\u7528\u5728\u4e8e\uff0c\u5f53\u4f60\u4e0d\u4e3a\u67e5\u8be2\u6307\u5b9a Workload Group \u65f6\uff0c\u67e5\u8be2\u4f1a\u9ed8\u8ba4\u4f7f\u7528\u8be5 Group\uff0c\u4ece\u800c\u907f\u514d\u67e5\u8be2\u5931\u8d25\u3002"),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5f00\u542f experimental_enable_workload_group \u914d\u7f6e\u9879\uff0c\u5728 fe.conf \u4e2d\u8bbe\u7f6e\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"experimental_enable_workload_group=true\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u671f\u671b\u4f7f\u7528\u5176\u4ed6 group \u8fdb\u884c\u6d4b\u8bd5\uff0c\u90a3\u4e48\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 workload group\uff0c")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'create workload group if not exists g1\nproperties (\n    "cpu_share"="1024",\n    "memory_limit"="30%",\n    "enable_memory_overcommit"="true"\n);\n')),(0,a.yg)("p",null,"\u6b64\u65f6\u914d\u7f6e\u7684 CPU \u9650\u5236\u4e3a\u8f6f\u9650\u3002"),(0,a.yg)("p",null,"\u521b\u5efa workload group \u8be6\u7ec6\u53ef\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"},"CREATE-WORKLOAD-GROUP"),"\uff0c\u53e6\u5220\u9664 workload group \u53ef\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP"},"DROP-WORKLOAD-GROUP"),"\uff1b\u4fee\u6539 workload group \u53ef\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP"},"ALTER-WORKLOAD-GROUP"),"\uff1b\u67e5\u770b workload group \u53ef\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"../sql-manual/sql-functions/table-functions/workload-group"},"WORKLOAD_GROUPS()"),"\u548c",(0,a.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS"},"SHOW-WORKLOAD-GROUPS"),"\u3002"),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"\u5f00\u542f pipeline \u6267\u884c\u5f15\u64ce\uff0cworkload group cpu \u9694\u79bb\u57fa\u4e8e pipeline \u6267\u884c\u5f15\u64ce\u5b9e\u73b0\uff0c\u56e0\u6b64\u9700\u5f00\u542f session \u53d8\u91cf\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set experimental_enable_pipeline_engine = true;\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"\u7ed1\u5b9a workload group\u3002")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u901a\u8fc7\u8bbe\u7f6e user property \u5c06 user \u9ed8\u8ba4\u7ed1\u5b9a\u5230 workload group\uff0c\u9ed8\u8ba4\u4e3a",(0,a.yg)("inlineCode",{parentName:"li"},"normal"),":")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set property 'default_workload_group' = 'g1';\n")),(0,a.yg)("p",null,"\u5f53\u524d\u7528\u6237\u7684\u67e5\u8be2\u5c06\u9ed8\u8ba4\u4f7f\u7528'g1'\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u901a\u8fc7 session \u53d8\u91cf\u6307\u5b9a workload group, \u9ed8\u8ba4\u4e3a\u7a7a\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set workload_group = 'g2';\n")),(0,a.yg)("p",null,"session \u53d8\u91cf",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group"),"\u4f18\u5148\u4e8e user property ",(0,a.yg)("inlineCode",{parentName:"p"},"default_workload_group"),", \u5728",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group"),"\u4e3a\u7a7a\u65f6\uff0c\u67e5\u8be2\u5c06\u7ed1\u5b9a\u5230",(0,a.yg)("inlineCode",{parentName:"p"},"default_workload_group"),", \u5728 session \u53d8\u91cf",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group"),"\u4e0d\u4e3a\u7a7a\u65f6\uff0c\u67e5\u8be2\u5c06\u7ed1\u5b9a\u5230",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group"),"\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u662f\u975e admin \u7528\u6237\uff0c\u9700\u8981\u5148\u6267\u884c",(0,a.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS"},"SHOW-WORKLOAD-GROUPS")," \u786e\u8ba4\u4e0b\u5f53\u524d\u7528\u6237\u80fd\u5426\u770b\u5230\u8be5 workload group\uff0c\u4e0d\u80fd\u770b\u5230\u7684 workload group \u53ef\u80fd\u4e0d\u5b58\u5728\u6216\u8005\u5f53\u524d\u7528\u6237\u6ca1\u6709\u6743\u9650\uff0c\u6267\u884c\u67e5\u8be2\u65f6\u4f1a\u62a5\u9519\u3002\u7ed9 workload group \u6388\u6743\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Account-Management-Statements/GRANT"},"grant \u8bed\u53e5"),"\u3002"),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},"\u6267\u884c\u67e5\u8be2\uff0c\u67e5\u8be2\u5c06\u5173\u8054\u5230\u6307\u5b9a\u7684 workload group\u3002")),(0,a.yg)("h3",{id:"\u67e5\u8be2\u6392\u961f\u529f\u80fd"},"\u67e5\u8be2\u6392\u961f\u529f\u80fd"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'create workload group if not exists test_group\nproperties (\n    "cpu_share"="10",\n    "memory_limit"="30%",\n    "max_concurrency" = "10",\n    "max_queue_size" = "20",\n    "queue_timeout" = "3000"\n);\n')),(0,a.yg)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u76ee\u524d\u7684\u6392\u961f\u8bbe\u8ba1\u662f\u4e0d\u611f\u77e5 FE \u7684\u4e2a\u6570\u7684\uff0c\u6392\u961f\u7684\u53c2\u6570\u53ea\u5728\u5355 FE \u7c92\u5ea6\u751f\u6548\uff0c\u4f8b\u5982\uff1a"),(0,a.yg)("p",null,"\u4e00\u4e2a Doris \u96c6\u7fa4\u914d\u7f6e\u4e86\u4e00\u4e2a work load group\uff0c\u8bbe\u7f6e max_concurrency = 1\n\u5982\u679c\u96c6\u7fa4\u4e2d\u6709 1FE\uff0c\u90a3\u4e48\u8fd9\u4e2a workload group \u5728 Doris \u96c6\u7fa4\u89c6\u89d2\u770b\u540c\u65f6\u53ea\u4f1a\u8fd0\u884c\u4e00\u4e2a SQL\n\u5982\u679c\u6709 3 \u53f0 FE\uff0c\u90a3\u4e48\u5728 Doris \u96c6\u7fa4\u89c6\u89d2\u770b\u6700\u5927\u53ef\u8fd0\u884c\u7684 SQL \u4e2a\u6570\u4e3a 3"),(0,a.yg)("h3",{id:"\u914d\u7f6e-cpu-\u7684\u786c\u9650"},"\u914d\u7f6e CPU \u7684\u786c\u9650"),(0,a.yg)("p",null,"\u76ee\u524d Doris \u9ed8\u8ba4\u8fd0\u884c CPU \u7684\u8f6f\u9650\uff0c\u5982\u679c\u671f\u671b\u4f7f\u7528 Workload Group \u7684\u786c\u9650\u529f\u80fd\uff0c\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u6d41\u7a0b\u64cd\u4f5c\u3002"),(0,a.yg)("p",null,"1 \u5728 FE \u4e2d\u5f00\u542f CPU \u7684\u786c\u9650\u7684\u529f\u80fd\uff0c\u5982\u679c\u6709\u591a\u4e2a FE\uff0c\u90a3\u4e48\u9700\u8981\u5728\u6bcf\u4e2a FE \u4e0a\u90fd\u8fdb\u884c\u76f8\u540c\u64cd\u4f5c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'1 \u4fee\u6539\u78c1\u76d8\u4e0afe.conf\u7684\u914d\u7f6e\nexperimental_enable_cpu_hard_limit = true\n\n2 \u4fee\u6539\u5185\u5b58\u4e2d\u7684\u914d\u7f6e\nADMIN SET FRONTEND CONFIG ("enable_cpu_hard_limit" = "true");\n')),(0,a.yg)("p",null,"2 \u4fee\u6539 Workload Group \u7684 cpu_hard_limit \u5c5e\u6027"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"alter workload group group1 properties ( 'cpu_hard_limit'='20%' );\n")),(0,a.yg)("p",null,"3 \u67e5\u770b\u5f53\u524d\u7684 Workload Group \u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u770b\u5230\u5c3d\u7ba1\u6b64\u65f6 cpu_share \u7684\u503c\u53ef\u80fd\u4e0d\u4e3a 0\uff0c\u4f46\u662f\u7531\u4e8e\u5f00\u542f\u4e86\u786c\u9650\u6a21\u5f0f\uff0c\u90a3\u4e48\u67e5\u8be2\u5728\u6267\u884c\u65f6\u4e5f\u4f1a\u8d70 CPU \u7684\u786c\u9650\u3002\u4e5f\u5c31\u662f\u8bf4 CPU \u8f6f\u786c\u9650\u7684\u5f00\u5173\u4e0d\u5f71\u54cd\u5143\u6570\u636e\u7684\u4fee\u6539\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [(none)]>select name, cpu_share,memory_limit,enable_memory_overcommit,cpu_hard_limit from workload_groups() where name='group1';\n+--------+-----------+--------------+--------------------------+----------------+\n| Name   | cpu_share | memory_limit | enable_memory_overcommit | cpu_hard_limit |\n+--------+-----------+--------------+--------------------------+----------------+\n| group1 |        10 | 45%          | true                     | 20%            |\n+--------+-----------+--------------+--------------------------+----------------+\n1 row in set (0.03 sec)\n")),(0,a.yg)("h3",{id:"cpu-\u8f6f\u786c\u9650\u6a21\u5f0f\u5207\u6362\u7684\u8bf4\u660e"},"CPU \u8f6f\u786c\u9650\u6a21\u5f0f\u5207\u6362\u7684\u8bf4\u660e"),(0,a.yg)("p",null,"\u76ee\u524d Doris \u6682\u4e0d\u652f\u6301\u540c\u65f6\u8fd0\u884c CPU \u7684\u8f6f\u9650\u548c\u786c\u9650\uff0c\u4e00\u4e2a Doris \u96c6\u7fa4\u5728\u4efb\u610f\u65f6\u523b\u53ea\u80fd\u662f CPU \u8f6f\u9650\u6216\u8005 CPU \u786c\u9650\u3002\n\u7528\u6237\u53ef\u4ee5\u5728\u4e24\u79cd\u6a21\u5f0f\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\uff0c\u4e3b\u8981\u5207\u6362\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.yg)("p",null,"1 \u5047\u5982\u5f53\u524d\u7684\u96c6\u7fa4\u914d\u7f6e\u662f\u9ed8\u8ba4\u7684 CPU \u8f6f\u9650\u5236\uff0c\u7136\u540e\u671f\u671b\u6539\u6210 CPU \u7684\u786c\u9650\uff0c\u90a3\u4e48\u9996\u5148\u9700\u8981\u628a Workload Group \u7684 cpu_hard_limit \u53c2\u6570\u4fee\u6539\u6210\u4e00\u4e2a\u6709\u6548\u7684\u503c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"alter workload group group1 properties ( 'cpu_hard_limit'='20%' );\n")),(0,a.yg)("p",null,"\u9700\u8981\u4fee\u6539\u5f53\u524d\u96c6\u7fa4\u4e2d\u6240\u6709\u7684 Workload Group \u7684\u8fd9\u4e2a\u5c5e\u6027\uff0c\u6240\u6709 Workload Group \u7684 cpu_hard_limit \u7684\u7d2f\u52a0\u503c\u4e0d\u80fd\u8d85\u8fc7 100%\n\u7531\u4e8e CPU \u7684\u786c\u9650\u65e0\u6cd5\u7ed9\u51fa\u4e00\u4e2a\u6709\u6548\u7684\u9ed8\u8ba4\u503c\uff0c\u56e0\u6b64\u5982\u679c\u53ea\u6253\u5f00\u5f00\u5173\u4f46\u662f\u4e0d\u4fee\u6539\u5c5e\u6027\uff0c\u90a3\u4e48 CPU \u7684\u786c\u9650\u4e5f\u65e0\u6cd5\u751f\u6548\u3002"),(0,a.yg)("p",null,"2 \u5728\u6240\u6709 FE \u4e2d\u6253\u5f00 CPU \u786c\u9650\u7684\u5f00\u5173"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'1 \u4fee\u6539\u78c1\u76d8\u4e0afe.conf\u7684\u914d\u7f6e\nexperimental_enable_cpu_hard_limit = true\n\n2 \u4fee\u6539\u5185\u5b58\u4e2d\u7684\u914d\u7f6e\nADMIN SET FRONTEND CONFIG ("enable_cpu_hard_limit" = "true");\n')),(0,a.yg)("p",null,"\u5982\u679c\u7528\u6237\u671f\u671b\u4ece CPU \u7684\u786c\u9650\u5207\u6362\u56de CPU \u7684\u8f6f\u9650\uff0c\u90a3\u4e48\u53ea\u9700\u8981\u5728 FE \u4fee\u6539 enable_cpu_hard_limit \u7684\u503c\u4e3a false \u5373\u53ef\u3002\nCPU \u8f6f\u9650\u7684\u5c5e\u6027 cpu_share \u9ed8\u8ba4\u4f1a\u586b\u5145\u4e00\u4e2a\u6709\u6548\u503c 1024(\u5982\u679c\u4e4b\u524d\u672a\u6307\u5b9a cpu_share \u7684\u503c)\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e group \u7684\u4f18\u5148\u7ea7\u5bf9 cpu_share \u7684\u503c\u8fdb\u884c\u91cd\u65b0\u8c03\u6574\u3002"))}d.isMDXComponent=!0}}]);