"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29730],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||s;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},27013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={title:"MASK",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/mask/mask",id:"sql-manual/sql-functions/string-functions/mask/mask",title:"MASK",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/mask/mask.md",sourceDirName:"sql-manual/sql-functions/string-functions/mask",slug:"/sql-manual/sql-functions/string-functions/mask/",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/mask/",draft:!1,tags:[],version:"current",frontMatter:{title:"MASK",language:"zh-CN"},sidebar:"docs",previous:{title:"MULTI_MATCH_ANY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/search/multi-match-any"},next:{title:"MASK_FIRST_N",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/mask/mask-first-n"}},i={},c=[{value:"mask",id:"mask",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mask"},"mask"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR mask(VARCHAR str[, VARCHAR upper[, VARCHAR lower[, VARCHAR number]]])")),(0,a.kt)("p",null,'\u8fd4\u56de str \u7684\u63a9\u7801\u7248\u672c\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5927\u5199\u5b57\u6bcd\u8f6c\u6362\u4e3a\u201cX\u201d\uff0c\u5c0f\u5199\u5b57\u6bcd\u8f6c\u6362\u4e3a\u201cx\u201d\uff0c\u6570\u5b57\u8f6c\u6362\u4e3a\u201cn\u201d\u3002 \u4f8b\u5982 mask("abcd-EFGH-8765-4321") \u7ed3\u679c\u4e3a xxxx-XXXX-nnnn-nnnn\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u9644\u52a0\u53c2\u6570\u6765\u8986\u76d6\u63a9\u7801\u4e2d\u4f7f\u7528\u7684\u5b57\u7b26\uff1a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u63a7\u5236\u5927\u5199\u5b57\u6bcd\u7684\u63a9\u7801\u5b57\u7b26\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u63a7\u5236\u5c0f\u5199\u5b57\u6bcd\uff0c\u7b2c\u56db\u4e2a\u53c2\u6570\u63a7\u5236\u6570\u5b57\u3002 \u4f8b\u5982\uff0cmask("abcd-EFGH-8765-4321", "U", "l", "#") \u4f1a\u5f97\u5230 llll-UUUU-####-####\u3002'),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// table test\n+-----------+\n| name      |\n+-----------+\n| abc123EFG |\n| NULL      |\n| 456AbCdEf |\n+-----------+\n\nmysql> select mask(name) from test;\n+--------------+\n| mask(`name`) |\n+--------------+\n| xxxnnnXXX    |\n| NULL         |\n| nnnXxXxXx    |\n+--------------+\n\nmysql> select mask(name, '*', '#', '$') from test;\n+-----------------------------+\n| mask(`name`, '*', '#', '$') |\n+-----------------------------+\n| ###$$$***                   |\n| NULL                        |\n| $$$*#*#*#                   |\n+-----------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mask\n")))}p.isMDXComponent=!0}}]);