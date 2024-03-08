"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[9509],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>E});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,E=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return t?n.createElement(E,o(o({ref:r},p),{},{components:t})):n.createElement(E,o({ref:r},p))}));function E(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},651946:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const l={title:"ALTER-SYSTEM-ADD-BROKER",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",id:"version-2.1/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",title:"ALTER-SYSTEM-ADD-BROKER",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER.md",sourceDirName:"sql-manual/sql-reference/Cluster-Management-Statements",slug:"/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",permalink:"/docs/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-SYSTEM-ADD-BROKER",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-ADD-BACKEND",permalink:"/docs/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BACKEND"},next:{title:"ALTER-SYSTEM-MODIFY-BACKEND",permalink:"/docs/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND"}},i={},c=[{value:"ALTER-SYSTEM-ADD-BROKER",id:"alter-system-add-broker",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(m,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-add-broker"},"ALTER-SYSTEM-ADD-BROKER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM ADD BROKER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to add a BROKER node. (Administrator only!)"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD BROKER broker_name "broker_host1:broker_ipc_port1","broker_host2:broker_ipc_port2",...;\n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add two brokers"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' ALTER SYSTEM ADD BROKER "host1:port", "host2:port";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"When fe enable fqdn(",(0,a.yg)("a",{parentName:"p",href:"/docs/admin-manual/cluster-management/fqdn"},"fqdn"),"),add one Broker"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' ALTER SYSTEM ADD BROKER "broker_fqdn1:port";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, FOLLOWER, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);