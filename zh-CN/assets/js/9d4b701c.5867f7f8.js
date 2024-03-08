"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[25751],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||y[m]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},312427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(58168),n=(r(296540),r(15680));const o={},i=void 0,p={unversionedId:"ecosystem/bi-integration/apache-superset",id:"ecosystem/bi-integration/apache-superset",title:"apache-superset",description:"{",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/bi-integration/apache-superset.md",sourceDirName:"ecosystem/bi-integration",slug:"/ecosystem/bi-integration/apache-superset",permalink:"/zh-CN/docs/dev/ecosystem/bi-integration/apache-superset",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DBT Doris Adapter",permalink:"/zh-CN/docs/dev/ecosystem/dbt-doris-adapter"},next:{title:"\u8d21\u732e UDF ",permalink:"/zh-CN/docs/dev/ecosystem/udf/contribute-udf"}},s={},l=[{value:"}",id:"",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u6dfb\u52a0\u6570\u636e\u6e90",id:"\u6dfb\u52a0\u6570\u636e\u6e90",level:2}],c={toc:l},u="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,'{\n"title": "Apache Superset \u96c6\u6210",\n"language": "zh-CN"'),(0,n.yg)("h2",{id:""},"}"),(0,n.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.yg)("p",null,"Apache Superset \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u6570\u636e\u6316\u6398\u5e73\u53f0\uff0c\u652f\u6301\u4e30\u5bcc\u7684\u6570\u636e\u6e90\u8fde\u63a5\uff0c\u591a\u79cd\u53ef\u89c6\u5316\u65b9\u5f0f\uff0c\u5e76\u80fd\u591f\u5bf9\u7528\u6237\u5b9e\u73b0\u7ec6\u7c92\u5ea6\u7684\u6743\u9650\u63a7\u5236\u3002\u8be5\u5de5\u5177\u4e3b\u8981\u7279\u70b9\u662f\u53ef\u81ea\u52a9\u5206\u6790\u3001\u81ea\u5b9a\u4e49\u4eea\u8868\u76d8\u3001\u5206\u6790\u7ed3\u679c\u53ef\u89c6\u5316\uff08\u5bfc\u51fa\uff09\u3001\u7528\u6237/\u89d2\u8272\u6743\u9650\u63a7\u5236\uff0c\u8fd8\u96c6\u6210\u4e86\u4e00\u4e2a SQL \u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u8fdb\u884c SQL \u7f16\u8f91\u67e5\u8be2\u7b49\u3002"),(0,n.yg)("p",null,"\u5728 Apache Superset 3.1 \u7248\u672c\u4e2d\u6b63\u5f0f\u652f\u6301\u4e86 Apache Doris \u7684\u5185\u90e8\u6570\u636e\u548c\u5916\u90e8\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u548c\u53ef\u89c6\u5316\u5904\u7406\u3002"),(0,n.yg)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,n.yg)("p",null,"\u786e\u4fdd\u60a8\u5df2\u5b8c\u6210\u5982\u4e0b\u5de5\u5177\u5b89\u88c5\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u5728 Apache Superset \u670d\u52a1\u5668\u4e0a\u5b89\u88c5 Apache Doris \u7684 Python \u5ba2\u6237\u7aef\u3002",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"pip install pydoris\n"))),(0,n.yg)("li",{parentName:"ol"},"\u5b89\u88c5 Apache Superset 3.1 \u53ca\u5176\u4ee5\u4e0a\u7684\u7248\u672c\u3002\u5177\u4f53\u53c2\u89c1",(0,n.yg)("a",{parentName:"li",href:"https://superset.apache.org/docs/installation/installing-superset-from-pypi"},"\u5b89\u88c5 Superset \u4ece PyPI \u5e93"),"\u6216\u8005",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/superset"},"\u901a\u8fc7 Docker \u5bb9\u5668\u7684\u65b9\u5f0f\u5b89\u88c5"))),(0,n.yg)("h2",{id:"\u6dfb\u52a0\u6570\u636e\u6e90"},"\u6dfb\u52a0\u6570\u636e\u6e90"),(0,n.yg)("p",null,"\u5f53\u4f60\u5728 Apache Superset \u4e2d\u521b\u5efa\u6570\u636e\u6e90\u65f6\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e24\u70b9\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5728 SUPPORTED DATABASES \u91cc\u9009\u62e9 Apache Doris \u4f5c\u4e3a\u6570\u636e\u6e90\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5728 SQLALCHEMY URI \u91cc\uff0c\u6309\u5982\u4e0b Doris SQLAlchemy URI \u683c\u5f0f\u586b\u5199 URI\uff1a"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"doris://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"URI \u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"User\uff1a\u7528\u4e8e\u767b\u5f55 Doris \u96c6\u7fa4\u7684\u7528\u6237\u540d\uff0c\u5982 admin\u3002"),(0,n.yg)("li",{parentName:"ul"},"Password\uff1a\u7528\u4e8e\u767b\u5f55 Doris \u96c6\u7fa4\u7684\u7528\u6237\u5bc6\u7801\u3002"),(0,n.yg)("li",{parentName:"ul"},"Host\uff1aDoris \u96c6\u7fa4\u7684 FE \u4e3b\u673a IP \u5730\u5740\u3002"),(0,n.yg)("li",{parentName:"ul"},"Port\uff1aDoris \u96c6\u7fa4\u7684 FE \u67e5\u8be2\u7aef\u53e3\uff0c\u5982 9030\u3002"),(0,n.yg)("li",{parentName:"ul"},"Catalog\uff1aDoris \u96c6\u7fa4\u4e2d\u7684\u76ee\u6807 Catalog\u3002Internal Catalog \u548c External Catalog \u5747\u652f\u6301\u3002"),(0,n.yg)("li",{parentName:"ul"},"Database\uff1aDoris \u96c6\u7fa4\u4e2d\u7684\u76ee\u6807\u6570\u636e\u5e93\u3002\u5185\u90e8\u6570\u636e\u5e93\u548c\u5916\u90e8\u6570\u636e\u5e93\u5747\u652f\u6301\u3002")))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("ol",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ol"},"\u5f53\u4f60\u4f7f\u7528\u6700\u65b0\u7684 Docker \u955c\u50cf\u90e8\u7f72 Superset \u65f6\uff0c\u5982\u679c\u53d1\u73b0\u627e\u4e0d\u5230 Apache Doris \u6570\u636e\u6e90\uff0c\u8fd9\u4e2a\u53ef\u80fd\u662f\u56e0\u4e3a Superset Docker Image\u9ed8\u8ba4\u53ea\u5305\u542b\u57fa\u672c\u7684\u6570\u636e\u6e90\u6784\u5efa\uff0c\u9700\u8981\u624b\u52a8\u5c06 pydoris \u5305\u5b89\u88c5\u8fdb\u6765\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003 ","[superset docker\u6559\u7a0b]"," (",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/superset)%E4%B8%AD%E7%9A%84"},"https://hub.docker.com/r/apache/superset)\u4e2d\u7684")," How to extend this image \u6b65\u9aa4\u8fdb\u884c Apache Superset \u7684\u90e8\u7f72\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u63a8\u8350\u4f7f\u7528 Apache Doris 2.0.4 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002"))))}y.isMDXComponent=!0}}]);