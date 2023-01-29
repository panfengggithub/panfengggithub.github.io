(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{506:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-mybatis-的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mybatis-的优缺点"}},[s._v("#")]),s._v(" "),a("strong",[s._v("1.mybatis****的优缺点")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("优点：\n1、基于 SQL 语句编程，相当灵活，不会对应用程序或者数据库的现有设计造成任何影响，SQL 写在\nXML 里，解除 sql 与程序代码的耦合，便于统一管理；提供 XML 标签， 支持编写动态 SQL 语句， 并\n可重用。\n 2、与 JDBC 相比，减少了 50%以上的代码量，消除了 JDBC 大量冗余的代码，不需要手动开关连接；\n 3、很好的与各种数据库兼容（ 因为 MyBatis 使用 JDBC 来连接数据库，所以只要JDBC 支持的数据库\nMyBatis 都支持）。\n 4、能够与 Spring 很好的集成；\n 5、提供映射标签， 支持对象与数据库的 ORM 字段关系映射； 提供对象关系映射标签， 支持对象关\n系组件维护。\n缺点：\n 1、SQL 语句的编写工作量较大， 尤其当字段多、关联表多时， 对开发人员编写SQL 语句的功底有一\n定要求。\n 2、SQL 语句依赖于数据库， 导致数据库移植性差， 不能随意更换数据库。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"_2-mybatis-与-hibernate-有哪些不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mybatis-与-hibernate-有哪些不同"}},[s._v("#")]),s._v(" "),a("strong",[s._v("2.MyBatis")]),s._v(" "),a("strong",[s._v("与****Hibernate")]),s._v(" "),a("strong",[s._v("有哪些不同？")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("开发速度的对比：\nHibernate的真正掌握要比Mybatis难些。Mybatis框架相对简单很容易上手，但也相对简陋些。\n比起两者的开发速度，不仅仅要考虑到两者的特性及性能，更要根据项目需求去考虑究竟哪一个更适合\n项目开发，比如：一个项目中用到的复杂查询基本没有，就是简单的增删改查，这样选择hibernate效\n率就很快了，因为基本的sql语句已经被封装好了，根本不需要你去写sql语句，这就节省了大量的时\n间，但是对于一个大型项目，复杂语句较多，这样再去选择hibernate就不是一个太好的选择，选择\nmybatis就会加快许多，而且语句的管理也比较方便。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_3-和-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-和-的区别是什么"}},[s._v("#")]),s._v(" 3.**#{}"),a("strong",[a("strong",[s._v("和")])]),s._v("${}**"),a("strong",[s._v("的区别是什么？")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" #{}是预编译处理、是占位符， ${}是字符串替换、是拼接符。\nMybatis 在处理#{}时，会将 sql 中的#{}替换为?号，调用 PreparedStatement 来赋值；\nMybatis 在处理${}时， 就是把${}替换成变量的值，调用 Statement 来赋值；\n#{} 的变量替换是在DBMS 中、变量替换后，#{} 对应的变量自动加上单引号\n${} 的变量替换是在 DBMS 外、变量替换后，${} 对应的变量不会加上单引号\n使用#{}可以有效的防止 SQL 注入， 提高系统安全性\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_4-mybatis-的插件运行原理-如何编写一个插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-mybatis-的插件运行原理-如何编写一个插件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("4.Mybatis")]),s._v(" "),a("strong",[s._v("的插件运行原理，如何编写一个插件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Mybatis 只支持针对 ParameterHandler、ResultSetHandler、StatementHandler、Executor 这\n4 种接口的插件， Mybatis 使用 JDK 的动态代理， 为需要拦截的接口生成代理对象以实现接口方法拦\n截功能， 每当执行这 4 种接口对象的方法时，就会进入拦截方法，具体就是 InvocationHandler 的\ninvoke() 方法， 拦截那些你指定需要拦截的方法。\n编写插件： 实现 Mybatis 的 Interceptor 接口并复写 intercept()方法， 然后在给插件编写注解， 指定\n要拦截哪一个接口的哪些方法即可， 在配置文件中配置编写的插件。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Intercepts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Signature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StatementHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Statement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResultHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Signature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StatementHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Statement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Signature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StatementHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"batch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Statement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\ninvocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("proceed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("执行具体的业务逻辑\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);