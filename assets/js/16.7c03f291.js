(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{429:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mycat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mycat"}},[a._v("#")]),a._v(" "),s("strong",[a._v("mycat")])]),a._v(" "),s("h1",{attrs:{id:"_1-mysql安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql安装"}},[a._v("#")]),a._v(" 1.mysql安装")]),a._v(" "),s("p",[a._v("官网下载地址：https://dev.mysql.com/downloads/repo/yum/")]),a._v(" "),s("h2",{attrs:{id:"_1-下载rpm包并上传至linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载rpm包并上传至linux"}},[a._v("#")]),a._v(" 1.下载RPM包并上传至linux")]),a._v(" "),s("h2",{attrs:{id:"_2-yum-localinstall-rpm包名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-yum-localinstall-rpm包名"}},[a._v("#")]),a._v(" 2.yum localinstall ....     RPM包名")]),a._v(" "),s("h2",{attrs:{id:"_3-cat-etc-yum-repos-d-mysql-community-repo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-cat-etc-yum-repos-d-mysql-community-repo"}},[a._v("#")]),a._v(" 3.cat /etc/yum.repos.d/mysql-community.repo")]),a._v(" "),s("h3",{attrs:{id:"_3-1-可以修改你要下载mysql的版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-可以修改你要下载mysql的版本"}},[a._v("#")]),a._v(" 3.1  可以修改你要下载mysql的版本")]),a._v(" "),s("h3",{attrs:{id:"_3-2-下载的版本是-enabled-1的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-下载的版本是-enabled-1的"}},[a._v("#")]),a._v(" 3.2  下载的版本是  enabled=1的")]),a._v(" "),s("h2",{attrs:{id:"_4-yum-install-mysql-community-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-yum-install-mysql-community-server"}},[a._v("#")]),a._v(" 4.yum install mysql-community-server")]),a._v(" "),s("h2",{attrs:{id:"_5-service-mysqld-status-查看状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-service-mysqld-status-查看状态"}},[a._v("#")]),a._v(" 5.service mysqld status  查看状态")]),a._v(" "),s("h2",{attrs:{id:"_6-service-mysqld-start-启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-service-mysqld-start-启动"}},[a._v("#")]),a._v(" 6.service mysqld start   启动")]),a._v(" "),s("h2",{attrs:{id:"_7-查看密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看密码"}},[a._v("#")]),a._v(" 7.查看密码")]),a._v(" "),s("h3",{attrs:{id:"_7-1-cat-etc-my-cnf-log-error-var-log-mysqld-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-cat-etc-my-cnf-log-error-var-log-mysqld-log"}},[a._v("#")]),a._v(" 7.1  cat /etc/my.cnf  --\x3elog-error=/var/log/mysqld.log")]),a._v(" "),s("h3",{attrs:{id:"_7-2-cat-var-log-mysqld-log-查找password这行-最后的就是密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-cat-var-log-mysqld-log-查找password这行-最后的就是密码"}},[a._v("#")]),a._v(" 7.2  cat /var/log/mysqld.log  查找password这行  最后的就是密码")]),a._v(" "),s("h2",{attrs:{id:"_8-登录mysql-修改密码验证-可选-学习阶段为了方便-不然要设置一个很复杂的密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-登录mysql-修改密码验证-可选-学习阶段为了方便-不然要设置一个很复杂的密码"}},[a._v("#")]),a._v(" 8.登录mysql  修改密码验证（可选，学习阶段为了方便，不然要设置一个很复杂的密码）")]),a._v(" "),s("p",[a._v("​\tshow variables like '%password%';")]),a._v(" "),s("h3",{attrs:{id:"_8-1-set-global-validate-password-policy-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-set-global-validate-password-policy-0"}},[a._v("#")]),a._v(" 8.1  set global validate_password_policy=0;")]),a._v(" "),s("h3",{attrs:{id:"_8-2-set-global-validate-password-length-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-set-global-validate-password-length-1"}},[a._v("#")]),a._v(" 8.2  set global validate_password_length=1;")]),a._v(" "),s("h2",{attrs:{id:"_9-修改密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-修改密码"}},[a._v("#")]),a._v(" 9.修改密码")]),a._v(" "),s("h2",{attrs:{id:"alter-user-root-localhost-identified-by-123456"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alter-user-root-localhost-identified-by-123456"}},[a._v("#")]),a._v(" alter user 'root'@'localhost' identified by '123456';")]),a._v(" "),s("h1",{attrs:{id:"_2-mysql主从复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql主从复制"}},[a._v("#")]),a._v(" 2.mysql主从复制")]),a._v(" "),s("h2",{attrs:{id:"_1-1主节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1主节点"}},[a._v("#")]),a._v(" 1.1主节点")]),a._v(" "),s("h3",{attrs:{id:"_1-1-1创建用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1创建用户"}},[a._v("#")]),a._v(" 1.1.1创建用户")]),a._v(" "),s("p",[a._v("create user 'taibai'@'192.168.204.%' identified by '123456';")]),a._v(" "),s("h3",{attrs:{id:"_1-1-2赋予权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2赋予权限"}},[a._v("#")]),a._v(" 1.1.2赋予权限")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("grant replication slave on *.* to 'taibai'@'192.168.204.%' identified by '123456';\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果创建要通用权限用户")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("create user 'taibai'  identified by '123456';\n\ngrant all  on *.* to 'taibai'@'%' identified by '123456';\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"_1-1-3启动binlog日志-my-cnf配置文件中加入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3启动binlog日志-my-cnf配置文件中加入"}},[a._v("#")]),a._v(" 1.1.3启动binlog日志（my.cnf配置文件中加入）")]),a._v(" "),s("p",[a._v("server-id=1   //随便指定一个id  不能与其他主机冲突")]),a._v(" "),s("p",[a._v("log-bin=/var/lib/mysql/mysql-bin")]),a._v(" "),s("h3",{attrs:{id:"_1-1-4重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4重启"}},[a._v("#")]),a._v(" 1.1.4重启")]),a._v(" "),s("p",[a._v("service mysqld restart")]),a._v(" "),s("h2",{attrs:{id:"_1-2从节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2从节点"}},[a._v("#")]),a._v(" 1.2从节点")]),a._v(" "),s("h3",{attrs:{id:"_1-2-1my-cnf配置文件中加入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1my-cnf配置文件中加入"}},[a._v("#")]),a._v(" 1.2.1my.cnf配置文件中加入")]),a._v(" "),s("p",[a._v("server-id=2")]),a._v(" "),s("p",[a._v("relay-log=/var/lib/mysql/relay-bin")]),a._v(" "),s("p",[a._v("relay-log-index=/var/lib/mysql/relay-bin.index")]),a._v(" "),s("h3",{attrs:{id:"_1-2-2登录mysql执行-建立关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2登录mysql执行-建立关系"}},[a._v("#")]),a._v(" 1.2.2登录mysql执行（建立关系）")]),a._v(" "),s("p",[a._v("change master to master_host='192.168.204.101',master_port=3306,master_user='repl',master_password='123456',master_log_file='mysql-bin.000001',master_log_pos=0;")]),a._v(" "),s("p",[a._v("注意：master_log_file='mysql-bin.000001',master_log_pos=0;这两个值有时需要根据master的信息写")]),a._v(" "),s("p",[a._v("查看命令：show master status")]),a._v(" "),s("h3",{attrs:{id:"_1-2-3开始复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3开始复制"}},[a._v("#")]),a._v(" 1.2.3开始复制")]),a._v(" "),s("p",[a._v("start slave;")]),a._v(" "),s("h3",{attrs:{id:"_1-2-4查看状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4查看状态"}},[a._v("#")]),a._v(" 1.2.4查看状态")]),a._v(" "),s("p",[a._v("show slave status\\G")]),a._v(" "),s("p",[a._v("搭建注意点：")]),a._v(" "),s("p",[a._v("1.关闭防火墙或开放端口")]),a._v(" "),s("p",[a._v("2.修改 /var/lib/mysql/auto.cnf文件  将uuid随便修改一下（如果是克隆虚拟机的话，会出现要UUID一致的情况）3.修改配置文件重启")]),a._v(" "),s("h1",{attrs:{id:"_3-主主复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-主主复制"}},[a._v("#")]),a._v(" 3.主主复制")]),a._v(" "),s("h2",{attrs:{id:"_1-修改从节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改从节点"}},[a._v("#")]),a._v(" 1.修改从节点")]),a._v(" "),s("h3",{attrs:{id:"_1-1添加配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1添加配置"}},[a._v("#")]),a._v(" 1.1添加配置")]),a._v(" "),s("p",[a._v("log-bin=/var/lib/mysql/mysql-bin")]),a._v(" "),s("h3",{attrs:{id:"_1-2重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2重启"}},[a._v("#")]),a._v(" 1.2重启")]),a._v(" "),s("p",[a._v("service mysqld restart")]),a._v(" "),s("p",[a._v("show variables like '%log_bin%';  //查看是否开启命令")]),a._v(" "),s("h3",{attrs:{id:"_1-3创建用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3创建用户"}},[a._v("#")]),a._v(" 1.3创建用户")]),a._v(" "),s("p",[a._v("create user 'taibai'@'192.168.204.%' identified by '123456';")]),a._v(" "),s("h3",{attrs:{id:"_1-4赋予权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4赋予权限"}},[a._v("#")]),a._v(" 1.4赋予权限")]),a._v(" "),s("p",[a._v("grant replication slave on "),s("em",[a._v(".")]),a._v(" to 'taibai'@'192.168.204.%' identified by '123456';")]),a._v(" "),s("p",[a._v("show master status;  //查看master状态")]),a._v(" "),s("h2",{attrs:{id:"_2-修改主节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改主节点"}},[a._v("#")]),a._v(" 2.修改主节点")]),a._v(" "),s("h3",{attrs:{id:"_1-1建立连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1建立连接"}},[a._v("#")]),a._v(" 1.1建立连接")]),a._v(" "),s("p",[a._v("change master to master_host='192.168.204.100',master_port=3306,master_user='taibai',master_password='123456',master_log_file='mysql-bin.000001',master_log_pos=716;")]),a._v(" "),s("p",[a._v("注意,master_log_file,master_log_pos是偏移量")]),a._v(" "),s("h2",{attrs:{id:"_1-2开始复制-查看状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2开始复制-查看状态"}},[a._v("#")]),a._v(" 1.2开始复制 查看状态")]),a._v(" "),s("p",[a._v("show slave status;")]),a._v(" "),s("p",[a._v("start slave;")]),a._v(" "),s("h2",{attrs:{id:"注意-低版本中可能会出现主键问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意-低版本中可能会出现主键问题"}},[a._v("#")]),a._v(" 注意：低版本中可能会出现主键问题")]),a._v(" "),s("p",[a._v("配置文件中加入")]),a._v(" "),s("p",[a._v("auto_increment_increment=2    //你有几个节点  （步长）")]),a._v(" "),s("p",[a._v("auto_increment_offset=1   //两个节点  岔开  一个指定为1  一个指定为2")]),a._v(" "),s("h1",{attrs:{id:"_4-mycat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-mycat"}},[a._v("#")]),a._v(" 4.mycat")]),a._v(" "),s("p",[a._v("官网地址： http://www.mycat.io/")]),a._v(" "),s("h2",{attrs:{id:"_1-安装-liunx上要安装好jdk-mycat是java写的-所以依赖jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-liunx上要安装好jdk-mycat是java写的-所以依赖jdk"}},[a._v("#")]),a._v(" 1.安装（liunx上要安装好jdk，mycat是java写的，所以依赖jdk）")]),a._v(" "),s("h3",{attrs:{id:"_1-1-官网下载安装包并上传至liunx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-官网下载安装包并上传至liunx"}},[a._v("#")]),a._v(" 1.1 官网下载安装包并上传至liunx")]),a._v(" "),s("h3",{attrs:{id:"_1-2-解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-解压"}},[a._v("#")]),a._v(" 1.2 解压")]),a._v(" "),s("h3",{attrs:{id:"_1-3-修改-mycat-conf-wrapper-conf文件-学习环境修改-不然会因内存报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-修改-mycat-conf-wrapper-conf文件-学习环境修改-不然会因内存报错"}},[a._v("#")]),a._v(" 1.3 修改/mycat/conf/wrapper.conf文件(学习环境修改，不然会因内存报错)")]),a._v(" "),s("p",[a._v("wrapper.java.additional.10=-Xmx1G")]),a._v(" "),s("p",[a._v("wrapper.java.additional.11=-Xms256M")]),a._v(" "),s("h3",{attrs:{id:"_1-4启动与停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4启动与停止"}},[a._v("#")]),a._v(" 1.4启动与停止")]),a._v(" "),s("h2",{attrs:{id:"_2-mycat高可用集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mycat高可用集群"}},[a._v("#")]),a._v(" 2.mycat高可用集群")]),a._v(" "),s("h4",{attrs:{id:"一-zookeeper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-zookeeper"}},[a._v("#")]),a._v(" 一：zookeeper")]),a._v(" "),s("p",[a._v("1.下载zk，下载地址：https://zookeeper.apache.org/releases.html")]),a._v(" "),s("p",[a._v("2.安装好jdk，将下载的tar包上传到Linux系统下")]),a._v(" "),s("p",[a._v("3.解压")]),a._v(" "),s("p",[a._v("4.将zookeeper/conf这个路径下的zoo_sample.cfg修改为zoo.cfg")]),a._v(" "),s("p",[a._v("5.修改如下内容：")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("dataDir=/opt/module/zookeeper-3.4.10/zkData   #根据自己的路径写\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("6.创建上面配置的路径文件夹")]),a._v(" "),s("p",[a._v("7.到bin目录下启动zk")]),a._v(" "),s("h4",{attrs:{id:"二-将配置导入到zk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-将配置导入到zk"}},[a._v("#")]),a._v(" 二：将配置导入到zk")]),a._v(" "),s("p",[a._v("1.修改mycat  conf目录下的myid.properties")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("loadZk=true\nzkURL=111.231.227.24:2181     #如果是集群则用,号分割\nclusterId=mycat-cluster-1\nmyid=mycat_fz_01\nclusterSize=1\nclusterNodes=mycat_fz_01\ntype=server\nboosterDataHosts=dataHost1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("2.将所有修改过的配置文件全部拷贝到同级目录下的zkconf")]),a._v(" "),s("p",[a._v("如：")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v(" cp rule.xml  ./zkconf/\n cp  ./schema.xml  ./zkconf\n cp server.xml  ./zkconf/\n .....注意：只要修改过的都要复制到这个目录下\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("cd 到 bin目录执行init_zk_data.sh  ---》  将zkconf全部导入到zk")]),a._v(" "),s("h4",{attrs:{id:"三-启动mycat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-启动mycat"}},[a._v("#")]),a._v(" 三：启动mycat")]),a._v(" "),s("h4",{attrs:{id:"四-准备另一台机器-安装好mycat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-准备另一台机器-安装好mycat"}},[a._v("#")]),a._v(" 四：准备另一台机器，安装好mycat")]),a._v(" "),s("p",[a._v("1.进入conf目录下，修改myid.properties")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("loadZk=true\nzkURL=111.231.227.24:2181\nclusterId=mycat-cluster-1\nmyid=mycat_fz_01\nclusterSize=1\nclusterNodes=mycat_fz_01\n#server  booster  ;   booster install on db same server,will reset all minCon to 2\ntype=server\nboosterDataHosts=dataHost1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("2.启动mycat，查看配置，全部由mycat自动同步过来了")]),a._v(" "),s("h1",{attrs:{id:"_5-安装haproxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装haproxy"}},[a._v("#")]),a._v(" 5.安装haproxy")]),a._v(" "),s("p",[a._v("注意：在两台安装了mycat的电脑上安装")]),a._v(" "),s("p",[a._v("yum安装：  yum install haproxy -y")]),a._v(" "),s("p",[a._v("安装完毕后，修改haproxy 的配置文件，默认位置在/etc/haproxy")]),a._v(" "),s("p",[a._v("注意创建下面用到的配置文件路径：如/usr/data/haproxy/haproxy.pid")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("global\n  log 127.0.0.1 local0\n  #log 127.0.0.1 local1 notice\n  #log loghost local0 info\n  maxconn 4096\n  pidfile /usr/data/haproxy/haproxy.pid\n  uid 99\n  gid 99\n  daemon\n  #debug\n  #quiet\ndefaults\n  log global\n  mode tcp\n  option abortonclose\n  option redispatch\n  retries 3\n  maxconn 2000\n  timeout connect 5000\n  timeout client 50000\n  timeout server 50000\nlisten proxy_status\n   bind :48066\n      mode tcp\n      balance roundrobin\n      server mycat_1 192.168.204.201:8066 check inter 10s     \n      server mycat_2 192.168.204.200:8066 check inter 10s\nfrontend admin_stats\n   bind :7777\n      mode http\n      stats enable\n      option httplog\n      maxconn 10\n      stats refresh 30s\n      stats uri /admin\n      stats auth admin:123123\n      stats hide-version\n      stats admin if TRUE\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br")])]),s("p",[a._v("启动haproxy：")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("haproxy -f ./haproxy.cfg\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("访问：http://ip:7777/admin")]),a._v(" "),s("p",[a._v("此时：可以通过haproxy bind的端口访问mycat，haproxy 会自动进行负载均衡")]),a._v(" "),s("h1",{attrs:{id:"_6-安装keepalived"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-安装keepalived"}},[a._v("#")]),a._v(" 6.安装keepalived")]),a._v(" "),s("p",[a._v("注意：同样必须安装在两台haproxy的电脑上，一个为MASTER  一个BACKUP")]),a._v(" "),s("p",[a._v("1.首先去keepalived官网下载keepalived安装包")]),a._v(" "),s("p",[a._v("2.上传到linux，解压")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("tar -zxvf keepalived-1.4.2.tar.gz -C /usr/local/src\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("3.安装依赖插件")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("yum install -y gcc openssl-devel popt-devel\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("4")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("cd /usr/local/src/keepalived-1.4.2 \n./configure --prefix=/usr/local/keepalived \n#进行编译，完成后进行安装\nmake && make install \n\ncp /usr/local/src/keepalived-1.4.2/keepalived/etc/init.d/keepalived /etc/init.d/ \nmkdir /etc/keepalived \ncp /usr/local/keepalived/etc/keepalived/keepalived.conf /etc/keepalived/ \ncp /usr/local/src/keepalived-1.4.2/keepalived/etc/sysconfig/keepalived /etc/sysconfig/ \ncp /usr/local/keepalived/sbin/keepalived /usr/sbin/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("5修改配置文件 vim /etc/keepalived/keepalived.conf")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("! Configuration File for keepalived\nglobal_defs {\n  notification_email {\n    1772276596@qq.com    #邮件报警地址\n  }\n  notification_email_from 1772276596@qq.com    #指定发件人\n  smtp_server 127.0.0.1    #指定smtp服务器地址\n  smtp_connect_timeout 30  #指定smtp连接超时时间\n  router_id LVS_DEVEL      #负载均衡标识，在局域网内应该是唯一的。\n  vrrp_skip_check_adv_addr\n  vrrp_garp_interval 0\n  vrrp_gna_interval 0\n}\nvrrp_instance VI_1 {\n  state MASTER           #指定该keepalived节点的初始状态    #BACKUP\n  interface ens33        #网卡名称\n  virtual_router_id 51   #指定VRRP实例ID，范围是0-255.\n  priority 100    #指定优先级，优先级高的将成为MASTER。\n  advert_int 1    #指定发送VRRP通告的间隔。单位是秒。\n  authentication {\n    auth_type PASS  #指定认证方式。PASS简单密码认证(推荐),AH:IPSEC认证(不推荐)。\n    auth_pass 1111  #指定认证所使用的密码。最多8位。\n  }\n  virtual_ipaddress {\n    192.168.204.177 #指定VIP地址。虚拟IP\n  }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br")])]),s("p",[a._v("启动:  service keepalived start")]),a._v(" "),s("p",[a._v("通过虚拟IP访问haproxy")])])}),[],!1,null,null,null);s.default=r.exports}}]);