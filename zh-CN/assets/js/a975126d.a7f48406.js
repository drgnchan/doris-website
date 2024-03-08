"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41302],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||y[m]||l;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},565175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const l={title:"SHOW-ENCRYPT-KEY",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY",id:"version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY",title:"SHOW-ENCRYPT-KEY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-ENCRYPT-KEY",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-EXPORT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},next:{title:"SHOW-FUNCTIONS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS"}},i={},s=[{value:"SHOW-ENCRYPT-KEY",id:"show-encrypt-key",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-encrypt-key"},"SHOW-ENCRYPT-KEY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW ENCRYPTKEYS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u6240\u6709\u7684\u81ea\u5b9a\u4e49\u7684\u5bc6\u94a5\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u4e86\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u67e5\u770b\u5bf9\u5e94\u6570\u636e\u5e93\u7684\uff0c\u5426\u5219\u76f4\u63a5\u67e5\u8be2\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u6570\u636e\u5e93\u3002"),(0,a.yg)("p",null,"\u9700\u8981\u5bf9\u8fd9\u4e2a\u6570\u636e\u5e93\u62e5\u6709 ",(0,a.yg)("inlineCode",{parentName:"p"},"ADMIN")," \u6743\u9650"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ENCRYPTKEYS [IN|FROM db] [LIKE 'key_pattern']\n")),(0,a.yg)("p",null,"\u53c2\u6570"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"db"),": \u8981\u67e5\u8be2\u7684\u6570\u636e\u5e93\u540d\u5b57\n",(0,a.yg)("inlineCode",{parentName:"p"},"key_pattern"),": \u7528\u6765\u8fc7\u6ee4\u5bc6\u94a5\u540d\u79f0\u7684\u53c2\u6570")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'   mysql> SHOW ENCRYPTKEYS;\n   +-------------------+-------------------+\n   | EncryptKey Name   | EncryptKey String |\n   +-------------------+-------------------+\n   | example_db.my_key | ABCD123456789     |\n   +-------------------+-------------------+\n   1 row in set (0.00 sec)\n\n   mysql> SHOW ENCRYPTKEYS FROM example_db LIKE "%my%";\n   +-------------------+-------------------+\n   | EncryptKey Name   | EncryptKey String |\n   +-------------------+-------------------+\n   | example_db.my_key | ABCD123456789     |\n   +-------------------+-------------------+\n   1 row in set (0.00 sec)\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, ENCRYPT, KEY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);