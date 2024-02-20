"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78385],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return t?i.createElement(y,o(o({ref:n},g),{},{components:t})):i.createElement(y,o({ref:n},g))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(58168),a=(t(96540),t(15680));const r={title:"Setting Up dev env for FE - IntelliJ IDEA",language:"en"},o=void 0,l={unversionedId:"developer-guide/fe-idea-dev",id:"developer-guide/fe-idea-dev",title:"Setting Up dev env for FE - IntelliJ IDEA",description:"\x3c!--",source:"@site/community/developer-guide/fe-idea-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/fe-idea-dev",permalink:"/community/developer-guide/fe-idea-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"Setting Up dev env for FE - IntelliJ IDEA",language:"en"},sidebar:"community",previous:{title:"Setting FE dev env - Eclipse",permalink:"/community/developer-guide/fe-eclipse-dev"},next:{title:"FE development and debugging environment - Visual Studio Code (VSCode)",permalink:"/community/developer-guide/fe-vscode-dev"}},p={},s=[{value:"1. Environmental Preparation",id:"1-environmental-preparation",level:2},{value:"2. Debug",id:"2-debug",level:2},{value:"3. Custom FE configuration",id:"3-custom-fe-configuration",level:2},{value:"4. Setting Environment Variables",id:"4-setting-environment-variables",level:2},{value:"5. Config options",id:"5-config-options",level:2},{value:"6. Start FE",id:"6-start-fe",level:2}],g={toc:s},d="wrapper";function c(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,i.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"setting-up-development-environment-for-fe-using-intellij-idea"},"Setting Up Development Environment for FE using IntelliJ IDEA"),(0,a.yg)("h2",{id:"1-environmental-preparation"},"1. Environmental Preparation"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Git"),(0,a.yg)("li",{parentName:"ul"},"JDK1.8+"),(0,a.yg)("li",{parentName:"ul"},"IntelliJ IDEA"),(0,a.yg)("li",{parentName:"ul"},"Maven (Optional, IDEA shipped embedded Maven3)")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Git clone codebase from ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris.git"},"https://github.com/apache/doris.git"))),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Use IntelliJ IDEA to open the code root directory")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If you only develop fe without compiling thirdparty, you need to install thrift, and copy or connect thrift to the ",(0,a.yg)("inlineCode",{parentName:"p"},"thirdparty/installed/bin")," directory"),(0,a.yg)("p",{parentName:"li"},"Install ",(0,a.yg)("inlineCode",{parentName:"p"},"thrift 0.16.0")," (Note: ",(0,a.yg)("inlineCode",{parentName:"p"},"Doris")," 0.15 - 1.2 builds on ",(0,a.yg)("inlineCode",{parentName:"p"},"thrift 0.13.0"),", the latest code is built using ",(0,a.yg)("inlineCode",{parentName:"p"},"thrift 0.16.0"),")"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"The following examples use 0.16.0 as an example. If you need 0.13.0, please change 0.16.0 in the example below to 0.13.0. ")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Windows: "),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"Download: ",(0,a.yg)("inlineCode",{parentName:"li"},"http://archive.apache.org/dist/thrift/0.16.0/thrift-0.16.0.exe")),(0,a.yg)("li",{parentName:"ol"},"Copy: Copy the file to ",(0,a.yg)("inlineCode",{parentName:"li"},"./thirdparty/installed/bin")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"MacOS: "),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"brew tap homebrew/core --force"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"brew tap-new $USER/local-tap"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"brew extract --version='0.16.0' thrift $USER/local-tap"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"brew install thrift@0.16.0")),(0,a.yg)("p",{parentName:"li"},"If there is an error related to downloading, you can modify the following files:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"/usr/local/Homebrew/Library/Taps/$USER/homebrew-local-tap/Formula/thrift\\@0.16.0.rb")),(0,a.yg)("p",{parentName:"li"},"Modify:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},'url "https://www.apache.org/dyn/closer.lua?path=thrift/0.16.0/thrift-0.16.0.tar.gz"')),(0,a.yg)("p",{parentName:"li"},"To:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},'url "https://archive.apache.org/dist/thrift/0.16.0/thrift-0.16.0.tar.gz"')),(0,a.yg)("p",{parentName:"li"},"Reference: ",(0,a.yg)("inlineCode",{parentName:"p"},"https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c"))))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Linux:"),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Download source: ",(0,a.yg)("inlineCode",{parentName:"p"},"wget https://archive.apache.org/dist/thrift/0.16.0/thrift-0.16.0.tar.gz"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Install dependencies: ",(0,a.yg)("inlineCode",{parentName:"p"},"yum install -y autoconf automake libtool cmake ncurses-devel openssl-devel lzo-devel zlib-devel gcc gcc-c++"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"tar zxvf thrift-0.16.0.tar.gz"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"cd thrift-0.16.0"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"./configure --without-tests"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"make"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"make install")),(0,a.yg)("p",{parentName:"li"},"Validate thrift version: ",(0,a.yg)("inlineCode",{parentName:"p"},"thrift --version"),"  "),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"Note: If you have compiled Doris, you do not need to install thrift, you can directly use $DORIS_HOME/thirdparty/installed/bin/thrift"))))))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If it is a Mac or Linux environment, the code can be automatically generated by the following command:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"sh generated-source.sh\n")),(0,a.yg)("p",{parentName:"li"},"If version before 1.2, using:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"cd fe\nmvn generate-sources\n")),(0,a.yg)("p",{parentName:"li"},"Or:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"cd fe && mvn clean install -DskipTests\n")))),(0,a.yg)("p",null,"Or run the maven command through the graphical interface to generate:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(33990).A,width:"794",height:"790"})),(0,a.yg)("p",null,"If you are developing on the OS which lack of support to run ",(0,a.yg)("inlineCode",{parentName:"p"},"shell script")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"make")," such as Windows, a workround here\nis generate codes in Linux and copy them back. Using Docker should also be an option."),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If a help document has not been generated, go to the docs directory and run",(0,a.yg)("inlineCode",{parentName:"p"},"sh build_help_zip.sh"),"\uff0c"),(0,a.yg)("p",{parentName:"li"},"Then copy help-resource.zip from build to fe/fe-core/target/classes"))),(0,a.yg)("h2",{id:"2-debug"},"2. Debug"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Import ",(0,a.yg)("inlineCode",{parentName:"p"},"./fe")," into IDEA")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Follow the picture to create the folders (The directory may exist in the new version. If it exists, skip it, otherwise create it.)"))),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(4995).A,width:"1077",height:"879"})),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Build ",(0,a.yg)("inlineCode",{parentName:"li"},"ui")," project , and copy files from directory ",(0,a.yg)("inlineCode",{parentName:"li"},"ui/dist")," into directory ",(0,a.yg)("inlineCode",{parentName:"li"},"webroot")," ( you can skip this step , if you don't need ",(0,a.yg)("inlineCode",{parentName:"li"},"Doris")," UI )")),(0,a.yg)("h2",{id:"3-custom-fe-configuration"},"3. Custom FE configuration"),(0,a.yg)("p",null,"Copy below content into ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/fe.conf")," and tune it to fit your environment(Note: If developed using",(0,a.yg)("inlineCode",{parentName:"p"},"Mac"),", since",(0,a.yg)("inlineCode",{parentName:"p"},"docker for Mac"),"does not support",(0,a.yg)("inlineCode",{parentName:"p"},"Host"),"mode,",(0,a.yg)("inlineCode",{parentName:"p"},"be"),"needs to be exposed using",(0,a.yg)("inlineCode",{parentName:"p"},"-p")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf")," ",(0,a.yg)("inlineCode",{parentName:"p"},"priority_networks")," configured to be accessible within the container, such as WIFI Ip)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n#####################################################################\n## The uppercase properties are read and exported by bin/start_fe.sh.\n## To see all Frontend configurations,\n## see fe/src/org/apache/doris/common/Config.java\n#####################################################################\n\n# the output dir of stderr and stdout \nLOG_DIR = ${DORIS_HOME}/log\n\nDATE = `date +%Y%m%d-%H%M%S`\nJAVA_OPTS="-Xmx2048m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$DATE"\n\n# For jdk 9+, this JAVA_OPTS will be used as default JVM options\nJAVA_OPTS_FOR_JDK_9="-Xmx4096m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$DATE:time"\n\n##\n## the lowercase properties are read by main program.\n##\n\n# INFO, WARN, ERROR, FATAL\nsys_log_level = INFO\n\n# store metadata, create it if it is not exist.\n# Default value is ${DORIS_HOME}/doris-meta\n# meta_dir = ${DORIS_HOME}/doris-meta\n\nhttp_port = 8030\nrpc_port = 9020\nquery_port = 9030\narrow_flight_sql_port = -1\nedit_log_port = 9010\n\n# Choose one if there are more than one ip except loopback address. \n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/24\n# Default value is empty.\n# priority_networks = 10.10.10.0/24;192.168.0.0/16\n\n# Advanced configurations \n# log_roll_size_mb = 1024\n# sys_log_dir = ${DORIS_HOME}/log\n# sys_log_roll_num = 10\n# sys_log_verbose_modules = \n# audit_log_dir = ${DORIS_HOME}/log\n# audit_log_modules = slow_query, query\n# audit_log_roll_num = 10\n# meta_delay_toleration_second = 10\n# qe_max_connection = 1024\n# qe_query_timeout_second = 300\n# qe_slow_log_ms = 5000\n\n')),(0,a.yg)("h2",{id:"4-setting-environment-variables"},"4. Setting Environment Variables"),(0,a.yg)("p",null,"Follow the picture to set runtime Environment Variables in IDEA"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(87418).A,width:"2435",height:"1400"})),(0,a.yg)("h2",{id:"5-config-options"},"5. Config options"),(0,a.yg)("p",null,"Because part of the dependency is ",(0,a.yg)("inlineCode",{parentName:"p"},"provided"),", idea needs to do a special config. Click on the right ",(0,a.yg)("inlineCode",{parentName:"p"},"Modify Options")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Run/Debug Configurations")," setting. Check the ",(0,a.yg)("inlineCode",{parentName:"p"},'Add Dependencies with "Provided" scope to classpath')," option."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(97614).A,width:"1006",height:"964"})),(0,a.yg)("h2",{id:"6-start-fe"},"6. Start FE"),(0,a.yg)("p",null,"Having fun with Doris FE!"))}c.isMDXComponent=!0},4995:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/DEBUG4-7c5b94bf36d5b38026f522c90c4d964c.png"},87418:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/DEBUG5-48854eb83a0abb0802393856c6eaf770.png"},33990:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gen_code-eb0ee5102336c3ea5da6c7e9e481180b.png"},97614:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/idea_options-24ec83b18a96c669b6e525cc31bde067.png"}}]);