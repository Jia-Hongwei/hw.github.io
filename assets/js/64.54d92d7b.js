(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{384:function(t,s,e){"use strict";e.r(s);var a=e(7),i=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"influxdb安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#influxdb安装"}},[t._v("#")]),t._v(" influxDB安装")]),t._v(" "),s("h3",{attrs:{id:"_1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),s("blockquote",[s("p",[t._v("influxdb是influxdata开发的开源时序性数据库，它是由go语言写成，着力于高性能的查询与存储时序性数据库。被广泛应用于存储系统的监控数据，iot行业的实时数据等场景")])]),t._v(" "),s("p",[s("strong",[t._v("特性：")])]),t._v(" "),s("ul",[s("li",[t._v("基于时间序列")]),t._v(" "),s("li",[t._v("可度量性，可以计算")]),t._v(" "),s("li",[t._v("基于事件")])]),t._v(" "),s("h3",{attrs:{id:"_2-数据模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据模型"}},[t._v("#")]),t._v(" 2. 数据模型")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("measurement -> sql table\ntags -> 维度列\nfields -> 数值列\npoint -> 行记录\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_3-时间线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-时间线"}},[t._v("#")]),t._v(" 3. 时间线")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("series = measurement + tags\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_4-系统架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-系统架构"}},[t._v("#")]),t._v(" 4. 系统架构")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("RP 数据保留策略，即数据保留时间\nRP是数据库级别的，而不是表级别的属性\n每个数据库有多个保留策略，但是只能有一个默认策略\nshardGroup 分片，置存储指定时间段的数据，不通的shardGroup对应的时间段不会重合\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_5-部署安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-部署安装"}},[t._v("#")]),t._v(" 5. 部署安装")]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{attrs:{height:"300px",src:"https://cdn.jsdelivr.net/gh/Jia-Hongwei/picx-images-hosting@master/image.1feuep3dmtuo.webp"}})]),s("div",{staticClass:"center-container"},[s("img",{attrs:{height:"300px",src:"https://cdn.jsdelivr.net/gh/Jia-Hongwei/picx-images-hosting@master/image.52s63cysxss0.webp"}})]),s("blockquote",[s("p",[t._v("influxdb.conf 一般在etc下")])]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{attrs:{height:"300px",src:"https://cdn.jsdelivr.net/gh/Jia-Hongwei/picx-images-hosting@master/image.6cd9ody12w00.webp"}})]),s("h3",{attrs:{id:"_6-表操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-表操作"}},[t._v("#")]),t._v(" 6. 表操作")]),t._v(" "),s("blockquote",[s("p",[t._v("插入数据自动创建表\naltitude，area是主键，后边是具体指标")])]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{attrs:{height:"300px",src:"https://cdn.jsdelivr.net/gh/Jia-Hongwei/picx-images-hosting@master/image.5ov618ww8rs0.webp"}})]),s("div",{staticClass:"center-container"},[s("img",{attrs:{height:"300px",src:"https://cdn.jsdelivr.net/gh/Jia-Hongwei/picx-images-hosting@master/image.5cobadkrk0s0.webp"}})]),s("blockquote",[s("p",[t._v("创建用户")])]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{attrs:{height:"300px",src:"https://cdn.jsdelivr.net/gh/Jia-Hongwei/picx-images-hosting@master/image.70cejy07a740.webp"}})]),s("blockquote",[s("p",[t._v("数据库访问权限")])]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{attrs:{height:"300px",src:"https://cdn.jsdelivr.net/gh/Jia-Hongwei/picx-images-hosting@master/image.63c8lxamdlc0.webp"}})]),s("blockquote",[s("p",[t._v("开启用户登陆认证")])]),t._v(" "),s("div",{staticClass:"center-container"},[s("img",{attrs:{height:"300px",src:"https://cdn.jsdelivr.net/gh/Jia-Hongwei/picx-images-hosting@master/image.4w3mdpwh8d40.webp"}})])])}),[],!1,null,null,null);s.default=i.exports}}]);