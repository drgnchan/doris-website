"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87216],{95788:(e,t,a)=>{a.d(t,{Iu:()=>m,yg:()=>y});var n=a(11504);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=g(a),d=l,y=u["".concat(p,".").concat(d)]||u[d]||s[d]||r;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var g=2;g<r;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},21880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var n=a(45072),l=(a(11504),a(95788));const r={title:"Data Transformation, Column Mapping and Filtering",language:"en"},i=void 0,o={unversionedId:"data-operate/import/import-scenes/load-data-convert",id:"data-operate/import/import-scenes/load-data-convert",title:"Data Transformation, Column Mapping and Filtering",description:"\x3c!--",source:"@site/docs/data-operate/import/import-scenes/load-data-convert.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/load-data-convert",permalink:"/docs/dev/data-operate/import/import-scenes/load-data-convert",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Transformation, Column Mapping and Filtering",language:"en"},sidebar:"docs",previous:{title:"Data Import Things and Atomicity",permalink:"/docs/dev/data-operate/import/import-scenes/load-atomicity"},next:{title:"Import Strict Mode",permalink:"/docs/dev/data-operate/import/import-scenes/load-strict-mode"}},p={},g=[{value:"Supported import methods",id:"supported-import-methods",level:2},{value:"column mapping",id:"column-mapping",level:2},{value:"Column pre-filtering",id:"column-pre-filtering",level:2},{value:"Column conversion",id:"column-conversion",level:2},{value:"List filter",id:"list-filter",level:2},{value:"Data Quality Issues and Filtering Thresholds",id:"data-quality-issues-and-filtering-thresholds",level:3}],m={toc:g},u="wrapper";function s(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"imported-data-transformation-column-mapping-and-filtering"},"Imported Data Transformation, Column Mapping and Filtering"),(0,l.yg)("h2",{id:"supported-import-methods"},"Supported import methods"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"BROKER LOAD")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://bucket/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, tmpk3)\n    PRECEDING FILTER k1 = 1\n    SET (\n        k3 = tmpk3 + 1\n    )\n    WHERE k1 > k2\n)\nWITH BROKER bos\n(\n    ...\n);\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"STREAM LOAD")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'curl\n--location-trusted\n-u user:passwd\n-H "columns: k1, k2, tmpk3, k3 = tmpk3 + 1"\n-H "where: k1 > k2"\n-T file.txt\nhttp://host:port/api/testDb/testTbl/_stream_load\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROUTINE LOAD example_db.label1 ON my_table\nCOLUMNS(k1, k2, tmpk3, k3 = tmpk3 + 1),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > k2\n...\n")))),(0,l.yg)("p",null,"The above import methods all support column mapping, transformation and filtering operations on the source data:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Pre-filtering: filter the read raw data once."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"PRECEDING FILTER k1 = 1\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Mapping: Define the columns in the source data. If the defined column name is the same as the column in the table, it is directly mapped to the column in the table. If different, the defined column can be used for subsequent transformation operations. As in the example above:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"(k1, k2, tmpk3)\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Conversion: Convert the mapped columns in the first step, you can use built-in expressions, functions, and custom functions for conversion, and remap them to the corresponding columns in the table. As in the example above:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"k3 = tmpk3 + 1\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Post filtering: Filter the mapped and transformed columns by expressions. Filtered data rows are not imported into the system. As in the example above:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"WHERE k1 > k2\n")))),(0,l.yg)("h2",{id:"column-mapping"},"column mapping"),(0,l.yg)("p",null,"The purpose of column mapping is mainly to describe the information of each column in the import file, which is equivalent to defining the name of the column in the source data. By describing the column mapping relationship, we can import source files with different column order and different number of columns into Doris. Below we illustrate with an example:"),(0,l.yg)("p",null,"Assuming that the source file has 4 columns, the contents are as follows (the header column names are only for convenience, and there is no header actually):"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Column 1"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 2"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 3"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"\\N"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Note: ",(0,l.yg)("inlineCode",{parentName:"p"},"\\N")," means null in the source file.")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Adjust the mapping order"),(0,l.yg)("p",{parentName:"li"},"Suppose there are 4 columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," in the table. The import mapping relationship we want is as follows:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"column 1 -> k1\ncolumn 2 -> k3\ncolumn 3 -> k2\ncolumn 4 -> k4\n")),(0,l.yg)("p",{parentName:"li"},"Then the column mapping should be written in the following order:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"(k1, k3, k2, k4)\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"There are more columns in the source file than in the table"),(0,l.yg)("p",{parentName:"li"},"Suppose there are 3 columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3")," in the table. The import mapping relationship we want is as follows:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"column 1 -> k1\ncolumn 2 -> k3\ncolumn 3 -> k2\n")),(0,l.yg)("p",{parentName:"li"},"Then the column mapping should be written in the following order:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"(k1, k3, k2, tmpk4)\n")),(0,l.yg)("p",{parentName:"li"},"where ",(0,l.yg)("inlineCode",{parentName:"p"},"tmpk4")," is a custom column name that does not exist in the table. Doris ignores this non-existing column name.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"The number of columns in the source file is less than the number of columns in the table, fill with default values"),(0,l.yg)("p",{parentName:"li"},"Suppose there are 5 columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4,k5")," in the table. The import mapping relationship we want is as follows:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"column 1 -> k1\ncolumn 2 -> k3\ncolumn 3 -> k2\n")),(0,l.yg)("p",{parentName:"li"},"Here we only use the first 3 columns from the source file. The two columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k4,k5")," want to be filled with default values."),(0,l.yg)("p",{parentName:"li"},"Then the column mapping should be written in the following order:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"(k1, k3, k2)\n")),(0,l.yg)("p",{parentName:"li"},"If the ",(0,l.yg)("inlineCode",{parentName:"p"},"k4,k5")," columns have default values, the default values will be populated. Otherwise, if it is a ",(0,l.yg)("inlineCode",{parentName:"p"},"nullable")," column, it will be populated with a ",(0,l.yg)("inlineCode",{parentName:"p"},"null")," value. Otherwise, the import job will report an error."))),(0,l.yg)("h2",{id:"column-pre-filtering"},"Column pre-filtering"),(0,l.yg)("p",null,"Pre-filtering is to filter the read raw data once. Currently only BROKER LOAD and ROUTINE LOAD are supported."),(0,l.yg)("p",null,"Pre-filtering has the following application scenarios:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Filter before conversion"),(0,l.yg)("p",{parentName:"li"},"Scenarios where you want to filter before column mapping and transformation. It can filter out some unwanted data first.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"The filter column does not exist in the table, it is only used as a filter identifier"),(0,l.yg)("p",{parentName:"li"},"For example, the source data stores the data of multiple tables (or the data of multiple tables is written to the same Kafka message queue). Each row in the data has a column name to identify which table the row of data belongs to. Users can filter the corresponding table data for import by pre-filtering conditions."))),(0,l.yg)("h2",{id:"column-conversion"},"Column conversion"),(0,l.yg)("p",null,"The column transformation function allows users to transform column values in the source file. Currently, Doris supports most of the built-in functions and user-defined functions for conversion."),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Note: The user-defined function belongs to a certain database. When using the user-defined function for conversion, the user needs to have read permission to this database.")),(0,l.yg)("p",null,"Transformation operations are usually defined along with column mappings. That is, the columns are first mapped and then converted. Below we illustrate with an example:"),(0,l.yg)("p",null,"Assuming that the source file has 4 columns, the contents are as follows (the header column names are only for convenience, and there is no header actually):"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Column 1"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 2"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 3"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\\N"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Convert the column values in the source file and import them into the table"),(0,l.yg)("p",{parentName:"li"},"Suppose there are 4 columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," in the table. Our desired import mapping and transformation relationship is as follows:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"column 1 -> k1\ncolumn 2 * 100 -> k3\ncolumn 3 -> k2\ncolumn 4 -> k4\n")),(0,l.yg)("p",{parentName:"li"},"Then the column mapping should be written in the following order:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"(k1, tmpk3, k2, k4, k3 = tmpk3 * 100)\n")),(0,l.yg)("p",{parentName:"li"},"This is equivalent to us naming the second column in the source file ",(0,l.yg)("inlineCode",{parentName:"p"},"tmpk3"),", and specifying that the value of the ",(0,l.yg)("inlineCode",{parentName:"p"},"k3")," column in the table is ",(0,l.yg)("inlineCode",{parentName:"p"},"tmpk3 * 100"),". The data in the final table is as follows:"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"10000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"20000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"30000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"40000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4"))))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Through the case when function, column conversion is performed conditionally."),(0,l.yg)("p",{parentName:"li"},"Suppose there are 4 columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," in the table. We hope that ",(0,l.yg)("inlineCode",{parentName:"p"},"beijing, shanghai, guangzhou, chongqing")," in the source data are converted to the corresponding region ids and imported:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"column 1 -> k1\ncolumn 2 -> k2\nColumn 3 after region id conversion -> k3\ncolumn 4 -> k4\n")),(0,l.yg)("p",{parentName:"li"},"Then the column mapping should be written in the following order:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')),(0,l.yg)("p",{parentName:"li"},"The data in the final table is as follows:"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4"))))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Convert the null value in the source file to 0 and import it. At the same time, the region id conversion in Example 2 is also performed."),(0,l.yg)("p",{parentName:"li"},"Suppose there are 4 columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," in the table. While converting the region id, we also want to convert the null value of the k1 column in the source data to 0 and import:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"Column 1 is converted to 0 if it is null -> k1\ncolumn 2 -> k2\ncolumn 3 -> k3\ncolumn 4 -> k4\n")),(0,l.yg)("p",{parentName:"li"},"Then the column mapping should be written in the following order:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},'(tmpk1, k2, tmpk3, k4, k1 = ifnull(tmpk1, 0), k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')),(0,l.yg)("p",{parentName:"li"},"The data in the final table is as follows:"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))))),(0,l.yg)("h2",{id:"list-filter"},"List filter"),(0,l.yg)("p",null,"After column mapping and transformation, we can filter the data that we do not want to import into Doris through filter conditions. Below we illustrate with an example:"),(0,l.yg)("p",null,"Assuming that the source file has 4 columns, the contents are as follows (the header column names are only for convenience, and there is no header actually):"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Column 1"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 2"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 3"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\\N"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"In the default case of column mapping and transformation, filter directly"),(0,l.yg)("p",{parentName:"li"},"Suppose there are 4 columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," in the table. We can define filter conditions directly with default column mapping and transformation. If we want to import only the data rows whose fourth column in the source file is greater than 1.2, the filter conditions are as follows:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"where k4 > 1.2\n")),(0,l.yg)("p",{parentName:"li"},"The data in the final table is as follows:"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("p",{parentName:"li"},"By default, Doris maps columns sequentially, so column 4 in the source file is automatically mapped to column ",(0,l.yg)("inlineCode",{parentName:"p"},"k4")," in the table.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Filter the column-transformed data"),(0,l.yg)("p",{parentName:"li"},"Suppose there are 4 columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," in the table. In the ",(0,l.yg)("strong",{parentName:"p"},"column conversion")," example, we converted province names to ids. Here we want to filter out the data with id 3. Then the conversion and filter conditions are as follows:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\nwhere k3 != 3\n')),(0,l.yg)("p",{parentName:"li"},"The data in the final table is as follows:"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("p",{parentName:"li"},"Here we see that the column value when performing the filter is the final column value after mapping and transformation, not the original data.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Multi-condition filtering"),(0,l.yg)("p",{parentName:"li"},"Suppose there are 4 columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," in the table. We want to filter out the data whose ",(0,l.yg)("inlineCode",{parentName:"p"},"k1")," column is ",(0,l.yg)("inlineCode",{parentName:"p"},"null"),", and at the same time filter out the data whose ",(0,l.yg)("inlineCode",{parentName:"p"},"k4")," column is less than 1.2, the filter conditions are as follows:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"where k1 is not null and k4 >= 1.2\n")),(0,l.yg)("p",{parentName:"li"},"The data in the final table is as follows:"),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")))))),(0,l.yg)("h3",{id:"data-quality-issues-and-filtering-thresholds"},"Data Quality Issues and Filtering Thresholds"),(0,l.yg)("p",null,"The rows of data processed in an import job can be divided into the following three types:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Filtered Rows"),(0,l.yg)("p",{parentName:"li"},"Data that was filtered out due to poor data quality. Unqualified data quality includes data format problems such as type error, precision error, long string length, mismatched file column number, and data rows that are filtered out because there is no corresponding partition.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Unselected Rows"),(0,l.yg)("p",{parentName:"li"},"This part is the row of data that was filtered out due to ",(0,l.yg)("inlineCode",{parentName:"p"},"preceding filter")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"where")," column filter conditions.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Loaded Rows"),(0,l.yg)("p",{parentName:"li"},"Rows of data being imported correctly."))),(0,l.yg)("p",null,"Doris's import task allows the user to set a maximum error rate (",(0,l.yg)("inlineCode",{parentName:"p"},"max_filter_ratio"),"). If the error rate of the imported data is below the threshold, those erroneous rows will be ignored and other correct data will be imported."),(0,l.yg)("p",null,"The error rate is calculated as:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"#Filtered Rows / (#Filtered Rows + #Loaded Rows)\n")),(0,l.yg)("p",null,"That is to say, ",(0,l.yg)("inlineCode",{parentName:"p"},"Unselected Rows")," will not participate in the calculation of the error rate."))}s.isMDXComponent=!0}}]);