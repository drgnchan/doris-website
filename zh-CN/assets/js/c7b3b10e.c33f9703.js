"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51452],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>y});var n=a(11504);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),g=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=g(a),d=l,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var g=2;g<r;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86460:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var n=a(45072),l=(a(11504),a(95788));const r={title:"Beats Doris Output Plugin",language:"zh-CN"},i=void 0,p={unversionedId:"ecosystem/beats",id:"version-1.2/ecosystem/beats",title:"Beats Doris Output Plugin",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/ecosystem/beats.md",sourceDirName:"ecosystem",slug:"/ecosystem/beats",permalink:"/zh-CN/docs/1.2/ecosystem/beats",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Beats Doris Output Plugin",language:"zh-CN"},sidebar:"docs",previous:{title:"Logstash Doris Output Plugin",permalink:"/zh-CN/docs/1.2/ecosystem/logstash"},next:{title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",permalink:"/zh-CN/docs/1.2/ecosystem/plugin-development-manual"}},o={},g=[{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4e0b\u8f7d\u6e90\u7801",id:"\u4e0b\u8f7d\u6e90\u7801",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u914d\u7f6e Beat",id:"\u914d\u7f6e-beat",level:3},{value:"\u542f\u52a8 Beat",id:"\u542f\u52a8-beat",level:3},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u5b8c\u6574\u4f7f\u7528\u793a\u4f8b(Filebeat)",id:"\u5b8c\u6574\u4f7f\u7528\u793a\u4f8bfilebeat",level:2},{value:"\u521d\u59cb\u5316 Doris",id:"\u521d\u59cb\u5316-doris",level:3},{value:"\u914d\u7f6e Filebeat",id:"\u914d\u7f6e-filebeat",level:3},{value:"\u542f\u52a8 Filebeat",id:"\u542f\u52a8-filebeat",level:3},{value:"\u9a8c\u8bc1\u6570\u636e\u5bfc\u5165",id:"\u9a8c\u8bc1\u6570\u636e\u5bfc\u5165",level:3},{value:"\u66f4\u591a\u914d\u7f6e\u793a\u4f8b",id:"\u66f4\u591a\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u6307\u5b9a\u5bfc\u5165\u7684 columns",id:"\u6307\u5b9a\u5bfc\u5165\u7684-columns",level:3},{value:"\u91c7\u96c6 json \u6587\u4ef6",id:"\u91c7\u96c6-json-\u6587\u4ef6",level:3},{value:"\u7f16\u7801\u8f93\u51fa\u5b57\u6bb5",id:"\u7f16\u7801\u8f93\u51fa\u5b57\u6bb5",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u5982\u4f55\u914d\u7f6e\u6279\u5904\u7406\u63d0\u4ea4\u5927\u5c0f",id:"\u5982\u4f55\u914d\u7f6e\u6279\u5904\u7406\u63d0\u4ea4\u5927\u5c0f",level:3},{value:"\u5982\u4f55\u4f7f\u7528\u5176\u4ed6\u7684 beats(\u4f8b\u5982 metricbeat)",id:"\u5982\u4f55\u4f7f\u7528\u5176\u4ed6\u7684-beats\u4f8b\u5982-metricbeat",level:3},{value:"\u5982\u4f55\u6784\u5efa docker \u955c\u50cf",id:"\u5982\u4f55\u6784\u5efa-docker-\u955c\u50cf",level:3}],s={toc:g},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(m,(0,n.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"beats-output-plugin"},"Beats output plugin"),(0,l.yg)("p",null,"\u8fd9\u662f ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats"},"elastic beats")," \u7684\u8f93\u51fa\u5b9e\u73b0\uff0c\u652f\u6301 ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/filebeat"},"Filebeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/metricbeat"},"Metricbeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/packetbeat"},"Packetbeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/winlogbeat"},"Winlogbeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/auditbeat"},"Auditbeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/heartbeat"},"Heartbeat")," \u5230 Apache Doris\u3002"),(0,l.yg)("p",null,"\u8be5\u63d2\u4ef6\u7528\u4e8e beats \u8f93\u51fa\u6570\u636e\u5230 Doris\uff0c\u4f7f\u7528 HTTP \u534f\u8bae\u4e0e Doris FE Http \u63a5\u53e3\u4ea4\u4e92\uff0c\u5e76\u901a\u8fc7 Doris \u7684 stream load \u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u5bfc\u5165."),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/data-operate/import/import-way/stream-load-manual"},"\u4e86\u89e3Doris Stream Load")),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/zh-CN"},"\u4e86\u89e3\u66f4\u591a\u5173\u4e8eDoris")),(0,l.yg)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,l.yg)("p",null,"\u6b64\u63d2\u4ef6\u662f\u4f7f\u7528 Beats 7.3.1 \u5f00\u53d1\u548c\u6d4b\u8bd5\u7684"),(0,l.yg)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.yg)("h3",{id:"\u4e0b\u8f7d\u6e90\u7801"},"\u4e0b\u8f7d\u6e90\u7801"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mkdir -p $GOPATH/src/github.com/apache/\ncd $GOPATH/src/github.com/apache/\ngit clone https://github.com/apache/doris\ncd doris/extension/beats\n")),(0,l.yg)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,l.yg)("p",null,"\u5728 extension/beats/ \u76ee\u5f55\u4e0b\u6267\u884c"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"go build -o filebeat filebeat/filebeat.go\ngo build -o metricbeat metricbeat/metricbeat.go\ngo build -o winlogbeat winlogbeat/winlogbeat.go\ngo build -o packetbeat packetbeat/packetbeat.go\ngo build -o auditbeat auditbeat/auditbeat.go\ngo build -o heartbeat heartbeat/heartbeat.go\n")),(0,l.yg)("p",null,"\u60a8\u5c06\u5728\u5404\u4e2a\u5b50\u76ee\u5f55\u76ee\u5f55\u4e0b\u5f97\u5230\u53ef\u6267\u884c\u6587\u4ef6"),(0,l.yg)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u76ee\u5f55 ","[./example/]"," \u4e2d\u7684\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u5b83\u3002"),(0,l.yg)("h3",{id:"\u914d\u7f6e-beat"},"\u914d\u7f6e Beat"),(0,l.yg)("p",null,"\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u5230 ",(0,l.yg)("inlineCode",{parentName:"p"},"*beat.yml")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'output.doris:\n  fenodes: ["http://localhost:8030"] # your doris fe address\n  user: root # your doris user\n  password: root # your doris password\n  database: example_db # your doris database\n  table: example_table # your doris table\n\n  codec_format_string: "%{[message]}" # beat-event format expression to row data\n  headers:\n    column_separator: ","\n')),(0,l.yg)("h3",{id:"\u542f\u52a8-beat"},"\u542f\u52a8 Beat"),(0,l.yg)("p",null,"\u4f7f\u7528 filebeat \u4f5c\u4e3a\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./filebeat/filebeat -c filebeat.yml -e\n")),(0,l.yg)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,l.yg)("p",null,"\u8fde\u63a5 doris \u914d\u7f6e:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,l.yg)("td",{parentName:"tr",align:null},"FE \u7684 HTTP\u4ea4\u4e92\u5730\u5740\u3002 \u4f8b\u5982\uff1a  ",'["http://fe1:8030", "http://fe2:8030"]'),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\uff0c\u8be5\u7528\u6237\u9700\u8981\u6709 Doris \u5bf9\u5e94\u5e93\u8868\u7684\u5bfc\u5165\u6743\u9650"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8868\u540d"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"label_prefix"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u6807\u8bc6\u524d\u7f00\uff0c\u6700\u7ec8\u751f\u6210\u7684\u6807\u8bc6\u4e3a ",(0,l.yg)("em",{parentName:"td"},"{label","_","prefix}","_","{db}","_","{table}","_","{time_stamp}")),(0,l.yg)("td",{parentName:"tr",align:null},"doris_beats")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"line_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6570\u636e\u4e2d\u7684\u6362\u884c\u7b26\uff0c\u53ef\u4ee5\u4f7f\u7528\u505a\u591a\u4e2a\u5b57\u7b26\u7684\u7ec4\u5408\u4f5c\u4e3a\u6362\u884c\u7b26\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"\\n")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"headers"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 headers \u4f20\u5165 ",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/1.2/data-operate/import/import-way/stream-load-manual"},"stream-load \u5bfc\u5165\u53c2\u6570")),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("p",null,"Beats \u914d\u7f6e:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"codec_format_string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u683c\u5f0f\u5316 beats \u4e8b\u4ef6\u7684",(0,l.yg)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/beats/filebeat/7.3/configuration-output-codec.html"},"\u8868\u8fbe\u5f0f"),"\uff0c\u683c\u5f0f\u5316\u7ed3\u679c\u4f1a\u4f5c\u4e3a\u884c\u6570\u636e\u6dfb\u52a0\u5230 http body \u4e2d"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"codec"),(0,l.yg)("td",{parentName:"tr",align:null},"beats ",(0,l.yg)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/beats/filebeat/7.3/configuration-output-codec.html"},"\u8f93\u51fa\u7f16\u89e3\u7801\u5668"),"\uff0c\u683c\u5f0f\u7ed3\u679c\u5c06\u4f5c\u4e3a\u4e00\u884c\u6dfb\u52a0\u5230 http body \u4e2d\uff0c\u4f18\u5148\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"td"},"codec_format_string")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e http \u5ba2\u6237\u7aef\u8d85\u65f6\u65f6\u95f4"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bulk_max_size"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6279\u5904\u7406\u7684\u6700\u5927\u4e8b\u4ef6\u6570"),(0,l.yg)("td",{parentName:"tr",align:null},"100000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5931\u8d25\u65f6\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff0cFilebeat \u5ffd\u7565 max_retries \u8bbe\u7f6e\u5e76\u65e0\u9650\u671f\u91cd\u8bd5\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"backoff.init"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u9519\u8bef\u540e\u5c1d\u8bd5\u91cd\u65b0\u8fde\u63a5\u4e4b\u524d\u7b49\u5f85\u7684\u79d2\u6570"),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"backoff.max"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u9519\u8bef\u540e\u5c1d\u8bd5\u8fde\u63a5\u4e4b\u524d\u7b49\u5f85\u7684\u6700\u5927\u79d2\u6570"),(0,l.yg)("td",{parentName:"tr",align:null},"60")))),(0,l.yg)("h2",{id:"\u5b8c\u6574\u4f7f\u7528\u793a\u4f8bfilebeat"},"\u5b8c\u6574\u4f7f\u7528\u793a\u4f8b(Filebeat)"),(0,l.yg)("h3",{id:"\u521d\u59cb\u5316-doris"},"\u521d\u59cb\u5316 Doris"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE example_db;\n\nCREATE TABLE example_db.example_table (\n    id BIGINT,\n    name VARCHAR(100)\n)\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num"="1"\n);\n')),(0,l.yg)("h3",{id:"\u914d\u7f6e-filebeat"},"\u914d\u7f6e Filebeat"),(0,l.yg)("p",null,"\u521b\u5efa ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/filebeat.yml")," \u6587\u4ef6\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'filebeat.inputs:\n  - type: log\n    enabled: true\n    paths:\n      - /tmp/beats/example.log\n\noutput.doris:\n  fenodes: ["http://localhost:8030"] # your doris fe address\n  user: root # your doris user\n  password: root # your doris password\n  database: example_db # your doris database\n  table: example_table # your doris table\n\n  codec_format_string: "%{[message]}"\n  headers:\n    column_separator: ","\n')),(0,l.yg)("h3",{id:"\u542f\u52a8-filebeat"},"\u542f\u52a8 Filebeat"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./filebeat/filebeat -c /tmp/beats/filebeat.yml -e\n")),(0,l.yg)("h3",{id:"\u9a8c\u8bc1\u6570\u636e\u5bfc\u5165"},"\u9a8c\u8bc1\u6570\u636e\u5bfc\u5165"),(0,l.yg)("p",null,"\u6dfb\u52a0\u6570\u636e\u5230\u6587\u4ef6 ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/example.log")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'echo -e "1,A\\n2,B\\n3,C\\n4,D" >> /tmp/beats/example.log\n')),(0,l.yg)("p",null,"\u89c2\u5bdf filebeat \u65e5\u5fd7\uff0c\u5982\u679c\u6ca1\u6709\u6253\u5370\u9519\u8bef\u65e5\u5fd7\uff0c\u5219\u5bfc\u5165\u6210\u529f\u3002 \u8fd9\u65f6\u53ef\u4ee5\u5728 example_db.example_table \u8868\u4e2d\u67e5\u770b\u5bfc\u5165\u7684\u6570\u636e"),(0,l.yg)("h2",{id:"\u66f4\u591a\u914d\u7f6e\u793a\u4f8b"},"\u66f4\u591a\u914d\u7f6e\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u6307\u5b9a\u5bfc\u5165\u7684-columns"},"\u6307\u5b9a\u5bfc\u5165\u7684 columns"),(0,l.yg)("p",null,"\u521b\u5efa ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/example.log")," \u6587\u4ef6\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-csv"},"1,A\n2,B\n")),(0,l.yg)("p",null,"\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"columns")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'filebeat.inputs:\n  - type: log\n    enabled: true\n    paths:\n      - /tmp/beats/example.log\n\noutput.doris:\n  ...\n\n  codec_format_string: "%{[message]}"\n  headers:\n    columns: "id,name"\n')),(0,l.yg)("h3",{id:"\u91c7\u96c6-json-\u6587\u4ef6"},"\u91c7\u96c6 json \u6587\u4ef6"),(0,l.yg)("p",null,"\u521b\u5efa ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/example.json")," \u6587\u4ef6\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{"id":  1, "name": "A"}\n{"id":  2, "name": "B"}\n')),(0,l.yg)("p",null,"\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"headers")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'filebeat.inputs:\n  - type: log\n    enabled: true\n    paths:\n      - /tmp/beats/example.json\n\noutput.doris:\n  ...\n\n  codec_format_string: "%{[message]}"\n  headers:\n    format: json\n    read_json_by_line: true\n')),(0,l.yg)("h3",{id:"\u7f16\u7801\u8f93\u51fa\u5b57\u6bb5"},"\u7f16\u7801\u8f93\u51fa\u5b57\u6bb5"),(0,l.yg)("p",null,"\u521b\u5efa ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/example.log")," \u6587\u4ef6\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-csv"},"1,A\n2,B\n")),(0,l.yg)("p",null,"\u914d\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},"codec_format_string")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'filebeat.inputs:\n  - type: log\n    enabled: true\n    paths:\n      - /tmp/beats/example.log\n\noutput.doris:\n  ...\n\n  codec_format_string: "%{[message]},%{[@timestamp]},%{[@metadata.type]}"\n  headers:\n    columns: "id,name,beat_timestamp,beat_metadata_type"\n')),(0,l.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.yg)("h3",{id:"\u5982\u4f55\u914d\u7f6e\u6279\u5904\u7406\u63d0\u4ea4\u5927\u5c0f"},"\u5982\u4f55\u914d\u7f6e\u6279\u5904\u7406\u63d0\u4ea4\u5927\u5c0f"),(0,l.yg)("p",null,"\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\u5230\u60a8\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"*beat.yml")," \u6587\u4ef6\u4e2d"),(0,l.yg)("p",null,"\u5b83\u8868\u793a\uff0c\u5982\u679c\u6709 10000 \u4e2a\u4e8b\u4ef6\u53ef\u7528\u6216\u6700\u65e7\u7684\u53ef\u7528\u4e8b\u4ef6\u5df2\u5728",(0,l.yg)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/beats/filebeat/7.3/configuring-internal-queue.html#configuration-internal-queue-memory"},"\u5185\u5b58\u961f\u5217"),"\u4e2d\u7b49\u5f85 5 \u79d2\uff0c\u6b64\u793a\u4f8b\u914d\u7f6e\u4f1a\u5c06\u4e8b\u4ef6\u6279\u91cf\u8f6c\u53d1\u7ed9 doris\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},"queue.mem:\n  events: 10000\n  flush.min_events: 10000\n  flush.timeout: 5s\n")),(0,l.yg)("h3",{id:"\u5982\u4f55\u4f7f\u7528\u5176\u4ed6\u7684-beats\u4f8b\u5982-metricbeat"},"\u5982\u4f55\u4f7f\u7528\u5176\u4ed6\u7684 beats(\u4f8b\u5982 metricbeat)"),(0,l.yg)("p",null,"Doris beats \u652f\u6301\u6240\u6709\u7684 beats \u6a21\u5757\uff0c\u4f7f\u7528\u65b9\u5f0f\u53c2\u89c1 ",(0,l.yg)("a",{parentName:"p",href:"#%E5%AE%89%E8%A3%85"},"\u5b89\u88c5")," \u4e0e ",(0,l.yg)("a",{parentName:"p",href:"#%E4%BD%BF%E7%94%A8"},"\u4f7f\u7528")),(0,l.yg)("h3",{id:"\u5982\u4f55\u6784\u5efa-docker-\u955c\u50cf"},"\u5982\u4f55\u6784\u5efa docker \u955c\u50cf"),(0,l.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,l.yg)("a",{parentName:"p",href:"#%E5%AE%89%E8%A3%85"},"\u5b89\u88c5")," \u8f93\u51fa\u7684\u53ef\u6267\u884c\u6587\u4ef6\u6253\u5305 docker \u955c\u50cf"))}u.isMDXComponent=!0}}]);