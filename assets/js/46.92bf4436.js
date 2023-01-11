(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{459:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),a("h2",{attrs:{id:"_1、什么是-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是-redis"}},[s._v("#")]),s._v(" "),a("strong",[s._v("1、什么是 Redis?")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("Redis 是完全开源免费的，遵守 BSD 协议，是一个高性能的 key-value 数据库。\nRedis 与其他 key - value 缓存产品有以下三个特点：\nRedis 支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再\n次加载进行使用。\nRedis 不仅仅支持简单的 key-value 类型的数据，同时还提供 list，set，zset，\nhash 等数据结构的存储。\nRedis 支持数据的备份，即 master-slave 模式的数据备份。\nRedis 优势\n性能极高 – Redis 能读的速度是 110000 次/s,写的速度是 81000 次/s 。\n丰富的数据类型 – Redis 支持二进制案例的 Strings, Lists, Hashes, Sets 及\nOrdered Sets 数据类型操作。\n原子 – Redis 的所有操作都是原子性的，意思就是要么成功执行要么失败完全不\n执行。单个操作是原子性的。多个操作也支持事务，即原子性，通过 MULTI 和 EXEC\n指令包起来。\n丰富的特性 – Redis 还支持 publish/subscribe, 通知, key 过期等等特性。\nRedis 与其他 key-value 存储有什么不同？\nRedis 有着更为复杂的数据结构并且提供对他们的原子性操作，这是一个不同于其\n他数据库的进化路径。Redis 的数据类型都是基于基本数据结构的同时对程序员透\n明，无需进行额外的抽象。\nRedis 运行在内存中但是可以持久化到磁盘，所以在对不同数据集进行高速读写时\n需要权衡内存，因为数据量不能大于硬件内存。在内存数据库方面的另一个优点\n是，相比在磁盘上相同的复杂的数据结构，在内存中操作起来非常简单，这样 Redis\n可以做很多内部复杂性很强的事情。同时，在磁盘格式方面他们是紧凑的以追加\n的方式产生的，因为他们并不需要进行随机访问。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"_2、redis-的数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、redis-的数据类型"}},[s._v("#")]),s._v(" "),a("strong",[s._v("2、Redis 的数据类型？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：Redis 支持五种数据类型：string（字符串），hash（哈希），list（列表），\nset（集合）及 zsetsorted set：有序集合)。\n我们实际项目中比较常用的是 string，hash 如果你是 Redis 中高级用户，还需要\n加上下面几种数据结构 HyperLogLog、Geo、Pub/Sub。\n如果你说还玩过 Redis Module，像 BloomFilter，RedisSearch，Redis-ML，面\n试官得眼睛就开始发亮了。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_3、使用-redis-有哪些好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用-redis-有哪些好处"}},[s._v("#")]),s._v(" "),a("strong",[s._v("3、使用 Redis 有哪些好处？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、速度快，因为数据存在内存中，类似于 HashMap，HashMap 的优势就是查\n找和操作的时间复杂度都是 O1)\n2、支持丰富数据类型，支持 string，list，set，Zset，hash 等\n3、支持事务，操作都是原子性，所谓的原子性就是对数据的更改要么全部执行，\n要么全部不执行\n4、丰富的特性：可用于缓存，消息，按 key 设置过期时间，过期后将会自动删除\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_4、redis-相比-memcached-有哪些优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、redis-相比-memcached-有哪些优势"}},[s._v("#")]),s._v(" "),a("strong",[s._v("4、Redis 相比 Memcached 有哪些优势？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、Memcached 所有的值均是简单的字符串，redis 作为其替代者，支持更为丰\n富的数据类\n2、Redis 的速度比 Memcached 快很多\n3、Redis 可以持久化其数据\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_5、memcache-与-redis-的区别都有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、memcache-与-redis-的区别都有哪些"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5、Memcache 与 Redis 的区别都有哪些？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、存储方式 Memecache 把数据全部存在内存之中，断电后会挂掉，数据不能\n超过内存大小。 Redis 有部份存在硬盘上，这样能保证数据的持久性。\n2、数据支持类型 Memcache 对数据类型支持相对简单。 Redis 有复杂的数据类\n型。\n3、使用底层模型不同 它们之间底层实现方式 以及与客户端之间通信的应用协议\n不一样。 Redis 直接自己构建了 VM 机制 ，因为一般的系统调用系统函数的话，\n会浪费一定的时间去移动和请求。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_6、redis-是单进程单线程的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、redis-是单进程单线程的"}},[s._v("#")]),s._v(" "),a("strong",[s._v("6、Redis 是单进程单线程的？")])]),s._v(" "),a("p",[s._v("答：Redis 是单进程单线程的，redis 利用队列技术将并发访问变为串行访问，消")]),s._v(" "),a("p",[s._v("除了传统数据库串行控制的开销。")]),s._v(" "),a("h2",{attrs:{id:"_7、一个字符串类型的值能存储最大容量是多少"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、一个字符串类型的值能存储最大容量是多少"}},[s._v("#")]),s._v(" "),a("strong",[s._v("7、一个字符串类型的值能存储最大容量是多少？")])]),s._v(" "),a("p",[s._v("答：512M")]),s._v(" "),a("h2",{attrs:{id:"_8、redis-的持久化机制是什么-各自的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、redis-的持久化机制是什么-各自的优缺点"}},[s._v("#")]),s._v(" "),a("strong",[s._v("8、Redis 的持久化机制是什么？各自的优缺点？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("Redis 提供两种持久化机制 RDB 和 AOF 机制:\n1、RDBRedis DataBase)持久化方式： 是指用数据集快照的方式半持久化模式)\n记录 redis 数据库的所有键值对,在某个时间点将数据写入一个临时文件，持久化\n结束后，用这个临时文件替换上次持久化的文件，达到数据恢复。\n优点：\n1、只有一个文件 dump.rdb，方便持久化。\n2、容灾性好，一个文件可以保存到安全的磁盘。\n3、性能最大化，fork 子进程来完成写操作，让主进程继续处理命令，所以是 IO\n最大化。使用单独子进程来进行持久化，主进程不会进行任何 IO 操作，保证了 redis\n的高性能) 4.相对于数据集大时，比 AOF 的启动效率更高。\n缺点：\n1、数据安全性低。RDB 是间隔一段时间进行持久化，如果持久化之间 redis 发生\n故障，会发生数据丢失。所以这种方式更适合数据要求不严谨的时候)\n2、AOFAppend-only file)持久化方式： 是指所有的命令行记录以 redis 命令请\n求协议的格式完全持久化存储)保存为 aof 文件。\n优点\n1、数据安全，aof 持久化可以配置 appendfsync 属性，有 always，每进行一次\n命令操作就记录到 aof 文件中一次。\n2、通过 append 模式写文件，即使中途服务器宕机，可以通过 redis-check-aof\n工具解决数据一致性问题。\n3、AOF 机制的 rewrite 模式。AOF 文件没被 rewrite 之前（文件过大时会对命令\n进行合并重写），可以删除其中的某些命令（比如误操作的 flushall）)\n缺点：\n1、AOF 文件比 RDB 文件大，且恢复速度慢。\n2、数据集大的时候，比 rdb 启动效率低。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"_9、redis-常见性能问题和解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、redis-常见性能问题和解决方案"}},[s._v("#")]),s._v(" "),a("strong",[s._v("9、Redis 常见性能问题和解决方案：")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、Master 最好不要写内存快照，如果 Master 写内存快照，save 命令调度 rdbSave\n函数，会阻塞主线程的工作，当快照比较大时对性能影响是非常大的，会间断性\n暂停服务\n2、如果数据比较重要，某个 Slave 开启 AOF 备份数据，策略设置为每秒同步一\n3、为了主从复制的速度和连接的稳定性，Master 和 Slave 最好在同一个局域网\n4、尽量避免在压力很大的主库上增加从\n5、主从复制不要用图状结构，用单向链表结构更为稳定，即：Master <- Slave1\n<- Slave2 <- Slave3…这样的结构方便解决单点故障问题，实现 Slave 对 Master\n的替换。如果 Master 挂了，可以立刻启用 Slave1 做 Master，其他不变。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_10、redis-过期键的删除策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、redis-过期键的删除策略"}},[s._v("#")]),s._v(" "),a("strong",[s._v("10、redis 过期键的删除策略？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、定时删除:在设置键的过期时间的同时，创建一个定时器 timer). 让定时器在键\n的过期时间来临时，立即执行对键的删除操作。\n2、惰性删除:放任键过期不管，但是每次从键空间中获取键时，都检查取得的键是\n否过期，如果过期的话，就删除该键;如果没有过期，就返回该键。\n3、定期删除:每隔一段时间程序就对数据库进行一次检查，删除里面的过期键。至\n于要删除多少过期键，以及要检查多少个数据库，则由算法决定。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_11、redis-的回收策略-淘汰策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、redis-的回收策略-淘汰策略"}},[s._v("#")]),s._v(" "),a("strong",[s._v("11、Redis 的回收策略（淘汰策略）?")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("volatile-lru：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最\n少使用的数据淘汰\nvolatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过\n期的数据淘汰\nvolatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意\n选择数据淘汰\nallkeys-lru：从数据集（server.db[i].dict）中挑选最近最少使用的数据淘汰\nallkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰\nno-enviction（驱逐）：禁止驱逐数据\n注意这里的 6 种机制，volatile 和 allkeys 规定了是对已设置过期时间的数据集淘\n汰数据还是从全部数据集淘汰数据，后面的 lru、ttl 以及 random 是三种不同的\n淘汰策略，再加上一种 no-enviction 永不回收的策略。\n使用策略规则：\n1、如果数据呈现幂律分布，也就是一部分数据访问频率高，一部分数据访问频率\n低，则使用 allkeys-lru\n2、如果数据呈现平等分布，也就是所有的数据访问频率都相同，则使用\nallkeys-random\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"_12、为什么-redis-需要把所有数据放到内存中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、为什么-redis-需要把所有数据放到内存中"}},[s._v("#")]),s._v(" "),a("strong",[s._v("12、为什么 redis 需要把所有数据放到内存中？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：Redis 为了达到最快的读写速度将数据都读到内存中，并通过异步的方式将数\n据写入磁盘。所以 redis 具有快速和数据持久化的特征。如果不将数据放在内存中，\n磁盘 I/O 速度为严重影响 redis 的性能。在内存越来越便宜的今天，redis 将会越\n来越受欢迎。如果设置了最大使用的内存，则数据已有记录数达到内存限值后不\n能继续插入新值。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_13、redis-的同步机制了解么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、redis-的同步机制了解么"}},[s._v("#")]),s._v(" "),a("strong",[s._v("13、Redis 的同步机制了解么？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：Redis 可以使用主从同步，从从同步。第一次同步时，主节点做一次 bgsave，\n并同时将后续修改操作记录到内存 buffer，待完成后将 rdb 文件全量同步到复制\n节点，复制节点接受完成后将 rdb 镜像加载到内存。加载完成后，再通知主节点\n将期间修改的操作记录同步到复制节点进行重放就完成了同步过程\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_14、pipeline-有什么好处-为什么要用-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14、pipeline-有什么好处-为什么要用-pipeline"}},[s._v("#")]),s._v(" "),a("strong",[s._v("14、Pipeline 有什么好处，为什么要用 pipeline？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：可以将多次 IO 往返的时间缩减为一次，前提是 pipeline 执行的指令之间没有\n因果相关性。使用 redis-benchmark 进行压测的时候可以发现影响 redis 的 QPS\n峰值的一个重要因素是 pipeline 批次指令的数目\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_15、是否使用过-redis-集群-集群的原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15、是否使用过-redis-集群-集群的原理是什么"}},[s._v("#")]),s._v(" "),a("strong",[s._v("15、是否使用过 Redis 集群，集群的原理是什么？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1)、Redis Sentinal 着眼于高可用，在 master 宕机时会自动将 slave 提升为\nmaster，继续提供服务。\n2)、Redis Cluster 着眼于扩展性，在单个 redis 内存不足时，使用 Cluster 进行\n分片存储。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_16、redis-集群方案什么情况下会导致整个集群不可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16、redis-集群方案什么情况下会导致整个集群不可用"}},[s._v("#")]),s._v(" "),a("strong",[s._v("16、Redis 集群方案什么情况下会导致整个集群不可用？")])]),s._v(" "),a("p",[s._v("答：有 A，B，C 三个节点的集群,在没有复制模型的情况下,如果节点 B 失败了，")]),s._v(" "),a("p",[s._v("那么整个集群就会以为缺少 5501-11000 这个范围的槽而不可用。")]),s._v(" "),a("h2",{attrs:{id:"_17、redis-支持的-java-客户端都有哪些-官方推荐用哪个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17、redis-支持的-java-客户端都有哪些-官方推荐用哪个"}},[s._v("#")]),s._v(" "),a("strong",[s._v("17、Redis 支持的 Java 客户端都有哪些？官方推荐用哪个？")])]),s._v(" "),a("p",[s._v("答：Redisson、Jedis、lettuce 等等，官方推荐使用 Redisson。")]),s._v(" "),a("h2",{attrs:{id:"_18、jedis-与-redisson-对比有什么优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18、jedis-与-redisson-对比有什么优缺点"}},[s._v("#")]),s._v(" "),a("strong",[s._v("18、Jedis 与 Redisson 对比有什么优缺点？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：Jedis 是 Redis 的 Java 实现的客户端，其 API 提供了比较全面的 Redis 命令\n的支持；Redisson 实现了分布式和可扩展的 Java 数据结构，和 Jedis 相比，功能\n较为简单，不支持字符串操作，不支持排序、事务、管道、分区等 Redis 特性。\nRedisson 的宗旨是促进使用者对 Redis 的关注分离，从而让使用者能够将精力更\n集中地放在处理业务逻辑上。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_19、redis-如何设置密码及验证密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19、redis-如何设置密码及验证密码"}},[s._v("#")]),s._v(" "),a("strong",[s._v("19、Redis 如何设置密码及验证密码？")])]),s._v(" "),a("p",[s._v("设置密码：config set requirepass 123456")]),s._v(" "),a("p",[s._v("授权密码：auth 123456")]),s._v(" "),a("h2",{attrs:{id:"_20、说说-redis-哈希槽的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20、说说-redis-哈希槽的概念"}},[s._v("#")]),s._v(" "),a("strong",[s._v("20、说说 Redis 哈希槽的概念？")])]),s._v(" "),a("p",[s._v("答：Redis 集群没有使用一致性 hash,而是引入了哈希槽的概念，Redis 集群有")]),s._v(" "),a("p",[s._v("16384 个哈希槽，每个 key 通过 CRC16 校验后对 16384 取模来决定放置哪个槽，")]),s._v(" "),a("p",[s._v("集群的每个节点负责一部分 hash 槽。")]),s._v(" "),a("h2",{attrs:{id:"_21、redis-集群的主从复制模型是怎样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21、redis-集群的主从复制模型是怎样的"}},[s._v("#")]),s._v(" "),a("strong",[s._v("21、Redis 集群的主从复制模型是怎样的？")])]),s._v(" "),a("p",[s._v("答：为了使在部分节点失败或者大部分节点无法通信的情况下集群仍然可用，所")]),s._v(" "),a("p",[s._v("以集群使用了主从复制模型,每个节点都会有 N-1 个复制品.")]),s._v(" "),a("h2",{attrs:{id:"_22、redis-集群会有写操作丢失吗-为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22、redis-集群会有写操作丢失吗-为什么"}},[s._v("#")]),s._v(" "),a("strong",[s._v("22、Redis 集群会有写操作丢失吗？为什么？")])]),s._v(" "),a("p",[s._v("答：Redis 并不能保证数据的强一致性，这意味这在实际中集群在特定的条件下可")]),s._v(" "),a("p",[s._v("能会丢失写操作。")]),s._v(" "),a("h2",{attrs:{id:"_23、redis-集群之间是如何复制的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23、redis-集群之间是如何复制的"}},[s._v("#")]),s._v(" "),a("strong",[s._v("23、Redis 集群之间是如何复制的？")])]),s._v(" "),a("p",[s._v("答：异步复制")]),s._v(" "),a("h2",{attrs:{id:"_24、redis-集群最大节点个数是多少"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_24、redis-集群最大节点个数是多少"}},[s._v("#")]),s._v(" "),a("strong",[s._v("24、Redis 集群最大节点个数是多少？")])]),s._v(" "),a("p",[s._v("答：16384 个。")]),s._v(" "),a("h2",{attrs:{id:"_25、redis-集群如何选择数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_25、redis-集群如何选择数据库"}},[s._v("#")]),s._v(" "),a("strong",[s._v("25、Redis 集群如何选择数据库？")])]),s._v(" "),a("p",[s._v("答：Redis 集群目前无法做数据库选择，默认在 0 数据库。")]),s._v(" "),a("h2",{attrs:{id:"_26、怎么测试-redis-的连通性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_26、怎么测试-redis-的连通性"}},[s._v("#")]),s._v(" "),a("strong",[s._v("26、怎么测试 Redis 的连通性？")])]),s._v(" "),a("p",[s._v("答：使用 ping 命令。")]),s._v(" "),a("h2",{attrs:{id:"_27、怎么理解-redis-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_27、怎么理解-redis-事务"}},[s._v("#")]),s._v(" "),a("strong",[s._v("27、怎么理解 Redis 事务？")])]),s._v(" "),a("p",[s._v("答：")]),s._v(" "),a("p",[s._v("1）事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。")]),s._v(" "),a("p",[s._v("事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。")]),s._v(" "),a("p",[s._v("2）事务是一个原子操作：事务中的命令要么全部被执行，要么全部都不执行。")]),s._v(" "),a("h2",{attrs:{id:"_28、redis-事务相关的命令有哪几个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_28、redis-事务相关的命令有哪几个"}},[s._v("#")]),s._v(" "),a("strong",[s._v("28、Redis 事务相关的命令有哪几个？")])]),s._v(" "),a("p",[s._v("答：MULTI、EXEC、DISCARD、WATCH")]),s._v(" "),a("h2",{attrs:{id:"_29、redis-key-的过期时间和永久有效分别怎么设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_29、redis-key-的过期时间和永久有效分别怎么设置"}},[s._v("#")]),s._v(" "),a("strong",[s._v("29、Redis key 的过期时间和永久有效分别怎么设置？")])]),s._v(" "),a("p",[s._v("答：EXPIRE 和 PERSIST 命令。")]),s._v(" "),a("h2",{attrs:{id:"_30、redis-如何做内存优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_30、redis-如何做内存优化"}},[s._v("#")]),s._v(" "),a("strong",[s._v("30、Redis 如何做内存优化？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：尽可能使用散列表（hashes），散列表（是说散列表里面存储的数少）使用\n的内存非常小，所以你应该尽可能的将你的数据模型抽象到一个散列表里面。比\n如你的 web 系统中有一个用户对象，不要为这个用户的名称，姓氏，邮箱，密码\n设置单独的 key,而是应该把这个用户的所有信息存储到一张散列表里面.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_31、redis-回收进程如何工作的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_31、redis-回收进程如何工作的"}},[s._v("#")]),s._v(" "),a("strong",[s._v("31、Redis 回收进程如何工作的？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：一个客户端运行了新的命令，添加了新的数据。Redi 检查内存使用情况，如\n果大于 maxmemory 的限制, 则根据设定好的策略进行回收。一个新的命令被执\n行，等等。所以我们不断地穿越内存限制的边界，通过不断达到边界然后不断地\n回收回到边界以下。如果一个命令的结果导致大量内存被使用（例如很大的集合\n的交集保存到一个新的键），不用多久内存限制就会被这个内存使用量超越。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_32、都有哪些办法可以降低-redis-的内存使用情况呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_32、都有哪些办法可以降低-redis-的内存使用情况呢"}},[s._v("#")]),s._v(" "),a("strong",[s._v("32、都有哪些办法可以降低 Redis 的内存使用情况呢？")])]),s._v(" "),a("p",[s._v("答：如果你使用的是 32 位的 Redis 实例，可以好好利用 Hash,list,sorted set,set")]),s._v(" "),a("p",[s._v("等集合类型数据，因为通常情况下很多小的 Key-Value 可以用更紧凑的方式存放")]),s._v(" "),a("p",[s._v("到一起。")]),s._v(" "),a("h2",{attrs:{id:"_33、redis-的内存用完了会发生什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_33、redis-的内存用完了会发生什么"}},[s._v("#")]),s._v(" "),a("strong",[s._v("33、Redis 的内存用完了会发生什么？")])]),s._v(" "),a("p",[s._v("答：如果达到设置的上限，Redis 的写命令会返回错误信息（但是读命令还可以正")]),s._v(" "),a("p",[s._v("常返回。）或者你可以将 Redis 当缓存来使用配置淘汰机制，当 Redis 达到内存")]),s._v(" "),a("p",[s._v("上限时会冲刷掉旧的内容。")]),s._v(" "),a("h2",{attrs:{id:"_34、一个-redis-实例最多能存放多少的-keys-list、set、sorted-set-他们最多能存放多少元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_34、一个-redis-实例最多能存放多少的-keys-list、set、sorted-set-他们最多能存放多少元素"}},[s._v("#")]),s._v(" "),a("strong",[s._v("34、一个 Redis 实例最多能存放多少的 keys？List、Set、Sorted Set 他们最多能存放多少元素？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：理论上 Redis 可以处理多达 232 的 keys，并且在实际中进行了测试，每个实\n例至少存放了 2 亿 5 千万的 keys。我们正在测试一些较大的值。任何 list、set、\n和 sorted set 都可以放 232 个元素。换句话说，Redis 的存储极限是系统中的可\n用内存值。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_35、mysql-里有-2000w-数据-redis-中只存-20w-的数据-如何保证-redis-中的数据都是热点数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_35、mysql-里有-2000w-数据-redis-中只存-20w-的数据-如何保证-redis-中的数据都是热点数据"}},[s._v("#")]),s._v(" "),a("strong",[s._v("35、MySQL 里有 2000w 数据，redis 中只存 20w 的数据，如何保证 redis 中的数据都是热点数据？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：Redis 内存数据集大小上升到一定大小的时候，就会施行数据淘汰策略。\n相关知识：Redis 提供 6 种数据淘汰策略：\nvolatile-lru：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最\n少使用的数据淘汰\nvolatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过\n期的数据淘汰\nvolatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意\n选择数据淘汰\nallkeys-lru：从数据集（server.db[i].dict）中挑选最近最少使用的数据淘汰\nallkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰\nno-enviction（驱逐）：禁止驱逐数据\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_36、redis-最适合的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_36、redis-最适合的场景"}},[s._v("#")]),s._v(" "),a("strong",[s._v("36、Redis 最适合的场景？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1、会话缓存（Session Cache）\n最常用的一种使用 Redis 的情景是会话缓存（session cache）。用 Redis 缓存会\n话比其他存储（如 Memcached）的优势在于：Redis 提供持久化。当维护一个不\n是严格要求一致性的缓存时，如果用户的购物车信息全部丢失，大部分人都会不\n高兴的，现在，他们还会这样吗？ 幸运的是，随着 Redis 这些年的改进，很容\n易找到怎么恰当的使用 Redis 来缓存会话的文档。甚至广为人知的商业平台\nMagento 也提供 Redis 的插件。\n2、全页缓存（FPC）\n除基本的会话 token 之外，Redis 还提供很简便的 FPC 平台。回到一致性问题，\n即使重启了 Redis 实例，因为有磁盘的持久化，用户也不会看到页面加载速度的\n下降，这是一个极大改进，类似 PHP 本地 FPC。 再次以 Magento 为例，Magento\n提供一个插件来使用 Redis 作为全页缓存后端。 此外，对 WordPress 的用户来\n说，Pantheon 有一个非常好的插件 wp-redis，这个插件能帮助你以最快速度加\n载你曾浏览过的页面。\n3、队列\nReids 在内存存储引擎领域的一大优点是提供 list 和 set 操作，这使得 Redis\n能作为一个很好的消息队列平台来使用。Redis 作为队列使用的操作，就类似于本\n地程序语言（如 Python）对 list 的 push/pop 操作。 如果你快速的在 Google\n中搜索“Redis queues”，你马上就能找到大量的开源项目，这些项目的目的就\n是利用 Redis 创建非常好的后端工具，以满足各种队列需求。例如，Celery 有一\n个后台就是使用 Redis 作为 broker，你可以从这里去查看。\n4，排行榜/计数器\nRedis 在内存中对数字进行递增或递减的操作实现的非常好。集合（Set）和有序\n集合（Sorted Set）也使得我们在执行这些操作的时候变的非常简单，Redis 只是\n正好提供了这两种数据结构。所以，我们要从排序集合中获取到排名最靠前的 10\n个用户–我们称之为“user_scores”，我们只需要像下面一样执行即可： 当然，\n这是假定你是根据你用户的分数做递增的排序。如果你想返回用户及用户的分数，\n你需要这样执行： ZRANGE user_scores 0 10 WITHSCORES Agora Games 就\n是一个很好的例子，用 Ruby 实现的，它的排行榜就是使用 Redis 来存储数据的，\n你可以在这里看到。\n5、发布/订阅\n最后（但肯定不是最不重要的）是 Redis 的发布/订阅功能。发布/订阅的使用场景\n确实非常多。我已看见人们在社交网络连接中使用，还可作为基于发布/订阅的脚\n本触发器，甚至用 Redis 的发布/订阅功能来建立聊天系统！\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("h2",{attrs:{id:"_37、假如-redis-里面有-1-亿个-key-其中有-10w-个-key-是以某个固定的已知的前缀开头的-如果将它们全部找出来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_37、假如-redis-里面有-1-亿个-key-其中有-10w-个-key-是以某个固定的已知的前缀开头的-如果将它们全部找出来"}},[s._v("#")]),s._v(" "),a("strong",[s._v("37、假如 Redis 里面有 1 亿个 key，其中有 10w 个 key 是以某个固定的已知的前缀开头的，如果将它们全部找出来？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：使用 keys 指令可以扫出指定模式的 key 列表。\n对方接着追问：如果这个 redis 正在给线上的业务提供服务，那使用 keys 指令会\n有什么问题？\n这个时候你要回答 redis 关键的一个特性：redis 的单线程的。keys 指令会导致线\n程阻塞一段时间，线上服务会停顿，直到指令执行完毕，服务才能恢复。这个时\n候可以使用 scan 指令，scan 指令可以无阻塞的提取出指定模式的 key 列表，但\n是会有一定的重复概率，在客户端做一次去重就可以了，但是整体所花费的时间\n会比直接用 keys 指令长。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_38、如果有大量的-key-需要设置同一时间过期-一般需要注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_38、如果有大量的-key-需要设置同一时间过期-一般需要注意"}},[s._v("#")]),s._v(" "),a("strong",[s._v("38、如果有大量的 key 需要设置同一时间过期，一般需要注意")])]),s._v(" "),a("p",[a("strong",[s._v("什么？")])]),s._v(" "),a("p",[s._v("答：如果大量的 key 过期时间设置的过于集中，到过期的那个时间点，redis 可能")]),s._v(" "),a("p",[s._v("会出现短暂的卡顿现象。一般需要在时间上加一个随机值，使得过期时间分散一")]),s._v(" "),a("p",[s._v("些。")]),s._v(" "),a("h2",{attrs:{id:"_39、使用过-redis-做异步队列么-你是怎么用的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_39、使用过-redis-做异步队列么-你是怎么用的"}},[s._v("#")]),s._v(" "),a("strong",[s._v("39、使用过 Redis 做异步队列么，你是怎么用的？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("答：一般使用 list 结构作为队列，rpush 生产消息，lpop 消费消息。当 lpop 没有\n消息的时候，要适当 sleep 一会再重试。\n如果对方追问可不可以不用 sleep 呢？\nlist 还有个指令叫 blpop，在没有消息的时候，它会阻塞住直到消息到来。如果对\n方追问能不能生产一次消费多次呢？使用 pub/sub 主题订阅者模式，可以实现\n1:N 的消息队列。\n如果对方追问 pub/sub 有什么缺点？\n在消费者下线的情况下，生产的消息会丢失，得使用专业的消息队列如 RabbitMQ\n等。\n如果对方追问 redis 如何实现延时队列？\n我估计现在你很想把面试官一棒打死如果你手上有一根棒球棍的话，怎么问的这\n么详细。但是你很克制，然后神态自若的回答道：使用 sortedset，拿时间戳作为\nscore，消息内容作为 key 调用 zadd 来生产消息，消费者用 zrangebyscore 指令\n获取 N 秒之前的数据轮询进行处理。到这里，面试官暗地里已经对你竖起了大拇\n指。但是他不知道的是此刻你却竖起了中指，在椅子背后。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"_40、使用过-redis-分布式锁么-它是什么回事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_40、使用过-redis-分布式锁么-它是什么回事"}},[s._v("#")]),s._v(" "),a("strong",[s._v("40、使用过 Redis 分布式锁么，它是什么回事？")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("先拿 setnx 来争抢锁，抢到之后，再用 expire 给锁加一个过期时间防止锁忘记了\n释放。\n这时候对方会告诉你说你回答得不错，然后接着问如果在 setnx 之后执行 expire\n之前进程意外 crash 或者要重启维护了，那会怎么样？\n这时候你要给予惊讶的反馈：唉，是喔，这个锁就永远得不到释放了。紧接着你\n需要抓一抓自己得脑袋，故作思考片刻，好像接下来的结果是你主动思考出来的，\n然后回答：我记得 set 指令有非常复杂的参数，这个应该是可以同时把 setnx 和\nexpire 合成一条指令来用的！对方这时会显露笑容，心里开始默念：摁，这小子\n还不错\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);