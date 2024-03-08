"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[35273],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>y});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),E=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},s=function(e){var n=E(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=E(a),g=r,y=m["".concat(o,".").concat(g)]||m[g]||c[g]||l;return a?t.createElement(y,p(p({ref:n},s),{},{components:a})):t.createElement(y,p({ref:n},s))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=g;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var E=2;E<l;E++)p[E]=a[E];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},731851:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>E});var t=a(58168),r=(a(296540),a(15680));const l={title:"CREATE-USER",language:"zh-CN"},p=void 0,i={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",id:"sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",title:"CREATE-USER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-USER",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-ROLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE"},next:{title:"ALTER-USER",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER"}},o={},E=[{value:"CREATE USER",id:"create-user",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:E},m="wrapper";function c(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-user"},"CREATE USER"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE USER"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"CREATE USER \u547d\u4ee4\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a Doris \u7528\u6237\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER [IF EXISTS] user_identity [IDENTIFIED BY 'password']\n[DEFAULT ROLE 'role_name']\n[password_policy]\n\nuser_identity:\n    'user_name'@'host'\n\npassword_policy:\n\n    1. PASSWORD_HISTORY [n|DEFAULT]\n    2. PASSWORD_EXPIRE [DEFAULT|NEVER|INTERVAL n DAY/HOUR/SECOND]\n    3. FAILED_LOGIN_ATTEMPTS n\n    4. PASSWORD_LOCK_TIME [n DAY/HOUR/SECOND|UNBOUNDED]\n")),(0,r.yg)("p",null,"\u5728 Doris \u4e2d\uff0c\u4e00\u4e2a user_identity \u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u7528\u6237\u3002user_identity \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0cuser_name \u548c host\uff0c\u5176\u4e2d username \u4e3a\u7528\u6237\u540d\u3002host \u6807\u8bc6\u7528\u6237\u7aef\u8fde\u63a5\u6240\u5728\u7684\u4e3b\u673a\u5730\u5740\u3002host \u90e8\u5206\u53ef\u4ee5\u4f7f\u7528 % \u8fdb\u884c\u6a21\u7cca\u5339\u914d\u3002\u5982\u679c\u4e0d\u6307\u5b9a host\uff0c\u9ed8\u8ba4\u4e3a '%'\uff0c\u5373\u8868\u793a\u8be5\u7528\u6237\u53ef\u4ee5\u4ece\u4efb\u610f host \u8fde\u63a5\u5230 Doris\u3002"),(0,r.yg)("p",null,"host \u90e8\u5206\u4e5f\u53ef\u6307\u5b9a\u4e3a domain\uff0c\u8bed\u6cd5\u4e3a\uff1a'user_name'@","['domain']","\uff0c\u5373\u4f7f\u7528\u4e2d\u62ec\u53f7\u5305\u56f4\uff0c\u5219 Doris \u4f1a\u8ba4\u4e3a\u8fd9\u4e2a\u662f\u4e00\u4e2a domain\uff0c\u5e76\u5c1d\u8bd5\u89e3\u6790\u5176 ip \u5730\u5740\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u6307\u5b9a\u4e86\u89d2\u8272\uff08ROLE\uff09\uff0c\u5219\u4f1a\u81ea\u52a8\u5c06\u8be5\u89d2\u8272\u6240\u62e5\u6709\u7684\u6743\u9650\u8d4b\u4e88\u65b0\u521b\u5efa\u7684\u8fd9\u4e2a\u7528\u6237\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u8be5\u7528\u6237\u9ed8\u8ba4\u6ca1\u6709\u4efb\u4f55\u6743\u9650\u3002\u6307\u5b9a\u7684 ROLE \u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u3002"),(0,r.yg)("p",null,"password_policy \u662f\u7528\u4e8e\u6307\u5b9a\u5bc6\u7801\u8ba4\u8bc1\u767b\u5f55\u76f8\u5173\u7b56\u7565\u7684\u5b50\u53e5\uff0c\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u7b56\u7565\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_HISTORY")),(0,r.yg)("p",{parentName:"li"},"\u662f\u5426\u5141\u8bb8\u5f53\u524d\u7528\u6237\u91cd\u7f6e\u5bc6\u7801\u65f6\u4f7f\u7528\u5386\u53f2\u5bc6\u7801\u3002\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_HISTORY 10")," \u8868\u793a\u7981\u6b62\u4f7f\u7528\u8fc7\u53bb10\u6b21\u8bbe\u7f6e\u8fc7\u7684\u5bc6\u7801\u4e3a\u65b0\u5bc6\u7801\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_HISTORY DEFAULT"),"\uff0c\u5219\u4f1a\u4f7f\u7528\u5168\u5c40\u53d8\u91cf ",(0,r.yg)("inlineCode",{parentName:"p"},"password_history")," \u4e2d\u7684\u503c\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"0")," \u8868\u793a\u4e0d\u542f\u7528\u8fd9\u4e2a\u529f\u80fd\u3002\u9ed8\u8ba4\u4e3a 0\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE")),(0,r.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u5bc6\u7801\u7684\u8fc7\u671f\u65f6\u95f4\u3002\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE INTERVAL 10 DAY")," \u8868\u793a\u5bc6\u7801\u4f1a\u5728 10 \u5929\u540e\u8fc7\u671f\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE NEVER")," \u8868\u793a\u5bc6\u7801\u4e0d\u8fc7\u671f\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE DEFAULT"),"\uff0c\u5219\u4f1a\u4f7f\u7528\u5168\u5c40\u53d8\u91cf ",(0,r.yg)("inlineCode",{parentName:"p"},"default_password_lifetime")," \u4e2d\u7684\u503c\u3002\u9ed8\u8ba4\u4e3a NEVER\uff08\u62160\uff09\uff0c\u8868\u793a\u4e0d\u4f1a\u8fc7\u671f\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"FAILED_LOGIN_ATTEMPTS")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_LOCK_TIME")),(0,r.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u767b\u5f55\u65f6\uff0c\u5982\u679c\u4f7f\u7528\u9519\u8bef\u7684\u5bc6\u7801\u767b\u5f55n\u6b21\u540e\uff0c\u8d26\u6237\u5c06\u88ab\u9501\u5b9a\uff0c\u5e76\u8bbe\u7f6e\u9501\u5b9a\u65f6\u95f4\u3002\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},"FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY")," \u8868\u793a\u5982\u679c3\u6b21\u9519\u8bef\u767b\u5f55\uff0c\u5219\u8d26\u6237\u4f1a\u88ab\u9501\u5b9a\u4e00\u5929\u3002"),(0,r.yg)("p",{parentName:"li"},"\u88ab\u9501\u5b9a\u7684\u8d26\u6237\u53ef\u4ee5\u901a\u8fc7 ALTER USER \u8bed\u53e5\u4e3b\u52a8\u89e3\u9501\u3002"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65e0\u5bc6\u7801\u7528\u6237\uff08\u4e0d\u6307\u5b9a host\uff0c\u5219\u7b49\u4ef7\u4e8e jack@'%'\uff09"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u6709\u5bc6\u7801\u7528\u6237\uff0c\u5141\u8bb8\u4ece '172.10.1.10' \u767b\u9646"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e3a\u4e86\u907f\u514d\u4f20\u9012\u660e\u6587\uff0c\u7528\u4f8b2\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u521b\u5efa"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n\u540e\u9762\u52a0\u5bc6\u7684\u5185\u5bb9\u53ef\u4ee5\u901a\u8fc7PASSWORD()\u83b7\u5f97\u5230,\u4f8b\u5982\uff1a\nSELECT PASSWORD('123456');\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5141\u8bb8\u4ece '192.168' \u5b50\u7f51\u767b\u9646\u7684\u7528\u6237\uff0c\u540c\u65f6\u6307\u5b9a\u5176\u89d2\u8272\u4e3a example_role"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5141\u8bb8\u4ece\u57df\u540d 'example_domain' \u767b\u9646\u7684\u7528\u6237"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '12345';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff0c\u5e76\u6307\u5b9a\u4e00\u4e2a\u89d2\u8272"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff0c\u8bbe\u5b9a\u5bc6\u780110\u5929\u540e\u8fc7\u671f\uff0c\u5e76\u4e14\u8bbe\u7f6e\u5982\u679c3\u6b21\u9519\u8bef\u767b\u5f55\u5219\u8d26\u6237\u4f1a\u88ab\u9501\u5b9a\u4e00\u5929\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack' IDENTIFIED BY '12345' PASSWORD_EXPIRE INTERVAL 10 DAY FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff0c\u5e76\u9650\u5236\u4e0d\u53ef\u91cd\u7f6e\u5bc6\u7801\u4e3a\u6700\u8fd18\u6b21\u662f\u7528\u8fc7\u7684\u5bc6\u7801\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack' IDENTIFIED BY '12345' PASSWORD_HISTORY 8;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, USER\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);