"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31206],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={title:"INET_NTOA",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/inet-ntoa",id:"sql-manual/sql-functions/ip-functions/inet-ntoa",title:"INET_NTOA",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/inet-ntoa.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/inet-ntoa",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/inet-ntoa",draft:!1,tags:[],version:"current",frontMatter:{title:"INET_NTOA",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV4_NUM_TO_STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-num-to-string"},next:{title:"CAST",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/cast"}},s={},c=[{value:"INET_NTOA",id:"inet_ntoa",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"inet_ntoa"},"INET_NTOA"),(0,i.kt)("version",{since:"dev"},(0,i.kt)("p",null,"INET_NTOA")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR INET_NTOA(BIGINT ipv4_num)")),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u7c7b\u578b\u4e3aInt16\u3001Int32\u3001Int64 \u4e14\u5927\u7aef\u8868\u793a\u7684 IPv4 \u7684\u5730\u5740\uff0c\u8fd4\u56de\u76f8\u5e94 IPv4 \u7684\u5b57\u7b26\u4e32\u8868\u73b0\u5f62\u5f0f\uff0c\u683c\u5f0f\u4e3aA.B.C.D\uff08\u4ee5\u70b9\u5206\u5272\u7684\u5341\u8fdb\u5236\u6570\u5b57\uff09\u3002"),(0,i.kt)("h3",{id:"notice"},"notice"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u5bf9\u4e8e\u8d1f\u6570\u6216\u8d85\u8fc74294967295 \uff08\u5373 '255.255.255.255'\uff09\u7684\u5165\u53c2\u90fd\u8fd4\u56deNULL\uff0c\u8868\u793a\u65e0\u6548\u6536\u5165")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select inet_ntoa(3232235521);\n+-----------------------------+\n| inet_ntoa(3232235521) |\n+-----------------------------+\n| 192.168.0.1                 |\n+-----------------------------+\n1 row in set (0.01 sec)\n\nmysql> select num,inet_ntoa(num) from ipv4_bi;\n+------------+------------------------+\n| num        | inet_ntoa(`num`) |\n+------------+------------------------+\n|         -1 | NULL                   |\n|          0 | 0.0.0.0                |\n| 2130706433 | 127.0.0.1              |\n| 4294967295 | 255.255.255.255        |\n| 4294967296 | NULL                   |\n+------------+------------------------+\n7 rows in set (0.01 sec)\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"INET_NTOA, IP"))}d.isMDXComponent=!0}}]);