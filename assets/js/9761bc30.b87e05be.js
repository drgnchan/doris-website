"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[47601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"DATETIME",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Types/DATETIME",id:"sql-manual/sql-reference/Data-Types/DATETIME",title:"DATETIME",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Types/DATETIME.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATETIME",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DATETIME",draft:!1,tags:[],version:"current",frontMatter:{title:"DATETIME",language:"en"},sidebar:"docs",previous:{title:"DATE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DATE"},next:{title:"CHAR",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/CHAR"}},s={},c=[{value:"DATETIME",id:"datetime",level:2},{value:"Description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"example",id:"example",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"datetime"},"DATETIME"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"DATETIME")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"DATETIME(","[P]",")\nDate and time type.\nThe optional parameter P indicates the time precision and the value range is ","[0, 6]",", that is, it supports up to 6 decimal places (microseconds). 0 when not set.\nValue range is ['0000-01-01 00:00:00","[.000000]","','9999-12-31 23:59:59","[.999999]","'].\nThe form of printing is 'yyyy-MM-dd HH:mm:ss.SSSSSS'"),(0,a.kt)("h3",{id:"note"},"note"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATETIME supports temporal precision up to microseconds. When parsing imported DATETIME type data using the BE side (e.g. using Stream load, Spark load, etc.), or using the FE side with the [Nereids](../../../query-acceleration/nereids) on, decimals exceeding the current precision will be **rounded**.\nDATETIME reads support resolving the time zone in the format of the original DATETIME literal followed by the time zone:\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"<date> <time>[<timezone>]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'For the specific supported formats for `<timezone>`, see [timezone](../../../advanced/time-zone). Note that the `DATE`, `DATEV2`, `DATETIME`, and `DATETIMEV2` types **don\'t** contain time zone information. For example, if an input time string "2012-12-12 08:00:00+08:00" is parsed and converted to the current time zone "+02:00", and the actual value "2012-12-12 02:00:00" is stored in the DATETIME column, the value itself will not change, no matter how much the cluster environment variables are changed.\n')),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> select @@time_zone;\n+----------------+\n| @@time_zone    |\n+----------------+\n| Asia/Hong_Kong |\n+----------------+\n1 row in set (0.11 sec)\n\nmysql> insert into dtv23 values ("2020-12-12 12:12:12Z"), ("2020-12-12 12:12:12GMT"), ("2020-12-12 12:12:12+02:00"), ("2020-12-12 12:12:12America/Los_Angeles");\nQuery OK, 4 rows affected (0.17 sec)\n\nmysql> select * from dtv23;\n+-------------------------+\n| k0                      |\n+-------------------------+\n| 2020-12-12 20:12:12.000 |\n| 2020-12-12 20:12:12.000 |\n| 2020-12-13 04:12:12.000 |\n| 2020-12-12 18:12:12.000 |\n+-------------------------+\n4 rows in set (0.15 sec)\n')))}m.isMDXComponent=!0}}]);