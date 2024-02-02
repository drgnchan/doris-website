"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51193],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(45072),a=(t(11504),t(95788));const i={title:"Profile Action",language:"en"},o=void 0,s={unversionedId:"admin-manual/http-actions/fe/profile-action",id:"admin-manual/http-actions/fe/profile-action",title:"Profile Action",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/fe/profile-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/profile-action",permalink:"/docs/dev/admin-manual/http-actions/fe/profile-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Profile Action",language:"en"},sidebar:"docs",previous:{title:"Metrics Action",permalink:"/docs/dev/admin-manual/http-actions/fe/metrics-action"},next:{title:"Query Detail Action",permalink:"/docs/dev/admin-manual/http-actions/fe/query-detail-action"}},l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"profile-action"},"Profile Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/profile"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/profile/text")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to obtain the query profile of the specified query id.\nIf query_id is not exists, return 404 NOT FOUND ERROR\nIf query_id exists, return query profile like this"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Query:\n  Summary:\n     - Query ID: a0a9259df9844029-845331577440a3bd\n     - Start Time: 2020-06-15 14:10:05\n     - End Time: 2020-06-15 14:10:05\n     - Total: 8ms\n     - Query Type: Query\n     - Query State: EOF\n     - Doris Version: trunk\n     - User: root\n     - Default Db: default_cluster:test\n     - Sql Statement: select * from table1\n  Execution Profile a0a9259df9844029-845331577440a3bd:(Active: 7.315ms, % non-child: 100.00%)\n    Fragment 0:\n      Instance a0a9259df9844029-845331577440a3be (host=TNetworkAddress(hostname:172.26.108.176, port:9560)):(Active: 1.523ms, % non-child: 0.24%)\n         - MemoryLimit: 2.00 GB\n         - PeakUsedReservation: 0.00\n         - PeakMemoryUsage: 72.00 KB\n         - RowsProduced: 5\n         - AverageThreadTokens: 0.00\n         - PeakReservation: 0.00\n        BlockMgr:\n           - BlocksCreated: 0\n           - BlockWritesOutstanding: 0\n           - BytesWritten: 0.00\n           - TotalEncryptionTime: 0ns\n           - BufferedPins: 0\n           - TotalReadBlockTime: 0ns\n           - TotalBufferWaitTime: 0ns\n           - BlocksRecycled: 0\n           - TotalIntegrityCheckTime: 0ns\n           - MaxBlockSize: 8.00 MB\n        DataBufferSender (dst_fragment_instance_id=a0a9259df9844029-845331577440a3be):\n           - AppendBatchTime: 9.23us\n             - ResultSendTime: 956ns\n             - TupleConvertTime: 5.735us\n           - NumSentRows: 5\n        OLAP_SCAN_NODE (id=0):(Active: 1.506ms, % non-child: 20.59%)\n           - TotalRawReadTime: 0ns\n           - CompressedBytesRead: 6.47 KB\n           - PeakMemoryUsage: 0.00\n           - RowsPushedCondFiltered: 0\n           - ScanRangesComplete: 0\n           - ScanTime: 25.195us\n           - BitmapIndexFilterTimer: 0ns\n           - BitmapIndexFilterCount: 0\n           - NumScanners: 65\n           - RowsStatsFiltered: 0\n           - VectorPredEvalTime: 0ns\n           - BlockSeekTime: 1.299ms\n           - RawRowsRead: 1.91K (1910)\n           - ScannerThreadsVoluntaryContextSwitches: 0\n           - RowsDelFiltered: 0\n           - IndexLoadTime: 911.104us\n           - NumDiskAccess: 1\n           - ScannerThreadsTotalWallClockTime: 0ns\n             - MaterializeTupleTime: 0ns\n             - ScannerThreadsUserTime: 0ns\n             - ScannerThreadsSysTime: 0ns\n           - TotalPagesNum: 0\n           - RowsReturnedRate: 3.319K /sec\n           - BlockLoadTime: 539.289us\n           - CachedPagesNum: 0\n           - BlocksLoad: 384\n           - UncompressedBytesRead: 0.00\n           - RowsBloomFilterFiltered: 0\n           - TabletCount : 1\n           - RowsReturned: 5\n           - ScannerThreadsInvoluntaryContextSwitches: 0\n           - DecompressorTimer: 0ns\n           - RowsVectorPredFiltered: 0\n           - ReaderInitTime: 6.498ms\n           - RowsRead: 5\n           - PerReadThreadRawHdfsThroughput: 0.0 /sec\n           - BlockFetchTime: 4.318ms\n           - ShowHintsTime: 0ns\n           - TotalReadThroughput: 0.0 /sec\n           - IOTimer: 1.154ms\n           - BytesRead: 48.49 KB\n           - BlockConvertTime: 97.539us\n           - BlockSeekCount: 0\n")),(0,a.yg)("p",null,"If it is a text interface, simply return the plain text content of the profile."),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"query_id"),(0,a.yg)("p",{parentName:"li"},"  Specify query id"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "profile": "query profile ..."\n    },\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Get the query profile of the specified query id"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/profile?query_id=f732084bc8e74f39-8313581c9c3c0b58\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "profile": "query profile ..."\n    },\n    "count": 0\n}\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Get the query profile text of the specified query id"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"GET /api/profile/text?query_id=f732084bc8e74f39-8313581c9c3c0b58\n\nResponse:\n    Summary:\n    - Profile ID: 48bdf6d75dbb46c9-998b9c0368f4561f\n    - Task Type: QUERY\n    - Start Time: 2023-12-20 11:09:41\n    - End Time: 2023-12-20 11:09:45\n    - Total: 3s680ms\n    - Task State: EOF\n    - User: root\n    - Default Db: tpcds\n    - Sql Statement: with customer_total_return as\n  select sr_customer_sk as ctr_customer_sk\n  ,sr_store_sk as ctr_store_sk\n  ,sum(SR_FEE) as ctr_total_return\n  ...\n")))))}d.isMDXComponent=!0}}]);