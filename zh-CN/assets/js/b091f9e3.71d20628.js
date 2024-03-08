"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[44968],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>g});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),u=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(a),d=r,g=s["".concat(i,".").concat(d)]||s[d]||y[d]||l;return a?t.createElement(g,c(c({ref:n},p),{},{components:a})):t.createElement(g,c({ref:n},p))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[s]="string"==typeof e?e:r,c[1]=o;for(var u=2;u<l;u++)c[u]=a[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},626344:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=a(58168),r=(a(296540),a(15680));const l={title:"SQL Cache",language:"zh-CN"},c=void 0,o={unversionedId:"advanced/cache/sql-cache-manual",id:"version-2.1/advanced/cache/sql-cache-manual",title:"SQL Cache",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/advanced/cache/sql-cache-manual.md",sourceDirName:"advanced/cache",slug:"/advanced/cache/sql-cache-manual",permalink:"/zh-CN/docs/advanced/cache/sql-cache-manual",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SQL Cache",language:"zh-CN"},sidebar:"docs",previous:{title:"Query Cache",permalink:"/zh-CN/docs/advanced/cache/query-cache"},next:{title:"\u81ea\u52a8\u5206\u6876",permalink:"/zh-CN/docs/advanced/autobucket"}},i={},u=[{value:"\u9700\u6c42\u573a\u666f &amp; \u89e3\u51b3\u65b9\u6848",id:"\u9700\u6c42\u573a\u666f--\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u8bbe\u8ba1\u539f\u7406",id:"\u8bbe\u8ba1\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u7f13\u5b58\u6761\u4ef6",id:"\u7f13\u5b58\u6761\u4ef6",level:2},{value:"\u672a\u5c3d\u4e8b\u9879",id:"\u672a\u5c3d\u4e8b\u9879",level:2}],p={toc:u},s="wrapper";function y(e){let{components:n,...a}=e;return(0,r.yg)(s,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"sql-cache"},"SQL Cache"),(0,r.yg)("p",null,"SQL \u8bed\u53e5\u5b8c\u5168\u4e00\u81f4\u65f6\u5c06\u547d\u4e2d\u7f13\u5b58\u3002"),(0,r.yg)("h2",{id:"\u9700\u6c42\u573a\u666f--\u89e3\u51b3\u65b9\u6848"},"\u9700\u6c42\u573a\u666f & \u89e3\u51b3\u65b9\u6848"),(0,r.yg)("p",null,"\u89c1 query-cache.md\u3002"),(0,r.yg)("h2",{id:"\u8bbe\u8ba1\u539f\u7406"},"\u8bbe\u8ba1\u539f\u7406"),(0,r.yg)("p",null,"SQLCache\u6309SQL\u7684\u7b7e\u540d\u3001\u67e5\u8be2\u7684\u8868\u7684\u5206\u533aID\u3001\u5206\u533a\u6700\u65b0\u7248\u672c\u6765\u5b58\u50a8\u548c\u83b7\u53d6\u7f13\u5b58\u3002\u4e09\u8005\u7ec4\u5408\u786e\u5b9a\u4e00\u4e2a\u7f13\u5b58\u6570\u636e\u96c6\uff0c\u4efb\u4f55\u4e00\u4e2a\u53d8\u5316\u4e86\uff0c\u5982SQL\u6709\u53d8\u5316\uff0c\u5982\u67e5\u8be2\u5b57\u6bb5\u6216\u6761\u4ef6\u4e0d\u4e00\u6837\uff0c\u6216\u6570\u636e\u66f4\u65b0\u540e\u7248\u672c\u53d8\u5316\u4e86\uff0c\u4f1a\u5bfc\u81f4\u547d\u4e2d\u4e0d\u4e86\u7f13\u5b58\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u591a\u5f20\u8868Join\uff0c\u4f7f\u7528\u6700\u8fd1\u66f4\u65b0\u7684\u5206\u533aID\u548c\u6700\u65b0\u7684\u7248\u672c\u53f7\uff0c\u5982\u679c\u5176\u4e2d\u4e00\u5f20\u8868\u66f4\u65b0\u4e86\uff0c\u4f1a\u5bfc\u81f4\u5206\u533aID\u6216\u7248\u672c\u53f7\u4e0d\u4e00\u6837\uff0c\u4e5f\u4e00\u6837\u547d\u4e2d\u4e0d\u4e86\u7f13\u5b58\u3002"),(0,r.yg)("p",null,"SQLCache\uff0c\u66f4\u9002\u5408T+1\u66f4\u65b0\u7684\u573a\u666f\uff0c\u51cc\u6668\u6570\u636e\u66f4\u65b0\uff0c\u9996\u6b21\u67e5\u8be2\u4eceBE\u4e2d\u83b7\u53d6\u7ed3\u679c\u653e\u5165\u5230\u7f13\u5b58\u4e2d\uff0c\u540e\u7eed\u76f8\u540c\u67e5\u8be2\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u3002\u5b9e\u65f6\u66f4\u65b0\u6570\u636e\u4e5f\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f46\u662f\u53ef\u80fd\u5b58\u5728\u547d\u4e2d\u7387\u4f4e\u7684\u95ee\u9898\u3002"),(0,r.yg)("p",null,"\u5f53\u524d\u652f\u6301 OlapTable\u5185\u8868 \u548c Hive\u5916\u8868\u3002"),(0,r.yg)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.yg)("p",null,"\u786e\u4fddfe.conf\u7684cache_enable_sql_mode=true\uff08\u9ed8\u8ba4\u662ftrue\uff09"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_enable_sql_mode=true\n")),(0,r.yg)("p",null,"\u5728MySQL\u547d\u4ee4\u884c\u4e2d\u8bbe\u7f6e\u53d8\u91cf"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> set [global] enable_sql_cache=true;\n")),(0,r.yg)("p",null,"\u6ce8\uff1aglobal\u662f\u5168\u5c40\u53d8\u91cf\uff0c\u4e0d\u52a0\u6307\u5f53\u524d\u4f1a\u8bdd\u53d8\u91cf"),(0,r.yg)("h2",{id:"\u7f13\u5b58\u6761\u4ef6"},"\u7f13\u5b58\u6761\u4ef6"),(0,r.yg)("p",null,"\u7b2c\u4e00\u6b21\u67e5\u8be2\u540e\uff0c\u5982\u679c\u6ee1\u8db3\u4e0b\u9762\u4e09\u4e2a\u6761\u4ef6\uff0c\u67e5\u8be2\u7ed3\u679c\u5c31\u4f1a\u88ab\u7f13\u5b58\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"(\u5f53\u524d\u65f6\u95f4 - \u67e5\u8be2\u7684\u5206\u533a\u6700\u540e\u66f4\u65b0\u65f6\u95f4) \u5927\u4e8e fe.conf \u4e2d\u7684 cache_last_version_interval_second\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u8be2\u7ed3\u679c\u884c\u6570 \u5c0f\u4e8e fe.conf \u4e2d\u7684 cache_result_max_row_count\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u8be2\u7ed3\u679cbytes \u5c0f\u4e8e fe.conf \u4e2d\u7684 cache_result_max_data_size\u3002"))),(0,r.yg)("p",null,"\u5177\u4f53\u53c2\u6570\u4ecb\u7ecd\u548c\u672a\u5c3d\u4e8b\u9879\u89c1 query-cache.md\u3002"),(0,r.yg)("h2",{id:"\u672a\u5c3d\u4e8b\u9879"},"\u672a\u5c3d\u4e8b\u9879"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"SQL\u4e2d\u5305\u542b\u4ea7\u751f\u968f\u673a\u503c\u7684\u51fd\u6570\uff0c\u6bd4\u5982 random()\uff0c\u4f7f\u7528 QueryCache \u4f1a\u5bfc\u81f4\u67e5\u8be2\u7ed3\u679c\u5931\u53bb\u968f\u673a\u6027\uff0c\u6bcf\u6b21\u6267\u884c\u5c06\u5f97\u5230\u76f8\u540c\u7684\u7ed3\u679c\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7c7b\u4f3c\u7684SQL\uff0c\u4e4b\u524d\u67e5\u8be2\u4e862\u4e2a\u6307\u6807\uff0c\u73b0\u5728\u67e5\u8be23\u4e2a\u6307\u6807\uff0c\u662f\u5426\u53ef\u4ee5\u5229\u75282\u4e2a\u6307\u6807\u7684\u7f13\u5b58\uff1f \u76ee\u524d\u4e0d\u652f\u6301"))))}y.isMDXComponent=!0}}]);