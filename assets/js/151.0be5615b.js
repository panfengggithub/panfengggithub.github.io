(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{601:function(t,e,s){"use strict";s.r(e);var r=s(1),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webflux系列之反应式编程核心基础详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webflux系列之反应式编程核心基础详解"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Webflux系列之反应式编程核心基础详解")])]),t._v(" "),e("h1",{attrs:{id:"一-反应式编程核心思想"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-反应式编程核心思想"}},[t._v("#")]),t._v(" 一. 反应式编程核心思想")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1300531/1607057752017-b2f94ada-f72a-4a47-8038-d9518b65b401.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_13%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"_1、核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、核心概念"}},[t._v("#")]),t._v(" 1、核心概念")]),t._v(" "),e("h3",{attrs:{id:"_1-1-定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-定义"}},[t._v("#")]),t._v(" 1.1 定义")]),t._v(" "),e("p",[e("strong",[t._v("反应式")])]),t._v(" "),e("p",[t._v("反应式系统具有某些特性，使其成为低延迟、高吞吐量工作负载的理想选择。projectreactor和Spring组合一起工作，使开发人员能够构建响应性、弹性、弹性和消息驱动的企业级反应系统。")]),t._v(" "),e("p",[e("strong",[t._v("反应式处理")])]),t._v(" "),e("p",[t._v("反应式处理是一种范例，它使开发人员能够构建非阻塞、异步的应用程序，从而能够处理背压（流控制）。")]),t._v(" "),e("p",[e("strong",[t._v("为什么使用反应式处理？")])]),t._v(" "),e("p",[t._v("反应式系统更好地利用了现代处理器。此外，在反应式编程中加入背压可以确保解耦组件之间具有更好的弹性。")]),t._v(" "),e("p",[e("strong",[t._v("反应式宣言")])]),t._v(" "),e("p",[t._v("英文： https://www.reactivemanifesto.org/")]),t._v(" "),e("p",[t._v("中文： https://www.reactivemanifesto.org/zh-CN")]),t._v(" "),e("h3",{attrs:{id:"_1-2-反应式系统的特质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-反应式系统的特质"}},[t._v("#")]),t._v(" 1.2 反应式系统的特质")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("即时响应性:")]),t._v(" ：只要有可能， "),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#System",target:"_blank",rel:"noopener noreferrer"}},[t._v("系统"),e("OutboundLink")],1),t._v("就会及时地做出响应。 即时响应是可用性和实用性的基石， 而更加重要的是，即时响应意味着可以快速地检测到问题并且有效地对其进行处理。 即时响应的系统专注于提供快速而一致的响应时间， 确立可靠的反馈上限， 以提供一致的服务质量。 这种一致的行为转而将简化错误处理、 建立最终用户的信任并促使用户与系统作进一步的互动。")]),t._v(" "),e("li",[t._v("**回弹性：**系统在出现"),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Failure",target:"_blank",rel:"noopener noreferrer"}},[t._v("失败"),e("OutboundLink")],1),t._v("时依然保持即时响应性。 这不仅适用于高可用的、 任务关键型系统——任何不具备回弹性的系统都将会在发生失败之后丢失即时响应性。 回弹性是通过"),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Replication",target:"_blank",rel:"noopener noreferrer"}},[t._v("复制"),e("OutboundLink")],1),t._v("、 遏制、 "),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Isolation",target:"_blank",rel:"noopener noreferrer"}},[t._v("隔离"),e("OutboundLink")],1),t._v("以及"),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Delegation",target:"_blank",rel:"noopener noreferrer"}},[t._v("委托"),e("OutboundLink")],1),t._v("来实现的。 失败的扩散被遏制在了每个"),e("RouterLink",{attrs:{to:"/glossary.zh-cn.html#组件"}},[t._v("组件")]),t._v("内部， 与其他组件相互隔离， 从而确保系统某部分的失败不会危及整个系统，并能独立恢复。 每个组件的恢复都被委托给了另一个（外部的）组件， 此外，在必要时可以通过复制来保证高可用性。 （因此）组件的客户端不再承担组件失败的处理。")],1),t._v(" "),e("li",[e("strong",[t._v("弹性：")]),t._v(" 系统在不断变化的工作负载之下依然保持即时响应性。 反应式系统可以对输入（负载）的速率变化做出反应，比如通过增加或者减少被分配用于服务这些输入（负载）的"),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Resource",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源"),e("OutboundLink")],1),t._v("。 这意味着设计上并没有争用点和中央瓶颈， 得以进行组件的分片或者复制， 并在它们之间分布输入（负载）。 通过提供相关的实时性能指标， 反应式系统能支持预测式以及反应式的伸缩算法。 这些系统可以在常规的硬件以及软件平台上实现成本高效的"),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Elasticity",target:"_blank",rel:"noopener noreferrer"}},[t._v("弹性"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Elasticity",target:"_blank",rel:"noopener noreferrer"}},[t._v("。"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Elasticity",target:"_blank",rel:"noopener noreferrer"}},[t._v("**消息驱动：**反应式系统依赖"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Asynchronous",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步的"),e("OutboundLink")],1),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Message-Driven",target:"_blank",rel:"noopener noreferrer"}},[t._v("消息传递"),e("OutboundLink")],1),t._v("，从而确保了松耦合、隔离、"),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Location-Transparency",target:"_blank",rel:"noopener noreferrer"}},[t._v("位置透明"),e("OutboundLink")],1),t._v("的组件之间有着明确边界。 这一边界还提供了将"),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Failure",target:"_blank",rel:"noopener noreferrer"}},[t._v("失败"),e("OutboundLink")],1),t._v("作为消息委托出去的手段。 使用显式的消息传递，可以通过在系统中塑造并监视消息流队列， 并在必要时应用"),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Back-Pressure",target:"_blank",rel:"noopener noreferrer"}},[t._v("回压"),e("OutboundLink")],1),t._v("， 从而实现负载管理、 弹性以及流量控制。 使用位置透明的消息传递作为通信的手段， 使得跨集群或者在单个主机中使用相同的结构成分和语义来管理失败成为了可能。 "),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Non-Blocking",target:"_blank",rel:"noopener noreferrer"}},[t._v("非阻塞的"),e("OutboundLink")],1),t._v("通信使得接收者可以只在活动时才消耗"),e("a",{attrs:{href:"https://www.reactivemanifesto.org/zh-CN/glossary#Resource",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源"),e("OutboundLink")],1),t._v("， 从而减少系统开销。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/svg/1300531/1607057755945-beb32b36-674b-419e-aca0-d22ccfc20124.svg",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"_2-、spring技术栈架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-、spring技术栈架构"}},[t._v("#")]),t._v(" 2 、Spring技术栈架构")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/svg/1300531/1607057752542-63d8abf7-390e-41e5-9f22-104d2706ece2.svg",alt:"img"}})]),t._v(" "),e("h1",{attrs:{id:"二、函数编程基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、函数编程基础"}},[t._v("#")]),t._v(" 二、函数编程基础")]),t._v(" "),e("h2",{attrs:{id:"_1、函数编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、函数编程"}},[t._v("#")]),t._v(" 1、函数编程")]),t._v(" "),e("p",[e("strong",[t._v("函数编程接口")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("接口函数名")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("BiConsumer")]),t._v(" "),e("td",[t._v("表示接收两个输入参数和不返回结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("BiFunction")]),t._v(" "),e("td",[t._v("表示接受两个参数，并产生一个结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("BinaryOperator")]),t._v(" "),e("td",[t._v("表示在相同类型的两个操作数的操作，生产相同类型的操作数的结果。")])]),t._v(" "),e("tr",[e("td",[t._v("BiPredicate")]),t._v(" "),e("td",[t._v("代表两个参数谓词（布尔值函数）。")])]),t._v(" "),e("tr",[e("td",[t._v("BooleanSupplier")]),t._v(" "),e("td",[t._v("代表布尔值结果的提供者。")])]),t._v(" "),e("tr",[e("td",[t._v("Consumer")]),t._v(" "),e("td",[t._v("表示接受一个输入参数和不返回结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleBinaryOperator")]),t._v(" "),e("td",[t._v("代表在两个double值操作数的运算，并产生一个double值结果。")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleConsumer")]),t._v(" "),e("td",[t._v("表示接受一个double值参数，不返回结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleFunction")]),t._v(" "),e("td",[t._v("表示接受double值参数，并产生一个结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("DoublePredicate")]),t._v(" "),e("td",[t._v("代表一个double值参数谓词（布尔值函数）。")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleSupplier")]),t._v(" "),e("td",[t._v("表示表示接受double值参数，并产生一个结果的函数。值结果的提供者。")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleToIntFunction")]),t._v(" "),e("td",[t._v("表示接受一个double值参数，不返回结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleFunction")]),t._v(" "),e("td",[t._v("表示接受double值参数，并产生一个结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("DoublePredicate")]),t._v(" "),e("td",[t._v("代表一个double值参数谓词（布尔值函数）。")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleSupplier")]),t._v(" "),e("td",[t._v("DoubleToIntFunction")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleToIntFunction")]),t._v(" "),e("td",[t._v("表示接受double值参数，并产生一个int值结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleToLongFunction")]),t._v(" "),e("td",[t._v("表示上产生一个double值结果的单个double值操作数的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("代表接受一个double值参数，并产生一个long值结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("DoubleUnaryOperator")]),t._v(" "),e("td",[t._v("表示上产生一个double值结果的单个double值操作数的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("表示接受一个参数，并产生一个结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("IntConsumer")]),t._v(" "),e("td",[t._v("表示接受单个int值的参数并没有返回结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("IntFunction")]),t._v(" "),e("td",[t._v("表示接受一个int值参数，并产生一个结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("IntPredicate")]),t._v(" "),e("td",[t._v("表示一个整数值参数谓词（布尔值函数）。")])]),t._v(" "),e("tr",[e("td",[t._v("IntSupplier")]),t._v(" "),e("td",[t._v("代表整型值的结果的提供者。")])]),t._v(" "),e("tr",[e("td",[t._v("IntToLongFunction")]),t._v(" "),e("td",[t._v("表示接受一个int值参数，并产生一个long值结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("IntUnaryOperator")]),t._v(" "),e("td",[t._v("表示产生一个int值结果的单个int值操作数的运算。")])]),t._v(" "),e("tr",[e("td",[t._v("LongBinaryOperator")]),t._v(" "),e("td",[t._v("表示在两个long值操作数的操作，并产生一个ObjLongConsumer值结果。")])]),t._v(" "),e("tr",[e("td",[t._v("LongFunction")]),t._v(" "),e("td",[t._v("表示接受long值参数，并产生一个结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("LongPredicate")]),t._v(" "),e("td",[t._v("代表一个long值参数谓词（布尔值函数）。")])]),t._v(" "),e("tr",[e("td",[t._v("LongSupplier")]),t._v(" "),e("td",[t._v("表示long值结果的提供者。")])]),t._v(" "),e("tr",[e("td",[t._v("LongToDoubleFunction")]),t._v(" "),e("td",[t._v("表示接受double参数，并产生一个double值结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("LongToIntFunction")]),t._v(" "),e("td",[t._v("表示接受long值参数，并产生一个int值结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("LongUnaryOperator")]),t._v(" "),e("td",[t._v("表示上产生一个long值结果单一的long值操作数的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("ObjDoubleConsumer")]),t._v(" "),e("td",[t._v("表示接受对象值和double值参数，并且没有返回结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("ObjIntConsumer")]),t._v(" "),e("td",[t._v("表示接受对象值和整型值参数，并返回没有结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("ObjLongConsumer")]),t._v(" "),e("td",[t._v("表示接受对象值和整型值参数，并返回没有结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("ObjLongConsumer")]),t._v(" "),e("td",[t._v("表示接受对象值和double值参数，并且没有返回结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("ObjIntConsumer")]),t._v(" "),e("td",[t._v("表示接受对象值和整型值参数，并返回没有结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("ObjLongConsumer")]),t._v(" "),e("td",[t._v("表示接受对象的值和long值的说法，并没有返回结果的操作。")])]),t._v(" "),e("tr",[e("td",[t._v("Predicate")]),t._v(" "),e("td",[t._v("代表一个参数谓词（布尔值函数）。")])]),t._v(" "),e("tr",[e("td",[t._v("Supplier")]),t._v(" "),e("td",[t._v("表示一个提供者的结果。")])]),t._v(" "),e("tr",[e("td",[t._v("ToDoubleBiFunction")]),t._v(" "),e("td",[t._v("表示接受两个参数，并产生一个double值结果的功能。")])]),t._v(" "),e("tr",[e("td",[t._v("ToDoubleFunction")]),t._v(" "),e("td",[t._v("代表一个产生一个double值结果的功能。")])]),t._v(" "),e("tr",[e("td",[t._v("ToIntBiFunction")]),t._v(" "),e("td",[t._v("表示接受两个参数，并产生一个int值结果的函数。")])]),t._v(" "),e("tr",[e("td",[t._v("ToIntFunction")]),t._v(" "),e("td",[t._v("代表产生一个int值结果的功能。")])]),t._v(" "),e("tr",[e("td",[t._v("ToLongBiFunction")]),t._v(" "),e("td",[t._v("表示接受两个参数，并产生long值结果的功能。")])]),t._v(" "),e("tr",[e("td",[t._v("ToLongFunction")]),t._v(" "),e("td",[t._v("代表一个产生long值结果的功能。")])]),t._v(" "),e("tr",[e("td",[t._v("UnaryOperator")]),t._v(" "),e("td",[t._v("表示上产生相同类型的操作数的结果的单个操作数的操作。")])])])]),t._v(" "),e("h2",{attrs:{id:"_2、常用函数编程示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、常用函数编程示例"}},[t._v("#")]),t._v(" 2、常用函数编程示例``")]),t._v(" "),e("p",[t._v("Consumer  一个输入  无输出")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Product product=new Product();\n//类名+静态方法  一个输入T 没有输出\nConsumer consumer1 = Product->Product.nameOf(product);//lambda\nconsumer1.accept(product);\nConsumer consumer = Product::nameOf;//方法引用\nconsumer.accept(product);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("Funtion<T,R>  一个输入  一个输出")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//对象+方法  一个输入T 一个输出R\nFunction<Integer, Integer> function = product::reduceStock;\nSystem.out.println("剩余库存：" + function.apply(10));\n//带参数的构造函数\nFunction<Integer,Product> function1=Product::new;\nSystem.out.println("新对象:" +function1.apply(200));\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("Predicate  一个输入T,  一个输出 Boolean")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//Predicate 一个输入T 一个输出Boolean\nPredicate predicate= i -> product.isEnough(i);//lambda\nSystem.out.println("库存是否足够："+predicate.test(100));\nPredicate predicate1= product::isEnough;//方法引用\nSystem.out.println("库存是否足够："+predicate1.test(100));\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("UnaryOperator 一元操作符  输入输出都是T")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//一元操作符  输入和输出T\nUnaryOperator integerUnaryOperator =product::reduceStock;\nSystem.out.println("剩余库存：" + integerUnaryOperator.apply(20));\nIntUnaryOperator intUnaryOperator = product::reduceStock;\nSystem.out.println("剩余库存：" + intUnaryOperator.applyAsInt(30));\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Supplier  没有输入  只有输出")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//无参数构造函数\nSupplier supplier = Product::new;\nSystem.out.println("创建新对象:" + supplier.get());\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Supplier supplier1=()->product.getStock();\nSystem.out.println("剩余库存:" + supplier1.get());\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("BiFunction  二元操作符  两个输入<T,U> 一个输出")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//类名+方法\nBiFunction<Product, Integer, Integer> binaryOperator = Product::reduceStock;\nSystem.out.println(" 剩余库存(BiFunction)：" + binaryOperator.apply(product, 10));\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("BinaryOperator 二元操作符  ,二个输入 一个输出")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//BinaryOperator binaryOperator1=(x,y)->product.reduceStock(x,y);\nBinaryOperator binaryOperator1=product::reduceStock;\nSystem.out.println(" 剩余库存(BinaryOperator)：" +binaryOperator1.apply(product.getStock(),10));\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h1",{attrs:{id:"三、reactive-stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、reactive-stream"}},[t._v("#")]),t._v(" 三、Reactive Stream")]),t._v(" "),e("h2",{attrs:{id:"_1、定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、定义"}},[t._v("#")]),t._v(" 1、定义")]),t._v(" "),e("p",[t._v("​          Reactive Stream 提供异步流处理和无阻塞背压 标准规范。")]),t._v(" "),e("p",[t._v("https://github.com/reactive-streams/reactive-streams-jvm")]),t._v(" "),e("p",[t._v("http://www.reactive-streams.org/")]),t._v(" "),e("h2",{attrs:{id:"_2、背压"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、背压"}},[t._v("#")]),t._v(" 2、背压")]),t._v(" "),e("p",[t._v("发布者与订阅者之间消息协调，订阅者需要多少数据，发布者产生多少数据，不会造成消息接收者被数据流冲垮。")]),t._v(" "),e("p",[t._v("SpringMVC是同步阻塞模式，数据接收是被动处理，数据会源源不断发送，如果数据处理不了，就会出现消息挤压和堵塞。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1300531/1607057752118-f9cfb0c9-2df2-4eac-9f29-2c87c9849c5b.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_36%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"_3、api组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、api组件"}},[t._v("#")]),t._v(" 3、API组件")]),t._v(" "),e("ol",[e("li",[t._v("Publisher  发布者")]),t._v(" "),e("li",[t._v("Subscriber    订阅者")]),t._v(" "),e("li",[t._v("Subscription    契约 /订阅关系  ，实现背压的关键")]),t._v(" "),e("li",[t._v("Processor    中间处理")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1300531/1607057752100-cf8bb2e5-a18e-4abb-9fe9-3800d6c345e5.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_39%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("p",[e("strong",[t._v("JDK9 Flow API")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("java.util.concurrent.Flow\n@FunctionalInterface `` \npublic static interface Publisher {\n// 发布者与订阅者建立订阅关系\npublic void subscribe(Subscriber<? super T> subscriber);\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("public static interface Subscriber {\n// 第一次建立订阅关系调用\npublic void onSubscribe(Subscription subscription);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//继续接收数据\npublic void onNext(T item);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//出现异常\npublic void onError(Throwable throwable);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//发送完成\npublic void onComplete();\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("//中间处理角色")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("public static interface Processor<T,R> extends Subscriber, Publisher {\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("返回发布服务器或订阅服务器缓存的默认值，可以在没有其他约束的情况下使用。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("static final int DEFAULT_BUFFER_SIZE = 256;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[e("code",[t._v("Returns a default value for Publisher or Subscriber buffering,")])]),t._v(" "),e("li",[e("code",[t._v("that may be used in the absence of other constraints.")])]),t._v(" "),e("li"),t._v(" "),e("li",[e("code",[t._v("@implNote")])]),t._v(" "),e("li",[e("code",[t._v("The current value returned is 256.")])]),t._v(" "),e("li"),t._v(" "),e("li",[e("code",[t._v("@return `` the buffer size value")]),t._v(" "),e("code",[t._v("*/")]),t._v(" "),e("code",[t._v("public static int defaultBufferSize() {")]),t._v(" "),e("code",[t._v("return DEFAULT_BUFFER_SIZE;")]),t._v(" "),e("code",[t._v("}")])])]),t._v(" "),e("h1",{attrs:{id:"四、jdk-reactive-stream实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、jdk-reactive-stream实战"}},[t._v("#")]),t._v(" 四、JDK Reactive Stream实战")]),t._v(" "),e("h2",{attrs:{id:"_1、第一个reactive-stream-demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、第一个reactive-stream-demo"}},[t._v("#")]),t._v(" 1、第一个Reactive Stream Demo")]),t._v(" "),e("p",[t._v("1、创建生产者")]),t._v(" "),e("p",[t._v("SubmissionPublisher submissionPublisher = new SubmissionPublisher();")]),t._v(" "),e("p",[t._v("2、创建消费者")]),t._v(" "),e("p",[t._v("Flow.Subscriber subscriber = new Flow.Subscriber() {")]),t._v(" "),e("p",[t._v("private Flow.Subscription subscription;")]),t._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v('@Override\npublic void onSubscribe(Flow.Subscription subscription) {\n    System.out.println("建立发布订阅关系");\n    //建立订阅关系\n    this.subscription = subscription;\n    //请求数据\n    this.subscription.request(1);\n}\n\n@Override\npublic void onNext(Integer item) {\n    //接收数据进行处理\n    System.out.println("接收到数据 = " + item);\n\n    //处理完成继续请求数据 （调节数据接收频率）\n    this.subscription.request(1);\n\n    //通知生产者不再接收数据\n    //this.subscription.cancel();\n\n}\n\n@Override\npublic void onError(Throwable throwable) {\n    //出现异常\n    throwable.printStackTrace();\n    //通知生产者不再接收数据\n    this.subscription.cancel();\n}\n\n@Override\npublic void onComplete() {\n    //全部数据处理完成（发布者关闭）\n    System.out.println("数据处理结束");\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br")])]),e("p",[t._v("};")]),t._v(" "),e("p",[t._v("3、发布者与消费者建立订阅关系")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("submissionPublisher.subscribe(subscriber);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",[e("li",[t._v("发布者发布数据\n"),e("code",[t._v("submissionPublisher.submit(100);")]),t._v("\n5、发布者关闭\n"),e("code",[t._v("submissionPublisher.close();")])]),t._v(" "),e("li",[t._v("等待数据发送")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("try {\nThread.currentThread().join(10000);\n} catch (InterruptedException e) {\ne.printStackTrace();\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("演示代码结果")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1300531/1607057752087-56a7da0c-e2ab-432c-b75b-3d59a55f689d.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("p",[e("strong",[t._v("运行原理")])]),t._v(" "),e("p",[t._v("连续发布500条数据")]),t._v(" "),e("p",[t._v('​                for (int i = 0; i <500 ; i++) {     System.out.println("发布数据 = " + i);     submissionPublisher.submit(i); }')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1300531/1607057752159-c14093a4-d26a-46e1-9d87-eb235043a209.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1300531/1607057752106-2f6ec957-515a-47e4-9d22-fb61504de6e8.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_33%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("h1",{attrs:{id:"五、project-reactor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、project-reactor"}},[t._v("#")]),t._v(" 五、Project Reactor")]),t._v(" "),e("p",[t._v("官方文档： https://projectreactor.io/docs/core/release/reference/")]),t._v(" "),e("h2",{attrs:{id:"_1、-定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、-定义"}},[t._v("#")]),t._v(" 1、 定义")]),t._v(" "),e("p",[e("strong",[t._v("Reactor")])]),t._v(" "),e("p",[t._v("Reactor is a fourth-generation reactive library, based on the Reactive Streams")]),t._v(" "),e("p",[t._v("specification, for building non-blocking applications on the JVM")]),t._v(" "),e("p",[e("strong",[t._v("Reactive programming")])]),t._v(" "),e("p",[t._v("Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change. This means that it becomes possible to express static (e.g. arrays) or dynamic (e.g. event emitters) data streams with ease via the employed programming language(s).")]),t._v(" "),e("p",[t._v("反应式编程是一种关注数据流和变更传播的异步编程范式。这意味着可以通过所使用的编程语言轻松地表达静态(例如数组)或动态(例如事件发射器)数据流")]),t._v(" "),e("h2",{attrs:{id:"_2、reactor-核心功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、reactor-核心功能"}},[t._v("#")]),t._v(" 2、Reactor 核心功能")]),t._v(" "),e("p",[e("strong",[t._v("Flux")]),t._v(": 生产者发布的0-N个异步序列元素")]),t._v(" "),e("p",[t._v("Flux is a standard Publisher that represents an asynchronous sequence of 0 to N emitted items, optionally terminated by either a completion signal or an error. As in the Reactive Streams spec, these three types of signal translate to calls to a downstream Subscriber’s onNext, onComplete, and onError methods.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1300531/1607057752089-b7f9228f-1b95-401a-b6e1-3bfc4b39c7ba.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_18%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("p",[t._v("Flux 创建Demo")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Flux ints = Flux.range(1, 4);\nFlux seq1 = Flux.just("bole1", "bole2", "bole3");\nList iterable = Arrays.asList("bole_01", "bole_02", "bole_03");\nFlux seq2 = Flux.fromIterable(iterable);\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("seq2.subscribe(i -> System.out.println(i));\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("strong",[t._v("Mono")]),t._v(":是一种特别的发布者，它最多发出一个条目。")]),t._v(" "),e("p",[t._v("Mono is a specialized Publisher that emits at most one item and then (optionally) terminates with an")]),t._v(" "),e("p",[t._v("onComplete signal or an onError signal.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1300531/1607057752076-51d10f02-ab40-4069-ab95-cae10129de7f.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_18%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("p",[t._v('Mono data = Mono.just("bole");')]),t._v(" "),e("p",[t._v("Mono noData = Mono.empty();")]),t._v(" "),e("p",[t._v("m.subscribe(i -> System.out.println(i));")]),t._v(" "),e("h2",{attrs:{id:"_3、project-reactor工程搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、project-reactor工程搭建"}},[t._v("#")]),t._v(" 3、Project Reactor工程搭建")]),t._v(" "),e("p",[t._v("1、新建Maven工程")]),t._v(" "),e("p",[t._v("2、添加Reactor依赖支持")]),t._v(" "),e("p",[t._v("3、创建我的第一个反应式程序")]),t._v(" "),e("p",[t._v("package com.bole.reactor;")]),t._v(" "),e("p",[t._v("import org.reactivestreams.Subscription;")]),t._v(" "),e("p",[t._v("import reactor.core.publisher.BaseSubscriber;")]),t._v(" "),e("p",[t._v("import reactor.core.publisher.Flux;")]),t._v(" "),e("p",[t._v("import reactor.core.publisher.Mono;")]),t._v(" "),e("p",[t._v("import java.util.Arrays;")]),t._v(" "),e("p",[t._v("import java.util.List;")]),t._v(" "),e("p",[t._v("import java.util.concurrent.TimeUnit;")]),t._v(" "),e("p",[t._v("import java.util.concurrent.atomic.AtomicLong;")]),t._v(" "),e("p",[t._v("import java.util.stream.Stream;")]),t._v(" "),e("p",[t._v("/**")]),t._v(" "),e("ul",[e("li",[t._v("@Description:")]),t._v(" "),e("li",[t._v("@Author: 伯乐")]),t._v(" "),e("li",[t._v("@Date: 2020/12/2 13:02\n*/\npublic class ReactorDemo {\npublic static void main(String[] args) {")])]),t._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v(' //Mono创建方式 ：1个元素\n Mono<String> mono= Mono.just("mono");\n mono.subscribe(i-> System.out.println("m:"+mono));\n //Mono创建方式 ：空序列\n Mono<String> monoEmpty= Mono.empty();\n monoEmpty.subscribe(i-> System.out.println("monoEmpty:"+mono));\n\n\n //Flux创建方式1\n Flux<String> flux0 = Flux.just("bole", "bole1", "bole3");\n Flux<String> flux1 = Flux.fromArray(new String[]{"bole", "bole1", "bole3"});\n Flux<String> flux2 = Flux.fromStream(Stream.of("bole", "bole1", "bole3"));\n Flux<String> flux3 = Flux.fromIterable(Arrays.asList("bole", "bole1", "bole3"));\n Flux<Integer> flux4 = Flux.range(1, 10);\n //使用baseSubscriber\n Flux.range(1, 10)\n         .doOnRequest(r -> System.out.println("request of " + r))\n         .subscribe(new BaseSubscriber<Integer>() {\n\n             @Override\n             public void hookOnSubscribe(Subscription subscription) {\n                 request(1);\n             }\n\n             @Override\n             public void hookOnNext(Integer integer) {\n                 System.out.println("Cancelling after having received " + integer);\n                 request(1);\n                 //cancel();\n             }\n         });\n\n //Flux创建方式 2 ： 程序创建\n Flux<String> flux5 = Flux.generate(() -> 0, (i, sink) -> {\n     sink.next("bole" + i);\n     if (i > 10) {\n         sink.complete();\n     }\n     return i + 1;\n });\n\n flux0.doOnSubscribe(i -> {\n     i.request(2);\n     System.out.println("sub:" + i);\n }).doOnNext(i -> {\n     System.out.println("next:" + i);\n }).doOnComplete(() -> {\n     System.out.println("Complete");\n }).subscribe();\n\n\n/* Flux.generate(AtomicLong::new, (l, sink) -> {\n     long v = l.getAndIncrement();\n     sink.next("bole" + v);\n     if (v == 3) {\n         sink.complete();\n     }\n     return l;\n }, l -> {\n }).subscribe(i -> System.out.println("atomic :" + i));*/\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br"),e("span",{staticClass:"line-number"},[t._v("52")]),e("br"),e("span",{staticClass:"line-number"},[t._v("53")]),e("br"),e("span",{staticClass:"line-number"},[t._v("54")]),e("br"),e("span",{staticClass:"line-number"},[t._v("55")]),e("br"),e("span",{staticClass:"line-number"},[t._v("56")]),e("br"),e("span",{staticClass:"line-number"},[t._v("57")]),e("br"),e("span",{staticClass:"line-number"},[t._v("58")]),e("br"),e("span",{staticClass:"line-number"},[t._v("59")]),e("br"),e("span",{staticClass:"line-number"},[t._v("60")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);