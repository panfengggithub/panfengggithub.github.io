(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{729:function(e,o,i){"use strict";i.r(o);var l=i(1),r=Object(l.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"dubbo在zookeeper中数据模型的总结"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dubbo在zookeeper中数据模型的总结"}},[e._v("#")]),e._v(" "),o("strong",[e._v("Dubbo在Zookeeper中数据模型的总结")])]),e._v(" "),o("p",[e._v("Dubbo会利用Zookeeper实现很多的功能，比如：")]),e._v(" "),o("ol",[o("li",[e._v("注册中心")]),e._v(" "),o("li",[e._v("配置中心")]),e._v(" "),o("li",[e._v("元数据中心")])]),e._v(" "),o("p",[e._v("Zookeeper在实现这些中心的时候，会需要存储很多的数据，结构如:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("dubbo")])]),e._v(" "),o("li",[o("ul",[o("li",[e._v("metadata")])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("consumers")]),e._v(" "),o("li",[e._v("routers")]),e._v(" "),o("li",[e._v("configurators")]),e._v(" "),o("li",[e._v("providers")]),e._v(" "),o("li",[e._v("某接口名：表示一个服务")])])])])]),e._v(" "),o("li",[o("ul",[o("li",[e._v("config（"),o("strong",[e._v("2.7版本新增")]),e._v("）")])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("dubbo")])])])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("dubbo-demo-provider-application.configurators：表示某个应用的配置")]),e._v(" "),o("li",[e._v("org.apache.dubbo.demo.DemoService.condition-router：表示某个服务的条件路由")]),e._v(" "),o("li",[e._v("org.apache.dubbo.demo.DemoService.configurators：表示某个服务的配置（"),o("strong",[e._v("2.7版本****之后")]),e._v("的Dubbo会从这个位置读取服务配置），既可以是针对服务提供者的配置，也可以是针对服务消费者的配置，这个节点的内容是yaml格式的。")]),e._v(" "),o("li",[e._v("dubbo-demo-provider-application.condition-router：表示某个应用的条件路由")]),e._v(" "),o("li",[e._v("dubbo-demo-provider-application.tag-router：表示某个应用的标签路由")])])])])])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("consumers")]),e._v(" "),o("li",[e._v("routers")]),e._v(" "),o("li",[e._v("configurators")]),e._v(" "),o("li",[e._v("providers")])])])])]),e._v(" "),o("li",[o("ul",[o("li",[e._v("某接口名：表示一个服务")])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("consumers：表示调用当前服务的服务消费者")])])])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("consumer://192.168.40.17/org.apache.dubbo.demo.DemoService?application=dubbo-demo-consumer-application&category=consumers&check=false&dubbo=2.0.2&interface=org.apache.dubbo.demo.DemoService&lazy=false&methods=sayHello&pid=13564&release=2.7.0&side=consumer&sticky=false&timestamp=1585913509778")])])])])])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("configurators：表示当前服务的配置（"),o("strong",[e._v("2.7版本****之前")]),e._v("的Dubbo只能从这个位置读取服务配置）")])])])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("override://0.0.0.0/org.apache.dubbo.demo.DemoService?category=configurators&compatible_config=true&dynamic=false&enabled=true&timeout=6001")])])])])])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("routers：表示当前服务的条件路由（2.7版本之前）")])])])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("route://0.0.0.0/org.apache.dubbo.demo.DemoService?category=routers&compatible_config=true&dynamic=false&enabled=true&force=true&name=null&priority=0&router=condition&rule=+%3D%3E+host+%21%3D+172.22.3.91&runtime=false")])])])])])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("providres：表示当前服务提供者")])])])])]),e._v(" "),o("li",[o("ul",[o("li",[o("ul",[o("li",[o("ul",[o("li",[e._v("http://192.168.40.17:8081/org.apache.dubbo.demo.DemoService?anyhost=true&application=dubbo-demo-provider-application&bean.name=ServiceBean:org.apache.dubbo.demo.DemoService&deprecated=false&dubbo=2.0.2&dynamic=true&generic=false&interface=org.apache.dubbo.demo.DemoService&methods=sayHello&pid=21548&release=2.7.0&side=provider&timeout=6001&timestamp=1585912730742")])])])])])])])])])}),[],!1,null,null,null);o.default=r.exports}}]);