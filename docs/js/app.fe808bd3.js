(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,u=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about",ranking:"ranking",ratio:"ratio","ratio-population":"ratio-population"}[t]||t)+"."+{about:"aadefb7c",ranking:"6b114699",ratio:"d1d05d31","ratio-population":"55b056b2"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={ranking:1,ratio:1,"ratio-population":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({about:"about",ranking:"ranking",ratio:"ratio","ratio-population":"ratio-population"}[t]||t)+"."+{about:"31d6cfe0",ranking:"9a73e689",ratio:"9a73e689","ratio-population":"dbb24caf"}[t]+".css",i=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===i))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],d=l.getAttribute("data-href");if(d===n||d===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete s[t],h.parentNode.removeChild(h),a(r)},h.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(h)})).then((function(){s[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(h);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,a[1](u)}i[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/covidn/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var h=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1946:function(t,e,a){"use strict";a.d(e,"h",(function(){return n})),a.d(e,"g",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"f",(function(){return d}));var n=["NATIONAL","DKI_JAKARTA","JAWA_BARAT","JAWA_TIMUR","JAWA_TENGAH","SULAWESI_SELATAN","BANTEN","NUSA_TENGGARA_BARAT","BALI","PAPUA","KALIMANTAN_SELATAN","SUMATERA_BARAT","SUMATERA_SELATAN","KALIMANTAN_TENGAH","KALIMANTAN_TIMUR","SUMATERA_UTARA","DAERAH_ISTIMEWA_YOGYAKARTA","KALIMANTAN_UTARA","KEPULAUAN_RIAU","KALIMANTAN_BARAT","SULAWESI_TENGGARA","LAMPUNG","SULAWESI_UTARA","SULAWESI_TENGAH","RIAU","PAPUA_BARAT","SULAWESI_BARAT","JAMBI","MALUKU_UTARA","MALUKU","GORONTALO","KEPULAUAN_BANGKA_BELITUNG","ACEH","BENGKULU","NUSA_TENGGARA_TIMUR"],s=["NATIONAL","JAWA_TIMUR","DKI_JAKARTA","SULAWESI_SELATAN","JAWA_TENGAH","JAWA_BARAT","KALIMANTAN_SELATAN","RIAU","KALIMANTAN_BARAT","KALIMANTAN_UTARA","KEPULAUAN_RIAU","SULAWESI_TENGAH","BENGKULU","SULAWESI_UTARA","BANTEN","GORONTALO","MALUKU_UTARA","SUMATERA_UTARA","PAPUA","MALUKU"],i=7,r=[!0,!0,!0,!0,!1,!1,!1,!1,!0,!0,!0,!0],o=["confirmed","recover","death","active"],c={datasets:[{data:[]}],labels:[]},l={confirmed:"#2c347c",recover:"#3c928c",death:"#ec6f58",active:"#c6ac42"},d=!1},"1c9c":function(t,e){t.exports=domtoimage},2253:function(t,e,a){},3291:function(t,e,a){},"4c5c":function(t,e,a){"use strict";var n=a("2253"),s=a.n(n);s.a},"4fd6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-container",attrs:{id:"app"}},[a("ul",{staticClass:"menu vertical medium-horizontal",attrs:{id:"nav"}},[t._m(0),a("router-link",{attrs:{to:"/daily"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,s=(e.route,e.navigate),i=e.isActive,r=e.isExactActive;return[a("li",{class:[i&&"is-active",r&&"is-active"]},[a("a",{attrs:{href:n},on:{click:s}},[t._v("Daily")])])]}}])}),a("router-link",{attrs:{to:"/ranking"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,s=(e.route,e.navigate),i=e.isActive,r=e.isExactActive;return[a("li",{class:[i&&"is-active",r&&"is-active"]},[a("a",{attrs:{href:n},on:{click:s}},[t._v("Ranking")])])]}}])}),a("router-link",{attrs:{to:"/ratio"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,s=(e.route,e.navigate),i=e.isActive,r=e.isExactActive;return[a("li",{class:[i&&"is-active",r&&"is-active"]},[a("a",{attrs:{href:n},on:{click:s}},[t._v("Ratio")])])]}}])}),a("router-link",{attrs:{to:"/ratio-population"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,s=(e.route,e.navigate),i=e.isActive,r=e.isExactActive;return[a("li",{class:[i&&"is-active",r&&"is-active"]},[a("a",{attrs:{href:n},on:{click:s}},[t._v("Population Ratio")])])]}}])}),a("router-link",{attrs:{to:"/about"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,s=(e.route,e.navigate),i=e.isActive,r=e.isExactActive;return[a("li",{class:[i&&"is-active",r&&"is-active"]},[a("a",{attrs:{href:n},on:{click:s}},[t._v("About")])])]}}])})],1),t._m(1),a("br"),a("router-view"),a("button",{staticClass:"button small",attrs:{id:"top"},on:{click:t.topBtnOnClick}},[a("i",{staticClass:"icon-up-circled",attrs:{title:"Scroll to top"}})])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-text"},[a("a",{attrs:{href:"./"}},[t._v("COVIDN")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"callout warning hide-for-medium",attrs:{id:"chartHelpText"}},[a("ul",{staticClass:"help-text"},[a("li",[t._v("For best results please view in "),a("strong",[t._v("landscape")]),t._v(" mode")])])])}],r={name:"App",methods:{topBtnOnClick:function(t){document.querySelector("#nav").scrollIntoView({behavior:"smooth"})}},mounted:function(){},destroyed:function(){}},o=r,c=(a("5c0b"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,null,null),d=l.exports,u=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"daily"},[a("h3",[t._v("Daily Cases per Provinces")]),a("DailyForm",{model:{value:t.myModel,callback:function(e){t.myModel=e},expression:"myModel"}}),a("div",{staticClass:"grid-x large-up-2",attrs:{"aria-describedby":"chartHelpText"}},[t._l(t.myModel.selectedZones,(function(e){return[a("div",{key:e,staticClass:"cell",class:[{"width-100":1==t.myModel.selectedZones.length},"chart-item"],attrs:{id:"CellChart_"+e}},[a(t.componentZoneCard[e],{key:e,tag:"component",attrs:{zone:e},model:{value:t.myModel,callback:function(e){t.myModel=e},expression:"myModel"}})],1)]}))],2)],1)},v=[],p=a("a34a"),f=a.n(p),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"daily-form callout secondary"},[a("div",{staticClass:"grid-x zones"},[t._m(0),a("div",{staticClass:"cell small-auto medium-auto"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedZones,expression:"selectedZones"}],attrs:{id:"zones",name:"zones",multiple:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedZones=e.target.multiple?a:a[0]}}},t._l(t.zones,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e.split("_").join(" ")))])})),0),a("menu",{staticClass:"text-right"},[a("a",{on:{click:t.selectAllOnClick}},[t._v("Select All")]),a("a",{on:{click:t.deselectAllOnClick}},[t._v("Deselect All")])]),a("p",{staticClass:"help-text"},[t._v("Too many charts, i don't like to scroll, i want to select some chart")])])]),a("div",{staticClass:"grid-x"},[t._m(1),a("div",{staticClass:"cell auto"},[a("div",{staticClass:"switch large"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.showLegend,expression:"showLegend"}],staticClass:"switch-input",attrs:{id:"showLegend",type:"checkbox",name:"showLegend"},domProps:{checked:Array.isArray(t.showLegend)?t._i(t.showLegend,null)>-1:t.showLegend},on:{change:function(e){var a=t.showLegend,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.showLegend=a.concat([i])):r>-1&&(t.showLegend=a.slice(0,r).concat(a.slice(r+1)))}else t.showLegend=s}}}),t._m(2)])])]),a("div",{staticClass:"grid-x"},[t._m(3),a("div",{staticClass:"cell auto"},[a("div",{staticClass:"switch large"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.showPeriods,expression:"showPeriods"}],staticClass:"switch-input",attrs:{id:"showPeriods",type:"checkbox",name:"showPeriods"},domProps:{checked:Array.isArray(t.showPeriods)?t._i(t.showPeriods,null)>-1:t.showPeriods},on:{change:function(e){var a=t.showPeriods,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.showPeriods=a.concat([i])):r>-1&&(t.showPeriods=a.slice(0,r).concat(a.slice(r+1)))}else t.showPeriods=s}}}),t._m(4)])])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell small-12 medium-2"},[a("label",{attrs:{for:"zones"}},[t._v("Zone")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell small-4 medium-2"},[a("label",{attrs:{for:"showLegend"}},[t._v("Show Legend")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"switch-paddle",attrs:{for:"showLegend"}},[a("span",{staticClass:"show-for-sr"},[t._v("Show Legend?")]),a("span",{staticClass:"switch-active",attrs:{"aria-hidden":"true"}},[t._v("Yes")]),a("span",{staticClass:"switch-inactive",attrs:{"aria-hidden":"true"}},[t._v("No")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell small-4 medium-2"},[a("label",{attrs:{for:"showPeriods"}},[t._v("Show Periods")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"switch-paddle",attrs:{for:"showPeriods"}},[a("span",{staticClass:"show-for-sr"},[t._v("Show Periods?")]),a("span",{staticClass:"switch-active",attrs:{"aria-hidden":"true"}},[t._v("Yes")]),a("span",{staticClass:"switch-inactive",attrs:{"aria-hidden":"true"}},[t._v("No")])])}],g=a("0644"),_=a.n(g),y=a("9424"),C=a("1946"),b={name:"DailyForm",mixins:[y["a"]],props:{value:Object},computed:{zones:function(){return this.value.zones},periods:{get:function(){return this.value.periods?this.value.periods:C["e"]},set:function(t){this.emitModel({periods:t})}},selectedZones:{get:function(){return this.value.selectedZones},set:function(t){this.emitModel({selectedZones:t})}},showLegend:{get:function(){return this.value.showLegend?this.value.showLegend:C["f"]},set:function(t){this.emitModel({showLegend:t})}},showPeriods:{get:function(){return this.value.showPeriods?this.value.showPeriods:C["f"]},set:function(t){this.emitModel({showPeriods:t})}}},watch:{periods:function(t,e){this.updateQuery("periods",t,C["e"])},selectedZones:function(t,e){this.updateQuery("zones",t,C["g"])}},methods:{selectAllOnClick:function(t){var e=t.target.closest(".cell").querySelector("select");e.querySelectorAll("option").forEach((function(t){t.selected=!0})),e.dispatchEvent(new Event("change"))},deselectAllOnClick:function(t){var e=t.target.closest(".cell").querySelector("select");e.querySelectorAll("option:not([value='NATIONAL'])").forEach((function(t){t.selected=!1})),e.dispatchEvent(new Event("change"))}},created:function(){var t=this.$route.query.periods;t&&(this.periods=t)}},w=b,k=(a("bbfb"),Object(c["a"])(w,m,A,!1,null,"6fb6c162",null)),x=k.exports,L=a("a59d"),S=a("6afe"),E=a("eafc"),M=a.n(E);function T(t,e,a,n,s,i,r){try{var o=t[i](r),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(n,s)}function N(t){return function(){var e=this,a=arguments;return new Promise((function(n,s){var i=t.apply(e,a);function r(t){T(i,n,s,r,o,"next",t)}function o(t){T(i,n,s,r,o,"throw",t)}r(void 0)}))}}var P={name:"Daily",mixins:[S["a"],y["a"]],components:{DailyForm:x,ZoneCard:L["a"]},data:function(){return{lazyLoadCanvas:null,componentZoneCard:{},myModel:{periods:null,zones:C["h"],selectedZones:_()(C["g"]),hiddenDatasets:null,showLegend:null,showPeriods:null}}},watch:{componentZoneCard:function(t,e){var a=this;M()((function(){a.lazyLoadCanvas&&a.lazyLoadCanvas.update()}),9)},"myModel.selectedZones":function(){var t=N(f.a.mark((function t(e,a){var n=this;return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:M()((function(){n.lazyLoadCanvas&&n.lazyLoadCanvas.update()}),9);case 1:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()},created:function(){var t=this.$route.query.zones;t&&(t=t.split("+"),this.myModel.selectedZones=t)},mounted:function(){var t=this;M()((function(){if(!t.lazyLoadCanvas){var e=a("e249");t.lazyLoadCanvas=new e({elements_selector:".chart-item",unobserve_entered:!0,callback_enter:function(e){var a=e.id.split("_").slice(1).join("_");t.$set(t.componentZoneCard,a,L["a"])}})}}),299)},destroyed:function(){this.lazyLoadCanvas.destroy(),this.$set(this.myModel,"periods",null),this.$set(this.myModel,"selectedZones",_()(C["g"])),this.$set(this.myModel,"hiddenDatasets",null)}},I=P,O=(a("dc6c"),Object(c["a"])(I,h,v,!1,null,null,null)),U=O.exports;n["a"].use(u["a"]);var D=[{path:"/",name:"Home",component:U},{path:"/daily",name:"Daily",component:U},{path:"/ranking",name:"Ranking",component:function(){return a.e("ranking").then(a.bind(null,"4320"))}},{path:"/ratio",name:"Ratio",component:function(){return a.e("ratio").then(a.bind(null,"42a7"))}},{path:"/ratio-population",name:"RatioPopulation",component:function(){return a.e("ratio-population").then(a.bind(null,"91e5"))}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],R=new u["a"]({routes:D}),j=R;n["a"].config.productionTip=!1,new n["a"]({router:j,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"65a6":function(t,e,a){"use strict";var n=a("3291"),s=a.n(n);s.a},"66c0":function(t,e){t.exports=Chart},"6afe":function(t,e,a){"use strict";var n=a("a34a"),s=a.n(n);function i(t,e,a,n,s,i,r){try{var o=t[i](r),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(n,s)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(n,s){var r=t.apply(e,a);function o(t){i(r,n,s,o,c,"next",t)}function c(t){i(r,n,s,o,c,"throw",t)}o(void 0)}))}}var o={methods:{downloadOnClick:function(t){var e=a("1c9c"),n=t.target.closest(".card"),i=n.querySelector("h4,h5,h6"),o="".concat(i.innerText.replace(/ /g,"_"),".jpeg");r(s.a.mark((function t(){var a,i;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.toJpeg(n.querySelector(".capture"),{quality:.95,filter:function(t){return"MENU"!==t.tagName}});case 2:a=t.sent,i=document.createElement("a"),i.href=a,i.download=o,i.click();case 7:case"end":return t.stop()}}),t)})))()}}};e["a"]=o},9424:function(t,e,a){"use strict";var n=a("a34a"),s=a.n(n),i=a("63ea"),r=a.n(i),o=a("6747"),c=a.n(o),l=a("6679"),d=a.n(l),u=a("e2a0"),h=a.n(u),v=a("c707"),p=a.n(v);function f(t,e,a,n,s,i,r){try{var o=t[i](r),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(n,s)}function m(t){return function(){var e=this,a=arguments;return new Promise((function(n,s){var i=t.apply(e,a);function r(t){f(i,n,s,r,o,"next",t)}function o(t){f(i,n,s,r,o,"throw",t)}r(void 0)}))}}function A(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?A(Object(a),!0).forEach((function(e){_(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function _(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var y={methods:{emitModel:function(t){var e=g(g({},this.value),t);this.$emit("input",e)},updateQuery:function(){var t=m(s.a.mark((function t(e,a,n){var i;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=g({},this.$route.query),delete i[e],c()(a)?d()(a[0])?r()(a,n)||(i[e]=a.map((function(t){return t?1:0})).join("")):h()(a[0])?a.length&&!r()(p()(a),p()(n))&&(i[e]=a.join("+")):i[e]=a.join("+"):a!=n&&(d()(a)?i[e]=a?1:0:i[e]=a),t.prev=3,t.next=6,this.$router.push({query:i});case 6:t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](3);case 10:case"end":return t.stop()}}),t,this,[[3,8]])})));function e(e,a,n){return t.apply(this,arguments)}return e}()}};e["a"]=y},"9c0c":function(t,e,a){},a59d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zone-card card",attrs:{"aria-describedby":"chartHelpText"}},[a("div",{staticClass:"capture"},[a("div",{staticClass:"card-divider header"},[a("div",{staticClass:"title"},[a("h6",[t._v(t._s(("Daily "+t.zone.split("_").join(" ")).toUpperCase()))])]),t.value.isDialog?t._e():a("menu",[a("a",{staticClass:"fullscreen show-for-large",on:{click:t.onClickFullscreen}},[a("i",{staticClass:"icon-window-maximize",attrs:{title:"resize fullscreen"}})])])]),a("div",{staticClass:"card-image stats"},[a(t.componentStats,{tag:"component",model:{value:t.myStatsModel,callback:function(e){t.myStatsModel=e},expression:"myStatsModel"}})],1),a("div",{staticClass:"card-image"},[t.showLegend?a("div",{staticClass:"legend grid-x small-up-2 large-up-4",domProps:{innerHTML:t._s(t.legendHTML)},on:{click:t.legendOnClick}}):t._e(),t.showLegend?a("div",{staticClass:"help-text text-right"},[t._m(0)]):t._e(),a("canvas",{attrs:{id:"Chart_"+t.zone}})])]),a("div",{staticClass:"card-section"},[a("menu",{staticClass:"clearfix"},[a("div",{staticClass:"float-left"},[t.showPeriods?a("div",{staticClass:"periods"},[a("label",[t._v("Periods"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.periods,expression:"periods"}],attrs:{id:"periods_"+t.zone,type:"number"},domProps:{value:t.periods},on:{input:function(e){e.target.composing||(t.periods=e.target.value)}}})])]):t._e()]),a("div",{staticClass:"float-right"},[a("a",{staticClass:"download-table",attrs:{rel:"noopener",href:"https://raw.githubusercontent.com/aiosk/covidn/master/cli/dist/csv/"+this.zone+".csv",target:"_blank"}},[a("i",{staticClass:"icon-table",attrs:{title:"download table"}})]),a("a",{staticClass:"download-card",on:{click:t.downloadOnClick}},[a("i",{staticClass:"icon-download-cloud",attrs:{title:"download card"}})])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("strong",{staticClass:"show-for-large"},[t._v("Touch / Click")]),t._v(" legend item to toggle chart line")])}],i=a("a34a"),r=a.n(i),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-chart-stats"},[t.stats.population?a("div",{staticClass:"grid-x small-up-2 hide-for-medium"},[a("div",{staticClass:"cell"},[a("div",{staticClass:"card population"},[a("div",{staticClass:"card-section"},[a("h6",[t._v("Population")]),a("div",{staticClass:"total"},[t._v(t._s(t.numberWithCommas(t.stats.population)))])])])]),a("div",{staticClass:"cell"},[a("div",{staticClass:"card confirmed"},[a("div",{staticClass:"card-section"},[a("h6",[t._v("Confirmed")]),a("div",{staticClass:"total"},[t._v(t._s(t.numberWithCommas(t.stats.total.confirmed))),a("sup",[t._v(t._s(t.plusMinusStr(t.stats.daily.confirmed)))])])])])])]):t._e(),a("div",{staticClass:"grid-x",class:[{"small-up-2":!t.stats.population},{"medium-up-4":!t.stats.population},{"small-up-3":!!t.stats.population},{"medium-up-5":!!t.stats.population}]},[t.stats.population?a("div",{staticClass:"cell show-for-medium"},[a("div",{staticClass:"card population"},[a("div",{staticClass:"card-section"},[a("h6",[t._v("Population")]),a("div",{staticClass:"total"},[t._v(t._s(t.numberWithCommas(t.stats.population)))])])])]):t._e(),a("div",{staticClass:"cell show-for-medium"},[a("div",{staticClass:"card confirmed"},[a("div",{staticClass:"card-section"},[a("h6",[t._v("Confirmed")]),a("div",{staticClass:"total"},[t._v(t._s(t.numberWithCommas(t.stats.total.confirmed))),a("sup",[t._v(t._s(t.plusMinusStr(t.stats.daily.confirmed)))])])])])]),t.stats.population?t._e():a("div",{staticClass:"cell hide-for-medium"},[a("div",{staticClass:"card confirmed"},[a("div",{staticClass:"card-section"},[a("h6",[t._v("Confirmed")]),a("div",{staticClass:"total"},[t._v(t._s(t.numberWithCommas(t.stats.total.confirmed))),a("sup",[t._v(t._s(t.plusMinusStr(t.stats.daily.confirmed)))])])])])]),a("div",{staticClass:"cell"},[a("div",{staticClass:"card recover"},[a("div",{staticClass:"card-section"},[a("h6",[t._v("Recover")]),a("div",{staticClass:"total"},[t._v(t._s(t.numberWithCommas(t.stats.total.recover))),a("sup",[t._v(t._s(t.plusMinusStr(t.stats.daily.recover)))])])])])]),a("div",{staticClass:"cell"},[a("div",{staticClass:"card death"},[a("div",{staticClass:"card-section"},[a("h6",[t._v("Death")]),a("div",{staticClass:"total"},[t._v(t._s(t.numberWithCommas(t.stats.total.death))),a("sup",[t._v(t._s(t.plusMinusStr(t.stats.daily.death)))])])])])]),a("div",{staticClass:"cell"},[a("div",{staticClass:"card active"},[a("div",{staticClass:"card-section"},[a("h6",[t._v("Active")]),a("div",{staticClass:"total"},[t._v(t._s(t.numberWithCommas(t.stats.total.active))),a("sup",[t._v(t._s(t.plusMinusStr(t.stats.daily.active)))])])])])])]),a("div",{staticClass:"help-text text-right"},[t._v("Last Update: "+t._s(t.stats.lastUpdate))])])},c=[],l=(a("eafc"),a("13ea"),{name:"ZoneStats",props:{value:Object},computed:{stats:function(){return this.value.stats},zone:function(){return this.value.zone}},watch:{},methods:{moolahRound:function(t){return Math.abs(Number(t))>=1e9?Math.round(Math.abs(Number(t))/1e9)+"B":Math.abs(Number(t))>=1e6?Math.round(Math.abs(Number(t))/1e6)+"M":Math.abs(Number(t))>=1e3?Math.round(Math.abs(Number(t))/1e3)+"K":Math.abs(Number(t))},numberWithCommas:function(t){return null===t||void 0===t?void 0:t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},plusMinusStr:function(t){return 0==t?"":"(".concat(t>0?"+".concat(t):t,")")}}}),d=l,u=(a("4c5c"),a("2877")),h=Object(u["a"])(d,o,c,!1,null,"a9d6e608",null),v=h.exports,p=a("6afe"),f=a("9424"),m=a("0644"),A=a.n(m),g=a("1946");function _(t,e,a,n,s,i,r){try{var o=t[i](r),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(n,s)}function y(t){return function(){var e=this,a=arguments;return new Promise((function(n,s){var i=t.apply(e,a);function r(t){_(i,n,s,r,o,"next",t)}function o(t){_(i,n,s,r,o,"throw",t)}r(void 0)}))}}function C(t){return x(t)||k(t)||w(t)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(t,e){if(t){if("string"===typeof t)return L(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?L(t,e):void 0}}function k(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function x(t){if(Array.isArray(t))return L(t)}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var S=!1,E={lastUpdate:null,total:{},daily:{}},M={name:"ZoneCard",mixins:[p["a"],f["a"]],components:{ZoneStats:v},props:{zone:String,value:Object},computed:{myStatsModel:function(){return{zone:this.zone,stats:this.stats}},population:function(){return this.value.population},periods:{get:function(){return this.value.periods?this.value.periods:g["e"]},set:function(t){this.emitModel({periods:t})}},hiddenDatasets:{get:function(){return this.value.hiddenDatasets?this.value.hiddenDatasets:g["d"]},set:function(t){this.emitModel({hiddenDatasets:t})}},showLegend:function(){return this.value.showLegend?this.value.showLegend:g["f"]},showPeriods:function(){return this.value.showPeriods?this.value.showPeriods:S}},watch:{periods:function(t,e){this.updateChartData()},hiddenDatasets:function(t,e){this.updateChartHiddenDatasets(),this.updateQuery("hidden",t,g["d"])}},data:function(){return{chartInstance:null,legendHTML:null,stats:A()(E),componentStats:null,data:A()(g["c"])}},methods:{onClickFullscreen:function(t){t.target.closest(".cell").classList.toggle("width-100");var e=t.target.closest("menu").querySelector(".fullscreen i");e.classList.toggle("icon-window-maximize"),e.classList.toggle("icon-window-restore")},legendOnClick:function(t){var e=t.target.closest(".item");if(e){var a=t.target.closest(".legend");"none"==t.target.style.textDecoration?t.target.style.textDecoration="line-through":t.target.style.textDecoration="none";var n=C(a.querySelectorAll(".text")).map((function(t){return"none"!=t.style.textDecoration}));this.hiddenDatasets=n}},updateChartData:function(){var t=this;y(r.a.mark((function e(){var a,n,s,i,o,c,l;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="https://raw.githubusercontent.com/aiosk/covidn/master/cli/dist/chartjs/".concat(t.periods,"/").concat(t.zone,".json?_=").concat(Date.now()),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,t.$set(t.data,"datasets",s.datasets),t.$set(t.data,"labels",s.labels),[4,5,6,7].forEach((function(e){t.$set(t.data.datasets[e],"spanGaps",!1),t.data.datasets[e].data.forEach((function(a,n){a||t.$set(t.data.datasets[e].data,n,NaN)}))})),i=0,o=!1,c=s.datasets[4].data.length;while(!o)i++,s.datasets[0].data[c-i]&&(o=!0);l=c-i,t.$set(t.stats,"population",t.population),t.$set(t.stats,"lastUpdate",s.labels[c-i]),t.$set(t.stats,"total",{confirmed:s.datasets[4].data[l],recover:s.datasets[5].data[l],death:s.datasets[6].data[l],active:s.datasets[7].data[l]}),t.$set(t.stats,"daily",{confirmed:s.datasets[0].data[l],recover:s.datasets[1].data[l],death:s.datasets[2].data[l],active:s.datasets[3].data[l]}),t.updateChartHiddenDatasets();case 20:case"end":return e.stop()}}),e)})))()},updateChartHiddenDatasets:function(){var t=this;this.chartInstance&&this.hiddenDatasets.length&&(this.hiddenDatasets.forEach((function(e,a){if(t.chartInstance.data.datasets.length){if(!t.chartInstance.data.datasets[a])return;t.chartInstance.data.datasets[a].hidden=e}})),this.chartInstance.update(),this.showLegend&&(this.legendHTML=this.chartInstance.generateLegend()))}},created:function(){var t=this.$route.query,e=t.hidden,a=t.periods;e&&(e=e.split("").map((function(t){return"1"==t})),this.hiddenDatasets=e),a&&(this.periods=a),this.updateChartData()},mounted:function(){if(!this.chartInstance){var t=a("b16f"),e=t.initChartDaily;this.chartInstance=e({zone:this.zone,data:this.data})}this.componentStats=v},destroyed:function(){this.data=A()(g["c"]),this.componentStats=null,this.stats=A()(E),this.chartInstance&&(this.chartInstance.destroy(),this.chartInstance=null)}},T=M,N=(a("65a6"),Object(u["a"])(T,n,s,!1,null,"e4007a8a",null));e["a"]=N.exports},b16f:function(t,e,a){"use strict";a.r(e),a.d(e,"initChartDaily",(function(){return r})),a.d(e,"initChartRanking",(function(){return o}));var n=a("66c0"),s=new Image;s.src="img/watermark2.png";var i={image:s,x:0,y:0,opacity:1,alignX:"middle",alignY:"middle",position:"front"},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{zone:null,data:null},e=new n("Chart_".concat(t.zone),{type:"line",data:t.data,options:{tooltips:{mode:"index",intersect:!1,callbacks:{labelColor:function(t,e){t.datasetIndex;return{borderColor:e.data.datasets[t.datasetIndex].borderColor,backgroundColor:e.data.datasets[t.datasetIndex].borderColor}},label:function(t,e){var a=t.datasetIndex%4,n=e.datasets[t.datasetIndex].label||"",s=e.datasets[t.datasetIndex].data[t.index],i=e.datasets[a].data[t.index],r=0==i?"":i>0?"(+".concat(i,")"):"(".concat(i,")");return"".concat(n,": ").concat(s," ").concat(r)}}},legend:{display:!1},legendCallback:function(t){var e=t.legend.legendItems.map((function(t){return"<div class='cell item'>\n  <div class='grid-x'>\n    <div class='cell small-2'>\n      <span class='color' style=\"background-color:".concat(t.fillStyle,";border:.2rem solid ").concat(t.strokeStyle,";\"></span>\n    </div>\n    <div class='cell small-10'>\n      <span class='text' style=\"text-decoration:").concat(t.hidden?"line-through":"none",';">').concat(t.text,"</span>\n    </div>\n  </div>\n</div>")})).join("\n");return e},elements:{line:{tension:.2},point:{radius:2}},scales:{xAxes:[{gridLines:{display:!1},ticks:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{display:!1}}]},animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,watermark:i}});return e},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{elementId:null,data:null,onClick:null},e=new n(t.elementId,{type:"horizontalBar",data:t.data,options:{onClick:t.onClick,maintainAspectRatio:!1,legend:{display:!1},animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,watermark:i,scales:{xAxes:[{gridLines:{display:!1},ticks:{display:!1,min:0}}],yAxes:[{gridLines:{display:!1},ticks:{}}]},tooltips:{}}});return e}},bbfb:function(t,e,a){"use strict";var n=a("e8b8"),s=a.n(n);s.a},dc6c:function(t,e,a){"use strict";var n=a("4fd6"),s=a.n(n);s.a},e249:function(t,e){t.exports=LazyLoad},e8b8:function(t,e,a){}});
//# sourceMappingURL=app.fe808bd3.js.map