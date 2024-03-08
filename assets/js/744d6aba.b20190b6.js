"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82882],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>c});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,c=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(c,o(o({ref:t},g),{},{components:a})):n.createElement(c,o({ref:t},g))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},292052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(58168),l=(a(296540),a(15680));const r={title:"Beats Doris Output Plugin",language:"en"},o=void 0,i={unversionedId:"ecosystem/beats",id:"ecosystem/beats",title:"Beats Doris Output Plugin",description:"\x3c!--",source:"@site/docs/ecosystem/beats.md",sourceDirName:"ecosystem",slug:"/ecosystem/beats",permalink:"/docs/dev/ecosystem/beats",draft:!1,tags:[],version:"current",frontMatter:{title:"Beats Doris Output Plugin",language:"en"},sidebar:"docs",previous:{title:"Logstash Doris Output Plugin",permalink:"/docs/dev/ecosystem/logstash"},next:{title:"Plugin Development Manual",permalink:"/docs/dev/ecosystem/plugin-development-manual"}},s={},p=[{value:"Compatibility",id:"compatibility",level:2},{value:"Install",id:"install",level:2},{value:"Download source code",id:"download-source-code",level:3},{value:"Compile",id:"compile",level:3},{value:"Usage",id:"usage",level:2},{value:"Configure Beat",id:"configure-beat",level:3},{value:"Start Beat",id:"start-beat",level:3},{value:"Configurations",id:"configurations",level:2},{value:"Complete usage example of filebeat",id:"complete-usage-example-of-filebeat",level:2},{value:"Init Doris",id:"init-doris",level:3},{value:"Configure Filebeat",id:"configure-filebeat",level:3},{value:"Start Filebeat",id:"start-filebeat",level:3},{value:"Validate Load Data",id:"validate-load-data",level:3},{value:"More configure examples",id:"more-configure-examples",level:2},{value:"Specify columns",id:"specify-columns",level:3},{value:"Collect json file",id:"collect-json-file",level:3},{value:"Codec output fields",id:"codec-output-fields",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to config batch commit size",id:"how-to-config-batch-commit-size",level:3},{value:"How to use other beats(e.g metricbeat)",id:"how-to-use-other-beatseg-metricbeat",level:3},{value:"How to build docker image",id:"how-to-build-docker-image",level:3}],g={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"beats-output-plugin"},"Beats output plugin"),(0,l.yg)("p",null,"This is an output implementation of ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats"},"elastic beats")," for support ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/filebeat"},"Filebeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/metricbeat"},"Metricbeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/packetbeat"},"Packetbeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/winlogbeat"},"Winlogbeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/auditbeat"},"Auditbeat"),", ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/heartbeat"},"Heartbeat")," to ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Apache Doris"),"."),(0,l.yg)("p",null,"This module is used to output data to Doris for elastic beats, use the HTTP protocol to interact with the Doris FE Http interface, and import data through Doris's stream load."),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-way/stream-load-manual"},"Learn more about Doris Stream Load ")),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/"},"Learn more about Doris")),(0,l.yg)("h2",{id:"compatibility"},"Compatibility"),(0,l.yg)("p",null,"This output is developed and tested using Beats 7.3.1"),(0,l.yg)("h2",{id:"install"},"Install"),(0,l.yg)("h3",{id:"download-source-code"},"Download source code"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mkdir -p $GOPATH/src/github.com/apache/\ncd $GOPATH/src/github.com/apache/\ngit clone https://github.com/apache/doris\ncd doris/extension/beats\n")),(0,l.yg)("h3",{id:"compile"},"Compile"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"go build -o filebeat filebeat/filebeat.go\ngo build -o metricbeat metricbeat/metricbeat.go\ngo build -o winlogbeat winlogbeat/winlogbeat.go\ngo build -o packetbeat packetbeat/packetbeat.go\ngo build -o auditbeat auditbeat/auditbeat.go\ngo build -o heartbeat heartbeat/heartbeat.go\n")),(0,l.yg)("p",null,"You will get executables in various subdirectories"),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("p",null,"In this section, you can use the sample config file in the directory ","[./example/]",", or you can create it as follow steps."),(0,l.yg)("h3",{id:"configure-beat"},"Configure Beat"),(0,l.yg)("p",null,"Add following configuration to ",(0,l.yg)("inlineCode",{parentName:"p"},"*beat.yml")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'output.doris:\n  fenodes: ["http://localhost:8030"] # your doris fe address\n  user: root # your doris user\n  password: root # your doris password\n  database: example_db # your doris database\n  table: example_table # your doris table\n\n  codec_format_string: "%{[message]}" # beat-event format expression to row data\n  headers:\n    column_separator: ","\n')),(0,l.yg)("h3",{id:"start-beat"},"Start Beat"),(0,l.yg)("p",null,"Using filebeat as an example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./filebeat/filebeat -c filebeat.yml -e\n")),(0,l.yg)("h2",{id:"configurations"},"Configurations"),(0,l.yg)("p",null,"Connection doris configuration:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,l.yg)("td",{parentName:"tr",align:null},"FE's HTTP interactive address eg : ",'["http://fe1:8030", "http://fe2:8030"]'),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"User name, the user needs to have import permission for the doris table"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"Password"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"Database name"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"Table name"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"label_prefix"),(0,l.yg)("td",{parentName:"tr",align:null},"Import the identification prefix, the final generated ID is ",(0,l.yg)("em",{parentName:"td"},"{label","_","prefix}","_","{db}","_","{table}","_","{time_stamp}")),(0,l.yg)("td",{parentName:"tr",align:null},"doris_beats")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"line_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"Used to specify the newline character in the imported data, the default is \\n. Combinations of multiple characters can be used as newlines."),(0,l.yg)("td",{parentName:"tr",align:null},"\\n")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"headers"),(0,l.yg)("td",{parentName:"tr",align:null},"Users can pass in ",(0,l.yg)("a",{parentName:"td",href:"/docs/dev/data-operate/import/import-way/stream-load-manual"},"stream-load import parameters")," through the headers."),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("p",null,"Beats configuration:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"codec_format_string"),(0,l.yg)("td",{parentName:"tr",align:null},"Set the ",(0,l.yg)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/beats/filebeat/7.3/configuration-output-codec.html"},"expression")," of format ",(0,l.yg)("inlineCode",{parentName:"td"},"beat event"),", and the format result will be added into http body as a row data"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"codec"),(0,l.yg)("td",{parentName:"tr",align:null},"Beats ",(0,l.yg)("a",{parentName:"td",href:"https://www.elastic.co/guide/en/beats/filebeat/7.3/configuration-output-codec.html"},"output codec")," and the format result will be added to http body as a row, Priority to use ",(0,l.yg)("inlineCode",{parentName:"td"},"codec_format_string")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"Set the http client connection timeout"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bulk_max_size"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of events processed per batch"),(0,l.yg)("td",{parentName:"tr",align:null},"100000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,l.yg)("td",{parentName:"tr",align:null},"Filebeat ignores the max_retries setting and retries indefinitely."),(0,l.yg)("td",{parentName:"tr",align:null},"3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"backoff.init"),(0,l.yg)("td",{parentName:"tr",align:null},"The number of seconds to wait before trying to reconnect after a network error."),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"backoff.max"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of seconds to wait before attempting to connect after a network error."),(0,l.yg)("td",{parentName:"tr",align:null},"60")))),(0,l.yg)("h2",{id:"complete-usage-example-of-filebeat"},"Complete usage example of filebeat"),(0,l.yg)("h3",{id:"init-doris"},"Init Doris"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE example_db;\n\nCREATE TABLE example_db.example_table (\n    id BIGINT,\n    name VARCHAR(100)\n)\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num"="1"\n);\n')),(0,l.yg)("h3",{id:"configure-filebeat"},"Configure Filebeat"),(0,l.yg)("p",null,"Create ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/filebeat.yml")," file and add following configuration:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'filebeat.inputs:\n  - type: log\n    enabled: true\n    paths:\n      - /tmp/beats/example.log\n\noutput.doris:\n  fenodes: ["http://localhost:8030"] # your doris fe address\n  user: root # your doris user\n  password: root # your doris password\n  database: example_db # your doris database\n  table: example_table # your doris table\n\n  codec_format_string: "%{[message]}"\n  headers:\n    column_separator: ","\n')),(0,l.yg)("h3",{id:"start-filebeat"},"Start Filebeat"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./filebeat/filebeat -c /tmp/beats/filebeat.yml -e\n")),(0,l.yg)("h3",{id:"validate-load-data"},"Validate Load Data"),(0,l.yg)("p",null,"Add write data to ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/example.log")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'echo -e "1,A\\n2,B\\n3,C\\n4,D" >> /tmp/beats/example.log\n')),(0,l.yg)("p",null,"Observe the filebeat log. If the error log is not printed, the import was successful. At this time, you can view the imported data in the ",(0,l.yg)("inlineCode",{parentName:"p"},"example_db.example_table")," table"),(0,l.yg)("h2",{id:"more-configure-examples"},"More configure examples"),(0,l.yg)("h3",{id:"specify-columns"},"Specify columns"),(0,l.yg)("p",null,"Make ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/example.log")," and add following content:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-csv"},"1,A\n2,B\n")),(0,l.yg)("p",null,"Configure ",(0,l.yg)("inlineCode",{parentName:"p"},"columns")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'filebeat.inputs:\n  - type: log\n    enabled: true\n    paths:\n      - /tmp/beats/example.log\n\noutput.doris:\n  ...\n\n  codec_format_string: "%{[message]}"\n  headers:\n    columns: "id,name"\n')),(0,l.yg)("h3",{id:"collect-json-file"},"Collect json file"),(0,l.yg)("p",null,"Make ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/example.json")," and add following content:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{"id":  1, "name": "A"}\n{"id":  2, "name": "B"}\n')),(0,l.yg)("p",null,"Configure ",(0,l.yg)("inlineCode",{parentName:"p"},"headers")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'filebeat.inputs:\n  - type: log\n    enabled: true\n    paths:\n      - /tmp/beats/example.json\n\noutput.doris:\n  ...\n\n  codec_format_string: "%{[message]}"\n  headers:\n    format: json\n    read_json_by_line: true\n')),(0,l.yg)("h3",{id:"codec-output-fields"},"Codec output fields"),(0,l.yg)("p",null,"Make ",(0,l.yg)("inlineCode",{parentName:"p"},"/tmp/beats/example.log")," and add following content:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-csv"},"1,A\n2,B\n")),(0,l.yg)("p",null,"Configure ",(0,l.yg)("inlineCode",{parentName:"p"},"codec_format_string")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},'filebeat.inputs:\n  - type: log\n    enabled: true\n    paths:\n      - /tmp/beats/example.log\n\noutput.doris:\n  ...\n\n  codec_format_string: "%{[message]},%{[@timestamp]},%{[@metadata.type]}"\n  headers:\n    columns: "id,name,beat_timestamp,beat_metadata_type"\n')),(0,l.yg)("h2",{id:"faq"},"FAQ"),(0,l.yg)("h3",{id:"how-to-config-batch-commit-size"},"How to config batch commit size"),(0,l.yg)("p",null,"Add following configuration to your ",(0,l.yg)("inlineCode",{parentName:"p"},"beat.yml")),(0,l.yg)("p",null,"This sample configuration forwards events to the doris  if 10000 events are available or the oldest available event has been waiting for 5s in the ",(0,l.yg)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/beats/filebeat/7.3/configuring-internal-queue.html#configuration-internal-queue-memory"},"mem queue"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yml"},"queue.mem:\n  events: 10000\n  flush.min_events: 10000\n  flush.timeout: 5s\n")),(0,l.yg)("h3",{id:"how-to-use-other-beatseg-metricbeat"},"How to use other beats(e.g metricbeat)"),(0,l.yg)("p",null,"Doris beats support all beats modules, see the ",(0,l.yg)("a",{parentName:"p",href:"#Install"},"Install")," and ",(0,l.yg)("a",{parentName:"p",href:"#Usage"},"Usage")),(0,l.yg)("h3",{id:"how-to-build-docker-image"},"How to build docker image"),(0,l.yg)("p",null,"You can package a docker image with an executable file of ",(0,l.yg)("a",{parentName:"p",href:"#Install"},"Install")," outputs"))}u.isMDXComponent=!0}}]);