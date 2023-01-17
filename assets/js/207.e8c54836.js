(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{618:function(_,v,t){"use strict";t.r(v);var e=t(1),n=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"nginx简介与安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nginx简介与安装"}},[_._v("#")]),_._v(" "),v("strong",[_._v("Nginx简介与安装")])]),_._v(" "),v("p",[v("strong",[_._v("概要：")])]),_._v(" "),v("ul",[v("li",[_._v("Nginx 简介")]),_._v(" "),v("li",[_._v("Nginx 架构说明")]),_._v(" "),v("li",[_._v("Nginx 基础配置与使用")])]),_._v(" "),v("h2",{attrs:{id:"一、nginx-简介与安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、nginx-简介与安装"}},[_._v("#")]),_._v(" 一、Nginx 简介与安装")]),_._v(" "),v("h3",{attrs:{id:"_1-nginx-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-nginx-简介"}},[_._v("#")]),_._v(" 1.Nginx 简介")]),_._v(" "),v("p",[_._v("Nginx是一个高性能WEB服务器，除它之外Apache、Tomcat、Jetty、IIS，它们都是Web服务器，或者叫做WWW（World Wide Web）服务器，相应地也都具备Web服务器的基本功能。Nginx  相对基它WEB服务有什么优势呢？")]),_._v(" "),v("ol",[v("li",[_._v("Tomcat、Jetty 面向java语言，先天就是重量级的WEB服务器，其性能与Nginx没有可比性。")]),_._v(" "),v("li",[_._v("IIS只能在Windows操作系统上运行。Windows作为服务器在稳定性与其他一些性能上都不如类UNIX操作系统，因此，在需要高性能Web服务器的场合下IIS并不占优。")]),_._v(" "),v("li",[_._v("Apache的发展时期很长，而且是目前毫无争议的世界第一大Web服务器，其有许多优点，如稳定、开源、跨平台等，但它出现的时间太长了，在它兴起的年代，互联网的产业规模远远比不上今天，所以它被设计成了一个重量级的、不支持高并发的Web服务器。在Apache服务器上，如果有数以万计的并发HTTP请求同时访问，就会导致服务器上消耗大量内存，操作系统内核对成百上千的Apache进程做进程间切换也会消耗大量CPU资源，并导致HTTP请求的平均响应速度降低，这些都决定了Apache不可能成为高性能Web服务器，这也促使了Lighttpd和Nginx的出现。 下图可以看出07年到17 年强劲增长势头。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/564018/1586329159201-16ec60a1-174d-4f51-b0d6-b69378502340.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_19%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("h3",{attrs:{id:"_2-编译与安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译与安装"}},[_._v("#")]),_._v(" 2.编译与安装")]),_._v(" "),v("p",[_._v("安装环境准备：")]),_._v(" "),v("p",[v("strong",[_._v("（1）linux 内核2.6及以上版本:")])]),_._v(" "),v("p",[_._v("只有2.6之后才支持epool ，在此之前使用select或pool多路复用的IO模型，无法解决高并发压力的问题。通过命令uname -a 即可查看。")]),_._v(" "),v("p",[_._v("#查看 linux 内核")]),_._v(" "),v("p",[_._v("uname -a")]),_._v(" "),v("p",[v("strong",[_._v("（2）GCC编译器")])]),_._v(" "),v("p",[_._v("GCC（GNU Compiler Collection）可用来编译C语言程序。Nginx不会直接提供二进制可执行程序,只能下载源码进行编译。")]),_._v(" "),v("p",[v("strong",[_._v("（3）PCRE库")])]),_._v(" "),v("p",[_._v("PCRE（Perl Compatible Regular Expressions，Perl兼容正则表达式）是由Philip Hazel开发的函数库，目前为很多软件所使用，该库支持正则表达式。")]),_._v(" "),v("p",[v("strong",[_._v("（4）zlib库")])]),_._v(" "),v("p",[_._v("zlib库用于对HTTP包的内容做gzip格式的压缩，如果我们在nginx.conf里配置了gzip on，并指定对于某些类型（content-type）的HTTP响应使用gzip来进行压缩以减少网络传输量。")]),_._v(" "),v("p",[v("strong",[_._v("（5）OpenSSL开发库")])]),_._v(" "),v("p",[_._v("如果我们的服务器不只是要支持HTTP，还需要在更安全的SSL协议上传输HTTP，那么就需要拥有OpenSSL了。另外，如果我们想使用MD5、SHA1等散列函数，那么也需要安装它。")]),_._v(" "),v("p",[_._v("上面几个库都是Nginx 基础功能所必需的，为简单起见我们可以通过yum 命令统一安装。")]),_._v(" "),v("p",[_._v("#yum 安装nginx 环境")]),_._v(" "),v("p",[_._v("yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel pcre pcre-devel")]),_._v(" "),v("p",[v("strong",[_._v("源码获取：")])]),_._v(" "),v("p",[_._v("nginx 下载页：http://nginx.org/en/download.html 。")]),_._v(" "),v("p",[_._v("# 下载nginx 最新稳定版本")]),_._v(" "),v("p",[_._v("wget http://nginx.org/download/nginx-1.14.0.tar.gz")]),_._v(" "),v("p",[_._v("#解压")]),_._v(" "),v("p",[_._v("tar -zxvf nginx-1.14.0.tar.gz")]),_._v(" "),v("p",[_._v("最简单的安装：")]),_._v(" "),v("p",[_._v("# 全部采用默认安装")]),_._v(" "),v("p",[_._v("./configure && make && make install")]),_._v(" "),v("p",[_._v("执行完成之后 nginx 运行文件 就会被安装在 /usr/local/nginx 下。")]),_._v(" "),v("p",[_._v("基于参数构建")]),_._v(" "),v("p",[_._v("./configure")]),_._v(" "),v("p",[v("strong",[_._v("模块更新：")])]),_._v(" "),v("p",[_._v("# 添加状态查查看等其它模块")]),_._v(" "),v("p",[_._v("./configure --with-pcre --with-http_stub_status_module --with-http_ssl_module")]),_._v(" "),v("p",[_._v("# 重新创建主文件")]),_._v(" "),v("p",[_._v("make")]),_._v(" "),v("p",[_._v("# 将新生成的nginx 文件覆盖 旧文件。")]),_._v(" "),v("p",[_._v("cp objs/nginx /usr/local/nginx/sbin/")]),_._v(" "),v("p",[_._v("# 查看是否更新成功 显示了 configure 构建参数表示成功")]),_._v(" "),v("p",[_._v("/usr/local/nginx/sbin/nginx -V")]),_._v(" "),v("p",[v("strong",[_._v("控制命令：")])]),_._v(" "),v("p",[_._v("#查看命令帮助")]),_._v(" "),v("p",[_._v("./sbin/nginx -?")]),_._v(" "),v("p",[_._v("#默认方式启动：")]),_._v(" "),v("p",[_._v("./sbin/nginx")]),_._v(" "),v("p",[_._v("#指定配置文件启动")]),_._v(" "),v("p",[_._v("./sbing/nginx -c /tmp/nginx.conf")]),_._v(" "),v("p",[_._v("#指定nginx程序目录启动")]),_._v(" "),v("p",[_._v("./sbin/nginx -p /usr/local/nginx/")]),_._v(" "),v("p",[_._v("#快速停止")]),_._v(" "),v("p",[_._v("./sbin/nginx -s stop")]),_._v(" "),v("p",[_._v("#优雅停止")]),_._v(" "),v("p",[_._v("./sbin/nginx -s quit")]),_._v(" "),v("p",[_._v("# 热装载配置文件")]),_._v(" "),v("p",[_._v("./sbin/nginx -s reload")]),_._v(" "),v("p",[_._v("# 重新打开日志文件")]),_._v(" "),v("p",[_._v("./sbin/nginx -s reopen")]),_._v(" "),v("p",[_._v("# 设置全局命令，如下表示设置启动用户为root")]),_._v(" "),v("p",[_._v('./sbin/nginx -g "user root;"')]),_._v(" "),v("h2",{attrs:{id:"二、nginx-架构说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、nginx-架构说明"}},[_._v("#")]),_._v(" 二、Nginx 架构说明")]),_._v(" "),v("p",[v("strong",[_._v("Nginx 架构图:")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/564018/1586329277056-b8857493-cef4-478f-b78e-10f92a57e4fa.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_23%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[v("strong",[_._v("架构说明：")])]),_._v(" "),v("p",[_._v("1）nginx启动时，会生  不处理网络请求，主要负责调度工作进程，也就是图示的三项：加载配置、启动工作进程及非停升级。所以，nginx启动以后，查看操作系统的进程列表，我们就能看到至少有两个nginx进程。")]),_._v(" "),v("p",[_._v("2）服务器实际处理网络请求及响应的是工作进程（worker），在类unix系统上，nginx可以配置多个worker，而每个worker进程都可以同时处理数以千计的网络请求。")]),_._v(" "),v("p",[_._v("3）模块化设计。nginx的worker，包括核心和功能性模块，核心模块负责维持一个运行循环（run-loop），执行网络请求处理的不同阶段的模块功能，如网络读写、存储读写、内容传输、外出过滤，以及将请求发往上游服务器等。而其代码的模块化设计，也使得我们可以根据需要对功能模块进行适当的选择和修改，编译成具有特定功能的服务器。")]),_._v(" "),v("p",[_._v("4）事件驱动、异步及非阻塞，可以说是nginx得以获得高并发、高性能的关键因素，同时也得益于对Linux、Solaris及类BSD等操作系统内核中事件通知及I/O性能增强功能的采用，如kqueue、epoll及event ports。")]),_._v(" "),v("p",[v("strong",[_._v("Nginx 核心模块：")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/564018/1586329360622-f55b15a2-484e-45de-89c1-368adc920436.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_23%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("h2",{attrs:{id:"三、nginx-配置与使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、nginx-配置与使用"}},[_._v("#")]),_._v(" 三、Nginx 配置与使用")]),_._v(" "),v("p",[_._v("知识点")]),_._v(" "),v("ol",[v("li",[_._v("配置文件语法格式")]),_._v(" "),v("li",[_._v("配置第一个静态WEB服务")]),_._v(" "),v("li",[_._v("配置案例\na.动静分离实现\nb.防盗链\nc.多域名站点\nd.下载限速\ne.IP 黑名单\nf.基于user-agent分流")]),_._v(" "),v("li",[_._v("日志配置")])]),_._v(" "),v("h3",{attrs:{id:"_1、配置文件的语法格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、配置文件的语法格式"}},[_._v("#")]),_._v(" 1、配置文件的语法格式：")]),_._v(" "),v("p",[_._v("先来看一个简单的nginx 配置")]),_._v(" "),v("p",[_._v("worker_processes  1;")]),_._v(" "),v("p",[_._v("events {")]),_._v(" "),v("p",[_._v("worker_connections  1024;")]),_._v(" "),v("p",[_._v("}")]),_._v(" "),v("p",[_._v("http {")]),_._v(" "),v("p",[_._v("include    mime.types;")]),_._v(" "),v("p",[_._v("default_type  application/octet-stream;")]),_._v(" "),v("p",[_._v("sendfile     on;")]),_._v(" "),v("p",[_._v("keepalive_timeout  65;")]),_._v(" "),v("p",[_._v("server {")]),_._v(" "),v("p",[_._v("​    listen    80;")]),_._v(" "),v("p",[_._v("​    server_name  localhost;")]),_._v(" "),v("p",[_._v("​    location / {")]),_._v(" "),v("p",[_._v("​      root  html;")]),_._v(" "),v("p",[_._v("​      index  index.html index.htm;")]),_._v(" "),v("p",[_._v("​    }")]),_._v(" "),v("p",[_._v("​    location /nginx_status {")]),_._v(" "),v("p",[_._v("​    stub_status on;")]),_._v(" "),v("p",[_._v("​    access_log  off;")]),_._v(" "),v("p",[_._v("​     }")]),_._v(" "),v("p",[_._v("}")]),_._v(" "),v("p",[_._v("}")]),_._v(" "),v("p",[_._v("上述配置中的events、http、server、location、upstream等属于配置项块。而worker_processes 、worker_connections、include、listen  属于配置项块中的属性。  /nginx_status  属于配置块的特定参数参数。其中server块嵌套于http块，其可以直接继承访问Http块当中的参数。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[_._v("配置块")])]),_._v(" "),v("th",[_._v("名称开头用大口号包裹其对应属性")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[_._v("属性")])]),_._v(" "),v("td",[_._v("基于空格切分属性名与属性值，属性值可能有多个项  都以空格进行切分 如：  access_log   logs/host.access.log  main")])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("参数")])]),_._v(" "),v("td",[_._v("其配置在 块名称与大括号间，其值如果有多个也是通过空格进行拆")])])])]),_._v(" "),v("p",[_._v("注意 如果配置项值中包括语法符号，比如空格符，那么需要使用单引号或双引号括住配置项值，否则Nginx会报语法错误。例如：")]),_._v(" "),v("p",[_._v("log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),_._v(" "),v("p",[_._v("​          '$status $body_bytes_sent \"$http_referer\" '")]),_._v(" "),v("p",[_._v('​          \'"$http_user_agent" "$http_x_forwarded_for"\';')]),_._v(" "),v("h3",{attrs:{id:"_2、配置第一个静态web服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置第一个静态web服务"}},[_._v("#")]),_._v(" 2、配置第一个静态WEB服务")]),_._v(" "),v("p",[v("strong",[_._v("基础站点演示：")])]),_._v(" "),v("p",[_._v("l  创建站点目录 mkdir -p /usr/www/luban")]),_._v(" "),v("p",[_._v("l  编写静态文件")]),_._v(" "),v("p",[_._v("l  配置 nginx.conf")]),_._v(" "),v("p",[_._v("n  配置server")]),_._v(" "),v("p",[_._v("n  配置location")]),_._v(" "),v("p",[_._v("基本配置介绍说明：")]),_._v(" "),v("p",[_._v("（1）监听端口")]),_._v(" "),v("p",[_._v("语法：listen address：")]),_._v(" "),v("p",[_._v("默认：listen 80;")]),_._v(" "),v("p",[_._v("配置块：server")]),_._v(" "),v("p",[_._v("（2）主机名称")]),_._v(" "),v("p",[_._v("语法：server_name name[……];")]),_._v(" "),v("p",[_._v('默认：server_name "";')]),_._v(" "),v("p",[_._v("配置块：server")]),_._v(" "),v("p",[_._v("server_name后可以跟多个主机名称，如server_name "),v("a",{attrs:{href:"http://www.testweb.com",target:"_blank",rel:"noopener noreferrer"}},[_._v("www.testweb.com"),v("OutboundLink")],1),_._v("、download.testweb.com;。 支持通配符与正则")]),_._v(" "),v("p",[v("strong",[_._v("（3）location")])]),_._v(" "),v("p",[_._v("语法：location[=|～|～*|^～|@]/uri/{……}")]),_._v(" "),v("p",[_._v("配置块：server")]),_._v(" "),v("p",[_._v("\\1.   =表示把URI作为字符串，以便与参数中的uri做完全匹配。")]),_._v(" "),v("p",[_._v("\\2.   / 基于uri目录匹配")]),_._v(" "),v("p",[_._v("\\3.   ～表示正则匹配URI时是字母大小写敏感的。")]),_._v(" "),v("p",[_._v("\\4.   ～*表示正则匹配URI时忽略字母大小写问题。")]),_._v(" "),v("p",[_._v("\\5.   ^～表示正则匹配URI时只需要其前半部分与uri参数匹配即可。")]),_._v(" "),v("p",[v("strong",[_._v("匹配优先规则：")])]),_._v(" "),v("p",[_._v("\\1.     精确匹配优先 =")]),_._v(" "),v("p",[_._v("\\2.     正则匹配优先 ^~")]),_._v(" "),v("p",[_._v("\\3.     前缀最大匹配优先。")]),_._v(" "),v("p",[_._v("\\4.     配置靠前优化")]),_._v(" "),v("p",[_._v("（4）root 指定站点根目录")]),_._v(" "),v("p",[_._v("可配置在 server与location中，基于ROOT路径+URL中路径去寻找指定文件。")]),_._v(" "),v("p",[_._v("（5）alias 指定站点别名")]),_._v(" "),v("p",[_._v("只能配置location 中。基于alias 路径+ URL移除location  前缀后的路径来寻找文件。")]),_._v(" "),v("p",[_._v("如下示例：")]),_._v(" "),v("p",[_._v("location /V1 {")]),_._v(" "),v("p",[_._v("alias  /www/old_site;")]),_._v(" "),v("p",[_._v("index  index.html index.htm;")]),_._v(" "),v("p",[_._v("}")]),_._v(" "),v("p",[_._v("#防问规则如下")]),_._v(" "),v("p",[_._v("URL：http://xxx:xx/V1/a.html")]),_._v(" "),v("p",[_._v("最终寻址：/www/old_site/a.thml")]),_._v(" "),v("p",[v("strong",[_._v("动静分离演示：")])]),_._v(" "),v("p",[_._v("l  创建静态站点")]),_._v(" "),v("p",[_._v("l  配置 location /static")]),_._v(" "),v("p",[_._v("l  配置 ~* .(gif|png|css|js)$")]),_._v(" "),v("p",[v("strong",[_._v("基于目录动静分离")])]),_._v(" "),v("p",[_._v("server {")]),_._v(" "),v("p",[_._v("​    listen 80;")]),_._v(" "),v("p",[_._v("​    server_name *.luban.com;")]),_._v(" "),v("p",[_._v("​    root /usr/www/luban;")]),_._v(" "),v("p",[_._v("​    location / {")]),_._v(" "),v("p",[_._v("​        index luban.html;")]),_._v(" "),v("p",[_._v("​    }")]),_._v(" "),v("p",[_._v("​    location /static {")]),_._v(" "),v("p",[_._v("​    alias /usr/www/static;")]),_._v(" "),v("p",[_._v("​    }")]),_._v(" "),v("p",[_._v("}")]),_._v(" "),v("p",[v("strong",[_._v("基于正则动静分离")])]),_._v(" "),v("p",[_._v("location ~* .(gif|jpg|png|css|js)$ {")]),_._v(" "),v("p",[_._v("root /usr/www/static;")]),_._v(" "),v("p",[_._v("}")]),_._v(" "),v("p",[v("strong",[_._v("防盗链配置演示：")])]),_._v(" "),v("p",[_._v("# 加入至指定location 即可实现")]),_._v(" "),v("p",[_._v("valid_referers none blocked *.luban.com;")]),_._v(" "),v("p",[_._v("if ($invalid_referer) {")]),_._v(" "),v("p",[_._v("return 403;")]),_._v(" "),v("p",[_._v("}")]),_._v(" "),v("p",[v("strong",[_._v("下载限速：")])]),_._v(" "),v("p",[_._v("location /download {")]),_._v(" "),v("p",[_._v("limit_rate 1m; //限制每S下载速度")]),_._v(" "),v("p",[_._v("limit_rate_after 30m; // 超过30 之 后在下载")]),_._v(" "),v("p",[_._v("}")]),_._v(" "),v("p",[v("strong",[_._v("创建IP黑名单")])]),_._v(" "),v("p",[_._v("#封禁指定IP")]),_._v(" "),v("p",[_._v("deny 192.168.0.1;")]),_._v(" "),v("p",[_._v("allow 192.168.0.1;")]),_._v(" "),v("p",[_._v("#开放指定IP 段")]),_._v(" "),v("p",[_._v("allow 192.168.0.0/24;")]),_._v(" "),v("p",[_._v("#封禁所有")]),_._v(" "),v("p",[_._v("deny   all;")]),_._v(" "),v("p",[_._v("#开放所有")]),_._v(" "),v("p",[_._v("allow   all;")]),_._v(" "),v("p",[_._v("# 创建黑名单文件")]),_._v(" "),v("p",[_._v("echo 'deny 192.168.0.132;' >> balck.ip")]),_._v(" "),v("p",[_._v("#http 配置块中引入 黑名单文件")]),_._v(" "),v("p",[_._v("include    black.ip;")]),_._v(" "),v("h3",{attrs:{id:"_3、日志配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、日志配置"}},[_._v("#")]),_._v(" 3、日志配置：")]),_._v(" "),v("p",[v("strong",[_._v("日志格式：")])]),_._v(" "),v("p",[_._v("log_format  main  '$remote_addr - $remote_user [$time_local]  \"$request\" '")]),_._v(" "),v("p",[_._v("​          '$status $body_bytes_sent \"$http_referer\" '")]),_._v(" "),v("p",[_._v('​         \'"$http_user_agent" "$http_x_forwarded_for"\';')]),_._v(" "),v("p",[_._v("access_log  logs/access.log  main;")]),_._v(" "),v("p",[_._v("#基于域名打印日志")]),_._v(" "),v("p",[_._v("access_log logs/$host.access.log main;")]),_._v(" "),v("p",[v("strong",[_._v("error日志的设置")])]),_._v(" "),v("p",[_._v("语法：error_log /path/file level;")]),_._v(" "),v("p",[_._v("默认：error_log logs/error.log error;")]),_._v(" "),v("p",[_._v("level是日志的输出级别，取值范围是debug、info、notice、warn、error、crit、alert、emerg，")]),_._v(" "),v("p",[v("strong",[_._v("针对指定的客户端输出debug级别的日志")])]),_._v(" "),v("p",[_._v("语法：debug_connection[IP|CIDR]")]),_._v(" "),v("p",[_._v("events {")]),_._v(" "),v("p",[_._v("debug_connection 192.168.0.147;")]),_._v(" "),v("p",[_._v("debug_connection 10.224.57.0/200;")]),_._v(" "),v("p",[_._v("}")]),_._v(" "),v("p",[_._v("注意：debug 日志开启 必须在安装时 添加  --with-debug (允许debug)")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://attachments-cdn.shimo.im/uhMsgcdhudg2yAND/nginx.conf",target:"_blank",rel:"noopener noreferrer"}},[_._v("nginx.conf"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=n.exports}}]);