(this.webpackJsonptally=this.webpackJsonptally||[]).push([[18],{1258:function(e,t,n){"use strict";n.r(t),n.d(t,"PortisConnector",(function(){return u}));var r=n(224),i=n(31);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},u=function(e){var t,r;function u(t){var n,r=t.dAppId,u=t.networks,c=t.config,a=void 0===c?{}:c,f=u.map((function(e){return"number"===typeof e?e:Number(e.chainId)}));return f.every((function(e){return!!s[e]}))||Object(i.a)(!1),(n=e.call(this,{supportedChainIds:f})||this).dAppId=r,n.networks=u,n.config=a,n.handleOnLogout=n.handleOnLogout.bind(o(n)),n.handleOnActiveWalletChanged=n.handleOnActiveWalletChanged.bind(o(n)),n.handleOnError=n.handleOnError.bind(o(n)),n}r=e,(t=u).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var c=u.prototype;return c.handleOnLogout=function(){this.emitDeactivate()},c.handleOnActiveWalletChanged=function(e){this.emitUpdate({account:e})},c.handleOnError=function(e){this.emitError(e)},c.activate=function(){try{var e=function(){return t.portis.onLogout(t.handleOnLogout),t.portis.onActiveWalletChanged(t.handleOnActiveWalletChanged),t.portis.onError(t.handleOnError),Promise.resolve(t.portis.provider.enable().then((function(e){return e[0]}))).then((function(e){return{provider:t.portis.provider,account:e}}))},t=this,r=function(){if(!t.portis)return Promise.resolve(n.e(14).then(n.t.bind(null,1057,7)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(e){t.portis=new e(t.dAppId,"number"===typeof t.networks[0]?s[t.networks[0]]:t.networks[0],t.config)}))}();return Promise.resolve(r&&r.then?r.then(e):e())}catch(i){return Promise.reject(i)}},c.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(e){return Promise.reject(e)}},c.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},c.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},c.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},c.changeNetwork=function(e,t){try{var n=this;return"number"===typeof e?(s[e]||Object(i.a)(!1),n.portis.changeNetwork(s[e],t),n.emitUpdate({chainId:e})):(n.portis.changeNetwork(e,t),n.emitUpdate({chainId:Number(e.chainId)})),Promise.resolve()}catch(r){return Promise.reject(r)}},c.close=function(){try{var e=this;return Promise.resolve(e.portis.logout()).then((function(){e.emitDeactivate()}))}catch(t){return Promise.reject(t)}},u}(r.a)},213:function(e,t,n){"use strict";var r,i="object"===typeof Reflect?Reflect:null,o=i&&"function"===typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"===typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!==e};function u(){u.init.call(this)}e.exports=u,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"===typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}y(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&y(e,"error",t,n)}(e,i,{once:!0})}))},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var c=10;function a(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function h(e,t,n,r){var i,o,s,u;if(a(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"===typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=f(e))>0&&s.length>i&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,u=c,console&&console.warn&&console.warn(u)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=p.bind(r);return i.listener=n,r.wrapFn=i,i}function v(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):m(i,i.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function y(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return f(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var c=i[e];if(void 0===c)return!1;if("function"===typeof c)o(c,this,t);else{var a=c.length,f=m(c,a);for(n=0;n<a;++n)o(f[n],this,t)}return!0},u.prototype.addListener=function(e,t){return h(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return h(this,e,t,!0)},u.prototype.once=function(e,t){return a(t),this.on(e,l(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,l(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,i,o,s;if(a(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return v(this,e,!0)},u.prototype.rawListeners=function(e){return v(this,e,!1)},u.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},u.prototype.listenerCount=d,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(213),i=n(38);var o=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.emitUpdate=function(e){this.emit(i.a.Update,e)},o.emitError=function(e){this.emit(i.a.Error,e)},o.emitDeactivate=function(){this.emit(i.a.Deactivate)},r}(r.EventEmitter)}}]);