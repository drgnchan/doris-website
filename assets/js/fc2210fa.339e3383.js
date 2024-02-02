"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89638],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>u});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),g=n,u=m["".concat(s,".").concat(g)]||m[g]||y[g]||l;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},22448:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(45072),n=(a(11504),a(95788));const l={title:"CREATE-POLICY",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",title:"CREATE-POLICY",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-POLICY",language:"en"},sidebar:"docs",previous:{title:"CREATE-TABLE-AS-SELECT",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT"},next:{title:"CREATE-VIEW",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW"}},s={},c=[{value:"CREATE-POLICY",id:"create-policy",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Grammar:",id:"grammar",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"create-policy"},"CREATE-POLICY"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"CREATE POLICY"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"Create policies,such as:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create security policies(ROW POLICY) and explain to view the rewritten SQL."),(0,n.yg)("li",{parentName:"ol"},"Create storage migration policy(STORAGE POLICY), used for cold and hot data transform")),(0,n.yg)("h4",{id:"grammar"},"Grammar:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"ROW POLICY")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS {RESTRICTIVE|PERMISSIVE} TO test USING (id in (1, 2));\n")),(0,n.yg)("p",null,"illustrate\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"filterType\uff1aIt is usual to constrict a set of policies through AND. PERMISSIVE to constrict a set of policies through OR"),(0,n.yg)("li",{parentName:"ul"},"Configure multiple policies. First, merge the RESTRICTIVE policy with the PERMISSIVE policy"),(0,n.yg)("li",{parentName:"ul"},"It is connected with AND between RESTRICTIVE AND PERMISSIVE"),(0,n.yg)("li",{parentName:"ul"},"It cannot be created for users root and admin")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"STORAGE POLICY")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE POLICY test_storage_policy_1\nPROPERTIES ("key"="value", ...);\n')),(0,n.yg)("p",null,"illustrate\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"PROPERTIES has such keys:",(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"storage_resource\uff1astorage resource name for policy"),(0,n.yg)("li",{parentName:"ol"},"cooldown_datetime\uff1acool down time for tablet, can't be set with cooldown_ttl."),(0,n.yg)("li",{parentName:"ol"},"cooldown_ttl\uff1ahot data stay time. The time cost between the time of tablet created and\nthe time of migrated to cold data, formatted as\uff1a\n1d\uff1a1 day\n1h\uff1a1 hour\n50000: 50000 second")))),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a set of row security policies"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS RESTRICTIVE TO test USING (c1 = 'a');\n")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_2 ON test.table1 \nAS RESTRICTIVE TO test USING (c2 = 'b');\n")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c3 = 'c');\n")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c4 = 'd');\n")),(0,n.yg)("p",{parentName:"li"},"When we execute the query on Table1, the rewritten SQL is"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"select * from (select * from table1 where c1 = 'a' and c2 = 'b' or c3 = 'c' or c4 = 'd')\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create policy for storage"),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"NOTE",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"To create a cold hot separation policy, you must first create a resource, and then associate the created resource name when creating a migration policy"),(0,n.yg)("li",{parentName:"ul"},"Currently, the drop data migration policy is not supported to prevent data from being migrated. If the policy has been deleted, then the system cannot retrieve the data"))),(0,n.yg)("li",{parentName:"ol"},"Create policy on cooldown_datetime")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n  "storage_resource" = "s3",\n  "cooldown_datetime" = "2022-06-08 00:00:00"\n);\n')),(0,n.yg)("ol",{parentName:"li",start:3},(0,n.yg)("li",{parentName:"ol"},"Create policy on cooldown_ttl")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n  "storage_resource" = "s3",\n  "cooldown_ttl" = "1d"\n);\n')),(0,n.yg)("p",{parentName:"li"},"Relevant parameters are as follows:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"storage_resource"),":  the storage resource of create"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"cooldown_datetime"),": Data migration time"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"cooldown_ttl"),": Countdown of the distance between the migrated data and the current time")))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"CREATE, POLICY\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);