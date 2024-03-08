"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27652],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>u});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var g=r.createContext({}),p=function(e){var a=r.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(g.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(t),s=n,u=d["".concat(g,".").concat(s)]||d[s]||y[s]||l;return t?r.createElement(u,o(o({ref:a},m),{},{components:t})):r.createElement(u,o({ref:a},m))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var g in a)hasOwnProperty.call(a,g)&&(i[g]=a[g]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},634872:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(58168),n=(t(296540),t(15680));const l={},o=void 0,i={unversionedId:"ecosystem/doris-streamloader",id:"version-2.1/ecosystem/doris-streamloader",title:"doris-streamloader",description:"---",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/ecosystem/doris-streamloader.md",sourceDirName:"ecosystem",slug:"/ecosystem/doris-streamloader",permalink:"/zh-CN/docs/ecosystem/doris-streamloader",draft:!1,tags:[],version:"2.1",frontMatter:{},sidebar:"docs",previous:{title:"Doris Kafka Connector",permalink:"/zh-CN/docs/ecosystem/doris-kafka-connector"},next:{title:"DataX Doriswriter",permalink:"/zh-CN/docs/ecosystem/datax"}},g={},p=[{value:"}",id:"",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u83b7\u53d6\u4e0e\u5b89\u88c5",id:"\u83b7\u53d6\u4e0e\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u7ed3\u679c\u8bf4\u660e",id:"\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"1. \u53c2\u6570\u63a8\u8350",id:"1-\u53c2\u6570\u63a8\u8350",level:3},{value:"2. \u63a8\u8350\u547d\u4ee4",id:"2-\u63a8\u8350\u547d\u4ee4",level:3},{value:"3. FAQ",id:"3-faq",level:3}],m={toc:p},d="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,r.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("p",null,'{\n"title": "Doris Streamloader",\n"language": "zh-CN"'),(0,n.yg)("h2",{id:""},"}"),(0,n.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-streamloader"},"Doris Streamloader")," \u662f\u4e00\u6b3e\u7528\u4e8e\u5c06\u6570\u636e\u5bfc\u5165 Doris \u6570\u636e\u5e93\u7684\u4e13\u7528\u5ba2\u6237\u7aef\u5de5\u5177\u3002\u76f8\u6bd4\u4e8e\u76f4\u63a5\u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"p"},"curl")," \u7684\u5355\u5e76\u53d1\u5bfc\u5165\uff0c\u8be5\u5de5\u5177\u53ef\u4ee5\u63d0\u4f9b\u591a\u5e76\u53d1\u5bfc\u5165\u7684\u529f\u80fd\uff0c\u964d\u4f4e\u5927\u6570\u636e\u91cf\u5bfc\u5165\u7684\u8017\u65f6\u3002\u62e5\u6709\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5e76\u53d1\u5bfc\u5165\uff0c\u5b9e\u73b0 Stream Load \u7684\u591a\u5e76\u53d1\u5bfc\u5165\u3002\u53ef\u4ee5\u901a\u8fc7 workers \u503c\u8bbe\u7f6e\u5e76\u53d1\u6570\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u591a\u6587\u4ef6\u5bfc\u5165\uff0c\u4e00\u6b21\u5bfc\u5165\u53ef\u4ee5\u540c\u65f6\u5bfc\u5165\u591a\u4e2a\u6587\u4ef6\u53ca\u76ee\u5f55\uff0c\u652f\u6301\u8bbe\u7f6e\u901a\u914d\u7b26\u4ee5\u53ca\u4f1a\u81ea\u52a8\u9012\u5f52\u83b7\u53d6\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u65ad\u70b9\u7eed\u4f20\uff0c\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u51fa\u73b0\u90e8\u5206\u5931\u8d25\u7684\u60c5\u51b5\uff0c\u652f\u6301\u5728\u5931\u8d25\u70b9\u5904\u8fdb\u884c\u7ee7\u7eed\u4f20\u8f93\u3002 "),(0,n.yg)("li",{parentName:"ul"},"\u81ea\u52a8\u91cd\u4f20\uff0c\u5728\u5bfc\u5165\u51fa\u73b0\u5931\u8d25\u7684\u60c5\u51b5\u540e\uff0c\u65e0\u9700\u624b\u52a8\u91cd\u4f20\uff0c\u5de5\u5177\u4f1a\u81ea\u52a8\u91cd\u4f20\u9ed8\u8ba4\u7684\u6b21\u6570\uff0c\u5982\u679c\u4ecd\u7136\u4e0d\u6210\u529f\uff0c\u6253\u5370\u51fa\u624b\u52a8\u91cd\u4f20\u7684\u547d\u4ee4\u3002")),(0,n.yg)("h2",{id:"\u83b7\u53d6\u4e0e\u5b89\u88c5"},"\u83b7\u53d6\u4e0e\u5b89\u88c5"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1.0 \u7248\u672c")," "),(0,n.yg)("p",null,"\u6e90\u4ee3\u7801:  ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-streamloader"},"https://github.com/apache/doris-streamloader")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,n.yg)("th",{parentName:"tr",align:null},"\u65e5\u671f"),(0,n.yg)("th",{parentName:"tr",align:null},"\u5e73\u53f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u94fe\u63a5"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.0"),(0,n.yg)("td",{parentName:"tr",align:null},"20240131"),(0,n.yg)("td",{parentName:"tr",align:null},"x64"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-streamloader-1.0.1-bin-x64.tar.xz"},"https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-streamloader-1.0.1-bin-x64.tar.xz"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.0"),(0,n.yg)("td",{parentName:"tr",align:null},"20240131"),(0,n.yg)("td",{parentName:"tr",align:null},"arm64"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-streamloader-1.0.1-bin-arm64.tar.xz"},"https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-streamloader-1.0.1-bin-arm64.tar.xz"))))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"\u83b7\u53d6\u7ed3\u679c\u5373\u4e3a\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u3002")),(0,n.yg)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\ndoris-streamloader --source_file={FILE_LIST} --url={FE_OR_BE_SERVER_URL}:{PORT} --header={STREAMLOAD_HEADER} --db={TARGET_DATABASE} --table={TARGET_TABLE}\n\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1. ",(0,n.yg)("inlineCode",{parentName:"strong"},"FILE_LIST")," \u652f\u6301\uff1a")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5355\u4e2a\u6587\u4ef6"),(0,n.yg)("p",{parentName:"li"},"  \u4f8b\u5982\uff1a\u5bfc\u5165\u5355\u4e2a\u6587\u4ef6 file.csv"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'doris-streamloader --source_file="dir" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5355\u4e2a\u76ee\u5f55"),(0,n.yg)("p",{parentName:"li"},"  \u4f8b\u5982\uff1a\u5bfc\u5165\u5355\u4e2a\u76ee\u5f55 dir"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'doris-streamloader --source_file="dir" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"        \n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5e26\u901a\u914d\u7b26\u7684\u6587\u4ef6\u540d\uff08\u9700\u8981\u7528\u5f15\u53f7\u5305\u56f4\uff09"),(0,n.yg)("p",{parentName:"li"},"  \u4f8b\u5982\uff1a\u5bfc\u5165 file0.csv, file1.csv, file2.csv"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'doris-streamloader --source_file="file*" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u9017\u53f7\u5206\u9694\u7684\u6587\u4ef6\u540d\u5217\u8868"),(0,n.yg)("p",{parentName:"li"},"  \u4f8b\u5982\uff1a\u5bfc\u5165 file0.csv, file1.csv file2.csv"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'doris-streamloader --source_file="file0.csv,file1.csv,file2.csv" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u9017\u53f7\u5206\u9694\u7684\u76ee\u5f55\u5217\u8868"),(0,n.yg)("p",{parentName:"li"},"\u4f8b\u5982\uff1a\u5bfc\u5165 dir1, dir2,dir3"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'doris-streamloader --source_file="dir1,dir2,dir3" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl" \n')))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"\u5f53\u9700\u8981\u591a\u4e2a\u6587\u4ef6\u5bfc\u5165\u65f6\uff0c\u4f7f\u7528 Doris Streamloader \u4e5f\u53ea\u4f1a\u4ea7\u751f\u4e00\u4e2a\u7248\u672c\u53f7 ")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2.")," ",(0,n.yg)("inlineCode",{parentName:"p"},"STREAMLOAD_HEADER")," ",(0,n.yg)("strong",{parentName:"p"},"\u652f\u6301 Stream Load \u7684\u6240\u6709\u53c2\u6570\uff0c\u591a\u4e2a\u53c2\u6570\u4e4b\u95f4\u7528  '?' \u5206\u9694\u3002")),(0,n.yg)("p",null,"\u7528\u6cd5\u4e3e\u4f8b\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'doris-streamloader --source_file="data.csv" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n')),(0,n.yg)("p",null,"\u4e0a\u8ff0\u53c2\u6570\u5747\u4e3a\u5fc5\u8981\u53c2\u6570\uff0c\u4e0b\u9762\u4ecb\u7ecd\u53ef\u9009\u53c2\u6570\uff1a"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,n.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,n.yg)("th",{parentName:"tr",align:null},"\u5efa\u8bae"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--u"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u540d"),(0,n.yg)("td",{parentName:"tr",align:null},"root"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--p"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u5bf9\u5e94\u7684\u5bc6\u7801"),(0,n.yg)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--compress"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u6570\u636e\u662f\u5426\u5728 HTTP \u4f20\u8f93\u65f6\u538b\u7f29"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u9ed8\u8ba4\uff0c\u6253\u5f00\u540e\u538b\u7f29\u89e3\u538b\u4f1a\u5206\u522b\u589e\u52a0\u5de5\u5177\u548c Doris BE \u7684 CPU \u538b\u529b\uff0c\u6240\u4ee5\u4ec5\u5728\u6570\u636e\u6e90\u6240\u5728\u673a\u5668\u7f51\u7edc\u5e26\u5bbd\u74f6\u9888\u65f6\u6253\u5f00")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--timeout"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001 HTTP \u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4, \u5355\u4f4d:\u79d2"),(0,n.yg)("td",{parentName:"tr",align:null},"60","*","60","*","10"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u9ed8\u8ba4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--batch"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u6279\u91cf\u8bfb\u53d6\u548c\u53d1\u9001\u7684\u7c92\u5ea6, \u5355\u4f4d: \u884c"),(0,n.yg)("td",{parentName:"tr",align:null},"4096"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u9ed8\u8ba4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--batch_byte"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u6279\u91cf\u8bfb\u53d6\u548c\u53d1\u9001\u7684\u7c92\u5ea6, \u5355\u4f4d: byte"),(0,n.yg)("td",{parentName:"tr",align:null},"943718400 (900MB)"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u9ed8\u8ba4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--workers"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u7684\u5e76\u53d1\u6570"),(0,n.yg)("td",{parentName:"tr",align:null},"0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6210 0 \u4e3a\u81ea\u52a8\u6a21\u5f0f\uff0c\u4f1a\u6839\u636e\u5bfc\u5165\u6570\u636e\u7684\u5927\u5c0f\uff0c\u78c1\u76d8\u7684\u541e\u5410\u91cf\uff0cStream Load \u5bfc\u5165\u901f\u5ea6\u8ba1\u7b97\u4e00\u4e2a\u503c\u3002 \u4e5f\u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\uff0c\u6027\u80fd\u597d\u7684\u96c6\u7fa4\u53ef\u4ee5\u8bbe\u7f6e\u5927\u70b9\uff0c\u6700\u597d\u4e0d\u8981\u8d85\u8fc7 10\u3002\u5982\u679c\u89c2\u5bdf\u5230\u5bfc\u5165\u5185\u5b58\u8fc7\u9ad8\uff08\u901a\u8fc7\u89c2\u5bdf Memtracker \u6216\u8005 Exceed \u65e5\u5fd7\uff09, \u5219\u53ef\u9002\u5f53\u964d\u4f4e worker \u6570\u91cf")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--disk_throughput"),(0,n.yg)("td",{parentName:"tr",align:null},"\u78c1\u76d8\u7684\u541e\u5410\u91cf\uff0c\u5355\u4f4d MB/s"),(0,n.yg)("td",{parentName:"tr",align:null},"800"),(0,n.yg)("td",{parentName:"tr",align:null},"\u901a\u5e38\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\u3002\u8be5\u503c\u53c2\u4e0e --workers \u7684\u81ea\u52a8\u63a8\u7b97\u8fc7\u7a0b\u3002 \u5982\u679c\u5e0c\u671b\u901a\u8fc7\u5de5\u5177\u80fd\u8ba1\u7b97\u51fa\u4e00\u4e2a\u9002\u5f53\u7684 workers \u6570\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u78c1\u76d8\u541e\u5410\u8bbe\u7f6e\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--streamload_throughput"),(0,n.yg)("td",{parentName:"tr",align:null},"Stream Load \u5bfc\u5165\u5b9e\u9645\u7684\u541e\u5410\u5927\u5c0f\uff0c\u5355\u4f4d MB/s"),(0,n.yg)("td",{parentName:"tr",align:null},"100"),(0,n.yg)("td",{parentName:"tr",align:null},"\u901a\u5e38\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\u3002\u8be5\u503c\u53c2\u4e0e --workers \u7684\u81ea\u52a8\u63a8\u7b97\u8fc7\u7a0b\u3002 \u9ed8\u8ba4\u503c\u662f\u901a\u8fc7\u6bcf\u65e5\u6027\u80fd\u6d4b\u8bd5\u73af\u5883\u7ed9\u51fa\u7684 Stream Load \u541e\u5410\u91cf\u4ee5\u53ca\u6027\u80fd\u53ef\u9884\u6d4b\u6027\u5f97\u51fa\u7684\u3002 \u5982\u679c\u5e0c\u671b\u901a\u8fc7\u5de5\u5177\u80fd\u8ba1\u7b97\u51fa\u4e00\u4e2a\u9002\u5f53\u7684 workers \u6570\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5b9e\u6d4b\u7684 Stream Load \u7684\u541e\u5410\uff0c\u5373\uff1a(LoadBytes","*","1000)/(LoadTimeMs","*","1024","*","1024) \u8ba1\u7b97\u51fa\u5b9e\u9645\u7684\u541e\u5410\u91cf")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--max_byte_per_task"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u5bfc\u5165\u4efb\u52a1\u6570\u636e\u91cf\u7684\u6700\u5927\u5927\u5c0f\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u503c\u5269\u4e0b\u7684\u6570\u636e\u4f1a\u88ab\u62c6\u5206\u5230\u4e00\u4e2a\u65b0\u7684\u5bfc\u5165\u4efb\u52a1\u4e2d\u3002"),(0,n.yg)("td",{parentName:"tr",align:null},"107374182400 (100G)"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u8bbe\u7f6e\u4e00\u4e2a\u5f88\u5927\u7684\u503c\u6765\u51cf\u5c11\u5bfc\u5165\u7684\u7248\u672c\u6570\u3002\u4f46\u5982\u679c\u9047\u5230 body exceed max size \u9519\u8bef\u4e14\u4e0d\u60f3\u8c03\u6574 streaming_load_max_mb \u53c2\u6570\uff08\u9700\u91cd\u542f be\uff09\uff0c\u53c8\u6216\u662f\u9047\u5230 -238 TOO MANY SEGMENT \u9519\u8bef\uff0c\u53ef\u4ee5\u4e34\u65f6\u8c03\u5c0f\u8fd9\u4e2a\u914d\u7f6e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--check_utf8"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,"\u662f\u5426\u5bf9\u5bfc\u5165\u6570\u636e\u7684\u7f16\u7801\u8fdb\u884c\u68c0\u67e5\uff1a"),"   ",(0,n.yg)("p",null," 1\uff09 false\uff0c\u90a3\u4e48\u4e0d\u505a\u68c0\u67e5\u76f4\u63a5\u5c06\u539f\u59cb\u6570\u636e\u5bfc\u5165; 2\uff09 true\uff0c\u90a3\u4e48\u5bf9\u6570\u636e\u4e2d\u975e utf-8 \u7f16\u7801\u7684\u5b57\u7b26\u7528 \ufffd \u8fdb\u884c\u66ff\u4ee3")),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u9ed8\u8ba4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--debug"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6253\u5370 Debug \u65e5\u5fd7"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u9ed8\u8ba4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--auto_retry"),(0,n.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u91cd\u4f20\u5931\u8d25\u7684 worker \u5e8f\u53f7\u548c task \u5e8f\u53f7\u7684\u5217\u8868"),(0,n.yg)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,n.yg)("td",{parentName:"tr",align:null},'\u4ec5\u5bfc\u5165\u5931\u8d25\u65f6\u91cd\u4f20\u4f7f\u7528\uff0c\u6b63\u5e38\u5bfc\u5165\u65e0\u9700\u5173\u5fc3\u3002\u5931\u8d25\u65f6\u4f1a\u63d0\u793a\u5177\u4f53\u53c2\u6570\u5185\u5bb9\uff0c\u590d\u5236\u6267\u884c\u5373\u53ef\u3002\u4f8b\uff1a\u5982\u679c --auto_retry="1,1,2,1" \u5219\u8868\u793a\uff1a \u9700\u8981\u91cd\u4f20\u7684task\u4e3a\uff1a\u7b2c\u4e00\u4e2a worker \u7684\u7b2c\u4e00\u4e2a task\uff0c\u7b2c\u4e8c\u4e2a worker \u7684\u7b2c\u4e00\u4e2a task\u3002')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--auto_retry_times"),(0,n.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u91cd\u4f20\u7684\u6b21\u6570"),(0,n.yg)("td",{parentName:"tr",align:null},"3"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u9ed8\u8ba4\uff0c\u5982\u679c\u4e0d\u60f3\u91cd\u4f20\u9700\u8981\u628a\u8fd9\u4e2a\u503c\u8bbe\u7f6e\u4e3a 0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--auto_retry_interval"),(0,n.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u91cd\u4f20\u7684\u95f4\u9694"),(0,n.yg)("td",{parentName:"tr",align:null},"60"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fdd\u6301\u9ed8\u8ba4\uff0c\u5982\u679c Doris \u56e0\u5b95\u673a\u5bfc\u81f4\u5931\u8d25\uff0c\u5efa\u8bae\u6839\u636e\u5b9e\u9645 Doris \u91cd\u542f\u7684\u65f6\u95f4\u95f4\u9694\u6765\u8bbe\u7f6e\u8be5\u503c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--log_filename"),(0,n.yg)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u5b58\u50a8\u7684\u4f4d\u7f6e"),(0,n.yg)("td",{parentName:"tr",align:null},'""'),(0,n.yg)("td",{parentName:"tr",align:null},'\u9ed8\u8ba4\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0\u4e0a\uff0c\u5982\u679c\u8981\u6253\u5370\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5b58\u50a8\u65e5\u5fd7\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u5982--log_filename = "/var/log"')))),(0,n.yg)("h2",{id:"\u7ed3\u679c\u8bf4\u660e"},"\u7ed3\u679c\u8bf4\u660e"),(0,n.yg)("p",null,"\u65e0\u8bba\u6210\u529f\u4e0e\u5931\u8d25\uff0c\u90fd\u4f1a\u663e\u793a\u6700\u7ec8\u7684\u7ed3\u679c\uff0c\u7ed3\u679c\u53c2\u6570\u8bf4\u660e\uff1a"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Status"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u6210\u529f\uff08Success\uff09\u4e0e\u5426\uff08Failed\uff09")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TotalRows"),(0,n.yg)("td",{parentName:"tr",align:null},"\u60f3\u8981\u5bfc\u5165\u6587\u4ef6\u4e2d\u6240\u6709\u7684\u884c\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"FailLoadRows"),(0,n.yg)("td",{parentName:"tr",align:null},"\u60f3\u8981\u5bfc\u5165\u6587\u4ef6\u4e2d\u6ca1\u6709\u5bfc\u5165\u7684\u884c\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LoadedRows"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u5bfc\u5165 Doris \u7684\u884c\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"FilteredRows"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u88ab Doris \u8fc7\u6ee4\u7684\u884c\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"UnselectedRows"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u88ab Doris \u5ffd\u7565\u7684\u884c\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LoadBytes"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u5bfc\u5165\u7684 byte \u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LoadTimeMs"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u5bfc\u5165\u7684\u65f6\u95f4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LoadFiles"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u5bfc\u5165\u7684\u6587\u4ef6\u5217\u8868")))),(0,n.yg)("p",null,"\u5177\u4f53\u4f8b\u5b50\u5982\u4e0b:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5bfc\u5165\u6210\u529f\uff0c\u6210\u529f\u4fe1\u606f\u5982\u4e0b\uff1a "),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-Go"},'Load Result: {\n        "Status": "Success",\n        "TotalRows": 120,\n        "FailLoadRows": 0,\n        "LoadedRows": 120,\n        "FilteredRows": 0,\n        "UnselectedRows": 0,\n        "LoadBytes": 40632,\n        "LoadTimeMs": 971,\n        "LoadFiles": [\n                "basic.csv",\n                "basic_data1.csv",\n                "basic_data2.csv",\n                "dir1/basic_data.csv",\n                "dir1/basic_data.csv.1",\n                "dir1/basic_data1.csv"\n        ]\n}\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5bfc\u5165\u5931\u8d25\uff1a\u5982\u679c\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u90e8\u5206\u6570\u636e\u6ca1\u6709\u5bfc\u5165\u5931\u8d25\u4e86\uff0c\u4f1a\u7ed9\u51fa\u91cd\u4f20\u4fe1\u606f\uff0c\u5982\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-Go"},'load has some error, and auto retry failed, you can retry by : \n./doris-streamloader --source_file /mnt/disk1/laihui/doris/tools/tpch-tools/bin/tpch-data/lineitem.tbl.1  --url="http://127.0.0.1:8239" --header="column_separator:|?columns: l_orderkey, l_partkey, l_suppkey, l_linenumber, l_quantity, l_extendedprice, l_discount, l_tax, l_returnflag,l_linestatus, l_shipdate,l_commitdate,l_receiptdate,l_shipinstruct,l_shipmode,l_comment,temp" --db="db" --table="lineitem1" -u root -p "" --compress=false --timeout=36000 --workers=3 --batch=4096 --batch_byte=943718400 --max_byte_per_task=1073741824 --check_utf8=true --report_duration=1 --auto_retry="2,1;1,1;0,1" --auto_retry_times=0 --auto_retry_interval=60\n')))),(0,n.yg)("p",null,"\u53ea\u9700\u590d\u5236\u8fd0\u884c\u8be5\u547d\u4ee4\u5373\u53ef\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"auto_retry")," \u8bf4\u660e\u53ef\u53c2\u8003, \u5e76\u7ed9\u51fa\u5931\u8d25\u7684\u7ed3\u679c\u4fe1\u606f\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Go"},'Load Result: {\n      "Status": "Failed",\n      "TotalRows": 1,\n      "FailLoadRows": 1,\n      "LoadedRows": 0,\n      "FilteredRows": 0,\n      "UnselectedRows": 0,\n      "LoadBytes": 0,\n      "LoadTimeMs": 104,\n      "LoadFiles": [\n              "/mnt/disk1/laihui/doris/tools/tpch-tools/bin/tpch-data/lineitem.tbl.1"\n      ]\n}\n\n')),(0,n.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,n.yg)("h3",{id:"1-\u53c2\u6570\u63a8\u8350"},"1. \u53c2\u6570\u63a8\u8350"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5fc5\u8981\u53c2\u6570\uff0c\u4e00\u5b9a\u8981\u914d\u7f6e\uff1a ",(0,n.yg)("inlineCode",{parentName:"p"},"--source_file=FILE_LIST --url=FE_OR_BE_SERVER_URL_WITH_PORT --header=STREAMLOAD_HEADER --db=TARGET_DATABASE --table=TARGET_TABLE")," \uff0c",(0,n.yg)("strong",{parentName:"p"},"\u5982\u679c\u9700\u8981\u5bfc\u5165\u591a\u4e2a\u6587\u4ef6\u65f6\uff0c\u63a8\u8350\u4f7f\u7528")," ",(0,n.yg)("inlineCode",{parentName:"p"},"source_file")," ",(0,n.yg)("strong",{parentName:"p"},"\u65b9\u5f0f\u3002"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"workers"),"\uff0c\u9ed8\u8ba4\u503c\u4e3a CPU \u6838\u6570\uff0c\u5728 CPU \u6838\u6570\u8fc7\u591a\u7684\u573a\u666f\uff08\u6bd4\u5982 96 \u6838\uff09\u4f1a\u4ea7\u751f\u592a\u591a\u7684\u5e76\u53d1\uff0c\u9700\u8981\u51cf\u5c11\u8fd9\u4e2a\u503c\uff0c",(0,n.yg)("strong",{parentName:"p"},"\u63a8\u8350\u4e00\u822c\u8bbe\u7f6e\u4e3a 8 \u5373\u53ef\u3002"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"max_byte_per_task"),"\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5f88\u5927\u7684\u503c\u6765\u51cf\u5c11\u5bfc\u5165\u7684 version \u6570\u3002\u4f46\u5982\u679c\u9047\u5230 ",(0,n.yg)("inlineCode",{parentName:"p"},"body exceed max size")," \u9519\u8bef\u4e14\u4e0d\u60f3\u8c03\u6574 ",(0,n.yg)("inlineCode",{parentName:"p"},"streaming_load_max_mb")," \u53c2\u6570\uff08\u9700\u91cd\u542f BE\uff09\uff0c\u53c8\u6216\u662f\u9047\u5230 ",(0,n.yg)("inlineCode",{parentName:"p"},"-238 TOO MANY SEGMENT")," \u9519\u8bef\uff0c\u53ef\u4ee5\u4e34\u65f6\u8c03\u5c0f\u8fd9\u4e2a\u914d\u7f6e\uff0c",(0,n.yg)("strong",{parentName:"p"},"\u4e00\u822c\u4f7f\u7528\u9ed8\u8ba4\u5373\u53ef\u3002"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5f71\u54cd version \u6570\u7684\u4e24\u4e2a\u53c2\u6570\uff1a"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"workers"),"\uff1aworker \u6570\u8d8a\u591a\uff0c\u7248\u672c\u53f7\u8d8a\u591a\uff0c\u5e76\u53d1\u8d8a\u9ad8\uff0c\u4e00\u822c\u4f7f\u7528 8 \u5373\u53ef\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"max_byte_per_task"),"\uff1a",(0,n.yg)("inlineCode",{parentName:"li"},"max_byte_per_task")," \u8d8a\u5927\uff0c\u5355\u4e2a version \u6570\u636e\u91cf\u8d8a\u5927\uff0cversion \u6570\u8d8a\u5c11\uff0c\u4f46\u662f\u8fd9\u4e2a\u503c\u8fc7\u5927\u53ef\u80fd\u4f1a\u9047\u5230 ",(0,n.yg)("inlineCode",{parentName:"li"},"-238 TOO MANY SEGMENT "),"\u7684\u95ee\u9898\u3002\u4e00\u822c\u4f7f\u7528\u9ed8\u8ba4\u503c\u5373\u53ef\u3002")),(0,n.yg)("h3",{id:"2-\u63a8\u8350\u547d\u4ee4"},"2. \u63a8\u8350\u547d\u4ee4"),(0,n.yg)("p",null,"\u8bbe\u7f6e\u5fc5\u8981\u53c2\u6570\u4ee5\u53ca\u8bbe\u7f6e ",(0,n.yg)("inlineCode",{parentName:"p"},"workers=8")," \u5373\u53ef\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},'./doris-streamloader --source_file="demo.csv,demoFile*.csv,demoDir" --url="http://127.0.0.1:8030" --header="column_separator:," --db="demo" --table="test_load" --u="root" --workers=8\n')),(0,n.yg)("h3",{id:"3-faq"},"3. FAQ"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u9047\u5230\u4e86\u90e8\u5206\u5b50\u4efb\u52a1\u5931\u8d25\u7684\u95ee\u9898\uff0c\u5f53\u65f6\u6ca1\u6709\u65ad\u70b9\u7eed\u4f20\u7eed\u4f20\u7684\u529f\u80fd\uff0c\u5bfc\u5165\u5931\u8d25\u540e\u91cd\u65b0\u5220\u8868\u5bfc\u5165\uff0c\u5982\u679c\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u5de5\u5177\u4f1a\u8fdb\u884c\u81ea\u52a8\u91cd\u4f20\uff0c\u5982\u679c\u91cd\u4f20\u5931\u8d25\u4f1a\u6253\u5370\u51fa\u91cd\u4f20\u547d\u4ee4\uff0c\u590d\u5236\u540e\u53ef\u4ee5\u624b\u52a8\u91cd\u4f20\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u8be5\u5de5\u5177\u7684\u9ed8\u8ba4\u5355\u4e2a\u5bfc\u5165\u662f 100G\uff0c\u8d85\u8fc7\u4e86 BE \u9ed8\u8ba4\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"streaming_load_max_mb")," \u9608\u503c\u5982\u679c\u4e0d\u5e0c\u671b\u91cd\u542f BE\uff0c\u53ef\u4ee5\u51cf\u5c11 ",(0,n.yg)("inlineCode",{parentName:"p"},"max_byte_per_task")," \u8fd9\u4e2a\u53c2\u6570\u7684\u5927\u5c0f\u3002"),(0,n.yg)("p",{parentName:"li"},"\u67e5\u770b ",(0,n.yg)("inlineCode",{parentName:"p"},"streaming_load_max_mb")," \u5927\u5c0f\u7684\u65b9\u6cd5\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-Go"},'-curl "http://127.0.0.1:8040/api/show_config"\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5bfc\u5165\u8fc7\u7a0b\u5982\u679c\u9047\u5230 ",(0,n.yg)("inlineCode",{parentName:"p"},"-238 TOO MANY SEGMENT")," \u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u51cf\u5c11 ",(0,n.yg)("inlineCode",{parentName:"p"},"max_byte_per_task")," \u7684\u5927\u5c0f\u3002"))))}y.isMDXComponent=!0}}]);