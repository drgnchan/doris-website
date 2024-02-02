"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52856],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const l={title:"SHOW-JOB",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-JOB",id:"sql-manual/sql-reference/Show-Statements/SHOW-JOB",title:"SHOW-JOB",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-JOB.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-JOB",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-JOB",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-JOB",language:"en"}},o={},c=[{value:"SHOW-JOB",id:"show-job",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-job"},"SHOW-JOB"),(0,a.yg)("p",null,"###Name"),(0,a.yg)("p",null,"SHOW JOB"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to display the running status of the JOB job"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW JOBS|JOB FOR job_name;\n")),(0,a.yg)("p",null,"SHOW JOBS is used to display the running status of all jobs under the current DB, and SHOW JOB FOR job_name is used to display the running status of the specified job."),(0,a.yg)("p",null,"Result description:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"                        Id: JobId\n                        Db: database name\n                      Name: Job name\n                   Definer: create user\n                  TimeZone: time zone\n               ExecuteType: RECURRING means cyclic scheduling, that is, the scheduling time specified by the every statement, ONCE_TIME means a one-time task.\n                 ExecuteAT: ONCE_TIME The execution start time of the task\n           ExecuteInterval: Interval of periodic scheduling tasks\n           ExecuteInterval: The time interval unit for periodic scheduling tasks\n                    STARTS: The start time of periodic scheduled task settings\n                      ENDS: The end time set by the periodic scheduling task\n                    Status: Job status\n     LastExecuteFinishTime: The time when the last execution was completed\n                  ErrorMsg: error message\n                   Comment: Remarks\n\n\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"State"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"   There are the following 5 states:\n   * RUNNING: running\n   * PAUSED: Paused\n   * STOPPED: end (manually triggered by the user)\n   * FINISHED: Finished\n")))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Display all JOBs under the current DB."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW JOBS;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Display the JOB named test1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW JOB FOR test1;\n")))),(0,a.yg)("p",null,"###Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," SHOW, JOB\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);