"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65864],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),N=a,d=u["".concat(s,".").concat(N)]||u[N]||m[N]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=N;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},50916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const l={title:"UNINSTALL-PLUGIN",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN",title:"UNINSTALL-PLUGIN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN",draft:!1,tags:[],version:"2.0",frontMatter:{title:"UNINSTALL-PLUGIN",language:"zh-CN"},sidebar:"docs",previous:{title:"INSTALL-PLUGIN",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"},next:{title:"ADMIN-SET-REPLICA-STATUS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS"}},s={},c=[{value:"UNINSTALL-PLUGIN",id:"uninstall-plugin",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"uninstall-plugin"},"UNINSTALL-PLUGIN"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"UNINSTALL PLUGIN"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5378\u8f7d\u4e00\u4e2a\u63d2\u4ef6\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"UNINSTALL PLUGIN plugin_name;\n")),(0,a.yg)("p",null," plugin_name \u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW PLUGINS;")," \u547d\u4ee4\u67e5\u770b\u3002"),(0,a.yg)("p",null,"\u53ea\u80fd\u5378\u8f7d\u975e builtin \u7684\u63d2\u4ef6\u3002"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5378\u8f7d\u4e00\u4e2a\u63d2\u4ef6\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"UNINSTALL PLUGIN auditdemo;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"UNINSTALL, PLUGIN\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);