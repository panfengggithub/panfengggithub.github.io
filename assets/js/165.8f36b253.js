(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{551:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"spring中bean的生命周期详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring中bean的生命周期详解"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Spring中Bean的生命周期详解")])]),s._v(" "),a("p",[s._v("Spring最重要的功能就是帮助程序员创建对象（也就是IOC），而启动Spring就是为创建Bean对象做准备，所以我们先明白Spring到底是怎么去创建Bean的，也就是先弄明白Bean的生命周期。")]),s._v(" "),a("p",[s._v("Bean的生命周期就是指："),a("strong",[s._v("在Spring中，一个Bean是如何生成的，如何销毁的？")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1602587965056-87dd226a-0989-42ab-bfab-3fb4868fd4ac.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_70%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"bean的生成过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean的生成过程"}},[s._v("#")]),s._v(" Bean的生成过程")]),s._v(" "),a("h3",{attrs:{id:"_1-生成beandefinition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成beandefinition"}},[s._v("#")]),s._v(" 1. 生成BeanDefinition")]),s._v(" "),a("p",[s._v("Spring启动的时候会进行扫描，会先调用")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" resources "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResourcePatternResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("packageSearchPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("拿到所指定的包路径下的所有文件资源（******.class文件）")]),s._v(" "),a("p",[s._v("然后会遍历每个Resource，为每个Resource生成一个MetadataReader对象，这个对象拥有三个功能：")]),s._v(" "),a("ol",[a("li",[s._v("获取对应的Resource资源")]),s._v(" "),a("li",[s._v("获取Resource对应的class的元数据信息，包括类的名字、是不是接口、是不是一个注解、是不是抽象类、有没有父类，父类的名字，所实现的所有接口的名字，内部类的类名等等。")]),s._v(" "),a("li",[s._v("获取Resource对应的class上的注解信息，当前类上有哪些注解，当前类中有哪些方法上有注解")])]),s._v(" "),a("p",[s._v("在生成MetadataReader对象时，会利用"),a("strong",[s._v("ASM")]),s._v("技术解析class文件，得到类的元数据集信息合注解信息，在这个过程中也会利用ClassLoader去加载注解类（"),a("strong",[s._v("ClassUtils.getDefaultClassLoader()所获得的类加载器")]),s._v("），但是不会加载本类。")]),s._v(" "),a("p",[s._v("有了MetadataReader对象，就相当于有了当前类的所有信息，但是当前类并没有加载，也是可以理解的，真正在用到这个类的时候才加载。")]),s._v(" "),a("p",[s._v("然后利用MetadataReader对象生成一个ScannedGenericBeanDefinition对象，"),a("strong",[s._v("注意此时的BeanDefinition对象中的beanClass属性存储的是当前类的名字，而不是class对象")]),s._v("。（beanClass属性的类型是Object，它即可以存储类的名字，也可以存储class对象）")]),s._v(" "),a("h3",{attrs:{id:"_2-合并beandefinition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-合并beandefinition"}},[s._v("#")]),s._v(" 2. 合并BeanDefinition")]),s._v(" "),a("p",[s._v("如果某个BeanDefinition存在父BeanDefinition，那么则要进行合并")]),s._v(" "),a("h3",{attrs:{id:"_3-加载类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-加载类"}},[s._v("#")]),s._v(" 3. 加载类")]),s._v(" "),a("p",[s._v("有了BeanDefinition之后，后续就会基于BeanDefinition去创建Bean，而创建Bean就必须实例化对象，而实例化就必须先加载当前BeanDefinition所对应的class，在AbstractAutowireCapableBeanFactory类的createBean()方法中，一开始就会调用：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" resolvedClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveBeanClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mbd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" beanName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这行代码就是去加载类，该方法是这么实现的：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mbd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasBeanClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" mbd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBeanClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSecurityManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AccessController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doPrivileged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PrivilegedExceptionAction")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doResolveBeanClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mbd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" typesToMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAccessControlContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doResolveBeanClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mbd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" typesToMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasBeanClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("beanClass "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果beanClass属性的类型是Class，那么就直接返回，如果不是，则会根据类名进行加载（doResolveBeanClass方法所做的事情）")]),s._v(" "),a("p",[s._v("会利用BeanFactory所设置的类加载器来加载类，如果没有设置，则默认使用**ClassUtils.getDefaultClassLoader()**所返回的类加载器来加载。")]),s._v(" "),a("h4",{attrs:{id:"classutils-getdefaultclassloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classutils-getdefaultclassloader"}},[s._v("#")]),s._v(" "),a("strong",[s._v("ClassUtils.getDefaultClassLoader()")])]),s._v(" "),a("ol",[a("li",[s._v("优先获取当前线程中的ClassLoader")]),s._v(" "),a("li",[s._v("如果为空，则获取加载ClassUtils类的类加载器（正常情况下，就是AppClassLoader，但是如果是在Tomcat中运行，那么则会是Tomcat中为每个应用所创建的WebappClassLoader）")]),s._v(" "),a("li",[s._v("如果为空，那么则是bootstrap类加载器加载的ClassUtils类，那则获取系统类加载器进行加载")])]),s._v(" "),a("h3",{attrs:{id:"_4-实例化前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-实例化前"}},[s._v("#")]),s._v(" 4. 实例化前")]),s._v(" "),a("p",[s._v("允许第三方可以不按照Spring的正常流程来创建一个Bean，可以利用InstantiationAwareBeanPostProcessor的postProcessBeforeInstantiation方法来提前返回一个Bean对象，直接结束Bean的生命周期")]),s._v(" "),a("h3",{attrs:{id:"_5-推断构造方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-推断构造方法"}},[s._v("#")]),s._v(" 5. 推断构造方法")]),s._v(" "),a("p",[s._v("单独讲")]),s._v(" "),a("h3",{attrs:{id:"_6-实例化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-实例化"}},[s._v("#")]),s._v(" 6. 实例化")]),s._v(" "),a("p",[s._v("构造方法反射得到一个实例")]),s._v(" "),a("h3",{attrs:{id:"_7-beandefinition的后置处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-beandefinition的后置处理"}},[s._v("#")]),s._v(" 7. BeanDefinition的后置处理")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanPostProcessor")]),s._v(" bp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBeanPostProcessors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MergedBeanDefinitionPostProcessor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MergedBeanDefinitionPostProcessor")]),s._v(" bdp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MergedBeanDefinitionPostProcessor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tbdp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postProcessMergedBeanDefinition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mbd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" beanType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" beanName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这里可以处理BeanDefinition，但是此时实例对象已经生成好了，所以修改beanClass已经没用了，但是可以修改PropertyValues，比如：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LubanMergedBeanDefinitionPostProcessor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MergedBeanDefinitionPostProcessor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postProcessMergedBeanDefinition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RootBeanDefinition")]),s._v(" beanDefinition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" beanType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" beanName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("beanName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\tbeanDefinition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setBeanClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 没用")]),s._v("\n\t\t\tbeanDefinition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPropertyValues")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_8-填充属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-填充属性"}},[s._v("#")]),s._v(" 8. 填充属性")]),s._v(" "),a("p",[s._v("单独讲")]),s._v(" "),a("h3",{attrs:{id:"_9-执行aware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-执行aware"}},[s._v("#")]),s._v(" 9. 执行Aware")]),s._v(" "),a("ol",[a("li",[s._v("((BeanNameAware) bean).setBeanName(beanName);")]),s._v(" "),a("li",[s._v("((BeanClassLoaderAware) bean).setBeanClassLoader(bcl);")]),s._v(" "),a("li",[s._v("((BeanFactoryAware) bean).setBeanFactory(AbstractAutowireCapableBeanFactory."),a("strong",[s._v("this")]),s._v(");")])]),s._v(" "),a("h3",{attrs:{id:"_10-初始化前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-初始化前"}},[s._v("#")]),s._v(" 10. 初始化前")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanPostProcessor")]),s._v(" processor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBeanPostProcessors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" current "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" processor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postProcessBeforeInitialization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" beanName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\tresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_11-初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-初始化"}},[s._v("#")]),s._v(" 11. 初始化")]),s._v(" "),a("ol",[a("li",[s._v("((InitializingBean) bean).afterPropertiesSet();")]),s._v(" "),a("li",[s._v("执行BeanDefinition中指定的初始化方法")])]),s._v(" "),a("h3",{attrs:{id:"_12-初始化后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-初始化后"}},[s._v("#")]),s._v(" 12. 初始化后")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanPostProcessor")]),s._v(" processor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBeanPostProcessors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" current "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" processor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postProcessAfterInitialization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" beanName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\tresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"bean的销毁过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bean的销毁过程"}},[s._v("#")]),s._v(" Bean的销毁过程")]),s._v(" "),a("h3",{attrs:{id:"_1-容器关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-容器关闭"}},[s._v("#")]),s._v(" 1. 容器关闭")]),s._v(" "),a("h3",{attrs:{id:"_2-发布contextclosedevent事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-发布contextclosedevent事件"}},[s._v("#")]),s._v(" 2. 发布ContextClosedEvent事件")]),s._v(" "),a("h3",{attrs:{id:"_3-调用lifecycleprocessor的onclose方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-调用lifecycleprocessor的onclose方法"}},[s._v("#")]),s._v(" 3. 调用LifecycleProcessor的onClose方法")]),s._v(" "),a("h3",{attrs:{id:"_4-销毁单例bean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-销毁单例bean"}},[s._v("#")]),s._v(" 4. 销毁单例Bean")]),s._v(" "),a("ol",[a("li",[s._v("找出所有DisposableBean(实现了DisposableBean接口的Bean)")]),s._v(" "),a("li",[s._v("遍历每个DisposableBean")]),s._v(" "),a("li",[s._v("找出依赖了当前DisposableBean的其他Bean，将这些Bean从单例池中移除掉")]),s._v(" "),a("li",[s._v("调用DisposableBean的destroy()方法")]),s._v(" "),a("li",[s._v("找到当前DisposableBean所包含的inner beans，将这些Bean从单例池中移除掉 (inner bean参考https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#beans-inner-beans)")])]),s._v(" "),a("p",[s._v("这里涉及到一个设计模式："),a("strong",[s._v("适配器模式")])]),s._v(" "),a("p",[s._v("在销毁时，Spring会找出实现了DisposableBean接口的Bean。")]),s._v(" "),a("p",[s._v("但是我们在定义一个Bean时，如果这个Bean实现了DisposableBean接口，或者实现了AutoCloseable接口，或者在BeanDefinition中指定了destroyMethodName，那么这个Bean都属于“DisposableBean”，这些Bean在容器关闭时都要调用相应的销毁方法。")]),s._v(" "),a("p",[s._v("所以，这里就需要进行适配，将实现了DisposableBean接口、或者AutoCloseable接口等适配成实现了DisposableBean接口，所以就用到了DisposableBeanAdapter。")]),s._v(" "),a("p",[s._v("会把实现了AutoCloseable接口的类封装成DisposableBeanAdapter，而DisposableBeanAdapter实现了DisposableBean接口。")])])}),[],!1,null,null,null);a.default=e.exports}}]);