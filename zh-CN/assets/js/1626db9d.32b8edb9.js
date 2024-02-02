"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34936],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,y=p["".concat(s,".").concat(f)]||p[f]||g[f]||l;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(45072),i=(t(11504),t(95788));const l={title:"BIT_LENGTH",language:"zh-CN"},o=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/bit-length",id:"version-2.0/sql-manual/sql-functions/string-functions/bit-length",title:"BIT_LENGTH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/bit-length.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/bit-length",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/bit-length",draft:!1,tags:[],version:"2.0",frontMatter:{title:"BIT_LENGTH",language:"zh-CN"},sidebar:"docs",previous:{title:"LENGTH",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/length"},next:{title:"CHAR_LENGTH",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/char-length"}},s={},c=[{value:"bit_length",id:"bit_length",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bit_length"},"bit_length"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"INT bit_length(VARCHAR str)")),(0,i.yg)("p",null,"\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u4f4d\u957f\u5ea6\u3002"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select bit_length(\"abc\");\n+-------------------+\n| bit_length('abc') |\n+-------------------+\n|                24 |\n+-------------------+\n\nmysql> select bit_length(\"\u4e2d\u56fd\");\n+----------------------+\n| bit_length('\u4e2d\u56fd')    |\n+----------------------+\n|                   48 |\n+----------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BIT_LENGTH\n")))}g.isMDXComponent=!0}}]);