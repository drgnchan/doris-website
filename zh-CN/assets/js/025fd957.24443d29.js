"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28168],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>y});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(45072),a=(t(11504),t(95788));const o={title:"truncate",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/math-functions/truncate",id:"version-1.2/sql-manual/sql-functions/math-functions/truncate",title:"truncate",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/math-functions/truncate.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/truncate",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/truncate",draft:!1,tags:[],version:"1.2",frontMatter:{title:"truncate",language:"zh-CN"},sidebar:"docs",previous:{title:"round_bankers",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/round_bankers"},next:{title:"abs",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/abs"}},c={},u=[{value:"truncate",id:"truncate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"truncate"},"truncate"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE truncate(DOUBLE x, INT d)"),"\n\u6309\u7167\u4fdd\u7559\u5c0f\u6570\u7684\u4f4d\u6570",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u5bf9",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u8fdb\u884c\u6570\u503c\u622a\u53d6\u3002"),(0,a.yg)("p",null,"\u89c4\u5219\u5982\u4e0b\uff1a\n\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"d > 0"),"\u65f6\uff1a\u4fdd\u7559",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u4f4d\u5c0f\u6570\n\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"d = 0"),"\u65f6\uff1a\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5c0f\u6570\u90e8\u5206\u53bb\u9664\uff0c\u53ea\u4fdd\u7559\u6574\u6570\u90e8\u5206\n\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"d < 0"),"\u65f6\uff1a\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5c0f\u6570\u90e8\u5206\u53bb\u9664\uff0c\u6574\u6570\u90e8\u5206\u6309\u7167 ",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u6240\u6307\u5b9a\u7684\u4f4d\u6570\uff0c\u91c7\u7528\u6570\u5b57",(0,a.yg)("inlineCode",{parentName:"p"},"0"),"\u8fdb\u884c\u66ff\u6362"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select truncate(124.3867, 2);\n+-----------------------+\n| truncate(124.3867, 2) |\n+-----------------------+\n|                124.38 |\n+-----------------------+\nmysql> select truncate(124.3867, 0);\n+-----------------------+\n| truncate(124.3867, 0) |\n+-----------------------+\n|                   124 |\n+-----------------------+\nmysql> select truncate(-124.3867, -2);\n+-------------------------+\n| truncate(-124.3867, -2) |\n+-------------------------+\n|                    -100 |\n+-------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TRUNCATE\n")))}d.isMDXComponent=!0}}]);