"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68218],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var a=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(y,l(l({ref:n},p),{},{components:t})):a.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(45072),i=(t(11504),t(95788));const r={title:"Native User Defined Function",language:"en"},l=void 0,o={unversionedId:"ecosystem/udf/native-user-defined-function",id:"version-2.0/ecosystem/udf/native-user-defined-function",title:"Native User Defined Function",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/ecosystem/udf/native-user-defined-function.md",sourceDirName:"ecosystem/udf",slug:"/ecosystem/udf/native-user-defined-function",permalink:"/docs/ecosystem/udf/native-user-defined-function",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Native User Defined Function",language:"en"},sidebar:"docs",previous:{title:"Java UDF",permalink:"/docs/ecosystem/udf/java-user-defined-function"},next:{title:"Remote User Defined Aggregation Function Service",permalink:"/docs/ecosystem/udaf/remote-user-defined-aggregation-function"}},s={},d=[{value:"Writing UDF functions",id:"writing-udf-functions",level:2},{value:"Writing functions",id:"writing-functions",level:3},{value:"Non-variable parameters",id:"non-variable-parameters",level:4},{value:"variable parameter",id:"variable-parameter",level:4},{value:"Type correspondence",id:"type-correspondence",level:4},{value:"Compile UDF function",id:"compile-udf-function",level:2},{value:"Compile Doris",id:"compile-doris",level:3},{value:"Writing UDF compilation files",id:"writing-udf-compilation-files",level:3},{value:"Execute compilation",id:"execute-compilation",level:3},{value:"Compilation result",id:"compilation-result",level:3},{value:"Create UDF function",id:"create-udf-function",level:2},{value:"Use UDF",id:"use-udf",level:2},{value:"Delete UDF",id:"delete-udf",level:2}],p={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,a.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"native-user-defined-function"},"Native User Defined Function"),(0,i.yg)("p",null,"UDF is mainly suitable for scenarios where the analytical capabilities that users need do not possess. Users can implement custom functions according to their own needs, and register with Doris through the UDF framework to expand Doris' capabilities and solve user analysis needs."),(0,i.yg)("p",null,"There are two types of analysis requirements that UDF can meet: UDF and UDAF. UDF in this article refers to both."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"UDF: User-defined function, this function will operate on a single line and output a single line result. When users use UDFs for queries, each row of data will eventually appear in the result set. Typical UDFs are string operations such as concat()."),(0,i.yg)("li",{parentName:"ol"},"UDAF: User-defined aggregation function. This function operates on multiple lines and outputs a single line of results. When the user uses UDAF in the query, each group of data after grouping will finally calculate a value and expand the result set. A typical UDAF is the set operation sum(). Generally speaking, UDAF will be used together with group by.")),(0,i.yg)("p",null,"This document mainly describes how to write a custom UDF function and how to use it in Doris."),(0,i.yg)("p",null,"If users use the UDF function and extend Doris' function analysis, and want to contribute their own UDF functions back to the Doris community for other users, please see the document ",(0,i.yg)("a",{parentName:"p",href:"/docs/ecosystem/udf/contribute-udf"},"Contribute UDF"),"."),(0,i.yg)("h2",{id:"writing-udf-functions"},"Writing UDF functions"),(0,i.yg)("p",null,"Before using UDF, users need to write their own UDF functions under Doris' UDF framework. In the ",(0,i.yg)("inlineCode",{parentName:"p"},"contrib/udf/src/udf_samples/udf_sample.h|cpp")," file is a simple UDF Demo."),(0,i.yg)("p",null,"Writing a UDF function requires the following steps."),(0,i.yg)("h3",{id:"writing-functions"},"Writing functions"),(0,i.yg)("p",null,"Create the corresponding header file and CPP file, and implement the logic you need in the CPP file. Correspondence between the implementation function format and UDF in the CPP file."),(0,i.yg)("p",null,"Users can put their own source code in a folder. Taking udf_sample as an example, the directory structure is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\u2514\u2500\u2500 udf_samples\n  \u251c\u2500\u2500 uda_sample.cpp\n  \u251c\u2500\u2500 uda_sample.h\n  \u251c\u2500\u2500 udf_sample.cpp\n  \u2514\u2500\u2500 udf_sample.h\n")),(0,i.yg)("h4",{id:"non-variable-parameters"},"Non-variable parameters"),(0,i.yg)("p",null,"For UDFs with non-variable parameters, the correspondence between the two is straightforward.\nFor example, the UDF of ",(0,i.yg)("inlineCode",{parentName:"p"},"INT MyADD(INT, INT)")," will correspond to ",(0,i.yg)("inlineCode",{parentName:"p"},"IntVal AddUdf(FunctionContext* context, const IntVal& arg1, const IntVal& arg2)"),"."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"AddUdf")," can be any name, as long as it is specified when creating UDF."),(0,i.yg)("li",{parentName:"ol"},"The first parameter in the implementation function is always ",(0,i.yg)("inlineCode",{parentName:"li"},"FunctionContext*"),". The implementer can obtain some query-related content through this structure, and apply for some memory to be used. The specific interface used can refer to the definition in ",(0,i.yg)("inlineCode",{parentName:"li"},"udf/udf.h"),"."),(0,i.yg)("li",{parentName:"ol"},"In the implementation function, the second parameter needs to correspond to the UDF parameter one by one, for example, ",(0,i.yg)("inlineCode",{parentName:"li"},"IntVal")," corresponds to ",(0,i.yg)("inlineCode",{parentName:"li"},"INT")," type. All types in this part must be referenced with ",(0,i.yg)("inlineCode",{parentName:"li"},"const"),"."),(0,i.yg)("li",{parentName:"ol"},"The return parameter must correspond to the type of UDF parameter.")),(0,i.yg)("h4",{id:"variable-parameter"},"variable parameter"),(0,i.yg)("p",null,"For variable parameters, you can refer to the following example, corresponding to UDF",(0,i.yg)("inlineCode",{parentName:"p"},"String md5sum(String, ...)"),"\nThe implementation function is ",(0,i.yg)("inlineCode",{parentName:"p"},"StringVal md5sumUdf(FunctionContext* ctx, int num_args, const StringVal* args)")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"md5sumUdf")," can also be changed arbitrarily, just specify it when creating."),(0,i.yg)("li",{parentName:"ol"},"The first parameter is the same as the non-variable parameter function, and the passed in is a ",(0,i.yg)("inlineCode",{parentName:"li"},"FunctionContext*"),"."),(0,i.yg)("li",{parentName:"ol"},"The variable parameter part consists of two parts. First, an integer is passed in, indicating that there are several parameters behind. An array of variable parameter parts is passed in later.")),(0,i.yg)("h4",{id:"type-correspondence"},"Type correspondence"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"UDF Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Argument Type"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"TinyInt"),(0,i.yg)("td",{parentName:"tr",align:null},"TinyIntVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"SmallInt"),(0,i.yg)("td",{parentName:"tr",align:null},"SmallIntVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Int"),(0,i.yg)("td",{parentName:"tr",align:null},"IntVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"BigInt"),(0,i.yg)("td",{parentName:"tr",align:null},"BigIntVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"LargeInt"),(0,i.yg)("td",{parentName:"tr",align:null},"LargeIntVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Float"),(0,i.yg)("td",{parentName:"tr",align:null},"FloatVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Double"),(0,i.yg)("td",{parentName:"tr",align:null},"DoubleVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Date"),(0,i.yg)("td",{parentName:"tr",align:null},"DateTimeVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Datetime"),(0,i.yg)("td",{parentName:"tr",align:null},"DateTimeVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Char"),(0,i.yg)("td",{parentName:"tr",align:null},"StringVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Varchar"),(0,i.yg)("td",{parentName:"tr",align:null},"StringVal")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Decimal"),(0,i.yg)("td",{parentName:"tr",align:null},"DecimalVal")))),(0,i.yg)("h2",{id:"compile-udf-function"},"Compile UDF function"),(0,i.yg)("p",null,"Since the UDF implementation relies on Doris' UDF framework, the first step in compiling UDF functions is to compile Doris, that is, the UDF framework."),(0,i.yg)("p",null,"After the compilation is completed, the static library file of the UDF framework will be generated. Then introduce the UDF framework dependency and compile the UDF."),(0,i.yg)("h3",{id:"compile-doris"},"Compile Doris"),(0,i.yg)("p",null,"Running ",(0,i.yg)("inlineCode",{parentName:"p"},"sh build.sh")," in the root directory of Doris will generate a static library file of the UDF framework ",(0,i.yg)("inlineCode",{parentName:"p"},"headers|libs")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"output/udf/")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 output\n\u2502 \u2514\u2500\u2500 udf\n\u2502 \u251c\u2500\u2500 include\n\u2502 \u2502 \u251c\u2500\u2500 uda_test_harness.h\n\u2502 \u2502 \u2514\u2500\u2500 udf.h\n\u2502 \u2514\u2500\u2500 lib\n\u2502 \u2514\u2500\u2500 libDorisUdf.a\n\n")),(0,i.yg)("h3",{id:"writing-udf-compilation-files"},"Writing UDF compilation files"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Prepare thirdparty"),(0,i.yg)("p",{parentName:"li"},"The thirdparty folder is mainly used to store thirdparty libraries that users' UDF functions depend on, including header files and static libraries. It must contain the two files ",(0,i.yg)("inlineCode",{parentName:"p"},"udf.h")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"libDorisUdf.a")," in the dependent Doris UDF framework."),(0,i.yg)("p",{parentName:"li"},"Taking udf_sample as an example here, the source code is stored in the user's own ",(0,i.yg)("inlineCode",{parentName:"p"},"udf_samples")," directory. Create a thirdparty folder in the same directory to store the static library. The directory structure is as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 thirdparty\n\u2502  \u2502\u2500\u2500 include\n\u2502  \u2502 \u2514\u2500\u2500 udf.h\n\u2502  \u2514\u2500\u2500 lib\n\u2502    \u2514\u2500\u2500 libDorisUdf.a\n\u2514\u2500\u2500 udf_samples\n\n")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"udf.h")," is the UDF frame header file. The storage path is ",(0,i.yg)("inlineCode",{parentName:"p"},"doris/output/udf/include/udf.h"),". Users need to copy the header file in the Doris compilation output to their include folder of ",(0,i.yg)("inlineCode",{parentName:"p"},"thirdparty"),"."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"libDorisUdf.a")," is a static library of UDF framework. After Doris is compiled, the file is stored in ",(0,i.yg)("inlineCode",{parentName:"p"},"doris/output/udf/lib/libDorisUdf.a"),". The user needs to copy the file to the lib folder of his ",(0,i.yg)("inlineCode",{parentName:"p"},"thirdparty"),"."),(0,i.yg)("p",{parentName:"li"},"*Note: The static library of UDF framework will not be generated until Doris is compiled.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Prepare to compile UDF's CMakeFiles.txt"),(0,i.yg)("p",{parentName:"li"},"CMakeFiles.txt is used to declare how UDF functions are compiled. Stored in the source code folder, level with user code. Here, taking udf_samples as an example, the directory structure is as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 thirdparty\n\u2514\u2500\u2500 udf_samples\n  \u251c\u2500\u2500 CMakeLists.txt\n  \u251c\u2500\u2500 uda_sample.cpp\n  \u251c\u2500\u2500 uda_sample.h\n  \u251c\u2500\u2500 udf_sample.cpp\n  \u2514\u2500\u2500 udf_sample.h\n")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Need to show declaration reference ",(0,i.yg)("inlineCode",{parentName:"li"},"libDorisUdf.a")),(0,i.yg)("li",{parentName:"ul"},"Declare ",(0,i.yg)("inlineCode",{parentName:"li"},"udf.h")," header file location")))),(0,i.yg)("p",null,"Take udf_sample as an example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'# Include udf\ninclude_directories(../thirdparty/include)\n\n# Set all libraries\nadd_library(udf STATIC IMPORTED)\nset_target_properties(udf PROPERTIES IMPORTED_LOCATION ../thirdparty/lib/libDorisUdf.a)\n\n# where to put generated libraries\nset(LIBRARY_OUTPUT_PATH "src/udf_samples")\n\n# where to put generated binaries\nset(EXECUTABLE_OUTPUT_PATH "src/udf_samples")\n\nadd_library(udfsample SHARED udf_sample.cpp)\n  target_link_libraries(udfsample\n  udf\n  -static-libstdc++\n  -static-libgcc\n)\n\nadd_library(udasample SHARED uda_sample.cpp)\n  target_link_libraries(udasample\n  udf\n  -static-libstdc++\n  -static-libgcc\n)\n')),(0,i.yg)("p",null,"If the user's UDF function also depends on other thirdparty libraries, you need to declare include, lib, and add dependencies in ",(0,i.yg)("inlineCode",{parentName:"p"},"add_library"),"."),(0,i.yg)("p",null,"The complete directory structure after all files are prepared is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"    \u251c\u2500\u2500 thirdparty\n    \u2502 \u2502\u2500\u2500 include\n    \u2502 \u2502 \u2514\u2500\u2500 udf.h\n    \u2502 \u2514\u2500\u2500 lib\n    \u2502 \u2514\u2500\u2500 libDorisUdf.a\n    \u2514\u2500\u2500 udf_samples\n      \u251c\u2500\u2500 CMakeLists.txt\n      \u251c\u2500\u2500 uda_sample.cpp\n      \u251c\u2500\u2500 uda_sample.h\n      \u251c\u2500\u2500 udf_sample.cpp\n      \u2514\u2500\u2500 udf_sample.h\n")),(0,i.yg)("p",null,"Prepare the above files and you can compile UDF directly"),(0,i.yg)("h3",{id:"execute-compilation"},"Execute compilation"),(0,i.yg)("p",null,"Create a build folder under the udf_samples folder to store the compilation output."),(0,i.yg)("p",null,"Run the command ",(0,i.yg)("inlineCode",{parentName:"p"},"cmake ../")," in the build folder to generate a Makefile, and execute make to generate the corresponding dynamic library."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 thirdparty\n\u251c\u2500\u2500 udf_samples\n  \u2514\u2500\u2500 build\n")),(0,i.yg)("h3",{id:"compilation-result"},"Compilation result"),(0,i.yg)("p",null,"After the compilation is completed, the UDF dynamic link library is successfully generated. Under ",(0,i.yg)("inlineCode",{parentName:"p"},"build/src/"),", taking udf_samples as an example, the directory structure is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 thirdparty\n\u251c\u2500\u2500 udf_samples\n  \u2514\u2500\u2500 build\n    \u2514\u2500\u2500 src\n      \u2514\u2500\u2500 udf_samples\n        \u251c\u2500\u2500 libudasample.so\n\xa0\xa0      \u2514\u2500\u2500 libudfsample.so\n\n")),(0,i.yg)("h2",{id:"create-udf-function"},"Create UDF function"),(0,i.yg)("p",null,"After following the above steps, you can get the UDF dynamic library (that is, the ",(0,i.yg)("inlineCode",{parentName:"p"},".so")," file in the compilation result). You need to put this dynamic library in a location that can be accessed through the HTTP protocol."),(0,i.yg)("p",null,"Then log in to the Doris system and create a UDF function in the mysql-client through the ",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE FUNCTION")," syntax. You need to have ADMIN authority to complete this operation. At this time, there will be a UDF created in the Doris system."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'CREATE [AGGREGATE] FUNCTION\nname ([argtype][,...])\n[RETURNS] rettype\nPROPERTIES (["key"="value"][,...])\n')),(0,i.yg)("p",null,"Description:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},'"Symbol" in PROPERTIES means that the symbol corresponding to the entry function is executed. This parameter must be set. You can get the corresponding symbol through the ',(0,i.yg)("inlineCode",{parentName:"li"},"nm")," command, for example, ",(0,i.yg)("inlineCode",{parentName:"li"},"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_")," obtained by ",(0,i.yg)("inlineCode",{parentName:"li"},"nm libudfsample.so | grep AddUdf")," is the corresponding symbol."),(0,i.yg)("li",{parentName:"ol"},"The object_file in PROPERTIES indicates where it can be downloaded to the corresponding dynamic library. This parameter must be set."),(0,i.yg)("li",{parentName:"ol"},"name: A function belongs to a certain DB, and the name is in the form of ",(0,i.yg)("inlineCode",{parentName:"li"},"dbName"),".",(0,i.yg)("inlineCode",{parentName:"li"},"funcName"),". When ",(0,i.yg)("inlineCode",{parentName:"li"},"dbName")," is not explicitly specified, the db where the current session is located is used as ",(0,i.yg)("inlineCode",{parentName:"li"},"dbName"),".")),(0,i.yg)("p",null,"For specific use, please refer to ",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE FUNCTION")," for more detailed information."),(0,i.yg)("h2",{id:"use-udf"},"Use UDF"),(0,i.yg)("p",null,"Users must have the ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT")," permission of the corresponding database to use UDF/UDAF."),(0,i.yg)("p",null,"The use of UDF is consistent with ordinary function methods. The only difference is that the scope of built-in functions is global, and the scope of UDF is internal to DB. When the link session is inside the data, directly using the UDF name will find the corresponding UDF inside the current DB. Otherwise, the user needs to display the specified UDF database name, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"dbName"),".",(0,i.yg)("inlineCode",{parentName:"p"},"funcName"),"."),(0,i.yg)("p",null,"In current version, vectorization needs to be turned off to use native udf  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"set enable_vectorized_engine = false;\n")),(0,i.yg)("h2",{id:"delete-udf"},"Delete UDF"),(0,i.yg)("p",null,"When you no longer need UDF functions, you can delete a UDF function by the following command, you can refer to ",(0,i.yg)("inlineCode",{parentName:"p"},"DROP FUNCTION"),"."))}c.isMDXComponent=!0}}]);