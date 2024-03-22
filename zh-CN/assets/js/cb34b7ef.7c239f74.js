"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[76105],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>N});var l=a(296540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,l,i=function(e,n){if(null==e)return{};var a,l,i={},t=Object.keys(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=l.createContext({}),y=function(e){var n=l.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},g=function(e){var n=y(e.components);return l.createElement(o.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),m=y(a),u=i,N=m["".concat(o,".").concat(u)]||m[u]||s[u]||t;return a?l.createElement(N,r(r({ref:n},g),{},{components:a})):l.createElement(N,r({ref:n},g))}));function N(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,r=new Array(t);r[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[m]="string"==typeof e?e:i,r[1]=p;for(var y=2;y<t;y++)r[y]=a[y];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},798861:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>t,metadata:()=>p,toc:()=>y});var l=a(58168),i=(a(296540),a(15680));const t={title:"\u65f6\u533a",language:"zh-CN"},r=void 0,p={unversionedId:"query/query-variables/time-zone",id:"version-2.0/query/query-variables/time-zone",title:"\u65f6\u533a",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/query/query-variables/time-zone.md",sourceDirName:"query/query-variables",slug:"/query/query-variables/time-zone",permalink:"/zh-CN/docs/2.0/query/query-variables/time-zone",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u65f6\u533a",language:"zh-CN"},sidebar:"docs",previous:{title:"SQL Mode",permalink:"/zh-CN/docs/2.0/query/query-variables/sql-mode"},next:{title:"\u5168\u65b0\u4f18\u5316\u5668\u4ecb\u7ecd",permalink:"/zh-CN/docs/2.0/query/nereids/"}},o={},y=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5177\u4f53\u64cd\u4f5c",id:"\u5177\u4f53\u64cd\u4f5c",level:2},{value:"\u6570\u636e\u6765\u6e90",id:"\u6570\u636e\u6765\u6e90",level:2},{value:"\u65f6\u533a\u7684\u5f71\u54cd",id:"\u65f6\u533a\u7684\u5f71\u54cd",level:2},{value:"1. \u51fd\u6570",id:"1-\u51fd\u6570",level:3},{value:"2. \u65f6\u95f4\u7c7b\u578b\u7684\u503c",id:"2-\u65f6\u95f4\u7c7b\u578b\u7684\u503c",level:3},{value:"3. \u590f\u4ee4\u65f6",id:"3-\u590f\u4ee4\u65f6",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u65f6\u533a\u654f\u611f\u6570\u636e",id:"\u65f6\u533a\u654f\u611f\u6570\u636e",level:3},{value:"\u590f\u4ee4\u65f6",id:"\u590f\u4ee4\u65f6",level:3},{value:"\u6570\u636e\u66f4\u65b0",id:"\u6570\u636e\u66f4\u65b0",level:3},{value:"\u62d3\u5c55\u9605\u8bfb",id:"\u62d3\u5c55\u9605\u8bfb",level:2}],g={toc:y},m="wrapper";function s(e){let{components:n,...a}=e;return(0,i.yg)(m,(0,l.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Doris \u652f\u6301\u81ea\u5b9a\u4e49\u65f6\u533a\u8bbe\u7f6e"),(0,i.yg)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,i.yg)("p",null,"Doris \u5185\u90e8\u5b58\u5728\u4ee5\u4e0b\u4e24\u4e2a\u65f6\u533a\u76f8\u5173\u53c2\u6570\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"system_time_zone : \u5f53\u670d\u52a1\u5668\u542f\u52a8\u65f6\uff0c\u4f1a\u6839\u636e\u673a\u5668\u8bbe\u7f6e\u65f6\u533a\u81ea\u52a8\u8bbe\u7f6e\uff0c\u8bbe\u7f6e\u540e\u4e0d\u53ef\u4fee\u6539\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"time_zone : \u96c6\u7fa4\u5f53\u524d\u65f6\u533a\uff0c\u53ef\u4ee5\u4fee\u6539\u3002"))),(0,i.yg)("h2",{id:"\u5177\u4f53\u64cd\u4f5c"},"\u5177\u4f53\u64cd\u4f5c"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"show variables like '%time_zone%'")),(0,i.yg)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u65f6\u533a\u76f8\u5173\u914d\u7f6e")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"SET [global] time_zone = 'Asia/Shanghai'")),(0,i.yg)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u53ef\u4ee5\u8bbe\u7f6e session \u7ea7\u522b\u7684\u65f6\u533a\uff0c\u5982\u4f7f\u7528",(0,i.yg)("inlineCode",{parentName:"p"},"global"),"\u5173\u952e\u5b57\uff0c\u5219 Doris FE \u4f1a\u5c06\u53c2\u6570\u6301\u4e45\u5316\uff0c\u4e4b\u540e\u5bf9\u6240\u6709\u65b0 session \u751f\u6548\u3002"))),(0,i.yg)("h2",{id:"\u6570\u636e\u6765\u6e90"},"\u6570\u636e\u6765\u6e90"),(0,i.yg)("p",null,"\u65f6\u533a\u6570\u636e\u5305\u542b\u65f6\u533a\u540d\u3001\u5bf9\u5e94\u65f6\u95f4\u504f\u79fb\u91cf\u3001\u590f\u4ee4\u65f6\u53d8\u5316\u60c5\u51b5\u7b49\u3002\u5728 BE \u6240\u5728\u673a\u5668\u4e0a\uff0c\u5176\u6570\u636e\u6765\u6e90\u4f9d\u6b21\u4e3a\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"TZDIR")," \u547d\u4ee4\u8fd4\u56de\u7684\u76ee\u5f55\uff0c\u5982\u4e0d\u652f\u6301\u8be5\u547d\u4ee4\uff0c\u5219\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"/usr/share/zoneinfo")," \u76ee\u5f55")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Doris BE \u90e8\u7f72\u76ee\u5f55\u4e0b\u751f\u6210\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"zoneinfo")," \u76ee\u5f55\u3002\u4ea7\u751f\u81ea Doris Repository \u4e0b\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"resource/zoneinfo.tar.gz")))),(0,i.yg)("p",null,"\u6309\u987a\u5e8f\u67e5\u627e\u4ee5\u4e0a\u6570\u636e\u6e90\uff0c\u5982\u679c\u627e\u5230\u5219\u4f7f\u7528\u5f53\u524d\u9879\u3002\u5982\u679c BE \u914d\u7f6e\u9879 ",(0,i.yg)("inlineCode",{parentName:"p"},"use_doris_tzfile")," \u4e3a true\uff0c\u5219\u8df3\u8fc7\u5bf9\u7b2c\u4e00\u9879\u7684\u67e5\u627e\u3002\u5982\u5747\u672a\u627e\u5230\uff0c\u5219 Doris BE \u5c06\u542f\u52a8\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u6b63\u786e\u6784\u5efa BE \u6216\u83b7\u53d6\u53d1\u884c\u7248\u3002"),(0,i.yg)("h2",{id:"\u65f6\u533a\u7684\u5f71\u54cd"},"\u65f6\u533a\u7684\u5f71\u54cd"),(0,i.yg)("h3",{id:"1-\u51fd\u6570"},"1. \u51fd\u6570"),(0,i.yg)("p",null,"\u5305\u62ec",(0,i.yg)("inlineCode",{parentName:"p"},"NOW()"),"\u6216",(0,i.yg)("inlineCode",{parentName:"p"},"CURTIME()"),"\u7b49\u65f6\u95f4\u51fd\u6570\u663e\u793a\u7684\u503c\uff0c\u4e5f\u5305\u62ec",(0,i.yg)("inlineCode",{parentName:"p"},"show load"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"show backends"),"\u4e2d\u7684\u65f6\u95f4\u503c\u3002"),(0,i.yg)("p",null,"\u4f46\u4e0d\u4f1a\u5f71\u54cd ",(0,i.yg)("inlineCode",{parentName:"p"},"create table")," \u4e2d\u65f6\u95f4\u7c7b\u578b\u5206\u533a\u5217\u7684 less than \u503c\uff0c\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5b58\u50a8\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"date/datetime")," \u7c7b\u578b\u7684\u503c\u7684\u663e\u793a\u3002"),(0,i.yg)("p",null,"\u53d7\u65f6\u533a\u5f71\u54cd\u7684\u51fd\u6570\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"FROM_UNIXTIME"),"\uff1a\u7ed9\u5b9a\u4e00\u4e2a UTC \u65f6\u95f4\u6233\uff0c\u8fd4\u56de\u6307\u5b9a\u65f6\u533a\u7684\u65e5\u671f\u65f6\u95f4\uff1a\u5982 ",(0,i.yg)("inlineCode",{parentName:"p"},"FROM_UNIXTIME(0)"),"\uff0c\u8fd4\u56de CST \u65f6\u533a\uff1a",(0,i.yg)("inlineCode",{parentName:"p"},"1970-01-01 08:00:00"),"\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP"),"\uff1a\u7ed9\u5b9a\u4e00\u4e2a\u6307\u5b9a\u65f6\u533a\u65e5\u671f\u65f6\u95f4\uff0c\u8fd4\u56de UTC \u65f6\u95f4\u6233\uff1a\u5982 CST \u65f6\u533a ",(0,i.yg)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP('1970-01-01 08:00:00')"),"\uff0c\u8fd4\u56de ",(0,i.yg)("inlineCode",{parentName:"p"},"0"),"\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"CURTIME"),"\uff1a\u8fd4\u56de\u6307\u5b9a\u65f6\u533a\u65f6\u95f4\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"NOW"),"\uff1a\u8fd4\u6307\u5b9a\u5730\u65f6\u533a\u65e5\u671f\u65f6\u95f4\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"CONVERT_TZ"),"\uff1a\u5c06\u4e00\u4e2a\u65e5\u671f\u65f6\u95f4\u4ece\u4e00\u4e2a\u6307\u5b9a\u65f6\u533a\u8f6c\u6362\u5230\u53e6\u4e00\u4e2a\u6307\u5b9a\u65f6\u533a\u3002"))),(0,i.yg)("h3",{id:"2-\u65f6\u95f4\u7c7b\u578b\u7684\u503c"},"2. \u65f6\u95f4\u7c7b\u578b\u7684\u503c"),(0,i.yg)("p",null,"\u5bf9\u4e8e",(0,i.yg)("inlineCode",{parentName:"p"},"DATE"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"DATEV2"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"DATETIMEV2"),"\u7c7b\u578b\uff0c\u6211\u4eec\u652f\u6301\u63d2\u5165\u6570\u636e\u65f6\u5bf9\u65f6\u533a\u8fdb\u884c\u8f6c\u6362\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'\u5982\u679c\u6570\u636e\u5e26\u6709\u65f6\u533a\uff0c\u5982 "2020-12-12 12:12:12+08:00"\uff0c\u800c\u5f53\u524d Doris ',(0,i.yg)("inlineCode",{parentName:"p"},"time_zone = +00:00"),'\uff0c\u5219\u5f97\u5230\u5b9e\u9645\u503c "2020-12-12 04:12:12"\u3002')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'\u5982\u679c\u6570\u636e\u4e0d\u5e26\u6709\u65f6\u533a\uff0c\u5982 "2020-12-12 12:12:12"\uff0c\u5219\u8ba4\u4e3a\u8be5\u65f6\u95f4\u4e3a\u7edd\u5bf9\u65f6\u95f4\uff0c\u4e0d\u53d1\u751f\u4efb\u4f55\u8f6c\u6362\u3002'))),(0,i.yg)("h3",{id:"3-\u590f\u4ee4\u65f6"},"3. \u590f\u4ee4\u65f6"),(0,i.yg)("p",null,"\u590f\u4ee4\u65f6\u7684\u672c\u8d28\u662f\u5177\u540d\u65f6\u533a\u7684\u5b9e\u9645\u65f6\u95f4\u504f\u79fb\u91cf\uff0c\u5728\u4e00\u5b9a\u65e5\u671f\u5185\u53d1\u751f\u6539\u53d8\u3002"),(0,i.yg)("p",null,"\u4f8b\u5982\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"America/Los_Angeles"),"\u65f6\u533a\u5305\u542b\u4e00\u6b21\u590f\u4ee4\u65f6\u8c03\u6574\uff0c\u8d77\u6b62\u65f6\u95f4\u4e3a\u7ea6\u4e3a\u6bcf\u5e74 3 \u6708\u81f3 11 \u6708\u3002\u5373\uff0c\u4e09\u6708\u4efd\u590f\u4ee4\u65f6\u5f00\u59cb\u65f6\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"America/Los_Angeles"),"\u5b9e\u9645\u65f6\u533a\u504f\u79fb\u7531",(0,i.yg)("inlineCode",{parentName:"p"},"-08:00"),"\u53d8\u4e3a",(0,i.yg)("inlineCode",{parentName:"p"},"-07:00"),"\uff0c11 \u6708\u590f\u4ee4\u65f6\u7ed3\u675f\u65f6\uff0c\u53c8\u4ece",(0,i.yg)("inlineCode",{parentName:"p"},"-07:00"),"\u53d8\u4e3a",(0,i.yg)("inlineCode",{parentName:"p"},"-08:00"),"\u3002\n\u5982\u679c\u4e0d\u5e0c\u671b\u5f00\u542f\u590f\u4ee4\u65f6\uff0c\u5219\u5e94\u8bbe\u5b9a ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," \u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"-08:00")," \u800c\u975e ",(0,i.yg)("inlineCode",{parentName:"p"},"America/Los_Angeles"),"\u3002"),(0,i.yg)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.yg)("p",null,"\u65f6\u533a\u503c\u53ef\u4ee5\u4f7f\u7528\u591a\u79cd\u683c\u5f0f\u7ed9\u51fa\uff0c\u4ee5\u4e0b\u662f Doris \u4e2d\u5b8c\u5584\u652f\u6301\u7684\u6807\u51c6\u683c\u5f0f\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'\u6807\u51c6\u5177\u540d\u65f6\u533a\u683c\u5f0f\uff0c\u5982 "Asia/Shanghai", "America/Los_Angeles"')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'\u6807\u51c6\u504f\u79fb\u683c\u5f0f\uff0c\u5982 "+02:30", "-10:00"')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u7f29\u5199\u65f6\u533a\u683c\u5f0f\uff0c\u5f53\u524d\u4ec5\u652f\u6301\uff1a"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'"GMT", "UTC"\uff0c\u7b49\u540c\u4e8e "+00:00" \u65f6\u533a')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'"CST", \u7b49\u540c\u4e8e "Asia/Shanghai" \u65f6\u533a')))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'\u5355\u5b57\u6bcd Z\uff0c\u4ee3\u8868 Zulu \u65f6\u533a\uff0c\u7b49\u540c\u4e8e "+00:00" \u65f6\u533a'))),(0,i.yg)("p",null,"\u6ce8\u610f\uff1a\u7531\u4e8e\u5b9e\u73b0\u65b9\u5f0f\u7684\u4e0d\u540c\uff0c\u5f53\u524d Doris \u5b58\u5728\u90e8\u5206\u5176\u4ed6\u683c\u5f0f\u5728\u90e8\u5206\u5bfc\u5165\u65b9\u5f0f\u4e2d\u5f97\u5230\u4e86\u652f\u6301\u3002",(0,i.yg)("strong",{parentName:"p"},"\u751f\u4ea7\u73af\u5883\u4e0d\u5e94\u5f53\u4f9d\u8d56\u8fd9\u4e9b\u672a\u5217\u4e8e\u6b64\u7684\u683c\u5f0f\uff0c\u5b83\u4eec\u7684\u884c\u4e3a\u968f\u65f6\u53ef\u80fd\u53d1\u751f\u53d8\u5316"),"\uff0c\u8bf7\u5173\u6ce8\u7248\u672c\u66f4\u65b0\u65f6\u7684\u76f8\u5173 changelog\u3002"),(0,i.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,i.yg)("h3",{id:"\u65f6\u533a\u654f\u611f\u6570\u636e"},"\u65f6\u533a\u654f\u611f\u6570\u636e"),(0,i.yg)("p",null,"\u65f6\u533a\u95ee\u9898\u4e3b\u8981\u6d89\u53ca\u4e09\u4e2a\u5f71\u54cd\u56e0\u7d20\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"session variable ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," \u2014\u2014 \u96c6\u7fa4\u65f6\u533a")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Stream Load\u3001Broker Load \u7b49\u5bfc\u5165\u65f6\u6307\u5b9a\u7684 header ",(0,i.yg)("inlineCode",{parentName:"p"},"timezone")," \u2014\u2014 \u5bfc\u5165\u65f6\u533a")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'\u65f6\u533a\u7c7b\u578b\u5b57\u9762\u91cf "2023-12-12 08:00:00+08:00" \u4e2d\u7684 "+08:00" \u2014\u2014 \u6570\u636e\u65f6\u533a'))),(0,i.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u505a\u5982\u4e0b\u7406\u89e3\uff1a"),(0,i.yg)("p",null,"Doris \u76ee\u524d\u517c\u5bb9\u5404\u65f6\u533a\u4e0b\u7684\u6570\u636e\u5411 Doris \u4e2d\u8fdb\u884c\u5bfc\u5165\u3002\u800c\u7531\u4e8e ",(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME")," \u7b49\u5404\u4e2a\u65f6\u95f4\u7c7b\u578b\u672c\u8eab\u4e0d\u5185\u542b\u65f6\u533a\u4fe1\u606f\uff0c\u56e0\u6b64 Doris \u96c6\u7fa4\u5185\u7684\u65f6\u95f4\u7c7b\u578b\u6570\u636e\uff0c\u53ef\u4ee5\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u7edd\u5bf9\u65f6\u95f4")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u7279\u5b9a\u65f6\u533a\u4e0b\u7684\u65f6\u95f4"))),(0,i.yg)("p",null,"\u6240\u8c13\u7edd\u5bf9\u65f6\u95f4\u662f\u6307\uff0c\u5b83\u6240\u5173\u8054\u7684\u6570\u636e\u573a\u666f\u4e0e\u65f6\u533a\u65e0\u5173\u3002\u5bf9\u4e8e\u8fd9\u7c7b\u6570\u636e\uff0c\u5728\u5bfc\u5165\u65f6\u5e94\u8be5\u4e0d\u5e26\u6709\u4efb\u4f55\u65f6\u533a\u540e\u7f00\uff0c\u5b83\u4eec\u5c06\u88ab\u539f\u6837\u5b58\u50a8\u3002\u5bf9\u4e8e\u8fd9\u7c7b\u65f6\u95f4\uff0c\u56e0\u4e3a\u4e0d\u5173\u8054\u5230\u5b9e\u9645\u7684\u65f6\u533a\uff0c\u53d6\u5176 ",(0,i.yg)("inlineCode",{parentName:"p"},"unix_timestamp")," \u7b49\u51fd\u6570\u7ed3\u679c\u662f\u65e0\u5b9e\u9645\u610f\u4e49\u7684\u3002\u800c\u96c6\u7fa4 ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," \u7684\u6539\u53d8\u4e0d\u4f1a\u5f71\u54cd\u5b83\u7684\u4f7f\u7528\u3002"),(0,i.yg)("p",null,"\u6240\u8c13\u201c\u67d0\u4e2a\u7279\u5b9a\u65f6\u533a\u4e0b\u201d\u7684\u65f6\u95f4\u3002\u8fd9\u4e2a\u201c\u7279\u5b9a\u65f6\u533a\u201d\u5c31\u662f\u6211\u4eec\u7684 session variable ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone"),"\u3002\u5c31\u6700\u4f73\u5b9e\u8df5\u800c\u8a00\uff0c\u8be5\u53d8\u91cf\u5e94\u5f53\u5728\u6570\u636e\u5bfc\u5165\u524d\u786e\u5b9a\uff0c",(0,i.yg)("strong",{parentName:"p"},"\u4e14\u4e0d\u518d\u66f4\u6539"),"\u3002\u6b64\u65f6 Doris \u96c6\u7fa4\u4e2d\u7684\u8be5\u7c7b\u65f6\u95f4\u6570\u636e\uff0c\u5176\u5b9e\u9645\u610f\u4e49\u4e3a\uff1a\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," \u65f6\u533a\u4e0b\u7684\u65f6\u95f4\u3002\u4f8b\u5982\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select @@time_zone;\n+----------------+\n| @@time_zone    |\n+----------------+\n| Asia/Hong_Kong |\n+----------------+\n1 row in set (0.12 sec)\n\nmysql> insert into dtv23 values('2020-12-12 12:12:12+02:00'); --- \u7edd\u5bf9\u65f6\u533a\u4e3a +02:00\nQuery OK, 1 row affected (0.27 sec)\n\nmysql> select * from dtv23;\n+-------------------------+\n| k0                      |\n+-------------------------+\n| 2020-12-12 18:12:12.000 | --- \u88ab\u8f6c\u6362\u4e3a Doris \u96c6\u7fa4\u65f6\u533a Asia/Hong_Kong\uff0c\u5e94\u5f53\u4fdd\u6301\u6b64\u8bed\u4e49\u3002\n+-------------------------+\n1 row in set (0.19 sec)\n\nmysql> set time_zone = 'America/Los_Angeles';\nQuery OK, 0 rows affected (0.15 sec)\n\nmysql> select * from dtv23;\n+-------------------------+\n| k0                      |\n+-------------------------+\n| 2020-12-12 18:12:12.000 | --- \u5982\u679c\u4fee\u6539 time_zone\uff0c\u65f6\u95f4\u503c\u4e0d\u4f1a\u968f\u4e4b\u6539\u53d8\uff0c\u5176\u610f\u4e49\u53d1\u751f\u7d0a\u4e71\u3002\n+-------------------------+\n1 row in set (0.18 sec)\n\nmysql> insert into dtv23 values('2020-12-12 12:12:12+02:00');\nQuery OK, 1 row affected (0.17 sec)\n\nmysql> select * from dtv23;\n+-------------------------+\n| k0                      |\n+-------------------------+\n| 2020-12-12 02:12:12.000 |\n| 2020-12-12 18:12:12.000 |\n+-------------------------+ --- \u6b64\u65f6\u53ef\u4ee5\u53d1\u73b0\uff0c\u6570\u636e\u5df2\u7ecf\u53d1\u751f\u9519\u4e71\u3002\n2 rows in set (0.19 sec)\n")),(0,i.yg)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u5904\u7406\u65f6\u533a\u95ee\u9898\u6700\u4f73\u7684\u5b9e\u8df5\u662f\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5728\u4f7f\u7528\u524d\u786e\u8ba4\u8be5\u96c6\u7fa4\u6240\u8868\u5f81\u7684\u65f6\u533a\u5e76\u8bbe\u7f6e ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone"),"\uff0c\u5728\u6b64\u4e4b\u540e\u4e0d\u518d\u66f4\u6539\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5728\u5bfc\u5165\u65f6\u8bbe\u5b9a header ",(0,i.yg)("inlineCode",{parentName:"p"},"timezone")," \u540c\u96c6\u7fa4 ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," \u4e00\u81f4\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5bf9\u4e8e\u7edd\u5bf9\u65f6\u95f4\uff0c\u5bfc\u5165\u65f6\u4e0d\u5e26\u65f6\u533a\u540e\u7f00\uff1b\u5bf9\u4e8e\u6709\u65f6\u533a\u7684\u65f6\u95f4\uff0c\u5bfc\u5165\u65f6\u5e26\u5177\u4f53\u65f6\u533a\u540e\u7f00\uff0c\u5bfc\u5165\u540e\u5c06\u88ab\u8f6c\u5316\u81f3 Doris ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," \u65f6\u533a\u3002"))),(0,i.yg)("h3",{id:"\u590f\u4ee4\u65f6"},"\u590f\u4ee4\u65f6"),(0,i.yg)("p",null,"\u590f\u4ee4\u65f6\u7684\u8d77\u8bab\u65f6\u95f4\u6765\u81ea\u4e8e",(0,i.yg)("a",{parentName:"p",href:"#%E6%95%B0%E6%8D%AE%E6%9D%A5%E6%BA%90"},"\u5f53\u524d\u65f6\u533a\u6570\u636e\u6e90"),"\uff0c\u4e0d\u4e00\u5b9a\u4e0e\u5f53\u5e74\u5ea6\u65f6\u533a\u6240\u5728\u5730\u5b98\u65b9\u5b9e\u9645\u786e\u8ba4\u65f6\u95f4\u5b8c\u5168\u4e00\u81f4\u3002\u8be5\u6570\u636e\u7531 ICANN \u8fdb\u884c\u7ef4\u62a4\u3002\u5982\u679c\u9700\u8981\u786e\u4fdd\u590f\u4ee4\u65f6\u8868\u73b0\u4e0e\u5f53\u5e74\u5ea6\u5b9e\u9645\u89c4\u5b9a\u4e00\u81f4\uff0c\u8bf7\u4fdd\u8bc1 Doris \u6240\u9009\u62e9\u7684\u6570\u636e\u6e90\u4e3a\u6700\u65b0\u7684 ICANN \u6240\u516c\u5e03\u65f6\u533a\u6570\u636e\uff0c\u4e0b\u8f7d\u9014\u5f84\u89c1\u4e0b\u6587\u3002"),(0,i.yg)("h3",{id:"\u6570\u636e\u66f4\u65b0"},"\u6570\u636e\u66f4\u65b0"),(0,i.yg)("p",null,"\u771f\u5b9e\u4e16\u754c\u4e2d\u7684\u65f6\u533a\u4e0e\u590f\u4ee4\u65f6\u76f8\u5173\u6570\u636e\uff0c\u5c06\u4f1a\u56e0\u5404\u79cd\u539f\u56e0\u800c\u4e0d\u5b9a\u671f\u53d1\u751f\u53d8\u5316\u3002IANA \u4f1a\u5b9a\u671f\u8bb0\u5f55\u8fd9\u4e9b\u53d8\u5316\u5e76\u66f4\u65b0\u76f8\u5e94\u65f6\u533a\u6587\u4ef6\u3002\u5982\u679c\u5e0c\u671b Doris \u4e2d\u7684\u65f6\u533a\u4fe1\u606f\u4e0e\u6700\u65b0\u7684IANA \u6570\u636e\u4fdd\u6301\u4e00\u81f4\uff0c\u8bf7\u91c7\u53d6\u4e0b\u5217\u65b9\u5f0f\u8fdb\u884c\u66f4\u65b0\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u5305\u7ba1\u7406\u5668\u66f4\u65b0")),(0,i.yg)("p",null,"\u6839\u636e\u5f53\u524d\u64cd\u4f5c\u7cfb\u7edf\u4f7f\u7528\u7684\u5305\u7ba1\u7406\u5668\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5bf9\u5e94\u7684\u547d\u4ee4\u76f4\u63a5\u66f4\u65b0\u65f6\u533a\u6570\u636e\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"# yum\n> sudo yum update tzdata\n# apt\n> sudo apt update tzdata\n")),(0,i.yg)("p",null,"\u8be5\u65b9\u5f0f\u66f4\u65b0\u7684\u6570\u636e\u4f4d\u4e8e\u7cfb\u7edf ",(0,i.yg)("inlineCode",{parentName:"p"},"$TZDIR")," \u4e0b\uff08\u4e00\u822c\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"usr/share/zoneinfo"),"\uff09\u3002\u5982\u679c ",(0,i.yg)("inlineCode",{parentName:"p"},"use_doris_tzfile = true"),"\uff0c\u5219\u7528\u6237\u5e94\u5f53\u5c06\u5176\u8986\u76d6\u81f3 BE \u90e8\u7f72\u76ee\u5f55\u4e0b\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"zoneinfo")," \u76ee\u5f55\u3002"),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"\u76f4\u63a5\u62c9\u53d6 IANA \u65f6\u533a\u6570\u636e\u5e93\uff08\u63a8\u8350\uff09")),(0,i.yg)("p",null,"\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\u7684\u5305\u7ba1\u7406\u5668\uff0ctzdata \u7684\u540c\u6b65\u5e76\u4e0d\u53ca\u65f6\u3002\u5982\u679c\u5bf9\u65f6\u533a\u6570\u636e\u51c6\u786e\u6027\u8981\u6c42\u8f83\u9ad8\uff0c\u53ef\u4ee5\u76f4\u63a5\u62c9\u53d6 IANA \u5b9a\u671f\u516c\u5e03\u7684\u6570\u636e\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://www.iana.org/time-zones/repository/tzdb-latest.tar.lz\n")),(0,i.yg)("p",null,"\u7136\u540e\u6839\u636e\u89e3\u538b\u540e\u6587\u4ef6\u5939\u4e2d\u7684 README \u6587\u4ef6\uff0c\u751f\u6210\u5177\u4f53\u7684 zoneinfo \u6570\u636e\u3002\u751f\u6210\u7684\u6570\u636e\u5e94\u5f53\u62f7\u8d1d\u81f3 ",(0,i.yg)("inlineCode",{parentName:"p"},"$TZDIR")," \u8fd8\u662f BE \u90e8\u7f72\u76ee\u5f55\uff0c\u53d6\u51b3\u4e8e BE config ",(0,i.yg)("inlineCode",{parentName:"p"},"use_doris_tzfile")," \u7684\u503c\u3002"),(0,i.yg)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4ee5\u4e0a\u6240\u6709\u64cd\u4f5c\u5728 BE \u6240\u5728\u673a\u5668\u4e0a\u5b8c\u6210\u540e\uff0c\u90fd",(0,i.yg)("strong",{parentName:"p"},"\u5fc5\u987b\u91cd\u542f"),"\u5bf9\u5e94 BE \u624d\u80fd\u751f\u6548\u3002"),(0,i.yg)("h2",{id:"\u62d3\u5c55\u9605\u8bfb"},"\u62d3\u5c55\u9605\u8bfb"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u65f6\u533a\u683c\u5f0f\u5217\u8868\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of tz database time zones"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"IANA \u65f6\u533a\u6570\u636e\u5e93\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://www.iana.org/time-zones"},"IANA Time Zone Database"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"ICANN \u65f6\u533a\u6570\u636e\u5e93\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://mm.icann.org/pipermail/tz-announce/"},"The tz-announce Archives")))))}s.isMDXComponent=!0}}]);