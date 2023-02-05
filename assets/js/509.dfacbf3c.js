(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{921:function(v,_,p){"use strict";p.r(_);var t=p(1),s=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"如何设计一个秒杀系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何设计一个秒杀系统"}},[v._v("#")]),v._v(" "),_("strong",[v._v("如何设计一个秒杀系统")])]),v._v(" "),_("p",[_("strong",[v._v("什么是秒杀")])]),v._v(" "),_("p",[v._v("秒杀场景一般会在电商网站举行一些活动或者节假日在12306网站上抢票时遇到。对于电商网站中一些稀缺或者特价商品，电商网站一般会在约定时间点对其进行限量销售，因为这些商品的特殊性，会吸引大量用户前来抢购，并且会在约定的时间点同时在秒杀页面进行抢购。")]),v._v(" "),_("p",[_("strong",[v._v("秒杀系统场景特点")])]),v._v(" "),_("ol",[_("li",[v._v("秒杀时大量用户会在同一时间同时进行抢购，网站瞬时访问流量激增。")]),v._v(" "),_("li",[v._v("秒杀一般是访问请求数量远远大于库存数量，只有少部分用户能够秒杀成功。")]),v._v(" "),_("li",[v._v("秒杀业务流程比较简单，一般就是下订单减库存。")])]),v._v(" "),_("p",[_("strong",[v._v("秒杀架构设计理念")])]),v._v(" "),_("p",[v._v("限流：鉴于只有少部分用户能够秒杀成功，所以要限制大部分流量，只允许少部分流量进入服务后端。")]),v._v(" "),_("p",[v._v("削峰：对于秒杀系统瞬时会有大量用户涌入，所以在抢购一开始会有很高的瞬间峰值。高峰值流量是压垮系统很重要的原因，所以如何把瞬间的高流量变成一段时间平稳的流量也是设计秒杀系统很重要的思路。实现削峰的常用的方法有利用缓存和消息中间件等技术。")]),v._v(" "),_("p",[v._v("异步处理：秒杀系统是一个高并发系统，采用异步处理模式可以极大地提高系统并发量，其实异步处理就是削峰的一种实现方式。")]),v._v(" "),_("p",[v._v("内存缓存：秒杀系统比较大的瓶颈一般都是数据库读写，由于数据库读写属于磁盘IO，性能很低，如果能够把部分数据或业务逻辑转移到内存缓存，效率会有极大地提升。")]),v._v(" "),_("p",[v._v("可拓展：当然如果我们想支持更多用户，更大的并发，最好就将系统设计成弹性可拓展的，如果流量来了，拓展机器就好了。像淘宝、京东等双十一活动时会增加大量机器应对交易高峰。")]),v._v(" "),_("p",[_("strong",[v._v("设计思路")])]),v._v(" "),_("p",[v._v("将请求拦截在系统上游，降低下游压力：秒杀系统特点是并发量极大，但实际秒杀成功的请求数量却很少，所以如果不在前端拦截很可能造成数据库读写锁冲突，甚至导致死锁，最终请求超时。")]),v._v(" "),_("p",[v._v("充分利用缓存：利用缓存可极大提高系统读写速度。")]),v._v(" "),_("p",[v._v("消息队列：消息队列可以削峰，将拦截大量并发请求，这也是一个异步处理过程，后台业务根据自己的处理能力，从消息队列中主动的拉取请求消息进行业务处理。")]),v._v(" "),_("p",[_("strong",[v._v("前端方案")])]),v._v(" "),_("p",[v._v("浏览器端(js)：")]),v._v(" "),_("p",[v._v("页面静态化：将活动页面上的所有可以静态的元素全部静态化，并尽量减少动态元素。通过CDN来抗峰值。")]),v._v(" "),_("p",[v._v("禁止重复提交：用户提交之后按钮置灰，禁止重复提交")]),v._v(" "),_("p",[v._v("用户限流：在某一时间段内只允许用户提交一次请求，比如可以采取IP限流")]),v._v(" "),_("p",[_("strong",[v._v("后端方案")])]),v._v(" "),_("p",[v._v("服务端控制器层(网关层)")]),v._v(" "),_("p",[v._v("限制uid(UserID)访问频率：我们上面拦截了浏览器访问的请求，但针对某些恶意攻击或其它插件，在服务端控制层需要针对同一个访问uid，限制访问频率。")]),v._v(" "),_("p",[_("strong",[v._v("服务层")])]),v._v(" "),_("p",[v._v("上面只拦截了一部分访问请求，当秒杀的用户量很大时，即使每个用户只有一个请求，到服务层的请求数量还是很大。比如我们有100W用户同时抢100台手机，服务层并发请求压力至少为100W。")]),v._v(" "),_("p",[v._v("采用消息队列缓存请求：既然服务层知道库存只有100台手机，那完全没有必要把100W个请求都传递到数据库啊，那么可以先把这些请求都写到消息队列缓存一下，数据库层订阅消息减库存，减库存成功的请求返回秒杀成功，失败的返回秒杀结束。")]),v._v(" "),_("p",[v._v("利用缓存应对读请求：对类似于12306等购票业务，是典型的读多写少业务，大部分请求是查询请求，所以可以利用缓存分担数据库压力。")]),v._v(" "),_("p",[v._v("利用缓存应对写请求：缓存也是可以应对写请求的，比如我们就可以把数据库中的库存数据转移到Redis缓存中，所有减库存操作都在Redis中进行，然后再通过后台进程把Redis中的用户秒杀请求同步到数据库中。")]),v._v(" "),_("p",[_("strong",[v._v("数据库层")])]),v._v(" "),_("p",[v._v("数据库层是最脆弱的一层，一般在应用设计时在上游就需要把请求拦截掉，数据库层只承担“能力范围内”的访问请求。所以，上面通过在服务层引入队列和缓存，让最底层的数据库高枕无忧。")]),v._v(" "),_("p",[v._v("原文：https://www.yuque.com/yangwangxingkong-7ugey/rigvqb/woh4xw")])])}),[],!1,null,null,null);_.default=s.exports}}]);