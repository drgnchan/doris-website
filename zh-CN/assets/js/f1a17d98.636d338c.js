"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16228],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>s});var l=n(296540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=l.createContext({}),y=function(e){var a=l.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=y(e.components);return l.createElement(p.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},c=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=y(n),c=t,s=m["".concat(p,".").concat(c)]||m[c]||g[c]||r;return n?l.createElement(s,o(o({ref:a},d),{},{components:n})):l.createElement(s,o({ref:a},d))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:t,o[1]=i;for(var y=2;y<r;y++)o[y]=n[y];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},106744:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var l=n(58168),t=(n(296540),n(15680));const r={title:"MySQL Load",language:"zh-CN"},o=void 0,i={unversionedId:"data-operate/import/import-way/mysql-load-manual",id:"version-2.1/data-operate/import/import-way/mysql-load-manual",title:"MySQL Load",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/import/import-way/mysql-load-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/mysql-load-manual",permalink:"/zh-CN/docs/data-operate/import/import-way/mysql-load-manual",draft:!1,tags:[],version:"2.1",frontMatter:{title:"MySQL Load",language:"zh-CN"},sidebar:"docs",previous:{title:"Stream Load",permalink:"/zh-CN/docs/data-operate/import/import-way/stream-load-manual"},next:{title:"S3 Load",permalink:"/zh-CN/docs/data-operate/import/import-way/s3-load-manual"}},p={},y=[{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u652f\u6301\u6570\u636e\u683c\u5f0f",id:"\u652f\u6301\u6570\u636e\u683c\u5f0f",level:2},{value:"\u57fa\u672c\u64cd\u4f5c\u4e3e\u4f8b",id:"\u57fa\u672c\u64cd\u4f5c\u4e3e\u4f8b",level:2},{value:"\u5ba2\u6237\u7aef\u8fde\u63a5",id:"\u5ba2\u6237\u7aef\u8fde\u63a5",level:3},{value:"\u521b\u5efa\u6d4b\u8bd5\u8868",id:"\u521b\u5efa\u6d4b\u8bd5\u8868",level:3},{value:"\u5bfc\u5165\u5ba2\u6237\u7aef\u6587\u4ef6",id:"\u5bfc\u5165\u5ba2\u6237\u7aef\u6587\u4ef6",level:3},{value:"\u5bfc\u5165\u670d\u52a1\u7aef\u6587\u4ef6",id:"\u5bfc\u5165\u670d\u52a1\u7aef\u6587\u4ef6",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u5f02\u5e38\u7ed3\u679c",id:"\u5f02\u5e38\u7ed3\u679c",level:3},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],d={toc:y},m="wrapper";function g(e){let{components:a,...n}=e;return(0,t.yg)(m,(0,l.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"mysql-load"},"MySQL Load"),(0,t.yg)("version",{since:"dev"},(0,t.yg)("p",null,"\u8be5\u8bed\u53e5\u517c\u5bb9MySQL\u6807\u51c6\u7684",(0,t.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html"},"LOAD DATA"),"\u8bed\u6cd5\uff0c\u65b9\u4fbf\u7528\u6237\u5bfc\u5165\u672c\u5730\u6570\u636e\uff0c\u5e76\u964d\u4f4e\u5b66\u4e60\u6210\u672c\u3002"),(0,t.yg)("p",null,"MySQL Load \u540c\u6b65\u6267\u884c\u5bfc\u5165\u5e76\u8fd4\u56de\u5bfc\u5165\u7ed3\u679c\u3002\u7528\u6237\u53ef\u76f4\u63a5\u901a\u8fc7SQL\u8fd4\u56de\u4fe1\u606f\u5224\u65ad\u672c\u6b21\u5bfc\u5165\u662f\u5426\u6210\u529f\u3002"),(0,t.yg)("p",null,"MySQL Load \u4e3b\u8981\u9002\u7528\u4e8e\u5bfc\u5165\u5ba2\u6237\u7aef\u672c\u5730\u6587\u4ef6\uff0c\u6216\u901a\u8fc7\u7a0b\u5e8f\u5bfc\u5165\u6570\u636e\u6d41\u4e2d\u7684\u6570\u636e\u3002")),(0,t.yg)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,t.yg)("p",null,"MySQL Load\u548cStream Load\u529f\u80fd\u76f8\u4f3c, \u90fd\u662f\u5bfc\u5165\u672c\u5730\u6587\u4ef6\u5230Doris\u96c6\u7fa4\u4e2d, \u56e0\u6b64MySQL Load\u5b9e\u73b0\u590d\u7528\u4e86StreamLoad\u7684\u57fa\u7840\u5bfc\u5165\u80fd\u529b:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"FE\u63a5\u6536\u5230\u5ba2\u6237\u7aef\u6267\u884c\u7684MySQL Load\u8bf7\u6c42, \u5b8c\u6210SQL\u89e3\u6790\u5de5\u4f5c")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"FE\u5c06Load\u8bf7\u6c42\u62c6\u89e3,\u5e76\u5c01\u88c5\u4e3aStreamLoad\u7684\u8bf7\u6c42.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"FE\u9009\u62e9\u4e00\u4e2aBE\u8282\u70b9\u53d1\u9001StreamLoad\u8bf7\u6c42")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u53d1\u9001\u8bf7\u6c42\u7684\u540c\u65f6, FE\u4f1a\u5f02\u6b65\u4e14\u6d41\u5f0f\u7684\u4eceMySQL\u5ba2\u6237\u7aef\u8bfb\u53d6\u672c\u5730\u6587\u4ef6\u6570\u636e, \u5e76\u5b9e\u65f6\u7684\u53d1\u9001\u5230StreamLoad\u7684HTTP\u8bf7\u6c42\u4e2d.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"MySQL\u5ba2\u6237\u7aef\u6570\u636e\u4f20\u8f93\u5b8c\u6bd5, FE\u7b49\u5f85StreamLoad\u5b8c\u6210, \u5e76\u5c55\u793a\u5bfc\u5165\u6210\u529f\u6216\u8005\u5931\u8d25\u7684\u4fe1\u606f\u7ed9\u5ba2\u6237\u7aef."))),(0,t.yg)("h2",{id:"\u652f\u6301\u6570\u636e\u683c\u5f0f"},"\u652f\u6301\u6570\u636e\u683c\u5f0f"),(0,t.yg)("p",null,"MySQL Load \u652f\u6301\u6570\u636e\u683c\u5f0f\uff1aCSV\uff08\u6587\u672c\uff09\u3002"),(0,t.yg)("h2",{id:"\u57fa\u672c\u64cd\u4f5c\u4e3e\u4f8b"},"\u57fa\u672c\u64cd\u4f5c\u4e3e\u4f8b"),(0,t.yg)("h3",{id:"\u5ba2\u6237\u7aef\u8fde\u63a5"},"\u5ba2\u6237\u7aef\u8fde\u63a5"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"mysql --local-infile  -h 127.0.0.1 -P 9030 -u root -D testdb\n")),(0,t.yg)("p",null,"\u6ce8\u610f: \u6267\u884cMySQL Load\u8bed\u53e5\u7684\u65f6\u5019, \u5ba2\u6237\u7aef\u547d\u4ee4\u5fc5\u987b\u5e26\u6709",(0,t.yg)("inlineCode",{parentName:"p"},"--local-infile"),", \u5426\u5219\u6267\u884c\u53ef\u80fd\u4f1a\u51fa\u73b0\u9519\u8bef. \u5982\u679c\u662f\u901a\u8fc7JDBC\u65b9\u5f0f\u8fde\u63a5\u7684\u8bdd, \u9700\u8981\u5728URL\u4e2d\u9700\u8981\u52a0\u5165\u914d\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"allowLoadLocalInfile=true")),(0,t.yg)("h3",{id:"\u521b\u5efa\u6d4b\u8bd5\u8868"},"\u521b\u5efa\u6d4b\u8bd5\u8868"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE testdb.t1 (pk INT, v1 INT SUM) AGGREGATE KEY (pk) DISTRIBUTED BY hash (pk) PROPERTIES ('replication_num' = '1');\n")),(0,t.yg)("h3",{id:"\u5bfc\u5165\u5ba2\u6237\u7aef\u6587\u4ef6"},"\u5bfc\u5165\u5ba2\u6237\u7aef\u6587\u4ef6"),(0,t.yg)("p",null,"\u5047\u8bbe\u5728\u5ba2\u6237\u7aef\u672c\u5730\u5f53\u524d\u8def\u5f84\u4e0a\u6709\u4e00\u4e2aCSV\u6587\u4ef6, \u540d\u4e3a",(0,t.yg)("inlineCode",{parentName:"p"},"client_local.csv"),", \u4f7f\u7528MySQL Load\u8bed\u6cd5\u5c06\u8868\u5bfc\u5165\u5230\u6d4b\u8bd5\u8868",(0,t.yg)("inlineCode",{parentName:"p"},"testdb.t1"),"\u4e2d."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'client_local.csv'\nINTO TABLE testdb.t1\nPARTITION (partition_a, partition_b, partition_c, partition_d)\nCOLUMNS TERMINATED BY '\\t'\nLINES TERMINATED BY '\\n'\nIGNORE 1 LINES\n(k1, k2, v2, v10, v11)\nset (c1=k1,c2=k2,c3=v10,c4=v11)\nPROPERTIES (\"strict_mode\"=\"true\")\n")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"MySQL Load\u4ee5\u8bed\u6cd5",(0,t.yg)("inlineCode",{parentName:"li"},"LOAD DATA"),"\u5f00\u5934, \u6307\u5b9a",(0,t.yg)("inlineCode",{parentName:"li"},"LOCAL"),"\u8868\u793a\u8bfb\u53d6\u5ba2\u6237\u7aef\u6587\u4ef6."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"INFILE"),"\u5185\u586b\u5199\u672c\u5730\u6587\u4ef6\u8def\u5f84, \u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84, \u4e5f\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84.\u76ee\u524d\u53ea\u652f\u6301\u5355\u4e2a\u6587\u4ef6, \u4e0d\u652f\u6301\u591a\u4e2a\u6587\u4ef6"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"INTO TABLE"),"\u7684\u8868\u540d\u53ef\u4ee5\u6307\u5b9a\u6570\u636e\u5e93\u540d, \u5982\u6848\u4f8b\u6240\u793a. \u4e5f\u53ef\u4ee5\u7701\u7565, \u5219\u4f1a\u4f7f\u7528\u5f53\u524d\u7528\u6237\u6240\u5728\u7684\u6570\u636e\u5e93."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"PARTITION"),"\u8bed\u6cd5\u652f\u6301\u6307\u5b9a\u5206\u533a\u5bfc\u5165"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"COLUMNS TERMINATED BY"),"\u6307\u5b9a\u5217\u5206\u9694\u7b26"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"LINES TERMINATED BY"),"\u6307\u5b9a\u884c\u5206\u9694\u7b26"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"IGNORE num LINES"),"\u7528\u6237\u8df3\u8fc7CSV\u7684num\u8868\u5934."),(0,t.yg)("li",{parentName:"ol"},"\u5217\u6620\u5c04\u8bed\u6cd5, \u5177\u4f53\u53c2\u6570\u8be6\u89c1",(0,t.yg)("a",{parentName:"li",href:"/zh-CN/docs/data-operate/import/import-scenes/load-data-convert"},"\u5bfc\u5165\u7684\u6570\u636e\u8f6c\u6362")," \u7684\u5217\u6620\u5c04\u7ae0\u8282"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"PROPERTIES"),"\u5bfc\u5165\u53c2\u6570, \u5177\u4f53\u53c2\u6570\u8be6\u89c1",(0,t.yg)("a",{parentName:"li",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD"},"MySQL Load")," \u547d\u4ee4\u624b\u518c\u3002")),(0,t.yg)("h3",{id:"\u5bfc\u5165\u670d\u52a1\u7aef\u6587\u4ef6"},"\u5bfc\u5165\u670d\u52a1\u7aef\u6587\u4ef6"),(0,t.yg)("p",null,"\u5047\u8bbe\u5728FE\u8282\u70b9\u4e0a\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"/root/server_local.csv"),"\u8def\u5f84\u4e3a\u4e00\u4e2aCSV\u6587\u4ef6, \u4f7f\u7528MySQL\u5ba2\u6237\u7aef\u8fde\u63a5\u5bf9\u5e94\u7684FE\u8282\u70b9, \u7136\u540e\u6267\u884c\u4e00\u4e0b\u547d\u4ee4\u5c06\u6570\u636e\u5bfc\u5165\u5230\u6d4b\u8bd5\u8868\u4e2d."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA\nINFILE '/root/server_local.csv'\nINTO TABLE testdb.t1\nPARTITION (partition_a, partition_b, partition_c, partition_d)\nCOLUMNS TERMINATED BY '\\t'\nLINES TERMINATED BY '\\n'\nIGNORE 1 LINES\n(k1, k2, v2, v10, v11)\nset (c1=k1,c2=k2,c3=v10,c4=v11)\nPROPERTIES (\"strict_mode\"=\"true\")\n")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5bfc\u5165\u670d\u52a1\u7aef\u672c\u5730\u6587\u4ef6\u7684\u8bed\u6cd5\u548c\u5bfc\u5165\u5ba2\u6237\u7aef\u8bed\u6cd5\u7684\u552f\u4e00\u533a\u522b\u662f",(0,t.yg)("inlineCode",{parentName:"li"},"LOAD DATA"),"\u5173\u952e\u8bcd\u540e\u9762\u662f\u5426\u52a0\u5165",(0,t.yg)("inlineCode",{parentName:"li"},"LOCAL"),"\u5173\u952e\u5b57."),(0,t.yg)("li",{parentName:"ol"},"FE\u4e3a\u591a\u8282\u70b9\u90e8\u7f72, \u5bfc\u5165\u670d\u52a1\u7aef\u6587\u4ef6\u529f\u80fd\u53ea\u80fd\u591f\u5bfc\u5165\u5ba2\u6237\u7aef\u8fde\u63a5\u7684FE\u8282\u70b9, \u65e0\u6cd5\u5bfc\u5165\u5176\u4ed6FE\u8282\u70b9\u672c\u5730\u7684\u6587\u4ef6."),(0,t.yg)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u5bfc\u5165\u9ed8\u8ba4\u662f\u5173\u95ed, \u901a\u8fc7\u8bbe\u7f6eFE\u7684\u914d\u7f6e",(0,t.yg)("inlineCode",{parentName:"li"},"mysql_load_server_secure_path"),"\u5f00\u542f, \u5bfc\u5165\u6587\u4ef6\u7684\u5fc5\u987b\u5728\u8be5\u76ee\u5f55\u4e0b.")),(0,t.yg)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,t.yg)("p",null,"\u7531\u4e8e MySQL Load \u662f\u4e00\u79cd\u540c\u6b65\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u6240\u4ee5\u5bfc\u5165\u7684\u7ed3\u679c\u4f1a\u901a\u8fc7SQL\u8bed\u6cd5\u8fd4\u56de\u7ed9\u7528\u6237\u3002\n\u5982\u679c\u5bfc\u5165\u6267\u884c\u5931\u8d25, \u4f1a\u5c55\u793a\u5177\u4f53\u7684\u62a5\u9519\u4fe1\u606f. \u5982\u679c\u5bfc\u5165\u6210\u529f, \u5219\u4f1a\u663e\u793a\u5bfc\u5165\u7684\u884c\u6570."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"Query OK, 1 row affected (0.17 sec)\nRecords: 1  Deleted: 0  Skipped: 0  Warnings: 0\n")),(0,t.yg)("h3",{id:"\u5f02\u5e38\u7ed3\u679c"},"\u5f02\u5e38\u7ed3\u679c"),(0,t.yg)("p",null,"\u5982\u679c\u6267\u884c\u51fa\u73b0\u5f02\u5e38, \u4f1a\u5728\u5ba2\u6237\u7aef\u4e2d\u51fa\u73b0\u5982\u4e0b\u5f02\u5e38\u663e\u793a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"ERROR 1105 (HY000): errCode = 2, detailMessage = [DATA_QUALITY_ERROR]too many filtered rows with load id b612907c-ccf4-4ac2-82fe-107ece655f0f\n")),(0,t.yg)("p",null,"\u5f53\u9047\u5230\u8fd9\u7c7b\u5f02\u5e38\u9519\u8bef, \u53ef\u4ee5\u627e\u5230\u5176\u4e2d\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"loadId"),", \u53ef\u4ee5\u901a\u8fc7",(0,t.yg)("inlineCode",{parentName:"p"},"show load warnings"),"\u547d\u4ee4\u5728\u5ba2\u6237\u7aef\u4e2d\u5c55\u793a\u8be6\u7ec6\u7684\u5f02\u5e38\u4fe1\u606f."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"show load warnings where label='b612907c-ccf4-4ac2-82fe-107ece655f0f';\n")),(0,t.yg)("p",null,"\u5f02\u5e38\u4fe1\u606f\u4e2d\u7684LoadId\u5373\u4e3aWarning\u547d\u4ee4\u4e2d\u7684label\u5b57\u6bb5."),(0,t.yg)("h3",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"mysql_load_thread_pool"),"\u63a7\u5236\u5355\u4e2aFE\u4e2dMySQL Load\u5e76\u53d1\u6267\u884c\u7ebf\u7a0b\u4e2a\u6570, \u9ed8\u8ba4\u4e3a4. \u7ebf\u7a0b\u6c60\u7684\u6392\u961f\u961f\u5217\u5927\u5c0f\u4e3a",(0,t.yg)("inlineCode",{parentName:"li"},"mysql_load_thread_pool"),"\u76845\u500d, \u56e0\u6b64\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u53ef\u4ee5\u5e76\u53d1\u63d0\u4ea4\u7684\u4efb\u52a1\u4e3a 4 + 4","*","5 = 24\u4e2a. \u5982\u679c\u5e76\u53d1\u4e2a\u6570\u8d85\u8fc724\u65f6, \u53ef\u4ee5\u8c03\u5927\u8be5\u914d\u7f6e\u9879."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"mysql_load_server_secure_path"),"\u670d\u52a1\u7aef\u5bfc\u5165\u7684\u5b89\u5168\u8def\u5f84, \u9ed8\u8ba4\u4e3a\u7a7a, \u5373\u4e0d\u5141\u8bb8\u670d\u52a1\u7aef\u5bfc\u5165. \u5982\u9700\u5f00\u542f\u8fd9\u4e2a\u529f\u80fd, \u5efa\u8bae\u5728",(0,t.yg)("inlineCode",{parentName:"li"},"DORIS_HOME"),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"local_import_data"),"\u76ee\u5f55, \u7528\u4e8e\u5bfc\u5165\u6570\u636e."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"mysql_load_in_memory_record"),"\u5931\u8d25\u7684\u4efb\u52a1\u8bb0\u5f55\u4e2a\u6570, \u8be5\u8bb0\u5f55\u4f1a\u4fdd\u7559\u5728\u5185\u5b58\u4e2d, \u9ed8\u8ba4\u53ea\u4f1a\u4fdd\u7559\u6700\u8fd1\u768420. \u5982\u679c\u6709\u9700\u8981\u53ef\u4ee5\u8c03\u5927\u8be5\u914d\u7f6e. \u5728\u5185\u5b58\u4e2d\u7684\u8bb0\u5f55, \u6709\u6548\u671f\u4e3a1\u5929, \u5f02\u6b65\u6e05\u7406\u7ebf\u7a0b\u4f1a\u56fa\u5b9a\u4e00\u5929\u6e05\u7406\u4e00\u6b21\u8fc7\u671f\u6570\u636e.")),(0,t.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5982\u679c\u5ba2\u6237\u7aef\u51fa\u73b0",(0,t.yg)("inlineCode",{parentName:"p"},"LOAD DATA LOCAL INFILE file request rejected due to restrictions on access"),"\u9519\u8bef, \u9700\u8981\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"mysql  --local-infile=1"),"\u547d\u4ee4\u6765\u6253\u5f00\u5ba2\u6237\u7aef\u7684\u5bfc\u5165\u529f\u80fd.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"MySQL Load\u7684\u5bfc\u5165\u4f1a\u53d7\u5230StreamLoad\u7684\u914d\u7f6e\u9879\u9650\u5236, \u4f8b\u5982BE\u652f\u6301\u7684StreamLoad\u6700\u5927\u6587\u4ef6\u91cf\u53d7",(0,t.yg)("inlineCode",{parentName:"p"},"streaming_load_max_mb"),"\u63a7\u5236, \u9ed8\u8ba4\u4e3a10GB."))),(0,t.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5173\u4e8e MySQL Load \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"li",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD"},"MySQL Load")," \u547d\u4ee4\u624b\u518c\u3002")))}g.isMDXComponent=!0}}]);