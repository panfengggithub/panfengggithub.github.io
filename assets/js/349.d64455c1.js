(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{762:function(e,t,r){"use strict";r.r(t);var i=r(1),v=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fegin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fegin"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Fegin")])]),e._v(" "),t("h3",{attrs:{id:"feign是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feign是什么"}},[e._v("#")]),e._v(" feign是什么  :")]),e._v(" "),t("p",[e._v("​\t\tFeign是一个声明式WebService客户端。使用Feign能让编写Web Service客户端更加简单, 它的使用方法是定义一个接口，然后在上面添加注解，同时也支持JAX-RS标准的注解。Feign也支持可拔插式的编码器和解码器。Spring Cloud对Feign进行了封装，使其支持了Spring MVC标准注解和HttpMessageConverters。Feign可以与Eureka和Ribbon组合使用以支持负载均衡。")]),e._v(" "),t("h3",{attrs:{id:"feign-能干什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feign-能干什么"}},[e._v("#")]),e._v(" feign 能干什么：")]),e._v(" "),t("p",[e._v("Feign旨在使编写Java Http客户端变得更容易。                                                                                                                  前面在使用Ribbon+RestTemplate时，利用RestTemplate对http请求的封装处理，形成了一套模版化的调用方法。但是在实际开发中，由于对服务依赖的调用可能不止一处，往往一个接口会被多处调用，所以通常都会针对每个微服务自行封装一些客户端类来包装这些依赖服务的调用。所以，Feign在此基础上做了进一步封装，由他来帮助我们定义和实现依赖服务接口的定义。在Feign的实现下，我们只需创建一个接口并使用注解的方式来配置它(以前是Dao接口上面标注Mapper注解,现在是一个微服务接口上面标注一个Feign注解即可)，即可完成对服务提供方的接口绑定，简化了使用Spring cloud Ribbon时，自动封装服务调用客户端的开发量。")]),e._v(" "),t("h3",{attrs:{id:"如何使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[e._v("#")]),e._v(" 如何使用？")]),e._v(" "),t("p",[e._v("在客户端(User)引入依赖：")]),e._v(" "),t("dependency",[t("p",[t("groupId",[e._v("org.springframework.cloud")])],1),e._v(" "),t("p",[t("artifactId",[e._v("spring-cloud-starter-openfeign")])],1)]),e._v(" "),t("p",[e._v("在启动类上面加上注解:@EnableFeignClients")]),e._v(" "),t("p",[e._v("然后编写一个service类加上@FeignClient()注解 参数就是你的微服务名字")]),e._v(" "),t("p",[e._v('@FeignClient("SERVER-POWER")')]),e._v(" "),t("p",[e._v("public interface PowerServiceClient {")]),e._v(" "),t("p",[e._v('@RequestMapping("/power.do")')]),e._v(" "),t("p",[e._v("public Object power();")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("下面是调用代码：")]),e._v(" "),t("p",[e._v("package com.luban.controller;")]),e._v(" "),t("p",[e._v("import com.luban.service.OrderServiceClient;")]),e._v(" "),t("p",[e._v("import com.luban.service.PowerServiceClient;")]),e._v(" "),t("p",[e._v("import org.springframework.beans.factory.annotation.Autowired;")]),e._v(" "),t("p",[e._v("import org.springframework.web.bind.annotation.RequestMapping;")]),e._v(" "),t("p",[e._v("import org.springframework.web.bind.annotation.RestController;")]),e._v(" "),t("p",[e._v("import org.springframework.web.client.RestTemplate;")]),e._v(" "),t("p",[e._v("@RestController")]),e._v(" "),t("p",[e._v("public class UserController {")]),e._v(" "),t("p",[e._v('private static final String URL="http://SERVER-POWER";')]),e._v(" "),t("p",[e._v("@Autowired")]),e._v(" "),t("p",[e._v("private RestTemplate restTemplate;")]),e._v(" "),t("p",[e._v("@Autowired")]),e._v(" "),t("p",[e._v("PowerServiceClient powerServiceClient;")]),e._v(" "),t("p",[e._v('@RequestMapping("/power.do")')]),e._v(" "),t("p",[e._v("public Object power(){")]),e._v(" "),t("p",[e._v('​     return  restTemplate.getForObject(URL+"/power.do",Object.class);')]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v('@RequestMapping("/feignPower.do")')]),e._v(" "),t("p",[e._v("public Object feignPower(){")]),e._v(" "),t("p",[e._v("​     return powerServiceClient.power();")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("这里拿了RestTemplate做对比  可以看看2者区别")]),e._v(" "),t("p",[e._v("Feign集成了Ribbon")]),e._v(" "),t("p",[e._v("利用Ribbon维护了服务列表信息，并且融合了Ribbon的负载均衡配置，也就是说之前自定义的负载均衡也有效，这里需要你们自己跑一遍理解一下。而与Ribbon不同的是，通过feign只需要定义服务绑定接口且以声明式的方法，优雅而简单的实现了服务调用")])],1)}),[],!1,null,null,null);t.default=v.exports}}]);