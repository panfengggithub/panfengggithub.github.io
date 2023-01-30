(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{703:function(_,t,a){"use strict";a.r(t);var e=a(1),s=Object(e.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"raft算法-一-如何选举领导者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raft算法-一-如何选举领导者"}},[_._v("#")]),_._v(" "),t("strong",[_._v("Raft算法（一）：如何选举领导者？")])]),_._v(" "),t("p",[_._v("参考动画更容易理解：http://thesecretlivesofdata.com/raft/（自备梯子）")]),_._v(" "),t("p",[_._v("Raft算法官网：https://raft.github.io/ （官网上也有动画教程）")]),_._v(" "),t("p",[_._v("抄的极客时间上的，因为我觉得他写的好，没必要再写一遍")]),_._v(" "),t("p",[_._v("Raft 算法属于 Multi-Paxos 算法，它是在兰伯特 Multi-Paxos 思想的基础上，做了一些简化和限制，比如增加了日志必须是连续的，只支持领导者、跟随者和候选人三种状态，在理解和算法实现上都相对容易许多。")]),_._v(" "),t("p",[_._v("**除此之外，Raft 算法是现在分布式系统开发首选的共识算法。**绝大多数选用 Paxos 算法的系统（比如 Cubby、Spanner）都是在 Raft 算法发布前开发的，当时没得选；而全新的系统大多选择了 Raft 算法（比如 Etcd、Consul、CockroachDB）。")]),_._v(" "),t("p",[_._v("对你来说，掌握这个算法，可以得心应手地处理绝大部分场景的容错和一致性需求，比如分布式配置系统、分布式 NoSQL 存储等等，轻松突破系统的单机限制。")]),_._v(" "),t("p",[t("strong",[_._v("如果要用一句话概括 Raft 算法，我觉得是这样的：从本质上说，Raft 算法是通过一切以领导者为准的方式，实现一系列值的共识和各节点日志的一致")]),_._v("。这句话比较抽象，我来做个比喻，领导者就是 Raft 算法中的霸道总裁，通过霸道的“一切以我为准”的方式，决定了日志中命令的值，也实现了各节点日志的一致。")]),_._v(" "),t("p",[_._v("假设我们有一个由节点 A、B、C 组成的 Raft 集群（如图所示），因为 Raft 算法一切以领导者为准，所以如果集群中出现了多个领导者，就会出现不知道谁来做主的问题。在这样一个有多个节点的集群中，在节点故障、分区错误等异常情况下，Raft 算法如何保证在同一个时间，集群中只有一个领导者呢？")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587713858451-ff4b5b96-d741-4cc8-836c-bbe4a8984ab6.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("既然要选举领导者，那要从哪些成员中选举呢？除了领导者，Raft 算法还支持哪些成员身份呢？这部分内容是你需要掌握的，最基础的背景知识。")]),_._v(" "),t("h2",{attrs:{id:"有哪些成员身份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有哪些成员身份"}},[_._v("#")]),_._v(" 有哪些成员身份？")]),_._v(" "),t("p",[_._v("成员身份，又叫做服务器节点状态，"),t("strong",[_._v("Raft 算法支持领导者（Leader）、跟随者（Follower）和候选人（Candidate） 3 种状态")]),_._v("。为了方便讲解，我们使用不同的图形表示不同的状态。在任何时候，每一个服务器节点都处于这 3 个状态中的 1 个。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587713903062-d2d15e03-712d-4ae1-9ff1-fc71cfaacbd2.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("ul",[t("li",[_._v("跟随者：就相当于普通群众，默默地接收和处理来自领导者的消息，当等待领导者心跳信息超时的时候，就主动站出来，推荐自己当候选人。")]),_._v(" "),t("li",[_._v("候选人：候选人将向其他节点发送请求投票（RequestVote）RPC 消息，通知其他节点来投票，如果赢得了大多数选票，就晋升当领导者。")]),_._v(" "),t("li",[_._v("领导者：蛮不讲理的霸道总裁，一切以我为准，平常的主要工作内容就是 3 部分，处理写请求、管理日志复制和不断地发送心跳信息，通知其他节点“我是领导者，我还活着，你们现在不要发起新的选举，找个新领导者来替代我。”")])]),_._v(" "),t("p",[t("strong",[_._v("需要你注意的是，Raft 算法是强领导者模型，集群中只能有一个“霸道总裁”。")])]),_._v(" "),t("h2",{attrs:{id:"选举领导者的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选举领导者的过程"}},[_._v("#")]),_._v(" 选举领导者的过程")]),_._v(" "),t("p",[_._v("那么这三个成员是怎么选出来领导者的呢？为了方便你理解，我以图例的形式演示一个典型的领导者选举过程。")]),_._v(" "),t("p",[_._v("首先，在初始状态下，集群中所有的节点都是跟随者的状态。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587713975073-76699fe2-0513-4907-8031-2cb32c7b9ff9.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("Raft 算法实现了随机超时时间的特性。也就是说，每个节点等待领导者节点心跳信息的超时时间间隔是随机的。通过上面的图片你可以看到，集群中没有领导者，而节点 A 的等待超时时间最小（150ms），它会最先因为没有等到领导者的心跳信息，发生超时。")]),_._v(" "),t("p",[_._v("这个时候，节点 A 就增加自己的任期编号，并推举自己为候选人，先给自己投上一张选票，然后向其他节点发送请求投票 RPC 消息，请它们选举自己为领导者。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587714000046-0e387ff0-253a-4be6-9d07-58cf79182b09.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("如果其他节点接收到候选人 A 的请求投票 RPC 消息，在编号为 1 的这届任期内，也还没有进行过投票，那么它将把选票投给节点 A，并增加自己的任期编号。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587714010644-3f49b3da-9a3c-4192-b5ef-9237505c7430.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("如果候选人在选举超时时间内赢得了大多数的选票，那么它就会成为本届任期内新的领导者。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587714022592-81efe86a-0180-4ab8-a73d-14526a8c74c9.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("节点 A 当选领导者后，他将周期性地发送心跳消息，通知其他服务器我是领导者，阻止跟随者发起新的选举，篡权。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587714032646-fb9f2646-4f62-4d8e-a2c1-ba1319918cba.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("讲到这儿，你是不是发现领导者选举很容易理解？与现实中的议会选举也蛮类似？当然，你可能还是对一些细节产生一些疑问：")]),_._v(" "),t("ul",[t("li",[_._v("节点间是如何通讯的呢？")]),_._v(" "),t("li",[_._v("什么是任期呢？")]),_._v(" "),t("li",[_._v("选举有哪些规则？")]),_._v(" "),t("li",[_._v("随机超时时间又是什么？")])]),_._v(" "),t("h3",{attrs:{id:"选举过程四连问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选举过程四连问"}},[_._v("#")]),_._v(" 选举过程四连问")]),_._v(" "),t("p",[_._v("老话说，细节是魔鬼。这些细节也是很多同学在学习 Raft 算法的时候比较难掌握的，所以我认为有必要具体分析一下。咱们一步步来，先来看第一个问题。")]),_._v(" "),t("h4",{attrs:{id:"节点间如何通讯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点间如何通讯"}},[_._v("#")]),_._v(" 节点间如何通讯？")]),_._v(" "),t("p",[_._v("在 Raft 算法中，服务器节点间的沟通联络采用的是远程过程调用（RPC），在领导者选举中，需要用到这样两类的 RPC：")]),_._v(" "),t("ol",[t("li",[_._v("请求投票（RequestVote）RPC，是由候选人在选举期间发起，通知各节点进行投票；")]),_._v(" "),t("li",[_._v("日志复制（AppendEntries）RPC，是由领导者发起，用来复制日志和提供心跳消息。")])]),_._v(" "),t("p",[_._v("我想强调的是，日志复制 RPC 只能由领导者发起，这是实现强领导者模型的关键之一，希望你能注意这一点，后续能更好地理解日志复制，理解日志的一致是怎么实现的。")]),_._v(" "),t("h4",{attrs:{id:"什么是任期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是任期"}},[_._v("#")]),_._v(" 什么是任期？")]),_._v(" "),t("p",[_._v("我们知道，议会选举中的领导者是有任期的，领导者任命到期后，要重新开会再次选举。Raft 算法中的领导者也是有任期的，每个任期由单调递增的数字（任期编号）标识，比如节点 A 的任期编号是 1。任期编号是随着选举的举行而变化的，这是在说下面几点。")]),_._v(" "),t("ol",[t("li",[_._v("跟随者在等待领导者心跳信息超时后，推举自己为候选人时，会增加自己的任期号，比如节点 A 的当前任期编号为 0，那么在推举自己为候选人时，会将自己的任期编号增加为 1。")]),_._v(" "),t("li",[_._v("如果一个服务器节点，发现自己的任期编号比其他节点小，那么它会更新自己的编号到较大的编号值。比如节点 B 的任期编号是 0，当收到来自节点 A 的请求投票 RPC 消息时，因为消息中包含了节点 A 的任期编号，且编号为 1，那么节点 B 将把自己的任期编号更新为 1。")])]),_._v(" "),t("p",[_._v("我想强调的是，与现实议会选举中的领导者的任期不同，Raft 算法中的任期不只是时间段，而且任期编号的大小，会影响领导者选举和请求的处理。")]),_._v(" "),t("ol",[t("li",[_._v("在 Raft 算法中约定，如果一个候选人或者领导者，发现自己的任期编号比其他节点小，那么它会立即恢复成跟随者状态。比如分区错误恢复后，任期编号为 3 的领导者节点 B，收到来自新领导者的，包含任期编号为 4 的心跳消息，那么节点 B 将立即恢复成跟随者状态。")]),_._v(" "),t("li",[_._v("还约定如果一个节点接收到一个包含较小的任期编号值的请求，那么它会直接拒绝这个请求。比如节点 C 的任期编号为 4，收到包含任期编号为 3 的请求投票 RPC 消息，那么它将拒绝这个消息。")])]),_._v(" "),t("p",[_._v("在这里，你可以看到，Raft 算法中的任期比议会选举中的任期要复杂。同样，在 Raft 算法中，选举规则的内容也会比较多。")]),_._v(" "),t("h4",{attrs:{id:"选举有哪些规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选举有哪些规则"}},[_._v("#")]),_._v(" 选举有哪些规则")]),_._v(" "),t("p",[_._v("在议会选举中，比成员的身份、领导者的任期还要重要的就是选举的规则，比如一人一票、弹劾制度等。“无规矩不成方圆”，在 Raft 算法中，也约定了选举规则，主要有这样几点。")]),_._v(" "),t("ol",[t("li",[_._v("领导者周期性地向所有跟随者发送心跳消息（即不包含日志项的日志复制 RPC 消息），通知大家我是领导者，阻止跟随者发起新的选举。")]),_._v(" "),t("li",[_._v("如果在指定时间内，跟随者没有接收到来自领导者的消息，那么它就认为当前没有领导者，推举自己为候选人，发起领导者选举。")]),_._v(" "),t("li",[_._v("在一次选举中，赢得大多数选票的候选人，将晋升为领导者。")]),_._v(" "),t("li",[_._v("在一个任期内，领导者一直都会是领导者，直到它自身出现问题（比如宕机），或者因为网络延迟，其他节点发起一轮新的选举。")]),_._v(" "),t("li",[_._v("在一次选举中，每一个服务器节点最多会对一个任期编号投出一张选票，并且按照“先来先服务”的原则进行投票。比如节点 C 的任期编号为 3，先收到了 1 个包含任期编号为 4 的投票请求（来自节点 A），然后又收到了 1 个包含任期编号为 4 的投票请求（来自节点 B）。那么节点 C 将会把唯一一张选票投给节点 A，当再收到节点 B 的投票请求 RPC 消息时，对于编号为 4 的任期，已没有选票可投了。"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587714240897-b7c811ae-b032-425b-b8a5-f9029895a9f1.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("li",[_._v("日志完整性高的跟随者（也就是最后一条日志项对应的任期编号值更大，索引号更大），拒绝投票给日志完整性低的候选人。比如节点 B 的任期编号为 3，节点 C 的任期编号是 4，节点 B 的最后一条日志项对应的任期编号为 3，而节点 C 为 2，那么当节点 C 请求节点 B 投票给自己时，节点 B 将拒绝投票。"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/365147/1587714251010-42c1efda-56fb-4d7b-b4b8-dedf116b5e5c.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])]),_._v(" "),t("p",[_._v("我想强调的是，选举是跟随者发起的，推举自己为候选人；大多数选票是指集群成员半数以上的选票；大多数选票规则的目标，是为了保证在一个给定的任期内最多只有一个领导者。")]),_._v(" "),t("p",[_._v("其实在选举中，除了选举规则外，我们还需要避免一些会导致选举失败的情况，比如同一任期内，多个候选人同时发起选举，导致选票被瓜分，选举失败。那么在 Raft 算法中，如何避免这个问题呢？答案就是随机超时时间。")]),_._v(" "),t("h4",{attrs:{id:"如何理解随机超时时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何理解随机超时时间"}},[_._v("#")]),_._v(" 如何理解随机超时时间")]),_._v(" "),t("p",[_._v("在议会选举中，常出现未达到指定票数，选举无效，需要重新选举的情况。在 Raft 算法的选举中，也存在类似的问题，那它是如何处理选举无效的问题呢？")]),_._v(" "),t("p",[_._v("其实，Raft 算法巧妙地使用随机选举超时时间的方法，把超时时间都分散开来，在大多数情况下只有一个服务器节点先发起选举，而不是同时发起选举，这样就能减少因选票瓜分导致选举失败的情况。")]),_._v(" "),t("p",[_._v("我想强调的是，"),t("strong",[_._v("在 Raft 算法中，随机超时时间是有 2 种含义的，这里是很多同学容易理解出错的地方，需要你注意一下")]),_._v("：")]),_._v(" "),t("p",[_._v("\\1. 跟随者等待领导者心跳信息超时的时间间隔，是随机的；")]),_._v(" "),t("p",[_._v("\\2. 如果候选人在一个随机时间间隔内，没有赢得过半票数，那么选举无效了，然后候选人发起新一轮的选举，也就是说，等待选举超时的时间间隔，是随机的。")]),_._v(" "),t("h2",{attrs:{id:"内容小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容小结"}},[_._v("#")]),_._v(" 内容小结")]),_._v(" "),t("ul",[t("li",[_._v("Raft 算法和兰伯特的 Multi-Paxos 不同之处，主要有 2 点。首先，在 Raft 中，不是所有节点都能当选领导者，只有日志较完整的节点（也就是日志完整度不比半数节点低的节点），才能当选领导者；其次，在 Raft 中，日志必须是连续的。")]),_._v(" "),t("li",[_._v("Raft 算法通过任期、领导者心跳消息、随机选举超时时间、先来先服务的投票原则、大多数选票原则等，保证了一个任期只有一位领导，也极大地减少了选举失败的情况。")]),_._v(" "),t("li",[_._v("本质上，Raft 算法以领导者为中心，选举出的领导者，以“一切以我为准”的方式，达成值的共识，和实现各节点日志的一致。")])]),_._v(" "),t("p",[_._v("在本讲，我们使用 Raft 算法在集群中选出了领导者节点 A，那么选完领导者之后，领导者需要处理来自客户的写请求，并通过日志复制实现各节点日志的一致（下节课我会重点带你了解这一部分内容）。")])])}),[],!1,null,null,null);t.default=s.exports}}]);