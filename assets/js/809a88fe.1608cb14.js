"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18934],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},978695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const s={title:"IS_IPV4_COMPAT",language:"en"},o=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/is-ipv4-compat",id:"version-2.1/sql-manual/sql-functions/ip-functions/is-ipv4-compat",title:"IS_IPV4_COMPAT",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/ip-functions/is-ipv4-compat.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/is-ipv4-compat",permalink:"/docs/sql-manual/sql-functions/ip-functions/is-ipv4-compat",draft:!1,tags:[],version:"2.1",frontMatter:{title:"IS_IPV4_COMPAT",language:"en"},sidebar:"docs",previous:{title:"IPV6_STRING_TO_NUM_OR_NULL",permalink:"/docs/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-null"},next:{title:"IS_IPV4_MAPPED",permalink:"/docs/sql-manual/sql-functions/ip-functions/is-ipv4-mapped"}},l={},c=[{value:"IS_IPV4_COMPAT",id:"is_ipv4_compat",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"is_ipv4_compat"},"IS_IPV4_COMPAT"),(0,i.yg)("version",{since:"dev"},(0,i.yg)("p",null,"IS_IPV4_COMPAT")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR IS_IPV4_COMPAT(INET6_ATON(VARCHAR ipv4_addr))")),(0,i.yg)("p",null,"This function takes an IPv6 address represented in numeric form as a binary string, as returned by INET6_ATON().\nIt returns 1 if the argument is a valid IPv4-compatible IPv6 address, 0 otherwise (unless expr is NULL, in which case the function returns NULL).\nIPv4-compatible addresses have the form ::ipv4_address."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SELECT IS_IPV4_COMPAT(INET6_ATON('::ffff:10.0.5.9')) AS is_result;\n+-----------+\n| is_result |\n+-----------+\n|         0 |\n+-----------+\n1 row in set (0.02 sec)\n\nmysql> SELECT IS_IPV4_COMPAT(INET6_ATON('::10.0.5.9')) AS is_result;\n+-----------+\n| is_result |\n+-----------+\n|         1 |\n+-----------+\n1 row in set (0.03 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"IS_IPV4_COMPAT, IP"))}d.isMDXComponent=!0}}]);