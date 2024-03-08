"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4848],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},E=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),E=r,y=u["".concat(p,".").concat(E)]||u[E]||m[E]||l;return t?a.createElement(y,i(i({ref:n},s),{},{components:t})):a.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=E;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}E.displayName="MDXCreateElement"},219175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(58168),r=(t(296540),t(15680));const l={title:"CANCEL-EXPORT",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",title:"CANCEL-EXPORT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",draft:!1,tags:[],version:"current",frontMatter:{title:"CANCEL-EXPORT",language:"zh-CN"},sidebar:"docs",previous:{title:"EXPORT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},next:{title:"INSERT-OVERWRITE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE"}},p={},c=[{value:"CANCEL-EXPORT",id:"cancel-export",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"cancel-export"},"CANCEL-EXPORT"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"1.2.2"}),(0,r.yg)("p",null,"CANCEL EXPORT"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u64a4\u9500\u6307\u5b9a label \u7684 EXPORT \u4f5c\u4e1a\uff0c\u6216\u8005\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u6279\u91cf\u64a4\u9500 EXPORT \u4f5c\u4e1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\n[FROM db_name]\nWHERE [LABEL = "export_label" | LABEL like "label_pattern" | STATE = "PENDING/IN_QUEUE/EXPORTING"]\n')),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example_db \u4e0a\uff0c label \u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"example_db_test_export_label")," \u7684 EXPORT \u4f5c\u4e1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL = "example_db_test_export_label" and STATE = "EXPORTING";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u64a4\u9500\u6570\u636e\u5e93 example",(0,r.yg)("em",{parentName:"p"},"db \u4e0a\uff0c \u6240\u6709\u5305\u542b example")," \u7684 EXPORT \u4f5c\u4e1a\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL like "%example%";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u53d6\u6d88\u72b6\u6001\u4e3a PENDING \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE STATE = "PENDING";\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CANCEL, EXPORT\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u53ea\u80fd\u53d6\u6d88\u5904\u4e8e PENDING\u3001IN_QUEUE\u3001EXPORTING \u72b6\u6001\u7684\u672a\u5b8c\u6210\u7684\u5bfc\u51fa\u4f5c\u4e1a\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5f53\u6267\u884c\u6279\u91cf\u64a4\u9500\u65f6\uff0cDoris \u4e0d\u4f1a\u4fdd\u8bc1\u6240\u6709\u5bf9\u5e94\u7684 EXPORT \u4f5c\u4e1a\u539f\u5b50\u7684\u64a4\u9500\u3002\u5373\u6709\u53ef\u80fd\u4ec5\u6709\u90e8\u5206 EXPORT \u4f5c\u4e1a\u64a4\u9500\u6210\u529f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SHOW EXPORT \u8bed\u53e5\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\uff0c\u5e76\u5c1d\u8bd5\u91cd\u590d\u6267\u884c CANCEL EXPORT \u8bed\u53e5\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5f53\u64a4\u9500",(0,r.yg)("inlineCode",{parentName:"li"},"EXPORTING"),"\u72b6\u6001\u7684\u4f5c\u4e1a\u65f6\uff0c\u6709\u53ef\u80fd\u4f5c\u4e1a\u5df2\u7ecf\u5bfc\u51fa\u90e8\u5206\u6570\u636e\u5230\u5b58\u50a8\u7cfb\u7edf\u4e0a\uff0c\u7528\u6237\u9700\u8981\u81ea\u884c\u5904\u7406(\u5220\u9664)\u8be5\u90e8\u5206\u5bfc\u51fa\u6570\u636e\u3002")))}m.isMDXComponent=!0}}]);