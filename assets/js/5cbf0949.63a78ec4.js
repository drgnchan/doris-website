"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13136],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>m});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(45072),i=(n(11504),n(95788));const o={title:"AutoBucket",language:"en"},r=void 0,s={unversionedId:"advanced/autobucket",id:"advanced/autobucket",title:"AutoBucket",description:"\x3c!--",source:"@site/docs/advanced/autobucket.md",sourceDirName:"advanced",slug:"/advanced/autobucket",permalink:"/docs/dev/advanced/autobucket",draft:!1,tags:[],version:"current",frontMatter:{title:"AutoBucket",language:"en"},sidebar:"docs",previous:{title:"SQL Cache",permalink:"/docs/dev/advanced/cache/sql-cache-manual"},next:{title:"Broker",permalink:"/docs/dev/advanced/broker"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"background"},"Background"),(0,i.yg)("version",{since:"1.2.2"},(0,i.yg)("p",null,"DISTRIBUTED BY ... BUCKETS auto")),(0,i.yg)("p",null,"Users often set inappropriate buckets, leading to various problems. For now, it only works for OLAP tables  "),(0,i.yg)("p",null,"Node: This feature will be disabled when synchronized by CCR. If this table is copied by CCR, that is, PROPERTIES contains ",(0,i.yg)("inlineCode",{parentName:"p"},"is_being_synced = true"),", it will be displayed as enabled in show create table, but will not actually take effect. When ",(0,i.yg)("inlineCode",{parentName:"p"},"is_being_synced")," is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),", these features will resume working, but the ",(0,i.yg)("inlineCode",{parentName:"p"},"is_being_synced")," property is for CCR peripheral modules only and should not be manually set during CCR synchronization.  "),(0,i.yg)("h1",{id:"implementation"},"Implementation"),(0,i.yg)("p",null,'In the past, when creating buckets, you had to set the number of buckets manually, but the automatic bucket projection feature is a way for Apache Doris to dynamically project the number of buckets, so that the number of buckets always stays within a suitable range and users don\'t have to worry about the minutiae of the number of buckets.\nFirst, for the sake of clarity, this section splits the bucket into two periods, the initial bucket and the subsequent bucket; the initial and subsequent are just terms used in this article to describe the feature clearly, there is no initial or subsequent Apache Doris bucket.\nAs we know from the section above on creating buckets, BUCKET_DESC is very simple, but you need to specify the number of buckets; for the automatic bucket projection feature, the syntax of BUCKET_DESC directly changes the number of buckets to "Auto" and adds a new Properties configuration.'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'-- old version of the creation syntax for specifying the number of buckets\nDISTRIBUTED BY HASH(site) BUCKETS 20\n\n-- Newer versions use the creation syntax for automatic bucket imputation\nDISTRIBUTED BY HASH(site) BUCKETS AUTO\nproperties("estimate_partition_size" = "100G")\n')),(0,i.yg)("p",null,"The new configuration parameter estimate_partition_size indicates the amount of data for a single partition. This parameter is optional and if not given, Doris will take the default value of estimate_partition_size to 10GB.\nAs you know from the above, a partitioned bucket is a Tablet at the physical level, and for best performance, it is recommended that the Tablet size be in the range of 1GB - 10GB. So how does the automatic bucketing projection ensure that the Tablet size is within this range? To summarize, there are a few principles."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If the overall data volume is small, the number of buckets should not be set too high"),(0,i.yg)("li",{parentName:"ul"},"If the overall data volume is large, the number of buckets should be related to the total number of disk blocks, so as to fully utilize the capacity of each BE machine and each disk\nInitial bucketing projection\nStarting from the principle, it becomes easy to understand the detailed logic of the automatic bucket imputation function.\nFirst look at the initial bucketing")),(0,i.yg)("p",null,"First, use the value of estimate_partition_size divided by 5 (calculated as a 5-to-1 data compression ratio in text format into Doris) to obtain the following result."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"(, 100MB), then take N=1"),(0,i.yg)("li",{parentName:"ul"},"[100MB, 1GB), then take N=2"),(0,i.yg)("li",{parentName:"ul"},"(1GB, ), then one bucket per GB")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"calculate the number of buckets M based on the number of BE nodes and the disk capacity of each BE node, where each BE node counts as 1 and each 50G of disk capacity counts as 1. Then the rule for calculating M is\nM = number of BE nodes ",(0,i.yg)("em",{parentName:"li"},"( one disk block size / 50GB)")," number of disk blocks\nFor example, if there are 3 BEs, each with 4 500GB disks, then M = 3 ",(0,i.yg)("em",{parentName:"li"},"(500GB / 50GB)")," 4 = 120"),(0,i.yg)("li",{parentName:"ol"},"Calculation logic to get the final number of buckets.\nFirst calculate an intermediate value x = min(M, N, 128).\nIf x < N and x < the number of BE nodes, the final bucket is y, the number of BE nodes; otherwise, the final bucket is x."),(0,i.yg)("li",{parentName:"ol"},"x = max(x, autobucket_min_buckets), Here autobucket_min_buckets is configured in Config (where, default is 1)")),(0,i.yg)("p",null,"The pseudo-code representation of the above process is as follows"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"int N = Compute the N value;\nint M = compute M value;\n\nint y = number of BE nodes;\nint x = min(M, N, 128);\n\nif (x < N && x < y) {\n  return y;\n}\nreturn x;\n")),(0,i.yg)("p",null,"With the above algorithm in mind, let's introduce some examples to better understand this part of the logic."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"case1:\nAmount of data 100 MB, 10 BE machines, 2TB * 3 disks\nAmount of data N = 1\nBE disks M = 10* (2TB/50GB) * 3 = 1230\nx = min(M, N, 128) = 1\nFinal: 1\n\ncase2:\nData volume 1GB, 3 BE machines, 500GB * 2 disks\nAmount of data N = 2\nBE disks M = 3* (500GB/50GB) * 2 = 60\nx = min(M, N, 128) = 2\nFinal: 2\n\ncase3:\nData volume 100GB, 3 BE machines, 500GB * 2 disks\nAmount of data N = 20\nBE disks M = 3* (500GB/50GB) * 2 = 60\nx = min(M, N, 128) = 20\nFinal: 20\n\ncase4:\nData volume 500GB, 3 BE machines, 1TB * 1 disk\nData volume N = 100\nBE disks M = 3* (1TB /50GB) * 1 = 60\nx = min(M, N, 128) = 63\nFinal: 63\n\ncase5:\nData volume 500GB, 10 BE machines, 2TB * 3 disks\nAmount of data N = 100\nBE disks M = 10* (2TB / 50GB) * 3 = 1230\nx = min(M, N, 128) = 100\nFinal: 100\n\ncase 6:\nData volume 1TB, 10 BE machines, 2TB * 3 disks\nAmount of data N = 205\nBE disks M = 10* (2TB / 50GB) * 3 = 1230\nx = min(M, N, 128) = 128\nFinal: 128\n\ncase 7:\nData volume 500GB, 1 BE machine, 100TB * 1 disk\nAmount of data N = 100\nBE disk M = 1* (100TB / 50GB) * 1 = 2048\nx = min(M, N, 128) = 100\nFinal: 100\n\ncase 8:\nData volume 1TB, 200 BE machines, 4TB * 7 disks\nAmount of data N = 205\nBE disks M = 200* (4TB / 50GB) * 7 = 114800\nx = min(M, N, 128) = 128\nFinal: 200\n")),(0,i.yg)("p",null,"As you can see, the detailed logic matches the principle.\nSubsequent bucketing projection\nThe above is the calculation logic for the initial bucketing. The subsequent bucketing can be evaluated based on the amount of partition data available since there is already a certain amount of partition data. The subsequent bucket size is evaluated based on the EMA","[1]"," (short term exponential moving average) value of up to the first 7 partitions, which is used as the estimate_partition_size. At this point there are two ways to calculate the partition buckets, assuming partitioning by days, counting forward to the first day partition size of S7, counting forward to the second day partition size of S6, and so on to S1."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"if the partition data in 7 days is strictly increasing daily, then the trend value will be taken at this time")),(0,i.yg)("p",null,"There are 6 delta values, which are"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"S7 - S6 = delta1,\nS6 - S5 = delta2,\n...\nS2 - S1 = delta6\n")),(0,i.yg)("p",null,"This yields the ema(delta) value.\nThen, today's estimate_partition_size = S7 + ema(delta)"),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"not the first case, this time directly take the average of the previous days EMA")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"today's estimate_partition_size = EMA(S1, ... , S7) , S7)")),(0,i.yg)("p",null,"According to the above algorithm, the initial number of buckets and the number of subsequent buckets can be calculated. Unlike before when only a fixed number of buckets could be specified, due to changes in business data, it is possible that the number of buckets in the previous partition is different from the number of buckets in the next partition, which is transparent to the user, and the user does not need to care about the exact number of buckets in each partition, and this automatic extrapolation will make the number of buckets more reasonable."),(0,i.yg)("h1",{id:"description"},"Description"),(0,i.yg)("p",null,"When autobucket is enabled, the schema you see in ",(0,i.yg)("inlineCode",{parentName:"p"},"show create table")," is also ",(0,i.yg)("inlineCode",{parentName:"p"},"BUCKETS AUTO"),". If you want to see the exact number of buckets, you can do so by ",(0,i.yg)("inlineCode",{parentName:"p"},"show partitions from ${table};"),"."))}p.isMDXComponent=!0}}]);