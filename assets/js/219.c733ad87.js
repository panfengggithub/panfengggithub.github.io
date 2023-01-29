(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{635:function(n,s,e){"use strict";e.r(s);var t=e(1),a=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[s("strong",[n._v("概要：")])]),n._v(" "),s("ol",[s("li",[n._v("Nginx 简介")]),n._v(" "),s("li",[n._v("Nginx 架构说明")]),n._v(" "),s("li",[n._v("Nginx 基础配置与使用")])]),n._v(" "),s("h2",{attrs:{id:"一、nginx-简介与安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、nginx-简介与安装"}},[n._v("#")]),n._v(" 一、Nginx 简介与安装")]),n._v(" "),s("hr"),n._v(" "),s("h3",{attrs:{id:"知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[n._v("#")]),n._v(" 知识点：")]),n._v(" "),s("ol",[s("li",[n._v("Nginx 简介")]),n._v(" "),s("li",[n._v("Nginx 编译与安装")])]),n._v(" "),s("h3",{attrs:{id:"_1、nginx简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、nginx简介"}},[n._v("#")]),n._v(" 1、Nginx简介：")]),n._v(" "),s("p",[n._v("Nginx是一个高性能WEB服务器，除它之外Apache、Tomcat、Jetty、IIS，它们都是Web服务器，或者叫做WWW（World Wide Web）服务器，相应地也都具备Web服务器的基本功能。Nginx  相对基它WEB服务有什么优势呢？")]),n._v(" "),s("ol",[s("li",[n._v("Tomcat、Jetty 面向java语言，先天就是重量级的WEB服务器，其性能与Nginx没有可比性。")]),n._v(" "),s("li",[n._v("IIS只能在Windows操作系统上运行。Windows作为服务器在稳定性与其他一些性能上都不如类UNIX操作系统，因此，在需要高性能Web服务器的场合下IIS并不占优。")]),n._v(" "),s("li",[n._v("Apache的发展时期很长，而且是目前毫无争议的世界第一大Web服务器，其有许多优点，如稳定、开源、跨平台等，但它出现的时间太长了，在它兴起的年代，互联网的产业规模远远比不上今天，所以它被设计成了一个重量级的、不支持高并发的Web服务器。在Apache服务器上，如果有数以万计的并发HTTP请求同时访问，就会导致服务器上消耗大量内存，操作系统内核对成百上千的Apache进程做进程间切换也会消耗大量CPU资源，并导致HTTP请求的平均响应速度降低，这些都决定了Apache不可能成为高性能Web服务器，这也促使了Lighttpd和Nginx的出现。 下图可以看出07年到17 年强劲增长势头。")])]),n._v(" "),s("p",[s("img",{attrs:{src:"https://images-cdn.shimo.im/6A4GSirFCTcUX0WC/%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%8E%92%E5%90%8D.png!thumbnail",alt:"图片"}})]),n._v(" "),s("h3",{attrs:{id:"_2、编译与安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、编译与安装"}},[n._v("#")]),n._v(" "),s("strong",[n._v("2、编译与安装")])]),n._v(" "),s("p",[s("strong",[n._v("安装环境准备：")]),n._v(" "),s("strong",[n._v("（1）linux 内核2.6及以上版本:")]),n._v("\n只有2.6之后才支持epool ，在此之前使用select或pool多路复用的IO模型，无法解决高并发压力的问题。通过命令uname -a 即可查看。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("#查看 linux 内核\nuname -a  \n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[s("strong",[n._v("（2）GCC编译器")]),n._v("\nGCC（GNU Compiler Collection）可用来编译C语言程序。Nginx不会直接提供二进制可执行程序,只能下载源码进行编译。\n"),s("strong",[n._v("（3）PCRE库")]),n._v("\nPCRE（Perl Compatible Regular Expressions，Perl兼容正则表达式）是由Philip Hazel开发的函数库，目前为很多软件所使用，该库支持正则表达式。\n"),s("strong",[n._v("（4）zlib库")]),n._v("\nzlib库用于对HTTP包的内容做gzip格式的压缩，如果我们在nginx.conf里配置了gzip on，并指定对于某些类型（content-type）的HTTP响应使用gzip来进行压缩以减少网络传输量。\n"),s("strong",[n._v("（5）OpenSSL开发库")]),n._v("\n如果我们的服务器不只是要支持HTTP，还需要在更安全的SSL协议上传输HTTP，那么就需要拥有OpenSSL了。另外，如果我们想使用MD5、SHA1等散列函数，那么也需要安装它。\n上面几个库都是Nginx 基础功能所必需的，为简单起见我们可以通过yum 命令统一安装。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("#yum 安装nginx 环境\nyum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel pcre pcre-devel\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[s("strong",[n._v("源码获取：")]),n._v("\nnginx 下载页：http://nginx.org/en/download.html 。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("# 下载nginx 最新稳定版本\nwget http://nginx.org/download/nginx-1.14.0.tar.gz\n#解压\ntar -zxvf nginx-1.14.0.tar.gz\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br")])]),s("p",[n._v("最简单的安装：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("# 全部采用默认安装\n./configure\nmake && make install \n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[n._v("执行完成之后 nginx 运行文件 就会被安装在 /usr/local/nginx 下。")]),n._v(" "),s("p",[n._v("基于参数构建")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-debug\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[s("strong",[n._v("控制命令：")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("#默认方式启动：\n./sbin/nginx \n#指定配置文件启动 \n./sbing/nginx -c /tmp/nginx.conf \n#指定nginx程序目录启动\n./sbin/nginx -p /usr/local/nginx/\n\n#快速停止\n./sbin/nginx -s stop\n#优雅停止\n./sbin/nginx -s quit\n\n# 热装载配置文件 \n./sbin/nginx -s reload\n# 重新打开日志文件\n./sbin/nginx -s reopen\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br")])]),s("p",[s("strong",[n._v("模块更新：")])]),n._v(" "),s("h2",{attrs:{id:"二、nginx-架构说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、nginx-架构说明"}},[n._v("#")]),n._v(" 二、Nginx 架构说明")]),n._v(" "),s("hr"),n._v(" "),s("p",[s("strong",[n._v("Nginx 架构图:")]),n._v(" "),s("img",{attrs:{src:"https://images-cdn.shimo.im/mgBtXOyOrjkUmSrZ/nginx_%E6%9E%B6%E6%9E%84%E5%9B%BE.png!thumbnail",alt:"图片"}})]),n._v(" "),s("p",[s("strong",[n._v("架构说明：")]),n._v("\n1）nginx启动时，会生成两种类型的进程，一个是主进程（Master），一个（windows版本的目前只有一个）和多个工作进程（Worker）。主进程并不处理网络请求，主要负责调度工作进程，也就是图示的三项：加载配置、启动工作进程及非停升级。所以，nginx启动以后，查看操作系统的进程列表，我们就能看到至少有两个nginx进程。\n2）服务器实际处理网络请求及响应的是工作进程（worker），在类unix系统上，nginx可以配置多个worker，而每个worker进程都可以同时处理数以千计的网络请求。\n3）模块化设计。nginx的worker，包括核心和功能性模块，核心模块负责维持一个运行循环（run-loop），执行网络请求处理的不同阶段的模块功能，如网络读写、存储读写、内容传输、外出过滤，以及将请求发往上游服务器等。而其代码的模块化设计，也使得我们可以根据需要对功能模块进行适当的选择和修改，编译成具有特定功能的服务器。\n4）事件驱动、异步及非阻塞，可以说是nginx得以获得高并发、高性能的关键因素，同时也得益于对Linux、Solaris及类BSD等操作系统内核中事件通知及I/O性能增强功能的采用，如kqueue、epoll及event ports。")]),n._v(" "),s("p",[s("strong",[n._v("Nginx 核心模块：")]),n._v(" "),s("img",{attrs:{src:"https://images-cdn.shimo.im/pV2dAuFXkaodJB4i/image.png!thumbnail",alt:"图片"}})]),n._v(" "),s("h2",{attrs:{id:"三、nginx-配置与使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、nginx-配置与使用"}},[n._v("#")]),n._v(" 三、Nginx 配置与使用")]),n._v(" "),s("hr"),n._v(" "),s("h3",{attrs:{id:"知识点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点-2"}},[n._v("#")]),n._v(" "),s("strong",[n._v("知识点")])]),n._v(" "),s("ol",[s("li",[n._v("配置文件语法格式")]),n._v(" "),s("li",[n._v("配置第一个静态WEB服务")]),n._v(" "),s("li",[n._v("配置案例")]),n._v(" "),s("li",[n._v("动静分离实现")]),n._v(" "),s("li",[n._v("防盗链")]),n._v(" "),s("li",[n._v("多域名站点")]),n._v(" "),s("li",[n._v("下载限速")]),n._v(" "),s("li",[n._v("IP 黑名单")]),n._v(" "),s("li",[n._v("基于user-agent分流")]),n._v(" "),s("li",[n._v("日志配置")])]),n._v(" "),s("h3",{attrs:{id:"_1、配置文件的语法格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、配置文件的语法格式"}},[n._v("#")]),n._v(" "),s("strong",[n._v("1、配置文件的语法格式：")])]),n._v(" "),s("p",[n._v("先来看一个简单的nginx 配置")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("worker_processes  1;\nevents {\n    worker_connections  1024;\n}\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n    sendfile        on;\n    keepalive_timeout  65;\n    server {\n        listen       80;\n        server_name  localhost;\n        location / {\n            root   html;\n            index  index.html index.htm;\n        }\n        location /nginx_status {\n    \t   stub_status on;\n    \t   access_log   off;\n  \t    }\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br")])]),s("p",[n._v("上述配置中的events、http、server、location、upstream等属于配置项块。而worker_processes 、worker_connections、include、listen  属于配置项块中的属性。   /nginx_status   属于配置块的特定参数参数。其中server块嵌套于http块，其可以直接继承访问Http块当中的参数。")]),n._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[s("strong",[n._v("配置块")])]),n._v(" "),s("th",{staticStyle:{"text-align":"left"}},[n._v("名称开头用大口号包裹其对应属性")])])]),n._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[n._v("属性")])]),n._v(" "),s("td",{staticStyle:{"text-align":"left"}},[n._v("基于空格切分属性名与属性值，属性值可能有多个项 都以空格进行切分 如：  access_log  logs/host.access.log  main")])]),n._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[n._v("参数")])]),n._v(" "),s("td",{staticStyle:{"text-align":"left"}},[n._v("其配置在 块名称与大括号间，其值如果有多个也是通过空格进行拆")])])])]),n._v(" "),s("p",[n._v('注意 如果配置项值中包括语法符号，比如空格符，那么需要使用单引号或双引号括住配置项值，否则Nginx会报语法错误。例如：\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                     \'$status $body_bytes_sent "$http_referer" \'\n                     \'"$http_user_agent" "$http_x_forwarded_for"\';')]),n._v(" "),s("h3",{attrs:{id:"_2、配置第一个静态web服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置第一个静态web服务"}},[n._v("#")]),n._v(" 2、配置第一个静态WEB服务")]),n._v(" "),s("p",[s("strong",[n._v("基础站点演示：")])]),n._v(" "),s("ul",[s("li",[n._v("[ ] 创建站点目录 mkdir -p /usr/www/luban")]),n._v(" "),s("li",[n._v("[ ] 编写静态文件")]),n._v(" "),s("li",[n._v("[ ] 配置 nginx.conf\n"),s("ul",[s("li",[n._v("[ ] 配置server")]),n._v(" "),s("li",[n._v("[ ] 配置location")])])])]),n._v(" "),s("p",[n._v("基本配置介绍说明：\n（1）监听端口\n语法：listen address：\n默认：listen 80;\n配置块：server")]),n._v(" "),s("p",[n._v('（2）主机名称\n语法：server_name name[……];\n默认：server_name "";\n配置块：server\nserver_name后可以跟多个主机名称，如server_name '),s("a",{attrs:{href:"http://www.testweb.com",target:"_blank",rel:"noopener noreferrer"}},[n._v("www.testweb.com"),s("OutboundLink")],1),n._v("、download.testweb.com;。 支持通配符与正则")]),n._v(" "),s("p",[n._v("（3）location\n语法：location[=|～|～*|^～|@]/uri/{……}\n配置块：server")]),n._v(" "),s("ol",[s("li",[n._v("/ 基于uri目录匹配")]),n._v(" "),s("li",[n._v("=表示把URI作为字符串，以便与参数中的uri做完全匹配。")]),n._v(" "),s("li",[n._v("～表示正则匹配URI时是字母大小写敏感的。")]),n._v(" "),s("li",[n._v("～*表示正则匹配URI时忽略字母大小写问题。")]),n._v(" "),s("li",[n._v("^～表示正则匹配URI时只需要其前半部分与uri参数匹配即可。")])]),n._v(" "),s("p",[s("strong",[n._v("动静分离演示：")])]),n._v(" "),s("ul",[s("li",[n._v("[ ] 创建静态站点")]),n._v(" "),s("li",[n._v("[ ] 配置 location /static")]),n._v(" "),s("li",[n._v("[ ] 配置 ~* .(gif|png|css|js)$")])]),n._v(" "),s("p",[n._v("基于目录动静分离")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("   server {\n        listen 80;\n        server_name *.luban.com;\n        root /usr/www/luban;\n        location / {\n                index luban.html;\n        }\n        location /static {\n         alias /usr/www/static;\n        }\n }\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("p",[n._v("基于正则动静分离")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("location ~* \\.(gif|jpg|png|css|js)$ {\n      root /usr/www/static;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[s("strong",[n._v("防盗链配置演示：")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("# 加入至指定location 即可实现\nvalid_referers none blocked *.luban.com;\n if ($invalid_referer) {\n       return 403;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[s("strong",[n._v("下载限速：")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("location /download {\n    limit_rate 1m;\n    limit_rate_after 30m;\n}\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("创建IP黑名单")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("# 创建黑名单文件\necho 'deny 192.168.0.132;' >> balck.ip\n#http 配置块中引入 黑名单文件\ninclude       black.ip;\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br")])]),s("h3",{attrs:{id:"_3、日志配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、日志配置"}},[n._v("#")]),n._v(" 3、日志配置：")]),n._v(" "),s("p",[s("strong",[n._v("日志格式：")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('log_format  main  \'$remote_addr - $remote_user [$time_local]   "$request" \'\n                     \'$status $body_bytes_sent "$http_referer" \'\n                  \'"$http_user_agent" "$http_x_forwarded_for"\';\naccess_log  logs/access.log  main;\n#基于域名打印日志\naccess_log logs/$host.access.log main;\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("p",[s("strong",[n._v("error日志的设置")]),n._v("\n语法：error_log /path/file level;\n默认：error_log logs/error.log error;\nlevel是日志的输出级别，取值范围是debug、info、notice、warn、error、crit、alert、emerg，\n"),s("strong",[n._v("针对指定的客户端输出debug级别的日志")]),n._v("\n语法：debug_connection[IP|CIDR]\nevents {\ndebug_connection 192.168.0.147; \ndebug_connection 10.224.57.0/200;\n}\n"),s("a",{attrs:{href:"https://attachments-cdn.shimo.im/fWYRhqhjvfIxcISK/nginx.conf",target:"_blank",rel:"noopener noreferrer"}},[n._v("nginx.conf"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);