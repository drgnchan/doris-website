"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70104],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(58168),a=(n(96540),n(15680));const i={title:"Compute Node",language:"en"},r=void 0,l={unversionedId:"advanced/compute-node",id:"advanced/compute-node",title:"Compute Node",description:"<! --",source:"@site/docs/advanced/compute-node.md",sourceDirName:"advanced",slug:"/advanced/compute-node",permalink:"/zh-CN/docs/dev/advanced/compute-node",draft:!1,tags:[],version:"current",frontMatter:{title:"Compute Node",language:"en"}},s={},d=[{value:"Scenarios",id:"scenarios",level:2},{value:"Solutions",id:"solutions",level:2},{value:"Usage of ComputeNode",id:"usage-of-computenode",level:2},{value:"Configure",id:"configure",level:3},{value:"Usage",id:"usage",level:3},{value:"Some Restrictions",id:"some-restrictions",level:3},{value:"TODO",id:"todo",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,'<! --\nLicensed to the Apache Software Foundation (ASF) under one\nOr more contributor license agreements. See the NOTICE file\nDistributed with this work for additional information\nRegarding copyright ownership. The ASF licenses this file\nTo you under the Apache License, Version 2.0 (the\n"License"); you may not use this file except in compliance\nWith the License. You may obtain a copy of the License at '),(0,a.yg)("p",null," ",(0,a.yg)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},"http://www.apache.org/licenses/LICENSE-2.0")," "),(0,a.yg)("p",null,' Unless required by applicable law or agreed to in writing,\nSoftware distributed under the License is distributed on an\n"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, either expressed or implied. See the License for the\nSpecific language governing permissions and limitations\nUnder the License.\n-- > '),(0,a.yg)("h1",{id:"compute-node"},"Compute Node"),(0,a.yg)("version",{since:"1.2.1"}),(0,a.yg)("h2",{id:"scenarios"},"Scenarios"),(0,a.yg)("p",null,"At present, Doris is a typical Share-Nothing architecture, which achieves very high performance by binding data and computing resources in the same node.\nWith the continuous improvement of the performance for the Doris computing engine, more and more users have begun to use Doris to directly query data on data lake.\nThis is a Share-Disk scenario that data is often stored on the remote HDFS/S3, and calculated in Doris.\nDoris will get the data through the network, and then completes the computation in memory.\nFor these two mixed loads in one cluster, current Doris architecture will appear some disadvantages:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Poor resource isolation, the response requirements of these two loads are different, and the hybrid deployment will have mutual effects."),(0,a.yg)("li",{parentName:"ol"},"Poor disk usage, the data lake query only needs the computing resources, while doris binding the storage and computing and we have to expand them together, and cause a low utilization rate for disk."),(0,a.yg)("li",{parentName:"ol"},"Poor expansion efficiency, when the cluster is expanded, Doris will start the migration of Tablet data, and this process will take a lot of time. And the data lake query load has obvious peaks and valleys, it need hourly flexibility.")),(0,a.yg)("h2",{id:"solutions"},"Solutions"),(0,a.yg)("p",null,"Implement a BE node role specially used for federated computing named ",(0,a.yg)("inlineCode",{parentName:"p"},"Compute node"),".\n",(0,a.yg)("inlineCode",{parentName:"p"},"Compute node")," is used to handle remote federated queries such as this query of data lake.\nThe original BE node type is called ",(0,a.yg)("inlineCode",{parentName:"p"},"hybrid node"),", and this type of node can not only execute SQL query, but also handle tablet data storage.\nAnd the ",(0,a.yg)("inlineCode",{parentName:"p"},"Compute node")," only can execute SQL query, it have no data on node."),(0,a.yg)("p",null,"With the computing node, the cluster deployment topology will also change:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the ",(0,a.yg)("inlineCode",{parentName:"p"},"hybrid node")," is used for the data calculation of the OLAP type table, the node is expanded according to the storage demand")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the ",(0,a.yg)("inlineCode",{parentName:"p"},"computing node")," is used for the external computing, and this node is expanded according to the query load."),(0,a.yg)("p",{parentName:"li"},"Since the compute node has no storage, the compute node can be deployed on an HDD disk machine with other workload or on a container."))),(0,a.yg)("h2",{id:"usage-of-computenode"},"Usage of ComputeNode"),(0,a.yg)("h3",{id:"configure"},"Configure"),(0,a.yg)("p",null,"Add configuration items to BE's configuration file ",(0,a.yg)("inlineCode",{parentName:"p"},"be.conf"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," be_node_role = computation \n")),(0,a.yg)("p",null,"This default value of this is ",(0,a.yg)("inlineCode",{parentName:"p"},"mix"),", and this is original BE node type. After setting to ",(0,a.yg)("inlineCode",{parentName:"p"},"computation"),", the node is a computing node."),(0,a.yg)("p",null,"You can see the value of the'NodeRole 'field through the ",(0,a.yg)("inlineCode",{parentName:"p"},"show backends\\G")," command. If it is'mix ', it is a mixed node, and if it is'computation', it is a computing node"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'*************************** 1. row ***************************\n              BackendId: 10010\n                Cluster: default_cluster\n                     IP: 10.248.181.219\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n          LastStartTime: 2022-11-30 23:01:40\n          LastHeartbeat: 2022-12-05 15:01:18\n                  Alive: true\n   SystemDecommissioned: false\n  ClusterDecommissioned: false\n              TabletNum: 753\n       DataUsedCapacity: 1.955 GB\n          AvailCapacity: 202.987 GB\n          TotalCapacity: 491.153 GB\n                UsedPct: 58.67 %\n         MaxDiskUsedPct: 58.67 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-0.0.0-trunk-80baca264\n                 Status: {"lastSuccessReportTabletsTime":"2022-12-05 15:00:38","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: computation\n')),(0,a.yg)("h3",{id:"usage"},"Usage"),(0,a.yg)("p",null,"Add configuration items in fe.conf"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"prefer_compute_node_for_external_table=true\nmin_backend_num_for_external_table=3\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For parameter description, please refer to: ",(0,a.yg)("a",{parentName:"p",href:"../admin-manual/config/fe-config.md"},"FE configuration item"))),(0,a.yg)("p",null,"When using the ",(0,a.yg)("a",{parentName:"p",href:"../lakehouse/multi-catalog/multi-catalog.md"},"MultiCatalog")," function when querying, the query will be dispatched to the computing node first."),(0,a.yg)("h3",{id:"some-restrictions"},"Some Restrictions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Compute nodes are controlled by configuration items, so do not configure mixed type nodes, modify the configuration to compute nodes.")),(0,a.yg)("h2",{id:"todo"},"TODO"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Computational spillover: Doris inner table query, when the cluster load is high, the upper layer (outside TableScan) operator can be scheduled to the compute node."),(0,a.yg)("li",{parentName:"ul"},"Graceful offline:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"When the compute node goes offline, the new task of the task is automatically scheduled to online nodes"),(0,a.yg)("li",{parentName:"ul"},"the node go offline after all the old tasks on the node are completed"),(0,a.yg)("li",{parentName:"ul"},"when the old task cannot be completed on time, the task can kill by itself")))))}p.isMDXComponent=!0}}]);