"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[21552],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>d});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),A=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=A(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=A(a),m=r,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var A=2;A<l;A++)i[A]=a[A];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>A});var n=a(45072),r=(a(11504),a(95788));const l={title:"ALTER-DATABASE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE",title:"ALTER-DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-DATABASE",language:"en"},sidebar:"docs",previous:{title:"ALTER-CATALOG",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG"},next:{title:"ALTER-TABLE-BITMAP",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP"}},s={},A=[{value:"ALTER-DATABASE",id:"alter-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:A},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-database"},"ALTER-DATABASE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER DATABASE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to set properties of the specified database. (administrator only)"),(0,r.yg)("p",null,"1) Set the database data quota, the unit is B/K/KB/M/MB/G/GB/T/TB/P/PB"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name SET DATA QUOTA quota;\n")),(0,r.yg)("p",null,"2) Rename the database"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name RENAME new_db_name;\n")),(0,r.yg)("p",null,"3) Set the quota for the number of copies of the database"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name SET REPLICA QUOTA quota;\n")),(0,r.yg)("p",null,"illustrate:\nAfter renaming the database, use the REVOKE and GRANT commands to modify the appropriate user permissions, if necessary.\nThe default data quota for the database is 1024GB, and the default replica quota is 1073741824."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Set the specified database data volume quota")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\nThe above unit is bytes, which is equivalent to\nALTER DATABASE example_db SET DATA QUOTA 10T;\n\nALTER DATABASE example_db SET DATA QUOTA 100G;\n\nALTER DATABASE example_db SET DATA QUOTA 200M;\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Rename the database example_db to example_db2")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db RENAME example_db2;\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Set the quota for the number of copies of the specified database")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db SET REPLICA QUOTA 102400;\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"ALTER,DATABASE,RENAME\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);