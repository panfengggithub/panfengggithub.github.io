(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{491:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"五、tomcat的架构、生命周期、事件监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、tomcat的架构、生命周期、事件监听"}},[t._v("#")]),t._v(" "),s("strong",[t._v("五、Tomcat的架构、生命周期、事件监听")])]),t._v(" "),s("h2",{attrs:{id:"tomcat的架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat的架构"}},[t._v("#")]),t._v(" Tomcat的架构")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1568877624631-47768292-3817-4c05-9694-f892e4777838.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_24%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"tomcat生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat生命周期"}},[t._v("#")]),t._v(" Tomcat生命周期")]),t._v(" "),s("p",[t._v("Tomcat架构是一种树状的层级管理结构，组件会有自己的父节点，也可能会有自己的孩子节点，每个节点都是组件，每个组件都有生命周期，为了管理方便，子节点的生命周期都是交由父节点来管理的。")]),t._v(" "),s("p",[t._v("每个组件生命周期的管理主要由一个接口org.apache.catalina.Lifecycle和一个枚举org.apache.catalina.LifecycleState来表示。")]),t._v(" "),s("h3",{attrs:{id:"lifecycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle"}},[t._v("#")]),t._v(" Lifecycle")]),t._v(" "),s("p",[t._v("org.apache.catalina.Lifecycle接口定义了组件所有执行的动作，核心的有三个：")]),t._v(" "),s("ol",[s("li",[t._v("init()，组件进行初始化")]),t._v(" "),s("li",[t._v("start()，启动组件")]),t._v(" "),s("li",[t._v("stop()，停止组件")]),t._v(" "),s("li",[t._v("destroy()，销毁组件")]),t._v(" "),s("li",[t._v("getState()，获取组件当前状态")])]),t._v(" "),s("h3",{attrs:{id:"lifecyclestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lifecyclestate"}},[t._v("#")]),t._v(" LifecycleState")]),t._v(" "),s("p",[t._v("org.apache.catalina.LifecycleState是一个枚举，表示组件的所有生命周期。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NEW")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("INITIALIZING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BEFORE_INIT_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("INITIALIZED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AFTER_INIT_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("STARTING_PREP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BEFORE_START_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("STARTING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("START_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("STARTED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AFTER_START_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("STOPPING_PREP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BEFORE_STOP_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("STOPPING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STOP_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("STOPPED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AFTER_STOP_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DESTROYING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BEFORE_DESTROY_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DESTROYED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AFTER_DESTROY_EVENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FAILED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("ul",[s("li",[t._v("枚举值表示状态")]),t._v(" "),s("li",[t._v("第一个参数表示当前状态下组件可不可用")]),t._v(" "),s("li",[t._v("第二个参数表示当变为当前状态时出发相应事件")])]),t._v(" "),s("h3",{attrs:{id:"生命周期流转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期流转"}},[t._v("#")]),t._v(" 生命周期流转")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/365147/1568900317985-4be14519-2a8b-4276-8968-99032e059cbb.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_38%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),s("ol",[s("li",[t._v("所有状态都能转变为FAILED")]),t._v(" "),s("li",[t._v("一个组件在STARTING_PREP、STARTING、STARTED状态调用start()方法不会产生影响")]),t._v(" "),s("li",[t._v("一个组件在NEW状态调用start()方法时，会先调用init()方法")]),t._v(" "),s("li",[t._v("一个组件在STOPPING_PREP、STOPPING、STOPPED状态调用stop方法不会产生影响")]),t._v(" "),s("li",[t._v("一个组件在NEW状态调用stop()方法是，会将状态直接改为STOPPED。当组件自己启动失败去停止时，需要将子组件也进行停止，尽管某些子组件还没有启动。")]),t._v(" "),s("li",[t._v("其他状态相互转换都会抛异常")]),t._v(" "),s("li",[t._v("合法的状态转换发生时都会触发相应的LifecycleEvent事件，非合法的转换不会触发事件。")])]),t._v(" "),s("h2",{attrs:{id:"tomcat事件监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat事件监听"}},[t._v("#")]),t._v(" Tomcat事件监听")]),t._v(" "),s("h3",{attrs:{id:"事件触发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件触发"}},[t._v("#")]),t._v(" 事件触发")]),t._v(" "),s("p",[t._v("Tomcat中每个组件的状态会发送变化，变化的时候会抛出一些事件，Tomcat支持定义事件监听器来监听并消费这些事件。")]),t._v(" "),s("h3",{attrs:{id:"事件执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件执行"}},[t._v("#")]),t._v(" 事件执行")]),t._v(" "),s("p",[t._v("实现事件监听功能的类为org.apache.catalina.util.LifecycleBase。每个组件都会继承这个类。")]),t._v(" "),s("p",[t._v("该类中有一个属性："),s("code",[t._v("List<LifecycleListener> lifecycleListeners")]),t._v("; 该属性用来保存事件监听器，也就是说每个组件拥有一个事件监听器列表。")]),t._v(" "),s("p",[t._v("该类中有一个方法：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireLifecycleEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LifecycleEvent")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LifecycleEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LifecycleListener")]),t._v(" listener "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lifecycleListeners"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlistener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lifecycleEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("当组件的状态发生变化时，会调用fireLifecycleEvent触发事件执行。比如当Server初始化时，会调用：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStateInternal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LifecycleState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STARTING_PREP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("该方法内部会执行：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" lifecycleEvent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLifecycleEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lifecycleEvent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireLifecycleEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lifecycleEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"事件监听器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件监听器"}},[t._v("#")]),t._v(" 事件监听器")]),t._v(" "),s("p",[t._v("程序员可以自定义事件监听器，只需实现LifecycleListener接口即可，比如：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NamingContextListener")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LifecycleListene")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FrameworkListener")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LifecycleListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("定义好事件监听器后，每个组件就可以调用父类LifecycleBase中的addLifecycleListener()方法添加事件监听器到该组件的监听器列表中。")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("虽然说是事件监听，但实际上并不是异步触发，而是主动调用事件监听器。")])])}),[],!1,null,null,null);s.default=e.exports}}]);