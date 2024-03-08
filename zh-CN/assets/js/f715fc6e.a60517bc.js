"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89398],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},902364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"TO_IPV6_OR_NULL",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/to-ipv6-or-null",id:"version-2.1/sql-manual/sql-functions/ip-functions/to-ipv6-or-null",title:"TO_IPV6_OR_NULL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/ip-functions/to-ipv6-or-null.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/to-ipv6-or-null",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/to-ipv6-or-null",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TO_IPV6_OR_NULL",language:"zh-CN"},sidebar:"docs",previous:{title:"TO_IPV6_OR_DEFAULT",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/to-ipv6-or-default"},next:{title:"cosine_distance",permalink:"/zh-CN/docs/sql-manual/sql-functions/distance-functions/cosine-distance"}},s={},c=[{value:"TO_IPV6_OR_NULL",id:"to_ipv6_or_null",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"to_ipv6_or_null"},"TO_IPV6_OR_NULL"),(0,o.yg)("version",{since:"dev"},(0,o.yg)("p",null,"TO_IPV6_OR_NULL")),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"IPV6 TO_IPV6_OR_NULL(STRING ipv6_str)")),(0,o.yg)("p",null,"\u4e0eto_ipv6\u51fd\u6570\u7c7b\u4f3c\uff0c\u4f46\u5982\u679cIPv6\u5730\u5740\u7684\u683c\u5f0f\u975e\u6cd5\uff0c\u5219\u8fd4\u56deNULL\u3002"),(0,o.yg)("h3",{id:"notice"},"notice"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"\u5165\u53c2ipv6_str\u5982\u679c\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\u3002")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select to_ipv6_or_null('.');\n+----------------------+\n| to_ipv6_or_null('.') |\n+----------------------+\n| NULL                 |\n+----------------------+\n\nmysql> select to_ipv6_or_null(NULL);\n+-----------------------+\n| to_ipv6_or_null(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"TO_IPV6_OR_NULL, IP"))}d.isMDXComponent=!0}}]);