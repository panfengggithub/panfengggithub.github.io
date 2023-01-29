(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{557:function(t,e,n){"use strict";n.r(e);var o=n(1),a=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spring启动过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring启动过程"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Spring启动过程")])]),t._v(" "),e("h2",{attrs:{id:"构造annotationconfigapplicationcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造annotationconfigapplicationcontext"}},[t._v("#")]),t._v(" 构造AnnotationConfigApplicationContext")]),t._v(" "),e("p",[t._v("在构造AnnotationConfigApplicationContext时，会先调用父类GenericApplicationContext的构造方法，GenericApplicationContext会初始化一个beanFactory，值为DefaultListableBeanFactory，在DefaultListableBeanFactory类中有一个"),e("strong",[t._v("beanDefinitionMap")]),t._v("，它会用来保存BeanDefinition。")]),t._v(" "),e("p",[t._v("AnnotationConfigApplicationContext的类结构图，点击可放大。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1583321520092-7e955886-c984-4122-8e85-5ec370321b8f.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_48%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("p",[t._v("AnnotationConfigApplicationContext构造时会生成:")]),t._v(" "),e("ul",[e("li",[t._v("一个reader=new AnnotatedBeanDefinitionReader(this);")]),t._v(" "),e("li",[t._v("一个scanner=new ClassPathBeanDefinitionScanner(this);")])]),t._v(" "),e("h2",{attrs:{id:"构造annotatedbeandefinitionreader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造annotatedbeandefinitionreader"}},[t._v("#")]),t._v(" 构造AnnotatedBeanDefinitionReader")]),t._v(" "),e("p",[t._v("在构造reader的过程中，会生成以下几个RootBeanDefinition:")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("new RootBeanDefinition(ConfigurationClassPostProcessor.class);")])]),t._v(" "),e("li",[e("strong",[t._v("new RootBeanDefinition(AutowiredAnnotationBeanPostProcessor.class);")])]),t._v(" "),e("li",[t._v("new RootBeanDefinition(CommonAnnotationBeanPostProcessor.class);")]),t._v(" "),e("li",[t._v("new RootBeanDefinition(EventListenerMethodProcessor.class);")]),t._v(" "),e("li",[t._v("new RootBeanDefinition(DefaultEventListenerFactory.class);")])]),t._v(" "),e("p",[t._v("重点关注ConfigurationClassPostProcessor和AutowiredAnnotationBeanPostProcessor。")]),t._v(" "),e("p",[t._v("RootBeanDefinition的类结构图，点击可放大")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1583321178383-3532f59c-347f-4d07-a81a-22ce0ce00368.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_30%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("p",[t._v("ConfigurationClassPostProcessor的类结构图，点击可放大")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1583321795208-b7cee605-2ef0-4af5-9aa3-79ecbda01903.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_48%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("p",[t._v("AutowiredAnnotationBeanPostProcessor的类结构图，点击可放大")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1583321823271-bd105cd1-c333-4040-9c6f-de5136512364.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_38%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"构造classpathbeandefinitionscanner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造classpathbeandefinitionscanner"}},[t._v("#")]),t._v(" 构造ClassPathBeanDefinitionScanner")]),t._v(" "),e("p",[t._v("在生成scanner的过程中，主要会注册几个默认的includeFilters：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("new AnnotationTypeFilter(Component.class)")])]),t._v(" "),e("li",[t._v('new AnnotationTypeFilter(ClassUtils.forName("javax.annotation.ManagedBean")）')]),t._v(" "),e("li",[t._v('new AnnotationTypeFilter(ClassUtils.forName("javax.inject.Named"))')])]),t._v(" "),e("p",[t._v("重点关注AnnotationTypeFilter(Component.class)，它是用来判断一个类是不是应该被Spring扫描到的")]),t._v(" "),e("h2",{attrs:{id:"注册appconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册appconfig"}},[t._v("#")]),t._v(" 注册AppConfig")]),t._v(" "),e("p",[t._v("context.register(AppConfig.class)会把AppConfig.class注册为一个"),e("strong",[t._v("AnnotatedGenericBeanDefinition")])]),t._v(" "),e("p",[t._v("AnnotatedGenericBeanDefinition的类结构图，点击可放大")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1583320241027-87aeb471-649f-4caf-9a8c-e57af2d64f80.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_36%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"refresh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#refresh"}},[t._v("#")]),t._v(" refresh()")]),t._v(" "),e("h3",{attrs:{id:"invokebeanfactorypostprocessors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#invokebeanfactorypostprocessors"}},[t._v("#")]),t._v(" invokeBeanFactoryPostProcessors()")]),t._v(" "),e("ol",[e("li",[t._v("执行通过"),e("strong",[t._v("context.addBeanFactoryPostProcessor()方法添加")]),t._v("的BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法")]),t._v(" "),e("li",[t._v("执行"),e("strong",[t._v("实现了PriorityOrdered接口")]),t._v("的BeanDefinitionRegistryPostProcessor.postProcessBeanDefinitionRegistry()方法")]),t._v(" "),e("li",[t._v("执行"),e("strong",[t._v("实现了Ordered接口")]),t._v("的BeanDefinitionRegistryPostProcessor.postProcessBeanDefinitionRegistry()方法")]),t._v(" "),e("li",[t._v("执行其他BeanDefinitionRegistryPostProcessor.postProcessBeanDefinitionRegistry()方法")]),t._v(" "),e("li",[t._v("执行所有的BeanDefinitionRegistryPostProcessor的postProcessBeanFactory方法")]),t._v(" "),e("li",[t._v("执行通过"),e("strong",[t._v("context.addBeanFactoryPostProcessor()方法添加")]),t._v("的BeanFactoryPostProcessor的postProcessBeanFactory()方法")]),t._v(" "),e("li",[t._v("在上面的过程中会进行扫描，所以可能会扫描出新的BeanFactoryPostProcessor")]),t._v(" "),e("li",[t._v("执行新扫描出来的BeanFactoryPostProcessor的postProcessBeanFactory()方法")])]),t._v(" "),e("p",[t._v("上文中ConfigurationClassPostProcessor就是一个实现了PriorityOrdered接口的BeanDefinitionRegistryPostProcessor，所以在第2步时会被执行ConfigurationClassPostProcessor的postProcessBeanDefinitionRegistry方法。")]),t._v(" "),e("h3",{attrs:{id:"configurationclasspostprocessor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurationclasspostprocessor"}},[t._v("#")]),t._v(" ConfigurationClassPostProcessor")]),t._v(" "),e("p",[t._v("在这个过程中会先找出AppConfig所对应的AnnotatedGenericBeanDefinition。然后执行以下步骤")]),t._v(" "),e("ol",[e("li",[t._v("构造一个ConfigurationClassParser，用来解析AppConfig所对应的AnnotatedGenericBeanDefinition")]),t._v(" "),e("li",[t._v("解析该AnnotatedGenericBeanDefinition")])]),t._v(" "),e("p",[t._v("在解析AnnotatedGenericBeanDefinition时会执行如下步骤：")]),t._v(" "),e("ol",[e("li",[t._v("获取ComponentScan注解中配置的包路径")]),t._v(" "),e("li",[t._v("开始扫描包")]),t._v(" "),e("li",[t._v("在扫描的过程中会把包路径下的所有class找出来")]),t._v(" "),e("li",[t._v("然后遍历所有class")]),t._v(" "),e("li",[t._v("检查每个class是否匹配includeFilters，只要匹配其中一个includeFilters，就表示可以把该class封装为一个ScannedGenericBeanDefinition并注册到beanDefinitionMap中。")]),t._v(" "),e("li",[t._v("扫描结束后，就会看当前配置类上是否有@Import注解，或者@Import的子注解，比如@MapperScan")]),t._v(" "),e("li",[t._v("如果存在@Import，并且指定的类实现了ImportBeanDefinitionRegistrar接口，那么就会把该registrar实例添加进importBeanDefinitionRegistrars中，importBeanDefinitionRegistrars是一个LinkedHashMap，等待后续被调用")])])])}),[],!1,null,null,null);e.default=a.exports}}]);