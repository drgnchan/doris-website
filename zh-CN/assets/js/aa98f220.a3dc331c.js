"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[8420],{95788:(e,n,i)=>{i.d(n,{Iu:()=>u,yg:()=>c});var a=i(11504);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(i),m=t,c=d["".concat(p,".").concat(m)]||d[m]||g[m]||r;return i?a.createElement(c,l(l({ref:n},u),{},{components:i})):a.createElement(c,l({ref:n},u))}));function c(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:t,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},21596:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=i(45072),t=(i(11504),i(95788));const r={title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",language:"zh-CN"},l=void 0,o={unversionedId:"ecosystem/plugin-development-manual",id:"ecosystem/plugin-development-manual",title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/plugin-development-manual.md",sourceDirName:"ecosystem",slug:"/ecosystem/plugin-development-manual",permalink:"/zh-CN/docs/dev/ecosystem/plugin-development-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",language:"zh-CN"},sidebar:"docs",previous:{title:"Beats Doris Output Plugin",permalink:"/zh-CN/docs/dev/ecosystem/beats"},next:{title:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6",permalink:"/zh-CN/docs/dev/ecosystem/audit-plugin"}},p={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"\u7f16\u5199\u63d2\u4ef6",id:"\u7f16\u5199\u63d2\u4ef6",level:2},{value:"\u521b\u5efa\u63d2\u4ef6\u6a21\u5757",id:"\u521b\u5efa\u63d2\u4ef6\u6a21\u5757",level:3},{value:"\u6dfb\u52a0 zip.xml",id:"\u6dfb\u52a0-zipxml",level:3},{value:"\u66f4\u65b0 pom.xml",id:"\u66f4\u65b0-pomxml",level:3},{value:"\u5b9e\u73b0\u63d2\u4ef6",id:"\u5b9e\u73b0\u63d2\u4ef6",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"\u53e6\u4e00\u79cd\u5f00\u53d1\u65b9\u5f0f",id:"\u53e6\u4e00\u79cd\u5f00\u53d1\u65b9\u5f0f",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u5b89\u88c5\u548c\u5378\u8f7d\u63d2\u4ef6",id:"\u5b89\u88c5\u548c\u5378\u8f7d\u63d2\u4ef6",level:2}],u={toc:s},d="wrapper";function g(e){let{components:n,...i}=e;return(0,t.yg)(d,(0,a.c)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"doris-\u63d2\u4ef6\u6846\u67b6"},"Doris \u63d2\u4ef6\u6846\u67b6"),(0,t.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,t.yg)("p",null,"Doris \u7684\u63d2\u4ef6\u6846\u67b6\u652f\u6301\u5728\u8fd0\u884c\u65f6\u6dfb\u52a0/\u5378\u8f7d\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u800c\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5f00\u53d1\u81ea\u5df1\u7684\u63d2\u4ef6\u6765\u6269\u5c55Doris\u7684\u529f\u80fd\u3002"),(0,t.yg)("p",null,"\u4f8b\u5982\uff0c\u5ba1\u8ba1\u63d2\u4ef6\u4f5c\u7528\u4e8e Doris \u8bf7\u6c42\u6267\u884c\u540e\uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u4e00\u6b21\u8bf7\u6c42\u76f8\u5173\u7684\u4fe1\u606f\uff08\u8bbf\u95ee\u7528\u6237\uff0c\u8bf7\u6c42IP\uff0cSQL\u7b49...\uff09\uff0c\u5e76\u5c06\u4fe1\u606f\u5199\u5165\u5230\u6307\u5b9a\u7684\u8868\u4e2d\u3002"),(0,t.yg)("p",null,"\u4e0eUDF\u7684\u533a\u522b\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"UDF\u662f\u51fd\u6570\uff0c\u7528\u4e8e\u5728SQL\u6267\u884c\u65f6\u8fdb\u884c\u6570\u636e\u8ba1\u7b97\u3002\u63d2\u4ef6\u662f\u9644\u52a0\u529f\u80fd\uff0c\u7528\u4e8e\u4e3aDoris\u6269\u5c55\u81ea\u5b9a\u4e49\u7684\u529f\u80fd\uff0c\u4f8b\u5982\uff1a\u652f\u6301\u4e0d\u540c\u7684\u5b58\u50a8\u5f15\u64ce\uff0c\u652f\u6301\u4e0d\u540c\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u63d2\u4ef6\u5e76\u4e0d\u4f1a\u53c2\u4e0e\u6267\u884cSQL\u65f6\u7684\u6570\u636e\u8ba1\u7b97\u3002"),(0,t.yg)("li",{parentName:"ul"},"UDF\u7684\u6267\u884c\u5468\u671f\u4ec5\u9650\u4e8e\u4e00\u6b21SQL\u6267\u884c\u3002\u63d2\u4ef6\u7684\u6267\u884c\u5468\u671f\u53ef\u80fd\u4e0eDoris\u8fdb\u7a0b\u76f8\u540c\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f\u4e0d\u540c\u3002\u5982\u679c\u60a8\u9700\u8981\u6267\u884cSQL\u65f6\u652f\u6301\u7279\u6b8a\u7684\u6570\u636e\u7b97\u6cd5\uff0c\u90a3\u4e48\u63a8\u8350\u4f7f\u7528UDF\uff0c\u5982\u679c\u60a8\u9700\u8981\u5728Doris\u4e0a\u8fd0\u884c\u81ea\u5b9a\u4e49\u7684\u529f\u80fd\uff0c\u6216\u8005\u662f\u542f\u52a8\u4e00\u4e2a\u540e\u53f0\u7ebf\u7a0b\u6267\u884c\u4efb\u52a1\uff0c\u90a3\u4e48\u63a8\u8350\u4f7f\u7528\u63d2\u4ef6\u3002")),(0,t.yg)("p",null,"\u76ee\u524d\u63d2\u4ef6\u6846\u67b6\u4ec5\u652f\u6301\u5ba1\u8ba1\u7c7b\u63d2\u4ef6\u3002"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f:\nDoris\u7684\u63d2\u4ef6\u6846\u67b6\u662f\u5b9e\u9a8c\u6027\u529f\u80fd, \u76ee\u524d\u53ea\u652f\u6301FE\u63d2\u4ef6\uff0c\u4e14\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7FE\u914d\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"plugin_enable=true"),"\u6253\u5f00")),(0,t.yg)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,t.yg)("p",null,"\u4e00\u4e2aFE\u7684\u63d2\u4ef6\u53ef\u4ee5\u4f7f\u4e00\u4e2a",(0,t.yg)("strong",{parentName:"p"},"zip\u538b\u7f29\u5305"),"\u6216\u8005\u662f\u4e00\u4e2a",(0,t.yg)("strong",{parentName:"p"},"\u76ee\u5f55"),"\u3002\u5176\u5185\u5bb9\u81f3\u5c11\u5305\u542b\u4e24\u4e2a\u6587\u4ef6\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"plugin.properties")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},".jar")," \u6587\u4ef6\u3002",(0,t.yg)("inlineCode",{parentName:"p"},"plugin.properties"),"\u7528\u4e8e\u63cf\u8ff0\u63d2\u4ef6\u4fe1\u606f\u3002"),(0,t.yg)("p",null,"\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"# plugin .zip\nauditodemo.zip:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n\n# plugin local directory\nauditodemo/:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"plugin.properties")," \u5185\u5bb9\u793a\u4f8b:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'### required:\n#\n# the plugin name\nname = audit_plugin_demo\n#\n# the plugin type\ntype = AUDIT\n#\n# simple summary of the plugin\ndescription = just for test\n#\n# Doris\'s version, like: 0.11.0\nversion = 0.11.0\n\n### FE-Plugin optional:\n#\n# version of java the code is built against\n# use the command "java -version" value, like 1.8.0, 9.0.1, 13.0.4\njava.version = 1.8.31\n#\n# the name of the class to load, fully-qualified.\nclassname = AuditPluginDemo\n\n### BE-Plugin optional:\n# the name of the so to load\nsoName = example.so\n')),(0,t.yg)("h2",{id:"\u7f16\u5199\u63d2\u4ef6"},"\u7f16\u5199\u63d2\u4ef6"),(0,t.yg)("p",null,"\u63d2\u4ef6\u7684\u5f00\u53d1\u73af\u5883\u4f9d\u8d56Doris\u7684\u5f00\u53d1\u7f16\u8bd1\u73af\u5883\u3002\u6240\u4ee5\u8bf7\u5148\u786e\u4fddDoris\u7684\u5f00\u53d1\u7f16\u8bd1\u73af\u5883\u8fd0\u884c\u6b63\u5e38\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"fe_plugins")," \u76ee\u5f55\u662f FE \u63d2\u4ef6\u7684\u6839\u6a21\u5757\u3002\u8fd9\u4e2a\u6839\u6a21\u5757\u7edf\u4e00\u7ba1\u7406\u63d2\u4ef6\u6240\u9700\u7684\u4f9d\u8d56\u3002\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\uff0c\u76f8\u5f53\u4e8e\u5728\u8fd9\u4e2a\u6839\u6a21\u5757\u6dfb\u52a0\u4e00\u4e2a\u5b50\u6a21\u5757\u3002"),(0,t.yg)("h3",{id:"\u521b\u5efa\u63d2\u4ef6\u6a21\u5757"},"\u521b\u5efa\u63d2\u4ef6\u6a21\u5757"),(0,t.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"fe_plugins")," \u76ee\u5f55\u521b\u5efa\u4e00\u4e2a\u5b50\u6a21\u5757\u7528\u6237\u5b9e\u73b0\u521b\u5efa\u548c\u521b\u5efa\u5de5\u7a0b\u3002\u5176\u4e2d ",(0,t.yg)("inlineCode",{parentName:"p"},"doris-fe-test")," \u4e3a\u63d2\u4ef6\u540d\u79f0\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mvn archetype: generate -DarchetypeCatalog = internal -DgroupId = org.apache -DartifactId = doris-fe-test -DinteractiveMode = false\n")),(0,t.yg)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 maven \u5de5\u7a0b\uff0c\u5e76\u4e14\u81ea\u52a8\u5411 ",(0,t.yg)("inlineCode",{parentName:"p"},"fe_plugins/pom.xml")," \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u5b50\u6a21\u5757\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\xa0\xa0\xa0\xa0.....\n\xa0\xa0\xa0\xa0<groupId>org.apache</groupId>\n\xa0\xa0\xa0\xa0<artifactId>doris-fe-plugins</artifactId>\n\xa0\xa0\xa0\xa0<packaging>pom</packaging>\n\xa0\xa0\xa0\xa0<version>1.0-SNAPSHOT</version>\n\xa0\xa0\xa0\xa0<modules>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<module>auditdemo</module>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# new plugin module\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<module>doris-fe-test</module>\n\xa0\xa0\xa0\xa0</modules>\n\xa0\xa0\xa0\xa0.....\n")),(0,t.yg)("p",null,"\u65b0\u7684\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"-doris-fe-test/\n-pom.xml\n-src/\n    ---- main/java/org/apache/\n    ------- App.java # mvn auto generate, ignore\n    ---- test/java/org/apache\n")),(0,t.yg)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"main")," \u76ee\u5f55\u4e0b\u6dfb\u52a0\u4e00\u4e2a ",(0,t.yg)("inlineCode",{parentName:"p"},"assembly")," \u76ee\u5f55\u6765\u5b58\u653e ",(0,t.yg)("inlineCode",{parentName:"p"},"plugin.properties")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"zip.xml"),"\u3002\u6700\u7ec8\u7684\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"-doris-fe-test/\n-pom.xml\n-src/\n---- main/\n------ assembly/\n-------- plugin.properties\n-------- zip.xml\n------ java/org/apache/\n--------App.java # mvn auto generate, ignore\n---- test/java/org/apache\n")),(0,t.yg)("h3",{id:"\u6dfb\u52a0-zipxml"},"\u6dfb\u52a0 zip.xml"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"zip.xml")," \u7528\u4e8e\u63cf\u8ff0\u6700\u7ec8\u751f\u6210\u7684 zip \u538b\u7f29\u5305\u4e2d\u7684\u6587\u4ef6\u5185\u5bb9\u3002\uff08\u5982 .jar file, plugin.properties \u7b49\u7b49\uff09"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"<assembly>\n\xa0\xa0\xa0\xa0<id>plugin</id>\n\xa0\xa0\xa0\xa0<formats>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<format>zip</format>\n\xa0\xa0\xa0\xa0</formats>\n\xa0\xa0\xa0\xa0<!-IMPORTANT: must be false->\n\xa0\xa0\xa0\xa0<includeBaseDirectory>false</includeBaseDirectory>\n\xa0\xa0\xa0\xa0<fileSets>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<fileSet>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<directory>target</directory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<include>*.jar</include>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</ ncludes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<outputDirectory>/</outputDirectory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</fileSet>\n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<fileSet>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<directory>src/main/assembly</directory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<include>plugin.properties</include>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<outputDirectory>/</outputDirectory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</fileSet>\n\xa0\xa0\xa0\xa0</fileSets>\n</assembly>\n")),(0,t.yg)("h3",{id:"\u66f4\u65b0-pomxml"},"\u66f4\u65b0 pom.xml"),(0,t.yg)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u66f4\u65b0\u5b50\u6a21\u5757\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\uff0c\u6dfb\u52a0 doris-fe \u4f9d\u8d56\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <groupId>org.apache</groupId>\n        <artifactId>doris-fe-plugins</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>auditloader</artifactId>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        \x3c!-- doris-fe dependencies --\x3e\n        <dependency>\n            <groupId>org.apache</groupId>\n            <artifactId>doris-fe</artifactId>\n        </dependency>\n\n        \x3c!-- other dependencies --\x3e\n        <dependency>\n            ...\n        </dependency>\n    </dependencies>\n\n    <build>\n        <finalName>auditloader</finalName>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>2.4.1</version>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptors>\n                        <descriptor>src/main/assembly/zip.xml</descriptor>\n                    </descriptors>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')),(0,t.yg)("h3",{id:"\u5b9e\u73b0\u63d2\u4ef6"},"\u5b9e\u73b0\u63d2\u4ef6"),(0,t.yg)("p",null,"\u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u5f00\u59cb\u8fdb\u884c\u63d2\u4ef6\u529f\u80fd\u7684\u5f00\u53d1\u4e86\u3002\u63d2\u4ef6\u9700\u8981\u5b9e\u73b0 ",(0,t.yg)("inlineCode",{parentName:"p"},"Plugin")," \u63a5\u53e3\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u9605 Doris \u81ea\u5e26\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"auditdemo")," \u63d2\u4ef6\u793a\u4f8b\u4ee3\u7801\u3002"),(0,t.yg)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,t.yg)("p",null,"\u5728\u7f16\u8bd1\u63d2\u4ef6\u4e4b\u524d\uff0c\u9700\u8981\u5148\u6267\u884c ",(0,t.yg)("inlineCode",{parentName:"p"},"sh build.sh --fe")," \u8fdb\u884c Doris FE \u4ee3\u7801\u7684\u7f16\u8bd1\uff0c\u5e76\u786e\u4fdd\u7f16\u8bd1\u6210\u529f\u3002"),(0,t.yg)("p",null,"\u4e4b\u540e\uff0c\u6267\u884c ",(0,t.yg)("inlineCode",{parentName:"p"},"sh build_plugin.sh")," \u7f16\u8bd1\u6240\u6709\u63d2\u4ef6\u3002\u6700\u7ec8\u7684\u4ea7\u51fa\u4f1a\u5b58\u653e\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"fe_plugins/output")," \u76ee\u5f55\u4e2d\u3002"),(0,t.yg)("p",null,"\u6216\u8005\u4e5f\u53ef\u4ee5\u6267\u884c ",(0,t.yg)("inlineCode",{parentName:"p"},"sh build_plugin.sh --plugin your_plugin_name")," \u6765\u4ec5\u7f16\u8bd1\u6307\u5b9a\u7684\u63d2\u4ef6\u3002"),(0,t.yg)("h3",{id:"\u53e6\u4e00\u79cd\u5f00\u53d1\u65b9\u5f0f"},"\u53e6\u4e00\u79cd\u5f00\u53d1\u65b9\u5f0f"),(0,t.yg)("p",null,"\u60a8\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u4fee\u6539\u81ea\u5e26\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"auditdemo")," \u63d2\u4ef6\u793a\u4f8b\u4ee3\u7801\u8fdb\u884c\u5f00\u53d1\u3002"),(0,t.yg)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,t.yg)("p",null,"\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\u90e8\u7f72\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5c06 ",(0,t.yg)("inlineCode",{parentName:"li"},".zip")," \u6587\u4ef6\u653e\u5728 Http \u6216 Https \u670d\u52a1\u5668\u4e0a\u3002\u5982\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"http://xxx.xxx.com/data/my_plugin.zip"),", Doris \u4f1a\u4e0b\u8f7d\u8fd9\u4e2a\u6587\u4ef6\u3002\u540c\u65f6\u9700\u8981\u5728properties\u4e2d\u8bbe\u7f6emd5sum\u7684\u503c\uff0c\u6216\u8005\u653e\u7f6e\u4e00\u4e2a\u548c ",(0,t.yg)("inlineCode",{parentName:"li"},".zip")," \u6587\u4ef6\u540c\u540d\u7684 md5 \u6587\u4ef6\uff0c\u5982 ",(0,t.yg)("inlineCode",{parentName:"li"},"http://xxx.xxxxxx.com/data/my_plugin.zip.md5"),"\u3002\u5176\u4e2d\u5185\u5bb9\u4e3a .zip \u6587\u4ef6\u7684 MD5 \u503c\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u672c\u5730 ",(0,t.yg)("inlineCode",{parentName:"li"},".zip")," \u6587\u4ef6\u3002 \u5982\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"/home/work/data/plugin.zip"),"\u3002\u5982\u679c\u8be5\u63d2\u4ef6\u4ec5\u7528\u4e8e FE\uff0c\u5219\u9700\u90e8\u7f72\u5728\u6240\u6709 FE \u8282\u70b9\u76f8\u540c\u7684\u76ee\u5f55\u4e0b\u3002\u5426\u5219\uff0c\u9700\u8981\u5728\u6240\u6709 FE \u548c BE \u8282\u70b9\u90e8\u7f72\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u672c\u5730\u76ee\u5f55\u3002\u5982\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"/home/work/data/plugin/"),"\u3002\u76f8\u5f53\u4e8e ",(0,t.yg)("inlineCode",{parentName:"li"},".zip")," \u6587\u4ef6\u89e3\u538b\u540e\u7684\u76ee\u5f55\u3002\u5982\u679c\u8be5\u63d2\u4ef6\u4ec5\u7528\u4e8e FE\uff0c\u5219\u9700\u90e8\u7f72\u5728\u6240\u6709 FE \u8282\u70b9\u76f8\u540c\u7684\u76ee\u5f55\u4e0b\u3002\u5426\u5219\uff0c\u9700\u8981\u5728\u6240\u6709 FE \u548c BE \u8282\u70b9\u90e8\u7f72\u3002")),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a\u9700\u4fdd\u8bc1\u90e8\u7f72\u8def\u5f84\u5728\u6574\u4e2a\u63d2\u4ef6\u751f\u547d\u5468\u671f\u5185\u6709\u6548\u3002"),(0,t.yg)("h2",{id:"\u5b89\u88c5\u548c\u5378\u8f7d\u63d2\u4ef6"},"\u5b89\u88c5\u548c\u5378\u8f7d\u63d2\u4ef6"),(0,t.yg)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5\u548c\u5378\u8f7d\u63d2\u4ef6\u3002\u66f4\u591a\u5e2e\u52a9\u8bf7\u53c2\u9605 ",(0,t.yg)("inlineCode",{parentName:"p"},"HELP INSTALL PLUGIN;")," ",(0,t.yg)("inlineCode",{parentName:"p"},"HELP UNINSTALL PLUGIN;")," ",(0,t.yg)("inlineCode",{parentName:"p"},"HELP SHOW PLUGINS;")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'mysql> install plugin from "/home/users/doris/auditloader.zip";\nQuery OK, 0 rows affected (0.09 sec)\n\nmysql> show plugins\\G\n*************************** 1. row ***************************\n       Name: auditloader\n       Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: AuditLoaderPlugin\n     SoName: NULL\n    Sources: /home/users/doris/auditloader.zip\n     Status: INSTALLED\n Properties: {}\n*************************** 2. row ***************************\n       Name: AuditLogBuilder\n       Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: org.apache.doris.qe.AuditLogBuilder\n     SoName: NULL\n    Sources: Builtin\n     Status: INSTALLED\n Properties: {}   \n2 rows in set (0.00 sec)\n\nmysql> uninstall plugin auditloader;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql> show plugins;\nEmpty set (0.00 sec)\n')))}g.isMDXComponent=!0}}]);