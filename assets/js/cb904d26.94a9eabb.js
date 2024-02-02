"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61356],{95788:(e,t,r)=>{r.d(t,{Iu:()=>f,yg:()=>d});var a=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=l(r),u=i,d=p["".concat(s,".").concat(u)]||p[u]||y[u]||n;return r?a.createElement(d,c(c({ref:t},f),{},{components:r})):a.createElement(d,c({ref:t},f))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,c=new Array(n);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,c[1]=o;for(var l=2;l<n;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(45072),i=(r(11504),r(95788));const n={title:"TLS certificate",language:"en"},c=void 0,o={unversionedId:"admin-manual/certificate",id:"admin-manual/certificate",title:"TLS certificate",description:"\x3c!--",source:"@site/docs/admin-manual/certificate.md",sourceDirName:"admin-manual",slug:"/admin-manual/certificate",permalink:"/docs/dev/admin-manual/certificate",draft:!1,tags:[],version:"current",frontMatter:{title:"TLS certificate",language:"en"},sidebar:"docs",previous:{title:"Statistics of query execution",permalink:"/docs/dev/admin-manual/query-profile"},next:{title:"FE SSL certificate",permalink:"/docs/dev/admin-manual/fe-certificate"}},s={},l=[{value:"Custom key certificate file",id:"custom-key-certificate-file",level:2}],f={toc:l},p="wrapper";function y(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,a.c)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"key-certificate-configuration"},"Key Certificate Configuration"),(0,i.yg)("p",null,"Enabling SSL functionality in Doris requires configuring both a CA key certificate and a server-side key certificate. To enable mutual authentication, a client-side key certificate must also be generated:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The default CA key certificate file is located at ",(0,i.yg)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/ca_certificate.p12"),", with a default password of ",(0,i.yg)("inlineCode",{parentName:"li"},"doris"),". You can modify the FE configuration file ",(0,i.yg)("inlineCode",{parentName:"li"},"conf/fe.conf")," to add ",(0,i.yg)("inlineCode",{parentName:"li"},"mysql_ssl_default_ca_certificate = /path/to/your/certificate")," to change the CA key certificate file. You can also add ",(0,i.yg)("inlineCode",{parentName:"li"},"mysql_ssl_default_ca_certificate_password = your_password")," to specify the password for your custom key certificate file."),(0,i.yg)("li",{parentName:"ul"},"The default server-side key certificate file is located at ",(0,i.yg)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/server_certificate.p12"),", with a default password of ",(0,i.yg)("inlineCode",{parentName:"li"},"doris"),". You can modify the FE configuration file ",(0,i.yg)("inlineCode",{parentName:"li"},"conf/fe.conf")," to add ",(0,i.yg)("inlineCode",{parentName:"li"},"mysql_ssl_default_server_certificate = /path/to/your/certificate")," to change the server-side key certificate file. You can also add ",(0,i.yg)("inlineCode",{parentName:"li"},"mysql_ssl_default_server_certificate_password = your_password")," to specify the password for your custom key certificate file."),(0,i.yg)("li",{parentName:"ul"},"By default, a client-side key certificate is also generated and stored in ",(0,i.yg)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/client-key.pem")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/client_certificate/"),".")),(0,i.yg)("h2",{id:"custom-key-certificate-file"},"Custom key certificate file"),(0,i.yg)("p",null,"In addition to the Doris default certificate file, you can also generate a custom certificate file through ",(0,i.yg)("inlineCode",{parentName:"p"},"openssl"),". Here are the steps (refer to ",(0,i.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/creating-ssl-files-using-openssl.html"},"Creating SSL Certificates and Keys Using OpenSSL"),"):"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Generate the CA, server-side, and client-side keys and certificates:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# Generate the CA certificate\nopenssl genrsa 2048 > ca-key.pem\nopenssl req -new -x509 -nodes -days 3600 \\\n        -key ca-key.pem -out ca.pem\n\n# Generate the server certificate and sign it with the above CA\n# server-cert.pem = public key, server-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout server-key.pem -out server-req.pem\nopenssl rsa -in server-key.pem -out server-key.pem\nopenssl x509 -req -in server-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem\n\n# Generate the client certificate and sign it with the above CA\n# client-cert.pem = public key, client-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout client-key.pem -out client-req.pem\nopenssl rsa -in client-key.pem -out client-key.pem\nopenssl x509 -req -in client-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Verify the created certificates:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"openssl verify -CAfile ca.pem server-cert.pem client-cert.pem\n")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Combine your key and certificate in a PKCS#12 (P12) bundle. You can also specify a certificate format (PKCS12 by default). You can modify the conf/fe.conf configuration file and add parameter ssl_trust_store_type to specify the certificate format.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# Package the CA key and certificate\nopenssl pkcs12 -inkey ca-key.pem -in ca.pem -export -out ca_certificate.p12\n\n# Package the server-side key and certificate\nopenssl pkcs12 -inkey server-key.pem -in server.pem -export -out server_certificate.p12\n")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/api-connect/2018.x?topic=overview-generating-self-signed-certificate-using-openssl"},"reference documents"))))}y.isMDXComponent=!0}}]);