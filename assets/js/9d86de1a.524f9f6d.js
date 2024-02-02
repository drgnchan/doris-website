"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86296],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>d});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),y=a,d=p["".concat(i,".").concat(y)]||p[y]||f[y]||c;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},32372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=t(45072),a=(t(11504),t(95788));const c={title:"CONCAT",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/concat",id:"sql-manual/sql-functions/string-functions/concat",title:"CONCAT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/concat.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/concat",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/concat",draft:!1,tags:[],version:"current",frontMatter:{title:"CONCAT",language:"en"},sidebar:"docs",previous:{title:"CHAR",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/char"},next:{title:"CONCAT_WS",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/concat-ws"}},i={},s=[{value:"concat",id:"concat",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"concat"},"concat"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR concat (VARCHAR,...)")),(0,a.yg)("p",null,"Connect multiple strings and return NULL if any of the parameters is NULL"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select concat(\"a\", \"b\");\n+------------------+\n| concat('a', 'b') |\n+------------------+\n| ab               |\n+------------------+\n\nmysql> select concat(\"a\", \"b\", \"c\");\n+-----------------------+\n| concat('a', 'b', 'c') |\n+-----------------------+\n| abc                   |\n+-----------------------+\n\nmysql> select concat(\"a\", null, \"c\");\n+------------------------+\n| concat('a', NULL, 'c') |\n+------------------------+\n| NULL                   |\n+------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CONCAT\n")))}f.isMDXComponent=!0}}]);