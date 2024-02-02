"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[35688],{95788:(e,a,t)=>{t.d(a,{Iu:()=>u,yg:()=>h});var r=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),s=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(i.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),g=n,h=c["".concat(i,".").concat(g)]||c[g]||m[g]||l;return t?r.createElement(h,o(o({ref:a},u),{},{components:t})):r.createElement(h,o({ref:a},u))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=g;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97440:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=t(45072),n=(t(11504),t(95788));const l={title:"Release 1.1.3",language:"en"},o=void 0,p={unversionedId:"releasenotes/release-1.1.3",id:"releasenotes/release-1.1.3",title:"Release 1.1.3",description:"\x3c!--",source:"@site/docs/releasenotes/release-1.1.3.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.1.3",permalink:"/docs/dev/releasenotes/release-1.1.3",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 1.1.3",language:"en"},sidebar:"docs",previous:{title:"Release 1.1.4",permalink:"/docs/dev/releasenotes/release-1.1.4"},next:{title:"Release 1.1.2",permalink:"/docs/dev/releasenotes/release-1.1.2"}},i={},s=[],u={toc:s},c="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(c,(0,r.c)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In this release, Doris Team has fixed more than 80 issues or performance improvement since 1.1.2. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,n.yg)("h1",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support escape identifiers for sqlserver and postgresql in ODBC table.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Could use Parquet as output file format."))),(0,n.yg)("h1",{id:"improvements"},"Improvements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Optimize flush policy to avoid small segments. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12706"},"#12706")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12716"},"#12716"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Refactor runtime filter to reduce the prepare time. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13127"},"#13127"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Lots of memory control related issues during query or load process. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12682"},"#12682")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12688"},"#12688")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12708"},"#12708")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12776"},"#12776")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12782"},"#12782")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12791"},"#12791")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12794"},"#12794")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12820"},"#12820")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12932"},"#12932")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12954"},"#12954")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12951"},"#12951")))),(0,n.yg)("h1",{id:"bugfix"},"BugFix"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Core dump on compaction with largeint. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10094"},"#10094"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Grouping sets cause be core or return wrong results. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12313"},"#12313"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"PREAGGREGATION flag in orthogonal_bitmap_union_count operator is wrong. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12581"},"#12581"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Level1Iterator should release iterators in heap and it may cause memory leak. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12592"},"#12592"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix decommission failure with 2 BEs and existing colocation table. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12644"},"#12644"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"BE may core dump because of stack-buffer-overflow when TBrokerOpenReaderResponse too large. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12658"},"#12658"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"BE may OOM during load when error code -238 occurs. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12666"},"#12666"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix wrong child expression of lead function. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12587"},"#12587"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix intersect query failed in row storage code. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12712"},"#12712"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix wrong result produced by curdate()/current_date() function. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12720"},"#12720"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix lateral view explode_split with temp table bug. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13643"},"#13643"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Bucket shuffle join plan is wrong in two same table. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12930"},"#12930"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix bug that tablet version may be wrong when doing alter and load. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13070"},"#13070"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"BE core when load data using broker with md5sum()/sm3sum(). ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13009"},"#13009")))),(0,n.yg)("h1",{id:"upgrade-notes"},"Upgrade Notes"),(0,n.yg)("p",null,"PageCache and ChunkAllocator are disabled by default to reduce memory usage and can be re-enabled by modifying the configuration items ",(0,n.yg)("inlineCode",{parentName:"p"},"disable_storage_page_cache")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"chunk_reserved_bytes_limit"),"."),(0,n.yg)("p",null,"Storage Page Cache and Chunk Allocator cache user data chunks and memory preallocation, respectively."),(0,n.yg)("p",null,"These two functions take up a certain percentage of memory and are not freed. This part of memory cannot be flexibly allocated, which may lead to insufficient memory for other tasks in some scenarios, affecting system stability and availability. Therefore, we disabled these two features by default in version 1.1.3."),(0,n.yg)("p",null,"However, in some latency-sensitive reporting scenarios, turning off this feature may lead to increased query latency. If you are worried about the impact of this feature on your business after upgrade, you can add the following parameters to be.conf to keep the same behavior as the previous version."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"disable_storage_page_cache=false\nchunk_reserved_bytes_limit=10%\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"disable_storage_page_cache"),": Whether to disable Storage Page Cache. version 1.1.2 (inclusive), the default is false, i.e., on. version 1.1.3 defaults to true, i.e., off."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"chunk_reserved_bytes_limit"),": Chunk allocator reserved memory size. 1.1.2 (and earlier), the default is 10% of the overall memory. 1.1.3 version default is 209715200 (200MB).")))}m.isMDXComponent=!0}}]);