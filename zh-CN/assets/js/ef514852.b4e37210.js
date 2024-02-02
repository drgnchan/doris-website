"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[76056],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>d});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),y=o,d=p["".concat(c,".").concat(y)]||p[y]||m[y]||l;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},48364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(45072),o=(t(11504),t(95788));const l={title:"now",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/now",id:"version-1.2/sql-manual/sql-functions/date-time-functions/now",title:"now",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/now.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/now",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/now",draft:!1,tags:[],version:"1.2",frontMatter:{title:"now",language:"zh-CN"},sidebar:"docs",previous:{title:"localtime,localtimestamp",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/localtime"},next:{title:"year",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/year"}},c={},s=[{value:"now",id:"now",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"now"},"now"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME NOW()")),(0,o.yg)("p",null,"\u83b7\u5f97\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u4ee5Datetime\u7c7b\u578b\u8fd4\u56de"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select now();\n+---------------------+\n| now()               |\n+---------------------+\n| 2019-05-27 15:58:25 |\n+---------------------+\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIMEV2 NOW(INT precision)")),(0,o.yg)("p",null,"\u83b7\u5f97\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u4ee5DatetimeV2\u7c7b\u578b\u8fd4\u56de\nprecision\u4ee3\u8868\u4e86\u7528\u6237\u60f3\u8981\u7684\u79d2\u7cbe\u5ea6\uff0c\u5f53\u524d\u7cbe\u5ea6\u6700\u591a\u652f\u6301\u5230\u5fae\u79d2\uff0c\u5373precision\u53d6\u503c\u8303\u56f4\u4e3a","[0, 6]","\u3002"),(0,o.yg)("h3",{id:"example-1"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select now(3);\n+-------------------------+\n| now(3)                  |\n+-------------------------+\n| 2022-09-06 16:13:30.078 |\n+-------------------------+\n")),(0,o.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u5f53\u524d\u53ea\u6709DatetimeV2\u6570\u636e\u7c7b\u578b\u53ef\u652f\u6301\u79d2\u7cbe\u5ea6"),(0,o.yg)("li",{parentName:"ol"},"\u53d7\u9650\u4e8eJDK\u5b9e\u73b0\uff0c\u5982\u679c\u7528\u6237\u4f7f\u7528JDK8\u6784\u5efaFE\uff0c\u5219\u7cbe\u5ea6\u6700\u591a\u652f\u6301\u5230\u6beb\u79d2\uff08\u5c0f\u6570\u70b9\u540e\u4e09\u4f4d\uff09\uff0c\u66f4\u5927\u7684\u7cbe\u5ea6\u4f4d\u5c06\u5168\u90e8\u586b\u51450\u3002\u5982\u679c\u7528\u6237\u6709\u66f4\u9ad8\u7cbe\u5ea6\u9700\u6c42\uff0c\u8bf7\u4f7f\u7528JDK11\u3002")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"NOW\n")))}m.isMDXComponent=!0}}]);