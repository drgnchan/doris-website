"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26018],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>O});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,O=p["".concat(i,".").concat(y)]||p[y]||m[y]||l;return r?n.createElement(O,o(o({ref:t},u),{},{components:r})):n.createElement(O,o({ref:t},u))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},936019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-SQL-BLOCK-RULE",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",id:"version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",title:"SHOW-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-SQL-BLOCK-RULE",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-SNAPSHOT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT"},next:{title:"SHOW-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD"}},i={},c=[{value:"SHOW-SQL-BLOCK-RULE",id:"show-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-sql-block-rule"},"SHOW-SQL-BLOCK-RULE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW SQL  BLOCK RULE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u67e5\u770b\u5df2\u914d\u7f6e\u7684SQL\u963b\u6b62\u89c4\u5219\uff0c\u4e0d\u6307\u5b9a\u89c4\u5219\u540d\u5219\u4e3a\u67e5\u770b\u6240\u6709\u89c4\u5219\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW SQL_BLOCK_RULE [FOR RULE_NAME];\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6240\u6709\u89c4\u5219\u3002"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW SQL_BLOCK_RULE;\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n| Name       | Sql                    | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n| test_rule  | select * from order_analysis | NULL    | 0            | 0         | 0           | true   | true   |\n| test_rule2 | NULL                   | NULL    | 30           | 0         | 10000000000 | false  | true   |\n+------------+------------------------+---------+--------------+-----------+-------------+--------+--------+\n2 rows in set (0.01 sec)\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6307\u5b9a\u89c4\u5219\u540d\u67e5\u8be2"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW SQL_BLOCK_RULE FOR test_rule2;\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n| Name       | Sql  | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n| test_rule2 | NULL | NULL    | 30           | 0         | 10000000000 | false  | true   |\n+------------+------+---------+--------------+-----------+-------------+--------+--------+\n1 row in set (0.00 sec)\n\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, SQL_BLOCK_RULE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);