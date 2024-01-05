"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93089],{91970:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(67294);function r(e){return l.createElement("div",{className:`page-header bg-[#F7F9FE] pt-10 pb-20 ${e.className}`},l.createElement("h1",{className:"title text-[2rem] leading-normal lg:text-[2.75rem]"},e.title),l.createElement("div",{className:"subtitle mt-4"},e.subtitle),e?.extra&&e?.extra)}},31627:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),r=a(86010),s=a(68097),n=a(36624);function m(e){const{sidebar:t,toc:a,children:m,pageType:c,...o}=e,i=t&&t.items.length>0,d="blogList"===c;return l.createElement(s.Z,o,l.createElement("div",{className:"mb-[4.875rem] container"},l.createElement("div",{className:"lg:row lg:flex"},l.createElement(n.Z,{sidebar:t}),l.createElement("main",{className:(0,r.Z)({col:!d,"col--7":i&&!d,"col--12":!i&&d,"col--9 col--offset-1":!i&&!d}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&l.createElement("div",{className:"col col--2"},a))))}},17125:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var l=a(87462),r=a(67294),s=a(86010),n=a(52263),m=a(1944),c=a(35281),o=a(31627),i=(a(95999),a(39960)),d=a(44996),g=a(88824);function u(e){const{permalink:t,large:a,image:l,title:s,summary:n,formattedDate:m,date:c,authorsExists:o,authors:d,size:g="small"}=e;return"small"===g?r.createElement("li",null,r.createElement(i.Z,{to:t,className:"hover:no-underline hover:decoration-none transition-scale relative block rounded-lg border border-[#DFE5F0] px-6 py-5 hover:border-[#0065FD] "},r.createElement("div",{className:" "},r.createElement("h1",{className:"line-clamp-2 text-xl font-medium leading-normal text-black-dark transition group-hover:text-primary"},s),r.createElement("div",{className:"mt-4 line-clamp-2 h-11 text-sm leading-relaxed text-[#4C576C] transition group-hover:text-primary"},n),r.createElement("div",{className:"mt-4 flex justify-start space-x-2 text-sm  leading-[1.375rem] text-[#8592a6]"},r.createElement("time",{dateTime:c,itemProp:"datePublished",className:"mr-4"},m),o&&r.createElement(r.Fragment,null,r.createElement("span",{className:"split-line"}),r.createElement("span",{className:"authors"},d.map(((e,t)=>r.createElement("span",{className:"s-author",key:t},e.name))))))))):r.createElement(i.Z,{to:t,className:`hover:no-underline hover:decoration-none transition-scale group relative ${a?"h-full":"h-auto"} flex flex-col  `},r.createElement("img",{className:"rounded-t-lg border border-b-0 border-[#DFE5F0] group-hover:border-[#0065FD]",src:l,alt:""}),r.createElement("div",{className:"rounded-b-lg border border-t-0 border-[#DFE5F0] group-hover:border-[#0065FD] h-full   flex flex-col-reverse justify-between lg:flex-row lg:py-0 py-6 lg:space-x-10 px-6"},r.createElement("div",{className:"flex-1"},r.createElement("h1",{className:" mt-4 line-clamp-2 text-2xl font-medium text-black-dark lg:text-[2rem] lg:leading-[3rem]"},s),r.createElement("div",{className:"lg:h-[9.25rem]"},r.createElement("p",{className:"mt-4 line-clamp-2 text-sm leading-[1.6875rem] text-[#666666] lg:text-lg "},n)),r.createElement("div",{className:"mt-4 flex space-x-6"},r.createElement("span",{className:"text-sm text-[#8592a6]"},r.createElement("time",{dateTime:c,itemProp:"datePublished",className:"mr-4"},m),o&&r.createElement(r.Fragment,null,r.createElement("span",{className:"split-line"}),r.createElement("span",{className:"authors"},d.map(((e,t)=>r.createElement("span",{className:"s-author",key:t},e.name))))))))))}function p(e){!function(){const{selectMessage:e}=(0,g.c)()}();const{withBaseUrl:t}=(0,d.C)(),{children:a,frontMatter:s,assets:n,metadata:m,large:c=!1}=e,{date:o,formattedDate:p,permalink:E,tags:h,readingTime:x,title:b,editUrl:f,authors:v}=m,N=n.image??s.image,k=h.length>0,y=s.summary,F=v&&v.length>0;return e?.headBlog?r.createElement(u,(0,l.Z)({},m,{image:N,large:c,size:c?"large":"small",tagsExists:k,authorsExists:F,summary:y})):r.createElement("article",{itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement(i.Z,{itemProp:"url",to:E,className:"hover:no-underline hover:decoration-none transition-scale group relative flex h-full flex-col rounded-lg border border-[#DFE5F0] hover:border-[#0065FD] lg:border-0"},r.createElement("div",{className:"relative overflow-hidden rounded-t-lg border-[#DFE5F0] group-hover:border-[#0065FD] lg:border lg:border-b-0 lg:pb-0",style:{width:"100%",height:"165px"}},r.createElement("img",{src:N,alt:""})),r.createElement("div",{className:`px-6 ${c?"py-6 lg:pt-12":" py-6"} flex-1 rounded-b-lg border-[#DFE5F0] group-hover:border-[#0065FD] lg:border lg:border-t-0`},!c&&r.createElement("div",{className:""},k&&h.map((e=>r.createElement("span",{key:e.label,className:"mr-4 inline-block rounded-3xl border border-[#DADCE0] px-2 py-1 text-xs leading-normal"},e.label)))),r.createElement("div",{className:(c?"lg:h-[5.25rem]":"")+" h-12"},r.createElement("h1",{className:(c?" lg:text-[1.75rem] lg:leading-normal":"mt-4")+" line-clamp-2 break-keep  text-xl font-medium leading-tight text-black-dark transition"},b)),r.createElement("div",{className:(c?"h-14":"h-12")+" mt-6 "},r.createElement("span",{className:(c?" lg:text-lg":"  leading-[1.375rem]")+"  line-clamp-2 break-all  text-sm   text-[#4C576C] transition"},y)),r.createElement("div",{className:(c?" mt-8 lg:text-base":" mt-4")+"  justify-start space-x-2  text-sm leading-[1.375rem] text-[#8592a6]"},r.createElement("time",{dateTime:o,itemProp:"datePublished"},p),F&&r.createElement(r.Fragment,null,r.createElement("span",{className:"split-line"}),r.createElement("span",{className:"authors"},v.map(((e,t)=>r.createElement("span",{className:"s-author",key:t},e.name)))))))))}var E=a(72389);function h(e){const t=e.blogs,a=t.filter((e=>1==+e.frontMatter.order))[0],l=t.filter((e=>e.frontMatter.title!==a.frontMatter.title));return r.createElement(r.Fragment,null,r.createElement("div",{className:"flex lg:flex-row flex-col lg:max-w-7xl"},r.createElement("div",{className:"mb-4 lg:mb-0 lg:flex-1 lg:pr-6"},r.createElement(p,{large:!0,headBlog:!0,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated})),r.createElement("ul",{className:"space-y-4 lg:flex-1"},l.filter((e=>e.frontMatter.picked)).sort(((e,t)=>+e.frontMatter.order-+t.frontMatter.order)).map(((e,t)=>r.createElement(p,{headBlog:!0,large:!1,key:e.metadata.permalink+t,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:e.metadata.truncated},r.createElement(e,null)))))))}var x=a(91970),b=a(16550),f=a(23278);function v(e){let{total:t,currentPage:a,currentCategory:l}=e;const s=(0,b.TH)(),n=(0,b.k6)();return r.createElement("div",{className:"mt-6 flex justify-between container"},r.createElement("div",{className:"text-sm text-[#8592A6]"},"Total ",t," items"),r.createElement(f.Z,{responsive:!0,onChange:e=>{n.push(`${s.pathname}?currentPage=${e||""}&currentCategory=${l||""}#blog`,s.state)},defaultPageSize:9,current:a,total:t,showSizeChanger:!1,showQuickJumper:!0}))}const N="All";function k(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.Z)(),{blogDescription:l,blogTitle:s,permalink:c}=t,o="/"===c?a:s;return r.createElement(r.Fragment,null,r.createElement(m.d,{title:o,description:l}))}function y(e){const{metadata:t,items:a,sidebar:s}=e,m=(0,E.Z)(),[c,i]=(0,r.useState)([]),d=function(e){const{siteConfig:t}=(0,n.Z)(),{items:a}=e,l={label:"All",values:[]},s=[l];return(0,r.useEffect)((()=>{sessionStorage.setItem("tag","All")}),[]),a.forEach((e=>{let{content:t}=e;const{frontMatter:a}=t,r=a.tags||[];r.length>0&&r.forEach((e=>{const a=s.length>0?s.findIndex((t=>t.label===e)):-1;if(a>-1)s[a].values.push(t);else{const a={label:e,values:[t]};s.push(a)}l.values.every((e=>e.metadata.permalink!==t.metadata.permalink))&&l.values.push(t)}))})),s}(e),g=d.find((e=>e.label===N)).values,{siteConfig:u}=(0,n.Z)(),[f,k]=(u.baseUrl.indexOf("zh-CN"),(0,r.useState)((()=>(m?sessionStorage.getItem("tag"):N)||N))),[y,F]=(0,r.useState)(9);let[w,C]=(0,r.useState)(1);const[D,P]=(0,r.useState)([]),[Z,M]=(0,r.useState)(0),S=(0,b.TH)(),T=(0,b.k6)(),$=e=>{T.push(`${S.pathname}?currentPage=1&currentCategory=${e||""}#blog`,S.state)};return(0,r.useEffect)((()=>{let e=1,t=N;if(S.search&&S.search.split("?").length>0){const a=S.search.split("?")[1].split("&");a&&a.map((a=>{const[l,r]=a.split("=");"currentPage"===l?r&&(e=+r):r&&(t=decodeURI(r))}))}k(t),M(e);let a=d.find((e=>e.label===t));a||(a=d.find((e=>e.label===N))),i(a.values),P(a.values.slice((e-1)*y,e*y))}),[S.search]),(0,r.useEffect)((()=>{$(f),m&&sessionStorage.setItem("tag",f)}),[f]),r.createElement(o.Z,{sidebar:s,pageType:"blogList",className:"lg:max-w-7xl"},r.createElement(x.Z,(0,l.Z)({title:"Blog",className:"bg-white"},e)),r.createElement(h,{blogs:g}),r.createElement("div",{className:"flex flex-col lg:max-w-7xl"},r.createElement("ul",{className:"scrollbar-none w-[100%] mt-6 custom-scrollbar m-auto flex gap-3 overflow-auto text-[#4C576C] lg:mt-[5.5rem]  lg:justify-center lg:gap-6"},d.map(((e,t)=>r.createElement("li",{className:" py-px",key:t,onClick:()=>$(e.label)},r.createElement("span",{className:`block cursor-pointer whitespace-nowrap rounded-[2.5rem] px-4 py-2 text-sm  shadow-[0px_1px_4px_0px_rgba(49,77,136,0.10)] hover:bg-[#444FD9] hover:text-white lg:px-6 lg:py-3 lg:text-base ${f===e.label&&"bg-[#444FD9] text-white"}`},e.label))))),r.createElement("ul",{className:"mt-6 grid gap-6 lg:mt-10 lg:grid-cols-3 m-auto"},D.map(((e,t)=>r.createElement(p,{key:e.metadata.permalink+t,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:e.metadata.truncated},r.createElement(e,null))))),r.createElement(v,{total:c.length,currentPage:Z,currentCategory:f})))}function F(e){return r.createElement(m.FG,{className:(0,s.Z)(c.k.wrapper.blogPages,c.k.page.blogListPage)},r.createElement(k,e),r.createElement(y,e))}}}]);