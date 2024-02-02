"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67096],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>y});var a=t(11504);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=l,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(45072),l=(t(11504),t(95788));const r={title:"UPDATE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE",title:"UPDATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"UPDATE",language:"zh-CN"},sidebar:"docs",previous:{title:"DELETE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"},next:{title:"EXPORT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"}},s={},p=[{value:"UPDATE",id:"update",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Required Parameters",id:"required-parameters",level:4},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"Note",id:"note",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"update"},"UPDATE"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"UPDATE"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u662f\u4e3a\u8fdb\u884c\u5bf9\u6570\u636e\u8fdb\u884c\u66f4\u65b0\u7684\u64cd\u4f5c\uff0cUPDATE \u8bed\u53e5\u76ee\u524d\u4ec5\u652f\u6301 UNIQUE KEY \u6a21\u578b\u3002"),(0,l.yg)("p",null,"UPDATE\u64cd\u4f5c\u76ee\u524d\u53ea\u652f\u6301\u66f4\u65b0Value\u5217\uff0cKey\u5217\u7684\u66f4\u65b0\u53ef\u53c2\u8003",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/ecosystem/flink-doris-connector#%E4%BD%BF%E7%94%A8flinkcdc%E6%9B%B4%E6%96%B0key%E5%88%97"},"\u4f7f\u7528FlinkCDC\u66f4\u65b0Key\u5217"),"\u3002"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE target_table [table_alias]\n    SET assignment_list\n    WHERE condition\n\nassignment_list:\n    assignment [, assignment] ...\n\nassignment:\n    col_name = value\n\nvalue:\n    {expr | DEFAULT}\n")),(0,l.yg)("version",{since:"dev"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE target_table [table_alias]\n    SET assignment_list\n    [ FROM additional_tables]\n    WHERE condition\n"))),(0,l.yg)("h4",{id:"required-parameters"},"Required Parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"target_table: \u5f85\u66f4\u65b0\u6570\u636e\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f 'db_name.table_name' \u5f62\u5f0f"),(0,l.yg)("li",{parentName:"ul"},"assignment_list: \u5f85\u66f4\u65b0\u7684\u76ee\u6807\u5217\uff0c\u5f62\u5982 'col_name = value, col_name = value' \u683c\u5f0f"),(0,l.yg)("li",{parentName:"ul"},"WHERE condition: \u671f\u671b\u66f4\u65b0\u7684\u6761\u4ef6\uff0c\u4e00\u4e2a\u8fd4\u56de true \u6216\u8005 false \u7684\u8868\u8fbe\u5f0f\u5373\u53ef")),(0,l.yg)("h4",{id:"optional-parameters"},"Optional Parameters"),(0,l.yg)("version",{since:"dev"},(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"table_alias: \u8868\u7684\u522b\u540d"),(0,l.yg)("li",{parentName:"ul"},"FROM additional_tables: \u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\uff0c\u7528\u4e8e\u9009\u4e2d\u66f4\u65b0\u7684\u884c\uff0c\u6216\u8005\u83b7\u53d6\u66f4\u65b0\u7684\u503c\u3002\u6ce8\u610f\uff0c\u5982\u9700\u8981\u5728\u6b64\u5217\u8868\u4e2d\u518d\u6b21\u4f7f\u7528\u76ee\u6807\u8868\uff0c\u9700\u8981\u4e3a\u5176\u663e\u5f0f\u6307\u5b9a\u522b\u540d\u3002"))),(0,l.yg)("h4",{id:"note"},"Note"),(0,l.yg)("p",null,"\u5f53\u524d UPDATE \u8bed\u53e5\u4ec5\u652f\u6301\u5728 UNIQUE KEY \u6a21\u578b\u4e0a\u7684\u884c\u66f4\u65b0\u3002"),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"test")," \u8868\u662f\u4e00\u4e2a unique \u6a21\u578b\u7684\u8868\uff0c\u5305\u542b: k1, k2, v1, v2  \u56db\u4e2a\u5217\u3002\u5176\u4e2d k1, k2 \u662f key\uff0cv1, v2 \u662fvalue\uff0c\u805a\u5408\u65b9\u5f0f\u662f Replace\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5c06 'test' \u8868\u4e2d\u6ee1\u8db3\u6761\u4ef6 k1 =1 , k2 =2 \u7684 v1 \u5217\u66f4\u65b0\u4e3a 1")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE test SET v1 = 1 WHERE k1=1 and k2=2;\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u5c06 'test' \u8868\u4e2d k1=1 \u7684\u5217\u7684 v1 \u5217\u81ea\u589e1")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE test SET v1 = v1+1 WHERE k1=1;\n")),(0,l.yg)("version",{since:"dev"},(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"li"},"t2"),"\u548c",(0,l.yg)("inlineCode",{parentName:"li"},"t3"),"\u8868\u8fde\u63a5\u7684\u7ed3\u679c\uff0c\u66f4\u65b0",(0,l.yg)("inlineCode",{parentName:"li"},"t1"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efat1, t2, t3\u4e09\u5f20\u8868\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- \u63d2\u5165\u6570\u636e\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01', '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02', '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03', '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- \u66f4\u65b0 t1\nUPDATE t1\n  SET t1.c1 = t2.c1, t1.c3 = t2.c3 * 100\n  FROM t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n")),(0,l.yg)("p",null,"\u9884\u671f\u7ed3\u679c\u4e3a\uff0c\u66f4\u65b0\u4e86",(0,l.yg)("inlineCode",{parentName:"p"},"t1"),"\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"id"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"1"),"\u7684\u5217"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 1  | 10 | 1  | 1000.0 | 2000-01-01 |\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"))),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"UPDATE\n")))}m.isMDXComponent=!0}}]);