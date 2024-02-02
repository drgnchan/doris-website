"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3164],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>m});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=c(t),u=a,m=y["".concat(s,".").concat(u)]||y[u]||d[u]||i;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[y]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(45072),a=(t(11504),t(95788));const i={title:"AES",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/aes",id:"version-1.2/sql-manual/sql-functions/encrypt-digest-functions/aes",title:"AES",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/encrypt-digest-functions/aes.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/aes",permalink:"/docs/1.2/sql-manual/sql-functions/encrypt-digest-functions/aes",draft:!1,tags:[],version:"1.2",frontMatter:{title:"AES",language:"en"},sidebar:"docs",previous:{title:"mod",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/mod"},next:{title:"MD5",permalink:"/docs/1.2/sql-manual/sql-functions/encrypt-digest-functions/md5"}},s={},c=[{value:"AES_ENCRYPT",id:"aes_encrypt",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Compatibility",id:"compatibility",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"AES_DECRYPT",id:"aes_decrypt",level:2},{value:"Name",id:"name-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Type",id:"return-type-1",level:4},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords-1",level:3}],p={toc:c},y="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"aes_encrypt"},"AES_ENCRYPT"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"AES_ENCRYPT"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Encryption of data using the OpenSSL. This function is consistent with the ",(0,a.yg)("inlineCode",{parentName:"p"},"AES_ENCRYPT")," function in MySQL. Using AES_128_ECB algorithm by default, and the padding mode is PKCS7.\nReference: ",(0,a.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt"},"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt")),(0,a.yg)("h3",{id:"compatibility"},"Compatibility"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"aes_decrypt/aes_encrypt/sm4_decrypt/sm4_encrypt When the initial vector is not provided, block_encryption_mode will not take effect, and AES_128_ECB will be used for encryption and decryption in the end, which is inconsistent with the behavior of MySQL."),(0,a.yg)("li",{parentName:"ol"},"Add aes_decrypt_v2/aes_encrypt_v2/sm4_decrypt_v2/sm4_encrypt_v2 functions to support correct behavior. When no initial vector is provided, block_encryption_mode can take effect, aes-192-ecb and aes-256-ecb will be correctly encrypted and decrypted, and other block encryption modes will report an error. If there is no need to be compatible with old data, the v2 function can be used directly.")),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"AES_ENCRYPT(str, key_str[, init_vector])")),(0,a.yg)("h4",{id:"arguments"},"Arguments"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"str"),": Content to be encrypted"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"key_str"),": Secret key"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"init_vector"),": Initialization Vector. The default value for the block_encryption_mode system variable is aes ecb mode, which does not require an initialization vector. The alternative permitted block encryption modes CBC, CFB1, CFB8, CFB128, and OFB all require an initialization vector.")),(0,a.yg)("h4",{id:"return-type"},"Return Type"),(0,a.yg)("p",null,"VARCHAR(*)"),(0,a.yg)("h4",{id:"remarks"},"Remarks"),(0,a.yg)("p",null,"The AES_ENCRYPT function is not used the user secret key directly, but will be further processed. The specific steps are as follows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Determine the number of bytes of the SECRET KEY according to the encryption algorithm used. For example, if you using AES_128_ECB, then the number of bytes of SECRET KEY are ",(0,a.yg)("inlineCode",{parentName:"li"},"128 / 8 = 16"),"(if using AES_256_ECB, then SECRET KEY length are ",(0,a.yg)("inlineCode",{parentName:"li"},"128 / 8 = 32"),");"),(0,a.yg)("li",{parentName:"ol"},"Then XOR the ",(0,a.yg)("inlineCode",{parentName:"li"},"i")," bit and the ",(0,a.yg)("inlineCode",{parentName:"li"},"16*k+i")," bit of the SECRET KEY entered by the user. If the length of the SECRET KEY less than 16 bytes, 0 will be padded;"),(0,a.yg)("li",{parentName:"ol"},"Finally, use the newly generated key for encryption;")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n")),(0,a.yg)("p",null,"The results are consistent with those executed in MySQL."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+--------------------------------+\n| to_base64(aes_encrypt('text')) |\n+--------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==       |\n+--------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"If you want to change other encryption algorithms, you can:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set block_encryption_mode=\"AES_256_CBC\";\nselect to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n")),(0,a.yg)("p",null,"Here is the result:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+-----------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '0123456789')) |\n+-----------------------------------------------------+\n| tsmK1HzbpnEdR2//WhO+MA==                            |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"For more information about ",(0,a.yg)("inlineCode",{parentName:"p"},"block_encryption_mode"),", see also ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.2/advanced/variables"},"variables"),"."),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"AES_ENCRYPT\n")),(0,a.yg)("h2",{id:"aes_decrypt"},"AES_DECRYPT"),(0,a.yg)("h3",{id:"name-1"},"Name"),(0,a.yg)("p",null,"AES_DECRYPT"),(0,a.yg)("h3",{id:"description-1"},"Description"),(0,a.yg)("p",null,"Decryption of data using the OpenSSL. This function is consistent with the ",(0,a.yg)("inlineCode",{parentName:"p"},"AES_DECRYPT")," function in MySQL. Using AES_128_ECB algorithm by default, and the padding mode is PKCS7."),(0,a.yg)("h4",{id:"syntax-1"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"AES_DECRYPT(str,key_str[,init_vector])\n")),(0,a.yg)("h4",{id:"arguments-1"},"Arguments"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"str"),": Content that encrypted"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"key_str"),": Secret key"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"init_vector"),": Initialization Vector")),(0,a.yg)("h4",{id:"return-type-1"},"Return Type"),(0,a.yg)("p",null,"VARCHAR(*)"),(0,a.yg)("h3",{id:"example-1"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n")),(0,a.yg)("p",null,"The results are consistent with those executed in MySQL."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"If you want to change other encryption algorithms, you can:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set block_encryption_mode=\"AES_256_CBC\";\nselect aes_decrypt(from_base64('tsmK1HzbpnEdR2//WhO+MA=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n")),(0,a.yg)("p",null,"Here is the result:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+---------------------------------------------------------------------------+\n| aes_decrypt(from_base64('tsmK1HzbpnEdR2//WhO+MA=='), '***', '0123456789') |\n+---------------------------------------------------------------------------+\n| text                                                                      |\n+---------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"For more information about ",(0,a.yg)("inlineCode",{parentName:"p"},"block_encryption_mode"),", see also ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.2/advanced/variables"},"variables"),"."),(0,a.yg)("h3",{id:"keywords-1"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"AES_DECRYPT\n")))}d.isMDXComponent=!0}}]);