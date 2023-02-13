(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{534:function(s,n,a){"use strict";a.r(n);var e=a(1),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-rdb-和-aof-机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-rdb-和-aof-机制"}},[s._v("#")]),s._v(" "),n("strong",[s._v("1.RDB")]),s._v(" "),n("strong",[s._v("和")]),s._v(" "),n("strong",[s._v("AOF")]),s._v(" "),n("strong",[s._v("机制")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("RDB 和 AOF 机制\nRDB：Redis DataBase\n在指定的时间间隔内将内存中的数据集快照写入磁盘，实际操作过程是fork一个子进程，先将数据集写\n入临时文件，写入成功后，再替换之前的文件，用二进制压缩存储。\n优点：\n1、整个Redis数据库将只包含一个文件 dump.rdb，方便持久化。\n2、容灾性好，方便备份。\n3、性能最大化，fork 子进程来完成写操作，让主进程继续处理命令，所以是 IO 最大化。使用单独子进\n程来进行持久化，主进程不会进行任何 IO 操作，保证了 redis 的高性能\n4.相对于数据集大时，比 AOF 的启动效率更高。\n缺点：\n1、数据安全性低。RDB 是间隔一段时间进行持久化，如果持久化之间 redis 发生故障，会发生数据丢\n失。所以这种方式更适合数据要求不严谨的时候)\n2、由于RDB是通过fork子进程来协助完成数据持久化工作的，因此，如果当数据集较大时，可能会导\n致整个服务器停止服务几百毫秒，甚至是1秒钟。\nAOF：Append Only File\n以日志的形式记录服务器所处理的每一个写、删除操作，查询操作不会记录，以文本的方式记录，可以\n打开文件看到详细的操作记录\n优点：\n1、数据安全，Redis中提供了3中同步策略，即每秒同步、每修改同步和不同步。事实上，每秒同步也\n是异步完成的，其效率也是非常高的，所差的是一旦系统出现宕机现象，那么这一秒钟之内修改的数据\n将会丢失。而每修改同步，我们可以将其视为同步持久化，即每次发生的数据变化都会被立即记录到磁\n盘中。。\n2、通过 append 模式写文件，即使中途服务器宕机也不会破坏已经存在的内容，可以通过 redis￾check-aof 工具解决数据一致性问题。\n3、AOF 机制的 rewrite 模式。定期对AOF文件进行重写，以达到压缩的目的\n图灵学院\n缺点：\n1、AOF 文件比 RDB 文件大，且恢复速度慢。\n2、数据集大的时候，比 rdb 启动效率低。\n3、运行效率没有RDB高\nAOF文件比RDB更新频率高，优先使用AOF还原数据。\nAOF比RDB更安全也更大\nRDB性能比AOF好\n如果两个都配了优先加载AOF\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h2",{attrs:{id:"_2-redis-的过期键的删除策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis-的过期键的删除策略"}},[s._v("#")]),s._v(" "),n("strong",[s._v("2.Redis****的过期键的删除策略")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Redis是key-value数据库，我们可以设置Redis中缓存的key的过期时间。Redis的过期策略就是指当\nRedis中缓存的key过期了，Redis如何处理。\n惰性过期：只有当访问一个key时，才会判断该key是否已过期，过期则清除。该策略可以最大化\n地节省CPU资源，却对内存非常不友好。极端情况可能出现大量的过期key没有再次被访问，从而\n不会被清除，占用大量内存。\n定期过期：每隔一定的时间，会扫描一定数量的数据库的expires字典中一定数量的key，并清除其\n中已过期的key。该策略是一个折中方案。通过调整定时扫描的时间间隔和每次扫描的限定耗时，\n可以在不同情况下使得CPU和内存资源达到最优的平衡效果。\n(expires字典会保存所有设置了过期时间的key的过期时间数据，其中，key是指向键空间中的某个键的\n指针，value是该键的毫秒精度的UNIX时间戳表示的过期时间。键空间是指该Redis集群中保存的所有\n键。)\nRedis中同时使用了惰性过期和定期过期两种过期策略。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_3-redis-线程模型、单线程快的原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis-线程模型、单线程快的原因"}},[s._v("#")]),s._v(" "),n("strong",[s._v("3.Redis****线程模型、单线程快的原因")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Redis基于Reactor模式开发了网络事件处理器，这个处理器叫做文件事件处理器 file event handler。\n这个文件事件处理器，它是单线程的，所以 Redis 才叫做单线程的模型，它采用IO多路复用机制来同时\n监听多个Socket，根据Socket上的事件类型来选择对应的事件处理器来处理这个事件。可以实现高性能\n的网络通信模型，又可以跟内部其他单线程的模块进行对接，保证了 Redis 内部的线程模型的简单性。\n图灵学院\n文件事件处理器的结构包含4个部分：多个Socket、IO多路复用程序、文件事件分派器以及事件处理器\n（命令请求处理器、命令回复处理器、连接应答处理器等）。\n多个 Socket 可能并发的产生不同的操作，每个操作对应不同的文件事件，但是IO多路复用程序会监听\n多个 Socket，会将 Socket 放入一个队列中排队，每次从队列中取出一个 Socket 给事件分派器，事件\n分派器把 Socket 给对应的事件处理器。\n然后一个 Socket 的事件处理完之后，IO多路复用程序才会将队列中的下一个 Socket 给事件分派器。文\n件事件分派器会根据每个 Socket 当前产生的事件，来选择对应的事件处理器来处理。\n单线程快的原因：\n1）纯内存操作\n2）核心是基于非阻塞的IO多路复用机制\n3）单线程反而避免了多线程的频繁上下文切换带来的性能问题\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h2",{attrs:{id:"_4-简述redis事务实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-简述redis事务实现"}},[s._v("#")]),s._v(" "),n("strong",[s._v("4.简述"),n("strong",[n("strong",[s._v("Redis")])]),s._v("事务实现")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1、事务开始\nMULTI命令的执行，标识着一个事务的开始。MULTI命令会将客户端状态的 flags 属性中打开\nREDIS_MULTI 标识来完成的。\n2、命令入队\n当一个客户端切换到事务状态之后，服务器会根据这个客户端发送来的命令来执行不同的操作。如果客\n户端发送的命令为MULTI、EXEC、WATCH、DISCARD中的一个，立即执行这个命令，否则将命令放入一\n个事务队列里面，然后向客户端返回 QUEUED 回复\n如果客户端发送的命令为 EXEC、DISCARD、WATCH、MULTI 四个命令的其中一个，那么服务器\n立即执行这个命令。\n如果客户端发送的是四个命令以外的其他命令，那么服务器并不立即执行这个命令。\n首先检查此命令的格式是否正确，如果不正确，服务器会在客户端状态（redisClient）的 flags 属\n性关闭 REDIS_MULTI 标识，并且返回错误信息给客户端。\n如果正确，将这个命令放入一个事务队列里面，然后向客户端返回 QUEUED 回复\n事务队列是按照FIFO的方式保存入队的命令\n3、事务执行\n客户端发送 EXEC 命令，服务器执行 EXEC 命令逻辑。\n如果客户端状态的 flags 属性不包含 REDIS_MULTI 标识，或者包含 REDIS_DIRTY_CAS 或者\nREDIS_DIRTY_EXEC 标识，那么就直接取消事务的执行。\n否则客户端处于事务状态（flags 有 REDIS_MULTI 标识），服务器会遍历客户端的事务队列，然\n后执行事务队列中的所有命令，最后将返回结果全部返回给客户端；\nredis 不支持事务回滚机制，但是它会检查每一个事务中的命令是否错误。\n图灵学院\nRedis 事务不支持检查那些程序员自己逻辑错误。例如对 String 类型的数据库键执行对 HashMap 类型\n的操作！\nWATCH 命令是一个乐观锁，可以为 Redis 事务提供 check-and-set （CAS）行为。可以监控一个\n或多个键，一旦其中有一个键被修改（或删除），之后的事务就不会执行，监控一直持续到EXEC\n命令。\nMULTI命令用于开启一个事务，它总是返回OK。MULTI执行之后，客户端可以继续向服务器发送\n任意多条命令，这些命令不会立即被执行，而是被放到一个队列中，当EXEC命令被调用时，所有\n队列中的命令才会被执行。\nEXEC：执行所有事务块内的命令。返回事务块内所有命令的返回值，按命令执行的先后顺序排\n列。当操作被打断时，返回空值 nil 。\n通过调用DISCARD，客户端可以清空事务队列，并放弃执行事务， 并且客户端会从事务状态中退\n出。\nUNWATCH命令可以取消watch对所有key的监控。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h2",{attrs:{id:"_5-redis-集群方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-redis-集群方案"}},[s._v("#")]),s._v(" "),n("strong",[s._v("5.redis****集群方案")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("主从\n哨兵模式：\nsentinel，哨兵是 redis 集群中非常重要的一个组件，主要有以下功能：\n集群监控：负责监控 redis master 和 slave 进程是否正常工作。\n消息通知：如果某个 redis 实例有故障，那么哨兵负责发送消息作为报警通知给管理员。\n故障转移：如果 master node 挂掉了，会自动转移到 slave node 上。\n配置中心：如果故障转移发生了，通知 client 客户端新的 master 地址。\n哨兵用于实现 redis 集群的高可用，本身也是分布式的，作为一个哨兵集群去运行，互相协同工作。\n故障转移时，判断一个 master node 是否宕机了，需要大部分的哨兵都同意才行，涉及到了分布\n式选举\n即使部分哨兵节点挂掉了，哨兵集群还是能正常工作的\n哨兵通常需要 3 个实例，来保证自己的健壮性。\n哨兵 + redis 主从的部署架构，是不保证数据零丢失的，只能保证 redis 集群的高可用性。\n对于哨兵 + redis 主从这种复杂的部署架构，尽量在测试环境和生产环境，都进行充足的测试和演\n练。\nRedis Cluster是一种服务端Sharding技术，3.0版本开始正式提供。采用slot(槽)的概念，一共分成\n16384个槽。将请求发送到任意节点，接收到请求的节点会将查询请求发送到正确的节点上执行\n方案说明\n通过哈希的方式，将数据分片，每个节点均分存储一定哈希槽(哈希值)区间的数据，默认分配了\n16384 个槽位\n图灵学院\n每份数据分片会存储在多个互为主从的多节点上\n数据写入先写主节点，再同步到从节点(支持配置为阻塞同步)\n同一分片多个节点间的数据不保持强一致性\n读取数据时，当客户端操作的key没有分配在该节点上时，redis会返回转向指令，指向正确的节点\n扩容时需要需要把旧节点的数据迁移一部分到新节点\n在 redis cluster 架构下，每个 redis 要放开两个端口号，比如一个是 6379，另外一个就是 加1w 的端\n口号，比如 16379。\n16379 端口号是用来进行节点间通信的，也就是 cluster bus 的通信，用来进行故障检测、配置更新、\n故障转移授权。cluster bus 用了另外一种二进制的协议，gossip 协议，用于节点间进行高效的数据交\n换，占用更少的网络带宽和处理时间。\n优点\n无中心架构，支持动态扩容，对业务透明\n具备Sentinel的监控和自动Failover(故障转移)能力\n客户端不需要连接集群所有节点，连接集群中任何一个可用节点即可\n高性能，客户端直连redis服务，免去了proxy代理的损耗\n缺点\n运维也很复杂，数据迁移需要人工干预\n只能使用0号数据库\n不支持批量操作(pipeline管道操作)\n分布式逻辑和存储模块耦合等\nRedis Sharding是Redis Cluster出来之前，业界普遍使用的多Redis实例集群方法。其主要思想是采用\n哈希算法将Redis数据的key进行散列，通过hash函数，特定的key会映射到特定的Redis节点上。Java\nredis客户端驱动jedis，支持Redis Sharding功能，即ShardedJedis以及结合缓存池的\nShardedJedisPool\n优点\n优势在于非常简单，服务端的Redis实例彼此独立，相互无关联，每个Redis实例像单服务器一样运行，\n非常容易线性扩展，系统的灵活性很强\n缺点\n由于sharding处理放到客户端，规模进一步扩大时给运维带来挑战。\n客户端sharding不支持动态增删节点。服务端Redis实例群拓扑结构有变化时，每个客户端都需要更新\n调整。连接不能共享，当应用规模增大时，资源浪费制约优化\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br")])]),n("h2",{attrs:{id:"_6-redis-主从复制的核心原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-redis-主从复制的核心原理"}},[s._v("#")]),s._v(" "),n("strong",[s._v("6.redis")]),s._v(" "),n("strong",[s._v("主从复制的核心原理")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("通过执行slaveof命令或设置slaveof选项，让一个服务器去复制另一个服务器的数据。主数据库可以进\n行读写操作，当写操作导致数据变化时会自动将数据同步给从数据库。而从数据库一般是只读的，并接\n受主数据库同步过来的数据。一个主数据库可以拥有多个从数据库，而一个从数据库只能拥有一个主数\n据库。\n全量复制：\n（1）主节点通过bgsave命令fork子进程进行RDB持久化，该过程是非常消耗CPU、内存(页表复制)、硬\n盘IO的\n（2）主节点通过网络将RDB文件发送给从节点，对主从节点的带宽都会带来很大的消耗\n（3）从节点清空老数据、载入新RDB文件的过程是阻塞的，无法响应客户端的命令；如果从节点执行\nbgrewriteaof，也会带来额外的消耗\n部分复制：\n1. 复制偏移量：执行复制的双方，主从节点，分别会维护一个复制偏移量offset\n2. 复制积压缓冲区：主节点内部维护了一个固定长度的、先进先出(FIFO)队列 作为复制积压缓冲区，\n当主从节点offset的差距过大超过缓冲区长度时，将无法执行部分复制，只能执行全量复制。\n3. 服务器运行ID(runid)：每个Redis节点，都有其运行ID，运行ID由节点在启动时自动生成，主节点\n会将自己的运行ID发送给从节点，从节点会将主节点的运行ID存起来。 从节点Redis断开重连的时\n候，就是根据运行ID来判断同步的进度：\n如果从节点保存的runid与主节点现在的runid相同，说明主从节点之前同步过，主节点会继\n续尝试使用部分复制(到底能不能部分复制还要看offset和复制积压缓冲区的情况)；\n如果从节点保存的runid与主节点现在的runid不同，说明从节点在断线前同步的Redis节点并\n不是当前的主节点，只能进行全量复制。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h2",{attrs:{id:"_7-缓存雪崩、缓存穿透、缓存击穿"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-缓存雪崩、缓存穿透、缓存击穿"}},[s._v("#")]),s._v(" "),n("strong",[s._v("7.缓存雪崩、缓存穿透、缓存击穿")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("缓存雪崩是指缓存同一时间大面积的失效，所以，后面的请求都会落到数据库上，造成数据库短时间内\n承受大量请求而崩掉。\n解决方案：\n缓存数据的过期时间设置随机，防止同一时间大量数据过期现象发生。\n给每一个缓存数据增加相应的缓存标记，记录缓存是否失效，如果缓存标记失效，则更新数据缓\n存。\n缓存预热\n互斥锁\n缓存穿透是指缓存和数据库中都没有的数据，导致所有的请求都落到数据库上，造成数据库短时间内承\n受大量请求而崩掉。\n解决方案：\n接口层增加校验，如用户鉴权校验，id做基础校验，id<=0的直接拦截；\n从缓存取不到的数据，在数据库中也没有取到，这时也可以将key-value对写为key-null，缓存有\n效时间可以设置短点，如30秒（设置太长会导致正常情况也没法使用）。这样可以防止攻击用户\n反复用同一个id暴力攻击\n采用布隆过滤器，将所有可能存在的数据哈希到一个足够大的 bitmap 中，一个一定不存在的数据\n会被这个 bitmap 拦截掉，从而避免了对底层存储系统的查询压力\n缓存击穿是指缓存中没有但数据库中有的数据（一般是缓存时间到期），这时由于并发用户特别多，同\n时读缓存没读到数据，又同时去数据库去取数据，引起数据库压力瞬间增大，造成过大压力。和缓存雪\n崩不同的是，缓存击穿指并发查同一条数据，缓存雪崩是不同数据都过期了，很多数据都查不到从而查\n数据库。\n解决方案\n设置热点数据永远不过期。\n加互斥锁\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);