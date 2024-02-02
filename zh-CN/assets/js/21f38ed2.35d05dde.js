"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86558],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>d});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=r.createContext({}),u=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(m.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),f=i,d=c["".concat(m,".").concat(f)]||c[f]||p[f]||o;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},79408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(45072),i=(t(11504),t(95788));const o={title:"from_unixtime",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/from_unixtime",id:"version-1.2/sql-manual/sql-functions/date-time-functions/from_unixtime",title:"from_unixtime",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/from_unixtime.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/from_unixtime",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/from_unixtime",draft:!1,tags:[],version:"1.2",frontMatter:{title:"from_unixtime",language:"zh-CN"},sidebar:"docs",previous:{title:"to_monday",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/to_monday"},next:{title:"unix_timestamp",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/unix_timestamp"}},m={},u=[{value:"from_unixtime",id:"from_unixtime",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"from_unixtime"},"from_unixtime"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME FROM_UNIXTIME(INT unix_timestamp[, VARCHAR string_format])")),(0,i.yg)("p",null,"\u5c06 unix \u65f6\u95f4\u6233\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684 time \u683c\u5f0f\uff0c\u8fd4\u56de\u7684\u683c\u5f0f\u7531 ",(0,i.yg)("inlineCode",{parentName:"p"},"string_format")," \u6307\u5b9a"),(0,i.yg)("p",null,"\u652f\u6301date_format\u4e2d\u7684format\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3a %Y-%m-%d %H:%i:%s"),(0,i.yg)("p",null,"\u4f20\u5165\u7684\u662f\u6574\u5f62\uff0c\u8fd4\u56de\u7684\u662f\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,i.yg)("p",null,"\u5176\u4f59 ",(0,i.yg)("inlineCode",{parentName:"p"},"string_format")," \u683c\u5f0f\u662f\u975e\u6cd5\u7684\uff0c\u8fd4\u56deNULL"),(0,i.yg)("p",null,"\u5982\u679c\u7ed9\u5b9a\u7684\u65f6\u95f4\u6233\u5c0f\u4e8e 0 \u6216\u5927\u4e8e 253402271999\uff0c\u5219\u8fd4\u56de NULL\u3002\u5373\u65f6\u95f4\u6233\u8303\u56f4\u662f\uff1a"),(0,i.yg)("p",null,"1970-01-01 00:00:00 ~ 9999-12-31 23:59:59"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nmysql> select from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss');\n+--------------------------------------------------+\n| from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d') |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"FROM_UNIXTIME,FROM,UNIXTIME\n")))}p.isMDXComponent=!0}}]);