(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{678:function(e,r,_){"use strict";_.r(r);var v=_(1),o=Object(v.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"zookeeper集群两阶段提交原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper集群两阶段提交原理"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Zookeeper集群两阶段提交原理")])]),e._v(" "),r("p",[e._v("Leader、Follower、Observer中的RequestProcess整理：https://www.processon.com/view/link/5e993d5de0b34d6feab4b435")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1590296396540-fed52b51-2088-4f46-b9ed-245fd7f8f7c7.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_41%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),r("p",[e._v("Zookeeper集群为了保证数据一致性，利用两阶段提交机制。")]),e._v(" "),r("p",[e._v("对于Leader节点和非Leader节点（Follower或Observer）在处理读写请求时是不一样的。")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th"),e._v(" "),r("th",[e._v("Leader节点")]),e._v(" "),r("th",[e._v("非Leader节点（Follower或Observer）")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("读请求")]),e._v(" "),r("td",[e._v("从当前节点直接读数据")]),e._v(" "),r("td",[e._v("从当前节点直接读数据")])]),e._v(" "),r("tr",[r("td",[e._v("写请求")]),e._v(" "),r("td",[e._v("直接进行两阶段提交")]),e._v(" "),r("td",[e._v("把请求转发给Leader节点")])])])]),e._v(" "),r("p",[e._v("所以，我们只分析Zookeeper集群是怎么处理"),r("strong",[e._v("写请求")]),e._v("的。")]),e._v(" "),r("p",[r("strong",[e._v("某个ZookeeperServer")]),e._v("在处理写请求时，主要分为以下几步:")]),e._v(" "),r("ol",[r("li",[e._v("针对当前请求生成日志（Txn）")]),e._v(" "),r("li",[e._v("持久化日志（持久化Txn）")]),e._v(" "),r("li",[e._v("执行日志，更新内存（根据Txn更新DataBase）")])]),e._v(" "),r("p",[e._v("以上是单个ZookeeperServer执行写请求的步骤，那么，集群在处理写请求时只是在这几步之上做了修改。")]),e._v(" "),r("p",[r("strong",[e._v("Zookeeper集群")]),e._v("处理写请求时，主要分为以下几步：")]),e._v(" "),r("ol",[r("li",[e._v("Leader节点，针对当前请求生成日志（Txn）")]),e._v(" "),r("li",[e._v("Leader节点，持久化前请求生成日志（Txn），并向自己发送一个Ack")]),e._v(" "),r("li",[e._v("Leader节点，把当前请求生成的日志（Txn）发送给其他所有的参与者节点（非Observer）")]),e._v(" "),r("li",[e._v("Leader节点，阻塞等待Follower节点发送Ack过来（超过一半则解阻塞）")]),e._v(" "),r("li",[e._v("Follower节点，接收到Leader节点发送过来的Txn")]),e._v(" "),r("li",[e._v("Follower节点，持久化当前Txn，并向Leader节点发送一个Ack")]),e._v(" "),r("li",[e._v("Leader节点，接收到了超过一半的Ack（加上自己发给自己的Ack），则解阻塞")]),e._v(" "),r("li",[e._v("Leader节点，向Follower节点发送commit命令（异步发送的，不会阻塞Leader节点）")]),e._v(" "),r("li",[e._v("Leader节点，执行Txn，更新内存（根据Txn更新DataBase）")]),e._v(" "),r("li",[e._v("Follower节点，接收到Leader节点发送过来的commit命令")]),e._v(" "),r("li",[e._v("Follower节点，执行Txn，更新内存（根据Txn更新DataBase）")])])])}),[],!1,null,null,null);r.default=o.exports}}]);