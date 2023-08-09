"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89821],{3905:(r,e,t)=>{t.d(e,{Zo:()=>y,kt:()=>f});var n=t(67294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function s(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function l(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var c=n.createContext({}),i=function(r){var e=n.useContext(c),t=e;return r&&(t="function"==typeof r?r(e):s(s({},e),r)),t},y=function(r){var e=i(r.components);return n.createElement(c.Provider,{value:e},r.children)},u="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,o=r.originalType,c=r.parentName,y=l(r,["components","mdxType","originalType","parentName"]),u=i(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return t?n.createElement(f,s(s({ref:e},y),{},{components:t})):n.createElement(f,s({ref:e},y))}));function f(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=r,l[u]="string"==typeof r?r:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15283:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=t(87462),a=(t(67294),t(3905));const o={title:"ARRAY_SORTBY",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array-sortby",id:"sql-manual/sql-functions/array-functions/array-sortby",title:"ARRAY_SORTBY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-sortby.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-sortby",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-sortby",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_SORTBY",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_REVERSE_SORT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-reverse-sort"},next:{title:"ARRAY_POSITION",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-position"}},c={},i=[{value:"array_sortby",id:"array_sortby",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:i},u="wrapper";function p(r){let{components:e,...t}=r;return(0,a.kt)(u,(0,n.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_sortby"},"array_sortby"),(0,a.kt)("version",{since:"2.0"},(0,a.kt)("p",null,"array_sortby")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_sortby(ARRAY<T> src,Array<T> key)\nARRAY<T> array_sortby(lambda,array....)\n")),(0,a.kt)("p",null,"\u9996\u5148\u5c06key\u5217\u5347\u5e8f\u6392\u5217\uff0c\u7136\u540e\u5c06src\u5217\u6309\u6b64\u987a\u5e8f\u6392\u5e8f\u540e\u7684\u5bf9\u5e94\u5217\u505a\u4e3a\u7ed3\u679c\u8fd4\u56de;\n\u5982\u679c\u8f93\u5165\u6570\u7ec4src\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\u3002\n\u5982\u679c\u8f93\u5165\u6570\u7ec4key\u4e3aNULL\uff0c\u5219\u76f4\u63a5\u8fd4\u56desrc\u6570\u7ec4\u3002\n\u5982\u679c\u8f93\u5165\u6570\u7ec4key\u5143\u7d20\u5305\u542bNULL, \u5219\u8f93\u51fa\u7684\u6392\u5e8f\u6570\u7ec4\u4f1a\u5c06NULL\u653e\u5728\u6700\u524d\u9762\u3002"),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql [test]>select array_sortby(['a','b','c'],[3,2,1]);\n+----------------------------------------------------+\n| array_sortby(ARRAY('a', 'b', 'c'), ARRAY(3, 2, 1)) |\n+----------------------------------------------------+\n| ['c', 'b', 'a']                                    |\n+----------------------------------------------------+\n\nmysql [test]>select array_sortby([1,2,3,4,5],[10,5,1,20,80]);\n+-------------------------------------------------------------+\n| array_sortby(ARRAY(1, 2, 3, 4, 5), ARRAY(10, 5, 1, 20, 80)) |\n+-------------------------------------------------------------+\n| [3, 2, 1, 4, 5]                                             |\n+-------------------------------------------------------------+\n\nmysql [test]>select *,array_sortby(c_array1,c_array2) from test_array_sortby order by id;\n+------+-----------------+-------------------------+--------------------------------------+\n| id   | c_array1        | c_array2                | array_sortby(`c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+--------------------------------------+\n|    0 | NULL            | [2]                     | NULL                                 |\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [5, 3, 1, 2, 4]                      |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [6, 7, 8]                            |\n|    3 | [1]             | [-100]                  | [1]                                  |\n|    4 | NULL            | NULL                    | NULL                                 |\n|    5 | [3]             | NULL                    | [3]                                  |\n|    6 | [1, 2]          | [2, 1]                  | [2, 1]                               |\n|    7 | [NULL]          | [NULL]                  | [NULL]                               |\n|    8 | [1, 2, 3]       | [3, 2, 1]               | [3, 2, 1]                            |\n+------+-----------------+-------------------------+--------------------------------------+\n\nmysql [test]>select *, array_map((x,y)->(y+x),c_array1,c_array2) as arr_sum,array_sortby((x,y)->(y+x),c_array1,c_array2) as arr_sort from array_test2;\n+------+-----------------+--------------+----------------+-----------------+\n| id   | c_array1        | c_array2     | arr_sum        | arr_sort        |\n+------+-----------------+--------------+----------------+-----------------+\n|    1 | [1, 2, 3]       | [10, 11, 12] | [11, 13, 15]   | [1, 2, 3]       |\n|    2 | [4, 3, 5]       | [10, 20, 30] | [14, 23, 35]   | [4, 3, 5]       |\n|    3 | [-40, 30, -100] | [30, 10, 20] | [-10, 40, -80] | [-100, -40, 30] |\n+------+-----------------+--------------+----------------+-----------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY, SORT, ARRAY_SORTBY"))}p.isMDXComponent=!0}}]);