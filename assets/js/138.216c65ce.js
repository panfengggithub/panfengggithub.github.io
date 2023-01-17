(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{524:function(a,s,r){"use strict";r.r(s);var t=r(1),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"springioc必须知道的东西"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springioc必须知道的东西"}},[a._v("#")]),a._v(" **SpringIOC必须知道的东西")]),a._v(" "),s("h2",{attrs:{id:"springioc必须知道的东西-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springioc必须知道的东西-2"}},[a._v("#")]),a._v(" SpringIOC必须知道的东西")]),a._v(" "),s("h3",{attrs:{id:"写在前面的话"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在前面的话"}},[a._v("#")]),a._v(" 写在前面的话")]),a._v(" "),s("p",[a._v("Spring 是一个轻量级的企业级应用开发框架，经年累月的迭代spring已经包含了很多模块。其中包括springBoot，springframework,springdata,springcloud，博主想写一点关于spring全家桶的东西包括spring全家桶技术应用，如何看spring官网学习，如何看spring的源码。但是写博客是个技术活，而且东西比较多，希望我可以坚持下来每天写一点。")]),a._v(" "),s("p",[a._v("本文是基于spring5的知识分析，比如后面的源码、比如官网。如果你看到的源码和官网和博文有出入可能是spring更新了，但是如果时间相差不大讲道理更新的也不多。")]),a._v(" "),s("h3",{attrs:{id:"认识spring官网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识spring官网"}},[a._v("#")]),a._v(" 认识spring官网")]),a._v(" "),s("p",[a._v("https://spring.io/ 是spring的官网首页，图1")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576050971579-f6bc0ed3-8411-45b9-876a-c14f87d37214.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_47%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("红色标记处有四个连接分别是:")]),a._v(" "),s("ul",[s("li",[a._v("**projects ：**spring公司所有的项目，好比apache公司也有很多项目，比如经典的tomcat、struts2、ibatis。点击project可以浏览到spring公司所有的项目，每个项目的文档都非常详细。")]),a._v(" "),s("li",[a._v("**guides：**教程，比如spring webscocket，spring提供了一个demo，包含了代码供你学习")]),a._v(" "),s("li",[a._v("**blog：**spring公司每次发布新版本会在这里发布一下博客")]),a._v(" "),s("li",[a._v("**search：**搜索，站内搜索，博主没用过，猜的。")])]),a._v(" "),s("p",[a._v("那么作为学习者该如何通过spring官网来学习spring呢？博主的建议是通过projects这个入口找到对应文档来学习。那么有的程序猿哥哥就会抱怨自己英文水平不好（有道翻译了解一下）。")]),a._v(" "),s("h3",{attrs:{id:"springioc文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springioc文档"}},[a._v("#")]),a._v(" springIOC文档")]),a._v(" "),s("p",[a._v("点击projects可以看到spring项目所有的项目，那么的IOC的文档在哪里呢？图2")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051180150-82aad70f-7069-4d13-8033-ecc5e95fa5ca.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_38%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("上图可以看到在spring framework项目的介绍里包含了一个叫做dependency injection的模块，也就是依赖注入(DI)，所谓的依赖注入就是我们常常说的IOC，关于IOC和DI到底有什么联系？下文有解释。继而点开spring framework连接，看到图3：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051186021-cfab6b14-59ca-4060-a7b1-2dab4faaf351.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_42%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("Features是介绍springframework项目的所有特性，也可以理解他所包含的模块，其中红色标记地方可以知道我们的DI和AOP的文档包含在Core technologies（核心技术）里面。当然下面还有springMVC和spring webflux的文档，这些我会后续的文章中来分析。点击Core technologies链接图4：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051195283-380e85de-3c09-49b1-a77f-5ee3939e8950.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_26%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("文档一共有9个目录，其中第一个目录就是springIOC的文档，第五个是AOP的文档。现在你可以开始看官方文档来学习springIOC技术了。")]),a._v(" "),s("h3",{attrs:{id:"关于ioc的一些概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于ioc的一些概念"}},[a._v("#")]),a._v(" 关于IOC的一些概念")]),a._v(" "),s("h4",{attrs:{id:"什么是ioc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是ioc"}},[a._v("#")]),a._v(" 什么是IOC？")]),a._v(" "),s("p",[s("strong",[a._v("inversion of Contro")])]),a._v(" "),s("p",[s("strong",[a._v("控制反转")]),a._v("：对对象的实例化控制权反转给容器，是一种编程目标或者标准。比如我们平常对于一个对象的实例化一般是通过手动去new，这样对象的实例化控制权是由应用程序控制的。所谓的反转，即把这种权利反转给一个容器，而应用程序只需要提供对象的类型即可。")]),a._v(" "),s("h4",{attrs:{id:"为什么要用ioc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用ioc"}},[a._v("#")]),a._v(" 为什么要用IOC")]),a._v(" "),s("ul",[s("li",[a._v("第一：对象的实例化不是一件简单的事情，比如对象的关系比较复杂，依赖关系往往需要程序员去维护，这是一件非常头疼的事。")]),a._v(" "),s("li",[a._v("第二：解耦，由容器去维护具体的对象")]),a._v(" "),s("li",[a._v("第三：托管了类的产生过程，比如我们需要在类的产生过程中做一些处理，最直接的例子就是代理，如果有容器程序可以把这部分过程交给容器，应用程序则无需去关心类是如何完成代理的")])]),a._v(" "),s("h4",{attrs:{id:"ioc和di的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ioc和di的关系"}},[a._v("#")]),a._v(" IOC和DI的关系")]),a._v(" "),s("p",[a._v("诚如前面说的IOC是一种编程目标或者标准，那么如何实现这个目标或者标准呢？可以使用DI（依赖注入）或者DL（依赖查找）当然还有其他的比如依赖拖拽。这就好比你需要找一个女朋友，标准是什么呢？女的活的？那么实现了这些标准的女生有哪些呢？什么刘亦菲啊，唐嫣啊等等。这里的IOC相当于女的活的 ，DI和DL相当于刘亦菲唐嫣 在spring当中实现IOC的这个目标用的就是DI这个技术，至于DL本文不讨论，反正他也能实现IOC")]),a._v(" "),s("h4",{attrs:{id:"什么是di"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是di"}},[a._v("#")]),a._v(" 什么是DI")]),a._v(" "),s("p",[a._v("如上文所说DI的全称"),s("strong",[a._v("dependency injection")]),a._v("，依赖注入")]),a._v(" "),s("ul",[s("li",[a._v("依赖：对象之间的依赖关系，比如类User中有一个Order类的属性如此我们认为User依赖了Order。")]),a._v(" "),s("li",[a._v("注入：容器把依赖对象填充到被依赖对象的过程叫做注入，比如容器把Order实例化，然后把Order通过各种方式 填充到User类中Order属性的过程叫做注入。这里的各种方式 分为两种方式分别是构造方法注入和setter注入，以后我会详细介绍。")]),a._v(" "),s("li",[a._v("容器 ：如何理解容器呢？顾名思义，你可以理解他就是一个能够容纳对象的器皿。在程序中可以体现为一个集合对象，在spring当中这个集合对象就是一个map，后面会详细介绍。")])]),a._v(" "),s("h3",{attrs:{id:"spring的编码风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring的编码风格"}},[a._v("#")]),a._v(" Spring的编码风格")]),a._v(" "),s("p",[a._v("为什么会有这个标题？spring不是采用java的语法吗？为什么还有编码风格一说，其实不难理解。比如基于java语法去描述一些元数据可以有多种方法。xml、properties、annotation等等。")]),a._v(" "),s("p",[a._v("举个栗子：程序定义了一个类User")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("现在需要把这个类在理论上和数据库中的一张表关联起来，程序改如何体现呢？")]),a._v(" "),s("ul",[s("li",[a._v("可以定义一个xml用来描述类和表之间的关系，比如hibernate和mybatais就是典型")]),a._v(" "),s("li",[a._v("可以定义一个properties文件来描述类和表之间的关系")]),a._v(" "),s("li",[a._v("可以自定义annotation来描述类和表之间的关系，hibernate和mybatis也有这样做")]),a._v(" "),s("li",[a._v("可以约定好规则，比如类名就是表明，字段名就是字段名，即约定俗成")])]),a._v(" "),s("p",[a._v("栗子举完了，回到正题-spring中到底有几种编码风格呢？")]),a._v(" "),s("h4",{attrs:{id:"schema-based-aop-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema-based-aop-support"}},[a._v("#")]),a._v(" Schema-based AOP Support")]),a._v(" "),s("p",[a._v("即所谓的xml风格")]),a._v(" "),s("h4",{attrs:{id:"java-based-container-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-based-container-configuration"}},[a._v("#")]),a._v(" Java-based Container Configuration")]),a._v(" "),s("p",[a._v("确切的说是spring3之后才支持的一种风格，即利用java代码编程式风格，简称javaconfig技术")]),a._v(" "),s("h4",{attrs:{id:"annotation-based-container-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#annotation-based-container-configuration"}},[a._v("#")]),a._v(" Annotation-based Container Configuration")]),a._v(" "),s("p",[a._v("即所谓的注解风格的编程风格（基于注解的编程风格需要借助xml，javaconfig技术开启支持）")]),a._v(" "),s("h4",{attrs:{id:"如何选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何选择"}},[a._v("#")]),a._v(" 如何选择")]),a._v(" "),s("p",[a._v("这三种风格在spring官网都有相应的文档说明，举个图5栗子吧")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051295373-7b496f4b-e4e3-4763-981d-7792437cc05c.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_20%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("这三种风格到底孰优孰劣呢？这个问题就好比问java和php到底哪门语言好？又好比问苍某人的视频和吉尺某人的视频哪个好看一样。知道的人都知道这个和个人的观影心情以及个人审美有关系。但是博主经年累月的开发过程中对xml已经深恶痛绝，只要能不使用xml便不使用。故而后面的文章中大部分代码都是采用注解+javaconfig技术来实现。")]),a._v(" "),s("p",[a._v("再来看看spring官网对于这几种风格如何评价的呢？图6栗子：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051305259-8436da41-e23f-4050-83ef-b0bd75c742df.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_47%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("上面这个栗子是spring官网在解释注解风格编程方式的第一段文字。非常醒目的标题：**Are annotations better than XML for configuring Spring?**在配置Spring时，注释优于XML吗？下面他做了详细的比较，甚至可以三者混合使用，实际开发中经常都是混合使用的，看不懂的同学有道翻译了解一下。")]),a._v(" "),s("h3",{attrs:{id:"spring-hello-world"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-hello-world"}},[a._v("#")]),a._v(" Spring hello world")]),a._v(" "),s("h4",{attrs:{id:"文档的缺陷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档的缺陷"}},[a._v("#")]),a._v(" 文档的缺陷")]),a._v(" "),s("p",[a._v("如果你对上面的基本概念都有了了解，可以来尝试采用maven开发一个spring应用程序了，如果对于maven不熟悉，可以自己学一下。")]),a._v(" "),s("p",[a._v("但是在开发一个spring hello程序之前有个很大的问题，pom文件中我们该加入哪些"),s("strong",[a._v("依赖")]),a._v("？")]),a._v(" "),s("ul",[s("li",[a._v("这里maven的依赖和上文提到spring中对象依赖不是一个东西")]),a._v(" "),s("li",[a._v("maven的依赖可以理解为jar")])]),a._v(" "),s("p",[a._v("回到刚刚的问题，如果你想开发一个spring的hello world，我们应该加入哪些依赖呢？spring5提供的文档是一个连接入口图7：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051359254-83edd7d5-08d5-48e5-b01f-68214f605056.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_42%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("点进去之后你可以根据情况选择通过spring官网去帮你构建一个项目，但是他是基于springboot，这点很烦，作为一个新手可能我还不需要用springboot:，图8")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051349914-47a05dd2-f350-4b7f-a881-c24d46beb5f0.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_46%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("我找遍了spring5的官网没有看到一个不基于springboot的hello world的demo。那么怎么办？我早些看过spring4的文档，在spring4的springframework的首页注意是首页 和spring4springframework的文档中都有关于如何用maven来构建一个hello world的说明。")]),a._v(" "),s("h5",{attrs:{id:"springframework首页和spring文档说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springframework首页和spring文档说明"}},[a._v("#")]),a._v(" Springframework首页和Spring文档说明")]),a._v(" "),s("p",[a._v("说明是spring framework首页？顾名思义，就是你点spring framework这个项目看到首页，如上面的图7。spring文档？具体的模块，具体的技术文档如上面的图4。")]),a._v(" "),s("p",[a._v("如何看spring4 的文档？图9")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051379580-24cbf165-2fb9-4168-b98b-96b7cb487820.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_41%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("h5",{attrs:{id:"spring4的文档和5还是有区别的-个人跟喜欢5的文档-比较清晰。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring4的文档和5还是有区别的-个人跟喜欢5的文档-比较清晰。"}},[a._v("#")]),a._v(" Spring4的文档和5还是有区别的，个人跟喜欢5的文档，比较清晰。")]),a._v(" "),s("p",[a._v("回到正题，在spring4的文档中有一段非常重要的话")]),a._v(" "),s("p",[a._v("If you are using Maven for dependency management you don’t even need to supply the logging dependency explicitly. For example, to create an application context and use dependency injection to configure an application, your Maven dependencies will look like this")]),a._v(" "),s("p",[a._v("意思是如果你需要配置依赖注入的程序，仅仅需要加入一个spring-context的依赖便可以了图10")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051403630-23767b83-7ac3-4325-aa08-ed6d71b42ffd.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_43%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("为什么加入这个依赖就可以呢？引用spring4文档中的一句话")]),a._v(" "),s("p",[a._v("The Context (spring-context) module builds on the solid base provided by the Core and Beans modules")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051430632-ad0a0240-7d9e-4553-a1c1-6934aedfdcfd.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_37%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("意思我们的context依赖了bean和core，对于了解过spring的程序员来说，就能解释上面为什么加context一个依赖便可以完成配置依赖注入的问题了。")]),a._v(" "),s("h5",{attrs:{id:"spring4更适合入门阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring4更适合入门阅读"}},[a._v("#")]),a._v(" Spring4更适合入门阅读")]),a._v(" "),s("p",[a._v("个人觉得spring5的文档如果你不熟悉springboot可能读来意义不大。举个栗子吧，如上文说的spring三种编码风格，其实在spring5当中的体现比较不直观，但是spring4体现的非常直观，一目了然，引用spring4文档中的一句话")]),a._v(" "),s("p",[a._v("XML-based metadata is not the only allowed form of configuration metadata. The Spring IoC container itself is totally decoupled from the format in which this configuration metadata is actually written. These days many developers choose Java-based configuration for their Spring applications")]),a._v(" "),s("p",[a._v("意思spring利用xml来配置元数据，但是不是唯一的一种形式，还运行我们使用java-based（上文所说的javaconfig技术）来配置应用程序。")]),a._v(" "),s("p",[a._v("还有更加直观的说明")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1576051444110-0c2af655-ffda-4b26-8515-7ee12f9957dd.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_44%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);