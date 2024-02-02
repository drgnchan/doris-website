"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[6100],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>b});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(45072),a=(n(11504),n(95788));const i={title:"to_bitmap",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/to_bitmap",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/to_bitmap",title:"to_bitmap",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/to_bitmap.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/to_bitmap",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/to_bitmap",draft:!1,tags:[],version:"1.2",frontMatter:{title:"to_bitmap",language:"en"},sidebar:"docs",previous:{title:"GROUPING_ID",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/grouping_id"},next:{title:"bitmap_hash",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_hash"}},s={},p=[{value:"to_bitmap",id:"to_bitmap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"to_bitmap"},"to_bitmap"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP TO_BITMAP(expr)")),(0,a.yg)("p",null,"Convert an unsigned bigint (ranging from 0 to 18446744073709551615) to a bitmap containing that value.\nNull will be return when the input value is not in this range.\nMainly be used to load integer value into bitmap column, e.g.,"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)"   http://host:8410/api/test/testDb/_stream_load\n')),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_count(to_bitmap(10));\n+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n\nMySQL> select bitmap_to_string(to_bitmap(-1));\n+---------------------------------+\n| bitmap_to_string(to_bitmap(-1)) |\n+---------------------------------+\n|                                 |\n+---------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TO_BITMAP,BITMAP\n")))}m.isMDXComponent=!0}}]);