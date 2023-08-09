"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74481],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>w});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,w=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(w,a(a({ref:n},u),{},{components:t})):r.createElement(w,a({ref:n},u))}));function w(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},54784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW_FUNCTION_NTILE",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/window-function-ntile",id:"sql-manual/sql-functions/window-functions/window-function-ntile",title:"WINDOW_FUNCTION_NTILE",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/docs/sql-manual/sql-functions/window-functions/window-function-ntile.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-ntile",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/window-function-ntile",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW_FUNCTION_NTILE",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_ROW_NUMBER",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/window-function-row-number"},next:{title:"WINDOW_FUNCTION_WINDOW_FUNNEL",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/window-function-window-funnel"}},c={},s=[{value:"WINDOW FUNCTION NTILE",id:"window-function-ntile",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-ntile"},"WINDOW FUNCTION NTILE"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"For NTILE(n), this function will divides rows in a sorted partition into a specific number of groups(in this case, n buckets). Each group is assigned a bucket number starting at one. For the case that cannot be distributed evenly, rows are preferentially allocated to the bucket with the smaller number. The number of rows in all buckets cannot differ by more than 1. For now, n must be constant positive integer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"NTILE(n) OVER(partition_by_clause order_by_clause)\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select x, y, ntile(2) over(partition by x order by y) as ntile from int_t;\n\n| x | y    | rank     |\n|---|------|----------|\n| 1 | 1    | 1        |\n| 1 | 2    | 1        |\n| 1 | 2    | 2        |\n| 2 | 1    | 1        |\n| 2 | 2    | 1        |\n| 2 | 3    | 2        |\n| 3 | 1    | 1        |\n| 3 | 1    | 1        |\n| 3 | 2    | 2        |\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,NTILE\n")))}p.isMDXComponent=!0}}]);