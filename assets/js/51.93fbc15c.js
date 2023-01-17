(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{463:function(e,v,_){"use strict";_.r(v);var s=_(1),a=Object(s.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"redis快速入门"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis快速入门"}},[e._v("#")]),e._v(" "),v("strong",[e._v("redis快速入门")])]),e._v(" "),v("h2",{attrs:{id:"是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[e._v("#")]),e._v(" 是什么?")]),e._v(" "),v("p",[e._v("是完全开源免费的，用c语言编写的，是一个单线程，高性能的（key/value）内存数据库，基于内存运行并支持持久化的nosql数据库")]),e._v(" "),v("h2",{attrs:{id:"能干嘛"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#能干嘛"}},[e._v("#")]),e._v(" 能干嘛？")]),e._v(" "),v("p",[e._v("主要是用来做缓存，但不仅仅只能做缓存，比如：redis的计数器生成分布式唯一主键，redis实现分布式锁，队列，会话缓存。")]),e._v(" "),v("h2",{attrs:{id:"去哪下"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#去哪下"}},[e._v("#")]),e._v(" 去哪下？")]),e._v(" "),v("p",[e._v("官网，也可以通过Linux  yum直接下载安装")]),e._v(" "),v("h2",{attrs:{id:"怎么玩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#怎么玩"}},[e._v("#")]),e._v(" 怎么玩？")]),e._v(" "),v("p",[e._v("1.安装")]),e._v(" "),v("p",[e._v("2.redis数据类型（api操作）")]),e._v(" "),v("p",[e._v("3.redis配置文件解析")]),e._v(" "),v("p",[e._v("4.redis的持久化")]),e._v(" "),v("p",[e._v("5.redis的事务")]),e._v(" "),v("p",[e._v("6.redis的发布订阅")]),e._v(" "),v("p",[e._v("7.java客户端操作（jedis）")]),e._v(" "),v("h3",{attrs:{id:"redis的安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis的安装"}},[e._v("#")]),e._v(" redis的安装")]),e._v(" "),v("p",[e._v("1.解压")]),e._v(" "),v("p",[e._v("2.make")]),e._v(" "),v("p",[e._v("如果make报错的话  大家就可以看一下是不是报没有gcc的错  如果是报没有gcc的错，那就要先安装一个gcc")]),e._v(" "),v("p",[e._v("yum install gcc-c++")]),e._v(" "),v("p",[e._v("安装好gcc之后执行一下make distclean 因为前面make的时候它执行了一些东西  要先把他清掉")]),e._v(" "),v("p",[e._v("3.make install")]),e._v(" "),v("p",[e._v("查看redis默认安装位置")]),e._v(" "),v("p",[e._v("/usr/local/bin")]),e._v(" "),v("h2",{attrs:{id:"redis设置外网访问"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis设置外网访问"}},[e._v("#")]),e._v(" redis设置外网访问")]),e._v(" "),v("div",{staticClass:"language-plain line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-plain"}},[v("code",[e._v("1.注释bind并且把protected-mode no\n 2.使用bind\n 3.设置密码\n protected-mode它启用的条件有两个，第一是没有使用bind，第二是没有设置访问密码。\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br")])]),v("h2",{attrs:{id:"redis数据类型及api操作-http-redisdoc-com"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis数据类型及api操作-http-redisdoc-com"}},[e._v("#")]),e._v(" redis数据类型及api操作(http://redisdoc.com/)")]),e._v(" "),v("h4",{attrs:{id:"key"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[e._v("#")]),e._v(" key")]),e._v(" "),v("p",[e._v("keys *")]),e._v(" "),v("p",[e._v("scan  0 match  *  count  1")]),e._v(" "),v("p",[e._v("exists key 判断某个key是否存在")]),e._v(" "),v("p",[e._v("move key db  当前库就没有了，到指定的库中去了")]),e._v(" "),v("p",[e._v("expire key  为给定的key设置过期时间")]),e._v(" "),v("p",[e._v("ttl key 查看还有多少时间过期  -1表示永不过期  -2表示已过期")]),e._v(" "),v("p",[e._v("type key  查看key是什么类型")]),e._v(" "),v("h4",{attrs:{id:"_1-string"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-string"}},[e._v("#")]),e._v(" 1.string")]),e._v(" "),v("p",[e._v("string是redis最基本的类型，你可以理解成与Memcached一模一样的类型，一个key对应一个value。")]),e._v(" "),v("p",[e._v("string类型是二进制安全的。意思是redis的string可以包含任何数据。比如jpg图片或者序列化的对象 。")]),e._v(" "),v("p",[e._v("string类型是Redis最基本的数据类型，一个redis中字符串value最多可以是512M")]),e._v(" "),v("p",[e._v("set  key  value  设置key  value")]),e._v(" "),v("p",[e._v("get  key   查看当前key的值")]),e._v(" "),v("p",[e._v("del  key  删除key")]),e._v(" "),v("p",[e._v("append key  value  如果key存在，则在指定的key末尾添加，如果key存在则类似set")]),e._v(" "),v("p",[e._v("strlen  key  返回此key的长度")]),e._v(" "),v("p",[e._v("以下几个命令只有在key值为数字的时候才能正常操作")]),e._v(" "),v("hr"),e._v(" "),v("p",[e._v("incr  key  为执定key的值加一")]),e._v(" "),v("p",[e._v("decr  key  为指定key的值减一")]),e._v(" "),v("p",[e._v("incrby key  数值   为指定key的值增加数值")]),e._v(" "),v("p",[e._v("decrby key  数值   为指定key的值减数值")]),e._v(" "),v("hr"),e._v(" "),v("p",[e._v("getrange  key  0(开始位置)  -1（结束位置）   获取指定区间范围内的值，类似between......and的关系 （0 -1）表示全部")]),e._v(" "),v("p",[e._v("setrange key 1（开始位置，从哪里开始设置） 具体值   设置（替换）指定区间范围内的值")]),e._v(" "),v("p",[e._v("setex 键 秒值 真实值   设置带过期时间的key，动态设置。")]),e._v(" "),v("p",[e._v("setnx  key  value     只有在 key 不存在时设置 key 的值。")]),e._v(" "),v("p",[e._v("mset  key1  value  key2  value    同时设置一个或多个 key-value 对。")]),e._v(" "),v("p",[e._v("mget  key1  key 2   获取所有(一个或多个)给定 key 的值。")]),e._v(" "),v("p",[e._v("msetnx  key1  value  key2  value  同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在。")]),e._v(" "),v("p",[e._v("getset  key   value  将给定 key 的值设为 value ，并返回 key 的旧值(old value)。")]),e._v(" "),v("h4",{attrs:{id:"_2-list"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-list"}},[e._v("#")]),e._v(" 2.list")]),e._v(" "),v("p",[e._v("它是一个字符串链表，left、right都可以插入添加；")]),e._v(" "),v("p",[e._v("如果键不存在，创建新的链表；")]),e._v(" "),v("p",[e._v("如果键已存在，新增内容；")]),e._v(" "),v("p",[e._v("如果值全移除，对应的键也就消失了。")]),e._v(" "),v("p",[e._v("链表的操作无论是头和尾效率都极高，但假如是对中间元素进行操作，效率就很惨淡了。")]),e._v(" "),v("p",[e._v("Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素导列表的头部（左边）或者尾部（右边）。")]),e._v(" "),v("p",[e._v("它的底层实际是个链表")]),e._v(" "),v("p",[e._v("lpush  key  value1  value2  将一个或多个值加入到列表头部")]),e._v(" "),v("p",[e._v("rpush  key  value1  value2 将一个或多个值加入到列表底部")]),e._v(" "),v("p",[e._v("lrange key  start  end  获取列表指定范围的元素  （0 -1）表示全部")]),e._v(" "),v("p",[e._v("lpop key 移出并获取列表第一个元素")]),e._v(" "),v("p",[e._v("rpop key  移出并获取列表最后一个元素")]),e._v(" "),v("p",[e._v("lindex key index  通过索引获取列表中的元素")]),e._v(" "),v("p",[e._v("llen 获取列表长度")]),e._v(" "),v("p",[e._v("lrem key  0（数量） 值，表示删除全部给定的值。零个就是全部值  从left往right删除指定数量个值等于指定值的元素，返回的值为实际删除的数量")]),e._v(" "),v("p",[e._v("ltrim key  start(从哪里开始截)  end（结束位置） 截取指定索引区间的元素，格式是ltrim list的key 起始索引 结束索引")]),e._v(" "),v("h4",{attrs:{id:"_3-set"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-set"}},[e._v("#")]),e._v(" 3.set")]),e._v(" "),v("p",[e._v("Redis的Set是string类型的无序，不能重复的集合。")]),e._v(" "),v("p",[e._v("sadd key value1 value 2 向集合中添加一个或多个成员")]),e._v(" "),v("p",[e._v("smembers  key  返回集合中所有成员")]),e._v(" "),v("p",[e._v("sismembers  key  member  判断member元素是否是集合key的成员")]),e._v(" "),v("p",[e._v("scard key  获取集合里面的元素个数")]),e._v(" "),v("p",[e._v("srem key value  删除集合中指定元素")]),e._v(" "),v("p",[e._v("srandmember key  数值   从set集合里面随机取出指定数值个元素  如果超过最大数量就全部取出，")]),e._v(" "),v("p",[e._v("spop key  随机移出并返回集合中某个元素")]),e._v(" "),v("p",[e._v("smove  key1  key2  value(key1中某个值)  作用是将key1中执定的值移除  加入到key2集合中")]),e._v(" "),v("p",[e._v("sdiff key1 key2  在第一个set里面而不在后面任何一个set里面的项(差集)")]),e._v(" "),v("p",[e._v("sinter key1 key2  在第一个set和第二个set中都有的 （交集）")]),e._v(" "),v("p",[e._v("sunion key1 key2  两个集合所有元素（并集）")]),e._v(" "),v("h4",{attrs:{id:"_4-hash"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-hash"}},[e._v("#")]),e._v(" 4.hash")]),e._v(" "),v("p",[e._v("Redis hash 是一个键值对集合。")]),e._v(" "),v("p",[e._v("Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。")]),e._v(" "),v("p",[e._v("kv模式不变，但v是一个键值对")]),e._v(" "),v("p",[e._v("类似Java里面的Map<String,Object>")]),e._v(" "),v("p",[e._v("hset  key  (key value)  向hash表中添加一个元素")]),e._v(" "),v("p",[e._v("hget key  key  向hash表中获取一个元素")]),e._v(" "),v("p",[e._v("hmset  key key1 value1 key2 value2 key3 value3 向集合中添加一个或多个元素")]),e._v(" "),v("p",[e._v("hmget key  key1 key2 key3  向集合中获取一个或多个元素")]),e._v(" "),v("p",[e._v("hgetall  key  获取在hash列表中指定key的所有字段和值")]),e._v(" "),v("p",[e._v("hdel  key  key1 key2 删除一个或多个hash字段")]),e._v(" "),v("p",[e._v("hlen key 获取hash表中字段数量")]),e._v(" "),v("p",[e._v("hexits key key  查看hash表中，指定key（字段）是否存在")]),e._v(" "),v("p",[e._v("hkeys  key 获取指定hash表中所有key（字段）")]),e._v(" "),v("p",[e._v("hvals key 获取指定hash表中所有value(值)")]),e._v(" "),v("p",[e._v("hincrdy key  key1  数量（整数）  执定hash表中某个字段加  数量  ，和incr一个意思")]),e._v(" "),v("p",[e._v("hincrdyfloat key key1  数量（浮点数，小数）  执定hash表中某个字段加  数量  ，和incr一个意思")]),e._v(" "),v("p",[e._v("hsetnx key key1 value1  与hset作用一样，区别是不存在赋值，存在了无效。")]),e._v(" "),v("h4",{attrs:{id:"_5-zset"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-zset"}},[e._v("#")]),e._v(" 5.zset")]),e._v(" "),v("p",[e._v("Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。")]),e._v(" "),v("p",[e._v("不同的是每个元素都会关联一个double类型的分数。")]),e._v(" "),v("p",[e._v("redis正是通过分数来为集合中的成员进行从小到大的排序。zset的成员是唯一的,但分数(score)却可以重复。")]),e._v(" "),v("p",[e._v("zadd  key  score 值  score 值  向集合中添加一个或多个成员")]),e._v(" "),v("p",[e._v("zrange key  0  -1  表示所有  返回指定集合中所有value")]),e._v(" "),v("p",[e._v("zrange key  0  -1  withscores  返回指定集合中所有value和score")]),e._v(" "),v("p",[e._v("zrangebyscore key 开始score 结束score   返回指定score间的值")]),e._v(" "),v("p",[e._v("zrem key score某个对应值（value），可以是多个值  删除元素")]),e._v(" "),v("p",[e._v("zcard key  获取集合中元素个数")]),e._v(" "),v("p",[e._v("zcount key  开始score 结束score    获取分数区间内元素个数")]),e._v(" "),v("p",[e._v("zrank key vlaue  获取value在zset中的下标位置(根据score排序)")]),e._v(" "),v("p",[e._v("zscore key value  按照值获得对应的分数")])])}),[],!1,null,null,null);v.default=a.exports}}]);