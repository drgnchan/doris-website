"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84852],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>g});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,g=m["".concat(o,".").concat(y)]||m[y]||c[y]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},72720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(45072),r=(n(11504),n(95788));const l={title:"bitmap_hash",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_hash",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_hash",title:"bitmap_hash",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_hash.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_hash",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_hash",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_hash",language:"zh-CN"},sidebar:"docs",previous:{title:"to_bitmap",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/to_bitmap"},next:{title:"bitmap_from_string",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_from_string"}},o={},p=[{value:"bitmap_hash",id:"bitmap_hash",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"bitmap_hash"},"bitmap_hash"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"BITMAP_HASH"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u5bf9\u4efb\u610f\u7c7b\u578b\u7684\u8f93\u5165\uff0c\u8ba1\u7b97\u5176 32 \u4f4d\u7684\u54c8\u5e0c\u503c\uff0c\u5e76\u8fd4\u56de\u5305\u542b\u8be5\u54c8\u5e0c\u503c\u7684 bitmap\u3002\u8be5\u51fd\u6570\u4f7f\u7528\u7684\u54c8\u5e0c\u7b97\u6cd5\u4e3a MurMur3\u3002MurMur3 \u7b97\u6cd5\u662f\u4e00\u79cd\u9ad8\u6027\u80fd\u7684\u3001\u4f4e\u78b0\u649e\u7387\u7684\u6563\u5217\u7b97\u6cd5\uff0c\u5176\u8ba1\u7b97\u51fa\u6765\u7684\u503c\u63a5\u8fd1\u4e8e\u968f\u673a\u5206\u5e03\uff0c\u5e76\u4e14\u80fd\u901a\u8fc7\u5361\u65b9\u5206\u5e03\u6d4b\u8bd5\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u3001\u4e0d\u540c Seed \u503c\u8ba1\u7b97\u51fa\u6765\u7684\u6563\u5217\u503c\u53ef\u80fd\u4e0d\u540c\u3002\u5173\u4e8e\u6b64\u7b97\u6cd5\u7684\u6027\u80fd\u53ef\u4ee5\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"http://rurban.github.io/smhasher/"},"Smhasher")," \u6392\u884c\u699c\u3002"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_HASH(<any_value>)")),(0,r.yg)("h4",{id:"arguments"},"Arguments"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<any_value>"),"\n\u4efb\u4f55\u503c\u6216\u5b57\u6bb5\u8868\u8fbe\u5f0f\u3002"),(0,r.yg)("h4",{id:"return-type"},"Return Type"),(0,r.yg)("p",null,"BITMAP"),(0,r.yg)("h4",{id:"remarks"},"Remarks"),(0,r.yg)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0cMurMur 32 \u4f4d\u7b97\u6cd5\u5bf9\u4e8e\u5b8c\u5168\u968f\u673a\u7684\u3001\u8f83\u77ed\u7684\u5b57\u7b26\u4e32\u7684\u6563\u5217\u6548\u679c\u8f83\u597d\uff0c\u78b0\u649e\u7387\u80fd\u8fbe\u5230\u51e0\u5341\u4ebf\u5206\u4e4b\u4e00\uff0c\u4f46\u5bf9\u4e8e\u8f83\u957f\u7684\u5b57\u7b26\u4e32\uff0c\u6bd4\u5982\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u8def\u5f84\uff0c\u78b0\u649e\u7387\u4f1a\u6bd4\u8f83\u9ad8\u3002\u5982\u679c\u4f60\u626b\u63cf\u4f60\u7cfb\u7edf\u91cc\u7684\u8def\u5f84\uff0c\u5c31\u4f1a\u53d1\u73b0\u78b0\u649e\u7387\u4ec5\u4ec5\u53ea\u80fd\u8fbe\u5230\u767e\u4e07\u5206\u4e4b\u4e00\u751a\u81f3\u662f\u5341\u4e07\u5206\u4e4b\u4e00\u3002"),(0,r.yg)("p",null,"\u4e0b\u9762\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684 MurMur3 \u6563\u5217\u503c\u662f\u4e00\u6837\u7684\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmap_to_string(bitmap_hash('/System/Volumes/Data/Library/Developer/CommandLineTools/SDKs/MacOSX12.3.sdk/System/Library/Frameworks/KernelManagement.framework/KernelManagement.tbd')) AS a ,\n       bitmap_to_string(bitmap_hash('/System/Library/PrivateFrameworks/Install.framework/Versions/Current/Resources/es_419.lproj/Architectures.strings')) AS b;\n")),(0,r.yg)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+-----------+-----------+\n| a         | b         |\n+-----------+-----------+\n| 282251871 | 282251871 |\n+-----------+-----------+\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u8ba1\u7b97\u67d0\u4e2a\u503c\u7684 MurMur3\uff0c\u4f60\u53ef\u4ee5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"select bitmap_to_array(bitmap_hash('hello'))[1];\n")),(0,r.yg)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+-------------------------------------------------------------+\n| %element_extract%(bitmap_to_array(bitmap_hash('hello')), 1) |\n+-------------------------------------------------------------+\n|                                                  1321743225 |\n+-------------------------------------------------------------+\n")),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u7edf\u8ba1\u67d0\u4e00\u5217\u53bb\u91cd\u540e\u7684\u4e2a\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528\u4f4d\u56fe\u7684\u65b9\u5f0f\uff0c\u67d0\u4e9b\u573a\u666f\u4e0b\u6027\u80fd\u6bd4 ",(0,r.yg)("inlineCode",{parentName:"p"},"count distinct")," \u597d\u5f88\u591a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select bitmap_count(bitmap_union(bitmap_hash(`word`))) from `words`;\n")),(0,r.yg)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+-------------------------------------------------+\n| bitmap_count(bitmap_union(bitmap_hash(`word`))) |\n+-------------------------------------------------+\n|                                        33263478 |\n+-------------------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"BITMAP_HASH,BITMAP\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("p",null,"\u8fd8\u53ef\u53c2\u89c1"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_hash64"},"BITMAP_HASH64"))))}c.isMDXComponent=!0}}]);