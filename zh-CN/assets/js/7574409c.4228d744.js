"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4844],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>f});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const o={title:"AVG",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/avg",id:"sql-manual/sql-functions/aggregate-functions/avg",title:"AVG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/avg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/avg",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/avg",draft:!1,tags:[],version:"current",frontMatter:{title:"AVG",language:"zh-CN"},sidebar:"docs",previous:{title:"STDDEV_SAMP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev-samp"},next:{title:"AVG_WEIGHTED",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/avg-weighted"}},s={},c=[{value:"AVG",id:"avg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"avg"},"AVG"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"AVG([DISTINCT] expr)")),(0,a.yg)("p",null,"\u7528\u4e8e\u8fd4\u56de\u9009\u4e2d\u5b57\u6bb5\u7684\u5e73\u5747\u503c"),(0,a.yg)("p",null,"\u53ef\u9009\u5b57\u6bb5DISTINCT\u53c2\u6570\u53ef\u4ee5\u7528\u6765\u8fd4\u56de\u53bb\u91cd\u5e73\u5747\u503c"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT datetime, AVG(cost_time) FROM log_statis group by datetime;\n+---------------------+--------------------+\n| datetime            | avg(`cost_time`)   |\n+---------------------+--------------------+\n| 2019-07-03 21:01:20 | 25.827794561933533 |\n+---------------------+--------------------+\n\nmysql> SELECT datetime, AVG(distinct cost_time) FROM log_statis group by datetime;\n+---------------------+---------------------------+\n| datetime            | avg(DISTINCT `cost_time`) |\n+---------------------+---------------------------+\n| 2019-07-04 02:23:24 |        20.666666666666668 |\n+---------------------+---------------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"AVG"))}g.isMDXComponent=!0}}]);