(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{768:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"【-并发编程】aqs-lock详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【-并发编程】aqs-lock详解"}},[s._v("#")]),s._v(" "),a("strong",[s._v("【 并发编程】AQS&Lock详解")])]),s._v(" "),a("h1",{attrs:{id:"java中的锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java中的锁"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Java中的锁")])]),s._v(" "),a("p",[s._v("在Java中，多线程的情况下需要锁来保证数据的安全，锁一般分为两类：sychronized 和 Lock。")]),s._v(" "),a("ul",[a("li",[s._v("sychronized利用的是"),a("strong",[s._v("指令级")]),s._v("别的monitor-enter 和 monitor-exit。")]),s._v(" "),a("li",[s._v("Lock 使用的则是"),a("strong",[s._v("代码级")]),s._v("别实现的。在Doug Lea大神的操刀下利用CAS + 自旋 + volatile变量实现。")])]),s._v(" "),a("p",[s._v("而在实现之后，并且抽象出了一个实现锁的基础类AbstractQueuedSynchronizer，通过这个类可以快速的实现符合自己要求的锁。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2546845/1600061013250-bfb22bb7-59c3-4ff2-846a-b33e7c196de5.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_39%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("h1",{attrs:{id:"aqs的内部实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aqs的内部实现"}},[s._v("#")]),s._v(" "),a("strong",[s._v("AQS的内部实现")])]),s._v(" "),a("p",[s._v("Java并发编程的核心在于java.util.concurrent包。而juc当中大多数同步器实现都是围绕着共同的基础行为，比如等待队列、条件队列、独占获取、共享获取等，而这个行为的抽象就是基于AbstractQueuedSynchronizer，简称AQS。AQS定义了一套多线程访问共享资源的同步器框架，是一个依赖状态（state）的同步器。")]),s._v(" "),a("p",[s._v("AQS具备特性：")]),s._v(" "),a("ul",[a("li",[s._v("阻塞等待队列")]),s._v(" "),a("li",[s._v("共享/独占")]),s._v(" "),a("li",[s._v("公平/非公平")]),s._v(" "),a("li",[s._v("可重入")]),s._v(" "),a("li",[s._v("允许中断")])]),s._v(" "),a("p",[s._v("这些特性是怎么实现的，"),a("strong",[s._v("以****ReentrantLock为例")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("一般通过定义内部类Sync [sɪŋk] 继承AQS")]),s._v(" "),a("li",[s._v("将同步器所有调用都映射到Sync对应的方法")])]),s._v(" "),a("h2",{attrs:{id:"aqs框架-管理状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aqs框架-管理状态"}},[s._v("#")]),s._v(" "),a("strong",[s._v("AQS框架 - 管理状态")])]),s._v(" "),a("ol",[a("li",[s._v("AQS内部维护属性：volatile int state（32位）\nstate表示资源的可用状态")]),s._v(" "),a("li",[s._v("state三种访问方式\ngetState()、setState()、compareAndSetState()")]),s._v(" "),a("li",[s._v("AQS定义两种资源共享方式\nExclusive 独占，只有一个线程能执行，如ReetrantLock\nShare 共享，多个线程可以同时执行，如Semaphore/CountDownLatch")]),s._v(" "),a("li",[s._v("AQS定义两种队列\n● 同步等待队列\n● 条件等待队列")])]),s._v(" "),a("h2",{attrs:{id:"node类介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node类介绍"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Node类介绍")])]),s._v(" "),a("p",[a("strong",[s._v("重要属性")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//共享模式，资源可以同时去拿")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SHARED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//独占模式，只能有一个线程去拿")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EXCLUSIVE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//表示当前线程被中断了，在队列中没有任何意义，可以被剔除了")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CANCELLED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 后继节点的线程处于等待状态，而当前节点如果释放了同步状态或者被取消，\n     * 将会通知后继节点，使后继节点得以运行\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SIGNAL")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 节点在等待队列中，节点的线程等待在Condition上，当其他线程对Condition调用了signal()方法后，\n     * 该节点会从等待队列中转移到同步队列中，加入到同步状态的获取中\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CONDITION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 表示下一次共享方式同步状态获取将会被无条件的传播下去\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PROPAGATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 标记当前节点的信号量状态（1,0,-1,-2,-3）5种状态\n     * 使用CAS更改状态，volatile保证线程可见性，并发场景下，\n     * 即被一个线程修改后，状态会立马让其他线程可见\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" waitStatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 前驱节点，当前节点加入到同步队列中被设置\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 后继节点\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 节点同步状态的线程\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 等待队列中的后继节点，如果当前节点是共享的，那么这个字段是一个SHARED常量\n     * 也就是说节点类型（独占和共享）和等待队列中的后继节点公用一个字段\n     * （用在条件队列里面）\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" nextWaiter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br")])]),a("h2",{attrs:{id:"reentrantlock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reentrantlock"}},[s._v("#")]),s._v(" "),a("strong",[s._v("ReentrantLock")])]),s._v(" "),a("p",[a("strong",[s._v("同步队列")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2546845/1600062677347-a951cdb2-c5da-4167-b7c1-16fc5094b854.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_34%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[a("strong",[s._v("加锁解锁过程")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2546845/1600064405720-e59a73e1-7d3a-436f-a0a6-b46b58853267.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_44%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);