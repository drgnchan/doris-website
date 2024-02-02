"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18224],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,y=d["".concat(s,".").concat(p)]||d[p]||f[p]||l;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const l={title:"date_floor",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/date_floor",id:"sql-manual/sql-functions/date-time-functions/date_floor",title:"date_floor",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/date_floor.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date_floor",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/date_floor",draft:!1,tags:[],version:"current",frontMatter:{title:"date_floor",language:"zh-CN"}},s={},c=[{value:"date_floor",id:"date_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"date_floor"},"date_floor"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_FLOOR(DATETIME datetime, INTERVAL period type)")),(0,o.yg)("p",null,"\u5c06\u65e5\u671f\u8f6c\u5316\u4e3a\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5468\u671f\u7684\u6700\u8fd1\u4e0b\u53d6\u6574\u65f6\u523b\u3002"),(0,o.yg)("p",null,"datetime \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,o.yg)("p",null,"period \u53c2\u6570\u662f\u6307\u5b9a\u6bcf\u4e2a\u5468\u671f\u6709\u591a\u5c11\u4e2a\u5355\u4f4d\u7ec4\u6210\uff0c\u5f00\u59cb\u7684\u65f6\u95f4\u8d77\u70b9\u4e3a0001-01-01T00:00:00."),(0,o.yg)("p",null,"type \u53c2\u6570\u53ef\u4ee5\u662f\u4e0b\u5217\u503c\uff1aYEAR, MONTH, DAY, HOUR, MINUTE, SECOND."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql>select date_floor(\"0001-01-01 00:00:16\",interval 5 second);\n+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:16', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"0001-01-01 00:00:18\",interval 5 second);\n+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 minute);\n+---------------------------------------------------------------+\n| minute_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 2023-07-13 22:25:00                                           |\n+---------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 hour);\n+-------------------------------------------------------------+\n| hour_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-07-13 18:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 day);\n+------------------------------------------------------------+\n| day_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-10 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 month);\n+--------------------------------------------------------------+\n| month_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-01 00:00:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 year);\n+-------------------------------------------------------------+\n| year_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2021-01-01 00:00:00                                         |\n+-------------------------------------------------------------+\n\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"DATE_FLOOR,DATE,FLOOR\n")))}f.isMDXComponent=!0}}]);