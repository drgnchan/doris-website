"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59944],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>R});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},E=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),E=a,R=u["".concat(i,".").concat(E)]||u[E]||m[E]||l;return t?n.createElement(R,o(o({ref:r},p),{},{components:t})):n.createElement(R,o({ref:r},p))}));function R(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=E;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}E.displayName="MDXCreateElement"},30824:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(45072),a=(t(11504),t(95788));const l={title:"ALTER-SYSTEM-DROP-BROKER",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER",id:"version-1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER",title:"ALTER-SYSTEM-DROP-BROKER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER.md",sourceDirName:"sql-manual/sql-reference/Cluster-Management-Statements",slug:"/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-SYSTEM-DROP-BROKER",language:"zh-CN"},sidebar:"docs",previous:{title:"CANCEL-ALTER-SYSTEM",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM"},next:{title:"ALTER-SYSTEM-ADD-OBSERVER",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER"}},i={},c=[{value:"ALTER-SYSTEM-DROP-BROKER",id:"alter-system-drop-broker",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-drop-broker"},"ALTER-SYSTEM-DROP-BROKER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM DROP BROKER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u662f\u5220\u9664 BROKER \u8282\u70b9\uff0c\uff08\u4ec5\u9650\u7ba1\u7406\u5458\u4f7f\u7528\uff09"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'\u5220\u9664\u6240\u6709 Broker\nALTER SYSTEM DROP ALL BROKER broker_name\n\u5220\u9664\u67d0\u4e00\u4e2a Broker \u8282\u70b9\nALTER SYSTEM DROP BROKER broker_name "host:port"[,"host:port"...];\n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5220\u9664\u6240\u6709 Broker"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER SYSTEM DROP ALL BROKER broker_name\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5220\u9664\u67d0\u4e00\u4e2a Broker \u8282\u70b9"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP BROKER broker_name "host:port"[,"host:port"...];\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, DROP, FOLLOWER, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);