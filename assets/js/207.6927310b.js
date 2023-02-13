(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{621:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jni与实战内存池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jni与实战内存池"}},[s._v("#")]),s._v(" "),a("strong",[s._v("JNI与实战内存池")])]),s._v(" "),a("p",[s._v("我是这样考虑的：这是最后一节课，我们还剩C++的部分基础未讲，这块知识点大家比较容易找到视频学习。在学习C语言、C++的过程中，大家其实最需要的是实战，所以最后一节课我们以实战为主，C++剩余的基础知识靠大家去自学了。")]),s._v(" "),a("h2",{attrs:{id:"实战内存池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战内存池"}},[s._v("#")]),s._v(" 实战内存池")]),s._v(" "),a("p",[s._v("为了节省课堂时间，我又写了一遍。课上我会从搭建项目一步一步让大家看到我们一般是如何使用C++开发出一个庞大的系统的。")]),s._v(" "),a("p",[s._v("这个源码只有内存池，对于基础不是很好的同学，读起来会简单很多。")]),s._v(" "),a("p",[s._v("源码地址：https://gitee.com/luban-ziya/cpp-memory-pool")]),s._v(" "),a("p",[s._v("实战节奏：")]),s._v(" "),a("p",[s._v("1、实现Memory Pool与Memory Chunk的关系")]),s._v(" "),a("p",[s._v("2、检测内存泄漏及输出内存申请位置")]),s._v(" "),a("p",[s._v("3、处理Memory Pool、Memory Chunk、Memory Cell之间的关系")]),s._v(" "),a("p",[s._v("4、整个内存池的释放需要注意的细节")]),s._v(" "),a("h2",{attrs:{id:"jni基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jni基础"}},[s._v("#")]),s._v(" JNI基础")]),s._v(" "),a("p",[s._v("1、生成JNI头文件")]),s._v(" "),a("p",[s._v("Java代码")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyThread")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("native")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" say: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("进入.java文件所在目录执行")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598875022168-615b171a-2c14-4b86-9891-f1fb9c9c2574.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_31%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598875045769-f486e440-f83e-4b89-8ee0-9583d3ab8d13.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_10%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[s._v("2、在Clion中创建一个项目，将这个.h文件拷贝过去（这块有点复杂，仔细看）")]),s._v(" "),a("p",[s._v(".h文件拷过来后会发现报红，那是因为clion找不到这个头文件需要我们配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598875754395-0345ffee-350f-47aa-8b74-894a98815b76.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_23%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[s._v("看哪个目录下有jni.h文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598875801352-7d8de5df-fa76-4f47-93ed-609308436d17.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_28%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[s._v("因为jni.h文件依赖jni_md.h文件，再看哪个目录下有jni_md.h文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598875850811-27db8abc-3575-4276-b64f-9054c1d4ad2c.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[s._v("因为JNI依赖JVM的其他头文件，所以一般用目录")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("/home/ziya/Documents/openjdk/build/linux-x86_64-normal-server-slowdebug/jdk/include\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个目录中没有jni_md.h文件，从它的下级目录拷贝一份")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598876282899-a9998ef6-28ab-46a8-b620-ec2ec7618526.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[s._v("然后修改CMakeLists.txt，加include_directories，这样你写JNI程序，clion的自动提示就可以用了")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('cmake_minimum_required(VERSION 3.16)\nproject(c_mythread C)\n\nset(CMAKE_C_STANDARD 99)\n\ninclude_directories("/home/ziya/Documents/openjdk/build/linux-x86_64-normal-server-slowdebug/jdk/include")\n\nadd_executable(c_mythread main.c com_luban_ziya_jni_MyThread.c)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("3、生成动态链接库")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("/usr/bin/gcc -shared -fpic -I/home/ziya/Documents/openjdk/build/linux-x86_64-normal-server-slowdebug/jdk/include com_luban_ziya_jni_MyThread.c -o /lib/libjni.so\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意：动态链接库需要生成在jvm能加载到的地方，如果不知道放哪，可通过打印参数看jvm默认从哪些位置加载")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java.library.path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4、使用动态链接库")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("App")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadLibrary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jni"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("5、结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598876996435-c651b5fb-5428-45ee-8bb4-72b81715b5de.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_15%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"配置idea、clion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置idea、clion"}},[s._v("#")]),s._v(" 配置Idea、Clion")]),s._v(" "),a("p",[s._v("配置了每次生成JNI头文件、动态链接库就不需要敲命令了")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598877064116-04a6f33f-d4c7-46a3-aeec-31e33465f399.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_17%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598877081983-3006380a-39c3-4ffe-8de0-5997d38ea53f.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[s._v("1、Idea")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598877117923-f46c91dd-d33f-4063-82fe-df6ce954a16b.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598877139576-029ff862-9159-4569-914e-24a0592466c7.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Program")]),s._v("："),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ziya"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Documents")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("openjdk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("build"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x86_64"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("normal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slowdebug"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jdk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("javac\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Arguments")]),s._v("：$"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FileDirRelativeToProjectRoot")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FileName")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("/jni\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("2、配置Clion")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598877239291-3a66f004-29c4-47d4-8582-59a29c93446c.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_25%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/2179815/1598877253600-6ff334f7-66ea-49bf-934f-d36bfc462bcc.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("p",[s._v("Arguments这样填")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("shared\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("fpic\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("I")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ziya"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Documents")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("openjdk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("build"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x86_64"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("normal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slowdebug"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jdk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("include\ncom_luban_ziya_jni_MyThread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("libjni"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("so\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"jni实战多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jni实战多线程"}},[s._v("#")]),s._v(" JNI实战多线程")]),s._v(" "),a("h2",{attrs:{id:"jvm大总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm大总结"}},[s._v("#")]),s._v(" JVM大总结")])])}),[],!1,null,null,null);a.default=e.exports}}]);