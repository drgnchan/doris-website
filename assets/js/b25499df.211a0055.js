"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[85160],{95788:(e,t,i)=>{i.d(t,{Iu:()=>l,yg:()=>f});var a=i(11504);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(i),u=n,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||r;return i?a.createElement(f,o(o({ref:t},l),{},{components:i})):a.createElement(f,o({ref:t},l))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[s]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<r;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},18816:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=i(45072),n=(i(11504),i(95788));const r={title:"Hive Bitmap UDF",language:"en"},o=void 0,p={unversionedId:"ecosystem/hive-bitmap-udf",id:"version-1.2/ecosystem/hive-bitmap-udf",title:"Hive Bitmap UDF",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/ecosystem/hive-bitmap-udf.md",sourceDirName:"ecosystem",slug:"/ecosystem/hive-bitmap-udf",permalink:"/docs/1.2/ecosystem/hive-bitmap-udf",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Hive Bitmap UDF",language:"en"},sidebar:"docs",previous:{title:"CloudCanal Data Import",permalink:"/docs/1.2/ecosystem/cloudcanal"},next:{title:"Contribute UDF",permalink:"/docs/1.2/ecosystem/udf/contribute-udf"}},d={},c=[{value:"How To Use",id:"how-to-use",level:2},{value:"Create Bitmap type table in Hive",id:"create-bitmap-type-table-in-hive",level:3},{value:"Hive Bitmap UDF Usage\uff1a",id:"hive-bitmap-udf-usage",level:3},{value:"Hive Bitmap UDF  Description",id:"hive-bitmap-udf--description",level:3},{value:"Hive Bitmap import into Doris",id:"hive-bitmap-import-into-doris",level:2}],l={toc:c},s="wrapper";function m(e){let{components:t,...i}=e;return(0,n.yg)(s,(0,a.c)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"hive-udf"},"Hive UDF"),(0,n.yg)("p",null," Hive Bitmap UDF provides UDFs for generating bitmap and bitmap operations in hive tables. The bitmap in Hive is exactly the same as the Doris bitmap. The bitmap in Hive can be imported into doris through (spark bitmap load)."),(0,n.yg)("p",null," the main purpose:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Reduce the time of importing data into doris, and remove processes such as dictionary building and bitmap pre-aggregation;"),(0,n.yg)("li",{parentName:"ol"},"Save hive storage, use bitmap to compress data, reduce storage cost;"),(0,n.yg)("li",{parentName:"ol"},"Provide flexible bitmap operations in hive, such as: intersection, union, and difference operations, and the calculated bitmap can also be directly imported into doris; imported into doris;")),(0,n.yg)("h2",{id:"how-to-use"},"How To Use"),(0,n.yg)("h3",{id:"create-bitmap-type-table-in-hive"},"Create Bitmap type table in Hive"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"-- Example: Create Hive Bitmap Table\nCREATE TABLE IF NOT EXISTS `hive_bitmap_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'bitmap'\n) comment  'comment'\n\n-- Example\uff1aCreate Hive Table\nCREATE TABLE IF NOT EXISTS `hive_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` int       COMMENT ''\n) comment  'comment'\n")),(0,n.yg)("h3",{id:"hive-bitmap-udf-usage"},"Hive Bitmap UDF Usage\uff1a"),(0,n.yg)("p",null,"   Hive Bitmap UDF used in Hive/Spark,First, you need to compile fe to get hive-udf-jar-with-dependencies.jar.\nCompilation preparation:If you have compiled the ldb source code, you can directly compile fe,If you have compiled the ldb source code, you can compile it directly. If you have not compiled the ldb source code, you need to manually install thrift\uff0c\nReference:",(0,n.yg)("a",{parentName:"p",href:"/community/developer-guide/fe-idea-dev.md"},"Setting Up dev env for FE"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"--clone doris code\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n--install thrift\n--Enter the fe directory\ncd fe\n--Execute the maven packaging command\uff08All sub modules of fe will be packaged\uff09\nmvn package -Dmaven.test.skip=true\n--You can also just package the hive-udf module\nmvn package -pl hive-udf -am -Dmaven.test.skip=true\n")),(0,n.yg)("p",null,"After packaging and compiling, enter the hive-udf directory and there will be a target directory,There will be hive-udf-jar-with-dependencies.jar package"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"-- Load the Hive Bitmap Udf jar package (Upload the compiled hive-udf jar package to HDFS)\nadd jar hdfs://node:9001/hive-udf-jar-with-dependencies.jar;\n-- Create Hive Bitmap UDAF function\ncreate temporary function to_bitmap as 'org.apache.doris.udf.ToBitmapUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_union as 'org.apache.doris.udf.BitmapUnionUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n-- Create Hive Bitmap UDF function\ncreate temporary function bitmap_count as 'org.apache.doris.udf.BitmapCountUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_and as 'org.apache.doris.udf.BitmapAndUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_or as 'org.apache.doris.udf.BitmapOrUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_xor as 'org.apache.doris.udf.BitmapXorUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n-- Example: Generate bitmap by to_bitmap function and write to Hive Bitmap table\ninsert into hive_bitmap_table\nselect \n    k1,\n    k2,\n    k3,\n    to_bitmap(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n-- Example: The bitmap_count function calculate the number of elements in the bitmap\nselect k1,k2,k3,bitmap_count(uuid) from hive_bitmap_table\n-- Example: The bitmap_union function calculate the grouped bitmap union\nselect k1,bitmap_union(uuid) from hive_bitmap_table group by k1\n")),(0,n.yg)("h3",{id:"hive-bitmap-udf--description"},"Hive Bitmap UDF  Description"),(0,n.yg)("h2",{id:"hive-bitmap-import-into-doris"},"Hive Bitmap import into Doris"),(0,n.yg)("p",null," see details: ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.2/data-operate/import/import-way/spark-load-manual"},"Spark Load")," -> Basic operation -> Create load(Example 3: when the upstream data source is hive binary type table)"))}m.isMDXComponent=!0}}]);