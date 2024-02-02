"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73e3],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,d=u["".concat(c,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(45072),a=(n(11504),n(95788));const l={title:"SHOW-CATALOG-RECYCLE-BIN",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",title:"SHOW-CATALOG-RECYCLE-BIN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-CATALOG-RECYCLE-BIN",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-POLICY",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-POLICY"},next:{title:"SHOW-QUERY-STATS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS"}},c={},s=[{value:"SHOW-CATALOG-RECYCLE-BIN",id:"show-catalog-recycle-bin",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-catalog-recycle-bin"},"SHOW-CATALOG-RECYCLE-BIN"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("version",{since:"1.2"},(0,a.yg)("p",null,"SHOW CATALOG RECYCLE BIN")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u56de\u6536\u7ad9\u4e2d\u53ef\u56de\u6536\u7684\u5e93,\u8868\u6216\u5206\u533a\u5143\u6570\u636e\u4fe1\u606f"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\n        Type\uff1a                \u5143\u6570\u636e\u7c7b\u578b:Database\u3001Table\u3001Partition\n        Name\uff1a                \u5143\u6570\u636e\u540d\u79f0      \n        DbId\uff1a                database\u5bf9\u5e94\u7684id\n        TableId\uff1a             table\u5bf9\u5e94\u7684id\n        PartitionId\uff1a         partition\u5bf9\u5e94\u7684id\n        DropTime\uff1a            \u5143\u6570\u636e\u653e\u5165\u56de\u6536\u7ad9\u7684\u65f6\u95f4\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6240\u6709\u56de\u6536\u7ad9\u5143\u6570\u636e"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW CATALOG RECYCLE BIN;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u56de\u6536\u7ad9\u4e2d\u540d\u79f0'test'\u7684\u5143\u6570\u636e"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW CATALOG RECYCLE BIN WHERE NAME = 'test';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, CATALOG RECYCLE BIN\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);