"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67180],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={title:"MERGE",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/combinators/merge",id:"sql-manual/sql-functions/combinators/merge",title:"MERGE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/combinators/merge.md",sourceDirName:"sql-manual/sql-functions/combinators",slug:"/sql-manual/sql-functions/combinators/merge",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/merge",draft:!1,tags:[],version:"current",frontMatter:{title:"MERGE",language:"zh-CN"},sidebar:"docs",previous:{title:"STATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/state"},next:{title:"UNION",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/union"}},s={},c=[{value:"MERGE",id:"merge",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"merge"},"MERGE"),(0,o.yg)("version",{since:"2.0.0"}),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"AGGREGATE_FUNCTION_MERGE(agg_state)"),"\n\u5c06\u805a\u5408\u4e2d\u95f4\u7ed3\u679c\u8fdb\u884c\u805a\u5408\u5e76\u8ba1\u7b97\u83b7\u5f97\u5b9e\u9645\u7ed3\u679c\u3002\n\u7ed3\u679c\u7684\u7c7b\u578b\u4e0e",(0,o.yg)("inlineCode",{parentName:"p"},"AGGREGATE_FUNCTION"),"\u4e00\u81f4\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql [test]>select avg_merge(avg_state(1)) from d_table;\n+-------------------------+\n| avg_merge(avg_state(1)) |\n+-------------------------+\n|                       1 |\n+-------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"AGG_STATE, MERGE"))}m.isMDXComponent=!0}}]);