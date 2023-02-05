(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{955:function(_,t,e){"use strict";e.r(t);var a=e(1),v=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"秒杀系统多级缓存优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#秒杀系统多级缓存优化"}},[_._v("#")]),_._v(" "),t("strong",[_._v("秒杀系统多级缓存优化")])]),_._v(" "),t("h1",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[_._v("#")])]),_._v(" "),t("h1",{attrs:{id:"_1-秒杀业务流程介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-秒杀业务流程介绍"}},[_._v("#")]),_._v(" 1.秒杀业务流程介绍")]),_._v(" "),t("p",[_._v("打开秒杀页面   进入秒杀场次  选择商品   打开商品详情   下单   付款")]),_._v(" "),t("h1",{attrs:{id:"_2-秒杀系统特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-秒杀系统特性"}},[_._v("#")]),_._v(" 2.秒杀系统特性")]),_._v(" "),t("h2",{attrs:{id:"_2-1-秒杀系统特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-秒杀系统特点"}},[_._v("#")]),_._v(" 2.1 秒杀系统特点")]),_._v(" "),t("p",[_._v("秒杀系统特点：")]),_._v(" "),t("p",[_._v("瞬时流量激增涌入")]),_._v(" "),t("p",[_._v("秒杀系统解决的问题：")]),_._v(" "),t("p",[t("strong",[_._v("并发读+并发写")])]),_._v(" "),t("p",[_._v("并发读： 减少请求读取的数据的频次 ，读取更少的数据量")]),_._v(" "),t("p",[_._v("并发写：  秒杀系统独立库，减少读正常系统的影响")]),_._v(" "),t("h2",{attrs:{id:"_2-2-秒杀系统设计的核心标准"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-秒杀系统设计的核心标准"}},[_._v("#")]),_._v(" 2.2. 秒杀系统设计的核心标准")]),_._v(" "),t("p",[t("strong",[_._v("核心标准： 快+准+稳")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("快： ：高并发，高性能。 秒杀顾名思义就是要求响应速度快。")])]),_._v(" "),t("li",[t("p",[_._v("一致性： 秒杀减库存数据一致性")])]),_._v(" "),t("li",[t("p",[_._v("高可用：  PlanB 兜底方案。")])])]),_._v(" "),t("h2",{attrs:{id:"_2-3-秒杀系统的设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-秒杀系统的设计原则"}},[_._v("#")]),_._v(" 2.3 秒杀系统的设计原则")]),_._v(" "),t("p",[_._v("减少请求数据量")]),_._v(" "),t("p",[_._v("减少请求数")]),_._v(" "),t("p",[_._v("缩短请求处理链路")]),_._v(" "),t("p",[_._v("减少请求依赖")]),_._v(" "),t("p",[_._v("防止出现单点")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("不同场景下的秒杀系统设计方案")])])]),_._v(" "),t("p",[_._v("把秒杀系统独立出来单独打造一个系统，这样可以有针对性地做优化，例如这个独立出来的系统就减少了店铺装修的功能，减少了页面的复杂度；")]),_._v(" "),t("p",[_._v("在系统部署上也独立做一个机器集群，这样秒杀的大流量就不会影响到正常的商品购买集群的机器负载；")]),_._v(" "),t("p",[_._v("将热点数据（如库存数据）单独放到一个缓存系统中，以提高“读性能”；")]),_._v(" "),t("p",[_._v("增加秒杀答题，防止有秒杀器抢单。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883673-b31e3de2-a2b2-4427-9ce3-3a0a38ce0466.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_30%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("对页面进行彻底的动静分离，使得用户秒杀时不需要刷新整个页面，而只需要点击抢宝按钮，借此把页面刷新的数据降到最少；")]),_._v(" "),t("p",[_._v("在服务端对秒杀商品进行本地缓存，不需要再调用依赖系统的后台服务获取数据，甚至不需要去公共的缓存集群中查询数据，这样不仅可以减少系统调用，而且能够避免压垮公共缓存集群")]),_._v(" "),t("p",[_._v("增加系统限流保护，防止最坏情况发生。")]),_._v(" "),t("p",[_._v("经过这些优化，系统架构变成了下图中的样子。在这里，我们对页面进行了进一步的静态化，秒杀过程中不需要刷新整个页面，而只需要向服务端请求很少的动态数据。而且，最关键的详情和交易系统都增加了本地缓存，来提前缓存秒杀商品的信息，热点数据库也做了独立部署，等等。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883722-c17e280c-d6f6-4f6d-8dbe-f592a875da5f.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_38%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("h2",{attrs:{id:"_2-4-减库存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-减库存"}},[_._v("#")]),_._v(" 2.4  减库存")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("下单减库存")])]),_._v(" "),t("li",[t("p",[_._v("付款减库存")])]),_._v(" "),t("li",[t("p",[_._v("预扣库存")])])]),_._v(" "),t("h1",{attrs:{id:"_3-秒杀系统环境启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-秒杀系统环境启动"}},[_._v("#")]),_._v(" 3 秒杀系统环境启动")]),_._v(" "),t("h2",{attrs:{id:"_3-1-启动秒杀系统环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-启动秒杀系统环境"}},[_._v("#")]),_._v(" 3.1 启动秒杀系统环境")]),_._v(" "),t("p",[_._v("打开 luban-web-admin  管理后台web工程  ，启动工程")]),_._v(" "),t("p",[_._v("npm run dev")]),_._v(" "),t("p",[_._v("打开管理后台工程  luban-admin,启动工程")]),_._v(" "),t("p",[_._v("run MallAdminApplication")]),_._v(" "),t("p",[_._v("同时保证前后台的端口对应 8091")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793884098-37c61557-08c5-4b40-aef8-82eae1ae0581.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_39%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883892-253615ab-141f-44d6-bb6a-d22e0b76cbad.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_47%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("h2",{attrs:{id:"-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[_._v("#")])]),_._v(" "),t("h2",{attrs:{id:"_3-2-秒杀活动的设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-秒杀活动的设置"}},[_._v("#")]),_._v(" 3.2 秒杀活动的设置")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883872-f4305966-1e89-4767-81b3-20560f5fc0c6.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_45%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("h2",{attrs:{id:"-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[_._v("#")]),_._v(" "),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793884048-18d9df72-fd43-44eb-81bd-72e7a0e84500.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_21%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883937-a9c124a0-683d-49c1-91d9-7e6db6422c90.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_46%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883909-86da62d6-c446-45f6-b59b-a265123b9e62.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_46%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883906-19b60c84-142e-4156-9cf0-7c32914775a5.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_22%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("对应表结构")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883882-8ab5bde1-8e0a-423a-a709-bdf0167a0506.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883927-9c6d4de3-4ed8-43df-a2dc-f6d581c01d74.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("注意： 秒杀系统的库存和价格是单独保存，与正常的表结构分开存储")])]),_._v(" "),t("ol",[t("li",[_._v("秒杀系统的优化")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883829-6aa24b9b-ec90-49c7-aaaf-e503de791c6c.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_37%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("鲁班电商分布式微服务架构图")]),_._v(" "),t("h2",{attrs:{id:"_4-1-商品详情查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-商品详情查询"}},[_._v("#")]),_._v(" 4.1 商品详情查询")]),_._v(" "),t("h3",{attrs:{id:"_4-1-1-普通逻辑演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-普通逻辑演示"}},[_._v("#")]),_._v(" 4.1.1 普通逻辑演示")]),_._v(" "),t("p",[_._v("商品详情查询")]),_._v(" "),t("p",[_._v("http://localhost:8866/pms/productInfo/26")]),_._v(" "),t("p",[_._v("客户端模拟发送请求")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883883-278d41c8-5b85-4c78-b054-3f7abf1cfbfd.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_41%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883857-3e4700c5-525b-4c1a-aee6-d4eac7f20932.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_24%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("主要业务代码块")]),_._v(" "),t("p",[_._v("public PmsProductParam getProductInfo0(Long id){")]),_._v(" "),t("p",[_._v('log.info("start query product info {}",id);')]),_._v(" "),t("p",[_._v("PmsProductParam productInfo = portalProductDao.getProductInfo(id);")]),_._v(" "),t("p",[_._v("​    if (productInfo == null) {")]),_._v(" "),t("p",[_._v("​      return null;")]),_._v(" "),t("p",[_._v("​    }")]),_._v(" "),t("p",[_._v("​    /*")]),_._v(" "),t("p",[_._v("​     * 查询是否是秒杀商品")]),_._v(" "),t("p",[_._v("​     */")]),_._v(" "),t("p",[_._v("​    FlashPromotionParam promotion = flashPromotionProductDao.getFlashPromotion(id);")]),_._v(" "),t("p",[_._v("​    if (!ObjectUtils.isEmpty(promotion)) {")]),_._v(" "),t("p",[_._v("​      productInfo.setFlashPromotionCount(promotion.getRelation().get(0).getFlashPromotionCount());")]),_._v(" "),t("p",[_._v("​      productInfo.setFlashPromotionLimit(promotion.getRelation().get(0).getFlashPromotionLimit());")]),_._v(" "),t("p",[_._v("​      productInfo.setFlashPromotionPrice(promotion.getRelation().get(0).getFlashPromotionPrice());")]),_._v(" "),t("p",[_._v("​      productInfo.setFlashPromotionRelationId(promotion.getRelation().get(0).getId());")]),_._v(" "),t("p",[_._v("​      productInfo.setFlashPromotionEndDate(promotion.getEndDate());")]),_._v(" "),t("p",[_._v("​      productInfo.setFlashPromotionStartDate(promotion.getStartDate());")]),_._v(" "),t("p",[_._v("​      productInfo.setFlashPromotionStatus(promotion.getStatus());")]),_._v(" "),t("p",[_._v("​    }")]),_._v(" "),t("p",[_._v("return productInfo;")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("h2",{attrs:{id:"_4-2-商品详情查询优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-商品详情查询优化"}},[_._v("#")]),_._v(" 4.2  商品详情查询优化")]),_._v(" "),t("h3",{attrs:{id:"_4-2-1-redis缓存商品信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-redis缓存商品信息"}},[_._v("#")]),_._v(" 4.2.1 redis缓存商品信息")]),_._v(" "),t("p",[t("strong",[_._v("1.创建redis配置类 RedisConifg")])]),_._v(" "),t("p",[_._v("@Bean")]),_._v(" "),t("p",[_._v("@Primary")]),_._v(" "),t("p",[_._v("public RedisTemplate<String,Object> redisTemplate(){")]),_._v(" "),t("p",[_._v("RedisTemplate<String,Object> template = new RedisTemplate();")]),_._v(" "),t("p",[_._v("template.setConnectionFactory(connectionFactory);")]),_._v(" "),t("p",[_._v("// 序列化后会产生java类型说明，如果不需要用“Jackson2JsonRedisSerializer”和“ObjectMapper ”配合效果更好")]),_._v(" "),t("p",[_._v("Jackson2JsonRedisSerializer"),t("Object",[_._v(" jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer"),t("Object",[_._v("(Object.class);")])],1)],1),_._v(" "),t("p",[_._v("ObjectMapper om = new ObjectMapper();")]),_._v(" "),t("p",[_._v("om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);")]),_._v(" "),t("p",[_._v("om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);")]),_._v(" "),t("p",[_._v("jackson2JsonRedisSerializer.setObjectMapper(om);")]),_._v(" "),t("p",[_._v("StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();")]),_._v(" "),t("p",[_._v("template.setKeySerializer(stringRedisSerializer);")]),_._v(" "),t("p",[_._v("template.setValueSerializer(jackson2JsonRedisSerializer);")]),_._v(" "),t("p",[_._v("template.setHashKeySerializer(jackson2JsonRedisSerializer);")]),_._v(" "),t("p",[_._v("template.setHashValueSerializer(jackson2JsonRedisSerializer);")]),_._v(" "),t("p",[_._v("template.afterPropertiesSet();")]),_._v(" "),t("p",[_._v("return template;")]),_._v(" "),t("p",[_._v("创建redis工具类 重新封装redisTemplate")]),_._v(" "),t("p",[_._v("public class RedisOpsUtil {")]),_._v(" "),t("p",[_._v("@Autowired")]),_._v(" "),t("p",[_._v("private RedisTemplate redisTemplate;")]),_._v(" "),t("p",[_._v("public void set(String key,Object value){")]),_._v(" "),t("p",[_._v("​    redisTemplate.opsForValue().set(key,value);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public void set(String key, Object value, long timeout, TimeUnit unit){")]),_._v(" "),t("p",[_._v("​    redisTemplate.opsForValue().set(key,value,timeout,unit);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public boolean setIfAbsent(String key, Object value, long timeout, TimeUnit unit){")]),_._v(" "),t("p",[_._v("​    return redisTemplate.opsForValue().setIfAbsent(key,value,timeout,unit);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public "),t("T",[_._v(" T get(String key,Class<?> T){")])],1),_._v(" "),t("p",[_._v("​    return (T)redisTemplate")]),_._v(" "),t("p",[_._v("​        .opsForValue().get(key);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public String get(String key){")]),_._v(" "),t("p",[_._v("​    return (String) redisTemplate")]),_._v(" "),t("p",[_._v("​        .opsForValue().get(key);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public Long decr(String key){")]),_._v(" "),t("p",[_._v("​    return redisTemplate")]),_._v(" "),t("p",[_._v("​        .opsForValue().decrement(key);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public Long decr(String key,long delta){")]),_._v(" "),t("p",[_._v("​    return redisTemplate")]),_._v(" "),t("p",[_._v("​        .opsForValue().decrement(key,delta);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public Long incr(String key){")]),_._v(" "),t("p",[_._v("​    return redisTemplate")]),_._v(" "),t("p",[_._v("​        .opsForValue().increment(key);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public Long incr(String key,long delta){")]),_._v(" "),t("p",[_._v("​    return redisTemplate")]),_._v(" "),t("p",[_._v("​        .opsForValue().increment(key,delta)")]),_._v(" "),t("p",[_._v("redis工具类注解为Bean")]),_._v(" "),t("p",[_._v("@Bean")]),_._v(" "),t("p",[_._v("public RedisOpsUtil redisOpsUtil(){")]),_._v(" "),t("p",[_._v("return new RedisOpsUtil();")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[t("strong",[_._v("2. 重写获取商品请求逻辑")])]),_._v(" "),t("p",[_._v("//先查redis")]),_._v(" "),t("p",[_._v("PmsProductParam productInfo=redisOpsUtil.get(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,PmsProductParam.class);")]),_._v(" "),t("p",[_._v("if(productInfo!=null)")]),_._v(" "),t("p",[_._v("return productInfo;")]),_._v(" "),t("p",[_._v("//否则再查库")]),_._v(" "),t("p",[_._v("productInfo = portalProductDao.getProductInfo(id);")]),_._v(" "),t("p",[_._v("if (productInfo == null) {")]),_._v(" "),t("p",[_._v("return null;")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("设置缓存以及过期时间")])])]),_._v(" "),t("p",[_._v("redisOpsUtil.set(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,productInfo,3600,TimeUnit.SECONDS);")]),_._v(" "),t("p",[_._v("return productInfo;")]),_._v(" "),t("p",[t("strong",[_._v("问题：")])]),_._v(" "),t("p",[_._v("频繁查询redis会增加网络开销   redis存取数据的序列化与反序列化")]),_._v(" "),t("h3",{attrs:{id:"_4-2-2-一级缓存使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-一级缓存使用"}},[_._v("#")]),_._v(" 4.2.2 一级缓存使用")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("使用本地map做为一级缓存")])])]),_._v(" "),t("p",[_._v("private Map<String,PmsProductParam> cacheMap = new ConcurrentHashMap<>();")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("首先从本地缓存获取")])])]),_._v(" "),t("p",[_._v("PmsProductParam productInfo=cacheMap.get(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id)")]),_._v(" "),t("p",[_._v("if(productInfo!=null)")]),_._v(" "),t("p",[_._v("return productInfo;")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("本地缓存****更新")])])]),_._v(" "),t("p",[_._v("productInfo=redisOpsUtil.get(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,PmsProductParam.class);")]),_._v(" "),t("p",[_._v("if(productInfo!=null){")]),_._v(" "),t("p",[_._v("cacheMap.put(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,productInfo);")]),_._v(" "),t("p",[_._v("return productInfo;")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("本地缓存初始化")])])]),_._v(" "),t("p",[_._v("//本地缓存")]),_._v(" "),t("p",[_._v("cacheMap.put(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,productInfo);")]),_._v(" "),t("p",[_._v("//redis缓存")]),_._v(" "),t("p",[_._v("redisOpsUtil.set(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,productInfo,3600,TimeUnit.SECONDS);")]),_._v(" "),t("p",[_._v("return productInfo;")]),_._v(" "),t("p",[t("strong",[_._v("问题：")])]),_._v(" "),t("p",[_._v("没有淘汰策略，商品会占用本地缓存，随着产品增多，本地缓存会不断膨胀，出发OOM.!!!")]),_._v(" "),t("h3",{attrs:{id:"_4-2-3-增加缓存淘汰策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-增加缓存淘汰策略"}},[_._v("#")]),_._v(" 4.2.3 增加缓存淘汰策略")]),_._v(" "),t("p",[_._v("常用的缓存淘汰策略有以下")]),_._v(" "),t("ul",[t("li",[_._v("先进先出算法（FIFO）")]),_._v(" "),t("li",[_._v("Least Frequently Used（LFU）\n淘汰一定时期内被访问次数最少的页面，以次数作为参考")]),_._v(" "),t("li",[_._v("Least Recently Used（LRU）\n淘汰最长时间未被使用的页面，以时间作为参考")])]),_._v(" "),t("p",[_._v("LRU :")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883876-7bafe2f9-5851-4b10-906a-0f75db7d3d29.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_13%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("引入 google guava  缓存机制")])]),_._v(" "),t("p",[_._v("Guava Cache与ConcurrentMap很相似，但也不完全一样。最基本的区别是ConcurrentMap会一直保存所有添加的元素，直到显式地移除。相对地，Guava Cache为了限制内存占用，通常都设定为自动回收元素。在某些场景下，尽管LoadingCache 不回收元素，它也是很有用的，因为它会自动加载缓存。")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("guava cache 初始化")])])]),_._v(" "),t("p",[_._v("@Slf4j")]),_._v(" "),t("p",[_._v("@Component")]),_._v(" "),t("p",[_._v("public class LocalCache {")]),_._v(" "),t("p",[_._v("private Cache<String,PmsProductParam> localCache = null;")]),_._v(" "),t("p",[_._v("@PostConstruct")]),_._v(" "),t("p",[_._v("private void init(){")]),_._v(" "),t("p",[_._v("​    localCache = CacheBuilder.newBuilder()")]),_._v(" "),t("p",[_._v("​        //设置本地缓存容器的初始容量")]),_._v(" "),t("p",[_._v("​        .initialCapacity(10)")]),_._v(" "),t("p",[_._v("​        //设置本地缓存的最大容量")]),_._v(" "),t("p",[_._v("​        .maximumSize(500)")]),_._v(" "),t("p",[_._v("​        //设置写缓存后多少秒过期")]),_._v(" "),t("p",[_._v("​        .expireAfterWrite(60, TimeUnit.SECONDS).build();")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public void setLocalCache(String key,PmsProductParam object){")]),_._v(" "),t("p",[_._v("​    localCache.put(key,object);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("public PmsProductParam get(String key){")]),_._v(" "),t("p",[_._v("​    return localCache.getIfPresent(key);")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("引入cache")])])]),_._v(" "),t("p",[_._v("@Autowired")]),_._v(" "),t("p",[_._v("private LocalCache cache;")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("替换hashmap本地缓存")])])]),_._v(" "),t("p",[_._v("//  PmsProductParam productInfo=cacheMap.get(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id)")]),_._v(" "),t("p",[_._v("PmsProductParam productInfo=cache.get(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id)")]),_._v(" "),t("p",[_._v("if(productInfo!=null){")]),_._v(" "),t("p",[_._v("//cacheMap.put(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,productInfo);")]),_._v(" "),t("p",[_._v("cache.setLocalCache(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,productInfo);")]),_._v(" "),t("p",[_._v("return productInfo;")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("//gooogle guava cache")]),_._v(" "),t("p",[_._v("cache.setLocalCache(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,productInfo);")]),_._v(" "),t("p",[t("strong",[_._v("问题：")])]),_._v(" "),t("p",[_._v("如果缓存访问高峰期，缓存失效，缓存被击穿，所有请求直接发送到数据库。出现连锁反应，出现缓存雪崩。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883930-ec617f56-8a4d-4552-a923-1c6a6a1222c2.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_25%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("解决办法 ： 分布式锁")]),_._v(" "),t("p",[_._v("redis  ：有可能出现死锁")]),_._v(" "),t("p",[_._v("zk：推荐")]),_._v(" "),t("h3",{attrs:{id:"_4-2-4-分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-分布式锁"}},[_._v("#")]),_._v(" 4.2.4 分布式锁")]),_._v(" "),t("p",[_._v("查询数据库加锁")]),_._v(" "),t("p",[_._v('if(zkLock.lock(lockPath + "_" + id)) {')]),_._v(" "),t("p",[_._v("//todo 查询商品详情信息")]),_._v(" "),t("p",[_._v("productInfo = portalProductDao.getProductInfo(id);")]),_._v(" "),t("p",[_._v("if (productInfo == null) {")]),_._v(" "),t("p",[_._v("​    return null;")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("更新缓存 释放锁")]),_._v(" "),t("p",[_._v("// 缓存到一级缓存")]),_._v(" "),t("p",[_._v("cache.setLocalCache(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE + id, productInfo);")]),_._v(" "),t("p",[_._v("// 商品信息缓存到reids当中，缓存被动更新")]),_._v(" "),t("p",[_._v("redisOpsUtil.set(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE + id, productInfo, 3600, TimeUnit.SECONDS);")]),_._v(" "),t("p",[_._v('zkLock.unlock(lockPath + "_" + id);')]),_._v(" "),t("p",[_._v("}else{")]),_._v(" "),t("p",[_._v("productInfo = redisOpsUtil.get(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE+id,PmsProductParam.class);")]),_._v(" "),t("p",[_._v("if(productInfo != null){")]),_._v(" "),t("p",[_._v("​    cache.setLocalCache(RedisKeyPrefixConst.PRODUCT_DETAIL_CACHE + id,productInfo);")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[_._v("}")]),_._v(" "),t("p",[t("strong",[_._v("问题：")])]),_._v(" "),t("p",[_._v("恶心访问不存在的商品ID")]),_._v(" "),t("p",[_._v("商品更新如何更新缓存？")]),_._v(" "),t("h3",{attrs:{id:"_4-2-5-缓存击穿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-5-缓存击穿"}},[_._v("#")]),_._v(" 4.2.5 缓存击穿")]),_._v(" "),t("p",[_._v("伪造不存在的商品ID 会频繁使用分布式锁+DB")]),_._v(" "),t("h3",{attrs:{id:"_4-2-6-布隆过滤器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-6-布隆过滤器"}},[_._v("#")]),_._v(" 4.2.6 布隆过滤器")]),_._v(" "),t("p",[_._v("快速识别ID是否存在合法 ：")]),_._v(" "),t("p",[_._v("1）所有ID存Redis。上亿的商品ID占用大量内存。")]),_._v(" "),t("p",[_._v("2）ID压缩 +快速+准确： 布隆过滤器。")]),_._v(" "),t("p",[_._v("​\t布隆过滤器（Bloom Filter）是1970年由\t"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%B8%83%E9%9A%86/14216465",target:"_blank",rel:"noopener noreferrer"}},[_._v("布隆"),t("OutboundLink")],1),_._v("\t提出的。它实际上是一个很长的\t"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6/361457",target:"_blank",rel:"noopener noreferrer"}},[_._v("二进制"),t("OutboundLink")],1),_._v("\t向量和一系列随机映射函数。布隆过滤器可以用于检索一个元素是否在一个集合中。它的优点是空间效率和查询时间都比一般的算法要好的多，缺点是有一定的误识别率和删除困难。")]),_._v(" "),t("p",[t("strong",[_._v("Bloom Filter 原理")])]),_._v(" "),t("p",[_._v("布隆过滤器的原理是，当一个元素被加入集合时，通过K个散列函数将这个元素映射成一个位数组中的K个点，把它们置为1。检索时，我们只要看看这些点是不是都是1就（大约）知道集合中有没有它了：如果这些点有任何一个0，则被检元素一定不在；如果都是1，则被检元素很可能在。这就是布隆过滤器的基本思想。")]),_._v(" "),t("p",[_._v("Bloom Filter跟单哈希函数Bit-Map不同之处在于：Bloom Filter使用了k个哈希函数，每个字符串跟k个bit对应。从而降低了冲突的概率。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1594793883916-5b974443-3bc9-45e4-9e87-eb42ade8cb3c.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_25%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),t("p",[_._v("如何实现分布式布隆过滤器？")]),_._v(" "),t("p",[_._v("1）集中式的接口访问 http rpc  rest")]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("redis存储")])]),_._v(" "),t("h1",{attrs:{id:"_5-页面静态化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-页面静态化"}},[_._v("#")]),_._v(" 5.页面静态化")]),_._v(" "),t("p",[_._v("CDN  页面静态化   缓存")])])}),[],!1,null,null,null);t.default=v.exports}}]);