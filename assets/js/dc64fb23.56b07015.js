"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=i,g=p["".concat(u,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const l={title:"Audit Log Plugin",language:"en"},r=void 0,o={unversionedId:"ecosystem/audit-plugin",id:"ecosystem/audit-plugin",title:"Audit Log Plugin",description:"\x3c!--",source:"@site/docs/ecosystem/audit-plugin.md",sourceDirName:"ecosystem",slug:"/ecosystem/audit-plugin",permalink:"/docs/dev/ecosystem/audit-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"Audit Log Plugin",language:"en"},sidebar:"docs",previous:{title:"Plugin Development Manual",permalink:"/docs/dev/ecosystem/plugin-development-manual"},next:{title:"CloudCanal Data Import",permalink:"/docs/dev/ecosystem/cloudcanal"}},u={},s=[{value:"Use the audit log plug-in",id:"use-the-audit-log-plug-in",level:2},{value:"Enable plug-in",id:"enable-plug-in",level:3},{value:"Related configuration",id:"related-configuration",level:3},{value:"Compilation, Configuration and Deployment",id:"compilation-configuration-and-deployment",level:2},{value:"FE Configuration",id:"fe-configuration",level:3},{value:"AuditLoader Configuration",id:"auditloader-configuration",level:3},{value:"Create Audit Table",id:"create-audit-table",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Installation",id:"installation",level:3}],d={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"audit-log-plugin"},"Audit Log Plugin"),(0,i.kt)("p",null,"Doris's audit log plugin was developed based on FE's plugin framework. Is an optional plugin. Users can install or uninstall this plugin at runtime."),(0,i.kt)("p",null,"This plugin can periodically import the FE audit log into the specified system table, so that users can easily view and analyze the audit log through SQL."),(0,i.kt)("h2",{id:"use-the-audit-log-plug-in"},"Use the audit log plug-in"),(0,i.kt)("p",null,"Starting from Doris version 2.1, the audit log plug-in is directly integrated into the Doris as a built-in plug-in. Users do not need to install additional plug-ins."),(0,i.kt)("p",null,"After the cluster is started, a system table named ",(0,i.kt)("inlineCode",{parentName:"p"},"audit_log")," will be created under the ",(0,i.kt)("inlineCode",{parentName:"p"},"__internal_schema")," database to store audit logs."),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you upgrade from an old version, you can continue to use the previous plug-in. You can also uninstall the previous plug-in and use the new built-in plug-in. But note that the built-in plug-in will write the new audit log to a new table instead of the original audit log table.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If it is a version before Doris 2.1, please refer to the following ",(0,i.kt)("strong",{parentName:"p"},"Compilation, Configuration and Deployment")," chapters.")))),(0,i.kt)("h3",{id:"enable-plug-in"},"Enable plug-in"),(0,i.kt)("p",null,"The audit log plug-in can be turned on or off at any time through the global variable ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_audit_plugin")," (the default is off), such as:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set global enable_audit_plugin = true;")),(0,i.kt)("p",null,"After it is enabled, Doris will write the audit log after it is enabled to the ",(0,i.kt)("inlineCode",{parentName:"p"},"audit_log")," table."),(0,i.kt)("p",null,"The audit log plugin can be turned off at any time:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set global enable_audit_plugin = false;")),(0,i.kt)("p",null,"After disable, Doris will stop writing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"audit_log")," table. Audit logs that have been written will not change."),(0,i.kt)("h3",{id:"related-configuration"},"Related configuration"),(0,i.kt)("p",null,"The audit log table is a dynamic partitioned table, partitioned by day, and retains the data of the last 30 days by default."),(0,i.kt)("p",null,"The following 3 global variables can control some writing behaviors of the audit log table:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"audit_plugin_max_batch_interval_sec"),": The maximum write interval for the audit log table. Default 60 seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"audit_plugin_max_batch_bytes"),": The maximum amount of data written in each batch of the audit log table. Default 50MB."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"audit_plugin_max_sql_length"),": The maximum length of statements recorded in the audit log table. Default 4096.")),(0,i.kt)("p",null,"Can be set via ",(0,i.kt)("inlineCode",{parentName:"p"},"set global xxx=yyy"),"."),(0,i.kt)("h2",{id:"compilation-configuration-and-deployment"},"Compilation, Configuration and Deployment"),(0,i.kt)("h3",{id:"fe-configuration"},"FE Configuration"),(0,i.kt)("p",null,"The audit log plug-in framework is enabled by default in Doris and is controlled by the FE configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_enable")),(0,i.kt)("h3",{id:"auditloader-configuration"},"AuditLoader Configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the Audit Loader plugin"),(0,i.kt)("p",{parentName:"li"},"The Audit Loader plug-in is provided by default in the Doris distribution. After downloading the Doris installation package through ",(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/download"},"DOWNLOAD"),", decompress it and enter the directory, you can find the auditloader.zip file in the extensionsaudit_loader subdirectory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unzip the installation package"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"unzip auditloader.zip\n")),(0,i.kt)("p",{parentName:"li"},"Unzip and generate the following files:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"auditloader.jar: plug-in code package."),(0,i.kt)("li",{parentName:"ul"},"plugin.properties: plugin properties file."),(0,i.kt)("li",{parentName:"ul"},"plugin.conf: plugin configuration file.")))),(0,i.kt)("p",null,"You can place this file on an http download server or copy(or unzip) it to the specified directory of all FEs. Here we use the latter.",(0,i.kt)("br",{parentName:"p"}),"\n","The installation of this plugin can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"},"INSTALL"),(0,i.kt)("br",{parentName:"p"}),"\n","After executing install, the AuditLoader directory will be automatically generated."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify plugin.conf"),(0,i.kt)("p",{parentName:"li"},"The following configurations are available for modification:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"frontend_host_port: FE node IP address and HTTP port in the format <fe_ip>:<fe_http_port>. The default value is 127.0.0.1:8030."),(0,i.kt)("li",{parentName:"ul"},"database: Audit log database name."),(0,i.kt)("li",{parentName:"ul"},"audit_log_table: Audit log table name."),(0,i.kt)("li",{parentName:"ul"},"slow_log_table: Slow query log table name."),(0,i.kt)("li",{parentName:"ul"},"enable_slow_log: Whether to enable the slow query log import function. The default value is false."),(0,i.kt)("li",{parentName:"ul"},"user: Cluster username. The user must have INSERT permission on the corresponding table."),(0,i.kt)("li",{parentName:"ul"},"password: Cluster user password."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Repackaging the Audit Loader plugin"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zip -r -q -m auditloader.zip auditloader.jar plugin.properties plugin.conf\n")))),(0,i.kt)("h3",{id:"create-audit-table"},"Create Audit Table"),(0,i.kt)("p",null,"In Doris, you need to create the library and table of the audit log. The table structure is as follows:"),(0,i.kt)("p",null,"If you need to enable the slow query log import function, you need to create an additional slow table ",(0,i.kt)("inlineCode",{parentName:"p"},"doris_slow_log_tbl__"),", whose table structure is consistent with ",(0,i.kt)("inlineCode",{parentName:"p"},"doris_audit_log_tbl__"),"."),(0,i.kt)("p",null,"Among them, the ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_partition")," attribute selects the number of days for audit log retention according to your own needs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'create database doris_audit_db__;\n\ncreate table doris_audit_db__.doris_audit_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest of this query, will be empty if not a slow query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G"\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n\ncreate table doris_audit_db__.doris_slow_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest of a slow query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G "\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Notice")),(0,i.kt)("p",{parentName:"blockquote"},"In the above table structure: stmt string, this can only be used in 0.15 and later versions, in previous versions, the field type used varchar")),(0,i.kt)("h3",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"You can place the packaged auditloader.zip on an http server, or copy ",(0,i.kt)("inlineCode",{parentName:"p"},"auditloader.zip")," to the same specified directory in all FEs."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install the audit loader plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM [source] [PROPERTIES ("key"="value", ...)]\n')),(0,i.kt)("p",null,"Detailed command reference: ",(0,i.kt)("a",{parentName:"p",href:"../sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"},"INSTALL-PLUGIN.md")),(0,i.kt)("p",null,"After successful installation, you can see the installed plug-ins through ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW PLUGINS"),", and the status is ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALLED"),"."),(0,i.kt)("p",null,"After completion, the plugin will continuously insert audit logs into this table at specified intervals."))}m.isMDXComponent=!0}}]);