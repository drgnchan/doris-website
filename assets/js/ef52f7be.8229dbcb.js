"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92864],{95788:(e,t,n)=>{n.d(t,{Iu:()=>m,yg:()=>b});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),y=a,b=c["".concat(l,".").concat(y)]||c[y]||u[y]||i;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},64204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(45072),a=(n(11504),n(95788));const i={title:"bitmap_empty",language:"en"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_empty",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_empty",title:"bitmap_empty",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_empty.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_empty",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_empty",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_empty",language:"en"},sidebar:"docs",previous:{title:"bitmap_from_array",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_from_array"},next:{title:"bitmap_or",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_or"}},l={},s=[{value:"bitmap_empty",id:"bitmap_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_empty"},"bitmap_empty"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_EMPTY()")),(0,a.yg)("p",null,"Return an empty bitmap. Mainly be used to supply default value for bitmap column when loading, e.g.,"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,v1,v2=bitmap_empty()"   http://host:8410/api/test/testDb/_stream_load\n')),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_empty());\n+------------------------------+\n| bitmap_count(bitmap_empty()) |\n+------------------------------+\n|                            0 |\n+------------------------------+\n\nmysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_EMPTY,BITMAP\n")))}u.isMDXComponent=!0}}]);