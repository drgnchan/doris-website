"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58863],{15680:(e,n,i)=>{i.d(n,{xA:()=>p,yg:()=>m});var t=i(296540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(i),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return i?t.createElement(m,o(o({ref:n},p),{},{components:i})):t.createElement(m,o({ref:n},p))}));function m(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},39219:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(58168),r=(i(296540),i(15680));const a={title:"Pipeline Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},o=void 0,l={unversionedId:"query-acceleration/pipeline-execution-engine",id:"version-2.1/query-acceleration/pipeline-execution-engine",title:"Pipeline Execution Engine",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/query-acceleration/pipeline-execution-engine.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/pipeline-execution-engine",permalink:"/docs/query-acceleration/pipeline-execution-engine",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Pipeline Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"property is_being_synced",permalink:"/docs/advanced/is-being-synced"},next:{title:"PipelineX Execution Engine",permalink:"/docs/query-acceleration/pipeline-x-execution-engine"}},s={},c=[{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Set session variable",id:"set-session-variable",level:3},{value:"enable_pipeline_engine",id:"enable_pipeline_engine",level:4},{value:"parallel_pipeline_task_num",id:"parallel_pipeline_task_num",level:4}],p={toc:c},u="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"pipeline-execution-engine"},"Pipeline Execution Engine"),(0,r.yg)("version",{since:"2.0.0"}),(0,r.yg)("p",null,"Pipeline execution engine is an experimental feature added by Doris in version 2.0. The goal is to replace the current execution engine of Doris's volcano model, fully release the computing power of multi-core CPUs, and limit the number of Doris's query threads to solve the problem of Doris's execution thread bloat."),(0,r.yg)("p",null,"Its specific design, implementation and effects can be found in ","[DSIP-027]","(",(0,r.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-027%3A+Support+Pipeline+Exec+Engine"},"DSIP-027: Support Pipeline Exec Engine - DORIS - Apache Software Foundation"),")."),(0,r.yg)("h2",{id:"principle"},"Principle"),(0,r.yg)("p",null,"The current Doris SQL execution engine is designed based on the traditional volcano model, which has the following problems in a single multi-core scenario\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Inability to take full advantage of multi-core computing power to improve query performance,",(0,r.yg)("strong",{parentName:"p"},"most scenarios require manual setting of parallelism")," for performance tuning, which is almost difficult to set in production environments.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Each instance of a standalone query corresponds to one thread of the thread pool, which introduces two additional problems."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Once the thread pool is hit full. ",(0,r.yg)("strong",{parentName:"li"},"Doris' query engine will enter a pseudo-deadlock")," and will not respond to subsequent queries. ",(0,r.yg)("strong",{parentName:"li"},"At the same time there is a certain probability of entering a logical deadlock")," situation: for example, all threads are executing an instance's probe task."),(0,r.yg)("li",{parentName:"ul"},"Blocking arithmetic will take up thread resources,",(0,r.yg)("strong",{parentName:"li"},"blocking thread resources can not be yielded to instances that can be scheduled"),", the overall resource utilization does not go up."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Blocking arithmetic relies on the OS thread scheduling mechanism, ",(0,r.yg)("strong",{parentName:"p"},"thread switching overhead (especially in the scenario of system mixing)\uff09")))),(0,r.yg)("p",null,"The resulting set of problems drove Doris to implement an execution engine adapted to the architecture of modern multi-core CPUs."),(0,r.yg)("p",null,"And as shown in the figure below (quoted from","[Push versus pull-based loop fusion in query engines]","(",(0,r.yg)("a",{parentName:"p",href:"https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D67AE4899E87F4B5102F859B0FC02045/S0956796818000102a.pdf/div-class-title-push-versus-pull-based-loop-fusion-in-query-engines-div.pdf"},"jfp_1800010a (cambridge.org)"),")\uff09\uff0cThe resulting set of problems drove Doris to implement an execution engine adapted to the architecture of modern multi-core CPUs.\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image.png",src:i(340524).A,width:"854",height:"302"})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Transformation of the traditional pull pull logic-driven execution process into a data-driven execution engine for the push model"),(0,r.yg)("li",{parentName:"ol"},"Blocking operations are asynchronous, reducing the execution overhead caused by thread switching and thread blocking and making more efficient use of the CPU"),(0,r.yg)("li",{parentName:"ol"},"Controls the number of threads to be executed and reduces the resource congestion of large queries on small queries in mixed load scenarios by controlling time slice switching")),(0,r.yg)("p",null,"This improves the efficiency of CPU execution on mixed-load SQL and enhances the performance of SQL queries."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"set-session-variable"},"Set session variable"),(0,r.yg)("h4",{id:"enable_pipeline_engine"},"enable_pipeline_engine"),(0,r.yg)("p",null,"This improves the efficiency of CPU execution on mixed-load SQL and enhances the performance of SQL queries"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"set enable_pipeline_engine = true;\n")),(0,r.yg)("h4",{id:"parallel_pipeline_task_num"},"parallel_pipeline_task_num"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"parallel_pipeline_task_num")," represents the concurrency of pipeline tasks of a query. Default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"0")," (e.g. half number of CPU cores). Users can adjust this value according to their own workloads."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"set parallel_pipeline_task_num = 0;\n")),(0,r.yg)("p",null,'You can limit the automatically configured concurrency by setting "max_instance_num."\uff08The default value is 64)'))}g.isMDXComponent=!0},340524:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/pipeline-execution-engine-2067b3a862de84a561eabefd41d48a56.png"}}]);