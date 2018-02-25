!(function(t,e){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],e);else{n=e("object"==typeof exports?require("vue"):t.Vue);for(r in n)("object"==typeof exports?exports:t)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(t){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=503)})({0:function(t,e){t.exports=function(t,e,n,r,o,i){var u,a,s,c,l,d=t=t||{},f=typeof t.default;return"object"!==f&&"function"!==f||(u=t,d=t.default),a="function"==typeof d?d.options:d,e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o),i?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},a._ssrRegister=s):r&&(s=r),s&&(c=a.functional,l=c?a.render:a.beforeCreate,c?(a._injectStyles=s,a.render=function(t,e){return s.call(e),l(t,e)}):a.beforeCreate=l?[].concat(l,s):[s]),{esModule:u,exports:d,options:a}}},1:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o,i,u,a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var t=i.default.enabled,e=i.default.getThemeName,n=i.default.getAncestorTheme;return t&&!1!==this.mdTheme?e(this.mdTheme||n(this)):null}}};return(0,a.default)(e,t)},o=n(4),i=r(o),u=n(6),a=r(u)},10:function(t,e,n){"use strict";var r,o;Object.defineProperty(e,"__esModule",{value:!0}),r=n(2),o=(function(t){return t&&t.__esModule?t:{default:t}})(r),e.default=function(t,e){return{validator:function(n){return!!e.includes(n)||(o.default.util.warn("The "+t+" prop is invalid. Given value: "+n+". Available options: "+e.join(", ")+".",void 0),!1)}}}},11:function(t,e){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},114:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i,u,a,s,c,l,d;Object.defineProperty(e,"__esModule",{value:!0}),i=Object.assign||function(t){var e,n,r;for(e=1;e<arguments.length;e++){n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n(1),a=r(u),s=n(10),c=r(s),l=n(16),d=r(l),e.default=new a.default({name:"MdBottomBar",components:{MdRipple:d.default},props:{mdSyncRoute:Boolean,mdActiveItem:[String,Number],mdType:i({type:String,default:"fixed"},(0,c.default)("md-type",["fixed","shift"]))},data:function(){return{MdBottomBar:{mouseEvent:null,activeItem:null,items:{}}}},provide:function(){return{MdBottomBar:this.MdBottomBar}},computed:{activeItem:function(){return this.MdBottomBar.activeItem},barClasses:function(){return o({},"md-type-"+this.mdType,!0)}},watch:{activeItem:function(){this.$emit("md-changed",this.activeItem)}},methods:{setupWatchers:function(){this.mdSyncRoute&&this.$watch("$route",{deep:!0,handler:function(){this.mdSyncRoute&&this.setActiveItemByRoute()}})},hasActiveItem:function(){return this.MdBottomBar.activeItem||this.mdActiveItem},getItemsAndKeys:function(){var t=this.MdBottomBar.items;return{items:t,keys:Object.keys(t)}},setActiveItemByIndex:function(t){var e=this.getItemsAndKeys(),n=e.keys;this.mdActiveItem?this.MdBottomBar.activeItem=this.mdActiveItem:this.MdBottomBar.activeItem=n[t]},setActiveItemByRoute:function(){var t=this,e=this.getItemsAndKeys(),n=e.items,r=e.keys,o=null;this.$router&&r.forEach((function(e,r){var i=n[e],u=i.props.to;u&&u===t.$route.path&&(o=r)})),this.hasActiveItem()?r[o]&&(this.MdBottomBar.activeItem=r[o]):r[o]?this.MdBottomBar.activeItem=r[o]:this.MdBottomBar.activeItem=r[0]}},created:function(){this.MdBottomBar.type=this.mdType},mounted:function(){var t=this;this.$nextTick().then((function(){t.mdSyncRoute?t.setActiveItemByRoute():t.setActiveItemByIndex(0),window.setTimeout((function(){t.setupWatchers()}),100)}))}})},115:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o,i,u,a,s,c,l,d;Object.defineProperty(e,"__esModule",{value:!0}),o=Object.assign||function(t){var e,n,r;for(e=1;e<arguments.length;e++){n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(41),u=r(i),a=n(9),s=r(a),c=n(27),l=r(c),d=["id","mdLabel","mdIcon","mdDisabled"],e.default={name:"MdBottomBarItem",mixins:[u.default],props:{id:{type:String,default:function(){return"md-bottom-bar-item-"+(0,s.default)()}},to:null,mdLabel:String,mdIcon:String,mdDisabled:Boolean},inject:["MdBottomBar"],watch:{$props:{deep:!0,handler:function(){this.setItemData()}},$attrs:{deep:!0,handler:function(){this.setItemData()}}},computed:{itemClasses:function(){return{"md-active":this.id===this.MdBottomBar.activeItem}},attrs:function(){var t=this,e=o({},this.$attrs);return Object.keys(this.$options.propsData).forEach((function(n){d.includes(n)||(e[n]=t[n])})),e}},methods:{getPropValues:function(){var t=this,e=Object.keys(this.$options.props),n={};return e.forEach((function(e){d.includes(e)||(t[e]?n[e]=t[e]:t.$attrs&&t.$attrs.hasOwnProperty(e)&&(n[e]=!e||t.$attrs[e]))})),n},setItemData:function(){this.$set(this.MdBottomBar.items,this.id,{disabled:this.mdDisabled,options:this.mdTemplateOptions,props:this.getPropValues()})},setActiveItem:function(t){this.MdBottomBar.activeItem=this.id,"shift"===this.MdBottomBar.type&&(this.MdBottomBar.mouseEvent=t)}},beforeCreate:function(){if(this.$router&&this.$options.propsData.to){var t=(0,l.default)(this,this.$options.props);this.$options.props=t}},created:function(){this.setItemData()},beforeDestroy:function(){this.$delete(this.MdBottomBar.items,this.id)}}},13:function(t,e,n){(function(e){(function(){var n,r,o,i,u,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:void 0!==e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-u)/1e6},r=e.hrtime,n=function(){var t;return t=r(),1e9*t[0]+t[1]},i=n(),a=1e9*e.uptime(),u=i-a):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(e,n(14))},14:function(t,e){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(d===clearTimeout)return clearTimeout(t);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function u(){m&&p&&(m=!1,p.length?f=p.concat(f):h=-1,f.length&&a())}function a(){var t,e;if(!m){for(t=o(u),m=!0,e=f.length;e;){for(p=f,f=[];++h<e;)p&&p[h].run();h=-1,e=f.length}p=null,m=!1,i(t)}}function s(t,e){this.fun=t,this.array=e}function c(){}var l,d,f,m,p,h,v=t.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(t){d=r}})(),f=[],m=!1,h=-1,v.nextTick=function(t){var e,n=Array(arguments.length-1);if(arguments.length>1)for(e=1;e<arguments.length;e++)n[e-1]=arguments[e];f.push(new s(t,n)),1!==f.length||m||o(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=c,v.addListener=c,v.once=c,v.off=c,v.removeListener=c,v.removeAllListeners=c,v.emit=c,v.prependListener=c,v.prependOnceListener=c,v.listeners=function(t){return[]},v.binding=function(t){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(t){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},16:function(t,e,n){"use strict";function r(t){n(22)}var o,i,u,a,s,c,l,d,f,m;Object.defineProperty(e,"__esModule",{value:!0}),o=n(17),i=n.n(o);for(u in o)"default"!==u&&(function(t){n.d(e,t,(function(){return o[t]}))})(u);a=n(25),s=n(0),c=!1,l=r,d=null,f=null,m=s(i.a,a.a,c,l,d,f),e.default=m.exports},17:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o,i,u,a,s,c,l,d,f;Object.defineProperty(e,"__esModule",{value:!0}),o=Object.assign||function(t){var e,n,r;for(e=1;e<arguments.length;e++){n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(8),u=r(i),a=n(1),s=r(a),c=n(9),l=r(c),d=n(21),f=r(d),e.default=new s.default({name:"MdRipple",components:{MdWave:f.default},props:{mdActive:null,mdDisabled:Boolean,mdCentered:Boolean,mdEventTrigger:{type:Boolean,default:!0}},data:function(){return{ripples:[],touchTimeout:null,eventType:null}},computed:{isDisabled:function(){return!this.$material.ripple||this.mdDisabled},rippleClasses:function(){return{"md-disabled":this.isDisabled}},waveClasses:function(){return{"md-centered":this.mdCentered}}},watch:{mdActive:function(t){var e="boolean"==typeof t,n="mouseevent"===t.constructor.name.toLowerCase();e&&this.mdCentered&&t?this.startRipple({type:"mousedown"}):n&&this.startRipple(t),this.$emit("update:mdActive",!1)}},methods:{touchMoveCheck:function(){window.clearTimeout(this.touchTimeout)},touchStartCheck:function(t){var e=this;this.touchTimeout=window.setTimeout((function(){e.startRipple(t)}),100)},startRipple:function(t){var e=this;(0,u.default)((function(){var n,r,o=e.eventType,i=e.isDisabled,u=e.mdCentered;i||o&&o!==t.type||(n=e.getSize(),r=null,r=u?e.getCenteredPosition(n):e.getHitPosition(t,n),e.eventType=t.type,e.ripples.push({waveStyles:e.applyStyles(r,n),uuid:(0,l.default)()}))}))},applyStyles:function(t,e){return e+="px",o({},t,{width:e,height:e})},clearWave:function(t){this.ripples=t?this.ripples.filter((function(e){return e.uuid!==t})):[]},getSize:function(){var t=this.$el,e=t.offsetWidth,n=t.offsetHeight;return Math.round(Math.max(e,n))},getCenteredPosition:function(t){var e=-t/2+"px";return{"margin-top":e,"margin-left":e}},getHitPosition:function(t,e){var n=this.$el.getBoundingClientRect(),r=t.pageY,o=t.pageX;return"touchstart"===t.type&&(r=t.changedTouches[0].pageY,o=t.changedTouches[0].pageX),{top:r-n.top-e/2-document.documentElement.scrollTop+"px",left:o-n.left-e/2-document.documentElement.scrollLeft+"px"}}}})},18:function(t,e,n){"use strict";var r,o;Object.defineProperty(e,"__esModule",{value:!0}),r=n(1),o=(function(t){return t&&t.__esModule?t:{default:t}})(r),e.default=new o.default({name:"MdWave",data:function(){return{animating:!0}},props:{waveClasses:null,waveStyles:null},methods:{end:function(){this.animating=null,this.$emit("md-end")}}})},2:function(e,n){e.exports=t},21:function(t,e,n){"use strict";function r(t){n(23)}var o,i,u,a,s,c,l,d,f,m;Object.defineProperty(e,"__esModule",{value:!0}),o=n(18),i=n.n(o);for(u in o)"default"!==u&&(function(t){n.d(e,t,(function(){return o[t]}))})(u);a=n(24),s=n(0),c=!1,l=r,d=null,f=null,m=s(i.a,a.a,c,l,d,f),e.default=m.exports},22:function(t,e){},23:function(t,e){},24:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"md-ripple"},on:{"after-enter":t.end}},[t.animating?n("span"):t._e()])},o=[],i={render:r,staticRenderFns:o};e.a=i},245:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o,i,u,a,s,c;Object.defineProperty(e,"__esModule",{value:!0}),o=n(3),i=r(o),u=n(246),a=r(u),s=n(249),c=r(s),e.default=function(t){(0,i.default)(t),t.component(a.default.name,a.default),t.component(c.default.name,c.default)}},246:function(t,e,n){"use strict";function r(t){n(247)}var o,i,u,a,s,c,l,d,f,m;Object.defineProperty(e,"__esModule",{value:!0}),o=n(114),i=n.n(o);for(u in o)"default"!==u&&(function(t){n.d(e,t,(function(){return o[t]}))})(u);a=n(248),s=n(0),c=!1,l=r,d=null,f=null,m=s(i.a,a.a,c,l,d,f),e.default=m.exports},247:function(t,e){},248:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-bottom-bar",class:[t.$mdActiveTheme,t.barClasses]},[n("md-ripple",{attrs:{"md-disabled":"fixed"===t.mdType,"md-active":t.MdBottomBar.mouseEvent}},[t._t("default")],2)],1)},o=[],i={render:r,staticRenderFns:o};e.a=i},249:function(t,e,n){"use strict";var r,o,i,u,a,s,c,l,d,f;Object.defineProperty(e,"__esModule",{value:!0}),r=n(115),o=n.n(r);for(i in r)"default"!==i&&(function(t){n.d(e,t,(function(){return r[t]}))})(i);u=n(250),a=n(0),s=!1,c=null,l=null,d=null,f=a(o.a,u.a,s,c,l,d),e.default=f.exports},25:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["md-ripple",t.rippleClasses],on:{"&touchstart":function(e){!(function(e){t.mdEventTrigger&&t.touchStartCheck(e)})(e)},"&touchmove":function(e){!(function(e){t.mdEventTrigger&&t.touchMoveCheck(e)})(e)},"&mousedown":function(e){!(function(e){t.mdEventTrigger&&t.startRipple(e)})(e)}}},[t._t("default"),t._v(" "),t._l(t.ripples,(function(e){return t.isDisabled?t._e():n("md-wave",{key:e.uuid,class:["md-ripple-wave",t.waveClasses],style:e.waveStyles,on:{"md-end":function(n){t.clearWave(e.uuid)}}})}))],2)},o=[],i={render:r,staticRenderFns:o};e.a=i},250:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-button",t._g(t._b({staticClass:"md-bottom-bar-item",class:t.itemClasses,attrs:{id:t.id,disabled:t.mdDisabled,"md-ripple":"fixed"===t.MdBottomBar.type},on:{click:t.setActiveItem}},"md-button",t.attrs,!1),t.$listeners),[t.$slots.default?t._t("default"):[t.isAssetIcon(t.mdIcon)?n("md-icon",{staticClass:"md-bottom-bar-icon",attrs:{"md-src":t.mdIcon}}):n("md-icon",{staticClass:"md-bottom-bar-icon"},[t._v(t._s(t.mdIcon))]),t._v(" "),n("span",{staticClass:"md-bottom-bar-label"},[t._v(t._s(t.mdLabel))])]],2)},o=[],i={render:r,staticRenderFns:o};e.a=i},27:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){var e,n,r;for(e=1;e<arguments.length;e++){n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=function(t,e){return r({},e,t.$options.components["router-link"].options.props)}},3:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o,i,u,a,s;Object.defineProperty(e,"__esModule",{value:!0}),n(7),o=n(5),i=r(o),u=n(4),a=r(u),s=function(){var t=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0}});return Object.defineProperties(t.theming,{metaColors:{get:function(){return a.default.metaColors},set:function(t){a.default.metaColors=t}},theme:{get:function(){return a.default.theme},set:function(t){a.default.theme=t}},enabled:{get:function(){return a.default.enabled},set:function(t){a.default.enabled=t}}}),t},e.default=function(t){t.material||(t.material=s(),t.prototype.$material=t.material)}},4:function(t,e,n){"use strict";var r,o,i,u,a;Object.defineProperty(e,"__esModule",{value:!0}),r=n(2),o=(function(t){return t&&t.__esModule?t:{default:t}})(r),i=null,u=null,a=null,e.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var t=this.fullThemeName,e=this.themeTarget,n=this.enabled;e&&(n?(e.classList.add(t),this.metaColors&&this.setHtmlMetaColors(t)):(e.classList.remove(t),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(t,e){var n=this.getThemeName,r=this.themeTarget;t=n(t),r.classList.remove(n(e)),r.classList.add(t),this.metaColors&&this.setHtmlMetaColors(t)},metaColors:function(t){t?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(t){var e,n=this;return t?(e=t.mdTheme,(function t(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==e?o:t(i)}return n.theme})(t.$parent)):null},getThemeName:function(t){var e=t||this.theme;return this.prefix+e},setMicrosoftColors:function(t){i&&i.setAttribute("content",t)},setThemeColors:function(t){u&&u.setAttribute("content",t)},setMaskColors:function(t){a&&a.setAttribute("color",t)},setHtmlMetaColors:function(t){var e,n="#fff";t&&(e=window.getComputedStyle(document.documentElement),n=e.getPropertyValue("--"+t+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var t=this;i=document.querySelector('[name="msapplication-TileColor"]'),u=document.querySelector('[name="theme-color"]'),a=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){t.setHtmlMetaColors(t.fullThemeName)}))}})},41:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{isAssetIcon:function(t){return/\w+[\/\\.]\w+/.test(t)}}}},5:function(t,e,n){"use strict";var r,o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e={};return o.default.util.defineReactive(e,"reactive",t),e.reactive},r=n(2),o=(function(t){return t&&t.__esModule?t:{default:t}})(r)},503:function(t,e,n){t.exports=n(245)},6:function(t,e,n){"use strict";function r(t){return!!t&&"object"==typeof t}function o(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||i(t)}function i(t){return t.$$typeof===m}function u(t){return Array.isArray(t)?[]:{}}function a(t,e){return e&&!1===e.clone||!d(t)?t:l(u(t),t,e)}function s(t,e,n){return t.concat(e).map((function(t){return a(t,n)}))}function c(t,e,n){var r={};return d(t)&&Object.keys(t).forEach((function(e){r[e]=a(t[e],n)})),Object.keys(e).forEach((function(o){d(e[o])&&t[o]?r[o]=l(t[o],e[o],n):r[o]=a(e[o],n)})),r}function l(t,e,n){var r=Array.isArray(e),o=Array.isArray(t),i=n||{arrayMerge:s};return r===o?r?(i.arrayMerge||s)(t,e,n):c(t,e,n):a(e,n)}var d,f,m,p;Object.defineProperty(e,"__esModule",{value:!0}),d=function(t){return r(t)&&!o(t)},f="function"==typeof Symbol&&Symbol.for,m=f?Symbol.for("react.element"):60103,l.all=function(t,e){if(!Array.isArray(t))throw Error("first argument should be an array");return t.reduce((function(t,n){return l(t,n,e)}),{})},p=l,e.default=p},7:function(t,e){},8:function(t,e,n){(function(e){var r,o,i,u,a,s=n(13),c="undefined"==typeof window?e:window,l=["moz","webkit"],d="AnimationFrame",f=c["request"+d],m=c["cancel"+d]||c["cancelRequest"+d];for(r=0;!f&&r<l.length;r++)f=c[l[r]+"Request"+d],m=c[l[r]+"Cancel"+d]||c[l[r]+"CancelRequest"+d];f&&m||(o=0,i=0,u=[],a=1e3/60,f=function(t){if(0===u.length){var e=s(),n=Math.max(0,a-(e-o));o=n+e,setTimeout((function(){var t,e=u.slice(0);for(u.length=0,t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(o)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return u.push({handle:++i,callback:t,cancelled:!1}),i},m=function(t){for(var e=0;e<u.length;e++)u[e].handle===t&&(u[e].cancelled=!0)}),t.exports=function(t){return f.call(c,t)},t.exports.cancel=function(){m.apply(c,arguments)},t.exports.polyfill=function(t){t||(t=c),t.requestAnimationFrame=f,t.cancelAnimationFrame=m}}).call(e,n(11))},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return Math.random().toString(36).slice(4)};e.default=r}})}));