(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{495:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"三-自动注入与精确注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-自动注入与精确注入"}},[t._v("#")]),t._v(" （三）自动注入与精确注入")]),t._v(" "),a("p",[t._v("上篇文章我们已经学习了1.4小结中关于依赖注入跟方法注入的内容。这篇文章我们继续学习这结中的其他内容，顺便解决下我们上篇文章留下来的一个问题-----注入模型。")]),t._v(" "),a("p",[t._v("前言：")]),t._v(" "),a("p",[t._v("在看下面的内容之前，我们先要对自动注入及精确注入有一个大概的了解，所谓精确注入就是指，我们通过构造函数或者setter方法指定了我们对象之间的依赖，也就是我们上篇文章中讲到的依赖注入，然后Spring根据我们指定的依赖关系，精确的给我们完成了注入。那么自动注入是什么？我们看下面一段代码：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans http://www.springframework.org/schema/dbeans/spring-beans.xsd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.dmz.official.service.AutoService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autowire")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("byType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.dmz.official.service.DmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DmzService")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DmzService")]),t._v(" dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注入dmzService"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tservice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DmzService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Main03")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassPathXmlApplicationContext")]),t._v(" cc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassPathXmlApplicationContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("在上面的例子中我们可以看到")]),t._v(" "),a("ol",[a("li",[t._v("我们没有采用注解"),a("code",[t._v("@Autowired")]),t._v("进行注入")]),t._v(" "),a("li",[t._v("XML中没有指定属性标签"),a("code",[t._v("<property>")])]),t._v(" "),a("li",[t._v("没有使用构造函数")])]),t._v(" "),a("p",[t._v("但是，打印结果如下：")]),t._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[t._v("注入dmzServicecom.dmz.official.service.DmzService@73a8dfcc  // 这里完成了注入\ncom.dmz.official.service.AutoService@1963006a\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("可能细心的同学已经发现了，在"),a("code",[t._v("AutoService")]),t._v("的标签中我们新增了一个属性"),a("code",[t._v('autowire="byType"')]),t._v(",那么这个属性是什么意思呢？为什么加这个属性就能帮我们完成注入呢？不要急，我们带着问题继续往下看。")]),t._v(" "),a("h2",{attrs:{id:"自动注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动注入"}},[t._v("#")]),t._v(" 自动注入：")]),t._v(" "),a("p",[t._v("这部分内容主要涉及官网中的"),a("a",{attrs:{href:"https://docs.spring.io/spring/docs/5.2.1.RELEASE/spring-framework-reference/core.html#beans-autowired-exceptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.4.5"),a("OutboundLink")],1),t._v("小结。")]),t._v(" "),a("p",[t._v("我们先看官网上怎么说的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1588229209228-15f2232d-224d-4d1a-bf28-a5fe82968cf0.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_42%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"自动注入的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动注入的优点"}},[t._v("#")]),t._v(" 自动注入的优点：")]),t._v(" "),a("p",[t._v("大概翻译如下：")]),t._v(" "),a("p",[t._v("Spring可以自动注入互相协作的bean之间的依赖。自动注入有以下两个好处：")]),t._v(" "),a("ul",[a("li",[t._v("自动注入能显著的减少我们指定属性或构造参数的必要。这个不难理解，我们在上篇文章中讲过了，依赖注入的两种方式，setter方法跟构造函数，见上篇文章"),a("RouterLink",{attrs:{to:"/blogs/back/java/java后台框架/Spring官网阅读（二）依赖注入及方法注入/Spring官网阅读（二）依赖注入及方法注入.html#dep"}},[t._v("依赖注入")]),t._v("。在前言中的例子我们也能发现，我们并不需要指定属性或构造参数")],1),t._v(" "),a("li",[t._v("自动装配可以随着对象的演化更新配置。例如，如果需要向类添加依赖项，则可以自动满足该依赖项，而不需要修改配置。因此，自动装配在"),a("strong",[t._v("开发过程")]),t._v("中特别有用，但是当我们的代码库变的稳定时，自动装配也不会影响我们将装配方式切换到"),a("strong",[t._v("精确注入")]),t._v("（这个词是我根据官网阅读加自己理解翻译过来的，也就是官网中的（"),a("strong",[t._v("explicit wiring")]),t._v("）")])]),t._v(" "),a("h2",{attrs:{id:"注入模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注入模型"}},[t._v("#")]),t._v(" 注入模型：")]),t._v(" "),a("p",[t._v("接下来，官网给我们介绍了自动注入的四种模型，如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1588229222636-bcb09ac0-5a08-439e-8489-698df5e224fc.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_42%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("p",[t._v("我们一一进行解析并测试：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("no")])])]),t._v(" "),a("p",[t._v("这是目前Spring默认的注入模型，也可以说默认情况下Spring是关闭自动注入，必须要我们通过setter方法或者构造函数完成依赖注入，并且Spring也不推荐修改默认配置。我们使用IDEA时也可以看到")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1588229250658-e2acc210-66db-40a6-98e8-e09c259e33a7.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_31%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("p",[t._v("用红线框出来的部分建议我们使用精确的方式注入依赖。")]),t._v(" "),a("p",[t._v("从上面来说，Spring自动注入这种方式在我们实际开发中基本上用不到，但是为了更好的理解跟学习Spring源码，我们也是需要好好学习这部分知识的。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("byName")])])]),t._v(" "),a("p",[t._v("这种方式，我们为了让Spring完成自动注入需要提供两个条件")]),t._v(" "),a("ol",[a("li",[t._v("提供setter方法")]),t._v(" "),a("li",[t._v("如果需要注入的属性为"),a("code",[t._v("xxx")]),t._v(",那么setter方法命名必须是"),a("code",[t._v("setXxx")]),t._v(",也就是说，命名必须规范")])]),t._v(" "),a("p",[t._v("在找不到对应名称的bean的情况下，Spring也不会报错，只是不会给我们完成注入。")]),t._v(" "),a("p",[t._v("测试代码：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//记得需要将配置信息修改为：<bean id="auto" class="com.dmz.official.service.AutoService" \t\t   autowire="byName"/>')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DmzService")]),t._v(" dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * \tsetXXX,Spring会根据XXX到容器中找对应名称的bean,找到了就完成注入\n \t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDmzService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DmzService")]),t._v(" dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注入dmzService"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tservice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("另外我在测试的时候发现，这种情况下，如果我们提供的参数不规范也不会完成注入的，如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DmzService")]),t._v(" dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// indexService也被Spring所管理")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IndexService")]),t._v(" indexService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * setXXX,Spring会根据XXX到容器中找对应名称的bean,找到了就完成注入\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDmzService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DmzService")]),t._v(" dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IndexService")]),t._v(" indexService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注入dmzService"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dmzService "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dmzService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("本以为这种情况Spring会注入dmzService，indexService为null，实际测试过程中发现这个set方法根本不会被调用，说明Spring在选择方法时，还对参数进行了校验，byName这种注入模型下，参数只能是我们待注入的类型且只能有一个")]),t._v(" "),a("p",[t._v("●byType")]),t._v(" "),a("p",[t._v('测试代码跟之前唯一不同的就是修改配置autowire="byType",这里我们测试以下三种异常情况')]),t._v(" "),a("p",[t._v("1找不到合适类型的bean，发现不报异常，同时不进行注入")]),t._v(" "),a("p",[t._v("2找到了多个合适类型的bean，Spring会直接报错Caused by: org.springframework.beans.factory.NoUniqueBeanDefinitionException: No qualifying bean of type 'com.dmz.official.service.DmzService' available: expected single matching bean but found 2: dmzService,dmzService2")]),t._v(" "),a("p",[t._v("3set方法中有两个参数，切两个参数都能找到唯一一个类型符合的bean，不报异常，也不进行注入")]),t._v(" "),a("p",[t._v("另外需要说明的是，我在测试的过程，将set方法仅仅命名为set,像这样public void set(DmzService dmzService),这种情况下Spring也不会进行注入")]),t._v(" "),a("p",[t._v("我们可以发现，对于这两种注入模型都是依赖setter方法完成注入的，并且对setter方法命名有一定要求（只要我们平常遵从代码书写规范，一般也不会踩到这些坑）。第一，不能有多个参数；第二，不能仅仅命名为set")]),t._v(" "),a("p",[t._v("●constructor")]),t._v(" "),a("p",[t._v("当我们使用这种注入模型时，Spring会根据构造函数查找有没有对应参数名称的bean,有的话完成注入（跟前文的byName差不多），如果根据名称没找到，那么它会再根据类型进行查找，如果根据类型还是没找到，就会报错。")]),t._v(" "),a("p",[t._v("自动注入的缺陷：")]),t._v(" "),a("p",[t._v("这里不得不说一句，Spring官网在这一章节有三分之二的内容是在说自定注入的缺陷以及如何将一个类从自动注入中排除，结合默认情况下自动注入是关闭的（默认注入模型为no），可以说明，在实际使用情况中，Spring是非常不推荐我们开启自动注入这种模型的。从官网中我们总结自动注入有以下几个缺陷：")]),t._v(" "),a("p",[t._v("●精确注入会覆盖自动注入。并且我们不能注入基本数据类型，字符串，Class类型（这些数据的数组也不行）。而且这是Spring故意这样设计的")]),t._v(" "),a("p",[t._v("●自动注入不如精确注入准确。而且我们在使用自动注入时，对象之间的依赖关系不明确")]),t._v(" "),a("p",[t._v("●对于一些为Spring容器生成文档的工具，无法获取依赖关系")]),t._v(" "),a("p",[t._v("●容器中的多个bean定义可能会与自动注入的setter方法或构造函数参数指定的类型匹配。对于数组、集合或映射实例，这可能不会产生什么问题。但是，对于期望单个值的依赖项，我们无法随意确定到底有谁进行注入。如果没有唯一的bean定义可用，则会抛出异常")]),t._v(" "),a("p",[t._v("如何将Bean从自动注入中排除？")]),t._v(" "),a("p",[t._v("这里主要用到autowire-candidate这个属性，我们要将其设置为false，这里需要注意以下几点：")]),t._v(" "),a("p",[t._v("1这个设置只对类型注入生效。这也很好理解，例如我们告诉Spring要自动注入一个indexService,同时我们又在indexService的配置中将其从自动注入中排除，这就是自相矛盾的。所以在byName的注入模型下，Spring直接忽略了autowire-candidate这个属性")]),t._v(" "),a("p",[t._v("2autowire-candidate=false这个属性代表的是，这个bean不作为候选bean注入到别的bean中，而不是说这个bean不能接受别的bean的注入。例如在我们上面的例子中我们对AutoService进行了如下配置：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.dmz.official.service.AutoService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autowire")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("byType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autowire-candidate")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("代表的是这个bean不会被注入到别的bean中，但是"),a("code",[t._v("dmzService")]),t._v("任何会被注入到"),a("code",[t._v("AutoService")]),t._v("中")]),t._v(" "),a("p",[t._v("另外需要说明的是，对于自动注入，一般我们直接在顶级的标签中进行全局设置，如下：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\x3c!--在这里进行配置--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n default-autowire="byName">\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("自动注入跟精确注入的比较总结：")]),t._v(" "),a("p",[t._v("连同上篇文章"),a("a",{attrs:{href:"https://www.yuque.com/renyong-jmovm/Spring%E5%AE%98%E7%BD%91%E9%98%85%E8%AF%BB%EF%BC%88%E4%BA%8C%EF%BC%89%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E5%8F%8A%E6%96%B9%E6%B3%95%E6%B3%A8%E5%85%A5/Spring%E5%AE%98%E7%BD%91%E9%98%85%E8%AF%BB%EF%BC%88%E4%BA%8C%EF%BC%89%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E5%8F%8A%E6%96%B9%E6%B3%95%E6%B3%A8%E5%85%A5.md#dep",target:"_blank",rel:"noopener noreferrer"}},[t._v("依赖注入"),a("OutboundLink")],1),t._v("，我画了下面一个图：")]),t._v(" "),a("p",[t._v("针对的是一个对象")]),t._v(" "),a("p",[t._v("或者一批对象")]),t._v(" "),a("p",[t._v("no")]),t._v(" "),a("p",[t._v("byName")]),t._v(" "),a("p",[t._v("自动注入")]),t._v(" "),a("p",[t._v("四种注入模型")]),t._v(" "),a("p",[t._v("(AutowiringCollaborators)")]),t._v(" "),a("p",[t._v("byType")]),t._v(" "),a("p",[t._v("constrcutor")]),t._v(" "),a("p",[t._v("Spring让对象进行协作")]),t._v(" "),a("p",[t._v("针对的是对象中的某个崖性")]),t._v(" "),a("p",[t._v("精确注入")]),t._v(" "),a("p",[t._v("的两种方式")]),t._v(" "),a("p",[t._v("或者某些个属性")]),t._v(" "),a("p",[t._v("(Dependencylnjection)")]),t._v(" "),a("p",[t._v("setter方法")]),t._v(" "),a("p",[t._v("两种注入方式")]),t._v(" "),a("p",[t._v("构造函数")]),t._v(" "),a("p",[t._v("针对的是指定对象中的某个方法")]),t._v(" "),a("p",[t._v("方法注入")]),t._v(" "),a("p",[t._v("(MethodInjection)")]),t._v(" "),a("p",[t._v("实现applicationContext接口")]),t._v(" "),a("p",[t._v("三种注入方式")]),t._v(" "),a("p",[t._v("@Lookup注架跟xml配置")]),t._v(" "),a("p",[t._v("XML配置repace-method")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1588229274297-ef8c2b24-cc92-402a-9fde-4711109a3a82.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fresize%2Cw_588%2Climit_0",alt:"image.png"}})]),t._v(" "),a("p",[t._v("●从关注的点上来看，自动注入是针对的整个对象，或者一整批对象。比如我们如果将autoService这个bean的注入模型设置为byName，Spring会为我们去寻找所有符合要求的名字（通过set方法）bean并注入到autoService中。而精确注入这种方式，是我们针对对象中的某个属性，比如我们在autoService中的dmzService这个属性字段上添加了@AutoWired注解，代表我们要精确的注入dmzService这个属性。而方法注入主要是基于方法对对象进行注入。")]),t._v(" "),a("p",[t._v("●我们通常所说byName,byType跟我们在前文提到的注入模型中的byName,byType是完全不一样的。通常我们说的byName,byType是Spring寻找bean的手段。比如，当我们注入模型为constructor时，Spring会先通过名称找对符合要求的bean，这种通过名称寻找对应的bean的方式我们可以称为byName。我们可以将一次注入分为两个阶段，首先是寻找符合要求的bean，其次再是将符合要求的bean注入。也可以画图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1588229285733-639c735b-3a94-48a8-aad8-ad2b5ece7b44.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_17%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fresize%2Cw_368%2Climit_0",alt:"image.png"}})]),t._v(" "),a("p",[t._v("补充（1.4小结的剩余部分）")]),t._v(" "),a("p",[t._v("这部分比较简单，也是1.4小节中剩余的两个小知识，在这篇文章我们也一并学习了~")]),t._v(" "),a("p",[t._v("depends-on：")]),t._v(" "),a("p",[t._v("我们首先要知道，默认情况下，Spring在实例化容器中的对象时是按名称进行自然排序进行实例化的。比如我们现在有A,B,C三个对象，那么Spring在实例化时会按照A,B,C这样的顺序进行实例化。但是在某些情况下我们可能需要让B在A之前完成实例化，这个时候我们就需要使用depends-on这个属性了。我们可以通过形如下面的配置完成：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xx.xx.A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("depends-on")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xx.xx.B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("或者：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DependsOn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"lazy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lazy"}},[t._v("#")]),t._v(" lazy:")]),t._v(" "),a("p",[t._v("默认情况下，Spring会在容器启动阶段完成所有bean的实例化，以及一系列的生命周期回调。某些情况下，我们")]),t._v(" "),a("p",[t._v("可能需要让某一个bean延迟实例化。这种情况下，我们需要用到"),a("code",[t._v("lazy")]),t._v("属性，有以下两种方式：")]),t._v(" "),a("ol",[a("li",[t._v("XML中bean标签的"),a("code",[t._v("lazy-init")]),t._v("属性")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.something.ExpensiveToCreateBean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lazy-init")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("2."),a("code",[t._v("@Lazy")]),t._v("注解")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 懒加载")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Lazy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("到此为止，官网中"),a("code",[t._v("1.4")]),t._v("小节中的内容我们就全学习完啦！最核心的部分应该就是上文中的这个"),a("a",{attrs:{href:"#jump"}},[t._v("图")]),t._v("了。我们主要总结了Spring让对象产生依赖的方式，同时对各个方式进行了对比。通过这部分的学习，我觉得大家应该对Spring的依赖相关知识会更加系统，这样我们之后学习源码时碰到疑惑也会少很多。")]),t._v(" "),a("p",[t._v("下面我们还要继续学习Spring的官网，比如前面文章提到的"),a("code",[t._v("Beandefinition")]),t._v("到底是什么东西？Spring中的Bean的生命周期回调又是什么？这些在官网中都能找到答案。")])])}),[],!1,null,null,null);a.default=e.exports}}]);