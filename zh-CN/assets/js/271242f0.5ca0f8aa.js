"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20471],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var i=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),c=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(a.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),y=r,f=u["".concat(a,".").concat(y)]||u[y]||d[y]||s;return t?i.createElement(f,l(l({ref:n},p),{},{components:t})):i.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=y;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},837502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(58168),r=(t(296540),t(15680));const s={title:"IS_IPV4_STRING",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/ip-functions/is-ipv4-string",id:"sql-manual/sql-functions/ip-functions/is-ipv4-string",title:"IS_IPV4_STRING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/is-ipv4-string.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/is-ipv4-string",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-string",draft:!1,tags:[],version:"current",frontMatter:{title:"IS_IPV4_STRING",language:"zh-CN"},sidebar:"docs",previous:{title:"IS_IP_ADDRESS_IN_RANGE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ip-address-in-range"},next:{title:"IS_IPV6_STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv6-string"}},a={},c=[{value:"IS_IPV4_STRING",id:"is_ipv4_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"is_ipv4_string"},"IS_IPV4_STRING"),(0,r.yg)("version",{since:"dev"},(0,r.yg)("p",null,"IS_IPV4_STRING")),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BOOLEAN IS_IPV4_STRING(STRING ipv4_str)")),(0,r.yg)("p",null,"\u63a5\u6536\u4e00\u4e2a\u8868\u793a\u5f62\u5f0f\u4e3a\u5b57\u7b26\u4e32\u7684IPv4\u5730\u5740\u4f5c\u4e3a\u53c2\u6570\uff0c\u5982\u679c\u4e3a\u683c\u5f0f\u6b63\u786e\u4e14\u5408\u6cd5\u7684IPv4\u5730\u5740\uff0c\u8fd4\u56detrue\uff1b\u53cd\u4e4b\uff0c\u8fd4\u56defalse\u3002"),(0,r.yg)("h3",{id:"notice"},"notice"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"\u5982\u679c\u5165\u53c2\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\uff0c\u8868\u793a\u65e0\u6548\u8f93\u5165")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select is_ipv4_string(NULL);\n+----------------------+\n| is_ipv4_string(NULL) |\n+----------------------+\n|                 NULL |\n+----------------------+\n\nmysql> CREATE TABLE `test_is_ipv4_string` (\n      `id` int,\n      `ip_v4` string\n    ) ENGINE=OLAP\n    DISTRIBUTED BY HASH(`id`) BUCKETS 4\n    PROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n    );\n    \nmysql> insert into test_is_ipv4_string values(0, NULL), (1, '0.0.0.'), (2, ''), (3, '.'), (4, '255.255.255.255');\n\nmysql> select id, is_ipv4_string(ip_v4) from test_is_ipv4_string order by id;\n+------+-----------------------+\n| id   | is_ipv4_string(ip_v4) |\n+------+-----------------------+\n|    0 |                  NULL |\n|    1 |                     0 |\n|    2 |                     0 |\n|    3 |                     0 |\n|    4 |                     1 |\n+------+-----------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"IS_IPV4_STRING, IP"))}d.isMDXComponent=!0}}]);