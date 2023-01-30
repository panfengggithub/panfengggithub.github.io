(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{527:function(a,s,t){"use strict";t.r(s);var e=t(1),v=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java基础二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java基础二"}},[a._v("#")]),a._v(" java基础二")]),a._v(" "),s("h2",{attrs:{id:"_1、java-中能创建-volatile-数组吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、java-中能创建-volatile-数组吗"}},[a._v("#")]),a._v(" "),s("strong",[a._v("1、Java 中能创建 volatile 数组吗？")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("能，Java 中可以创建 volatile 类型数组，不过只是一个指向数组的引用，而不\n是整个数组。我的意思是，如果改变引用指向的数组，将会受到 volatile 的保护，\n但是如果多个线程同时改变数组的元素，volatile 标示符就不能起到之前的保护\n作用了。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"_2、volatile-能使得一个非原子操作变成原子操作吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、volatile-能使得一个非原子操作变成原子操作吗"}},[a._v("#")]),a._v(" "),s("strong",[a._v("2、volatile 能使得一个非原子操作变成原子操作吗？")])]),a._v(" "),s("p",[a._v("一个典型的例子是在类中有一个 long 类型的成员变量。如果你知道该成员变量")]),a._v(" "),s("p",[a._v("会被多个线程访问，如计数器、价格等，你最好是将其设置为 volatile。为什么？")]),a._v(" "),s("p",[a._v("因为 Java 中读取 long 类型变量不是原子的，需要分成两步，如果一个线程正")]),a._v(" "),s("p",[a._v("在修改该 long 变量的值，另一个线程可能只能看到该值的一半（前 32 位）。")]),a._v(" "),s("p",[a._v("但是对一个 volatile 型的 long 或 double 变量的读写是原子。")]),a._v(" "),s("h2",{attrs:{id:"_3、volatile-修饰符的有过什么实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、volatile-修饰符的有过什么实践"}},[a._v("#")]),a._v(" "),s("strong",[a._v("3、volatile 修饰符的有过什么实践？")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("一种实践是用 volatile 修饰 long 和 double 变量，使其能按原子类型来读写。\ndouble 和 long 都是 64 位宽，因此对这两种类型的读是分为两部分的，第一次\n读取第一个 32 位，然后再读剩下的 32 位，这个过程不是原子的，但 Java 中\nvolatile 型的 long 或 double 变量的读写是原子的。volatile 修复符的另一个\n作用是提供内存屏障（memory barrier），例如在分布式框架中的应用。简单的\n说，就是当你写一个 volatile 变量之前，Java 内存模型会插入一个写屏障（write\nbarrier），读一个 volatile 变量之前，会插入一个读屏障（read barrier）。意\n思就是说，在你写一个 volatile 域时，能保证任何线程都能看到你写的值，同时，\n在写之前，也能保证任何数值的更新对所有线程是可见的，因为内存屏障会将其\n他所有写的值更新到缓存。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h2",{attrs:{id:"_4、volatile-类型变量提供什么保证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、volatile-类型变量提供什么保证"}},[a._v("#")]),a._v(" "),s("strong",[a._v("4、volatile 类型变量提供什么保证？")])]),a._v(" "),s("p",[a._v("volatile 变量提供顺序和可见性保证，例如，JVM 或者 JIT 为了获得更好的性能")]),a._v(" "),s("p",[a._v("会对语句重排序，但是 volatile 类型变量即使在没有同步块的情况下赋值也不会")]),a._v(" "),s("p",[a._v("与其他语句重排序。 volatile 提供 happens-before 的保证，确保一个线程的")]),a._v(" "),s("p",[a._v("修改能对其他线程是可见的。某些情况下，volatile 还能提供原子性，如读 64 位")]),a._v(" "),s("p",[a._v("数据类型，像 long 和 double 都不是原子的，但 volatile 类型的 double 和")]),a._v(" "),s("p",[a._v("long 就是原子的。")]),a._v(" "),s("h2",{attrs:{id:"_5、10-个线程和-2-个线程的同步代码-哪个更容易写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、10-个线程和-2-个线程的同步代码-哪个更容易写"}},[a._v("#")]),a._v(" "),s("strong",[a._v("5、10 个线程和 2 个线程的同步代码，哪个更容易写？")])]),a._v(" "),s("p",[a._v("从写代码的角度来说，两者的复杂度是相同的，因为同步代码与线程数量是相互")]),a._v(" "),s("p",[a._v("独立的。但是同步策略的选择依赖于线程的数量，因为越多的线程意味着更大的")]),a._v(" "),s("p",[a._v("竞争，所以你需要利用同步技术，如锁分离，这要求更复杂的代码和专业知识。")]),a._v(" "),s("h2",{attrs:{id:"_6、你是如何调用-wait-方法的-使用-if-块还是循环-为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、你是如何调用-wait-方法的-使用-if-块还是循环-为什么"}},[a._v("#")]),a._v(" "),s("strong",[a._v("6、你是如何调用 wait（）方法的？使用 if 块还是循环？为什么？")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("wait() 方法应该在循环调用，因为当线程获取到 CPU 开始执行的时候，其他条\n件可能还没有满足，所以在处理前，循环检测条件是否满足会更好。下面是一段\n标准的使用 wait 和 notify 方法的代码：\n// The standard idiom for using the wait method\nsynchronized (obj) {\nwhile (condition does not hold)\nobj.wait(); // (Releases lock, and reacquires on wakeup)\n... // Perform action appropriate to condition\n}\n参见 [Effective Java]第 69 条，获取更多关于为什么应该在循环中来调用 wait\n方法的内容。\n###7、什么是多线程环境下的伪共享（false sharing）？\n伪共享是多线程系统（每个处理器有自己的局部缓存）中一个众所周知的性能问\n题。伪共享发生在不同处理器的上的线程对变量的修改依赖于相同的缓存行\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("h2",{attrs:{id:"_8、什么是-busy-spin-我们为什么要使用它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、什么是-busy-spin-我们为什么要使用它"}},[a._v("#")]),a._v(" "),s("strong",[a._v("8、什么是 Busy spin？我们为什么要使用它？")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Busy spin 是一种在不释放 CPU 的基础上等待事件的技术。它经常用于避免丢\n失 CPU 缓存中的数据（如果线程先暂停，之后在其他 CPU 上运行就会丢失）。\n所以，如果你的工作要求低延迟，并且你的线程目前没有任何顺序，这样你就可\n以通过循环检测队列中的新消息来代替调用 sleep() 或 wait() 方法。它唯一的\n好处就是你只需等待很短的时间，如几微秒或几纳秒。LMAX 分布式框架是一个\n高性能线程间通信的库，该库有一个 BusySpinWaitStrategy 类就是基于这个概\n念实现的，使用 busy spin 循环 EventProcessors 等待屏障。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h2",{attrs:{id:"_9、java-中怎么获取一份线程-dump-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、java-中怎么获取一份线程-dump-文件"}},[a._v("#")]),a._v(" "),s("strong",[a._v("9、Java 中怎么获取一份线程 dump 文件？")])]),a._v(" "),s("p",[a._v("在 Linux 下，你可以通过命令 kill -3 PID （Java 进程的进程 ID）来获取 Java")]),a._v(" "),s("p",[a._v("应用的 dump 文件。在 Windows 下，你可以按下 Ctrl + Break 来获取。这")]),a._v(" "),s("p",[a._v("样 JVM 就会将线程的 dump 文件打印到标准输出或错误文件中，它可能打印在")]),a._v(" "),s("p",[a._v("控制台或者日志文件中，具体位置依赖应用的配置。如果你使用 Tomcat。")]),a._v(" "),s("h2",{attrs:{id:"_10、swing-是线程安全的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、swing-是线程安全的"}},[a._v("#")]),a._v(" "),s("strong",[a._v("10、Swing 是线程安全的？")])]),a._v(" "),s("p",[a._v("不是，Swing 不是线程安全的。你不能通过任何线程来更新 Swing 组件，如")]),a._v(" "),s("p",[a._v("JTable、JList 或 JPanel，事实上，它们只能通过 GUI 或 AWT 线程来更新。")]),a._v(" "),s("p",[a._v("这就是为什么 Swing 提供 invokeAndWait() 和 invokeLater() 方法来获取其")]),a._v(" "),s("p",[a._v("他线程的 GUI 更新请求。这些方法将更新请求放入 AWT 的线程队列中，可以")]),a._v(" "),s("p",[a._v("一直等待，也可以通过异步更新直接返回结果。你也可以在参考答案中查看和学")]),a._v(" "),s("p",[a._v("习到更详细的内容。")]),a._v(" "),s("h2",{attrs:{id:"_11、什么是线程局部变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11、什么是线程局部变量"}},[a._v("#")]),a._v(" "),s("strong",[a._v("11、什么是线程局部变量？")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("线程局部变量是局限于线程内部的变量，属于线程自身所有，不在多个线程间共\n享。Java 提供 ThreadLocal 类来支持线程局部变量，是一种实现线程安全的方\n式。但是在管理环境下（如 web 服务器）使用线程局部变量的时候要特别小心，\n在这种情况下，工作线程的生命周期比任何应用变量的生命周期都要长。任何线\n程局部变量一旦在工作完成后没有释放，Java 应用就存在内存泄露的风险。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h2",{attrs:{id:"_17、java-中应该使用什么数据类型来代表价格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17、java-中应该使用什么数据类型来代表价格"}},[a._v("#")]),a._v(" "),s("strong",[a._v("17、Java 中应该使用什么数据类型来代表价格？")])]),a._v(" "),s("p",[a._v("如果不是特别关心内存和性能的话，使用 BigDecimal，否则使用预定义精度的")]),a._v(" "),s("p",[a._v("double 类型。")]),a._v(" "),s("h2",{attrs:{id:"_18、怎么将-byte-转换为-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18、怎么将-byte-转换为-string"}},[a._v("#")]),a._v(" "),s("strong",[a._v("18、怎么将 byte 转换为 String？")])]),a._v(" "),s("p",[a._v("可以使用 String 接收 byte[] 参数的构造器来进行转换，需要注意的点是要使用")]),a._v(" "),s("p",[a._v("的正确的编码，否则会使用平台默认编码，这个编码可能跟原来的编码相同，也")]),a._v(" "),s("p",[a._v("可能不同。")]),a._v(" "),s("h2",{attrs:{id:"_20、我们能将-int-强制转换为-byte-类型的变量吗-如果该值大于-byte-类型的范围-将会出现什么现象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20、我们能将-int-强制转换为-byte-类型的变量吗-如果该值大于-byte-类型的范围-将会出现什么现象"}},[a._v("#")]),a._v(" "),s("strong",[a._v("20、我们能将 int 强制转换为 byte 类型的变量吗？如果该值大于 byte 类型的范围，将会出现什么现象？")])]),a._v(" "),s("p",[a._v("是的，我们可以做强制转换，但是 Java 中 int 是 32 位的，而 byte 是 8 位")]),a._v(" "),s("p",[a._v("的，所以，如果强制转化是，int 类型的高 24 位将会被丢弃，byte 类型的范围")]),a._v(" "),s("p",[a._v("是从 -128 到 128")]),a._v(" "),s("h2",{attrs:{id:"_23、java-中-操作符是线程安全的吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_23、java-中-操作符是线程安全的吗"}},[a._v("#")]),a._v(" "),s("strong",[a._v("23、Java 中 ++ 操作符是线程安全的吗？")])]),a._v(" "),s("p",[a._v("答案：不是线程安全的操作。它涉及到多个指令，如读取变量值，增加，然后存")]),a._v(" "),s("p",[a._v("储回内存，这个过程可能会出现多个线程交差。")]),a._v(" "),s("h2",{attrs:{id:"_24、a-a-b-与-a-b-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_24、a-a-b-与-a-b-的区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("24、a = a + b 与 a += b 的区别")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+= 隐式的将加操作的结果类型强制转换为持有结果的类型。如果两这个整型相\n加，如 byte、short 或者 int，首先会将它们提升到 int 类型，然后在执行加法\n操作。如果加法操作的结果比 a 的最大值要大，则 a+b 会出现编译错误，但是\na += b\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"_25、我能在不进行强制转换的情况下将一个-double-值赋值给long-类型的变量吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_25、我能在不进行强制转换的情况下将一个-double-值赋值给long-类型的变量吗"}},[a._v("#")]),a._v(" "),s("strong",[a._v("25、我能在不进行强制转换的情况下将一个 double 值赋值给long 类型的变量吗？")])]),a._v(" "),s("p",[a._v("不行，你不能在没有强制类型转换的前提下将一个 double 值赋值给 long 类型")]),a._v(" "),s("p",[a._v("的变量，因为 double 类型的范围比 long 类型更广，所以必须要进行强制转换。")]),a._v(" "),s("h2",{attrs:{id:"_26、3-0-1-0-3-将会返回什么-true-还是-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_26、3-0-1-0-3-将会返回什么-true-还是-false"}},[a._v("#")]),a._v(" "),s("strong",[a._v("26、3*0.1 == 0.3 将会返回什么？true 还是 false？")])]),a._v(" "),s("p",[a._v("false，因为有些浮点数不能完全精确的表示出来。")]),a._v(" "),s("h2",{attrs:{id:"_27、int-和-integer-哪个会占用更多的内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_27、int-和-integer-哪个会占用更多的内存"}},[a._v("#")]),a._v(" "),s("strong",[a._v("27、int 和 Integer 哪个会占用更多的内存？")])]),a._v(" "),s("p",[a._v("Integer 对象会占用更多的内存。Integer 是一个对象，需要存储对象的元数据。")]),a._v(" "),s("p",[a._v("但是 int 是一个原始类型的数据，所以占用的空间更少。")]),a._v(" "),s("h2",{attrs:{id:"_28、为什么-java-中的-string-是不可变的-immutable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_28、为什么-java-中的-string-是不可变的-immutable"}},[a._v("#")]),a._v(" "),s("strong",[a._v("28、为什么 Java 中的 String 是不可变的（Immutable）？")])]),a._v(" "),s("p",[a._v("Java 中的 String 不可变是因为 Java 的设计者认为字符串使用非常频繁，将字")]),a._v(" "),s("p",[a._v("符串设置为不可变可以允许多个客户端之间共享相同的字符串。")]),a._v(" "),s("h2",{attrs:{id:"_29、我们能在-switch-中使用-string-吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_29、我们能在-switch-中使用-string-吗"}},[a._v("#")]),a._v(" 29、我们能在 Switch 中使用 String 吗？")]),a._v(" "),s("p",[a._v("从 Java 7 开始，我们可以在 switch case 中使用字符串，但这仅仅是一个语法")]),a._v(" "),s("p",[a._v("糖。内部实现在 switch 中使用字符串的 hash code。")]),a._v(" "),s("h2",{attrs:{id:"_30、java-中的构造器链是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_30、java-中的构造器链是什么"}},[a._v("#")]),a._v(" 30、Java 中的构造器链是什么？")]),a._v(" "),s("p",[a._v("当你从一个构造器中调用另一个构造器，就是 Java 中的构造器链。这种情况只在")]),a._v(" "),s("p",[a._v("重载了类的构造器的时候才会出现。")]),a._v(" "),s("h2",{attrs:{id:"_31、64-位-jvm-中-int-的长度是多数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_31、64-位-jvm-中-int-的长度是多数"}},[a._v("#")]),a._v(" "),s("strong",[a._v("31、64 位 JVM 中，int 的长度是多数？")])]),a._v(" "),s("p",[a._v("Java 中，int 类型变量的长度是一个固定值，与平台无关，都是 32 位。意思就")]),a._v(" "),s("p",[a._v("是说，在 32 位 和 64 位 的 Java 虚拟机中，int 类型的长度是相同的。")]),a._v(" "),s("h2",{attrs:{id:"_32、serial-与-parallel-gc-之间的不同之处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_32、serial-与-parallel-gc-之间的不同之处"}},[a._v("#")]),a._v(" "),s("strong",[a._v("32、Serial 与 Parallel GC 之间的不同之处？")])]),a._v(" "),s("p",[a._v("Serial 与 Parallel 在 GC 执行的时候都会引起 stop-the-world。它们之间主要")]),a._v(" "),s("p",[a._v("不同 serial 收集器是默认的复制收集器，执行 GC 的时候只有一个线程，而")]),a._v(" "),s("p",[a._v("parallel 收集器使用多个 GC 线程来执行。")]),a._v(" "),s("h2",{attrs:{id:"_34、java-中-weakreference-与-softreference-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_34、java-中-weakreference-与-softreference-的区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("34、Java 中 WeakReference 与 SoftReference 的区别？")])]),a._v(" "),s("p",[a._v("虽然 WeakReference 与 SoftReference 都有利于提高 GC 和 内存的效率，")]),a._v(" "),s("p",[a._v("但是 WeakReference ，一旦失去最后一个强引用，就会被 GC 回收，而软引用")]),a._v(" "),s("p",[a._v("虽然不能阻止被回收，但是可以延迟到 JVM 内存不足的时候。")]),a._v(" "),s("h2",{attrs:{id:"_35、weakhashmap-是怎么工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_35、weakhashmap-是怎么工作的"}},[a._v("#")]),a._v(" "),s("strong",[a._v("35、WeakHashMap 是怎么工作的？")])]),a._v(" "),s("p",[a._v("WeakHashMap 的工作与正常的 HashMap 类似，但是使用弱引用作为 key，")]),a._v(" "),s("p",[a._v("意思就是当 key 对象没有任何引用时，key/value 将会被回收。")]),a._v(" "),s("h2",{attrs:{id:"_36、jvm-选项-xx-usecompressedoops-有什么作用-为什么要使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_36、jvm-选项-xx-usecompressedoops-有什么作用-为什么要使用"}},[a._v("#")]),a._v(" "),s("strong",[a._v("36、JVM 选项 -XX:+UseCompressedOops 有什么作用？为什么要使用？")])]),a._v(" "),s("p",[a._v("当你将你的应用从 32 位的 JVM 迁移到 64 位的 JVM 时，由于对象的指针从")]),a._v(" "),s("p",[a._v("32 位增加到了 64 位，因此堆内存会突然增加，差不多要翻倍。这也会对 CPU")]),a._v(" "),s("p",[a._v("缓存（容量比内存小很多）的数据产生不利的影响。因为，迁移到 64 位的 JVM")]),a._v(" "),s("p",[a._v("主要动机在于可以指定最大堆大小，通过压缩 OOP 可以节省一定的内存。通过")]),a._v(" "),s("p",[a._v("-XX:+UseCompressedOops 选项，JVM 会使用 32 位的 OOP，而不是 64 位")]),a._v(" "),s("p",[a._v("的 OOP。")]),a._v(" "),s("h2",{attrs:{id:"_37、怎样通过-java-程序来判断-jvm-是-32-位-还是-64位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_37、怎样通过-java-程序来判断-jvm-是-32-位-还是-64位"}},[a._v("#")]),a._v(" "),s("strong",[a._v("37、怎样通过 Java 程序来判断 JVM 是 32 位 还是 64位？")])]),a._v(" "),s("p",[a._v("你可以检查某些系统属性如 sun.arch.data.model 或 os.arch 来获取该信息。")]),a._v(" "),s("h2",{attrs:{id:"_38、32-位-jvm-和-64-位-jvm-的最大堆内存分别是多数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_38、32-位-jvm-和-64-位-jvm-的最大堆内存分别是多数"}},[a._v("#")]),a._v(" "),s("strong",[a._v("38、32 位 JVM 和 64 位 JVM 的最大堆内存分别是多数？")])]),a._v(" "),s("p",[a._v("理论上说上 32 位的 JVM 堆内存可以到达 2^32，即 4GB，但实际上会比这个")]),a._v(" "),s("p",[a._v("小很多。不同操作系统之间不同，如 Windows 系统大约 1.5 GB，Solaris 大约")]),a._v(" "),s("p",[a._v("3GB。64 位 JVM 允许指定最大的堆内存，理论上可以达到 2^64，这是一个非")]),a._v(" "),s("p",[a._v("常大的数字，实际上你可以指定堆内存大小到 100GB。甚至有的 JVM，如 Azul，")]),a._v(" "),s("p",[a._v("堆内存到 1000G 都是可能的。")]),a._v(" "),s("h2",{attrs:{id:"_39、jre、jdk、jvm-及-jit-之间有什么不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_39、jre、jdk、jvm-及-jit-之间有什么不同"}},[a._v("#")]),a._v(" "),s("strong",[a._v("39、JRE、JDK、JVM 及 JIT 之间有什么不同？")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("JRE 代表 Java 运行时（Java run-time），是运行 Java 引用所必须的。JDK 代\n表 Java 开发工具（Java development kit），是 Java 程序的开发工具，如 Java\n编译器，它也包含 JRE。JVM 代表 Java 虚拟机（Java virtual machine），它\n的责任是运行 Java 应用。JIT 代表即时编译（Just In Time compilation），当\n代码执行的次数超过一定的阈值时，会将 Java 字节码转换为本地代码，如，主\n要的热点代码会被准换为本地代码，这样有利大幅度提高 Java 应用的性能。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"_40、解释-java-堆空间及-gc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_40、解释-java-堆空间及-gc"}},[a._v("#")]),a._v(" "),s("strong",[a._v("40、解释 Java 堆空间及 GC？")])]),a._v(" "),s("p",[a._v("当通过 Java 命令启动 Java 进程的时候，会为它分配内存。内存的一部分用于")]),a._v(" "),s("p",[a._v("创建堆空间，当程序中创建对象的时候，就从对空间中分配内存。GC 是 JVM 内")]),a._v(" "),s("p",[a._v("部的一个进程，回收无效对象的内存用于将来的分配。")]),a._v(" "),s("h2",{attrs:{id:"_41、你能保证-gc-执行吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_41、你能保证-gc-执行吗"}},[a._v("#")]),a._v(" "),s("strong",[a._v("41、你能保证 GC 执行吗？")])]),a._v(" "),s("p",[a._v("不能，虽然你可以调用 System.gc() 或者 Runtime.gc()，但是没有办法保证 GC")]),a._v(" "),s("p",[a._v("的执行。")]),a._v(" "),s("h2",{attrs:{id:"_42、怎么获取-java-程序使用的内存-堆使用的百分比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_42、怎么获取-java-程序使用的内存-堆使用的百分比"}},[a._v("#")]),a._v(" "),s("strong",[a._v("42、怎么获取 Java 程序使用的内存？堆使用的百分比？")])]),a._v(" "),s("p",[a._v("可以通过 java.lang.Runtime 类中与内存相关方法来获取剩余的内存，总内存及")]),a._v(" "),s("p",[a._v("最大堆内存。通过这些方法你也可以获取到堆使用的百分比及堆内存的剩余空间。")]),a._v(" "),s("p",[a._v("Runtime.freeMemory() 方法返回剩余空间的字节数，Runtime.totalMemory()")]),a._v(" "),s("p",[a._v("方法总内存的字节数，Runtime.maxMemory() 返回最大内存的字节数。")]),a._v(" "),s("h2",{attrs:{id:"_43、java-中堆和栈有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_43、java-中堆和栈有什么区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("43、Java 中堆和栈有什么区别？")])]),a._v(" "),s("p",[a._v("JVM 中堆和栈属于不同的内存区域，使用目的也不同。栈常用于保存方法帧和局")]),a._v(" "),s("p",[a._v("部变量，而对象总是在堆上分配。栈通常都比堆小，也不会在多个线程之间共享，")]),a._v(" "),s("p",[a._v("而堆被整个 JVM 的所有线程共享。")]),a._v(" "),s("h2",{attrs:{id:"_44、-a-b-和-a-equals-b-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_44、-a-b-和-a-equals-b-有什么区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("44、“a==b”和”a.equals(b)”有什么区别？")])]),a._v(" "),s("p",[a._v("如果 a 和 b 都是对象，则 a==b 是比较两个对象的引用，只有当 a 和 b 指")]),a._v(" "),s("p",[a._v("向的是堆中的同一个对象才会返回 true，而 a.equals(b) 是进行逻辑比较，所以")]),a._v(" "),s("p",[a._v("通常需要重写该方法来提供逻辑一致性的比较。例如，String 类重写 equals() 方")]),a._v(" "),s("p",[a._v("法，所以可以用于两个不同对象，但是包含的字母相同的比较。")]),a._v(" "),s("h2",{attrs:{id:"_45、a-hashcode-有什么用-与-a-equals-b-有什么关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_45、a-hashcode-有什么用-与-a-equals-b-有什么关系"}},[a._v("#")]),a._v(" "),s("strong",[a._v("45、a.hashCode() 有什么用？与 a.equals(b) 有什么关系？")])]),a._v(" "),s("p",[a._v("hashCode() 方法是相应对象整型的 hash 值。它常用于基于 hash 的集合类，")]),a._v(" "),s("p",[a._v("如 Hashtable、HashMap、LinkedHashMap 等等。它与 equals() 方法关系特")]),a._v(" "),s("p",[a._v("别紧密。根据 Java 规范，两个使用 equal() 方法来判断相等的对象，必须具有")]),a._v(" "),s("p",[a._v("相同的 hash code。")]),a._v(" "),s("h2",{attrs:{id:"_46、final、finalize-和-finally-的不同之处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_46、final、finalize-和-finally-的不同之处"}},[a._v("#")]),a._v(" "),s("strong",[a._v("46、final、finalize 和 finally 的不同之处？")])]),a._v(" "),s("p",[a._v("final 是一个修饰符，可以修饰变量、方法和类。如果 final 修饰变量，意味着该")]),a._v(" "),s("p",[a._v("变量的值在初始化后不能被改变。finalize 方法是在对象被回收之前调用的方法，")]),a._v(" "),s("p",[a._v("给对象自己最后一个复活的机会，但是什么时候调用 finalize 没有保证。finally")]),a._v(" "),s("p",[a._v("是一个关键字，与 try 和 catch 一起用于异常的处理。finally 块一定会被执行，")]),a._v(" "),s("p",[a._v("无论在 try 块中是否有发生异常。")]),a._v(" "),s("h2",{attrs:{id:"_47、java-中的编译期常量是什么-使用它又什么风险"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_47、java-中的编译期常量是什么-使用它又什么风险"}},[a._v("#")]),a._v(" "),s("strong",[a._v("47、Java 中的编译期常量是什么？使用它又什么风险？")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("公共静态不可变（public static final ）变量也就是我们所说的编译期常量，这里\n的 public 可选的。实际上这些变量在编译时会被替换掉，因为编译器知道这些\n变量的值，并且知道这些变量在运行时不能改变。这种方式存在的一个问题是你\n使用了一个内部的或第三方库中的公有编译时常量，但是这个值后面被其他人改\n变了，但是你的客户端仍然在使用老的值，甚至你已经部署了一个新的 jar。为了\n避免这种情况，当你在更新依赖 JAR 文件时，确保重新编译你的程序。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"_48、list、set、map-和-queue-之间的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_48、list、set、map-和-queue-之间的区别"}},[a._v("#")]),a._v(" 48、List、Set、Map 和 Queue 之间的区别")]),a._v(" "),s("p",[a._v("List 是一个有序集合，允许元素重复。它的某些实现可以提供基于下标值的常量")]),a._v(" "),s("p",[a._v("访问时间，但是这不是 List 接口保证的。Set 是一个无序集合。")]),a._v(" "),s("h2",{attrs:{id:"_49、poll-方法和-remove-方法的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_49、poll-方法和-remove-方法的区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("49、poll() 方法和 remove() 方法的区别？")])]),a._v(" "),s("p",[a._v("poll() 和 remove() 都是从队列中取出一个元素，但是 poll() 在获取元素失败")]),a._v(" "),s("p",[a._v("的时候会返回空，但是 remove() 失败的时候会抛出异常。")]),a._v(" "),s("h2",{attrs:{id:"_50、java-中-linkedhashmap-和-priorityqueue-的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_50、java-中-linkedhashmap-和-priorityqueue-的区别是什么"}},[a._v("#")]),a._v(" "),s("strong",[a._v("50、Java 中 LinkedHashMap 和 PriorityQueue 的区别是什么？")])]),a._v(" "),s("p",[a._v("PriorityQueue 保证最高或者最低优先级的的元素总是在队列头部，但是")]),a._v(" "),s("p",[a._v("LinkedHashMap 维持的顺序是元素插入的顺序。当遍历一个 PriorityQueue")]),a._v(" "),s("p",[a._v("时，没有任何顺序保证，但是 LinkedHashMap 课保证遍历顺序是元素插入的顺")]),a._v(" "),s("p",[a._v("序。")]),a._v(" "),s("h2",{attrs:{id:"_51、arraylist-与-linkedlist-的不区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_51、arraylist-与-linkedlist-的不区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("51、ArrayList 与 LinkedList 的不区别？")])]),a._v(" "),s("p",[a._v("最明显的区别是 ArrrayList 底层的数据结构是数组，支持随机访问，而")]),a._v(" "),s("p",[a._v("LinkedList 的底层数据结构书链表，不支持随机访问。使用下标访问一个元素，")]),a._v(" "),s("p",[a._v("ArrayList 的时间复杂度是 O(1)，而 LinkedList 是 O(n)。更多细节的讨论参见")]),a._v(" "),s("p",[a._v("答案。")]),a._v(" "),s("h2",{attrs:{id:"_52、用哪两种方式来实现集合的排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_52、用哪两种方式来实现集合的排序"}},[a._v("#")]),a._v(" "),s("strong",[a._v("52、用哪两种方式来实现集合的排序？")])]),a._v(" "),s("p",[a._v("你可以使用有序集合，如 TreeSet 或 TreeMap，你也可以使用有顺序的的集合，")]),a._v(" "),s("p",[a._v("如 list，然后通过 Collections.sort() 来排序。")]),a._v(" "),s("h2",{attrs:{id:"_53、java-中怎么打印数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_53、java-中怎么打印数组"}},[a._v("#")]),a._v(" "),s("strong",[a._v("53、Java 中怎么打印数组？")])]),a._v(" "),s("p",[a._v("你可以使用 Arrays.toString() 和 Arrays.deepToString() 方法来打印数组。由")]),a._v(" "),s("p",[a._v("于数组没有实现 toString() 方法，所以如果将数组传递给 System.out.println()")]),a._v(" "),s("p",[a._v("方法，将无法打印出数组的内容，但是 Arrays.toString() 可以打印每个元素。")]),a._v(" "),s("h2",{attrs:{id:"_54、java-中的-linkedlist-是单向链表还是双向链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_54、java-中的-linkedlist-是单向链表还是双向链表"}},[a._v("#")]),a._v(" "),s("strong",[a._v("54、Java 中的 LinkedList 是单向链表还是双向链表？")])]),a._v(" "),s("p",[a._v("是双向链表，你可以检查 JDK 的源码。在 Eclipse，你可以使用快捷键 Ctrl + T，")]),a._v(" "),s("p",[a._v("直接在编辑器中打开该类。")]),a._v(" "),s("h2",{attrs:{id:"_55、java-中的-treemap-是采用什么树实现的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_55、java-中的-treemap-是采用什么树实现的"}},[a._v("#")]),a._v(" "),s("strong",[a._v("55、Java 中的 TreeMap 是采用什么树实现的？")])]),a._v(" "),s("p",[a._v("Java 中的 TreeMap 是使用红黑树实现的。")]),a._v(" "),s("h2",{attrs:{id:"_56、hashtable-与-hashmap-有什么不同之处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_56、hashtable-与-hashmap-有什么不同之处"}},[a._v("#")]),a._v(" "),s("strong",[a._v("56、Hashtable 与 HashMap 有什么不同之处？")])]),a._v(" "),s("p",[a._v("这两个类有许多不同的地方，下面列出了一部分：")]),a._v(" "),s("p",[a._v("a) Hashtable 是 JDK 1 遗留下来的类，而 HashMap 是后来增加的。")]),a._v(" "),s("p",[a._v("b）Hashtable 是同步的，比较慢，但 HashMap 没有同步策略，所以会更快。")]),a._v(" "),s("p",[a._v("c）Hashtable 不允许有个空的 key，但是 HashMap 允许出现一个 null key。")]),a._v(" "),s("h2",{attrs:{id:"_57、java-中的-hashset-内部是如何工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_57、java-中的-hashset-内部是如何工作的"}},[a._v("#")]),a._v(" "),s("strong",[a._v("57、Java 中的 HashSet，内部是如何工作的？")])]),a._v(" "),s("p",[a._v("HashSet 的内部采用 HashMap 来实现。由于 Map 需要 key 和 value，所以")]),a._v(" "),s("p",[a._v("所有 key 的都有一个默认 value。类似于 HashMap，HashSet 不允许重复的")]),a._v(" "),s("p",[a._v("key，只允许有一个 null key，意思就是 HashSet 中只允许存储一个 null 对象。")]),a._v(" "),s("h2",{attrs:{id:"_58、写一段代码在遍历-arraylist-时移除一个元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_58、写一段代码在遍历-arraylist-时移除一个元素"}},[a._v("#")]),a._v(" "),s("strong",[a._v("58、写一段代码在遍历 ArrayList 时移除一个元素？")])]),a._v(" "),s("p",[a._v("该问题的关键在于面试者使用的是 ArrayList 的 remove() 还是 Iterator 的")]),a._v(" "),s("p",[a._v("remove()方法。这有一段示例代码，是使用正确的方式来实现在遍历的过程中移")]),a._v(" "),s("p",[a._v("除元素，而不会出现 ConcurrentModificationException 异常的示例代码。")]),a._v(" "),s("h2",{attrs:{id:"_59、我们能自己写一个容器类-然后使用-for-each-循环码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_59、我们能自己写一个容器类-然后使用-for-each-循环码"}},[a._v("#")]),a._v(" "),s("strong",[a._v("59、我们能自己写一个容器类，然后使用 for-each 循环码？")])]),a._v(" "),s("p",[a._v("可以，你可以写一个自己的容器类。如果你想使用 Java 中增强的循环来遍历，")]),a._v(" "),s("p",[a._v("你只需要实现 Iterable 接口。如果你实现 Collection 接口，默认就具有该属性。")]),a._v(" "),s("h2",{attrs:{id:"_60、arraylist-和-hashmap-的默认大小是多数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_60、arraylist-和-hashmap-的默认大小是多数"}},[a._v("#")]),a._v(" "),s("strong",[a._v("60、ArrayList 和 HashMap 的默认大小是多数？")])]),a._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[a._v("在 Java 7 中，ArrayList 的默认大小是 10 个元素，HashMap 的默认大小是\n\n16 个元素（必须是 2 的幂）。这就是 Java 7 中 ArrayList 和 HashMap 类的\n\n代码片段：\n\n// from ArrayList.java JDK 1.7\n\nprivate static final int DEFAULT_CAPACITY = 10;\n\n//from HashMap.java JDK 7\n\nstatic final int DEFAULT_INITIAL_CAPACITY = 1 << 4; // aka 16\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h2",{attrs:{id:"_61、有没有可能两个不相等的对象有有相同的-hashcode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_61、有没有可能两个不相等的对象有有相同的-hashcode"}},[a._v("#")]),a._v(" "),s("strong",[a._v("61、有没有可能两个不相等的对象有有相同的 hashcode？")])]),a._v(" "),s("p",[a._v("有可能，两个不相等的对象可能会有相同的 hashcode 值，这就是为什么在")]),a._v(" "),s("p",[a._v("hashmap 中会有冲突。相等 hashcode 值的规定只是说如果两个对象相等，必")]),a._v(" "),s("p",[a._v("须有相同的 hashcode 值，但是没有关于不相等对象的任何规定。")]),a._v(" "),s("h2",{attrs:{id:"_62、两个相同的对象会有不同的的-hash-code-吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_62、两个相同的对象会有不同的的-hash-code-吗"}},[a._v("#")]),a._v(" "),s("strong",[a._v("62、两个相同的对象会有不同的的 hash code 吗？")])]),a._v(" "),s("p",[a._v("不能，根据 hash code 的规定，这是不可能的。")]),a._v(" "),s("h2",{attrs:{id:"_64、java-中-comparator-与-comparable-有什么不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_64、java-中-comparator-与-comparable-有什么不同"}},[a._v("#")]),a._v(" "),s("strong",[a._v("64、Java 中，Comparator 与 Comparable 有什么不同？")])]),a._v(" "),s("p",[a._v("Comparable 接口用于定义对象的自然顺序，而 comparator 通常用于定义用户")]),a._v(" "),s("p",[a._v("定制的顺序。Comparable 总是只有一个，但是可以有多个 comparator 来定义")]),a._v(" "),s("p",[a._v("对象的顺序。")]),a._v(" "),s("h2",{attrs:{id:"_65、为什么在重写-equals-方法的时候需要重写-hashcode-方法-答案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_65、为什么在重写-equals-方法的时候需要重写-hashcode-方法-答案"}},[a._v("#")]),a._v(" 65、为什么在重写 equals 方法的时候需要重写 hashCode 方法？(答案)")]),a._v(" "),s("p",[a._v("因为有强制的规范指定需要同时重写 hashcode 与 equal 是方法，许多容器类，")]),a._v(" "),s("p",[a._v("如 HashMap、HashSet 都依赖于 hashcode 与 equals 的规定。")]),a._v(" "),s("p",[s("strong",[a._v("Java IO 和 NIO 的面试题")])]),a._v(" "),s("p",[a._v("IO 是 Java 面试中一个非常重要的点。你应该很好掌握 Java IO，NIO，NIO2 以")]),a._v(" "),s("p",[a._v("及与操作系统，磁盘 IO 相关的基础知识。下面是 Java IO 中经常问的问题。")]),a._v(" "),s("h2",{attrs:{id:"_67、java-中怎么创建-bytebuffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_67、java-中怎么创建-bytebuffer"}},[a._v("#")]),a._v(" "),s("strong",[a._v("67、Java 中怎么创建 ByteBuffer？")])]),a._v(" "),s("p",[a._v("byte[] bytes = new byte[10];")]),a._v(" "),s("p",[a._v("ByteBuffer buf = ByteBuffer.wrap(bytes);")]),a._v(" "),s("h2",{attrs:{id:"_76、java-中-编写多线程程序的时候你会遵循哪些最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_76、java-中-编写多线程程序的时候你会遵循哪些最佳实践"}},[a._v("#")]),a._v(" "),s("strong",[a._v("76、Java 中，编写多线程程序的时候你会遵循哪些最佳实践？")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("这是我在写 Java 并发程序的时候遵循的一些最佳实践：\na）给线程命名，这样可以帮助调试。\nb）最小化同步的范围，而不是将整个方法同步，只对关键部分做同步。\nc）如果可以，更偏向于使用 volatile 而不是 synchronized。\nd）使用更高层次的并发工具，而不是使用 wait() 和 notify() 来实现线程间通\n信，如 BlockingQueue，CountDownLatch 及 Semeaphore。\ne）优先使用并发集合，而不是对集合进行同步。并发集合提供更好的可扩展性。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h2",{attrs:{id:"_77、说出几点-java-中使用-collections-的最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_77、说出几点-java-中使用-collections-的最佳实践"}},[a._v("#")]),a._v(" "),s("strong",[a._v("77、说出几点 Java 中使用 Collections 的最佳实践")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("这是我在使用 Java 中 Collections 类的一些最佳实践：\na）使用正确的集合类，例如，如果不需要同步列表，使用 ArrayList 而不是\nVector。\nb）优先使用并发集合，而不是对集合进行同步。并发集合提供更好的可扩展性。\nc）使用接口代表和访问集合，如使用 List 存储 ArrayList，使用 Map 存储\nHashMap 等等。\nd）使用迭代器来循环集合。\ne）使用集合的时候使用泛型。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h2",{attrs:{id:"_81、说出几条-java-中方法重载的最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_81、说出几条-java-中方法重载的最佳实践"}},[a._v("#")]),a._v(" "),s("strong",[a._v("81、说出几条 Java 中方法重载的最佳实践？")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("下面有几条可以遵循的方法重载的最佳实践来避免造成自动装箱的混乱。\n\na）不要重载这样的方法：一个方法接收 int 参数，而另个方法接收 Integer 参\n\n数。\n\nb）不要重载参数数量一致，而只是参数顺序不同的方法。\n\nc）如果重载的方法参数个数多于 5 个，采用可变参数。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h2",{attrs:{id:"_82、在多线程环境下-simpledateformat-是线程安全的吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_82、在多线程环境下-simpledateformat-是线程安全的吗"}},[a._v("#")]),a._v(" "),s("strong",[a._v("82、在多线程环境下，SimpleDateFormat 是线程安全的吗？")])]),a._v(" "),s("p",[a._v("不是，非常不幸，DateFormat 的所有实现，包括 SimpleDateFormat 都不是")]),a._v(" "),s("p",[a._v("线程安全的，因此你不应该在多线程序中使用，除非是在对外线程安全的环境中")]),a._v(" "),s("p",[a._v("使用，如 将 SimpleDateFormat 限制在 ThreadLocal 中。如果你不这么做，")]),a._v(" "),s("p",[a._v("在解析或者格式化日期的时候，可能会获取到一个不正确的结果。因此，从日期、")]),a._v(" "),s("p",[a._v("时间处理的所有实践来说，我强力推荐 joda-time 库。")]),a._v(" "),s("h2",{attrs:{id:"_83、java-中如何格式化一个日期-如格式化为-ddmmyyyy的形式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_83、java-中如何格式化一个日期-如格式化为-ddmmyyyy的形式"}},[a._v("#")]),a._v(" "),s("strong",[a._v("83、Java 中如何格式化一个日期？如格式化为 ddMMyyyy的形式？")])]),a._v(" "),s("p",[a._v("Java 中，可以使用 SimpleDateFormat 类或者 joda-time 库来格式日期。")]),a._v(" "),s("p",[a._v("DateFormat 类允许你使用多种流行的格式来格式化日期。参见答案中的示例代")]),a._v(" "),s("p",[a._v("码，代码中演示了将日期格式化成不同的格式，如 dd-MM-yyyy 或 ddMMyyyy。")]),a._v(" "),s("h2",{attrs:{id:"_127、java-中-受检查异常-和-不受检查异常的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_127、java-中-受检查异常-和-不受检查异常的区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("127、Java 中，受检查异常 和 不受检查异常的区别？")])]),a._v(" "),s("p",[a._v("受检查异常编译器在编译期间检查。对于这种异常，方法强制处理或者通过")]),a._v(" "),s("p",[a._v("throws 子句声明。其中一种情况是 Exception 的子类但不是")]),a._v(" "),s("p",[a._v("RuntimeException 的子类。非受检查是 RuntimeException 的子类，在编译阶")]),a._v(" "),s("p",[a._v("段不受编译器的检查。")]),a._v(" "),s("h2",{attrs:{id:"_128、java-中-throw-和-throws-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_128、java-中-throw-和-throws-有什么区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("128、Java 中，throw 和 throws 有什么区别")])]),a._v(" "),s("p",[a._v("throw 用于抛出 java.lang.Throwable 类的一个实例化对象，意思是说你可以通")]),a._v(" "),s("p",[a._v("过关键字 throw 抛出一个 Error 或者 一个 Exception，如：")]),a._v(" "),s("p",[a._v("throw new IllegalArgumentException(“size must be multiple of 2″ )")]),a._v(" "),s("p",[a._v("而 throws 的作用是作为方法声明和签名的一部分，方法被抛出相应的异常以便")]),a._v(" "),s("p",[a._v("调用者能处理。Java 中，任何未处理的受检查异常强制在 throws 子句中声明")]),a._v(" "),s("h2",{attrs:{id:"_129、java-中-serializable-与-externalizable-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_129、java-中-serializable-与-externalizable-的区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("129、Java 中，Serializable 与 Externalizable 的区别？")])]),a._v(" "),s("p",[a._v("Serializable 接口是一个序列化 Java 类的接口，以便于它们可以在网络上传输")]),a._v(" "),s("p",[a._v("或者可以将它们的状态保存在磁盘上，是 JVM 内嵌的默认序列化方式，成本高、")]),a._v(" "),s("p",[a._v("脆弱而且不安全。Externalizable 允许你控制整个序列化过程，指定特定的二进")]),a._v(" "),s("p",[a._v("制格式，增加安全机制。")]),a._v(" "),s("h2",{attrs:{id:"_132、说出-5-个-jdk-1-8-引入的新特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_132、说出-5-个-jdk-1-8-引入的新特性"}},[a._v("#")]),a._v(" "),s("strong",[a._v("132、说出 5 个 JDK 1.8 引入的新特性？")])]),a._v(" "),s("p",[a._v("Java 8 在 Java 历史上是一个开创新的版本，下面 JDK 8 中 5 个主要的特性：")]),a._v(" "),s("p",[a._v("Lambda 表达式，允许像对象一样传递匿名函数")]),a._v(" "),s("p",[a._v("Stream API，充分利用现代多核 CPU，可以写出很简洁的代码")]),a._v(" "),s("p",[a._v("Date 与 Time API，最终，有一个稳定、简单的日期和时间库可供你使用")]),a._v(" "),s("p",[a._v("扩展方法，现在，接口中可以有静态、默认方法。")]),a._v(" "),s("p",[a._v("重复注解，现在你可以将相同的注解在同一类型上使用多次")])])}),[],!1,null,null,null);s.default=v.exports}}]);