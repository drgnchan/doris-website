"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63844],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},76380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(45072),a=(n(11504),n(95788));const l={title:"SET-VARIABLE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",title:"SET-VARIABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SET-VARIABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SET-CONFIG",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-CONFIG"},next:{title:"INSTALL-PLUGIN",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"}},s={},p=[{value:"SET-VARIABLE",id:"set-variable",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"set-variable"},"SET-VARIABLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SET VARIABLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u4e3b\u8981\u662f\u7528\u6765\u4fee\u6539 Doris \u7cfb\u7edf\u53d8\u91cf\uff0c\u8fd9\u4e9b\u7cfb\u7edf\u53d8\u91cf\u53ef\u4ee5\u5206\u4e3a\u5168\u5c40\u4ee5\u53ca\u4f1a\u8bdd\u7ea7\u522b\u5c42\u9762\u6765\u4fee\u6539\uff0c\u6709\u4e9b\u4e5f\u53ef\u4ee5\u8fdb\u884c\u52a8\u6001\u4fee\u6539\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW VARIABLE")," \u6765\u67e5\u770b\u8fd9\u4e9b\u7cfb\u7edf\u53d8\u91cf\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET variable_assignment [, variable_assignment] ...\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"variable_assignment:\nuser_var_name = expr\n| ","[GLOBAL | SESSION]"," system_var_name = expr")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"\u53ea\u6709 ADMIN \u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u53d8\u91cf\u7684\u5168\u5c40\u751f\u6548"),(0,a.yg)("li",{parentName:"ol"},"\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u5f71\u54cd\u5f53\u524d\u4f1a\u8bdd\u548c\u6b64\u540e\u7684\u65b0\u4f1a\u8bdd\uff0c\u4e0d\u5f71\u54cd\u5f53\u524d\u5df2\u7ecf\u5b58\u5728\u7684\u5176\u4ed6\u4f1a\u8bdd\u3002"))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e1c\u516b\u533a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'SET time_zone = "Asia/Shanghai";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u5168\u5c40\u7684\u6267\u884c\u5185\u5b58\u5927\u5c0f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"SET GLOBAL exec_mem_limit = 137438953472\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SET, VARIABLE\n")))}u.isMDXComponent=!0}}]);