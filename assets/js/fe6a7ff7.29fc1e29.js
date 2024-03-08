"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3565],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},359978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const i={title:"ADMIN-REPAIR-TABLE",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",id:"version-2.1/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",title:"ADMIN-REPAIR-TABLE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ADMIN-REPAIR-TABLE",language:"en"},sidebar:"docs",previous:{title:"SHOW-REPLICA-STATUS",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/SHOW-REPLICA-STATUS"},next:{title:"ADMIN-CANCEL-REPAIR",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"}},s={},p=[{value:"ADMIN-REPAIR-TABLE",id:"admin-repair-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"admin-repair-table"},"ADMIN-REPAIR-TABLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ADMIN REPAIR TABLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"statement used to attempt to preferentially repair the specified table or partition"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]\n")),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"This statement only means to let the system try to repair the shard copy of the specified table or partition with high priority, and does not guarantee that the repair can be successful. Users can view the repair status through the SHOW REPLICA STATUS command."),(0,a.yg)("li",{parentName:"ol"},"The default timeout is 14400 seconds (4 hours). A timeout means that the system will no longer repair shard copies of the specified table or partition with high priority. Need to re-use this command to set")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Attempt to repair the specified table"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Try to repair the specified partition"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ADMIN, REPAIR, TABLE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);