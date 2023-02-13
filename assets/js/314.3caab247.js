(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{728:function(e,n,t){"use strict";t.r(n);var o=t(1),r=Object(o.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"dubbo服务调用源码解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dubbo服务调用源码解析"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Dubbo服务调用源码解析")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1591606355327-10bd9f06-f7bb-4149-a75e-731a4da49db4.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_163%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),n("p",[e._v("processon链接：https://www.processon.com/view/link/5eda2e5ff346fb1712e3303b")]),e._v(" "),n("h2",{attrs:{id:"服务消费端执行逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务消费端执行逻辑"}},[e._v("#")]),e._v(" 服务消费端执行逻辑")]),e._v(" "),n("ol",[n("li",[e._v("MockClusterInvoker.invoke(new RpcInvocation(method, args))：Mock逻辑")]),e._v(" "),n("li",[e._v("AbstractClusterInvoker.invoke(invocation)：把RpcContext中设置的Attachments添加到invocation对象上，调用路由链从服务目录上筛选出适合的服务Invoker，获得服务均衡策略loadbalance")]),e._v(" "),n("li",[e._v("FailoverClusterInvoker.doInvoke(invocation, invokers, loadbalance)：根据负载均衡策略选出一个invoker，然后执行")]),e._v(" "),n("li",[e._v("InvokerWrapper.invoke(invocation)：没做什么事情")]),e._v(" "),n("li",[e._v("CallbackRegistrationInvoker.invoke(invocation)：开始执行Filter链，执行完得到结果后，会获取ListenableFilter中的listener，执行listener的onResponse方法")]),e._v(" "),n("li",[e._v("ConsumerContextFilter.invoke(invocation)：设置RpcContext中LocalAddress、RemoteAddress、RemoteApplicationName参数")]),e._v(" "),n("li",[e._v("FutureFilter.invoke(invocation)：")]),e._v(" "),n("li",[e._v("MonitorFilter.invoke(invocation)：方法的执行次数+1")]),e._v(" "),n("li",[e._v("ListenerInvokerWrapper.invoke(invocation)：没做什么事情")]),e._v(" "),n("li",[e._v("AsyncToSyncInvoker.invoke(invocation)：异步转同步，会先用下层Invoker去异步执行，然后阻塞Integer.MAX_VALUE时间，直到拿到了结果")]),e._v(" "),n("li",[e._v("AbstractInvoker.invoke(invocation)：主要调用DubboInvoker的doInvoke方法，如果doInvoker方法出现了异常，会进行包装，包装成AsyncRpcResult")]),e._v(" "),n("li",[e._v("DubboInvoker.doInvoke(invocation)：从clients轮询出一个client进行数据发送，如果配置了不关心结果，则调用ReferenceCountExchangeClient的send方法，否则调用ReferenceCountExchangeClient的request方法")]),e._v(" "),n("li",[e._v("ReferenceCountExchangeClient.request(Object request, int timeout)：没做什么事情")]),e._v(" "),n("li",[e._v("HeaderExchangeClient.request(Object request, int timeout)：没做什么事情")]),e._v(" "),n("li",[e._v("HeaderExchangeChannel.request(Object request, int timeout)：构造一个Request对象，并且会构造一个DefaultFuture对象来阻塞timeout的时间来等待结果，在构造DefaultFuture对象时，会把DefaultFuture对象和req的id存入FUTURES中，FUTURES是一个Map，当HeaderExchangeHandler接收到结果时，会从这个Map中根据id获取到DefaultFuture对象，然后返回Response。")]),e._v(" "),n("li",[e._v("AbstractPeer.send(Object message)：从url中获取send参数，默认为false")]),e._v(" "),n("li",[e._v("AbstractClient.send(Object message, boolean sent)：没做什么")]),e._v(" "),n("li",[e._v("NettyChannel.send(Object message, boolean sent)：调用NioSocketChannel的writeAndFlush发送数据，然后判断send如果是true，那么则阻塞url中指定的timeout时间，因为如果send是false，在HeaderExchangeChannel中会阻塞timeout时间")]),e._v(" "),n("li",[e._v("NioSocketChannel.writeAndFlush(Object msg)：最底层的Netty非阻塞式的发送数据")])]),e._v(" "),n("p",[e._v("总结一下上面调用流程：")]),e._v(" "),n("ol",[n("li",[e._v("最外层是Mock逻辑，调用前，调用后进行Mock")]),e._v(" "),n("li",[e._v("从服务目录中，根据当前调用的方法和路由链，筛选出部分服务Invoker（DubboInvoker）")]),e._v(" "),n("li",[e._v("对服务Invoker进行负载均衡，选出一个服务Invoker")]),e._v(" "),n("li",[e._v("执行Filter链")]),e._v(" "),n("li",[e._v("AsyncToSyncInvoker完成异步转同步，因为DubboInvoker的执行是异步非阻塞的，所以如果是同步调用，则会在此处阻塞，知道拿到响应结果")]),e._v(" "),n("li",[e._v("DubboInvoker开始异步非阻塞的调用")]),e._v(" "),n("li",[e._v("HeaderExchangeChannel中会阻塞timeout的时间来等待结果，该timeout就是用户在消费端所配置的timeout")])]),e._v(" "),n("h2",{attrs:{id:"服务提供端执行逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务提供端执行逻辑"}},[e._v("#")]),e._v(" 服务提供端执行逻辑")]),e._v(" "),n("ol",[n("li",[e._v("NettyServerHandler：接收数据")]),e._v(" "),n("li",[e._v("MultiMessageHandler：判断接收到的数据是否是MultiMessage，如果是则获取MultiMessage中的单个Message，传递给HeartbeatHandler进行处理")]),e._v(" "),n("li",[e._v("HeartbeatHandler：判断是不是心跳消息，如果是不是则把Message传递给AllChannelHandler")]),e._v(" "),n("li",[e._v("AllChannelHandler：把接收到的Message封装为一个ChannelEventRunnable对象，扔给线程池进行处理")]),e._v(" "),n("li",[e._v("ChannelEventRunnable：在ChannelEventRunnable的run方法中会调用DecodeHandler处理Message")]),e._v(" "),n("li",[e._v("DecodeHandler：按Dubbo协议的数据格式，解析当前请求的path，versio，方法，方法参数等等，然后把解析好了的请求交给HeaderExchangeHandler")]),e._v(" "),n("li",[e._v("HeaderExchangeHandler：处理Request数据，首先构造一个Response对象，然后调用ExchangeHandlerAdapter得到一个CompletionStage future，然后给future通过whenComplete绑定一个回调函数，当future执行完了之后，就可以从回调函数中得到ExchangeHandlerAdapter的执行结果，并把执行结果设置给Response对象，通过channel发送出去。")]),e._v(" "),n("li",[e._v("ExchangeHandlerAdapter：从本机已经导出的Exporter中根据当前Request所对应的服务key，去寻找Exporter对象，从Exporter中得到Invoker，然后执行invoke方法，此Invoker为ProtocolFilterWrapper$CallbackRegistrationInvoker")]),e._v(" "),n("li",[e._v("ProtocolFilterWrapper$CallbackRegistrationInvoker：负责执行过滤器链，并且在执行完了之后回调每个过滤器的onResponse或onError方法")]),e._v(" "),n("li",[e._v("EchoFilter：判断当前请求是不是一个回升测试，如果是，则不继续执行过滤器链了（服务实现者Invoker也不会调用了）")]),e._v(" "),n("li",[e._v("ClassLoaderFilter：设置当前线程的classloader为当前要执行的服务接口所对应的classloader")]),e._v(" "),n("li",[e._v("GenericFilter：把泛化调用发送过来的信息包装为RpcInvocation对象")]),e._v(" "),n("li",[e._v("ContextFilter：设置RpcContext.getContext()的参数")]),e._v(" "),n("li",[e._v("TraceFilter：先执行下一个invoker的invoke方法，调用成功后录调用信息")]),e._v(" "),n("li",[e._v("TimeoutFilter：调用时没有特别处理，只是记录了一下当前时间，当整个filter链都执行完了之后回调TimeoutFilter的onResponse方法时，会判断本次调用是否超过了timeout")]),e._v(" "),n("li",[e._v("MonitorFilter：记录当前服务的执行次数")]),e._v(" "),n("li",[e._v("ExceptionFilter：调用时没有特别处理，在回调onResponse方法时，对不同的异常进行处理，详解Dubbo的异常处理")]),e._v(" "),n("li",[e._v("DelegateProviderMetaDataInvoker：过滤器链结束，调用下一个Invoker")]),e._v(" "),n("li",[e._v("AbstractProxyInvoker：在服务导出时，根据服务接口，服务实现类对象生成的，它的invoke方法就会执行服务实现类对象的方法，得到结果")])]),e._v(" "),n("h2",{attrs:{id:"dubbo的异常处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dubbo的异常处理"}},[e._v("#")]),e._v(" Dubbo的异常处理")]),e._v(" "),n("p",[e._v("当服务消费者在调用一个服务时，服务提供者在执行服务逻辑时可能会出现异常，对于Dubbo来说，服务消费者需要在消费端抛出这个异常，那么这个功能是怎么做到的呢？")]),e._v(" "),n("p",[e._v("服务提供者在执行服务时，如果出现了异常，那么框架会把异常捕获，捕获异常的逻辑在AbstractProxyInvoker中，捕获到异常后，会把异常信息包装为正常的AppResponse对象，只是AppResponse的value属性没有值，exception属性有值。")]),e._v(" "),n("p",[e._v("此后，服务提供者会把这个AppResponse对象发送给服务消费端，服务消费端是在InvokerInvocationHandler中调用AppResponse的recreate方法重新得到一个结果，在recreate方法中会去失败AppResponse对象是否正常，也就是是否存在exception信息，如果存在，则直接throw这个exception，从而做到"),n("strong",[e._v("服务执行时出现的异常，在服务消费端抛出")]),e._v("。")]),e._v(" "),n("p",[e._v("那么这里存在一个问题，如果服务提供者抛出的异常类，在服务消费者这边不存在，那么服务消费者也就抛不出这个异常了，那么dubbo是怎么处理的呢？")]),e._v(" "),n("p",[e._v("这里就涉及到了ExceptionFilter，它是服务提供者端的一个过滤器，它主要是在服务提供者执行完服务后会去识别异常：")]),e._v(" "),n("ol",[n("li",[e._v("如果是需要开发人员捕获的异常，那么忽略，直接把这个异常返回给消费者")]),e._v(" "),n("li",[e._v("如果在当前所执行的方法签名上有声明，那么忽略，直接把这个异常返回给消费者")]),e._v(" "),n("li",[e._v("如果抛出的异常不需要开发人员捕获，或者方法上没有申明，那么服务端或记录一个error日志")]),e._v(" "),n("li",[e._v("异常类和接口类在同一jar包里，那么忽略，直接把这个异常返回给消费者")]),e._v(" "),n("li",[e._v("如果异常类是JDK自带的异常，那么忽略，直接把这个异常返回给消费者")]),e._v(" "),n("li",[e._v("如果异常类是Dubbo自带的异常，那么忽略，直接把这个异常返回给消费者")]),e._v(" "),n("li",[n("strong",[e._v("否则，把异常信息包装成RuntimeException，并覆盖AppResponse对象中的exception属性")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);