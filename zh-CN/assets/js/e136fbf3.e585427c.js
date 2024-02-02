"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74452],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>m});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||g[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(45072),a=(t(11504),t(95788));const o={title:"VAR_SAMP,VARIANCE_SAMP",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/aggregate-functions/var_samp",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/var_samp",title:"VAR_SAMP,VARIANCE_SAMP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/aggregate-functions/var_samp.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/var_samp",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/var_samp",draft:!1,tags:[],version:"1.2",frontMatter:{title:"VAR_SAMP,VARIANCE_SAMP",language:"zh-CN"},sidebar:"docs",previous:{title:"ANY_VALUE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/any_value"},next:{title:"APPROX_COUNT_DISTINCT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/approx_count_distinct"}},l={},c=[{value:"VAR_SAMP,VARIANCE_SAMP",id:"var_sampvariance_samp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"var_sampvariance_samp"},"VAR_SAMP,VARIANCE_SAMP"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VAR_SAMP(expr)")),(0,a.yg)("p",null,"\u8fd4\u56deexpr\u8868\u8fbe\u5f0f\u7684\u6837\u672c\u65b9\u5dee"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL > select var_samp(scan_rows) from log_statis group by datetime;\n+-----------------------+\n| var_samp(`scan_rows`) |\n+-----------------------+\n|    5.6227132145741789 |\n+-----------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"VAR_SAMP,VARIANCE_SAMP,VAR,SAMP,VARIANCE"))}g.isMDXComponent=!0}}]);