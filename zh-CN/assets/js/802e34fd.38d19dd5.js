"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28652],{95788:(e,t,a)=>{a.d(t,{Iu:()=>m,yg:()=>O});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(a),g=r,O=c["".concat(s,".").concat(g)]||c[g]||u[g]||l;return a?n.createElement(O,p(p({ref:t},m),{},{components:a})):n.createElement(O,p({ref:t},m))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},17624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(45072),r=(a(11504),a(95788));const l={title:"SHOW-ROUTINE-LOAD",language:"zh-CN"},p=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD",id:"sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD",title:"SHOW-ROUTINE-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-ROUTINE-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE"},next:{title:"SHOW-SYNC-JOB",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SYNC-JOB"}},s={},i=[{value:"SHOW-ROUTINE-LOAD",id:"show-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:i},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-routine-load"},"SHOW-ROUTINE-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW ROUTINE LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a Routine Load \u4f5c\u4e1a\u8fd0\u884c\u72b6\u6001"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [ALL] ROUTINE LOAD [FOR jobName];\n")),(0,r.yg)("p",null,"\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"                  Id: \u4f5c\u4e1aID\n                Name: \u4f5c\u4e1a\u540d\u79f0\n          CreateTime: \u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\n           PauseTime: \u6700\u8fd1\u4e00\u6b21\u4f5c\u4e1a\u6682\u505c\u65f6\u95f4\n             EndTime: \u4f5c\u4e1a\u7ed3\u675f\u65f6\u95f4\n              DbName: \u5bf9\u5e94\u6570\u636e\u5e93\u540d\u79f0\n           TableName: \u5bf9\u5e94\u8868\u540d\u79f0 \uff08\u591a\u8868\u7684\u60c5\u51b5\u4e0b\u7531\u4e8e\u662f\u52a8\u6001\u8868\uff0c\u56e0\u6b64\u4e0d\u663e\u793a\u5177\u4f53\u8868\u540d\uff0c\u6211\u4eec\u7edf\u4e00\u663e\u793a multi-table \uff09\n           IsMultiTbl: \u662f\u5426\u4e3a\u591a\u8868\n               State: \u4f5c\u4e1a\u8fd0\u884c\u72b6\u6001\n      DataSourceType: \u6570\u636e\u6e90\u7c7b\u578b\uff1aKAFKA\n      CurrentTaskNum: \u5f53\u524d\u5b50\u4efb\u52a1\u6570\u91cf\n       JobProperties: \u4f5c\u4e1a\u914d\u7f6e\u8be6\u60c5\nDataSourceProperties: \u6570\u636e\u6e90\u914d\u7f6e\u8be6\u60c5\n    CustomProperties: \u81ea\u5b9a\u4e49\u914d\u7f6e\n           Statistic: \u4f5c\u4e1a\u8fd0\u884c\u72b6\u6001\u7edf\u8ba1\u4fe1\u606f\n            Progress: \u4f5c\u4e1a\u8fd0\u884c\u8fdb\u5ea6\n                 Lag: \u4f5c\u4e1a\u5ef6\u8fdf\u72b6\u6001\nReasonOfStateChanged: \u4f5c\u4e1a\u72b6\u6001\u53d8\u66f4\u7684\u539f\u56e0\n        ErrorLogUrls: \u88ab\u8fc7\u6ee4\u7684\u8d28\u91cf\u4e0d\u5408\u683c\u7684\u6570\u636e\u7684\u67e5\u770b\u5730\u5740\n            OtherMsg: \u5176\u4ed6\u9519\u8bef\u4fe1\u606f\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"State"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"  \u6709\u4ee5\u4e0b5\u79cdState\uff1a\n  * NEED_SCHEDULE\uff1a\u4f5c\u4e1a\u7b49\u5f85\u88ab\u8c03\u5ea6\n  * RUNNING\uff1a\u4f5c\u4e1a\u8fd0\u884c\u4e2d\n  * PAUSED\uff1a\u4f5c\u4e1a\u88ab\u6682\u505c\n  * STOPPED\uff1a\u4f5c\u4e1a\u5df2\u7ed3\u675f\n  * CANCELLED\uff1a\u4f5c\u4e1a\u5df2\u53d6\u6d88\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Progress"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'  \u5bf9\u4e8eKafka\u6570\u636e\u6e90\uff0c\u663e\u793a\u6bcf\u4e2a\u5206\u533a\u5f53\u524d\u5df2\u6d88\u8d39\u7684offset\u3002\u5982 {"0":"2"} \u8868\u793aKafka\u5206\u533a0\u7684\u6d88\u8d39\u8fdb\u5ea6\u4e3a2\u3002\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Lag"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'  \u5bf9\u4e8eKafka\u6570\u636e\u6e90\uff0c\u663e\u793a\u6bcf\u4e2a\u5206\u533a\u7684\u6d88\u8d39\u5ef6\u8fdf\u3002\u5982{"0":10} \u8868\u793aKafka\u5206\u533a0\u7684\u6d88\u8d39\u5ef6\u8fdf\u4e3a10\u3002\n')))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u540d\u79f0\u4e3a test1 \u7684\u6240\u6709\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff08\u5305\u62ec\u5df2\u505c\u6b62\u6216\u53d6\u6d88\u7684\u4f5c\u4e1a\uff09\u3002\u7ed3\u679c\u4e3a\u4e00\u884c\u6216\u591a\u884c\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALL ROUTINE LOAD FOR test1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u540d\u79f0\u4e3a test1 \u7684\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ROUTINE LOAD FOR test1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u663e\u793a example_db \u4e0b\uff0c\u6240\u6709\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff08\u5305\u62ec\u5df2\u505c\u6b62\u6216\u53d6\u6d88\u7684\u4f5c\u4e1a\uff09\u3002\u7ed3\u679c\u4e3a\u4e00\u884c\u6216\u591a\u884c\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"use example_db;\nSHOW ALL ROUTINE LOAD;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u663e\u793a example_db \u4e0b\uff0c\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"use example_db;\nSHOW ROUTINE LOAD;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u663e\u793a example_db \u4e0b\uff0c\u540d\u79f0\u4e3a test1 \u7684\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ROUTINE LOAD FOR example_db.test1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u663e\u793a example_db \u4e0b\uff0c\u540d\u79f0\u4e3a test1 \u7684\u6240\u6709\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff08\u5305\u62ec\u5df2\u505c\u6b62\u6216\u53d6\u6d88\u7684\u4f5c\u4e1a\uff09\u3002\u7ed3\u679c\u4e3a\u4e00\u884c\u6216\u591a\u884c\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALL ROUTINE LOAD FOR example_db.test1;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, ROUTINE, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);