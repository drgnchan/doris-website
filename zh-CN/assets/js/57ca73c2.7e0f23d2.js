"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[97991],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(a),c=r,N=s["".concat(p,".").concat(c)]||s[c]||k[c]||i;return a?n.createElement(N,o(o({ref:t},d),{},{components:a})):n.createElement(N,o({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},96395:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"\u5e38\u89c1\u95ee\u9898",language:"zh-CN"},o=void 0,l={unversionedId:"lakehouse/faq",id:"lakehouse/faq",title:"\u5e38\u89c1\u95ee\u9898",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/faq.md",sourceDirName:"lakehouse",slug:"/lakehouse/faq",permalink:"/zh-CN/docs/dev/lakehouse/faq",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5e38\u89c1\u95ee\u9898",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u7cfb\u7edf\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177",permalink:"/zh-CN/docs/dev/lakehouse/fs-benchmark-tool"},next:{title:"Spark Doris Connector",permalink:"/zh-CN/docs/dev/ecosystem/spark-doris-connector"}},p={},m=[{value:"Kerberos",id:"kerberos",level:2},{value:"JDBC Catalog",id:"jdbc-catalog",level:2},{value:"Hive Catalog",id:"hive-catalog",level:2},{value:"HDFS",id:"hdfs",level:2}],d={toc:m},s="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h2",{id:"kerberos"},"Kerberos"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fde\u63a5 Kerberos \u8ba4\u8bc1\u7684 Hive Metastore \u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"GSS initiate failed")),(0,r.kt)("p",{parentName:"li"},"\u901a\u5e38\u662f\u56e0\u4e3a Kerberos \u8ba4\u8bc1\u4fe1\u606f\u586b\u5199\u4e0d\u6b63\u786e\u5bfc\u81f4\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u6392\u67e5\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"1.2.1 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0cDoris \u4f9d\u8d56\u7684 libhdfs3 \u5e93\u6ca1\u6709\u5f00\u542f gsasl\u3002\u8bf7\u66f4\u65b0\u81f3 1.2.2 \u4e4b\u540e\u7684\u7248\u672c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u786e\u8ba4\u5bf9\u5404\u4e2a\u7ec4\u4ef6\uff0c\u8bbe\u7f6e\u4e86\u6b63\u786e\u7684 keytab \u548c principal\uff0c\u5e76\u786e\u8ba4 keytab \u6587\u4ef6\u5b58\u5728\u4e8e\u6240\u6709 FE\u3001BE \u8282\u70b9\u4e0a\u3002"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),"\uff1a\u7528\u4e8e Hadoop hdfs \u8bbf\u95ee\uff0c\u586b\u5199 hdfs \u5bf9\u5e94\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hive.metastore.kerberos.principal"),"\uff1a\u7528\u4e8e hive metastore\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c1d\u8bd5\u5c06 principal \u4e2d\u7684 ip \u6362\u6210\u57df\u540d\uff08\u4e0d\u8981\u4f7f\u7528\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"_HOST")," \u5360\u4f4d\u7b26\uff09")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u786e\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/krb5.conf")," \u6587\u4ef6\u5b58\u5728\u4e8e\u6240\u6709 FE\u3001BE \u8282\u70b9\u4e0a\u3002")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 Hive Catalog \u8fde\u63a5 Hive \u6570\u636e\u5e93\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteException: SIMPLE authentication is not enabled.  Available:[TOKEN, KERBEROS]"),"."),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"show databases")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"show tables")," \u90fd\u662f\u6ca1\u95ee\u9898\u7684\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u7684\u65f6\u5019\u51fa\u73b0\u4e0a\u9762\u7684\u9519\u8bef\uff0c\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4e0b\u9762\u4e24\u4e2a\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fe/conf\u3001be/conf \u76ee\u5f55\u4e0b\u9700\u653e\u7f6e core-site.xml \u548c hdfs-site.xml"),(0,r.kt)("li",{parentName:"ul"},"BE \u8282\u70b9\u6267\u884c Kerberos \u7684 kinit \u7136\u540e\u91cd\u542f BE \uff0c\u7136\u540e\u518d\u53bb\u6267\u884c\u67e5\u8be2\u5373\u53ef."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2\u914d\u7f6e\u4e86Kerberos\u7684\u5916\u8868\uff0c\u9047\u5230\u8be5\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos Ticket)"),"\uff0c\u4e00\u822c\u91cd\u542fFE\u548cBE\u80fd\u591f\u89e3\u51b3\u8be5\u95ee\u9898\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u91cd\u542f\u6240\u6709\u8282\u70b9\u524d\u53ef\u5728",(0,r.kt)("inlineCode",{parentName:"li"},'"${DORIS_HOME}/be/conf/be.conf"'),"\u4e2d\u7684JAVA_OPTS\u53c2\u6570\u91cc\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"-Djavax.security.auth.useSubjectCredsOnly=false"),"\uff0c\u901a\u8fc7\u5e95\u5c42\u673a\u5236\u53bb\u83b7\u53d6JAAS credentials\u4fe1\u606f\uff0c\u800c\u4e0d\u662f\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html"},"JAAS Troubleshooting"),"\u4e2d\u53ef\u83b7\u53d6\u66f4\u591a\u5e38\u89c1JAAS\u62a5\u9519\u7684\u89e3\u51b3\u65b9\u6cd5\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728Catalog\u4e2d\u914d\u7f6eKerberos\u65f6\uff0c\u62a5\u9519",(0,r.kt)("inlineCode",{parentName:"p"},"Unable to obtain password from user"),"\u7684\u89e3\u51b3\u65b9\u6cd5\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u5230\u7684principal\u5fc5\u987b\u5728klist\u4e2d\u5b58\u5728\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"klist -kt your.keytab"),"\u68c0\u67e5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5catalog\u914d\u7f6e\u662f\u5426\u6b63\u786e\uff0c\u6bd4\u5982\u6f0f\u914d",(0,r.kt)("inlineCode",{parentName:"li"},"yarn.resourcemanager.principal"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u4e0a\u8ff0\u68c0\u67e5\u6ca1\u95ee\u9898\uff0c\u5219\u5f53\u524d\u7cfb\u7edfyum\u6216\u8005\u5176\u4ed6\u5305\u7ba1\u7406\u8f6f\u4ef6\u5b89\u88c5\u7684JDK\u7248\u672c\u5b58\u5728\u4e0d\u652f\u6301\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u5efa\u8bae\u81ea\u884c\u5b89\u88c5JDK\u5e76\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_HOME"),"\u73af\u5883\u53d8\u91cf\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 KMS \u8bbf\u95ee HDFS \u65f6\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"java.security.InvalidKeyException: Illegal key size")),(0,r.kt)("p",{parentName:"li"},"\u5347\u7ea7 JDK \u7248\u672c\u5230 >= Java 8 u162 \u7684\u7248\u672c\u3002\u6216\u8005\u4e0b\u8f7d\u5b89\u88c5 JDK \u76f8\u5e94\u7684 JCE Unlimited Strength Jurisdiction Policy Files\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728Catalog\u4e2d\u914d\u7f6eKerberos\u65f6\uff0c\u5982\u679c\u62a5\u9519",(0,r.kt)("inlineCode",{parentName:"p"},"SIMPLE authentication is not enabled. Available:[TOKEN, KERBEROS]"),"\uff0c\u90a3\u4e48\u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"core-site.xml"),"\u6587\u4ef6\u653e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},'"${DORIS_HOME}/be/conf"'),"\u76ee\u5f55\u4e0b\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u8bbf\u95eeHDFS\u62a5\u9519",(0,r.kt)("inlineCode",{parentName:"p"},"No common protection layer between client and server"),"\uff0c\u68c0\u67e5\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop.rpc.protection"),"\u5c5e\u6027\uff0c\u4f7f\u4ed6\u4eec\u4fdd\u6301\u4e00\u81f4\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'    <?xml version="1.0" encoding="UTF-8"?>\n    <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n    \n    <configuration>\n    \n        <property>\n            <name>hadoop.security.authentication</name>\n            <value>kerberos</value>\n        </property>\n        \n    </configuration>\n')))),(0,r.kt)("h2",{id:"jdbc-catalog"},"JDBC Catalog"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 JDBC Catalog \u8fde\u63a5 SQLServer \u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"unable to find valid certification path to requested target")),(0,r.kt)("p",{parentName:"li"},"\u8bf7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc_url")," \u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"trustServerCertificate=true")," \u9009\u9879\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 JDBC Catalog \u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u4e2d\u6587\u5b57\u7b26\u4e71\u7801\uff0c\u6216\u4e2d\u6587\u5b57\u7b26\u6761\u4ef6\u67e5\u8be2\u4e0d\u6b63\u786e"),(0,r.kt)("p",{parentName:"li"},"\u8bf7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc_url")," \u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"useUnicode=true&characterEncoding=utf-8")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a1.2.3 \u7248\u672c\u540e\uff0c\u4f7f\u7528 JDBC Catalog \u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u4f1a\u81ea\u52a8\u6dfb\u52a0\u8fd9\u4e9b\u53c2\u6570\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 JDBC Catalog \u8fde\u63a5 MySQL \u6570\u636e\u5e93\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Establishing SSL connection without server's identity verification is not recommended")),(0,r.kt)("p",{parentName:"li"},"\u8bf7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc_url")," \u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"useSSL=true"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528JDBC Catalog\u5c06MySQL\u6570\u636e\u540c\u6b65\u5230Doris\u4e2d\uff0c\u65e5\u671f\u6570\u636e\u540c\u6b65\u9519\u8bef\u3002\u9700\u8981\u6821\u9a8c\u4e0bMySQL\u7684\u7248\u672c\u662f\u5426\u4e0eMySQL\u7684\u9a71\u52a8\u5305\u662f\u5426\u5bf9\u5e94\uff0c\u6bd4\u5982MySQL8\u4ee5\u4e0a\u9700\u8981\u4f7f\u7528\u9a71\u52a8com.mysql.cj.jdbc.Driver\u3002"))),(0,r.kt)("h2",{id:"hive-catalog"},"Hive Catalog"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 Hive Metastore \u8bbf\u95ee Iceberg \u8868\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"failed to get schema")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage schema reading not supported")),(0,r.kt)("p",{parentName:"li"},"\u5728 Hive \u7684 lib/ \u76ee\u5f55\u653e\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"iceberg")," \u8fd0\u884c\u65f6\u6709\u5173\u7684 jar \u5305\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"hive-site.xml")," \u914d\u7f6e\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"metastore.storage.schema.reader.impl=org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader\n")),(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5b8c\u6210\u540e\u9700\u8981\u91cd\u542fHive Metastore\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fde\u63a5 Hive Catalog \u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Caused by: java.lang.NullPointerException")),(0,r.kt)("p",{parentName:"li"},"\u5982 fe.log \u4e2d\u6709\u5982\u4e0b\u5806\u6808\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Caused by: java.lang.NullPointerException\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.getFilteredObjects(AuthorizationMetaStoreFilterHook.java:78) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.filterDatabases(AuthorizationMetaStoreFilterHook.java:55) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1548) ~[doris-fe.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1542) ~[doris-fe.jar:3.1.3]\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_181]\n")),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5c1d\u8bd5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"create catalog")," \u8bed\u53e5\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'"metastore.filter.hook" = "org.apache.hadoop.hive.metastore.DefaultMetaStoreFilterHookImpl"')," \u89e3\u51b3\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u521b\u5efa Hive Catalog \u540e\u80fd\u6b63\u5e38",(0,r.kt)("inlineCode",{parentName:"p"},"show tables"),"\uff0c\u4f46\u67e5\u8be2\u65f6\u62a5",(0,r.kt)("inlineCode",{parentName:"p"},"java.net.UnknownHostException: xxxxx")),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5728 CATALOG \u7684 PROPERTIES \u4e2d\u6dfb\u52a0"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"'fs.defaultFS' = 'hdfs://<your_nameservice_or_actually_HDFS_IP_and_port>'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Hive 1.x \u7684 orc \u683c\u5f0f\u7684\u8868\u53ef\u80fd\u4f1a\u9047\u5230\u5e95\u5c42 orc \u6587\u4ef6 schema \u4e2d\u5217\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"_col0"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"_col1"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"_col2"),"... \u8fd9\u7c7b\u7cfb\u7edf\u5217\u540d\uff0c\u6b64\u65f6\u9700\u8981\u5728 catalog \u914d\u7f6e\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"hive.version")," \u4e3a 1.x.x\uff0c\u8fd9\u6837\u5c31\u4f1a\u4f7f\u7528 hive \u8868\u4e2d\u7684\u5217\u540d\u8fdb\u884c\u6620\u5c04\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '1.x.x'\n);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528Catalog\u67e5\u8be2\u8868\u6570\u636e\u65f6\u53d1\u73b0\u4e0eHive Metastore\u76f8\u5173\u7684\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Invalid method name"),"\uff0c\u9700\u8981\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"hive.version"),"\u53c2\u6570\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '2.x.x'\n);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2 ORC \u683c\u5f0f\u7684\u8868\uff0cFE \u62a5\u9519 ",(0,r.kt)("inlineCode",{parentName:"p"},"Could not obtain block")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Caused by: java.lang.NoSuchFieldError: types")),(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e ORC \u6587\u4ef6\uff0c\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFE \u4f1a\u8bbf\u95ee HDFS \u83b7\u53d6\u6587\u4ef6\u4fe1\u606f\uff0c\u8fdb\u884c\u6587\u4ef6\u5207\u5206\u3002\u90e8\u5206\u60c5\u51b5\u4e0b\uff0cFE \u53ef\u80fd\u65e0\u6cd5\u8bbf\u95ee\u5230 HDFS\u3002\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u4ee5\u4e0b\u53c2\u6570\u89e3\u51b3\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"hive.exec.orc.split.strategy" = "BI"')),(0,r.kt)("p",{parentName:"li"},"\u5176\u4ed6\u9009\u9879\uff1aHYBRID\uff08\u9ed8\u8ba4\uff09\uff0cETL\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728hive\u4e0a\u53ef\u4ee5\u67e5\u5230hudi\u8868\u5206\u533a\u5b57\u6bb5\u7684\u503c\uff0c\u4f46\u662f\u5728doris\u67e5\u4e0d\u5230\u3002"),(0,r.kt)("p",{parentName:"li"},"doris\u548chive\u76ee\u524d\u67e5\u8be2hudi\u7684\u65b9\u5f0f\u4e0d\u4e00\u6837\uff0cdoris\u9700\u8981\u5728hudi\u8868\u7ed3\u6784\u7684avsc\u6587\u4ef6\u91cc\u6dfb\u52a0\u4e0a\u5206\u533a\u5b57\u6bb5,\u5982\u679c\u6ca1\u52a0\uff0c\u5c31\u4f1a\u5bfc\u81f4doris\u67e5\u8be2partition_val\u4e3a\u7a7a\uff08\u5373\u4f7f\u8bbe\u7f6e\u4e86hoodie.datasource.hive_sync.partition_fields=partition_val\u4e5f\u4e0d\u53ef\u4ee5\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "type": "record",\n    "name": "record",\n    "fields": [{\n        "name": "partition_val",\n        "type": [\n            "null",\n            "string"\n            ],\n        "doc": "Preset partition field, empty string when not partitioned",\n        "default": null\n        },\n        {\n        "name": "name",\n        "type": "string",\n        "doc": "\u540d\u79f0"\n        },\n        {\n        "name": "create_time",\n        "type": "string",\n        "doc": "\u521b\u5efa\u65f6\u95f4"\n        }\n    ]\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u8be2hive\u5916\u8868\uff0c\u9047\u5230\u8be5\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.ClassNotFoundException: Class com.hadoop.compression.lzo.LzoCodec not found")),(0,r.kt)("p",{parentName:"li"},"\u53bbhadoop\u73af\u5883\u641c\u7d22",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-lzo-*.jar"),"\u653e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},'"${DORIS_HOME}/fe/lib/"'),"\u76ee\u5f55\u4e0b\u5e76\u91cd\u542ffe\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4ece 2.0.2 \u7248\u672c\u8d77\uff0c\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u6587\u4ef6\u653e\u7f6e\u5728BE\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_lib/")," \u76ee\u5f55\u4e0b\uff08\u5982\u4e0d\u5b58\u5728\uff0c\u624b\u52a8\u521b\u5efa\u5373\u53ef\uff09\uff0c\u4ee5\u9632\u6b62\u5347\u7ea7\u96c6\u7fa4\u65f6\u56e0\u4e3a lib \u76ee\u5f55\u88ab\u66ff\u6362\u800c\u5bfc\u81f4\u6587\u4ef6\u4e22\u5931\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efahive\u8868\u6307\u5b9aserde\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.hive.contrib.serde2.MultiDelimitserDe"),"\uff0c\u8bbf\u95ee\u8868\u65f6\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"storage schema reading not supported")),(0,r.kt)("p",{parentName:"li"},"\u5728hive-site.xml\u6587\u4ef6\u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff0c\u5e76\u91cd\u542fhms\u670d\u52a1\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"<property>\n   <name>metastore.storage.schema.reader.impl</name>\n   <value>org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader</value>\n</property> \n")))),(0,r.kt)("h2",{id:"hdfs"},"HDFS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbf\u95ee HDFS 3.x \u65f6\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.VerifyError: xxx")),(0,r.kt)("p",{parentName:"li"},"1.2.1 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0cDoris \u4f9d\u8d56\u7684 Hadoop \u7248\u672c\u4e3a 2.8\u3002\u9700\u66f4\u65b0\u81f3 2.10.2\u3002\u6216\u66f4\u65b0 Doris \u81f3 1.2.2 \u4e4b\u540e\u7684\u7248\u672c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 Hedged Read \u4f18\u5316 HDFS \u8bfb\u53d6\u6162\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0cHDFS \u7684\u8d1f\u8f7d\u8f83\u9ad8\u53ef\u80fd\u5bfc\u81f4\u8bfb\u53d6\u67d0\u4e2a HDFS \u4e0a\u7684\u6570\u636e\u526f\u672c\u7684\u65f6\u95f4\u8f83\u957f\uff0c\u4ece\u800c\u62d6\u6162\u6574\u4f53\u7684\u67e5\u8be2\u6548\u7387\u3002HDFS Client \u63d0\u4f9b\u4e86 Hedged Read \u529f\u80fd\u3002\n\u8be5\u529f\u80fd\u53ef\u4ee5\u5728\u4e00\u4e2a\u8bfb\u8bf7\u6c42\u8d85\u8fc7\u4e00\u5b9a\u9608\u503c\u672a\u8fd4\u56de\u65f6\uff0c\u542f\u52a8\u53e6\u4e00\u4e2a\u8bfb\u7ebf\u7a0b\u8bfb\u53d6\u540c\u4e00\u4efd\u6570\u636e\uff0c\u54ea\u4e2a\u5148\u8fd4\u56de\u5c31\u662f\u7528\u54ea\u4e2a\u7ed3\u679c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1a\u8be5\u529f\u80fd\u53ef\u80fd\u4f1a\u589e\u52a0 HDFS \u96c6\u7fa4\u7684\u8d1f\u8f7d\uff0c\u8bf7\u914c\u60c5\u4f7f\u7528\u3002"),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u5f00\u542f\u8fd9\u4e2a\u529f\u80fd\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u521b\u5efa Catalog \u7684\u53c2\u6570\u4e2d\u6307\u5b9a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"create catalog regression properties (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.16.47:7004',\n    'dfs.client.hedged.read.threadpool.size' = '128',\n    'dfs.client.hedged.read.threshold.millis' = \"500\"\n);\n")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"dfs.client.hedged.read.threadpool.size")," \u8868\u793a\u7528\u4e8e Hedged Read \u7684\u7ebf\u7a0b\u6570\uff0c\u8fd9\u4e9b\u7ebf\u7a0b\u7531\u4e00\u4e2a HDFS Client \u5171\u4eab\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u9488\u5bf9\u4e00\u4e2a HDFS \u96c6\u7fa4\uff0cBE \u8282\u70b9\u4f1a\u5171\u4eab\u4e00\u4e2a HDFS Client\u3002"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"dfs.client.hedged.read.threshold.millis")," \u662f\u8bfb\u53d6\u9608\u503c\uff0c\u5355\u4f4d\u6beb\u79d2\u3002\u5f53\u4e00\u4e2a\u8bfb\u8bf7\u6c42\u8d85\u8fc7\u8fd9\u4e2a\u9608\u503c\u672a\u8fd4\u56de\u65f6\uff0c\u4f1a\u89e6\u53d1 Hedged Read\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 be.conf \u4e2d\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"enable_hdfs_hedged_read = true\nhdfs_hedged_read_thread_num = 128\nhdfs_hedged_read_threshold_time = 500\n")),(0,r.kt)("p",{parentName:"li"},"  \u8fd9\u79cd\u65b9\u5f0f\u4f1a\u5728BE\u8282\u70b9\u5168\u5c40\u5f00\u542f Hedged Read\uff08\u9ed8\u8ba4\u4e0d\u5f00\u542f\uff09\u3002\u5e76\u5ffd\u7565\u5728\u521b\u5efa Catalog \u65f6\u8bbe\u7f6e\u7684 Hedged Read \u5c5e\u6027\u3002"))),(0,r.kt)("p",{parentName:"li"},"\u5f00\u542f\u540e\uff0c\u53ef\u4ee5\u5728 Query Profile \u4e2d\u770b\u5230\u76f8\u5173\u53c2\u6570\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TotalHedgedRead"),": \u53d1\u8d77 Hedged Read \u7684\u6b21\u6570\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"HedgedReadWins"),"\uff1aHedged Read \u6210\u529f\u7684\u6b21\u6570\uff08\u53d1\u8d77\u5e76\u4e14\u6bd4\u539f\u8bf7\u6c42\u66f4\u5feb\u8fd4\u56de\u7684\u6b21\u6570\uff09"),(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u503c\u662f\u5355\u4e2a HDFS Client \u7684\u7d2f\u8ba1\u503c\uff0c\u800c\u4e0d\u662f\u5355\u4e2a\u67e5\u8be2\u7684\u6570\u503c\u3002\u540c\u4e00\u4e2a HDFS Client \u4f1a\u88ab\u591a\u4e2a\u67e5\u8be2\u590d\u7528\u3002"))))}k.isMDXComponent=!0}}]);