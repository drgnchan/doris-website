"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55031],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),g=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=g(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=g(t),m=r,y=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(y,o(o({ref:n},d),{},{components:t})):a.createElement(y,o({ref:n},d))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var g=2;g<l;g++)o[g]=t[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},844345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var a=t(58168),r=(t(296540),t(15680));const l={title:"\u90e8\u7f72 Docker \u96c6\u7fa4",language:"zh-CN"},o=void 0,p={unversionedId:"install/construct-docker/run-docker-cluster",id:"version-2.0/install/construct-docker/run-docker-cluster",title:"\u90e8\u7f72 Docker \u96c6\u7fa4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/install/construct-docker/run-docker-cluster.md",sourceDirName:"install/construct-docker",slug:"/install/construct-docker/run-docker-cluster",permalink:"/zh-CN/docs/2.0/install/construct-docker/run-docker-cluster",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u90e8\u7f72 Docker \u96c6\u7fa4",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6784\u5efa Docker Image",permalink:"/zh-CN/docs/2.0/install/construct-docker/build-docker-image"},next:{title:"\u57fa\u4e8e Doris-Operator \u90e8\u7f72",permalink:"/zh-CN/docs/2.0/install/k8s-deploy/operator-deploy"}},i={},g=[{value:"\u80cc\u666f\u8bf4\u660e",id:"\u80cc\u666f\u8bf4\u660e",level:2},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u8f6f\u4ef6\u73af\u5883",id:"\u8f6f\u4ef6\u73af\u5883",level:2},{value:"\u786c\u4ef6\u73af\u5883",id:"\u786c\u4ef6\u73af\u5883",level:2},{value:"\u524d\u671f\u73af\u5883\u51c6\u5907",id:"\u524d\u671f\u73af\u5883\u51c6\u5907",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"\u7f51\u7edc\u6a21\u5f0f\u8bf4\u660e",id:"\u7f51\u7edc\u6a21\u5f0f\u8bf4\u660e",level:3},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:3},{value:"\u811a\u672c\u6a21\u677f",id:"\u811a\u672c\u6a21\u677f",level:3},{value:"Docker Run \u547d\u4ee4",id:"docker-run-\u547d\u4ee4",level:4},{value:"Docker Compose \u811a\u672c",id:"docker-compose-\u811a\u672c",level:4},{value:"\u90e8\u7f72 Doris Docker",id:"\u90e8\u7f72-doris-docker",level:2},{value:"\u7279\u4f8b\u8bf4\u660e",id:"\u7279\u4f8b\u8bf4\u660e",level:3}],d={toc:g},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u90e8\u7f72-docker-\u96c6\u7fa4"},"\u90e8\u7f72 Docker \u96c6\u7fa4"),(0,r.yg)("h2",{id:"\u80cc\u666f\u8bf4\u660e"},"\u80cc\u666f\u8bf4\u660e"),(0,r.yg)("p",null,"\u672c\u7bc7\u5c06\u7b80\u8ff0\u5982\u4f55\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker run")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose up")," \u547d\u4ee4\u5feb\u901f\u6784\u5efa\u4e00\u5957\u5b8c\u6574\u7684 Doris \u6d4b\u8bd5\u96c6\u7fa4\u3002"),(0,r.yg)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,r.yg)("p",null,"\u5efa\u8bae\u5728 SIT \u6216\u8005 DEV \u73af\u5883\u4e2d\u4f7f\u7528 Doris Docker \u6765\u7b80\u5316\u90e8\u7f72\u7684\u6d41\u7a0b\u3002"),(0,r.yg)("p",null,"\u5982\u5728\u65b0\u7248\u672c\u4e2d\u60f3\u6d4b\u8bd5\u67d0\u4e00\u4e2a\u529f\u80fd\u70b9\uff0c\u53ef\u4ee5\u4f7f\u7528 Doris Docker \u90e8\u7f72\u4e00\u4e2a Playground \u73af\u5883\u3002\u6216\u8005\u5728\u8c03\u8bd5\u7684\u8fc7\u7a0b\u4e2d\u8981\u590d\u73b0\u67d0\u4e2a\u95ee\u9898\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 docker \u73af\u5883\u6765\u6a21\u62df\u3002"),(0,r.yg)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u4e0a\uff0c\u5f53\u524d\u6682\u65f6\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u5bb9\u5668\u5316\u7684\u65b9\u6848\u8fdb\u884c Doris \u90e8\u7f72\u3002"),(0,r.yg)("h2",{id:"\u8f6f\u4ef6\u73af\u5883"},"\u8f6f\u4ef6\u73af\u5883"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u8f6f\u4ef6"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Docker"),(0,r.yg)("td",{parentName:"tr",align:null},"20.0 \u53ca\u4ee5\u4e0a")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"docker-compose"),(0,r.yg)("td",{parentName:"tr",align:null},"2.10 \u53ca\u4ee5\u4e0a")))),(0,r.yg)("h2",{id:"\u786c\u4ef6\u73af\u5883"},"\u786c\u4ef6\u73af\u5883"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u786c\u4ef6\u4fe1\u606f"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6700\u5927\u8fd0\u884c\u96c6\u7fa4\u89c4\u6a21"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u4f4e\u914d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null},"2C 4G"),(0,r.yg)("td",{parentName:"tr",align:null},"1FE 1BE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63a8\u8350\u914d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null},"4C 16G"),(0,r.yg)("td",{parentName:"tr",align:null},"3FE 3BE")))),(0,r.yg)("h2",{id:"\u524d\u671f\u73af\u5883\u51c6\u5907"},"\u524d\u671f\u73af\u5883\u51c6\u5907"),(0,r.yg)("p",null,"\u9700\u5728\u5bbf\u4e3b\u673a\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sysctl -w vm.max_map_count=2000000\n")),(0,r.yg)("h2",{id:"docker-compose"},"Docker Compose"),(0,r.yg)("p",null,"\u4e0d\u540c\u5e73\u53f0\u9700\u8981\u4f7f\u7528\u4e0d\u540c Image \u955c\u50cf\uff0c\u672c\u7bc7\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},"X86_64")," \u5e73\u53f0\u4e3a\u4f8b\u3002"),(0,r.yg)("h3",{id:"\u7f51\u7edc\u6a21\u5f0f\u8bf4\u660e"},"\u7f51\u7edc\u6a21\u5f0f\u8bf4\u660e"),(0,r.yg)("p",null,"Doris Docker \u9002\u7528\u7684\u7f51\u7edc\u6a21\u5f0f\u6709\u4e24\u79cd\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u9002\u5408\u8de8\u591a\u8282\u70b9\u90e8\u7f72\u7684 HOST \u6a21\u5f0f\uff0c\u8fd9\u79cd\u6a21\u5f0f\u9002\u5408\u6bcf\u4e2a\u8282\u70b9\u90e8\u7f72 1FE 1BE\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u9002\u5408\u5355\u8282\u70b9\u90e8\u7f72\u591a Doris \u8fdb\u7a0b\u7684\u5b50\u7f51\u7f51\u6865\u6a21\u5f0f\uff0c\u8fd9\u79cd\u6a21\u5f0f\u9002\u5408\u5355\u8282\u70b9\u90e8\u7f72\uff08\u63a8\u8350\uff09\uff0c\u82e5\u8981\u591a\u8282\u70b9\u6df7\u90e8\u9700\u8981\u505a\u66f4\u591a\u7ec4\u4ef6\u90e8\u7f72\uff08\u4e0d\u63a8\u8350\uff09\u3002")),(0,r.yg)("p",null,"\u4e3a\u4fbf\u4e8e\u5c55\u793a\uff0c\u672c\u7ae0\u8282\u4ec5\u6f14\u793a\u5b50\u7f51\u7f51\u6865\u6a21\u5f0f\u7f16\u5199\u7684\u811a\u672c\u3002"),(0,r.yg)("h3",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,r.yg)("p",null,"\u4ece ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache Doris 1.2.1 Docker Image")," \u7248\u672c\u8d77\uff0c\u5404\u4e2a\u8fdb\u7a0b\u955c\u50cf\u63a5\u53e3\u5217\u8868\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u8fdb\u7a0b\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u5b9a\u4e49"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u793a\u4f8b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FE"),(0,r.yg)("td",{parentName:"tr",align:null},"BE"),(0,r.yg)("td",{parentName:"tr",align:null},"BROKER"),(0,r.yg)("td",{parentName:"tr",align:null},"FE_SERVERS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FE"),(0,r.yg)("td",{parentName:"tr",align:null},"FE_ID"),(0,r.yg)("td",{parentName:"tr",align:null},"FE \u8282\u70b9 ID"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE"),(0,r.yg)("td",{parentName:"tr",align:null},"BE_ADDR"),(0,r.yg)("td",{parentName:"tr",align:null},"BE \u8282\u70b9\u4e3b\u8981\u4fe1\u606f"),(0,r.yg)("td",{parentName:"tr",align:null},"172.20.80.5:9050")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE"),(0,r.yg)("td",{parentName:"tr",align:null},"NODE_ROLE"),(0,r.yg)("td",{parentName:"tr",align:null},"BE \u8282\u70b9\u7c7b\u578b"),(0,r.yg)("td",{parentName:"tr",align:null},"computation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BROKER"),(0,r.yg)("td",{parentName:"tr",align:null},"BROKER_ADDR"),(0,r.yg)("td",{parentName:"tr",align:null},"BROKER \u8282\u70b9\u4e3b\u8981\u4fe1\u606f"),(0,r.yg)("td",{parentName:"tr",align:null},"172.20.80.6:8000")))),(0,r.yg)("p",null,"\u6ce8\u610f\uff0c\u4ee5\u4e0a\u63a5\u53e3\u5fc5\u987b\u586b\u5199\u4fe1\u606f\uff0c\u5426\u5219\u8fdb\u7a0b\u65e0\u6cd5\u542f\u52a8\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"FE_SERVERS \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"FE_NAME:FE_HOST:FE_EDIT_LOG_PORT[,FE_NAME:FE_HOST:FE_EDIT_LOG_PORT]")),(0,r.yg)("p",{parentName:"blockquote"},"FE_ID \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"1-9")," \u7684\u6574\u6570\uff0c\u5176\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"1")," \u53f7 FE \u4e3a Master \u8282\u70b9\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"BE_ADDR \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"BE_HOST:BE_HEARTBEAT_SERVICE_PORT")),(0,r.yg)("p",{parentName:"blockquote"},"NODE_ROLE \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"computation")," \u6216\u4e3a\u7a7a\uff0c\u5176\u4e2d\u4e3a\u7a7a\u6216\u4e3a\u5176\u4ed6\u503c\u65f6\u8868\u793a\u8282\u70b9\u7c7b\u578b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"mix")," \u7c7b\u578b"),(0,r.yg)("p",{parentName:"blockquote"},"BROKER_ADDR \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"BROKER_HOST:BROKER_IPC_PORT"))),(0,r.yg)("h3",{id:"\u811a\u672c\u6a21\u677f"},"\u811a\u672c\u6a21\u677f"),(0,r.yg)("h4",{id:"docker-run-\u547d\u4ee4"},"Docker Run \u547d\u4ee4"),(0,r.yg)("p",null,"1FE & 1BE \u547d\u4ee4\u6a21\u677f"),(0,r.yg)("p",null,"\u6ce8\u610f\u9700\u8981\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}")," \u66ff\u6362\u4e3a\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'docker run -itd \\\n--name=fe \\\n--env FE_SERVERS="fe1:${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9010" \\\n--env FE_ID=1 \\\n-p 8030:8030 \\\n-p 9030:9030 \\\n-v /data/fe/doris-meta:/opt/apache-doris/fe/doris-meta \\\n-v /data/fe/log:/opt/apache-doris/fe/log \\\n--net=host \\\napache/doris:2.0.0_alpha-fe-x86_64\n\ndocker run -itd \\\n--name=be \\\n--env FE_SERVERS="fe1:${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9010" \\\n--env BE_ADDR="${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9050" \\\n-p 8040:8040 \\\n-v /data/be/storage:/opt/apache-doris/be/storage \\\n-v /data/be/log:/opt/apache-doris/be/log \\\n--net=host \\\napache/doris:2.0.0_alpha-be-x86_64\n')),(0,r.yg)("p",null,"3FE & 3BE Run \u547d\u4ee4\u6a21\u677f\u5982\u6709\u9700\u8981",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/docker-compose-demo/build-cluster/rum-command/3fe_3be.sh"},"\u70b9\u51fb\u6b64\u5904"),"\u8bbf\u95ee\u4e0b\u8f7d\u3002"),(0,r.yg)("h4",{id:"docker-compose-\u811a\u672c"},"Docker Compose \u811a\u672c"),(0,r.yg)("p",null,"1FE & 1BE \u6a21\u677f"),(0,r.yg)("p",null,"\u6ce8\u610f\u9700\u8981\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}")," \u66ff\u6362\u4e3a\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  fe:\n    image: apache/doris:2.0.0_alpha-fe-x86_64\n    hostname: fe\n    environment:\n     - FE_SERVERS=fe1:${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9010\n     - FE_ID=1\n    volumes:\n     - /data/fe/doris-meta/:/opt/apache-doris/fe/doris-meta/\n     - /data/fe/log/:/opt/apache-doris/fe/log/\n    network_mode: host\n  be:\n    image: apache/doris:2.0.0_alpha-be-x86_64\n    hostname: be\n    environment:\n     - FE_SERVERS=fe1:${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9010\n     - BE_ADDR=${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9050\n    volumes:\n     - /data/be/storage/:/opt/apache-doris/be/storage/\n     - /data/be/script/:/docker-entrypoint-initdb.d/\n    depends_on:\n      - fe\n    network_mode: host\n')),(0,r.yg)("p",null,"3FE & 3BE Docker Compose \u811a\u672c\u6a21\u677f\u5982\u6709\u9700\u8981",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/docker-compose-demo/build-cluster/docker-compose/3fe_3be/docker-compose.yaml"},"\u70b9\u51fb\u6b64\u5904"),"\u8bbf\u95ee\u4e0b\u8f7d\u3002"),(0,r.yg)("h2",{id:"\u90e8\u7f72-doris-docker"},"\u90e8\u7f72 Doris Docker"),(0,r.yg)("p",null,"\u90e8\u7f72\u65b9\u5f0f\u4e8c\u9009\u4e00\u5373\u53ef\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"docker run")," \u547d\u4ee4\u521b\u5efa\u96c6\u7fa4"),(0,r.yg)("li",{parentName:"ol"},"\u4fdd\u5b58 ",(0,r.yg)("inlineCode",{parentName:"li"},"docker-compose.yaml")," \u811a\u672c\uff0c\u540c\u76ee\u5f55\u4e0b\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"docker-compose up -d")," \u547d\u4ee4\u521b\u5efa\u96c6\u7fa4")),(0,r.yg)("h3",{id:"\u7279\u4f8b\u8bf4\u660e"},"\u7279\u4f8b\u8bf4\u660e"),(0,r.yg)("p",null,"MacOS \u7531\u4e8e\u5185\u90e8\u5b9e\u73b0\u5bb9\u5668\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u5728\u90e8\u7f72\u65f6\u5bbf\u4e3b\u673a\u76f4\u63a5\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"max_map_count")," \u503c\u53ef\u80fd\u65e0\u6cd5\u6210\u529f\uff0c\u9700\u8981\u5148\u521b\u5efa\u4ee5\u4e0b\u5bb9\u5668\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shel"},"docker run -it --privileged --pid=host --name=change_count debian nsenter -t 1 -m -u -n -i sh\n")),(0,r.yg)("p",null,"\u5bb9\u5668\u521b\u5efa\u6210\u529f\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sysctl -w vm.max_map_count=2000000\n")),(0,r.yg)("p",null,"\u7136\u540e ",(0,r.yg)("inlineCode",{parentName:"p"},"exit")," \u9000\u51fa\uff0c\u521b\u5efa Doris Docker \u96c6\u7fa4\u3002"))}u.isMDXComponent=!0}}]);