"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[99026],{60395:(e,a,r)=>{r.d(a,{Z:()=>l});var t=r(39960),o=r(95999),n=r(67294);function s(){return n.createElement("svg",{width:"1rem",height:"1rem",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{clipPath:"url(#clip0_424_3506)"},n.createElement("path",{d:"M13.0662 7.23986C13.1278 7.17546 13.1628 7.08866 13.1628 6.99906C13.1628 6.90946 13.1278 6.82266 13.0662 6.75826M13.0662 6.75686L6.85865 0.274863C6.58565 -0.0107372 6.13205 0.00746314 5.86044 0.291663C5.58884 0.575863 5.58745 1.03506 5.85905 1.31926L11.291 6.99766L5.85905 12.6747C5.58605 12.9603 5.58885 13.4195 5.86045 13.7023C6.13065 13.9879 6.58565 14.0061 6.85725 13.7205L13.0648 7.23846L13.0648 6.75686L13.0662 6.75686Z",fill:"currentColor"}),n.createElement("path",{d:"M8.24886 7.24361C8.31046 7.17921 8.34406 7.09241 8.34406 7.00281C8.34406 6.91321 8.30906 6.82641 8.24886 6.76201M8.24886 6.76061L2.04126 0.278611C1.76826 -0.00698851 1.31466 0.011211 1.04306 0.295411C0.771462 0.579611 0.770062 1.03881 1.04166 1.32301L6.47366 7.00141L1.04166 12.6798C0.768663 12.9654 0.771463 13.4246 1.04306 13.7074C1.31466 13.9916 1.76966 14.0098 2.04126 13.7242L8.24886 7.24221L8.24886 6.76061V6.76061Z",fill:"currentColor"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_424_3506"},n.createElement("rect",{width:"14",height:"14",fill:"currentColor",transform:"translate(0 14) rotate(-90)"}))))}function l(e){const{link:a,text:r=n.createElement(o.Z,{id:"learnmore"},"Learn More")}=e;return n.createElement("div",{className:"more"},n.createElement(t.Z,{to:a},r,n.createElement(s,null)))}},41800:(e,a,r)=>{r.d(a,{Z:()=>n});var t=r(86010),o=r(67294);function n(e){const{align:a="center",title:r,footer:n,children:s,subTitle:l}=e;return o.createElement("div",{className:(0,t.Z)("page-column",a,n&&"has-footer")},o.createElement("h1",{className:"page-column-title"},o.createElement("div",{className:"container"},r)),l&&o.createElement("p",{className:"sub-title"},o.createElement("div",{className:"container"},l)),o.createElement("div",{className:"page-column-container"},o.createElement("div",{className:"container",style:e.style},s)),n&&o.createElement("div",{className:"page-column-footer"},n))}},99942:(e,a,r)=>{r.r(a),r.d(a,{default:()=>C});var t=r(86010),o=r(74464),n=r(4824),s=r(39960),l=r(60395),i=r(41800),c=r(67294),d=r(95999),h=r(52263);const p="https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=",m="https://downloads.apache.org/",u="https://mirrors.tuna.tsinghua.edu.cn/apache/",g="https://dist.apache.org/repos/dist/release/",v=u,b="https://dist.apache.org/repos/dist/release/",E=u,w="https://archive.apache.org/dist/",x="https://archive.apache.org/dist/",z="https://apache-doris-releases.oss-accelerate.aliyuncs.com/",f="https://archive.apache.org/dist/";function k(e){const a="EN"===e.toLocaleUpperCase()?p:u;e.toLocaleUpperCase();return[{id:"2.0.2-intel-avx2-jdk8",sh:{label:"apache-doris-2.0.2-bin-x64.tar.gz",links:{source:`${z}apache-doris-2.0.2-bin-x64.tar.gz`,signature:`${z}apache-doris-2.0.2-bin-x64.tar.gz.asc`,sha512:`${z}apache-doris-2.0.2-bin-x64.tar.gz.sha512`}},items:[{label:"apache-doris-2.0.2-src.tar.gz",links:{source:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz",signature:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz.asc",sha512:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz.sha512"}}]},{id:"2.0.2-intel-noavx2-jdk8",sh:{label:"apache-doris-2.0.2-bin-x64-noavx2.tar.gz",links:{source:`${z}apache-doris-2.0.2-bin-x64-noavx2.tar.gz`,signature:`${z}apache-doris-2.0.2-bin-x64-noavx2.tar.gz.asc`,sha512:`${z}apache-doris-2.0.2-bin-x64-noavx2.tar.gz.sha512`}},items:[{label:"apache-doris-2.0.2-src.tar.gz",links:{source:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz",signature:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz.asc",sha512:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz.sha512"}}]},{id:"2.0.2-arm-jdk8",sh:{label:"apache-doris-2.0.2-bin-arm64.tar.gz",links:{source:`${z}apache-doris-2.0.2-bin-arm64.tar.gz`,signature:`${z}apache-doris-2.0.2-bin-arm64.tar.gz.asc`,sha512:`${z}apache-doris-2.0.2-bin-arm64.tar.gz.sha512`}},items:[{label:"apache-doris-2.0.2-src.tar.gz",links:{source:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz",signature:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz.asc",sha512:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz.sha512"}}]},{id:"2.0.1.1-intel-avx2-jdk8",sh:{label:"apache-doris-2.0.1.1-bin-x64.tar.gz",links:{source:`${z}apache-doris-2.0.1.1-bin-x64.tar.gz`,signature:`${z}apache-doris-2.0.1.1-bin-x64.tar.gz.asc`,sha512:`${z}apache-doris-2.0.1.1-bin-x64.tar.gz.sha512`}},items:[{label:"apache-doris-2.0.1.1-src.tar.gz",links:{source:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz",signature:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz.asc",sha512:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz.sha512"}}]},{id:"2.0.1.1-intel-noavx2-jdk8",sh:{label:"apache-doris-2.0.1.1-bin-x64-noavx2.tar.gz",links:{source:`${z}apache-doris-2.0.1.1-bin-x64-noavx2.tar.gz`,signature:`${z}apache-doris-2.0.1.1-bin-x64-noavx2.tar.gz.asc`,sha512:`${z}apache-doris-2.0.1.1-bin-x64-noavx2.tar.gz.sha512`}},items:[{label:"apache-doris-2.0.1.1-src.tar.gz",links:{source:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz",signature:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz.asc",sha512:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz.sha512"}}]},{id:"2.0.1.1-arm-jdk8",sh:{label:"apache-doris-2.0.1.1-bin-arm64.tar.gz",links:{source:`${z}apache-doris-2.0.1.1-bin-arm64.tar.gz`,signature:`${z}apache-doris-2.0.1.1-bin-arm64.tar.gz.asc`,sha512:`${z}apache-doris-2.0.1.1-bin-arm64.tar.gz.sha512`}},items:[{label:"apache-doris-2.0.1.1-src.tar.gz",links:{source:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz",signature:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz.asc",sha512:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz.sha512"}}]},{id:"1.2.7.1-intel-avx2-jdk8",sh:{label:"apache-doris-1.2.7.1-bin-x64.tar.xz",links:{source:`${z}apache-doris-1.2.7.1-bin-x64.tar.xz`,signature:`${z}apache-doris-1.2.7.1-bin-x64.tar.xz.asc`,sha512:`${z}apache-doris-1.2.7.1-bin-x64.tar.xz.sha512`}},items:[{label:"apache-doris-1.2.7.1-src.tar.gz",links:{source:`${f}doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz`,signature:`${m}doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz.asc`,sha512:`${m}doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz.sha512`}}]},{id:"1.2.7.1-intel-noavx2-jdk8",sh:{label:"apache-doris-1.2.7.1-bin-x64-noavx2.tar.xz",links:{source:`${z}apache-doris-1.2.7.1-bin-x64-noavx2.tar.xz`,signature:`${z}apache-doris-1.2.7.1-bin-x64-noavx2.tar.xz.asc`,sha512:`${z}apache-doris-1.2.7.1-bin-x64-noavx2.tar.xz.sha512`}},items:[{label:"apache-doris-1.2.7.1-src.tar.gz",links:{source:`${f}doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz`,signature:`${m}doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz.asc`,sha512:`${m}doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz.sha512`}}]},{id:"1.2.7.1-arm-jdk8",sh:{label:"apache-doris-1.2.7.1-bin-arm64.tar.xz",links:{source:`${z}apache-doris-1.2.7.1-bin-arm64.tar.xz`,signature:`${z}apache-doris-1.2.7.1-bin-arm64.tar.xz.asc`,sha512:`${z}apache-doris-1.2.7.1-bin-arm64.tar.xz.sha512`}},items:[{label:"apache-doris-1.2.7.1-src.tar.gz",links:{source:`${f}doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz`,signature:`${m}doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz.asc`,sha512:`${m}doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz.sha512`}}]},{id:"1.1.5-intel-avx2-jdk8",items:[{label:"apache-doris-fe-1.1.5-bin.tar.gz",links:{source:`${a}doris/1.1/1.1.5-rc02/apache-doris-fe-1.1.5-bin.tar.gz`,signature:`${m}doris/1.1/1.1.5-rc02/apache-doris-fe-1.1.5-bin.tar.gz.asc`,sha512:`${m}doris/1.1/1.1.5-rc02/apache-doris-fe-1.1.5-bin.tar.gz.sha512`}},{label:"apache-doris-be-1.1.5-bin-x86_64.tar.gz",links:{source:`${a}doris/1.1/1.1.5-rc02/apache-doris-be-1.1.5-bin-x86_64.tar.gz`,signature:`${m}doris/1.1/1.1.5-rc02/apache-doris-be-1.1.5-bin-x86_64.tar.gz.asc`,sha512:`${m}doris/1.1/1.1.5-rc02/apache-doris-be-1.1.5-bin-x86_64.tar.gz.sha512`}}]},{id:"1.1.5-intel-noavx2-jdk8",items:[{label:"apache-doris-fe-1.1.5-bin.tar.gz",links:{source:`${a}doris/1.1/1.1.5-rc02/apache-doris-fe-1.1.5-bin.tar.gz`,signature:`${m}doris/1.1/1.1.5-rc02/apache-doris-fe-1.1.5-bin.tar.gz.asc`,sha512:`${m}doris/1.1/1.1.5-rc02/apache-doris-fe-1.1.5-bin.tar.gz.sha512`}},{label:"apache-doris-be-1.1.5-bin-x86_64-noavx2.tar.gz",links:{source:`${a}doris/1.1/1.1.5-rc02/apache-doris-be-1.1.5-bin-x86_64-noavx2.tar.gz`,signature:`${m}doris/1.1/1.1.5-rc02/apache-doris-be-1.1.5-bin-x86_64-noavx2.tar.gz.asc`,sha512:`${m}doris/1.1/1.1.5-rc02/apache-doris-be-1.1.5-bin-x86_64-noavx2.tar.gz.sha512`}}]},{id:"1.1.5-arm-jdk8",items:[{label:"apache-doris-fe-1.1.5-bin.tar.gz",links:{source:`${a}doris/1.1/1.1.5-rc02/apache-doris-fe-1.1.5-bin.tar.gz`,signature:`${m}doris/1.1/1.1.5-rc02/apache-doris-fe-1.1.5-bin.tar.gz.asc`,sha512:`${m}doris/1.1/1.1.5-rc02/apache-doris-fe-1.1.5-bin.tar.gz.sha512`}},{label:"apache-doris-1.1.5-bin-arm.tar.gz ",links:{source:`${a}doris/1.1/1.1.5-rc02/apache-doris-be-1.1.5-bin-arm.tar.gz`,signature:`${m}doris/1.1/1.1.5-rc02/apache-doris-be-1.1.5-bin-arm.tar.gz.asc`,sha512:`${m}doris/1.1/1.1.5-rc02/apache-doris-be-1.1.5-bin-arm.tar.gz.sha512`}}]}]}let $=function(e){return e.Latest="2.0.2",e.Prev="1.2.7.1",e.Earlier="1.1.5",e}({}),Z=function(e){return e.IntelAvx2="intel-avx2",e.IntelNoAvx2="intel-noavx2",e.ARM="arm",e}({}),y=function(e){return e.JDK8="jdk8",e.JDK11="jdk11",e}({});const N=[{label:`${$.Latest} ( Latest )`,value:$.Latest},{label:`${$.Prev} ( Stable )`,value:$.Prev},{label:`${$.Earlier} ( Stable )`,value:$.Earlier}];y.JDK8,y.JDK11;function C(){const{siteConfig:e,i18n:{currentLocale:a,locales:r,localeConfigs:p}}=(0,h.Z)(),[m,u]=(0,c.useState)($.Latest),[f,C]=(0,c.useState)([]),[I,D]=(0,c.useState)(Z.IntelAvx2),[L,A]=(0,c.useState)(y.JDK8),[_,M]=(0,c.useState)(),[S,R]=(0,c.useState)("all-in-one"),V=function(e){const a="EN"===e.toLocaleUpperCase()?g:v;return[{version:"1.4.0",date:"2023-06-16",flink:"1.17",scala:"2.12, 2.11",doris:"1.0+",download:`${a}doris/flink-connector/1.4.0/`,github:"https://github.com/apache/doris-flink-connector"},{version:"1.3.0",date:"2022-12-07",flink:"1.16",scala:"2.12, 2.11",doris:"1.0+",download:`${a}doris/flink-connector/1.3.0/`,github:"https://github.com/apache/doris-flink-connector"},{version:"1.2.1",date:"2022-12-07",flink:"1.15",scala:"2.12, 2.11",doris:"1.0+",download:`${a}doris/flink-connector/1.2.1/`,github:"https://github.com/apache/doris-flink-connector"},{version:"1.1.1",date:"2021-12-07",flink:"1.14",scala:"2.12, 2.11",doris:"1.0+",download:`${a}doris/flink-connector/1.1.1/`,github:"https://github.com/apache/doris-flink-connector"},{version:"1.2.0",date:"2022-08-15",flink:"1.15",scala:"2.12, 2.11",doris:"1.0+",download:`${a}doris/flink-connector/1.2.0/`,github:"https://github.com/apache/doris-flink-connector"},{version:"1.1.0",date:"2022-07-11",flink:"1.14",scala:"2.12, 2.11",doris:"0.15+",download:`${a}doris/flink-connector/1.1.0/`,github:"https://github.com/apache/doris-flink-connector"},{version:"1.0.3",date:"2021-03-18",flink:"1.14, 1.13, 1.12, 1.11",scala:"2.12, 2.11",doris:"0.15+",download:`${a}doris/flink-connector/1.0.3/`,github:"https://github.com/apache/doris-flink-connector"}]}(a),X=function(e){const a="EN"===e.toLocaleUpperCase()?b:E;return[{version:"1.1.0",date:"2022-07-11",spark:"3.2, 3.1, 2.3",scala:"2.12, 2.11",doris:"0.15+",download:`${a}doris/spark-connector/1.1.0/`,github:"https://github.com/apache/doris-spark-connector"},{version:"1.0.1",date:"2021-03-18",spark:"3.1, 2.3",scala:"2.12, 2.11",doris:"0.15+",download:`${a}doris/spark-connector/1.0.1/`,github:"https://github.com/apache/doris-spark-connector"}]}(a),j=function(e){const a="EN"===e.toLocaleUpperCase()?w:x;return[{version:"2.0.2 ( Latest )",date:"2023-10-07",note:"https://github.com/apache/doris/issues/25011",download:[{cpu:"X64 ( avx2 )",binary:`${z}apache-doris-2.0.2-bin-x64.tar.gz`,source:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz"},{cpu:"X64 ( no avx2 )",binary:`${z}apache-doris-2.0.2-bin-x64-noavx2.tar.gz`,source:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz"},{cpu:"ARM64",binary:`${z}apache-doris-2.0.2-bin-arm64.tar.gz`,source:"https://downloads.apache.org/doris/2.0/2.0.2/apache-doris-2.0.2-src.tar.gz"}]},{version:"2.0.1.1",date:"2023-09-26",note:"/docs/dev/releasenotes/release-2.0.1",download:[{cpu:"X64 ( avx2 )",binary:`${z}apache-doris-2.0.1.1-bin-x64.tar.gz`,source:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz"},{cpu:"X64 ( no avx2 )",binary:`${z}apache-doris-2.0.1.1-bin-x64-noavx2.tar.gz`,source:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz"},{cpu:"ARM64",binary:`${z}apache-doris-2.0.1.1-bin-arm64.tar.gz`,source:"https://downloads.apache.org/doris/2.0/2.0.1.1/apache-doris-2.0.1.1-src.tar.gz"}]},{version:"2.0.0",date:"2023-08-11",note:"/docs/dev/releasenotes/release-2.0.1",download:[{cpu:"X64 ( avx2 )",binary:`${z}apache-doris-2.0.0-bin-x64.tar.gz`,source:"https://downloads.apache.org/doris/2.0/2.0.1/apache-doris-2.0.0-src.tar.gz"},{cpu:"X64 ( no avx2 )",binary:`${z}apache-doris-2.0.0-bin-x64-noavx2.tar.gz`,source:"https://downloads.apache.org/doris/2.0/2.0.0/apache-doris-2.0.0-src.tar.gz"},{cpu:"ARM64",binary:`${z}apache-doris-2.0.0-bin-arm64.tar.gz`,source:"https://downloads.apache.org/doris/2.0/2.0.0/apache-doris-2.0.0-src.tar.gz"}]},{version:"1.2.7.1",date:"2023-09-04",note:"/docs/dev/releasenotes/release-1.2.7.1",download:[{cpu:"X64 ( avx2 )",binary:`${z}apache-doris-1.2.7.1-bin-x64.tar.xz`,source:"https://downloads.apache.org/doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz"},{cpu:"X64 ( no avx2 )",binary:`${z}apache-doris-1.2.7.1-bin-x64-noavx2.tar.xz`,source:"https://downloads.apache.org/doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz"},{cpu:"ARM64",binary:`${z}apache-doris-1.2.7.1-bin-arm64.tar.xz`,source:"https://downloads.apache.org/doris/1.2/1.2.7.1/apache-doris-1.2.7.1-src.tar.gz"}]},{version:"1.2.6",date:"2023-07-17",note:"/docs/dev/releasenotes/release-1.2.6",download:[{cpu:"X64 ( avx2 )",binary:`${z}apache-doris-1.2.6-bin-x64.tar.xz`,source:"https://downloads.apache.org/doris/1.2/1.2.6-rc03/apache-doris-1.2.6-src.tar.gz"},{cpu:"X64 ( no avx2 )",binary:`${z}apache-doris-1.2.6-bin-x64-noavx2.tar.xz`,source:"https://downloads.apache.org/doris/1.2/1.2.6-rc03/apache-doris-1.2.6-src.tar.gz"},{cpu:"ARM64",binary:`${z}apache-doris-1.2.6-bin-arm64.tar.xz`,source:"https://downloads.apache.org/doris/1.2/1.2.6-rc03/apache-doris-1.2.6-src.tar.gz"}]},{version:"1.2.4",date:"2023-04-27",note:"/docs/dev/releasenotes/release-1.2.4",download:[{cpu:"X64 ( avx2 )",binary:`${z}apache-doris-1.2.4.1-bin-x86_64.tar.xz`,source:`${a}doris/1.2/1.2.4.1-rc01/apache-doris-1.2.4.1-src.tar.gz`},{cpu:"X64 ( no avx2 )",binary:`${z}apache-doris-1.2.4.1-bin-x86_64-noavx2.tar.xz`,source:`${a}doris/1.2/1.2.4.1-rc01/apache-doris-1.2.4.1-src.tar.gz`},{cpu:"ARM64",binary:`${z}apache-doris-1.2.4.1-bin-aarch64.tar.xz`,source:`${a}doris/1.2/1.2.4.1-rc01/apache-doris-1.2.4.1-src.tar.gz`}]},{version:"1.2.3",date:"2023-03-20",note:"/docs/dev/releasenotes/release-1.2.3",download:`${a}doris/1.2/1.2.3-rc02/`},{version:"1.2.2 ",date:"2023-02-14",note:"/docs/dev/releasenotes/release-1.2.2",download:`${a}doris/1.2/1.2.2-rc01/`},{version:"1.2.1",date:"2023-01-04",note:"/docs/dev/releasenotes/release-1.2.1",download:`${a}doris/1.2/1.2.1-rc01/`},{version:"1.1.5",date:"2022-12-20",note:"/docs/dev/releasenotes/release-1.1.5",download:`${a}doris/1.1/1.1.5-rc02/`},{version:"1.1.4",date:"2022-11-11",note:"/docs/dev/releasenotes/release-1.1.4",download:`${a}doris/1.1/1.1.4-rc01/`},{version:"1.1.3",date:"2022-10-17",note:"/docs/dev/releasenotes/release-1.1.3",download:`${a}doris/1.1/1.1.3-rc02/`},{version:"1.1.2",date:"2022-09-13",note:"/docs/dev/releasenotes/release-1.1.2",download:`${a}doris/1.1/1.1.2-rc05/`},{version:"1.1.1",date:"2022-07-29",note:"/docs/dev/releasenotes/release-1.1.1",download:`${a}doris/1.1/1.1.1/`},{version:"1.1.0",date:"2022-07-14",note:"/docs/dev/releasenotes/release-1.1.0",download:`${a}doris/1.1/1.1.0-rc05/`},{version:"0.15.0",date:"2021-11-29",note:"https://github.com/apache/doris/issues/6806",download:`${a}doris/0.15.0-incubating/`},{version:"0.14.0",date:"2021-05-26",note:"https://github.com/apache/doris/issues/5374",download:`${a}doris/0.14.0-incubating/`},{version:"0.13.0",date:"2020-10-24",note:"https://github.com/apache/doris/issues/4370",download:`${a}doris/0.13.0-incubating/`}]}(a);let U={};j.forEach((e=>{const a=Array.isArray(e.download)?e.download.find((e=>"X64 ( avx2 )"===e.cpu)):{};U[e.version]={cpu:Z.IntelAvx2,binary:a.binary,source:a.source}}));const[K,P]=(0,c.useState)(U);const J=[{label:"X64 ( avx2 )",value:Z.IntelAvx2},{label:"X64 ( no avx2 )",value:Z.IntelNoAvx2},{label:"ARM64",value:Z.ARM}];return(0,c.useEffect)((()=>{(()=>{const e=`${m}-${I}-${L}`,r=k(a).find((a=>a.id===e));M(r),r&&!r.sh&&R("download")})()}),[m,I,L]),(0,c.useEffect)((()=>{const e=(e=>{const r=[];return k(a).forEach((a=>{if(a.id.includes(e)){const e=J.find((e=>a.id.includes(e.value)));r.push(e)}})),r})(m);C(e),D(Z.IntelAvx2),A(y.JDK8)}),[m]),c.createElement(n.Z,{title:(0,d.I)({id:"download.title",message:"Download"}),description:(0,d.I)({id:"homepage.banner.subTitle",message:"An easy-to-use, high-performance and unified analytical database"}),wrapperClassName:"download"},c.createElement("section",{className:"quick-download"},c.createElement(i.Z,{align:"left",title:c.createElement(d.Z,{id:"download.quick.download",description:"Quick Download"},"Quick Download")},c.createElement("div",{className:"download-box"},c.createElement("div",{className:"download-type"},c.createElement("label",null,c.createElement(d.Z,{id:"download.version",description:"Binary Version"},"Version")),c.createElement("div",{className:"tabs-radio"},N.map((e=>c.createElement("div",{className:(0,t.Z)("radio",{checked:m===e.value}),key:e.value,onClick:()=>{return a=e.value,void u(a);var a}},e.label))))),c.createElement("div",{className:"download-type"},c.createElement("label",null,c.createElement(d.Z,{id:"download.cpu.model",description:"CPU Model"},"CPU Model")),c.createElement("div",{className:"tabs-radio"},f.map((e=>c.createElement("div",{className:(0,t.Z)("radio",{checked:I===e.value}),key:e.value,onClick:()=>{return a=e.value,void D(a);var a}},e.label))))),_&&_?.sh&&c.createElement("div",{className:"download-type"},c.createElement("label",null,c.createElement(d.Z,{id:"download.download.link",description:"Download"},"Download")),c.createElement("div",{className:"tabs-radio"},c.createElement("div",{onClick:()=>R("all-in-one"),className:(0,t.Z)("radio",{checked:"all-in-one"===S})},c.createElement("span",null,"zh-CN"===a?"\u4e8c\u8fdb\u5236":"Binary")),c.createElement("div",{onClick:()=>R("download"),className:(0,t.Z)("radio",{checked:"download"===S})},c.createElement("span",null,"zh-CN"===a?"\u6e90\u7801":"Source")))),c.createElement("div",{className:"download-type way"},c.createElement("label",null,!_?.sh&&c.createElement(d.Z,{id:"download.download.link",description:"Download"},"Download")),c.createElement("div",{className:(0,t.Z)("download-way all-in-one",{show:"all-in-one"===S})},_&&_.sh&&c.createElement("div",{className:"tabs-radio"},c.createElement("div",{className:"radio"},c.createElement("div",{className:"inner",key:_.sh?.label},c.createElement(s.Z,{to:_.sh?.links.source},_.sh?.label),c.createElement("span",null," ( "),c.createElement(s.Z,{to:_.sh?.links.signature},"asc"),","," ",c.createElement(s.Z,{to:_.sh?.links.sha512},"sha512"),c.createElement("span",null," )")))),m===$.Latest&&c.createElement("div",{className:"tips"},c.createElement("div",{className:"title"},c.createElement(d.Z,{id:"Notice"},"Notice"),"zh-CN"===a?"\uff1a":":"),"zh-CN"===a?c.createElement("div",{className:"notice-text"},"\u8be6\u7ec6\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879\u8bf7\u53c2\u8003",c.createElement(s.Z,{to:"https://github.com/apache/doris/issues/25011"},"2.0.2 Release Note"),"\u4ee5\u53ca",c.createElement(s.Z,{to:"/docs/dev/install/standard-deployment"},c.createElement(d.Z,{id:"Installation and deployment"},"Installation and deployment")),"\u4ee5\u53ca",c.createElement(s.Z,{to:"/docs/dev/admin-manual/cluster-management/upgrade"},c.createElement(d.Z,{id:"Cluster Upgrade"},"Cluster Upgrade")),"\u624b\u518c\u3002"):c.createElement("div",{className:"notice-text"},"For detailed upgrade precautions, please refer to the"," ",c.createElement(s.Z,{to:"https://github.com/apache/doris/issues/25011"},"2.0.2"),"and the",c.createElement(s.Z,{to:"/docs/dev/install/standard-deployment"},"deployment")," and cluster",c.createElement(s.Z,{to:"/docs/dev/admin-manual/cluster-management/upgrade"},"upgrade"),"manual."))),c.createElement("div",{className:(0,t.Z)("download-way",{show:"download"===S})},c.createElement("div",{className:"tabs-radio"},c.createElement("div",{className:"radio"},_?.items.map((e=>c.createElement("div",{className:"inner",key:e.label},c.createElement(s.Z,{to:e?.links.source},e?.label),c.createElement("span",null," ( "),c.createElement(s.Z,{to:e?.links.signature},"asc"),","," ",c.createElement(s.Z,{to:e?.links.sha512},"sha512"),c.createElement("span",null," )"))))))))))),c.createElement("section",{className:"table-content"},c.createElement(i.Z,{align:"left",title:c.createElement(d.Z,{id:"download.release"},"All Releases"),footer:c.createElement(l.Z,{text:c.createElement(d.Z,{id:"download.release.more"},"More"),link:"https://archive.apache.org/dist/doris/"})},c.createElement("div",{className:"content"},c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,c.createElement(d.Z,{id:"download.all.release.version"},"Version")),c.createElement("th",null,c.createElement(d.Z,{id:"download.all.release.date"},"Release Date")),c.createElement("th",null,c.createElement(d.Z,{id:"download.cpu.model"},"CPU Model")),c.createElement("th",null,c.createElement(d.Z,{id:"download.all.release.download"},"Download")),c.createElement("th",null,c.createElement(d.Z,{id:"download.all.release.note"},"Release Notes")))),c.createElement("tbody",null,j.map(((e,a)=>c.createElement("tr",{key:a},c.createElement("td",null,e.version),c.createElement("td",null,e.date),c.createElement("td",null,Array.isArray(e.download)?c.createElement("select",{style:{height:30},onChange:a=>function(e,a){const r=a.download.find((a=>a.cpu===e));P({...K,[a.version]:{binary:r.binary,source:r.source}})}(a.target.value,e)},e.download.map((e=>c.createElement("option",{key:e.cpu,value:e.cpu},e.cpu)))):c.createElement(c.Fragment,null)),c.createElement("td",null,Array.isArray(e.download)?c.createElement("div",null,c.createElement(s.Z,{to:K[e.version].source},c.createElement(d.Z,{id:"download.source"},"Source")),c.createElement("span",{style:{padding:"0 0.28rem"}},"/"),c.createElement(s.Z,{to:K[e.version].binary},c.createElement(d.Z,{id:"download.all.binary"},"Binary"))):c.createElement(s.Z,{to:e.download},c.createElement(d.Z,{id:"download.source.binary"},"Source / Binary"))),c.createElement("td",null,c.createElement(s.Z,{to:e.note},"Release Notes")))))))))),c.createElement("section",{className:"table-content"},c.createElement(i.Z,{align:"left",title:c.createElement(d.Z,{id:"download.flink.connector",description:"Flink Doris Connector"},"Flink Doris Connector")},c.createElement("div",{className:"content"},c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,c.createElement(d.Z,{id:"download.flink.connector.version"},"Version")),c.createElement("th",null,c.createElement(d.Z,{id:"download.flink.release.date"},"Release Date")),c.createElement("th",null,c.createElement(d.Z,{id:"download.flink.version"},"Flink Version")),c.createElement("th",null,c.createElement(d.Z,{id:"download.flink.scala.version"},"Scala Version")),c.createElement("th",null,c.createElement(d.Z,{id:"download.flink.doris.version"},"Doris Version")),c.createElement("th",null,c.createElement(d.Z,{id:"download.source"},"Source")))),c.createElement("tbody",null,V.map(((e,a)=>c.createElement("tr",{key:a},c.createElement("td",null,e.version),c.createElement("td",null,e.date),c.createElement("td",null,e.flink),c.createElement("td",null,e.scala),c.createElement("td",null,e.doris),c.createElement("td",null,c.createElement(s.Z,{to:e.download},c.createElement(d.Z,{id:"download"},"Download")),c.createElement(s.Z,{to:e.github},"GitHub")))))))))),c.createElement("section",{className:"maven"},c.createElement(i.Z,{align:"left",title:c.createElement(d.Z,{id:"download.maven",description:"Maven"},"Maven")},c.createElement(o.Z,{language:"xml",title:"",showLineNumbers:!0},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>flink-doris-connector-1.14_2.12</artifactId>\n  \x3c!--artifactId>flink-doris-connector-1.13_2.12</artifactId--\x3e\n  \x3c!--artifactId>flink-doris-connector-1.12_2.12</artifactId--\x3e\n  \x3c!--artifactId>flink-doris-connector-1.11_2.12</artifactId--\x3e\n  \x3c!--version>1.0.3</version--\x3e\n  <version>1.1.0</version>\n</dependency>"))),c.createElement("section",{className:"table-content"},c.createElement(i.Z,{align:"left",title:c.createElement(d.Z,{id:"download.spark.connector",description:"Spark Doris Connector"},"Spark Doris Connector")},c.createElement("div",{className:"content"},c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,c.createElement(d.Z,{id:"download.spark.connector.version"},"Version")),c.createElement("th",null,c.createElement(d.Z,{id:"download.spark.release.date"},"Release Date")),c.createElement("th",null,c.createElement(d.Z,{id:"download.spark.version"},"Spark Version")),c.createElement("th",null,c.createElement(d.Z,{id:"download.spark.scala.version"},"Scala Version")),c.createElement("th",null,c.createElement(d.Z,{id:"download.spark.doris.version"},"Doris Version")),c.createElement("th",null,c.createElement(d.Z,{id:"download.source"},"Source")))),c.createElement("tbody",null,X.map(((e,a)=>c.createElement("tr",{key:a},c.createElement("td",null,e.version),c.createElement("td",null,e.date),c.createElement("td",null,e.spark),c.createElement("td",null,e.scala),c.createElement("td",null,e.doris),c.createElement("td",null,c.createElement(s.Z,{to:e.download},c.createElement(d.Z,{id:"download"},"Download")),c.createElement(s.Z,{to:e.github},"GitHub")))))))))),c.createElement("section",{className:"maven"},c.createElement(i.Z,{align:"left",title:c.createElement(d.Z,{id:"download.maven",description:"Maven"},"Maven")},c.createElement(o.Z,{language:"xml",title:"",showLineNumbers:!0},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>spark-doris-connector-3.2_2.12</artifactId>\n  \x3c!--artifactId>spark-doris-connector-3.1_2.12</artifactId--\x3e\n  \x3c!--artifactId>spark-doris-connector-2.3_2.11</artifactId--\x3e\n  \x3c!--version>1.0.1</version--\x3e\n  <version>1.1.0</version>\n</dependency>"))),c.createElement("section",{className:"verify"},c.createElement(i.Z,{align:"left",title:c.createElement(d.Z,{id:"download.verify",description:"Verify"},"Verify")},c.createElement(d.Z,{id:"download.verify.w1"},"To verify the downloaded files, please read"),c.createElement(s.Z,{to:"/community/release-and-verify/release-verify"},c.createElement(d.Z,{id:"download.verify.w2"}," Verify Apache Release ")),c.createElement(d.Z,{id:"download.verify.w3"}," and using these "),c.createElement(s.Z,{to:"https://downloads.apache.org/doris/KEYS"},c.createElement(d.Z,{id:"download.verify.w4"}," Keys")),c.createElement(d.Z,{id:"download.verify.w5"},". After verification, please read"),c.createElement(s.Z,{to:"/docs/install/source-install/compilation"},c.createElement(d.Z,{id:"download.verify.w6"}," Compilation ")),c.createElement(d.Z,{id:"download.verify.w7"}," and "),c.createElement(s.Z,{to:"/docs/install/install-deploy"},c.createElement(d.Z,{id:"download.verify.w8"}," Installation and Deployment ")),c.createElement(d.Z,{id:"download.verify.w9"}," to compile and install Doris."))))}}}]);