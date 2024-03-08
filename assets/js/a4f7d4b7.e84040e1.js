"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[44584],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>N});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=c(t),p=o,N=f["".concat(i,".").concat(p)]||f[p]||u[p]||a;return t?r.createElement(N,l(l({ref:n},d),{},{components:t})):r.createElement(N,l({ref:n},d))}));function N(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[f]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},676563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const a={title:"FRONTENDS",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/frontends",id:"sql-manual/sql-functions/table-functions/frontends",title:"FRONTENDS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/frontends.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/frontends",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/frontends",draft:!1,tags:[],version:"current",frontMatter:{title:"FRONTENDS",language:"en"},sidebar:"docs",previous:{title:"BACKENDS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/backends"},next:{title:"WORKLOAD_GROUPS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/workload-group"}},i={},c=[{value:"<code>frontends</code>",id:"frontends",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c},f="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(f,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"frontends"},(0,o.yg)("inlineCode",{parentName:"h2"},"frontends")),(0,o.yg)("h3",{id:"name"},"Name"),(0,o.yg)("version",{since:"dev"},(0,o.yg)("p",null,"frontends")),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"Table-Value-Function, generate a temporary table named ",(0,o.yg)("inlineCode",{parentName:"p"},"frontends"),". This tvf is used to view the information of BE nodes in the doris cluster."),(0,o.yg)("p",null,"This function is used in ",(0,o.yg)("inlineCode",{parentName:"p"},"FROM")," clauses."),(0,o.yg)("h4",{id:"syntax"},"syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"frontends()")),(0,o.yg)("p",null,"The table schema of ",(0,o.yg)("inlineCode",{parentName:"p"},"frontends()")," tvf\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> desc function frontends();\n+-------------------+------+------+-------+---------+-------+\n| Field             | Type | Null | Key   | Default | Extra |\n+-------------------+------+------+-------+---------+-------+\n| Name              | TEXT | No   | false | NULL    | NONE  |\n| Host              | TEXT | No   | false | NULL    | NONE  |\n| EditLogPort       | TEXT | No   | false | NULL    | NONE  |\n| HttpPort          | TEXT | No   | false | NULL    | NONE  |\n| QueryPort         | TEXT | No   | false | NULL    | NONE  |\n| RpcPort           | TEXT | No   | false | NULL    | NONE  |\n| ArrowFlightSqlPort| TEXT | No   | false | NULL    | NONE  |\n| Role              | TEXT | No   | false | NULL    | NONE  |\n| IsMaster          | TEXT | No   | false | NULL    | NONE  |\n| ClusterId         | TEXT | No   | false | NULL    | NONE  |\n| Join              | TEXT | No   | false | NULL    | NONE  |\n| Alive             | TEXT | No   | false | NULL    | NONE  |\n| ReplayedJournalId | TEXT | No   | false | NULL    | NONE  |\n| LastHeartbeat     | TEXT | No   | false | NULL    | NONE  |\n| IsHelper          | TEXT | No   | false | NULL    | NONE  |\n| ErrMsg            | TEXT | No   | false | NULL    | NONE  |\n| Version           | TEXT | No   | false | NULL    | NONE  |\n| CurrentConnected  | TEXT | No   | false | NULL    | NONE  |\n+-------------------+------+------+-------+---------+-------+\n17 rows in set (0.022 sec)\n")),(0,o.yg)("p",null,"The information displayed by the ",(0,o.yg)("inlineCode",{parentName:"p"},"frontends")," tvf is basically consistent with the information displayed by the ",(0,o.yg)("inlineCode",{parentName:"p"},"show frontends")," statement. However, the types of each field in the ",(0,o.yg)("inlineCode",{parentName:"p"},"frontends")," tvf are more specific, and you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"frontends")," tvf to perform operations such as filtering and joining."),(0,o.yg)("p",null,"The information displayed by the ",(0,o.yg)("inlineCode",{parentName:"p"},"frontends")," tvf is authenticated, which is consistent with the behavior of ",(0,o.yg)("inlineCode",{parentName:"p"},"show frontends"),", user must have ADMIN/OPERATOR privelege."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from frontends()\\G\n*************************** 1. row ***************************\n             Name: fe_5fa8bf19_fd6b_45cb_89c5_25a5ebc45582\n               IP: 10.xx.xx.14\n      EditLogPort: 9013\n         HttpPort: 8034\n        QueryPort: 9033\n          RpcPort: 9023\nArrowFlightSqlPort: 9040\n             Role: FOLLOWER\n         IsMaster: true\n        ClusterId: 1258341841\n             Join: true\n            Alive: true\nReplayedJournalId: 186\n    LastHeartbeat: 2023-06-15 16:53:12\n         IsHelper: true\n           ErrMsg: \n          Version: doris-0.0.0-trunk-4b18cde0c7\n CurrentConnected: Yes\n1 row in set (0.060 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"frontends\n")))}u.isMDXComponent=!0}}]);