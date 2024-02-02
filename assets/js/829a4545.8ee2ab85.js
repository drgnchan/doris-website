"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2424],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>y});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(y,l(l({ref:t},p),{},{components:a})):r.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(45072),n=(a(11504),a(95788));const i={title:"ADMIN-SET-REPLICA-VERSION",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION",id:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION",title:"ADMIN-SET-REPLICA-VERSION",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN-SET-REPLICA-VERSION",language:"en"},sidebar:"docs",previous:{title:"ADMIN-SET-REPLICA-STATUS",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS"},next:{title:"ADMIN-SET-PARTITION-VERSION",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION"}},s={},c=[{value:"ADMIN-SET-REPLICA-VERSION",id:"admin-set-replica-version",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"admin-set-replica-version"},"ADMIN-SET-REPLICA-VERSION"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"ADMIN SET REPLICA VERSION"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement is used to set the version, maximum success version, and maximum failure version of the specified replica."),(0,n.yg)("p",null,"This command is currently only used to manually repair the replica version when the program is abnormal, so that the replica can recover from the abnormal state."),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA VERSION\n        PROPERTIES ("key" = "value", ...);\n')),(0,n.yg)("p",null,"The following properties are currently supported:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"tablet_id"),": Required. Specify a Tablet Id."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"backend_id"),": Required. Specify Backend Id."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"version"),": Optional. Set the replica version."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"last_success_version"),": Optional. Set the replica max success version."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"last_failed_version"),": Optional. Set the replica max failed version.")),(0,n.yg)("p",null,"If the specified replica does not exist, it will be ignored."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Note:"),(0,n.yg)("p",{parentName:"blockquote"},"Modifying these values \u200b\u200bmay cause subsequent data reading and writing failures, resulting in data inconsistency. Please operate with caution!"),(0,n.yg)("p",{parentName:"blockquote"},"Record the original value before modifying it. After the modification is completed, verify the read and write of the table. If the read and write fail, please restore the original value! But recovery may fail!"),(0,n.yg)("p",{parentName:"blockquote"},"It is strictly prohibited to operate the tablet that is writing data!")),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Clear the replica failed version of tablet 10003 on BE 10001."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"   ```sql\n")),(0,n.yg)("p",{parentName:"li"},'ADMIN SET REPLICA VERSION PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "last_failed_version" = "-1");       '),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"   ```\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Set the replica status of tablet 10003 on BE 10001 to ok."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA VERSION PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "version" = "1004");\n')),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"ADMIN, SET, REPLICA, VERSION\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);