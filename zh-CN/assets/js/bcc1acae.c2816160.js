"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=l,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[f]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const s={title:"STRLEFT",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/strleft",id:"sql-manual/sql-functions/string-functions/strleft",title:"STRLEFT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/strleft.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/strleft",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/strleft",draft:!1,tags:[],version:"current",frontMatter:{title:"STRLEFT",language:"zh-CN"},sidebar:"docs",previous:{title:"REPLACE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/replace"},next:{title:"STRRIGHT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/strright"}},a={},c=[{value:"strleft",id:"strleft",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},f="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"strleft"},"strleft"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR strleft(VARCHAR str, INT len)")),(0,l.kt)("p",null,"\u5b83\u8fd4\u56de\u5177\u6709\u6307\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\u7684\u5de6\u8fb9\u90e8\u5206\uff0c\u957f\u5ea6\u7684\u5355\u4f4d\u4e3autf8\u5b57\u7b26\uff0c\u6b64\u51fd\u6570\u7684\u53e6\u4e00\u4e2a\u522b\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"left"),"\u3002\n\u5982\u679c\u51fd\u6570\u53c2\u6570\u542b\u6709NULL\u503c\u90a3\u4e48\u51fd\u6570\u5c06\u59cb\u7ec8\u8fd4\u56deNULL\uff0c\u5982\u679c\u6574\u578b\u53c2\u6570\u5c0f\u4e8e\u7b49\u4e8e0\uff0c\u90a3\u4e48\u5c06\u8fd4\u56de\u7a7a \u201c\u201d\u3002"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select strleft(\"Hello doris\",5);\n+------------------------+\n| strleft('Hello doris', 5) |\n+------------------------+\n| Hello                  |\n+------------------------+\nmysql> select strleft(\"Hello doris\",-5);\n+----------------------------+\n| strleft('Hello doris', -5) |\n+----------------------------+\n|                            |\n+----------------------------+\nmysql> select strleft(\"Hello doris\",NULL);\n+------------------------------+\n| strleft('Hello doris', NULL) |\n+------------------------------+\n| NULL                         |\n+------------------------------+\nmysql> select strleft(NULL,3);\n+------------------+\n| strleft(NULL, 3) |\n+------------------+\n| NULL             |\n+------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"STRLEFT, LEFT\n")))}p.isMDXComponent=!0}}]);