"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96009],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),y=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=y(e.components);return r.createElement(o.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=y(t),d=a,g=s["".concat(o,".").concat(d)]||s[d]||p[d]||i;return t?r.createElement(g,u(u({ref:n},c),{},{components:t})):r.createElement(g,u({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,u=new Array(i);u[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[s]="string"==typeof e?e:a,u[1]=l;for(var y=2;y<i;y++)u[y]=t[y];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},822921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>y});var r=t(58168),a=(t(296540),t(15680));const i={title:"Kyuubi",language:"zh-CN"},u=void 0,l={unversionedId:"ecosystem/kyuubi",id:"ecosystem/kyuubi",title:"Kyuubi",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/kyuubi.md",sourceDirName:"ecosystem",slug:"/ecosystem/kyuubi",permalink:"/zh-CN/docs/dev/ecosystem/kyuubi",draft:!1,tags:[],version:"current",frontMatter:{title:"Kyuubi",language:"zh-CN"},sidebar:"docs",previous:{title:"Seatunnel Doris Sink",permalink:"/zh-CN/docs/dev/ecosystem/seatunnel"},next:{title:"Logstash Doris Output Plugin",permalink:"/zh-CN/docs/dev/ecosystem/logstash"}},o={},y=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u4e0b\u8f7d Apache Kyuubi",id:"\u4e0b\u8f7d-apache-kyuubi",level:2},{value:"\u914d\u7f6e\u65b9\u6cd5",id:"\u914d\u7f6e\u65b9\u6cd5",level:2},{value:"\u4e0b\u8f7d Apache Kyuubi",id:"\u4e0b\u8f7d-apache-kyuubi-1",level:3},{value:"\u914d\u7f6eDoris\u4f5c\u4e3aKyuubi\u6570\u636e\u6e90",id:"\u914d\u7f6edoris\u4f5c\u4e3akyuubi\u6570\u636e\u6e90",level:3},{value:"\u6dfb\u52a0MySQL\u9a71\u52a8",id:"\u6dfb\u52a0mysql\u9a71\u52a8",level:3},{value:"\u542f\u52a8 Kyuubi \u670d\u52a1",id:"\u542f\u52a8-kyuubi-\u670d\u52a1",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5efa\u7acb\u8fde\u63a5",id:"\u5efa\u7acb\u8fde\u63a5",level:3},{value:"\u6267\u884c\u67e5\u8be2",id:"\u6267\u884c\u67e5\u8be2",level:3}],c={toc:y},s="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u901a\u8fc7-kyuubi-\u8fde\u63a5-doris"},"\u901a\u8fc7 Kyuubi \u8fde\u63a5 Doris"),(0,a.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://kyuubi.apache.org/"},"Apache Kyuubi")," \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u548c\u591a\u79df\u6237\u7f51\u5173\uff0c\u7528\u4e8e\u5728 Lakehouse \u4e0a\u63d0\u4f9b Serverless\nSQL\uff0c\u53ef\u8fde\u63a5\u5305\u62ecSpark\u3001Flink\u3001Hive\u3001JDBC\u7b49\u5f15\u64ce\uff0c\u5e76\u5bf9\u5916\u63d0\u4f9bThrift\u3001Trino\u7b49\u63a5\u53e3\u534f\u8bae\u4f9b\u7075\u6d3b\u5bf9\u63a5\u3002\n\u5176\u4e2dApache Kyuubi\u5b9e\u73b0\u4e86JDBC Engine\u5e76\u652f\u6301Doris\u65b9\u8a00\uff0c\u5e76\u53ef\u7528\u4e8e\u5bf9\u63a5Doris\u4f5c\u4e3a\u6570\u636e\u6e90\u3002\nApache Kyuubi\u53ef\u63d0\u4f9b\u9ad8\u53ef\u7528\u3001\u670d\u52a1\u53d1\u73b0\u3001\u79df\u6237\u9694\u79bb\u3001\u7edf\u4e00\u8ba4\u8bc1\u3001\u751f\u547d\u5468\u671f\u7ba1\u7406\u7b49\u4e00\u7cfb\u5217\u7279\u6027\u3002"),(0,a.yg)("h2",{id:"\u4e0b\u8f7d-apache-kyuubi"},"\u4e0b\u8f7d Apache Kyuubi"),(0,a.yg)("h2",{id:"\u914d\u7f6e\u65b9\u6cd5"},"\u914d\u7f6e\u65b9\u6cd5"),(0,a.yg)("h3",{id:"\u4e0b\u8f7d-apache-kyuubi-1"},"\u4e0b\u8f7d Apache Kyuubi"),(0,a.yg)("p",null,"\u4ece\u5b98\u7f51\u4e0b\u8f7dApache Kyuubi 1.6.0\u6216\u4ee5\u4e0a\u7248\u672c\u7684\u5b89\u88c5\u5305\u540e\u89e3\u538b\u3002"),(0,a.yg)("p",null,"Apache Kyuubi \u4e0b\u8f7d\u5730\u5740\uff1a ",(0,a.yg)("a",{parentName:"p",href:"https://kyuubi.apache.org/zh/releases.html"},"https://kyuubi.apache.org/zh/releases.html")),(0,a.yg)("h3",{id:"\u914d\u7f6edoris\u4f5c\u4e3akyuubi\u6570\u636e\u6e90"},"\u914d\u7f6eDoris\u4f5c\u4e3aKyuubi\u6570\u636e\u6e90"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,a.yg)("inlineCode",{parentName:"li"},"$KYUUBI_HOME/conf/kyuubi-defaults.conf"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"kyuubi.engine.type=jdbc\nkyuubi.engine.jdbc.type=doris\nkyuubi.engine.jdbc.driver.class=com.mysql.cj.jdbc.Driver\nkyuubi.engine.jdbc.connection.url=jdbc:mysql://xxx:xxx\nkyuubi.engine.jdbc.connection.user=***\nkyuubi.engine.jdbc.connection.password=***\n")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.type"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u7c7b\u578b\u3002\u8bf7\u4f7f\u7528jdbc")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.type"),(0,a.yg)("td",{parentName:"tr",align:null},"JDBC \u670d\u52a1\u7c7b\u578b\u3002\u8fd9\u91cc\u8bf7\u6307\u5b9a\u4e3adoris")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.driver.class"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5 JDBC \u670d\u52a1\u4f7f\u7528\u7684\u9a71\u52a8\u7c7b\u540d\u3002\u8bf7\u4f7f\u7528com.mysql.cj.jdbc.Driver")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.connection.url"),(0,a.yg)("td",{parentName:"tr",align:null},"JDBC \u670d\u52a1\u8fde\u63a5\u3002\u8fd9\u91cc\u8bf7\u6307\u5b9a Doris FE \u4e0a\u7684 mysql server \u8fde\u63a5\u5730\u5740")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.connection.user"),(0,a.yg)("td",{parentName:"tr",align:null},"JDBC \u670d\u52a1\u7528\u6237\u540d")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.connection.password"),(0,a.yg)("td",{parentName:"tr",align:null},"JDBC \u670d\u52a1\u5bc6\u7801")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5176\u4ed6\u76f8\u5173\u914d\u7f6e\u53c2\u8003 ",(0,a.yg)("a",{parentName:"li",href:"https://kyuubi.readthedocs.io/en/master/deployment/settings.html"},"Apache Kyuubi\u914d\u7f6e\u8bf4\u660e")," \u3002")),(0,a.yg)("h3",{id:"\u6dfb\u52a0mysql\u9a71\u52a8"},"\u6dfb\u52a0MySQL\u9a71\u52a8"),(0,a.yg)("p",null,"\u6dfb\u52a0 Mysql JDB C\u9a71\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"mysql-connector-j-8.X.X.jar")," \u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"$KYUUBI_HOME/externals/engines/jdbc")," \u76ee\u5f55\u4e0b\u3002"),(0,a.yg)("h3",{id:"\u542f\u52a8-kyuubi-\u670d\u52a1"},"\u542f\u52a8 Kyuubi \u670d\u52a1"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"$KYUUBI_HOME/bin/kyuubi start"),"\n\u542f\u52a8\u540e\uff0cKyuubi\u9ed8\u8ba4\u76d1\u542c10009\u7aef\u53e3\u63d0\u4f9bThrift\u534f\u8bae\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u4f8b\u5b50\u5c55\u793a\u901a\u8fc7Apache Kyuubi\u7684beeline\u5de5\u5177\u7ecfThrift\u534f\u8bae\u67e5\u8be2Doris\u3002"),(0,a.yg)("h3",{id:"\u5efa\u7acb\u8fde\u63a5"},"\u5efa\u7acb\u8fde\u63a5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'$ $KYUUBI_HOME/bin/beeline -u "jdbc:hive2://xxxx:10009/"\n')),(0,a.yg)("h3",{id:"\u6267\u884c\u67e5\u8be2"},"\u6267\u884c\u67e5\u8be2"),(0,a.yg)("p",null,"\u6267\u884c\u67e5\u8be2\u8bed\u53e5 ",(0,a.yg)("inlineCode",{parentName:"p"},"select * from demo.expamle_tbl;")," \u5e76\u5f97\u5230\u7ed3\u679c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"0: jdbc:hive2://xxxx:10009/> select * from demo.example_tbl;\n\n2023-03-07 09:29:14.771 INFO org.apache.kyuubi.operation.ExecuteStatement: Processing anonymous's query[bdc59dd0-ceea-4c02-8c3a-23424323f5db]: PENDING_STATE -> RUNNING_STATE, statement:\nselect * from demo.example_tbl\n2023-03-07 09:29:14.786 INFO org.apache.kyuubi.operation.ExecuteStatement: Query[bdc59dd0-ceea-4c02-8c3a-23424323f5db] in FINISHED_STATE\n2023-03-07 09:29:14.787 INFO org.apache.kyuubi.operation.ExecuteStatement: Processing anonymous's query[bdc59dd0-ceea-4c02-8c3a-23424323f5db]: RUNNING_STATE -> FINISHED_STATE, time taken: 0.015 seconds\n+----------+-------------+-------+------+------+------------------------+-------+-----------------+-----------------+\n| user_id  |    date     | city  | age  | sex  |    last_visit_date     | cost  | max_dwell_time  | min_dwell_time  |\n+----------+-------------+-------+------+------+------------------------+-------+-----------------+-----------------+\n| 10000    | 2017-10-01  | \u5317\u4eac   | 20   | 0    | 2017-10-01 07:00:00.0  | 70    | 10              | 2               |\n| 10001    | 2017-10-01  | \u5317\u4eac   | 30   | 1    | 2017-10-01 17:05:45.0  | 4     | 22              | 22              |\n| 10002    | 2017-10-02  | \u4e0a\u6d77   | 20   | 1    | 2017-10-02 12:59:12.0  | 400   | 5               | 5               |\n| 10003    | 2017-10-02  | \u5e7f\u5dde   | 32   | 0    | 2017-10-02 11:20:00.0  | 60    | 11              | 11              |\n| 10004    | 2017-10-01  | \u6df1\u5733   | 35   | 0    | 2017-10-01 10:00:15.0  | 200   | 3               | 3               |\n| 10004    | 2017-10-03  | \u6df1\u5733   | 35   | 0    | 2017-10-03 10:20:22.0  | 22    | 6               | 6               |\n+----------+-------------+-------+------+------+------------------------+-------+-----------------+-----------------+\n6 rows selected (0.068 seconds)\n")))}p.isMDXComponent=!0}}]);