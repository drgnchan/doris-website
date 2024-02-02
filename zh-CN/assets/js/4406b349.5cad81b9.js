"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57464],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>E});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},S=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),S=a,E=u["".concat(s,".").concat(S)]||u[S]||m[S]||l;return t?n.createElement(E,o(o({ref:r},p),{},{components:t})):n.createElement(E,o({ref:r},p))}));function E(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=S;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}S.displayName="MDXCreateElement"},64928:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(45072),a=(t(11504),t(95788));const l={title:"SHOW-RESOURCES",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES",title:"SHOW-RESOURCES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-RESOURCES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TABLES",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-TABLES"},next:{title:"SHOW-PARTITIONS",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS"}},s={},c=[{value:"SHOW-RESOURCES",id:"show-resources",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-resources"},"SHOW-RESOURCES"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW RESOURCES"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u7528\u6237\u6709\u4f7f\u7528\u6743\u9650\u7684\u8d44\u6e90\u3002\u666e\u901a\u7528\u6237\u4ec5\u80fd\u5c55\u793a\u6709\u4f7f\u7528\u6743\u9650\u7684\u8d44\u6e90\uff0croot \u6216 admin \u7528\u6237\u4f1a\u5c55\u793a\u6240\u6709\u7684\u8d44\u6e90\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW RESOURCES\n[\n  WHERE\n  [NAME [ = "your_resource_name" | LIKE "name_matcher"]]\n  [RESOURCETYPE = ["SPARK"]]\n]\n[ORDER BY ...]\n[LIMIT limit][OFFSET offset];\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528 NAME LIKE\uff0c\u5219\u4f1a\u5339\u914d RESOURCES \u7684 Name \u5305\u542b name_matcher \u7684Resource"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528 NAME = \uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 Name"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a\u4e86 RESOURCETYPE\uff0c\u5219\u5339\u914d\u5bf9\u5e94\u7684 Resrouce \u7c7b\u578b"),(0,a.yg)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528 ORDER BY \u5bf9\u4efb\u610f\u5217\u7ec4\u5408\u8fdb\u884c\u6392\u5e8f"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a\u4e86 LIMIT\uff0c\u5219\u663e\u793a limit \u6761\u5339\u914d\u8bb0\u5f55\u3002\u5426\u5219\u5168\u90e8\u663e\u793a"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a\u4e86 OFFSET\uff0c\u5219\u4ece\u504f\u79fb\u91cf offset \u5f00\u59cb\u663e\u793a\u67e5\u8be2\u7ed3\u679c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u504f\u79fb\u91cf\u4e3a0\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u5f53\u524d\u7528\u6237\u62e5\u6709\u6743\u9650\u7684\u6240\u6709 Resource"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW RESOURCES;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a Resource \uff0cNAME \u4e2d\u5305\u542b\u5b57\u7b26\u4e32 "20140102"\uff0c\u5c55\u793a10\u4e2a\u5c5e\u6027'),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW RESOURCES WHERE NAME LIKE "2014_01_02" LIMIT 10;\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a Resource \uff0c\u6307\u5b9a NAME \u4e3a "20140102" \u5e76\u6309 KEY \u964d\u5e8f\u6392\u5e8f'),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW RESOURCES WHERE NAME = "20140102" ORDER BY `KEY` DESC;\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, RESOURCES\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);