(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-866b0cd8"],{"6e0d":function(t,a,e){},"711c":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"deposited-item"},[i("div",{staticClass:"title-wrap"},[i("p",{staticClass:"title"},[t._v(t._s(t.title))]),t.dataObj.link?i("a",{staticClass:"swap-link",attrs:{href:t.dataObj.link,target:"_blank"}},[t._v(" "+t._s(t.dataObj.tokenType||t.dataObj.tokenName)+" "),i("img",{attrs:{src:e("a1dc"),alt:""}})]):t._e()]),i("p",{staticClass:"subtitle"},[t._v("ERC-20")]),i("div",{staticClass:"inform-item"},[i("div",{staticClass:"value-type"},[i("TokenIcon",{attrs:{token:t.dataObj.tokenName}}),i("p",[t._v(t._s(t.dataObj.tokenName.toUpperCase()))])],1),i("div",{staticClass:"amounts-wrap"},[i("p",{staticClass:"main-amount"},[t._v(t._s(t.dataObj.mainValue))]),i("p",{staticClass:"usd-amount"},[t._v("$ "+t._s(t.dataObj.usdValue))])])]),i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltipText,expression:"tooltipText"}],staticClass:"btn mini",attrs:{disabled:!t.dataObj.mainValue||0==t.dataObj.mainValue},on:{click:t.clickHandler}},[t._v(" "+t._s(t.buttonText)+" ")])])},s=[],n=(e("d3b7"),e("3ca3"),e("ddb0"),function(){return e.e("chunk-2ff0092f").then(e.bind(null,"eaf1"))}),o={props:{dataObj:{type:Object,required:!0}},computed:{title:function(){return"deposit"===this.dataObj.type?"".concat(this.dataObj.tokenType," Deposited"):"earned"===this.dataObj.type?"Earned":"Title"},buttonText:function(){return"deposit"===this.dataObj.type?"Withdraw":"earned"===this.dataObj.type?"Harvest":"Action"},tooltipText:function(){return"deposit"===this.dataObj.type?"Withdrawal will take out your ".concat(this.dataObj.tokenType," from the pool along with earned Spell tokens."):"earned"===this.dataObj.type?"This will withdraw only your earned spell.":""}},methods:{clickHandler:function(){this.$emit("click",this.dataObj.type)}},components:{TokenIcon:n}},d=o,l=(e("cffe"),e("2877")),c=Object(l["a"])(d,i,s,!1,null,"30a3cf1e",null);a["default"]=c.exports},a1dc:function(t,a,e){t.exports=e.p+"img/icons8-external-link.c69fbd88.svg"},cffe:function(t,a,e){"use strict";e("6e0d")}}]);