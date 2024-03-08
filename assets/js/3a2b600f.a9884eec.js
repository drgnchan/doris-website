"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28379],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>T});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,T=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(T,l(l({ref:t},p),{},{components:n})):r.createElement(T,l({ref:t},p))}));function T(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},450178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"SHOW TABLET DIAGNOSIS",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",id:"version-2.1/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",title:"SHOW TABLET DIAGNOSIS",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW TABLET DIAGNOSIS",language:"en"},sidebar:"docs",previous:{title:"ADMIN-CHECK-TABLET",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET"},next:{title:"ADMIN-COPY-TABLET",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET"}},s={},c=[{value:"SHOW TABLET DIAGNOSIS",id:"show-tablet-diagnosis",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-tablet-diagnosis"},"SHOW TABLET DIAGNOSIS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"This statement is used to diagnose the specified tablet. The results will show information about the tablet and some potential problems.\n\ngrammar:\n\n    SHOW TABLET DIAGNOSE TABLET tablet_id\n\nillustrate:\n\n    The lines of information in the result are as follows:\n    1. TabletExist:                         Whether the Tablet exists\n    2. TabletId:                            Tablet ID\n    3. Database:                            The DB to which the Tablet belongs and its ID\n    4. Table:                               The Table to which Tablet belongs and its ID\n    5. Partition:                           The Partition to which the Tablet belongs and its ID\n    6. MaterializedIndex:                   The materialized view to which the Tablet belongs and its ID\n    7. Replicas(ReplicaId -> BackendId):    Tablet replicas and their BE.\n    8. ReplicasNum:                         Whether the number of replicas is correct.\n    9. ReplicaBackendStatus:                Whether the BE node where the replica is located is normal.\n    10.ReplicaVersionStatus:                Whether the version number of the replica is normal.\n    11.ReplicaStatus:                       Whether the replica status is normal.\n    12.ReplicaCompactionStatus:             Whether the replica Compaction status is normal.\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1. Diagnose tablet 10001\n\n    SHOW TABLET DIAGNOSE TABLET 10001;\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, DIAGNOSIS, TABLET\n")))}d.isMDXComponent=!0}}]);