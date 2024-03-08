"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67593],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),b=i,f=c["".concat(o,".").concat(b)]||c[b]||m[b]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(58168),i=(n(296540),n(15680));const a={title:"BITMAP_SUBSET_LIMIT",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit",id:"version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit",title:"BITMAP_SUBSET_LIMIT",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BITMAP_SUBSET_LIMIT",language:"en"},sidebar:"docs",previous:{title:"BITMAP_AND_NOT,BITMAP_ANDNOT",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-and-not"},next:{title:"BITMAP_SUBSET_IN_RANGE",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range"}},o={},u=[{value:"bitmap_subset_limit",id:"bitmap_subset_limit",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_subset_limit"},"bitmap_subset_limit"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_SUBSET_LIMIT(BITMAP src, BIGINT range_start, BIGINT cardinality_limit)")),(0,i.yg)("p",null,"Create subset of the BITMAP, begin with range from range_start, limit by cardinality_limit\nrange_start: start value for the range\ncardinality_limit: subset upper limit"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 0, 3)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,2,3 |\n+-----------+\n\nmysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 4, 3)) value;\n+-------+\n| value |\n+-------+\n| 4,5     |\n+-------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_SUBSET_LIMIT,BITMAP_SUBSET,BITMAP\n")))}m.isMDXComponent=!0}}]);