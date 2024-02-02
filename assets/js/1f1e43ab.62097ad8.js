"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4372],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>d});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),g=n,d=c["".concat(p,".").concat(g)]||c[g]||m[g]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},67956:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(45072),n=(a(11504),a(95788));const i={title:"Release 1.2.3",language:"en"},o=void 0,l={unversionedId:"releasenotes/release-1.2.3",id:"version-1.2/releasenotes/release-1.2.3",title:"Release 1.2.3",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/releasenotes/release-1.2.3.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.2.3",permalink:"/docs/1.2/releasenotes/release-1.2.3",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Release 1.2.3",language:"en"},sidebar:"docs",previous:{title:"Release 1.2.4.1",permalink:"/docs/1.2/releasenotes/release-1.2.4.1"},next:{title:"Release 1.2.2",permalink:"/docs/1.2/releasenotes/release-1.2.2"}},p={},s=[{value:"JDBC Catalog",id:"jdbc-catalog",level:3},{value:"Elasticsearch Catalog",id:"elasticsearch-catalog",level:3},{value:"Hive Catalog",id:"hive-catalog",level:3},{value:"Dynamic Partition Improvement",id:"dynamic-partition-improvement",level:3},{value:"Optimize BE&#39;s Threading Model",id:"optimize-bes-threading-model",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"improvement"},"Improvement"),(0,n.yg)("h3",{id:"jdbc-catalog"},"JDBC Catalog"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Support connecting to Doris clusters through JDBC Catalog.")),(0,n.yg)("p",null,"Currently, Jdbc Catalog only support to use 5.x version of JDBC jar package to connect another Doris database. If you use 8.x version of JDBC jar package, the data type of column may not be matched."),(0,n.yg)("p",null,"Reference: ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/#doris"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/#doris")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support to synchronize only the specified database through the ",(0,n.yg)("inlineCode",{parentName:"p"},"only_specified_database")," attribute.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support synchronizing table names in the form of lowercase through ",(0,n.yg)("inlineCode",{parentName:"p"},"lower_case_table_names")," to solve the problem of case sensitivity of table names."))),(0,n.yg)("p",null,"Reference: ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Optimize the read performance of JDBC Catalog.")),(0,n.yg)("h3",{id:"elasticsearch-catalog"},"Elasticsearch Catalog"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support Array type mapping.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support whether to push down the like expression through the ",(0,n.yg)("inlineCode",{parentName:"p"},"like_push_down")," attribute to control the CPU overhead of the ES cluster."))),(0,n.yg)("p",null,"Reference: ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/es"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/es")),(0,n.yg)("h3",{id:"hive-catalog"},"Hive Catalog"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support Hive table default partition ",(0,n.yg)("inlineCode",{parentName:"p"},"_HIVE_DEFAULT_PARTITION_"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Hive Metastore metadata automatic synchronization supports notification event in compressed format."))),(0,n.yg)("h3",{id:"dynamic-partition-improvement"},"Dynamic Partition Improvement"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Dynamic partition supports specifying the ",(0,n.yg)("inlineCode",{parentName:"li"},"storage_medium")," parameter to control the storage medium of the newly added partition.")),(0,n.yg)("p",null,"Reference: ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition"},"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition")),(0,n.yg)("h3",{id:"optimize-bes-threading-model"},"Optimize BE's Threading Model"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Optimize BE's threading model to avoid stability problems caused by frequent thread creation and destroy.")),(0,n.yg)("h1",{id:"bugfix"},"Bugfix"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed issues with Merge-On-Write Unique Key tables.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed compaction related issues.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed some delete statement issues causing data errors.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed several query execution errors.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed the problem of using JDBC catalog to cause BE crash on some operating system.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed Multi-Catalog issues.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed memory statistics and optimization issues.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed decimalV3 and date/datetimev2 related issues.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed load transaction stability issues.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed light-weight schema change issues.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed the issue of using ",(0,n.yg)("inlineCode",{parentName:"p"},"datetime")," type for batch partition creation.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed the problem that a large number of failed broker loads would cause the FE memory usage to be too high.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed the problem that stream load cannot be canceled after dropping the table.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed querying ",(0,n.yg)("inlineCode",{parentName:"p"},"information_schema")," timeout in some cases.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed the problem of BE crash caused by concurrent data export using ",(0,n.yg)("inlineCode",{parentName:"p"},"select outfile"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed transactional insert operation memory leak.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed several query/load profile issues, and supports direct download of profiles through FE web ui.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed the problem that the BE tablet GC thread caused the IO util to be too high.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fixed the problem that the commit offset is inaccurate in Kafka routine load."))))}m.isMDXComponent=!0}}]);