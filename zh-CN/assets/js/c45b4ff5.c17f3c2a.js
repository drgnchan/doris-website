"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[17742],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",O={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},S=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),S=a,m=u["".concat(s,".").concat(S)]||u[S]||O[S]||l;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=S;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}S.displayName="MDXCreateElement"},820058:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>O,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const l={title:"SHOW-REPOSITORIES",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES",id:"version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES",title:"SHOW-REPOSITORIES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-REPOSITORIES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TABLE-STATUS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-STATUS"},next:{title:"SHOW-QUERY-PROFILE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE"}},s={},c=[{value:"SHOW-REPOSITORIES",id:"show-repositories",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function O(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-repositories"},"SHOW-REPOSITORIES"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW REPOSITORIES"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u5f53\u524d\u5df2\u521b\u5efa\u7684\u4ed3\u5e93"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW REPOSITORIES;\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\nRepoId\uff1a           \u552f\u4e00\u7684\u4ed3\u5e93ID\nRepoName\uff1a   \u4ed3\u5e93\u540d\u79f0\nCreateTime\uff1a   \u7b2c\u4e00\u6b21\u521b\u5efa\u8be5\u4ed3\u5e93\u7684\u65f6\u95f4\nIsReadOnly\uff1a   \u662f\u5426\u4e3a\u53ea\u8bfb\u4ed3\u5e93\nLocation\uff1a        \u4ed3\u5e93\u4e2d\u7528\u4e8e\u5907\u4efd\u6570\u636e\u7684\u6839\u76ee\u5f55\nBroker\uff1a            \u4f9d\u8d56\u7684 Broker\nErrMsg\uff1a            Doris \u4f1a\u5b9a\u671f\u68c0\u67e5\u4ed3\u5e93\u7684\u8fde\u901a\u6027\uff0c\u5982\u679c\u51fa\u73b0\u95ee\u9898\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u9519\u8bef\u4fe1\u606f")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u67e5\u770b\u5df2\u521b\u5efa\u7684\u4ed3\u5e93\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW REPOSITORIES;\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, REPOSITORIES\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}O.isMDXComponent=!0}}]);