"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65080],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=n,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?r.createElement(g,i(i({ref:a},c),{},{components:t})):r.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},572435:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(58168),n=(t(296540),t(15680));const o={title:"Breaking down data silos with a unified data warehouse: an Apache Doris-based CDP",summary:"The insurance company uses Apache Doris, a unified data warehouse, in replacement of Spark + Impala + HBase + NebulaGraph, in their Customer Data Platform for 4 times faster customer grouping.",date:"2024-03-05",author:"Apache Doris",tags:["Best Practice"],picked:"true",order:"1",image:"/images/breaking-down-data-silos-with-an-apache-doris-based-cdp.png"},i=void 0,s={permalink:"/zh-CN/blog/breaking-down-data-silos-with-an-apache-doris-based-cdp",source:"@site/blog/breaking-down-data-silos-with-an-apache-doris-based-cdp.md",title:"Breaking down data silos with a unified data warehouse: an Apache Doris-based CDP",description:"\x3c!--",date:"2024-03-05T00:00:00.000Z",formattedDate:"2024\u5e743\u67085\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Breaking down data silos with a unified data warehouse: an Apache Doris-based CDP",summary:"The insurance company uses Apache Doris, a unified data warehouse, in replacement of Spark + Impala + HBase + NebulaGraph, in their Customer Data Platform for 4 times faster customer grouping.",date:"2024-03-05",author:"Apache Doris",tags:["Best Practice"],picked:"true",order:"1",image:"/images/breaking-down-data-silos-with-an-apache-doris-based-cdp.png"},nextItem:{title:"Apache Doris 2.0.5 just released",permalink:"/zh-CN/blog/release-note-2.0.5"}},l={authorsImageUrls:[void 0]},p=[{value:"Data silos in CDP",id:"data-silos-in-cdp",level:2},{value:"Apache Doris-based CDP",id:"apache-doris-based-cdp",level:2},{value:"OneID",id:"oneid",level:2},{value:"Tagging services",id:"tagging-services",level:2},{value:"Customer Grouping",id:"customer-grouping",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},d="wrapper";function u(e){let{components:a,...o}=e;return(0,n.yg)(d,(0,r.A)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The data silos problem is like arthritis for online business, because almost everyone gets it as they grow old. Businesses interact with customers via websites, mobile apps, H5 pages, and end devices. For one reason or another, it is tricky to integrate the data from all these sources. Data stays where it is and cannot be interrelated for further analysis. That's how data silos come to form. The bigger your business grows, the more diversified customer data sources you will have, and the more likely you are trapped by data silos. "),(0,n.yg)("p",null,"This is exactly what happens to the insurance company I'm going to talk about in this post. By 2023, they have already served over 500 million customers and signed 57 billion insurance contracts. When they started to build a customer data platform (CDP) to accommodate such a data size, they used multiple components. "),(0,n.yg)("h2",{id:"data-silos-in-cdp"},"Data silos in CDP"),(0,n.yg)("p",null,"Like most data platforms, their CDP 1.0 had a batch processing pipeline and a real-time streaming pipeline. Offline data was loaded, via Spark jobs, to Impala, where it was tagged and divided into groups. Meanwhile, Spark also sent it to NebulaGraph for OneID computation (elaborated later in this post). On the other hand, real-time data was tagged by Flink and then stored in HBase, ready to be queried."),(0,n.yg)("p",null,"That led to a component-heavy computation layer in the CDP: Impala, Spark, NebulaGraph, and HBase."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"apache doris data silos in CDP",src:t(492298).A,width:"1280",height:"1060"})),(0,n.yg)("p",null,"As a result, offline tags, real-time tags, and graph data were scattered across multiple components. Integrating them for further data services was costly due to redundant storage and bulky data transfer. What's more, due to discrepancies in storage, they had to expand the size of the CDH cluster and NebulaGraph cluster, adding to the resource and maintenance costs."),(0,n.yg)("h2",{id:"apache-doris-based-cdp"},"Apache Doris-based CDP"),(0,n.yg)("p",null,"For CDP 2.0, they decide to introduce a unified solution to clean up the mess. At the computation layer of CDP 2.0, ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org"},"Apache Doris")," undertakes both real-time and offline data storage and computation. "),(0,n.yg)("p",null,"To ingest ",(0,n.yg)("strong",{parentName:"p"},"offline data"),", they utilize the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-operate/import/import-way/stream-load-manual"},"Stream Load")," method. Their 30-thread ingestion test shows that it can perform over 300,000 upserts per second. To load ",(0,n.yg)("strong",{parentName:"p"},"real-time data"),", they use a combination of ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/ecosystem/flink-doris-connector"},"Flink-Doris-Connector")," and Stream Load. In addition, in real-time reporting where they need to extract data from multiple external data sources, they leverage the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/lakehouse/multi-catalog/"},"Multi-Catalog")," feature for ",(0,n.yg)("strong",{parentName:"p"},"federated queries"),". "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"apache doris based-CDP",src:t(870884).A,width:"1280",height:"1068"})),(0,n.yg)("p",null,"The customer analytic workflows on this CDP go like this. First, they sort out customer information, then they attach tags to each customer. Based on the tags, they divide customers into groups for more targeted analysis and operation. "),(0,n.yg)("p",null,"Next, I'll delve into these workloads and show you how Apache Doris accelerates them. "),(0,n.yg)("h2",{id:"oneid"},"OneID"),(0,n.yg)("p",null,"Has this ever happened to you when you have different user registration systems for your products and services? You might collect the email of UserID A from one product webpage, and later the social security number of UserID B from another. Then you find out that UserID A and UserID B actually belong to the same person because they go by the same phone number."),(0,n.yg)("p",null,"That's why OneID arises as an idea. It is to pool the user registration information of all business lines into one large table in Apache Doris, sort it out, and make sure that one user has a unique OneID. "),(0,n.yg)("p",null,"This is how they figure out which registration information belongs to the same user leveraging the functions in Apache Doris."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"apache doris OneID",src:t(744858).A,width:"1280",height:"543"})),(0,n.yg)("h2",{id:"tagging-services"},"Tagging services"),(0,n.yg)("p",null,"This CDP accommodates information of ",(0,n.yg)("strong",{parentName:"p"},"500 million customers"),", which come from over ",(0,n.yg)("strong",{parentName:"p"},"500 source tables")," and are attached to over ",(0,n.yg)("strong",{parentName:"p"},"2000 tags")," in total."),(0,n.yg)("p",null,"By timeliness, the tags can be divided into real-time tags and offline tags. The real-time tags are computed by Apache Flink and written into the flat table in Apache Doris, while the offline tags are computed by Apache Doris as they are derived from the user attribute table, business table, and user behavior table in Doris. Here is the company's best practice in data tagging:  "),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1. Offline tags:")),(0,n.yg)("p",null,"During the peaks of data writing, a full update might easily cause an OOM error given their huge data scale. To avoid that, they utilize the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-operate/import/import-way/insert-into-manual"},"INSERT INTO SELECT")," function of Apache Doris and enable ",(0,n.yg)("strong",{parentName:"p"},"partial column update"),". This will cut down memory consumption by a lot and maintain system stability during data loading."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"set enable_unique_key_partial_update=true;\ninsert into tb_label_result(one_id, labelxx) \nselect one_id, label_value as labelxx\nfrom .....\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2. Real-time tags:")),(0,n.yg)("p",null,"Partial column update is also available for real-time tags, since even real-time tags are updated at different paces. All that is needed is to set ",(0,n.yg)("inlineCode",{parentName:"p"},"partial_columns")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},'curl --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:id,balance,last_access_time" -T /tmp/test.csv http://127.0.0.1:48037/api/db1/user_profile/_stream_load\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"3. High-concurrency point queries:")),(0,n.yg)("p",null,"With its current business size, the company is receiving query requests for tags at a concurrency level of over 5000 QPS. They use a combination of strategies to guarantee high performance. Firstly, they adopt ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/query-acceleration/hight-concurrent-point-query#using-preparedstatement"},"Prepared Statement")," for pre-compilation and pre-execution of SQL. Secondly, they fine-tune the parameters for Doris Backend and the tables to optimize storage and execution. Lastly, they enable ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/query-acceleration/hight-concurrent-point-query#enable-row-cache"},"row cache")," as a complement to the column-oriented Apache Doris."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fine-tune Doris Backend parameters in ",(0,n.yg)("inlineCode",{parentName:"li"},"be.conf"),":")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"disable_storage_row_cache = false                      \nstorage_page_cache_limit=40%\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fine-tune table parameters upon table creation:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"enable_unique_key_merge_on_write = true\nstore_row_column = true\nlight_schema_change = true\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"4. Tag computation (join):")),(0,n.yg)("p",null,"In practice, many tagging services are implemented by multi-table joins in the database. That often involves more than 10 tables. For optimal computation performance, they adopt the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/query-acceleration/join-optimization/colocation-join"},"colocation group")," strategy in Doris.  "),(0,n.yg)("h2",{id:"customer-grouping"},"Customer Grouping"),(0,n.yg)("p",null,"The customer grouping pipeline in CDP 2.0 goes like this: Apache Doris receives SQL from customer service, executes the computation, and sends the result set to S3 object storage via SELECT INTO OUTFILE. The company has divided their customers into 1 million groups. The customer grouping task that used to take ",(0,n.yg)("strong",{parentName:"p"},"50 seconds in Impala")," to finish now only needs ",(0,n.yg)("strong",{parentName:"p"},"10 seconds in Doris"),". "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"apache doris customer grouping",src:t(523635).A,width:"1280",height:"402"})),(0,n.yg)("p",null,"Apart from grouping the customers for more fine-grained analysis, sometimes they do analysis in a reverse direction. That is, to target a certain customer and find out to which groups he/she belongs. This helps analysts understand the characteristics of customers as well as how different customer groups overlap."),(0,n.yg)("p",null,"In Apache Doris, this is implemented by the BITMAP functions: ",(0,n.yg)("inlineCode",{parentName:"p"},"BITMAP_CONTAINS")," is a fast way to check if a customer is part of a certain group, and ",(0,n.yg)("inlineCode",{parentName:"p"},"BITMAP_OR"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"BITMAP_INTERSECT"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"BITMAP_XOR")," are the choices for cross analysis.  "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"apache doris bitmap",src:t(64132).A,width:"1280",height:"649"})),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"From CDP 1.0 to CDP 2.0, the insurance company adopts Apache Doris, a unified data warehouse, to replace Spark+Impala+HBase+NebulaGraph. That increases their data processing efficiency by breaking down the data silos and streamlining data processing pipelines. In CDP 3.0 to come, they want to group their customer by combining real-time tags and offline tags for more diversified and flexible analysis. The ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"Apache Doris community")," and the ",(0,n.yg)("a",{parentName:"p",href:"https://www.velodb.io"},"VeloDB")," team will continue to be a supporting partner during this upgrade."))}u.isMDXComponent=!0},744858:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/apache-doris-OneID-56d81b3a97eeeff7e9ce266e71263161.png"},870884:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/apache-doris-based-CDP-be99e2c46e0588eb6d6540e0f557ddbb.png"},64132:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/apache-doris-bitmap-da70b0e27411c1ef101d8f48731ba27e.png"},523635:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/apache-doris-customer-grouping-7c42996acf6d17eb8be01be7848e6ee6.png"},492298:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/apache-doris-data-silos-in-CDP-df4e64a7cadc2fa6fca8de1807571aa4.png"}}]);