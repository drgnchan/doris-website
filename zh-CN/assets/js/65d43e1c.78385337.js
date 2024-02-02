"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78772],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>y});var r=n(11504);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=s,y=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(45072),s=(n(11504),n(95788));const i={title:"starts_with",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/starts_with",id:"version-1.2/sql-manual/sql-functions/string-functions/starts_with",title:"starts_with",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/starts_with.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/starts_with",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/starts_with",draft:!1,tags:[],version:"1.2",frontMatter:{title:"starts_with",language:"zh-CN"},sidebar:"docs",previous:{title:"ends_with",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/ends_with"},next:{title:"trim",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/trim"}},a={},c=[{value:"starts_with",id:"starts_with",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"starts_with"},"starts_with"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"BOOLEAN STARTS_WITH(VARCHAR str, VARCHAR prefix)")),(0,s.yg)("p",null,"\u5982\u679c\u5b57\u7b26\u4e32\u4ee5\u6307\u5b9a\u524d\u7f00\u5f00\u5934\uff0c\u8fd4\u56detrue\u3002\u5426\u5219\uff0c\u8fd4\u56defalse\u3002\u4efb\u610f\u53c2\u6570\u4e3aNULL\uff0c\u8fd4\u56deNULL\u3002"),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"MySQL [(none)]> select starts_with(\"hello world\",\"hello\");\n+-------------------------------------+\n| starts_with('hello world', 'hello') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n\nMySQL [(none)]> select starts_with(\"hello world\",\"world\");\n+-------------------------------------+\n| starts_with('hello world', 'world') |\n+-------------------------------------+\n|                                   0 |\n+-------------------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"STARTS_WITH\n")))}d.isMDXComponent=!0}}]);