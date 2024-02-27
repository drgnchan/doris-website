"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[72334],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,y=u["".concat(s,".").concat(m)]||u[m]||O[m]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>O,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(58168),l=(n(96540),n(15680));const a={title:"SHOW-COLLATION",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-COLLATION",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION",title:"SHOW-COLLATION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-COLLATION",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-COLUMN-STATS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-COLUMN-STATS"},next:{title:"SHOW-DATABASES",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES"}},s={},c=[{value:"SHOW-COLLATION",id:"show-collation",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function O(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"show-collation"},"SHOW-COLLATION"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u5728 Doris \u4e2d\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW COLLATION")," \u547d\u4ee4\u7528\u4e8e\u663e\u793a\u6570\u636e\u5e93\u4e2d\u53ef\u7528\u7684\u5b57\u7b26\u96c6\u6821\u5bf9\u3002\u6821\u5bf9\u662f\u4e00\u7ec4\u51b3\u5b9a\u6570\u636e\u5982\u4f55\u6392\u5e8f\u548c\u6bd4\u8f83\u7684\u89c4\u5219\u3002\u8fd9\u4e9b\u89c4\u5219\u4f1a\u5f71\u54cd\u5b57\u7b26\u6570\u636e\u7684\u5b58\u50a8\u548c\u68c0\u7d22\u3002Doris \u76ee\u524d\u4e3b\u8981\u652f\u6301 utf8_general_ci \u8fd9\u4e00\u79cd\u6821\u5bf9\u65b9\u5f0f\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"SHOW COLLATION")," \u547d\u4ee4\u8fd4\u56de\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Collation\uff1a\u6821\u5bf9\u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"Charset\uff1a\u5b57\u7b26\u96c6"),(0,l.yg)("li",{parentName:"ul"},"Id\uff1a\u6821\u5bf9\u7684ID"),(0,l.yg)("li",{parentName:"ul"},"Default\uff1a\u662f\u5426\u662f\u8be5\u5b57\u7b26\u96c6\u7684\u9ed8\u8ba4\u6821\u5bf9"),(0,l.yg)("li",{parentName:"ul"},"Compiled\uff1a\u662f\u5426\u5df2\u7f16\u8bd1"),(0,l.yg)("li",{parentName:"ul"},"Sortlen\uff1a\u6392\u5e8f\u957f\u5ea6")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show collation;\n+-----------------+---------+------+---------+----------+---------+\n| Collation       | Charset | Id   | Default | Compiled | Sortlen |\n+-----------------+---------+------+---------+----------+---------+\n| utf8_general_ci | utf8    |   33 | Yes     | Yes      |       1 |\n+-----------------+---------+------+---------+----------+---------+\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SHOW, COLLATION\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"),(0,l.yg)("p",null,"\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW COLLATION")," \u547d\u4ee4\u53ef\u4ee5\u8ba9\u4f60\u4e86\u89e3\u6570\u636e\u5e93\u4e2d\u53ef\u7528\u7684\u6821\u5bf9\u89c4\u5219\u53ca\u5176\u7279\u6027\u3002\u8fd9\u4e9b\u4fe1\u606f\u53ef\u4ee5\u5e2e\u52a9\u786e\u4fdd\u4f60\u7684\u5b57\u7b26\u6570\u636e\u6309\u7167\u9884\u671f\u7684\u65b9\u5f0f\u8fdb\u884c\u6392\u5e8f\u548c\u6bd4\u8f83\u3002\u5982\u679c\u9047\u5230\u5b57\u7b26\u6bd4\u8f83\u6216\u6392\u5e8f\u7684\u95ee\u9898\uff0c\u68c0\u67e5\u6821\u5bf9\u8bbe\u7f6e\uff0c\u786e\u4fdd\u5b83\u4eec\u7b26\u5408\u4f60\u7684\u9884\u671f\uff0c\u4f1a\u662f\u4e2a\u5f88\u6709\u5e2e\u52a9\u7684\u64cd\u4f5c\u3002"))}O.isMDXComponent=!0}}]);