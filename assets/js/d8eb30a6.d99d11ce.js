"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51512],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>d});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),E=r,d=u["".concat(o,".").concat(E)]||u[E]||m[E]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=E;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},68404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(45072),r=(n(11504),n(95788));const l={title:"CREATE-TABLE-AS-SELECT",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",title:"CREATE-TABLE-AS-SELECT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-TABLE-AS-SELECT",language:"en"},sidebar:"docs",previous:{title:"CREATE-TABLE-LIKE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE"},next:{title:"CREATE-INDEX",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"}},o={},c=[{value:"CREATE-TABLE-AS-SELECT",id:"create-table-as-select",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-table-as-select"},"CREATE-TABLE-AS-SELECT"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE TABLE AS SELECT"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement creates the table structure by returning the results from the Select statement and imports the data at the same time"),(0,r.yg)("p",null,"grammar\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name [( column_name_list )]\n    opt_engine:engineName\n    opt_keys:keys\n    opt_comment:tableComment\n    opt_partition:partition\n    opt_distribution:distribution\n    opt_rollup:index\n    opt_properties:tblProperties\n    opt_ext_properties:extProperties\n    KW_AS query_stmt:query_def\n")),(0,r.yg)("p",null,"illustrate: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The user needs to have",(0,r.yg)("inlineCode",{parentName:"li"},"SELECT"),"permission for the source table and",(0,r.yg)("inlineCode",{parentName:"li"},"CREATE"),"permission for the target database"),(0,r.yg)("li",{parentName:"ul"},"After a table is created, data is imported. If the import fails, the table is deleted"),(0,r.yg)("li",{parentName:"ul"},"You can specify the key type. The default key type is ",(0,r.yg)("inlineCode",{parentName:"li"},"Duplicate Key"))),(0,r.yg)("version",{since:"1.2"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'All columns of type string (varchar/var/string) are created as type "string".'),(0,r.yg)("li",{parentName:"ul"},"If the created source is an external table and the first column is of type String, the first column is automatically set to VARCHAR(65533). Because of Doris internal table, String column is not allowed as first column."))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Using the field names in the SELECT statement"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create table `test`.`select_varchar` \nPROPERTIES("replication_num" = "1") \nas select * from `test`.`varchar_table`\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Custom field names (need to match the number of fields returned)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create table `test`.`select_name`(user, testname, userstatus) \nPROPERTIES("replication_num" = "1") \nas select vt.userId, vt.username, jt.status \nfrom `test`.`varchar_table` vt join \n`test`.`join_table` jt on vt.userId=jt.userId\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Specify table model, partitions, and buckets"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE t_user(dt, id, name)\nENGINE=OLAP\nUNIQUE KEY(dt, id)\nCOMMENT "OLAP"\nPARTITION BY RANGE(dt)\n(\n   FROM ("2020-01-01") TO ("2021-12-31") INTERVAL 1 YEAR\n)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES("replication_num"="1")\nAS SELECT cast(\'2020-05-20\' as date) as dt, 1 as id, \'Tom\' as name;\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, TABLE, AS, SELECT\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);