(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67727588"],{"0d98":function(e,t,n){e.exports=n.p+"img/close-popup.cb7e35ba.svg"},"5c1f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"swap-popup"},[a("img",{staticClass:"close-btn",attrs:{src:n("0d98"),alt:""},on:{click:e.closePopup}}),a("p",{staticClass:"title"},[e._v(e._s(e.action))]),a("p",{staticClass:"subtitle"},[e._v(" Make SPELL work for you! Stake your SPELL and gain sSPELL. No impermanent loss, no loss of governance rights. Continuously compounding. After each new deposit, all staked SPELL are subject to a 24H lock-up period! ")]),a("p",{staticClass:"subtiitle"},[e._v(" sSPELL automatically earns fees from MIM repayments from all wizards proportional to your share of the stake pool. ")]),a("p",{staticClass:"balance-text"},[e._v(" Balance: "+e._s(parseFloat(e.balance||0).toFixed(4))+" ")]),a("div",{staticClass:"target-row"},[a("p",{staticClass:"label-text"},[e._v("From")]),a("ValueInput",{attrs:{max:e.balance||0,valueName:e.fromToken,parentValue:e.amount,error:e.amountError},on:{onchange:e.updateMainValue}})],1),a("img",{staticClass:"swap-icon",attrs:{src:n("8d35"),alt:""}}),a("div",{staticClass:"target-row to-row"},[a("p",{staticClass:"label-text"},[e._v("To")]),a("ValueInput",{attrs:{valueName:e.toToken,parentValue:e.toTokenAmount,disabled:!0}})],1),a("button",{staticClass:"btn approve-btn",attrs:{disabled:!e.amount},on:{click:e.actionHandler}},[e._v(" "+e._s(e.action)+" ")])])},r=[],s=n("1da1"),c=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),function(){return n.e("chunk-d3c2f27a").then(n.bind(null,"6618"))}),o={data:function(){return{balance:"",action:"",amount:"",amountError:"",tokenRate:1}},computed:{sSpellTokenObject:function(){return this.$store.getters.getSSpellObject},fromToken:function(){return"stake"===this.action?this.sSpellTokenObject.stakeToken.name:"unstake"===this.action?this.sSpellTokenObject.mainToken.name:""},toToken:function(){return"stake"===this.action?this.sSpellTokenObject.mainToken.name:"unstake"===this.action?this.sSpellTokenObject.stakeToken.name:""},toTokenAmount:function(){if(!this.amount)return"";var e=new RegExp("^-?\\d+(?:.\\d{0,6})?");if("stake"===this.action){var t=this.amount/this.tokenRate;return t.toString().match(e)[0]}if("unstake"===this.action){var n=this.amount*this.tokenRate;return n.toString().match(e)[0]}return""},account:function(){return this.$store.getters.getAccount}},methods:{closePopup:function(){this.$emit("close")},updateMainValue:function(e){if(+e>+this.balance)return this.amountError="The value cannot be greater than ".concat(this.balance),!1;this.amountError="",this.amount=e},getBalance:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"stake"===e.action&&(n=e.sSpellTokenObject.stakeToken.contractInstance),"unstake"===e.action&&(n=e.sSpellTokenObject.mainToken.contractInstance),t.prev=3,t.next=6,n.balanceOf(e.account);case 6:a=t.sent,e.balance=e.$ethers.utils.formatEther(a.toString()),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](3);case 12:case"end":return t.stop()}}),t,null,[[3,10]])})))()},getSpellRate:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,c,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.sSpellTokenObject.stakeToken.contractInstance,a=e.sSpellTokenObject.mainToken.contractInstance,t.prev=2,t.next=5,n.balanceOf(a.address);case 5:return r=t.sent,t.next=8,a.totalSupply();case 8:return s=t.sent,c=e.$ethers.utils.formatEther(r.toString()),o=e.$ethers.utils.formatEther(s),i=c/o,t.abrupt("return",i);case 15:t.prev=15,t.t0=t["catch"](2);case 17:case"end":return t.stop()}}),t,null,[[2,15]])})))()},actionHandler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("stake"!==e.action){t.next=14;break}return t.next=3,e.isTokenApprowed(e.sSpellTokenObject.stakeToken.contractInstance);case 3:if(n=t.sent,!n){t.next=8;break}return t.next=7,e.stake();case 7:return t.abrupt("return",!1);case 8:return t.next=10,e.approveToken(e.sSpellTokenObject.stakeToken.contractInstance);case 10:if(a=t.sent,!a){t.next=14;break}return t.next=14,e.stake();case 14:if("unstake"!==e.action){t.next=17;break}return t.next=17,e.unstake();case 17:case"end":return t.stop()}}),t)})))()},stake:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e.$ethers.utils.parseEther(e.amount),t.next=4,e.sSpellTokenObject.mainToken.contractInstance.estimateGas.mint(n);case 4:return a=t.sent,r=+a.toString()+1e3,t.next=8,e.sSpellTokenObject.mainToken.contractInstance.mint(n,{gasLimit:r});case 8:return s=t.sent,e.closePopup(),t.next=12,s.wait();case 12:t.sent,t.next=17;break;case 15:t.prev=15,t.t0=t["catch"](0);case 17:case"end":return t.stop()}}),t,null,[[0,15]])})))()},unstake:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e.$ethers.utils.parseEther(e.amount),t.next=4,e.sSpellTokenObject.mainToken.contractInstance.estimateGas.burn(e.account,n);case 4:return a=t.sent,r=+a.toString()+1e3,t.next=8,e.sSpellTokenObject.mainToken.contractInstance.burn(e.account,n,{gasLimit:r});case 8:return s=t.sent,e.closePopup(),t.next=12,s.wait();case 12:t.sent,t.next=17;break;case 15:t.prev=15,t.t0=t["catch"](0);case 17:case"end":return t.stop()}}),t,null,[[0,15]])})))()},isTokenApprowed:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.allowance(t.account,t.sSpellTokenObject.mainToken.contractInstance.address,{gasLimit:1e6});case 3:return a=n.sent,n.abrupt("return",parseFloat(a.toString())>0);case 7:return n.prev=7,n.t0=n["catch"](0),n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},approveToken:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.estimateGas.approve(t.sSpellTokenObject.mainToken.contractInstance.address,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");case 3:return a=n.sent,r=+a.toString()+1e3,n.next=7,e.approve(t.sSpellTokenObject.mainToken.contractInstance.address,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",{gasLimit:r});case 7:return s=n.sent,n.next=10,s.wait();case 10:return n.sent,n.abrupt("return",!0);case 14:return n.prev=14,n.t0=n["catch"](0),n.abrupt("return",!1);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$store.getters.getPopupData.type,n||e.$emit("close"),e.action=n,t.next=5,e.getBalance();case 5:return t.next=7,e.getSpellRate();case 7:e.tokenRate=t.sent;case 8:case"end":return t.stop()}}),t)})))()},components:{ValueInput:c}},i=o,u=(n("da2d"),n("2877")),f=Object(u["a"])(i,a,r,!1,null,"51cbf79d",null);t["default"]=f.exports},"8d35":function(e,t,n){e.exports=n.p+"img/pixel-two-arrow.2cf78671.svg"},da2d:function(e,t,n){"use strict";n("f53d")},f53d:function(e,t,n){}}]);