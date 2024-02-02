"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46776],{95788:(e,r,n)=>{n.d(r,{Iu:()=>c,yg:()=>v});var a=n(11504);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),y=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=y(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=y(n),p=t,v=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(v,l(l({ref:r},c),{},{components:n})):a.createElement(v,l({ref:r},c))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:t,l[1]=i;for(var y=2;y<o;y++)l[y]=n[y];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},784:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>y});var a=n(45072),t=(n(11504),n(95788));const o={title:"array_remove",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array_remove",id:"version-1.2/sql-manual/sql-functions/array-functions/array_remove",title:"array_remove",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_remove.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_remove",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_remove",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_remove",language:"en"},sidebar:"docs",previous:{title:"array_size",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_size"},next:{title:"array_slice",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_slice"}},s={},y=[{value:"array_remove",id:"array_remove",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:y},u="wrapper";function m(e){let{components:r,...n}=e;return(0,t.yg)(u,(0,a.c)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_remove"},"array_remove"),(0,t.yg)("version",{since:"1.2.0"},(0,t.yg)("p",null,"array_remove")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_remove(ARRAY<T> arr, T val)")),(0,t.yg)("p",null,"Remove all elements that equal to element from array."),(0,t.yg)("h3",{id:"notice"},"notice"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select array_remove(['test', NULL, 'value'], 'value');\n+-----------------------------------------------------+\n| array_remove(ARRAY('test', NULL, 'value'), 'value') |\n+-----------------------------------------------------+\n| [test, NULL]                                        |\n+-----------------------------------------------------+\n\nmysql> select k1, k2, array_remove(k2, 1) from array_type_table_1;\n+------+--------------------+-----------------------+\n| k1   | k2                 | array_remove(`k2`, 1) |\n+------+--------------------+-----------------------+\n|    1 | [1, 2, 3]          | [2, 3]                |\n|    2 | [1, 3]             | [3]                   |\n|    3 | NULL               | NULL                  |\n|    4 | [1, 3]             | [3]                   |\n|    5 | [NULL, 1, NULL, 2] | [NULL, NULL, 2]       |\n+------+--------------------+-----------------------+\n\nmysql> select k1, k2, array_remove(k2, k1) from array_type_table_1;\n+------+--------------------+--------------------------+\n| k1   | k2                 | array_remove(`k2`, `k1`) |\n+------+--------------------+--------------------------+\n|    1 | [1, 2, 3]          | [2, 3]                   |\n|    2 | [1, 3]             | [1, 3]                   |\n|    3 | NULL               | NULL                     |\n|    4 | [1, 3]             | [1, 3]                   |\n|    5 | [NULL, 1, NULL, 2] | [NULL, 1, NULL, 2]       |\n+------+--------------------+--------------------------+\n\nmysql> select k1, k2, array_remove(k2, date('2022-10-10')) from array_type_table_date;\n+------+--------------------------+-------------------------------------------------+\n| k1   | k2                       | array_remove(`k2`, date('2022-10-10 00:00:00')) |\n+------+--------------------------+-------------------------------------------------+\n|    1 | [2021-10-10, 2022-10-10] | [2021-10-10]                                    |\n|    2 | [NULL, 2022-05-14]       | [NULL, 2022-05-14]                              |\n+------+--------------------------+-------------------------------------------------+\n\nmysql> select k1, k2, array_remove(k2, k1) from array_type_table_nullable;\n+------+-----------+--------------------------+\n| k1   | k2        | array_remove(`k2`, `k1`) |\n+------+-----------+--------------------------+\n| NULL | [1, 2, 3] | NULL                     |\n|    1 | NULL      | NULL                     |\n| NULL | [NULL, 1] | NULL                     |\n|    1 | [NULL, 1] | [NULL]                   |\n+------+-----------+--------------------------+\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,REMOVE,ARRAY_REMOVE"))}m.isMDXComponent=!0}}]);