"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56800],{95788:(e,r,n)=>{n.d(r,{Iu:()=>i,yg:()=>y});var t=n(11504);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},i=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||s;return n?t.createElement(y,l(l({ref:r},i),{},{components:n})):t.createElement(y,l({ref:r},i))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,l=new Array(s);l[0]=f;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<s;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65372:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(45072),o=(n(11504),n(95788));const s={title:"resource_groups",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/table-functions/resource-group",id:"version-1.2/sql-manual/sql-functions/table-functions/resource-group",title:"resource_groups",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/table-functions/resource-group.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/resource-group",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/resource-group",draft:!1,tags:[],version:"1.2",frontMatter:{title:"resource_groups",language:"zh-CN"},sidebar:"docs",previous:{title:"backends",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/backends"},next:{title:"WINDOW-FUNCTION-LAG",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG"}},u={},c=[{value:"<code>resource_groups</code>",id:"resource_groups",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:c},p="wrapper";function d(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.c)({},i,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"resource_groups"},(0,o.yg)("inlineCode",{parentName:"h2"},"resource_groups")),(0,o.yg)("h3",{id:"name"},"Name"),(0,o.yg)("version",{since:"dev"},(0,o.yg)("p",null,"resource_groups")),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210 resource_groups \u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u8d44\u6e90\u7ec4\u4fe1\u606f\u3002"),(0,o.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8efrom\u5b50\u53e5\u4e2d\u3002"),(0,o.yg)("h4",{id:"syntax"},"syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"resource_groups()")),(0,o.yg)("p",null,"resource_groups()\u8868\u7ed3\u6784\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> desc function resource_groups();\n+-------+-------------+------+-------+---------+-------+\n| Field | Type        | Null | Key   | Default | Extra |\n+-------+-------------+------+-------+---------+-------+\n| Id    | BIGINT      | No   | false | NULL    | NONE  |\n| Name  | VARCHAR(64) | No   | false | NULL    | NONE  |\n| Item  | VARCHAR(64) | No   | false | NULL    | NONE  |\n| Value | INT         | No   | false | NULL    | NONE  |\n+-------+-------------+------+-------+---------+-------+\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from resource_groups()\\G\n+-------+------------+-----------+-------+\n| Id    | Name       | Item      | Value |\n+-------+------------+-----------+-------+\n| 10076 | group_name | cpu_share |     1 |\n| 10077 | group_test | cpu_share |    10 |\n+-------+------------+-----------+-------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"resource_groups\n")))}d.isMDXComponent=!0}}]);