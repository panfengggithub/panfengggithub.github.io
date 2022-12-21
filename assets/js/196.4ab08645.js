(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{608:function(a,r,_){"use strict";_.r(r);var v=_(1),s=Object(v.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"redis的持久化机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis的持久化机制"}},[a._v("#")]),a._v(" "),r("strong",[a._v("redis的持久化机制")])]),a._v(" "),r("p",[a._v("说白了，就是在指定的时间间隔内，将内存当中的数据集快照写入磁盘，它恢复时是将快照文件直接读到内存")]),a._v(" "),r("p",[a._v("什么意思呢？我们都知道，内存当中的数据，如果我们一断电，那么数据必然会丢失，但是玩过redis的同学应该都知道，我们一关机之后再启动的时候数据是还在的，所以它必然是在redis启动的时候重新去加载了持久化的文件")]),a._v(" "),r("p",[a._v("redis提供两种方式进行持久化，")]),a._v(" "),r("p",[a._v("一种是RDB持久化默认，")]),a._v(" "),r("p",[a._v("另外一种是AOF（append only file）持久化。")]),a._v(" "),r("h3",{attrs:{id:"_1-rdb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-rdb"}},[a._v("#")]),a._v(" 1.RDB")]),a._v(" "),r("h4",{attrs:{id:"是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[a._v("#")]),a._v(" 是什么？")]),a._v(" "),r("p",[a._v("原理是redis会单独创建（fork）一个与当前进程一模一样的子进程来进行持久化，这个子进程的所有数据（变量。环境变量，程序程序计数器等）都和原进程一模一样，会先将数据写入到一个临时文件中，待持久化结束了，再用这个临时文件替换上次持久化好的文件，整个过程中，主进程不进行任何的io操作，这就确保了极高的性能")]),a._v(" "),r("p",[a._v("问题：为什么要fork一个子进程？（上课演示了阻塞效果，证明了fork了子进程）")]),a._v(" "),r("p",[a._v("因为redis是单线程的，如果这个线程去进行rdb持久化了，那么此时有客户端向我们服务端发送命令，他是得不到处理的（唯一的线程在做持久化），必须要等持久化结束后才能接受客户端命令。那么这个过程可以理解为客户端发送命令会阻塞，性能低下。")]),a._v(" "),r("h4",{attrs:{id:"_1-这个持久化文件在哪里"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-这个持久化文件在哪里"}},[a._v("#")]),a._v(" 1.这个持久化文件在哪里")]),a._v(" "),r("p",[a._v("根据dir配置")]),a._v(" "),r("h4",{attrs:{id:"_2-他什么时候fork子进程-或者什么时候触发rdb持久化机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-他什么时候fork子进程-或者什么时候触发rdb持久化机制"}},[a._v("#")]),a._v(" 2.他什么时候fork子进程，或者什么时候触发rdb持久化机制")]),a._v(" "),r("p",[a._v("shutdown时，如果没有开启aof，会触发")]),a._v(" "),r("p",[a._v("配置文件中默认的快照配置")]),a._v(" "),r("p",[a._v("执行命令save或者bgsave")]),a._v(" "),r("p",[a._v("bgsave：会fork子进程，原理与rdb上面原理一样，系统默认触发rdb持久化都是调用的此命令")]),a._v(" "),r("p",[a._v("save：是不会fork子进程的，它使用主进程进行持久化，所以会导致客户端命令发送到我们服务端得不到及时处理，所以他是阻塞的")]),a._v(" "),r("p",[a._v("执行flushall命令  但是里面是空的，无意义")]),a._v(" "),r("h3",{attrs:{id:"_2-aof"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-aof"}},[a._v("#")]),a._v(" 2.aof")]),a._v(" "),r("h4",{attrs:{id:"是什么-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#是什么-2"}},[a._v("#")]),a._v(" 是什么？")]),a._v(" "),r("p",[a._v("原理是将Reids的操作日志以追加的方式写入文件，读操作是不记录的，整体分为三步")]),a._v(" "),r("p",[a._v("数据写入内存--》数据写入aof_buf---》写入持久化文件。第二步到第三步什么时候执行根据配置文件触发机制")]),a._v(" "),r("p",[a._v("注意：aof持久化不会fork子进程")]),a._v(" "),r("h4",{attrs:{id:"_1-这个持久化文件在哪里-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-这个持久化文件在哪里-2"}},[a._v("#")]),a._v(" 1.这个持久化文件在哪里")]),a._v(" "),r("p",[a._v("根据dir配置")]),a._v(" "),r("h4",{attrs:{id:"_2-触发机制-根据配置文件配置项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-触发机制-根据配置文件配置项"}},[a._v("#")]),a._v(" 2.触发机制（根据配置文件配置项）")]),a._v(" "),r("p",[a._v("no：表示等操作系统进行数据缓存同步到磁盘（快，持久化没保证）")]),a._v(" "),r("p",[a._v("always：同步持久化，每次发生数据变更时，立即记录到磁盘（慢，安全）")]),a._v(" "),r("p",[a._v("everysec：表示每秒同步一次（默认值,很快，但可能会丢失一秒以内的数据）")]),a._v(" "),r("h4",{attrs:{id:"_3-aof重写机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-aof重写机制"}},[a._v("#")]),a._v(" 3.aof重写机制")]),a._v(" "),r("p",[a._v("为什么会出现重写？")]),a._v(" "),r("p",[a._v("aof是以日志追加的方式将命令字符串协议保存在aof 文件中，随着我们使用redis的时间越长，最redis的操作越多，这个aof文件会越来越大，如果不做处理，总有会撑爆磁盘，所以就出现了重写，重写就是专门给aof文件廋身的，")]),a._v(" "),r("p",[a._v("他的思想是：直接根据现在内存的数据，生成新的aof文件，然后去替换旧的aof文件，就可以把一下没用字符去掉，比如set k1 v1 ,然后我们del k1等等一些没用操作，这样我们的文件大小就会小很多")]),a._v(" "),r("p",[r("strong",[a._v("触发机制")])]),a._v(" "),r("p",[a._v("当AOF文件增长到一定大小的时候Redis能够调用 bgrewriteaof对日志文件进行重写 。当AOF文件大小的增长率大于该配置项时自动开启重写（这里指超过原大小的100%）。")]),a._v(" "),r("p",[a._v("auto-aof-rewrite-percentage 100")]),a._v(" "),r("p",[a._v("当AOF文件增长到一定大小的时候Redis能够调用 bgrewriteaof对日志文件进行重写 。当AOF文件大小大于该配置项时自动开启重写")]),a._v(" "),r("p",[a._v("auto-aof-rewrite-min-size 64mb")]),a._v(" "),r("p",[a._v("注意：重写操作是通过fork子进程来完成的，所以正常的aof不会fork子进程，触发了重写才会")]),a._v(" "),r("h4",{attrs:{id:"_4-redis4-0后混合持久化机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis4-0后混合持久化机制"}},[a._v("#")]),a._v(" 4.redis4.0后混合持久化机制")]),a._v(" "),r("h5",{attrs:{id:"开启混合持久化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开启混合持久化"}},[a._v("#")]),a._v(" 开启混合持久化")]),a._v(" "),r("p",[a._v("4.0版本的混合持久化默认关闭的，通过aof-use-rdb-preamble配置参数控制，yes则表示开启，no表示禁用，5.0之后默认开启。")]),a._v(" "),r("p",[a._v("混合持久化是通过bgrewriteaof完成的，不同的是当开启混合持久化时，fork出的子进程先将共享的内存副本全量的以RDB方式写入aof文件，然后在将重写缓冲区的增量命令以AOF方式写入到文件，写入完成后通知主进程更新统计信息，并将新的含有RDB格式和AOF格式的AOF文件替换旧的的AOF文件。简单的说：新的AOF文件前半段是RDB格式的全量数据后半段是AOF格式的增量数据，")]),a._v(" "),r("p",[a._v("优点：混合持久化结合了RDB持久化 和 AOF 持久化的优点, 由于绝大部分都是RDB格式，加载速度快，同时结合AOF，增量的数据以AOF方式保存了，数据更少的丢失。")]),a._v(" "),r("p",[a._v("缺点：兼容性差，一旦开启了混合持久化，在4.0之前版本都不识别该aof文件，同时由于前部分是RDB格式，阅读性较差")]),a._v(" "),r("p",[a._v("问题解答：")]),a._v(" "),r("p",[a._v("rdb配置成save 1 1（代表一秒钟看一次，是否有1个数据更改，有就触发rdb）")]),a._v(" "),r("p",[a._v("aof采用默认值everysec（表示每秒同步一次），那么这两种方式有什么区别？")]),a._v(" "),r("p",[a._v("答：rdb持久化会fork子进程，aof持久化不会fork子进程（重写的时候才会fork子进程，重写不会频繁触发），")]),a._v(" "),r("p",[a._v("fork子进程，复制一个进程，比我们整个redis整体开销少不了多。所以如果配置成这样，性能开销相差是巨大的")]),a._v(" "),r("h2",{attrs:{id:"小总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小总结"}},[a._v("#")]),a._v(" 小总结：")]),a._v(" "),r("h3",{attrs:{id:"_1-redis提供了rdb持久化方案-为什么还要aof"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis提供了rdb持久化方案-为什么还要aof"}},[a._v("#")]),a._v(" 1.redis提供了rdb持久化方案，为什么还要aof？")]),a._v(" "),r("p",[a._v("优化数据丢失问题，rdb会丢失最后一次快照后的数据，aof丢失不会超过2秒的数据")]),a._v(" "),r("h3",{attrs:{id:"_2-如果aof和rdb同时存在-听谁的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-如果aof和rdb同时存在-听谁的"}},[a._v("#")]),a._v(" 2.如果aof和rdb同时存在，听谁的？")]),a._v(" "),r("p",[a._v("aof")]),a._v(" "),r("h3",{attrs:{id:"_3-rdb和aof优势劣势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-rdb和aof优势劣势"}},[a._v("#")]),a._v(" 3.rdb和aof优势劣势")]),a._v(" "),r("p",[a._v("rdb 适合大规模的数据恢复，对数据完整性和一致性不高 ，  在一定间隔时间做一次备份，如果redis意外down机的话，就会丢失最后一次快照后的所有操作")]),a._v(" "),r("p",[a._v("aof 根据配置项而定，如果是默认配置，不会丢失超过两秒的数据")]),a._v(" "),r("h3",{attrs:{id:"性能建议-这里只针对单机版redis持久化做性能建议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能建议-这里只针对单机版redis持久化做性能建议"}},[a._v("#")]),a._v(" 性能建议（这里只针对单机版redis持久化做性能建议）：")]),a._v(" "),r("p",[a._v("rdb和aof同时存在时，因为RDB文件只用作后备用途，只要15分钟备份一次就够了，只保留save 900 1这条规则。")]),a._v(" "),r("p",[a._v("重写：只要硬盘许可，应该尽量减少AOF rewrite的频率，AOF重写的基础大小默认值64M太小了，可以设到5G以上。默认超过原大小100%大小时重写可以改到适当的数值。")]),a._v(" "),r("hr")])}),[],!1,null,null,null);r.default=s.exports}}]);