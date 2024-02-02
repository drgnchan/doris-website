"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4104],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>m});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(45072),a=(t(11504),t(95788));const i={title:"DIGITAL_MASKING",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/digital-masking",id:"version-2.0/sql-manual/sql-functions/digital-masking",title:"DIGITAL_MASKING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/digital-masking.md",sourceDirName:"sql-manual/sql-functions",slug:"/sql-manual/sql-functions/digital-masking",permalink:"/zh-CN/docs/sql-manual/sql-functions/digital-masking",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DIGITAL_MASKING",language:"zh-CN"},sidebar:"docs",previous:{title:"CAST",permalink:"/zh-CN/docs/sql-manual/sql-functions/cast"},next:{title:"WIDTH_BUCKET",permalink:"/zh-CN/docs/sql-manual/sql-functions/width-bucket"}},s={},c=[{value:"DIGITAL_MASKING",id:"digital_masking",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"digital_masking"},"DIGITAL_MASKING"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"digital_masking(digital_number)\n")),(0,a.yg)("p",null,"\u522b\u540d\u51fd\u6570\uff0c\u539f\u59cb\u51fd\u6570\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"concat(left(id,3),'****',right(id,4))"),"\u3002"),(0,a.yg)("p",null,"\u5c06\u8f93\u5165\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"digital_number")," \u8fdb\u884c\u8131\u654f\u5904\u7406\uff0c\u8fd4\u56de\u906e\u76d6\u8131\u654f\u540e\u7684\u7ed3\u679c\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"digital_number")," \u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT")," \u6570\u636e\u7c7b\u578b\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c06\u624b\u673a\u53f7\u7801\u8fdb\u884c\u8131\u654f\u5904\u7406"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select digital_masking(13812345678);\n+------------------------------+\n| digital_masking(13812345678) |\n+------------------------------+\n| 138****5678                  |\n+------------------------------+\n")))),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"DIGITAL_MASKING"))}d.isMDXComponent=!0}}]);