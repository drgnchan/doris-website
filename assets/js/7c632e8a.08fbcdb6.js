"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78216],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>m});var n=a(11504);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),y=l,m=c["".concat(s,".").concat(y)]||c[y]||g[y]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},24200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(45072),l=(a(11504),a(95788));const i={title:"Apache Doris announced the official release of version 1.2.6",summary:"Dear community, Apache Doris 1.2.6 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-07-17",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.6-release.png"},r=void 0,o={permalink:"/blog/release-note-1.2.6",source:"@site/blog/release-note-1.2.6.md",title:"Apache Doris announced the official release of version 1.2.6",description:"\x3c!--",date:"2023-07-17T00:00:00.000Z",formattedDate:"July 17, 2023",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.6",summary:"Dear community, Apache Doris 1.2.6 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-07-17",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.6-release.png"},prevItem:{title:"Is your latest data really the latest? check the data update mechanism of your database",permalink:"/blog/Is-Your-Latest-Data-Really-the-Latest-Check-the-Data-Update-Mechanism-of-Your-Database"},nextItem:{title:"Database dissection: how fast data queries are implemented",permalink:"/blog/Database-Dissection-How-Fast-Data-Queries-Are-Implemented"}},s={authorsImageUrls:[void 0]},u=[{value:"Behavior Change",id:"behavior-change",level:2},{value:"Query",id:"query",level:2},{value:"Multi Catalog",id:"multi-catalog",level:3},{value:"Storage",id:"storage",level:2},{value:"Others",id:"others",level:2},{value:"Big Thanks",id:"big-thanks",level:2}],p={toc:u},c="wrapper";function g(e){let{components:t,...a}=e;return(0,l.yg)(c,(0,n.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"behavior-change"},"Behavior Change"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add a BE configuration item ",(0,l.yg)("inlineCode",{parentName:"li"},"allow_invalid_decimalv2_literal")," to control whether can import data that exceeding the decimal's precision, for compatibility with previous logic.")),(0,l.yg)("h2",{id:"query"},"Query"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix several query planning issues."),(0,l.yg)("li",{parentName:"ul"},"Support ",(0,l.yg)("inlineCode",{parentName:"li"},"sql_select_limit")," session variable."),(0,l.yg)("li",{parentName:"ul"},"Optimize query cold run performance."),(0,l.yg)("li",{parentName:"ul"},"Fix expr context memory leak."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that the ",(0,l.yg)("inlineCode",{parentName:"li"},"explode_split")," function was executed incorrectly in some cases.")),(0,l.yg)("h3",{id:"multi-catalog"},"Multi Catalog"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix the issue that synchronizing hive metadata caused FE replay edit log to fail."),(0,l.yg)("li",{parentName:"ul"},"Fix ",(0,l.yg)("inlineCode",{parentName:"li"},"refresh catalog")," operation causing FE OOM."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that jdbc catalog cannot handle ",(0,l.yg)("inlineCode",{parentName:"li"},"0000-00-00")," correctly."),(0,l.yg)("li",{parentName:"ul"},"Fixed the issue that the kerberos ticket cannot be refreshed automatically."),(0,l.yg)("li",{parentName:"ul"},"Optimize the partition pruning performance of hive."),(0,l.yg)("li",{parentName:"ul"},"Fix the inconsistent behavior of trino and presto in jdbc catalog."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that hdfs short-circuit read could not be used to improve query efficiency in some environments."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that the iceberg table on CHDFS could not be read.")),(0,l.yg)("h2",{id:"storage"},"Storage"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix the wrong calculation of delete bitmap in MOW table."),(0,l.yg)("li",{parentName:"ul"},"Fix several BE memory issues."),(0,l.yg)("li",{parentName:"ul"},"Fix snappy compression issue."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that jemalloc may cause BE to crash in some cases.")),(0,l.yg)("h2",{id:"others"},"Others"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix several java udf related issues."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that the ",(0,l.yg)("inlineCode",{parentName:"li"},"recover table")," operation incorrectly triggered the creation of dynamic partitions."),(0,l.yg)("li",{parentName:"ul"},"Fix timezone when importing orc files via broker load."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that the newly added ",(0,l.yg)("inlineCode",{parentName:"li"},"PERCENT")," keyword caused the replay metadata of the routine load job to fail."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that the ",(0,l.yg)("inlineCode",{parentName:"li"},"truncate")," operation failed to acts on a non-partitioned table."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that the mysql connection was lost due to the ",(0,l.yg)("inlineCode",{parentName:"li"},"show snapshot")," operation."),(0,l.yg)("li",{parentName:"ul"},"Optimize the lock logic to reduce the probability of lock timeout errors when creating tables."),(0,l.yg)("li",{parentName:"ul"},"Add session variable ",(0,l.yg)("inlineCode",{parentName:"li"},"have_query_cache")," to be compatible with some old mysql clients."),(0,l.yg)("li",{parentName:"ul"},"Optimize the error message when encountering an error of loading.")),(0,l.yg)("h2",{id:"big-thanks"},"Big Thanks"),(0,l.yg)("p",null,"Thanks all who contribute to this release:"),(0,l.yg)("p",null,"@amorynan"),(0,l.yg)("p",null,"@BiteTheDDDDt"),(0,l.yg)("p",null,"@caoliang-web"),(0,l.yg)("p",null,"@dataroaring"),(0,l.yg)("p",null,"@Doris-Extras"),(0,l.yg)("p",null,"@dutyu"),(0,l.yg)("p",null,"@Gabriel39"),(0,l.yg)("p",null,"@HHoflittlefish777"),(0,l.yg)("p",null,"@htyoung"),(0,l.yg)("p",null,"@jacktengg"),(0,l.yg)("p",null,"@jeffreys-cat"),(0,l.yg)("p",null,"@kaijchen"),(0,l.yg)("p",null,"@kaka11chen"),(0,l.yg)("p",null,"@Kikyou1997"),(0,l.yg)("p",null,"@KnightLiJunLong"),(0,l.yg)("p",null,"@liaoxin01"),(0,l.yg)("p",null,"@LiBinfeng-01"),(0,l.yg)("p",null,"@morningman"),(0,l.yg)("p",null,"@mrhhsg"),(0,l.yg)("p",null,"@sohardforaname"),(0,l.yg)("p",null,"@starocean999"),(0,l.yg)("p",null,"@vinlee19"),(0,l.yg)("p",null,"@wangbo"),(0,l.yg)("p",null,"@wsjz"),(0,l.yg)("p",null,"@xiaokang"),(0,l.yg)("p",null,"@xinyiZzz"),(0,l.yg)("p",null,"@yiguolei"),(0,l.yg)("p",null,"@yujun777"),(0,l.yg)("p",null,"@Yulei-Yang"),(0,l.yg)("p",null,"@zhangstar333"),(0,l.yg)("p",null,"@zy-kkk"))}g.isMDXComponent=!0}}]);