"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Nereids-the Brand New Planner",language:"en"},o=void 0,s={unversionedId:"query-acceleration/nereids",id:"query-acceleration/nereids",title:"Nereids-the Brand New Planner",description:"\x3c!--",source:"@site/docs/query-acceleration/nereids.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/nereids",permalink:"/docs/dev/query-acceleration/nereids",draft:!1,tags:[],version:"current",frontMatter:{title:"Nereids-the Brand New Planner",language:"en"},sidebar:"docs",previous:{title:"PipelineX Execution Engine",permalink:"/docs/dev/query-acceleration/pipeline-x-execution-engine"},next:{title:"High-Concurrency Point Query",permalink:"/docs/dev/query-acceleration/hight-concurrent-point-query"}},l={},u=[{value:"R&amp;D background",id:"rd-background",level:2},{value:"Advantages of the new optimizer",id:"advantages-of-the-new-optimizer",level:2},{value:"Smarter",id:"smarter",level:3},{value:"more robust",id:"more-robust",level:3},{value:"more flexible",id:"more-flexible",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"Known issues and temporarily unsupported features",id:"known-issues-and-temporarily-unsupported-features",level:2},{value:"temporarily unsupported features",id:"temporarily-unsupported-features",level:3},{value:"known issues",id:"known-issues",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nereids-the-brand-new-planner"},"Nereids-the Brand New Planner"),(0,a.kt)("version",{since:"dev"}),(0,a.kt)("h2",{id:"rd-background"},"R&D background"),(0,a.kt)("p",null,"Modern query optimizers face challenges such as more complex query statements and more diverse query scenarios. At the same time, users are more and more eager to obtain query results as soon as possible. The outdated architecture of the old optimizer is difficult to meet the needs of rapid iteration in the future. Based on this, we set out to develop a new query optimizer for modern architectures. While processing the query requests of the current Doris scene more efficiently, it provides better scalability and lays a good foundation for handling the more complex requirements that Doris will face in the future."),(0,a.kt)("h2",{id:"advantages-of-the-new-optimizer"},"Advantages of the new optimizer"),(0,a.kt)("h3",{id:"smarter"},"Smarter"),(0,a.kt)("p",null,"The new optimizer presents the optimization points of each RBO and CBO in the form of rules. For each rule, the new optimizer provides a set of patterns used to describe the shape of the query plan, which can exactly match the query plan that can be optimized. Based on this, the new optimizer can better support more complex query statements such as multi-level subquery nesting."),(0,a.kt)("p",null,"At the same time, the CBO of the new optimizer is based on the advanced cascades framework, uses richer data statistics, and applies a cost model with more scientific dimensions. This makes the new optimizer more handy when faced with multi-table join queries."),(0,a.kt)("p",null,"TPC-H SF100 query speed comparison. The environment is 3BE, the new optimizer uses the original SQL, and the statistical information is collected before executing the SQL. Old optimizers use hand-tuned SQL. It can be seen that the new optimizer does not need to manually optimize the query, and the overall query time is similar to that of the old optimizer after manual optimization."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"execution time comparison",src:r(59069).Z,width:"3694",height:"1333"})),(0,a.kt)("h3",{id:"more-robust"},"more robust"),(0,a.kt)("p",null,"All optimization rules of the new optimizer are completed on the logical execution plan tree. After the query syntax and semantic analysis is completed, it will be transformed into a tree structure. Compared with the internal data structure of the old optimizer, it is more reasonable and unified. Taking subquery processing as an example, the new optimizer is based on a new data structure, which avoids separate processing of subqueries by many rules in the old optimizer. In turn, the possibility of logic errors in optimization rules is reduced."),(0,a.kt)("h3",{id:"more-flexible"},"more flexible"),(0,a.kt)("p",null,"The architectural design of the new optimizer is more reasonable and modern. Optimization rules and processing stages can be easily extended. Can more quickly respond to user needs."),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"Turn on Nereids"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET enable_nereids_planner=true;\n")),(0,a.kt)("p",null,"Turn on auto fall back to legacy planner"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET enable_fallback_to_original_planner=true;\n")),(0,a.kt)("p",null,"Executing analyze on table before query is highly recommended when query performance is critical so that we can fully utilize Nereids's CBO capability."),(0,a.kt)("h2",{id:"known-issues-and-temporarily-unsupported-features"},"Known issues and temporarily unsupported features"),(0,a.kt)("h3",{id:"temporarily-unsupported-features"},"temporarily unsupported features"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If automatic fallback is enabled, it will automatically fall back to the old optimizer execution")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Json\u3001Array\u3001Map and Struct types: The table in the query contains the above types, or the expressions in the query outputs the above types"),(0,a.kt)("li",{parentName:"ul"},"DML: Only support below DML statements: Insert Into Select, Update and Delete"),(0,a.kt)("li",{parentName:"ul"},"Matrialized view with predicates"),(0,a.kt)("li",{parentName:"ul"},"Function alias"),(0,a.kt)("li",{parentName:"ul"},"Java UDF and HDFS UDF"),(0,a.kt)("li",{parentName:"ul"},"High concurrent point query optimize")),(0,a.kt)("h3",{id:"known-issues"},"known issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cannot use partition cache to accelarate query")))}d.isMDXComponent=!0},59069:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/nereids-tpch-d31958316d7c0404806812d5b41f0286.png"}}]);