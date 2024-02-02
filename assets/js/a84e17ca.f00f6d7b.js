"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[38528],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>d});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},79196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(45072),n=(a(11504),a(95788));const i={title:"CREATE-DATABASE",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",title:"CREATE-DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-DATABASE",language:"en"},sidebar:"docs",previous:{title:"CREATE-VIEW",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW"},next:{title:"CREATE-FILE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"}},s={},c=[{value:"CREATE-DATABASE",id:"create-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"create-database"},"CREATE-DATABASE"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"CREATE DATABASE"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement is used to create a new database (database)"),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE [IF NOT EXISTS] db_name\n    [PROPERTIES ("key"="value", ...)];\n')),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"PROPERTIES")," Additional information about the database, which can be defaulted."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If you create an Iceberg database, you need to provide the following information in properties:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n  "iceberg.database" = "iceberg_db_name",\n  "iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n  "iceberg.catalog.type" = "HIVE_CATALOG"\n)\n')),(0,n.yg)("p",{parentName:"li"},"illustrate:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"ceberg.database")," : the library name corresponding to Iceberg;"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"iceberg.hive.metastore.uris")," : hive metastore service address;"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"iceberg.catalog.type"),": The default is ",(0,n.yg)("inlineCode",{parentName:"li"},"HIVE_CATALOG"),"; currently only ",(0,n.yg)("inlineCode",{parentName:"li"},"HIVE_CATALOG")," is supported, and more Iceberg catalog types will be supported in the future.")))),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a new database db_test"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db_test;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a new Iceberg database iceberg_test"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE `iceberg_test`\nPROPERTIES (\n"iceberg.database" = "doris",\n"iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n"iceberg.catalog.type" = "HIVE_CATALOG"\n);\n')))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"CREATE, DATABASE\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);