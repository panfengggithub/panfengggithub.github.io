(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{565:function(e,s,a){"use strict";a.r(s);var r=a(1),t=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("strong",[e._v("课程概要：")])]),e._v(" "),s("ol",[s("li",[e._v("分布式项目开发与联调")]),e._v(" "),s("li",[e._v("控制管理后台使用")]),e._v(" "),s("li",[e._v("Dubbo注册中心详解")])]),e._v(" "),s("h2",{attrs:{id:"一、分布式项目开发与联调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、分布式项目开发与联调"}},[e._v("#")]),e._v(" 一、分布式项目开发与联调")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"接口暴露与引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口暴露与引用"}},[e._v("#")]),e._v(" "),s("strong",[e._v("接口暴露与引用")])]),e._v(" "),s("p",[e._v("在一个RPC场景中 ，调用方是通过接口来调用服务端，传入参数并获得返回结果。这样服务端的接口和模型必须暴露给调用方项目。服务端如何暴露呢？客户端如何引用呢？\n"),s("strong",[e._v("接口信息")]),e._v(" "),s("strong",[e._v("、模型信息")]),e._v(" "),s("strong",[e._v("、异常")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images-cdn.shimo.im/nsvICKNyq687hiNs/image.png!thumbnail",alt:"图片"}}),e._v("\n暴露接口的通常做法是 接口与实现分离，服务端将 接口、模型、异常 等统一放置于一个模块，实现置于另一个模块。调用方通过Maven进行引用。\n"),s("img",{attrs:{src:"https://images-cdn.shimo.im/JIxwaSLRiJ4NLuSQ/image.png!thumbnail",alt:"图片"}})]),e._v(" "),s("h3",{attrs:{id:"自动化构建与协作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建与协作"}},[e._v("#")]),e._v(" "),s("strong",[e._v("自动化构建与协作")])]),e._v(" "),s("p",[e._v("当项目越来越多，服务依懒关系越发复杂的时候，为了提高协作效率，必须采用自动化工具 完成 接口从编写到构建成JAR包，最后到引用的整个过程。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images-cdn.shimo.im/0DHl4ab1PgopzJGV/image.png!thumbnail",alt:"图片"}})]),e._v(" "),s("p",[e._v("流程描述：")]),e._v(" "),s("ol",[s("li",[e._v("服务提供者项目发人员编写Client 接口")]),e._v(" "),s("li",[e._v("push 至远程仓库")]),e._v(" "),s("li",[e._v("jenkins 构建指定版本")]),e._v(" "),s("li",[e._v("jenkins Deploye 至私服仓库 nexus")]),e._v(" "),s("li",[e._v("服务消费者项目开发人员基于maven 从私服务仓库下载")])]),e._v(" "),s("h3",{attrs:{id:"接口平滑升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口平滑升级"}},[e._v("#")]),e._v(" "),s("strong",[e._v("接口平滑升级：")])]),e._v(" "),s("p",[e._v("在项目迭代过程当中， 经常会有多个项目依懒同一个接口，如下图 项目B、C都依懒了项目A当中的接口1，此时项目B业务需要，需要接口1多增加一个参数，升级完成后。项目B能正确构建上线，项目C却不行。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images-cdn.shimo.im/dK7PhemwltoIHlkY/image.png!thumbnail",alt:"图片"}})]),e._v(" "),s("p",[e._v("解决办法与原则：")]),e._v(" "),s("ol",[s("li",[e._v("接口要做到向下兼容：接口参数尽量以对象形式进行封装。Model属性只增不删，如果需要作废，可以添加@Deprecated  标识。")]),e._v(" "),s("li",[e._v("如果出现了不可兼容的变更，则必须通知调用方整改，并制定上线计划。")])]),e._v(" "),s("h3",{attrs:{id:"开发联调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发联调"}},[e._v("#")]),e._v(" "),s("strong",[e._v("开发联调：")])]),e._v(" "),s("p",[e._v("在项目开发过程当中，一个开发或测试环境的注册中心很有可能会同时承载着多个服务，如果两组服务正在联调，如何保证调用的是目标服务呢？")]),e._v(" "),s("p",[s("strong",[e._v("1、基于临时分组联调")]),e._v("\ngroup 分组\n 在reference 和server 当中采用相同的临时组 ,通过group 进行设置\n"),s("strong",[e._v("2、直连提供者：")]),e._v("\n在reference 中指定提供者的url即可做到直连")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<dubbo:reference  url="dubbo://127.0.0.1:20880" id="demoService"\n                  timeout="2000"\n                  interface="com.tuling.teach.service.DemoService" check="false"/>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("strong",[e._v("3、只注册：")]),e._v("\n一个项目有可能同是为即是服务提供者又消费者，在测试时需要调用某一服务同时又不希望正在开发的服务影响到其它订阅者如何实现？\n通过修改 register=false 即可实现")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<dubbo:registry address="multicast://224.5.6.7:1234" register="false"/>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),s("h2",{attrs:{id:"二、dubbo控制管理后台使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、dubbo控制管理后台使用"}},[e._v("#")]),e._v(" 二、Dubbo控制管理后台使用")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"dubbo-控制后台版本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-控制后台版本说明"}},[e._v("#")]),e._v(" "),s("strong",[e._v("Dubbo 控制后台版本说明：")])]),e._v(" "),s("p",[e._v("dubbo 在2.6.0 以前 使用dubbo-admin 作为管理后台，2.6 以后已经去掉dubbo-admin 并采用 incubator-dubbo-ops  作为新的管理后台，目前该后台还在开发中还没有发布正式的版本  ，所以本节课还是采用的旧版的dubbo-admin 来演示。")]),e._v(" "),s("h3",{attrs:{id:"dubbo-控制后台的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-控制后台的安装"}},[e._v("#")]),e._v(" "),s("strong",[e._v("Dubbo 控制后台的安装：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("#从github 中下载dubbo 项目\ngit clone https://github.com/apache/incubator-dubbo.git\n#更新项目\ngit fetch\n#临时切换至 dubbo-2.5.8 版本\ngit checkout dubbo-2.5.8\n#进入 dubbo-admin 目录\ncd dubbo-admin\n#mvn 构建admin war 包\nmvn clean pakcage -DskipTests\n#得到 dubbo-admin-2.5.8.war 即可直接部署至Tomcat\n#修改 dubbo.properties 配置文件\ndubbo.registry.address=zookeeper://127.0.0.1:2181\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[e._v("注：如果实在懒的构建 可直接下载已构建好的：\n链接："),s("a",{attrs:{href:"https://pan.baidu.com/s/1zJFNPgwNVgZZ-xobAfi5eQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://pan.baidu.com/s/1zJFNPgwNVgZZ-xobAfi5eQ"),s("OutboundLink")],1),e._v(" 提取码：gjtv")]),e._v(" "),s("p",[s("strong",[e._v("控制后台基本功能介绍 ：")])]),e._v(" "),s("ul",[s("li",[e._v("服务查找：")]),e._v(" "),s("li",[e._v("服务关系查看:")]),e._v(" "),s("li",[e._v("服务权重调配：")]),e._v(" "),s("li",[e._v("服务路由：")]),e._v(" "),s("li",[s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("服务禁用\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"三、dubbo注册中心详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、dubbo注册中心详解"}},[e._v("#")]),e._v(" 三、Dubbo注册中心详解")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"注册中心的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册中心的作用"}},[e._v("#")]),e._v(" 注册中心的作用")]),e._v(" "),s("p",[e._v("为了到达服务集群动态扩容的目的，注册中心存储了服务的地址信息与可用状态信息，并实时推送给订阅了相关服务的客户端。\n"),s("img",{attrs:{src:"https://images-cdn.shimo.im/bkW47bqX26U4bGHv/image.png!thumbnail",alt:"图片"}})]),e._v(" "),s("p",[s("strong",[e._v("一个完整的注册中心需要实现以下功能：")])]),e._v(" "),s("ol",[s("li",[e._v("接收服务端的注册与客户端的引用，即将引用与消费建立关联，并支持多对多。")]),e._v(" "),s("li",[e._v("当服务非正常关闭时能即时清除其状态")]),e._v(" "),s("li",[e._v("当注册中心重启时，能自动恢复注册数据，以及订阅请求")]),e._v(" "),s("li",[e._v("注册中心本身的集群")])]),e._v(" "),s("h3",{attrs:{id:"dubbo所支持的注册中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo所支持的注册中心"}},[e._v("#")]),e._v(" Dubbo所支持的注册中心")]),e._v(" "),s("ol",[s("li",[s("strong",[e._v("Multicast 注册中心")])]),e._v(" "),s("li",[e._v("基于组网广播技术，只能用在局域网内，一般用于简单的测试服务")]),e._v(" "),s("li",[s("strong",[e._v("Zookeeper 注册中心("),s("strong",[s("strong",[e._v("推荐")])]),e._v(")")])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zookeeper"),s("OutboundLink")],1),e._v(" 是 Apacahe Hadoop 的子项目，是一个树型的目录服务，支持变更推送，适合作为 Dubbo 服务的注册中心，工业强度较高，可用于生产环境，并推荐使用")]),e._v(" "),s("li",[s("strong",[e._v("Redis 注册中心")])]),e._v(" "),s("li",[e._v("基于Redis的注册中心")]),e._v(" "),s("li",[s("strong",[e._v("Simple 注册中心")])]),e._v(" "),s("li",[e._v("基于本身的Dubbo服务实现（SimpleRegistryService），不支持集群可作为自定义注册中心的参考，但不适合直接用于生产环境。")])]),e._v(" "),s("h3",{attrs:{id:"redis-注册中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-注册中心"}},[e._v("#")]),e._v(" "),s("strong",[e._v("Redis 注册中心")])]),e._v(" "),s("p",[e._v("关于Redis注册中心我们需要了解两点，")]),e._v(" "),s("ol",[s("li",[e._v("如何存储服务的注册与订阅关系")]),e._v(" "),s("li",[e._v("是当服务状态改变时如何即时更新")])]),e._v(" "),s("p",[e._v("演示使用Redis 做为注册中心的使用。")]),e._v(" "),s("ul",[s("li",[e._v("[ ] 启动Redis服务")]),e._v(" "),s("li",[e._v("[ ] 服务端配置注册中心")]),e._v(" "),s("li",[e._v("[ ] 启动两个服务端")]),e._v(" "),s("li",[e._v("[ ] 通过RedisClient 客户端观察Redis中的数据")])]),e._v(" "),s("p",[e._v("redis 注册中心配置：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<dubbo:registry protocol="redis" address="192.168.0.147:6379"/>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("当我们启动两个服务端后发现，Reids中增加了一个Hash 类型的记录，其key为/dubbo/tuling.dubbo.server.UserService/providers。Value中分别存储了两个服务提供者的URL和有效期。\n"),s("img",{attrs:{src:"https://images-cdn.shimo.im/68VyXno7jC83jiow/image.png!thumbnail",alt:"图片"}})]),e._v(" "),s("p",[s("strong",[e._v("同样消费者也是类似其整体结构如下：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("//服务提供者注册信息 \n/dubbbo/com.tuling.teach.service.DemoService/providers\n  dubbo://192.168.246.1:20880/XXX.DemoService=1542619052964 \n  dubbo://192.168.246.2:20880/XXX.DemoService=1542619052964 \n//服务消费订阅信息\n/dubbbo/com.tuling.teach.service.DemoService/consumers\n  dubbo://192.168.246.1:20880/XXX.DemoService=1542619788641\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("ul",[s("li",[e._v("主 Key 为服务名和类型")]),e._v(" "),s("li",[e._v("Map 中的 Key 为 URL 地址")]),e._v(" "),s("li",[e._v("Map 中的 Value 为过期时间，用于判断脏数据，脏数据由监控中心删除")])]),e._v(" "),s("p",[e._v("接下来回答第二个问题 "),s("strong",[e._v("当提供者突然 宕机状态能即里变更吗")]),e._v("？\n这里Dubbo采用的是定时心跳的机制 来维护服务URL的有效期，默认每30秒更新一次有效期。即URL对应的毫秒值。具体代码参见：com.alibaba.dubbo.registry.redis.RedisRegistry#expireExecutor")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images-cdn.shimo.im/DtcacPmmUFU66d0P/image.png!thumbnail",alt:"图片"}})]),e._v(" "),s("p",[e._v("com.alibaba.dubbo.registry.redis.RedisRegistry#deferExpired\ncom.alibaba.dubbo.registry.integration.RegistryDirectory\ncom.alibaba.dubbo.registry.support.ProviderConsumerRegTable")]),e._v(" "),s("h3",{attrs:{id:"zookeeper-注册中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-注册中心"}},[e._v("#")]),e._v(" "),s("strong",[e._v("Zookeeper 注册中心")])]),e._v(" "),s("p",[e._v("关于Zookeeper 注册中心同样需要了解其存储结构和更新机制。\nZookeper是一个树型的目录服务，本身支持变更推送相比redis的实现Publish/Subscribe功能更稳定。\n结构：\n"),s("img",{attrs:{src:"http://dubbo.apache.org/docs/zh-cn/user/sources/images/zookeeper.jpg",alt:"图片"}})]),e._v(" "),s("p",[s("strong",[e._v("失败重连")]),e._v("\ncom.alibaba.dubbo.registry.support.FailbackRegistry")]),e._v(" "),s("p",[s("strong",[e._v("提供者突然断开：")]),e._v("\n基于Zookeeper 临时节点机制实现，在客户端会话超时后 Zookeeper会自动删除所有临时节点，默认为40秒。\n// 创建临时节点")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("com.alibaba.dubbo.remoting.zookeeper.curator.CuratorZookeeperClient#createEphemeral\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("提问：\n在zookeeper 断开的40秒内 如果 有客户端加入 会调用 已失效的提供者连接吗？\n答：不会，提供者宕机后 ，其与客户端的链接也随即断开，客户端在调用前会检测长连接状态。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 检测连接是否有效\ncom.alibaba.dubbo.rpc.protocol.dubbo.DubboInvoker#isAvailable\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("创建 configurators与routers  会创建持久节点\n// 创建持久节点")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("com.alibaba.dubbo.remoting.zookeeper.curator.CuratorZookeeperClient#createPersistent\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("服务订阅机制实现：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 注册目录\ncom.alibaba.dubbo.registry.integration.RegistryDirectory\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("源码解析：\n"),s("img",{attrs:{src:"https://uploader.shimo.im/f/Os5phYmAnloi2v1O.png!thumbnail",alt:"图片"}}),e._v("\ncom.alibaba.dubbo.registry.integration.RegistryDirectory")])])}),[],!1,null,null,null);s.default=t.exports}}]);