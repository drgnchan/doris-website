"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48132],{95788:(e,n,o)=>{o.d(n,{Iu:()=>m,yg:()=>y});var r=o(11504);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var i=r.createContext({}),d=function(e){var n=r.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},m=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(o),u=t,y=c["".concat(i,".").concat(u)]||c[u]||p[u]||l;return o?r.createElement(y,a(a({ref:n},m),{},{components:o})):r.createElement(y,a({ref:n},m))}));function y(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=o.length,a=new Array(l);a[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:t,a[1]=s;for(var d=2;d<l;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},22072:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=o(45072),t=(o(11504),o(95788));const l={title:"SQL MODE",language:"zh-CN"},a=void 0,s={unversionedId:"advanced/sql-mode",id:"version-1.2/advanced/sql-mode",title:"SQL MODE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/advanced/sql-mode.md",sourceDirName:"advanced",slug:"/advanced/sql-mode",permalink:"/zh-CN/docs/1.2/advanced/sql-mode",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SQL MODE",language:"zh-CN"}},i={},d=[{value:"sql mode \u4ecb\u7ecd",id:"sql-mode-\u4ecb\u7ecd",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u64cd\u4f5c\u65b9\u5f0f",id:"\u64cd\u4f5c\u65b9\u5f0f",level:2},{value:"\u5df2\u652f\u6301mode",id:"\u5df2\u652f\u6301mode",level:2},{value:"\u590d\u5408mode",id:"\u590d\u5408mode",level:2}],m={toc:d},c="wrapper";function p(e){let{components:n,...o}=e;return(0,t.yg)(c,(0,r.c)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"sql-mode"},"SQL MODE"),(0,t.yg)("p",null,"Doris\u65b0\u652f\u6301\u7684sql mode\u53c2\u7167\u4e86 Mysql \u7684sql mode\u7ba1\u7406\u673a\u5236\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u90fd\u80fd\u8bbe\u7f6e\u81ea\u5df1\u7684sql mode\uff0c\u62e5\u6709Admin\u6743\u9650\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5458\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40sql mode\u3002"),(0,t.yg)("h2",{id:"sql-mode-\u4ecb\u7ecd"},"sql mode \u4ecb\u7ecd"),(0,t.yg)("p",null,"sql mode\u4f7f\u7528\u6237\u80fd\u5728\u4e0d\u540c\u98ce\u683c\u7684sql\u8bed\u6cd5\u548c\u6570\u636e\u6821\u9a8c\u4e25\u683c\u5ea6\u95f4\u505a\u5207\u6362\uff0c\u4f7fDoris\u5bf9\u5176\u4ed6\u6570\u636e\u5e93\u6709\u66f4\u597d\u7684\u517c\u5bb9\u6027\u3002\u4f8b\u5982\u5728\u4e00\u4e9b\u6570\u636e\u5e93\u91cc\uff0c'||'\u7b26\u53f7\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26\uff0c\u4f46\u5728Doris\u91cc\u5374\u662f\u4e0e'or'\u7b49\u4ef7\u7684\uff0c\u8fd9\u65f6\u7528\u6237\u53ea\u9700\u8981\u4f7f\u7528sql mode\u5207\u6362\u5230\u81ea\u5df1\u60f3\u8981\u7684\u98ce\u683c\u3002\u6bcf\u4e2a\u5ba2\u6237\u7aef\u90fd\u80fd\u8bbe\u7f6esql mode\uff0c\u5e76\u5728\u5f53\u524d\u5bf9\u8bdd\u4e2d\u6709\u6548\uff0c\u53ea\u6709\u62e5\u6709Admin\u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40sql mode\u3002"),(0,t.yg)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,t.yg)("p",null,"sql mode\u7528\u4e00\u4e2a64\u4f4d\u7684Long\u578b\u5b58\u50a8\u5728SessionVariables\u4e2d\uff0c\u8fd9\u4e2a\u5730\u5740\u7684\u6bcf\u4e00\u4f4d\u90fd\u4ee3\u8868\u4e00\u4e2amode\u7684\u5f00\u542f/\u7981\u7528(1\u8868\u793a\u5f00\u542f\uff0c0\u8868\u793a\u7981\u7528)\u72b6\u6001\uff0c\u53ea\u8981\u77e5\u9053\u6bcf\u4e00\u79cdmode\u5177\u4f53\u662f\u5728\u54ea\u4e00\u4f4d\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7\u4f4d\u8fd0\u7b97\u65b9\u4fbf\u5feb\u901f\u7684\u5bf9sql mode\u8fdb\u884c\u6821\u9a8c\u548c\u64cd\u4f5c\u3002"),(0,t.yg)("p",null,"\u6bcf\u4e00\u6b21\u5bf9sql mode\u7684\u67e5\u8be2\uff0c\u90fd\u4f1a\u5bf9\u6b64Long\u578b\u8fdb\u884c\u4e00\u6b21\u89e3\u6790\uff0c\u53d8\u6210\u7528\u6237\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\uff0c\u540c\u7406\uff0c\u7528\u6237\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7684sql mode\u5b57\u7b26\u4e32\uff0c\u4f1a\u88ab\u89e3\u6790\u6210\u80fd\u591f\u5b58\u50a8\u5728SessionVariables\u4e2d\u7684Long\u578b\u3002"),(0,t.yg)("p",null,"\u5df2\u88ab\u8bbe\u7f6e\u597d\u7684\u5168\u5c40sql mode\u4f1a\u88ab\u6301\u4e45\u5316\uff0c\u56e0\u6b64\u5bf9\u5168\u5c40sql mode\u7684\u64cd\u4f5c\u603b\u662f\u53ea\u9700\u4e00\u6b21\uff0c\u5373\u4f7f\u7a0b\u5e8f\u91cd\u542f\u540e\u4ecd\u53ef\u4ee5\u6062\u590d\u4e0a\u4e00\u6b21\u7684\u5168\u5c40sql mode\u3002"),(0,t.yg)("h2",{id:"\u64cd\u4f5c\u65b9\u5f0f"},"\u64cd\u4f5c\u65b9\u5f0f"),(0,t.yg)("p",null,"1\u3001\u8bbe\u7f6esql mode"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'set global sql_mode = "DEFAULT"\nset session sql_mode = "DEFAULT"\n')),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u76ee\u524dDoris\u7684\u9ed8\u8ba4sql mode\u662fDEFAULT\uff08\u4f46\u9a6c\u4e0a\u4f1a\u5728\u540e\u7eed\u4fee\u6539\u4e2d\u4f1a\u6539\u53d8\uff09\u3002\n\u8bbe\u7f6eglobal sql mode\u9700\u8981Admin\u6743\u9650\uff0c\u5e76\u4f1a\u5f71\u54cd\u6240\u6709\u5728\u6b64\u540e\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u3002\n\u8bbe\u7f6esession sql mode\u53ea\u4f1a\u5f71\u54cd\u5f53\u524d\u5bf9\u8bdd\u5ba2\u6237\u7aef\uff0c\u9ed8\u8ba4\u4e3asession\u65b9\u5f0f\u3002")),(0,t.yg)("p",null,"2\u3001\u67e5\u8be2sql mode"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"select @@global.sql_mode\nselect @@session.sql_mode\n")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u9664\u4e86\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u65b9\u5f0f\u8fd4\u56de\u6240\u6709session variables\u6765\u67e5\u770b\u5f53\u524dsql mode")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"show global variables\nshow session variables\n")),(0,t.yg)("h2",{id:"\u5df2\u652f\u6301mode"},"\u5df2\u652f\u6301mode"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"PIPES_AS_CONCAT")),(0,t.yg)("p",{parentName:"li"},"\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0c'||'\u7b26\u53f7\u662f\u4e00\u79cd\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26\u53f7\uff08\u540cCONCAT()\u51fd\u6570\uff09\uff0c\u800c\u4e0d\u662f'OR'\u7b26\u53f7\u7684\u540c\u4e49\u8bcd\u3002(e.g., ",(0,t.yg)("inlineCode",{parentName:"p"},"'a'||'b' = 'ab'"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"1||0 = '10'"),")"))),(0,t.yg)("h2",{id:"\u590d\u5408mode"},"\u590d\u5408mode"),(0,t.yg)("p",null,"\uff08\u540e\u7eed\u8865\u5145\uff09"))}p.isMDXComponent=!0}}]);