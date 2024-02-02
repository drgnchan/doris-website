"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[91744],{96824:e=>{e.exports=JSON.parse('{"pluginId":"community","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"community":[{"type":"link","label":"Join Community","href":"/community/join-community","docId":"join-community"},{"type":"link","label":"Doris Team","href":"/community/team","docId":"team"},{"type":"link","label":"Subscribe Mailing Lists","href":"/community/subscribe-mail-list","docId":"subscribe-mail-list"},{"type":"link","label":"Feedback","href":"/community/feedback","docId":"feedback"},{"type":"link","label":"doris future project","href":"/community/doris-future","docId":"doris-future"},{"type":"category","label":"How to Contribute","items":[{"type":"link","label":"Contribute to Doris","href":"/community/how-to-contribute/","docId":"how-to-contribute/how-to-contribute"},{"type":"link","label":"Contributor Guide","href":"/community/how-to-contribute/contributor-guide","docId":"how-to-contribute/contributor-guide"},{"type":"link","label":"How to Become Doris Committer","href":"/community/how-to-contribute/how-to-be-a-committer","docId":"how-to-contribute/how-to-be-a-committer"},{"type":"link","label":"Commit Format Specification","href":"/community/how-to-contribute/commit-format-specification","docId":"how-to-contribute/commit-format-specification"},{"type":"link","label":"Code Submission Guide","href":"/community/how-to-contribute/pull-request","docId":"how-to-contribute/pull-request"},{"type":"link","label":"Docs Contribute","href":"/community/how-to-contribute/contribute-doc","docId":"how-to-contribute/contribute-doc"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Release Process & Verification","items":[{"type":"link","label":"Release Preparation","href":"/community/release-and-verify/release-prepare","docId":"release-and-verify/release-prepare"},{"type":"link","label":"Release Doris Core","href":"/community/release-and-verify/release-doris-core","docId":"release-and-verify/release-doris-core"},{"type":"link","label":"Release Doris Connectors","href":"/community/release-and-verify/release-doris-connectors","docId":"release-and-verify/release-doris-connectors"},{"type":"link","label":"Release Doris Manager","href":"/community/release-and-verify/release-doris-manager","docId":"release-and-verify/release-doris-manager"},{"type":"link","label":"Release Doris Shade","href":"/community/release-and-verify/release-doris-shade","docId":"release-and-verify/release-doris-shade"},{"type":"link","label":"Release Doris SDK","href":"/community/release-and-verify/release-doris-sdk","docId":"release-and-verify/release-doris-sdk"},{"type":"link","label":"Complete Release","href":"/community/release-and-verify/release-complete","docId":"release-and-verify/release-complete"},{"type":"link","label":"Verify the Apache release version","href":"/community/release-and-verify/release-verify","docId":"release-and-verify/release-verify"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Security","href":"/community/security","docId":"security"},{"type":"category","label":"Design Documents","items":[{"type":"link","label":"Doris Storage File Format Optimization","href":"/community/design/doris_storage_optimization","docId":"design/doris_storage_optimization"},{"type":"link","label":"GROUPING SETS DESIGN","href":"/community/design/grouping_sets_design","docId":"design/grouping_sets_design"},{"type":"link","label":"Metadata Design Document","href":"/community/design/metadata-design","docId":"design/metadata-design"},{"type":"link","label":"Spark Load","href":"/community/design/spark_load","docId":"design/spark_load"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Developer Guide","items":[{"type":"link","label":"Debug Tool","href":"/community/developer-guide/debug-tool","docId":"developer-guide/debug-tool"},{"type":"link","label":"Doris Docker quick build development environment","href":"/community/developer-guide/docker-dev","docId":"developer-guide/docker-dev"},{"type":"link","label":"Doris BE Storage Layer Benchmark Tool","href":"/community/developer-guide/benchmark-tool","docId":"developer-guide/benchmark-tool"},{"type":"link","label":"Setting FE dev env - Eclipse","href":"/community/developer-guide/fe-eclipse-dev","docId":"developer-guide/fe-eclipse-dev"},{"type":"link","label":"Setting Up dev env for FE - IntelliJ IDEA","href":"/community/developer-guide/fe-idea-dev","docId":"developer-guide/fe-idea-dev"},{"type":"link","label":"FE development and debugging environment - Visual Studio Code (VSCode)","href":"/community/developer-guide/fe-vscode-dev","docId":"developer-guide/fe-vscode-dev"},{"type":"link","label":"BE development and debugging environment under Linux","href":"/community/developer-guide/be-vscode-dev","docId":"developer-guide/be-vscode-dev"},{"type":"link","label":"Development and Debugging of Apache Doris BE -- Clion","href":"/community/developer-guide/be-clion-dev","docId":"developer-guide/be-clion-dev"},{"type":"category","label":"Mac Local Dev","items":[{"type":"link","label":"Dev & Debug prepare on Mac","href":"/community/developer-guide/mac-dev/dev-prepare","docId":"developer-guide/mac-dev/dev-prepare"},{"type":"link","label":"Setting Up Dev Env on Mac for Doris BE - CLion","href":"/community/developer-guide/mac-dev/be-clion-dev","docId":"developer-guide/mac-dev/be-clion-dev"},{"type":"link","label":"Setting Up Dev Env on Mac for Doris FE - IntelliJ IDEA","href":"/community/developer-guide/mac-dev/fe-idea-dev","docId":"developer-guide/mac-dev/fe-idea-dev"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Java Format Code","href":"/community/developer-guide/java-format-code","docId":"developer-guide/java-format-code"},{"type":"link","label":"C++ Format Code","href":"/community/developer-guide/cpp-format-code","docId":"developer-guide/cpp-format-code"},{"type":"link","label":"C++ Code Diagnostic","href":"/community/developer-guide/cpp-diagnostic-code","docId":"developer-guide/cpp-diagnostic-code"},{"type":"link","label":"How to share blogs","href":"/community/developer-guide/how-to-share-blogs","docId":"developer-guide/how-to-share-blogs"},{"type":"link","label":"Bitmap/HLL data format","href":"/community/developer-guide/bitmap-hll-file-format","docId":"developer-guide/bitmap-hll-file-format"},{"type":"link","label":"Github Checks","href":"/community/developer-guide/github-checks","docId":"developer-guide/github-checks"},{"type":"link","label":"Regression Testing","href":"/community/developer-guide/regression-testing","docId":"developer-guide/regression-testing"}],"collapsed":true,"collapsible":true},{"type":"link","href":"https://cwiki.apache.org/confluence/display/DORIS/Doris+Improvement+Proposals","label":"Improvement Proposals"}]},"docs":{"design/doris_storage_optimization":{"id":"design/doris_storage_optimization","title":"Doris Storage File Format Optimization","description":"\x3c!--","sidebar":"community"},"design/grouping_sets_design":{"id":"design/grouping_sets_design","title":"GROUPING SETS DESIGN","description":"\x3c!--","sidebar":"community"},"design/metadata-design":{"id":"design/metadata-design","title":"Metadata Design Document","description":"\x3c!--","sidebar":"community"},"design/spark_load":{"id":"design/spark_load","title":"Spark Load","description":"\x3c!--","sidebar":"community"},"developer-guide/be-clion-dev":{"id":"developer-guide/be-clion-dev","title":"Development and Debugging of Apache Doris BE -- Clion","description":"\x3c!--","sidebar":"community"},"developer-guide/be-vscode-dev":{"id":"developer-guide/be-vscode-dev","title":"BE development and debugging environment under Linux","description":"\x3c!--","sidebar":"community"},"developer-guide/benchmark-tool":{"id":"developer-guide/benchmark-tool","title":"Doris BE Storage Layer Benchmark Tool","description":"\x3c!--","sidebar":"community"},"developer-guide/bitmap-hll-file-format":{"id":"developer-guide/bitmap-hll-file-format","title":"Bitmap/HLL data format","description":"\x3c!--","sidebar":"community"},"developer-guide/cpp-diagnostic-code":{"id":"developer-guide/cpp-diagnostic-code","title":"C++ Code Diagnostic","description":"\x3c!--","sidebar":"community"},"developer-guide/cpp-format-code":{"id":"developer-guide/cpp-format-code","title":"C++ Format Code","description":"\x3c!--","sidebar":"community"},"developer-guide/debug-tool":{"id":"developer-guide/debug-tool","title":"Debug Tool","description":"\x3c!--","sidebar":"community"},"developer-guide/docker-dev":{"id":"developer-guide/docker-dev","title":"Doris Docker quick build development environment","description":"\x3c!--","sidebar":"community"},"developer-guide/fe-eclipse-dev":{"id":"developer-guide/fe-eclipse-dev","title":"Setting FE dev env - Eclipse","description":"\x3c!--","sidebar":"community"},"developer-guide/fe-idea-dev":{"id":"developer-guide/fe-idea-dev","title":"Setting Up dev env for FE - IntelliJ IDEA","description":"\x3c!--","sidebar":"community"},"developer-guide/fe-vscode-dev":{"id":"developer-guide/fe-vscode-dev","title":"FE development and debugging environment - Visual Studio Code (VSCode)","description":"\x3c!--","sidebar":"community"},"developer-guide/github-checks":{"id":"developer-guide/github-checks","title":"Github Checks","description":"\x3c!--","sidebar":"community"},"developer-guide/how-to-share-blogs":{"id":"developer-guide/how-to-share-blogs","title":"How to share blogs","description":"\x3c!--","sidebar":"community"},"developer-guide/java-format-code":{"id":"developer-guide/java-format-code","title":"Java Format Code","description":"\x3c!--","sidebar":"community"},"developer-guide/mac-dev/be-clion-dev":{"id":"developer-guide/mac-dev/be-clion-dev","title":"Setting Up Dev Env on Mac for Doris BE - CLion","description":"\x3c!--","sidebar":"community"},"developer-guide/mac-dev/dev-prepare":{"id":"developer-guide/mac-dev/dev-prepare","title":"Dev & Debug prepare on Mac","description":"\x3c!--","sidebar":"community"},"developer-guide/mac-dev/fe-idea-dev":{"id":"developer-guide/mac-dev/fe-idea-dev","title":"Setting Up Dev Env on Mac for Doris FE - IntelliJ IDEA","description":"\x3c!--","sidebar":"community"},"developer-guide/minidump":{"id":"developer-guide/minidump","title":"Minidump","description":"\x3c!--"},"developer-guide/regression-testing":{"id":"developer-guide/regression-testing","title":"Regression Testing","description":"\x3c!--","sidebar":"community"},"doris-future":{"id":"doris-future","title":"doris future project","description":"\x3c!--","sidebar":"community"},"feedback":{"id":"feedback","title":"Feedback","description":"\x3c!--","sidebar":"community"},"how-to-contribute/commit-format-specification":{"id":"how-to-contribute/commit-format-specification","title":"Commit Format Specification","description":"\x3c!--","sidebar":"community"},"how-to-contribute/contribute-doc":{"id":"how-to-contribute/contribute-doc","title":"Docs Contribute","description":"\x3c!--","sidebar":"community"},"how-to-contribute/contributor-guide":{"id":"how-to-contribute/contributor-guide","title":"Contributor Guide","description":"\x3c!--","sidebar":"community"},"how-to-contribute/how-to-be-a-committer":{"id":"how-to-contribute/how-to-be-a-committer","title":"How to Become Doris Committer","description":"\x3c!--","sidebar":"community"},"how-to-contribute/how-to-contribute":{"id":"how-to-contribute/how-to-contribute","title":"Contribute to Doris","description":"\x3c!--","sidebar":"community"},"how-to-contribute/pull-request":{"id":"how-to-contribute/pull-request","title":"Code Submission Guide","description":"\x3c!--","sidebar":"community"},"join-community":{"id":"join-community","title":"Join Community","description":"\x3c!--","sidebar":"community"},"release-and-verify/release-complete":{"id":"release-and-verify/release-complete","title":"Complete Release","description":"\x3c!--","sidebar":"community"},"release-and-verify/release-doris-connectors":{"id":"release-and-verify/release-doris-connectors","title":"Release Doris Connectors","description":"\x3c!--","sidebar":"community"},"release-and-verify/release-doris-core":{"id":"release-and-verify/release-doris-core","title":"Release Doris Core","description":"\x3c!--","sidebar":"community"},"release-and-verify/release-doris-manager":{"id":"release-and-verify/release-doris-manager","title":"Release Doris Manager","description":"\x3c!--","sidebar":"community"},"release-and-verify/release-doris-sdk":{"id":"release-and-verify/release-doris-sdk","title":"Release Doris SDK","description":"\x3c!--","sidebar":"community"},"release-and-verify/release-doris-shade":{"id":"release-and-verify/release-doris-shade","title":"Release Doris Shade","description":"\x3c!--","sidebar":"community"},"release-and-verify/release-prepare":{"id":"release-and-verify/release-prepare","title":"Release Preparation","description":"\x3c!--","sidebar":"community"},"release-and-verify/release-verify":{"id":"release-and-verify/release-verify","title":"Verify the Apache release version","description":"\x3c!--","sidebar":"community"},"security":{"id":"security","title":"Security","description":"\x3c!--","sidebar":"community"},"subscribe-mail-list":{"id":"subscribe-mail-list","title":"Subscribe Mailing Lists","description":"\x3c!--","sidebar":"community"},"team":{"id":"team","title":"Doris Team","description":"\x3c!--","sidebar":"community"}}}')}}]);