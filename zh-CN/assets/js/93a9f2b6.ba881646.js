"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[97312],{95788:(e,n,r)=>{r.d(n,{Iu:()=>E,yg:()=>R});var a=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),i=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},E=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",O={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,E=l(e,["components","mdxType","originalType","parentName"]),c=i(r),u=t,R=c["".concat(p,".").concat(u)]||c[u]||O[u]||o;return r?a.createElement(R,s(s({ref:n},E),{},{components:r})):a.createElement(R,s({ref:n},E))}));function R(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:t,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19404:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>O,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(45072),t=(r(11504),r(95788));const o={title:"CREATE-REPOSITORY",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",title:"CREATE-REPOSITORY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-REPOSITORY",language:"zh-CN"},sidebar:"docs",previous:{title:"CANCEL-BACKUP",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP"},next:{title:"CREATE-ENCRYPT-KEY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY"}},p={},i=[{value:"CREATE-REPOSITORY",id:"create-repository",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],E={toc:i},c="wrapper";function O(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,a.c)({},E,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"create-repository"},"CREATE-REPOSITORY"),(0,t.yg)("h3",{id:"name"},"Name"),(0,t.yg)("p",null,"CREATE REPOSITORY"),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4ed3\u5e93\u3002\u4ed3\u5e93\u7528\u4e8e\u5c5e\u4e8e\u5907\u4efd\u6216\u6062\u590d\u3002\u4ec5 root \u6216 superuser \u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4ed3\u5e93\u3002"),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE [READ ONLY] REPOSITORY `repo_name`\nWITH [BROKER `broker_name`|S3|hdfs]\nON LOCATION `repo_location`\nPROPERTIES ("key"="value", ...);\n')),(0,t.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4ed3\u5e93\u7684\u521b\u5efa\uff0c\u4f9d\u8d56\u4e8e\u5df2\u5b58\u5728\u7684 broker \u6216\u8005\u76f4\u63a5\u901a\u8fc7AWS s3 \u534f\u8bae\u8bbf\u95ee\u4e91\u5b58\u50a8\uff0c\u6216\u8005\u76f4\u63a5\u8bbf\u95eeHDFS"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f\u53ea\u8bfb\u4ed3\u5e93\uff0c\u5219\u53ea\u80fd\u5728\u4ed3\u5e93\u4e0a\u8fdb\u884c\u6062\u590d\u3002\u5982\u679c\u4e0d\u662f\uff0c\u5219\u53ef\u4ee5\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u6839\u636e broker \u6216\u8005S3\u3001hdfs\u7684\u4e0d\u540c\u7c7b\u578b\uff0cPROPERTIES \u6709\u6240\u4e0d\u540c\uff0c\u5177\u4f53\u89c1\u793a\u4f8b\u3002"),(0,t.yg)("li",{parentName:"ul"},"ON LOCATION ,\u5982\u679c\u662f S3 , \u8fd9\u91cc\u540e\u9762\u8ddf\u7684\u662f Bucket Name\u3002")),(0,t.yg)("h3",{id:"example"},"Example"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},'\u521b\u5efa\u540d\u4e3a bos_repo \u7684\u4ed3\u5e93\uff0c\u4f9d\u8d56 BOS broker "bos_broker"\uff0c\u6570\u636e\u6839\u76ee\u5f55\u4e3a\uff1abos://palo_backup')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `bos_repo`\nWITH BROKER `bos_broker`\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_secret_accesskey"\n);\n')),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa\u548c\u793a\u4f8b 1 \u76f8\u540c\u7684\u4ed3\u5e93\uff0c\u4f46\u5c5e\u6027\u4e3a\u53ea\u8bfb\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE READ ONLY REPOSITORY `bos_repo`\nWITH BROKER `bos_broker`\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_accesskey"\n);\n')),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},'\u521b\u5efa\u540d\u4e3a hdfs_repo \u7684\u4ed3\u5e93\uff0c\u4f9d\u8d56 Baidu hdfs broker "hdfs_broker"\uff0c\u6570\u636e\u6839\u76ee\u5f55\u4e3a\uff1ahdfs://hadoop-name-node:54310/path/to/repo/')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `hdfs_repo`\nWITH BROKER `hdfs_broker`\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n    "username" = "user",\n    "password" = "password"\n);\n')),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u4e3a s3_repo \u7684\u4ed3\u5e93\uff0c\u76f4\u63a5\u94fe\u63a5\u4e91\u5b58\u50a8\uff0c\u800c\u4e0d\u901a\u8fc7broker.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://s3-repo"\nPROPERTIES\n(\n    "AWS_ENDPOINT" = "http://s3-REGION.amazonaws.com",\n    "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n    "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n    "AWS_REGION" = "REGION"\n);\n')),(0,t.yg)("ol",{start:5},(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u4e3a hdfs_repo \u7684\u4ed3\u5e93\uff0c\u76f4\u63a5\u94fe\u63a5HDFS\uff0c\u800c\u4e0d\u901a\u8fc7broker.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `hdfs_repo`\nWITH hdfs\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n    "fs.defaultFS"="hdfs://hadoop-name-node:54310",\n    "hadoop.username"="user"\n);\n')),(0,t.yg)("ol",{start:6},(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u4e3a minio_repo \u7684\u4ed3\u5e93\uff0c\u76f4\u63a5\u901a\u8fc7 s3 \u534f\u8bae\u94fe\u63a5 minio.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n(\n    "AWS_ENDPOINT" = "http://minio.com",\n    "AWS_ACCESS_KEY" = "MINIO_USER",\n    "AWS_SECRET_KEY"="MINIO_PASSWORD",\n    "AWS_REGION" = "REGION",\n    "use_path_style" = "true"\n);\n')),(0,t.yg)("ol",{start:7},(0,t.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u4e34\u65f6\u79d8\u94a5\u521b\u5efa\u540d\u4e3a minio_repo \u7684\u4ed3\u5e93")),(0,t.yg)("version",{since:"1.2"}),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n(\n    "AWS_ENDPOINT" = "AWS_ENDPOINT",\n    "AWS_ACCESS_KEY" = "AWS_TEMP_ACCESS_KEY",\n    "AWS_SECRET_KEY" = "AWS_TEMP_SECRET_KEY",\n    "AWS_TOKEN" = "AWS_TEMP_TOKEN",\n    "AWS_REGION" = "AWS_REGION"\n)\n')),(0,t.yg)("ol",{start:8},(0,t.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u817e\u8baf\u4e91 COS \u521b\u5efa\u4ed3\u5e93")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'CREATE REPOSITORY `cos_repo`\nWITH S3\nON LOCATION "s3://backet1/"\nPROPERTIES\n(\n    "AWS_ACCESS_KEY" = "ak",\n    "AWS_SECRET_KEY" = "sk",\n    "AWS_ENDPOINT" = "http://cos.ap-beijing.myqcloud.com",\n    "AWS_REGION" = "ap-beijing"\n);\n')),(0,t.yg)("h3",{id:"keywords"},"Keywords"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"CREATE, REPOSITORY\n")),(0,t.yg)("h3",{id:"best-practice"},"Best Practice"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u4e00\u4e2a\u96c6\u7fa4\u53ef\u4ee5\u521b\u5efa\u8fc7\u591a\u4e2a\u4ed3\u5e93\u3002\u53ea\u6709\u62e5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u521b\u5efa\u4ed3\u5e93\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u4efb\u4f55\u7528\u6237\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,t.yg)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES"},"SHOW REPOSITORIES")," \u547d\u4ee4\u67e5\u770b\u5df2\u7ecf\u521b\u5efa\u7684\u4ed3\u5e93\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u5728\u505a\u6570\u636e\u8fc1\u79fb\u64cd\u4f5c\u65f6\uff0c\u9700\u8981\u5728\u6e90\u96c6\u7fa4\u548c\u76ee\u7684\u96c6\u7fa4\u521b\u5efa\u5b8c\u5168\u76f8\u540c\u7684\u4ed3\u5e93\uff0c\u4ee5\u4fbf\u76ee\u7684\u96c6\u7fa4\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u4ed3\u5e93\uff0c\u67e5\u770b\u5230\u6e90\u96c6\u7fa4\u5907\u4efd\u7684\u6570\u636e\u5feb\u7167\u3002")))}O.isMDXComponent=!0}}]);