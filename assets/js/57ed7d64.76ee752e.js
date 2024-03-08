"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70087],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},292632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const i={title:"Data Import Things and Atomicity",language:"en"},o=void 0,s={unversionedId:"data-operate/import/import-scenes/load-atomicity",id:"data-operate/import/import-scenes/load-atomicity",title:"Data Import Things and Atomicity",description:"\x3c!--",source:"@site/docs/data-operate/import/import-scenes/load-atomicity.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/load-atomicity",permalink:"/docs/dev/data-operate/import/import-scenes/load-atomicity",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Import Things and Atomicity",language:"en"},sidebar:"docs",previous:{title:"Synchronize Data Using Insert Method",permalink:"/docs/dev/data-operate/import/import-scenes/jdbc-load"},next:{title:"Data Transformation, Column Mapping and Filtering",permalink:"/docs/dev/data-operate/import/import-scenes/load-data-convert"}},l={},c=[{value:"Label mechanism",id:"label-mechanism",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"data-import-things-and-atomicity"},"Data import things and atomicity"),(0,r.yg)("p",null,"All import operations in Doris have atomicity guarantees, that is, the data in an import job either all succeed or all fail. It will not happen that only part of the data is imported successfully."),(0,r.yg)("p",null,"In ",(0,r.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"BROKER LOAD")," we can also implement atomic import of multiple tables ."),(0,r.yg)("p",null,"For the ",(0,r.yg)("a",{parentName:"p",href:"../../../query-acceleration/materialized-view"},"materialized view")," attached to the table, atomicity and consistency with the base table are also guaranteed."),(0,r.yg)("h2",{id:"label-mechanism"},"Label mechanism"),(0,r.yg)("p",null,"Doris's import job can set a Label. This Label is usually a user-defined string with certain business logic attributes."),(0,r.yg)("p",null,"The main function of Label is to uniquely identify an import task, and to ensure that the same Label will only be successfully imported once."),(0,r.yg)("p",null,"The Label mechanism can ensure that the imported data is not lost or heavy. If the upstream data source can guarantee the At-Least-Once semantics, with the Doris Label mechanism, the Exactly-Once semantics can be guaranteed."),(0,r.yg)("p",null,"Label is unique under a database. The retention period for labels is 3 days by default. That is, after 3 days, the completed Label will be automatically cleaned up, and then the Label can be reused."),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("p",null,"Labels are usually formatted as ",(0,r.yg)("inlineCode",{parentName:"p"},"business logic + time"),". Such as ",(0,r.yg)("inlineCode",{parentName:"p"},"my_business1_20220330_125000"),"."),(0,r.yg)("p",null,"This Label is usually used to represent: a batch of data generated by the business ",(0,r.yg)("inlineCode",{parentName:"p"},"my_business1")," at ",(0,r.yg)("inlineCode",{parentName:"p"},"2022-03-30 12:50:00"),". Through this Label setting, the business can query the import task status through the Label to clearly know whether the batch data has been imported successfully at this point in time. If unsuccessful, you can continue to retry the import using this Label"))}m.isMDXComponent=!0}}]);