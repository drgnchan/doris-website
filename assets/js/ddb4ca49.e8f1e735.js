"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89808],{95788:(e,n,t)=>{t.d(n,{Iu:()=>g,yg:()=>m});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(t),y=a,m=p["".concat(c,".").concat(y)]||p[y]||u[y]||o;return t?r.createElement(m,i(i({ref:n},g),{},{components:t})):r.createElement(m,i({ref:n},g))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},85648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(45072),a=(t(11504),t(95788));const o={title:"BITMAP_AGG",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/bitmap_agg",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/bitmap_agg",title:"BITMAP_AGG",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/aggregate-functions/bitmap_agg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/bitmap_agg",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/bitmap_agg",draft:!1,tags:[],version:"2.0",frontMatter:{title:"BITMAP_AGG",language:"en"}},c={},s=[{value:"BITMAP_AGG",id:"bitmap_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],g={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.c)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_agg"},"BITMAP_AGG"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP_AGG(expr)")),(0,a.yg)("p",null,"This aggregating function returns a bitmap that aggregates the values of expr, excluding any null values.\nThe type of expr needs to be TINYINT, SMALLINT, INT, or BIGINT."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL > select `n_nationkey`, `n_name`, `n_regionkey` from `nation`;\n+-------------+----------------+-------------+\n| n_nationkey | n_name         | n_regionkey |\n+-------------+----------------+-------------+\n|           0 | ALGERIA        |           0 |\n|           1 | ARGENTINA      |           1 |\n|           2 | BRAZIL         |           1 |\n|           3 | CANADA         |           1 |\n|           4 | EGYPT          |           4 |\n|           5 | ETHIOPIA       |           0 |\n|           6 | FRANCE         |           3 |\n|           7 | GERMANY        |           3 |\n|           8 | INDIA          |           2 |\n|           9 | INDONESIA      |           2 |\n|          10 | IRAN           |           4 |\n|          11 | IRAQ           |           4 |\n|          12 | JAPAN          |           2 |\n|          13 | JORDAN         |           4 |\n|          14 | KENYA          |           0 |\n|          15 | MOROCCO        |           0 |\n|          16 | MOZAMBIQUE     |           0 |\n|          17 | PERU           |           1 |\n|          18 | CHINA          |           2 |\n|          19 | ROMANIA        |           3 |\n|          20 | SAUDI ARABIA   |           4 |\n|          21 | VIETNAM        |           2 |\n|          22 | RUSSIA         |           3 |\n|          23 | UNITED KINGDOM |           3 |\n|          24 | UNITED STATES  |           1 |\n+-------------+----------------+-------------+\n\nMySQL > select n_regionkey, bitmap_to_string(bitmap_agg(n_nationkey)) from nation group by n_regionkey;\n+-------------+---------------------------------------------+\n| n_regionkey | bitmap_to_string(bitmap_agg(`n_nationkey`)) |\n+-------------+---------------------------------------------+\n|           4 | 4,10,11,13,20                               |\n|           2 | 8,9,12,18,21                                |\n|           1 | 1,2,3,17,24                                 |\n|           0 | 0,5,14,15,16                                |\n|           3 | 6,7,19,22,23                                |\n+-------------+---------------------------------------------+\n\nMySQL > select bitmap_count(bitmap_agg(n_nationkey))  from nation;\n+-----------------------------------------+\n| bitmap_count(bitmap_agg(`n_nationkey`)) |\n+-----------------------------------------+\n|                                      25 |\n+-----------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"BITMAP_AGG"))}u.isMDXComponent=!0}}]);