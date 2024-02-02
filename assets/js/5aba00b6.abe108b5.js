"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[596],{95788:(e,t,a)=>{a.d(t,{Iu:()=>m,yg:()=>g});var n=a(11504);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(45072),o=(a(11504),a(95788));const r={title:"Import Local Data",language:"en"},l=void 0,i={unversionedId:"data-operate/import/import-scenes/local-file-load",id:"version-2.0/data-operate/import/import-scenes/local-file-load",title:"Import Local Data",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/import/import-scenes/local-file-load.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/local-file-load",permalink:"/docs/data-operate/import/import-scenes/local-file-load",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Import Local Data",language:"en"},sidebar:"docs",previous:{title:"Import Overview",permalink:"/docs/data-operate/import/load-manual"},next:{title:"External Storage Data Import",permalink:"/docs/data-operate/import/import-scenes/external-storage-load"}},s={},p=[{value:"Stream Load",id:"stream-load",level:2},{value:"Import Data",id:"import-data",level:3},{value:"Import Suggestion",id:"import-suggestion",level:3},{value:"Java Code Examples",id:"java-code-examples",level:3},{value:"MySql LOAD",id:"mysql-load",level:2},{value:"Import Data",id:"import-data-1",level:3},{value:"Import Suggestion",id:"import-suggestion-1",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"import-local-data"},"Import Local Data"),(0,o.yg)("p",null,"The following mainly introduces how to import local data in client."),(0,o.yg)("p",null,"Now Doris support two way to load data from client local file:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/data-operate/import/import-way/stream-load-manual"},"Stream Load")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/data-operate/import/import-way/mysql-load-manual"},"MySql Load"))),(0,o.yg)("h2",{id:"stream-load"},"Stream Load"),(0,o.yg)("p",null,"Stream Load is used to import local files into Doris."),(0,o.yg)("p",null,"Unlike the submission methods of other commands, Stream Load communicates with Doris through the HTTP protocol."),(0,o.yg)("p",null,"The HOST:PORT involved in this method should be the HTTP protocol port."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"BE's HTTP protocol port, the default is 8040."),(0,o.yg)("li",{parentName:"ul"},"FE's HTTP protocol port, the default is 8030. However, it must be ensured that the network of the machine where the client is located can connect to the machine where the BE is located.")),(0,o.yg)("p",null,"In this document, we use the ",(0,o.yg)("a",{parentName:"p",href:"https://curl.se/docs/manpage.html"},"curl")," command as an example to demonstrate how to import data."),(0,o.yg)("p",null,"At the end of the document, we give a code example of importing data using Java"),(0,o.yg)("h3",{id:"import-data"},"Import Data"),(0,o.yg)("p",null,"The request body of Stream Load is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"PUT /api/{db}/{table}/_stream_load\n")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a table"),(0,o.yg)("p",{parentName:"li"},"Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"CREATE TABLE")," command to create a table in the ",(0,o.yg)("inlineCode",{parentName:"p"},"demo")," to store the data to be imported. For the specific import method, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")," command manual. An example is as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS load_local_file_test\n(\n    id INT,\n    age TINYINT,\n    name VARCHAR(50)\n)\nunique key(id)\nDISTRIBUTED BY HASH(id) BUCKETS 3;\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Import data"),(0,o.yg)("p",{parentName:"li"},"Execute the following curl command to import the local file:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-text"},' curl -u user:passwd -H "label:load_local_file_test" -T /path/to/local/demo.txt http://host:port/api/demo/load_local_file_test/_stream_load\n')),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"user:passwd is the user created in Doris. The initial user is admin/root, and the password is blank in the initial state."),(0,o.yg)("li",{parentName:"ul"},"host:port is the HTTP protocol port of BE, the default is 8040, which can be viewed on the Doris cluster WEB UI page."),(0,o.yg)("li",{parentName:"ul"},"label: Label can be specified in the Header to uniquely identify this import task.")),(0,o.yg)("p",{parentName:"li"},"For more advanced operations of the Stream Load command, see ",(0,o.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"Stream Load")," Command documentation.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Wait for the import result"),(0,o.yg)("p",{parentName:"li"},"The Stream Load command is a synchronous command, and a successful return indicates that the import is successful. If the imported data is large, a longer waiting time may be required. Examples are as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "TxnId": 1003,\n    "Label": "load_local_file_test",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 1000000,\n    "NumberLoadedRows": 1000000,\n    "NumberFilteredRows": 1,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 40888898,\n    "LoadTimeMs": 2144,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 2,\n    "ReadDataTimeMs": 325,\n    "WriteDataTimeMs": 1933,\n    "CommitAndPublishTimeMs": 106,\n    "ErrorURL": "http://192.168.1.1:8042/api/_load_error_log?file=__shard_0/error_log_insert_stmt_db18266d4d9b4ee5-abb00ddd64bdf005_db18266d4d9b4ee5_abb00ddd64bdf005"\n}\n')),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"The status of the ",(0,o.yg)("inlineCode",{parentName:"li"},"Status")," field is ",(0,o.yg)("inlineCode",{parentName:"li"},"Success"),", which means the import is successful."),(0,o.yg)("li",{parentName:"ul"},"For details of other fields, please refer to the ",(0,o.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"Stream Load")," command documentation.")))),(0,o.yg)("h3",{id:"import-suggestion"},"Import Suggestion"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Stream Load can only import local files."),(0,o.yg)("li",{parentName:"ul"},"It is recommended to limit the amount of data for an import request to 1 - 2 GB. If you have a large number of local files, you can submit them concurrently in batches.")),(0,o.yg)("h3",{id:"java-code-examples"},"Java Code Examples"),(0,o.yg)("p",null,"Here is a simple JAVA example to execute Stream Load:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'package demo.doris;\n\nimport org.apache.commons.codec.binary.Base64;\nimport org.apache.http.HttpHeaders;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpPut;\nimport org.apache.http.entity.FileEntity;\nimport org.apache.http.impl.client.CloseableHttpClient;\nimport org.apache.http.impl.client.DefaultRedirectStrategy;\nimport org.apache.http.impl.client.HttpClientBuilder;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.util.EntityUtils;\n\nimport java.io.File;\nimport java.io.IOException;\nimport java.nio.charset.StandardCharsets;\n\n/*\nThis is an example of Doris Stream Load, which requires dependencies\n<dependency>\n    <groupId>org.apache.httpcomponents</groupId>\n    <artifactId>httpclient</artifactId>\n    <version>4.5.13</version>\n</dependency>\n */\npublic class DorisStreamLoader {\n    //You can choose to fill in the FE address and the http_port of the FE, but the connectivity between the client and the BE node must be guaranteed.\n    private final static String HOST = "your_host";\n    private final static int PORT = 8040;\n    private final static String DATABASE = "db1"; // database to import\n    private final static String TABLE = "tbl1"; // table to import\n    private final static String USER = "root"; // Doris username\n    private final static String PASSWD = ""; // Doris password\n    private final static String LOAD_FILE_NAME = "/path/to/1.txt"; // local file path to import\n\n    private final static String loadUrl = String.format("http://%s:%s/api/%s/%s/_stream_load",\n            HOST, PORT, DATABASE, TABLE);\n\n    private final static HttpClientBuilder httpClientBuilder = HttpClients\n            .custom()\n            .setRedirectStrategy(new DefaultRedirectStrategy() {\n                @Override\n                protected boolean isRedirectable(String method) {\n                    // If the connection target is FE, you need to handle 307 redirect.\n                    return true;\n                }\n            });\n\n    public void load(File file) throws Exception {\n        try (CloseableHttpClient client = httpClientBuilder.build()) {\n            HttpPut put = new HttpPut(loadUrl);\n            put.setHeader(HttpHeaders.EXPECT, "100-continue");\n            put.setHeader(HttpHeaders.AUTHORIZATION, basicAuthHeader(USER, PASSWD));\n\n            // You can set stream load related properties in Header, here we set label and column_separator.\n            put.setHeader("label","label1");\n            put.setHeader("column_separator",",");\n\n            // Set the import file.\n            // StringEntity can also be used here to transfer arbitrary data.\n            FileEntity entity = new FileEntity(file);\n            put.setEntity(entity);\n\n            try (CloseableHttpResponse response = client.execute(put)) {\n                String loadResult = "";\n                if (response.getEntity() != null) {\n                    loadResult = EntityUtils.toString(response.getEntity());\n                }\n\n                final int statusCode = response.getStatusLine().getStatusCode();\n                if (statusCode != 200) {\n                    throw new IOException(\n                            String.format("Stream load failed. status: %s load result: %s", statusCode, loadResult));\n                }\n\n                System.out.println("Get load result: " + loadResult);\n            }\n        }\n    }\n\n    private String basicAuthHeader(String username, String password) {\n        final String tobeEncode = username + ":" + password;\n        byte[] encoded = Base64.encodeBase64(tobeEncode.getBytes(StandardCharsets.UTF_8));\n        return "Basic " + new String(encoded);\n    }\n\n    public static void main(String[] args) throws Exception{\n        DorisStreamLoader loader = new DorisStreamLoader();\n        File file = new File(LOAD_FILE_NAME);\n        loader.load(file);\n    }\n}\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: The version of http client here is 4.5.13"),(0,o.yg)("pre",{parentName:"blockquote"},(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.apache.httpcomponents</groupId>\n<artifactId>httpclient</artifactId>\n<version>4.5.13</version>\n</dependency>\n"))),(0,o.yg)("h2",{id:"mysql-load"},"MySql LOAD"),(0,o.yg)("version",{since:"dev"},"Example of mysql load"),(0,o.yg)("h3",{id:"import-data-1"},"Import Data"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a table"),(0,o.yg)("p",{parentName:"li"},"Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"CREATE TABLE")," command to create a table in the ",(0,o.yg)("inlineCode",{parentName:"p"},"demo")," database to store the data to be imported."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS load_local_file_test\n(\nid INT,\nage TINYINT,\nname VARCHAR(50)\n)\nunique key(id)\nDISTRIBUTED BY HASH(id) BUCKETS 3;\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Import data\nExcute fellowing sql statmeent in the mysql client to load client local file:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA\nLOCAL\nINFILE '/path/to/local/demo.txt'\nINTO TABLE demo.load_local_file_test\n")),(0,o.yg)("p",{parentName:"li"},"For more advanced operations of the MySQL Load command, see ",(0,o.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD"},"MySQL Load")," Command documentation.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Wait for the import result"),(0,o.yg)("p",{parentName:"li"},"The MySql Load command is a synchronous command, and a successful return indicates that the import is successful. If the imported data is large, a longer waiting time may be required. Examples are as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-text"},"Query OK, 1 row affected (0.17 sec)\nRecords: 1  Deleted: 0  Skipped: 0  Warnings: 0\n")),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Load success if the client show the return rows. Otherwise sql statement will throw an exception and show the error message in client."),(0,o.yg)("li",{parentName:"ul"},"For details of other fields, please refer to the ",(0,o.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD"},"MySQL Load")," command documentation.")))),(0,o.yg)("h3",{id:"import-suggestion-1"},"Import Suggestion"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"MySql Load can only import local files(which can be client local file or fe local file) and only support csv format."),(0,o.yg)("li",{parentName:"ul"},"It is recommended to limit the amount of data for an import request to 1 - 2 GB. If you have a large number of local files, you can submit them concurrently in batches.")))}c.isMDXComponent=!0}}]);