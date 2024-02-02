"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37856],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(t),d=i,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=t(45072),i=(t(11504),t(95788));const o={title:"FROM_UNIXTIME",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/from-unixtime",id:"sql-manual/sql-functions/date-time-functions/from-unixtime",title:"FROM_UNIXTIME",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/from-unixtime.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/from-unixtime",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/from-unixtime",draft:!1,tags:[],version:"current",frontMatter:{title:"FROM_UNIXTIME",language:"en"},sidebar:"docs",previous:{title:"FROM_SECOND",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/from-second"},next:{title:"UNIX_TIMESTAMP",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/unix-timestamp"}},s={},m=[{value:"from_unixtime",id:"from_unixtime",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:m},p="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"from_unixtime"},"from_unixtime"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME FROM UNIXTIME (BIGINT unix timestamp [, VARCHAR string format]")),(0,i.yg)("p",null,"Convert the UNIX timestamp to the corresponding time format of bits, and the format returned is specified by ",(0,i.yg)("inlineCode",{parentName:"p"},"string_format")),(0,i.yg)("p",null,"Input is an big integer and return is a string type"),(0,i.yg)("p",null,"Support ",(0,i.yg)("inlineCode",{parentName:"p"},"date_format"),"'s format, and default is ",(0,i.yg)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%i:%s")),(0,i.yg)("p",null,"Other ",(0,i.yg)("inlineCode",{parentName:"p"},"string_format")," is illegal and will returns NULL."),(0,i.yg)("p",null,"The current supported range for ",(0,i.yg)("inlineCode",{parentName:"p"},"unix_timestamp")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"[0, 32536771199]"),". ",(0,i.yg)("inlineCode",{parentName:"p"},"unix_timestamp")," values that fall outside of this range will be returned as NULL"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d')   |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n|From unixtime (1196440219,'%Y-%m-%d %H:%i:%s')    |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n")),(0,i.yg)("p",null,'For timestamps that exceed the range, you can use the "from_second" function.\n',(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME FROM_SECOND(BIGINT unix_timestamp)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select from_second(21474836470);\n+--------------------------+\n| from_second(21474836470) |\n+--------------------------+\n| 2650-07-06 16:21:10      |\n+--------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"FROM_UNIXTIME,FROM,UNIXTIME\n")))}c.isMDXComponent=!0}}]);