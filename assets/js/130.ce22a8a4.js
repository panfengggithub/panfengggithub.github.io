(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{545:function(t,a,v){"use strict";v.r(a);var n=v(1),_=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"命令式编程-声明式编程和函数式编程的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令式编程-声明式编程和函数式编程的区别"}},[t._v("#")]),t._v(" 命令式编程，声明式编程和函数式编程的区别")]),t._v(" "),a("h2",{attrs:{id:"命令式-指令式-编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令式-指令式-编程"}},[t._v("#")]),t._v(" 命令式（指令式）编程：")]),t._v(" "),a("p",[t._v("命令式编程的主要思想是关注计算机执行的步骤，即一步一步告诉计算机先做什么再做什么。")]),t._v(" "),a("p",[t._v("比如：如果你想在一个数字集合 collection(变量名) 中筛选大于 5 的数字，你需要这样告诉计算机：")]),t._v(" "),a("p",[t._v("第一步，创建一个存储结果的集合变量 results；\n第二步，遍历这个数字集合 collection；\n第三步：一个一个地判断每个数字是不是大于 5，如果是就将这个数字添加到结果集合变量 results 中。")]),t._v(" "),a("p",[t._v("代码实现如下：")]),t._v(" "),a("p",[t._v("List"),a("int",[t._v(" results = new List"),a("int",[t._v("();\nforeach(var num in collection)\n{\nif (num > 5)\nresults.Add(num);\n}\n很明显，这个样子的代码是很常见的一种，不管你用的是 C, C++ 还是 C#, Java, Javascript, BASIC, Python, Ruby 等等，你都可以以这个方式写。")])],1)],1),t._v(" "),a("h2",{attrs:{id:"声明式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明式编程"}},[t._v("#")]),t._v(" 声明式编程：")]),t._v(" "),a("p",[t._v("声明式编程是的以数据结构的形式来表达程序执行的逻辑。它的主要思想是告诉计算机应该做什么，但不指定具体要怎么做。")]),t._v(" "),a("p",[t._v("SQL 语句就是最明显的一种声明式编程的例子，例如：")]),t._v(" "),a("p",[t._v("SELECT * FROM collection WHERE num > 5\n1\n除了 SQL，网页编程中用到的 HTML 和 CSS 也都属于声明式编程。")]),t._v(" "),a("p",[t._v("通过观察声明式编程的代码我们可以发现它有一个特点是它不需要创建变量用来存储数据。")]),t._v(" "),a("p",[t._v("另一个特点是它不包含循环控制的代码如 for， while。")]),t._v(" "),a("h2",{attrs:{id:"函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[t._v("#")]),t._v(" 函数式编程：")]),t._v(" "),a("p",[t._v("其与指令编程相比，强调函数的计算比指令的计算更重要；与过程化编程相比，其中函数的计算可以随时调用。")]),t._v(" "),a("p",[t._v("函数式编程和声明式编程是有所关联的，因为他们思想是一致的：即只关注做什么而不是怎么做。但函数式编程不仅仅局限于声明式编程。")]),t._v(" "),a("p",[t._v("函数式编程最重要的特点是“函数第一位”，即函数可以出现在任何地方，比如你可以把函数作为参数传递给另一个函数，不仅如此你还可以将函数作为返回值。大部分常见的编程语言一半都已经提供了对这种编程方式的支持，比如 JavaScript，再有 C# 中的 LINQ 和 Java 中的 Lambda 和闭包的概念。")]),t._v(" "),a("p",[t._v("Java 8 最大的一个对函数式编程支持的更新就是 Stream API，感兴趣的可以了解下，官方文档地址：https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html")]),t._v(" "),a("p",[t._v("相比于以前的命令式编程，函数式编程可以让代码的逻辑更清晰更优雅，比如同样的逻辑用 Java 8 的 Stream 方式写就是：")]),t._v(" "),a("p",[t._v("List"),a("Number",[t._v(" results = collection.stream()\n.filter(n -> n > 5)\n.collect(Collectors.toList());")])],1),t._v(" "),a("p",[t._v("又比如：")]),t._v(" "),a("p",[t._v("在java8之前，如果需要建立一个线程，很大可能会写出下面的代码")]),t._v(" "),a("p",[t._v('new Thread(new Runnable()) {\n@Override\npublic void run() {\nSystem.out.println("Hello World!");\n}\n}).start();')]),t._v(" "),a("p",[t._v("但是Java8引入Lambda之后，也许这样写会更好：")]),t._v(" "),a("p",[t._v('new Thread(\n() -> System.out.println("Hello world!");\n);\n总结\n命令式编程：传统高级语言编程方式，聚焦计算机执行的步骤，编程中明确地指出每一步该怎么做。')]),t._v(" "),a("p",[t._v("声明式编程：描述目标编程，是告诉计算机需要计算“什么”而不是“如何”去计算。")]),t._v(" "),a("p",[t._v("函数式编程：函数市编程类似为自定义的声明式，也只关注做什么而不是怎么做，特点是“函数是主体”，可以看成将函数作为编程的一部分将命令式转变成声明式的编程方式。")])])}),[],!1,null,null,null);a.default=_.exports}}]);