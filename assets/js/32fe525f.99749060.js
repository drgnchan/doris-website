"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48654],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>d});var t=r(11504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,d=p["".concat(s,".").concat(y)]||p[y]||f[y]||l;return r?t.createElement(d,a(a({ref:n},u),{},{components:r})):t.createElement(d,a({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},98400:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(45072),o=(r(11504),r(95788));const l={title:"lower",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/lower",id:"version-1.2/sql-manual/sql-functions/string-functions/lower",title:"lower",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/lower.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/lower",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/lower",draft:!1,tags:[],version:"1.2",frontMatter:{title:"lower",language:"en"},sidebar:"docs",previous:{title:"rpad",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/rpad"},next:{title:"lcase",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/lcase"}},s={},c=[{value:"lower",id:"lower",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"lower"},"lower"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR lower (VARCHAR str)")),(0,o.yg)("p",null,"Convert all strings in parameters to lowercase. Another alias for this function is ",(0,o.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-functions/string-functions/lcase"},"lcase"),"."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT lower(\"AbC123\");\n+-----------------+\n| lower('AbC123') |\n+-----------------+\n| abc123          |\n+-----------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"LOWER\n")))}f.isMDXComponent=!0}}]);