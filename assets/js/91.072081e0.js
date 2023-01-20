(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{505:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-索引的基本原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-索引的基本原理"}},[s._v("#")]),s._v(" "),n("strong",[s._v("1.索引的基本原理")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("索引用来快速地寻找那些具有特定值的记录。如果没有索引，一般来说执行查询时遍历整张表。\n索引的原理：就是把无序的数据变成有序的查询\n1. 把创建了索引的列的内容进行排序\n2. 对排序结果生成倒排表\n3. 在倒排表内容上拼上数据地址链\n4. 在查询的时候，先拿到倒排表内容，再取出数据地址链，从而拿到具体数据\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_2-mysql-聚簇和非聚簇索引的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql-聚簇和非聚簇索引的区别"}},[s._v("#")]),s._v(" "),n("strong",[s._v("2.mysql****聚簇和非聚簇索引的区别")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("都是B+树的数据结构\n聚簇索引：将数据存储与索引放到了一块、并且是按照一定的顺序组织的，找到索引也就找到了数\n据，数据的物理存放顺序与索引顺序是一致的，即：只要索引是相邻的，那么对应的数据一定也是\n相邻地存放在磁盘上的\n非聚簇索引：叶子节点不存储数据、存储的是数据行地址，也就是说根据索引查找到数据行的位置\n再取磁盘查找数据，这个就有点类似一本树的目录，比如我们要找第三章第一节，那我们先在这个\n目录里面找，找到对应的页码后再去对应的页码看文章\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"_3-mysql-索引的数据结构-各自优劣"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-mysql-索引的数据结构-各自优劣"}},[s._v("#")]),s._v(" "),n("strong",[s._v("3.mysql****索引的数据结构，各自优劣")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("索引的数据结构和具体存储引擎的实现有关，在MySQL中使用较多的索引有Hash索引，B+树索引等，\nInnoDB存储引擎的默认索引实现为：B+树索引。对于哈希索引来说，底层的数据结构就是哈希表，因\n此在绝大多数需求为单条记录查询的时候，可以选择哈希索引，查询性能最快；其余大部分场景，建议\n选择BTree索引。\nB+树：\n    B+树是一个平衡的多叉树，从根节点到每个叶子节点的高度差值不超过1，而且同层级的节点间有指针\n    相互链接。在B+树上的常规检索，从根节点到叶子节点的搜索效率基本相当，不会出现大幅波动，而且\n    基于索引的顺序扫描时，也可以利用双向指针快速左右移动，效率非常高。因此，B+树索引被广泛应用\n    于数据库、文件系统等场景\n哈希索引：\n    哈希索引就是采用一定的哈希算法，把键值换算成新的哈希值，检索时不需要类似B+树那样从根节点到\n    叶子节点逐级查找，只需一次哈希算法即可立刻定位到相应的位置，速度非常快\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_4-索引设计的原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-索引设计的原则"}},[s._v("#")]),s._v(" "),n("strong",[s._v("4.索引设计的原则？")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("查询更快、占用空间更小\n1. 适合索引的列是出现在where子句中的列，或者连接子句中指定的列\n2. 基数较小的表，索引效果较差，没有必要在此列建立索引\n3. 使用短索引，如果对长字符串列进行索引，应该指定一个前缀长度，这样能够节省大量索引空间，\n如果搜索词超过索引前缀长度，则使用索引排除不匹配的行，然后检查其余行是否可能匹配。\n4. 不要过度索引。索引需要额外的磁盘空间，并降低写操作的性能。在修改表内容的时候，索引会进\n行更新甚至重构，索引列越多，这个时间就会越长。所以只保持需要的索引有利于查询即可。\n5. 定义有外键的数据列一定要建立索引。\n6. 更新频繁字段不适合创建索引\n7. 若是不能有效区分数据的列不适合做索引列(如性别，男女未知，最多也就三种，区分度实在太低)\n8. 尽量的扩展索引，不要新建索引。比如表中已经有a的索引，现在要加(a,b)的索引，那么只需要修\n改原来的索引即可。\n9. 对于那些查询中很少涉及的列，重复值比较多的列不要建立索引。\n10. 对于定义为text、image和bit的数据类型的列不要建立索引。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"_5-锁的类型有哪些"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-锁的类型有哪些"}},[s._v("#")]),s._v(" "),n("strong",[s._v("5.锁的类型有哪些")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("基于锁的属性分类：共享锁、排他锁。\n基于锁的粒度分类：行级锁(INNODB)、表级锁(INNODB、MYISAM)、页级锁(BDB引擎 )、记录锁、间\n隙锁、临键锁。\n基于锁的状态分类：意向共享锁、意向排它锁\n共享锁(Share Lock)\n\t共享锁又称读锁，简称S锁；当一个事务为数据加上读锁之后，其他事务只能对该数据加读锁，而不能对\n    数据加写锁，直到所有的读锁释放之后其他事务才能对其进行加持写锁。共享锁的特性主要是为了支持\n    并发的读取数据，读取数据的时候不支持修改，避免出现重复读的问题。\n排他锁（eXclusive Lock）\n\t排他锁又称写锁，简称X锁；当一个事务为数据加上写锁时，其他请求将不能再为数据加任何锁，直到该\n    锁释放之后，其他事务才能对数据进行加锁。排他锁的目的是在数据修改时候，不允许其他人同时修\n    改，也不允许其他人读取。避免了出现脏数据和脏读的问题。\n表锁\n\t表锁是指上锁的时候锁住的是整个表，当下一个事务访问该表的时候，必须等前一个事务释放了锁才能\n    进行对表进行访问；\n    特点： 粒度大，加锁简单，容易冲突；\n行锁\n\t行锁是指上锁的时候锁住的是表的某一行或多行记录，其他事务访问同一张表时，只有被锁住的记录不\n    能访问，其他的记录可正常访问；\n    特点：粒度小，加锁比表锁麻烦，不容易冲突，相比表锁支持的并发要高；\n记录锁(Record Lock)\n\t记录锁也属于行锁中的一种，只不过记录锁的范围只是表中的某一条记录，记录锁是说事务在加锁后锁\n    住的只是表的某一条记录。\n    精准条件命中，并且命中的条件字段是唯一索引\n    加了记录锁之后数据可以避免数据在查询的时候被修改的重复读问题，也避免了在修改的事务未提交前\n    被其他事务读取的脏读问题。\n页锁\n\t页级锁是MySQL中锁定粒度介于行级锁和表级锁中间的一种锁。表级锁速度快，但冲突多，行级冲突\n    少，但速度慢。所以取了折衷的页级，一次锁定相邻的一组记录。\n    特点：开销和加锁时间界于表锁和行锁之间；会出现死锁；锁定粒度界于表锁和行锁之间，并发度一般\n间隙锁(Gap Lock)\n\t属于行锁中的一种，间隙锁是在事务加锁后其锁住的是表记录的某一个区间，当表的相邻ID之间出现空\n    隙则会形成一个区间，遵循左开右闭原则。\n    范围查询并且查询未命中记录，查询条件必须命中索引、间隙锁只会出现在REPEATABLE_READ（重复\n    读)的事务级别中。\n    触发条件：防止幻读问题，事务并发的时候，如果没有间隙锁，就会发生如下图的问题，在同一个事务\n    里，A事务的两次查询出的结果会不一样。\n    比如表里面的数据ID 为 1,4,5,7,10 ,那么会形成以下几个间隙区间，-n-1区间，1-4区间，7-10\n    区间，10-n区间 （-n代表负无穷大，n代表正无穷大）\n临建锁(Next-Key Lock)\n\t也属于行锁的一种，并且它是INNODB的行锁默认算法，总结来说它就是记录锁和间隙锁的组合，临键锁\n    会把查询出来的记录锁住，同时也会把该范围查询内的所有间隙空间也会锁住，再之它会把相邻的下一\n    个区间也会锁住\n    触发条件：范围查询并命中，查询命中了索引。\n    结合记录锁和间隙锁的特性，临键锁避免了在范围查询时出现脏读、重复读、幻读问题。加了临键锁之\n    后，在范围区间内数据不允许被修改和插\n    入。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("h2",{attrs:{id:"_6-innodb-存储引擎的锁的算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-innodb-存储引擎的锁的算法"}},[s._v("#")]),s._v(" "),n("strong",[s._v("6.InnoDB****存储引擎的锁的算法")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Record lock：单个行记录上的锁\nGap lock：间隙锁，锁定一个范围，不包括记录本身\nNext-key lock：record+gap 锁定一个范围，包含记录本身\n相关知识点：\n1. innodb对于行的查询使用next-key lock\n2. Next-locking keying为了解决Phantom Problem幻读问题\n3. 当查询的索引含有唯一属性时，将next-key lock降级为record key\n4. Gap锁设计的目的是为了阻止多个事务将记录插入到同一范围内，而这会导致幻读问题的产生\n5. 有两种方式显式关闭gap锁：（除了外键约束和唯一性检查外，其余情况仅使用record lock） A.\n将事务隔离级别设置为RC B. 将参数innodb_locks_unsafe_for_binlog设置为1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"_7-关心过业务系统里面的sql耗时吗-统计过慢查询吗-对慢查询都怎么优化过"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-关心过业务系统里面的sql耗时吗-统计过慢查询吗-对慢查询都怎么优化过"}},[s._v("#")]),s._v(" "),n("strong",[s._v("7.关心过业务系统里面的"),n("strong",[n("strong",[s._v("sql")])]),s._v("耗时吗？统计过慢查询吗？对慢查询都怎么优化过")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("在业务系统中，除了使用主键进行的查询，其他的都会在测试库上测试其耗时，慢查询的统计主要由运\n维在做，会定期将业务中的慢查询反馈给我们。\n慢查询的优化首先要搞明白慢的原因是什么？是查询条件没有命中索引？是load了不需要的数据列？还\n是数据量太大？\n所以优化也是针对这三个方向来的，\n首先分析语句，看看是否load了额外的数据，可能是查询了多余的行并且抛弃掉了，可能是加载\n了许多结果中并不需要的列，对语句进行分析以及重写。\n分析语句的执行计划，然后获得其使用索引的情况，之后修改语句或者修改索引，使得语句可以尽\n可能的命中索引。\n如果对语句的优化已经无法进行，可以考虑表中的数据量是否太大，如果是的话可以进行横向或者\n纵向的分表。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"_8-事务的基本特性和隔离级别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-事务的基本特性和隔离级别"}},[s._v("#")]),s._v(" "),n("strong",[s._v("8.事务的基本特性和隔离级别")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("事务基本特性ACID分别是：\n原子性指的是一个事务中的操作要么全部成功，要么全部失败。\n一致性指的是数据库总是从一个一致性的状态转换到另外一个一致性的状态。比如A转账给B100块钱，\n假设A只有90块，支付之前我们数据库里的数据都是符合约束的,但是如果事务执行成功了,我们的数据库\n数据就破坏约束了,因此事务不能成功,这里我们说事务提供了一致性的保证\n隔离性指的是一个事务的修改在最终提交前，对其他事务是不可见的。\n持久性指的是一旦事务提交，所做的修改就会永久保存到数据库中。\n隔离性有4个隔离级别，分别是：\nread uncommit 读未提交，可能会读到其他事务未提交的数据，也叫做脏读。\n用户本来应该读取到id=1的用户age应该是10，结果读取到了其他事务还没有提交的事务，结果读\n取结果age=20，这就是脏读。\nread commit 读已提交，两次读取结果不一致，叫做不可重复读。\n不可重复读解决了脏读的问题，他只会读取已经提交的事务。\n用户开启事务读取id=1用户，查询到age=10，再次读取发现结果=20，在同一个事务里同一个查\n询读取到不同的结果叫做不可重复读。\nrepeatable read 可重复复读，这是mysql的默认级别，就是每次读取结果都一样，但是有可能产\n生幻读。\nserializable 串行，一般是不会使用的，他会给每一行读取的数据加锁，会导致大量超时和锁竞争\n的问题。\n脏读(Drity Read)：某个事务已更新一份数据，另一个事务在此时读取了同一份数据，由于某些原因，\n前一个RollBack了操作，则后一个事务所读取的数据就会是不正确的。\n不可重复读(Non-repeatable read):在一个事务的两次查询之中数据不一致，这可能是两次查询过程中\n间插入了一个事务更新的原有的数据。\n幻读(Phantom Read):在一个事务的两次查询中数据笔数不一致，例如有一个事务查询了几列(Row)数\n据，而另一个事务却在此时插入了新的几列数据，先前的事务在接下来的查询中，就会发现有几列数据\n是它先前所没有的。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h2",{attrs:{id:"_9-acid-靠什么保证的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-acid-靠什么保证的"}},[s._v("#")]),s._v(" "),n("strong",[s._v("9.ACID****靠什么保证的？")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("A原子性由undo log日志保证，它记录了需要回滚的日志信息，事务回滚时撤销已经执行成功的sql\nC一致性由其他三大特性保证、程序代码要保证业务上的一致性\nI隔离性由MVCC来保证\nD持久性由内存+redo log来保证，mysql修改数据同时在内存和redo log记录这次操作，宕机的时候可\n以从redo log恢复\n\nInnoDB redo log 写盘，InnoDB 事务进入 prepare 状态。\n如果前面 prepare 成功，binlog 写盘，再继续将事务日志持久化到 binlog，如果持久化成功，那么\nInnoDB 事务则进入 commit 状态(在 redo log 里面写一个 commit 记录)\nredolog的刷盘会在系统空闲时进行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"_10-什么是-mvcc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-什么是-mvcc"}},[s._v("#")]),s._v(" "),n("strong",[s._v("10.什么是****MVCC")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("多版本并发控制：读取数据时通过一种类似快照的方式将数据保存下来，这样读锁就和写锁不冲突了，\n不同的事务session会看到自己特定版本的数据，版本链\nMVCC只在 READ COMMITTED 和 REPEATABLE READ 两个隔离级别下工作。其他两个隔离级别够和\nMVCC不兼容, 因为 READ UNCOMMITTED 总是读取最新的数据行, 而不是符合当前事务版本的数据\n行。而 SERIALIZABLE 则会对所有读取的行都加锁。\n聚簇索引记录中有两个必要的隐藏列：\ntrx_id：用来存储每次对某条聚簇索引记录进行修改的时候的事务id。\nroll_pointer：每次对哪条聚簇索引记录有修改的时候，都会把老版本写入undo日志中。这个\nroll_pointer就是存了一个指针，它指向这条聚簇索引记录的上一个版本的位置，通过它来获得上一个\n版本的记录信息。(注意插入操作的undo日志没有这个属性，因为它没有老版本)\n已提交读和可重复读的区别就在于它们生成ReadView的策略不同。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"_11-分表后非sharding-key的查询怎么处理-分表后的排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-分表后非sharding-key的查询怎么处理-分表后的排序"}},[s._v("#")]),s._v(" "),n("strong",[s._v("11.分表后非"),n("strong",[n("strong",[s._v("sharding_key")])]),s._v("的查询怎么处理，分表后的排序")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 可以做一个mapping表，比如这时候商家要查询订单列表怎么办呢？不带user_id查询的话你总不\n能扫全表吧？所以我们可以做一个映射关系表，保存商家和用户的关系，查询的时候先通过商家查\n询到用户列表，再通过user_id去查询。\n2. 宽表，对数据实时性要求不是很高的场景，比如查询订单列表，可以把订单表同步到离线（实时）\n数仓，再基于数仓去做成一张宽表，再基于其他如es提供查询服务。\n3. 数据量不是很大的话，比如后台的一些查询之类的，也可以通过多线程扫表，然后再聚合结果的方\n式来做。或者异步的形式也是可以的。\nunion\n排序字段是唯一索引：\n首先第一页的查询：将各表的结果集进行合并，然后再次排序\n第二页及以后的查询，需要传入上一页排序字段的最后一个值，及排序方式。\n根据排序方式，及这个值进行查询。如排序字段date，上一页最后值为3，排序方式降序。查询的\n时候sql为select ... from table where date < 3 order by date desc limit 0,10。这样再将几个表的\n结果合并排序即可。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"_12-mysql主从同步原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-mysql主从同步原理"}},[s._v("#")]),s._v(" 12.mysql主从同步原理**")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Mysql的主从复制中主要有三个线程： master（binlog dump thread）、slave（I/O thread 、SQL\nthread） ，Master一条线程和Slave中的两条线程。\n主节点 binlog，主从复制的基础是主库记录数据库的所有变更记录到 binlog。binlog 是数据库服\n务器启动的那一刻起，保存所有修改数据库结构或内容的一个文件。\n主节点 log dump 线程，当 binlog 有变动时，log dump 线程读取其内容并发送给从节点。\n从节点 I/O线程接收 binlog 内容，并将其写入到 relay log 文件中。\n从节点的SQL 线程读取 relay log 文件内容对数据更新进行重放，最终保证主从数据库的一致性。\n注：主从节点使用 binglog 文件 + position 偏移量来定位主从同步的位置，从节点会保存其已接收到的\n偏移量，如果从节点发生宕机重启，则会自动从 position 的位置发起同步。\n由于mysql默认的复制方式是异步的，主库把日志发送给从库后不关心从库是否已经处理，这样会产生\n一个问题就是假设主库挂了，从库处理失败了，这时候从库升为主库后，日志就丢失了。由此产生两个\n概念。\n全同步复制\n主库写入binlog后强制同步日志到从库，所有的从库都执行完成后才返回给客户端，但是很显然这个方\n式的话性能会受到严重影响。\n半同步复制\n和全同步不同的是，半同步复制的逻辑是这样，从库写入日志成功后返回ACK确认给主库，主库收到至\n少一个从库的确认就认为写操作完成。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"_13-简述myisam和innodb的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13-简述myisam和innodb的区别"}},[s._v("#")]),s._v(" "),n("strong",[s._v("13.简述"),n("strong",[n("strong",[s._v("MyISAM")])]),s._v("和"),n("strong",[n("strong",[s._v("InnoDB")])]),s._v("的区别")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("MyISAM：\n不支持事务，但是每次查询都是原子的；\n支持表级锁，即每次操作是对整个表加锁；\n存储表的总行数；\n一个MYISAM表有三个文件：索引文件、表结构文件、数据文件；\n采用非聚集索引，索引文件的数据域存储指向数据文件的指针。辅索引与主索引基本一致，但是辅索引\n不用保证唯一性。\nInnoDb：\n支持ACID的事务，支持事务的四种隔离级别；\n支持行级锁及外键约束：因此可以支持写并发；\n不存储总行数；\n一个InnoDb引擎存储在一个文件空间（共享表空间，表大小不受操作系统控制，一个表可能分布在多\n个文件里），也有可能为多个（设置为独立表空，表大小受操作系统文件大小限制，一般为2G），受操\n作系统文件大小的限制；\n主键索引采用聚集索引（索引的数据域存储数据文件本身），辅索引的数据域存储主键的值；因此从辅\n索引查找数据，需要先通过辅索引找到主键值，再访问辅索引；最好使用自增主键，防止插入数据时，\n为维持B+树结构，文件的大调整。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"_14-简述mysql中索引类型及对数据库的性能的影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-简述mysql中索引类型及对数据库的性能的影响"}},[s._v("#")]),s._v(" "),n("strong",[s._v("14.简述"),n("strong",[n("strong",[s._v("mysql")])]),s._v("中索引类型及对数据库的性能的影响")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("普通索引：允许被索引的数据列包含重复的值。\n唯一索引：可以保证数据记录的唯一性。\n主键：是一种特殊的唯一索引，在一张表中只能定义一个主键索引，主键用于唯一标识一条记录，使用\n关键字 PRIMARY KEY 来创建。\n联合索引：索引可以覆盖多个数据列，如像INDEX(columnA, columnB)索引。\n全文索引：通过建立 倒排索引 ,可以极大的提升检索效率,解决判断字段是否包含的问题，是目前搜索引\n擎使用的一种关键技术。可以通过ALTER TABLE table_name ADD FULLTEXT (column);创建全文索引\n索引可以极大的提高数据的查询速度。\n通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。\n但是会降低插入、删除、更新表的速度，因为在执行这些写操作时，还要操作索引文件\n索引需要占物理空间，除了数据表占数据空间之外，每一个索引还要占一定的物理空间，如果要建立聚\n簇索引，那么需要的空间就会更大，如果非聚集索引很多，一旦聚集索引改变，那么所有非聚集索引都\n会跟着变。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"_15-mysql-执行计划怎么看"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_15-mysql-执行计划怎么看"}},[s._v("#")]),s._v(" "),n("strong",[s._v("15.mysql****执行计划怎么看")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("执行计划就是sql的执行查询的顺序，以及如何使用索引查询，返回的结果集的行数\nEXPLAIN SELECT * from A where X=? and Y=?\n\n1。id ：是一个有顺序的编号，是查询的顺序号，有几个 select 就显示几行。id的顺序是按 select 出现\n的顺序增长的。id列的值越大执行优先级越高越先执行，id列的值相同则从上往下执行，id列的值为\nNULL最后执行。\n2。selectType 表示查询中每个select子句的类型\nSIMPLE： 表示此查询不包含 UNION 查询或子查询\nPRIMARY： 表示此查询是最外层的查询（包含子查询）\nSUBQUERY： 子查询中的第一个 SELECT\nUNION： 表示此查询是 UNION 的第二或随后的查询\nDEPENDENT UNION： UNION 中的第二个或后面的查询语句, 取决于外面的查询\nUNION RESULT, UNION 的结果\nDEPENDENT SUBQUERY: 子查询中的第一个 SELECT, 取决于外面的查询. 即子查询依赖于外层查\n询的结果.\nDERIVED：衍生，表示导出表的SELECT（FROM子句的子查询）\n3.table：表示该语句查询的表\n4.type：优化sql的重要字段，也是我们判断sql性能和优化程度重要指标。他的取值类型范围：\nconst：通过索引一次命中，匹配一行数据\nsystem: 表中只有一行记录，相当于系统表；\neq_ref：唯一性索引扫描，对于每个索引键，表中只有一条记录与之匹配\nref: 非唯一性索引扫描,返回匹配某个值的所有\nrange: 只检索给定范围的行，使用一个索引来选择行，一般用于between、<、>；\nindex: 只遍历索引树；\nALL: 表示全表扫描，这个类型的查询是性能最差的查询之一。 那么基本就是随着表的数量增多，\n执行效率越慢。\n执行效率：\nALL < index < range< ref < eq_ref < const < system。最好是避免ALL和index\n5.possible_keys：它表示Mysql在执行该sql语句的时候，可能用到的索引信息，仅仅是可能，实际不一\n定会用到。\n6.key：此字段是 mysql 在当前查询时所真正使用到的索引。 他是possible_keys的子集\n7.key_len：表示查询优化器使用了索引的字节数，这个字段可以评估组合索引是否完全被使用，这也是\n我们优化sql时，评估索引的重要指标\n9.rows：mysql 查询优化器根据统计信息，估算该sql返回结果集需要扫描读取的行数，这个值相关重\n要，索引优化之后，扫描读取的行数越多，说明索引设置不对，或者字段传入的类型之类的问题，说明\n要优化空间越大\n10.filtered：返回结果的行占需要读到的行(rows列的值)的百分比，就是百分比越高，说明需要查询到\n数据越准确， 百分比越小，说明查询到的数据量大，而结果集很少\n11.extra\nusing filesort ：表示 mysql 对结果集进行外部排序，不能通过索引顺序达到排序效果。一般有\nusing filesort都建议优化去掉，因为这样的查询 cpu 资源消耗大，延时大。\nusing index：覆盖索引扫描，表示查询在索引树中就可查找所需数据，不用扫描表数据文件，往\n往说明性能不错。\n图灵学院\nusing temporary：查询有使用临时表, 一般出现于排序， 分组和多表 join 的情况， 查询效率不\n高，建议优化。\nusing where ：sql使用了where过滤,效率较高。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);