(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{987:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装部署elk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装部署elk"}},[s._v("#")]),s._v(" "),a("strong",[s._v("安装部署ELK")])]),s._v(" "),a("h1",{attrs:{id:"_1-环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备"}},[s._v("#")]),s._v(" 1. 环境准备")]),s._v(" "),a("ul",[a("li",[s._v("我使用的系统是centos7.6，使用"),a("strong",[s._v("最小安装")]),s._v("配置：https://www.yuque.com/bithachi/study/sw3brb")]),s._v(" "),a("li",[s._v("使用宝塔面板管理系统：https://www.bt.cn/")]),s._v(" "),a("li",[s._v("jdk安装使用yum：https://www.yuque.com/bithachi/study/eoy9lf")]),s._v(" "),a("li",[s._v("使用的ELK都是tar.gz压缩进行安装使用，ELK下载地址：https://www.elastic.co/cn/downloads/past-releases")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/10385897/1639722552887-25162d4f-082e-4d64-b4d2-07cc2fec2e4a.png",alt:"img"}})]),s._v(" "),a("h1",{attrs:{id:"_2-elasticsearch安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-elasticsearch安装配置"}},[s._v("#")]),s._v(" 2. Elasticsearch安装配置")]),s._v(" "),a("p",[s._v("配置文件：elasticsearch.yml")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http.host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为了使elasticsearch可以访问，所以需要跨域")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http.cors.enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http.cors.allow-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enable security features")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("xpack.security.enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#xpack.security.enrollment.enabled: true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("xpack.security.http.ssl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  keystore.path: certs/http.p12")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enable encryption and mutual authentication between cluster nodes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("xpack.security.transport.ssl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  verification_mode: certificate")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  keystore.path: certs/transport.p12")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  truststore.path: certs/transport.p12")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Create a new cluster with the current node only")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Additional nodes can still join the cluster later")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 注意以下配置可能适用于新版本,不同写法：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("transport.tcp.port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("transport.port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery.zen.ping.unicast.hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.56.101:9300"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery.seed_hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 192.168.56.101"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("这里有一个需要"),a("strong",[s._v("注意")]),s._v("的地方：启动ES的时候，不能使用root用户，因为root的用户的权限太大，ES防止root用户篡改ES配置文件。所以需要重新创建一个用户：例如：es。并进行chown目录授权。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.只添加用户的方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" es\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" es\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" es /opt/elasticsearch-7.13.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.添加用户组的方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" es\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" es "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" es\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" es\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" es:es /opt/elasticsearch-7.13.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切换用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" es\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接执行.sh启动ES")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("es@localhost bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ./elasticsearch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注意： ./bin/elasticsearch是前台启动，当你ctrl+c会终止进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所以我们得后台启动，启动命令为:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("es@localhost bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ./elasticsearch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#验证ES是否启动成功,查看进程:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("es@localhost bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" elasticsearch\nes        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42055")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40767")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":22 pts/0    00:00:28 /opt/elasticsearch-7.13.0/jdk/bin/java "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Xshare:auto")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Des.networkaddress.cache.ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Des.networkaddress.cache.negative.ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:+AlwaysPreTouch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Xss1m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Djava.awt.headless")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dfile.encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF-8 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Djna.nosys")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:-OmitStackTraceInFastThrow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:+ShowCodeDetailsInExceptionMessages")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dio.netty.noUnsafe")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dio.netty.noKeySetOptimization")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dio.netty.recycler.maxCapacityPerThread")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dio.netty.allocator.numDirectArenas")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dlog4j.shutdownHookEnabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Dlog4j2.disable.jmx")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Djava.locale.providers")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SPI,COMPAT --add-opens"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("java.base/java.io"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ALL-UNNAMED "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:+UseG1GC")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Djava.io.tmpdir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/elasticsearch-11881530555992165351 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:+HeapDumpOnOutOfMemoryError")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:HeapDumpPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:ErrorFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("logs/hs_err_pid%p.log -Xlog:gc*,gc+age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("trace,safepoint:file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("logs/gc.log:utctime,pid,tags:filecount"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(",filesize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("64m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Xms909m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Xmx909m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:MaxDirectMemorySize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("477102080")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:G1HeapRegionSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("4m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:InitiatingHeapOccupancyPercent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:G1ReservePercent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Des.path.home")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/elasticsearch-7.13.0 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Des.path.conf")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/elasticsearch-7.13.0/config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Des.distribution.flavor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Des.distribution.type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Des.bundled_jdk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cp")]),s._v(" /opt/elasticsearch-7.13.0/lib/* org.elasticsearch.bootstrap.Elasticsearch\nes        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42254")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42055")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":22 pts/0    00:00:00 /opt/elasticsearch-7.13.0/modules/x-pack-ml/platform/linux-x86_64/bin/controller\nes        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42340")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40767")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":23 pts/0    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto elasticsearch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl验证")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("es@localhost bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:9200\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost.localdomain"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"elasticsearch"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster_uuid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6hRxmxUqQeiHMxZ6qcASPw"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7.13.0"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_flavor"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_type"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_hash"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5ca8591c6fcdb1260ce95b08a8e023559635c6f3"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_date"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-05-19T22:22:26.081971330Z"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_snapshot"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lucene_version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8.8.2"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minimum_wire_compatibility_version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.8.0"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minimum_index_compatibility_version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.0.0-beta1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tagline"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You Know, for Search"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("p",[s._v("Elasticsearch-head验证：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/10385897/1639722320536-eea70c36-7749-4135-a5ec-ad903009bb1d.png",alt:"img"}})]),s._v(" "),a("h1",{attrs:{id:"_3-metricbeat和logstash的安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-metricbeat和logstash的安装配置"}},[s._v("#")]),s._v(" 3. Metricbeat和Logstash的安装配置")]),s._v(" "),a("p",[s._v("这里需要注意一点，要把metricbeat和logstash所在目录的权限给与当前登录的的用户和组，才可以执行。")]),s._v(" "),a("p",[a("strong",[s._v("注意事项：一定要注意程序新生成的目录(logs|data)和文件的权限，当前用户没有权限的话会报错，记得root账户去chown或chmod授权。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录root账户,给用户和组授权目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" root\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" es:es /opt\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n总用量 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("715620")]),s._v("\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" es es       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("167")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":02 elasticsearch-7.13.0\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" es es        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":37 logs\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" es es       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("278")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":41 logstash-7.13.0\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" es es       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":33 metricbeat-7.13.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);