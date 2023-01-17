(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{773:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("概要：")])]),t._v(" "),a("ol",[a("li",[t._v("Tomcat各核心组件认知")]),t._v(" "),a("li",[t._v("Tomcat server.xml 配置详解")]),t._v(" "),a("li",[t._v("Tomcat IO模型介绍")])]),t._v(" "),a("h2",{attrs:{id:"一、tomcat各组件认知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、tomcat各组件认知"}},[t._v("#")]),t._v(" 一、Tomcat各组件认知")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("知识点：")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Tomcat架构说明")])]),t._v(" "),a("li",[a("p",[t._v("Tomcat组件及关系详情介绍")])]),t._v(" "),a("li",[a("p",[t._v("Tomcat启动参数说明")])]),t._v(" "),a("li",[a("p",[t._v("Tomcat架构说明")])])]),t._v(" "),a("p",[t._v("Tomcat是一个基于JAVA的WEB容器，其实现了JAVA EE中的 Servlet 与 jsp 规范，与Nginx apache 服务器不同在于一般用于动态请求处理。在架构设计上采用面向组件的方式设计。即整体功能是通过组件的方式拼装完成。另外每个组件都可以被替换以保证灵活性。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.blogjava.net/images/blogjava_net/baoyaer/canImageupload/tomcat-startup.gif?_=2334187",alt:"图片"}})]),t._v(" "),a("p",[t._v("那么是哪些组件组成了Tomcat呢？")]),t._v(" "),a("h3",{attrs:{id:"_2-tomcat-各组件及关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-tomcat-各组件及关系"}},[t._v("#")]),t._v(" 2.Tomcat 各组件及关系")]),t._v(" "),a("ul",[a("li",[t._v("Server 和 Service")]),t._v(" "),a("li",[t._v("Connector   连接器\n"),a("ul",[a("li",[t._v("HTTP 1.1")]),t._v(" "),a("li",[t._v("SSL  https")]),t._v(" "),a("li",[t._v("AJP（ Apache JServ Protocol） apache 私有协议，用于apache 反向代理Tomcat")])])]),t._v(" "),a("li",[t._v("Container\n"),a("ul",[a("li",[t._v("Engine  引擎 catalina")]),t._v(" "),a("li",[t._v("Host   虚拟机 基于域名 分发请求")]),t._v(" "),a("li",[t._v("Context 隔离各个WEB应用 每个Context的  ClassLoader都是独立")])])]),t._v(" "),a("li",[t._v("Component\n"),a("ul",[a("li",[t._v("Manager （管理器）")]),t._v(" "),a("li",[t._v("logger （日志管理）")]),t._v(" "),a("li",[t._v("loader （载入器）")]),t._v(" "),a("li",[t._v("pipeline (管道)")]),t._v(" "),a("li",[t._v("valve （管道中的阀）")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images-cdn.shimo.im/GMkesXePfg8b93e2/Tomcat_%E7%BB%84%E4%BB%B6%E6%9E%B6%E6%9E%84.png!thumbnail",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"_3-tomcat启动参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-tomcat启动参数说明"}},[t._v("#")]),t._v(" 3.Tomcat启动参数说明")]),t._v(" "),a("p",[t._v("我们平时启动Tomcat过程是怎么样的？")]),t._v(" "),a("ol",[a("li",[t._v("复制WAR包至Tomcat webapp 目录。")]),t._v(" "),a("li",[t._v("执行starut.bat 脚本启动。")]),t._v(" "),a("li",[t._v("启动过程中war 包会被自动解压装载。")])]),t._v(" "),a("p",[t._v("但是我们在Eclipse 或idea 中启动WEB项目的时候 也是把War包复杂至webapps 目录解压吗？显然不是，其真正做法是在Tomcat程序文件之外创建了一个部署目录，在一般生产环境中也是这么做的 即：Tomcat 程序目录和部署目录分开 。\n我们只需要在启动时指定CATALINA_HOME 与  CATALINA_BASE 参数即可实现。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("启动参数")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("描述说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JAVA_OPTS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("jvm 启动参数 , 设置内存  编码等 -Xms100m -Xmx200m -Dfile.encoding=UTF-8")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JAVA_HOME")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定jdk 目录，如果未设置从java 环境变量当中去找。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CATALINA_HOME")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tomcat 程序根目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CATALINA_BASE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("应用部署目录，默认为$CATALINA_HOME")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CATALINA_OUT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("应用日志输出目录：默认$CATALINA_BASE/log")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CATALINA_TMPDIR")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("应用临时目录：默认：$CATALINA_BASE/temp")])])])]),t._v(" "),a("p",[t._v("可以编写一个脚本 来实现自定义配置：\n"),a("strong",[t._v("演示自定义启动Tomcat")])]),t._v(" "),a("ul",[a("li",[t._v("[ ] 下载并解压Tomcat")]),t._v(" "),a("li",[t._v("[ ] 创建并拷贝应用目录")]),t._v(" "),a("li",[t._v("[ ] 创建Tomcat.sh\n"),a("ul",[a("li",[t._v("[ ]  编写Tomcat.sh")]),t._v(" "),a("li",[t._v("[ ] chmod +x tomcat.sh 添加执行权限")])])]),t._v(" "),a("li",[t._v("[ ] 拷贝conf 、webapps 、logs至应用目录。")]),t._v(" "),a("li",[t._v("[ ] 执行启动测试。")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#!/bin/bash \nexport JAVA_OPTS="-Xms100m -Xmx200m"\nexport JAVA_HOME=/root/svr/jdk/\nexport CATALINA_HOME=/usr/local/apache-tomcat-8.5.34\nexport CATALINA_BASE="`pwd`"\n\ncase $1 in\n        start)\n        $CATALINA_HOME/bin/catalina.sh start\n                echo start success!!\n        ;;\n        stop)\n                $CATALINA_HOME/bin/catalina.sh stop\n                echo stop success!!\n        ;;\n        restart)\n        $CATALINA_HOME/bin/catalina.sh stop\n                echo stop success!!\n                sleep 2\n        $CATALINA_HOME/bin/catalina.sh start\n        echo start success!!\n        ;;\n        version)\n        $CATALINA_HOME/bin/catalina.sh version\n        ;;\n        configtest)\n        $CATALINA_HOME/bin/catalina.sh configtest\n        ;;\n        esac\nexit 0\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br")])]),a("h2",{attrs:{id:"二、tomcat-server-xml-配置详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、tomcat-server-xml-配置详解"}},[t._v("#")]),t._v(" 二、Tomcat server.xml 配置详解")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Server 的基本基本配置：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Server>\n    <Listener />\x3c!-- 监听器 --\x3e\n    <GlobaNamingResources> \x3c!-- 全局资源 --\x3e\n    </GlobaNamingResources\n    <Service>          \x3c!-- 服务 用于 绑定 连接器与 Engine --\x3e\n        <Connector 8080/> \x3c!-- 连接器--\x3e\n        <Connector 8010 /> \x3c!-- 连接器--\x3e\n        <Connector 8030/> \x3c!-- 连接器--\x3e\n        \n        <Engine>      \x3c!-- 执行引擎--\x3e\n            <Logger />\n            <Realm />\n               <host "www.tl.com" appBase="">  \x3c!-- 虚拟主机--\x3e\n                   <Logger /> \x3c!-- 日志配置--\x3e\n                   <Context "/luban" path=""/> \x3c!-- 上下文配置--\x3e\n               </host>\n        </Engine>\n    </Service>\n</Server>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[a("strong",[t._v("元素说明：")]),t._v("\n**server  **\nroot元素：server 的顶级配置\n主要属性:\nport：执行关闭命令的端口号\nshutdown：关闭命令")]),t._v(" "),a("ul",[a("li",[t._v("[ ] 演示shutdown的用法")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#基于telent 执行SHUTDOWN 命令即可关闭\ntelent 127.0.0.1 8005\nSHUTDOWN\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("service")]),t._v("\n服务：将多个connector 与一个Engine组合成一个服务，可以配置多个服务。")]),t._v(" "),a("p",[a("strong",[t._v("Connector")]),t._v("\n连接器：用于接收 指定协议下的连接 并指定给唯一的Engine 进行处理。\n主要属性：")]),t._v(" "),a("ul",[a("li",[t._v("protocol 监听的协议，默认是http/1.1")]),t._v(" "),a("li",[t._v("port 指定服务器端要创建的端口号")]),t._v(" "),a("li",[t._v("minThread\t服务器启动时创建的处理请求的线程数")]),t._v(" "),a("li",[t._v("maxThread\t最大可以创建的处理请求的线程数")]),t._v(" "),a("li",[t._v("enableLookups\t如果为true，则可以通过调用request.getRemoteHost()进行DNS查询来得到远程客户端的实际主机名，若为false则不进行DNS查询，而是返回其ip地址")]),t._v(" "),a("li",[t._v("redirectPort\t指定服务器正在处理http请求时收到了一个SSL传输请求后重定向的端口号")]),t._v(" "),a("li",[t._v("acceptCount\t指定当所有可以使用的处理请求的线程数都被使用时，可以放到处理队列中的请求数，超过这个数的请求将不予处理")]),t._v(" "),a("li",[t._v("connectionTimeout\t指定超时的时间数(以毫秒为单位)")]),t._v(" "),a("li",[t._v("SSLEnabled 是否开启 sll 验证，在Https 访问时需要开启。")])]),t._v(" "),a("ul",[a("li",[t._v("[ ] "),a("em",[t._v("演示配置多个Connector")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' <Connector port="8860" protocol="org.apache.coyote.http11.Http11NioProtocol"\n                connectionTimeout="20000"\n                redirectPort="8862"\n                URIEncoding="UTF-8"\n                useBodyEncodingForURI="true"\n                compression="on" compressionMinSize="2048"\ncompressableMimeType="text/html,text/xml,text/plain,text/javascript,text/css,application/x-json,application/json,application/x-javascript"\n                maxThreads="1024" minSpareThreads="200"\n                acceptCount="800"\n                enableLookups="false"\n        />\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[a("strong",[t._v("Engine")]),t._v("\n引擎：用于处理连接的执行器，默认的引擎是catalina。一个service 中只能配置一个Engine。\n主要属性：name 引擎名称 defaultHost 默认host")]),t._v(" "),a("p",[a("strong",[t._v("Host")]),t._v("\n虚拟机：基于域名匹配至指定虚拟机。类似于nginx 当中的server,默认的虚拟机是localhost.\n主要属性：")]),t._v(" "),a("ul",[a("li",[t._v("[ ] "),a("em",[t._v("演示配置多个Host")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Host name="www.luban.com"  appBase="/usr/www/luban"\n            unpackWARs="true" autoDeploy="true">\n        <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"               prefix="www.luban.com.access_log" suffix=".txt"\n               pattern="%h %l %u %t &quot;%r&quot; %s %b" />\n</Host>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("Context")]),t._v("\n应用上下文：一个host 下可以配置多个Context ，每个Context 都有其独立的classPath。相互隔离，以免造成ClassPath 冲突。\n主要属性：")]),t._v(" "),a("ul",[a("li",[t._v("[ ] "),a("em",[t._v("演示配置多个Context")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Context docBase="hello" path="/h" reloadable="true"/>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("Valve")]),t._v("\n阀门：可以理解成request 的过滤器，具体配置要基于具体的Valve 接口的子类。以下即为一个访问日志的Valve.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"\n               prefix="www.luban.com.access_log" suffix=".txt"\n               pattern="%h %l %u %t &quot;%r&quot; %s %b" />\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"三、tomcat-io模型介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、tomcat-io模型介绍"}},[t._v("#")]),t._v(" 三、Tomcat IO模型介绍")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("知识点：")]),t._v(" "),a("ol",[a("li",[t._v("Tomcat支持的IO模型说明")]),t._v(" "),a("li",[t._v("BIO 与NIO的区别")]),t._v(" "),a("li",[t._v("IO模型源码解读")])]),t._v(" "),a("h3",{attrs:{id:"_1、tomcat支持的io模型说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、tomcat支持的io模型说明"}},[t._v("#")]),t._v(" "),a("strong",[t._v("1、Tomcat支持的IO模型说明")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BIO")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("阻塞式IO，即Tomcat使用传统的java.io进行操作。该模式下每个请求都会创建一个线程，对性能开销大，不适合高并发场景。优点是稳定，适合连接数目小且固定架构。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("NIO")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("非阻塞式IO，jdk1.4 之后实现的新IO。该模式基于多路复用选择器监测连接状态在通知线程处理，从而达到非阻塞的目的。比传统BIO能更好的支持并发性能。Tomcat 8.0之后默认采用该模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("APR")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("全称是 Apache Portable Runtime/Apache可移植运行库)，是Apache HTTP服务器的支持库。可以简单地理解为，Tomcat将以JNI的形式调用Apache HTTP服务器的核心动态链接库来处理文件读取或网络传输操作。使用需要编译安装APR 库")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AIO")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("异步非阻塞式IO，jdk1.7后之支持 。与nio不同在于不需要多路复用选择器，而是请求处理线程执行完程进行回调调知，已继续执行后续操作。Tomcat 8之后支持。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("p",[a("strong",[t._v("使用指定IO模型的配置方式:")]),t._v("\n配置 server.xml 文件当中的 "),a("Connector",{attrs:{protocol:"HTTP/1.1"}},[t._v("    修改即可。\n默认配置 8.0  protocol=“HTTP/1.1” 8.0 之前是 BIO 8.0 之后是NIO\n"),a("strong",[t._v("BIO")]),t._v("\nprotocol=“org.apache.coyote.http11.Http11Protocol“\n"),a("strong",[t._v("NIO")]),t._v("\nprotocol=”org.apache.coyote.http11.Http11NioProtocol“\n"),a("strong",[t._v("AIO")]),t._v("\nprotocol=”org.apache.coyote.http11.Http11Nio2Protocol“\n"),a("strong",[t._v("APR")]),t._v("\nprotocol=”org.apache.coyote.http11.Http11AprProtocol“")])],1),t._v(" "),a("h3",{attrs:{id:"_2、bio-与nio有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、bio-与nio有什么区别"}},[t._v("#")]),t._v(" 2、BIO 与NIO有什么区别")]),t._v(" "),a("p",[a("strong",[t._v("分别演示在高并发场景下BIO与NIO的线程数的变化？")]),t._v(" "),a("strong",[t._v("演示数据：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("每秒提交数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("BIO执行线程")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("NIO执行线程")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("预测")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("50")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("实验环境")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("48")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("37")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("生产环境")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("419")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("23")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("p",[a("strong",[t._v("结论：")])]),t._v(" "),a("p",[a("strong",[t._v("BIO 线程模型讲解")]),t._v(" "),a("img",{attrs:{src:"https://images-cdn.shimo.im/mNNI3LANwOo9GFLB/image.png!thumbnail",alt:"图片"}})]),t._v(" "),a("p",[a("strong",[t._v("NIO 线程模型讲解")]),t._v(" "),a("img",{attrs:{src:"https://images-cdn.shimo.im/AMRoheY0pHEaIfJK/image.png!thumbnail",alt:"图片"}})]),t._v(" "),a("p",[a("strong",[t._v("BIO 源码解读")])]),t._v(" "),a("ol",[a("li",[t._v("Http11Protocol  Http BIO协议解析器")]),t._v(" "),a("li",[t._v("JIoEndpoint")]),t._v(" "),a("li",[t._v("Acceptor implements Runnable")]),t._v(" "),a("li",[t._v("SocketProcessor implements Runnable")]),t._v(" "),a("li",[t._v("Http11NioProtocol Http Nio协议解析器")]),t._v(" "),a("li",[t._v("NioEndpoint")]),t._v(" "),a("li",[t._v("Acceptor  implements Runnable")]),t._v(" "),a("li",[t._v("Poller implements Runnable")]),t._v(" "),a("li",[t._v("SocketProcessor implements Runnable")])])])}),[],!1,null,null,null);a.default=n.exports}}]);