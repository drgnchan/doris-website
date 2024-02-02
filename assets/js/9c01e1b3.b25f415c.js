"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74924],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>g});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(45072),i=(n(11504),n(95788));const o={title:"Compaction Action",language:"en"},r=void 0,l={unversionedId:"admin-manual/http-actions/be/compaction-action",id:"version-1.2/admin-manual/http-actions/be/compaction-action",title:"Compaction Action",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/http-actions/be/compaction-action.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/compaction-action",permalink:"/docs/1.2/admin-manual/http-actions/be/compaction-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Compaction Action",language:"en"},sidebar:"docs",previous:{title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",permalink:"/docs/1.2/admin-manual/http-actions/be/tablets_distribution"},next:{title:"GET TABLETS ON A PARTICULAR BE",permalink:"/docs/1.2/admin-manual/http-actions/be/get-tablets"}},s={},c=[{value:"View Compaction status",id:"view-compaction-status",level:2},{value:"The overall compaction status of the node",id:"the-overall-compaction-status-of-the-node",level:3},{value:"Specify the compaction status of the tablet",id:"specify-the-compaction-status-of-the-tablet",level:3},{value:"Examples",id:"examples",level:3},{value:"Manually trigger Compaction",id:"manually-trigger-compaction",level:2},{value:"Examples",id:"examples-1",level:3},{value:"Manual Compaction execution status",id:"manual-compaction-execution-status",level:2},{value:"Examples",id:"examples-2",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"compaction-action"},"Compaction Action"),(0,i.yg)("p",null,"This API is used to view the overall compaction status of a BE node or the compaction status of a specified tablet. It can also be used to manually trigger Compaction."),(0,i.yg)("h2",{id:"view-compaction-status"},"View Compaction status"),(0,i.yg)("h3",{id:"the-overall-compaction-status-of-the-node"},"The overall compaction status of the node"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/compaction/run_status\n")),(0,i.yg)("p",null,"Return JSON:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n  "CumulativeCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  },\n  "BaseCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  }\n}\n')),(0,i.yg)("p",null,"This structure represents the id of the tablet that is performing the compaction task in a certain data directory, and the type of compaction."),(0,i.yg)("h3",{id:"specify-the-compaction-status-of-the-tablet"},"Specify the compaction status of the tablet"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/compaction/show?tablet_id=xxxx\n")),(0,i.yg)("p",null,"If the tablet does not exist, an error in JSON format is returned:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,i.yg)("p",null,"If the tablet exists, the result is returned in JSON format:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "cumulative policy type": "SIZE_BASED",\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": "2019-12-16 18:12:15.110",\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING 574.00 MB",\n        "[49-49] 2 DATA OVERLAPPING 574.00 B",\n        "[50-50] 0 DELETE NONOVERLAPPING 574.00 B",\n        "[51-51] 5 DATA OVERLAPPING 574.00 B"\n    ],\n    "missing_rowsets": [],\n    "stale version path": [\n        {\n            "path id": "2",\n            "last create time": "2019-12-16 18:11:15.110 +0800",\n            "path list": "2-> [0-24] -> [25-48]"\n        }, \n        {\n            "path id": "1",\n            "last create time": "2019-12-16 18:13:15.110 +0800",\n            "path list": "1-> [25-40] -> [40-48]"\n        }\n    ]\n}\n')),(0,i.yg)("p",null,"Explanation of results:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"cumulative policy type: The cumulative compaction policy type which is used by current tablet."),(0,i.yg)("li",{parentName:"ul"},"cumulative point: The version boundary between base and cumulative compaction. Versions before (excluding) points are handled by base compaction. Versions after (inclusive) are handled by cumulative compaction."),(0,i.yg)("li",{parentName:"ul"},"last cumulative failure time: The time when the last cumulative compaction failed. After 10 minutes by default, cumulative compaction is attempted on the this tablet again."),(0,i.yg)("li",{parentName:"ul"},"last base failure time: The time when the last base compaction failed. After 10 minutes by default, base compaction is attempted on the this tablet again."),(0,i.yg)("li",{parentName:"ul"},"rowsets: The current rowsets collection of this tablet. ","[0-48]"," means a rowset with version 0-48. The second number is the number of segments in a rowset. The ",(0,i.yg)("inlineCode",{parentName:"li"},"DELETE")," indicates the delete version. ",(0,i.yg)("inlineCode",{parentName:"li"},"OVERLAPPING")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"NONOVERLAPPING")," indicates whether data between segments is overlap."),(0,i.yg)("li",{parentName:"ul"},"missing_rowset: The missing rowsets."),(0,i.yg)("li",{parentName:"ul"},"stale version path: The merged version path of the rowset collection currently merged in the tablet. It is an array structure and each element represents a merged path. Each element contains three attributes: path id indicates the version path id, and last create time indicates the creation time of the most recent rowset on the path. By default, all rowsets on this path will be deleted after half an hour at the last create time.")),(0,i.yg)("h3",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"curl -X GET http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\n")),(0,i.yg)("h2",{id:"manually-trigger-compaction"},"Manually trigger Compaction"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"curl -X POST http://be_host:webserver_port/api/compaction/run?tablet_id=xxxx\\&compact_type=cumulative\n")),(0,i.yg)("p",null,"The only one manual compaction task that can be performed at a moment, and the value range of compact_type is base or cumulative"),(0,i.yg)("p",null,"If the tablet does not exist, an error in JSON format is returned:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,i.yg)("p",null,"If the compaction execution task fails to be triggered, an error in JSON format is returned:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n')),(0,i.yg)("p",null,"If the compaction execution task successes to be triggered, an error in JSON format is returned:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n')),(0,i.yg)("p",null,"Explanation of results:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"status: Trigger task status, when it is successfully triggered, it is Success; when for some reason (for example, the appropriate version is not obtained), it returns Fail."),(0,i.yg)("li",{parentName:"ul"},"msg: Give specific success or failure information.")),(0,i.yg)("h3",{id:"examples-1"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"curl -X POST http://192.168.10.24:8040/api/compaction/run?tablet_id=10015\\&compact_type=cumulative\n")),(0,i.yg)("h2",{id:"manual-compaction-execution-status"},"Manual Compaction execution status"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/compaction/run_status?tablet_id=xxxx\n")),(0,i.yg)("p",null,"If the tablet does not exist, an error in JSON format is returned:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,i.yg)("p",null,"If the tablet exists and the tablet is not running, JSON format is returned:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "compact_type" : ""\n}\n')),(0,i.yg)("p",null,"If the tablet exists and the tablet is running, JSON format is returned:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "compact_type" : "cumulative"\n}\n')),(0,i.yg)("p",null,"Explanation of results:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"run_status: Get the current manual compaction task execution status.")),(0,i.yg)("h3",{id:"examples-2"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"curl -X GET http://192.168.10.24:8040/api/compaction/run_status?tablet_id=10015\n")))}m.isMDXComponent=!0}}]);