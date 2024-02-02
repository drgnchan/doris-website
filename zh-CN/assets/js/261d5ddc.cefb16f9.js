"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71088],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>f});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,f=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},21500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(45072),o=(n(11504),n(95788));const a={title:"STDDEV,STDDEV_POP",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/stddev",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/stddev",title:"STDDEV,STDDEV_POP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/aggregate-functions/stddev.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/stddev",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/stddev",draft:!1,tags:[],version:"2.0",frontMatter:{title:"STDDEV,STDDEV_POP",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE_APPROX",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-approx"},next:{title:"GROUP_CONCAT",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-concat"}},i={},c=[{value:"STDDEV,STDDEV_POP",id:"stddevstddev_pop",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"stddevstddev_pop"},"STDDEV,STDDEV_POP"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"STDDEV(expr)")),(0,o.yg)("p",null,"\u8fd4\u56deexpr\u8868\u8fbe\u5f0f\u7684\u6807\u51c6\u5dee"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > select stddev(scan_rows) from log_statis group by datetime;\n+---------------------+\n| stddev(`scan_rows`) |\n+---------------------+\n|  2.3736656687790934 |\n+---------------------+\n\nMySQL > select stddev_pop(scan_rows) from log_statis group by datetime;\n+-------------------------+\n| stddev_pop(`scan_rows`) |\n+-------------------------+\n|      2.3722760595994914 |\n+-------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"STDDEV,STDDEV_POP,POP"))}d.isMDXComponent=!0}}]);