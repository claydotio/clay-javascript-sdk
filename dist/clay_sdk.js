var Clay=function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){(function(t){var r,o,i,u,c,s,f,a,d,p,l,w,v,h,m;o=e(1),u=(t.env.TRUSTED_DOMAIN||"clay.io").replace(/\./g,"\\."),r=window.self!==window.top,l={},f=!1,s=null,h=null,c=!1,w=function(){var n;return n=1,function(t){var e,r;e=new o;try{t.id=n,t.gameId=s,t.accessToken=null!=h?h.accessToken:void 0,t._clay=!0,t.jsonrpc="2.0",l[t.id]=e,n+=1,window.parent.postMessage(JSON.stringify(t),"*")}catch(i){r=i,e.reject(r)}return e}}(),p=function(n){var t;if(!c&&!a(n.origin))throw new Error("Invalid origin "+n.origin);return t=JSON.parse(n.data),t.id?t.error?l[t.id].reject(new Error(t.error.message)):l[t.id].resolve(t.result):void 0},m=function(){return w({method:"ping"})},a=function(n){var t;return t=new RegExp("^https?://(\\w+\\.)?(\\w+\\.)?"+u+"/?$"),t.test(n)},d=function(n){switch(n){case"share.any":return v;default:return function(){throw new Error("Method not found")}}},v=function(n){var t,e;return t=n.text,(e=function(n){return n=encodeURIComponent(n.substr(0,140)),window.open("https://twitter.com/intent/tweet?text="+n)})(t)},i=function(){function n(){this.version="v0.0.5",window.addEventListener("message",p)}return n.prototype._setInitialized=function(n){return f=n},n.prototype._setDebug=function(n){return c=n},n.prototype._setFramed=function(n){return r=n},n.prototype._config={},n.prototype.init=function(n){return s=null!=n?n.gameId:void 0,c=Boolean(null!=n?n.debug:void 0),this._config.gameId=s,s?r?m().then(function(){return w({method:"auth.getStatus"})}).then(function(n){return f=!0,h=n}):(f=!0,h={},(new o).resolve(null)):(new o).reject(new Error("Missing gameId"))},n.prototype.login=function(n){var t;return t=n.scope,(new o).reject(new Error("Not Implemented"))},n.prototype.api=function(){return(new o).reject(new Error("Not Implemented"))},n.prototype.client=function(n){var t,e;return f?(e=function(n){var t,e;return t=n.method,e=n.params,d(t).apply(null,e)},r?(t=null,m().then(function(){return w(n)}).then(null,function(r){return t=r,e(n)}).then(null,function(n){throw"Method not found"===n.message&&null!==t?t:n})):(new o).resolve(e(n))):(new o).reject(new Error("Must call Clay.init() first"))},n}(),n.exports=new i}).call(t,e(2))},function(n,t,e){(function(n){!function(){function t(n,e){function r(n,t,e,r){if("object"==typeof c&&"function"==typeof n)try{var o=0;n.call(c,function(n){o++||(c=n,t())},function(n){o++||(c=n,e())})}catch(i){c=i,e()}else r()}function o(){var t;try{t=c&&c.then}catch(s){return c=s,u=2,o()}r(t,function(){u=1,o()},function(){u=2,o()},function(){try{1==u&&"function"==typeof n?c=n(c):2==u&&"function"==typeof e&&(c=e(c),u=1)}catch(o){return c=o,f()}c==i?(c=TypeError(),f()):r(t,function(){f(3)},f,function(){f(1==u&&3)})})}var i=this,u=0,c=0,s=[];i.promise=i,i.resolve=function(n){return u||(c=n,u=1,setTimeout(o)),this},i.reject=function(n){return u||(c=n,u=2,setTimeout(o)),this},i.then=function(n,e){var r=new t(n,e);return 3==u?r.resolve(c):4==u?r.reject(c):s.push(r),r};var f=function(n){u=n||4,s.map(function(n){3==u&&n.resolve(c)||n.reject(c)})}}n.exports=t}()}).call(t,e(3)(n))},function(n){function t(){}var e=n.exports={};e.nextTick=function(){var n="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(n)return function(n){return window.setImmediate(n)};if(t){var e=[];return window.addEventListener("message",function(n){var t=n.source;if((t===window||null===t)&&"process-tick"===n.data&&(n.stopPropagation(),e.length>0)){var r=e.shift();r()}},!0),function(n){e.push(n),window.postMessage("process-tick","*")}}return function(n){setTimeout(n,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=t,e.addListener=t,e.once=t,e.off=t,e.removeListener=t,e.removeAllListeners=t,e.emit=t,e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")}},function(n){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children=[],n.webpackPolyfill=1),n}}]);