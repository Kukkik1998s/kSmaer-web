(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d36eb8"],{"0a9a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",staticStyle:{"margin-left":"15%","margin-top":"10%"}},[r("header",[r("h1",[r("strong",[e._v(e._s(e.currentUser.username))]),e._v("'s Profile ")])]),r("br"),r("p",[r("strong",[e._v("Token:")]),e._v(" "+e._s(e.currentUser.accessToken.substring(0,20))+" ... "+e._s(e.currentUser.accessToken.substr(e.currentUser.accessToken.length-20))+" ")]),r("p",[r("strong",[e._v("Id:")]),e._v(" "+e._s(e.currentUser.id)+" ")]),r("p",[r("strong",[e._v("Email:")]),e._v(" "+e._s(e.currentUser.email)+" ")]),r("strong",[e._v("Role:")]),r("ul",e._l(e.currentUser.roles,(function(t,n){return r("li",{key:n},[e._v(e._s(t))])})),0)])},s=[],c={name:"Profile",computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/signin")},metaInfo:{meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}},u=c,i=(r("901b"),r("2877")),o=Object(i["a"])(u,n,s,!1,null,null,null);t["default"]=o.exports},"901b":function(e,t,r){"use strict";r("b794")},b794:function(e,t,r){}}]);
//# sourceMappingURL=chunk-51d36eb8.cb833982.js.map