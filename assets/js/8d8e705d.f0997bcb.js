"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16092],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>m});var r=a(11504);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||n;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(45072),o=(a(11504),a(95788));const n={title:"Data Operation Error",language:"en"},i=void 0,s={unversionedId:"faq/data-faq",id:"version-2.0/faq/data-faq",title:"Data Operation Error",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/faq/data-faq.md",sourceDirName:"faq",slug:"/faq/data-faq",permalink:"/docs/faq/data-faq",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Data Operation Error",language:"en"},sidebar:"docs",previous:{title:"Install Error",permalink:"/docs/faq/install-faq"},next:{title:"SQL Error",permalink:"/docs/faq/sql-faq"}},l={},c=[{value:"Q1. Use Stream Load to access FE&#39;s public network address to import data, but is redirected to the intranet IP?",id:"q1-use-stream-load-to-access-fes-public-network-address-to-import-data-but-is-redirected-to-the-intranet-ip",level:3},{value:"Q2. Does Doris support changing column names?",id:"q2-does-doris-support-changing-column-names",level:3},{value:"Q3. Does the table of the Unique Key model support creating a materialized view?",id:"q3-does-the-table-of-the-unique-key-model-support-creating-a-materialized-view",level:3},{value:"Q4. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -238",id:"q4-tablet-writer-write-failed-tablet_id27306172-txn_id28573520-err-235-or--238",level:3},{value:"Q5. tablet 110309738 has few replicas: 1, alive backends: 10003",id:"q5-tablet-110309738-has-few-replicas-1-alive-backends-10003",level:3},{value:"Q6. disk xxxxx on backend xxx exceed limit usage",id:"q6-disk-xxxxx-on-backend-xxx-exceed-limit-usage",level:3},{value:"Q7. Calling stream load to import data through a Java program may result in a Broken Pipe error when a batch of data is large.",id:"q7-calling-stream-load-to-import-data-through-a-java-program-may-result-in-a-broken-pipe-error-when-a-batch-of-data-is-large",level:3},{value:"Q8. Error -214 is reported when importing and querying",id:"q8-error--214-is-reported-when-importing-and-querying",level:3},{value:"Q9. Not connected to 192.168.100.1:8060 yet, server_id=384",id:"q9-not-connected-to-19216810018060-yet-server_id384",level:3},{value:"Q10.  Broker load  org.apache.thrift.transport.TTransportException: java.net.SocketException: Broken pipe",id:"q10--broker-load--orgapachethrifttransportttransportexception-javanetsocketexception-broken-pipe",level:3},{value:"Q11.  Routine load  ReasonOfStateChanged: ErrorReason{code=errCode = 104, msg=&#39;be 10004 abort task with reason: fetch failed due to requested offset not available on the broker: Broker: Offset out of range&#39;}",id:"q11--routine-load--reasonofstatechanged-errorreasoncodeerrcode--104-msgbe-10004-abort-task-with-reason-fetch-failed-due-to-requested-offset-not-available-on-the-broker-broker-offset-out-of-range",level:3},{value:"Q12. ERROR 1105 (HY000): errCode = 2, detailMessage = (192.168.90.91)CANCELLEDerror setting certificate verify locations:  CAfile: /etc/ssl/certs/ca-certificates.crt CApath: none",id:"q12-error-1105-hy000-errcode--2-detailmessage--1921689091cancellederror-setting-certificate-verify-locations--cafile-etcsslcertsca-certificatescrt-capath-none",level:3}],d={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,r.c)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"data-operation-error"},"Data Operation Error"),(0,o.yg)("p",null,"This document is mainly used to record common problems of data operation during the use of Doris. It will be updated from time to time."),(0,o.yg)("h3",{id:"q1-use-stream-load-to-access-fes-public-network-address-to-import-data-but-is-redirected-to-the-intranet-ip"},"Q1. Use Stream Load to access FE's public network address to import data, but is redirected to the intranet IP?"),(0,o.yg)("p",null,"When the connection target of stream load is the http port of FE, FE will only randomly select a BE node to perform the http 307 redirect operation, so the user's request is actually sent to a BE assigned by FE. The redirect returns the IP of the BE, that is, the intranet IP. So if you send the request through the public IP of FE, it is very likely that you cannot connect because it is redirected to the internal network address."),(0,o.yg)("p",null,"The usual way is to ensure that you can access the intranet IP address, or to assume a load balancer for all BE upper layers, and then directly send the stream load request to the load balancer, and the load balancer will transparently transmit the request to the BE node ."),(0,o.yg)("h3",{id:"q2-does-doris-support-changing-column-names"},"Q2. Does Doris support changing column names?"),(0,o.yg)("p",null,"After version 1.2.0, when the ",(0,o.yg)("inlineCode",{parentName:"p"},'"light_schema_change"="true"')," option is enabled, column names can be modified."),(0,o.yg)("p",null,"Before version 1.2.0 or when the ",(0,o.yg)("inlineCode",{parentName:"p"},'"light_schema_change"="true"')," option is not enabled, modifying column names is not supported. The reasons are as follows:"),(0,o.yg)("p",null,"Doris supports modifying database name, table name, partition name, materialized view (Rollup) name, as well as column type, comment, default value, etc. But unfortunately, modifying column names is currently not supported."),(0,o.yg)("p",null,"For some historical reasons, the column names are currently written directly to the data file. When Doris queries, it also finds the corresponding column through the class name. Therefore, modifying the column name is not only a simple metadata modification, but also involves data rewriting, which is a very heavy operation."),(0,o.yg)("p",null,"We do not rule out some compatible means to support lightweight column name modification operations in the future."),(0,o.yg)("h3",{id:"q3-does-the-table-of-the-unique-key-model-support-creating-a-materialized-view"},"Q3. Does the table of the Unique Key model support creating a materialized view?"),(0,o.yg)("p",null,"not support."),(0,o.yg)("p",null,"The table of the Unique Key model is a business-friendly table. Because of its unique function of deduplication according to the primary key, it can easily synchronize business databases with frequently changed data. Therefore, many users will first consider using the Unique Key model when accessing data into Doris."),(0,o.yg)("p",null,'But unfortunately, the table of the Unique Key model cannot establish a materialized view. The reason is that the essence of the materialized view is to "pre-compute" the data through pre-computation, so that the calculated data is directly returned during the query to speed up the query. In the materialized view, the "pre-computed" data is usually some aggregated indicators, such as sum and count. At this time, if the data changes, such as update or delete, because the pre-computed data has lost detailed information, it cannot be updated synchronously. For example, a sum value of 5 may be 1+4 or 2+3. Because of the loss of detailed information, we cannot distinguish how this summation value is calculated, so we cannot meet the needs of updating.'),(0,o.yg)("h3",{id:"q4-tablet-writer-write-failed-tablet_id27306172-txn_id28573520-err-235-or--238"},"Q4. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -238"),(0,o.yg)("p",null,"This error usually occurs during data import operations. The error code is -235. The meaning of this error is that the data version of the corresponding tablet exceeds the maximum limit (default 500, controlled by the BE parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"max_tablet_version_num"),"), and subsequent writes will be rejected. For example, the error in the question means that the data version of the tablet 27306172 exceeds the limit."),(0,o.yg)("p",null,"This error is usually caused by the import frequency being too high, which is greater than the compaction speed of the backend data, causing versions to pile up and eventually exceed the limit. At this point, we can first pass the show tablet 27306172 statement, and then execute the show proc statement in the result to check the status of each copy of the tablet. The versionCount in the result represents the number of versions. If you find that a copy has too many versions, you need to reduce the import frequency or stop importing and observe whether the number of versions drops. If the number of versions does not decrease after the import is stopped, you need to go to the corresponding BE node to view the be.INFO log, search for the tablet id and compaction keyword, and check whether the compaction is running normally. For compaction tuning, you can refer to the ApacheDoris official account article: ",(0,o.yg)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/cZmXEsNPeRMLHp379kc2aA"},"Doris Best Practices - Compaction Tuning (3)")),(0,o.yg)("p",null,"The -238 error usually occurs when the same batch of imported data is too large, resulting in too many Segment files for a tablet (default is 200, controlled by the BE parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"max_segment_num_per_rowset"),"). At this time, it is recommended to reduce the amount of data imported in one batch, or appropriately increase the BE configuration parameter value to solve the problem. Since version 2.0, users can enable segment compaction feature to reduce segment file number by setting ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_segcompaction=true")," in BE config."),(0,o.yg)("h3",{id:"q5-tablet-110309738-has-few-replicas-1-alive-backends-10003"},"Q5. tablet 110309738 has few replicas: 1, alive backends: ","[10003]"),(0,o.yg)("p",null,"This error can occur during a query or import operation. Usually means that the copy of the corresponding tablet has an exception."),(0,o.yg)("p",null,"At this point, you can first check whether the BE node is down by using the show backends command. For example, the isAlive field is false, or the LastStartTime is a recent time (indicating that it has been restarted recently). If the BE is down, you need to go to the node corresponding to the BE and check the be.out log. If BE is down for abnormal reasons, the exception stack is usually printed in be.out to help troubleshoot the problem. If there is no error stack in be.out. Then you can use the linux command dmesg -T to check whether the process is killed by the system because of OOM."),(0,o.yg)("p",null,"If no BE node is down, you need to pass the show tablet 110309738 statement, and then execute the show proc statement in the result to check the status of each tablet copy for further investigation."),(0,o.yg)("h3",{id:"q6-disk-xxxxx-on-backend-xxx-exceed-limit-usage"},"Q6. disk xxxxx on backend xxx exceed limit usage"),(0,o.yg)("p",null,"Usually occurs in operations such as Import, Alter, etc. This error means that the usage of the corresponding disk corresponding to the BE exceeds the threshold (default 95%). In this case, you can first use the show backends command, where MaxDiskUsedPct shows the usage of the disk with the highest usage on the corresponding BE. If If it exceeds 95%, this error will be reported."),(0,o.yg)("p",null,"At this point, you need to go to the corresponding BE node to check the usage in the data directory. The trash directory and snapshot directory can be manually cleaned to free up space. If the data directory occupies a large space, you need to consider deleting some data to free up space. For details, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/admin-manual/maint-monitor/disk-capacity"},"Disk Space Management"),"."),(0,o.yg)("h3",{id:"q7-calling-stream-load-to-import-data-through-a-java-program-may-result-in-a-broken-pipe-error-when-a-batch-of-data-is-large"},"Q7. Calling stream load to import data through a Java program may result in a Broken Pipe error when a batch of data is large."),(0,o.yg)("p",null,"Apart from Broken Pipe, some other weird errors may occur."),(0,o.yg)("p",null,"This situation usually occurs after enabling httpv2. Because httpv2 is an http service implemented using spring boot, and uses tomcat as the default built-in container. However, there seems to be some problems with tomcat's handling of 307 forwarding, so the built-in container was modified to jetty later. In addition, the version of apache http client in the java program needs to use the version after 4.5.13. In the previous version, there were also some problems with the processing of forwarding."),(0,o.yg)("p",null,"So this problem can be solved in two ways:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Disable httpv2"),(0,o.yg)("p",{parentName:"li"},"Restart FE after adding enable_http_server_v2=false in fe.conf. However, the new version of the UI interface can no longer be used, and some new interfaces based on httpv2 can not be used. (Normal import queries are not affected).")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Upgrade"),(0,o.yg)("p",{parentName:"li"},"Upgrading to Doris 0.15 and later has fixed this issue."))),(0,o.yg)("h3",{id:"q8-error--214-is-reported-when-importing-and-querying"},"Q8. Error -214 is reported when importing and querying"),(0,o.yg)("p",null,"When performing operations such as import, query, etc., you may encounter the following errors:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"failed to initialize storage reader. tablet=63416.1050661139.aa4d304e7a7aff9c-f0fa7579928c85a0, res=-214, backend=192.168.100.10\n")),(0,o.yg)("p",null,"A -214 error means that the data version for the corresponding tablet is missing. For example, the above error indicates that the data version of the copy of tablet 63416 on the BE of 192.168.100.10 is missing. (There may be other similar error codes, which can be checked and repaired in the following ways)."),(0,o.yg)("p",null,"Typically, if your data has multiple copies, the system will automatically repair these problematic copies. You can troubleshoot with the following steps:"),(0,o.yg)("p",null,"First, check the status of each copy of the corresponding tablet by executing the ",(0,o.yg)("inlineCode",{parentName:"p"},"show tablet 63416")," statement and executing the ",(0,o.yg)("inlineCode",{parentName:"p"},"show proc xxx")," statement in the result. Usually we need to care about the data in the ",(0,o.yg)("inlineCode",{parentName:"p"},"Version")," column."),(0,o.yg)("p",null,"Normally, the Version of multiple copies of a tablet should be the same. And it is the same as the VisibleVersion version of the corresponding partition."),(0,o.yg)("p",null,"You can view the corresponding partition version with ",(0,o.yg)("inlineCode",{parentName:"p"},"show partitions from tblx")," (the partition corresponding to the tablet can be obtained in the ",(0,o.yg)("inlineCode",{parentName:"p"},"show tablet")," statement.)"),(0,o.yg)("p",null,"At the same time, you can also visit the URL in the CompactionStatus column in the ",(0,o.yg)("inlineCode",{parentName:"p"},"show proc")," statement (just open it in a browser) to view more specific version information to check which versions are missing."),(0,o.yg)("p",null,"If there is no automatic repair for a long time, you need to use the ",(0,o.yg)("inlineCode",{parentName:"p"},'show proc "/cluster_balance"')," statement to view the tablet repair and scheduling tasks currently being executed by the system. It may be because there are a large number of tablets waiting to be scheduled, resulting in a longer repair time. You can follow records in ",(0,o.yg)("inlineCode",{parentName:"p"},"pending_tablets")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"running_tablets"),"."),(0,o.yg)("p",null,"Further, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"admin repair")," statement to specify a table or partition to be repaired first. For details, please refer to ",(0,o.yg)("inlineCode",{parentName:"p"},"help admin repair"),";"),(0,o.yg)("p",null,"If it still can't be repaired, then in the case of multiple replicas, we use the ",(0,o.yg)("inlineCode",{parentName:"p"},"admin set replica status")," command to force the replica in question to go offline. For details, see the example of setting the replica status to bad in ",(0,o.yg)("inlineCode",{parentName:"p"},"help admin set replica status"),". (After set to bad, the copy will no longer be accessed. And it will be automatically repaired later. But before operation, you should make sure that other copies are normal)"),(0,o.yg)("h3",{id:"q9-not-connected-to-19216810018060-yet-server_id384"},"Q9. Not connected to 192.168.100.1:8060 yet, server_id=384"),(0,o.yg)("p",null,"We may encounter this error when importing or querying. If you go to the corresponding BE log, you may also find similar errors."),(0,o.yg)("p",null,"This is an RPC error, and there are usually two possibilities: 1. The corresponding BE node is down. 2. rpc congestion or other errors."),(0,o.yg)("p",null,"If the BE node is down, you need to check the specific downtime reason. Only the problem of rpc congestion is discussed here."),(0,o.yg)("p",null,"One case is OVERCROWDED, which means that the rpc source has a large amount of unsent data that exceeds the threshold. BE has two parameters associated with it:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"brpc_socket_max_unwritten_bytes"),": The default value is 1GB. If the unsent data exceeds this value, an error will be reported. This value can be modified appropriately to avoid OVERCROWDED errors. (But this cures the symptoms but not the root cause, and there is still congestion in essence)."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"tablet_writer_ignore_eovercrowded"),": Default is false. If set to true, Doris will ignore OVERCROWDED errors during import. This parameter is mainly to avoid import failure and improve the stability of import.")),(0,o.yg)("p",null,"The second is that the packet size of rpc exceeds max_body_size. This problem may occur if the query has a very large String type, or a bitmap type. It can be circumvented by modifying the following BE parameters:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"brpc_max_body_size\uff1adefault 3GB.\n")),(0,o.yg)("h3",{id:"q10--broker-load--orgapachethrifttransportttransportexception-javanetsocketexception-broken-pipe"},"Q10. ","[ Broker load ]"," org.apache.thrift.transport.TTransportException: java.net.SocketException: Broken pipe"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.thrift.transport.TTransportException: java.net.SocketException: Broken pipe")," during import."),(0,o.yg)("p",null,"The reason for this problem may be that when importing data from external storage (such as HDFS), because there are too many files in the directory, it takes too long to list the file directory. Here, the Broker RPC Timeout defaults to 10 seconds, and the timeout needs to be adjusted appropriately here. time."),(0,o.yg)("p",null,"Modify the ",(0,o.yg)("inlineCode",{parentName:"p"},"fe.conf")," configuration file to add the following parameters:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"broker_timeout_ms = 10000\n##The default here is 10 seconds, you need to increase this parameter appropriately\n")),(0,o.yg)("p",null,"Adding parameters here requires restarting the FE service."),(0,o.yg)("h3",{id:"q11--routine-load--reasonofstatechanged-errorreasoncodeerrcode--104-msgbe-10004-abort-task-with-reason-fetch-failed-due-to-requested-offset-not-available-on-the-broker-broker-offset-out-of-range"},"Q11. ","[ Routine load ]"," ReasonOfStateChanged: ErrorReason{code=errCode = 104, msg='be 10004 abort task with reason: fetch failed due to requested offset not available on the broker: Broker: Offset out of range'}"),(0,o.yg)("p",null,"The reason for this problem is that Kafka's cleanup policy defaults to 7 days. When a routine load task is suspended for some reason and the task is not restored for a long time, when the task is resumed, the routine load records the consumption offset, and This problem occurs when kafka has cleaned up the corresponding offset"),(0,o.yg)("p",null,"So this problem can be solved with alter routine load:"),(0,o.yg)("p",null,"View the smallest offset of kafka, use the ALTER ROUTINE LOAD command to modify the offset, and resume the task"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER ROUTINE LOAD FOR db.tb\nFROM kafka\n(\n "kafka_partitions" = "0",\n "kafka_offsets" = "xxx",\n "property.group.id" = "xxx"\n);\n')),(0,o.yg)("h3",{id:"q12-error-1105-hy000-errcode--2-detailmessage--1921689091cancellederror-setting-certificate-verify-locations--cafile-etcsslcertsca-certificatescrt-capath-none"},"Q12. ERROR 1105 (HY000): errCode = 2, detailMessage = (192.168.90.91)","[CANCELLED][INTERNAL_ERROR]","error setting certificate verify locations:  CAfile: /etc/ssl/certs/ca-certificates.crt CApath: none"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"yum install -y ca-certificates\nln -s /etc/pki/ca-trust/extracted/openssl/ca-bundle.trust.crt /etc/ssl/certs/ca-certificates.crt\n")))}h.isMDXComponent=!0}}]);