"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14261],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>g});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=l,g=m["".concat(o,".").concat(u)]||m[u]||y[u]||r;return a?t.createElement(g,i(i({ref:n},c),{},{components:a})):t.createElement(g,i({ref:n},c))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91359:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var t=a(58168),l=(a(296540),a(15680));const r={title:"local",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-functions/table-functions/local",id:"version-2.1/sql-manual/sql-functions/table-functions/local",title:"local",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/local.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/local",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/local",draft:!1,tags:[],version:"2.1",frontMatter:{title:"local",language:"zh-CN"},sidebar:"docs",previous:{title:"HDFS",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/hdfs"},next:{title:"ICEBERG_META",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/iceberg-meta"}},o={},s=[{value:"local",id:"local",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function y(e){let{components:n,...a}=e;return(0,l.yg)(m,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"local"},"local"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("version",{since:"dev"},(0,l.yg)("p",null,"local")),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"Local\u8868\u51fd\u6570\uff08table-valued-function,tvf\uff09\uff0c\u53ef\u4ee5\u8ba9\u7528\u6237\u50cf\u8bbf\u95ee\u5173\u7cfb\u8868\u683c\u5f0f\u6570\u636e\u4e00\u6837\uff0c\u8bfb\u53d6\u5e76\u8bbf\u95ee be \u4e0a\u7684\u6587\u4ef6\u5185\u5bb9\u3002\u76ee\u524d\u652f\u6301",(0,l.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"),"\u6587\u4ef6\u683c\u5f0f\u3002"),(0,l.yg)("p",null,"\u8be5\u51fd\u6570\u9700\u8981 ADMIN \u6743\u9650\u3002"),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'local(\n  "file_path" = "path/to/file.txt", \n  "backend_id" = "be_id",\n  "format" = "csv",\n  "keyn" = "valuen" \n  ...\n  );\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,l.yg)("p",null,"\u8bbf\u95eelocal\u6587\u4ef6\u7684\u76f8\u5173\u53c2\u6570\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"file_path")),(0,l.yg)("p",{parentName:"li"},"  \uff08\u5fc5\u586b\uff09\u5f85\u8bfb\u53d6\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u8be5\u8def\u5f84\u662f\u4e00\u4e2a\u76f8\u5bf9\u4e8e ",(0,l.yg)("inlineCode",{parentName:"p"},"user_files_secure_path")," \u76ee\u5f55\u7684\u76f8\u5bf9\u8def\u5f84, \u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"user_files_secure_path")," \u53c2\u6570\u662f ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/config/be-config"},"be\u7684\u4e00\u4e2a\u914d\u7f6e\u9879")," \u3002"),(0,l.yg)("p",{parentName:"li"},"  \u8def\u5f84\u4e2d\u4e0d\u80fd\u5305\u542b ",(0,l.yg)("inlineCode",{parentName:"p"},".."),"\uff0c\u53ef\u4ee5\u4f7f\u7528 glob \u8bed\u6cd5\u8fdb\u884c\u6a21\u7cca\u5339\u914d\uff0c\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"logs/*.log"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"backend_id"),":"),(0,l.yg)("p",{parentName:"li"},"  \uff08\u5fc5\u586b\uff09\u6587\u4ef6\u6240\u5728\u7684 be id\u3002 ",(0,l.yg)("inlineCode",{parentName:"p"},"backend_id")," \u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"show backends")," \u547d\u4ee4\u5f97\u5230\u3002"))),(0,l.yg)("p",null,"\u6587\u4ef6\u683c\u5f0f\u76f8\u5173\u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"format"),"\uff1a(\u5fc5\u586b) \u76ee\u524d\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"column_separator"),"\uff1a(\u9009\u586b) \u5217\u5206\u5272\u7b26, \u9ed8\u8ba4\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},","),"\u3002 ")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"line_delimiter"),"\uff1a(\u9009\u586b) \u884c\u5206\u5272\u7b26\uff0c\u9ed8\u8ba4\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"\\n"),"\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"compress_type"),": (\u9009\u586b) \u76ee\u524d\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE"),"\u3002 \u9ed8\u8ba4\u503c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"UNKNOWN"),", \u5c06\u4f1a\u6839\u636e ",(0,l.yg)("inlineCode",{parentName:"p"},"uri")," \u7684\u540e\u7f00\u81ea\u52a8\u63a8\u65ad\u7c7b\u578b\u3002"),(0,l.yg)("p",{parentName:"li"},"  \u4e0b\u97626\u4e2a\u53c2\u6570\u662f\u7528\u4e8ejson\u683c\u5f0f\u7684\u5bfc\u5165\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u7167\uff1a",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/load-json-format"},"Json Load"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"read_json_by_line"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},'"true"'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"strip_outer_array"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},'"false"'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"json_root"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a\u7a7a")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"json_paths"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a\u7a7a")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"num_as_string"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"false"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"fuzzy_parse"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"false")),(0,l.yg)("version",{since:"dev"},"\u4e0b\u97622\u4e2a\u53c2\u6570\u662f\u7528\u4e8ecsv\u683c\u5f0f\u7684\u5bfc\u5165")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"trim_double_quotes"),"\uff1a \u5e03\u5c14\u7c7b\u578b\uff0c\u9009\u586b\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"\uff0c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," \u65f6\u8868\u793a\u88c1\u526a\u6389 csv \u6587\u4ef6\u6bcf\u4e2a\u5b57\u6bb5\u6700\u5916\u5c42\u7684\u53cc\u5f15\u53f7")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"skip_lines"),"\uff1a \u6574\u6570\u7c7b\u578b\uff0c\u9009\u586b\uff0c\u9ed8\u8ba4\u503c\u4e3a0\uff0c\u542b\u4e49\u4e3a\u8df3\u8fc7csv\u6587\u4ef6\u7684\u524d\u51e0\u884c\u3002\u5f53\u8bbe\u7f6eformat\u8bbe\u7f6e\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"csv_with_names")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"p"},"csv_with_names_and_types")," \u65f6\uff0c\u8be5\u53c2\u6570\u4f1a\u5931\u6548 "))),(0,l.yg)("h3",{id:"examples"},"Examples"),(0,l.yg)("p",null,"\u5206\u6790\u6307\u5b9a BE \u4e0a\u7684\u65e5\u5fd7\u6587\u4ef6\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from local(\n        "file_path" = "log/be.out",\n        "backend_id" = "10006",\n        "format" = "csv")\n       where c1 like "%start_time%" limit 10;\n+--------------------------------------------------------+\n| c1                                                     |\n+--------------------------------------------------------+\n| start time: 2023\u5e74 08\u6708 07\u65e5 \u661f\u671f\u4e00 23:20:32 CST       |\n| start time: 2023\u5e74 08\u6708 07\u65e5 \u661f\u671f\u4e00 23:32:10 CST       |\n| start time: 2023\u5e74 08\u6708 08\u65e5 \u661f\u671f\u4e8c 00:20:50 CST       |\n| start time: 2023\u5e74 08\u6708 08\u65e5 \u661f\u671f\u4e8c 00:29:15 CST       |\n+--------------------------------------------------------+\n')),(0,l.yg)("p",null,"\u8bfb\u53d6\u548c\u8bbf\u95ee\u4f4d\u4e8e\u8def\u5f84",(0,l.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/student.csv"),"\u7684 csv\u683c\u5f0f\u6587\u4ef6\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from local(\n      "file_path" = "student.csv", \n      "backend_id" = "10003", \n      "format" = "csv");\n+------+---------+--------+\n| c1   | c2      | c3     |\n+------+---------+--------+\n| 1    | alice   | 18     |\n| 2    | bob     | 20     |\n| 3    | jack    | 24     |\n| 4    | jackson | 19     |\n| 5    | liming  | d18    |\n+------+---------+--------+\n')),(0,l.yg)("p",null,"\u53ef\u4ee5\u914d\u5408",(0,l.yg)("inlineCode",{parentName:"p"},"desc function"),"\u4f7f\u7528"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function local(\n      "file_path" = "student.csv", \n      "backend_id" = "10003", \n      "format" = "csv");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| c1    | TEXT | Yes  | false | NULL    | NONE  |\n| c2    | TEXT | Yes  | false | NULL    | NONE  |\n| c3    | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"local, table-valued-function, tvf\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"),(0,l.yg)("p",null,"  \u5173\u4e8elocal tvf\u7684\u66f4\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u7167 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-functions/table-functions/s3"},"S3")," tvf, \u552f\u4e00\u4e0d\u540c\u7684\u662f\u8bbf\u95ee\u5b58\u50a8\u7cfb\u7edf\u7684\u65b9\u5f0f\u4e0d\u4e00\u6837\u3002"))}y.isMDXComponent=!0}}]);