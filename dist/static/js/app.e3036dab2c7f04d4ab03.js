webpackJsonp([0],{"3Ib8":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"app"}},[n("div",{staticClass:"basement"},[n("pre",{staticClass:"says"},[t._v(t._s(t.code))])])])])},a=[],r={render:s,staticRenderFns:a};e.a=r},GBuD:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("img",{staticClass:"background",attrs:{src:n("N1Ew")},on:{click:t.showChoose}}),t._v(" "),t.chooseDisplay?t._e():s("welcome"),t._v(" "),t.chooseDisplay?s("choose"):t._e()],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},GteQ:function(t,e){},M93x:function(t,e,n){"use strict";function s(t){n("fK68")}var a=n("xJD8"),r=n("GBuD"),i=n("VU/8"),c=s,o=i(a.a,r.a,!1,c,null,null);e.a=o.exports},N1Ew:function(t,e,n){t.exports=n.p+"static/img/background.ad1d111.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("nJyV"),a=(n.n(s),n("7+uW")),r=n("M93x"),i=n("sVYa");n.n(i);a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:r.a}})},OsGr:function(t,e,n){"use strict";e.a={data:function(){return{newsArr:[],level5:["神之御子微微","幽冥的梅菲尔"],level4:["公主史莱姆","狂犬多米诺","七尾.稻荷御澄","真护·天茧","莉安夕","卡库拉拉兹巴","阿芙莉芒","宝石迷迷可","死亡缠绕·萝丝娜","沼江夜鸣·鵺","罪骨公主·斯卡莉安"],level3:["MIO","露库希安","义贼多米诺","海歌姬·赛伦","雷素·鸣","基雅·库罗","秋风希露芙","拉克斯·蕾妮娅","血口荆棘·辛普拉","妖蛾子","高原火角·阿卡铃","花藕子","月兔蕾雅","白浪激流·克洛琪","桑图艾尔"]}},methods:{initChanceArr:function(t){var e=[0];for(i=0;i<t.length;i++)e.push(t[i]+e[i]);return e},cashEggLevel:function(){var t=100*Math.random();return 5-[1.61,6.81,19.31,99.7,100].findIndex(function(e){return t<e})},getRandomResult:function(t){return t[parseInt(t.length*Math.random())]},getGachaResult:function(t){switch(t){case 1:return"★杂鱼(天选之非)";case 2:return"★★杂鱼";case 3:return"★★★"+this.getRandomResult(this.level3);case 4:return"★★★★"+this.getRandomResult(this.level4);case 5:return"★★★★★"+this.getRandomResult(this.level5)}},getGachaUpResult:function(t){var e=parseInt(10*Math.random());switch(t){case 1:return"★杂鱼(天选之非)";case 2:return"★★杂鱼";case 3:return e>4?"★★★"+this.getRandomResult(this.level3):"★★★野林之歌·木野子";case 4:return e>4?"★★★★"+this.getRandomResult(this.level4):"★★★★命运之女·拉米娅";case 5:return e>4?"★★★★★"+this.getRandomResult(this.level5):"★★★★★幻翼天角·菲娜"}},addLine:function(){this.newsArr.push("------十一连分割线-------")},getGachaUpOnce:function(){this.newsArr.push(this.getGachaUpResult(this.cashEggLevel()))},getGacha10:function(){for(var t=0;t<11;t++)this.newsArr.push(this.getGachaResult(this.cashEggLevel()));this.addLine()},getGachaUp10:function(){for(var t=0;t<11;t++)this.getGachaUpOnce();this.addLine()}},watch:{newsArr:function(){var t=this;this.$nextTick(function(){var e=t.$el.querySelector("#chatContainer");e.scrollTop=e.scrollHeight})}}}},RGWa:function(t,e,n){"use strict";function s(t){n("GteQ")}var a=n("OsGr"),r=n("yl1I"),i=n("VU/8"),c=s,o=i(a.a,r.a,!1,c,"data-v-3cb4a705",null);e.a=o.exports},YI7o:function(t,e,n){"use strict";e.a={name:"app",data:function(){return{code:"",finalCode:"  最近刚好没钱用,非洲人快点来给我送钱吧～\n\n   说明:1.本模拟器概率完全参照官方公布的抽奖概率表,\n\n       没有做十一连保底逻辑,结果仅供参考\n\n       (但是因为是官方概率,还是可供参考的,非洲人自觉)\n\n       2.写完一共花了我四个小时,仓促可能会有bug,见谅。\n\n        "}},created:function(){var t=this,e=0;setInterval(function(){t.code=t.finalCode.substring(0,e),e+=1},30)},computed:{styleCode:function(){return this.code}}}},bWex:function(t,e,n){"use strict";function s(t){n("sLpV")}var a=n("YI7o"),r=n("3Ib8"),i=n("VU/8"),c=s,o=i(a.a,r.a,!1,c,null,null);e.a=o.exports},fK68:function(t,e){},nJyV:function(t,e){},sLpV:function(t,e){},xJD8:function(t,e,n){"use strict";var s=n("bWex"),a=n("RGWa");e.a={name:"app",components:{welcome:s.a,choose:a.a},data:function(){return{chooseDisplay:0,newsArr:[]}},methods:{showChoose:function(){this.chooseDisplay=1}}}},yl1I:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"resultarea",attrs:{id:"chatContainer"}},t._l(t.newsArr,function(e){return n("div",[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),n("div",{staticClass:"says"},[n("ul",[n("li",{on:{click:t.getGacha10}},[t._v("氪金十一连抽-常规")]),t._v(" "),n("li",{on:{click:t.getGachaUp10}},[t._v("氪金十一连抽-桃源村UP")]),t._v(" "),n("li",{on:{click:t.getGachaUpOnce}},[t._v("单抽桃源村出奇迹")])])])])},a=[],r={render:s,staticRenderFns:a};e.a=r}},["NHnr"]);
//# sourceMappingURL=app.e3036dab2c7f04d4ab03.js.map