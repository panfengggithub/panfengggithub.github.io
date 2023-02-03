(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{490:function(s,a,e){"use strict";e.r(a);var t=e(1),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-2"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Docker（2）")])]),s._v(" "),a("p",[s._v("有时候从Docker镜像仓库中下载的镜像不能满足要求，我们可以基于一个基础镜像构建一个自己的镜像")]),s._v(" "),a("p",[s._v("两种方式：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("更新镜像：使用"),a("code",[s._v("docker commit")]),s._v("命令")])]),s._v(" "),a("li",[a("p",[s._v("构建镜像：使用"),a("code",[s._v("docker build")]),s._v("命令，需要创建Dockerfile文件")])])]),s._v(" "),a("h2",{attrs:{id:"更新镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新镜像"}},[s._v("#")]),s._v(" 更新镜像")]),s._v(" "),a("p",[s._v("先使用基础镜像创建一个容器，然后对容器内容进行更改，然后使用"),a("code",[s._v("docker commit")]),s._v("命令提交为一个新的镜像（以tomcat为例）。")]),s._v(" "),a("p",[s._v("1.根据基础镜像，创建容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mytomcat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":8080 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" tomcat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.修改容器内容")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" mytomcat /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" webapps/ROOT\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" index.jsp\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello world "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" index.html\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("3.提交为新镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"描述消息"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"作者"')]),s._v(" 容器ID或容器名 镜像名:TAG\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# docker commit -m="修改了首页" -a="华安" mytomcat huaan/tomcat:v1.0')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("4.使用新镜像运行容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" tom "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" huaan/tomcat:v1.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"使用dockerfile构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用dockerfile构建镜像"}},[s._v("#")]),s._v(" 使用Dockerfile构建镜像")]),s._v(" "),a("h3",{attrs:{id:"什么是dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是dockerfile"}},[s._v("#")]),s._v(" 什么是Dockerfile？")]),s._v(" "),a("p",[s._v("Dockerfile is nothing but the source code for building Docker images")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Docker can build images automatically by reading the instructions from a Dockerfile")])]),s._v(" "),a("li",[a("p",[s._v("A Dockerfile is a "),a("strong",[s._v("text document")]),s._v(" that contains all the commands a user could call on the command line to assemble an image")])]),s._v(" "),a("li",[a("ul",[a("li",[s._v("Using "),a("strong",[s._v("docker build")]),s._v(" users can create an automated build that executes several command-line instructions in succession")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587017706307-8195b999-d90b-467a-a24f-15969ee89493.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_13%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"dockerfile格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile格式"}},[s._v("#")]),s._v(" Dockerfile格式")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Format：")])]),s._v(" "),a("li",[a("ul",[a("li",[s._v("#Comment")])])]),s._v(" "),a("li",[a("ul",[a("li",[s._v("INSTRUCTION arguments")])])]),s._v(" "),a("li",[a("p",[s._v("The instruction is not case-sensitive")])]),s._v(" "),a("li",[a("ul",[a("li",[s._v("However,convention is for them to be UPPERCASE to distinguish them from arguments more easily")])])]),s._v(" "),a("li",[a("p",[s._v("Docker runs instructions in a Dockerfile in order")])]),s._v(" "),a("li",[a("p",[s._v("The first instruction must be 'FROM' in order to specify the Base Image from which you are building")])])]),s._v(" "),a("h3",{attrs:{id:"使用dockerfile构建springboot应用镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用dockerfile构建springboot应用镜像"}},[s._v("#")]),s._v(" 使用Dockerfile构建SpringBoot应用镜像")]),s._v(" "),a("p",[s._v("一、准备")]),s._v(" "),a("p",[s._v("1.把你的springboot项目打包成可执行jar包")]),s._v(" "),a("p",[s._v("2.把jar包上传到Linux服务器")]),s._v(" "),a("p",[s._v("二、构建")]),s._v(" "),a("p",[s._v("1.在jar包路径下创建Dockerfile文件"),a("code",[s._v("vi Dockerfile")])]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定基础镜像，本地没有会从dockerHub pull下来")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" java:8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#作者")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" huaan")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把可执行jar包复制到基础镜像的根目录下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" luban.jar /luban.jar")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像要暴露的端口，如要使用端口，在执行docker run命令时使用-p生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 80")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在镜像运行为容器后执行的命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/luban.jar"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("2.使用"),a("code",[s._v("docker build")]),s._v("命令构建镜像，基本语法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" huaan/mypro:v1 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f指定Dockerfile文件的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -t指定镜像名字和TAG")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .指当前目录，这里实际上需要一个上下文路径")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("三、运行")]),s._v(" "),a("p",[s._v("运行自己的SpringBoot镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" pro "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" 镜像名:TAG\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"dockerfile常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile常用指令"}},[s._v("#")]),s._v(" Dockerfile常用指令")]),s._v(" "),a("h4",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[s._v("#")]),s._v(" FROM")]),s._v(" "),a("p",[s._v("FROM指令是最重要的一个并且必须为Dockerfile文件开篇的第一个非注释行，用于为镜像文件构建过程指定基础镜像，后续的指令运行于此基础镜像提供的运行环境")]),s._v(" "),a("p",[s._v("这个基础镜像可以是任何可用镜像，默认情况下docker build会从本地仓库找指定的镜像文件，如果不存在就会从Docker Hub上拉取")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" <image>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" <image>:<tag>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" <image>@<digest>")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"maintainer-depreacted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maintainer-depreacted"}},[s._v("#")]),s._v(" MAINTAINER(depreacted)")]),s._v(" "),a("p",[s._v("Dockerfile的制作者提供的本人详细信息")]),s._v(" "),a("p",[s._v("Dockerfile不限制MAINTAINER出现的位置，但是推荐放到FROM指令之后")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" <name>")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("name可以是任何文本信息，一般用作者名称或者邮箱")]),s._v(" "),a("h4",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[s._v("#")]),s._v(" LABEL")]),s._v(" "),a("p",[s._v("给镜像指定各种元数据")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" <key>=<value> <key>=<value> <key>=<value>...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("一个Dockerfile可以写多个LABEL，但是不推荐这么做，Dockerfile每一条指令都会生成一层镜像，如果LABEL太长可以使用\\符号换行。构建的镜像会继承基础镜像的LABEL，并且会去掉重复的，但如果值不同，则后面的值会覆盖前面的值。")]),s._v(" "),a("h4",{attrs:{id:"copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[s._v("#")]),s._v(" COPY")]),s._v(" "),a("p",[s._v("用于从宿主机复制文件到创建的新镜像文件")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" <src>...<dest>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<src>"')]),s._v(",..."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<dest>"')]),s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <src>：要复制的源文件或者目录，可以使用通配符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <dest>：目标路径，即正在创建的image的文件系统路径；建议<dest>使用绝对路径，否则COPY指令则以WORKDIR为其起始路径")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注意：如果你的路径中有空白字符，通常会使用第二种格式")]),s._v(" "),a("p",[s._v("规则：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("<src>")]),s._v("必须是build上下文中的路径，不能是其父目录中的文件")])]),s._v(" "),a("li",[a("p",[s._v("如果"),a("code",[s._v("<src>")]),s._v("是目录，则其内部文件或子目录会被递归复制，但"),a("code",[s._v("<src>")]),s._v("目录自身不会被复制")])]),s._v(" "),a("li",[a("p",[s._v("如果指定了多个"),a("code",[s._v("<src>")]),s._v("，或在"),a("code",[s._v("<src>")]),s._v("中使用了通配符，则"),a("code",[s._v("<dest>")]),s._v("必须是一个目录，则必须以/符号结尾")])]),s._v(" "),a("li",[a("p",[s._v("如果"),a("code",[s._v("<dest>")]),s._v("不存在，将会被自动创建，包括其父目录路径")])])]),s._v(" "),a("h4",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[s._v("#")]),s._v(" ADD")]),s._v(" "),a("p",[s._v("基本用法和COPY指令一样，ADD支持使用TAR文件和URL路径")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" <src>...<dest>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<src>"')]),s._v(",..."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<dest>"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("规则：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("和COPY规则相同")])]),s._v(" "),a("li",[a("p",[s._v("如果"),a("code",[s._v("<src>")]),s._v("为URL并且"),a("code",[s._v("<dest>")]),s._v("没有以/结尾，则"),a("code",[s._v("<src>")]),s._v("指定的文件将被下载到"),a("code",[s._v("<dest>")])])]),s._v(" "),a("li",[a("p",[s._v("如果"),a("code",[s._v("<src>")]),s._v("是一个本地系统上压缩格式的tar文件，它会展开成一个目录；但是通过URL获取的tar文件不会自动展开")])]),s._v(" "),a("li",[a("p",[s._v("如果"),a("code",[s._v("<src>")]),s._v("有多个，直接或间接使用了通配符指定多个资源，则"),a("code",[s._v("<dest>")]),s._v("必须是目录并且以/结尾")])])]),s._v(" "),a("h4",{attrs:{id:"workdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[s._v("#")]),s._v(" WORKDIR")]),s._v(" "),a("p",[s._v("用于为Dockerfile中所有的RUN、CMD、ENTRYPOINT、COPY和ADD指定设定工作目录，只会影响当前WORKDIR之后的指令。")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" <dirpath>")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在Dockerfile文件中，WORKDIR可以出现多次，路径可以是相对路径，但是它是相对于前一个WORKDIR指令指定的路径")]),s._v(" "),a("p",[s._v("另外，WORKDIR可以是ENV指定定义的变量")]),s._v(" "),a("h4",{attrs:{id:"volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[s._v("#")]),s._v(" VOLUME")]),s._v(" "),a("p",[s._v("用来创建挂载点，可以挂载宿主机上的卷或者其他容器上的卷")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" <mountpoint>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<mountpoint>"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("不能指定宿主机当中的目录，宿主机挂载的目录是自动生成的")]),s._v(" "),a("h4",{attrs:{id:"expose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[s._v("#")]),s._v(" EXPOSE")]),s._v(" "),a("p",[s._v("用于给容器打开指定要监听的端口以实现和外部通信")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" <port>[/<protocol>] [<port>[/<protocol>]...]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("<protocol>")]),s._v("用于指定传输层协议，可以是TCP或者UDP，默认是TCP协议")]),s._v(" "),a("p",[s._v("EXPOSE可以一次性指定多个端口，例如："),a("code",[s._v("EXPOSE 80/tcp 80/udp")])]),s._v(" "),a("h4",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[s._v("#")]),s._v(" ENV")]),s._v(" "),a("p",[s._v("用来给镜像定义所需要的环境变量，并且可以被Dockerfile文件中位于其后的其他指令(如ENV、ADD、COPY等)所调用，调用格式："),a("img",{attrs:{src:"https://g.yuque.com/gr/latex?variable_name%E6%88%96%E8%80%85",alt:"img"}}),s._v("{variable_name}")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" <key> <value>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" <key>=<value>...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("第一种格式中，"),a("code",[s._v("<key>")]),s._v("之后的所有内容都会被视为"),a("code",[s._v("<value>")]),s._v("的组成部分，所以一次只能设置一个变量")]),s._v(" "),a("p",[s._v("第二种格式可以一次设置多个变量，如果"),a("code",[s._v("<value>")]),s._v("当中有空格可以使用\\进行转义或者对"),a("code",[s._v("<value>")]),s._v("加引号进行标识；另外\\也可以用来续行")]),s._v(" "),a("h4",{attrs:{id:"arg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arg"}},[s._v("#")]),s._v(" ARG")]),s._v(" "),a("p",[s._v("用法同ENV")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" <name>[=<default value>]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("指定一个变量，可以在docker build创建镜像的时候，使用"),a("code",[s._v("--build-arg <varname>=<value>")]),s._v("来指定参数")]),s._v(" "),a("h4",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" RUN")]),s._v(" "),a("p",[s._v("用来指定docker build过程中运行指定的命令")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" <command>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<executable>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param1>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param2>"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("第一种格式里面的参数一般是一个shell命令，以"),a("code",[s._v("/bin/sh -c")]),s._v("来运行它")]),s._v(" "),a("p",[s._v("第二种格式中的参数是一个JSON格式的数组，当中"),a("code",[s._v("<executable>")]),s._v("是要运行的命令，后面是传递给命令的选项或者参数；但是这种格式不会用"),a("code",[s._v("/bin/sh -c")]),s._v("来发起，所以常见的shell操作像变量替换和通配符替换不会进行；如果你运行的命令依赖shell特性，可以替换成类型以下的格式")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<executable>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param1>"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[s._v("#")]),s._v(" CMD")]),s._v(" "),a("p",[s._v("容器启动时运行的命令")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" <command>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<executable>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param1>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param2>"')]),s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param1>"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<param2>"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("前两种语法和RUN相同")]),s._v(" "),a("p",[s._v("第三种语法用于为ENTRYPOINT指令提供默认参数")]),s._v(" "),a("p",[s._v("RUN和CMD区别：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("RUN指令运行于镜像文件构建过程中，CMD则运行于基于Dockerfile构建出的新镜像文件启动为一个容器的时候")])]),s._v(" "),a("li",[a("p",[s._v("CMD指令的主要目的在于给启动的容器指定默认要运行的程序，且在运行结束后，容器也将终止；不过，CMD命令可以被docker run的命令行选项给覆盖")])]),s._v(" "),a("li",[a("p",[s._v("Dockerfile中可以存在多个CMD指令，但是只有最后一个会生效")])])]),s._v(" "),a("h4",{attrs:{id:"entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[s._v("#")]),s._v(" ENTRYPOINT")]),s._v(" "),a("p",[s._v("类似于CMD指令功能，用于给容器指定默认运行程序")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[s._v('ENTRYPOINT<command>\nENTRYPOINT["<executable>","<param1>","<param2>"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("和CMD不同的是ENTRYPOINT启动的程序不会被docker run命令指定的参数所覆盖，而且，这些命令行参数会被当做参数传递给ENTRYPOINT指定的程序(但是，docker run命令的--entrypoint参数可以覆盖ENTRYPOINT)")]),s._v(" "),a("p",[s._v("docker run命令传入的参数会覆盖CMD指令的内容并且附加到ENTRYPOINT命令最后作为其参数使用")]),s._v(" "),a("p",[s._v("同样，Dockerfile中可以存在多个ENTRYPOINT指令，但是只有最后一个会生效")]),s._v(" "),a("p",[s._v("Dockerfile中如果既有CMD又有ENTRYPOINT，并且CMD是一个完整可执行命令，那么谁在最后谁生效")]),s._v(" "),a("h4",{attrs:{id:"onbuild"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onbuild"}},[s._v("#")]),s._v(" ONBUILD")]),s._v(" "),a("p",[s._v("用来在Dockerfile中定义一个触发器")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ONBUILD")]),s._v(" <instruction>")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Dockerfile用来构建镜像文件，镜像文件也可以当成是基础镜像被另外一个Dockerfile用作FROM指令的参数")]),s._v(" "),a("p",[s._v("在后面这个Dockerfile中的FROM指令在构建过程中被执行的时候，会触发基础镜像里面的ONBUILD指令")]),s._v(" "),a("p",[s._v("ONBUILD不能自我嵌套，ONBUILD不会触发FROM和MAINTAINER指令")]),s._v(" "),a("p",[s._v("在ONBUILD指令中使用ADD和COPY要小心，因为新构建过程中的上下文在缺少指定的源文件的时候会失败")])])}),[],!1,null,null,null);a.default=r.exports}}]);