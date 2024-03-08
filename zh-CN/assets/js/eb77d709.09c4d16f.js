"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53182],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(a),y=l,g=d["".concat(i,".").concat(y)]||d[y]||b[y]||o;return a?n.createElement(g,r(r({ref:t},m),{},{components:a})):n.createElement(g,r({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:l,r[1]=p;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},923768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(58168),l=(a(296540),a(15680));const o={title:"Tablet \u5143\u6570\u636e\u7ba1\u7406\u5de5\u5177",language:"zh-CN"},r=void 0,p={unversionedId:"admin-manual/maint-monitor/tablet-meta-tool",id:"admin-manual/maint-monitor/tablet-meta-tool",title:"Tablet \u5143\u6570\u636e\u7ba1\u7406\u5de5\u5177",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/maint-monitor/tablet-meta-tool.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/tablet-meta-tool",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/tablet-meta-tool",draft:!1,tags:[],version:"current",frontMatter:{title:"Tablet \u5143\u6570\u636e\u7ba1\u7406\u5de5\u5177",language:"zh-CN"},sidebar:"docs",previous:{title:"Doris\u9519\u8bef\u4ee3\u7801\u8868",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/doris-error-code"},next:{title:"\u76d1\u63a7\u548c\u62a5\u8b66",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/monitor-alert"}},i={},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:2},{value:"\u67e5\u770b Tablet Meta",id:"\u67e5\u770b-tablet-meta",level:3},{value:"\u5728\u7ebf",id:"\u5728\u7ebf",level:4},{value:"\u79bb\u7ebf",id:"\u79bb\u7ebf",level:4},{value:"\u52a0\u8f7d header",id:"\u52a0\u8f7d-header",level:3},{value:"\u5220\u9664 header",id:"\u5220\u9664-header",level:3},{value:"\u5c55\u793a pb \u683c\u5f0f\u7684 TabletMeta",id:"\u5c55\u793a-pb-\u683c\u5f0f\u7684-tabletmeta",level:3},{value:"\u5c55\u793a pb \u683c\u5f0f\u7684 Segment meta",id:"\u5c55\u793a-pb-\u683c\u5f0f\u7684-segment-meta",level:3}],m={toc:u},d="wrapper";function b(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"tablet-\u5143\u6570\u636e\u7ba1\u7406\u5de5\u5177"},"Tablet \u5143\u6570\u636e\u7ba1\u7406\u5de5\u5177"),(0,l.yg)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.yg)("p",null,"\u5728\u6700\u65b0\u7248\u672c\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5728 BE \u7aef\u5f15\u5165\u4e86 RocksDB\uff0c\u7528\u4e8e\u5b58\u50a8 tablet \u7684\u5143\u4fe1\u606f\uff0c\u4ee5\u89e3\u51b3\u4e4b\u524d\u901a\u8fc7 header \u6587\u4ef6\u7684\u65b9\u5f0f\u5b58\u50a8\u5143\u4fe1\u606f\uff0c\u5e26\u6765\u7684\u5404\u79cd\u529f\u80fd\u548c\u6027\u80fd\u65b9\u9762\u7684\u95ee\u9898\u3002\u5f53\u524d\u6bcf\u4e00\u4e2a\u6570\u636e\u76ee\u5f55\uff08root","_","path\uff09\uff0c\u90fd\u4f1a\u6709\u4e00\u4e2a\u5bf9\u5e94\u7684 RocksDB \u5b9e\u4f8b\uff0c\u5176\u4e2d\u4ee5 key-value \u7684\u65b9\u5f0f\uff0c\u5b58\u653e\u5bf9\u5e94 root","_","path \u4e0a\u7684\u6240\u6709 tablet \u7684\u5143\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u8fdb\u884c\u8fd9\u4e9b\u5143\u6570\u636e\u7684\u7ef4\u62a4\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5728\u7ebf\u7684 http \u63a5\u53e3\u65b9\u5f0f\u548c\u79bb\u7ebf\u7684 meta","_","tool \u5de5\u5177\u4ee5\u5b8c\u6210\u76f8\u5173\u7684\u7ba1\u7406\u64cd\u4f5c\u3002"),(0,l.yg)("p",null,"\u5176\u4e2d http \u63a5\u53e3\u4ec5\u7528\u4e8e\u5728\u7ebf\u7684\u67e5\u770b tablet \u7684\u5143\u6570\u636e\uff0c\u53ef\u4ee5\u5728 BE \u8fdb\u7a0b\u8fd0\u884c\u7684\u72b6\u6001\u4e0b\u4f7f\u7528\u3002"),(0,l.yg)("p",null,"\u800c meta","_","tool \u5de5\u5177\u5219\u4ec5\u7528\u4e8e\u79bb\u7ebf\u7684\u5404\u7c7b\u5143\u6570\u636e\u7ba1\u7406\u64cd\u4f5c\uff0c\u5fc5\u987b\u5148\u505c\u6b62BE\u8fdb\u7a0b\u540e\uff0c\u624d\u53ef\u4f7f\u7528\u3002"),(0,l.yg)("p",null,"meta","_","tool \u5de5\u5177\u5b58\u653e\u5728 BE \u7684 lib/ \u76ee\u5f55\u4e0b\u3002"),(0,l.yg)("h2",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,l.yg)("h3",{id:"\u67e5\u770b-tablet-meta"},"\u67e5\u770b Tablet Meta"),(0,l.yg)("p",null,"\u67e5\u770b Tablet Meta \u4fe1\u606f\u53ef\u4ee5\u5206\u4e3a\u5728\u7ebf\u65b9\u6cd5\u548c\u79bb\u7ebf\u65b9\u6cd5"),(0,l.yg)("h4",{id:"\u5728\u7ebf"},"\u5728\u7ebf"),(0,l.yg)("p",null,"\u8bbf\u95ee BE \u7684 http \u63a5\u53e3\uff0c\u83b7\u53d6\u5bf9\u5e94\u7684 Tablet Meta \u4fe1\u606f\uff1a"),(0,l.yg)("p",null,"api\uff1a"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"http://{host}:{port}/api/meta/header/{tablet_id}")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"host: BE \u7684 hostname"),(0,l.yg)("p",{parentName:"blockquote"},"port: BE \u7684 http \u7aef\u53e3"),(0,l.yg)("p",{parentName:"blockquote"},"tablet_id: tablet id")),(0,l.yg)("p",null,"\u4e3e\u4f8b\uff1a"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"http://be_host:8040/api/meta/header/14156")),(0,l.yg)("p",null,"\u6700\u7ec8\u67e5\u8be2\u6210\u529f\u7684\u8bdd\uff0c\u4f1a\u5c06 Tablet Meta \u4ee5 json \u5f62\u5f0f\u8fd4\u56de\u3002"),(0,l.yg)("h4",{id:"\u79bb\u7ebf"},"\u79bb\u7ebf"),(0,l.yg)("p",null,"\u57fa\u4e8e meta","_","tool \u5de5\u5177\u83b7\u53d6\u67d0\u4e2a\u76d8\u4e0a\u7684 Tablet Meta\u3002"),(0,l.yg)("p",null,"\u547d\u4ee4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./lib/meta_tool --root_path=/path/to/root_path --operation=get_meta --tablet_id=xxx --schema_hash=xxx\n")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"root_path: \u5728 be.conf \u4e2d\u914d\u7f6e\u7684\u5bf9\u5e94\u7684 root_path \u8def\u5f84\u3002")),(0,l.yg)("p",null,"\u7ed3\u679c\u4e5f\u662f\u6309\u7167 json \u7684\u683c\u5f0f\u5c55\u73b0 Tablet Meta\u3002"),(0,l.yg)("h3",{id:"\u52a0\u8f7d-header"},"\u52a0\u8f7d header"),(0,l.yg)("p",null,"\u52a0\u8f7d header \u7684\u529f\u80fd\u662f\u4e3a\u4e86\u5b8c\u6210\u5b9e\u73b0 tablet \u4eba\u5de5\u8fc1\u79fb\u800c\u63d0\u4f9b\u7684\u3002\u8be5\u529f\u80fd\u662f\u57fa\u4e8e json \u683c\u5f0f\u7684 Tablet Meta \u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u5982\u679c\u6d89\u53ca shard \u5b57\u6bb5\u3001version \u4fe1\u606f\u7684\u66f4\u6539\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 Tablet Meta \u7684 json \u5185\u5bb9\u4e2d\u66f4\u6539\u3002\u7136\u540e\u4f7f\u7528\u4ee5\u4e0b\u7684\u547d\u4ee4\u8fdb\u884c\u52a0\u8f7d\u3002"),(0,l.yg)("p",null,"\u547d\u4ee4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./lib/meta_tool --operation=load_meta --root_path=/path/to/root_path --json_meta_path=path\n")),(0,l.yg)("h3",{id:"\u5220\u9664-header"},"\u5220\u9664 header"),(0,l.yg)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u4ece\u67d0\u4e2a be \u7684\u67d0\u4e2a\u76d8\u4e2d\u5220\u9664\u67d0\u4e2a tablet \u5143\u6570\u636e\u7684\u529f\u80fd\u3002\u53ef\u4ee5\u5355\u72ec\u5220\u9664\u4e00\u4e2a tablet \u7684\u5143\u6570\u636e\uff0c\u6216\u8005\u6279\u91cf\u5220\u9664\u4e00\u7ec4 tablet \u7684\u5143\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u5220\u9664\u5355\u4e2atablet\u5143\u6570\u636e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./lib/meta_tool --operation=delete_meta --root_path=/path/to/root_path --tablet_id=xxx --schema_hash=xxx\n")),(0,l.yg)("p",null,"\u5220\u9664\u4e00\u7ec4tablet\u5143\u6570\u636e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./lib/meta_tool --operation=batch_delete_meta --tablet_file=/path/to/tablet_file.txt\n")),(0,l.yg)("p",null,"\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"tablet_file.txt")," \u4e2d\u7684\u6bcf\u4e00\u884c\u8868\u793a\u4e00\u4e2a tablet \u7684\u4fe1\u606f\u3002\u683c\u5f0f\u4e3a\uff1a"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"root_path,tablet_id,schema_hash")),(0,l.yg)("p",null,"\u6bcf\u4e00\u884c\u5404\u4e2a\u5217\u7528\u9017\u53f7\u5206\u9694\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"tablet_file")," \u6587\u4ef6\u793a\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/output/be/data/,14217,352781111\n/output/be/data/,14219,352781111\n/output/be/data/,14223,352781111\n/output/be/data/,14227,352781111\n/output/be/data/,14233,352781111\n/output/be/data/,14239,352781111\n")),(0,l.yg)("p",null,"\u6279\u91cf\u5220\u9664\u4f1a\u8df3\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"tablet_file")," \u4e2d tablet \u4fe1\u606f\u683c\u5f0f\u4e0d\u6b63\u786e\u7684\u884c\u3002\u5e76\u5728\u6267\u884c\u5b8c\u6210\u540e\uff0c\u663e\u793a\u6210\u529f\u5220\u9664\u7684\u6570\u91cf\u548c\u9519\u8bef\u6570\u91cf\u3002"),(0,l.yg)("h3",{id:"\u5c55\u793a-pb-\u683c\u5f0f\u7684-tabletmeta"},"\u5c55\u793a pb \u683c\u5f0f\u7684 TabletMeta"),(0,l.yg)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u662f\u4e3a\u4e86\u67e5\u770b\u65e7\u7684\u57fa\u4e8e\u6587\u4ef6\u7684\u7ba1\u7406\u7684PB\u683c\u5f0f\u7684 Tablet Meta\uff0c\u4ee5 json \u7684\u683c\u5f0f\u5c55\u793a Tablet Meta\u3002"),(0,l.yg)("p",null,"\u547d\u4ee4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./lib/meta_tool --operation=show_meta --root_path=/path/to/root_path --pb_header_path=path\n")),(0,l.yg)("h3",{id:"\u5c55\u793a-pb-\u683c\u5f0f\u7684-segment-meta"},"\u5c55\u793a pb \u683c\u5f0f\u7684 Segment meta"),(0,l.yg)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u662f\u4e3a\u4e86\u67e5\u770bSegmentV2 \u7684segment meta\u4fe1\u606f\uff0c\u4ee5json \u5f62\u5f0f\u5c55\u793a\u51fa\u6765"),(0,l.yg)("p",null,"\u547d\u4ee4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"./meta_tool --operation=show_segment_footer --file=/path/to/segment/file\n")))}b.isMDXComponent=!0}}]);