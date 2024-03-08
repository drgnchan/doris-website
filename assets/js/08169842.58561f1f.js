"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52019],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var t=r(296540);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=s,f=p["".concat(i,".").concat(d)]||p[d]||y[d]||o;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function f(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},234170:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(58168),s=(r(296540),r(15680));const o={title:"REVERSE",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/reverse",id:"version-2.1/sql-manual/sql-functions/string-functions/reverse",title:"REVERSE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/reverse.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/reverse",permalink:"/docs/sql-manual/sql-functions/string-functions/reverse",draft:!1,tags:[],version:"2.1",frontMatter:{title:"REVERSE",language:"en"},sidebar:"docs",previous:{title:"REPEAT",permalink:"/docs/sql-manual/sql-functions/string-functions/repeat"},next:{title:"CHAR",permalink:"/docs/sql-manual/sql-functions/string-functions/char"}},i={},c=[{value:"reverse",id:"reverse",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...r}=e;return(0,s.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"reverse"},"reverse"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},"VARCHAR reverse(VARCHAR str)\nARRAY<T> reverse(ARRAY<T> arr)\n")),(0,s.yg)("p",null,"The REVERSE() function reverses a string or array and returns the result."),(0,s.yg)("h3",{id:"notice"},"notice"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"For the array type, only supported in vectorized engine")),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> SELECT REVERSE('hello');\n+------------------+\n| REVERSE('hello') |\n+------------------+\n| olleh            |\n+------------------+\n1 row in set (0.00 sec)\n\nmysql> SELECT REVERSE('\u4f60\u597d');\n+------------------+\n| REVERSE('\u4f60\u597d')   |\n+------------------+\n| \u597d\u4f60              |\n+------------------+\n1 row in set (0.00 sec)\n\nmysql> set enable_vectorized_engine=true;\n\nmysql> select k1, k2, reverse(k2) from array_test order by k1;\n+------+-----------------------------+-----------------------------+\n| k1   | k2                          | reverse(`k2`)               |\n+------+-----------------------------+-----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | [5, 4, 3, 2, 1]             |\n|  2   | [6, 7, 8]                   | [8, 7, 6]                   |\n|  3   | []                          | []                          |\n|  4   | NULL                        | NULL                        |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [1, 2, 3, 4, 5, 4, 3, 2, 1] |\n|  6   | [1, 2, 3, NULL]             | [NULL, 3, 2, 1]             |\n|  7   | [4, 5, 6, NULL, NULL]       | [NULL, NULL, 6, 5, 4]       |\n+------+-----------------------------+-----------------------------+\n\nmysql> select k1, k2, reverse(k2) from array_test01 order by k1;\n+------+-----------------------------------+-----------------------------------+\n| k1   | k2                                | reverse(`k2`)                     |\n+------+-----------------------------------+-----------------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | ['d', 'c', 'b', 'a']              |\n|  2   | ['e', 'f', 'g', 'h']              | ['h', 'g', 'f', 'e']              |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | ['c', NULL, 'b', NULL, 'a', NULL] |\n|  4   | ['d', 'e', NULL, ' ']             | [' ', NULL, 'e', 'd']             |\n|  5   | [' ', NULL, 'f', 'g']             | ['g', 'f', NULL, ' ']             |\n+------+-----------------------------------+-----------------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"REVERSE, ARRAY\n")))}y.isMDXComponent=!0}}]);