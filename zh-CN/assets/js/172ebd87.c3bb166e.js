"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4193],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),o=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=o(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(r),u=a,f=m["".concat(c,".").concat(u)]||m[u]||y[u]||i;return r?t.createElement(f,l(l({ref:n},p),{},{components:r})):t.createElement(f,l({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51967:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var t=r(58168),a=(r(296540),r(15680));const i={title:"SSL\u5bc6\u94a5\u8bc1\u4e66\u914d\u7f6e",language:"zh-CN"},l=void 0,s={unversionedId:"admin-manual/certificate",id:"version-2.0/admin-manual/certificate",title:"SSL\u5bc6\u94a5\u8bc1\u4e66\u914d\u7f6e",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/certificate.md",sourceDirName:"admin-manual",slug:"/admin-manual/certificate",permalink:"/zh-CN/docs/2.0/admin-manual/certificate",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SSL\u5bc6\u94a5\u8bc1\u4e66\u914d\u7f6e",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u8be2\u5206\u6790",permalink:"/zh-CN/docs/2.0/admin-manual/query-profile"},next:{title:"FE SSL\u5bc6\u94a5\u8bc1\u4e66\u914d\u7f6e",permalink:"/zh-CN/docs/2.0/admin-manual/fe-certificate"}},c={},o=[{value:"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6",id:"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6",level:2}],p={toc:o},m="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"ssl\u5bc6\u94a5\u8bc1\u4e66\u914d\u7f6e"},"SSL\u5bc6\u94a5\u8bc1\u4e66\u914d\u7f6e"),(0,a.yg)("p",null,"Doris\u5f00\u542fSSL\u529f\u80fd\u9700\u8981\u914d\u7f6eCA\u5bc6\u94a5\u8bc1\u4e66\u548cServer\u7aef\u5bc6\u94a5\u8bc1\u4e66\uff0c\u5982\u9700\u5f00\u542f\u53cc\u5411\u8ba4\u8bc1\uff0c\u8fd8\u9700\u751f\u6210Client\u7aef\u5bc6\u94a5\u8bc1\u4e66\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7684CA\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u4f4d\u4e8e",(0,a.yg)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/ca_certificate.p12"),"\uff0c\u9ed8\u8ba4\u5bc6\u7801\u4e3a",(0,a.yg)("inlineCode",{parentName:"li"},"doris"),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539FE\u914d\u7f6e\u6587\u4ef6",(0,a.yg)("inlineCode",{parentName:"li"},"conf/fe.conf"),"\uff0c\u6dfb\u52a0",(0,a.yg)("inlineCode",{parentName:"li"},"mysql_ssl_default_ca_certificate = /path/to/your/certificate"),"\u4fee\u6539CA\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"li"},"mysql_ssl_default_ca_certificate_password = your_password"),"\u6dfb\u52a0\u5bf9\u5e94\u60a8\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u7684\u5bc6\u7801\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7684Server\u7aef\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u4f4d\u4e8e",(0,a.yg)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/server_certificate.p12"),"\uff0c\u9ed8\u8ba4\u5bc6\u7801\u4e3a",(0,a.yg)("inlineCode",{parentName:"li"},"doris"),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539FE\u914d\u7f6e\u6587\u4ef6",(0,a.yg)("inlineCode",{parentName:"li"},"conf/fe.conf"),"\uff0c\u6dfb\u52a0",(0,a.yg)("inlineCode",{parentName:"li"},"mysql_ssl_default_server_certificate = /path/to/your/certificate"),"\u4fee\u6539Server\u7aef\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"li"},"mysql_ssl_default_server_certificate_password = your_password"),"\u6dfb\u52a0\u5bf9\u5e94\u60a8\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u7684\u5bc6\u7801\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u751f\u6210\u4e86\u4e00\u4efdClient\u7aef\u7684\u5bc6\u94a5\u8bc1\u4e66\uff0c\u5206\u522b\u5b58\u653e\u5728",(0,a.yg)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/client-key.pem"),"\u548c",(0,a.yg)("inlineCode",{parentName:"li"},"Doris/fe/mysql_ssl_default_certificate/client_certificate/"),"\u3002")),(0,a.yg)("h2",{id:"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6"},"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6"),(0,a.yg)("p",null,"\u9664\u4e86Doris\u9ed8\u8ba4\u7684\u8bc1\u4e66\u6587\u4ef6\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"openssl"),"\u751f\u6210\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66\u6587\u4ef6\u3002\u6b65\u9aa4\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/creating-ssl-files-using-openssl.html"},"mysql\u751f\u6210ssl\u8bc1\u4e66"),"\n\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u751f\u6210CA\u3001Server\u7aef\u548cClient\u7aef\u7684\u5bc6\u94a5\u548c\u8bc1\u4e66")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# \u751f\u6210CA certificate\nopenssl genrsa 2048 > ca-key.pem\nopenssl req -new -x509 -nodes -days 3600 \\\n        -key ca-key.pem -out ca.pem\n\n# \u751f\u6210server certificate, \u5e76\u7528\u4e0a\u8ff0CA\u7b7e\u540d\n# server-cert.pem = public key, server-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout server-key.pem -out server-req.pem\nopenssl rsa -in server-key.pem -out server-key.pem\nopenssl x509 -req -in server-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem\n\n# \u751f\u6210client certificate, \u5e76\u7528\u4e0a\u8ff0CA\u7b7e\u540d\n# client-cert.pem = public key, client-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout client-key.pem -out client-req.pem\nopenssl rsa -in client-key.pem -out client-key.pem\nopenssl x509 -req -in client-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem\n")),(0,a.yg)("p",null,"2.\u9a8c\u8bc1\u521b\u5efa\u7684\u8bc1\u4e66\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"openssl verify -CAfile ca.pem server-cert.pem client-cert.pem\n")),(0,a.yg)("p",null,"3.\u5c06\u60a8\u7684CA\u5bc6\u94a5\u548c\u8bc1\u4e66\u548cSever\u7aef\u5bc6\u94a5\u548c\u8bc1\u4e66\u5206\u522b\u5408\u5e76\u5230 PKCS#12 (P12) \u5305\u4e2d\u3002\u60a8\u4e5f\u53ef\u4ee5\u6307\u5b9a\u67d0\u4e2a\u8bc1\u4e66\u683c\u5f0f\uff0c\u9ed8\u8ba4PKCS12\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539conf/fe.conf\u914d\u7f6e\u6587\u4ef6\uff0c\u6dfb\u52a0\u53c2\u6570ssl_trust_store_type\u6307\u5b9a\u8bc1\u4e66\u683c\u5f0f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# \u6253\u5305CA\u5bc6\u94a5\u548c\u8bc1\u4e66\nopenssl pkcs12 -inkey ca-key.pem -in ca.pem -export -out ca_certificate.p12\n\n# \u6253\u5305Server\u7aef\u5bc6\u94a5\u548c\u8bc1\u4e66\nopenssl pkcs12 -inkey server-key.pem -in server.pem -export -out server_certificate.p12\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/api-connect/2018.x?topic=overview-generating-self-signed-certificate-using-openssl"},"\u53c2\u8003\u6587\u6863"))))}y.isMDXComponent=!0}}]);