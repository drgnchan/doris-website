"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75274],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var n=r(296540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||y[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},849685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(58168),i=(r(296540),r(15680));const a={title:"Security",language:"en"},o=void 0,c={unversionedId:"security",id:"security",title:"Security",description:"\x3c!--",source:"@site/community/security.md",sourceDirName:".",slug:"/security",permalink:"/community/security",draft:!1,tags:[],version:"current",frontMatter:{title:"Security",language:"en"},sidebar:"community",previous:{title:"Verify the Apache release version",permalink:"/community/release-and-verify/release-verify"},next:{title:"Doris Storage File Format Optimization",permalink:"/community/design/doris_storage_optimization"}},s={},u=[],l={toc:u},p="wrapper";function y(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"security"},"Security"),(0,i.yg)("p",null,"The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. Likewise, Apache Doris is also vigilant and takes security issues related to its features and functionality into the highest consideration."),(0,i.yg)("p",null,"If you have any concerns regarding Doris\u2019s security, or you discover a vulnerability or potential threat, please don\u2019t hesitate to get in touch with the ",(0,i.yg)("a",{parentName:"p",href:"http://www.apache.org/security/"},"Apache Security Team")," by dropping an email at ",(0,i.yg)("a",{parentName:"p",href:"mailto:security@apache.org"},"security@apache.org"),"."),(0,i.yg)("p",null,'Please specify the project name as "Doris" in the email, and provide a description of the relevant problem or potential threat. You are also urged to recommend how to reproduce and replicate the issue.'),(0,i.yg)("p",null,"The Apache Security Team and the Doris community will get back to you after assessing and analyzing the findings."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Please note")," that the security issue should be reported on the security email first, before disclosing it on any public domain."))}y.isMDXComponent=!0}}]);