"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5700],{95788:(e,r,n)=>{n.d(r,{Iu:()=>s,yg:()=>d});var t=n(11504);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),p=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(o.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(o,".").concat(f)]||u[f]||g[f]||l;return n?t.createElement(d,c(c({ref:r},s),{},{components:n})):t.createElement(d,c({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=f;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18412:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=n(45072),a=(n(11504),n(95788));const l={title:"REGEXP_REPLACE",language:"en"},c=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp-replace",id:"sql-manual/sql-functions/string-functions/regexp/regexp-replace",title:"REGEXP_REPLACE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/regexp/regexp-replace.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/regexp-replace",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp-replace",draft:!1,tags:[],version:"current",frontMatter:{title:"REGEXP_REPLACE",language:"en"},sidebar:"docs",previous:{title:"REGEXP_EXTRACT_ALL",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp-extract-all"},next:{title:"REGEXP_REPLACE_ONE",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one"}},o={},p=[{value:"regexp_replace",id:"regexp_replace",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},u="wrapper";function g(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.c)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"regexp_replace"},"regexp_replace"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR regexp_replace(VARCHAR str, VARCHAR pattern, VARCHAR repl)")),(0,a.yg)("p",null,"Regular matching of STR strings, replacing the part hitting pattern with repl"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT regexp_replace('a b c', \" \", \"-\");\n+-----------------------------------+\n| regexp_replace('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b-c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace('a b c','(b)','<\\\\1>');\n+----------------------------------------+\n| regexp_replace('a b c', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> c                                |\n+----------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REGEXP_REPLACE,REGEXP,REPLACE\n")))}g.isMDXComponent=!0}}]);