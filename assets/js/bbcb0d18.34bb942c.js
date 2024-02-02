"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73440],{95788:(e,n,a)=>{a.d(n,{Iu:()=>c,yg:()=>y});var t=a(11504);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return a?t.createElement(y,i(i({ref:n},c),{},{components:a})):t.createElement(y,i({ref:n},c))}));function y(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54660:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=a(45072),l=(a(11504),a(95788));const r={title:"local",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/table-functions/local",id:"sql-manual/sql-functions/table-functions/local",title:"local",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/local.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/local",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/local",draft:!1,tags:[],version:"current",frontMatter:{title:"local",language:"en"},sidebar:"docs",previous:{title:"HDFS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/hdfs"},next:{title:"ICEBERG_META",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/iceberg-meta"}},p={},s=[{value:"Local",id:"local",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},u="wrapper";function m(e){let{components:n,...a}=e;return(0,l.yg)(u,(0,t.c)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"local"},"Local"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("version",{since:"dev"},(0,l.yg)("p",null,"local")),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"Local table-valued-function(tvf), allows users to read and access local file contents on be node, just like accessing relational table. Currently supports ",(0,l.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc")," file format."),(0,l.yg)("p",null,"It needs ",(0,l.yg)("inlineCode",{parentName:"p"},"ADMIN")," privilege to use."),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'local(\n  "file_path" = "path/to/file.txt", \n  "backend_id" = "be_id",\n  "format" = "csv",\n  "keyn" = "valuen" \n  ...\n  );\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"parameter description")),(0,l.yg)("p",null,"Related parameters for accessing local file on be node:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"file_path"),":"),(0,l.yg)("p",{parentName:"li"},"  (required) The path of the file to be read, which is a relative path to the ",(0,l.yg)("inlineCode",{parentName:"p"},"user_files_secure_path")," directory, where ",(0,l.yg)("inlineCode",{parentName:"p"},"user_files_secure_path")," parameter ",(0,l.yg)("a",{parentName:"p",href:"/docs/dev/admin-manual/config/be-config"},"can be configured on be"),"."),(0,l.yg)("p",{parentName:"li"},"  Can not contains ",(0,l.yg)("inlineCode",{parentName:"p"},"..")," in path. Support using glob syntax to match multi files, such as ",(0,l.yg)("inlineCode",{parentName:"p"},"log/*.log"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"backend_id"),":"),(0,l.yg)("p",{parentName:"li"},"  (required) The backend id where the file resides. The ",(0,l.yg)("inlineCode",{parentName:"p"},"backend_id")," can be obtained by ",(0,l.yg)("inlineCode",{parentName:"p"},"show backends")," command."))),(0,l.yg)("p",null,"File format parameters:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"format"),": (required) Currently support ",(0,l.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"column_separator"),": (optional) default ",(0,l.yg)("inlineCode",{parentName:"p"},","),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"line_delimiter"),": (optional) default ",(0,l.yg)("inlineCode",{parentName:"p"},"\\n"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"compress_type"),": (optional) Currently support ",(0,l.yg)("inlineCode",{parentName:"p"},"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE"),". Default value is ",(0,l.yg)("inlineCode",{parentName:"p"},"UNKNOWN"),", it will automatically infer the type based on the suffix of ",(0,l.yg)("inlineCode",{parentName:"p"},"uri"),"."),(0,l.yg)("p",{parentName:"li"},"  The following 6 parameters are used for loading in json format. For specific usage methods, please refer to: ",(0,l.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-way/load-json-format"},"Json Load"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"read_json_by_line"),": (optional) default ",(0,l.yg)("inlineCode",{parentName:"p"},'"true"'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"strip_outer_array"),": (optional) default ",(0,l.yg)("inlineCode",{parentName:"p"},'"false"'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"json_root"),": (optional) default ",(0,l.yg)("inlineCode",{parentName:"p"},'""'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"json_paths"),": (optional) default ",(0,l.yg)("inlineCode",{parentName:"p"},'""'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"num_as_string"),": (optional) default ",(0,l.yg)("inlineCode",{parentName:"p"},"false"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"fuzzy_parse"),": (optional) default ",(0,l.yg)("inlineCode",{parentName:"p"},"false")),(0,l.yg)("version",{since:"dev"},"The following 2 parameters are used for loading in csv format")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"trim_double_quotes"),": Boolean type (optional), the default value is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),". True means that the outermost double quotes of each field in the csv file are trimmed.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"skip_lines"),": Integer type (optional), the default value is 0. It will skip some lines in the head of csv file. It will be disabled when the format is ",(0,l.yg)("inlineCode",{parentName:"p"},"csv_with_names")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"csv_with_names_and_types"),"."))),(0,l.yg)("h3",{id:"examples"},"Examples"),(0,l.yg)("p",null,"Analyze the log file on specified BE:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from local(\n        "file_path" = "log/be.out",\n        "backend_id" = "10006",\n        "format" = "csv")\n       where c1 like "%start_time%" limit 10;\n+--------------------------------------------------------+\n| c1                                                     |\n+--------------------------------------------------------+\n| start time: 2023\u5e74 08\u6708 07\u65e5 \u661f\u671f\u4e00 23:20:32 CST       |\n| start time: 2023\u5e74 08\u6708 07\u65e5 \u661f\u671f\u4e00 23:32:10 CST       |\n| start time: 2023\u5e74 08\u6708 08\u65e5 \u661f\u671f\u4e8c 00:20:50 CST       |\n| start time: 2023\u5e74 08\u6708 08\u65e5 \u661f\u671f\u4e8c 00:29:15 CST       |\n+--------------------------------------------------------+\n')),(0,l.yg)("p",null,"Read and access csv format files located at path ",(0,l.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/student.csv"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from local(\n      "file_path" = "student.csv", \n      "backend_id" = "10003", \n      "format" = "csv");\n+------+---------+--------+\n| c1   | c2      | c3     |\n+------+---------+--------+\n| 1    | alice   | 18     |\n| 2    | bob     | 20     |\n| 3    | jack    | 24     |\n| 4    | jackson | 19     |\n| 5    | liming  | d18    |\n+------+---------+--------+\n')),(0,l.yg)("p",null,"Can be used with ",(0,l.yg)("inlineCode",{parentName:"p"},"desc function")," :"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function local(\n      "file_path" = "student.csv", \n      "backend_id" = "10003", \n      "format" = "csv");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| c1    | TEXT | Yes  | false | NULL    | NONE  |\n| c2    | TEXT | Yes  | false | NULL    | NONE  |\n| c3    | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"local, table-valued-function, tvf\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"),(0,l.yg)("p",null,"  For more detailed usage of local tvf, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/table-functions/s3"},"S3")," tvf, The only difference between them is the way of accessing the storage system."))}m.isMDXComponent=!0}}]);