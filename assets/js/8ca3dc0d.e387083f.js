"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22127],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},835420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(58168),i=(t(296540),t(15680));const o={title:"Contribute UDF",language:"en"},a=void 0,s={unversionedId:"ecosystem/udf/contribute-udf",id:"ecosystem/udf/contribute-udf",title:"Contribute UDF",description:"\x3c!--",source:"@site/docs/ecosystem/udf/contribute-udf.md",sourceDirName:"ecosystem/udf",slug:"/ecosystem/udf/contribute-udf",permalink:"/docs/dev/ecosystem/udf/contribute-udf",draft:!1,tags:[],version:"current",frontMatter:{title:"Contribute UDF",language:"en"},sidebar:"docs",previous:{title:"Apache Superset Integrate",permalink:"/docs/dev/ecosystem/bi-integration/apache-superset"},next:{title:"Remote User Defined Function Service",permalink:"/docs/dev/ecosystem/udf/remote-user-defined-function"}},u={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Ready to work",id:"ready-to-work",level:2},{value:"Source code",id:"source-code",level:3},{value:"manual",id:"manual",level:3},{value:"Contribute UDF to the community",id:"contribute-udf-to-the-community",level:2}],c={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"contribute-udf"},"Contribute UDF"),(0,i.yg)("p",null,"This manual mainly introduces how external users can contribute their own UDF functions to the Doris community."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"UDF function is universal"),(0,i.yg)("p",{parentName:"li"},"The versatility here mainly refers to: UDF functions are widely used in certain business scenarios. Such UDF functions are valuable and can be used directly by other users in the community."),(0,i.yg)("p",{parentName:"li"},"If you are not sure whether the UDF function you wrote is universal, you can send an email to ",(0,i.yg)("inlineCode",{parentName:"p"},"dev@doris.apache.org")," or directly create an ISSUE to initiate the discussion.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"UDF has completed testing and is running normally in the user's production environment"))),(0,i.yg)("h2",{id:"ready-to-work"},"Ready to work"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"UDF source code"),(0,i.yg)("li",{parentName:"ol"},"User Manual of UDF")),(0,i.yg)("h3",{id:"source-code"},"Source code"),(0,i.yg)("p",null,"Create a folder for UDF functions under ",(0,i.yg)("inlineCode",{parentName:"p"},"contrib/udf/src/"),", and store the source code and CMAKE files here. The source code to be contributed should include: ",(0,i.yg)("inlineCode",{parentName:"p"},".h"),", ",(0,i.yg)("inlineCode",{parentName:"p"},".cpp"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"CMakeFile.txt"),". Taking udf_samples as an example here, first create a new folder under the ",(0,i.yg)("inlineCode",{parentName:"p"},"contrib/udf/src/")," path and store the source code."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"   \u251c\u2500\u2500contrib\n   \u2502  \u2514\u2500\u2500 udf\n   \u2502    \u251c\u2500\u2500 CMakeLists.txt\n   \u2502    \u2514\u2500\u2500 src\n   \u2502       \u2514\u2500\u2500 udf_samples\n   \u2502           \u251c\u2500\u2500 CMakeLists.txt\n   \u2502           \u251c\u2500\u2500 uda_sample.cpp\n   \u2502           \u251c\u2500\u2500 uda_sample.h\n   \u2502           \u251c\u2500\u2500 udf_sample.cpp\n   \u2502           \u2514\u2500\u2500 udf_sample.h\n\n")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"CMakeLists.txt"),(0,i.yg)("p",{parentName:"li"},"After the user's ",(0,i.yg)("inlineCode",{parentName:"p"},"CMakeLists.txt")," is placed here, a small amount of changes are required. Just remove ",(0,i.yg)("inlineCode",{parentName:"p"},"include udf")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"udf lib"),". The reason for the removal is that it has been declared in the CMake file at the ",(0,i.yg)("inlineCode",{parentName:"p"},"contrib/udf")," level."))),(0,i.yg)("h3",{id:"manual"},"manual"),(0,i.yg)("p",null,"The user manual needs to include: UDF function definition description, applicable scenarios, function syntax, how to compile UDF, how to use UDF in Doris, and use examples."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The user manual must contain both Chinese and English versions and be stored under ",(0,i.yg)("inlineCode",{parentName:"p"},"docs/zh-CN/extending-doris/contrib/udf")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"docs/en/extending-doris/contrib/udf")," respectively."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 zh-CN\n\u2502\xa0\xa0     \u2514\u2500\u2500extending-doris\n\u2502          \u2514\u2500\u2500udf\n\u2502            \u2514\u2500\u2500contrib\n\u2502              \u251c\u2500\u2500 udf-simple-manual.md\n\n")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 en\n\u2502\xa0\xa0     \u2514\u2500\u2500extending-doris\n\u2502          \u2514\u2500\u2500udf\n\u2502            \u2514\u2500\u2500contrib\n\u2502              \u251c\u2500\u2500 udf-simple-manual.md\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add the two manual files to the sidebar in Chinese and English."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'vi docs/.vuepress/sidebar/zh-CN.js\n{\n    title: "\u7528\u6237\u8d21\u732e\u7684 UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n')),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'vi docs/.vuepress/sidebar/en.js\n{\n    title: "Users contribute UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n\n')))),(0,i.yg)("h2",{id:"contribute-udf-to-the-community"},"Contribute UDF to the community"),(0,i.yg)("p",null,"When you meet the conditions and prepare the code, you can contribute UDF to the Doris community after the document. Simply submit the request (PR) on ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris"},"Github"),". See the specific submission method: ",(0,i.yg)("a",{parentName:"p",href:"https://help.github.com/articles/about-pull-requests/"},"Pull Request (PR)"),"."),(0,i.yg)("p",null,"Finally, when the PR assessment is passed and merged. Congratulations, your UDF becomes a third-party UDF supported by Doris. You can check it out in the ecological expansion section of ",(0,i.yg)("a",{parentName:"p",href:"/"},"Doris official website"),"~."))}p.isMDXComponent=!0}}]);