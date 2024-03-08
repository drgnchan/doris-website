"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[47389],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),y=r,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||l;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},197725:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const l={title:"ALTER-USER",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",title:"ALTER-USER",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/ALTER-USER",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ALTER-USER",language:"en"},sidebar:"docs",previous:{title:"SET-PASSWORD",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD"},next:{title:"ALTER-SYSTEM-DROP-FOLLOWER",permalink:"/docs/1.2/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER"}},s={},p=[{value:"ALTER USER",id:"alter-user",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-user"},"ALTER USER"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER USER"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"The ALTER USER command is used to modify a user's account attributes, including passwords, and password policies, etc."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note that."),(0,r.yg)("p",{parentName:"blockquote"},"This command give over supports modifying user roles from versions 2.0. Please use ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/GRANT"},"GRANT")," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/REVOKE"},"REVOKE")," for related operations")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER USER [IF EXISTS] user_identity [IDENTIFIED BY 'password']\n[password_policy]\n\nuser_identity:\n    'user_name'@'host'\n\npassword_policy:\n\n    1. PASSWORD_HISTORY [n|DEFAULT]\n    2. PASSWORD_EXPIRE [DEFAULT|NEVER|INTERVAL n DAY/HOUR/SECOND]\n    3. FAILED_LOGIN_ATTEMPTS n\n    4. PASSWORD_LOCK_TIME [n DAY/HOUR/SECOND|UNBOUNDED]\n    5. ACCOUNT_UNLOCK\n")),(0,r.yg)("p",null,"About ",(0,r.yg)("inlineCode",{parentName:"p"},"user_identity")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"password_policy"),", Please refer to ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE USER"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ACCOUNT_UNLOCK")," is used to unlock a locked user."),(0,r.yg)("p",null,"In an ALTER USER command, only one of the following account attributes can be modified at the same time:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Change password"),(0,r.yg)("li",{parentName:"ol"},"Modify ",(0,r.yg)("inlineCode",{parentName:"li"},"PASSWORD_HISTORY")),(0,r.yg)("li",{parentName:"ol"},"Modify ",(0,r.yg)("inlineCode",{parentName:"li"},"PASSWORD_EXPIRE")),(0,r.yg)("li",{parentName:"ol"},"Modify ",(0,r.yg)("inlineCode",{parentName:"li"},"FAILED_LOGIN_ATTEMPTS")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"PASSWORD_LOCK_TIME")),(0,r.yg)("li",{parentName:"ol"},"Unlock users")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Change the user's password"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'ALTER USER jack@\u2018%\u2019 IDENTIFIED BY "12345";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the user's password policy"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ALTER USER jack@'%' FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Unlock a user"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ALTER USER jack@'%' ACCOUNT_UNLOCK\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER, USER\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the password policy"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_EXPIRE")," will reset the timing of password expiration time.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify ",(0,r.yg)("inlineCode",{parentName:"p"},"FAILED_LOGIN_ATTEMPTS")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"PASSWORD_LOCK_TIME")," will unlock the user."))))))}u.isMDXComponent=!0}}]);