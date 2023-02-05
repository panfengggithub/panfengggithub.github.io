(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{466:function(v,_,t){"use strict";t.r(_);var e=t(1),s=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"redis事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis事务"}},[v._v("#")]),v._v(" "),_("strong",[v._v("redis事务")])]),v._v(" "),_("p",[_("strong",[v._v("什么是redis的事务？")])]),v._v(" "),_("p",[v._v("redis事务就是一个命令执行的队列，将一系列预定义命令包装成一个整体，就是一个队列。当执行的时候，一次性按照添加顺序依次执行，中间不会被打断或者干扰。")]),v._v(" "),_("p",[_("strong",[v._v("能干嘛？")])]),v._v(" "),_("p",[v._v("一个队列中，一次性，顺序性，排他性的执行一系列命令")]),v._v(" "),_("p",[_("strong",[v._v("redis事务基本操作")])]),v._v(" "),_("p",[v._v("开启事务：multi   设置事务的开始位置，这个指令开启后，后面所有的指令都会加入事务中")]),v._v(" "),_("p",[v._v("执行事务： exec   设置事务的结束位置，同时执行事务，与multi成对出现，成对使用")]),v._v(" "),_("p",[v._v("取消事务：discard  终止当前事务，取消multi后，exec前的所有指令")]),v._v(" "),_("p",[v._v("**注意：**加入事务的命令并没有立马执行，而且加入队列中，exec命令后才执行")]),v._v(" "),_("p",[_("strong",[v._v("加入和执行事务有错误会怎么办？")])]),v._v(" "),_("p",[v._v("加入事务语法报错，事务则取消")]),v._v(" "),_("p",[v._v("执行事务报错，则成功的返回成功，失败的返回失败，不影响报错后面的指令")]),v._v(" "),_("p",[_("strong",[v._v("注意：")]),v._v(" 已经执行完毕的命令对应的数据不会自动回滚，需要程序员自己实现")]),v._v(" "),_("p",[_("strong",[v._v("监控key")])]),v._v(" "),_("p",[v._v("watch： 对key进行监控，如果在exec执行前，监控的key发生了变化，终止事务执行")]),v._v(" "),_("p",[v._v("unwatch： 取消对所有的key进行监控")])])}),[],!1,null,null,null);_.default=s.exports}}]);