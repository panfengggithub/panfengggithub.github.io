(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{759:function(n,s,a){"use strict";a.r(s);var e=a(1),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"semaphore-cyclicbarrier源码分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#semaphore-cyclicbarrier源码分析"}},[n._v("#")]),n._v(" "),s("strong",[n._v("Semaphore&CyclicBarrier源码分析")])]),n._v(" "),s("h3",{attrs:{id:"aqs的同步队列和条件队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aqs的同步队列和条件队列"}},[n._v("#")]),n._v(" AQS的同步队列和条件队列")]),n._v(" "),s("p",[n._v("AQS定义两种队列：")]),n._v(" "),s("ul",[s("li",[n._v("同步等待队列")]),n._v(" "),s("li",[n._v("条件等待队列")])]),n._v(" "),s("h4",{attrs:{id:"同步队列-clh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步队列-clh"}},[n._v("#")]),n._v(" 同步队列（CLH）")]),n._v(" "),s("p",[n._v("CLH 同步队列是一个 FIFO 双向队列，AQS 依赖它来完成同步状态的管理：")]),n._v(" "),s("ul",[s("li",[n._v("当前线程如果获取同步状态失败时，AQS则会将当前线程已经等待状态等信息构造成一个节点（Node）并将其加入到CLH同步队列，同时会阻塞当前线程")]),n._v(" "),s("li",[n._v("当同步状态释放时，会把首节点唤醒，使其再次尝试获取同步状态。")])]),n._v(" "),s("h5",{attrs:{id:"node节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node节点"}},[n._v("#")]),n._v(" Node节点")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("static final class Node {\n        // 节点分为两种模式： 共享式和独占式\n        /** 共享式 */\n        static final Node SHARED = new Node();\n        /** 独占式 */\n        static final Node EXCLUSIVE = null;\n\n        /**\n         * 因为超时或者中断，节点会被设置为取消状态，被取消的节点时不会参与到竞争中的，\n         * 他会一直保持取消状态不会转变为其他状态\n         */\n        static final int CANCELLED =  1;\n       /**\n         * 后继节点的线程处于等待状态，而当前节点的线程如果释放了同步状态或者被取消，\n         * 将会通知后继节点，使后继节点的线程得以运行\n         */\n        static final int SIGNAL    = -1;\n        /** 节点在等待队列中，节点线程等待在Condition上，当其他线程对Condition调用了signal()后，\n         * 该节点将会从等待队列中转移到同步队列中，加入到同步状态的获取中 \n         */\n        static final int CONDITION = -2;\n        /**\n         * 表示下一次共享式同步状态获取，将会无条件地传播下去\n         */\n        static final int PROPAGATE = -3;\n\n        /**等待状态*/\n        volatile int waitStatus;\n\n        /**前驱节点，当节点添加到同步队列时被设置（尾部添加） */\n        volatile Node prev;\n\n        /**后继节点*/\n        volatile Node next;\n\n        /**获取同步状态的线程 */\n        volatile Thread thread;\n\n        /**等待队列中的后续节点 */\n        Node nextWaiter;\n\n    }\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1601190352860-feed630f-bed6-4bb5-a262-fb086217641e.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_28%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),n._v(" "),s("h5",{attrs:{id:"入队操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入队操作"}},[n._v("#")]),n._v(" 入队操作")]),n._v(" "),s("p",[n._v("通过“自旋”也就是死循环的方式来保证该节点能顺利的加入到队列尾部，只有加入成功才会退出循环，否则会一直循序直到成功。")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("private Node addWaiter(Node mode) {\n// 以给定的模式来构建节点， mode有两种模式 \n//  共享式SHARED， 独占式EXCLUSIVE;\n  Node node = new Node(Thread.currentThread(), mode);\n    // 尝试快速将该节点加入到队列的尾部\n    Node pred = tail;\n     if (pred != null) {\n        node.prev = pred;\n            if (compareAndSetTail(pred, node)) {\n                pred.next = node;\n                return node;\n            }\n        }\n        // 如果快速加入失败，则通过 anq方式入列\n        enq(node);\n        return node;\n    }\n\nprivate Node enq(final Node node) {\n// CAS自旋，直到加入队尾成功        \nfor (;;) {\n    Node t = tail;\n        if (t == null) { // 如果队列为空，则必须先初始化CLH队列，新建一个空节点标识作为Hader节点,并将tail 指向它\n            if (compareAndSetHead(new Node()))\n                tail = head;\n            } else {// 正常流程，加入队列尾部\n                node.prev = t;\n                    if (compareAndSetTail(t, node)) {\n                        t.next = node;\n                        return t;\n                }\n            }\n        }\n    }\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1601190401897-632700d4-0f94-44aa-a2e4-36490f86eaae.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_28%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),n._v(" "),s("h5",{attrs:{id:"出队操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出队操作"}},[n._v("#")]),n._v(" 出队操作")]),n._v(" "),s("p",[n._v("同步队列（CLH）遵循FIFO，首节点是获取同步状态的节点，首节点的线程释放同步状态后，将会唤醒它的后继节点（next），而后继节点将会在获取同步状态成功时将自己设置为首节点")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("private void setHead(Node node) {\n    head = node;\n    node.thread = null;\n    node.prev = null;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1601190451492-3c0f37f9-9089-4742-9871-e503692b5be0.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_28%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),n._v(" "),s("h4",{attrs:{id:"condition队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#condition队列"}},[n._v("#")]),n._v(" Condition队列")]),n._v(" "),s("p",[n._v("Condition 将 Object 监视器方法（wait、notify 和 notifyAll）分解成截然不同的对象，以便通过将这些对象与任意 Lock 实现组合使用，为每个对象提供多个等待 set（wait-set）。其中，Lock 替代了 synchronized 方法和语句的使用，Condition 替代了 Object 监视器方法的使用。")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("// ========== 阻塞 ==========   \n// 造成当前线程在接到信号或被中断之前一直处于等待状态。\nvoid await() throws InterruptedException; \n// 造成当前线程在接到信号之前一直处于等待状态。\nvoid awaitUninterruptibly(); \n// 造成当前线程在接到信号、被中断或到达指定等待时间之前一直处于等待状态。返回值表示剩余时间，\n// 如果在`nanosTimeout` 之前唤醒，那么返回值 `= nanosTimeout - 消耗时间` ，如果返回值 `<= 0` ,\n//则可以认定它已经超时了。\nlong awaitNanos(long nanosTimeout) throws InterruptedException; \n// 造成当前线程在接到信号、被中断或到达指定等待时间之前一直处于等待状态。\nboolean await(long time, TimeUnit unit) throws InterruptedException; \n// 造成当前线程在接到信号、被中断或到达指定最后期限之前一直处于等待状态。如果没有到指定时间就被通知，则返回 // true ，否则表示到了指定时间，返回返回 false 。\nboolean awaitUntil(Date deadline) throws InterruptedException; \n// ========== 唤醒 ==========\n// 唤醒一个等待线程。该线程从等待方法返回前必须获得与Condition相关的锁。 pthread_cond_signal\nvoid signal(); \n// 唤醒所有等待线程。能够从等待方法返回的线程必须获得与Condition相关的锁。\nvoid signalAll(); \n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[n._v("AQS内部定义了ConditionObject")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("public class ConditionObject implements Condition, java.io.Serializable {    \n    /** First node of condition queue. */    \n    private transient Node firstWaiter; // 头节点    \n    /** Last node of condition queue. */    \n    private transient Node lastWaiter; // 尾节点        \n    public ConditionObject() {    }    // ... 省略内部代码\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("p",[n._v("AQS 等待队列与 Condition 队列是"),s("strong",[n._v("两个相互独立的队列")])]),n._v(" "),s("ul",[s("li",[s("code",[n._v("#await()")]),n._v(" 就是在当前线程持有锁的基础上释放锁资源，并新建 Condition 节点加入到 Condition 的队列尾部，阻塞当前线程 。")]),n._v(" "),s("li",[s("code",[n._v("#signal()")]),n._v(" 就是将 Condition 的头节点移动到 AQS 等待队列节点尾部，让其等待再次获取锁。")])]),n._v(" "),s("h5",{attrs:{id:"条件队列和同步队列的转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件队列和同步队列的转换"}},[n._v("#")]),n._v(" 条件队列和同步队列的转换")]),n._v(" "),s("ul",[s("li",[s("strong",[n._v("初始化状态")]),n._v("：AQS等待队列有 3 个Node，Condition 队列有 1 个Node(也有可能 1 个都没有)")])]),n._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1601190559440-b69ea6a3-b83e-49b2-a0f0-bc9ac1a24854.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),n._v(" "),s("p",[s("strong",[n._v("节点1执行 Condition.await()")])]),n._v(" "),s("ol",[s("li",[n._v("将 head 后移")]),n._v(" "),s("li",[n._v("释放节点 1 的锁并从 AQS 等待队列中移除")]),n._v(" "),s("li",[n._v("将节点 1 加入到 Condition 的等待队列中")]),n._v(" "),s("li",[n._v("更新 lastWaiter 为节点 1")])]),n._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1601190586813-6d272698-2a72-4ec8-bac0-5c36dac936df.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),n._v(" "),s("p",[s("strong",[n._v("节点 2 执行 Condition.signal() 操作")])]),n._v(" "),s("ol",[s("li",[n._v("将 firstWaiter后移")]),n._v(" "),s("li",[n._v("将节点 4 移出 Condition 队列")]),n._v(" "),s("li",[n._v("将节点 4 加入到 AQS 的等待队列中去")]),n._v(" "),s("li",[n._v("更新 AQS 的等待队列的 tail")])]),n._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1601190611622-a0053d56-7efa-4c99-aaa1-94502a7dffb3.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_28%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),n._v(" "),s("h5",{attrs:{id:"入队操作-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入队操作-2"}},[n._v("#")]),n._v(" 入队操作")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("public final void await() throws InterruptedException {\n    // 当前线程中断\n    if (Thread.interrupted())\n        throw new InterruptedException();\n    //当前线程加入等待队列\n    Node node = addConditionWaiter();\n    //释放锁\n    long savedState = fullyRelease(node);\n    int interruptMode = 0;\n    /**\n     * 检测此节点的线程是否在同步队上，如果不在，则说明该线程还不具备竞争锁的资格，则继续等待\n     * 直到检测到此节点在同步队列上\n     */\n    while (!isOnSyncQueue(node)) {\n        //线程挂起\n        LockSupport.park(this);\n        //如果已经中断了，则退出\n        if ((interruptMode = checkInterruptWhileWaiting(node)) != 0)\n            break;\n    }\n    //竞争同步状态\n    if (acquireQueued(node, savedState) && interruptMode != THROW_IE)\n        interruptMode = REINTERRUPT;\n    // 清理下条件队列中的不是在等待条件的节点\n    if (node.nextWaiter != null) // clean up if cancelled\n        unlinkCancelledWaiters();\n    if (interruptMode != 0)\n        reportInterruptAfterWait(interruptMode);\n}\nprivate Node addConditionWaiter() {\n    Node t = lastWaiter;    //尾节点\n    //Node的节点状态如果不为CONDITION，则表示该节点不处于等待状态，需要清除节点\n    if (t != null && t.waitStatus != Node.CONDITION) {\n        //清除条件队列中所有状态不为Condition的节点\n        unlinkCancelledWaiters();\n        t = lastWaiter;\n    }\n    //当前线程新建节点，状态 CONDITION\n    Node node = new Node(Thread.currentThread(), Node.CONDITION);\n    /**\n     * 将该节点加入到条件队列中最后一个位置\n     */\n    if (t == null)\n        firstWaiter = node;\n    else\n        t.nextWaiter = node;\n    lastWaiter = node;\n    return node;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br")])]),s("h5",{attrs:{id:"出队操作-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出队操作-2"}},[n._v("#")]),n._v(" 出队操作")]),n._v(" "),s("p",[n._v("调用 ConditionObject的 "),s("code",[n._v("#signal()")]),n._v(" 方法，将会唤醒在等待队列中等待最长时间的节点（条件队列里的首节点），在唤醒节点前，会将节点移到CLH同步队列中。")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("public final void signal() {\n    //检测当前线程是否为拥有锁的独\n    if (!isHeldExclusively())\n        throw new IllegalMonitorStateException();\n    //头节点，唤醒条件队列中的第一个节点\n    Node first = firstWaiter;\n    if (first != null)\n        doSignal(first);    //唤醒\n}\n\nprivate void doSignal(Node first) {\n    do {\n        //修改头结点，完成旧头结点的移出工作\n        if ( (firstWaiter = first.nextWaiter) == null)\n            lastWaiter = null;\n        first.nextWaiter = null;\n    } while (!transferForSignal(first) &&\n            (first = firstWaiter) != null);\n}\n\n final boolean transferForSignal(Node node) {\n    //将该节点从状态CONDITION改变为初始状态0,\n    if (!compareAndSetWaitStatus(node, Node.CONDITION, 0))\n        return false;\n\n    //将节点加入到CLH 同步队列中去，返回的是CLH 同步队列中node节点前面的一个节点\n    Node p = enq(node);\n    int ws = p.waitStatus;\n    //如果结点p的状态为cancel 或者修改waitStatus失败，则直接唤醒\n    if (ws > 0 || !compareAndSetWaitStatus(p, ws, Node.SIGNAL))\n        LockSupport.unpark(node.thread);\n    return true;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);