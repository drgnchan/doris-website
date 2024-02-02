"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71772],{95788:(e,r,n)=>{n.d(r,{Iu:()=>s,yg:()=>m});var t=n(11504);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(p,".").concat(d)]||u[d]||y[d]||o;return n?t.createElement(m,l(l({ref:r},s),{},{components:n})):t.createElement(m,l({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86156:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(45072),a=(n(11504),n(95788));const o={title:"BITMAP",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/BITMAP",id:"version-1.2/sql-manual/sql-reference/Data-Types/BITMAP",title:"BITMAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/BITMAP.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/BITMAP",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/BITMAP",draft:!1,tags:[],version:"1.2",frontMatter:{title:"BITMAP",language:"zh-CN"},sidebar:"docs",previous:{title:"HLL(HyperLogLog)",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/HLL"},next:{title:"QUANTILE_STATE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/QUANTILE_STATE"}},p={},c=[{value:"BITMAP",id:"bitmap",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},u="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.c)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap"},"BITMAP"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP\nBITMAP\u4e0d\u80fd\u4f5c\u4e3akey\u5217\u4f7f\u7528\uff0c\u5efa\u8868\u65f6\u914d\u5408\u805a\u5408\u7c7b\u578b\u4e3aBITMAP_UNION\u3002\n\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002\n\u5e76\u4e14BITMAP\u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684bitmap_union_count\u3001bitmap_union\u3001bitmap_hash\u3001bitmap_hash64\u7b49\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002\n\n\u79bb\u7ebf\u573a\u666f\u4e0b\u4f7f\u7528BITMAP\u4f1a\u5f71\u54cd\u5bfc\u5165\u901f\u5ea6\uff0c\u5728\u6570\u636e\u91cf\u5927\u7684\u60c5\u51b5\u4e0b\u67e5\u8be2\u901f\u5ea6\u4f1a\u6162\u4e8eHLL\uff0c\u5e76\u4f18\u4e8eCount Distinct\u3002\n\u6ce8\u610f\uff1a\u5b9e\u65f6\u573a\u666f\u4e0bBITMAP\u5982\u679c\u4e0d\u4f7f\u7528\u5168\u5c40\u5b57\u5178\uff0c\u4f7f\u7528\u4e86bitmap_hash()\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6709\u5343\u5206\u4e4b\u4e00\u5de6\u53f3\u7684\u8bef\u5dee\u3002\u5982\u679c\u8fd9\u4e2a\u8bef\u5dee\u4e0d\u53ef\u63a5\u53d7\uff0c\u53ef\u4ee5\u4f7f\u7528bitmap_hash64\u3002\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'create table metric_table (\n  datekey int,\n  hour int,\n  device_id bitmap BITMAP_UNION\n)\naggregate key (datekey, hour)\ndistributed by hash(datekey, hour) buckets 1\nproperties(\n  "replication_num" = "1"\n);\n')),(0,a.yg)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"insert into metric_table values\n(20200622, 1, to_bitmap(243)),\n(20200622, 2, bitmap_from_array([1,2,3,4,5,434543])),\n(20200622, 3, to_bitmap(287667876573));\n")),(0,a.yg)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select hour, BITMAP_UNION_COUNT(pv) over(order by hour) uv from(\n   select hour, BITMAP_UNION(device_id) as pv\n   from metric_table -- \u67e5\u8be2\u6bcf\u5c0f\u65f6\u7684\u7d2f\u8ba1UV\n   where datekey=20200622\ngroup by hour order by 1\n) final;\n")),(0,a.yg)("p",null,"\u5728\u67e5\u8be2\u65f6\uff0cBITMAP \u53ef\u914d\u5408",(0,a.yg)("inlineCode",{parentName:"p"},"return_object_data_as_binary"),"\u53d8\u91cf\u8fdb\u884c\u4f7f\u7528\uff0c\u8be6\u60c5\u53ef\u67e5\u770b",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/advanced/variables"},"\u53d8\u91cf"),"\u7ae0\u8282\u3002"),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP\n")))}y.isMDXComponent=!0}}]);