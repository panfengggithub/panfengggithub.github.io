(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{655:function(e,r,t){"use strict";t.r(r);var o=t(1),a=Object(o.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"zookeeper单机模式下的启动流程与数据接收模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper单机模式下的启动流程与数据接收模型"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Zookeeper单机模式下的启动流程与数据接收模型")])]),e._v(" "),r("h2",{attrs:{id:"启动流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动流程"}},[e._v("#")]),e._v(" 启动流程")]),e._v(" "),r("p",[e._v("启动类：org.apache.zookeeper.server.quorum.QuorumPeerMain")]),e._v(" "),r("ol",[r("li",[e._v("调用ZooKeeperServerMain.main(args)")]),e._v(" "),r("li",[e._v("把配置解析成ServerConfig对象")]),e._v(" "),r("li",[e._v("初始化FileTxnSnapLog对象：快照和日志操作工具类")]),e._v(" "),r("li",[e._v("初始化JvmPauseMonitor")]),e._v(" "),r("li",[e._v("初始化ZooKeeperServer")]),e._v(" "),r("li",[e._v("启动AdminServer")]),e._v(" "),r("li",[e._v("创建NIOServerCnxnFactory对象")]),e._v(" "),r("li",[e._v("开启ServerSocketChannel，并绑定客户端端口")]),e._v(" "),r("li",[e._v("初始化WorkerService线程池")]),e._v(" "),r("li",[e._v("启动多个SelectorThread线程")]),e._v(" "),r("li",[e._v("启动AcceptThread线程")]),e._v(" "),r("li",[e._v("根据快照和日志初始化ZKDatabase")]),e._v(" "),r("li",[e._v("启动Session跟踪器SessionTracker")]),e._v(" "),r("li",[e._v("初始化RequestProcessor Chain")]),e._v(" "),r("li",[e._v("启动请求限流器RequestThrottler")])]),e._v(" "),r("h2",{attrs:{id:"数据接收模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据接收模型"}},[e._v("#")]),e._v(" 数据接收模型")]),e._v(" "),r("p",[e._v("AcceptThread线程负责接收Socket连接，没接收到一个Socket连接会生成一个SocketChannel对象，并生成一个NIOServerCnxn对象，然后会把SocketChannel对象分配给某个SelectorThread线程，分配方式是把SocketChannel对象添加到SelectorThread中的acceptedQueue队列中。")]),e._v(" "),r("p",[e._v("服务端有多个SelectorThread线程，每个线程负责处理多个SocketChannel的读写就绪事件，SelectorThread线程会不断的从acceptedQueue队列中获取SocketChannel对象并注册读事件到SelectorThread线程中的Selector对象上，同时，SelectorThread线程也会不断的从Selector对象上获取就绪事件。")]),e._v(" "),r("p",[e._v("每获取到一个就绪事件，就会把该事件先封装为一个IOWorkRequest对象，然后会把IOWorkRequest对象封装为ScheduledWorkRequest对象，ScheduledWorkRequest是一个线程，然后会把ScheduledWorkRequest扔给线程池进行处理。")]),e._v(" "),r("p",[e._v("线程池中的线程执行时，调用的就是IOWorkRequest的doWork方法，而doWork方法中会调用NIOServerCnxn的doIO方法。")]),e._v(" "),r("p",[e._v("NIOServerCnxn对象才是真正执行就绪事件的逻辑实现。整个模型相当于，没接收到一个就绪事件，NIOServerCnxn对象就会去处理该事件。")]),e._v(" "),r("p",[e._v("当客户端向服务端发送命令是，NIOServerCnxn就会处理读就绪事件，NIOServerCnxn就会从SocketChannel中取读取数据，并进行处理。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1588166799470-78eed413-6a39-4b0e-847d-c289d120acda.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_53%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])])}),[],!1,null,null,null);r.default=a.exports}}]);