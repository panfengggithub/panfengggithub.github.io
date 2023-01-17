(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{704:function(v,_,t){"use strict";t.r(_);var a=t(1),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"深入理解synchronized"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#深入理解synchronized"}},[v._v("#")]),v._v(" 深入理解synchronized")]),v._v(" "),_("p",[v._v("应用场景： 解决线程安全问题")]),v._v(" "),_("p",[v._v("加锁： 序列化的访问临界资源")]),v._v(" "),_("p",[v._v("java中的实现 :    阻塞： synchronized reentrantLock")]),v._v(" "),_("p",[v._v("​                            非阻塞：  cas+自旋")]),v._v(" "),_("h1",{attrs:{id:"synchronized的使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#synchronized的使用"}},[v._v("#")]),v._v(" "),_("a",{attrs:{href:"#3460-1631601809082"}},[v._v("synchronized的使用")])]),v._v(" "),_("p",[v._v("方式：  方法上    代码块中    （锁对象）")]),v._v(" "),_("h2",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[v._v("#")]),v._v(" 原理")]),v._v(" "),_("p",[v._v("jvm指令：  方法上（acc_synchronized ）  代码块（ monitorenter monitorexit）")]),v._v(" "),_("p",[v._v("管程（Monitor): java锁体系的设计思想，设计理论基础")]),v._v(" "),_("p",[v._v("MESA：  入口等待队列 （互斥）     多个条件队列 （同步    阻塞唤醒机制）")]),v._v(" "),_("p",[v._v("java实现monitor:    Object     wait/notify/notifyAll     重量级操作 ： （用户态到内核态的切换）")]),v._v(" "),_("p",[v._v("优化： 重量级锁     偏向锁   轻量级锁")]),v._v(" "),_("p",[v._v("偏向锁： 不存在竞争       偏向某个线程     thread1,后续进入同步块的逻辑没有加锁解锁的开销")]),v._v(" "),_("p",[v._v("轻量级锁： 线程间存在轻微的竞争（线程交替执行，临界区逻辑简单）  CAS获取锁，失败膨胀")]),v._v(" "),_("p",[v._v("重量级锁：  多线程竞争激烈的场景     膨胀期间创建一个monitor对象      CAS自旋     阻塞")]),v._v(" "),_("p",[v._v("加锁/解锁      加锁解锁的标记    识别是哪种锁（锁状态）")]),v._v(" "),_("p",[v._v("synchronized加锁加在对象上，锁对象是如何记录锁状态的？")]),v._v(" "),_("p",[_("strong",[v._v("对象的内存布局")]),v._v("          MarkWord")]),v._v(" "),_("p",[_("img",{attrs:{src:"G:%5C%E6%88%91%E7%9A%84%E6%96%87%E6%A1%A3%5C%E4%BA%91%E7%AC%94%E8%AE%B0%5Cchaosbead@163.com(1)%5C1a5af8281c1a40e9ab664a285a4307a5%5Cclipboard.png",alt:"img"}})]),v._v(" "),_("p",[v._v("跟踪锁状态如何变化的？")]),v._v(" "),_("p",[v._v("误区：")]),v._v(" "),_("p",[v._v("关于偏向锁轻量级锁重量级锁存在的理解误区:")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("无锁——>偏向锁——>轻量级锁——>重量级2锁       （不存在无锁——>偏向锁）")]),v._v(" "),_("p",[v._v("2.轻量级锁自旋获取锁失败，会膨胀升级为重量级锁             （轻量级锁不存在自旋）")])]),v._v(" "),_("li",[_("p",[v._v("重量级锁不存在自旋     （重量级锁存在自旋 ）")])])]),v._v(" "),_("p",[v._v("jvm对synchronized的优化")]),v._v(" "),_("p",[v._v("针对偏向锁（偏向锁撤销存在性能问题）  批量重偏向  批量撤销")]),v._v(" "),_("p",[v._v("针对重量级锁 ：  自旋优化  自适应自旋")]),v._v(" "),_("p",[v._v("锁粗化， 锁消除")])])}),[],!1,null,null,null);_.default=r.exports}}]);