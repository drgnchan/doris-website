"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50544],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>f});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),_=i,f=p["".concat(a,".").concat(_)]||p[_]||d[_]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=_;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},32804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(45072),i=(t(11504),t(95788));const o={title:"IPV4_STRING_TO_NUM_OR_DEFAULT",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",id:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",title:"IPV4_STRING_TO_NUM_OR_DEFAULT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV4_STRING_TO_NUM_OR_DEFAULT",language:"en"},sidebar:"docs",previous:{title:"INET_ATON",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/inet-aton"},next:{title:"IPV4_STRING_TO_NUM_OR_NULL",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null"}},a={},u=[{value:"IPV4_STRING_TO_NUM_OR_DEFAULT",id:"ipv4_string_to_num_or_default",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_string_to_num_or_default"},"IPV4_STRING_TO_NUM_OR_DEFAULT"),(0,i.yg)("version",{since:"dev"},(0,i.yg)("p",null,"IPV4_STRING_TO_NUM_OR_DEFAULT")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT IPV4_STRING_TO_NUM_OR_DEFAULT(VARCHAR ipv4_string)")),(0,i.yg)("p",null,"Takes a string containing an IPv4 address in the format A.B.C.D (dot-separated numbers in decimal form). Returns a BIGINT number representing the corresponding IPv4 address in big endian."),(0,i.yg)("h3",{id:"notice"},"notice"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"will return 0 if the input parameter is invalid ipv4 value or NULL")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select ipv4_string_to_num_or_default('192.168.0.1'); \n+----------------------------------------------+ \n| ipv4_string_to_num_or_default('192.168.0.1') | \n+----------------------------------------------+ \n| 3232235521                                   | \n+----------------------------------------------+ \n1 row in set (0.01 sec)\n\nmysql> select str, ipv4_string_to_num_or_default(str) from ipv4_str; \n+-----------------+------------------------------------+ \n|str              | ipv4_string_to_num_or_default(str) | \n+-----------------+------------------------------------+ \n| 0.0.0.0         | 0                                  | \n| 127.0.0.1       | 2130706433                         | \n| 255.255.255.255 | 4294967295                         | \n| invalid         | 0                                  | \n+-----------------+------------------------------------+ \n4 rows in set (0.01 sec)\n\nmysql> select addr_src, ipv4_string_to_num_or_default(addr_src) from ipv4_string_test where addr_src is null;\n+----------+-----------------------------------------+\n| addr_src | ipv4_string_to_num_or_default(addr_src) |\n+----------+-----------------------------------------+\n| NULL     |                                       0 |\n+----------+-----------------------------------------+\n1 row in set (0.09 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"IPV4_STRING_TO_NUM_OR_DEFAULT, IP"))}d.isMDXComponent=!0}}]);