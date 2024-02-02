"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22436],{95788:(e,a,t)=>{t.d(a,{Iu:()=>m,yg:()=>c});var r=t(11504);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),h=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},m=function(e){var a=h(e.components);return r.createElement(o.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=h(t),g=i,c=s["".concat(o,".").concat(g)]||s[g]||u[g]||p;return t?r.createElement(c,n(n({ref:a},m),{},{components:t})):r.createElement(c,n({ref:a},m))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var p=t.length,n=new Array(p);n[0]=g;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[s]="string"==typeof e?e:i,n[1]=l;for(var h=2;h<p;h++)n[h]=t[h];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1396:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>h});var r=t(45072),i=(t(11504),t(95788));const p={title:"Release 2.0.2",language:"en"},n=void 0,l={unversionedId:"releasenotes/release-2.0.2",id:"version-2.0/releasenotes/release-2.0.2",title:"Release 2.0.2",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/releasenotes/release-2.0.2.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0.2",permalink:"/docs/releasenotes/release-2.0.2",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.0.2",language:"en"},sidebar:"docs",previous:{title:"Release 2.0.3",permalink:"/docs/releasenotes/release-2.0.3"},next:{title:"Release 2.0.1",permalink:"/docs/releasenotes/release-2.0.1"}},o={},h=[{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Easier to use",id:"easier-to-use",level:3},{value:"New optimizer Nereids statistics collection improvement",id:"new-optimizer-nereids-statistics-collection-improvement",level:3},{value:"Better support for JDBC, HDFS, Hive, MySQL, Max Compute, Multi-Catalog",id:"better-support-for-jdbc-hdfs-hive-mysql-max-compute-multi-catalog",level:3},{value:"Performance for inverted index query",id:"performance-for-inverted-index-query",level:3},{value:"Improve Array functions",id:"improve-array-functions",level:3},{value:"Important Bug fixes",id:"important-bug-fixes",level:2},{value:"Big Thanks",id:"big-thanks",level:2}],m={toc:h},s="wrapper";function u(e){let{components:a,...t}=e;return(0,i.yg)(s,(0,r.c)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"release-202"},"Release 2.0.2"),(0,i.yg)("p",null,"Thanks to our community users and developers, 489 improvements and bug fixes have been made in Doris 2.0.2."),(0,i.yg)("h2",{id:"behavior-changes"},"Behavior Changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/24679"},"Remove json -> operator convert to json_extract #24679")),(0,i.yg)("p",{parentName:"li"},"Remove json '->' operator since it is conflicted with lambda function syntax. It's a syntax sugar for function json_extract and can be replaced with the former.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/24308"},"Start the script to set metadata_failure_recovery #24308")),(0,i.yg)("p",{parentName:"li"},"Move metadata_failure_recovery from fe.conf to start_fe.sh argument to prevent being used unexpectedly.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/24207"},"Change ordinary type null value is \\N,complex type null value is null #24207"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/23795"},"Optimize priority_ network matching logic for be #23795"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/17730"},"Fix cancel load failed because Job could not be cancelled\u2026 #17730")),(0,i.yg)("p",{parentName:"li"},"Allow cancel a retrying load job."))),(0,i.yg)("h2",{id:"improvements"},"Improvements"),(0,i.yg)("h3",{id:"easier-to-use"},"Easier to use"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/23887"},"Support custom lib dir to save custom libs #23887")),(0,i.yg)("p",{parentName:"li"},"Add a custom_lib dir to allow users place custom lib files and custom_lib will not be replaced.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/23784"},"Optimize priority_ network matching logic #23784")," "),(0,i.yg)("p",{parentName:"li"},"Optimize priority_network logic to avoid error when this config is wrong or not configured.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/23022"},"Row policy support role #23022")," "),(0,i.yg)("p",{parentName:"li"},"Support role based auth for row policy."))),(0,i.yg)("h3",{id:"new-optimizer-nereids-statistics-collection-improvement"},"New optimizer Nereids statistics collection improvement"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23663"},"Disable file cache while running analysis tasks. #23663")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23703"},"Show column stats even when error occurred. #23703")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23965"},"Support basic jdbc external table stats collection. #23965")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24625"},"Skip unknown col stats check on __internal_scheam and information_schema #24625"))),(0,i.yg)("h3",{id:"better-support-for-jdbc-hdfs-hive-mysql-max-compute-multi-catalog"},"Better support for JDBC, HDFS, Hive, MySQL, Max Compute, Multi-Catalog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/24168"},"Support hadoop viewfs. #24168"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/22369"},"Avoid calling checksum when replaying creating jdbc catalog and fix ranger issue #22369"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/23868"},"Optimize the JDBC Catalog connection error message #23868")," "),(0,i.yg)("p",{parentName:"li"},"Improve property check and error message for JDBC catalog")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/24242"},"Fix mc decimal type parse, fix wrong obj location #24242")," "),(0,i.yg)("p",{parentName:"li"},"Fix some issues for Max Compute catalog")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/23391"},"Support sql cache for hms catalog #23391")," "),(0,i.yg)("p",{parentName:"li"},"SQL cache for Hive catalog")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/22869"},"Merge hms partition events. #22869")," "),(0,i.yg)("p",{parentName:"li"},"Improve performance for Hive metadata sync")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/22702"},"Add metadata_name_ids for quickly get catlogs,db,table and add profiling table in order to Compatible with mysql #22702")))),(0,i.yg)("h3",{id:"performance-for-inverted-index-query"},"Performance for inverted index query"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23952"},"Add bkd index query cache to improve perf #23952")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24678"},"Improve performance for count on index other than match #24678")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24751"},"Improve match performance without index #24751")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23871"},"Optimize multiple terms conjunction query #23871"),"\nImprove performance of MATCH_ALL"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24389"},"Optimize unnecessary conversions #24389"),"\nImprove performance of MATCH")),(0,i.yg)("h3",{id:"improve-array-functions"},"Improve Array functions"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23630"},"Fix old optimizer with some array literal functions #23630")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24327"},"Improve array union support multi params #24327")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24455"},"Improve explode func with array nested complex type #24455"))),(0,i.yg)("h2",{id:"important-bug-fixes"},"Important Bug fixes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23601"},"The parameter positions of timestamp diff function to sql are reversed #23601")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23630"},"Fix old optimizer with some array literal functions #23630")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23555"},"Fix query cache returns wrong result after deleting partitions. #23555")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/17644"},"Fix potential data loss when clone task's dst tablet is cooldown replica #17644")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23779"},"Fix array map batch append data with right next_array_item_rowid #23779")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23940"},"Fix or to in rule #23940")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23860"},"Fix 'char' function's toSql implementation is wrong #23860")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23973"},"Record wrong best plan properties #23973")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24020"},"Make TVF's distribution spec always be RANDOM #24020")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24039"},"External scan use STORAGE_ANY instead of ANY as distibution #24039")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23958"},"Runtimefilter target is not SlotReference #23958")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24104"},"mv in select materialized_view should disable show table #24104")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24097"},"Fail over to remote file reader if local cache failed #24097")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23852"},"Fix revoke role operation cause fe down #23852")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24139"},"Handle status code correctly and add a new error code ",(0,i.yg)("inlineCode",{parentName:"a"},"ENTRY_NOT_FOUND")," #24139")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24165"},"Fix leaky abstraction and shield the status code ",(0,i.yg)("inlineCode",{parentName:"a"},"END_OF_FILE")," from upper layers #24165")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24164"},"Fix bug that Read garbled files caused be crash. #24164")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24369"},"Fix be core when user sepcified empty ",(0,i.yg)("inlineCode",{parentName:"a"},"column_separator")," using hdfs tvf #24369")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24372"},"Fix need to restart BE after replacing the jar package in java-udf #24372")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24381"},"Need to call 'set_version' in nested functions #24381")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24385"},"windown_funnel compatibility issue with multi backends #24385")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24290"},"correlated anti join shouldn't be translated to null aware anti join #24290")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24207"},"Change ordinary type null value is \\N,complex type null value is null #24207")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24521"},"Fix analyze failed when there are thousands of partitions. #24521")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24460"},"Do not use enum as the data type for JavaUdfDataType. #24460")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24568"},"Fix multi window projection issue temporarily #24568")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24610"},"Make metadata compatible with 2.0.3 #24610")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24595"},"Select outfile column order is wrong #24595")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24616"},"Incorrect result of semi/anti mark join #24616")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24635"},"Fix broker read issue #24635")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24625"},"Skip unknown col stats check on __internal_scheam and information_schema #24625")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24572"},"Fixed bug when parsing multi-character delimiters. #24572")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24578"},"Fix timezone parse when there is no tzfile #24578")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23943"},"We need to issue an error when starting FE without setting the Java home environment #23943")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24697"},"Enable_unique_key_partial_update should be forwarded to master #24697")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24681"},"Fix paimon file catalog meta issue and replication num analysis issue #24681")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24617"},"Add more log for ingest_binlog && Fix ingest_binlog not rewrite rowset_meta tablet_uid #24617")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24692"},"Do not abort when a disk is broken #24692")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24700"},"colocate join could not work well on full outer join #24700")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24389"},"Optimize unnecessary conversions #24389")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24698"},"Optimize the reading efficiency of nullable (string) columns. #24698")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24778"},"Fix segment cache core when output rowset is nullptr #24778")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24782"},"Fix duplicate key in schema change #24782")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24800"},"Make metadata compatible for future version after 2.0.2 #24800")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24808"},"Fix map/array deserialize string with quote pair #24808")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24636"},"Failed on arm platform, with clang compiler and pch on, close #24633 #24636")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24981"},"Table column order is changed if add a column and do truncate #24981")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24949"},"Make parser mode coarse grained by default #24949"))),(0,i.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues?q=label%3Adev%2F2.0.2-merged+is%3Aclosed"},"github")," ."),(0,i.yg)("h2",{id:"big-thanks"},"Big Thanks"),(0,i.yg)("p",null,"Thanks all who contribute to this release:"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/adonis0147"},"@adonis0147")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/airborne12"},"@airborne12")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/amorynan"},"@amorynan")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/AshinGau"},"@AshinGau")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/BePPPower"},"@BePPPower")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/BiteTheDDDDt"},"@BiteTheDDDDt")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/bobhan1"},"@bobhan1")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ByteYue"},"@ByteYue")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/caiconghui"},"@caiconghui")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CalvinKirs"},"@CalvinKirs")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cambyzju"},"@cambyzju")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ChengDaqi2023"},"@ChengDaqi2023")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ChinaYiGuan"},"@ChinaYiGuan")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CodeCooker17"},"@CodeCooker17")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/csun5285"},"@csun5285")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/dataroaring"},"@dataroaring")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/deadlinefen"},"@deadlinefen")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/DongLiang-0"},"@DongLiang-0")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Doris-Extras"},"@Doris-Extras")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/dutyu"},"@dutyu")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/eldenmoon"},"@eldenmoon")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/englefly"},"@englefly")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/freemandealer"},"@freemandealer")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Gabriel39"},"@Gabriel39")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/gnehil"},"@gnehil")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/GoGoWen"},"@GoGoWen")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/gohalo"},"@gohalo")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/HappenLee"},"@HappenLee")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/hello-stephen"},"@hello-stephen")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/HHoflittlefish777"},"@HHoflittlefish777")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/hubgeter"},"@hubgeter")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/hust-hhb"},"@hust-hhb")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ixzc"},"@ixzc")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/JackDrogon"},"@JackDrogon")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/jacktengg"},"@jacktengg")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/jackwener"},"@jackwener")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Jibing-Li"},"@Jibing-Li")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/JNSimba"},"@JNSimba")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/kaijchen"},"@kaijchen")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/kaka11chen"},"@kaka11chen")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Kikyou1997"},"@Kikyou1997")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lchangliang"},"@Lchangliang")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/LemonLiTree"},"@LemonLiTree")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/liaoxin01"},"@liaoxin01")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/LiBinfeng-01"},"@LiBinfeng-01")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/liugddx"},"@liugddx")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/luwei16"},"@luwei16")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/mongo360"},"@mongo360")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/morningman"},"@morningman")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/morrySnow"},"@morrySnow")," @mrhhsg @Mryange @mymeiyi @neuyilan @pingchunzhang @platoneko @qidaye @realize096 @RYH61 @shuke987 @sohardforaname @starocean999 @SWJTU-ZhangLei @TangSiyang2001 @Tech-Circle-48 @w41ter @wangbo @wsjz @wuwenchi @wyx123654 @xiaokang @XieJiann @xinyiZzz @XuJianxu @xutaoustc @xy720 @xyfsjq @xzj7019 @yiguolei @yujun777 @Yukang-Lian @Yulei-Yang @zclllyybb @zddr @zhangguoqiang666 @zhangstar333 @ZhangYu0123 @zhannngchen @zxealous @zy-kkk @zzzxl1993 @zzzzzzzs"))}u.isMDXComponent=!0}}]);