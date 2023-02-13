(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{670:function(s,n,a){"use strict";a.r(n);var e=a(1),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Nginx的proxy_store作用是直接把静态文件在本地硬盘创建并读取，类似于七牛或者又拍这样的镜像CDN功能，首次访问会自动获取源站的静态图片等文件，之后的访问就是直接从CDN服务器读取，加快了速度。")]),s._v(" "),n("p",[s._v("需要配置一下参数：")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[s._v('#启用缓存到本地的功能\nproxy_store on;\n#表示用户读写权限，如果在error中报路径不允许访问的话就用"chomod -R a+rw"将下面配置的路径改为相应的权限.\nproxy_store_access user:rw group:rw all:rw;\n#此处为文件的缓存路径，这个路径是和url中的文件路径一致的\nproxy_temp_path 缓存目录;\n#在上面的配置之后，虽然文件被缓存到了本地磁盘上，但每次请求仍会向远端拉取文件，为了避免去远端拉取文件，还必须增加：\nif ( !-e $request_filename) {\nproxy_pass http://192.168.10.10;\n}\n注："!-e $request_filename"正则表达式，匹配缓存目录中的文件与源文件是否存在。\n"http://192.168.10.10" 源服务器的地址，默认端口80，如监听其他端口，此处要指出，例如4000端口，http://192.168.10.10:4000\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h1",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),n("p",[s._v("整体配置如下（修改nginx的配置文件nginx.conf）：")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[s._v("  location / {                 //这里的location是要换成自己经过精确匹配的location，比如要缓存图片要写成 \"location ~*\\.(gif|jpg|jepg|png|bmp)${\"\n    expires 3d;               //所有链接，浏览器缓存过期时间为3天\n    proxy_set_header Accept-Encoding '';\n    root /home/mpeg/nginx;          //此目录为服务器的根目录，下面的if语句就是判断此目录下是否有响应的文件\n    proxy_store on;             //表示开启缓存\n    proxy_store_access user:rw group:rw all:rw;//表示用户读写权限\n    proxy_temp_path /home/mpeg/nginx;    //此处为文件的缓存路径，这个路径是和url中的文件路径一致的\n    if ( !-e $request_filename) {\n        proxy_pass http://192.168.0.1;  //此处为要被代理的服务器的地址\n    }\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);