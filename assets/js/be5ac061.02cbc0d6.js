"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58356],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>y});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return t?n.createElement(y,o(o({ref:a},p),{},{components:t})):n.createElement(y,o({ref:a},p))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},319648:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(58168),r=(t(296540),t(15680));const l={title:"CLEAN-LABEL",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL",title:"CLEAN-LABEL",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CLEAN-LABEL",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CLEAN-LABEL",language:"en"},sidebar:"docs",previous:{title:"CANCEL-LOAD",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD"},next:{title:"INSERT",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"}},c={},s=[{value:"CLEAN-LABEL",id:"clean-label",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"clean-label"},"CLEAN-LABEL"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CLEAN LABEL"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"For manual cleanup of historical load jobs. After cleaning, the Label can be reused."),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CLEAN LABEL [label] FROM db;\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Clean label label1 from database db1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CLEAN LABEL label1 FROM db1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Clean all labels from database db1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CLEAN LABEL FROM db1;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CLEAN, LABEL\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);