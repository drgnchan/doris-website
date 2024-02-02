"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34620],{95788:(e,n,r)=>{r.d(n,{Iu:()=>s,yg:()=>y});var t=r(11504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,y=d["".concat(a,".").concat(m)]||d[m]||p[m]||l;return r?t.createElement(y,u(u({ref:n},s),{},{components:r})):t.createElement(y,u({ref:n},s))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,u=new Array(l);u[0]=m;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[d]="string"==typeof e?e:o,u[1]=i;for(var c=2;c<l;c++)u[c]=r[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53472:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(45072),o=(r(11504),r(95788));const l={title:"ROUND",language:"zh-CN"},u=void 0,i={unversionedId:"sql-manual/sql-functions/numeric-functions/round",id:"sql-manual/sql-functions/numeric-functions/round",title:"ROUND",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/round.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/round",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/round",draft:!1,tags:[],version:"current",frontMatter:{title:"ROUND",language:"zh-CN"},sidebar:"docs",previous:{title:"PMOD",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/pmod"},next:{title:"ROUND_BANKERS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/round-bankers"}},a={},c=[{value:"round",id:"round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,t.c)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"round"},"round"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"T round(T x[, d])"),"\n\u5c06",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u56db\u820d\u4e94\u5165\u540e\u4fdd\u7559d\u4f4d\u5c0f\u6570\uff0cd\u9ed8\u8ba4\u4e3a0\u3002\u5982\u679cd\u4e3a\u8d1f\u6570\uff0c\u5219\u5c0f\u6570\u70b9\u5de6\u8fb9d\u4f4d\u4e3a0\u3002\u5982\u679cx\u6216d\u4e3anull\uff0c\u8fd4\u56denull\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select round(2.4);\n+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select round(2.5);\n+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\nmysql> select round(-3.4);\n+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\nmysql> select round(-3.5);\n+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\nmysql> select round(1667.2725, 2);\n+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\nmysql> select round(1667.2725, -2);\n+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"ROUND\n")))}p.isMDXComponent=!0}}]);