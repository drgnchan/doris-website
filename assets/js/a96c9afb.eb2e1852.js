"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31616],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>f});var o=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),u=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||y[d]||s;return t?o.createElement(f,a(a({ref:n},c),{},{components:t})):o.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<s;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=t(45072),r=(t(11504),t(95788));const s={title:"GET_JSON_DOUBLE",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/get-json-double",id:"version-2.0/sql-manual/sql-functions/json-functions/get-json-double",title:"GET_JSON_DOUBLE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/json-functions/get-json-double.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/get-json-double",permalink:"/docs/sql-manual/sql-functions/json-functions/get-json-double",draft:!1,tags:[],version:"2.0",frontMatter:{title:"GET_JSON_DOUBLE",language:"en"},sidebar:"docs",previous:{title:"JSON_LENGTH",permalink:"/docs/sql-manual/sql-functions/json-functions/json-length"},next:{title:"GET_JSON_INT",permalink:"/docs/sql-manual/sql-functions/json-functions/get-json-int"}},i={},u=[{value:"get_json_double",id:"get_json_double",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"get_json_double"},"get_json_double"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"DOUBLE get_json_double(VARCHAR json_str, VARCHAR json_path)")),(0,r.yg)("p",null,'Parse and get the floating-point content of the specified path in the JSON string.\nWhere json_path must start with the $symbol and use. as the path splitter. If the path contains..., double quotation marks can be used to surround it.\nUse [] to denote array subscripts, starting at 0.\nThe content of path cannot contain ",',"[and]",".\nIf the json_string format is incorrect, or the json_path format is incorrect, or matches cannot be found, NULL is returned."),(0,r.yg)("p",null,"In addition, it is recommended to use the jsonb type and jsonb_extract_XXX function performs the same function."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Get the value of key as "k1"')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_double(\'{"k1":1.3, "k2":"2"}\', "$.k1");\n+-------------------------------------------------+\n| get_json_double(\'{"k1":1.3, "k2":"2"}\', \'$.k1\') |\n+-------------------------------------------------+\n|                                             1.3 |\n+-------------------------------------------------+\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},'Get the second element of the array whose key is "my. key"')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\');\n+---------------------------------------------------------------------------+\n| get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------+\n|                                                                       2.2 |\n+---------------------------------------------------------------------------+\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Get the first element in an array whose secondary path is k1. key - > K2")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\');\n+---------------------------------------------------------------------+\n| get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\') |\n+---------------------------------------------------------------------+\n|                                                                 1.1 |\n+---------------------------------------------------------------------+\n')),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"GET_JSON_DOUBLE,GET,JSON,DOUBLE"))}y.isMDXComponent=!0}}]);