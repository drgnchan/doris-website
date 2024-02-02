"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[60124],{95788:(a,e,t)=>{t.d(e,{Iu:()=>u,yg:()=>m});var l=t(11504);function p(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,l)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){p(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function h(a,e){if(null==a)return{};var t,l,p=function(a,e){if(null==a)return{};var t,l,p={},i=Object.keys(a);for(l=0;l<i.length;l++)t=i[l],e.indexOf(t)>=0||(p[t]=a[t]);return p}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(l=0;l<i.length;l++)t=i[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(p[t]=a[t])}return p}var o=l.createContext({}),n=function(a){var e=l.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},u=function(a){var e=n(a.components);return l.createElement(o.Provider,{value:e},a.children)},s="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return l.createElement(l.Fragment,{},e)}},g=l.forwardRef((function(a,e){var t=a.components,p=a.mdxType,i=a.originalType,o=a.parentName,u=h(a,["components","mdxType","originalType","parentName"]),s=n(t),g=p,m=s["".concat(o,".").concat(g)]||s[g]||c[g]||i;return t?l.createElement(m,r(r({ref:e},u),{},{components:t})):l.createElement(m,r({ref:e},u))}));function m(a,e){var t=arguments,p=e&&e.mdxType;if("string"==typeof a||p){var i=t.length,r=new Array(i);r[0]=g;var h={};for(var o in e)hasOwnProperty.call(e,o)&&(h[o]=e[o]);h.originalType=a,h[s]="string"==typeof a?a:p,r[1]=h;for(var n=2;n<i;n++)r[n]=t[n];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},16208:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>h,toc:()=>n});var l=t(45072),p=(t(11504),t(95788));const i={title:"Apache Doris announced the official release of version 2.0.1",summary:"Dear community, Apache Doris has fixed 383 issues or performance improvements in version 2.0.1 based on 2.0.0, enabling smoother user experience.",date:"2023-09-04",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.1.png"},r=void 0,h={permalink:"/zh-CN/blog/release-note-2.0.1",source:"@site/blog/release-note-2.0.1.md",title:"Apache Doris announced the official release of version 2.0.1",description:"\x3c!--",date:"2023-09-04T00:00:00.000Z",formattedDate:"2023\u5e749\u67084\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 2.0.1",summary:"Dear community, Apache Doris has fixed 383 issues or performance improvements in version 2.0.1 based on 2.0.0, enabling smoother user experience.",date:"2023-09-04",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.1.png"},prevItem:{title:"Apache Doris announced the official release of version 1.2.7",permalink:"/zh-CN/blog/release-note-1.2.7"},nextItem:{title:"LLM-powered OLAP: the Tencent application with Apache Doris",permalink:"/zh-CN/blog/Tencent-LLM"}},o={authorsImageUrls:[void 0]},n=[{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"functionality and stability of array and map datatypes",id:"functionality-and-stability-of-array-and-map-datatypes",level:3},{value:"performance for inverted index query",id:"performance-for-inverted-index-query",level:3},{value:"performance for bitmap, like, scan, agg functions",id:"performance-for-bitmap-like-scan-agg-functions",level:3},{value:"functionality and stability of CCR",id:"functionality-and-stability-of-ccr",level:3},{value:"merge on write unique table",id:"merge-on-write-unique-table",level:3},{value:"optimizer table stats and analyze",id:"optimizer-table-stats-and-analyze",level:3},{value:"functionality and performance of multi catalog",id:"functionality-and-performance-of-multi-catalog",level:3},{value:"Important Bug fixes",id:"important-bug-fixes",level:2},{value:"Big Thanks",id:"big-thanks",level:2}],u={toc:n},s="wrapper";function c(a){let{components:e,...t}=a;return(0,p.yg)(s,(0,l.c)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,p.yg)("p",null,"Thanks to our community users and developers, 383 improvements and bug fixes have been made in Doris 2.0.1."),(0,p.yg)("h2",{id:"behavior-changes"},"Behavior Changes"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/21302"},"https://github.com/apache/doris/pull/21302"))),(0,p.yg)("h2",{id:"improvements"},"Improvements"),(0,p.yg)("h3",{id:"functionality-and-stability-of-array-and-map-datatypes"},"functionality and stability of array and map datatypes"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22793"},"https://github.com/apache/doris/pull/22793")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22927"},"https://github.com/apache/doris/pull/22927")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22738"},"https://github.com/apache/doris/pull/22738")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22347"},"https://github.com/apache/doris/pull/22347")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23250"},"https://github.com/apache/doris/pull/23250")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22300"},"https://github.com/apache/doris/pull/22300"))),(0,p.yg)("h3",{id:"performance-for-inverted-index-query"},"performance for inverted index query"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22836"},"https://github.com/apache/doris/pull/22836")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23381"},"https://github.com/apache/doris/pull/23381")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23389"},"https://github.com/apache/doris/pull/23389")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22570"},"https://github.com/apache/doris/pull/22570"))),(0,p.yg)("h3",{id:"performance-for-bitmap-like-scan-agg-functions"},"performance for bitmap, like, scan, agg functions"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23172"},"https://github.com/apache/doris/pull/23172")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23495"},"https://github.com/apache/doris/pull/23495")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23476"},"https://github.com/apache/doris/pull/23476")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23396"},"https://github.com/apache/doris/pull/23396")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23182"},"https://github.com/apache/doris/pull/23182")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22216"},"https://github.com/apache/doris/pull/22216"))),(0,p.yg)("h3",{id:"functionality-and-stability-of-ccr"},"functionality and stability of CCR"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22447"},"https://github.com/apache/doris/pull/22447")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22559"},"https://github.com/apache/doris/pull/22559")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22173"},"https://github.com/apache/doris/pull/22173")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22678"},"https://github.com/apache/doris/pull/22678"))),(0,p.yg)("h3",{id:"merge-on-write-unique-table"},"merge on write unique table"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22282"},"https://github.com/apache/doris/pull/22282")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22984"},"https://github.com/apache/doris/pull/22984")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/21933"},"https://github.com/apache/doris/pull/21933")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22874"},"https://github.com/apache/doris/pull/22874"))),(0,p.yg)("h3",{id:"optimizer-table-stats-and-analyze"},"optimizer table stats and analyze"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22658"},"https://github.com/apache/doris/pull/22658")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22211"},"https://github.com/apache/doris/pull/22211")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22775"},"https://github.com/apache/doris/pull/22775")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22896"},"https://github.com/apache/doris/pull/22896")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22788"},"https://github.com/apache/doris/pull/22788")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22882"},"https://github.com/apache/doris/pull/22882")),(0,p.yg)("li",{parentName:"ul"})),(0,p.yg)("h3",{id:"functionality-and-performance-of-multi-catalog"},"functionality and performance of multi catalog"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22949"},"https://github.com/apache/doris/pull/22949")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22923"},"https://github.com/apache/doris/pull/22923")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22336"},"https://github.com/apache/doris/pull/22336")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22915"},"https://github.com/apache/doris/pull/22915")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23056"},"https://github.com/apache/doris/pull/23056")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23297"},"https://github.com/apache/doris/pull/23297")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23279"},"https://github.com/apache/doris/pull/23279"))),(0,p.yg)("h2",{id:"important-bug-fixes"},"Important Bug fixes"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22673"},"https://github.com/apache/doris/pull/22673")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22656"},"https://github.com/apache/doris/pull/22656")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22892"},"https://github.com/apache/doris/pull/22892")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22959"},"https://github.com/apache/doris/pull/22959")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22902"},"https://github.com/apache/doris/pull/22902")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22976"},"https://github.com/apache/doris/pull/22976")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22734"},"https://github.com/apache/doris/pull/22734")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22840"},"https://github.com/apache/doris/pull/22840")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23008"},"https://github.com/apache/doris/pull/23008")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23003"},"https://github.com/apache/doris/pull/23003")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22966"},"https://github.com/apache/doris/pull/22966")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22965"},"https://github.com/apache/doris/pull/22965")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22784"},"https://github.com/apache/doris/pull/22784")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23049"},"https://github.com/apache/doris/pull/23049")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23084"},"https://github.com/apache/doris/pull/23084")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22947"},"https://github.com/apache/doris/pull/22947")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22919"},"https://github.com/apache/doris/pull/22919")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22979"},"https://github.com/apache/doris/pull/22979")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23096"},"https://github.com/apache/doris/pull/23096")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23113"},"https://github.com/apache/doris/pull/23113")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23062"},"https://github.com/apache/doris/pull/23062")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22918"},"https://github.com/apache/doris/pull/22918")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23026"},"https://github.com/apache/doris/pull/23026")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23175"},"https://github.com/apache/doris/pull/23175")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23167"},"https://github.com/apache/doris/pull/23167")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23015"},"https://github.com/apache/doris/pull/23015")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23165"},"https://github.com/apache/doris/pull/23165")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23264"},"https://github.com/apache/doris/pull/23264")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23246"},"https://github.com/apache/doris/pull/23246")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23198"},"https://github.com/apache/doris/pull/23198")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23221"},"https://github.com/apache/doris/pull/23221")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23277"},"https://github.com/apache/doris/pull/23277")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23249"},"https://github.com/apache/doris/pull/23249")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23272"},"https://github.com/apache/doris/pull/23272")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23383"},"https://github.com/apache/doris/pull/23383")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23372"},"https://github.com/apache/doris/pull/23372")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23399"},"https://github.com/apache/doris/pull/23399")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23295"},"https://github.com/apache/doris/pull/23295")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23446"},"https://github.com/apache/doris/pull/23446")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23406"},"https://github.com/apache/doris/pull/23406")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23387"},"https://github.com/apache/doris/pull/23387")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23421"},"https://github.com/apache/doris/pull/23421")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23456"},"https://github.com/apache/doris/pull/23456")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23361"},"https://github.com/apache/doris/pull/23361")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23402"},"https://github.com/apache/doris/pull/23402")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23369"},"https://github.com/apache/doris/pull/23369")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23245"},"https://github.com/apache/doris/pull/23245")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23532"},"https://github.com/apache/doris/pull/23532")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23529"},"https://github.com/apache/doris/pull/23529")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23601"},"https://github.com/apache/doris/pull/23601"))),(0,p.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues?q=label%3Adev%2F2.0.1-merged+is%3Aclosed"},"github")," ."),(0,p.yg)("h2",{id:"big-thanks"},"Big Thanks"),(0,p.yg)("p",null,"Thanks all who contribute to this release:"),(0,p.yg)("p",null,"@adonis0147\n@airborne12\n@amorynan\n@AshinGau\n@BePPPower\n@BiteTheDDDDt\n@bobhan1\n@ByteYue\n@caiconghui\n@CalvinKirs\n@csun5285\n@DarvenDuan\n@deadlinefen\n@DongLiang-0\n@Doris-Extras\n@dutyu\n@englefly\n@freemandealer\n@Gabriel39\n@GoGoWen\n@HappenLee\n@hello-stephen\n@HHoflittlefish777\n@hubgeter\n@hust-hhb\n@JackDrogon\n@jacktengg\n@jackwener\n@Jibing-Li\n@kaijchen\n@kaka11chen\n@Kikyou1997\n@Lchangliang\n@LemonLiTree\n@liaoxin01\n@LiBinfeng-01\n@lsy3993\n@luozenglin\n@morningman\n@morrySnow\n@mrhhsg\n@Mryange\n@mymeiyi\n@shuke987\n@sohardforaname\n@starocean999\n@TangSiyang2001\n@Tanya-W\n@ucasfl\n@vinlee19\n@wangbo\n@wsjz\n@wuwenchi\n@xiaokang\n@XieJiann\n@xinyiZzz\n@yujun777\n@Yukang-Lian\n@Yulei-Yang\n@zclllyybb\n@zddr\n@zenoyang\n@zgxme\n@zhangguoqiang666\n@zhangstar333\n@zhannngchen\n@zhiqiang-hhhh\n@zxealous\n@zy-kkk\n@zzzxl1993\n@zzzzzzzs"))}c.isMDXComponent=!0}}]);