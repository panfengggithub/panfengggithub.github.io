(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{526:function(s,a,n){"use strict";n.r(a);var e=n(1),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[s._v("#")]),s._v(" "),a("strong",[s._v("ZooKeeper")])]),s._v(" "),a("p",[s._v("ZooKeeper 是一个开放源码的分布式协调服务，它是集群的管理者，监视着集群")]),s._v(" "),a("p",[s._v("中各个节点的状态根据节点提交的反馈进行下一步合理操作。最终，将简单易用")]),s._v(" "),a("p",[s._v("的接口和性能高效、功能稳定的系统提供给用户。")]),s._v(" "),a("p",[s._v("分布式应用程序可以基于 Zookeeper 实现诸如数据发布/订阅、负载均衡、命名")]),s._v(" "),a("p",[s._v("服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。")]),s._v(" "),a("h2",{attrs:{id:"zookeeper-保证了如下分布式一致性特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-保证了如下分布式一致性特性"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Zookeeper 保证了如下分布式一致性特性")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、顺序一致性\n2、原子性\n3、单一视图\n4、可靠性\n5、实时性（最终一致性）\n客户端的读请求可以被集群中的任意一台机器处理，如果读请求在节点上注册了\n监听器，这个监听器也是由所连接的 zookeeper 机器来处理。对于写请求，这些\n请求会同时发给其他 zookeeper 机器并且达成一致后，请求才会返回成功。因此，\n随着 zookeeper 的集群机器增多，读请求的吞吐会提高但是写请求的吞吐会下降。\n有序性是 zookeeper 中非常重要的一个特性，所有的更新都是全局有序的，每个\n更新都有一个唯一的时间戳，这个时间戳称为 zxid（Zookeeper Transaction Id）。\n而读请求只会相对于更新有序，也就是读请求的返回结果中会带有这个\nzookeeper 最新的 zxid。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"_2-zookeeper-提供了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-zookeeper-提供了什么"}},[s._v("#")]),s._v(" "),a("strong",[s._v("2. ZooKeeper 提供了什么？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、文件系统\n\n2、通知机制\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_3-zookeeper-文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-zookeeper-文件系统"}},[s._v("#")]),s._v(" "),a("strong",[s._v("3. Zookeeper 文件系统")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("Zookeeper 提供一个多层级的节点命名空间（节点称为 znode）。与文件系统不\n同的是，这些节点都可以设置关联的数据，而文件系统中只有文件节点可以存放\n数据而目录节点不行。\nZookeeper 为了保证高吞吐和低延迟，在内存中维护了这个树状的目录结构，这\n种特性使得 Zookeeper 不能用于存放大量的数据，每个节点的存放数据上限为\n1M\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_4-zab-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-zab-协议"}},[s._v("#")]),s._v(" "),a("strong",[s._v("4. ZAB 协议？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("ZAB 协议是为分布式协调服务 Zookeeper 专门设计的一种支持崩溃恢复的原子广\n播协议。\nZAB 协议包括两种基本的模式：崩溃恢复和消息广播。\n当整个 zookeeper 集群刚刚启动或者 Leader 服务器宕机、重启或者网络故障导\n致不存在过半的服务器与 Leader 服务器保持正常通信时，所有进程（服务器）进\n入崩溃恢复模式，首先选举产生新的 Leader 服务器，然后集群中 Follower 服务\n器开始与新的 Leader 服务器进行数据同步，当集群中超过半数机器与该 Leader\n服务器完成数据同步之后，退出恢复模式进入消息广播模式，Leader 服务器开始\n接收客户端的事务请求生成事物提案来进行事务请求处理。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_5-四种类型的数据节点-znode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-四种类型的数据节点-znode"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5. 四种类型的数据节点 Znode")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、PERSISTENT-持久节点\n除非手动删除，否则节点一直存在于 Zookeeper 上\n2、EPHEMERAL-临时节点\n临时节点的生命周期与客户端会话绑定，一旦客户端会话失效（客户端与\nzookeeper 连接断开不一定会话失效），那么这个客户端创建的所有临时节点都\n会被移除。\n3、PERSISTENT_SEQUENTIAL-持久顺序节点\n基本特性同持久节点，只是增加了顺序属性，节点名后边会追加一个由父节点维\n护的自增整型数字.\n4、EPHEMERAL_SEQUENTIAL-临时顺序节点\n基本特性同临时节点，增加了顺序属性，节点名后边会追加一个由父节点维护的\n自增整型数字。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"_6-zookeeper-watcher-机制-数据变更通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-zookeeper-watcher-机制-数据变更通知"}},[s._v("#")]),s._v(" "),a("strong",[s._v("6. Zookeeper Watcher 机制 -- 数据变更通知")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("Zookeeper 允许客户端向服务端的某个 Znode 注册一个 Watcher 监听，当服务\n端的一些指定事件触发了这个 Watcher，服务端会向指定客户端发送一个事件通\n知来实现分布式的通知功能，然后客户端根据 Watcher 通知状态和事件类型做出\n业务上的改变。\n工作机制：\n1、客户端注册 watcher\n2、服务端处理 watcher\n3、客户端回调 watcher\nWatcher 特性总结：\n1、一次性\n无论是服务端还是客户端，一旦一个 Watcher 被触发，Zookeeper 都会将其从相\n应的存储中移除。这样的设计有效的减轻了服务端的压力，不然对于更新非常频\n繁的节点，服务端会不断的向客户端发送事件通知，无论对于网络还是服务端的\n压力都非常大。\n2、客户端串行执行\n客户端 Watcher 回调的过程是一个串行同步的过程。\n3、轻量\n3.1、Watcher 通知非常简单，只会告诉客户端发生了事件，而不会说明事件的具\n体内容。\n3.2、客户端向服务端注册 Watcher 的时候，并不会把客户端真实的 Watcher 对\n象实体传递到服务端，仅仅是在客户端请求中使用 boolean 类型属性进行了标记。\n4、watcher event 异步发送 watcher 的通知事件从 server 发送到 client 是异步\n的，这就存在一个问题，不同的客户端和服务器之间通过 socket 进行通信，由于\n网络延迟或其他因素导致客户端在不通的时刻监听到事件，由于 Zookeeper 本身\n提供了 ordering guarantee，即客户端监听事件后，才会感知它所监视 znode\n发生了变化。所以我们使用 Zookeeper 不能期望能够监控到节点每次的变化。\nZookeeper 只能保证最终的一致性，而无法保证强一致性。\n5、注册 watcher getData、exists、getChildren\n6、触发 watcher create、delete、setData\n7、当一个客户端连接到一个新的服务器上时，watch 将会被以任意会话事件触发。\n当与一个服务器失去连接的时候，是无法接收到 watch 的。而当 client 重新连接\n时，如果需要的话，所有先前注册过的 watch，都会被重新注册。通常这是完全\n透明的。只有在一个特殊情况下，watch 可能会丢失：对于一个未创建的 znode\n的 exist watch，如果在客户端断开连接期间被创建了，并且随后在客户端连接上\n之前又删除了，这种情况下，这个 watch 事件可能会被丢失。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h2",{attrs:{id:"_7-客户端注册-watcher-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-客户端注册-watcher-实现"}},[s._v("#")]),s._v(" "),a("strong",[s._v("7. 客户端注册 Watcher 实现")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、调用 getData()/getChildren()/exist()三个 API，传入 Watcher 对象\n2、标记请求 request，封装 Watcher 到 WatchRegistration\n3、封装成 Packet 对象，发服务端发送 request\n4、收到服务端响应后，将 Watcher 注册到 ZKWatcherManager 中进行管理\n5、请求返回，完成注册。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_8-服务端处理-watcher-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-服务端处理-watcher-实现"}},[s._v("#")]),s._v(" "),a("strong",[s._v("8. 服务端处理 Watcher 实现")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、服务端接收 Watcher 并存储\n接收到客户端请求，处理请求判断是否需要注册 Watcher，需要的话将数据节点\n的节点路径和 ServerCnxn（ServerCnxn 代表一个客户端和服务端的连接，实现\n了 Watcher 的 process 接口，此时可以看成一个 Watcher 对象）存储在\nWatcherManager 的 WatchTable 和 watch2Paths 中去。\n2、Watcher 触发\n以服务端接收到 setData() 事务请求触发 NodeDataChanged 事件为例：\n2.1 封装 WatchedEvent\n将通知状态（SyncConnected）、事件类型（NodeDataChanged）以及节点路\n径封装成一个 WatchedEvent 对象\n2.2 查询 Watcher\n从 WatchTable 中根据节点路径查找 Watcher\n2.3 没找到；说明没有客户端在该数据节点上注册过 Watcher\n2.4 找到；提取并从 WatchTable 和 Watch2Paths 中删除对应 Watcher（从这里\n可以看出 Watcher 在服务端是一次性的，触发一次就失效了）\n3、调用 process 方法来触发 Watcher\n这里 process 主要就是通过 ServerCnxn 对应的 TCP 连接发送 Watcher 事件通知。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"_9-客户端回调-watcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-客户端回调-watcher"}},[s._v("#")]),s._v(" "),a("strong",[s._v("9. 客户端回调 Watcher")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("客户端 SendThread 线程接收事件通知，交由 EventThread 线程回调 Watcher。\n客户端的 Watcher 机制同样是一次性的，一旦被触发后，该 Watcher 就失效了。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_10-acl-权限控制机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-acl-权限控制机制"}},[s._v("#")]),s._v(" "),a("strong",[s._v("10. ACL 权限控制机制")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("UGO（User/Group/Others）\n目前在 Linux/Unix 文件系统中使用，也是使用最广泛的权限控制方式。是一种粗\n粒度的文件系统权限控制模式。\nACL（Access Control List）访问控制列表\n包括三个方面：\n权限模式（Scheme）\n1、IP：从 IP 地址粒度进行权限控制\n2、Digest：最常用，用类似于 username:password 的权限标识来进行权限配\n置，便于区分不同应用来进行权限控制\n3、World：最开放的权限控制方式，是一种特殊的 digest 模式，只有一个权限标\n识“world:anyone”\n4、Super：超级用户\n授权对象\n授权对象指的是权限赋予的用户或一个指定实体，例如 IP 地址或是机器灯。\n权限 Permission\n1、CREATE：数据节点创建权限，允许授权对象在该 Znode 下创建子节点\n第 56 页 共 485 页\n2、DELETE：子节点删除权限，允许授权对象删除该数据节点的子节点\n3、READ：数据节点的读取权限，允许授权对象访问该数据节点并读取其数据内\n容或子节点列表等\n4、WRITE：数据节点更新权限，允许授权对象对该数据节点进行更新操作\n5、ADMIN：数据节点管理权限，允许授权对象对该数据节点进行 ACL 相关设置\n操作\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"_11-chroot-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-chroot-特性"}},[s._v("#")]),s._v(" "),a("strong",[s._v("11. Chroot 特性")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("3.2.0 版本后，添加了 Chroot 特性，该特性允许每个客户端为自己设置一个命名\n空间。如果一个客户端设置了 Chroot，那么该客户端对服务器的任何操作，都将\n会被限制在其自己的命名空间下。\n通过设置 Chroot，能够将一个客户端应用于 Zookeeper 服务端的一颗子树相对\n应，在那些多个应用公用一个 Zookeeper 进群的场景下，对实现不同应用间的相\n互隔离非常有帮助。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_12-会话管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-会话管理"}},[s._v("#")]),s._v(" "),a("strong",[s._v("12. 会话管理")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("分桶策略：将类似的会话放在同一区块中进行管理，以便于 Zookeeper 对会话进\n行不同区块的隔离处理以及同一区块的统一处理。\n分配原则：每个会话的“下次超时时间点”（ExpirationTime）\n计算公式：\nExpirationTime_ = currentTime + sessionTimeout\nExpirationTime = (ExpirationTime_ / ExpirationInrerval + 1) *\nExpirationInterval , ExpirationInterval 是指 Zookeeper 会话超时检查时间\n间隔，默认 tickTime\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_13-服务器角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-服务器角色"}},[s._v("#")]),s._v(" "),a("strong",[s._v("13. 服务器角色")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("Leader\n1、事务请求的唯一调度和处理者，保证集群事务处理的顺序性\n2、集群内部各服务的调度者\nFollower\n1、处理客户端的非事务请求，转发事务请求给 Leader 服务器\n2、参与事务请求 Proposal 的投票\n3、参与 Leader 选举投票\nObserver\n1、3.0 版本以后引入的一个服务器角色，在不影响集群事务处理能力的基础上提\n升集群的非事务处理能力\n2、处理客户端的非事务请求，转发事务请求给 Leader 服务器\n3、不参与任何形式的投票\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"_14-zookeeper-下-server-工作状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-zookeeper-下-server-工作状态"}},[s._v("#")]),s._v(" "),a("strong",[s._v("14. Zookeeper 下 Server 工作状态")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("服务器具有四种状态，分别是 LOOKING、FOLLOWING、LEADING、OBSERVING。\n1、LOOKING：寻找 Leader 状态。当服务器处于该状态时，它会认没有 Leader，因此需要进入 Leader 选举状态。\n2、FOLLOWING：跟随者状态。表明当前服务器角色是 Follower。\n3、LEADING：领导者状态。表明当前服务器角色是 Leader。\n4、OBSERVING：观察者状态。表明当前服务器角色是 Observer。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_15-数据同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-数据同步"}},[s._v("#")]),s._v(" "),a("strong",[s._v("15. 数据同步")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("整个集群完成 Leader 选举之后，Learner（Follower 和 Observer 的统称）回向\nLeader 服务器进行注册。当 Learner 服务器想 Leader 服务器完成注册后，进入\n数据同步环节。\n数据同步流程：（均以消息传递的方式进行）\nLearner 向 Learder 注册\n数据同步\n同步确认\nZookeeper 的数据同步通常分为四类：\n1、直接差异化同步（DIFF 同步）\n2、先回滚再差异化同步（TRUNC+DIFF 同步）\n3、仅回滚同步（TRUNC 同步）\n4、全量同步（SNAP 同步）\n在进行数据同步前，Leader 服务器会完成数据同步初始化：\npeerLastZxid：\n从 learner 服务器注册时发送的 ACKEPOCH 消息中提取 lastZxid（该\nLearner 服务器最后处理的 ZXID）\nminCommittedLog：\n Leader 服务器 Proposal 缓存队列 committedLog 中最小 ZXID\nmaxCommittedLog：\n Leader 服务器 Proposal 缓存队列 committedLog 中最大 ZXID\n直接差异化同步（DIFF 同步）\n 场景：peerLastZxid 介于 minCommittedLog 和 maxCommittedLog\n之间\n先回滚再差异化同步（TRUNC+DIFF 同步）\n 场景：当新的 Leader 服务器发现某个 Learner 服务器包含了一条自己没\n有的事务记录，那么就需要让该 Learner 服务器进行事务回滚--回滚到 Leader\n服务器上存在的，同时也是最接近于 peerLastZxid 的 ZXID\n仅回滚同步（TRUNC 同步）\n场景：peerLastZxid 大于 maxCommittedLog\n全量同步（SNAP 同步）\n 场景一：peerLastZxid 小于 minCommittedLog\n 场景二：Leader 服务器上没有 Proposal 缓存队列且 peerLastZxid 不等\n于 lastProcessZxid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("h2",{attrs:{id:"_16-zookeeper-是如何保证事务的顺序一致性的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-zookeeper-是如何保证事务的顺序一致性的"}},[s._v("#")]),s._v(" "),a("strong",[s._v("16. zookeeper 是如何保证事务的顺序一致性的？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("zookeeper 采用了全局递增的事务 Id 来标识，所有的 proposal（提议）都在被\n提出的时候加上了 zxid，zxid 实际上是一个 64 位的数字，高 32 位是 epoch（时\n期; 纪元; 世; 新时代）用来标识 leader 周期，如果有新的 leader 产生出来，epoch\n会自增，低 32 位用来递增计数。当新产生 proposal 的时候，会依据数据库的两\n阶段过程，首先会向其他的 server 发出事务执行请求，如果超过半数的机器都能\n执行并且能够成功，那么就会开始执行。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_17-分布式集群中为什么会有-master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-分布式集群中为什么会有-master"}},[s._v("#")]),s._v(" "),a("strong",[s._v("17. 分布式集群中为什么会有 Master？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("在分布式环境中，有些业务逻辑只需要集群中的某一台机器进行执行，其他的机\n器可以共享这个结果，这样可以大大减少重复计算，提高性能，于是就需要进行\nleader 选举。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_18-zk-节点宕机如何处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-zk-节点宕机如何处理"}},[s._v("#")]),s._v(" "),a("strong",[s._v("18. zk 节点宕机如何处理？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("Zookeeper 本身也是集群，推荐配置不少于 3 个服务器。Zookeeper 自身也要保\n证当一个节点宕机时，其他节点会继续提供服务。\n如果是一个 Follower 宕机，还有 2 台服务器提供访问，因为 Zookeeper 上的数\n据是有多个副本的，数据并不会丢失；\n如果是一个 Leader 宕机，Zookeeper 会选举出新的 Leader。\nZK 集群的机制是只要超过半数的节点正常，集群就能正常提供服务。只有在 ZK\n节点挂得太多，只剩一半或不到一半节点能工作，集群才失效。\n所以\n3 个节点的 cluster 可以挂掉 1 个节点(leader 可以得到 2 票>1.5)\n2 个节点的 cluster 就不能挂掉任何 1 个节点了(leader 可以得到 1 票<=1)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_19-zookeeper-负载均衡和-nginx-负载均衡区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-zookeeper-负载均衡和-nginx-负载均衡区别"}},[s._v("#")]),s._v(" "),a("strong",[s._v("19. zookeeper 负载均衡和 nginx 负载均衡区别")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("zk 的负载均衡是可以调控，nginx 只是能调权重，其他需要可控的都需要自己写\n插件；但是 nginx 的吞吐量比 zk 大很多，应该说按业务选择用哪种方式。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_20-zookeeper-有哪几种几种部署模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-zookeeper-有哪几种几种部署模式"}},[s._v("#")]),s._v(" "),a("strong",[s._v("20. Zookeeper 有哪几种几种部署模式？")])]),s._v(" "),a("p",[s._v("部署模式：单机模式、伪集群模式、集群模式。")]),s._v(" "),a("h2",{attrs:{id:"_21-集群最少要几台机器-集群规则是怎样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-集群最少要几台机器-集群规则是怎样的"}},[s._v("#")]),s._v(" "),a("strong",[s._v("21. 集群最少要几台机器，集群规则是怎样的?")])]),s._v(" "),a("p",[s._v("集群规则为 2N+1 台，N>0，即 3 台。")]),s._v(" "),a("h2",{attrs:{id:"_22-集群支持动态添加机器吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22-集群支持动态添加机器吗"}},[s._v("#")]),s._v(" "),a("strong",[s._v("22. 集群支持动态添加机器吗？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("其实就是水平扩容了，Zookeeper 在这方面不太好。两种方式：\n全部重启：关闭所有 Zookeeper 服务，修改配置之后启动。不影响之前客户端的\n会话。\n逐个重启：在过半存活即可用的原则下，一台机器重启不影响整个集群对外提供\n服务。这是比较常用的方式。\n3.5 版本开始支持动态扩容。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_23-zookeeper-对节点的-watch监听通知是永久的吗-为什么不是永久的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23-zookeeper-对节点的-watch监听通知是永久的吗-为什么不是永久的"}},[s._v("#")]),s._v(" "),a("strong",[s._v("23. Zookeeper 对节点的 watch监听通知是永久的吗？为什么不是永久的?")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("不是。官方声明：一个 Watch 事件是一个一次性的触发器，当被设置了 Watch\n的数据发生了改变的时候，则服务器将这个改变发送给设置了 Watch 的客户端，\n以便通知它们。\n为什么不是永久的，举个例子，如果服务端变动频繁，而监听的客户端很多情况\n下，每次变动都要通知到所有的客户端，给网络和服务器造成很大压力。\n一般是客户端执行 getData(“/节点 A”,true)，如果节点 A 发生了变更或删除，\n客户端会得到它的 watch 事件，但是在之后节点 A 又发生了变更，而客户端又没\n有设置 watch 事件，就不再给客户端发送。\n在实际应用中，很多情况下，我们的客户端不需要知道服务端的每一次变动，我\n只要最新的数据即可。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_24-zookeeper-的-java-客户端都有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_24-zookeeper-的-java-客户端都有哪些"}},[s._v("#")]),s._v(" "),a("strong",[s._v("24. Zookeeper 的 java 客户端都有哪些？")])]),s._v(" "),a("p",[s._v("java 客户端：zk 自带的 zkclient 及 Apache 开源的 Curator。")]),s._v(" "),a("h2",{attrs:{id:"_25-chubby-是什么-和-zookeeper-比你怎么看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_25-chubby-是什么-和-zookeeper-比你怎么看"}},[s._v("#")]),s._v(" "),a("strong",[s._v("25. chubby 是什么，和 zookeeper 比你怎么看？")])]),s._v(" "),a("p",[s._v("chubby 是 google 的，完全实现 paxos 算法，不开源。zookeeper 是 chubby")]),s._v(" "),a("p",[s._v("的开源实现，使用 zab 协议，paxos 算法的变种。")]),s._v(" "),a("h2",{attrs:{id:"_26-说几个-zookeeper-常用的命令。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_26-说几个-zookeeper-常用的命令。"}},[s._v("#")]),s._v(" "),a("strong",[s._v("26. 说几个 zookeeper 常用的命令。")])]),s._v(" "),a("p",[s._v("常用命令：ls get set create delete 等。")]),s._v(" "),a("h2",{attrs:{id:"_27-zab-和-paxos-算法的联系与区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_27-zab-和-paxos-算法的联系与区别"}},[s._v("#")]),s._v(" "),a("strong",[s._v("27. ZAB 和 Paxos 算法的联系与区别？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("相同点：\n1、两者都存在一个类似于 Leader 进程的角色，由其负责协调多个 Follower 进程\n的运行\n2、Leader 进程都会等待超过半数的 Follower 做出正确的反馈后，才会将一个提\n案进行提交\n3、ZAB 协议中，每个 Proposal 中都包含一个 epoch 值来代表当前的 Leader\n周期，Paxos 中名字为 Ballot\n不同点：\nZAB 用来构建高可用的分布式数据主备系统（Zookeeper），Paxos 是用来构建\n分布式一致性状态机系统。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_28-zookeeper-的典型应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_28-zookeeper-的典型应用场景"}},[s._v("#")]),s._v(" "),a("strong",[s._v("28. Zookeeper 的典型应用场景")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("Zookeeper 是一个典型的发布/订阅模式的分布式数据管理与协调框架，开发人员\n可以使用它来进行分布式数据的发布和订阅。\n通过对 Zookeeper 中丰富的数据节点进行交叉使用，配合 Watcher 事件通知机\n制，可以非常方便的构建一系列分布式应用中年都会涉及的核心功能，如：\n1、数据发布/订阅\n2、负载均衡\n3、命名服务\n4、分布式协调/通知\n5、集群管理\n6、Master 选举\n7、分布式锁\n8、分布式队列\n1. 数据发布/订阅\n介绍\n数据发布/订阅系统，即所谓的配置中心，顾名思义就是发布者发布数据供订阅者\n进行数据订阅。\n目的\n动态获取数据（配置信息）\n实现数据（配置信息）的集中式管理和数据的动态更新\n设计模式\nPush 模式\nPull 模式\n数据（配置信息）特性\n1、数据量通常比较小\n2、数据内容在运行时会发生动态更新\n3、集群中各机器共享，配置一致\n如：机器列表信息、运行时开关配置、数据库配置信息等\n基于 Zookeeper 的实现方式\n 数据存储：将数据（配置信息）存储到 Zookeeper 上的一个数据节点\n 数据获取：应用在启动初始化节点从 Zookeeper 数据节点读取数据，并\n在该节点上注册一个数据变更 Watcher\n 数据变更：当变更数据时，更新 Zookeeper 对应节点数据，Zookeeper\n会将数据变更通知发到各客户端，客户端接到通知后重新读取变更后的数据即\n可。\n2. 负载均衡\nzk 的命名服务\n命名服务是指通过指定的名字来获取资源或者服务的地址，利用 zk 创建一个全局\n的路径，这个路径就可以作为一个名字，指向集群中的集群，提供的服务的地址，\n或者一个远程的对象等等。\n分布式通知和协调\n对于系统调度来说：操作人员发送通知实际是通过控制台改变某个节点的状态，\n然后 zk 将这些变化发送给注册了这个节点的 watcher 的所有客户端。\n对于执行情况汇报：每个工作进程都在某个目录下创建一个临时节点。并携带工\n作的进度数据，这样汇总的进程可以监控目录子节点的变化获得工作进度的实时\n的全局情况。\nzk 的命名服务（文件系统）\n命名服务是指通过指定的名字来获取资源或者服务的地址，利用 zk 创建一个全局\n的路径，即是唯一的路径，这个路径就可以作为一个名字，指向集群中的集群，\n提供的服务的地址，或者一个远程的对象等等。\nzk 的配置管理（文件系统、通知机制）\n程序分布式的部署在不同的机器上，将程序的配置信息放在 zk 的 znode 下，当有\n配置发生改变时，也就是 znode 发生变化时，可以通过改变 zk 中某个目录节点的\n内容，利用 watcher 通知给各个客户端，从而更改配置。\nZookeeper 集群管理（文件系统、通知机制）\n所谓集群管理无在乎两点：是否有机器退出和加入、选举 master。\n对于第一点，所有机器约定在父目录下创建临时目录节点，然后监听父目录节点\n的子节点变化消息。一旦有机器挂掉，该机器与 zookeeper 的连接断开，其所创\n建的临时目录节点被删除，所有其他机器都收到通知：某个兄弟目录被删除，于\n是，所有人都知道：它上船了。\n新机器加入也是类似，所有机器收到通知：新兄弟目录加入，highcount 又有了，\n对于第二点，我们稍微改变一下，所有机器创建临时顺序编号目录节点，每次选\n取编号最小的机器作为 master 就好。\nZookeeper 分布式锁（文件系统、通知机制）\n有了 zookeeper 的一致性文件系统，锁的问题变得容易。锁服务可以分为两类，\n一个是保持独占，另一个是控制时序。\n对于第一类，我们将 zookeeper 上的一个 znode 看作是一把锁，通过 createznode\n的方式来实现。所有客户端都去创建 /distribute_lock 节点，最终成功创建的那\n个客户端也即拥有了这把锁。用完删除掉自己创建的 distribute_lock 节点就释放\n出锁。\n对于第二类， /distribute_lock 已经预先存在，所有客户端在它下面创建临时顺\n序编号目录节点，和选 master 一样，编号最小的获得锁，用完删除，依次方便。\nZookeeper 队列管理（文件系统、通知机制）\n两种类型的队列：\n1、同步队列，当一个队列的成员都聚齐时，这个队列才可用，否则一直等待所有\n成员到达。\n2、队列按照 FIFO 方式进行入队和出队操作。\n第一类，在约定目录下创建临时目录节点，监听节点数目是否是我们要求的数目。\n第二类，和分布式锁服务中的控制时序场景基本原理一致，入列有编号，出列按\n编号。在特定的目录下创建 PERSISTENT_SEQUENTIAL 节点，创建成功时\nWatcher 通知等待的队列，队列删除序列号最小的节点用以消费。此场景下\nZookeeper 的 znode 用于消息存储，znode 存储的数据就是消息队列中的消息内\n容，SEQUENTIAL 序列号就是消息的编号，按序取出即可。由于创建的节点是持\n久化的，所以不必担心队列消息的丢失问题。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);