"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52308],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(45072),s=(t(11504),t(95788));const i={title:"case",language:"zh-CN"},o=void 0,a={unversionedId:"sql-manual/sql-functions/conditional-functions/case",id:"version-1.2/sql-manual/sql-functions/conditional-functions/case",title:"case",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/conditional-functions/case.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/case",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/conditional-functions/case",draft:!1,tags:[],version:"1.2",frontMatter:{title:"case",language:"zh-CN"},sidebar:"docs",previous:{title:"bitnot",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitwise-functions/bitnot"},next:{title:"coalesce",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/conditional-functions/coalesce"}},l={},c=[{value:"case",id:"case",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,s.yg)(d,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"case"},"case"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"CASE expression\n    WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n")),(0,s.yg)("p",null,"OR"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"CASE WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n")),(0,s.yg)("p",null,"\u5c06\u8868\u8fbe\u5f0f\u548c\u591a\u4e2a\u53ef\u80fd\u7684\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u5f53\u5339\u914d\u65f6\u8fd4\u56de\u76f8\u5e94\u7684\u7ed3\u679c"),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select user_id, case user_id when 1 then 'user_id = 1' when 2 then 'user_id = 2' else 'user_id not exist' end test_case from test;\n+---------+-------------+\n| user_id | test_case   |\n+---------+-------------+\n| 1       | user_id = 1 |\n| 2       | user_id = 2 |\n+---------+-------------+\n \nmysql> select user_id, case when user_id = 1 then 'user_id = 1' when user_id = 2 then 'user_id = 2' else 'user_id not exist' end test_case from test;\n+---------+-------------+\n| user_id | test_case   |\n+---------+-------------+\n| 1       | user_id = 1 |\n| 2       | user_id = 2 |\n+---------+-------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("p",null,"CASE"))}p.isMDXComponent=!0}}]);