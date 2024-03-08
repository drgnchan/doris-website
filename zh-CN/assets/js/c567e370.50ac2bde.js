"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94671],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(296540);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){f(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,f=function(e,n){if(null==e)return{};var t,r,f={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(f[t]=e[t]);return f}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(f[t]=e[t])}return f}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,f=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),y=f,d=c["".concat(o,".").concat(y)]||c[y]||u[y]||a;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,f=n&&n.mdxType;if("string"==typeof e||f){var a=t.length,l=new Array(a);l[0]=y;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[c]="string"==typeof e?e:f,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},372102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(58168),f=(t(296540),t(15680));const a={title:"IPV6",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/IPV6",id:"sql-manual/sql-reference/Data-Types/IPV6",title:"IPV6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Types/IPV6.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/IPV6",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/IPV6",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV6",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV4",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/IPV4"},next:{title:"CREATE-CATALOG",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG"}},o={},s=[{value:"IPV6",id:"ipv6",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,f.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,f.yg)("h2",{id:"ipv6"},"IPV6"),(0,f.yg)("version",{since:"dev"},(0,f.yg)("p",null,"IPV6")),(0,f.yg)("h3",{id:"description"},"description"),(0,f.yg)("p",null,"IPv6\u7c7b\u578b\uff0c\u4ee5UInt128\u7684\u5f62\u5f0f\u5b58\u50a8\u572816\u4e2a\u5b57\u8282\u4e2d\uff0c\u7528\u4e8e\u8868\u793aIPv6\u5730\u5740\u3002\n\u53d6\u503c\u8303\u56f4\u662f ","['::', 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff']","\u3002"),(0,f.yg)("p",null,(0,f.yg)("inlineCode",{parentName:"p"},"\u8d85\u51fa\u53d6\u503c\u8303\u56f4\u6216\u8005\u683c\u5f0f\u975e\u6cd5\u7684\u8f93\u5165\u5c06\u8fd4\u56deNULL")),(0,f.yg)("h3",{id:"example"},"example"),(0,f.yg)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,f.yg)("pre",null,(0,f.yg)("code",{parentName:"pre"},'CREATE TABLE ipv6_test (\n  `id` int,\n  `ip_v6` ipv6\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,f.yg)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,f.yg)("pre",null,(0,f.yg)("code",{parentName:"pre"},"insert into ipv6_test values(1, '::');\ninsert into ipv6_test values(2, '2001:16a0:2:200a::2');\ninsert into ipv6_test values(3, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff');\ninsert into ipv6_test values(4, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffffg'); // invalid data\n")),(0,f.yg)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,f.yg)("pre",null,(0,f.yg)("code",{parentName:"pre"},"mysql> select * from ipv6_test order by id;\n+------+-----------------------------------------+\n| id   | ip_v6                                   |\n+------+-----------------------------------------+\n|    1 | ::                                      |\n|    2 | 2001:16a0:2:200a::2                     |\n|    3 | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff |\n|    4 | NULL                                    |\n+------+-----------------------------------------+\n")),(0,f.yg)("h3",{id:"keywords"},"keywords"),(0,f.yg)("p",null,"IPV6"))}u.isMDXComponent=!0}}]);