(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{481:function(t,a,i){"use strict";i.r(a);var _=i(1),e=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis数据结构扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis数据结构扩展"}},[t._v("#")]),t._v(" "),a("strong",[t._v("redis数据结构扩展")])]),t._v(" "),a("h2",{attrs:{id:"geo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geo"}},[t._v("#")]),t._v(" GEO")]),t._v(" "),a("p",[t._v("GEOADD locations 116.419217 39.921133 beijin")]),t._v(" "),a("p",[t._v("GEOPOS locations beijin")]),t._v(" "),a("p",[t._v("GEODIST locations tianjin beijin km \t计算距离")]),t._v(" "),a("p",[t._v("GEORADIUSBYMEMBER locations beijin 150 km  通过距离计算城市")]),t._v(" "),a("p",[t._v("注意：没有删除命令  它的本质是zset  （type locations）")]),t._v(" "),a("p",[t._v("所以可以使用zrem key member  删除元素")]),t._v(" "),a("p",[t._v("zrange key  0  -1  表示所有  返回指定集合中所有value")]),t._v(" "),a("h2",{attrs:{id:"hyperloglog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog"}},[t._v("#")]),t._v(" hyperLogLog")]),t._v(" "),a("p",[t._v("Redis 在 2.8.9 版本添加了 HyperLogLog 结构。")]),t._v(" "),a("p",[t._v("Redis HyperLogLog 是用来做基数统计的算法，HyperLogLog 的优点是，在输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定 的、并且是很小的")]),t._v(" "),a("p",[t._v("在 Redis 里面，每个 HyperLogLog 键只需要花费 12 KB 内存，就可以计算接近 2^64 个不同元素的基 数。这和计算基数时，元素越多耗费内存就越多的集合形成鲜明对比。")]),t._v(" "),a("p",[t._v("PFADD 2017_03_06:taibai 'yes' 'yes' 'yes' 'yes' 'no'")]),t._v(" "),a("p",[t._v("PFCOUNT 2017_03_06:taibai   统计有多少不同的值")]),t._v(" "),a("p",[t._v("1.PFADD 2017_09_08:taibai uuid9 uuid10 uu11")]),t._v(" "),a("p",[t._v("2.PFMERGE 2016_03_06:taibai 2017_09_08:taibai  合并")]),t._v(" "),a("p",[t._v("注意：本质还是字符串 ，有容错率，官方数据是0.81%")]),t._v(" "),a("h2",{attrs:{id:"bitmaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmaps"}},[t._v("#")]),t._v(" bitmaps")]),t._v(" "),a("p",[t._v("setbit taibai 500000 0")]),t._v(" "),a("p",[t._v("getbit taibai 500000")]),t._v(" "),a("p",[t._v("bitcount taibai")]),t._v(" "),a("p",[t._v("Bitmap本质是string，是一串连续的2进制数字（0或1），每一位所在的位置为偏移(offset)。")]),t._v(" "),a("p",[t._v("string（Bitmap）最大长度是512 MB，所以它们可以表示2 ^ 32=4294967296个不同的位。")])])}),[],!1,null,null,null);a.default=e.exports}}]);