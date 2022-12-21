(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{542:function(e,r,s){"use strict";s.r(r);var t=s(1),a=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"requestprocessor详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requestprocessor详解"}},[e._v("#")]),e._v(" "),r("strong",[e._v("RequestProcessor详解")])]),e._v(" "),r("h2",{attrs:{id:"preprequestprocessor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preprequestprocessor"}},[e._v("#")]),e._v(" PrepRequestProcessor")]),e._v(" "),r("p",[e._v("通常是一个Requestprocessor Chain中的第一个Processor，用来预处理请求。")]),e._v(" "),r("p",[e._v("主要包括：")]),e._v(" "),r("ol",[r("li",[e._v("检查ACL，如果不匹配ACL，则直接结束对该请求的处理")]),e._v(" "),r("li",[e._v("生成并记录ChangeRecord")]),e._v(" "),r("li",[e._v("设置持久化txn")]),e._v(" "),r("li",[e._v("调用下一个RequestProcessor")])]),e._v(" "),r("p",[e._v("通俗一点理解就是，过滤Request，不是所有的Request都是合法的，所以需要对Request进行合法的验证，验证通过后，对于Request而言就要进行持久化了，所以PrepRequestProcessor中也为持久化做一下准备，比如生成和Txn和TxnHeader，在持久化时直接从Request中获取这两个属性进行持久化就行了。")]),e._v(" "),r("p",[e._v("另外，Request持久化完成后，就需要更新DataTree了，并且是根据Txn来更新DataTree（根据持久化的信息来更新DataTree）。")]),e._v(" "),r("p",[e._v("那么，为什么需要ChangeRecord呢？")]),e._v(" "),r("p",[e._v("ChangeRecord表示修改记录，表示某个节点的修改记录，在处理Request时，需要依赖现有节点上的已有信息，比如cversion（某个节点的孩子节点版本），比如，在处理一个create请求时，需要修改父节点上的cversion（加1），那么这个信息从哪来呢？一开始肯定是从DataTree上来，但是不能每次都从DataTree上来获取父节点的信息，这样性能很慢，比如ZooKeeperServer连续收到两个create请求，当某个create请求在被处理时，都需要先从DataTree获取信息，然后持久化，然后更新DataTree，最后才能处理下一个create请求，是一个串行的过程，那么如果第二个create不合法呢？依照上面的思路，则还需要等待第一个create请求处理完了之后才能对第二个请求进行验证，所以Zookeeper为了解决这个问题，在PrepRequestProcessor中，没验证完一个请求，就把这个请求异步的交给持久化线程来处理，PrepRequestProcessor自己就去处理下一个请求了，打断了串行的链路，但是这时又出现了问题，因为在处理第二个create请求时需要依赖父节点的信息，并且应该处理过第一个create请求后的结果，所以这时就引入了ChangeRecord，PrepRequestProcessor在处理第一个create请求时，先生成一条ChangeRecord记录，然后再异步的去持久化和更新DataTree，然后立即去处理第二个create请求，此时就可以不需要去取DataTree中的信息了（就算取了，可能取到的信息也不对），就直接取ChangeRecord中的信息就可以了。")]),e._v(" "),r("h2",{attrs:{id:"syncrequestprocessor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syncrequestprocessor"}},[e._v("#")]),e._v(" SyncRequestProcessor")]),e._v(" "),r("p",[e._v("SyncReqeustProcessor负责对某个请求进行持久化，但是它又不仅仅只对Request进行持久化，还会打快照（对DataTree进行持久化）")]),e._v(" "),r("h3",{attrs:{id:"request持久化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request持久化"}},[e._v("#")]),e._v(" Request持久化")]),e._v(" "),r("p",[e._v("在SyncReqeustProcessor中，不是没接收到一个Reqeust就直接进行持久化，它的思路是批量持久化。")]),e._v(" "),r("p",[e._v("SyncReqeustProcessor会不断的接收到读写请求，当接收到先请求时，会把请求写到文件的OutputStream中，并把请求添加到toFlush队列中，然后就去处理下一个请求，如果下一个请求是一个读请求，则会直接把读请求交给nextProcessor进行处理，如果下一个请求是一个写请求，和上一个写请求的处理逻辑是一样的，先把请求写到文件的OutputStream中，并把请求添加到toFlush队列中。")]),e._v(" "),r("p",[e._v("如果处理完一个写请求后，一小段时间内没有接收到新的请求，则会把toFlush队列中的请求进行flush（真正把数据持久化到file中去），并把请求交给nextProcessor进行处理")]),e._v(" "),r("p",[e._v("如果处理完一个写请求后，正好满足了应该flush的条件（时间条件和累积的请求个数）则也会进行flush")]),e._v(" "),r("h3",{attrs:{id:"快照"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快照"}},[e._v("#")]),e._v(" 快照")]),e._v(" "),r("p",[e._v("DataTree的快照时间不是固定的，具有一定的随机性。")]),e._v(" "),r("p",[e._v("打快照的第一个前提的条件是，SyncReqeustProcessor成功的把某个写请求写到了文件的OutputStream中，然后再判断当前还没有flush的请求的个数和字节总和，如果其中一个条件符合了就会进行打快照。")]),e._v(" "),r("p",[e._v("再打快照之前先把之前还没有flush的请求也flush，然后再单开一个线程去对DataTree进行持久化")]),e._v(" "),r("h2",{attrs:{id:"finalrequestprocessor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#finalrequestprocessor"}},[e._v("#")]),e._v(" FinalRequestProcessor")]),e._v(" "),r("p",[e._v("FinalRequestProcessor所做的事情比较清晰：")]),e._v(" "),r("ol",[r("li",[e._v("更新DataTree")]),e._v(" "),r("li",[e._v("触发Watch")]),e._v(" "),r("li",[e._v("返回Response")])])])}),[],!1,null,null,null);r.default=a.exports}}]);