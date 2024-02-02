"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90358],{95788:(e,t,a)=>{a.d(t,{Iu:()=>m,yg:()=>h});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(45072),n=(a(11504),a(95788));const o={title:"Data Restore",language:"en"},i=void 0,s={unversionedId:"admin-manual/data-admin/restore",id:"version-1.2/admin-manual/data-admin/restore",title:"Data Restore",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/data-admin/restore.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/restore",permalink:"/docs/1.2/admin-manual/data-admin/restore",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Data Restore",language:"en"},sidebar:"docs",previous:{title:"Data Backup",permalink:"/docs/1.2/admin-manual/data-admin/backup"},next:{title:"Data Recover",permalink:"/docs/1.2/admin-manual/data-admin/delete-recover"}},l={},p=[{value:"Brief principle description",id:"brief-principle-description",level:2},{value:"Start Restore",id:"start-restore",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"Common mistakes",id:"common-mistakes",level:2},{value:"More Help",id:"more-help",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"data-recovery"},"Data Recovery"),(0,n.yg)("p",null,"Doris supports backing up the current data in the form of files to the remote storage system through the broker. Afterwards, you can restore data from the remote storage system to any Doris cluster through the restore command. Through this function, Doris can support periodic snapshot backup of data. You can also use this function to migrate data between different clusters."),(0,n.yg)("p",null,"This feature requires Doris version 0.8.2+"),(0,n.yg)("p",null,"To use this function, you need to deploy the broker corresponding to the remote storage. Such as BOS, HDFS, etc. You can view the currently deployed broker through ",(0,n.yg)("inlineCode",{parentName:"p"},"SHOW BROKER;"),"."),(0,n.yg)("h2",{id:"brief-principle-description"},"Brief principle description"),(0,n.yg)("p",null,"The restore operation needs to specify an existing backup in the remote warehouse, and then restore the content of the backup to the local cluster. When the user submits the Restore request, the system will perform the following operations:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create the corresponding metadata locally"),(0,n.yg)("p",{parentName:"li"},"This step will first create and restore the corresponding table partition and other structures in the local cluster. After creation, the table is visible, but not accessible.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Local snapshot"),(0,n.yg)("p",{parentName:"li"},"This step is to take a snapshot of the table created in the previous step. This is actually an empty snapshot (because the table just created has no data), and its purpose is to generate the corresponding snapshot directory on the Backend for later receiving the snapshot file downloaded from the remote warehouse.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download snapshot"),(0,n.yg)("p",{parentName:"li"},"The snapshot files in the remote warehouse will be downloaded to the corresponding snapshot directory generated in the previous step. This step is done concurrently by each Backend.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Effective snapshot"),(0,n.yg)("p",{parentName:"li"},"After the snapshot download is complete, we need to map each snapshot to the metadata of the current local table. These snapshots are then reloaded to take effect, completing the final recovery job."))),(0,n.yg)("h2",{id:"start-restore"},"Start Restore"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'Restore the table backup_tbl in backup snapshot_1 from example_repo to database example_db1, the time version is "2018-05-04-16-45-08". Revert to 1 copy:'),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_1`\nFROM `example_repo`\nON ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-52-29",\n    "replication_num" = "1"\n);\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'Restore partitions p1 and p2 of table backup_tbl in backup snapshot_2 from example_repo, and table backup_tbl2 to database example_db1, and rename it to new_tbl with time version "2018-05-04-17-11-01". The default reverts to 3 replicas:'),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_2`\nFROM `example_repo`\nON\n(\n    `backup_tbl` PARTITION (`p1`, `p2`),\n    `backup_tbl2` AS `new_tbl`\n)\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-55-43"\n);\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"View the execution of the restore job:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW RESTORE\\G;\n*************************** 1. row ***************************\n               JobId: 17891851\n               Label: snapshot_label1\n           Timestamp: 2022-04-08-15-52-29\n              DbName: default_cluster:example_db1\n               State: FINISHED\n           AllowLoad: false\n      ReplicationNum: 3\n         RestoreObjs: {\n  "name": "snapshot_label1",\n  "database": "example_db",\n  "backup_time": 1649404349050,\n  "content": "ALL",\n  "olap_table_list": [\n    {\n      "name": "backup_tbl",\n      "partition_names": [\n        "p1",\n        "p2"\n      ]\n    }\n  ],\n  "view_list": [],\n  "odbc_table_list": [],\n  "odbc_resource_list": []\n}\n          CreateTime: 2022-04-08 15:59:01\n    MetaPreparedTime: 2022-04-08 15:59:02\nSnapshotFinishedTime: 2022-04-08 15:59:05\nDownloadFinishedTime: 2022-04-08 15:59:12\n        FinishedTime: 2022-04-08 15:59:18\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              Status: [OK]\n             Timeout: 86400\n1 row in set (0.01 sec)\n')))),(0,n.yg)("p",null,"For detailed usage of RESTORE, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE"},"here"),"."),(0,n.yg)("h2",{id:"related-commands"},"Related Commands"),(0,n.yg)("p",null,"The commands related to the backup and restore function are as follows. For the following commands, you can use ",(0,n.yg)("inlineCode",{parentName:"p"},"help cmd;")," to view detailed help after connecting to Doris through mysql-client."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"CREATE REPOSITORY"),(0,n.yg)("p",{parentName:"li"},"Create a remote repository path for backup or restore. This command needs to use the Broker process to access the remote storage. Different brokers need to provide different parameters. For details, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/advanced/broker"},"Broker documentation"),", or you can directly back up to support through the S3 protocol For the remote storage of AWS S3 protocol, directly back up to HDFS, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY"},"Create Remote Warehouse Documentation"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"RESTORE"),(0,n.yg)("p",{parentName:"li"},"Perform a restore operation.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"SHOW RESTORE"),(0,n.yg)("p",{parentName:"li"},"View the execution of the most recent restore job, including:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"JobId: The id of the current recovery job."),(0,n.yg)("li",{parentName:"ul"},"Label: The name (Label) of the backup in the warehouse specified by the user."),(0,n.yg)("li",{parentName:"ul"},"Timestamp: The timestamp of the backup in the user-specified repository."),(0,n.yg)("li",{parentName:"ul"},"DbName: Database corresponding to the restore job."),(0,n.yg)("li",{parentName:"ul"},"State: The current stage of the recovery job:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"PENDING: The initial status of the job."),(0,n.yg)("li",{parentName:"ul"},"SNAPSHOTING: The snapshot operation of the newly created table is in progress."),(0,n.yg)("li",{parentName:"ul"},"DOWNLOAD: Sending download snapshot task."),(0,n.yg)("li",{parentName:"ul"},"DOWNLOADING: Snapshot is downloading."),(0,n.yg)("li",{parentName:"ul"},"COMMIT: Prepare the downloaded snapshot to take effect."),(0,n.yg)("li",{parentName:"ul"},"COMMITTING: Validating downloaded snapshots."),(0,n.yg)("li",{parentName:"ul"},"FINISHED: Recovery is complete."),(0,n.yg)("li",{parentName:"ul"},"CANCELLED: Recovery failed or was canceled."))),(0,n.yg)("li",{parentName:"ul"},"AllowLoad: Whether to allow import during restore."),(0,n.yg)("li",{parentName:"ul"},"ReplicationNum: Restores the specified number of replicas."),(0,n.yg)("li",{parentName:"ul"},"RestoreObjs: List of tables and partitions involved in this restore."),(0,n.yg)("li",{parentName:"ul"},"CreateTime: Job creation time."),(0,n.yg)("li",{parentName:"ul"},"MetaPreparedTime: Local metadata generation completion time."),(0,n.yg)("li",{parentName:"ul"},"SnapshotFinishedTime: The local snapshot completion time."),(0,n.yg)("li",{parentName:"ul"},"DownloadFinishedTime: The time when the remote snapshot download is completed."),(0,n.yg)("li",{parentName:"ul"},"FinishedTime: The completion time of this job."),(0,n.yg)("li",{parentName:"ul"},"UnfinishedTasks: During ",(0,n.yg)("inlineCode",{parentName:"li"},"SNAPSHOTTING"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"DOWNLOADING"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"COMMITTING")," and other stages, there will be multiple subtasks going on at the same time. The current stage shown here is the task id of the unfinished subtasks."),(0,n.yg)("li",{parentName:"ul"},"TaskErrMsg: If there is an error in the execution of a subtask, the error message of the corresponding subtask will be displayed here."),(0,n.yg)("li",{parentName:"ul"},"Status: Used to record some status information that may appear during the entire job process."),(0,n.yg)("li",{parentName:"ul"},"Timeout: The timeout period of the job, in seconds."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"CANCEL RESTORE"),(0,n.yg)("p",{parentName:"li"},"Cancel the currently executing restore job.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"DROP REPOSITORY"),(0,n.yg)("p",{parentName:"li"},"Delete the created remote repository. Deleting a warehouse only deletes the mapping of the warehouse in Doris, and does not delete the actual warehouse data."))),(0,n.yg)("h2",{id:"common-mistakes"},"Common mistakes"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Restore Report An Error\uff1a","[20181: invalid md5 of downloaded file: /data/doris.HDD/snapshot/20220607095111.862.86400/19962/668322732/19962.hdr, expected: f05b63cca5533ea0466f62a9897289b5, get: d41d8cd98f00b204e9800998ecf8427e]"),(0,n.yg)("p",{parentName:"li"},"If the number of copies of the table backed up and restored is inconsistent, you need to specify the number of copies when executing the restore command. For specific commands, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE"},"RESTORE")," command manual")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Restore Report An Error\uff1a","[COMMON_ERROR, msg: Could not set meta version to 97 since it is lower than minimum required version 100]"),(0,n.yg)("p",{parentName:"li"},"Backup and restore are not caused by the same version, use the specified meta_version to read the metadata of the previous backup. Note that this parameter is used as a temporary solution and is only used to restore the data backed up by the old version of Doris. The latest version of the backup data already contains the meta version, so there is no need to specify it. For the specific solution to the above error, specify meta_version = 100. For specific commands, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE"},"RESTORE")," command manual"))),(0,n.yg)("h2",{id:"more-help"},"More Help"),(0,n.yg)("p",null,"For more detailed syntax and best practices used by RESTORE, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE"},"RESTORE")," command manual, You can also type ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP RESTORE")," on the MySql client command line for more help."))}d.isMDXComponent=!0}}]);