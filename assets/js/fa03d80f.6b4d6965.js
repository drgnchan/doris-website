"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15361],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),s=a,y=m["".concat(p,".").concat(s)]||m[s]||g[s]||i;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},388448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(58168),a=(t(296540),t(15680));const i={title:"Setting FE dev env - Eclipse",language:"en"},o=void 0,l={unversionedId:"developer-guide/fe-eclipse-dev",id:"developer-guide/fe-eclipse-dev",title:"Setting FE dev env - Eclipse",description:"\x3c!--",source:"@site/community/developer-guide/fe-eclipse-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/fe-eclipse-dev",permalink:"/community/developer-guide/fe-eclipse-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"Setting FE dev env - Eclipse",language:"en"},sidebar:"community",previous:{title:"Doris BE Storage Layer Benchmark Tool",permalink:"/community/developer-guide/benchmark-tool"},next:{title:"Setting Up dev env for FE - IntelliJ IDEA",permalink:"/community/developer-guide/fe-idea-dev"}},p={},d=[{value:"Preparation",id:"preparation",level:2},{value:"Code Generation",id:"code-generation",level:3},{value:"Windows",id:"windows",level:4},{value:"MacOS",id:"macos",level:4},{value:"Import FE project",id:"import-fe-project",level:2},{value:"Import as eclipse project",id:"import-as-eclipse-project",level:3},{value:"Import as maven project",id:"import-as-maven-project",level:3},{value:"Run Unit Test",id:"run-unit-test",level:2},{value:"Run FE",id:"run-fe",level:2},{value:"Code Update",id:"code-update",level:2},{value:"Imported as eclipse project",id:"imported-as-eclipse-project",level:3},{value:"Imported as maven project",id:"imported-as-maven-project",level:3},{value:"Imports Order",id:"imports-order",level:2}],c={toc:d},m="wrapper";function g(e){let{components:n,...i}=e;return(0,a.yg)(m,(0,r.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"setting-fe-dev-env-using-eclipse"},"Setting FE dev env using Eclipse"),(0,a.yg)("h2",{id:"preparation"},"Preparation"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"JDK 1.8+"),(0,a.yg)("li",{parentName:"ul"},"Maven 3.x+"),(0,a.yg)("li",{parentName:"ul"},"Eclipse, with ",(0,a.yg)("a",{parentName:"li",href:"http://www.eclipse.org/m2e/"},"M2Eclipse")," installed")),(0,a.yg)("h3",{id:"code-generation"},"Code Generation"),(0,a.yg)("p",null,"The FE module requires part of the generated code, such as Thrift, Protobuf, Jflex, CUP and other frameworks. "),(0,a.yg)("h4",{id:"windows"},"Windows"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Under Linux, enter the source code directory ",(0,a.yg)("inlineCode",{parentName:"p"},"fe")," and execute the following command:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"}," mvn  generate-sources\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If use windows as development environment, then package the generated ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/fe-core/target/generated-sources")," directory:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"fe/fe-core/target/ && tar czf java.tar.gz generated-sources/"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Copy ",(0,a.yg)("inlineCode",{parentName:"p"},"java.tar.gz")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/fe-core/target/")," directory of the development environment and unzip"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"cp java.tar.gz /path/to/doris/fe/fe-core/target/\ncd /path/to/doris/fe/fe-core/target/ && tar xzf java.tar.gz\n")))),(0,a.yg)("h4",{id:"macos"},"MacOS"),(0,a.yg)("p",null,"We can use maven to do code generation or in other words build FE project\ndirectly on MacOS."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Install apache thrift from source code or ",(0,a.yg)("inlineCode",{parentName:"p"},"brew")," if you don't have one")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a directory ",(0,a.yg)("inlineCode",{parentName:"p"},"thirdparty/installed/bin"),", and link command thrift into\nit."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"mkdir -p thirdparty/installed/bin\nln -s ${thrift_installed_full_path} thirdparty/installed/bin/thrift\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Call ",(0,a.yg)("inlineCode",{parentName:"p"},"maven")," to build FE project, if something went wrong, check you\n",(0,a.yg)("inlineCode",{parentName:"p"},"$JAVA_HOME"),", java version and newly installed command ",(0,a.yg)("inlineCode",{parentName:"p"},"thrift")," work\ncorrectly."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"cd fe && mvn package -DskipTests=true -Dos.arch=x86_64\n")))),(0,a.yg)("p",null,"Option ",(0,a.yg)("inlineCode",{parentName:"p"},"-Dos.arch=x86_64")," in step 3 is for compatibility of Apple's M series\nCPU."),(0,a.yg)("p",null,"Note:\n0. cup and jfex use java jar to do code generation, the process is platform\nindependent."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Code generation of protobuf is done by ",(0,a.yg)("inlineCode",{parentName:"li"},"protoc-jar-maven-plugin"),", which uses\nprecompiled binaries of different archs to make it seems platform independent."),(0,a.yg)("li",{parentName:"ol"},"thrift is the only one relies on ",(0,a.yg)("inlineCode",{parentName:"li"},"thirdparty/installed"),", which needs to be\nbuilt from source. We will make it independent on ",(0,a.yg)("inlineCode",{parentName:"li"},"thirdparty/installed"),"\nsomeday (TODO).")),(0,a.yg)("h2",{id:"import-fe-project"},"Import FE project"),(0,a.yg)("h3",{id:"import-as-eclipse-project"},"Import as eclipse project"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/")," directory of the development environment, execute the following command to generate the Eclipse project file:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"cd /path/to/doris/fe/ && mvn -npr eclipse:eclipse -Dskip.plugin=true")),(0,a.yg)("p",{parentName:"li"},"After the execution is completed, the ",(0,a.yg)("inlineCode",{parentName:"p"},".project")," and ",(0,a.yg)("inlineCode",{parentName:"p"},".classpath")," files will be generated in the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/")," directory.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Import FE project"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Open Eclipse, choose ",(0,a.yg)("inlineCode",{parentName:"li"},"File -> Import"),"."),(0,a.yg)("li",{parentName:"ul"},"Choose ",(0,a.yg)("inlineCode",{parentName:"li"},"General -> Existing Projects into Workspace"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Select root directory")," and choose ",(0,a.yg)("inlineCode",{parentName:"li"},"fe/")," directory, click ",(0,a.yg)("inlineCode",{parentName:"li"},"Finish")," to finish."),(0,a.yg)("li",{parentName:"ul"},"Right click the project, and choose ",(0,a.yg)("inlineCode",{parentName:"li"},"Build Path -> Configure Build Path"),"."),(0,a.yg)("li",{parentName:"ul"},"In the ",(0,a.yg)("inlineCode",{parentName:"li"},"Java Build Path")," dialog, choose the ",(0,a.yg)("inlineCode",{parentName:"li"},"Source")," tab, click ",(0,a.yg)("inlineCode",{parentName:"li"},"Add Folder"),", and select the ",(0,a.yg)("inlineCode",{parentName:"li"},"java/")," directory that was copied and unzipped before adding."),(0,a.yg)("li",{parentName:"ul"},"Click ",(0,a.yg)("inlineCode",{parentName:"li"},"Apply and Close")," to finish.")))),(0,a.yg)("p",null,"At this point, FE project import is complete. The project directory in Eclipse is roughly as follows:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(624607).A,width:"592",height:"312"})),(0,a.yg)("h3",{id:"import-as-maven-project"},"Import as maven project"),(0,a.yg)("p",null,"We are able to build FE with maven, if we have done all the operations related\nto MacOS. And we are now of course able to import FE project as a maven project\nin eclipse."),(0,a.yg)("p",null,"In eclipse menu ",(0,a.yg)("inlineCode",{parentName:"p"},"File")," select ",(0,a.yg)("inlineCode",{parentName:"p"},"Import -> Maven -> Existing Maven Projects"),",\nChoose doris fe directory to finish import. It's recommended to use working set\nto manage the all modules of FE."),(0,a.yg)("p",null,"Enjoy developing and debugging FE in eclipse!"),(0,a.yg)("h2",{id:"run-unit-test"},"Run Unit Test"),(0,a.yg)("p",null,"Right-click on the unit test file you want to run and select ",(0,a.yg)("inlineCode",{parentName:"p"},"Run As -> JUnit Test"),". (If you want to debug, select ",(0,a.yg)("inlineCode",{parentName:"p"},"Debug As -> JUnit Test"),")."),(0,a.yg)("p",null,"If the following error occurs:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"java.lang.Exception: Method xxxx should have no parameters\n")),(0,a.yg)("p",null,"Then right-click the unit test file and select ",(0,a.yg)("inlineCode",{parentName:"p"},"Run As -> Run Configurations..."),". (If you want to debug, select ",(0,a.yg)("inlineCode",{parentName:"p"},"Debug As -> Debug Configurations..."),")."),(0,a.yg)("p",null,"Add to the ",(0,a.yg)("inlineCode",{parentName:"p"},"VM arguments")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Arguments")," tab:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"-javaagent:${settings.localRepository}/org/jmockit/jmockit/1.48/jmockit-1.48.jar\n")),(0,a.yg)("p",null,"Among them, ",(0,a.yg)("inlineCode",{parentName:"p"},"${settings.localRepository}")," should be replaced with the path of the maven library path, such as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"-javaagent:/Users/cmy/.m2/repository/org/jmockit/jmockit/1.48/jmockit-1.48.jar\n")),(0,a.yg)("p",null,"Then just run ",(0,a.yg)("inlineCode",{parentName:"p"},"Run/Debug"),"."),(0,a.yg)("h2",{id:"run-fe"},"Run FE"),(0,a.yg)("p",null,"You can directly start an FE process in Eclipse to facilitate debugging the code."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a runtime directory"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"mkdir /path/to/doris/fe/run/\ncd /path/to/doris/fe/run/\nmkdir conf/log/doris-meta/\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create configuration file"),(0,a.yg)("p",{parentName:"li"},"Create the configuration file ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.conf")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/")," directory created in the first step. You can directly copy ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/fe.conf")," in the source directory and make simple changes.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Find the ",(0,a.yg)("inlineCode",{parentName:"p"},"src/main/java/org/apache/doris/DorisFE.java")," file in Eclipse, right-click and select ",(0,a.yg)("inlineCode",{parentName:"p"},"Run As -> Run Configurations..."),". Add the following environment variables to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Environment")," tab:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DORIS_HOME: /path/to/doris/fe/run/")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"PID_DIR: /path/to/doris/fe/run/")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"LOG_DIR: /path/to/doris/fe/run/log")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Right-click ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisFE.java")," and select ",(0,a.yg)("inlineCode",{parentName:"p"},"Run As -> Java Application")," to start FE."))),(0,a.yg)("p",null,"To run a UT, a FE service will be started at first. And then, UT cases execute as client and test corresponding logics. When errors occur, only client logs will be print in UT logs. If you need more information from ",(0,a.yg)("strong",{parentName:"p"},"server logs"),", you can view logs in ",(0,a.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/fe/mocked"),"."),(0,a.yg)("h2",{id:"code-update"},"Code Update"),(0,a.yg)("h3",{id:"imported-as-eclipse-project"},"Imported as eclipse project"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Update lexical and grammar files or proto and thrift files"),(0,a.yg)("p",{parentName:"li"},"If you modified ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/src/main/cup/sql_parser.cup")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/src/main/jflex/sql_scanner.flex")," file or proto and thrift files. You need to execute the following commands in the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/")," directory:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"mvn  generate-sources\n")),(0,a.yg)("p",{parentName:"li"},"Then refresh the project in Eclipse.\n")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Update maven dependencies"),(0,a.yg)("p",{parentName:"li"},"If you update the dependency in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/pom.xml"),", you need to execute the following command in the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/")," directory:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"mvn -npr eclipse:eclipse -Dskip.plugin=true")),(0,a.yg)("p",{parentName:"li"},"Then refresh the project in Eclipse. If it cannot be updated, it is recommended to delete the project and import it again according to this document."))),(0,a.yg)("h3",{id:"imported-as-maven-project"},"Imported as maven project"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Update lexical and grammar files or proto and thrift files"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"cd fe && mvn package -DskipTests=true -Dos.arch=x86_64\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Update maven dependencies, in eclipse ",(0,a.yg)("inlineCode",{parentName:"p"},"Package Explorer")," right click on the\nproject ",(0,a.yg)("inlineCode",{parentName:"p"},"maven -> update project..."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Refresh project in eclipse"))),(0,a.yg)("h2",{id:"imports-order"},"Imports Order"),(0,a.yg)("p",null,"In order to maintain the Imports order of Java, please perform the following operations to set the Imports Order of the project."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create the file ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_doris.importorder")," and write the following:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"#Organize Import Order\n#Wed Jul 01 16:42:47 CST 2020\n4=javax\n3=java\n2=org\n1=com\n0=org.apache.doris\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Open Eclipse Preferences, select ",(0,a.yg)("inlineCode",{parentName:"p"},"Java -> Code Style -> Organize Imports"),". Click ",(0,a.yg)("inlineCode",{parentName:"p"},"Import")," to import the above file."))))}g.isMDXComponent=!0},624607:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/eclipse-import-fe-project-1-a9785cc1c02e93aa7a088bf272fed3f4.png"}}]);