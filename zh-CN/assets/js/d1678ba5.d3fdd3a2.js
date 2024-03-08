"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28375],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},253786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-SMALL-FILES",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-SMALL-FILES",id:"sql-manual/sql-reference/Show-Statements/SHOW-SMALL-FILES",title:"SHOW-SMALL-FILES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-SMALL-FILES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-SMALL-FILES",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SMALL-FILES",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-SMALL-FILES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TABLE-ID",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLE-ID"},next:{title:"SHOW-POLICY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-POLICY"}},s={},c=[{value:"SHOW-SMALL-FILES",id:"show-small-files",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-small-files"},"SHOW-SMALL-FILES"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW FILE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4e00\u4e2a\u6570\u636e\u5e93\u5185\uff0c\u7531 CREATE FILE \u547d\u4ee4\u521b\u5efa\u7684\u6587\u4ef6\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW FILE [FROM database];\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"FileId: \u6587\u4ef6ID\uff0c\u5168\u5c40\u552f\u4e00"),(0,a.yg)("li",{parentName:"ul"},"DbName: \u6240\u5c5e\u6570\u636e\u5e93\u540d\u79f0"),(0,a.yg)("li",{parentName:"ul"},"Catalog: \u81ea\u5b9a\u4e49\u5206\u7c7b"),(0,a.yg)("li",{parentName:"ul"},"FileName: \u6587\u4ef6\u540d"),(0,a.yg)("li",{parentName:"ul"},"FileSize: \u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d\u5b57\u8282"),(0,a.yg)("li",{parentName:"ul"},"MD5: \u6587\u4ef6\u7684 MD5")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6570\u636e\u5e93 my_database \u4e2d\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW FILE FROM my_database;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, SMALL, FILES\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);