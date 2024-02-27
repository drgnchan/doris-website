"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82540],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),o=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=o(t),y=a,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||s;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var o=2;o<s;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},11111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=t(58168),a=(t(96540),t(15680));const s={title:"SEQUENCE",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/sequence",id:"sql-manual/sql-functions/array-functions/sequence",title:"SEQUENCE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/sequence.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/sequence",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/sequence",draft:!1,tags:[],version:"current",frontMatter:{title:"SEQUENCE",language:"zh-CN"},sidebar:"docs",previous:{title:"ELEMENT_AT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/element-at"},next:{title:"CONVERT_TZ",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/convert-tz"}},c={},o=[{value:"sequence",id:"sequence",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:o},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"sequence"},"sequence"),(0,a.yg)("version",{since:"dev"},(0,a.yg)("p",null,"sequence")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u51fd\u6570array_range\u7684\u522b\u79f0"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<Int> sequence(Int end)\nARRAY<Int> sequence(Int start, Int end)\nARRAY<Int> sequence(Int start, Int end, Int step)\nARRAY<Datetime> sequence(Datetime start_datetime, Datetime end_datetime)\nARRAY<Datetime> sequence(Datetime start_datetime, Datetime end_datetime, INTERVAL Int interval_step UNIT)\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u751f\u6210int\u6570\u7ec4\uff1a\n\u53c2\u6570\u5747\u4e3a\u6b63\u6574\u6570 start \u9ed8\u8ba4\u4e3a 0, step \u9ed8\u8ba4\u4e3a 1\u3002\n\u6700\u7ec8\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u4ecestart \u5230 end - 1, \u6b65\u957f\u4e3a step\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u751f\u6210\u65e5\u671f\u65f6\u95f4\u6570\u7ec4\uff1a\n\u81f3\u5c11\u53d6\u4e24\u4e2a\u53c2\u6570\u3002\n\u524d\u4e24\u4e2a\u53c2\u6570\u90fd\u662fdatetimev2\uff0c\u7b2c\u4e09\u4e2a\u662f\u6b63\u6574\u6570\u3002\n\u5982\u679c\u7f3a\u5c11\u7b2c\u4e09\u90e8\u5206\uff0c\u5219",(0,a.yg)("inlineCode",{parentName:"li"},"INTERVAL 1 DAY"),"\u5c06\u4e3a\u9ed8\u8ba4\u503c\u3002\nUNIT \u652f\u6301\u5e74/\u6708/\u5468/\u65e5/\u5c0f\u65f6/\u5206\u949f/\u79d2\u3002\n\u8fd4\u56de start_datetime \u548c\u6700\u63a5\u8fd1 end_datetime \u4e4b\u95f4\u7684 datetimev2 \u6570\u7ec4\uff08\u6309 Interval_step UNIT \u8ba1\u7b97\uff09\u3002")),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u5982\u679c\u7b2c\u4e09\u4e2a\u53c2\u6570 step/interval_step \u4e3a\u8d1f\u6570\u6216\u8005\u96f6, \u51fd\u6570\u7ed3\u679c\u5c06\u4e3aNULL")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select sequence(10);\n+--------------------------------+\n| sequence(10)                   |\n+--------------------------------+\n| [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] |\n+--------------------------------+\n\nmysql> select sequence(10,20);\n+------------------------------------------+\n| sequence(10, 20)                         |\n+------------------------------------------+\n| [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] |\n+------------------------------------------+\n\nmysql> select sequence(0,20,2);\n+-------------------------------------+\n| sequence(0, 20, 2)                  |\n+-------------------------------------+\n| [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] |\n+-------------------------------------+\n\nmysql> select sequence(cast('2022-05-15 12:00:00' as datetimev2(0)), cast('2022-05-17 12:00:00' as datetimev2(0))) AS sequence_default;\n+------------------------------------------------+\n| sequence_default                               |\n+------------------------------------------------+\n| [\"2022-05-15 12:00:00\", \"2022-05-16 12:00:00\"] |\n+------------------------------------------------+\n\nmysql> select sequence(cast('2019-05-15 12:00:00' as datetimev2(0)), cast('2022-05-17 12:00:00' as datetimev2(0)), interval 2 year) as sequence_2_year;\n+------------------------------------------------+\n| sequence_2_year                                |\n+------------------------------------------------+\n| [\"2019-05-15 12:00:00\", \"2021-05-15 12:00:00\"] |\n+------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, RANGE, SEQUENCE"))}d.isMDXComponent=!0}}]);