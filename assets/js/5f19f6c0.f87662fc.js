"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50728],{95788:(e,t,i)=>{i.d(t,{Iu:()=>c,yg:()=>f});var o=i(11504);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(i),h=n,f=u["".concat(s,".").concat(h)]||u[h]||m[h]||a;return i?o.createElement(f,l(l({ref:t},c),{},{components:i})):o.createElement(f,l({ref:t},c))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:n,l[1]=r;for(var d=2;d<a;d++)l[d]=i[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},11884:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=i(45072),n=(i(11504),i(95788));const a={title:"BloomFilter Index",language:"en"},l=void 0,r={unversionedId:"data-table/index/bloomfilter",id:"data-table/index/bloomfilter",title:"BloomFilter Index",description:"\x3c!--",source:"@site/docs/data-table/index/bloomfilter.md",sourceDirName:"data-table/index",slug:"/data-table/index/bloomfilter",permalink:"/docs/dev/data-table/index/bloomfilter",draft:!1,tags:[],version:"current",frontMatter:{title:"BloomFilter Index",language:"en"},sidebar:"docs",previous:{title:"Inverted Index",permalink:"/docs/dev/data-table/index/inverted-index"},next:{title:"NGram BloomFilter Index",permalink:"/docs/dev/data-table/index/ngram-bloomfilter-index"}},s={},d=[{value:"Doris BloomFilter Index and Usage Scenarios",id:"doris-bloomfilter-index-and-usage-scenarios",level:2},{value:"Create BloomFilter Index",id:"create-bloomfilter-index",level:3},{value:"View BloomFilter Index",id:"view-bloomfilter-index",level:3},{value:"Delete BloomFilter Index",id:"delete-bloomfilter-index",level:3},{value:"Modify BloomFilter Index",id:"modify-bloomfilter-index",level:3},{value:"<strong>Doris BloomFilter Usage Scenarios</strong>",id:"doris-bloomfilter-usage-scenarios",level:3},{value:"<strong>Doris BloomFilter Use Precautions</strong>",id:"doris-bloomfilter-use-precautions",level:3}],c={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,o.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"bloomfilter-index"},"BloomFilter Index"),(0,n.yg)("p",null,"BloomFilter is a fast search algorithm for multi-hash function mapping proposed by Bloom in 1970. Usually used in some occasions where it is necessary to quickly determine whether an element belongs to a set, but is not strictly required to be 100% correct, BloomFilter has the following characteristics:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A highly space-efficient probabilistic data structure used to check whether an element is in a set."),(0,n.yg)("li",{parentName:"ul"},"For a call to detect whether an element exists, BloomFilter will tell the caller one of two results: it may exist or it must not exist."),(0,n.yg)("li",{parentName:"ul"},"The disadvantage is that there is a misjudgment, telling you that it may exist, not necessarily true.")),(0,n.yg)("p",null,"Bloom filter is actually composed of an extremely long binary bit array and a series of hash functions. The binary bit array is all 0 initially. When an element to be queried is given, this element will be calculated by a series of hash functions to map out a series of values, and all values are treated as 1 in the offset of the bit array."),(0,n.yg)("p",null,"Figure below shows an example of Bloom Filter with m=18, k=3 (m is the size of the Bit array, and k is the number of Hash functions). The three elements of x, y, and z in the set are hashed into the bit array through three different hash functions. When querying the element w, after calculating by the Hash function, because one bit is 0, w is not in the set."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Bloom_filter.svg",src:i(63940).c,width:"1280",height:"460"})),(0,n.yg)("p",null,"So how to judge whether the plot and the elements are in the set? Similarly, all the offset positions of this element are obtained after hash function calculation. If these positions are all 1, then it is judged that this element is in this set, if one is not 1, then it is judged that this element is not in this set. It's that simple!"),(0,n.yg)("h2",{id:"doris-bloomfilter-index-and-usage-scenarios"},"Doris BloomFilter Index and Usage Scenarios"),(0,n.yg)("p",null,"When we use HBase, we know that the Hbase data block index provides an effective method to find the data block of the HFile that should be read when accessing a specific row. But its utility is limited. The default size of the HFile data block is 64KB, and this size cannot be adjusted too much."),(0,n.yg)("p",null,"If you are looking for a short row, only building an index on the starting row key of the entire data block cannot give you fine-grained index information. For example, if your row occupies 100 bytes of storage space, a 64KB data block contains (64 * 1024)/100 = 655.53 = ~700 rows, and you can only put the starting row on the index bit. The row you are looking for may fall in the row interval on a particular data block, but it is not necessarily stored in that data block. There are many possibilities for this, or the row does not exist in the table, or it is stored in another HFile, or even in MemStore. In these cases, reading data blocks from the hard disk will bring IO overhead and will abuse the data block cache. This can affect performance, especially when you are facing a huge data set and there are many concurrent users."),(0,n.yg)("p",null,"So HBase provides Bloom filters that allow you to do a reverse test on the data stored in each data block. When a row is requested, first check the Bloom filter to see if the row is not in this data block. The Bloom filter must either confirm that the line is not in the answer, or answer that it doesn't know. This is why we call it a reverse test. Bloom filters can also be applied to the cells in the row. Use the same reverse test first when accessing a column of identifiers."),(0,n.yg)("p",null,"Bloom filters are not without cost. Storing this additional index level takes up additional space. Bloom filters grow as their index object data grows, so row-level bloom filters take up less space than column identifier-level bloom filters. When space is not an issue, they can help you squeeze the performance potential of the system."),(0,n.yg)("p",null,"The BloomFilter index of Doris is specified when the table is built, or completed by the ALTER operation of the table. Bloom Filter is essentially a bitmap structure, used to quickly determine whether a given value is in a set. This judgment will produce a small probability of misjudgment. That is, if it returns false, it must not be in this set. And if the range is true, it may be in this set."),(0,n.yg)("p",null,"The BloomFilter index is also created with Block as the granularity. In each Block, the value of the specified column is used as a set to generate a BloomFilter index entry, which is used to quickly filter the data that does not meet the conditions in the query."),(0,n.yg)("p",null,"Let's take a look at how Doris creates BloomFilter indexes through examples."),(0,n.yg)("h3",{id:"create-bloomfilter-index"},"Create BloomFilter Index"),(0,n.yg)("p",null,'The Doris BloomFilter index is created by adding "bloom_filter_columns"="k1,k2,k3" to the PROPERTIES of the table building statement, this attribute, k1,k2,k3 is the Key column name of the BloomFilter index you want to create, for example, we Create a BloomFilter index for the saler_id and category_id in the table.'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS sale_detail_bloom (\n    sale_date date NOT NULL COMMENT "Sales time",\n    customer_id int NOT NULL COMMENT "Customer ID",\n    saler_id int NOT NULL COMMENT "Salesperson",\n    sku_id int NOT NULL COMMENT "Product ID",\n    category_id int NOT NULL COMMENT "Product Category",\n    sale_count int NOT NULL COMMENT "Sales Quantity",\n    sale_price DECIMAL(12,2) NOT NULL COMMENT "unit price",\n    sale_amt DECIMAL(20,2) COMMENT "Total sales amount"\n)\nDuplicate KEY(sale_date, customer_id,saler_id,sku_id,category_id)\nPARTITION BY RANGE(sale_date)\n(\nPARTITION P_202111 VALUES [(\'2021-11-01\'), (\'2021-12-01\'))\n)\nDISTRIBUTED BY HASH(saler_id) BUCKETS 10\nPROPERTIES (\n"replication_num" = "3",\n"bloom_filter_columns"="saler_id,category_id",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "MONTH",\n"dynamic_partition.time_zone" = "Asia/Shanghai",\n"dynamic_partition.start" = "-2147483648",\n"dynamic_partition.end" = "2",\n"dynamic_partition.prefix" = "P_",\n"dynamic_partition.replication_num" = "3",\n"dynamic_partition.buckets" = "3"\n);\n')),(0,n.yg)("h3",{id:"view-bloomfilter-index"},"View BloomFilter Index"),(0,n.yg)("p",null,"Check that the BloomFilter index we built on the table is to use:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE <table_name>;\n")),(0,n.yg)("h3",{id:"delete-bloomfilter-index"},"Delete BloomFilter Index"),(0,n.yg)("p",null,"Deleting the index is to remove the index column from the bloom_filter_columns attribute:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE <db.table_name> SET ("bloom_filter_columns" = "");\n')),(0,n.yg)("h3",{id:"modify-bloomfilter-index"},"Modify BloomFilter Index"),(0,n.yg)("p",null,"Modifying the index is to modify the bloom_filter_columns attribute of the table:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE <db.table_name> SET ("bloom_filter_columns" = "k1,k3");\n')),(0,n.yg)("h3",{id:"doris-bloomfilter-usage-scenarios"},(0,n.yg)("strong",{parentName:"h3"},"Doris BloomFilter Usage Scenarios")),(0,n.yg)("p",null,"You can consider establishing a Bloom Filter index for a column when the following conditions are met:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"First, BloomFilter is suitable for non-prefix filtering."),(0,n.yg)("li",{parentName:"ol"},"The query will be filtered according to the high frequency of the column, and most of the query conditions are in and = filtering."),(0,n.yg)("li",{parentName:"ol"},'Unlike Bitmap, BloomFilter is suitable for high cardinality columns. Such as UserID. Because if it is created on a low-cardinality column, such as a "gender" column, each Block will almost contain all values, causing the BloomFilter index to lose its meaning.')),(0,n.yg)("h3",{id:"doris-bloomfilter-use-precautions"},(0,n.yg)("strong",{parentName:"h3"},"Doris BloomFilter Use Precautions")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"It does not support the creation of Bloom Filter indexes for Tinyint, Float, and Double columns."),(0,n.yg)("li",{parentName:"ol"},"The Bloom Filter index only has an acceleration effect on in and = filtering queries."),(0,n.yg)("li",{parentName:"ol"},"If you want to check whether a query hits the Bloom Filter index, you can check the profile information of the query.")))}m.isMDXComponent=!0},63940:(e,t,i)=>{i.d(t,{c:()=>o});const o=i.p+"assets/images/Bloom_filter.svg-9ad88beea5ebb916ea2d0ac27eb5a5cf.png"}}]);