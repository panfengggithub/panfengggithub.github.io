(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{645:function(t,e,r){"use strict";r.r(e);var n=r(1),i=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spring-boot启动扫描servlet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot启动扫描servlet"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Spring Boot启动扫描Servlet")])]),t._v(" "),e("ol",[e("li",[t._v("@ServletComponentScan负责扫描@WebServlet，每个Servlet对应一个ServletContextInitializer(接口)，对应的实现类是ServletRegistrationBean")]),t._v(" "),e("li",[t._v("SpringApplication.run(Application.class)里面会去创建一个ServletWebServerApplicationContext，最终会调用该类的onRefresh方法")]),t._v(" "),e("li",[t._v("调用createWebServer方法创建并启动Tomcat")]),t._v(" "),e("li",[t._v("在创建的Tomcat的过程中会创建一个TomcatStarter，并且在创建TomcatStarter时将ServletContextInitializer传进去，TomcatStarter实现了ServletContainerInitializer接口，该接口是Servlet规范中的接口")]),t._v(" "),e("li",[t._v("启动Tomcat")]),t._v(" "),e("li",[t._v("启动Tomcat后，Tomcat会负责调用TomcatStarter中的onStartup方法")]),t._v(" "),e("li",[t._v("循环调用每个ServletContextInitializer的onStartup方法，并且把servletContext传给ServletContextInitializer")]),t._v(" "),e("li",[t._v("最终在ServletRegistrationBean中将ServletRegistrationBean对应的Servlet添加到servletContext中")])])])}),[],!1,null,null,null);e.default=i.exports}}]);