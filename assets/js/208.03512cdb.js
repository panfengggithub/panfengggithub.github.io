(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{622:function(v,_,e){"use strict";e.r(_);var p=e(1),a=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"hashmap与concurrenthashmap面试要点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashmap与concurrenthashmap面试要点"}},[v._v("#")]),v._v(" HashMap与ConcurrentHashMap面试要点")]),v._v(" "),_("p",[v._v("HashMap")]),v._v(" "),_("p",[v._v("HashMap底层数据结构")]),v._v(" "),_("p",[v._v("JDK7：数组+链表")]),v._v(" "),_("p",[v._v("JDK8: 数组+链表+红黑树（看过源码的同学应该知道JDK8中即使用了单向链表，也使用了双向链表，双向链表主要是为了链表操作方便，应该在插入，扩容，链表转红黑树，红黑树转链表的过程中都要操作链表）")]),v._v(" "),_("p",[v._v("JDK8中的HashMap为什么要使用红黑树？")]),v._v(" "),_("p",[v._v("当元素个数小于一个阈值时，链表整体的插入查询效率要高于红黑树，当元素个数大于此阈值时，链表整体的插入查询效率要低于红黑树。此阈值在HashMap中为8")]),v._v(" "),_("p",[v._v("JDK8中的HashMap什么时候将链表转化为红黑树？")]),v._v(" "),_("p",[v._v("这个题很容易答错，大部分答案就是：当链表中的元素个数大于8时就会把链表转化为红黑树。但是其实还有另外一个限制：当发现链表中的元素个数大于8之后，还会判断一下当前数组的长度，如果数组长度小于64时，此时并不会转化为红黑树，而是进行扩容。只有当链表中的元素个数大于8，并且数组的长度大于等于64时才会将链表转为红黑树。")]),v._v(" "),_("p",[v._v("上面扩容的原因是，如果数组长度还比较小，就先利用扩容来缩小链表的长度。")]),v._v(" "),_("p",[v._v("JDK8中HashMap的put方法的实现过程？")]),v._v(" "),_("p",[v._v("1根据key生成hashcode")]),v._v(" "),_("p",[v._v("2判断当前HashMap对象中的数组是否为空，如果为空则初始化该数组")]),v._v(" "),_("p",[v._v("3根据逻辑与运算，算出hashcode基于当前数组对应的数组下标i")]),v._v(" "),_("p",[v._v("4判断数组的第i个位置的元素（tab[i]）是否为空")]),v._v(" "),_("p",[v._v("a如果为空，则将key，value封装为Node对象赋值给tab[i]")]),v._v(" "),_("p",[v._v("b如果不为空：")]),v._v(" "),_("p",[v._v("ⅰ如果put方法传入进来的key等于tab[i].key，那么证明存在相同的key")]),v._v(" "),_("p",[v._v("ⅱ如果不等于tab[i].key，则：")]),v._v(" "),_("p",[v._v("1如果tab[i]的类型是TreeNode，则表示数组的第i位置上是一颗红黑树，那么将key和value插入到红黑树中，并且在插入之前会判断在红黑树中是否存在相同的key")]),v._v(" "),_("p",[v._v("2如果tab[i]的类型不是TreeNode，则表示数组的第i位置上是一个链表，那么遍历链表寻找是否存在相同的key，并且在遍历的过程中会对链表中的结点数进行计数，当遍历到最后一个结点时，会将key,value封装为Node插入到链表的尾部，同时判断在插入新结点之前的链表结点个数是不是大于等于8，如果是，则将链表改为红黑树。")]),v._v(" "),_("p",[v._v("ⅲ如果上述步骤中发现存在相同的key，则根据onlyIfAbsent标记来判断是否需要更新value值，然后返回oldValue")]),v._v(" "),_("p",[v._v("5modCount++")]),v._v(" "),_("p",[v._v("6HashMap的元素个数size加1")]),v._v(" "),_("p",[v._v("7如果size大于扩容的阈值，则进行扩容")]),v._v(" "),_("p",[v._v("JDK8中HashMap的get方法的实现过程")]),v._v(" "),_("p",[v._v("1根据key生成hashcode")]),v._v(" "),_("p",[v._v("2如果数组为空，则直接返回空")]),v._v(" "),_("p",[v._v("3如果数组不为空，则利用hashcode和数组长度通过逻辑与操作算出key所对应的数组下标i")]),v._v(" "),_("p",[v._v("4如果数组的第i个位置上没有元素，则直接返回空")]),v._v(" "),_("p",[v._v("5如果数组的第1个位上的元素的key等于get方法所传进来的key，则返回该元素，并获取该元素的value")]),v._v(" "),_("p",[v._v("6如果不等于则判断该元素还有没有下一个元素，如果没有，返回空")]),v._v(" "),_("p",[v._v("7如果有则判断该元素的类型是链表结点还是红黑树结点")]),v._v(" "),_("p",[v._v("a如果是链表则遍历链表")]),v._v(" "),_("p",[v._v("b如果是红黑树则遍历红黑树")]),v._v(" "),_("p",[v._v("8找到即返回元素，没找到的则返回空")]),v._v(" "),_("p",[v._v("JDK7与JDK8中HashMap的不同点")]),v._v(" "),_("p",[v._v("1JDK8中使用了红黑树")]),v._v(" "),_("p",[v._v("2JDK7中链表的插入使用的头插法（扩容转移元素的时候也是使用的头插法，头插法速度更快，无需遍历链表，但是在多线程扩容的情况下使用头插法会出现循环链表的问题，导致CPU飙升），JDK8中链表使用的尾插法（JDK8中反正要去计算链表当前结点的个数，反正要遍历的链表的，所以直接使用尾插法）")]),v._v(" "),_("p",[v._v("3JDK7的Hash算法比JDK8中的更复杂，Hash算法越复杂，生成的hashcode则更散列，那么hashmap中的元素则更散列，更散列则hashmap的查询性能更好，JDK7中没有红黑树，所以只能优化Hash算法使得元素更散列，而JDK8中增加了红黑树，查询性能得到了保障，所以可以简化一下Hash算法，毕竟Hash算法越复杂就越消耗CPU")]),v._v(" "),_("p",[v._v("4扩容的过程中JDK7中有可能会重新对key进行哈希（重新Hash跟哈希种子有关系），而JDK8中没有这部分逻辑")]),v._v(" "),_("p",[v._v("5JDK8中扩容的条件和JDK7中不一样，除开判断size是否大于阈值之外，JDK7中还判断了tab[i]是否为空，不为空的时候才会进行扩容，而JDK8中则没有该条件了")]),v._v(" "),_("p",[v._v("6JDK8中还多了一个API：putIfAbsent(key,value)")]),v._v(" "),_("p",[v._v("7JDK7和JDK8扩容过程中转移元素的逻辑不一样，JDK7是每次转移一个元素，JDK8是先算出来当前位置上哪些元素在新数组的低位上，哪些在新数组的高位上，然后在一次性转移")]),v._v(" "),_("p",[v._v("ConcurrentHashMap")]),v._v(" "),_("p",[v._v("JDK7中的ConcurrentHashMap是怎么保证并发安全的？")]),v._v(" "),_("p",[v._v("主要利用Unsafe操作+ReentrantLock+分段思想。")]),v._v(" "),_("p",[v._v("主要使用了Unsafe操作中的：")]),v._v(" "),_("p",[v._v("1compareAndSwapObject：通过cas的方式修改对象的属性")]),v._v(" "),_("p",[v._v("2putOrderedObject：并发安全的给数组的某个位置赋值")]),v._v(" "),_("p",[v._v("3getObjectVolatile：并发安全的获取数组某个位置的元素")]),v._v(" "),_("p",[v._v("分段思想是为了提高ConcurrentHashMap的并发量，分段数越高则支持的最大并发量越高，程序员可以通过concurrencyLevel参数来指定并发量。ConcurrentHashMap的内部类Segment就是用来表示某一个段的。")]),v._v(" "),_("p",[v._v("每个Segment就是一个小型的HashMap的，当调用ConcurrentHashMap的put方法是，最终会调用到Segment的put方法，而Segment类继承了ReentrantLock，所以Segment自带可重入锁，当调用到Segment的put方法时，会先利用可重入锁加锁，加锁成功后再将待插入的key,value插入到小型HashMap中，插入完成后解锁。")]),v._v(" "),_("p",[v._v("JDK7中的ConcurrentHashMap的底层原理")]),v._v(" "),_("p",[v._v("ConcurrentHashMap底层是由两层嵌套数组来实现的：")]),v._v(" "),_("p",[v._v("1ConcurrentHashMap对象中有一个属性segments，类型为Segment[];")]),v._v(" "),_("p",[v._v("2Segment对象中有一个属性table，类型为HashEntry[];")]),v._v(" "),_("p",[v._v("当调用ConcurrentHashMap的put方法时，先根据key计算出对应的Segment[]的数组下标j，确定好当前key,value应该插入到哪个Segment对象中，如果segments[j]为空，则利用自旋锁的方式在j位置生成一个Segment对象。")]),v._v(" "),_("p",[v._v("然后调用Segment对象的put方法。")]),v._v(" "),_("p",[v._v("Segment对象的put方法会先加锁，然后也根据key计算出对应的HashEntry[]的数组下标i，然后将key,value封装为HashEntry对象放入该位置，此过程和JDK7的HashMap的put方法一样，然后解锁。")]),v._v(" "),_("p",[v._v("在加锁的过程中逻辑比较复杂，先通过自旋加锁，如果超过一定次数就会直接阻塞等等加锁。（具体流程请求看vip视频.）")]),v._v(" "),_("p",[v._v("JDK8中的ConcurrentHashMap是怎么保证并发安全的？")]),v._v(" "),_("p",[v._v("主要利用Unsafe操作+synchronized关键字。")]),v._v(" "),_("p",[v._v("Unsafe操作的使用仍然和JDK7中的类似，主要负责并发安全的修改对象的属性或数组某个位置的值。")]),v._v(" "),_("p",[v._v("synchronized主要负责在需要操作某个位置时进行加锁（该位置不为空），比如向某个位置的链表进行插入结点，向某个位置的红黑树插入结点。")]),v._v(" "),_("p",[v._v("JDK8中其实仍然有分段锁的思想，只不过JDK7中段数是可以控制的，而JDK8中是数组的每一个位置都有一把锁。")]),v._v(" "),_("p",[v._v("当向ConcurrentHashMap中put一个key,value时，")]),v._v(" "),_("p",[v._v("1首先根据key计算对应的数组下标i，如果该位置没有元素，则通过自旋的方法去向该位置赋值。")]),v._v(" "),_("p",[v._v("2如果该位置有元素，则synchronized会加锁")]),v._v(" "),_("p",[v._v("3加锁成功之后，在判断该元素的类型")]),v._v(" "),_("p",[v._v("a如果是链表节点则进行添加节点到链表中")]),v._v(" "),_("p",[v._v("b如果是红黑树则添加节点到红黑树")]),v._v(" "),_("p",[v._v("4添加成功后，判断是否需要进行树化")]),v._v(" "),_("p",[v._v("5addCount，这个方法的意思是ConcurrentHashMap的元素个数加1，但是这个操作也是需要并发安全的，并且元素个数加1成功后，会继续判断是否要进行扩容，如果需要，则会进行扩容，所以这个方法很重要。")]),v._v(" "),_("p",[v._v("6同时一个线程在put时如果发现当前ConcurrentHashMap正在进行扩容则会去帮助扩容。")]),v._v(" "),_("p",[v._v("扩容流程源码解析请看vip视频讲解。")]),v._v(" "),_("p",[v._v("JDK7和JDK8中的ConcurrentHashMap的不同点")]),v._v(" "),_("p",[v._v("这两个的不同点太多了...，既包括了HashMap中的不同点，也有其他不同点，比如：")]),v._v(" "),_("p",[v._v("1JDK8中没有分段锁了，而是使用synchronized来进行控制")]),v._v(" "),_("p",[v._v("2JDK8中的扩容性能更高，支持多线程同时扩容，实际上JDK7中也支持多线程扩容，因为JDK7中的扩容是针对每个Segment的，所以也可能多线程扩容，但是性能没有JDK8高，因为JDK8中对于任意一个线程都可以去帮助扩容")]),v._v(" "),_("p",[v._v("3JDK8中的元素个数统计的实现也不一样了，JDK8中增加了CounterCell来帮助计数，而JDK7中没有，JDK7中是put的时候每个Segment内部计数，统计的时候是遍历每个Segment对象加锁统计")])])}),[],!1,null,null,null);_.default=a.exports}}]);