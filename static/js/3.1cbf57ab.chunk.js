(this.webpackJsonptally=this.webpackJsonptally||[]).push([[3],{218:function(e,t,r){"use strict";var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(387),i=o.keccak224,a=o.keccak384,f=o.keccak256,u=o.keccak512,c=r(733),s=r(266),l=r(316),d=r(216),p=r(241),h=r(214).Buffer;Object.assign(t,r(268)),t.MAX_INTEGER=new d("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),t.TWO_POW256=new d("10000000000000000000000000000000000000000000000000000000000000000",16),t.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",t.SHA3_NULL_S=t.KECCAK256_NULL_S,t.KECCAK256_NULL=h.from(t.KECCAK256_NULL_S,"hex"),t.SHA3_NULL=t.KECCAK256_NULL,t.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",t.SHA3_RLP_ARRAY_S=t.KECCAK256_RLP_ARRAY_S,t.KECCAK256_RLP_ARRAY=h.from(t.KECCAK256_RLP_ARRAY_S,"hex"),t.SHA3_RLP_ARRAY=t.KECCAK256_RLP_ARRAY,t.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",t.SHA3_RLP_S=t.KECCAK256_RLP_S,t.KECCAK256_RLP=h.from(t.KECCAK256_RLP_S,"hex"),t.SHA3_RLP=t.KECCAK256_RLP,t.BN=d,t.rlp=l,t.secp256k1=c,t.zeros=function(e){return h.allocUnsafe(e).fill(0)},t.zeroAddress=function(){var e=t.zeros(20);return t.bufferToHex(e)},t.setLengthLeft=t.setLength=function(e,r,n){var o=t.zeros(r);return e=t.toBuffer(e),n?e.length<r?(e.copy(o),o):e.slice(0,r):e.length<r?(e.copy(o,r-e.length),o):e.slice(-r)},t.setLengthRight=function(e,r){return t.setLength(e,r,!0)},t.unpad=t.stripZeros=function(e){for(var r=(e=t.stripHexPrefix(e))[0];e.length>0&&"0"===r.toString();)r=(e=e.slice(1))[0];return e},t.toBuffer=function(e){if(!h.isBuffer(e))if(Array.isArray(e))e=h.from(e);else if("string"===typeof e)e=t.isHexString(e)?h.from(t.padToEven(t.stripHexPrefix(e)),"hex"):h.from(e);else if("number"===typeof e)e=t.intToBuffer(e);else if(null===e||void 0===e)e=h.allocUnsafe(0);else if(d.isBN(e))e=e.toArrayLike(h);else{if(!e.toArray)throw new Error("invalid type");e=h.from(e.toArray())}return e},t.bufferToInt=function(e){return new d(t.toBuffer(e)).toNumber()},t.bufferToHex=function(e){return"0x"+(e=t.toBuffer(e)).toString("hex")},t.fromSigned=function(e){return new d(e).fromTwos(256)},t.toUnsigned=function(e){return h.from(e.toTwos(256).toArray())},t.keccak=function(e,r){switch(e=t.toBuffer(e),r||(r=256),r){case 224:return i(e);case 256:return f(e);case 384:return a(e);case 512:return u(e);default:throw new Error("Invald algorithm: keccak"+r)}},t.keccak256=function(e){return t.keccak(e)},t.sha3=t.keccak,t.sha256=function(e){return e=t.toBuffer(e),p("sha256").update(e).digest()},t.ripemd160=function(e,r){e=t.toBuffer(e);var n=p("rmd160").update(e).digest();return!0===r?t.setLength(n,32):n},t.rlphash=function(e){return t.keccak(l.encode(e))},t.isValidPrivate=function(e){return c.privateKeyVerify(e)},t.isValidPublic=function(e,t){return 64===e.length?c.publicKeyVerify(h.concat([h.from([4]),e])):!!t&&c.publicKeyVerify(e)},t.pubToAddress=t.publicToAddress=function(e,r){return e=t.toBuffer(e),r&&64!==e.length&&(e=c.publicKeyConvert(e,!1).slice(1)),s(64===e.length),t.keccak(e).slice(-20)};var v=t.privateToPublic=function(e){return e=t.toBuffer(e),c.publicKeyCreate(e,!1).slice(1)};t.importPublic=function(e){return 64!==(e=t.toBuffer(e)).length&&(e=c.publicKeyConvert(e,!1).slice(1)),e},t.ecsign=function(e,t){var r=c.sign(e,t),n={};return n.r=r.signature.slice(0,32),n.s=r.signature.slice(32,64),n.v=r.recovery+27,n},t.hashPersonalMessage=function(e){var r=t.toBuffer("\x19Ethereum Signed Message:\n"+e.length.toString());return t.keccak(h.concat([r,e]))},t.ecrecover=function(e,r,n,o){var i=h.concat([t.setLength(n,32),t.setLength(o,32)],64),a=r-27;if(0!==a&&1!==a)throw new Error("Invalid signature v value");var f=c.recover(e,i,a);return c.publicKeyConvert(f,!1).slice(1)},t.toRpcSig=function(e,r,n){if(27!==e&&28!==e)throw new Error("Invalid recovery id");return t.bufferToHex(h.concat([t.setLengthLeft(r,32),t.setLengthLeft(n,32),t.toBuffer(e-27)]))},t.fromRpcSig=function(e){if(65!==(e=t.toBuffer(e)).length)throw new Error("Invalid signature length");var r=e[64];return r<27&&(r+=27),{v:r,r:e.slice(0,32),s:e.slice(32,64)}},t.privateToAddress=function(e){return t.publicToAddress(v(e))},t.isValidAddress=function(e){return/^0x[0-9a-fA-F]{40}$/.test(e)},t.isZeroAddress=function(e){return t.zeroAddress()===t.addHexPrefix(e)},t.toChecksumAddress=function(e){e=t.stripHexPrefix(e).toLowerCase();for(var r=t.keccak(e).toString("hex"),n="0x",o=0;o<e.length;o++)parseInt(r[o],16)>=8?n+=e[o].toUpperCase():n+=e[o];return n},t.isValidChecksumAddress=function(e){return t.isValidAddress(e)&&t.toChecksumAddress(e)===e},t.generateAddress=function(e,r){return e=t.toBuffer(e),r=(r=new d(r)).isZero()?null:h.from(r.toArray()),t.rlphash([e,r]).slice(-20)},t.isPrecompiled=function(e){var r=t.unpad(e);return 1===r.length&&r[0]>=1&&r[0]<=8},t.addHexPrefix=function(e){return"string"!==typeof e||t.isHexPrefixed(e)?e:"0x"+e},t.isValidSignature=function(e,t,r,n){var o=new d("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),i=new d("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);return 32===t.length&&32===r.length&&((27===e||28===e)&&(t=new d(t),r=new d(r),!(t.isZero()||t.gt(i)||r.isZero()||r.gt(i))&&(!1!==n||1!==new d(r).cmp(o))))},t.baToJSON=function(e){if(h.isBuffer(e))return"0x"+e.toString("hex");if(e instanceof Array){for(var r=[],n=0;n<e.length;n++)r.push(t.baToJSON(e[n]));return r}},t.defineProperties=function(e,r,o){if(e.raw=[],e._fields=[],e.toJSON=function(r){if(r){var n={};return e._fields.forEach((function(t){n[t]="0x"+e[t].toString("hex")})),n}return t.baToJSON(this.raw)},e.serialize=function(){return l.encode(e.raw)},r.forEach((function(r,n){function o(){return e.raw[n]}function i(o){"00"!==(o=t.toBuffer(o)).toString("hex")||r.allowZero||(o=h.allocUnsafe(0)),r.allowLess&&r.length?(o=t.stripZeros(o),s(r.length>=o.length,"The field "+r.name+" must not have more "+r.length+" bytes")):r.allowZero&&0===o.length||!r.length||s(r.length===o.length,"The field "+r.name+" must have byte length of "+r.length),e.raw[n]=o}e._fields.push(r.name),Object.defineProperty(e,r.name,{enumerable:!0,configurable:!0,get:o,set:i}),r.default&&(e[r.name]=r.default),r.alias&&Object.defineProperty(e,r.alias,{enumerable:!1,configurable:!0,set:i,get:o})})),o)if("string"===typeof o&&(o=h.from(t.stripHexPrefix(o),"hex")),h.isBuffer(o)&&(o=l.decode(o)),Array.isArray(o)){if(o.length>e._fields.length)throw new Error("wrong number of fields in data");o.forEach((function(r,n){e[e._fields[n]]=t.toBuffer(r)}))}else{if("object"!==("undefined"===typeof o?"undefined":n(o)))throw new Error("invalid data");var i=Object.keys(o);r.forEach((function(t){-1!==i.indexOf(t.name)&&(e[t.name]=o[t.name]),-1!==i.indexOf(t.alias)&&(e[t.alias]=o[t.alias])}))}}},268:function(e,t,r){"use strict";(function(t){var n=r(537),o=r(538);function i(e){var t=e;if("string"!==typeof t)throw new Error("[ethjs-util] while padding to even, value must be string, is currently "+typeof t+", while padToEven.");return t.length%2&&(t="0"+t),t}function a(e){return"0x"+e.toString(16)}e.exports={arrayContainsArray:function(e,t,r){if(!0!==Array.isArray(e))throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '"+typeof e+"'");if(!0!==Array.isArray(t))throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '"+typeof t+"'");return t[Boolean(r)?"some":"every"]((function(t){return e.indexOf(t)>=0}))},intToBuffer:function(e){var r=a(e);return new t(i(r.slice(2)),"hex")},getBinarySize:function(e){if("string"!==typeof e)throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '"+typeof e+"'.");return t.byteLength(e,"utf8")},isHexPrefixed:n,stripHexPrefix:o,padToEven:i,intToHex:a,fromAscii:function(e){for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r).toString(16);t+=n.length<2?"0"+n:n}return"0x"+t},fromUtf8:function(e){return"0x"+i(new t(e,"utf8").toString("hex")).replace(/^0+|0+$/g,"")},toAscii:function(e){var t="",r=0,n=e.length;for("0x"===e.substring(0,2)&&(r=2);r<n;r+=2){var o=parseInt(e.substr(r,2),16);t+=String.fromCharCode(o)}return t},toUtf8:function(e){return new t(i(o(e).replace(/^0+|0+$/g,"")),"hex").toString("utf8")},getKeys:function(e,t,r){if(!Array.isArray(e))throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '"+typeof e+"'");if("string"!==typeof t)throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '"+typeof t+"'.");for(var n=[],o=0;o<e.length;o++){var i=e[o][t];if(r&&!i)i="";else if("string"!==typeof i)throw new Error("invalid abi");n.push(i)}return n},isHexString:function(e,t){return!("string"!==typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!t||e.length===2+2*t)}}}).call(this,r(209).Buffer)},269:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAsync=void 0;var n,o=r(801),i=(n=o)&&n.__esModule?n:{default:n};var a="function"===typeof Symbol;function f(e){return a&&"AsyncFunction"===e[Symbol.toStringTag]}t.default=function(e){return f(e)?(0,i.default)(e):e},t.isAsync=f},318:function(e,t){e.exports=function(){}},324:function(e,t,r){"use strict";(function(t){var n=r(218),o=r(978),i=n.BN,a=new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),f=function(){function e(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=r||{};var o=[{name:"nonce",length:32,allowLess:!0,default:new t([])},{name:"gasPrice",length:32,allowLess:!0,default:new t([])},{name:"gasLimit",alias:"gas",length:32,allowLess:!0,default:new t([])},{name:"to",allowZero:!0,length:20,default:new t([])},{name:"value",length:32,allowLess:!0,default:new t([])},{name:"data",alias:"input",allowZero:!0,default:new t([])},{name:"v",allowZero:!0,default:new t([28])},{name:"r",length:32,allowZero:!0,allowLess:!0,default:new t([])},{name:"s",length:32,allowZero:!0,allowLess:!0,default:new t([])}];n.defineProperties(this,o,r),Object.defineProperty(this,"from",{enumerable:!0,configurable:!0,get:this.getSenderAddress.bind(this)});var i=n.bufferToInt(this.v),a=Math.floor((i-35)/2);a<0&&(a=0),this._chainId=a||r.chainId||0,this._homestead=!0}return e.prototype.toCreationAddress=function(){return""===this.to.toString("hex")},e.prototype.hash=function(e){void 0===e&&(e=!0);var t=void 0;if(e)t=this.raw;else if(this._chainId>0){var r=this.raw.slice();this.v=this._chainId,this.r=0,this.s=0,t=this.raw,this.raw=r}else t=this.raw.slice(0,6);return n.rlphash(t)},e.prototype.getChainId=function(){return this._chainId},e.prototype.getSenderAddress=function(){if(this._from)return this._from;var e=this.getSenderPublicKey();return this._from=n.publicToAddress(e),this._from},e.prototype.getSenderPublicKey=function(){if((!this._senderPubKey||!this._senderPubKey.length)&&!this.verifySignature())throw new Error("Invalid Signature");return this._senderPubKey},e.prototype.verifySignature=function(){var e=this.hash(!1);if(this._homestead&&1===new i(this.s).cmp(a))return!1;try{var t=n.bufferToInt(this.v);this._chainId>0&&(t-=2*this._chainId+8),this._senderPubKey=n.ecrecover(e,t,this.r,this.s)}catch(r){return!1}return!!this._senderPubKey},e.prototype.sign=function(e){var t=this.hash(!1),r=n.ecsign(t,e);this._chainId>0&&(r.v+=2*this._chainId+8),Object.assign(this,r)},e.prototype.getDataFee=function(){for(var e=this.raw[5],t=new i(0),r=0;r<e.length;r++)0===e[r]?t.iaddn(o.txDataZeroGas.v):t.iaddn(o.txDataNonZeroGas.v);return t},e.prototype.getBaseFee=function(){var e=this.getDataFee().iaddn(o.txGas.v);return this._homestead&&this.toCreationAddress()&&e.iaddn(o.txCreation.v),e},e.prototype.getUpfrontCost=function(){return new i(this.gasLimit).imul(new i(this.gasPrice)).iadd(new i(this.value))},e.prototype.validate=function(e){var t=[];return this.verifySignature()||t.push("Invalid Signature"),this.getBaseFee().cmp(new i(this.gasLimit))>0&&t.push(["gas limit is too low. Need at least "+this.getBaseFee()]),void 0===e||!1===e?0===t.length:t.join(" ")},e}();e.exports=f}).call(this,r(209).Buffer)},353:function(e,t,r){var n=r(779),o=r(545);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},354:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t|=0;for(var r=Math.max(e.length-t,0),n=Array(r),o=0;o<r;o++)n[o]=e[t+o];return n},e.exports=t.default},406:function(e,t,r){var n=r(541),o=r(780),i=r(781),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},407:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){if(null!==e){var t=e;e=null,t.apply(this,arguments)}}},e.exports=t.default},408:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},409:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){if(null===e)throw new Error("Callback was already called.");var t=e;e=null,t.apply(this,arguments)}},e.exports=t.default},539:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(778)),o=i(r(804));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)(o.default),e.exports=t.default},540:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){((0,n.default)(e)?d:p)(e,(0,s.default)(t),r)};var n=l(r(353)),o=l(r(546)),i=l(r(782)),a=l(r(549)),f=l(r(318)),u=l(r(407)),c=l(r(409)),s=l(r(269));function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t,r){r=(0,u.default)(r||f.default);var n=0,i=0,a=e.length;function s(e,t){e?r(e):++i!==a&&t!==o.default||r(null)}for(0===a&&r(null);n<a;n++)t(e[n],n,(0,c.default)(s))}var p=(0,a.default)(i.default,1/0);e.exports=t.default},541:function(e,t,r){var n=r(542).Symbol;e.exports=n},542:function(e,t,r){var n=r(543),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},543:function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(81))},544:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},545:function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={},e.exports=t.default},547:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,r,u){if(u=(0,o.default)(u||n.default),e<=0||!t)return u(null);var c=(0,i.default)(t),s=!1,l=0,d=!1;function p(e,t){if(l-=1,e)s=!0,u(e);else{if(t===f.default||s&&l<=0)return s=!0,u(null);d||h()}}function h(){for(d=!0;l<e&&!s;){var t=c();if(null===t)return s=!0,void(l<=0&&u(null));l+=1,r(t.value,t.key,(0,a.default)(p))}d=!1}h()}};var n=u(r(318)),o=u(r(407)),i=u(r(783)),a=u(r(409)),f=u(r(546));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},548:function(e,t){var r=Array.isArray;e.exports=r},549:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return function(r,n,o){return e(r,t,n,o)}},e.exports=t.default},550:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(805)),o=i(r(549));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(n.default,1),e.exports=t.default},733:function(e,t,r){"use strict";(function(t){var n=r(348),o=r(755),i=r(756),a=function(e){return 32===e.length&&n.privateKeyVerify(Uint8Array.from(e))};e.exports={privateKeyVerify:a,privateKeyExport:function(e,t){if(32!==e.length)throw new RangeError("private key length is invalid");var r=o.privateKeyExport(e,t);return i.privateKeyExport(e,r,t)},privateKeyImport:function(e){if(null!==(e=i.privateKeyImport(e))&&32===e.length&&a(e))return e;throw new Error("couldn't import from DER format")},privateKeyNegate:function(e){return t.from(n.privateKeyNegate(Uint8Array.from(e)))},privateKeyModInverse:function(e){if(32!==e.length)throw new Error("private key length is invalid");return t.from(o.privateKeyModInverse(Uint8Array.from(e)))},privateKeyTweakAdd:function(e,r){return t.from(n.privateKeyTweakAdd(Uint8Array.from(e),r))},privateKeyTweakMul:function(e,r){return t.from(n.privateKeyTweakMul(Uint8Array.from(e),Uint8Array.from(r)))},publicKeyCreate:function(e,r){return t.from(n.publicKeyCreate(Uint8Array.from(e),r))},publicKeyConvert:function(e,r){return t.from(n.publicKeyConvert(Uint8Array.from(e),r))},publicKeyVerify:function(e){return(33===e.length||65===e.length)&&n.publicKeyVerify(Uint8Array.from(e))},publicKeyTweakAdd:function(e,r,o){return t.from(n.publicKeyTweakAdd(Uint8Array.from(e),Uint8Array.from(r),o))},publicKeyTweakMul:function(e,r,o){return t.from(n.publicKeyTweakMul(Uint8Array.from(e),Uint8Array.from(r),o))},publicKeyCombine:function(e,r){var o=[];return e.forEach((function(e){o.push(Uint8Array.from(e))})),t.from(n.publicKeyCombine(o,r))},signatureNormalize:function(e){return t.from(n.signatureNormalize(Uint8Array.from(e)))},signatureExport:function(e){return t.from(n.signatureExport(Uint8Array.from(e)))},signatureImport:function(e){return t.from(n.signatureImport(Uint8Array.from(e)))},signatureImportLax:function(e){if(0===e.length)throw new RangeError("signature length is invalid");var t=i.signatureImportLax(e);if(null===t)throw new Error("couldn't parse DER signature");return o.signatureImport(t)},sign:function(e,r,o){if(null===o)throw new TypeError("options should be an Object");var i=void 0;if(o){if(i={},null===o.data)throw new TypeError("options.data should be a Buffer");if(o.data){if(32!==o.data.length)throw new RangeError("options.data length is invalid");i.data=new Uint8Array(o.data)}if(null===o.noncefn)throw new TypeError("options.noncefn should be a Function");o.noncefn&&(i.noncefn=function(e,r,n,i,a){var f=null!=n?t.from(n):null,u=null!=i?t.from(i):null,c=t.from("");return o.noncefn&&(c=o.noncefn(t.from(e),t.from(r),f,u,a)),Uint8Array.from(c)})}var a=n.ecdsaSign(Uint8Array.from(e),Uint8Array.from(r),i);return{signature:t.from(a.signature),recovery:a.recid}},verify:function(e,t,r){return n.ecdsaVerify(Uint8Array.from(t),Uint8Array.from(e),r)},recover:function(e,r,o,i){return t.from(n.ecdsaRecover(Uint8Array.from(r),o,Uint8Array.from(e),i))},ecdh:function(e,r){return t.from(n.ecdh(Uint8Array.from(e),Uint8Array.from(r),{}))},ecdhUnsafe:function(e,r,n){if(33!==e.length&&65!==e.length)throw new RangeError("public key length is invalid");if(32!==r.length)throw new RangeError("private key length is invalid");return t.from(o.ecdhUnsafe(Uint8Array.from(e),Uint8Array.from(r),n))}}}).call(this,r(209).Buffer)},755:function(e,t,r){"use strict";(function(e){var n=r(216),o=new(0,r(253).ec)("secp256k1"),i=o.curve;t.privateKeyExport=function(e,t){var r=new n(e);if(r.ucmp(i.n)>=0)throw new Error("couldn't export to DER format");var f=o.g.mul(r);return a(f.getX(),f.getY(),t)},t.privateKeyModInverse=function(t){var r=new n(t);if(r.ucmp(i.n)>=0||r.isZero())throw new Error("private key range is invalid");return r.invm(i.n).toArrayLike(e,"be",32)},t.signatureImport=function(t){var r=new n(t.r);r.ucmp(i.n)>=0&&(r=new n(0));var o=new n(t.s);return o.ucmp(i.n)>=0&&(o=new n(0)),e.concat([r.toArrayLike(e,"be",32),o.toArrayLike(e,"be",32)])},t.ecdhUnsafe=function(e,t,r){var f=o.keyFromPublic(e),u=new n(t);if(u.ucmp(i.n)>=0||u.isZero())throw new Error("scalar was invalid (zero or overflow)");var c=f.pub.mul(u);return a(c.getX(),c.getY(),r)};var a=function(t,r,n){var o=void 0;return n?((o=e.alloc(33))[0]=r.isOdd()?3:2,t.toArrayLike(e,"be",32).copy(o,1)):((o=e.alloc(65))[0]=4,t.toArrayLike(e,"be",32).copy(o,1),r.toArrayLike(e,"be",32).copy(o,33)),o}}).call(this,r(209).Buffer)},756:function(e,t,r){"use strict";(function(e){var r=e.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),n=e.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);t.privateKeyExport=function(t,o,i){var a=e.from(i?r:n);return t.copy(a,i?8:9),o.copy(a,i?181:214),a},t.privateKeyImport=function(e){var t=e.length,r=0;if(t<r+1||48!==e[r])return null;if(t<(r+=1)+1||!(128&e[r]))return null;var n=127&e[r];if(n<1||n>2)return null;if(t<(r+=1)+n)return null;var o=e[r+n-1]|(n>1?e[r+n-2]<<8:0);return t<(r+=n)+o||t<r+3||2!==e[r]||1!==e[r+1]||1!==e[r+2]||t<(r+=3)+2||4!==e[r]||e[r+1]>32||t<r+2+e[r+1]?null:e.slice(r+2,r+2+e[r+1])},t.signatureImportLax=function(t){var r=e.alloc(32,0),n=e.alloc(32,0),o=t.length,i=0;if(48!==t[i++])return null;var a=t[i++];if(128&a&&(i+=a-128)>o)return null;if(2!==t[i++])return null;var f=t[i++];if(128&f){if(i+(a=f-128)>o)return null;for(;a>0&&0===t[i];i+=1,a-=1);for(f=0;a>0;i+=1,a-=1)f=(f<<8)+t[i]}if(f>o-i)return null;var u=i;if(i+=f,2!==t[i++])return null;var c=t[i++];if(128&c){if(i+(a=c-128)>o)return null;for(;a>0&&0===t[i];i+=1,a-=1);for(c=0;a>0;i+=1,a-=1)c=(c<<8)+t[i]}if(c>o-i)return null;var s=i;for(i+=c;f>0&&0===t[u];f-=1,u+=1);if(f>32)return null;var l=t.slice(u,u+f);for(l.copy(r,32-l.length);c>0&&0===t[s];c-=1,s+=1);if(c>32)return null;var d=t.slice(s,s+c);return d.copy(n,32-d.length),{r:r,s:n}}}).call(this,r(209).Buffer)},778:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,r,i){return e(n.default,t,(0,o.default)(r),i)}};var n=i(r(540)),o=i(r(269));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},779:function(e,t,r){var n=r(406),o=r(544);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},780:function(e,t,r){var n=r(541),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,f=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,f),r=e[f];try{e[f]=void 0;var n=!0}catch(u){}var o=a.call(e);return n&&(t?e[f]=r:delete e[f]),o}},781:function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},782:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,i){(0,n.default)(t)(e,(0,o.default)(r),i)};var n=i(r(547)),o=i(r(269));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},783:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,n.default)(e))return function(e){var t=-1,r=e.length;return function(){return++t<r?{value:e[t],key:t}:null}}(e);var t=(0,o.default)(e);return t?function(e){var t=-1;return function(){var r=e.next();return r.done?null:(t++,{value:r.value,key:t})}}(t):function(e){var t=(0,i.default)(e),r=-1,n=t.length;return function(){var o=t[++r];return r<n?{value:e[o],key:o}:null}}(e)};var n=a(r(353)),o=a(r(784)),i=a(r(785));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},784:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return n&&e[n]&&e[n]()};var n="function"===typeof Symbol&&Symbol.iterator;e.exports=t.default},785:function(e,t,r){var n=r(786),o=r(797),i=r(353);e.exports=function(e){return i(e)?n(e):o(e)}},786:function(e,t,r){var n=r(787),o=r(788),i=r(548),a=r(790),f=r(792),u=r(793),c=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=i(e),s=!r&&o(e),l=!r&&!s&&a(e),d=!r&&!s&&!l&&u(e),p=r||s||l||d,h=p?n(e.length,String):[],v=h.length;for(var y in e)!t&&!c.call(e,y)||p&&("length"==y||l&&("offset"==y||"parent"==y)||d&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||f(y,v))||h.push(y);return h}},787:function(e,t){e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},788:function(e,t,r){var n=r(789),o=r(408),i=Object.prototype,a=i.hasOwnProperty,f=i.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(e){return o(e)&&a.call(e,"callee")&&!f.call(e,"callee")};e.exports=u},789:function(e,t,r){var n=r(406),o=r(408);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},790:function(e,t,r){(function(e){var n=r(542),o=r(791),i=t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,f=a&&a.exports===i?n.Buffer:void 0,u=(f?f.isBuffer:void 0)||o;e.exports=u}).call(this,r(111)(e))},791:function(e,t){e.exports=function(){return!1}},792:function(e,t){var r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&r.test(e))&&e>-1&&e%1==0&&e<t}},793:function(e,t,r){var n=r(794),o=r(795),i=r(796),a=i&&i.isTypedArray,f=a?o(a):n;e.exports=f},794:function(e,t,r){var n=r(406),o=r(545),i=r(408),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,e.exports=function(e){return i(e)&&o(e.length)&&!!a[n(e)]}},795:function(e,t){e.exports=function(e){return function(t){return e(t)}}},796:function(e,t,r){(function(e){var n=r(543),o=t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===o&&n.process,f=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(t){}}();e.exports=f}).call(this,r(111)(e))},797:function(e,t,r){var n=r(798),o=r(799),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}},798:function(e,t){var r=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)}},799:function(e,t,r){var n=r(800)(Object.keys,Object);e.exports=n},800:function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},801:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.default)((function(t,r){var o;try{o=e.apply(this,t)}catch(i){return r(i)}(0,n.default)(o)&&"function"===typeof o.then?o.then((function(e){f(r,null,e)}),(function(e){f(r,e.message?e:new Error(e))})):r(null,o)}))};var n=a(r(544)),o=a(r(802)),i=a(r(803));function a(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){try{e(t,r)}catch(n){(0,i.default)(u,n)}}function u(e){throw e}e.exports=t.default},802:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=(0,i.default)(arguments),r=t.pop();e.call(this,t,r)}};var n,o=r(354),i=(n=o)&&n.__esModule?n:{default:n};e.exports=t.default},803:function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.hasNextTick=t.hasSetImmediate=void 0,t.fallback=s,t.wrap=l;var o,i=r(354),a=(o=i)&&o.__esModule?o:{default:o};var f,u=t.hasSetImmediate="function"===typeof e&&e,c=t.hasNextTick="object"===typeof n&&"function"===typeof n.nextTick;function s(e){setTimeout(e,0)}function l(e){return function(t){var r=(0,a.default)(arguments,1);e((function(){t.apply(null,r)}))}}f=u?e:c?n.nextTick:s,t.default=l(f)}).call(this,r(535).setImmediate,r(108))},804:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,i){i=i||n.default,t=t||[];var a=[],f=0,u=(0,o.default)(r);e(t,(function(e,t,r){var n=f++;u(e,(function(e,t){a[n]=t,r(e)}))}),(function(e){i(e,a)}))};var n=i(r(318)),o=i(r(269));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},805:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,a){(0,n.default)(t)(e,(0,o.default)((0,i.default)(r)),a)};var n=a(r(547)),o=a(r(806)),i=a(r(269));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},806:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,r,n){return e(t,n)}},e.exports=t.default},978:function(e){e.exports=JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}')}}]);