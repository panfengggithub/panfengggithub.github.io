(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{534:function(e,t,a){"use strict";a.r(t);var s=a(1),_=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"zookeeper-3-6源码编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-3-6源码编译"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Zookeeper 3.6源码编译")])]),e._v(" "),t("ol",[t("li",[e._v("利用git拉取项目：https://gitee.com/archguide/zookeeper-vip2.git")]),e._v(" "),t("li",[e._v("切分支：release-3.6.1")]),e._v(" "),t("li",[e._v("利用maven下载依赖")]),e._v(" "),t("li",[e._v("直接运行QuorumPeerMain类，编译过程会报错，比如找不到如下包："),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587802617790-42a2969c-05cf-4e3a-b0e7-72682102b730.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_29%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("li",[e._v("这些包需要jute生成，进入到zookeeper-jute模块，编译一下："),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587802682467-abcd4d6e-4927-46ff-b391-94a4aab6394c.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_18%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("li",[e._v("编译后会生成对应的包，再次运行QuorumPeerMain类，还是报错，"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587802914615-41d68e05-428e-47e2-8eee-d30264a3132c.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_31%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("li",[e._v("找不到Info接口，这个接口也需要生成，进入到zookeeper-server模块，编译一下："),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587803055645-6573a69c-cf31-4e6d-a4b3-9478a4f2230a.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_13%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("li",[e._v("编译后会生成Info接口，再次运行QuorumPeerMain类，没有报错了，只不过没有启动成功：")]),e._v(" "),t("li",[e._v("如果上面这个步骤执行不了，按下面的步骤来")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.yuque.com/attachments/yuque/0/2020/zip/365147/1605968832979-5c44c324-d773-4a74-b246-0c401dfee28f.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("📎java.zip"),t("OutboundLink")],1),e._v("把这个压缩包下载下来，解压，然后放到zookeeper-server\\target\\generated-sources目录下")]),e._v(" "),t("li",[e._v("这是因为没有指定配置文件，指定一下："),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587803194680-bbf47996-637f-492d-af4c-ce1aaf0c5f1d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_38%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("li",[e._v("再次运行QuorumPeerMain类，没有报错了："),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587803245081-0f51b2c4-fa89-41e2-92b6-5c9b9211f103.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_48%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("li",[e._v("这时其实已经成功了，可以使用zkCli.sh/或zkCli.cmd连接成功："),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587803322336-fca6a07a-f42a-4e02-a654-4849ddfff598.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_35%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("li",[e._v("只不过服务端日志太少，这是因为resource没有加到classpath中，log4j.properties没有起到作用："),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587803389591-a455fb41-a845-4238-a810-ffcd1304abeb.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_24%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("li",[e._v("右键添加即可："),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/365147/1587803420648-c081e5ae-124a-4aec-be22-d8c2c31f23b8.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_36%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),e._v(" "),t("li",[e._v("再次运行QuorumPeerMain类，一切正常，日志也多了。")]),e._v(" "),t("li",[e._v("源码构建完成")])])])}),[],!1,null,null,null);t.default=_.exports}}]);