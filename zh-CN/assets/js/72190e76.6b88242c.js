"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73144],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>y});var t=r(11504);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),f=l,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?t.createElement(y,a(a({ref:n},u),{},{components:r})):t.createElement(y,a({ref:n},u))}));function y(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:l,a[1]=s;for(var i=2;i<o;i++)a[i]=r[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5708:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var t=r(45072),l=(r(11504),r(95788));const o={title:"url_decode",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/url-decode",id:"sql-manual/sql-functions/string-functions/url-decode",title:"url_decode",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/url-decode.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/url-decode",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/url-decode",draft:!1,tags:[],version:"current",frontMatter:{title:"url_decode",language:"en"},sidebar:"docs",previous:{title:"PARSE_URL",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/parse-url"},next:{title:"CONVERT_TO",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/convert-to"}},c={},i=[{value:"url_decode",id:"url_decode",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Parameters",id:"parameters",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},d="wrapper";function p(e){let{components:n,...r}=e;return(0,l.yg)(d,(0,t.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"url_decode"},"url_decode"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"\u5c06URL\u8f6c\u6362\u4e3a\u89e3\u7801\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"VARCHAR url_decode(VARCHAR url)\n")),(0,l.yg)("h3",{id:"parameters"},"Parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"url: \u5f85\u89e3\u7801\u7684url\u3002")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> mysql> select url_decode('https%3A%2F%2Fdoris.apache.org%2Fzh-CN%2Fdocs%2Fsql-manual%2Fsql-functions%2Fstring-functions');\n+------------------------------------------------+\n| url_decode('https%3A%2F%2Fdoris.apache.org%2Fzh-CN%2Fdocs%2Fsql-manual%2Fsql-functions%2Fstring-functions') |\n+------------------------------------------------+\n| https://doris.apache.org/zh-CN/docs/sql-manual/sql-functions/string-functions                               |\n+------------------------------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"URL DECODE\n")))}p.isMDXComponent=!0}}]);