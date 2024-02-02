"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[97828],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>f});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={title:"FQDN",language:"en"},l=void 0,i={unversionedId:"admin-manual/cluster-management/fqdn",id:"version-2.0/admin-manual/cluster-management/fqdn",title:"FQDN",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/cluster-management/fqdn.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/fqdn",permalink:"/docs/admin-manual/cluster-management/fqdn",draft:!1,tags:[],version:"2.0",frontMatter:{title:"FQDN",language:"en"},sidebar:"docs",previous:{title:"load balancing",permalink:"/docs/admin-manual/cluster-management/load-balancing"},next:{title:"Data Backup",permalink:"/docs/admin-manual/data-admin/backup"}},s={},c=[{value:"Preconditions",id:"preconditions",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Enable FQDN for new cluster",id:"enable-fqdn-for-new-cluster",level:3},{value:"Deployment of Doris for K8S",id:"deployment-of-doris-for-k8s",level:3},{value:"Server change IP",id:"server-change-ip",level:3},{value:"Enable FQDN for old cluster",id:"enable-fqdn-for-old-cluster",level:3},{value:"Common problem",id:"common-problem",level:2}],d={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"fqdn"},"FQDN"),(0,o.yg)("version",{since:"dev"}),(0,o.yg)("p",null,"This article introduces how to enable the use of Apache Doris based on FQDN (Fully Qualified Domain Name). FQDN is the complete domain name of a specific computer or host on the Internet."),(0,o.yg)("p",null,'After Doris supports FQDN, communication between nodes is entirely based on FQDN. When adding various types of nodes, the FQDN should be directly specified. For example, the command to add a BE node is\' ALTER SYSTEM ADD BACKEND "be_host:heartbeat_service_port",'),(0,o.yg)("p",null,"'be_host' was previously the IP address of the BE node. After starting the FQDN, be_host should specify the FQDN of the BE node."),(0,o.yg)("h2",{id:"preconditions"},"Preconditions"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"fe.conf file set ",(0,o.yg)("inlineCode",{parentName:"li"},"enable_fqdn_mode = true"),"."),(0,o.yg)("li",{parentName:"ol"},"All machines in the cluster must be configured with a host name."),(0,o.yg)("li",{parentName:"ol"},"The IP address and FQDN corresponding to other machines in the cluster must be specified in the '/etc/hosts' file for each machine in the cluster."),(0,o.yg)("li",{parentName:"ol"},"/The etc/hosts file cannot have duplicate IP addresses.")),(0,o.yg)("h2",{id:"best-practices"},"Best Practices"),(0,o.yg)("h3",{id:"enable-fqdn-for-new-cluster"},"Enable FQDN for new cluster"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Prepare machines, for example, if you want to deploy a cluster of 3FE 3BE, you can prepare 6 machines."),(0,o.yg)("li",{parentName:"ol"},"Each machine returns unique results when executing 'host'. Assuming that the execution results of six machines are fe1, fe2, fe3, be1, be2, and be3, respectively."),(0,o.yg)("li",{parentName:"ol"},"Configure the real IPs corresponding to 6 FQDNs in the '/etc/hosts' of 6 machines, for example:",(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"172.22.0.1 fe1\n172.22.0.2 fe2\n172.22.0.3 fe3\n172.22.0.4 be1\n172.22.0.5 be2\n172.22.0.6 be3\n"))),(0,o.yg)("li",{parentName:"ol"},"Verification: It can 'ping fe2' on FE1, and can resolve the correct IP address and ping it, indicating that the network environment is available."),(0,o.yg)("li",{parentName:"ol"},"fe.conf settings for each FE node ",(0,o.yg)("inlineCode",{parentName:"li"}," enable_ fqdn_ mode = true"),"."),(0,o.yg)("li",{parentName:"ol"},"Refer to",(0,o.yg)("a",{parentName:"li",href:"/docs/install/standard-deployment"},"Standard deployment")),(0,o.yg)("li",{parentName:"ol"},"Select several machines to deploy broker on six machines as needed, and execute ",(0,o.yg)("inlineCode",{parentName:"li"},'ALTER SYSTEM ADD BROKER broker_name "fe1:8000","be1:8000",...;'),".")),(0,o.yg)("h3",{id:"deployment-of-doris-for-k8s"},"Deployment of Doris for K8S"),(0,o.yg)("p",null,"After an unexpected restart of the Pod, K8s cannot guarantee that the Pod's IP will not change, but it can ensure that the domain name remains unchanged. Based on this feature, when Doris enables FQDN, it can ensure that the Pod can still provide services normally after an unexpected restart."),(0,o.yg)("p",null,"Please refer to the method for deploying Doris in K8s",(0,o.yg)("a",{parentName:"p",href:"/docs/install/k8s-deploy/operator-deploy"},"Kubernetes Deployment")),(0,o.yg)("h3",{id:"server-change-ip"},"Server change IP"),(0,o.yg)("p",null,"After deploying the cluster according to 'Enable FQDN for new cluster', if you want to change the IP of the machine, whether it is switching network cards or replacing the machine, you only need to change the '/etc/hosts' of each machine."),(0,o.yg)("h3",{id:"enable-fqdn-for-old-cluster"},"Enable FQDN for old cluster"),(0,o.yg)("p",null,"Precondition: The current program supports the syntax 'Alter SYSTEM MODIFY FRONTEND'<fe_ip>:<edit_log_port>'HOSTNAME'<fe_hostname>',\nIf not, upgrade to a version that supports the syntax"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note that."),(0,o.yg)("p",{parentName:"blockquote"},"At least three followers are required to perform the following operations, otherwise the cluster may not start properly")),(0,o.yg)("p",null,"Next, follow the steps below:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Perform the following operations on the Follower and Observer nodes one by one (and finally on the Master node):"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"Stop the node."),(0,o.yg)("li",{parentName:"ol"},"Check if the node has stopped. Execute 'show frontends' through the MySQL client to view the Alive status of the FE node until it becomes false"),(0,o.yg)("li",{parentName:"ol"},"set FQDN for node: ",(0,o.yg)("inlineCode",{parentName:"li"},'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"'),"(After stopping the master, a new master node will be selected and used to execute SQL statements)"),(0,o.yg)("li",{parentName:"ol"},"Modify node configuration. Modify the 'conf/fe. conf' file in the FE root directory and add the configuration: ",(0,o.yg)("inlineCode",{parentName:"li"},"enable_fqdn_mode = true")),(0,o.yg)("li",{parentName:"ol"},"Start the node."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Enabling FQDN for BE nodes only requires executing the following commands through MySQL, and there is no need to restart BE."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM MODIFY BACKEND "<backend_ip>:<backend_port>" HOSTNAME "<be_hostname>"')))),(0,o.yg)("h2",{id:"common-problem"},"Common problem"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Configuration item enable",(0,o.yg)("em",{parentName:"p"}," fqdn")," Can the mode be changed freely?"),(0,o.yg)("p",{parentName:"li"},"Cannot be changed arbitrarily. To change this configuration, follow the 'Enable FQDN for old cluster' procedure."))))}m.isMDXComponent=!0}}]);