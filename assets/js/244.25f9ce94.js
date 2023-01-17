(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{657:function(e,t,v){"use strict";v.r(t);var s=v(1),_=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"zookeeper连接建立流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper连接建立流程"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Zookeeper连接建立流程")])]),e._v(" "),t("h2",{attrs:{id:"sendthread功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendthread功能"}},[e._v("#")]),e._v(" SendThread功能")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("负责建立socket连接")])]),e._v(" "),t("li",[t("p",[e._v("负责从outgoingQueue中获取命令数据发送给服务端")])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("ping命令")]),e._v(" "),t("li",[e._v("CRUD命令")]),e._v(" "),t("li",[e._v("auth命令")])])]),e._v(" "),t("li",[t("p",[e._v("负责读取服务端响应数据")])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("ping的结果")]),e._v(" "),t("li",[e._v("auth结果")]),e._v(" "),t("li",[e._v("通知")])])]),e._v(" "),t("li",[t("ol",[t("li",[t("ol",[t("li",[e._v("监听器事件：添加到"),t("strong",[e._v("waitingEvents")]),e._v("队列中**。**")])])])])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("设置数据包Packet的响应信息")]),e._v(" "),t("li",[e._v("注册监听器")]),e._v(" "),t("li",[e._v("如果是异步调用，则把Packet添加到"),t("strong",[e._v("waitingEvents")]),e._v("队列中。")]),e._v(" "),t("li",[e._v("如果是同步调用，则notifyAll")])])])]),e._v(" "),t("h2",{attrs:{id:"eventthread功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eventthread功能"}},[e._v("#")]),e._v(" EventThread功能")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("从"),t("strong",[e._v("waitingEvents")]),e._v("队列中获取数据")])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("执行监听器事件")]),e._v(" "),t("li",[e._v("执行Packet的异步调用")]),e._v(" "),t("li",[e._v("执行"),t("strong",[e._v("eventOfDeath")]),e._v("事件：关闭EventThread线程（执行quit命令是会向"),t("strong",[e._v("waitingEvents")]),e._v("队列中添加该事件）")])])])]),e._v(" "),t("h2",{attrs:{id:"重连逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重连逻辑"}},[e._v("#")]),e._v(" 重连逻辑")]),e._v(" "),t("p",[e._v("Zookeeper对象，表示一个Zookeeper客户端")]),e._v(" "),t("p",[e._v("当服务端挂掉后，Zookeeper对象并没有消失，会不断的进行重连，socket连接建立好了之后，会先发送一个ConnectRequest对象，该对象包括：")]),e._v(" "),t("ol",[t("li",[e._v("当前Zookeeper对象，最近一次接受到的响应中的zxid（第一次连接时为0）")]),e._v(" "),t("li",[e._v("当前Zookeeper对象中存的sessionId（第一次连接时为0）")])]),e._v(" "),t("p",[e._v("服务端侧，服务端重启时，会从快照和日志记录中进行重放，其中就包括session的重新创建，所以一个session不是被正常关闭的，那么服务器重启时能恢复session，包括临时节点也是一样的，服务端重启后，如果接收到一个ConnectRequest对象，发现其sessionId不为空，那么还会去touchSession，更新session的过期时间，这样就保证了服务器重启后，临时节点所对应的session只要还没有超过过期时间，临时节点依然存在。")]),e._v(" "),t("p",[e._v("在Zookeeper对象内部有一个ZKWatchManager对象。")]),e._v(" "),t("p",[e._v("ZKWatchManager对象是用来管理客户端上的存在的"),t("strong",[e._v("Watches")]),e._v("，在连接初始化时会判断当前客户端上是否存在Watche，如果存在会批量重新注册到服务端，这样也就保证了客户端所注册的watch在服务端重启后依然存在。")]),e._v(" "),t("p",[e._v("ProcessOn查看地址：https://www.processon.com/view/link/5e918810f346fb4bdd5eb007")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1586604650939-afc5a21f-9e96-42e5-ae97-0e742a74fc5a.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_145%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])])}),[],!1,null,null,null);t.default=_.exports}}]);