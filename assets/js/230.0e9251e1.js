(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{642:function(a,s,t){"use strict";t.r(s);var r=t(1),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"内存池与jvm内存模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存池与jvm内存模型"}},[a._v("#")]),a._v(" "),s("strong",[a._v("内存池与JVM内存模型")])]),a._v(" "),s("p",[a._v("可以这样理解：JVM内存模型其实就是JVM在启动的时候从操作系统内存中要了一块大内存，然后将这个大内存分成五个区域：方法区、堆区、虚拟机栈、本地方法栈、程序计数器。")]),a._v(" "),s("p",[a._v("注意区分JVM内存模型与JMM（Java Memory Model）")]),a._v(" "),s("p",[a._v("这次课的目标就是把这张图讲透")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1596509567131-06914878-4b73-44b8-8aab-e16c18db0400.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_53%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("h2",{attrs:{id:"四个名词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四个名词"}},[a._v("#")]),a._v(" 四个名词")]),a._v(" "),s("h4",{attrs:{id:"class文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class文件"}},[a._v("#")]),a._v(" class文件")]),a._v(" "),s("p",[a._v("即硬盘上的.class文件")]),a._v(" "),s("h4",{attrs:{id:"class-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-content"}},[a._v("#")]),a._v(" class content")]),a._v(" "),s("p",[a._v("类加载器将硬盘上的.class文件读入内存中的那一块内存区域")]),a._v(" "),s("h4",{attrs:{id:"class对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class对象"}},[a._v("#")]),a._v(" Class对象")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" clazz "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Test_22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[a._v("#")]),a._v(" 对象")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Test_22")]),a._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Test_22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"jvm内存模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存模型"}},[a._v("#")]),a._v(" JVM内存模型")]),a._v(" "),s("h4",{attrs:{id:"方法区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法区"}},[a._v("#")]),a._v(" 方法区")]),a._v(" "),s("p",[a._v("需要搞清楚方法区、永久代、元空间三个名词之间的关系")]),a._v(" "),s("p",[a._v("方法区是规范，永久代、元空间是具体实现。或者说，方法区是Java中的接口，永久代、元空间是Java中接口的实现类。")]),a._v(" "),s("p",[a._v("再说下永久代、元空间之间的区别")]),a._v(" "),s("p",[a._v("永久代：jdk8之前方法区的实现，在堆中，用于存放类的元信息，及InstanceKlass类的实例")]),a._v(" "),s("p",[a._v("元空间：jdk8及之后方法区的实现，在OS内存中，用于存放类的元信息")]),a._v(" "),s("h4",{attrs:{id:"虚拟机栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈"}},[a._v("#")]),a._v(" 虚拟机栈")]),a._v(" "),s("p",[a._v("JVM是软件模拟的虚拟机，基于栈运行")]),a._v(" "),s("p",[a._v("虚拟机栈中又有很多栈帧，栈帧又被分成了其他区域。理解虚拟机栈的核心就是理解栈帧中的这几个区域")]),a._v(" "),s("p",[a._v("1、局部变量表")]),a._v(" "),s("p",[a._v("2、操作数栈")]),a._v(" "),s("p",[a._v("3、动态链接")]),a._v(" "),s("p",[a._v("4、返回地址")]),a._v(" "),s("p",[a._v("5、附加信息")]),a._v(" "),s("p",[s("strong",[a._v("具体细节见课堂上操作实战")])]),a._v(" "),s("h4",{attrs:{id:"程序计数器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[a._v("#")]),a._v(" 程序计数器")]),a._v(" "),s("p",[a._v("字节码指令前面的index")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1596510513878-d096ce7e-a560-445b-851a-640c6b3742e8.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_12%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("h4",{attrs:{id:"堆区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆区"}},[a._v("#")]),a._v(" 堆区")]),a._v(" "),s("p",[a._v("内存模型中最核心的区域，也是JVM调优重点关注的区域")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1596510550283-18121f9f-0607-4d53-a2ee-8aa8e10b2b16.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("h4",{attrs:{id:"本地方法栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈"}},[a._v("#")]),a._v(" 本地方法栈")]),a._v(" "),s("p",[a._v("JAVA通过JNI调用C、C++动态链接库需要的栈，随着socket的发展，JNI技术已经用得非常非常少。")]),a._v(" "),s("h2",{attrs:{id:"this指针是何时赋值的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this指针是何时赋值的"}},[a._v("#")]),a._v(" this指针是何时赋值的")]),a._v(" "),s("p",[a._v("执行引擎在执行带有操作数的字节码指令时，会有一个构造运行环境的过程。this指针就是在构造运行环境过程中实现的")]),a._v(" "),s("p",[s("strong",[a._v("具体细节见课堂上操作实战")])]),a._v(" "),s("h2",{attrs:{id:"之间的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#之间的关系"}},[a._v("#")]),a._v(" 之间的关系")]),a._v(" "),s("h4",{attrs:{id:"虚拟机栈与方法区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈与方法区"}},[a._v("#")]),a._v(" 虚拟机栈与方法区")]),a._v(" "),s("p",[a._v("如何理解虚拟机堆方法区的引用：动态链接")]),a._v(" "),s("h4",{attrs:{id:"虚拟机栈与堆区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈与堆区"}},[a._v("#")]),a._v(" 虚拟机栈与堆区")]),a._v(" "),s("p",[a._v("如何理解虚拟机栈对堆区的引用：局部变量")]),a._v(" "),s("h4",{attrs:{id:"方法区与堆区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法区与堆区"}},[a._v("#")]),a._v(" 方法区与堆区")]),a._v(" "),s("p",[a._v("如何理解方法区与堆区的双向引用：")]),a._v(" "),s("ul",[s("li",[a._v("方法区->堆区：静态引用类型的属性")]),a._v(" "),s("li",[a._v("堆区->方法区：klass pointer")])]),a._v(" "),s("p",[s("strong",[a._v("具体细节见课堂上操作实战")])]),a._v(" "),s("h2",{attrs:{id:"练习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[a._v("#")]),a._v(" 练习")]),a._v(" "),s("p",[a._v("1、将课堂上的知识点整理成笔记、文章")]),a._v(" "),s("p",[a._v("2、如果有能力，可以使用C、C++实现一套自己的JVM内存模型")])])}),[],!1,null,null,null);s.default=e.exports}}]);