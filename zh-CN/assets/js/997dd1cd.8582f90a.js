"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[99164],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>f});var i=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),m=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(n),s=a,f=c["".concat(d,".").concat(s)]||c[s]||l[s]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},54772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var i=n(45072),a=(n(11504),n(95788));const r={title:"Hive Bitmap UDF",language:"zh-CN"},o=void 0,p={unversionedId:"ecosystem/hive-bitmap-udf",id:"version-1.2/ecosystem/hive-bitmap-udf",title:"Hive Bitmap UDF",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/ecosystem/hive-bitmap-udf.md",sourceDirName:"ecosystem",slug:"/ecosystem/hive-bitmap-udf",permalink:"/zh-CN/docs/1.2/ecosystem/hive-bitmap-udf",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Hive Bitmap UDF",language:"zh-CN"},sidebar:"docs",previous:{title:"CloudCanal \u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/1.2/ecosystem/cloudcanal"},next:{title:"\u8d21\u732e UDF ",permalink:"/zh-CN/docs/1.2/ecosystem/udf/contribute-udf"}},d={},m=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5728 Hive \u4e2d\u521b\u5efa Bitmap \u7c7b\u578b\u8868",id:"\u5728-hive-\u4e2d\u521b\u5efa-bitmap-\u7c7b\u578b\u8868",level:3},{value:"Hive Bitmap UDF \u4f7f\u7528\uff1a",id:"hive-bitmap-udf-\u4f7f\u7528",level:3},{value:"Hive Bitmap UDF  \u8bf4\u660e",id:"hive-bitmap-udf--\u8bf4\u660e",level:3},{value:"Hive bitmap \u5bfc\u5165 doris",id:"hive-bitmap-\u5bfc\u5165-doris",level:2}],u={toc:m},c="wrapper";function l(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,i.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hive-udf"},"Hive UDF"),(0,a.yg)("p",null," Hive Bitmap UDF \u63d0\u4f9b\u4e86\u5728 hive \u8868\u4e2d\u751f\u6210 bitmap \u3001bitmap \u8fd0\u7b97\u7b49 UDF\uff0cHive \u4e2d\u7684 bitmap \u4e0e Doris bitmap \u5b8c\u5168\u4e00\u81f4 \uff0cHive \u4e2d\u7684 bitmap \u53ef\u4ee5\u901a\u8fc7 spark bitmap load \u5bfc\u5165 doris"),(0,a.yg)("p",null," \u4e3b\u8981\u76ee\u7684\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u51cf\u5c11\u6570\u636e\u5bfc\u5165 doris \u65f6\u95f4 , \u9664\u53bb\u4e86\u6784\u5efa\u5b57\u5178\u3001bitmap \u9884\u805a\u5408\u7b49\u6d41\u7a0b\uff1b"),(0,a.yg)("li",{parentName:"ol"},"\u8282\u7701 hive \u5b58\u50a8 \uff0c\u4f7f\u7528 bitmap \u5bf9\u6570\u636e\u538b\u7f29 \uff0c\u51cf\u5c11\u4e86\u5b58\u50a8\u6210\u672c\uff1b"),(0,a.yg)("li",{parentName:"ol"},"\u63d0\u4f9b\u5728 hive \u4e2d bitmap \u7684\u7075\u6d3b\u8fd0\u7b97 \uff0c\u6bd4\u5982\uff1a\u4ea4\u96c6\u3001\u5e76\u96c6\u3001\u5dee\u96c6\u8fd0\u7b97 \uff0c\u8ba1\u7b97\u540e\u7684 bitmap \u4e5f\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165 doris\uff1b")),(0,a.yg)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.yg)("h3",{id:"\u5728-hive-\u4e2d\u521b\u5efa-bitmap-\u7c7b\u578b\u8868"},"\u5728 Hive \u4e2d\u521b\u5efa Bitmap \u7c7b\u578b\u8868"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"\n-- \u4f8b\u5b50\uff1a\u521b\u5efa Hive Bitmap \u8868\nCREATE TABLE IF NOT EXISTS `hive_bitmap_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'bitmap'\n) comment  'comment'\n\n-- \u4f8b\u5b50\uff1a\u521b\u5efa\u666e\u901a Hive \u8868\nCREATE TABLE IF NOT EXISTS `hive_table`(\n    `k1`   int       COMMENT '',\n    `k2`   String    COMMENT '',\n    `k3`   String    COMMENT '',\n    `uuid` int       COMMENT ''\n) comment  'comment'\n")),(0,a.yg)("h3",{id:"hive-bitmap-udf-\u4f7f\u7528"},"Hive Bitmap UDF \u4f7f\u7528\uff1a"),(0,a.yg)("p",null,"Hive Bitmap UDF \u9700\u8981\u5728 Hive/Spark \u4e2d\u4f7f\u7528\uff0c\u9996\u5148\u9700\u8981\u7f16\u8bd1fe\u5f97\u5230hive-udf-jar-with-dependencies.jar\u3002\n\u7f16\u8bd1\u51c6\u5907\u5de5\u4f5c\uff1a\u5982\u679c\u8fdb\u884c\u8fc7ldb\u6e90\u7801\u7f16\u8bd1\u53ef\u76f4\u63a5\u7f16\u8bd1fe\uff0c\u5982\u679c\u6ca1\u6709\u8fdb\u884c\u8fc7ldb\u6e90\u7801\u7f16\u8bd1\uff0c\u5219\u9700\u8981\u624b\u52a8\u5b89\u88c5thrift\uff0c\u53ef\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"/community/developer-guide/fe-idea-dev.md"},"FE\u5f00\u53d1\u73af\u5883\u642d\u5efa")," \u4e2d\u7684\u7f16\u8bd1\u4e0e\u5b89\u88c5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"--clone doris\u6e90\u7801\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n--\u5b89\u88c5thrift\n--\u8fdb\u5165fe\u76ee\u5f55\ncd fe\n--\u6267\u884cmaven\u6253\u5305\u547d\u4ee4\uff08fe\u7684\u5b50module\u4f1a\u5168\u90e8\u6253\u5305\uff09\nmvn package -Dmaven.test.skip=true\n--\u4e5f\u53ef\u4ee5\u53ea\u6253hive-udf module\nmvn package -pl hive-udf -am -Dmaven.test.skip=true\n")),(0,a.yg)("p",null,"\u6253\u5305\u7f16\u8bd1\u5b8c\u6210\u8fdb\u5165hive-udf\u76ee\u5f55\u4f1a\u6709target\u76ee\u5f55\uff0c\u91cc\u9762\u5c31\u4f1a\u6709\u6253\u5305\u5b8c\u6210\u7684hive-udf-jar-with-dependencies.jar\u5305"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"\n-- \u52a0\u8f7dhive bitmap udf jar\u5305  (\u9700\u8981\u5c06\u7f16\u8bd1\u597d\u7684 hive-udf jar \u5305\u4e0a\u4f20\u81f3 HDFS)\nadd jar hdfs://node:9001/hive-udf-jar-with-dependencies.jar;\n\n-- \u521b\u5efaUDAF\u51fd\u6570\ncreate temporary function to_bitmap as 'org.apache.doris.udf.ToBitmapUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_union as 'org.apache.doris.udf.BitmapUnionUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n\n-- \u521b\u5efaUDF\u51fd\u6570\ncreate temporary function bitmap_count as 'org.apache.doris.udf.BitmapCountUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_and as 'org.apache.doris.udf.BitmapAndUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_or as 'org.apache.doris.udf.BitmapOrUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_xor as 'org.apache.doris.udf.BitmapXorUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n\n-- \u4f8b\u5b50\uff1a\u901a\u8fc7 to_bitmap \u751f\u6210 bitmap \u5199\u5165 Hive Bitmap \u8868\ninsert into hive_bitmap_table\nselect \n    k1,\n    k2,\n    k3,\n    to_bitmap(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n\n-- \u4f8b\u5b50\uff1abitmap_count \u8ba1\u7b97 bitmap \u4e2d\u5143\u7d20\u4e2a\u6570\nselect k1,k2,k3,bitmap_count(uuid) from hive_bitmap_table\n\n-- \u4f8b\u5b50\uff1abitmap_union \u7528\u4e8e\u8ba1\u7b97\u5206\u7ec4\u540e\u7684 bitmap \u5e76\u96c6\nselect k1,bitmap_union(uuid) from hive_bitmap_table group by k1\n\n")),(0,a.yg)("h3",{id:"hive-bitmap-udf--\u8bf4\u660e"},"Hive Bitmap UDF  \u8bf4\u660e"),(0,a.yg)("h2",{id:"hive-bitmap-\u5bfc\u5165-doris"},"Hive bitmap \u5bfc\u5165 doris"),(0,a.yg)("p",null," \u8be6\u89c1: ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/data-operate/import/import-way/spark-load-manual"},"Spark Load")," -> \u57fa\u672c\u64cd\u4f5c  -> \u521b\u5efa\u5bfc\u5165 (\u793a\u4f8b3\uff1a\u4e0a\u6e38\u6570\u636e\u6e90\u662fhive binary\u7c7b\u578b\u60c5\u51b5)"))}l.isMDXComponent=!0}}]);