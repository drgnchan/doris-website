"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45043],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,c=d["".concat(m,".").concat(u)]||d[u]||k[u]||i;return a?n.createElement(c,l(l({ref:t},o),{},{components:a})):n.createElement(c,l({ref:t},o))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"\u6587\u4ef6\u7cfb\u7edf\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177",language:"zh-CN"},l=void 0,s={unversionedId:"lakehouse/fs-benchmark-tool",id:"lakehouse/fs-benchmark-tool",title:"\u6587\u4ef6\u7cfb\u7edf\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/fs-benchmark-tool.md",sourceDirName:"lakehouse",slug:"/lakehouse/fs-benchmark-tool",permalink:"/zh-CN/docs/dev/lakehouse/fs-benchmark-tool",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6587\u4ef6\u7cfb\u7edf\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f",permalink:"/zh-CN/docs/dev/lakehouse/external-statistics"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh-CN/docs/dev/lakehouse/faq"}},m={},p=[{value:"\u53c2\u6570\u89e3\u6790",id:"\u53c2\u6570\u89e3\u6790",level:2},{value:"\u7ed3\u679c\u89e3\u6790",id:"\u7ed3\u679c\u89e3\u6790",level:2},{value:"HDFS",id:"hdfs",level:2},{value:"\u5bf9\u8c61\u5b58\u50a8",id:"\u5bf9\u8c61\u5b58\u50a8",level:2}],o={toc:p},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fs_benchmark_tool")," \u53ef\u4ee5\u7528\u4e8e\u6d4b\u8bd5\u5305\u62ec hdfs \u548c\u5bf9\u8c61\u5b58\u50a8\u5728\u5185\u7684\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u7684\u57fa\u672c\u670d\u52a1\u6027\u80fd\uff0c\u5982\u8bfb\u53d6\u3001\u5199\u5165\u6027\u80fd\u3002\u8be5\u5de5\u5177\u4e3b\u8981\u7528\u4e8e\u5206\u6790\u6216\u6392\u67e5\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u7684\u6027\u80fd\u95ee\u9898\u3002"),(0,r.kt)("h1",{id:"\u7f16\u8bd1\u4e0e\u5b89\u88c5"},"\u7f16\u8bd1\u4e0e\u5b89\u88c5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fs_benchmark_tool")," \u662f BE \u4ee3\u7801\u7684\u4e00\u90e8\u5206\uff0c\u9ed8\u8ba4\u4e0d\u7f16\u8bd1\u3002\u5982\u9700\u7f16\u8bd1\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd doris \nBUILD_FS_BENCHMARK=ON ./build.sh  --be\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u5b8c\u4e4b\u540e\u4f1a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"output/be/")," \u76ee\u5f55\u4e0b\u751f\u6210\u5982\u4e0b\u76f8\u5173\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bin/run-fs-benchmark.sh\nlib/fs_benchmark_tool\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"fs_benchmark_tool")," \u9700\u5728BE\u8fd0\u884c\u73af\u5883\u76ee\u5f55\u4e0b\u4f7f\u7528\uff0c\u56e0\u4e3a\u5176\u4f9d\u8d56 BE \u76f8\u5173\u7684 jar \u5305\u3001\u73af\u5883\u53d8\u91cf\u7b49\u5185\u5bb9\u3002")),(0,r.kt)("h1",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u547d\u4ee4\u683c\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh run-fs-benchmark.sh \\\n          --conf=\u914d\u7f6e\u6587\u4ef6 \\\n          --fs_type= \u6587\u4ef6\u7cfb\u7edf \\\n          --operation= \u5bf9\u6587\u4ef6\u7cfb\u7edf\u7684\u64cd\u4f5c  \\\n          --file_size= \u6587\u4ef6\u7684\u5927\u5c0f \\\n          --threads= \u7ebf\u7a0b\u6570\u91cf \\\n          --iterations= \u8fed\u4ee3\u6b21\u6570\n")),(0,r.kt)("h2",{id:"\u53c2\u6570\u89e3\u6790"},"\u53c2\u6570\u89e3\u6790"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--conf"),"\u5fc5\u9009\u53c2\u6570"),(0,r.kt)("p",null,"\u64cd\u4f5c\u6587\u4ef6\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u4e3b\u8981\u7528\u4e8e\u6dfb\u52a0\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u7684\u76f8\u5173\u8fde\u63a5\u4fe1\u606f\u3002\u8be6\u89c1\u4e0b\u6587\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u5982\u8fde\u63a5",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs"),"\uff0c\u8bf7\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs-site.xml"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"core-site.xml")," \u6587\u4ef6\u653e\u7f6e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"be/conf")," \u76ee\u5f55\u4e0b\u3002"),(0,r.kt)("p",null,"\u9664\u8fde\u63a5\u4fe1\u606f\u5916\uff0c\u8fd8\u6709\u4ee5\u4e0b\u989d\u5916\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"file_size"),"\uff1a\u6307\u5b9a\u8bfb\u53d6\u6216\u5199\u5165\u6587\u4ef6\u7684\u5927\u5c0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"buffer_size"),"\uff1a\u4e00\u6b21\u8bfb\u53d6\u64cd\u4f5c\u8bfb\u53d6\u7684\u6587\u4ef6\u5757\u5927\u5c0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"base_dir"),"\uff1a\u6307\u5b9a\u8bfb\u53d6\u6216\u5199\u5165\u6587\u4ef6\u7684 base \u8def\u5f84\u3002"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--fs_type"),"\u5fc5\u9009\u53c2\u6570"),(0,r.kt)("p",null,"\u9700\u8981\u64cd\u4f5c\u7684\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\u3002\u76ee\u524d\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"s3"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--operation")," \u5fc5\u9009\u53c2\u6570"),(0,r.kt)("p",null,"\u6307\u5b9a\u64cd\u4f5c\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"create_write")," \uff1a\u6bcf\u4e2a\u7ebf\u7a0b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"base_dir(conf\u6587\u4ef6\u4e2d\u8bbe\u7f6e)"),"\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u6587\u4ef6\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"test_\u5f53\u524d\u7684\u7ebf\u7a0b\u53f7"),"\uff0c\u5e76\u5199\u5165\u6587\u4ef6\uff0c\u5199\u5165\u5927\u5c0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"file_size"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"open_read"),"\uff1a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"create_write"),"\u521b\u5efa\u597d\u6587\u4ef6\u7684\u57fa\u7840\u4e0b\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u8bfb\u53d6\u6587\u4ef6\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"test_\u5f53\u524d\u7684\u7ebf\u7a0b\u53f7"),"\u7684\u6587\u4ef6\uff0c\u8bfb\u53d6\u5927\u5c0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"file_size"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"single_read"),"\uff1a\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"file_path(conf\u6587\u4ef6\u4e2d\u8bbe\u7f6e)"),"\u6587\u4ef6\uff0c\u8bfb\u53d6\u5927\u5c0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"file_size"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"prefetch_read"),"\uff1a\u4f7f\u7528 prefetch reader \u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"file_path(conf\u6587\u4ef6\u4e2d\u8bbe\u7f6e)"),"\u6587\u4ef6\uff0c\u8bfb\u53d6\u5927\u5c0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"file_size"),"\u3002\u4ec5\u9002\u7528\u4e8e s3\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"exists")," \uff1a\u6bcf\u4e2a\u7ebf\u7a0b\u67e5\u8be2\u6587\u4ef6\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"test_\u5f53\u524d\u7684\u7ebf\u7a0b\u53f7"),"\u7684\u6587\u4ef6\u662f\u5426\u5b58\u5728\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"rename")," \uff1a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"create_write"),"\u521b\u5efa\u597d\u6587\u4ef6\u7684\u57fa\u7840\u4e0b\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u5c06\u6587\u4ef6\u540d\u4e3a\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"test_\u5f53\u524d\u7684\u7ebf\u7a0b\u53f7"),"\u7684\u6587\u4ef6\u66f4\u6539\u4e3a\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"test_\u5f53\u524d\u7684\u7ebf\u7a0b\u53f7_new"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"list"),"\uff1a\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"base_dir(conf\u6587\u4ef6\u4e2d\u8bbe\u7f6e)")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5217\u8868\u3002"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--file_size"),"\n\u64cd\u4f5c\u7684\u6587\u4ef6\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"create_write"),"\uff1a\u9ed8\u8ba4\u4e3a 10MB\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"open_read"),"\uff1a\u9ed8\u8ba4\u4e3a 10MB\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"single_read"),"\uff1a\u9ed8\u8ba4\u4e3a0\uff0c\u5373\u8bfb\u53d6\u5b8c\u6574\u6587\u4ef6\u3002"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--threads")),(0,r.kt)("p",null,"\u64cd\u4f5c\u7684\u7ebf\u7a0b\u6570\u91cf\uff0c\u9ed8\u8ba4\u6570\u91cf\u4e3a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--iterations")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u7ebf\u7a0b\u8fdb\u884c\u8fed\u4ee3\u7684\u6b21\u6570\uff08\u51fd\u6570\u6267\u884c\u6b21\u6570\uff09\uff0c\u9ed8\u8ba4\u6570\u91cf\u4e3a1\u3002"),(0,r.kt)("h2",{id:"\u7ed3\u679c\u89e3\u6790"},"\u7ed3\u679c\u89e3\u6790"),(0,r.kt)("p",null,"\u9664\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"rename"),"\u64cd\u4f5c\u5916\uff0c\u5176\u4f59\u64cd\u4f5c\u90fd\u4f1a\u91cd\u590d\u4e09\u6b21\uff0c\u5e76\u6c42\u51fa\u5e73\u5747\u503c\uff0c\u4e2d\u95f4\u503c\uff0c\u6807\u51c6\u504f\u5dee\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------------------------------------------------------------------------------------------------------\nBenchmark                                                                      Time             CPU   Iterations UserCounters...\n--------------------------------------------------------------------------------------------------------------------------------\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1             13642 ms         2433 ms            1 OpenReaderTime(S)=4.80734 ReadRate(B/S)=101.104M/s ReadTime(S)=13.642 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              3918 ms         1711 ms            1 OpenReaderTime(S)=22.041u ReadRate(B/S)=352.011M/s ReadTime(S)=3.91824 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              3685 ms         1697 ms            1 OpenReaderTime(S)=35.837u ReadRate(B/S)=374.313M/s ReadTime(S)=3.68479 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_mean         7082 ms         1947 ms            3 OpenReaderTime(S)=1.60247 ReadRate(B/S)=275.809M/s ReadTime(S)=7.08166 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_median       3918 ms         1711 ms            3 OpenReaderTime(S)=35.837u ReadRate(B/S)=352.011M/s ReadTime(S)=3.91824 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_stddev       5683 ms          421 ms            3 OpenReaderTime(S)=2.7755 ReadRate(B/S)=151.709M/s ReadTime(S)=5.68258 ReadTotal(B)=0\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_cv          80.24 %         21.64 %             3 OpenReaderTime(S)=173.20% ReadRate(B/S)=55.01% ReadTime(S)=80.24% ReadTotal(B)=0.00%\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_max         13642 ms         2433 ms            3 OpenReaderTime(S)=4.80734 ReadRate(B/S)=374.313M/s ReadTime(S)=13.642 ReadTotal(B)=1.37926G\nHdfsReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_min          3685 ms         1697 ms            3 OpenReaderTime(S)=22.041u ReadRate(B/S)=101.104M/s ReadTime(S)=3.68479 ReadTotal(B)=1.37926G\n")),(0,r.kt)("p",null,"\u91cd\u70b9\u5173\u6ce8\u524d3\u884c\uff0c\u5206\u522b\u4ee3\u78013\u6b21\u91cd\u590d\u6267\u884c\u7684\u7ed3\u679c\u3002\u5176\u4e2d\u7b2c\u4e00\u6b21\u6d89\u53ca\u5230\u4e00\u4e9b\u8fde\u63a5\u521d\u59cb\u5316\u7b49\u64cd\u4f5c\uff0c\u6240\u4ee5\u8017\u65f6\u4f1a\u8f83\u957f\u3002\u540e\u4e24\u6b21\u901a\u5e38\u4ee3\u8868\u6b63\u5e38\u7684\u6027\u80fd\u8868\u73b0\u3002"),(0,r.kt)("p",null,"\u91cd\u70b9\u5173\u6ce8",(0,r.kt)("inlineCode",{parentName:"p"},"UserCounters")," \u4e2d\u7684\u4fe1\u606f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OpenReaderTime"),"\uff1a\u6253\u5f00\u6587\u4ef6\u7684\u8017\u65f6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReadRate"),"\uff1a\u8bfb\u53d6\u901f\u7387\u3002\u8fd9\u91cc\u8bb0\u5f55\u7684\u662f\u603b\u4f53\u7684\u541e\u5410\u3002\u5982\u679c\u662f\u591a\u7ebf\u7a0b\uff0c\u53ef\u4ee5\u9664\u4ee5\u7ebf\u7a0b\u6570\uff0c\u5373\u4ee3\u8868\u6bcf\u7ebf\u7a0b\u5e73\u5747\u901f\u7387\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReadTime"),"\uff1a\u8bfb\u53d6\u8017\u65f6\u3002\u8fd9\u91cc\u8bb0\u5f55\u7684\u662f\u591a\u7ebf\u7a0b\u7d2f\u8ba1\u65f6\u95f4\u3002\u9664\u4ee5\u7ebf\u7a0b\u6570\uff0c\u5373\u4ee3\u8868\u6bcf\u7ebf\u7a0b\u5e73\u5747\u8017\u65f6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReadTotal"),"\uff1a\u8bfb\u53d6\u603b\u91cf\u3002\u8fd9\u91cc\u8bb0\u5f55\u7684\u662f\u591a\u7ebf\u7a0b\u7d2f\u8ba1\u503c\u3002\u9664\u4ee5\u7ebf\u7a0b\u6570\uff0c\u5373\u4ee3\u8868\u6bcf\u7ebf\u7a0b\u5e73\u5747\u8bfb\u53d6\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WriteRate"),"\uff1a\u540c ",(0,r.kt)("inlineCode",{parentName:"li"},"ReadRate"),"\u3002\u4ee3\u8868\u5199\u5165\u901f\u7387\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WriteTime"),"\uff1a\u540c ",(0,r.kt)("inlineCode",{parentName:"li"},"ReadTime"),"\u3002\u4ee3\u8868\u5199\u5165\u8017\u65f6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WriteTotal"),"\uff1a\u540c ",(0,r.kt)("inlineCode",{parentName:"li"},"ReadTotal"),"\u3002\u4ee3\u8868\u5199\u5165\u603b\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ListCost/RenameCost/ExistsCost"),"\uff1a\u5bf9\u5e94\u64cd\u4f5c\u7684\u5355\u4e2a\u64cd\u4f5c\u8017\u65f6\u3002")),(0,r.kt)("h1",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h2",{id:"hdfs"},"HDFS"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sh run-fs-benchmark.sh \\\n    --conf=hdfs.conf \\\n    --fs_type=hdfs \\\n    --operation=create_write  \\\n    --file_size=1024000 \\\n    --threads=3 \\\n    --iterations=5\n")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs.conf"),"\u914d\u7f6e\u6587\u4ef6\uff0c\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs"),"\u6587\u4ef6\u7cfb\u7edf\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"create_write"),"\u64cd\u4f5c\uff0c\u4f7f\u7528\u4e09\u4e2a\u7ebf\u7a0b\uff0c\u6bcf\u6b21\u64cd\u4f5c\u5199\u5165 1MB\uff0c\u8fed\u4ee3\u6b21\u6570\u4e3a5\u6b21\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hdfs.conf"),"\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fs.defaultFS=hdfs://HDFS8000871\nhadoop.username=hadoop\ndfs.nameservices=HDFS8000871\ndfs.ha.namenodes.HDFS8000871=nn1,nn2\ndfs.namenode.rpc-address.HDFS8000871.nn1=102.22.10.56:4007\ndfs.namenode.rpc-address.HDFS8000871.nn2=102.22.10.57:4007\ndfs.client.failover.proxy.provider.HDFS8000871=org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\nbase_dir=hdfs://HDFS8000871/benchmarks/TestDFSIO/io_data/\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---------------------------------------------------------------------------------------------------------------------------------------\nBenchmark                                                                             Time             CPU   Iterations UserCounters...\n---------------------------------------------------------------------------------------------------------------------------------------\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3              61.7 ms         38.7 ms           15 WriteRate(B/S)=3.31902M/s WriteTime(S)=0.387954 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3              49.6 ms         3.09 ms           15 WriteRate(B/S)=4.12967M/s WriteTime(S)=0.427992 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3              45.2 ms         2.72 ms           15 WriteRate(B/S)=4.53148M/s WriteTime(S)=0.362854 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_mean         52.2 ms         14.8 ms            3 WriteRate(B/S)=3.99339M/s WriteTime(S)=0.392933 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_median       49.6 ms         3.09 ms            3 WriteRate(B/S)=4.12967M/s WriteTime(S)=0.387954 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_stddev       8.55 ms         20.7 ms            3 WriteRate(B/S)=617.61k/s WriteTime(S)=0.0328536 WriteTotal(B)=0\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_cv          16.39 %        139.34 %             3 WriteRate(B/S)=15.47% WriteTime(S)=8.36% WriteTotal(B)=0.00%\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_max          61.7 ms         38.7 ms            3 WriteRate(B/S)=4.53148M/s WriteTime(S)=0.427992 WriteTotal(B)=3.072M\nHdfsCreateWriteBenchmark/iterations:5/repeats:3/manual_time/threads:3_min          45.2 ms         2.72 ms            3 WriteRate(B/S)=3.31902M/s WriteTime(S)=0.362854 WriteTotal(B)=3.072M\nHDFS \u4e0a\u751f\u6210\u7684\u6587\u4ef6\uff1a\n[hadoop@172 ~]$ hadoop fs -ls -h /benchmarks/TestDFSIO/io_data/\nFound 3 items\n-rw-r--r--   3 hadoop supergroup        100 2023-06-27 11:55 /benchmarks/TestDFSIO/io_data/test_0\n-rw-r--r--   3 hadoop supergroup        100 2023-06-27 11:55 /benchmarks/TestDFSIO/io_data/test_1\n-rw-r--r--   3 hadoop supergroup        100 2023-06-27 11:55 /benchmarks/TestDFSIO/io_data/test_2\n")),(0,r.kt)("h2",{id:"\u5bf9\u8c61\u5b58\u50a8"},"\u5bf9\u8c61\u5b58\u50a8"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sh bin/run-fs-benchmark.sh \\\n     --conf=s3.conf \\\n     --fs_type=s3 \\\n     --operation=single_read \\\n     --threads=1 \\\n     --iterations=1\n")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"s3.conf"),"\u914d\u7f6e\u6587\u4ef6\uff0c\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"s3"),"\u6587\u4ef6\u7cfb\u7edf\u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"single_read"),"\u64cd\u4f5c\uff0c\u4f7f\u75281\u4e2a\u7ebf\u7a0b\uff0c\u8fed\u4ee3\u6b21\u6570\u4e3a1\u6b21\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"s3.conf")," \u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AWS_ACCESS_KEY=ak\nAWS_SECRET_KEY=sk\nAWS_ENDPOINT=cos.ap-beijing.myqcloud.com\nAWS_REGION=ap-beijing\nfile_path=s3://bucket-123/test_data/parquet/000016_0\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"------------------------------------------------------------------------------------------------------------------------------\nBenchmark                                                                    Time             CPU   Iterations UserCounters...\n------------------------------------------------------------------------------------------------------------------------------\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              7534 ms          140 ms            1 ReadRate(B/S)=11.9109M/s ReadTime(S)=7.53353 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              5988 ms          118 ms            1 ReadRate(B/S)=14.985M/s ReadTime(S)=5.98808 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1              6060 ms          124 ms            1 ReadRate(B/S)=14.8081M/s ReadTime(S)=6.05961 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_mean         6527 ms          127 ms            3 ReadRate(B/S)=13.9014M/s ReadTime(S)=6.52707 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_median       6060 ms          124 ms            3 ReadRate(B/S)=14.8081M/s ReadTime(S)=6.05961 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_stddev        872 ms         11.4 ms            3 ReadRate(B/S)=1.72602M/s ReadTime(S)=0.87235 ReadTotal(B)=0\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_cv          13.37 %          8.94 %             3 ReadRate(B/S)=12.42% ReadTime(S)=13.37% ReadTotal(B)=0.00%\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_max          7534 ms          140 ms            3 ReadRate(B/S)=14.985M/s ReadTime(S)=7.53353 ReadTotal(B)=89.7314M\nS3ReadBenchmark/iterations:1/repeats:3/manual_time/threads:1_min          5988 ms          118 ms            3 ReadRate(B/S)=11.9109M/s ReadTime(S)=5.98808 ReadTotal(B)=89.7314M\n")))}k.isMDXComponent=!0}}]);