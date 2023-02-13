(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{690:function(t,e,_){"use strict";_.r(e);var v=_(1),d=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"zookeeper客户端发送数据packet整理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper客户端发送数据packet整理"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Zookeeper客户端发送数据Packet整理")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("requestHeader")]),t._v(" "),e("th",[t._v("replyHeader")]),t._v(" "),e("th",[t._v("request")]),t._v(" "),e("th",[t._v("response")]),t._v(" "),e("th",[t._v("watchRegistration")]),t._v(" "),e("th",[t._v("readOnly")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ConnectRequest")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("ConnectRequest对象")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("readOnly标志")])]),t._v(" "),e("tr",[e("td",[t._v("Auth")]),t._v(" "),e("td",[t._v("RequestHeader(ClientCnxn."),e("strong",[t._v("AUTHPACKET_XID")]),t._v(",OpCode."),e("strong",[t._v("auth")]),t._v(")")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("AuthPacket对象")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("SetWatches")]),t._v(" "),e("td",[t._v("RequestHeader(ClientCnxn.**SET_WATCHES_XID,**opcode)")]),t._v(" "),e("td",[t._v("ReplyHeader对象")]),t._v(" "),e("td",[t._v("SetWatches对象")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("Ping")]),t._v(" "),e("td",[t._v("RequestHeader(ClientCnxn.**PING_XID,**OpCode."),e("strong",[t._v("ping")]),t._v(")")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("getData")]),t._v(" "),e("td",[t._v("RequestHeader(null,OpCode."),e("strong",[t._v("getData")]),t._v(")")]),t._v(" "),e("td",[t._v("ReplyHeader对象")]),t._v(" "),e("td",[t._v("GetDataRequest对象")]),t._v(" "),e("td",[t._v("GetDataResponse对象")]),t._v(" "),e("td",[t._v("DataWatchRegistration对象")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("create")]),t._v(" "),e("td",[t._v("RequestHeader(null,OpCode."),e("strong",[t._v("create")]),t._v(")")]),t._v(" "),e("td",[t._v("ReplyHeader对象")]),t._v(" "),e("td",[t._v("CreateRequest对象")]),t._v(" "),e("td",[t._v("CreateResponse对象")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("delete")]),t._v(" "),e("td",[t._v("RequestHeader(null,OpCode."),e("strong",[t._v("delete")]),t._v(")")]),t._v(" "),e("td",[t._v("ReplyHeader对象")]),t._v(" "),e("td",[t._v("DeleteRequest对象")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("setData")]),t._v(" "),e("td",[t._v("RequestHeader(null,OpCode."),e("strong",[t._v("setData")]),t._v(")")]),t._v(" "),e("td",[t._v("ReplyHeader对象")]),t._v(" "),e("td",[t._v("SetDataRequest对象")]),t._v(" "),e("td",[t._v("SetDataResponse对象")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("addWatch")]),t._v(" "),e("td",[t._v("RequestHeader(null,OpCode."),e("strong",[t._v("addWatch")]),t._v(")")]),t._v(" "),e("td",[t._v("ReplyHeader对象")]),t._v(" "),e("td",[t._v("AddWatchRequest对象")]),t._v(" "),e("td",[t._v("ErrorResponse对象")]),t._v(" "),e("td",[t._v("AddWatchRegistration对象")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("getChildren")]),t._v(" "),e("td",[t._v("RequestHeader(null,OpCode."),e("strong",[t._v("getChildren")]),t._v(")")]),t._v(" "),e("td",[t._v("ReplyHeader对象")]),t._v(" "),e("td",[t._v("GetChildrenRequest对象")]),t._v(" "),e("td",[t._v("GetChildrenResponse对象")]),t._v(" "),e("td",[t._v("ChildWatchRegistration对象")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("exists")]),t._v(" "),e("td",[t._v("RequestHeader(null,OpCode."),e("strong",[t._v("exists")]),t._v(")")]),t._v(" "),e("td",[t._v("ReplyHeader对象")]),t._v(" "),e("td",[t._v("ExistsRequest对象")]),t._v(" "),e("td",[t._v("SetDataResponse对象")]),t._v(" "),e("td",[t._v("ExistsWatchRegistration对象")]),t._v(" "),e("td",[t._v("false")])])])])])}),[],!1,null,null,null);e.default=d.exports}}]);