"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[39131],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},378463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_MAX",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/window-function-max",id:"sql-manual/sql-functions/window-functions/window-function-max",title:"WINDOW_FUNCTION_MAX",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/window-functions/window-function-max.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-max",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-max",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW_FUNCTION_MAX",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_AVG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-avg"},next:{title:"WINDOW_FUNCTION_MIN",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-min"}},c={},s=[{value:"WINDOW FUNCTION MAX",id:"window-function-max",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-max"},"WINDOW FUNCTION MAX"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"LEAD() \u65b9\u6cd5\u7528\u6765\u8ba1\u7b97\u7a97\u53e3\u5185\u7684\u6700\u5927\u503c\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"MAX([DISTINCT | ALL] expression) [OVER (analytic_clause)]\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"\u8ba1\u7b97\u4ece\u7b2c\u4e00\u884c\u5230\u5f53\u524d\u884c\u4e4b\u540e\u4e00\u884c\u7684\u6700\u5927\u503c"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select x, property,   \nmax(x) over    \n(   \norder by property, x    \nrows between unbounded preceding and 1 following    \n) as 'local maximum'    \nfrom int_t where property in ('prime','square');\n\n| x | property | local maximum |\n|---|----------|---------------|\n| 2 | prime    | 3             |\n| 3 | prime    | 5             |\n| 5 | prime    | 7             |\n| 7 | prime    | 7             |\n| 1 | square   | 7             |\n| 4 | square   | 9             |\n| 9 | square   | 9             |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,MAX\n")))}d.isMDXComponent=!0}}]);