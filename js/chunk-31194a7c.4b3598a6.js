(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31194a7c"],{"0d98":function(e,t,n){e.exports=n.p+"img/close-popup.cb7e35ba.svg"},b8cb:function(e,t,n){e.exports=n.p+"img/pixel-swipe.730abdf9.svg"},d259:function(e,t,n){"use strict";n("da82")},da82:function(e,t,n){},f479:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"swap-popup"},[r("img",{staticClass:"close-btn",attrs:{src:n("0d98"),alt:""},on:{click:e.closePopup}}),r("p",{staticClass:"title"},[e._v("Swap")]),e.swapObject?r("p",{staticClass:"balance-text"},[e._v(" Balance: "+e._s(parseFloat(e.activeFromToken.balance).toFixed(4))+" ")]):e._e(),e.swapObject?[r("div",{staticClass:"target-row"},[r("p",{staticClass:"label-text"},[e._v("From")]),r("ValueInput",{attrs:{max:e.activeFromToken.balance,values:e.fromTokens,valueName:e.activeFromToken.name,error:e.mainValueError,parentValue:e.mainValue},on:{changeToken:e.changeFromToken,onchange:e.updateMainValue}})],1),r("img",{staticClass:"swap-icon",attrs:{src:n("b8cb"),alt:""}}),r("div",{staticClass:"target-row to-row"},[r("p",{staticClass:"label-text"},[e._v("To")]),r("ValueInput",{attrs:{valueName:e.activeToToken.name,values:e.toTokens,parentValue:e.pairValue,disabled:!0},on:{changeToken:e.changeToToken}})],1),r("button",{staticClass:"btn approve-btn",attrs:{disabled:!e.mainValue&&e.mainValueError},on:{click:e.swapHandler}},[e._v(" Swap ")])]:e._e()],2)},a=[],c=n("5530"),i=n("1da1"),o=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("7db0"),n("4de4"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("b680"),n("d81d"),function(){return n.e("chunk-d3c2f27a").then(n.bind(null,"6618"))}),s={data:function(){return{swapObject:null,activeFromTokenIdx:0,activeToTokenIdx:1,mainValue:"",mainValueError:"",pairValueError:"",virtualPrice:0,updateInterval:null}},computed:{account:function(){return this.$store.getters.getAccount},activeFromToken:function(){var e=this;return this.swapObject.tokens.find((function(t){return t.tokenIdx===e.activeFromTokenIdx}))},activeToToken:function(){var e=this;return this.swapObject.tokens.find((function(t){return t.tokenIdx===e.activeToTokenIdx}))},fromTokens:function(){var e=this;return this.swapObject.tokens.filter((function(t){return t.tokenIdx!==e.activeFromTokenIdx}))},toTokens:function(){var e=this;return 0===this.activeFromTokenIdx?this.swapObject.tokens.filter((function(t){return 0!==t.tokenIdx&&t.tokenIdx!==e.activeToTokenIdx})):[]},pairValue:function(){var e;0===this.activeFromTokenIdx&&(e=this.mainValue*this.activeToToken.rate),0!==this.activeFromTokenIdx&&(e=this.mainValue/this.activeFromToken.rate);var t=new RegExp("^-?\\d+(?:.\\d{0,"+(this.activeToToken.decimals||-1)+"})?");return e.toString().match(t)[0]}},methods:{toFixed:function(e,t){var n=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?");return e.toString().match(n)[0]},changeToToken:function(e){this.activeToTokenIdx=e},changeFromToken:function(e){return this.mainValue="",this.mainValueError="",this.activeFromTokenIdx=e,0!==e?(this.activeToTokenIdx=0,!1):0===e&&0===this.activeToTokenIdx?(this.activeToTokenIdx=1,!1):void 0},closePopup:function(){this.$emit("close")},updateMainValue:function(e){if(e>this.activeFromToken.balance)return this.mainValueError="The value cannot be greater than ".concat(this.activeFromToken.balance),!1;this.mainValueError="",this.mainValue=e},swapHandler:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.checkTokenAllowance(e.activeFromToken);case 2:if(n=t.sent,n){t.next=5;break}return t.abrupt("return",!1);case 5:return t.prev=5,r=e.$ethers.utils.parseUnits(e.mainValue.toString(),e.activeFromToken.decimals),a=e.toFixed(String(.95*e.pairValue),e.activeToToken.decimals),c=e.$ethers.utils.parseUnits(a.toString(),e.activeToToken.decimals),t.next=11,e.swapObject.contractInstance["exchange_underlying(int128,int128,uint256,uint256)"](e.activeFromTokenIdx,e.activeToTokenIdx,r,c,{gasLimit:4e5});case 11:return i=t.sent,e.closePopup(),t.next=15,i.wait();case 15:t.sent,t.next=20;break;case 18:t.prev=18,t.t0=t["catch"](5);case 20:case"end":return t.stop()}}),t,null,[[5,18]])})))()},updateTokens:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:t.swapObject,n.next=3,Promise.all(r.tokens.map((function(e){return t.updateToken(e)})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},updateToken:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.contractInstance.balanceOf(t.account,{gasLimit:6e5});case 3:a=n.sent,r=t.$ethers.utils.formatUnits(a.toString(),e.decimals),n.next=9;break;case 7:n.prev=7,n.t0=n["catch"](0);case 9:return n.abrupt("return",Object(c["a"])(Object(c["a"])({},e),{},{balance:r}));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getVirtualPrice:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:t.swapObject.rateContract,n.prev=1,n.next=4,r.get_virtual_price();case 4:return a=n.sent,c=t.$ethers.utils.formatUnits(a.toString(),18),n.abrupt("return",c);case 9:n.prev=9,n.t0=n["catch"](1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})))()},checkTokenAllowance:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,e.allowance){n.next=13;break}return n.next=4,e.contractInstance.approve(t.swapObject.contractInstance.address,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");case 4:return r=n.sent,a=+r.toString()+1e3,n.next=8,e.contractInstance.approve(t.swapObject.contractInstance.address,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",{gasLimit:a});case 8:return c=n.sent,n.next=11,c.wait();case 11:return n.sent,n.abrupt("return",!0);case 13:return n.abrupt("return",!0);case 16:return n.prev=16,n.t0=n["catch"](0),n.abrupt("return",!1);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))()},initPopup:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$store.getters.getSwapObject,n){t.next=4;break}return e.closePopup(),t.abrupt("return",!1);case 4:return t.next=6,e.updateTokens(n);case 6:return r=t.sent,t.next=9,e.getVirtualPrice(n.rateContract);case 9:e.virtualPrice=t.sent,e.swapObject=Object(c["a"])(Object(c["a"])({},n),{},{tokens:r});case 11:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.initPopup();case 2:e.updateInterval=setInterval(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.initPopup();case 2:case"end":return t.stop()}}),t)}))),5e3);case 3:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){clearInterval(this.updateInterval)},components:{ValueInput:o}},u=s,f=(n("d259"),n("2877")),l=Object(f["a"])(u,r,a,!1,null,"2d4e8158",null);t["default"]=l.exports}}]);