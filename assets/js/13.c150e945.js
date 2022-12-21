(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{427:function(s,a,e){"use strict";e.r(a);var t=e(1),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-3"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Docker（3）")])]),s._v(" "),a("p",[s._v("有时候需要共享镜像或者习惯使用自己定义的镜像，可以注册私有仓库，国内推荐使用阿里云")]),s._v(" "),a("p",[s._v("步骤：")]),s._v(" "),a("p",[s._v("1.登录阿里云容器镜像服务：https://cr.console.aliyun.com/cn-hangzhou/repositories")]),s._v(" "),a("p",[s._v("2.将镜像推送到阿里云")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录阿里云的docker仓库")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" registry.cn-hangzhou.aliyuncs.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建指定镜像的tag，归入某个仓库")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" registry.cn-hangzhou.aliyuncs.com/huaan/huaan:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像版本号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 讲镜像推送到仓库")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push registry.cn-hangzhou.aliyuncs.com/huaan/huaan:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("镜像版本号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("3.拉取镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull registry.cn-hangzhou.aliyuncs.com/coldest7/mytom:v1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"docker-网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-网络"}},[s._v("#")]),s._v(" Docker 网络")]),s._v(" "),a("p",[s._v("Docker允许通过外部访问容器或容器互联的方式来提供网络服务。")]),s._v(" "),a("p",[s._v("安装Docker时，会自动安装一块Docker网卡称为docker0，用于Docker各容器及宿主机的网络通信，网段为172.0.0.1。")]),s._v(" "),a("p",[s._v("Docker网络中有三个核心概念：沙盒（Sandbox）、网络（Network）、端点（Endpoint）。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("沙盒，提供了容器的虚拟网络栈，也即端口套接字、IP路由表、防火墙等内容。隔离容器网络与宿主机网络，形成了完全独立的容器网络环境。")])]),s._v(" "),a("li",[a("p",[s._v("网络，可以理解为Docker内部的虚拟子网，网络内的参与者相互可见并能够进行通讯。Docker的虚拟网络和宿主机网络是存在隔离关系的，其目的主要是形成容器间的安全通讯环境。")])]),s._v(" "),a("li",[a("p",[s._v("端点，位于容器或网络隔离墙之上的洞，主要目的是形成一个可以控制的突破封闭的网络环境的出入口。当容器的端点与网络的端点形成配对后，就如同在这两者之间搭建了桥梁，便能够进行数据传输了。")])])]),s._v(" "),a("h2",{attrs:{id:"docker的四种网络模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker的四种网络模式"}},[s._v("#")]),s._v(" Docker的四种网络模式")]),s._v(" "),a("p",[s._v("Docker服务在启动的时候会创建三种网络，bridge、host和none，还有一种共享容器的模式container")]),s._v(" "),a("h3",{attrs:{id:"bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bridge"}},[s._v("#")]),s._v(" Bridge")]),s._v(" "),a("p",[s._v("桥接模式，主要用来对外通信的，docker容器默认的网络使用的就是bridge。")]),s._v(" "),a("p",[s._v("使用bridge模式配置容器自定的网络配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置容器的主机名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" t1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),s._v(" bridge "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("自定义主机名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" busybox\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义DNS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" t1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),s._v(" bridge "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dns")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" busybox\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给host文件添加一条")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" t1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),s._v(" bridge --add-host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rm")]),s._v(" busybox\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[s._v("#")]),s._v(" Host")]),s._v(" "),a("p",[s._v("host类型的网络就是主机网络的意思，绑定到这种网络上面的容器，内部使用的端口直接绑定在主机上对应的端口，而如果容器服务没有使用端口，则无影响。")]),s._v(" "),a("h3",{attrs:{id:"none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[s._v("#")]),s._v(" None")]),s._v(" "),a("p",[s._v("从某种意义上来说，none应该算不上网络了，因为它不使用任何网络，会形成一个封闭网络的容器")]),s._v(" "),a("h3",{attrs:{id:"container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[s._v("#")]),s._v(" container")]),s._v(" "),a("p",[s._v("共享另外一个容器的network namespace，和host模式差不多，只是这里不是使用宿主机网络，而是使用的容器网络")]),s._v(" "),a("h2",{attrs:{id:"自定义docker0桥的网络属性信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义docker0桥的网络属性信息"}},[s._v("#")]),s._v(" 自定义docker0桥的网络属性信息")]),s._v(" "),a("p",[s._v("/etc/docker/daemon.json文件")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bip"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.5.5/16"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fixed-cidr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.20.0.0/16"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fixed-cidr-v6"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2001:db8::/64"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mtu"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"default-gateway"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.20.1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"default-gateway-v6"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2001:db8:abcd::89"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.20.1.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.20.1.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("核心选项为bip，即bridge ip之意，用于指定docker0桥自身的IP地址；其它选项可通过此地址计算得出")]),s._v(" "),a("p",[s._v("创建自定义的桥网络")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" bridge "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--subnet")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.26.0.0/16"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--gateway")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.26.0.1"')]),s._v(" mybr0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker Compose")]),s._v(" "),a("p",[s._v("从上一节课我们了解到可以使用一个Dockerfile模板文件来快速构建一个自己的镜像并运行为应用容器。但是在平时工作的时候，我们会碰到多个容器要互相配合来使用的情况，比如数据库加上咱们Web应用等等。这种情况下，每次都要一个一个启动容器设置命令变得麻烦起来，所以Docker Compose诞生了。")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("Compose的作用是“定义和运行多个Docker容器的应用”。使用Compose，你可以在一个配置文件（yaml格式）中配置你应用的服务，然后使用一个命令，即可创建并启动配置中引用的所有服务。")]),s._v(" "),a("p",[s._v("Compose中两个重要概念：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("服务 (service)：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。")])]),s._v(" "),a("li",[a("p",[s._v("项目 (project)：由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml文件中定义。")])])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("Compose支持三平台Windows、Mac、Linux，安装方式各有不同。我这里使用的是Linux系统，其他系统安装方法可以参考官方文档和开源GitHub链接：")]),s._v(" "),a("p",[s._v("Docker Compose官方文档链接：https://docs.docker.com/compose")]),s._v(" "),a("p",[s._v("Docker Compose GitHub链接：https://github.com/docker/compose")]),s._v(" "),a("p",[s._v("Linux上有两种安装方法，Compose项目是用Python写的，可以使用Python-pip安装，也可以通过GitHub下载二进制文件进行安装。")]),s._v(" "),a("h3",{attrs:{id:"通过python-pip安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过python-pip安装"}},[s._v("#")]),s._v(" 通过Python-pip安装")]),s._v(" "),a("p",[s._v("1.安装Python-pip")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" epel-release\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" python-pip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2.安装docker-compose")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3.验证是否安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4.卸载")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pip uninstall "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"通过github链接下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过github链接下载安装"}},[s._v("#")]),s._v(" 通过GitHub链接下载安装")]),s._v(" "),a("p",[s._v("非ROOT用户记得加sudo")]),s._v(" "),a("p",[s._v("1.通过GitHub获取下载链接，以往版本地址：https://github.com/docker/compose/releases")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/docker/compose/releases/download/1.23.2/docker-compose-'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" /usr/local/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.给二进制下载文件可执行的权限")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3.可能没有启动程序，设置软连接，比如:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/bin/docker-compose /usr/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4.验证是否安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5.卸载")]),s._v(" "),a("p",[s._v("如果是二进制包方式安装的，删除二进制文件即可。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /usr/local/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"简单实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单实例"}},[s._v("#")]),s._v(" 简单实例")]),s._v(" "),a("p",[s._v("Compose的使用非常简单，只需要编写一个docker-compose.yml，然后使用docker-compose 命令操作即可。docker-compose.yml描述了容器的配置，而docker-compose 命令描述了对容器的操作。")]),s._v(" "),a("p",[s._v("1.我们使用一个微服务项目先来做一个简单的例子，首先创建一个compose的工作目录，然后创建一个eureka文件夹，里面放可执行jar包和编写一个Dockerfile文件，目录结构如下：")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("compose\n\teureka\n\t\tDockerfile\n\t\teureka-server-2.0.2.RELEASE.jar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("2.在compose目录创建模板文件docker-compose.yml文件并写入以下内容：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./eureka\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 3000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"docker-compose模板文件常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose模板文件常用指令"}},[s._v("#")]),s._v(" Docker Compose模板文件常用指令")]),s._v(" "),a("h3",{attrs:{id:"image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[s._v("#")]),s._v(" image")]),s._v(" "),a("p",[s._v("指定镜像名称或者镜像id，如果该镜像在本地不存在，Compose会尝试pull下来。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("p",[s._v("image: java:8")]),s._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[s._v("#")]),s._v(" build")]),s._v(" "),a("p",[s._v("指定Dockerfile文件的路径。可以是一个路径，例如：")]),s._v(" "),a("p",[s._v("build: ./dir")]),s._v(" "),a("p",[s._v("也可以是一个对象，用以指定Dockerfile和参数，例如：")]),s._v(" "),a("p",[s._v("build:  context: ./dir  dockerfile: Dockerfile-alternate  args:   buildno: 1")]),s._v(" "),a("h3",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[s._v("#")]),s._v(" command")]),s._v(" "),a("p",[s._v("覆盖容器启动后默认执行的命令。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("p",[s._v("command: bundle exec thin -p 3000")]),s._v(" "),a("p",[s._v("也可以是一个list，类似于Dockerfile总的CMD指令，格式如下：")]),s._v(" "),a("p",[s._v("command: [bundle, exec, thin, -p, 3000]")]),s._v(" "),a("h3",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[s._v("#")]),s._v(" links")]),s._v(" "),a("p",[s._v("链接到其他服务中的容器。可以指定服务名称和链接的别名使用SERVICE:ALIAS 的形式，或者只指定服务名称，示例：")]),s._v(" "),a("p",[s._v("web:  links:   - db   - db:database   - redis")]),s._v(" "),a("h3",{attrs:{id:"external-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-links"}},[s._v("#")]),s._v(" external_links")]),s._v(" "),a("p",[s._v("表示链接到docker-compose.yml外部的容器，甚至并非Compose管理的容器，特别是对于那些提供共享容器或共同服务。格式跟links类似，示例：")]),s._v(" "),a("p",[s._v("external_links:  - redis_1  - project_db_1:mysql  - project_db_1:postgresql")]),s._v(" "),a("h3",{attrs:{id:"ports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[s._v("#")]),s._v(" ports")]),s._v(" "),a("p",[s._v("暴露端口信息。使用宿主端口:容器端口的格式，或者仅仅指定容器的端口（此时宿主机将会随机指定端口），类似于docker run -p ，示例：")]),s._v(" "),a("p",[s._v("ports:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v('"3000"')])]),s._v(" "),a("li",[a("p",[s._v('"3000-3005"')])]),s._v(" "),a("li",[a("p",[s._v('"8000:8000"')])]),s._v(" "),a("li",[a("p",[s._v('"9090-9091:8080-8081"')])]),s._v(" "),a("li",[a("p",[s._v('"49100:22"')])]),s._v(" "),a("li",[a("p",[s._v('"127.0.0.1:8001:8001"')])]),s._v(" "),a("li",[a("p",[s._v('"127.0.0.1:5000-5010:5000-5010"')])])]),s._v(" "),a("h3",{attrs:{id:"expose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[s._v("#")]),s._v(" expose")]),s._v(" "),a("p",[s._v("暴露端口，只将端口暴露给连接的服务，而不暴露给宿主机，示例：")]),s._v(" "),a("p",[s._v('expose:  - "3000"  - "8000"')]),s._v(" "),a("h3",{attrs:{id:"volumes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volumes"}},[s._v("#")]),s._v(" volumes")]),s._v(" "),a("p",[s._v("卷挂载路径设置。可以设置宿主机路径 （HOST:CONTAINER） 或加上访问模式 （HOST:CONTAINER:ro）。示例：")]),s._v(" "),a("p",[s._v("volumes:")]),s._v(" "),a("p",[s._v("Just specify a path and let the Engine create a volume")]),s._v(" "),a("ul",[a("li",[s._v("/var/lib/mysql")])]),s._v(" "),a("p",[s._v("Specify an absolute path mapping")]),s._v(" "),a("ul",[a("li",[s._v("/opt/data:/var/lib/mysql")])]),s._v(" "),a("p",[s._v("Path on the host, relative to the Compose file")]),s._v(" "),a("ul",[a("li",[s._v("./cache:/tmp/cache")])]),s._v(" "),a("p",[s._v("User-relative path")]),s._v(" "),a("ul",[a("li",[s._v("~/configs:/etc/configs/:ro")])]),s._v(" "),a("p",[s._v("Named volume")]),s._v(" "),a("ul",[a("li",[s._v("datavolume:/var/lib/mysql")])]),s._v(" "),a("h3",{attrs:{id:"volumes-from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volumes-from"}},[s._v("#")]),s._v(" volumes_from")]),s._v(" "),a("p",[s._v("从另一个服务或者容器挂载卷。可以指定只读或者可读写，如果访问模式没有指定，则默认是可读写。示例：")]),s._v(" "),a("p",[s._v("volumes_from:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("service_name")])]),s._v(" "),a("li",[a("p",[s._v("service_name:ro")])]),s._v(" "),a("li",[a("p",[s._v("container:container_name")])]),s._v(" "),a("li",[a("p",[s._v("container:container_name:rw")])])]),s._v(" "),a("h3",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[s._v("#")]),s._v(" environment")]),s._v(" "),a("p",[s._v("设置环境变量。可以使用数组或者字典两种方式。只有一个key的环境变量可以在运行Compose的机器上找到对应的值，这有助于加密的或者特殊主机的值。示例：")]),s._v(" "),a("p",[s._v("environment:  RACK_ENV: development  SHOW: 'true'  SESSION_SECRET:  environment:  - RACK_ENV=development  - SHOW=true  - SESSION_SECRET")]),s._v(" "),a("h3",{attrs:{id:"env-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env-file"}},[s._v("#")]),s._v(" env_file")]),s._v(" "),a("p",[s._v("从文件中获取环境变量，可以为单独的文件路径或列表。如果通过 docker-compose -f FILE 指定了模板文件，则 env_file 中路径会基于模板文件路径。如果有变量名称与 environment 指令冲突，则以envirment 为准。示例：")]),s._v(" "),a("p",[s._v("env_file: .env  env_file:  - ./common.env  - ./apps/web.env  - /opt/secrets.env")]),s._v(" "),a("h3",{attrs:{id:"extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[s._v("#")]),s._v(" extends")]),s._v(" "),a("p",[s._v("继承另一个服务，基于已有的服务进行扩展。")]),s._v(" "),a("h3",{attrs:{id:"net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net"}},[s._v("#")]),s._v(" net")]),s._v(" "),a("p",[s._v("设置网络模式。示例：")]),s._v(" "),a("p",[s._v('net: "bridge" net: "host" net: "none" net: "container:[service name or container name/id]"')]),s._v(" "),a("h3",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[s._v("#")]),s._v(" dns")]),s._v(" "),a("p",[s._v("配置dns服务器。可以是一个值，也可以是一个列表。示例：")]),s._v(" "),a("p",[s._v("dns: 8.8.8.8 dns:  - 8.8.8.8  - 9.9.9.9")]),s._v(" "),a("h3",{attrs:{id:"dns-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-search"}},[s._v("#")]),s._v(" dns_search")]),s._v(" "),a("p",[s._v("配置DNS的搜索域，可以是一个值，也可以是一个列表，示例：")]),s._v(" "),a("p",[s._v("dns_search: example.com dns_search:  - dc1.example.com  - dc2.example.com")]),s._v(" "),a("h3",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[s._v("#")]),s._v(" 其它")]),s._v(" "),a("p",[s._v("docker-compose.yml 还有很多其他命令，可以参考docker-compose.yml文件官方文档：")]),s._v(" "),a("p",[s._v("https://docs.docker.com/compose/compose-file/")]),s._v(" "),a("h2",{attrs:{id:"使用docker-compose编排springcloud微服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用docker-compose编排springcloud微服务"}},[s._v("#")]),s._v(" 使用Docker Compose编排SpringCloud微服务")]),s._v(" "),a("p",[s._v("使用docker-compose一次性来编排三个微服务:eureka服务(eureka-server-2.0.2.RELEASE.jar)、user服务(user-2.0.2.RELEASE.jar)、power服务(power-2.0.2.RELEASE.jar)")]),s._v(" "),a("p",[s._v("1.创建一个工作目录和docker-compose模板文件")]),s._v(" "),a("p",[s._v("2.工作目录下创建三个文件夹eureka、user、power，并分别构建好三个服务的镜像文件")]),s._v(" "),a("p",[s._v("以eureka的Dockerfile为例:")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基础镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" java:8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作者")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" huaan")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把可执行jar包复制到基础镜像的根目录下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" eureka-server-2.0.2.RELEASE.jar /eureka-server-2.0.2.RELEASE.jar")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像要暴露的端口，如要使用端口，在执行docker run命令时使用-p生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8080")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在镜像运行为容器后执行的命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/eureka-server-2.0.2.RELEASE.jar"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("目录文件结构：")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("compose\n\tdocker-compose.yml\n\teureka\n\t\tDockerfile\n\t\teureka-server-2.0.2.RELEASE.jar\n\tuser\n\t\tDockerfile\n\t\tuser-2.0.2.RELEASE.jar\n\tpower\n\t\tDockerfile\n\t\tpower-2.0.2.RELEASE.jar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("3.编写docker-compose模板文件：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" eureka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8081"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("power")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" power"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8082"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("4.启动微服务，可以加上参数-d后台启动")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);