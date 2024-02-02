"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10222],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||c;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,s=new Array(c);s[0]=m;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<c;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(45072),o=(t(11504),t(95788));const c={title:"MD5SUM",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/md5sum",id:"sql-manual/sql-functions/encrypt-digest-functions/md5sum",title:"MD5SUM",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/encrypt-digest-functions/md5sum.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/md5sum",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/md5sum",draft:!1,tags:[],version:"current",frontMatter:{title:"MD5SUM",language:"zh-CN"},sidebar:"docs",previous:{title:"MD5",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/md5"},next:{title:"SM4",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm4"}},a={},l=[{value:"MD5SUM",id:"md5sum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"md5sum"},"MD5SUM"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u8ba1\u7b97 \u591a\u4e2a\u5b57\u7b26\u4e32 MD5 128-bit"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"MD5SUM(str[,str])")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > select md5(\"abcd\");\n+----------------------------------+\n| md5('abcd')                      |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n1 row in set (0.011 sec)\n\nMySQL > select md5sum(\"ab\",\"cd\");\n+----------------------------------+\n| md5sum('ab', 'cd')               |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n1 row in set (0.008 sec)\n\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MD5SUM\n")))}p.isMDXComponent=!0}}]);