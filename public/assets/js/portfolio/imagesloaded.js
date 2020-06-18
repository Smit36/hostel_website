!function(t){"use strict";function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===c.call(t)}function n(t){var e=[];if(i(t))e=t;else if("number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,i){function o(t,i,s){if(!(this instanceof o))return new o(t,i);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=e({},this.options),"function"==typeof i?s=i:e(this.options,i),s&&this.on("always",s),this.getImages(),r&&(this.jqDeferred=new r.Deferred);var h=this;setTimeout(function(){h.check()})}function c(t){this.img=t}function f(t){this.src=t,a[t]=this}o.prototype=new t,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var t=0,e=this.elements.length;e>t;t++){var i=this.elements[t];"IMG"===i.nodeName&&this.addImage(i);for(var n=i.querySelectorAll("img"),o=0,r=n.length;r>o;o++){var s=n[o];this.addImage(s)}}},o.prototype.addImage=function(t){var e=new c(t);this.images.push(e)},o.prototype.check=function(){function t(t,o){return e.options.debug&&h&&s.log("confirm",t,o),e.progress(t),i++,i===n&&e.complete(),!0}var e=this,i=0,n=this.images.length;if(this.hasAnyBroken=!1,!n)return void this.complete();for(var o=0;n>o;o++){var r=this.images[o];r.on("confirm",t),r.check()}},o.prototype.progress=function(t){this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;var e=this;setTimeout(function(){e.emit("progress",e,t),e.jqDeferred&&e.jqDeferred.notify(e,t)})},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var e=this;setTimeout(function(){if(e.emit(t,e),e.emit("always",e),e.jqDeferred){var i=e.hasAnyBroken?"reject":"resolve";e.jqDeferred[i](e)}})},r&&(r.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(r(this))}),c.prototype=new t,c.prototype.check=function(){var t=a[this.img.src]||new f(this.img.src);if(t.isConfirmed)return void this.confirm(t.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var e=this;t.on("confirm",function(t,i){return e.confirm(t.isLoaded,i),!0}),t.check()},c.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("confirm",this,e)};var a={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var t=new Image;i.bind(t,"load",this),i.bind(t,"error",this),t.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},f.prototype.onload=function(t){this.confirm(!0,"onload"),this.unbindProxyEvents(t)},f.prototype.onerror=function(t){this.confirm(!1,"onerror"),this.unbindProxyEvents(t)},f.prototype.confirm=function(t,e){this.isConfirmed=!0,this.isLoaded=t,this.emit("confirm",this,e)},f.prototype.unbindProxyEvents=function(t){i.unbind(t.target,"load",this),i.unbind(t.target,"error",this)},o}var r=t.jQuery,s=t.console,h="undefined"!=typeof s,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],o):t.imagesLoaded=o(t.EventEmitter,t.eventie)}(window);