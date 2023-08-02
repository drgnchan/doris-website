"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(n),c=l,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={title:"\u5feb\u901f\u5f00\u59cb",language:"zh-CN"},o=void 0,i={unversionedId:"get-starting/quick-start",id:"get-starting/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/get-starting/quick-start.md",sourceDirName:"get-starting",slug:"/get-starting/quick-start",permalink:"/zh-CN/docs/dev/get-starting/quick-start",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",language:"zh-CN"},sidebar:"docs",next:{title:"Doris \u4ecb\u7ecd",permalink:"/zh-CN/docs/dev/get-starting/what-is-apache-doris"}},p={},s=[{value:"\u4e0b\u8f7d Doris",id:"\u4e0b\u8f7d-doris",level:2},{value:"\u914d\u7f6e Doris",id:"\u914d\u7f6e-doris",level:2},{value:"\u914d\u7f6e FE",id:"\u914d\u7f6e-fe",level:3},{value:"\u542f\u52a8 FE",id:"\u542f\u52a8-fe",level:3},{value:"\u67e5\u770b FE \u8fd0\u884c\u72b6\u6001",id:"\u67e5\u770b-fe-\u8fd0\u884c\u72b6\u6001",level:4},{value:"\u8fde\u63a5 FE",id:"\u8fde\u63a5-fe",level:4},{value:"\u52a0\u5bc6\u8fde\u63a5 FE",id:"\u52a0\u5bc6\u8fde\u63a5-fe",level:4},{value:"\u505c\u6b62 FE \u8282\u70b9",id:"\u505c\u6b62-fe-\u8282\u70b9",level:4},{value:"\u914d\u7f6e BE",id:"\u914d\u7f6e-be",level:3},{value:"\u542f\u52a8 BE",id:"\u542f\u52a8-be",level:3},{value:"\u6dfb\u52a0 BE \u8282\u70b9\u5230\u96c6\u7fa4",id:"\u6dfb\u52a0-be-\u8282\u70b9\u5230\u96c6\u7fa4",level:4},{value:"\u67e5\u770b BE \u8fd0\u884c\u72b6\u6001",id:"\u67e5\u770b-be-\u8fd0\u884c\u72b6\u6001",level:4},{value:"\u505c\u6b62 BE \u8282\u70b9",id:"\u505c\u6b62-be-\u8282\u70b9",level:4},{value:"\u521b\u5efa\u6570\u636e\u8868",id:"\u521b\u5efa\u6570\u636e\u8868",level:2},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:2}],u={toc:s},k="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(k,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("p",null,"Apache Doris \u662f\u4e00\u4e2a\u57fa\u4e8e MPP \u67b6\u6784\u7684\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u7684\u5206\u6790\u578b\u6570\u636e\u5e93\uff0c\u4ee5\u6781\u901f\u6613\u7528\u7684\u7279\u70b9\u88ab\u4eba\u4eec\u6240\u719f\u77e5\uff0c\u4ec5\u9700\u4e9a\u79d2\u7ea7\u54cd\u5e94\u65f6\u95f4\u5373\u53ef\u8fd4\u56de\u6d77\u91cf\u6570\u636e\u4e0b\u7684\u67e5\u8be2\u7ed3\u679c\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u652f\u6301\u9ad8\u5e76\u53d1\u7684\u70b9\u67e5\u8be2\u573a\u666f\uff0c\u4e5f\u80fd\u652f\u6301\u9ad8\u541e\u5410\u7684\u590d\u6742\u5206\u6790\u573a\u666f\uff0c\u8fd9\u4e2a\u7b80\u77ed\u7684\u6307\u5357\u5c06\u544a\u8bc9\u4f60\u5982\u4f55\u4e0b\u8f7d Doris \u6700\u65b0\u7a33\u5b9a\u7248\u672c\uff0c\u5728\u5355\u8282\u70b9\u4e0a\u5b89\u88c5\u5e76\u8fd0\u884c\u5b83\uff0c\u5305\u62ec\u521b\u5efa\u6570\u636e\u5e93\u3001\u6570\u636e\u8868\u3001\u5bfc\u5165\u6570\u636e\u53ca\u67e5\u8be2\u7b49\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d-doris"},"\u4e0b\u8f7d Doris"),(0,l.kt)("p",null,"Doris \u8fd0\u884c\u5728 Linux \u73af\u5883\u4e2d\uff0c\u63a8\u8350 CentOS 7.x \u6216\u8005 Ubuntu 16.04 \u4ee5\u4e0a\u7248\u672c\uff0c\u540c\u65f6\u4f60\u9700\u8981\u5b89\u88c5 Java \u8fd0\u884c\u73af\u5883\uff08JDK\u7248\u672c\u8981\u6c42\u4e3a8\uff09\uff0c\u8981\u68c0\u67e5\u4f60\u6240\u5b89\u88c5\u7684 Java \u7248\u672c\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"java -version\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/download"},"\u4e0b\u8f7d Doris \u7684\u6700\u65b0\u4e8c\u8fdb\u5236\u7248\u672c"),"\uff0c\u7136\u540e\u89e3\u538b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tar xf apache-doris-x.x.x.tar.xz\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e-doris"},"\u914d\u7f6e Doris"),(0,l.kt)("h3",{id:"\u914d\u7f6e-fe"},"\u914d\u7f6e FE"),(0,l.kt)("p",null,"\u6211\u4eec\u8fdb\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-doris-x.x.x/fe")," \u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd apache-doris-x.x.x/fe\n")),(0,l.kt)("p",null,"\u4fee\u6539 FE \u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/fe.conf")," \uff0c\u8fd9\u91cc\u6211\u4eec\u4e3b\u8981\u4fee\u6539\u4e24\u4e2a\u53c2\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"priority_networks")," \u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"meta_dir")," \uff0c\u5982\u679c\u4f60\u9700\u8981\u66f4\u591a\u4f18\u5316\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/config/fe-config"},"FE \u53c2\u6570\u914d\u7f6e"),"\u8bf4\u660e\uff0c\u8fdb\u884c\u8c03\u6574\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 priority_networks \u53c2\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"priority_networks=172.23.16.0/24\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u53c2\u6570\u6211\u4eec\u5728\u5b89\u88c5\u7684\u65f6\u5019\u662f\u5fc5\u987b\u8981\u914d\u7f6e\u7684\uff0c\u7279\u522b\u662f\u5f53\u4e00\u53f0\u673a\u5668\u62e5\u6709\u591a\u4e2aIP\u5730\u5740\u7684\u65f6\u5019\uff0c\u6211\u4eec\u8981\u4e3a FE \u6307\u5b9a\u552f\u4e00\u7684IP\u5730\u5740\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u5047\u8bbe\u4f60\u7684\u8282\u70b9 IP \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"172.23.16.32"),"\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u63a9\u7801\u7684\u65b9\u5f0f\u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"172.23.16.0/24"),"\u3002")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5143\u6570\u636e\u76ee\u5f55")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"meta_dir=/path/your/doris-meta\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u4f60\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u662f\u5728\u4f60\u7684Doris FE \u5b89\u88c5\u76ee\u5f55\u4e0b\u7684 doris-meta\uff0c"),(0,l.kt)("p",{parentName:"blockquote"},"\u5355\u72ec\u914d\u7f6e\u5143\u6570\u636e\u76ee\u5f55\uff0c\u9700\u8981\u4f60\u63d0\u524d\u521b\u5efa\u597d\u4f60\u6307\u5b9a\u7684\u76ee\u5f55")),(0,l.kt)("h3",{id:"\u542f\u52a8-fe"},"\u542f\u52a8 FE"),(0,l.kt)("p",null,"\u5728 FE \u5b89\u88c5\u76ee\u5f55\u4e0b\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u6765\u5b8c\u6210 FE \u7684\u542f\u52a8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./bin/start_fe.sh --daemon\n")),(0,l.kt)("h4",{id:"\u67e5\u770b-fe-\u8fd0\u884c\u72b6\u6001"},"\u67e5\u770b FE \u8fd0\u884c\u72b6\u6001"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u68c0\u67e5 Doris \u662f\u5426\u542f\u52a8\u6210\u529f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl http://127.0.0.1:8030/api/bootstrap\n")),(0,l.kt)("p",null,"\u8fd9\u91cc IP \u548c \u7aef\u53e3\u5206\u522b\u662f FE \u7684 IP \u548c http_port\uff08\u9ed8\u8ba48030\uff09\uff0c\u5982\u679c\u662f\u4f60\u5728 FE \u8282\u70b9\u6267\u884c\uff0c\u76f4\u63a5\u8fd0\u884c\u4e0a\u9762\u7684\u547d\u4ee4\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e2d\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},'"msg":"success"')," \u5b57\u6837\uff0c\u5219\u8bf4\u660e\u542f\u52a8\u6210\u529f\u3002"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 Doris FE \u63d0\u4f9b\u7684Web UI \u6765\u68c0\u67e5\uff0c\u5728\u6d4f\u89c8\u5668\u91cc\u8f93\u5165\u5730\u5740"),(0,l.kt)("p",null,"http:// fe_ip:8030"),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4e0b\u9762\u7684\u754c\u9762\uff0c\u8bf4\u660e FE \u542f\u52a8\u6210\u529f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220822091951739",src:n(77932).Z,width:"3022",height:"1666"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 Doris \u5185\u7f6e\u7684\u9ed8\u8ba4\u7528\u6237 root \u8fdb\u884c\u767b\u5f55\uff0c\u5bc6\u7801\u662f\u7a7a"),(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u662f\u4e00\u4e2a Doris \u7684\u7ba1\u7406\u754c\u9762\uff0c\u53ea\u80fd\u62e5\u6709\u7ba1\u7406\u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u767b\u5f55\uff0c\u666e\u901a\u7528\u6237\u4e0d\u80fd\u767b\u5f55\u3002"))),(0,l.kt)("h4",{id:"\u8fde\u63a5-fe"},"\u8fde\u63a5 FE"),(0,l.kt)("p",null,"\u6211\u4eec\u4e0b\u9762\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u6765\u8fde\u63a5 Doris FE\uff0c\u4e0b\u8f7d\u514d\u5b89\u88c5\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://doris-build-hk.oss-cn-hongkong.aliyuncs.com/mysql-client/mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz"},"MySQL \u5ba2\u6237\u7aef")),(0,l.kt)("p",null,"\u89e3\u538b\u521a\u624d\u4e0b\u8f7d\u7684 MySQL \u5ba2\u6237\u7aef\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"bin/")," \u76ee\u5f55\u4e0b\u53ef\u4ee5\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\u7136\u540e\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u8fde\u63a5 Doris\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql -uroot -P9030 -h127.0.0.1\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u4f7f\u7528\u7684 root \u7528\u6237\u662f doris \u5185\u7f6e\u7684\u9ed8\u8ba4\u7528\u6237\uff0c\u4e5f\u662f\u8d85\u7ea7\u7ba1\u7406\u5458\u7528\u6237\uff0c\u5177\u4f53\u7684\u7528\u6237\u6743\u9650\u67e5\u770b ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/admin-manual/privilege-ldap/user-privilege"},"\u6743\u9650\u7ba1\u7406")),(0,l.kt)("li",{parentName:"ol"},"-P \uff1a\u8fd9\u91cc\u662f\u6211\u4eec\u8fde\u63a5 Doris \u7684\u67e5\u8be2\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f 9030\uff0c\u5bf9\u5e94\u7684\u662ffe.conf\u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"query_port")),(0,l.kt)("li",{parentName:"ol"},"-h \uff1a \u8fd9\u91cc\u662f\u6211\u4eec\u8fde\u63a5\u7684 FE IP\u5730\u5740\uff0c\u5982\u679c\u4f60\u7684\u5ba2\u6237\u7aef\u548c FE \u5b89\u88c5\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u4f7f\u7528127.0.0.1\u3002"))),(0,l.kt)("p",null,"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u770b FE \u8fd0\u884c\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show frontends\\G;\n")),(0,l.kt)("p",null,"\u7136\u540e\u4f60\u53ef\u4ee5\u770b\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show frontends\\G\n*************************** 1. row ***************************\n             Name: 172.21.32.5_9010_1660549353220\n               IP: 172.21.32.5\n      EditLogPort: 9010\n         HttpPort: 8030\n        QueryPort: 9030\n          RpcPort: 9020\n             Role: FOLLOWER\n         IsMaster: true\n        ClusterId: 1685821635\n             Join: true\n            Alive: true\nReplayedJournalId: 49292\n    LastHeartbeat: 2022-08-17 13:00:45\n         IsHelper: true\n           ErrMsg:\n          Version: 1.1.2-rc03-ca55ac2\n CurrentConnected: Yes\n1 row in set (0.03 sec)\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c IsMaster\u3001Join \u548c Alive \u4e09\u5217\u5747\u4e3atrue\uff0c\u5219\u8868\u793a\u8282\u70b9\u6b63\u5e38\u3002")),(0,l.kt)("h4",{id:"\u52a0\u5bc6\u8fde\u63a5-fe"},"\u52a0\u5bc6\u8fde\u63a5 FE"),(0,l.kt)("p",null,"Doris\u652f\u6301\u57fa\u4e8eSSL\u7684\u52a0\u5bc6\u8fde\u63a5\uff0c\u5f53\u524d\u652f\u6301TLS1.2\uff0cTLS1.3\u534f\u8bae\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u914d\u7f6e\u5f00\u542fDoris\u7684SSL\u6a21\u5f0f\uff1a\n\u4fee\u6539FE\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"conf/fe.conf"),"\uff0c\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"enable_ssl = true"),"\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"mysql"),"\u5ba2\u6237\u7aef\u8fde\u63a5Doris\uff0cmysql\u652f\u6301\u4e94\u79cdSSL\u6a21\u5f0f\uff1a"),(0,l.kt)("p",null,"1.",(0,l.kt)("inlineCode",{parentName:"p"},"mysql -uroot -P9030 -h127.0.0.1"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"mysql --ssl-mode=PREFERRED -uroot -P9030 -h127.0.0.1"),"\u4e00\u6837\uff0c\u90fd\u662f\u4e00\u5f00\u59cb\u8bd5\u56fe\u5efa\u7acbSSL\u52a0\u5bc6\u8fde\u63a5\uff0c\u5982\u679c\u5931\u8d25\uff0c\u5219\u5c1d\u8bd5\u4f7f\u7528\u666e\u901a\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"2.",(0,l.kt)("inlineCode",{parentName:"p"},"mysql --ssl-mode=DISABLE -uroot -P9030 -h127.0.0.1"),"\uff0c\u4e0d\u4f7f\u7528SSL\u52a0\u5bc6\u8fde\u63a5\uff0c\u76f4\u63a5\u4f7f\u7528\u666e\u901a\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"3.",(0,l.kt)("inlineCode",{parentName:"p"},"mysql --ssl-mode=REQUIRED -uroot -P9030 -h127.0.0.1"),"\uff0c\u5f3a\u5236\u4f7f\u7528SSL\u52a0\u5bc6\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"4.",(0,l.kt)("inlineCode",{parentName:"p"},"mysql --ssl-mode=VERIFY_CA --ssl-ca=ca.pem -uroot -P9030 -h127.0.0.1"),"\uff0c\u5f3a\u5236\u4f7f\u7528SSL\u52a0\u5bc6\u8fde\u63a5\uff0c\u5e76\u4e14\u901a\u8fc7\u6307\u5b9aCA\u8bc1\u4e66\u9a8c\u8bc1\u670d\u52a1\u7aef\u8eab\u4efd\u662f\u5426\u6709\u6548\u3002"),(0,l.kt)("p",null,"5.",(0,l.kt)("inlineCode",{parentName:"p"},"mysql --ssl-mode=VERIFY_CA --ssl-ca=ca.pem --ssl-cert=client-cert.pem --ssl-key=client-key.pem -uroot -P9030 -h127.0.0.1"),"\uff0c\u5f3a\u5236\u4f7f\u7528SSL\u52a0\u5bc6\u8fde\u63a5\uff0c\u53cc\u5411\u9a8c\u8bc1\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n",(0,l.kt)("inlineCode",{parentName:"p"},"--ssl-mode"),"\u53c2\u6570\u662fmysql5.7.11\u7248\u672c\u5f15\u5165\u7684\uff0c\u4f4e\u4e8e\u6b64\u7248\u672c\u7684mysql\u5ba2\u6237\u7aef\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-security.html"},"\u8fd9\u91cc"),"\u3002")),(0,l.kt)("p",null,"Doris\u5f00\u542fSSL\u52a0\u5bc6\u8fde\u63a5\u9700\u8981\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u9a8c\u8bc1\uff0c\u9ed8\u8ba4\u7684\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/"),"\u4e0b\u3002\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u7684\u751f\u6210\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/certificate"},"\u5bc6\u94a5\u8bc1\u4e66\u914d\u7f6e"),"\u3002"),(0,l.kt)("h4",{id:"\u505c\u6b62-fe-\u8282\u70b9"},"\u505c\u6b62 FE \u8282\u70b9"),(0,l.kt)("p",null,"Doris FE \u7684\u505c\u6b62\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u5b8c\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./bin/stop_fe.sh\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e-be"},"\u914d\u7f6e BE"),(0,l.kt)("p",null,"\u6211\u4eec\u8fdb\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-doris-x.x.x/be")," \u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd apache-doris-x.x.x/be\n")),(0,l.kt)("p",null,"\u4fee\u6539 BE \u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/be.conf")," \uff0c\u8fd9\u91cc\u6211\u4eec\u4e3b\u8981\u4fee\u6539\u4e24\u4e2a\u53c2\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"priority_networks")," \u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"storage_root")," \uff0c\u5982\u679c\u4f60\u9700\u8981\u66f4\u591a\u4f18\u5316\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/config/be-config"},"BE \u53c2\u6570\u914d\u7f6e"),"\u8bf4\u660e\uff0c\u8fdb\u884c\u8c03\u6574\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 priority_networks \u53c2\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"priority_networks=172.23.16.0/24\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u53c2\u6570\u6211\u4eec\u5728\u5b89\u88c5\u7684\u65f6\u5019\u662f\u5fc5\u987b\u8981\u914d\u7f6e\u7684\uff0c\u7279\u522b\u662f\u5f53\u4e00\u53f0\u673a\u5668\u62e5\u6709\u591a\u4e2aIP\u5730\u5740\u7684\u65f6\u5019\uff0c\u6211\u4eec\u8981\u4e3a BE \u6307\u5b9a\u552f\u4e00\u7684IP\u5730\u5740\u3002")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e BE \u6570\u636e\u5b58\u50a8\u76ee\u5f55")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"storage_root_path=/path/your/data_dir\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u9ed8\u8ba4\u76ee\u5f55\u5728 BE\u5b89\u88c5\u76ee\u5f55\u7684 storage \u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("li",{parentName:"ol"},"BE \u914d\u7f6e\u7684\u5b58\u50a8\u76ee\u5f55\u5fc5\u987b\u5148\u521b\u5efa\u597d"))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e JAVA_HOME \u73af\u5883\u53d8\u91cf")),(0,l.kt)("version",{since:"1.2.0"}),"\u7531\u4e8e\u4ece 1.2 \u7248\u672c\u5f00\u59cb\u652f\u6301 Java UDF \u51fd\u6570\uff0cBE \u4f9d\u8d56\u4e8e Java \u73af\u5883\u3002\u6240\u4ee5\u8981\u9884\u5148\u914d\u7f6e `JAVA_HOME` \u73af\u5883\u53d8\u91cf\uff0c\u4e5f\u53ef\u4ee5\u5728 `start_be.sh` \u542f\u52a8\u811a\u672c\u7b2c\u4e00\u884c\u6dfb\u52a0 `export JAVA_HOME=your_java_home_path` \u6765\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u3002",(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Java UDF \u51fd\u6570")),(0,l.kt)("version",{since:"1.2.0"},"\u5b89\u88c5Java UDF \u51fd\u6570"),"\u56e0\u4e3a\u4ece1.2 \u7248\u672c\u5f00\u59cb\u652f\u6301Java UDF \u51fd\u6570\uff0c\u9700\u8981\u4ece\u5b98\u7f51\u4e0b\u8f7d Java UDF \u51fd\u6570\u7684 JAR \u5305\u653e\u5230 BE \u7684 lib \u76ee\u5f55\u4e0b\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u542f\u52a8\u5931\u8d25\u3002",(0,l.kt)("h3",{id:"\u542f\u52a8-be"},"\u542f\u52a8 BE"),(0,l.kt)("p",null,"\u5728 BE \u5b89\u88c5\u76ee\u5f55\u4e0b\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u6765\u5b8c\u6210 BE \u7684\u542f\u52a8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./bin/start_be.sh --daemon\n")),(0,l.kt)("h4",{id:"\u6dfb\u52a0-be-\u8282\u70b9\u5230\u96c6\u7fa4"},"\u6dfb\u52a0 BE \u8282\u70b9\u5230\u96c6\u7fa4"),(0,l.kt)("p",null,"\u901a\u8fc7MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u5230 FE \u4e4b\u540e\u6267\u884c\u4e0b\u9762\u7684 SQL\uff0c\u5c06 BE \u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD BACKEND "be_host_ip:heartbeat_service_port";\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"be_host_ip\uff1a\u8fd9\u91cc\u662f\u4f60 BE \u7684 IP \u5730\u5740\uff0c\u548c\u4f60\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"be.conf")," \u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"priority_networks")," \u5339\u914d"),(0,l.kt)("li",{parentName:"ol"},"heartbeat_service_port\uff1a\u8fd9\u91cc\u662f\u4f60 BE \u7684\u5fc3\u8df3\u4e0a\u62a5\u7aef\u53e3\uff0c\u548c\u4f60\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"be.conf")," \u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"heartbeat_service_port")," \u5339\u914d\uff0c\u9ed8\u8ba4\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"9050"),"\u3002")),(0,l.kt)("h4",{id:"\u67e5\u770b-be-\u8fd0\u884c\u72b6\u6001"},"\u67e5\u770b BE \u8fd0\u884c\u72b6\u6001"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 MySQL \u547d\u4ee4\u884c\u4e0b\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u770b BE \u7684\u8fd0\u884c\u72b6\u6001\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW BACKENDS\\G\n")),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW BACKENDS\\G\n*************************** 1. row ***************************\n            BackendId: 10003\n              Cluster: default_cluster\n                   IP: 172.21.32.5\n        HeartbeatPort: 9050\n               BePort: 9060\n             HttpPort: 8040\n             BrpcPort: 8060\n        LastStartTime: 2022-08-16 15:31:37\n        LastHeartbeat: 2022-08-17 13:33:17\n                Alive: true\n SystemDecommissioned: false\nClusterDecommissioned: false\n            TabletNum: 170\n     DataUsedCapacity: 985.787 KB\n        AvailCapacity: 782.729 GB\n        TotalCapacity: 984.180 GB\n              UsedPct: 20.47 %\n       MaxDiskUsedPct: 20.47 %\n                  Tag: {"location" : "default"}\n               ErrMsg:\n              Version: 1.1.2-rc03-ca55ac2\n               Status: {"lastSuccessReportTabletsTime":"2022-08-17 13:33:05","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\n1 row in set (0.01 sec)\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Alive : true\u8868\u793a\u8282\u70b9\u8fd0\u884c\u6b63\u5e38")),(0,l.kt)("h4",{id:"\u505c\u6b62-be-\u8282\u70b9"},"\u505c\u6b62 BE \u8282\u70b9"),(0,l.kt)("p",null,"Doris BE \u7684\u505c\u6b62\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u5b8c\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./bin/stop_be.sh\n")),(0,l.kt)("h2",{id:"\u521b\u5efa\u6570\u636e\u8868"},"\u521b\u5efa\u6570\u636e\u8868"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create database demo;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6570\u636e\u8868")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'use demo;\n\nCREATE TABLE IF NOT EXISTS demo.example_tbl\n(\n    `user_id` LARGEINT NOT NULL COMMENT "\u7528\u6237id",\n    `date` DATE NOT NULL COMMENT "\u6570\u636e\u704c\u5165\u65e5\u671f\u65f6\u95f4",\n    `city` VARCHAR(20) COMMENT "\u7528\u6237\u6240\u5728\u57ce\u5e02",\n    `age` SMALLINT COMMENT "\u7528\u6237\u5e74\u9f84",\n    `sex` TINYINT COMMENT "\u7528\u6237\u6027\u522b",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "\u7528\u6237\u6700\u540e\u4e00\u6b21\u8bbf\u95ee\u65f6\u95f4",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "\u7528\u6237\u603b\u6d88\u8d39",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "\u7528\u6237\u6700\u5927\u505c\u7559\u65f6\u95f4",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "\u7528\u6237\u6700\u5c0f\u505c\u7559\u65f6\u95f4"\n)\nAGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u793a\u4f8b\u6570\u636e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"10000,2017-10-01,\u5317\u4eac,20,0,2017-10-01 06:00:00,20,10,10\n10000,2017-10-01,\u5317\u4eac,20,0,2017-10-01 07:00:00,15,2,2\n10001,2017-10-01,\u5317\u4eac,30,1,2017-10-01 17:05:45,2,22,22\n10002,2017-10-02,\u4e0a\u6d77,20,1,2017-10-02 12:59:12,200,5,5\n10003,2017-10-02,\u5e7f\u5dde,32,0,2017-10-02 11:20:00,30,11,11\n10004,2017-10-01,\u6df1\u5733,35,0,2017-10-01 10:00:15,100,3,3\n10004,2017-10-03,\u6df1\u5733,35,0,2017-10-03 10:20:22,11,6,6\n")),(0,l.kt)("p",null,"\u5c06\u4e0a\u9762\u7684\u6570\u636e\u4fdd\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"test.csv"),"\u6587\u4ef6\u4e2d\u3002"),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u6570\u636e")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7Stream load \u65b9\u5f0f\u5c06\u4e0a\u9762\u4fdd\u5b58\u5230\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6211\u4eec\u521a\u624d\u521b\u5efa\u7684\u8868\u91cc\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl  --location-trusted -u root: -T test.csv -H "column_separator:," http://127.0.0.1:8030/api/demo/example_tbl/_stream_load\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-T test.csv : \u8fd9\u91cc\u4f7f\u6211\u4eec\u521a\u624d\u4fdd\u5b58\u7684\u6570\u636e\u6587\u4ef6\uff0c\u5982\u679c\u8def\u5f84\u4e0d\u4e00\u6837\uff0c\u8bf7\u6307\u5b9a\u5b8c\u6574\u8def\u5f84"),(0,l.kt)("li",{parentName:"ul"},"-u root :  \u8fd9\u91cc\u662f\u7528\u6237\u540d\u5bc6\u7801\uff0c\u6211\u4eec\u4f7f\u7528\u9ed8\u8ba4\u7528\u6237root\uff0c\u5bc6\u7801\u662f\u7a7a"),(0,l.kt)("li",{parentName:"ul"},"127.0.0.1:8030 : \u5206\u522b\u662f fe \u7684 ip \u548c http_port")),(0,l.kt)("p",null,"\u6267\u884c\u6210\u529f\u4e4b\u540e\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4e0b\u9762\u7684\u8fd4\u56de\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "TxnId": 30303,\n    "Label": "8690a5c7-a493-48fc-b274-1bb7cd656f25",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 7,\n    "NumberLoadedRows": 7,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 399,\n    "LoadTimeMs": 381,\n    "BeginTxnTimeMs": 3,\n    "StreamLoadPutTimeMs": 5,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 191,\n    "CommitAndPublishTimeMs": 175\n}\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"NumberLoadedRows"),": \u8868\u793a\u5df2\u7ecf\u5bfc\u5165\u7684\u6570\u636e\u8bb0\u5f55\u6570")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"NumberTotalRows"),": \u8868\u793a\u8981\u5bfc\u5165\u7684\u603b\u6570\u636e\u91cf")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Status")," :Success \u8868\u793a\u5bfc\u5165\u6210\u529f"))),(0,l.kt)("p",null,"\u5230\u8fd9\u91cc\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u7684\u6570\u636e\u5bfc\u5165\uff0c\u4e0b\u9762\u5c31\u53ef\u4ee5\u6839\u636e\u6211\u4eec\u81ea\u5df1\u7684\u9700\u6c42\u5bf9\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u5206\u6790\u4e86\u3002"),(0,l.kt)("h2",{id:"\u67e5\u8be2\u6570\u636e"},"\u67e5\u8be2\u6570\u636e"),(0,l.kt)("p",null,"\u6211\u4eec\u4e0a\u9762\u5b8c\u6210\u4e86\u5efa\u8868\uff0c\u8f93\u6570\u636e\u5bfc\u5165\uff0c\u4e0b\u9762\u6211\u4eec\u5c31\u53ef\u4ee5\u4f53\u9a8c Doris \u7684\u6570\u636e\u5feb\u901f\u67e5\u8be2\u5206\u6790\u80fd\u529b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from example_tbl;\n+---------+------------+--------+------+------+---------------------+------+----------------+----------------+\n| user_id | date       | city   | age  | sex  | last_visit_date     | cost | max_dwell_time | min_dwell_time |\n+---------+------------+--------+------+------+---------------------+------+----------------+----------------+\n| 10000   | 2017-10-01 | \u5317\u4eac   |   20 |    0 | 2017-10-01 07:00:00 |   35 |             10 |              2 |\n| 10001   | 2017-10-01 | \u5317\u4eac   |   30 |    1 | 2017-10-01 17:05:45 |    2 |             22 |             22 |\n| 10002   | 2017-10-02 | \u4e0a\u6d77   |   20 |    1 | 2017-10-02 12:59:12 |  200 |              5 |              5 |\n| 10003   | 2017-10-02 | \u5e7f\u5dde   |   32 |    0 | 2017-10-02 11:20:00 |   30 |             11 |             11 |\n| 10004   | 2017-10-01 | \u6df1\u5733   |   35 |    0 | 2017-10-01 10:00:15 |  100 |              3 |              3 |\n| 10004   | 2017-10-03 | \u6df1\u5733   |   35 |    0 | 2017-10-03 10:20:22 |   11 |              6 |              6 |\n+---------+------------+--------+------+------+---------------------+------+----------------+----------------+\n6 rows in set (0.02 sec)\n\nmysql> select * from example_tbl where city='\u4e0a\u6d77';\n+---------+------------+--------+------+------+---------------------+------+----------------+----------------+\n| user_id | date       | city   | age  | sex  | last_visit_date     | cost | max_dwell_time | min_dwell_time |\n+---------+------------+--------+------+------+---------------------+------+----------------+----------------+\n| 10002   | 2017-10-02 | \u4e0a\u6d77   |   20 |    1 | 2017-10-02 12:59:12 |  200 |              5 |              5 |\n+---------+------------+--------+------+------+---------------------+------+----------------+----------------+\n1 row in set (0.05 sec)\n\nmysql> select city, sum(cost) as total_cost from example_tbl group by city;\n+--------+------------+\n| city   | total_cost |\n+--------+------------+\n| \u5e7f\u5dde   |         30 |\n| \u4e0a\u6d77   |        200 |\n| \u5317\u4eac   |         37 |\n| \u6df1\u5733   |        111 |\n+--------+------------+\n4 rows in set (0.05 sec)\n")),(0,l.kt)("p",null,"\u5230\u8fd9\u91cc\u6211\u4eec\u6574\u4e2a\u5feb\u901f\u5f00\u59cb\u5c31\u7ed3\u675f\u4e86\uff0c\u6211\u4eec\u4ece Doris \u5b89\u88c5\u90e8\u7f72\u3001\u542f\u505c\u3001\u521b\u5efa\u5e93\u8868\u3001\u6570\u636e\u5bfc\u5165\u53ca\u67e5\u8be2\uff0c\u5b8c\u6574\u7684\u4f53\u9a8c\u4e86Doris\u7684\u64cd\u4f5c\u6d41\u7a0b\uff0c\u4e0b\u9762\u5f00\u59cb\u6211\u4eec Doris \u4f7f\u7528\u4e4b\u65c5\u5427\u3002"))}m.isMDXComponent=!0},77932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220822091951739-fa716b28e6eb8b251098011657de50db.png"}}]);