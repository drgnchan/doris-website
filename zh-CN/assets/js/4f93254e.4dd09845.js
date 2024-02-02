"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78956],{95788:(e,t,n)=>{n.d(t,{Iu:()=>g,yg:()=>c});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),y=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=y(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=y(n),s=r,c=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?a.createElement(c,i(i({ref:t},g),{},{components:n})):a.createElement(c,i({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var y=2;y<l;y++)i[y]=n[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},67023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>y});var a=n(45072),r=(n(11504),n(95788));const l={title:"SHOW-ANALYZE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-ANALYZE",id:"sql-manual/sql-reference/Show-Statements/SHOW-ANALYZE",title:"SHOW-ANALYZE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-ANALYZE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-ANALYZE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ANALYZE",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-ANALYZE",language:"zh-CN"}},p={},y=[{value:"SHOW-ANALYZE",id:"show-analyze",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Keywords",id:"keywords",level:3}],g={toc:y},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.c)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-analyze"},"SHOW-ANALYZE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW ANALYZE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW ANALYZE")," \u6765\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4f5c\u4e1a\u7684\u4fe1\u606f\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'SHOW [AUTO] ANALYZE < table_name | job_id >\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"AUTO\uff1a\u4ec5\u4ec5\u5c55\u793a\u81ea\u52a8\u6536\u96c6\u5386\u53f2\u4f5c\u4e1a\u4fe1\u606f\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u9ed8\u8ba4\u53ea\u4fdd\u5b58\u8fc7\u53bb20000\u4e2a\u6267\u884c\u5b8c\u6bd5\u7684\u81ea\u52a8\u6536\u96c6\u4f5c\u4e1a\u7684\u72b6\u6001\u3002"),(0,r.yg)("li",{parentName:"ul"},"table_name\uff1a\u8868\u540d\uff0c\u6307\u5b9a\u540e\u53ef\u67e5\u770b\u8be5\u8868\u5bf9\u5e94\u7684\u7edf\u8ba1\u4f5c\u4e1a\u4fe1\u606f\u3002\u53ef\u4ee5\u662f \xa0",(0,r.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002\u4e0d\u6307\u5b9a\u65f6\u8fd4\u56de\u6240\u6709\u7edf\u8ba1\u4f5c\u4e1a\u4fe1\u606f\u3002"),(0,r.yg)("li",{parentName:"ul"},"job_id\uff1a\u7edf\u8ba1\u4fe1\u606f\u4f5c\u4e1a ID\uff0c\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"ANALYZE")," \u5f02\u6b65\u6536\u96c6\u65f6\u5f97\u5230\u3002\u4e0d\u6307\u5b9aid\u65f6\u6b64\u547d\u4ee4\u8fd4\u56de\u6240\u6709\u7edf\u8ba1\u4f5c\u4e1a\u4fe1\u606f\u3002")),(0,r.yg)("p",null,"\u8f93\u51fa\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"job_id")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u7edf\u8ba1\u4f5c\u4e1a ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"catalog_name")),(0,r.yg)("td",{parentName:"tr",align:"left"},"catalog \u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"db_name")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5e93\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"tbl_name")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8868\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"col_name")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5217\u540d\u79f0\u5217\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"job_type")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4f5c\u4e1a\u7c7b\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"analysis_type")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u7edf\u8ba1\u7c7b\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"message")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4f5c\u4e1a\u4fe1\u606f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"last_exec_time_in_ms")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4e0a\u6b21\u6267\u884c\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"state")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4f5c\u4e1a\u72b6\u6001")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"schedule_type")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8c03\u5ea6\u65b9\u5f0f")))),(0,r.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show analyze 245073\\G;\n*************************** 1. row ***************************\n              job_id: 245073\n        catalog_name: internal\n             db_name: default_cluster:tpch\n            tbl_name: lineitem\n            col_name: [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct]\n            job_type: MANUAL\n       analysis_type: FUNDAMENTALS\n             message: \nlast_exec_time_in_ms: 2023-11-07 11:00:52\n               state: FINISHED\n            progress: 16 Finished  |  0 Failed  |  0 In Progress  |  16 Total\n       schedule_type: ONCE\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"\u6bcf\u4e2a\u6536\u96c6\u4f5c\u4e1a\u4e2d\u53ef\u4ee5\u5305\u542b\u4e00\u5230\u591a\u4e2a\u4efb\u52a1\uff0c\u6bcf\u4e2a\u4efb\u52a1\u5bf9\u5e94\u4e00\u5217\u7684\u6536\u96c6\u3002\u7528\u6237\u53ef\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u5177\u4f53\u6bcf\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u5b8c\u6210\u60c5\u51b5\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ANALYZE TASK STATUS [job_id]\n")),(0,r.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> show analyze task status 20038 ;\n+---------+----------+---------+----------------------+----------+\n| task_id | col_name | message | last_exec_time_in_ms | state    |\n+---------+----------+---------+----------------------+----------+\n| 20039   | col4     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20040   | col2     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20041   | col3     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20042   | col1     |         | 2023-06-01 17:22:15  | FINISHED |\n+---------+----------+---------+----------------------+----------+\n\n\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"SHOW, ANALYZE"))}d.isMDXComponent=!0}}]);