"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[72547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"Apache Doris announced the official release of version 1.2.1",summary:"Dear community, Apache Doris 1.2.1 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-01-04",author:"Apache Doris",tags:["Release Notes"]},l=void 0,o={permalink:"/zh-CN/blog/release-note-1.2.1",source:"@site/blog/release-note-1.2.1.md",title:"Apache Doris announced the official release of version 1.2.1",description:"\x3c!--",date:"2023-01-04T00:00:00.000Z",formattedDate:"2023\u5e741\u67084\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.1",summary:"Dear community, Apache Doris 1.2.1 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-01-04",author:"Apache Doris",tags:["Release Notes"]},prevItem:{title:"A Glimpse of the Next-generation Analytical Database",permalink:"/zh-CN/blog/summit"},nextItem:{title:"Best Practice: The Efficiency of the Data Warehouse Greatly Improved in LY Digital",permalink:"/zh-CN/blog/LY"}},p={authorsImageUrls:[void 0]},u=[{value:"Improvements",id:"improvements",level:2},{value:"Supports new type DecimalV3",id:"supports-new-type-decimalv3",level:3},{value:"Support Iceberg V2",id:"support-iceberg-v2",level:3},{value:"Support OR condition to IN",id:"support-or-condition-to-in",level:3},{value:"Optimize the import and query performance of JSONB type",id:"optimize-the-import-and-query-performance-of-jsonb-type",level:3},{value:"Stream load supports quoted csv data",id:"stream-load-supports-quoted-csv-data",level:3},{value:"Broker supports Tencent Cloud CHDFS and Baidu Cloud BOS, AFS",id:"broker-supports-tencent-cloud-chdfs-and-baidu-cloud-bos-afs",level:3},{value:"New function",id:"new-function",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Upgrade Notices",id:"upgrade-notices",level:2},{value:"Known Issues",id:"known-issues",level:3},{value:"Behavior Changed",id:"behavior-changed",level:3},{value:"Big Thanks",id:"big-thanks",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"improvements"},"Improvements"),(0,r.kt)("h3",{id:"supports-new-type-decimalv3"},"Supports new type DecimalV3"),(0,r.kt)("p",null,"DecimalV3, which supports higher precision and better performance, has the following advantages over past versions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Larger representable range, the range of values are significantly expanded, and the valid number range ","[1,38]",".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Higher performance, adaptive adjustment of the storage space occupied according to different precision.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"More complete precision derivation support, for different expressions, different precision derivation rules are applied to the accuracy of the result."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Types/DECIMALV3/"},"DecimalV3")),(0,r.kt)("h3",{id:"support-iceberg-v2"},"Support Iceberg V2"),(0,r.kt)("p",null,"Support Iceberg V2 (only Position Delete is supported, Equality Delete will be supported in subsequent versions)."),(0,r.kt)("p",null,"Tables in Iceberg V2 format can be accessed through the Multi-Catalog feature."),(0,r.kt)("h3",{id:"support-or-condition-to-in"},"Support OR condition to IN"),(0,r.kt)("p",null,"Support converting  OR condition to IN condition, which can improve the execution efficiency in some scenarios.",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15437"},"#15437")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12872"},"#12872")),(0,r.kt)("h3",{id:"optimize-the-import-and-query-performance-of-jsonb-type"},"Optimize the import and query performance of JSONB type"),(0,r.kt)("p",null,"Optimize the import and query performance of JSONB type. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15219"},"#15219"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15219"},"#15219")),(0,r.kt)("h3",{id:"stream-load-supports-quoted-csv-data"},"Stream load supports quoted csv data"),(0,r.kt)("p",null,"Search trim_double_quotes in Document:",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD")),(0,r.kt)("h3",{id:"broker-supports-tencent-cloud-chdfs-and-baidu-cloud-bos-afs"},"Broker supports Tencent Cloud CHDFS and Baidu Cloud BOS, AFS"),(0,r.kt)("p",null,"Data on CHDFS, BOS, and AFS can be accessed through Broker. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15297"},"#15297")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15448"},"#15448")),(0,r.kt)("h3",{id:"new-function"},"New function"),(0,r.kt)("p",null,"Add function ",(0,r.kt)("inlineCode",{parentName:"p"},"substring_index"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15373"},"#15373")),(0,r.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In some cases, after upgrading from version 1.1 to version 1.2, the user permission information will be lost. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15144"},"#15144"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fix the problem that the partition value is wrong when using datev2/datetimev2 type for partitioning. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15094"},"#15094"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bug fixes for a large number of released features. For a complete list see: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pulls?q=is%3Apr+label%3Adev%2F1.2.1-merged+is%3Aclosed"},"PR List")))),(0,r.kt)("h2",{id:"upgrade-notices"},"Upgrade Notices"),(0,r.kt)("h3",{id:"known-issues"},"Known Issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not use JDK11 as the runtime JDK of BE, it will cause BE Crash."),(0,r.kt)("li",{parentName:"ul"},"The reading performance of the csv format in this version has declined, which will affect the import and reading efficiency of the csv format. We will fix it as soon as possible in the next three-digit version")),(0,r.kt)("h3",{id:"behavior-changed"},"Behavior Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The default value of the BE configuration item ",(0,r.kt)("inlineCode",{parentName:"p"},"high_priority_flush_thread_num_per_store")," is changed from 1 to 6, to improve the write efficiency of Routine Load. (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14775"},"https://github.com/apache/doris/pull/14775"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The default value of the FE configuration item ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_new_load_scan_node")," is changed to true. Import tasks will be performed using the new File Scan Node. No impact on users.",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14808"},"#14808"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delete the FE configuration item ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_multi_catalog"),". The Multi-Catalog function is enabled by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The vectorized execution engine is forced to be enabled by default.",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15213"},"#15213")))),(0,r.kt)("p",null,"The session variable enable_vectorized_engine will no longer take effect. Enabled by default."),(0,r.kt)("p",null,"To make it valid again, set the FE configuration item ",(0,r.kt)("inlineCode",{parentName:"p"},"disable_enable_vectorized_engine")," to false, and restart FE to make ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_vectorized_engine")," valid again."),(0,r.kt)("h2",{id:"big-thanks"},"Big Thanks"),(0,r.kt)("p",null,"Thanks to ALL who contributed to this release!"),(0,r.kt)("p",null,"@adonis0147"),(0,r.kt)("p",null,"@AshinGau"),(0,r.kt)("p",null,"@BePPPower"),(0,r.kt)("p",null,"@BiteTheDDDDt"),(0,r.kt)("p",null,"@ByteYue"),(0,r.kt)("p",null,"@caiconghui"),(0,r.kt)("p",null,"@cambyzju"),(0,r.kt)("p",null,"@chenlinzhong"),(0,r.kt)("p",null,"@dataroaring"),(0,r.kt)("p",null,"@Doris-Extras"),(0,r.kt)("p",null,"@dutyu"),(0,r.kt)("p",null,"@eldenmoon"),(0,r.kt)("p",null,"@englefly"),(0,r.kt)("p",null,"@freemandealer"),(0,r.kt)("p",null,"@Gabriel39"),(0,r.kt)("p",null,"@HappenLee"),(0,r.kt)("p",null,"@Henry2SS"),(0,r.kt)("p",null,"@hf200012"),(0,r.kt)("p",null,"@jacktengg"),(0,r.kt)("p",null,"@Jibing-Li"),(0,r.kt)("p",null,"@Kikyou1997"),(0,r.kt)("p",null,"@liaoxin01"),(0,r.kt)("p",null,"@luozenglin"),(0,r.kt)("p",null,"@morningman"),(0,r.kt)("p",null,"@morrySnow"),(0,r.kt)("p",null,"@mrhhsg"),(0,r.kt)("p",null,"@nextdreamblue"),(0,r.kt)("p",null,"@qidaye"),(0,r.kt)("p",null,"@spaces-X"),(0,r.kt)("p",null,"@starocean999"),(0,r.kt)("p",null,"@wangshuo128"),(0,r.kt)("p",null,"@weizuo93"),(0,r.kt)("p",null,"@wsjz"),(0,r.kt)("p",null,"@xiaokang"),(0,r.kt)("p",null,"@xinyiZzz"),(0,r.kt)("p",null,"@xutaoustc"),(0,r.kt)("p",null,"@yangzhg"),(0,r.kt)("p",null,"@yiguolei"),(0,r.kt)("p",null,"@yixiutt"),(0,r.kt)("p",null,"@Yulei-Yang"),(0,r.kt)("p",null,"@yuxuan-luo"),(0,r.kt)("p",null,"@zenoyang"),(0,r.kt)("p",null,"@zhangstar333"),(0,r.kt)("p",null,"@zhannngchen"),(0,r.kt)("p",null,"@zhengshengjun"))}d.isMDXComponent=!0}}]);