"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11576],{95788:(e,t,a)=>{a.d(t,{Iu:()=>g,yg:()=>y});var n=a(11504);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=l,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(y,o(o({ref:t},g),{},{components:a})):n.createElement(y,o({ref:t},g))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(45072),l=(a(11504),a(95788));const r={title:"Logstash Doris Output Plugin",language:"en"},o=void 0,i={unversionedId:"ecosystem/logstash",id:"version-2.0/ecosystem/logstash",title:"Logstash Doris Output Plugin",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/ecosystem/logstash.md",sourceDirName:"ecosystem",slug:"/ecosystem/logstash",permalink:"/docs/ecosystem/logstash",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Logstash Doris Output Plugin",language:"en"},sidebar:"docs",previous:{title:"Kyuubi",permalink:"/docs/ecosystem/kyuubi"},next:{title:"Beats Doris Output Plugin",permalink:"/docs/ecosystem/beats"}},s={},p=[{value:"Install and compile",id:"install-and-compile",level:2},{value:"1.Download source code",id:"1download-source-code",level:3},{value:"2.compile",id:"2compile",level:3},{value:"3.Plug-in installation",id:"3plug-in-installation",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Example:",id:"example",level:3},{value:"Start Up",id:"start-up",level:2},{value:"Complete usage example",id:"complete-usage-example",level:2},{value:"1. Compile doris-output-plugin",id:"1-compile-doris-output-plugin",level:3},{value:"2. Install and configure filebeat (here use filebeat as input)",id:"2-install-and-configure-filebeat-here-use-filebeat-as-input",level:3},{value:"3.Install logstash and doris-out-plugin",id:"3install-logstash-and-doris-out-plugin",level:3},{value:"4.Test Load",id:"4test-load",level:3}],g={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,n.c)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"doris-output-plugin"},"Doris Output Plugin"),(0,l.yg)("p",null,"This plugin is used to output data to Doris for logstash, use the HTTP protocol to interact with the Doris FE Http interface, and import data through Doris's stream load."),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/stream-load-manual"},"Learn more about Doris Stream Load ")),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/"},"Learn more about Doris")),(0,l.yg)("h2",{id:"install-and-compile"},"Install and compile"),(0,l.yg)("h3",{id:"1download-source-code"},"1.Download source code"),(0,l.yg)("h3",{id:"2compile"},"2.compile"),(0,l.yg)("p",null,"Execute under extension/logstash/ directory"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"gem build logstash-output-doris.gemspec")),(0,l.yg)("p",null,"You will get logstash-output-doris-{version}.gem file in the same directory"),(0,l.yg)("h3",{id:"3plug-in-installation"},"3.Plug-in installation"),(0,l.yg)("p",null,"copy logstash-output-doris-{version}.gem to the logstash installation directory"),(0,l.yg)("p",null,"Executing an order"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"./bin/logstash-plugin install logstash-output-doris-{version}.gem")," "),(0,l.yg)("p",null,"Install logstash-output-doris plugin"),(0,l.yg)("h2",{id:"configuration"},"Configuration"),(0,l.yg)("h3",{id:"example"},"Example:"),(0,l.yg)("p",null,"Create a new configuration file in the config directory and name it logstash-doris.conf"),(0,l.yg)("p",null,"The specific configuration is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'output {\n    doris {\n        http_hosts => [ "http://fehost:8030" ]\n        user => user_name\n        password => password\n        db => "db_name"\n        table => "table_name"\n        label_prefix => "label_prefix"\n        column_separator => ","\n    }\n}\n')),(0,l.yg)("p",null,"Configuration instructions:"),(0,l.yg)("p",null,"Connection configuration:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,l.yg)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"http_hosts")),(0,l.yg)("td",{parentName:"tr",align:null},"FE's HTTP interactive address eg : ",'["http://fe1:8030", "http://fe2:8030"]')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"user")),(0,l.yg)("td",{parentName:"tr",align:null},"User name, the user needs to have import permission for the doris table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"password")),(0,l.yg)("td",{parentName:"tr",align:null},"Password")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"db")),(0,l.yg)("td",{parentName:"tr",align:null},"Database name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"table")),(0,l.yg)("td",{parentName:"tr",align:null},"Table name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"label_prefix")),(0,l.yg)("td",{parentName:"tr",align:null},"Import the identification prefix, the final generated ID is ",(0,l.yg)("em",{parentName:"td"},"{label","_","prefix}","_","{db}","_","{table}","_","{time_stamp}"))))),(0,l.yg)("p",null,"Load configuration:(",(0,l.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/stream-load-manual"},"Reference documents")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,l.yg)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"column_separator")),(0,l.yg)("td",{parentName:"tr",align:null},"Column separator, the default is \\t")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"columns")),(0,l.yg)("td",{parentName:"tr",align:null},"Used to specify the correspondence between the columns in the import file and the columns in the table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"where")),(0,l.yg)("td",{parentName:"tr",align:null},"The filter conditions specified by the import task")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"max_filter_ratio")),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum tolerance rate of the import task, the default is zero tolerance")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"partition")),(0,l.yg)("td",{parentName:"tr",align:null},"Partition information of the table to be imported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"timeout")),(0,l.yg)("td",{parentName:"tr",align:null},"timeout, the default is 600s")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"strict_mode")),(0,l.yg)("td",{parentName:"tr",align:null},"Strict mode, the default is false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"timezone")),(0,l.yg)("td",{parentName:"tr",align:null},"Specify the time zone used for this import, the default is the East Eight District")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"exec_mem_limit")),(0,l.yg)("td",{parentName:"tr",align:null},"Import memory limit, default is 2GB, unit is byte")))),(0,l.yg)("p",null,"Other configuration:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,l.yg)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"save_on_failure")),(0,l.yg)("td",{parentName:"tr",align:null},"If the import fails to save locally, the default is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"save_dir")),(0,l.yg)("td",{parentName:"tr",align:null},"Local save directory, default is /tmp")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"automatic_retries")),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of retries on failure, the default is 3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"batch_size")),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of events processed per batch, the default is 100000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"idle_flush_time")),(0,l.yg)("td",{parentName:"tr",align:null},"Maximum interval, the default is 20 (seconds)")))),(0,l.yg)("h2",{id:"start-up"},"Start Up"),(0,l.yg)("p",null,"Run the command to start the doris output plugin:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"{logstash-home}/bin/logstash -f {logstash-home}/config/logstash-doris.conf --config.reload.automatic")),(0,l.yg)("h2",{id:"complete-usage-example"},"Complete usage example"),(0,l.yg)("h3",{id:"1-compile-doris-output-plugin"},"1. Compile doris-output-plugin"),(0,l.yg)("p",null,"1> Download the ruby compressed package and go to ",(0,l.yg)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/downloads/"},"ruby official website")," to download it. The version 2.7.1 used here"),(0,l.yg)("p",null,"2> Compile and install, configure ruby environment variables"),(0,l.yg)("p",null,"3> Go to the doris source extension/logstash/ directory and execute"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"gem build logstash-output-doris.gemspec")),(0,l.yg)("p",null,"Get the file logstash-output-doris-0.1.0.gem, and the compilation is complete"),(0,l.yg)("h3",{id:"2-install-and-configure-filebeat-here-use-filebeat-as-input"},"2. Install and configure filebeat (here use filebeat as input)"),(0,l.yg)("p",null,"1> ",(0,l.yg)("a",{parentName:"p",href:"https://www.elastic.co/"},"es official website")," Download the filebeat tar compression package and decompress it"),(0,l.yg)("p",null,"2> Enter the filebeat directory and modify the configuration file filebeat.yml as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'filebeat.inputs:\n- type: log\n  paths:\n    - /tmp/doris.data\noutput.logstash:\n  hosts: ["localhost:5044"]\n')),(0,l.yg)("p",null,"/tmp/doris.data is the doris data path"),(0,l.yg)("p",null,"3> Start filebeat:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},'./filebeat -e -c filebeat.yml -d "publish"')),(0,l.yg)("h3",{id:"3install-logstash-and-doris-out-plugin"},"3.Install logstash and doris-out-plugin"),(0,l.yg)("p",null,"1> ",(0,l.yg)("a",{parentName:"p",href:"https://www.elastic.co/"},"es official website")," Download the logstash tar compressed package and decompress it"),(0,l.yg)("p",null,"2> Copy the logstash-output-doris-0.1.0.gem obtained in step 1 to the logstash installation directory"),(0,l.yg)("p",null,"3> execute"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"./bin/logstash-plugin install logstash-output-doris-0.1.0.gem")),(0,l.yg)("p",null,"Install the plugin"),(0,l.yg)("p",null,"4> Create a new configuration file logstash-doris.conf in the config directory as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'input {\n    beats {\n        port => "5044"\n    }\n}\n\noutput {\n    doris {\n        http_hosts => [ "http://127.0.0.1:8030" ]\n        user => doris\n        password => doris\n        db => "logstash_output_test"\n        table => "output"\n        label_prefix => "doris"\n        column_separator => ","\n        columns => "a,b,c,d,e"\n    }\n}\n')),(0,l.yg)("p",null,"The configuration here needs to be configured according to the configuration instructions"),(0,l.yg)("p",null,"5> Start logstash:"),(0,l.yg)("p",null,"./bin/logstash -f ./config/logstash-doris.conf --config.reload.automatic"),(0,l.yg)("h3",{id:"4test-load"},"4.Test Load"),(0,l.yg)("p",null,"Add write data to /tmp/doris.data"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"echo a,b,c,d,e >> /tmp/doris.data")),(0,l.yg)("p",null,"Observe the logstash log. If the status of the returned response is Success, the import was successful. At this time, you can view the imported data in the logstash_output_test.output table"))}d.isMDXComponent=!0}}]);