"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10742],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>_});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},y=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,_=p["".concat(o,".").concat(g)]||p[g]||s[g]||c;return t?n.createElement(_,l(l({ref:a},y),{},{components:t})):n.createElement(_,l({ref:a},y))}));function _(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=g;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<c;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},444993:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=t(58168),r=(t(296540),t(15680));const c={title:"Query Cache",language:"zh-CN"},l=void 0,i={unversionedId:"advanced/cache/query-cache",id:"version-2.1/advanced/cache/query-cache",title:"Query Cache",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/advanced/cache/query-cache.md",sourceDirName:"advanced/cache",slug:"/advanced/cache/query-cache",permalink:"/zh-CN/docs/advanced/cache/query-cache",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Query Cache",language:"zh-CN"},sidebar:"docs",previous:{title:"Partition Cache",permalink:"/zh-CN/docs/advanced/cache/partition-cache-manual"},next:{title:"SQL Cache",permalink:"/zh-CN/docs/advanced/cache/sql-cache-manual"}},o={},u=[{value:"\u9700\u6c42\u573a\u666f",id:"\u9700\u6c42\u573a\u666f",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u76d1\u63a7",id:"\u76d1\u63a7",level:2},{value:"\u76f8\u5173\u53c2\u6570",id:"\u76f8\u5173\u53c2\u6570",level:2}],y={toc:u},p="wrapper";function s(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"query-cache"},"Query Cache"),(0,r.yg)("h2",{id:"\u9700\u6c42\u573a\u666f"},"\u9700\u6c42\u573a\u666f"),(0,r.yg)("p",null,"\u5927\u90e8\u5206\u6570\u636e\u5206\u6790\u573a\u666f\u662f\u5199\u5c11\u8bfb\u591a\uff0c\u6570\u636e\u5199\u5165\u4e00\u6b21\uff0c\u591a\u6b21\u9891\u7e41\u8bfb\u53d6\uff0c\u6bd4\u5982\u4e00\u5f20\u62a5\u8868\u6d89\u53ca\u7684\u7ef4\u5ea6\u548c\u6307\u6807\uff0c\u6570\u636e\u5728\u51cc\u6668\u4e00\u6b21\u6027\u8ba1\u7b97\u597d\uff0c\u4f46\u6bcf\u5929\u6709\u6570\u767e\u751a\u81f3\u6570\u5343\u6b21\u7684\u9875\u9762\u8bbf\u95ee\uff0c\u56e0\u6b64\u975e\u5e38\u9002\u5408\u628a\u7ed3\u679c\u96c6\u7f13\u5b58\u8d77\u6765\u3002\u5728\u6570\u636e\u5206\u6790\u6216BI\u5e94\u7528\u4e2d\uff0c\u5b58\u5728\u4e0b\u9762\u7684\u4e1a\u52a1\u573a\u666f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u9ad8\u5e76\u53d1\u573a\u666f"),"\uff0cDoris\u53ef\u4ee5\u8f83\u597d\u7684\u652f\u6301\u9ad8\u5e76\u53d1\uff0c\u4f46\u5355\u53f0\u670d\u52a1\u5668\u65e0\u6cd5\u627f\u8f7d\u592a\u9ad8\u7684QPS"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u590d\u6742\u56fe\u8868\u7684\u770b\u677f"),"\uff0c\u590d\u6742\u7684Dashboard\u6216\u8005\u5927\u5c4f\u7c7b\u5e94\u7528\uff0c\u6570\u636e\u6765\u81ea\u591a\u5f20\u8868\uff0c\u6bcf\u4e2a\u9875\u9762\u6709\u6570\u5341\u4e2a\u67e5\u8be2\uff0c\u867d\u7136\u6bcf\u4e2a\u67e5\u8be2\u53ea\u6709\u6570\u5341\u6beb\u79d2\uff0c\u4f46\u662f\u603b\u4f53\u67e5\u8be2\u65f6\u95f4\u4f1a\u5728\u6570\u79d2"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u8d8b\u52bf\u5206\u6790"),"\uff0c\u7ed9\u5b9a\u65e5\u671f\u8303\u56f4\u7684\u67e5\u8be2\uff0c\u6307\u6807\u6309\u65e5\u663e\u793a\uff0c\u6bd4\u5982\u67e5\u8be2\u6700\u8fd17\u5929\u5185\u7684\u7528\u6237\u6570\u7684\u8d8b\u52bf\uff0c\u8fd9\u7c7b\u67e5\u8be2\u6570\u636e\u91cf\u5927\uff0c\u67e5\u8be2\u8303\u56f4\u5e7f\uff0c\u67e5\u8be2\u65f6\u95f4\u5f80\u5f80\u9700\u8981\u6570\u5341\u79d2"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7528\u6237\u91cd\u590d\u67e5\u8be2"),"\uff0c\u5982\u679c\u4ea7\u54c1\u6ca1\u6709\u9632\u91cd\u5237\u673a\u5236\uff0c\u7528\u6237\u56e0\u624b\u8bef\u6216\u5176\u4ed6\u539f\u56e0\u91cd\u590d\u5237\u65b0\u9875\u9762\uff0c\u5bfc\u81f4\u63d0\u4ea4\u5927\u91cf\u7684\u91cd\u590d\u7684SQL")),(0,r.yg)("p",null,"\u4ee5\u4e0a\u56db\u79cd\u573a\u666f\uff0c\u5728\u5e94\u7528\u5c42\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u628a\u67e5\u8be2\u7ed3\u679c\u653e\u5230Redis\u4e2d\uff0c\u5468\u671f\u6027\u7684\u66f4\u65b0\u7f13\u5b58\u6216\u8005\u7528\u6237\u624b\u5de5\u5237\u65b0\u7f13\u5b58\uff0c\u4f46\u662f\u8fd9\u4e2a\u65b9\u6848\u6709\u5982\u4e0b\u95ee\u9898\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6570\u636e\u4e0d\u4e00\u81f4"),"\uff0c\u65e0\u6cd5\u611f\u77e5\u6570\u636e\u7684\u66f4\u65b0\uff0c\u5bfc\u81f4\u7528\u6237\u7ecf\u5e38\u770b\u5230\u65e7\u7684\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u547d\u4e2d\u7387\u4f4e"),"\uff0c\u7f13\u5b58\u6574\u4e2a\u67e5\u8be2\u7ed3\u679c\uff0c\u5982\u679c\u6570\u636e\u5b9e\u65f6\u5199\u5165\uff0c\u7f13\u5b58\u9891\u7e41\u5931\u6548\uff0c\u547d\u4e2d\u7387\u4f4e\u4e14\u7cfb\u7edf\u8d1f\u8f7d\u8f83\u91cd"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u989d\u5916\u6210\u672c"),"\uff0c\u5f15\u5165\u5916\u90e8\u7f13\u5b58\u7ec4\u4ef6\uff0c\u4f1a\u5e26\u6765\u7cfb\u7edf\u590d\u6742\u5ea6\uff0c\u589e\u52a0\u989d\u5916\u6210\u672c")),(0,r.yg)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.yg)("p",null,"\u672c\u5206\u533a\u7f13\u5b58\u7b56\u7565\u53ef\u4ee5\u89e3\u51b3\u4e0a\u9762\u7684\u95ee\u9898\uff0c\u4f18\u5148\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u7ec6\u5316\u7f13\u5b58\u7c92\u5ea6\uff0c\u63d0\u5347\u547d\u4e2d\u7387\uff0c\u56e0\u6b64\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u7528\u6237\u65e0\u9700\u62c5\u5fc3\u6570\u636e\u4e00\u81f4\u6027\uff0c\u901a\u8fc7\u7248\u672c\u6765\u63a7\u5236\u7f13\u5b58\u5931\u6548\uff0c\u7f13\u5b58\u7684\u6570\u636e\u548c\u4eceBE\u4e2d\u67e5\u8be2\u7684\u6570\u636e\u662f\u4e00\u81f4\u7684"),(0,r.yg)("li",{parentName:"ul"},"\u6ca1\u6709\u989d\u5916\u7684\u7ec4\u4ef6\u548c\u6210\u672c\uff0c\u7f13\u5b58\u7ed3\u679c\u5b58\u50a8\u5728BE\u7684\u5185\u5b58\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8c03\u6574\u7f13\u5b58\u5185\u5b58\u5927\u5c0f"),(0,r.yg)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u4e24\u79cd\u7f13\u5b58\u7b56\u7565\uff0cSQLCache\u548cPartitionCache\uff0c\u540e\u8005\u7f13\u5b58\u7c92\u5ea6\u66f4\u7ec6"),(0,r.yg)("li",{parentName:"ul"},"\u7528\u4e00\u81f4\u6027\u54c8\u5e0c\u89e3\u51b3BE\u8282\u70b9\u4e0a\u4e0b\u7ebf\u7684\u95ee\u9898\uff0cBE\u4e2d\u7684\u7f13\u5b58\u7b97\u6cd5\u662f\u6539\u8fdb\u7684LRU")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.yg)("p",null,"\u5f53\u524d\u652f\u6301 SQL Cache \u548c Partition Cache \u4e24\u79cd\u65b9\u5f0f\uff0c\u652f\u6301 OlapTable\u5185\u8868 \u548c Hive\u5916\u8868\u3002"),(0,r.yg)("p",null,"SQL Cache: \u53ea\u6709 SQL \u8bed\u53e5\u5b8c\u5168\u4e00\u81f4\u624d\u4f1a\u547d\u4e2d\u7f13\u5b58\uff0c\u8be6\u60c5\u89c1: sql-cache-manual.md"),(0,r.yg)("p",null,"Partition Cache: \u591a\u4e2a SQL \u4f7f\u7528\u76f8\u540c\u7684\u8868\u5206\u533a\u5373\u53ef\u547d\u4e2d\u7f13\u5b58\uff0c\u6240\u4ee5\u76f8\u6bd4 SQL Cache \u6709\u66f4\u9ad8\u7684\u547d\u4e2d\u7387\uff0c\u8be6\u60c5\u89c1: partition-cache-manual.md"),(0,r.yg)("h2",{id:"\u76d1\u63a7"},"\u76d1\u63a7"),(0,r.yg)("p",null,"FE\u7684\u76d1\u63a7\u9879\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"query_table            //Query\u4e2d\u6709\u8868\u7684\u6570\u91cf\nquery_olap_table       //Query\u4e2d\u6709Olap\u8868\u7684\u6570\u91cf\ncache_mode_sql         //\u8bc6\u522b\u7f13\u5b58\u6a21\u5f0f\u4e3asql\u7684Query\u6570\u91cf\ncache_hit_sql          //\u6a21\u5f0f\u4e3asql\u7684Query\u547d\u4e2dCache\u7684\u6570\u91cf\nquery_mode_partition   //\u8bc6\u522b\u7f13\u5b58\u6a21\u5f0f\u4e3aPartition\u7684Query\u6570\u91cf\ncache_hit_partition    //\u901a\u8fc7Partition\u547d\u4e2d\u7684Query\u6570\u91cf\npartition_all          //Query\u4e2d\u626b\u63cf\u7684\u6240\u6709\u5206\u533a\npartition_hit          //\u901a\u8fc7Cache\u547d\u4e2d\u7684\u5206\u533a\u6570\u91cf\n\nCache\u547d\u4e2d\u7387     = \uff08cache_hit_sql + cache_hit_partition) / query_olap_table\nPartition\u547d\u4e2d\u7387 = partition_hit / partition_all\n")),(0,r.yg)("p",null,"BE\u7684\u76d1\u63a7\u9879\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"query_cache_memory_total_byte       //Cache\u5185\u5b58\u5927\u5c0f\nquery_query_cache_sql_total_count   //Cache\u7684SQL\u7684\u6570\u91cf\nquery_cache_partition_total_count   //Cache\u5206\u533a\u6570\u91cf\n\nSQL\u5e73\u5747\u6570\u636e\u5927\u5c0f       = cache_memory_total / cache_sql_total\nPartition\u5e73\u5747\u6570\u636e\u5927\u5c0f = cache_memory_total / cache_partition_total\n")),(0,r.yg)("p",null,"\u5176\u4ed6\u76d1\u63a7\uff1a \u53ef\u4ee5\u4eceGrafana\u4e2d\u67e5\u770bBE\u8282\u70b9\u7684CPU\u548c\u5185\u5b58\u6307\u6807\uff0cQuery\u7edf\u8ba1\u4e2d\u7684Query Percentile\u7b49\u6307\u6807\uff0c\u914d\u5408Cache\u53c2\u6570\u7684\u8c03\u6574\u6765\u8fbe\u6210\u4e1a\u52a1\u76ee\u6807\u3002"),(0,r.yg)("h2",{id:"\u76f8\u5173\u53c2\u6570"},"\u76f8\u5173\u53c2\u6570"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"cache_result_max_row_count")),(0,r.yg)("p",null,"\u67e5\u8be2\u7ed3\u679c\u96c6\u653e\u5165\u7f13\u5b58\u7684\u6700\u5927\u884c\u6570\uff0c\u9ed8\u8ba4 3000\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_result_max_row_count=3000\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"cache_result_max_data_size")),(0,r.yg)("p",null,"\u67e5\u8be2\u7ed3\u679c\u96c6\u653e\u5165\u7f13\u5b58\u7684\u6700\u5927\u6570\u636e\u5927\u5c0f\uff0c\u9ed8\u8ba4 30M\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\uff0c\u4f46\u5efa\u8bae\u4e0d\u8981\u8bbe\u7f6e\u8fc7\u5927\uff0c\u907f\u514d\u8fc7\u591a\u5360\u7528\u5185\u5b58\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u5927\u5c0f\u7684\u7ed3\u679c\u96c6\u4e0d\u4f1a\u88ab\u7f13\u5b58\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_result_max_data_size=31457280\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"cache_last_version_interval_second")),(0,r.yg)("p",null,"\u7f13\u5b58\u7684\u67e5\u8be2\u5206\u533a\u6700\u65b0\u7248\u672c\u79bb\u73b0\u5728\u7684\u6700\u5c0f\u65f6\u95f4\u95f4\u9694\uff0c\u53ea\u6709\u5927\u4e8e\u8fd9\u4e2a\u95f4\u9694\u6ca1\u6709\u88ab\u66f4\u65b0\u7684\u5206\u533a\u7684\u67e5\u8be2\u7ed3\u679c\u624d\u4f1a\u88ab\u7f13\u5b58\uff0c\u9ed8\u8ba4 30\uff0c\u5355\u4f4d\u79d2\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_last_version_interval_second=30\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"query_cache_max_size_mb \u548c query_cache_elasticity_size")),(0,r.yg)("p",null,"query_cache_max_size_mb \u7f13\u5b58\u7684\u5185\u5b58\u4e0a\u9650\uff0cquery_cache_elasticity_size \u7f13\u5b58\u53ef\u62c9\u4f38\u7684\u5185\u5b58\u5927\u5c0f\uff0cBE\u4e0a\u7684\u7f13\u5b58\u603b\u5927\u5c0f\u8d85\u8fc7 query_cache_max_size + cache_elasticity_size \u540e\u4f1a\u5f00\u59cb\u6e05\u7406\uff0c\u5e76\u628a\u5185\u5b58\u63a7\u5236\u5230 query_cache_max_size \u4ee5\u4e0b\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u6839\u636eBE\u8282\u70b9\u6570\u91cf\uff0c\u8282\u70b9\u5185\u5b58\u5927\u5c0f\uff0c\u548c\u7f13\u5b58\u547d\u4e2d\u7387\u6765\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u53c2\u6570\u3002\u8ba1\u7b97\u65b9\u6cd5\uff1a\u5047\u5982\u7f13\u5b5810000\u4e2aQuery\uff0c\u6bcf\u4e2aQuery\u7f13\u5b581000\u884c\uff0c\u6bcf\u884c\u662f128\u4e2a\u5b57\u8282\uff0c\u5206\u5e03\u572810\u53f0BE\u4e0a\uff0c\u5219\u6bcf\u4e2aBE\u9700\u8981\u7ea6128M\u5185\u5b58\uff0810000 ",(0,r.yg)("em",{parentName:"p"}," 1000 ")," 128/10\uff09\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim be/conf/be.conf\nquery_cache_max_size_mb=256\nquery_cache_elasticity_size_mb=128\n")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"cache_max_partition_count")),(0,r.yg)("p",null,"Partition Cache \u72ec\u6709\u7684\u53c2\u6570\u3002BE\u6700\u5927\u5206\u533a\u6570\u91cf\uff0c\u6307\u6bcf\u4e2aSQL\u5bf9\u5e94\u7684\u6700\u5927\u5206\u533a\u6570\uff0c\u5982\u679c\u662f\u6309\u65e5\u671f\u5206\u533a\uff0c\u80fd\u7f13\u5b582\u5e74\u591a\u7684\u6570\u636e\uff0c\u5047\u5982\u60f3\u4fdd\u7559\u66f4\u957f\u65f6\u95f4\u7684\u7f13\u5b58\uff0c\u8bf7\u628a\u8fd9\u4e2a\u53c2\u6570\u8bbe\u7f6e\u5f97\u66f4\u5927\uff0c\u540c\u65f6\u4fee\u6539\u53c2\u6570 cache_result_max_row_count \u548c cache_result_max_data_size\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim be/conf/be.conf\ncache_max_partition_count=1024\n")))}s.isMDXComponent=!0}}]);