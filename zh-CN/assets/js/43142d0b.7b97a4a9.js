"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[25244],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(t),f=o,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<s;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=t(45072),o=(t(11504),t(95788));const s={title:"CONVERT_TO",language:"zh-CN"},a=void 0,c={unversionedId:"sql-manual/sql-functions/string-functions/convert-to",id:"sql-manual/sql-functions/string-functions/convert-to",title:"CONVERT_TO",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/convert-to.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/convert-to",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/convert-to",draft:!1,tags:[],version:"current",frontMatter:{title:"CONVERT_TO",language:"zh-CN"},sidebar:"docs",previous:{title:"PARSE_URL",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/parse-url"},next:{title:"EXTRACT_URL_PARAMETER",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/extract-url-parameter"}},l={},i=[{value:"convert_to",id:"convert_to",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("version",{since:"1.2"},(0,o.yg)("h2",{id:"convert_to"},"convert_to"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR convert_to(VARCHAR column, VARCHAR character)"),"\n\u5728order by\u5b50\u53e5\u4e2d\u4f7f\u7528\uff0c\u4f8b\u5982order by convert(column using gbk), \u73b0\u5728\u4ec5\u652f\u6301character\u8f6c\u4e3a'gbk'.\n\u56e0\u4e3a\u5f53order by column\u4e2d\u5305\u542b\u4e2d\u6587\u65f6\uff0c\u5176\u6392\u5217\u4e0d\u662f\u6309\u7167\u6c49\u8bed\u62fc\u97f3\u7684\u987a\u5e8f.\n\u5c06column\u7684\u5b57\u7b26\u7f16\u7801\u8f6c\u4e3agbk\u540e\uff0c\u53ef\u5b9e\u73b0\u6309\u62fc\u97f3\u7684\u6392\u5217\u7684\u6548\u679c.")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from class_test order by class_name;\n+----------+------------+-------------+\n| class_id | class_name | student_ids |\n+----------+------------+-------------+\n|        6 | asd        | [6]         |\n|        7 | qwe        | [7]         |\n|        8 | z          | [8]         |\n|        2 | \u54c8         | [2]         |\n|        3 | \u54e6         | [3]         |\n|        1 | \u554a         | [1]         |\n|        4 | \u5f20         | [4]         |\n|        5 | \u6211         | [5]         |\n+----------+------------+-------------+\n\nmysql> select * from class_test order by convert(class_name using gbk);\n+----------+------------+-------------+\n| class_id | class_name | student_ids |\n+----------+------------+-------------+\n|        6 | asd        | [6]         |\n|        7 | qwe        | [7]         |\n|        8 | z          | [8]         |\n|        1 | \u554a         | [1]         |\n|        2 | \u54c8         | [2]         |\n|        3 | \u54e6         | [3]         |\n|        5 | \u6211         | [5]         |\n|        4 | \u5f20         | [4]         |\n+----------+------------+-------------+\n\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"convert_to\n")))}d.isMDXComponent=!0}}]);