"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20765],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},527885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const i={title:"TRUNCATE",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/truncate",id:"version-2.1/sql-manual/sql-functions/numeric-functions/truncate",title:"TRUNCATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/numeric-functions/truncate.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/truncate",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/truncate",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TRUNCATE",language:"zh-CN"},sidebar:"docs",previous:{title:"ROUND_BANKERS",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/round-bankers"},next:{title:"ABS",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/abs"}},c={},u=[{value:"truncate",id:"truncate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"truncate"},"truncate"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE truncate(DOUBLE x, INT d)"),"\n\u6309\u7167\u4fdd\u7559\u5c0f\u6570\u7684\u4f4d\u6570",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u5bf9",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u8fdb\u884c\u6570\u503c\u622a\u53d6\u3002"),(0,a.yg)("p",null,"\u89c4\u5219\u5982\u4e0b\uff1a\n\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"d > 0"),"\u65f6\uff1a\u4fdd\u7559",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u4f4d\u5c0f\u6570\n\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"d = 0"),"\u65f6\uff1a\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5c0f\u6570\u90e8\u5206\u53bb\u9664\uff0c\u53ea\u4fdd\u7559\u6574\u6570\u90e8\u5206\n\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"d < 0"),"\u65f6\uff1a\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5c0f\u6570\u90e8\u5206\u53bb\u9664\uff0c\u6574\u6570\u90e8\u5206\u6309\u7167 ",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u6240\u6307\u5b9a\u7684\u4f4d\u6570\uff0c\u91c7\u7528\u6570\u5b57",(0,a.yg)("inlineCode",{parentName:"p"},"0"),"\u8fdb\u884c\u66ff\u6362"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select truncate(124.3867, 2);\n+-----------------------+\n| truncate(124.3867, 2) |\n+-----------------------+\n|                124.38 |\n+-----------------------+\nmysql> select truncate(124.3867, 0);\n+-----------------------+\n| truncate(124.3867, 0) |\n+-----------------------+\n|                   124 |\n+-----------------------+\nmysql> select truncate(-124.3867, -2);\n+-------------------------+\n| truncate(-124.3867, -2) |\n+-------------------------+\n|                    -100 |\n+-------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TRUNCATE\n")))}d.isMDXComponent=!0}}]);