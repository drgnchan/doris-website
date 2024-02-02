"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67813],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>m});var r=t(11504);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=l,m=p["".concat(s,".").concat(f)]||p[f]||y[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(45072),l=(t(11504),t(95788));const i={title:"hex",language:"en"},a=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/hex",id:"version-1.2/sql-manual/sql-functions/string-functions/hex",title:"hex",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/hex.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/hex",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/hex",draft:!1,tags:[],version:"1.2",frontMatter:{title:"hex",language:"en"},sidebar:"docs",previous:{title:"not_null_or_empty",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/not_null_or_empty"},next:{title:"unhex",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/unhex"}},s={},c=[{value:"hex",id:"hex",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"hex"},"hex"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR hex(VARCHAR str)")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR hex(BIGINT num)")),(0,l.yg)("p",null,"If the input parameter is a number, the string representation of the hexadecimal value is returned;"),(0,l.yg)("p",null,"If the input parameter is a string, each character will be converted into two hexadecimal characters, and all the characters after the conversion will be spliced into a string for output"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"input string\n\nmysql> select hex('1');\n+----------+\n| hex('1') |\n+----------+\n| 31       |\n+----------+\n\nmysql> select hex('@');\n+----------+\n| hex('@') |\n+----------+\n| 40       |\n+----------+\n\nmysql> select hex('12');\n+-----------+\n| hex('12') |\n+-----------+\n| 3132      |\n+-----------+\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"intput num\n\nmysql> select hex(12);\n+---------+\n| hex(12) |\n+---------+\n| C       |\n+---------+\n\nmysql> select hex(-1);\n+------------------+\n| hex(-1)          |\n+------------------+\n| FFFFFFFFFFFFFFFF |\n+------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"HEX\n")))}y.isMDXComponent=!0}}]);