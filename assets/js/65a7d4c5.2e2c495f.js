"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48504],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),s=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(g.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,y=u["".concat(g,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(y,l(l({ref:n},p),{},{components:t})):a.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30624:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(45072),r=(t(11504),t(95788));const i={title:"GROUPING_ID",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/aggregate-functions/grouping_id",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/grouping_id",title:"GROUPING_ID",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/aggregate-functions/grouping_id.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/grouping_id",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/grouping_id",draft:!1,tags:[],version:"1.2",frontMatter:{title:"GROUPING_ID",language:"en"},sidebar:"docs",previous:{title:"GROUPING",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/grouping"},next:{title:"to_bitmap",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/to_bitmap"}},g={},s=[{value:"GROUPING_ID",id:"grouping_id",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Comparing GROUPING_ID() to GROUPING()",id:"comparing-grouping_id-to-grouping",level:4},{value:"Technical Definition of GROUPING_ID()",id:"technical-definition-of-grouping_id",level:4},{value:"GROUPING_ID() Equivalents",id:"grouping_id-equivalents",level:4},{value:"Example",id:"example",level:3},{value:"A. Using GROUPING_ID to identify grouping levels",id:"a-using-grouping_id-to-identify-grouping-levels",level:4},{value:"B. Using GROUPING_ID to filter a result set",id:"b-using-grouping_id-to-filter-a-result-set",level:4},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"grouping_id"},"GROUPING_ID"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"GROUPING_ID"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Is a function that computes the level of grouping. ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING_ID")," can be used only in the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT <select> list"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"HAVING"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"ORDER BY")," clauses when ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUP BY")," is specified."),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GROUPING_ID ( <column_expression>[ ,...n ] )\n")),(0,r.yg)("h4",{id:"arguments"},"Arguments"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<column_expression>")),(0,r.yg)("p",null,"Is a ",(0,r.yg)("inlineCode",{parentName:"p"},"column_expression")," in a GROUP BY clause."),(0,r.yg)("h4",{id:"return-type"},"Return Type"),(0,r.yg)("p",null,"BIGINT"),(0,r.yg)("h4",{id:"remarks"},"Remarks"),(0,r.yg)("p",null,"The GROUPING_ID's ",(0,r.yg)("inlineCode",{parentName:"p"},"<column_expression>")," must exactly match the expression in the ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUP BY")," list. For example, if you are grouping by ",(0,r.yg)("inlineCode",{parentName:"p"},"user_id"),", use ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING_ID (user_id)"),"; or if you are grouping by ",(0,r.yg)("inlineCode",{parentName:"p"},"name"),", use ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING_ID (name)"),"."),(0,r.yg)("h4",{id:"comparing-grouping_id-to-grouping"},"Comparing GROUPING_ID() to GROUPING()"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING_ID(<column_expression> [ ,...n ])")," inputs the equivalent of the ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING(<column_expression>)")," return for each column in its column list in each output row as a string of ones and zeros. GROUPING_ID interprets that string as a base-2 number and returns the equivalent integer. For example consider the following statement: ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT a, b, c, SUM(d), GROUPING_ID(a,b,c) FROM T GROUP BY <group by list>"),". The following table shows the GROUPING_ID() input and output values."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Columns aggregated"),(0,r.yg)("th",{parentName:"tr",align:null},"GROUPING_ID (a, b, c) input = GROUPING(a) + GROUPING(b) + GROUPING(c)"),(0,r.yg)("th",{parentName:"tr",align:null},"GROUPING_ID () output"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"a")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"100")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"4"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"b")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"010")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"c")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"001")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"1"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ab")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"110")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"6"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ac")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"101")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bc")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"011")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"3"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"abc")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"111")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"7"))))),(0,r.yg)("h4",{id:"technical-definition-of-grouping_id"},"Technical Definition of GROUPING_ID()"),(0,r.yg)("p",null,"Each GROUPING_ID argument must be an element of the GROUP BY list. GROUPING_ID() returns an integer bitmap whose lowest N bits may be lit. A lit bit indicates the corresponding argument is not a grouping column for the given output row. The lowest-order bit corresponds to argument N, and the (N-1)\u1d57\u02b0 lowest-order bit corresponds to argument 1."),(0,r.yg)("h4",{id:"grouping_id-equivalents"},"GROUPING_ID() Equivalents"),(0,r.yg)("p",null,"For a single grouping query, ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING (<column_expression>)")," is equivalent to ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING_ID(<column_expression>)"),", and both return 0.\nFor example, the following statements are equivalent:"),(0,r.yg)("p",null,"Statement A:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT GROUPING_ID(A,B)  \nFROM T   \nGROUP BY CUBE(A,B)\n")),(0,r.yg)("p",null,"Statement B:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT 3 FROM T GROUP BY ()  \nUNION ALL  \nSELECT 1 FROM T GROUP BY A  \nUNION ALL  \nSELECT 2 FROM T GROUP BY B  \nUNION ALL  \nSELECT 0 FROM T GROUP BY A,B\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before starting our example, We first prepare the following data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employee (\n  uid        INT,\n  name       VARCHAR(32),\n  level      VARCHAR(32),\n  title      VARCHAR(32),\n  department VARCHAR(32),\n  hiredate   DATE\n)\nUNIQUE KEY(uid)\nDISTRIBUTED BY HASH(uid) BUCKETS 1\nPROPERTIES (\n  \"replication_num\" = \"1\"\n);\n\nINSERT INTO employee VALUES\n  (1, 'Abby', 'Senior', 'President', 'Board of Directors', '1999-11-13'),\n  (2, 'Bob', 'Senior', 'Vice-President', 'Board of Directors', '1999-11-13'),\n  (3, 'Candy', 'Senior', 'System Engineer', 'Technology', '2005-3-7'),\n  (4, 'Devere', 'Senior', 'Hardware Engineer', 'Technology', '2006-7-9'),\n  (5, 'Emilie', 'Senior', 'System Analyst', 'Technology', '2003-8-28'),\n  (6, 'Fredrick', 'Senior', 'Sales Manager', 'Sales', '2004-9-7'),\n  (7, 'Gitel', 'Assistant', 'Business Executive', 'Sales', '2003-3-19'),\n  (8, 'Haden', 'Trainee', 'Sales Assistant', 'Sales', '2007-6-30'),\n  (9, 'Irene', 'Assistant', 'Business Executive', 'Sales', '2005-10-20'),\n  (10, 'Jankin', 'Senior', 'Marketing Supervisor', 'Marketing', '2001-4-13'),\n  (11, 'Louis', 'Trainee', 'Marketing Assistant', 'Marketing', '2007-8-2'),\n  (12, 'Martin', 'Trainee', 'Marketing Assistant', 'Marketing', '2007-7-1'),\n  (13, 'Nasir', 'Assistant', 'Marketing Executive', 'Marketing', '2004-9-3');\n")),(0,r.yg)("p",null,"Here is the result."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+------+----------+-----------+----------------------+--------------------+------------+\n| uid  | name     | level     | title                | department         | hiredate   |\n+------+----------+-----------+----------------------+--------------------+------------+\n|    1 | Abby     | Senior    | President            | Board of Directors | 1999-11-13 |\n|    2 | Bob      | Senior    | Vice-President       | Board of Directors | 1999-11-13 |\n|    3 | Candy    | Senior    | System Engineer      | Technology         | 2005-03-07 |\n|    4 | Devere   | Senior    | Hardware Engineer    | Technology         | 2006-07-09 |\n|    5 | Emilie   | Senior    | System Analyst       | Technology         | 2003-08-28 |\n|    6 | Fredrick | Senior    | Sales Manager        | Sales              | 2004-09-07 |\n|    7 | Gitel    | Assistant | Business Executive   | Sales              | 2003-03-19 |\n|    8 | Haden    | Trainee   | Sales Assistant      | Sales              | 2007-06-30 |\n|    9 | Irene    | Assistant | Business Executive   | Sales              | 2005-10-20 |\n|   10 | Jankin   | Senior    | Marketing Supervisor | Marketing          | 2001-04-13 |\n|   11 | Louis    | Trainee   | Marketing Assistant  | Marketing          | 2007-08-02 |\n|   12 | Martin   | Trainee   | Marketing Assistant  | Marketing          | 2007-07-01 |\n|   13 | Nasir    | Assistant | Marketing Executive  | Marketing          | 2004-09-03 |\n+------+----------+-----------+----------------------+--------------------+------------+\n13 rows in set (0.01 sec)\n")),(0,r.yg)("h4",{id:"a-using-grouping_id-to-identify-grouping-levels"},"A. Using GROUPING_ID to identify grouping levels"),(0,r.yg)("p",null,"The following example returns the count of employees by ",(0,r.yg)("inlineCode",{parentName:"p"},"department")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"level"),". GROUPING_ID() is used to create a value for each row in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Job Title")," column that identifies its level of aggregation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  department,\n  CASE \n    WHEN GROUPING_ID(department, level) = 0 THEN level\n    WHEN GROUPING_ID(department, level) = 1 THEN CONCAT('Total: ', department)\n    WHEN GROUPING_ID(department, level) = 3 THEN 'Total: Company'\n    ELSE 'Unknown'\n  END AS 'Job Title',\n  COUNT(uid) AS 'Employee Count'\nFROM employee \nGROUP BY ROLLUP(department, level)\nORDER BY GROUPING_ID(department, level) ASC;\n")),(0,r.yg)("p",null,"Here is the result."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+--------------------+---------------------------+----------------+\n| department         | Job Title                 | Employee Count |\n+--------------------+---------------------------+----------------+\n| Board of Directors | Senior                    |              2 |\n| Technology         | Senior                    |              3 |\n| Sales              | Senior                    |              1 |\n| Sales              | Assistant                 |              2 |\n| Sales              | Trainee                   |              1 |\n| Marketing          | Senior                    |              1 |\n| Marketing          | Trainee                   |              2 |\n| Marketing          | Assistant                 |              1 |\n| Board of Directors | Total: Board of Directors |              2 |\n| Technology         | Total: Technology         |              3 |\n| Sales              | Total: Sales              |              4 |\n| Marketing          | Total: Marketing          |              4 |\n| NULL               | Total: Company            |             13 |\n+--------------------+---------------------------+----------------+\n13 rows in set (0.01 sec)\n")),(0,r.yg)("h4",{id:"b-using-grouping_id-to-filter-a-result-set"},"B. Using GROUPING_ID to filter a result set"),(0,r.yg)("p",null,"In the following code, to return only the rows that have the count of  senior in department."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  department,\n  CASE \n    WHEN GROUPING_ID(department, level) = 0 THEN level\n    WHEN GROUPING_ID(department, level) = 1 THEN CONCAT('Total: ', department)\n    WHEN GROUPING_ID(department, level) = 3 THEN 'Total: Company'\n    ELSE 'Unknown'\n  END AS 'Job Title',\n  COUNT(uid)\nFROM employee \nGROUP BY ROLLUP(department, level)\nHAVING `Job Title` IN ('Senior');\n")),(0,r.yg)("p",null,"Here is the result."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+--------------------+-----------+--------------+\n| department         | Job Title | count(`uid`) |\n+--------------------+-----------+--------------+\n| Board of Directors | Senior    |            2 |\n| Technology         | Senior    |            3 |\n| Sales              | Senior    |            1 |\n| Marketing          | Senior    |            1 |\n+--------------------+-----------+--------------+\n5 rows in set (0.01 sec)\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"GROUPING_ID"),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("p",null,"For more information, see also:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/grouping"},"GROUPING"))))}d.isMDXComponent=!0}}]);