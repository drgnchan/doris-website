"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67264],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>g});var t=n(296540);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,g=s["".concat(c,".").concat(d)]||s[d]||y[d]||a;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function g(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},928568:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=n(58168),l=(n(296540),n(15680));const a={title:"Nereids \u5168\u65b0\u4f18\u5316\u5668",language:"zh-CN"},i=void 0,o={unversionedId:"query-acceleration/nereids",id:"version-2.1/query-acceleration/nereids",title:"Nereids \u5168\u65b0\u4f18\u5316\u5668",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/nereids.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/nereids",permalink:"/zh-CN/docs/query-acceleration/nereids",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Nereids \u5168\u65b0\u4f18\u5316\u5668",language:"zh-CN"},sidebar:"docs",previous:{title:"PipelineX \u6267\u884c\u5f15\u64ce",permalink:"/zh-CN/docs/query-acceleration/pipeline-x-execution-engine"},next:{title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",permalink:"/zh-CN/docs/query-acceleration/hight-concurrent-point-query"}},c={},u=[{value:"\u7814\u53d1\u80cc\u666f",id:"\u7814\u53d1\u80cc\u666f",level:2},{value:"\u65b0\u4f18\u5316\u5668\u7684\u4f18\u52bf",id:"\u65b0\u4f18\u5316\u5668\u7684\u4f18\u52bf",level:2},{value:"\u66f4\u667a\u80fd",id:"\u66f4\u667a\u80fd",level:3},{value:"\u66f4\u5065\u58ee",id:"\u66f4\u5065\u58ee",level:3},{value:"\u66f4\u7075\u6d3b",id:"\u66f4\u7075\u6d3b",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5df2\u77e5\u95ee\u9898\u548c\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd",id:"\u5df2\u77e5\u95ee\u9898\u548c\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd",level:2},{value:"\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd",id:"\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd",level:3},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:3}],p={toc:u},s="wrapper";function y(e){let{components:r,...a}=e;return(0,l.yg)(s,(0,t.A)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"nereids-\u5168\u65b0\u4f18\u5316\u5668"},"Nereids \u5168\u65b0\u4f18\u5316\u5668"),(0,l.yg)("version",{since:"dev"}),(0,l.yg)("h2",{id:"\u7814\u53d1\u80cc\u666f"},"\u7814\u53d1\u80cc\u666f"),(0,l.yg)("p",null,"\u73b0\u4ee3\u67e5\u8be2\u4f18\u5316\u5668\u9762\u4e34\u66f4\u52a0\u590d\u6742\u7684\u67e5\u8be2\u8bed\u53e5\u3001\u66f4\u52a0\u591a\u6837\u7684\u67e5\u8be2\u573a\u666f\u7b49\u6311\u6218\u3002\u540c\u65f6\uff0c\u7528\u6237\u4e5f\u8d8a\u6765\u8d8a\u8feb\u5207\u7684\u5e0c\u671b\u5c3d\u5feb\u83b7\u5f97\u67e5\u8be2\u7ed3\u679c\u3002\u65e7\u4f18\u5316\u5668\u7684\u9648\u65e7\u67b6\u6784\uff0c\u96be\u4ee5\u6ee1\u8db3\u4eca\u540e\u5feb\u901f\u8fed\u4ee3\u7684\u9700\u8981\u3002\u57fa\u4e8e\u6b64\uff0c\u6211\u4eec\u5f00\u59cb\u7740\u624b\u7814\u53d1\u73b0\u4ee3\u67b6\u6784\u7684\u5168\u65b0\u67e5\u8be2\u4f18\u5316\u5668\u3002\u5728\u66f4\u9ad8\u6548\u7684\u5904\u7406\u5f53\u524dDoris\u573a\u666f\u7684\u67e5\u8be2\u8bf7\u6c42\u7684\u540c\u65f6\uff0c\u63d0\u4f9b\u66f4\u597d\u7684\u6269\u5c55\u6027\uff0c\u4e3a\u5904\u7406\u4eca\u540e Doris \u6240\u9700\u9762\u4e34\u7684\u66f4\u590d\u6742\u7684\u9700\u6c42\u6253\u4e0b\u826f\u597d\u7684\u57fa\u7840\u3002"),(0,l.yg)("h2",{id:"\u65b0\u4f18\u5316\u5668\u7684\u4f18\u52bf"},"\u65b0\u4f18\u5316\u5668\u7684\u4f18\u52bf"),(0,l.yg)("h3",{id:"\u66f4\u667a\u80fd"},"\u66f4\u667a\u80fd"),(0,l.yg)("p",null,"\u65b0\u4f18\u5316\u5668\u5c06\u6bcf\u4e2a RBO \u548c CBO \u7684\u4f18\u5316\u70b9\u4ee5\u89c4\u5219\u7684\u5f62\u5f0f\u5448\u73b0\u3002\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u89c4\u5219\uff0c\u65b0\u4f18\u5316\u5668\u90fd\u63d0\u4f9b\u4e86\u4e00\u7ec4\u7528\u4e8e\u63cf\u8ff0\u67e5\u8be2\u8ba1\u5212\u5f62\u72b6\u7684\u6a21\u5f0f\uff0c\u53ef\u4ee5\u7cbe\u786e\u7684\u5339\u914d\u53ef\u4f18\u5316\u7684\u67e5\u8be2\u8ba1\u5212\u3002\u57fa\u4e8e\u6b64\uff0c\u65b0\u4f18\u5316\u5668\u53ef\u4ee5\u66f4\u597d\u7684\u652f\u6301\u8bf8\u5982\u591a\u5c42\u5b50\u67e5\u8be2\u5d4c\u5957\u7b49\u66f4\u4e3a\u590d\u6742\u7684\u67e5\u8be2\u8bed\u53e5\u3002"),(0,l.yg)("p",null,"\u540c\u65f6\u65b0\u4f18\u5316\u5668\u7684 CBO \u57fa\u4e8e\u5148\u8fdb\u7684 Cascades \u6846\u67b6\uff0c\u4f7f\u7528\u4e86\u66f4\u4e3a\u4e30\u5bcc\u7684\u6570\u636e\u7edf\u8ba1\u4fe1\u606f\uff0c\u5e76\u5e94\u7528\u4e86\u7ef4\u5ea6\u66f4\u79d1\u5b66\u7684\u4ee3\u4ef7\u6a21\u578b\u3002\u8fd9\u4f7f\u5f97\u65b0\u4f18\u5316\u5668\u5728\u9762\u5bf9\u591a\u8868 Join \u7684\u67e5\u8be2\u65f6\uff0c\u66f4\u52a0\u5f97\u5fc3\u5e94\u624b\u3002"),(0,l.yg)("p",null,"TPC-H SF100 \u67e5\u8be2\u901f\u5ea6\u6bd4\u8f83\u3002\u73af\u5883\u4e3a 3BE\uff0c\u65b0\u4f18\u5316\u5668\u4f7f\u7528\u539f\u59cb SQL \uff0c\u6267\u884c SQL \u524d\u6536\u96c6\u4e86\u7edf\u8ba1\u4fe1\u606f\u3002\u65e7\u4f18\u5316\u5668\u4f7f\u7528\u624b\u5de5\u8c03\u4f18 SQL\u3002\u53ef\u4ee5\u770b\u5230\uff0c\u65b0\u4f18\u5316\u5668\u5728\u65e0\u9700\u624b\u5de5\u4f18\u5316\u67e5\u8be2\u7684\u60c5\u51b5\u4e0b\uff0c\u603b\u4f53\u67e5\u8be2\u65f6\u95f4\u4e0e\u65e7\u4f18\u5316\u5668\u624b\u5de5\u4f18\u5316\u540e\u7684\u67e5\u8be2\u65f6\u95f4\u76f8\u8fd1\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"execution time comparison",src:n(889254).A,width:"3694",height:"1333"})),(0,l.yg)("h3",{id:"\u66f4\u5065\u58ee"},"\u66f4\u5065\u58ee"),(0,l.yg)("p",null,"\u65b0\u4f18\u5316\u5668\u7684\u6240\u6709\u4f18\u5316\u89c4\u5219\uff0c\u5747\u5728\u903b\u8f91\u6267\u884c\u8ba1\u5212\u6811\u4e0a\u5b8c\u6210\u3002\u5f53\u67e5\u8be2\u8bed\u6cd5\u8bed\u4e49\u89e3\u6790\u5b8c\u6210\u540e\uff0c\u53d8\u8f6c\u6362\u4e3a\u4e00\u68f5\u6811\u72b6\u7ed3\u6784\u3002\u76f8\u6bd4\u4e8e\u65e7\u4f18\u5316\u5668\u7684\u5185\u90e8\u6570\u636e\u7ed3\u6784\u66f4\u4e3a\u5408\u7406\u3001\u7edf\u4e00\u3002\u4ee5\u5b50\u67e5\u8be2\u5904\u7406\u4e3a\u4f8b\uff0c\u65b0\u4f18\u5316\u5668\u57fa\u4e8e\u65b0\u7684\u6570\u636e\u7ed3\u6784\uff0c\u907f\u514d\u4e86\u65e7\u4f18\u5316\u5668\u4e2d\u4f17\u591a\u89c4\u5219\u5bf9\u5b50\u67e5\u8be2\u7684\u5355\u72ec\u5904\u7406\u3002\u8fdb\u800c\u51cf\u5c11\u4e86\u4f18\u5316\u89c4\u5219\u51fa\u73b0\u903b\u8f91\u9519\u8bef\u7684\u53ef\u80fd\u3002"),(0,l.yg)("h3",{id:"\u66f4\u7075\u6d3b"},"\u66f4\u7075\u6d3b"),(0,l.yg)("p",null,"\u65b0\u4f18\u5316\u5668\u7684\u67b6\u6784\u8bbe\u8ba1\u66f4\u5408\u7406\uff0c\u66f4\u73b0\u4ee3\u3002\u53ef\u4ee5\u65b9\u4fbf\u5730\u6269\u5c55\u4f18\u5316\u89c4\u5219\u548c\u5904\u7406\u9636\u6bb5\u3002\u80fd\u591f\u66f4\u4e3a\u8fc5\u901f\u7684\u54cd\u5e94\u7528\u6237\u7684\u9700\u6c42\u3002"),(0,l.yg)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.yg)("p",null,"\u5f00\u542f\u65b0\u4f18\u5316\u5668"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET enable_nereids_planner=true;\n")),(0,l.yg)("p",null,"\u5f00\u542f\u81ea\u52a8\u56de\u9000\u5230\u65e7\u4f18\u5316\u5668"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SET enable_fallback_to_original_planner=true;\n")),(0,l.yg)("p",null,"\u4e3a\u4e86\u80fd\u591f\u5145\u5206\u5229\u7528\u65b0\u4f18\u5316\u5668\u7684CBO\u80fd\u529b\uff0c\u5f3a\u70c8\u5efa\u8bae\u5bf9\u67e5\u8be2\u5ef6\u8fdf\u654f\u611f\u7684\u8868\uff0c\u6267\u884canalyze\u8bed\u53e5\uff0c\u4ee5\u6536\u96c6\u5217\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,l.yg)("h2",{id:"\u5df2\u77e5\u95ee\u9898\u548c\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd"},"\u5df2\u77e5\u95ee\u9898\u548c\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd"),(0,l.yg)("h3",{id:"\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd"},"\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u5f00\u542f\u4e86\u81ea\u52a8\u56de\u9000\uff0c\u5219\u4f1a\u81ea\u52a8\u56de\u9000\u5230\u65e7\u4f18\u5316\u5668\u6267\u884c")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Json\u3001Array\u3001Map\u3001Struct \u7c7b\u578b\uff1a\u67e5\u8be2\u7684\u8868\u542b\u6709\u4ee5\u4e0a\u7c7b\u578b\uff0c\u6216\u8005\u67e5\u8be2\u4e2d\u7684\u51fd\u6570\u4f1a\u8f93\u51fa\u4ee5\u4e0a\u7c7b\u578b"),(0,l.yg)("li",{parentName:"ul"},"DML\uff1a\u4ec5\u652f\u6301\u5982\u4e0bDML\uff1aInsert Into Select, Update, Delete"),(0,l.yg)("li",{parentName:"ul"},"\u5e26\u8fc7\u6ee4\u6761\u4ef6\u7684\u7269\u5316\u89c6\u56fe"),(0,l.yg)("li",{parentName:"ul"},"\u522b\u540d\u51fd\u6570"),(0,l.yg)("li",{parentName:"ul"},"Java UDF \u548c HDFS UDF"),(0,l.yg)("li",{parentName:"ul"},"\u9ad8\u5e76\u53d1\u70b9\u67e5\u8be2\u4f18\u5316")),(0,l.yg)("h3",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u547d\u4e2d Partition Cache")))}y.isMDXComponent=!0},889254:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/nereids-tpch-d31958316d7c0404806812d5b41f0286.png"}}]);