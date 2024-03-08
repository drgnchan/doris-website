"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24819],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var o=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},675796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(58168),r=(n(296540),n(15680));const a={title:"Contribute to Doris",language:"en"},i=void 0,l={unversionedId:"how-to-contribute/how-to-contribute",id:"how-to-contribute/how-to-contribute",title:"Contribute to Doris",description:"\x3c!--",source:"@site/community/how-to-contribute/how-to-contribute.md",sourceDirName:"how-to-contribute",slug:"/how-to-contribute/",permalink:"/community/how-to-contribute/",draft:!1,tags:[],version:"current",frontMatter:{title:"Contribute to Doris",language:"en"},sidebar:"community",previous:{title:"doris future project",permalink:"/community/doris-future"},next:{title:"Contributor Guide",permalink:"/community/how-to-contribute/contributor-guide"}},u={},s=[{value:"Initial contact",id:"initial-contact",level:2},{value:"Doris&#39;s code and documentation",id:"doriss-code-and-documentation",level:2},{value:"Improving documentation",id:"improving-documentation",level:2},{value:"If a Bug or problem is found",id:"if-a-bug-or-problem-is-found",level:2},{value:"Modify the code and submit PR (Pull Request)",id:"modify-the-code-and-submit-pr-pull-request",level:2}],c={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"contribute-to-doris"},"Contribute to Doris"),(0,r.yg)("p",null,"Thank you very much for your interest in the Doris project. We welcome your suggestions, comments (including criticisms) and contributions to the Doris project."),(0,r.yg)("p",null,"Your suggestions, comments and contributions on Doris can be made directly through GitHub's ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/new/choose"},"Issues"),"."),(0,r.yg)("p",null,"There are many ways to participate in and contribute to Doris projects: code implementation, test writing, process tool improvement, document improvement, and so on. Any contribution will be welcomed and you will be added to the list of contributors. Further, with sufficient contributions, you will have the opportunity to become a Committer of Apache with Apache mailbox and be included in the list of ",(0,r.yg)("a",{parentName:"p",href:"http://people.apache.org/committer-index.html"},"Apache Committers"),"."),(0,r.yg)("p",null,"Any questions, you can contact us to get timely answers, including Wechat, Gitter (GitHub instant messaging tool), e-mail and so on."),(0,r.yg)("h2",{id:"initial-contact"},"Initial contact"),(0,r.yg)("p",null,"For the first time in Doris community, you can:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Follow ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris"},"Doris Github")),(0,r.yg)("li",{parentName:"ul"},"Subscribe to our ",(0,r.yg)("a",{parentName:"li",href:"/community/subscribe-mail-list"},"mailing list"),";"),(0,r.yg)("li",{parentName:"ul"},"Join Doris Wechat Group (add WeChat-ID: morningman-cmy, note: join Doris Group) and ask questions at any time."),(0,r.yg)("li",{parentName:"ul"},"Enter Doris's ",(0,r.yg)("a",{parentName:"li",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-11jb8gesh-7IukzSrdea6mqoG0HB4gZg"},"Slack"))),(0,r.yg)("p",null,"Learn the development trends of Doris project in time and give your opinions on the topics you are concerned about."),(0,r.yg)("h2",{id:"doriss-code-and-documentation"},"Doris's code and documentation"),(0,r.yg)("p",null,"As you can see from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"GitHub"),", Apache Doris (incubating) code base mainly consists of three parts: Frontend (FE), Backend (BE) and Broker (to support file reading on external storage systems such as HDFS). Documents are mainly the wiki on Doris website and GitHub, as well as the online help manual when running Doris. Details of these components can be found in the following table:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Component Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Component Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Related Language"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris"},"Frontend daemon (FE)")),(0,r.yg)("td",{parentName:"tr",align:null},"consists of a query coordinator and a metadata manager"),(0,r.yg)("td",{parentName:"tr",align:null},"Java")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris"},"Backend daemon (BE)")),(0,r.yg)("td",{parentName:"tr",align:null},"Responsible for storing data and executing query fragments"),(0,r.yg)("td",{parentName:"tr",align:null},"C++")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris"},"Broker")),(0,r.yg)("td",{parentName:"tr",align:null},"Read HDFS data to Doris"),(0,r.yg)("td",{parentName:"tr",align:null},"Java")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris-website"},"Website")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Website"),(0,r.yg)("td",{parentName:"tr",align:null},"Markdown")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris-manager"},"Manager")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Manager"),(0,r.yg)("td",{parentName:"tr",align:null},"Java")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris-flink-connector"},"Flink-Connector")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Flink Connector"),(0,r.yg)("td",{parentName:"tr",align:null},"Java")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris-spark-connector"},"Spark-Connector")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Spark Connector"),(0,r.yg)("td",{parentName:"tr",align:null},"Java")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Doris Runtime Help Document"),(0,r.yg)("td",{parentName:"tr",align:null},"Online Help Manual at Doris Runtime"),(0,r.yg)("td",{parentName:"tr",align:null},"Markdown")))),(0,r.yg)("h2",{id:"improving-documentation"},"Improving documentation"),(0,r.yg)("p",null,"Documentation is the most important way for you to understand Apache Doris, and it's where we need help most!"),(0,r.yg)("p",null,"Browse the document, you can deepen your understanding of Doris, can also help you understand Doris's function and technical details, if you find that the document has problems, please contact us in time;"),(0,r.yg)("p",null,"If you are interested in improving the quality of documents, whether it is revising the address of a page, correcting a link, and writing a better introductory document, we are very welcome!"),(0,r.yg)("p",null,"Most of our documents are written in markdown format, and you can modify and submit document changes directly through ",(0,r.yg)("inlineCode",{parentName:"p"},"docs/")," in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"GitHub"),". If you submit code changes, you can refer to ",(0,r.yg)("a",{parentName:"p",href:"/community/how-to-contribute/pull-request"},"Pull Request"),"."),(0,r.yg)("h2",{id:"if-a-bug-or-problem-is-found"},"If a Bug or problem is found"),(0,r.yg)("p",null,"If a Bug or problem is found, you can directly raise a new Issue through GitHub's ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/new/choose"},"Issues"),", and we will have someone deal with it regularly."),(0,r.yg)("p",null,"You can also fix it yourself by reading the analysis code (of course, it's better to talk to us before that, maybe someone has fixed the same problem) and submit a ",(0,r.yg)("a",{parentName:"p",href:"/community/how-to-contribute/pull-request"},"Pull Request"),"."),(0,r.yg)("h2",{id:"modify-the-code-and-submit-pr-pull-request"},"Modify the code and submit PR (Pull Request)"),(0,r.yg)("p",null,"You can download the code, compile and install it, deploy and run it for a try (refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/install/source-install/compilation-general"},"compilation document")," to see if it works as you expected. If you have problems, you can contact us directly, ask questions or fix them by reading and analyzing the source code."),(0,r.yg)("p",null,"Whether it's fixing Bugs or adding Features, we're all very welcome. If you want to submit code to Doris, you need to create a new branch for your submitted code from the fork code library on GitHub to your project space, add the source project upstream, and submit PR."),(0,r.yg)("p",null,"About how to submit a PR refer to ",(0,r.yg)("a",{parentName:"p",href:"/community/how-to-contribute/pull-request"},"Pull Request"),"."))}p.isMDXComponent=!0}}]);