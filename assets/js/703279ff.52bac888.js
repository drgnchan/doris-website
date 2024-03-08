"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87973],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>g});var t=a(296540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),p=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?t.createElement(g,o(o({ref:r},c),{},{components:a})):t.createElement(g,o({ref:r},c))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},561430:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=a(58168),n=(a(296540),a(15680));const i={title:"Release 1.1.2",language:"en"},o=void 0,l={unversionedId:"releasenotes/release-1.1.2",id:"version-2.1/releasenotes/release-1.1.2",title:"Release 1.1.2",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/releasenotes/release-1.1.2.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.1.2",permalink:"/docs/releasenotes/release-1.1.2",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Release 1.1.2",language:"en"},sidebar:"docs",previous:{title:"Release 1.1.3",permalink:"/docs/releasenotes/release-1.1.3"},next:{title:"Release 1.1.1",permalink:"/docs/releasenotes/release-1.1.1"}},s={},p=[{value:"New MemTracker",id:"new-memtracker",level:3},{value:"Add API for showing current queries and kill query",id:"add-api-for-showing-current-queries-and-kill-query",level:3},{value:"Support read/write emoji of UTF16 via ODBC Table",id:"support-readwrite-emoji-of-utf16-via-odbc-table",level:3},{value:"Data Lake related improvements",id:"data-lake-related-improvements",level:3},{value:"Add support for string and text type in Spark Load",id:"add-support-for-string-and-text-type-in-spark-load",level:3},{value:"Add reuse block in non-vectorized engine and have 50% performance improvement in some cases. #11392",id:"add-reuse-block-in-non-vectorized-engine-and-have-50-performance-improvement-in-some-cases-11392",level:3},{value:"Improve like or regex performance",id:"improve-like-or-regex-performance",level:3},{value:"Disable tcmalloc&#39;s aggressive_memory_decommit",id:"disable-tcmallocs-aggressive_memory_decommit",level:3},{value:"Some issues about FE that will cause FE failure or data corrupt.",id:"some-issues-about-fe-that-will-cause-fe-failure-or-data-corrupt",level:3},{value:"Fe will hang on waitFor_rpc during query and BE will hang in high concurrent scenarios.",id:"fe-will-hang-on-waitfor_rpc-during-query-and-be-will-hang-in-high-concurrent-scenarios",level:3},{value:"A fatal issue in vectorized storage engine which will cause wrong result. <strong>(Serious)</strong>",id:"a-fatal-issue-in-vectorized-storage-engine-which-will-cause-wrong-result-serious",level:3},{value:"Lots of planner related issues that will cause BE core or in abnormal state.",id:"lots-of-planner-related-issues-that-will-cause-be-core-or-in-abnormal-state",level:3}],c={toc:p},u="wrapper";function d(e){let{components:r,...a}=e;return(0,n.yg)(u,(0,t.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In this release, Doris Team has fixed more than 170 issues or performance improvement since 1.1.1. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,n.yg)("h1",{id:"features"},"Features"),(0,n.yg)("h3",{id:"new-memtracker"},"New MemTracker"),(0,n.yg)("p",null,"Introduced new MemTracker for both vectorized engine and non-vectorized engine which is more accurate."),(0,n.yg)("h3",{id:"add-api-for-showing-current-queries-and-kill-query"},"Add API for showing current queries and kill query"),(0,n.yg)("h3",{id:"support-readwrite-emoji-of-utf16-via-odbc-table"},"Support read/write emoji of UTF16 via ODBC Table"),(0,n.yg)("h1",{id:"improvements"},"Improvements"),(0,n.yg)("h3",{id:"data-lake-related-improvements"},"Data Lake related improvements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Improved HDFS ORC File scan performance about 300%. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11501"},"#11501"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support HDFS HA mode when query Iceberg table.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support query Hive data created by ",(0,n.yg)("a",{parentName:"p",href:"https://tez.apache.org/"},"Apache Tez"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add Ali OSS as Hive external support."))),(0,n.yg)("h3",{id:"add-support-for-string-and-text-type-in-spark-load"},"Add support for string and text type in Spark Load"),(0,n.yg)("h3",{id:"add-reuse-block-in-non-vectorized-engine-and-have-50-performance-improvement-in-some-cases-11392"},"Add reuse block in non-vectorized engine and have 50% performance improvement in some cases. ",(0,n.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/11392"},"#11392")),(0,n.yg)("h3",{id:"improve-like-or-regex-performance"},"Improve like or regex performance"),(0,n.yg)("h3",{id:"disable-tcmallocs-aggressive_memory_decommit"},"Disable tcmalloc's aggressive_memory_decommit"),(0,n.yg)("p",null,"It will have 40% performance gains in load or query."),(0,n.yg)("p",null,"Currently it is a config, you can change it by set config ",(0,n.yg)("inlineCode",{parentName:"p"},"tc_enable_aggressive_memory_decommit"),"."),(0,n.yg)("h1",{id:"bug-fix"},"Bug Fix"),(0,n.yg)("h3",{id:"some-issues-about-fe-that-will-cause-fe-failure-or-data-corrupt"},"Some issues about FE that will cause FE failure or data corrupt."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add reserved disk config to avoid too many reserved BDB-JE files.",(0,n.yg)("strong",{parentName:"p"},"(Serious)"),"   In an HA environment, BDB JE will retains as many reserved files. The BDB-je log doesn't delete until approaching a disk limit.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix fatal bug in BDB-JE which will cause FE replica could not start correctly or data corrupted.",(0,n.yg)("strong",{parentName:"p"}," (Serious)")))),(0,n.yg)("h3",{id:"fe-will-hang-on-waitfor_rpc-during-query-and-be-will-hang-in-high-concurrent-scenarios"},"Fe will hang on waitFor_rpc during query and BE will hang in high concurrent scenarios."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12459"},"#12459")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12458"},"#12458")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12392"},"#12392")),(0,n.yg)("h3",{id:"a-fatal-issue-in-vectorized-storage-engine-which-will-cause-wrong-result-serious"},"A fatal issue in vectorized storage engine which will cause wrong result. ",(0,n.yg)("strong",{parentName:"h3"},"(Serious)")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11754"},"#11754")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11694"},"#11694")),(0,n.yg)("h3",{id:"lots-of-planner-related-issues-that-will-cause-be-core-or-in-abnormal-state"},"Lots of planner related issues that will cause BE core or in abnormal state."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12080"},"#12080")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12075"},"#12075")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12040"},"#12040")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12003"},"#12003")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12007"},"#12007")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11971"},"#11971")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11933"},"#11933")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11861"},"#11861")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11859"},"#11859")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11855"},"#11855")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11837"},"#11837")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11834"},"#11834")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11821"},"#11821")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11782"},"#11782")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11723"},"#11723")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11569"},"#11569")))}d.isMDXComponent=!0}}]);