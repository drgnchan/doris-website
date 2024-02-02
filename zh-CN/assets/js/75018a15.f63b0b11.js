"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29832],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>f});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=o,f=p["".concat(a,".").concat(g)]||p[g]||y[g]||i;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=g;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},48260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const i={title:"GET_JSON_BIGINT",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/get-json-bigint",id:"sql-manual/sql-functions/json-functions/get-json-bigint",title:"GET_JSON_BIGINT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/get-json-bigint.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/get-json-bigint",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get-json-bigint",draft:!1,tags:[],version:"current",frontMatter:{title:"GET_JSON_BIGINT",language:"zh-CN"},sidebar:"docs",previous:{title:"GET_JSON_INT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get-json-int"},next:{title:"GET_JSON_STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get-json-string"}},a={},c=[{value:"get_json_bigint",id:"get_json_bigint",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"get_json_bigint"},"get_json_bigint"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT get_json_bigint(VARCHAR json_str, VARCHAR json_path)")),(0,o.yg)("p",null,"\u89e3\u6790\u5e76\u83b7\u53d6 json \u5b57\u7b26\u4e32\u5185\u6307\u5b9a\u8def\u5f84\u7684\u6574\u578b(BIGINT)\u5185\u5bb9\u3002\n\u5176\u4e2d json_path \u5fc5\u987b\u4ee5 $ \u7b26\u53f7\u4f5c\u4e3a\u5f00\u5934\uff0c\u4f7f\u7528 . \u4f5c\u4e3a\u8def\u5f84\u5206\u5272\u7b26\u3002\u5982\u679c\u8def\u5f84\u4e2d\u5305\u542b . \uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u53cc\u5f15\u53f7\u5305\u56f4\u3002\n\u4f7f\u7528 ","[ ]",' \u8868\u793a\u6570\u7ec4\u4e0b\u6807\uff0c\u4ece 0 \u5f00\u59cb\u3002\npath \u7684\u5185\u5bb9\u4e0d\u80fd\u5305\u542b ", ',"[ \u548c ]","\u3002\n\u5982\u679c json_string \u683c\u5f0f\u4e0d\u5bf9\uff0c\u6216 json_path \u683c\u5f0f\u4e0d\u5bf9\uff0c\u6216\u65e0\u6cd5\u627e\u5230\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,o.yg)("p",null,"\u53e6\u5916\uff0c\u63a8\u8350\u4f7f\u7528jsonb\u7c7b\u578b\u548cjsonb_extract_XXX\u51fd\u6570\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'\u83b7\u53d6 key \u4e3a "k1" \u7684 value')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_bigint(\'{"k1":1, "k2":"2"}\', "$.k1");\n+-----------------------------------------------+\n| get_json_bigint(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+-----------------------------------------------+\n|                                             1 |\n+-----------------------------------------------+\n')),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},'\u83b7\u53d6 key \u4e3a "my.key" \u7684\u6570\u7ec4\u4e2d\u7b2c\u4e8c\u4e2a\u5143\u7d20')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$."my.key"[1]\');\n+---------------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------------+\n|                                                                   1678708107000 |\n+---------------------------------------------------------------------------------+\n')),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"\u83b7\u53d6\u4e8c\u7ea7\u8def\u5f84\u4e3a k1.key -> k2 \u7684\u6570\u7ec4\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$."k1.key".k2[0]\');\n+-----------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------------+\n|                                                               1678708107000 |\n+-----------------------------------------------------------------------------+\n')),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"GET_JSON_BIGINT,GET,JSON,BIGINT"))}y.isMDXComponent=!0}}]);