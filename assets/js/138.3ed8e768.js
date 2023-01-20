(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{584:function(a,e,s){"use strict";s.r(e);var t=s(1),n=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"shiro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shiro"}},[a._v("#")]),a._v(" Shiro")]),a._v(" "),e("h1",{attrs:{id:"springsecurity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springsecurity"}},[a._v("#")]),a._v(" SpringSecurity")]),a._v(" "),e("p",[a._v("authentication 认证  确定用户身份   用户名密码验证")]),a._v(" "),e("p",[a._v("authorization 授权  对用户访问系统资源的行为做控制。  后台接口访问， 前台页面元素，敏感数据")]),a._v(" "),e("p",[a._v("RBAC   role based access control")]),a._v(" "),e("h2",{attrs:{id:"了解shiro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解shiro"}},[a._v("#")]),a._v(" 了解shiro")]),a._v(" "),e("h2",{attrs:{id:"shiro-quickstart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shiro-quickstart"}},[a._v("#")]),a._v(" Shiro QuickStart")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Subject currentUser = SecurityUtils.getSubject(); \nSession session = currentUser.getSession();\n//认证\ncurrentUser.login(token);  //通过抛出的异常来判断用户登录结果\n//授权\ncurrentUser.hasRole\ncurrentUser.isPermitted\ncurrentUser.isAuthenticated()\n\ncurrentUser.logout();\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("h2",{attrs:{id:"shiroweb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shiroweb"}},[a._v("#")]),a._v(" ShiroWeb")]),a._v(" "),e("p",[a._v("基础框架搭建：  shiro配置三板斧")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("package com.tuling.shiroweb.config;\n\nimport org.apache.shiro.realm.Realm;\nimport org.apache.shiro.spring.web.ShiroFilterFactoryBean;\nimport org.apache.shiro.web.mgt.DefaultWebSecurityManager;\nimport org.apache.shiro.web.servlet.ShiroFilter;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class ShiroConfig {\n\n    //1 Realm  代表系统资源\n    @Bean\n    public Realm myRealm(){\n        return new MyRealm();\n    }\n    //2 SecurityManager 流程控制\n    @Bean\n    public DefaultWebSecurityManager mySecurityManager(Realm myRealm){\n        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();\n        securityManager.setRealm(myRealm);\n\n        return securityManager;\n    }\n    //3 ShiroFilterFactoryBean 请求过滤器\n    @Bean\n    public ShiroFilterFactoryBean getShiroFilterFactoryBean(DefaultWebSecurityManager mySecurityManager){\n        ShiroFilterFactoryBean factoryBean = new ShiroFilterFactoryBean();\n        factoryBean.setSecurityManager(mySecurityManager);\n\n        return factoryBean;\n    }\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br"),e("span",{staticClass:"line-number"},[a._v("32")]),e("br"),e("span",{staticClass:"line-number"},[a._v("33")]),e("br"),e("span",{staticClass:"line-number"},[a._v("34")]),e("br")])]),e("h3",{attrs:{id:"实现登录验证功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现登录验证功能"}},[a._v("#")]),a._v(" 实现登录验证功能")]),a._v(" "),e("p",[a._v("​\t1、创建自己的Realm对象，继承AuthorizingRealm。")]),a._v(" "),e("p",[a._v("​\t实现父类的doGetAuthenticationInfo 认证方法。")]),a._v(" "),e("p",[a._v("​\t2、配置路径过滤器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('//配置路径过滤器\nMap<String,String> filterMap = new HashMap<>();\n//key是ant路径，支持**代表多级路径，*代表单级路径，？代表一个字符\nfilterMap.put("")\n\nfactoryBean.setFilterChainDefinitionMap(filterMap);\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("目前实现的功能：")]),a._v(" "),e("p",[a._v("1、已经可以正常判断用户名和密码。")]),a._v(" "),e("p",[a._v("2、两个资源路径需要登录才可以访问。 否则跳到了login.jsp")]),a._v(" "),e("h3",{attrs:{id:"修复登录认证错误的访问情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修复登录认证错误的访问情况"}},[a._v("#")]),a._v(" 修复登录认证错误的访问情况")]),a._v(" "),e("p",[a._v("设置登录页、登录成功页、未经授权页")]),a._v(" "),e("p",[a._v("登出，有两种方式")]),a._v(" "),e("p",[a._v("一")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('@RequestMapping("/logout")\npublic void logout() {\n    Subject currentUser = SecurityUtils.getSubject();\n    currentUser.logout();\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("二、使用shiro提供的logout过滤器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('filterMap.put("/common/logout","logout");\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"实现授权功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现授权功能"}},[a._v("#")]),a._v(" 实现授权功能")]),a._v(" "),e("p",[a._v("目标：")]),a._v(" "),e("p",[a._v("1、控制主页上按钮的访问权限")]),a._v(" "),e("p",[a._v("​\tcurrentUser.getPricipal()   来自于  MyRealm中doGetAuthenticationInfo认证方法返回的SimpleAuthenticationInfo对象的第一个属性。")]),a._v(" "),e("p",[a._v("2、控制后台资源路径的访问权限")]),a._v(" "),e("p",[a._v("​\t方法1、硬编码的方式，自行判断权限。")]),a._v(" "),e("p",[a._v("​\t方法2、使用shiro提供的perms过滤器，集中配置权限信息。")]),a._v(" "),e("p",[a._v("​\t\t错误补充机制：没有权限就会进入ShiroFilterFactoryBean中配置的UnauthorizedUrl")]),a._v(" "),e("p",[a._v("​\t方法3、使用shiro提供的注解，实现方法级别的权限控制。")]),a._v(" "),e("p",[a._v("​\t\t@RequiresAuthentication  需要完成用户登录")]),a._v(" "),e("p",[a._v("​\t\t@RequiresGuest  未登录用户可以访问，登录用就不能访问。")]),a._v(" "),e("p",[a._v("​\t\t@RequiresPermissions 需要有对应资源权限")]),a._v(" "),e("p",[a._v("​\t\t@RequiresRoles  需要有对应的角色")]),a._v(" "),e("p",[a._v("​\t\t@RequiresUser  需要完成用户登录并且完成了记住我功能。")]),a._v(" "),e("p",[a._v("​\t错误补充机制：没有权限就会抛出异常。")]),a._v(" "),e("h2",{attrs:{id:"密码加密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#密码加密"}},[a._v("#")]),a._v(" 密码加密")]),a._v(" "),e("p",[a._v("shiro会获得一个CredentialsMatcher对象，来对密码进行比对。")]),a._v(" "),e("p",[a._v("想要用MD5方式进行加密：")]),a._v(" "),e("p",[a._v("​\tMd5CredentialsMatcher已经过期， 要使用HashedCredentialsMatcher并设定算法名。")]),a._v(" "),e("p",[a._v("HashedCredentialsMatcher")]),a._v(" "),e("p",[a._v("​\tString hashAlgorithm, 对应Hash接口的实现类。  MD5")]),a._v(" "),e("p",[a._v("​\tint hashIterations Hash迭代次数。")]),a._v(" "),e("p",[a._v("​\tboolean hashSalted  已过时，不用设置")]),a._v(" "),e("p",[a._v("​\tboolean storedCredentialsHexEncoded  设置默认的true")]),a._v(" "),e("p",[a._v("加盐加密：")]),a._v(" "),e("p",[a._v("​\t需要在认证返回的认证信息SimpleAuthenticationInfo中，指定需要加的盐salt。这样算出来的密文才可以和数据库中的密文进行比对。")]),a._v(" "),e("h2",{attrs:{id:"多realm认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多realm认证"}},[a._v("#")]),a._v(" 多Realm认证")]),a._v(" "),e("p",[a._v("要实现用户名和手机号都可以登录的功能。")]),a._v(" "),e("p",[a._v("org.apache.shiro.authc.pam.ModularRealmAuthenticator")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("protected AuthenticationInfo doAuthenticate(AuthenticationToken authenticationToken) throws AuthenticationException {\n    assertRealmsConfigured();\n    Collection<Realm> realms = getRealms();\n    if (realms.size() == 1) {\n        return doSingleRealmAuthentication(realms.iterator().next(), authenticationToken);\n    } else {\n        return doMultiRealmAuthentication(realms, authenticationToken);\n    }\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[a._v("可以定义多个Realm完成不同的认证功能。")]),a._v(" "),e("p",[a._v("我们通过增加一个MobileRealm，就实现了按照手机号也可以登录的功能。")]),a._v(" "),e("p",[a._v("多Realm的认证策略")]),a._v(" "),e("p",[a._v("AuthenticationStrategy接口 有三个实现类")]),a._v(" "),e("p",[a._v("​\t\tAllSuccessfulStrategy   需要所有Realm认证成功，才能最终认证成功。")]),a._v(" "),e("p",[a._v("​\t\tAtLeastOneSuccessfulStrategy  至少有一个Realm认证成功，才能最终认证成功。")]),a._v(" "),e("p",[a._v("​\t\tFirstSuccessfulStrategy    第一个Realm认证成功后即返回认证成功，不再进行后面的Realm认证。")]),a._v(" "),e("h2",{attrs:{id:"记住我-功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记住我-功能"}},[a._v("#")]),a._v(" 记住我 功能")]),a._v(" "),e("p",[a._v("回顾记住我的功能。")]),a._v(" "),e("p",[a._v("​\ttoken.setRememberMe(true);")]),a._v(" "),e("p",[a._v("记住我 功能对应了 默认的user过滤器。")]),a._v(" "),e("p",[a._v("怎么设置记住我的时长，以及记到哪里。")]),a._v(" "),e("p",[a._v("securityManager.setRememberMeManager(rememberMeManager); 管理RememberMe的数据")]),a._v(" "),e("h2",{attrs:{id:"会话管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#会话管理"}},[a._v("#")]),a._v(" 会话管理")]),a._v(" "),e("p",[a._v("securityManager.setSessionManager(sessionManager); 实现会话管理")]),a._v(" "),e("h2",{attrs:{id:"认证缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认证缓存"}},[a._v("#")]),a._v(" 认证缓存")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("MemoryConstrainedCacheManager cacheManager = new MemoryConstrainedCacheManager();\nsecurityManager.setCacheManager(cacheManager);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("记住我，会话管理以及认证缓存，都可以通过扩展对应的manager接口的方式，实现自己的灵活扩展，比如将信息共享到redis。")]),a._v(" "),e("h2",{attrs:{id:"realm类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#realm类型"}},[a._v("#")]),a._v(" Realm类型")])])}),[],!1,null,null,null);e.default=n.exports}}]);