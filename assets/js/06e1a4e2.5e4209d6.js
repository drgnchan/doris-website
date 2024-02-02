"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45448],{95788:(e,a,n)=>{n.d(a,{Iu:()=>c,yg:()=>u});var t=n(11504);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),y=r,u=m["".concat(p,".").concat(y)]||m[y]||d[y]||l;return n?t.createElement(u,o(o({ref:a},c),{},{components:n})):t.createElement(u,o({ref:a},c))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},52084:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(45072),r=(n(11504),n(95788));const l={title:"CREATE-SYNC-JOB",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB",title:"CREATE-SYNC-JOB",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-SYNC-JOB",language:"en"},sidebar:"docs",previous:{title:"BROKER-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},next:{title:"STREAM-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"}},p={},s=[{value:"CREATE-SYNC-JOB",id:"create-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.c)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-sync-job"},"CREATE-SYNC-JOB"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE SYNC JOB"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"The data synchronization (Sync Job) function supports users to submit a resident data synchronization job, and incrementally synchronizes the CDC (Change Data Capture) of the user's data update operation in the Mysql database by reading the Binlog log from the specified remote address. Features."),(0,r.yg)("p",null,"Currently, the data synchronization job only supports connecting to Canal, obtaining the parsed Binlog data from the Canal Server and importing it into Doris."),(0,r.yg)("p",null,"Users can view the data synchronization job status through ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SYNC-JOB"},"SHOW SYNC JOB"),"."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE SYNC [db.]job_name\n (\n channel_desc,\n channel_desc\n ...\n )\nbinlog_desc\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"job_name")),(0,r.yg)("p",{parentName:"li"},"The synchronization job name is the unique identifier of the job in the current database. Only one job with the same ",(0,r.yg)("inlineCode",{parentName:"p"},"job_name")," can be running.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"channel_desc")),(0,r.yg)("p",{parentName:"li"},"The data channel under the job is used to describe the mapping relationship between the mysql source table and the doris target table."),(0,r.yg)("p",{parentName:"li"},"grammar:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"FROM mysql_db.src_tbl INTO des_tbl\n[columns_mapping]\n")),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"mysql_db.src_tbl")),(0,r.yg)("p",{parentName:"li"},"Specify the database and source table on the mysql side.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"des_tbl")),(0,r.yg)("p",{parentName:"li"},"Specify the target table on the doris side. Only unique tables are supported, and the batch delete function of the table needs to be enabled (see the 'batch delete function' of help alter table for how to enable it).")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"column_mapping")),(0,r.yg)("p",{parentName:"li"},"Specifies the mapping relationship between the columns of the mysql source table and the doris target table. If not specified, FE will default the columns of the source table and the target table to one-to-one correspondence in order."),(0,r.yg)("p",{parentName:"li"},"The form col_name = expr is not supported for columns."),(0,r.yg)("p",{parentName:"li"},"Example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"Suppose the target table column is (k1, k2, v1),\n\nChange the order of columns k1 and k2\n(k2, k1, v1)\n\nIgnore the fourth column of the source data\n(k2, k1, v1, dummy_column)\n"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"binlog_desc")),(0,r.yg)("p",{parentName:"li"},"Used to describe the remote data source, currently only one canal is supported."),(0,r.yg)("p",{parentName:"li"},"grammar:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'FROM BINLOG\n(\n    "key1" = "value1",\n    "key2" = "value2"\n)\n')),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The properties corresponding to the Canal data source, prefixed with ",(0,r.yg)("inlineCode",{parentName:"p"},"canal.")),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"canal.server.ip: address of canal server"),(0,r.yg)("li",{parentName:"ol"},"canal.server.port: the port of the canal server"),(0,r.yg)("li",{parentName:"ol"},"canal.destination: the identity of the instance"),(0,r.yg)("li",{parentName:"ol"},"canal.batchSize: The maximum batch size obtained, the default is 8192"),(0,r.yg)("li",{parentName:"ol"},"canal.username: username of instance"),(0,r.yg)("li",{parentName:"ol"},"canal.password: the password of the instance"),(0,r.yg)("li",{parentName:"ol"},"canal.debug: optional, when set to true, the batch and details of each row of data will be printed out")))))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Simply create a data synchronization job named ",(0,r.yg)("inlineCode",{parentName:"p"},"job1")," for ",(0,r.yg)("inlineCode",{parentName:"p"},"test_tbl")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"test_db"),", connect to the local Canal server, corresponding to the Mysql source table ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql_db1.tbl1"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'CREATE SYNC `test_db`.`job1`\n(\nFROM `mysql_db1`.`tbl1` INTO `test_tbl`\n)\nFROM BINLOG\n(\n"type" = "canal",\n"canal.server.ip" = "127.0.0.1",\n"canal.server.port" = "11111",\n"canal.destination" = "example",\n"canal.username" = "",\n"canal.password" = ""\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a data synchronization job named ",(0,r.yg)("inlineCode",{parentName:"p"},"job1")," for multiple tables of ",(0,r.yg)("inlineCode",{parentName:"p"},"test_db"),", corresponding to multiple Mysql source tables one-to-one, and explicitly specify the column mapping."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'CREATE SYNC `test_db`.`job1`\n(\nFROM `mysql_db`.`t1` INTO `test1` (k1, k2, v1) ,\nFROM `mysql_db`.`t2` INTO `test2` (k3, k4, v2) \n)\nFROM BINLOG\n(\n"type" = "canal",\n"canal.server.ip" = "xx.xxx.xxx.xx",\n"canal.server.port" = "12111",\n"canal.destination" = "example",\n"canal.username" = "username",\n"canal.password" = "password"\n);\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, SYNC, JOB\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);