(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myNotice-noticeDetail"],{"0d7a":function(e,t,n){"use strict";var i=n("6389"),a=n.n(i);a.a},"216a":function(e,t,n){"use strict";n.r(t);var i=n("c38e"),a=n("8643");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("0d7a");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"e6d598ec",null);t["default"]=c.exports},"25b6":function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("1104")),s={props:["list","hl"],mixins:[a.default],data:function(){return{}},methods:{c:function(e){this.$emit("change",e)}}};t.default=s},"31ac":function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("fc1f")),s=i(n("dbaf")),o=i(n("f4ee")),c=i(n("8805")),r={mixins:[a.default,o.default,s.default],components:{checkBoxCP:c.default},onShow:function(){this.$store.dispatch("rootST/changeMyPage","myNotice")},data:function(){return{}}};t.default=r},3685:function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("1104")),s={mixins:[a.default],props:["checked"],data:function(){return{}}};t.default=s},"372f":function(e,t,n){"use strict";var i=n("4bf2"),a=n.n(i);a.a},"44bc":function(e,t,n){"use strict";n.r(t);var i=n("31ac"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},"4bf2":function(e,t,n){var i=n("afb1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("149c55d9",i,!0,{sourceMap:!1,shadowMode:!1})},6389:function(e,t,n){var i=n("9339");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("2d3cd22a",i,!0,{sourceMap:!1,shadowMode:!1})},"70ca":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{class:e.destop?"destop":"phone"},[e.destop&&e.initReady?void 0:e._e(),!e.destop&&e.initReady?[n("navBarCP",[n("v-uni-view",{staticClass:"nuskinIcon navBarBack",attrs:{slot:"left"},on:{click:function(t){t=e.$handleEvent(t),e.back(t)}},slot:"left"},[e._v("")]),n("v-uni-text",{attrs:{slot:"center"},slot:"center"},[e._v("消息详情")])],1),n("v-uni-view",{staticStyle:{width:"100%",height:"55px"}}),n("v-uni-view",{staticClass:"title"},[e._v("敌方还有30s抵达战场，准备战斗！！")]),n("v-uni-view",{staticClass:"subFrame"},[n("v-uni-view",{staticClass:"type"},[e._v("活动通知")]),n("v-uni-view",{staticClass:"date"},[e._v("2019.04.12 12:36:53")])],1),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")]),n("v-uni-view",{staticClass:"text"},[e._v("很长很长一句话")])]:e._e()],2)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},8643:function(e,t,n){"use strict";n.r(t);var i=n("25b6"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},8805:function(e,t,n){"use strict";n.r(t);var i=n("f3e3"),a=n("962f");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("b72e");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"50ea45fc",null);t["default"]=c.exports},"8f56":function(e,t,n){"use strict";n.r(t);var i=n("efd1"),a=n("9d20");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("d1af");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"c31d28a0",null);t["default"]=c.exports},9339:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*OSS*/\n/*主色*/.destopCP .tabbarCP[data-v-e6d598ec]{height:40px;border-bottom:1px solid #f5f5f5;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.destopCP .item[data-v-e6d598ec]{margin-right:45px;cursor:pointer;color:#000;font-size:14px;position:relative}.destopCP .line[data-v-e6d598ec]{display:block;position:absolute;bottom:-13px;left:5%;width:90%;height:2px;background-color:#008ab0}.phoneCP[data-v-e6d598ec]{width:100%}.phoneCP .tabbarCP[data-v-e6d598ec]{height:%?91?%;border-bottom:1px solid #f5f5f5;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;background-color:#fff}.phoneCP .item[data-v-e6d598ec]{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;line-height:%?91?%;font-size:%?26?%;color:#333;position:relative}.phoneCP .line[data-v-e6d598ec]{display:block;position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:4px solid #008ab0}.phoneCP .hl[data-v-e6d598ec]{color:#008ab0}',""])},"934a":function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("1104")),s={mixins:[a.default],computed:{nav:function(){return this.$store.state.rootST.myPage}},data:function(){return{}}};t.default=s},"962f":function(e,t,n){"use strict";n.r(t);var i=n("3685"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},"9d20":function(e,t,n){"use strict";n.r(t);var i=n("934a"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},afb1:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*OSS*/\n/*主色*/uni-page-body[data-v-08b06d28]{background-color:#fff}.phone[data-v-08b06d28]{width:%?750?%}.phone .title[data-v-08b06d28]{width:%?750?%;padding:0 %?30?%;font-size:%?33?%;margin-top:%?55?%}.phone .subFrame[data-v-08b06d28]{width:%?750?%;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:%?22?%;margin-bottom:%?48?%}.phone .subFrame .type[data-v-08b06d28]{height:%?48?%;width:%?146?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;line-height:%?46?%;color:#49b3c9;border:1px solid #49b3c9;border-radius:%?48?%;text-align:center}.phone .subFrame .date[data-v-08b06d28]{font-size:%?20?%;color:#7c7c7c}.phone .text[data-v-08b06d28]{font-size:%?24?%;line-height:1.5;padding:0 %?30?%}body.?%PAGE?%[data-v-08b06d28]{background-color:#fff}',""])},b72e:function(e,t,n){"use strict";var i=n("fc3a"),a=n.n(i);a.a},bb42:function(e,t,n){var i=n("bfd3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("08a7acfe",i,!0,{sourceMap:!1,shadowMode:!1})},bfd3:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*OSS*/\n/*主色*/.mineNavCP[data-v-c31d28a0]{width:180px;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.title[data-v-c31d28a0]{font-size:16px;font-weight:700;color:#000;margin-bottom:20px}.item[data-v-c31d28a0]{color:#333;font-size:14px;margin-bottom:20px}.item.hl[data-v-c31d28a0]{color:#008ab0}',""])},c38e:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{class:e.destop?"destopCP":"phoneCP"},[n("v-uni-view",{staticClass:"tabbarCP"},e._l(e.list,function(t,i){return n("v-uni-view",{key:t.id,class:{item:1,hl:t.id==e.hl},on:{click:function(n){n=e.$handleEvent(n),e.c(t.id)}}},[e._v(e._s(t.name)),e.hl==t.id?n("v-uni-view",{staticClass:"line"}):e._e()],1)}),1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},ce44:function(e,t,n){"use strict";n.r(t);var i=n("70ca"),a=n("44bc");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("372f");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"08b06d28",null);t["default"]=c.exports},d1af:function(e,t,n){"use strict";var i=n("bb42"),a=n.n(i);a.a},d216:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*OSS*/\n/*主色*/.destopCP .checkboxCP[data-v-50ea45fc]{width:18px;height:18px}.phoneCP .checkboxCP[data-v-50ea45fc]{font-size:%?50?%;color:#dbdbdb}.phoneCP .checkboxCP.checked[data-v-50ea45fc]{color:#49b3c9}',""])},dbaf:function(e,t,n){"use strict";var i=n("288e"),a=i(n("8f56")),s=i(n("216a"));e.exports={components:{mineNavCP:a.default,tabbarCP:s.default},computed:{}}},efd1:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"mineNavCP"},[n("v-uni-view",{staticClass:"title"},[e._v("交易管理")]),n("v-uni-view",{class:{item:1,hl:"myOrder"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myOrder/myOrder")}}},[e._v("我的订单")]),n("v-uni-view",{class:{item:1,hl:"afterSale"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/afterSale/afterSale")}}},[e._v("售后服务查询")]),n("v-uni-view",{class:{item:1,hl:"myCoupon"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myCoupon/myCoupon")}}},[e._v("我的优惠券")]),n("v-uni-view",{class:{item:1,hl:"myPlace"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myPlace/myPlace")}}},[e._v("收货地址")]),n("v-uni-view",{class:{item:1,hl:"amout"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/amout/amout")}}},[e._v("年度购买额度")]),n("v-uni-view",{staticClass:"title"},[e._v("交易管理")]),n("v-uni-view",{class:{item:1,hl:"myLevel"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myLevel/myLevel")}}},[e._v("我的身份")]),n("v-uni-view",{class:{item:1,hl:"myShare"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myShare/myShare")}}},[e._v("我的分享")]),n("v-uni-view",{class:{item:1,hl:"myIncome"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myIncome/myIncome")}}},[e._v("我的收入")]),n("v-uni-view",{class:{item:1,hl:"myCard"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myCard/myCard")}}},[e._v("我的银行卡")]),n("v-uni-view",{staticClass:"title"},[e._v("我的账号")]),n("v-uni-view",{class:{item:1,hl:"myInfo"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myInfo/myInfo")}}},[e._v("个人信息")]),n("v-uni-view",{class:{item:1,hl:"myQrcode"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myQrcode/myQrcode")}}},[e._v("我的二维码")]),n("v-uni-view",{class:{item:1,hl:"myNotice"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myNotice/myNotice")}}},[e._v("我的消息")]),n("v-uni-view",{class:{item:1,hl:"myFollow"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myFollow/myFollow")}}},[e._v("我的收藏")]),n("v-uni-view",{class:{item:1,hl:"myIntegral"==e.nav},on:{click:function(t){t=e.$handleEvent(t),e.go("/pages/myIntegral/myIntegral")}}},[e._v("我的积分")])],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},f3e3:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{class:e.destop?"destopCP":"phoneCP"},[e.destop?n("v-uni-image",{staticClass:"checkboxCP",attrs:{src:e.imgPath+"checked.png"}}):e._e(),e.destop||e.checked?e._e():n("v-uni-view",{staticClass:"checkboxCP nuskinIcon"},[e._v("")]),!e.destop&&e.checked?n("v-uni-view",{staticClass:"checkboxCP nuskinIcon checked"},[e._v("")]):e._e()],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},f4ee:function(e,t,n){"use strict";var i=n("288e"),a=(i(n("68c3")),i(n("666d")));e.exports={onShow:function(){this.isLogon||uni.navigateTo({url:"/pages/logon/logon"})},computed:{isLogon:function(){return!!(this.$store.state.rootST.refresh_expired&&(0,a.default)(this.$store.state.rootST.refresh_expired.substr(0,this.$store.state.rootST.refresh_expired.length-8),"YYYYY-MM-DD hh:mm:ss").format("x")>(0,a.default)().format("x"))}}}},fc3a:function(e,t,n){var i=n("d216");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("96c4a9aa",i,!0,{sourceMap:!1,shadowMode:!1})}}]);