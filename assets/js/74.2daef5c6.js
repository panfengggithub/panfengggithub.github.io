(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{490:function(a,e,s){"use strict";s.r(e);var r=s(1),n=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-1"}},[a._v("#")]),a._v(" "),e("strong",[a._v("Docker（1）")])]),a._v(" "),e("p",[a._v("主讲：鲁班学院-华安")]),a._v(" "),e("h2",{attrs:{id:"docker-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-简介"}},[a._v("#")]),a._v(" Docker 简介")]),a._v(" "),e("h3",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),e("p",[a._v("开发和运维之间因为环境不同而导致的矛盾")]),a._v(" "),e("p",[a._v("集群环境下每台机器部署相同的应用")]),a._v(" "),e("p",[a._v("DevOps(Development and Operations)")]),a._v(" "),e("h3",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),e("p",[a._v("Docker是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的Linux机器上，也可以实现虚拟化，容器是完全使用沙箱机制，相互之间不会有任何接口。")]),a._v(" "),e("p",[a._v("Docker是世界领先的软件容器平台。开发人员利用 Docker 可以消除协作编码时“在我的机器上可正常工作”的问题。运维人员利用 Docker 可以在隔离容器中并行运行和管理应用，获得更好的计算密度。企业利用 Docker 可以构建敏捷的软件交付管道，以更快的速度、更高的安全性和可靠的信誉为 Linux 和 Windows Server 应用发布新功能。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587017617582-88b3ba8d-43a3-4b45-9f2b-9ff16b7da376.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_45%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),e("h3",{attrs:{id:"docker优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker优点"}},[a._v("#")]),a._v(" Docker优点")]),a._v(" "),e("p",[a._v("简化程序：\nDocker 让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，便可以实现虚拟化。Docker改变了虚拟化的方式，使开发者可以直接将自己的成果放入Docker中进行管理。方便快捷已经是 Docker的最大优势，过去需要用数天乃至数周的任务，在Docker容器的处理下，只需要数秒就能完成。")]),a._v(" "),e("p",[a._v("避免选择恐惧症：\n如果你有选择恐惧症，还是资深患者。Docker 帮你打包你的纠结！比如 Docker 镜像；Docker 镜像中包含了运行环境和配置，所以 Docker 可以简化部署多种应用实例工作。比如 Web 应用、后台应用、数据库应用、大数据应用比如 Hadoop 集群、消息队列等等都可以打包成一个镜像部署。")]),a._v(" "),e("p",[a._v("节省开支：\n一方面，云计算时代到来，使开发者不必为了追求效果而配置高额的硬件，Docker 改变了高性能必然高价格的思维定势。Docker 与云的结合，让云空间得到更充分的利用。不仅解决了硬件管理的问题，也改变了虚拟化的方式。")]),a._v(" "),e("h2",{attrs:{id:"docker-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-架构"}},[a._v("#")]),a._v(" Docker 架构")]),a._v(" "),e("p",[a._v("Docker使用C/S架构，Client通过接口与Server进程通信实现容器的构建，运行和发布，如图：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587017629001-91afd66d-0b2b-4836-92f9-8614fcbc691b.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_34%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),e("h3",{attrs:{id:"host-docker-宿主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host-docker-宿主机"}},[a._v("#")]),a._v(" Host(Docker 宿主机)")]),a._v(" "),e("p",[a._v("安装了Docker程序，并运行了Docker daemon的主机。")]),a._v(" "),e("h4",{attrs:{id:"docker-daemon-docker-守护进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-daemon-docker-守护进程"}},[a._v("#")]),a._v(" Docker daemon(Docker 守护进程)：")]),a._v(" "),e("p",[a._v("运行在宿主机上，Docker守护进程，用户通过Docker client(Docker命令)与Docker daemon交互。")]),a._v(" "),e("h4",{attrs:{id:"images-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#images-镜像"}},[a._v("#")]),a._v(" Images(镜像)：")]),a._v(" "),e("p",[a._v("将软件环境打包好的模板，用来创建容器的，一个镜像可以创建多个容器。")]),a._v(" "),e("p",[a._v("镜像分层结构：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587017642482-36494fbb-d25f-426c-b76c-2a9b27c415f9.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),e("p",[a._v("位于下层的镜像称为父镜像(Parent Image)，最底层的称为基础镜像(Base Image)。")]),a._v(" "),e("p",[a._v("最上层为“可读写”层，其下的均为“只读”层。")]),a._v(" "),e("p",[a._v("AUFS:")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("advanced multi-layered unification filesystem：高级多层统一文件系统")])]),a._v(" "),e("li",[e("p",[a._v("用于为Linux文件系统实现“联合挂载”")])]),a._v(" "),e("li",[e("p",[a._v("AUFS是之前的UnionFS的重新实现")])]),a._v(" "),e("li",[e("p",[a._v("Docker最初使用AUFS作为容器文件系统层")])]),a._v(" "),e("li",[e("p",[a._v("AUFS的竞争产品是overlayFS，从3.18开始被合并入Linux内核")])]),a._v(" "),e("li",[e("p",[a._v("Docker的分层镜像，除了AUFS，Docker还支持btrfs，devicemapper和vfs等")])])]),a._v(" "),e("h4",{attrs:{id:"containers-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#containers-容器"}},[a._v("#")]),a._v(" Containers(容器)：")]),a._v(" "),e("p",[a._v("Docker的运行组件，启动一个镜像就是一个容器，容器与容器之间相互隔离，并且互不影响。")]),a._v(" "),e("h3",{attrs:{id:"docker-client-docker-客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-client-docker-客户端"}},[a._v("#")]),a._v(" Docker Client(Docker 客户端)")]),a._v(" "),e("p",[a._v("Docker命令行工具，用户是用Docker Client与Docker daemon进行通信并返回结果给用户。也可以使用其他工具通过"),e("a",{attrs:{href:"https://docs.docker.com/develop/sdk/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker Api "),e("OutboundLink")],1),a._v("与Docker daemon通信。")]),a._v(" "),e("h3",{attrs:{id:"registry-仓库服务注册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registry-仓库服务注册"}},[a._v("#")]),a._v(" Registry(仓库服务注册)")]),a._v(" "),e("p",[a._v("经常会和仓库(Repository)混为一谈，实际上Registry上可以有多个仓库，每个仓库可以看成是一个用户，一个用户的仓库放了多个镜像。仓库分为了公开仓库(Public Repository)和私有仓库(Private Repository)，最大的公开仓库是官方的"),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker Hub"),e("OutboundLink")],1),a._v("，国内也有如阿里云、时速云等，可以给国内用户提供稳定快速的服务。用户也可以在本地网络内创建一个私有仓库。当用户创建了自己的镜像之后就可以使用 push 命令将它上传到公有或者私有仓库，这样下次在另外一台机器上使用这个镜像时候，只需要从仓库上 pull 下来就可以了。")]),a._v(" "),e("h2",{attrs:{id:"docker-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[a._v("#")]),a._v(" Docker 安装")]),a._v(" "),e("p",[a._v("Docker 提供了两个版本：社区版 (CE) 和企业版 (EE)。")]),a._v(" "),e("h3",{attrs:{id:"操作系统要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作系统要求"}},[a._v("#")]),a._v(" 操作系统要求")]),a._v(" "),e("p",[a._v("以Centos7为例，且Docker 要求操作系统必须为64位，且centos内核版本为3.1及以上。")]),a._v(" "),e("p",[a._v("查看系统内核版本信息：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("uname -r\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"一、准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、准备"}},[a._v("#")]),a._v(" 一、准备")]),a._v(" "),e("p",[a._v("卸载旧版本：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("yum remove docker docker-common docker-selinux docker-engine\nyum remove docker-ce\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("卸载后将保留"),e("code",[a._v("/var/lib/docker")]),a._v("的内容（镜像、容器、存储卷和网络等）。")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("rm -rf /var/lib/docker\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("1.安装依赖软件包")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("yum install -y yum-utils device-mapper-persistent-data lvm2\n#安装前可查看device-mapper-persistent-data和lvm2是否已经安装\nrpm -qa|grep device-mapper-persistent-data\nrpm -qa|grep lvm2\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("2.设置yum源")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("3.更新yum软件包索引")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("yum makecache fast\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"二、安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、安装"}},[a._v("#")]),a._v(" 二、安装")]),a._v(" "),e("p",[a._v("安装最新版本docker-ce")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("yum install docker-ce -y\n#安装指定版本docker-ce可使用以下命令查看\nyum list docker-ce.x86_64  --showduplicates | sort -r\n# 安装完成之后可以使用命令查看\ndocker version\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"三、配置镜像加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、配置镜像加速"}},[a._v("#")]),a._v(" 三、配置镜像加速")]),a._v(" "),e("p",[a._v("这里使用阿里云的免费镜像加速服务，也可以使用其他如时速云、网易云等")]),a._v(" "),e("p",[a._v("1.注册登录开通阿里云"),e("a",{attrs:{href:"https://cr.console.aliyun.com/cn-hangzhou/repositories",target:"_blank",rel:"noopener noreferrer"}},[a._v("容器镜像服务"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("2.查看控制台，招到镜像加速器并复制自己的加速器地址")]),a._v(" "),e("p",[a._v("3.找到/etc/docker目录下的daemon.json文件，没有则直接"),e("code",[a._v("vi daemon.json")])]),a._v(" "),e("p",[a._v("4.加入以下配置")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v('#填写自己的加速器地址\n{\n  "registry-mirrors": ["https://zfzbet67.mirror.aliyuncs.com"]\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("5.通知systemd重载此配置文件；")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("systemctl daemon-reload\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("6.重启docker服务")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("systemctl restart docker\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"docker常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker常用操作"}},[a._v("#")]),a._v(" Docker常用操作")]),a._v(" "),e("p",[a._v("输入"),e("code",[a._v("docker")]),a._v("可以查看Docker的命令用法，输入"),e("code",[a._v("docker COMMAND --help")]),a._v("查看指定命令详细用法。")]),a._v(" "),e("h3",{attrs:{id:"镜像常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像常用操作"}},[a._v("#")]),a._v(" 镜像常用操作")]),a._v(" "),e("p",[a._v("查找镜像：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker search 关键词\n#搜索docker hub网站镜像的详细信息\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("下载镜像：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker pull 镜像名:TAG\n# Tag表示版本，有些镜像的版本显示latest，为最新版本\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("查看镜像：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker images\n# 查看本地所有镜像\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("删除镜像：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker rmi -f 镜像ID或者镜像名:TAG\n# 删除指定本地镜像\n# -f 表示强制删除\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("获取元信息：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker inspect 镜像ID或者镜像名:TAG\n# 获取镜像的元信息，详细信息\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"容器常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器常用操作"}},[a._v("#")]),a._v(" 容器常用操作")]),a._v(" "),e("p",[a._v("运行：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker run --name 容器名 -i -t -p 主机端口:容器端口 -d -v 主机目录:容器目录:ro 镜像ID或镜像名:TAG\n# --name 指定容器名，可自定义，不指定自动命名\n# -i 以交互模式运行容器\n# -t 分配一个伪终端，即命令行，通常-it组合来使用\n# -p 指定映射端口，讲主机端口映射到容器内的端口\n# -d 后台运行容器\n# -v 指定挂载主机目录到容器目录，默认为rw读写模式，ro表示只读\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("容器列表：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker ps -a -q\n# docker ps查看正在运行的容器\n# -a 查看所有容器（运行中、未运行）\n# -q 只查看容器的ID\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("启动容器：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker start 容器ID或容器名\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("停止容器：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker stop 容器ID或容器名\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("删除容器：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker rm -f 容器ID或容器名\n# -f 表示强制删除\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("查看日志：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker logs 容器ID或容器名\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("进入正在运行容器：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker exec -it 容器ID或者容器名 /bin/bash\n# 进入正在运行的容器并且开启交互模式终端\n# /bin/bash是固有写法，作用是因为docker后台必须运行一个进程，否则容器就会退出，在这里表示启动容器后启动bash。\n# 也可以用docker exec在运行中的容器执行命令\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("拷贝文件：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker cp 主机文件路径 容器ID或容器名:容器路径 #主机中文件拷贝到容器中\ndocker cp 容器ID或容器名:容器路径 主机文件路径 #容器中文件拷贝到主机中\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("获取容器元信息：")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("docker inspect 容器ID或容器名\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587017488391-25f1ef51-f12a-44bd-b41e-57d58632fa51.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_48%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);