(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{770:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"seata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seata"}},[a._v("#")]),a._v(" "),s("strong",[a._v("seata")])]),a._v(" "),s("h2",{attrs:{id:"seata-下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seata-下载"}},[a._v("#")]),a._v(" seata 下载")]),a._v(" "),s("p",[a._v("http://seata.io/en-us/blog/download.html")]),a._v(" "),s("p",[a._v("选择自己的版本下载")]),a._v(" "),s("h2",{attrs:{id:"seata和nacos整合开发分布式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seata和nacos整合开发分布式"}},[a._v("#")]),a._v(" seata和nacos整合开发分布式")]),a._v(" "),s("h3",{attrs:{id:"第一步-配置seata的服务器端的数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步-配置seata的服务器端的数据库"}},[a._v("#")]),a._v(" 第一步 配置seata的服务器端的数据库")]),a._v(" "),s("p",[a._v("0、全局事务会话信息由3块内容构成，全局事务--\x3e分支事务--\x3e全局锁，对应表global_table、branch_table、lock_table")]),a._v(" "),s("p",[a._v("1、建立一个数据库名字随意(我起的名字——seata)用来做seata服务端的库，存储全局事务的会话信息")]),a._v(" "),s("p",[a._v("2、拿到服务端数据库的脚本文件执行并且建立表第0步三张表")]),a._v(" "),s("p",[a._v("https://github.com/seata/seata/tree/1.2.0/script/server/db")]),a._v(" "),s("p",[a._v("上面地址可以拿到数据库脚本，选择mysql然后自己执行")]),a._v(" "),s("h3",{attrs:{id:"第二步-修改服务端启动包的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步-修改服务端启动包的文件"}},[a._v("#")]),a._v(" 第二步 修改服务端启动包的文件")]),a._v(" "),s("p",[a._v('1、启动包: seata--\x3econf--\x3efile.conf，修改store.mode="db"')]),a._v(" "),s("p",[a._v("2、修改自己的db连接信息")]),a._v(" "),s("p",[a._v("这些信息是存在file.conf当中的也就是seata启动的时候会去读取这个配置文件；如果我们使用nacos可以把这些信息放到nacos的注册中心；从而实现动态更新；")]),a._v(" "),s("p",[a._v("如果你需要把这些信息放到nacos配置中心就需要修改seata--\x3econf--\x3eregisty.conf文件当中的注册中心和配置中心的信息，修改成为nacos；（为什么需要修改config和register呢？因为如果你的seata服务器想要去配置中心读取配置，那么一定到得把自己注册到nacos；所以registy.conf当中需要配置注册中心的地址也需要配置配置中心的地址）")]),a._v(" "),s("p",[a._v("这样我们如果后面启动seata就可以看到他是作为了一个nacos的客户端注册到了nacos的注册中心的；记住这点seata已经可以作为客户端注册到nacos了；")]),a._v(" "),s("h3",{attrs:{id:"第三步-把配置信息上传到nacos配置中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步-把配置信息上传到nacos配置中心"}},[a._v("#")]),a._v(" 第三步 把配置信息上传到nacos配置中心")]),a._v(" "),s("p",[a._v("1、启动nacos")]),a._v(" "),s("p",[a._v("2、https://github.com/seata/seata/tree/1.2.0/script/config-center到这个地址上面获取config.txt，然后把config.txt当道idea当中去编辑；推荐使用idea编辑；因为可能有编码原因；保留自己想要的信息")]),a._v(" "),s("p",[a._v("我这里给出的是精简后的，你们需要自己对应修改自己的信息；主要是数据库配置信息")]),a._v(" "),s("p",[a._v("注意这些信息是服务器端和客户端都要使用的；")]),a._v(" "),s("p",[a._v("由于上面我们已经把seata注册到了nacos；所以他的file.conf当中的信息可以直接从nacos读取；也就是下面我们配置的信息；换句话说如果你配置了seata作为nacos的一个客户端去读取配置那么file.conf可以不用配置了；这两步是重复的；这也是网上很多资料没有说明的；")]),a._v(" "),s("p",[a._v("换成大白话的意思就是你如果配置了registy.conf那么file.conf当中的信息基本无效——都是从配置中心读取；甚至可以删了file.conf；你们可以自己测试；如果你不配置registy.conf，那么seata就会从file.conf当中读取配置；所以file.conf和registy.conf其实只需要配置一个；")]),a._v(" "),s("h4",{attrs:{id:"精简后的配置如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#精简后的配置如下"}},[a._v("#")]),a._v(" 精简后的配置如下")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("#事务分组——my_test_tx_group 这值会在我们客户端对应，需要注意\nservice.vgroupMapping.my_test_tx_group=default\nservice.default.grouplist=127.0.0.1:8091\nstore.mode=db\nstore.db.datasource=druid\nstore.db.dbType=mysql\nstore.db.driverClassName=com.mysql.jdbc.Driver\nstore.db.url=jdbc:mysql://ip::3306/seata?useUnicode=true\nstore.db.user=username\nstore.db.password=password\nstore.db.minConn=5\nstore.db.maxConn=30\nstore.db.globalTable=global_table\nstore.db.branchTable=branch_table\nstore.db.queryLimit=100\nstore.db.lockTable=lock_table\nstore.db.maxWait=5000\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("那么这些精简后的配置如何传到nacos呢？")]),a._v(" "),s("p",[a._v("https://github.com/seata/seata/tree/1.2.0/script/config-center")]),a._v(" "),s("p",[a._v("从上面这个地址下载nacos文件下面的nacos-config.sh文件然后执行")]),a._v(" "),s("p",[a._v("sh 你下载后的路径/nacos-config.sh；当然如果你的nacos地址断后不上默认的，需要修改naocs-config.sh当中指定你的路径；也可以在sh命令后面指定；")]),a._v(" "),s("p",[a._v("https://github.com/seata/seata/tree/1.2.0/script/config-center这个地址里面有个readme文件有说明")]),a._v(" "),s("p",[a._v("执行完成之后，你可以看到nacos的配置中心上面多了很多配置；注意这个时候seata服务器用的就是这些配置了；你可以修改一个错误的试试是不能启动seata服务器的")]),a._v(" "),s("h3",{attrs:{id:"第四步-启动seata服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四步-启动seata服务器"}},[a._v("#")]),a._v(" 第四步 启动seata服务器")]),a._v(" "),s("p",[a._v("讲道理可以启动成功——注意不要用jdk11；我课上测试过有问题")]),a._v(" "),s("h3",{attrs:{id:"第五步-建立微服务项目-以spring-cloud为例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五步-建立微服务项目-以spring-cloud为例"}},[a._v("#")]),a._v(" 第五步 建立微服务项目----以spring cloud为例")]),a._v(" "),s("p",[a._v("maven引入seata-spring-boot-starter、spring-cloud-alibaba-seata这两个jar")]),a._v(" "),s("p",[a._v("其中seata-spring-boot-starter选择你对应的seata版本比如1.2；但是spring-cloud-alibaba-seata这个jar当中自动依赖了seata-spring-boot-starter但是版本对应不上；比如spring-cloud-alibaba-seata当中依赖的seata-spring-boot-starter可能是0.9；所以需要剔除他；什么意思呢？")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("\t\t<dependency>\n            <groupId>io.seata</groupId>\n            <artifactId>seata-spring-boot-starter</artifactId>\n            <version>你的版本比如1.2.0</version>\n        </dependency>\n      \n\t\t<dependency>\n            <groupId>com.alibaba.cloud</groupId>\n            <artifactId>spring-cloud-alibaba-seata</artifactId>\n            \x3c!-- 这里需要剔除，因为上面我们已经引入了自己对应的版本 --\x3e\n            <exclusions>\n                <exclusion>\n                    <artifactId>io.seata</artifactId>\n                    <groupId>seata-spring-boot-starter</groupId>\n                </exclusion>\n            </exclusions>\n\t\t</dependency>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("当然咯分布式事务肯定需要是至少两个项目；所以你在两个项目当中都加上这些依赖；如果你是nacos的自然还需要加上其他jar；这里不在说了；")]),a._v(" "),s("p",[a._v("建好项目之后；写好代码。自己模拟一个分布式事务的场景")]),a._v(" "),s("p",[a._v("比如A调用B项目，在B项目里面操作数据库")]),a._v(" "),s("p",[a._v("加上A项目当中的AController当中的a()；调用B项目当中的BController当中的b()；b方法操作数据库；那么则在A项目当中的AController的a()上面加上@GlobalTransactional这个注解")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v('@RestController\npublic class A{\n\t@GlobalTransactional\n\t@GetMapping("xxxxxx")\n\tpublic string a(){\n\t\t通过feign调用b\n\t}\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"第六步-配置客户端的seata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第六步-配置客户端的seata"}},[a._v("#")]),a._v(" 第六步 配置客户端的seata")]),a._v(" "),s("p",[a._v("如果你的项目已经成为了nacos的客户端，那么直接可以从nacos读取第三步当中上传到nacos的各种配置；那么如何读取呢？")]),a._v(" "),s("p",[a._v("首先得在客户端进行配置告诉seata客户端需要去nacos注册中心去读取seata的配置；可能有同学会问我们的微服务项目不上已经指定了？为什么还需要配置seata去读取呢？这个我在补录的视频里面有解释")]),a._v(" "),s("h4",{attrs:{id:"配置客户端的yml读取nacos上的seata的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置客户端的yml读取nacos上的seata的配置"}},[a._v("#")]),a._v(" 配置客户端的yml读取nacos上的seata的配置")]),a._v(" "),s("p",[a._v("打开这个地址https://github.com/seata/seata/tree/1.2.0/script/client")]),a._v(" "),s("p",[a._v("找到spring文件夹，找到application.yml；这个yml是通用配置；你需要精简；我给出精简后的吧")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v('seata:\n  enabled: true\n  application-id: applicationName\n  tx-service-group: my_test_tx_group\n  enable-auto-data-source-proxy: true\n  use-jdk-proxy: false\n  config:\n    type: nacos\n   \n    nacos:\n      namespace:\n      serverAddr: localhost:你的端口\n      group: SEATA_GROUP\n      userName: ""\n      password: ""\n    \n  registry:\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: localhost:你的端口\n      namespace:\n      userName: ""\n      password: ""\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("p",[a._v("这个配置需要在你的每一个参与分布式事务的项目当中加上——直接写到项目的yml当中就可以了。这个配置的意思就是让我们的seata客户端直接从配置中心拉取配置；")]),a._v(" "),s("h3",{attrs:{id:"最后一步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后一步"}},[a._v("#")]),a._v(" 最后一步")]),a._v(" "),s("p",[a._v("需要在你的客户端操作的数据库当中建立undo_log表；这个表用来实现sql反向补偿也就是回滚的信息")]),a._v(" "),s("p",[a._v("这个表的见表语句——https://github.com/seata/seata/tree/1.2.0/script/client/at/db")]),a._v(" "),s("p",[a._v("注意是建立在你的微服务所对应的库中；比如你的B服务链接了X库；那么则在x库中建立这个表；如果你的A服务链接了Y库；则Y库也需要这个表")]),a._v(" "),s("h1",{attrs:{id:"资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资料"}},[a._v("#")]),a._v(" 资料")]),a._v(" "),s("p",[a._v("https://juejin.im/post/5d54effe6fb9a06aeb10b646")])])}),[],!1,null,null,null);s.default=n.exports}}]);