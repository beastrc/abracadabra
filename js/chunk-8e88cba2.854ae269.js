(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e88cba2"],{"4111b":function(t,i,e){},"7ff5":function(t,i,e){t.exports=e.p+"img/dani-mac.4a9e4079.svg"},ac53:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"leverage-bar"},[s("p",{staticClass:"bar-title"},[t._v("Choose your leverage")]),s("div",{staticClass:"bar-wrap"},[s("div",{staticClass:"multipliers-wrap"},t._l(t.multipliers,(function(i){return s("div",{key:i,staticClass:"multiplier-item",class:{active:i===t.multiplier},on:{click:function(e){return t.setActive(i)}}},[s("p",[t._v(t._s(i)+"x")]),s("transition",{attrs:{name:"fade"}},[10===i&&i===t.multiplier?s("img",{staticClass:"dani-mac",attrs:{src:e("7ff5"),alt:""}}):t._e()])],1)})),0),s("div",{staticClass:"range-track"},[s("div",{staticClass:"range",class:t.userRisk,style:{width:t.rangeWidth+"%"}})])])])},r=[],a=(e("a9e3"),{props:{multiplier:{type:Number,required:!0}},data:function(){return{multipliers:[1,2,3,4,5,6,7,8,9,10]}},computed:{userRisk:function(){return this.multiplier>7?"hight":this.multiplier>3?"medium":"safe"},rangeWidth:function(){if(1===this.multiplier)return 0;var t=this.multipliers.length-1,i=this.multiplier-1;return i/t*100}},methods:{setActive:function(t){this.$emit("update",t)}}}),l=a,n=(e("ef41"),e("2877")),u=Object(n["a"])(l,s,r,!1,null,"4e2f34b8",null);i["default"]=u.exports},ef41:function(t,i,e){"use strict";e("4111b")}}]);