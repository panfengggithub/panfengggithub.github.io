(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{532:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mybatis资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis资料"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Mybatis资料")])]),t._v(" "),a("ol",[a("li",[t._v("Mybatis在开发中作用与工作原理")]),t._v(" "),a("li",[t._v("Mybatis源码的精髓与设计模式")]),t._v(" "),a("li",[t._v("Orm框架的核心思想与设计能力")]),t._v(" "),a("li",[t._v("也是你面试装逼神技能")])]),t._v(" "),a("p",[a("strong",[t._v("传统****JDBC")]),t._v(" "),a("strong",[t._v("的弊端：")])]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("p",[t._v("1、jdbc 底层没有用连接池、操作数据库需要频繁的创建和关联链接。消耗很大的资源")]),t._v(" "),a("p",[t._v("2、写原生的 jdbc 代码在 java 中，一旦我们要修改 sql 的话，java需要整体编译，不利于系统维护")]),t._v(" "),a("p",[t._v("3、使用 PreparedStatement 预编译的话对变量进行设置 123 数字，这样的序号不利于维护")]),t._v(" "),a("p",[t._v("4、返回 result 结果集也需要硬编码。")]),t._v(" "),a("p",[a("strong",[t._v("mybatis")]),t._v(" "),a("strong",[t._v("核心概念")])]),t._v(" "),a("p",[a("strong",[t._v("Configuration")]),t._v(" "),a("strong",[t._v("、")]),t._v(" "),a("strong",[t._v("SqlSessionFactory")]),t._v(" "),a("strong",[t._v("、")]),t._v(" "),a("strong",[t._v("Session")]),t._v(" "),a("strong",[t._v("、")]),t._v(" "),a("strong",[t._v("Executor")]),t._v(" "),a("strong",[t._v("、")]),t._v(" "),a("strong",[t._v("MappedStatement")]),t._v(" **、"),a("strong",[a("strong",[t._v("StatementHandler")])]),t._v("、**"),a("strong",[t._v("ResultSetHandler")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607578418672-b56d8102-3f5c-4e69-98f6-f881e8bbfdeb.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_27%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607578445973-6e160541-c265-471c-b8ee-2458094a9c05.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_23%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"源码过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码过程"}},[t._v("#")]),t._v(" 源码过程：")]),t._v(" "),a("h1",{attrs:{id:"源码编译与下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码编译与下载"}},[t._v("#")]),t._v(" 源码编译与下载")]),t._v(" "),a("p",[t._v("https://github.com/mybatis/mybatis-3")]),t._v(" "),a("p",[t._v("https://github.com/mybatis/parent（依赖）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607578494029-e1d6dbd2-24ed-4355-8f0a-81ac351adf5f.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_12%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("p",[t._v("可以直接idea导入 也可以直接下载为zip包（推荐这种）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607578506980-39f5159a-a9d3-4133-9f7c-853f41e972bf.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_9%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("p",[t._v("Mybatis源码袭来parent工程。需要先编译parent工程在编译mybatis，具体如下")]),t._v(" "),a("h2",{attrs:{id:"解决parent依赖问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决parent依赖问题"}},[t._v("#")]),t._v(" 解决parent依赖问题：")]),t._v(" "),a("p",[t._v("在构建的过程中会出现找不到pom.xml中依赖的父模块mybatis-parent")]),t._v(" "),a("p",[t._v("我们需要将paren工程克隆到本地目录中：git clone https://github.com/mybatis/parent.git ，然后先进入parent工程下进行mvn clean install 将parent工程依赖的包下载下来、并保证parent工程编译通过，这步不会出现问题，在编译的输出信息中我们会看到parent工程的版本号，如图所示：")]),t._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607578515546-3998dbd2-0228-4409-8f0e-3b22c43c5779.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_12%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),t._v(" "),a("p",[t._v("pom.xml文件parent依赖的version标签处，如下文。\n接下来修改mybatis工程的pom.xml文件中标识parent依赖的地方：")]),t._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("<parent>\n    <groupId>org.mybatis</groupId>\n    <artifactId>mybatis-parent</artifactId>\n    <version>28-SNAPSHOT</version>\n    <relativePath>../parent/pom.xml</relativePath>\n  </parent>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("告诉我们部分插件没有指定的相应的版本号，出于工程的稳定性考虑需要对使用的插件指定其版本号，并给出了合适的版本号，如图红色方框中的文字。我们只要在mybatisg工程的pom.xml文件中找到相对应的插件处添加"),a("version",[t._v("$NUM")]),t._v(" 标签即可， $NUM代表具体的版本号。到这我们再执行mvn clean install 指令就可以将mybatis工程构建成功了。")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1387387/1607578570710-fc520e62-e17f-4ffb-81f5-ee3b5890f255.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_10%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);