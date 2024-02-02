"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[23366],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>y});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,y=m["".concat(p,".").concat(g)]||m[g]||u[g]||l;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},35516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(45072),a=(t(11504),t(95788));const l={title:"SHOW-DATABASES",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",title:"SHOW-DATABASES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-DATABASES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-COLLATION",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION"},next:{title:"SHOW-DATA-SKEW",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW"}},p={},s=[{value:"SHOW-DATABASES",id:"show-databases",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-databases"},"SHOW-DATABASES"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW DATABASES"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f53\u524d\u53ef\u89c1\u7684 db"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES [FROM catalog] [filter expr];\n")),(0,a.yg)("p",null,"\u8bf4\u660e:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES")," \u4f1a\u5c55\u793a\u5f53\u524d\u6240\u6709\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES FROM catalog")," \u4f1a\u5c55\u793a",(0,a.yg)("inlineCode",{parentName:"li"},"catalog"),"\u4e2d\u6240\u6709\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES filter_expr")," \u4f1a\u5c55\u793a\u5f53\u524d\u6240\u6709\u7ecf\u8fc7\u8fc7\u6ee4\u540e\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES FROM catalog filter_expr")," \u8fd9\u79cd\u8bed\u6cd5\u4e0d\u652f\u6301.")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u5f53\u524d\u6240\u6709\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES;\n")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"+--------------------+\n| Database           |\n+--------------------+\n| test               |\n| information_schema |\n+--------------------+\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4f1a\u5c55\u793a",(0,a.yg)("inlineCode",{parentName:"p"},"hms_catalog"),"\u4e2d\u6240\u6709\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES from hms_catalog;\n")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"+---------------+\n| Database      |\n+---------------+\n| default       |\n| tpch          |\n+---------------+\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u5f53\u524d\u6240\u6709\u7ecf\u8fc7\u8868\u793a\u5f0f",(0,a.yg)("inlineCode",{parentName:"p"},"like 'infor%'"),"\u8fc7\u6ee4\u540e\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES like 'infor%';\n")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n+--------------------+\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, DATABASES\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);