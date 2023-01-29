(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{503:function(t,e,n){"use strict";n.r(e);var v=n(1),a=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),e("blockquote",[e("p",[t._v("ConcurrentHashMap 的实现原理是什么？ ★★★★★")])]),t._v(" "),e("p",[t._v("ConcurrentHashMap  在 JDK1.7 和 JDK1.8  的实现方式是不同的。")]),t._v(" "),e("p",[e("strong",[t._v("先来看下JDK1.7")])]),t._v(" "),e("p",[t._v("JDK1.7 中的 ConcurrentHashMap 是由 "),e("code",[t._v("Segment")]),t._v(" 数组结构和 "),e("code",[t._v("HashEntry")]),t._v(" 数组结构组成，即 ConcurrentHashMap 把哈希桶数组切分成小数组（Segment ），每个小数组有 n 个 HashEntry 组成。")]),t._v(" "),e("p",[t._v("如下图所示，首先将数据分为一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一段数据时，其他段的数据也能被其他线程访问，实现了真正的并发访问。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-jdk1.7.png",alt:""}})]),t._v(" "),e("p",[t._v("Segment 是 ConcurrentHashMap 的一个内部类，主要的组成如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code1.png",alt:""}})]),t._v(" "),e("p",[t._v("Segment 继承了 ReentrantLock，所以 Segment 是一种可重入锁，扮演锁的角色。Segment 默认为 16，也就是并发度为 16。")]),t._v(" "),e("p",[t._v("存放元素的 HashEntry，也是一个静态内部类，主要的组成如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code13.png",alt:""}})]),t._v(" "),e("p",[t._v("其中，用 volatile 修饰了 HashEntry 的数据 value 和 下一个节点 next，保证了多线程环境下数据获取时的"),e("strong",[t._v("可见性")]),t._v("！")]),t._v(" "),e("p",[e("strong",[t._v("再来看下JDK1.8")])]),t._v(" "),e("p",[t._v("在数据结构上， JDK1.8  中的ConcurrentHashMap  选择了与 HashMap 相同的"),e("strong",[t._v("Node数组+链表+红黑树")]),t._v("结构；在锁的实现上，抛弃了原有的 Segment 分段锁，采用"),e("code",[t._v("CAS + synchronized")]),t._v("实现更加细粒度的锁。")]),t._v(" "),e("p",[t._v("将锁的级别控制在了更细粒度的哈希桶数组元素级别，也就是说只需要锁住这个链表头节点（红黑树的根节点），就不会影响其他的哈希桶数组元素的读写，大大提高了并发度。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-jdk1.8-2png.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("JDK1.8  中为什么使用内置锁 synchronized替换 可重入锁 ReentrantLock？★★★★★")])]),t._v(" "),e("ul",[e("li",[t._v("在 JDK1.6 中，对 synchronized 锁的实现引入了大量的优化，并且 synchronized 有多种锁状态，会从无锁 -> 偏向锁 -> 轻量级锁 -> 重量级锁一步步转换。")]),t._v(" "),e("li",[t._v("减少内存开销 。假设使用可重入锁来获得同步支持，那么每个节点都需要通过继承 AQS 来获得同步支持。但并不是每个节点都需要获得同步支持的，只有链表的头节点（红黑树的根节点）需要同步，这无疑带来了巨大内存浪费。")])]),t._v(" "),e("h2",{attrs:{id:"存取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存取"}},[t._v("#")]),t._v(" 存取")]),t._v(" "),e("blockquote",[e("p",[t._v("ConcurrentHashMap  的 put 方法执行逻辑是什么？★★★★")])]),t._v(" "),e("p",[e("strong",[t._v("先来看JDK1.7")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code10.png",alt:""}})]),t._v(" "),e("p",[t._v("先定位到相应的 Segment ，然后再进行 put 操作。")]),t._v(" "),e("p",[t._v("源代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code11.png",alt:""}})]),t._v(" "),e("p",[t._v("首先会尝试获取锁，如果获取失败肯定就有其他线程存在竞争，则利用 "),e("code",[t._v("scanAndLockForPut()")]),t._v(" 自旋获取锁。")]),t._v(" "),e("ol",[e("li",[t._v("尝试自旋获取锁。")]),t._v(" "),e("li",[t._v("如果重试的次数达到了 "),e("code",[t._v("MAX_SCAN_RETRIES")]),t._v(" 则改为阻塞锁获取，保证能获取成功。")])]),t._v(" "),e("p",[e("strong",[t._v("再来看JDK1.8")])]),t._v(" "),e("p",[t._v("大致可以分为以下步骤：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("根据 key 计算出 hash 值；")])]),t._v(" "),e("li",[e("p",[t._v("判断是否需要进行初始化；")])]),t._v(" "),e("li",[e("p",[t._v("定位到 Node，拿到首节点 f，判断首节点 f：")]),t._v(" "),e("ul",[e("li",[t._v("如果为  null  ，则通过 CAS 的方式尝试添加；")]),t._v(" "),e("li",[t._v("如果为 "),e("code",[t._v("f.hash = MOVED = -1")]),t._v(" ，说明其他线程在扩容，参与一起扩容；")]),t._v(" "),e("li",[t._v("如果都不满足 ，synchronized 锁住 f 节点，判断是链表还是红黑树，遍历插入；")])])]),t._v(" "),e("li",[e("p",[t._v("当在链表长度达到 8 的时候，数组扩容或者将链表转换为红黑树。")])])]),t._v(" "),e("p",[t._v("源代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code12.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("ConcurrentHashMap  的 get 方法执行逻辑是什么？★★★★")])]),t._v(" "),e("p",[t._v("同样，"),e("strong",[t._v("先来看JDK1.7")])]),t._v(" "),e("p",[t._v("首先，根据 key 计算出 hash 值定位到具体的 Segment ，再根据 hash 值获取定位 HashEntry 对象，并对 HashEntry 对象进行链表遍历，找到对应元素。")]),t._v(" "),e("p",[t._v("由于 HashEntry 涉及到的共享变量都使用 volatile 修饰，volatile 可以保证内存可见性，所以每次获取时都是最新值。")]),t._v(" "),e("p",[t._v("源代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code5.png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("再来看JDK1.8")])]),t._v(" "),e("p",[t._v("大致可以分为以下步骤：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("根据 key 计算出 hash 值，判断数组是否为空；")])]),t._v(" "),e("li",[e("p",[t._v("如果是首节点，就直接返回；")])]),t._v(" "),e("li",[e("p",[t._v("如果是红黑树结构，就从红黑树里面查询；")])]),t._v(" "),e("li",[e("p",[t._v("如果是链表结构，循环遍历判断。")])])]),t._v(" "),e("p",[t._v("源代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code6.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("ConcurrentHashMap 的 get 方法是否要加锁，为什么？★★★")])]),t._v(" "),e("p",[t._v("get 方法不需要加锁。因为 Node 的元素 value 和指针 next 是用 volatile 修饰的，在多线程环境下线程A修改节点的 value 或者新增节点的时候是对线程B可见的。")]),t._v(" "),e("p",[t._v("这也是它比其他并发集合比如 Hashtable、用 Collections.synchronizedMap()包装的 HashMap 效率高的原因之一。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code7.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("get 方法不需要加锁与 volatile 修饰的哈希桶数组有关吗？★★★")])]),t._v(" "),e("p",[t._v("没有关系。哈希桶数组"),e("code",[t._v("table")]),t._v("用 volatile 修饰主要是保证在数组扩容的时候保证可见性。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code9.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("blockquote",[e("p",[t._v("ConcurrentHashMap  不支持 key 或者 value 为  null  的原因？★★★")])]),t._v(" "),e("p",[t._v("我们先来说value 为什么不能为 null。因为 ConcurrentHashMap 是用于多线程的 ，如果"),e("code",[t._v("ConcurrentHashMap.get(key)")]),t._v("得到了 null ，这就无法判断，是映射的value是 null ，还是没有找到对应的key而为 null ，就有了二义性。")]),t._v(" "),e("p",[t._v("而用于单线程状态的 HashMap 却可以用"),e("code",[t._v("containsKey(key)")]),t._v(" 去判断到底是否包含了这个 null 。")]),t._v(" "),e("p",[t._v("我们用"),e("strong",[t._v("反证法")]),t._v("来推理：")]),t._v(" "),e("p",[t._v("假设 ConcurrentHashMap 允许存放值为 null 的 value，这时有A、B两个线程，线程A调用"),e("code",[t._v("ConcurrentHashMap.get(key)")]),t._v("方法，返回为 null ，我们不知道这个 null 是没有映射的 null ，还是存的值就是 null 。")]),t._v(" "),e("p",[t._v("假设此时，返回为 null 的真实情况是没有找到对应的 key。那么，我们可以用 "),e("code",[t._v("ConcurrentHashMap.containsKey(key)")]),t._v("来验证我们的假设是否成立，我们期望的结果是返回 false 。")]),t._v(" "),e("p",[t._v("但是在我们调用 "),e("code",[t._v("ConcurrentHashMap.get(key)")]),t._v("方法之后，"),e("code",[t._v("containsKey")]),t._v("方法之前，线程B执行了"),e("code",[t._v("ConcurrentHashMap.put(key, null)")]),t._v("的操作。那么我们调用"),e("code",[t._v("containsKey")]),t._v("方法返回的就是 true 了，这就与我们的假设的真实情况不符合了，这就有了二义性。")]),t._v(" "),e("p",[t._v("至于 ConcurrentHashMap 中的 key 为什么也不能为 null 的问题，源码就是这样写的，哈哈。如果面试官不满意，就回答因为作者Doug不喜欢 null ，所以在设计之初就不允许了 null 的 key 存在。想要深入了解的小伙伴，可以看这篇文章"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzIxNTQ4MzE1NA==&mid=2247484354&idx=1&sn=80c92881b47a586eba9c633eb78d36f6&chksm=9796d5bfa0e15ca9713ff9dc6e100593e0ef06ed7ea2f60cb984e492c4ed438d2405fbb2c4ff&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("这道面试题我真不知道面试官想要的回答是什么"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("ConcurrentHashMap 的并发度是什么？★★")])]),t._v(" "),e("p",[t._v("并发度可以理解为程序运行时能够同时更新 ConccurentHashMap且不产生锁竞争的最大线程数。在JDK1.7中，实际上就是ConcurrentHashMap中的分段锁个数，即Segment[]的数组长度，默认是16，这个值可以在构造函数中设置。")]),t._v(" "),e("p",[t._v("如果自己设置了并发度，ConcurrentHashMap 会使用大于等于该值的最小的2的幂指数作为实际并发度，也就是比如你设置的值是17，那么实际并发度是32。")]),t._v(" "),e("p",[t._v("如果并发度设置的过小，会带来严重的锁竞争问题；如果并发度设置的过大，原本位于同一个Segment内的访问会扩散到不同的Segment中，CPU cache命中率会下降，从而引起程序性能下降。")]),t._v(" "),e("p",[t._v("在JDK1.8中，已经摒弃了Segment的概念，选择了Node数组+链表+红黑树结构，并发度大小依赖于数组的大小。")]),t._v(" "),e("blockquote",[e("p",[t._v("ConcurrentHashMap 迭代器是强一致性还是弱一致性？★★")])]),t._v(" "),e("p",[t._v("与 HashMap 迭代器是强一致性不同，ConcurrentHashMap 迭代器是弱一致性。")]),t._v(" "),e("p",[t._v("ConcurrentHashMap 的迭代器创建后，就会按照哈希表结构遍历每个元素，但在遍历过程中，内部元素可能会发生变化，如果变化发生在已遍历过的部分，迭代器就不会反映出来，而如果变化发生在未遍历过的部分，迭代器就会发现并反映出来，这就是弱一致性。")]),t._v(" "),e("p",[t._v("这样迭代器线程可以使用原来老的数据，而写线程也可以并发的完成改变，更重要的，这保证了多个线程并发执行的连续性和扩展性，是性能提升的关键。想要深入了解的小伙伴，可以看这篇文章：http://ifeve.com/ConcurrentHashMap-weakly-consistent/")]),t._v(" "),e("blockquote",[e("h4",{attrs:{id:"jdk1-7-与-jdk1-8-中concurrenthashmap-的区别-★★★★★"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-7-与-jdk1-8-中concurrenthashmap-的区别-★★★★★"}},[t._v("#")]),t._v(" JDK1.7 与 JDK1.8 中ConcurrentHashMap 的区别？★★★★★")])]),t._v(" "),e("ul",[e("li",[t._v("数据结构：取消了 Segment 分段锁的数据结构，取而代之的是数组+链表+红黑树的结构。")]),t._v(" "),e("li",[t._v("保证线程安全机制：JDK1.7 采用 Segment 的分段锁机制实现线程安全，其中 Segment 继承自 ReentrantLock 。JDK1.8 采用"),e("code",[t._v("CAS+synchronized")]),t._v("保证线程安全。")]),t._v(" "),e("li",[t._v("锁的粒度：JDK1.7 是对需要进行数据操作的 Segment 加锁，JDK1.8 调整为对每个数组元素加锁（Node）。")]),t._v(" "),e("li",[t._v("链表转化为红黑树：定位节点的 hash 算法简化会带来弊端，hash 冲突加剧，因此在链表节点数量大于 8（且数据总量大于等于 64）时，会将链表转化为红黑树进行存储。")]),t._v(" "),e("li",[t._v("查询时间复杂度：从 JDK1.7的遍历链表O(n)， JDK1.8 变成遍历红黑树O(logN)。")])]),t._v(" "),e("blockquote",[e("p",[t._v("ConcurrentHashMap 和 Hashtable 的效率哪个更高？为什么？★★★★★")])]),t._v(" "),e("p",[t._v("ConcurrentHashMap 的效率要高于 Hashtable，因为 Hashtable 给整个哈希表加了一把大锁从而实现线程安全。而ConcurrentHashMap 的锁粒度更低，在 JDK1.7 中采用分段锁实现线程安全，在 JDK1.8 中采用"),e("code",[t._v("CAS+synchronized")]),t._v("实现线程安全。")]),t._v(" "),e("blockquote",[e("p",[t._v("具体说一下Hashtable的锁机制 ★★★★★")])]),t._v(" "),e("p",[t._v("Hashtable 是使用 synchronized来实现线程安全的，给整个哈希表加了一把大锁，多线程访问时候，只要有一个线程访问或操作该对象，那其他线程只能阻塞等待需要的锁被释放，在竞争激烈的多线程场景中性能就会非常差！")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-hashtable.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("多线程下安全的操作 map还有其他方法吗？★★★")])]),t._v(" "),e("p",[t._v("还可以使用"),e("code",[t._v("Collections.synchronizedMap")]),t._v("方法，对方法进行加同步锁。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://blog-img.coolsen.cn/img/ConcurrentHashMap-code8.png",alt:""}})]),t._v(" "),e("p",[t._v("如果传入的是 HashMap 对象，其实也是对 HashMap 做的方法做了一层包装，里面使用对象锁来保证多线程场景下，线程安全，本质也是对 HashMap 进行全表锁。"),e("strong",[t._v("在竞争激烈的多线程环境下性能依然也非常差，不推荐使用！")])]),t._v(" "),e("h2",{attrs:{id:"最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),e("p",[t._v("本篇的 ConcurrentHashMap 就到这里了，"),e("strong",[t._v("觉得不错的话，不要忘记点个赞~")])]),t._v(" "),e("p",[t._v("小伙伴们想看什么类型的文章，欢迎留言或私信~")]),t._v(" "),e("h2",{attrs:{id:"巨人的肩膀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#巨人的肩膀"}},[t._v("#")]),t._v(" 巨人的肩膀")]),t._v(" "),e("p",[t._v("https://www.cnblogs.com/keeya/p/9632958.html")]),t._v(" "),e("p",[t._v("http://www.justdojava.com/2019/12/18/java-collection-15.1/")])])}),[],!1,null,null,null);e.default=a.exports}}]);