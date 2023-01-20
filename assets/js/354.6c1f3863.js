(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{770:function(n,s,e){"use strict";e.r(s);var a=e(1),t=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"什么是nio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是nio"}},[n._v("#")]),n._v(" "),s("strong",[n._v("什么是Nio")])]),n._v(" "),s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言：")]),n._v(" "),s("p",[n._v("不知道大家想过没有，java BIo服务端为什么要一个线程对应一个连接，为什么一定要开线程去处理，为什么会出现NIo,一个网络完整的请求经过了哪些步骤，NIo reactor单线程模型怎么实现，有什么缺点？本文会分为几个部分，为大家一一解答。如果能理解此篇文章，会对后面学习Nio的各种reactor模式非常有帮助。")]),n._v(" "),s("h1",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[n._v("#")]),n._v(" 目录：")]),n._v(" "),s("p",[n._v("一个网络完整的请求经过了哪些步骤")]),n._v(" "),s("p",[n._v("java BIO缺点")]),n._v(" "),s("p",[n._v("NIo reactor单线程模型怎么实现，有什么缺点")]),n._v(" "),s("h1",{attrs:{id:"主文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主文"}},[n._v("#")]),n._v(" 主文：")]),n._v(" "),s("h2",{attrs:{id:"一个网络完整的请求经过了哪些步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个网络完整的请求经过了哪些步骤"}},[n._v("#")]),n._v(" 一个网络完整的请求经过了哪些步骤？")]),n._v(" "),s("p",[n._v("假设一个人发生消息给另外一个人需要经过如下这几步：")]),n._v(" "),s("p",[n._v("1.准备消息")]),n._v(" "),s("p",[n._v("2.编码，比如我有一个字符串的消息要发送出去，那么发送出去之前要把这个字符串消息转为字节（Byte）,这是因为网络上传输的不能是原本的字符串；又比如，我要给发送出去的消息加一个消息标识，用来以后另一端收消息的程序可以用来解决粘包拆包问题")]),n._v(" "),s("p",[n._v("3.将消息发送到网络通道，write方法")]),n._v(" "),s("p",[n._v("4.网络传输")]),n._v(" "),s("p",[n._v("5.程序另一端读取数据，read方法")]),n._v(" "),s("p",[n._v("6.解码，和编码相对应，比如发送过来的消息，是字符串转为字节，那么解码要做的事就是把字节转为字符串；又或者数据还加了标识，就要根据这个标识去读取数据，解决粘包拆包问题")]),n._v(" "),s("p",[n._v("7.处理业务逻辑，比如是做群聊场景，那么当程序收到消息之后，要将这条转发给对应群聊中的每一个人")]),n._v(" "),s("p",[n._v("8.准备数据响应给消息发送者，回到第一步")]),n._v(" "),s("p",[n._v("步骤①②③属于消息发送着要做的事情")]),n._v(" "),s("p",[n._v("步骤⑤⑥⑦是消息接收者要做的事情")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/571262/1585295650426-c951e6b1-def7-479f-a573-a0cc072e5f70.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_43%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}}),s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650539-9c77df84-9f23-42c5-9898-02f7a349309e.gif",alt:"img"}})]),n._v(" "),s("p",[n._v("一个完整的网络通信请求，就是客户端发送消息，服务端读取消息，服务端响应消息给客户端，客户端读取消息。客户端和服务端都会经过上述七个步骤。")]),n._v(" "),s("h2",{attrs:{id:"java-bio缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-bio缺点"}},[n._v("#")]),n._v(" java BIO缺点")]),n._v(" "),s("p",[n._v("Bio当中两个会导致程序阻塞的方法：")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("socket.getInputStream().read(b);此方法会一直阻塞到有数据输入，此socket对应的客户端发送了数据，\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650600-7cedb11e-0c63-4115-9dae-62c113fbb9ed.gif",alt:"img"}})]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("serverSocket.accept();此方法会一直阻塞到有客户端连接\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650552-913579a2-f3a7-43ce-8589-8b19f33cfb31.gif",alt:"img"}})]),n._v(" "),s("p",[n._v("java BIo服务端为什么要一个线程对应一个连接，为什么一定要开线程去处理？")]),n._v(" "),s("p",[n._v("下面附上一段Bio不开线程去处理的代码，然后我们来分析一下会出现什么情况：")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v('package com.luban.bio;\nimport com.luban.utils.HttpUtil;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.io.OutputStream;\nimport java.net.ServerSocket;\nimport java.net.Socket;\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\npublic class BioServer {\n    public static void main(String[] args) {\n        try {\n            ServerSocket serverSocket=new ServerSocket(1388);\n            while (true){\n                Socket socket = serverSocket.accept();  //阻塞\n                System.out.println(socket.getRemoteSocketAddress().toString()+"来连接了");\n                while (true){\n                    InputStream inputStream = null;\n                    OutputStream outputStream = null;\n                    try {\n                        inputStream = socket.getInputStream();\n                        outputStream = socket.getOutputStream();\n                    } catch (IOException e) {\n                        e.printStackTrace();\n                    }\n                    try {\n                        byte[] bytes = new byte[1024];\n                        inputStream.read(bytes);//阻塞\n                        System.out.println(new String(bytes));\n                        outputStream.write(HttpUtil.getHttpResponseContext200(new SimpleDateFormat("yyyy-MM-dd hh:dd:ss").format(new Date())).getBytes("utf-8"));\n                        outputStream.flush();\n                    }catch (Exception e){\n                        e.printStackTrace();\n                    }\n                }\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650532-29c50017-6b37-4dcf-a418-19bf7e18a1a1.gif",alt:"img"}})]),n._v(" "),s("p",[n._v("因为serverSocket.accept()接受客户端连接方法，必须等到有客户端来接连的时候才会解阻塞；inputStream.read(bytes)必须等此客户端发来了数据才会解阻塞。serverSocket.accept()没有客户端来连接一直阻塞不动，inputStream.read(bytes)客户端没有发来数据一直阻塞，代码不会往下执行。按我如上代码，如果一个客户端来连接之后，这个客户端没有发来数据代码则一直卡在inputStream.read(bytes)不动，serverSocket.accept()方法得不到调用，那么此时有客户端来连接，是不会接受连接的，必须要等到第一个连接上来的客户端发来了数据才可以。同理，当第一个连接上来的客户端发来了数据，代码将执行到serverSocket.accept()阻塞，那么此时第一个连接上来的客户端发来了数据，inputStream.read(bytes)方法不会调用，那么就不会读取客户端发来的数据，客户端发来一条数据，服务器有可能半天不会响应。")]),n._v(" "),s("p",[n._v("所以java BIo服务端一定要开线程去处理。")]),n._v(" "),s("p",[n._v("附上BIo经典编码模式代码：")]),n._v(" "),s("p",[n._v("服务端mian程序入口：")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("package com.luban.luban.io;\nimport java.io.IOException;\nimport java.net.ServerSocket;\nimport java.net.Socket;\npublic class BioServer {\n    public static void main(String[] args) throws IOException {\n        int port=8080;\n        if(args!=null&&args.length>0){\n            try {\n                port=Integer.valueOf(args[0]);\n            }catch (Exception e){\n            }\n        }\n        ServerSocket serverSocket=null;\n        try {\n            serverSocket=new ServerSocket(port);\n            while (true){\n                Socket socket = serverSocket.accept();\n                new Thread(new TimeServerHandler(socket)).start();\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        }finally {\n            if(serverSocket!=null){\n                serverSocket.close();\n            }\n        }\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650639-d27c1a1f-6a5b-4cff-8e0d-f520c4845214.gif",alt:"img"}})]),n._v(" "),s("p",[n._v("处理业务逻辑类：")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v('package com.luban.luban.io;\nimport java.io.*;\nimport java.net.Socket;\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\npublic class TimeServerHandler implements Runnable {\n    private Socket socket;\n    public TimeServerHandler(Socket socket) {\n        this.socket=socket;\n    }\n    @Override\n    public void run() {\n        BufferedReader bufferedReader=null;\n        PrintWriter bufferedWriter=null;\n        try {\n            //典型的装饰者模式   带缓冲的字符流》字符流》字节流\n            bufferedReader= new BufferedReader(new InputStreamReader(socket.getInputStream()));\n            bufferedWriter=new PrintWriter(socket.getOutputStream(),true);\n            String line =null;\n            String time=null;\n            while (true){\n                line=bufferedReader.readLine();\n                if(line==null)\n                    break;\n                time="SJ".equalsIgnoreCase(line)? new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date()) : "你发的啥？";\n                bufferedWriter.println(time);\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        }finally {\n            if(bufferedReader!=null){\n                try {\n                    bufferedReader.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n            if(bufferedWriter!=null){\n                bufferedWriter.close();\n            }\n            if(socket!=null){\n                try {\n                    socket.close();\n                    this.socket=null;\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n        }\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650644-27c14d37-9342-41db-9bd7-9fbcb13fee46.gif",alt:"img"}})]),n._v(" "),s("p",[n._v("知道了Bio必须是一个客户端对应一个线程之后我们就能分析出BIo的缺点了，假设有10万个客户端，那么服务器就要开10万个线程。那么服务器的线程是非常宝贵的，而且10万个线程一般会使服务器炸掉。对于一些链接上来但是并没有向服务器发来数据的客户端，我们服务器给它开一个是资源的浪费。正是因为Bio这个阻塞式的编码方式，必须要开线程去解决，然而线程资源又是非常宝贵的，所以才出现了NIo。")]),n._v(" "),s("h2",{attrs:{id:"nio-reactor单线程模型怎么实现-有什么缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nio-reactor单线程模型怎么实现-有什么缺点"}},[n._v("#")]),n._v(" NIo reactor单线程模型怎么实现，有什么缺点？")]),n._v(" "),s("p",[n._v("Nio的出现必然就是解决我们Bio的一些缺点的，那么Bio的缺点是什么？编码方式必须是一个客户端对应一个线程。造成线程开启太多导服务器崩掉，也是对线程资源的浪费。所以在Nio中，他把两处阻塞的地方给去除掉了(accept和read方法)。并且提供selector对象，那么selector有什么作用呢？在Bio中，什么时候有客户端来连接，已经连接上来的客户端什么时候发来了数据，我们是不知道的。在Nio中，提供selector对象，我们可以把我们服务端的socket或者服务端接收到的客户端的socket注册在selector中，并指定感兴趣的事件，比如对于服务端的socket而言，它感兴趣的事件必然是监听是否有客户端来连接事件，也就是accept事件。对于客户端的socket而言，它感兴趣的事件必然是监听客户端是否发来了数据，也就是read事件。那么通过selector的通知我们可以清楚的知道那个socket有事件发生，比如有客户端来连接了，比如客户端发来数据了。基于selector的作用，那么我们的编码风格就全变了。Bio是直接调用accept或者read方法，一直在哪里傻等；而Nio是有事件发生了我在去调用对应的方法，根据事件的类型我们判断是改调用accept方法还是read方法。当没有事件发生的时候，我们可以做其他的事情，这样就极高的提高了性能。这里在多说几句，前面也说过因为Nio把两处阻塞的方法去掉了，如果像Bio一样直接调用accept方法或者read方法将发生死循环，因为这两个方法不会阻塞了。然后我们通过这种通知机制，有多少个事件，我调用对应的方法几次，就不会发生调用无效的问题。")]),n._v(" "),s("p",[n._v("备注：selector的底层实现，根据不同的操作系统来实现，Windows底层依赖select函数，linux依赖于epoll函数。当然不同版本可能实现有点差距。这个具体底层实现，要深入研究openjdk源码及操作系统函数，本篇不过多讲解，日后有时间专门写一篇selector底层实现的博客吧")]),n._v(" "),s("p",[n._v("下面附上reactor单线程模式服务端代码实现：")]),n._v(" "),s("p",[n._v("程序主入口代码：")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v("package com.luban.oneReactor;\n      \nimport java.io.IOException;  \n      \npublic class Main {\n    public static void main(String[] args) {\n        try {\n            TCPReactor reactor = new TCPReactor(1333);\n            reactor.run();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650645-1feefaea-9bb0-4a59-941a-9c67b969824b.gif",alt:"img"}})]),n._v(" "),s("p",[n._v("事件轮询，事件分发类：")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v('package com.luban.oneReactor;\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.nio.channels.SelectionKey;\nimport java.nio.channels.Selector;\nimport java.nio.channels.ServerSocketChannel;\nimport java.util.Iterator;\nimport java.util.Set;\n      \npublic class TCPReactor implements Runnable {\n      \n    private final ServerSocketChannel ssc;  \n    private final Selector selector;  \n      \n    public TCPReactor(int port) throws IOException {  \n        selector = Selector.open();  //创建选择器对象\n        ssc = ServerSocketChannel.open();  //打开服务端socket\n        InetSocketAddress addr = new InetSocketAddress(port);  \n        ssc.socket().bind(addr); // 在ServerSocketChannel绑定端口\n        ssc.configureBlocking(false); // 设置ServerSocketChannel为非阻塞\n        SelectionKey sk = ssc.register(selector, SelectionKey.OP_ACCEPT); // ServerSocketChannel向selector注册一个OP_ACCEPT事件，然后返回該通道的key\n        sk.attach(new Acceptor(selector, ssc)); // 给定key一个附加的Acceptor对象  如果事件没有被改变  可以认为这个附加对象和OP_ACCEPT是绑定的\n    }  \n      \n    @Override  \n    public void run() {\n        while (!Thread.interrupted()) { // 在线程中断前持续执行\n            System.out.println("Waiting for new event on port: " + ssc.socket().getLocalPort() + "...");\n            try {\n                //查看是否有事件发生  有事件发生则把这个事件加入到selectedKeys\n                selector.select();\n            } catch (IOException e) {\n                e.printStackTrace();  \n            }\n            System.out.println("aaaaaaa");\n            //能执行到这里  说明发生了事件\n            // 取得所有已就绪事件的key集合\n            Set<SelectionKey> selectedKeys = selector.selectedKeys();\n            Iterator<SelectionKey> it = selectedKeys.iterator();\n            //遍历已经发生的事件\n            while (it.hasNext()) {\n                SelectionKey selectionKey = it.next();  //read的事件对象\n                // 根据事件的key进行调度\n                dispatch(selectionKey);\n                it.remove();  \n            }  \n        }  \n    }  \n      \n    private void dispatch(SelectionKey key) {\n        //取出附加对象  根据附加对象判断是什么事件 调用不同附加对象的run方法   这里请注意这个附加对象是会变化的\n        //如果是接受客户端连接事件的话  这里取出的附加对象就是Acceptor,调用的肯定也是Acceptor的run方法\n        //如果是已经连接上来的客户端发来数据  则是读事件  那么这里取出的附加对象就是TCPHandler，调用的肯定也是TCPHandler的run方法\n        //TCPHandler那里来的请往下看\n        //new Acceptor(selector, ssc).run()\n        Runnable r = (Runnable) (key.attachment());  //取出附加对象\n        if (r != null) \n            r.run(); \n   }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650971-e20ec62a-a92f-41e2-99ab-0d021d84dc88.gif",alt:"img"}})]),n._v(" "),s("p",[n._v("处理客户端连接类：")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v('package com.luban.oneReactor;\n      \nimport java.io.IOException;\nimport java.nio.channels.SelectionKey;  \nimport java.nio.channels.Selector;  \nimport java.nio.channels.ServerSocketChannel;  \nimport java.nio.channels.SocketChannel;  \n      \npublic class Acceptor implements Runnable {  \n      \n    private final ServerSocketChannel ssc;  \n    private final Selector selector;  \n          \n    public Acceptor(Selector selector, ServerSocketChannel ssc) {\n        //服务端的server\n        this.ssc=ssc;\n        //理解集合对象  专门存socket\n        this.selector=selector;  \n    }  \n          \n    @Override  \n    public void run() {  \n        try {  \n            SocketChannel sc= ssc.accept(); // 接受client连接请求\n            System.out.println(sc.socket().getRemoteSocketAddress().toString() + " is connected.");\n            if(sc!=null) {  \n                sc.configureBlocking(false); // 设置非阻塞\n                SelectionKey sk = sc.register(selector, SelectionKey.OP_READ); // SocketChannel向selector注册一个OP_READ事件，然后返回该通道的key\n                selector.wakeup(); // 使一个阻塞住的selector操作立即返回\n                sk.attach(new TCPHandler(sk, sc)); // 给定key一个附加的TCPHandler对象\n            }\n        } catch (IOException e) {\n            e.printStackTrace();  \n        }\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650964-37950a6b-a6c6-4a12-b49c-0f33831b9670.gif",alt:"img"}})]),n._v(" "),s("p",[n._v("读取数据，处理业务逻辑类：")]),n._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[n._v('package com.luban.oneReactor;\nimport java.io.IOException;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.SelectionKey;\nimport java.nio.channels.SocketChannel;\npublic class TCPHandler implements Runnable {  \n      \n    private final SelectionKey sk;  \n    private final SocketChannel sc;  \n      \n      \n    public TCPHandler(SelectionKey sk, SocketChannel sc) {  \n        this.sk = sk;  \n        this.sc = sc;\n    }\n    @Override\n    public void run() {\n        byte[] arr = new byte[1024];\n        ByteBuffer buf = ByteBuffer.wrap(arr);\n        int numBytes = 0; //读取字符串\n        try {\n            numBytes = sc.read(buf);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n        if(numBytes == -1)\n        {\n            System.out.println("[Warning!] A client has been closed.");\n            closeChannel();\n            return;\n        }\n        String str = new String(arr); // 将读取到的byte內容转为字符串\n        if ((str != null) && !str.equals(" ")) {\n            process(str); // 处理业务逻辑\n            System.out.println(sc.socket().getRemoteSocketAddress().toString()\n                        + " > " + str);\n            String returnStr="服务端返回";\n            ByteBuffer returnBuf = ByteBuffer.wrap(returnStr.getBytes()); // wrap自动把buf的position设为0，所以不需要再flip()\n            try {\n                while (returnBuf.hasRemaining()) {\n                    sc.write(returnBuf); // 回传给client回应字符串，发送buf的position位置 到limit位置为止之开的內容\n                }\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n          \n    private void closeChannel() {  \n        try {  \n            sk.cancel();  \n            sc.close();  \n        } catch (IOException e1) {  \n            e1.printStackTrace();  \n        }  \n    }\n          \n    void process(String str) {  \n        // 模拟处理业务逻辑\n        try {\n            Thread.sleep(2000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }  \n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/gif/571262/1585295650975-766b3471-d6f4-4e3b-bec1-61685d50f1e9.gif",alt:"img"}})]),n._v(" "),s("p",[n._v("如上这种编码就是reactor单线程编码方式，它至始至终就只有一个主(main)线程在运行（调用run方法不是开启线程）")]),n._v(" "),s("p",[n._v("对比起Bio来说，它确实解决了需要多线程的问题，但是它也有个很大的问题，因为一个线程处理这么多客户端的请求太慢了。就拿聊天案列来说吧")]),n._v(" "),s("p",[n._v("那对于我们服务端而言要做的事情有：读取---解码---处理业务逻辑---编码---发送（编码---发送是服务器响应客户端）")]),n._v(" "),s("p",[n._v("意思就是说，当一个客户端发来了数据，唯一的线程要去执行这5个步骤。那么如果是10万客户端同时发来了数据怎么办？")]),n._v(" "),s("p",[n._v("唯一的线程只能一个个的处理 ，先处理第一个客户端的，在处理第二个客户端。。。。那么第10万个那个客户端需要等到什么时候；而且请大家想想，在处理客户端发来的数据的时候，如果有新的客户端来连接怎么办？ 唯一的线程必须等到处理完所有客户端发来的数据才会去接受新客户端连接，那么就是处理完10万个客户端发来的数据之后。")]),n._v(" "),s("p",[s("strong",[n._v("总结来说：Nio单线程模式一个线程处理又太慢了，性能不好，Bio线程多太多，容易导致服务器崩掉")])])])}),[],!1,null,null,null);s.default=t.exports}}]);