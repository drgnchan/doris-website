"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78096],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(45072),l=(t(11504),t(95788));const i={title:"multi_search_all_positions",language:"zh-CN"},o=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/search/multi_search_all_positions",id:"version-1.2/sql-manual/sql-functions/string-functions/search/multi_search_all_positions",title:"multi_search_all_positions",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/search/multi_search_all_positions.md",sourceDirName:"sql-manual/sql-functions/string-functions/search",slug:"/sql-manual/sql-functions/string-functions/search/multi_search_all_positions",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/search/multi_search_all_positions",draft:!1,tags:[],version:"1.2",frontMatter:{title:"multi_search_all_positions",language:"zh-CN"},sidebar:"docs",previous:{title:"mask_last_n",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/mask/mask_last_n"},next:{title:"multi_match_any",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/search/multi_match_any"}},s={},c=[{value:"multi_search_all_positions",id:"multi_search_all_positions",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"multi_search_all_positions"},"multi_search_all_positions"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ARRAY<INT> multi_search_all_positions(VARCHAR haystack, ARRAY<VARCHAR> needles)")),(0,l.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a ",(0,l.yg)("inlineCode",{parentName:"p"},"ARRAY"),"\uff0c\u5176\u4e2d\u7b2c ",(0,l.yg)("inlineCode",{parentName:"p"},"i")," \u4e2a\u5143\u7d20\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"needles")," \u4e2d\u7b2c ",(0,l.yg)("inlineCode",{parentName:"p"},"i")," \u4e2a\u5143\u7d20 ",(0,l.yg)("inlineCode",{parentName:"p"},"needle"),"\uff0c\u5728\u5b57\u7b26\u4e32 ",(0,l.yg)("inlineCode",{parentName:"p"},"haystack")," \u4e2d",(0,l.yg)("strong",{parentName:"p"},"\u9996\u6b21"),"\u51fa\u73b0\u7684\u4f4d\u7f6e\u3002\u4f4d\u7f6e\u4ece1\u5f00\u59cb\u8ba1\u6570\uff0c0\u4ee3\u8868\u672a\u627e\u5230\u8be5\u5143\u7d20\u3002",(0,l.yg)("strong",{parentName:"p"},"\u5927\u5c0f\u5199\u654f\u611f"),"\u3002"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select multi_search_all_positions('Hello, World!', ['hello', '!', 'world']);\n+----------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ['hello', '!', 'world']) |\n+----------------------------------------------------------------------+\n| [0,13,0]                                                             |\n+----------------------------------------------------------------------+\n\nselect multi_search_all_positions(\"Hello, World!\", ['hello', '!', 'world', 'Hello', 'World']);\n+---------------------------------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ARRAY('hello', '!', 'world', 'Hello', 'World')) |\n+---------------------------------------------------------------------------------------------+\n| [0, 13, 0, 1, 8]                                                                            |\n+---------------------------------------------------------------------------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"MULTI_SEARCH,SEARCH,POSITIONS\n")))}m.isMDXComponent=!0}}]);