(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{656:function(e,a,s){"use strict";s.r(a);var t=s(1),n=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"zookeeper详细功能介绍与客户端框架使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper详细功能介绍与客户端框架使用"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Zookeeper详细功能介绍与客户端框架使用")])]),e._v(" "),a("h2",{attrs:{id:"节点类型-znode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点类型-znode"}},[e._v("#")]),e._v(" 节点类型(znode)")]),e._v(" "),a("ol",[a("li",[e._v("持久节点，所谓持久节点，是指在节点创建后，就一直存在，直到有删除操作来主动清除这个节点。")]),e._v(" "),a("li",[e._v("临时节点，和持久节点不同的是，临时节点的生命周期和客户端会话绑定。也就是说，如果客户端会话失效，那么这个节点就会自动被清除掉。注意，这里提到的是会话失效，而非连接断开。另外，在临时节点下面不能创建子节点。")]),e._v(" "),a("li",[e._v("持久顺序节点，这类节点的基本特性和持久节点是一致的。额外的特性是，在ZK中，每个父节点会为他的第一级子节点维护一份时序，会记录每个子节点创建的先后顺序。基于这个特性，在创建子节点的时候，可以设置这个属性，那么在创建节点过程中，ZK会自动为给定节点名加上一个数字后缀，作为新的节点名。这个数字后缀的范围是整型的最大值。")]),e._v(" "),a("li",[e._v("临时顺序节点，类似临时节点和顺序节点")])]),e._v(" "),a("p",[e._v("zookeeper默认对每个结点的最大数据量有一个上限是1M")]),e._v(" "),a("h2",{attrs:{id:"stat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stat"}},[e._v("#")]),e._v(" Stat")]),e._v(" "),a("p",[e._v("ZooKeeper命名空间中的每个znode都有一个与之关联的stat结构，类似于Unix/Linux文件系统中文件的stat结构。 znode的stat结构中的字段显示如下，各自的含义如下：")]),e._v(" "),a("ul",[a("li",[e._v("cZxid：创建znode的事务ID。")]),e._v(" "),a("li",[e._v("mZxid：最后修改znode的事务ID。")]),e._v(" "),a("li",[e._v("pZxid：最后修改添加或删除子节点的事务ID。")]),e._v(" "),a("li",[e._v("ctime：表示从1970-01-01T00:00:00Z开始以毫秒为单位的znode创建时间。")]),e._v(" "),a("li",[e._v("mtime：表示从1970-01-01T00:00:00Z开始以毫秒为单位的znode最近修改时间。")]),e._v(" "),a("li",[e._v("dataVersion：表示对该znode的数据所做的更改次数。")]),e._v(" "),a("li",[e._v("cversion：这表示对此znode的子节点进行的更改次数。")]),e._v(" "),a("li",[e._v("aclVersion：表示对此znode的ACL进行更改的次数。")]),e._v(" "),a("li",[e._v("ephemeralOwner：如果znode是ephemeral类型节点，则这是znode所有者的 session ID。 如果znode不是ephemeral节点，则该字段设置为零。")]),e._v(" "),a("li",[e._v("dataLength：这是znode数据字段的长度。")]),e._v(" "),a("li",[e._v("numChildren：这表示znode的子节点的数量。")])]),e._v(" "),a("h2",{attrs:{id:"zxid-后面讲zab算法会着重讲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zxid-后面讲zab算法会着重讲"}},[e._v("#")]),e._v(" Zxid-后面讲zab算法会着重讲")]),e._v(" "),a("p",[e._v("类似于RDBMS中的事务ID，用于标识一次更新操作的Proposal ID。为了保证顺序性，该zkid必须单调递增。因此ZooKeeper使用一个64位的数来表示，高32位是Leader的epoch，从1开始，每次选出新的Leader，epoch加一。低32位为该epoch内的序号，每次epoch变化，都将低32位的序号重置。这样保证了zkid的全局递增性。")]),e._v(" "),a("h2",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[e._v("#")]),e._v(" Watch")]),e._v(" "),a("p",[e._v("一个zk的节点可以被监控，包括这个目录中存储的数据的修改，子节点目录的变化，一旦变化可以通知设置监控的客户端，这个功能是zookeeper对于应用最重要的特性，通过这个特性可以实现的功能包括配置的集中管理，集群管理，分布式锁等等。")]),e._v(" "),a("p",[e._v("watch机制官方说明：一个Watch事件是一个"),a("strong",[e._v("一次性")]),e._v("的触发器，当被设置了Watch的数据发生了改变的时候，则服务器将这个改变发送给设置了Watch的客户端，以便通知它们。")]),e._v(" "),a("p",[e._v("可以注册watcher的方法：getData、exists、getChildren。")]),e._v(" "),a("p",[e._v("可以触发watcher的方法：create、delete、setData。连接断开的情况下触发的watcher会丢失。")]),e._v(" "),a("p",[e._v("一个Watcher实例是一个回调函数，被回调一次后就被移除了。如果还需要关注数据的变化，需要再次注册watcher。")]),e._v(" "),a("p",[e._v("New ZooKeeper时注册的watcher叫default watcher，它不是一次性的，只对client的连接状态变化作出反应。")]),e._v(" "),a("p",[e._v("exits和getData设置数据监视，而getChildren设置子节点监视")]),e._v(" "),a("h1",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),a("h2",{attrs:{id:"创建节点-znode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建节点-znode"}},[e._v("#")]),e._v(" 创建节点（znode）")]),e._v(" "),a("p",[e._v("用给定的路径创建一个节点。flag参数指定创建的节点是临时的，持久的还是顺序的。默认情况下，所有节点都是持久的。")]),e._v(" "),a("p",[e._v("当会话过期或客户端断开连接时，临时节点（flag：-e）将被自动删除。")]),e._v(" "),a("p",[e._v("顺序节点保证节点路径将是唯一的。")]),e._v(" "),a("p",[e._v("ZooKeeper集合将向节点路径填充10位序列号。例如，节点路径 /myapp 将转换为/myapp0000000001，下一个序列号将为/myapp0000000002。如果没有指定flag，则节点被认为是持久的。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create /path data\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create /FirstNode first\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 3] create /FirstNode first\nCreated /FirstNode\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("要创建顺序节点，请添加flag：-s，如下所示。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create -s /path data\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create -s /FirstNode second\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 4] create -s /FirstNode second\nCreated /FirstNode0000000018\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("要创建临时节点，请添加flag：-e ，如下所示。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create -e /path data\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create -e /FirstNode-ephemeral ephemeral\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 6] create -e /FirstNode-ephemeral ephemeral\nCreated /FirstNode-ephemeral\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("记住当客户端断开连接时，临时节点将被删除。你可以通过退出ZooKeeper CLI，然后重新打开CLI来尝试。")]),e._v(" "),a("h3",{attrs:{id:"创建容器节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建容器节点"}},[e._v("#")]),e._v(" 创建容器节点")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create -c /path data\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("只有添加过子节点，容器节点的特性才会生效，容器节点的特性是：节点的最后一个子节点被删除过，该节点会自动删除（可能延迟一段时间）")]),e._v(" "),a("h3",{attrs:{id:"创建ttl节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建ttl节点"}},[e._v("#")]),e._v(" 创建TTL节点")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create -t 3000 /path data\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("TTL节点创建后，如果3秒内没有数据修改，并且没有子节点，则会自动删除")]),e._v(" "),a("p",[e._v("前提是，服务端支持了TTL节点，默认没有开启，通过-Dzookeeper.extendedTypesEnabled=true可以开启")]),e._v(" "),a("h2",{attrs:{id:"获取数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取数据"}},[e._v("#")]),e._v(" 获取数据")]),e._v(" "),a("p",[e._v("它返回节点的关联数据和指定节点的元数据。你将获得信息，例如上次修改数据的时间，修改的位置以及数据的相关信息。此CLI还用于分配监视器以显示数据相关的通知。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("get /path\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("get /FirstNode\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 7] get /FirstNode\nfirst\ncZxid = 0xa2\nctime = Wed Dec 12 13:29:14 CST 2018\nmZxid = 0xa2\nmtime = Wed Dec 12 13:29:14 CST 2018\npZxid = 0xa2\ncversion = 0\ndataVersion = 0\naclVersion = 0\nephemeralOwner = 0x0\ndataLength = 5\nnumChildren = 0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("要访问顺序节点，必须输入znode的完整路径。")]),e._v(" "),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("get /FirstNode0000000018\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 9] get /FirstNode0000000018\nsecond\ncZxid = 0xa3\nctime = Wed Dec 12 13:30:44 CST 2018\nmZxid = 0xa3\nmtime = Wed Dec 12 13:30:44 CST 2018\npZxid = 0xa3\ncversion = 0\ndataVersion = 0\naclVersion = 0\nephemeralOwner = 0x0\ndataLength = 6\nnumChildren = 0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("h2",{attrs:{id:"设置数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置数据"}},[e._v("#")]),e._v(" 设置数据")]),e._v(" "),a("p",[e._v("设置指定znode的数据。完成此设置操作后，你可以使用 get CLI命令检查数据。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set /path /data\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set /FirstNode first_update\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 12] set /FirstNode first_update\n\nWATCHER::\n\nWatchedEvent state:SyncConnected type:NodeDataChanged path:/FirstNode\ncZxid = 0xa2\nctime = Wed Dec 12 13:29:14 CST 2018\nmZxid = 0xa6\nmtime = Wed Dec 12 13:51:39 CST 2018\npZxid = 0xa2\ncversion = 0\ndataVersion = 1\naclVersion = 0\nephemeralOwner = 0x0\ndataLength = 12\nnumChildren = 0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("h2",{attrs:{id:"创建子节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建子节点"}},[e._v("#")]),e._v(" 创建子节点")]),e._v(" "),a("p",[e._v("创建子节点类似于创建新的znode。唯一的区别是，子znode的路径也将具有父路径。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create /parent/path/subnode/path data\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create /FirstNode/Child firstchildren\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 13] create /FirstNode/Child firstchildren\nCreated /FirstNode/Child\n[zk: localhost:2181(CONNECTED) 14] create /FirstNode/Child2 secondchildren\nCreated /FirstNode/Child2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"列出子节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出子节点"}},[e._v("#")]),e._v(" 列出子节点")]),e._v(" "),a("p",[e._v("此命令用于列出和显示znode的子项。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ls /path\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("实例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ls /FirstNode\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 15] ls /FirstNode\n[Child2, Child]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"检查状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查状态"}},[e._v("#")]),e._v(" 检查状态")]),e._v(" "),a("p",[e._v("状态描述指定的znode的元数据。它包含时间戳，版本号，ACL，数据长度和子znode等细项。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("stat /path\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("stat /FirstNode\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 16] stat /FirstNode\ncZxid = 0xa2\nctime = Wed Dec 12 13:29:14 CST 2018\nmZxid = 0xa6\nmtime = Wed Dec 12 13:51:39 CST 2018\npZxid = 0xa8\ncversion = 2\ndataVersion = 1\naclVersion = 0\nephemeralOwner = 0x0\ndataLength = 12\nnumChildren = 2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("h2",{attrs:{id:"移除znode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除znode"}},[e._v("#")]),e._v(" 移除Znode")]),e._v(" "),a("p",[e._v("移除指定的znode并递归其所有子节点。只有在znode可用的情况下才会发生。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rmr /path\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rmr /FirstNode\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出：")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 17] rmr /FirstNode \n[zk: localhost:2181(CONNECTED) 18] get /FirstNode\nNode does not exist: /FirstNode\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("删除(delete /path)命令类似于 remove 命令，但是只适用于没有子节点的znode。")]),e._v(" "),a("h2",{attrs:{id:"acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acl"}},[e._v("#")]),e._v(" ACL")]),e._v(" "),a("p",[e._v("zk做为分布式架构中的重要中间件，通常会在上面以节点的方式存储一些关键信息，默认情况下，所有应用都可以读写任何节点，在复杂的应用中，这不太安全，ZK通过ACL机制来解决访问权限问题。")]),e._v(" "),a("ul",[a("li",[e._v("ZooKeeper的权限控制是基于每个znode节点的，需要对每个节点设置权限")]),e._v(" "),a("li",[e._v("每个znode支持设置多种权限控制方案和多个权限")]),e._v(" "),a("li",[e._v("子节点不会继承父节点的权限，客户端无权访问某节点，但可能可以访问它的子节点")])]),e._v(" "),a("p",[e._v("ACL 权限控制，使用：schema🆔permission 来标识，主要涵盖 3 个方面：")]),e._v(" "),a("ul",[a("li",[e._v("权限模式（Schema）：鉴权的策略")]),e._v(" "),a("li",[e._v("授权对象（ID）")]),e._v(" "),a("li",[e._v("权限（Permission）")])]),e._v(" "),a("h3",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[e._v("#")]),e._v(" schema")]),e._v(" "),a("ul",[a("li",[e._v("world：只有一个用户：anyone，代表所有人（默认）")]),e._v(" "),a("li",[e._v("ip：使用IP地址认证")]),e._v(" "),a("li",[e._v("auth：使用已添加认证的用户认证")]),e._v(" "),a("li",[e._v("digest：使用“用户名:密码”方式认证")])]),e._v(" "),a("h3",{attrs:{id:"id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[e._v("#")]),e._v(" id")]),e._v(" "),a("p",[e._v("授权对象ID是指，权限赋予的用户或者一个实体，例如：IP 地址或者机器。授权模式 schema 与 授权对象 ID 之间关系：")]),e._v(" "),a("ul",[a("li",[e._v("world：只有一个id，即anyone")]),e._v(" "),a("li",[e._v("ip: 通常是一个ip地址或地址段，比如192.168.0.110或192.168.0.1/24")]),e._v(" "),a("li",[e._v("auth：用户名")]),e._v(" "),a("li",[e._v('digest：自定义：通常是"username:BASE64(SHA-1(username:password))"')])]),e._v(" "),a("h3",{attrs:{id:"权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[e._v("#")]),e._v(" 权限")]),e._v(" "),a("ul",[a("li",[e._v("CREATE, 简写为c，可以创建子节点")]),e._v(" "),a("li",[e._v("DELETE，简写为d，可以删除子节点（仅下一级节点），注意不是本节点")]),e._v(" "),a("li",[e._v("READ，简写为r，可以读取节点数据及显示子节点列表")]),e._v(" "),a("li",[e._v("WRITE，简写为w，可设置节点数据")]),e._v(" "),a("li",[e._v("ADMIN，简写为a，可以设置节点访问控制列表")])]),e._v(" "),a("h4",{attrs:{id:"查看acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看acl"}},[e._v("#")]),e._v(" 查看ACL")]),e._v(" "),a("p",[e._v("查看ACL")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("getAcl /parent\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("返回")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 122] getAcl /parent\n'world,'anyone\n: cdrwa\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("默认创建的节点的权限是最开放的，所有都可以增删查改管理。")]),e._v(" "),a("h4",{attrs:{id:"设置acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置acl"}},[e._v("#")]),e._v(" 设置ACL")]),e._v(" "),a("p",[e._v("设置节点对所有人都有写和管理权限")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("setAcl /parent world:anyone:wa\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("所以去读取数据的时候会提示")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("[zk: localhost:2181(CONNECTED) 124] get /parent\nAuthentication is not valid : /parent\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("先添加用户：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("addauth digest zhangsan:12345\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("再设置权限，这个节点只有zhangsan这个用户拥有所有权限")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("setAcl /parent auth:zhangsan:123456:rdwca\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"超级管理员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超级管理员"}},[e._v("#")]),e._v(" 超级管理员")]),e._v(" "),a("p",[e._v("超级管理员的用户名为super，密码自定义比如：admin")]),e._v(" "),a("ol",[a("li",[e._v('首先调用DigestAuthenticationProvider.generateDigest("super:admin")获取签名，比如结果为：super:xQJmxLMiHGwaqBvst5y6rkB6HQs=')]),e._v(" "),a("li",[e._v("在启动Zookeeper服务端时加入-Dzookeeper.DigestAuthenticationProvider.superDigest=super:xQJmxLMiHGwaqBvst5y6rkB6HQs=")]),e._v(" "),a("li",[e._v("启动zookeeper并使用客户端进行连接")]),e._v(" "),a("li",[e._v("如果遇到没有操作权限的节点，这时可以addauth digest super:admin来开启管理员，即有所有权限")])]),e._v(" "),a("h2",{attrs:{id:"reconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reconfig"}},[e._v("#")]),e._v(" reconfig")]),e._v(" "),a("p",[e._v("Zookeeper 3.5+提供了reconfig功能实现动态配置节点，官方的说明是，“你再也不需要进行全部节点重启”就可以应用所有的修改。")]),e._v(" "),a("p",[e._v("具体还是看视频操作吧。。")]),e._v(" "),a("h2",{attrs:{id:"curator客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curator客户端"}},[e._v("#")]),e._v(" Curator客户端")]),e._v(" "),a("ol",[a("li",[e._v("Recipes：Zookeeper典型应用场景的实现，这些实现是基于Curator Framework。")]),e._v(" "),a("li",[e._v("Framework：Zookeeper API的高层封装，大大简化Zookeeper客户端编程，添加了例如Zookeeper连接管理、重试机制等。")]),e._v(" "),a("li",[e._v("Utilities：为Zookeeper提供的各种实用程序。")]),e._v(" "),a("li",[e._v("Client：Zookeeper client的封装，用于取代原生的Zookeeper客户端（ZooKeeper类），提供一些非常有用的客户端特性。")]),e._v(" "),a("li",[e._v("Errors：Curator如何处理错误，连接问题，可恢复的例外等。")])]),e._v(" "),a("h3",{attrs:{id:"curator主要解决了三类问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curator主要解决了三类问题"}},[e._v("#")]),e._v(" Curator主要解决了三类问题")]),e._v(" "),a("ol",[a("li",[e._v("封装ZooKeeper client与ZooKeeper server之间的连接处理")]),e._v(" "),a("li",[e._v("提供了一套Fluent风格的操作API")]),e._v(" "),a("li",[e._v("提供ZooKeeper各种应用场景(recipe, 比如共享锁服务, 集群领导选举机制)的抽象封装")])]),e._v(" "),a("h3",{attrs:{id:"原生zookeeper客户端存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生zookeeper客户端存在的问题"}},[e._v("#")]),e._v(" 原生Zookeeper客户端存在的问题")]),e._v(" "),a("p",[e._v("客户端在连接服务端是会设置一个sessionTimeout（session过期时间），并且客户端会给服务端发送心跳以刷新服务端的session时间。")]),e._v(" "),a("p",[e._v("当网络断开后，服务端无法接受到心跳，会进行session倒计时，判断是否超过了session过期时间，一旦超过了过期时间，就发送了Session过期，就算后来网络通了，客户端从新连接上了服务端，就会接受session过期的事件，从而删除临时节点和watcher等等。原生客户端不会重建session。")])])}),[],!1,null,null,null);a.default=n.exports}}]);