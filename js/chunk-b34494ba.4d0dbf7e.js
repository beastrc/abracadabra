(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b34494ba"],{"07a3":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"statistics-block"},[t._l(t.statisticsTemplate,(function(t,e){return o("div",{key:e,staticClass:"item-wrap"},[o("TotalItem",{attrs:{type:t.type,icon:t.icon,amount:t.amount,count:t.count}})],1)})),o("div",{staticClass:"item-wrap cdp-item"},[o("CdpBlock",{attrs:{pools:t.pools}})],1)],2)},a=[],r=(o("d3b7"),o("3ca3"),o("ddb0"),o("4de4"),o("b680"),o("25f0"),function(){return o.e("chunk-1f6b3f9a").then(o.bind(null,"1f40"))}),c=function(){return o.e("chunk-cc098920").then(o.bind(null,"3840"))},s={props:{pools:{type:Array}},data:function(){return{statisticsTemplate:[]}},methods:{updateBorrowStat:function(){var t=this.pools.filter((function(t){return+t.userBorrowPart>0})),e=t.reduce((function(t,e){return t+ +e.userBorrowPart}),0),n={type:"borrow",icon:o("d023"),amount:parseFloat(e).toFixed(4),count:t.length};this.statisticsTemplate.push(n)},updateCollateralStat:function(){var t=this,e=this.pools.filter((function(t){return+t.userCollateralShare>0})),n=e.reduce((function(e,o){var n=t.$ethers.utils.formatUnits(o.token.oracleExchangeRate.toString(),o.token.decimals),a=+o.userCollateralShare/+n;return e+a}),0),a={type:"collateral",icon:o("dfc9"),amount:"$".concat(parseFloat(n).toFixed(4))};this.statisticsTemplate.push(a)}},created:function(){this.updateBorrowStat(),this.updateCollateralStat()},components:{TotalItem:r,CdpBlock:c}},i=s,u=(o("e262"),o("2877")),l=Object(u["a"])(i,n,a,!1,null,"4e27140a",null);e["default"]=l.exports},"3cbc":function(t,e,o){},d023:function(t,e,o){t.exports=o.p+"img/coin.7be19021.svg"},dfc9:function(t,e,o){t.exports=o.p+"img/bottle.444a819c.svg"},e262:function(t,e,o){"use strict";o("3cbc")}}]);