(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{533:function(t,s,_){"use strict";_.r(s);var v=_(1),e=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("hr"),t._v(" "),s("p",[t._v("title: 计算机网络下\ndate: 2022-01-29\ntags:")]),t._v(" "),s("ul",[s("li",[t._v("backInterviewQuestions\ncategories:")]),t._v(" "),s("li",[t._v("interviewQuestions")])]),t._v(" "),s("hr"),t._v(" "),s("p",[s("img",{attrs:{src:"http://blog-img.coolsen.cn/img/image-20210525175906351.png",alt:"目录"}})]),t._v(" "),s("h2",{attrs:{id:"_1-http常见的状态码有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-http常见的状态码有哪些"}},[t._v("#")]),t._v(" 1. HTTP常见的状态码有哪些？")]),t._v(" "),s("p",[t._v("常见状态码：")]),t._v(" "),s("ul",[s("li",[t._v("200：服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页。")]),t._v(" "),s("li",[t._v("301 ： (永久移动) 请求的网页已永久移动到新位置。 服务器返回此响应(对 GET 或 HEAD 请求的响应)时，会自动将请求者转到新位置。")]),t._v(" "),s("li",[t._v("302：(临时移动) 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。")]),t._v(" "),s("li",[t._v("400 ：客户端请求有语法错误，不能被服务器所理解。")]),t._v(" "),s("li",[t._v("403 ：服务器收到请求，但是拒绝提供服务。")]),t._v(" "),s("li",[t._v("404 ：(未找到) 服务器找不到请求的网页。")]),t._v(" "),s("li",[t._v("500： (服务器内部错误) 服务器遇到错误，无法完成请求。")])]),t._v(" "),s("p",[t._v("状态码开头代表类型：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://blog-img.coolsen.cn/img/image-20210525114439748.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_2-状态码301和302的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-状态码301和302的区别是什么"}},[t._v("#")]),t._v(" 2. 状态码301和302的区别是什么？")]),t._v(" "),s("p",[s("strong",[t._v("共同点")]),t._v("：301和302状态码都表示重定向，就是说浏览器在拿到服务器返回的这个状态码后会自动跳转到一个新的URL地址，这个地址可以从响应的Location首部中获取（"),s("strong",[t._v("用户看到的效果就是他输入的地址A瞬间变成了另一个地址B")]),t._v("）。\n"),s("strong",[t._v("不同点")]),t._v("：301表示旧地址A的资源已经被永久地移除了(这个资源不可访问了)，搜索引擎在抓取新内容的同时也将旧的网址交换为重定向之后的网址；302表示旧地址A的资源还在（仍然可以访问），这个重定向只是临时地从旧地址A跳转到地址B，搜索引擎会抓取新的内容而保存旧的网址。 SEO中302好于301。")]),t._v(" "),s("p",[s("strong",[t._v("补充，重定向原因")]),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("网站调整（如改变网页目录结构）；")]),t._v(" "),s("li",[t._v("网页被移到一个新地址；")]),t._v(" "),s("li",[t._v("网页扩展名改变(如应用需要把.php改成.Html或.shtml)。")])]),t._v(" "),s("h2",{attrs:{id:"_3-http-常用的请求方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-常用的请求方式"}},[t._v("#")]),t._v(" 3. HTTP 常用的请求方式？")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("GET")]),t._v(" "),s("td",[t._v("获取资源")])]),t._v(" "),s("tr",[s("td",[t._v("POST")]),t._v(" "),s("td",[t._v("传输实体主体")])]),t._v(" "),s("tr",[s("td",[t._v("PUT")]),t._v(" "),s("td",[t._v("上传文件")])]),t._v(" "),s("tr",[s("td",[t._v("DELETE")]),t._v(" "),s("td",[t._v("删除文件")])]),t._v(" "),s("tr",[s("td",[t._v("HEAD")]),t._v(" "),s("td",[t._v("和GET方法类似，但只返回报文首部，不返回报文实体主体部分")])]),t._v(" "),s("tr",[s("td",[t._v("PATCH")]),t._v(" "),s("td",[t._v("对资源进行部分修改")])]),t._v(" "),s("tr",[s("td",[t._v("OPTIONS")]),t._v(" "),s("td",[t._v("查询指定的URL支持的方法")])]),t._v(" "),s("tr",[s("td",[t._v("CONNECT")]),t._v(" "),s("td",[t._v("要求用隧道协议连接代理")])]),t._v(" "),s("tr",[s("td",[t._v("TRACE")]),t._v(" "),s("td",[t._v("服务器会将通信路径返回给客户端")])])])]),t._v(" "),s("p",[t._v("为了方便记忆，可以将PUT、DELETE、POST、GET理解为客户端对服务端的增删改查。")]),t._v(" "),s("ul",[s("li",[t._v("PUT：上传文件，向服务器添加数据，可以看作增")]),t._v(" "),s("li",[t._v("DELETE：删除文件")]),t._v(" "),s("li",[t._v("POST：传输数据，向服务器提交数据，对服务器数据进行更新。")]),t._v(" "),s("li",[t._v("GET：获取资源，查询服务器资源")])]),t._v(" "),s("h2",{attrs:{id:"_4-get请求和post请求的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-get请求和post请求的区别"}},[t._v("#")]),t._v(" 4. GET请求和POST请求的区别？")]),t._v(" "),s("p",[s("strong",[t._v("使用上的区别")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("GET使用URL或Cookie传参，而POST将数据放在BODY中”，这个是因为HTTP协议用法的约定。")])]),t._v(" "),s("li",[s("p",[t._v("GET方式提交的数据有长度限制，则POST的数据则可以非常大”，这个是因为它们使用的操作系统和浏览器设置的不同引起的区别。")])]),t._v(" "),s("li",[s("p",[t._v("POST比GET安全，因为数据在地址栏上不可见”，这个说法没毛病，但依然不是GET和POST本身的区别。")])])]),t._v(" "),s("p",[s("strong",[t._v("本质区别")])]),t._v(" "),s("p",[t._v("GET和POST最大的区别主要是GET请求是幂等性的，POST请求不是。这个是它们本质区别。")]),t._v(" "),s("p",[t._v("幂等性是指一次和多次请求某一个资源应该具有同样的副作用。简单来说意味着对同一URL的多个请求应该返回同样的结果。")]),t._v(" "),s("h2",{attrs:{id:"_5-解释一下http长连接和短连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-解释一下http长连接和短连接"}},[t._v("#")]),t._v(" 5. 解释一下HTTP长连接和短连接？")]),t._v(" "),s("p",[s("strong",[t._v("在HTTP/1.0中，默认使用的是短连接")]),t._v("。也就是说，浏览器和服务器每进行一次HTTP操作，就建立一次连接，但任务结束就中断连接。如果客户端浏览器访问的某个HTML或其他类型的 Web页中包含有其他的Web资源，如JavaScript文件、图像文件、CSS文件等；当浏览器每遇到这样一个Web资源，就会建立一个HTTP会话。")]),t._v(" "),s("p",[t._v("但从 "),s("strong",[t._v("HTTP/1.1起，默认使用长连接")]),t._v("，用以保持连接特性。使用长连接的HTTP协议，会在响应头有加入这行代码："),s("code",[t._v("Connection:keep-alive")])]),t._v(" "),s("p",[t._v("在使用长连接的情况下，当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的 TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接。Keep-Alive不会永久保持连接，它有一个保持时间，可以在不同的服务器软件（如Apache）中设定这个时间。实现长连接要客户端和服务端都支持长连接。")]),t._v(" "),s("p",[s("strong",[t._v("HTTP协议的长连接和短连接，实质上是TCP协议的长连接和短连接。")])]),t._v(" "),s("h2",{attrs:{id:"_6-http请求报文和响应报文的格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-http请求报文和响应报文的格式"}},[t._v("#")]),t._v(" 6. HTTP请求报文和响应报文的格式？")]),t._v(" "),s("p",[s("strong",[t._v("请求报文格式")]),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("请求行（请求方法+URI协议+版本）")]),t._v(" "),s("li",[t._v("请求头部")]),t._v(" "),s("li",[t._v("空行")]),t._v(" "),s("li",[t._v("请求主体")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("GET/sample.jspHTTP/1.1 请求行\nAccept:image/gif.image/jpeg, 请求头部\nAccept-Language:zh-cn\nConnection:Keep-Alive\nHost:localhost\nUser-Agent:Mozila/4.0(compatible;MSIE5.01;Window NT5.0)\nAccept-Encoding:gzip,deflate\n\nusername=jinqiao&password=1234 请求主体\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[s("strong",[t._v("响应报文")]),t._v("：")]),t._v(" "),s("ol",[s("li",[t._v("状态行（版本+状态码+原因短语）")]),t._v(" "),s("li",[t._v("响应首部")]),t._v(" "),s("li",[t._v("空行")]),t._v(" "),s("li",[t._v("响应主体")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("HTTP/1.1 200 OK\nServer:Apache Tomcat/5.0.12\nDate:Mon,6Oct2003 13:23:42 GMT\nContent-Length:112\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("HTTP响应示例"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Hello HTTP!\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"_7-http1-0和http1-1的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-http1-0和http1-1的区别"}},[t._v("#")]),t._v(" 7. HTTP1.0和HTTP1.1的区别?")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("长连接")]),t._v("：HTTP 1.1支持长连接（Persistent Connection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启"),s("code",[t._v("Connection： keep-alive")]),t._v("，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("缓存处理")]),t._v("：在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略，可供选择的缓存头来控制缓存策略。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("带宽优化及网络连接的使用")]),t._v("：HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即返回码是206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("错误通知的管理")]),t._v("：在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Host头处理")]),t._v("：在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。")])])]),t._v(" "),s("h2",{attrs:{id:"_8-http1-1和-http2-0的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-http1-1和-http2-0的区别"}},[t._v("#")]),t._v(" 8. HTTP1.1和 HTTP2.0的区别？")]),t._v(" "),s("p",[t._v("HTTP2.0相比HTTP1.1支持的特性：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("新的二进制格式")]),t._v("：HTTP1.1的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("多路复用")]),t._v("，即连接共享，即每一个request都是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("头部压缩")]),t._v("，HTTP1.1的头部（header）带有大量信息，而且每次都要重复发送；HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("服务端推送")]),t._v("：服务器除了对最初请求的响应外，服务器还可以额外的向客户端推送资源，而无需客户端明确的请求。")])])]),t._v(" "),s("h2",{attrs:{id:"_9-http-与-https-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-http-与-https-的区别"}},[t._v("#")]),t._v(" 9. HTTP 与 HTTPS 的区别？")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("HTTP")]),t._v(" "),s("th",[t._v("HTTPS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("端口")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("80")]),t._v(" "),s("td",[t._v("443")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("安全性")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("无加密，安全性较差")]),t._v(" "),s("td",[t._v("有加密机制，安全性较高")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("资源消耗")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("较少")]),t._v(" "),s("td",[t._v("由于加密处理，资源消耗更多")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("是否需要证书")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不需要")]),t._v(" "),s("td",[t._v("需要")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("协议")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("运行在TCP协议之上")]),t._v(" "),s("td",[t._v("运行在SSL协议之上，SSL运行在TCP协议之上")])])])]),t._v(" "),s("h2",{attrs:{id:"_10-https-的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-https-的优缺点"}},[t._v("#")]),t._v(" 10. HTTPS 的优缺点?")]),t._v(" "),s("p",[s("strong",[t._v("优点")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安全性：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；")])]),t._v(" "),s("li",[s("p",[t._v("HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。")])]),t._v(" "),s("li",[s("p",[t._v("HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。")])])])]),t._v(" "),s("li",[s("p",[t._v("SEO方面：谷歌曾在2014年8月份调整搜索引擎算法，并称“比起同等HTTP网站，采用HTTPS加密的网站在搜索结果中的排名将会更高”。")])])]),t._v(" "),s("p",[s("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("在相同网络环境中，HTTPS 相比 HTTP 无论是响应时间还是耗电量都有大幅度上升。")]),t._v(" "),s("li",[t._v("HTTPS 的安全是有范围的，在黑客攻击、服务器劫持等情况下几乎起不到作用。")]),t._v(" "),s("li",[t._v("在现有的证书机制下，中间人攻击依然有可能发生。")]),t._v(" "),s("li",[t._v("HTTPS 需要更多的服务器资源，也会导致成本的升高。")])]),t._v(" "),s("h2",{attrs:{id:"_11-讲一讲https-的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-讲一讲https-的原理"}},[t._v("#")]),t._v(" 11. 讲一讲HTTPS 的原理？")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://blog-img.coolsen.cn/img/image-20210525160006424.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("图片来源：https://segmentfault.com/a/1190000021494676")])]),t._v(" "),s("p",[t._v("加密流程按图中的序号分为：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("客户端请求 HTTPS 网址，然后连接到 server 的 443 端口 (HTTPS 默认端口，类似于 HTTP 的80端口)。")])]),t._v(" "),s("li",[s("p",[t._v("采用 HTTPS 协议的服务器必须要有一套数字 CA (Certification Authority)证书。颁发证书的同时会产生一个私钥和公钥。私钥由服务端自己保存，不可泄漏。公钥则是附带在证书的信息中，可以公开的。证书本身也附带一个证书电子签名，这个签名用来验证证书的完整性和真实性，可以防止证书被篡改。")])]),t._v(" "),s("li",[s("p",[t._v("服务器响应客户端请求，将证书传递给客户端，证书包含公钥和大量其他信息，比如证书颁发机构信息，公司信息和证书有效期等。")])]),t._v(" "),s("li",[s("p",[t._v("客户端解析证书并对其进行验证。如果证书不是可信机构颁布，或者证书中的域名与实际域名不一致，或者证书已经过期，就会向访问者显示一个警告，由其选择是否还要继续通信。")]),t._v(" "),s("p",[t._v("如果证书没有问题，客户端就会从服务器证书中取出服务器的公钥A。然后客户端还会生成一个随机码 KEY，并使用公钥A将其加密。")])]),t._v(" "),s("li",[s("p",[t._v("客户端把加密后的随机码 KEY 发送给服务器，作为后面对称加密的密钥。")])]),t._v(" "),s("li",[s("p",[t._v("服务器在收到随机码 KEY 之后会使用私钥B将其解密。经过以上这些步骤，客户端和服务器终于建立了安全连接，完美解决了对称加密的密钥泄露问题，接下来就可以用对称加密愉快地进行通信了。")])]),t._v(" "),s("li",[s("p",[t._v("服务器使用密钥 (随机码 KEY)对数据进行对称加密并发送给客户端，客户端使用相同的密钥 (随机码 KEY)解密数据。")])]),t._v(" "),s("li",[s("p",[t._v("双方使用对称加密愉快地传输所有数据。")])])]),t._v(" "),s("h2",{attrs:{id:"_12-在浏览器中输入www-baidu-com后执行的全部过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-在浏览器中输入www-baidu-com后执行的全部过程"}},[t._v("#")]),t._v(" 12. 在浏览器中输入www.baidu.com后执行的全部过程？")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("域名解析（域名 "),s("a",{attrs:{href:"http://www.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.baidu.com "),s("OutboundLink")],1),t._v("变为 ip 地址）。")]),t._v(" "),s("p",[s("strong",[t._v("浏览器搜索自己的DNS缓存")]),t._v("（维护一张域名与IP的对应表）；若没有，则搜索"),s("strong",[t._v("操作系统的DNS缓存")]),t._v("（维护一张域名与IP的对应表）；若没有，则搜索操作系统的"),s("strong",[t._v("hosts文件")]),t._v("（维护一张域名与IP的对应表）。")]),t._v(" "),s("p",[t._v("若都没有，则找 tcp/ip 参数中设置的首选 dns 服务器，即"),s("strong",[t._v("本地 dns 服务器")]),t._v("（递归查询），"),s("strong",[t._v("本地域名服务器查询自己的dns缓存")]),t._v("，如果没有，则进行迭代查询。将本地dns服务器将IP返回给操作系统，同时缓存IP。")])]),t._v(" "),s("li",[s("p",[t._v("发起 tcp 的三次握手，建立 tcp 连接。浏览器会以一个随机端口（1024-65535）向服务端的 web 程序 "),s("strong",[t._v("80")]),t._v(" 端口发起 tcp 的连接。")])]),t._v(" "),s("li",[s("p",[t._v("建立 tcp 连接后发起 http 请求。")])]),t._v(" "),s("li",[s("p",[t._v("服务器响应 http 请求，客户端得到 html 代码。服务器 web 应用程序收到 http 请求后，就开始处理请求，处理之后就返回给浏览器 html 文件。")])]),t._v(" "),s("li",[s("p",[t._v("浏览器解析 html 代码，并请求 html 中的资源。")])]),t._v(" "),s("li",[s("p",[t._v("浏览器对页面进行渲染，并呈现给用户。")])])]),t._v(" "),s("p",[t._v("附一张形象的图片："),s("img",{attrs:{src:"http://blog-img.coolsen.cn/img/image-20210525172545204.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_13-什么是-cookie-和-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-什么是-cookie-和-session"}},[t._v("#")]),t._v(" 13. 什么是 Cookie 和 Session ?")]),t._v(" "),s("p",[s("strong",[t._v("什么是 Cookie")])]),t._v(" "),s("p",[t._v("HTTP Cookie（也叫 Web Cookie或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。")]),t._v(" "),s("p",[t._v("Cookie 主要用于以下三个方面：")]),t._v(" "),s("ul",[s("li",[t._v("会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）")]),t._v(" "),s("li",[t._v("个性化设置（如用户自定义设置、主题等）")]),t._v(" "),s("li",[t._v("浏览器行为跟踪（如跟踪分析用户行为等）")])]),t._v(" "),s("p",[s("strong",[t._v("什么是 Session")])]),t._v(" "),s("p",[t._v("Session 代表着服务器和客户端一次会话的过程。Session 对象存储特定用户会话所需的属性及配置信息。这样，当用户在应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。当客户端关闭会话，或者 Session 超时失效时会话结束。")]),t._v(" "),s("h2",{attrs:{id:"_14-cookie-和-session-是如何配合的呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-cookie-和-session-是如何配合的呢"}},[t._v("#")]),t._v(" 14. Cookie 和 Session 是如何配合的呢？")]),t._v(" "),s("p",[t._v("用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的 Session ，请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器，浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名。")]),t._v(" "),s("p",[t._v("当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。")]),t._v(" "),s("p",[t._v("根据以上流程可知，SessionID 是连接 Cookie 和 Session 的一道桥梁，大部分系统也是根据此原理来验证用户登录状态。")]),t._v(" "),s("h2",{attrs:{id:"_15-cookie和session的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-cookie和session的区别"}},[t._v("#")]),t._v(" 15. Cookie和Session的区别？")]),t._v(" "),s("ul",[s("li",[t._v("作用范围不同，Cookie 保存在客户端（浏览器），Session 保存在服务器端。")]),t._v(" "),s("li",[t._v("存取方式的不同，Cookie 只能保存 ASCII，Session 可以存任意数据类型，一般情况下我们可以在 Session 中保持一些常用变量信息，比如说 UserId 等。")]),t._v(" "),s("li",[t._v("有效期不同，Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭或者 Session 超时都会失效。")]),t._v(" "),s("li",[t._v("隐私策略不同，Cookie 存储在客户端，比较容易遭到不法获取，早期有人将用户的登录名和密码存储在 Cookie 中导致信息被窃取；Session 存储在服务端，安全性相对 Cookie 要好一些。")]),t._v(" "),s("li",[t._v("存储大小不同， 单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie。")])]),t._v(" "),s("h2",{attrs:{id:"_16-如何考虑分布式-session-问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-如何考虑分布式-session-问题"}},[t._v("#")]),t._v(" 16. 如何考虑分布式 Session 问题？")]),t._v(" "),s("p",[t._v("在互联网公司为了可以支撑更大的流量，后端往往需要多台服务器共同来支撑前端用户请求，那如果用户在 A 服务器登录了，第二次请求跑到服务 B 就会出现登录失效问题。")]),t._v(" "),s("p",[t._v("分布式 Session 一般会有以下几种解决方案：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("客户端存储")]),t._v("：直接将信息存储在cookie中，cookie是存储在客户端上的一小段数据，客户端通过http协议和服务器进行cookie交互，通常用来存储一些不敏感信息")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Nginx ip_hash 策略")]),t._v("：服务端使用 Nginx 代理，每个请求按访问 IP 的 hash 分配，这样来自同一 IP 固定访问一个后台服务器，避免了在服务器 A 创建 Session，第二次分发到服务器 B 的现象。")]),t._v(" "),s("li",[s("strong",[t._v("Session 复制")]),t._v("：任何一个服务器上的 Session 发生改变（增删改），该节点会把这个 Session 的所有内容序列化，然后广播给所有其它节点。")]),t._v(" "),s("li",[s("strong",[t._v("共享 Session")]),t._v("：服务端无状态话，将用户的 Session 等信息使用缓存中间件（如Redis）来统一管理，保障分发到每一个服务器的响应结果都一致。")])]),t._v(" "),s("p",[t._v("建议采用共享 Session的方案。")]),t._v(" "),s("h2",{attrs:{id:"_17-什么是ddos攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-什么是ddos攻击"}},[t._v("#")]),t._v(" 17. 什么是DDos攻击？")]),t._v(" "),s("p",[t._v("DDos全称Distributed Denial of Service，分布式拒绝服务攻击。最基本的DOS攻击过程如下：")]),t._v(" "),s("ol",[s("li",[t._v("客户端向服务端发送请求链接数据包。")]),t._v(" "),s("li",[t._v("服务端向客户端发送确认数据包。")]),t._v(" "),s("li",[t._v("客户端不向服务端发送确认数据包，服务器一直等待来自客户端的确认")])]),t._v(" "),s("p",[t._v("DDoS则是采用分布式的方法，通过在网络上占领多台“肉鸡”，用多台计算机发起攻击。")]),t._v(" "),s("p",[t._v("DOS攻击现在基本没啥作用了，因为服务器的性能都很好，而且是多台服务器共同作用，1V1的模式黑客无法占上风。对于DDOS攻击，预防方法有：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("减少SYN timeout时间")]),t._v("。在握手的第三步，服务器会等待30秒-120秒的时间，减少这个等待时间就能释放更多的资源。")]),t._v(" "),s("li",[s("strong",[t._v("限制同时打开的SYN半连接数目。")])])]),t._v(" "),s("h2",{attrs:{id:"_18-什么是xss攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18-什么是xss攻击"}},[t._v("#")]),t._v(" 18. 什么是XSS攻击？")]),t._v(" "),s("p",[t._v("XSS也称 cross-site scripting，"),s("strong",[t._v("跨站脚本")]),t._v("。这种攻击是"),s("strong",[t._v("由于服务器将攻击者存储的数据原原本本地显示给其他用户所致的")]),t._v("。比如一个存在XSS漏洞的论坛，用户发帖时就可以引入"),s("strong",[t._v("带有＜script＞标签的代码")]),t._v("，导致恶意代码的执行。")]),t._v(" "),s("p",[t._v("预防措施有：")]),t._v(" "),s("ul",[s("li",[t._v("前端：过滤。")]),t._v(" "),s("li",[t._v("后端：转义，比如go自带的处理器就具有转义功能。")])]),t._v(" "),s("h2",{attrs:{id:"_19-sql注入是什么-如何避免sql注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19-sql注入是什么-如何避免sql注入"}},[t._v("#")]),t._v(" 19. SQL注入是什么，如何避免SQL注入？")]),t._v(" "),s("p",[t._v("SQL 注入就是在用户输入的字符串中加入 SQL 语句，如果在设计不良的程序中忽略了检查，那么这些注入进去的 SQL 语句就会被数据库服务器误认为是正常的 SQL 语句而运行，攻击者就可以执行计划外的命令或访问未被授权的数据。")]),t._v(" "),s("p",[s("strong",[t._v("SQL注入的原理主要有以下 4 点")])]),t._v(" "),s("ul",[s("li",[t._v("恶意拼接查询")]),t._v(" "),s("li",[t._v("利用注释执行非法命令")]),t._v(" "),s("li",[t._v("传入非法参数")]),t._v(" "),s("li",[t._v("添加额外条件")])]),t._v(" "),s("p",[s("strong",[t._v("避免SQL注入的一些方法")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("限制数据库权限，给用户提供仅仅能够满足其工作的最低权限。")]),t._v(" "),s("li",[t._v("对进入数据库的特殊字符（’”\\尖括号&*;等）转义处理。")]),t._v(" "),s("li",[t._v("提供参数化查询接口，不要直接使用原生SQL。")])]),t._v(" "),s("h2",{attrs:{id:"_20-负载均衡算法有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20-负载均衡算法有哪些"}},[t._v("#")]),t._v(" 20. 负载均衡算法有哪些？")]),t._v(" "),s("p",[t._v("多台服务器以对称的方式组成一个服务器集合，每台服务器都具有等价的地位，能互相分担负载。")]),t._v(" "),s("ul",[s("li",[t._v("轮询法：将请求按照顺序轮流的分配到服务器上。大锅饭，不能发挥某些高性能服务器的优势。")]),t._v(" "),s("li",[t._v("随机法：随机获取一台，和轮询类似。")]),t._v(" "),s("li",[t._v("哈希法：通过ip地址哈希化来确定要选择的服务器编号。好处是,每次客户端访问的服务器都是同一个服务器，能很好地利用session或者cookie。")]),t._v(" "),s("li",[t._v("加权轮询：根据服务器性能不同加权。")])]),t._v(" "),s("h2",{attrs:{id:"end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[t._v("#")]),t._v(" End")]),t._v(" "),s("p",[t._v("更文不易，点赞鼓励下呗~我将持续输出干货，与你共同成长～")]),t._v(" "),s("p",[t._v("还有，秋招求职交流群持续开放，扫码加我，备注秋招，拉你进群。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://blog-img.coolsen.cn/img/image-20210508163936952.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"巨人的肩膀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#巨人的肩膀"}},[t._v("#")]),t._v(" 巨人的肩膀")]),t._v(" "),s("p",[t._v("https://juejin.cn/post/6844903890840715271")]),t._v(" "),s("p",[t._v("https://www.justdojava.com/2019/11/03/Network_interview_question/")]),t._v(" "),s("p",[t._v("https://juejin.cn/post/6844903489596833800")]),t._v(" "),s("p",[t._v("https://segmentfault.com/a/1190000021494676")]),t._v(" "),s("p",[t._v("https://jiangren.work/2020/02/16/")]),t._v(" "),s("p",[t._v("https://www.cnblogs.com/ityouknow/p/10856177.html")]),t._v(" "),s("p",[t._v("https://juejin.cn/post/6844903575684907016")])])}),[],!1,null,null,null);s.default=e.exports}}]);