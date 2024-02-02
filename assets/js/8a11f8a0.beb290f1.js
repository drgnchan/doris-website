"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14648],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=s,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,c=new Array(a);c[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:s,c[1]=o;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(45072),s=(t(11504),t(95788));const a={title:"SM3SUM",language:"en"},c=void 0,o={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/sm3sum",id:"version-2.0/sql-manual/sql-functions/encrypt-digest-functions/sm3sum",title:"SM3SUM",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/encrypt-digest-functions/sm3sum.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/sm3sum",permalink:"/docs/sql-manual/sql-functions/encrypt-digest-functions/sm3sum",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SM3SUM",language:"en"},sidebar:"docs",previous:{title:"SM3",permalink:"/docs/sql-manual/sql-functions/encrypt-digest-functions/sm3"},next:{title:"SHA",permalink:"/docs/sql-manual/sql-functions/encrypt-digest-functions/sha"}},i={},l=[{value:"SM3SUM",id:"sm3sum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,s.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"sm3sum"},"SM3SUM"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("p",null,"Calculates an SM3 128-bit checksum for the strings"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"SM3SUM(str[,str])")),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"MySQL > select sm3(\"abcd\");\n+------------------------------------------------------------------+\n| sm3('abcd')                                                      |\n+------------------------------------------------------------------+\n| 82ec580fe6d36ae4f81cae3c73f4a5b3b5a09c943172dc9053c69fd8e18dca1e |\n+------------------------------------------------------------------+\n1 row in set (0.009 sec)\n\nMySQL > select sm3sum(\"ab\",\"cd\");\n+------------------------------------------------------------------+\n| sm3sum('ab', 'cd')                                               |\n+------------------------------------------------------------------+\n| 82ec580fe6d36ae4f81cae3c73f4a5b3b5a09c943172dc9053c69fd8e18dca1e |\n+------------------------------------------------------------------+\n1 row in set (0.009 sec)\n\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SM3SUM\n")))}d.isMDXComponent=!0}}]);