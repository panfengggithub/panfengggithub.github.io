(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{619:function(_,e,t){"use strict";t.r(e);var v=t(1),s=Object(v.a)({},(function(){var _=this,e=_._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"秒杀系统高并发场景下扣库存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#秒杀系统高并发场景下扣库存"}},[_._v("#")]),_._v(" "),e("strong",[_._v("秒杀系统高并发场景下扣库存")])]),_._v(" "),e("h1",{attrs:{id:"_1-下单的业务流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下单的业务流程"}},[_._v("#")]),_._v(" 1.下单的业务流程")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370433-94e55f55-f048-4372-8d6d-ba05cd5768da.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_23%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("订单确认")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("生成订单")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("支付二维码")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("扫码支付")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("确认支付")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("回调更新订单状态")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("订单查询")])])])]),_._v(" "),e("h1",{attrs:{id:"_2-减库存方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-减库存方式"}},[_._v("#")]),_._v(" 2.减库存方式")]),_._v(" "),e("p",[_._v("减库存有3种方式")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("下单减库存，即当买家下单后，在商品的总库存中减去买家购买数量。下单减库存是最简单的减库存方式，也是控制最精确的一种，下单时直接通过数据库的事务机制控制商品库存，这样一定不会出现超卖的情况。但是你要知道，有些人下完单可能并不会付款。")])]),_._v(" "),e("li",[e("p",[_._v("付款减库存，即买家下单后，并不立即减库存，而是等到有用户付款后才真正减库存，否则库存一直保留给其他买家。但因为付款时才减库存，如果并发比较高，有可能出现买家下单后付不了款的情况，因为可能商品已经被其他人买走了。")])]),_._v(" "),e("li",[e("p",[_._v("预扣库存，这种方式相对复杂一些，买家下单后，库存为其保留一定的时间（如 10 分钟），超过这个时间，库存将会自动释放，释放后其他买家就可以继续购买。在买家付款前，系统会校验该订单的库存是否还有保留：如果没有保留，则再次尝试预扣；如果库存不足（也就是预扣失败）则不允许继续付款；如果预扣成功，则完成付款并实际地减去库存。")])])]),_._v(" "),e("h1",{attrs:{id:"_3-秒杀系统减库存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-秒杀系统减库存"}},[_._v("#")]),_._v(" 3.秒杀系统减库存")]),_._v(" "),e("p",[_._v("下单减库存 在数据一致性上，主要就是保证大并发请求时库存数据不能为负数。")]),_._v(" "),e("h2",{attrs:{id:"_3-1-悲观锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-悲观锁"}},[_._v("#")]),_._v(" 3.1 悲观锁")]),_._v(" "),e("p",[_._v("直接在秒杀库存表加行锁")]),_._v(" "),e("p",[_._v("BEGIN;")]),_._v(" "),e("p",[_._v("SELECT * FROM "),e("code",[_._v("sms_flash_promotion_product_relation")]),_._v(" WHERE id=38 for UPDATE;")]),_._v(" "),e("p",[_._v("UPDATE sms_flash_promotion_product_relation set flash_promotion_count=flash_promotion_count-1 where id=38;")]),_._v(" "),e("p",[_._v("COMMIT;")]),_._v(" "),e("p",[_._v("ROLLBACK;")]),_._v(" "),e("p",[_._v("Integer dbStock = miaoShaStockDao.selectMiaoShaStockInLock(product.getFlashPromotionRelationId());")]),_._v(" "),e("p",[_._v("if(dbStock <= 0){")]),_._v(" "),e("p",[_._v('return CommonResult.failed("商品已抢完！");')]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("miaoShaStockDao.descStockInLock(product.getFlashPromotionRelationId(),dbStock-1);")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370431-3f9a30ab-e6a0-40a0-a285-15cf78e24024.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_23%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("p",[_._v("问题：")]),_._v(" "),e("p",[e("strong",[_._v("大量请求导致数据库连接被耗尽，数据库崩溃。")])]),_._v(" "),e("p",[e("strong",[_._v("特殊情况下会死锁")])]),_._v(" "),e("h2",{attrs:{id:"_3-2-乐观锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-乐观锁"}},[_._v("#")]),_._v(" 3.2 乐观锁")]),_._v(" "),e("h3",{attrs:{id:"_3-2-1-获取版本号-更新时比较版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-获取版本号-更新时比较版本"}},[_._v("#")]),_._v(" 3.2.1 获取版本号，更新时比较版本")]),_._v(" "),e("p",[_._v("BEGIN;")]),_._v(" "),e("p",[_._v("SELECT version,* FROM "),e("code",[_._v("sms_flash_promotion_product_relation")]),_._v(" WHERE id=38 for UPDATE;")]),_._v(" "),e("p",[_._v("UPDATE sms_flash_promotion_product_relation set flash_promotion_count=flash_promotion_count-1 ,version =version +1 where id=38 and version=#{version};")]),_._v(" "),e("p",[_._v("COMMIT;")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370429-435d68a4-ed2b-40d8-b3bf-6d14d354c80f.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_18%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370457-3a92b443-3e67-44a9-bbd4-257ebc338058.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_18%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("h3",{attrs:{id:"_3-2-2-设置库存字段为无符号整形"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-设置库存字段为无符号整形"}},[_._v("#")]),_._v(" 3.2.2  设置库存字段为无符号整形")]),_._v(" "),e("p",[_._v("设置无符号整形，目的是防止出现负数。如果出现负数，抛出异常。否则也会出现超卖的情况")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370492-581cf1f6-cd47-45cf-905e-0f0b1712ace2.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_37%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("p",[_._v("数据库每次执行一条update语句时会获取被update行的写锁，直到这一行被成功更新后才释放。因此在业务操作进行前获取需要锁的数据的当前版本号，然后实际更新数据时再次对比版本号确认与之前获取的相同，并更新版本号，即可确认这之间没有发生并发的修改。如果更新失败即可认为老版本的数据已经被并发修改掉而不存在了，此时认为获取锁失败，需要回滚整个业务操作并可根据需要重试整个过程。")]),_._v(" "),e("p",[e("strong",[_._v("总结")])]),_._v(" "),e("ul",[e("li",[_._v("乐观锁在不发生取锁失败的情况下开销比悲观锁小，但是一旦发生失败回滚开销则比较大，因此适合用在取锁失败概率比较小的场景，可以提升系统并发性能")]),_._v(" "),e("li",[e("strong",[_._v("乐观锁会出现不公平现象，产生大量的日志")])])]),_._v(" "),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[_._v("#")])]),_._v(" "),e("h2",{attrs:{id:"_3-3-case-when机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-case-when机制"}},[_._v("#")]),_._v(" "),e("strong",[_._v("3.3 Case When机制")])]),_._v(" "),e("p",[_._v("UPDATE sms_flash_promotion_product_relation SET flash_promotion_count = CASE WHEN flash_promotion_count >= 20 THEN flash_promotion_count-20 ELSE flash_promotion_count END where id=38;")]),_._v(" "),e("p",[_._v("int resultDb = miaoShaStockDao.descStock(product.getFlashPromotionRelationId(),1);")]),_._v(" "),e("ol",[e("li",[_._v("预减库存")])]),_._v(" "),e("p",[_._v("提前校验库存是否足够，减少直接访问DB的流量。")]),_._v(" "),e("p",[_._v("问题：100个人抢1个库存，需要访问DB吗？？？？")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370427-b13a963f-756a-49f2-808b-cc2c8f344d62.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_21%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"_5-1-预减库存解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-预减库存解决方案"}},[_._v("#")]),_._v(" 5.1 预减库存解决方案")]),_._v(" "),e("p",[_._v("解决方案：")]),_._v(" "),e("p",[_._v("1、商品服务启动时启动时把库存存入Redis")]),_._v(" "),e("p",[_._v("2、下单时redis预减处理")]),_._v(" "),e("p",[_._v("商品服务启动时预热秒杀商品库存信息")]),_._v(" "),e("p",[_._v("/**")]),_._v(" "),e("p",[_._v("* 加载所有的秒杀活动商品库存到缓存redis中")]),_._v(" "),e("p",[_._v("* @throws Exception")]),_._v(" "),e("p",[_._v("*/")]),_._v(" "),e("p",[_._v("@Override")]),_._v(" "),e("p",[_._v("public void afterPropertiesSet() throws Exception {")]),_._v(" "),e("p",[_._v("//todo  获取所有的秒杀活动中商品")]),_._v(" "),e("p",[_._v("FlashPromotionParam promotion = flashPromotionProductDao.getFlashPromotion(null);")]),_._v(" "),e("p",[_._v("Date now = new Date();")]),_._v(" "),e("p",[_._v("Date endDate = promotion.getEndDate();//结束时间")]),_._v(" "),e("p",[_._v("final Long expired = endDate.getTime()-now.getTime();//剩余时间")]),_._v(" "),e("p",[_._v("//秒杀商品库存缓存到redis")]),_._v(" "),e("p",[_._v("promotion.getRelation().stream().forEach((item)->{")]),_._v(" "),e("p",[_._v("​    redisOpsUtil().setIfAbsent(")]),_._v(" "),e("p",[_._v("​        RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + item.getProductId()")]),_._v(" "),e("p",[_._v("​        , item.getFlashPromotionCount()")]),_._v(" "),e("p",[_._v("​        , expired")]),_._v(" "),e("p",[_._v("​        , TimeUnit.MILLISECONDS);")]),_._v(" "),e("p",[_._v("});")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[e("em",[_._v("DB减库存前 先在redis预减库存")])]),_._v(" "),e("p",[_._v("private boolean preDecrRedisStock(Long productId,Long promotionId) {")]),_._v(" "),e("p",[_._v("​    Long stock = redisOpsUtil.decr(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productId);")]),_._v(" "),e("p",[_._v("​    if (stock < 0) {")]),_._v(" "),e("p",[_._v("​")]),_._v(" "),e("p",[_._v("​     return false;")]),_._v(" "),e("p",[_._v("​    }")]),_._v(" "),e("p",[_._v("​    return true;")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("​    //预减库存")]),_._v(" "),e("p",[_._v("​    if(!preDecrRedisStock(productId,product.getFlashPromotionRelationId())){")]),_._v(" "),e("p",[_._v('​      return CommonResult.failed("下单失败,已经抢购完了");')]),_._v(" "),e("p",[_._v("​")]),_._v(" "),e("p",[e("strong",[_._v("问题： redis库存0  还需要redis校验吗？")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370503-226aaa09-b3f0-4e66-8220-ff91a41d6ba2.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_18%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("p",[e("em",[e("strong",[_._v("问题：")])])]),_._v(" "),e("p",[e("em",[e("strong",[_._v("如果预减库存成功后，扣减库存之前程序出现异常，需要补回之前预减的库存。")])])]),_._v(" "),e("h2",{attrs:{id:"_5-2-预减库存后异常之少卖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-预减库存后异常之少卖"}},[_._v("#")]),_._v(" "),e("strong",[_._v("5.2 预减库存后异常之少卖")])]),_._v(" "),e("p",[e("em",[e("strong",[_._v("预减库存成功后，需要补回之前预减的库存，否则出现少卖")])])]),_._v(" "),e("p",[_._v("} catch (Exception e) {")]),_._v(" "),e("p",[_._v('log.error("消息发送失败:error msg:{}",e.getMessage(),e.getCause());')]),_._v(" "),e("p",[_._v("/*")]),_._v(" "),e("p",[_._v("* 还原预减库存")]),_._v(" "),e("p",[_._v("*/")]),_._v(" "),e("p",[_._v("incrRedisStock(productId);")]),_._v(" "),e("p",[_._v("/*")]),_._v(" "),e("p",[_._v("* 清除掉本地guavacache已经售完的标记")]),_._v(" "),e("p",[_._v("*/")]),_._v(" "),e("p",[_._v("cache.remove(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productId);")]),_._v(" "),e("p",[_._v("//通知服务群,清除本地售罄标记缓存")]),_._v(" "),e("p",[_._v("if(shouldPublishCleanMsg(productId)) {")]),_._v(" "),e("p",[_._v('​    redisOpsUtil.publish("cleanNoStockCache", productId);')]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v('result.put("orderStatus",-1);')]),_._v(" "),e("p",[_._v('return CommonResult.failed(result,"下单失败");')]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("//还原库存")]),_._v(" "),e("p",[_._v("public void incrRedisStock(Long productId){")]),_._v(" "),e("p",[_._v("if(redisOpsUtil.hasKey(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productId)){")]),_._v(" "),e("p",[_._v("​    redisOpsUtil.incr(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productId);")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("Long stock = redisOpsUtil.decr(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productId);")]),_._v(" "),e("p",[_._v("if (stock < 0) {")]),_._v(" "),e("p",[_._v("/*")]),_._v(" "),e("p",[_._v("* 还原缓存里的库存，思考这里加回来的目的！")]),_._v(" "),e("p",[_._v("*/")]),_._v(" "),e("p",[_._v("incrRedisStock(productId);")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[e("strong",[_._v("预减库存小于0时候，需要回补。如果不回补的话，上面异常回补的库存就看不见，造成")])]),_._v(" "),e("p",[e("strong",[_._v("少卖！")])]),_._v(" "),e("p",[_._v("比如 3个线程 T1,T2,T3 预减库存，当前库存为1；")]),_._v(" "),e("p",[_._v("T1预减库存成功  库存=0；")]),_._v(" "),e("p",[_._v("T2,T3 预减失败   库存 = -2；")]),_._v(" "),e("p",[_._v("T1回补库存    ， 库存=-1；")]),_._v(" "),e("p",[_._v("此时无法进行库存扣减，其实库存是有一个商品的，所以扣减也要回补。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370565-393e7a12-1992-412a-b119-0b07834e229d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370525-862ff732-5707-4a3c-ba1d-0bd4c40437b8.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_34%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370558-7ba108fd-7bcd-4928-b459-435510531e35.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_41%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("p",[e("strong",[_._v("其实现在是有一个 库存，所以预减库存失败也需要回补 ，防止 出现 少卖！！！")])]),_._v(" "),e("h1",{attrs:{id:"_6-售罄校验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-售罄校验"}},[_._v("#")]),_._v(" 6.售罄校验")]),_._v(" "),e("p",[_._v("如果商品已经售罄，流量没有必要进入redis做预减，可以提前进行校验。")]),_._v(" "),e("h2",{attrs:{id:"_6-1-localcache缓存售罄标识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-localcache缓存售罄标识"}},[_._v("#")]),_._v(" 6.1   Localcache缓存售罄标识")]),_._v(" "),e("p",[_._v("首先通过本地缓存是否有库存的标志")]),_._v(" "),e("p",[_._v("Boolean localcache = cache.getCache(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productId);")]),_._v(" "),e("p",[_._v("if(localcache != null && localcache){")]),_._v(" "),e("p",[_._v('return CommonResult.failed("商品已经售罄,请购买其它商品!");')]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("//从redis缓存当中取出当前要购买的商品库存")]),_._v(" "),e("p",[_._v("Integer stock = redisOpsUtil.get(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productId,Integer.class);")]),_._v(" "),e("p",[_._v("if(stock == null || stock <= 0){")]),_._v(" "),e("p",[_._v("cache.setLocalCache(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productId,true);")]),_._v(" "),e("p",[_._v('return CommonResult.failed("商品已经售罄,请购买其它商品!");')]),_._v(" "),e("p",[e("strong",[_._v("预减商品前提前校验 售罄标识")])]),_._v(" "),e("p",[_._v("CommonResult commonResult = confirmCheck(productId,memberId,token);")]),_._v(" "),e("p",[_._v("​    if(commonResult.getCode() == 500){")]),_._v(" "),e("p",[_._v("​      return commonResult;")]),_._v(" "),e("p",[_._v("​")]),_._v(" "),e("p",[_._v("​")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370445-85fc35e2-048a-4d4e-adf2-c079898faccc.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_19%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[_._v("#")])]),_._v(" "),e("h3",{attrs:{id:"-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[_._v("#")])]),_._v(" "),e("h2",{attrs:{id:"_6-2-redis发布订阅同步集群售罄标识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-redis发布订阅同步集群售罄标识"}},[_._v("#")]),_._v(" "),e("strong",[_._v("6.2  Redis发布订阅同步集群售罄标识")])]),_._v(" "),e("p",[e("strong",[_._v("Redis发布订阅模式 通知其它应用本地cache的 库存标志进行同步修改")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370426-54c8704f-155b-4108-9043-311f2c37092d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370438-bd3ef6a1-fa4c-4e19-8ba1-3d092c39cfe7.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("p",[e("strong",[_._v("发布订阅演示实例")])]),_._v(" "),e("p",[_._v("以下实例演示了发布订阅是如何工作的。在我们实例中我们创建了订阅频道名为 "),e("strong",[_._v("redisChat")]),_._v(":")]),_._v(" "),e("p",[_._v("redis 127.0.0.1:6379> SUBSCRIBE redisChat")]),_._v(" "),e("p",[_._v("Reading messages... (press Ctrl-C to quit)")]),_._v(" "),e("ol",[e("li",[e("p",[_._v('"subscribe"')])]),_._v(" "),e("li",[e("p",[_._v('"redisChat"')])]),_._v(" "),e("li",[e("p",[_._v("(integer) 1")])])]),_._v(" "),e("p",[_._v("现在，我们先重新开启个 redis 客户端，然后在同一个频道 redisChat 发布两次消息，订阅者就能接收到消息。")]),_._v(" "),e("p",[_._v('redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great caching technique"')]),_._v(" "),e("p",[_._v("(integer) 1")]),_._v(" "),e("p",[_._v('redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis by runoob.com"')]),_._v(" "),e("p",[_._v("(integer) 1")]),_._v(" "),e("p",[_._v("# 订阅者的客户端会显示如下消息")]),_._v(" "),e("ol",[e("li",[e("p",[_._v('"message"')])]),_._v(" "),e("li",[e("p",[_._v('"redisChat"')])]),_._v(" "),e("li",[e("p",[_._v('"Redis is a great caching technique"')])]),_._v(" "),e("li",[e("p",[_._v('"message"')])]),_._v(" "),e("li",[e("p",[_._v('"redisChat"')])]),_._v(" "),e("li",[e("p",[_._v('"Learn redis by runoob.c')])])]),_._v(" "),e("p",[e("strong",[_._v("Redis实现发布订阅同步 各个应用缓存的逻辑：")])]),_._v(" "),e("p",[_._v("public class RedisConifg {")]),_._v(" "),e("p",[_._v("1.创建channnel Topic")]),_._v(" "),e("p",[_._v("@Bean")]),_._v(" "),e("p",[_._v("ChannelTopic channelTopic(){")]),_._v(" "),e("p",[_._v('return new ChannelTopic("cleanNoStockCache");')]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("2.创建监听器和发布者")]),_._v(" "),e("p",[_._v("public class RedisOpsUtil {")]),_._v(" "),e("p",[_._v("public void publish(String channel,Object message){")]),_._v(" "),e("p",[_._v("redisTemplate.convertAndSend(channel,message);")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("@Slf4j")]),_._v(" "),e("p",[_._v("public class RedisChannelListener implements MessageListener {")]),_._v(" "),e("p",[_._v("@Autowired")]),_._v(" "),e("p",[_._v("private LocalCache localCache;")]),_._v(" "),e("p",[_._v("@Override")]),_._v(" "),e("p",[_._v("public void onMessage(Message message, @Nullable byte[] pattern) {")]),_._v(" "),e("p",[_._v('​    log.info("sub message 😃 channel[cleanNoStockCache] !");')]),_._v(" "),e("p",[_._v("​    String productId = new String(message.getBody(), StandardCharsets.UTF_8);")]),_._v(" "),e("p",[_._v("​    localCache.remove(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productId);")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("ol",[e("li",[_._v("RedisMessageListenerContainer监听容器来将订阅者与指定频道绑定,集成监听器和Chanel")])]),_._v(" "),e("p",[_._v("@Bean")]),_._v(" "),e("p",[_._v("public RedisMessageListenerContainer redisMessageListenerContainer(){")]),_._v(" "),e("p",[_._v("RedisMessageListenerContainer container = new RedisMessageListenerContainer();")]),_._v(" "),e("p",[_._v("container.setConnectionFactory(connectionFactory);")]),_._v(" "),e("p",[_._v("container.addMessageListener(messageListenerAdapter(),channelTopic());")]),_._v(" "),e("p",[_._v("return container;")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("@Bean")]),_._v(" "),e("p",[_._v("MessageListenerAdapter messageListenerAdapter(){")]),_._v(" "),e("p",[_._v("return new MessageListenerAdapter(redisChannelListener());")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("@Bean")]),_._v(" "),e("p",[_._v("RedisChannelListener redisChannelListener(){")]),_._v(" "),e("p",[_._v("return new RedisChannelListener();")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("@Bean")]),_._v(" "),e("p",[_._v("ChannelTopic channelTopic(){")]),_._v(" "),e("p",[_._v('return new ChannelTopic("cleanNoStockCache")')]),_._v(" "),e("p",[e("strong",[_._v("扣减库存失败 发布同步集群售罄标志消息")])]),_._v(" "),e("p",[_._v("} catch (Exception e) {")]),_._v(" "),e("p",[_._v('log.error("create order failure:)",e.getMessage(),e.getCause());')]),_._v(" "),e("p",[_._v("//补回已经减掉的库存!")]),_._v(" "),e("p",[_._v("incrRedisStock(productId);")]),_._v(" "),e("p",[_._v("//通知服务群,清除本地售罄标记缓存")]),_._v(" "),e("p",[_._v('redisOpsUtil.publish("cleanNoStockCache",productId);')]),_._v(" "),e("p",[_._v('throw new BusinessException("创建订单失败!");')]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("p",[_._v("Redis发布订阅并没有保证所有订阅者一定收到消息，没有消息重试机制,不是Ack机制。所以没法保证强一致性。只能通过google guava cache 失效机制（60s）来保证最终一致性。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370400-c40291f7-4694-4b0b-93cd-9f56906a277d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_35%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("h1",{attrs:{id:"_7-rocketmq同步库存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-rocketmq同步库存"}},[_._v("#")]),_._v(" 7.RocketMQ同步库存")]),_._v(" "),e("p",[e("strong",[_._v("redis 扣减库存成功 ，DB提交异常，回补库存之前发生JVM崩溃， redis与DB不一致 出现少卖。如何同步redis与DB一致。")])]),_._v(" "),e("p",[_._v("解决方案：")]),_._v(" "),e("p",[_._v("redis预减库存少于0的时候  发送消息给MQ 进行同步数据库和redis的库存。")]),_._v(" "),e("p",[e("strong",[_._v("1.第一次发现 库存小于0 ，发布同步 DB和redis库存的 指令给MQ")])]),_._v(" "),e("p",[e("strong",[_._v("2.记录 标记，表示已经发布过 同步指令，后续请求无需继续请求同步。")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1300531/1595225370562-5f27a29a-4c3d-4b5b-acd4-2b27b33fd5be.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_39%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),_._v(" "),e("h2",{attrs:{id:"_7-1-库存同步实现细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-库存同步实现细节"}},[_._v("#")]),_._v(" "),e("strong",[_._v("7.1 库存同步实现细节")])]),_._v(" "),e("ol",[e("li",[e("strong",[_._v("发送同步库存的延迟消息")])])]),_._v(" "),e("p",[_._v("public class OrderMessageSender {")]),_._v(" "),e("p",[_._v("/**")]),_._v(" "),e("p",[_._v("* 发送延时同步库存消息，60s后同步库存")]),_._v(" "),e("p",[_._v("* @param productId")]),_._v(" "),e("p",[_._v("* @param promotionId")]),_._v(" "),e("p",[_._v("* @return")]),_._v(" "),e("p",[_._v("*/")]),_._v(" "),e("p",[_._v("public boolean sendStockSyncMessage(Long productId,Long promotionId){")]),_._v(" "),e("p",[_._v('Message message = MessageBuilder.withPayload(productId+":"+promotionId).build();')]),_._v(" "),e("p",[_._v('SendResult result = rocketMQTemplate.syncSend("stock-sync",message,5000,5);')]),_._v(" "),e("p",[_._v("return SendStatus.SEND_OK == result.getSendStatus();")]),_._v(" "),e("p",[_._v("}")]),_._v(" "),e("ol",[e("li",[e("strong",[_._v("开始同步DB与redis库存")])])]),_._v(" "),e("p",[_._v("@Slf4j")]),_._v(" "),e("p",[_._v("@Component")]),_._v(" "),e("p",[_._v('@RocketMQMessageListener(topic = "stock-sync",consumerGroup = "stock-sync-worker")')]),_._v(" "),e("p",[_._v("public class StockSyncReciever implements RocketMQListener"),e("String",[_._v(" {")])],1),_._v(" "),e("p",[_._v("@Autowired")]),_._v(" "),e("p",[_._v("private RedisOpsUtil redisOpsUtil;")]),_._v(" "),e("p",[_._v("@Autowired")]),_._v(" "),e("p",[_._v("private PmsProductFeignApi stockManageFeignApi;")]),_._v(" "),e("p",[_._v("@Override")]),_._v(" "),e("p",[_._v("public void onMessage(String message) {")]),_._v(" "),e("p",[_._v('​    String[] param = message.split("😊;')]),_._v(" "),e("p",[_._v("​    if(param.length <= 1){")]),_._v(" "),e("p",[_._v('​      log.error("库存同步，消费消息参数不完整!");')]),_._v(" "),e("p",[_._v("​      return;")]),_._v(" "),e("p",[_._v("​    }")]),_._v(" "),e("p",[_._v("​    Long productID = Long.parseLong(param[0]);")]),_._v(" "),e("p",[_._v("​    Long promotionId =  Long.parseLong(param[1]);")]),_._v(" "),e("p",[_._v("​    /*")]),_._v(" "),e("p",[_._v("​     * 有此标记,代表还没有做同步,需要同步DB到redis,如果标记被删除说明肯定不久前")]),_._v(" "),e("p",[_._v("​     * 刚刚同步过。同步过就没有必要多次去同步，多条同步延时消息来源于高并发下发送")]),_._v(" "),e("p",[_._v("​     * 库存同步消息。这里任然没有办法绝对避免多次查询DB，但是可以大大减少查询次数.")]),_._v(" "),e("p",[_._v("​     */")]),_._v(" "),e("p",[_._v("​    if(redisOpsUtil.hasKey(RedisKeyPrefixConst.STOCK_REFRESHED_MESSAGE_PREFIX + promotionId)){")]),_._v(" "),e("p",[_._v('​      log.info("start sync mysql stock to redis");')]),_._v(" "),e("p",[_._v("​      //todo 同步一下库存到缓存当中")]),_._v(" "),e("p",[_._v("​      Integer stock = stockManageFeignApi.selectStock(productID,promotionId).getData();")]),_._v(" "),e("p",[_._v("​      if(stock > 0){")]),_._v(" "),e("p",[_._v("​        //重置库存")]),_._v(" "),e("p",[_._v("​        redisOpsUtil.set(RedisKeyPrefixConst.MIAOSHA_STOCK_CACHE_PREFIX + productID,stock);")]),_._v(" "),e("p",[_._v("​        //删除同步标记")]),_._v(" "),e("p",[_._v("​        redisOpsUtil.delete(RedisKeyPrefixConst.STOCK_REFRESHED_MESSAGE_PREFIX + promotionId);")]),_._v(" "),e("p",[_._v("​      }")]),_._v(" "),e("p",[_._v("​    }")]),_._v(" "),e("p",[_._v("}")])])}),[],!1,null,null,null);e.default=s.exports}}]);