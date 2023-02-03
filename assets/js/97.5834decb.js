(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{511:function(s,a,n){"use strict";n.r(a);var e=n(1),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-什么是面向对象-有哪些特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是面向对象-有哪些特征"}},[s._v("#")]),s._v(" 1.什么是面向对象，有哪些特征")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("面向对象是一种思想，万物可归类，类是对事物的高度抽象，\n封装：隐藏内部的实现机制，保护了数据，向外界暴漏访问方法，便于使用修改，增强代码的可维护性\n继承：从已有的类中派生出来的类，吸收已有类的属性和行为，扩展新的能力，即常说的is-a,关键字：extends\n多态：值得是类和类之间的关系，继承，重写，父类引用指向子类对象，\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2-mysql的acid是靠什么保证的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql的acid是靠什么保证的"}},[s._v("#")]),s._v(" 2.mysql的ACID是靠什么保证的")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ACID：\n\n原子：由undolog日志来保证，记录了需要回滚的日志信息，和已执行成功的sql\n一致：由其他三大特性来保证，程序代码要保证业务的一致性\n隔离：MVCC机制\n持久：由redolog来保证，就算数据没有保存成功，只要日志保存成功，数据也不会丢失\n\n\n原子性\n原子性是指事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。\n\n一致性\n数据库总是从一个一致性的状态转移到另一个一致性的状态。一致性确保了即使在执行第三、第四条语句之间时系统崩溃，前面执行的第一、第二条语句也不会生效，因为事务最终没有提交，所有事务中所作的修改也不会保存到数据库中。\n\n隔离性\n一个事务的执行不能其它事务干扰。即一个事务内部的操作及使用的数据对其它并发事务是隔离的，并发执行的各个事务之间不能互相干扰。\n\n持续性\n指一个事务一旦提交，它对数据库中的数据的改变就应该是永久性的。接下来的其它操作或故障不应该对其执行结果有任何影响。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"_3-beanfactory和applicationcontext有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-beanfactory和applicationcontext有什么区别"}},[s._v("#")]),s._v(" 3.BeanFactory和ApplicationContext有什么区别")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("相同：\n    都是IOC容器，都可以使用getBean（）获取bean\n    都可以用来配置XML属性，也支持属性自动注入\n    ApplicationContext继承于BeanFactory\n不同：\n\tBeanFactory在getBean时实例化，ApplicationContext在初始化容器时实例化\n\tApplicationContext支持国际化，BeanFactory不支持\n\tBeanFactory提供了基本功能，ApplicationContext提供了高级功能\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_4-hashmap有哪些线程安全方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-hashmap有哪些线程安全方式"}},[s._v("#")]),s._v(" 4.hashmap有哪些线程安全方式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("方法一：Collections.synchronizedMap()，封装了所有hashmap的不安全方法，使用了synchronized来进行互斥，缺点锁住了尽可能大的代码块，性能差\n方法二：ConcurrentHashMap\n\t\t把整个map切分成了多个块，发生锁碰撞的几率小，性能好，但是代码繁琐\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_5-mvcc解决的问题是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-mvcc解决的问题是什么"}},[s._v("#")]),s._v(" 5.MVCC解决的问题是什么")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("用来解决，读写冲突的无锁并发控制，为事务分配单项增长的时间戳，为每个修改保存一个版本，版本与时间戳关联，读操作只读事务开始前的快照，可以解决脏读，幻读，不可重复读的问题，但是不能解决更新丢失问题\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_6-mybatis优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-mybatis优缺点"}},[s._v("#")]),s._v(" 6.mybatis优缺点")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("优点：\n1.简单容易上手，基于sql编程\n2.与JDBC相比减少代码量，减少冗余代码，不需要手动开关连接\n3.很好的与各种数据库兼容\n4.提供了很多插件（分页插件，逆向工程）\n5.能和spring很好的集成\n6.将sql与程序解耦，放在XML中\n7.支持动态sql语句\n8.提供映射标签，支持对象关系映射\n缺点：\n1.sql编写工作量大\n2.sql语句依赖于数据库，移植性差\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"_7-mysql隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-mysql隔离级别"}},[s._v("#")]),s._v(" 7.mysql隔离级别")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("读未提交：脏读\n读已提交：不可重复读，幻读\n可重复读：幻读（Innodb通过MVCC解决了）\n串行化：效率低\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_8-mysql复制原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-mysql复制原理"}},[s._v("#")]),s._v(" 8.mysql复制原理")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("从库生成两个线程，一个是i/o线程，一个sql线程；\ni/o线程回去请求主库的binlog，并将得到的binlog写道本地的relay-log（中继日志）文件中\n主库会生成一个log dump线程，用来给从库i/o线程传binlog\nsql线程，会读取relay log文件中的日志，并解析成sql语句逐一执行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_9-mysql的聚簇索引和非聚簇索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-mysql的聚簇索引和非聚簇索引"}},[s._v("#")]),s._v(" 9.mysql的聚簇索引和非聚簇索引")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("区分依据：数据跟索引是否存储在一起\ninnodb在数据插入时，数据必须和索引放在一起，有主键-》唯一键-》rowid，为了避免数据冗余，其他索引存的是聚簇索引的key，所以innodb既有聚簇索引也有非聚簇索引，而myisam只有非聚簇索引\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_10-mysql索引结构有哪些-各自优劣"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-mysql索引结构有哪些-各自优劣"}},[s._v("#")]),s._v(" 10.mysql索引结构有哪些，各自优劣")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hash\n\t哈希算法\nb+树\n\t排好序的树结构\n\t等值查询：hash绝对优势\n\t范围查找：b+树绝对优势\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_11-mysql锁类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-mysql锁类型"}},[s._v("#")]),s._v(" 11.mysql锁类型")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("根据属性分为：共享锁，排他锁\n根据粒度分类：行锁，表锁，页锁，记录锁，间隙锁，临键锁\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_12-spring-springmvc-springboot区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-spring-springmvc-springboot区别"}},[s._v("#")]),s._v(" 12.spring，springmvc，springboot区别")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("spring：轻量级java开发框架核心是ioc和aop\nspringmvc：是spring针对于开发的WEB层（处理路径映射和视图渲染）\nspringboot：更专注于开发微服务后台接口，遵循默认优于配置，简化配置流程\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_13-springboot自动配置原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-springboot自动配置原理"}},[s._v("#")]),s._v(" 13.SpringBoot自动配置原理")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("springboot的启动类中可以看到@SpringBootApplication注解，它是SpringBoot的核心注解，也是一个组合注解。其中@SpringBootConfiguration、@EnableAutoConfiguration、@ComponentScan\n\nSpring Boot通过@EnableAutoConfiguration注解开启自动配置，对jar包下的spring.factories文件进行扫描，这个文件中包含了可以进行自动配置的类\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_14-springmvc九大组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-springmvc九大组件"}},[s._v("#")]),s._v(" 14.springmvc九大组件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.HandlerMapping\n2.HandlerAdapter\n3.HandlerExceptionResolver\n4.ViewResolver\n5.RequestToViewNameTranslater\n6.LocalResolver\n7.ThemeResolver\n8.MultipartResolver\n9.FlashMapManager\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_15-spring事务传播机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-spring事务传播机制"}},[s._v("#")]),s._v(" 15.spring事务传播机制")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.required：默认，如果当前没事务则新建一个，有则加入\n2.supports：当前存在事务则加入事务，没有则以非事务方式执行\n3.mandatory：当前存在事务则加入事务，没有则抛出异常\n4.required_new： 创建一个新事务，如果存在当前事务，则挂起该事务\n5.not_supported:以非事务执行，如果存在当前事务，则挂起该事务\n6.never：不使用事务，如果当前事务存在，则抛出异常\n7.nested：如果当前事务存在，则在嵌套事务中执行，不存在则创建新事务\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_16-spring框架中的单例bean是线程安全的么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-spring框架中的单例bean是线程安全的么"}},[s._v("#")]),s._v(" 16.spring框架中的单例Bean是线程安全的么")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("框架并没有对bean进行封装处理\n如果bean是有状态的，最简单的办法是改变bean的作用域为prototype\n无状态为线程安全的\n推荐使用threadlocal把变量编程线程私有，如果需要在多个线程中共享只能synchronized，lock，cas了\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_17-spring事务的实现方式原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-spring事务的实现方式原理是什么"}},[s._v("#")]),s._v(" 17.spring事务的实现方式原理是什么")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("编程式事务：用户自己通过代码来控制事务的处理逻辑\n声明式事务：@Transactional注解来实现\n\t原理：aop的核心体现，当一个方法添加了注解后，spring会基于这个类生成一个代理对象，会将这个代理对象作为bean，当使用代理对象的方法时，先关闭自动提交，执行业务逻辑，如果出现异常回滚，否则直接提交。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_18-spring事务什么时候会失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-spring事务什么时候会失效"}},[s._v("#")]),s._v(" 18.spring事务什么时候会失效")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.bean对象没有被ioc管理\n2.方法的访问权限不是public\n3.自身调用问题\n4.数据源没有配置事务管理器\n5.数据库不支持事务\n6.异常被捕获\n7.异常类型错误或者配置错误\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_19-spring支持的bean的作用域有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-spring支持的bean的作用域有哪些"}},[s._v("#")]),s._v(" 19.spring支持的bean的作用域有哪些")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.singleton\n2.prototype\n3.request\n4.session\n5.global-session\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_20-myisam和innodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-myisam和innodb"}},[s._v("#")]),s._v(" 20.myisam和innodb")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("innodb：\n\t1.支持行锁\n\t2.支持外键\n\t3.支持自增属性\n\t4.支持事务\n\t5.支持mvcc模式\n\t6.读效率低于myisam，写效率优于myisam\n\t7.清空表时，innodb是一行一行删除，myisam会新建表\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_21-mysql索引类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-mysql索引类型"}},[s._v("#")]),s._v(" 21.mysql索引类型")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("普通\n唯一索引\n主键索引\n联合索引\n全文索引\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_22-spring中bean的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22-spring中bean的生命周期"}},[s._v("#")]),s._v(" 22.spring中Bean的生命周期")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.实例化bean对象：通过反射进行对象的创建\n2.设置对象属性：给属性赋值\n3.检查Aware相关接口并设置相关依赖\n4.BeanPostProcessor的前置处理\n5.检查是否是initializingBean的子类来决定是否调用afterPropertiesSet方法\n6.检查是否配置有自定义的init-method方法\n7.beanPostProcessor后置处理\n8.注册必要的Destruction相关回调接口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_23-如何理解springboot的starter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23-如何理解springboot的starter"}},[s._v("#")]),s._v(" 23.如何理解springboot的starter")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("springmvc中引入mybatis时需要在xml中定义需要的bean对象，很麻烦\nspringboot：starter就是一个jar包，写一个@configuration的配置类，将这些bean定义在其中然后在starter包的META-INF/spring.factories中写入配置类，springboot在启动的时候就会按照约定来加载配置类\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_24-ioc怎么实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_24-ioc怎么实现"}},[s._v("#")]),s._v(" 24.ioc怎么实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.准备一个容器对象，包含一些map结构的集合，用来方便后续过程中存储具体的对象\n2.进行配置文件的读取工作或者注解的解析工作，将需要创建的bean封装成beandefinition对象存储在容器中\n3.容器将封装好的beandefinition对象通过反射的方式进行实例化，完成对象的实例化工作\n4.进行对象的初始化操作，也就是给类中的属性值进行设置，进行依赖注入，完成对象的创建，变成一个完整的bean对象，存储在容器的某个map中\n5.通过容器对象来获取对象，进行对象的获取和逻辑处理工作\n6.提供销毁操作，当对象不用或者容器关闭的时候，将无用的对象进行销毁\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_25-bean的自动装配有哪些方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_25-bean的自动装配有哪些方式"}},[s._v("#")]),s._v(" 25.bean的自动装配有哪些方式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bean的自动装配指的是bean的属性值在进行注入的时候通过某种特定的规则和方式去容器中查找，并设置到具体的对象属性中\n1.no\n2.byName\n3.byType\n4.constructor\n5.autodetect\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_26-对aop的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_26-对aop的理解"}},[s._v("#")]),s._v(" 26.对aop的理解")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("面向切面编程：他是为解耦而生的\n切面\n连接点\n通知\n切点\n引入\n目标对象\naop代理\n切点\n引入\n目标对象\naop代理\n织入\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"_27-索引的设计原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_27-索引的设计原则"}},[s._v("#")]),s._v(" 27.索引的设计原则")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("索引字段占用的空间越小越好\n1.出现在where后，或者连接子句中指定的列\n2.基数较小的表，索引效果差，没必要\n3.索引列越短越好，可以指定某些列的一部分，没必要用全部字段的值\n4.不要给表中的每一个字段都创建索引，并不是索引越多越好\n5.定义有外键的数据列一定要创建索引\n6.更新频繁的字段不要有索引\n7.创建索引的列不要过多，可以创建组合索引，但是组合索引的列的个数不建议太多\n8.大文本，大对象不要创建索引\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_28-分布锁有哪些解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_28-分布锁有哪些解决方案"}},[s._v("#")]),s._v(" 28.分布锁有哪些解决方案")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.redis的分布式锁，setnx，Redisson\n2.基于zookeeper，顺序临时节点\n3.基于数据库，比如Mysql，主键或唯一索引的唯一性\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_29-cap定理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_29-cap定理"}},[s._v("#")]),s._v(" 29.cap定理")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("c：一致性\na:可用性\np:分区容错性\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);