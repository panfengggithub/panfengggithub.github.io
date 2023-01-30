(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{975:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git基本命令"}},[s._v("#")]),s._v(" git基本命令")]),s._v(" "),a("h2",{attrs:{id:"_1-与svn区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-与svn区别"}},[s._v("#")]),s._v(" 1.与svn区别")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("从本地把文件推送远程服务，SVN只需要commint 而GIT需要 add、commint、push 三个步骤\n\ngit 是一个分布式的版本管理系统，而要SVN是一个远程集中式的管理系统\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_2-git客户端安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-git客户端安装"}},[s._v("#")]),s._v(" 2.git客户端安装")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("官方客户端： httpsd://git-scm.com/downloads\n其它客户端：https://tortoisegit.org/download/\n\ngit config --global user.name 用户名 \ngit config --global user.email 邮箱\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_3-本地初始化git仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-本地初始化git仓库"}},[s._v("#")]),s._v(" 3.本地初始化git仓库")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("#基于远程仓库克隆至本地\ngit clone <remote_url>\n\n#当前目录初始化为git 本地仓库\ngit init  <directory>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_4-本地暂存区操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-本地暂存区操作"}},[s._v("#")]),s._v(" 4.本地暂存区操作")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("本地添加\n#添加指定文件至暂存区\ngit add <fileName>\n#添加指定目录至暂存区\ngit add <directory>\n#添加所有\ngit add -A\n#将指定目录及子目录移除出暂存区\ngit rm --cached target -r\n#添加勿略配置文件 .gitignore\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_5-提交至本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-提交至本地仓库"}},[s._v("#")]),s._v(" 5.提交至本地仓库")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("#提交至本地仓库\ngit commit -m '提交评论' -a\n#快捷提交至本地仓库\ngit commit -am '快添加与提交'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_6-分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-分支操作"}},[s._v("#")]),s._v(" 6.分支操作")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("#查看当前分支\ngit branch [-avv]\n#基于当前分支新建分支\ngit branch <branch name>\n#基于提交新建分支\ngit branch <branch name> <commit id>\n$ git branch -d {dev}\n#切换分支\ngit checkout <branch name>\n#合并分支\ngit merge <merge target>\n#解决冲突，如果因冲突导致自动合并失败，此时 status 为mergeing 状态.\n#需要手动修改后重新提交（commit）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"_7-远程仓库管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-远程仓库管理"}},[s._v("#")]),s._v(" 7.远程仓库管理")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("#查看远程配置 \ngit remote [-v]\n#添加远程地址\ngit remote add origin http:xxx.xxx\n#删除远程地址\ngit remote remove origin \n#上传新分支至远程\ngit push --set-upstream origin master \n#将本地分支与远程建立关联\ngit branch --track --set-upstream-to=origin/test test\n\ngit push 别名 分支 推送本地分支上的内容到远程仓库\ngit clone 远程地址 将远程仓库的内容克隆到本地\ngit pull 远程库地址别名 远程分支名 将远程仓库对于分支最新内容拉下来后与\n当前本地分支直接合并\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"_8-其他命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-其他命令"}},[s._v("#")]),s._v(" 8.其他命令")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("查看本地库状态：git status\ngit reflog 查看历史记录\ngit reset --hard 版本号 版本穿梭\ngit pull 远程库地址别名 远程分支名\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_9-ignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-ignore"}},[s._v("#")]),s._v(" 9.ignore")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# Compiled class file\n*.class\n# Log file\n*.log\n# BlueJ files\n*.ctxt\n# Mobile Tools for Java (J2ME)\n.mtj.tmp/\n# Package Files #\n*.jar\n*.war\n*.nar\n*.ear\n*.zip\n*.tar.gz\n*.rar\n# virtual machine crash logs, see \nhttp://www.java.com/en/download/help/error_hotspot.xml\nhs_err_pid*\n.classpath\n.project\n.settings\ntarget\n.idea\n*.iml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);