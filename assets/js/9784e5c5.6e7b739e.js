"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67945],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var n=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(a),g=o,u=s["".concat(p,".").concat(g)]||s[g]||c[g]||r;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},222774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(58168),o=(a(296540),a(15680));const r={title:"General Compilation",language:"en"},i=void 0,l={unversionedId:"install/source-install/compilation-general",id:"install/source-install/compilation-general",title:"General Compilation",description:"\x3c!--",source:"@site/docs/install/source-install/compilation-general.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-general",permalink:"/docs/dev/install/source-install/compilation-general",draft:!1,tags:[],version:"current",frontMatter:{title:"General Compilation",language:"en"},sidebar:"docs",previous:{title:"How to enter the container when the service crashes",permalink:"/docs/dev/install/k8s-deploy/debug-crash"},next:{title:"Compiling with LDB Toolchain",permalink:"/docs/dev/install/source-install/compilation-with-ldb-toolchain"}},p={},d=[{value:"Compile with Docker Development Image (Recommended)",id:"compile-with-docker-development-image-recommended",level:2},{value:"Use Off-the-Shelf Image",id:"use-off-the-shelf-image",level:3},{value:"Self-Compile Development Environment Image",id:"self-compile-development-environment-image",level:3},{value:"Direct Compilation (Ubuntu)",id:"direct-compilation-ubuntu",level:2},{value:"FAQ",id:"faq",level:2},{value:"Special Statement",id:"special-statement",level:2}],m={toc:d},s="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(s,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"compilation"},"Compilation"),(0,o.yg)("p",null,"This topic is about how to compile Doris from source."),(0,o.yg)("h2",{id:"compile-with-docker-development-image-recommended"},"Compile with Docker Development Image (Recommended)"),(0,o.yg)("h3",{id:"use-off-the-shelf-image"},"Use Off-the-Shelf Image"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download Docker image"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"$ docker pull apache/doris:build-env-ldb-toolchain-latest")),(0,o.yg)("p",{parentName:"li"},"Check if the download is completed"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ docker images\nREPOSITORY               TAG                              IMAGE ID            CREATED             SIZE\napache/doris   build-env-ldb-toolchain-latest   49f68cecbc1a        4 days ago          3.76GB\n")))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note 1: For different versions of Doris, you need to download the corresponding image version. For Apache Doris 0.15 and above, the corresponding Docker image will have the same version number as Doris. For example, you can use  ",(0,o.yg)("inlineCode",{parentName:"p"},"apache/doris:build-env-for-0.15.0")," to compile Apache Doris 0.15.0."),(0,o.yg)("p",{parentName:"blockquote"},"Note 2: ",(0,o.yg)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest")," is used to compile the latest trunk code. It will keep up with the update of the trunk code. You may view the update time in ",(0,o.yg)("inlineCode",{parentName:"p"},"docker/README.md"),".")),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Image Version"),(0,o.yg)("th",{parentName:"tr",align:null},"commit id"),(0,o.yg)("th",{parentName:"tr",align:null},"Release Version"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env"),(0,o.yg)("td",{parentName:"tr",align:null},"before ",(0,o.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81"},"ff0dd0d")),(0,o.yg)("td",{parentName:"tr",align:null},"0.8.x, 0.9.x")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-1.1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81"},"ff0dd0d")," or later"),(0,o.yg)("td",{parentName:"tr",align:null},"0.10.x or later")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-1.2"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/4ef5a8c8560351d7fff7ff8fd51c4c7a75e006a8"},"4ef5a8c")," or later"),(0,o.yg)("td",{parentName:"tr",align:null},"0.12.x - 0.14.0")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-1.3.1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f"},"ad67dd3")," or later"),(0,o.yg)("td",{parentName:"tr",align:null},"0.14.x")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-0.15.0"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/a81f4da4e461a54782a96433b746d07be89e6b54"},"a81f4da")," or later"),(0,o.yg)("td",{parentName:"tr",align:null},"0.15.0")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-latest"),(0,o.yg)("td",{parentName:"tr",align:null},"before ",(0,o.yg)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/0efef1b332300887ee0473f9df9bdd9d7297d824"},"0efef1b")),(0,o.yg)("td",{parentName:"tr",align:null})),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.0.0"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"1.0.0")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.1.0"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"1.1.0")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.2"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"1.1.x, 1.2.x")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.2-no-avx2"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"1.1.x, 1.2.x")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-2.0"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"2.0.x")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-2.0-no-avx2"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"2.0.x")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-latest"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"master")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-no-avx2-latest"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"master")))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),":"),(0,o.yg)("blockquote",null,(0,o.yg)("ol",{parentName:"blockquote"},(0,o.yg)("li",{parentName:"ol"},'Third-party libraries in images with "no-avx2" in their names can run on CPUs that do not support avx2 instructions. Doris can be compiled with the USE_AVX2=0 option.'))),(0,o.yg)("blockquote",null,(0,o.yg)("ol",{parentName:"blockquote",start:2},(0,o.yg)("li",{parentName:"ol"},"Dev docker image ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/thirdparty/CHANGELOG.md"},"ChangeLog")))),(0,o.yg)("blockquote",null,(0,o.yg)("ol",{parentName:"blockquote",start:3},(0,o.yg)("li",{parentName:"ol"},"For Doris 0.14.0, use ",(0,o.yg)("inlineCode",{parentName:"li"},"apache/incubator-doris:build-env-1.2")," to compile; for Doris 0.14.x, use ",(0,o.yg)("inlineCode",{parentName:"li"},"apache/incubator-doris:build-env-1.3.1")," to compile."))),(0,o.yg)("blockquote",null,(0,o.yg)("ol",{parentName:"blockquote",start:4},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The latest version of the ",(0,o.yg)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest")," image contains both JDK 8 and JDK 17."),(0,o.yg)("p",{parentName:"li"},"Switch to JDK 8:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"export JAVA_HOME=/usr/lib/jvm/java-1.8.0\nexport PATH=$JAVA_HOME/bin/:$PATH\n")),(0,o.yg)("p",{parentName:"li"},"Switch to JDK 17:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"export JAVA_HOME=/usr/lib/jvm/jdk-17.0.2/\nexport PATH=$JAVA_HOME/bin/:$PATH\n"))))),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Run the image"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"$ docker run -it apache/doris:build-env-ldb-toolchain-latest")),(0,o.yg)("p",{parentName:"li"},"It is recommended to run the image by mounting the local Doris source directory, so that the compiled binary file will be stored in the host machine and will not disappear because of the exit of the image."),(0,o.yg)("p",{parentName:"li"},"Meanwhile, it is recommended to mount the maven ",(0,o.yg)("inlineCode",{parentName:"p"},".m2")," directory in the image to the host directory to prevent repeated downloading of maven's dependent libraries each time the compilation is started."),(0,o.yg)("p",{parentName:"li"},"In addition, when running image compilation, it is necessary to download some files, and the image can be started in host mode. The host mode does not require the addition of - p for port mapping, as it shares network IP and ports with the host."),(0,o.yg)("p",{parentName:"li"},"The parameters of the docker run section are explained as follows:\n| parameter | annotation |\n|---|---|\n| -v | Mount a storage volume to a container and mount it to a directory on the container |\n| --name | Specify a container name, which can be used for container management in the future |\n| --network | Container network settings: 1 Bridge ( using the bridge specified by the Docker daemon ), 2 Host ( the network where the container uses the host ), 3 Container: NAME",(0,o.yg)("em",{parentName:"p"}," Or")," ID ( using network resources such as IP and PORT from other containers ), 4. none ( containers using their own network are similar to - net=bridge, but not configured ) |"),(0,o.yg)("p",{parentName:"li"},"The following example refers to mounting the container's/root/doris DORIS-x.x.x-release to the host/your/local/doris DORIS-x.x.x-release directory, naming mydocker, and starting the image in host mode:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ docker run -it --network=host --name mydocker -v /your/local/.m2:/root/.m2 -v /your/local/doris-DORIS-x.x.x-release/:/root/doris-DORIS-x.x.x-release/ apache/doris:build-env-ldb-toolchain-latest\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download source code"),(0,o.yg)("p",{parentName:"li"},"After starting the image, you should be in the container. You can download the Doris source code using the following command (If you have mounted the local Doris source directory, you don't need do this):"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ git clone https://github.com/apache/doris.git\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Compile Doris"),(0,o.yg)("p",{parentName:"li"},"Firstly, run the following command to check whether the compilation machine supports the avx2 instruction set."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,o.yg)("p",{parentName:"li"},"If it is not supported, use the following command to compile."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ USE_AVX2=0 sh build.sh\n")),(0,o.yg)("p",{parentName:"li"},"If supported, use the following command to compile."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ sh build.sh\n")),(0,o.yg)("p",{parentName:"li"},"To build debug version for BE, add BUILD_TYPE=Debug."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ BUILD_TYPE=Debug sh build.sh\n")),(0,o.yg)("p",{parentName:"li"},"After compilation, the output files will be in the ",(0,o.yg)("inlineCode",{parentName:"p"},"output/")," directory."),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Note:")),(0,o.yg)("p",{parentName:"blockquote"},"If you are using ",(0,o.yg)("inlineCode",{parentName:"p"},"build-env-for-0.15.0")," or the subsequent versions for the first time, use the following command when compiling:"),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("inlineCode",{parentName:"p"},"sh build.sh --clean --be --fe")),(0,o.yg)("p",{parentName:"blockquote"},"This is we have upgraded the thrift (0.9 -> 0.13) for  ",(0,o.yg)("inlineCode",{parentName:"p"},"build-env-for-0.15.0")," and the subsequent versions. That means you need to use the --clean command to force the use of the new version of thrift to generate code files, otherwise it will result in code incompatibility.")),(0,o.yg)("p",{parentName:"li"}," After compilation, the output file will be in the ",(0,o.yg)("inlineCode",{parentName:"p"},"output/")," directory."))),(0,o.yg)("h3",{id:"self-compile-development-environment-image"},"Self-Compile Development Environment Image"),(0,o.yg)("p",null,"You can create a Doris development environment image yourself. Check ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/docker/README.md"},"docker/README.md")," for details."),(0,o.yg)("h2",{id:"direct-compilation-ubuntu"},"Direct Compilation (Ubuntu)"),(0,o.yg)("p",null,"You can compile Doris directly in your own Linux environment."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"System Dependencies"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"System dependencies before commit ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f"},"ad67dd3")," are as follows:"),(0,o.yg)("p",{parentName:"li"}," ",(0,o.yg)("inlineCode",{parentName:"p"},"GCC 7.3+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.11+ Bison 3.0+")),(0,o.yg)("p",{parentName:"li"}," If you are using Ubuntu 16.04 or newer, you can use the following command to install the dependencies:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"sudo apt-get install build-essential openjdk-8-jdk maven byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python autopoint pkg-config\napt-add-repository 'deb https://apt.kitware.com/ubuntu/ focal main'\napt-get update && apt-get install cmake\n")),(0,o.yg)("p",{parentName:"li"}," If you are using CentOS, you can use the following command to install the dependencies:"),(0,o.yg)("p",{parentName:"li"}," ",(0,o.yg)("inlineCode",{parentName:"p"},"sudo yum groupinstall 'Development Tools' && sudo yum install maven cmake byacc flex automake libtool bison binutils-devel zip unzip ncurses-devel curl git wget python2 glibc-static libstdc++-static java-1.8.0-openjdk"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"System dependencies after commit ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f"},"ad67dd3")," are as follows:"),(0,o.yg)("p",{parentName:"li"}," ",(0,o.yg)("inlineCode",{parentName:"p"},"GCC 10+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.19.2+ Bison 3.0+")),(0,o.yg)("p",{parentName:"li"}," If you are using Ubuntu 16.04 or newer, you can use the following command to install the dependencies:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python\nsudo add-apt-repository -y ppa:ubuntu-toolchain-r/test\nsudo apt update\nsudo apt install gcc-11 g++-11\nln -s /usr/bin/g++-11 /usr/bin/g++\nln -s /usr/bin/gcc-11 /usr/bin/gcc\nsudo apt-get install autoconf automake libtool autopoint\n"))))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Compile Doris"),(0,o.yg)("p",{parentName:"li"},"This is the same as compiling with the Docker development image. Before compiling, you need to check whether the avx2 instruction is supported."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,o.yg)("p",{parentName:"li"},"If it is supported, use the following command to compile:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ sh build.sh\n")),(0,o.yg)("p",{parentName:"li"},"If not supported, use the following command to compile:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ USE_AVX2=0 sh build.sh\n")),(0,o.yg)("p",{parentName:"li"},"To build debug version for BE, add BUILD_TYPE=Debug."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ BUILD_TYPE=Debug sh build.sh\n")),(0,o.yg)("p",{parentName:"li"},"After compilation, the output files will be in the ",(0,o.yg)("inlineCode",{parentName:"p"},"output/")," directory."))),(0,o.yg)("h2",{id:"faq"},"FAQ"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"Could not transfer artifact net.sourceforge.czt.dev:cup-maven-plugin:pom:1.6-cdh from/to xxx")),(0,o.yg)("p",{parentName:"li"},"If you encounter the above error, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/4769/files"},"PR #4769")," and modify the cloudera-related repo configuration in ",(0,o.yg)("inlineCode",{parentName:"p"},"fe/pom.xml"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Invalid download links of third-party dependencies"),(0,o.yg)("p",{parentName:"li"}," The download links of the third-party libraries that Doris relies on are all in the ",(0,o.yg)("inlineCode",{parentName:"p"},"thirdparty/vars.sh")," file. Over time, some download links may fail. If you encounter this situation. It can be solved in the following two ways:"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Manually modify the ",(0,o.yg)("inlineCode",{parentName:"p"},"thirdparty/vars.sh")," file"),(0,o.yg)("p",{parentName:"li"}," Manually modify the problematic download links and the corresponding MD5 value.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Use a third-party download warehouse:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"export REPOSITORY_URL=https://doris-thirdparty-repo.bj.bcebos.com/thirdparty\nsh build-thirdparty.sh\n")),(0,o.yg)("p",{parentName:"li"}," REPOSITORY_URL contains all third-party library source code packages and their historical versions.")))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"fatal error: Killed signal terminated program ...")),(0,o.yg)("p",{parentName:"li"},"If you encounter this error, the possible reason is not enough memory allocated to the image. (The default memory allocation for Docker is 2 GB, and the peak memory usage during the compilation might exceed that.)"),(0,o.yg)("p",{parentName:"li"},"You can fix this by increasing the memory allocation for the image, 4 GB ~ 8 GB, for example.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"When using Clang to compile Doris, PCH files will be used by default to speed up the compilation process. The default configuration of ccache may cause PCH files to be unable to be cached, or the cache to be unable to be hit, resulting in PCH being repeatedly compiled, slowing down the compilation speed. The following configuration is required:  "),(0,o.yg)("p",{parentName:"li"},"To use Clang to compile, but do not want to use PCH files to speed up the compilation process, you need to add the parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"ENABLE_PCH=OFF")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"DORIS_TOOLCHAIN=clang ENABLE_PCH=OFF sh build.sh\n")))),(0,o.yg)("h2",{id:"special-statement"},"Special Statement"),(0,o.yg)("p",null,"Starting from version 0.13, the dependency on the two third-party libraries ","[1]"," and ","[2]"," will be removed in the default compiled output. These two third-party libraries are under ",(0,o.yg)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GNU General Public License V3"),". This license is incompatible with ",(0,o.yg)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License 2.0"),", so it will not appear in the Apache release by default."),(0,o.yg)("p",null,"Remove library ","[1]"," will result in the inability to access MySQL external tables. The feature of accessing MySQL external tables will be implemented through ",(0,o.yg)("inlineCode",{parentName:"p"},"UnixODBC")," in future release version."),(0,o.yg)("p",null,"Remove library ","[2]"," will cause some data written in earlier versions (before version 0.8) to be unable to read. Because the data in the earlier version was compressed using the LZO algorithm, in later versions, it has been changed to the LZ4 compression algorithm. We will provide tools to detect and convert this part of the data in the future."),(0,o.yg)("p",null,"If required, you can continue to use these two libraries by adding the following option when compiling:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WITH_MYSQL=1 WITH_LZO=1 sh build.sh\n")),(0,o.yg)("p",null,"Note that if you use these two third-party libraries, that means you choose not to use Doris under the Apache License 2.0, and you might need to pay attention to the GPL-related agreements."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"[1]"," mysql-5.7.18"),(0,o.yg)("li",{parentName:"ul"},"[2]"," lzo-2.10")))}c.isMDXComponent=!0}}]);