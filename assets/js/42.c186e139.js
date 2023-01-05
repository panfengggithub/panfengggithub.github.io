(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{456:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jdk9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk9"}},[t._v("#")]),t._v(" "),s("strong",[t._v("jdk9+")])]),t._v(" "),s("h2",{attrs:{id:"jdk9-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk9-2"}},[t._v("#")]),t._v(" jdk9")]),t._v(" "),s("p",[t._v("collection新增of（）方法，快速创建不可变集合(只读集合),修改会报错不支持的操作")]),t._v(" "),s("h3",{attrs:{id:"模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),s("p",[t._v("解决的问题：")]),t._v(" "),s("p",[t._v("1、jdk（rt.jar）的臃肿问题，搜索类需要搜索的范围太大")]),t._v(" "),s("p",[t._v("2、权限修饰符不能修饰包路径（public、private等），无法隐藏包（只要导入jar包，所有的包都可用）")]),t._v(" "),s("p",[t._v("解决内存开销，提升效率")]),t._v(" "),s("p",[t._v("强封装，外部模块无法使用内部类型")]),t._v(" "),s("p",[t._v("module-info.java放在根目录下（src/main/java）")]),t._v(" "),s("p",[t._v("内容：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("luban"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("luban"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("可以被访问的包通过export导出。")]),t._v(" "),s("p",[t._v("使用此jar包需要添加依赖，同时需要module-info.java")]),t._v(" "),s("p",[t._v("内容：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleUtil1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("requires")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("通过requires导入需要用到的module")]),t._v(" "),s("h3",{attrs:{id:"jshell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jshell"}},[t._v("#")]),t._v(" Jshell")]),t._v(" "),s("p",[t._v("交互式编程，即在命令行写代码比之前方便，实际用处并不大，类似javascript的console脚本，python脚本等")]),t._v(" "),s("h3",{attrs:{id:"接口方法私有化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口方法私有化"}},[t._v("#")]),t._v(" 接口方法私有化")]),t._v(" "),s("p",[t._v("解决接口中默认方法和静态方法的代码重复问题，默认和静态方法都有方法体，只能在接口内部能调用，实现类不可以调")]),t._v(" "),s("p",[t._v("跟正常的private使用一致")]),t._v(" "),s("h3",{attrs:{id:"资源释放代码优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源释放代码优化"}},[t._v("#")]),t._v(" 资源释放代码优化")]),t._v(" "),s("p",[t._v("Jdk8可以把IO流的创建放在try后面，try（IO io = new IO（）），不需要在finally里面释放流,初始化资源的语句必须在try语句中")]),t._v(" "),s("p",[t._v("Jdk9在上面的基础上，可以把 IO io = new IO（）放在外面，try（io），也不需要手动释放")]),t._v(" "),s("p",[t._v("Jdk9下划线_不能在单独作为变量名出现")]),t._v(" "),s("h3",{attrs:{id:"string底层结构的变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string底层结构的变化"}},[t._v("#")]),t._v(" String底层结构的变化")]),t._v(" "),s("p",[t._v("Jdk8是char数组，jdk9改为byte数组，更加节省内存")]),t._v(" "),s("p",[t._v("Stringbuufer和String")]),t._v(" "),s("h3",{attrs:{id:"stream新增api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stream新增api"}},[t._v("#")]),t._v(" Stream新增api")]),t._v(" "),s("p",[t._v("takeWhile：获取满足条件的元素，直到遇到第一个不满足条件的元素停止")]),t._v(" "),s("p",[t._v("dropWhile：删除满足条件的元素，直到遇到第一个不满足条件的元素停止")]),t._v(" "),s("p",[t._v("ofNullable：jdk8流中不能完全为null，否则会报空指针，jdk9允许")]),t._v(" "),s("h3",{attrs:{id:"动态编译器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态编译器"}},[t._v("#")]),t._v(" 动态编译器")]),t._v(" "),s("p",[t._v("增量编译")]),t._v(" "),s("p",[t._v("并行编译")]),t._v(" "),s("h2",{attrs:{id:"jdk10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk10"}},[t._v("#")]),t._v(" jdk10")]),t._v(" "),s("p",[t._v("局部变量类型推断：var是保留字，不是关键字")]),t._v(" "),s("p",[t._v("var num = 1;")]),t._v(" "),s("p",[t._v('var str = "abc";')]),t._v(" "),s("p",[t._v("var list = new ArrayList();")]),t._v(" "),s("p",[t._v("依然是强类型，语法糖，编译后会替换成真正的类型")]),t._v(" "),s("p",[t._v("使用场景：")]),t._v(" "),s("p",[t._v("局部变量")]),t._v(" "),s("p",[t._v("循环变量")]),t._v(" "),s("p",[t._v("不能使用的场景：")]),t._v(" "),s("p",[t._v("成员变量")]),t._v(" "),s("p",[t._v("方法参数")]),t._v(" "),s("p",[t._v("返回值")]),t._v(" "),s("p",[t._v("不能同时定义多个变量，定义的同时必须立马赋值。")]),t._v(" "),s("p",[t._v("jdk代码仓库合并，jdk9之前的代码是放在多个仓库中的，不利于管理。Jdk10将代码仓库合并")]),t._v(" "),s("p",[t._v("新增垃圾回收器接口：jdk9之前垃圾回收器的代码是分散的，移除一个垃圾回收器很不方便。Jdk10提供了垃圾回收器接口，方便新增和移除垃圾回收器，代码模块化")]),t._v(" "),s("p",[t._v("G1引入并行FULL GC，截止到jdk9，G1回收器采用单线程的算法，full gc时会影响性能，Jdk10引入并行回收算法，解决fullgc的问题")]),t._v(" "),s("p",[t._v("应用程序类共享，一台机器上运行多个jvm时，共享的rt.jar会变成共享的存档，减少内存占用以及启动时间")]),t._v(" "),s("p",[t._v("线程本地握手：")]),t._v(" "),s("p",[t._v("jvm在做一些安全级别很高的动作时会要求所有线程都找到一个点（safepoint）停止运行，比如")]),t._v(" "),s("p",[t._v("垃圾清理暂停，类的热更新，偏向锁的取消，各种debug操作")]),t._v(" "),s("p",[t._v("Jdk10优化了这一点，不用停掉所有线程，修改了安全点机制，使得部分操作只用停掉单个线程而不是所有")]),t._v(" "),s("h2",{attrs:{id:"jdk11"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk11"}},[t._v("#")]),t._v(" jdk11")]),t._v(" "),s("p",[s("strong",[t._v("java.net.http.HttpClient")]),t._v(" 正式启用")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//同步调用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClient")]),t._v(" client       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newHttpClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")]),t._v(" request      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BodyHandler")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BodyHandlers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" body          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//异步调用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutionException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClient")]),t._v(" client       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newHttpClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")]),t._v(" request      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BodyHandler")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BodyHandlers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpResponse")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" result  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" body          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("p",[t._v("移除Pack200(jdk5),压缩率很高，因为jdk9的模块化以及网速的提升，不再需要")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("压缩\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Packer")]),t._v(" packer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pack200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newPacker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OutputStream")]),t._v(" output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferedOutputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileOutputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npacker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JarFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jarFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n解压\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unpacker")]),t._v(" unpacker"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pack200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newUnpacker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JarOutputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileOutputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jarFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nunpacker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unpack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pack200File"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("ZGC, 这应该是JDK11最为瞩目的特性, 没有之一. 但是后面带了Experimental, 说明这还不建议用到生产环境。   GC暂停时间不会超过10ms，既能处理几百兆的小堆, 也能处理几个T的大堆(OMG)，和G1相比, 应用吞吐能力不会下降超过15%，为未来的GC功能和利用colord指针以及Load barriers优化奠定基础，初始只支持64位linux系统   ZGC的设计目标是：支持TB级内存容量，暂停时间低（<10ms），对整个程序吞吐量的影响小于15%。 将来还可以扩展实现机制，以支持不少令人兴奋的功能，例如多层堆（即热对象置于DRAM和冷对象置于NVMe闪存），或压缩堆。   GC是java主要优势之一，当GC停顿太长, 就会开始影响应用的响应时间.消除或者减少GC停顿时长, java将对更广泛的应用场景是一个更有吸引力的平台. 此外, 现代系统中可用内存不断增长,用户和程序员希望JVM能够以高效的方式充分利用这些内存, 并且无需长时间的GC暂停时间")]),t._v(" "),s("p",[t._v("用法 : -XX:+UnlockExperimentalVMOptions –XX:+UseZGC, 因为ZGC还处于实验阶段, 所以需要通过JVM参数来解锁这个特性")]),t._v(" "),s("h3",{attrs:{id:"完全支持linux容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完全支持linux容器"}},[t._v("#")]),t._v(" 完全支持Linux容器")]),t._v(" "),s("p",[t._v("在Docker容器中运行Java应用程序一直存在一个问题，那就是在容器中运行JVM程序在设置内存大小和CPU使用率后，会导致应用程序的性能下降。这是因为Java应用程序没有意识到它正在容器中运行。随着Java 10的发布，这个问题总算得以解决，JVM现在可以识别由容器控制组（cgroups）设置的约束。可以在容器中使用内存和CPU约束来直接管理Java应用程序，其中包括：")]),t._v(" "),s("p",[t._v("遵守容器中设置的内存限制")]),t._v(" "),s("p",[t._v("在容器中设置可用的CPU")]),t._v(" "),s("p",[t._v("在容器中设置CPU约束")]),t._v(" "),s("p",[t._v("Java 10的这个改进在Docker for Mac、Docker for Windows以及Docker Enterprise Edition等环境均有效。")]),t._v(" "),s("p",[t._v("容器的内存限制")]),t._v(" "),s("p",[t._v("在Java 9之前，JVM无法识别容器使用标志设置的内存限制和CPU限制。而在Java 10中，内存限制会自动被识别并强制执行。Java将服务器类机定义为具有2个CPU和2GB内存，以及默认堆大小为物理内存的1/4。")]),t._v(" "),s("h3",{attrs:{id:"java-flight-recorder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-flight-recorder"}},[t._v("#")]),t._v(" Java Flight Recorder")]),t._v(" "),s("p",[t._v("一个低开销的数据收集框架，可用于在生产环境中分析Java应用和JVM运行状况及性能问题。")]),t._v(" "),s("h2",{attrs:{id:"jdk12"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk12"}},[t._v("#")]),t._v(" jdk12")]),t._v(" "),s("h3",{attrs:{id:"解决switch贯穿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决switch贯穿"}},[t._v("#")]),t._v(" 解决switch贯穿")]),t._v(" "),s("p",[t._v("如果case后面没写break，会导致程序执行出错（jdk11会提示警告）")]),t._v(" "),s("p",[t._v("Jdk12用->代替：可以不用写break")]),t._v(" "),s("p",[t._v("整个switch语句可以作为一个变量赋值")]),t._v(" "),s("p",[t._v("case支持多值匹配，逗号隔开")]),t._v(" "),s("h3",{attrs:{id:"微基准测试套件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微基准测试套件"}},[t._v("#")]),t._v(" 微基准测试套件")]),t._v(" "),s("p",[t._v("可以测试某个方法的执行时间，及执行时间与输入参数N的关系")]),t._v(" "),s("p",[t._v("还可以对比一个接口的不同实现类的性能对比")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openjdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jmh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("artifactId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dependency"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openjdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jmh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("generator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("annprocess"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("artifactId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("provided"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dependency"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("@BenchmarkMode(Mode."),s("em",[t._v("Throughput")]),t._v(")//吞吐量")]),t._v(" "),s("p",[t._v("@OutputTimeUnit(TimeUnit."),s("em",[t._v("MILLISECONDS")]),t._v(")//结果所使用的时间单位")]),t._v(" "),s("p",[t._v("@State(Scope."),s("em",[t._v("Thread")]),t._v(")//每个测试线程分配一个实例")]),t._v(" "),s("p",[t._v("@Fork(2)//Fork进行的数目")]),t._v(" "),s("p",[t._v("@Warmup(iterations=4)//先预热4轮")]),t._v(" "),s("p",[t._v("@Measurement(iterations=10)//进行10轮测试")]),t._v(" "),s("p",[t._v('@Param({"10","40","70","100"})')]),t._v(" "),s("p",[t._v("@Setup(Level."),s("em",[t._v("Trial")]),t._v(")")]),t._v(" "),s("p",[t._v("@TearDown(Level."),s("em",[t._v("Trial")]),t._v(")")]),t._v(" "),s("p",[s("strong",[t._v("基本参数概念")])]),t._v(" "),s("p",[s("strong",[t._v("@BenchmarkMode")])]),t._v(" "),s("p",[t._v("Mode 表示 JMH 进行 Benchmark 时所使用的模式。通常是测量的维度不同，或是测量的方式不同。目前 JMH 共有四种模式：")]),t._v(" "),s("ol",[s("li",[t._v("Throughput:     整体吞吐量，例如“1秒内可以执行多少次调用”，单位是操作数/时间。")]),t._v(" "),s("li",[t._v("AverageTime:     调用的平均时间，例如“每次调用平均耗时xxx毫秒”，单位是时间/操作数。")]),t._v(" "),s("li",[t._v("SampleTime:     随机取样，最后输出取样结果的分布，例如“99%的调用在xxx毫秒以内，99.99%的调用在xxx毫秒以内”")]),t._v(" "),s("li",[t._v("SingleShotTime: 以上模式都是默认一次 iteration 是     1s，唯有 SingleShotTime 是只运行一次。往往同时把 warmup 次数设为0，用于测试冷启动时的性能。")])]),t._v(" "),s("p",[s("strong",[t._v("@OutputTimeUnit")])]),t._v(" "),s("p",[t._v("输出的时间单位。")]),t._v(" "),s("p",[s("strong",[t._v("@Iteration")])]),t._v(" "),s("p",[t._v("Iteration 是 JMH 进行测试的最小单位。在大部分模式下，一次 iteration 代表的是一秒，JMH 会在这一秒内不断调用需要 Benchmark 的方法，然后根据模式对其采样，计算吞吐量，计算平均执行时间等。")]),t._v(" "),s("p",[s("strong",[t._v("@WarmUp")])]),t._v(" "),s("p",[t._v("Warmup 是指在实际进行 Benchmark 前先进行预热的行为。")]),t._v(" "),s("p",[t._v("为什么需要预热？因为 JVM 的 JIT 机制的存在，如果某个函数被调用多次之后，JVM 会尝试将其编译成为机器码从而提高执行速度。为了让 Benchmark 的结果更加接近真实情况就需要进行预热。")]),t._v(" "),s("p",[s("strong",[t._v("@State")])]),t._v(" "),s("p",[t._v("类注解，JMH测试类必须使用 @State 注解，它定义了一个类实例的生命周期，可以类比 Spring Bean 的 Scope。由于 JMH 允许多线程同时执行测试，不同的选项含义如下：")]),t._v(" "),s("ol",[s("li",[t._v("Scope.Thread：默认的     State，每个测试线程分配一个实例；")]),t._v(" "),s("li",[t._v("Scope.Benchmark：所有测试线程共享一个实例，用于测试有状态实例在多线程共享下的性能；")]),t._v(" "),s("li",[t._v("Scope.Group：每个线程组共享一个实例；")])]),t._v(" "),s("p",[s("strong",[t._v("@Fork")])]),t._v(" "),s("p",[t._v("进行 fork 的次数。如果 fork 数是2的话，则 JMH 会 fork 出两个进程来进行测试。")]),t._v(" "),s("p",[s("strong",[t._v("@Meansurement")])]),t._v(" "),s("p",[t._v("提供真正的测试阶段参数。指定迭代的次数，每次迭代的运行时间和每次迭代测试调用的数量(通常使用 @BenchmarkMode(Mode.SingleShotTime) 测试一组操作的开销——而不使用循环)")]),t._v(" "),s("p",[s("strong",[t._v("@Setup")])]),t._v(" "),s("p",[t._v("方法注解，会在执行 benchmark 之前被执行，正如其名，主要用于初始化。")]),t._v(" "),s("p",[s("strong",[t._v("@TearDown")])]),t._v(" "),s("p",[t._v("方法注解，与@Setup 相对的，会在所有 benchmark 执行结束以后执行，主要用于资源的回收等。")]),t._v(" "),s("p",[t._v("@Setup/@TearDown注解使用Level参数来指定何时调用fixture：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("名称")])]),t._v(" "),s("th",[s("strong",[t._v("描述")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Level.Trial")]),t._v(" "),s("td",[t._v("默认level。全部benchmark运行(一组迭代)之前/之后")])]),t._v(" "),s("tr",[s("td",[t._v("Level.Iteration")]),t._v(" "),s("td",[t._v("一次迭代之前/之后(一组调用)")])]),t._v(" "),s("tr",[s("td",[t._v("Level.Invocation")]),t._v(" "),s("td",[t._v("每个方法调用之前/之后(不推荐使用，除非你清楚这样做的目的)")])])])]),t._v(" "),s("p",[s("strong",[t._v("@Benchmark")])]),t._v(" "),s("p",[t._v("方法注解，表示该方法是需要进行 benchmark 的对象。")]),t._v(" "),s("p",[s("strong",[t._v("@Param")])]),t._v(" "),s("p",[t._v("成员注解，可以用来指定某项参数的多种情况。特别适合用来测试一个函数在不同的参数输入的情况下的性能。@Param 注解接收一个String数组，在 @Setup 方法执行前转化为为对应的数据类型。多个 @Param 注解的成员之间是乘积关系，譬如有两个用 @Param 注解的字段，第一个有5个值，第二个字段有2个值，那么每个测试方法会跑5*2=10次。")]),t._v(" "),s("h2",{attrs:{id:"jdk13"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk13"}},[t._v("#")]),t._v(" jdk13")]),t._v(" "),s("h3",{attrs:{id:"文本块升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本块升级"}},[t._v("#")]),t._v(" 文本块升级：")]),t._v(" "),s("p",[t._v("Jdk13前：")]),t._v(" "),s("p",[t._v('String html = "')]),s("html",[t._v('\\n" +'),s("p"),t._v(" "),s("p",[t._v('​        "  ')]),s("body",[t._v('\\n" +'),s("p"),t._v(" "),s("p",[t._v('​        "    ')]),s("p",[t._v("Hello, world")]),t._v('\\n" +'),s("p"),t._v(" "),s("p",[t._v('​        "  ')])]),t._v('\\n" +'),s("p"),t._v(" "),s("p",[t._v('​        "')])]),t._v('\\n";'),s("p"),t._v(" "),s("p",[t._v('String query = "SELECT '),s("code",[t._v("EMP_ID")]),t._v(", "),s("code",[t._v("LAST_NAME")]),t._v(" FROM "),s("code",[t._v("EMPLOYEE_TB")]),t._v('\\n" +')]),t._v(" "),s("p",[t._v('​        "WHERE '),s("code",[t._v("CITY")]),t._v(" = 'INDIANAPOLIS'\\n\" +")]),t._v(" "),s("p",[t._v('​        "ORDER BY '),s("code",[t._v("EMP_ID")]),t._v(", "),s("code",[t._v("LAST_NAME")]),t._v(';\\n";')]),t._v(" "),s("p",[t._v('"line 1\\nline 2\\nline 3\\n"')]),t._v(" "),s("p",[t._v("Jdk13：")]),t._v(" "),s("p",[t._v("String html =")]),t._v(" "),s("p",[t._v('"""')]),t._v(" "),s("html",[s("body",[s("p",[t._v("Hello, world")])])]),t._v(" "),s("p",[t._v('​    """;')]),t._v(" "),s("p",[t._v('String query = """')]),t._v(" "),s("p",[t._v("​        SELECT "),s("code",[t._v("EMP_ID")]),t._v(", "),s("code",[t._v("LAST_NAME")]),t._v(" FROM "),s("code",[t._v("EMPLOYEE_TB")])]),t._v(" "),s("p",[t._v("​         WHERE "),s("code",[t._v("CITY")]),t._v(" = 'INDIANAPOLIS'")]),t._v(" "),s("p",[t._v("​         ORDER BY "),s("code",[t._v("EMP_ID")]),t._v(", "),s("code",[t._v("LAST_NAME")]),t._v(";")]),t._v(" "),s("p",[t._v('​       """;')]),t._v(" "),s("p",[t._v('"""')]),t._v(" "),s("p",[t._v("line 1")]),t._v(" "),s("p",[t._v("line 2")]),t._v(" "),s("p",[t._v("line 3")]),t._v(" "),s("p",[t._v('"""')])])}),[],!1,null,null,null);s.default=e.exports}}]);