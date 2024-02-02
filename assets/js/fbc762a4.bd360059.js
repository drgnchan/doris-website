"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12376],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=s,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||c;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(45072),s=(t(11504),t(95788));const c={title:"MD5SUM",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/md5sum",id:"sql-manual/sql-functions/encrypt-digest-functions/md5sum",title:"MD5SUM",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/encrypt-digest-functions/md5sum.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/md5sum",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/md5sum",draft:!1,tags:[],version:"current",frontMatter:{title:"MD5SUM",language:"en"},sidebar:"docs",previous:{title:"MD5",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/md5"},next:{title:"SM4",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm4"}},a={},l=[{value:"MD5SUM",id:"md5sum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,s.yg)(d,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"md5sum"},"MD5SUM"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("p",null,"Calculates an MD5 128-bit checksum for the strings"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"MD5SUM(str[,str])")),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"MySQL > select md5(\"abcd\");\n+----------------------------------+\n| md5('abcd')                      |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n1 row in set (0.011 sec)\n\nMySQL > select md5sum(\"ab\",\"cd\");\n+----------------------------------+\n| md5sum('ab', 'cd')               |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n1 row in set (0.008 sec)\n\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"MD5SUM\n")))}p.isMDXComponent=!0}}]);