"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28116],{15680:(e,t,n)=>{n.d(t,{xA:()=>f,yg:()=>m});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(58168),i=(n(296540),n(15680));const a={title:"FE SSL certificate",language:"en"},o=void 0,c={unversionedId:"admin-manual/fe-certificate",id:"version-2.1/admin-manual/fe-certificate",title:"FE SSL certificate",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/fe-certificate.md",sourceDirName:"admin-manual",slug:"/admin-manual/fe-certificate",permalink:"/docs/admin-manual/fe-certificate",draft:!1,tags:[],version:"2.1",frontMatter:{title:"FE SSL certificate",language:"en"},sidebar:"docs",previous:{title:"TLS certificate",permalink:"/docs/admin-manual/certificate"},next:{title:"Monitor Metrics",permalink:"/docs/admin-manual/maint-monitor/monitor-metrics/metrics"}},l={},s=[],f={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"certificate-configuration"},"Certificate Configuration"),(0,i.yg)("version",{since:"2.0"},(0,i.yg)("p",null,"Certificate Configuration")),(0,i.yg)("p",null,"To enable SSL function on Doris FE interface, you need to configure key certificate as follows:"),(0,i.yg)("p",null,"1.Purchase or generate a self-signed SSL certificate. It is advised to use CA certificate in Production environment"),(0,i.yg)("p",null,"2.Copy the SSL certificate to specified path. The default path is ",(0,i.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/conf/ssl/"),", and user can also specify their own path"),(0,i.yg)("p",null,"3.Modify FE configuration file ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/fe.conf"),", and note that the following parameters are consistent with purchased or generated SSL certificate\nSet ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_https = true")," to enable https function, default is ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"\nSet certificate path ",(0,i.yg)("inlineCode",{parentName:"p"},"key_store_path"),", default is ",(0,i.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/conf/ssl/doris_ssl_certificate.keystore"),"\nSet certificate password ",(0,i.yg)("inlineCode",{parentName:"p"},"key_store_password"),", default is null\nSet certificate type ",(0,i.yg)("inlineCode",{parentName:"p"},"key_store_type"),", default is ",(0,i.yg)("inlineCode",{parentName:"p"},"JKS"),"\nSet certificate alias ",(0,i.yg)("inlineCode",{parentName:"p"},"key_store_alias"),", default is ",(0,i.yg)("inlineCode",{parentName:"p"},"doris_ssl_certificate")))}u.isMDXComponent=!0}}]);