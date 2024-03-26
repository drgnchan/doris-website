"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1685],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),g=n,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||i;return t?r.createElement(d,o(o({ref:a},u),{},{components:t})):r.createElement(d,o({ref:a},u))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},16293:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),n=(t(296540),t(15680));const i={title:"Apache Doris 2.0.7 just released",summary:"Thanks to our community users and developers, about 80 improvements and bug fixes have been made in Doris 2.0.7 version.",date:"2024-03-26",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.7.png"},o=void 0,l={permalink:"/blog/release-note-2.0.7",source:"@site/blog/release-note-2.0.7.md",title:"Apache Doris 2.0.7 just released",description:"\x3c!--",date:"2024-03-26T00:00:00.000Z",formattedDate:"March 26, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris 2.0.7 just released",summary:"Thanks to our community users and developers, about 80 improvements and bug fixes have been made in Doris 2.0.7 version.",date:"2024-03-26",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.7.png"},nextItem:{title:"Variant in Apache Doris 2.1.0: a new data type 8 times faster than JSON for semi-structured data analysis",permalink:"/blog/variant-in-apache-doris-2.1"}},p={authorsImageUrls:[void 0]},s=[{value:"1 Behavior change",id:"1-behavior-change",level:2},{value:"2 New features",id:"2-new-features",level:2},{value:"3 Improvement and optimizations",id:"3-improvement-and-optimizations",level:2},{value:"4 Credits",id:"4-credits",level:2}],u={toc:s},m="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Thanks to our community users and developers, about 80 improvements and bug fixes have been made in Doris 2.0.7 version."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,n.yg)("h2",{id:"1-behavior-change"},"1 Behavior change"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"round")," function defaults to rounding normally as MySQL, eg. round(5/2) return 3 instead of 2."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31583"},"https://github.com/apache/doris/pull/31583")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"round")," datetime with scale from string literal as MySQL, eg. round '2023-10-12 14:31:49.666' to '2023-10-12 14:31:50' ."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27965"},"https://github.com/apache/doris/pull/27965")," ")))),(0,n.yg)("h2",{id:"2-new-features"},"2 New features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support make miss slot as null alias when converting outer join to anti join to speed up query"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31854"},"https://github.com/apache/doris/pull/31854")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Enable proxy protocol to support IP transparency for Nginx and HAProxy."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32338"},"https://github.com/apache/doris/pull/32338"))))),(0,n.yg)("h2",{id:"3-improvement-and-optimizations"},"3 Improvement and optimizations"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add DEFAULT_ENCRYPTION column in ",(0,n.yg)("inlineCode",{parentName:"p"},"information_schema")," table and add ",(0,n.yg)("inlineCode",{parentName:"p"},"processlist")," table for better compatibility for BI tools")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Automatically test connectivity by default when creating a JDBC Catalog.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Enhance auto resume to keep routine load stable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Use lowercase by default for Chinese tokenizer in inverted index")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add error msg if exceeded maximum default value in repeat function")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Skip hidden file and dir in Hive table")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Reduce file meta cache size and disable cache for some cases to avoid OOM")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Reduce jvm heap memory consumed by profiles of BrokerLoadJob")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Remove sort which is under table sink to speed up query like ",(0,n.yg)("inlineCode",{parentName:"p"},"INSERT INTO t1 SELECT * FROM t2 ORDER BY k"),"."))),(0,n.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.6...2.0.7"},"github")," ."),(0,n.yg)("h2",{id:"4-credits"},"4 Credits"),(0,n.yg)("p",null,"Thanks all who contribute to this release:"),(0,n.yg)("p",null,"924060929,airborne12,amorynan,ByteYue,dataroaring,deardeng,feiniaofeiafei,felixwluo,freemandealer,gavinchou,hello-stephen,HHoflittlefish777,jacktengg,jackwener,jeffreys-cat,Jibing-Li,KassieZ,LiBinfeng-01,luwei16,morningman,mrhhsg,Mryange,nextdreamblue,platoneko,qidaye,rohitrs1983,seawinde,shuke987,starocean999,SWJTU-ZhangLei,w41ter,wsjz,wuwenchi,xiaokang,XieJiann,XuJianxu,yujun777,Yulei-Yang,zhangstar333,zhiqiang-hhhh,zy-kkk,zzzxl1993"))}c.isMDXComponent=!0}}]);