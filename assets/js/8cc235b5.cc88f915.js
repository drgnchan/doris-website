"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[43256],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var o=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?o.createElement(g,r(r({ref:t},m),{},{components:n})):o.createElement(g,r({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},921953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(58168),a=(n(296540),n(15680));const i={title:"Compaction",language:"en"},r=void 0,c={unversionedId:"advanced/best-practice/compaction",id:"advanced/best-practice/compaction",title:"Compaction",description:"\x3c!--",source:"@site/docs/advanced/best-practice/compaction.md",sourceDirName:"advanced/best-practice",slug:"/advanced/best-practice/compaction",permalink:"/docs/dev/advanced/best-practice/compaction",draft:!1,tags:[],version:"current",frontMatter:{title:"Compaction",language:"en"},sidebar:"docs",previous:{title:"Debug Log",permalink:"/docs/dev/advanced/best-practice/debug-log"},next:{title:"Resource Management",permalink:"/docs/dev/advanced/resource"}},l={},s=[{value:"Vertical Compaction",id:"vertical-compaction",level:2},{value:"Segment Compaction",id:"segment-compaction",level:2}],m={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"compaction"},"Compaction"),(0,a.yg)("p",null,"Doris writes data through a structure similar to LSM-Tree, and continuously merges small files into large ordered files through compaction in the background. Compaction handles operations such as deletion and updating. "),(0,a.yg)("p",null,"Appropriately adjusting the compaction strategy can greatly improve load and query efficiency. Doris provides the following two compaction strategies for tuning:"),(0,a.yg)("h2",{id:"vertical-compaction"},"Vertical Compaction"),(0,a.yg)("version",{since:"1.2.2"}),(0,a.yg)("p",null,"Vertical compaction is a new compaction algorithm implemented in Doris 1.2.2, which is used to optimize compaction execution efficiency and resource overhead in large-scale and wide table scenarios. It can effectively reduce the memory overhead of compaction and improve the execution speed of compaction. The test results show that the memory consumption by vertical compaction is only 1/10 of the original compaction algorithm, and the compaction rate is increased by 15%."),(0,a.yg)("p",null,"In vertical compaction, merging by row is changed to merging by column group. The granularity of each merge is changed to column group, which reduces the amount of data involved in single compaction and reduces the memory usage during compaction."),(0,a.yg)("p",null,"BE configuration\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"enable_vertical_compaction = true")," will turn on vertical compaction"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"vertical_compaction_num_columns_per_group = 5")," The number of columns contained in each column group, by testing, the efficiency and memory usage of a group of 5 columns by default is more friendly"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"vertical_compaction_max_segment_size")," is used to configure the size of the disk file after vertical compaction, the default value is 268435456 (bytes)")),(0,a.yg)("h2",{id:"segment-compaction"},"Segment Compaction"),(0,a.yg)("p",null,"Segment compaction mainly deals with the large-scale data load. Segment compaction operates during the load process and compact segments inside the job, which is different from normal compaction and vertical compaction. This mechanism can effectively reduce the number of generated segments and avoid the -238 (OLAP_ERR_TOO_MANY_SEGMENTS) errors."),(0,a.yg)("p",null,"The following features are provided by segment compaction:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"reduce the number of segments generated by load"),(0,a.yg)("li",{parentName:"ul"},"the compacting process is parallel to the load process, which will not increase the load time"),(0,a.yg)("li",{parentName:"ul"},"memory consumption and computing resources will increase during loading, but the increase is relatively low because it is evenly distributed throughout the long load process."),(0,a.yg)("li",{parentName:"ul"},"data after segment compaction will have resource and performance advantages in subsequent queries and normal compaction.")),(0,a.yg)("p",null,"BE configuration:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"enable_segcompaction=true")," turn it on."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"segcompaction_batch_size")," is used to configure the interval for merging. The default value 10 means that every 10 segment files will trigger a segment compaction. It is recommended to set between 10 - 30. The larger value will increase the memory usage of segment compaction.")),(0,a.yg)("p",null,"Situations where segment compaction is recommended:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Loading large amounts of data fails at OLAP",(0,a.yg)("em",{parentName:"li"}," ERR")," TOO",(0,a.yg)("em",{parentName:"li"}," MANY")," SEGMENTS (errcode - 238) error. Then it is recommended to turn on segment compaction to reduce the quantity of segments during the load process."),(0,a.yg)("li",{parentName:"ul"},"Too many small files are generated during the load process: although the amount of loading data is reasonable, the generation of a large number of small segment files may also fail the load job because of low cardinality or memory constraints that trigger memtable to be flushed in advance. Then it is recommended to turn on this function."),(0,a.yg)("li",{parentName:"ul"},"Query immediately after loading. When the load is just finished and the standard compaction has not finished, large number of segment files will affect the efficiency of subsequent queries. If the user needs to query immediately after loading, it is recommended to turn on this function."),(0,a.yg)("li",{parentName:"ul"},"The pressure of normal compaction is high after loading: segment compaction evenly puts part of the pressure of normal compaction on the loading process. At this time, it is recommended to enable this function.")),(0,a.yg)("p",null,"Situations where segment compaction is not recommended:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When the load operation itself has exhausted memory resources, it is not recommended to use the segment compaction to avoid further increasing memory pressure and causing the load job to fail.")),(0,a.yg)("p",null,"Refer to this ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12866"},"link")," for more information about implementation and test results."))}p.isMDXComponent=!0}}]);