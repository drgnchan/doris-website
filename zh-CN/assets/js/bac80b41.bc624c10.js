"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64912],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>g});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||y[m]||l;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7376:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(45072),a=(t(11504),t(95788));const l={title:"REFRESH-LDAP",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Utility-Statements/REFRESH-LDAP",id:"sql-manual/sql-reference/Utility-Statements/REFRESH-LDAP",title:"REFRESH-LDAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Utility-Statements/REFRESH-LDAP.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/REFRESH-LDAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH-LDAP",draft:!1,tags:[],version:"current",frontMatter:{title:"REFRESH-LDAP",language:"zh-CN"}},c={},s=[{value:"REFRESH-LDAP",id:"refresh-ldap",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"refresh-ldap"},"REFRESH-LDAP"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("version",{since:"dev"},(0,a.yg)("p",null,"REFRESH-LDAP")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5237\u65b0Doris\u4e2dLDAP\u7684\u7f13\u5b58\u4fe1\u606f\u3002\u4fee\u6539LDAP\u670d\u52a1\u4e2d\u7528\u6237\u4fe1\u606f\u6216\u8005\u4fee\u6539Doris\u4e2dLDAP\u7528\u6237\u7ec4\u5bf9\u5e94\u7684role\u6743\u9650\uff0c\u53ef\u80fd\u56e0\u4e3a\u7f13\u5b58\u7684\u539f\u56e0\u4e0d\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u53ef\u901a\u8fc7\u8be5\u8bed\u53e5\u5237\u65b0\u7f13\u5b58\u3002Doris\u4e2dLDAP\u4fe1\u606f\u7f13\u5b58\u9ed8\u8ba4\u65f6\u95f4\u4e3a12\u5c0f\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW FRONTEND CONFIG LIKE 'ldap_user_cache_timeout_s';")," \u67e5\u770b\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH LDAP ALL;\nREFRESH LDAP [for user_name];\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5237\u65b0\u6240\u6709LDAP\u7528\u6237\u7f13\u5b58\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH LDAP ALL;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5237\u65b0\u5f53\u524dLDAP\u7528\u6237\u7684\u7f13\u5b58\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH LDAP;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5237\u65b0\u6307\u5b9aLDAP\u7528\u6237user1\u7684\u7f13\u5b58\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH LDAP for user1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("p",null,"REFRESH, LDAP"),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);