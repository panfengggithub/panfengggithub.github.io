(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{538:function(n,a,e){"use strict";e.r(a);var s=e(1),t=Object(s.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"spring整合mybatis核心原理分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring整合mybatis核心原理分析"}},[n._v("#")]),n._v(" "),a("strong",[n._v("Spring整合Mybatis核心原理分析")])]),n._v(" "),a("h2",{attrs:{id:"_1-3-2版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2版本"}},[n._v("#")]),n._v(" 1.3.2版本")]),n._v(" "),a("ol",[a("li",[n._v("通过@MapperScan导入了MapperScannerRegistrar类")]),n._v(" "),a("li",[n._v("MapperScannerRegistrar类实现了ImportBeanDefinitionRegistrar接口，所以Spring在启动时会调用MapperScannerRegistrar类中的registerBeanDefinitions方法")]),n._v(" "),a("li",[n._v("在registerBeanDefinitions方法中定义了一个ClassPathMapperScanner对象，用来扫描mapper")]),n._v(" "),a("li",[n._v("设置ClassPathMapperScanner对象可以扫描到接口，因为在Spring中是不会扫描接口的")]),n._v(" "),a("li",[n._v("同时因为ClassPathMapperScanner中重写了isCandidateComponent方法，导致isCandidateComponent只会认为接口是备选者Component")]),n._v(" "),a("li",[n._v("通过利用Spring的扫描后，会把接口扫描出来并且得到对应的BeanDefinition")]),n._v(" "),a("li",[n._v("接下来把扫描得到的BeanDefinition进行修改，把BeanClass修改为MapperFactoryBean，把AutowireMode修改为byType")]),n._v(" "),a("li",[n._v("扫描完成后，Spring就会基于BeanDefinition去创建Bean了，相当于每个Mapper对应一个FactoryBean（单例的）")]),n._v(" "),a("li",[n._v("在MapperFactoryBean中的getObject方法中，调用了getSqlSession()去得到一个sqlSession对象，然后根据对应的Mapper接口生成一个代理对象")]),n._v(" "),a("li",[n._v("sqlSession对象是Mybatis中的，一个sqlSession对象需要SqlSessionFactory来产生")]),n._v(" "),a("li",[n._v("MapperFactoryBean的AutowireMode为byType，所以Spring会自动调用set方法，有两个set方法，一个setSqlSessionFactory，一个setSqlSessionTemplate，而这两个方法执行的前提是根据方法参数类型能找到对应的bean，所以Spring容器中要存在SqlSessionFactory类型的bean或者SqlSessionTemplate类型的bean。")]),n._v(" "),a("li",[n._v("如果你定义的是一个SqlSessionFactory类型的bean，那么最终也会被包装为一个SqlSessionTemplate对象，并且赋值给sqlSession属性")]),n._v(" "),a("li",[n._v("而在SqlSessionTemplate类中就存在一个getMapper方法，这个方法中就会利用SqlSessionFactory来生成一个代理对象")])]),n._v(" "),a("h2",{attrs:{id:"_2-0-5版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-5版本"}},[n._v("#")]),n._v(" 2.0.5版本")]),n._v(" "),a("ol",[a("li",[n._v("通过@MapperScan导入了MapperScannerRegistrar类")]),n._v(" "),a("li",[n._v("MapperScannerRegistrar类实现了ImportBeanDefinitionRegistrar接口，所以Spring在启动时会调用MapperScannerRegistrar类中的registerBeanDefinitions方法")]),n._v(" "),a("li",[a("strong",[n._v("在"),a("strong",[a("strong",[n._v("registerBeanDefinitions方法中生成了一个")])]),n._v("MapperScannerConfigurer类型的BeanDefinition")])]),n._v(" "),a("li",[a("strong",[n._v("而MapperScannerConfigurer实现了实现了BeanDefinitionRegistryPostProcessor接口，所以Spring在启动过程中时会调用它的postProcessBeanDefinitionRegistry()方法")])]),n._v(" "),a("li",[n._v("在postProcessBeanDefinitionRegistry方法中会生成一个ClassPathMapperScanner对象，然后进行扫描")]),n._v(" "),a("li",[n._v("后续的逻辑和1.3.2版本一样。")])]),n._v(" "),a("p",[n._v("带来的好处是，可以不使用@MapperScan注解，而可以直接定义一个Bean，比如：")]),n._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Bean")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MapperScannerConfigurer")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("mapperScannerConfigurer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MapperScannerConfigurer")]),n._v(" mapperScannerConfigurer "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MapperScannerConfigurer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\tmapperScannerConfigurer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("setBasePackage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"com.luban"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("return")]),n._v(" mapperScannerConfigurer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);