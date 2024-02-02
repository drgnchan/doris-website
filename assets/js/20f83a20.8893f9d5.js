"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[23604],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>m});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,m=p["".concat(s,".").concat(c)]||p[c]||g[c]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(45072),r=(n(11504),n(95788));const i={title:"Java UDF",language:"en"},o=void 0,l={unversionedId:"ecosystem/udf/java-user-defined-function",id:"version-2.0/ecosystem/udf/java-user-defined-function",title:"Java UDF",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/ecosystem/udf/java-user-defined-function.md",sourceDirName:"ecosystem/udf",slug:"/ecosystem/udf/java-user-defined-function",permalink:"/docs/ecosystem/udf/java-user-defined-function",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Java UDF",language:"en"},sidebar:"docs",previous:{title:"Remote User Defined Function Service",permalink:"/docs/ecosystem/udf/remote-user-defined-function"},next:{title:"Native User Defined Function",permalink:"/docs/ecosystem/udf/native-user-defined-function"}},s={},u=[{value:"Type correspondence",id:"type-correspondence",level:3},{value:"Write UDF functions",id:"write-udf-functions",level:2},{value:"Create UDF",id:"create-udf",level:2},{value:"Create UDAF",id:"create-udaf",level:2},{value:"Use UDF",id:"use-udf",level:2},{value:"Delete UDF",id:"delete-udf",level:2},{value:"Example",id:"example",level:2},{value:"Instructions",id:"instructions",level:2}],d={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"java-udf"},"Java UDF"),(0,r.yg)("version",{since:"1.2.0"},(0,r.yg)("p",null,"Java UDF")),(0,r.yg)("p",null,"Java UDF provides users with a Java interface written in UDF to facilitate the execution of user-defined functions in Java language. Compared with native UDF implementation, Java UDF has the following advantages and limitations:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The advantages")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Compatibility: Using Java UDF can be compatible with different Doris versions, so when upgrading Doris version, Java UDF does not need additional migration. At the same time, Java UDF also follows the same programming specifications as hive / spark and other engines, so that users can directly move Hive / Spark UDF jar to Doris."),(0,r.yg)("li",{parentName:"ul"},"Security: The failure or crash of Java UDF execution will only cause the JVM to report an error, not the Doris process to crash."),(0,r.yg)("li",{parentName:"ul"},"Flexibility: In Java UDF, users can package the third-party dependencies together in the user jar.")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Restrictions on use")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Performance: Compared with native UDF, Java UDF will bring additional JNI overhead, but through batch execution, we have minimized the JNI overhead as much as possible."),(0,r.yg)("li",{parentName:"ul"},"Vectorized engine: Java UDF is only supported on vectorized engine now.")),(0,r.yg)("h3",{id:"type-correspondence"},"Type correspondence"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"UDF Argument Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bool"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TinyInt"),(0,r.yg)("td",{parentName:"tr",align:null},"Byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SmallInt"),(0,r.yg)("td",{parentName:"tr",align:null},"Short")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BigInt"),(0,r.yg)("td",{parentName:"tr",align:null},"Long")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LargeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"BigInteger")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Float"),(0,r.yg)("td",{parentName:"tr",align:null},"Float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"Double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"LocalDate")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"LocalDateTime")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"BigDecimal")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"array<Type>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ArrayList<Type>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"map<Type1,Type2>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"HashMap<Type1,Type2>"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Array/Map types can nested other types, Eg: In Doris: ",(0,r.yg)("inlineCode",{parentName:"li"},"array<array<int>>")," corresponds to JAVA UDF Argument Type: ",(0,r.yg)("inlineCode",{parentName:"li"},"ArrayList<ArrayList<Integer>>"),", and so on.")),(0,r.yg)("h2",{id:"write-udf-functions"},"Write UDF functions"),(0,r.yg)("p",null,"This section mainly introduces how to develop a Java UDF. Samples for the Java version are provided under ",(0,r.yg)("inlineCode",{parentName:"p"},"samples/doris-demo/java-udf-demo/")," for your reference, Check it out ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/samples/doris-demo/java-udf-demo"},"here")),(0,r.yg)("p",null,"To use Java UDF, the main entry of UDF must be the ",(0,r.yg)("inlineCode",{parentName:"p"},"evaluate")," function. This is consistent with other engines such as Hive. In the example of ",(0,r.yg)("inlineCode",{parentName:"p"},"AddOne"),", we have completed the operation of adding an integer as the UDF."),(0,r.yg)("p",null,"It is worth mentioning that this example is not only the Java UDF supported by Doris, but also the UDF supported by Hive, that's to say, for users, Hive UDF can be directly migrated to Doris."),(0,r.yg)("h2",{id:"create-udf"},"Create UDF"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION \nname ([,...])\n[RETURNS] rettype\nPROPERTIES (["key"="value"][,...])  \n')),(0,r.yg)("p",null,"Instructions:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"symbol")," in properties represents the class name containing UDF classes. This parameter must be set."),(0,r.yg)("li",{parentName:"ol"},"The jar package containing UDF represented by ",(0,r.yg)("inlineCode",{parentName:"li"},"file")," in properties must be set."),(0,r.yg)("li",{parentName:"ol"},"The UDF call type represented by ",(0,r.yg)("inlineCode",{parentName:"li"},"type")," in properties is native by default. When using java UDF, it is transferred to ",(0,r.yg)("inlineCode",{parentName:"li"},"Java_UDF"),"."),(0,r.yg)("li",{parentName:"ol"},"In PROPERTIES ",(0,r.yg)("inlineCode",{parentName:"li"},"always_nullable")," indicates whether there may be a NULL value in the UDF return result. It is an optional parameter. The default value is true."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"name"),": A function belongs to a DB and name is of the form",(0,r.yg)("inlineCode",{parentName:"li"},"dbName"),".",(0,r.yg)("inlineCode",{parentName:"li"},"funcName"),". When ",(0,r.yg)("inlineCode",{parentName:"li"},"dbName")," is not explicitly specified, the db of the current session is used",(0,r.yg)("inlineCode",{parentName:"li"},"dbName"),".")),(0,r.yg)("p",null,"Sample\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION java_udf_add_one(int) RETURNS int PROPERTIES (\n    "file"="file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol"="org.apache.doris.udf.AddOne",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'"file"=" http://IP:port/udf -code. Jar ", you can also use http to download jar packages in a multi machine environment.')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'The "always_nullable" is optional attribute, if there is special treatment for the NULL value in the calculation, it is determined that the result will not return NULL, and it can be set to false, so that the performance may be better in the whole calculation process.')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If you use the local path method, the jar package that the database driver depends on, the FE and BE nodes must be placed here"))),(0,r.yg)("h2",{id:"create-udaf"},"Create UDAF"),(0,r.yg)("br",null),"When using Java code to write UDAF, there are some functions that must be implemented (mark required) and an inner class State, which will be explained with a specific example below. The following SimpleDemo will implement a simple function similar to sum, the input parameter is INT, and the output parameter is INT",(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-JAVA"},"package org.apache.doris.udf.demo;\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.io.IOException;\n\npublic class SimpleDemo  {\n    //Need an inner class to store data\n    /*required*/\n    public static class State {\n        /*some variables if you need */\n        public int sum = 0;\n    }\n\n    /*required*/\n    public State create() {\n        /* here could do some init work if needed */\n        return new State();\n    }\n\n    /*required*/\n    public void destroy(State state) {\n        /* here could do some destroy work if needed */\n    }\n\n    /*Not Required*/\n    public void reset(State state) {\n        /*if you want this udaf function can work with window function.*/\n        /*Must impl this, it will be reset to init state after calculate every window frame*/\n        state.sum = 0;\n    }\n\n    /*required*/\n    //first argument is State, then other types your input\n    public void add(State state, Integer val) throws Exception {\n        /* here doing update work when input data*/\n        if (val != null) {\n            state.sum += val;\n        }\n    }\n\n    /*required*/\n    public void serialize(State state, DataOutputStream out)  {\n        /* serialize some data into buffer */\n        try {\n            out.writeInt(state.sum);\n        } catch (Exception e) {\n            /* Do not throw exceptions */\n            log.info(e.getMessage());\n        }\n    }\n\n    /*required*/\n    public void deserialize(State state, DataInputStream in)  {\n        /* deserialize get data from buffer before you put */\n        int val = 0;\n        try {\n            val = in.readInt();\n        } catch (Exception e) {\n            /* Do not throw exceptions */\n            log.info(e.getMessage());\n        }\n        state.sum = val;\n    }\n\n    /*required*/\n    public void merge(State state, State rhs) throws Exception {\n        /* merge data from state */\n        state.sum += rhs.sum;\n    }\n\n    /*required*/\n    //return Type you defined\n    public Integer getValue(State state) throws Exception {\n        /* return finally result */\n        return state.sum;\n    }\n}\n\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION simple_sum(INT) RETURNS INT PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.SimpleDemo",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-JAVA"},'package org.apache.doris.udf.demo;\n\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.math.BigDecimal;\nimport java.util.Arrays;\nimport java.util.logging.Logger;\n\n/*UDAF for calculating the median*/\npublic class MedianUDAF {\n    Logger log = Logger.getLogger("MedianUDAF");\n\n    // State storage\n    public static class State {\n        // Precision of the result\n        int scale = 0;\n        // Whether this is the first time to execute add() for the data under a certain aggregation condition of a certain tablet\n        boolean isFirst = true;\n        //Data storage\n        public StringBuilder stringBuilder;\n    }\n\n    //State initialization\n    public State create() {\n        State state = new State();\n        //Pre-initialize based on the amount of data to be aggregated for each aggregation condition under each tablet, for improved performance\n        state.stringBuilder = new StringBuilder(1000);\n        return state;\n    }\n\n\n    // Handle the data for each unit under each aggregation condition for each tablet\n    public void add(State state, Double val, int scale) {\n        try {\n            if (val != null && state.isFirst) {\n                state.stringBuilder.append(scale).append(",").append(val).append(",");\n                state.isFirst = false;\n            } else if (val != null) {\n                state.stringBuilder.append(val).append(",");\n            }\n        } catch (Exception e) {\n            // If it is not guaranteed that there will be no exceptions, it is recommended to maximize the exception capture for each method, as the processing of java-thrown exceptions is currently not supported\n            log.info("Exception encountered while retrieving data: " + e.getMessage());\n        }\n    }\n\n    // Output the data after processing for aggregation\n    public void serialize(State state, DataOutputStream out) {\n        try {\n            // Only DataOutputStream is currently provided, if object serialization is required, consider methods such as concatenating strings, converting to json, serializing to byte arrays, etc.\n            // If you want to serialize the State object, you may need to implement the serialization interface for the inner class State yourself\n            // In the end, it will be transmitted through DataOutputStream\n            out.writeUTF(state.stringBuilder.toString());\n        } catch (Exception e) {\n            log.info("Exception encountered while serializing data:" + e.getMessage());\n        }\n    }\n\n    // Retrieve the data output by each data processing unit\n    public void deserialize(State state, DataInputStream in) {\n        try {\n            String string = in.readUTF();\n            state.scale = Integer.parseInt(String.valueOf(string.charAt(0)));\n            StringBuilder stringBuilder = new StringBuilder(string.substring(2));\n            state.stringBuilder = stringBuilder;\n        } catch (Exception e) {\n            log.info("Exception encountered while deserializing data: " + e.getMessage());\n        }\n    }\n\n    // Merge the processing results of data under a certain key according to the aggregation condition, where state1 is the initialized instance for the first merge of each key\n    public void merge(State state1, State state2) {\n        try {\n            state1.scale = state2.scale;\n            state1.stringBuilder.append(state2.stringBuilder.toString());\n        } catch (Exception e) {\n            log.info("Exception encountered while merging results: " + e.getMessage());\n        }\n    }\n\n    // Aggregate the data for each key after merging and output the final result\n    public Double getValue(State state) {\n        try {\n            String[] strings = state.stringBuilder.toString( ).split(",");\n            double[] doubles = new double[strings.length + 1];\n            doubles = Arrays.stream(strings).mapToDouble(Double::parseDouble).toArray();\n\n            Arrays.sort(doubles);\n            double n = doubles.length - 1;\n            double index = n * 0.5;\n\n            int low = (int) Math.floor(index);\n            int high = (int) Math.ceil(index);\n\n            double value = low == high ? (doubles[low] + doubles[high]) * 0.5 : doubles[high];\n\n            BigDecimal decimal = new BigDecimal(value);\n            return decimal.setScale(state.scale, BigDecimal.ROUND_HALF_UP).doubleValue();\n        } catch (Exception e) {\n            log.info("Exception encountered while calculating result\uff1a" + e.getMessage());\n        }\n        return 0.0;\n    }\n\n    //This method is executed after each processing unit is completed\n    public void destroy(State state) {\n    }\n\n}\n\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION middle_quantiles(DOUBLE,INT) RETURNS DOUBLE PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.MiddleNumberUDAF",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'The implemented jar package can be stored at local or in a remote server and downloaded via http, And each BE node must be able to obtain the jar package;\nOtherwise, the error status message "Couldn\'t open file..." will be returned')),(0,r.yg)("p",null,"Currently, UDTF are not supported."),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"use-udf"},"Use UDF"),(0,r.yg)("p",null,"Users must have the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," permission of the corresponding database to use UDF/UDAF."),(0,r.yg)("p",null,"The use of UDF is consistent with ordinary function methods. The only difference is that the scope of built-in functions is global, and the scope of UDF is internal to DB. When the link session is inside the data, directly using the UDF name will find the corresponding UDF inside the current DB. Otherwise, the user needs to display the specified UDF database name, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"dbName"),".",(0,r.yg)("inlineCode",{parentName:"p"},"funcName"),"."),(0,r.yg)("h2",{id:"delete-udf"},"Delete UDF"),(0,r.yg)("p",null,"When you no longer need UDF functions, you can delete a UDF function by the following command, you can refer to ",(0,r.yg)("inlineCode",{parentName:"p"},"DROP FUNCTION"),"."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Examples of Java UDF are provided in the ",(0,r.yg)("inlineCode",{parentName:"p"},"samples/doris-demo/java-udf-demo/")," directory. See the ",(0,r.yg)("inlineCode",{parentName:"p"},"README.md")," in each directory for details on how to use it, Check it out ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/samples/doris-demo/java-udf-demo"},"here")),(0,r.yg)("h2",{id:"instructions"},"Instructions"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Complex data types (HLL, bitmap) are not supported."),(0,r.yg)("li",{parentName:"ol"},"Currently, users are allowed to specify the maximum heap size of the JVM themselves. The configuration item is jvm",(0,r.yg)("em",{parentName:"li"}," max")," heap_ size. The configuration item is in the global configuration file 'be.conf' under the installation directory of the BE. The default value is 512M. If data aggregation is required, it is recommended to increase the value to improve performance and reduce the risk of memory overflow."),(0,r.yg)("li",{parentName:"ol"},"The udf of char type needs to use the String type when creating a function."),(0,r.yg)("li",{parentName:"ol"},"Due to the problem that the jvm loads classes with the same name, do not use multiple classes with the same name as udf implementations at the same time. If you want to update the udf of a class with the same name, you need to restart be to reload the classpath.")))}g.isMDXComponent=!0}}]);