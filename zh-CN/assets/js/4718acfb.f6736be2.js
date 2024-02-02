"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88512],{95788:(e,r,l)=>{l.d(r,{Iu:()=>d,yg:()=>m});var a=l(11504);function t(e,r,l){return r in e?Object.defineProperty(e,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[r]=l,e}function n(e,r){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var r=1;r<arguments.length;r++){var l=null!=arguments[r]?arguments[r]:{};r%2?n(Object(l),!0).forEach((function(r){t(e,r,l[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(l,r))}))}return e}function s(e,r){if(null==e)return{};var l,a,t=function(e,r){if(null==e)return{};var l,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],r.indexOf(l)>=0||(t[l]=e[l]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],r.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var i=a.createContext({}),p=function(e){var r=a.useContext(i),l=r;return e&&(l="function"==typeof e?e(r):o(o({},r),e)),l},d=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var l=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(l),g=t,m=u["".concat(i,".").concat(g)]||u[g]||c[g]||n;return l?a.createElement(m,o(o({ref:r},d),{},{components:l})):a.createElement(m,o({ref:r},d))}));function m(e,r){var l=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=l.length,o=new Array(n);o[0]=g;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:t,o[1]=s;for(var p=2;p<n;p++)o[p]=l[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}g.displayName="MDXCreateElement"},97564:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=l(45072),t=(l(11504),l(95788));const n={title:"\u57fa\u4e8e Helm Chart \u90e8\u7f72",language:"zh-CN"},o=void 0,s={unversionedId:"install/k8s-deploy/helm-chart-deploy",id:"version-2.0/install/k8s-deploy/helm-chart-deploy",title:"\u57fa\u4e8e Helm Chart \u90e8\u7f72",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/install/k8s-deploy/helm-chart-deploy.md",sourceDirName:"install/k8s-deploy",slug:"/install/k8s-deploy/helm-chart-deploy",permalink:"/zh-CN/docs/install/k8s-deploy/helm-chart-deploy",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u57fa\u4e8e Helm Chart \u90e8\u7f72",language:"zh-CN"},sidebar:"docs",previous:{title:"\u57fa\u4e8e Doris-Operator \u90e8\u7f72",permalink:"/zh-CN/docs/install/k8s-deploy/operator-deploy"},next:{title:"\u8bbf\u95ee Doris \u96c6\u7fa4",permalink:"/zh-CN/docs/install/k8s-deploy/network"}},i={},p=[{value:"\u6dfb\u52a0\u90e8\u7f72\u4ed3\u5e93",id:"\u6dfb\u52a0\u90e8\u7f72\u4ed3\u5e93",level:2},{value:"\u5b89\u88c5 doris-operator",id:"\u5b89\u88c5-doris-operator",level:2},{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5",level:3},{value:"2. \u9a8c\u8bc1",id:"2-\u9a8c\u8bc1",level:3},{value:"\u5b89\u88c5 doriscluster",id:"\u5b89\u88c5-doriscluster",level:2},{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5-1",level:3},{value:"2. \u9a8c\u8bc1",id:"2-\u9a8c\u8bc1-1",level:3},{value:"\u901a\u8fc7 Helm \u5378\u8f7d Doris",id:"\u901a\u8fc7-helm-\u5378\u8f7d-doris",level:2},{value:"\u5378\u8f7d doriscluster",id:"\u5378\u8f7d-doriscluster",level:3},{value:"\u5378\u8f7d doris-operator",id:"\u5378\u8f7d-doris-operator",level:3}],d={toc:p},u="wrapper";function c(e){let{components:r,...l}=e;return(0,t.yg)(u,(0,a.c)({},d,l,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://helm.sh/zh/"},"Helm")," \u662f\u67e5\u627e\u3001\u5206\u4eab\u548c\u4f7f\u7528\u8f6f\u4ef6\u6784\u5efa Kubernetes \u7684\u6700\u4f18\u65b9\u5f0f\u3002\u5373\u4f7f\u662f\u6700\u590d\u6742\u7684 Kubernetes \u5e94\u7528\u7a0b\u5e8f\uff0c\u90fd\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5b9a\u4e49\uff0c\u5b89\u88c5\u548c\u5347\u7ea7\u3002\n\u901a\u8fc7 Helm Chart \uff0c\u53ef\u4ee5\u8f7b\u677e\u90e8\u7f72 Doris \u96c6\u7fa4\uff0c\u51cf\u5c11\u7e41\u7410\u7684\u914d\u7f6e\u6b65\u9aa4\u3002"),(0,t.yg)("h2",{id:"\u6dfb\u52a0\u90e8\u7f72\u4ed3\u5e93"},"\u6dfb\u52a0\u90e8\u7f72\u4ed3\u5e93"),(0,t.yg)("p",null,"\u8be5 ",(0,t.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/search?ts_query_web=doris&sort=relevance&page=1"},"Doris \u4ed3\u5e93")," \u5305\u542b\u6709\u5173 doris-operator \u8fd0\u884c\u7684 RBAC \u3001\u90e8\u7f72\u7b49\u8d44\u6e90\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u6dfb\u52a0 Doris \u7684\u8fdc\u7a0b\u4ed3\u5e93")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm repo add doris-repo https://charts.selectdb.com\n")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u66f4\u65b0 Chart \u4e3a\u6700\u65b0\u7248\u672c")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm repo update doris-repo\n")),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},"\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm search repo doris-repo\nNAME                          CHART VERSION    APP VERSION   DESCRIPTION\ndoris-repo/doris-operator     1.3.1            1.3.1         Doris-operator for doris creat ...\ndoris-repo/doris              1.3.1            2.0.3         Apache Doris is an easy-to-use ...\n")),(0,t.yg)("h2",{id:"\u5b89\u88c5-doris-operator"},"\u5b89\u88c5 doris-operator"),(0,t.yg)("h3",{id:"1-\u5b89\u88c5"},"1. \u5b89\u88c5"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u5b89\u88c5 ",(0,t.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/doris/doris-operator"},"doris-operator"),"\uff0c\u9ed8\u8ba4\u5728\u540d\u4e3a ",(0,t.yg)("inlineCode",{parentName:"li"},"doris")," \u7684 namespace \u91cc\u9762")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm install operator doris-repo/doris-operator\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u88c5\u914d ",(0,t.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/doris/doris-operator?modal=values"},"values.yaml")," \uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u547d\u4ee4:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm install -f values.yaml operator doris-repo/doris-operator \n")),(0,t.yg)("h3",{id:"2-\u9a8c\u8bc1"},"2. \u9a8c\u8bc1"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"kubectl get pods")," \u547d\u4ee4\u67e5\u770b Pod \u7684\u90e8\u7f72\u72b6\u6001\u3002\u5f53 doris-operator \u7684 Pod \u5904\u4e8e Running \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u7ecf\u5c31\u7eea\uff0c\u5373\u90e8\u7f72\u6210\u529f")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Bash"},"$ kubectl get pod --namespace doris\nNAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-866bd449bb-zl5mr   1/1     Running   0          18m\n")),(0,t.yg)("h2",{id:"\u5b89\u88c5-doriscluster"},"\u5b89\u88c5 doriscluster"),(0,t.yg)("h3",{id:"1-\u5b89\u88c5-1"},"1. \u5b89\u88c5"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,t.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/doris/doris"},"doriscluster"),"\uff0c\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u6b64\u90e8\u7f72\u4ec5\u90e8\u7f72 3\u4e2a FE \u548c 3\u4e2a BE \u7ec4\u4ef6\uff0c\u4f7f\u7528\u9ed8\u8ba4 ",(0,t.yg)("inlineCode",{parentName:"li"},"storageClass")," \u5b9e\u73b0 PV \u52a8\u6001\u4f9b\u7ed9")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm install doriscluster doris-repo/doris\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u8d44\u6e90\u548c\u96c6\u7fa4\u5f62\u6001\uff0c\u8bf7\u6839\u636e ",(0,t.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/doris/doris?modal=values"},"values.yaml")," \u7684\u5404\u4e2a\u8d44\u6e90\u914d\u7f6e\u7684\u6ce8\u89e3\u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e\uff0c\u5e76\u6267\u884c\u5982\u4e0b\u547d\u4ee4:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm install -f values.yaml doriscluster doris-repo/doris \n")),(0,t.yg)("h3",{id:"2-\u9a8c\u8bc1-1"},"2. \u9a8c\u8bc1"),(0,t.yg)("p",null,"\u6267\u884c\u5b8c\u5b89\u88c5\u547d\u4ee4\u540e\uff0c\u90e8\u7f72\u4e0b\u53d1\uff0c\u670d\u52a1\u90e8\u7f72\u8c03\u5ea6\u4ee5\u53ca\u542f\u52a8\u4f1a\u8017\u8d39\u4e00\u5b9a\u65f6\u95f4"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"kubectl get pods")," \u547d\u4ee4\u67e5\u770b Pod \u7684\u90e8\u7f72\u72b6\u6001\u3002\u5f53 ",(0,t.yg)("inlineCode",{parentName:"li"},"doriscluster")," \u7684 Pod \u5904\u4e8e ",(0,t.yg)("inlineCode",{parentName:"li"},"Running")," \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u7ecf\u5c31\u7eea\uff0c\u5373\u90e8\u7f72\u6210\u529f")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Bash"},"$  kubectl get pod --namespace doris\nNAME                     READY   STATUS    RESTARTS   AGE\ndoriscluster-helm-fe-0   1/1     Running   0          1m39s\ndoriscluster-helm-fe-1   1/1     Running   0          1m39s\ndoriscluster-helm-fe-2   1/1     Running   0          1m39s\ndoriscluster-helm-be-0   1/1     Running   0          16s\ndoriscluster-helm-be-1   1/1     Running   0          16s\ndoriscluster-helm-be-2   1/1     Running   0          16s\n")),(0,t.yg)("h2",{id:"\u901a\u8fc7-helm-\u5378\u8f7d-doris"},"\u901a\u8fc7 Helm \u5378\u8f7d Doris"),(0,t.yg)("h3",{id:"\u5378\u8f7d-doriscluster"},"\u5378\u8f7d doriscluster"),(0,t.yg)("p",null,"\u786e\u4fdd\u5728\u8be5 Doris \u96c6\u7fa4\u4e0d\u518d\u4f7f\u7528\u540e\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u5378\u8f7d ",(0,t.yg)("inlineCode",{parentName:"p"},"doriscluster"),"\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ helm uninstall doriscluster\n")),(0,t.yg)("h3",{id:"\u5378\u8f7d-doris-operator"},"\u5378\u8f7d doris-operator"),(0,t.yg)("p",null,"\u786e\u4fdd\u5728 Kubernetes \u4e2d\u6ca1\u6709\u8fd0\u884c Doris \u540e\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u5378\u8f7d ",(0,t.yg)("inlineCode",{parentName:"p"},"doris-operator"),"\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ helm uninstall operator\n")))}c.isMDXComponent=!0}}]);