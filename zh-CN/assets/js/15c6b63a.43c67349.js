"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70362],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>d});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),u=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),g=l,d=m["".concat(p,".").concat(g)]||m[g]||y[g]||r;return a?t.createElement(d,i(i({ref:n},c),{},{components:a})):t.createElement(d,i({ref:n},c))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},401294:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=a(58168),l=(a(296540),a(15680));const r={title:"\u53d8\u91cf",language:"zh-CN"},i=void 0,o={unversionedId:"advanced/variables-template",id:"advanced/variables-template",title:"\u53d8\u91cf",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/variables-template.md",sourceDirName:"advanced",slug:"/advanced/variables-template",permalink:"/zh-CN/docs/dev/advanced/variables-template",draft:!1,tags:[],version:"current",frontMatter:{title:"\u53d8\u91cf",language:"zh-CN"},sidebar:"docs",previous:{title:"\u53d8\u91cf",permalink:"/zh-CN/docs/dev/advanced/variables"},next:{title:"\u65f6\u533a",permalink:"/zh-CN/docs/dev/advanced/time-zone"}},p={},u=[{value:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b",id:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b",level:2},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:3},{value:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf",id:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf",level:3},{value:"\u652f\u6301\u7684\u53d8\u91cf",id:"\u652f\u6301\u7684\u53d8\u91cf",level:2}],c={toc:u},m="wrapper";function y(e){let{components:n,...a}=e;return(0,l.yg)(m,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5f53\u524d\u652f\u6301\u7684\u53d8\u91cf\uff08variables\uff09\u3002"),(0,l.yg)("p",null,"Doris \u4e2d\u7684\u53d8\u91cf\u53c2\u8003 MySQL \u4e2d\u7684\u53d8\u91cf\u8bbe\u7f6e\u3002\u4f46\u90e8\u5206\u53d8\u91cf\u4ec5\u7528\u4e8e\u517c\u5bb9\u4e00\u4e9b MySQL \u5ba2\u6237\u7aef\u534f\u8bae\uff0c\u5e76\u4e0d\u4ea7\u751f\u5176\u5728 MySQL \u6570\u636e\u5e93\u4e2d\u7684\u5b9e\u9645\u610f\u4e49\u3002"),(0,l.yg)("h2",{id:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b"},"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b"),(0,l.yg)("h3",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,l.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW VARIABLES [LIKE 'xxx'];")," \u67e5\u770b\u6240\u6709\u6216\u6307\u5b9a\u7684\u53d8\u91cf\u3002\u5982\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW VARIABLES;\nSHOW VARIABLES LIKE '%time_zone%';\n")),(0,l.yg)("h3",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,l.yg)("p",null,"\u90e8\u5206\u53d8\u91cf\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u751f\u6548\u6216\u4ec5\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u3002"),(0,l.yg)("p",null,"\u6ce8\u610f\uff0c\u5728 1.1 \u7248\u672c\u4e4b\u524d\uff0c\u8bbe\u7f6e\u5168\u5c40\u751f\u6548\u540e\uff0c\u540e\u7eed\u65b0\u7684\u4f1a\u8bdd\u8fde\u63a5\u4e2d\u4f1a\u6cbf\u7528\u8bbe\u7f6e\u503c\uff0c\u4f46\u5f53\u524d\u4f1a\u8bdd\u4e2d\u7684\u503c\u4e0d\u53d8\u3002\n\u800c\u5728 1.1 \u7248\u672c\uff08\u542b\uff09\u4e4b\u540e\uff0c\u8bbe\u7f6e\u5168\u5c40\u751f\u6548\u540e\uff0c\u540e\u7eed\u65b0\u7684\u4f1a\u8bdd\u8fde\u63a5\u4e2d\u4f1a\u6cbf\u7528\u8bbe\u7f6e\u503c\uff0c\u5f53\u524d\u4f1a\u8bdd\u4e2d\u7684\u503c\u4e5f\u4f1a\u6539\u53d8\u3002"),(0,l.yg)("p",null,"\u4ec5\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\uff0c\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SET var_name=xxx;")," \u8bed\u53e5\u6765\u8bbe\u7f6e\u3002\u5982\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'SET exec_mem_limit = 137438953472;\nSET forward_to_master = true;\nSET time_zone = "Asia/Shanghai";\n')),(0,l.yg)("p",null,"\u5168\u5c40\u751f\u6548\uff0c\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SET GLOBAL var_name=xxx;")," \u8bbe\u7f6e\u3002\u5982\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET GLOBAL exec_mem_limit = 137438953472\n")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6ce81\uff1a\u53ea\u6709 ADMIN \u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u53d8\u91cf\u7684\u5168\u5c40\u751f\u6548\u3002")),(0,l.yg)("p",null,"\u65e2\u652f\u6301\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u53c8\u652f\u6301\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"time_zone")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"wait_timeout")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"sql_mode")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"enable_profile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"query_timeout")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"insert_timeout"),(0,l.yg)("version",{since:"dev"})),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"exec_mem_limit")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"batch_size")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"allow_partition_column_nullable")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"insert_visible_timeout_ms")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"enable_fold_constant_by_be"))),(0,l.yg)("p",null,"\u53ea\u652f\u6301\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"default_rowset_type")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"default_password_lifetime")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"password_history")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"validate_password_policy"))),(0,l.yg)("p",null,"\u540c\u65f6\uff0c\u53d8\u91cf\u8bbe\u7f6e\u4e5f\u652f\u6301\u5e38\u91cf\u8868\u8fbe\u5f0f\u3002\u5982\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET exec_mem_limit = 10 * 1024 * 1024 * 1024;\nSET forward_to_master = concat('tr', 'u', 'e');\n")),(0,l.yg)("h3",{id:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf"},"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf"),(0,l.yg)("p",null,"\u5728\u4e00\u4e9b\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5bf9\u67d0\u4e9b\u67e5\u8be2\u6709\u9488\u5bf9\u6027\u7684\u8bbe\u7f6e\u53d8\u91cf\u3002 \u901a\u8fc7\u4f7f\u7528SET_VAR\u63d0\u793a\u53ef\u4ee5\u5728\u67e5\u8be2\u4e2d\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf\uff08\u5728\u5355\u4e2a\u8bed\u53e5\u5185\u751f\u6548\uff09\u3002\u4f8b\u5b50\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT /*+ SET_VAR(exec_mem_limit = 8589934592) */ name FROM people ORDER BY name;\nSELECT /*+ SET_VAR(query_timeout = 1, enable_partition_cache=true) */ sleep(3);\n")),(0,l.yg)("p",null,"\u6ce8\u610f\u6ce8\u91ca\u5fc5\u987b\u4ee5/*+ \u5f00\u5934\uff0c\u5e76\u4e14\u53ea\u80fd\u8ddf\u968f\u5728SELECT\u4e4b\u540e\u3002"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u53d8\u91cf"},"\u652f\u6301\u7684\u53d8\u91cf"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6ce8\uff1a"),(0,l.yg)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u5185\u5bb9\u7531 ",(0,l.yg)("inlineCode",{parentName:"p"},"docs/generate-config-and-variable-doc.sh")," \u81ea\u52a8\u751f\u6210\u3002"),(0,l.yg)("p",{parentName:"blockquote"},"\u5982\u9700\u4fee\u6539\uff0c\u8bf7\u4fee\u6539 ",(0,l.yg)("inlineCode",{parentName:"p"},"fe/fe-core/src/main/java/org/apache/doris/qe/SessionVariable.java")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"fe/fe-core/src/main/java/org/apache/doris/qe/GlobalVariable.java")," \u4e2d\u7684\u63cf\u8ff0\u4fe1\u606f\u3002")),(0,l.yg)("p",null,"<--DOC_PLACEHOLDER--\x3e"))}y.isMDXComponent=!0}}]);