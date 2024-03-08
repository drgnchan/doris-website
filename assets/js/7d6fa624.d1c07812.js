"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5745],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>y});var a=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,o=function(e,n){if(null==e)return{};var r,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=o,y=c["".concat(l,".").concat(u)]||c[u]||m[u]||t;return r?a.createElement(y,i(i({ref:n},d),{},{components:r})):a.createElement(y,i({ref:n},d))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<t;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},125852:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var a=r(58168),o=(r(296540),r(15680));const t={title:"Broker",language:"en"},i=void 0,s={unversionedId:"advanced/broker",id:"version-2.0/advanced/broker",title:"Broker",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/advanced/broker.md",sourceDirName:"advanced",slug:"/advanced/broker",permalink:"/docs/2.0/advanced/broker",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Broker",language:"en"},sidebar:"docs",previous:{title:"AutoBucket",permalink:"/docs/2.0/advanced/autobucket"},next:{title:"Query Analysis",permalink:"/docs/2.0/advanced/best-practice/query-analysis"}},l={},p=[{value:"Supported Storage System",id:"supported-storage-system",level:2},{value:"Function provided by Broker",id:"function-provided-by-broker",level:2},{value:"Broker Information",id:"broker-information",level:2},{value:"Broker Name",id:"broker-name",level:3},{value:"Certification Information",id:"certification-information",level:3},{value:"Community HDFS",id:"community-hdfs",level:4},{value:"Tencent Cloud CHDFS",id:"tencent-cloud-chdfs",level:4},{value:"Aliyun OSS",id:"aliyun-oss",level:4},{value:"Baidu Cloud OBS",id:"baidu-cloud-obs",level:4},{value:"Huawei Cloud OBS",id:"huawei-cloud-obs",level:4},{value:"Amazon S3",id:"amazon-s3",level:4},{value:"JuiceFS",id:"juicefs",level:4},{value:"GCS",id:"gcs",level:4}],d={toc:p},c="wrapper";function m(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"broker"},"Broker"),(0,o.yg)("p",null,"Broker is an optional process in the Doris cluster. It is mainly used to support Doris to read and write files or directories on remote storage. Now support:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Apache HDFS"),(0,o.yg)("li",{parentName:"ul"},"Aliyun OSS"),(0,o.yg)("li",{parentName:"ul"},"Baidu Cloud BOS"),(0,o.yg)("li",{parentName:"ul"},"Tencent Cloud CHDFS"),(0,o.yg)("li",{parentName:"ul"},"Tencent Cloud GFS (since 1.2.0)"),(0,o.yg)("li",{parentName:"ul"},"Huawei Cloud OBS (since 1.2.0)"),(0,o.yg)("li",{parentName:"ul"},"Amazon S3 "),(0,o.yg)("li",{parentName:"ul"},"JuiceFS (since 2.0.0)"),(0,o.yg)("li",{parentName:"ul"},"GCS (since 2.0.0)")),(0,o.yg)("p",null,"Broker provides services through an RPC service port. It is a stateless JVM process that is responsible for encapsulating some POSIX-like file operations for read and write operations on remote storage, such as open, pred, pwrite, and so on.\nIn addition, the Broker does not record any other information, so the connection information, file information, permission information, and so on stored remotely need to be passed to the Broker process in the RPC call through parameters in order for the Broker to read and write files correctly ."),(0,o.yg)("p",null,"Broker only acts as a data channel and does not participate in any calculations, so it takes up less memory. Usually one or more Broker processes are deployed in a Doris system. And the same type of Broker will form a group and set a ",(0,o.yg)("strong",{parentName:"p"}," Broker name "),"."),(0,o.yg)("p",null,"Broker's position in the Doris system architecture is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"+----+   +----+\n| FE |   | BE |\n+-^--+   +--^-+\n  |         |\n  |         |\n+-v---------v-+\n|   Broker    |\n+------^------+\n       |\n       |\n+------v------+\n|HDFS/BOS/AFS |\n+-------------+\n")),(0,o.yg)("p",null,"This document mainly introduces the parameters that Broker needs when accessing different remote storages, such as connection information,\nauthorization information, and so on."),(0,o.yg)("h2",{id:"supported-storage-system"},"Supported Storage System"),(0,o.yg)("p",null,"Different types of brokers support different storage systems."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Community HDFS"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Support simple authentication access"),(0,o.yg)("li",{parentName:"ul"},"Support kerberos authentication access"),(0,o.yg)("li",{parentName:"ul"},"Support HDFS HA mode access"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Object storage"))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"All object stores that support the S3 protocol")),(0,o.yg)("h2",{id:"function-provided-by-broker"},"Function provided by Broker"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.0/data-operate/import/import-way/broker-load-manual"},"Broker Load")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.0/data-operate/export/export-manual"},"Export")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.0/admin-manual/data-admin/backup"},"Backup"))),(0,o.yg)("h2",{id:"broker-information"},"Broker Information"),(0,o.yg)("p",null,"Broker information includes two parts: ",(0,o.yg)("strong",{parentName:"p"}," Broker name ")," and ",(0,o.yg)("strong",{parentName:"p"}," Certification information "),". The general syntax is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'WITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy",\n    "other_prop" = "prop_value",\n    ...\n);\n')),(0,o.yg)("h3",{id:"broker-name"},"Broker Name"),(0,o.yg)("p",null,"Usually the user needs to specify an existing Broker Name through the ",(0,o.yg)("inlineCode",{parentName:"p"},'WITH BROKER" broker_name "')," clause in the operation command.\nBroker Name is a name that the user specifies when adding a Broker process through the ALTER SYSTEM ADD BROKER command.\nA name usually corresponds to one or more broker processes. Doris selects available broker processes based on the name.\nYou can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"SHOW BROKER")," command to view the Brokers that currently exist in the cluster."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note: Broker Name is just a user-defined name and does not represent the type of Broker.")),(0,o.yg)("h3",{id:"certification-information"},"Certification Information"),(0,o.yg)("p",null,"Different broker types and different access methods need to provide different authentication information.\nAuthentication information is usually provided as a Key-Value in the Property Map after ",(0,o.yg)("inlineCode",{parentName:"p"},'WITH BROKER" broker_name "'),"."),(0,o.yg)("h4",{id:"community-hdfs"},"Community HDFS"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Simple Authentication"),(0,o.yg)("p",{parentName:"li"},"Simple authentication means that Hadoop configures ",(0,o.yg)("inlineCode",{parentName:"p"},"hadoop.security.authentication")," to",(0,o.yg)("inlineCode",{parentName:"p"}," simple"),"."),(0,o.yg)("p",{parentName:"li"},"Use system users to access HDFS. Or add in the environment variable started by Broker: ",(0,o.yg)("inlineCode",{parentName:"p"},"HADOOP_USER_NAME"),"."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'(\n    "username" = "user",\n    "password" = ""\n);\n')),(0,o.yg)("p",{parentName:"li"},"Just leave the password blank.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Kerberos Authentication"),(0,o.yg)("p",{parentName:"li"},"The authentication method needs to provide the following information::"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"hadoop.security.authentication"),": Specify the authentication method as kerberos."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),": Specify the principal of kerberos."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),": Specify the path to the keytab file for kerberos. The file must be an absolute path to a file on the server where the broker process is located. And can be accessed by the Broker process."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"kerberos_keytab_content"),": Specify the content of the keytab file in kerberos after base64 encoding. You can choose one of these with ",(0,o.yg)("inlineCode",{parentName:"li"},"kerberos_keytab")," configuration.")),(0,o.yg)("p",{parentName:"li"},"Examples are as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'(\n    "hadoop.security.authentication" = "kerberos",\n    "hadoop.kerberos.principal" = "doris@YOUR.COM",\n    "hadoop.kerberos.keytab" = "/home/doris/my.keytab"\n)\n')),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'(\n    "hadoop.security.authentication" = "kerberos",\n    "hadoop.kerberos.principal" = "doris@YOUR.COM",\n    "kerberos_keytab_content" = "ASDOWHDLAWIDJHWLDKSALDJSDIWALD"\n)\n')),(0,o.yg)("p",{parentName:"li"},"If Kerberos authentication is used, the ",(0,o.yg)("a",{parentName:"p",href:"https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html"},"krb5.conf")," file is required when deploying the Broker process.\nThe krb5.conf file contains Kerberos configuration information, Normally, you should install your krb5.conf file in the directory /etc. You can override the default location by setting the environment variable KRB5_CONFIG.\nAn example of the contents of the krb5.conf file is as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"[libdefaults]\n    default_realm = DORIS.HADOOP\n    default_tkt_enctypes = des3-hmac-sha1 des-cbc-crc\n    default_tgs_enctypes = des3-hmac-sha1 des-cbc-crc\n    dns_lookup_kdc = true\n    dns_lookup_realm = false\n\n[realms]\n    DORIS.HADOOP = {\n        kdc = kerberos-doris.hadoop.service:7005\n    }\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"HDFS HA Mode"),(0,o.yg)("p",{parentName:"li"}," This configuration is used to access HDFS clusters deployed in HA mode."),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"dfs.nameservices"),': Specify the name of the hdfs service, custom, such as "dfs.nameservices" = "my_ha".')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"dfs.ha.namenodes.xxx"),":  Custom namenode names. Multiple names are separated by commas, where xxx is the custom name in ",(0,o.yg)("inlineCode",{parentName:"p"},"dfs.nameservices"),', such as" dfs.ha.namenodes.my_ha "=" my_nn ".')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"dfs.namenode.rpc-address.xxx.nn"),": Specify the rpc address information of namenode, Where nn represents the name of the namenode configured in ",(0,o.yg)("inlineCode",{parentName:"p"},"dfs.ha.namenodes.xxx"),', such as: "dfs.namenode.rpc-address.my_ha.my_nn" = "host:port".')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"dfs.client.failover.proxy.provider"),": Specify the provider for the client to connect to the namenode. The default is: org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider."),(0,o.yg)("p",{parentName:"li"}," Examples are as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'(\n    "fs.defaultFS" = "hdfs://my_ha",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')),(0,o.yg)("p",{parentName:"li"}," The HA mode can be combined with the previous two authentication methods for cluster access. If you access HA HDFS with simple authentication:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'(\n    "username"="user",\n    "password"="passwd",\n    "fs.defaultFS" = "hdfs://my_ha",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')),(0,o.yg)("p",{parentName:"li"},"The configuration for accessing the HDFS cluster can be written to the hdfs-site.xml file. When users use the Broker process to read data from the HDFS cluster, they only need to fill in the cluster file path and authentication information."))))),(0,o.yg)("h4",{id:"tencent-cloud-chdfs"},"Tencent Cloud CHDFS"),(0,o.yg)("p",null,"Same as Apache HDFS"),(0,o.yg)("h4",{id:"aliyun-oss"},"Aliyun OSS"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'(\n    "fs.oss.accessKeyId" = "",\n    "fs.oss.accessKeySecret" = "",\n    "fs.oss.endpoint" = ""\n)\n')),(0,o.yg)("h4",{id:"baidu-cloud-obs"},"Baidu Cloud OBS"),(0,o.yg)("p",null,"Currently, when using BOS, it is necessary to download and unzip the ",(0,o.yg)("a",{parentName:"p",href:"https://sdk.bce.baidu.com/console-sdk/bos-hdfs-sdk-1.0.3-community.jar.zip"},"bos-hdfs-sdk-1.0.3-community.jar.zip"),", and then move the jar in the lib directory of the broker."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'(\n    "fs.bos.access.key" = "xx",\n    "fs.bos.secret.access.key" = "xx",\n    "fs.bos.endpoint" = "xx"\n)\n')),(0,o.yg)("h4",{id:"huawei-cloud-obs"},"Huawei Cloud OBS"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'(\n    "fs.obs.access.key" = "xx",\n    "fs.obs.secret.key" = "xx",\n    "fs.obs.endpoint" = "xx"\n)\n')),(0,o.yg)("h4",{id:"amazon-s3"},"Amazon S3"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'(\n    "fs.s3a.access.key" = "xx",\n    "fs.s3a.secret.key" = "xx",\n    "fs.s3a.endpoint" = "xx"\n)\n')),(0,o.yg)("h4",{id:"juicefs"},"JuiceFS"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'(\n    "fs.defaultFS" = "jfs://xxx/",\n    "fs.jfs.impl" = "io.juicefs.JuiceFileSystem",\n    "fs.AbstractFileSystem.jfs.impl" = "io.juicefs.JuiceFS",\n    "juicefs.meta" = "xxx",\n    "juicefs.access-log" = "xxx"\n)\n')),(0,o.yg)("h4",{id:"gcs"},"GCS"),(0,o.yg)("p",null,"When accessing GCS using Broker, the Project ID is required, while other parameters are optional. For all parameter configurations, please refer to the documentation. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/GoogleCloudDataproc/hadoop-connectors/blob/branch-2.2.x/gcs/CONFIGURATION.md"},"GCS Config")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'(\n    "fs.gs.project.id" = "your-project-id",\n    "fs.AbstractFileSystem.gs.impl" = "com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS",\n    "fs.gs.impl" = "com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem",\n)\n')))}m.isMDXComponent=!0}}]);