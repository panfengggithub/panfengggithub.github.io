(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{750:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"并发编程之jmm-volatile底层原理剖析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发编程之jmm-volatile底层原理剖析"}},[a._v("#")]),a._v(" "),s("strong",[a._v("并发编程之JMM&Volatile底层原理剖析")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1446391/1600234334225-44bb485a-dd16-424e-887b-d06103f491ac.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_96%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/jpeg/1446391/1600233886159-541a4d6a-7d84-4b8b-8de7-5d33c51421ad.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_81%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("h2",{attrs:{id:"并发编程基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发编程基础"}},[a._v("#")]),a._v(" 并发编程基础")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.yuque.com/attachments/yuque/0/2020/zip/1446391/1600234369544-5d6f7999-5afd-4171-ae33-2ef3785c3f49.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("📎并发编程基础.zip"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"并发编程之jmm-volatile底层原理剖析-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发编程之jmm-volatile底层原理剖析-2"}},[a._v("#")]),a._v(" 并发编程之JMM&Volatile底层原理剖析")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.yuque.com/attachments/yuque/0/2020/pptx/1446391/1600234425504-2c720fbd-7072-494f-9f01-893ce5b51ea9.pptx",target:"_blank",rel:"noopener noreferrer"}},[a._v("📎并发编程之JMM&Volatile底层原理剖析.pptx"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"volatile可见性实例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile可见性实例代码"}},[a._v("#")]),a._v(" volatile可见性实例代码")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v('public class VisibilityTest {\n    // JMM模型  java线程内存模型\n    // 可见性    为什么？     lock addl $0x0,(%rsp)  触发缓存一致性协议\n    private volatile boolean  flag = true;\n\n    public void refresh(){\n        flag = false;\n        System.out.println(Thread.currentThread().getName()+"修改flag");\n    }\n\n    public void load(){\n        System.out.println(Thread.currentThread().getName()+"开始执行.....");\n        int i=0;\n        while (flag){\n            i++;\n            //TODO\n            // 不能\n            // 能\n            //shortWait(100000);\n            // 不能   迷   为什么？   缓存是否失效（过期）\n            //shortWait(10000);\n\n            // 能    synchronized 可见性保证  内存屏障\n            // System.out.println("=====");\n//            try {\n//                // 能   sleep 让出cpu时间片\n//                Thread.sleep(0);\n//            } catch (InterruptedException e) {\n//                e.printStackTrace();\n//            }\n\n        }\n        System.out.println(Thread.currentThread().getName()+"跳出循环: i="+ i);\n    }\n\n    public static void main(String[] args){\n\n        VisibilityTest test = new VisibilityTest();\n        new Thread(() -> test.load(), "threadA").start();\n        try {\n            Thread.sleep(2000);\n            new Thread(()->test.refresh(),"threadB").start();\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n\n\n    public static void shortWait(long interval){\n        long start = System.nanoTime();\n        long end;\n        do{\n            end = System.nanoTime();\n        }while(start + interval >= end);\n    }\n\n\n\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br"),s("span",{staticClass:"line-number"},[a._v("57")]),s("br"),s("span",{staticClass:"line-number"},[a._v("58")]),s("br"),s("span",{staticClass:"line-number"},[a._v("59")]),s("br")])]),s("h2",{attrs:{id:"linux下查看缓存行大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux下查看缓存行大小"}},[a._v("#")]),a._v(" linux下查看缓存行大小")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600235207393-48abd2a0-7629-4620-9238-450ae91ded2b.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_41%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[a._v("或者")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600235307372-79d169b8-4e72-47c1-b848-8f565c18e70b.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_25%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/1446391/1600235323806-5117b4ce-cb0e-4136-aa34-fbe6f6812513.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_25%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10",alt:"img"}})]),a._v(" "),s("h1",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.yuque.com/attachments/yuque/0/2020/pdf/1446391/1600151005381-3738671c-a483-42c9-8164-0b590bea14ea.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("CPU内存一致性模型和指令重排序-论文.pdf"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.yuque.com/attachments/yuque/0/2020/pdf/1446391/1600151006258-c4e2e6c9-6568-4415-ba91-b3dfb16f5df9.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("IA-32+架构软件开发人员手册+.pdf"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.yuque.com/attachments/yuque/0/2020/pdf/1446391/1600151009971-16073818-b008-4e17-89f1-a62bbd0d8b6e.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("JAVA并发编程实战.pdf"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.yuque.com/attachments/yuque/0/2020/pdf/1446391/1600151010974-4e00844d-963c-4871-b2e9-ca6df222d2e2.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解java内存模型.pdf"),s("OutboundLink")],1)]),a._v(" "),s("h1",{attrs:{id:"-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[a._v("#")])])])}),[],!1,null,null,null);s.default=n.exports}}]);