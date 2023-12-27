"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const r={title:"CREATE-TABLE",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",title:"CREATE-TABLE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-TABLE",language:"en"},sidebar:"docs",previous:{title:"CREATE-MATERIALIZED-VIEW",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW"},next:{title:"CREATE-SQL-BLOCK-RULE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"}},p={},m=[{value:"CREATE-TABLE",id:"create-table",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3},{value:"Partitioning and bucketing",id:"partitioning-and-bucketing",level:4},{value:"Dynamic Partition",id:"dynamic-partition",level:4},{value:"Materialized View",id:"materialized-view",level:4},{value:"Index",id:"index",level:4}],s={toc:m},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-table"},"CREATE-TABLE"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"This command is used to create a table. The subject of this document describes the syntax for creating Doris self-maintained tables. For external table syntax, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"./CREATE-EXTERNAL-TABLE.md"},"CREATE-EXTERNAL-TABLE")," document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [database.]table\n(\n    column_definition_list,\n    [index_definition_list]\n)\n[engine_type]\n[keys_type]\n[table_comment]\n[partition_info]\ndistribution_desc\n[rollup_list]\n[properties]\n[extra_properties]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_definition_list")),(0,i.kt)("p",{parentName:"li"},"  Column definition list:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"column_definition[, column_definition]")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_definition")),(0,i.kt)("p",{parentName:"li"},"  Column definition:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"column_name column_type [KEY] [aggr_type] [NULL] [default_value] [column_comment]")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_type")),(0,i.kt)("p",{parentName:"li"},"  Column type, the following types are supported:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"TINYINT (1 byte)\n    Range: -2^7 + 1 ~ 2^7-1\nSMALLINT (2 bytes)\n    Range: -2^15 + 1 ~ 2^15-1\nINT (4 bytes)\n    Range: -2^31 + 1 ~ 2^31-1\nBIGINT (8 bytes)\n    Range: -2^63 + 1 ~ 2^63-1\nLARGEINT (16 bytes)\n    Range: -2^127 + 1 ~ 2^127-1\nFLOAT (4 bytes)\n    Support scientific notation\nDOUBLE (12 bytes)\n    Support scientific notation\nDECIMAL[(precision, scale)] (16 bytes)\n    The decimal type with guaranteed precision. The default is DECIMAL(10, 0)\n    precision: 1 ~ 27\n    scale: 0 ~ 9\n    Where the integer part is 1 ~ 18\n    Does not support scientific notation\nDATE (3 bytes)\n    Range: 0000-01-01 ~ 9999-12-31\nDATETIME (8 bytes)\n    Range: 0000-01-01 00:00:00 ~ 9999-12-31 23:59:59\nCHAR[(length)]\n    Fixed-length character string. Length range: 1 ~ 255. Default is 1\nVARCHAR[(length)]\n    Variable length character string. Length range: 1 ~ 65533. Default is 1\nHLL (1~16385 bytes)\n    HyperLogLog column type, do not need to specify the length and default value. The length is controlled within the system according to the degree of data aggregation.\n    Must be used with HLL_UNION aggregation type.\nBITMAP\n    The bitmap column type does not need to specify the length and default value. Represents a collection of integers, and the maximum number of elements supported is 2^64-1.\n    Must be used with BITMAP_UNION aggregation type.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"aggr_type")),(0,i.kt)("p",{parentName:"li"},"  Aggregation type, the following aggregation types are supported:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"SUM: Sum. Applicable numeric types.\nMIN: Find the minimum value. Suitable for numeric types.\nMAX: Find the maximum value. Suitable for numeric types.\nREPLACE: Replace. For rows with the same dimension column, the index column will be imported in the order of import, and the last imported will replace the first imported.\nREPLACE_IF_NOT_NULL: non-null value replacement. The difference with REPLACE is that there is no replacement for null values. It should be noted here that the default value should be NULL, not an empty string. If it is an empty string, you should replace it with an empty string.\nHLL_UNION: The aggregation method of HLL type columns, aggregated by HyperLogLog algorithm.\nBITMAP_UNION: The aggregation mode of BIMTAP type columns, which performs the union aggregation of bitmaps.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default_value")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Default value of the column. If the load data does not specify a value for this column, the system will assign a default value to this column.\n\nThe syntax is: `default default_value`\u3002\n\nCurrently, the default value supports two forms:\n\n1. The user specifies a fixed value, such as:\n\n```SQL\n    k1 INT DEFAULT '1',\n    k2 CHAR(10) DEFAULT 'aaaa'\n```\n2. Keywords are provided by the system. Currently, the following keywords are supported: \n\n```SQL\n    // This keyword is used only for DATETIME type. If the value is missing, the system assigns the current timestamp.\n    dt DATETIME DEFAULT CURRENT_TIMESTAMP\n```\n")),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'```\nk1 TINYINT,\nk2 DECIMAL(10,2) DEFAULT "10.5",\nk4 BIGINT NULL DEFAULT "1000" COMMENT "This is column k4",\nv1 VARCHAR(10) REPLACE NOT NULL,\nv2 BITMAP BITMAP_UNION,\nv3 HLL HLL_UNION,\nv4 INT SUM NOT NULL DEFAULT "1" COMMENT "This is column v4"\n```\n'))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"index_definition_list")),(0,i.kt)("p",{parentName:"li"},"  Index list definition:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"index_definition[, index_definition]")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"index_definition")),(0,i.kt)("p",{parentName:"li"},"  Index definition:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INDEX index_name (col_name) [USING BITMAP] COMMENT'xxxxxx'\n")),(0,i.kt)("p",{parentName:"li"},"  Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'INDEX idx1 (k1) USING BITMAP COMMENT "This is a bitmap index1",\nINDEX idx2 (k2) USING BITMAP COMMENT "This is a bitmap index2",\n...\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"engine_type")),(0,i.kt)("p",{parentName:"li"},"  Table engine type. All types in this document are OLAP. For other external table engine types, see ",(0,i.kt)("a",{parentName:"p",href:"./CREATE-EXTERNAL-TABLE.md"},"CREATE EXTERNAL TABLE")," document. Example:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"ENGINE=olap"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"keys_type")),(0,i.kt)("p",{parentName:"li"},"  Data model."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"key_type(col1, col2, ...)")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"key_type")," supports the following models:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"DUPLICATE KEY (default): The subsequent specified column is the sorting column.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AGGREGATE KEY: The specified column is the dimension column.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UNIQUE KEY: The subsequent specified column is the primary key column."),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"DUPLICATE KEY(col1, col2),\nAGGREGATE KEY(k1, k2, k3),\nUNIQUE KEY(k1, k2)\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table_comment")),(0,i.kt)("p",{parentName:"li"},"  Table notes. Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'COMMENT "This is my first DORIS table"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"partition_info")),(0,i.kt)("p",{parentName:"li"},"  Partition information supports three writing methods:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"LESS THAN: Only define the upper boundary of the partition. The lower bound is determined by the upper bound of the previous partition."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'PARTITION BY RANGE(col1[, col2, ...])\n(\n    PARTITION partition_name1 VALUES LESS THAN MAXVALUE|("value1", "value2", ...),\n    PARTITION partition_name2 VALUES LESS THAN MAXVALUE|("value1", "value2", ...)\n)\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"FIXED RANGE: Define the left closed and right open interval of the zone."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'PARTITION BY RANGE(col1[, col2, ...])\n(\n    PARTITION partition_name1 VALUES [("k1-lower1", "k2-lower1", "k3-lower1",...), ("k1-upper1", "k2-upper1", "k3-upper1", ... )),\n    PARTITION partition_name2 VALUES [("k1-lower1-2", "k2-lower1-2", ...), ("k1-upper1-2", MAXVALUE, ))\n)\n')))))),(0,i.kt)("version",{since:"1.2.0"},"3. MULTI RANGE\uff1aMulti build RANGE partitions,Define the left closed and right open interval of the zone, Set the time unit and step size, the time unit supports year, month, day, week and hour.",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    ```\n    PARTITION BY RANGE(col)\n    (\n       FROM ("2000-11-14") TO ("2021-11-14") INTERVAL 1 YEAR,\n       FROM ("2021-11-14") TO ("2022-11-14") INTERVAL 1 MONTH,\n       FROM ("2022-11-14") TO ("2023-01-03") INTERVAL 1 WEEK,\n       FROM ("2023-01-03") TO ("2023-01-14") INTERVAL 1 DAY\n    )\n    ```\n'))),"* `distribution_desc`",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Define the data bucketing method.\n\n1) Hash\n   Syntax:\n   `DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num|auto]`\n   Explain:\n   Hash bucketing using the specified key column.\n2) Random\n   Syntax:\n   `DISTRIBUTED BY RANDOM [BUCKETS num|auto]`\n   Explain:\n   Use random numbers for bucketing.\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rollup_list")),(0,i.kt)("p",{parentName:"li"},"  Multiple materialized views (ROLLUP) can be created at the same time as the table is built."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP (rollup_definition[, rollup_definition, ...])")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rollup_definition")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'rollup_name (col1[, col2, ...]) [DUPLICATE KEY(col1[, col2, ...])] [PROPERTIES("key" = "value")]')),(0,i.kt)("p",{parentName:"li"},"  Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"ROLLUP (\n    r1 (k1, k3, v1, v2),\n    r2 (k1, v1)\n)\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"properties")),(0,i.kt)("p",{parentName:"li"},"  Set table properties. The following attributes are currently supported:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"replication_num")),(0,i.kt)("p",{parentName:"li"},"  Number of copies. The default number of copies is 3. If the number of BE nodes is less than 3, you need to specify that the number of copies is less than or equal to the number of BE nodes."),(0,i.kt)("p",{parentName:"li"},"  After version 0.15, this attribute will be automatically converted to the ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_allocation")," attribute, such as:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"replication_num" = "3"')," will be automatically converted to ",(0,i.kt)("inlineCode",{parentName:"p"},'"replication_allocation" = "tag.location.default:3"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"replication_allocation")),(0,i.kt)("p",{parentName:"li"},"   Set the copy distribution according to Tag. This attribute can completely cover the function of the ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_num")," attribute.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"storage_medium/storage_cooldown_time")),(0,i.kt)("p",{parentName:"li"},"  Data storage medium. ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_medium")," is used to declare the initial storage medium of the table data, and ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_cooldown_time")," is used to set the expiration time. Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'"storage_medium" = "SSD",\n"storage_cooldown_time" = "2020-11-20 00:00:00"\n')),(0,i.kt)("p",{parentName:"li"},"  This example indicates that the data is stored in the SSD and will be automatically migrated to the HDD storage after the expiration of 2020-11-20 00:00:00.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"colocate_with")),(0,i.kt)("p",{parentName:"li"},"  When you need to use the Colocation Join function, use this parameter to set the Colocation Group."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"colocate_with" = "group1"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bloom_filter_columns")),(0,i.kt)("p",{parentName:"li"},"  The user specifies the list of column names that need to be added to the Bloom Filter index. The Bloom Filter index of each column is independent, not a composite index."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"bloom_filter_columns" = "k1, k2, k3"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"in_memory")),(0,i.kt)("p",{parentName:"li"},"  Deprecated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"function_column.sequence_col")),(0,i.kt)("p",{parentName:"li"},"  When using the UNIQUE KEY model, you can specify a sequence column. When the KEY columns are the same, REPLACE will be performed according to the sequence column (the larger value replaces the smaller value, otherwise it cannot be replaced)"),(0,i.kt)("p",{parentName:"li"}," The ",(0,i.kt)("inlineCode",{parentName:"p"},"function_column.sequence_col")," is used to specify the mapping of the sequence column to a column in the table, which can be integral and time (DATE, DATETIME). The type of this column cannot be changed after creation. If ",(0,i.kt)("inlineCode",{parentName:"p"},"function_column.sequence_col")," is set, ",(0,i.kt)("inlineCode",{parentName:"p"},"function_column.sequence_type")," is ignored."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"\"function_column.sequence_col\" ='column_name'"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"function_column.sequence_type")),(0,i.kt)("p",{parentName:"li"},"  When using the UNIQUE KEY model, you can specify a sequence column. When the KEY columns are the same, REPLACE will be performed according to the sequence column (the larger value replaces the smaller value, otherwise it cannot be replaced)"),(0,i.kt)("p",{parentName:"li"},"  Here we only need to specify the type of sequence column, support time type or integer type. Doris will create a hidden sequence column."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"\"function_column.sequence_type\" ='Date'"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"compression")),(0,i.kt)("p",{parentName:"li"},"  The default compression method for Doris tables is LZ4. After version 1.1, it is supported to specify the compression method as ZSTD to obtain a higher compression ratio."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"compression"="zstd"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"light_schema_change")),(0,i.kt)("p",{parentName:"li"},"  Whether to use the Light Schema Change optimization."),(0,i.kt)("p",{parentName:"li"},"  If set to true, the addition and deletion of value columns can be done more quickly and synchronously."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"light_schema_change"="true"')),(0,i.kt)("p",{parentName:"li"},"  This feature is enabled by default after v2.0.0.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"disable_auto_compaction")),(0,i.kt)("p",{parentName:"li"},"  Whether to disable automatic compaction for this table."),(0,i.kt)("p",{parentName:"li"},"  If this property is set to 'true', the background automatic compaction process will skip all the tables of this table."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"disable_auto_compaction" = "false"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamic partition related"),(0,i.kt)("p",{parentName:"li"},"  The relevant parameters of dynamic partition are as follows:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.enable"),": Used to specify whether the dynamic partition function at the table level is enabled. The default is true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.time_unit:")," is used to specify the time unit for dynamically adding partitions, which can be selected as DAY (day), WEEK (week), MONTH (month), HOUR (hour)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.start"),": Used to specify how many partitions to delete forward. The value must be less than 0. The default is Integer.MIN_VALUE."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.end"),": Used to specify the number of partitions created in advance. The value must be greater than 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.prefix"),": Used to specify the partition name prefix to be created. For example, if the partition name prefix is \u200b\u200bp, the partition name will be automatically created as p20200108."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.buckets"),": Used to specify the number of partition buckets that are automatically created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.create_history_partition"),": Whether to create a history partition."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.history_partition_num"),": Specify the number of historical partitions to be created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.reserved_history_periods"),": Used to specify the range of reserved history periods.")))))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a detailed model table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    k3 CHAR(10) COMMENT "string column",\n    k4 INT NOT NULL DEFAULT "1" COMMENT "int column"\n)\nCOMMENT "my first table"\nDISTRIBUTED BY HASH(k1) BUCKETS 32\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a detailed model table, partition, specify the sorting column, and set the number of copies to 1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n    k1 DATE,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    k3 CHAR(10) COMMENT "string column",\n    k4 INT NOT NULL DEFAULT "1" COMMENT "int column"\n)\nDUPLICATE KEY(k1, k2)\nCOMMENT "my first table"\nPARTITION BY RANGE(k1)\n(\n    PARTITION p1 VALUES LESS THAN ("2020-02-01"),\n    PARTITION p2 VALUES LESS THAN ("2020-03-01"),\n    PARTITION p3 VALUES LESS THAN ("2020-04-01")\n)\nDISTRIBUTED BY HASH(k1) BUCKETS 32\nPROPERTIES (\n    "replication_num" = "1"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a table with a unique model of the primary key, set the initial storage medium and cooling time"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048),\n    v2 SMALLINT DEFAULT "10"\n)\nUNIQUE KEY(k1, k2)\nDISTRIBUTED BY HASH (k1, k2) BUCKETS 32\nPROPERTIES(\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2015-06-04 00:00:00"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an aggregate model table, using a fixed range partition description"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE table_range\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048) REPLACE,\n    v2 INT SUM DEFAULT "1"\n)\nAGGREGATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1, k2, k3)\n(\n    PARTITION p1 VALUES [("2014-01-01", "10", "200"), ("2014-01-01", "20", "300")),\n    PARTITION p2 VALUES [("2014-06-01", "100", "200"), ("2014-07-01", "100", "300"))\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 32\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an aggregate model table with HLL and BITMAP column types"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.example_table\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 HLL HLL_UNION,\n    v2 BITMAP BITMAP_UNION\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1) BUCKETS 32\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create two self-maintained tables of the same Colocation Group."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE t1 (\n    id int(11) COMMENT "",\n    value varchar(8) COMMENT ""\n)\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n\nCREATE TABLE t2 (\n    id int(11) COMMENT "",\n    value1 varchar(8) COMMENT "",\n    value2 varchar(8) COMMENT ""\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a table with bitmap index and bloom filter index"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM,\n    INDEX k1_idx (k1) USING BITMAP COMMENT\'my first index\'\n)\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1) BUCKETS 32\nPROPERTIES (\n    "bloom_filter_columns" = "k2"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a dynamic partition table."),(0,i.kt)("p",{parentName:"li"},"The table creates partitions 3 days in advance every day, and deletes the partitions 3 days ago. For example, if today is ",(0,i.kt)("inlineCode",{parentName:"p"},"2020-01-08"),", partitions named ",(0,i.kt)("inlineCode",{parentName:"p"},"p20200108"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p20200109"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p20200110"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p20200111")," will be created. The partition ranges are:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"[types: [DATE]; keys: [2020-01-08]; \u2025types: [DATE]; keys: [2020-01-09];)\n[types: [DATE]; keys: [2020-01-09]; \u2025types: [DATE]; keys: [2020-01-10];)\n[types: [DATE]; keys: [2020-01-10]; \u2025types: [DATE]; keys: [2020-01-11];)\n[types: [DATE]; keys: [2020-01-11]; \u2025types: [DATE]; keys: [2020-01-12];)\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.dynamic_partition\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1) ()\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-3",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a table with a materialized view (ROLLUP)."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example_db.rolup_index_table\n(\n    event_day DATE,\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT'',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_day, siteid, citycode, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nROLLUP (\n    r1(event_day,siteid),\n    r2(event_day,citycode),\n    r3(event_day)\n)\nPROPERTIES(\"replication_num\" = \"3\");\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the replica of the table through the ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_allocation")," property."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n  k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5"\n)\nDISTRIBUTED BY HASH(k1) BUCKETS 32\nPROPERTIES (\n    "replication_allocation"="tag.location.group_a:1, tag.location.group_b:2"\n);\n')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.dynamic_partition\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nPARTITION BY RANGE (k1) ()\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-3",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32",\n    "dynamic_partition.replication_allocation" = "tag.location.group_a:3"\n );\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the table hot and cold separation policy through the ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_policy")," property."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'        CREATE TABLE IF NOT EXISTS create_table_use_created_policy \n        (\n            k1 BIGINT,\n            k2 LARGEINT,\n            v1 VARCHAR(2048)\n        )\n        UNIQUE KEY(k1)\n        DISTRIBUTED BY HASH (k1) BUCKETS 3\n        PROPERTIES(\n            "storage_policy" = "test_create_table_use_policy",\n            "replication_num" = "1"\n        );\n')),(0,i.kt)("p",null,"NOTE: Need to create the s3 resource and storage policy before the table can be successfully associated with the migration policy "),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},"Add a hot and cold data migration strategy for the table partition")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'        CREATE TABLE create_table_partion_use_created_policy\n        (\n            k1 DATE,\n            k2 INT,\n            V1 VARCHAR(2048) REPLACE\n        ) PARTITION BY RANGE (k1) (\n            PARTITION p1 VALUES LESS THAN ("2022-01-01") ("storage_policy" = "test_create_table_partition_use_policy_1" ,"replication_num"="1"),\n            PARTITION p2 VALUES LESS THAN ("2022-02-01") ("storage_policy" = "test_create_table_partition_use_policy_2" ,"replication_num"="1")\n        ) DISTRIBUTED BY HASH(k2) BUCKETS 1;\n')),(0,i.kt)("p",null,"NOTE: Need to create the s3 resource and storage policy before the table can be successfully associated with the migration policy "),(0,i.kt)("version",{since:"1.2.0"},(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},"Multi Partition by a partition desc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'        CREATE TABLE create_table_multi_partion_date\n        (\n            k1 DATE,\n            k2 INT,\n            V1 VARCHAR(20)\n        ) PARTITION BY RANGE (k1) (\n            FROM ("2000-11-14") TO ("2021-11-14") INTERVAL 1 YEAR,\n            FROM ("2021-11-14") TO ("2022-11-14") INTERVAL 1 MONTH,\n            FROM ("2022-11-14") TO ("2023-01-03") INTERVAL 1 WEEK,\n            FROM ("2023-01-03") TO ("2023-01-14") INTERVAL 1 DAY,\n            PARTITION p_20230114 VALUES [(\'2023-01-14\'), (\'2023-01-15\'))\n        ) DISTRIBUTED BY HASH(k2) BUCKETS 1\n        PROPERTIES(\n            "replication_num" = "1"\n        );\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'        CREATE TABLE create_table_multi_partion_date_hour\n        (\n            k1 DATETIME,\n            k2 INT,\n            V1 VARCHAR(20)\n        ) PARTITION BY RANGE (k1) (\n            FROM ("2023-01-03 12") TO ("2023-01-14 22") INTERVAL 1 HOUR\n        ) DISTRIBUTED BY HASH(k2) BUCKETS 1\n        PROPERTIES(\n            "replication_num" = "1"\n        );\n')),(0,i.kt)("p",null,"NOTE: Multi Partition can be mixed with conventional manual creation of partitions. When using, you need to limit the partition column to only one, The default maximum number of partitions created in multi partition is 4096, This parameter can be adjusted in fe configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"max_multi_partition_num"),".")),(0,i.kt)("h3",{id:"keywords"},"Keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE, TABLE\n")),(0,i.kt)("h3",{id:"best-practice"},"Best Practice"),(0,i.kt)("h4",{id:"partitioning-and-bucketing"},"Partitioning and bucketing"),(0,i.kt)("p",null,"A table must specify the bucket column, but it does not need to specify the partition. For the specific introduction of partitioning and bucketing, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.2/data-table/data-partition"},"Data Division")," document."),(0,i.kt)("p",null,"Tables in Doris can be divided into partitioned tables and non-partitioned tables. This attribute is determined when the table is created and cannot be changed afterwards. That is, for partitioned tables, you can add or delete partitions in the subsequent use process, and for non-partitioned tables, you can no longer perform operations such as adding partitions afterwards."),(0,i.kt)("p",null,"At the same time, partitioning columns and bucketing columns cannot be changed after the table is created. You can neither change the types of partitioning and bucketing columns, nor do any additions or deletions to these columns."),(0,i.kt)("p",null,"Therefore, it is recommended to confirm the usage method to build the table reasonably before building the table."),(0,i.kt)("h4",{id:"dynamic-partition"},"Dynamic Partition"),(0,i.kt)("p",null,"The dynamic partition function is mainly used to help users automatically manage partitions. By setting certain rules, the Doris system regularly adds new partitions or deletes historical partitions. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.2/advanced/partition/dynamic-partition"},"Dynamic Partition")," document for more help."),(0,i.kt)("h4",{id:"materialized-view"},"Materialized View"),(0,i.kt)("p",null,"Users can create multiple materialized views (ROLLUP) while building a table. Materialized views can also be added after the table is built. It is convenient for users to create all materialized views at one time by writing in the table creation statement."),(0,i.kt)("p",null,"If the materialized view is created when the table is created, all subsequent data import operations will synchronize the data of the materialized view to be generated. The number of materialized views may affect the efficiency of data import."),(0,i.kt)("p",null,"If you add a materialized view in the subsequent use process, if there is data in the table, the creation time of the materialized view depends on the current amount of data."),(0,i.kt)("p",null,"For the introduction of materialized views, please refer to the document ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.2/query-acceleration/materialized-view"},"materialized views"),"."),(0,i.kt)("h4",{id:"index"},"Index"),(0,i.kt)("p",null,"Users can create indexes on multiple columns while building a table. Indexes can also be added after the table is built."),(0,i.kt)("p",null,"If you add an index in the subsequent use process, if there is data in the table, you need to rewrite all the data, so the creation time of the index depends on the current data volume."))}c.isMDXComponent=!0}}]);