"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18894],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>d});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(a),y=n,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||l;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},15904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(45072),n=(a(11504),a(95788));const l={title:"REFRESH",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Utility-Statements/REFRESH",id:"sql-manual/sql-reference/Utility-Statements/REFRESH",title:"REFRESH",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Utility-Statements/REFRESH.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/REFRESH",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH",draft:!1,tags:[],version:"current",frontMatter:{title:"REFRESH",language:"en"},sidebar:"docs",previous:{title:"SWITCH",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/SWITCH"},next:{title:"SYNC",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/SYNC"}},c={},o=[{value:"REFRESH",id:"refresh",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:o},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"refresh"},"REFRESH"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("version",{since:"1.2.0"},(0,n.yg)("p",null,"REFRESH")),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement refreshes the metadata of the specified Catalog/Database/Table."),(0,n.yg)("p",null,"syntax:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH CATALOG catalog_name;\nREFRESH DATABASE [catalog_name.]database_name;\nREFRESH TABLE [catalog_name.][database_name.]table_name;\n")),(0,n.yg)("p",null,"When the Catalog is refreshed, the object-related Cache is forced to be invalidated."),(0,n.yg)("p",null,"Including Partition Cache, Schema Cache, File Cache, etc."),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Refresh hive catalog"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH CATALOG hive;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Refresh database1"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH DATABASE ctl.database1;\nREFRESH DATABASE database1;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Refresh table1"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH TABLE ctl.db.table1;\nREFRESH TABLE db.table1;\nREFRESH TABLE table1;\n")))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("p",null,"REFRESH, CATALOG, DATABASE, TABLE"),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);