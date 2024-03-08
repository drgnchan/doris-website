"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13355],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},S=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(r),S=a,y=u["".concat(c,".").concat(S)]||u[S]||m[S]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=S;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}S.displayName="MDXCreateElement"},513946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-TABLE-STATUS",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATUS",id:"sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATUS",title:"SHOW-TABLE-STATUS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATUS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATUS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATUS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-TABLE-STATUS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TABLE-STATS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATS"},next:{title:"SHOW-REPOSITORIES",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES"}},c={},i=[{value:"SHOW-TABLE-STATUS",id:"show-table-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-table-status"},"SHOW-TABLE-STATUS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW TABLE STATUS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b Table \u7684\u4e00\u4e9b\u4fe1\u606f\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW TABLE STATUS\n[FROM db] [LIKE "pattern"]\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8be5\u8bed\u53e5\u4e3b\u8981\u7528\u4e8e\u517c\u5bb9 MySQL \u8bed\u6cd5\uff0c\u76ee\u524d\u4ec5\u663e\u793a Comment \u7b49\u5c11\u91cf\u4fe1\u606f")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLE STATUS;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\uff0c\u540d\u79f0\u5305\u542b example \u7684\u8868\u7684\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW TABLE STATUS FROM db LIKE "%example%";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, TABLE, STATUS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);