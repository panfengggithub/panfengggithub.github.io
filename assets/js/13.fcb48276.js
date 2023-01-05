(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{432:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"大纲"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大纲"}},[s._v("#")]),s._v(" "),t("strong",[s._v("大纲：")])]),s._v(" "),t("p",[t("strong",[s._v("1、MongoDb的体系结构")]),s._v(" "),t("strong",[s._v("2、MongoDb安装配置与基础命令")]),s._v(" "),t("strong",[s._v("3、MongoDB CRUD与全文索引")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://uploader.shimo.im/f/wequSJM7pVgm8dSp.txt",target:"_blank",rel:"noopener noreferrer"}},[s._v("数据脚本.txt"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"一、mongodb的体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、mongodb的体系结构"}},[s._v("#")]),s._v(" "),t("strong",[s._v("一、MongoDb的体系结构")])]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("概要：")])]),s._v(" "),t("ol",[t("li",[s._v("NoSql的概念")]),s._v(" "),t("li",[s._v("NoSql的应用场景")]),s._v(" "),t("li",[s._v("MongoDb的逻辑组成")])]),s._v(" "),t("h3",{attrs:{id:"_1、nosql的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、nosql的概念"}},[s._v("#")]),s._v(" 1、NoSql的概念")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("NoSQL(NoSQL = Not Only SQL )，意即“不仅仅是\t[SQL](https://baike.baidu.com/item/SQL)\t”，互联网的早期我们的数据大多以关系型数据库来存储的。其特点是规范的数据结构（预定义模式）、强一至性、表与表之间通过外键进行关联，这些特征使我们对数据的管理更加清晰和严谨，但随着互联网的发展数据成爆炸式的增长我们对数据库需要更好的灵活性和更快的速度。这就是NoSql可以做到的。它不需要预先定义模式，没有主外键关联、支持分片、支持复本。\n")])])]),t("p",[t("strong",[s._v("NoSql的分类：")]),s._v("\n键值(Key-Value)存储数据库\n这一类数据库主要会使用到一个哈希表，这个表中有一个特定的键和一个指针指向特定的数据。Key/value模型对于IT系统来说的优势在于简单、易部署。但是如果DBA只对部分值进行查询或更新的时候，Key/value就显得效率低下了。举例如：Tokyo Cabinet/Tyrant, Redis, Voldemort, Oracle BDB.\n**\t**列存储数据库。\n这部分数据库通常是用来应对分布式存储的海量数据。键仍然存在，但是它们的特点是指向了多个列。这些列是由列家族来安排的。如：Cassandra, HBase, Riak.\n文档型数据库\n文档型数据库的灵感是来自于Lotus Notes办公软件的，而且它同第一种键值存储相类似。该类型的数据模型是版本化的文档，半结构化的文档以特定的格式存储，比如JSON。文档型数据库可 以看作是键值数据库的升级版，允许之间嵌套键值。而且文档型数据库比键值数据库的查询效率更高。如：CouchDB, MongoDb. 国内也有文档型数据库SequoiaDB，已经开源。\n图形(Graph)数据库\n图形结构的数据库同其他行列以及刚性结构的SQL数据库不同，它是使用灵活的图形模型，并且能够扩展到多个服务器上。NoSQL数据库没有标准的查询语言(SQL)，因此进行数据库查询需要制定数据模型。许多NoSQL数据库都有REST式的数据接口或者查询API。如：Neo4J, InfoGrid, Infinite Graph.")]),s._v(" "),t("h3",{attrs:{id:"_2、nosql的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、nosql的应用场景"}},[s._v("#")]),s._v(" 2、NoSql的应用场景")]),s._v(" "),t("p",[s._v("NoSQL数据库在以下的这几种情况下比较适用：\n1、数据模型比较简单；\n2、需要灵活性更强的IT系统；\n3、对数据库性能要求较高；\n4、不需要高度的数据一致性；")]),s._v(" "),t("ul",[t("li",[s._v("[ ] "),t("strong",[s._v("基于豆瓣电影举例说明NoSQL的应用场景")]),s._v(" "),t("ul",[t("li",[s._v("[ ] 电影基本信息分析")]),s._v(" "),t("li",[s._v("[ ] 电影与明星关系存储")])])])]),s._v(" "),t("h3",{attrs:{id:"_3、mongodb的逻辑组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、mongodb的逻辑组成"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3、MongoDb的逻辑组成")])]),s._v(" "),t("p",[t("strong",[s._v("体系结构：")]),s._v(" "),t("img",{attrs:{src:"https://uploader.shimo.im/f/xbE8M7mVudYOp7Hv.png!thumbnail",alt:"图片"}})]),s._v(" "),t("p",[t("strong",[s._v("逻辑结构与关系数据库的对比：")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[t("strong",[s._v("关系型数据库")])]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[t("strong",[s._v("MongoDb")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("database(数据库)")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("database（数据库）")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("table （表）")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("collection（ 集合）")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("row（ 行）")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("document（ BSON 文档）")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("column （列）")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("field （字段）")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("index（唯一索引、主键索引）")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("index （全文索引）")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("join （主外键关联）")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("embedded Document (嵌套文档)")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("primary key(指定1至N个列做主键)")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("primary key  (指定_id field做为主键)")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("aggreation(groupy)")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("aggreation (pipeline mapReduce)")])])])]),s._v(" "),t("h2",{attrs:{id:"二、mongodb安装配置与基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、mongodb安装配置与基础命令"}},[s._v("#")]),s._v(" "),t("strong",[s._v("二、MongoDb安装配置与基础命令")])]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("概要：")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("mongoDb版本说明")])]),s._v(" "),t("li",[t("p",[s._v("mongoDb启动参数说明")])]),s._v(" "),t("li",[t("p",[s._v("客户端Shell 的使用及参数说明")])]),s._v(" "),t("li",[t("p",[s._v("数据库与集合的基础操作")])]),s._v(" "),t("li",[t("p",[s._v("mongoDb社区版说明")])])]),s._v(" "),t("p",[s._v("下载地址："),t("a",{attrs:{href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.mongodb.com/download-center/community"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:"https://uploader.shimo.im/f/wDTyLsHbglkacywj.png!thumbnail",alt:"图片"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#下载\nwget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.5.tgz \n# 解压\ntar -zxvf mongodb-linux-x86_64-4.0.5.tgz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-mongodb启动参数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mongodb启动参数说明"}},[s._v("#")]),s._v(" 2.mongoDb启动参数说明")]),s._v(" "),t("p",[s._v("mongoDb 由C++编写，下载下来的包可以直接启动")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#创建数据库目录\nmkdir -p /data/mongo\n# 启动mongo\n./bin/mongod --dbpath=/data/mongo/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("常规参数")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("参数")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("dbpath")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("数据库目录，默认/data/db")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("bind_ip")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("监听IP地址，默认全部可以访问")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("port")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("监听的端口，默认27017")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("logpath")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("日志路径")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("logappend")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("是否追加日志")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("auth")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("是开启用户密码登陆")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("fork")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("是否已后台启动的方式登陆")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("config")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("指定配置文件")])])])]),s._v(" "),t("p",[s._v("配置文件示例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vim mongo.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("内容：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\ndbpath=/data/mongo/\nport=27017\nbind_ip=0.0.0.0\nfork=true\nlogpath = /data/mongo/mongodb.log\nlogappend = true\nauth=false\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("已配置文件方式启动")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("./bin/mongod -f mongo.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-客户端shell-的使用及参数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-客户端shell-的使用及参数说明"}},[s._v("#")]),s._v(" 3.客户端Shell 的使用及参数说明")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#启动客户端 连接 本机的地的默认端口\n./bin/mongo \n# 指定IP和端口\n./bin/mongo --host=127.0.0.1 --port=27017\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("mongo shell 是一个js 控台，可以执行js 相关运算如:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> 1+1\n2\n> var i=123;\n> print(i)\n123\n>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_4-数据库与集合的基础操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据库与集合的基础操作"}},[s._v("#")]),s._v(" 4.数据库与集合的基础操作")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('  #查看数据库\n  show dbs;\n  #切换数据库\n  use luban;\n  #创建数据库与集合，在插入数据时会自动 创建数据库与集和\n  db.friend.insertOne({name:"wukong"，sex:"man"});\n  #查看集合\n  show tables;\n  show collections;\n  #删除集合\n  db.friend.drop();\n  #删除数据库\n  db.dropDatabase();\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"三、mongodb-crud与全文索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、mongodb-crud与全文索引"}},[s._v("#")]),s._v(" "),t("strong",[s._v("三、MongoDB CRUD与全文索引")])]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("概要：")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("数据的新增的方式")])]),s._v(" "),t("li",[t("p",[s._v("数据的查询")])]),s._v(" "),t("li",[t("p",[s._v("数据的修改删除")])]),s._v(" "),t("li",[t("p",[s._v("全文索引查询")])]),s._v(" "),t("li",[t("p",[s._v("数据的新增的方式")])])]),s._v(" "),t("p",[s._v("关于Mongodb数据插入的说明")]),s._v(" "),t("ol",[t("li",[s._v("数据库的新增不需要序先设计模型结构，插入数据时会自动创建。")]),s._v(" "),t("li",[s._v("同一个集合中不同数据字段结构可以不一样")])]),s._v(" "),t("p",[s._v("插入相关方法：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('//插入单条 \ndb.friend.insertOne({name:"wukong"，sex:"man"});\n// 插入多条\ndb.friend.insertMany([\n{name:"wukong",sex:"man"},{name:"diaocan",sex:"woman",age:18,birthday:new Date("1995-11-02")},{name:"zixiao",sex:"woman"}\n]);\n// 指定ID \n db.friend.insert([\n\t\t{_id:1,name:"wokong",sex:"man",age:1},\n\t\t{_id:2,name:"diaocan",sex:"women",birthday:new Date("1988-11-    11")}\n  ])\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"_2、数据的查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、数据的查询"}},[s._v("#")]),s._v(" "),t("strong",[s._v("2、数据的查询")])]),s._v(" "),t("p",[t("strong",[s._v("概要：")])]),s._v(" "),t("ol",[t("li",[s._v("基于条件的基础查询")]),s._v(" "),t("li",[s._v("$and、$or、$in、$gt、$gte、$lt、$lte 运算符")]),s._v(" "),t("li",[s._v("基于 sort skip limit 方法实现排序与分页")]),s._v(" "),t("li",[s._v("嵌套查询")]),s._v(" "),t("li",[s._v("数组查询")]),s._v(" "),t("li",[s._v("数组嵌套查询")])]),s._v(" "),t("p",[s._v("基础查询：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#基于ID查找\ndb.emp.find({_id:1101})\n#基于属性查找\ndb.emp.find({"name":"鲁班"})\n# && 运算 与大于 运算\ndb.emp.find({"job":"讲师","salary":{$gt:8000}})\n# in 运算\n db.emp.find({"job":{$in:["讲师","客服部"]}})\n# or 运算\ndb.emp.find({$or:[{job:"讲师"  },{job:"客服部"}] })\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"排序与分页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排序与分页"}},[s._v("#")]),s._v(" 排序与分页：")]),s._v(" "),t("p",[s._v("//  sort skip limit")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("db.emp.find().sort({dep:1,salary:-1}).skip(5).limit(2)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("嵌套查询：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# 错误示例：无结果\ndb.student.find({grade:{redis:87,dubbo:90 });\n#错误示例：无结果 \ndb.student.find({grade:{redis:87,dubbo:90,zookeper:85} })\n\n# 基于复合属性查找 时必须包含其所有的值 并且顺序一至\ndb.student.find({grade:{redis:87,zookeper:85,dubbo:90} })\n\n#基于复合属性当中的指定值 查找。注：名称必须用双引号\ndb.student.find({"grade.redis":87});\n\ndb.student.find({"grade.redis":{"$gt":80}});\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("数组查询：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('db.subject.insertMany([\n{_id:"001",name:"陈霸天",subjects:["redis","zookeper","dubbo"]},\n{_id:"002",name:"张明明",subjects:["redis","Java","mySql"]},\n{_id:"003",name:"肖炎炎",subjects:["mySql","zookeper","bootstrap"]},\n{_id:"004",name:"李鬼才",subjects:["Java","dubbo","Java"]},\n])\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#无结果\ndb.subject.find({subjects:["redis","zookeper"]})\n#无结果\ndb.subject.find({subjects:["zookeper","redis","dubbo"]})\n# 与嵌套查询一样，必须是所有的值 并且顺序一至\ndb.subject.find({subjects:["redis","zookeper","dubbo"]})\n\n# $all 匹配数组中包含该两项的值。注：顺序不作要求\ndb.subject.find({subjects:{"$all": ["redis","zookeper"]}})\n注：\n# 简化数组查询\ndb.subject.find({subjects:"redis"})\n# 简化数组查询 ，匹配数组中存在任意一值。与$all相对应\ndb.subject.find({subjects:{$in: ["redis","zookeper"]}})\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("数组嵌套查询：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#基础查询 ，必须查询全部，且顺序一至\ndb.subject2.find({subjects:{name:"redis",hour:12} })\n#指定查询第一个数组 课时大于12\ndb.subject2.find({"subjects.0.hour":{$gt:12}})\n#查询任科目 课时大于12\ndb.subject2.find({"subjects.hour":{$gt:12}})\n# $elemMatch 元素匹配，指定属性满足，且不要求顺序一至\ndb.subject2.find({subjects:{$elemMatch:{name:"redis",hour:12}}})\n\n# 数组中任意元素匹配 不限定在同一个对象当中\ndb.subject2.find({"subjects.name":"mysql","subjects.hour":120})\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#设置值\ndb.emp.update({_id:1101} ,{ $set:{salary:10300}  })\n#自增\ndb.emp.update({_id:1101} ,{ $inc:{salary:200}})\n\n#基于条件 更新多条数据\n# 只会更新第一条 \ndb.emp.update({"dep":"客服部"},{$inc:{salary:100}})\n# 更新所有 匹配的条件 \ndb.emp.updateMany({"dep":"客服部"},{$inc:{salary:100}})\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"_3、数据的修改与删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、数据的修改与删除"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3、数据的修改与删除")])]),s._v(" "),t("p",[s._v("修改")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#设置值\ndb.emp.update({_id:1101} ,{ $set:{salary:10300}  })\n#自增\ndb.emp.update({_id:1101} ,{ $inc:{salary:200}})\n\n#基于条件 更新多条数据\n# 只会更新第一条 \ndb.emp.update({"dep":"客服部"},{$inc:{salary:100}})\n# 更新所有 匹配的条件 \ndb.emp.updateMany({"dep":"客服部"},{$inc:{salary:100}})\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("删除：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 基于查找删除\ndb.emp.deleteOne({_id:1101})\n// 删除整个集合\ndb.project.drop()\n// 删除库\ndb.dropDatabase()\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_4、全文索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、全文索引"}},[s._v("#")]),s._v(" "),t("strong",[s._v("4、全文索引")])]),s._v(" "),t("p",[s._v("索引的创建")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('db.project.createIndex({name:"text",description:"text"})\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("基于索引分词进行查询")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('db.project.find({$text:{$search:"java jquery"}})\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("基于索引 短语")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('db.project.find({$text:{$search:"\\"Apache ZooKeeper\\""}})\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("过滤指定单词")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('db.project.find({$text:{$search:"java apache -阿里"}})\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看执行计划")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('db.project.find({$text:{$search:"java -阿里"}}).explain("executionStats")\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);