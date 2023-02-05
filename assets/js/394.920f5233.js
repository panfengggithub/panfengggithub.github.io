(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{805:function(l,i,e){"use strict";e.r(i);var t=e(1),o=Object(t.a)({},(function(){var l=this,i=l._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[i("h1",{attrs:{id:"六、tomcat启动过程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#六、tomcat启动过程"}},[l._v("#")]),l._v(" "),i("strong",[l._v("六、Tomcat启动过程")])]),l._v(" "),i("h2",{attrs:{id:"解析server-xml"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#解析server-xml"}},[l._v("#")]),l._v(" 解析server.xml")]),l._v(" "),i("ol",[i("li",[i("p",[l._v("Catalina catalina = new Catalina(); // 没做其他事情")])]),l._v(" "),i("li",[i("p",[l._v("catalina.setAwait(true);")])]),l._v(" "),i("li",[i("p",[l._v("以下步骤是解析servler.xml")])]),l._v(" "),i("li",[i("p",[l._v("StandardServer server = new StandardServer(); // 没做其他事情")])]),l._v(" "),i("li",[i("p",[l._v("catalina.setServer(server);")])]),l._v(" "),i("li",[i("p",[l._v("server.addLifecycleListener(...);")])]),l._v(" "),i("li",[i("p",[l._v("StandardService service = new StandardService(); // 没做其他事情")])]),l._v(" "),i("li",[i("p",[l._v("server.addService(service);")])]),l._v(" "),i("li",[i("p",[l._v("Connector connector = new Connector(); // 会根据配置初始化protocolHandler")])]),l._v(" "),i("li",[i("ol",[i("li",[l._v("endpoint = new JIoEndpoint();  // 初始化Endpoint， JioEndpoint中会setMaxConnections(0);")]),l._v(" "),i("li",[l._v("cHandler = new Http11ConnectionHandler(this); //")]),l._v(" "),i("li",[l._v("((JIoEndpoint) endpoint).setHandler(cHandler);  // endpoint对应的连接处理器")])])]),l._v(" "),i("li",[i("p",[l._v("service.addConnector(connector);")])]),l._v(" "),i("li",[i("p",[l._v("Engine engine = new StandardEngine(); // pipeline.setBasic(new StandardEngineValve());")])]),l._v(" "),i("li",[i("p",[l._v("service.setContainer(engine);")])]),l._v(" "),i("li",[i("p",[l._v("Host host = new StandardHost();  // pipeline.setBasic(new StandardHostValve());")])]),l._v(" "),i("li",[i("p",[l._v("engine.addChild(host);")])]),l._v(" "),i("li",[i("p",[l._v("Context context = new StandardContext(); // pipeline.setBasic(new StandardContextValve());")])]),l._v(" "),i("li",[i("p",[l._v("host.addChild(context);")])]),l._v(" "),i("li",[i("p",[l._v("engine.setParentClassLoader(Catalina.class.getClassLoader()); // 实际调用的是ContainerBase.setParentClassLoader方法，设置属性parentClassLoader为shareClassLoader")])]),l._v(" "),i("li",[i("p",[l._v("server.setCatalina(catalina);")])]),l._v(" "),i("li",[i("p",[l._v("server.init();  // 开始初始化")])]),l._v(" "),i("li",[i("p",[l._v("catalina.start(); // 开始启动")])])]),l._v(" "),i("h3",{attrs:{id:"总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[l._v("#")]),l._v(" 总结")]),l._v(" "),i("p",[l._v("解析server.xml最主要的作用就是")]),l._v(" "),i("ol",[i("li",[l._v("把server.xml中定义的节点都生成对应的java对象，比如在解析某一个Host节点时就会对应生成一个StandardHost对象")]),l._v(" "),i("li",[l._v("把server.xml中定义的节点的层级关系解析出来，比如StandardContext对象.addChild(StandardHost对象)")]),l._v(" "),i("li",[l._v("设置每个容器的pipeline的基础Valve")])]),l._v(" "),i("h2",{attrs:{id:"初始化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[l._v("#")]),l._v(" 初始化")]),l._v(" "),i("p",[l._v("Tomcat初始化主要做了以下事情：")]),l._v(" "),i("ol",[i("li",[i("p",[l._v("将StandardServer实例注册到JMX")])]),l._v(" "),i("li",[i("p",[l._v("将StringCache实例注册到JMX")])]),l._v(" "),i("li",[i("p",[l._v("将StandardService实例注册到JMX")])]),l._v(" "),i("li",[i("p",[l._v("container.init(); // 对StandardEngine进行初始化")])]),l._v(" "),i("li",[i("ol",[i("li",[l._v("初始化startStopExecutor线程池，用来启动子容器的")])])]),l._v(" "),i("li",[i("p",[l._v("connector.init(); // 对Connector进行初始化")])]),l._v(" "),i("li",[i("ol",[i("li",[l._v("adapter = new CoyoteAdapter(this);")]),l._v(" "),i("li",[l._v("protocolHandler.setAdapter(adapter);")]),l._v(" "),i("li",[l._v("protocolHandler.init(); // 初始化协议处理器")])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("endpoint.init();  // 初始化协议处理器对应的endpoint，默认在初始化的时候就会bind")])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("endpoint.bind()")])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("serverSocketFactory = new DefaultServerSocketFactory(this);")]),l._v(" "),i("li",[l._v("serverSocket = serverSocketFactory.createSocket(getPort(), getBacklog(), getAddress());")])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[l._v("mapperListener.init(); // 没做什么其他的")])])])]),l._v(" "),i("h3",{attrs:{id:"总结-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[l._v("#")]),l._v(" 总结")]),l._v(" "),i("p",[l._v("初始化做得事情比较少，最重要的可能就是endpoint的bind的了")]),l._v(" "),i("h2",{attrs:{id:"启动"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[l._v("#")]),l._v(" 启动")]),l._v(" "),i("ol",[i("li",[i("p",[l._v("catalina.start()")])]),l._v(" "),i("li",[i("p",[l._v("getServer().start();")])]),l._v(" "),i("li",[i("ol",[i("li",[l._v("fireLifecycleEvent(CONFIGURE_START_EVENT, null);")]),l._v(" "),i("li",[l._v("services[i].start();")])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("container.start(); // 启动StandardEngine")])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("results.add(startStopExecutor.submit(new StartChild(children[i]))); // 每个Childrean容器（StandardHost）用单独的线程启动")])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("results.add(startStopExecutor.submit(new StartChild(children[i]))); // 每个Childrean容器（StandardContext）用单独的线程启动")])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("以下为一个应用的启动过程")]),l._v(" "),i("li",[l._v("生成一个WebappLoader")]),l._v(" "),i("li",[l._v("启动WebappLoader")])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("生成WebappClassLoader")]),l._v(" "),i("li",[l._v("将/WEB-INF/classes和/WEB-INF/lib目录作为loaderRepositories，后面应用如果加载类就从这两个目录加载")])])])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("fireLifecycleEvent(Lifecycle.CONFIGURE_START_EVENT, null);")])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("解析web.xml文件")])])])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("创建WebXml对象")]),l._v(" "),i("li",[l._v("解析web.xml文件内容设置WebXml对象属性")])])])])])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("WebXML对象有以下几个主要属性")]),l._v(" "),i("li",[l._v("Map<String,ServletDef> servlets")]),l._v(" "),i("li",[l._v("Map<String,String> servletMappings")]),l._v(" "),i("li",[l._v("Map<String,FilterDef> filters")]),l._v(" "),i("li",[l._v("Set"),i("FilterMap",[l._v(" filterMaps")])],1)])])])])])])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("收集ServletContainerInitializers")]),l._v(" "),i("li",[l._v("将WebXML对象中的信息配置到Context对象中")])])])])])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("context.addFilterDef(filter);")]),l._v(" "),i("li",[l._v("context.addFilterMap(filterMap);")]),l._v(" "),i("li",[l._v("context.addApplicationListener(listener);")]),l._v(" "),i("li",[l._v("遍历每个ServletDef，生成一个Wrapper，context.addChild(wrapper);")])])])])])])])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("调用ServletContainerInitializers")])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("上面会启动在server.xml中定义的Context，接下来会启动webapp文件夹下面的Context，是通过HostConfig触发的，调用HostConfig的start()")])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("deployApps();")])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("deployDescriptors(configBase, configBase.list()); // 描述符部署")]),l._v(" "),i("li",[l._v("deployWARs(appBase, filteredAppPaths); // war包部署")]),l._v(" "),i("li",[l._v("deployDirectories(appBase, filteredAppPaths); // 文件夹部署")])])])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("生成Context对象")]),l._v(" "),i("li",[l._v("context.setName(cn.getName());")]),l._v(" "),i("li",[l._v("context.setPath(cn.getPath());")]),l._v(" "),i("li",[l._v("host.addChild(context); // 这里会启动context，启动Context就会执行和上面类似的步骤")])])])])])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("threadStart(); // 启动一个background线程")])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("executor.start(); // 启动线程池, 如果用的默认连接池，这里不会启动")]),l._v(" "),i("li",[l._v("connector.start(); // 启动请求连接器")])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("protocolHandler.start(); // 启动接收连接")])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("endpoint.start(); // 启动Endpoint")])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("如果没有配置Executor，就创建一个默认的Executor")]),l._v(" "),i("li",[l._v("初始化connectionLimitLatch")]),l._v(" "),i("li",[l._v("如果是NIO，则运行Poller线程")]),l._v(" "),i("li",[l._v("运行Acceptor线程")])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("mapperListener.start();")])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("主要初始化Mapper对象，Mapper对象的结构层级如下")])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("Mapper中有属性Host[] hosts")]),l._v(" "),i("li",[l._v("Host中有属性ContextList contextList")]),l._v(" "),i("li",[l._v("ContextList中有属性Context[] contexts")]),l._v(" "),i("li",[l._v("Context中有属性ContextVersion[] versions")]),l._v(" "),i("li",[l._v("ContextVersion中有如下属性")])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("Wrapper[] exactWrappers，保存需要根据Servlet名字精确匹配的Wrapper")]),l._v(" "),i("li",[l._v('Wrapper[] wildcardWrappers，保存需要根据Servlet名字匹配以("/*")结尾的Wrapper')]),l._v(" "),i("li",[l._v('Wrapper[] extensionWrappers，保存需要根据Servlet名字匹配以("*.")开始的Wrapper')]),l._v(" "),i("li",[l._v("Wrapper中有如下两个属性")])])])])])])])])])])])])]),l._v(" "),i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[i("ol",[i("li",[l._v("name，Wrapper的名字")]),l._v(" "),i("li",[l._v("object，真实的Wrapper的对象")])])])])])])])])])])])])])])]),l._v(" "),i("li",[i("p",[l._v("catalina.await();  // 使用ServerSocket来监听shutdown命令来阻塞")])]),l._v(" "),i("li",[i("p",[l._v("catalina.stop();  // 如果阻塞被解开，那么开始停止流程")])])]),l._v(" "),i("h3",{attrs:{id:"总结-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结-3"}},[l._v("#")]),l._v(" 总结")]),l._v(" "),i("p",[l._v("启动做的事情就比较多了，主要分为以下几大步骤")]),l._v(" "),i("h4",{attrs:{id:"启动容器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[l._v("#")]),l._v(" 启动容器")]),l._v(" "),i("p",[l._v("启动容器主要是部署应用，部署应用分为两部分：")]),l._v(" "),i("ol",[i("li",[l._v("部署server.xml中定义的Context")]),l._v(" "),i("li",[l._v("部署webapp文件夹下的Context")])]),l._v(" "),i("p",[l._v("部署一个应用主要分为以下步骤")]),l._v(" "),i("ol",[i("li",[l._v("生成Context对象，server.xml中定义的Context在解析server.xml时就已经生成了，webapp文件夹下的是在部署之前生成的")]),l._v(" "),i("li",[l._v("为每个应用生成一个WebappClassLoader")]),l._v(" "),i("li",[l._v("解析web.xml")]),l._v(" "),i("li",[l._v("设置Context对象中的属性，比如有哪些Wrapper")])]),l._v(" "),i("h4",{attrs:{id:"启动connector"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#启动connector"}},[l._v("#")]),l._v(" 启动Connector")]),l._v(" "),i("p",[l._v("主要是：")]),l._v(" "),i("ol",[i("li",[l._v("启动Endpoint开始接收请求")]),l._v(" "),i("li",[l._v("构造Mapper对象，用来处理请求时，快速解析出当前请求对应哪个Context，哪个Wrapper")])])])}),[],!1,null,null,null);i.default=o.exports}}]);