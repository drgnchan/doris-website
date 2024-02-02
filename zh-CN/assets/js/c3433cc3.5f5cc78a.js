"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2536],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",E={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||E[m]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const l={title:"CREATE-TABLE-AS-SELECT",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",title:"CREATE-TABLE-AS-SELECT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-TABLE-AS-SELECT",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-TABLE-LIKE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE"},next:{title:"CREATE-INDEX",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"}},s={},c=[{value:"CREATE-TABLE-AS-SELECT",id:"create-table-as-select",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function E(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"create-table-as-select"},"CREATE-TABLE-AS-SELECT"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CREATE TABLE AS SELECT"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u901a\u8fc7 Select \u8bed\u53e5\u8fd4\u56de\u7ed3\u679c\u521b\u5efa\u8868\u7ed3\u6784\uff0c\u540c\u65f6\u5bfc\u5165\u6570\u636e"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name [( column_name_list )]\n    opt_engine:engineName\n    opt_keys:keys\n    opt_comment:tableComment\n    opt_partition:partition\n    opt_distribution:distribution\n    opt_rollup:index\n    opt_properties:tblProperties\n    opt_ext_properties:extProperties\n    KW_AS query_stmt:query_def\n")),(0,a.yg)("p",null,"\u8bf4\u660e: "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u7528\u6237\u9700\u8981\u62e5\u6709\u6765\u6e90\u8868\u7684",(0,a.yg)("inlineCode",{parentName:"li"},"SELECT"),"\u6743\u9650\u548c\u76ee\u6807\u5e93\u7684",(0,a.yg)("inlineCode",{parentName:"li"},"CREATE"),"\u6743\u9650"),(0,a.yg)("li",{parentName:"ul"},"\u521b\u5efa\u8868\u6210\u529f\u540e\uff0c\u4f1a\u8fdb\u884c\u6570\u636e\u5bfc\u5165\uff0c\u5982\u679c\u5bfc\u5165\u5931\u8d25\uff0c\u5c06\u4f1a\u5220\u9664\u8868"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u81ea\u884c\u6307\u5b9a key type\uff0c\u9ed8\u8ba4\u4e3a",(0,a.yg)("inlineCode",{parentName:"li"},"Duplicate Key"))),(0,a.yg)("version",{since:"1.2"},(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6240\u6709\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u5217(varchar/var/string) \u90fd\u4f1a\u88ab\u521b\u5efa\u4e3a string \u7c7b\u578b\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c\u521b\u5efa\u7684\u6765\u6e90\u4e3a\u5916\u90e8\u8868\uff0c\u5e76\u4e14\u7b2c\u4e00\u5217\u4e3a String \u7c7b\u578b\uff0c\u5219\u4f1a\u81ea\u52a8\u5c06\u7b2c\u4e00\u5217\u8bbe\u7f6e\u4e3a VARCHAR(65533)\u3002\u56e0\u4e3a Doris \u5185\u90e8\u8868\uff0c\u4e0d\u5141\u8bb8 String \u5217\u4f5c\u4e3a\u7b2c\u4e00\u5217\u3002"))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528 select \u8bed\u53e5\u4e2d\u7684\u5b57\u6bb5\u540d"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'create table `test`.`select_varchar` \nPROPERTIES("replication_num" = "1") \nas select * from `test`.`varchar_table`\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5b57\u6bb5\u540d(\u9700\u8981\u4e0e\u8fd4\u56de\u7ed3\u679c\u5b57\u6bb5\u6570\u91cf\u4e00\u81f4)"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'create table `test`.`select_name`(user, testname, userstatus) \nPROPERTIES("replication_num" = "1") \nas select vt.userId, vt.username, jt.status \nfrom `test`.`varchar_table` vt join \n`test`.`join_table` jt on vt.userId=jt.userId\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6307\u5b9a\u8868\u6a21\u578b\u3001\u5206\u533a\u3001\u5206\u6876"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE t_user(dt, id, name)\nENGINE=OLAP\nUNIQUE KEY(dt, id)\nCOMMENT "OLAP"\nPARTITION BY RANGE(dt)\n(\n   FROM ("2020-01-01") TO ("2021-12-31") INTERVAL 1 YEAR\n)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES("replication_num"="1")\nAS SELECT cast(\'2020-05-20\' as date) as dt, 1 as id, \'Tom\' as name;\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CREATE, TABLE, AS, SELECT\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}E.isMDXComponent=!0}}]);