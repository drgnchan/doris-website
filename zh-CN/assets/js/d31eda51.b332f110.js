"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22669],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||y[d]||l;return r?t.createElement(m,o(o({ref:n},p),{},{components:r})):t.createElement(m,o({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},973586:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const l={title:"DATETIME",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Types/DATETIME",id:"version-2.0/sql-manual/sql-reference/Data-Types/DATETIME",title:"DATETIME",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Types/DATETIME.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATETIME",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Types/DATETIME",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DATETIME",language:"zh-CN"},sidebar:"docs",previous:{title:"DATE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Types/DATE"},next:{title:"CHAR",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Types/CHAR"}},i={},c=[{value:"DATETIME",id:"datetime",level:2},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"datetime"},"DATETIME"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"DATETIMEV2")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATETIME([P])\n\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\uff0c\u53ef\u9009\u53c2\u6570P\u8868\u793a\u65f6\u95f4\u7cbe\u5ea6\uff0c\u53d6\u503c\u8303\u56f4\u662f[0, 6]\uff0c\u5373\u6700\u591a\u652f\u63016\u4f4d\u5c0f\u6570\uff08\u5fae\u79d2\uff09\u3002\u4e0d\u8bbe\u7f6e\u65f6\u4e3a0\u3002\n\u53d6\u503c\u8303\u56f4\u662f['0000-01-01 00:00:00[.000000]', '9999-12-31 23:59:59[.999999]'].\n\u6253\u5370\u7684\u5f62\u5f0f\u662f'yyyy-MM-dd HH:mm:ss.SSSSSS'\n")),(0,a.yg)("h3",{id:"note"},"note"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATETIME \u652f\u6301\u4e86\u6700\u591a\u5230\u5fae\u79d2\u7684\u65f6\u95f4\u7cbe\u5ea6\u3002\u5728\u4f7f\u7528 BE \u7aef\u89e3\u6790\u5bfc\u5165\u7684 DATETIME \u7c7b\u578b\u6570\u636e\u65f6\uff08\u5982\u4f7f\u7528Stream load\u3001Spark load\u7b49\uff09\uff0c\u6216\u5f00\u542f[\u65b0\u4f18\u5316\u5668](../../../query-acceleration/nereids)\u540e\u5728 FE \u7aef\u89e3\u6790 DATETIME \u7c7b\u578b\u6570\u636e\u65f6\uff0c\u5c06\u4f1a\u5bf9\u8d85\u51fa\u5f53\u524d\u7cbe\u5ea6\u7684\u5c0f\u6570\u8fdb\u884c**\u56db\u820d\u4e94\u5165**\u3002\n\nDATETIME \u8bfb\u5165\u65f6\u652f\u6301\u89e3\u6790\u65f6\u533a\uff0c\u683c\u5f0f\u4e3a\u539f\u672c DATETIME \u5b57\u9762\u91cf\u540e\u7d27\u8d34\u65f6\u533a\uff1a\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"<date> <time>[<timezone>]\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'\u5173\u4e8e`<timezone>`\u7684\u5177\u4f53\u652f\u6301\u683c\u5f0f\uff0c\u8bf7\u89c1[\u65f6\u533a](../../../advanced/time-zone)\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c`DATE`, `DATEV2`, `DATETIME`, `DATETIMEV2` \u7c7b\u578b\u5747**\u4e0d**\u5305\u542b\u65f6\u533a\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u8f93\u5165\u7684\u65f6\u95f4\u5b57\u7b26\u4e32 "2012-12-12 08:00:00+08:00" \u7ecf\u89e3\u6790\u5e76\u8f6c\u6362\u81f3\u5f53\u524d\u65f6\u533a "+02:00"\uff0c\u5f97\u5230\u5b9e\u9645\u503c "2012-12-12 02:00:00" \u540e\u5b58\u50a8\u4e8e DATETIME \u5217\u4e2d\uff0c\u5219\u4e4b\u540e\u65e0\u8bba\u672c\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\u5982\u4f55\u6539\u53d8\uff0c\u8be5\u503c\u672c\u8eab\u90fd\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\u3002\n')),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select @@time_zone;\n+----------------+\n| @@time_zone    |\n+----------------+\n| Asia/Hong_Kong |\n+----------------+\n1 row in set (0.11 sec)\n\nmysql> insert into dtv23 values ("2020-12-12 12:12:12Z"), ("2020-12-12 12:12:12GMT"), ("2020-12-12 12:12:12+02:00"), ("2020-12-12 12:12:12America/Los_Angeles");\nQuery OK, 4 rows affected (0.17 sec)\n\nmysql> select * from dtv23;\n+-------------------------+\n| k0                      |\n+-------------------------+\n| 2020-12-12 20:12:12.000 |\n| 2020-12-12 20:12:12.000 |\n| 2020-12-13 04:12:12.000 |\n| 2020-12-12 18:12:12.000 |\n+-------------------------+\n4 rows in set (0.15 sec)\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATETIME\n")))}y.isMDXComponent=!0}}]);