(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{526:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"c语言结构体、引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c语言结构体、引用"}},[s._v("#")]),s._v(" "),n("strong",[s._v("C语言结构体、引用")])]),s._v(" "),n("h2",{attrs:{id:"结构体、联合体、枚举"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构体、联合体、枚举"}},[s._v("#")]),s._v(" 结构体、联合体、枚举")]),s._v(" "),n("p",[s._v("1、结构体")]),s._v(" "),n("p",[s._v("声明")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("struct Teacher\n{\n\tint age;\n\tchar isCool;\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("声明+定义变量")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("struct Teacher\n{\n\tint age;\n\tchar isCool;\n}teacher;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("hr"),s._v(" "),n("p",[s._v("使用")]),s._v(" "),n("p",[s._v("使用结构体定义变量时，前面的struct可写可不写")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("struct Teacher\n{\n\tint age;\n\tchar isCool;\n}teacher;\n\nint _tmain(int argc, _TCHAR* argv[])\n{\n\tstruct Teacher t1;\n\tTeacher t2;\n\n\tt1.age = 11;\n\tt2.age = 22;\n\t\n\t// 接收用户的输入\n\tgetchar();\n\n\treturn 0;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("定义+赋初值")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("struct Teacher\n{\n\tint age;\n\tchar isCool;\n}teacher;\n\nint _tmain(int argc, _TCHAR* argv[])\n{\n\tTeacher t1 = {11, 1};\n\t\n\t// 接收用户的输入\n\tgetchar();\n\n\treturn 0;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("声明+定义变量")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('struct Teacher\n{\n\tint age;\n\tchar isCool;\n}teacher;\n\nint _tmain(int argc, _TCHAR* argv[])\n{\n\tteacher.age = 10;\n\n\tprintf("%d\\n", teacher.age);\n\t\n\t// 接收用户的输入\n\tgetchar();\n\n\treturn 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("hr"),s._v(" "),n("p",[s._v("结构体数组")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("结构体指针")]),s._v(" "),n("p",[s._v("访问结构体成员时用->，而不是.")]),s._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 32bit，4字节对齐")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Teacher")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" isCool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("print1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Teacher t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("print2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Teacher "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("_tmain")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" _TCHAR"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Teacher")]),s._v(" teacher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tteacher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tteacher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isCool "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为什么差8个字节，因为结构体长度是8")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//\tprintf("%X, %X\\n", &teacher, &teacher + 1);')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//\tprintf("%d\\n", *(char *)(&teacher + 4));')]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("teacher "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("print1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("teacher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("print2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("teacher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收用户的输入")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])]),n("hr"),s._v(" "),n("p",[s._v("结构体嵌套结构体")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("结构体做函数参数")]),s._v(" "),n("p",[s._v("值传递、引用传递")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('struct Teacher\n{\n\tint age;\n\tchar isCool;\n}teacher;\n\nvoid print_1(Teacher t)\n{\n\tprintf("%d\\n", t.age);\n}\n\nvoid print_2(Teacher *t)\n{\n\tprintf("%d\\n", t->age);\n}\n\nvoid print_3(Teacher &t)\n{\n\tprintf("%d\\n", t.age);\n}\n\nint _tmain(int argc, _TCHAR* argv[])\n{\n\tTeacher t1 = {11, 1};\n\n\tprint_1(t1);\n\tprint_2(&t1);\n\tprint_3(t1);\n\n\t\n\t// 接收用户的输入\n\tgetchar();\n\n\treturn 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("hr"),s._v(" "),n("p",[s._v("加const修饰（重要！！读源码经常看到这个语法）")]),s._v(" "),n("p",[s._v("目的是为了防止外部拿到结构体变量的引用修改结构体成员的值")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('struct Teacher\n{\n\tint age;\n\tchar isCool;\n}teacher;\n\nvoid print(Teacher *t)\n{\n\tt->age = 20;\n\n\tprintf("%d\\n", t->age);\n}\n\nvoid print_1(const Teacher *t)\n{\n\tt->age = 20;\n\n\tprintf("%d\\n", t->age);\n}\n\nint _tmain(int argc, _TCHAR* argv[])\n{\n\tTeacher t1 = {11, 1};\n\n\tprint(&t1);\n\n\tprintf("%d\\n", t1.age);\n\n\t\n\t// 接收用户的输入\n\tgetchar();\n\n\treturn 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[s._v("2、联合体（union）")]),s._v(" "),n("p",[s._v("允许在相同的内存位置存储不同的数据类型")]),s._v(" "),n("p",[s._v("但是任何时候只能有一个成员带有值")]),s._v(" "),n("p",[s._v("联合体的大小由字节数最多的成员决定")]),s._v(" "),n("p",[s._v("3、枚举（enum）")]),s._v(" "),n("p",[s._v("跟Java中的差不多")]),s._v(" "),n("h2",{attrs:{id:"引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[s._v("#")]),s._v(" 引用")]),s._v(" "),n("p",[s._v("可理解为：给变量起别名")]),s._v(" "),n("p",[s._v("其本质其实就是指针常量：int * const a = &b;")]),s._v(" "),n("p",[s._v("语法：")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("int a = 10;\nint &b = a;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("注意：")]),s._v(" "),n("p",[s._v("1、引用必须初始化")]),s._v(" "),n("p",[s._v("2、引用初始化后无法修改")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("引用做函数参数")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('struct Teacher\n{\n\tint age;\n\tchar isCool;\n}teacher;\n\nvoid print(Teacher &t)\n{\n\tt.age = 30;\n\n\tprintf("%d\\n", t.age);\n}\n\nint _tmain(int argc, _TCHAR* argv[])\n{\n\tTeacher t1 = {11, 1};\n\n\tprint(t1);\n\n\tprintf("%d\\n", t1.age);\n\n\t\n\t// 接收用户的输入\n\tgetchar();\n\n\treturn 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("hr"),s._v(" "),n("p",[s._v("引用做函数返回值")]),s._v(" "),n("p",[s._v("注意：不能返回局部变量的引用，因为局部变量在函数调用完以后就释放掉了。那持有的引用有点野指针的味道")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('int & add()\n{\n\tint a = 10;\n\n\treturn a;\n}\n\nint _tmain(int argc, _TCHAR* argv[])\n{\n\tint &a = add();\n\n\tprintf("%d\\n", a);\n\tprintf("%d\\n", a);\n\tprintf("%d\\n", a);\n\t\n\t// 接收用户的输入\n\tgetchar();\n\n\treturn 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("如果函数的返回值是引用，这个函数可以作为左值使用")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('int & add()\n{\n\tstatic int a = 10;\n\n\treturn a;\n}\n\nint _tmain(int argc, _TCHAR* argv[])\n{\n\tint &a = add();\n\n\tprintf("%d\\n", a);\n\tprintf("%d\\n", a);\n\n\tadd() = 100;\n\n\tprintf("%d\\n", a);\n\t\n\t// 接收用户的输入\n\tgetchar();\n\n\treturn 0;\n}\nstruct Teacher\n{\n\tint age;\n\tchar isCool;\n};\n\nTeacher& print1(Teacher &teacher)\n{\n\tteacher.age = 100;\n\n\treturn teacher;\n}\n\n\nint _tmain(int argc, _TCHAR* argv[])\n{\n\tTeacher teacher;\n\tteacher.age = 10;\n\tteacher.isCool = 1;\n\n\n\tTeacher t = print1(teacher);\n\n\t// 看两个问题\n\t// 1、在print1改了age，外面发生了改动吗\n\n\tprintf("%d, %d\\n", teacher.age, t.age);\n\n\n\t//2、print1返回的是传入的对象吗\n\n\tprintf("%X, %X\\n", &teacher, &t);\n\n\t// 接收用户的输入\n\tgetchar();\n\n\treturn 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br")])]),n("hr"),s._v(" "),n("p",[s._v("常量引用")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("const int &a = b;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"练习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[s._v("#")]),s._v(" 练习")]),s._v(" "),n("p",[s._v("1、自实现字符串处理库")]),s._v(" "),n("p",[s._v("2、实现数据结构栈")]),s._v(" "),n("p",[s._v("3、实现数据结构队列")])])}),[],!1,null,null,null);n.default=e.exports}}]);