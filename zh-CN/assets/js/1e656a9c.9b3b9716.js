"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4005],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,g=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},366508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-GRANTS",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-GRANTS",id:"sql-manual/sql-reference/Show-Statements/SHOW-GRANTS",title:"SHOW-GRANTS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-GRANTS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-GRANTS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-GRANTS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-GRANTS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-FILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-FILE"},next:{title:"SHOW-LAST-INSERT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT"}},s={},c=[{value:"SHOW-GRANTS",id:"show-grants",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-grants"},"SHOW-GRANTS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW GRANTS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null," \u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u7528\u6237\u6743\u9650\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [ALL] GRANTS [FOR user_identity];\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"SHOW ALL GRANTS \u53ef\u4ee5\u67e5\u770b\u6240\u6709\u7528\u6237\u7684\u6743\u9650\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a user_identity\uff0c\u5219\u67e5\u770b\u8be5\u6307\u5b9a\u7528\u6237\u7684\u6743\u9650\u3002\u4e14\u8be5 user_identity \u5fc5\u987b\u4e3a\u901a\u8fc7 CREATE USER \u547d\u4ee4\u521b\u5efa\u7684\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u6307\u5b9a user_identity\uff0c\u5219\u67e5\u770b\u5f53\u524d\u7528\u6237\u7684\u6743\u9650\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6240\u6709\u7528\u6237\u6743\u9650\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALL GRANTS;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6307\u5b9a user \u7684\u6743\u9650"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS FOR jack@'%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u7528\u6237\u7684\u6743\u9650"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, GRANTS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);