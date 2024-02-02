"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[99884],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>m});var o=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(n),g=r,m=s["".concat(c,".").concat(g)]||s[g]||u[g]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(45072),r=(n(11504),n(95788));const a={title:"Java Format Code",language:"en"},l=void 0,i={unversionedId:"developer-guide/java-format-code",id:"developer-guide/java-format-code",title:"Java Format Code",description:"\x3c!--",source:"@site/community/developer-guide/java-format-code.md",sourceDirName:"developer-guide",slug:"/developer-guide/java-format-code",permalink:"/community/developer-guide/java-format-code",draft:!1,tags:[],version:"current",frontMatter:{title:"Java Format Code",language:"en"},sidebar:"community",previous:{title:"Setting Up Dev Env on Mac for Doris FE - IntelliJ IDEA",permalink:"/community/developer-guide/mac-dev/fe-idea-dev"},next:{title:"C++ Format Code",permalink:"/community/developer-guide/cpp-format-code"}},c={},d=[{value:"Import Order",id:"import-order",level:2},{value:"Check when compile",id:"check-when-compile",level:2},{value:"Checkstyle Plugin",id:"checkstyle-plugin",level:2},{value:"IDEA",id:"idea",level:3},{value:"VS Code",id:"vs-code",level:3},{value:"IDEA",id:"idea-1",level:2},{value:"Auto format code",id:"auto-format-code",level:3},{value:"Auto rearrange code",id:"auto-rearrange-code",level:3},{value:"Remove unused header",id:"remove-unused-header",level:2}],p={toc:d},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,o.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"java-format-code"},"Java Format Code"),(0,r.yg)("p",null,"The formatting of the Java part of the code in Doris is usually done automatically by the IDE. Only the general format rules are listed here. For developer, you need to set the corresponding code styles in different IDEs according to the format rules."),(0,r.yg)("h2",{id:"import-order"},"Import Order"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"org.apache.doris\n<blank line>\nthird party package\n<blank line>\nstandard java package\n<blank line>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Do not use ",(0,r.yg)("inlineCode",{parentName:"li"},"import *")),(0,r.yg)("li",{parentName:"ul"},"Do not use ",(0,r.yg)("inlineCode",{parentName:"li"},"import static"))),(0,r.yg)("h2",{id:"check-when-compile"},"Check when compile"),(0,r.yg)("p",null,"Now, when compiling with ",(0,r.yg)("inlineCode",{parentName:"p"},"caven"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckStyle")," checks are done by default. This will slightly slow down compilation. If you want to skip checkstyle, please use the following command to compile"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mvn clean install -DskipTests -Dcheckstyle.skip\n")),(0,r.yg)("h2",{id:"checkstyle-plugin"},"Checkstyle Plugin"),(0,r.yg)("p",null,"Now we have ",(0,r.yg)("inlineCode",{parentName:"p"},"formatter-check")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"CI")," to check the code format."),(0,r.yg)("h3",{id:"idea"},"IDEA"),(0,r.yg)("p",null,"If you use ",(0,r.yg)("inlineCode",{parentName:"p"},"IDEA")," to develop Java code, please install ",(0,r.yg)("inlineCode",{parentName:"p"},"Checkstyle-IDEA")," plugin."),(0,r.yg)("p",null,"Setting the ",(0,r.yg)("inlineCode",{parentName:"p"},"checkstyle.xml")," file in ",(0,r.yg)("inlineCode",{parentName:"p"},"Tools->Checkstyle"),"."),(0,r.yg)("p",null,"Click the plus sign under Configuration File, select ",(0,r.yg)("inlineCode",{parentName:"p"},"Use a local Checkstyle file"),", and select the ",(0,r.yg)("inlineCode",{parentName:"p"},"fe/check/checkstyle/checkstyle.xml")," file."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"NOTE:")," Make sure that the version of ",(0,r.yg)("inlineCode",{parentName:"p"},"Checkstyle")," is 9.3 or newer (the latest version is recommended)."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(80272).c,width:"753",height:"146"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"You can use ",(0,r.yg)("inlineCode",{parentName:"strong"},"Checkstyle-IDEA")," plugin to check ",(0,r.yg)("inlineCode",{parentName:"strong"},"Checkstyle")," of your code real-time.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(54748).c,width:"826",height:"527"})),(0,r.yg)("h3",{id:"vs-code"},"VS Code"),(0,r.yg)("p",null,"If you use VS Code to develop Java code, please install ",(0,r.yg)("inlineCode",{parentName:"p"},"Checkstyle for Java")," plugin, and config according to the ",(0,r.yg)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/java/java-linting"},"document")," and the picture"),(0,r.yg)("h2",{id:"idea-1"},"IDEA"),(0,r.yg)("h3",{id:"auto-format-code"},"Auto format code"),(0,r.yg)("p",null,"The automatic formatting function of ",(0,r.yg)("inlineCode",{parentName:"p"},"IDEA")," is also recommended."),(0,r.yg)("p",null,"Go to ",(0,r.yg)("inlineCode",{parentName:"p"},"Preferences->Editor->Code Style->Java")," click the config sign and select ",(0,r.yg)("inlineCode",{parentName:"p"},"Import Scheme"),"\uff0cselect ",(0,r.yg)("inlineCode",{parentName:"p"},"IntelliJ IDEA code style XML"),"\uff0cand select the ",(0,r.yg)("inlineCode",{parentName:"p"},"build-support/IntelliJ-code-format.xml")," file."),(0,r.yg)("h3",{id:"auto-rearrange-code"},"Auto rearrange code"),(0,r.yg)("p",null,"Checkstyle will check declarations order according to ",(0,r.yg)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase/codeconventions-fileorganization.html#1852"},"Class and Interface Declarations")," ."),(0,r.yg)("p",null,"After add the ",(0,r.yg)("inlineCode",{parentName:"p"},"build-support/IntelliJ-code-format.xml")," file. Click ",(0,r.yg)("inlineCode",{parentName:"p"},"Code/Rearrange Code")," to auto rearrange code."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(35044).c,width:"808",height:"862"})),(0,r.yg)("h2",{id:"remove-unused-header"},"Remove unused header"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"CTRL + ALT + O ---\x3e")," to remove the unused imports in windows."),(0,r.yg)("p",null,"Auto remove unused header and reorder according to configure xml:"),(0,r.yg)("p",null,"Click ",(0,r.yg)("inlineCode",{parentName:"p"},"Preferences->Editor->Auto Import->Optimize Imports on the Fly")))}u.isMDXComponent=!0},54748:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/idea-checkstyle-plugin-en-f5edce6f551fe2cbe4bd969969157378.png"},80272:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/idea-checkstyle-version-8dd2c11f9b1ff58b36f42a13985e86d9.png"},35044:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/idea-rearrange-code-84eb3793733a97939b36cf0a30678101.png"}}]);