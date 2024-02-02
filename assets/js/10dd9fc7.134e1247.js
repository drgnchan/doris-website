"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68804],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>d});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,d=u["".concat(s,".").concat(f)]||u[f]||g[f]||i;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const i={title:"not regexp",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/regexp/not_regexp",id:"version-1.2/sql-manual/sql-functions/string-functions/regexp/not_regexp",title:"not regexp",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/regexp/not_regexp.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/not_regexp",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/regexp/not_regexp",draft:!1,tags:[],version:"1.2",frontMatter:{title:"not regexp",language:"en"},sidebar:"docs",previous:{title:"regexp_replace_one",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one"},next:{title:"COLLECT_SET",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/collect_set"}},s={},c=[{value:"not regexp",id:"not-regexp",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"not-regexp"},"not regexp"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BOOLEAN not regexp(VARCHAR str, VARCHAR pattern)")),(0,o.yg)("p",null,"Perform regular matching on the string str, return false if it matches, and return true if it doesn't match. pattern is a regular expression."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"// Find all data in the k1 field that does not start with 'billie'\nmysql> select k1 from test where k1 not regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| Emmy eillish       |\n+--------------------+\n\n// Find all the data in the k1 field that does not end with 'ok':\nmysql> select k1 from test where k1 not regexp 'ok$';\n+------------+\n| k1         |\n+------------+\n| It's true  |\n+------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"REGEXP, NOT, NOT REGEXP\n")))}g.isMDXComponent=!0}}]);