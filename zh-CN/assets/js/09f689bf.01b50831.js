"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[60231],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>d});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),m=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},y=function(e){var a=m(e.components);return t.createElement(p.Provider,{value:a},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),s=m(n),c=r,d=s["".concat(p,".").concat(c)]||s[c]||g[c]||l;return n?t.createElement(d,i(i({ref:a},y),{},{components:n})):t.createElement(d,i({ref:a},y))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},499069:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var t=n(58168),r=(n(296540),n(15680));const l={title:"ALTER-ROUTINE-LOAD",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",title:"ALTER-ROUTINE-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-ROUTINE-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},next:{title:"PAUSE-ROUTINE-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD"}},p={},m=[{value:"ALTER-ROUTINE-LOAD",id:"alter-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],y={toc:m},s="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(s,(0,t.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-routine-load"},"ALTER-ROUTINE-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER ROUTINE LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u6cd5\u7528\u4e8e\u4fee\u6539\u5df2\u7ecf\u521b\u5efa\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.yg)("p",null,"\u53ea\u80fd\u4fee\u6539\u5904\u4e8e PAUSED \u72b6\u6001\u7684\u4f5c\u4e1a\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER ROUTINE LOAD FOR [db.]job_name\n[job_properties]\nFROM data_source\n[data_source_properties]\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"[db.]job_name")),(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u8981\u4fee\u6539\u7684\u4f5c\u4e1a\u540d\u79f0\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"tbl_name")),(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u5bfc\u5165\u7684\u8868\u7684\u540d\u79f0\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"job_properties")),(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u9700\u8981\u4fee\u6539\u7684\u4f5c\u4e1a\u53c2\u6570\u3002\u76ee\u524d\u4ec5\u652f\u6301\u5982\u4e0b\u53c2\u6570\u7684\u4fee\u6539\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"desired_concurrent_number")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_error_number")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_batch_interval")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_batch_rows")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_batch_size")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"jsonpaths")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"json_root")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"strip_outer_array")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"strict_mode")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"timezone")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"num_as_string")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"fuzzy_parse")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"partial_columns")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_filter_ratio"))))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"data_source")),(0,r.yg)("p",{parentName:"li"},"\u6570\u636e\u6e90\u7684\u7c7b\u578b\u3002\u5f53\u524d\u652f\u6301\uff1a"),(0,r.yg)("p",{parentName:"li"},"KAFKA")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"data_source_properties")),(0,r.yg)("p",{parentName:"li"},"\u6570\u636e\u6e90\u7684\u76f8\u5173\u5c5e\u6027\u3002\u76ee\u524d\u4ec5\u652f\u6301\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_partitions")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_offsets")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_broker_list")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_topic")),(0,r.yg)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49 property\uff0c\u5982 ",(0,r.yg)("inlineCode",{parentName:"li"},"property.group.id"))),(0,r.yg)("p",{parentName:"li"},"\u6ce8\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_partitions")," \u548c ",(0,r.yg)("inlineCode",{parentName:"li"},"kafka_offsets")," \u7528\u4e8e\u4fee\u6539\u5f85\u6d88\u8d39\u7684 kafka partition \u7684offset\uff0c\u4ec5\u80fd\u4fee\u6539\u5f53\u524d\u5df2\u7ecf\u6d88\u8d39\u7684 partition\u3002\u4e0d\u80fd\u65b0\u589e partition\u3002")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"desired_concurrent_number")," \u4fee\u6539\u4e3a 1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "1"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"desired_concurrent_number")," \u4fee\u6539\u4e3a 10\uff0c\u4fee\u6539 partition \u7684offset\uff0c\u4fee\u6539 group id\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "10"\n)\nFROM kafka\n(\n    "kafka_partitions" = "0, 1, 2",\n    "kafka_offsets" = "100, 200, 100",\n    "property.group.id" = "new_group"\n);\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER, ROUTINE, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}g.isMDXComponent=!0}}]);