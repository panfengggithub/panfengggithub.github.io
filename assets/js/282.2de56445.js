(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{695:function(e,t,a){"use strict";a.r(t);var s=a(1),h=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"zookeeper中的watch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper中的watch"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Zookeeper中的Watch")])]),e._v(" "),t("p",[e._v("watcher 机制主要提供了服务通知功能")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1589111278898-28084d7f-a38f-4259-a97b-82b9ae01e0f2.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_35%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"watche的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watche的分类"}},[e._v("#")]),e._v(" Watche的分类")]),e._v(" "),t("p",[e._v("客户端三类，服务端两类")]),e._v(" "),t("ol",[t("li",[e._v("dataWatches：表示监听的是某节点的数据变化，比如数据的新增、修改、删除")]),e._v(" "),t("li",[e._v("childWathes：表示监听的是某节点的孩子节点的变化，如果某个节点新增或删除了，会触发其父节点上的NodeChildrenChanged事件")]),e._v(" "),t("li",[e._v("existWatches（只在客户端）：服务端无需单独触发该事件，由客户端接收其他事件自己判断，比如客户端接收到一个NodeCreated事件，客户端如果注册了existWatches，那么existWatches就会被触发。")])]),e._v(" "),t("h3",{attrs:{id:"不同的watcher事件类型会触发哪些watche"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同的watcher事件类型会触发哪些watche"}},[e._v("#")]),e._v(" 不同的Watcher事件类型会触发哪些Watche")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("None")])])]),e._v(" "),t("li",[t("ul",[t("li",[e._v("defaultWatcher")]),e._v(" "),t("li",[e._v("所有dataWatches（触发完可能清空）")]),e._v(" "),t("li",[e._v("所有existWatches（触发完可能清空）")]),e._v(" "),t("li",[e._v("所有childWatches（触发完可能清空）")]),e._v(" "),t("li",[e._v("所有的persistentWatches")]),e._v(" "),t("li",[e._v("所有的persistentRecursiveWatches")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("NodeDataChanged")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("NodeCreated")])])]),e._v(" "),t("li",[t("ul",[t("li",[e._v("对应path的dataWatches（立马移除，先移除再执行）")]),e._v(" "),t("li",[e._v("对应path的existWatches（立马移除，先移除再执行，如果绑定了existWatche，当节点被新增或修改时触发）")]),e._v(" "),t("li",[e._v("对应path的persistentWatches")]),e._v(" "),t("li",[e._v("对应path的每层父path对应的persistentRecursiveWatches（这里有点难理解，persistentRecursiveWatches中存储的就是Watcher,这里根据当前WatchedEvent对应的path，找到该path的各层父path，然后再遍历各层父path，根据父path去从persistentRecursiveWatches集合中找当前父path是不是有对应的Watcher，如果有就添加到result中去，等待执行，这就是递归，一个子节点的数据发生了变化，父节点上的Watcher也能被触发）")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("NodeChildrenChanged")])])]),e._v(" "),t("li",[t("ul",[t("li",[e._v("对应path的childWatches（立马移除，先移除再执行）")]),e._v(" "),t("li",[e._v("对应path的persistentWatches")]),e._v(" "),t("li",[e._v("对应path的每层父path对应的persistentRecursiveWatches")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("NodeDeleted")])])]),e._v(" "),t("li",[t("ul",[t("li",[e._v("对应path的dataWatches（立马移除，先移除再执行）")]),e._v(" "),t("li",[e._v("对应path的existWatches（立马移除，先移除再执行，如果绑定了existWatche，当节点被删除时触发）")]),e._v(" "),t("li",[e._v("对应path的childWatches（立马移除，先移除再执行）")]),e._v(" "),t("li",[e._v("对应path的persistentWatches")]),e._v(" "),t("li",[e._v("对应path的每层父path对应的persistentRecursiveWatches")])])])]),e._v(" "),t("h3",{attrs:{id:"不同的操作触发的watcher事件类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同的操作触发的watcher事件类型"}},[e._v("#")]),e._v(" 不同的操作触发的Watcher事件类型")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("创建节点")])]),e._v(" "),t("li",[t("ul",[t("li",[e._v("触发当前节点的NodeCreated事件")]),e._v(" "),t("li",[e._v("触发当前节点的父节点的NodeChildrenChanged事件")])])]),e._v(" "),t("li",[t("p",[e._v("删除节点")])]),e._v(" "),t("li",[t("ul",[t("li",[e._v("触发当前节点的NodeDeleted事件")]),e._v(" "),t("li",[e._v("触发当前节点的父节点的NodeChildrenChanged事件")])])]),e._v(" "),t("li",[t("p",[e._v("修改节点")])]),e._v(" "),t("li",[t("ul",[t("li",[e._v("触发当前节点的NodeDataChanged事件")])])])]),e._v(" "),t("p",[e._v("注意NodeChildrenChanged事件不会触发persistentRecursiveWatches")])])}),[],!1,null,null,null);t.default=h.exports}}]);