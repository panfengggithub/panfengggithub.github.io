(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{582:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"spring中依赖注入源码解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring中依赖注入源码解析"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Spring中依赖注入源码解析")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1603021389507-04927956-e2f1-4d99-874f-207fcdd4f92a.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_40%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("p",[t("strong",[e._v("Spring中到底有几种依赖注入的方式？")])]),e._v(" "),t("p",[e._v("首先分两种：")]),e._v(" "),t("ol",[t("li",[e._v("手动注入")]),e._v(" "),t("li",[e._v("自动注入")])]),e._v(" "),t("h2",{attrs:{id:"手动注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动注入"}},[e._v("#")]),e._v(" 手动注入")]),e._v(" "),t("p",[e._v("在XML中定义Bean时，就是手动注入，因为是"),t("strong",[e._v("程序员"),t("strong",[t("strong",[e._v("手动")])]),e._v("给某个属性指定了值")]),e._v("。")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("bean name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"userService"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"com.luban.service.UserService"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("property name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"orderService"')]),e._v(" ref"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"orderService"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("bean"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("上面这种底层是通过"),t("strong",[e._v("set方法")]),e._v("进行注入。")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("bean name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"userService"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"com.luban.service.UserService"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("constructor"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("arg index"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0"')]),e._v(" ref"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"orderService"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("bean"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("上面这种底层是通过"),t("strong",[e._v("构造方法")]),e._v("进行注入。")]),e._v(" "),t("p",[e._v("所以手动注入的底层也就是分为两种：")]),e._v(" "),t("ol",[t("li",[e._v("set方法")]),e._v(" "),t("li",[e._v("构造方法")])]),e._v(" "),t("h2",{attrs:{id:"自动注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动注入"}},[e._v("#")]),e._v(" 自动注入")]),e._v(" "),t("p",[e._v("自动注入又分为两种：")]),e._v(" "),t("ol",[t("li",[e._v("XML的autowire自动注入")]),e._v(" "),t("li",[e._v("@Autowired注解的自动注入")])]),e._v(" "),t("h3",{attrs:{id:"xml的autowire自动注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xml的autowire自动注入"}},[e._v("#")]),e._v(" XML的autowire自动注入")]),e._v(" "),t("p",[e._v("在XML中，我们可以在定义一个Bean时去指定这个Bean的自动注入模式：")]),e._v(" "),t("ol",[t("li",[e._v("byType")]),e._v(" "),t("li",[e._v("byName")]),e._v(" "),t("li",[e._v("constructor")]),e._v(" "),t("li",[e._v("default")]),e._v(" "),t("li",[e._v("no")])]),e._v(" "),t("p",[e._v("比如：")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("bean id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"userService"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"com.luban.service.UserService"')]),e._v(" autowire"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"byType"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("这么写，表示Spring会自动的给userService中所有的属性自动赋值（"),t("strong",[e._v("不需要")]),e._v("这个属性上有@Autowired注解，但需要这个属性有对应的"),t("strong",[e._v("set方法")]),e._v("）。")]),e._v(" "),t("p",[e._v("在创建Bean的过程中，在填充属性时，Spring会去解析当前类，把当前类的所有方法都解析出来，Spring会去解析每个方法得到对应的PropertyDescriptor对象，注意PropertyDescriptor并不是Spring中的类，而是java.beans包下类，也就是jdk自带的类，PropertyDescriptor中有几个属性：")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("name：这个name并不是方法的名字，而是拿方法名字进过处理后的名字")])])]),e._v(" "),t("li",[t("ol",[t("li",[t("strong",[e._v("如果方法名字以“get”开头，比如“getXXX”,那么name=XXX")])]),e._v(" "),t("li",[t("strong",[e._v("如果方法名字以“is”开头，比如“isXXX”,那么name=XXX")])]),e._v(" "),t("li",[t("strong",[e._v("如果方法名字以“set”开头，比如“setXXX”,那么name=XXX")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("readMethodRef：表示get方法的Method对象的引用")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("readMethodName：表示get方法的名字")])])]),e._v(" "),t("li",[t("p",[e._v("**writeMethodRef：**"),t("strong",[e._v("表示set方法的Method对象的引用")])])]),e._v(" "),t("li",[t("p",[e._v("**writeMethodName：**"),t("strong",[e._v("表示set方法的名字")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("propertyTypeRef：如果有get方法那么对应的就是返回值的类型，如果是set方法那么对应的就是set方法中唯一参数的类型")])])])]),e._v(" "),t("p",[e._v('get方法的定义是： 方法参数个数为0个，并且 （方法名字以"get"开头 或者 方法名字以"is"开头并且方法的返回类型为boolean）')]),e._v(" "),t("p",[e._v('set方法的定义是：方法参数个数为1个，并且 （方法名字以"set"开头并且方法返回类型为void）')]),e._v(" "),t("p",[e._v("所以，Spring在通过byName的自动填充属性时流程是：")]),e._v(" "),t("ol",[t("li",[e._v("找到所有set方法所对应的XXX部分的名字")]),e._v(" "),t("li",[e._v("根据XXX部分的名字去获取bean")])]),e._v(" "),t("p",[e._v("Spring在通过byType的自动填充属性时流程是：")]),e._v(" "),t("ol",[t("li",[e._v("找到所有set方法所对应的XXX部分的名字")]),e._v(" "),t("li",[e._v("根据XXX部分的名字重新再获取得到PropertyDescriptor")]),e._v(" "),t("li",[e._v("获取到set方法中的唯一参数的类型，并且根据该类型去容器中获取bean")]),e._v(" "),t("li",[e._v("如果找到多个，会报错。")])]),e._v(" "),t("p",[e._v("以上，分析了autowire的byType和byName情况，那么接下来分析constructor，constructor表示通过构造方法注入，其实这种情况就比较简单了，没有byType和byName那么复杂。")]),e._v(" "),t("p",[e._v("首先，如果是byType或byName，那么该bean一定要有一个无参的构造方法，因为如果只有有参构造方法，那么Spring将无法进行实例化，因为Spring如果要实例化肯定需要利用构造方法，而Spring没法给构造方法传值。")]),e._v(" "),t("p",[e._v("然后，如果是constructor，那么就可以不写set方法了，当某个bean是通过构造方法来注入时，表示Spring在利用构造方法实例化一个对象时，可以利用构造方法的参数信息从Spring容器中去找bean，找到bean之后作为参数传给构造方法，从而实例化得到一个bean对象。")]),e._v(" "),t("p",[e._v("我们这里先不考虑一个类有多个构造方法的情况，后面单独讲"),t("strong",[e._v("推断构造方法")]),e._v("。我们这里只考虑只有一个有参构造方法。")]),e._v(" "),t("p",[e._v("其实构造方法注入相当于byType+byName，普通的byType是根据set方法中的参数类型去找bean，找到多个会报错，而constructor就是通过构造方法中的参数类型去找bean，如果找到多个会根据参数名确定。")]),e._v(" "),t("p",[e._v("另外两个：")]),e._v(" "),t("ol",[t("li",[e._v("no，表示关闭autowire")]),e._v(" "),t("li",[e._v("default，表示默认值，我们一直演示的某个bean的autowire，而也可以直接在"),t("beans",[e._v("标签中设置autowire，如果设置了，那么"),t("bean",[e._v("标签中设置的autowire如果为default，那么则会用"),t("beans",[e._v("标签中设置的autowire。")])],1)],1)],1)]),e._v(" "),t("p",[e._v("可以发现XML中的自动注入是挺强大的，那么问题来了，"),t("strong",[e._v("为什么我们平时都是用的@Autowired注解呢？而没有用上文说的这种自动注入方式呢？")])]),e._v(" "),t("p",[e._v("@Autowired注解相当于XML中的autowire属性的"),t("strong",[e._v("注解方式的替代")]),e._v("。这是在官网上有提到的。")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Essentially")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" the "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Autowired")]),e._v(" annotation "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("provides")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("the")]),e._v(" same capabilities as described in "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Autowiring")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Collaborators")]),e._v(" but "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("more")]),e._v(" fine"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("grained control and wider applicability\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("翻译一下：")]),e._v(" "),t("p",[e._v("从本质上讲，@Autowired注解提供了与autowire相同的功能，但是拥有更细粒度的控制和更广泛的适用性。")]),e._v(" "),t("p",[e._v("注意："),t("strong",[e._v("更细粒度的控制")]),e._v("。")]),e._v(" "),t("p",[e._v("XML中的autowire控制的是整个bean的所有属性，而@Autowired注解是直接写在某个属性、set方法、构造方法上的。")]),e._v(" "),t("p",[e._v("再举个例子，如果一个类有多个构造方法，那么如果用XML的autowire=constructor，你无法控制到底用哪个构造方法，而你可以用@Autowired注解来直接指定你想用哪个构造方法。")]),e._v(" "),t("p",[e._v("同时，用@Autowired注解，还可以控制，哪些属性想被自动注入，哪些属性不想，这也是细粒度的控制。")]),e._v(" "),t("p",[e._v("但是@Autowired无法区分byType和byName，@Autowired是先byType，如果找到多个则byName。")]),e._v(" "),t("p",[e._v("那么XML的自动注入底层其实也就是:")]),e._v(" "),t("ol",[t("li",[e._v("set方法")]),e._v(" "),t("li",[e._v("构造方法")])]),e._v(" "),t("h3",{attrs:{id:"autowired注解的自动注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autowired注解的自动注入"}},[e._v("#")]),e._v(" @Autowired注解的自动注入")]),e._v(" "),t("p",[e._v("上文说了@Autowired注解，是byType和byName的结合。")]),e._v(" "),t("p",[e._v("@Autowired注解可以写在：")]),e._v(" "),t("ol",[t("li",[e._v("属性上：先根据属性类型去找Bean，如果找到多个再根据属性名确定一个")]),e._v(" "),t("li",[e._v("构造方法上：先根据方法参数类型去找Bean，如果找到多个再根据参数名确定一个")]),e._v(" "),t("li",[e._v("set方法上：先根据方法参数类型去找Bean，如果找到多个再根据参数名确定一个")])]),e._v(" "),t("p",[e._v("而这种底层到了：")]),e._v(" "),t("ol",[t("li",[e._v("属性")]),e._v(" "),t("li",[e._v("set方法")]),e._v(" "),t("li",[e._v("构造方法")])]),e._v(" "),t("h2",{attrs:{id:"autowired底层实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autowired底层实现原理"}},[e._v("#")]),e._v(" @Autowired底层实现原理")]),e._v(" "),t("h3",{attrs:{id:"找出注入点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#找出注入点"}},[e._v("#")]),e._v(" 找出注入点")]),e._v(" "),t("p",[e._v("在创建一个Bean的过程中，Spring会利用AutowiredAnnotationBeanPostProcessor的postProcessMergedBeanDefinition()找出注入点，加了@Autowired注解的就是注入点，比如：")]),e._v(" "),t("ol",[t("li",[e._v("某个属性")]),e._v(" "),t("li",[e._v("某个方法（先不管构造方法）")])]),e._v(" "),t("p",[e._v("把这些注入点信息找出来之后会进行缓存中（Set"),t("InjectedElement",[e._v("），InjectedElement就表示注入点")])],1),e._v(" "),t("h3",{attrs:{id:"进行注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进行注入"}},[e._v("#")]),e._v(" 进行注入")]),e._v(" "),t("p",[e._v("Spring会利用AutowiredAnnotationBeanPostProcessor的postProcessProperties()方法中，会遍历Set"),t("InjectedElement",[e._v("中的注入点开始进行注入。")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);