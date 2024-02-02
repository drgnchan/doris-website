"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63524],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var o=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=s(t),c=a,m=g["".concat(p,".").concat(c)]||g[c]||u[c]||r;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},83496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(45072),a=(t(11504),t(95788));const r={title:"BE development and debugging environment under Linux",language:"en"},i=void 0,l={unversionedId:"developer-guide/be-vscode-dev",id:"developer-guide/be-vscode-dev",title:"BE development and debugging environment under Linux",description:"\x3c!--",source:"@site/community/developer-guide/be-vscode-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/be-vscode-dev",permalink:"/community/developer-guide/be-vscode-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"BE development and debugging environment under Linux",language:"en"},sidebar:"community",previous:{title:"FE development and debugging environment - Visual Studio Code (VSCode)",permalink:"/community/developer-guide/fe-vscode-dev"},next:{title:"Development and Debugging of Apache Doris BE -- Clion",permalink:"/community/developer-guide/be-clion-dev"}},p={},s=[{value:"initial preparation work",id:"initial-preparation-work",level:2},{value:"Compile",id:"compile",level:2},{value:"Deployment and debugging(GDB)",id:"deployment-and-debugginggdb",level:2},{value:"Debugging(LLDB)",id:"debugginglldb",level:2},{value:"Debugging core dump files",id:"debugging-core-dump-files",level:2},{value:"Common debugging techniques",id:"common-debugging-techniques",level:2},{value:"Function execution paths",id:"function-execution-paths",level:3},{value:"Debugging CRTP objects",id:"debugging-crtp-objects",level:3}],d={toc:s},g="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(g,(0,o.c)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"apache-doris-be-development-and-debugging"},"Apache Doris Be development and debugging"),(0,a.yg)("h2",{id:"initial-preparation-work"},"initial preparation work"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This tutorial was conducted under Ubuntu 20.04")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"The name of the BE binary that appears in this doc is ",(0,a.yg)("inlineCode",{parentName:"strong"},"doris_be"),", which was ",(0,a.yg)("inlineCode",{parentName:"strong"},"palo_be")," in previous versions.")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Download the doris source code"),(0,a.yg)("p",{parentName:"li"},"URL\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"apache/doris: Apache Doris (github.com)"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Install GCC 8.3.1+, Oracle JDK 1.8+, Python 2.7+, confirm that the gcc, java, python commands point to the correct version, and set the JAVA_HOME environment variable")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Install other dependent packages"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python brotli\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10 \nsudo apt-get install autoconf automake libtool autopoint\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"install : openssl libssl-dev")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sudo apt install -y openssl libssl-dev\n")),(0,a.yg)("h2",{id:"compile"},"Compile"),(0,a.yg)("p",null,"The following steps are carried out in the /home/workspace directory"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"download source")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive \n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Compile third-party dependency packages")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," cd /home/workspace/doris/thirdparty\n ./build-thirdparty.sh\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Compile doris product code")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"cd /home/workspace/doris\n./build.sh\n")),(0,a.yg)("p",null,"Note: This compilation has the following instructions:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./build.sh  #Compile be and fe at the same time\n./build.sh  --be #Only compile be\n./build.sh  --fe #Only compilefe\n./build.sh  --fe --be --clean#Delete and compile be fe at the same time\n./build.sh  --fe  --clean#Delete and compile fe\n./build.sh  --be  --clean#Delete and compile be\n./build.sh  --be --fe  --clean#Delete and compile be fe at the same time\n")),(0,a.yg)("p",null,"If nothing happens, the compilation should be successful, and the final deployment file will be output to the /home/workspace/doris/output/ directory. If you still encounter other problems, you can refer to the doris installation document ",(0,a.yg)("a",{parentName:"p",href:"http://doris.apache.org"},"http://doris.apache.org"),"."),(0,a.yg)("p",null,"Note: If you want to specify the private maven repository address separately when compiling fe, you can set the environment variable USER_SETTINGS_MVN_REPO to specify the file path to settings.xml.\nExample:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'  export USER_SETTINGS_MVN_REPO="/xxx/xxx/settings.xml"\n')),(0,a.yg)("h2",{id:"deployment-and-debugginggdb"},"Deployment and debugging(GDB)"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Authorize be compilation result files")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"chmod  /home/workspace/doris/output/be/lib/doris_be\n")),(0,a.yg)("p",null,"Note: /home/workspace/doris/output/be/lib/doris_be is the executable file of be."),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Create a data storage directory")),(0,a.yg)("p",null,"By viewing /home/workspace/doris/output/be/conf/be.conf"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# INFO, WARNING, ERROR, FATAL\nsys_log_level = INFO\nbe_port = 9060\nbe_rpc_port = 9070\nwebserver_port = 8040\nheartbeat_service_port = 9050\nbrpc_port = 8060\narrow_flight_sql_port = -1\n\n# Note that there should be at most one ip that matches this list.\n# If no ip matches this rule, it will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/\n# Default value is empty.\npriority_networks = 192.168.59.0/24 # data root path, separate by ';'\nstorage_root_path = /soft/be/storage \n# sys_log_dir = ${PALO_HOME}/log\n# sys_log_roll_mode = SIZE-MB-\n# sys_log_roll_num =\n# sys_log_verbose_modules =\n# log_buffer_level = -\n# palo_cgroups \n")),(0,a.yg)("p",null,"Need to create this folder, this is where the be data is stored"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mkdir -p /soft/be/storage\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Open vscode, and open the directory where the be source code is located. In this case, open the directory as ",(0,a.yg)("strong",{parentName:"p"},"/home/workspace/doris/"),"\uff0cFor details on how to operate vscode, refer to the online tutorial")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Install the vscode ms c++ debugging plug-in, the plug-in identified by the red box in the figure below"))),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(46908).c,width:"1718",height:"888"})),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"Create a launch.json file, the content of the file is as follows:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/doris/output/be/lib/doris_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/doris/",\n            "environment": [{"name":"PALO_HOME","value":"/home/workspace/doris/output/be/"},\n                            {"name":"UDF_RUNTIME_DIR","value":"/home/workspace/doris/output/be/lib/udf-runtime"},\n                            {"name":"LOG_DIR","value":"/home/workspace/doris/output/be/log"},\n                            {"name":"PID_DIR","value":"/home/workspace/doris/output/be/bin"}\n                           ],\n            "externalConsole": true,\n            "MIMode": "gdb",\n            "miDebuggerPath": "/path/to/gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"Among them, environment defines several environment variables DORIS_HOME UDF_RUNTIME_DIR LOG_DIR PID_DIR, which are the environment variables needed when doris_be is running. If it is not set, the startup will fail"),(0,a.yg)("p",null,"MiDebuggerPath specifies the path of the debugger (such as gdb). If miDebuggerPath is not specified, it will search for gdb path in the PATH variable of the os. The gdb version that comes with the system can be too low, you may need to manually specify the new version of gdb path."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note: If you want attach (additional process) debugging, the configuration code is as follows:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n          "name": "(gdb) Launch",\n          "type": "cppdbg",\n          "request": "attach",\n          "program": "/home/workspace/doris/output/lib/doris_be",\n          "processId":,\n          "MIMode": "gdb",\n          "miDebuggerPath": "/path/to/gdb",\n          "internalConsoleOptions":"openOnSessionStart",\n          "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"In the configuration ",(0,a.yg)("strong",{parentName:"p"},'"request": "attach", "processId": PID'),", these two configurations are the key points: set the debug mode of gdb to attach and attach the processId of the process, otherwise it will fail. The command below can directly extract the ",(0,a.yg)("inlineCode",{parentName:"p"},"pid")," of doris' BE:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'lsof -i | grep -m 1 doris_be | awk "{print $2}"\n')),(0,a.yg)("p",null,"Or write ",(0,a.yg)("strong",{parentName:"p"},'"processId": "${command:pickProcess}"')," to specify the pid when starting attach."),(0,a.yg)("p",null,"As shown in the figure:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(52956).c,width:"1188",height:"65"})),(0,a.yg)("p",null,"Among them, 15200 is the process id of the currently running be."),(0,a.yg)("p",null,"An example of a complete launch.json is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},' {\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Attach",\n            "type": "cppdbg",\n            "request": "attach",\n            "program": "/home/workspace/doris/output/be/lib/doris_be",\n            "processId": 17016,\n            "MIMode": "gdb",\n            "miDebuggerPath": "/path/to/gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        },\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/doris/output/be/lib/doris_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/doris/output/be",\n            "environment": [\n                {\n                    "name": "DORIS_HOME",\n                    "value": "/home/workspace/doris/output/be"\n                },\n                {\n                    "name": "UDF_RUNTIME_DIR",\n                    "value": "/home/workspace/doris/output/be/lib/udf-runtime"\n                },\n                {\n                    "name": "LOG_DIR",\n                    "value": "/home/workspace/doris/output/be/log"\n                },\n                {\n                    "name": "PID_DIR",\n                    "value": "/home/workspace/doris/output/be/bin"\n                }\n            ],\n            "externalConsole": false,\n            "MIMode": "gdb",\n            "miDebuggerPath": "/path/to/gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click to debug"),(0,a.yg)("p",{parentName:"li"},"You can start your debugging journey with the rest,"))),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(37796).c,width:"1718",height:"888"})),(0,a.yg)("h2",{id:"debugginglldb"},"Debugging(LLDB)"),(0,a.yg)("p",null,"lldb's attach mode is faster than gdb\uff0cand the usage is similar to gdb. we should install plugin ",(0,a.yg)("inlineCode",{parentName:"p"},"CodeLLDB"),", then add config to launch:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "CodeLLDB attach",\n    "type": "lldb",\n    "request": "attach",\n    "program": "${workspaceFolder}/output/be/lib/doris_be",\n    "pid":"${command:pickMyProcess}"\n}\n')),(0,a.yg)("p",null,"It should be noted that this method requires the system ",(0,a.yg)("inlineCode",{parentName:"p"},"glibc")," version to be ",(0,a.yg)("inlineCode",{parentName:"p"},"2.18+"),". you can refer ",(0,a.yg)("a",{parentName:"p",href:"https://gist.github.com/JaySon-Huang/63dcc6c011feb5bd6deb1ef0cf1a9b96"},"Get VSCode CodeLLDB plugin work on CentOS 7")," to make plugin work."),(0,a.yg)("h2",{id:"debugging-core-dump-files"},"Debugging core dump files"),(0,a.yg)("p",null,"Sometimes we need to debug the core files generated by a crash, which can also be done in vscode, by adding the corresponding configuration item"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'    "coreDumpPath": "/PATH/TO/CORE/DUMP/FILE"\n')),(0,a.yg)("p",null,"and you're done."),(0,a.yg)("h2",{id:"common-debugging-techniques"},"Common debugging techniques"),(0,a.yg)("h3",{id:"function-execution-paths"},"Function execution paths"),(0,a.yg)("p",null,"When you are not familiar with the details of BE execution, you can trace function calls and find out the call chain using relevant tools such as ",(0,a.yg)("inlineCode",{parentName:"p"},"perf"),". ",(0,a.yg)("inlineCode",{parentName:"p"},"perf")," can be used in ",(0,a.yg)("a",{parentName:"p",href:"/community/developer-guide/debug-tool"},"Debug Tool"),". At this point we can execute the sql statement to be traced on a larger table and then increase the sampling frequency (e.g., ",(0,a.yg)("inlineCode",{parentName:"p"},"perf -F 999"),"). Observe the results to get a rough idea of the critical path of sql execution at BE."),(0,a.yg)("h3",{id:"debugging-crtp-objects"},"Debugging CRTP objects"),(0,a.yg)("p",null,"BE code uses a lot of CRTP (singular recursive template pattern) in the base types in order to improve the efficiency of operation, which makes it impossible for the debugger to debug objects according to the derived types. In this case we can use GDB to solve this problem in this way:"),(0,a.yg)("p",null,"Suppose we need to debug an object ",(0,a.yg)("inlineCode",{parentName:"p"},"col")," of type ",(0,a.yg)("inlineCode",{parentName:"p"},"IColumn")," and do not know its actual type, then we can:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-powershell"},"set print object on # Output the object as a derived type\np *col.t # Use col.t in this case to get the exact type of col\np col.t->size() # You can use it according to the derived type, e.g. ColumnString we can call size()\n......\n")),(0,a.yg)("p",null,"Note: it is the pointer ",(0,a.yg)("inlineCode",{parentName:"p"},"COW::t")," that has the effect of polymorphism and not the ",(0,a.yg)("inlineCode",{parentName:"p"},"IColumn")," class object, so we need to replace all uses of ",(0,a.yg)("inlineCode",{parentName:"p"},"col")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"col.t")," in the GDB to actually get the derived type object."))}u.isMDXComponent=!0},37796:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/image-20210618091006146-fa06a2d90e786b2f5dbd43a762327b73.png"},52956:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/image-20210618095240216-9950478a7c5a4193588b1c3a8d9ccc3b.png"},46908:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/image-20210618104042192-fcf6295f143c1d96b42d1b3855d95264.png"}}]);