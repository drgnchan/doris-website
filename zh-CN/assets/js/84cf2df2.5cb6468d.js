"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[80496],{95788:(e,a,t)=>{t.d(a,{Iu:()=>s,yg:()=>m});var r=t(11504);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,p=function(e,a){if(null==e)return{};var t,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=r.createContext({}),u=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=u(e.components);return r.createElement(o.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,p=e.mdxType,n=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=u(t),h=p,m=g["".concat(o,".").concat(h)]||g[h]||c[h]||n;return t?r.createElement(m,l(l({ref:a},s),{},{components:t})):r.createElement(m,l({ref:a},s))}));function m(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var n=t.length,l=new Array(n);l[0]=h;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[g]="string"==typeof e?e:p,l[1]=i;for(var u=2;u<n;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1072:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=t(45072),p=(t(11504),t(95788));const n={title:"Release 1.1.3",language:"zh-CN"},l=void 0,i={unversionedId:"releasenotes/release-1.1.3",id:"version-2.0/releasenotes/release-1.1.3",title:"Release 1.1.3",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/release-1.1.3.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.1.3",permalink:"/zh-CN/docs/releasenotes/release-1.1.3",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 1.1.3",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 1.1.4",permalink:"/zh-CN/docs/releasenotes/release-1.1.4"},next:{title:"Release 1.1.2",permalink:"/zh-CN/docs/releasenotes/release-1.1.2"}},o={},u=[],s={toc:u},g="wrapper";function c(e){let{components:a,...t}=e;return(0,p.yg)(g,(0,r.c)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,p.yg)("p",null,"\u4f5c\u4e3a 1.1.2 LTS\uff08Long-term Support\uff0c\u957f\u5468\u671f\u652f\u6301\uff09\u7248\u672c\u57fa\u7840\u4e4b\u4e0a\u7684 Bugfix \u7248\u672c\uff0c\u5728 Apache Doris 1.1.3 \u7248\u672c\u4e2d\uff0c\u6709\u8d85\u8fc7 80 \u4e2a Issue \u6216\u6027\u80fd\u4f18\u5316\u9879\u88ab\u5408\u5165\uff0c\u4f18\u5316\u4e86\u5728\u5bfc\u5165\u6216\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u7684\u5185\u5b58\u63a7\u5236\uff0c\u4fee\u590d\u4e86\u8bb8\u591a\u5bfc\u81f4 BE Core \u4ee5\u53ca\u4ea7\u751f\u9519\u8bef\u67e5\u8be2\u7ed3\u679c\u7684\u95ee\u9898\uff0c\u7cfb\u7edf\u7a33\u5b9a\u6027\u548c\u6027\u80fd\u5f97\u4ee5\u8fdb\u4e00\u6b65\u52a0\u5f3a\uff0c\u63a8\u8350\u6240\u6709\u7528\u6237\u4e0b\u8f7d\u548c\u4f7f\u7528\u3002"),(0,p.yg)("h1",{id:"\u65b0\u589e\u529f\u80fd"},"\u65b0\u589e\u529f\u80fd"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u5728 ODBC \u8868\u4e2d\u652f\u6301 SQLServer \u548c PostgreSQL \u7684\u8f6c\u4e49\u6807\u8bc6\u7b26\u3002")),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u652f\u6301\u4f7f\u7528 Parquet \u4f5c\u4e3a\u5bfc\u51fa\u6587\u4ef6\u683c\u5f0f\u3002"))),(0,p.yg)("h1",{id:"\u4f18\u5316\u6539\u8fdb"},"\u4f18\u5316\u6539\u8fdb"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4f18\u5316\u4e86 Flush \u7b56\u7565\u4ee5\u53ca\u907f\u514d\u8fc7\u591a Segment \u5c0f\u6587\u4ef6\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12706"},"#12706")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12716"},"#12716"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u91cd\u6784 Runtime Filter \u4ee5\u51cf\u5c11\u521d\u59cb\u51c6\u5907\u65f6\u95f4\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13127"},"#13127"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u82e5\u5e72\u4e2a\u5728\u67e5\u8be2\u6216\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u7684\u5185\u5b58\u63a7\u5236\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12682"},"#12682")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12688"},"#12688")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12708"},"#12708")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12776"},"#12776")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12782"},"#12782")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12791"},"#12791")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12794"},"#12794")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12820"},"#12820")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12932"},"#12932")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12954"},"#12954")," ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12951"},"#12951")))),(0,p.yg)("h1",{id:"bug-\u4fee\u590d"},"Bug \u4fee\u590d"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 largeint \u7c7b\u578b\u5728 Compaction \u8fc7\u7a0b\u4e2d\u5bfc\u81f4 Core \u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10094"},"#10094"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 Grouping set \u5bfc\u81f4 BE Core \u6216\u8005\u8fd4\u56de\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12313"},"#12313"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u4f7f\u7528 orthogonal_bitmap_union_count \u51fd\u6570\u65f6\u6267\u884c\u8ba1\u5212 PREAGGREGATION \u663e\u793a\u9519\u8bef\u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12581"},"#12581"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 Level1Iterator \u672a\u88ab\u91ca\u653e\u5bfc\u81f4\u7684\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12592"},"#12592"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u5f53 2 BE \u4e14\u5b58\u5728 Colocation \u8868\u65f6\u901a\u8fc7 Decommission \u4e0b\u7ebf\u8282\u70b9\u5931\u8d25\u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12644"},"#12644"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 TBrokerOpenReaderResponse \u8fc7\u5927\u65f6\u5bfc\u81f4\u5806\u6808\u7f13\u51b2\u533a\u6ea2\u51fa\u800c\u5bfc\u81f4\u7684 BE Core \u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12658"},"#12658"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u51fa\u73b0 -238\u9519\u8bef\u65f6 BE \u8282\u70b9\u53ef\u80fd OOM \u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12666"},"#12666"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 LEAD() \u51fd\u6570\u9519\u8bef\u5b50\u8868\u8fbe\u5f0f\u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12587"},"#12587"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u884c\u5b58\u4ee3\u7801\u4e2d\u76f8\u5173\u67e5\u8be2\u5931\u8d25\u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12712"},"#12712"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 curdate()/current_date() \u51fd\u6570\u4ea7\u751f\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12720"},"#12720"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86 lateral View explode_split \u51fd\u6570\u51fa\u73b0\u9519\u8bef\u7ed3\u679c\u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13643"},"#13643"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u4e24\u5f20\u76f8\u540c\u8868\u4e2d Bucket Shuffle Join \u8ba1\u5212\u9519\u8bef\u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12930"},"#12930"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u66f4\u65b0\u6216\u5bfc\u5165\u8fc7\u7a0b\u4e2d Tablet \u7248\u672c\u53ef\u80fd\u9519\u8bef\u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13070"},"#13070"))),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("p",{parentName:"li"},"\u4fee\u590d\u4e86\u5728\u52a0\u5bc6\u51fd\u6570\u4e0b\u4f7f\u7528 Broker \u5bfc\u5165\u6570\u636e\u65f6 BE \u53ef\u80fd\u53d1\u751f Core \u7684\u95ee\u9898\u3002 ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13009"},"#13009")))),(0,p.yg)("h1",{id:"\u5347\u7ea7\u8bf4\u660e"},"\u5347\u7ea7\u8bf4\u660e"),(0,p.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7981\u7528 PageCache \u548c ChunkAllocator \u4ee5\u51cf\u5c11\u5185\u5b58\u4f7f\u7528\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u9879 ",(0,p.yg)("inlineCode",{parentName:"p"},"disable_storage_page_cache")," \u548c ",(0,p.yg)("inlineCode",{parentName:"p"},"chunk_reserved_bytes_limit")," \u6765\u91cd\u65b0\u542f\u7528\u3002"),(0,p.yg)("p",null,"Storage Page Cache \u548c Chunk Allocator \u5206\u522b\u7f13\u5b58\u7528\u6237\u6570\u636e\u5757\u548c\u5185\u5b58\u9884\u5206\u914d\u3002"),(0,p.yg)("p",null,"\u8fd9\u4e24\u4e2a\u529f\u80fd\u4f1a\u5360\u7528\u4e00\u5b9a\u6bd4\u4f8b\u7684\u5185\u5b58\uff0c\u5e76\u4e14\u4e0d\u4f1a\u91ca\u653e\u3002 \u8fd9\u90e8\u5206\u5185\u5b58\u5360\u7528\u65e0\u6cd5\u7075\u6d3b\u8c03\u914d\uff0c\u5bfc\u81f4\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u56e0\u8fd9\u90e8\u5206\u5185\u5b58\u5360\u7528\u800c\u5bfc\u81f4\u5176\u4ed6\u4efb\u52a1\u5185\u5b58\u4e0d\u8db3\uff0c\u5f71\u54cd\u7cfb\u7edf\u7a33\u5b9a\u6027\u548c\u53ef\u7528\u6027\u3002\u56e0\u6b64\u6211\u4eec\u5728 1.1.3 \u7248\u672c\u4e2d\u9ed8\u8ba4\u5173\u95ed\u4e86\u8fd9\u4e24\u4e2a\u529f\u80fd\u3002"),(0,p.yg)("p",null,"\u4f46\u5728\u67d0\u4e9b\u5ef6\u8fdf\u654f\u611f\u7684\u62a5\u8868\u573a\u666f\u4e0b\uff0c\u5173\u95ed\u8be5\u529f\u80fd\u53ef\u80fd\u4f1a\u5bfc\u81f4\u67e5\u8be2\u5ef6\u8fdf\u589e\u52a0\u3002\u5982\u7528\u6237\u62c5\u5fc3\u5347\u7ea7\u540e\u8be5\u529f\u80fd\u5bf9\u4e1a\u52a1\u9020\u6210\u5f71\u54cd\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728 be.conf \u4e2d\u589e\u52a0\u4ee5\u4e0b\u53c2\u6570\u4ee5\u4fdd\u6301\u548c\u4e4b\u524d\u7248\u672c\u884c\u4e3a\u4e00\u81f4\u3002"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre"},"disable_storage_page_cache=false\nchunk_reserved_bytes_limit=10%\n")),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("inlineCode",{parentName:"li"},"disable_storage_page_cache"),"\uff1a\u662f\u5426\u5173\u95ed Storage Page Cache\u3002 1.1.2\uff08\u542b\uff09\u4e4b\u524d\u7684\u7248\u672c\uff0c\u9ed8\u8ba4\u662ffalse\uff0c\u5373\u6253\u5f00\u30021.1.3 \u7248\u672c\u9ed8\u8ba4\u4e3a true\uff0c\u5373\u5173\u95ed\u3002"),(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("inlineCode",{parentName:"li"},"chunk_reserved_bytes_limit"),"\uff1aChunk allocator \u9884\u7559\u5185\u5b58\u5927\u5c0f\u30021.1.2\uff08\u542b\uff09\u4e4b\u524d\u7684\u7248\u672c\uff0c\u9ed8\u8ba4\u662f\u6574\u4f53\u5185\u5b58\u7684 10%\u30021.1.3 \u7248\u672c\u9ed8\u8ba4\u4e3a 209715200\uff08200MB\uff09\u3002")))}c.isMDXComponent=!0}}]);