"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[91254],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||l;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},486050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const l={title:"UNHEX",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/unhex",id:"sql-manual/sql-functions/string-functions/unhex",title:"UNHEX",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/unhex.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/unhex",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/unhex",draft:!1,tags:[],version:"current",frontMatter:{title:"UNHEX",language:"zh-CN"},sidebar:"docs",previous:{title:"HEX",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/hex"},next:{title:"ELT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/elt"}},s={},u=[{value:"unhex",id:"unhex",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"unhex"},"unhex"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR unhex(VARCHAR str)")),(0,o.yg)("p",null,"\u8f93\u5165\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u5b57\u7b26\u4e32\u957f\u5ea6\u4e3a0\u6216\u8005\u4e3a\u5947\u6570\uff0c\u8fd4\u56de\u7a7a\u4e32\uff1b\n\u5982\u679c\u5b57\u7b26\u4e32\u4e2d\u5305\u542b",(0,o.yg)("inlineCode",{parentName:"p"},"[0-9]\u3001[a-f]\u3001[A-F]"),"\u4e4b\u5916\u7684\u5b57\u7b26\uff0c\u8fd4\u56de\u7a7a\u4e32\uff1b\n\u5176\u4ed6\u60c5\u51b5\u6bcf\u4e24\u4e2a\u5b57\u7b26\u4e3a\u4e00\u7ec4\u8f6c\u5316\u4e3a16\u8fdb\u5236\u540e\u7684\u5b57\u7b26\uff0c\u7136\u540e\u62fc\u63a5\u6210\u5b57\u7b26\u4e32\u8f93\u51fa"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select unhex('@');\n+------------+\n| unhex('@') |\n+------------+\n|            |\n+------------+\n\nmysql> select unhex('41');\n+-------------+\n| unhex('41') |\n+-------------+\n| A           |\n+-------------+\n\nmysql> select unhex('4142');\n+---------------+\n| unhex('4142') |\n+---------------+\n| AB            |\n+---------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"UNHEX\n")))}f.isMDXComponent=!0}}]);