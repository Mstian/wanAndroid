(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/system/system"],{"3a80":function(t,n,a){"use strict";a.r(n);var e=a("98fb"),u=a("8f14");for(var o in u)"default"!==o&&function(t){a.d(n,t,function(){return u[t]})}(o);a("db02");var f=a("2877"),i=Object(f["a"])(u["default"],e["a"],e["b"],!1,null,null,null);n["default"]=i.exports},"3ffd":function(t,n,a){},7509:function(t,n,a){"use strict";(function(t){a("5b49"),a("921b");e(a("66fd"));var n=e(a("3a80"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},"8f14":function(t,n,a){"use strict";a.r(n);var e=a("b98f"),u=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=u.a},"98fb":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},u=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return u})},b98f:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{text:"hello",opacity:1,sysList:[]}},onReady:function(){this.loadData()},methods:{toTabList:function(n){var a=JSON.stringify(n);t.navigateTo({url:"../system_tab/system_tab?item="+encodeURIComponent(a)})},loadData:function(){var t=this;this.$ajax(this.$urls._url_system,"","GET",function(n){n.data&&(t.sysList=n.data)})}},onLoad:function(){},onUnload:function(){}};n.default=a}).call(this,a("6e42")["default"])},db02:function(t,n,a){"use strict";var e=a("3ffd"),u=a.n(e);u.a}},[["7509","common/runtime","common/vendor"]]]);