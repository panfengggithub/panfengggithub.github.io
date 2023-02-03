(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{752:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"并发编程之jmm-volatile底层原理剖析二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#并发编程之jmm-volatile底层原理剖析二"}},[s._v("#")]),s._v(" "),n("strong",[s._v("并发编程之JMM&Volatile底层原理剖析二")])]),s._v(" "),n("p",[s._v("Cache Line大小是64Byte。")]),s._v(" "),n("h2",{attrs:{id:"什么是伪共享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是伪共享"}},[s._v("#")]),s._v(" 什么是伪共享")]),s._v(" "),n("p",[s._v("Cache Line大小是64Byte（"),n("a",{attrs:{href:"https://www.yuque.com/renyong-jmovm/ufz328/td13lh#SC1Sr",target:"_blank",rel:"noopener noreferrer"}},[s._v("linux下查看缓存行大小"),n("OutboundLink")],1),s._v("）。")]),s._v(" "),n("p",[s._v("如果多个核的线程在操作同一个缓存行中的不同变量数据，那么就会出现频繁的缓存失效，即使在代码层面看这两个线程操作的数据之间完全没有关系。这种不合理的资源竞争情况就是伪共享（False Sharing）。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600327812055-b2d9b9a8-2815-4364-83c9-15e2d0b24464.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_15%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),n("p",[s._v("避免伪共享：")]),s._v(" "),n("ul",[n("li",[s._v("缓存行填充")]),s._v(" "),n("li",[s._v("使用 @sun.misc.Contended 注解（java8）")])]),s._v(" "),n("h3",{attrs:{id:"伪共享案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#伪共享案例"}},[s._v("#")]),s._v(" 伪共享案例")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("public class FalseSharingTest {\n\n    public static void main(String[] args) throws InterruptedException {\n        testPointer(new Pointer());\n    }\n\n    private static void testPointer(Pointer pointer) throws InterruptedException {\n        long start = System.currentTimeMillis();\n        Thread t1 = new Thread(() -> {\n            for (int i = 0; i < 100000000; i++) {\n                pointer.x++;\n            }\n        });\n\n        Thread t2 = new Thread(() -> {\n            for (int i = 0; i < 100000000; i++) {\n                pointer.y++;\n            }\n        });\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(System.currentTimeMillis() - start);\n\n\n    }\n}\n\n\nclass Pointer {\n    // 避免伪共享： @Contended +  jvm参数：-XX:-RestrictContended\n    //@Contended\n    volatile long x;\n    //避免伪共享： 缓存行填充\n    //long p1, p2, p3, p4, p5, p6, p7;\n    volatile long y;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])]),n("h2",{attrs:{id:"volatile重排序规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#volatile重排序规则"}},[s._v("#")]),s._v(" volatile重排序规则")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600328003232-dfc38184-11be-4cf1-97f7-67639bfe1553.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_21%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),n("p",[s._v("结论：")]),s._v(" "),n("p",[s._v("\\1.  第二个操作是volatile写，不管第一个操作是什么都不会重排序")]),s._v(" "),n("p",[s._v("\\2.  第一个操作是volatile读，不管第二个操作是什么都不会重排序")]),s._v(" "),n("p",[s._v("\\3.  第一个操作是volatile写，第二个操作是volatile读，也不会发生重排序")]),s._v(" "),n("p",[s._v("JMM内存屏障插入策略：")]),s._v(" "),n("p",[s._v("\\1. 在每个volatile写操作的前面插入一个StoreStore屏障")]),s._v(" "),n("p",[s._v("\\2. 在每个volatile写操作的后面插入一个StoreLoad屏障")]),s._v(" "),n("p",[s._v("\\3. 在每个volatile读操作的后面插入一个LoadLoad屏障")]),s._v(" "),n("p",[s._v("\\4. 在每个volatile读操作的后面插入一个LoadStore屏障")]),s._v(" "),n("p",[s._v("注意：X86处理器不会对读-读、读-写和写-写操作做重排序, 会省略掉这3种操作类型对应的内存屏障。仅会对写-读操作做重排序，所以volatile写-读操作只需要在volatile写后插入StoreLoad屏障")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600331377283-df9c6f1d-1ae1-4099-8c3a-00ec6cb4dfe9.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_34%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600331511468-69033e05-ac77-4884-b018-eec7a5d0316a.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"volatile有序性案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#volatile有序性案例"}},[s._v("#")]),s._v(" volatile有序性案例")]),s._v(" "),n("ol",[n("li",[s._v("DCL为什么要使用volatile")])]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("public class SingletonFactory {\n\n    private volatile static SingletonFactory myInstance;\n\n    public static SingletonFactory getMyInstance() {\n        if (myInstance == null) {\n            synchronized (SingletonFactory.class) {\n                if (myInstance == null) {\n                    myInstance = new SingletonFactory();\n                }\n            }\n        }\n        return myInstance;\n    }\n\n    public static void main(String[] args) {\n        SingletonFactory.getMyInstance();\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("ol",[n("li",[s._v("x,y的值有哪些可能")])]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('public class ReOrderTest {\n\n    private static int x = 0, y = 0;\n\n    private static  int a = 0, b = 0;\n\n\n    public static void main(String[] args) throws InterruptedException{\n        int i=0;\n        while (true) {\n            i++;\n            x = 0;\n            y = 0;\n            a = 0;\n            b = 0;\n\n            /**\n             *  x,y:\n             */\n            Thread thread1 = new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    shortWait(20000);\n                    a = 1;\n                    UnsafeFactory.getUnsafe().storeFence();\n                    x = b;\n                }\n            });\n            Thread thread2 = new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    b = 1;\n                    UnsafeFactory.getUnsafe().storeFence();\n                    y = a;\n                }\n            });\n\n            thread1.start();\n            thread2.start();\n            thread1.join();\n            thread2.join();\n\n            System.out.println("第" + i + "次（" + x + "," + y + ")");\n\n            if (x==0&&y==0){\n                break;\n            }\n\n        }\n\n    }\n\n    public static void shortWait(long interval){\n        long start = System.nanoTime();\n        long end;\n        do{\n            end = System.nanoTime();\n        }while(start + interval >= end);\n    }\n\n\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br")])]),n("h1",{attrs:{id:"内存屏障"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内存屏障"}},[s._v("#")]),s._v(" 内存屏障")]),s._v(" "),n("p",[s._v("硬件层提供了一系列的内存屏障 memory barrier / memory fence(Intel的提法)来提供一致性的能力。拿X86平台来说，有几种主要的内存屏障：\n\\1. lfence，是一种Load Barrier 读屏障\n\\2. sfence, 是一种Store Barrier 写屏障\n\\3. mfence, 是一种全能型的屏障，具备lfence和sfence的能力\n\\4. Lock前缀，Lock不是一种内存屏障，但是它能完成类似内存屏障的功能。Lock会对CPU总线和高速缓存加锁，可以理解为CPU指令级的一种锁。它后面可以跟ADD, ADC, AND, BTC, BTR, BTS, CMPXCHG, CMPXCH8B, DEC, INC, NEG, NOT, OR, SBB, SUB, XOR, XADD, and XCHG等指令。")]),s._v(" "),n("p",[s._v("内存屏障有两个能力：\n\\1. 阻止屏障两边的指令重排序\n\\2. 刷新处理器缓存/冲刷处理器缓存")]),s._v(" "),n("p",[s._v("对Load Barrier来说，在读指令前插入读屏障，可以让高速缓存中的数据失效，重新从主内存加载数据\n对Store Barrier来说，在写指令之后插入写屏障，能让写入缓存的最新数据写回到主内存")]),s._v(" "),n("p",[s._v("Lock前缀实现了类似的能力，它先对总线和缓存加锁，然后执行后面的指令，最后释放锁后会把高速缓存中的数据刷新回主内存。在Lock锁住总线的时候，其他CPU的读写请求都会被阻塞，直到锁释放。")]),s._v(" "),n("p",[s._v("不同硬件实现内存屏障的方式不同，Java内存模型屏蔽了这种底层硬件平台的差异，由JVM来为不同的平台生成相应的机器码。")]),s._v(" "),n("h3",{attrs:{id:"as-if-serial"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#as-if-serial"}},[s._v("#")]),s._v(" as-if-serial")]),s._v(" "),n("p",[s._v("as-if-serial语义的意思是：不管怎么重排序（编译器和处理器为了提高并行度），（单线程）程序的执行结果不能被改变。编译器、runtime和处理器都必须遵守as-if-serial语义。")]),s._v(" "),n("p",[s._v("为了遵守as-if-serial语义，编译器和处理器不会对存在数据依赖关系的操作做重排序，因为这种重排序会改变执行结果。但是，如果操作之间不存在数据依赖关系，这些操作就可能被编译器和处理器重排序。")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("double pi = 3.14; // A\ndouble r = 1.0; // B\ndouble area = pi * r * r; // C\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("A和C之间存在数据依赖关系，同时B和C之间也存在数据依赖关系。因此在最终执行的指令序列中，C不能被重排序到A和B的前面（C排到A和B的前面，程序的结果将会被改变）。但A和B之间没有数据依赖关系，编译器和处理器可以重排序A和B之间的执行顺序。")]),s._v(" "),n("h3",{attrs:{id:"happens-before"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#happens-before"}},[s._v("#")]),s._v(" happens-before")]),s._v(" "),n("p",[s._v("从JDK 5 开始，JMM使用happens-before的概念来阐述多线程之间的内存可见性。"),n("strong",[s._v("在JMM中，如果一个操作执行的结果需要对另一个操作可见，那么这两个操作之间必须存在happens-before关系。")]),s._v(" happens-before和JMM关系如下图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600327289456-6d6d78a4-7d0b-4fd2-a645-09ce52030a6d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_26%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),n("p",[s._v("happens-before原则非常重要，它是判断数据是否存在竞争、线程是否安全的主要依据，依靠这个原则，我们解决在并发环境下两操作之间是否可能存在冲突的所有问题。下面我们就一个简单的例子稍微了解下happens-before ；")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("i = 1;       //线程A执行\nj = i ;      //线程B执行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("j 是否等于1呢？假定线程A的操作（i = 1）happens-before线程B的操作（j = i）,那么可以确定线程B执行后j = 1 一定成立，如果他们不存在happens-before原则，那么j = 1 不一定成立。这就是happens-before原则的威力。")]),s._v(" "),n("p",[n("strong",[s._v("happens-before原则定义如下")]),s._v("：")]),s._v(" "),n("ol",[n("li",[s._v("如果一个操作happens-before另一个操作，那么第一个操作的执行结果将对第二个操作可见，而且第一个操作的执行顺序排在第二个操作之前。")]),s._v(" "),n("li",[s._v("两个操作之间存在happens-before关系，并不意味着一定要按照happens-before原则制定的顺序来执行。如果重排序之后的执行结果与按照happens-before关系来执行的结果一致，那么这种重排序并不非法。")])]),s._v(" "),n("p",[n("strong",[s._v("下面是happens-before原则规则")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("1.程序次序规则：一个线程内，按照代码顺序，书写在前面的操作先行发生于书写在后面的操作；\n\n2.锁定规则：一个unLock操作先行发生于后面对同一个锁的lock操作；\n\n3.volatile变量规则：对一个变量的写操作先行发生于后面对这个变量的读操作；\n\n4.传递规则：如果操作A先行发生于操作B，而操作B又先行发生于操作C，则可以得出操作A先行发生于操作C；\n\n5.线程启动规则：Thread对象的start()方法先行发生于此线程的每个一个动作；\n\n6.线程中断规则：对线程interrupt()方法的调用先行发生于被中断线程的代码检测到中断事件的发生；\n\n7.线程终结规则：线程中所有的操作都先行发生于线程的终止检测，我们可以通过Thread.join()方法结束、Thread.isAlive()的返回值手段检测到线程已经终止执行；\n\n8.对象终结规则：一个对象的初始化完成先行发生于他的finalize()方法的开始；\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("我们来详细看看上面每条规则（摘自《深入理解Java虚拟机第12章》）：")]),s._v(" "),n("p",[n("strong",[s._v("程序次序规则")]),s._v("：一段代码在单线程中执行的结果是有序的。注意是执行结果，因为虚拟机、处理器会对指令进行重排序（重排序后面会详细介绍）。虽然重排序了，但是并不会影响程序的执行结果，所以程序最终执行的结果与顺序执行的结果是一致的。故而这个规则只对单线程有效，在多线程环境下无法保证正确性。")]),s._v(" "),n("p",[n("strong",[s._v("锁定规则")]),s._v("：这个规则比较好理解，无论是在单线程环境还是多线程环境，一个锁处于被锁定状态，那么必须先执行unlock操作后面才能进行lock操作。")]),s._v(" "),n("p",[n("strong",[s._v("volatile变量规则")]),s._v("：这是一条比较重要的规则，它标志着volatile保证了线程可见性。通俗点讲就是如果一个线程先去写一个volatile变量，然后一个线程去读这个变量，那么这个写操作一定是happens-before读操作的。")]),s._v(" "),n("p",[n("strong",[s._v("传递规则")]),s._v("：提现了happens-before原则具有传递性，即A happens-before B , B happens-before C，那么A happens-before C")]),s._v(" "),n("p",[n("strong",[s._v("线程启动规则")]),s._v("：假定线程A在执行过程中，通过执行ThreadB.start()来启动线程B，那么线程A对共享变量的修改在接下来线程B开始执行后确保对线程B可见。")]),s._v(" "),n("p",[n("strong",[s._v("线程终结规则")]),s._v("：假定线程A在执行的过程中，通过制定ThreadB.join()等待线程B终止，那么线程B在终止之前对共享变量的修改在线程A等待返回后可见。")]),s._v(" "),n("p",[n("strong",[s._v("上面八条是原生Java满足Happens-before关系的规则，但是我们可以对他们进行推导出其他满足happens-before的规则")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("1.将一个元素放入一个线程安全的队列的操作Happens-Before从队列中取出这个元素的操作\n\n2.将一个元素放入一个线程安全容器的操作Happens-Before从容器中取出这个元素的操作\n\n3.在CountDownLatch上的倒数操作Happens-Before CountDownLatch#await()操作\n\n4.释放Semaphore许可的操作Happens-Before获得许可操作\n\n5.Future表示的任务的所有操作Happens-Before Future#get()操作\n\n6.向Executor提交一个Runnable或Callable的操作Happens-Before任务开始执行操作\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("这里再说一遍happens-before的概念："),n("strong",[s._v("如果两个操作不存在上述（前面8条 + 后面6条）任一一个happens-before规则，那么这两个操作就没有顺序的保障，JVM可以对这两个操作进行重排序。如果操作A happens-before操作B，那么操作A在内存上所做的操作对操作B都是可见的。")])]),s._v(" "),n("p",[s._v("下面就用一个简单的例子来描述下happens-before原则：")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("private int i = 0;\n \npublic void write(int j ){\n    i = j;\n}\n \npublic int read(){\n    return i;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("我们约定线程A执行write()，线程B执行read()，且线程A优先于线程B执行，那么线程B获得结果是什么？；我们就这段简单的代码一次分析happens-before的规则（规则5、6、7、8 + 推导的6条可以忽略，因为他们和这段代码毫无关系）：")]),s._v(" "),n("ul",[n("li",[s._v("由于两个方法是由不同的线程调用，所以肯定不满足程序次序规则；")]),s._v(" "),n("li",[s._v("两个方法都没有使用锁，所以不满足锁定规则；")]),s._v(" "),n("li",[s._v("变量i不是用volatile修饰的，所以volatile变量规则不满足；")]),s._v(" "),n("li",[s._v("传递规则肯定不满足；")])]),s._v(" "),n("p",[s._v("所以我们无法通过happens-before原则推导出线程A happens-before线程B，虽然可以确认在时间上线程A优先于线程B指定，但是就是无法确认线程B获得的结果是什么，所以这段代码不是线程安全的。那么怎么修复这段代码呢？满足规则2、3任一即可。")]),s._v(" "),n("p",[n("strong",[s._v("happens-before原则是JMM中非常重要的原则，它是判断数据是否存在竞争、线程是否安全的主要依据，保证了多线程环境下的可见性。")])])])}),[],!1,null,null,null);n.default=t.exports}}]);