!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=7)}([function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,n,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),s=null,c=0,f=[],l=e(0);function d(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],n))}else{var u=[];for(a=0;a<r.parts.length;a++)u.push(y(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:u}}}}function p(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):e.push(r[a]={id:a,parts:[u]})}return e}function m(t,n){var e=u(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),f.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,o)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=f.indexOf(t);n>=0&&f.splice(n,1)}function g(t){var n=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(n,t.attrs),m(t,n),n}function v(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function y(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var a=c++;e=s||(s=g(n)),r=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(n,t.attrs),m(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,e,n),o=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){h(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=p(t,n);return d(e,n),function(t){for(var r=[],o=0;o<e.length;o++){var a=e[o];(u=i[a.id]).refs--,r.push(u)}t&&d(p(t,n),n);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}};var b,x=(b=[],function(t,n){return b[t]=n,b.filter(Boolean).join("\n")});function w(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){(t.exports=e(2)(!1)).push([t.i,'html,\nbody {\n  margin: 0;\n  height: 100%; }\n\nimg {\n  display: block; }\n\ni {\n  cursor: pointer; }\n\nbody {\n  font-family: "Futura", "Helvetica Neue", "Helvetica", sans-serif;\n  font-size: 18px; }\n\nh1,\nh2 {\n  font-size: 24px;\n  font-weight: 800; }\n\np {\n  margin: 0.25em 0; }\n\n.buttons {\n  display: flex;\n  align-items: center;\n  margin-top: 1em; }\n\n.add-btn {\n  cursor: pointer;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: #000;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .add-btn i {\n    color: #fff;\n    font-size: 2em; }\n\n.edit-btn,\n.delete-btn {\n  cursor: pointer;\n  height: 25px;\n  width: 25px;\n  background: black;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.edit-btn {\n  margin-right: 0.618em; }\n  .edit-btn i {\n    font-size: 0.9em; }\n\n.delete-btn i {\n  font-size: 1em; }\n\n.todo .checkmark {\n  z-index: 1;\n  height: 20px;\n  width: 20px;\n  border: 1px solid #000;\n  border-radius: 4px; }\n\n.todo input:checked ~ .checkmark {\n  background: #000; }\n\n.todo input:checked ~ .title-and-price {\n  text-decoration: line-through; }\n\n.price-dot {\n  display: block;\n  height: 5px;\n  width: 5px;\n  border-radius: 50%;\n  background: #000;\n  margin: 0 0.618em; }\n\n.todo .image {\n  height: 150px;\n  width: 100%;\n  border-radius: 4px;\n  background-size: cover !important;\n  background-position: center !important;\n  filter: grayscale(1); }\n\n.title {\n  font-weight: 500; }\n\n.main-wrapper {\n  padding: 0.5em 1.33em 0;\n  position: relative;\n  max-width: 500px;\n  height: 100%;\n  margin: auto; }\n\n#todo-form-wrapper {\n  display: none;\n  background: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  padding: 0.5em 1.33em 0; }\n\nform {\n  display: flex;\n  flex-direction: column; }\n  form input,\n  form textarea,\n  form button {\n    font-size: 18px;\n    border: none;\n    outline: none;\n    padding: 0.618rem;\n    margin: 1em 0;\n    font-family: "Futura", "Helvetica Neue", "Helvetica", sans-serif; }\n  form input {\n    border-bottom: #000 solid 2px; }\n    form input:first-of-type {\n      font-size: 24px;\n      font-family: "Futura", "Helvetica Neue", "Helvetica", sans-serif; }\n  form textarea {\n    border: #000 solid 2px;\n    resize: none;\n    height: 100px; }\n  form button {\n    margin: auto;\n    margin-top: 1em;\n    padding: 0.618em 1em;\n    background: #000;\n    color: #fff;\n    border: none;\n    border-radius: 100px;\n    cursor: pointer; }\n\n.todo {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 1fr 10fr 1fr;\n  grid-template-rows: 1fr min-content;\n  grid-template-areas: "checkbox title remainder";\n  align-items: center;\n  margin-bottom: 1.618em; }\n\n.todo input {\n  opacity: 0;\n  cursor: pointer;\n  z-index: 2;\n  padding: 2em; }\n\n.todo input,\n.todo .checkmark {\n  grid-area: checkbox;\n  align-self: center;\n  justify-self: left; }\n\n.title-and-price {\n  user-select: none;\n  grid-column: title remainder;\n  cursor: pointer;\n  display: flex;\n  align-items: center; }\n\n.todo-details {\n  grid-column: title / title; }\n',""])},function(t,n,e){var r=e(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){(function(e){var r,o,i,a={scope:{}};a.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,n,e){if(e.get||e.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[n]=e.value)},a.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:void 0!==e&&null!=e?e:t},a.global=a.getGlobal(this),a.SYMBOL_PREFIX="jscomp_symbol_",a.initSymbol=function(){a.initSymbol=function(){},a.global.Symbol||(a.global.Symbol=a.Symbol)},a.symbolCounter_=0,a.Symbol=function(t){return a.SYMBOL_PREFIX+(t||"")+a.symbolCounter_++},a.initSymbolIterator=function(){a.initSymbol();var t=a.global.Symbol.iterator;t||(t=a.global.Symbol.iterator=a.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&a.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return a.arrayIterator(this)}}),a.initSymbolIterator=function(){}},a.arrayIterator=function(t){var n=0;return a.iteratorPrototype(function(){return n<t.length?{done:!1,value:t[n++]}:{done:!0}})},a.iteratorPrototype=function(t){return a.initSymbolIterator(),(t={next:t})[a.global.Symbol.iterator]=function(){return this},t},a.array=a.array||{},a.iteratorFromArray=function(t,n){a.initSymbolIterator(),t instanceof String&&(t+="");var e=0,r={next:function(){if(e<t.length){var o=e++;return{value:n(o,t[o]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},a.polyfill=function(t,n,e,r){if(n){for(e=a.global,t=t.split("."),r=0;r<t.length-1;r++){var o=t[r];o in e||(e[o]={}),e=e[o]}(n=n(r=e[t=t[t.length-1]]))!=r&&null!=n&&a.defineProperty(e,t,{configurable:!0,writable:!0,value:n})}},a.polyfill("Array.prototype.keys",function(t){return t||function(){return a.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var u=this;o=[],void 0===(i="function"==typeof(r=function(){function t(t){if(!P.col(t))try{return document.querySelectorAll(t)}catch(t){}}function n(t,n){for(var e=t.length,r=2<=arguments.length?arguments[1]:void 0,o=[],i=0;i<e;i++)if(i in t){var a=t[i];n.call(r,a,i,t)&&o.push(a)}return o}function e(t){return t.reduce(function(t,n){return t.concat(P.arr(n)?e(n):n)},[])}function r(n){return P.arr(n)?n:(P.str(n)&&(n=t(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function o(t,n){return t.some(function(t){return t===n})}function i(t){var n,e={};for(n in t)e[n]=t[n];return e}function a(t,n){var e,r=i(t);for(e in t)r[e]=n.hasOwnProperty(e)?n[e]:t[e];return r}function s(t,n){var e,r=i(t);for(e in n)r[e]=P.und(t[e])?n[e]:t[e];return r}function c(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function f(t,n){return P.fnc(t)?t(n.target,n.id,n.total):t}function l(t,n){if(n in t.style)return getComputedStyle(t).getPropertyValue(n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(t,n){return P.dom(t)&&o(L,n)?"transform":P.dom(t)&&(t.getAttribute(n)||P.svg(t)&&t[n])?"attribute":P.dom(t)&&"transform"!==n&&l(t,n)?"css":null!=t[n]?"object":void 0}function p(t,e){switch(d(t,e)){case"transform":return function(t,e){var r=function(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(e),r=-1<e.indexOf("scale")?1:0+r;if(!(t=t.style.transform))return r;for(var o=[],i=[],a=[],u=/(\w+)\((.+?)\)/g;o=u.exec(t);)i.push(o[1]),a.push(o[2]);return(t=n(a,function(t,n){return i[n]===e})).length?t[0]:r}(t,e);case"css":return l(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0}function m(t,n){var e=/^(\*=|\+=|-=)/.exec(t);if(!e)return t;var r=c(t)||0;switch(n=parseFloat(n),t=parseFloat(t.replace(e[0],"")),e[0][0]){case"+":return n+t+r;case"-":return n-t+r;case"*":return n*t+r}}function h(t,n){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))}function g(t){t=t.points;for(var n,e=0,r=0;r<t.numberOfItems;r++){var o=t.getItem(r);0<r&&(e+=h(n,o)),n=o}return e}function v(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return h({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return g(t);case"polygon":var n=t.points;return g(t)+h(n.getItem(n.numberOfItems-1),n.getItem(0))}}function y(t,n){function e(e){return e=void 0===e?0:e,t.el.getPointAtLength(1<=n+e?n+e:0)}var r=e(),o=e(-1),i=e(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(i.y-o.y,i.x-o.x)/Math.PI}}function b(t,n){var e,r=/-?\d*\.?\d+/g;if(e=P.pth(t)?t.totalLength:t,P.col(e))if(P.rgb(e)){var o=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);e=o?"rgba("+o[1]+",1)":e}else e=P.hex(e)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,n,e,r){return n+n+e+e+r+r});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(n[1],16);var e=parseInt(n[2],16),n=parseInt(n[3],16);return"rgba("+t+","+e+","+n+",1)"}(e):P.hsl(e)?function(t){function n(t,n,e){return 0>e&&(e+=1),1<e&&--e,e<1/6?t+6*(n-t)*e:.5>e?n:e<2/3?t+(n-t)*(2/3-e)*6:t}var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(e[1])/360;var r=parseInt(e[2])/100,o=parseInt(e[3])/100,e=e[4]||1;if(0==r)o=r=t=o;else{var i=.5>o?o*(1+r):o+r-o*r,a=2*o-i,o=n(a,i,t+1/3),r=n(a,i,t);t=n(a,i,t-1/3)}return"rgba("+255*o+","+255*r+","+255*t+","+e+")"}(e):void 0;else o=(o=c(e))?e.substr(0,e.length-o.length):e,e=n&&!/\s/g.test(e)?o+n:o;return{original:e+="",numbers:e.match(r)?e.match(r).map(Number):[0],strings:P.str(t)||n?e.split(r):[]}}function x(t){return n(t=t?e(P.arr(t)?t.map(r):r(t)):[],function(t,n,e){return e.indexOf(t)===n})}function w(t,n){var e=i(n);if(P.arr(t)){var o=t.length;2!==o||P.obj(t[0])?P.fnc(n.duration)||(e.duration=n.duration/o):t={value:t}}return r(t).map(function(t,e){return e=e?0:n.delay,t=P.obj(t)&&!P.pth(t)?t:{value:t},P.und(t.delay)&&(t.delay=e),t}).map(function(t){return s(t,e)})}function k(t,n){var e;return t.tweens.map(function(r){var o=(r=function(t,n){var e,r={};for(e in t){var o=f(t[e],n);P.arr(o)&&1===(o=o.map(function(t){return f(t,n)})).length&&(o=o[0]),r[e]=o}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(r,n)).value,i=p(n.target,t.name),a=e?e.to.original:i,a=P.arr(o)?o[0]:a,u=m(P.arr(o)?o[1]:o,a),i=c(u)||c(a)||c(i);return r.from=b(a,i),r.to=b(u,i),r.start=e?e.end:t.offset,r.end=r.start+r.delay+r.duration,r.easing=function(t){return P.arr(t)?C.apply(this,t):E[t]}(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,r.isPath=P.pth(o),r.isColor=P.col(r.from.original),r.isColor&&(r.round=1),e=r})}function A(t,n,e,r){var o="delay"===t;return n.length?(o?Math.min:Math.max).apply(Math,n.map(function(n){return n[t]})):o?r.delay:e.offset+r.delay+r.duration}function O(t){var r,o=a(I,t),i=a(S,t),u=function(t){var n=x(t);return n.map(function(t,e){return{target:t,id:e,total:n.length}})}(t.targets),c=[],f=s(o,i);for(r in t)f.hasOwnProperty(r)||"targets"===r||c.push({name:r,offset:f.offset,tweens:w(t[r],i)});return t=function(t,r){return n(e(t.map(function(t){return r.map(function(n){var e=d(t.target,n.name);if(e){var r=k(n,t);n={type:e,property:n.name,animatable:t,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else n=void 0;return n})})),function(t){return!P.und(t)})}(u,c),s(o,{children:[],animatables:u,animations:t,duration:A("duration",t,o,i),delay:A("delay",t,o,i)})}function M(t){function e(){return window.Promise&&new Promise(function(t){return d=t})}function r(t){return m.reversed?m.duration-t:t}function o(t){for(var e=0,r={},o=m.animations,i=o.length;e<i;){var a=o[e],u=a.animatable,s=a.tweens,c=s.length-1,f=s[c];c&&(f=n(s,function(n){return t<n.end})[0]||f);for(var s=Math.min(Math.max(t-f.start-f.delay,0),f.duration)/f.duration,d=isNaN(s)?1:f.easing(s,f.elasticity),s=f.to.strings,p=f.round,c=[],h=void 0,h=f.to.numbers.length,g=0;g<h;g++){var v=void 0,v=f.to.numbers[g],b=f.from.numbers[g],v=f.isPath?y(f.value,d*v):b+d*(v-b);p&&(f.isColor&&2<g||(v=Math.round(v*p)/p)),c.push(v)}if(f=s.length)for(h=s[0],d=0;d<f;d++)p=s[d+1],g=c[d],isNaN(g)||(h=p?h+(g+p):h+(g+" "));else h=c[0];T[a.type](u.target,a.property,h,r,u.id),a.currentValue=h,e++}if(e=Object.keys(r).length)for(o=0;o<e;o++)j||(j=l(document.body,"transform")?"transform":"-webkit-transform"),m.animatables[o].target.style[j]=r[o].join(" ");m.currentTime=t,m.progress=t/m.duration*100}function i(t){m[t]&&m[t](m)}function a(){m.remaining&&!0!==m.remaining&&m.remaining--}function u(t){var n=m.duration,u=m.offset,l=u+m.delay,h=m.currentTime,g=m.reversed,v=r(t);if(m.children.length){var y=m.children,b=y.length;if(v>=m.currentTime)for(var x=0;x<b;x++)y[x].seek(v);else for(;b--;)y[b].seek(v)}(v>=l||!n)&&(m.began||(m.began=!0,i("begin")),i("run")),v>u&&v<n?o(v):(v<=u&&0!==h&&(o(0),g&&a()),(v>=n&&h!==n||!n)&&(o(n),g||a())),i("update"),t>=n&&(m.remaining?(c=s,"alternate"===m.direction&&(m.reversed=!m.reversed)):(m.pause(),m.completed||(m.completed=!0,i("complete"),"Promise"in window&&(d(),p=e()))),f=0)}t=void 0===t?{}:t;var s,c,f=0,d=null,p=e(),m=O(t);return m.reset=function(){var t=m.direction,n=m.loop;for(m.currentTime=0,m.progress=0,m.paused=!0,m.began=!1,m.completed=!1,m.reversed="reverse"===t,m.remaining="alternate"===t&&1===n?2:n,o(0),t=m.children.length;t--;)m.children[t].reset()},m.tick=function(t){s=t,c||(c=s),u((f+s-c)*M.speed)},m.seek=function(t){u(r(t))},m.pause=function(){var t=U.indexOf(m);-1<t&&U.splice(t,1),m.paused=!0},m.play=function(){m.paused&&(m.paused=!1,c=0,f=r(m.currentTime),U.push(m),F||R())},m.reverse=function(){m.reversed=!m.reversed,c=0,f=r(m.currentTime)},m.restart=function(){m.pause(),m.reset(),m.play()},m.finished=p,m.reset(),m.autoplay&&m.play(),m}var j,I={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},L="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),P={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return P.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||P.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return P.hex(t)||P.rgb(t)||P.hsl(t)}},C=function(){function t(t,n,e){return(((1-3*e+3*n)*t+(3*e-6*n))*t+3*n)*t}return function(n,e,r,o){if(0<=n&&1>=n&&0<=r&&1>=r){var i=new Float32Array(11);if(n!==e||r!==o)for(var a=0;11>a;++a)i[a]=t(.1*a,n,r);return function(a){if(n===e&&r===o)return a;if(0===a)return 0;if(1===a)return 1;for(var u=0,s=1;10!==s&&i[s]<=a;++s)u+=.1;var s=u+(a-i[--s])/(i[s+1]-i[s])*.1,c=3*(1-3*r+3*n)*s*s+2*(3*r-6*n)*s+3*n;if(.001<=c){for(u=0;4>u&&0!=(c=3*(1-3*r+3*n)*s*s+2*(3*r-6*n)*s+3*n);++u)var f=t(s,n,r)-a,s=s-f/c;a=s}else if(0===c)a=s;else{var s=u,u=u+.1,l=0;do{0<(c=t(f=s+(u-s)/2,n,r)-a)?u=f:s=f}while(1e-7<Math.abs(c)&&10>++l);a=f}return t(a,e,o)}}}}(),E=function(){function t(t,n){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-n/(2*Math.PI)*Math.asin(1))*Math.PI/n)}var n,e="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(n,e){return 1-t(1-n,e)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(n,e){return.5>n?t(2*n,e)/2:1-t(-2*n+2,e)/2}]},o={linear:C(.25,.25,.75,.75)},i={};for(n in r)i.type=n,r[i.type].forEach(function(t){return function(n,r){o["ease"+t.type+e[r]]=P.fnc(n)?n:C.apply(u,n)}}(i)),i={type:i.type};return o}(),T={css:function(t,n,e){return t.style[n]=e},attribute:function(t,n,e){return t.setAttribute(n,e)},object:function(t,n,e){return t[n]=e},transform:function(t,n,e,r,o){r[o]||(r[o]=[]),r[o].push(n+"("+e+")")}},U=[],F=0,R=function(){function t(){F=requestAnimationFrame(n)}function n(n){var e=U.length;if(e){for(var r=0;r<e;)U[r]&&U[r].tick(n),r++;t()}else cancelAnimationFrame(F),F=0}return t}();return M.version="2.2.0",M.speed=1,M.running=U,M.remove=function(t){t=x(t);for(var n=U.length;n--;)for(var e=U[n],r=e.animations,i=r.length;i--;)o(t,r[i].animatable.target)&&(r.splice(i,1),r.length||e.pause())},M.getValue=p,M.path=function(n,e){var r=P.str(n)?t(n)[0]:n,o=e||100;return function(t){return{el:r,property:t,totalLength:v(r)*(o/100)}}},M.setDashoffset=function(t){var n=v(t);return t.setAttribute("stroke-dasharray",n),n},M.bezier=C,M.easings=E,M.timeline=function(t){var n=M(t);return n.pause(),n.duration=0,n.add=function(e){return n.children.forEach(function(t){t.began=!0,t.completed=!0}),r(e).forEach(function(e){var r=s(e,a(S,t||{}));r.targets=r.targets||t.targets,e=n.duration;var o=r.offset;r.autoplay=!1,r.direction=n.direction,r.offset=P.und(o)?e:m(o,e),n.began=!0,n.completed=!0,n.seek(r.offset),(r=M(r)).began=!0,r.completed=!0,r.duration>e&&(n.duration=r.duration),n.children.push(r)}),n.seek(0),n.reset(),n.autoplay&&n.restart(),n},n},M.random=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},M})?r.apply(n,o):r)||(t.exports=i)}).call(this,e(5))},function(t,n,e){"use strict";e.r(n);e(6),e(4);var r;(r=document.createElement("div")).classList.add("main-wrapper"),r.innerHTML='<div class="tasks-section"><h1 id="wacky-title">Tasks</h1><div id="todos"></div></div><div class="done-section"><h1>Done</h1><div id="done-todos"></div></div>',console.log(document.getElementById("wacky-title"))}]);