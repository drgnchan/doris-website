"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24628],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>v});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,v=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return t?r.createElement(v,l(l({ref:n},u),{},{components:t})):r.createElement(v,l({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},56488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={title:"json_valid",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json_valid",id:"version-1.2/sql-manual/sql-functions/json-functions/json_valid",title:"json_valid",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/json-functions/json_valid.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_valid",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/json_valid",draft:!1,tags:[],version:"1.2",frontMatter:{title:"json_valid",language:"en"},sidebar:"docs",previous:{title:"json_unquote",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/json_unquote"},next:{title:"json_extract",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/json_extract"}},s={},c=[{value:"json_valid",id:"json_valid",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"json_valid"},"json_valid"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"json_valid functions returns 0 or 1 to indicate whether a value is valid JSON and Returns NULL if the argument is NULL."),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"JSONB json_valid(VARCHAR json_str)")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"parse valid JSON string")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'MySQL > SELECT json_valid(\'{"k1":"v31","k2":300}\');\n+-------------------------------------+\n| json_valid(\'{"k1":"v31","k2":300}\') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n1 row in set (0.02 sec)\n')),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"parse invalid JSON string")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > SELECT json_valid('invalid json');\n+----------------------------+\n| json_valid('invalid json') |\n+----------------------------+\n|                          0 |\n+----------------------------+\n1 row in set (0.02 sec)\n")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"parse NULL")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > select json_valid(NULL);\n+------------------+\n| json_valid(NULL) |\n+------------------+\n|             NULL |\n+------------------+\n1 row in set (0.02 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"JSON, VALID, JSON_VALID"))}d.isMDXComponent=!0}}]);