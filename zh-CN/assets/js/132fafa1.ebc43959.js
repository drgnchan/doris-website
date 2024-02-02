"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65284],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>O});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},S=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),S=a,O=u["".concat(s,".").concat(S)]||u[S]||m[S]||l;return r?n.createElement(O,o(o({ref:t},p),{},{components:r})):n.createElement(O,o({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=S;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}S.displayName="MDXCreateElement"},31508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(45072),a=(r(11504),r(95788));const l={title:"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",language:"en"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CONVERT-LIGHR-SCHEMA-CHANGE-PROCESS",id:"sql-manual/sql-reference/Show-Statements/SHOW-CONVERT-LIGHR-SCHEMA-CHANGE-PROCESS",title:"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-CONVERT-LIGHR-SCHEMA-CHANGE-PROCESS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CONVERT-LIGHR-SCHEMA-CHANGE-PROCESS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CONVERT-LIGHR-SCHEMA-CHANGE-PROCESS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",language:"en"}},s={},i=[{value:"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",id:"show-convert-light-schema-change-process",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-convert-light-schema-change-process"},"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW CONVERT LIGHT SCHEMA CHANGE PROCESS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to show the process of converting light schema change process. should enable config ",(0,a.yg)("inlineCode",{parentName:"p"},"enable_convert_light_weight_schema_change"),"."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CONVERT_LIGHT_SCHEMA_CHANGE_PROCESS [FROM db]\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View the converting process in db named test "),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW CONVERT_LIGHT_SCHEMA_CHANGE_PROCESS FROM test;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View the converting process globally"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CONVERT_LIGHT_SCHEMA_CHANGE_PROCESS;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, CONVERT_LIGHT_SCHEMA_CHANGE_PROCESS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);