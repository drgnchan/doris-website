"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84860],{95788:(e,t,n)=>{n.d(t,{Iu:()=>m,yg:()=>y});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,y=c["".concat(o,".").concat(d)]||c[d]||p[d]||a;return n?r.createElement(y,l(l({ref:t},m),{},{components:n})):r.createElement(y,l({ref:t},m))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(45072),i=(n(11504),n(95788));const a={title:"UNIX_TIMESTAMP",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/unix-timestamp",id:"sql-manual/sql-functions/date-time-functions/unix-timestamp",title:"UNIX_TIMESTAMP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/unix-timestamp.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/unix-timestamp",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/unix-timestamp",draft:!1,tags:[],version:"current",frontMatter:{title:"UNIX_TIMESTAMP",language:"zh-CN"},sidebar:"docs",previous:{title:"FROM_UNIXTIME",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/from-unixtime"},next:{title:"UTC_TIMESTAMP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/utc-timestamp"}},o={},u=[{value:"unix_timestamp",id:"unix_timestamp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,r.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"unix_timestamp"},"unix_timestamp"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"INT UNIX_TIMESTAMP([DATETIME date[, STRING fmt]])")),(0,i.yg)("p",null,"\u5c06 Date \u6216\u8005 Datetime \u7c7b\u578b\u8f6c\u5316\u4e3a unix \u65f6\u95f4\u6233\u3002"),(0,i.yg)("p",null,"\u5982\u679c\u6ca1\u6709\u53c2\u6570\uff0c\u5219\u662f\u5c06\u5f53\u524d\u7684\u65f6\u95f4\u8f6c\u5316\u4e3a\u65f6\u95f4\u6233\u3002"),(0,i.yg)("p",null,"\u53c2\u6570\u9700\u8981\u662f Date \u6216\u8005 Datetime \u7c7b\u578b\u3002"),(0,i.yg)("p",null,"\u5bf9\u4e8e\u5728 1970-01-01 00:00:00 \u4e4b\u524d\u6216 2038-01-19 03:14:07 \u4e4b\u540e\u7684\u65f6\u95f4\uff0c\u8be5\u51fd\u6570\u5c06\u8fd4\u56de 0\u3002"),(0,i.yg)("p",null,"Format \u7684\u683c\u5f0f\u8bf7\u53c2\u9605 ",(0,i.yg)("inlineCode",{parentName:"p"},"date_format")," \u51fd\u6570\u7684\u683c\u5f0f\u8bf4\u660e\u3002"),(0,i.yg)("p",null,"\u8be5\u51fd\u6570\u53d7\u65f6\u533a\u5f71\u54cd\u3002"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30%3A19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"UNIX_TIMESTAMP,UNIX,TIMESTAMP\n")))}p.isMDXComponent=!0}}]);