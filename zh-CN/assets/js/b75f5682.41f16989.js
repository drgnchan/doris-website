"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[36356],{15680:(a,e,t)=>{t.d(e,{xA:()=>s,yg:()=>n});var l=t(296540);function p(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,l)}return t}function h(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){p(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,l,p=function(a,e){if(null==a)return{};var t,l,p={},i=Object.keys(a);for(l=0;l<i.length;l++)t=i[l],e.indexOf(t)>=0||(p[t]=a[t]);return p}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(l=0;l<i.length;l++)t=i[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(p[t]=a[t])}return p}var u=l.createContext({}),o=function(a){var e=l.useContext(u),t=e;return a&&(t="function"==typeof a?a(e):h(h({},e),a)),t},s=function(a){var e=o(a.components);return l.createElement(u.Provider,{value:e},a.children)},c="mdxType",g={inlineCode:"code",wrapper:function(a){var e=a.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(a,e){var t=a.components,p=a.mdxType,i=a.originalType,u=a.parentName,s=r(a,["components","mdxType","originalType","parentName"]),c=o(t),m=p,n=c["".concat(u,".").concat(m)]||c[m]||g[m]||i;return t?l.createElement(n,h(h({ref:e},s),{},{components:t})):l.createElement(n,h({ref:e},s))}));function n(a,e){var t=arguments,p=e&&e.mdxType;if("string"==typeof a||p){var i=t.length,h=new Array(i);h[0]=m;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=a,r[c]="string"==typeof a?a:p,h[1]=r;for(var o=2;o<i;o++)h[o]=t[o];return l.createElement.apply(null,h)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},403791:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>h,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var l=t(58168),p=(t(296540),t(15680));const i={title:"Release 2.0.1",language:"zh-CN"},h=void 0,r={unversionedId:"releasenotes/release-2.0.1",id:"version-2.0/releasenotes/release-2.0.1",title:"Release 2.0.1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/release-2.0.1.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0.1",permalink:"/zh-CN/docs/2.0/releasenotes/release-2.0.1",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.0.1",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 2.0.2",permalink:"/zh-CN/docs/2.0/releasenotes/release-2.0.2"},next:{title:"Release 2.0.0",permalink:"/zh-CN/docs/2.0/releasenotes/release-2.0.0"}},u={},o=[{value:"Array \u548c Map \u6570\u636e\u7c7b\u578b\u7684\u529f\u80fd\u4f18\u5316\u53ca\u7a33\u5b9a\u6027\u6539\u8fdb",id:"array-\u548c-map-\u6570\u636e\u7c7b\u578b\u7684\u529f\u80fd\u4f18\u5316\u53ca\u7a33\u5b9a\u6027\u6539\u8fdb",level:3},{value:"\u5012\u6392\u7d22\u5f15\u7684\u67e5\u8be2\u6027\u80fd\u4f18\u5316",id:"\u5012\u6392\u7d22\u5f15\u7684\u67e5\u8be2\u6027\u80fd\u4f18\u5316",level:3},{value:"bitmap\u3001like\u3001scan\u3001agg \u7b49\u6267\u884c\u6027\u80fd\u4f18\u5316",id:"bitmaplikescanagg-\u7b49\u6267\u884c\u6027\u80fd\u4f18\u5316",level:3},{value:"CCR \u7684\u529f\u80fd\u4f18\u5316\u4e0e\u7a33\u5b9a\u6027\u63d0\u5347",id:"ccr-\u7684\u529f\u80fd\u4f18\u5316\u4e0e\u7a33\u5b9a\u6027\u63d0\u5347",level:3},{value:"Merge-on-Write \u4e3b\u952e\u8868\u7684\u80fd\u529b\u589e\u5f3a",id:"merge-on-write-\u4e3b\u952e\u8868\u7684\u80fd\u529b\u589e\u5f3a",level:3},{value:"\u8868\u72b6\u6001\u548c\u7edf\u8ba1\u4fe1\u606f\u7684\u529f\u80fd\u4f18\u5316",id:"\u8868\u72b6\u6001\u548c\u7edf\u8ba1\u4fe1\u606f\u7684\u529f\u80fd\u4f18\u5316",level:3},{value:"Multi-Catalog \u7684\u529f\u80fd\u4f18\u5316\u53ca\u7a33\u5b9a\u6027\u6539\u8fdb",id:"multi-catalog-\u7684\u529f\u80fd\u4f18\u5316\u53ca\u7a33\u5b9a\u6027\u6539\u8fdb",level:3}],s={toc:o},c="wrapper";function g(a){let{components:e,...t}=a;return(0,p.yg)(c,(0,l.A)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,p.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0c\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5411\u5927\u5bb6\u5ba3\u5e03\uff0cApache Doris 2.0.1 Release \u7248\u672c\u5df2\u4e8e 2023 \u5e74 9 \u6708 4 \u65e5\u6b63\u5f0f\u53d1\u5e03\uff0c\u6709\u8d85\u8fc7 71 \u4f4d\u8d21\u732e\u8005\u4e3a Apache Doris \u63d0\u4ea4\u4e86\u8d85\u8fc7 380 \u4e2a\u4f18\u5316\u4e0e\u4fee\u590d\u3002"),(0,p.yg)("h1",{id:"\u884c\u4e3a\u53d8\u66f4"},"\u884c\u4e3a\u53d8\u66f4"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"\u5c06varchar\u9ed8\u8ba4\u957f\u5ea61\u4fee\u6539\u4e3a65533")),(0,p.yg)("h1",{id:"\u529f\u80fd\u6539\u8fdb"},"\u529f\u80fd\u6539\u8fdb"),(0,p.yg)("h3",{id:"array-\u548c-map-\u6570\u636e\u7c7b\u578b\u7684\u529f\u80fd\u4f18\u5316\u53ca\u7a33\u5b9a\u6027\u6539\u8fdb"},"Array \u548c Map \u6570\u636e\u7c7b\u578b\u7684\u529f\u80fd\u4f18\u5316\u53ca\u7a33\u5b9a\u6027\u6539\u8fdb"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22793"},"https://github.com/apache/doris/pull/22793")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22927"},"https://github.com/apache/doris/pull/22927")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22738"},"https://github.com/apache/doris/pull/22738")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22347"},"https://github.com/apache/doris/pull/22347")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23250"},"https://github.com/apache/doris/pull/23250")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22300"},"https://github.com/apache/doris/pull/22300"))),(0,p.yg)("h3",{id:"\u5012\u6392\u7d22\u5f15\u7684\u67e5\u8be2\u6027\u80fd\u4f18\u5316"},"\u5012\u6392\u7d22\u5f15\u7684\u67e5\u8be2\u6027\u80fd\u4f18\u5316"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22836"},"https://github.com/apache/doris/pull/22836")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23381"},"https://github.com/apache/doris/pull/23381")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23389"},"https://github.com/apache/doris/pull/23389")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22570"},"https://github.com/apache/doris/pull/22570"))),(0,p.yg)("h3",{id:"bitmaplikescanagg-\u7b49\u6267\u884c\u6027\u80fd\u4f18\u5316"},"bitmap\u3001like\u3001scan\u3001agg \u7b49\u6267\u884c\u6027\u80fd\u4f18\u5316"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23172"},"https://github.com/apache/doris/pull/23172")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23495"},"https://github.com/apache/doris/pull/23495")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23476"},"https://github.com/apache/doris/pull/23476")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23396"},"https://github.com/apache/doris/pull/23396")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23182"},"https://github.com/apache/doris/pull/23182")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22216"},"https://github.com/apache/doris/pull/22216"))),(0,p.yg)("h3",{id:"ccr-\u7684\u529f\u80fd\u4f18\u5316\u4e0e\u7a33\u5b9a\u6027\u63d0\u5347"},"CCR \u7684\u529f\u80fd\u4f18\u5316\u4e0e\u7a33\u5b9a\u6027\u63d0\u5347"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22447"},"https://github.com/apache/doris/pull/22447")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22559"},"https://github.com/apache/doris/pull/22559")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22173"},"https://github.com/apache/doris/pull/22173")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22678"},"https://github.com/apache/doris/pull/22678"))),(0,p.yg)("h3",{id:"merge-on-write-\u4e3b\u952e\u8868\u7684\u80fd\u529b\u589e\u5f3a"},"Merge-on-Write \u4e3b\u952e\u8868\u7684\u80fd\u529b\u589e\u5f3a"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22282"},"https://github.com/apache/doris/pull/22282")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22984"},"https://github.com/apache/doris/pull/22984")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/21933"},"https://github.com/apache/doris/pull/21933")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22874"},"https://github.com/apache/doris/pull/22874"))),(0,p.yg)("h3",{id:"\u8868\u72b6\u6001\u548c\u7edf\u8ba1\u4fe1\u606f\u7684\u529f\u80fd\u4f18\u5316"},"\u8868\u72b6\u6001\u548c\u7edf\u8ba1\u4fe1\u606f\u7684\u529f\u80fd\u4f18\u5316"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22658"},"https://github.com/apache/doris/pull/22658")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22211"},"https://github.com/apache/doris/pull/22211")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22775"},"https://github.com/apache/doris/pull/22775")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22896"},"https://github.com/apache/doris/pull/22896")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22788"},"https://github.com/apache/doris/pull/22788")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22882"},"https://github.com/apache/doris/pull/22882"))),(0,p.yg)("h3",{id:"multi-catalog-\u7684\u529f\u80fd\u4f18\u5316\u53ca\u7a33\u5b9a\u6027\u6539\u8fdb"},"Multi-Catalog \u7684\u529f\u80fd\u4f18\u5316\u53ca\u7a33\u5b9a\u6027\u6539\u8fdb"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22949"},"https://github.com/apache/doris/pull/22949")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22923"},"https://github.com/apache/doris/pull/22923")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22336"},"https://github.com/apache/doris/pull/22336")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22915"},"https://github.com/apache/doris/pull/22915")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23056"},"https://github.com/apache/doris/pull/23056")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23297"},"https://github.com/apache/doris/pull/23297")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23279"},"https://github.com/apache/doris/pull/23279"))),(0,p.yg)("h1",{id:"\u95ee\u9898\u4fee\u590d"},"\u95ee\u9898\u4fee\u590d"),(0,p.yg)("p",null,"\u4fee\u590d\u4e86\u82e5\u5e72\u4e2a 2.0.0 \u7248\u672c\u4e2d\u7684\u95ee\u9898\uff0c\u4f7f\u7cfb\u7edf\u7a33\u5b9a\u6027\u5f97\u5230\u8fdb\u4e00\u6b65\u63d0\u5347"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22673"},"https://github.com/apache/doris/pull/22673")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22656"},"https://github.com/apache/doris/pull/22656")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22892"},"https://github.com/apache/doris/pull/22892")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22959"},"https://github.com/apache/doris/pull/22959")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22902"},"https://github.com/apache/doris/pull/22902")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22976"},"https://github.com/apache/doris/pull/22976")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22734"},"https://github.com/apache/doris/pull/22734")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22840"},"https://github.com/apache/doris/pull/22840")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23008"},"https://github.com/apache/doris/pull/23008")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23003"},"https://github.com/apache/doris/pull/23003")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22966"},"https://github.com/apache/doris/pull/22966")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22965"},"https://github.com/apache/doris/pull/22965")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22784"},"https://github.com/apache/doris/pull/22784")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23049"},"https://github.com/apache/doris/pull/23049")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23084"},"https://github.com/apache/doris/pull/23084")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22947"},"https://github.com/apache/doris/pull/22947")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22919"},"https://github.com/apache/doris/pull/22919")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22979"},"https://github.com/apache/doris/pull/22979")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23096"},"https://github.com/apache/doris/pull/23096")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23113"},"https://github.com/apache/doris/pull/23113")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23062"},"https://github.com/apache/doris/pull/23062")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22918"},"https://github.com/apache/doris/pull/22918")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23026"},"https://github.com/apache/doris/pull/23026")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23175"},"https://github.com/apache/doris/pull/23175")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23167"},"https://github.com/apache/doris/pull/23167")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23015"},"https://github.com/apache/doris/pull/23015")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23165"},"https://github.com/apache/doris/pull/23165")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23264"},"https://github.com/apache/doris/pull/23264")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23246"},"https://github.com/apache/doris/pull/23246")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23198"},"https://github.com/apache/doris/pull/23198")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23221"},"https://github.com/apache/doris/pull/23221")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23277"},"https://github.com/apache/doris/pull/23277")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23249"},"https://github.com/apache/doris/pull/23249")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23272"},"https://github.com/apache/doris/pull/23272")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23383"},"https://github.com/apache/doris/pull/23383")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23372"},"https://github.com/apache/doris/pull/23372")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23399"},"https://github.com/apache/doris/pull/23399")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23295"},"https://github.com/apache/doris/pull/23295")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23446"},"https://github.com/apache/doris/pull/23446")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23406"},"https://github.com/apache/doris/pull/23406")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23387"},"https://github.com/apache/doris/pull/23387")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23421"},"https://github.com/apache/doris/pull/23421")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23456"},"https://github.com/apache/doris/pull/23456")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23361"},"https://github.com/apache/doris/pull/23361")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23402"},"https://github.com/apache/doris/pull/23402")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23369"},"https://github.com/apache/doris/pull/23369")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23245"},"https://github.com/apache/doris/pull/23245")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23532"},"https://github.com/apache/doris/pull/23532")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23529"},"https://github.com/apache/doris/pull/23529")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23601"},"https://github.com/apache/doris/pull/23601"))),(0,p.yg)("p",null,"\u4f18\u5316\u6539\u8fdb\u53ca\u4fee\u590d\u95ee\u9898\u7684\u5b8c\u6574\u5217\u8868\u8bf7\u5728 GitHub \u6309\u7167\u6807\u7b7e dev/2.0.1-merged \u8fdb\u884c\u7b5b\u9009\u5373\u53ef\u3002"),(0,p.yg)("h1",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,p.yg)("p",null,"\u5411\u6240\u6709\u53c2\u4e0e Apache Doris 2.0.1 \u7248\u672c\u5f00\u53d1\u548c\u6d4b\u8bd5\u7684\u8d21\u732e\u8005\u4eec\u8868\u793a\u6700\u8877\u5fc3\u7684\u611f\u8c22\uff0c\u4ed6\u4eec\u5206\u522b\u662f\uff1a"),(0,p.yg)("p",null,"adonis0147\u3001airborne12\u3001amorynan\u3001AshinGau\u3001BePPPower\u3001BiteTheDDDDt\u3001bobhan1\u3001ByteYue\u3001caiconghui\u3001CalvinKirs\u3001csun5285\u3001DarvenDuan\u3001deadlinefen\u3001DongLiang-0\u3001Doris-Extras\u3001dutyu\u3001englefly\u3001freemandealer\u3001Gabriel39\u3001GoGoWen\u3001HappenLee\u3001hello-stephen\u3001HHoflittlefish777\u3001hubgeter\u3001hust-hhb\u3001JackDrogon\u3001jacktengg\u3001jackwener\u3001Jibing-Li\u3001kaijchen\u3001kaka11chen\u3001Kikyou1997\u3001Lchangliang\u3001LemonLiTree\u3001liaoxin01\u3001LiBinfeng-01\u3001lsy3993\u3001luozenglin\u3001morningman\u3001morrySnow\u3001mrhhsg\u3001Mryange\u3001mymeiyi\u3001shuke987\u3001sohardforaname\u3001starocean999\u3001TangSiyang2001\u3001Tanya-W\u3001ucasfl\u3001vinlee19\u3001wangbo\nwsjz\u3001wuwenchi\u3001xiaokang\u3001XieJiann\u3001xinyiZzz\u3001yujun777\u3001Yukang-Lian\u3001Yulei-Yang\u3001zclllyybb\u3001zddr\u3001zenoyang\u3001zgxme\u3001zhangguoqiang666\u3001zhangstar333\u3001zhannngchen\u3001zhiqiang-hhhh\u3001zxealous\u3001zy-kkk\u3001zzzxl1993\u3001zzzzzzzs"))}g.isMDXComponent=!0}}]);