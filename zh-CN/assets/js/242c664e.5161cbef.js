"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93372],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||N[d]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>N,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const i={title:"WINDOW-FUNCTION-NTILE",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE",id:"version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE",title:"WINDOW-FUNCTION-NTILE",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"WINDOW-FUNCTION-NTILE",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-ROW_NUMBER",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-ROW-NUMBER"},next:{title:"WINDOW-FUNCTION-WINDOW-FUNNEL",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL"}},s={},c=[{value:"WINDOW FUNCTION NTILE",id:"window-function-ntile",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function N(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-ntile"},"WINDOW FUNCTION NTILE"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u5bf9\u4e8eNTILE(n), \u8be5\u51fd\u6570\u4f1a\u5c06\u6392\u5e8f\u5206\u533a\u4e2d\u7684\u6240\u6709\u884c\u6309\u987a\u5e8f\u5206\u914d\u5230n\u4e2a\u6876\u4e2d(\u7f16\u53f7\u8f83\u5c0f\u7684\u6876\u6ee1\u4e86\u4e4b\u540e\u624d\u80fd\u5206\u914d\u7f16\u53f7\u8f83\u5927\u7684\u6876)\u3002\u5bf9\u4e8e\u6bcf\u4e00\u884c, NTILE()\u51fd\u6570\u4f1a\u8fd4\u56de\u8be5\u884c\u6570\u636e\u6240\u5728\u7684\u6876\u7684\u7f16\u53f7(\u4ece1\u5230n)\u3002\u5bf9\u4e8e\u4e0d\u80fd\u5e73\u5747\u5206\u914d\u7684\u60c5\u51b5, \u4f18\u5148\u5206\u914d\u5230\u7f16\u53f7\u8f83\u5c0f\u7684\u6876\u4e2d\u3002\u6240\u6709\u6876\u4e2d\u7684\u884c\u6570\u76f8\u5dee\u4e0d\u80fd\u8d85\u8fc71\u3002\u76ee\u524dn\u53ea\u80fd\u662f\u6b63\u6574\u6570\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"NTILE(n) OVER(partition_by_clause order_by_clause)\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select x, y, ntile(2) over(partition by x order by y) as rank from int_t;\n\n| x | y    | rank     |\n|---|------|----------|\n| 1 | 1    | 1        |\n| 1 | 2    | 1        |\n| 1 | 2    | 2        |\n| 2 | 1    | 1        |\n| 2 | 2    | 1        |\n| 2 | 3    | 2        |\n| 3 | 1    | 1        |\n| 3 | 1    | 1        |\n| 3 | 2    | 2        |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,NTILE\n")))}N.isMDXComponent=!0}}]);