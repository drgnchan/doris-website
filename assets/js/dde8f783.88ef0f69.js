"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>O});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,O=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(O,o(o({ref:t},u),{},{components:n})):a.createElement(O,o({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"SHOW-CATALOGS",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",id:"sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",title:"SHOW-CATALOGS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOGS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CATALOGS",language:"en"},sidebar:"docs",previous:{title:"SHOW-BROKER",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-BROKER"},next:{title:"SHOW-CREATE-TABLE",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE"}},s={},c=[{value:"SHOW-CATALOGS",id:"show-catalogs",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"show-catalogs"},"SHOW-CATALOGS"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"SHOW CATALOGS"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used for view created catalogs"),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS [LIKE]\n")),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"LIKE: Fuzzy query can be performed according to the catalog name")),(0,r.kt)("p",null,"Return result:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CatalogId: Unique ID of the catalog"),(0,r.kt)("li",{parentName:"ul"},'CatalogName: Catalog name. where "internal" is the default built-in catalog, which cannot be modified.'),(0,r.kt)("li",{parentName:"ul"},"Type: Catalog type."),(0,r.kt)("li",{parentName:"ul"},"IsCurrent: Show yes on the line of current using catalog.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the data catalogs that have been created currently"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS;\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n | CatalogId | CatalogName | Type     | IsCurrent | CreateTime              | LastUpdateTime      | Comment                |\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n |    130100 | hive        | hms      |           | 2023-12-25 16:11:41.687 | 2023-12-25 20:43:18 | NULL                   |\n |         0 | internal    | internal | yes       | UNRECORDED              | NULL                | Doris internal catalog |\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n    ```\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fuzzy query by catalog name"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CATALOGS LIKE 'hi%';\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n | CatalogId | CatalogName | Type     | IsCurrent | CreateTime              | LastUpdateTime      | Comment                |\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n |    130100 | hive        | hms      |           | 2023-12-25 16:11:41.687 | 2023-12-25 20:43:18 | NULL                   |\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n    ```\n\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("p",null,"SHOW, CATALOG, CATALOGS"),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);