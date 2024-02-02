"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22090],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},25380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const i={title:"WINDOW-FUNCTION-AVG",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-AVG",id:"version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-AVG",title:"WINDOW-FUNCTION-AVG",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-AVG.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-AVG",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-AVG",draft:!1,tags:[],version:"1.2",frontMatter:{title:"WINDOW-FUNCTION-AVG",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-LAST_VALUE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE"},next:{title:"WINDOW-FUNCTION-MIN",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-MIN"}},s={},c=[{value:"WINDOW FUNCTION AVG",id:"window-function-avg",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-avg"},"WINDOW FUNCTION AVG"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u8ba1\u7b97\u7a97\u53e3\u5185\u6570\u636e\u7684\u5e73\u5747\u503c"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"AVG([ALL] *expression*) [OVER (*analytic_clause*)]\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"\u8ba1\u7b97\u5f53\u524d\u884c\u548c\u5b83\u524d\u540e\u5404\u4e00\u884c\u6570\u636e\u7684x\u5e73\u5747\u503c"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select x, property,    \navg(x) over    \n(   \npartition by property    \norder by x    \nrows between 1 preceding and 1 following    \n) as 'moving average'    \nfrom int_t where property in ('odd','even');\n\n | x  | property | moving average |\n |----|----------|----------------|\n | 2  | even     | 3              |\n | 4  | even     | 4              |\n | 6  | even     | 6              |\n | 8  | even     | 8              |\n | 10 | even     | 9              |\n | 1  | odd      | 2              |\n | 3  | odd      | 3              |\n | 5  | odd      | 5              |\n | 7  | odd      | 7              |\n | 9  | odd      | 8              |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,AVG\n")))}d.isMDXComponent=!0}}]);