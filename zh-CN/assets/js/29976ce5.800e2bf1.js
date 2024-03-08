"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62287],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},360907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-CHARSET",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CHARSET",id:"sql-manual/sql-reference/Show-Statements/SHOW-CHARSET",title:"SHOW-CHARSET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-CHARSET.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CHARSET",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CHARSET",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CHARSET",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-CREATE-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE"},next:{title:"SHOW-CREATE-CATALOG",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-CATALOG"}},s={},i=[{value:"SHOW-CHARSET",id:"show-charset",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:i},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-charset"},"SHOW-CHARSET"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,'"SHOW CHARACTER" \u547d\u4ee4\u7528\u4e8e\u663e\u793a\u5f53\u524d\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u4e2d\u53ef\u7528\u7684\u5b57\u7b26\u96c6\uff08character set\uff09\u4ee5\u53ca\u4e0e\u6bcf\u4e2a\u5b57\u7b26\u96c6\u76f8\u5173\u8054\u7684\u4e00\u4e9b\u5c5e\u6027\u3002\u8fd9\u4e9b\u5c5e\u6027\u53ef\u80fd\u5305\u62ec\u5b57\u7b26\u96c6\u7684\u540d\u79f0\u3001\u9ed8\u8ba4\u6392\u5e8f\u89c4\u5219\u3001\u6700\u5927\u5b57\u8282\u957f\u5ea6\u7b49\u3002\u901a\u8fc7\u8fd0\u884c "SHOW CHARACTER" \u547d\u4ee4\uff0c\u53ef\u4ee5\u67e5\u770b\u7cfb\u7edf\u4e2d\u652f\u6301\u7684\u5b57\u7b26\u96c6\u5217\u8868\u53ca\u5176\u8be6\u7ec6\u4fe1\u606f\u3002'),(0,a.yg)("p",null,"SHOW CHARACTER \u547d\u4ee4\u8fd4\u56de\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,a.yg)("p",null,"Charset\uff1a\u5b57\u7b26\u96c6\nDescription\uff1a\u63cf\u8ff0\nDefault Collation\uff1a\u9ed8\u8ba4\u6821\u5bf9\u540d\u79f0\nMaxlen\uff1a\u6700\u5927\u5b57\u8282\u957f\u5ea6"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show chatset;\n\n| Charset   | Description     | Default collation | Maxlen |\n|-----------|-----------------|-------------------|--------|\n| utf8mb4   | UTF-8 Unicode   | utf8mb4_0900_bin  | 4      |\n\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, CHARSET\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);