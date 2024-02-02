"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51280],{95788:(e,t,n)=>{n.d(t,{Iu:()=>y,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},y=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,m=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return n?r.createElement(m,o(o({ref:t},y),{},{components:n})):r.createElement(m,o({ref:t},y))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(45072),a=(n(11504),n(95788));const l={title:"DATE_FORMAT",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/date-format",id:"version-2.0/sql-manual/sql-functions/date-time-functions/date-format",title:"DATE_FORMAT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/date-format.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date-format",permalink:"/docs/sql-manual/sql-functions/date-time-functions/date-format",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DATE_FORMAT",language:"en"},sidebar:"docs",previous:{title:"DATE_TRUNC",permalink:"/docs/sql-manual/sql-functions/date-time-functions/date-trunc"},next:{title:"DATEDIFF",permalink:"/docs/sql-manual/sql-functions/date-time-functions/datediff"}},s={},u=[{value:"date_format",id:"date_format",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.c)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date_format"},"date_format"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR DATE_FORMAT (DATETIME DATE, VARCHAR Format)")),(0,a.yg)("p",null,"Convert the date type to a string according to the format type.\nConvert the date type to a string according to the format type. Currently, it supports a maximum of 128 bytes for the string. If the return value length exceeds 128 bytes, then it returns NULL."),(0,a.yg)("p",null,"The date parameter is the valid date. Format specifies the date/time output format."),(0,a.yg)("p",null,"The formats available are:"),(0,a.yg)("p",null,"% a | Abbreviation for Sunday Name"),(0,a.yg)("p",null,"% B | Abbreviated Monthly Name"),(0,a.yg)("p",null,"% C | Month, numerical value"),(0,a.yg)("p",null,"% D | Sky in the Moon with English Prefix"),(0,a.yg)("p",null,"% d | Monthly day, numerical value (00-31)"),(0,a.yg)("p",null,"% e | Monthly day, numerical value (0-31)"),(0,a.yg)("p",null,"% f | microseconds"),(0,a.yg)("p",null,"% H | Hours (00-23)"),(0,a.yg)("p",null,"% h | hour (01-12)"),(0,a.yg)("p",null,"% I | Hours (01-12)"),(0,a.yg)("p",null,"% I | min, numerical value (00-59)"),(0,a.yg)("p",null,"% J | Days of Year (001-366)"),(0,a.yg)("p",null,"% k | hours (0-23)"),(0,a.yg)("p",null,"% L | Hours (1-12)"),(0,a.yg)("p",null,"% M | Moon Name"),(0,a.yg)("p",null,"% m | month, numerical value (00-12)"),(0,a.yg)("p",null,"%p | AM or PM"),(0,a.yg)("p",null,"% R | Time, 12 - hour (hh: mm: SS AM or PM)"),(0,a.yg)("p",null,"% S | seconds (00-59)"),(0,a.yg)("p",null,"% s | seconds (00-59)"),(0,a.yg)("p",null,"% T | Time, 24 - hour (hh: mm: ss)"),(0,a.yg)("p",null,"% U | Week (00-53) Sunday is the first day of the week"),(0,a.yg)("p",null,"% U | Week (00 - 53) Monday is the first day of the week"),(0,a.yg)("p",null,"% V | Week (01-53) Sunday is the first day of the week, and% X is used."),(0,a.yg)("p",null,"% v | Week (01 - 53) Monday is the first day of the week, and% x is used"),(0,a.yg)("p",null,"% W | Sunday"),(0,a.yg)("p",null,"% w | Weekly day (0 = Sunday, 6 = Saturday)"),(0,a.yg)("p",null,"% X | Year, where Sunday is the first day of the week, 4 places, and% V use"),(0,a.yg)("p",null,"% x | year, of which Monday is the first day of the week, 4 places, and% V"),(0,a.yg)("p",null,"% Y | Year, 4"),(0,a.yg)("p",null,"% y | Year, 2"),(0,a.yg)("p",null,"%%  | Represent %"),(0,a.yg)("p",null,"Also support 3 formats:"),(0,a.yg)("p",null,"yyyyMMdd"),(0,a.yg)("p",null,"yyyy-MM-dd"),(0,a.yg)("p",null,"yyyy-MM-dd HH:mm:ss"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATE_FORMAT,DATE,FORMAT\n")))}p.isMDXComponent=!0}}]);