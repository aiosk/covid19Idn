(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ranking"],{"2dd7":function(a,n,t){},4320:function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"rangking"},[a._m(0),a._l(a.cases,(function(n){return t("Card",{key:n,class:["card--"+n],scopedSlots:a._u([{key:"header",fn:function(){return[t("h6",[a._v(a._s(n+" Case Ranking"))])]},proxy:!0},{key:"mainImage",fn:function(){return[t("canvas",{attrs:{id:"RankingBar_"+n.toUpperCase()}})]},proxy:!0},{key:"menu",fn:function(){return[t("a",{staticClass:"download-card",attrs:{title:"download card","aria-label":"download card"},on:{click:a.downloadOnClick}},[t("i",{staticClass:"icon-download-cloud"})]),t("a",{staticClass:"share",attrs:{title:"share","aria-label":"share"},on:{click:a.shareOnClick}},[t("i",{staticClass:"icon-share"})])]},proxy:!0}],null,!0)})})),t("Dialog",{model:{value:a.modelDialog,callback:function(n){a.modelDialog=n},expression:"modelDialog"}},[t(a.componentChart,{tag:"component",attrs:{zone:a.modelChart.zone},model:{value:a.modelChart,callback:function(n){a.modelChart=n},expression:"modelChart"}})],1)],2)},r=[function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"help-text callout warning"},[t("ul",[t("li",[t("strong",[a._v("Long Touch / Hover")]),a._v(" to see case number")]),t("li",[t("strong",[a._v("Touch / Click")]),a._v(" chart bar to see province detail")])])])}],c=t("a34a"),o=t.n(c),s=t("ae8d"),i=t("3f7a"),l=t("a039"),u=t("6afe"),d=t("eafc"),f=t.n(d),h=t("93c6"),v=t.n(h),m=t("b047c"),p=t.n(m),C=t("5492"),g=t.n(C),b=t("0644"),k=t.n(b),_=t("1946");function w(a,n,t,e,r,c,o){try{var s=a[c](o),i=s.value}catch(l){return void t(l)}s.done?n(i):Promise.resolve(i).then(e,r)}function x(a){return function(){var n=this,t=arguments;return new Promise((function(e,r){var c=a.apply(n,t);function o(a){w(c,e,r,o,s,"next",a)}function s(a){w(c,e,r,o,s,"throw",a)}o(void 0)}))}}var I={name:"Ranking",mixins:[l["a"],u["a"]],components:{Card:s["a"],Dialog:i["a"]},data:function(){return{cases:_["a"],chartInstance:g()(_["a"],[null,null,null,null]),modelChart:{zone:null,isDialog:!0},data:g()(_["a"],[k()(_["c"]),k()(_["c"]),k()(_["c"]),k()(_["c"])])}},watch:{"data.confirmed.labels":p()((function(a,n){var t=this;_["a"].forEach((function(a){t.chartInstance[a]&&t.chartInstance[a].update()}))}),500)},created:function(){var a=this;f()(x(o.a.mark((function n(){var t,e,r;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t="https://raw.githubusercontent.com/aiosk/covidn/master/cli/dist/stats/stats.json?_=".concat(Date.now()),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:r=n.sent,r=Object.entries(r).filter((function(a){return"NATIONAL"!=a[0]})),_["a"].forEach((function(n){var t=v()(r,(function(a){var t=a[1];return parseInt(t.total[n])}),"desc");t.forEach((function(t){var e=t[0],r=t[1];a.data[n].datasets[0].data.push(r.total[n]),a.$set(a.data[n].datasets[0],"backgroundColor",_["b"][n]),a.$set(a.data[n].datasets[0],"datalabels",{backgroundColor:_["b"][n]}),a.data[n].labels.push(e.split("_").join(" "))}))}));case 9:case"end":return n.stop()}}),n)}))),9)},mounted:function(){var a=this,n=this;f()((function(){_["a"].forEach((function(e){if(!a.chartInstance[e]){var r=t("b16f"),c=r.initChartRanking;a.chartInstance[e]=c({elementId:"RankingBar_".concat(e.toUpperCase()),data:a.data[e],onClick:function(a,t){if(t.length){var e=t[0]._view.label.replace(/ /g,"_");n.modelChart.zone=e,n.modelDialog.isOpen=!0}}})}}))}),799)},destroyed:function(){var a=this;_["a"].forEach((function(n){a.chartInstance[n]&&a.chartInstance[n].destroy(),a.data[n]=k()(_["c"])}))}},y=I,D=(t("4458"),t("2877")),O=Object(D["a"])(y,e,r,!1,null,null,null);n["default"]=O.exports},4458:function(a,n,t){"use strict";var e=t("61fa"),r=t.n(e);r.a},5492:function(a,n,t){var e=t("32b3"),r=t("d70d");function c(a,n){return r(a||[],n||[],e)}a.exports=c},"61fa":function(a,n,t){},"93c6":function(a,n,t){var e=t("6a5c"),r=t("6747");function c(a,n,t,c){return null==a?[]:(r(n)||(n=null==n?[]:[n]),t=c?void 0:t,r(t)||(t=null==t?[]:[t]),e(a,n,t))}a.exports=c},"9f8a":function(a,n,t){"use strict";var e=t("2dd7"),r=t.n(e);r.a},a039:function(a,n,t){"use strict";var e=t("a59d"),r={components:{ZoneCard:e["a"]},data:function(){return{modelDialog:{isOpen:!1,isCollapse:!0,isLarge:!0},componentChart:null}},watch:{"modelDialog.isOpen":function(a,n){this.componentChart=a?e["a"]:null}}};n["a"]=r},ae8d:function(a,n,t){"use strict";var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"card"},[t("div",{staticClass:"capture"},[t("header",{staticClass:"card-divider"},[a._t("header")],2),t("main",{staticClass:"card-section"},[a._t("main")],2),t("main",{staticClass:"card-image"},[a._t("mainImage")],2)]),t("menu",{staticClass:"card-section"},[a._t("menu")],2)])},r=[],c={name:"Card",props:{value:Object}},o=c,s=(t("9f8a"),t("2877")),i=Object(s["a"])(o,e,r,!1,null,"32ad9b4a",null);n["a"]=i.exports},d70d:function(a,n){function t(a,n,t){var e=-1,r=a.length,c=n.length,o={};while(++e<r){var s=e<c?n[e]:void 0;t(o,a[e],s)}return o}a.exports=t}}]);
//# sourceMappingURL=ranking.7dcc0f37.js.map