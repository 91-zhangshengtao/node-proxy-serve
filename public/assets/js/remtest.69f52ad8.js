(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["remtest"],{6508:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"rem-wrapper"},[t._m(0),o("div",{staticClass:"list-wrapper"},[o("Scrollview",{attrs:{isend:t.isend,readyToLoad:t.readyToLoad},on:{onLoadPage:t.onLoadPage}},[o("div",{attrs:{slot:"item"},slot:"item"},t._l(t.listData,(function(e,a){return o("div",{key:a,staticClass:"item-content"},[t._v(" "+t._s("滚动"+e)+" ")])})),0)])],1),t._m(1)])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-content"},[o("div",{staticClass:"title-text"},[t._v("rem demo 1.相对于body滚动加载")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bottom-bar"},[o("div",{staticClass:"home tab-item"},[t._v("首页")]),o("div",{staticClass:"order tab-item"},[t._v("点菜")]),o("div",{staticClass:"my tab-item"},[t._v("我的")])])}],s=(o("d81d"),o("2909")),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list-content"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.readyToLoad,expression:"readyToLoad"}]},[t._t("item")],2),o("div",{staticClass:"more",on:{click:function(e){return t.onLoadPage()}}},[t._v(" "+t._s(t.isend?"已加载完成":"加载更多")+" ")])])},c=[],r={name:"ScrollviewBody",components:{},data:function(){return{}},props:{isend:{type:[Boolean],default:!1},readyToLoad:{type:[Boolean],default:!0}},methods:{onLoadPage:function(){if(!this.isend&&this.readyToLoad){var t=document.documentElement.clientHeight,e=document.body.scrollHeight,o=document.documentElement.scrollTop||document.body.scrollTop,a=5;console.log("scrollTop:",o),console.log("clientHeight:",t),console.log("scrollHeight:",e),o+t>=e-a&&this.$emit("onLoadPage")}}},mounted:function(){window.addEventListener("scroll",this.onLoadPage)},beforeDestory:function(){window.removeEventListener("scroll",this.onLoadPage)}},d=r,l=(o("af56"),o("2877")),u=Object(l["a"])(d,i,c,!1,null,"73c214f4",null),m=u.exports,v={name:"Remrest",components:{Scrollview:m},data:function(){return{listData:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],isend:!1,readyToLoad:!0,page:0}},methods:{onLoadPage:function(){this.page++,this.page>3?this.isend=!0:this.fetchData(this.page)},fetchData:function(t){var e=this,o=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];this.readyToLoad=!1,setTimeout((function(){var t,a=o.map((function(t){return"add".concat(e.listData.length)}));(t=e.listData).push.apply(t,Object(s["a"])(a)),e.readyToLoad=!0}),3e3)}},mounted:function(){}},f=v,h=(o("f836"),Object(l["a"])(f,a,n,!1,null,"6d76a180",null));e["default"]=h.exports},"743c":function(t,e,o){},"7a2c":function(t,e,o){},af56:function(t,e,o){"use strict";var a=o("7a2c"),n=o.n(a);n.a},f836:function(t,e,o){"use strict";var a=o("743c"),n=o.n(a);n.a}}]);
//# sourceMappingURL=remtest.69f52ad8.js.map