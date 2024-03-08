"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10045],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>g});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,g=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return n?t.createElement(g,o(o({ref:r},p),{},{components:n})):t.createElement(g,o({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},542793:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-VARIABLES",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",id:"version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",title:"SHOW-VARIABLES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-VARIABLES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TABLETS-BELONG",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS-BELONG"},next:{title:"SHOW-PLUGINS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-PLUGINS"}},s={},c=[{value:"SHOW-VARIABLES",id:"show-variables",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-variables"},"SHOW-VARIABLES"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW VARIABLES"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u662f\u7528\u6765\u663e\u793aDoris\u7cfb\u7edf\u53d8\u91cf\uff0c\u53ef\u4ee5\u901a\u8fc7\u6761\u4ef6\u67e5\u8be2"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [GLOBAL | SESSION] VARIABLES\n    [LIKE 'pattern' | WHERE expr]\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"show variables\u4e3b\u8981\u662f\u7528\u6765\u67e5\u770b\u7cfb\u7edf\u53d8\u91cf\u7684\u503c."),(0,a.yg)("li",{parentName:"ul"},"\u6267\u884cSHOW VARIABLES\u547d\u4ee4\u4e0d\u9700\u8981\u4efb\u4f55\u6743\u9650,\u53ea\u8981\u6c42\u80fd\u591f\u8fde\u63a5\u5230\u670d\u52a1\u5668\u5c31\u53ef\u4ee5."),(0,a.yg)("li",{parentName:"ul"},"\u4f7f\u7528like\u8bed\u53e5\u8868\u793a\u7528variable_name\u8fdb\u884c\u5339\u914d."),(0,a.yg)("li",{parentName:"ul"},"%\u767e\u5206\u53f7\u901a\u914d\u7b26\u53ef\u4ee5\u7528\u5728\u5339\u914d\u6a21\u5f0f\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8fd9\u91cc\u9ed8\u8ba4\u7684\u5c31\u662f\u5bf9Variable_name\u8fdb\u884c\u5339\u914d,\u8fd9\u91cc\u662f\u51c6\u786e\u5339\u914d"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"show variables like 'max_connections'; \n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u901a\u8fc7\u767e\u5206\u53f7(%)\u8fd9\u4e2a\u901a\u914d\u7b26\u8fdb\u884c\u5339\u914d,\u53ef\u4ee5\u5339\u914d\u591a\u9879"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"show variables like '%connec%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528 Where \u5b50\u53e5\u8fdb\u884c\u5339\u914d\u67e5\u8be2"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"show variables where variable_name = 'version';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, VARIABLES\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);