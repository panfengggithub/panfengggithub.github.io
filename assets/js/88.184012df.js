(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{501:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"线程池核心设计与实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池核心设计与实现"}},[t._v("#")]),t._v(" 线程池核心设计与实现")]),t._v(" "),a("h3",{attrs:{id:"_2-1-总体设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-总体设计"}},[t._v("#")]),t._v(" 2.1 总体设计")]),t._v(" "),a("p",[t._v("Java中的线程池核心实现类是ThreadPoolExecutor")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1.meituan.net/travelcube/912883e51327e0c7a9d753d11896326511272.png",alt:"图1 ThreadPoolExecutor UML类图"}})]),t._v(" "),a("p",[t._v("ThreadPoolExecutor实现的顶层接口是Executor，顶层接口Executor提供了一种思想：将任务提交和任务执行进行解耦。用户无需关注如何创建线程，如何调度线程来执行任务，用户只需提供Runnable对象，将任务的运行逻辑提交到执行器(Executor)中，由Executor框架完成线程的调配和任务的执行部分。")]),t._v(" "),a("p",[t._v("ThreadPoolExecutor将会一方面维护自身的生命周期，另一方面同时管理线程和任务，使两者良好的结合从而执行并行任务。")]),t._v(" "),a("p",[t._v("ThreadPoolExecutor是如何运行，如何同时维护线程和执行任务的呢？其运行机制如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/77441586f6b312a54264e3fcf5eebe2663494.png",alt:"图2 ThreadPoolExecutor运行流程"}})]),t._v(" "),a("p",[t._v("线程池在内部实际上构建了一个生产者消费者模型，将线程和任务两者解耦，并不直接关联，从而良好的缓冲任务，复用线程。")]),t._v(" "),a("p",[t._v("线程池的运行主要分成两部分：任务管理、线程管理。任务管理部分充当生产者的角色，当任务提交后，线程池会判断该任务后续的流转：（1）直接申请线程执行该任务；（2）缓冲到队列中等待线程执行；（3）拒绝该任务。")]),t._v(" "),a("p",[t._v("线程管理部分是消费者，它们被统一维护在线程池内，根据任务请求进行线程的分配，当线程执行完任务后则会继续获取新的任务去执行，最终当线程获取不到任务的时候，线程就会被回收。")]),t._v(" "),a("p",[t._v("线程池运行机制：")]),t._v(" "),a("ol",[a("li",[t._v("线程池如何维护自身状态。")]),t._v(" "),a("li",[t._v("线程池如何管理任务。")]),t._v(" "),a("li",[t._v("线程池如何管理线程。")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-生命周期管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-生命周期管理"}},[t._v("#")]),t._v(" 2.2 生命周期管理")]),t._v(" "),a("p",[t._v("线程池运行的状态，并不是用户显式设置的，而是伴随着线程池的运行，由内部来维护。线程池内部使用一个变量维护两个值：运行状态(runState)和线程数量 (workerCount)。")]),t._v(" "),a("p",[t._v("如下代码所示：")]),t._v(" "),a("div",{staticClass:"language-Java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AtomicInteger")]),t._v(" ctl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AtomicInteger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ctlOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNNING")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("code",[t._v("ctl")]),t._v("这个AtomicInteger类型，是对线程池的运行状态和线程池中有效线程的数量进行控制的一个字段， 它同时包含两部分的信息：线程池的运行状态 (runState) 和线程池内有效线程的数量 (workerCount)，高3位保存runState，低29位保存workerCount，两个变量之间互不干扰。用一个变量去存储两个值，可避免在做相关决策时，出现不一致的情况，不必为了维护两者的一致，而占用锁资源。")]),t._v(" "),a("p",[t._v("ThreadPoolExecutor的运行状态有5种，分别为：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/62853fa44bfa47d63143babe3b5a4c6e82532.png",alt:"img"}})]),t._v(" "),a("p",[t._v("其生命周期转换如下入所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/582d1606d57ff99aa0e5f8fc59c7819329028.png",alt:"图3 线程池生命周期"}})]),t._v(" "),a("p",[t._v("图3 线程池生命周期")]),t._v(" "),a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("p",[t._v("keepAliveTime：非核心线程空闲时间（没有任务执行时）达到keepAliveTime，该线程会退出（避免资源浪费就应该要退出）")]),t._v(" "),a("h3",{attrs:{id:"_2-3-任务执行机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-任务执行机制"}},[t._v("#")]),t._v(" 2.3 任务执行机制")]),t._v(" "),a("p",[t._v("任务调度是线程池的主要入口，当用户提交了一个任务，接下来这个任务将如何执行都是由这个阶段决定的。了解这部分就相当于了解了线程池的核心运行机制。")]),t._v(" "),a("p",[t._v("首先，所有任务的调度都是由execute方法完成的，这部分完成的工作是：检查现在线程池的运行状态、运行线程数、运行策略，决定接下来执行的流程，是直接申请线程执行，或是缓冲到队列中执行，亦或是直接拒绝该任务。其执行过程如下：")]),t._v(" "),a("ol",[a("li",[t._v("首先检测线程池运行状态，如果不是RUNNING，则直接拒绝，线程池要保证在RUNNING的状态下执行任务。")]),t._v(" "),a("li",[t._v("如果workerCount < corePoolSize，则创建并启动一个线程来执行新提交的任务。")]),t._v(" "),a("li",[t._v("如果workerCount >= corePoolSize，且线程池内的阻塞队列未满，则将任务添加到该阻塞队列中。")]),t._v(" "),a("li",[t._v("如果workerCount >= corePoolSize && workerCount < maximumPoolSize，且线程池内的阻塞队列已满，则创建并启动一个线程来执行新提交的任务。")]),t._v(" "),a("li",[t._v("如果workerCount >= maximumPoolSize，并且线程池内的阻塞队列已满, 则根据拒绝策略来处理该任务, 默认的处理方式是直接抛异常。")])]),t._v(" "),a("p",[t._v("其执行流程如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/31bad766983e212431077ca8da92762050214.png",alt:"图4 任务调度流程"}})]),t._v(" "),a("p",[t._v("图4 任务调度流程")]),t._v(" "),a("p",[a("strong",[t._v("2.3.2 任务缓冲")])]),t._v(" "),a("p",[t._v("任务缓冲模块是线程池能够管理任务的核心部分。线程池的本质是对任务和线程的管理，而做到这一点最关键的思想就是将任务和线程两者解耦，不让两者直接关联，才可以做后续的分配工作。线程池中是以生产者消费者模式，通过一个阻塞队列来实现的。阻塞队列缓存任务，工作线程从阻塞队列中获取任务。")]),t._v(" "),a("p",[t._v("阻塞队列(BlockingQueue)是一个支持两个附加操作的队列。这两个附加的操作是：在队列为空时，获取元素的线程会等待队列变为非空。当队列满时，存储元素的线程会等待队列可用。阻塞队列常用于生产者和消费者的场景，生产者是往队列里添加元素的线程，消费者是从队列里拿元素的线程。阻塞队列就是生产者存放元素的容器，而消费者也只从容器里拿元素。")]),t._v(" "),a("p",[t._v("下图中展示了线程1往阻塞队列中添加元素，而线程2从阻塞队列中移除元素：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1.meituan.net/travelcube/f4d89c87acf102b45be8ccf3ed83352a9497.png",alt:"图5 阻塞队列"}})]),t._v(" "),a("p",[t._v("图5 阻塞队列")]),t._v(" "),a("p",[t._v("使用不同的队列可以实现不一样的任务存取策略。在这里，我们可以再介绍下阻塞队列的成员：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/725a3db5114d95675f2098c12dc331c3316963.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_2-4-worker线程管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-worker线程管理"}},[t._v("#")]),t._v(" 2.4 Worker线程管理")]),t._v(" "),a("p",[t._v("2.4.1 Worker线程")]),t._v(" "),a("p",[t._v("线程池为了掌握线程的状态并维护线程的生命周期，设计了线程池内的工作线程Worker。我们来看一下它的部分代码：")]),t._v(" "),a("div",{staticClass:"language-Java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractQueuedSynchronizer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),t._v(" thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Worker持有的线程")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),t._v(" firstTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化的任务，可以为null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Worker这个工作线程，实现了Runnable接口，并持有一个线程thread，一个初始化的任务firstTask。thread是在调用构造方法时通过ThreadFactory来创建的线程，可以用来执行任务；firstTask用它来保存传入的第一个任务，这个任务可以有也可以为null。如果这个值是非空的，那么线程就会在启动初期立即执行这个任务，也就对应核心线程创建时的情况；如果这个值是null，那么就需要创建一个线程去执行任务列表（workQueue）中的任务，也就是非核心线程的创建。")]),t._v(" "),a("p",[t._v("Worker执行任务的模型如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/03268b9dc49bd30bb63064421bb036bf90315.png",alt:"图7 Worker执行任务"}})]),t._v(" "),a("p",[t._v("图7 Worker执行任务")]),t._v(" "),a("p",[t._v("线程池需要管理线程的生命周期，需要在线程长时间不运行的时候进行回收。线程池使用一张Hash表去持有线程的引用，这样可以通过添加引用、移除引用这样的操作来控制线程的生命周期。这个时候重要的就是如何判断线程是否在运行。")]),t._v(" "),a("p",[t._v("Worker是通过继承AQS，使用AQS来实现独占锁这个功能。没有使用可重入锁ReentrantLock，而是使用AQS，为的就是实现不可重入的特性去反应线程现在的执行状态。")]),t._v(" "),a("p",[t._v("1.lock方法一旦获取了独占锁，表示当前线程正在执行任务中。 2.如果正在执行任务，则不应该中断线程。 3.如果该线程现在不是独占锁的状态，也就是空闲的状态，说明它没有在处理任务，这时可以对该线程进行中断。 4.线程池在执行shutdown方法或tryTerminate方法时会调用interruptIdleWorkers方法来中断空闲的线程，interruptIdleWorkers方法会使用tryLock方法来判断线程池中的线程是否是空闲状态；如果线程是空闲状态则可以安全回收。")]),t._v(" "),a("p",[t._v("在线程回收过程中就使用到了这种特性，回收过程如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1.meituan.net/travelcube/9d8dc9cebe59122127460f81a98894bb34085.png",alt:"图8 线程池回收过程"}})]),t._v(" "),a("p",[a("strong",[t._v("2.4.2 Worker线程增加")])]),t._v(" "),a("p",[t._v("增加线程是通过线程池中的addWorker方法，该方法的功能就是增加一个线程，该方法不考虑线程池是在哪个阶段增加的该线程，这个分配线程的策略是在上个步骤完成的，该步骤仅仅完成增加线程，并使它运行，最后返回是否成功这个结果。addWorker方法有两个参数：firstTask、core。firstTask参数用于指定新增的线程执行的第一个任务，该参数可以为空；core参数为true表示在新增线程时会判断当前活动线程数是否少于corePoolSize，false表示新增线程前需要判断当前活动线程数是否少于maximumPoolSize，其执行流程如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/49527b1bb385f0f43529e57b614f59ae145454.png",alt:"图9 申请线程执行流程图"}})]),t._v(" "),a("p",[t._v("图9 申请线程执行流程图")]),t._v(" "),a("p",[a("strong",[t._v("2.4.3 Worker线程回收")])]),t._v(" "),a("p",[t._v("线程池中线程的销毁依赖JVM自动的回收，线程池做的工作是根据当前线程池的状态维护一定数量的线程引用，防止这部分线程被JVM回收，当线程池决定哪些线程需要回收时，只需要将其引用消除即可。Worker被创建出来后，就会不断地进行轮询，然后获取任务去执行，核心线程可以无限等待获取任务，非核心线程要限时获取任务。当Worker无法获取到任务，也就是获取的任务为空时，循环会结束，Worker会主动消除自身在线程池内的引用。")]),t._v(" "),a("div",{staticClass:"language-Java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行任务")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("processWorkerExit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" completedAbruptly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取不到任务时，主动回收自己")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("线程回收的工作是在processWorkerExit方法完成的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/90ea093549782945f2c968403fdc39d415386.png",alt:"图10 线程销毁流程"}})]),t._v(" "),a("p",[t._v("图10 线程销毁流程")]),t._v(" "),a("p",[t._v("事实上，在这个方法中，将线程引用移出线程池就已经结束了线程销毁的部分。但由于引起线程销毁的可能性有很多，线程池还要判断是什么引发了这次销毁，是否要改变线程池的现阶段状态，是否要根据新状态，重新分配线程。")]),t._v(" "),a("p",[a("strong",[t._v("2.4.4 Worker线程执行任务")])]),t._v(" "),a("p",[t._v("在Worker类中的run方法调用了runWorker方法来执行任务，runWorker方法的执行过程如下：")]),t._v(" "),a("p",[t._v("1.while循环不断地通过getTask()方法获取任务。 2.getTask()方法从阻塞队列中取任务。 3.如果线程池正在停止，那么要保证当前线程是中断状态，否则要保证当前线程不是中断状态。 4.执行任务。 5.如果getTask结果为null则跳出循环，执行processWorkerExit()方法，销毁线程。")]),t._v(" "),a("p",[t._v("执行流程如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/879edb4f06043d76cea27a3ff358cb1d45243.png",alt:"图11 执行任务流程"}})]),t._v(" "),a("p",[t._v("图11 执行任务流程")]),t._v(" "),a("h2",{attrs:{id:"线程池参数设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池参数设置"}},[t._v("#")]),t._v(" 线程池参数设置")]),t._v(" "),a("h3",{attrs:{id:"_1-常规设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-常规设置"}},[t._v("#")]),t._v(" 1. 常规设置")]),t._v(" "),a("p",[t._v("分 IO 密集型任务或者分 CPU 密集型任务")]),t._v(" "),a("h4",{attrs:{id:"cpu-密集型任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu-密集型任务"}},[t._v("#")]),t._v(" "),a("strong",[t._v("CPU 密集型任务")])]),t._v(" "),a("p",[a("code",[t._v("CPU密集型")]),t._v("也叫"),a("code",[t._v("计算密集型")]),t._v("，指的是系统的硬盘、内存性能相对CPU要好很多，此时，系统运作大部分的状况是CPU Loading 100%，CPU要读/写I/O(硬盘/内存)，I/O在很短的时间就可以完成，而CPU还有许多运算要处理，CPU Loading 很高。")]),t._v(" "),a("p",[a("strong",[t._v("CPU密集型：corePoolSize = CPU核数 + 1")])]),t._v(" "),a("p",[t._v("《Java并发编程实战》一书中给出的原因是：**即使当计算（CPU）密集型的线程偶尔由于页缺失故障或者其他原因而暂停时，这个“额外”的线程也能确保 CPU 的时钟周期不会被浪费。**把它理解为一个备份的线程就行了。")]),t._v(" "),a("p",[t._v("注意：这个地方还有个需要注意的小点就是，如果你的服务器上部署的不止一个应用，你就得考虑其他的应用的线程池配置情况。")]),t._v(" "),a("p",[t._v("经过精密的计算，你咔一下设置为核心数，结果项目部署上去了，发现还有其他的应用在和你抢 CPU。")]),t._v(" "),a("h4",{attrs:{id:"io-密集型任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io-密集型任务"}},[t._v("#")]),t._v(" "),a("strong",[t._v("IO 密集型任务")])]),t._v(" "),a("p",[t._v("IO密集型的话，是指系统大部分时间在跟I/O交互，而这个时间线程不会占用CPU来处理，即在这个时间范围内，可以由其他线程来使用CPU，因而可以多配置一些线程。")]),t._v(" "),a("p",[t._v("业界的一些线程池参数配置方案：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/13/17171bd786f4b4a7?w=1316&h=782&f=png&s=180624",alt:"img"}})]),t._v(" "),a("p",[t._v("第一个就是我们上面说的，和实际业务场景有所偏离。")]),t._v(" "),a("p",[t._v("第二个设置为 2*CPU 核心数，有点像是把任务都当做 IO 密集型去处理了。而且一个项目里面一般来说不止一个自定义线程池吧？比如有专门处理数据上送的线程池，有专门处理查询请求的线程池，这样去做一个简单的线程隔离。但是如果都用这样的参数配置的话，显然是不合理的。")]),t._v(" "),a("p",[t._v("第三个不说了，理想状态。流量是不可能这么均衡的，就拿美团来说，下午3，4点的流量，能和 12 点左右午饭时的流量比吗？")]),t._v(" "),a("h3",{attrs:{id:"_2-线程池参数动态化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程池参数动态化"}},[t._v("#")]),t._v(" 2. "),a("strong",[t._v("线程池参数动态化")])]),t._v(" "),a("p",[t._v("可以将修改线程池参数的成本降下来，这样至少可以发生故障的时候可以快速调整从而缩短故障恢复的时间。可以将线程池的参数从代码中迁移到分布式配置中心上，实现线程池参数可动态配置和即时生效，线程池参数动态化前后的参数修改流程对比如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p0.meituan.net/travelcube/c6caa5be64f39758ada0593b995d65fd25982.png",alt:"图16 动态修改线程池参数新旧流程对比"}})]),t._v(" "),a("p",[t._v("成本在于实现动态化以及监控成本不高，收益在于：在不颠覆原有线程池使用方式的基础之上，从降低线程池参数修改的成本以及多维度监控这两个方面降低了故障发生的概率。希望本文提供的动态化线程池思路能对大家有帮助。")]),t._v(" "),a("h4",{attrs:{id:"_3-2-1-整体设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-整体设计"}},[t._v("#")]),t._v(" "),a("strong",[t._v("3.2.1 整体设计")])]),t._v(" "),a("p",[t._v("动态化线程池的核心设计包括以下三个方面：")]),t._v(" "),a("ol",[a("li",[t._v("简化线程池配置：线程池构造参数有8个，但是最核心的是3个：corePoolSize、maximumPoolSize，workQueue，它们最大程度地决定了线程池的任务分配和线程分配策略。考虑到在实际应用中我们获取并发性的场景主要是两种：（1）并行执行子任务，提高响应速度。这种情况下，应该使用同步队列，没有什么任务应该被缓存下来，而是应该立即执行。（2）并行执行大批次任务，提升吞吐量。这种情况下，应该使用有界队列，使用队列去缓冲大批量的任务，队列容量必须声明，防止任务无限制堆积。所以线程池只需要提供这三个关键参数的配置，并且提供两种队列的选择，就可以满足绝大多数的业务需求，Less is More。")]),t._v(" "),a("li",[t._v("参数可动态修改：为了解决参数不好配，修改参数成本高等问题。在Java线程池留有高扩展性的基础上，封装线程池，允许线程池监听同步外部的消息，根据消息进行修改配置。将线程池的配置放置在平台侧，允许开发同学简单的查看、修改线程池配置。")]),t._v(" "),a("li",[t._v("增加线程池监控：对某事物缺乏状态的观测，就对其改进无从下手。在线程池执行任务的生命周期添加监控能力，帮助开发同学了解线程池状态。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1.meituan.net/travelcube/4d5c410ad23782350cc9f980787151fd54144.png",alt:"图17 动态化线程池整体设计"}})]),t._v(" "),a("p",[t._v("图17 动态化线程池整体设计")]),t._v(" "),a("p",[a("strong",[t._v("3.3.2 功能架构")])]),t._v(" "),a("p",[t._v("动态化线程池提供如下功能：")]),t._v(" "),a("p",[a("strong",[t._v("动态调参")]),t._v("：支持线程池参数动态调整、界面化操作；包括修改线程池核心大小、最大核心大小、队列长度等；参数修改后及时生效。 "),a("strong",[t._v("任务监控")]),t._v("：支持应用粒度、线程池粒度、任务粒度的Transaction监控；可以看到线程池的任务执行情况、最大任务执行时间、平均任务执行时间、95/99线等。 "),a("strong",[t._v("负载告警")]),t._v("：线程池队列任务积压到一定值的时候会通过大象（美团内部通讯工具）告知应用开发负责人；当线程池负载数达到一定阈值的时候会通过大象告知应用开发负责人。 "),a("strong",[t._v("操作监控")]),t._v("：创建/修改和删除线程池都会通知到应用的开发负责人。 "),a("strong",[t._v("操作日志")]),t._v("：可以查看线程池参数的修改记录，谁在什么时候修改了线程池参数、修改前的参数值是什么。 "),a("strong",[t._v("权限校验")]),t._v("：只有应用开发负责人才能够修改应用的线程池参数。")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://p0.meituan.net/travelcube/6c0091e92e90f50f89fd83f3b9eb5472135718.png",alt:"图18 动态化线程池功能架构"}}),t._v(" "),a("h4",{attrs:{id:"_3-2-2-参数动态化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-参数动态化"}},[t._v("#")]),t._v(" 3.2.2 "),a("strong",[t._v("参数动态化")])]),t._v(" "),a("p",[t._v("JDK允许线程池使用方通过ThreadPoolExecutor的实例来动态设置线程池的核心策略，以setCorePoolSize为方法例，在运行期线程池使用方调用此方法设置corePoolSize之后，线程池会直接覆盖原来的corePoolSize值，并且基于当前值和原始值的比较结果采取不同的处理策略。对于当前值小于当前工作线程数的情况，说明有多余的worker线程，此时会向当前idle的worker线程发起中断请求以实现回收，多余的worker在下次idel的时候也会被回收；对于当前值大于原始值且当前队列中有待执行任务，则线程池会创建新的worker线程来执行队列任务，setCorePoolSize具体流程如下：")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://p0.meituan.net/travelcube/9379fe1666818237f842138812bf63bd85645.png",alt:"图20 setCorePoolSize方法执行流程"}}),t._v(" "),a("p",[t._v("setMaximumPoolSize 也可以设置：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/13/17171bf556d917b4?w=678&h=484&f=png&s=58571",alt:"img"}})]),t._v(" "),a("p",[t._v("这个地方就很简单了，逻辑不太复杂。")]),t._v(" "),a("p",[t._v("1.首先是参数合法性校验。")]),t._v(" "),a("p",[t._v("2.然后用传递进来的值，覆盖原来的值。")]),t._v(" "),a("p",[t._v("3.判断工作线程是否是大于最大线程数，如果大于，则对空闲线程发起中断请求。")]),t._v(" "),a("p",[t._v("经过前面两个方法的分析，我们知道了最大线程数和核心线程数可以动态调整。")]),t._v(" "),a("p",[t._v("重点是基于这几个public方法，我们只需要维护ThreadPoolExecutor的实例，并且在需要修改的时候拿到实例修改其参数即可。基于以上的思路，我们实现了线程池参数的动态化、线程池参数在管理平台可配置可修改，")]),t._v(" "),a("p",[a("strong",[t._v("如何动态指定队列长度？")])]),t._v(" "),a("p",[t._v("按照这个思路自定义一个队列，让其可以对 Capacity 参数进行修改即可。")]),t._v(" "),a("p",[t._v("操作起来也非常方便，把 LinkedBlockingQueue 粘贴一份出来，修改个名字，然后把 Capacity 参数的 final 修饰符去掉，并提供其对应的 get/set 方法。")]),t._v(" "),a("h4",{attrs:{id:"面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[t._v("#")]),t._v(" 面试题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("问题一：线程池被创建后里面有线程吗？如果没有的话，你知道有什么方法对线程池进行预热吗？")]),t._v(" "),a("p",[t._v("线程池被创建后如果没有任务过来，里面是不会有线程的。如果需要预热的话可以调用下面的两个方法：")]),t._v(" "),a("p",[t._v("全部启动：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/13/17171c171c60521f?w=629&h=309&f=png&s=25599",alt:"img"}})]),t._v(" "),a("p",[t._v("仅启动一个：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/13/17171c17c927454d?w=600&h=285&f=png&s=31464",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("问题二：核心线程数会被回收吗？需要什么设置？")]),t._v(" "),a("p",[t._v("核心线程数默认是不会被回收的，如果需要回收核心线程数，需要调用下面的方法：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/13/17171c19ad0f4a22?w=881&h=615&f=png&s=75243",alt:"img"}})]),t._v(" "),a("p",[t._v("allowCoreThreadTimeOut 该值默认为 false。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/13/17171c1a876f3451?w=581&h=150&f=png&s=13301",alt:"img"}})])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/z55887/article/details/79060070")]),t._v(" "),a("p",[t._v("https://www.cnblogs.com/thisiswhy/p/12690630.html")]),t._v(" "),a("p",[t._v("http://ifeve.com/how-to-calculate-threadpool-size/")])])}),[],!1,null,null,null);a.default=r.exports}}]);