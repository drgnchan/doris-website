"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75200],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>f});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(45072),a=(n(11504),n(95788));const o={title:"DATE",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/DATE",id:"version-1.2/sql-manual/sql-reference/Data-Types/DATE",title:"DATE",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Types/DATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/DATE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DATE",language:"en"},sidebar:"docs",previous:{title:"DECIMALV3",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMALV3"},next:{title:"DATETIME",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/DATETIME"}},s={},p=[{value:"DATE",id:"date",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"note",id:"note",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date"},"DATE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"DATE function"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"Date\nConvert input type to DATE type\ndate\nDate type, the current range of values is ","['0000-01-01','9999-12-31']",", and the default print form is 'yyyy-MM-dd'."),(0,a.yg)("h3",{id:"note"},"note"),(0,a.yg)("p",null,"If you use version 1.2 and above, it is strongly recommended that you use the DATEV2 type instead of the DATE type as DATEV2 is more efficient than DATE type\u3002"),(0,a.yg)("p",null,"We intend to delete this type in 2024. At this stage, Doris prohibits creating tables containing the ",(0,a.yg)("inlineCode",{parentName:"p"},"DATE")," type by default. If you need to use it, you need to add ",(0,a.yg)("inlineCode",{parentName:"p"},"disable_datev1 = false")," in the FE's config and restart the FE."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT DATE('2003-12-31 01:02:03');\n+-----------------------------+\n| date('2003-12-31 01:02:03') |\n+-----------------------------+\n| 2003-12-31                  |\n+-----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"DATE"))}y.isMDXComponent=!0}}]);