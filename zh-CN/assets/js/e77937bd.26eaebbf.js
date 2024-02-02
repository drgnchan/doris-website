"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20880],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},O="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=c(r),m=a,y=O["".concat(s,".").concat(m)]||O[m]||u[m]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[O]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const l={title:"SHOW-POLICY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-POLICY",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-POLICY",title:"SHOW-POLICY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-POLICY.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-POLICY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-POLICY",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-POLICY",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-SMALL-FILES",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SMALL-FILES"},next:{title:"SHOW-CATALOG-RECYCLE-BIN",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN"}},s={},c=[{value:"SHOW-POLICY",id:"show-policy",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},O="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(O,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-policy"},"SHOW-POLICY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW ROW POLICY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u67e5\u770b\u5f53\u524d DB \u4e0b\u7684\u884c\u5b89\u5168\u7b56\u7565"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ROW POLICY [FOR user]\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6240\u6709\u5b89\u5168\u7b56\u7565\u3002"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW ROW POLICY;\n+-------------------+----------------------+-----------+------+-------------+-------------------+------+-------------------------------------------------------------------------------------------------------------------------------------------+\n| PolicyName        | DbName               | TableName | Type | FilterType  | WherePredicate    | User | OriginStmt                                                                                                                                |\n+-------------------+----------------------+-----------+------+-------------+-------------------+------+-------------------------------------------------------------------------------------------------------------------------------------------+\n| test_row_policy_1 | default_cluster:test | table1    | ROW  | RESTRICTIVE | `id` IN (1, 2)    | root | /* ApplicationName=DataGrip 2021.3.4 */ CREATE ROW POLICY test_row_policy_1 ON test.table1 AS RESTRICTIVE TO root USING (id in (1, 2));\n|\n| test_row_policy_2 | default_cluster:test | table1    | ROW  | RESTRICTIVE | `col1` = 'col1_1' | root | /* ApplicationName=DataGrip 2021.3.4 */ CREATE ROW POLICY test_row_policy_2 ON test.table1 AS RESTRICTIVE TO root USING (col1='col1_1');\n|\n+-------------------+----------------------+-----------+------+-------------+-------------------+------+-------------------------------------------------------------------------------------------------------------------------------------------+\n2 rows in set (0.00 sec)\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6307\u5b9a\u7528\u6237\u540d\u67e5\u8be2"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW ROW POLICY FOR test;\n+-------------------+----------------------+-----------+------+------------+-------------------+----------------------+------------------------------------------------------------------------------------------------------------------------------------------+\n| PolicyName        | DbName               | TableName | Type | FilterType | WherePredicate    | User                 | OriginStmt                                                                                                                               |\n+-------------------+----------------------+-----------+------+------------+-------------------+----------------------+------------------------------------------------------------------------------------------------------------------------------------------+\n| test_row_policy_3 | default_cluster:test | table1    | ROW  | PERMISSIVE | `col1` = 'col1_2' | default_cluster:test | /* ApplicationName=DataGrip 2021.3.4 */ CREATE ROW POLICY test_row_policy_3 ON test.table1 AS PERMISSIVE TO test USING (col1='col1_2');\n|\n+-------------------+----------------------+-----------+------+------------+-------------------+----------------------+------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6570\u636e\u8fc1\u79fb\u7b56\u7565"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW STORAGE POLICY;\n+---------------------+---------+-----------------------+---------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| PolicyName          | Type    | StorageResource       | CooldownDatetime    | CooldownTtl | properties                                                                                                                                                                                                                                                                                                          |\n+---------------------+---------+-----------------------+---------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| showPolicy_1_policy | STORAGE | showPolicy_1_resource | 2022-06-08 00:00:00 | -1          | {\n"AWS_SECRET_KEY": "******",\n"AWS_REGION": "bj",\n"AWS_ACCESS_KEY": "bbba",\n"AWS_MAX_CONNECTIONS": "50",\n"AWS_CONNECTION_TIMEOUT_MS": "1000",\n"type": "s3",\n"AWS_ROOT_PATH": "path/to/rootaaaa",\n"AWS_BUCKET": "test-bucket",\n"AWS_ENDPOINT": "bj.s3.comaaaa",\n"AWS_REQUEST_TIMEOUT_MS": "3000"\n} |\n+---------------------+---------+-----------------------+---------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.00 sec)\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, POLICY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);