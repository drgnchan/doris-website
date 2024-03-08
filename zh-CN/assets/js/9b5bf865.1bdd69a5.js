"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19066],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},O=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),O=a,y=m["".concat(p,".").concat(O)]||m[O]||u[O]||l;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=O;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}O.displayName="MDXCreateElement"},495633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-PARTITIONS",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS",id:"version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS",title:"SHOW-PARTITIONS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-PARTITIONS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-WORKLOAD-GROUPS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS"},next:{title:"SHOW-FRONTENDS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-FRONTENDS"}},p={},c=[{value:"SHOW-PARTITIONS",id:"show-partitions",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-partitions"},"SHOW-PARTITIONS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW PARTITIONS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5206\u533a\u4fe1\u606f\u3002\u652f\u6301 Internal catalog \u548c Hive Catalog"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"}," SHOW [TEMPORARY] PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT];\n")),(0,a.yg)("p",null,"\u8bf4\u660e:"),(0,a.yg)("p",null,"\u5bf9\u4e8e Internal catalog\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u652f\u6301PartitionId,PartitionName,State,Buckets,ReplicationNum,LastConsistencyCheckTime\u7b49\u5217\u7684\u8fc7\u6ee4"),(0,a.yg)("li",{parentName:"ol"},"TEMPORARY\u6307\u5b9a\u5217\u51fa\u4e34\u65f6\u5206\u533a")),(0,a.yg)("version",{since:"dev"},(0,a.yg)("p",null,"\u5bf9\u4e8e Hive Catalog\uff1a\n\u652f\u6301\u8fd4\u56de\u6240\u6709\u5206\u533a\uff0c\u5305\u62ec\u591a\u7ea7\u5206\u533a")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6240\u6709\u975e\u4e34\u65f6\u5206\u533a\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PARTITIONS FROM example_db.table_name;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6240\u6709\u4e34\u65f6\u5206\u533a\u4fe1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW TEMPORARY PARTITIONS FROM example_db.table_name;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6307\u5b9a\u975e\u4e34\u65f6\u5206\u533a\u7684\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},' SHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6700\u65b0\u975e\u4e34\u65f6\u5206\u533a\u7684\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, PARTITIONS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);