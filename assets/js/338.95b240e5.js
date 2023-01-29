(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{752:function(t,a,s){"use strict";s.r(a);var r=s(1),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"并发编程之内置锁synchronized底层原理剖析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发编程之内置锁synchronized底层原理剖析"}},[t._v("#")]),t._v(" "),a("strong",[t._v("并发编程之内置锁synchronized底层原理剖析")])]),t._v(" "),a("h2",{attrs:{id:"jvm线程调度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm线程调度"}},[t._v("#")]),t._v(" "),a("strong",[t._v("JVM线程调度")])]),t._v(" "),a("p",[t._v("JVM线程调度：依赖JVM内部实现，主要是Native thread scheduling，是依赖操作系统的，所以java也不能完全是跨平台独立的，对线程调度处理非常敏感的业务开发必须关注底层操作系统的线程调度差异。")]),t._v(" "),a("p",[t._v("Green Thread Schedule 或者叫用户级线程（User Level Thread，ULT）：操作系统内核不知道应用线程的存在。")]),t._v(" "),a("p",[t._v("Native thread scheduling 或者 内核级线程（Kernel Level Thread ，KLT）：它们是依赖于内核的，即无论是用户进程中的线程，还是系统进程中的线程，它们的创建、撤消、切换都由内核实现。")]),t._v(" "),a("h2",{attrs:{id:"java线程与内核线程关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java线程与内核线程关系"}},[t._v("#")]),t._v(" Java线程与内核线程关系")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600610730987-37b26431-5284-439c-9471-ef93a188c2e7.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_22%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"线程的创建和启动流程源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程的创建和启动流程源码分析"}},[t._v("#")]),t._v(" 线程的创建和启动流程源码分析")]),t._v(" "),a("p",[t._v("思考：线程执行为什么不能直接调用run()方法,而要调用start()方法？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1446391/1600605725843-cc517295-e66d-47d7-92fa-bbfacf5d589e.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_98%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"java线程的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java线程的生命周期"}},[t._v("#")]),t._v(" Java线程的生命周期")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600607178184-3aea2111-dd0a-4313-aadf-4f38d37ed5df.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_23%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"java锁体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java锁体系"}},[t._v("#")]),t._v(" Java锁体系")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1446391/1600678270719-f8ec1d10-dd6d-4ce6-8fbd-b3183f09a69a.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_52%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"synchronized加锁方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized加锁方式"}},[t._v("#")]),t._v(" Synchronized加锁方式")]),t._v(" "),a("ul",[a("li",[t._v("同步实例方法，锁是当前实例对象")]),t._v(" "),a("li",[t._v("同步类方法，锁是当前类对象")]),t._v(" "),a("li",[t._v("同步代码块，锁是括号里面的对象")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600610968385-96b454a8-b4aa-4677-9ea8-31c4fdcd4d8f.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_23%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"synchronized原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized原理"}},[t._v("#")]),t._v(" Synchronized原理")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("互斥性")]),t._v(" ：Synchronized修饰的代码块、实例方法、静态方法，多线程并发访问时，只能有一个线程获取到锁，其它线程都处于阻塞等待")]),t._v(" "),a("li",[a("strong",[t._v("可见性")]),t._v("： 某线程 A 对于进入 同步块之前或在 synchronized 中对于共享变量的操作，对于后续的持有同一个监视器锁的其他线程可见")])]),t._v(" "),a("h3",{attrs:{id:"重量级锁底层原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重量级锁底层原理"}},[t._v("#")]),t._v(" 重量级锁底层原理：")]),t._v(" "),a("p",[t._v("同步方法和同步代码块底层都是通过monitor来实现同步的。每个对象都与一个monitor相关联。")]),t._v(" "),a("p",[t._v("同步方法是通过方法中的access_flags中设置ACC_SYNCHRONIZED标志来实现；同步代码块是通过monitorenter和monitorexit来实现。两个指令的执行是JVM通过调用操作系统的互斥原语mutex来实现，被阻塞的线程会被挂起、等待重新调度，会导致“用户态和内核态”两个态之间来回切换，对性能有较大影响。")]),t._v(" "),a("h3",{attrs:{id:"synchronized优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized优化"}},[t._v("#")]),t._v(" Synchronized优化")]),t._v(" "),a("p",[t._v("从JDK6开始，就对synchronized的实现机制进行了较大调整，包括使用JDK5引进的CAS自旋之外，还增加了自适应的CAS自旋、锁消除、锁粗化、偏向锁、轻量级锁这些优化策略。在 JDK 1.6 中默认是开启偏向锁的，可以通过-XX:-UseBiasedLocking来禁用偏向锁。使用-XX:-UseSpinning参数关闭自旋锁优化；-XX:PreBlockSpin参数修改默认的自旋次数。")]),t._v(" "),a("p",[t._v("偏向锁：无实际竞争，且将来只有第一个申请锁的线程会使用锁。")]),t._v(" "),a("p",[t._v("轻量级锁：无实际竞争，多个线程交替使用锁；允许短时间的锁竞争。")]),t._v(" "),a("p",[t._v("重量级锁：有实际竞争，且锁竞争时间长。")]),t._v(" "),a("h2",{attrs:{id:"monitor机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitor机制"}},[t._v("#")]),t._v(" Monitor机制")]),t._v(" "),a("h3",{attrs:{id:"monitor概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitor概念"}},[t._v("#")]),t._v(" Monitor概念")]),t._v(" "),a("p",[t._v("管程，监视器。在操作系统中，存在着semaphore和mutex，即信号量和互斥量，使用基本的mutex进行开发时，需要小心的使用mutex的down和up操作，否则容易引发死锁问题。为了更好的编写并发程序，在mutex和semaphore基础上，提出了更高层次的同步原语，实际上，monitor属于编程语言的范畴，C语言不支持monitor，而java支持monitor机制。")]),t._v(" "),a("p",[t._v("一个重要特点是，在同一时间，只有一个线程/进程能进入monitor所定义的临界区，这使得monitor能够实现互斥的效果。无法进入monitor的临界区的进程/线程，应该被阻塞，并且在适当的时候被唤醒。显然，monitor作为一个同步工具，也应该提供这样管理线程/进程的机制。")]),t._v(" "),a("h3",{attrs:{id:"monitor基本元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitor基本元素"}},[t._v("#")]),t._v(" Monitor基本元素")]),t._v(" "),a("ul",[a("li",[t._v("临界区")]),t._v(" "),a("li",[t._v("monitor对象和锁")]),t._v(" "),a("li",[t._v("条件变量以及定义在monitor对象上的wait，signal操作")])]),t._v(" "),a("p",[t._v("使用monitor主要是为了互斥进入临界区，为了能够阻塞无法进入临界区的进程，线程，需要一个monitor object来协助，这个object内部会有相应的数据结构，例如列表，用来保存被阻塞的线程；同时由于monitor机制本质是基于mutex原语的，所以object必须维护一个基于mutex的锁。")]),t._v(" "),a("h3",{attrs:{id:"临界区的圈定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#临界区的圈定"}},[t._v("#")]),t._v(" 临界区的圈定")]),t._v(" "),a("p",[t._v("被synchronized关键字修饰的方法，代码块，就是monitor机制的临界区")]),t._v(" "),a("h3",{attrs:{id:"monitor-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitor-object"}},[t._v("#")]),t._v(" Monitor object")]),t._v(" "),a("p",[t._v("java.lang.Object 类定义了 wait()，notify()，notifyAll() 方法，这些方法的具体实现，依赖于一个叫 ObjectMonitor 模式的实现，这是 JVM 内部基于 C++ 实现的一套机制")]),t._v(" "),a("p",[t._v("monitor 的机制中，monitor object 充当着维护 mutex以及定义 wait/signal API 来管理线程的阻塞和唤醒的角色。任何一个 Java 对象都可以作为 monitor 机制的 monitor object")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600611471441-43c34138-7d94-4ca6-ac85-b0588ad03eb1.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("p",[t._v("当一个线程需要获取 Object 的锁时，会被放入 EntrySet 中进行等待，如果该线程获取到了锁，成为当前锁的 owner。如果根据程序逻辑，一个已经获得了锁的线程缺少某些外部条件，而无法继续进行下去（例如生产者发现队列已满或者消费者发现队列为空），那么该线程可以通过调用 wait 方法将锁释放，进入 wait set 中阻塞进行等待，其它线程在这个时候有机会获得锁，去干其它的事情，从而使得之前不成立的外部条件成立，这样先前被阻塞的线程就可以重新进入 EntrySet 去竞争锁。这个外部条件在 monitor 机制中称为条件变量。")]),t._v(" "),a("h2",{attrs:{id:"synchronized锁升级过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized锁升级过程"}},[t._v("#")]),t._v(" Synchronized锁升级过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600678414490-918be966-7e5f-4789-a6ec-98e9a9c22d69.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_110%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1446391/1600678457495-33d71b63-4c70-45e9-a899-6fe5c0bfcb1f.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_65%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),a("p",[t._v("进程，直观点说，保存在硬盘上的程序运行以后，会在内存空间里形成一个独立的内存体，这个内存体"),a("strong",[t._v("有自己独立的地址空间，有自己的堆")]),t._v("，上级挂靠单位是操作系统。**操作系统会以进程为单位，分配系统资源（CPU时间片、内存等资源），**"),a("strong",[t._v("进程是资源分配的最小单位")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),a("p",[t._v("**线程，有时被称为轻量级进程(Lightweight Process，LWP），**"),a("strong",[t._v("是操作系统调度（CPU调度）执行的最小单位")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"进程和线程的区别与联系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程的区别与联系"}},[t._v("#")]),t._v(" 进程和线程的区别与联系")]),t._v(" "),a("p",[t._v("【区别】：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("调度")]),t._v("："),a("strong",[t._v("线程作为调度和分配的基本单位，进程作为拥有资源的基本单位")]),t._v("；")]),t._v(" "),a("li",[a("strong",[t._v("并发性")]),t._v("："),a("strong",[t._v("不仅进程之间可以并发执行，同一个进程的多个线程之间也可并发执行")]),t._v("；")]),t._v(" "),a("li",[a("strong",[t._v("拥有资源")]),t._v("："),a("strong",[t._v("进程是拥有资源的一个独立单位，线程不拥有系统资源")]),t._v("，但可以访问隶属于进程的资源。进程所维护的是程序所包含的资源（静态资源）， 如："),a("strong",[t._v("地址空间，打开的文件句柄集，文件系统状态，信号处理handler等")]),t._v("；线程所维护的运行相关的资源（动态资源），如："),a("strong",[t._v("运行栈，调度相关的控制信息，待处理的信号集等")]),t._v("；")]),t._v(" "),a("li",[a("strong",[t._v("系统开销")]),t._v("：在创建或撤消进程时，由于系统都要为之分配和回收资源，导致系统的开销明显大于创建或撤消线程时的开销。但是进程有独立的地址空间，一个进程崩溃后，在保护模式下不会对其它进程产生影响，而线程只是一个进程中的不同执行路径。线程有自己的堆栈和局部变量，但线程之间没有单独的地址空间，一个进程死掉就等于所有的线程死掉，所以"),a("strong",[t._v("多进程的程序要比多线程的程序健壮，但在进程切换时，耗费资源较大，效率要差一些")]),t._v("。")])]),t._v(" "),a("p",[t._v("【联系】：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程")]),t._v("；")]),t._v(" "),a("li",[t._v("资源分配给进程，同一进程的所有线程共享该进程的所有资源；")]),t._v(" "),a("li",[t._v("处理机分给线程，即"),a("strong",[t._v("真正在处理机上运行的是线程")]),t._v("；")]),t._v(" "),a("li",[t._v("线程在执行过程中，需要协作同步。不同进程的线程间要利用消息通信的办法实现同步。")])]),t._v(" "),a("h2",{attrs:{id:"协程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协程"}},[t._v("#")]),t._v(" 协程")]),t._v(" "),a("p",[t._v("协程，英文Coroutines, 是一种基于线程之上，但又比线程更加轻量级的存在，协程不是被操作系统内核所管理，而完全是由程序所控制（也就是在用户态执行），具有对内核来说不可见的特性。这样带来的好处就是性能得到了很大的提升，不会像线程切换那样消耗资源。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1446391/1600435882120-30c43924-ec43-4b89-b2df-031b66780214.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_21%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("p",[t._v("子程序，或者称为函数，在所有语言中都是层级调用，比如A调用B，B在执行过程中又调用了C，C执行完毕返回，B执行完毕返回，最后是A执行完毕。而协程的调用和子程序不同。"),a("strong",[t._v("协程在子程序内部是可中断的，然后转而执行别的子程序，在适当的时候再返回来接着执行")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("def A():\n    print '1'\n    print '2'\n    print '3'\ndef B():\n    print 'x'\n    print 'y'\n    print 'z'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("假设由协程执行，在执行A的过程中，可以随时中断，去执行B，B也可能在执行过程中中断再去执行A，结果可能是："),a("code",[t._v("1 2 x y 3 z")]),t._v("。")]),t._v(" "),a("p",[t._v("协程的特点在于是一个线程执行，那和多线程比，协程有何优势？")]),t._v(" "),a("ul",[a("li",[t._v("线程的切换由操作系统调度，协程由用户自己进行调度，因此减少了上下文切换，提高了效率。")]),t._v(" "),a("li",[t._v("线程的默认stack大小是1M，而协程更轻量，接近1k。因此可以在相同的内存中开启更多的协程。")]),t._v(" "),a("li",[a("strong",[t._v("不需要多线程的锁机制")]),t._v("：因为只有一个线程，也不存在同时写变量冲突，"),a("strong",[t._v("在协程中控制共享资源不加锁")]),t._v("，只需要判断状态就好了，所以执行效率比多线程高很多。")])]),t._v(" "),a("p",[t._v("注意： 协程适用于被阻塞的，且需要大量并发的场景（网络io）。不适合大量计算的场景。")])])}),[],!1,null,null,null);a.default=_.exports}}]);