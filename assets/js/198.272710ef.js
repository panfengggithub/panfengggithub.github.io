(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{612:function(_,a,e){"use strict";e.r(a);var v=e(1),t=Object(v.a)({},(function(){var _=this,a=_._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"强软弱虚引用与垃圾收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强软弱虚引用与垃圾收集器"}},[_._v("#")]),_._v(" "),a("strong",[_._v("强软弱虚引用与垃圾收集器")])]),_._v(" "),a("p",[_._v("上节课的算法如果理解得比较深刻，那这阶段学完就会有种开悟的感觉")]),_._v(" "),a("h2",{attrs:{id:"强软弱虚引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强软弱虚引用"}},[_._v("#")]),_._v(" 强软弱虚引用")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/2179815/1597381953375-3a763ad2-6369-4a37-9080-f782817c598a.gif",alt:"img"}})]),_._v(" "),a("p",[_._v("1、强引用")]),_._v(" "),a("p",[_._v("我们平时写的代码如Test obj = new Test()；这种引用关系就是强引用")]),_._v(" "),a("p",[_._v("就算会OOM也不会回收")]),_._v(" "),a("p",[_._v("2、软引用")]),_._v(" "),a("p",[_._v("内存不足的情况下才会回收")]),_._v(" "),a("p",[_._v("如果发生了gc但是内存充足，依然不会回收")]),_._v(" "),a("p",[_._v("3、弱引用")]),_._v(" "),a("p",[_._v("只有发生gc就会回收")]),_._v(" "),a("p",[_._v("4、虚引用")]),_._v(" "),a("p",[_._v("形同虚设，与其他几种引用都不同，虚引用并不会决定对象的生命周期。如果一个对象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收。 虚引用主要用来跟踪对象被垃圾回收的活动。虚引用与软引用和弱引用的一个区别在于：虚引用必须和引用队列（ReferenceQueue）联合使用。当垃圾回收器准备回收一个对象时，如果发现它还有虚引用，就会在回收对象的内存之前，把这个虚引用加入到与之关联的引用队列中。程序可以通过判断引用队列中是否已经加入了虚引用，来了解被引用的对象是否将要被垃圾回收。程序如果发现某个虚引用已经被加入到引用队列，那么就可以在所引用的对象的内存被回收之前采取必要的行动。")]),_._v(" "),a("h2",{attrs:{id:"串行、并行、并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#串行、并行、并发"}},[_._v("#")]),_._v(" 串行、并行、并发")]),_._v(" "),a("p",[_._v("串行：一个GC线程运行")]),_._v(" "),a("p",[_._v("并行：多个GC线程同时运行")]),_._v(" "),a("p",[_._v("并发：多个GC线程与多个用户线程同时运行")]),_._v(" "),a("h2",{attrs:{id:"stw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stw"}},[_._v("#")]),_._v(" STW")]),_._v(" "),a("p",[_._v("Stop The World。即GC线程与用户线程无法并发运行，GC线程执行期间需要暂停用户线程。")]),_._v(" "),a("p",[_._v("比如：你妈给你打扫房间，需要把你从房间赶出去，不然她一般打扫垃圾，你一边制造垃圾，没完没了了。那接下来可能要家法伺候了。")]),_._v(" "),a("h2",{attrs:{id:"垃圾收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器"}},[_._v("#")]),_._v(" 垃圾收集器")]),_._v(" "),a("p",[_._v("目前JVM中的收集器有九种，了解5个，详解2个。因为并发、分区管理式的收集器才是未来的趋势。")]),_._v(" "),a("p",[_._v("注意：标记阶段标记的是存活对象，回收未被标记的对象。")]),_._v(" "),a("h4",{attrs:{id:"_1、serial收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、serial收集器"}},[_._v("#")]),_._v(" 1、Serial收集器")]),_._v(" "),a("p",[_._v("串行垃圾收集器，即GC线程与用户线程先后运行，即GC时需要STW（暂停所有用户线程），直至GC结束才恢复用户线程的运行")]),_._v(" "),a("p",[_._v("专注于收集年轻代，底层是复制算法")]),_._v(" "),a("p",[_._v("相关参数：-XX:+UseSerialGC")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1596767934522-f9b8c083-df46-40df-bb65-0341102a1769.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),a("h4",{attrs:{id:"_2、parnew收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、parnew收集器"}},[_._v("#")]),_._v(" 2、ParNew收集器")]),_._v(" "),a("p",[_._v("Serial收集器的多线程版本。唯一能与CMS收集器搭配使用的新生代收集器。")]),_._v(" "),a("p",[_._v("相关参数：")]),_._v(" "),a("p",[_._v("-XX:+UseConcMarkSweepGC：指定使用CMS后，会默认使用ParNew作为新生代收集器")]),_._v(" "),a("p",[_._v("-XX:+UseParNewGC：强制指定使用ParNew")]),_._v(" "),a("p",[_._v("-XX:ParallelGCThreads：指定垃圾收集的线程数量，ParNew默认开启的收集线程与CPU的数量相同")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/2179815/1597296988409-d8772d9e-4c82-4e72-97ca-ea4bb8f49188.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_36%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),a("h4",{attrs:{id:"_3、parallel收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、parallel收集器"}},[_._v("#")]),_._v(" 3、Parallel收集器")]),_._v(" "),a("p",[_._v("关注吞吐量的收集器")]),_._v(" "),a("p",[_._v("吞吐量 = 运行用户代码时间 / (运行用户代码时间+垃圾收集时间)")]),_._v(" "),a("p",[_._v("相关参数：")]),_._v(" "),a("ul",[a("li",[_._v("-XX:MaxGCPauseMillis：是一个大于0的毫秒数，收集器将尽力保证内存回收花费的时间不超过设定值。不过大家不要异想天开地认为如果把这个参数的值设置得稍小一点就能使得系统的垃圾收集速度变得更快，GC停顿时间缩短是以牺牲吞吐量和新生代空间来换取的：系统把新生代调小一些，收集300MB新生代肯定比收集500MB快吧，这也直接导致垃圾收集发生得更频繁一些，原来10秒收集一次、每次停顿100毫秒，现在变成5秒收集一次、每次停顿70毫秒。停顿时间的确在下降，但吞吐量也降下来了。")]),_._v(" "),a("li",[_._v("-XX:GCTimeRatio：一个大于0小于100的整数，也就是垃圾收集时间占总时间的比率。如果把此参数设置为19，那允许的最大GC时间就占总时间的5%（即1 /（1+19）），默认值为99，就是允许最大1%（即1 /（1+99））的垃圾收集时间。")]),_._v(" "),a("li",[_._v("-XX:+UseAdaptiveSizePolicy：一个开关参数，当这个参数打开之后，就不需要手工指定新生代的大小（-Xmn）、Eden与Survivor区的比例（-XX:SurvivorRatio）、晋升老年代对象年龄（-XX:PretenureSizeThreshold）等细节参数了，虚拟机会根据当前系统的运行情况收集性能监控信息，动态调整这些参数以提供最合适的停顿时间或最大的吞吐量，这种调节方式称为GC自适应的调节策略（GC Ergonomics）")])]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/2179815/1597297992482-dda99fca-6197-46b6-b255-904f52e3c673.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_24%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),a("h4",{attrs:{id:"_4、serial-old收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、serial-old收集器"}},[_._v("#")]),_._v(" 4、Serial Old收集器")]),_._v(" "),a("p",[_._v("Serial收集器的老年代版本。基于标记-整理算法实现，")]),_._v(" "),a("p",[_._v("有两个用途：")]),_._v(" "),a("p",[_._v("1、与Serial收集器、Parallel收集器搭配使用")]),_._v(" "),a("p",[_._v("2、作为CMS收集器的后备方案")]),_._v(" "),a("h4",{attrs:{id:"_5、parallel-old收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、parallel-old收集器"}},[_._v("#")]),_._v(" 5、Parallel Old收集器")]),_._v(" "),a("p",[_._v("Parallel收集器的老年代版本。基于标记-整理算法实现。")]),_._v(" "),a("h4",{attrs:{id:"_6、cms收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、cms收集器"}},[_._v("#")]),_._v(" 6、CMS收集器")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/2179815/1597305116856-3b28e2f9-6e90-44a8-a681-c58965eeb9e5.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),a("p",[_._v("聚焦低延迟。基于标记-清除算法实现。")]),_._v(" "),a("p",[_._v("由于CMS收集器是并发收集器，即在运行阶段用户线程依然在运行，会产生对象，所以CMS收集器不能等到老年代满了才触发，而是要提前触发，这个阈值是92%。这个阈值可以通过参数-XX:CMSInitiatingOccupancyFraction设置")]),_._v(" "),a("hr"),_._v(" "),a("p",[_._v("相关参数：")]),_._v(" "),a("p",[_._v("-XX：+UseConcMarkSweepGC：手动开启CMS收集器")]),_._v(" "),a("p",[_._v("-XX:+CMSIncrementalMode：设置为增量模式")]),_._v(" "),a("p",[_._v("-XX:CMSFullGCsBeforeCompaction：设定进行多少次CMS垃圾回收后，进行一次内存压缩")]),_._v(" "),a("p",[_._v("-XX:+CMSClassUnloadingEnabled：允许对类元数据进行回收")]),_._v(" "),a("p",[_._v("-XX:UseCMSInitiatingOccupancyOnly：表示只在到达阀值的时候，才进行CMS回收")]),_._v(" "),a("p",[_._v("-XX:CMSInitiatingOccupancyFraction：设置CMS收集器在老年代空间被使用多少后触发")]),_._v(" "),a("p",[_._v("-XX:+UseCMSCompactAtFullCollection：设置CMS收集器在完成垃圾收集后是否要进行一次内存碎片的整理")]),_._v(" "),a("hr"),_._v(" "),a("p",[_._v("CMS收集器工作分四个步骤：")]),_._v(" "),a("p",[_._v("1、初始标记")]),_._v(" "),a("p",[_._v("会STW。只标记GC Roots直接关联的对象。")]),_._v(" "),a("p",[_._v("2、并发标记")]),_._v(" "),a("p",[_._v("不会STW。GC线程与用户线程并发运行。")]),_._v(" "),a("p",[_._v("会沿着GC Roots直接关联的对象链遍历整个对象图。可想而知需要的时间较长，但因为是与用户线程并发运行的，除了能感知到CPU飙升，不会出现卡顿现象。")]),_._v(" "),a("p",[_._v("3、重新标记")]),_._v(" "),a("p",[_._v("会STW。")]),_._v(" "),a("p",[_._v("CMS垃圾收集器通过写屏障+增量更新记录了并发标记阶段新建立的引用关系，重新标记就是去遍历这个记录。")]),_._v(" "),a("p",[_._v("4、并发清除")]),_._v(" "),a("p",[_._v("GC线程与用户线程并发运行，清理未被标记到的对象")]),_._v(" "),a("p",[_._v("默认启动的回收线程数 = (处理器核心数 + 3) / 4")]),_._v(" "),a("hr"),_._v(" "),a("p",[_._v("显然CMS收集器依然不是完美的，不然后面就不会出现G1、ZGC等。那有哪些缺点呢？")]),_._v(" "),a("p",[_._v("1、运行期间会与用户线程抢夺CPU资源。当然，这是所有并发收集器的缺点")]),_._v(" "),a("p",[_._v("2、无法处理浮动垃圾（标记结束后创建的对象）")]),_._v(" "),a("p",[_._v("3、内存碎片")]),_._v(" "),a("h4",{attrs:{id:"_7、g1收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、g1收集器"}},[_._v("#")]),_._v(" 7、G1收集器")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/2179815/1597306687028-7927fb01-eb36-40a9-b0f3-3e302e9d7101.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_20%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),a("p",[_._v("G1收集器与之前的所有收集器都不一样，它将堆分成了一个一个Region，这些Region用的时候才被赋予角色：Eden、from、to、humongous。一个region只能是一个角色，不存在一个region既是Eden又是from。")]),_._v(" "),a("p",[_._v("每个region的大小可通过参数-XX:G1HeapRegionSize设置，取值范围是2-32M。")]),_._v(" "),a("p",[_._v("一个对象的大小超过region的一半则被认定为大对象，会用N个连续的region来存储。")]),_._v(" "),a("hr"),_._v(" "),a("p",[_._v("G1名字的由来")]),_._v(" "),a("p",[_._v("回收某个region的价值大小 = 回收获得的空间大小 + 回收所需时间")]),_._v(" "),a("p",[_._v("G1收集器会维护一个优先级列表，每个region按价值大小排序存放在这个优先级列表中。收集时优先收集价值更大的region，这就是G1名字的由来。")]),_._v(" "),a("hr"),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/2179815/1597308405096-875a988a-7f55-4809-bacf-6906cb8f1a2a.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_26%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),a("p",[_._v("四个步骤：")]),_._v(" "),a("p",[_._v("1、初始标记")]),_._v(" "),a("p",[_._v("会STW。")]),_._v(" "),a("p",[_._v("做了两件事：")]),_._v(" "),a("p",[_._v("1、修改TAMS的值，TAMS以上的值为新创建的对象，默认标记为存活对象，即多标")]),_._v(" "),a("p",[_._v("2、标记GC Roots能直接关联到的对象")]),_._v(" "),a("p",[_._v("2、并发标记")]),_._v(" "),a("p",[_._v("耗时较长。GC线程与用户线程并发运行。")]),_._v(" "),a("p",[_._v("从GC roots能直接关联到的对象开始遍历整个对象图")]),_._v(" "),a("p",[_._v("3、最终标记")]),_._v(" "),a("p",[_._v("遍历写屏障+SATB记录下的旧的引用对象图")]),_._v(" "),a("p",[_._v("4、筛选回收")]),_._v(" "),a("p",[_._v("更新region的统计数据，对各个region的回收价值进行计算并排序，然后根据用户设置的期望暂停时间的期望值生成回收集。")]),_._v(" "),a("p",[_._v("然后开始执行清除操作。将旧的region中的存活对象移动到新的Region中，清理这个旧的region。这个阶段需要STW。")]),_._v(" "),a("hr"),_._v(" "),a("p",[_._v("相关参数：")]),_._v(" "),a("p",[_._v("-XX:G1HeapRegionSize：设置region的大小")]),_._v(" "),a("p",[_._v("-XX:MaxGCPauseMillis：设置GC回收时允许的最大停顿时间（默认200ms）")]),_._v(" "),a("p",[_._v("-XX:+UseG1GC：开启g1")]),_._v(" "),a("p",[_._v("-XX:ConcGCThreads：设置并发标记、并发整理的gc线程数")]),_._v(" "),a("p",[_._v("-XX:ParallelGCThreads：STW期间并行执行的gc线程数")]),_._v(" "),a("hr"),_._v(" "),a("p",[_._v("缺点：")]),_._v(" "),a("p",[_._v("1、需要10%-20%的内存来存储G1收集器运行需要的数据，如不cset、rset、卡表等")]),_._v(" "),a("p",[_._v("2、运行期间会与用户线程抢夺CPU资源。当然，这是所有并发收集器的缺点")]),_._v(" "),a("h2",{attrs:{id:"查看默认收集器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看默认收集器"}},[_._v("#")]),_._v(" 查看默认收集器")]),_._v(" "),a("p",[_._v("java -XX:+PrintFlagsFinal -version | grep GC")]),_._v(" "),a("h2",{attrs:{id:"gc日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gc日志"}},[_._v("#")]),_._v(" GC日志")]),_._v(" "),a("p",[_._v("相关参数：")]),_._v(" "),a("p",[_._v("-XX:+PrintGC 输出GC日志")]),_._v(" "),a("p",[_._v("-XX:+PrintGCDetails 输出GC的详细日志")]),_._v(" "),a("p",[_._v("-XX:+PrintGCTimeStamps 输出GC的时间戳（以基准时间的形式）")]),_._v(" "),a("p",[_._v("-XX:+PrintGCDateStamps 输出GC的时间戳（以日期的形式，如 2013-05-04T21:53:59.234+0800）")]),_._v(" "),a("p",[_._v("-XX:+PrintHeapAtGC 在进行GC的前后打印出堆的信息")]),_._v(" "),a("p",[_._v("-Xloggc:../logs/gc.log 日志文件的输出路径")]),_._v(" "),a("p",[_._v("日志内容：")]),_._v(" "),a("p",[_._v("1、gc类型：GC、Full GC")]),_._v(" "),a("p",[_._v("2、gc原因：Metadata GC Threshold、Last ditch collection……")]),_._v(" "),a("p",[_._v("3、gc前内存数据")]),_._v(" "),a("p",[_._v("4、gc后内存数据")]),_._v(" "),a("p",[_._v("5、花费的时间：用户态、内核态、实际用时")]),_._v(" "),a("hr"),_._v(" "),a("p",[_._v("比如元空间的gc日志")]),_._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[_._v("[GC (Metadata GC Threshold) [PSYoungGen: 6398K->1133K(46592K)] 6398K->1141K(153088K), 0.0371218 secs] [Times: user=0.03 sys=0.01, real=0.04 secs] \n[Full GC (Metadata GC Threshold) [PSYoungGen: 1133K->0K(46592K)] [ParOldGen: 8K->1013K(76800K)] 1141K->1013K(123392K), [Metaspace: 4061K->4061K(1056768K)], 0.0815840 secs] [Times: user=0.13 sys=0.00, real=0.08 secs] \n")])]),_._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[_._v("1")]),a("br"),a("span",{staticClass:"line-number"},[_._v("2")]),a("br")])]),a("hr"),_._v(" "),a("p",[_._v("比如堆区gc日志")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/2179815/1597810128073-0cce7f38-f6a5-4186-bed3-198edb0ff571.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/2179815/1597810116663-198998ec-cfe4-4ebd-864d-e7082b217da3.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_34%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),a("h2",{attrs:{id:"记忆集与卡表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记忆集与卡表"}},[_._v("#")]),_._v(" 记忆集与卡表")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1597815230594-4f849542-a187-4e81-8a58-fef97365cafa.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_30%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),a("h2",{attrs:{id:"练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[_._v("#")]),_._v(" 练习")]),_._v(" "),a("p",[_._v("1、三色标记的每个步骤自己写一遍")]),_._v(" "),a("p",[_._v("2、多标、漏标、少标出现的标记步骤写一遍")]),_._v(" "),a("p",[_._v("3、记忆集与卡表整理成笔记")])])}),[],!1,null,null,null);a.default=t.exports}}]);