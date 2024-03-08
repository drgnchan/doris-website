"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1907],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},S=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),S=l,y=u["".concat(s,".").concat(S)]||u[S]||m[S]||a;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=S;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}S.displayName="MDXCreateElement"},13718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(58168),l=(r(296540),r(15680));const a={title:"SHOW-PROCESSLIST",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",id:"sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",title:"SHOW-PROCESSLIST",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-PROCESSLIST",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TRIGGERS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TRIGGERS"},next:{title:"SHOW-TRASH",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TRASH"}},s={},c=[{value:"SHOW-PROCESSLIST",id:"show-processlist",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,l.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"show-processlist"},"SHOW-PROCESSLIST"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"SHOW PROCESSLIST"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u663e\u793a\u7528\u6237\u6b63\u5728\u8fd0\u884c\u7684\u7ebf\u7a0b\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u9664\u4e86 root \u7528\u6237\u80fd\u770b\u5230\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u7ebf\u7a0b\u5916\uff0c\u5176\u4ed6\u7528\u6237\u90fd\u53ea\u80fd\u770b\u5230\u81ea\u5df1\u6b63\u5728\u8fd0\u884c\u7684\u7ebf\u7a0b\uff0c\u770b\u4e0d\u5230\u5176\u5b83\u7528\u6237\u6b63\u5728\u8fd0\u884c\u7684\u7ebf\u7a0b"),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [FULL] PROCESSLIST\n")),(0,l.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"CurrentConnected: \u662f\u5426\u4e3a\u5f53\u524d\u8fde\u63a5\u3002"),(0,l.yg)("li",{parentName:"ul"},"Id: \u5c31\u662f\u8fd9\u4e2a\u7ebf\u7a0b\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u5f53\u6211\u4eec\u53d1\u73b0\u8fd9\u4e2a\u7ebf\u7a0b\u6709\u95ee\u9898\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7 kill \u547d\u4ee4\uff0c\u52a0\u4e0a\u8fd9\u4e2aId\u503c\u5c06\u8fd9\u4e2a\u7ebf\u7a0b\u6740\u6389\u3002"),(0,l.yg)("li",{parentName:"ul"},"User: \u5c31\u662f\u6307\u542f\u52a8\u8fd9\u4e2a\u7ebf\u7a0b\u7684\u7528\u6237\u3002"),(0,l.yg)("li",{parentName:"ul"},"Host: \u8bb0\u5f55\u4e86\u53d1\u9001\u8bf7\u6c42\u7684\u5ba2\u6237\u7aef\u7684 IP \u548c \u7aef\u53e3\u53f7\u3002\u901a\u8fc7\u8fd9\u4e9b\u4fe1\u606f\u5728\u6392\u67e5\u95ee\u9898\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4f4d\u5230\u662f\u54ea\u4e2a\u5ba2\u6237\u7aef\u7684\u54ea\u4e2a\u8fdb\u7a0b\u53d1\u9001\u7684\u8bf7\u6c42\u3002"),(0,l.yg)("li",{parentName:"ul"},"LoginTime: \u5efa\u7acb\u8fde\u63a5\u7684\u65f6\u95f4\u3002"),(0,l.yg)("li",{parentName:"ul"},"Catalog: \u5f53\u524d\u6267\u884c\u7684\u547d\u4ee4\u662f\u5728\u54ea\u4e00\u4e2a\u6570\u636e\u76ee\u5f55\u4e0a\u3002"),(0,l.yg)("li",{parentName:"ul"},"Db: \u5f53\u524d\u6267\u884c\u7684\u547d\u4ee4\u662f\u5728\u54ea\u4e00\u4e2a\u6570\u636e\u5e93\u4e0a\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u6570\u636e\u5e93\uff0c\u5219\u8be5\u503c\u4e3a NULL \u3002"),(0,l.yg)("li",{parentName:"ul"},"Command: \u662f\u6307\u6b64\u523b\u8be5\u7ebf\u7a0b\u6b63\u5728\u6267\u884c\u7684\u547d\u4ee4\u3002"),(0,l.yg)("li",{parentName:"ul"},"Time: \u4e0a\u4e00\u6761\u547d\u4ee4\u63d0\u4ea4\u5230\u5f53\u524d\u72b6\u6001\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002"),(0,l.yg)("li",{parentName:"ul"},"State: \u7ebf\u7a0b\u7684\u72b6\u6001\uff0c\u548c Command \u5bf9\u5e94\u3002"),(0,l.yg)("li",{parentName:"ul"},"QueryId: \u5f53\u524d\u67e5\u8be2\u8bed\u53e5\u7684ID\u3002"),(0,l.yg)("li",{parentName:"ul"},"Info: \u4e00\u822c\u8bb0\u5f55\u7684\u662f\u7ebf\u7a0b\u6267\u884c\u7684\u8bed\u53e5\u3002\u9ed8\u8ba4\u53ea\u663e\u793a\u524d100\u4e2a\u5b57\u7b26\uff0c\u4e5f\u5c31\u662f\u4f60\u770b\u5230\u7684\u8bed\u53e5\u53ef\u80fd\u662f\u622a\u65ad\u4e86\u7684\uff0c\u8981\u770b\u5168\u90e8\u4fe1\u606f\uff0c\u9700\u8981\u4f7f\u7528 show full processlist\u3002")),(0,l.yg)("p",null,"\u5e38\u89c1\u7684 Command \u7c7b\u578b\u5982\u4e0b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Query: \u8be5\u7ebf\u7a0b\u6b63\u5728\u6267\u884c\u4e00\u4e2a\u8bed\u53e5"),(0,l.yg)("li",{parentName:"ul"},"Sleep: \u6b63\u5728\u7b49\u5f85\u5ba2\u6237\u7aef\u5411\u5b83\u53d1\u9001\u6267\u884c\u8bed\u53e5"),(0,l.yg)("li",{parentName:"ul"},"Quit: \u8be5\u7ebf\u7a0b\u6b63\u5728\u9000\u51fa"),(0,l.yg)("li",{parentName:"ul"},"Kill : \u6b63\u5728\u6267\u884c kill \u8bed\u53e5\uff0c\u6740\u6b7b\u6307\u5b9a\u7ebf\u7a0b")),(0,l.yg)("p",null,"\u5176\u4ed6\u7c7b\u578b\u53ef\u4ee5\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/thread-commands.html"},"MySQL \u5b98\u7f51\u89e3\u91ca")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u67e5\u770b\u5f53\u524d\u7528\u6237\u6b63\u5728\u8fd0\u884c\u7684\u7ebf\u7a0b",(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PROCESSLIST\n")),"\u8fd4\u56de\u7ed3\u679c",(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"MySQL [test]> show full processlist;\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n| CurrentConnected | Id   | User | Host            | LoginTime           | Catalog  | Db   | Command | Time | State | QueryId                           | Info                  |\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n| Yes              |    0 | root | 127.0.0.1:34650 | 2023-09-06 12:01:02 | internal | test | Query   |    0 | OK    | c84e397193a54fe7-bbe9bc219318b75e | select 1              |\n|                  |    1 | root | 127.0.0.1:34776 | 2023-09-06 12:01:07 | internal |      | Sleep   |   29 | EOF   | 886ffe2894314f50-8dd73a6ca06699e4 | show full processlist |\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n")))),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SHOW, PROCESSLIST\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);