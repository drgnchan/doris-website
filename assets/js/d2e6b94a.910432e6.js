"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56502],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var i=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),m=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return i.createElement(c.Provider,{value:n},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=m(t),s=a,u=f["".concat(c,".").concat(s)]||f[s]||g[s]||o;return t?i.createElement(u,r(r({ref:n},p),{},{components:t})):i.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[f]="string"==typeof e?e:a,r[1]=l;for(var m=2;m<o;m++)r[m]=t[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},720231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=t(58168),a=(t(296540),t(15680));const o={title:"FE Configuration",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},r=void 0,l={unversionedId:"admin-manual/config/fe-config-template",id:"version-2.0/admin-manual/config/fe-config-template",title:"FE Configuration",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/config/fe-config-template.md",sourceDirName:"admin-manual/config",slug:"/admin-manual/config/fe-config-template",permalink:"/docs/2.0/admin-manual/config/fe-config-template",draft:!1,tags:[],version:"2.0",frontMatter:{title:"FE Configuration",language:"en",toc_min_heading_level:2,toc_max_heading_level:4}},c={},m=[{value:"Precautions",id:"precautions",level:2},{value:"View configuration items",id:"view-configuration-items",level:2},{value:"Set configuration items",id:"set-configuration-items",level:2},{value:"Examples",id:"examples",level:2},{value:"Configurations",id:"configurations",level:2}],p={toc:m},f="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(f,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"fe-configuration"},"FE Configuration"),(0,a.yg)("p",null,"This document mainly introduces the relevant configuration items of FE."),(0,a.yg)("p",null,"The FE configuration file ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf")," is usually stored in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/")," directory of the FE deployment path. In version 0.14, another configuration file ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," will be introduced. The configuration file is used to record the configuration items that are dynamically configured and persisted by the user during operation."),(0,a.yg)("p",null,"After the FE process is started, it will read the configuration items in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf")," first, and then read the configuration items in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_custom.conf"),". The configuration items in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," will overwrite the same configuration items in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf"),"."),(0,a.yg)("p",null,"The location of the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," file can be configured in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf")," through the ",(0,a.yg)("inlineCode",{parentName:"p"},"custom_config_dir")," configuration item."),(0,a.yg)("h2",{id:"precautions"},"Precautions"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1.")," For the purpose of simplifying the architecture, modifying the configuration through the mysql protocol will only modify the data in the local FE memory, and will not synchronize the changes to all FEs.\nFor Config items that only take effect on the Master FE, the modification request will be automatically forwarded to the Master FE."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2.")," Note that the option ",(0,a.yg)("inlineCode",{parentName:"p"},"forward_to_master")," will affect the display results of ",(0,a.yg)("inlineCode",{parentName:"p"},"admin show frontend config"),", if ",(0,a.yg)("inlineCode",{parentName:"p"},"forward_to_master=true"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"admin show frontend config")," shows the Config of Master FE (Even if you are connecting to a Follower FE currently), this may cause you to be unable to see the modification of the local FE configuration; if you expect show config of the FE you're connecting, then execute the command ",(0,a.yg)("inlineCode",{parentName:"p"},"set forward_to_master=false"),"."),(0,a.yg)("h2",{id:"view-configuration-items"},"View configuration items"),(0,a.yg)("p",null,"There are two ways to view the configuration items of FE:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"FE web page"),(0,a.yg)("p",{parentName:"li"},"Open the FE web page ",(0,a.yg)("inlineCode",{parentName:"p"},"http://fe_host:fe_http_port/Configure")," in the browser. You can see the currently effective FE configuration items in ",(0,a.yg)("inlineCode",{parentName:"p"},"Configure Info"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View by command"),(0,a.yg)("p",{parentName:"li"},"After the FE is started, you can view the configuration items of the FE in the MySQL client with the following command:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"ADMIN SHOW FRONTEND CONFIG;")),(0,a.yg)("p",{parentName:"li"},"The meanings of the columns in the results are as follows:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Key: the name of the configuration item."),(0,a.yg)("li",{parentName:"ul"},"Value: The value of the current configuration item."),(0,a.yg)("li",{parentName:"ul"},"Type: The configuration item value type, such as integer or string."),(0,a.yg)("li",{parentName:"ul"},"IsMutable: whether it can be dynamically configured. If true, the configuration item can be dynamically configured at runtime. If false, it means that the configuration item can only be configured in ",(0,a.yg)("inlineCode",{parentName:"li"},"fe.conf")," and takes effect after restarting FE."),(0,a.yg)("li",{parentName:"ul"},"MasterOnly: Whether it is a unique configuration item of Master FE node. If it is true, it means that the configuration item is meaningful only at the Master FE node, and is meaningless to other types of FE nodes. If false, it means that the configuration item is meaningful in all types of FE nodes."),(0,a.yg)("li",{parentName:"ul"},"Comment: The description of the configuration item.")))),(0,a.yg)("h2",{id:"set-configuration-items"},"Set configuration items"),(0,a.yg)("p",null,"There are two ways to configure FE configuration items:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Static configuration"),(0,a.yg)("p",{parentName:"li"},"Add and set configuration items in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/fe.conf")," file. The configuration items in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf")," will be read when the FE process starts. Configuration items not in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf")," will use default values.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Dynamic configuration via MySQL protocol"),(0,a.yg)("p",{parentName:"li"},"After the FE starts, you can set the configuration items dynamically through the following commands. This command requires administrator privilege."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},'ADMIN SET FRONTEND CONFIG (" fe_config_name "=" fe_config_value ");')),(0,a.yg)("p",{parentName:"li"},"Not all configuration items support dynamic configuration. You can check whether the dynamic configuration is supported by the ",(0,a.yg)("inlineCode",{parentName:"p"},"IsMutable")," column in the",(0,a.yg)("inlineCode",{parentName:"p"},"ADMIN SHOW FRONTEND CONFIG;"),"command result."),(0,a.yg)("p",{parentName:"li"},"If the configuration item of ",(0,a.yg)("inlineCode",{parentName:"p"},"MasterOnly")," is modified, the command will be directly forwarded to the Master FE and only the corresponding configuration item in the Master FE will be modified."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Configuration items modified in this way will become invalid after the FE process restarts.")),(0,a.yg)("p",{parentName:"li"},"For more help on this command, you can view it through the ",(0,a.yg)("inlineCode",{parentName:"p"},"HELP ADMIN SET CONFIG;")," command.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Dynamic configuration via HTTP protocol"),(0,a.yg)("p",{parentName:"li"},"For details, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.0/admin-manual/http-actions/fe/set-config-action"},"Set Config Action")),(0,a.yg)("p",{parentName:"li"},"This method can also persist the modified configuration items. The configuration items will be persisted in the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," file and will still take effect after FE is restarted."))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify ",(0,a.yg)("inlineCode",{parentName:"p"},"async_pending_load_task_pool_size")),(0,a.yg)("p",{parentName:"li"},"Through ",(0,a.yg)("inlineCode",{parentName:"p"},"ADMIN SHOW FRONTEND CONFIG;")," you can see that this configuration item cannot be dynamically configured (",(0,a.yg)("inlineCode",{parentName:"p"},"IsMutable")," is false). You need to add in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf"),":"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"async_pending_load_task_pool_size = 20")),(0,a.yg)("p",{parentName:"li"},"Then restart the FE process to take effect the configuration.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify ",(0,a.yg)("inlineCode",{parentName:"p"},"dynamic_partition_enable")),(0,a.yg)("p",{parentName:"li"},"Through ",(0,a.yg)("inlineCode",{parentName:"p"},"ADMIN SHOW FRONTEND CONFIG;")," you can see that the configuration item can be dynamically configured (",(0,a.yg)("inlineCode",{parentName:"p"},"IsMutable")," is true). And it is the unique configuration of Master FE. Then first we can connect to any FE and execute the following command to modify the configuration:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true"); `\n')),(0,a.yg)("p",{parentName:"li"},"Afterwards, you can view the modified value with the following command:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"set forward_to_master = true;\nADMIN SHOW FRONTEND CONFIG;\n")),(0,a.yg)("p",{parentName:"li"},"After modification in the above manner, if the Master FE restarts or a Master election is performed, the configuration will be invalid. You can add the configuration item directly in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf")," and restart the FE to make the configuration item permanent.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify ",(0,a.yg)("inlineCode",{parentName:"p"},"max_distribution_pruner_recursion_depth")),(0,a.yg)("p",{parentName:"li"},"Through ",(0,a.yg)("inlineCode",{parentName:"p"},"ADMIN SHOW FRONTEND CONFIG;")," you can see that the configuration item can be dynamically configured (",(0,a.yg)("inlineCode",{parentName:"p"},"IsMutable")," is true). It is not unique to Master FE."),(0,a.yg)("p",{parentName:"li"},"Similarly, we can modify the configuration by dynamically modifying the configuration command. Because this configuration is not unique to the Master FE, user need to connect to different FEs separately to modify the configuration dynamically, so that all FEs use the modified configuration values."))),(0,a.yg)("h2",{id:"configurations"},"Configurations"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note:"),(0,a.yg)("p",{parentName:"blockquote"},"The following content is automatically generated by ",(0,a.yg)("inlineCode",{parentName:"p"},"docs/generate-config-and-variable-doc.sh"),"."),(0,a.yg)("p",{parentName:"blockquote"},"If you need to modify, please modify the description information in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/fe-common/src/main/java/org/apache/doris/common/Config.java"),".")),(0,a.yg)("p",null,"<--DOC_PLACEHOLDER--\x3e"))}g.isMDXComponent=!0}}]);