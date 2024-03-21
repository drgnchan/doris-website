"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[44483],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},158489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const o={title:"Compilation on MacOS",language:"en"},i=void 0,l={unversionedId:"install/source-install/compilation-mac",id:"version-2.0/install/source-install/compilation-mac",title:"Compilation on MacOS",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/install/source-install/compilation-mac.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-mac",permalink:"/docs/2.0/install/source-install/compilation-mac",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Compilation on MacOS",language:"en"},sidebar:"docs",previous:{title:"Compilation on Windows",permalink:"/docs/2.0/install/source-install/compilation-win"},next:{title:"Standard Deployment",permalink:"/docs/2.0/install/cluster-deployment/standard-deployment"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compile source code",id:"compile-source-code",level:2},{value:"Start",id:"start",level:2},{value:"Speed up by using pre-compiled third-party libraries",id:"speed-up-by-using-pre-compiled-third-party-libraries",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"compile-on-macos"},"Compile on MacOS"),(0,a.yg)("p",null,"This guide is about how to compile Doris on MacOS."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"MacOS 12 (Monterey) or later (Both ",(0,a.yg)("strong",{parentName:"li"},"Intel")," and ",(0,a.yg)("strong",{parentName:"li"},"Apple Silicon")," are supported.)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"))),(0,a.yg)("h2",{id:"compile-source-code"},"Compile source code"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Install dependencies using")," ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://brew.sh/"},"Homebrew")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"brew install automake autoconf libtool pkg-config texinfo coreutils gnu-getopt \\\npython@3 cmake ninja ccache bison byacc gettext wget pcre maven llvm@16 openjdk@11 npm\n")),(0,a.yg)("admonition",{title:"On MacOS, since Homebrew does not provide an installation package for JDK8, JDK11 is used here instead. Alternatively, you can manually download and install JDK8. :::",type:"tip"},(0,a.yg)("ol",{parentName:"admonition",start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Compile source code"))),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"bash build.sh\n"))),(0,a.yg)("h2",{id:"start"},"Start"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Increase file descriptors limit"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"# Increase the file descriptor limit using the ulimit command.\nulimit -n 65536\n\n# Check if the change is effective.\n$ ulimit -n\n\n# Add the configuration to your startup script so that you do not have to set it again every time you open a new terminal session.\n# If you are using bash, execute the following statement:\necho 'ulimit -n 65536' ~/.bashrc\n# If you are using zsh, execute the following statement:\necho 'ulimit -n 65536' ~/.zshrc\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Start BE"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"cd output/be/bin\n./start_be.sh --daemon\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Start")," ",(0,a.yg)("strong",{parentName:"li"},"FE"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"cd output/fe/bin\n./start_fe.sh --daemon\n")),(0,a.yg)("h2",{id:"speed-up-by-using-pre-compiled-third-party-libraries"},"Speed up by using pre-compiled third-party libraries"),(0,a.yg)("p",null,"Download the pre-compiled third-party libraries from ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/tag/automation"},"Apache Doris Third Party Prebuilt"),". Refer to the command below: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"cd thirdparty\nrm -rf installed\n\n# Intel chip\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-x86_64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Apple Silicon chip\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-arm64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Check if protoc and thrift functions normally\ncd installed/bin\n\n./protoc --version\n./thrift --version\n")),(0,a.yg)("p",null,':::tip When running protoc and thrift, you may encounter an issue where the binary cannot be opened due to developer verification. To resolve this, you can go to "Security & Privacy" settings. In the "General" tab, click on the "Open Anyway" button to confirm your intent to open the binary. Refer to: ',(0,a.yg)("a",{parentName:"p",href:"https://support.apple.com/en-us/102445"},"https://support.apple.com/en-us/102445")," :::"))}m.isMDXComponent=!0}}]);