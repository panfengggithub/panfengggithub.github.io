(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{547:function(s,e,t){"use strict";t.r(e);var n=t(1),o=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"zookeeper中session的底层原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper中session的底层原理"}},[s._v("#")]),s._v(" "),e("strong",[s._v("Zookeeper中Session的底层原理")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1589283559918-a4ca3fd0-20db-4bd9-88fc-9e2690e3bae8.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_39%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),e("h2",{attrs:{id:"session的创建流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session的创建流程"}},[s._v("#")]),s._v(" Session的创建流程")]),s._v(" "),e("p",[s._v("客户端和服务端Socket连接建立成功后，客户端会向服务端发送一个ConnectRequest请求，服务端接收到ConnectRequest请求后，会创建SessionImpl对象，并且把SessionImpl对象放入"),e("strong",[s._v("sessionsById")]),s._v("中（sessionById是一个Map）"),e("strong",[s._v("，"),e("strong",[s._v("并且会把Session的过期时间更新到")]),s._v("sessionExpiryQueue")]),s._v("中，然后会在服务端内部构造一个OpCode.createSession的Request，该Request会依次经过PrepRequestProcessor、SyncRequestProcessor、FinalRequestProcessor。")]),s._v(" "),e("ol",[e("li",[s._v("在PrepRequestProcessor中设置Reqeust的txn")]),s._v(" "),e("li",[s._v("在SyncRequestProcessor对txn进行持久化（创建session的操作会持久化）")]),s._v(" "),e("li",[s._v("在FinalRequestProcessor会对Session进行提交，其实就是把Session的ID和Timeout存到"),e("strong",[s._v("sessionsWithTimeout")]),s._v("中去")])]),s._v(" "),e("h2",{attrs:{id:"session的刷新流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session的刷新流程"}},[s._v("#")]),s._v(" Session的刷新流程")]),s._v(" "),e("p",[s._v("服务端每接收到一个请求（包括增删查改和Ping请求），都会对sessionExpiryQueue中的Session的过期时间进行刷新。")]),s._v(" "),e("p",[s._v("刷新过程中有一个时间轮的思想，比如sessionA的过期时间是30秒，当前时间是2020.5.10 05.10.13，那么正常情况下，到2020.5.10 05.10.43的时候，该sessionA就要过期，但是在ZooKeeper中不是这样的，当tickTime为2秒时，sessionA的过期时间点为2020.5.10 05.10.44。")]),s._v(" "),e("h2",{attrs:{id:"session的过期处理流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session的过期处理流程"}},[s._v("#")]),s._v(" Session的过期处理流程")]),s._v(" "),e("p",[s._v("SessionTrackerImpl是Session跟踪器的实现类，由它负责处理Session的过期时间刷新和对过期的Session进行处理.")]),s._v(" "),e("p",[s._v("SessionTrackerImpl是一个线程，该线程会每隔一个tickTime就去检查一下有没有Session已经过期，如果过期了，则对Session进行过期处理，构造一个closeSession的Request，交给服务端进行处理。")]),s._v(" "),e("h2",{attrs:{id:"session的关闭流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session的关闭流程"}},[s._v("#")]),s._v(" Session的关闭流程")]),s._v(" "),e("p",[s._v("对应的操作是closeSession，也会进行持久化，同时FinalRequestProcessor在执行closeSession请求时，会删除临时节点，并且把session从"),e("strong",[s._v("sessionsById、****sessionsWithTimeout、****sessionExpiryQueue")]),s._v("移除掉。")]),s._v(" "),e("h2",{attrs:{id:"session的恢复流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session的恢复流程"}},[s._v("#")]),s._v(" Session的恢复流程")]),s._v(" "),e("p",[s._v("服务端在打快照时，在持久化DataTree的同时会把"),e("strong",[s._v("sessionsWithTimeout")]),s._v("也进行持久化，比如代码：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("txnLogFactory.save"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("zkDb.getDataTree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", zkDb.getSessionWithTimeOuts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", syncSnap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("而服务端在启动时，在加载DataTree的同时也会把"),e("strong",[s._v("sessionsWithTimeouts")]),s._v("加载出来，比如代码：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("long zxid "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" snapLog.restore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dataTree, sessionsWithTimeouts, commitProposalPlaybackListener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("sessionsWithTimeouts表示Session的信息，服务端在接下来的启动过程中会依据sessionsWithTimeouts中的内容初始化sessionsById和sessionExpiryQueue。")])])}),[],!1,null,null,null);e.default=o.exports}}]);