(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{886:function(_,v,t){"use strict";t.r(v);var i=t(1),e=Object(i.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"秒杀系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#秒杀系统"}},[_._v("#")]),_._v(" "),v("strong",[_._v("秒杀系统")])]),_._v(" "),v("h1",{attrs:{id:"秒杀系统-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#秒杀系统-2"}},[_._v("#")]),_._v(" 秒杀系统")]),_._v(" "),v("p",[_._v("大家为了打折商品蜂拥而至，造成电商网站一片繁华的景象。但作为程序员的我们，看到的却是背后的高并发和可靠性。无论你处在软件开发的哪个阶段，都希望能够设计一套属于自己的秒杀系统。")]),_._v(" "),v("p",[_._v("今天我们一起来看看，一套秒杀系统在架构设计上需要有哪些考量：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("秒杀场景的特点")])]),_._v(" "),v("li",[v("strong",[_._v("系统隔离的设计思路")])]),_._v(" "),v("li",[v("strong",[_._v("客户端设计")])]),_._v(" "),v("li",[v("strong",[_._v("代理层设计")])]),_._v(" "),v("li",[v("strong",[_._v("应用层设计")])]),_._v(" "),v("li",[v("strong",[_._v("数据库设计")])]),_._v(" "),v("li",[v("strong",[_._v("压力测试")])]),_._v(" "),v("li",[v("strong",[_._v("总结")])])]),_._v(" "),v("p",[v("strong",[_._v("秒杀场景的特点")])]),_._v(" "),v("p",[_._v("秒杀场景是电商网站定期举办的活动，这个活动有明确的开始和结束时间，而且参与互动的商品是事先定义好了，参与秒杀商品的个数也是有限制的。同时会提供一个秒杀的入口，让用户通过这个入口进行抢购。")]),_._v(" "),v("p",[_._v("总结一下秒杀场景的特点：")]),_._v(" "),v("ul",[v("li",[_._v("定时开始，秒杀时大量用户会在同一时间，抢购同一商品，网站瞬时流量激增。")]),_._v(" "),v("li",[_._v("库存有限，秒杀下单数量远远大于库存数量，只有少部分用户能够秒杀成功。")]),_._v(" "),v("li",[_._v("操作可靠，秒杀业务流程比较简单，一般就是下订单减库存。库存就是用户争夺的“资源”，实际被消费的“资源”不能超过计划要售出的“资源”，也就是不能被“超卖”。")])]),_._v(" "),v("p",[v("strong",[_._v("系统隔离的设计思路")])]),_._v(" "),v("p",[_._v("在分析秒杀的特点后，我们发现秒杀活动是有计划的，并且在短时间内会爆发大量的请求。为了不影响现有的业务系统的正常运行，我们需要把它和现有的系统做隔离。")]),_._v(" "),v("p",[_._v("即使秒杀活动出现问题也不会影响现有的系统。隔离的设计思路可以从三个维度来思考。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("业务隔离")])]),_._v(" "),v("li",[v("strong",[_._v("技术隔离")])]),_._v(" "),v("li",[v("strong",[_._v("数据库隔离")])])]),_._v(" "),v("p",[v("strong",[_._v("业务隔离")])]),_._v(" "),v("p",[_._v("既然秒杀是一场活动，那它一定和常规的业务不同，我们可以把它当成一个单独的项目来看。在活动开始之前，最好设计一个“热场”。")]),_._v(" "),v("p",[_._v("“热场”的形式多种多样，例如：分享活动领优惠券，领秒杀名额等等。“热场”的形式不重要，重要的是通过它获取一些准备信息。")]),_._v(" "),v("p",[_._v("例如：有可能参与的用户数，他们的地域分布，他们感兴趣的商品。为后面的技术架构提供数据支持。")]),_._v(" "),v("p",[v("strong",[_._v("技术隔离")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272063003-277c8996-8432-40b2-83de-e742462976ed.jpeg#align=left&display=inline&height=1031&originHeight=1031&originWidth=488&size=0&status=done&width=488?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[_._v("技术隔离架构图")]),_._v(" "),v("p",[_._v("前面有了准备工作，那么从技术上需要有以下几个方面的考虑：")]),_._v(" "),v("ul",[v("li",[_._v("客户端，前端秒杀页面使用专门的页面，这些页面包括静态的 HTML 和动态的 JS，他们都需要在 CDN 上缓存。")]),_._v(" "),v("li",[_._v("接入层，加入过滤器专门处理秒杀请求，即使我们扩展再多的应用，使用再多的应用服务器，部署再多的负载均衡器，都会遇到支撑不住海量请求的时候。")])]),_._v(" "),v("p",[_._v("所以，在这一层我们要考虑的是如何做好限流，当超过系统承受范围的时候，需要果断阻止请求的涌入。")]),_._v(" "),v("ul",[v("li",[_._v("应用层，瞬时的海量请求好比请求的“高峰”，我们架构系统的目的就是“削峰”。")])]),_._v(" "),v("p",[_._v("需要使用服务集群和水平扩展，让“高峰”请求分流到不同的服务器进行处理。同时，还会利用缓存和队列技术减轻应用处理的压力，通过异步请求的方式做到最终一致性。")]),_._v(" "),v("p",[_._v("由于是多线程操作，而且商品的额度有限，为了解决超卖的问题，需要考虑进程锁的问题。")]),_._v(" "),v("p",[v("strong",[_._v("数据库隔离")])]),_._v(" "),v("p",[_._v("秒杀活动持续时间短，瞬时数据量大。为了不影响现有数据库的正常业务，可以建立新的库或者表来处理。")]),_._v(" "),v("p",[_._v("在秒杀结束以后，需要把这部分数据同步到主业务系统中，或者查询表中。如果数据量特别巨大，到千万级别甚至上亿，建议使用分表或者分库。")]),_._v(" "),v("p",[v("strong",[_._v("客户端设计")])]),_._v(" "),v("p",[_._v("上面提到的三个隔离维度中，我们对技术维度是最为关心的。如果说浏览器/客户端是用户接触“秒杀系统”的入口，那么在这一层提供缓存数据就是非常必要的。")]),_._v(" "),v("p",[_._v("在设计之初，我们会为秒杀的商品生成专门的商品页面和订单页面。这些页面以静态的 HTML 为主，包括的动态信息尽量少。")]),_._v(" "),v("p",[_._v("从业务的角度来说，这些商品的信息早就被用户熟识了，在秒杀的时候，他们关心的是如何快速下单。")]),_._v(" "),v("p",[_._v("既然商品的详情页面和订单页面都是静态生成的，那么就需要定义一个 URL，当要开始秒杀之前，开放这个 URL 给用户访问。")]),_._v(" "),v("p",[_._v("为了防止“程序员或者内部人员”作弊，这里的地址可以通过时间戳和 Hash 算法来生成，也就是说这个地址只有系统知道，到了快秒杀之前才由系统发放出去。")]),_._v(" "),v("p",[_._v("有人说浏览器/客户端如果存放的都是静态页面，那么“控制开始下单”的按钮，以及发送“下单请求”的按钮，也是静态的吗?")]),_._v(" "),v("p",[_._v("答案是否定的，其实静态页面是方便客户端好缓存，下单的动作以及下单时间的控制还是在服务器端。")]),_._v(" "),v("p",[_._v("只不过是通过 JS 文件的方式发送给客户端，在快要秒杀之前，会把这部分 JS 下载到客户端。")]),_._v(" "),v("p",[_._v("因为，其业务逻辑很少，基本只包括时间，用户信息，商品信息等等。所以，其对网络的要求不高。")]),_._v(" "),v("p",[_._v("同时，在网络设计上，我们也会将 JS 和 HTML 同时缓存在 CDN 上面，让用户从离自己最近的 CDN 服务器上获取这些信息。")]),_._v(" "),v("p",[_._v("为了避免秒杀程序参与秒杀，在客户端也会设计一些问答或者滑块的功能，减少此类机器人对服务器的压力。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272062964-eb7e9f09-7938-46df-81b8-d5d6837916b0.jpeg#align=left&display=inline&height=649&originHeight=649&originWidth=532&size=0&status=done&width=532?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_15%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[_._v("秒杀系统前端设计简图")]),_._v(" "),v("p",[v("strong",[_._v("代理层设计")])]),_._v(" "),v("p",[_._v("说完了秒杀系统的前端设计，请求自然地来到了代理层。由于用户的请求量大，我们需要用负载均衡加上服务器集群，来面对如此空前的压力。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272062957-af5d6ae6-cac7-4e0e-b080-9fbfa2c928a1.jpeg#align=left&display=inline&height=362&originHeight=362&originWidth=600&size=0&status=done&width=600?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_17%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[_._v("代理层三大功能简图")]),_._v(" "),v("p",[_._v("在这一层是可以做缓存，过滤和限流的：")]),_._v(" "),v("ul",[v("li",[_._v("缓存，以 Nginx 为例，它可以缓存用户的信息。假设用户信息的修改没有那么频繁，即使有类似的修改也可以通过更新服务来刷新。总比从服务器上获取效率要高得多。")]),_._v(" "),v("li",[_._v("过滤，既然缓存了用户信息，这里就可以过滤掉一些不满足条件的用户。注意，这里的用户信息的过滤和缓存只是一个例子。")])]),_._v(" "),v("p",[_._v("主要想表达的意思是，可以将一些变化不频繁的数据，提到代理层来缓存，提高响应的效率。")]),_._v(" "),v("p",[_._v("同时，还可以根据风控系统返回的信息，过滤一些疑似机器人或者恶意请求。例如：从固定 IP 过来的，频率过高的请求。最重要的就是在这一层，可以识别来自秒杀系统的请求。")]),_._v(" "),v("p",[_._v("如果是带有秒杀系统的参数，就要把请求路由到秒杀系统的服务器集群。这样才能和正常的业务系统分割开来。")]),_._v(" "),v("ul",[v("li",[_._v("限流，每个服务器集群能够承受的压力都是有限的。代理层可以根据服务器集群能够承受的最大压力，设置流量的阀值。")])]),_._v(" "),v("p",[_._v("阀值的设置可以是动态调整的。例如：集群服务器中有 10 个服务器，其中一台由于压力过大挂掉了。")]),_._v(" "),v("p",[_._v("此时就需要调整代理层的流量阀值，将能够处理的请求流量减少，保护后端的应用服务器。")]),_._v(" "),v("p",[_._v("当服务器恢复以后，又可以将阀值调回原位。可以通过 Nginx+Lua 合作完成，Lua 从服务注册中心读取服务健康状态，动态调整流量。")]),_._v(" "),v("p",[v("strong",[_._v("应用层设计")])]),_._v(" "),v("p",[_._v("“秒杀系统”秒杀的是什么?无非是商品。对于系统来说就是商品的库存，购买的商品一旦超过了库存就不能再卖了。")]),_._v(" "),v("p",[v("strong",[_._v("防止超卖")])]),_._v(" "),v("p",[_._v("超过了库存还可以卖给用户，这就是“超卖”，也是系统设计需要避免的。为了承受大流量的访问，我们用了水平扩展的服务，但是对于他们消费的资源“库存”来说，却只有一个。")]),_._v(" "),v("p",[_._v("为了提高效率，会将这个库存信息放到缓存中。以流行的 Redis 为例，用它存放库存信息，由多个线程来访问就会出现资源争夺的情况。也就是分布式程序争夺唯一资源，为了解决这个问题我们需要实现分布式锁。")]),_._v(" "),v("p",[_._v("假设这里有多个应用响应用户的订单请求，他们同时会去访问 Redis 中存放的库存信息，每接受用户一次请求，都会从 Redis 的库存中减去 1 个商品库存量。")]),_._v(" "),v("p",[_._v("当任何一个进程访问 Redis 中的库存资源时，其他进程是不能访问的，所以这里需要考虑锁的情况(乐观，悲观)。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272062964-afd2e295-e332-40de-8caa-f44fd871acae.jpeg#align=left&display=inline&height=335&originHeight=335&originWidth=600&size=0&status=done&width=600?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_17%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[_._v("Redis 缓存承载库存变量")]),_._v(" "),v("p",[_._v("如果锁长期没有释放，需要考虑锁的过期时间，需要设置两个超时时间：")]),_._v(" "),v("ul",[v("li",[_._v("资源本身的超时时间，一旦资源被使用一段时间还没有被释放，Redis 会自动释放掉该资源给其他服务使用。")]),_._v(" "),v("li",[_._v("服务获取资源的超时时间，一旦一个服务获取资源一段时间后，不管该服务是否处理完这个资源，都需要释放该资源给其他服务使用。")])]),_._v(" "),v("p",[v("strong",[_._v("订单处理流程")])]),_._v(" "),v("p",[_._v("这里的“扣减服务”完成了最简单的扣减库存工作，并没有和其他项目服务打交道，更没有访问数据库。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272063048-6cfffbe6-a4f2-4607-8dd6-c69430d7bbcf.jpeg#align=left&display=inline&height=565&originHeight=565&originWidth=600&size=0&status=done&width=600?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_17%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[_._v("订单流程示意图")]),_._v(" "),v("p",[_._v("后面的流程相对比较复杂，我们先看图，根据图示来讲解：")]),_._v(" "),v("ul",[v("li",[_._v("首先，扣减服务作为下单流程的入口，会先对商品的库存做扣减。同样它会检查商品是否还有库存?")]),_._v(" "),v("li",[_._v("由于订单对应的操作步骤比较多，为了让流量变得平滑，这里使用队列存放每个订单请求，等待订单处理服务完成具体业务。")]),_._v(" "),v("li",[_._v("订单处理服务实现多线程，或者水平扩展的服务阵列，它们不断监听队列中的消息。一旦发现有新订单请求，就取出订单进行后续处理。")])]),_._v(" "),v("p",[_._v("注意，这里可以加入类似 ZooKeeper 这样的服务调度来帮助，协调服务调度和任务分配。")]),_._v(" "),v("ul",[v("li",[_._v("订单处理服务，处理完订单以后会把结果写到数据库。写数据库是 IO 操作，耗时长。")]),_._v(" "),v("li",[_._v("所以，在写数据库的同时，会把结果先写入缓存中，这样用户是可以第一时间查询自己是否下单成功了。")]),_._v(" "),v("li",[_._v("结果写入数据库，这个操作有可能成功也有可能失败。")]),_._v(" "),v("li",[_._v("为了保证数据的最终一致性，我们用订单结果同步的服务不断的对比，缓存和数据库中的订单结果信息。")])]),_._v(" "),v("p",[_._v("一旦发现不一致，会去做重试操作。如果重试依旧不成功，会重写信息到缓存，让用户知道失败原因。")]),_._v(" "),v("ul",[v("li",[_._v("用户下单以后，焦虑地刷新页面查看下单的结果，实际上是读到的缓存上的下单结果信息。")])]),_._v(" "),v("p",[_._v("虽然，这个信息和最终结果有偏差，但是在秒杀的场景，要求高性能是前提，结果的一致性，可以后期补偿。")]),_._v(" "),v("p",[v("strong",[_._v("数据库设计")])]),_._v(" "),v("p",[_._v("讲完了秒杀的处理流程，来谈谈数据库设计要注意的点。")]),_._v(" "),v("p",[v("strong",[_._v("数据估算")])]),_._v(" "),v("p",[_._v("前面说了秒杀场景需要注意隔离，这里的隔离包括“业务隔离”。就是说我们在秒杀之前，需要通过业务的手段，例如：热场活动，问卷调查，历史数据分析。通过他们去估算这次秒杀可能需要存储的数据量。")]),_._v(" "),v("p",[_._v("这里有两部分的数据需要考虑：")]),_._v(" "),v("ul",[v("li",[_._v("业务数据")]),_._v(" "),v("li",[_._v("日志数据")])]),_._v(" "),v("p",[_._v("前者不言而喻是给业务系统用的。后者，是用来分析和后续处理问题订单用的，秒杀完毕以后还可以用来复盘。")]),_._v(" "),v("p",[v("strong",[_._v("分表分库")])]),_._v(" "),v("p",[_._v("对于这些数据的存放，需要分情况讨论，例如，MySQL 单表推荐的存储量是 500W 条记录(经验数字)。")]),_._v(" "),v("p",[_._v("如果估算的时候超过了这个数据，建议做分表。如果服务的连接数较多，建议进行分库的操作。")]),_._v(" "),v("p",[v("strong",[_._v("数据隔离")])]),_._v(" "),v("p",[_._v("由于大量的数据操作是插入，有少部分的修改操作。如果使用关系型数据来存储，建议用专门的表来存放，不建议使用业务系统正在使用的表。")]),_._v(" "),v("p",[_._v("这个开头提到了，数据隔离是必须的，一旦秒杀系统挂了，不会影响到正常业务系统，这个风险意识要有。表的设计除了 ID 以外，最好不要设置其他主键，保证能够快速地插入。")]),_._v(" "),v("p",[v("strong",[_._v("数据合并")])]),_._v(" "),v("p",[_._v("由于是用的专用表存储，在秒杀活动完毕以后，需要将其和现有的数据做合并。其实，交易已经完成，合并的目的也就是查询。")]),_._v(" "),v("p",[_._v("这个合并需要根据具体情况来分析，如果对于那些“只读”的数据，对于做了读写分离的公司，可以导入到专门负责读的数据库或者 NoSQL 数据库中。")]),_._v(" "),v("p",[v("strong",[_._v("压力测试")])]),_._v(" "),v("p",[_._v("构建了秒杀系统，一定会面临上线，那么在上线之前压力测试是必不可少的。")]),_._v(" "),v("p",[_._v("我们做压力测试的目的是检验系统崩溃的边缘在哪里?系统的极限在哪里?")]),_._v(" "),v("p",[_._v("这样才能合理地设置流量的上限，为了保证系统的稳定性，多余的流量需要被抛弃。")]),_._v(" "),v("p",[v("strong",[_._v("压力测试的方法")])]),_._v(" "),v("p",[_._v("合理的测试方法可以帮助我们对系统有深入的了解，这里介绍两种压力测试的方法：")]),_._v(" "),v("ul",[v("li",[_._v("正压力测试")]),_._v(" "),v("li",[_._v("负压力测试")])]),_._v(" "),v("p",[_._v("正压力测试。每次秒杀活动都会计划，使用多少服务器资源，承受多少的请求量。")]),_._v(" "),v("p",[_._v("可以在这个请求量上面不断加压，直到系统接近崩溃或者真正崩溃。简单的说就是做加法。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272062963-86dbdea4-60db-4c65-aafa-8fbe033ac78d.jpeg#align=left&display=inline&height=436&originHeight=436&originWidth=600&size=0&status=done&width=600?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_17%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[_._v("正压力测试示意图")]),_._v(" "),v("p",[_._v("负压力测试。在系统正常运行的情况下，逐步减少支撑系统的资源(服务器)，看什么时候系统无法支撑正常的业务请求。")]),_._v(" "),v("p",[_._v("例如：在系统正常运行的情况下，逐步减少服务器或者微服务的数量，观察业务请求的情况。说白了就是做减法。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272063014-0efb39a7-89e7-4b27-94e8-ddbef7881ab3.jpeg#align=left&display=inline&height=566&originHeight=566&originWidth=600&size=0&status=done&width=600?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_17%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[_._v("负压力测试示意图")]),_._v(" "),v("p",[v("strong",[_._v("压力测试的步骤")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272062965-322717eb-d8c2-4580-982a-4b1acb9c623b.jpeg#align=left&display=inline&height=605&originHeight=605&originWidth=476&size=0&status=done&width=476?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[v("strong",[_._v("测试步骤")])]),_._v(" "),v("p",[_._v("有了测试方法的加持，我们来看看需要遵循哪些测试步骤。下面的操作偏套路化，大家在其他系统的压力测试也可以这么做，给大家做个参考。")]),_._v(" "),v("p",[_._v("第一，确定测试目标。与性能测试不同的是，压力测试的目标是，什么时候系统会接近崩溃。比如：需要支撑 500W 访问量。")]),_._v(" "),v("p",[_._v("第二，确定关键功能。压力测试其实是有重点的，根据 2/8 原则，系统中 20% 的功能被使用的是最多的，我们可以针对这些核心功能进行压力测试。例如：下单，库存扣减。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272062969-5391df6c-e7e4-496e-a854-597f06da2cfb.jpeg#align=left&display=inline&height=367&originHeight=367&originWidth=424&size=0&status=done&width=424?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_12%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[v("strong",[_._v("关注核心服务")])]),_._v(" "),v("p",[_._v("第三，确定负载。这个和关键服务的思路一致，不是每个服务都有高负载的，我们的测试其实是要关注那些负载量大的服务，或者是一段时间内系统中某些服务的负载有波动。这些都是测试目标。")]),_._v(" "),v("p",[_._v("第四，选择环境，建议搭建和生产环境一模一样的环境进行测试。")]),_._v(" "),v("p",[_._v("第五，确定监视点，实际上就是对关注的参数进行监视，例如 CPU 负载，内存使用率，系统吞吐量等等。")]),_._v(" "),v("p",[_._v("第六，产生负载，这里需要从生产环境去获取一些真实的数据作为负载数据源，这部分数据源根据目标系统的承受要求由脚本驱动，对系统进行冲击。")]),_._v(" "),v("p",[_._v("建议使用往期秒杀系统的数据，或者实际生产系统的数据进行测试。")]),_._v(" "),v("p",[_._v("第七，执行测试，这里主要是根据目标系统，关键组件，用负载进行测试，返回监视点的数据。")]),_._v(" "),v("p",[_._v("建议团队可以对测试定一个计划，模拟不同的网络环境，硬件条件进行有规律的测试。")]),_._v(" "),v("p",[_._v("第八，分析数据，针对测试的目的，对关键服务的压力测试数据进行分析得知该服务的承受上限在哪里。")]),_._v(" "),v("p",[_._v("对一段时间内有负载波动或者大负载的服务进行数据分析，得出服务改造的方向。")]),_._v(" "),v("p",[v("strong",[_._v("总结")])]),_._v(" "),v("p",[_._v("秒杀系统的特点，并发量大，资源有限，操作相对简单，访问的都是热点数据。因此，我们需要把它从业务，技术，数据上做隔离，保证不影响到现有的系统。")]),_._v(" "),v("p",[_._v("因此，架构设计需要分几层来考虑，从客户请求到数据库存储，到最后上线前的压力测试。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/430574/1568272062971-1aa35f0f-8bd4-4aa0-bfce-de30c2188982.jpeg#align=left&display=inline&height=372&originHeight=372&originWidth=600&size=0&status=done&width=600?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_17%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),v("p",[v("strong",[_._v("简易的思维导图送给大家")])]),_._v(" "),v("p",[_._v("思考顺序如下，客户端→代理层→应用层→数据库→压力测试：")]),_._v(" "),v("p",[_._v("客户端 90% 静态 HTML+10% 动态 JS;配合 CDN 做好缓存工作。")]),_._v(" "),v("p",[_._v("接入层专注于过滤和限流。")]),_._v(" "),v("p",[_._v("应用层利用缓存+队列+分布式处理好订单。")]),_._v(" "),v("p",[_._v("做好数据的预估，隔离，合并。")]),_._v(" "),v("p",[_._v("上线之前记得进行压力测试。")]),_._v(" "),v("p",[_._v("原文：https://www.yuque.com/yangwangxingkong-7ugey/rigvqb/ms800e")])])}),[],!1,null,null,null);v.default=e.exports}}]);