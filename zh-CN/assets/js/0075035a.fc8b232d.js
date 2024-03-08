"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[40382],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>s});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),d=g(a),m=r,s=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(s,i(i({ref:t},y),{},{components:a})):n.createElement(s,i({ref:t},y))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},181316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const l={title:"\u7d22\u5f15\u6982\u8ff0",language:"zh-CN"},i=void 0,o={unversionedId:"data-table/index/index-overview",id:"version-2.0/data-table/index/index-overview",title:"\u7d22\u5f15\u6982\u8ff0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/data-table/index/index-overview.md",sourceDirName:"data-table/index",slug:"/data-table/index/index-overview",permalink:"/zh-CN/docs/2.0/data-table/index/index-overview",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u7d22\u5f15\u6982\u8ff0",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/docs/2.0/data-table/best-practice"},next:{title:"\u5012\u6392\u7d22\u5f15",permalink:"/zh-CN/docs/2.0/data-table/index/inverted-index"}},p={},g=[{value:"\u524d\u7f00\u7d22\u5f15",id:"\u524d\u7f00\u7d22\u5f15",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u901a\u8fc7 Rollup \u6765\u8c03\u6574\u524d\u7f00\u7d22\u5f15",id:"\u901a\u8fc7-rollup-\u6765\u8c03\u6574\u524d\u7f00\u7d22\u5f15",level:2}],y={toc:g},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u7d22\u5f15\u6982\u8ff0"},"\u7d22\u5f15\u6982\u8ff0"),(0,r.yg)("p",null,"\u7d22\u5f15\u7528\u4e8e\u5e2e\u52a9\u5feb\u901f\u8fc7\u6ee4\u6216\u67e5\u627e\u6570\u636e\u3002"),(0,r.yg)("p",null,"\u76ee\u524d Doris \u4e3b\u8981\u652f\u6301\u4e24\u7c7b\u7d22\u5f15\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5185\u5efa\u7684\u667a\u80fd\u7d22\u5f15\uff0c\u5305\u62ec\u524d\u7f00\u7d22\u5f15\u548c ZoneMap \u7d22\u5f15\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u7528\u6237\u624b\u52a8\u521b\u5efa\u7684\u4e8c\u7ea7\u7d22\u5f15\uff0c\u5305\u62ec ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/data-table/index/inverted-index"},"\u5012\u6392\u7d22\u5f15"),"\u3001 ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/data-table/index/bloomfilter"},"bloomfilter\u7d22\u5f15")," \u548c ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.0/data-table/index/ngram-bloomfilter-index"},"ngram bloomfilter\u7d22\u5f15")," \u3002")),(0,r.yg)("p",null,"\u5176\u4e2d ZoneMap \u7d22\u5f15\u662f\u5728\u5217\u5b58\u683c\u5f0f\u4e0a\uff0c\u5bf9\u6bcf\u4e00\u5217\u81ea\u52a8\u7ef4\u62a4\u7684\u7d22\u5f15\u4fe1\u606f\uff0c\u5305\u62ec Min/Max\uff0cNull \u503c\u4e2a\u6570\u7b49\u7b49\u3002\u8fd9\u79cd\u7d22\u5f15\u5bf9\u7528\u6237\u900f\u660e\u3002"),(0,r.yg)("h2",{id:"\u524d\u7f00\u7d22\u5f15"},"\u524d\u7f00\u7d22\u5f15"),(0,r.yg)("p",null,"\u4e0d\u540c\u4e8e\u4f20\u7edf\u7684\u6570\u636e\u5e93\u8bbe\u8ba1\uff0cDoris \u4e0d\u652f\u6301\u5728\u4efb\u610f\u5217\u4e0a\u521b\u5efa\u7d22\u5f15\u3002Doris \u8fd9\u7c7b MPP \u67b6\u6784\u7684 OLAP \u6570\u636e\u5e93\uff0c\u901a\u5e38\u90fd\u662f\u901a\u8fc7\u63d0\u9ad8\u5e76\u53d1\uff0c\u6765\u5904\u7406\u5927\u91cf\u6570\u636e\u7684\u3002"),(0,r.yg)("p",null,"\u672c\u8d28\u4e0a\uff0cDoris \u7684\u6570\u636e\u5b58\u50a8\u5728\u7c7b\u4f3c SSTable\uff08Sorted String Table\uff09\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u3002\u8be5\u7ed3\u6784\u662f\u4e00\u79cd\u6709\u5e8f\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u6309\u7167\u6307\u5b9a\u7684\u5217\u8fdb\u884c\u6392\u5e8f\u5b58\u50a8\u3002\u5728\u8fd9\u79cd\u6570\u636e\u7ed3\u6784\u4e0a\uff0c\u4ee5\u6392\u5e8f\u5217\u4f5c\u4e3a\u6761\u4ef6\u8fdb\u884c\u67e5\u627e\uff0c\u4f1a\u975e\u5e38\u7684\u9ad8\u6548\u3002"),(0,r.yg)("p",null,"\u5728 Aggregate\u3001Unique \u548c Duplicate \u4e09\u79cd\u6570\u636e\u6a21\u578b\u4e2d\u3002\u5e95\u5c42\u7684\u6570\u636e\u5b58\u50a8\uff0c\u662f\u6309\u7167\u5404\u81ea\u5efa\u8868\u8bed\u53e5\u4e2d\uff0cAGGREGATE KEY\u3001UNIQUE KEY \u548c DUPLICATE KEY \u4e2d\u6307\u5b9a\u7684\u5217\u8fdb\u884c\u6392\u5e8f\u5b58\u50a8\u7684\u3002"),(0,r.yg)("p",null,"\u800c\u524d\u7f00\u7d22\u5f15\uff0c\u5373\u5728\u6392\u5e8f\u7684\u57fa\u7840\u4e0a\uff0c\u5b9e\u73b0\u7684\u4e00\u79cd\u6839\u636e\u7ed9\u5b9a\u524d\u7f00\u5217\uff0c\u5feb\u901f\u67e5\u8be2\u6570\u636e\u7684\u7d22\u5f15\u65b9\u5f0f\u3002"),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("p",null,"\u6211\u4eec\u5c06\u4e00\u884c\u6570\u636e\u7684\u524d ",(0,r.yg)("strong",{parentName:"p"},"36 \u4e2a\u5b57\u8282")," \u4f5c\u4e3a\u8fd9\u884c\u6570\u636e\u7684\u524d\u7f00\u7d22\u5f15\u3002\u5f53\u9047\u5230 VARCHAR \u7c7b\u578b\u65f6\uff0c\u524d\u7f00\u7d22\u5f15\u4f1a\u76f4\u63a5\u622a\u65ad\u3002\u6211\u4eec\u4e3e\u4f8b\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4ee5\u4e0b\u8868\u7ed3\u6784\u7684\u524d\u7f00\u7d22\u5f15\u4e3a user_id(8 Bytes) + age(4 Bytes) + message(prefix 20 Bytes)\u3002"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_id"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4ee5\u4e0b\u8868\u7ed3\u6784\u7684\u524d\u7f00\u7d22\u5f15\u4e3a user_name(20 Bytes)\u3002\u5373\u4f7f\u6ca1\u6709\u8fbe\u5230 36 \u4e2a\u5b57\u8282\uff0c\u56e0\u4e3a\u9047\u5230 VARCHAR\uff0c\u6240\u4ee5\u76f4\u63a5\u622a\u65ad\uff0c\u4e0d\u518d\u5f80\u540e\u7ee7\u7eed\u3002"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_name"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(20)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")))))),(0,r.yg)("p",null,"\u5f53\u6211\u4eec\u7684\u67e5\u8be2\u6761\u4ef6\uff0c\u662f",(0,r.yg)("strong",{parentName:"p"},"\u524d\u7f00\u7d22\u5f15\u7684\u524d\u7f00"),"\u65f6\uff0c\u53ef\u4ee5\u6781\u5927\u7684\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6\u3002\u6bd4\u5982\u5728\u7b2c\u4e00\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6267\u884c\u5982\u4e0b\u67e5\u8be2\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE user_id=1829239 and age=20\uff1b\n")),(0,r.yg)("p",null,"\u8be5\u67e5\u8be2\u7684\u6548\u7387\u4f1a",(0,r.yg)("strong",{parentName:"p"},"\u8fdc\u9ad8\u4e8e"),"\u5982\u4e0b\u67e5\u8be2\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE age=20\uff1b\n")),(0,r.yg)("p",null,"\u6240\u4ee5\u5728\u5efa\u8868\u65f6\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u6b63\u786e\u7684\u9009\u62e9\u5217\u987a\u5e8f\uff0c\u80fd\u591f\u6781\u5927\u5730\u63d0\u9ad8\u67e5\u8be2\u6548\u7387"),"\u3002"),(0,r.yg)("h2",{id:"\u901a\u8fc7-rollup-\u6765\u8c03\u6574\u524d\u7f00\u7d22\u5f15"},"\u901a\u8fc7 Rollup \u6765\u8c03\u6574\u524d\u7f00\u7d22\u5f15"),(0,r.yg)("p",null,"\u56e0\u4e3a\u5efa\u8868\u65f6\u5df2\u7ecf\u6307\u5b9a\u4e86\u5217\u987a\u5e8f\uff0c\u6240\u4ee5\u4e00\u4e2a\u8868\u53ea\u6709\u4e00\u79cd\u524d\u7f00\u7d22\u5f15\u3002\u8fd9\u5bf9\u4e8e\u4f7f\u7528\u5176\u4ed6\u4e0d\u80fd\u547d\u4e2d\u524d\u7f00\u7d22\u5f15\u7684\u5217\u4f5c\u4e3a\u6761\u4ef6\u8fdb\u884c\u7684\u67e5\u8be2\u6765\u8bf4\uff0c\u6548\u7387\u4e0a\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa ROLLUP \u6765\u4eba\u4e3a\u7684\u8c03\u6574\u5217\u987a\u5e8f\u3002\u8be6\u60c5\u53ef\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/data-table/hit-the-rollup"},"ROLLUP"),"\u3002"))}u.isMDXComponent=!0}}]);