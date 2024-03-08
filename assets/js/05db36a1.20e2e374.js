"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56545],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,y=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},73169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const o={title:"Apache Superset Integrate",language:"en"},i=void 0,s={unversionedId:"ecosystem/bi-integration/apache-superset",id:"version-2.1/ecosystem/bi-integration/apache-superset",title:"Apache Superset Integrate",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/ecosystem/bi-integration/apache-superset.md",sourceDirName:"ecosystem/bi-integration",slug:"/ecosystem/bi-integration/apache-superset",permalink:"/docs/ecosystem/bi-integration/apache-superset",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Apache Superset Integrate",language:"en"},sidebar:"docs",previous:{title:"DBT Doris Adapter",permalink:"/docs/ecosystem/dbt-doris-adapter"},next:{title:"Contribute UDF",permalink:"/docs/ecosystem/udf/contribute-udf"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Add data source",id:"add-data-source",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Apache Superset is an open-source data exploration platform. It supports a rich variety of data source connections and numerous visualization methods. It also enables fine-grained access control for users. The main features of this tool include self-service analysis, customizable dashboards, visualization of analytical results (with export functionality), and user/role permission control. Moreover, it integrates an SQL editor for conducting SQL editing and queries."),(0,a.yg)("p",null,"In Apache Superset version 3.1 official support has been introduced for querying and visualizing both internal and external data from Apache Doris."),(0,a.yg)("h2",{id:"preconditions"},"Preconditions"),(0,a.yg)("p",null,"Ensure you have completed the following tool installations:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Install the Python client for Apache Doris on the Apache Superset server.\npip install pydoris"),(0,a.yg)("li",{parentName:"ol"},"Install Apache Superset version 3.1 or above. For detailed instructions, refer to ",(0,a.yg)("a",{parentName:"li",href:"https://superset.apache.org/docs/installation/installing-superset-from-pypi/"},"Installing Superset from PyPI")," or ",(0,a.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/superset"},"Installing Superset Locally Using Docker Compose"),".")),(0,a.yg)("h2",{id:"add-data-source"},"Add data source"),(0,a.yg)("p",null,"When creating a data source in Apache Superset, please pay attention to the following two points:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Choose Apache Doris as the data source in SUPPORTED DATABASES.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"In the SQLALCHEMY URI, fill in the URI following the Doris SQLAlchemy URI format as shown below."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"doris://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"URI parameters are explained as follows:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"User: The username for logging into the Doris cluster, e.g., admin."),(0,a.yg)("li",{parentName:"ul"},"Password: The password for logging into the Doris cluster."),(0,a.yg)("li",{parentName:"ul"},"Host: The IP address of the FE (Frontend) host in the Doris cluster."),(0,a.yg)("li",{parentName:"ul"},"Port: The query port of the FE in the Doris cluster, e.g. 9030."),(0,a.yg)("li",{parentName:"ul"},"Catalog: The target Catalog in the Doris cluster. Both Internal Catalog and External Catalog are supported."),(0,a.yg)("li",{parentName:"ul"},"Database: The target database in the Doris cluster. Both internal and external databases are supported.")))),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},"When deploying Superset using the latest Docker image, if you encounter the issue of not finding the Apache Doris data source, it may be because the default ",(0,a.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/superset"},"Superset Docker image")," includes only basic data source builds. You need to manually install the pydoris package. You can refer to the 'How to extend this image' section in the Superset Docker tutorial for the deployment steps of Superset."),(0,a.yg)("li",{parentName:"ol"},"It is recommended to use Apache Doris 2.0.4 and above."))))}d.isMDXComponent=!0}}]);