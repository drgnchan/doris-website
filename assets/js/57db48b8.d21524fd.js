"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82320],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>y});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52168:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(45072),r=(a(11504),a(95788));const l={title:"CLEAN-LABEL",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL",title:"CLEAN-LABEL",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL",draft:!1,tags:[],version:"current",frontMatter:{title:"CLEAN-LABEL",language:"en"},sidebar:"docs",previous:{title:"CANCEL-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD"},next:{title:"INSERT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"}},c={},s=[{value:"CLEAN-LABEL",id:"clean-label",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"clean-label"},"CLEAN-LABEL"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CLEAN LABEL"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"For manual cleanup of historical load jobs. After cleaning, the Label can be reused."),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CLEAN LABEL [label] FROM db;\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Clean label label1 from database db1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CLEAN LABEL label1 FROM db1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Clean all labels from database db1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CLEAN LABEL FROM db1;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CLEAN, LABEL\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);