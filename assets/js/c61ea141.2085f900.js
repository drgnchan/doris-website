"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67905],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,u=p["".concat(i,".").concat(f)]||p[f]||m[f]||s;return t?r.createElement(u,o(o({ref:n},d),{},{components:t})):r.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},473778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const s={title:"rowsets",language:"en"},o=void 0,l={unversionedId:"admin-manual/system-table/rowsets",id:"version-2.1/admin-manual/system-table/rowsets",title:"rowsets",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/system-table/rowsets.md",sourceDirName:"admin-manual/system-table",slug:"/admin-manual/system-table/rowsets",permalink:"/docs/admin-manual/system-table/rowsets",draft:!1,tags:[],version:"2.1",frontMatter:{title:"rowsets",language:"en"},sidebar:"docs",previous:{title:"Integration with Apache Ranger",permalink:"/docs/admin-manual/privilege-ldap/ranger"},next:{title:"WORKLOAD GROUP",permalink:"/docs/admin-manual/workload-group"}},i={},c=[{value:"rowsets",id:"rowsets",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"KeyWords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],d={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"rowsets"},"rowsets"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"rowsets"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"rowsets")," is a built-in system table of doris, which is stored under the information_schema database. You can view the current rowsets information of each ",(0,a.yg)("inlineCode",{parentName:"p"},"BE")," through the ",(0,a.yg)("inlineCode",{parentName:"p"},"rowsets")," system table."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"rowsets")," table schema is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> desc information_schema.rowsets;\n+------------------------+------------+------+-------+---------+-------+\n| Field                  | Type       | Null | Key   | Default | Extra |\n+------------------------+------------+------+-------+---------+-------+\n| BACKEND_ID             | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_ID              | VARCHAR(*) | Yes  | false | NULL    |       |\n| TABLET_ID              | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_NUM_ROWS        | BIGINT     | Yes  | false | NULL    |       |\n| TXN_ID                 | BIGINT     | Yes  | false | NULL    |       |\n| NUM_SEGMENTS           | BIGINT     | Yes  | false | NULL    |       |\n| START_VERSION          | BIGINT     | Yes  | false | NULL    |       |\n| END_VERSION            | BIGINT     | Yes  | false | NULL    |       |\n| INDEX_DISK_SIZE        | BIGINT     | Yes  | false | NULL    |       |\n| DATA_DISK_SIZE         | BIGINT     | Yes  | false | NULL    |       |\n| CREATION_TIME          | BIGINT     | Yes  | false | NULL    |       |\n| NEWEST_WRITE_TIMESTAMP | BIGINT     | Yes  | false | NULL    |       |\n+------------------------+------------+------+-------+---------+-------+\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select * from information_schema.rowsets where BACKEND_ID = 10004 limit 10;\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n| BACKEND_ID | ROWSET_ID                                        | TABLET_ID | ROWSET_NUM_ROWS | TXN_ID | NUM_SEGMENTS | START_VERSION | END_VERSION | INDEX_DISK_SIZE | DATA_DISK_SIZE | CREATION_TIME | OLDEST_WRITE_TIMESTAMP | NEWEST_WRITE_TIMESTAMP |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n|      10004 | 02000000000000994847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      6 |            1 |             3 |           3 |            2894 |         688855 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008d4847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      2 |            1 |             2 |           2 |            2894 |         688855 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000894847fbd41a42297d7c7a57d3bcb46f8c |     10771 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009a4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      6 |            1 |             3 |           3 |            2897 |         686828 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008e4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      2 |            1 |             2 |           2 |            2897 |         686828 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000884847fbd41a42297d7c7a57d3bcb46f8c |     10773 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 02000000000000984847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      6 |            1 |             3 |           3 |            2893 |         685381 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008c4847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      2 |            1 |             2 |           2 |            2893 |         685381 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000874847fbd41a42297d7c7a57d3bcb46f8c |     10757 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009c4847fbd41a42297d7c7a57d3bcb46f8c |     10739 |            1698 |      8 |            1 |             3 |           3 |             454 |          86126 |    1659964582 |             1659964582 |             1659964582 |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"KeyWords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"rowsets, information_schema\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);