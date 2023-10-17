"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>v});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(a),c=n,v=s["".concat(l,".").concat(c)]||s[c]||u[c]||r;return a?i.createElement(v,o(o({ref:t},m),{},{components:a})):i.createElement(v,o({ref:t},m))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:n,o[1]=p;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},12947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const r={title:"Hive Bitmap UDF",language:"zh-CN"},o=void 0,p={unversionedId:"ecosystem/hive-bitmap-udf",id:"ecosystem/hive-bitmap-udf",title:"Hive Bitmap UDF",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/hive-bitmap-udf.md",sourceDirName:"ecosystem",slug:"/ecosystem/hive-bitmap-udf",permalink:"/zh-CN/docs/dev/ecosystem/hive-bitmap-udf",draft:!1,tags:[],version:"current",frontMatter:{title:"Hive Bitmap UDF",language:"zh-CN"},sidebar:"docs",previous:{title:"CloudCanal \u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/dev/ecosystem/cloudcanal"},next:{title:"DBT Doris Adapter",permalink:"/zh-CN/docs/dev/ecosystem/dbt-doris-adapter"}},l={},d=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5728 Hive \u4e2d\u521b\u5efa Bitmap \u7c7b\u578b\u8868",id:"\u5728-hive-\u4e2d\u521b\u5efa-bitmap-\u7c7b\u578b\u8868",level:3},{value:"Hive Bitmap UDF \u4f7f\u7528\uff1a",id:"hive-bitmap-udf-\u4f7f\u7528",level:3},{value:"Hive Bitmap UDF  \u8bf4\u660e",id:"hive-bitmap-udf--\u8bf4\u660e",level:3},{value:"Hive bitmap \u5bfc\u5165 doris",id:"hive-bitmap-\u5bfc\u5165-doris",level:2},{value:"\u65b9\u6cd5\u4e00\uff1aCatalog \uff08\u63a8\u8350\uff09",id:"\u65b9\u6cd5\u4e00catalog-\u63a8\u8350",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1aSpark Load",id:"\u65b9\u6cd5\u4e8cspark-load",level:3}],m={toc:d},s="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hive-udf"},"Hive UDF"),(0,n.kt)("p",null," Hive Bitmap UDF \u63d0\u4f9b\u4e86\u5728 hive \u8868\u4e2d\u751f\u6210 bitmap \u3001bitmap \u8fd0\u7b97\u7b49 UDF\uff0cHive \u4e2d\u7684 bitmap \u4e0e Doris bitmap \u5b8c\u5168\u4e00\u81f4 \uff0cHive \u4e2d\u7684 bitmap \u53ef\u4ee5\u901a\u8fc7 spark bitmap load \u5bfc\u5165 doris"),(0,n.kt)("p",null," \u4e3b\u8981\u76ee\u7684\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u51cf\u5c11\u6570\u636e\u5bfc\u5165 doris \u65f6\u95f4 , \u9664\u53bb\u4e86\u6784\u5efa\u5b57\u5178\u3001bitmap \u9884\u805a\u5408\u7b49\u6d41\u7a0b\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u8282\u7701 hive \u5b58\u50a8 \uff0c\u4f7f\u7528 bitmap \u5bf9\u6570\u636e\u538b\u7f29 \uff0c\u51cf\u5c11\u4e86\u5b58\u50a8\u6210\u672c\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u5728 hive \u4e2d bitmap \u7684\u7075\u6d3b\u8fd0\u7b97 \uff0c\u6bd4\u5982\uff1a\u4ea4\u96c6\u3001\u5e76\u96c6\u3001\u5dee\u96c6\u8fd0\u7b97 \uff0c\u8ba1\u7b97\u540e\u7684 bitmap \u4e5f\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165 doris\uff1b")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("h3",{id:"\u5728-hive-\u4e2d\u521b\u5efa-bitmap-\u7c7b\u578b\u8868"},"\u5728 Hive \u4e2d\u521b\u5efa Bitmap \u7c7b\u578b\u8868"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- \u4f8b\u5b50\uff1a\u521b\u5efa Hive Bitmap \u8868\nCREATE TABLE IF NOT EXISTS `hive_bitmap_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'bitmap'\n) comment  'comment'\n\n-- \u4f8b\u5b50\uff1a\u521b\u5efa\u666e\u901a Hive \u8868\nCREATE TABLE IF NOT EXISTS `hive_table`(\n    `k1`   int       COMMENT '',\n    `k2`   String    COMMENT '',\n    `k3`   String    COMMENT '',\n    `uuid` int       COMMENT ''\n) comment  'comment'\n")),(0,n.kt)("h3",{id:"hive-bitmap-udf-\u4f7f\u7528"},"Hive Bitmap UDF \u4f7f\u7528\uff1a"),(0,n.kt)("p",null,"Hive Bitmap UDF \u9700\u8981\u5728 Hive/Spark \u4e2d\u4f7f\u7528\uff0c\u9996\u5148\u9700\u8981\u7f16\u8bd1fe\u5f97\u5230hive-udf-jar-with-dependencies.jar\u3002\n\u7f16\u8bd1\u51c6\u5907\u5de5\u4f5c\uff1a\u5982\u679c\u8fdb\u884c\u8fc7ldb\u6e90\u7801\u7f16\u8bd1\u53ef\u76f4\u63a5\u7f16\u8bd1fe\uff0c\u5982\u679c\u6ca1\u6709\u8fdb\u884c\u8fc7ldb\u6e90\u7801\u7f16\u8bd1\uff0c\u5219\u9700\u8981\u624b\u52a8\u5b89\u88c5thrift\uff0c\u53ef\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"/community/developer-guide/fe-idea-dev.md"},"FE\u5f00\u53d1\u73af\u5883\u642d\u5efa")," \u4e2d\u7684\u7f16\u8bd1\u4e0e\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--clone doris\u6e90\u7801\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n--\u5b89\u88c5thrift\n--\u8fdb\u5165fe\u76ee\u5f55\ncd fe\n--\u6267\u884cmaven\u6253\u5305\u547d\u4ee4\uff08fe\u7684\u5b50module\u4f1a\u5168\u90e8\u6253\u5305\uff09\nmvn package -Dmaven.test.skip=true\n--\u4e5f\u53ef\u4ee5\u53ea\u6253hive-udf module\nmvn package -pl hive-udf -am -Dmaven.test.skip=true\n")),(0,n.kt)("p",null,"\u6253\u5305\u7f16\u8bd1\u5b8c\u6210\u8fdb\u5165hive-udf\u76ee\u5f55\u4f1a\u6709target\u76ee\u5f55\uff0c\u91cc\u9762\u5c31\u4f1a\u6709\u6253\u5305\u5b8c\u6210\u7684hive-udf.jar\u5305"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- \u52a0\u8f7dhive bitmap udf jar\u5305  (\u9700\u8981\u5c06\u7f16\u8bd1\u597d\u7684 hive-udf jar \u5305\u4e0a\u4f20\u81f3 HDFS)\nadd jar hdfs://node:9001/hive-udf-jar-with-dependencies.jar;\n\n-- \u521b\u5efaUDAF\u51fd\u6570\ncreate temporary function to_bitmap as 'org.apache.doris.udf.ToBitmapUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_union as 'org.apache.doris.udf.BitmapUnionUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n\n-- \u521b\u5efaUDF\u51fd\u6570\ncreate temporary function bitmap_count as 'org.apache.doris.udf.BitmapCountUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_and as 'org.apache.doris.udf.BitmapAndUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_or as 'org.apache.doris.udf.BitmapOrUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_xor as 'org.apache.doris.udf.BitmapXorUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n\n-- \u4f8b\u5b50\uff1a\u901a\u8fc7 to_bitmap \u751f\u6210 bitmap \u5199\u5165 Hive Bitmap \u8868\ninsert into hive_bitmap_table\nselect \n    k1,\n    k2,\n    k3,\n    to_bitmap(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n\n-- \u4f8b\u5b50\uff1abitmap_count \u8ba1\u7b97 bitmap \u4e2d\u5143\u7d20\u4e2a\u6570\nselect k1,k2,k3,bitmap_count(uuid) from hive_bitmap_table\n\n-- \u4f8b\u5b50\uff1abitmap_union \u7528\u4e8e\u8ba1\u7b97\u5206\u7ec4\u540e\u7684 bitmap \u5e76\u96c6\nselect k1,bitmap_union(uuid) from hive_bitmap_table group by k1\n\n")),(0,n.kt)("h3",{id:"hive-bitmap-udf--\u8bf4\u660e"},"Hive Bitmap UDF  \u8bf4\u660e"),(0,n.kt)("h2",{id:"hive-bitmap-\u5bfc\u5165-doris"},"Hive bitmap \u5bfc\u5165 doris"),(0,n.kt)("version",{since:"2.0.2"},(0,n.kt)("h3",{id:"\u65b9\u6cd5\u4e00catalog-\u63a8\u8350"},"\u65b9\u6cd5\u4e00\uff1aCatalog \uff08\u63a8\u8350\uff09")),(0,n.kt)("p",null,"\u521b\u5efa Hive \u8868\u6307\u5b9a\u4e3a TEXT \u683c\u5f0f\uff0c\u6b64\u65f6\uff0c\u5bf9\u4e8e Binary \u7c7b\u578b\uff0cHive \u4f1a\u4ee5 bash64 \u7f16\u7801\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\u4fdd\u5b58\uff0c\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7 Hive Catalog \u7684\u5f62\u5f0f\uff0c\u76f4\u63a5\u5c06\u4f4d\u56fe\u6570\u636e\u901a\u8fc7 bitmap_from_bash64 \u51fd\u6570\u63d2\u5165\u5230 Doris \u5185\u90e8\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u4f8b\u5b50\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728 Hive \u4e2d\u521b\u5efa Hive \u8868")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `test`.`hive_bitmap_table`(\n`k1`   int       COMMENT '',\n`k2`   String    COMMENT '',\n`k3`   String    COMMENT '',\n`uuid` binary    COMMENT 'bitmap'\n) stored as textfile \n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../lakehouse/multi-catalog/hive"},"\u5728 Doris \u4e2d\u521b\u5efa Catalog"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:9083'\n);\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa Doris \u5185\u8868")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `test`.`doris_bitmap_table`(\n    `k1`   int                   COMMENT '',\n    `k2`   String                COMMENT '',\n    `k3`   String                COMMENT '',\n    `uuid` BITMAP  BITMAP_UNION  COMMENT 'bitmap'\n)\nAGGREGATE KEY(k1, k2, k3)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n);\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u4ece Hive \u63d2\u5165\u6570\u636e\u5230 Doris \u4e2d")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"insert into doris_bitmap_table select k1, k2, k3, bitmap_from_base64(uuid) from hive.test.hive_bitmap_table;\n")),(0,n.kt)("h3",{id:"\u65b9\u6cd5\u4e8cspark-load"},"\u65b9\u6cd5\u4e8c\uff1aSpark Load"),(0,n.kt)("p",null," \u8be6\u89c1: ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/spark-load-manual"},"Spark Load")," -> \u57fa\u672c\u64cd\u4f5c  -> \u521b\u5efa\u5bfc\u5165 (\u793a\u4f8b3\uff1a\u4e0a\u6e38\u6570\u636e\u6e90\u662fhive binary\u7c7b\u578b\u60c5\u51b5)"))}u.isMDXComponent=!0}}]);