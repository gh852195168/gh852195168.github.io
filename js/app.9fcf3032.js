(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},4140:function(e,t,n){"use strict";var r=n("f48f"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],a={},u=a,i=(n("034f"),n("2877")),s=Object(i["a"])(u,o,c,!1,null,null,null),f=s.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"warp"},[r("div",{staticClass:"cont"},[r("img",{staticClass:"code",attrs:{src:n("7ede")}}),r("span",[e._v("复制文字打开微信搜索小程序")]),r("img",{staticClass:"btn",attrs:{src:n("f35f"),"data-clipboard-text":"湖南通信秘书"},on:{click:e.copy}})])])},d=[],b=(n("e7e5"),n("d399")),v=n("b311"),h=n.n(v),y={data:function(){return{}},methods:{copy:function(){var e=new h.a(".btn");e.on("success",(function(t){console.log("复制成功",t),b["a"].success("复制成功"),e.destroy()})),e.on("error",(function(t){b["a"].fail("该浏览器或手机权限不支持复制功能"),e.destroy()}))}}},g=y,m=(n("4140"),Object(i["a"])(g,p,d,!1,null,"0dd286b6",null)),w=m.exports;r["a"].use(l["a"]);var O=[{path:"/",name:"Home",component:w}],j=new l["a"]({mode:"history",base:"/",routes:O}),x=j,_=n("ca95"),P=n.n(_);n("5cfb");r["a"].config.productionTip=!1,r["a"].use(P.a,{name:"v-touch"}),P.a.config.swipe={threshold:100},new r["a"]({router:x,render:function(e){return e(f)}}).$mount("#app")},"7ede":function(e,t,n){e.exports=n.p+"img/code.1c6736fd.jpg"},"85ec":function(e,t,n){},f35f:function(e,t,n){e.exports=n.p+"img/btn.c63fa50f.png"},f48f:function(e,t,n){}});
//# sourceMappingURL=app.9fcf3032.js.map