(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-462a5160":"4d473017","chunk-799dcd08":"3681135d"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-462a5160":1,"chunk-799dcd08":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-462a5160":"fba4b302","chunk-799dcd08":"4de1edb5"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("NavigationDrawer"),n("v-content",[n("v-container",{staticClass:"fill-height lime lighten-5 pa-10",attrs:{fluid:""}},[n("router-view"),n("div",[t._v(t._s(t.$store.state.index))]),n("TransitionArrow"),n("Footer")],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticClass:"fixed-center"},[n("v-btn",{staticClass:"mr-5",attrs:{color:"success",text:"",icon:"",height:"80",width:"80"},on:{click:t.backPage}},[n("v-icon",{attrs:{size:"80"}},[t._v("mdi-arrow-left-thick")])],1),n("v-btn",{staticClass:"ml-5",attrs:{color:"success",text:"",icon:"",height:"80",width:"80"},on:{click:t.nextPage}},[n("v-icon",{attrs:{size:"80"}},[t._v("mdi-arrow-right-thick")])],1)],1)},s=[],c={data:function(){return{pages:this.$store.getters.getPages}},methods:{nextPage:function(){this.$store.commit("increment");var t=this.$store.getters.getIndex;t<this.pages.length?(console.log(t),this.$router.push(this.pages[t])):this.$store.commit("decrement")},backPage:function(){this.$store.commit("decrement");var t=this.$store.getters.getIndex;t>-1?(console.log(t),this.$router.push(this.pages[t])):this.$store.commit("increment")},keyAction:function(t){37==t.keyCode?this.backPage():39==t.keyCode&&this.nextPage()}},mounted:function(){window.addEventListener("keydown",this.keyAction)},beforeDestroy:function(){window.removeEventListener("keydown",this.keyAction)}},u=c,l=(n("cc60"),n("2877")),d=n("6544"),p=n.n(d),f=n("8336"),h=n("0e8f"),m=n("132d"),v=Object(l["a"])(u,i,s,!1,null,null,null),g=v.exports;p()(v,{VBtn:f["a"],VFlex:h["a"],VIcon:m["a"]});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.transitionPage(0)}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Top")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v(" mdi-alpha-e-box ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("End")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-car-hatchback")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Move")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{on:{click:function(e){return t.transitionPage(0)}}},[t._v("SlideShow")])],1)],1)},x=[],w={data:function(){return{drawer:null}},methods:{transitionPage:function(t){this.$store.commit("changeIndex",t),this.$router.push(this.$store.state.pages[t])}}},k=w,y=n("40dc"),_=n("5bc1"),T=n("8860"),P=n("da13"),E=n("1800"),V=n("5d23"),$=n("f774"),j=n("2a7f"),C=Object(l["a"])(k,b,x,!1,null,null,null),I=C.exports;p()(C,{VAppBar:y["a"],VAppBarNavIcon:_["a"],VIcon:m["a"],VList:T["a"],VListItem:P["a"],VListItemAction:E["a"],VListItemContent:V["a"],VListItemTitle:V["b"],VNavigationDrawer:$["a"],VToolbarTitle:j["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"indigo",app:""}},[n("span",{staticClass:"white--text"},[t._v("© 2020 takenokoroid")])])},O=[],A={},S=A,B=n("553a"),L=Object(l["a"])(S,N,O,!1,null,null,null),D=L.exports;p()(L,{VFooter:B["a"]});var F={components:{NavigationDrawer:I,Footer:D,TransitionArrow:g},props:{source:String}},W=F,M=n("7496"),U=n("a523"),q=n("a75b"),z=Object(l["a"])(W,a,o,!1,null,null,null),J=z.exports;p()(z,{VApp:M["a"],VContainer:U["a"],VContent:q["a"]});n("d3b7");var X=n("8c4f");r["a"].use(X["a"]);var G=[{path:"/",name:"Start",component:function(){return n.e("chunk-799dcd08").then(n.bind(null,"d504"))}},{path:"/main/:pagename",name:"main",component:function(){return n.e("chunk-462a5160").then(n.bind(null,"d367"))}}],H=new X["a"]({routes:G}),K=H,R=n("f309");n("5363");r["a"].use(R["a"]);var Q=new R["a"]({icons:{iconfont:"mdi"}}),Y=n("2f62");r["a"].use(Y["a"]);var Z=new Y["a"].Store({state:{pages:["/","/main/myprofile","/main/works","/main/IdealImage","/main/userDueTo","/main/engineerDueTo"],index:0,datasets:[{pageNumber:0,textdata:"自己PR"},{pageNumber:1,textdata:"自己紹介",link:n("ac8c"),texts:[{text:"趣味",subText:"釣り ボードゲーム プログラミング"},{text:"好きな言語",subText:"Go Vue.js"},{text:"興味あるサービス",subText:"Firebase Docker"}]},{pageNumber:2,textdata:"開発してきたもの"},{pageNumber:3,textdata:"理想のエンジニア像",texts:[{text:"・携わったWEBサービスで多くの人に良い体験を届けたい",subText:"WEB開発経験からフィードバックの大事さを知った\nユーザーのニーズに答えるサービスを"},{text:"・周りを巻き込み積極的に成長するWEBエンジニア",subText:"流れのはやいWEB業界では成長することは必須\nWEB開発は一人では難しい。チームでの成長が大切"}]},{pageNumber:4,textdata:"良い体験を提供するには",texts:[{text:"ユーザーのニーズにマッチしたサービスの構築",subText:"UXの高いUI\nユーザーの声を分析し、クリティカルな課題解決をしていく"},{text:"可読性の高いコーディング",subText:"フィードバックに対して迅速な対応ができるように\n長く愛されるサービスのためにも保守性の向上"}]},{pageNumber:5,textdata:"なぜ学び、伝播させていくのか",texts:[{text:"WEB業界全体の成長速度を追従・牽引するため",subText:"より良いUXを提供するために優れたコーディング力は必須\nサービスに対して適切な言語を用いる"},{text:"周りを巻き込んで成長していく",subText:"大規模サービスは一人では動かせない\nみんながやりがいを感じられる環境を"}]},{pageNumber:6,textdata:"hogehoge",texts:[{text:"hogehoge",subText:"hogehoge"},{text:"hogehoge",subText:"hogehoge"}]}]},mutations:{increment:function(t){t.index++},decrement:function(t){t.index--},changeIndex:function(t,e){t.index=e}},actions:{},modules:{},getters:{getPages:function(t){return t.pages},getIndex:function(t){return t.index},getDataSets:function(t){return t.datasets}}});r["a"].config.productionTip=!1,new r["a"]({router:K,vuetify:Q,store:Z,render:function(t){return t(J)}}).$mount("#app")},ac8c:function(t,e,n){t.exports=n.p+"img/myImage.654651fc.jpg"},cc60:function(t,e,n){"use strict";var r=n("e834"),a=n.n(r);a.a},e834:function(t,e,n){}});
//# sourceMappingURL=app.552c8404.js.map