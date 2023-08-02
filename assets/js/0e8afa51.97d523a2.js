"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,u=d["".concat(p,".").concat(m)]||d[m]||h[m]||r;return n?i.createElement(u,a(a({ref:t},s),{},{components:n})):i.createElement(u,a({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={title:"Compiling with LDB Toolchain",language:"en"},a=void 0,l={unversionedId:"install/source-install/compilation-with-ldb-toolchain",id:"install/source-install/compilation-with-ldb-toolchain",title:"Compiling with LDB Toolchain",description:"\x3c!--",source:"@site/docs/install/source-install/compilation-with-ldb-toolchain.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-with-ldb-toolchain",permalink:"/docs/dev/install/source-install/compilation-with-ldb-toolchain",draft:!1,tags:[],version:"current",frontMatter:{title:"Compiling with LDB Toolchain",language:"en"},sidebar:"docs",previous:{title:"General Compilation",permalink:"/docs/dev/install/source-install/compilation-general"},next:{title:"Compilation with Arm",permalink:"/docs/dev/install/source-install/compilation-arm"}},p={},c=[{value:"Prepare the Environment",id:"prepare-the-environment",level:2},{value:"Compile Doris",id:"compile-doris",level:2},{value:"Precompile the Third-Party Binaries",id:"precompile-the-third-party-binaries",level:2}],s={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compiling-with-ldb-toolchain"},"Compiling with LDB-Toolchain"),(0,o.kt)("p",null,"This topic is about how to compile Doris using the LDB toolchain. This method is an alternative to the Docker method so developers and users without a Docker environment can compile Doris from source.\nThe LDB toolchain version currently recommended by Doris is 0.17, which contains clang-16 and gcc-11."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can still compile the latest code using the Docker development image: ",(0,o.kt)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Special thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amosbird"},"Amos Bird")," for the contribution.")),(0,o.kt)("h2",{id:"prepare-the-environment"},"Prepare the Environment"),(0,o.kt)("p",null,"This works for most Linux distributions (CentOS, Ubuntu, etc.)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download ",(0,o.kt)("inlineCode",{parentName:"p"},"ldb_toolchain_gen.sh")),(0,o.kt)("p",{parentName:"li"},"The latest ",(0,o.kt)("inlineCode",{parentName:"p"},"ldb_toolchain_gen.sh")," can be downloaded from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen/releases"},"here"),". This script is used to generate the ldb toolchain."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For more information, you can visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen"},"https://github.com/amosbird/ldb_toolchain_gen")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following command to generate the ldb toolchain."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"sh ldb_toolchain_gen.sh /path/to/ldb_toolchain/\n")),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/")," is the directory where the toolchain is installed."),(0,o.kt)("p",{parentName:"li"},"After execution, the following directory structure will be created under ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 include\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 share\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 usr\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and install other compilation packages"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u131-linux-x64.tar.gz"},"Java8")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz"},"Apache Maven 3.6.3")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz"},"Node v12.13.0"))),(0,o.kt)("p",{parentName:"li"},"Different Linux distributions might contain different packages, so you may need to install additional packages. The following instructions describe how to set up a minimal CentOS 6 box to compile Doris. It should work similarly for other Linux distros."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\n# install autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\n# install bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download Doris source code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/doris.git\n")),(0,o.kt)("p",{parentName:"li"},"After downloading, create the ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_env.sh"),", file under the Doris source directory, and set the PATH environment variable:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"export JAVA_HOME=/path/to/java/\nexport PATH=$JAVA_HOME/bin:$PATH\nexport PATH=/path/to/maven/bin:$PATH\nexport PATH=/path/to/node/bin:$PATH\nexport PATH=/path/to/ldb_toolchain/bin:$PATH\n")))),(0,o.kt)("h2",{id:"compile-doris"},"Compile Doris"),(0,o.kt)("p",null,"Enter the Doris source code directory and execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,o.kt)("p",null,"Check whether the compilation machine supports the avx2 instruction set."),(0,o.kt)("p",null,"If it is not supported, use the following command to compile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ USE_AVX2=0 sh build.sh\n")),(0,o.kt)("p",null,"If supported, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"sh build.sh")," directly."),(0,o.kt)("p",null,"This script will compile the third-party libraries first and then the Doris components (FE, BE) later. The compiled output will be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"output/")," directory."),(0,o.kt)("h2",{id:"precompile-the-third-party-binaries"},"Precompile the Third-Party Binaries"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sh")," script will first compile the third-party dependencies. You can also directly download the precompiled three-party binaries:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/apache/doris-thirdparty/releases")),(0,o.kt)("p",null,"Here we provide precompiled third-party binaries for Linux X86(with AVX2) and MacOS(X86 Chip). If it is consistent with your compiling and running environment, you can download and use it directly."),(0,o.kt)("p",null,"After downloading, you will get an ",(0,o.kt)("inlineCode",{parentName:"p"},"installed/")," directory after decompression, copy this directory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"thirdparty/")," directory, and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sh"),"."))}h.isMDXComponent=!0}}]);