(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{493:function(a,t,v){"use strict";v.r(t);var s=v(1),_=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java-基础面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-基础面试题"}},[a._v("#")]),a._v(" Java 基础面试题")]),a._v(" "),t("h2",{attrs:{id:"java概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java概述"}},[a._v("#")]),a._v(" Java概述")]),a._v(" "),t("h3",{attrs:{id:"java语言有哪些特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java语言有哪些特点"}},[a._v("#")]),a._v(" Java语言有哪些特点？")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("面向对象（封装，继承，多态）；")])]),a._v(" "),t("li",[t("p",[a._v("平台无关性，平台无关性的具体表现在于，Java 是“一次编写，到处运行（Write Once，Run any Where）”的语言，因此采用 Java 语言编写的程序具有很好的可移植性，而保证这一点的正是 Java 的虚拟机机制。在引入虚拟机之后，Java 语言在不同的平台上运行不需要重新编译。")])]),a._v(" "),t("li",[t("p",[a._v("可靠性、安全性；")])]),a._v(" "),t("li",[t("p",[a._v("支持多线程。C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持；")])]),a._v(" "),t("li",[t("p",[a._v("支持网络编程并且很方便。Java 语言诞生本身就是为简化网络编程设计的，因此 Java 语言不仅支持网络编程而且很方便；")])]),a._v(" "),t("li",[t("p",[a._v("编译与解释并存；")])])]),a._v(" "),t("h3",{attrs:{id:"java和c-有什么关系-它们有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java和c-有什么关系-它们有什么区别"}},[a._v("#")]),a._v(" Java和C++有什么关系，它们有什么区别？")]),a._v(" "),t("ul",[t("li",[a._v("都是面向对象的语言，都支持封装、继承和多态；")]),a._v(" "),t("li",[a._v("C++ 支持指针，而 Java 没有指针的概念；")]),a._v(" "),t("li",[a._v("C++ 支持多继承，而 Java 不支持多重继承，但允许一个类实现多个接口；")]),a._v(" "),t("li",[a._v("Java 是完全面向对象的语言，并且还取消了 C/C++ 中的结构和联合，使编译程序更加简洁；")]),a._v(" "),t("li",[a._v("Java 自动进行无用内存回收操作，不再需要程序员进行手动删除，而 C++ 中必须由程序释放内存资源，这就增加了程序员的负担。")]),a._v(" "),t("li",[a._v("Java 不支持操作符重载，操作符重载则被认为是 C++ 的突出特征；")]),a._v(" "),t("li",[a._v("Java 允许预处理，但不支持预处理器功能，所以为了实现预处理，它提供了引入语句（import），但它与 C++ 预处理器的功能类似；")]),a._v(" "),t("li",[a._v("Java 不支持缺省参数函数，而 C++ 支持；")]),a._v(" "),t("li",[a._v("C 和 C++ 不支持字符串变量，在 C 和 C++ 程序中使用“Null”终止符代表字符串的结束。在 Java 中字符串是用类对象（String 和 StringBuffer）来实现的；")]),a._v(" "),t("li",[a._v("goto 语句是 C 和 C++ 的“遗物”，Java 不提供 goto 语句，虽然 Java 指定 goto 作为关键字，但不支持它的使用，这使程序更简洁易读；")]),a._v(" "),t("li",[a._v("Java 不支持 C++ 中的自动强制类型转换，如果需要，必须由程序显式进行强制类型转换。")])]),a._v(" "),t("h3",{attrs:{id:"jvm、jre和jdk的关系是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm、jre和jdk的关系是什么"}},[a._v("#")]),a._v(" JVM、JRE和JDK的关系是什么？")]),a._v(" "),t("p",[a._v("JDK是（Java Development Kit）的缩写，它是功能齐全的 Java SDK。它拥有 JRE 所拥有的一切，还有编译器（javac）和工具（如 javadoc 和 jdb）。它能够创建和编译程序。")]),a._v(" "),t("p",[a._v("JRE是Java Runtime Environment缩写，它是运行已编译 Java 程序所需的所有内容的集合，包括 Java 虚拟机（JVM），Java 类库，java 命令和其他的一些基础构件。但是，它不能用于创建新程序。")]),a._v(" "),t("p",[a._v("JDK包含JRE，JRE包含JVM。")]),a._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://blog-img.coolsen.cn/img/image-20210219163725268.png",alt:"image-20210219163725268"}}),a._v(" "),t("h3",{attrs:{id:"什么是字节码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是字节码"}},[a._v("#")]),a._v(" "),t("strong",[a._v("什么是字节码?")])]),a._v(" "),t("blockquote",[t("p",[a._v("这个问题，面试官可以扩展提问，Java 是编译执行的语言，还是解释执行的语言?")])]),a._v(" "),t("p",[a._v("Java之所以可以“一次编译，到处运行”，一是因为JVM针对各种操作系统、平台都进行了定制，二是因为无论在什么平台，都可以编译生成固定格式的字节码（.class文件）供JVM使用。因此，也可以看出字节码对于Java生态的重要性。")]),a._v(" "),t("p",[a._v("之所以被称之为字节码，是因为字节码文件由十六进制值组成，而JVM以两个十六进制值为一组，即以字节为单位进行读取。在Java中一般是用javac命令编译源代码为字节码文件，一个.java文件从编译到运行的示例如图所示。")]),a._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://blog-img.coolsen.cn/img/image-20210219165630888.png",alt:"image-20210219165630888"}}),a._v(" "),t("h3",{attrs:{id:"采用字节码的好处是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#采用字节码的好处是什么"}},[a._v("#")]),a._v(" 采用字节码的好处是什么?")]),a._v(" "),t("p",[a._v("Java语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以Java程序运行时比较高效，而且，由于字节码并不专对一种特定的机器，因此，Java程序无须重新编译便可在多种不同的计算机上运行。")]),a._v(" "),t("h3",{attrs:{id:"oracle-jdk-和-openjdk-的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle-jdk-和-openjdk-的区别是什么"}},[a._v("#")]),a._v(" Oracle JDK 和 OpenJDK 的区别是什么？")]),a._v(" "),t("p",[a._v("可能在看这个问题之前很多人和我一样并没有接触和使用过 OpenJDK 。下面通过我通过我收集到一些资料对你解答这个被很多人忽视的问题。")]),a._v(" "),t("ul",[t("li",[a._v("Oracle JDK 版本将每三年发布一次，而 OpenJDK 版本每三个月发布一次；")]),a._v(" "),t("li",[a._v("OpenJDK 是一个参考模型并且是完全开源的，而 Oracle JDK 是OpenJDK 的一个实现，并不是完全开源的；")]),a._v(" "),t("li",[a._v("Oracle JDK 比 OpenJDK 更稳定。OpenJDK 和 Oracle JDK 的代码几乎相同，但 Oracle JDK 有更多的类和一些错误修复。因此，如果您想开发企业/商业软件，建议选择 Oracle JDK，因为它经过了彻底的测试和稳定。某些情况下，有些人提到在使用 OpenJDK 可能会遇到了许多应用程序崩溃的问题，但是，只需切换到 Oracle JDK 就可以解决问题；")]),a._v(" "),t("li",[a._v("在响应性和 JVM 性能方面，Oracle JDK 与 OpenJDK 相比提供了更好的性能；")]),a._v(" "),t("li",[a._v("Oracle JDK 不会为即将发布的版本提供长期支持，用户每次都必须通过更新到最新版本获得支持来获取最新版本；")]),a._v(" "),t("li",[a._v("Oracle JDK 根据二进制代码许可协议获得许可，而 OpenJDK 根据 GPLv2 许可获得许可。")])]),a._v(" "),t("h2",{attrs:{id:"基础语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础语法"}},[a._v("#")]),a._v(" 基础语法")]),a._v(" "),t("h3",{attrs:{id:"java有哪些数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java有哪些数据类型"}},[a._v("#")]),a._v(" Java有哪些数据类型？")]),a._v(" "),t("p",[a._v("Java 语言的数据类型分为两种：基本数据类型和引用数据类型。")]),a._v(" "),t("img",{attrs:{src:"http://blog-img.coolsen.cn/img/image-20210219172725756.png",alt:"image-20210219172725756"}}),a._v(" "),t("p",[a._v("1.基本数据类型包括 boolean（布尔型）、float（单精度浮点型）、char（字符型）、byte（字节型）、short（短整型）、int（整型）、long（长整型）和 double （双精度浮点型）共 8 种，如下表所示。")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("基本类型")]),a._v(" "),t("th",[a._v("位数")]),a._v(" "),t("th",[a._v("字节")]),a._v(" "),t("th",[a._v("默认值")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("int")]),a._v(" "),t("td",[a._v("32")]),a._v(" "),t("td",[a._v("4")]),a._v(" "),t("td",[a._v("0")])]),a._v(" "),t("tr",[t("td",[a._v("short")]),a._v(" "),t("td",[a._v("16")]),a._v(" "),t("td",[a._v("2")]),a._v(" "),t("td",[a._v("0")])]),a._v(" "),t("tr",[t("td",[a._v("long")]),a._v(" "),t("td",[a._v("64")]),a._v(" "),t("td",[a._v("8")]),a._v(" "),t("td",[a._v("0L")])]),a._v(" "),t("tr",[t("td",[a._v("byte")]),a._v(" "),t("td",[a._v("8")]),a._v(" "),t("td",[a._v("1")]),a._v(" "),t("td",[a._v("0")])]),a._v(" "),t("tr",[t("td",[a._v("char")]),a._v(" "),t("td",[a._v("16")]),a._v(" "),t("td",[a._v("2")]),a._v(" "),t("td",[a._v("'u0000'")])]),a._v(" "),t("tr",[t("td",[a._v("float")]),a._v(" "),t("td",[a._v("32")]),a._v(" "),t("td",[a._v("4")]),a._v(" "),t("td",[a._v("0f")])]),a._v(" "),t("tr",[t("td",[a._v("double")]),a._v(" "),t("td",[a._v("64")]),a._v(" "),t("td",[a._v("8")]),a._v(" "),t("td",[a._v("0d")])]),a._v(" "),t("tr",[t("td",[a._v("boolean")]),a._v(" "),t("td",[a._v("1")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("false")])])])]),a._v(" "),t("p",[a._v("对于 boolean，官方文档未明确定义，它依赖于 JVM 厂商的具体实现。逻辑上理解是占用 1 位，但是实际中会考虑计算机高效存储因素。")]),a._v(" "),t("p",[a._v("Java虚拟机规范讲到：在JVM中并没有提供boolean专用的字节码指令，而boolean类型数据在经过编译后在JVM中会通过int类型来表示，此时boolean数据4字节32位，而boolean数组将会被编码成Java虚拟机的byte数组，此时每个boolean数据1字节占8bit。")]),a._v(" "),t("p",[a._v("注意：")]),a._v(" "),t("ol",[t("li",[a._v("Java 里使用 long 类型的数据一定要在数值后面加上 "),t("strong",[a._v("L")]),a._v("，否则将作为整型解析：")]),a._v(" "),t("li",[t("code",[a._v("char a = 'h'")]),a._v("char :单引号，"),t("code",[a._v('String a = "hello"')]),a._v(" :双引号")])]),a._v(" "),t("p",[a._v("2.引用数据类型建立在基本数据类型的基础上，包括数组、类和接口。引用数据类型是由用户自定义，用来限制其他数据的类型。另外，Java 语言中不支持 C++中的指针类型、结构类型、联合类型和枚举类型。")]),a._v(" "),t("h3",{attrs:{id:"switch-是否能作用在-byte-上-是否能作用在-long-上-是否能作用在-string-上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switch-是否能作用在-byte-上-是否能作用在-long-上-是否能作用在-string-上"}},[a._v("#")]),a._v(" switch 是否能作用在 byte 上，是否能作用在 long 上，是否能作用在 String 上？")]),a._v(" "),t("p",[a._v("Java5 以前 switch(expr)中，expr 只能是 byte、short、char、int。")]),a._v(" "),t("p",[a._v("从 Java 5 开始，Java 中引入了枚举类型， expr 也可以是 enum 类型。")]),a._v(" "),t("p",[a._v("从 Java 7 开始，expr还可以是字符串(String)，但是长整型(long)在目前所有的版本中都是不可以的。")]),a._v(" "),t("h3",{attrs:{id:"访问修饰符public、private、protected、以及不写-默认-时的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问修饰符public、private、protected、以及不写-默认-时的区别"}},[a._v("#")]),a._v(" "),t("strong",[a._v("访问修饰符public、private、protected、以及不写（默认）时的区别")]),a._v("？")]),a._v(" "),t("p",[a._v("Java中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。Java 支持 4 种不同的访问权限。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("default")]),a._v(" (即默认，什么也不写）: 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。")]),a._v(" "),t("li",[t("strong",[a._v("private")]),a._v(" : 在同一类内可见。使用对象：变量、方法。 "),t("strong",[a._v("注意：不能修饰类（外部类）")])]),a._v(" "),t("li",[t("strong",[a._v("public")]),a._v(" : 对所有类可见。使用对象：类、接口、变量、方法")]),a._v(" "),t("li",[t("strong",[a._v("protected")]),a._v(" : 对同一包内的类和所有子类可见。使用对象：变量、方法。 "),t("strong",[a._v("注意：不能修饰类（外部类）")]),a._v("。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"http://blog-img.coolsen.cn/img/image-20210219173433142.png",alt:"image-20210219173433142"}})]),a._v(" "),t("h3",{attrs:{id:"break-continue-return-的区别及作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#break-continue-return-的区别及作用"}},[a._v("#")]),a._v(" break ,continue ,return 的区别及作用？")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("break 跳出总上一层循环，不再执行循环("),t("strong",[a._v("结束当前的循环体")]),a._v(")")])]),a._v(" "),t("li",[t("p",[a._v("continue 跳出本次循环，继续执行下次循环("),t("strong",[a._v("结束正在执行的循环 进入下一个循环条件")]),a._v(")")])]),a._v(" "),t("li",[t("p",[a._v("return 程序返回，不再执行下面的代码("),t("strong",[a._v("结束当前的方法 直接返回")]),a._v(")")])])]),a._v(" "),t("h2",{attrs:{id:"关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[a._v("#")]),a._v(" 关键字")]),a._v(" "),t("h3",{attrs:{id:"final、finally、finalize的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#final、finally、finalize的区别"}},[a._v("#")]),a._v(" final、finally、finalize的区别？")]),a._v(" "),t("p",[a._v("final 用于修饰变量、方法和类。")]),a._v(" "),t("ul",[t("li",[a._v("final 变量：被修饰的变量不可变，不可变分为"),t("code",[a._v("引用不可变")]),a._v("和"),t("code",[a._v("对象不可变")]),a._v("，final 指的是"),t("code",[a._v("引用不可变")]),a._v("，final 修饰的变量必须初始化，通常称被修饰的变量为"),t("code",[a._v("常量")]),a._v("。")]),a._v(" "),t("li",[a._v("final 方法：被修饰的方法不允许任何子类重写，子类可以使用该方法。")]),a._v(" "),t("li",[a._v("final 类：被修饰的类不能被继承，所有方法不能被重写。")])]),a._v(" "),t("p",[a._v("finally 作为异常处理的一部分，它只能在 "),t("code",[a._v("try/catch")]),a._v(" 语句中，并且附带一个语句块表示这段语句最终一定被执行（无论是否抛出异常），经常被用在需要释放资源的情况下，"),t("code",[a._v("System.exit (0)")]),a._v(" 可以阻断 finally 执行。")]),a._v(" "),t("p",[a._v("finalize 是在 "),t("code",[a._v("java.lang.Object")]),a._v(" 里定义的方法，也就是说每一个对象都有这么个方法，这个方法在 "),t("code",[a._v("gc")]),a._v(" 启动，该对象被回收的时候被调用。")]),a._v(" "),t("p",[a._v("一个对象的 finalize 方法只会被调用一次，finalize 被调用不一定会立即回收该对象，所以有可能调用 finalize 后，该对象又不需要被回收了，然后到了真正要被回收的时候，因为前面调用过一次，所以不会再次调用 finalize 了，进而产生问题，因此不推荐使用 finalize 方法。")]),a._v(" "),t("h3",{attrs:{id:"为什么要用static关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用static关键字"}},[a._v("#")]),a._v(" 为什么要用static关键字？")]),a._v(" "),t("p",[a._v("通常来说，用new创建类的对象时，数据存储空间才被分配，方法才供外界调用。但有时我们只想为特定域分配单一存储空间，不考虑要创建多少对象或者说根本就不创建任何对象，再就是我们想在没有创建对象的情况下也想调用方法。在这两种情况下，static关键字，满足了我们的需求。")]),a._v(" "),t("h3",{attrs:{id:"static-关键字是什么意思-java中是否可以覆盖-override-一个private或者是static的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#static-关键字是什么意思-java中是否可以覆盖-override-一个private或者是static的方法"}},[a._v("#")]),a._v(" ”static”关键字是什么意思？Java中是否可以覆盖(override)一个private或者是static的方法？")]),a._v(" "),t("p",[a._v("“static”关键字表明一个成员变量或者是成员方法可以在没有所属的类的实例变量的情况下被访问。")]),a._v(" "),t("p",[a._v("Java中static方法不能被覆盖，因为方法覆盖是基于运行时动态绑定的，而static方法是编译时静态绑定的。static方法跟类的任何实例都不相关，所以概念上不适用。")]),a._v(" "),t("h3",{attrs:{id:"是否可以在static环境中访问非static变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否可以在static环境中访问非static变量"}},[a._v("#")]),a._v(" 是否可以在static环境中访问非static变量？")]),a._v(" "),t("p",[a._v("static变量在Java中是属于类的，它在所有的实例中的值是一样的。当类被Java虚拟机载入的时候，会对static变量进行初始化。如果你的代码尝试不用实例来访问非static的变量，编译器会报错，因为这些变量还没有被创建出来，还没有跟任何实例关联上。")]),a._v(" "),t("h3",{attrs:{id:"static静态方法能不能引用非静态资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#static静态方法能不能引用非静态资源"}},[a._v("#")]),a._v(" static静态方法能不能引用非静态资源？")]),a._v(" "),t("p",[a._v("不能，new的时候才会产生的东西，对于初始化后就存在的静态资源来说，根本不认识它。")]),a._v(" "),t("h3",{attrs:{id:"static静态方法里面能不能引用静态资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#static静态方法里面能不能引用静态资源"}},[a._v("#")]),a._v(" static静态方法里面能不能引用静态资源？")]),a._v(" "),t("p",[a._v("可以，因为都是类初始化的时候加载的，大家相互都认识。")]),a._v(" "),t("h3",{attrs:{id:"非静态方法里面能不能引用静态资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非静态方法里面能不能引用静态资源"}},[a._v("#")]),a._v(" 非静态方法里面能不能引用静态资源？")]),a._v(" "),t("p",[a._v("可以，非静态方法就是实例方法，那是new之后才产生的，那么属于类的内容它都认识。")]),a._v(" "),t("h3",{attrs:{id:"java静态变量、代码块、和静态方法的执行顺序是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java静态变量、代码块、和静态方法的执行顺序是什么"}},[a._v("#")]),a._v(" java静态变量、代码块、和静态方法的执行顺序是什么？")]),a._v(" "),t("p",[a._v("基本上代码块分为三种：Static静态代码块、构造代码块、普通代码块")]),a._v(" "),t("p",[a._v("代码块执行顺序"),t("strong",[a._v("静态代码块——> 构造代码块 ——> 构造函数——> 普通代码块")])]),a._v(" "),t("p",[a._v("继承中代码块执行顺序："),t("strong",[a._v("父类静态块——>子类静态块——>父类代码块——>父类构造器——>子类代码块——>子类构造器")])]),a._v(" "),t("p",[a._v("想要深入了解，可以参考这篇文章 ：https://juejin.cn/post/6844903986475040781")]),a._v(" "),t("h2",{attrs:{id:"面向对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[a._v("#")]),a._v(" 面向对象")]),a._v(" "),t("h3",{attrs:{id:"面向对象和面向过程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向对象和面向过程的区别"}},[a._v("#")]),a._v(" 面向对象和面向过程的区别？")]),a._v(" "),t("p",[t("strong",[a._v("面向过程")]),a._v("：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("优点：性能比面向对象高，因为类调用时需要实例化，开销比较大，比较消耗资源;比如单片机、嵌入式开发、Linux/Unix等一般采用面向过程开发，性能是最重要的因素。")])]),a._v(" "),t("li",[t("p",[a._v("缺点：没有面向对象易维护、易复用、易扩展。")])])]),a._v(" "),t("p",[t("strong",[a._v("面向对象")]),a._v("：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统更加灵活、更加易于维护。")])]),a._v(" "),t("li",[t("p",[a._v("缺点：性能比面向过程低。")])])]),a._v(" "),t("h3",{attrs:{id:"讲讲面向对象三大特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讲讲面向对象三大特性"}},[a._v("#")]),a._v(" 讲讲面向对象三大特性")]),a._v(" "),t("ul",[t("li",[a._v("封装。封装最好理解了。封装是面向对象的特征之一，是对象和类概念的主要特性。封装，也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。")]),a._v(" "),t("li",[a._v("继承。继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。通过继承创建的新类称为“子类”或“派生类”，被继承的类称为“基类”、“父类”或“超类”。")]),a._v(" "),t("li",[a._v("多态性。它是指在父类中定义的属性和方法被子类继承之后，可以具有不同的数据类型或表现出不同的行为，这使得同一个属性或方法在父类及其各个子类中具有不同的含义。")])]),a._v(" "),t("h3",{attrs:{id:"java语言是如何实现多态的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java语言是如何实现多态的"}},[a._v("#")]),a._v(" Java语言是如何实现多态的？")]),a._v(" "),t("p",[a._v("本质上多态分两种：")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("1、编译时多态（又称静态多态）")])]),a._v(" "),t("p",[t("strong",[a._v("2、运行时多态（又称动态多态）")])])]),a._v(" "),t("p",[a._v("重载（overload）就是编译时多态的一个例子，编译时多态在编译时就已经确定，运行的时候调用的是确定的方法。")]),a._v(" "),t("p",[a._v("**我们通常所说的多态指的都是运行时多态，也就是编译时不确定究竟调用哪个具体方法，一直延迟到运行时才能确定。**这也是为什么有时候多态方法又被称为延迟方法的原因。")]),a._v(" "),t("p",[a._v("Java实现多态有 3 个必要条件：继承、重写和向上转型。只有满足这 3 个条件，开发人员才能够在同一个继承结构中使用统一的逻辑实现代码处理不同的对象，从而执行不同的行为。")]),a._v(" "),t("ul",[t("li",[a._v("继承：在多态中必须存在有继承关系的子类和父类。")]),a._v(" "),t("li",[a._v("重写：子类对父类中某些方法进行重新定义，在调用这些方法时就会调用子类的方法。")]),a._v(" "),t("li",[a._v("向上转型：在多态中需要将子类的引用赋给父类对象，只有这样该引用才既能可以调用父类的方法，又能调用子类的方法。")])]),a._v(" "),t("p",[a._v("Java多态的实现原理可看这篇文章：https://my.oschina.net/u/4432600/blog/4535042")]),a._v(" "),t("h3",{attrs:{id:"重载-overload-和重写-override-的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载-overload-和重写-override-的区别是什么"}},[a._v("#")]),a._v(" 重载（Overload）和重写（Override）的区别是什么？")]),a._v(" "),t("p",[a._v("方法的重载和重写都是实现多态的方式，区别在于前者实现的是编译时的多态性，而后者实现的是运行时的多态性。")]),a._v(" "),t("ul",[t("li",[a._v("重写发生在子类与父类之间, 重写方法返回值和形参都不能改变，与方法返回值和访问修饰符无关，即重载的方法不能根据返回类型进行区分。"),t("strong",[a._v("即外壳不变，核心重写！")])]),a._v(" "),t("li",[a._v("重载(overloading) 是在一个类里面，方法名字相同，而参数不同。返回类型可以相同也可以不同。每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。最常用的地方就是构造器的重载。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"http://blog-img.coolsen.cn/img/image-20210219181506507.png",alt:"image-20210219181506507"}})]),a._v(" "),t("h3",{attrs:{id:"重载的方法能否根据返回值类型进行区分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载的方法能否根据返回值类型进行区分"}},[a._v("#")]),a._v(" 重载的方法能否根据返回值类型进行区分？")]),a._v(" "),t("p",[a._v("不能根据返回值类型来区分重载的方法。因为调用时不指定类型信息，编译器不知道你要调用哪个函数。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("当调用"),t("code",[a._v("max（1,2）;")]),a._v("时无法确定调用的是哪个，单从这一点上来说，仅返回值类型不同的重载是不应该允许的。")]),a._v(" "),t("h3",{attrs:{id:"构造器-constructor-是否可被重写-override"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造器-constructor-是否可被重写-override"}},[a._v("#")]),a._v(" 构造器（constructor）是否可被重写（override）？")]),a._v(" "),t("p",[a._v("构造器不能被继承，因此不能被重写，但可以被重载。每一个类必须有自己的构造函数，负责构造自己这部分的构造。子类不会覆盖父类的构造函数，相反必须一开始调用父类的构造函数。")]),a._v(" "),t("h3",{attrs:{id:"抽象类和接口的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象类和接口的区别是什么"}},[a._v("#")]),a._v(" 抽象类和接口的区别是什么？")]),a._v(" "),t("p",[a._v("语法层面上的区别：")]),a._v(" "),t("ul",[t("li",[a._v("抽象类可以提供成员方法的实现细节，而接口中只能存在public abstract 方法；")]),a._v(" "),t("li",[a._v("抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是public static final类型的；")]),a._v(" "),t("li",[a._v("接口中不能含有静态代码块以及静态方法，而抽象类可以有静态代码块和静态方法；")]),a._v(" "),t("li",[a._v("一个类只能继承一个抽象类，而一个类却可以实现多个接口。")])]),a._v(" "),t("p",[a._v("设计层面上的区别：")]),a._v(" "),t("ul",[t("li",[a._v("抽象类是对一种事物的抽象，即对类抽象，而接口是对行为的抽象。抽象类是对整个类整体进行抽象，包括属性、行为，但是接口却是对类局部（行为）进行抽象。")]),a._v(" "),t("li",[a._v("设计层面不同，抽象类作为很多子类的父类，它是一种模板式设计。而接口是一种行为规范，它是一种辐射式设计。")])]),a._v(" "),t("p",[a._v("想要深入了解，可以参考这篇文章 ：https://www.cnblogs.com/dolphin0520/p/3811437.html")]),a._v(" "),t("h3",{attrs:{id:"抽象类能使用-final-修饰吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象类能使用-final-修饰吗"}},[a._v("#")]),a._v(" 抽象类能使用 final 修饰吗？")]),a._v(" "),t("p",[a._v("不能，定义抽象类就是让其他类继承的，如果定义为 final 该类就不能被继承，这样彼此就会产生矛盾，所以 final 不能修饰抽象类")]),a._v(" "),t("h3",{attrs:{id:"java-创建对象有哪几种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-创建对象有哪几种方式"}},[a._v("#")]),a._v(" java 创建对象有哪几种方式？")]),a._v(" "),t("p",[a._v("java中提供了以下四种创建对象的方式:")]),a._v(" "),t("ul",[t("li",[a._v("new创建新对象")]),a._v(" "),t("li",[a._v("通过反射机制")]),a._v(" "),t("li",[a._v("采用clone机制")]),a._v(" "),t("li",[a._v("通过序列化机制")])]),a._v(" "),t("p",[a._v("前两者都需要显式地调用构造方法。对于clone机制,需要注意浅拷贝和深拷贝的区别，对于序列化机制需要明确其实现原理，在java中序列化可以通过实现Externalizable或者Serializable来实现。")]),a._v(" "),t("h3",{attrs:{id:"什么是不可变对象-好处是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是不可变对象-好处是什么"}},[a._v("#")]),a._v(" 什么是不可变对象?好处是什么?")]),a._v(" "),t("p",[a._v("不可变对象指对象一旦被创建,状态就不能再改变,任何修改都会创建一个新的对象,如 String、Integer及其它包装类.不可变对象最大的好处是线程安全.")]),a._v(" "),t("h3",{attrs:{id:"能否创建一个包含可变对象的不可变对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#能否创建一个包含可变对象的不可变对象"}},[a._v("#")]),a._v(" 能否创建一个包含可变对象的不可变对象?")]),a._v(" "),t("p",[a._v("当然可以,比如"),t("code",[a._v("final Person[] persons = new Persion[]{}")]),a._v(". "),t("code",[a._v("persons")]),a._v("是不可变对象的引用,但其数组中的Person实例却是可变的.这种情况下需要特别谨慎,不要共享可变对象的引用.这种情况下,如果数据需要变化时,就返回原对象的一个拷贝.")]),a._v(" "),t("h3",{attrs:{id:"值传递和引用传递的区别的什么-为什么说java中只有值传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#值传递和引用传递的区别的什么-为什么说java中只有值传递"}},[a._v("#")]),a._v(" 值传递和引用传递的区别的什么？为什么说Java中只有值传递？")]),a._v(" "),t("p",[a._v("值传递：指的是在方法调用时，传递的参数是按值的拷贝传递，传递的是值的拷贝，也就是说传递后就互不相关了。")]),a._v(" "),t("p",[a._v("引用传递：指的是在方法调用时，传递的参数是按引用进行传递，其实传递的是引用的地址，也就是变量所对应的内存空间的地址。传递的是值的引用，也就是说传递前和传递后都指向同一个引用（也就是同一个内存空间）。")]),a._v(" "),t("p",[a._v("基本类型作为参数被传递时肯定是值传递；引用类型作为参数被传递时也是值传递，只不过“值”为对应的引用。")]),a._v(" "),t("p",[a._v("想要深入了解，可以参考这篇文章 ：http://www.itwanger.com/java/2019/11/26/java-yinyong-value.html")]),a._v(" "),t("h2",{attrs:{id:"对象相等判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象相等判断"}},[a._v("#")]),a._v(" 对象相等判断")]),a._v(" "),t("h3",{attrs:{id:"和-equals-区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#和-equals-区别是什么"}},[a._v("#")]),a._v(" == 和 equals 区别是什么？")]),a._v(" "),t("p",[t("code",[a._v("==")]),a._v("常用于相同的基本数据类型之间的比较，也可用于相同类型的对象之间的比较；")]),a._v(" "),t("ul",[t("li",[a._v("如果"),t("code",[a._v("==")]),a._v("比较的是基本数据类型，那么比较的是两个基本数据类型的值是否相等；")]),a._v(" "),t("li",[a._v("如果"),t("code",[a._v("==")]),a._v("是比较的两个对象，那么比较的是两个对象的引用，也就是判断两个对象是否指向了同一块内存区域；")])]),a._v(" "),t("p",[a._v("equals方法主要用于两个对象之间，检测一个对象是否等于另一个对象")]),a._v(" "),t("p",[a._v("看一看Object类中equals方法的源码：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("它的作用也是"),t("strong",[a._v("判断两个对象是否相等")]),a._v("，般有两种使用情况：")]),a._v(" "),t("ul",[t("li",[a._v("情况1，类没有覆盖equals()方法。则通过equals()比较该类的两个对象时，等价于通过“==”比较这两个对象。")]),a._v(" "),t("li",[a._v("情况2，类覆盖了equals()方法。一般，我们都覆盖equals()方法来两个对象的内容相等；若它们的内容相等，则返回true(即，认为这两个对象相等)。")])]),a._v(" "),t("p",[a._v("java语言规范要求equals方法具有以下特性：")]),a._v(" "),t("ul",[t("li",[a._v("自反性。对于任意不为null的引用值x，x.equals(x)一定是true。")]),a._v(" "),t("li",[a._v("对称性）。对于任意不为null的引用值x和y，当且仅当x.equals(y)是true时，y.equals(x)也是true。")]),a._v(" "),t("li",[a._v("传递性。对于任意不为null的引用值x、y和z，如果x.equals(y)是true，同时y.equals(z)是true，那么x.equals(z)一定是true。")]),a._v(" "),t("li",[a._v("一致性。对于任意不为null的引用值x和y，如果用于equals比较的对象信息没有被修改的话，多次调用时x.equals(y)要么一致地返回true要么一致地返回false。")]),a._v(" "),t("li",[a._v("对于任意不为null的引用值x，x.equals(null)返回false。")])]),a._v(" "),t("h3",{attrs:{id:"介绍下hashcode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍下hashcode"}},[a._v("#")]),a._v(" "),t("strong",[a._v("介绍下hashCode()？")])]),a._v(" "),t("p",[a._v("hashCode() 的作用是获取哈希码，也称为散列码；它实际上是返回一个int整数。这个哈希码的作用是确定该对象在哈希表中的索引位置。hashCode() 定义在JDK的Object.java中，这就意味着Java中的任何类都包含有hashCode()函数。")]),a._v(" "),t("p",[a._v("散列表存储的是键值对(key-value)，它的特点是：能根据“键”快速的检索出对应的“值”。这其中就利用到了散列码！（可以快速找到所需要的对象）")]),a._v(" "),t("h3",{attrs:{id:"为什么要有-hashcode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-hashcode"}},[a._v("#")]),a._v(" "),t("strong",[a._v("为什么要有 hashCode?")])]),a._v(" "),t("p",[t("strong",[a._v("以“HashSet 如何检查重复”为例子来说明为什么要有 hashCode")]),a._v("：")]),a._v(" "),t("p",[a._v("当你把对象加入 HashSet 时，HashSet 会先计算对象的 hashcode 值来判断对象加入的位置，同时也会与其他已经加入的对象的 hashcode 值作比较，如果没有相符的hashcode，HashSet会假设对象没有重复出现。")]),a._v(" "),t("p",[a._v("但是如果发现有相同 hashcode 值的对象，这时会调用 equals()方法来检查 hashcode 相等的对象是否真的相同。如果两者相同，HashSet 就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。这样我们就大大减少了 equals 的次数，相应就大大提高了执行速度。")]),a._v(" "),t("h3",{attrs:{id:"hashcode-equals-两种方法是什么关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashcode-equals-两种方法是什么关系"}},[a._v("#")]),a._v(" hashCode(),equals()两种方法是什么关系?")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20160929142927828?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center",alt:"img"}})]),a._v(" "),t("p",[a._v("要弄清楚这两种方法的关系，就需要对哈希表有一个基本的认识。其基本的结构如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20160929143522002",alt:"img"}})]),a._v(" "),t("p",[a._v("对于hashcode方法，会返回一个哈希值，哈希值对数组的长度取余后会确定一个存储的下标位置，如图中用数组括起来的第一列。")]),a._v(" "),t("p",[a._v("不同的哈希值取余之后的结果可能是相同的，用equals方法判断是否为相同的对象，不同则在链表中插入。")]),a._v(" "),t("p",[a._v("则有"),t("strong",[a._v("hashCode()与equals()的相关规定")]),a._v("：")]),a._v(" "),t("ul",[t("li",[a._v("如果两个对象相等，则hashcode一定也是相同的；")]),a._v(" "),t("li",[a._v("两个对象相等，对两个对象分别调用equals方法都返回true；")]),a._v(" "),t("li",[a._v("两个对象有相同的hashcode值，它们也不一定是相等的；")])]),a._v(" "),t("h3",{attrs:{id:"为什么重写-equals-方法必须重写-hashcode-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么重写-equals-方法必须重写-hashcode-方法"}},[a._v("#")]),a._v(" 为什么重写 equals 方法必须重写 hashcode 方法 \ufeff？")]),a._v(" "),t("p",[a._v("判断的时候先根据hashcode进行的判断，相同的情况下再根据equals()方法进行判断。如果只重写了equals方法，而不重写hashcode的方法，会造成hashcode的值不同，而equals()方法判断出来的结果为true。")]),a._v(" "),t("p",[a._v("在Java中的一些容器中，不允许有两个完全相同的对象，插入的时候，如果判断相同则会进行覆盖。这时候如果只重写了equals（）的方法，而不重写hashcode的方法，Object中hashcode是根据对象的存储地址转换而形成的一个哈希值。这时候就有可能因为没有重写hashcode方法，造成相同的对象散列到不同的位置而造成对象的不能覆盖的问题。")]),a._v(" "),t("h3",{attrs:{id:"string-stringbuffer-stringbuilder-的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string-stringbuffer-stringbuilder-的区别是什么"}},[a._v("#")]),a._v(" String,StringBuffer, StringBuilder 的区别是什么？")]),a._v(" "),t("p",[a._v("1.可变与不可变。String类中使用字符数组保存字符串，因为有“final”修饰符，所以string对象是不可变的。"),t("strong",[a._v("对于已经存在的String对象的修改都是重新创建一个新的对象,然后把新的值保存进去.")])]),a._v(" "),t("p",[a._v("String类利用了final修饰的char类型数组存储字符，源码如下:")]),a._v(" "),t("p",[t("code",[a._v("private final char value[];")])]),a._v(" "),t("p",[a._v("StringBuilder与StringBuffer都继承自AbstractStringBuilder类，在AbstractStringBuilder中也是使用字符数组保存字符串，这两种对象都是可变的。")]),a._v(" "),t("p",[a._v("源码如下:")]),a._v(" "),t("p",[t("code",[a._v("char[] value;")])]),a._v(" "),t("p",[a._v("2.是否多线程安全。")]),a._v(" "),t("p",[a._v("String中的对象是不可变的，也就可以理解为常量，显然线程安全。")]),a._v(" "),t("p",[a._v("StringBuilder是非线程安全的。")]),a._v(" "),t("p",[a._v("StringBuffer对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。")]),a._v(" "),t("p",[a._v("源码如下:")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringBuffer")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("append")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        toStringCache "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("append")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("3.性能")]),a._v(" "),t("p",[a._v("每次对String 类型进行改变的时候，都会生成一个新的String对象，然后将指针指向新的String 对象。StringBuffer每次都会对StringBuffer对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用StirngBuilder 相比使用StringBuffer 仅能获得10%~15% 左右的性能提升，但却要冒多线程不安全的风险。")]),a._v(" "),t("h3",{attrs:{id:"string为什么要设计成不可变的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string为什么要设计成不可变的"}},[a._v("#")]),a._v(" String为什么要设计成不可变的？")]),a._v(" "),t("p",[a._v("1.便于实现字符串池（String pool）")]),a._v(" "),t("p",[a._v("在Java中，由于会大量的使用String常量，如果每一次声明一个String都创建一个String对象，那将会造成极大的空间资源的浪费。Java提出了String pool的概念，在堆中开辟一块存储空间String pool，当初始化一个String变量时，如果该字符串已经存在了，就不会去创建一个新的字符串变量，而是会返回已经存在了的字符串的引用。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('String a = "Hello world!";\nString b = "Hello world!";\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("如果字符串是可变的，某一个字符串变量改变了其值，那么其指向的变量的值也会改变，String pool将不能够实现！")]),a._v(" "),t("p",[a._v("2.使多线程安全")]),a._v(" "),t("p",[a._v("在并发场景下，多个线程同时读一个资源，是安全的，不会引发竞争，但对资源进行写操作时是不安全的，不可变对象不能被写，所以保证了多线程的安全。")]),a._v(" "),t("p",[a._v("3.避免安全问题")]),a._v(" "),t("p",[a._v("在网络连接和数据库连接中字符串常常作为参数，例如，网络连接地址URL，文件路径path，反射机制所需要的String参数。其不可变性可以保证连接的安全性。如果字符串是可变的，黑客就有可能改变字符串指向对象的值，那么会引起很严重的安全问题。")]),a._v(" "),t("p",[a._v("4.加快字符串处理速度")]),a._v(" "),t("p",[a._v("由于String是不可变的，保证了hashcode的唯一性，于是在创建对象时其hashcode就可以放心的缓存了，不需要重新计算。这也就是Map喜欢将String作为Key的原因，处理速度要快过其它的键对象。所以HashMap中的键往往都使用String。")]),a._v(" "),t("p",[a._v("总体来说，String不可变的原因要包括 设计考虑，效率优化，以及安全性这三大方面。")]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("p",[a._v("https://tech.meituan.com/2019/09/05/java-bytecode-enhancement.html")]),a._v(" "),t("p",[a._v("http://c.biancheng.net/view/769.html")]),a._v(" "),t("p",[a._v("http://www.51gjie.com/java/81.html")]),a._v(" "),t("p",[a._v("http://www.justdojava.com/2019/03/21/Java-and-equals/")]),a._v(" "),t("p",[a._v("https://blog.csdn.net/qq_28051453/article/details/52701171")]),a._v(" "),t("p",[a._v("https://www.cnblogs.com/wkfvawl/p/11693260.html")])])}),[],!1,null,null,null);t.default=_.exports}}]);