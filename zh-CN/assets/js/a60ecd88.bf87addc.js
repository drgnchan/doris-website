"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26926],{15680:(e,n,r)=>{r.d(n,{xA:()=>y,yg:()=>m});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},y=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return r?t.createElement(m,l(l({ref:n},y),{},{components:r})):t.createElement(m,l({ref:n},y))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53861:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(58168),a=(r(96540),r(15680));const i={title:"ARRAY_RANGE",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array-range",id:"sql-manual/sql-functions/array-functions/array-range",title:"ARRAY_RANGE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-range.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-range",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-range",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_RANGE",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_INTERSECT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-intersect"},next:{title:"ARRAY_DISTINCT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-distinct"}},o={},c=[{value:"array_range",id:"array_range",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_range"},"array_range"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"array_range")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<Int> array_range(Int end)\nARRAY<Int> array_range(Int start, Int end)\nARRAY<Int> array_range(Int start, Int end, Int step)\nARRAY<Datetime> array_range(Datetime start_datetime, Datetime end_datetime)\nARRAY<Datetime> array_range(Datetime start_datetime, Datetime end_datetime, INTERVAL Int interval_step UNIT)\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u751f\u6210int\u6570\u7ec4\uff1a\n\u53c2\u6570\u5747\u4e3a\u6b63\u6574\u6570 start \u9ed8\u8ba4\u4e3a 0, step \u9ed8\u8ba4\u4e3a 1\u3002\n\u6700\u7ec8\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u4ecestart \u5230 end - 1, \u6b65\u957f\u4e3a step\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u751f\u6210\u65e5\u671f\u65f6\u95f4\u6570\u7ec4\uff1a\n\u81f3\u5c11\u53d6\u4e24\u4e2a\u53c2\u6570\u3002\n\u524d\u4e24\u4e2a\u53c2\u6570\u90fd\u662fdatetimev2\uff0c\u7b2c\u4e09\u4e2a\u662f\u6b63\u6574\u6570\u3002\n\u5982\u679c\u7f3a\u5c11\u7b2c\u4e09\u90e8\u5206\uff0c\u5219",(0,a.yg)("inlineCode",{parentName:"li"},"INTERVAL 1 DAY"),"\u5c06\u4e3a\u9ed8\u8ba4\u503c\u3002\nUNIT \u652f\u6301\u5e74/\u6708/\u5468/\u65e5/\u5c0f\u65f6/\u5206\u949f/\u79d2\u3002\n\u8fd4\u56de start_datetime \u548c\u6700\u63a5\u8fd1 end_datetime \u4e4b\u95f4\u7684 datetimev2 \u6570\u7ec4\uff08\u6309 Interval_step UNIT \u8ba1\u7b97\uff09\u3002")),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u5982\u679c\u7b2c\u4e09\u4e2a\u53c2\u6570 step/interval_step \u4e3a\u8d1f\u6570\u6216\u8005\u96f6, \u51fd\u6570\u7ed3\u679c\u5c06\u4e3aNULL")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_range(10);\n+--------------------------------+\n| array_range(10)                |\n+--------------------------------+\n| [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] |\n+--------------------------------+\n\nmysql> select array_range(10,20);\n+------------------------------------------+\n| array_range(10, 20)                      |\n+------------------------------------------+\n| [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] |\n+------------------------------------------+\n\nmysql> select array_range(0,20,2);\n+-------------------------------------+\n| array_range(0, 20, 2)               |\n+-------------------------------------+\n| [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] |\n+-------------------------------------+\n\nmysql> select array_range(cast('2022-05-15 12:00:00' as datetimev2(0)), cast('2022-05-17 12:00:00' as datetimev2(0))) AS array_range_default;\n+------------------------------------------------+\n| array_range_default                            |\n+------------------------------------------------+\n| [\"2022-05-15 12:00:00\", \"2022-05-16 12:00:00\"] |\n+------------------------------------------------+\n\nmysql> select array_range(cast('2019-05-15 12:00:00' as datetimev2(0)), cast('2022-05-17 12:00:00' as datetimev2(0)), interval 2 year) as array_range_2_year;\n+------------------------------------------------+\n| array_range_2_year                             |\n+------------------------------------------------+\n| [\"2019-05-15 12:00:00\", \"2021-05-15 12:00:00\"] |\n+------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, RANGE, ARRAY_RANGE"))}p.isMDXComponent=!0}}]);