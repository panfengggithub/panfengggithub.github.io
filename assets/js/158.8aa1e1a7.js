(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{571:function(e,r,a){"use strict";a.r(r);var t=a(1),o=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"zookeeper集群同步数据原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper集群同步数据原理"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Zookeeper集群同步数据原理")])]),e._v(" "),r("h2",{attrs:{id:"leader和learner什么时候开始同步数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#leader和learner什么时候开始同步数据"}},[e._v("#")]),e._v(" Leader和Learner什么时候开始同步数据")]),e._v(" "),r("p",[e._v("当服务器启动时，完成了领导者选举后，确定了服务器的角色后（比如Leader、Follower、Observer），会先统一Epoch，然后就开始数据同步，最后再构造RequestProcessor，处理客户端的请求。")]),e._v(" "),r("ol",[r("li",[e._v("Learner节点向Leader发送LearnerInfo数据(包含了acceptEpoch)，然后等待Leader响应")]),e._v(" "),r("li",[e._v("Leader不停的从Learner节点接收到发送过来的LearnerInfo数据，比较Epoch，超过过半机制后统一epoch")]),e._v(" "),r("li",[e._v("Leader同一Epoch后，向Learner节点，发送LEADERINFO数据（包含了新的epoch）,等待接收ACKEPOCH数据")]),e._v(" "),r("li",[e._v("Learner节点接收到LEADERINFO数据后，修改自己的epoch，然后发送ACKEPOCH数据给Leader")]),e._v(" "),r("li",[e._v("当Leader节点接收到了大部分的ACKEPOCH数据后，就开始同步数据，Learner节点阻塞等待Leader节点发送数据过来进行同步")]),e._v(" "),r("li",[e._v("Leader节点整理要同步的数据，把这些数据先会添加到queuedPackets队列中去，并且往队列中添加了一个NEWLEADER数据")]),e._v(" "),r("li",[e._v("Leader节点开启一个线程，从queuedPackets队列中获取数据进行同步")]),e._v(" "),r("li",[e._v("Learner节点接收数据进行同步，同步完之后，会接收到一个NEWLEADER数据，并返回给Leader一个ACK数据")]),e._v(" "),r("li",[e._v("Leader节点接收到了超过一半的ack后，则运行一个while，负责从Learner接收命令\n10.Leader节点启动\n11.Follower节点启动")])]),e._v(" "),r("h2",{attrs:{id:"leader和learner要同步哪些数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#leader和learner要同步哪些数据"}},[e._v("#")]),e._v(" Leader和Learner要同步哪些数据")]),e._v(" "),r("p",[e._v("数据的同步的目的：Learner和Leader上的数据保持一致。那么就有可能：")]),e._v(" "),r("ol",[r("li",[e._v("Leader的数据比Learner新，这时Leader要把多出的数据发给Learner。")]),e._v(" "),r("li",[e._v("Learner的数据比Leader新，这时Learner要把多出的数据删除掉。")])]),e._v(" "),r("p",[e._v("如何判断Learner和Leader上的数据新旧？根据zxid。")]),e._v(" "),r("p",[e._v("如何发送数据给Leader？日志？快照？")]),e._v(" "),r("p",[e._v("在Leader上，数据会保存在几个地方：")]),e._v(" "),r("ol",[r("li",[e._v("日志文件中（txnlog）：数据最新")]),e._v(" "),r("li",[e._v("快照中（snapshot）：数据新度有延迟")]),e._v(" "),r("li",[e._v("CommittedLog队列：保存的是Leader节点最近处理的请求（相当于日志，日志是持久化在文件中的，而CommittedLog是在内存中的）")])]),e._v(" "),r("p",[e._v("当Learner节点向Leader节点发起同步数据请求时，Learner会把它目前最大的zxid发给Leader，Leader则会结合自身的信息来进行判断，需要告知Learner如何同步数据")]),e._v(" "),r("ul",[r("li",[e._v("peerLastZxid：表示Learner上最大的zxid")]),e._v(" "),r("li",[e._v("lastProcessedZxid：表示Leader上最大的zxid")]),e._v(" "),r("li",[e._v("maxCommittedLog：表示CommittedLog队列中最大的CommittedLog")]),e._v(" "),r("li",[e._v("minCommittedLog：表示CommittedLog队列中最小的CommittedLog")])]),e._v(" "),r("ol",[r("li",[e._v("forceSnapSync=true， 表示开启了强制使用快照同步（Leader发送快照文件给Learner）")]),e._v(" "),r("li",[e._v("lastProcessedZxid == peerLastZxid，表示无需同步")]),e._v(" "),r("li",[e._v("peerLastZxid > maxCommittedLog，表示Learner的数据比Leader上多，需要回滚（"),r("strong",[e._v("TRUNC")]),e._v("）")]),e._v(" "),r("li",[e._v("minCommittedLog <= peerLastZxid <= maxCommittedLog， 把CommittedLog队列中的（peerLastZxid , maxCommittedLog]的日志发送给Learner")]),e._v(" "),r("li",[e._v("peerLastZxid < minCommittedLog，把日志文件中的(peerLastZxid, minCommittedLog]的日志发送给leader，如果日志文件中的日志小于minCommittedLog，那么则认为日志文件少了（为什么了少了？），那么则不发日志了，因为日志少了（就算把日志发过去，数据页可能是不全的），所以进行快照同步。如果日志文件中的日志超过了minCommittedLog，那么则把日志中的(peerLastZxid, minCommittedLog]的日志发送过去，再加上CommittedLog队列中的(日志文件中的最大的zxid，maxCommittedLog]发送过去。")]),e._v(" "),r("li",[e._v("按照上面的规则，把数据发送给Learner后，还不够，还需要把Leader服务器上正在处理的请求也发送出去（toBeApplied和outstandingProposals队列中的请求），toBeApplied队列表示已经完成了两阶段提交的请求，但是还没有更新到DataTree中的请求，outstandingProposals队列表示发起了两阶段提交，暂时还没有进行第二阶段提交的请求。")]),e._v(" "),r("li",[e._v("如果需要发快照，则把DataTree序列化，然后发送给Learner（代码流程控制了，是先发送快照，再发送日志）")])])])}),[],!1,null,null,null);r.default=o.exports}}]);