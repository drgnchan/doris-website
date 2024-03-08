"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14446],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>y});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},N=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(a),N=r,y=u["".concat(o,".").concat(N)]||u[N]||m[N]||l;return a?t.createElement(y,s(s({ref:n},g),{},{components:a})):t.createElement(y,s({ref:n},g))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=N;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}N.displayName="MDXCreateElement"},902494:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=a(58168),r=(a(296540),a(15680));const l={title:"VARIANT",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/VARIANT",id:"sql-manual/sql-reference/Data-Types/VARIANT",title:"VARIANT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Types/VARIANT.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/VARIANT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/VARIANT",draft:!1,tags:[],version:"current",frontMatter:{title:"VARIANT",language:"zh-CN"},sidebar:"docs",previous:{title:"AGG_STATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/AGG_STATE"},next:{title:"IPV4",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/IPV4"}},o={},p=[{value:"VARIANT",id:"variant",level:2},{value:"Description",id:"description",level:3},{value:"Note",id:"note",level:3},{value:"Example",id:"example",level:3},{value:"\u57fa\u4e8e github events \u6570\u636e\u96c6\u793a\u4f8b",id:"\u57fa\u4e8e-github-events-\u6570\u636e\u96c6\u793a\u4f8b",level:3},{value:"\u4f7f\u7528\u9650\u5236\u548c\u6700\u4f73\u5b9e\u8df5",id:"\u4f7f\u7528\u9650\u5236\u548c\u6700\u4f73\u5b9e\u8df5",level:3},{value:"Keywords",id:"keywords",level:3}],g={toc:p},u="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"variant"},"VARIANT"),(0,r.yg)("version",{since:"2.1.0"}),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"VARIANT\u7c7b\u578b\n\u5728 Doris 2.1 \u4e2d\u5f15\u5165\u4e00\u79cd\u65b0\u7684\u6570\u636e\u7c7b\u578b VARIANT\uff0c\u5b83\u53ef\u4ee5\u5b58\u50a8\u534a\u7ed3\u6784\u5316 JSON \u6570\u636e\u3002\u5b83\u5141\u8bb8\u5b58\u50a8\u5305\u542b\u4e0d\u540c\u6570\u636e\u7c7b\u578b\uff08\u5982\u6574\u6570\u3001\u5b57\u7b26\u4e32\u3001\u5e03\u5c14\u503c\u7b49\uff09\u7684\u590d\u6742\u6570\u636e\u7ed3\u6784\uff0c\u800c\u65e0\u9700\u5728\u8868\u7ed3\u6784\u4e2d\u63d0\u524d\u5b9a\u4e49\u5177\u4f53\u7684\u5217\u3002VARIANT \u7c7b\u578b\u7279\u522b\u9002\u7528\u4e8e\u5904\u7406\u590d\u6742\u7684\u5d4c\u5957\u7ed3\u6784\uff0c\u800c\u8fd9\u4e9b\u7ed3\u6784\u53ef\u80fd\u968f\u65f6\u4f1a\u53d1\u751f\u53d8\u5316\u3002\u5728\u5199\u5165\u8fc7\u7a0b\u4e2d\uff0c\u8be5\u7c7b\u578b\u53ef\u4ee5\u81ea\u52a8\u6839\u636e\u5217\u7684\u7ed3\u6784\u3001\u7c7b\u578b\u63a8\u65ad\u5217\u4fe1\u606f\uff0c\u52a8\u6001\u5408\u5e76\u5199\u5165\u7684 schema\uff0c\u5e76\u901a\u8fc7\u5c06 JSON \u952e\u53ca\u5176\u5bf9\u5e94\u7684\u503c\u5b58\u50a8\u4e3a\u5217\u548c\u52a8\u6001\u5b50\u5217\u3002"),(0,r.yg)("h3",{id:"note"},"Note"),(0,r.yg)("p",null,"\u76f8\u6bd4 JSON \u7c7b\u578b\u6709\u6709\u4ee5\u4e0b\u4f18\u52bf:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5b58\u50a8\u65b9\u5f0f\u4e0d\u540c\uff0c JSON \u7c7b\u578b\u662f\u4ee5\u4e8c\u8fdb\u5236 JSONB \u683c\u5f0f\u8fdb\u884c\u5b58\u50a8\uff0c\u6574\u884c JSON \u4ee5\u884c\u5b58\u7684\u5f62\u5f0f\u5b58\u50a8\u5230 segment \u6587\u4ef6\u4e2d\u3002\u800c VARIANT \u7c7b\u578b\u5728\u5199\u5165\u7684\u65f6\u5019\u8fdb\u884c\u7c7b\u578b\u63a8\u65ad\uff0c\u5c06\u5199\u5165\u7684 JSON \u5217\u5b58\u5316\u3002\u6bd4JSON\u7c7b\u578b\u6709\u66f4\u9ad8\u7684\u538b\u7f29\u6bd4\uff0c \u5b58\u50a8\u7a7a\u95f4\u66f4\u5c0f\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u67e5\u8be2\u65b9\u5f0f\u4e0d\u540c\uff0c\u67e5\u8be2\u4e0d\u9700\u8981\u8fdb\u884c\u89e3\u6790\u3002VARIANT \u5145\u5206\u5229\u7528 Doris \u4e2d\u5217\u5f0f\u5b58\u50a8\u3001\u5411\u91cf\u5316\u5f15\u64ce\u3001\u4f18\u5316\u5668\u7b49\u7ec4\u4ef6\u7ed9\u7528\u6237\u5e26\u6765\u6781\u9ad8\u7684\u67e5\u8be2\u6027\u80fd\u3002\n\u4e0b\u9762\u662f\u57fa\u4e8e clickbench \u6570\u636e\u6d4b\u8bd5\u7684\u7ed3\u679c\uff1a")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"\u5b58\u50a8\u7a7a\u95f4"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u9884\u5b9a\u4e49\u9759\u6001\u5217"),(0,r.yg)("td",{parentName:"tr",align:null},"24.329 GB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"variant \u7c7b\u578b"),(0,r.yg)("td",{parentName:"tr",align:null},"24.296 GB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"json \u7c7b\u578b"),(0,r.yg)("td",{parentName:"tr",align:null},"46.730 GB")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u8282\u7701\u7ea6 50%\u5b58\u50a8\u5bb9\u91cf")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u6b21\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9884\u5b9a\u4e49\u9759\u6001\u5217"),(0,r.yg)("th",{parentName:"tr",align:null},"variant \u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"json \u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u6b21\u67e5\u8be2 (cold)"),(0,r.yg)("td",{parentName:"tr",align:null},"233.79s"),(0,r.yg)("td",{parentName:"tr",align:null},"248.66s"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"\u5927\u90e8\u5206\u67e5\u8be2\u8d85\u65f6"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7b2c\u4e8c\u6b21\u67e5\u8be2 (hot)"),(0,r.yg)("td",{parentName:"tr",align:null},"86.02s"),(0,r.yg)("td",{parentName:"tr",align:null},"94.82s"),(0,r.yg)("td",{parentName:"tr",align:null},"789.24s")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7b2c\u4e09\u6b21\u67e5\u8be2 (hot)"),(0,r.yg)("td",{parentName:"tr",align:null},"83.03s"),(0,r.yg)("td",{parentName:"tr",align:null},"92.29s"),(0,r.yg)("td",{parentName:"tr",align:null},"743.69s")))),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickBench/blob/main/doris/queries.sql"},"\u6d4b\u8bd5\u96c6")," \u4e00\u517143\u4e2a\u67e5\u8be2\u8bed\u53e5"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u67e5\u8be2\u63d0\u901f 8+\u500d\uff0c \u67e5\u8be2\u6027\u80fd\u4e0e\u9759\u6001\u5217\u76f8\u5f53")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u7528\u4e00\u4e2a\u4ece\u5efa\u8868\u3001\u5bfc\u6570\u636e\u3001\u67e5\u8be2\u5168\u5468\u671f\u7684\u4f8b\u5b50\u8bf4\u660eVARIANT\u7684\u529f\u80fd\u548c\u7528\u6cd5\u3002\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5efa\u8868\u8bed\u6cd5")),(0,r.yg)("p",null,"\u5efa\u8868\uff0c\u5efa\u8868\u8bed\u6cd5\u5173\u952e\u5b57 variant"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- \u65e0\u7d22\u5f15\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT\n)\ntable_properties;\n\n-- \u5728v\u5217\u521b\u5efa\u7d22\u5f15\uff0c\u53ef\u9009\u6307\u5b9a\u5206\u8bcd\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u4e0d\u5206\u8bcd\nCREATE TABLE IF NOT EXISTS ${table_name} (\n    k BIGINT,\n    v VARIANT,\n    INDEX idx_var(v) USING INVERTED [PROPERTIES("parser" = "english|unicode|chinese")] [COMMENT \'your comment\']\n)\ntable_properties;\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u67e5\u8be2\u8bed\u6cd5")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u4f7f\u7528 v['a']['b'] \u5f62\u5f0f\u4f8b\u5982\nSELECT v['properties']['title'] from ${table_name}\n")),(0,r.yg)("h3",{id:"\u57fa\u4e8e-github-events-\u6570\u636e\u96c6\u793a\u4f8b"},"\u57fa\u4e8e github events \u6570\u636e\u96c6\u793a\u4f8b"),(0,r.yg)("p",null,"\u8fd9\u91cc\u7528 github events \u6570\u636e\u5c55\u793a variant \u7684\u5efa\u8868\u3001\u5bfc\u5165\u3001\u67e5\u8be2\u3002\n\u4e0b\u9762\u662f\u683c\u5f0f\u5316\u540e\u7684\u4e00\u884c\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "14186154924",\n  "type": "PushEvent",\n  "actor": {\n    "id": 282080,\n    "login": "brianchandotcom",\n    "display_login": "brianchandotcom",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/brianchandotcom",\n    "avatar_url": "https://avatars.githubusercontent.com/u/282080?"\n  },\n  "repo": {\n    "id": 1920851,\n    "name": "brianchandotcom/liferay-portal",\n    "url": "https://api.github.com/repos/brianchandotcom/liferay-portal"\n  },\n  "payload": {\n    "push_id": 6027092734,\n    "size": 4,\n    "distinct_size": 4,\n    "ref": "refs/heads/master",\n    "head": "91edd3c8c98c214155191feb852831ec535580ba",\n    "before": "abb58cc0db673a0bd5190000d2ff9c53bb51d04d",\n    "commits": [""]\n  },\n  "public": true,\n  "created_at": "2020-11-13T18:00:00Z"\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5efa\u8868")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u521b\u5efa\u4e86\u4e09\u4e2a VARIANT \u7c7b\u578b\u7684\u5217\uff0c ",(0,r.yg)("inlineCode",{parentName:"li"},"actor"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"repo")," \u548c ",(0,r.yg)("inlineCode",{parentName:"li"},"payload")),(0,r.yg)("li",{parentName:"ul"},"\u521b\u5efa\u8868\u7684\u540c\u65f6\u521b\u5efa\u4e86 ",(0,r.yg)("inlineCode",{parentName:"li"},"payload")," \u5217\u7684\u5012\u6392\u7d22\u5f15 ",(0,r.yg)("inlineCode",{parentName:"li"},"idx_payload")),(0,r.yg)("li",{parentName:"ul"},"USING INVERTED \u6307\u5b9a\u7d22\u5f15\u7c7b\u578b\u662f\u5012\u6392\u7d22\u5f15\uff0c\u7528\u4e8e\u52a0\u901f\u5b50\u5217\u7684\u6761\u4ef6\u8fc7\u6ee4"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'PROPERTIES("parser" = "english")')," \u6307\u5b9a\u91c7\u7528 english \u5206\u8bcd")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE test_variant;\nUSE test_variant;\nCREATE TABLE IF NOT EXISTS github_events (\n    id BIGINT NOT NULL,\n    type VARCHAR(30) NULL,\n    actor VARIANT NULL,\n    repo VARIANT NULL,\n    payload VARIANT NULL,\n    public BOOLEAN NULL,\n    created_at DATETIME NULL,\n    INDEX idx_payload (`payload`) USING INVERTED PROPERTIES("parser" = "english") COMMENT \'inverted index for payload\'\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nproperties("replication_num" = "1");\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f\u7684\u662f:")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"\u5728 VARIANT \u5217\u4e0a\u521b\u5efa\u7d22\u5f15\uff0c\u6bd4\u5982 payload \u7684\u5b50\u5217\u5f88\u591a\u65f6\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u7d22\u5f15\u5217\u8fc7\u591a\uff0c\u5f71\u54cd\u5199\u5165\u6027\u80fd"),(0,r.yg)("li",{parentName:"ol"},"\u540c\u4e00\u4e2a VARIANT \u5217\u7684\u5206\u8bcd\u5c5e\u6027\u662f\u76f8\u540c\u7684\uff0c\u5982\u679c\u60a8\u6709\u4e0d\u540c\u7684\u5206\u8bcd\u9700\u6c42\uff0c\u90a3\u4e48\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a VARIANT \u7136\u540e\u5206\u522b\u6307\u5b9a\u7d22\u5f15\u5c5e\u6027"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528 streamload \u5bfc\u5165")),(0,r.yg)("p",null,"\u5bfc\u5165gh_2022-11-07-3.json\uff0c\u8fd9\u662f github events \u4e00\u4e2a\u5c0f\u65f6\u7684\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'wget http://doris-build-hk-1308700295.cos.ap-hongkong.myqcloud.com/regression/variant/gh_2022-11-07-3.json\n\ncurl --location-trusted -u root:  -T gh_2022-11-07-3.json -H "read_json_by_line:true" -H "format:json"  http://127.0.0.1:18148/api/test_variant/github_events/_strea\nm_load\n\n{\n    "TxnId": 2,\n    "Label": "086fd46a-20e6-4487-becc-9b6ca80281bf",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 139325,\n    "NumberLoadedRows": 139325,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 633782875,\n    "LoadTimeMs": 7870,\n    "BeginTxnTimeMs": 19,\n    "StreamLoadPutTimeMs": 162,\n    "ReadDataTimeMs": 2416,\n    "WriteDataTimeMs": 7634,\n    "CommitAndPublishTimeMs": 55\n}\n')),(0,r.yg)("p",null,"\u786e\u8ba4\u5bfc\u5165\u6210\u529f"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- \u67e5\u770b\u884c\u6570\nmysql> select count() from github_events;\n+----------+\n| count(*) |\n+----------+\n|   139325 |\n+----------+\n1 row in set (0.25 sec)\n\n-- \u968f\u673a\u770b\u4e00\u6761\u6570\u636e\nmysql> select * from github_events limit 1;\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| id          | type      | actor                                                                                                                                                                                                                       | repo                                                                                                                                                     | payload                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | public | created_at          |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n| 25061821748 | PushEvent | {"gravatar_id":"","display_login":"jfrog-pipelie-intg","url":"https://api.github.com/users/jfrog-pipelie-intg","id":98024358,"login":"jfrog-pipelie-intg","avatar_url":"https://avatars.githubusercontent.com/u/98024358?"} | {"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16","id":562683829,"name":"jfrog-pipelie-intg/jfinte2e_1667789956723_16"} | {"commits":[{"sha":"334433de436baa198024ef9f55f0647721bcd750","author":{"email":"98024358+jfrog-pipelie-intg@users.noreply.github.com","name":"jfrog-pipelie-intg"},"message":"commit message 10238493157623136117","distinct":true,"url":"https://api.github.com/repos/jfrog-pipelie-intg/jfinte2e_1667789956723_16/commits/334433de436baa198024ef9f55f0647721bcd750"}],"before":"f84a26792f44d54305ddd41b7e3a79d25b1a9568","head":"334433de436baa198024ef9f55f0647721bcd750","size":1,"push_id":11572649828,"ref":"refs/heads/test-notification-sent-branch-10238493157623136113","distinct_size":1} |      1 | 2022-11-07 11:00:00 |\n+-------------+-----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+---------------------+\n1 row in set (0.23 sec)\n')),(0,r.yg)("p",null,"desc \u67e5\u770b schema \u4fe1\u606f\uff0c\u5b50\u5217\u4f1a\u5728\u5b58\u50a8\u5c42\u81ea\u52a8\u6269\u5c55\u3001\u5e76\u8fdb\u884c\u7c7b\u578b\u63a8\u5bfc"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> desc github_events;\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| Field                                                      | Type       | Null | Key   | Default | Extra |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| id                                                         | BIGINT     | No   | true  | NULL    |       |\n| type                                                       | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| actor                                                      | VARIANT    | Yes  | false | NULL    | NONE  |\n| created_at                                                 | DATETIME   | Yes  | false | NULL    | NONE  |\n| payload                                                    | VARIANT    | Yes  | false | NULL    | NONE  |\n| public                                                     | BOOLEAN    | Yes  | false | NULL    | NONE  |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n6 rows in set (0.07 sec)\n\nmysql> set describe_extend_variant_column = true;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> desc github_events;\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| Field                                                      | Type       | Null | Key   | Default | Extra |\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n| id                                                         | BIGINT     | No   | true  | NULL    |       |\n| type                                                       | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| actor                                                      | VARIANT    | Yes  | false | NULL    | NONE  |\n| actor.avatar_url                                           | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.display_login                                        | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.id                                                   | INT        | Yes  | false | NULL    | NONE  |\n| actor.login                                                | TEXT       | Yes  | false | NULL    | NONE  |\n| actor.url                                                  | TEXT       | Yes  | false | NULL    | NONE  |\n| created_at                                                 | DATETIME   | Yes  | false | NULL    | NONE  |\n| payload                                                    | VARIANT    | Yes  | false | NULL    | NONE  |\n| payload.action                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.before                                             | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.author_association                         | TEXT       | Yes  | false | NULL    | NONE  |\n| payload.comment.body                                       | TEXT       | Yes  | false | NULL    | NONE  |\n....\n+------------------------------------------------------------+------------+------+-------+---------+-------+\n406 rows in set (0.07 sec)\n")),(0,r.yg)("p",null,"desc \u53ef\u4ee5\u6307\u5b9a partition \u67e5\u770b\u67d0\u4e2a partition \u7684 schema\uff0c \u8bed\u6cd5\u5982\u4e0b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"DESCRIBE ${table_name} PARTITION ($partition_name);\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u67e5\u8be2")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),"\n\u5982\u4f7f\u7528\u8fc7\u6ee4\u548c\u805a\u5408\u7b49\u529f\u80fd\u6765\u67e5\u8be2\u5b50\u5217, \u9700\u8981\u5bf9\u5b50\u5217\u8fdb\u884c\u989d\u5916\u7684 cast \u64cd\u4f5c\uff08\u56e0\u4e3a\u5b58\u50a8\u7c7b\u578b\u4e0d\u4e00\u5b9a\u662f\u56fa\u5b9a\u7684\uff0c\u9700\u8981\u6709\u4e00\u4e2a SQL \u7edf\u4e00\u7684\u7c7b\u578b\uff09\u3002\n\u4f8b\u5982 SELECT * FROM tbl where CAST(var","['titile']",' as text) MATCH "hello world"\n\u4ee5\u4e0b\u7b80\u5316\u7684\u793a\u4f8b\u8bf4\u660e\u4e86\u5982\u4f55\u4f7f\u7528 VARIANT \u8fdb\u884c\u67e5\u8be2')),(0,r.yg)("p",null,"\u4e0b\u9762\u662f\u5178\u578b\u7684\u4e09\u4e2a\u67e5\u8be2\u573a\u666f\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4ece github_events \u8868\u4e2d\u83b7\u53d6 top 5 star \u6570\u7684\u4ee3\u7801\u5e93")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT\n    ->     cast(repo['name'] as text) as repo_name, count() AS stars\n    -> FROM github_events\n    -> WHERE type = 'WatchEvent'\n    -> GROUP BY stars \n    -> ORDER BY stars DESC LIMIT 5;\n+--------------------------+-------+\n| repo_name                | stars |\n+--------------------------+-------+\n| aplus-framework/app      |    78 |\n| lensterxyz/lenster       |    77 |\n| aplus-framework/database |    46 |\n| stashapp/stash           |    42 |\n| aplus-framework/image    |    34 |\n+--------------------------+-------+\n5 rows in set (0.03 sec)\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u83b7\u53d6\u8bc4\u8bba\u4e2d\u5305\u542b doris \u7684\u6570\u91cf")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT\n    ->     count() FROM github_events\n    ->     WHERE cast(payload['comment']['body'] as text) MATCH 'doris';\n+---------+\n| count() |\n+---------+\n|       3 |\n+---------+\n1 row in set (0.04 sec)\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u67e5\u8be2 comments \u6700\u591a\u7684 issue \u53f7\u4ee5\u53ca\u5bf9\u5e94\u7684\u5e93")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT \n    ->   cast(repo['name'] as string) as repo_name, \n    ->   cast(payload['issue']['number'] as int) as issue_number, \n    ->   count() AS comments, \n    ->   count(\n    ->     distinct cast(actor['login'] as string)\n    ->   ) AS authors \n    -> FROM  github_events \n    -> WHERE type = 'IssueCommentEvent' AND (cast(payload['action'] as string) = 'created') AND (cast(payload['issue']['number'] as int) > 10) \n    -> GROUP BY repo_name, issue_number \n    -> HAVING authors >= 4\n    -> ORDER BY comments DESC, repo_name \n    -> LIMIT 50;\n+--------------------------------------+--------------+----------+---------+\n| repo_name                            | issue_number | comments | authors |\n+--------------------------------------+--------------+----------+---------+\n| facebook/react-native                |        35228 |        5 |       4 |\n| swsnu/swppfall2022-team4             |           27 |        5 |       4 |\n| belgattitude/nextjs-monorepo-example |         2865 |        4 |       4 |\n+--------------------------------------+--------------+----------+---------+\n3 rows in set (0.03 sec)\n")),(0,r.yg)("h3",{id:"\u4f7f\u7528\u9650\u5236\u548c\u6700\u4f73\u5b9e\u8df5"},"\u4f7f\u7528\u9650\u5236\u548c\u6700\u4f73\u5b9e\u8df5"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"VARIANT \u7c7b\u578b\u7684\u4f7f\u7528\u6709\u4ee5\u4e0b\u9650\u5236\uff1a"),"\nVARIANT \u52a8\u6001\u5217\u4e0e\u9884\u5b9a\u4e49\u9759\u6001\u5217\u51e0\u4e4e\u4e00\u6837\u9ad8\u6548\u3002\u5904\u7406\u8bf8\u5982\u65e5\u5fd7\u4e4b\u7c7b\u7684\u6570\u636e \uff0c\u5728\u8fd9\u7c7b\u6570\u636e\u4e2d\uff0c\u7ecf\u5e38\u901a\u8fc7\u52a8\u6001\u5c5e\u6027\u6dfb\u52a0\u5b57\u6bb5\uff08\u4f8b\u5982 Kubernetes \u4e2d\u7684\u5bb9\u5668\u6807\u7b7e\uff09\u3002\u4f46\u662f\u89e3\u6790 JSON \u548c\u63a8\u65ad\u7c7b\u578b\u4f1a\u5728\u5199\u5165\u65f6\u4ea7\u751f\u989d\u5916\u5f00\u9500\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u4fdd\u6301\u5355\u6b21\u5bfc\u5165\u5217\u6570\u5728 1000 \u4ee5\u4e0b\u3002"),(0,r.yg)("p",null,"\u5c3d\u53ef\u80fd\u4fdd\u8bc1\u7c7b\u578b\u4e00\u81f4\uff0c Doris \u4f1a\u81ea\u52a8\u8fdb\u884c\u5982\u4e0b\u517c\u5bb9\u7c7b\u578b\u8f6c\u6362\uff0c\u5f53\u5b57\u6bb5\u65e0\u6cd5\u8fdb\u884c\u517c\u5bb9\u7c7b\u578b\u8f6c\u6362\u65f6\u4f1a\u7edf\u4e00\u8f6c\u6362\u6210 JSONB \u7c7b\u578b\u3002JSONB \u5217\u7684\u6027\u80fd\u4e0e int\u3001text \u7b49\u5217\u6027\u80fd\u4f1a\u6709\u6240\u9000\u5316\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"tinyint->smallint->int->bigint\uff0c \u6574\u5f62\u53ef\u4ee5\u6309\u7167\u7bad\u5934\u505a\u7c7b\u578b\u63d0\u5347"),(0,r.yg)("li",{parentName:"ol"},"float->double\uff0c\u6d6e\u70b9\u6570\u6309\u7167\u7bad\u5934\u505a\u7c7b\u578b\u63d0\u5347"),(0,r.yg)("li",{parentName:"ol"},"text\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,r.yg)("li",{parentName:"ol"},"JSON\uff0c \u4e8c\u8fdb\u5236JSON\u7c7b\u578b")),(0,r.yg)("p",null,"\u4e0a\u8bc9\u7c7b\u578b\u65e0\u6cd5\u517c\u5bb9\u65f6\uff0c \u4f1a\u53d8\u6210JSON\u7c7b\u578b\u9632\u6b62\u7c7b\u578b\u4fe1\u606f\u4e22\u5931\uff0c \u5982\u679c\u60a8\u9700\u8981\u5728 VARIANT \u4e2d\u8bbe\u7f6e\u4e25\u683c\u7684schema\uff0c\u5373\u5c06\u63a8\u51fa VARIANT MAPPING\u673a\u5236"),(0,r.yg)("p",null,"\u5176\u5b83\u9650\u5236\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301 Aggregate \u6a21\u578b"),(0,r.yg)("li",{parentName:"ul"},"VARIANT \u5217\u53ea\u80fd\u521b\u5efa\u5012\u6392\u7d22\u5f15"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u63a8\u8350\u4f7f\u7528 RANDOM \u6a21\u5f0f\uff0c \u5199\u5165\u6027\u80fd\u66f4\u9ad8\u6548")),(0,r.yg)("li",{parentName:"ul"},"\u65e5\u671f\u3001decimal \u7b49\u975e\u6807\u51c6 JSON \u7c7b\u578b\u4f1a\u88ab\u9ed8\u8ba4\u63a8\u65ad\u6210\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u6240\u4ee5\u5c3d\u53ef\u80fd\u4ece VARIANT \u4e2d\u63d0\u53d6\u51fa\u6765\uff0c\u7528\u9759\u6001\u7c7b\u578b\uff0c\u6027\u80fd\u66f4\u597d"),(0,r.yg)("li",{parentName:"ul"},"2 \u7ef4\u53ca\u5176\u4ee5\u4e0a\u7684\u6570\u7ec4\u5217\u5b58\u5316\u4f1a\u88ab\u5b58\u6210 JSONB \u7f16\u7801\uff0c\u6027\u80fd\u4e0d\u5982\u539f\u751f\u6570\u7ec4"),(0,r.yg)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4f5c\u4e3a\u4e3b\u952e\u6216\u8005\u6392\u5e8f\u952e"),(0,r.yg)("li",{parentName:"ul"},"\u67e5\u8be2\u8fc7\u6ee4\u3001\u805a\u5408\u9700\u8981\u5e26 cast\uff0c \u5b58\u50a8\u5c42\u4f1a\u6839\u636e\u5b58\u50a8\u7c7b\u578b\u548c cast \u76ee\u6807\u7c7b\u578b\u6765\u6d88\u9664 cast \u64cd\u4f5c\uff0c\u52a0\u901f\u67e5\u8be2\u3002")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"VARIANT\n")))}m.isMDXComponent=!0}}]);