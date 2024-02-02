"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51464],{95788:(e,a,t)=>{t.d(a,{Iu:()=>m,yg:()=>u});var n=t(11504);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),y=i,u=d["".concat(p,".").concat(y)]||d[y]||c[y]||r;return t?n.createElement(u,o(o({ref:a},m),{},{components:t})):n.createElement(u,o({ref:a},m))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=y;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},26612:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=t(45072),i=(t(11504),t(95788));const r={title:"BROKER-LOAD",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",title:"BROKER-LOAD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"BROKER-LOAD",language:"en"},sidebar:"docs",previous:{title:"MULTI-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD"},next:{title:"MYSQL-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD"}},p={},s=[{value:"BROKER-LOAD",id:"broker-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},d="wrapper";function c(e){let{components:a,...t}=e;return(0,i.yg)(d,(0,n.c)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"broker-load"},"BROKER-LOAD"),(0,i.yg)("h3",{id:"name"},"Name"),(0,i.yg)("p",null,"BROKER LOAD"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"This command is mainly used to import data on remote storage (such as S3, HDFS) through the Broker service process."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL load_label\n(\ndata_desc1[, data_desc2, ...]\n)\nWITH BROKER broker_name\n[broker_properties]\n[load_properties]\n[COMMENT "comment"];\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"load_label")),(0,i.yg)("p",{parentName:"li"},"Each import needs to specify a unique Label. You can use this label to view the progress of the job later."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"[database.]label_name"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"data_desc1")),(0,i.yg)("p",{parentName:"li"},"Used to describe a set of files that need to be imported."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'[MERGE|APPEND|DELETE]\nDATA INFILE\n(\n"file_path1"[, file_path2, ...]\n)\n[NEGATIVE]\nINTO TABLE `table_name`\n[PARTITION (p1, p2, ...)]\n[COLUMNS TERMINATED BY "column_separator"]\n[LINES TERMINATED BY "line_delimiter"]\n[FORMAT AS "file_type"]\n[COMPRESS_TYPE AS "compress_type"]\n[(column_list)]\n[COLUMNS FROM PATH AS (c1, c2, ...)]\n[SET (column_mapping)]\n[PRECEDING FILTER predicate]\n[WHERE predicate]\n[DELETE ON expr]\n[ORDER BY source_sequence]\n[PROPERTIES ("key1"="value1", ...)]\n')),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"[MERGE|APPEND|DELETE]")),(0,i.yg)("p",{parentName:"li"},"Data merge type. The default is APPEND, indicating that this import is a normal append write operation. The MERGE and DELETE types are only available for Unique Key model tables. The MERGE type needs to be used with the ",(0,i.yg)("inlineCode",{parentName:"p"},"[DELETE ON]")," statement to mark the Delete Flag column. The DELETE type indicates that all data imported this time are deleted data.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"DATA INFILE")),(0,i.yg)("p",{parentName:"li"},"Specify the file path to be imported. Can be multiple. Wildcards can be used. The path must eventually match to a file, if it only matches a directory the import will fail.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"NEGATIVE")),(0,i.yg)("p",{parentName:"li"},'This keyword is used to indicate that this import is a batch of "negative" imports. This method is only for aggregate data tables with integer SUM aggregate type. This method will reverse the integer value corresponding to the SUM aggregate column in the imported data. Mainly used to offset previously imported wrong data.')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"PARTITION(p1, p2, ...)")),(0,i.yg)("p",{parentName:"li"},"You can specify to import only certain partitions of the table. Data that is no longer in the partition range will be ignored.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"COLUMNS TERMINATED BY")),(0,i.yg)("p",{parentName:"li"},"Specifies the column separator. Only valid in CSV format. Only single-byte delimiters can be specified.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"LINES TERMINATED BY")),(0,i.yg)("p",{parentName:"li"},"Specifies the line delimiter. Only valid in CSV format. Only single-byte delimiters can be specified.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"FORMAT AS")),(0,i.yg)("p",{parentName:"li"},"Specifies the file type, CSV, PARQUET and ORC formats are supported. Default is CSV.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"COMPRESS_TYPE AS"),"\nSpecifies the file compress type, GZ/LZO/BZ2/LZ4FRAME/DEFLATE/LZOP")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"column list")),(0,i.yg)("p",{parentName:"li"},"Used to specify the column order in the original file. For a detailed introduction to this part, please refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-data-convert"},"Column Mapping, Conversion and Filtering")," document."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"(k1, k2, tmpk1)"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"COLUMNS FROM PATH AS")),(0,i.yg)("p",{parentName:"li"},"Specifies the columns to extract from the import file path.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"SET (column_mapping)")),(0,i.yg)("p",{parentName:"li"},"Specifies the conversion function for the column.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"PRECEDING FILTER predicate")),(0,i.yg)("p",{parentName:"li"},"Pre-filter conditions. The data is first concatenated into raw data rows in order according to ",(0,i.yg)("inlineCode",{parentName:"p"},"column list")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"COLUMNS FROM PATH AS"),". Then filter according to the pre-filter conditions. For a detailed introduction to this part, please refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-data-convert"},"Column Mapping, Conversion and Filtering")," document.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"WHERE predicate")),(0,i.yg)("p",{parentName:"li"},"Filter imported data based on conditions. For a detailed introduction to this part, please refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-data-convert"},"Column Mapping, Conversion and Filtering")," document.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"DELETE ON expr")),(0,i.yg)("p",{parentName:"li"},"It needs to be used with the MEREGE import mode, only for the table of the Unique Key model. Used to specify the columns and calculated relationships in the imported data that represent the Delete Flag.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"ORDER BY")),(0,i.yg)("p",{parentName:"li"},"Tables only for the Unique Key model. Used to specify the column in the imported data that represents the Sequence Col. Mainly used to ensure data order when importing.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},'PROPERTIES ("key1"="value1", ...)')),(0,i.yg)("p",{parentName:"li"},"Specify some parameters of the imported format. For example, if the imported file is in ",(0,i.yg)("inlineCode",{parentName:"p"},"json")," format, you can specify parameters such as ",(0,i.yg)("inlineCode",{parentName:"p"},"json_root"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"jsonpaths"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"fuzzy parse"),", etc."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("version",{since:"dev",type:"inline"}," enclose "),(0,i.yg)("p",{parentName:"li"},'  When the csv data field contains row delimiters or column delimiters, to prevent accidental truncation, single-byte characters can be specified as brackets for protection. For example, the column separator is ",", the bracket is "\'", and the data is "a,\'b,c\'", then "b,c" will be parsed as a field.')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("version",{since:"dev",type:"inline"}," escape "),(0,i.yg)("p",{parentName:"li"},'  Used to escape characters that appear in a csv field identical to the enclosing characters. For example, if the data is "a,\'b,\'c\'", enclose is "\'", and you want "b,\'c to be parsed as a field, you need to specify a single-byte escape character, such as "\\", and then modify the data to "a,\' b,\\\'c\'".')))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"WITH BROKER broker_name")),(0,i.yg)("p",{parentName:"li"},"Specify the Broker service name to be used. In the public cloud Doris. Broker service name is ",(0,i.yg)("inlineCode",{parentName:"p"},"bos"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"broker_properties")),(0,i.yg)("p",{parentName:"li"},"Specifies the information required by the broker. This information is usually used by the broker to be able to access remote storage systems. Such as BOS or HDFS. See the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/advanced/broker"},"Broker")," documentation for specific information."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},'(\n    "key1" = "val1",\n    "key2" = "val2",\n    ...\n)\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"load_properties")),(0,i.yg)("p",{parentName:"li"},"Specifies import-related parameters. The following parameters are currently supported:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"timeout")),(0,i.yg)("p",{parentName:"li"},"Import timeout. The default is 4 hours. in seconds.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"max_filter_ratio")),(0,i.yg)("p",{parentName:"li"},"The maximum tolerable proportion of data that can be filtered (for reasons such as data irregularity). Zero tolerance by default. The value range is 0 to 1.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")),(0,i.yg)("p",{parentName:"li"},"Import memory limit. Default is 2GB. The unit is bytes.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"strict_mode")),(0,i.yg)("p",{parentName:"li"},"Whether to impose strict restrictions on data. Defaults to false.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"partial_columns")),(0,i.yg)("p",{parentName:"li"},"Boolean type, True means that use partial column update, the default value is false, this parameter is only allowed to be set when the table model is Unique and Merge on Write is used.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"timezone")),(0,i.yg)("p",{parentName:"li"},"Specify the time zone for some functions that are affected by time zones, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"strftime/alignment_timestamp/from_unixtime"),", etc. Please refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/advanced/time-zone"},"timezone"),' documentation for details. If not specified, the "Asia/Shanghai" timezone is used')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"load_parallelism")),(0,i.yg)("p",{parentName:"li"},"It allows the user to set the parallelism of the load execution plan\non a single node when the broker load is submitted, default value is 1.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"send_batch_parallelism")),(0,i.yg)("p",{parentName:"li"},"Used to set the default parallelism for sending batch, if the value for parallelism exceed ",(0,i.yg)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job")," in BE config, then the coordinator BE will use the value of ",(0,i.yg)("inlineCode",{parentName:"p"},"max_send_batch_parallelism_per_job"),". ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"load_to_single_tablet")),(0,i.yg)("p",{parentName:"li"},"Boolean type, True means that one task can only load data to one tablet in the corresponding partition at a time. The default value is false. The number of tasks for the job depends on the overall concurrency. This parameter can only be set when loading data into the OLAP table with random bucketing.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("version",{since:"dev",type:"inline"}," priority "),(0,i.yg)("p",{parentName:"li"},"Set the priority of the load job, there are three options: ",(0,i.yg)("inlineCode",{parentName:"p"},"HIGH/NORMAL/LOW"),", use ",(0,i.yg)("inlineCode",{parentName:"p"},"NORMAL")," priority as default. The pending broker load jobs which have higher priority will be chosen to execute earlier.")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("version",{since:"1.2.3",type:"inline"}," comment "),"Specify the comment for the import job. The comment can be viewed in the `show load` statement.")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import a batch of data from HDFS"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file.txt")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY ","\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n')),(0,i.yg)("p",{parentName:"li"},"Import the file ",(0,i.yg)("inlineCode",{parentName:"p"},"file.txt"),", separated by commas, into the table ",(0,i.yg)("inlineCode",{parentName:"p"},"my_table"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import data from HDFS, using wildcards to match two batches of files in two batches. into two tables separately."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label2\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-10*")\n    INTO TABLE `my_table1`\n    PARTITION (p1)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n        k2 = tmp_k2 + 1,\n        k3 = tmp_k3 + 1\n    )\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-20*")\n    INTO TABLE `my_table2`\n    COLUMNS TERMINATED BY ","\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n')),(0,i.yg)("p",{parentName:"li"},"Import two batches of files ",(0,i.yg)("inlineCode",{parentName:"p"},"file-10*")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"file-20*")," using wildcard matching. Imported into two tables ",(0,i.yg)("inlineCode",{parentName:"p"},"my_table1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"my_table2")," respectively. Where ",(0,i.yg)("inlineCode",{parentName:"p"},"my_table1")," specifies to import into partition ",(0,i.yg)("inlineCode",{parentName:"p"},"p1"),", and will import the values of the second and third columns in the source file +1.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import a batch of data from HDFS."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label3\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/doris/data/*/*")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\\\x01"\n)\nWITH BROKER my_hdfs_broker\n(\n    "username" = "",\n    "password" = "",\n    "fs.defaultFS" = "hdfs://my_ha",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,i.yg)("p",{parentName:"li"},"Specify the delimiter as Hive's default delimiter ",(0,i.yg)("inlineCode",{parentName:"p"},"\\\\x01"),", and use the wildcard * to specify all files in all directories under the ",(0,i.yg)("inlineCode",{parentName:"p"},"data")," directory. Use simple authentication while configuring namenode HA.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import data in Parquet format and specify FORMAT as parquet. The default is to judge by the file suffix"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label4\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file")\n    INTO TABLE `my_table`\n    FORMAT AS "parquet"\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import the data and extract the partition field in the file path"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label10\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/city=beijing/*/*")\n    INTO TABLE `my_table`\n    FORMAT AS "csv"\n    (k1, k2, k3)\n    COLUMNS FROM PATH AS (city, utc_date)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n')),(0,i.yg)("p",{parentName:"li"},"The columns in the ",(0,i.yg)("inlineCode",{parentName:"p"},"my_table")," table are ",(0,i.yg)("inlineCode",{parentName:"p"},"k1, k2, k3, city, utc_date"),"."),(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"hdfs://hdfs_host:hdfs_port/user/doris/data/input/dir/city=beijing")," directory includes the following files:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"hdfs://hdfs_host:hdfs_port/input/city=beijing/utc_date=2020-10-01/0000.csv\nhdfs://hdfs_host:hdfs_port/input/city=beijing/utc_date=2020-10-02/0000.csv\nhdfs://hdfs_host:hdfs_port/input/city=tianji/utc_date=2020-10-03/0000.csv\nhdfs://hdfs_host:hdfs_port/input/city=tianji/utc_date=2020-10-04/0000.csv\n")),(0,i.yg)("p",{parentName:"li"},"The file only contains three columns of ",(0,i.yg)("inlineCode",{parentName:"p"},"k1, k2, k3"),", and the two columns of ",(0,i.yg)("inlineCode",{parentName:"p"},"city, utc_date")," will be extracted from the file path.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Filter the data to be imported."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label6\n(\n    DATA INFILE("hdfs://host:port/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, k3)\n    SET (\n        k2 = k2 + 1\n    )\n    PRECEDING FILTER k1 = 1\n    WHERE k1 > k2\n)\nWITH BROKER hdfs\n(\n    "username"="user",\n    "password"="pass"\n);\n')),(0,i.yg)("p",{parentName:"li"},"Only in the original data, k1 = 1, and after transformation, rows with k1 > k2 will be imported.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import data, extract the time partition field in the file path, and the time contains %3A (in the hdfs path, ':' is not allowed, all ':' will be replaced by %3A)"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label7\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl12`\n    COLUMNS TERMINATED BY ","\n    (k2,k3)\n    COLUMNS FROM PATH AS (data_time)\n    SET (\n        data_time=str_to_date(data_time, \'%Y-%m-%d %H%%3A%i%%3A%s\')\n    )\n)\nWITH BROKER hdfs\n(\n    "username"="user",\n    "password"="pass"\n);\n')),(0,i.yg)("p",{parentName:"li"},"There are the following files in the path:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"/user/data/data_time=2020-02-17 00%3A00%3A00/test.txt\n/user/data/data_time=2020-02-18 00%3A00%3A00/test.txt\n")),(0,i.yg)("p",{parentName:"li"},"The table structure is:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"data_time DATETIME,\nk2 INT,\nk3 INT\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import a batch of data from HDFS, specify the timeout and filter ratio. Broker with clear text my_hdfs_broker. Simple authentication. And delete the columns in the original data that match the columns with v2 greater than 100 in the imported data, and other columns are imported normally"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label8\n(\n    MERGE DATA INFILE("HDFS://test:802/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, k3, v2, v1)\n    DELETE ON v2 > 100\n)\nWITH HDFS\n(\n    "hadoop.username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n);\n')),(0,i.yg)("p",{parentName:"li"},"Import using the MERGE method. ",(0,i.yg)("inlineCode",{parentName:"p"},"my_table")," must be a table with Unique Key. When the value of the v2 column in the imported data is greater than 100, the row is considered a delete row."),(0,i.yg)("p",{parentName:"li"},"The import task timeout is 3600 seconds, and the error rate is allowed to be within 10%.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Specify the source_sequence column when importing to ensure the replacement order in the UNIQUE_KEYS table:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label9\n(\n    DATA INFILE("HDFS://test:802/input/file")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH HDFS\n(\n    "hadoop.username"="user",\n    "password"="pass"\n)\n')),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"my_table")," must be an Unique Key model table with Sequence Col specified. The data will be ordered according to the value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"source_sequence")," column in the source data.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import a batch of data from HDFS, specify the file format as ",(0,i.yg)("inlineCode",{parentName:"p"},"json"),", and specify parameters of ",(0,i.yg)("inlineCode",{parentName:"p"},"json_root")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"jsonpaths"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label10\n(\n    DATA INFILE("HDFS://test:port/input/file.json")\n    INTO TABLE `my_table`\n    FORMAT AS "json"\n    PROPERTIES(\n      "json_root" = "$.item",\n      "jsonpaths" = "[$.id, $.city, $.code]"\n    )       \n)\nwith HDFS (\n"hadoop.username" = "user"\n"password" = ""\n)\nPROPERTIES\n(\n"timeout"="1200",\n"max_filter_ratio"="0.1"\n);\n')),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"jsonpaths")," can be use with ",(0,i.yg)("inlineCode",{parentName:"p"},"column list")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"SET(column_mapping)"),":"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label10\n(\n    DATA INFILE("HDFS://test:port/input/file.json")\n    INTO TABLE `my_table`\n    FORMAT AS "json"\n    (id, code, city)\n    SET (id = id * 10)\n    PROPERTIES(\n      "json_root" = "$.item",\n      "jsonpaths" = "[$.id, $.code, $.city]"\n    )       \n)\nwith HDFS (\n"hadoop.username" = "user"\n"password" = ""\n)\nPROPERTIES\n(\n"timeout"="1200",\n"max_filter_ratio"="0.1"\n);\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Load data in csv format from cos(Tencent Cloud Object Storage)."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},'LOAD LABEL example_db.label10\n(\nDATA INFILE("cosn://my_bucket/input/file.csv")\nINTO TABLE `my_table`\n(k1, k2, k3)\n)\nWITH BROKER "broker_name"\n(\n    "fs.cosn.userinfo.secretId" = "xxx",\n    "fs.cosn.userinfo.secretKey" = "xxxx",\n    "fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxxxxx.myqcloud.com"\n)\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Load CSV date and trim double quotes and skip first 5 lines"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},'LOAD LABEL example_db.label12\n(\nDATA INFILE("cosn://my_bucket/input/file.csv")\nINTO TABLE `my_table`\n(k1, k2, k3)\nPROPERTIES("trim_double_quotes" = "true", "skip_lines" = "5")\n)\nWITH BROKER "broker_name"\n(\n    "fs.cosn.userinfo.secretId" = "xxx",\n    "fs.cosn.userinfo.secretKey" = "xxxx",\n    "fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxxxxx.myqcloud.com"\n)\n')))),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BROKER, LOAD\n")),(0,i.yg)("h3",{id:"best-practice"},"Best Practice"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Check the import task status"),(0,i.yg)("p",{parentName:"li"},"Broker Load is an asynchronous import process. The successful execution of the statement only means that the import task is submitted successfully, and does not mean that the data import is successful. The import status needs to be viewed through the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD"},"SHOW LOAD")," command.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Cancel the import task"),(0,i.yg)("p",{parentName:"li"},"Import tasks that have been submitted but not yet completed can be canceled by the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD"},"CANCEL LOAD")," command. After cancellation, the written data will also be rolled back and will not take effect.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Label, import transaction, multi-table atomicity"),(0,i.yg)("p",{parentName:"li"},"All import tasks in Doris are atomic. And the import of multiple tables in the same import task can also guarantee atomicity. At the same time, Doris can also use the Label mechanism to ensure that the data imported is not lost or heavy. For details, see the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-atomicity"},"Import Transactions and Atomicity")," documentation.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Column mapping, derived columns and filtering"),(0,i.yg)("p",{parentName:"li"},"Doris can support very rich column transformation and filtering operations in import statements. Most built-in functions and UDFs are supported. For how to use this function correctly, please refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-data-convert"},"Column Mapping, Conversion and Filtering")," document.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Error data filtering"),(0,i.yg)("p",{parentName:"li"},"Doris' import tasks can tolerate a portion of malformed data. Tolerated via ",(0,i.yg)("inlineCode",{parentName:"p"},"max_filter_ratio")," setting. The default is 0, which means that the entire import task will fail when there is an error data. If the user wants to ignore some problematic data rows, the secondary parameter can be set to a value between 0 and 1, and Doris will automatically skip the rows with incorrect data format."),(0,i.yg)("p",{parentName:"li"},"For some calculation methods of the tolerance rate, please refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-data-convert"},"Column Mapping, Conversion and Filtering")," document.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Strict Mode"),(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"strict_mode")," attribute is used to set whether the import task runs in strict mode. The format affects the results of column mapping, transformation, and filtering. For a detailed description of strict mode, see the ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-scenes/load-strict-mode"},"strict mode")," documentation.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Timeout"),(0,i.yg)("p",{parentName:"li"},"The default timeout for Broker Load is 4 hours. from the time the task is submitted. If it does not complete within the timeout period, the task fails.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Limits on data volume and number of tasks"),(0,i.yg)("p",{parentName:"li"},"Broker Load is suitable for importing data within 100GB in one import task. Although theoretically there is no upper limit on the amount of data imported in one import task. But committing an import that is too large results in a longer run time, and the cost of retrying after a failure increases."),(0,i.yg)("p",{parentName:"li"},"At the same time, limited by the size of the cluster, we limit the maximum amount of imported data to the number of ComputeNode nodes * 3GB. In order to ensure the rational use of system resources. If there is a large amount of data to be imported, it is recommended to divide it into multiple import tasks."),(0,i.yg)("p",{parentName:"li"},"Doris also limits the number of import tasks running simultaneously in the cluster, usually ranging from 3 to 10. Import jobs submitted after that are queued. The maximum queue length is 100. Subsequent submissions will be rejected outright. Note that the queue time is also calculated into the total job time. If it times out, the job is canceled. Therefore, it is recommended to reasonably control the frequency of job submission by monitoring the running status of the job."))))}c.isMDXComponent=!0}}]);