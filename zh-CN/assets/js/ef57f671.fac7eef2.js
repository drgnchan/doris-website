"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53692],{95788:(e,n,r)=>{r.d(n,{Iu:()=>p,yg:()=>d});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},O=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),O=a,d=u["".concat(s,".").concat(O)]||u[O]||m[O]||l;return r?t.createElement(d,o(o({ref:n},p),{},{components:r})):t.createElement(d,o({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=O;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}O.displayName="MDXCreateElement"},68156:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(45072),a=(r(11504),r(95788));const l={title:"SHOW-RESTORE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-RESTORE",id:"sql-manual/sql-reference/Show-Statements/SHOW-RESTORE",title:"SHOW-RESTORE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-RESTORE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-RESTORE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-RESTORE",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-RESTORE",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-FRONTENDS-DISKS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-FRONTENDS-DISKS"},next:{title:"SHOW-PROPERTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY"}},s={},c=[{value:"SHOW-RESTORE",id:"show-restore",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-restore"},"SHOW-RESTORE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW RESTORE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b RESTORE \u4efb\u52a1"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW [BRIEF] RESTORE [FROM DB_NAME]\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    1. Doris \u4e2d\u4ec5\u4fdd\u5b58\u6700\u8fd1\u4e00\u6b21 RESTORE \u4efb\u52a1\u3002\n            2. \u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\n        JobId\uff1a                  \u552f\u4e00\u4f5c\u4e1aid\n        Label\uff1a                  \u8981\u6062\u590d\u7684\u5907\u4efd\u7684\u540d\u79f0\n        Timestamp\uff1a              \u8981\u6062\u590d\u7684\u5907\u4efd\u7684\u65f6\u95f4\u7248\u672c\n        DbName\uff1a                 \u6240\u5c5e\u6570\u636e\u5e93\n        State\uff1a                  \u5f53\u524d\u9636\u6bb5\n            PENDING\uff1a        \u63d0\u4ea4\u4f5c\u4e1a\u540e\u7684\u521d\u59cb\u72b6\u6001\n            SNAPSHOTING\uff1a    \u6267\u884c\u5feb\u7167\u4e2d\n            DOWNLOAD\uff1a       \u5feb\u7167\u5b8c\u6210\uff0c\u51c6\u5907\u4e0b\u8f7d\u4ed3\u5e93\u4e2d\u7684\u5feb\u7167\n            DOWNLOADING\uff1a    \u5feb\u7167\u4e0b\u8f7d\u4e2d\n            COMMIT\uff1a         \u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\uff0c\u51c6\u5907\u751f\u6548\n            COMMITTING\uff1a      \u751f\u6548\u4e2d\n            FINISHED\uff1a       \u4f5c\u4e1a\u6210\u529f\n            CANCELLED\uff1a      \u4f5c\u4e1a\u5931\u8d25\n        AllowLoad\uff1a              \u6062\u590d\u65f6\u662f\u5426\u5141\u8bb8\u5bfc\u5165\uff08\u5f53\u524d\u4e0d\u652f\u6301\uff09\n        ReplicationNum\uff1a         \u6307\u5b9a\u6062\u590d\u7684\u526f\u672c\u6570\n        RestoreJobs\uff1a            \u8981\u6062\u590d\u7684\u8868\u548c\u5206\u533a\n        CreateTime\uff1a             \u4efb\u52a1\u63d0\u4ea4\u65f6\u95f4\n        MetaPreparedTime\uff1a       \u5143\u6570\u636e\u51c6\u5907\u5b8c\u6210\u65f6\u95f4\n        SnapshotFinishedTime\uff1a   \u5feb\u7167\u5b8c\u6210\u65f6\u95f4\n        DownloadFinishedTime\uff1a   \u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\u65f6\u95f4\n        FinishedTime\uff1a           \u4f5c\u4e1a\u7ed3\u675f\u65f6\u95f4\n        UnfinishedTasks\uff1a        \u5728 SNAPSHOTING\u3001DOWNLOADING \u548c COMMITTING \u9636\u6bb5\u4f1a\u663e\u793a\u8fd8\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1id\n        Status\uff1a                 \u5982\u679c\u4f5c\u4e1a\u5931\u8d25\uff0c\u663e\u793a\u5931\u8d25\u4fe1\u606f\n        Timeout\uff1a                \u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\n")),(0,a.yg)("version",{since:"dev"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    2. brief: \u4ec5\u8fd4\u56de\u7cbe\u7b80\u683c\u5f0f\u7684 RESTORE \u4efb\u52a1\u4fe1\u606f\uff0c\u4e0d\u5305\u542b RestoreObjs, Progress, TaskErrMsg \u4e09\u5217 \n"))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b example_db \u4e0b\u6700\u8fd1\u4e00\u6b21 RESTORE \u4efb\u52a1\u3002"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW RESTORE FROM example_db;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, RESTORE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);