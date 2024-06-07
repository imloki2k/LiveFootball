(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{8954:function(e,t,r){"use strict";r.d(t,{$s:function(){return O},BH:function(){return m},L:function(){return l},LL:function(){return S},ZR:function(){return I},aH:function(){return g},eu:function(){return v},hl:function(){return y},m9:function(){return D},ru:function(){return b},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let a of n){if(!i.includes(a))return!1;let n=t[a],o=r[a];if(E(n)&&E(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},zI:function(){return w}});var n=r(5566);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},a=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{let a=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4,f=(15&o)<<2|c>>6,d=63&c;s||(d=64,a||(f=64)),n.push(r[l],r[u],r[f],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],a=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,c=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==c)throw new s;let l=i<<2|a>>4;if(n.push(l),64!==o){let e=a<<4&240|o>>2;if(n.push(e),64!==c){let e=o<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let c=function(e){let t=i(e);return o.encodeByteArray(t,!0)},l=function(e){return c(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},f=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},h=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return f()||d()||h()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}function b(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function y(){try{return"object"==typeof indexedDB}catch(e){return!1}}function v(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function w(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class I extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(_,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${n}).`;return new I(n,o,r)}}let _=/\{\$([^}]+)}/g;function E(e){return null!==e&&"object"==typeof e}function O(e,t=1e3,r=2){let n=t*Math.pow(r,e);return Math.min(144e5,n+Math.round(.5*n*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return e&&e._delegate?e._delegate:e}},3472:function(e,t,r){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return i}});let n=r(5355);function i(e){let{createServerReference:t}=r(6671);return t(e,n.callServer)}},7933:function(e,t,r){"use strict";r.d(t,{OJ:function(){return v},p5:function(){return D}});var n="persist:",i="persist/FLUSH",a="persist/REHYDRATE",o="persist/PAUSE",s="persist/PERSIST",c="persist/PURGE",l="persist/REGISTER";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e,t,r,n){n.debug;var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r);return e&&"object"===u(e)&&Object.keys(e).forEach(function(n){"_persist"!==n&&t[n]===r[n]&&(i[n]=e[n])}),i}function h(e){return JSON.stringify(e)}function p(e){var t,r=e.transforms||[],i="".concat(void 0!==e.keyPrefix?e.keyPrefix:n).concat(e.key),a=e.storage;return e.debug,t=!1===e.deserialize?function(e){return e}:"function"==typeof e.deserialize?e.deserialize:g,a.getItem(i).then(function(e){if(e)try{var n={},i=t(e);return Object.keys(i).forEach(function(e){n[e]=r.reduceRight(function(t,r){return r.out(t,e,i)},t(i[e]))}),n}catch(e){throw e}})}function g(e){return JSON.parse(e)}function m(e){}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function v(e,t){var r=void 0!==e.version?e.version:-1;e.debug;var l=void 0===e.stateReconciler?d:e.stateReconciler,u=e.getStoredState||p,f=void 0!==e.timeout?e.timeout:5e3,g=null,b=!1,v=!0,w=function(e){return e._persist.rehydrated&&g&&!v&&g.update(e),e};return function(d,p){var I,S,_=d||{},E=_._persist,O=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(_,["_persist"]);if(p.type===s){var D=!1,C=function(t,r){D||(p.rehydrate(e.key,t,r),D=!0)};if(f&&setTimeout(function(){D||C(void 0,Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},f),v=!1,g||(g=function(e){var t,r=e.blacklist||null,i=e.whitelist||null,a=e.transforms||[],o=e.throttle||0,s="".concat(void 0!==e.keyPrefix?e.keyPrefix:n).concat(e.key),c=e.storage;t=!1===e.serialize?function(e){return e}:"function"==typeof e.serialize?e.serialize:h;var l=e.writeFailHandler||null,u={},f={},d=[],p=null,g=null;function m(){if(0===d.length){p&&clearInterval(p),p=null;return}var e=d.shift(),r=a.reduce(function(t,r){return r.in(t,e,u)},u[e]);if(void 0!==r)try{f[e]=t(r)}catch(e){console.error("redux-persist/createPersistoid: error serializing state",e)}else delete f[e];0===d.length&&(Object.keys(f).forEach(function(e){void 0===u[e]&&delete f[e]}),g=c.setItem(s,t(f)).catch(y))}function b(e){return(!i||-1!==i.indexOf(e)||"_persist"===e)&&(!r||-1===r.indexOf(e))}function y(e){l&&l(e)}return{update:function(e){Object.keys(e).forEach(function(t){b(t)&&u[t]!==e[t]&&-1===d.indexOf(t)&&d.push(t)}),Object.keys(u).forEach(function(t){void 0===e[t]&&b(t)&&-1===d.indexOf(t)&&void 0!==u[t]&&d.push(t)}),null===p&&(p=setInterval(m,o)),u=e},flush:function(){for(;0!==d.length;)m();return g||Promise.resolve()}}}(e)),E)return y({},t(O,p),{_persist:E});if("function"!=typeof p.rehydrate||"function"!=typeof p.register)throw Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return p.register(e.key),u(e).then(function(t){(e.migrate||function(e,t){return Promise.resolve(e)})(t,r).then(function(e){C(e)},function(e){C(void 0,e)})},function(e){C(void 0,e)}),y({},t(O,p),{_persist:{version:r,rehydrated:!1}})}if(p.type===c)return b=!0,p.result((I=e.storage,S="".concat(void 0!==e.keyPrefix?e.keyPrefix:n).concat(e.key),I.removeItem(S,m))),y({},t(O,p),{_persist:E});if(p.type===i)return p.result(g&&g.flush()),y({},t(O,p),{_persist:E});if(p.type===o)v=!0;else if(p.type===a){if(b)return y({},O,{_persist:y({},E,{rehydrated:!0})});if(p.key===e.key){var A=t(O,p),T=p.payload;return w(y({},!1!==l&&void 0!==T?l(T,d,A,e):A,{_persist:y({},E,{rehydrated:!0})}))}}if(!E)return t(d,p);var j=t(O,p);return j===O?d:w(y({},j,{_persist:E}))}}var w=r(3646);function I(e){return function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(r,!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var E={registry:[],bootstrapped:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return _({},e,{registry:[].concat(I(e.registry),[t.key])});case a:var r=e.registry.indexOf(t.key),n=I(e.registry);return n.splice(r,1),_({},e,{registry:n,bootstrapped:0===n.length});default:return e}};function D(e,t,r){var n=r||!1,u=(0,w.MT)(O,E,t&&t.enhancer?t.enhancer:void 0),f=function(e){u.dispatch({type:l,key:e})},d=function(t,r,i){var o={type:a,payload:r,err:i,key:t};e.dispatch(o),u.dispatch(o),n&&h.getState().bootstrapped&&(n(),n=!1)},h=_({},u,{purge:function(){var t=[];return e.dispatch({type:c,result:function(e){t.push(e)}}),Promise.all(t)},flush:function(){var t=[];return e.dispatch({type:i,result:function(e){t.push(e)}}),Promise.all(t)},pause:function(){e.dispatch({type:o})},persist:function(){e.dispatch({type:s,register:f,rehydrate:d})}});return t&&t.manualPersist||h.persist(),h}},7722:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t=(0,i.default)(e);return{getItem:function(e){return new Promise(function(r,n){r(t.getItem(e))})},setItem:function(e,r){return new Promise(function(n,i){n(t.setItem(e,r))})},removeItem:function(e){return new Promise(function(r,n){r(t.removeItem(e))})}}};var n,i=(n=r(3434))&&n.__esModule?n:{default:n}},3434:function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(){}t.__esModule=!0,t.default=function(e){var t="".concat(e,"Storage");return!function(e){if(("undefined"==typeof self?"undefined":r(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch(e){return!1}return!0}(t)?i:self[t]};var i={getItem:n,setItem:n,removeItem:n}},6295:function(e,t,r){"use strict";t.Z=void 0;var n,i=(0,((n=r(7722))&&n.__esModule?n:{default:n}).default)("local");t.Z=i},8822:function(e){e.exports={style:{fontFamily:"'__Inter_edaf02', '__Inter_Fallback_edaf02'",fontStyle:"normal"},className:"__className_edaf02"}},4684:function(e,t,r){"use strict";r.d(t,{KN:function(){return _},Mq:function(){return S},Xd:function(){return b},ZF:function(){return I},qX:function(){return y}});var n=r(6574),i=r(9858),a=r(8954),o=r(3056);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let c="@firebase/app",l="0.10.0",u=new i.Yd("@firebase/app"),f="[DEFAULT]",d={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},h=new Map,p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(r){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function b(e){let t=e.name;if(g.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(g.set(t,e),h.values()))m(r,e);for(let t of p.values())m(t,e);return!0}function y(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let v=new a.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw v.create("app-deleted",{appName:this._name})}}function I(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:f,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw v.create("bad-app-name",{appName:String(o)});if(r||(r=(0,a.aH)()),!r)throw v.create("no-options");let s=h.get(o);if(s){if((0,a.vZ)(r,s.options)&&(0,a.vZ)(i,s.config))return s;throw v.create("duplicate-app",{appName:o})}let c=new n.H0(o);for(let e of g.values())c.addComponent(e);let l=new w(r,i,c);return h.set(o,l),l}function S(e=f){let t=h.get(e);if(!t&&e===f&&(0,a.aH)())return I();if(!t)throw v.create("no-app",{appName:e});return t}function _(e,t,r){var i;let a=null!==(i=d[e])&&void 0!==i?i:e;r&&(a+=`-${r}`);let o=a.match(/\s|\//),s=t.match(/\s|\//);if(o||s){let e=[`Unable to register library "${a}" with version "${t}":`];o&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),u.warn(e.join(" "));return}b(new n.wA(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}let E="firebase-heartbeat-store",O=null;function D(){return O||(O=(0,o.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(E)}catch(e){console.warn(e)}}}).catch(e=>{throw v.create("idb-open",{originalErrorMessage:e.message})})),O}async function C(e){try{let t=(await D()).transaction(E),r=await t.objectStore(E).get(T(e));return await t.done,r}catch(e){if(e instanceof a.ZR)u.warn(e.message);else{let t=v.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}async function A(e,t){try{let r=(await D()).transaction(E,"readwrite"),n=r.objectStore(E);await n.put(t,T(e)),await r.done}catch(e){if(e instanceof a.ZR)u.warn(e.message);else{let t=v.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function T(e){return`${e.name}!${e.options.appId}`}class j{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new k(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=P();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=P(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),L(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),L(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,a.L)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function P(){return new Date().toISOString().substring(0,10)}class k{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await C(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function L(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}b(new n.wA("platform-logger",e=>new s(e),"PRIVATE")),b(new n.wA("heartbeat",e=>new j(e),"PRIVATE")),_(c,l,""),_(c,l,"esm2017"),_("fire-js","")},6574:function(e,t,r){"use strict";r.d(t,{H0:function(){return s},wA:function(){return i}});var n=r(8954);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===a?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9858:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return u}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},s=n.INFO,c={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},l=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=c[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=l,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},3493:function(e,t,r){"use strict";let n,i,a,o;r.d(t,{IH:function(){return eS},Gb:function(){return e_},Kz:function(){return eE}});var s=r(4684),c=r(9858),l=r(8954),u=r(6574),f=r(3056);let d="@firebase/installations",h="0.6.6",p=`w:${h}`,g="FIS_v2",m=new l.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function b(e){return e instanceof l.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function v(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function w(e,t){let r=(await t.json()).error;return m.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function S(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _({appConfig:e,heartbeatServiceProvider:t},{fid:r}){let n=y(e),i=I(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={method:"POST",headers:i,body:JSON.stringify({fid:r,authVersion:g,appId:e.appId,sdkVersion:p})},s=await S(()=>fetch(n,o));if(s.ok){let e=await s.json();return{fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:v(e.authToken)}}throw await w("Create Installation",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C=new Map;function A(e,t){let r=D(e);T(r,t),function(e,t){let r=(!j&&"BroadcastChannel"in self&&((j=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{T(e.data.key,e.data.fid)}),j);r&&r.postMessage({key:e,fid:t}),0===C.size&&j&&(j.close(),j=null)}(r,t)}function T(e,t){let r=C.get(e);if(r)for(let e of r)e(t)}let j=null,P="firebase-installations-store",k=null;function L(){return k||(k=(0,f.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(P)}})),k}async function M(e,t){let r=D(e),n=(await L()).transaction(P,"readwrite"),i=n.objectStore(P),a=await i.get(r);return await i.put(t,r),await n.done,a&&a.fid===t.fid||A(e,t.fid),t}async function B(e){let t=D(e),r=(await L()).transaction(P,"readwrite");await r.objectStore(P).delete(t),await r.done}async function $(e,t){let r=D(e),n=(await L()).transaction(P,"readwrite"),i=n.objectStore(P),a=await i.get(r),o=t(a);return void 0===o?await i.delete(r):await i.put(o,r),await n.done,o&&(!a||a.fid!==o.fid)&&A(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N(e){let t;let r=await $(e.appConfig,r=>{let n=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(m.create("app-offline"))};let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=F(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:R(e)}:{installationEntry:t}}(e,H(r||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return O.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=n.registrationPromise,n.installationEntry});return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function F(e,t){try{let r=await _(e,t);return M(e.appConfig,r)}catch(r){throw b(r)&&409===r.customData.serverCode?await B(e.appConfig):await M(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function R(e){let t=await x(e.appConfig);for(;1===t.registrationStatus;)await E(100),t=await x(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:r}=await N(e);return r||t}return t}function x(e){return $(e,e=>{if(!e)throw m.create("installation-not-found");return H(e)})}function H(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z({appConfig:e,heartbeatServiceProvider:t},r){let n=function(e,{fid:t}){return`${y(e)}/${t}/authTokens:generate`}(e,r),i=function(e,{refreshToken:t}){let r=I(e);return r.append("Authorization",`${g} ${t}`),r}(e,r),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:p,appId:e.appId}})},s=await S(()=>fetch(n,o));if(s.ok)return v(await s.json());throw await w("Generate Auth Token",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t=!1){let r;let n=await $(e.appConfig,n=>{var i;if(!K(n))throw m.create("not-registered");let a=n.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return n;if(1===a.requestStatus)return r=U(e,t),n;{if(!navigator.onLine)throw m.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return r=W(e,t),t}});return r?await r:n.authToken}async function U(e,t){let r=await q(e.appConfig);for(;1===r.authToken.requestStatus;)await E(100),r=await q(e.appConfig);let n=r.authToken;return 0===n.requestStatus?V(e,t):n}function q(e){return $(e,e=>{var t;if(!K(e))throw m.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function W(e,t){try{let r=await z(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await M(e.appConfig,n),r}catch(r){if(b(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await B(e.appConfig);else{let r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await M(e.appConfig,r)}throw r}}function K(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){let{installationEntry:t,registrationPromise:r}=await N(e);return r?r.catch(console.error):V(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t=!1){return await G(e),(await V(e,t)).token}async function G(e){let{registrationPromise:t}=await N(e);t&&await t}function J(e){return m.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y="installations";(0,s.Xd)(new u.wA(Y,e=>{let t=e.getProvider("app").getImmediate(),r=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw J(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=(0,s.qX)(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,s.Xd)(new u.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),r=(0,s.qX)(t,Y).getImmediate();return{getId:()=>Z(r),getToken:e=>X(r,e)}},"PRIVATE")),(0,s.KN)(d,h),(0,s.KN)(d,h,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q="analytics",ee="https://www.googletagmanager.com/gtag/js",et=new c.Yd("@firebase/analytics"),er=new l.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){if(!e.startsWith(ee)){let t=er.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function ei(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function ea(e,t,r,n,i,a){let o=n[i];try{if(o)await t[o];else{let e=(await ei(r)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){et.error(e)}e("config",i,a)}async function eo(e,t,r,n,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);let n=await ei(r);for(let r of e){let e=n.find(e=>e.measurementId===r),i=e&&t[e.appId];if(i)a.push(i);else{a=[];break}}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",n,i||{})}catch(e){et.error(e)}}class es{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}let ec=new es;async function el(e){var t;let{appId:r,apiKey:n}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":n})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",r),o=await fetch(a,i);if(200!==o.status&&304!==o.status){let e="";try{let r=await o.json();(null===(t=r.error)||void 0===t?void 0:t.message)&&(e=r.error.message)}catch(e){}throw er.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function eu(e,t=ec,r){let{appId:n,apiKey:i,measurementId:a}=e.options;if(!n)throw er.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:n};throw er.create("no-api-key")}let o=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new ed;return setTimeout(async()=>{s.abort()},void 0!==r?r:6e4),ef({appId:n,apiKey:i,measurementId:a},o,s,t)}async function ef(e,{throttleEndTimeMillis:t,backoffCount:r},n,i=ec){var a;let{appId:o,measurementId:s}=e;try{await new Promise((e,r)=>{let i=setTimeout(e,Math.max(t-Date.now(),0));n.addEventListener(()=>{clearTimeout(i),r(er.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(s)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:s};throw e}try{let t=await el(e);return i.deleteThrottleMetadata(o),t}catch(u){if(!function(e){if(!(e instanceof l.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(u)){if(i.deleteThrottleMetadata(o),s)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:o,measurementId:s};throw u}let t=503===Number(null===(a=null==u?void 0:u.customData)||void 0===a?void 0:a.httpStatus)?(0,l.$s)(r,i.intervalMillis,30):(0,l.$s)(r,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+t,backoffCount:r+1};return i.setThrottleMetadata(o,c),et.debug(`Calling attemptFetch again in ${t} millis`),ef(e,c,n,i)}}class ed{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function eh(e,t,r,n,i){if(i&&i.global){e("event",r,n);return}{let i=await t;e("event",r,Object.assign(Object.assign({},n),{send_to:i}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(){if(!(0,l.hl)())return et.warn(er.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,l.eu)()}catch(e){return et.warn(er.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function eg(e,t,r,a,o,s,c){var l;let u=eu(e);u.then(t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>et.error(e)),t.push(u);let f=ep().then(e=>e?a.getId():void 0),[d,h]=await Promise.all([u,f]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(ee)&&t.src.includes(e))return t;return null}(s)&&function(e,t){let r;let n=(window.trustedTypes&&(r=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:en})),r),i=document.createElement("script"),a=`${ee}?l=${e}&id=${t}`;i.src=n?null==n?void 0:n.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}(s,d.measurementId),i&&(o("consent","default",i),i=void 0),o("js",new Date);let p=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{};return p.origin="firebase",p.update=!0,null!=h&&(p.firebase_id=h),o("config",d.measurementId,p),n&&(o("set",n),n=void 0),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.app=e}_delete(){return delete eb[this.app.options.appId],Promise.resolve()}}let eb={},ey=[],ev={},ew="dataLayer",eI=!1;function eS(e=(0,s.Mq)()){e=(0,l.m9)(e);let t=(0,s.qX)(e,Q);return t.isInitialized()?t.getImmediate():function(e,t={}){let r=(0,s.qX)(e,Q);if(r.isInitialized()){let e=r.getImmediate();if((0,l.vZ)(t,r.getOptions()))return e;throw er.create("already-initialized")}return r.initialize({options:t})}(e)}async function e_(){if((0,l.ru)()||!(0,l.zI)()||!(0,l.hl)())return!1;try{return await (0,l.eu)()}catch(e){return!1}}function eE(e,t,r,n){e=(0,l.m9)(e),eh(o,eb[e.app.options.appId],t,r,n).catch(e=>et.error(e))}let eO="@firebase/analytics",eD="0.10.2";(0,s.Xd)(new u.wA(Q,(e,{options:t})=>(function(e,t,r){!function(){let e=[];if((0,l.ru)()&&e.push("This is a browser extension environment."),(0,l.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),r=er.create("invalid-analytics-context",{errorInfo:t});et.warn(r.message)}}();let n=e.options.appId;if(!n)throw er.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw er.create("no-api-key")}if(null!=eb[n])throw er.create("already-exists",{id:n});if(!eI){var i,s;let e,t;e=[],Array.isArray(window[ew])?e=window[ew]:window[ew]=e;let{wrappedGtag:r,gtagCore:n}=(i="gtag",t=function(...e){window[ew].push(arguments)},window[i]&&"function"==typeof window[i]&&(t=window[i]),window[i]=(s=t,async function(e,...t){try{if("event"===e){let[e,r]=t;await eo(s,eb,ey,e,r)}else if("config"===e){let[e,r]=t;await ea(s,eb,ey,ev,e,r)}else if("consent"===e){let[e]=t;s("consent","update",e)}else if("get"===e){let[e,r,n]=t;s("get",e,r,n)}else if("set"===e){let[e]=t;s("set",e)}else s(e,...t)}catch(e){et.error(e)}}),{gtagCore:t,wrappedGtag:window[i]});o=r,a=n,eI=!0}return eb[n]=eg(e,ey,ev,t,a,ew,r),new em(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),(0,s.Xd)(new u.wA("analytics-internal",function(e){try{let t=e.getProvider(Q).getImmediate();return{logEvent:(e,r,n)=>eE(t,e,r,n)}}catch(e){throw er.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),(0,s.KN)(eO,eD),(0,s.KN)(eO,eD,"esm2017")},6142:function(e,t,r){"use strict";r.d(t,{ZF:function(){return n.ZF}});var n=r(4684);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","10.10.0","app")},3056:function(e,t,r){"use strict";var n;let i,a;r.d(t,{X3:function(){return g}});let o=(e,t)=>t.some(t=>e instanceof t),s=new WeakMap,c=new WeakMap,l=new WeakMap,u=new WeakMap,f=new WeakMap,d={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return h(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function h(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(h(e.result)),n()},a=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&s.set(t,e)}).catch(()=>{}),f.set(t,e),t}(e);if(u.has(e))return u.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),h(s.get(this))}:function(...e){return h(t.apply(p(this),e))}:function(e,...r){let n=t.call(p(this),e,...r);return l.set(n,e.sort?e.sort():[e]),h(n)}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});c.set(e,t)}(t),o(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return r!==e&&(u.set(e,r),f.set(r,e)),r}let p=e=>f.get(e);function g(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=h(o);return n&&o.addEventListener("upgradeneeded",e=>{n(h(o.result),e.oldVersion,e.newVersion,h(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}let m=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],y=new Map;function v(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(y.get(t))return y.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=b.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||m.includes(r)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&a.done]))[0]};return y.set(t,a),a}d={...n=d,get:(e,t,r)=>v(e,t)||n.get(e,t,r),has:(e,t)=>!!v(e,t)||n.has(e,t)}}}]);