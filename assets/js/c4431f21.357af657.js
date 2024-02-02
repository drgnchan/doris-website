"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7412],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>g});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(45072),o=(r(11504),r(95788));const i={title:"Automated Service Startup",language:"en"},a=void 0,s={unversionedId:"admin-manual/maint-monitor/automatic-service-start",id:"version-2.0/admin-manual/maint-monitor/automatic-service-start",title:"Automated Service Startup",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/maint-monitor/automatic-service-start.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/automatic-service-start",permalink:"/docs/admin-manual/maint-monitor/automatic-service-start",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Automated Service Startup",language:"en"},sidebar:"docs",previous:{title:"Metadata Operations and Maintenance",permalink:"/docs/admin-manual/maint-monitor/metadata-operation"},next:{title:"Memory Tracker",permalink:"/docs/admin-manual/maint-monitor/memory-management/memory-tracker"}},l={},p=[{value:"Systemd Configures the Doris service",id:"systemd-configures-the-doris-service",level:2},{value:"sudo permission control",id:"sudo-permission-control",level:3},{value:"Configuration procedure",id:"configuration-procedure",level:3},{value:"Matters needing attention",id:"matters-needing-attention",level:4},{value:"Matters needing attention",id:"matters-needing-attention-1",level:4},{value:"Supervisor configures the Doris service",id:"supervisor-configures-the-doris-service",level:2},{value:"Configuration procedure",id:"configuration-procedure-1",level:3},{value:"Matters needing attention:",id:"matters-needing-attention-2",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"automatic-service-start"},"Automatic service start"),(0,o.yg)("p",null,"This document describes how to configure the automatic pull-up of the Doris cluster to ensure that services are not pulled up in time after service breaks down due to special circumstances in the production environment."),(0,o.yg)("p",null,"The automatic pull-up service of FE and BE must be configured after the Doris cluster is completely set up."),(0,o.yg)("h2",{id:"systemd-configures-the-doris-service"},"Systemd Configures the Doris service"),(0,o.yg)("p",null,"For details about systemd usage and parameter parsing, see ",(0,o.yg)("a",{parentName:"p",href:"https://systemd.io/"},"here")," "),(0,o.yg)("h3",{id:"sudo-permission-control"},"sudo permission control"),(0,o.yg)("p",null,"sudo permissions are required to control the doris service using systemd. To ensure the minimum granularity of sudo permission assignment, you can assign the systemd control permission of doris-fe and doris-be services to specified non-root users. Configure the systemctl management permission for doris-fe and doris-be in visudo."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Cmnd_Alias DORISCTL=/usr/bin/systemctl start doris-fe,/usr/bin/systemctl stop doris-fe,/usr/bin/systemctl start doris-be,/usr/bin/systemctl stop doris-be\n\n## Allow root to run any commands anywhere\nroot    ALL=(ALL)       ALL\ndoris   ALL=(ALL)       NOPASSWD:DORISCTL\n")),(0,o.yg)("h3",{id:"configuration-procedure"},"Configuration procedure"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},'You should config the "JAVA_HOME" variable in the config file, both fe.conf and be.conf, or you can\'t use the command "systemctl start" to start doris'),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'echo "JAVA_HOME=your_java_home" >> /home/doris/fe/conf/fe.conf\necho "JAVA_HOME=your_java_home" >> /home/doris/be/conf/be.conf\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download the doris-fe.service file: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/tools/systemd/doris-fe.service"},"doris-fe.service"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The details of doris-fe.service are as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n[Unit]\nDescription=Doris FE\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=forking\nUser=root\nGroup=root\nLimitCORE=infinity\nLimitNOFILE=200000\nRestart=on-failure\nRestartSec=30\nStartLimitInterval=120\nStartLimitBurst=3\nKillMode=none\nExecStart=/home/doris/fe/bin/start_fe.sh --daemon \nExecStop=/home/doris/fe/bin/stop_fe.sh\n\n[Install]\nWantedBy=multi-user.target\n')))),(0,o.yg)("h4",{id:"matters-needing-attention"},"Matters needing attention"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"ExecStart and ExecStop are configured based on actual fe paths")),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download the doris-be.service file : ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/tools/systemd/doris-be.service"},"doris-be.service"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The details of doris-be.service are as follows: "),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n[Unit]\nDescription=Doris BE\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=forking\nUser=root\nGroup=root\nLimitCORE=infinity\nLimitNOFILE=200000\nRestart=on-failure\nRestartSec=30\nStartLimitInterval=120\nStartLimitBurst=3\nKillMode=none\nExecStart=/home/doris/be/bin/start_be.sh --daemon\nExecStop=/home/doris/be/bin/stop_be.sh\n\n[Install]\nWantedBy=multi-user.target\n')))),(0,o.yg)("h4",{id:"matters-needing-attention-1"},"Matters needing attention"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"ExecStart and ExecStop are configured based on actual be paths")),(0,o.yg)("ol",{start:6},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Service configuration"),(0,o.yg)("p",{parentName:"li"},"Place doris-fe.service and doris-be.service in the /usr/lib/systemd/system directory")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set self-start"),(0,o.yg)("p",{parentName:"li"},"After you add or modify the configuration file, you need to reload it"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"systemctl daemon-reload\n")),(0,o.yg)("p",{parentName:"li"},"Set the start, the essence is in the/etc/systemd/system/multi - user. Target. Wants/add service file link"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"systemctl enable doris-fe\nsystemctl enable doris-be\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Service initiation"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"systemctl start doris-fe\nsystemctl start doris-be\n")))),(0,o.yg)("h2",{id:"supervisor-configures-the-doris-service"},"Supervisor configures the Doris service"),(0,o.yg)("p",null,"Supervisor Specific use and parameter analysis can be referred to ",(0,o.yg)("a",{parentName:"p",href:"http://supervisord.org/"},"here")),(0,o.yg)("p",null,"Supervisor configuration automatically pulls up the supervisor configuration. You can install the supervisor directly using the yum command or manually using pip. The pip manual installation process is complicated, and only the yum deployment mode is displayed.Manual deployment refer to ","[here]"," (",(0,o.yg)("a",{parentName:"p",href:"http://supervisord.org/installing.html"},"http://supervisord.org/installing.html"),") for installation deployment."),(0,o.yg)("h3",{id:"configuration-procedure-1"},"Configuration procedure"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"yum Install supervisor"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"yum install epel-release\nyum install -y supervisor\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Start the service and view the status"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"systemctl enable supervisord # bootstrap\nsystemctl start supervisord # Start the supervisord service\nsystemctl status supervisord # Check the supervisord service status\nps -ef|grep supervisord # Check whether the supervisord process exists\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure BE process management"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'Modify the start_be.sh script remove the last symbol &\n\nvim /path/doris/be/bin/start_be.sh\nTake this code : nohup $LIMIT ${DORIS_HOME}/lib/palo_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null &\nBe changed to : nohup $LIMIT ${DORIS_HOME}/lib/palo_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null\n')),(0,o.yg)("p",{parentName:"li"},"Create a supervisor process management configuration file for the BE"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"vim /etc/supervisord.d/doris-be.ini\n\n[program:doris_be]      \nprocess_name=%(program_name)s      \ndirectory=/path/doris/be/be\ncommand=sh /path/doris/be/bin/start_be.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=5\n#redirect_stderr = true\n#stdout_logfile_maxbytes = 20MB\n#stdout_logfile_backups = 10\n#stdout_logfile=/var/log/supervisor-palo_be.log\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure FE process management"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'Modify the start_fe.sh script remove the last symbol &\n\nvim /path/doris/fe/bin/start_fe.sh \nTake this code : nohup $LIMIT $JAVA $final_java_opt org.apache.doris.PaloFe ${HELPER} "$@" >> $LOG_DIR/fe.out 2>&1 </dev/null &\nBe changed to : nohup $LIMIT $JAVA $final_java_opt org.apache.doris.PaloFe ${HELPER} "$@" >> $LOG_DIR/fe.out 2>&1 </dev/null\n')),(0,o.yg)("p",{parentName:"li"},"Create a supervisor process management configuration file for FE"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'vim /etc/supervisord.d/doris-fe.ini\n\n[program:PaloFe]\nenvironment = JAVA_HOME="/usr/local/java"\nprocess_name=PaloFe\ndirectory=/path/doris/fe\ncommand=sh /path/doris/fe/bin/start_fe.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=10\n#redirect_stderr=true\n#stdout_logfile_maxbytes=20MB\n#stdout_logfile_backups=10\n#stdout_logfile=/var/log/supervisor-PaloFe.log\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure Broker process management"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'Modify the start_broker.sh script remove the last symbol &\n\nvim /path/apache_hdfs_broker/bin/start_broker.sh\nTake this code : nohup $LIMIT $JAVA $JAVA_OPTS org.apache.doris.broker.hdfs.BrokerBootstrap "$@" >> $BROKER_LOG_DIR/apache_hdfs_broker.out 2>&1 </dev/null &\nBe changed to : nohup $LIMIT $JAVA $JAVA_OPTS org.apache.doris.broker.hdfs.BrokerBootstrap "$@" >> $BROKER_LOG_DIR/apache_hdfs_broker.out 2>&1 </dev/null\n')),(0,o.yg)("p",{parentName:"li"},"Create the supervisor process management profile for the Broker"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'vim /etc/supervisord.d/doris-broker.ini\n\n[program:BrokerBootstrap]\nenvironment = JAVA_HOME="/usr/local/java"\nprocess_name=%(program_name)s\ndirectory=/path/apache_hdfs_broker\ncommand=sh /path/apache_hdfs_broker/bin/start_broker.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=5\n#redirect_stderr=true\n#stdout_logfile_maxbytes=20MB\n#stdout_logfile_backups=10\n#stdout_logfile=/var/log/supervisor-BrokerBootstrap.log\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"First determine whether the Doris service is stopped, then use supervisor to automatically pull up Doris, and then determine whether the process starts normally"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"supervisorctl reload # Reload all the Supervisor configuration files\nsupervisorctl status # Check the supervisor status and verify that the Doris service process starts normally\n\n\u5176\u4ed6\u547d\u4ee4 : \nsupervisorctl start all # supervisorctl start It is capable of opening processes\nsupervisorctl stop doris-be # The process is supervisorctl stop\n")))),(0,o.yg)("h4",{id:"matters-needing-attention-2"},"Matters needing attention:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the supervisor installed using yum starts, an error occurs:  pkg_resources.DistributionNotFound: The 'supervisor==3.4.0' distribution was not found")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"supervisor installed directly using the yum command only supports python2,Therefore, the file contents in /usr/bin/supervisorctl and /usr/bin/supervisorctl should be changed at the beginning Change #! /usr/bin/python to #! /usr/bin/python2, python2 must be installed\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the supervisor is configured to automatically pull up the Doris process, if the BE node breaks down due to abnormal factors on Doris, the error stack information that should be output to be.out will be intercepted by the supervisor. We need to look it up in supervisor's log for further analysis.")))}d.isMDXComponent=!0}}]);