(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{556:function(e,t,n){"use strict";n.r(t);var a=n(1),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"applicationcontext启动过程详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#applicationcontext启动过程详解"}},[e._v("#")]),e._v(" "),t("strong",[e._v("ApplicationContext启动过程详解")])]),e._v(" "),t("h2",{attrs:{id:"beanfactorypostprocessor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beanfactorypostprocessor"}},[e._v("#")]),e._v(" BeanFactoryPostProcessor")]),e._v(" "),t("p",[e._v("叫做BeanFactory的后置处理器，和Bean的后置处理器对比理解。")]),e._v(" "),t("p",[e._v("BeanPostProcessor是用来对Bean进行处理的，")]),e._v(" "),t("p",[e._v("BeanFactoryPostProcessor是用来对BeanFactory进行处理的。")]),e._v(" "),t("h2",{attrs:{id:"如何理解refresh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何理解refresh"}},[e._v("#")]),e._v(" 如何理解refresh()？")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n\t * Load or refresh the persistent representation of the configuration,\n\t * which might an XML file, properties file, or relational database schema.\n\t * <p>As this is a startup method, it should destroy already created singletons\n\t * if it fails, to avoid dangling resources. In other words, after invocation\n\t * of that method, either all or no singletons at all should be instantiated.\n\t * @throws BeansException if the bean factory could not be initialized\n\t * @throws IllegalStateException if already initialized and multiple refresh\n\t * attempts are not supported\n\t */")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("refresh")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("throws")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BeansException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IllegalStateException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("这是ConfigurableApplicationContext接口上refresh()方法的注释，意思是：加载或刷新持久化的配置，可能是XML文件、属性文件或关系数据库中存储的。由于这是一个启动方法，如果失败，它应该销毁已经创建的单例，以避免暂用资源。换句话说，在调用该方法之后，应该实例化所有的单例，或者根本不实例化单例 。")]),e._v(" "),t("p",[e._v("有个理念需要注意："),t("strong",[e._v("ApplicationContext关闭之后不代表JVM也关闭了，ApplicationContext是属于JVM的，说白了ApplicationContext也是JVM中的一个对象。")])]),e._v(" "),t("p",[e._v("在Spring的设计中，也提供可以刷新的ApplicationContext和不可以刷新的ApplicationContext。比如：")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AbstractRefreshableApplicationContext")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AbstractApplicationContext")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("就是可以刷新的")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("GenericApplicationContext")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AbstractApplicationContext")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("就是不可以刷新的。")]),e._v(" "),t("p",[e._v("AnnotationConfigApplicationContext继承的是GenericApplicationContext，所以它是不能刷新的。")]),e._v(" "),t("p",[e._v("AnnotationConfigWebApplicationContext继承的是AbstractRefreshableWebApplicationContext，所以它是可以刷的。")]),e._v(" "),t("p",[e._v("上面说的"),t("strong",[e._v("不能刷新是指不能重复刷新，只能调用一次refresh方法，第二次时会报错。")])]),e._v(" "),t("h2",{attrs:{id:"refresh做了哪些事情"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refresh做了哪些事情"}},[e._v("#")]),e._v(" refresh做了哪些事情？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1603458878384-545be0bc-b56c-4dae-b5a6-df19e9dc2f1b.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_151%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("p",[e._v("下面以AnnotationConfigApplicationContext为例子，来介绍refresh的底层原理。")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("在调用AnnotationConfigApplicationContext的构造方法之前，会调用父类GenericApplicationContext的无参构造方法，会构造一个BeanFactory，为"),t("strong",[e._v("DefaultListableBeanFactory")]),e._v("。")])]),e._v(" "),t("li",[t("p",[e._v("构造AnnotatedBeanDefinitionReader（"),t("strong",[e._v("主要作用添加一些基础的PostProcessor，同时可以通过reader进行BeanDefinition的注册")]),e._v("），同时对BeanFactory进行设置和添加"),t("strong",[e._v("PostProcessor")]),e._v("（后置处理器）")])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("设置dependencyComparator：AnnotationAwareOrderComparator，它是一个Comparator，是用来进行排序的，会获取某个对象上的"),t("strong",[e._v("Order注解")]),e._v("或者通过实现"),t("strong",[e._v("Ordered接口")]),e._v("所定义的值进行排序，在日常开发中可以利用这个类来进行排序。")]),e._v(" "),t("li",[e._v("设置autowireCandidateResolver：ContextAnnotationAutowireCandidateResolver，用来解析某个Bean能不能进行自动注入，比如某个Bean的autowireCandidate属性是否等于true")]),e._v(" "),t("li",[e._v("向BeanFactory中添加"),t("strong",[e._v("ConfigurationClassPostProcessor")]),e._v("对应的BeanDefinition，它是一个BeanDefinitionRegistryPostProcessor，并且实现了PriorityOrdered接口")]),e._v(" "),t("li",[e._v("向BeanFactory中添加"),t("strong",[e._v("AutowiredAnnotationBeanPostProcessor")]),e._v("对应的BeanDefinition，它是一个InstantiationAwareBeanPostProcessorAdapter，MergedBeanDefinitionPostProcessor")]),e._v(" "),t("li",[e._v("向BeanFactory中添加CommonAnnotationBeanPostProcessor对应的BeanDefinition，它是一个InstantiationAwareBeanPostProcessor，InitDestroyAnnotationBeanPostProcessor")]),e._v(" "),t("li",[e._v("向BeanFactory中添加EventListenerMethodProcessor对应的BeanDefinition，它是一个BeanFactoryPostProcessor，SmartInitializingSingleton")]),e._v(" "),t("li",[e._v("向BeanFactory中添加DefaultEventListenerFactory对应的BeanDefinition，它是一个EventListenerFactory")])])]),e._v(" "),t("li",[t("p",[e._v("构造ClassPathBeanDefinitionScanner（"),t("strong",[e._v("主要作用可以用来扫描得到并注册BeanDefinition")]),e._v("），同时进行设置：")])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("设置"),t("strong",[e._v("this.includeFilters = AnnotationTypeFilter("),t("strong",[t("strong",[e._v("Component")])]),e._v(".class)")])]),e._v(" "),t("li",[e._v("设置environment")]),e._v(" "),t("li",[e._v("设置resourceLoader")])])]),e._v(" "),t("li",[t("p",[e._v("利用reader注册AppConfig为BeanDefinition，类型为AnnotatedGenericBeanDefinition")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("接下来就是调用refresh方法")])])]),e._v(" "),t("li",[t("p",[e._v("prepareRefresh()：")])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("记录启动时间")]),e._v(" "),t("li",[e._v("可以允许子容器设置一些内容到Environment中")]),e._v(" "),t("li",[e._v("验证Environment中是否包括了必须要有的属性")])])]),e._v(" "),t("li",[t("p",[e._v("obtainFreshBeanFactory()：进行BeanFactory的refresh，在这里会去调用子类的refreshBeanFactory方法，具体子类是怎么刷新的得看子类，然后再调用子类的getBeanFactory方法，重新得到一个BeanFactory")])]),e._v(" "),t("li",[t("p",[e._v("prepareBeanFactory(beanFactory)：")])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("设置beanFactory的类加载器")]),e._v(" "),t("li",[e._v("设置表达式解析器：StandardBeanExpressionResolver，用来解析Spring中的表达式")]),e._v(" "),t("li",[e._v("添加PropertyEditorRegistrar：ResourceEditorRegistrar，PropertyEditor类型转化器注册器，用来注册一些默认的PropertyEditor")]),e._v(" "),t("li",[e._v("添加一个Bean的后置处理器：ApplicationContextAwareProcessor，是一个BeanPostProcessor，用来执行EnvironmentAware、ApplicationEventPublisherAware等回调方法")]),e._v(" "),t("li",[e._v("添加"),t("strong",[e._v("ignoredDependencyInterface")]),e._v("：可以向这个属性中添加一些接口，如果某个类实现了这个接口，并且这个类中的某些set方法在接口中也存在，那么这个set方法在自动注入的时候是不会执行的，比如EnvironmentAware这个接口，如果某个类实现了这个接口，那么就必须实现它的setEnvironment方法，而这是一个set方法，和Spring中的autowire是冲突的，那么Spring在自动注入时是不会调用setEnvironment方法的，而是等到回调Aware接口时再来调用（注意，这个功能仅限于xml的autowire，@Autowired注解是忽略这个属性的）")])])]),e._v(" "),t("li",[t("ol",[t("li",[t("ol",[t("li",[e._v("EnvironmentAware")]),e._v(" "),t("li",[e._v("EmbeddedValueResolverAware")]),e._v(" "),t("li",[e._v("ResourceLoaderAware")]),e._v(" "),t("li",[e._v("ApplicationEventPublisherAware")]),e._v(" "),t("li",[e._v("MessageSourceAware")]),e._v(" "),t("li",[e._v("ApplicationContextAware")]),e._v(" "),t("li",[e._v("另外其实在构造BeanFactory的时候就已经提前添加了另外三个：")]),e._v(" "),t("li",[e._v("BeanNameAware")]),e._v(" "),t("li",[e._v("BeanClassLoaderAware")]),e._v(" "),t("li",[e._v("BeanFactoryAware")])])])])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("添加"),t("strong",[e._v("resolvableDependencies")]),e._v("：在byType进行依赖注入时，会先从这个属性中根据类型找bean")])])]),e._v(" "),t("li",[t("ol",[t("li",[t("ol",[t("li",[e._v("BeanFactory.class：当前BeanFactory对象")]),e._v(" "),t("li",[e._v("ResourceLoader.class：当前ApplicationContext对象")]),e._v(" "),t("li",[e._v("ApplicationEventPublisher.class：当前ApplicationContext对象")]),e._v(" "),t("li",[e._v("ApplicationContext.class：当前ApplicationContext对象")])])])])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("添加一个Bean的后置处理器：ApplicationListenerDetector，是一个BeanPostProcessor，用来判断某个Bean是不是ApplicationListener，如果是则把这个Bean添加到ApplicationContext中去，注意一个ApplicationListener只能是单例的")]),e._v(" "),t("li",[e._v("添加一个Bean的后置处理器：LoadTimeWeaverAwareProcessor，是一个BeanPostProcessor，用来判断某个Bean是不是实现了LoadTimeWeaverAware接口，如果实现了则把ApplicationContext中的loadTimeWeaver回调setLoadTimeWeaver方法设置给该Bean。")]),e._v(" "),t("li",[e._v("添加一些单例bean到单例池：")])])]),e._v(" "),t("li",[t("ol",[t("li",[t("ol",[t("li",[e._v('"environment"：Environment对象')]),e._v(" "),t("li",[e._v('"systemProperties"：System.getProperties()返回的Map对象')]),e._v(" "),t("li",[e._v('"systemEnvironment"：System.getenv()返回的Map对象')])])])])]),e._v(" "),t("li",[t("p",[e._v("postProcessBeanFactory(beanFactory) ： 提供给AbstractApplicationContext的子类进行扩展，具体的子类，可以继续向BeanFactory中再添加一些东西")])]),e._v(" "),t("li",[t("p",[e._v("invokeBeanFactoryPostProcessors(beanFactory)："),t("strong",[e._v("执行BeanFactoryPostProcessor")])])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("此时在BeanFactory中会存在一个BeanFactoryPostProcessor："),t("strong",[e._v("ConfigurationClassPostProcessor")]),e._v("，它也是一个"),t("strong",[e._v("BeanDefinitionRegistryPostProcessor")])]),e._v(" "),t("li",[t("strong",[e._v("第一阶段")])]),e._v(" "),t("li",[e._v("从BeanFactory中找到类型为BeanDefinitionRegistryPostProcessor的beanName，也就是"),t("strong",[e._v("ConfigurationClassPostProcessor")]),e._v("， 然后调用BeanFactory的getBean方法得到实例对象")]),e._v(" "),t("li",[e._v("执行**ConfigurationClassPostProcessor的****postProcessBeanDefinitionRegistry()**方法:")])])]),e._v(" "),t("li",[t("ol",[t("li",[t("ol",[t("li",[e._v("解析AppConfig类")]),e._v(" "),t("li",[e._v("扫描得到BeanDefinition并注册")]),e._v(" "),t("li",[e._v("解析@Import，@Bean等注解得到BeanDefinition并注册")]),e._v(" "),t("li",[e._v("详细的看另外的笔记，专门分析了"),t("strong",[e._v("ConfigurationClassPostProcessor是如何工作的")])]),e._v(" "),t("li",[e._v("在这里，我们只需要知道在这一步会去得到BeanDefinition，而这些BeanDefinition中可能存在BeanFactoryPostProcessor和BeanDefinitionRegistryPostProcessor，所以执行完ConfigurationClassPostProcessor的postProcessBeanDefinitionRegistry()方法后，还需要继续执行其他BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法")])])])])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("执行其他BeanDefinitionRegistryPostProcessor的**postProcessBeanDefinitionRegistry()**方法")]),e._v(" "),t("li",[e._v("执行所有BeanDefinitionRegistryPostProcessor的**postProcessBeanFactory()**方法")]),e._v(" "),t("li",[t("strong",[e._v("第二阶段")])]),e._v(" "),t("li",[e._v("从BeanFactory中找到类型为BeanFactoryPostProcessor的beanName，而这些BeanFactoryPostProcessor包括了上面的BeanDefinitionRegistryPostProcessor")]),e._v(" "),t("li",[e._v("执行还没有执行过的BeanFactoryPostProcessor的**postProcessBeanFactory()**方法")])])]),e._v(" "),t("li",[t("p",[e._v("到此，所有的BeanFactoryPostProcessor的逻辑都执行完了，主要做的事情就是得到BeanDefinition并注册到BeanFactory中")])]),e._v(" "),t("li",[t("p",[e._v("registerBeanPostProcessors(beanFactory)：因为上面的步骤完成了扫描，这个过程中程序员可能自己定义了一些BeanPostProcessor，在这一步就会把BeanFactory中所有的BeanPostProcessor找出来并实例化得到一个对象，并添加到BeanFactory中去（属性"),t("strong",[e._v("beanPostProcessors")]),e._v("），最后再重新添加一个ApplicationListenerDetector对象（之前其实就添加了过，这里是为了把ApplicationListenerDetector移动到最后）")])]),e._v(" "),t("li",[t("p",[e._v('initMessageSource()：如果BeanFactory中存在一个叫做"'),t("strong",[e._v("messageSource")]),e._v('"的BeanDefinition，那么就会把这个Bean对象创建出来并赋值给ApplicationContext的messageSource属性，让ApplicationContext拥有'),t("strong",[e._v("国际化")]),e._v("的功能")])]),e._v(" "),t("li",[t("p",[e._v('initApplicationEventMulticaster()：如果BeanFactory中存在一个叫做"'),t("strong",[e._v("applicationEventMulticaster")]),e._v('"的BeanDefinition，那么就会把这个Bean对象创建出来并赋值给ApplicationContext的applicationEventMulticaster属性，让ApplicationContext拥有'),t("strong",[e._v("事件发布")]),e._v("的功能")])]),e._v(" "),t("li",[t("p",[e._v("onRefresh()：提供给AbstractApplicationContext的子类进行扩展，没用")])]),e._v(" "),t("li",[t("p",[e._v("registerListeners()：从BeanFactory中获取ApplicationListener类型的beanName，然后添加到ApplicationContext中的事件广播器"),t("strong",[e._v("applicationEventMulticaster")]),e._v("中去，到这一步因为FactoryBean还没有调用getObject()方法生成Bean对象，所以这里要在根据类型找一下ApplicationListener，记录一下对应的beanName")])]),e._v(" "),t("li",[t("p",[e._v("finishBeanFactoryInitialization(beanFactory)：完成BeanFactory的初始化，主要就是"),t("strong",[e._v("实例化非懒加载的单例Bean")]),e._v("，单独的笔记去讲。")])]),e._v(" "),t("li",[t("p",[e._v("finishRefresh()：BeanFactory的初始化完后，就到了Spring启动的最后一步了")])]),e._v(" "),t("li",[t("ol",[t("li",[e._v("设置ApplicationContext的lifecycleProcessor，默认情况下设置的是DefaultLifecycleProcessor")]),e._v(" "),t("li",[e._v("调用lifecycleProcessor的onRefresh()方法，如果是DefaultLifecycleProcessor，那么会获取所有类型为Lifecycle的Bean对象，然后调用它的start()方法，这就是ApplicationContext的生命周期扩展机制")]),e._v(" "),t("li",[e._v("发布"),t("strong",[e._v("ContextRefreshedEvent")]),e._v("事件")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);