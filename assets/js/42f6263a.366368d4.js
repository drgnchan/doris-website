"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59932],{95788:(t,e,a)=>{a.d(e,{Iu:()=>o,yg:()=>N});var r=a(11504);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),y=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=y(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,o=g(t,["components","mdxType","originalType","parentName"]),m=y(a),s=n,N=m["".concat(d,".").concat(s)]||m[s]||p[s]||l;return a?r.createElement(N,i(i({ref:e},o),{},{components:a})):r.createElement(N,i({ref:e},o))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var g={};for(var d in e)hasOwnProperty.call(e,d)&&(g[d]=e[d]);g.originalType=t,g[m]="string"==typeof t?t:n,i[1]=g;for(var y=2;y<l;y++)i[y]=a[y];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},86084:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>g,toc:()=>y});var r=a(45072),n=(a(11504),a(95788));const l={title:"Doris Error Table",language:"en"},i=void 0,g={unversionedId:"admin-manual/maint-monitor/doris-error-code",id:"version-2.0/admin-manual/maint-monitor/doris-error-code",title:"Doris Error Table",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/maint-monitor/doris-error-code.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/doris-error-code",permalink:"/docs/admin-manual/maint-monitor/doris-error-code",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Doris Error Table",language:"en"},sidebar:"docs",previous:{title:"Description of the return value of the OLAP function on the BE side",permalink:"/docs/admin-manual/maint-monitor/be-olap-error-code"},next:{title:"Tablet metadata management tool",permalink:"/docs/admin-manual/maint-monitor/tablet-meta-tool"}},d={},y=[],o={toc:y},m="wrapper";function p(t){let{components:e,...a}=t;return(0,n.yg)(m,(0,r.c)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"doris-error-table"},"Doris Error Table"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Error  Code"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Info"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1005"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Failed to create the table, give the specific reason in the returned error message")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1007"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The database already exists, you cannot create a database with the same name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1008"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The database does not exist and cannot be deleted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1044"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The database is not authorized to the user and cannot be accessed")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1045"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The user name and password do not match, and the system cannot be accessed")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1046"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The target database to be queried is not specified")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1047"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The user entered an invalid operation instruction")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1049"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The user specified an invalid database")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1050"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Data table already exists")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1051"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Invalid data table")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1052"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified column name is ambiguous, and the corresponding column cannot be uniquely determined")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1053"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Illegal data column is specified for Semi-Join/Anti-Join query")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1054"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified column does not exist in the table")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1058"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of columns selected in the query statement is inconsistent with the number of columns in the query result")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1060"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Duplicate column name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1064"),(0,n.yg)("td",{parentName:"tr",align:"left"},"No alive Backend node")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1066"),(0,n.yg)("td",{parentName:"tr",align:"left"},"A duplicate table alias appears in the query statement")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1094"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Invalid thread ID")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1095"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The owner of a non-thread cannot terminate the running of the thread")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1096"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The query statement does not specify the data table to be queried or operated")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1102"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Incorrect database name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1104"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Incorrect data table name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1105"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Other errors")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1110"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Duplicate columns specified in the subquery")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1111"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Illegal use of aggregate functions in the Where clause")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1113"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The column set of the newly created table cannot be empty")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1115"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Unsupported character set used")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1130"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The client used an unauthorized IP address to access the system")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1132"),(0,n.yg)("td",{parentName:"tr",align:"left"},"No permission to modify user password")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1141"),(0,n.yg)("td",{parentName:"tr",align:"left"},"When revoking user permissions, the permissions that the user does not have are specified")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1142"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The user performed an unauthorized operation")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1166"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Incorrect column name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1193"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Invalid system variable name used")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1203"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of active connections used by the user exceeds the limit")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1211"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Not allowed to create new users")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1227"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Access denied, the user performed an unauthorized operation")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1228"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Session variables cannot be modified by the SET GLOBAL command")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1229"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Global variables should be modified by the SET GLOBAL instruction")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1230"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Related system variables have no default values")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1231"),(0,n.yg)("td",{parentName:"tr",align:"left"},"An invalid value is set to a system variable")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1232"),(0,n.yg)("td",{parentName:"tr",align:"left"},"A value of the wrong data type is set to a system variable")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1248"),(0,n.yg)("td",{parentName:"tr",align:"left"},"No alias is set for the inline view")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1251"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The client does not support the authentication protocol requested by the server; please upgrade the MySQL client")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1286"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The configured storage engine is incorrect")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1298"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The configured time zone is incorrect")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1347"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The object does not match the expected type")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1353"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SELECT and view field lists have different number of columns")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1364"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The field does not allow NULL values, but no default value is set")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1372"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Password length is not enough")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1396"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The operation performed by the user failed to run")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1471"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified table does not allow data to be inserted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1507"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Delete a partition that does not exist, and no condition is specified to delete it if it exists")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1508"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Unable to delete all partitions, please use DROP TABLE instead")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1517"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Duplicate partition name appeared")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1567"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The partition name is incorrect")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1621"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified system variable is read-only")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1735"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified partition name does not exist in the table")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1748"),(0,n.yg)("td",{parentName:"tr",align:"left"},'You cannot insert data into a table with empty partitions. Use "SHOW PARTITIONS FROM tbl" to view the current partition of this table')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1749"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Table partition does not exist")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5000"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified table is not an OLAP table")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5001"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified PROC path is invalid")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5002"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The column name must be explicitly specified in the column substitution")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5003"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The Key column should be sorted before the Value column")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5004"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The table should contain at least 1 Key column")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5005"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Invalid cluster ID")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5006"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Invalid query plan")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5007"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Conflicting query plan")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5008"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Data insertion tips: only applicable to partitioned data tables")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5009"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The PARTITION clause is invalid for INSERT into an unpartitioned table")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5010"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of columns is not equal to the number of select lists in the SELECT statement")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5011"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Unable to resolve table reference")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5012"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified value is not a valid number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5013"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Unsupported time unit")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5014"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Table status is abnormal")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5015"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Partition status is abnormal")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5016"),(0,n.yg)("td",{parentName:"tr",align:"left"},"There is a data import task on the partition")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5017"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified column is not a key column")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5018"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Invalid value format")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5019"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Data copy does not match the version")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5021"),(0,n.yg)("td",{parentName:"tr",align:"left"},"BE node is offline")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5022"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of partitions in a non-partitioned table is not 1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5023"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Nothing in the alter statement")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5024"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Task execution timeout")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5025"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Data insertion operation failed")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5026"),(0,n.yg)("td",{parentName:"tr",align:"left"},"An unsupported data type was used when creating a table with a SELECT statement")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5027"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified parameter is not set")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5028"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified cluster was not found")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5030"),(0,n.yg)("td",{parentName:"tr",align:"left"},"A user does not have permission to access the cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5031"),(0,n.yg)("td",{parentName:"tr",align:"left"},"No parameter specified or invalid parameter")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5032"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of cluster instances is not specified")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5034"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Cluster name already exists")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5035"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Cluster already exists")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5036"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Insufficient BE nodes in the cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5037"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Before deleting the cluster, all databases in the cluster must be deleted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5037"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The BE node with this ID does not exist in the cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5038"),(0,n.yg)("td",{parentName:"tr",align:"left"},"No cluster name specified")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5040"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Unknown cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5041"),(0,n.yg)("td",{parentName:"tr",align:"left"},"No cluster name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5042"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Permission denied")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5043"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of instances should be greater than 0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5046"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The source cluster does not exist")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5047"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The target cluster does not exist")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5048"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The source database does not exist")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5049"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The target database does not exist")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5050"),(0,n.yg)("td",{parentName:"tr",align:"left"},"No cluster selected, please enter the cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5051"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The source database should be connected to the target database first")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5052"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Cluster internal error: BE node error message")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5053"),(0,n.yg)("td",{parentName:"tr",align:"left"},"There is no migration task from the source database to the target database")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5054"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified database is connected to the target database, or data is being migrated")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5055"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Data connection or data migration cannot be performed in the same cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5056"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The database cannot be deleted: it is linked to another database or data is being migrated")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5056"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The database cannot be renamed: it is linked to another database or data is being migrated")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5056"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Insufficient BE nodes in the cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5056"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified number of BE nodes already exist in the cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5059"),(0,n.yg)("td",{parentName:"tr",align:"left"},"There are BE nodes that are offline in the cluster")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5062"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Incorrect cluster name (the name'default_cluster' is a reserved name)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5063"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Type name is incorrect")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5064"),(0,n.yg)("td",{parentName:"tr",align:"left"},"General error message")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5063"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Colocate function has been disabled by the administrator")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5063"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Colocate data table does not exist")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5063"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The Colocate table must be an OLAP table")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5063"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Colocate table should have the same number of copies")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5063"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Colocate table should have the same number of buckets")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5063"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of partition columns of the Colocate table must be the same")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5063"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The data types of the partition columns of the Colocate table must be consistent")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5064"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified table is not a colocate table")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5065"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified operation is invalid")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5065"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified time unit is illegal. The correct units include: HOUR / DAY / WEEK / MONTH")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5066"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The starting value of the dynamic partition should be less than 0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5066"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The dynamic partition start value is not a valid number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5066"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The end value of the dynamic partition should be greater than 0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5066"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The end value of the dynamic partition is not a valid number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5066"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The end value of the dynamic partition is empty")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5067"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of dynamic partition buckets should be greater than 0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5067"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The dynamic partition bucket value is not a valid number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5066"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Dynamic partition bucket value is empty")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5068"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to allow the value of dynamic partition is not a valid Boolean value: true or false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5069"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified dynamic partition name prefix is illegal")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5070"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified operation is forbidden")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5071"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The number of dynamic partition replicas should be greater than 0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5072"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The dynamic partition copy value is not a valid number")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5073"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The original created table stmt is empty")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5074"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Create historical dynamic partition parameters: create_history_partition is invalid, what is expected is: true or false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5076"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified dynamic partition reserved_history_periods is null or empty")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5077"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified dynamic partition reserved_history_periods is invalid")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5078"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The length of specified dynamic partition reserved_history_periods must have pairs of date value")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5079"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The specified dynamic partition reserved_history_periods' first date is larger than the second one")))))}p.isMDXComponent=!0}}]);