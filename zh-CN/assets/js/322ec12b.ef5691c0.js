"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18455],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>s});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=p(t),d=r,s=y["".concat(o,".").concat(d)]||y[d]||g[d]||l;return t?a.createElement(s,c(c({ref:n},u),{},{components:t})):a.createElement(s,c({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[y]="string"==typeof e?e:r,c[1]=i;for(var p=2;p<l;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const l={title:"Partition Cache",language:"zh-CN"},c=void 0,i={unversionedId:"advanced/cache/partition-cache-manual",id:"advanced/cache/partition-cache-manual",title:"Partition Cache",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/cache/partition-cache-manual.md",sourceDirName:"advanced/cache",slug:"/advanced/cache/partition-cache-manual",permalink:"/zh-CN/docs/dev/advanced/cache/partition-cache-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Partition Cache",language:"zh-CN"},sidebar:"docs",previous:{title:"\u81ea\u52a8\u5206\u533a",permalink:"/zh-CN/docs/dev/advanced/partition/auto-partition"},next:{title:"Query Cache",permalink:"/zh-CN/docs/dev/advanced/cache/query-cache"}},o={},p=[{value:"\u9700\u6c42\u573a\u666f &amp; \u89e3\u51b3\u65b9\u6848",id:"\u9700\u6c42\u573a\u666f--\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u8bbe\u8ba1\u539f\u7406",id:"\u8bbe\u8ba1\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u672a\u5c3d\u4e8b\u9879",id:"\u672a\u5c3d\u4e8b\u9879",level:2}],u={toc:p},y="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"partition-cache"},"Partition Cache"),(0,r.yg)("p",null,"\u591a\u4e2a SQL \u4f7f\u7528\u76f8\u540c\u7684\u8868\u5206\u533a\u65f6\u53ef\u547d\u4e2d\u7f13\u5b58\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"**Partition Cache\u662f\u4e2a\u8bd5\u9a8c\u6027\u529f\u80fd\uff0c\u6ca1\u6709\u5f97\u5230\u5f88\u597d\u7684\u7ef4\u62a4\uff0c\u8c28\u614e\u4f7f\u7528**\n")),(0,r.yg)("h2",{id:"\u9700\u6c42\u573a\u666f--\u89e3\u51b3\u65b9\u6848"},"\u9700\u6c42\u573a\u666f & \u89e3\u51b3\u65b9\u6848"),(0,r.yg)("p",null,"\u89c1 query-cache.md\u3002"),(0,r.yg)("h2",{id:"\u8bbe\u8ba1\u539f\u7406"},"\u8bbe\u8ba1\u539f\u7406"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"SQL\u53ef\u4ee5\u5e76\u884c\u62c6\u5206\uff0cQ = Q1 \u222a Q2 ... \u222a Qn\uff0cR= R1 \u222a R2 ... \u222a Rn\uff0cQ\u4e3a\u67e5\u8be2\u8bed\u53e5\uff0cR\u4e3a\u7ed3\u679c\u96c6")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"SQL \u53ea\u4f7f\u7528DATE\u3001INT\u3001BIGINT\u7c7b\u578b\u7684\u5206\u533a\u5b57\u6bb5\u805a\u5408\uff0c\u4e14\u53ea\u626b\u63cf\u4e00\u4e2a\u5206\u533a\uff0c\u56e0\u6b64\u4e0d\u652f\u6301\u6309\u5929\u5206\u533a\uff0c\u53ea\u652f\u6301\u6309\u5e74\u3001\u6708\u5206\u533a\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u67e5\u8be2\u7ed3\u679c\u96c6\u4e2d\u90e8\u5206\u65e5\u671f\u7684\u7ed3\u679c\u7f13\u5b58\uff0c\u7136\u540e\u7f29\u51cf SQL \u4e2d\u626b\u63cf\u7684\u65e5\u671f\u8303\u56f4\uff0c\u672c\u8d28 PartitionCache \u5e76\u6ca1\u6709\u51cf\u5c11\u626b\u63cf\u7684\u5206\u533a\u6570\u91cf\uff0c\u800c\u4e14\u7f29\u51cf\u626b\u63cf\u7684\u65e5\u671f\u8303\u56f4\uff0c\u4ece\u800c\u51cf\u5c11\u626b\u63cf\u6570\u636e\u91cf\u3002"))),(0,r.yg)("p",null,"\u6b64\u5916\u4e00\u4e9b\u9650\u5236\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53ea\u652f\u6301\u6309\u5206\u533a\u5b57\u6bb5\u5206\u7ec4\uff0c\u4e0d\u652f\u6301\u6309\u5176\u4ed6\u5b57\u6bb5\u5206\u7ec4\uff0c\u6309\u5176\u4ed6\u5b57\u6bb5\u5206\u7ec4\uff0c\u8be5\u5206\u7ec4\u6570\u636e\u90fd\u6709\u53ef\u80fd\u88ab\u66f4\u65b0\uff0c\u4f1a\u5bfc\u81f4\u7f13\u5b58\u90fd\u5931\u6548")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53ea\u652f\u6301\u7ed3\u679c\u96c6\u7684\u524d\u534a\u90e8\u5206\u3001\u540e\u534a\u90e8\u5206\u4ee5\u53ca\u5168\u90e8\u547d\u4e2d\u7f13\u5b58\uff0c\u4e0d\u652f\u6301\u7ed3\u679c\u96c6\u88ab\u7f13\u5b58\u6570\u636e\u5206\u5272\u6210\u51e0\u4e2a\u90e8\u5206\uff0c\u4e14\u7ed3\u679c\u96c6\u7684\u65e5\u671f\u5fc5\u987b\u8fde\u7eed\uff0c\u5982\u679c\u67d0\u4e00\u5929\u5728\u7ed3\u679c\u96c6\u4e2d\u6ca1\u6709\u6570\u636e\uff0c\u90a3\u53ea\u6709\u8fd9\u4e00\u5929\u4e4b\u524d\u7684\u65e5\u671f\u4f1a\u88ab\u7f13\u5b58\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c predicate \u6709\u5206\u533a\u4e4b\u5916\u7684\u5217\uff0c\u90a3\u4e48\u5fc5\u987b\u7ed9\u5206\u533a predicate \u52a0\u4e0a\u62ec\u53f7 ",(0,r.yg)("inlineCode",{parentName:"p"},'where k1 = 1 and (key >= "2023-10-18" and key <= "2021-12-01")'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u8be2\u7684\u5929\u6570\u5fc5\u987b\u5927\u4e8e1\uff0c\u5c0f\u4e8ecache_result_max_row_count\uff0c\u5426\u5219\u65e0\u6cd5\u4f7f\u7528partition cache\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5206\u533a\u5b57\u6bb5\u7684 predicate \u53ea\u80fd\u662f key >= a and key <= b \u6216\u8005 key = a or key = b \u6216\u8005 key in(a,b,c)\u3002"))),(0,r.yg)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.yg)("p",null,"\u786e\u4fdd fe.conf \u7684 cache_enable_partition_mode=true (\u9ed8\u8ba4\u662ftrue)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_enable_partition_mode=true\n")),(0,r.yg)("p",null,"\u5728MySQL\u547d\u4ee4\u884c\u4e2d\u8bbe\u7f6e\u53d8\u91cf"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> set [global] enable_partition_cache=true;\n")),(0,r.yg)("p",null,"\u5982\u679c\u540c\u65f6\u5f00\u542f\u4e86\u4e24\u4e2a\u7f13\u5b58\u7b56\u7565\uff0c\u4e0b\u9762\u7684\u53c2\u6570\uff0c\u9700\u8981\u6ce8\u610f\u4e00\u4e0b:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"cache_last_version_interval_second=30\n")),(0,r.yg)("p",null,"\u5982\u679c\u5206\u533a\u7684\u6700\u65b0\u7248\u672c\u7684\u65f6\u95f4\u79bb\u73b0\u5728\u7684\u95f4\u9694\uff0c\u5927\u4e8ecache_last_version_interval_second\uff0c\u5219\u4f1a\u4f18\u5148\u628a\u6574\u4e2a\u67e5\u8be2\u7ed3\u679c\u7f13\u5b58\u3002\u5982\u679c\u5c0f\u4e8e\u8fd9\u4e2a\u95f4\u9694\uff0c\u5982\u679c\u7b26\u5408PartitionCache\u7684\u6761\u4ef6\uff0c\u5219\u6309PartitionCache\u6570\u636e\u3002"),(0,r.yg)("p",null,"\u5177\u4f53\u53c2\u6570\u4ecb\u7ecd\u548c\u672a\u5c3d\u4e8b\u9879\u89c1 query-cache.md\u3002"),(0,r.yg)("h2",{id:"\u672a\u5c3d\u4e8b\u9879"},"\u672a\u5c3d\u4e8b\u9879"),(0,r.yg)("p",null,"\u62c6\u5206\u4e3a\u53ea\u8bfb\u5206\u533a\u548c\u53ef\u66f4\u65b0\u5206\u533a\uff0c\u53ea\u8bfb\u5206\u533a\u7f13\u5b58\uff0c\u66f4\u65b0\u5206\u533a\u4e0d\u7f13\u5b58"),(0,r.yg)("p",null,"\u5982\u67e5\u8be2\u6700\u8fd17\u5929\u7684\u6bcf\u5929\u7528\u6237\u6570\uff0c\u5982\u6309\u65e5\u671f\u5206\u533a\uff0c\u6570\u636e\u53ea\u5199\u5f53\u5929\u5206\u533a\uff0c\u5f53\u5929\u4e4b\u5916\u7684\u5176\u4ed6\u5206\u533a\u7684\u6570\u636e\uff0c\u90fd\u662f\u56fa\u5b9a\u4e0d\u53d8\u7684\uff0c\u5728\u76f8\u540c\u7684\u67e5\u8be2SQL\u4e0b\uff0c\u67e5\u8be2\u67d0\u4e2a\u4e0d\u66f4\u65b0\u5206\u533a\u7684\u6307\u6807\u90fd\u662f\u56fa\u5b9a\u7684\u3002\u5982\u4e0b\uff0c\u57282020-03-09\u5f53\u5929\u67e5\u8be2\u524d7\u5929\u7684\u7528\u6237\u6570\uff0c2020-03-03\u81f32020-03-07\u7684\u6570\u636e\u6765\u81ea\u7f13\u5b58\uff0c2020-03-08\u7b2c\u4e00\u6b21\u67e5\u8be2\u6765\u81ea\u5206\u533a\uff0c\u540e\u7eed\u7684\u67e5\u8be2\u6765\u81ea\u7f13\u5b58\uff0c2020-03-09\u56e0\u4e3a\u5f53\u5929\u5728\u4e0d\u505c\u5199\u5165\uff0c\u6240\u4ee5\u6765\u81ea\u5206\u533a\u3002"),(0,r.yg)("p",null,"\u56e0\u6b64\uff0c\u67e5\u8be2N\u5929\u7684\u6570\u636e\uff0c\u6570\u636e\u66f4\u65b0\u6700\u8fd1\u7684D\u5929\uff0c\u6bcf\u5929\u53ea\u662f\u65e5\u671f\u8303\u56f4\u4e0d\u4e00\u6837\u76f8\u4f3c\u7684\u67e5\u8be2\uff0c\u53ea\u9700\u8981\u67e5\u8be2D\u4e2a\u5206\u533a\u5373\u53ef\uff0c\u5176\u4ed6\u90e8\u5206\u90fd\u6765\u81ea\u7f13\u5b58\uff0c\u53ef\u4ee5\u6709\u6548\u964d\u4f4e\u96c6\u7fa4\u8d1f\u8f7d\uff0c\u51cf\u5c11\u67e5\u8be2\u65f6\u95f4\u3002"),(0,r.yg)("p",null,"\u5b9e\u73b0\u539f\u7406\u793a\u4f8b:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> SELECT eventdate,count(userid) FROM testdb.appevent WHERE eventdate>="2020-03-03" AND eventdate<="2020-03-09" GROUP BY eventdate ORDER BY eventdate;\n+------------+-----------------+\n| eventdate  | count(`userid`) |\n+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n| 2020-03-08 |              40 | //\u7b2c\u4e00\u6b21\u6765\u81ea\u5206\u533a\uff0c\u540e\u7eed\u6765\u81ea\u7f13\u5b58\n| 2020-03-09 |              25 | //\u6765\u81ea\u5206\u533a\n+------------+-----------------+\n7 rows in set (0.02 sec)\n')),(0,r.yg)("p",null,"\u5728PartitionCache\u4e2d\uff0c\u7f13\u5b58\u7b2c\u4e00\u7ea7Key\u662f\u53bb\u6389\u4e86\u5206\u533a\u6761\u4ef6\u540e\u7684SQL\u7684128\u4f4dMD5\u7b7e\u540d\uff0c\u4e0b\u9762\u662f\u6539\u5199\u540e\u7684\u5f85\u7b7e\u540d\u7684SQL\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT eventdate,count(userid) FROM testdb.appevent GROUP BY eventdate ORDER BY eventdate;\n")),(0,r.yg)("p",null,"\u7f13\u5b58\u7684\u7b2c\u4e8c\u7ea7Key\u662f\u67e5\u8be2\u7ed3\u679c\u96c6\u7684\u5206\u533a\u5b57\u6bb5\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u4e0a\u9762\u67e5\u8be2\u7ed3\u679c\u7684eventdate\u5217\u7684\u5185\u5bb9\uff0c\u4e8c\u7ea7Key\u7684\u9644\u5c5e\u4fe1\u606f\u662f\u5206\u533a\u7684\u7248\u672c\u53f7\u548c\u7248\u672c\u66f4\u65b0\u65f6\u95f4\u3002"),(0,r.yg)("p",null,"\u4e0b\u9762\u6f14\u793a\u4e0a\u9762SQL\u57282020-03-09\u5f53\u5929\u7b2c\u4e00\u6b21\u6267\u884c\u7684\u6d41\u7a0b\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u6570\u636e")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n+------------+-----------------+\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u4eceBE\u4e2d\u83b7\u53d6\u6570\u636e\u7684SQL\u548c\u6570\u636e")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT eventdate,count(userid) FROM testdb.appevent WHERE eventdate>="2020-03-08" AND eventdate<="2020-03-09" GROUP BY eventdate ORDER BY eventdate;\n\n+------------+-----------------+\n| 2020-03-08 |              40 |\n+------------+-----------------+\n| 2020-03-09 |              25 | \n+------------+-----------------+\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u6700\u540e\u53d1\u9001\u7ed9\u7ec8\u7aef\u7684\u6570\u636e")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+------------+-----------------+\n| eventdate  | count(`userid`) |\n+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n| 2020-03-08 |              40 |\n| 2020-03-09 |              25 |\n+------------+-----------------+\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u53d1\u9001\u7ed9\u7f13\u5b58\u7684\u6570\u636e")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+------------+-----------------+\n| 2020-03-08 |              40 |\n+------------+-----------------+\n")),(0,r.yg)("p",null,"Partition\u7f13\u5b58\uff0c\u9002\u5408\u6309\u65e5\u671f\u5206\u533a\uff0c\u90e8\u5206\u5206\u533a\u5b9e\u65f6\u66f4\u65b0\uff0c\u67e5\u8be2SQL\u8f83\u4e3a\u56fa\u5b9a\u3002"),(0,r.yg)("p",null,"\u5206\u533a\u5b57\u6bb5\u4e5f\u53ef\u4ee5\u662f\u5176\u4ed6\u5b57\u6bb5\uff0c\u4f46\u662f\u9700\u8981\u4fdd\u8bc1\u53ea\u6709\u5c11\u91cf\u5206\u533a\u66f4\u65b0\u3002"))}g.isMDXComponent=!0}}]);