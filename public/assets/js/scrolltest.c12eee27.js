(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["scrolltest"],{"17f2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll-wrapper"},[t._m(0),n("div",{staticClass:"list-wrapper",style:{height:t.remHeight+"rem"}},[n("Scrollview",{on:{addList:t.addList,getHeight:t.getHeight}},[n("div",{attrs:{slot:"item"},slot:"item"},t._l(t.listData,(function(e,i){return n("div",{key:i,staticClass:"item-content"},[t._v(" "+t._s("滚动"+e)+" ")])})),0)])],1)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-content"},[n("b",[t._v("scroll demo")]),n("br"),t._v(" 1.不相对于body滚动 2.点击加载更多 3.设置动态高度 ")])}],o=(n("d81d"),n("2909")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-content"},[t._t("item"),n("div",{staticClass:"more",on:{click:function(e){return t.onLoadPage()}}},[t._v(" 加载更多 ")])],2)},a=[],l={name:"ScrollviewBody",components:{},data:function(){return{}},methods:{onLoadPage:function(){var t=this,e=document.querySelector(".list-content");this.$emit("addList");var n=e.getBoundingClientRect();console.log("ulDomObj,ulDomObj.height：",n,n.height),this.$nextTick((function(){var e=document.querySelector(".list-content"),n=e.getBoundingClientRect().height;console.log("nextTick-ulDomObj.height:",n),t.$emit("getHeight",n)}))}},mounted:function(){},beforeDestory:function(){}},r=l,u=(n("1c64"),n("2877")),d=Object(u["a"])(r,s,a,!1,null,"f9e54bb2",null),h=d.exports,m=37.5;function f(t){return t/m}var g={name:"Scrolltestest",components:{Scrollview:h},data:function(){return{listData:[1,2,3,4,5,6,7,8,9,10],remHeight:f(300)}},methods:{addList:function(){var t,e=this,n=[1,2,3,4,5,6],i=n.map((function(t){return"add".concat(e.listData.length)}));(t=this.listData).push.apply(t,Object(o["a"])(i))},getHeight:function(t){this.remHeight=f(t)}},mounted:function(){}},v=g,p=(n("9c26"),Object(u["a"])(v,i,c,!1,null,"749e878b",null));e["default"]=p.exports},"1c1a":function(t,e,n){},"1c64":function(t,e,n){"use strict";var i=n("9dc2"),c=n.n(i);c.a},"9c26":function(t,e,n){"use strict";var i=n("1c1a"),c=n.n(i);c.a},"9dc2":function(t,e,n){}}]);
//# sourceMappingURL=scrolltest.c12eee27.js.map