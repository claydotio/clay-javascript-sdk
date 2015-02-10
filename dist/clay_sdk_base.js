!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){(function(e){var r,o,i,s,u,c,f,a,h,p,l,d=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};o=window.Promise||n(2),p=n(3),i=e.env.TRUSTED_DOMAIN||"clay.io",s=140,u="v1.1.1",f=function(){var t,e,n;return n=null,e=null,t=new o(function(t,r){return n=t,e=r}),t.resolve=n,t.reject=e,t},c=f(),a=!1,l=["share.any"],r=function(t,e,n){var r;return null==n&&(n=function(){return null}),"function"==typeof e&&(n=e,e=[]),null!=e&&"[object Object]"===Object.prototype.toString.call(e)&&(e=[e]),null!=e&&"[object Array]"!==Object.prototype.toString.call(e)?n(new Error("Params must be an array")):(r=t.split(".")[0],t=t.slice(t.indexOf(".")+1),h[r]?h[r].apply(0,[t,e,n]):n(new Error("Method not found")))},h={version:function(t,e,n){return n(null,u)},init:function(t,e,n){var r;return r=e[0],function(){var t,e;return e=r.gameId,t=Boolean(r.debug),t?p.up():p.up({trusted:i,subdomains:!0}),"string"==typeof e&&/^[0-9]+$/.test(e)?(a=!0,p.get("auth.getStatus",{gameId:e}).then(function(t){return c.resolve({gameId:e,accessToken:null!=t?t.accessToken:void 0}),c})["catch"](function(){return c.resolve({gameId:e,accessToken:null}),c})):n(new Error("Missing or invalid gameId"))}().then(function(t){return n(null,t)})["catch"](n)},client:function(t,e,n){return"client"===t?n(new Error("Missing or invalid method")):function(){return a?(d.call(l,t)>=0&&p.beforeWindowOpen(),c.then(function(n){return"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]),"object"==typeof e[0]&&(e[0].gameId=n.gameId,e[0].accessToken=n.accessToken),p.get(t,e)})):o.reject(new Error("Must call Clay('init') first"))}().then(function(t){return n(null,t)})["catch"](n)},register:function(t,e){var n,r,o;return o=e[0],r=o.method,n=o.fn,h[r]=n(c)}},p.register("share.any",function(t){var e,n;if(e=(null!=t?t:{}).text,"string"!=typeof e)throw new Error("text parameter is missing or invalid");if(e.length>s)throw new Error("No valid share method available");return(n=function(t){return t=encodeURIComponent(t.substr(0,s)),p.windowOpen("https://twitter.com/intent/tweet?text="+t,"_system")})(e)}),t.exports=r,window.setTimeout(function(){var t,e,n,o,i,s;for(e=(null!=(i=window.Clay)?i.q:void 0)||[],window.Clay=r,s=[],n=0,o=e.length;o>n;n++)t=e[n],s.push(r.apply(0,t));return s})}).call(e,n(1))},function(t){function e(){}var n=t.exports={};n.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.MutationObserver,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};var r=[];if(e){var o=document.createElement("div"),i=new MutationObserver(function(){var t=r.slice();r.length=0,t.forEach(function(t){t()})});return i.observe(o,{attributes:!0}),function(t){r.length||o.setAttribute("yes","no"),r.push(t)}}return n?(window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),r.length>0)){var n=r.shift();n()}},!0),function(t){r.push(t),window.postMessage("process-tick","*")}):function(t){setTimeout(t,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.on=e,n.addListener=e,n.once=e,n.off=e,n.removeListener=e,n.removeAllListeners=e,n.emit=e,n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},function(t,e,n){(function(t){!function(){function e(t){function n(t,e,n,r){if("object"!=typeof c&&"function"!=typeof c||"function"!=typeof t)r();else try{var o=0;t.call(c,function(t){o++||(c=t,e())},function(t){o++||(c=t,n())})}catch(i){c=i,n()}}function r(){var t;try{t=c&&c.then}catch(e){return c=e,u=2,r()}n(t,function(){u=1,r()},function(){u=2,r()},function(){try{1==u&&"function"==typeof o?c=o(c):2==u&&"function"==typeof i&&(c=i(c),u=1)}catch(e){return c=e,a()}c==s?(c=TypeError(),a()):n(t,function(){a(3)},a,function(){a(1==u&&3)})})}if("function"!=typeof t&&void 0!=t)throw TypeError();var o,i,s=this,u=0,c=0,f=[];s.promise=s,s.resolve=function(t){return o=this.fn,i=this.er,u||(c=t,u=1,setTimeout(r)),this},s.reject=function(t){return o=this.fn,i=this.er,u||(c=t,u=2,setTimeout(r)),this},s.then=function(t,n){var r=new e;return r.fn=t,r.er=n,3==u?r.resolve(c):4==u?r.reject(c):f.push(r),r},s["catch"]=function(t){return s.then(null,t)};var a=function(t){u=t||4,f.map(function(t){3==u&&t.resolve(c)||t.reject(c)})};try{"function"==typeof t&&t(s.resolve,s.reject)}catch(h){s.reject(h)}return s}e.resolve=function(t){if(1!=this._d)throw TypeError();return new e(function(e){e(t)})},e.reject=function(t){if(1!=this._d)throw TypeError();return new e(function(e,n){n(t)})},e.all=function(t){function n(e,o){if(o)return r.resolve(o);if(e)return r.reject(e);var i=t.reduce(function(t,e){return e&&e.then?t+1:t},0);0==i&&r.resolve(t),t.map(function(e,r){e&&e.then&&e.then(function(e){return t[r]=e,n(),e},n)})}if(1!=this._d)throw TypeError();if(!(t instanceof Array))return e.reject(TypeError());var r=new e;return n(),r},e.race=function(t){function n(e,o){if(o)return r.resolve(o);if(e)return r.reject(e);var i=t.reduce(function(t,e){return e&&e.then?t+1:t},0);0==i&&r.resolve(t),t.map(function(t){t&&t.then&&t.then(function(t){n(null,t)},n)})}if(1!=this._d)throw TypeError();if(!(t instanceof Array))return e.reject(TypeError());if(0==t.length)return new e;var r=new e;return n(),r},e._d=1,t.exports=e}()}).call(e,n(4)(t))},function(t){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r,o,i,s,u,c,f,a=function(t,e){return function(){return t.apply(e,arguments)}},h=[].slice;s=window.Promise||n(1),r=window.self!==window.top,u=950,c=function(){var t,e,n;return n=null,e=null,t=new s(function(t,r){return n=t,e=r}),t.resolve=n,t.reject=e,t},i=function(){function t(t){this.timeout=t,this.resolveMessage=a(this.resolveMessage,this),this.postMessage=a(this.postMessage,this),this.setTimeout=a(this.setTimeout,this),this.lastMessageId=0,this.pendingMessages={}}return t.prototype.setTimeout=function(t){return this.timeout=t,null},t.prototype.postMessage=function(t,e){var n,r,o,i;null==e&&(e=[]),n=c(),i={method:t,params:e};try{this.lastMessageId+=1,o=this.lastMessageId,i.id=o,i._portal=!0,i.jsonrpc="2.0",this.pendingMessages[i.id]=n,window.parent.postMessage(JSON.stringify(i),"*")}catch(s){r=s,n.reject(r)}return window.setTimeout(function(){return n.reject(new Error("Message Timeout"))},this.timeout),n},t.prototype.resolveMessage=function(t){return this.pendingMessages[t.id]?t.error?this.pendingMessages[t.id].reject(new Error(t.error.message)):this.pendingMessages[t.id].resolve(t.result||null):s.reject("Method not found")},t}(),o=function(){function t(){this.register=a(this.register,this),this.onMessage=a(this.onMessage,this),this.isValidOrigin=a(this.isValidOrigin,this),this.validateParent=a(this.validateParent,this),this.windowOpen=a(this.windowOpen,this),this.beforeWindowOpen=a(this.beforeWindowOpen,this),this.get=a(this.get,this),this.down=a(this.down,this),this.up=a(this.up,this),this.config={trusted:null,subdomains:!1,timeout:u},this.windowOpenQueue=[],this.poster=new i({timeout:this.config.timeout}),this.registeredMethods={ping:function(){return"pong"}}}return t.prototype.up=function(t){var e,n,r,o;return o=null!=t?t:{},r=o.trusted,e=o.subdomains,n=o.timeout,void 0!==r&&(this.config.trusted=r),null!=e&&(this.config.subdomains=e),null!=n&&(this.config.timeout=n),this.poster.setTimeout(this.config.timeout),window.addEventListener("message",this.onMessage)},t.prototype.down=function(){return window.removeEventListener("message",this.onMessage)},t.prototype.get=function(t,e){var n,o;return null==e&&(e=[]),"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]),o=function(t){return function(e,n){var r;return r=t.registeredMethods[e]||function(){throw new Error("Method not found")},r.apply(null,n)}}(this),r?(n=null,this.validateParent().then(function(n){return function(){return n.poster.postMessage(t,e)}}(this))["catch"](function(r){return n=r,o(t,e)})["catch"](function(t){throw"Method not found"===t.message&&null!==n?n:t})):new s(function(n){return n(o(t,e))})},t.prototype.beforeWindowOpen=function(){var t,e,n,r;for(e=!1,this.windowOpenQueue=[],r=[],t=n=0;1e3>=n;t=n+=10)r.push(setTimeout(function(t){return function(){var n,r,o,i;if(!e){for(t.windowOpenQueue.length>0&&(e=!0),i=t.windowOpenQueue,r=0,o=i.length;o>r;r++)n=i[r],window.open.apply(window,n);return t.windowOpenQueue=[]}}}(this),t));return r},t.prototype.windowOpen=function(){var t;return t=1<=arguments.length?h.call(arguments,0):[],this.windowOpenQueue.push(t)},t.prototype.validateParent=function(){return this.poster.postMessage("ping")},t.prototype.isValidOrigin=function(t){var e,n;return(null!=(n=this.config)?n.trusted:void 0)?(e=new RegExp(this.config.subdomains?"^https?://(\\w+\\.)?(\\w+\\.)?"+(""+this.config.trusted.replace(/\./g,"\\.")+"/?$"):"^https?://"+(""+this.config.trusted.replace(/\./g,"\\.")+"/?$")),e.test(t)):!0},t.prototype.onMessage=function(t){var e,n,r,o,i,s;try{if(o="string"==typeof t.data?JSON.parse(t.data):t.data,!o._portal)throw new Error("Non-portal message");return r=!!o.method,r?(n=o.id,i=o.method,s=o.params,this.get(i,s).then(function(e){return o={id:n,result:e,_portal:!0,jsonrpc:"2.0"},t.source.postMessage(JSON.stringify(o),"*")})["catch"](function(e){var r;return r=function(){switch(e.message){case"Method not found":return-32601;default:return-1}}(),o={_portal:!0,jsonrpc:"2.0",id:n,error:{code:r,message:e.message}},t.source.postMessage(JSON.stringify(o),"*")})):(this.isValidOrigin(t.origin)||(o.error={message:"Invalid origin "+t.origin,code:-1}),this.poster.resolveMessage(o))}catch(u){e=u}},t.prototype.register=function(t,e){return this.registeredMethods[t]=e},t}(),f=new o,t.exports={up:f.up,down:f.down,get:f.get,register:f.register,beforeWindowOpen:f.beforeWindowOpen,windowOpen:f.windowOpen}},function(t,e,n){(function(t,e){!function(){function n(e){t.setImmediate?setImmediate(e):t.importScripts?setTimeout(e):(o++,i[o]=e,t.postMessage(o,"*"))}function r(t){function e(t,e,n,r){if("object"!=typeof f&&"function"!=typeof f||"function"!=typeof t)r();else try{var o=0;t.call(f,function(t){o++||(f=t,e())},function(t){o++||(f=t,n())})}catch(i){f=i,n()}}function o(){var t;try{t=f&&f.then}catch(n){return f=n,c=2,o()}e(t,function(){c=1,o()},function(){c=2,o()},function(){try{1==c&&"function"==typeof i?f=i(f):2==c&&"function"==typeof s&&(f=s(f),c=1)}catch(n){return f=n,h()}f==u?(f=TypeError(),h()):e(t,function(){h(3)},h,function(){h(1==c&&3)})})}if("function"!=typeof t&&void 0!=t)throw TypeError();var i,s,u=this,c=0,f=0,a=[];u.promise=u,u.resolve=function(t){return i=this.fn,s=this.er,c||(f=t,c=1,n(o)),this},u.reject=function(t){return i=this.fn,s=this.er,c||(f=t,c=2,n(o)),this},u.then=function(t,e){var n=new r;return n.fn=t,n.er=e,3==c?n.resolve(f):4==c?n.reject(f):a.push(n),n},u["catch"]=function(t){return u.then(null,t)};var h=function(t){c=t||4,a.map(function(t){3==c&&t.resolve(f)||t.reject(f)})};try{"function"==typeof t&&t(u.resolve,u.reject)}catch(p){u.reject(p)}return u}t=this;var o=1,i={},s=!1;t.setImmediate||t.addEventListener("message",function(e){if(e.source==t)if(s)n(i[e.data]);else{s=!0;try{i[e.data]()}catch(e){}delete i[e.data],s=!1}}),r.resolve=function(t){if(1!=this._d)throw TypeError();return new r(function(e){e(t)})},r.reject=function(t){if(1!=this._d)throw TypeError();return new r(function(e,n){n(t)})},r.all=function(t){function e(r,o){if(o)return n.resolve(o);if(r)return n.reject(r);var i=t.reduce(function(t,e){return e&&e.then?t+1:t},0);0==i&&n.resolve(t),t.map(function(n,r){n&&n.then&&n.then(function(n){return t[r]=n,e(),n},e)})}if(1!=this._d)throw TypeError();if(!(t instanceof Array))return r.reject(TypeError());var n=new r;return e(),n},r.race=function(t){function e(r,o){if(o)return n.resolve(o);if(r)return n.reject(r);var i=t.reduce(function(t,e){return e&&e.then?t+1:t},0);0==i&&n.resolve(t),t.map(function(t){t&&t.then&&t.then(function(t){e(null,t)},e)})}if(1!=this._d)throw TypeError();if(!(t instanceof Array))return r.reject(TypeError());if(0==t.length)return new r;var n=new r;return e(),n},r._d=1,e.exports=r}()}).call(e,function(){return this}(),n(2)(t))},function(t){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}}])},function(t){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}}]);