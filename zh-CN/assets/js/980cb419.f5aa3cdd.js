"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87716],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(45072),a=(t(11504),t(95788));const i={title:"APPEND_TRAILING_CHAR_IF_ABSENT",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-functions/string-functions/append-trailing-char-if-absent",id:"sql-manual/sql-functions/string-functions/append-trailing-char-if-absent",title:"APPEND_TRAILING_CHAR_IF_ABSENT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent",draft:!1,tags:[],version:"current",frontMatter:{title:"APPEND_TRAILING_CHAR_IF_ABSENT",language:"zh-CN"},sidebar:"docs",previous:{title:"SUB_REPLACE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/sub-replace"},next:{title:"ENDS_WITH",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/ends-with"}},s={},o=[{value:"append_trailing_char_if_absent",id:"append_trailing_char_if_absent",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:o},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"append_trailing_char_if_absent"},"append_trailing_char_if_absent"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR append_trailing_char_if_absent(VARCHAR str, VARCHAR trailing_char)")),(0,a.yg)("p",null,"\u5982\u679c str \u5b57\u7b26\u4e32\u975e\u7a7a\u5e76\u4e14\u672b\u5c3e\u4e0d\u5305\u542b trailing_char \u5b57\u7b26\uff0c\u5219\u5c06 trailing_char \u5b57\u7b26\u9644\u52a0\u5230\u672b\u5c3e\u3002\ntrailing_char \u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u5b57\u7b26\uff0c\u5982\u679c\u5305\u542b\u591a\u4e2a\u5b57\u7b26\uff0c\u5c06\u8fd4\u56deNULL"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL [test]> select append_trailing_char_if_absent('a','c');\n+------------------------------------------+\n| append_trailing_char_if_absent('a', 'c') |\n+------------------------------------------+\n| ac                                       |\n+------------------------------------------+\n1 row in set (0.02 sec)\n\nMySQL [test]> select append_trailing_char_if_absent('ac','c');\n+-------------------------------------------+\n| append_trailing_char_if_absent('ac', 'c') |\n+-------------------------------------------+\n| ac                                        |\n+-------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"APPEND_TRAILING_CHAR_IF_ABSENT\n")))}f.isMDXComponent=!0}}]);