(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-462a5160"],{"061c":function(t,e,n){"use strict";var r=n("4a28"),a=n.n(r);a.a},"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var r=n("ade3"),a=n("5530"),i=(n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,r){return n[t+Object(o["q"])(r)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},g=u("justify",(function(){return{type:String,default:null,validator:h}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},p=u("alignContent",(function(){return{type:String,default:null,validator:v}})),m={align:Object.keys(f),justify:Object.keys(g),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var r=b[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var y=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f,{justify:{type:String,default:null,validator:h}},g,{alignContent:{type:String,default:null,validator:v}},p),render:function(t,e){var n=e.props,a=e.data,i=e.children,o="";for(var c in n)o+=String(n[c]);var l=y.get(o);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var r=n[t],a=x(e,t,r);a&&l.push(a)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(t,"align-".concat(n.align),n.align),Object(r["a"])(t,"justify-".concat(n.justify),n.justify),Object(r["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),y.set(o,l)}(),t(n.tag,Object(s["a"])(a,{staticClass:"row",class:l}),i)}})},"13ee":function(t,e,n){t.exports=n.p+"img/HoCTools.b616ff54.png"},"3f3b":function(t,e,n){"use strict";var r=n("9677"),a=n.n(r);a.a},"4a28":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"5d04":function(t,e,n){"use strict";var r=n("9285"),a=n.n(r);a.a},"5e89":function(t,e,n){var r=n("861d"),a=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&a(t)===t}},"615b":function(t,e,n){},"62ad":function(t,e,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var r=n("ade3"),a=n("5530"),i=(n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(o["q"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(o["q"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var g=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,i=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=g.get(o);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var r=n[t],a=h(e,t,r);a&&l.push(a)}));var a=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!a||!n.cols},Object(r["a"])(t,"col-".concat(n.cols),n.cols),Object(r["a"])(t,"offset-".concat(n.offset),n.offset),Object(r["a"])(t,"order-".concat(n.order),n.order),Object(r["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),g.set(o,l)}(),t(n.tag,Object(s["a"])(a,{class:l}),i)}})},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),s=n("0366"),o=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,h=n("69f3"),g=h.set,v=h.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,r){o(t,u,e),g(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&c(r,t[l],t,n)})),h=v(e),p=function(t,e,n){var r,a,i=h(t),s=m(t,e);return s?s.value=n:(i.last=s={index:a=f(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=s),r&&(r.next=s),d?i.size++:t.size++,"F"!==a&&(i.index[a]=s)),t},m=function(t,e){var n,r=h(t),a=f(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(u.prototype,{clear:function(){var t=this,e=h(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=h(e),r=m(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=h(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),i(u.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),d&&r(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(t,e,n){var r=e+" Iterator",a=v(e),i=v(r);l(t,e,(function(t,e){g(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),l=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),h=n("d44e"),g=n("7156");t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),m=v?"set":"add",b=a[t],x=b&&b.prototype,y=b,_={},C=function(t){var e=x[t];s(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof b||!(p||x.forEach&&!d((function(){(new b).entries().next()})))))y=n.getConstructor(e,t,v,m),o.REQUIRED=!0;else if(i(t,!0)){var k=new y,j=k[m](p?{}:-0,1)!=k,S=d((function(){k.has(1)})),O=f((function(t){new b(t)})),w=!p&&d((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));O||(y=e((function(e,n){l(e,y,t);var r=g(new b,e,y);return void 0!=n&&c(n,r[m],r,v),r})),y.prototype=x,x.constructor=y),(S||w)&&(C("delete"),C("has"),v&&C("get")),(w||j)&&C(m),p&&x.clear&&delete x.clear}return _[t]=y,r({global:!0,forced:y!=b},_),h(y,t),p||n.setStrong(y,t,v),y}},"6ece":function(t,e,n){},"8ba4":function(t,e,n){var r=n("23e7"),a=n("5e89");r({target:"Number",stat:!0},{isInteger:a})},9285:function(t,e,n){},"93a3":function(t,e,n){t.exports=n.p+"img/portfolio.137de676.png"},9599:function(t,e,n){t.exports=n.p+"img/ioroiFridge.1664fdc7.png"},9677:function(t,e,n){},c83e:function(t,e,n){},cd87:function(t,e,n){"use strict";var r=n("c83e"),a=n.n(r);a.a},d367:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fill-width"},[n("StandardHeader",{attrs:{text:t.parentsText}}),n(t.currentComponent,{tag:"component"})],1)},a=[],i=(n("a9e3"),n("8ba4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("span",{staticClass:"display-4 under pl-5 pr-10 mb-10 mt-10",domProps:{textContent:t._s(t.text)}})])}),s=[],o={props:{text:{type:String,default:"TextTextText"}}},c=o,l=(n("cd87"),n("2877")),u=n("6544"),d=n.n(u),f=n("0fd9"),h=Object(l["a"])(c,i,s,!1,null,null,null),g=h.exports;d()(h,{VRow:f["a"]});var v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"5",align:"center"}},[r("v-img",{staticClass:"inline-flex",attrs:{height:"500",width:"400",alt:"自画像",src:n("ac8c")}})],1),r("v-col",{attrs:{cols:"5"}},[r("v-row",t._l(t.getTexts,(function(e,n){return r("v-col",{key:n,attrs:{cols:"9"}},[r("v-card",{attrs:{dark:"",color:"#607D8B"}},[r("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.text)}}),r("v-card-subtitle",{staticClass:"title",domProps:{textContent:t._s(e.subText)}})],1)],1)})),1)],1)],1)},p=[],m={data:function(){return{dataSets:this.$store.getters.getDataSets,index:this.$store.getters.getIndex}},mounted:function(){var t=this;this.$store.watch((function(){return t.$store.state.index}),(function(){t.index=t.$store.getters.getIndex}))},computed:{getTexts:function(){return this.dataSets[this.index].texts}}},b=m,x=(n("3f3b"),n("0481"),n("4069"),n("5530")),y=(n("615b"),n("10d2")),_=n("2b0e"),C=(n("c7cd"),n("ade3")),k=(n("6ece"),n("0789")),j=n("a9ad"),S=n("fe6c"),O=n("a452"),w=n("7560"),B=n("80d2"),$=n("58df"),V=Object($["a"])(j["a"],Object(S["b"])(["absolute","fixed","top","bottom"]),O["a"],w["a"]),z=V.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(B["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(B["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(C["a"])(t,this.$vuetify.rtl?"right":"left",Object(B["f"])(this.normalizedValue,"%")),Object(C["a"])(t,"width",Object(B["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(x["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?k["b"]:k["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(B["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(B["j"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(C["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),n=e.width;this.internalValue=t.offsetX/n*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(B["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),I=z,T=_["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(I,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),E=n("1c87"),N=Object($["a"])(T,E["a"],y["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(x["a"])({"v-card":!0},E["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},y["a"].options.computed.classes.call(this))},styles:function(){var t=Object(x["a"])({},y["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=T.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}}),P=(Object(B["g"])("v-card__actions"),Object(B["g"])("v-card__subtitle")),D=(Object(B["g"])("v-card__text"),Object(B["g"])("v-card__title")),F=n("62ad"),L=n("adda"),R=Object(l["a"])(b,v,p,!1,null,null,null),H=R.exports;d()(R,{VCard:N,VCardSubtitle:P,VCardTitle:D,VCol:F["a"],VImg:L["a"],VRow:f["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",t._l(t.items,(function(e,r){return n("v-col",{key:r,attrs:{cols:"6"}},[n("v-card",{attrs:{color:e.color,dark:"",href:e.link,target:"_blank"}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",[n("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),n("v-card-subtitle",{staticClass:"text-br title",domProps:{textContent:t._s(e.subtitle)}})],1),n("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[n("v-img",{attrs:{src:e.src}})],1)],1)])],1)})),1)},M=[],W={data:function(){return{items:[{color:"#607D8B",src:n("9599"),title:"IoroiFridge",subtitle:"使用技術：Vue.js+Firebase\n研究室の冷蔵庫を管理する\nはじめて作ったWEBアプリ",link:"https://takenokoroid.github.io/ioroifridge/"},{color:"#607D8B",src:n("13ee"),title:"Heart of Crown点数計算ツール",subtitle:"使用技術：Vue.js\nとあるゲームの点数計算ツール\n現在大規模改修中",link:"https://takenokoroid.github.io/controlhoc/"},{color:"#607D8B",src:n("93a3"),title:"ポートフォリオ",subtitle:"使用技術：Vue.js+Vuetify\n自分のポートフォリオ\nCSSフレームワークの使用により綺麗に仕上がった",link:"https://takenokoroid.github.io/portfolio/#/"}]}}},G=W,J=(n("5d04"),n("8212")),A=Object(l["a"])(G,q,M,!1,null,null,null),K=A.exports;d()(A,{VAvatar:J["a"],VCard:N,VCardSubtitle:P,VCardTitle:D,VCol:F["a"],VImg:L["a"],VRow:f["a"]});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",t._l(t.getTexts,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12"}},[n("dl",[n("dt",{staticClass:"display-1 mb-3",domProps:{textContent:t._s(e.text)}}),n("dd",{staticClass:"text-br ml-10 headline",domProps:{textContent:t._s(e.subText)}})])])})),1)},U=[],X={data:function(){return{dataSets:this.$store.getters.getDataSets,index:this.$store.getters.getIndex}},mounted:function(){var t=this;this.$store.watch((function(){return t.$store.state.index}),(function(){t.index=t.$store.getters.getIndex}))},computed:{getTexts:function(){return this.dataSets[this.index].texts}}},Y=X,Z=(n("d400"),Object(l["a"])(Y,Q,U,!1,null,null,null)),tt=Z.exports;d()(Z,{VCol:F["a"],VRow:f["a"]});var et={components:{StandardHeader:g,StandardContent:H,WorksContent:K,IdealImage:tt},data:function(){return{parentsText:"init-text",index:this.$store.getters.getIndex,data:this.$store.getters.getDataSets,components:["dummydummydummy","StandardContent","WorksContent","IdealImage","IdealImage","IdealImage","IdealImage"]}},created:function(){this.importText()},mounted:function(){var t=this;this.$store.watch((function(){return t.$store.state.index}),(function(){t.index=t.$store.getters.getIndex,t.parentsText=t.data[t.index].textdata}))},computed:{currentComponent:function(){return this.components[this.index]}},methods:{importText:function(){Number.isInteger(this.index)&&(this.parentsText=this.data[this.index].textdata)}}},nt=et,rt=(n("061c"),Object(l["a"])(nt,r,a,!1,null,null,null));e["default"]=rt.exports},d400:function(t,e,n){"use strict";var r=n("ee9b"),a=n.n(r);a.a},ee9b:function(t,e,n){}}]);
//# sourceMappingURL=chunk-462a5160.3c7ec209.js.map