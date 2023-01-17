(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{529:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"spring扩展点的归总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring扩展点的归总"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Spring扩展点的归总")])]),s._v(" "),a("h3",{attrs:{id:"_1-beandefinitionregistrypostprocessor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-beandefinitionregistrypostprocessor"}},[s._v("#")]),s._v(" "),a("strong",[s._v("1 BeanDefinitionRegistryPostProcessor")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinitionRegistryPostProcessor")]),s._v(" \n实现该接口的类需要重写以下方法\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postProcessBeanDefinitionRegistry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinitionRegistry")]),s._v(" registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeansException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nspring 中调用的时机：\n在 spring 初始化容器之后，解析"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" 为一个"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinition")]),s._v(" 之前的时候去执行，\nspring 中有一个开天辟地的类 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConfigurationClassPostProcessor")]),s._v(" 就是实现了该接口，\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConfigurationClassPostProcessor")]),s._v(" 通过重写 这个方法，\n\n第一步：去扫描加了 "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Configuration")]),s._v(" 注解的这些类，判断是否是"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AnnotatedBeanDefinition")]),s._v("类型的，将这些类去打上 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Lite")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Full")]),s._v(" 的属性，以便后续使用\n\n第二步：去实现扫描basePackage下的加了 "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Controller")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v(" 的这些类\n将这些类变成为一个"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinition")]),s._v(" 注册到 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Spring")]),s._v(" 的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinitionMap")]),s._v("中去\n\n第三步： \n去解析 "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@import")]),s._v("  \n实现 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ImportSelector")]),s._v("接口的 \n实现 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ImportBeanDefinitionRegistrar")]),s._v(" 接口的 这些类的方法，将对应的bean 解析为"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinition")]),s._v("，注册到"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinitionMap")]),s._v(" 中\n \n注意： 在新的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Mybatis")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("spring 的框架中，也使用了到了这个接口\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MapperScannerConfigurer")]),s._v(" 这个扫描配置类 也实现了这个接口！\n重写了"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postProcessBeanDefinitionRegistry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 用于创建扫描器对象，去扫描mybatis 里的那些接口转化为"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinition")]),s._v("到容器中去\n\n作用： \n有了参数  registry 的对象，就能手动向spring容器添加 自定义的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinition")]),s._v(" \nregistry  提供了 添加的 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API")]),s._v("，但是一般我们不调用 因为在spring里的执行顺序太早了，笔者没有碰到这种需求\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h3",{attrs:{id:"_2-beanfactorypostprocessor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-beanfactorypostprocessor"}},[s._v("#")]),s._v(" "),a("strong",[s._v("2 BeanFactoryPostProcessor")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanFactoryPostProcessor")]),s._v(" 该接口是 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinitionRegistryPostProcessor")]),s._v("的父接口，\n表示只要实现了上面"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("的接口的类，都必实现了这个接口\n实现该接口的类需要重写以下方法\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postProcessBeanFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConfigurableListableBeanFactory")]),s._v(" beanFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeansException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nspring 中调用的时机：\n在执行完了子类重写的方法之后，也就是扫描了一圈"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinition")]),s._v(" 之后去执行\n我们开天辟地的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConfigurationClassPostProcessor")]),s._v(" 类重写的 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postProcessBeanFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("方法里面干了这些事情\n\n标记为 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Full")]),s._v(" 全配置类的 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinition")]),s._v(" 会在这边做神奇的事情\n我们的"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("APPConfig")]),s._v(" 里面 会有 "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v(" 返回 我们要创建的对象，但是spring是默认单例的\n那如果有 \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n这种情况，spring就会使用"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ASM")]),s._v("框架（"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cglib")]),s._v("动态代理）的方式去解决创建"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bean")]),s._v("的问题\n这里也是一个spring 里面 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOP")]),s._v(" 的具体实现，也是spring中循环注入的一个地方 \n\n\n作用：\n此时"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinitionMap")]),s._v(" 中已经有了大部分"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v("对应 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinition")]),s._v("了，\n我们就可以 通过 beanFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBeanDefinition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在BDMap中的名字"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("来获取"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanDefinition")]),s._v("，\n来设置这些"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BD")]),s._v("属性\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"后置处理器的调用时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后置处理器的调用时机"}},[s._v("#")]),s._v(" "),a("strong",[s._v("后置处理器的调用时机：")])]),s._v(" "),a("h4",{attrs:{id:"第一次调用后置处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一次调用后置处理器"}},[s._v("#")]),s._v(" 第一次调用后置处理器：")]),s._v(" "),a("p",[s._v("作用：判断正在实列化的bean是否需要被代理")]),s._v(" "),a("p",[s._v("org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory")]),s._v(" "),a("p",[s._v("#resolveBeforeInstantiation")]),s._v(" "),a("p",[s._v("后置处理器和方法：")]),s._v(" "),a("p",[s._v("InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation")]),s._v(" "),a("h4",{attrs:{id:"第二次调用后置处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二次调用后置处理器"}},[s._v("#")]),s._v(" 第二次调用后置处理器：")]),s._v(" "),a("p",[s._v("作用：推断创建这个bean的构造方法")]),s._v(" "),a("p",[s._v("org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory")]),s._v(" "),a("p",[s._v("#determineConstructorsFromBeanPostProcessors")]),s._v(" "),a("p",[s._v("后置处理器和方法：")]),s._v(" "),a("p",[s._v("SmartInstantiationAwareBeanPostProcessor#determineCandidateConstructors")]),s._v(" "),a("h4",{attrs:{id:"第三次调用后置处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三次调用后置处理器"}},[s._v("#")]),s._v(" 第三次调用后置处理器：")]),s._v(" "),a("p",[s._v("作用：合并BeanDefinition")]),s._v(" "),a("p",[s._v("org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory")]),s._v(" "),a("p",[s._v("#applyMergedBeanDefinitionPostProcessors")]),s._v(" "),a("p",[s._v("后置处理器和方法：")]),s._v(" "),a("p",[s._v("MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition")]),s._v(" "),a("h4",{attrs:{id:"第四次调用后置处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四次调用后置处理器"}},[s._v("#")]),s._v(" 第四次调用后置处理器：")]),s._v(" "),a("p",[s._v("作用：循环依赖，暴露一个工厂，用这个工厂去获取bean的实例")]),s._v(" "),a("p",[s._v("org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory")]),s._v(" "),a("p",[s._v("#getEarlyBeanReference")]),s._v(" "),a("p",[s._v("后置处理器和方法：")]),s._v(" "),a("p",[s._v("SmartInstantiationAwareBeanPostProcessor#getEarlyBeanReference")]),s._v(" "),a("h4",{attrs:{id:"第五次调用后置处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第五次调用后置处理器"}},[s._v("#")]),s._v(" 第五次调用后置处理器：")]),s._v(" "),a("p",[s._v("作用：属性注入，判断这个BeanDefinition 是否允许属性注入")]),s._v(" "),a("p",[s._v("org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory")]),s._v(" "),a("p",[s._v("#populateBean")]),s._v(" "),a("p",[s._v("后置处理器和方法：")]),s._v(" "),a("p",[s._v("InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation")]),s._v(" "),a("h4",{attrs:{id:"第六次调用后置处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第六次调用后置处理器"}},[s._v("#")]),s._v(" 第六次调用后置处理器：")]),s._v(" "),a("p",[s._v("作用：执行属性注入 @Autowired和@Resource")]),s._v(" "),a("p",[s._v("org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory")]),s._v(" "),a("p",[s._v("#populateBean")]),s._v(" "),a("p",[s._v("后置处理器和方法：")]),s._v(" "),a("p",[s._v("InstantiationAwareBeanPostProcessor#postProcessProperties")]),s._v(" "),a("h4",{attrs:{id:"第七次调用后置处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第七次调用后置处理器"}},[s._v("#")]),s._v(" 第七次调用后置处理器：")]),s._v(" "),a("p",[s._v("作用：调用各种Aware接口和执行@PostConstruct 和我们自己的实现beanPostProcessor的before方法的地方")]),s._v(" "),a("p",[s._v("org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory")]),s._v(" "),a("p",[s._v("#applyBeanPostProcessorsBeforeInitialization")]),s._v(" "),a("p",[s._v("后置处理器和方法：")]),s._v(" "),a("p",[s._v("BeanPostProcessor#postProcessBeforeInitialization")]),s._v(" "),a("h4",{attrs:{id:"第八次调用后置处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第八次调用后置处理器"}},[s._v("#")]),s._v(" 第八次调用后置处理器：")]),s._v(" "),a("p",[s._v("作用：动态代理Proxy和我们自己的实现beanPostProcessor的after方法的地方")]),s._v(" "),a("p",[s._v("org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory")]),s._v(" "),a("p",[s._v("#applyBeanPostProcessorsAfterInitialization")]),s._v(" "),a("p",[s._v("后置处理器和方法：")]),s._v(" "),a("p",[s._v("postProcessAfterInitialization")]),s._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])}),[],!1,null,null,null);a.default=e.exports}}]);