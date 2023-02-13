(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{533:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-和equals比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-和equals比较"}},[s._v("#")]),s._v(" 1.==和equals比较")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("==对比的是栈中的值，对于基本数据类型，比较的是变量值，对于引用数据类型，比较的是堆中内存对象的地址。\nequals:Object中默认也是采用==比较，但通常会重写equals方法。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-arraylist和linkedlist区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-arraylist和linkedlist区别"}},[s._v("#")]),s._v(" 2.ArrayList和LinkedList区别")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("ArrayList:基于动态数组，连续内存存储，适合下标访问（随机访问），扩容机制：因为数组长度固定，超出长度存数据时需要新建数组，然后将老数组数据拷贝到新数组。如果不是尾部插入数据还会涉及到元素的移动（往后复制一份，插入新元素），使用尾插法指定初始容量可以极大提升性能，甚至超过LinkedList(需要创建大量的node对象)\n\nLinkedList:基于链表，可以存储在分散的内存中，适合做数据的插入及删除的操作，不适合查询，需要逐一遍历，遍历LinkedList必须使用iterator,不能使用for循环，因为for循环遍历通过get（i）获取某个元素时都需要对list重新进行遍历，性能消耗极大。另外不要使用indexOf返回元素索引，当结果为空时会遍历整个列表。\n\n两者都实现了List接口，但是LinkedList还实现了Deque接口，所以LinkedList还可以当做队列来使用。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_3-concurrenthashmap的扩容机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-concurrenthashmap的扩容机制"}},[s._v("#")]),s._v(" 3.ConcurrentHashMap的扩容机制")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1.7版本：\n\t1.基于Segment分段实现的\n\t2.每个Segment相当于一个HashMap\n\t3.每个Segment内部会进行扩容，和HashMap的扩容机制类似\n\t4.先生成新的数组，然后转移元素到新数组中\n\t5.扩容的判断是每个Segment单独进行判断是否超过阈值\n1.8版本\n\t1.不基于Segment\n\t2.当某个线程进行put时，如果发现ConcurrentHashMap正在进行扩容，那么这个线程也跟着一起扩容\n\t3.如果某个线程put时，发现没有正在进行扩容，会将key-value添加到ConcurrentHashMap中，然后判断是否超过阈值，超过则进行扩容。\n\t4.ConcurrentHashMap是支持多个线程同时扩容的\n\t5.扩容之前也先生成一个新的数组\n\t6.在转移元素时，先将原数组分组，将每组分给不同的线程来进行元素的转移，每个线程负责一组或多组的元素转移工作\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"_4-concurrenthashmap原理-jdk7和jdk8版本的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-concurrenthashmap原理-jdk7和jdk8版本的区别"}},[s._v("#")]),s._v(" 4.ConcurrentHashMap原理，jdk7和jdk8版本的区别")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1.7版本：\n\t1.数据结构：ReentrantLock+Segment+HashEntry数组，每个HashEntry又是一个链表结构\n\t2.元素查询：二次hash，第一次定位到Segment，第二次Hash定位到元素所在链表的头部\n\t3.锁：Segment分段锁，Segment继承了ReentrantLock，锁定操作的Segment，不会影响到其他的Segment，并发度为Segment个数，可以通过构造函数指定，数组扩容不会影响到其他Segment\n\t4.get方法无需加锁，底层通过volatile保证\n1.8版本\n\t1.数据结构：synchronized+CAS+Node+红黑树，node的val和next都用volatile修饰，保证可见性，查找替换赋值操作都使用CAS\n\t2.锁：锁链表的head节点，不影响其他元素的读写，锁粒度更细，效率更高，扩容时，阻塞所有读写操作，并发扩容\n\t3.读操作无锁：node的val和next使用volatile修饰，读写线程对该变量互相可见，数组用volatile修饰，保证扩容时读写线程感知\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_5-copyonwritearraylist的底层原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-copyonwritearraylist的底层原理"}},[s._v("#")]),s._v(" 5.CopyOnWriteArrayList的底层原理")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1.首先CopyOnWriteArrayList内部也是用数组来实现的，在向CopyOnWriteArrayList添加元素时，会复制一个新的数组，写操作在新数组上进行，读操作在原数组上进行\n2.写操作会加锁，防止出现并发写入丢失数据的问题\n3.写操作结束之后会把原数组指向新数组\n4.CopyOnWriteArrayList允许在写操作时来读取数据，大大提高了读的性能，因此适合读多写少的应用场景，但是CopyOnWriteArrayList比较占内存，同时读到的数据不是实时的，所以不适合实时性要求很高的场景。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_6-final-局部内部类和匿名内部类只能访问局部final变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-final-局部内部类和匿名内部类只能访问局部final变量"}},[s._v("#")]),s._v(" 6.final，局部内部类和匿名内部类只能访问局部final变量")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("final\n\t修饰类：不能被继承\n\t修饰方法：不能被重写，可以重载\n\t修饰变量：表示变量一旦被赋值就不可以更改他的值\n（1）修饰成员变量\n\t类变量：只能在静态块中指定初始值，或者声明该变量时指定初始值\n\t成员变量：可以在非静态初始化块，声明该变量或者构造器中执行初始值。\n（2）修饰局部变量\n\t系统不会为局部变量进行初始化，可以在定义时指定默认值，也可以在后面的代码中对final变量赋初始值（仅一次）\n（3）基本类型和引用类型\n\t基本类型：初始化后不能更改\n\t引用类型：初始化后不能让其指向其他对象，但是里面的值是可以修改的\n局部内部类和匿名内部类只能访问局部final变量\n\t内部类和外部类是处于同一个级别的，内部类不会因为定义在方法中就会随着方法的执行完毕就销毁\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"_7-hashcode与equals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-hashcode与equals"}},[s._v("#")]),s._v(" 7.hashCode与equals")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("hashCode的作用时获取哈希码，也称为散列码，实际上是返回一个int值，这个哈希码是确定该对象在哈希表中的索引位置，hashCode（）定义到object中，散列表存储的是key-value，特点是根据键可以快速检索出对应的值。\n如果equals方法被覆盖过，则hashCode方法也必须被覆盖\nhashCode()的默认行为是对堆上的对象产生独特值，如果没有重新hashCode（），则该class的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_8-hashmap的扩容机制原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-hashmap的扩容机制原理"}},[s._v("#")]),s._v(" 8.hashMap的扩容机制原理")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1.7版本\n数组+链表\n数组扩容，生成新的数组，将每个位置的元素转移到新数组上（头插法）\n1.8版本\n数组+链表+红黑树\n数组扩容，生成新的数组，将链表或者红黑树进行转移\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_9-hashmap和hashtable的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-hashmap和hashtable的区别"}},[s._v("#")]),s._v(" 9.HashMap和HashTable的区别")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("HashTable中的每个方法都是synchronized修饰的，所以是线程安全的\nHashMap允许key和value为null，HashTable不允许\njdk8开始：当链表长度到8，并且数组长度超过64链表会转化为红黑树\n1.计算key的hash值，二次hash进行长度取模，对应到数组下标\n2.如果没有产生hash冲突，将node节点存入对应位置\n3.如果产生hash冲突，先进行equals比较，相同则替换，不同则判度链表高度，是否需要在链表和红黑树之间进行转化。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_10-java异常体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-java异常体系"}},[s._v("#")]),s._v(" 10.java异常体系")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1.顶级父类，Throwable\n2.Throwable有两个子类，Exception和Error（OOM）\n3.Error是程序无法处理的错误，一旦出现这个错误，程序则被迫停止运行\n4.Exception不会导致程序停止，又分为RunTimeException（当前线程执行失败）和CheckedException\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_11-list和set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-list和set"}},[s._v("#")]),s._v(" 11.List和Set")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("List：有序，可重复，允许多个null元素对象，可以使用get(i)和iterator进行获取元素，\nset: 无序，不可重复，最多允许一个null元素对象，获取元素时只能使用iterator接口取得所有元素，再逐一遍历各个元素\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_12-hashmap在1-7和1-8中的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-hashmap在1-7和1-8中的区别"}},[s._v("#")]),s._v(" 12.HashMap在1.7和1.8中的区别")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1.7：数组+链表（头插法）hash算法比较复杂\n1.8：数组+链表（尾插法）+红黑树（提高插入和查询的效率）hash算法简单，因为引入了红黑树\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_13-hashmap的put方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-hashmap的put方法"}},[s._v("#")]),s._v(" 13.HashMap的Put方法")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1.根据key的哈希算法与运算得出数组下标\n2.判断对应下标是否为空，为空则将key和value封装为entry/node放入该位置\n3.对应下标不为空分情况\n\t1.7版本：先判断是否需要扩容，需要则扩容，不需要则生成Entry用头插法放入链表中\n\t1.8版本：判断位置上的node类型，看是红黑树还是链表\n\t\t红黑树：将key和value封装为红黑树节点，并添加到红黑树中去，判断红黑树中是否存在，存在则更新，不存在则插入\n\t\t链表：将key和value封装为链表节点，尾插法插入链表的最后位置（遍历链表，判断是否存在当前key，存在则更新，不存在则插入）插入后看链表长度大于等于8，则会转成红黑树\n\t\t插入链表或红黑树之后，判断是否需要扩容，不需要就结束。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_14-抽象类和接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-抽象类和接口"}},[s._v("#")]),s._v(" 14.抽象类和接口")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1.抽象类可以存在普通成员函数，接口只能存在public abstract方法\n2.抽象类的成员变量可以是各种类型的，接口中的成员变量只能是public static final\n3.抽象类单继承，接口多实现\n4.设计目的：\n\t抽象类：代码复用，\n\t接口：对类的行为进行约束\n5.抽象类是对类本质的抽象，表达的是is a的关系，接口是like的关系\n6.使用场景：当关注事物的本质时，用抽象类，关注操作时用接口\n7.抽象类的功能要高于接口，代价大，单继承，多实现\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_15-泛型中extends和super的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-泛型中extends和super的区别"}},[s._v("#")]),s._v(" 15.泛型中extends和super的区别")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("<?extends T>表示包括T在内的任何T的子类\n<?super T>表示包括T在内的任何T的父类\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_16-重写-重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-重写-重载"}},[s._v("#")]),s._v(" 16.重写，重载")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("重写：父子类中，方法名，参数列表相同，方法体不同，返回值范围小于等于父类，抛出的异常范围小于等于父类，如果父类为private，则子类不允许修改\n重载：同一个类中，方法名相同，参数列表不同（类型，个数，顺序），与返回值无关\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_17-java类加载器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-java类加载器"}},[s._v("#")]),s._v(" 17.Java类加载器")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("JDK自带有三个类加载器：bootstrap ClassLoader、ExtClassLoader、AppClassLoader。\nBootStrapClassLoader是ExtClassLoader的父类加载器，默认负责加载%JAVA_HOME%lib下的jar包和\nclass文件。\nExtClassLoader是AppClassLoader的父类加载器，负责加载%JAVA_HOME%/lib/ext文件夹下的jar包和\nclass类。\nAppClassLoader是自定义类加载器的父类，负责加载classpath下的类文件。系统类加载器，线程上下\n文加载器\n继承ClassLoader实现自定义类加载器\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_18双亲委托模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18双亲委托模型"}},[s._v("#")]),s._v(" "),a("strong",[s._v("18双亲委托模型")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("双亲委派模型的好处：\n主要是为了安全性，避免用户自己编写的类动态替换 Java的一些核心类，比如 String。\n同时也避免了类的重复加载，因为 JVM中区分不同类，不仅仅是根据类名，相同的 class文件被不\n同的 ClassLoader加载就是不同的两个类\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);