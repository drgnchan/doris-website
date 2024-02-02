"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74123],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>d});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,d=p["".concat(a,".").concat(f)]||p[f]||g[f]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(45072),i=(n(11504),n(95788));const s={title:"STRRIGHT",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/strright",id:"sql-manual/sql-functions/string-functions/strright",title:"STRRIGHT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/strright.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/strright",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/strright",draft:!1,tags:[],version:"current",frontMatter:{title:"STRRIGHT",language:"en"},sidebar:"docs",previous:{title:"STRLEFT",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/strleft"},next:{title:"SPLIT_PART",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/split-part"}},a={},c=[{value:"strright",id:"strright",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"strright"},"strright"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR strright (VARCHAR str, INT len)")),(0,i.yg)("p",null,"It returns the right part of a string of specified length, length is char length not the byte size. Another alias for this function is ",(0,i.yg)("inlineCode",{parentName:"p"},"right"),".\nIf the parameters contain a NULL value, the function will always return NULL. If the integer parameter is negative, the function will retrieve the portion of the string starting from the left and moving to the right, beginning at the absolute value of len."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select strright(\"Hello doris\",5);\n+-------------------------+\n| strright('Hello doris', 5) |\n+-------------------------+\n| doris                   |\n+-------------------------+\nmysql> select strright(\"Hello doris\",-7);\n+--------------------------+\n| strright('Hello doris', -7) |\n+--------------------------+\n| doris                    |\n+--------------------------+\nmysql> select strright(\"Hello doris\",NULL);\n+----------------------------+\n| strright('Hello doris', NULL) |\n+----------------------------+\n| NULL                       |\n+----------------------------+\nmysql> select strright(NULL,5);\n+----------------+\n| strright(NULL, 5) |\n+----------------+\n| NULL           |\n+----------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"STRRIGHT, RIGHT\n")))}g.isMDXComponent=!0}}]);