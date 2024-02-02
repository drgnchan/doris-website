"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98360],{95788:(e,t,a)=>{a.d(t,{Iu:()=>h,yg:()=>u});var n=a(11504);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(a),g=i,u=p["".concat(l,".").concat(g)]||p[g]||d[g]||s;return a?n.createElement(u,r(r({ref:t},h),{},{components:a})):n.createElement(u,r({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},70860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(45072),i=(a(11504),a(95788));const s={title:"Doris analysis: Doris SQL principle analysis",summary:"This article mainly introduces the principle of Doris SQL parsing.Since there are many types of SQL, this article focuses on the analysis of query SQL. Doris's SQL analysis will be explained deeply in the algorithm principle and code implementation.",date:"2022-08-25",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/tech-sharing.png"},r=void 0,o={permalink:"/zh-CN/blog/principle-of-Doris-SQL-parsing",source:"@site/blog/principle-of-Doris-SQL-parsing.md",title:"Doris analysis: Doris SQL principle analysis",description:"\x3c!--",date:"2022-08-25T00:00:00.000Z",formattedDate:"2022\u5e748\u670825\u65e5",tags:[{label:"Tech Sharing",permalink:"/zh-CN/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Doris analysis: Doris SQL principle analysis",summary:"This article mainly introduces the principle of Doris SQL parsing.Since there are many types of SQL, this article focuses on the analysis of query SQL. Doris's SQL analysis will be explained deeply in the algorithm principle and code implementation.",date:"2022-08-25",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/tech-sharing.png"},prevItem:{title:"Doris stream load principle analysis",permalink:"/zh-CN/blog/principle-of-Doris-Stream-Load"},nextItem:{title:"How Flink's real-time writes to Apache Doris ensure both high throughput and low latency",permalink:"/zh-CN/blog/Flink-realtime-write"}},l={authorsImageUrls:[void 0]},c=[{value:"2.1 Lexical analysis",id:"21-lexical-analysis",level:2},{value:"2.2 Syntax analysis",id:"22-syntax-analysis",level:2},{value:"2.3 Logical plan",id:"23-logical-plan",level:2},{value:"2.4 Physical plan",id:"24-physical-plan",level:2}],h={toc:c},p="wrapper";function d(e){let{components:t,...s}=e;return(0,i.yg)(p,(0,n.c)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Lead\uff1a"),"\nThis article mainly introduces the principle of Doris SQL parsing."),(0,i.yg)("p",null,"It focuses on generating a single-machine logical plan, developing a distributed logical plan, and generating a distributed physical plan. Analyze, SinglePlan, DistributedPlan, and Schedule four parts correspond to the code implementation."),(0,i.yg)("p",null,"First, AST will be processed preliminary by Analyze and then optimized by SinglePlan to generate a single-machine query plan. Third, DistributedPlan will split the single-machine query plan into distributed query plans. In the end, the query plan will be sent to machines and executed orderly, which decide by Schedule."),(0,i.yg)("p",null,"Since there are many types of SQL, this article focuses on the analysis of query SQL. Doris's SQL analysis will be explained deeply in the algorithm principle and code implementation."),(0,i.yg)("h1",{id:"1-introduction-to-doris"},"1. Introduction to Doris"),(0,i.yg)("p",null,"Doris is an interactive SQL database based on MPP architecture, mainly used to solve near real-time reports and multi-dimensional analysis. The Doris architecture is straightforward, with only two types of processes."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Frontend\uff08FE\uff09: It is mainly responsible for user request access, query parsing and planning, storage and management of metadata, and node management-related work.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Backend\uff08BE\uff09: It is mainly responsible for data storage and query plan execution."))),(0,i.yg)("p",null,"In Doris' storage engine, data will be horizontally divided into several data shards (Tablet, also called data bucket). Each tablet contains several rows of data. Multiple Tablets belong to different partitions logically. A Tablet only belongs to one Partition. And a Partition contains several Tablets. Tablet is the smallest physical storage unit for operations such as data movement, copying, etc."),(0,i.yg)("h1",{id:"2-sql-parsing-in-apache-doris"},"2. SQL parsing In Apache Doris"),(0,i.yg)("p",null,"SQL parsing in this article refers to ",(0,i.yg)("strong",{parentName:"p"},"the process of generating a complete physical execution plan after a series of parsing of an SQL statement"),"."),(0,i.yg)("p",null,"This process includes the following four steps: lexical analysis, syntax analysis, generating a logical plan, and generating a physical plan."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(14988).c,width:"1080",height:"446"})),(0,i.yg)("h2",{id:"21-lexical-analysis"},"2.1 Lexical analysis"),(0,i.yg)("p",null,"The lexical analysis will identify the SQL in the form of a string into tokens, in preparation for the grammatical analysis."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-undefined"},"select ......  from ...... where ....... group by ..... order by ......\n\nSQL Tokens could be divided into the following categories:\n\uffee Keywords (select, from, where)\n\uffee operator (+, -, >=)\n\uffee Open/close flag ((, CASE)\n\uffee placeholder (?)\n\uffee Comments\n\uffee space\n......\n")),(0,i.yg)("h2",{id:"22-syntax-analysis"},"2.2 Syntax analysis"),(0,i.yg)("p",null,"The syntax analysis will convert the token generated by the lexical analysis into an abstract syntax tree based on the syntax rules, as shown in Figure 2."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(37328).c,width:"1080",height:"473"})),(0,i.yg)("h2",{id:"23-logical-plan"},"2.3 Logical plan"),(0,i.yg)("p",null,"The logical plan converts the abstract syntax tree into an algebraic relation, which is an operator tree, and each node represents a calculation method for data. The entire tree represents the calculation method and flows direction of data, as shown in Figure 3."),(0,i.yg)("p",null," ",(0,i.yg)("img",{src:a(34604).c,width:"573",height:"893"})),(0,i.yg)("h2",{id:"24-physical-plan"},"2.4 Physical plan"),(0,i.yg)("p",null,"The physical plan is the plan that determines which computing operations are performed on which machines. It will be generated based on the logical plan, the distribution of machines, and the distribution of data."),(0,i.yg)("p",null,"The SQL parsing of the Doris system also adopts these steps, but it is refined and optimized according to the characteristics of the Doris system structure and the storage method of data to maximize the computing power of the machine."),(0,i.yg)("h1",{id:"3-design-goals"},"3. Design goals"),(0,i.yg)("p",null,"The design goals of the Doris SQL parsing architecture are:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Maximize Computational Parallelism")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Minimize network transfer of data")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Minimize the amount of data that needs to be scanned"))),(0,i.yg)("h1",{id:"4-architecture"},"4. Architecture"),(0,i.yg)("p",null,"Doris SQL parsing includes five steps: lexical analysis, syntax analysis, generation of a stand-alone logical plan, generation of a distributed logical plan, and generation of a physical execution plan."),(0,i.yg)("p",null,"In terms of code implementation, it corresponds to the following five steps: Parse, Analyze, SinglePlan, DistributedPlan, and Schedule, which as shown in Figure 4."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(23412).c,width:"1080",height:"1682"})),(0,i.yg)("p",null,"The Parse phase will not be discussed in this article. Analyze will do some pre-processing of the AST. A stand-alone query plan will be optimized by SinglePlan based on the AST. DistributedPlan will split the stand-alone query plan into distributed query plans. Schedule phase will determine which machines the query plan will be sent to for execution."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Since there are many types of SQL, this article focuses on the analysis of query SQL.")),(0,i.yg)("p",null,"Figure 5 shows a simple query SQL parsing implementation in Doris."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(972).c,width:"1080",height:"1344"})),(0,i.yg)("h1",{id:"5-parse-phase"},"5. Parse Phase"),(0,i.yg)("p",null,"In the Parse stage, JFlex technology is used for lexical analysis, java cup parser technology is used for syntax analysis, and an AST\uff08Abstract Syntax Tree\uff09will finally generate. These are existing and mature technologies and will not be introduced in detail here."),(0,i.yg)("p",null,"AST has a tree-like structure, which represents a piece of SQL. Therefore, different types of queries -- select, insert, show, set, alter table, create table, etc. will generate additional data structures after Parse (SelectStmt, InsertStmt, ShowStmt, SetStmt, AlterStmt, AlterTableStmt, CreateTableStmt, etc.). However, they all inherit from Statements and will perform some specific processing according to their own grammar rules. For example: for select type SQL, the SelectStmt structure will be generated after Parse."),(0,i.yg)("p",null,"SelectStmt structure contains SelectList, FromClause, WhereClause, GroupByClause, SortInfo and other structures. These structures contain more basic data structures. For Example, WhereClause contains BetweenPredicate, BinaryPredicate, CompoundPredicate, InPredicate, and so on."),(0,i.yg)("p",null,"All structures in AST are composed of basic structure expressions--Expr by using various combinations, as shown in Figure 6."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(56484).c,width:"1080",height:"718"})),(0,i.yg)("h1",{id:"6-analyze-phase"},"6. Analyze Phase"),(0,i.yg)("p",null,"Analyze will perform pre-processing and semantic analysis on the abstract syntax tree AST generated in the Parse phase, preparing for the generation of stand-alone logic plans."),(0,i.yg)("p",null,"The abstract class StatementBase represents the abstract syntax tree. This abstract class contains a most crucial member function--analyze(), which is used to perform what's needed to do in Analyze phase."),(0,i.yg)("p",null,"Different types of queries (select, insert, show, set, alter table, create table, etc.) will generate different data structures through the Parse stage(SelectStmt, InsertStmt, ShowStmt, SetStmt, AlterStmt, AlterTableStmt, CreateTableStmt, etc.), these data structures inherit From StatementBase, and perform a specific Analysis on a specific type sof SQL by implementing the analyze() function."),(0,i.yg)("p",null,"For example, a query of select type will be converted into analyze() of the sub-statements SelectList, FromClause, GroupByClause, HavingClause, WhereClause, SortInfo, etc. of select SQL. Then these sub-statements further analyze() their sub-structures, and various scenarios of various types of SQL are analyzed by layer-by-layer iteration. For example, WhereClause will further explore the BetweenPredicate, BinaryPredicate, CompoundPredicate, InPredicate, etc., which it contains."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"For query type SQL, Analyze will performs several important steps:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Metadata identification and parsing"),"\uff1a Identify and parse metadata such as Cluster, Database, Table, Column, etc. involved in SQL, and determine which columns, tables, databases, and clusters need to be calculated.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"SQL correctness check"),"\uff1asuch as the window function cannot DISTINCT, whether the projection column is ambiguous, the where statement cannot contain grouping operations, etc.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Rewrite SQL simply"),"\uff1afor example, expand select * to select all columns, convert count distinct to bitmap or hll function, etc.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Function correctness check"),"\uff1aCheck whether the functions contained in SQL are consistent with the system-defined procedures, including parameter types, number of parameters, etc.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Aliasing for Table and Column."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Type checking and conversion"),"\uff1a For example, when the types on both sides of a binary expression are inconsistent, one of the types needs to be converted (with BIGINT and DECIMAL, the BIGINT type needs to be cast to DECIMAL)."))),(0,i.yg)("p",null,"After analyzing the AST, a rewrite operation will be performed again to simplify or convert it into a unified processing method. A present rewrite algorithm is a rule-based approach. It will rewrite the AST with each rule from bottom to top, based on the tree structure of the AST. If the AST changes after rewriting, analysis and rewrite will start again until there is no change in the AST."),(0,i.yg)("p",null,"For example: simplification of constant expressions: 1 + 1 + 1 is rewritten as 3, 1 > 2 is rewritten as Flase, etc. Convert some statements into a unified processing method, such as rewriting where in, where exists as semi join, where not in, where not exists as anti join."),(0,i.yg)("h1",{id:"7-generate-stand-alone-logical-plan-phase"},"7. Generate stand-alone logical Plan phase"),(0,i.yg)("p",null,"At this stage, algebraic relations will be generated according to the AST abstract syntax tree, also known as the operator number. Each node on the tree is an operator, representing an operation."),(0,i.yg)("p",null,"As shown in Figure 7, ScanNode represents scan and read operations on a table. HashJoinNode represents the join operation. A hash table of a small table will be constructed in memory, and the large table will be traversed to find the exact value of the join key. Project means the projection operation, which represents the column that needs to be output at the end. Figure 7 shows that only citycode column will output."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(53028).c,width:"1080",height:"543"})),(0,i.yg)("p",null,"Without optimization, the generated relational algebra is very expensive to send to storage and execute."),(0,i.yg)("p",null,"For query:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'select a.siteid, a.pv from table1 a join table2 b on a.siteid = b.siteid where a.citycode=122216 and b.username="test" order by a.pv limit 10\n')),(0,i.yg)("p",null,"As shown in Figure 8, for unoptimized relational algebra, all columns need to be read out for a series of calculations. In the end, siteid and pv column are selected and output. A large amount of useless column data wastes computing resources."),(0,i.yg)("p",null,"When Doris generates algebraic relations, a lot of optimizations are made: the projection columns and query conditions will be put into the scan operation as much as possible."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(93896).c,width:"500",height:"1110"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Specifically, this phase mainly does the following tasks:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Slot materialization"),"\uff1aDetermine the column that needs to be scanned and calculated for the expression. Such as aggregate function expressions and Group By words of aggregate nodes need to be materialized.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Projection pushdown"),"\uff1aBE only scans the columns that must be read when Scanning.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Predicate pushdown"),"\uff1aPush down the filter conditions to the Scan node as much as possible under the premise of semantically correct.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Partition, bucket cutting"),"\uff1aAccording to the information in the filter conditions, determine which partitions and buckets of tablets need to be scanned.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Join Reorder"),"\uff1aFor Inner Join, Doris will adjust the order of the table according to the number of rows--put the large table in the front.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Sort + Limit optimized to TopN"),"\uff1aFor the order by the limit statement, it will be converted into TopN operation nodes, which is convenient for unified processing.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"MaterializedView selection"),": The best-materialized view will be selected according to the columns required by the query, the columns for filtering, sorting and Join, the number of rows, the number of columns, and other factors."))),(0,i.yg)("p",null,"Figure 9 shows an example of optimization. The optimization of Doris is carried out in generating relational algebra. Generating one will optimize one.\xb7 Projection pushdown: BE only scans the columns that must be read when Scanning."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(63924).c,width:"1080",height:"290"})),(0,i.yg)("h1",{id:"8-generate-distributed-plan-phase"},"8 Generate Distributed Plan Phase"),(0,i.yg)("p",null,"After the single-machine PlanNode tree is generated, it needs to be split into a distributed PlanFragment tree (PlanFragment is used to represent an independent execution unit) according to the distributed environment. A table's data is distributed across multiple hosts could allow some computations to be parallelized."),(0,i.yg)("p",null,"The primary purpose of this step is to maximize parallelism and data localization. The primary strategy is to split the nodes that can be executed in parallel and create a separate PlanFragment. ExchangeNodes will replace the split nodes to receive data. Finally, a DataSinkNode will be added to the split node to transmit the calculated data to the ExchangeNode for further processing."),(0,i.yg)("p",null,"This step adopts a recursive method, traverses the entire PlanNode tree from bottom to top, and then creates a PlanFragment for each leaf node on the tree. If the parent node is encountered, splitting the child nodes that can be executed in parallel will be considered."),(0,i.yg)("p",null,"For query operations, the join operation is the most common."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Doris currently supports four join algorithms:")," broadcast join, hash partition join, colocate join, and bucket shuffle join."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"broadcast join"),"\uff1aSend the small table to each machine where the large table is located and perform a hash join operation. When the amount of data scanned from a table is small, the cost of broadcast join will be calculated, and the method with the smallest cost will be selected by calculating and comparing the cost of hash partitions."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"hash partition join"),"\uff1aWhen the data scanned from the two tables are both large, hash partition join is generally used. It traverses all the data in the table, calculates the hash value of the key, then modulizes the number of clusters, and whichever machine is selected, the data will be sent to this machine for hash join operation."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"colocate join"),"\uff1aIf the data distribution of the two tables is specified to be consistent when they are created, the colocate join algorithm will be used when the join key of the two tables is the same as the bucket key. Since the data distribution of the two tables is the same, the hash join operation is equivalent to a local process. It does not involve data transmission, which significantly improves query performance."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"bucket shuffle join"),"\uff1aWhen the join key is a bucketing key, and only one partition is involved, the bucket shuffle join algorithm is preferred. Since bucketing itself represents a way of dividing data, it only needs to take the hash modulo of the number of buckets from the right table to the left table, so that only one copy of the data in the right table needs to be transmitted over the network, which greatly reduces the network of data transmission, as shown in Figure 10."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(15660).c,width:"878",height:"938"})),(0,i.yg)("p",null,"Figure 11 shows the core process of creating a distributed logical plan with a single-machine logical plan with HashJoinNode."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"For PlanNodes, PlanFragments are created bottom-up.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If it is a ScanNode, PlanFragment will be created directly, and the RootPlanNode of the PlanFragment is this ScanNode.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If it is a HashJoinNode, the broadcastCost will be calculated at first, which could provide a reference for selecting boracast join or hash partition join.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Join algorithm will be chosen according to different conditions.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If colocate joins are used, since joins are all local, no splitting is required. Set the left child node of HashJoinNode as the RootPlanNode of leftFragment, and the right child node as the RootPlanNode of rightFragment, share a PlanFragment with leftFragment, and delete rightFragment.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If bucket shuffle join is used, data from the right table needs to be sent to the left table. So first create an ExchangeNode, set the left child node of HashJoinNode as the RootPlanNode of leftFragment, the right child node as this ExchangeNode, share a PlanFragment with leftFragment, and specify the destination of rightFragment data to be sent to this ExchangeNode.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If broadcast join is used, the data from the right table needs to be sent to the left table. So first create an ExchangeNode, set the left child node of HashJoinNode as the RootPlanNode of leftFragment, the right child node as this ExchangeNode, share a PlanFragment with leftFragment, and specify the destination of rightFragment data to be sent to this ExchangeNode.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If hash partition join is used, the data in the left table and the right table must be split, and both left and right nodes need to be split out to create left ExchangeNode and right ExchangeNode respectively. HashJoinNode specifies the left and right nodes as left ExchangeNode and right ExchangeNode. Create a PlanFragment separately and specify RootPlanNode as this HashJoinNode. Finally, specify the data sending destination of leftFragment and rightFragment as left ExchangeNode and right ExchangeNode."))),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(9088).c,width:"1080",height:"975"})),(0,i.yg)("p",null,"Figure 12 is an example after the join operation of two tables is converted into a PlanFragment tree, there are 3 PlanFragments generated. The final output data passes through the ResultSinkNode node."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(7160).c,width:"1080",height:"1079"})),(0,i.yg)("h1",{id:"9-schedule-phase"},"9. Schedule phase"),(0,i.yg)("p",null,"This step is to create a distributed physical plan based on the distributed logical plan. will solve the following questions:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Which BE executes which PlanFragment")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Which replica to chooes for each Tablet to query")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"How to perform multi-instance concurrency"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Figure 13 shows the core process for creating a distributed physical plan:")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"a. Prepare phase"),"\uff1aCreate a FragmentExecParams structure for each PlanFragment to represent all the parameters required for PlanFragment execution; if a PlanFragment contains DataSinkNode, the destination PlanFragment for data transmission will be found, and specify the input of FragmentExecParams of the destination PlanFragment as FragmentExecParams of this PlanFragment."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"b. computeScanRangeAssignment phase"),"\uff1aDifferent processing is performed for different types of joins."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"computeScanRangeAssignmentByColocate: For colocate join processing, since the data distribution in the two table buckets of the join is the same, they are based on the bucket join operation, so here is to determine which host is selected for each bucket. When allocating buckets to hosts, try to ensure that the buckets allocated to each host are even.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"computeScanRangeAssignmentByBucket: Processing for bucket shuffle join, which is only based on bucket operations, so here is to determine which host is selected for each bucket. When allocating buckets to hosts, it is also necessary to try to ensure that the buckets allocated to each host are even.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"computeScanRangeAssignmentByScheduler: Process for other types of joins. Determines which replica of the tablet each scanNode reads. A scanNode will read multiple tablets, and each tablet has various copies. To distribute the scan operation on various machines as much as possible, improve concurrent performance, and reduce IO pressure, Doris uses the Round-Robin algorithm to distribute tablet scans to multiple machines as much as possible. For example, 100 tablets need to be scanned, each tablet has three copies, and ten machines could be used. When allocating, each machine is guaranteed to scan ten tablets."))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"c.computeFragmentExecParams phase"),"\uff1aThis stage determines which BE the PlanFragment is issued to for execution and how to handle instance concurrency. After the scan address of each tablet is determined, FragmentExecParams will generate multiple instances with the address as the dimension. If various addresses are contained in FragmentExecParams, various instances of FInstanceExecParam will be generated. If the concurrency is set, the execution instance of an address will be further split into multiple FInstanceExecParams. There will be some special processing for bucket shuffle join and colocate join, but the basic logic is the same. After FInstanceExecParam is created, a unique ID will be assigned to facilitate tracking information. If FragmentExecParams contains ExchangeNode, the number of senders will be counted to know how many senders' data needs to be accepted. Finally, FragmentExecParams determines the destinations and fills in the destination address."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"d. Create result receiver stage"),"\uff1aThe resulting receiver is where the final data needs to be output after the query is completed."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"e. to thrift stage"),"\uff1aCreate RPC requests based on FInstanceExecParam of all PlanFragments, then send them to the BE side for execution. A complete SQL parsing process is completed."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(84732).c,width:"1080",height:"846"})),(0,i.yg)("p",null,"Figure 14 is a simple example. The PlanFrament in the figure contains a ScanNode. The ScanNode scans three tablets. Each tablet has two copies, and the cluster assumes that there are two hosts."),(0,i.yg)("p",null,"The computeScanRangeAssignment stage determines that replicas 1, 3, 5, 8, 10, and 12 need to be scanned, where replicas 1, 3, and 5 are located on host1, and replicas 8, 10, and 12 are located on host2."),(0,i.yg)("p",null,"If the global concurrency is set to 1, 2 instances of FInstanceExecParam are created and sent to host1 and host2 for execution. If the global concurrency is set to 3, 3 instances of FInstanceExecParam are created on this host1, and three instances of FInstanceExecParam are created on host2. Each instance scans one replica, equivalent to initiating 6 RPC requests."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(34760).c,width:"1080",height:"545"})),(0,i.yg)("h1",{id:"10-summary"},"10 Summary"),(0,i.yg)("p",null,"This article first briefly introduces Doris and then introduces the general process of SQL parsing: lexical analysis, syntax analysis, generating logical plans, and generating physical plans. Then, it presents the overall architecture of DorisSQL parsing. In the end, the five processes:  Parse, Analyze, SinglePlan, DistributedPlan, and Schedule are explained in detail, and an in-depth explanation is given of the algorithm principle and code implementation."),(0,i.yg)("p",null,"Doris complies with the standard methods of SQL parsing. Still, according to the underlying storage architecture and distributed characteristics, many optimizations have been made in SQL parsing to achieve maximum parallelism and minimize network transmission, reducing a lot of burden on the SQL execution level."))}d.isMDXComponent=!0},15660:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_10_en-e99cc952e6ef7e1500565bffbd73da18.png"},9088:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_11_en-df9efe7a2e23bc2caa676a52414ed916.png"},7160:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_12_en-fc24ac9080f5429b9e7a871a34192f97.png"},84732:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_13_en-11d11e8bdcacdc813f16f698e3c7cb6d.png"},34760:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_14_en-584e7935ee2ef6eb13e0cd4dada6ac8d.png"},14988:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_1_en-0c09f140305ed3879a5bdd86428f0f1c.png"},37328:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_2_en-3288af3435350e506b2d1f6314172e64.png"},34604:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_3_en-7a6ac1b525922fce20195f2224d176ad.png"},23412:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_4_en-cd2aa449d728cd42554bbf7ddbdbaad6.png"},972:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_5_en-cd3c8dd60e28999551acce60541797d2.png"},56484:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_6_en-39088e65b97c95938d6cf9c1aba359e8.png"},53028:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_7_en-3b659a292f7c875ca9651197305c47ab.png"},93896:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_8_en-021b337867f379cc036dfbe34f5fe9f8.png"},63924:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/Figure_9_en-cceafd6d3dd41c1765b4dbbf3ce047e1.png"}}]);