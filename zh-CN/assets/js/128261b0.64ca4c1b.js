"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[79621],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>g});var t=a(296540);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=t.createContext({}),o=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},y=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),c=o(a),m=s,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?t.createElement(g,l(l({ref:n},y),{},{components:a})):t.createElement(g,l({ref:n},y))}));function g(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:s,l[1]=i;for(var o=2;o<r;o++)l[o]=a[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},820628:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=a(58168),s=(a(296540),a(15680));const r={title:"S3",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/s3",id:"version-2.1/sql-manual/sql-functions/table-functions/s3",title:"S3",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/s3.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/s3",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/s3",draft:!1,tags:[],version:"2.1",frontMatter:{title:"S3",language:"zh-CN"},sidebar:"docs",previous:{title:"Outer \u7ec4\u5408\u5668",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-numbers-outer"},next:{title:"HDFS",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/hdfs"}},p={},o=[{value:"S3",id:"s3",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],y={toc:o},c="wrapper";function u(e){let{components:n,...a}=e;return(0,s.yg)(c,(0,t.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"s3"},"S3"),(0,s.yg)("h3",{id:"name"},"Name"),(0,s.yg)("version",{since:"1.2"},(0,s.yg)("p",null,"s3")),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("p",null,"S3\u8868\u51fd\u6570\uff08table-valued-function,tvf\uff09\uff0c\u53ef\u4ee5\u8ba9\u7528\u6237\u50cf\u8bbf\u95ee\u5173\u7cfb\u8868\u683c\u5f0f\u6570\u636e\u4e00\u6837\uff0c\u8bfb\u53d6\u5e76\u8bbf\u95ee S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684\u6587\u4ef6\u5185\u5bb9\u3002\u76ee\u524d\u652f\u6301",(0,s.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"),"\u6587\u4ef6\u683c\u5f0f\u3002"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'s3(\n  "uri" = "..",\n  "s3.access_key" = "...",\n  "s3.secret_key" = "...",\n  "s3.region" = "...",\n  "format" = "csv",\n  "keyn" = "valuen",\n  ...\n  );\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,s.yg)("p",null,"S3 tvf\u4e2d\u7684\u6bcf\u4e00\u4e2a\u53c2\u6570\u90fd\u662f\u4e00\u4e2a ",(0,s.yg)("inlineCode",{parentName:"p"},'"key"="value"')," \u5bf9\u3002\n\u8bbf\u95eeS3\u76f8\u5173\u53c2\u6570\uff1a"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"uri"),"\uff1a (\u5fc5\u586b) \u8bbf\u95eeS3\u7684uri\uff0cS3\u8868\u51fd\u6570\u4f1a\u6839\u636e ",(0,s.yg)("inlineCode",{parentName:"li"},"use_path_style")," \u53c2\u6570\u6765\u51b3\u5b9a\u662f\u5426\u4f7f\u7528 path style \u8bbf\u95ee\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u4e3a virtual-hosted style \u65b9\u5f0f"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"s3.access_key"),"\uff1a (\u5fc5\u586b)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"s3.secret_key"),"\uff1a (\u5fc5\u586b)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"s3.region"),"\uff1a (\u9009\u586b)\u3002\u5982\u679cMinio\u670d\u52a1\u8bbe\u7f6e\u4e86\u5176\u4ed6\u7684region\uff0c\u90a3\u4e48\u5fc5\u586b\uff0c\u5426\u5219\u9ed8\u8ba4\u4f7f\u7528",(0,s.yg)("inlineCode",{parentName:"li"},"us-east-1"),"\u3002"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"s3.session_token"),"\uff1a (\u9009\u586b)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"use_path_style"),"\uff1a(\u9009\u586b) \u9ed8\u8ba4\u4e3a",(0,s.yg)("inlineCode",{parentName:"li"},"false")," \u3002S3 SDK \u9ed8\u8ba4\u4f7f\u7528 virtual-hosted style \u65b9\u5f0f\u3002\u4f46\u67d0\u4e9b\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u53ef\u80fd\u6ca1\u5f00\u542f\u6216\u6ca1\u652f\u6301virtual-hosted style \u65b9\u5f0f\u7684\u8bbf\u95ee\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0 use_path_style \u53c2\u6570\u6765\u5f3a\u5236\u4f7f\u7528 path style \u65b9\u5f0f\u3002\u6bd4\u5982 ",(0,s.yg)("inlineCode",{parentName:"li"},"minio"),"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u5141\u8bb8",(0,s.yg)("inlineCode",{parentName:"li"},"path style"),"\u8bbf\u95ee\u65b9\u5f0f\uff0c\u6240\u4ee5\u5728\u8bbf\u95eeminio\u65f6\u8981\u52a0\u4e0a",(0,s.yg)("inlineCode",{parentName:"li"},"use_path_style=true"),"\u3002")),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1auri\u76ee\u524d\u652f\u6301\u4e09\u79cdschema\uff1ahttp://, https:// \u548c s3://"),(0,s.yg)("ol",{parentName:"blockquote"},(0,s.yg)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528http://\u6216https://, \u5219\u4f1a\u6839\u636e 'use_path_style' \u53c2\u6570\u6765\u51b3\u5b9a\u662f\u5426\u4f7f\u7528'path style'\u65b9\u5f0f\u8bbf\u95ees3"),(0,s.yg)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528s3://, \u5219\u90fd\u4f7f\u7528 'virtual-hosted style' \u65b9\u5f0f\u8bbf\u95ees3, 'use_path_style'\u53c2\u6570\u65e0\u6548\u3002"),(0,s.yg)("li",{parentName:"ol"},"\u5982\u679curi\u8def\u5f84\u4e0d\u5b58\u5728\u6216\u6587\u4ef6\u90fd\u662f\u7a7a\u6587\u4ef6\uff0cs3 tvf\u5c06\u8fd4\u56de\u7a7a\u96c6\u5408")),(0,s.yg)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u4f7f\u7528\u6848\u4f8b\u53ef\u4ee5\u53c2\u8003\u6700\u4e0b\u65b9 Best Practice\u3002")),(0,s.yg)("p",null,"\u6587\u4ef6\u683c\u5f0f\u53c2\u6570\uff1a"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"format"),"\uff1a(\u5fc5\u586b) \u76ee\u524d\u652f\u6301 ",(0,s.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"column_separator"),"\uff1a(\u9009\u586b) \u5217\u5206\u5272\u7b26, \u9ed8\u8ba4\u4e3a",(0,s.yg)("inlineCode",{parentName:"p"},","),"\u3002")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"line_delimiter"),"\uff1a(\u9009\u586b) \u884c\u5206\u5272\u7b26\uff0c\u9ed8\u8ba4\u4e3a",(0,s.yg)("inlineCode",{parentName:"p"},"\\n"),"\u3002")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"compress_type"),": (\u9009\u586b) \u76ee\u524d\u652f\u6301 ",(0,s.yg)("inlineCode",{parentName:"p"},"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE"),"\u3002 \u9ed8\u8ba4\u503c\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"UNKNOWN"),", \u5c06\u4f1a\u6839\u636e ",(0,s.yg)("inlineCode",{parentName:"p"},"uri")," \u7684\u540e\u7f00\u81ea\u52a8\u63a8\u65ad\u7c7b\u578b\u3002"),(0,s.yg)("p",{parentName:"li"},"\u4e0b\u97626\u4e2a\u53c2\u6570\u662f\u7528\u4e8ejson\u683c\u5f0f\u7684\u5bfc\u5165\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u7167\uff1a",(0,s.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/load-json-format"},"Json Load"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"read_json_by_line"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},'"true"'))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"strip_outer_array"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},'"false"'))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"json_root"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a\u7a7a")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"jsonpaths"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a\u7a7a")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"num_as_string"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"false"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"fuzzy_parse"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"false")),(0,s.yg)("version",{since:"dev"},"\u4e0b\u97622\u4e2a\u53c2\u6570\u662f\u7528\u4e8ecsv\u683c\u5f0f\u7684\u5bfc\u5165")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"trim_double_quotes"),"\uff1a \u5e03\u5c14\u7c7b\u578b\uff0c\u9009\u586b\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"false"),"\uff0c\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"true")," \u65f6\u8868\u793a\u88c1\u526a\u6389 csv \u6587\u4ef6\u6bcf\u4e2a\u5b57\u6bb5\u6700\u5916\u5c42\u7684\u53cc\u5f15\u53f7")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"skip_lines"),"\uff1a \u6574\u6570\u7c7b\u578b\uff0c\u9009\u586b\uff0c\u9ed8\u8ba4\u503c\u4e3a0\uff0c\u542b\u4e49\u4e3a\u8df3\u8fc7csv\u6587\u4ef6\u7684\u524d\u51e0\u884c\u3002\u5f53\u8bbe\u7f6eformat\u8bbe\u7f6e\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"csv_with_names")," \u6216 ",(0,s.yg)("inlineCode",{parentName:"p"},"csv_with_names_and_types")," \u65f6\uff0c\u8be5\u53c2\u6570\u4f1a\u5931\u6548"))),(0,s.yg)("p",null,"\u5176\u4ed6\u53c2\u6570\uff1a"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"path_partition_keys"),'\uff1a\uff08\u9009\u586b\uff09\u6307\u5b9a\u6587\u4ef6\u8def\u5f84\u4e2d\u643a\u5e26\u7684\u5206\u533a\u5217\u540d\uff0c\u4f8b\u5982/path/to/city=beijing/date="2023-07-09", \u5219\u586b\u5199',(0,s.yg)("inlineCode",{parentName:"li"},'path_partition_keys="city,date"'),"\uff0c\u5c06\u4f1a\u81ea\u52a8\u4ece\u8def\u5f84\u4e2d\u8bfb\u53d6\u76f8\u5e94\u5217\u540d\u548c\u5217\u503c\u8fdb\u884c\u5bfc\u5165\u3002")),(0,s.yg)("h3",{id:"example"},"Example"),(0,s.yg)("p",null,"\u8bfb\u53d6\u5e76\u8bbf\u95ee S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684csv\u683c\u5f0f\u6587\u4ef6"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                "s3.access_key"= "minioadmin",\n                "s3.secret_key" = "minioadmin",\n                "format" = "csv",\n                "use_path_style" = "true") order by c1;\n')),(0,s.yg)("p",null,"\u53ef\u4ee5\u914d\u5408",(0,s.yg)("inlineCode",{parentName:"p"},"desc function"),"\u4f7f\u7528"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                 "s3.access_key"= "minioadmin",\n                 "s3.secret_key" = "minioadmin",\n                 "format" = "csv",\n                 "use_path_style" = "true");\n')),(0,s.yg)("h3",{id:"keywords"},"Keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"s3, table-valued-function, tvf\n")),(0,s.yg)("h3",{id:"best-practice"},"Best Practice"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"\u4e0d\u540curl schema\u7684\u5199\u6cd5"),"\nhttp:// \u3001https:// \u4f7f\u7528\u793a\u4f8b\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'// \u6ce8\u610fURI bucket\u5199\u6cd5\u4ee5\u53cause_path_style\u53c2\u6570\u8bbe\u7f6e\uff0chttp\u540c\u7406\u3002\n// \u7531\u4e8e\u8bbe\u7f6e\u4e86"use_path_style"="true", \u6240\u4ee5\u5c06\u91c7\u7528path style\u65b9\u5f0f\u8bbf\u95ees3\u3002\nselect * from s3(\n    "uri" = "https://endpoint/bucket/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="true");\n\n// \u6ce8\u610fURI bucket\u5199\u6cd5\u4ee5\u53cause_path_style\u53c2\u6570\u8bbe\u7f6e\uff0chttp\u540c\u7406\u3002\n// \u7531\u4e8e\u8bbe\u7f6e\u4e86"use_path_style"="false", \u6240\u4ee5\u5c06\u91c7\u7528virtual-hosted style\u65b9\u5f0f\u8bbf\u95ees3\u3002\nselect * from s3(\n    "uri" = "https://bucket.endpoint/bucket/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="false");\n\n// \u963f\u91cc\u4e91oss\u548c\u817e\u8baf\u4e91cos\u91c7\u7528virtual-hosted style\u65b9\u5f0f\u8bbf\u95ees3\u3002\n// OSS\nselect * from s3(\n    "uri" = "http://example-bucket.oss-cn-beijing.aliyuncs.com/your-folder/file.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "oss-cn-beijing",\n    "format" = "parquet",\n    "use_path_style" = "false");\n// COS\nselect * from s3(\n    "uri" = "https://example-bucket.cos.ap-hongkong.myqcloud.com/your-folder/file.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "ap-hongkong",\n    "format" = "parquet",\n    "use_path_style" = "false");\n\n// \u767e\u5ea6\u4e91bos\u91c7\u7528\u517c\u5bb9s3\u534f\u8bae\u7684virtual-hosted style\u65b9\u5f0f\u8bbf\u95ees3\u3002\n// BOS\nselect * from s3(\n    "uri" = "https://example-bucket.s3.bj.bcebos.com/your-folder/file.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "bj",\n    "format" = "parquet",\n    "use_path_style" = "false");\n')),(0,s.yg)("p",null,"s3:// \u4f7f\u7528\u793a\u4f8b\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'// \u6ce8\u610fURI bucket\u5199\u6cd5, \u65e0\u9700\u8bbe\u7f6euse_path_style\u53c2\u6570\u3002\n// \u5c06\u91c7\u7528virtual-hosted style\u65b9\u5f0f\u8bbf\u95ees3\u3002\nselect * from s3(\n    "uri" = "s3://bucket.endpoint/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv");    \n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"csv format"),"\n\u7531\u4e8eS3 table-valued-function\u4e8b\u5148\u5e76\u4e0d\u77e5\u9053table schema\uff0c\u6240\u4ee5\u4f1a\u5148\u8bfb\u4e00\u904d\u6587\u4ef6\u6765\u89e3\u6790\u51fatable schema\u3002"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"csv")," \u683c\u5f0f: S3 table-valued-function \u8bfb\u53d6S3\u4e0a\u7684\u6587\u4ef6\u5e76\u5f53\u4f5ccsv\u6587\u4ef6\u6765\u5904\u7406\uff0c\u8bfb\u53d6\u6587\u4ef6\u4e2d\u7684\u7b2c\u4e00\u884c\u7528\u4e8e\u89e3\u6790table schema\u3002\u6587\u4ef6\u7b2c\u4e00\u884c\u7684\u5217\u4e2a\u6570",(0,s.yg)("inlineCode",{parentName:"p"},"n"),"\u5c06\u4f5c\u4e3atable schema\u7684\u5217\u4e2a\u6570\uff0ctable schema\u7684\u5217\u540d\u5219\u81ea\u52a8\u53d6\u540d\u4e3a",(0,s.yg)("inlineCode",{parentName:"p"},"c1, c2, ..., cn")," \uff0c\u5217\u7c7b\u578b\u90fd\u8bbe\u7f6e\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"String"),", \u4e3e\u4f8b:"),(0,s.yg)("p",null,"student1.csv\u6587\u4ef6\u5185\u5bb9\u4e3a\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"1,ftw,12\n2,zs,18\n3,ww,20\n")),(0,s.yg)("p",null,"\u4f7f\u7528S3 tvf"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv",\n->                 "use_path_style" = "true") order by c1;\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n')),(0,s.yg)("p",null,"\u53ef\u4ee5\u914d\u5408 ",(0,s.yg)("inlineCode",{parentName:"p"},"desc function S3()")," \u6765\u67e5\u770btable schema"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| c1    | TEXT | Yes  | false | NULL    | NONE  |\n| c2    | TEXT | Yes  | false | NULL    | NONE  |\n| c3    | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"csv_with_names format"),"\n",(0,s.yg)("inlineCode",{parentName:"p"},"csv_with_names"),"\u683c\u5f0f\uff1a\u89e3\u6790\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u4f5c\u4e3atable schema\u7684\u5217\u4e2a\u6570\u548c\u5217\u540d\uff0c\u5217\u7c7b\u578b\u5219\u90fd\u8bbe\u7f6e\u4e3a ",(0,s.yg)("inlineCode",{parentName:"p"},"String"),", \u4e3e\u4f8b\uff1a"),(0,s.yg)("p",null,"student_with_names.csv\u6587\u4ef6\u5185\u5bb9\u4e3a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"id,name,age\n1,ftw,12\n2,zs,18\n3,ww,20\n")),(0,s.yg)("p",null,"\u4f7f\u7528S3 tvf"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n')),(0,s.yg)("p",null,"\u540c\u6837\u914d\u5408",(0,s.yg)("inlineCode",{parentName:"p"},"desc function S3()")," \u53ef\u67e5\u770btable schema"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"csv_with_names_and_types foramt")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"csv_with_names_and_types"),"\u683c\u5f0f\uff1a\u76ee\u524d\u6682\u4e0d\u652f\u6301\u4ececsv\u6587\u4ef6\u4e2d\u89e3\u6790\u51facolumn type\u3002\u4f7f\u7528\u8be5format\u65f6\uff0cS3 tvf\u4f1a\u89e3\u6790\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u4f5c\u4e3atable schema\u7684\u5217\u4e2a\u6570\u548c\u5217\u540d\uff0c\u5217\u7c7b\u578b\u5219\u90fd\u8bbe\u7f6e\u4e3a String\uff0c\u540c\u65f6\u5c06\u5ffd\u7565\u8be5\u6587\u4ef6\u7684\u7b2c\u4e8c\u884c\u3002"),(0,s.yg)("p",null,"student_with_names_and_types.csv\u6587\u4ef6\u5185\u5bb9\u4e3a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"id,name,age\nINT,STRING,INT\n1,ftw,12\n2,zs,18\n3,ww,20\n")),(0,s.yg)("p",null,"\u4f7f\u7528S3 tvf"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n')),(0,s.yg)("p",null,"\u540c\u6837\u914d\u5408",(0,s.yg)("inlineCode",{parentName:"p"},"desc function S3()")," \u53ef\u67e5\u770btable schema"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"json format")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"json")," \u683c\u5f0f\uff1ajson\u683c\u5f0f\u6d89\u53ca\u5230\u8f83\u591a\u7684\u53ef\u9009\u53c2\u6570\uff0c\u5404\u4e2a\u53c2\u6570\u7684\u610f\u4e49\u53ef\u4ee5\u53c2\u8003\uff1a",(0,s.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/load-json-format"},"Json Load"),"\u3002 S3 tvf\u67e5\u8be2json\u683c\u5f0f\u6587\u4ef6\u65f6\u6839\u636e ",(0,s.yg)("inlineCode",{parentName:"p"},"json_root")," \u548c ",(0,s.yg)("inlineCode",{parentName:"p"},"jsonpaths")," \u53c2\u6570\u5b9a\u4f4d\u5230\u4e00\u4e2ajson\u5bf9\u8c61\uff0c\u5c06\u8be5\u5bf9\u8c61\u7684\u4e2d\u7684",(0,s.yg)("inlineCode",{parentName:"p"},"key")," \u4f5c\u4e3atable schema\u7684\u5217\u540d\uff0c\u5217\u7c7b\u578b\u90fd\u8bbe\u7f6e\u4e3aString\u3002\u4e3e\u4f8b\uff1a"),(0,s.yg)("p",null,"data.json\u6587\u4ef6"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'[{"id":1, "name":"ftw", "age":18}]\n[{"id":2, "name":"xxx", "age":17}]\n[{"id":3, "name":"yyy", "age":19}]\n')),(0,s.yg)("p",null,"\u4f7f\u7528S3 tvf\u67e5\u8be2"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/data.json",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "json",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style"="true");\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 18   |\n| 2    | xxx  | 17   |\n| 3    | yyy  | 19   |\n+------+------+------+\n\nMySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/data.json",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "json",\n    "strip_outer_array" = "true",\n    "jsonpaths" = "[\\"$.id\\", \\"$.age\\"]",\n    "use_path_style"="true");\n+------+------+\n| id   | age  |\n+------+------+\n| 1    | 18   |\n| 2    | 17   |\n| 3    | 19   |\n+------+------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"parquet format")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"parquet")," \u683c\u5f0f\uff1aS3 tvf\u652f\u6301\u4eceparquet\u6587\u4ef6\u4e2d\u89e3\u6790\u51fatable schema\u7684\u5217\u540d\u3001\u5217\u7c7b\u578b\u3002\u4e3e\u4f8b\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "parquet",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n')),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> desc function s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "parquet",\n    "use_path_style"="true");\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"orc format")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"orc")," \u683c\u5f0f\uff1a\u548c",(0,s.yg)("inlineCode",{parentName:"p"},"parquet")," format\u4f7f\u7528\u65b9\u6cd5\u4e00\u81f4, \u5c06",(0,s.yg)("inlineCode",{parentName:"p"},"format"),"\u53c2\u6570\u8bbe\u7f6e\u4e3aorc\u3002"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.orc",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "orc",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"avro format")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"avro"),"  \u683c\u5f0f\uff1aS3 tvf\u652f\u6301\u4eceavro\u6587\u4ef6\u4e2d\u89e3\u6790\u51fatable schema\u7684\u5217\u540d\u3001\u5217\u7c7b\u578b\u3002\u4e3e\u4f8b\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'select * from s3(\n         "uri" = "http://127.0.0.1:9312/test2/person.avro",\n         "ACCESS_KEY" = "ak",\n         "SECRET_KEY" = "sk",\n         "FORMAT" = "avro");\n+--------+--------------+-------------+-----------------+\n| name   | boolean_type | double_type | long_type       |\n+--------+--------------+-------------+-----------------+\n| Alyssa |            1 |     10.0012 | 100000000221133 |\n| Ben    |            0 |    5555.999 |      4009990000 |\n| lisi   |            0 | 5992225.999 |      9099933330 |\n+--------+--------------+-------------+-----------------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"uri\u5305\u542b\u901a\u914d\u7b26")),(0,s.yg)("p",null,"uri\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\u6765\u8bfb\u53d6\u591a\u4e2a\u6587\u4ef6\u3002\u6ce8\u610f\uff1a\u5982\u679c\u4f7f\u7528\u901a\u914d\u7b26\u8981\u4fdd\u8bc1\u5404\u4e2a\u6587\u4ef6\u7684\u683c\u5f0f\u662f\u4e00\u81f4\u7684(\u5c24\u5176\u662fcsv/csv_with_names/csv_with_names_and_types\u7b97\u505a\u4e0d\u540c\u7684\u683c\u5f0f)\uff0cS3 tvf\u7528\u7b2c\u4e00\u4e2a\u6587\u4ef6\u6765\u89e3\u6790\u51fatable schema\u3002\n\u5982\u4e0b\u4e24\u4e2acsv\u6587\u4ef6\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"// file1.csv\n1,aaa,18\n2,qqq,20\n3,qwe,19\n\n// file2.csv\n5,cyx,19\n6,ftw,21\n")),(0,s.yg)("p",null,"\u53ef\u4ee5\u5728uri\u4e0a\u4f7f\u7528\u901a\u914d\u7b26\u6765\u5bfc\u5165\u3002"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n        "uri" = "http://127.0.0.1:9312/test2/file*.csv",\n        "s3.access_key"= "minioadmin",\n        "s3.secret_key" = "minioadmin",\n        "format" = "csv",\n        "use_path_style"="true");\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | aaa  | 18   |\n| 2    | qqq  | 20   |\n| 3    | qwe  | 19   |\n| 5    | cyx  | 19   |\n| 6    | ftw  | 21   |\n+------+------+------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"\u914d\u5408 ",(0,s.yg)("inlineCode",{parentName:"strong"},"insert into")," \u548c ",(0,s.yg)("inlineCode",{parentName:"strong"},"cast")," \u4f7f\u7528 ",(0,s.yg)("inlineCode",{parentName:"strong"},"S3")," tvf")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'// \u521b\u5efadoris\u5185\u90e8\u8868\nCREATE TABLE IF NOT EXISTS ${testTable}\n    (\n        id int,\n        name varchar(50),\n        age int\n    )\n    COMMENT "my first table"\n    DISTRIBUTED BY HASH(id) BUCKETS 32\n    PROPERTIES("replication_num" = "1");\n\n// \u4f7f\u7528S3\u63d2\u5165\u6570\u636e\ninsert into ${testTable} (id,name,age)\nselect cast (id as INT) as id, name, cast (age as INT) as age\nfrom s3(\n    "uri" = "${uri}",\n    "s3.access_key"= "${ak}",\n    "s3.secret_key" = "${sk}",\n    "format" = "${format}",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style" = "true");\n')))}u.isMDXComponent=!0}}]);