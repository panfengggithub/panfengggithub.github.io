(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{606:function(a,e,t){"use strict";t.r(e);var i=t(1),s=Object(i.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"整体认识mybatis与源码分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#整体认识mybatis与源码分析"}},[a._v("#")]),a._v(" "),e("strong",[a._v("整体认识mybatis与源码分析")])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.yuque.com/attachments/yuque/0/2020/pdf/1387387/1607609258072-89359328-bcec-4a84-b8b0-558682dadfd6.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("第一节课：整体认识mybatis与源码分析.pdf"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("各位VIP同学你们好，接下来咱们进入Mybatis框架的课程学习，本课程有8个课时4节课。")]),a._v(" "),e("p",[a._v("分别为：")]),a._v(" "),e("p",[a._v("第一节课：整体认识mybatis与源码分析")]),a._v(" "),e("p",[a._v("第二节课：Mybatis源码分析二")]),a._v(" "),e("p",[a._v("第三节课：Mybatis源码分析三")]),a._v(" "),e("p",[a._v("第四节课：Mybatis与Spring整合与徒手实现")]),a._v(" "),e("p",[a._v("学完之后可以get到：")]),a._v(" "),e("p",[a._v("Mybatis在开发中作用与工作原理")]),a._v(" "),e("p",[a._v("Mybatis源码的精髓与设计模式")]),a._v(" "),e("p",[a._v("Orm框架的核心思想与设计能力")]),a._v(" "),e("p",[a._v("也是你面试装逼神技能")]),a._v(" "),e("h1",{attrs:{id:"一、传统jdbc弊端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、传统jdbc弊端"}},[a._v("#")]),a._v(" 一、传统JDBC弊端")]),a._v(" "),e("p",[a._v("总结：")]),a._v(" "),e("p",[a._v("1、jdbc底层没有用连接池、操作数据库需要频繁的创建和关联链接。消耗很大的资源")]),a._v(" "),e("p",[a._v("2、写原生的jdbc代码在java中，一旦我们要修改sql的话，java需要整体编译，不利于系统维护")]),a._v(" "),e("p",[a._v("3、使用PreparedStatement预编译的话对变量进行设置123数字，这样的序号不利于维护")]),a._v(" "),e("p",[a._v("4、返回result结果集也需要硬编码。")]),a._v(" "),e("h1",{attrs:{id:"二、orm框架mybatis介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、orm框架mybatis介绍"}},[a._v("#")]),a._v(" 二、ORM框架Mybatis介绍")]),a._v(" "),e("p",[a._v("MyBatis is a first class persistence framework with support for custom SQL, stored procedures and advanced mappings. MyBatis eliminates almost all of the JDBC code and manual setting of parameters and retrieval of results. MyBatis can use simple XML or Annotations for configuration and map primitives, Map interfaces and Java POJOs (Plain Old Java Objects) to database records.")]),a._v(" "),e("p",[a._v("MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以使用简单的 XML 或注解来配置和映射原生类型、接口和 Java 的 POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。")]),a._v(" "),e("p",[a._v("源码下载：")]),a._v(" "),e("p",[a._v("https://github.com/mybatis/mybatis-3")]),a._v(" "),e("h1",{attrs:{id:"三、mybatis快速开始-配置详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、mybatis快速开始-配置详解"}},[a._v("#")]),a._v(" 三、Mybatis快速开始&配置详解")]),a._v(" "),e("p",[a._v("https://mybatis.org/mybatis-3/index.html")]),a._v(" "),e("h1",{attrs:{id:"四、源码整体分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、源码整体分析"}},[a._v("#")]),a._v(" 四、源码整体分析")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607609358050-8f1c94fc-6d6d-4eed-b922-32bf32186ba5.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_22%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607609349239-58242803-0339-4428-aa66-480ab586890b.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_34%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),e("p",[a._v("为什么看源码")]),a._v(" "),e("p",[a._v("1、 提升技术功底  java基础")]),a._v(" "),e("p",[a._v("2、深度掌握技术框架")]),a._v(" "),e("p",[a._v("3、 快速定位线上问题")]),a._v(" "),e("p",[a._v("4、 面试必问")]),a._v(" "),e("p",[a._v("5、 技术追求")]),a._v(" "),e("p",[a._v("原则")]),a._v(" "),e("p",[a._v("1、定焦原则： 抓主线（抓住一个核心流程去分析，不要漫无目的的去看源代码）")]),a._v(" "),e("p",[a._v("2、宏观原则： 站在上帝视角，先脉络后枝叶 （切忌试图搞清楚每一行代码）")]),a._v(" "),e("p",[a._v("方法")]),a._v(" "),e("ol",[e("li",[a._v("先会使用，了解框架的设计思想和功能架构")]),a._v(" "),e("li",[a._v("抓主线，多尝试静态看代码")]),a._v(" "),e("li",[a._v("在源码中写注释&画流程图")]),a._v(" "),e("li",[a._v("整合总结")])]),a._v(" "),e("p",[a._v("技巧")]),a._v(" "),e("p",[a._v("宏观》微观》图解")]),a._v(" "),e("ol",[e("li",[a._v("断点（观察调用栈，利用条件断点，表达式）")]),a._v(" "),e("li",[a._v("反调 （Find Usages）")]),a._v(" "),e("li",[a._v("根据接口方法找到具体实现      AoP   AopProxyFactory")]),a._v(" "),e("li",[a._v("猜测类名方法名（比如doGetBean,doCreateBean）")]),a._v(" "),e("li",[a._v("看控制台日志")])]),a._v(" "),e("p",[a._v("心态")]),a._v(" "),e("p",[a._v("1、克服对源码的恐惧心理")]),a._v(" "),e("p",[a._v("2、 静下心读源码")]),a._v(" "),e("p",[a._v("获取数据库源过程：")]),a._v(" "),e("p",[a._v("org.apache.ibatis.session.SqlSessionFactoryBuilder.build(java.io.InputStream)")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.builder.xml.XMLConfigBuilder.parse")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.builder.xml.XMLConfigBuilder.parseConfiguration")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.builder.xml.XMLConfigBuilder.environmentsElement")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.builder.xml.XMLConfigBuilder.dataSourceElement")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.session.Configuration.setEnvironment#######")]),a._v(" "),e("p",[a._v("获取执行语句源码过程：")]),a._v(" "),e("p",[a._v("org.apache.ibatis.session.SqlSessionFactoryBuilder.build(java.io.InputStream)")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.builder.xml.XMLConfigBuilder.parse")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.builder.xml.XMLConfigBuilder.parseConfiguration")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.builder.xml.XMLConfigBuilder.mapperElement")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.builder.xml.XMLMapperBuilder.configurationElement")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.builder.xml.XMLStatementBuilder.parseStatementNode")]),a._v(" "),e("p",[a._v(">org.apache.ibatis.session.Configuration.addMappedStatement######")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607609301597-70e6455c-18cc-4af8-97b5-fffeb2b44d26.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607609325506-2c0ea747-0798-4f97-9d57-ca15b4f8111d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_19%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607609292688-28c89d40-7a14-497f-97af-7c7cb4fde369.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_44%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),e("p",[a._v("执行操作源码过程：")]),a._v(" "),e("p",[a._v("org.apache.ibatis.session.defaults.DefaultSqlSessionFactory.openSession()")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.session.Configuration.newExecutor(org.apache.ibatis.transaction.Transaction, org.apache.ibatis.session.ExecutorType)")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.executor.SimpleExecutor")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.session.defaults.DefaultSqlSession.selectOne(java.lang.String, java.lang.Object)")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.session.defaults.DefaultSqlSession.selectList(java.lang.String, java.lang.Object)")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.executor.CachingExecutor.query(org.apache.ibatis.mapping.MappedStatement, java.lang.Object, org.apache.ibatis.session.RowBounds, org.apache.ibatis.session.ResultHandler)")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.executor.CachingExecutor.query(org.apache.ibatis.mapping.MappedStatement, java.lang.Object, org.apache.ibatis.session.RowBounds, org.apache.ibatis.session.ResultHandler, org.apache.ibatis.cache.CacheKey, org.apache.ibatis.mapping.BoundSql)")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.executor.BaseExecutor.queryFromDatabase")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.executor.SimpleExecutor.doQuery")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.executor.statement.PreparedStatementHandler.query")]),a._v(" "),e("p",[a._v("》org.apache.ibatis.executor.resultset.DefaultResultSetHandler.handleResultSets")]),a._v(" "),e("p",[a._v("加载mppers文件有四种")]),a._v(" "),e("h1",{attrs:{id:"五、annotaion注解的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、annotaion注解的方式"}},[a._v("#")]),a._v(" 五、Annotaion注解的方式")]),a._v(" "),e("p",[a._v("org.apache.ibatis.session.SqlSessionFactoryBuilder.build(java.io.InputStream)")]),a._v(" "),e("p",[a._v("＞org.apache.ibatis.builder.xml.XMLConfigBuilder")]),a._v(" "),e("p",[a._v("org.apache.ibatis.builder.xml.XMLConfigBuilder.mapperElement")]),a._v(" "),e("p",[a._v("org.apache.ibatis.session.Configuration.addMapper")]),a._v(" "),e("p",[a._v("org.apache.ibatis.binding.MapperRegistry.addMapper")]),a._v(" "),e("p",[a._v("org.apache.ibatis.binding.MapperRegistry.addMapper")]),a._v(" "),e("p",[a._v("org.apache.ibatis.builder.annotation.MapperAnnotationBuilder.parseStatement")]),a._v(" "),e("p",[a._v("org.apache.ibatis.builder.annotation.MapperAnnotationBuilder.getSqlSourceFromAnnotations")]),a._v(" "),e("p",[a._v("org.apache.ibatis.builder.annotation.MapperAnnotationBuilder.buildSqlSourceFromStrings")]),a._v(" "),e("p",[a._v("org.apache.ibatis.builder.SqlSourceBuilder.parse")]),a._v(" "),e("h1",{attrs:{id:"六、mybatis-xml和annotation-优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、mybatis-xml和annotation-优缺点"}},[a._v("#")]),a._v(" 六、Mybatis xml和annotation|优缺点")]),a._v(" "),e("p",[a._v("Annotaion方式：")]),a._v(" "),e("p",[a._v("1、不适合比较复杂的sql 比如关联查询")]),a._v(" "),e("p",[a._v("2、不方便（收集）管理sql")]),a._v(" "),e("p",[a._v("Xml方法：")]),a._v(" "),e("p",[a._v("1、xml繁琐、麻烦")]),a._v(" "),e("p",[a._v("2、条件不确定的查询")]),a._v(" "),e("p",[a._v("3、容易出错写错，特殊字符转义")]),a._v(" "),e("p",[a._v("org.apache.ibatis.builder.annotation.MapperAnnotationBuilder#getSqlSourceFromAnnotations")]),a._v(" "),e("h1",{attrs:{id:"七、mybatis源码分析之selectone和自定义方法区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、mybatis源码分析之selectone和自定义方法区别"}},[a._v("#")]),a._v(" 七、Mybatis源码分析之SelectOne和自定义方法区别：")]),a._v(" "),e("p",[a._v("图片放大")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607609572382-bc2438a1-fe6e-460d-9348-6f78069f8cd2.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_72%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);