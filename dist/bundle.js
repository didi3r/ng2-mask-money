/*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.35.1
  * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=Object.keys;var o=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var i=function(e){try{e();return false}catch(t){return true}};var a=function valueOrFalseIfThrows(e){try{return e()}catch(t){return false}};var u=o(i);var f=function(){return!i(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&f();var c=function foo(){}.name==="foo";var l=Function.call.bind(Array.prototype.forEach);var p=Function.call.bind(Array.prototype.reduce);var v=Function.call.bind(Array.prototype.filter);var y=Function.call.bind(Array.prototype.some);var h=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var b=function(e,t,r){l(n(t),function(n){var o=t[n];h(e,n,o,!!r)})};var g=Function.call.bind(Object.prototype.toString);var d=typeof/abc/==="function"?function IsCallableSlow(e){return typeof e==="function"&&g(e)==="[object Function]"}:function IsCallableFast(e){return typeof e==="function"};var O={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&d(t.toString)){h(e,"toString",t.toString.bind(t),true)}}};var m=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var o=new r;if(typeof t!=="undefined"){n(t).forEach(function(e){O.defineByDescriptor(o,e,t[e])})}return o};var w=function(e,t){if(!Object.setPrototypeOf){return false}return a(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=m(e.prototype,{constructor:{value:r}});return t(r)})};var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=Function.call.bind(String.prototype.indexOf);var E=Function.apply.bind(Array.prototype.indexOf);var P=Function.call.bind(Array.prototype.concat);var C=Function.call.bind(String.prototype.slice);var M=Function.call.bind(Array.prototype.push);var x=Function.apply.bind(Array.prototype.push);var N=Function.call.bind(Array.prototype.shift);var A=Math.max;var R=Math.min;var _=Math.floor;var k=Math.abs;var F=Math.exp;var L=Math.log;var D=Math.sqrt;var z=Function.call.bind(Object.prototype.hasOwnProperty);var q;var W=function(){};var G=S.Symbol||{};var H=G.species||"@@species";var V=Number.isNaN||function isNaN(e){return e!==e};var B=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var $=d(Math.sign)?Math.sign:function sign(e){var t=Number(e);if(t===0){return t}if(V(t)){return t}return t<0?-1:1};var U=function isArguments(e){return g(e)==="[object Arguments]"};var J=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&g(e)!=="[object Array]"&&g(e.callee)==="[object Function]"};var X=U(arguments)?U:J;var K={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},string:function(e){return g(e)==="[object String]"},regex:function(e){return g(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var Z=function overrideNative(e,t,r){var n=e[t];h(e,t,r,true);O.preserveToString(e[t],n)};var Y=typeof G==="function"&&typeof G["for"]==="function"&&K.symbol(G());var Q=K.symbol(G.iterator)?G.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){Q="@@iterator"}if(!S.Reflect){h(S,"Reflect",{},true)}var ee=S.Reflect;var te=String;var re={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!re.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(e==null){throw new TypeError(t||"Cannot call method on "+e)}return e},TypeIsObject:function(e){if(e===void 0||e===null||e===true||e===false){return false}return typeof e==="function"||typeof e==="object"},ToObject:function(e,t){return Object(re.RequireObjectCoercible(e,t))},IsCallable:d,IsConstructor:function(e){return re.IsCallable(e)},ToInt32:function(e){return re.ToNumber(e)>>0},ToUint32:function(e){return re.ToNumber(e)>>>0},ToNumber:function(e){if(g(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=re.ToNumber(e);if(V(t)){return 0}if(t===0||!B(t)){return t}return(t>0?1:-1)*_(k(t))},ToLength:function(e){var t=re.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return V(e)&&V(t)},SameValueZero:function(e,t){return e===t||V(e)&&V(t)},IsIterable:function(e){return re.TypeIsObject(e)&&(typeof e[Q]!=="undefined"||X(e))},GetIterator:function(e){if(X(e)){return new q(e,"value")}var t=re.GetMethod(e,Q);if(!re.IsCallable(t)){throw new TypeError("value is not an iterable")}var r=re.Call(t,e);if(!re.TypeIsObject(r)){throw new TypeError("bad iterator")}return r},GetMethod:function(e,t){var r=re.ToObject(e)[t];if(r===void 0||r===null){return void 0}if(!re.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var r=re.GetMethod(e,"return");if(r===void 0){return}var n,o;try{n=re.Call(r,e)}catch(i){o=i}if(t){return}if(o){throw o}if(!re.TypeIsObject(n)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!re.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=re.IteratorNext(e);var r=re.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n&&ee.construct){return ee.construct(e,t,o)}var i=o.prototype;if(!re.TypeIsObject(i)){i=Object.prototype}var a=m(i);var u=re.Call(e,a,t);return re.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!re.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[H];if(n===void 0||n===null){return t}if(!re.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=re.ToString(e);var i="<"+t;if(r!==""){var a=re.ToString(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var f=i+">";var s=f+o;return s+"</"+t+">"},IsRegExp:function IsRegExp(e){if(!re.TypeIsObject(e)){return false}var t=e[G.match];if(typeof t!=="undefined"){return!!t}return K.regex(e)},ToString:function ToString(e){return te(e)}};if(s&&Y){var ne=function defineWellKnownSymbol(e){if(K.symbol(G[e])){return G[e]}var t=G["for"]("Symbol."+e);Object.defineProperty(G,e,{configurable:false,enumerable:false,writable:false,value:t});return t};if(!K.symbol(G.search)){var oe=ne("search");var ie=String.prototype.search;h(RegExp.prototype,oe,function search(e){return re.Call(ie,e,[this])});var ae=function search(e){var t=re.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var r=re.GetMethod(e,oe);if(typeof r!=="undefined"){return re.Call(r,e,[t])}}return re.Call(ie,t,[re.ToString(e)])};Z(String.prototype,"search",ae)}if(!K.symbol(G.replace)){var ue=ne("replace");var fe=String.prototype.replace;h(RegExp.prototype,ue,function replace(e,t){return re.Call(fe,e,[this,t])});var se=function replace(e,t){var r=re.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var n=re.GetMethod(e,ue);if(typeof n!=="undefined"){return re.Call(n,e,[r,t])}}return re.Call(fe,r,[re.ToString(e),t])};Z(String.prototype,"replace",se)}if(!K.symbol(G.split)){var ce=ne("split");var le=String.prototype.split;h(RegExp.prototype,ce,function split(e,t){return re.Call(le,e,[this,t])});var pe=function split(e,t){var r=re.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var n=re.GetMethod(e,ce);if(typeof n!=="undefined"){return re.Call(n,e,[r,t])}}return re.Call(le,r,[re.ToString(e),t])};Z(String.prototype,"split",pe)}var ve=K.symbol(G.match);var ye=ve&&function(){var e={};e[G.match]=function(){return 42};return"a".match(e)!==42}();if(!ve||ye){var he=ne("match");var be=String.prototype.match;h(RegExp.prototype,he,function match(e){return re.Call(be,e,[this])});var ge=function match(e){var t=re.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var r=re.GetMethod(e,he);if(typeof r!=="undefined"){return re.Call(r,e,[t])}}return re.Call(be,t,[re.ToString(e)])};Z(String.prototype,"match",ge)}}var de=function wrapConstructor(e,t,r){O.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){l(Object.getOwnPropertyNames(e),function(n){if(n in W||r[n]){return}O.proxy(e,n,t)})}else{l(Object.keys(e),function(n){if(n in W||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;O.redefine(e.prototype,"constructor",t)};var Oe=function(){return this};var me=function(e){if(s&&!z(e,H)){O.getter(e,H,Oe)}};var we=function(e,t){var r=t||function iterator(){return this};h(e,Q,r);if(!e[Q]&&K.symbol(Q)){e[Q]=r}};var je=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var Se=function createDataPropertyOrThrow(e,t,r){je(e,t,r);if(!re.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var Te=function(e,t,r,n){if(!re.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!re.TypeIsObject(o)){o=r}var i=m(o);for(var a in n){if(z(n,a)){var u=n[a];h(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var Ie=String.fromCodePoint;Z(String,"fromCodePoint",function fromCodePoint(e){return re.Call(Ie,this,arguments)})}var Ee={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!re.SameValue(r,re.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){M(t,String.fromCharCode(r))}else{r-=65536;M(t,String.fromCharCode((r>>10)+55296));M(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=re.ToObject(e,"bad callSite");var r=re.ToObject(t.raw,"bad raw value");var n=r.length;var o=re.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,f,s,c;while(a<o){u=re.ToString(a);s=re.ToString(r[u]);M(i,s);if(a+1>=o){break}f=a+1<arguments.length?arguments[a+1]:"";c=re.ToString(f);M(i,c);a+=1}return i.join("")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){Z(String,"raw",Ee.raw)}b(String,Ee);var Pe=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var Ce=Infinity;var Me={repeat:function repeat(e){var t=re.ToString(re.RequireObjectCoercible(this));var r=re.ToInteger(e);if(r<0||r>=Ce){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return Pe(t,r)},startsWith:function startsWith(e){var t=re.ToString(re.RequireObjectCoercible(this));if(re.IsRegExp(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=re.ToString(e);var n;if(arguments.length>1){n=arguments[1]}var o=A(re.ToInteger(n),0);return C(t,o,o+r.length)===r},endsWith:function endsWith(e){var t=re.ToString(re.RequireObjectCoercible(this));if(re.IsRegExp(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=re.ToString(e);var n=t.length;var o;if(arguments.length>1){o=arguments[1]}var i=typeof o==="undefined"?n:re.ToInteger(o);var a=R(A(i,0),n);return C(t,a-r.length,a)===r},includes:function includes(e){if(re.IsRegExp(e)){throw new TypeError('"includes" does not accept a RegExp')}var t=re.ToString(e);var r;if(arguments.length>1){r=arguments[1]}return I(this,t,r)!==-1},codePointAt:function codePointAt(e){var t=re.ToString(re.RequireObjectCoercible(this));var r=re.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){Z(String.prototype,"includes",Me.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var xe=i(function(){"/a/".startsWith(/a/)});var Ne=a(function(){return"abc".startsWith("a",Infinity)===false});if(!xe||!Ne){Z(String.prototype,"startsWith",Me.startsWith);Z(String.prototype,"endsWith",Me.endsWith)}}if(Y){var Ae=a(function(){var e=/a/;e[G.match]=false;return"/a/".startsWith(e)});if(!Ae){Z(String.prototype,"startsWith",Me.startsWith)}var Re=a(function(){var e=/a/;e[G.match]=false;return"/a/".endsWith(e)});if(!Re){Z(String.prototype,"endsWith",Me.endsWith)}var _e=a(function(){var e=/a/;e[G.match]=false;return"/a/".includes(e)});if(!_e){Z(String.prototype,"includes",Me.includes)}}b(String.prototype,Me);var ke=["	\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var Fe=new RegExp("(^["+ke+"]+)|(["+ke+"]+$)","g");var Le=function trim(){return re.ToString(re.RequireObjectCoercible(this)).replace(Fe,"")};var De=["\x85","\u200b","\ufffe"].join("");var ze=new RegExp("["+De+"]","g");var qe=/^[\-+]0x[0-9a-f]+$/i;var We=De.trim().length!==De.length;h(String.prototype,"trim",Le,We);var Ge=function(e){return{value:e,done:arguments.length===0}};var He=function(e){re.RequireObjectCoercible(e);this._s=re.ToString(e);this._i=0};He.prototype.next=function(){var e=this._s;var t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return Ge()}var r=e.charCodeAt(t);var n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return Ge(e.substr(t,o))};we(He.prototype);we(String.prototype,function(){return new He(this)});var Ve={from:function from(e){var r=this;var n;if(arguments.length>1){n=arguments[1]}var o,i;if(typeof n==="undefined"){o=false}else{if(!re.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){i=arguments[2]}o=true}var a=typeof(X(e)||re.GetMethod(e,Q))!=="undefined";var u,f,s;if(a){f=re.IsConstructor(r)?Object(new r):[];var c=re.GetIterator(e);var l,p;s=0;while(true){l=re.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=typeof i==="undefined"?n(p,s):t(n,i,p,s)}f[s]=p}catch(v){re.IteratorClose(c,true);throw v}s+=1}u=s}else{var y=re.ToObject(e);u=re.ToLength(y.length);f=re.IsConstructor(r)?Object(new r(u)):new Array(u);var h;for(s=0;s<u;++s){h=y[s];if(o){h=typeof i==="undefined"?n(h,s):t(n,i,h,s)}Se(f,s,h)}}f.length=u;return f},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!re.IsCallable(t)?new Array(e):re.Construct(t,[e]);for(var o=0;o<e;++o){Se(n,o,arguments[o])}n.length=e;return n}};b(Array,Ve);me(Array);q=function(e,t){this.i=0;this.array=e;this.kind=t};b(q.prototype,{next:function(){var e=this.i;var t=this.array;if(!(this instanceof q)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=re.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return Ge(o)}}this.array=void 0;return Ge()}});we(q.prototype);var Be=Array.of===Ve.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!Be){Z(Array,"of",Ve.of)}var $e={copyWithin:function copyWithin(e,t){var r=re.ToObject(this);var n=re.ToLength(r.length);var o=re.ToInteger(e);var i=re.ToInteger(t);var a=o<0?A(n+o,0):R(o,n);var u=i<0?A(n+i,0):R(i,n);var f;if(arguments.length>2){f=arguments[2]}var s=typeof f==="undefined"?n:re.ToInteger(f);var c=s<0?A(n+s,0):R(s,n);var l=R(c-u,n-a);var p=1;if(u<a&&a<u+l){p=-1;u+=l-1;a+=l-1}while(l>0){if(u in r){r[a]=r[u]}else{delete r[a]}u+=p;a+=p;l-=1}return r},fill:function fill(e){var t;if(arguments.length>1){t=arguments[1]}var r;if(arguments.length>2){r=arguments[2]}var n=re.ToObject(this);var o=re.ToLength(n.length);t=re.ToInteger(typeof t==="undefined"?0:t);r=re.ToInteger(typeof r==="undefined"?o:r);var i=t<0?A(o+t,0):R(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=re.ToObject(this);var n=re.ToLength(r.length);if(!re.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=re.ToObject(this);var n=re.ToLength(r.length);if(!re.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new q(this,"key")},values:function values(){return new q(this,"value")},entries:function entries(){return new q(this,"entry")}};if(Array.prototype.keys&&!re.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!re.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[Q]){b(Array.prototype,{values:Array.prototype[Q]});if(K.symbol(G.unscopables)){Array.prototype[G.unscopables].values=true}}if(c&&Array.prototype.values&&Array.prototype.values.name!=="values"){var Ue=Array.prototype.values;Z(Array.prototype,"values",function values(){return re.Call(Ue,this,arguments)});h(Array.prototype,Q,Array.prototype.values,true)}b(Array.prototype,$e);if(1/[true].indexOf(true,-0)<0){h(Array.prototype,"indexOf",function indexOf(e){var t=E(this,arguments);if(t===0&&1/t<0){return 0}return t},true)}we(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){we(Object.getPrototypeOf([].values()))}var Je=function(){return a(function(){return Array.from({length:-1}).length===0})}();var Xe=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!Je||!Xe){Z(Array,"from",Ve.from)}var Ke=function(){return a(function(){return Array.from([0],void 0)})}();if(!Ke){var Ze=Array.from;Z(Array,"from",function from(e){if(arguments.length>1&&typeof arguments[1]!=="undefined"){return re.Call(Ze,this,arguments)}else{return t(Ze,this,e)}})}var Ye=-(Math.pow(2,32)-1);var Qe=function(e,r){var n={length:Ye};n[r?(n.length>>>0)-1:0]=true;return a(function(){t(e,n,function(){throw new RangeError("should not reach here")},[]);return true})};if(!Qe(Array.prototype.forEach)){var et=Array.prototype.forEach;Z(Array.prototype,"forEach",function forEach(e){return re.Call(et,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.map)){var tt=Array.prototype.map;Z(Array.prototype,"map",function map(e){return re.Call(tt,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.filter)){var rt=Array.prototype.filter;Z(Array.prototype,"filter",function filter(e){return re.Call(rt,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.some)){var nt=Array.prototype.some;Z(Array.prototype,"some",function some(e){return re.Call(nt,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.every)){var ot=Array.prototype.every;Z(Array.prototype,"every",function every(e){return re.Call(ot,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.reduce)){var it=Array.prototype.reduce;Z(Array.prototype,"reduce",function reduce(e){return re.Call(it,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.reduceRight,true)){var at=Array.prototype.reduceRight;Z(Array.prototype,"reduceRight",function reduceRight(e){return re.Call(at,this.length>=0?this:[],arguments)},true)}var ut=Number("0o10")!==8;var ft=Number("0b10")!==2;var st=y(De,function(e){return Number(e+0+e)===0});if(ut||ft||st){var ct=Number;var lt=/^0b[01]+$/i;var pt=/^0o[0-7]+$/i;var vt=lt.test.bind(lt);var yt=pt.test.bind(pt);var ht=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(K.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(K.primitive(t)){return t}}throw new TypeError("No default value")};var bt=ze.test.bind(ze);var gt=qe.test.bind(qe);var dt=function(){var e=function Number(t){var r;if(arguments.length>0){r=K.primitive(t)?t:ht(t,"number")}else{r=0}if(typeof r==="string"){r=re.Call(Le,r);if(vt(r)){r=parseInt(C(r,2),2)}else if(yt(r)){r=parseInt(C(r,2),8)}else if(bt(r)||gt(r)){r=NaN}}var n=this;var o=a(function(){ct.prototype.valueOf.call(n);return true});if(n instanceof e&&!o){return new ct(r)}return ct(r)};return e}();de(ct,dt,{});b(dt,{NaN:ct.NaN,MAX_VALUE:ct.MAX_VALUE,MIN_VALUE:ct.MIN_VALUE,NEGATIVE_INFINITY:ct.NEGATIVE_INFINITY,POSITIVE_INFINITY:ct.POSITIVE_INFINITY});Number=dt;O.redefine(S,"Number",dt)}var Ot=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:Ot,MIN_SAFE_INTEGER:-Ot,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:B,isInteger:function isInteger(e){return B(e)&&re.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&k(e)<=Number.MAX_SAFE_INTEGER},isNaN:V});h(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if(![,1].find(function(e,t){return t===0})){Z(Array.prototype,"find",$e.find)}if([,1].findIndex(function(e,t){return t===0})!==0){Z(Array.prototype,"findIndex",$e.findIndex)}var mt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var wt=function ensureEnumerable(e,t){if(s&&mt(e,t)){Object.defineProperty(e,t,{enumerable:false})}};var jt=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var St=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Tt=function(e,t){var r=n(Object(t));var o;if(re.IsCallable(Object.getOwnPropertySymbols)){o=v(Object.getOwnPropertySymbols(Object(t)),mt(t))}return p(P(r,o||[]),St(t),e)};var It={assign:function(e,t){var r=re.ToObject(e,"Cannot convert undefined or null to object");return p(re.Call(jt,1,arguments),Tt,r)},is:function is(e,t){return re.SameValue(e,t)}};var Et=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(Et){Z(Object,"assign",It.assign)}b(Object,It);if(s){var Pt={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!re.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||re.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(a){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};b(Object,Pt)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf;var r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var Ct=!i(function(){Object.keys("foo")});if(!Ct){var Mt=Object.keys;Z(Object,"keys",function keys(e){return Mt(re.ToObject(e))});n=Object.keys}var xt=i(function(){Object.keys(/a/g)});if(xt){var Nt=Object.keys;Z(Object,"keys",function keys(e){if(K.regex(e)){var t=[];for(var r in e){if(z(e,r)){M(t,r)}}return t}return Nt(e)});n=Object.keys}if(Object.getOwnPropertyNames){var At=!i(function(){Object.getOwnPropertyNames("foo")});if(!At){var Rt=typeof window==="object"?Object.getOwnPropertyNames(window):[];var _t=Object.getOwnPropertyNames;Z(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=re.ToObject(e);if(g(t)==="[object Window]"){try{return _t(t)}catch(r){return P([],Rt)}}return _t(t)})}}if(Object.getOwnPropertyDescriptor){var kt=!i(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!kt){var Ft=Object.getOwnPropertyDescriptor;Z(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return Ft(re.ToObject(e),t)})}}if(Object.seal){var Lt=!i(function(){Object.seal("foo")});if(!Lt){var Dt=Object.seal;Z(Object,"seal",function seal(e){if(!re.TypeIsObject(e)){return e}return Dt(e)})}}if(Object.isSealed){var zt=!i(function(){Object.isSealed("foo")});if(!zt){var qt=Object.isSealed;Z(Object,"isSealed",function isSealed(e){if(!re.TypeIsObject(e)){return true}return qt(e)})}}if(Object.freeze){var Wt=!i(function(){Object.freeze("foo")});if(!Wt){var Gt=Object.freeze;Z(Object,"freeze",function freeze(e){if(!re.TypeIsObject(e)){return e}return Gt(e)})}}if(Object.isFrozen){var Ht=!i(function(){Object.isFrozen("foo")});if(!Ht){var Vt=Object.isFrozen;Z(Object,"isFrozen",function isFrozen(e){if(!re.TypeIsObject(e)){return true}return Vt(e)})}}if(Object.preventExtensions){var Bt=!i(function(){Object.preventExtensions("foo")});if(!Bt){var $t=Object.preventExtensions;Z(Object,"preventExtensions",function preventExtensions(e){if(!re.TypeIsObject(e)){return e}return $t(e)})}}if(Object.isExtensible){var Ut=!i(function(){Object.isExtensible("foo")});if(!Ut){var Jt=Object.isExtensible;Z(Object,"isExtensible",function isExtensible(e){if(!re.TypeIsObject(e)){return false}return Jt(e)})}}if(Object.getPrototypeOf){var Xt=!i(function(){Object.getPrototypeOf("foo")});if(!Xt){var Kt=Object.getPrototypeOf;Z(Object,"getPrototypeOf",function getPrototypeOf(e){return Kt(re.ToObject(e))})}}var Zt=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&re.IsCallable(e.get)}();if(s&&!Zt){var Yt=function flags(){if(!re.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};O.getter(RegExp.prototype,"flags",Yt)}var Qt=s&&a(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});var er=Y&&s&&function(){var e=/./;e[G.match]=false;return RegExp(e)===e}();var tr=a(function(){return RegExp.prototype.toString.call({source:"abc"})==="/abc/"});var rr=tr&&a(function(){return RegExp.prototype.toString.call({source:"a",flags:"b"})==="/a/b"});if(!tr||!rr){var nr=RegExp.prototype.toString;h(RegExp.prototype,"toString",function toString(){var e=re.RequireObjectCoercible(this);if(K.regex(e)){return t(nr,e)}var r=te(e.source);var n=te(e.flags);return"/"+r+"/"+n},true);O.preserveToString(RegExp.prototype.toString,nr)}if(s&&(!Qt||er)){var or=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get;var ir=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{};var ar=function(){return this.source};var ur=re.IsCallable(ir.get)?ir.get:ar;var fr=RegExp;var sr=function(){return function RegExp(e,t){var r=re.IsRegExp(e);var n=this instanceof RegExp;if(!n&&r&&typeof t==="undefined"&&e.constructor===RegExp){return e}var o=e;var i=t;if(K.regex(e)){o=re.Call(ur,e);i=typeof t==="undefined"?re.Call(or,e):t;return new RegExp(o,i)}else if(r){o=e.source;i=typeof t==="undefined"?e.flags:t}return new fr(e,t)}}();de(fr,sr,{$input:true});RegExp=sr;O.redefine(S,"RegExp",sr)}if(s){var cr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(n(cr),function(e){if(e in RegExp&&!(cr[e]in RegExp)){O.getter(RegExp,cr[e],function get(){return RegExp[e]})}})}me(RegExp);var lr=1/Number.EPSILON;var pr=function roundTiesToEven(e){return e+lr-lr};var vr=Math.pow(2,-23);var yr=Math.pow(2,127)*(2-vr);var hr=Math.pow(2,-126);var br=Math.E;var gr=Math.LOG2E;var dr=Math.LOG10E;var Or=Number.prototype.clz;delete Number.prototype.clz;var mr={acosh:function acosh(e){var t=Number(e);if(V(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return L(t/br+D(t+1)*D(t-1)/br)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}return t<0?-asinh(-t):L(t+D(t*t+1))},atanh:function atanh(e){var t=Number(e);if(V(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*L((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0;var n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=F(L(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var t=Number(e);var r=re.ToUint32(t);if(r===0){return 32}return Or?re.Call(Or,r):31-_(L(r+.5)*gr)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(V(t)){return NaN}if(!T(t)){return Infinity}if(t<0){t=-t}if(t>21){return F(t)/2}return(F(t)+F(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(k(t)>.5){return F(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=k(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*D(r)},log2:function log2(e){return L(e)*gr},log10:function log10(e){return L(e)*dr},log1p:function log1p(e){var t=Number(e);if(t<-1||V(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(L(1+t)/(1+t-1))},sign:$,sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}if(k(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(F(t-1)-F(-t-1))*br/2},tanh:function tanh(e){var t=Number(e);if(V(t)||t===0){return t}if(t>=20){return 1}if(t<=-20){return-1}return(Math.expm1(t)-Math.expm1(-t))/(F(t)+F(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-_(-t):_(t)},imul:function imul(e,t){var r=re.ToUint32(e);var n=re.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||V(t)){return t}var r=$(t);var n=k(t);if(n<hr){return r*pr(n/hr/vr)*hr*vr}var o=(1+vr/Number.EPSILON)*n;var i=o-(o-n);if(i>yr||V(i)){return r*Infinity}return r*i}};b(Math,mr);h(Math,"log1p",mr.log1p,Math.log1p(-1e-17)!==-1e-17);h(Math,"asinh",mr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));h(Math,"tanh",mr.tanh,Math.tanh(-2e-17)!==-2e-17);h(Math,"acosh",mr.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);h(Math,"cbrt",mr.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);h(Math,"sinh",mr.sinh,Math.sinh(-2e-17)!==-2e-17);var wr=Math.expm1(10);h(Math,"expm1",mr.expm1,wr>22025.465794806718||wr<22025.465794806718);var jr=Math.round;var Sr=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var Tr=lr+1;var Ir=2*lr-1;var Er=[Tr,Ir].every(function(e){return Math.round(e)===e});h(Math,"round",function round(e){var t=_(e);var r=t===-1?-0:t+1;return e-t<.5?t:r},!Sr||!Er);O.preserveToString(Math.round,jr);var Pr=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=mr.imul;O.preserveToString(Math.imul,Pr)}if(Math.imul.length!==2){Z(Math,"imul",function imul(e,t){return re.Call(Pr,Math,arguments);
})}var Cr=function(){var e=S.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}re.IsPromise=function(e){if(!re.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!re.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.resolve=void 0;t.reject=void 0;t.promise=new e(r);if(!(re.IsCallable(t.resolve)&&re.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&re.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){M(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=N(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;var t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}};var i=re.IsCallable(S.setImmediate)?S.setImmediate:typeof process==="object"&&process.nextTick?process.nextTick:o()||(re.IsCallable(n)?n():function(t){e(t,0)});var a=function(e){return e};var u=function(e){throw e};var f=0;var s=1;var c=2;var l=0;var p=1;var v=2;var y={};var h=function(e,t,r){i(function(){g(e,t,r)})};var g=function(e,t,r){var n,o;if(t===y){return e(r)}try{n=e(r);o=t.resolve}catch(i){n=i;o=t.reject}o(n)};var d=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.fulfillReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+l],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=s;r.reactionLength=0};var O=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.rejectReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+p],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=c;r.reactionLength=0};var m=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return O(e,new TypeError("Self resolution"))}if(!re.TypeIsObject(r)){return d(e,r)}try{n=r.then}catch(o){return O(e,o)}if(!re.IsCallable(n)){return d(e,r)}i(function(){j(e,r,n)})};var n=function(r){if(t){return}t=true;return O(e,r)};return{resolve:r,reject:n}};var w=function(e,r,n,o){if(e===I){t(e,r,n,o,y)}else{t(e,r,n,o)}};var j=function(e,t,r){var n=m(e);var o=n.resolve;var i=n.reject;try{w(r,t,o,i)}catch(a){i(a)}};var T,I;var E=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!re.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=Te(this,e,T,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}});var n=m(r);var o=n.reject;try{t(n.resolve,o)}catch(i){o(i)}return r};return e}();T=E.prototype;var P=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var C=function(e,t,r){var n=e.iterator;var o=[];var i={count:1};var a,u;var f=0;while(true){try{a=re.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(s){e.done=true;throw s}o[f]=void 0;var c=t.resolve(u);var l=P(f,o,r,i);i.count+=1;w(c.then,c,l,r.reject);f+=1}if(--i.count===0){var p=r.resolve;p(o)}return r.promise};var x=function(e,t,r){var n=e.iterator;var o,i,a;while(true){try{o=re.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(u){e.done=true;throw u}a=t.resolve(i);w(a.then,a,r.resolve,r.reject)}return r.promise};b(E,{all:function all(e){var t=this;if(!re.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=re.GetIterator(e);i={iterator:o,done:false};return C(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{re.IteratorClose(o,true)}catch(f){u=f}}var s=n.reject;s(u);return n.promise}},race:function race(e){var t=this;if(!re.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=re.GetIterator(e);i={iterator:o,done:false};return x(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{re.IteratorClose(o,true)}catch(f){u=f}}var s=n.reject;s(u);return n.promise}},reject:function reject(e){var t=this;if(!re.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(!re.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}if(re.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});b(T,{"catch":function(e){return this.then(null,e)},then:function then(e,t){var n=this;if(!re.IsPromise(n)){throw new TypeError("not a promise")}var o=re.SpeciesConstructor(n,E);var i;var b=arguments.length>2&&arguments[2]===y;if(b&&o===E){i=y}else{i=new r(o)}var g=re.IsCallable(e)?e:a;var d=re.IsCallable(t)?t:u;var O=n._promise;var m;if(O.state===f){if(O.reactionLength===0){O.fulfillReactionHandler0=g;O.rejectReactionHandler0=d;O.reactionCapability0=i}else{var w=3*(O.reactionLength-1);O[w+l]=g;O[w+p]=d;O[w+v]=i}O.reactionLength+=1}else if(O.state===s){m=O.result;h(g,i,m)}else if(O.state===c){m=O.result;h(d,i,m)}else{throw new TypeError("unexpected Promise state")}return i.promise}});y=new r(E);I=T.then;return E}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof Cr==="function"){b(S,{Promise:Cr});var Mr=w(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var xr=!i(function(){S.Promise.reject(42).then(null,5).then(null,W)});var Nr=i(function(){S.Promise.call(3,W)});var Ar=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);try{r.then(null,W).then(null,W)}catch(n){return true}return t===r}(S.Promise);var Rr=s&&function(){var e=0;var t=Object.defineProperty({},"then",{get:function(){e+=1}});Promise.resolve(t);return e===1}();var _r=function BadResolverPromise(e){var t=new Promise(e);e(3,function(){});this.then=t.then;this.constructor=BadResolverPromise};_r.prototype=Promise.prototype;_r.all=Promise.all;var kr=a(function(){return!!_r.all([1,2])});if(!Mr||!xr||!Nr||Ar||!Rr||kr){Promise=Cr;Z(S,"Promise",Cr)}if(Promise.all.length!==1){var Fr=Promise.all;Z(Promise,"all",function all(e){return re.Call(Fr,this,arguments)})}if(Promise.race.length!==1){var Lr=Promise.race;Z(Promise,"race",function race(e){return re.Call(Lr,this,arguments)})}if(Promise.resolve.length!==1){var Dr=Promise.resolve;Z(Promise,"resolve",function resolve(e){return re.Call(Dr,this,arguments)})}if(Promise.reject.length!==1){var zr=Promise.reject;Z(Promise,"reject",function reject(e){return re.Call(zr,this,arguments)})}wt(Promise,"all");wt(Promise,"race");wt(Promise,"resolve");wt(Promise,"reject");me(Promise)}var qr=function(e){var t=n(p(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Wr=qr(["z","a","bb"]);var Gr=qr(["z",1,"a","3",2]);if(s){var Hr=function fastkey(e){if(!Wr){return null}if(typeof e==="undefined"||e===null){return"^"+re.ToString(e)}else if(typeof e==="string"){return"$"+e}else if(typeof e==="number"){if(!Gr){return"n"+e}return e}else if(typeof e==="boolean"){return"b"+e}return null};var Vr=function emptyObject(){return Object.create?Object.create(null):{}};var Br=function addIterableToMap(e,n,o){if(r(o)||K.string(o)){l(o,function(e){if(!re.TypeIsObject(e)){throw new TypeError("Iterator value "+e+" is not an entry object")}n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.set;if(!re.IsCallable(a)){throw new TypeError("bad map")}i=re.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=re.IteratorStep(i);if(u===false){break}var f=u.value;try{if(!re.TypeIsObject(f)){throw new TypeError("Iterator value "+f+" is not an entry object")}t(a,n,f[0],f[1])}catch(s){re.IteratorClose(i,true);throw s}}}}};var $r=function addIterableToSet(e,n,o){if(r(o)||K.string(o)){l(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.add;if(!re.IsCallable(a)){throw new TypeError("bad set")}i=re.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=re.IteratorStep(i);if(u===false){break}var f=u.value;try{t(a,n,f)}catch(s){re.IteratorClose(i,true);throw s}}}}};var Ur={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!re.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+re.ToString(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i;var t=this.kind;var r=this.head;if(typeof this.i==="undefined"){return Ge()}while(e.isRemoved()&&e!==r){e=e.prev}var n;while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return Ge(n)}}this.i=void 0;return Ge()}};we(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=Te(this,Map,a,{_es6map:true,_head:null,_storage:Vr(),_size:0});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){Br(Map,e,arguments[0])}return e};a=u.prototype;O.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});b(a,{get:function get(e){o(this,"get");var t=Hr(e);if(t!==null){var r=this._storage[t];if(r){return r.value}else{return}}var n=this._head;var i=n;while((i=i.next)!==n){if(re.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Hr(e);if(t!==null){return typeof this._storage[t]!=="undefined"}var r=this._head;var n=r;while((n=n.next)!==r){if(re.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head;var i=n;var a;var u=Hr(e);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}while((i=i.next)!==n){if(re.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(re.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},"delete":function(t){o(this,"delete");var r=this._head;var n=r;var i=Hr(t);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}while((n=n.next)!==r){if(re.SameValueZero(n.key,t)){n.key=n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._size=0;this._storage=Vr();var t=this._head;var r=t;var n=r.next;while((r=n)!==t){r.key=r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});we(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!re.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+re.ToString(t))}};var o;var i=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=Te(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:Vr()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){$r(Set,e,arguments[0])}return e};o=i.prototype;var a=function(e){var t=e;if(t==="^null"){return null}else if(t==="^undefined"){return void 0}else{var r=t.charAt(0);if(r==="$"){return C(t,1)}else if(r==="n"){return+C(t,1)}else if(r==="b"){return t==="btrue"}}return+t};var u=function ensureMap(e){if(!e["[[SetData]]"]){var t=e["[[SetData]]"]=new Ur.Map;l(n(e._storage),function(e){var r=a(e);t.set(r,r)});e["[[SetData]]"]=t}e._storage=null};O.getter(i.prototype,"size",function(){r(this,"size");if(this._storage){return n(this._storage).length}u(this);return this["[[SetData]]"].size});b(i.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Hr(e))!==null){return!!this._storage[t]}u(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Hr(e))!==null){this._storage[t]=true;return this}u(this);this["[[SetData]]"].set(e,e);return this},"delete":function(e){r(this,"delete");var t;if(this._storage&&(t=Hr(e))!==null){var n=z(this._storage,t);return delete this._storage[t]&&n}u(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Vr()}if(this["[[SetData]]"]){this["[[SetData]]"].clear()}},values:function values(){r(this,"values");u(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");u(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;u(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});h(i.prototype,"keys",i.prototype.values,true);we(i.prototype,i.prototype.values);return i}()};if(S.Map||S.Set){var Jr=a(function(){return new Map([[1,2]]).get(1)===2});if(!Jr){var Xr=S.Map;S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new Xr;if(arguments.length>0){Br(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,S.Map.prototype);return e};S.Map.prototype=m(Xr.prototype);h(S.Map.prototype,"constructor",S.Map,true);O.preserveToString(S.Map,Xr)}var Kr=new Map;var Zr=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);e.set(-0,e);return e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}();var Yr=Kr.set(1,2)===Kr;if(!Zr||!Yr){var Qr=Map.prototype.set;Z(Map.prototype,"set",function set(e,r){t(Qr,this,e===0?0:e,r);return this})}if(!Zr){var en=Map.prototype.get;var tn=Map.prototype.has;b(Map.prototype,{get:function get(e){return t(en,this,e===0?0:e)},has:function has(e){return t(tn,this,e===0?0:e)}},true);O.preserveToString(Map.prototype.get,en);O.preserveToString(Map.prototype.has,tn)}var rn=new Set;var nn=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(rn);var on=rn.add(1)===rn;if(!nn||!on){var an=Set.prototype.add;Set.prototype.add=function add(e){t(an,this,e===0?0:e);return this};O.preserveToString(Set.prototype.add,an)}if(!nn){var un=Set.prototype.has;Set.prototype.has=function has(e){return t(un,this,e===0?0:e)};O.preserveToString(Set.prototype.has,un);var fn=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(fn,this,e===0?0:e)};O.preserveToString(Set.prototype["delete"],fn)}var sn=w(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var cn=Object.setPrototypeOf&&!sn;var ln=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||cn||!ln){var pn=S.Map;S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new pn;if(arguments.length>0){Br(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Map.prototype);return e};S.Map.prototype=pn.prototype;h(S.Map.prototype,"constructor",S.Map,true);O.preserveToString(S.Map,pn)}var vn=w(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var yn=Object.setPrototypeOf&&!vn;var hn=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||yn||!hn){var bn=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new bn;if(arguments.length>0){$r(Set,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Set.prototype);return e};S.Set.prototype=bn.prototype;h(S.Set.prototype,"constructor",S.Set,true);O.preserveToString(S.Set,bn)}var gn=new S.Map;var dn=!a(function(){return gn.keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||gn.size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||u(S.Map)||u(S.Set)||typeof gn.keys().next!=="function"||dn||!sn){b(S,{Map:Ur.Map,Set:Ur.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){h(S.Set.prototype,"keys",S.Set.prototype.values,true)}we(Object.getPrototypeOf((new S.Map).keys()));we(Object.getPrototypeOf((new S.Set).keys()));if(c&&S.Set.prototype.has.name!=="has"){var On=S.Set.prototype.has;Z(S.Set.prototype,"has",function has(e){return t(On,this,e)})}}b(S,Ur);me(S.Map);me(S.Set)}var mn=function throwUnlessTargetIsObject(e){if(!re.TypeIsObject(e)){throw new TypeError("target must be an object")}};var wn={apply:function apply(){return re.Call(re.Call,null,arguments)},construct:function construct(e,t){if(!re.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length>2?arguments[2]:e;if(!re.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return re.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){mn(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},has:function has(e,t){mn(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(wn,{ownKeys:function ownKeys(e){mn(e);var t=Object.getOwnPropertyNames(e);if(re.IsCallable(Object.getOwnPropertySymbols)){x(t,Object.getOwnPropertySymbols(e))}return t}})}var jn=function ConvertExceptionToBoolean(e){return!i(e)};if(Object.preventExtensions){Object.assign(wn,{isExtensible:function isExtensible(e){mn(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){mn(e);return jn(function(){Object.preventExtensions(e)})}})}if(s){var Sn=function get(e,t,r){var n=Object.getOwnPropertyDescriptor(e,t);if(!n){var o=Object.getPrototypeOf(e);if(o===null){return void 0}return Sn(o,t,r)}if("value"in n){return n.value}if(n.get){return re.Call(n.get,r)}return void 0};var Tn=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return Tn(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!re.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return ee.defineProperty(o,r,{value:n})}else{return ee.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(wn,{defineProperty:function defineProperty(e,t,r){mn(e);return jn(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){mn(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){mn(e);var r=arguments.length>2?arguments[2]:e;return Sn(e,t,r)},set:function set(e,t,r){mn(e);var n=arguments.length>3?arguments[3]:e;return Tn(e,t,r,n)}})}if(Object.getPrototypeOf){var In=Object.getPrototypeOf;wn.getPrototypeOf=function getPrototypeOf(e){mn(e);return In(e)}}if(Object.setPrototypeOf&&wn.getPrototypeOf){var En=function(e,t){var r=t;while(r){if(e===r){return true}r=wn.getPrototypeOf(r)}return false};Object.assign(wn,{setPrototypeOf:function setPrototypeOf(e,t){mn(e);if(t!==null&&!re.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===ee.getPrototypeOf(e)){return true}if(ee.isExtensible&&!ee.isExtensible(e)){return false}if(En(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var Pn=function(e,t){if(!re.IsCallable(S.Reflect[e])){h(S.Reflect,e,t)}else{var r=a(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){Z(S.Reflect,e,t)}}};Object.keys(wn).forEach(function(e){Pn(e,wn[e])});var Cn=S.Reflect.getPrototypeOf;if(c&&Cn&&Cn.name!=="getPrototypeOf"){Z(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(Cn,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(a(function(){S.Reflect.setPrototypeOf(1,{});return true})){Z(S.Reflect,"setPrototypeOf",wn.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!a(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){Z(S.Reflect,"defineProperty",wn.defineProperty)}}if(S.Reflect.construct){if(!a(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){Z(S.Reflect,"construct",wn.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var Mn=Date.prototype.toString;var xn=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return re.Call(Mn,this)};Z(Date.prototype,"toString",xn)}var Nn={anchor:function anchor(e){return re.CreateHTML(this,"a","name",e)},big:function big(){return re.CreateHTML(this,"big","","")},blink:function blink(){return re.CreateHTML(this,"blink","","")},bold:function bold(){return re.CreateHTML(this,"b","","")},fixed:function fixed(){return re.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return re.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return re.CreateHTML(this,"font","size",e)},italics:function italics(){return re.CreateHTML(this,"i","","")},link:function link(e){return re.CreateHTML(this,"a","href",e)},small:function small(){return re.CreateHTML(this,"small","","")},strike:function strike(){return re.CreateHTML(this,"strike","","")},sub:function sub(){return re.CreateHTML(this,"sub","","")},sup:function sub(){return re.CreateHTML(this,"sup","","")}};l(Object.keys(Nn),function(e){var r=String.prototype[e];var n=false;if(re.IsCallable(r)){var o=t(r,"",' " ');var i=P([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){Z(String.prototype,e,Nn[e])}});var An=function(){if(!Y){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e(G())!=="undefined"){return true}if(e([G()])!=="[null]"){return true}var t={a:G()};t[G()]=true;if(e(t)!=="{}"){return true}return false}();var Rn=a(function(){if(!Y){return true}return JSON.stringify(Object(G()))==="{}"&&JSON.stringify([Object(G())])==="[{}]"});if(An||!Rn){var _n=JSON.stringify;Z(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=re.IsCallable(n)?n:null;var a=function(e,r){var n=i?t(i,this,e,r):r;if(typeof n!=="symbol"){if(K.symbol(n)){return St({})(n)}else{return n}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return _n.apply(this,o)})}return S});
//# sourceMappingURL=es6-shim.map

/*
 * SystemJS Promise Polyfill
 */
!function(t){!function(e){"object"==typeof exports?module.exports=e():"function"==typeof t&&t.amd?t(e):"undefined"!=typeof window?window.Promise=e():"undefined"!=typeof global?global.Promise=e():"undefined"!=typeof self&&(self.Promise=e())}(function(){var t;return function e(t,n,o){function r(u,c){if(!n[u]){if(!t[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var s=n[u]={exports:{}};t[u][0].call(s.exports,function(e){var n=t[u][1][e];return r(n?n:e)},s,s.exports,e,t,n,o)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(t,e,n){var o=t("../lib/decorators/unhandledRejection"),r=o(t("../lib/Promise"));e.exports="undefined"!=typeof global?global.Promise=r:"undefined"!=typeof self?self.Promise=r:r},{"../lib/Promise":2,"../lib/decorators/unhandledRejection":4}],2:[function(e,n,o){!function(t){"use strict";t(function(t){var e=t("./makePromise"),n=t("./Scheduler"),o=t("./env").asap;return e({scheduler:new n(o)})})}("function"==typeof t&&t.amd?t:function(t){n.exports=t(e)})},{"./Scheduler":3,"./env":5,"./makePromise":7}],3:[function(e,n,o){!function(t){"use strict";t(function(){function t(t){this._async=t,this._running=!1,this._queue=this,this._queueLen=0,this._afterQueue={},this._afterQueueLen=0;var e=this;this.drain=function(){e._drain()}}return t.prototype.enqueue=function(t){this._queue[this._queueLen++]=t,this.run()},t.prototype.afterQueue=function(t){this._afterQueue[this._afterQueueLen++]=t,this.run()},t.prototype.run=function(){this._running||(this._running=!0,this._async(this.drain))},t.prototype._drain=function(){for(var t=0;t<this._queueLen;++t)this._queue[t].run(),this._queue[t]=void 0;for(this._queueLen=0,this._running=!1,t=0;t<this._afterQueueLen;++t)this._afterQueue[t].run(),this._afterQueue[t]=void 0;this._afterQueueLen=0},t})}("function"==typeof t&&t.amd?t:function(t){n.exports=t()})},{}],4:[function(e,n,o){!function(t){"use strict";t(function(t){function e(t){throw t}function n(){}var o=t("../env").setTimer,r=t("../format");return function(t){function i(t){t.handled||(l.push(t),a("Potentially unhandled rejection ["+t.id+"] "+r.formatError(t.value)))}function u(t){var e=l.indexOf(t);e>=0&&(l.splice(e,1),h("Handled previous rejection ["+t.id+"] "+r.formatObject(t.value)))}function c(t,e){p.push(t,e),null===d&&(d=o(f,0))}function f(){for(d=null;p.length>0;)p.shift()(p.shift())}var s,a=n,h=n;"undefined"!=typeof console&&(s=console,a="undefined"!=typeof s.error?function(t){s.error(t)}:function(t){s.log(t)},h="undefined"!=typeof s.info?function(t){s.info(t)}:function(t){s.log(t)}),t.onPotentiallyUnhandledRejection=function(t){c(i,t)},t.onPotentiallyUnhandledRejectionHandled=function(t){c(u,t)},t.onFatalRejection=function(t){c(e,t.value)};var p=[],l=[],d=null;return t}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t(e)})},{"../env":5,"../format":6}],5:[function(e,n,o){!function(t){"use strict";t(function(t){function e(){return"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)}function n(){return"function"==typeof MutationObserver&&MutationObserver||"function"==typeof WebKitMutationObserver&&WebKitMutationObserver}function o(t){function e(){var t=n;n=void 0,t()}var n,o=document.createTextNode(""),r=new t(e);r.observe(o,{characterData:!0});var i=0;return function(t){n=t,o.data=i^=1}}var r,i="undefined"!=typeof setTimeout&&setTimeout,u=function(t,e){return setTimeout(t,e)},c=function(t){return clearTimeout(t)},f=function(t){return i(t,0)};if(e())f=function(t){return process.nextTick(t)};else if(r=n())f=o(r);else if(!i){var s=t,a=s("vertx");u=function(t,e){return a.setTimer(e,t)},c=a.cancelTimer,f=a.runOnLoop||a.runOnContext}return{setTimer:u,clearTimer:c,asap:f}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t(e)})},{}],6:[function(e,n,o){!function(t){"use strict";t(function(){function t(t){var n="object"==typeof t&&null!==t&&(t.stack||t.message)?t.stack||t.message:e(t);return t instanceof Error?n:n+" (WARNING: non-Error used)"}function e(t){var e=String(t);return"[object Object]"===e&&"undefined"!=typeof JSON&&(e=n(t,e)),e}function n(t,e){try{return JSON.stringify(t)}catch(n){return e}}return{formatError:t,formatObject:e,tryStringify:n}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t()})},{}],7:[function(e,n,o){!function(t){"use strict";t(function(){return function(t){function e(t,e){this._handler=t===_?e:n(t)}function n(t){function e(t){r.resolve(t)}function n(t){r.reject(t)}function o(t){r.notify(t)}var r=new b;try{t(e,n,o)}catch(i){n(i)}return r}function o(t){return k(t)?t:new e(_,new x(v(t)))}function r(t){return new e(_,new x(new P(t)))}function i(){return $}function u(){return new e(_,new b)}function c(t,e){var n=new b(t.receiver,t.join().context);return new e(_,n)}function f(t){return a(B,null,t)}function s(t,e){return a(M,t,e)}function a(t,n,o){function r(e,r,u){u.resolved||h(o,i,e,t(n,r,e),u)}function i(t,e,n){a[t]=e,0===--s&&n.become(new q(a))}for(var u,c="function"==typeof n?r:i,f=new b,s=o.length>>>0,a=new Array(s),p=0;p<o.length&&!f.resolved;++p)u=o[p],void 0!==u||p in o?h(o,c,p,u,f):--s;return 0===s&&f.become(new q(a)),new e(_,f)}function h(t,e,n,o,r){if(U(o)){var i=m(o),u=i.state();0===u?i.fold(e,n,void 0,r):u>0?e(n,i.value,r):(r.become(i),p(t,n+1,i))}else e(n,o,r)}function p(t,e,n){for(var o=e;o<t.length;++o)l(v(t[o]),n)}function l(t,e){if(t!==e){var n=t.state();0===n?t.visit(t,void 0,t._unreport):0>n&&t._unreport()}}function d(t){return"object"!=typeof t||null===t?r(new TypeError("non-iterable passed to race()")):0===t.length?i():1===t.length?o(t[0]):y(t)}function y(t){var n,o,r,i=new b;for(n=0;n<t.length;++n)if(o=t[n],void 0!==o||n in t){if(r=v(o),0!==r.state()){i.become(r),p(t,n+1,r);break}r.visit(i,i.resolve,i.reject)}return new e(_,i)}function v(t){return k(t)?t._handler.join():U(t)?j(t):new q(t)}function m(t){return k(t)?t._handler.join():j(t)}function j(t){try{var e=t.then;return"function"==typeof e?new g(e,t):new q(t)}catch(n){return new P(n)}}function _(){}function w(){}function b(t,n){e.createContext(this,n),this.consumers=void 0,this.receiver=t,this.handler=void 0,this.resolved=!1}function x(t){this.handler=t}function g(t,e){b.call(this),G.enqueue(new E(t,e,this))}function q(t){e.createContext(this),this.value=t}function P(t){e.createContext(this),this.id=++Y,this.value=t,this.handled=!1,this.reported=!1,this._report()}function R(t,e){this.rejection=t,this.context=e}function C(t){this.rejection=t}function O(){return new P(new TypeError("Promise cycle"))}function T(t,e){this.continuation=t,this.handler=e}function Q(t,e){this.handler=e,this.value=t}function E(t,e,n){this._then=t,this.thenable=e,this.resolver=n}function L(t,e,n,o,r){try{t.call(e,n,o,r)}catch(i){o(i)}}function S(t,e,n,o){this.f=t,this.z=e,this.c=n,this.to=o,this.resolver=X,this.receiver=this}function k(t){return t instanceof e}function U(t){return("object"==typeof t||"function"==typeof t)&&null!==t}function H(t,n,o,r){return"function"!=typeof t?r.become(n):(e.enterContext(n),F(t,n.value,o,r),void e.exitContext())}function N(t,n,o,r,i){return"function"!=typeof t?i.become(o):(e.enterContext(o),W(t,n,o.value,r,i),void e.exitContext())}function J(t,n,o,r,i){return"function"!=typeof t?i.notify(n):(e.enterContext(o),z(t,n,r,i),void e.exitContext())}function M(t,e,n){try{return t(e,n)}catch(o){return r(o)}}function F(t,e,n,o){try{o.become(v(t.call(n,e)))}catch(r){o.become(new P(r))}}function W(t,e,n,o,r){try{t.call(o,e,n,r)}catch(i){r.become(new P(i))}}function z(t,e,n,o){try{o.notify(t.call(n,e))}catch(r){o.notify(r)}}function A(t,e){e.prototype=V(t.prototype),e.prototype.constructor=e}function B(t,e){return e}function K(){}function D(){return"undefined"!=typeof process&&null!==process&&"function"==typeof process.emit?function(t,e){return"unhandledRejection"===t?process.emit(t,e.value,e):process.emit(t,e)}:"undefined"!=typeof self&&"function"==typeof CustomEvent?function(t,e,n){var o=!1;try{var r=new n("unhandledRejection");o=r instanceof n}catch(i){}return o?function(t,o){var r=new n(t,{detail:{reason:o.value,key:o},bubbles:!1,cancelable:!0});return!e.dispatchEvent(r)}:t}(K,self,CustomEvent):K}var G=t.scheduler,I=D(),V=Object.create||function(t){function e(){}return e.prototype=t,new e};e.resolve=o,e.reject=r,e.never=i,e._defer=u,e._handler=v,e.prototype.then=function(t,e,n){var o=this._handler,r=o.join().state();if("function"!=typeof t&&r>0||"function"!=typeof e&&0>r)return new this.constructor(_,o);var i=this._beget(),u=i._handler;return o.chain(u,o.receiver,t,e,n),i},e.prototype["catch"]=function(t){return this.then(void 0,t)},e.prototype._beget=function(){return c(this._handler,this.constructor)},e.all=f,e.race=d,e._traverse=s,e._visitRemaining=p,_.prototype.when=_.prototype.become=_.prototype.notify=_.prototype.fail=_.prototype._unreport=_.prototype._report=K,_.prototype._state=0,_.prototype.state=function(){return this._state},_.prototype.join=function(){for(var t=this;void 0!==t.handler;)t=t.handler;return t},_.prototype.chain=function(t,e,n,o,r){this.when({resolver:t,receiver:e,fulfilled:n,rejected:o,progress:r})},_.prototype.visit=function(t,e,n,o){this.chain(X,t,e,n,o)},_.prototype.fold=function(t,e,n,o){this.when(new S(t,e,n,o))},A(_,w),w.prototype.become=function(t){t.fail()};var X=new w;A(_,b),b.prototype._state=0,b.prototype.resolve=function(t){this.become(v(t))},b.prototype.reject=function(t){this.resolved||this.become(new P(t))},b.prototype.join=function(){if(!this.resolved)return this;for(var t=this;void 0!==t.handler;)if(t=t.handler,t===this)return this.handler=O();return t},b.prototype.run=function(){var t=this.consumers,e=this.handler;this.handler=this.handler.join(),this.consumers=void 0;for(var n=0;n<t.length;++n)e.when(t[n])},b.prototype.become=function(t){this.resolved||(this.resolved=!0,this.handler=t,void 0!==this.consumers&&G.enqueue(this),void 0!==this.context&&t._report(this.context))},b.prototype.when=function(t){this.resolved?G.enqueue(new T(t,this.handler)):void 0===this.consumers?this.consumers=[t]:this.consumers.push(t)},b.prototype.notify=function(t){this.resolved||G.enqueue(new Q(t,this))},b.prototype.fail=function(t){var e="undefined"==typeof t?this.context:t;this.resolved&&this.handler.join().fail(e)},b.prototype._report=function(t){this.resolved&&this.handler.join()._report(t)},b.prototype._unreport=function(){this.resolved&&this.handler.join()._unreport()},A(_,x),x.prototype.when=function(t){G.enqueue(new T(t,this))},x.prototype._report=function(t){this.join()._report(t)},x.prototype._unreport=function(){this.join()._unreport()},A(b,g),A(_,q),q.prototype._state=1,q.prototype.fold=function(t,e,n,o){N(t,e,this,n,o)},q.prototype.when=function(t){H(t.fulfilled,this,t.receiver,t.resolver)};var Y=0;A(_,P),P.prototype._state=-1,P.prototype.fold=function(t,e,n,o){o.become(this)},P.prototype.when=function(t){"function"==typeof t.rejected&&this._unreport(),H(t.rejected,this,t.receiver,t.resolver)},P.prototype._report=function(t){G.afterQueue(new R(this,t))},P.prototype._unreport=function(){this.handled||(this.handled=!0,G.afterQueue(new C(this)))},P.prototype.fail=function(t){this.reported=!0,I("unhandledRejection",this),e.onFatalRejection(this,void 0===t?this.context:t)},R.prototype.run=function(){this.rejection.handled||this.rejection.reported||(this.rejection.reported=!0,I("unhandledRejection",this.rejection)||e.onPotentiallyUnhandledRejection(this.rejection,this.context))},C.prototype.run=function(){this.rejection.reported&&(I("rejectionHandled",this.rejection)||e.onPotentiallyUnhandledRejectionHandled(this.rejection))},e.createContext=e.enterContext=e.exitContext=e.onPotentiallyUnhandledRejection=e.onPotentiallyUnhandledRejectionHandled=e.onFatalRejection=K;var Z=new _,$=new e(_,Z);return T.prototype.run=function(){this.handler.join().when(this.continuation)},Q.prototype.run=function(){var t=this.handler.consumers;if(void 0!==t)for(var e,n=0;n<t.length;++n)e=t[n],J(e.progress,this.value,this.handler,e.receiver,e.resolver)},E.prototype.run=function(){function t(t){o.resolve(t)}function e(t){o.reject(t)}function n(t){o.notify(t)}var o=this.resolver;L(this._then,this.thenable,t,e,n)},S.prototype.fulfilled=function(t){this.f.call(this.c,this.z,t,this.to)},S.prototype.rejected=function(t){this.to.reject(t)},S.prototype.progress=function(t){this.to.notify(t)},e}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t()})},{}]},{},[1])(1)}),"undefined"!=typeof systemJSBootstrap&&systemJSBootstrap()}();
//# sourceMappingURL=system-polyfills.js.map

/*
 * SystemJS v0.19.31
 */
(function() {
function bootstrap() {// from https://gist.github.com/Yaffle/1088850
(function(global) {
function URLPolyfill(url, baseURL) {
  if (typeof url != 'string')
    throw new TypeError('URL must be a string');
  var m = String(url).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
  if (!m)
    throw new RangeError('Invalid URL format');
  var protocol = m[1] || "";
  var username = m[2] || "";
  var password = m[3] || "";
  var host = m[4] || "";
  var hostname = m[5] || "";
  var port = m[6] || "";
  var pathname = m[7] || "";
  var search = m[8] || "";
  var hash = m[9] || "";
  if (baseURL !== undefined) {
    var base = baseURL instanceof URLPolyfill ? baseURL : new URLPolyfill(baseURL);
    var flag = !protocol && !host && !username;
    if (flag && !pathname && !search)
      search = base.search;
    if (flag && pathname[0] !== "/")
      pathname = (pathname ? (((base.host || base.username) && !base.pathname ? "/" : "") + base.pathname.slice(0, base.pathname.lastIndexOf("/") + 1) + pathname) : base.pathname);
    // dot segments removal
    var output = [];
    pathname.replace(/^(\.\.?(\/|$))+/, "")
      .replace(/\/(\.(\/|$))+/g, "/")
      .replace(/\/\.\.$/, "/../")
      .replace(/\/?[^\/]*/g, function (p) {
        if (p === "/..")
          output.pop();
        else
          output.push(p);
      });
    pathname = output.join("").replace(/^\//, pathname[0] === "/" ? "/" : "");
    if (flag) {
      port = base.port;
      hostname = base.hostname;
      host = base.host;
      password = base.password;
      username = base.username;
    }
    if (!protocol)
      protocol = base.protocol;
  }

  // convert windows file URLs to use /
  if (protocol == 'file:')
    pathname = pathname.replace(/\\/g, '/');

  this.origin = host ? protocol + (protocol !== "" || host !== "" ? "//" : "") + host : "";
  this.href = protocol + (protocol && host || protocol == "file:" ? "//" : "") + (username !== "" ? username + (password !== "" ? ":" + password : "") + "@" : "") + host + pathname + search + hash;
  this.protocol = protocol;
  this.username = username;
  this.password = password;
  this.host = host;
  this.hostname = hostname;
  this.port = port;
  this.pathname = pathname;
  this.search = search;
  this.hash = hash;
}
global.URLPolyfill = URLPolyfill;
})(typeof self != 'undefined' ? self : global);(function(__global) {

  var isWorker = typeof window == 'undefined' && typeof self != 'undefined' && typeof importScripts != 'undefined';
  var isBrowser = typeof window != 'undefined' && typeof document != 'undefined';
  var isWindows = typeof process != 'undefined' && typeof process.platform != 'undefined' && !!process.platform.match(/^win/);

  if (!__global.console)
    __global.console = { assert: function() {} };

  // IE8 support
  var indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, thisLen = this.length; i < thisLen; i++) {
      if (this[i] === item) {
        return i;
      }
    }
    return -1;
  };
  
  var defineProperty;
  (function () {
    try {
      if (!!Object.defineProperty({}, 'a', {}))
        defineProperty = Object.defineProperty;
    }
    catch (e) {
      defineProperty = function(obj, prop, opt) {
        try {
          obj[prop] = opt.value || opt.get.call(obj);
        }
        catch(e) {}
      }
    }
  })();

  var errArgs = new Error(0, '_').fileName == '_';

  function addToError(err, msg) {
    // parse the stack removing loader code lines for simplification
    if (!err.originalErr) {
      var stack = (err.stack || err.message || err).toString().split('\n');
      var newStack = [];
      for (var i = 0; i < stack.length; i++) {
        if (typeof $__curScript == 'undefined' || stack[i].indexOf($__curScript.src) == -1)
          newStack.push(stack[i]);
      }
    }

    var newMsg = '(SystemJS) ' + (newStack ? newStack.join('\n\t') : err.message.substr(11)) + '\n\t' + msg;

    // Convert file:/// URLs to paths in Node
    if (!isBrowser)
      newMsg = newMsg.replace(isWindows ? /file:\/\/\//g : /file:\/\//g, '');

    var newErr = errArgs ? new Error(newMsg, err.fileName, err.lineNumber) : new Error(newMsg);
    
    // Node needs stack adjustment for throw to show message
    if (!isBrowser)
      newErr.stack = newMsg;
    // Clearing the stack stops unnecessary loader lines showing
    else
      newErr.stack = null;
    
    // track the original error
    newErr.originalErr = err.originalErr || err;

    return newErr;
  }

  function __eval(source, debugName, context) {
    try {
      new Function(source).call(context);
    }
    catch(e) {
      throw addToError(e, 'Evaluating ' + debugName);
    }
  }

  var baseURI;

  // environent baseURI detection
  if (typeof document != 'undefined' && document.getElementsByTagName) {
    baseURI = document.baseURI;

    if (!baseURI) {
      var bases = document.getElementsByTagName('base');
      baseURI = bases[0] && bases[0].href || window.location.href;
    }
  }
  else if (typeof location != 'undefined') {
    baseURI = __global.location.href;
  }

  // sanitize out the hash and querystring
  if (baseURI) {
    baseURI = baseURI.split('#')[0].split('?')[0];
    baseURI = baseURI.substr(0, baseURI.lastIndexOf('/') + 1);
  }
  else if (typeof process != 'undefined' && process.cwd) {
    baseURI = 'file://' + (isWindows ? '/' : '') + process.cwd() + '/';
    if (isWindows)
      baseURI = baseURI.replace(/\\/g, '/');
  }
  else {
    throw new TypeError('No environment baseURI');
  }

  try {
    var nativeURL = new __global.URL('test:///').protocol == 'test:';
  }
  catch(e) {}

  var URL = nativeURL ? __global.URL : __global.URLPolyfill;

/*
*********************************************************************************************

  Dynamic Module Loader Polyfill

    - Implemented exactly to the former 2014-08-24 ES6 Specification Draft Rev 27, Section 15
      http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_24_2014_draft_rev_27

    - Functions are commented with their spec numbers, with spec differences commented.

    - Spec bugs are commented in this code with links.

    - Abstract functions have been combined where possible, and their associated functions
      commented.

    - Realm implementation is entirely omitted.

*********************************************************************************************
*/

function Module() {}
// http://www.ecma-international.org/ecma-262/6.0/#sec-@@tostringtag
defineProperty(Module.prototype, 'toString', {
  value: function() {
    return 'Module';
  }
});
function Loader(options) {
  this._loader = {
    loaderObj: this,
    loads: [],
    modules: {},
    importPromises: {},
    moduleRecords: {}
  };

  // 26.3.3.6
  defineProperty(this, 'global', {
    get: function() {
      return __global;
    }
  });

  // 26.3.3.13 realm not implemented
}

(function() {

// Some Helpers

// logs a linkset snapshot for debugging
/* function snapshot(loader) {
  console.log('---Snapshot---');
  for (var i = 0; i < loader.loads.length; i++) {
    var load = loader.loads[i];
    var linkSetLog = '  ' + load.name + ' (' + load.status + '): ';

    for (var j = 0; j < load.linkSets.length; j++) {
      linkSetLog += '{' + logloads(load.linkSets[j].loads) + '} ';
    }
    console.log(linkSetLog);
  }
  console.log('');
}
function logloads(loads) {
  var log = '';
  for (var k = 0; k < loads.length; k++)
    log += loads[k].name + (k != loads.length - 1 ? ' ' : '');
  return log;
} */


/* function checkInvariants() {
  // see https://bugs.ecmascript.org/show_bug.cgi?id=2603#c1

  var loads = System._loader.loads;
  var linkSets = [];

  for (var i = 0; i < loads.length; i++) {
    var load = loads[i];
    console.assert(load.status == 'loading' || load.status == 'loaded', 'Each load is loading or loaded');

    for (var j = 0; j < load.linkSets.length; j++) {
      var linkSet = load.linkSets[j];

      for (var k = 0; k < linkSet.loads.length; k++)
        console.assert(loads.indexOf(linkSet.loads[k]) != -1, 'linkSet loads are a subset of loader loads');

      if (linkSets.indexOf(linkSet) == -1)
        linkSets.push(linkSet);
    }
  }

  for (var i = 0; i < loads.length; i++) {
    var load = loads[i];
    for (var j = 0; j < linkSets.length; j++) {
      var linkSet = linkSets[j];

      if (linkSet.loads.indexOf(load) != -1)
        console.assert(load.linkSets.indexOf(linkSet) != -1, 'linkSet contains load -> load contains linkSet');

      if (load.linkSets.indexOf(linkSet) != -1)
        console.assert(linkSet.loads.indexOf(load) != -1, 'load contains linkSet -> linkSet contains load');
    }
  }

  for (var i = 0; i < linkSets.length; i++) {
    var linkSet = linkSets[i];
    for (var j = 0; j < linkSet.loads.length; j++) {
      var load = linkSet.loads[j];

      for (var k = 0; k < load.dependencies.length; k++) {
        var depName = load.dependencies[k].value;
        var depLoad;
        for (var l = 0; l < loads.length; l++) {
          if (loads[l].name != depName)
            continue;
          depLoad = loads[l];
          break;
        }

        // loading records are allowed not to have their dependencies yet
        // if (load.status != 'loading')
        //  console.assert(depLoad, 'depLoad found');

        // console.assert(linkSet.loads.indexOf(depLoad) != -1, 'linkset contains all dependencies');
      }
    }
  }
} */

  // 15.2.3 - Runtime Semantics: Loader State

  // 15.2.3.11
  function createLoaderLoad(object) {
    return {
      // modules is an object for ES5 implementation
      modules: {},
      loads: [],
      loaderObj: object
    };
  }

  // 15.2.3.2 Load Records and LoadRequest Objects

  var anonCnt = 0;

  // 15.2.3.2.1
  function createLoad(name) {
    return {
      status: 'loading',
      name: name || '<Anonymous' + ++anonCnt + '>',
      linkSets: [],
      dependencies: [],
      metadata: {}
    };
  }

  // 15.2.3.2.2 createLoadRequestObject, absorbed into calling functions

  // 15.2.4

  // 15.2.4.1
  function loadModule(loader, name, options) {
    return new Promise(asyncStartLoadPartwayThrough({
      step: options.address ? 'fetch' : 'locate',
      loader: loader,
      moduleName: name,
      // allow metadata for import https://bugs.ecmascript.org/show_bug.cgi?id=3091
      moduleMetadata: options && options.metadata || {},
      moduleSource: options.source,
      moduleAddress: options.address
    }));
  }

  // 15.2.4.2
  function requestLoad(loader, request, refererName, refererAddress) {
    // 15.2.4.2.1 CallNormalize
    return new Promise(function(resolve, reject) {
      resolve(loader.loaderObj.normalize(request, refererName, refererAddress));
    })
    // 15.2.4.2.2 GetOrCreateLoad
    .then(function(name) {
      var load;
      if (loader.modules[name]) {
        load = createLoad(name);
        load.status = 'linked';
        // https://bugs.ecmascript.org/show_bug.cgi?id=2795
        load.module = loader.modules[name];
        return load;
      }

      for (var i = 0, l = loader.loads.length; i < l; i++) {
        load = loader.loads[i];
        if (load.name != name)
          continue;
        return load;
      }

      load = createLoad(name);
      loader.loads.push(load);

      proceedToLocate(loader, load);

      return load;
    });
  }

  // 15.2.4.3
  function proceedToLocate(loader, load) {
    proceedToFetch(loader, load,
      Promise.resolve()
      // 15.2.4.3.1 CallLocate
      .then(function() {
        return loader.loaderObj.locate({ name: load.name, metadata: load.metadata });
      })
    );
  }

  // 15.2.4.4
  function proceedToFetch(loader, load, p) {
    proceedToTranslate(loader, load,
      p
      // 15.2.4.4.1 CallFetch
      .then(function(address) {
        // adjusted, see https://bugs.ecmascript.org/show_bug.cgi?id=2602
        if (load.status != 'loading')
          return;
        load.address = address;

        return loader.loaderObj.fetch({ name: load.name, metadata: load.metadata, address: address });
      })
    );
  }

  // 15.2.4.5
  function proceedToTranslate(loader, load, p) {
    p
    // 15.2.4.5.1 CallTranslate
    .then(function(source) {
      if (load.status != 'loading')
        return;

      load.address = load.address || load.name;

      return Promise.resolve(loader.loaderObj.translate({ name: load.name, metadata: load.metadata, address: load.address, source: source }))

      // 15.2.4.5.2 CallInstantiate
      .then(function(source) {
        load.source = source;
        return loader.loaderObj.instantiate({ name: load.name, metadata: load.metadata, address: load.address, source: source });
      })

      // 15.2.4.5.3 InstantiateSucceeded
      .then(function(instantiateResult) {
        if (instantiateResult === undefined)
          throw new TypeError('Declarative modules unsupported in the polyfill.');
        
        if (typeof instantiateResult != 'object')
          throw new TypeError('Invalid instantiate return value');

        load.depsList = instantiateResult.deps || [];
        load.execute = instantiateResult.execute;
      })
      // 15.2.4.6 ProcessLoadDependencies
      .then(function() {
        load.dependencies = [];
        var depsList = load.depsList;

        var loadPromises = [];
        for (var i = 0, l = depsList.length; i < l; i++) (function(request, index) {
          loadPromises.push(
            requestLoad(loader, request, load.name, load.address)

            // 15.2.4.6.1 AddDependencyLoad (load is parentLoad)
            .then(function(depLoad) {

              // adjusted from spec to maintain dependency order
              // this is due to the System.register internal implementation needs
              load.dependencies[index] = {
                key: request,
                value: depLoad.name
              };

              if (depLoad.status != 'linked') {
                var linkSets = load.linkSets.concat([]);
                for (var i = 0, l = linkSets.length; i < l; i++)
                  addLoadToLinkSet(linkSets[i], depLoad);
              }

              // console.log('AddDependencyLoad ' + depLoad.name + ' for ' + load.name);
              // snapshot(loader);
            })
          );
        })(depsList[i], i);

        return Promise.all(loadPromises);
      })

      // 15.2.4.6.2 LoadSucceeded
      .then(function() {
        // console.log('LoadSucceeded ' + load.name);
        // snapshot(loader);

        console.assert(load.status == 'loading', 'is loading');

        load.status = 'loaded';

        var linkSets = load.linkSets.concat([]);
        for (var i = 0, l = linkSets.length; i < l; i++)
          updateLinkSetOnLoad(linkSets[i], load);
      });
    })
    // 15.2.4.5.4 LoadFailed
    ['catch'](function(exc) {
      load.status = 'failed';
      load.exception = exc;

      var linkSets = load.linkSets.concat([]);
      for (var i = 0, l = linkSets.length; i < l; i++) {
        linkSetFailed(linkSets[i], load, exc);
      }

      console.assert(load.linkSets.length == 0, 'linkSets not removed');
    });
  }

  // 15.2.4.7 PromiseOfStartLoadPartwayThrough absorbed into calling functions

  // 15.2.4.7.1
  function asyncStartLoadPartwayThrough(stepState) {
    return function(resolve, reject) {
      var loader = stepState.loader;
      var name = stepState.moduleName;
      var step = stepState.step;

      if (loader.modules[name])
        throw new TypeError('"' + name + '" already exists in the module table');

      // adjusted to pick up existing loads
      var existingLoad;
      for (var i = 0, l = loader.loads.length; i < l; i++) {
        if (loader.loads[i].name == name) {
          existingLoad = loader.loads[i];

          if (step == 'translate' && !existingLoad.source) {
            existingLoad.address = stepState.moduleAddress;
            proceedToTranslate(loader, existingLoad, Promise.resolve(stepState.moduleSource));
          }

          // a primary load -> use that existing linkset if it is for the direct load here
          // otherwise create a new linkset unit
          if (existingLoad.linkSets.length && existingLoad.linkSets[0].loads[0].name == existingLoad.name)
            return existingLoad.linkSets[0].done.then(function() {
              resolve(existingLoad);
            });
        }
      }

      var load = existingLoad || createLoad(name);

      load.metadata = stepState.moduleMetadata;

      var linkSet = createLinkSet(loader, load);

      loader.loads.push(load);

      resolve(linkSet.done);

      if (step == 'locate')
        proceedToLocate(loader, load);

      else if (step == 'fetch')
        proceedToFetch(loader, load, Promise.resolve(stepState.moduleAddress));

      else {
        console.assert(step == 'translate', 'translate step');
        load.address = stepState.moduleAddress;
        proceedToTranslate(loader, load, Promise.resolve(stepState.moduleSource));
      }
    }
  }

  // Declarative linking functions run through alternative implementation:
  // 15.2.5.1.1 CreateModuleLinkageRecord not implemented
  // 15.2.5.1.2 LookupExport not implemented
  // 15.2.5.1.3 LookupModuleDependency not implemented

  // 15.2.5.2.1
  function createLinkSet(loader, startingLoad) {
    var linkSet = {
      loader: loader,
      loads: [],
      startingLoad: startingLoad, // added see spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
      loadingCount: 0
    };
    linkSet.done = new Promise(function(resolve, reject) {
      linkSet.resolve = resolve;
      linkSet.reject = reject;
    });
    addLoadToLinkSet(linkSet, startingLoad);
    return linkSet;
  }
  // 15.2.5.2.2
  function addLoadToLinkSet(linkSet, load) {
    if (load.status == 'failed')
      return;

    for (var i = 0, l = linkSet.loads.length; i < l; i++)
      if (linkSet.loads[i] == load)
        return;

    linkSet.loads.push(load);
    load.linkSets.push(linkSet);

    // adjustment, see https://bugs.ecmascript.org/show_bug.cgi?id=2603
    if (load.status != 'loaded') {
      linkSet.loadingCount++;
    }

    var loader = linkSet.loader;

    for (var i = 0, l = load.dependencies.length; i < l; i++) {
      if (!load.dependencies[i])
        continue;

      var name = load.dependencies[i].value;

      if (loader.modules[name])
        continue;

      for (var j = 0, d = loader.loads.length; j < d; j++) {
        if (loader.loads[j].name != name)
          continue;

        addLoadToLinkSet(linkSet, loader.loads[j]);
        break;
      }
    }
    // console.log('add to linkset ' + load.name);
    // snapshot(linkSet.loader);
  }

  // linking errors can be generic or load-specific
  // this is necessary for debugging info
  function doLink(linkSet) {
    var error = false;
    try {
      link(linkSet, function(load, exc) {
        linkSetFailed(linkSet, load, exc);
        error = true;
      });
    }
    catch(e) {
      linkSetFailed(linkSet, null, e);
      error = true;
    }
    return error;
  }

  // 15.2.5.2.3
  function updateLinkSetOnLoad(linkSet, load) {
    // console.log('update linkset on load ' + load.name);
    // snapshot(linkSet.loader);

    console.assert(load.status == 'loaded' || load.status == 'linked', 'loaded or linked');

    linkSet.loadingCount--;

    if (linkSet.loadingCount > 0)
      return;

    // adjusted for spec bug https://bugs.ecmascript.org/show_bug.cgi?id=2995
    var startingLoad = linkSet.startingLoad;

    // non-executing link variation for loader tracing
    // on the server. Not in spec.
    /***/
    if (linkSet.loader.loaderObj.execute === false) {
      var loads = [].concat(linkSet.loads);
      for (var i = 0, l = loads.length; i < l; i++) {
        var load = loads[i];
        load.module = {
          name: load.name,
          module: _newModule({}),
          evaluated: true
        };
        load.status = 'linked';
        finishLoad(linkSet.loader, load);
      }
      return linkSet.resolve(startingLoad);
    }
    /***/

    var abrupt = doLink(linkSet);

    if (abrupt)
      return;

    console.assert(linkSet.loads.length == 0, 'loads cleared');

    linkSet.resolve(startingLoad);
  }

  // 15.2.5.2.4
  function linkSetFailed(linkSet, load, exc) {
    var loader = linkSet.loader;
    var requests;

    checkError: 
    if (load) {
      if (linkSet.loads[0].name == load.name) {
        exc = addToError(exc, 'Error loading ' + load.name);
      }
      else {
        for (var i = 0; i < linkSet.loads.length; i++) {
          var pLoad = linkSet.loads[i];
          for (var j = 0; j < pLoad.dependencies.length; j++) {
            var dep = pLoad.dependencies[j];
            if (dep.value == load.name) {
              exc = addToError(exc, 'Error loading ' + load.name + ' as "' + dep.key + '" from ' + pLoad.name);
              break checkError;
            }
          }
        }
        exc = addToError(exc, 'Error loading ' + load.name + ' from ' + linkSet.loads[0].name);
      }
    }
    else {
      exc = addToError(exc, 'Error linking ' + linkSet.loads[0].name);
    }


    var loads = linkSet.loads.concat([]);
    for (var i = 0, l = loads.length; i < l; i++) {
      var load = loads[i];

      // store all failed load records
      loader.loaderObj.failed = loader.loaderObj.failed || [];
      if (indexOf.call(loader.loaderObj.failed, load) == -1)
        loader.loaderObj.failed.push(load);

      var linkIndex = indexOf.call(load.linkSets, linkSet);
      console.assert(linkIndex != -1, 'link not present');
      load.linkSets.splice(linkIndex, 1);
      if (load.linkSets.length == 0) {
        var globalLoadsIndex = indexOf.call(linkSet.loader.loads, load);
        if (globalLoadsIndex != -1)
          linkSet.loader.loads.splice(globalLoadsIndex, 1);
      }
    }
    linkSet.reject(exc);
  }

  // 15.2.5.2.5
  function finishLoad(loader, load) {
    // add to global trace if tracing
    if (loader.loaderObj.trace) {
      if (!loader.loaderObj.loads)
        loader.loaderObj.loads = {};
      var depMap = {};
      load.dependencies.forEach(function(dep) {
        depMap[dep.key] = dep.value;
      });
      loader.loaderObj.loads[load.name] = {
        name: load.name,
        deps: load.dependencies.map(function(dep){ return dep.key }),
        depMap: depMap,
        address: load.address,
        metadata: load.metadata,
        source: load.source
      };
    }
    // if not anonymous, add to the module table
    if (load.name) {
      console.assert(!loader.modules[load.name] || loader.modules[load.name].module === load.module.module, 'load not in module table');
      loader.modules[load.name] = load.module;
    }
    var loadIndex = indexOf.call(loader.loads, load);
    if (loadIndex != -1)
      loader.loads.splice(loadIndex, 1);
    for (var i = 0, l = load.linkSets.length; i < l; i++) {
      loadIndex = indexOf.call(load.linkSets[i].loads, load);
      if (loadIndex != -1)
        load.linkSets[i].loads.splice(loadIndex, 1);
    }
    load.linkSets.splice(0, load.linkSets.length);
  }

  function doDynamicExecute(linkSet, load, linkError) {
    try {
      var module = load.execute();
    }
    catch(e) {
      linkError(load, e);
      return;
    }
    if (!module || !(module instanceof Module))
      linkError(load, new TypeError('Execution must define a Module instance'));
    else
      return module;
  }

  // 26.3 Loader

  // 26.3.1.1
  // defined at top

  // importPromises adds ability to import a module twice without error - https://bugs.ecmascript.org/show_bug.cgi?id=2601
  function createImportPromise(loader, name, promise) {
    var importPromises = loader._loader.importPromises;
    return importPromises[name] = promise.then(function(m) {
      importPromises[name] = undefined;
      return m;
    }, function(e) {
      importPromises[name] = undefined;
      throw e;
    });
  }

  Loader.prototype = {
    // 26.3.3.1
    constructor: Loader,
    // 26.3.3.2
    define: function(name, source, options) {
      // check if already defined
      if (this._loader.importPromises[name])
        throw new TypeError('Module is already loading.');
      return createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
        step: 'translate',
        loader: this._loader,
        moduleName: name,
        moduleMetadata: options && options.metadata || {},
        moduleSource: source,
        moduleAddress: options && options.address
      })));
    },
    // 26.3.3.3
    'delete': function(name) {
      var loader = this._loader;
      delete loader.importPromises[name];
      delete loader.moduleRecords[name];
      return loader.modules[name] ? delete loader.modules[name] : false;
    },
    // 26.3.3.4 entries not implemented
    // 26.3.3.5
    get: function(key) {
      if (!this._loader.modules[key])
        return;
      return this._loader.modules[key].module;
    },
    // 26.3.3.7
    has: function(name) {
      return !!this._loader.modules[name];
    },
    // 26.3.3.8
    'import': function(name, parentName, parentAddress) {
      if (typeof parentName == 'object')
        parentName = parentName.name;

      // run normalize first
      var loaderObj = this;

      // added, see https://bugs.ecmascript.org/show_bug.cgi?id=2659
      return Promise.resolve(loaderObj.normalize(name, parentName))
      .then(function(name) {
        var loader = loaderObj._loader;

        if (loader.modules[name])
          return loader.modules[name].module;

        return loader.importPromises[name] || createImportPromise(loaderObj, name,
          loadModule(loader, name, {})
          .then(function(load) {
            delete loader.importPromises[name];
            return load.module.module;
          }));
      });
    },
    // 26.3.3.9 keys not implemented
    // 26.3.3.10
    load: function(name) {
      var loader = this._loader;
      if (loader.modules[name])
        return Promise.resolve();
      return loader.importPromises[name] || createImportPromise(this, name, new Promise(asyncStartLoadPartwayThrough({
        step: 'locate',
        loader: loader,
        moduleName: name,
        moduleMetadata: {},
        moduleSource: undefined,
        moduleAddress: undefined
      }))
      .then(function() {
        delete loader.importPromises[name];
      }));
    },
    // 26.3.3.11
    module: function(source, options) {
      var load = createLoad();
      load.address = options && options.address;
      var linkSet = createLinkSet(this._loader, load);
      var sourcePromise = Promise.resolve(source);
      var loader = this._loader;
      var p = linkSet.done.then(function() {
        return load.module.module;
      });
      proceedToTranslate(loader, load, sourcePromise);
      return p;
    },
    // 26.3.3.12
    newModule: function (obj) {
      if (typeof obj != 'object')
        throw new TypeError('Expected object');

      var m = new Module();

      var pNames = [];
      if (Object.getOwnPropertyNames && obj != null)
        pNames = Object.getOwnPropertyNames(obj);
      else
        for (var key in obj)
          pNames.push(key);

      for (var i = 0; i < pNames.length; i++) (function(key) {
        defineProperty(m, key, {
          configurable: false,
          enumerable: true,
          get: function () {
            return obj[key];
          },
          set: function() {
            throw new Error('Module exports cannot be changed externally.');
          }
        });
      })(pNames[i]);

      if (Object.freeze)
        Object.freeze(m);

      return m;
    },
    // 26.3.3.14
    set: function(name, module) {
      if (!(module instanceof Module))
        throw new TypeError('Loader.set(' + name + ', module) must be a module');
      this._loader.modules[name] = {
        module: module
      };
    },
    // 26.3.3.15 values not implemented
    // 26.3.3.16 @@iterator not implemented
    // 26.3.3.17 @@toStringTag not implemented

    // 26.3.3.18.1
    normalize: function(name, referrerName, referrerAddress) {},
    // 26.3.3.18.2
    locate: function(load) {
      return load.name;
    },
    // 26.3.3.18.3
    fetch: function(load) {
    },
    // 26.3.3.18.4
    translate: function(load) {
      return load.source;
    },
    // 26.3.3.18.5
    instantiate: function(load) {
    }
  };

  var _newModule = Loader.prototype.newModule;

/*
 * ES6 Module Declarative Linking Code
 */
  function link(linkSet, linkError) {

    var loader = linkSet.loader;

    if (!linkSet.loads.length)
      return;

    var loads = linkSet.loads.concat([]);

    for (var i = 0; i < loads.length; i++) {
      var load = loads[i];

      var module = doDynamicExecute(linkSet, load, linkError);
      if (!module)
        return;
      load.module = {
        name: load.name,
        module: module
      };
      load.status = 'linked';

      finishLoad(loader, load);
    }
  }

})();

var System;

  var fetchTextFromURL;
  if (typeof XMLHttpRequest != 'undefined') {
    fetchTextFromURL = function(url, authorization, fulfill, reject) {
      var xhr = new XMLHttpRequest();
      var sameDomain = true;
      var doTimeout = false;
      if (!('withCredentials' in xhr)) {
        // check if same domain
        var domainCheck = /^(\w+:)?\/\/([^\/]+)/.exec(url);
        if (domainCheck) {
          sameDomain = domainCheck[2] === window.location.host;
          if (domainCheck[1])
            sameDomain &= domainCheck[1] === window.location.protocol;
        }
      }
      if (!sameDomain && typeof XDomainRequest != 'undefined') {
        xhr = new XDomainRequest();
        xhr.onload = load;
        xhr.onerror = error;
        xhr.ontimeout = error;
        xhr.onprogress = function() {};
        xhr.timeout = 0;
        doTimeout = true;
      }
      function load() {
        fulfill(xhr.responseText);
      }
      function error() {
        reject(new Error('XHR error' + (xhr.status ? ' (' + xhr.status + (xhr.statusText ? ' ' + xhr.statusText  : '') + ')' : '') + ' loading ' + url));
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          // in Chrome on file:/// URLs, status is 0
          if (xhr.status == 0) {
            if (xhr.responseText) {
              load();
            }
            else {
              // when responseText is empty, wait for load or error event
              // to inform if it is a 404 or empty file
              xhr.addEventListener('error', error);
              xhr.addEventListener('load', load);
            }
          }
          else if (xhr.status === 200) {
            load();
          }
          else {
            error();
          }
        }
      };
      xhr.open("GET", url, true);

      if (xhr.setRequestHeader) {
        xhr.setRequestHeader('Accept', 'application/x-es-module, */*');
        // can set "authorization: true" to enable withCredentials only
        if (authorization) {
          if (typeof authorization == 'string')
            xhr.setRequestHeader('Authorization', authorization);
          xhr.withCredentials = true;
        }
      }

      if (doTimeout) {
        setTimeout(function() {
          xhr.send();
        }, 0);
      } else {
        xhr.send(null);
      }
    };
  }
  else if (typeof require != 'undefined' && typeof process != 'undefined') {
    var fs;
    fetchTextFromURL = function(url, authorization, fulfill, reject) {
      if (url.substr(0, 8) != 'file:///')
        throw new Error('Unable to fetch "' + url + '". Only file URLs of the form file:/// allowed running in Node.');
      fs = fs || require('fs');
      if (isWindows)
        url = url.replace(/\//g, '\\').substr(8);
      else
        url = url.substr(7);
      return fs.readFile(url, function(err, data) {
        if (err) {
          return reject(err);
        }
        else {
          // Strip Byte Order Mark out if it's the leading char
          var dataString = data + '';
          if (dataString[0] === '\ufeff')
            dataString = dataString.substr(1);

          fulfill(dataString);
        }
      });
    };
  }
  else if (typeof self != 'undefined' && typeof self.fetch != 'undefined') {
    fetchTextFromURL = function(url, authorization, fulfill, reject) {
      var opts = {
        headers: {'Accept': 'application/x-es-module, */*'}
      };

      if (authorization) {
        if (typeof authorization == 'string')
          opts.headers['Authorization'] = authorization;
        opts.credentials = 'include';
      }

      fetch(url, opts)
        .then(function (r) {
          if (r.ok) {
            return r.text();
          } else {
            throw new Error('Fetch error: ' + r.status + ' ' + r.statusText);
          }
        })
        .then(fulfill, reject);
    }
  }
  else {
    throw new TypeError('No environment fetch API available.');
  }
/*
 * Traceur, Babel and TypeScript transpile hook for Loader
 */
var transpile = (function() {

  // use Traceur by default
  Loader.prototype.transpiler = 'traceur';

  function transpile(load) {
    var self = this;

    return Promise.resolve(__global[self.transpiler == 'typescript' ? 'ts' : self.transpiler]
        || (self.pluginLoader || self)['import'](self.transpiler))
    .then(function(transpiler) {
      if (transpiler.__useDefault)
        transpiler = transpiler['default'];

      var transpileFunction;
      if (transpiler.Compiler)
        transpileFunction = traceurTranspile;
      else if (transpiler.createLanguageService)
        transpileFunction = typescriptTranspile;
      else
        transpileFunction = babelTranspile;

      // note __moduleName will be part of the transformer meta in future when we have the spec for this
      return '(function(__moduleName){' + transpileFunction.call(self, load, transpiler) + '\n})("' + load.name + '");\n//# sourceURL=' + load.address + '!transpiled';
    });
  };

  function traceurTranspile(load, traceur) {
    var options = this.traceurOptions || {};
    options.modules = 'instantiate';
    options.script = false;
    if (options.sourceMaps === undefined)
      options.sourceMaps = 'inline';
    options.filename = load.address;
    options.inputSourceMap = load.metadata.sourceMap;
    options.moduleName = false;

    var compiler = new traceur.Compiler(options);

    return doTraceurCompile(load.source, compiler, options.filename);
  }
  function doTraceurCompile(source, compiler, filename) {
    try {
      return compiler.compile(source, filename);
    }
    catch(e) {
      // on older versions of traceur (<0.9.3), an array of errors is thrown
      // rather than a single error.
      if (e.length) {
        throw e[0];
      }
      throw e;
    }
  }

  function babelTranspile(load, babel) {
    var options = this.babelOptions || {};
    options.modules = 'system';
    if (options.sourceMap === undefined)
      options.sourceMap = 'inline';
    options.inputSourceMap = load.metadata.sourceMap;
    options.filename = load.address;
    options.code = true;
    options.ast = false;

    return babel.transform(load.source, options).code;
  }

  function typescriptTranspile(load, ts) {
    var options = this.typescriptOptions || {};
    options.target = options.target || ts.ScriptTarget.ES5;
    if (options.sourceMap === undefined)
      options.sourceMap = true;
    if (options.sourceMap && options.inlineSourceMap !== false)
      options.inlineSourceMap = true;

    options.module = ts.ModuleKind.System;

    return ts.transpile(load.source, options, load.address);
  }

  return transpile;
})();
// SystemJS Loader Class and Extension helpers
function SystemJSLoader() {
  Loader.call(this);

  this.paths = {};
  this._loader.paths = {};

  systemJSConstructor.call(this);
}

// inline Object.create-style class extension
function SystemProto() {};
SystemProto.prototype = Loader.prototype;
SystemJSLoader.prototype = new SystemProto();
SystemJSLoader.prototype.constructor = SystemJSLoader;

var systemJSConstructor;

function hook(name, hook) {
  SystemJSLoader.prototype[name] = hook(SystemJSLoader.prototype[name] || function() {});
}
function hookConstructor(hook) {
  systemJSConstructor = hook(systemJSConstructor || function() {});
}


var absURLRegEx = /^[^\/]+:\/\//;
function isAbsolute(name) {
  return name.match(absURLRegEx);
}
function isRel(name) {
  return (name[0] == '.' && (!name[1] || name[1] == '/' || name[1] == '.')) || name[0] == '/';
}
function isPlain(name) {
  return !isRel(name) && !isAbsolute(name);
}

var baseURIObj = new URL(baseURI);

function urlResolve(name, parent) {
  // url resolution shortpaths
  if (name[0] == '.') {
    // dot-relative url normalization
    if (name[1] == '/' && name[2] != '.')
      return (parent && parent.substr(0, parent.lastIndexOf('/') + 1) || baseURI) + name.substr(2);
  }
  else if (name[0] != '/' && name.indexOf(':') == -1) {
    // plain parent normalization
    return (parent && parent.substr(0, parent.lastIndexOf('/') + 1) || baseURI) + name;
  }

  return new URL(name, parent && parent.replace(/#/g, '%05') || baseURIObj).href.replace(/%05/g, '#');
}

// NB no specification provided for System.paths, used ideas discussed in https://github.com/jorendorff/js-loaders/issues/25
function applyPaths(loader, name) {
  // most specific (most number of slashes in path) match wins
  var pathMatch = '', wildcard, maxWildcardPrefixLen = 0;

  var paths = loader.paths;
  var pathsCache = loader._loader.paths;

  // check to see if we have a paths entry
  for (var p in paths) {
    if (paths.hasOwnProperty && !paths.hasOwnProperty(p))
      continue;

    // paths sanitization
    var path = paths[p];
    if (path !== pathsCache[p])
      path = paths[p] = pathsCache[p] = urlResolve(paths[p], isRel(paths[p]) ? baseURI : loader.baseURL);

    // exact path match
    if (p.indexOf('*') === -1) {
      if (name == p)
        return paths[p];
      
      // support trailing / in paths rules
      else if (name.substr(0, p.length - 1) == p.substr(0, p.length - 1) && (name.length < p.length || name[p.length - 1] == p[p.length - 1]) && (paths[p][paths[p].length - 1] == '/' || paths[p] == '')) {
        return paths[p].substr(0, paths[p].length - 1) + (name.length > p.length ? (paths[p] && '/' || '') + name.substr(p.length) : '');
      }
    }
    // wildcard path match
    else {
      var pathParts = p.split('*');
      if (pathParts.length > 2)
        throw new TypeError('Only one wildcard in a path is permitted');

      var wildcardPrefixLen = pathParts[0].length;
      if (wildcardPrefixLen >= maxWildcardPrefixLen &&
          name.substr(0, pathParts[0].length) == pathParts[0] &&
          name.substr(name.length - pathParts[1].length) == pathParts[1]) {
            maxWildcardPrefixLen = wildcardPrefixLen;
            pathMatch = p;
            wildcard = name.substr(pathParts[0].length, name.length - pathParts[1].length - pathParts[0].length);
          }
    }
  }

  var outPath = paths[pathMatch];
  if (typeof wildcard == 'string')
    outPath = outPath.replace('*', wildcard);

  return outPath;
}

function dedupe(deps) {
  var newDeps = [];
  for (var i = 0, l = deps.length; i < l; i++)
    if (indexOf.call(newDeps, deps[i]) == -1)
      newDeps.push(deps[i])
  return newDeps;
}

function group(deps) {
  var names = [];
  var indices = [];
  for (var i = 0, l = deps.length; i < l; i++) {
    var index = indexOf.call(names, deps[i]);
    if (index === -1) {
      names.push(deps[i]);
      indices.push([i]);
    }
    else {
      indices[index].push(i);
    }
  }
  return { names: names, indices: indices };
}

var getOwnPropertyDescriptor = true;
try {
  Object.getOwnPropertyDescriptor({ a: 0 }, 'a');
}
catch(e) {
  getOwnPropertyDescriptor = false;
}

// converts any module.exports object into an object ready for SystemJS.newModule
function getESModule(exports) {
  var esModule = {};
  // don't trigger getters/setters in environments that support them
  if ((typeof exports == 'object' || typeof exports == 'function') && exports !== __global) {
      if (getOwnPropertyDescriptor) {
        for (var p in exports) {
          // The default property is copied to esModule later on
          if (p === 'default')
            continue;
          defineOrCopyProperty(esModule, exports, p);
        }
      }
      else {
        extend(esModule, exports);
      }
  }
  esModule['default'] = exports;
  defineProperty(esModule, '__useDefault', {
    value: true
  });
  return esModule;
}

function defineOrCopyProperty(targetObj, sourceObj, propName) {
  try {
    var d;
    if (d = Object.getOwnPropertyDescriptor(sourceObj, propName))
      defineProperty(targetObj, propName, d);
  }
  catch (ex) {
    // Object.getOwnPropertyDescriptor threw an exception, fall back to normal set property
    // we dont need hasOwnProperty here because getOwnPropertyDescriptor would have returned undefined above
    targetObj[propName] = sourceObj[propName];
    return false;
  }
}

function extend(a, b, prepend) {
  var hasOwnProperty = b && b.hasOwnProperty;
  for (var p in b) {
    if (hasOwnProperty && !b.hasOwnProperty(p))
      continue;
    if (!prepend || !(p in a))
      a[p] = b[p];
  }
  return a;
}

// meta first-level extends where:
// array + array appends
// object + object extends
// other properties replace
function extendMeta(a, b, prepend) {
  var hasOwnProperty = b && b.hasOwnProperty;
  for (var p in b) {
    if (hasOwnProperty && !b.hasOwnProperty(p))
      continue;
    var val = b[p];
    if (!(p in a))
      a[p] = val;
    else if (val instanceof Array && a[p] instanceof Array)
      a[p] = [].concat(prepend ? val : a[p]).concat(prepend ? a[p] : val);
    else if (typeof val == 'object' && val !== null && typeof a[p] == 'object')
      a[p] = extend(extend({}, a[p]), val, prepend);
    else if (!prepend)
      a[p] = val;
  }
}

function extendPkgConfig(pkgCfgA, pkgCfgB, pkgName, loader, warnInvalidProperties) {
  for (var prop in pkgCfgB) {
    if (indexOf.call(['main', 'format', 'defaultExtension', 'basePath'], prop) != -1) {
      pkgCfgA[prop] = pkgCfgB[prop];
    }
    else if (prop == 'map') {
      extend(pkgCfgA.map = pkgCfgA.map || {}, pkgCfgB.map);
    }
    else if (prop == 'meta') {
      extend(pkgCfgA.meta = pkgCfgA.meta || {}, pkgCfgB.meta);
    }
    else if (prop == 'depCache') {
      for (var d in pkgCfgB.depCache) {
        var dNormalized;

        if (d.substr(0, 2) == './')
          dNormalized = pkgName + '/' + d.substr(2);
        else
          dNormalized = coreResolve.call(loader, d);
        loader.depCache[dNormalized] = (loader.depCache[dNormalized] || []).concat(pkgCfgB.depCache[d]);
      }
    }
    else if (warnInvalidProperties && indexOf.call(['browserConfig', 'nodeConfig', 'devConfig', 'productionConfig'], prop) == -1 && 
        (!pkgCfgB.hasOwnProperty || pkgCfgB.hasOwnProperty(prop))) {
      warn.call(loader, '"' + prop + '" is not a valid package configuration option in package ' + pkgName);
    }
  }
}

// deeply-merge (to first level) config with any existing package config
function setPkgConfig(loader, pkgName, cfg, prependConfig) {
  var pkg;

  // first package is config by reference for fast path, cloned after that
  if (!loader.packages[pkgName]) {
    pkg = loader.packages[pkgName] = cfg;
  }
  else {
    var basePkg = loader.packages[pkgName];
    pkg = loader.packages[pkgName] = {};

    extendPkgConfig(pkg, prependConfig ? cfg : basePkg, pkgName, loader, prependConfig);
    extendPkgConfig(pkg, prependConfig ? basePkg : cfg, pkgName, loader, !prependConfig);
  }
  
  // main object becomes main map
  if (typeof pkg.main == 'object') {
    pkg.map = pkg.map || {};
    pkg.map['./@main'] = pkg.main;
    pkg.main['default'] = pkg.main['default'] || './';
    pkg.main = '@main';
  }

  return pkg;
}

function warn(msg) {
  if (this.warnings && typeof console != 'undefined' && console.warn)
    console.warn(msg);
}
// we define a __exec for globally-scoped execution
// used by module format implementations
var __exec;

(function() {

  var hasBtoa = typeof btoa != 'undefined';

  function getSource(load, wrap) {
    var lastLineIndex = load.source.lastIndexOf('\n');

    // wrap ES formats with a System closure for System global encapsulation
    if (load.metadata.format == 'global')
      wrap = false;

    var sourceMap = load.metadata.sourceMap;
    if (sourceMap) {
      if (typeof sourceMap != 'object')
        throw new TypeError('load.metadata.sourceMap must be set to an object.');

      sourceMap = JSON.stringify(sourceMap);
    }

    return (wrap ? '(function(System, SystemJS) {' : '') + load.source + (wrap ? '\n})(System, System);' : '')
        // adds the sourceURL comment if not already present
        + (load.source.substr(lastLineIndex, 15) != '\n//# sourceURL=' 
          ? '\n//# sourceURL=' + load.address + (sourceMap ? '!transpiled' : '') : '')
        // add sourceMappingURL if load.metadata.sourceMap is set
        + (sourceMap && hasBtoa && '\n//# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(sourceMap))) || '');
  }

  var curLoad;

  // System.register, System.registerDynamic, AMD define pipeline
  // if currently evalling code here, immediately reduce the registered entry against the load record
  hook('pushRegister_', function() {
    return function(register) {
      if (!curLoad)
        return false;

      this.reduceRegister_(curLoad, register);
      return true;
    };
  });

  // System clobbering protection (mostly for Traceur)
  var curSystem;
  var callCounter = 0;
  function preExec(loader, load) {
    curLoad = load;
    if (callCounter++ == 0)
      curSystem = __global.System;
    __global.System = __global.SystemJS = loader; 
  }
  function postExec() {
    if (--callCounter == 0)
      __global.System = __global.SystemJS = curSystem;
    curLoad = undefined;
  }

  var nwjs = typeof process != 'undefined' && process.versions && process.versions['node-webkit'];
  var vm;
  __exec = function(load) {
    if (!load.source)
      return;
    if ((load.metadata.integrity || load.metadata.nonce) && supportsScriptExec)
      return scriptExec.call(this, load);
    try {
      preExec(this, load);
      curLoad = load;
      // global scoped eval for node (avoids require scope leak)
      if (this._nodeRequire && !nwjs) {
        vm = vm || this._nodeRequire('vm');
        vm.runInThisContext(getSource(load, true), { filename: load.address + (load.metadata.sourceMap ? '!transpiled' : '') });
      }
      else {
        (0, eval)(getSource(load, true));
      }
      postExec();
    }
    catch(e) {
      postExec(); 
      throw addToError(e, 'Evaluating ' + load.address);
    }
  };

  var supportsScriptExec = false;
  if (isBrowser && typeof document != 'undefined' && document.getElementsByTagName) {
    var scripts = document.getElementsByTagName('script');
    $__curScript = scripts[scripts.length - 1];

    if (!(window.chrome && window.chrome.extension || navigator.userAgent.match(/^Node\.js/)))
      supportsScriptExec = true;
  }

  // script execution via injecting a script tag into the page
  // this allows CSP integrity and nonce to be set for CSP environments
  var head;
  function scriptExec(load) {
    if (!head)
      head = document.head || document.body || document.documentElement;

    var script = document.createElement('script');
    script.text = getSource(load, false);
    var onerror = window.onerror;
    var e;
    window.onerror = function(_e) {
      e = addToError(_e, 'Evaluating ' + load.address);
      if (onerror)
        onerror.apply(this, arguments);
    }
    preExec(this, load);

    if (load.metadata.integrity)
      script.setAttribute('integrity', load.metadata.integrity);
    if (load.metadata.nonce)
      script.setAttribute('nonce', load.metadata.nonce);

    head.appendChild(script);
    head.removeChild(script);
    postExec();
    window.onerror = onerror;
    if (e)
      throw e;
  }

})();
function readMemberExpression(p, value) {
  var pParts = p.split('.');
  while (pParts.length)
    value = value[pParts.shift()];
  return value;
}

function getMapMatch(map, name) {
  var bestMatch, bestMatchLength = 0;

  for (var p in map) {
    if (name.substr(0, p.length) == p && (name.length == p.length || name[p.length] == '/')) {
      var curMatchLength = p.split('/').length;
      if (curMatchLength <= bestMatchLength)
        continue;
      bestMatch = p;
      bestMatchLength = curMatchLength;
    }
  }

  return bestMatch;
}

function prepareBaseURL(loader) {
  // ensure baseURl is fully normalized
  if (this._loader.baseURL !== this.baseURL) {
    if (this.baseURL[this.baseURL.length - 1] != '/')
      this.baseURL += '/';
    
    this._loader.baseURL = this.baseURL = new URL(this.baseURL, baseURIObj).href;
  }
}

var envModule;
function setProduction(isProduction, isBuilder) {
  this.set('@system-env', envModule = this.newModule({
    browser: isBrowser,
    node: !!this._nodeRequire,
    production: !isBuilder && isProduction,
    dev: isBuilder || !isProduction,
    build: isBuilder,
    'default': true
  }));
}

hookConstructor(function(constructor) {
  return function() {
    constructor.call(this);

    // support baseURL
    this.baseURL = baseURI;

    // support map and paths
    this.map = {};

    // global behaviour flags
    this.warnings = false;
    this.defaultJSExtensions = false;
    this.pluginFirst = false;
    this.loaderErrorStack = false;

    // by default load ".json" files as json
    // leading * meta doesn't need normalization
    // NB add this in next breaking release
    // this.meta['*.json'] = { format: 'json' };

    // support the empty module, as a concept
    this.set('@empty', this.newModule({}));

    setProduction.call(this, false, false);
  };
});

// include the node require since we're overriding it
if (typeof require != 'undefined' && typeof process != 'undefined' && !process.browser)
  SystemJSLoader.prototype._nodeRequire = require;

/*
  Core SystemJS Normalization

  If a name is relative, we apply URL normalization to the page
  If a name is an absolute URL, we leave it as-is

  Plain names (neither of the above) run through the map and paths
  normalization phases.

  The paths normalization phase applies last (paths extension), which
  defines the `decanonicalize` function and normalizes everything into
  a URL.
 */

function getNodeModule(name) {
  if (!isPlain(name))
    throw new Error('Node module ' + name + ' can\'t be loaded as it is not a package require.');

  var nodePath = this._nodeRequire('path');
  // try to load from node_modules
  var module;
  try {
    module = this._nodeRequire(nodePath.resolve(process.cwd(), 'node_modules', name));
  }
  catch(e) {
    // fall back to direct require (in theory this is core modules only, which should really be filtered)
    if (e.code == 'MODULE_NOT_FOUND')
      module = this._nodeRequire(name);
  }
  return module;
}

function coreResolve(name, parentName) {
  // standard URL resolution
  if (isRel(name))
    return urlResolve(name, parentName);
  else if (isAbsolute(name))
    return name;

  // plain names not starting with './', '://' and '/' go through custom resolution
  var mapMatch = getMapMatch(this.map, name);

  if (mapMatch) {
    name = this.map[mapMatch] + name.substr(mapMatch.length);

    if (isRel(name))
      return urlResolve(name);
    else if (isAbsolute(name))
      return name;
  }

  if (this.has(name))
    return name;
  // dynamically load node-core modules when requiring `@node/fs` for example
  if (name.substr(0, 6) == '@node/') {
    if (!this._nodeRequire)
      throw new TypeError('Error loading ' + name + '. Can only load node core modules in Node.');
    this.set(name, this.newModule(getESModule(getNodeModule.call(this, name.substr(6)))));
    return name;
  }

  // prepare the baseURL to ensure it is normalized
  prepareBaseURL.call(this);

  return applyPaths(this, name) || this.baseURL + name;
}

hook('normalize', function(normalize) {
  return function(name, parentName, skipExt) {
    var resolved = coreResolve.call(this, name, parentName);
    if (this.defaultJSExtensions && !skipExt && resolved.substr(resolved.length - 3, 3) != '.js' && !isPlain(resolved))
      resolved += '.js';
    return resolved;
  };
});

// percent encode just '#' in urls if using HTTP requests
var httpRequest = typeof XMLHttpRequest != 'undefined';
hook('locate', function(locate) {
  return function(load) {
    return Promise.resolve(locate.call(this, load))
    .then(function(address) {
      if (httpRequest)
        return address.replace(/#/g, '%23');
      return address;
    });
  };
});

/*
 * Fetch with authorization
 */
hook('fetch', function() {
  return function(load) {
    return new Promise(function(resolve, reject) {
      fetchTextFromURL(load.address, load.metadata.authorization, resolve, reject);
    });
  };
});

/*
  __useDefault
  
  When a module object looks like:
  newModule(
    __useDefault: true,
    default: 'some-module'
  })

  Then importing that module provides the 'some-module'
  result directly instead of the full module.

  Useful for eg module.exports = function() {}
*/
hook('import', function(systemImport) {
  return function(name, parentName, parentAddress) {
    if (parentName && parentName.name)
      warn.call(this, 'SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing ' + name + ' from ' + parentName.name);
    return systemImport.call(this, name, parentName, parentAddress).then(function(module) {
      return module.__useDefault ? module['default'] : module;
    });
  };
});

/*
 * Allow format: 'detect' meta to enable format detection
 */
hook('translate', function(systemTranslate) {
  return function(load) {
    if (load.metadata.format == 'detect')
      load.metadata.format = undefined;
    return systemTranslate.apply(this, arguments);
  };
});


/*
 * JSON format support
 *
 * Supports loading JSON files as a module format itself
 *
 * Usage:
 *
 * SystemJS.config({
 *   meta: {
 *     '*.json': { format: 'json' }
 *   }
 * });
 *
 * Module is returned as if written:
 *
 * export default {JSON}
 *
 * No named exports are provided
 *
 * Files ending in ".json" are treated as json automatically by SystemJS
 */
hook('instantiate', function(instantiate) {
  return function(load) {
    if (load.metadata.format == 'json' && !this.builder) {
      var entry = load.metadata.entry = createEntry();
      entry.deps = [];
      entry.execute = function() {
        try {
          return JSON.parse(load.source);
        }
        catch(e) {
          throw new Error("Invalid JSON file " + load.name);
        }
      };
    }
  };
})

/*
 Extend config merging one deep only

  loader.config({
    some: 'random',
    config: 'here',
    deep: {
      config: { too: 'too' }
    }
  });

  <=>

  loader.some = 'random';
  loader.config = 'here'
  loader.deep = loader.deep || {};
  loader.deep.config = { too: 'too' };


  Normalizes meta and package configs allowing for:

  SystemJS.config({
    meta: {
      './index.js': {}
    }
  });

  To become

  SystemJS.meta['https://thissite.com/index.js'] = {};

  For easy normalization canonicalization with latest URL support.

*/
function envSet(loader, cfg, envCallback) {
  if (envModule.browser && cfg.browserConfig)
    envCallback(cfg.browserConfig);
  if (envModule.node && cfg.nodeConfig)
    envCallback(cfg.nodeConfig);
  if (envModule.dev && cfg.devConfig)
    envCallback(cfg.devConfig);
  if (envModule.build && cfg.buildConfig)
    envCallback(cfg.buildConfig);
  if (envModule.production && cfg.productionConfig)
    envCallback(cfg.productionConfig);
}

SystemJSLoader.prototype.getConfig = function(name) {
  var cfg = {};
  var loader = this;
  for (var p in loader) {
    if (loader.hasOwnProperty && !loader.hasOwnProperty(p) || p in SystemJSLoader.prototype)
      continue;
    if (indexOf.call(['_loader', 'amdDefine', 'amdRequire', 'defined', 'failed', 'version'], p) == -1)
      cfg[p] = loader[p];
  }
  cfg.production = envModule.production;
  return cfg;
};

var curCurScript;
SystemJSLoader.prototype.config = function(cfg, isEnvConfig) {
  var loader = this;

  if ('loaderErrorStack' in cfg) {
    curCurScript = $__curScript;
    if (cfg.loaderErrorStack)
      $__curScript = undefined;
    else
      $__curScript = curCurScript;
  }

  if ('warnings' in cfg)
    loader.warnings = cfg.warnings;

  // transpiler deprecation path
  if (cfg.transpilerRuntime === false)
    loader._loader.loadedTranspilerRuntime = true;

  if ('production' in cfg || 'build' in cfg)
    setProduction.call(loader, !!cfg.production, !!(cfg.build || envModule && envModule.build));

  if (!isEnvConfig) {
    // if using nodeConfig / browserConfig / productionConfig, take baseURL from there
    // these exceptions will be unnecessary when we can properly implement config queuings
    var baseURL;
    envSet(loader, cfg, function(cfg) {
      baseURL = baseURL || cfg.baseURL;
    });
    baseURL = baseURL || cfg.baseURL;

    // always configure baseURL first
    if (baseURL) {
      var hasConfig = false;
      function checkHasConfig(obj) {
        for (var p in obj)
          if (obj.hasOwnProperty(p))
            return true;
      }
      if (checkHasConfig(loader.packages) || checkHasConfig(loader.meta) || checkHasConfig(loader.depCache) || checkHasConfig(loader.bundles) || checkHasConfig(loader.packageConfigPaths))
        throw new TypeError('Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.');

      this.baseURL = baseURL;
      prepareBaseURL.call(this);
    }

    if (cfg.paths)
      extend(loader.paths, cfg.paths);

    envSet(loader, cfg, function(cfg) {
      if (cfg.paths)
        extend(loader.paths, cfg.paths);
    });

    // warn on wildcard path deprecations
    if (this.warnings) {
      for (var p in loader.paths)
        if (p.indexOf('*') != -1)
          warn.call(loader, 'Paths configuration "' + p + '" -> "' + loader.paths[p] + '" uses wildcards which are being deprecated for simpler trailing "/" folder paths.');
    }
  }

  if (cfg.defaultJSExtensions) {
    loader.defaultJSExtensions = cfg.defaultJSExtensions;
    warn.call(loader, 'The defaultJSExtensions configuration option is deprecated, use packages configuration instead.');
  }

  if (cfg.pluginFirst)
    loader.pluginFirst = cfg.pluginFirst;

  if (cfg.map) {
    var objMaps = '';
    for (var p in cfg.map) {
      var v = cfg.map[p];

      // object map backwards-compat into packages configuration
      if (typeof v !== 'string') {
        objMaps += (objMaps.length ? ', ' : '') + '"' + p + '"';

        var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
        var prop = loader.decanonicalize(p);
        if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
          prop = prop.substr(0, prop.length - 3);

        // if a package main, revert it
        var pkgMatch = '';
        for (var pkg in loader.packages) {
          if (prop.substr(0, pkg.length) == pkg 
              && (!prop[pkg.length] || prop[pkg.length] == '/') 
              && pkgMatch.split('/').length < pkg.split('/').length)
            pkgMatch = pkg;
        }
        if (pkgMatch && loader.packages[pkgMatch].main)
          prop = prop.substr(0, prop.length - loader.packages[pkgMatch].main.length - 1);

        var pkg = loader.packages[prop] = loader.packages[prop] || {};
        pkg.map = v;
      }
      else {
        loader.map[p] = v;
      }
    }
    if (objMaps)
      warn.call(loader, 'The map configuration for ' + objMaps + ' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "' + p + '": { map: {...} } } }).');
  }

  if (cfg.packageConfigPaths) {
    var packageConfigPaths = [];
    for (var i = 0; i < cfg.packageConfigPaths.length; i++) {
      var path = cfg.packageConfigPaths[i];
      var packageLength = Math.max(path.lastIndexOf('*') + 1, path.lastIndexOf('/'));
      var normalized = coreResolve.call(loader, path.substr(0, packageLength));
      packageConfigPaths[i] = normalized + path.substr(packageLength);
    }
    loader.packageConfigPaths = packageConfigPaths;
  }

  if (cfg.bundles) {
    for (var p in cfg.bundles) {
      var bundle = [];
      for (var i = 0; i < cfg.bundles[p].length; i++) {
        var defaultJSExtension = loader.defaultJSExtensions && cfg.bundles[p][i].substr(cfg.bundles[p][i].length - 3, 3) != '.js';
        var normalizedBundleDep = loader.decanonicalize(cfg.bundles[p][i]);
        if (defaultJSExtension && normalizedBundleDep.substr(normalizedBundleDep.length - 3, 3) == '.js')
          normalizedBundleDep = normalizedBundleDep.substr(0, normalizedBundleDep.length - 3);
        bundle.push(normalizedBundleDep);
      }
      loader.bundles[p] = bundle;
    }
  }

  if (cfg.packages) {
    for (var p in cfg.packages) {
      if (p.match(/^([^\/]+:)?\/\/$/))
        throw new TypeError('"' + p + '" is not a valid package name.');

      var prop = coreResolve.call(loader, p);

      // allow trailing slash in packages
      if (prop[prop.length - 1] == '/')
        prop = prop.substr(0, prop.length - 1);

      setPkgConfig(loader, prop, cfg.packages[p], false);
    }
  }

  for (var c in cfg) {
    var v = cfg[c];

    if (indexOf.call(['baseURL', 'map', 'packages', 'bundles', 'paths', 'warnings', 'packageConfigPaths', 
          'loaderErrorStack', 'browserConfig', 'nodeConfig', 'devConfig', 'buildConfig', 'productionConfig'], c) != -1)
      continue;

    if (typeof v != 'object' || v instanceof Array) {
      loader[c] = v;
    }
    else {
      loader[c] = loader[c] || {};

      for (var p in v) {
        // base-level wildcard meta does not normalize to retain catch-all quality
        if (c == 'meta' && p[0] == '*') {
          extend(loader[c][p] = loader[c][p] || {}, v[p]);
        }
        else if (c == 'meta') {
          // meta can go through global map, with defaultJSExtensions adding
          var resolved = coreResolve.call(loader, p);
          if (loader.defaultJSExtensions && resolved.substr(resolved.length - 3, 3) != '.js' && !isPlain(resolved))
            resolved += '.js';
          extend(loader[c][resolved] = loader[c][resolved] || {}, v[p]);
        }
        else if (c == 'depCache') {
          var defaultJSExtension = loader.defaultJSExtensions && p.substr(p.length - 3, 3) != '.js';
          var prop = loader.decanonicalize(p);
          if (defaultJSExtension && prop.substr(prop.length - 3, 3) == '.js')
            prop = prop.substr(0, prop.length - 3);
          loader[c][prop] = [].concat(v[p]);
        }
        else {
          loader[c][p] = v[p];
        }
      }
    }
  }

  envSet(loader, cfg, function(cfg) {
    loader.config(cfg, true);
  });
};/*
 * Package Configuration Extension
 *
 * Example:
 *
 * SystemJS.packages = {
 *   jquery: {
 *     main: 'index.js', // when not set, package name is requested directly
 *     format: 'amd',
 *     defaultExtension: 'ts', // defaults to 'js', can be set to false
 *     modules: {
 *       '*.ts': {
 *         loader: 'typescript'
 *       },
 *       'vendor/sizzle.js': {
 *         format: 'global'
 *       }
 *     },
 *     map: {
 *        // map internal require('sizzle') to local require('./vendor/sizzle')
 *        sizzle: './vendor/sizzle.js',
 *        // map any internal or external require of 'jquery/vendor/another' to 'another/index.js'
 *        './vendor/another.js': './another/index.js',
 *        // test.js / test -> lib/test.js
 *        './test.js': './lib/test.js',
 *
 *        // environment-specific map configurations
 *        './index.js': {
 *          '~browser': './index-node.js',
 *          './custom-condition.js|~export': './index-custom.js'
 *        }
 *     },
 *     // allows for setting package-prefixed depCache
 *     // keys are normalized module names relative to the package itself
 *     depCache: {
 *       // import 'package/index.js' loads in parallel package/lib/test.js,package/vendor/sizzle.js
 *       './index.js': ['./test'],
 *       './test.js': ['external-dep'],
 *       'external-dep/path.js': ['./another.js']
 *     }
 *   }
 * };
 *
 * Then:
 *   import 'jquery'                       -> jquery/index.js
 *   import 'jquery/submodule'             -> jquery/submodule.js
 *   import 'jquery/submodule.ts'          -> jquery/submodule.ts loaded as typescript
 *   import 'jquery/vendor/another'        -> another/index.js
 *
 * Detailed Behaviours
 * - main can have a leading "./" can be added optionally
 * - map and defaultExtension are applied to the main
 * - defaultExtension adds the extension only if the exact extension is not present
 * - defaultJSExtensions applies after map when defaultExtension is not set
 * - if a meta value is available for a module, map and defaultExtension are skipped
 * - like global map, package map also applies to subpaths (sizzle/x, ./vendor/another/sub)
 * - condition module map is '@env' module in package or '@system-env' globally
 * - map targets support conditional interpolation ('./x': './x.#{|env}.js')
 * - internal package map targets cannot use boolean conditionals
 *
 * Package Configuration Loading
 *
 * Not all packages may already have their configuration present in the System config
 * For these cases, a list of packageConfigPaths can be provided, which when matched against
 * a request, will first request a ".json" file by the package name to derive the package
 * configuration from. This allows dynamic loading of non-predetermined code, a key use
 * case in SystemJS.
 *
 * Example:
 *
 *   SystemJS.packageConfigPaths = ['packages/test/package.json', 'packages/*.json'];
 *
 *   // will first request 'packages/new-package/package.json' for the package config
 *   // before completing the package request to 'packages/new-package/path'
 *   SystemJS.import('packages/new-package/path');
 *
 *   // will first request 'packages/test/package.json' before the main
 *   SystemJS.import('packages/test');
 *
 * When a package matches packageConfigPaths, it will always send a config request for
 * the package configuration.
 * The package name itself is taken to be the match up to and including the last wildcard
 * or trailing slash.
 * The most specific package config path will be used.
 * Any existing package configurations for the package will deeply merge with the
 * package config, with the existing package configurations taking preference.
 * To opt-out of the package configuration request for a package that matches
 * packageConfigPaths, use the { configured: true } package config option.
 *
 */
(function() {

  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);
      this.packages = {};
      this.packageConfigPaths = [];
    };
  });

  function getPackage(loader, normalized) {
    // use most specific package
    var curPkg, curPkgLen = 0, pkgLen;
    for (var p in loader.packages) {
      if (normalized.substr(0, p.length) === p && (normalized.length === p.length || normalized[p.length] === '/')) {
        pkgLen = p.split('/').length;
        if (pkgLen > curPkgLen) {
          curPkg = p;
          curPkgLen = pkgLen;
        }
      }
    }
    return curPkg;
  }

  function addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions) {
    // don't apply extensions to folders or if defaultExtension = false
    if (!subPath || subPath[subPath.length - 1] == '/' || skipExtensions || pkg.defaultExtension === false)
      return subPath;

    var metaMatch = false;

    // exact meta or meta with any content after the last wildcard skips extension
    if (pkg.meta)
      getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
          return metaMatch = true;
      });

    // exact global meta or meta with any content after the last wildcard skips extension
    if (!metaMatch && loader.meta)
      getMetaMatches(loader.meta, pkgName + '/' + subPath, function(metaPattern, matchMeta, matchDepth) {
        if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1)
          return metaMatch = true;
      });

    if (metaMatch)
      return subPath;

    // work out what the defaultExtension is and add if not there already
    // NB reconsider if default should really be ".js"?
    var defaultExtension = '.' + (pkg.defaultExtension || 'js');
    if (subPath.substr(subPath.length - defaultExtension.length) != defaultExtension)
      return subPath + defaultExtension;
    else
      return subPath;
  }

  function applyPackageConfigSync(loader, pkg, pkgName, subPath, skipExtensions) {
    // main
    if (!subPath) {
      if (pkg.main)
        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
      else
        // NB can add a default package main convention here when defaultJSExtensions is deprecated
        // if it becomes internal to the package then it would no longer be an exit path
        return pkgName + (loader.defaultJSExtensions ? '.js' : '');
    }

    // map config checking without then with extensions
    if (pkg.map) {
      var mapPath = './' + subPath;

      var mapMatch = getMapMatch(pkg.map, mapPath);

      // we then check map with the default extension adding
      if (!mapMatch) {
        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions);
        if (mapPath != './' + subPath)
          mapMatch = getMapMatch(pkg.map, mapPath);
      }
      if (mapMatch) {
        var mapped = doMapSync(loader, pkg, pkgName, mapMatch, mapPath, skipExtensions);
        if (mapped)
          return mapped;
      }
    }

    // normal package resolution
    return pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions);
  }

  function validMapping(mapMatch, mapped, pkgName, path) {
    // disallow internal to subpath maps
    if (mapMatch == '.')
      throw new Error('Package ' + pkgName + ' has a map entry for "." which is not permitted.');
    
    // allow internal ./x -> ./x/y or ./x/ -> ./x/y recursive maps
    // but only if the path is exactly ./x and not ./x/z
    if (mapped.substr(0, mapMatch.length) == mapMatch && path.length > mapMatch.length)
      return false;

    return true;
  }

  function doMapSync(loader, pkg, pkgName, mapMatch, path, skipExtensions) {
    if (path[path.length - 1] == '/')
      path = path.substr(0, path.length - 1);
    var mapped = pkg.map[mapMatch];

    if (typeof mapped == 'object')
      throw new Error('Synchronous conditional normalization not supported sync normalizing ' + mapMatch + ' in ' + pkgName);

    if (!validMapping(mapMatch, mapped, pkgName, path) || typeof mapped != 'string')
      return;

    // package map to main / base-level
    if (mapped == '.')
      mapped = pkgName;

    // internal package map
    else if (mapped.substr(0, 2) == './')
      return pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions);
    
    // external map reference
    return loader.normalizeSync(mapped + path.substr(mapMatch.length), pkgName + '/');
  }

  function applyPackageConfig(loader, pkg, pkgName, subPath, skipExtensions) {
    // main
    if (!subPath) {
      if (pkg.main)
        subPath = pkg.main.substr(0, 2) == './' ? pkg.main.substr(2) : pkg.main;
      // also no submap if name is package itself (import 'pkg' -> 'path/to/pkg.js')
      else
        // NB can add a default package main convention here when defaultJSExtensions is deprecated
        // if it becomes internal to the package then it would no longer be an exit path
        return Promise.resolve(pkgName + (loader.defaultJSExtensions ? '.js' : ''));
    }

    // map config checking without then with extensions
    var mapPath, mapMatch;

    if (pkg.map) {
      mapPath = './' + subPath;
      mapMatch = getMapMatch(pkg.map, mapPath);

      // we then check map with the default extension adding
      if (!mapMatch) {
        mapPath = './' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions);
        if (mapPath != './' + subPath)
          mapMatch = getMapMatch(pkg.map, mapPath);
      }
    }

    return (mapMatch ? doMap(loader, pkg, pkgName, mapMatch, mapPath, skipExtensions) : Promise.resolve())
    .then(function(mapped) {
      if (mapped)
        return Promise.resolve(mapped);

      // normal package resolution / fallback resolution for no conditional match
      return Promise.resolve(pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, subPath, skipExtensions));
    });
  }

  function doStringMap(loader, pkg, pkgName, mapMatch, mapped, path, skipExtensions) {
    // NB the interpolation cases should strictly skip subsequent interpolation
    // package map to main / base-level
    if (mapped == '.')
      mapped = pkgName;
    
    // internal package map
    else if (mapped.substr(0, 2) == './')
      return Promise.resolve(pkgName + '/' + addDefaultExtension(loader, pkg, pkgName, mapped.substr(2) + path.substr(mapMatch.length), skipExtensions))
      .then(function(name) {
        return interpolateConditional.call(loader, name, pkgName + '/');
      });
    
    // external map reference
    return loader.normalize(mapped + path.substr(mapMatch.length), pkgName + '/');
  }

  function doMap(loader, pkg, pkgName, mapMatch, path, skipExtensions) {
    if (path[path.length - 1] == '/')
      path = path.substr(0, path.length - 1);

    var mapped = pkg.map[mapMatch];

    if (typeof mapped == 'string') {
      if (!validMapping(mapMatch, mapped, pkgName, path))
        return Promise.resolve();
      return doStringMap(loader, pkg, pkgName, mapMatch, mapped, path, skipExtensions);
    }

    // we use a special conditional syntax to allow the builder to handle conditional branch points further
    if (loader.builder)
      return Promise.resolve(pkgName + '/#:' + path);

    // we load all conditions upfront
    var conditionPromises = [];
    var conditions = [];
    for (var e in mapped) {
      var c = parseCondition(e);
      conditions.push({
        condition: c,
        map: mapped[e]
      });
      conditionPromises.push(loader['import'](c.module, pkgName));
    }

    // map object -> conditional map
    return Promise.all(conditionPromises)
    .then(function(conditionValues) {
      // first map condition to match is used
      for (var i = 0; i < conditions.length; i++) {
        var c = conditions[i].condition;
        var value = readMemberExpression(c.prop, conditionValues[i]);
        if (!c.negate && value || c.negate && !value)
          return conditions[i].map;
      }
    })
    .then(function(mapped) {
      if (mapped) {
        if (!validMapping(mapMatch, mapped, pkgName, path))
          return;
        return doStringMap(loader, pkg, pkgName, mapMatch, mapped, path, skipExtensions);
      }

      // no environment match -> fallback to original subPath by returning undefined
    });
  }

  // normalizeSync = decanonicalize + package resolution
  SystemJSLoader.prototype.normalizeSync = SystemJSLoader.prototype.decanonicalize = SystemJSLoader.prototype.normalize;

  // decanonicalize must JUST handle package defaultExtension: false case when defaultJSExtensions is set
  // to be deprecated!
  hook('decanonicalize', function(decanonicalize) {
    return function(name, parentName) {
      if (this.builder)
        return decanonicalize.call(this, name, parentName, true);

      var decanonicalized = decanonicalize.call(this, name, parentName, false);

      if (!this.defaultJSExtensions)
        return decanonicalized;
    
      var pkgName = getPackage(this, decanonicalized);

      var pkg = this.packages[pkgName];
      var defaultExtension = pkg && pkg.defaultExtension;

      if (defaultExtension == undefined && pkg && pkg.meta)
        getMetaMatches(pkg.meta, decanonicalized.substr(pkgName), function(metaPattern, matchMeta, matchDepth) {
          if (matchDepth == 0 || metaPattern.lastIndexOf('*') != metaPattern.length - 1) {
            defaultExtension = false;
            return true;
          }
        });
      
      if ((defaultExtension === false || defaultExtension && defaultExtension != '.js') && name.substr(name.length - 3, 3) != '.js' && decanonicalized.substr(decanonicalized.length - 3, 3) == '.js')
        decanonicalized = decanonicalized.substr(0, decanonicalized.length - 3);

      return decanonicalized;
    };
  });

  hook('normalizeSync', function(normalizeSync) {
    return function(name, parentName, isPlugin) {
      var loader = this;
      isPlugin = isPlugin === true;

      // apply contextual package map first
      // (we assume the parent package config has already been loaded)
      if (parentName)
        var parentPackageName = getPackage(loader, parentName) ||
            loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
            getPackage(loader, parentName.substr(0, parentName.length - 3));

      var parentPackage = parentPackageName && loader.packages[parentPackageName];

      // ignore . since internal maps handled by standard package resolution
      if (parentPackage && name[0] != '.') {
        var parentMap = parentPackage.map;
        var parentMapMatch = parentMap && getMapMatch(parentMap, name);

        if (parentMapMatch && typeof parentMap[parentMapMatch] == 'string') {
          var mapped = doMapSync(loader, parentPackage, parentPackageName, parentMapMatch, name, isPlugin);      
          if (mapped)
            return mapped;
        }
      }

      var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

      // apply map, core, paths, contextual package map
      var normalized = normalizeSync.call(loader, name, parentName, false);

      // undo defaultJSExtension
      if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
        defaultJSExtension = false;
      if (defaultJSExtension)
        normalized = normalized.substr(0, normalized.length - 3);

      var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
      var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

      if (!pkgName)
        return normalized + (defaultJSExtension ? '.js' : '');

      var subPath = normalized.substr(pkgName.length + 1);

      return applyPackageConfigSync(loader, loader.packages[pkgName] || {}, pkgName, subPath, isPlugin);
    };
  });

  hook('normalize', function(normalize) {
    return function(name, parentName, isPlugin) {
      var loader = this;
      isPlugin = isPlugin === true;

      return Promise.resolve()
      .then(function() {
        // apply contextual package map first
        // (we assume the parent package config has already been loaded)
        if (parentName)
          var parentPackageName = getPackage(loader, parentName) ||
              loader.defaultJSExtensions && parentName.substr(parentName.length - 3, 3) == '.js' &&
              getPackage(loader, parentName.substr(0, parentName.length - 3));

        var parentPackage = parentPackageName && loader.packages[parentPackageName];

        // ignore . since internal maps handled by standard package resolution
        if (parentPackage && name.substr(0, 2) != './') {
          var parentMap = parentPackage.map;
          var parentMapMatch = parentMap && getMapMatch(parentMap, name);

          if (parentMapMatch)
            return doMap(loader, parentPackage, parentPackageName, parentMapMatch, name, isPlugin);
        }

        return Promise.resolve();
      })
      .then(function(mapped) {
        if (mapped)
          return mapped;

        var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';

        // apply map, core, paths, contextual package map
        var normalized = normalize.call(loader, name, parentName, false);

        // undo defaultJSExtension
        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) != '.js')
          defaultJSExtension = false;
        if (defaultJSExtension)
          normalized = normalized.substr(0, normalized.length - 3);

        var pkgConfigMatch = getPackageConfigMatch(loader, normalized);
        var pkgName = pkgConfigMatch && pkgConfigMatch.packageName || getPackage(loader, normalized);

        if (!pkgName)
          return Promise.resolve(normalized + (defaultJSExtension ? '.js' : ''));

        var pkg = loader.packages[pkgName];

        // if package is already configured or not a dynamic config package, use existing package config
        var isConfigured = pkg && (pkg.configured || !pkgConfigMatch);
        return (isConfigured ? Promise.resolve(pkg) : loadPackageConfigPath(loader, pkgName, pkgConfigMatch.configPath))
        .then(function(pkg) {
          var subPath = normalized.substr(pkgName.length + 1);

          return applyPackageConfig(loader, pkg, pkgName, subPath, isPlugin);
        });
      });
    };
  });

  // check if the given normalized name matches a packageConfigPath
  // if so, loads the config
  var packageConfigPaths = {};

  // data object for quick checks against package paths
  function createPkgConfigPathObj(path) {
    var lastWildcard = path.lastIndexOf('*');
    var length = Math.max(lastWildcard + 1, path.lastIndexOf('/'));
    return {
      length: length,
      regEx: new RegExp('^(' + path.substr(0, length).replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^\\/]+') + ')(\\/|$)'),
      wildcard: lastWildcard != -1
    };
  }

  // most specific match wins
  function getPackageConfigMatch(loader, normalized) {
    var pkgName, exactMatch = false, configPath;
    for (var i = 0; i < loader.packageConfigPaths.length; i++) {
      var packageConfigPath = loader.packageConfigPaths[i];
      var p = packageConfigPaths[packageConfigPath] || (packageConfigPaths[packageConfigPath] = createPkgConfigPathObj(packageConfigPath));
      if (normalized.length < p.length)
        continue;
      var match = normalized.match(p.regEx);
      if (match && (!pkgName || (!(exactMatch && p.wildcard) && pkgName.length < match[1].length))) {
        pkgName = match[1];
        exactMatch = !p.wildcard;
        configPath = pkgName + packageConfigPath.substr(p.length);
      }
    }

    if (!pkgName)
      return;

    return {
      packageName: pkgName,
      configPath: configPath
    };
  }

  function loadPackageConfigPath(loader, pkgName, pkgConfigPath) {
    var configLoader = loader.pluginLoader || loader;

    // NB remove this when json is default
    (configLoader.meta[pkgConfigPath] = configLoader.meta[pkgConfigPath] || {}).format = 'json';
    configLoader.meta[pkgConfigPath].loader = null;

    return configLoader.load(pkgConfigPath)
    .then(function() {
      var cfg = configLoader.get(pkgConfigPath)['default'];

      // support "systemjs" prefixing
      if (cfg.systemjs)
        cfg = cfg.systemjs;

      // modules backwards compatibility
      if (cfg.modules) {
        cfg.meta = cfg.modules;
        warn.call(loader, 'Package config file ' + pkgConfigPath + ' is configured with "modules", which is deprecated as it has been renamed to "meta".');
      }

      return setPkgConfig(loader, pkgName, cfg, true);
    });
  }

  function getMetaMatches(pkgMeta, subPath, matchFn) {
    // wildcard meta
    var meta = {};
    var wildcardIndex;
    for (var module in pkgMeta) {
      // allow meta to start with ./ for flexibility
      var dotRel = module.substr(0, 2) == './' ? './' : '';
      if (dotRel)
        module = module.substr(2);

      wildcardIndex = module.indexOf('*');
      if (wildcardIndex === -1)
        continue;

      if (module.substr(0, wildcardIndex) == subPath.substr(0, wildcardIndex)
          && module.substr(wildcardIndex + 1) == subPath.substr(subPath.length - module.length + wildcardIndex + 1)) {
        // alow match function to return true for an exit path
        if (matchFn(module, pkgMeta[dotRel + module], module.split('/').length))
          return;
      }
    }
    // exact meta
    var exactMeta = pkgMeta[subPath] && pkgMeta.hasOwnProperty && pkgMeta.hasOwnProperty(subPath) ? pkgMeta[subPath] : pkgMeta['./' + subPath];
    if (exactMeta)
      matchFn(exactMeta, exactMeta, 0);
  }

  hook('locate', function(locate) {
    return function(load) {
      var loader = this;
      return Promise.resolve(locate.call(this, load))
      .then(function(address) {
        var pkgName = getPackage(loader, load.name);
        if (pkgName) {
          var pkg = loader.packages[pkgName];
          var subPath = load.name.substr(pkgName.length + 1);

          var meta = {};
          if (pkg.meta) {
            var bestDepth = 0;

            // NB support a main shorthand in meta here?
            getMetaMatches(pkg.meta, subPath, function(metaPattern, matchMeta, matchDepth) {
              if (matchDepth > bestDepth)
                bestDepth = matchDepth;
              extendMeta(meta, matchMeta, matchDepth && bestDepth > matchDepth);
            });

            extendMeta(load.metadata, meta);
          }

          // format
          if (pkg.format && !load.metadata.loader)
            load.metadata.format = load.metadata.format || pkg.format;
        }

        return address;
      });
    };
  });

})();
/*
 * Script tag fetch
 *
 * When load.metadata.scriptLoad is true, we load via script tag injection.
 */
(function() {

  if (typeof document != 'undefined')
    var head = document.getElementsByTagName('head')[0];

  var curSystem;
  var curRequire;

  // if doing worker executing, this is set to the load record being executed
  var workerLoad = null;
  
  // interactive mode handling method courtesy RequireJS
  var ieEvents = head && (function() {
    var s = document.createElement('script');
    var isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]';
    return s.attachEvent && !(s.attachEvent.toString && s.attachEvent.toString().indexOf('[native code') < 0) && !isOpera;
  })();

  // IE interactive-only part
  // we store loading scripts array as { script: <script>, load: {...} }
  var interactiveLoadingScripts = [];
  var interactiveScript;
  function getInteractiveScriptLoad() {
    if (interactiveScript && interactiveScript.script.readyState === 'interactive')
      return interactiveScript.load;

    for (var i = 0; i < interactiveLoadingScripts.length; i++)
      if (interactiveLoadingScripts[i].script.readyState == 'interactive') {
        interactiveScript = interactiveLoadingScripts[i];
        return interactiveScript.load;
      }
  }
  
  // System.register, System.registerDynamic, AMD define pipeline
  // this is called by the above methods when they execute
  // we then run the reduceRegister_ collection function either immediately
  // if we are in IE and know the currently executing script (interactive)
  // or later if we need to wait for the synchronous load callback to know the script
  var loadingCnt = 0;
  var registerQueue = [];
  hook('pushRegister_', function(pushRegister) {
    return function(register) {
      // if using eval-execution then skip
      if (pushRegister.call(this, register))
        return false;

      // if using worker execution, then we're done
      if (workerLoad)
        this.reduceRegister_(workerLoad, register);

      // detect if we know the currently executing load (IE)
      // if so, immediately call reduceRegister
      else if (ieEvents)
        this.reduceRegister_(getInteractiveScriptLoad(), register);

      // otherwise, add to our execution queue
      // to call reduceRegister on sync script load event
      else if (loadingCnt)
        registerQueue.push(register);

      // if we're not currently loading anything though
      // then do the reduction against a null load
      // (out of band named define or named register)
      // note even in non-script environments, this catch is used
      else
        this.reduceRegister_(null, register);

      return true;
    };
  });

  function webWorkerImport(loader, load) {
    return new Promise(function(resolve, reject) {
      if (load.metadata.integrity)
        reject(new Error('Subresource integrity checking is not supported in web workers.'));

      workerLoad = load;
      try {
        importScripts(load.address);
      }
      catch(e) {
        workerLoad = null;
        reject(e);
      }
      workerLoad = null;

      // if nothing registered, then something went wrong
      if (!load.metadata.entry)
        reject(new Error(load.address + ' did not call System.register or AMD define'));

      resolve('');
    });
  }

  // override fetch to use script injection
  hook('fetch', function(fetch) {
    return function(load) {
      var loader = this;

      if (load.metadata.format == 'json' || !load.metadata.scriptLoad || (!isBrowser && !isWorker))
        return fetch.call(this, load);

      if (isWorker)
        return webWorkerImport(loader, load);

      return new Promise(function(resolve, reject) {
        var s = document.createElement('script');
        
        s.async = true;

        if (load.metadata.crossOrigin)
          s.crossOrigin = load.metadata.crossOrigin;

        if (load.metadata.integrity)
          s.setAttribute('integrity', load.metadata.integrity);

        if (ieEvents) {
          s.attachEvent('onreadystatechange', complete);
          interactiveLoadingScripts.push({
            script: s,
            load: load
          });
        }
        else {
          s.addEventListener('load', complete, false);
          s.addEventListener('error', error, false);
        }

        loadingCnt++;

        curSystem = __global.System;
        curRequire = __global.require;

        s.src = load.address;
        head.appendChild(s);

        function complete(evt) {
          if (s.readyState && s.readyState != 'loaded' && s.readyState != 'complete')
            return;

          loadingCnt--;

          // complete call is sync on execution finish
          // (in ie already done reductions)
          if (!load.metadata.entry && !registerQueue.length) {
            loader.reduceRegister_(load);
          }
          else if (!ieEvents) {
            for (var i = 0; i < registerQueue.length; i++)
              loader.reduceRegister_(load, registerQueue[i]);
            registerQueue = [];
          }

          cleanup();

          // if nothing registered, then something went wrong
          if (!load.metadata.entry && !load.metadata.bundle)
            reject(new Error(load.name + ' did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.'));

          resolve('');
        }

        function error(evt) {
          cleanup();
          reject(new Error('Unable to load script ' + load.address));
        }

        function cleanup() {
          __global.System = curSystem;
          __global.require = curRequire;

          if (s.detachEvent) {
            s.detachEvent('onreadystatechange', complete);
            for (var i = 0; i < interactiveLoadingScripts.length; i++)
              if (interactiveLoadingScripts[i].script == s) {
                if (interactiveScript && interactiveScript.script == s)
                  interactiveScript = null;
                interactiveLoadingScripts.splice(i, 1);
              }
          }
          else {
            s.removeEventListener('load', complete, false);
            s.removeEventListener('error', error, false);
          }

          head.removeChild(s);
        }
      });
    };
  });
})();
/*
 * Instantiate registry extension
 *
 * Supports Traceur System.register 'instantiate' output for loading ES6 as ES5.
 *
 * - Creates the loader.register function
 * - Also supports metadata.format = 'register' in instantiate for anonymous register modules
 * - Also supports metadata.deps, metadata.execute and metadata.executingRequire
 *     for handling dynamic modules alongside register-transformed ES6 modules
 *
 *
 * The code here replicates the ES6 linking groups algorithm to ensure that
 * circular ES6 compiled into System.register can work alongside circular AMD 
 * and CommonJS, identically to the actual ES6 loader.
 *
 */


/*
 * Registry side table entries in loader.defined
 * Registry Entry Contains:
 *    - name
 *    - deps 
 *    - declare for declarative modules
 *    - execute for dynamic modules, different to declarative execute on module
 *    - executingRequire indicates require drives execution for circularity of dynamic modules
 *    - declarative optional boolean indicating which of the above
 *
 * Can preload modules directly on SystemJS.defined['my/module'] = { deps, execute, executingRequire }
 *
 * Then the entry gets populated with derived information during processing:
 *    - normalizedDeps derived from deps, created in instantiate
 *    - groupIndex used by group linking algorithm
 *    - evaluated indicating whether evaluation has happend
 *    - module the module record object, containing:
 *      - exports actual module exports
 *
 *    For dynamic we track the es module with:
 *    - esModule actual es module value
 *    - esmExports whether to extend the esModule with named exports
 *      
 *    Then for declarative only we track dynamic bindings with the 'module' records:
 *      - name
 *      - exports
 *      - setters declarative setter functions
 *      - dependencies, module records of dependencies
 *      - importers, module records of dependents
 *
 * After linked and evaluated, entries are removed, declarative module records remain in separate
 * module binding table
 *
 */

var leadingCommentAndMetaRegEx = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
function detectRegisterFormat(source) {
  var leadingCommentAndMeta = source.match(leadingCommentAndMetaRegEx);
  return leadingCommentAndMeta && source.substr(leadingCommentAndMeta[0].length, 15) == 'System.register';
}

function createEntry() {
  return {
    name: null,
    deps: null,
    originalIndices: null,
    declare: null,
    execute: null,
    executingRequire: false,
    declarative: false,
    normalizedDeps: null,
    groupIndex: null,
    evaluated: false,
    module: null,
    esModule: null,
    esmExports: false
  };
}

(function() {

  /*
   * There are two variations of System.register:
   * 1. System.register for ES6 conversion (2-3 params) - System.register([name, ]deps, declare)
   *    see https://github.com/ModuleLoader/es6-module-loader/wiki/System.register-Explained
   *
   * 2. System.registerDynamic for dynamic modules (3-4 params) - System.registerDynamic([name, ]deps, executingRequire, execute)
   * the true or false statement 
   *
   * this extension implements the linking algorithm for the two variations identical to the spec
   * allowing compiled ES6 circular references to work alongside AMD and CJS circular references.
   *
   */
  SystemJSLoader.prototype.register = function(name, deps, declare) {
    if (typeof name != 'string') {
      declare = deps;
      deps = name;
      name = null;
    }

    // dynamic backwards-compatibility
    // can be deprecated eventually
    if (typeof declare == 'boolean')
      return this.registerDynamic.apply(this, arguments);

    var entry = createEntry();
    // ideally wouldn't apply map config to bundle names but 
    // dependencies go through map regardless so we can't restrict
    // could reconsider in shift to new spec
    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
    entry.declarative = true;
    entry.deps = deps;
    entry.declare = declare;

    this.pushRegister_({
      amd: false,
      entry: entry
    });
  };
  SystemJSLoader.prototype.registerDynamic = function(name, deps, declare, execute) {
    if (typeof name != 'string') {
      execute = declare;
      declare = deps;
      deps = name;
      name = null;
    }

    // dynamic
    var entry = createEntry();
    entry.name = name && (this.decanonicalize || this.normalize).call(this, name);
    entry.deps = deps;
    entry.execute = execute;
    entry.executingRequire = declare;

    this.pushRegister_({
      amd: false,
      entry: entry
    });
  };
  hook('reduceRegister_', function() {
    return function(load, register) {
      if (!register)
        return;

      var entry = register.entry;
      var curMeta = load && load.metadata;

      // named register
      if (entry.name) {
        if (!(entry.name in this.defined))
          this.defined[entry.name] = entry;

        if (curMeta)
          curMeta.bundle = true;
      }
      // anonymous register
      if (!entry.name || load && !curMeta.entry && entry.name == load.name) {
        if (!curMeta)
          throw new TypeError('Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.');
        if (curMeta.entry) {
          if (curMeta.format == 'register')
            throw new Error('Multiple anonymous System.register calls in module ' + load.name + '. If loading a bundle, ensure all the System.register calls are named.');
          else
            throw new Error('Module ' + load.name + ' interpreted as ' + curMeta.format + ' module format, but called System.register.');
        }
        if (!curMeta.format)
          curMeta.format = 'register';
        curMeta.entry = entry;
      }
    };
  });

  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);

      this.defined = {};
      this._loader.moduleRecords = {};
    };
  });

  function buildGroups(entry, loader, groups) {
    groups[entry.groupIndex] = groups[entry.groupIndex] || [];

    if (indexOf.call(groups[entry.groupIndex], entry) != -1)
      return;

    groups[entry.groupIndex].push(entry);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = loader.defined[depName];
      
      // not in the registry means already linked / ES6
      if (!depEntry || depEntry.evaluated)
        continue;
      
      // now we know the entry is in our unlinked linkage group
      var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);

      // the group index of an entry is always the maximum
      if (depEntry.groupIndex === null || depEntry.groupIndex < depGroupIndex) {
        
        // if already in a group, remove from the old group
        if (depEntry.groupIndex !== null) {
          groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);

          // if the old group is empty, then we have a mixed depndency cycle
          if (groups[depEntry.groupIndex].length == 0)
            throw new Error("Mixed dependency cycle detected");
        }

        depEntry.groupIndex = depGroupIndex;
      }

      buildGroups(depEntry, loader, groups);
    }
  }

  function link(name, startEntry, loader) {
    // skip if already linked
    if (startEntry.module)
      return;

    startEntry.groupIndex = 0;

    var groups = [];

    buildGroups(startEntry, loader, groups);

    var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
    for (var i = groups.length - 1; i >= 0; i--) {
      var group = groups[i];
      for (var j = 0; j < group.length; j++) {
        var entry = group[j];

        // link each group
        if (curGroupDeclarative)
          linkDeclarativeModule(entry, loader);
        else
          linkDynamicModule(entry, loader);
      }
      curGroupDeclarative = !curGroupDeclarative; 
    }
  }

  // module binding records
  function ModuleRecord() {}
  defineProperty(ModuleRecord, 'toString', {
    value: function() {
      return 'Module';
    }
  });

  function getOrCreateModuleRecord(name, moduleRecords) {
    return moduleRecords[name] || (moduleRecords[name] = {
      name: name,
      dependencies: [],
      exports: new ModuleRecord(), // start from an empty module and extend
      importers: []
    });
  }

  function linkDeclarativeModule(entry, loader) {
    // only link if already not already started linking (stops at circular)
    if (entry.module)
      return;

    var moduleRecords = loader._loader.moduleRecords;
    var module = entry.module = getOrCreateModuleRecord(entry.name, moduleRecords);
    var exports = entry.module.exports;

    var declaration = entry.declare.call(__global, function(name, value) {
      module.locked = true;

      if (typeof name == 'object') {
        for (var p in name)
          exports[p] = name[p];
      }
      else {
        exports[name] = value;
      }

      for (var i = 0, l = module.importers.length; i < l; i++) {
        var importerModule = module.importers[i];
        if (!importerModule.locked) {
          var importerIndex = indexOf.call(importerModule.dependencies, module);
          importerModule.setters[importerIndex](exports);
        }
      }

      module.locked = false;
      return value;
    }, { id: entry.name });
    
    module.setters = declaration.setters;
    module.execute = declaration.execute;

    if (!module.setters || !module.execute) {
      throw new TypeError('Invalid System.register form for ' + entry.name);
    }

    // now link all the module dependencies
    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = loader.defined[depName];
      var depModule = moduleRecords[depName];

      // work out how to set depExports based on scenarios...
      var depExports;

      if (depModule) {
        depExports = depModule.exports;
      }
      // dynamic, already linked in our registry
      else if (depEntry && !depEntry.declarative) {
        depExports = depEntry.esModule;
      }
      // in the loader registry
      else if (!depEntry) {
        depExports = loader.get(depName);
      }
      // we have an entry -> link
      else {
        linkDeclarativeModule(depEntry, loader);
        depModule = depEntry.module;
        depExports = depModule.exports;
      }

      // only declarative modules have dynamic bindings
      if (depModule && depModule.importers) {
        depModule.importers.push(module);
        module.dependencies.push(depModule);
      }
      else {
        module.dependencies.push(null);
      }
      
      // run setters for all entries with the matching dependency name
      var originalIndices = entry.originalIndices[i];
      for (var j = 0, len = originalIndices.length; j < len; ++j) {
        var index = originalIndices[j];
        if (module.setters[index]) {
          module.setters[index](depExports);
        }
      }
    }
  }

  // An analog to loader.get covering execution of all three layers (real declarative, simulated declarative, simulated dynamic)
  function getModule(name, loader) {
    var exports;
    var entry = loader.defined[name];

    if (!entry) {
      exports = loader.get(name);
      if (!exports)
        throw new Error('Unable to load dependency ' + name + '.');
    }

    else {
      if (entry.declarative)
        ensureEvaluated(name, entry, [], loader);
    
      else if (!entry.evaluated)
        linkDynamicModule(entry, loader);

      exports = entry.module.exports;
    }

    if ((!entry || entry.declarative) && exports && exports.__useDefault)
      return exports['default'];
    
    return exports;
  }

  function linkDynamicModule(entry, loader) {
    if (entry.module)
      return;

    var exports = {};

    var module = entry.module = { exports: exports, id: entry.name };

    // AMD requires execute the tree first
    if (!entry.executingRequire) {
      for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
        var depName = entry.normalizedDeps[i];
        // we know we only need to link dynamic due to linking algorithm
        var depEntry = loader.defined[depName];
        if (depEntry)
          linkDynamicModule(depEntry, loader);
      }
    }

    // now execute
    entry.evaluated = true;
    var output = entry.execute.call(__global, function(name) {
      for (var i = 0, l = entry.deps.length; i < l; i++) {
        if (entry.deps[i] != name)
          continue;
        return getModule(entry.normalizedDeps[i], loader);
      }
      // try and normalize the dependency to see if we have another form
      var nameNormalized = loader.normalizeSync(name, entry.name);
      if (indexOf.call(entry.normalizedDeps, nameNormalized) != -1)
        return getModule(nameNormalized, loader);

      throw new Error('Module ' + name + ' not declared as a dependency of ' + entry.name);
    }, exports, module);
    
    if (output)
      module.exports = output;

    // create the esModule object, which allows ES6 named imports of dynamics
    exports = module.exports;

    // __esModule flag treats as already-named
    if (exports && (exports.__esModule || exports instanceof Module))
      entry.esModule = loader.newModule(exports);
    // set module as 'default' export, then fake named exports by iterating properties
    else if (entry.esmExports && exports !== __global)
      entry.esModule = loader.newModule(getESModule(exports));
    // just use the 'default' export
    else
      entry.esModule = loader.newModule({ 'default': exports });
  }

  /*
   * Given a module, and the list of modules for this current branch,
   *  ensure that each of the dependencies of this module is evaluated
   *  (unless one is a circular dependency already in the list of seen
   *  modules, in which case we execute it)
   *
   * Then we evaluate the module itself depth-first left to right 
   * execution to match ES6 modules
   */
  function ensureEvaluated(moduleName, entry, seen, loader) {
    // if already seen, that means it's an already-evaluated non circular dependency
    if (!entry || entry.evaluated || !entry.declarative)
      return;

    // this only applies to declarative modules which late-execute

    seen.push(moduleName);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      if (indexOf.call(seen, depName) == -1) {
        if (!loader.defined[depName])
          loader.get(depName);
        else
          ensureEvaluated(depName, loader.defined[depName], seen, loader);
      }
    }

    if (entry.evaluated)
      return;

    entry.evaluated = true;
    entry.module.execute.call(__global);
  }

  // override the delete method to also clear the register caches
  hook('delete', function(del) {
    return function(name) {
      delete this._loader.moduleRecords[name];
      delete this.defined[name];
      return del.call(this, name);
    };
  });

  hook('fetch', function(fetch) {
    return function(load) {
      if (this.defined[load.name]) {
        load.metadata.format = 'defined';
        return '';
      }

      load.metadata.deps = load.metadata.deps || [];
      
      return fetch.call(this, load);
    };
  });

  hook('translate', function(translate) {
    // we run the meta detection here (register is after meta)
    return function(load) {
      load.metadata.deps = load.metadata.deps || [];
      return Promise.resolve(translate.apply(this, arguments)).then(function(source) {
        // run detection for register format
        if (load.metadata.format == 'register' || !load.metadata.format && detectRegisterFormat(load.source))
          load.metadata.format = 'register';
        return source;
      });
    };
  });

  // implement a perforance shortpath for System.load with no deps
  hook('load', function(doLoad) {
    return function(normalized) {
      var loader = this;
      var entry = loader.defined[normalized];

      if (!entry || entry.deps.length)
        return doLoad.apply(this, arguments);

      entry.originalIndices = entry.normalizedDeps = [];

      // recursively ensure that the module and all its 
      // dependencies are linked (with dependency group handling)
      link(normalized, entry, loader);

      // now handle dependency execution in correct order
      ensureEvaluated(normalized, entry, [], loader);
      if (!entry.esModule)
        entry.esModule = loader.newModule(entry.module.exports);

      // remove from the registry
      if (!loader.trace)
        loader.defined[normalized] = undefined;

      // return the defined module object
      loader.set(normalized, entry.esModule);

      return Promise.resolve();
    };
  });

  hook('instantiate', function(instantiate) {
    return function(load) {
      if (load.metadata.format == 'detect')
        load.metadata.format = undefined;

      // assumes previous instantiate is sync
      // (core json support)
      instantiate.call(this, load);

      var loader = this;

      var entry;

      // first we check if this module has already been defined in the registry
      if (loader.defined[load.name]) {
        entry = loader.defined[load.name];
        // don't support deps for ES modules
        if (!entry.declarative)
          entry.deps = entry.deps.concat(load.metadata.deps);
        entry.deps = entry.deps.concat(load.metadata.deps);
      }

      // picked up already by an anonymous System.register script injection
      // or via the dynamic formats
      else if (load.metadata.entry) {
        entry = load.metadata.entry;
        entry.deps = entry.deps.concat(load.metadata.deps);
      }

      // Contains System.register calls
      // (dont run bundles in the builder)
      else if (!(loader.builder && load.metadata.bundle) 
          && (load.metadata.format == 'register' || load.metadata.format == 'esm' || load.metadata.format == 'es6')) {
        
        if (typeof __exec != 'undefined')
          __exec.call(loader, load);

        if (!load.metadata.entry && !load.metadata.bundle)
          throw new Error(load.name + ' detected as ' + load.metadata.format + ' but didn\'t execute.');

        entry = load.metadata.entry;

        // support metadata deps for System.register
        if (entry && load.metadata.deps)
          entry.deps = entry.deps.concat(load.metadata.deps);
      }

      // named bundles are just an empty module
      if (!entry) {
        entry = createEntry();
        entry.deps = load.metadata.deps;
        entry.execute = function() {};
      }

      // place this module onto defined for circular references
      loader.defined[load.name] = entry;
      
      var grouped = group(entry.deps);
      
      entry.deps = grouped.names;
      entry.originalIndices = grouped.indices;
      entry.name = load.name;
      entry.esmExports = load.metadata.esmExports !== false;

      // first, normalize all dependencies
      var normalizePromises = [];
      for (var i = 0, l = entry.deps.length; i < l; i++)
        normalizePromises.push(Promise.resolve(loader.normalize(entry.deps[i], load.name)));

      return Promise.all(normalizePromises).then(function(normalizedDeps) {

        entry.normalizedDeps = normalizedDeps;

        return {
          deps: entry.deps,
          execute: function() {
            // recursively ensure that the module and all its 
            // dependencies are linked (with dependency group handling)
            link(load.name, entry, loader);

            // now handle dependency execution in correct order
            ensureEvaluated(load.name, entry, [], loader);

            if (!entry.esModule)
              entry.esModule = loader.newModule(entry.module.exports);

            // remove from the registry
            if (!loader.trace)
              loader.defined[load.name] = undefined;

            // return the defined module object
            return entry.esModule;
          }
        };
      });
    };
  });
})();
/*
 * Extension to detect ES6 and auto-load Traceur or Babel for processing
 */
(function() {
  // good enough ES6 module detection regex - format detections not designed to be accurate, but to handle the 99% use case
  var esmRegEx = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/;

  var traceurRuntimeRegEx = /\$traceurRuntime\s*\./;
  var babelHelpersRegEx = /babelHelpers\s*\./;

  hook('translate', function(translate) {
    return function(load) {
      var loader = this;
      var args = arguments;
      return translate.apply(loader, args)
      .then(function(source) {
        // detect & transpile ES6
        if (load.metadata.format == 'esm' || load.metadata.format == 'es6' || !load.metadata.format && source.match(esmRegEx)) {
          if (load.metadata.format == 'es6')
            warn.call(loader, 'Module ' + load.name + ' has metadata setting its format to "es6", which is deprecated.\nThis should be updated to "esm".');

          load.metadata.format = 'esm';

          if (load.metadata.deps) {
            var depInject = '';
            for (var i = 0; i < load.metadata.deps.length; i++)
              depInject += 'import "' + load.metadata.deps[i] + '"; ';
            load.source = depInject + source;
          }

          if (loader.transpiler === false) {
            // we accept translation to esm for builds though to enable eg rollup optimizations
            if (loader.builder)
              return source;
            throw new TypeError('Unable to dynamically transpile ES module as SystemJS.transpiler set to false.');
          }

          // setting _loader.loadedTranspiler = false tells the next block to
          // do checks for setting transpiler metadata
          loader._loader.loadedTranspiler = loader._loader.loadedTranspiler || false;
          if (loader.pluginLoader)
            loader.pluginLoader._loader.loadedTranspiler = loader._loader.loadedTranspiler || false;

          // do transpilation
          return (loader._loader.transpilerPromise || (
            loader._loader.transpilerPromise = Promise.resolve(
              __global[loader.transpiler == 'typescript' ? 'ts' : loader.transpiler] || (loader.pluginLoader || loader)['import'](loader.transpiler)
          ))).then(function(transpiler) {
            loader._loader.loadedTranspilerRuntime = true;

            // translate hooks means this is a transpiler plugin instead of a raw implementation
            if (transpiler.translate) {
              // if transpiler is the same as the plugin loader, then don't run twice
              if (transpiler == load.metadata.loaderModule)
                return load.source;

              // convert the source map into an object for transpilation chaining
              if (typeof load.metadata.sourceMap == 'string')
                load.metadata.sourceMap = JSON.parse(load.metadata.sourceMap);

              return Promise.resolve(transpiler.translate.apply(loader, args))
              .then(function(source) {
                // sanitize sourceMap if an object not a JSON string
                var sourceMap = load.metadata.sourceMap;
                if (sourceMap && typeof sourceMap == 'object') {
                  var originalName = load.address.split('!')[0];
                  
                  // force set the filename of the original file
                  if (!sourceMap.file || sourceMap.file == load.address)
                    sourceMap.file = originalName + '!transpiled';

                  // force set the sources list if only one source
                  if (!sourceMap.sources || sourceMap.sources.length <= 1 && (!sourceMap.sources[0] || sourceMap.sources[0] == load.address))
                    sourceMap.sources = [originalName];
                }

                if (load.metadata.format == 'esm' && !loader.builder && detectRegisterFormat(source))
                  load.metadata.format = 'register';
                return source;
              });
            }

            // legacy builder support
            if (loader.builder)
              load.metadata.originalSource = load.source;
            
            // defined in es6-module-loader/src/transpile.js
            return transpile.call(loader, load)
            .then(function(source) {
              // clear sourceMap as transpiler embeds it
              load.metadata.sourceMap = undefined;
              return source;
            });            
          });
        }

        // skip transpiler and transpiler runtime loading when transpiler is disabled
        if (loader.transpiler === false)
          return source;

        // load the transpiler correctly
        if (loader._loader.loadedTranspiler === false && (loader.transpiler == 'traceur' || loader.transpiler == 'typescript' || loader.transpiler == 'babel')
            && load.name == loader.normalizeSync(loader.transpiler)) {

          // always load transpiler as a global
          if (source.length > 100 && !load.metadata.format) {
            load.metadata.format = 'global';

            if (loader.transpiler === 'traceur')
              load.metadata.exports = 'traceur';
            if (loader.transpiler === 'typescript')
              load.metadata.exports = 'ts';
          }

          loader._loader.loadedTranspiler = true;
        }

        // load the transpiler runtime correctly
        if (loader._loader.loadedTranspilerRuntime === false) {
          if (load.name == loader.normalizeSync('traceur-runtime')
              || load.name == loader.normalizeSync('babel/external-helpers*')) {
            if (source.length > 100)
              load.metadata.format = load.metadata.format || 'global';

            loader._loader.loadedTranspilerRuntime = true;
          }
        }

        // detect transpiler runtime usage to load runtimes
        if ((load.metadata.format == 'register' || load.metadata.bundle) && loader._loader.loadedTranspilerRuntime !== true) {
          if (loader.transpiler == 'traceur' && !__global.$traceurRuntime && load.source.match(traceurRuntimeRegEx)) {
            loader._loader.loadedTranspilerRuntime = loader._loader.loadedTranspilerRuntime || false;
            return loader['import']('traceur-runtime').then(function() {
              return source;
            });
          }
          if (loader.transpiler == 'babel' && !__global.babelHelpers && load.source.match(babelHelpersRegEx)) {
            loader._loader.loadedTranspilerRuntime = loader._loader.loadedTranspilerRuntime || false;
            return loader['import']('babel/external-helpers').then(function() {
              return source;
            });
          }
        }

        return source;
      });
    };
  });

})();
/*
  SystemJS Global Format

  Supports
    metadata.deps
    metadata.globals
    metadata.exports

  Without metadata.exports, detects writes to the global object.
*/
var __globalName = typeof self != 'undefined' ? 'self' : 'global';

hook('fetch', function(fetch) {
  return function(load) {
    if (load.metadata.exports && !load.metadata.format)
      load.metadata.format = 'global';
    return fetch.call(this, load);
  };
});

// ideally we could support script loading for globals, but the issue with that is that
// we can't do it with AMD support side-by-side since AMD support means defining the
// global define, and global support means not definining it, yet we don't have any hook
// into the "pre-execution" phase of a script tag being loaded to handle both cases
hook('instantiate', function(instantiate) {
  return function(load) {
    var loader = this;

    if (!load.metadata.format)
      load.metadata.format = 'global';

    // global is a fallback module format
    if (load.metadata.format == 'global' && !load.metadata.entry) {

      var entry = createEntry();

      load.metadata.entry = entry;

      entry.deps = [];

      for (var g in load.metadata.globals) {
        var gl = load.metadata.globals[g];
        if (gl)
          entry.deps.push(gl);
      }

      entry.execute = function(require, exports, module) {

        var globals;
        if (load.metadata.globals) {
          globals = {};
          for (var g in load.metadata.globals)
            if (load.metadata.globals[g])
              globals[g] = require(load.metadata.globals[g]);
        }
        
        var exportName = load.metadata.exports;

        if (exportName)
          load.source += '\n' + __globalName + '["' + exportName + '"] = ' + exportName + ';';

        var retrieveGlobal = loader.get('@@global-helpers').prepareGlobal(module.id, exportName, globals, !!load.metadata.encapsulateGlobal);
        __exec.call(loader, load);

        return retrieveGlobal();
      }
    }
    return instantiate.call(this, load);
  };
});


function getGlobalValue(exports) {
  if (typeof exports == 'string')
    return readMemberExpression(exports, __global);

  if (!(exports instanceof Array))
    throw new Error('Global exports must be a string or array.');

  var globalValue = {};
  var first = true;
  for (var i = 0; i < exports.length; i++) {
    var val = readMemberExpression(exports[i], __global);
    if (first) {
      globalValue['default'] = val;
      first = false;
    }
    globalValue[exports[i].split('.').pop()] = val;
  }
  return globalValue;
}

hook('reduceRegister_', function(reduceRegister) {
  return function(load, register) {
    if (register || !load.metadata.exports)
      return reduceRegister.call(this, load, register);

    load.metadata.format = 'global';
    var entry = load.metadata.entry = createEntry();
    entry.deps = load.metadata.deps;
    var globalValue = getGlobalValue(load.metadata.exports);
    entry.execute = function() {
      return globalValue;
    };
  };
});

hookConstructor(function(constructor) {
  return function() {
    var loader = this;
    constructor.call(loader);

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    // bare minimum ignores
    var ignoredGlobalProps = ['_g', 'sessionStorage', 'localStorage', 'clipboardData', 'frames', 'frameElement', 'external', 
      'mozAnimationStartTime', 'webkitStorageInfo', 'webkitIndexedDB', 'mozInnerScreenY', 'mozInnerScreenX'];

    var globalSnapshot;

    function forEachGlobal(callback) {
      if (Object.keys)
        Object.keys(__global).forEach(callback);
      else
        for (var g in __global) {
          if (!hasOwnProperty.call(__global, g))
            continue;
          callback(g);
        }
    }

    function forEachGlobalValue(callback) {
      forEachGlobal(function(globalName) {
        if (indexOf.call(ignoredGlobalProps, globalName) != -1)
          return;
        try {
          var value = __global[globalName];
        }
        catch (e) {
          ignoredGlobalProps.push(globalName);
        }
        callback(globalName, value);
      });
    }

    loader.set('@@global-helpers', loader.newModule({
      prepareGlobal: function(moduleName, exports, globals, encapsulate) {
        // disable module detection
        var curDefine = __global.define;
        
        __global.define = undefined;

        // set globals
        var oldGlobals;
        if (globals) {
          oldGlobals = {};
          for (var g in globals) {
            oldGlobals[g] = __global[g];
            __global[g] = globals[g];
          }
        }

        // store a complete copy of the global object in order to detect changes
        if (!exports) {
          globalSnapshot = {};

          forEachGlobalValue(function(name, value) {
            globalSnapshot[name] = value;
          });
        }

        // return function to retrieve global
        return function() {
          var globalValue = exports ? getGlobalValue(exports) : {};

          var singleGlobal;
          var multipleExports = !!exports;

          if (!exports || encapsulate)
            forEachGlobalValue(function(name, value) {
              if (globalSnapshot[name] === value)
                return;
              if (typeof value == 'undefined')
                return;
              
              // allow global encapsulation where globals are removed
              if (encapsulate)
                __global[name] = undefined;

              if (!exports) {
                globalValue[name] = value;

                if (typeof singleGlobal != 'undefined') {
                  if (!multipleExports && singleGlobal !== value)
                    multipleExports = true;
                }
                else {
                  singleGlobal = value;
                }
              }
            });

          globalValue = multipleExports ? globalValue : singleGlobal;

          // revert globals
          if (oldGlobals) {
            for (var g in oldGlobals)
              __global[g] = oldGlobals[g];
          }
          __global.define = curDefine;

          return globalValue;
        };
      }
    }));
  };
});
/*
  SystemJS CommonJS Format
*/
(function() {
  // CJS Module Format
  // require('...') || exports[''] = ... || exports.asd = ... || module.exports = ...
  var cjsExportsRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/;
  // RegEx adjusted from https://github.com/jbrantly/yabble/blob/master/lib/yabble.js#L339
  var cjsRequireRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g;
  var commentRegEx = /(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;

  var stringRegEx = /("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g;

  // used to support leading #!/usr/bin/env in scripts as supported in Node
  var hashBangRegEx = /^\#\!.*/;

  function getCJSDeps(source) {
    cjsRequireRegEx.lastIndex = commentRegEx.lastIndex = stringRegEx.lastIndex = 0;

    var deps = [];

    var match;

    // track string and comment locations for unminified source    
    var stringLocations = [], commentLocations = [];

    function inLocation(locations, match) {
      for (var i = 0; i < locations.length; i++)
        if (locations[i][0] < match.index && locations[i][1] > match.index)
          return true;
      return false;
    }

    if (source.length / source.split('\n').length < 200) {
      while (match = stringRegEx.exec(source))
        stringLocations.push([match.index, match.index + match[0].length]);

      // TODO: track template literals here before comments
      
      while (match = commentRegEx.exec(source)) {
        // only track comments not starting in strings
        if (!inLocation(stringLocations, match))
          commentLocations.push([match.index + match[1].length, match.index + match[0].length - 1]);
      }
    }

    while (match = cjsRequireRegEx.exec(source)) {
      // ensure we're not within a string or comment location
      if (!inLocation(stringLocations, match) && !inLocation(commentLocations, match)) {
        var dep = match[1].substr(1, match[1].length - 2);
        // skip cases like require('" + file + "')
        if (dep.match(/"|'/))
          continue;
        // trailing slash requires are removed as they don't map mains in SystemJS
        if (dep[dep.length - 1] == '/')
          dep = dep.substr(0, dep.length - 1);
        deps.push(dep);
      }
    }

    return deps;
  }

  hook('instantiate', function(instantiate) {
    return function(load) {
      var loader = this;
      if (!load.metadata.format) {
        cjsExportsRegEx.lastIndex = 0;
        cjsRequireRegEx.lastIndex = 0;
        if (cjsRequireRegEx.exec(load.source) || cjsExportsRegEx.exec(load.source))
          load.metadata.format = 'cjs';
      }

      if (load.metadata.format == 'cjs') {
        var metaDeps = load.metadata.deps;
        var deps = load.metadata.cjsRequireDetection === false ? [] : getCJSDeps(load.source);

        for (var g in load.metadata.globals)
          if (load.metadata.globals[g])
            deps.push(load.metadata.globals[g]);

        var entry = createEntry();

        load.metadata.entry = entry;

        entry.deps = deps;
        entry.executingRequire = true;
        entry.execute = function(_require, exports, module) {
          function require(name) {
            if (name[name.length - 1] == '/')
              name = name.substr(0, name.length - 1);
            return _require.apply(this, arguments);
          }
          require.resolve = function(name) {
            return loader.get('@@cjs-helpers').requireResolve(name, module.id);
          };
          // support module.paths ish
          module.paths = [];
          module.require = _require;

          // ensure meta deps execute first
          if (!load.metadata.cjsDeferDepsExecute)
            for (var i = 0; i < metaDeps.length; i++)
              require(metaDeps[i]);

          var pathVars = loader.get('@@cjs-helpers').getPathVars(module.id);
          var __cjsWrapper = {
            exports: exports,
            args: [require, exports, module, pathVars.filename, pathVars.dirname, __global, __global]
          };

          var cjsWrapper = "(function(require, exports, module, __filename, __dirname, global, GLOBAL";

          // add metadata.globals to the wrapper arguments
          if (load.metadata.globals)
            for (var g in load.metadata.globals) {
              __cjsWrapper.args.push(require(load.metadata.globals[g]));
              cjsWrapper += ", " + g;
            }

          // disable AMD detection
          var define = __global.define;
          __global.define = undefined;
          __global.__cjsWrapper = __cjsWrapper;

          load.source = cjsWrapper + ") {" + load.source.replace(hashBangRegEx, '') + "\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);";

          __exec.call(loader, load);

          __global.__cjsWrapper = undefined;
          __global.define = define;
        };
      }

      return instantiate.call(loader, load);
    };
  });
})();
hookConstructor(function(constructor) {
  return function() {
    var loader = this;
    constructor.call(loader);

    if (typeof window != 'undefined' && typeof document != 'undefined' && window.location)
      var windowOrigin = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

    function stripOrigin(path) {
      if (path.substr(0, 8) == 'file:///')
        return path.substr(7 + !!isWindows);
      
      if (windowOrigin && path.substr(0, windowOrigin.length) == windowOrigin)
        return path.substr(windowOrigin.length);

      return path;
    }

    loader.set('@@cjs-helpers', loader.newModule({
      requireResolve: function(request, parentId) {
        return stripOrigin(loader.normalizeSync(request, parentId));
      },
      getPathVars: function(moduleId) {
        // remove any plugin syntax
        var pluginIndex = moduleId.lastIndexOf('!');
        var filename;
        if (pluginIndex != -1)
          filename = moduleId.substr(0, pluginIndex);
        else
          filename = moduleId;

        var dirname = filename.split('/');
        dirname.pop();
        dirname = dirname.join('/');

        return {
          filename: stripOrigin(filename),
          dirname: stripOrigin(dirname)
        };
      }
    }))
  };
});/*
 * AMD Helper function module
 * Separated into its own file as this is the part needed for full AMD support in SFX builds
 * NB since implementations have now diverged this can be merged back with amd.js
 */

hook('fetch', function(fetch) {
  return function(load) {
    // script load implies define global leak
    if (load.metadata.scriptLoad && isBrowser)
      __global.define = this.amdDefine;
    return fetch.call(this, load);
  };
});
 
hookConstructor(function(constructor) {
  return function() {
    var loader = this;
    constructor.call(this);

    var commentRegEx = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;
    var cjsRequirePre = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])";
    var cjsRequirePost = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)";
    var fnBracketRegEx = /\(([^\)]*)\)/;
    var wsRegEx = /^\s+|\s+$/g;
    
    var requireRegExs = {};

    function getCJSDeps(source, requireIndex) {

      // remove comments
      source = source.replace(commentRegEx, '');

      // determine the require alias
      var params = source.match(fnBracketRegEx);
      var requireAlias = (params[1].split(',')[requireIndex] || 'require').replace(wsRegEx, '');

      // find or generate the regex for this requireAlias
      var requireRegEx = requireRegExs[requireAlias] || (requireRegExs[requireAlias] = new RegExp(cjsRequirePre + requireAlias + cjsRequirePost, 'g'));

      requireRegEx.lastIndex = 0;

      var deps = [];

      var match;
      while (match = requireRegEx.exec(source))
        deps.push(match[2] || match[3]);

      return deps;
    }

    /*
      AMD-compatible require
      To copy RequireJS, set window.require = window.requirejs = loader.amdRequire
    */
    function require(names, callback, errback, referer) {
      // in amd, first arg can be a config object... we just ignore
      if (typeof names == 'object' && !(names instanceof Array))
        return require.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));

      // amd require
      if (typeof names == 'string' && typeof callback == 'function')
        names = [names];
      if (names instanceof Array) {
        var dynamicRequires = [];
        for (var i = 0; i < names.length; i++)
          dynamicRequires.push(loader['import'](names[i], referer));
        Promise.all(dynamicRequires).then(function(modules) {
          if (callback)
            callback.apply(null, modules);
        }, errback);
      }

      // commonjs require
      else if (typeof names == 'string') {
        var defaultJSExtension = loader.defaultJSExtensions && names.substr(names.length - 3, 3) != '.js';
        var normalized = loader.decanonicalize(names, referer);
        if (defaultJSExtension && normalized.substr(normalized.length - 3, 3) == '.js')
          normalized = normalized.substr(0, normalized.length - 3);
        var module = loader.get(normalized);
        if (!module)
          throw new Error('Module not already loaded loading "' + names + '" as ' + normalized + (referer ? ' from "' + referer + '".' : '.'));
        return module.__useDefault ? module['default'] : module;
      }

      else
        throw new TypeError('Invalid require');
    }

    function define(name, deps, factory) {
      if (typeof name != 'string') {
        factory = deps;
        deps = name;
        name = null;
      }
      if (!(deps instanceof Array)) {
        factory = deps;
        deps = ['require', 'exports', 'module'].splice(0, factory.length);
      }

      if (typeof factory != 'function')
        factory = (function(factory) {
          return function() { return factory; }
        })(factory);

      // in IE8, a trailing comma becomes a trailing undefined entry
      if (deps[deps.length - 1] === undefined)
        deps.pop();

      // remove system dependencies
      var requireIndex, exportsIndex, moduleIndex;
      
      if ((requireIndex = indexOf.call(deps, 'require')) != -1) {
        
        deps.splice(requireIndex, 1);

        // only trace cjs requires for non-named
        // named defines assume the trace has already been done
        if (!name)
          deps = deps.concat(getCJSDeps(factory.toString(), requireIndex));
      }

      if ((exportsIndex = indexOf.call(deps, 'exports')) != -1)
        deps.splice(exportsIndex, 1);
      
      if ((moduleIndex = indexOf.call(deps, 'module')) != -1)
        deps.splice(moduleIndex, 1);

      function execute(req, exports, module) {
        var depValues = [];
        for (var i = 0; i < deps.length; i++)
          depValues.push(req(deps[i]));

        module.uri = module.id;

        module.config = function() {};

        // add back in system dependencies
        if (moduleIndex != -1)
          depValues.splice(moduleIndex, 0, module);
        
        if (exportsIndex != -1)
          depValues.splice(exportsIndex, 0, exports);
        
        if (requireIndex != -1) {
          function contextualRequire(names, callback, errback) {
            if (typeof names == 'string' && typeof callback != 'function')
              return req(names);
            return require.call(loader, names, callback, errback, module.id);
          }
          contextualRequire.toUrl = function(name) {
            // normalize without defaultJSExtensions
            var defaultJSExtension = loader.defaultJSExtensions && name.substr(name.length - 3, 3) != '.js';
            var url = loader.decanonicalize(name, module.id);
            if (defaultJSExtension && url.substr(url.length - 3, 3) == '.js')
              url = url.substr(0, url.length - 3);
            return url;
          };
          depValues.splice(requireIndex, 0, contextualRequire);
        }

        // set global require to AMD require
        var curRequire = __global.require;
        __global.require = require;

        var output = factory.apply(exportsIndex == -1 ? __global : exports, depValues);

        __global.require = curRequire;

        if (typeof output == 'undefined' && module)
          output = module.exports;

        if (typeof output != 'undefined')
          return output;
      }

      var entry = createEntry();
      entry.name = name && (loader.decanonicalize || loader.normalize).call(loader, name);
      entry.deps = deps;
      entry.execute = execute;

      loader.pushRegister_({
        amd: true,
        entry: entry
      });
    }
    define.amd = {};

    // reduction function to attach defines to a load record
    hook('reduceRegister_', function(reduceRegister) {
      return function(load, register) {
        // only handle AMD registers here
        if (!register || !register.amd)
          return reduceRegister.call(this, load, register);

        var curMeta = load && load.metadata;
        var entry = register.entry;

        if (curMeta) {
          if (!curMeta.format || curMeta.format == 'detect')
            curMeta.format = 'amd';
          else if (!entry.name && curMeta.format != 'amd')
            throw new Error('AMD define called while executing ' + curMeta.format + ' module ' + load.name);
        }

        // anonymous define
        if (!entry.name) {
          if (!curMeta)
            throw new TypeError('Unexpected anonymous AMD define.');

          if (curMeta.entry && !curMeta.entry.name)
            throw new Error('Multiple anonymous defines in module ' + load.name);
          
          curMeta.entry = entry;
        }
        // named define
        else {
          // if we don't have any other defines, 
          // then let this be an anonymous define
          // this is just to support single modules of the form:
          // define('jquery')
          // still loading anonymously
          // because it is done widely enough to be useful
          // as soon as there is more than one define, this gets removed though
          if (curMeta) {
            if (!curMeta.entry && !curMeta.bundle)
              curMeta.entry = entry;
            else if (curMeta.entry && curMeta.entry.name)
              curMeta.entry = undefined;

            // note this is now a bundle
            curMeta.bundle = true;
          }

          // define the module through the register registry
          if (!(entry.name in this.defined))
            this.defined[entry.name] = entry;
        }
      };
    });

    loader.amdDefine = define;
    loader.amdRequire = require;
  };
});/*
  SystemJS AMD Format
*/
(function() {
  // AMD Module Format Detection RegEx
  // define([.., .., ..], ...)
  // define(varName); || define(function(require, exports) {}); || define({})
  var amdRegEx = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;

  hook('instantiate', function(instantiate) {
    return function(load) {
      var loader = this;
      
      if (load.metadata.format == 'amd' || !load.metadata.format && load.source.match(amdRegEx)) {
        load.metadata.format = 'amd';
        
        if (!loader.builder && loader.execute !== false) {
          var curDefine = __global.define;
          __global.define = this.amdDefine;

          try {
            __exec.call(loader, load);
          }
          finally {
            __global.define = curDefine;
          }

          if (!load.metadata.entry && !load.metadata.bundle)
            throw new TypeError('AMD module ' + load.name + ' did not define');
        }
        else {
          load.metadata.execute = function() {
            return load.metadata.builderExecute.apply(this, arguments);
          };
        }
      }

      return instantiate.call(loader, load);
    };
  });

})();
/*
  SystemJS Loader Plugin Support

  Supports plugin loader syntax with "!", or via metadata.loader

  The plugin name is loaded as a module itself, and can override standard loader hooks
  for the plugin resource. See the plugin section of the systemjs readme.
*/

(function() {
  function getParentName(loader, parentName) {
    // if parent is a plugin, normalize against the parent plugin argument only
    if (parentName) {
      var parentPluginIndex;
      if (loader.pluginFirst) {
        if ((parentPluginIndex = parentName.lastIndexOf('!')) != -1)
          return parentName.substr(parentPluginIndex + 1);
      }
      else {
        if ((parentPluginIndex = parentName.indexOf('!')) != -1)
          return parentName.substr(0, parentPluginIndex);
      }

      return parentName;
    }
  }

  function parsePlugin(loader, name) {
    var argumentName;
    var pluginName;

    var pluginIndex = name.lastIndexOf('!');

    if (pluginIndex == -1)
      return;

    if (loader.pluginFirst) {
      argumentName = name.substr(pluginIndex + 1);
      pluginName = name.substr(0, pluginIndex);
    }
    else {
      argumentName = name.substr(0, pluginIndex);
      pluginName = name.substr(pluginIndex + 1) || argumentName.substr(argumentName.lastIndexOf('.') + 1);
    }

    return {
      argument: argumentName,
      plugin: pluginName
    };
  }

  // put name back together after parts have been normalized
  function combinePluginParts(loader, argumentName, pluginName, defaultExtension) {
    if (defaultExtension && argumentName.substr(argumentName.length - 3, 3) == '.js')
      argumentName = argumentName.substr(0, argumentName.length - 3);

    if (loader.pluginFirst) {
      return pluginName + '!' + argumentName;
    }
    else {
      return argumentName + '!' + pluginName;
    }
  }

  // note if normalize will add a default js extension
  // if so, remove for backwards compat
  // this is strange and sucks, but will be deprecated
  function checkDefaultExtension(loader, arg) {
    return loader.defaultJSExtensions && arg.substr(arg.length - 3, 3) != '.js'; 
  }

  function createNormalizeSync(normalizeSync) {
    return function(name, parentName, isPlugin) {
      var loader = this;
      
      var parsed = parsePlugin(loader, name);
      parentName = getParentName(this, parentName);

      if (!parsed)
        return normalizeSync.call(this, name, parentName, isPlugin);

      // if this is a plugin, normalize the plugin name and the argument
      var argumentName = loader.normalizeSync(parsed.argument, parentName, true);
      var pluginName = loader.normalizeSync(parsed.plugin, parentName, true);
      return combinePluginParts(loader, argumentName, pluginName, checkDefaultExtension(loader, parsed.argument));
    };
  }
  
  hook('decanonicalize', createNormalizeSync);
  hook('normalizeSync', createNormalizeSync);

  hook('normalize', function(normalize) {
    return function(name, parentName, isPlugin) {
      var loader = this;

      parentName = getParentName(this, parentName);

      var parsed = parsePlugin(loader, name);

      if (!parsed)
        return normalize.call(loader, name, parentName, isPlugin);

      return Promise.all([
        loader.normalize(parsed.argument, parentName, true),
        loader.normalize(parsed.plugin, parentName, false)
      ])
      .then(function(normalized) {
        return combinePluginParts(loader, normalized[0], normalized[1], checkDefaultExtension(loader, parsed.argument));
      });
    }
  });

  hook('locate', function(locate) {
    return function(load) {
      var loader = this;

      var name = load.name;

      // plugin syntax
      var pluginSyntaxIndex;
      if (loader.pluginFirst) {
        if ((pluginSyntaxIndex = name.indexOf('!')) != -1) {
          load.metadata.loader = name.substr(0, pluginSyntaxIndex);
          load.name = name.substr(pluginSyntaxIndex + 1);
        }
      }
      else {
        if ((pluginSyntaxIndex = name.lastIndexOf('!')) != -1) {
          load.metadata.loader = name.substr(pluginSyntaxIndex + 1);
          load.name = name.substr(0, pluginSyntaxIndex);
        }
      }

      return locate.call(loader, load)
      .then(function(address) {
        if (pluginSyntaxIndex != -1 || !load.metadata.loader)
          return address;

        // normalize plugin relative to parent in locate here when
        // using plugin via loader metadata
        return (loader.pluginLoader || loader).normalize(load.metadata.loader, load.name)
        .then(function(loaderNormalized) {
          load.metadata.loader = loaderNormalized;
          return address;
        });
      })
      .then(function(address) {
        var plugin = load.metadata.loader;

        if (!plugin)
          return address;

        // don't allow a plugin to load itself
        if (load.name == plugin)
          throw new Error('Plugin ' + plugin + ' cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.');

        // only fetch the plugin itself if this name isn't defined
        if (loader.defined && loader.defined[name])
          return address;

        var pluginLoader = loader.pluginLoader || loader;

        // load the plugin module and run standard locate
        return pluginLoader['import'](plugin)
        .then(function(loaderModule) {
          // store the plugin module itself on the metadata
          load.metadata.loaderModule = loaderModule;

          load.address = address;
          if (loaderModule.locate)
            return loaderModule.locate.call(loader, load);

          return address;
        });
      });
    };
  });

  hook('fetch', function(fetch) {
    return function(load) {
      var loader = this;
      if (load.metadata.loaderModule && load.metadata.loaderModule.fetch && load.metadata.format != 'defined') {
        load.metadata.scriptLoad = false;
        return load.metadata.loaderModule.fetch.call(loader, load, function(load) {
          return fetch.call(loader, load);
        });
      }
      else {
        return fetch.call(loader, load);
      }
    };
  });

  hook('translate', function(translate) {
    return function(load) {
      var loader = this;
      var args = arguments;
      if (load.metadata.loaderModule && load.metadata.loaderModule.translate && load.metadata.format != 'defined') {
        return Promise.resolve(load.metadata.loaderModule.translate.apply(loader, args)).then(function(result) {
          var sourceMap = load.metadata.sourceMap;

          // sanitize sourceMap if an object not a JSON string
          if (sourceMap) {
            if (typeof sourceMap != 'object')
              throw new Error('load.metadata.sourceMap must be set to an object.');

            var originalName = load.address.split('!')[0];
            
            // force set the filename of the original file
            if (!sourceMap.file || sourceMap.file == load.address)
              sourceMap.file = originalName + '!transpiled';

            // force set the sources list if only one source
            if (!sourceMap.sources || sourceMap.sources.length <= 1 && (!sourceMap.sources[0] || sourceMap.sources[0] == load.address))
              sourceMap.sources = [originalName];
          }

          // if running on file:/// URLs, sourcesContent is necessary
          // load.metadata.sourceMap.sourcesContent = [load.source];

          if (typeof result == 'string')
            load.source = result;
          else
            warn.call(this, 'Plugin ' + load.metadata.loader + ' should return the source in translate, instead of setting load.source directly. This support will be deprecated.');

          return translate.apply(loader, args);
        });
      }
      else {
        return translate.apply(loader, args);
      }
    };
  });

  hook('instantiate', function(instantiate) {
    return function(load) {
      var loader = this;
      var calledInstantiate = false;

      if (load.metadata.loaderModule && load.metadata.loaderModule.instantiate && !loader.builder && load.metadata.format != 'defined')
        return Promise.resolve(load.metadata.loaderModule.instantiate.call(loader, load, function(load) {
          if (calledInstantiate)
            throw new Error('Instantiate must only be called once.');
          calledInstantiate = true;
          return instantiate.call(loader, load);
        })).then(function(result) {
          if (calledInstantiate)
            return result;

          load.metadata.entry = createEntry();
          load.metadata.entry.execute = function() {
            return result;
          }
          load.metadata.entry.deps = load.metadata.deps;
          load.metadata.format = 'defined';
          return instantiate.call(loader, load);
        });
      else
        return instantiate.call(loader, load);
    };
  });

})();/*
 * Conditions Extension
 *
 *   Allows a condition module to alter the resolution of an import via syntax:
 *
 *     import $ from 'jquery/#{browser}';
 *
 *   Will first load the module 'browser' via `SystemJS.import('browser')` and 
 *   take the default export of that module.
 *   If the default export is not a string, an error is thrown.
 * 
 *   We then substitute the string into the require to get the conditional resolution
 *   enabling environment-specific variations like:
 * 
 *     import $ from 'jquery/ie'
 *     import $ from 'jquery/firefox'
 *     import $ from 'jquery/chrome'
 *     import $ from 'jquery/safari'
 *
 *   It can be useful for a condition module to define multiple conditions.
 *   This can be done via the `|` modifier to specify an export member expression:
 *
 *     import 'jquery/#{./browser.js|grade.version}'
 *
 *   Where the `grade` export `version` member in the `browser.js` module  is substituted.
 *
 *
 * Boolean Conditionals
 *
 *   For polyfill modules, that are used as imports but have no module value,
 *   a binary conditional allows a module not to be loaded at all if not needed:
 *
 *     import 'es5-shim#?./conditions.js|needs-es5shim'
 *
 *   These conditions can also be negated via:
 *     
 *     import 'es5-shim#?./conditions.js|~es6'
 *
 */

  var sysConditions = ['browser', 'node', 'dev', 'build', 'production', 'default'];

  function parseCondition(condition) {
    var conditionExport, conditionModule, negation;

    var negation = condition[0] == '~';
    var conditionExportIndex = condition.lastIndexOf('|');
    if (conditionExportIndex != -1) {
      conditionExport = condition.substr(conditionExportIndex + 1);
      conditionModule = condition.substr(negation, conditionExportIndex - negation);
      
      if (negation)
        warn.call(this, 'Condition negation form "' + condition + '" is deprecated for "' + conditionModule + '|~' + conditionExport + '"');

      if (conditionExport[0] == '~') {
        negation = true;
        conditionExport = conditionExport.substr(1);
      }
    }
    else {
      conditionExport = 'default';
      conditionModule = condition.substr(negation);
      if (sysConditions.indexOf(conditionModule) != -1) {
        conditionExport = conditionModule;
        conditionModule = null;
      }
    }

    return {
      module: conditionModule || '@system-env',
      prop: conditionExport,
      negate: negation
    };
  }

  function serializeCondition(conditionObj) {
    return conditionObj.module + '|' + (conditionObj.negate ? '~' : '') + conditionObj.prop;
  }

  function resolveCondition(conditionObj, parentName, bool) {
    var self = this;
    return this.normalize(conditionObj.module, parentName)
    .then(function(normalizedCondition) {
      return self.load(normalizedCondition)
      .then(function(q) {
        var m = readMemberExpression(conditionObj.prop, self.get(normalizedCondition));

        if (bool && typeof m != 'boolean')
          throw new TypeError('Condition ' + serializeCondition(conditionObj) + ' did not resolve to a boolean.');

        return conditionObj.negate ? !m : m;
      });
    });
  }

  var interpolationRegEx = /#\{[^\}]+\}/;
  function interpolateConditional(name, parentName) {
    // first we normalize the conditional
    var conditionalMatch = name.match(interpolationRegEx);

    if (!conditionalMatch)
      return Promise.resolve(name);

    var conditionObj = parseCondition.call(this, conditionalMatch[0].substr(2, conditionalMatch[0].length - 3));

    // in builds, return normalized conditional
    if (this.builder)
      return this['normalize'](conditionObj.module, parentName)
      .then(function(conditionModule) {
        conditionObj.module = conditionModule;
        return name.replace(interpolationRegEx, '#{' + serializeCondition(conditionObj) + '}');
      });

    return resolveCondition.call(this, conditionObj, parentName, false)
    .then(function(conditionValue) {
      if (typeof conditionValue !== 'string')
        throw new TypeError('The condition value for ' + name + ' doesn\'t resolve to a string.');

      if (conditionValue.indexOf('/') != -1)
        throw new TypeError('Unabled to interpolate conditional ' + name + (parentName ? ' in ' + parentName : '') + '\n\tThe condition value ' + conditionValue + ' cannot contain a "/" separator.');

      return name.replace(interpolationRegEx, conditionValue);
    });
  }

  function booleanConditional(name, parentName) {
    // first we normalize the conditional
    var booleanIndex = name.lastIndexOf('#?');

    if (booleanIndex == -1)
      return Promise.resolve(name);

    var conditionObj = parseCondition.call(this, name.substr(booleanIndex + 2));

    // in builds, return normalized conditional
    if (this.builder)
      return this['normalize'](conditionObj.module, parentName)
      .then(function(conditionModule) {
        conditionObj.module = conditionModule;
        return name.substr(0, booleanIndex) + '#?' + serializeCondition(conditionObj);
      });

    return resolveCondition.call(this, conditionObj, parentName, true)
    .then(function(conditionValue) {
      return conditionValue ? name.substr(0, booleanIndex) : '@empty';
    });
  }

  // normalizeSync does not parse conditionals at all although it could
  hook('normalize', function(normalize) {
    return function(name, parentName, skipExt) {
      var loader = this;
      return booleanConditional.call(loader, name, parentName)
      .then(function(name) {
        return normalize.call(loader, name, parentName, skipExt);
      })
      .then(function(normalized) {
        return interpolateConditional.call(loader, normalized, parentName);
      });
    };
  });
/*
 * Alias Extension
 *
 * Allows a module to be a plain copy of another module by module name
 *
 * SystemJS.meta['mybootstrapalias'] = { alias: 'bootstrap' };
 *
 */
(function() {
  // aliases
  hook('fetch', function(fetch) {
    return function(load) {
      var alias = load.metadata.alias;
      var aliasDeps = load.metadata.deps || [];
      if (alias) {
        load.metadata.format = 'defined';
        var entry = createEntry();
        this.defined[load.name] = entry;
        entry.declarative = true;
        entry.deps = aliasDeps.concat([alias]);
        entry.declare = function(_export) {
          return {
            setters: [function(module) {
              for (var p in module)
                _export(p, module[p]);
              if (module.__useDefault)
                entry.module.exports.__useDefault = true;
            }],
            execute: function() {}
          };
        };
        return '';
      }

      return fetch.call(this, load);
    };
  });
})();/*
 * Meta Extension
 *
 * Sets default metadata on a load record (load.metadata) from
 * loader.metadata via SystemJS.meta function.
 *
 *
 * Also provides an inline meta syntax for module meta in source.
 *
 * Eg:
 *
 * loader.meta({
 *   'my/module': { deps: ['jquery'] }
 *   'my/*': { format: 'amd' }
 * });
 *
 * Which in turn populates loader.metadata.
 *
 * load.metadata.deps and load.metadata.format will then be set
 * for 'my/module'
 *
 * The same meta could be set with a my/module.js file containing:
 *
 * my/module.js
 *   "format amd";
 *   "deps[] jquery";
 *   "globals.some value"
 *   console.log('this is my/module');
 *
 * Configuration meta always takes preference to inline meta.
 *
 * Multiple matches in wildcards are supported and ammend the meta.
 *
 *
 * The benefits of the function form is that paths are URL-normalized
 * supporting say
 *
 * loader.meta({ './app': { format: 'cjs' } });
 *
 * Instead of needing to set against the absolute URL (https://site.com/app.js)
 *
 */

(function() {

  hookConstructor(function(constructor) {
    return function() {
      this.meta = {};
      constructor.call(this);
    };
  });

  hook('locate', function(locate) {
    return function(load) {
      var meta = this.meta;
      var name = load.name;

      // NB for perf, maybe introduce a fast-path wildcard lookup cache here
      // which is checked first

      // apply wildcard metas
      var bestDepth = 0;
      var wildcardIndex;
      for (var module in meta) {
        wildcardIndex = module.indexOf('*');
        if (wildcardIndex === -1)
          continue;
        if (module.substr(0, wildcardIndex) === name.substr(0, wildcardIndex)
            && module.substr(wildcardIndex + 1) === name.substr(name.length - module.length + wildcardIndex + 1)) {
          var depth = module.split('/').length;
          if (depth > bestDepth)
            bestDepth = depth;
          extendMeta(load.metadata, meta[module], bestDepth != depth);
        }
      }

      // apply exact meta
      if (meta[name])
        extendMeta(load.metadata, meta[name]);

      return locate.call(this, load);
    };
  });

  // detect any meta header syntax
  // only set if not already set
  var metaRegEx = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/;
  var metaPartRegEx = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;

  function setMetaProperty(target, p, value) {
    var pParts = p.split('.');
    var curPart;
    while (pParts.length > 1) {
      curPart = pParts.shift();
      target = target[curPart] = target[curPart] || {};
    }
    curPart = pParts.shift();
    if (!(curPart in target))
      target[curPart] = value;
  }

  hook('translate', function(translate) {
    return function(load) {
      // shortpath for bundled
      if (load.metadata.format == 'defined') {
        load.metadata.deps = load.metadata.deps || [];
        return Promise.resolve(load.source);
      }

      // NB meta will be post-translate pending transpiler conversion to plugins
      var meta = load.source.match(metaRegEx);
      if (meta) {
        var metaParts = meta[0].match(metaPartRegEx);

        for (var i = 0; i < metaParts.length; i++) {
          var curPart = metaParts[i];
          var len = curPart.length;

          var firstChar = curPart.substr(0, 1);
          if (curPart.substr(len - 1, 1) == ';')
            len--;

          if (firstChar != '"' && firstChar != "'")
            continue;

          var metaString = curPart.substr(1, curPart.length - 3);
          var metaName = metaString.substr(0, metaString.indexOf(' '));

          if (metaName) {
            var metaValue = metaString.substr(metaName.length + 1, metaString.length - metaName.length - 1);

            if (metaName.substr(metaName.length - 2, 2) == '[]') {
              metaName = metaName.substr(0, metaName.length - 2);
              load.metadata[metaName] = load.metadata[metaName] || [];
              load.metadata[metaName].push(metaValue);
            }
            else if (load.metadata[metaName] instanceof Array) {
              // temporary backwards compat for previous "deps" syntax
              warn.call(this, 'Module ' + load.name + ' contains deprecated "deps ' + metaValue + '" meta syntax.\nThis should be updated to "deps[] ' + metaValue + '" for pushing to array meta.');
              load.metadata[metaName].push(metaValue);
            }
            else {
              setMetaProperty(load.metadata, metaName, metaValue);
            }
          }
          else {
            load.metadata[metaString] = true;
          }
        }
      }

      return translate.apply(this, arguments);
    };
  });
})();
/*
  System bundles

  Allows a bundle module to be specified which will be dynamically 
  loaded before trying to load a given module.

  For example:
  SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']

  Will result in a load to "mybundle" whenever a load to "jquery"
  or "bootstrap/js/bootstrap" is made.

  In this way, the bundle becomes the request that provides the module
*/

(function() {
  // bundles support (just like RequireJS)
  // bundle name is module name of bundle itself
  // bundle is array of modules defined by the bundle
  // when a module in the bundle is requested, the bundle is loaded instead
  // of the form SystemJS.bundles['mybundle'] = ['jquery', 'bootstrap/js/bootstrap']
  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);
      this.bundles = {};
      this._loader.loadedBundles = {};
    };
  });

  // assign bundle metadata for bundle loads
  hook('locate', function(locate) {
    return function(load) {
      var loader = this;
      var matched = false;

      if (!(load.name in loader.defined))
        for (var b in loader.bundles) {
          for (var i = 0; i < loader.bundles[b].length; i++) {
            var curModule = loader.bundles[b][i];

            if (curModule == load.name) {
              matched = true;
              break;
            }

            // wildcard in bundles does not include / boundaries
            if (curModule.indexOf('*') != -1) {
              var parts = curModule.split('*');
              if (parts.length != 2) {
                loader.bundles[b].splice(i--, 1);
                continue;
              }
              
              if (load.name.substring(0, parts[0].length) == parts[0] &&
                  load.name.substr(load.name.length - parts[1].length, parts[1].length) == parts[1] &&
                  load.name.substr(parts[0].length, load.name.length - parts[1].length - parts[0].length).indexOf('/') == -1) {
                matched = true;
                break;
              }
            }
          }

          if (matched)
            return loader['import'](b)
            .then(function() {
              return locate.call(loader, load);
            });
        }

      return locate.call(loader, load);
    };
  });
})();
/*
 * Dependency Tree Cache
 * 
 * Allows a build to pre-populate a dependency trace tree on the loader of 
 * the expected dependency tree, to be loaded upfront when requesting the
 * module, avoinding the n round trips latency of module loading, where 
 * n is the dependency tree depth.
 *
 * eg:
 * SystemJS.depCache = {
 *  'app': ['normalized', 'deps'],
 *  'normalized': ['another'],
 *  'deps': ['tree']
 * };
 * 
 * SystemJS.import('app') 
 * // simultaneously starts loading all of:
 * // 'normalized', 'deps', 'another', 'tree'
 * // before "app" source is even loaded
 *
 */

(function() {
  hookConstructor(function(constructor) {
    return function() {
      constructor.call(this);
      this.depCache = {};
    }
  });

  hook('locate', function(locate) {
    return function(load) {
      var loader = this;
      // load direct deps, in turn will pick up their trace trees
      var deps = loader.depCache[load.name];
      if (deps)
        for (var i = 0; i < deps.length; i++)
          loader['import'](deps[i], load.name);

      return locate.call(loader, load);
    };
  });
})();
  
System = new SystemJSLoader();

__global.SystemJS = System;
System.version = '0.19.31 Standard';
  if (typeof module == 'object' && module.exports && typeof exports == 'object')
    module.exports = System;

  __global.System = System;

})(typeof self != 'undefined' ? self : global);}

// auto-load Promise polyfill if needed in the browser
var doPolyfill = typeof Promise === 'undefined';

// document.write
if (typeof document !== 'undefined') {
  var scripts = document.getElementsByTagName('script');
  $__curScript = scripts[scripts.length - 1];
  if (doPolyfill) {
    var curPath = $__curScript.src;
    var basePath = curPath.substr(0, curPath.lastIndexOf('/') + 1);
    window.systemJSBootstrap = bootstrap;
    document.write(
      '<' + 'script type="text/javascript" src="' + basePath + 'system-polyfills.js">' + '<' + '/script>'
    );
  }
  else {
    bootstrap();
  }
}
// importScripts
else if (typeof importScripts !== 'undefined') {
  var basePath = '';
  try {
    throw new Error('_');
  } catch (e) {
    e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function(m, url) {
      $__curScript = { src: url };
      basePath = url.replace(/\/[^\/]*$/, '/');
    });
  }
  if (doPolyfill)
    importScripts(basePath + 'system-polyfills.js');
  bootstrap();
}
else {
  $__curScript = typeof __filename != 'undefined' ? { src: __filename } : null;
  bootstrap();
}


})();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	__webpack_require__(1);
	var event_target_1 = __webpack_require__(2);
	var define_property_1 = __webpack_require__(4);
	var register_element_1 = __webpack_require__(5);
	var property_descriptor_1 = __webpack_require__(6);
	var timers_1 = __webpack_require__(8);
	var utils_1 = __webpack_require__(3);
	var set = 'set';
	var clear = 'clear';
	var blockingMethods = ['alert', 'prompt', 'confirm'];
	var _global = typeof window == 'undefined' ? global : window;
	timers_1.patchTimer(_global, set, clear, 'Timeout');
	timers_1.patchTimer(_global, set, clear, 'Interval');
	timers_1.patchTimer(_global, set, clear, 'Immediate');
	timers_1.patchTimer(_global, 'request', 'cancelMacroTask', 'AnimationFrame');
	timers_1.patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
	timers_1.patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
	for (var i = 0; i < blockingMethods.length; i++) {
	    var name = blockingMethods[i];
	    utils_1.patchMethod(_global, name, function (delegate, symbol, name) {
	        return function (s, args) {
	            return Zone.current.run(delegate, _global, args, name);
	        };
	    });
	}
	event_target_1.eventTargetPatch(_global);
	property_descriptor_1.propertyDescriptorPatch(_global);
	utils_1.patchClass('MutationObserver');
	utils_1.patchClass('WebKitMutationObserver');
	utils_1.patchClass('FileReader');
	define_property_1.propertyPatch();
	register_element_1.registerElementPatch(_global);
	// Treat XMLHTTPRequest as a macrotask.
	patchXHR(_global);
	var XHR_TASK = utils_1.zoneSymbol('xhrTask');
	function patchXHR(window) {
	    function findPendingTask(target) {
	        var pendingTask = target[XHR_TASK];
	        return pendingTask;
	    }
	    function scheduleTask(task) {
	        var data = task.data;
	        data.target.addEventListener('readystatechange', function () {
	            if (data.target.readyState === XMLHttpRequest.DONE) {
	                if (!data.aborted) {
	                    task.invoke();
	                }
	            }
	        });
	        var storedTask = data.target[XHR_TASK];
	        if (!storedTask) {
	            data.target[XHR_TASK] = task;
	        }
	        setNative.apply(data.target, data.args);
	        return task;
	    }
	    function placeholderCallback() {
	    }
	    function clearTask(task) {
	        var data = task.data;
	        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
	        // to prevent it from firing. So instead, we store info for the event listener.
	        data.aborted = true;
	        return clearNative.apply(data.target, data.args);
	    }
	    var setNative = utils_1.patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
	        var zone = Zone.current;
	        var options = {
	            target: self,
	            isPeriodic: false,
	            delay: null,
	            args: args,
	            aborted: false
	        };
	        return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
	    }; });
	    var clearNative = utils_1.patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
	        var task = findPendingTask(self);
	        if (task && typeof task.type == 'string') {
	            // If the XHR has already completed, do nothing.
	            if (task.cancelFn == null) {
	                return;
	            }
	            task.zone.cancelTask(task);
	        }
	        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no task to cancel. Do nothing.
	    }; });
	}
	/// GEO_LOCATION
	if (_global['navigator'] && _global['navigator'].geolocation) {
	    utils_1.patchPrototype(_global['navigator'].geolocation, [
	        'getCurrentPosition',
	        'watchPosition'
	    ]);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {;
	;
	var Zone = (function (global) {
	    var Zone = (function () {
	        function Zone(parent, zoneSpec) {
	            this._properties = null;
	            this._parent = parent;
	            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
	            this._properties = zoneSpec && zoneSpec.properties || {};
	            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
	        }
	        Object.defineProperty(Zone, "current", {
	            get: function () { return _currentZone; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(Zone, "currentTask", {
	            get: function () { return _currentTask; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(Zone.prototype, "parent", {
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Object.defineProperty(Zone.prototype, "name", {
	            get: function () { return this._name; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        Zone.prototype.get = function (key) {
	            var current = this;
	            while (current) {
	                if (current._properties.hasOwnProperty(key)) {
	                    return current._properties[key];
	                }
	                current = current._parent;
	            }
	        };
	        Zone.prototype.fork = function (zoneSpec) {
	            if (!zoneSpec)
	                throw new Error('ZoneSpec required!');
	            return this._zoneDelegate.fork(this, zoneSpec);
	        };
	        Zone.prototype.wrap = function (callback, source) {
	            if (typeof callback !== 'function') {
	                throw new Error('Expecting function got: ' + callback);
	            }
	            var _callback = this._zoneDelegate.intercept(this, callback, source);
	            var zone = this;
	            return function () {
	                return zone.runGuarded(_callback, this, arguments, source);
	            };
	        };
	        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
	            if (applyThis === void 0) { applyThis = null; }
	            if (applyArgs === void 0) { applyArgs = null; }
	            if (source === void 0) { source = null; }
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                try {
	                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	            }
	        };
	        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
	            task.runCount++;
	            if (task.zone != this)
	                throw new Error('A task can only be run in the zone which created it! (Creation: ' +
	                    task.zone.name + '; Execution: ' + this.name + ')');
	            var previousTask = _currentTask;
	            _currentTask = task;
	            var oldZone = _currentZone;
	            _currentZone = this;
	            try {
	                if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
	                    task.cancelFn = null;
	                }
	                try {
	                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
	                }
	                catch (error) {
	                    if (this._zoneDelegate.handleError(this, error)) {
	                        throw error;
	                    }
	                }
	            }
	            finally {
	                _currentZone = oldZone;
	                _currentTask = previousTask;
	            }
	        };
	        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('microTask', this, source, callback, data, customSchedule, null));
	        };
	        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
	            return this._zoneDelegate.scheduleTask(this, new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel));
	        };
	        Zone.prototype.cancelTask = function (task) {
	            var value = this._zoneDelegate.cancelTask(this, task);
	            task.runCount = -1;
	            task.cancelFn = null;
	            return value;
	        };
	        Zone.__symbol__ = __symbol__;
	        return Zone;
	    }());
	    ;
	    var ZoneDelegate = (function () {
	        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
	            this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
	            this.zone = zone;
	            this._parentDelegate = parentDelegate;
	            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
	            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
	            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
	            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
	            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
	            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
	            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
	            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
	            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
	            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
	            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
	            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
	            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
	            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
	            this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
	            this._hasTaskDlgt = zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
	        }
	        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
	            return this._forkZS
	                ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec)
	                : new Zone(targetZone, zoneSpec);
	        };
	        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
	            return this._interceptZS
	                ? this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source)
	                : callback;
	        };
	        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
	            return this._invokeZS
	                ? this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source)
	                : callback.apply(applyThis, applyArgs);
	        };
	        ZoneDelegate.prototype.handleError = function (targetZone, error) {
	            return this._handleErrorZS
	                ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error)
	                : true;
	        };
	        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
	            try {
	                if (this._scheduleTaskZS) {
	                    return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
	                }
	                else if (task.scheduleFn) {
	                    task.scheduleFn(task);
	                }
	                else if (task.type == 'microTask') {
	                    scheduleMicroTask(task);
	                }
	                else {
	                    throw new Error('Task is missing scheduleFn.');
	                }
	                return task;
	            }
	            finally {
	                if (targetZone == this.zone) {
	                    this._updateTaskCount(task.type, 1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
	            try {
	                return this._invokeTaskZS
	                    ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs)
	                    : task.callback.apply(applyThis, applyArgs);
	            }
	            finally {
	                if (targetZone == this.zone && (task.type != 'eventTask') && !(task.data && task.data.isPeriodic)) {
	                    this._updateTaskCount(task.type, -1);
	                }
	            }
	        };
	        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
	            var value;
	            if (this._cancelTaskZS) {
	                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
	            }
	            else if (!task.cancelFn) {
	                throw new Error('Task does not support cancellation, or is already canceled.');
	            }
	            else {
	                value = task.cancelFn(task);
	            }
	            if (targetZone == this.zone) {
	                // this should not be in the finally block, because exceptions assume not canceled.
	                this._updateTaskCount(task.type, -1);
	            }
	            return value;
	        };
	        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
	            return this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
	        };
	        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
	            var counts = this._taskCounts;
	            var prev = counts[type];
	            var next = counts[type] = prev + count;
	            if (next < 0) {
	                throw new Error('More tasks executed then were scheduled.');
	            }
	            if (prev == 0 || next == 0) {
	                var isEmpty = {
	                    microTask: counts.microTask > 0,
	                    macroTask: counts.macroTask > 0,
	                    eventTask: counts.eventTask > 0,
	                    change: type
	                };
	                try {
	                    this.hasTask(this.zone, isEmpty);
	                }
	                finally {
	                    if (this._parentDelegate) {
	                        this._parentDelegate._updateTaskCount(type, count);
	                    }
	                }
	            }
	        };
	        return ZoneDelegate;
	    }());
	    var ZoneTask = (function () {
	        function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
	            this.runCount = 0;
	            this.type = type;
	            this.zone = zone;
	            this.source = source;
	            this.data = options;
	            this.scheduleFn = scheduleFn;
	            this.cancelFn = cancelFn;
	            this.callback = callback;
	            var self = this;
	            this.invoke = function () {
	                try {
	                    return zone.runTask(self, this, arguments);
	                }
	                finally {
	                    drainMicroTaskQueue();
	                }
	            };
	        }
	        return ZoneTask;
	    }());
	    function __symbol__(name) { return '__zone_symbol__' + name; }
	    ;
	    var symbolSetTimeout = __symbol__('setTimeout');
	    var symbolPromise = __symbol__('Promise');
	    var symbolThen = __symbol__('then');
	    var _currentZone = new Zone(null, null);
	    var _currentTask = null;
	    var _microTaskQueue = [];
	    var _isDrainingMicrotaskQueue = false;
	    var _uncaughtPromiseErrors = [];
	    var _drainScheduled = false;
	    function scheduleQueueDrain() {
	        if (!_drainScheduled && !_currentTask && _microTaskQueue.length == 0) {
	            // We are not running in Task, so we need to kickstart the microtask queue.
	            if (global[symbolPromise]) {
	                global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
	            }
	            else {
	                global[symbolSetTimeout](drainMicroTaskQueue, 0);
	            }
	        }
	    }
	    function scheduleMicroTask(task) {
	        scheduleQueueDrain();
	        _microTaskQueue.push(task);
	    }
	    function consoleError(e) {
	        var rejection = e && e.rejection;
	        if (rejection) {
	            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection);
	        }
	        console.error(e);
	    }
	    function drainMicroTaskQueue() {
	        if (!_isDrainingMicrotaskQueue) {
	            _isDrainingMicrotaskQueue = true;
	            while (_microTaskQueue.length) {
	                var queue = _microTaskQueue;
	                _microTaskQueue = [];
	                for (var i = 0; i < queue.length; i++) {
	                    var task = queue[i];
	                    try {
	                        task.zone.runTask(task, null, null);
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                }
	            }
	            while (_uncaughtPromiseErrors.length) {
	                var uncaughtPromiseErrors = _uncaughtPromiseErrors;
	                _uncaughtPromiseErrors = [];
	                var _loop_1 = function(i) {
	                    var uncaughtPromiseError = uncaughtPromiseErrors[i];
	                    try {
	                        uncaughtPromiseError.zone.runGuarded(function () { throw uncaughtPromiseError; });
	                    }
	                    catch (e) {
	                        consoleError(e);
	                    }
	                };
	                for (var i = 0; i < uncaughtPromiseErrors.length; i++) {
	                    _loop_1(i);
	                }
	            }
	            _isDrainingMicrotaskQueue = false;
	            _drainScheduled = false;
	        }
	    }
	    function isThenable(value) {
	        return value && value.then;
	    }
	    function forwardResolution(value) { return value; }
	    function forwardRejection(rejection) { return ZoneAwarePromise.reject(rejection); }
	    var symbolState = __symbol__('state');
	    var symbolValue = __symbol__('value');
	    var source = 'Promise.then';
	    var UNRESOLVED = null;
	    var RESOLVED = true;
	    var REJECTED = false;
	    var REJECTED_NO_CATCH = 0;
	    function makeResolver(promise, state) {
	        return function (v) {
	            resolvePromise(promise, state, v);
	            // Do not return value or you will break the Promise spec.
	        };
	    }
	    function resolvePromise(promise, state, value) {
	        if (promise[symbolState] === UNRESOLVED) {
	            if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
	                clearRejectedNoCatch(value);
	                resolvePromise(promise, value[symbolState], value[symbolValue]);
	            }
	            else if (isThenable(value)) {
	                value.then(makeResolver(promise, state), makeResolver(promise, false));
	            }
	            else {
	                promise[symbolState] = state;
	                var queue = promise[symbolValue];
	                promise[symbolValue] = value;
	                for (var i = 0; i < queue.length;) {
	                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
	                }
	                if (queue.length == 0 && state == REJECTED) {
	                    promise[symbolState] = REJECTED_NO_CATCH;
	                    try {
	                        throw new Error("Uncaught (in promise): " + value);
	                    }
	                    catch (e) {
	                        var error = e;
	                        error.rejection = value;
	                        error.promise = promise;
	                        error.zone = Zone.current;
	                        error.task = Zone.currentTask;
	                        _uncaughtPromiseErrors.push(error);
	                        scheduleQueueDrain();
	                    }
	                }
	            }
	        }
	        // Resolving an already resolved promise is a noop.
	        return promise;
	    }
	    function clearRejectedNoCatch(promise) {
	        if (promise[symbolState] === REJECTED_NO_CATCH) {
	            promise[symbolState] = REJECTED;
	            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
	                if (promise === _uncaughtPromiseErrors[i].promise) {
	                    _uncaughtPromiseErrors.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }
	    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
	        clearRejectedNoCatch(promise);
	        var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
	        zone.scheduleMicroTask(source, function () {
	            try {
	                resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
	            }
	            catch (error) {
	                resolvePromise(chainPromise, false, error);
	            }
	        });
	    }
	    var ZoneAwarePromise = (function () {
	        function ZoneAwarePromise(executor) {
	            var promise = this;
	            promise[symbolState] = UNRESOLVED;
	            promise[symbolValue] = []; // queue;
	            try {
	                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
	            }
	            catch (e) {
	                resolvePromise(promise, false, e);
	            }
	        }
	        ZoneAwarePromise.resolve = function (value) {
	            return resolvePromise(new this(null), RESOLVED, value);
	        };
	        ZoneAwarePromise.reject = function (error) {
	            return resolvePromise(new this(null), REJECTED, error);
	        };
	        ZoneAwarePromise.race = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
	            function onResolve(value) { promise && (promise = null || resolve(value)); }
	            function onReject(error) { promise && (promise = null || reject(error)); }
	            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                var value = values_1[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then(onResolve, onReject);
	            }
	            return promise;
	        };
	        ZoneAwarePromise.all = function (values) {
	            var resolve;
	            var reject;
	            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
	            var count = 0;
	            var resolvedValues = [];
	            function onReject(error) { promise && reject(error); promise = null; }
	            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
	                var value = values_2[_i];
	                if (!isThenable(value)) {
	                    value = this.resolve(value);
	                }
	                value.then((function (index) { return function (value) {
	                    resolvedValues[index] = value;
	                    count--;
	                    if (promise && !count) {
	                        resolve(resolvedValues);
	                    }
	                    promise == null;
	                }; })(count), onReject);
	                count++;
	            }
	            if (!count)
	                resolve(resolvedValues);
	            return promise;
	        };
	        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
	            var chainPromise = new ZoneAwarePromise(null);
	            var zone = Zone.current;
	            if (this[symbolState] == UNRESOLVED) {
	                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
	            }
	            else {
	                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
	            }
	            return chainPromise;
	        };
	        ZoneAwarePromise.prototype.catch = function (onRejected) {
	            return this.then(null, onRejected);
	        };
	        return ZoneAwarePromise;
	    }());
	    var NativePromise = global[__symbol__('Promise')] = global.Promise;
	    global.Promise = ZoneAwarePromise;
	    if (NativePromise) {
	        var NativePromiseProtototype = NativePromise.prototype;
	        var NativePromiseThen_1 = NativePromiseProtototype[__symbol__('then')]
	            = NativePromiseProtototype.then;
	        NativePromiseProtototype.then = function (onResolve, onReject) {
	            var nativePromise = this;
	            return new ZoneAwarePromise(function (resolve, reject) {
	                NativePromiseThen_1.call(nativePromise, resolve, reject);
	            }).then(onResolve, onReject);
	        };
	    }
	    return global.Zone = Zone;
	})(typeof window === 'undefined' ? global : window);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(3);
	var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
	var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'.split(',');
	var EVENT_TARGET = 'EventTarget';
	function eventTargetPatch(_global) {
	    var apis = [];
	    var isWtf = _global['wtf'];
	    if (isWtf) {
	        // Workaround for: https://github.com/google/tracing-framework/issues/555
	        apis = WTF_ISSUE_555.split(',').map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
	    }
	    else if (_global[EVENT_TARGET]) {
	        apis.push(EVENT_TARGET);
	    }
	    else {
	        // Note: EventTarget is not available in all browsers,
	        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
	        apis = NO_EVENT_TARGET;
	    }
	    for (var i = 0; i < apis.length; i++) {
	        var type = _global[apis[i]];
	        utils_1.patchEventTargetMethods(type && type.prototype);
	    }
	}
	exports.eventTargetPatch = eventTargetPatch;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Suppress closure compiler errors about unknown 'process' variable
	 * @fileoverview
	 * @suppress {undefinedVars}
	 */
	"use strict";
	exports.zoneSymbol = Zone['__symbol__'];
	var _global = typeof window == 'undefined' ? global : window;
	function bindArguments(args, source) {
	    for (var i = args.length - 1; i >= 0; i--) {
	        if (typeof args[i] === 'function') {
	            args[i] = Zone.current.wrap(args[i], source + '_' + i);
	        }
	    }
	    return args;
	}
	exports.bindArguments = bindArguments;
	;
	function patchPrototype(prototype, fnNames) {
	    var source = prototype.constructor['name'];
	    var _loop_1 = function(i) {
	        var name_1 = fnNames[i];
	        var delegate = prototype[name_1];
	        if (delegate) {
	            prototype[name_1] = (function (delegate) {
	                return function () {
	                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
	                };
	            })(delegate);
	        }
	    };
	    for (var i = 0; i < fnNames.length; i++) {
	        _loop_1(i);
	    }
	}
	exports.patchPrototype = patchPrototype;
	;
	exports.isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
	exports.isNode = (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
	exports.isBrowser = !exports.isNode && !exports.isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
	function patchProperty(obj, prop) {
	    var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
	        enumerable: true,
	        configurable: true
	    };
	    // A property descriptor cannot have getter/setter and be writable
	    // deleting the writable and value properties avoids this error:
	    //
	    // TypeError: property descriptors must not specify a value or be writable when a
	    // getter or setter has been specified
	    delete desc.writable;
	    delete desc.value;
	    // substr(2) cuz 'onclick' -> 'click', etc
	    var eventName = prop.substr(2);
	    var _prop = '_' + prop;
	    desc.set = function (fn) {
	        if (this[_prop]) {
	            this.removeEventListener(eventName, this[_prop]);
	        }
	        if (typeof fn === 'function') {
	            var wrapFn = function (event) {
	                var result;
	                result = fn.apply(this, arguments);
	                if (result != undefined && !result)
	                    event.preventDefault();
	            };
	            this[_prop] = wrapFn;
	            this.addEventListener(eventName, wrapFn, false);
	        }
	        else {
	            this[_prop] = null;
	        }
	    };
	    desc.get = function () {
	        return this[_prop];
	    };
	    Object.defineProperty(obj, prop, desc);
	}
	exports.patchProperty = patchProperty;
	;
	function patchOnProperties(obj, properties) {
	    var onProperties = [];
	    for (var prop in obj) {
	        if (prop.substr(0, 2) == 'on') {
	            onProperties.push(prop);
	        }
	    }
	    for (var j = 0; j < onProperties.length; j++) {
	        patchProperty(obj, onProperties[j]);
	    }
	    if (properties) {
	        for (var i = 0; i < properties.length; i++) {
	            patchProperty(obj, 'on' + properties[i]);
	        }
	    }
	}
	exports.patchOnProperties = patchOnProperties;
	;
	var EVENT_TASKS = exports.zoneSymbol('eventTasks');
	var ADD_EVENT_LISTENER = 'addEventListener';
	var REMOVE_EVENT_LISTENER = 'removeEventListener';
	var SYMBOL_ADD_EVENT_LISTENER = exports.zoneSymbol(ADD_EVENT_LISTENER);
	var SYMBOL_REMOVE_EVENT_LISTENER = exports.zoneSymbol(REMOVE_EVENT_LISTENER);
	function findExistingRegisteredTask(target, handler, name, capture, remove) {
	    var eventTasks = target[EVENT_TASKS];
	    if (eventTasks) {
	        for (var i = 0; i < eventTasks.length; i++) {
	            var eventTask = eventTasks[i];
	            var data = eventTask.data;
	            if (data.handler === handler
	                && data.useCapturing === capture
	                && data.eventName === name) {
	                if (remove) {
	                    eventTasks.splice(i, 1);
	                }
	                return eventTask;
	            }
	        }
	    }
	    return null;
	}
	function attachRegisteredEvent(target, eventTask) {
	    var eventTasks = target[EVENT_TASKS];
	    if (!eventTasks) {
	        eventTasks = target[EVENT_TASKS] = [];
	    }
	    eventTasks.push(eventTask);
	}
	function scheduleEventListener(eventTask) {
	    var meta = eventTask.data;
	    attachRegisteredEvent(meta.target, eventTask);
	    return meta.target[SYMBOL_ADD_EVENT_LISTENER](meta.eventName, eventTask.invoke, meta.useCapturing);
	}
	function cancelEventListener(eventTask) {
	    var meta = eventTask.data;
	    findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
	    meta.target[SYMBOL_REMOVE_EVENT_LISTENER](meta.eventName, eventTask.invoke, meta.useCapturing);
	}
	function zoneAwareAddEventListener(self, args) {
	    var eventName = args[0];
	    var handler = args[1];
	    var useCapturing = args[2] || false;
	    // - Inside a Web Worker, `this` is undefined, the context is `global`
	    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	    // see https://github.com/angular/zone.js/issues/190
	    var target = self || _global;
	    var delegate = null;
	    if (typeof handler == 'function') {
	        delegate = handler;
	    }
	    else if (handler && handler.handleEvent) {
	        delegate = function (event) { return handler.handleEvent(event); };
	    }
	    var validZoneHandler = false;
	    try {
	        // In cross site contexts (such as WebDriver frameworks like Selenium),
	        // accessing the handler object here will cause an exception to be thrown which
	        // will fail tests prematurely.
	        validZoneHandler = handler && handler.toString() === "[object FunctionWrapper]";
	    }
	    catch (e) {
	        // Returning nothing here is fine, because objects in a cross-site context are unusable
	        return;
	    }
	    // Ignore special listeners of IE11 & Edge dev tools, see https://github.com/angular/zone.js/issues/150
	    if (!delegate || validZoneHandler) {
	        return target[SYMBOL_ADD_EVENT_LISTENER](eventName, handler, useCapturing);
	    }
	    var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
	    if (eventTask) {
	        // we already registered, so this will have noop.
	        return target[SYMBOL_ADD_EVENT_LISTENER](eventName, eventTask.invoke, useCapturing);
	    }
	    var zone = Zone.current;
	    var source = target.constructor['name'] + '.addEventListener:' + eventName;
	    var data = {
	        target: target,
	        eventName: eventName,
	        name: eventName,
	        useCapturing: useCapturing,
	        handler: handler
	    };
	    zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
	}
	function zoneAwareRemoveEventListener(self, args) {
	    var eventName = args[0];
	    var handler = args[1];
	    var useCapturing = args[2] || false;
	    // - Inside a Web Worker, `this` is undefined, the context is `global`
	    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	    // see https://github.com/angular/zone.js/issues/190
	    var target = self || _global;
	    var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
	    if (eventTask) {
	        eventTask.zone.cancelTask(eventTask);
	    }
	    else {
	        target[SYMBOL_REMOVE_EVENT_LISTENER](eventName, handler, useCapturing);
	    }
	}
	function patchEventTargetMethods(obj) {
	    if (obj && obj.addEventListener) {
	        patchMethod(obj, ADD_EVENT_LISTENER, function () { return zoneAwareAddEventListener; });
	        patchMethod(obj, REMOVE_EVENT_LISTENER, function () { return zoneAwareRemoveEventListener; });
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	exports.patchEventTargetMethods = patchEventTargetMethods;
	;
	var originalInstanceKey = exports.zoneSymbol('originalInstance');
	// wrap some native API on `window`
	function patchClass(className) {
	    var OriginalClass = _global[className];
	    if (!OriginalClass)
	        return;
	    _global[className] = function () {
	        var a = bindArguments(arguments, className);
	        switch (a.length) {
	            case 0:
	                this[originalInstanceKey] = new OriginalClass();
	                break;
	            case 1:
	                this[originalInstanceKey] = new OriginalClass(a[0]);
	                break;
	            case 2:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
	                break;
	            case 3:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
	                break;
	            case 4:
	                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
	                break;
	            default: throw new Error('Arg list too long.');
	        }
	    };
	    var instance = new OriginalClass(function () { });
	    var prop;
	    for (prop in instance) {
	        (function (prop) {
	            if (typeof instance[prop] === 'function') {
	                _global[className].prototype[prop] = function () {
	                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	                };
	            }
	            else {
	                Object.defineProperty(_global[className].prototype, prop, {
	                    set: function (fn) {
	                        if (typeof fn === 'function') {
	                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
	                        }
	                        else {
	                            this[originalInstanceKey][prop] = fn;
	                        }
	                    },
	                    get: function () {
	                        return this[originalInstanceKey][prop];
	                    }
	                });
	            }
	        }(prop));
	    }
	    for (prop in OriginalClass) {
	        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
	            _global[className][prop] = OriginalClass[prop];
	        }
	    }
	}
	exports.patchClass = patchClass;
	;
	function createNamedFn(name, delegate) {
	    try {
	        return (Function('f', "return function " + name + "(){return f(this, arguments)}"))(delegate);
	    }
	    catch (e) {
	        // if we fail, we must be CSP, just return delegate.
	        return function () {
	            return delegate(this, arguments);
	        };
	    }
	}
	exports.createNamedFn = createNamedFn;
	function patchMethod(target, name, patchFn) {
	    var proto = target;
	    while (proto && !proto.hasOwnProperty(name)) {
	        proto = Object.getPrototypeOf(proto);
	    }
	    if (!proto && target[name]) {
	        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
	        proto = target;
	    }
	    var delegateName = exports.zoneSymbol(name);
	    var delegate;
	    if (proto && !(delegate = proto[delegateName])) {
	        delegate = proto[delegateName] = proto[name];
	        proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
	    }
	    return delegate;
	}
	exports.patchMethod = patchMethod;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(3);
	/*
	 * This is necessary for Chrome and Chrome mobile, to enable
	 * things like redefining `createdCallback` on an element.
	 */
	var _defineProperty = Object.defineProperty;
	var _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var _create = Object.create;
	var unconfigurablesKey = utils_1.zoneSymbol('unconfigurables');
	function propertyPatch() {
	    Object.defineProperty = function (obj, prop, desc) {
	        if (isUnconfigurable(obj, prop)) {
	            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
	        }
	        if (prop !== 'prototype') {
	            desc = rewriteDescriptor(obj, prop, desc);
	        }
	        return _defineProperty(obj, prop, desc);
	    };
	    Object.defineProperties = function (obj, props) {
	        Object.keys(props).forEach(function (prop) {
	            Object.defineProperty(obj, prop, props[prop]);
	        });
	        return obj;
	    };
	    Object.create = function (obj, proto) {
	        if (typeof proto === 'object') {
	            Object.keys(proto).forEach(function (prop) {
	                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
	            });
	        }
	        return _create(obj, proto);
	    };
	    Object.getOwnPropertyDescriptor = function (obj, prop) {
	        var desc = _getOwnPropertyDescriptor(obj, prop);
	        if (isUnconfigurable(obj, prop)) {
	            desc.configurable = false;
	        }
	        return desc;
	    };
	}
	exports.propertyPatch = propertyPatch;
	;
	function _redefineProperty(obj, prop, desc) {
	    desc = rewriteDescriptor(obj, prop, desc);
	    return _defineProperty(obj, prop, desc);
	}
	exports._redefineProperty = _redefineProperty;
	;
	function isUnconfigurable(obj, prop) {
	    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
	}
	function rewriteDescriptor(obj, prop, desc) {
	    desc.configurable = true;
	    if (!desc.configurable) {
	        if (!obj[unconfigurablesKey]) {
	            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
	        }
	        obj[unconfigurablesKey][prop] = true;
	    }
	    return desc;
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var define_property_1 = __webpack_require__(4);
	var utils_1 = __webpack_require__(3);
	function registerElementPatch(_global) {
	    if (!utils_1.isBrowser || !('registerElement' in _global.document)) {
	        return;
	    }
	    var _registerElement = document.registerElement;
	    var callbacks = [
	        'createdCallback',
	        'attachedCallback',
	        'detachedCallback',
	        'attributeChangedCallback'
	    ];
	    document.registerElement = function (name, opts) {
	        if (opts && opts.prototype) {
	            callbacks.forEach(function (callback) {
	                var source = 'Document.registerElement::' + callback;
	                if (opts.prototype.hasOwnProperty(callback)) {
	                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
	                    if (descriptor && descriptor.value) {
	                        descriptor.value = Zone.current.wrap(descriptor.value, source);
	                        define_property_1._redefineProperty(opts.prototype, callback, descriptor);
	                    }
	                    else {
	                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                    }
	                }
	                else if (opts.prototype[callback]) {
	                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
	                }
	            });
	        }
	        return _registerElement.apply(document, [name, opts]);
	    };
	}
	exports.registerElementPatch = registerElementPatch;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var webSocketPatch = __webpack_require__(7);
	var utils_1 = __webpack_require__(3);
	var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');
	function propertyDescriptorPatch(_global) {
	    if (utils_1.isNode) {
	        return;
	    }
	    var supportsWebSocket = typeof WebSocket !== 'undefined';
	    if (canPatchViaPropertyDescriptor()) {
	        // for browsers that we can patch the descriptor:  Chrome & Firefox
	        if (utils_1.isBrowser) {
	            utils_1.patchOnProperties(HTMLElement.prototype, eventNames);
	        }
	        utils_1.patchOnProperties(XMLHttpRequest.prototype, null);
	        if (typeof IDBIndex !== 'undefined') {
	            utils_1.patchOnProperties(IDBIndex.prototype, null);
	            utils_1.patchOnProperties(IDBRequest.prototype, null);
	            utils_1.patchOnProperties(IDBOpenDBRequest.prototype, null);
	            utils_1.patchOnProperties(IDBDatabase.prototype, null);
	            utils_1.patchOnProperties(IDBTransaction.prototype, null);
	            utils_1.patchOnProperties(IDBCursor.prototype, null);
	        }
	        if (supportsWebSocket) {
	            utils_1.patchOnProperties(WebSocket.prototype, null);
	        }
	    }
	    else {
	        // Safari, Android browsers (Jelly Bean)
	        patchViaCapturingAllTheEvents();
	        utils_1.patchClass('XMLHttpRequest');
	        if (supportsWebSocket) {
	            webSocketPatch.apply(_global);
	        }
	    }
	}
	exports.propertyDescriptorPatch = propertyDescriptorPatch;
	function canPatchViaPropertyDescriptor() {
	    if (utils_1.isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick')
	        && typeof Element !== 'undefined') {
	        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
	        // IDL interface attributes are not configurable
	        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
	        if (desc && !desc.configurable)
	            return false;
	    }
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
	        get: function () {
	            return true;
	        }
	    });
	    var req = new XMLHttpRequest();
	    var result = !!req.onreadystatechange;
	    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
	    return result;
	}
	;
	var unboundKey = utils_1.zoneSymbol('unbound');
	// Whenever any eventListener fires, we check the eventListener target and all parents
	// for `onwhatever` properties and replace them with zone-bound functions
	// - Chrome (for now)
	function patchViaCapturingAllTheEvents() {
	    var _loop_1 = function(i) {
	        var property = eventNames[i];
	        var onproperty = 'on' + property;
	        document.addEventListener(property, function (event) {
	            var elt = event.target, bound, source;
	            if (elt) {
	                source = elt.constructor['name'] + '.' + onproperty;
	            }
	            else {
	                source = 'unknown.' + onproperty;
	            }
	            while (elt) {
	                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
	                    bound = Zone.current.wrap(elt[onproperty], source);
	                    bound[unboundKey] = elt[onproperty];
	                    elt[onproperty] = bound;
	                }
	                elt = elt.parentElement;
	            }
	        }, true);
	    };
	    for (var i = 0; i < eventNames.length; i++) {
	        _loop_1(i);
	    }
	    ;
	}
	;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(3);
	// we have to patch the instance since the proto is non-configurable
	function apply(_global) {
	    var WS = _global.WebSocket;
	    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
	    // On older Chrome, no need since EventTarget was already patched
	    if (!_global.EventTarget) {
	        utils_1.patchEventTargetMethods(WS.prototype);
	    }
	    _global.WebSocket = function (a, b) {
	        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
	        var proxySocket;
	        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
	        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
	        if (onmessageDesc && onmessageDesc.configurable === false) {
	            proxySocket = Object.create(socket);
	            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
	                proxySocket[propName] = function () {
	                    return socket[propName].apply(socket, arguments);
	                };
	            });
	        }
	        else {
	            // we can patch the real socket
	            proxySocket = socket;
	        }
	        utils_1.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
	        return proxySocket;
	    };
	    for (var prop in WS) {
	        _global.WebSocket[prop] = WS[prop];
	    }
	}
	exports.apply = apply;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(3);
	function patchTimer(window, setName, cancelName, nameSuffix) {
	    var setNative = null;
	    var clearNative = null;
	    setName += nameSuffix;
	    cancelName += nameSuffix;
	    function scheduleTask(task) {
	        var data = task.data;
	        data.args[0] = task.invoke;
	        data.handleId = setNative.apply(window, data.args);
	        return task;
	    }
	    function clearTask(task) {
	        return clearNative(task.data.handleId);
	    }
	    setNative = utils_1.patchMethod(window, setName, function (delegate) { return function (self, args) {
	        if (typeof args[0] === 'function') {
	            var zone = Zone.current;
	            var options = {
	                handleId: null,
	                isPeriodic: nameSuffix === 'Interval',
	                delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
	                args: args
	            };
	            return zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
	        }
	        else {
	            // cause an error by calling it directly.
	            return delegate.apply(window, args);
	        }
	    }; });
	    clearNative = utils_1.patchMethod(window, cancelName, function (delegate) { return function (self, args) {
	        var task = args[0];
	        if (task && typeof task.type === 'string') {
	            if (task.cancelFn && task.data.isPeriodic || task.runCount === 0) {
	                // Do not cancel already canceled functions
	                task.zone.cancelTask(task);
	            }
	        }
	        else {
	            // cause an error by calling it directly.
	            delegate.apply(window, args);
	        }
	    }; });
	}
	exports.patchTimer = patchTimer;


/***/ }
/******/ ]);
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    var __Metadata__ = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param targetKey (Optional) The property key to decorate.
      * @param targetDescriptor (Optional) The property descriptor for the target key
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     C = Reflect.decorate(decoratorsArray, C);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(C, "staticMethod",
      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(C.prototype, "method",
      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
      *
      */
    function decorate(decorators, target, targetKey, targetDescriptor) {
        if (!IsUndefined(targetDescriptor)) {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsObject(target)) {
                throw new TypeError();
            }
            else if (IsUndefined(targetKey)) {
                throw new TypeError();
            }
            else if (!IsObject(targetDescriptor)) {
                throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
        }
        else if (!IsUndefined(targetKey)) {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsObject(target)) {
                throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
        }
        else {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsConstructor(target)) {
                throw new TypeError();
            }
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class C {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, targetKey) {
            if (!IsUndefined(targetKey)) {
                if (!IsObject(target)) {
                    throw new TypeError();
                }
                targetKey = ToPropertyKey(targetKey);
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
            }
            else {
                if (!IsConstructor(target)) {
                    throw new TypeError();
                }
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
            }
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param targetKey (Optional) The property key for the target.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, C);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetMetadata(metadataKey, target, targetKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(C);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(C.prototype, "method");
      *
      */
    function getMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryMetadataKeys(target, targetKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(C);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryOwnMetadataKeys(target, targetKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
        if (IsUndefined(metadataMap)) {
            return false;
        }
        if (!metadataMap.delete(metadataKey)) {
            return false;
        }
        if (metadataMap.size > 0) {
            return true;
        }
        var targetMetadata = __Metadata__.get(target);
        targetMetadata.delete(targetKey);
        if (targetMetadata.size > 0) {
            return true;
        }
        __Metadata__.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated)) {
                if (!IsConstructor(decorated)) {
                    throw new TypeError();
                }
                target = decorated;
            }
        }
        return target;
    }
    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated)) {
                if (!IsObject(decorated)) {
                    throw new TypeError();
                }
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            decorator(target, propertyKey);
        }
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
    function GetOrCreateMetadataMap(target, targetKey, create) {
        var targetMetadata = __Metadata__.get(target);
        if (!targetMetadata) {
            if (!create) {
                return undefined;
            }
            targetMetadata = new _Map();
            __Metadata__.set(target, targetMetadata);
        }
        var keyMetadata = targetMetadata.get(targetKey);
        if (!keyMetadata) {
            if (!create) {
                return undefined;
            }
            keyMetadata = new _Map();
            targetMetadata.set(targetKey, keyMetadata);
        }
        return keyMetadata;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
            return true;
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        }
        return false;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
        if (metadataMap === undefined) {
            return false;
        }
        return Boolean(metadataMap.has(MetadataKey));
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        }
        return undefined;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
        if (metadataMap === undefined) {
            return undefined;
        }
        return metadataMap.get(MetadataKey);
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = GetPrototypeOf(O);
        if (parent === null) {
            return ownKeys;
        }
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) {
            return ownKeys;
        }
        if (ownKeys.length <= 0) {
            return parentKeys;
        }
        var set = new _Set();
        var keys = [];
        for (var _i = 0; _i < ownKeys.length; _i++) {
            var key = ownKeys[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0; _a < parentKeys.length; _a++) {
            var key = parentKeys[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
    function OrdinaryOwnMetadataKeys(target, targetKey) {
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
        var keys = [];
        if (metadataMap) {
            metadataMap.forEach(function (_, key) { return keys.push(key); });
        }
        return keys;
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
    function IsArray(x) {
        return Array.isArray(x);
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
    function IsConstructor(x) {
        return typeof x === "function";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
    function ToPropertyKey(value) {
        if (IsSymbol(value)) {
            return value;
        }
        return String(value);
    }
    function GetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) {
            return proto;
        }
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard. 
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype) {
            return proto;
        }
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) {
            return proto;
        }
        // if the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") {
            return proto;
        }
        // if we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O) {
            return proto;
        }
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        function Map() {
            this._keys = [];
            this._values = [];
            this._cache = cacheSentinel;
        }
        Map.prototype = {
            get size() {
                return this._keys.length;
            },
            has: function (key) {
                if (key === this._cache) {
                    return true;
                }
                if (this._find(key) >= 0) {
                    this._cache = key;
                    return true;
                }
                return false;
            },
            get: function (key) {
                var index = this._find(key);
                if (index >= 0) {
                    this._cache = key;
                    return this._values[index];
                }
                return undefined;
            },
            set: function (key, value) {
                this.delete(key);
                this._keys.push(key);
                this._values.push(value);
                this._cache = key;
                return this;
            },
            delete: function (key) {
                var index = this._find(key);
                if (index >= 0) {
                    this._keys.splice(index, 1);
                    this._values.splice(index, 1);
                    this._cache = cacheSentinel;
                    return true;
                }
                return false;
            },
            clear: function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cache = cacheSentinel;
            },
            forEach: function (callback, thisArg) {
                var size = this.size;
                for (var i = 0; i < size; ++i) {
                    var key = this._keys[i];
                    var value = this._values[i];
                    this._cache = key;
                    callback.call(this, value, key, this);
                }
            },
            _find: function (key) {
                var keys = this._keys;
                var size = keys.length;
                for (var i = 0; i < size; ++i) {
                    if (keys[i] === key) {
                        return i;
                    }
                }
                return -1;
            }
        };
        return Map;
    }
    // naive Set shim
    function CreateSetPolyfill() {
        var cacheSentinel = {};
        function Set() {
            this._map = new _Map();
        }
        Set.prototype = {
            get size() {
                return this._map.length;
            },
            has: function (value) {
                return this._map.has(value);
            },
            add: function (value) {
                this._map.set(value, value);
                return this;
            },
            delete: function (value) {
                return this._map.delete(value);
            },
            clear: function () {
                this._map.clear();
            },
            forEach: function (callback, thisArg) {
                this._map.forEach(callback, thisArg);
            }
        };
        return Set;
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
        var nodeCrypto = isNode && require("crypto");
        var hasOwn = Object.prototype.hasOwnProperty;
        var keys = {};
        var rootKey = CreateUniqueKey();
        function WeakMap() {
            this._key = CreateUniqueKey();
        }
        WeakMap.prototype = {
            has: function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                if (table) {
                    return this._key in table;
                }
                return false;
            },
            get: function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                if (table) {
                    return table[this._key];
                }
                return undefined;
            },
            set: function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            },
            delete: function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                if (table && this._key in table) {
                    return delete table[this._key];
                }
                return false;
            },
            clear: function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            }
        };
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i) {
                buffer[i] = Math.random() * 255 | 0;
            }
        }
        function GenRandomBytes(size) {
            if (nodeCrypto) {
                var data = nodeCrypto.randomBytes(size);
                return data;
            }
            else if (typeof Uint8Array === "function") {
                var data = new Uint8Array(size);
                if (typeof crypto !== "undefined") {
                    crypto.getRandomValues(data);
                }
                else if (typeof msCrypto !== "undefined") {
                    msCrypto.getRandomValues(data);
                }
                else {
                    FillRandomBytes(data, size);
                }
                return data;
            }
            else {
                var data = new Array(size);
                FillRandomBytes(data, size);
                return data;
            }
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8) {
                    result += "-";
                }
                if (byte < 16) {
                    result += "0";
                }
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
        function CreateUniqueKey() {
            var key;
            do {
                key = "@@WeakMap@@" + CreateUUID();
            } while (hasOwn.call(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create) {
                    return undefined;
                }
                Object.defineProperty(target, rootKey, { value: Object.create(null) });
            }
            return target[rootKey];
        }
        return WeakMap;
    }
    // hook global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    __global.Reflect[p] = Reflect[p];
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof window !== "undefined" ? window :
        typeof WorkerGlobalScope !== "undefined" ? self :
            typeof global !== "undefined" ? global :
                Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/**
  @license
  license
 **/
"format register";System.register("rxjs/util/root",[],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1};e.root=i[typeof self]&&self||i[typeof window]&&window;var o=(i[typeof e]&&e&&!e.nodeType&&e,i[typeof t]&&t&&!t.nodeType&&t,i[typeof r]&&r);return!o||o.global!==o&&o.window!==o||(e.root=o),r.define=s,t.exports}),System.register("rxjs/util/isFunction",[],!0,function(require,e,t){function r(e){return"function"==typeof e}var s=System.global,i=s.define;return s.define=void 0,e.isFunction=r,s.define=i,t.exports}),System.register("rxjs/util/isArray",[],!0,function(require,e,t){var r=System.global,s=r.define;return r.define=void 0,e.isArray=Array.isArray||function(e){return e&&"number"==typeof e.length},r.define=s,t.exports}),System.register("rxjs/util/isObject",[],!0,function(require,e,t){function r(e){return null!=e&&"object"==typeof e}var s=System.global,i=s.define;return s.define=void 0,e.isObject=r,s.define=i,t.exports}),System.register("rxjs/util/errorObject",[],!0,function(require,e,t){var r=System.global,s=r.define;return r.define=void 0,e.errorObject={e:{}},r.define=s,t.exports}),System.register("rxjs/util/UnsubscriptionError",[],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=function(e){function t(t){e.call(this),this.errors=t,this.name="UnsubscriptionError",this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(e,t){return t+1+") "+e.toString()}).join("\n"):""}return i(t,e),t}(Error);return e.UnsubscriptionError=o,r.define=s,t.exports}),System.register("rxjs/Observer",[],!0,function(require,e,t){var r=System.global,s=r.define;return r.define=void 0,e.empty={isUnsubscribed:!0,next:function(e){},error:function(e){throw e},complete:function(){}},r.define=s,t.exports}),System.register("rxjs/symbol/rxSubscriber",["rxjs/util/root"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/util/root"),o=i.root.Symbol;return e.$$rxSubscriber="function"==typeof o&&"function"==typeof o["for"]?o["for"]("rxSubscriber"):"@@rxSubscriber",r.define=s,t.exports}),System.register("ponyfill",[],!0,function(require,e,t){var r=System.global,s=r.define;return r.define=void 0,t.exports=function(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t},r.define=s,t.exports}),System.register("rxjs/util/ObjectUnsubscribedError",[],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=function(e){function t(){e.call(this,"object unsubscribed"),this.name="ObjectUnsubscribedError"}return i(t,e),t}(Error);return e.ObjectUnsubscribedError=o,r.define=s,t.exports}),System.register("rxjs/SubjectSubscription",["rxjs/Subscription"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subscription"),n=function(e){function t(t,r){e.call(this),this.subject=t,this.subscriber=r,this.isUnsubscribed=!1}return i(t,e),t.prototype.unsubscribe=function(){if(!this.isUnsubscribed){this.isUnsubscribed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.isUnsubscribed){var r=t.indexOf(this.subscriber);-1!==r&&t.splice(r,1)}}},t}(o.Subscription);return e.SubjectSubscription=n,r.define=s,t.exports}),System.register("rxjs/AsyncSubject",["rxjs/Subject","rxjs/Subscription"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subject"),n=require("rxjs/Subscription"),a=function(e){function t(){e.apply(this,arguments),this.value=null,this.hasNext=!1,this.hasCompleted=!1}return i(t,e),t.prototype._subscribe=function(t){return this.hasCompleted&&this.hasNext?(t.next(this.value),t.complete(),n.Subscription.EMPTY):this.hasError?(t.error(this.thrownError),n.Subscription.EMPTY):e.prototype._subscribe.call(this,t)},t.prototype.next=function(e){this.value=e,this.hasNext=!0},t.prototype.complete=function(){this.hasCompleted=!0,this.hasNext&&e.prototype.next.call(this,this.value),e.prototype.complete.call(this)},t}(o.Subject);return e.AsyncSubject=a,r.define=s,t.exports}),System.register("rxjs/observable/BoundNodeCallbackObservable",["rxjs/Observable","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/AsyncSubject"],!0,function(require,e,t){function r(e){var t=this,r=e.source,o=e.subscriber,n=r.callbackFunc,a=r.args,u=r.scheduler,p=r.subject;if(!p){p=r.subject=new b.AsyncSubject;var h=function f(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];var o=f.source,n=o.selector,a=o.subject,b=e.shift();if(b)a.error(b);else if(n){var p=c.tryCatch(n).apply(this,e);p===l.errorObject?t.add(u.schedule(i,0,{err:l.errorObject.e,subject:a})):t.add(u.schedule(s,0,{value:p,subject:a}))}else{var h=1===e.length?e[0]:e;t.add(u.schedule(s,0,{value:h,subject:a}))}};h.source=r;var d=c.tryCatch(n).apply(this,a.concat(h));d===l.errorObject&&p.error(l.errorObject.e)}t.add(p.subscribe(o))}function s(e){var t=e.value,r=e.subject;r.next(t),r.complete()}function i(e){var t=e.err,r=e.subject;r.error(t)}var o=System.global,n=o.define;o.define=void 0;var a=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},u=require("rxjs/Observable"),c=require("rxjs/util/tryCatch"),l=require("rxjs/util/errorObject"),b=require("rxjs/AsyncSubject"),p=function(e){function t(t,r,s,i){e.call(this),this.callbackFunc=t,this.selector=r,this.args=s,this.scheduler=i}return a(t,e),t.create=function(e,r,s){return void 0===r&&(r=void 0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o-0]=arguments[o];return new t(e,r,i,s)}},t.prototype._subscribe=function(e){var t=this.callbackFunc,s=this.args,i=this.scheduler,o=this.subject;if(i)return i.schedule(r,0,{source:this,subscriber:e});if(!o){o=this.subject=new b.AsyncSubject;var n=function u(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=u.source,s=r.selector,i=r.subject,o=e.shift();if(o)i.error(o);else if(s){var n=c.tryCatch(s).apply(this,e);n===l.errorObject?i.error(l.errorObject.e):(i.next(n),i.complete())}else i.next(1===e.length?e[0]:e),i.complete()};n.source=this;var a=c.tryCatch(t).apply(this,s.concat(n));a===l.errorObject&&o.error(l.errorObject.e)}return o.subscribe(e)},t}(u.Observable);return e.BoundNodeCallbackObservable=p,o.define=n,t.exports}),System.register("rxjs/util/isScheduler",[],!0,function(require,e,t){function r(e){return e&&"function"==typeof e.schedule}var s=System.global,i=s.define;return s.define=void 0,e.isScheduler=r,s.define=i,t.exports}),System.register("rxjs/observable/ScalarObservable",["rxjs/Observable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=function(e){function t(t,r){e.call(this),this.value=t,this.scheduler=r,this._isScalar=!0,r&&(this._isScalar=!1)}return i(t,e),t.create=function(e,r){return new t(e,r)},t.dispatch=function(e){var t=e.done,r=e.value,s=e.subscriber;return t?void s.complete():(s.next(r),void(s.isUnsubscribed||(e.done=!0,this.schedule(e))))},t.prototype._subscribe=function(e){var r=this.value,s=this.scheduler;return s?s.schedule(t.dispatch,0,{done:!1,value:r,subscriber:e}):(e.next(r),void(e.isUnsubscribed||e.complete()))},t}(o.Observable);return e.ScalarObservable=n,r.define=s,t.exports}),System.register("rxjs/observable/EmptyObservable",["rxjs/Observable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=function(e){function t(t){e.call(this),this.scheduler=t}return i(t,e),t.create=function(e){return new t(e)},t.dispatch=function(e){var t=e.subscriber;t.complete()},t.prototype._subscribe=function(e){var r=this.scheduler;return r?r.schedule(t.dispatch,0,{subscriber:e}):void e.complete()},t}(o.Observable);return e.EmptyObservable=n,r.define=s,t.exports}),System.register("rxjs/OuterSubscriber",["rxjs/Subscriber"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subscriber"),n=function(e){function t(){e.apply(this,arguments)}return i(t,e),t.prototype.notifyNext=function(e,t,r,s,i){this.destination.next(t)},t.prototype.notifyError=function(e,t){this.destination.error(e)},t.prototype.notifyComplete=function(e){this.destination.complete()},t}(o.Subscriber);return e.OuterSubscriber=n,r.define=s,t.exports}),System.register("rxjs/util/isPromise",[],!0,function(require,e,t){function r(e){return e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}var s=System.global,i=s.define;return s.define=void 0,e.isPromise=r,s.define=i,t.exports}),System.register("rxjs/symbol/iterator",["rxjs/util/root"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/util/root"),o=i.root.Symbol;if("function"==typeof o)o.iterator?e.$$iterator=o.iterator:"function"==typeof o["for"]&&(e.$$iterator=o["for"]("iterator"));else if(i.root.Set&&"function"==typeof(new i.root.Set)["@@iterator"])e.$$iterator="@@iterator";else if(i.root.Map)for(var n=Object.getOwnPropertyNames(i.root.Map.prototype),a=0;a<n.length;++a){var u=n[a];if("entries"!==u&&"size"!==u&&i.root.Map.prototype[u]===i.root.Map.prototype.entries){e.$$iterator=u;break}}else e.$$iterator="@@iterator";return r.define=s,t.exports}),System.register("rxjs/InnerSubscriber",["rxjs/Subscriber"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subscriber"),n=function(e){function t(t,r,s){e.call(this),this.parent=t,this.outerValue=r,this.outerIndex=s,this.index=0}return i(t,e),t.prototype._next=function(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)},t.prototype._error=function(e){this.parent.notifyError(e,this),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},t}(o.Subscriber);return e.InnerSubscriber=n,r.define=s,t.exports}),System.register("rxjs/operator/mergeAll",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return void 0===e&&(e=Number.POSITIVE_INFINITY),this.lift(new u(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.mergeAll=r;var u=function(){function e(e){this.concurrent=e}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.concurrent))},e}();e.MergeAllOperator=u;var c=function(e){function t(t,r){e.call(this,t),this.concurrent=r,this.hasCompleted=!1,this.buffer=[],this.active=0}return o(t,e),t.prototype._next=function(e){this.active<this.concurrent?(this.active++,this.add(a.subscribeToResult(this,e))):this.buffer.push(e)},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete()},t.prototype.notifyComplete=function(e){var t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},t}(n.OuterSubscriber);return e.MergeAllSubscriber=c,s.define=i,t.exports}),System.register("rxjs/observable/DeferObservable",["rxjs/Observable","rxjs/util/subscribeToResult","rxjs/OuterSubscriber"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/util/subscribeToResult"),a=require("rxjs/OuterSubscriber"),u=function(e){function t(t){e.call(this),this.observableFactory=t}return i(t,e),t.create=function(e){return new t(e)},t.prototype._subscribe=function(e){return new c(e,this.observableFactory)},t}(o.Observable);e.DeferObservable=u;var c=function(e){function t(t,r){e.call(this,t),this.factory=r,this.tryDefer()}return i(t,e),t.prototype.tryDefer=function(){try{this._callFactory()}catch(e){this._error(e)}},t.prototype._callFactory=function(){var e=this.factory();e&&this.add(n.subscribeToResult(this,e))},t}(a.OuterSubscriber);return r.define=s,t.exports}),System.register("rxjs/observable/empty",["rxjs/observable/EmptyObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/EmptyObservable");return e.empty=i.EmptyObservable.create,r.define=s,t.exports}),System.register("rxjs/observable/ForkJoinObservable",["rxjs/Observable","rxjs/observable/EmptyObservable","rxjs/util/isArray","rxjs/util/subscribeToResult","rxjs/OuterSubscriber"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/observable/EmptyObservable"),a=require("rxjs/util/isArray"),u=require("rxjs/util/subscribeToResult"),c=require("rxjs/OuterSubscriber"),l=function(e){function t(t,r){e.call(this),this.sources=t,this.resultSelector=r}return i(t,e),t.create=function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];if(null===e||0===arguments.length)return new n.EmptyObservable;var s=null;return"function"==typeof e[e.length-1]&&(s=e.pop()),1===e.length&&a.isArray(e[0])&&(e=e[0]),0===e.length?new n.EmptyObservable:new t(e,s)},t.prototype._subscribe=function(e){return new b(e,this.sources,this.resultSelector)},t}(o.Observable);e.ForkJoinObservable=l;var b=function(e){function t(t,r,s){e.call(this,t),this.sources=r,this.resultSelector=s,this.completed=0,this.haveValues=0;var i=r.length;this.total=i,this.values=new Array(i);for(var o=0;i>o;o++){var n=r[o],a=u.subscribeToResult(this,n,null,o);a&&(a.outerIndex=o,this.add(a))}}return i(t,e),t.prototype.notifyNext=function(e,t,r,s,i){this.values[r]=t,i._hasValue||(i._hasValue=!0,this.haveValues++)},t.prototype.notifyComplete=function(e){var t=this.destination,r=this,s=r.haveValues,i=r.resultSelector,o=r.values,n=o.length;if(!e._hasValue)return void t.complete();if(this.completed++,this.completed===n){if(s===n){var a=i?i.apply(this,o):o;t.next(a)}t.complete()}},t}(c.OuterSubscriber);return r.define=s,t.exports}),System.register("rxjs/observable/PromiseObservable",["rxjs/util/root","rxjs/Observable"],!0,function(require,e,t){function r(e){var t=e.value,r=e.subscriber;r.isUnsubscribed||(r.next(t),r.complete())}function s(e){var t=e.err,r=e.subscriber;r.isUnsubscribed||r.error(t)}var i=System.global,o=i.define;i.define=void 0;var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},a=require("rxjs/util/root"),u=require("rxjs/Observable"),c=function(e){function t(t,r){void 0===r&&(r=null),e.call(this),this.promise=t,this.scheduler=r}return n(t,e),t.create=function(e,r){return void 0===r&&(r=null),new t(e,r)},t.prototype._subscribe=function(e){var t=this,i=this.promise,o=this.scheduler;if(null==o)this._isScalar?e.isUnsubscribed||(e.next(this.value),e.complete()):i.then(function(r){t.value=r,t._isScalar=!0,e.isUnsubscribed||(e.next(r),e.complete())},function(t){e.isUnsubscribed||e.error(t)}).then(null,function(e){a.root.setTimeout(function(){throw e})});else if(this._isScalar){if(!e.isUnsubscribed)return o.schedule(r,0,{value:this.value,subscriber:e})}else i.then(function(s){t.value=s,t._isScalar=!0,e.isUnsubscribed||e.add(o.schedule(r,0,{value:s,subscriber:e}))},function(t){e.isUnsubscribed||e.add(o.schedule(s,0,{err:t,subscriber:e}))}).then(null,function(e){a.root.setTimeout(function(){throw e})})},t}(u.Observable);return e.PromiseObservable=c,i.define=o,t.exports}),System.register("rxjs/observable/IteratorObservable",["rxjs/util/root","rxjs/util/isObject","rxjs/util/tryCatch","rxjs/Observable","rxjs/util/isFunction","rxjs/symbol/iterator","rxjs/util/errorObject"],!0,function(require,e,t){function r(e){var t=e[d.$$iterator];if(!t&&"string"==typeof e)return new x(e);if(!t&&void 0!==e.length)return new y(e);if(!t)throw new TypeError("Object is not iterable");return e[d.$$iterator]()}function s(e){var t=+e.length;return isNaN(t)?0:0!==t&&i(t)?(t=o(t)*Math.floor(Math.abs(t)),0>=t?0:t>j?j:t):t}function i(e){return"number"==typeof e&&c.root.isFinite(e)}function o(e){var t=+e;return 0===t?t:isNaN(t)?t:0>t?-1:1}var n=System.global,a=n.define;n.define=void 0;var u=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},c=require("rxjs/util/root"),l=require("rxjs/util/isObject"),b=require("rxjs/util/tryCatch"),p=require("rxjs/Observable"),h=require("rxjs/util/isFunction"),d=require("rxjs/symbol/iterator"),f=require("rxjs/util/errorObject"),v=function(e){function t(t,s,i,o){if(e.call(this),null==t)throw new Error("iterator cannot be null.");if(l.isObject(s))this.thisArg=s,this.scheduler=i;else if(h.isFunction(s))this.project=s,this.thisArg=i,this.scheduler=o;else if(null!=s)throw new Error("When provided, `project` must be a function.");this.iterator=r(t)}return u(t,e),t.create=function(e,r,s,i){return new t(e,r,s,i)},t.dispatch=function(e){var t=e.index,r=e.hasError,s=e.thisArg,i=e.project,o=e.iterator,n=e.subscriber;if(r)return void n.error(e.error);var a=o.next();return a.done?void n.complete():(i?(a=b.tryCatch(i).call(s,a.value,t),a===f.errorObject?(e.error=f.errorObject.e,e.hasError=!0):(n.next(a),e.index=t+1)):(n.next(a.value),e.index=t+1),void(n.isUnsubscribed||this.schedule(e)))},t.prototype._subscribe=function(e){var r=0,s=this,i=s.iterator,o=s.project,n=s.thisArg,a=s.scheduler;if(a)return a.schedule(t.dispatch,0,{index:r,thisArg:n,project:o,iterator:i,subscriber:e});for(;;){var u=i.next();if(u.done){e.complete();break}if(o){if(u=b.tryCatch(o).call(n,u.value,r++),u===f.errorObject){e.error(f.errorObject.e);break}e.next(u)}else e.next(u.value);if(e.isUnsubscribed)break}},t}(p.Observable);e.IteratorObservable=v;var x=function(){function e(e,t,r){void 0===t&&(t=0),void 0===r&&(r=e.length),this.str=e,this.idx=t,this.len=r}return e.prototype[d.$$iterator]=function(){return this},e.prototype.next=function(){return this.idx<this.len?{done:!1,value:this.str.charAt(this.idx++)}:{done:!0,value:void 0}},e}(),y=function(){function e(e,t,r){void 0===t&&(t=0),void 0===r&&(r=s(e)),this.arr=e,this.idx=t,this.len=r}return e.prototype[d.$$iterator]=function(){return this},e.prototype.next=function(){return this.idx<this.len?{done:!1,value:this.arr[this.idx++]}:{done:!0,value:void 0}},e}(),j=Math.pow(2,53)-1;return n.define=a,t.exports}),System.register("rxjs/observable/ArrayLikeObservable",["rxjs/Observable","rxjs/observable/ScalarObservable","rxjs/observable/EmptyObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/observable/ScalarObservable"),a=require("rxjs/observable/EmptyObservable"),u=function(e){function t(t,r,s,i){e.call(this),this.arrayLike=t,this.scheduler=i,r||i||1!==t.length||(this._isScalar=!0,this.value=t[0]),r&&(this.mapFn=r.bind(s))}return i(t,e),t.create=function(e,r,s,i){var o=e.length;return 0===o?new a.EmptyObservable:1!==o||r?new t(e,r,s,i):new n.ScalarObservable(e[0],i)},t.dispatch=function(e){var t=e.arrayLike,r=e.index,s=e.length,i=e.mapFn,o=e.subscriber;if(!o.isUnsubscribed){if(r>=s)return void o.complete();var n=i?i(t[r],r):t[r];o.next(n),e.index=r+1,this.schedule(e)}},t.prototype._subscribe=function(e){var r=0,s=this,i=s.arrayLike,o=s.mapFn,n=s.scheduler,a=i.length;if(n)return n.schedule(t.dispatch,0,{arrayLike:i,index:r,length:a,mapFn:o,subscriber:e});for(var u=0;a>u&&!e.isUnsubscribed;u++){var c=o?o(i[u],u):i[u];e.next(c)}e.complete()},t}(o.Observable);return e.ArrayLikeObservable=u,r.define=s,t.exports}),System.register("rxjs/Notification",["rxjs/Observable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=function(){function e(e,t,r){this.kind=e,this.value=t,this.exception=r,this.hasValue="N"===e}return e.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.exception);case"C":return e.complete&&e.complete()}},e.prototype["do"]=function(e,t,r){var s=this.kind;switch(s){case"N":return e&&e(this.value);case"E":return t&&t(this.exception);case"C":return r&&r()}},e.prototype.accept=function(e,t,r){return e&&"function"==typeof e.next?this.observe(e):this["do"](e,t,r)},e.prototype.toObservable=function(){var e=this.kind;switch(e){case"N":return i.Observable.of(this.value);case"E":return i.Observable["throw"](this.exception);case"C":return i.Observable.empty()}},e.createNext=function(t){return"undefined"!=typeof t?new e("N",t):this.undefinedValueNotification},e.createError=function(t){return new e("E",void 0,t)},e.createComplete=function(){return this.completeNotification},e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e}();return e.Notification=o,r.define=s,t.exports}),System.register("rxjs/observable/FromEventObservable",["rxjs/Observable","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/Subscription"],!0,function(require,e,t){function r(e){return!!e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}function s(e){return!!e&&"function"==typeof e.on&&"function"==typeof e.off}function i(e){return!!e&&"[object NodeList]"===e.toString()}function o(e){return!!e&&"[object HTMLCollection]"===e.toString()}function n(e){return!!e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}var a=System.global,u=a.define;a.define=void 0;var c=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},l=require("rxjs/Observable"),b=require("rxjs/util/tryCatch"),p=require("rxjs/util/errorObject"),h=require("rxjs/Subscription"),d=function(e){function t(t,r,s){e.call(this),this.sourceObj=t,this.eventName=r,this.selector=s}return c(t,e),t.create=function(e,r,s){return new t(e,r,s)},t.setupSubscription=function(e,a,u,c){var l;if(i(e)||o(e))for(var b=0,p=e.length;p>b;b++)t.setupSubscription(e[b],a,u,c);else if(n(e)){var d=e;e.addEventListener(a,u),l=function(){return d.removeEventListener(a,u)}}else if(s(e)){var f=e;e.on(a,u),l=function(){return f.off(a,u)}}else if(r(e)){var v=e;e.addListener(a,u),l=function(){return v.removeListener(a,u)}}c.add(new h.Subscription(l))},t.prototype._subscribe=function(e){var r=this.sourceObj,s=this.eventName,i=this.selector,o=i?function(){for(var t=[],r=0;r<arguments.length;r++)t[r-0]=arguments[r];var s=b.tryCatch(i).apply(void 0,t);s===p.errorObject?e.error(p.errorObject.e):e.next(s)}:function(t){return e.next(t)};t.setupSubscription(r,s,o,e)},t}(l.Observable);return e.FromEventObservable=d,a.define=u,t.exports}),System.register("rxjs/observable/FromEventPatternObservable",["rxjs/Observable","rxjs/Subscription"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/Subscription"),a=function(e){function t(t,r,s){e.call(this),this.addHandler=t,this.removeHandler=r,this.selector=s}return i(t,e),t.create=function(e,r,s){return new t(e,r,s)},t.prototype._subscribe=function(e){var t=this,r=this.removeHandler,s=this.selector?function(){for(var r=[],s=0;s<arguments.length;s++)r[s-0]=arguments[s];t._callSelector(e,r)}:function(t){e.next(t)};this._callAddHandler(s,e),e.add(new n.Subscription(function(){r(s)}))},t.prototype._callSelector=function(e,t){try{var r=this.selector.apply(this,t);e.next(r)}catch(s){e.error(s)}},t.prototype._callAddHandler=function(e,t){try{this.addHandler(e)}catch(r){t.error(r)}},t}(o.Observable);return e.FromEventPatternObservable=a,r.define=s,t.exports}),System.register("rxjs/observable/fromPromise",["rxjs/observable/PromiseObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/PromiseObservable");return e.fromPromise=i.PromiseObservable.create,r.define=s,t.exports}),System.register("rxjs/observable/GenerateObservable",["rxjs/Observable","rxjs/util/isScheduler"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/util/isScheduler"),a=function(e){return e},u=function(e){function t(t,r,s,i,o){e.call(this),this.initialState=t,this.condition=r,this.iterate=s,this.resultSelector=i,this.scheduler=o}return i(t,e),t.create=function(e,r,s,i,o){return 1==arguments.length?new t(e.initialState,e.condition,e.iterate,e.resultSelector||a,e.scheduler):void 0===i||n.isScheduler(i)?new t(e,r,s,a,i):new t(e,r,s,i,o)},t.prototype._subscribe=function(e){var r=this.initialState;if(this.scheduler)return this.scheduler.schedule(t.dispatch,0,{subscriber:e,iterate:this.iterate,condition:this.condition,resultSelector:this.resultSelector,state:r});for(var s=this,i=s.condition,o=s.resultSelector,n=s.iterate;;){if(i){var a=void 0;try{a=i(r)}catch(u){return void e.error(u)}if(!a){e.complete();break}}var c=void 0;try{c=o(r)}catch(u){return void e.error(u)}if(e.next(c),e.isUnsubscribed)break;try{r=n(r)}catch(u){return void e.error(u)}}},t.dispatch=function(e){var t=e.subscriber,r=e.condition;if(!t.isUnsubscribed){if(e.needIterate)try{e.state=e.iterate(e.state)}catch(s){return void t.error(s)}else e.needIterate=!0;if(r){var i=void 0;try{i=r(e.state)}catch(s){return void t.error(s)}if(!i)return void t.complete();if(t.isUnsubscribed)return}var o;try{o=e.resultSelector(e.state)}catch(s){return void t.error(s)}if(!t.isUnsubscribed&&(t.next(o),!t.isUnsubscribed))return this.schedule(e)}},t}(o.Observable);return e.GenerateObservable=u,r.define=s,t.exports}),System.register("rxjs/observable/IfObservable",["rxjs/Observable","rxjs/util/subscribeToResult","rxjs/OuterSubscriber"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/util/subscribeToResult"),a=require("rxjs/OuterSubscriber"),u=function(e){function t(t,r,s){e.call(this),this.condition=t,this.thenSource=r,this.elseSource=s}return i(t,e),t.create=function(e,r,s){return new t(e,r,s)},t.prototype._subscribe=function(e){var t=this,r=t.condition,s=t.thenSource,i=t.elseSource;return new c(e,r,s,i)},t}(o.Observable);e.IfObservable=u;var c=function(e){function t(t,r,s,i){e.call(this,t),this.condition=r,this.thenSource=s,this.elseSource=i,this.tryIf()}return i(t,e),t.prototype.tryIf=function(){var e,t=this,r=t.condition,s=t.thenSource,i=t.elseSource;try{e=r();var o=e?s:i;o?this.add(n.subscribeToResult(this,o)):this._complete()}catch(a){this._error(a)}},t}(a.OuterSubscriber);return r.define=s,t.exports}),System.register("rxjs/util/isNumeric",["rxjs/util/isArray"],!0,function(require,e,t){function r(e){return!o.isArray(e)&&e-parseFloat(e)+1>=0}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/util/isArray");return e.isNumeric=r,s.define=i,t.exports}),System.register("rxjs/scheduler/FutureAction",["rxjs/util/root","rxjs/Subscription"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/util/root"),n=require("rxjs/Subscription"),a=function(e){function t(t,r){e.call(this),this.scheduler=t,this.work=r,this.pending=!1}return i(t,e),t.prototype.execute=function(){if(this.isUnsubscribed)this.error=new Error("executing a cancelled action");else try{this.work(this.state)}catch(e){this.unsubscribe(),this.error=e}},t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this.isUnsubscribed?this:this._schedule(e,t)},t.prototype._schedule=function(e,t){var r=this;void 0===t&&(t=0),this.state=e,this.pending=!0;var s=this.id;return null!=s&&this.delay===t?this:(this.delay=t,null!=s&&(this.id=null,o.root.clearInterval(s)),this.id=o.root.setInterval(function(){r.pending=!1;var e=r,t=e.id,s=e.scheduler;s.actions.push(r),s.flush(),r.pending===!1&&null!=t&&(r.id=null,o.root.clearInterval(t))},t),this)},t.prototype._unsubscribe=function(){this.pending=!1;var e=this,t=e.id,r=e.scheduler,s=r.actions,i=s.indexOf(this);null!=t&&(this.id=null,o.root.clearInterval(t)),-1!==i&&s.splice(i,1),this.work=null,this.state=null,this.scheduler=null},t}(n.Subscription);return e.FutureAction=a,r.define=s,t.exports}),System.register("rxjs/scheduler/QueueAction",["rxjs/scheduler/FutureAction"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/scheduler/FutureAction"),n=function(e){function t(){e.apply(this,arguments)}return i(t,e),t.prototype._schedule=function(t,r){if(void 0===r&&(r=0),r>0)return e.prototype._schedule.call(this,t,r);this.delay=r,this.state=t;var s=this.scheduler;return s.actions.push(this),s.flush(),this},t}(o.FutureAction);return e.QueueAction=n,r.define=s,t.exports}),System.register("rxjs/operator/merge",["rxjs/observable/ArrayObservable","rxjs/operator/mergeAll","rxjs/util/isScheduler"],!0,function(require,e,t){
function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return e.unshift(this),s.apply(this,e)}function s(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=Number.POSITIVE_INFINITY,s=null,i=e[e.length-1];return u.isScheduler(i)?(s=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(r=e.pop())):"number"==typeof i&&(r=e.pop()),1===e.length?e[0]:new n.ArrayObservable(e,s).lift(new a.MergeAllOperator(r))}var i=System.global,o=i.define;i.define=void 0;var n=require("rxjs/observable/ArrayObservable"),a=require("rxjs/operator/mergeAll"),u=require("rxjs/util/isScheduler");return e.merge=r,e.mergeStatic=s,i.define=o,t.exports}),System.register("rxjs/operator/race",["rxjs/util/isArray","rxjs/observable/ArrayObservable","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return 1===e.length&&a.isArray(e[0])&&(e=e[0]),e.unshift(this),s.apply(this,e)}function s(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];if(1===e.length){if(!a.isArray(e[0]))return e[0];e=e[0]}return new u.ArrayObservable(e).lift(new b)}var i=System.global,o=i.define;i.define=void 0;var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},a=require("rxjs/util/isArray"),u=require("rxjs/observable/ArrayObservable"),c=require("rxjs/OuterSubscriber"),l=require("rxjs/util/subscribeToResult");e.race=r,e.raceStatic=s;var b=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new p(e))},e}();e.RaceOperator=b;var p=function(e){function t(t){e.call(this,t),this.hasFirst=!1,this.observables=[],this.subscriptions=[]}return n(t,e),t.prototype._next=function(e){this.observables.push(e)},t.prototype._complete=function(){var e=this.observables,t=e.length;if(0===t)this.destination.complete();else{for(var r=0;t>r;r++){var s=e[r],i=l.subscribeToResult(this,s,s,r);this.subscriptions&&(this.subscriptions.push(i),this.add(i))}this.observables=null}},t.prototype.notifyNext=function(e,t,r,s,i){if(!this.hasFirst){this.hasFirst=!0;for(var o=0;o<this.subscriptions.length;o++)if(o!==r){var n=this.subscriptions[o];n.unsubscribe(),this.remove(n)}this.subscriptions=null}this.destination.next(t)},t}(c.OuterSubscriber);return e.RaceSubscriber=p,i.define=o,t.exports}),System.register("rxjs/util/noop",[],!0,function(require,e,t){function r(){}var s=System.global,i=s.define;return s.define=void 0,e.noop=r,s.define=i,t.exports}),System.register("rxjs/observable/of",["rxjs/observable/ArrayObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/ArrayObservable");return e.of=i.ArrayObservable.of,r.define=s,t.exports}),System.register("rxjs/operator/onErrorResumeNext",["rxjs/observable/FromObservable","rxjs/util/isArray","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return 1===e.length&&u.isArray(e[0])&&(e=e[0]),this.lift(new b(e))}function s(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=null;return 1===e.length&&u.isArray(e[0])&&(e=e[0]),r=e.shift(),new a.FromObservable(r,null).lift(new b(e))}var i=System.global,o=i.define;i.define=void 0;var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},a=require("rxjs/observable/FromObservable"),u=require("rxjs/util/isArray"),c=require("rxjs/OuterSubscriber"),l=require("rxjs/util/subscribeToResult");e.onErrorResumeNext=r,e.onErrorResumeNextStatic=s;var b=function(){function e(e){this.nextSources=e}return e.prototype.call=function(e,t){return t._subscribe(new p(e,this.nextSources))},e}(),p=function(e){function t(t,r){e.call(this,t),this.destination=t,this.nextSources=r}return n(t,e),t.prototype.notifyError=function(e,t){this.subscribeToNextSource()},t.prototype.notifyComplete=function(e){this.subscribeToNextSource()},t.prototype._error=function(e){this.subscribeToNextSource()},t.prototype._complete=function(){this.subscribeToNextSource()},t.prototype.subscribeToNextSource=function(){var e=this.nextSources.shift();e?this.add(l.subscribeToResult(this,e)):this.destination.complete()},t}(c.OuterSubscriber);return i.define=o,t.exports}),System.register("rxjs/observable/RangeObservable",["rxjs/Observable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=function(e){function t(t,r,s){e.call(this),this.start=t,this._count=r,this.scheduler=s}return i(t,e),t.create=function(e,r,s){return void 0===e&&(e=0),void 0===r&&(r=0),new t(e,r,s)},t.dispatch=function(e){var t=e.start,r=e.index,s=e.count,i=e.subscriber;return r>=s?void i.complete():(i.next(t),void(i.isUnsubscribed||(e.index=r+1,e.start=t+1,this.schedule(e))))},t.prototype._subscribe=function(e){var r=0,s=this.start,i=this._count,o=this.scheduler;if(o)return o.schedule(t.dispatch,0,{index:r,count:i,start:s,subscriber:e});for(;;){if(r++>=i){e.complete();break}if(e.next(s++),e.isUnsubscribed)break}},t}(o.Observable);return e.RangeObservable=n,r.define=s,t.exports}),System.register("rxjs/observable/UsingObservable",["rxjs/Observable","rxjs/util/subscribeToResult","rxjs/OuterSubscriber"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/util/subscribeToResult"),a=require("rxjs/OuterSubscriber"),u=function(e){function t(t,r){e.call(this),this.resourceFactory=t,this.observableFactory=r}return i(t,e),t.create=function(e,r){return new t(e,r)},t.prototype._subscribe=function(e){var t,r=this,s=r.resourceFactory,i=r.observableFactory;try{return t=s(),new c(e,t,i)}catch(o){e.error(o)}},t}(o.Observable);e.UsingObservable=u;var c=function(e){function t(t,r,s){e.call(this,t),this.resource=r,this.observableFactory=s,t.add(r),this.tryUse()}return i(t,e),t.prototype.tryUse=function(){try{var e=this.observableFactory.call(this,this.resource);e&&this.add(n.subscribeToResult(this,e))}catch(t){this._error(t)}},t}(a.OuterSubscriber);return r.define=s,t.exports}),System.register("rxjs/observable/ErrorObservable",["rxjs/Observable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=function(e){function t(t,r){e.call(this),this.error=t,this.scheduler=r}return i(t,e),t.create=function(e,r){return new t(e,r)},t.dispatch=function(e){var t=e.error,r=e.subscriber;r.error(t)},t.prototype._subscribe=function(e){var r=this.error,s=this.scheduler;return s?s.schedule(t.dispatch,0,{error:r,subscriber:e}):void e.error(r)},t}(o.Observable);return e.ErrorObservable=n,r.define=s,t.exports}),System.register("rxjs/util/isDate",[],!0,function(require,e,t){function r(e){return e instanceof Date&&!isNaN(+e)}var s=System.global,i=s.define;return s.define=void 0,e.isDate=r,s.define=i,t.exports}),System.register("rxjs/operator/zip",["rxjs/observable/ArrayObservable","rxjs/util/isArray","rxjs/Subscriber","rxjs/OuterSubscriber","rxjs/util/subscribeToResult","rxjs/symbol/iterator"],!0,function(require,e,t){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return e.unshift(this),s.apply(this,e)}function s(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=e[e.length-1];return"function"==typeof r&&e.pop(),new a.ArrayObservable(e).lift(new h(r))}var i=System.global,o=i.define;i.define=void 0;var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},a=require("rxjs/observable/ArrayObservable"),u=require("rxjs/util/isArray"),c=require("rxjs/Subscriber"),l=require("rxjs/OuterSubscriber"),b=require("rxjs/util/subscribeToResult"),p=require("rxjs/symbol/iterator");e.zipProto=r,e.zipStatic=s;var h=function(){function e(e){this.project=e}return e.prototype.call=function(e,t){return t._subscribe(new d(e,this.project))},e}();e.ZipOperator=h;var d=function(e){function t(t,r,s){void 0===s&&(s=Object.create(null)),e.call(this,t),this.index=0,this.iterators=[],this.active=0,this.project="function"==typeof r?r:null,this.values=s}return n(t,e),t.prototype._next=function(e){var t=this.iterators,r=this.index++;u.isArray(e)?t.push(new v(e)):"function"==typeof e[p.$$iterator]?t.push(new f(e[p.$$iterator]())):t.push(new x(this.destination,this,e,r))},t.prototype._complete=function(){var e=this.iterators,t=e.length;this.active=t;for(var r=0;t>r;r++){var s=e[r];s.stillUnsubscribed?this.add(s.subscribe(s,r)):this.active--}},t.prototype.notifyInactive=function(){this.active--,0===this.active&&this.destination.complete()},t.prototype.checkIterators=function(){for(var e=this.iterators,t=e.length,r=this.destination,s=0;t>s;s++){var i=e[s];if("function"==typeof i.hasValue&&!i.hasValue())return}for(var o=!1,n=[],s=0;t>s;s++){var i=e[s],a=i.next();if(i.hasCompleted()&&(o=!0),a.done)return void r.complete();n.push(a.value)}this.project?this._tryProject(n):r.next(n),o&&r.complete()},t.prototype._tryProject=function(e){var t;try{t=this.project.apply(this,e)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(c.Subscriber);e.ZipSubscriber=d;var f=function(){function e(e){this.iterator=e,this.nextResult=e.next()}return e.prototype.hasValue=function(){return!0},e.prototype.next=function(){var e=this.nextResult;return this.nextResult=this.iterator.next(),e},e.prototype.hasCompleted=function(){var e=this.nextResult;return e&&e.done},e}(),v=function(){function e(e){this.array=e,this.index=0,this.length=0,this.length=e.length}return e.prototype[p.$$iterator]=function(){return this},e.prototype.next=function(e){var t=this.index++,r=this.array;return t<this.length?{value:r[t],done:!1}:{value:null,done:!0}},e.prototype.hasValue=function(){return this.array.length>this.index},e.prototype.hasCompleted=function(){return this.array.length===this.index},e}(),x=function(e){function t(t,r,s,i){e.call(this,t),this.parent=r,this.observable=s,this.index=i,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}return n(t,e),t.prototype[p.$$iterator]=function(){return this},t.prototype.next=function(){var e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}},t.prototype.hasValue=function(){return this.buffer.length>0},t.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},t.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},t.prototype.notifyNext=function(e,t,r,s,i){this.buffer.push(t),this.parent.checkIterators()},t.prototype.subscribe=function(e,t){return b.subscribeToResult(this,this.observable,this,t)},t}(l.OuterSubscriber);return i.define=o,t.exports}),System.register("rxjs/observable/dom/AjaxObservable",["rxjs/util/root","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/Observable","rxjs/Subscriber"],!0,function(require,e,t){function r(){var e=new p.root.XMLHttpRequest;if(this.crossDomain){if("withCredentials"in e)return e.withCredentials=!0,e;if(p.root.XDomainRequest)return new p.root.XDomainRequest;throw new Error("CORS is not supported by your browser")}return e}function s(e){return e.response}function i(e,t,r){return void 0===t&&(t=s),void 0===r&&(r=null),new x({method:"GET",url:e,resultSelector:t,headers:r})}function o(e,t,r){return new x({method:"POST",url:e,body:t,headers:r})}function n(e,t){return new x({method:"DELETE",url:e,headers:t})}function a(e,t,r){return new x({method:"PUT",url:e,body:t,headers:r})}function u(e,t,r){var s=t?function(e){return t(e.response)}:function(e){return e.response};return new x({method:"GET",url:e,responseType:"json",resultSelector:s,headers:r})}var c=System.global,l=c.define;c.define=void 0;var b=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},p=require("rxjs/util/root"),h=require("rxjs/util/tryCatch"),d=require("rxjs/util/errorObject"),f=require("rxjs/Observable"),v=require("rxjs/Subscriber");e.ajaxGet=i,e.ajaxPost=o,e.ajaxDelete=n,e.ajaxPut=a,e.ajaxGetJSON=u;var x=function(e){function t(t){e.call(this);var s={async:!0,createXHR:r,crossDomain:!1,headers:{},method:"GET",responseType:"json",timeout:0};if("string"==typeof t)s.url=t;else for(var i in t)t.hasOwnProperty(i)&&(s[i]=t[i]);this.request=s}return b(t,e),t._create_stub=function(){return null},t.prototype._subscribe=function(e){return new y(e,this.request)},t.create=function(){var e=function(e){return new t(e)};return e.get=i,e.post=o,e["delete"]=n,e.put=a,e.getJSON=u,e}(),t}(f.Observable);e.AjaxObservable=x;var y=function(e){function t(t,r){e.call(this,t),this.request=r,this.done=!1;var s=r.headers=r.headers||{};r.crossDomain||s["X-Requested-With"]||(s["X-Requested-With"]="XMLHttpRequest"),"Content-Type"in s||(s["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"),r.body=this.serializeBody(r.body,r.headers["Content-Type"]),this.resultSelector=r.resultSelector,this.send()}return b(t,e),t.prototype.next=function(e){this.done=!0;var t=this,r=t.resultSelector,s=t.xhr,i=t.request,o=t.destination,n=new j(e,s,i);if(r){var a=h.tryCatch(r)(n);a===d.errorObject?this.error(d.errorObject.e):o.next(a)}else o.next(n)},t.prototype.send=function(){var e=this,t=e.request,r=e.request,s=r.user,i=r.method,o=r.url,n=r.async,a=r.password,u=r.headers,c=r.body,l=t.createXHR,b=h.tryCatch(l).call(t);if(b===d.errorObject)this.error(d.errorObject.e);else{this.xhr=b;var p=void 0;if(p=s?h.tryCatch(b.open).call(b,i,o,n,s,a):h.tryCatch(b.open).call(b,i,o,n),p===d.errorObject)return void this.error(d.errorObject.e);b.timeout=t.timeout,b.responseType=t.responseType,this.setHeaders(b,u),this.setupEvents(b,t),c?b.send(c):b.send()}},t.prototype.serializeBody=function(e,t){if(!e||"string"==typeof e)return e;if(p.root.FormData&&e instanceof p.root.FormData)return e;var r=t.indexOf(";");switch(-1!==r&&(t=t.substring(0,r)),t){case"application/x-www-form-urlencoded":return Object.keys(e).map(function(t){return encodeURI(t)+"="+encodeURI(e[t])}).join("&");case"application/json":return JSON.stringify(e)}},t.prototype.setHeaders=function(e,t){for(var r in t)t.hasOwnProperty(r)&&e.setRequestHeader(r,t[r])},t.prototype.setupEvents=function(e,t){var r=t.progressSubscriber;e.ontimeout=function s(e){var t=s,r=t.subscriber,i=t.progressSubscriber,o=t.request;i&&i.error(e),r.error(new S(this,o))},e.ontimeout.request=t,e.ontimeout.subscriber=this,e.ontimeout.progressSubscriber=r,e.upload&&"withCredentials"in e&&p.root.XDomainRequest&&(r&&(e.onprogress=function i(e){var t=i.progressSubscriber;t.next(e)},e.onprogress.progressSubscriber=r),e.onerror=function o(e){var t=o,r=t.progressSubscriber,s=t.subscriber,i=t.request;r&&r.error(e),s.error(new m("ajax error",this,i))},e.onerror.request=t,e.onerror.subscriber=this,e.onerror.progressSubscriber=r),e.onreadystatechange=function n(e){var t=n,r=t.subscriber,s=t.progressSubscriber,i=t.request;if(4===this.readyState){var o=1223===this.status?204:this.status,a="text"===this.responseType?this.response||this.responseText:this.response;0===o&&(o=a?200:0),o>=200&&300>o?(s&&s.complete(),r.next(e),r.complete()):(s&&s.error(e),r.error(new m("ajax error "+o,this,i)))}},e.onreadystatechange.subscriber=this,e.onreadystatechange.progressSubscriber=r,e.onreadystatechange.request=t},t.prototype.unsubscribe=function(){var t=this,r=t.done,s=t.xhr;!r&&s&&4!==s.readyState&&s.abort(),e.prototype.unsubscribe.call(this)},t}(v.Subscriber);e.AjaxSubscriber=y;var j=function(){function e(e,t,r){switch(this.originalEvent=e,this.xhr=t,this.request=r,this.status=t.status,this.responseType=t.responseType||r.responseType,this.responseType){case"json":"response"in t?this.response=t.responseType?t.response:JSON.parse(t.response||t.responseText||""):this.response=JSON.parse(t.responseText||"");break;case"xml":this.response=t.responseXML;break;case"text":default:this.response="response"in t?t.response:t.responseText}}return e}();e.AjaxResponse=j;var m=function(e){function t(t,r,s){e.call(this,t),this.message=t,this.xhr=r,this.request=s,this.status=r.status}return b(t,e),t}(Error);e.AjaxError=m;var S=function(e){function t(t,r){e.call(this,"ajax timeout",t,r)}return b(t,e),t}(m);return e.AjaxTimeoutError=S,c.define=l,t.exports}),System.register("rxjs/scheduler/queue",["rxjs/scheduler/QueueScheduler"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/scheduler/QueueScheduler");return e.queue=new i.QueueScheduler,r.define=s,t.exports}),System.register("rxjs/util/assign",["rxjs/util/root"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/util/root"),o=i.root.Object;return"function"!=typeof o.assign&&!function(){o.assign=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(void 0===e||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var s=o(e),i=t.length,n=0;i>n;n++){var a=t[n];if(void 0!==a&&null!==a)for(var u in a)a.hasOwnProperty(u)&&(s[u]=a[u])}return s}}(),e.assign=o.assign,r.define=s,t.exports}),System.register("rxjs/operator/buffer",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new u(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.buffer=r;var u=function(){function e(e){this.closingNotifier=e}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.closingNotifier))},e}(),c=function(e){function t(t,r){e.call(this,t),this.buffer=[],this.add(a.subscribeToResult(this,r))}return o(t,e),t.prototype._next=function(e){this.buffer.push(e)},t.prototype.notifyNext=function(e,t,r,s,i){var o=this.buffer;this.buffer=[],this.destination.next(o)},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/bufferCount",["rxjs/Subscriber"],!0,function(require,e,t){function r(e,t){return void 0===t&&(t=null),this.lift(new a(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.bufferCount=r;var a=function(){function e(e,t){this.bufferSize=e,this.startBufferEvery=t}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.bufferSize,this.startBufferEvery))},e}(),u=function(e){function t(t,r,s){e.call(this,t),this.bufferSize=r,this.startBufferEvery=s,this.buffers=[[]],this.count=0}return o(t,e),t.prototype._next=function(e){var t=this.count+=1,r=this.destination,s=this.bufferSize,i=null==this.startBufferEvery?s:this.startBufferEvery,o=this.buffers,n=o.length,a=-1;t%i===0&&o.push([]);for(var u=0;n>u;u++){var c=o[u];c.push(e),c.length===s&&(a=u,r.next(c))}-1!==a&&o.splice(a,1)},t.prototype._complete=function(){for(var t=this.destination,r=this.buffers;r.length>0;){var s=r.shift();s.length>0&&t.next(s)}e.prototype._complete.call(this)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/bufferTime",["rxjs/Subscriber","rxjs/scheduler/async","rxjs/util/isScheduler"],!0,function(require,e,t){function r(e){var t=arguments.length,r=l.async;b.isScheduler(arguments[arguments.length-1])&&(r=arguments[arguments.length-1],t--);var s=null;t>=2&&(s=arguments[1]);var i=Number.POSITIVE_INFINITY;return t>=3&&(i=arguments[2]),this.lift(new p(e,s,i,r))}function s(e){var t=e.subscriber,r=e.context;r&&t.closeContext(r),e.context=t.openContext(),t.isUnsubscribed||(e.context.closeAction=this.schedule(e,e.bufferTimeSpan))}function i(e){var t=e.bufferCreationInterval,r=e.bufferTimeSpan,s=e.subscriber,i=e.scheduler,n=s.openContext(),a=this;s.isUnsubscribed||(s.add(n.closeAction=i.schedule(o,r,{subscriber:s,context:n})),a.schedule(e,t))}function o(e){var t=e.subscriber,r=e.context;t.closeContext(r)}var n=System.global,a=n.define;n.define=void 0;var u=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},c=require("rxjs/Subscriber"),l=require("rxjs/scheduler/async"),b=require("rxjs/util/isScheduler");e.bufferTime=r;var p=function(){function e(e,t,r,s){this.bufferTimeSpan=e,this.bufferCreationInterval=t,this.maxBufferSize=r,this.scheduler=s}return e.prototype.call=function(e,t){return t._subscribe(new d(e,this.bufferTimeSpan,this.bufferCreationInterval,this.maxBufferSize,this.scheduler))},e}(),h=function(){function e(){this.buffer=[]}return e}(),d=function(e){function t(t,r,n,a,u){e.call(this,t),this.bufferTimeSpan=r,this.bufferCreationInterval=n,this.maxBufferSize=a,this.scheduler=u,this.contexts=[];var c=this.openContext();if(this.timespanOnly=null==n||0>n,this.timespanOnly){var l={subscriber:this,context:c,bufferTimeSpan:r};this.add(c.closeAction=u.schedule(s,r,l))}else{var b={subscriber:this,context:c},p={bufferTimeSpan:r,bufferCreationInterval:n,subscriber:this,scheduler:u};this.add(c.closeAction=u.schedule(o,r,b)),this.add(u.schedule(i,n,p))}}return u(t,e),t.prototype._next=function(e){for(var t,r=this.contexts,s=r.length,i=0;s>i;i++){var o=r[i],n=o.buffer;n.push(e),n.length==this.maxBufferSize&&(t=o)}t&&this.onBufferFull(t)},t.prototype._error=function(t){this.contexts.length=0,e.prototype._error.call(this,t)},t.prototype._complete=function(){for(var t=this,r=t.contexts,s=t.destination;r.length>0;){var i=r.shift();s.next(i.buffer)}e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){this.contexts=null},t.prototype.onBufferFull=function(e){this.closeContext(e);var t=e.closeAction;if(t.unsubscribe(),this.remove(t),this.timespanOnly){e=this.openContext();var r=this.bufferTimeSpan,i={subscriber:this,context:e,bufferTimeSpan:r};this.add(e.closeAction=this.scheduler.schedule(s,r,i))}},t.prototype.openContext=function(){var e=new h;return this.contexts.push(e),e},t.prototype.closeContext=function(e){this.destination.next(e.buffer);var t=this.contexts;t.splice(t.indexOf(e),1)},t}(c.Subscriber);return n.define=a,t.exports}),System.register("rxjs/operator/bufferToggle",["rxjs/Subscription","rxjs/util/subscribeToResult","rxjs/OuterSubscriber"],!0,function(require,e,t){function r(e,t){return this.lift(new c(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscription"),a=require("rxjs/util/subscribeToResult"),u=require("rxjs/OuterSubscriber");e.bufferToggle=r;var c=function(){function e(e,t){this.openings=e,this.closingSelector=t}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.openings,this.closingSelector))},e}(),l=function(e){function t(t,r,s){e.call(this,t),this.openings=r,this.closingSelector=s,this.contexts=[],this.add(a.subscribeToResult(this,r))}return o(t,e),t.prototype._next=function(e){for(var t=this.contexts,r=t.length,s=0;r>s;s++)t[s].buffer.push(e)},t.prototype._error=function(t){for(var r=this.contexts;r.length>0;){var s=r.shift();s.subscription.unsubscribe(),s.buffer=null,s.subscription=null}this.contexts=null,e.prototype._error.call(this,t)},t.prototype._complete=function(){for(var t=this.contexts;t.length>0;){var r=t.shift();this.destination.next(r.buffer),r.subscription.unsubscribe(),r.buffer=null,r.subscription=null}this.contexts=null,e.prototype._complete.call(this)},t.prototype.notifyNext=function(e,t,r,s,i){e?this.closeBuffer(e):this.openBuffer(t)},t.prototype.notifyComplete=function(e){this.closeBuffer(e.context)},t.prototype.openBuffer=function(e){try{var t=this.closingSelector,r=t.call(this,e);r&&this.trySubscribe(r)}catch(s){this._error(s)}},t.prototype.closeBuffer=function(e){var t=this.contexts;if(t&&e){var r=e.buffer,s=e.subscription;this.destination.next(r),t.splice(t.indexOf(e),1),this.remove(s),s.unsubscribe()}},t.prototype.trySubscribe=function(e){var t=this.contexts,r=[],s=new n.Subscription,i={buffer:r,subscription:s};t.push(i);var o=a.subscribeToResult(this,e,i);!o||o.isUnsubscribed?this.closeBuffer(i):(o.context=i,this.add(o),s.add(o))},t}(u.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/bufferWhen",["rxjs/Subscription","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new b(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscription"),a=require("rxjs/util/tryCatch"),u=require("rxjs/util/errorObject"),c=require("rxjs/OuterSubscriber"),l=require("rxjs/util/subscribeToResult");e.bufferWhen=r;var b=function(){function e(e){this.closingSelector=e}return e.prototype.call=function(e,t){return t._subscribe(new p(e,this.closingSelector))},e}(),p=function(e){function t(t,r){e.call(this,t),this.closingSelector=r,this.subscribing=!1,this.openBuffer()}return o(t,e),t.prototype._next=function(e){this.buffer.push(e)},t.prototype._complete=function(){var t=this.buffer;t&&this.destination.next(t),e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){this.buffer=null,this.subscribing=!1},t.prototype.notifyNext=function(e,t,r,s,i){this.openBuffer()},t.prototype.notifyComplete=function(){this.subscribing?this.complete():this.openBuffer()},t.prototype.openBuffer=function(){var e=this.closingSubscription;e&&(this.remove(e),e.unsubscribe());var t=this.buffer;this.buffer&&this.destination.next(t),this.buffer=[];var r=a.tryCatch(this.closingSelector)();r===u.errorObject?this.error(u.errorObject.e):(e=new n.Subscription,this.closingSubscription=e,this.add(e),this.subscribing=!0,e.add(l.subscribeToResult(this,r)),this.subscribing=!1)},t}(c.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/cache",["rxjs/Observable","rxjs/ReplaySubject"],!0,function(require,e,t){function r(e,t,r){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===t&&(t=Number.POSITIVE_INFINITY);var s,i,a=this,u=0,c=function(){return s=new n.ReplaySubject(e,t,r)};return new o.Observable(function(e){s||(s=c(),i=a.subscribe(function(e){return s.next(e)},function(e){var t=s;s=null,t.error(e)},function(){return s.complete()})),u++,s||(s=c());var t=s.subscribe(e);return function(){u--,t&&t.unsubscribe(),0===u&&i.unsubscribe()}})}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/Observable"),n=require("rxjs/ReplaySubject");return e.cache=r,s.define=i,t.exports}),System.register("rxjs/operator/catch",["rxjs/Subscriber"],!0,function(require,e,t){function r(e){var t=new a(e),r=this.lift(t);return t.caught=r}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e._catch=r;var a=function(){function e(e){this.selector=e}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.selector,this.caught))},e}(),u=function(e){function t(t,r,s){e.call(this,t),this.selector=r,this.caught=s}return o(t,e),t.prototype.error=function(e){if(!this.isStopped){var t=void 0;try{t=this.selector(e,this.caught)}catch(e){return void this.destination.error(e)}this._innerSub(t)}},t.prototype._innerSub=function(e){this.unsubscribe(),this.destination.remove(this),e.subscribe(this.destination)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/combineAll",["rxjs/operator/combineLatest"],!0,function(require,e,t){function r(e){return this.lift(new o.CombineLatestOperator(e))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/combineLatest");return e.combineAll=r,s.define=i,t.exports}),System.register("rxjs/add/operator/combineLatest",["rxjs/Observable","rxjs/operator/combineLatest"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/combineLatest");return i.Observable.prototype.combineLatest=o.combineLatest,r.define=s,t.exports}),System.register("rxjs/add/operator/concat",["rxjs/Observable","rxjs/operator/concat"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/concat");return i.Observable.prototype.concat=o.concat,r.define=s,t.exports}),System.register("rxjs/operator/concatAll",["rxjs/operator/mergeAll"],!0,function(require,e,t){function r(){return this.lift(new o.MergeAllOperator(1))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/mergeAll");return e.concatAll=r,s.define=i,t.exports}),System.register("rxjs/operator/mergeMap",["rxjs/util/subscribeToResult","rxjs/OuterSubscriber"],!0,function(require,e,t){function r(e,t,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"number"==typeof t&&(r=t,t=null),this.lift(new u(e,t,r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/util/subscribeToResult"),a=require("rxjs/OuterSubscriber");e.mergeMap=r;var u=function(){function e(e,t,r){void 0===r&&(r=Number.POSITIVE_INFINITY),this.project=e,this.resultSelector=t,this.concurrent=r}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.project,this.resultSelector,this.concurrent))},e}();e.MergeMapOperator=u;var c=function(e){function t(t,r,s,i){void 0===i&&(i=Number.POSITIVE_INFINITY),e.call(this,t),this.project=r,this.resultSelector=s,this.concurrent=i,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}return o(t,e),t.prototype._next=function(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)},t.prototype._tryNext=function(e){var t,r=this.index++;try{t=this.project(e,r)}catch(s){return void this.destination.error(s)}this.active++,this._innerSub(t,e,r)},t.prototype._innerSub=function(e,t,r){this.add(n.subscribeToResult(this,e,t,r))},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete()},t.prototype.notifyNext=function(e,t,r,s,i){this.resultSelector?this._notifyResultSelector(e,t,r,s):this.destination.next(t)},t.prototype._notifyResultSelector=function(e,t,r,s){var i;try{i=this.resultSelector(e,t,r,s)}catch(o){return void this.destination.error(o)}this.destination.next(i)},t.prototype.notifyComplete=function(e){var t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete();
},t}(a.OuterSubscriber);return e.MergeMapSubscriber=c,s.define=i,t.exports}),System.register("rxjs/operator/mergeMapTo",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e,t,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"number"==typeof t&&(r=t,t=null),this.lift(new u(e,t,r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.mergeMapTo=r;var u=function(){function e(e,t,r){void 0===r&&(r=Number.POSITIVE_INFINITY),this.ish=e,this.resultSelector=t,this.concurrent=r}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.ish,this.resultSelector,this.concurrent))},e}();e.MergeMapToOperator=u;var c=function(e){function t(t,r,s,i){void 0===i&&(i=Number.POSITIVE_INFINITY),e.call(this,t),this.ish=r,this.resultSelector=s,this.concurrent=i,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}return o(t,e),t.prototype._next=function(e){if(this.active<this.concurrent){var t=this.resultSelector,r=this.index++,s=this.ish,i=this.destination;this.active++,this._innerSub(s,i,t,e,r)}else this.buffer.push(e)},t.prototype._innerSub=function(e,t,r,s,i){this.add(a.subscribeToResult(this,e,s,i))},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete()},t.prototype.notifyNext=function(e,t,r,s,i){var o=this,n=o.resultSelector,a=o.destination;n?this.trySelectResult(e,t,r,s):a.next(t)},t.prototype.trySelectResult=function(e,t,r,s){var i,o=this,n=o.resultSelector,a=o.destination;try{i=n(e,t,r,s)}catch(u){return void a.error(u)}a.next(i)},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(e){var t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},t}(n.OuterSubscriber);return e.MergeMapToSubscriber=c,s.define=i,t.exports}),System.register("rxjs/operator/count",["rxjs/Subscriber"],!0,function(require,e,t){function r(e){return this.lift(new a(e,this))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.count=r;var a=function(){function e(e,t){this.predicate=e,this.source=t}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.predicate,this.source))},e}(),u=function(e){function t(t,r,s){e.call(this,t),this.predicate=r,this.source=s,this.count=0,this.index=0}return o(t,e),t.prototype._next=function(e){this.predicate?this._tryPredicate(e):this.count++},t.prototype._tryPredicate=function(e){var t;try{t=this.predicate(e,this.index++,this.source)}catch(r){return void this.destination.error(r)}t&&this.count++},t.prototype._complete=function(){this.destination.next(this.count),this.destination.complete()},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/dematerialize",["rxjs/Subscriber"],!0,function(require,e,t){function r(){return this.lift(new a)}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.dematerialize=r;var a=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new u(e))},e}(),u=function(e){function t(t){e.call(this,t)}return o(t,e),t.prototype._next=function(e){e.observe(this.destination)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/debounce",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new u(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.debounce=r;var u=function(){function e(e){this.durationSelector=e}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.durationSelector))},e}(),c=function(e){function t(t,r){e.call(this,t),this.durationSelector=r,this.hasValue=!1,this.durationSubscription=null}return o(t,e),t.prototype._next=function(e){try{var t=this.durationSelector.call(this,e);t&&this._tryNext(e,t)}catch(r){this.destination.error(r)}},t.prototype._complete=function(){this.emitValue(),this.destination.complete()},t.prototype._tryNext=function(e,t){var r=this.durationSubscription;this.value=e,this.hasValue=!0,r&&(r.unsubscribe(),this.remove(r)),r=a.subscribeToResult(this,t),r.isUnsubscribed||this.add(this.durationSubscription=r)},t.prototype.notifyNext=function(e,t,r,s,i){this.emitValue()},t.prototype.notifyComplete=function(){this.emitValue()},t.prototype.emitValue=function(){if(this.hasValue){var t=this.value,r=this.durationSubscription;r&&(this.durationSubscription=null,r.unsubscribe(),this.remove(r)),this.value=null,this.hasValue=!1,e.prototype._next.call(this,t)}},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/debounceTime",["rxjs/Subscriber","rxjs/scheduler/async"],!0,function(require,e,t){function r(e,t){return void 0===t&&(t=u.async),this.lift(new c(e,t))}function s(e){e.debouncedNext()}var i=System.global,o=i.define;i.define=void 0;var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},a=require("rxjs/Subscriber"),u=require("rxjs/scheduler/async");e.debounceTime=r;var c=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.dueTime,this.scheduler))},e}(),l=function(e){function t(t,r,s){e.call(this,t),this.dueTime=r,this.scheduler=s,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}return n(t,e),t.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(s,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){this.clearDebounce(),this.hasValue&&(this.destination.next(this.lastValue),this.lastValue=null,this.hasValue=!1)},t.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},t}(a.Subscriber);return i.define=o,t.exports}),System.register("rxjs/operator/defaultIfEmpty",["rxjs/Subscriber"],!0,function(require,e,t){function r(e){return void 0===e&&(e=null),this.lift(new a(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.defaultIfEmpty=r;var a=function(){function e(e){this.defaultValue=e}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.defaultValue))},e}(),u=function(e){function t(t,r){e.call(this,t),this.defaultValue=r,this.isEmpty=!0}return o(t,e),t.prototype._next=function(e){this.isEmpty=!1,this.destination.next(e)},t.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/delay",["rxjs/scheduler/async","rxjs/util/isDate","rxjs/Subscriber","rxjs/Notification"],!0,function(require,e,t){function r(e,t){void 0===t&&(t=n.async);var r=a.isDate(e),s=r?+e-t.now():Math.abs(e);return this.lift(new l(s,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/scheduler/async"),a=require("rxjs/util/isDate"),u=require("rxjs/Subscriber"),c=require("rxjs/Notification");e.delay=r;var l=function(){function e(e,t){this.delay=e,this.scheduler=t}return e.prototype.call=function(e,t){return t._subscribe(new b(e,this.delay,this.scheduler))},e}(),b=function(e){function t(t,r,s){e.call(this,t),this.delay=r,this.scheduler=s,this.queue=[],this.active=!1,this.errored=!1}return o(t,e),t.dispatch=function(e){for(var t=e.source,r=t.queue,s=e.scheduler,i=e.destination;r.length>0&&r[0].time-s.now()<=0;)r.shift().notification.observe(i);if(r.length>0){var o=Math.max(0,r[0].time-s.now());this.schedule(e,o)}else t.active=!1},t.prototype._schedule=function(e){this.active=!0,this.add(e.schedule(t.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))},t.prototype.scheduleNotification=function(e){if(this.errored!==!0){var t=this.scheduler,r=new p(t.now()+this.delay,e);this.queue.push(r),this.active===!1&&this._schedule(t)}},t.prototype._next=function(e){this.scheduleNotification(c.Notification.createNext(e))},t.prototype._error=function(e){this.errored=!0,this.queue=[],this.destination.error(e)},t.prototype._complete=function(){this.scheduleNotification(c.Notification.createComplete())},t}(u.Subscriber),p=function(){function e(e,t){this.time=e,this.notification=t}return e}();return s.define=i,t.exports}),System.register("rxjs/operator/delayWhen",["rxjs/Subscriber","rxjs/Observable","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e,t){return t?new p(this,t).lift(new l(e)):this.lift(new l(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/Observable"),u=require("rxjs/OuterSubscriber"),c=require("rxjs/util/subscribeToResult");e.delayWhen=r;var l=function(){function e(e){this.delayDurationSelector=e}return e.prototype.call=function(e,t){return t._subscribe(new b(e,this.delayDurationSelector))},e}(),b=function(e){function t(t,r){e.call(this,t),this.delayDurationSelector=r,this.completed=!1,this.delayNotifierSubscriptions=[],this.values=[]}return o(t,e),t.prototype.notifyNext=function(e,t,r,s,i){this.destination.next(e),this.removeSubscription(i),this.tryComplete()},t.prototype.notifyError=function(e,t){this._error(e)},t.prototype.notifyComplete=function(e){var t=this.removeSubscription(e);t&&this.destination.next(t),this.tryComplete()},t.prototype._next=function(e){try{var t=this.delayDurationSelector(e);t&&this.tryDelay(t,e)}catch(r){this.destination.error(r)}},t.prototype._complete=function(){this.completed=!0,this.tryComplete()},t.prototype.removeSubscription=function(e){e.unsubscribe();var t=this.delayNotifierSubscriptions.indexOf(e),r=null;return-1!==t&&(r=this.values[t],this.delayNotifierSubscriptions.splice(t,1),this.values.splice(t,1)),r},t.prototype.tryDelay=function(e,t){var r=c.subscribeToResult(this,e,t);this.add(r),this.delayNotifierSubscriptions.push(r),this.values.push(t)},t.prototype.tryComplete=function(){this.completed&&0===this.delayNotifierSubscriptions.length&&this.destination.complete()},t}(u.OuterSubscriber),p=function(e){function t(t,r){e.call(this),this.source=t,this.subscriptionDelay=r}return o(t,e),t.prototype._subscribe=function(e){this.subscriptionDelay.subscribe(new h(e,this.source))},t}(a.Observable),h=function(e){function t(t,r){e.call(this),this.parent=t,this.source=r,this.sourceSubscribed=!1}return o(t,e),t.prototype._next=function(e){this.subscribeToSource()},t.prototype._error=function(e){this.unsubscribe(),this.parent.error(e)},t.prototype._complete=function(){this.subscribeToSource()},t.prototype.subscribeToSource=function(){this.sourceSubscribed||(this.sourceSubscribed=!0,this.unsubscribe(),this.source.subscribe(this.parent))},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/distinct",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e,t){return this.lift(new u(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.distinct=r;var u=function(){function e(e,t){this.compare=e,this.flushes=t}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.compare,this.flushes))},e}(),c=function(e){function t(t,r,s){e.call(this,t),this.values=[],"function"==typeof r&&(this.compare=r),s&&this.add(a.subscribeToResult(this,s))}return o(t,e),t.prototype.notifyNext=function(e,t,r,s,i){this.values.length=0},t.prototype.notifyError=function(e,t){this._error(e)},t.prototype._next=function(e){var t=!1,r=this.values,s=r.length;try{for(var i=0;s>i;i++)if(this.compare(r[i],e))return void(t=!0)}catch(o){return void this.destination.error(o)}this.values.push(e),this.destination.next(e)},t.prototype.compare=function(e,t){return e===t},t}(n.OuterSubscriber);return e.DistinctSubscriber=c,s.define=i,t.exports}),System.register("rxjs/operator/distinctKey",["rxjs/operator/distinct"],!0,function(require,e,t){function r(e,t,r){return o.distinct.call(this,function(r,s){return t?t(r[e],s[e]):r[e]===s[e]},r)}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/distinct");return e.distinctKey=r,s.define=i,t.exports}),System.register("rxjs/operator/distinctUntilChanged",["rxjs/Subscriber","rxjs/util/tryCatch","rxjs/util/errorObject"],!0,function(require,e,t){function r(e,t){return this.lift(new c(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/util/tryCatch"),u=require("rxjs/util/errorObject");e.distinctUntilChanged=r;var c=function(){function e(e,t){this.compare=e,this.keySelector=t}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.compare,this.keySelector))},e}(),l=function(e){function t(t,r,s){e.call(this,t),this.keySelector=s,this.hasKey=!1,"function"==typeof r&&(this.compare=r)}return o(t,e),t.prototype.compare=function(e,t){return e===t},t.prototype._next=function(e){var t=this.keySelector,r=e;if(t&&(r=a.tryCatch(this.keySelector)(e),r===u.errorObject))return this.destination.error(u.errorObject.e);var s=!1;if(this.hasKey){if(s=a.tryCatch(this.compare)(this.key,r),s===u.errorObject)return this.destination.error(u.errorObject.e)}else this.hasKey=!0;Boolean(s)===!1&&(this.key=r,this.destination.next(e))},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/distinctUntilKeyChanged",["rxjs/operator/distinctUntilChanged"],!0,function(require,e,t){function r(e,t){return o.distinctUntilChanged.call(this,function(r,s){return t?t(r[e],s[e]):r[e]===s[e]})}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/distinctUntilChanged");return e.distinctUntilKeyChanged=r,s.define=i,t.exports}),System.register("rxjs/operator/do",["rxjs/Subscriber"],!0,function(require,e,t){function r(e,t,r){return this.lift(new a(e,t,r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e._do=r;var a=function(){function e(e,t,r){this.nextOrObserver=e,this.error=t,this.complete=r}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.nextOrObserver,this.error,this.complete))},e}(),u=function(e){function t(t,r,s,i){e.call(this,t);var o=new n.Subscriber(r,s,i);o.syncErrorThrowable=!0,this.add(o),this.safeSubscriber=o}return o(t,e),t.prototype._next=function(e){var t=this.safeSubscriber;t.next(e),t.syncErrorThrown?this.destination.error(t.syncErrorValue):this.destination.next(e)},t.prototype._error=function(e){var t=this.safeSubscriber;t.error(e),t.syncErrorThrown?this.destination.error(t.syncErrorValue):this.destination.error(e)},t.prototype._complete=function(){var e=this.safeSubscriber;e.complete(),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.complete()},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/exhaust",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(){return this.lift(new u)}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.exhaust=r;var u=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new c(e))},e}(),c=function(e){function t(t){e.call(this,t),this.hasCompleted=!1,this.hasSubscription=!1}return o(t,e),t.prototype._next=function(e){this.hasSubscription||(this.hasSubscription=!0,this.add(a.subscribeToResult(this,e)))},t.prototype._complete=function(){this.hasCompleted=!0,this.hasSubscription||this.destination.complete()},t.prototype.notifyComplete=function(e){this.remove(e),this.hasSubscription=!1,this.hasCompleted&&this.destination.complete()},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/exhaustMap",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e,t){return this.lift(new u(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.exhaustMap=r;var u=function(){function e(e,t){this.project=e,this.resultSelector=t}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.project,this.resultSelector))},e}(),c=function(e){function t(t,r,s){e.call(this,t),this.project=r,this.resultSelector=s,this.hasSubscription=!1,this.hasCompleted=!1,this.index=0}return o(t,e),t.prototype._next=function(e){this.hasSubscription||this.tryNext(e)},t.prototype.tryNext=function(e){var t=this.index++,r=this.destination;try{var s=this.project(e,t);this.hasSubscription=!0,this.add(a.subscribeToResult(this,s,e,t))}catch(i){r.error(i)}},t.prototype._complete=function(){this.hasCompleted=!0,this.hasSubscription||this.destination.complete()},t.prototype.notifyNext=function(e,t,r,s,i){var o=this,n=o.resultSelector,a=o.destination;n?this.trySelectResult(e,t,r,s):a.next(t)},t.prototype.trySelectResult=function(e,t,r,s){var i=this,o=i.resultSelector,n=i.destination;try{var a=o(e,t,r,s);n.next(a)}catch(u){n.error(u)}},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(e){this.remove(e),this.hasSubscription=!1,this.hasCompleted&&this.destination.complete()},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/expand",["rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e,t,r){return void 0===t&&(t=Number.POSITIVE_INFINITY),void 0===r&&(r=void 0),t=1>(t||0)?Number.POSITIVE_INFINITY:t,this.lift(new l(e,t,r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/util/tryCatch"),a=require("rxjs/util/errorObject"),u=require("rxjs/OuterSubscriber"),c=require("rxjs/util/subscribeToResult");e.expand=r;var l=function(){function e(e,t,r){this.project=e,this.concurrent=t,this.scheduler=r}return e.prototype.call=function(e,t){return t._subscribe(new b(e,this.project,this.concurrent,this.scheduler))},e}();e.ExpandOperator=l;var b=function(e){function t(t,r,s,i){e.call(this,t),this.project=r,this.concurrent=s,this.scheduler=i,this.index=0,this.active=0,this.hasCompleted=!1,s<Number.POSITIVE_INFINITY&&(this.buffer=[])}return o(t,e),t.dispatch=function(e){var t=e.subscriber,r=e.result,s=e.value,i=e.index;t.subscribeToProjection(r,s,i)},t.prototype._next=function(e){var r=this.destination;if(r.isUnsubscribed)return void this._complete();var s=this.index++;if(this.active<this.concurrent){r.next(e);var i=n.tryCatch(this.project)(e,s);if(i===a.errorObject)r.error(a.errorObject.e);else if(this.scheduler){var o={subscriber:this,result:i,value:e,index:s};this.add(this.scheduler.schedule(t.dispatch,0,o))}else this.subscribeToProjection(i,e,s)}else this.buffer.push(e)},t.prototype.subscribeToProjection=function(e,t,r){this.active++,this.add(c.subscribeToResult(this,e,t,r))},t.prototype._complete=function(){this.hasCompleted=!0,this.hasCompleted&&0===this.active&&this.destination.complete()},t.prototype.notifyNext=function(e,t,r,s,i){this._next(t)},t.prototype.notifyComplete=function(e){var t=this.buffer;this.remove(e),this.active--,t&&t.length>0&&this._next(t.shift()),this.hasCompleted&&0===this.active&&this.destination.complete()},t}(u.OuterSubscriber);return e.ExpandSubscriber=b,s.define=i,t.exports}),System.register("rxjs/util/ArgumentOutOfRangeError",[],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=function(e){function t(){e.call(this,"argument out of range"),this.name="ArgumentOutOfRangeError"}return i(t,e),t}(Error);return e.ArgumentOutOfRangeError=o,r.define=s,t.exports}),System.register("rxjs/operator/filter",["rxjs/Subscriber"],!0,function(require,e,t){function r(e,t){return this.lift(new a(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.filter=r;var a=function(){function e(e,t){this.predicate=e,this.thisArg=t}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.predicate,this.thisArg))},e}(),u=function(e){function t(t,r,s){e.call(this,t),this.predicate=r,this.thisArg=s,this.count=0,this.predicate=r}return o(t,e),t.prototype._next=function(e){var t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(r){return void this.destination.error(r)}t&&this.destination.next(e)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/finally",["rxjs/Subscriber","rxjs/Subscription"],!0,function(require,e,t){function r(e){return this.lift(new u(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/Subscription");e._finally=r;var u=function(){function e(e){this.callback=e}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.callback))},e}(),c=function(e){function t(t,r){e.call(this,t),this.add(new a.Subscription(r))}return o(t,e),t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/find",["rxjs/Subscriber"],!0,function(require,e,t){function r(e,t){if("function"!=typeof e)throw new TypeError("predicate is not a function");return this.lift(new a(e,this,!1,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.find=r;var a=function(){function e(e,t,r,s){this.predicate=e,this.source=t,this.yieldIndex=r,this.thisArg=s}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.predicate,this.source,this.yieldIndex,this.thisArg))},e}();e.FindValueOperator=a;var u=function(e){function t(t,r,s,i,o){e.call(this,t),this.predicate=r,this.source=s,this.yieldIndex=i,this.thisArg=o,this.index=0}return o(t,e),t.prototype.notifyComplete=function(e){var t=this.destination;t.next(e),t.complete()},t.prototype._next=function(e){var t=this,r=t.predicate,s=t.thisArg,i=this.index++;try{var o=r.call(s||this,e,i,this.source);o&&this.notifyComplete(this.yieldIndex?i:e)}catch(n){this.destination.error(n)}},t.prototype._complete=function(){this.notifyComplete(this.yieldIndex?-1:void 0)},t}(n.Subscriber);return e.FindValueSubscriber=u,s.define=i,t.exports}),System.register("rxjs/operator/findIndex",["rxjs/operator/find"],!0,function(require,e,t){function r(e,t){return this.lift(new o.FindValueOperator(e,this,!0,t))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/find");return e.findIndex=r,s.define=i,t.exports}),System.register("rxjs/util/EmptyError",[],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=function(e){function t(){e.call(this,"no elements in sequence"),this.name="EmptyError"}return i(t,e),t}(Error);return e.EmptyError=o,r.define=s,t.exports}),System.register("rxjs/util/MapPolyfill",[],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=function(){function e(){this.size=0,this._values=[],this._keys=[]}return e.prototype.get=function(e){var t=this._keys.indexOf(e);return-1===t?void 0:this._values[t]},e.prototype.set=function(e,t){var r=this._keys.indexOf(e);return-1===r?(this._keys.push(e),this._values.push(t),this.size++):this._values[r]=t,this},e.prototype["delete"]=function(e){var t=this._keys.indexOf(e);return-1===t?!1:(this._values.splice(t,1),this._keys.splice(t,1),this.size--,!0)},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this.size=0},e.prototype.forEach=function(e,t){for(var r=0;r<this.size;r++)e.call(t,this._values[r],this._keys[r])},e}();return e.MapPolyfill=i,r.define=s,t.exports}),System.register("rxjs/util/FastMap",[],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=function(){function e(){this.values={}}return e.prototype["delete"]=function(e){return this.values[e]=null,!0},e.prototype.set=function(e,t){return this.values[e]=t,this},e.prototype.get=function(e){return this.values[e]},e.prototype.forEach=function(e,t){var r=this.values;for(var s in r)r.hasOwnProperty(s)&&null!==r[s]&&e.call(t,r[s],s)},e.prototype.clear=function(){this.values={}},e}();return e.FastMap=i,r.define=s,t.exports}),System.register("rxjs/operator/ignoreElements",["rxjs/Subscriber","rxjs/util/noop"],!0,function(require,e,t){function r(){return this.lift(new u)}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/util/noop");e.ignoreElements=r;var u=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new c(e))},e}(),c=function(e){function t(){e.apply(this,arguments)}return o(t,e),t.prototype._next=function(e){a.noop()},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/isEmpty",["rxjs/Subscriber"],!0,function(require,e,t){function r(){return this.lift(new a)}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.isEmpty=r;var a=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new u(e))},e}(),u=function(e){function t(t){e.call(this,t)}return o(t,e),t.prototype.notifyComplete=function(e){var t=this.destination;t.next(e),t.complete()},t.prototype._next=function(e){this.notifyComplete(!1)},t.prototype._complete=function(){this.notifyComplete(!0)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/audit",["rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new l(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/util/tryCatch"),a=require("rxjs/util/errorObject"),u=require("rxjs/OuterSubscriber"),c=require("rxjs/util/subscribeToResult");e.audit=r;var l=function(){function e(e){this.durationSelector=e}return e.prototype.call=function(e,t){return t._subscribe(new b(e,this.durationSelector))},e}(),b=function(e){function t(t,r){e.call(this,t),this.durationSelector=r,this.hasValue=!1}return o(t,e),t.prototype._next=function(e){if(this.value=e,this.hasValue=!0,!this.throttled){var t=n.tryCatch(this.durationSelector)(e);t===a.errorObject?this.destination.error(a.errorObject.e):this.add(this.throttled=c.subscribeToResult(this,t))}},t.prototype.clearThrottle=function(){var e=this,t=e.value,r=e.hasValue,s=e.throttled;s&&(this.remove(s),this.throttled=null,s.unsubscribe()),r&&(this.value=null,this.hasValue=!1,this.destination.next(t))},t.prototype.notifyNext=function(e,t,r,s){this.clearThrottle()},t.prototype.notifyComplete=function(){this.clearThrottle()},t}(u.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/auditTime",["rxjs/scheduler/async","rxjs/Subscriber"],!0,function(require,e,t){function r(e,t){return void 0===t&&(t=a.async),this.lift(new c(e,t))}function s(e){e.clearThrottle()}var i=System.global,o=i.define;i.define=void 0;var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},a=require("rxjs/scheduler/async"),u=require("rxjs/Subscriber");e.auditTime=r;var c=function(){function e(e,t){this.duration=e,this.scheduler=t}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.duration,this.scheduler))},e}(),l=function(e){function t(t,r,s){e.call(this,t),this.duration=r,this.scheduler=s,this.hasValue=!1}return n(t,e),t.prototype._next=function(e){this.value=e,this.hasValue=!0,this.throttled||this.add(this.throttled=this.scheduler.schedule(s,this.duration,this))},t.prototype.clearThrottle=function(){var e=this,t=e.value,r=e.hasValue,s=e.throttled;s&&(this.remove(s),this.throttled=null,s.unsubscribe()),r&&(this.value=null,this.hasValue=!1,this.destination.next(t))},t}(u.Subscriber);return i.define=o,t.exports}),System.register("rxjs/operator/last",["rxjs/Subscriber","rxjs/util/EmptyError"],!0,function(require,e,t){function r(e,t,r){return this.lift(new u(e,t,r,this))}var s=System.global,i=s.define;s.define=void 0;
var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/util/EmptyError");e.last=r;var u=function(){function e(e,t,r,s){this.predicate=e,this.resultSelector=t,this.defaultValue=r,this.source=s}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.predicate,this.resultSelector,this.defaultValue,this.source))},e}(),c=function(e){function t(t,r,s,i,o){e.call(this,t),this.predicate=r,this.resultSelector=s,this.defaultValue=i,this.source=o,this.hasValue=!1,this.index=0,"undefined"!=typeof i&&(this.lastValue=i,this.hasValue=!0)}return o(t,e),t.prototype._next=function(e){var t=this.index++;if(this.predicate)this._tryPredicate(e,t);else{if(this.resultSelector)return void this._tryResultSelector(e,t);this.lastValue=e,this.hasValue=!0}},t.prototype._tryPredicate=function(e,t){var r;try{r=this.predicate(e,t,this.source)}catch(s){return void this.destination.error(s)}if(r){if(this.resultSelector)return void this._tryResultSelector(e,t);this.lastValue=e,this.hasValue=!0}},t.prototype._tryResultSelector=function(e,t){var r;try{r=this.resultSelector(e,t)}catch(s){return void this.destination.error(s)}this.lastValue=r,this.hasValue=!0},t.prototype._complete=function(){var e=this.destination;this.hasValue?(e.next(this.lastValue),e.complete()):e.error(new a.EmptyError)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/let",[],!0,function(require,e,t){function r(e){return e(this)}var s=System.global,i=s.define;return s.define=void 0,e.letProto=r,s.define=i,t.exports}),System.register("rxjs/operator/every",["rxjs/Subscriber"],!0,function(require,e,t){function r(e,t){return this.lift(new a(e,t,this))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.every=r;var a=function(){function e(e,t,r){this.predicate=e,this.thisArg=t,this.source=r}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.predicate,this.thisArg,this.source))},e}(),u=function(e){function t(t,r,s,i){e.call(this,t),this.predicate=r,this.thisArg=s,this.source=i,this.index=0,this.thisArg=s||this}return o(t,e),t.prototype.notifyComplete=function(e){this.destination.next(e),this.destination.complete()},t.prototype._next=function(e){var t=!1;try{t=this.predicate.call(this.thisArg,e,this.index++,this.source)}catch(r){return void this.destination.error(r)}t||this.notifyComplete(!1)},t.prototype._complete=function(){this.notifyComplete(!0)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/map",["rxjs/Subscriber"],!0,function(require,e,t){function r(e,t){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return this.lift(new a(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.map=r;var a=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.project,this.thisArg))},e}(),u=function(e){function t(t,r,s){e.call(this,t),this.project=r,this.count=0,this.thisArg=s||this}return o(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/mapTo",["rxjs/Subscriber"],!0,function(require,e,t){function r(e){return this.lift(new a(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.mapTo=r;var a=function(){function e(e){this.value=e}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.value))},e}(),u=function(e){function t(t,r){e.call(this,t),this.value=r}return o(t,e),t.prototype._next=function(e){this.destination.next(this.value)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/materialize",["rxjs/Subscriber","rxjs/Notification"],!0,function(require,e,t){function r(){return this.lift(new u)}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/Notification");e.materialize=r;var u=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new c(e))},e}(),c=function(e){function t(t){e.call(this,t)}return o(t,e),t.prototype._next=function(e){this.destination.next(a.Notification.createNext(e))},t.prototype._error=function(e){var t=this.destination;t.next(a.Notification.createError(e)),t.complete()},t.prototype._complete=function(){var e=this.destination;e.next(a.Notification.createComplete()),e.complete()},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/reduce",["rxjs/Subscriber"],!0,function(require,e,t){function r(e,t){return this.lift(new a(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.reduce=r;var a=function(){function e(e,t){this.accumulator=e,this.seed=t}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.accumulator,this.seed))},e}();e.ReduceOperator=a;var u=function(e){function t(t,r,s){e.call(this,t),this.accumulator=r,this.hasValue=!1,this.acc=s,this.accumulator=r,this.hasSeed="undefined"!=typeof s}return o(t,e),t.prototype._next=function(e){this.hasValue||(this.hasValue=this.hasSeed)?this._tryReduce(e):(this.acc=e,this.hasValue=!0)},t.prototype._tryReduce=function(e){var t;try{t=this.accumulator(this.acc,e)}catch(r){return void this.destination.error(r)}this.acc=t},t.prototype._complete=function(){(this.hasValue||this.hasSeed)&&this.destination.next(this.acc),this.destination.complete()},t}(n.Subscriber);return e.ReduceSubscriber=u,s.define=i,t.exports}),System.register("rxjs/add/operator/merge",["rxjs/Observable","rxjs/operator/merge"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/merge");return i.Observable.prototype.merge=o.merge,r.define=s,t.exports}),System.register("rxjs/add/operator/mergeAll",["rxjs/Observable","rxjs/operator/mergeAll"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/mergeAll");return i.Observable.prototype.mergeAll=o.mergeAll,r.define=s,t.exports}),System.register("rxjs/add/operator/mergeMap",["rxjs/Observable","rxjs/operator/mergeMap"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/mergeMap");return i.Observable.prototype.mergeMap=o.mergeMap,i.Observable.prototype.flatMap=o.mergeMap,r.define=s,t.exports}),System.register("rxjs/add/operator/mergeMapTo",["rxjs/Observable","rxjs/operator/mergeMapTo"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/mergeMapTo");return i.Observable.prototype.flatMapTo=o.mergeMapTo,i.Observable.prototype.mergeMapTo=o.mergeMapTo,r.define=s,t.exports}),System.register("rxjs/operator/mergeScan",["rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/util/subscribeToResult","rxjs/OuterSubscriber"],!0,function(require,e,t){function r(e,t,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),this.lift(new l(e,t,r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/util/tryCatch"),a=require("rxjs/util/errorObject"),u=require("rxjs/util/subscribeToResult"),c=require("rxjs/OuterSubscriber");e.mergeScan=r;var l=function(){function e(e,t,r){this.project=e,this.seed=t,this.concurrent=r}return e.prototype.call=function(e,t){return t._subscribe(new b(e,this.project,this.seed,this.concurrent))},e}();e.MergeScanOperator=l;var b=function(e){function t(t,r,s,i){e.call(this,t),this.project=r,this.acc=s,this.concurrent=i,this.hasValue=!1,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}return o(t,e),t.prototype._next=function(e){if(this.active<this.concurrent){var t=this.index++,r=n.tryCatch(this.project)(this.acc,e),s=this.destination;r===a.errorObject?s.error(a.errorObject.e):(this.active++,this._innerSub(r,e,t))}else this.buffer.push(e)},t.prototype._innerSub=function(e,t,r){this.add(u.subscribeToResult(this,e,t,r))},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&(this.hasValue===!1&&this.destination.next(this.acc),this.destination.complete())},t.prototype.notifyNext=function(e,t,r,s,i){var o=this.destination;this.acc=t,this.hasValue=!0,o.next(t)},t.prototype.notifyComplete=function(e){var t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&(this.hasValue===!1&&this.destination.next(this.acc),this.destination.complete())},t}(c.OuterSubscriber);return e.MergeScanSubscriber=b,s.define=i,t.exports}),System.register("rxjs/operator/min",["rxjs/operator/reduce"],!0,function(require,e,t){function r(e){var t="function"==typeof e?e:function(e,t){return t>e?e:t};return this.lift(new o.ReduceOperator(t))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/reduce");return e.min=r,s.define=i,t.exports}),System.register("rxjs/observable/MulticastObservable",["rxjs/Observable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=function(e){function t(t,r,s){e.call(this),this.source=t,this.connectable=r,this.selector=s}return i(t,e),t.prototype._subscribe=function(e){var t=this,r=t.selector,s=t.connectable,i=r(s).subscribe(e);return i.add(s.connect()),i},t}(o.Observable);return e.MulticastObservable=n,r.define=s,t.exports}),System.register("rxjs/observable/ConnectableObservable",["rxjs/Subject","rxjs/Observable","rxjs/Subscriber","rxjs/Subscription"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subject"),n=require("rxjs/Observable"),a=require("rxjs/Subscriber"),u=require("rxjs/Subscription"),c=function(e){function t(t,r){e.call(this),this.source=t,this.subjectFactory=r,this._refCount=0}return i(t,e),t.prototype._subscribe=function(e){return this.getSubject().subscribe(e)},t.prototype.getSubject=function(){var e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject},t.prototype.connect=function(){var e=this._connection;return e||(e=this._connection=new u.Subscription,e.add(this.source.subscribe(new l(this.getSubject(),this))),e.isUnsubscribed?(this._connection=null,e=u.Subscription.EMPTY):this._connection=e),e},t.prototype.refCount=function(){return this.lift(new b(this))},t}(n.Observable);e.ConnectableObservable=c;var l=function(e){function t(t,r){e.call(this,t),this.connectable=r}return i(t,e),t.prototype._error=function(t){this._unsubscribe(),e.prototype._error.call(this,t)},t.prototype._complete=function(){this._unsubscribe(),e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}},t}(o.SubjectSubscriber),b=function(){function e(e){this.connectable=e}return e.prototype.call=function(e,t){var r=this.connectable;r._refCount++;var s=new p(e,r),i=t._subscribe(s);return s.isUnsubscribed||(s.connection=r.connect()),i},e}(),p=function(e){function t(t,r){e.call(this,t),this.connectable=r}return i(t,e),t.prototype._unsubscribe=function(){var e=this.connectable;if(!e)return void(this.connection=null);this.connectable=null;var t=e._refCount;if(0>=t)return void(this.connection=null);if(e._refCount=t-1,t>1)return void(this.connection=null);var r=this.connection,s=e._connection;this.connection=null,!s||r&&s!==r||s.unsubscribe()},t}(a.Subscriber);return r.define=s,t.exports}),System.register("rxjs/add/operator/observeOn",["rxjs/Observable","rxjs/operator/observeOn"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/observeOn");return i.Observable.prototype.observeOn=o.observeOn,r.define=s,t.exports}),System.register("rxjs/add/operator/onErrorResumeNext",["rxjs/Observable","rxjs/operator/onErrorResumeNext"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/onErrorResumeNext");return i.Observable.prototype.onErrorResumeNext=o.onErrorResumeNext,r.define=s,t.exports}),System.register("rxjs/operator/pairwise",["rxjs/Subscriber"],!0,function(require,e,t){function r(){return this.lift(new a)}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.pairwise=r;var a=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new u(e))},e}(),u=function(e){function t(t){e.call(this,t),this.hasPrev=!1}return o(t,e),t.prototype._next=function(e){this.hasPrev?this.destination.next([this.prev,e]):this.hasPrev=!0,this.prev=e},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/util/not",[],!0,function(require,e,t){function r(e,t){function r(){return!r.pred.apply(r.thisArg,arguments)}return r.pred=e,r.thisArg=t,r}var s=System.global,i=s.define;return s.define=void 0,e.not=r,s.define=i,t.exports}),System.register("rxjs/operator/pluck",["rxjs/operator/map"],!0,function(require,e,t){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=e.length;if(0===r)throw new Error("List of properties cannot be empty.");return n.map.call(this,s(e,r))}function s(e,t){var r=function(r){for(var s=r,i=0;t>i;i++){var o=s[e[i]];if("undefined"==typeof o)return;s=o}return s};return r}var i=System.global,o=i.define;i.define=void 0;var n=require("rxjs/operator/map");return e.pluck=r,i.define=o,t.exports}),System.register("rxjs/operator/publish",["rxjs/Subject","rxjs/operator/multicast"],!0,function(require,e,t){function r(e){return e?n.multicast.call(this,function(){return new o.Subject},e):n.multicast.call(this,new o.Subject)}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/Subject"),n=require("rxjs/operator/multicast");return e.publish=r,s.define=i,t.exports}),System.register("rxjs/util/throwError",[],!0,function(require,e,t){function r(e){throw e}var s=System.global,i=s.define;return s.define=void 0,e.throwError=r,s.define=i,t.exports}),System.register("rxjs/operator/publishReplay",["rxjs/ReplaySubject","rxjs/operator/multicast"],!0,function(require,e,t){function r(e,t,r){return void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===t&&(t=Number.POSITIVE_INFINITY),n.multicast.call(this,new o.ReplaySubject(e,t,r))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/ReplaySubject"),n=require("rxjs/operator/multicast");return e.publishReplay=r,s.define=i,t.exports}),System.register("rxjs/operator/publishLast",["rxjs/AsyncSubject","rxjs/operator/multicast"],!0,function(require,e,t){function r(){return n.multicast.call(this,new o.AsyncSubject)}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/AsyncSubject"),n=require("rxjs/operator/multicast");return e.publishLast=r,s.define=i,t.exports}),System.register("rxjs/add/operator/race",["rxjs/Observable","rxjs/operator/race"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/race");return i.Observable.prototype.race=o.race,r.define=s,t.exports}),System.register("rxjs/add/operator/reduce",["rxjs/Observable","rxjs/operator/reduce"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/reduce");return i.Observable.prototype.reduce=o.reduce,r.define=s,t.exports}),System.register("rxjs/operator/repeat",["rxjs/Subscriber","rxjs/observable/EmptyObservable"],!0,function(require,e,t){function r(e){return void 0===e&&(e=-1),0===e?new a.EmptyObservable:0>e?this.lift(new u(-1,this)):this.lift(new u(e-1,this))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/observable/EmptyObservable");e.repeat=r;var u=function(){function e(e,t){this.count=e,this.source=t}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.count,this.source))},e}(),c=function(e){function t(t,r,s){e.call(this,t),this.count=r,this.source=s}return o(t,e),t.prototype.complete=function(){if(!this.isStopped){var t=this,r=t.source,s=t.count;if(0===s)return e.prototype.complete.call(this);s>-1&&(this.count=s-1),this.unsubscribe(),this.isStopped=!1,this.isUnsubscribed=!1,r.subscribe(this)}},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/retry",["rxjs/Subscriber"],!0,function(require,e,t){function r(e){return void 0===e&&(e=-1),this.lift(new a(e,this))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.retry=r;var a=function(){function e(e,t){this.count=e,this.source=t}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.count,this.source))},e}(),u=function(e){function t(t,r,s){e.call(this,t),this.count=r,this.source=s}return o(t,e),t.prototype.error=function(t){if(!this.isStopped){var r=this,s=r.source,i=r.count;if(0===i)return e.prototype.error.call(this,t);i>-1&&(this.count=i-1),this.unsubscribe(),this.isStopped=!1,this.isUnsubscribed=!1,s.subscribe(this)}},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/retryWhen",["rxjs/Subject","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new b(e,this))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subject"),a=require("rxjs/util/tryCatch"),u=require("rxjs/util/errorObject"),c=require("rxjs/OuterSubscriber"),l=require("rxjs/util/subscribeToResult");e.retryWhen=r;var b=function(){function e(e,t){this.notifier=e,this.source=t}return e.prototype.call=function(e,t){return t._subscribe(new p(e,this.notifier,this.source))},e}(),p=function(e){function t(t,r,s){e.call(this,t),this.notifier=r,this.source=s}return o(t,e),t.prototype.error=function(t){if(!this.isStopped){var r=this.errors,s=this.retries,i=this.retriesSubscription;if(s)this.errors=null,this.retriesSubscription=null;else{if(r=new n.Subject,s=a.tryCatch(this.notifier)(r),s===u.errorObject)return e.prototype.error.call(this,u.errorObject.e);i=l.subscribeToResult(this,s)}this.unsubscribe(),this.isUnsubscribed=!1,this.errors=r,this.retries=s,this.retriesSubscription=i,r.next(t)}},t.prototype._unsubscribe=function(){var e=this,t=e.errors,r=e.retriesSubscription;t&&(t.unsubscribe(),this.errors=null),r&&(r.unsubscribe(),this.retriesSubscription=null),this.retries=null},t.prototype.notifyNext=function(e,t,r,s,i){var o=this,n=o.errors,a=o.retries,u=o.retriesSubscription;this.errors=null,this.retries=null,this.retriesSubscription=null,this.unsubscribe(),this.isStopped=!1,this.isUnsubscribed=!1,this.errors=n,this.retries=a,this.retriesSubscription=u,this.source.subscribe(this)},t}(c.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/sample",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new u(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.sample=r;var u=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.notifier))},e}(),c=function(e){function t(t,r){e.call(this,t),this.hasValue=!1,this.add(a.subscribeToResult(this,r))}return o(t,e),t.prototype._next=function(e){this.value=e,this.hasValue=!0},t.prototype.notifyNext=function(e,t,r,s,i){this.emitValue()},t.prototype.notifyComplete=function(){this.emitValue()},t.prototype.emitValue=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.value))},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/sampleTime",["rxjs/Subscriber","rxjs/scheduler/async"],!0,function(require,e,t){function r(e,t){return void 0===t&&(t=u.async),this.lift(new c(e,t))}function s(e){var t=e.subscriber,r=e.period;t.notifyNext(),this.schedule(e,r)}var i=System.global,o=i.define;i.define=void 0;var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},a=require("rxjs/Subscriber"),u=require("rxjs/scheduler/async");e.sampleTime=r;var c=function(){function e(e,t){this.period=e,this.scheduler=t}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.period,this.scheduler))},e}(),l=function(e){function t(t,r,i){e.call(this,t),this.period=r,this.scheduler=i,this.hasValue=!1,this.add(i.schedule(s,r,{subscriber:this,period:r}))}return n(t,e),t.prototype._next=function(e){this.lastValue=e,this.hasValue=!0},t.prototype.notifyNext=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))},t}(a.Subscriber);return i.define=o,t.exports}),System.register("rxjs/operator/scan",["rxjs/Subscriber"],!0,function(require,e,t){function r(e,t){return this.lift(new a(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.scan=r;var a=function(){function e(e,t){this.accumulator=e,this.seed=t}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.accumulator,this.seed))},e}(),u=function(e){function t(t,r,s){e.call(this,t),this.accumulator=r,this.index=0,this.accumulatorSet=!1,this.seed=s,this.accumulatorSet="undefined"!=typeof s}return o(t,e),Object.defineProperty(t.prototype,"seed",{get:function(){return this._seed},set:function(e){this.accumulatorSet=!0,this._seed=e},enumerable:!0,configurable:!0}),t.prototype._next=function(e){return this.accumulatorSet?this._tryNext(e):(this.seed=e,void this.destination.next(e))},t.prototype._tryNext=function(e){var t,r=this.index++;try{t=this.accumulator(this.seed,e,r)}catch(s){this.destination.error(s)}this.seed=t,this.destination.next(t)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/share",["rxjs/operator/multicast","rxjs/Subject"],!0,function(require,e,t){function r(){return new a.Subject}function s(){return n.multicast.call(this,r).refCount()}var i=System.global,o=i.define;i.define=void 0;var n=require("rxjs/operator/multicast"),a=require("rxjs/Subject");return e.share=s,i.define=o,t.exports}),System.register("rxjs/operator/single",["rxjs/Subscriber","rxjs/util/EmptyError"],!0,function(require,e,t){function r(e){return this.lift(new u(e,this))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/util/EmptyError");e.single=r;var u=function(){function e(e,t){this.predicate=e,this.source=t}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.predicate,this.source))},e}(),c=function(e){function t(t,r,s){e.call(this,t),this.predicate=r,this.source=s,this.seenValue=!1,this.index=0}return o(t,e),t.prototype.applySingleValue=function(e){this.seenValue?this.destination.error("Sequence contains more than one element"):(this.seenValue=!0,this.singleValue=e)},t.prototype._next=function(e){var t=this.predicate;this.index++,t?this.tryNext(e):this.applySingleValue(e)},t.prototype.tryNext=function(e){try{var t=this.predicate(e,this.index,this.source);t&&this.applySingleValue(e)}catch(r){this.destination.error(r)}},t.prototype._complete=function(){var e=this.destination;this.index>0?(e.next(this.seenValue?this.singleValue:void 0),e.complete()):e.error(new a.EmptyError)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/skip",["rxjs/Subscriber"],!0,function(require,e,t){function r(e){return this.lift(new a(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.skip=r;var a=function(){function e(e){this.total=e}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.total))},e}(),u=function(e){function t(t,r){e.call(this,t),this.total=r,this.count=0}return o(t,e),t.prototype._next=function(e){++this.count>this.total&&this.destination.next(e)},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/skipUntil",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new u(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.skipUntil=r;var u=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.notifier))},e}(),c=function(e){function t(t,r){e.call(this,t),this.hasValue=!1,this.isInnerStopped=!1,this.add(a.subscribeToResult(this,r))}return o(t,e),t.prototype._next=function(t){this.hasValue&&e.prototype._next.call(this,t)},t.prototype._complete=function(){this.isInnerStopped?e.prototype._complete.call(this):this.unsubscribe()},t.prototype.notifyNext=function(e,t,r,s,i){this.hasValue=!0},t.prototype.notifyComplete=function(){this.isInnerStopped=!0,this.isStopped&&e.prototype._complete.call(this)},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/skipWhile",["rxjs/Subscriber"],!0,function(require,e,t){function r(e){return this.lift(new a(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.skipWhile=r;var a=function(){function e(e){this.predicate=e}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.predicate))},e}(),u=function(e){function t(t,r){e.call(this,t),this.predicate=r,this.skipping=!0,this.index=0}return o(t,e),t.prototype._next=function(e){var t=this.destination;this.skipping&&this.tryCallPredicate(e),this.skipping||t.next(e)},t.prototype.tryCallPredicate=function(e){try{var t=this.predicate(e,this.index++);this.skipping=Boolean(t)}catch(r){this.destination.error(r)}},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/startWith",["rxjs/observable/ArrayObservable","rxjs/observable/ScalarObservable","rxjs/observable/EmptyObservable","rxjs/operator/concat","rxjs/util/isScheduler"],!0,function(require,e,t){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=e[e.length-1];c.isScheduler(r)?e.pop():r=null;var s=e.length;return 1===s?u.concatStatic(new n.ScalarObservable(e[0],r),this):s>1?u.concatStatic(new o.ArrayObservable(e,r),this):u.concatStatic(new a.EmptyObservable(r),this)}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/observable/ArrayObservable"),n=require("rxjs/observable/ScalarObservable"),a=require("rxjs/observable/EmptyObservable"),u=require("rxjs/operator/concat"),c=require("rxjs/util/isScheduler");return e.startWith=r,s.define=i,t.exports}),System.register("rxjs/util/Immediate",["rxjs/util/root"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/util/root"),o=function(){function e(e){if(this.root=e,e.setImmediate&&"function"==typeof e.setImmediate)this.setImmediate=e.setImmediate.bind(e),this.clearImmediate=e.clearImmediate.bind(e);else{this.nextHandle=1,this.tasksByHandle={},this.currentlyRunningATask=!1,this.canUseProcessNextTick()?this.setImmediate=this.createProcessNextTickSetImmediate():this.canUsePostMessage()?this.setImmediate=this.createPostMessageSetImmediate():this.canUseMessageChannel()?this.setImmediate=this.createMessageChannelSetImmediate():this.canUseReadyStateChange()?this.setImmediate=this.createReadyStateChangeSetImmediate():this.setImmediate=this.createSetTimeoutSetImmediate();var t=function r(e){delete r.instance.tasksByHandle[e]};t.instance=this,this.clearImmediate=t}}return e.prototype.identify=function(e){return this.root.Object.prototype.toString.call(e)},e.prototype.canUseProcessNextTick=function(){return"[object process]"===this.identify(this.root.process)},e.prototype.canUseMessageChannel=function(){return Boolean(this.root.MessageChannel)},e.prototype.canUseReadyStateChange=function(){var e=this.root.document;return Boolean(e&&"onreadystatechange"in e.createElement("script"))},e.prototype.canUsePostMessage=function(){var e=this.root;if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}return!1},e.prototype.partiallyApplied=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var s=function i(){var e=i,t=e.handler,r=e.args;"function"==typeof t?t.apply(void 0,r):new Function(""+t)()};return s.handler=e,s.args=t,s},e.prototype.addFromSetImmediateArguments=function(e){return this.tasksByHandle[this.nextHandle]=this.partiallyApplied.apply(void 0,e),
this.nextHandle++},e.prototype.createProcessNextTickSetImmediate=function(){var e=function t(){var e=t.instance,r=e.addFromSetImmediateArguments(arguments);return e.root.process.nextTick(e.partiallyApplied(e.runIfPresent,r)),r};return e.instance=this,e},e.prototype.createPostMessageSetImmediate=function(){var e=this.root,t="setImmediate$"+e.Math.random()+"$",r=function i(r){var s=i.instance;r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&s.runIfPresent(+r.data.slice(t.length))};r.instance=this,e.addEventListener("message",r,!1);var s=function o(){var e=o,t=e.messagePrefix,r=e.instance,s=r.addFromSetImmediateArguments(arguments);return r.root.postMessage(t+s,"*"),s};return s.instance=this,s.messagePrefix=t,s},e.prototype.runIfPresent=function(e){if(this.currentlyRunningATask)this.root.setTimeout(this.partiallyApplied(this.runIfPresent,e),0);else{var t=this.tasksByHandle[e];if(t){this.currentlyRunningATask=!0;try{t()}finally{this.clearImmediate(e),this.currentlyRunningATask=!1}}}},e.prototype.createMessageChannelSetImmediate=function(){var e=this,t=new this.root.MessageChannel;t.port1.onmessage=function(t){var r=t.data;e.runIfPresent(r)};var r=function s(){var e=s,t=e.channel,r=e.instance,i=r.addFromSetImmediateArguments(arguments);return t.port2.postMessage(i),i};return r.channel=t,r.instance=this,r},e.prototype.createReadyStateChangeSetImmediate=function(){var e=function t(){var e=t.instance,r=e.root,s=r.document,i=s.documentElement,o=e.addFromSetImmediateArguments(arguments),n=s.createElement("script");return n.onreadystatechange=function(){e.runIfPresent(o),n.onreadystatechange=null,i.removeChild(n),n=null},i.appendChild(n),o};return e.instance=this,e},e.prototype.createSetTimeoutSetImmediate=function(){var e=function t(){var e=t.instance,r=e.addFromSetImmediateArguments(arguments);return e.root.setTimeout(e.partiallyApplied(e.runIfPresent,r),0),r};return e.instance=this,e},e}();return e.ImmediateDefinition=o,e.Immediate=new o(i.root),r.define=s,t.exports}),System.register("rxjs/operator/switch",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(){return this.lift(new u)}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e._switch=r;var u=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new c(e))},e}(),c=function(e){function t(t){e.call(this,t),this.active=0,this.hasCompleted=!1}return o(t,e),t.prototype._next=function(e){this.unsubscribeInner(),this.active++,this.add(this.innerSubscription=a.subscribeToResult(this,e))},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&this.destination.complete()},t.prototype.unsubscribeInner=function(){this.active=this.active>0?this.active-1:0;var e=this.innerSubscription;e&&(e.unsubscribe(),this.remove(e))},t.prototype.notifyNext=function(e,t,r,s,i){this.destination.next(t)},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(){this.unsubscribeInner(),this.hasCompleted&&0===this.active&&this.destination.complete()},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/switchMap",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e,t){return this.lift(new u(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.switchMap=r;var u=function(){function e(e,t){this.project=e,this.resultSelector=t}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.project,this.resultSelector))},e}(),c=function(e){function t(t,r,s){e.call(this,t),this.project=r,this.resultSelector=s,this.index=0}return o(t,e),t.prototype._next=function(e){var t,r=this.index++;try{t=this.project(e,r)}catch(s){return void this.destination.error(s)}this._innerSub(t,e,r)},t.prototype._innerSub=function(e,t,r){var s=this.innerSubscription;s&&s.unsubscribe(),this.add(this.innerSubscription=a.subscribeToResult(this,e,t,r))},t.prototype._complete=function(){var t=this.innerSubscription;t&&!t.isUnsubscribed||e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){this.innerSubscription=null},t.prototype.notifyComplete=function(t){this.remove(t),this.innerSubscription=null,this.isStopped&&e.prototype._complete.call(this)},t.prototype.notifyNext=function(e,t,r,s,i){this.resultSelector?this._tryNotifyNext(e,t,r,s):this.destination.next(t)},t.prototype._tryNotifyNext=function(e,t,r,s){var i;try{i=this.resultSelector(e,t,r,s)}catch(o){return void this.destination.error(o)}this.destination.next(i)},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/switchMapTo",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e,t){return this.lift(new u(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.switchMapTo=r;var u=function(){function e(e,t){this.observable=e,this.resultSelector=t}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.observable,this.resultSelector))},e}(),c=function(e){function t(t,r,s){e.call(this,t),this.inner=r,this.resultSelector=s,this.index=0}return o(t,e),t.prototype._next=function(e){var t=this.innerSubscription;t&&t.unsubscribe(),this.add(this.innerSubscription=a.subscribeToResult(this,this.inner,e,this.index++))},t.prototype._complete=function(){var t=this.innerSubscription;t&&!t.isUnsubscribed||e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){this.innerSubscription=null},t.prototype.notifyComplete=function(t){this.remove(t),this.innerSubscription=null,this.isStopped&&e.prototype._complete.call(this)},t.prototype.notifyNext=function(e,t,r,s,i){var o=this,n=o.resultSelector,a=o.destination;n?this.tryResultSelector(e,t,r,s):a.next(t)},t.prototype.tryResultSelector=function(e,t,r,s){var i,o=this,n=o.resultSelector,a=o.destination;try{i=n(e,t,r,s)}catch(u){return void a.error(u)}a.next(i)},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/take",["rxjs/Subscriber","rxjs/util/ArgumentOutOfRangeError","rxjs/observable/EmptyObservable"],!0,function(require,e,t){function r(e){return 0===e?new u.EmptyObservable:this.lift(new c(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/util/ArgumentOutOfRangeError"),u=require("rxjs/observable/EmptyObservable");e.take=r;var c=function(){function e(e){if(this.total=e,this.total<0)throw new a.ArgumentOutOfRangeError}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.total))},e}(),l=function(e){function t(t,r){e.call(this,t),this.total=r,this.count=0}return o(t,e),t.prototype._next=function(e){var t=this.total;++this.count<=t&&(this.destination.next(e),this.count===t&&(this.destination.complete(),this.unsubscribe()))},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/takeLast",["rxjs/Subscriber","rxjs/util/ArgumentOutOfRangeError","rxjs/observable/EmptyObservable"],!0,function(require,e,t){function r(e){return 0===e?new u.EmptyObservable:this.lift(new c(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/util/ArgumentOutOfRangeError"),u=require("rxjs/observable/EmptyObservable");e.takeLast=r;var c=function(){function e(e){if(this.total=e,this.total<0)throw new a.ArgumentOutOfRangeError}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.total))},e}(),l=function(e){function t(t,r){e.call(this,t),this.total=r,this.ring=new Array,this.count=0}return o(t,e),t.prototype._next=function(e){var t=this.ring,r=this.total,s=this.count++;if(t.length<r)t.push(e);else{var i=s%r;t[i]=e}},t.prototype._complete=function(){var e=this.destination,t=this.count;if(t>0)for(var r=this.count>=this.total?this.total:this.count,s=this.ring,i=0;r>i;i++){var o=t++%r;e.next(s[o])}e.complete()},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/takeUntil",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new u(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.takeUntil=r;var u=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.notifier))},e}(),c=function(e){function t(t,r){e.call(this,t),this.notifier=r,this.add(a.subscribeToResult(this,r))}return o(t,e),t.prototype.notifyNext=function(e,t,r,s,i){this.complete()},t.prototype.notifyComplete=function(){},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/takeWhile",["rxjs/Subscriber"],!0,function(require,e,t){function r(e){return this.lift(new a(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.takeWhile=r;var a=function(){function e(e){this.predicate=e}return e.prototype.call=function(e,t){return t._subscribe(new u(e,this.predicate))},e}(),u=function(e){function t(t,r){e.call(this,t),this.predicate=r,this.index=0}return o(t,e),t.prototype._next=function(e){var t,r=this.destination;try{t=this.predicate(e,this.index++)}catch(s){return void r.error(s)}this.nextOrComplete(e,t)},t.prototype.nextOrComplete=function(e,t){var r=this.destination;Boolean(t)?r.next(e):r.complete()},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/throttle",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new u(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.throttle=r;var u=function(){function e(e){this.durationSelector=e}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.durationSelector))},e}(),c=function(e){function t(t,r){e.call(this,t),this.destination=t,this.durationSelector=r}return o(t,e),t.prototype._next=function(e){this.throttled||this.tryDurationSelector(e)},t.prototype.tryDurationSelector=function(e){var t=null;try{t=this.durationSelector(e)}catch(r){return void this.destination.error(r)}this.emitAndThrottle(e,t)},t.prototype.emitAndThrottle=function(e,t){this.add(this.throttled=a.subscribeToResult(this,t)),this.destination.next(e)},t.prototype._unsubscribe=function(){var e=this.throttled;e&&(this.remove(e),this.throttled=null,e.unsubscribe())},t.prototype.notifyNext=function(e,t,r,s,i){this._unsubscribe()},t.prototype.notifyComplete=function(){this._unsubscribe()},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/throttleTime",["rxjs/Subscriber","rxjs/scheduler/async"],!0,function(require,e,t){function r(e,t){return void 0===t&&(t=u.async),this.lift(new c(e,t))}function s(e){var t=e.subscriber;t.clearThrottle()}var i=System.global,o=i.define;i.define=void 0;var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},a=require("rxjs/Subscriber"),u=require("rxjs/scheduler/async");e.throttleTime=r;var c=function(){function e(e,t){this.duration=e,this.scheduler=t}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.duration,this.scheduler))},e}(),l=function(e){function t(t,r,s){e.call(this,t),this.duration=r,this.scheduler=s}return n(t,e),t.prototype._next=function(e){this.throttled||(this.add(this.throttled=this.scheduler.schedule(s,this.duration,{subscriber:this})),this.destination.next(e))},t.prototype.clearThrottle=function(){var e=this.throttled;e&&(e.unsubscribe(),this.remove(e),this.throttled=null)},t}(a.Subscriber);return i.define=o,t.exports}),System.register("rxjs/operator/timeInterval",["rxjs/Subscriber","rxjs/scheduler/async"],!0,function(require,e,t){function r(e){return void 0===e&&(e=a.async),this.lift(new c(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/scheduler/async");e.timeInterval=r;var u=function(){function e(e,t){this.value=e,this.interval=t}return e}();e.TimeInterval=u;var c=function(){function e(e){this.scheduler=e}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.scheduler))},e}(),l=function(e){function t(t,r){e.call(this,t),this.scheduler=r,this.lastTime=0,this.lastTime=r.now()}return o(t,e),t.prototype._next=function(e){var t=this.scheduler.now(),r=t-this.lastTime;this.lastTime=t,this.destination.next(new u(e,r))},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/timeout",["rxjs/scheduler/async","rxjs/util/isDate","rxjs/Subscriber"],!0,function(require,e,t){function r(e,t,r){void 0===t&&(t=null),void 0===r&&(r=n.async);var s=a.isDate(e),i=s?+e-r.now():Math.abs(e);return this.lift(new c(i,s,t,r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/scheduler/async"),a=require("rxjs/util/isDate"),u=require("rxjs/Subscriber");e.timeout=r;var c=function(){function e(e,t,r,s){this.waitFor=e,this.absoluteTimeout=t,this.errorToSend=r,this.scheduler=s}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.absoluteTimeout,this.waitFor,this.errorToSend,this.scheduler))},e}(),l=function(e){function t(t,r,s,i,o){e.call(this,t),this.absoluteTimeout=r,this.waitFor=s,this.errorToSend=i,this.scheduler=o,this.index=0,this._previousIndex=0,this._hasCompleted=!1,this.scheduleTimeout()}return o(t,e),Object.defineProperty(t.prototype,"previousIndex",{get:function(){return this._previousIndex},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasCompleted",{get:function(){return this._hasCompleted},enumerable:!0,configurable:!0}),t.dispatchTimeout=function(e){var t=e.subscriber,r=e.index;t.hasCompleted||t.previousIndex!==r||t.notifyTimeout()},t.prototype.scheduleTimeout=function(){var e=this.index;this.scheduler.schedule(t.dispatchTimeout,this.waitFor,{subscriber:this,index:e}),this.index++,this._previousIndex=e},t.prototype._next=function(e){this.destination.next(e),this.absoluteTimeout||this.scheduleTimeout()},t.prototype._error=function(e){this.destination.error(e),this._hasCompleted=!0},t.prototype._complete=function(){this.destination.complete(),this._hasCompleted=!0},t.prototype.notifyTimeout=function(){this.error(this.errorToSend||new Error("timeout"))},t}(u.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/timeoutWith",["rxjs/scheduler/async","rxjs/util/isDate","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e,t,r){void 0===r&&(r=n.async);var s=a.isDate(e),i=s?+e-r.now():Math.abs(e);return this.lift(new l(i,s,t,r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/scheduler/async"),a=require("rxjs/util/isDate"),u=require("rxjs/OuterSubscriber"),c=require("rxjs/util/subscribeToResult");e.timeoutWith=r;var l=function(){function e(e,t,r,s){this.waitFor=e,this.absoluteTimeout=t,this.withObservable=r,this.scheduler=s}return e.prototype.call=function(e,t){return t._subscribe(new b(e,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))},e}(),b=function(e){function t(t,r,s,i,o){e.call(this),this.destination=t,this.absoluteTimeout=r,this.waitFor=s,this.withObservable=i,this.scheduler=o,this.timeoutSubscription=void 0,this.index=0,this._previousIndex=0,this._hasCompleted=!1,t.add(this),this.scheduleTimeout()}return o(t,e),Object.defineProperty(t.prototype,"previousIndex",{get:function(){return this._previousIndex},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasCompleted",{get:function(){return this._hasCompleted},enumerable:!0,configurable:!0}),t.dispatchTimeout=function(e){var t=e.subscriber,r=e.index;t.hasCompleted||t.previousIndex!==r||t.handleTimeout()},t.prototype.scheduleTimeout=function(){var e=this.index,r={subscriber:this,index:e};this.scheduler.schedule(t.dispatchTimeout,this.waitFor,r),this.index++,this._previousIndex=e},t.prototype._next=function(e){this.destination.next(e),this.absoluteTimeout||this.scheduleTimeout()},t.prototype._error=function(e){this.destination.error(e),this._hasCompleted=!0},t.prototype._complete=function(){this.destination.complete(),this._hasCompleted=!0},t.prototype.handleTimeout=function(){if(!this.isUnsubscribed){var e=this.withObservable;this.unsubscribe(),this.destination.add(this.timeoutSubscription=c.subscribeToResult(this,e))}},t}(u.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/timestamp",["rxjs/Subscriber","rxjs/scheduler/async"],!0,function(require,e,t){function r(e){return void 0===e&&(e=a.async),this.lift(new c(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/scheduler/async");e.timestamp=r;var u=function(){function e(e,t){this.value=e,this.timestamp=t}return e}();e.Timestamp=u;var c=function(){function e(e){this.scheduler=e}return e.prototype.call=function(e,t){return t._subscribe(new l(e,this.scheduler))},e}(),l=function(e){function t(t,r){e.call(this,t),this.scheduler=r}return o(t,e),t.prototype._next=function(e){var t=this.scheduler.now();this.destination.next(new u(e,t))},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/toArray",["rxjs/Subscriber"],!0,function(require,e,t){function r(){return this.lift(new a)}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber");e.toArray=r;var a=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new u(e))},e}(),u=function(e){function t(t){e.call(this,t),this.array=[]}return o(t,e),t.prototype._next=function(e){this.array.push(e)},t.prototype._complete=function(){this.destination.next(this.array),this.destination.complete()},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/toPromise",["rxjs/util/root"],!0,function(require,e,t){function r(e){var t=this;if(e||(o.root.Rx&&o.root.Rx.config&&o.root.Rx.config.Promise?e=o.root.Rx.config.Promise:o.root.Promise&&(e=o.root.Promise)),!e)throw new Error("no Promise impl found");return new e(function(e,r){var s;t.subscribe(function(e){return s=e},function(e){return r(e)},function(){return e(s)})})}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/util/root");return e.toPromise=r,s.define=i,t.exports}),System.register("rxjs/operator/window",["rxjs/Subject","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new c(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subject"),a=require("rxjs/OuterSubscriber"),u=require("rxjs/util/subscribeToResult");e.window=r;var c=function(){function e(e){this.windowBoundaries=e}return e.prototype.call=function(e,t){var r=new l(e),s=t._subscribe(r);return s.isUnsubscribed||r.add(u.subscribeToResult(r,this.windowBoundaries)),s},e}(),l=function(e){function t(t){e.call(this,t),this.window=new n.Subject,t.next(this.window)}return o(t,e),t.prototype.notifyNext=function(e,t,r,s,i){this.openWindow()},t.prototype.notifyError=function(e,t){this._error(e)},t.prototype.notifyComplete=function(e){this._complete()},t.prototype._next=function(e){this.window.next(e)},t.prototype._error=function(e){this.window.error(e),this.destination.error(e)},t.prototype._complete=function(){this.window.complete(),this.destination.complete()},t.prototype._unsubscribe=function(){this.window=null},t.prototype.openWindow=function(){var e=this.window;e&&e.complete();var t=this.destination,r=this.window=new n.Subject;t.next(r)},t}(a.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/windowCount",["rxjs/Subscriber","rxjs/Subject"],!0,function(require,e,t){function r(e,t){return void 0===t&&(t=0),this.lift(new u(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/Subject");e.windowCount=r;var u=function(){function e(e,t){this.windowSize=e,this.startWindowEvery=t}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.windowSize,this.startWindowEvery))},e}(),c=function(e){function t(t,r,s){e.call(this,t),this.destination=t,this.windowSize=r,this.startWindowEvery=s,this.windows=[new a.Subject],this.count=0,t.next(this.windows[0])}return o(t,e),t.prototype._next=function(e){for(var t=this.startWindowEvery>0?this.startWindowEvery:this.windowSize,r=this.destination,s=this.windowSize,i=this.windows,o=i.length,n=0;o>n&&!this.isUnsubscribed;n++)i[n].next(e);var u=this.count-s+1;if(u>=0&&u%t===0&&!this.isUnsubscribed&&i.shift().complete(),++this.count%t===0&&!this.isUnsubscribed){var c=new a.Subject;i.push(c),r.next(c)}},t.prototype._error=function(e){var t=this.windows;if(t)for(;t.length>0&&!this.isUnsubscribed;)t.shift().error(e);this.destination.error(e)},t.prototype._complete=function(){var e=this.windows;if(e)for(;e.length>0&&!this.isUnsubscribed;)e.shift().complete();this.destination.complete()},t.prototype._unsubscribe=function(){this.count=0,this.windows=null},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/operator/windowTime",["rxjs/Subscriber","rxjs/Subject","rxjs/scheduler/async"],!0,function(require,e,t){function r(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=b.async),this.lift(new p(e,t,r))}function s(e){var t=e.subscriber,r=e.windowTimeSpan,s=e.window;s&&s.complete(),e.window=t.openWindow(),this.schedule(e,r)}function i(e){var t=e.windowTimeSpan,r=e.subscriber,s=e.scheduler,i=e.windowCreationInterval,n=r.openWindow(),a=this,u={action:a,subscription:null},c={subscriber:r,window:n,context:u};u.subscription=s.schedule(o,t,c),a.add(u.subscription),a.schedule(e,i)}function o(e){var t=e.subscriber,r=e.window,s=e.context;s&&s.action&&s.subscription&&s.action.remove(s.subscription),t.closeWindow(r)}var n=System.global,a=n.define;n.define=void 0;var u=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},c=require("rxjs/Subscriber"),l=require("rxjs/Subject"),b=require("rxjs/scheduler/async");e.windowTime=r;var p=function(){function e(e,t,r){this.windowTimeSpan=e,this.windowCreationInterval=t,this.scheduler=r}return e.prototype.call=function(e,t){return t._subscribe(new h(e,this.windowTimeSpan,this.windowCreationInterval,this.scheduler))},e}(),h=function(e){function t(t,r,n,a){if(e.call(this,t),this.destination=t,this.windowTimeSpan=r,this.windowCreationInterval=n,this.scheduler=a,this.windows=[],null!==n&&n>=0){var u=this.openWindow(),c={subscriber:this,window:u,context:null},l={windowTimeSpan:r,windowCreationInterval:n,subscriber:this,scheduler:a};this.add(a.schedule(o,r,c)),this.add(a.schedule(i,n,l))}else{var b=this.openWindow(),p={subscriber:this,window:b,windowTimeSpan:r};this.add(a.schedule(s,r,p))}}return u(t,e),t.prototype._next=function(e){for(var t=this.windows,r=t.length,s=0;r>s;s++){var i=t[s];i.isUnsubscribed||i.next(e)}},t.prototype._error=function(e){for(var t=this.windows;t.length>0;)t.shift().error(e);this.destination.error(e)},t.prototype._complete=function(){for(var e=this.windows;e.length>0;){var t=e.shift();t.isUnsubscribed||t.complete()}this.destination.complete()},t.prototype.openWindow=function(){var e=new l.Subject;this.windows.push(e);var t=this.destination;return t.next(e),e},t.prototype.closeWindow=function(e){e.complete();var t=this.windows;t.splice(t.indexOf(e),1)},t}(c.Subscriber);return n.define=a,t.exports}),System.register("rxjs/operator/windowToggle",["rxjs/Subject","rxjs/Subscription","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e,t){return this.lift(new p(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subject"),a=require("rxjs/Subscription"),u=require("rxjs/util/tryCatch"),c=require("rxjs/util/errorObject"),l=require("rxjs/OuterSubscriber"),b=require("rxjs/util/subscribeToResult");e.windowToggle=r;var p=function(){function e(e,t){this.openings=e,this.closingSelector=t}return e.prototype.call=function(e,t){return t._subscribe(new h(e,this.openings,this.closingSelector))},e}(),h=function(e){function t(t,r,s){e.call(this,t),this.openings=r,this.closingSelector=s,this.contexts=[],this.add(this.openSubscription=b.subscribeToResult(this,r,r))}return o(t,e),t.prototype._next=function(e){var t=this.contexts;if(t)for(var r=t.length,s=0;r>s;s++)t[s].window.next(e)},t.prototype._error=function(t){var r=this.contexts;if(this.contexts=null,r)for(var s=r.length,i=-1;++i<s;){var o=r[i];o.window.error(t),o.subscription.unsubscribe()}e.prototype._error.call(this,t)},t.prototype._complete=function(){var t=this.contexts;if(this.contexts=null,t)for(var r=t.length,s=-1;++s<r;){var i=t[s];i.window.complete(),i.subscription.unsubscribe()}e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){var e=this.contexts;if(this.contexts=null,e)for(var t=e.length,r=-1;++r<t;){var s=e[r];s.window.unsubscribe(),s.subscription.unsubscribe()}},t.prototype.notifyNext=function(e,t,r,s,i){if(e===this.openings){var o=this.closingSelector,l=u.tryCatch(o)(t);if(l===c.errorObject)return this.error(c.errorObject.e);var p=new n.Subject,h=new a.Subscription,d={window:p,subscription:h};this.contexts.push(d);var f=b.subscribeToResult(this,l,d);f.isUnsubscribed?this.closeWindow(this.contexts.length-1):(f.context=d,h.add(f)),this.destination.next(p)}else this.closeWindow(this.contexts.indexOf(e))},t.prototype.notifyError=function(e){this.error(e)},t.prototype.notifyComplete=function(e){e!==this.openSubscription&&this.closeWindow(this.contexts.indexOf(e.context))},t.prototype.closeWindow=function(e){if(-1!==e){var t=this.contexts,r=t[e],s=r.window,i=r.subscription;t.splice(e,1),s.complete(),i.unsubscribe()}},t}(l.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/windowWhen",["rxjs/Subject","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(e){return this.lift(new b(e))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subject"),a=require("rxjs/util/tryCatch"),u=require("rxjs/util/errorObject"),c=require("rxjs/OuterSubscriber"),l=require("rxjs/util/subscribeToResult");e.windowWhen=r;var b=function(){function e(e){this.closingSelector=e}return e.prototype.call=function(e,t){return t._subscribe(new p(e,this.closingSelector))},e}(),p=function(e){function t(t,r){e.call(this,t),this.destination=t,this.closingSelector=r,this.openWindow()}return o(t,e),t.prototype.notifyNext=function(e,t,r,s,i){this.openWindow(i)},t.prototype.notifyError=function(e,t){this._error(e)},t.prototype.notifyComplete=function(e){this.openWindow(e)},t.prototype._next=function(e){this.window.next(e)},t.prototype._error=function(e){this.window.error(e),this.destination.error(e),this.unsubscribeClosingNotification()},t.prototype._complete=function(){this.window.complete(),this.destination.complete(),this.unsubscribeClosingNotification()},t.prototype.unsubscribeClosingNotification=function(){this.closingNotification&&this.closingNotification.unsubscribe()},t.prototype.openWindow=function(e){void 0===e&&(e=null),e&&(this.remove(e),e.unsubscribe());var t=this.window;t&&t.complete();var r=this.window=new n.Subject;this.destination.next(r);var s=a.tryCatch(this.closingSelector)();if(s===u.errorObject){var i=u.errorObject.e;this.destination.error(i),this.window.error(i)}else this.add(this.closingNotification=l.subscribeToResult(this,s))},t}(c.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/operator/withLatestFrom",["rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r;"function"==typeof e[e.length-1]&&(r=e.pop());var s=e;return this.lift(new u(s,r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/OuterSubscriber"),a=require("rxjs/util/subscribeToResult");e.withLatestFrom=r;var u=function(){function e(e,t){this.observables=e,this.project=t}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.observables,this.project))},e}(),c=function(e){function t(t,r,s){e.call(this,t),this.observables=r,this.project=s,this.toRespond=[];var i=r.length;this.values=new Array(i);for(var o=0;i>o;o++)this.toRespond.push(o);for(var o=0;i>o;o++){var n=r[o];this.add(a.subscribeToResult(this,n,n,o))}}return o(t,e),
t.prototype.notifyNext=function(e,t,r,s,i){this.values[r]=t;var o=this.toRespond;if(o.length>0){var n=o.indexOf(r);-1!==n&&o.splice(n,1)}},t.prototype.notifyComplete=function(){},t.prototype._next=function(e){if(0===this.toRespond.length){var t=[e].concat(this.values);this.project?this._tryProject(t):this.destination.next(t)}},t.prototype._tryProject=function(e){var t;try{t=this.project.apply(this,e)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(n.OuterSubscriber);return s.define=i,t.exports}),System.register("rxjs/add/operator/zip",["rxjs/Observable","rxjs/operator/zip"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/zip");return i.Observable.prototype.zip=o.zipProto,r.define=s,t.exports}),System.register("rxjs/operator/zipAll",["rxjs/operator/zip"],!0,function(require,e,t){function r(e){return this.lift(new o.ZipOperator(e))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/zip");return e.zipAll=r,s.define=i,t.exports}),System.register("rxjs/Operator",["rxjs/Subscriber"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Subscriber"),o=function(){function e(){}return e.prototype.call=function(e,t){return t._subscribe(new i.Subscriber(e))},e}();return e.Operator=o,r.define=s,t.exports}),System.register("rxjs/scheduler/VirtualTimeScheduler",["rxjs/Subscription"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subscription"),n=function(){function e(){this.actions=[],this.active=!1,this.scheduledId=null,this.index=0,this.sorted=!1,this.frame=0,this.maxFrames=750}return e.prototype.now=function(){return this.frame},e.prototype.flush=function(){for(var e=this.actions,t=this.maxFrames;e.length>0;){var r=e.shift();if(this.frame=r.delay,!(this.frame<=t))break;if(r.execute(),r.error)throw e.length=0,this.frame=0,r.error}e.length=0,this.frame=0},e.prototype.addAction=function(e){var t=this.actions;t.push(e),t.sort(function(e,t){return e.delay===t.delay?e.index===t.index?0:e.index>t.index?1:-1:e.delay>t.delay?1:-1})},e.prototype.schedule=function(e,t,r){return void 0===t&&(t=0),this.sorted=!1,new a(this,e,this.index++).schedule(r,t)},e.frameTimeFactor=10,e}();e.VirtualTimeScheduler=n;var a=function(e){function t(t,r,s){e.call(this),this.scheduler=t,this.work=r,this.index=s,this.calls=0}return i(t,e),t.prototype.schedule=function(e,r){if(void 0===r&&(r=0),this.isUnsubscribed)return this;var s=this.scheduler,i=null;return 0===this.calls++?i=this:(i=new t(s,this.work,s.index+=1),this.add(i)),i.state=e,i.delay=s.frame+r,s.addAction(i),this},t.prototype.execute=function(){if(this.isUnsubscribed)throw new Error("How did did we execute a canceled Action?");this.work(this.state)},t.prototype.unsubscribe=function(){var t=this.scheduler.actions,r=t.indexOf(this);this.work=void 0,this.state=void 0,this.scheduler=void 0,-1!==r&&t.splice(r,1),e.prototype.unsubscribe.call(this)},t}(o.Subscription);return r.define=s,t.exports}),System.register("rxjs/testing/SubscriptionLog",[],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=function(){function e(e,t){void 0===t&&(t=Number.POSITIVE_INFINITY),this.subscribedFrame=e,this.unsubscribedFrame=t}return e}();return e.SubscriptionLog=i,r.define=s,t.exports}),System.register("rxjs/util/applyMixins",[],!0,function(require,e,t){function r(e,t){for(var r=0,s=t.length;s>r;r++)for(var i=t[r],o=Object.getOwnPropertyNames(i.prototype),n=0,a=o.length;a>n;n++){var u=o[n];e.prototype[u]=i.prototype[u]}}var s=System.global,i=s.define;return s.define=void 0,e.applyMixins=r,s.define=i,t.exports}),System.register("rxjs/testing/HotObservable",["rxjs/Subject","rxjs/Subscription","rxjs/testing/SubscriptionLoggable","rxjs/util/applyMixins"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subject"),n=require("rxjs/Subscription"),a=require("rxjs/testing/SubscriptionLoggable"),u=require("rxjs/util/applyMixins"),c=function(e){function t(t,r){e.call(this),this.messages=t,this.subscriptions=[],this.scheduler=r}return i(t,e),t.prototype._subscribe=function(t){var r=this,s=r.logSubscribedFrame();return t.add(new n.Subscription(function(){r.logUnsubscribedFrame(s)})),e.prototype._subscribe.call(this,t)},t.prototype.setup=function(){for(var e=this,t=e.messages.length,r=0;t>r;r++)!function(){var t=e.messages[r];e.scheduler.schedule(function(){t.notification.observe(e)},t.frame)}()},t}(o.Subject);return e.HotObservable=c,u.applyMixins(c,[a.SubscriptionLoggable]),r.define=s,t.exports}),System.register("rxjs/util/AnimationFrame",["rxjs/util/root"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/util/root"),o=function(){function e(e){e.requestAnimationFrame?(this.cancelAnimationFrame=e.cancelAnimationFrame.bind(e),this.requestAnimationFrame=e.requestAnimationFrame.bind(e)):e.mozRequestAnimationFrame?(this.cancelAnimationFrame=e.mozCancelAnimationFrame.bind(e),this.requestAnimationFrame=e.mozRequestAnimationFrame.bind(e)):e.webkitRequestAnimationFrame?(this.cancelAnimationFrame=e.webkitCancelAnimationFrame.bind(e),this.requestAnimationFrame=e.webkitRequestAnimationFrame.bind(e)):e.msRequestAnimationFrame?(this.cancelAnimationFrame=e.msCancelAnimationFrame.bind(e),this.requestAnimationFrame=e.msRequestAnimationFrame.bind(e)):e.oRequestAnimationFrame?(this.cancelAnimationFrame=e.oCancelAnimationFrame.bind(e),this.requestAnimationFrame=e.oRequestAnimationFrame.bind(e)):(this.cancelAnimationFrame=e.clearTimeout.bind(e),this.requestAnimationFrame=function(t){return e.setTimeout(t,1e3/60)})}return e}();return e.RequestAnimationFrameDefinition=o,e.AnimationFrame=new o(i.root),r.define=s,t.exports}),System.register("rxjs/util/tryCatch",["rxjs/util/errorObject"],!0,function(require,e,t){function r(){try{return n.apply(this,arguments)}catch(e){return a.errorObject.e=e,a.errorObject}}function s(e){return n=e,r}var i=System.global,o=i.define;i.define=void 0;var n,a=require("rxjs/util/errorObject");return e.tryCatch=s,i.define=o,t.exports}),System.register("symbol-observable",["ponyfill"],!0,function(require,e,t){var r=System.global,s=r.define;return r.define=void 0,t.exports=require("ponyfill")(r||window||this),r.define=s,t.exports}),System.register("rxjs/observable/BoundCallbackObservable",["rxjs/Observable","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/AsyncSubject"],!0,function(require,e,t){function r(e){var t=e.value,r=e.subject;r.next(t),r.complete()}function s(e){var t=e.err,r=e.subject;r.error(t)}var i=System.global,o=i.define;i.define=void 0;var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},a=require("rxjs/Observable"),u=require("rxjs/util/tryCatch"),c=require("rxjs/util/errorObject"),l=require("rxjs/AsyncSubject"),b=function(e){function t(t,r,s,i){e.call(this),this.callbackFunc=t,this.selector=r,this.args=s,this.scheduler=i}return n(t,e),t.create=function(e,r,s){return void 0===r&&(r=void 0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o-0]=arguments[o];return new t(e,r,i,s)}},t.prototype._subscribe=function(e){var r=this.callbackFunc,s=this.args,i=this.scheduler,o=this.subject;if(i)return i.schedule(t.dispatch,0,{source:this,subscriber:e});if(!o){o=this.subject=new l.AsyncSubject;var n=function b(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=b.source,s=r.selector,i=r.subject;if(s){var o=u.tryCatch(s).apply(this,e);o===c.errorObject?i.error(c.errorObject.e):(i.next(o),i.complete())}else i.next(1===e.length?e[0]:e),i.complete()};n.source=this;var a=u.tryCatch(r).apply(this,s.concat(n));a===c.errorObject&&o.error(c.errorObject.e)}return o.subscribe(e)},t.dispatch=function(e){var t=this,i=e.source,o=e.subscriber,n=i.callbackFunc,a=i.args,b=i.scheduler,p=i.subject;if(!p){p=i.subject=new l.AsyncSubject;var h=function f(){for(var e=[],i=0;i<arguments.length;i++)e[i-0]=arguments[i];var o=f.source,n=o.selector,a=o.subject;if(n){var l=u.tryCatch(n).apply(this,e);l===c.errorObject?t.add(b.schedule(s,0,{err:c.errorObject.e,subject:a})):t.add(b.schedule(r,0,{value:l,subject:a}))}else{var p=1===e.length?e[0]:e;t.add(b.schedule(r,0,{value:p,subject:a}))}};h.source=i;var d=u.tryCatch(n).apply(this,a.concat(h));d===c.errorObject&&p.error(c.errorObject.e)}t.add(p.subscribe(o))},t}(a.Observable);return e.BoundCallbackObservable=b,i.define=o,t.exports}),System.register("rxjs/observable/bindNodeCallback",["rxjs/observable/BoundNodeCallbackObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/BoundNodeCallbackObservable");return e.bindNodeCallback=i.BoundNodeCallbackObservable.create,r.define=s,t.exports}),System.register("rxjs/observable/ArrayObservable",["rxjs/Observable","rxjs/observable/ScalarObservable","rxjs/observable/EmptyObservable","rxjs/util/isScheduler"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/observable/ScalarObservable"),a=require("rxjs/observable/EmptyObservable"),u=require("rxjs/util/isScheduler"),c=function(e){function t(t,r){e.call(this),this.array=t,this.scheduler=r,r||1!==t.length||(this._isScalar=!0,this.value=t[0])}return i(t,e),t.create=function(e,r){return new t(e,r)},t.of=function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];var s=e[e.length-1];u.isScheduler(s)?e.pop():s=null;var i=e.length;return i>1?new t(e,s):1===i?new n.ScalarObservable(e[0],s):new a.EmptyObservable(s)},t.dispatch=function(e){var t=e.array,r=e.index,s=e.count,i=e.subscriber;return r>=s?void i.complete():(i.next(t[r]),void(i.isUnsubscribed||(e.index=r+1,this.schedule(e))))},t.prototype._subscribe=function(e){var r=0,s=this.array,i=s.length,o=this.scheduler;if(o)return o.schedule(t.dispatch,0,{array:s,index:r,count:i,subscriber:e});for(var n=0;i>n&&!e.isUnsubscribed;n++)e.next(s[n]);e.complete()},t}(o.Observable);return e.ArrayObservable=c,r.define=s,t.exports}),System.register("rxjs/util/subscribeToResult",["rxjs/util/root","rxjs/util/isArray","rxjs/util/isPromise","rxjs/Observable","rxjs/symbol/iterator","rxjs/InnerSubscriber","symbol-observable"],!0,function(require,e,t){function r(e,t,r,s){var i=new l.InnerSubscriber(e,r,s);if(!i.isUnsubscribed){if(t instanceof u.Observable)return t._isScalar?(i.next(t.value),void i.complete()):t.subscribe(i);if(n.isArray(t)){for(var p=0,h=t.length;h>p&&!i.isUnsubscribed;p++)i.next(t[p]);i.isUnsubscribed||i.complete()}else{if(a.isPromise(t))return t.then(function(e){i.isUnsubscribed||(i.next(e),i.complete())},function(e){return i.error(e)}).then(null,function(e){o.root.setTimeout(function(){throw e})}),i;if("function"==typeof t[c.$$iterator]){for(var d=0,f=t;d<f.length;d++){var v=f[d];if(i.next(v),i.isUnsubscribed)break}i.isUnsubscribed||i.complete()}else if("function"==typeof t[b]){var x=t[b]();if("function"==typeof x.subscribe)return x.subscribe(new l.InnerSubscriber(e,r,s));i.error("invalid observable")}else i.error(new TypeError("unknown type returned"))}}}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/util/root"),n=require("rxjs/util/isArray"),a=require("rxjs/util/isPromise"),u=require("rxjs/Observable"),c=require("rxjs/symbol/iterator"),l=require("rxjs/InnerSubscriber"),b=require("symbol-observable");return e.subscribeToResult=r,s.define=i,t.exports}),System.register("rxjs/operator/concat",["rxjs/util/isScheduler","rxjs/observable/ArrayObservable","rxjs/operator/mergeAll"],!0,function(require,e,t){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return s.apply(void 0,[this].concat(e))}function s(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=null,s=e;return n.isScheduler(s[e.length-1])&&(r=s.pop()),new a.ArrayObservable(e,r).lift(new u.MergeAllOperator(1))}var i=System.global,o=i.define;i.define=void 0;var n=require("rxjs/util/isScheduler"),a=require("rxjs/observable/ArrayObservable"),u=require("rxjs/operator/mergeAll");return e.concat=r,e.concatStatic=s,i.define=o,t.exports}),System.register("rxjs/observable/defer",["rxjs/observable/DeferObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/DeferObservable");return e.defer=i.DeferObservable.create,r.define=s,t.exports}),System.register("rxjs/add/observable/empty",["rxjs/Observable","rxjs/observable/empty"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/empty");return i.Observable.empty=o.empty,r.define=s,t.exports}),System.register("rxjs/observable/forkJoin",["rxjs/observable/ForkJoinObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/ForkJoinObservable");return e.forkJoin=i.ForkJoinObservable.create,r.define=s,t.exports}),System.register("rxjs/operator/observeOn",["rxjs/Subscriber","rxjs/Notification"],!0,function(require,e,t){function r(e,t){return void 0===t&&(t=0),this.lift(new u(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/Notification");e.observeOn=r;var u=function(){function e(e,t){void 0===t&&(t=0),this.scheduler=e,this.delay=t}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.scheduler,this.delay))},e}();e.ObserveOnOperator=u;var c=function(e){function t(t,r,s){void 0===s&&(s=0),e.call(this,t),this.scheduler=r,this.delay=s}return o(t,e),t.dispatch=function(e){var t=e.notification,r=e.destination;t.observe(r)},t.prototype.scheduleMessage=function(e){this.add(this.scheduler.schedule(t.dispatch,this.delay,new l(e,this.destination)))},t.prototype._next=function(e){this.scheduleMessage(a.Notification.createNext(e))},t.prototype._error=function(e){this.scheduleMessage(a.Notification.createError(e))},t.prototype._complete=function(){this.scheduleMessage(a.Notification.createComplete())},t}(n.Subscriber);e.ObserveOnSubscriber=c;var l=function(){function e(e,t){this.notification=e,this.destination=t}return e}();return e.ObserveOnMessage=l,s.define=i,t.exports}),System.register("rxjs/observable/fromEvent",["rxjs/observable/FromEventObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/FromEventObservable");return e.fromEvent=i.FromEventObservable.create,r.define=s,t.exports}),System.register("rxjs/observable/fromEventPattern",["rxjs/observable/FromEventPatternObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/FromEventPatternObservable");return e.fromEventPattern=i.FromEventPatternObservable.create,r.define=s,t.exports}),System.register("rxjs/add/observable/fromPromise",["rxjs/Observable","rxjs/observable/fromPromise"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/fromPromise");return i.Observable.fromPromise=o.fromPromise,r.define=s,t.exports}),System.register("rxjs/add/observable/generate",["rxjs/Observable","rxjs/observable/GenerateObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/GenerateObservable");return i.Observable.generate=o.GenerateObservable.create,r.define=s,t.exports}),System.register("rxjs/observable/if",["rxjs/observable/IfObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/IfObservable");return e._if=i.IfObservable.create,r.define=s,t.exports}),System.register("rxjs/scheduler/QueueScheduler",["rxjs/scheduler/QueueAction","rxjs/scheduler/FutureAction"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/scheduler/QueueAction"),o=require("rxjs/scheduler/FutureAction"),n=function(){function e(){this.active=!1,this.actions=[],this.scheduledId=null}return e.prototype.now=function(){return Date.now()},e.prototype.flush=function(){if(!this.active&&!this.scheduledId){this.active=!0;for(var e=this.actions,t=null;t=e.shift();)if(t.execute(),t.error)throw this.active=!1,t.error;this.active=!1}},e.prototype.schedule=function(e,t,r){return void 0===t&&(t=0),0>=t?this.scheduleNow(e,r):this.scheduleLater(e,t,r)},e.prototype.scheduleNow=function(e,t){return new i.QueueAction(this,e).schedule(t)},e.prototype.scheduleLater=function(e,t,r){return new o.FutureAction(this,e).schedule(r,t)},e}();return e.QueueScheduler=n,r.define=s,t.exports}),System.register("rxjs/observable/merge",["rxjs/operator/merge"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/operator/merge");return e.merge=i.mergeStatic,r.define=s,t.exports}),System.register("rxjs/add/observable/race",["rxjs/Observable","rxjs/operator/race"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/race");return i.Observable.race=o.raceStatic,r.define=s,t.exports}),System.register("rxjs/observable/NeverObservable",["rxjs/Observable","rxjs/util/noop"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/util/noop"),a=function(e){function t(){e.call(this)}return i(t,e),t.create=function(){return new t},t.prototype._subscribe=function(e){n.noop()},t}(o.Observable);return e.NeverObservable=a,r.define=s,t.exports}),System.register("rxjs/add/observable/of",["rxjs/Observable","rxjs/observable/of"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/of");return i.Observable.of=o.of,r.define=s,t.exports}),System.register("rxjs/add/observable/onErrorResumeNext",["rxjs/Observable","rxjs/operator/onErrorResumeNext"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/onErrorResumeNext");return i.Observable.onErrorResumeNext=o.onErrorResumeNextStatic,r.define=s,t.exports}),System.register("rxjs/observable/range",["rxjs/observable/RangeObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/RangeObservable");return e.range=i.RangeObservable.create,r.define=s,t.exports}),System.register("rxjs/observable/using",["rxjs/observable/UsingObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/UsingObservable");return e.using=i.UsingObservable.create,r.define=s,t.exports}),System.register("rxjs/observable/throw",["rxjs/observable/ErrorObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/ErrorObservable");return e._throw=i.ErrorObservable.create,r.define=s,t.exports}),System.register("rxjs/observable/TimerObservable",["rxjs/util/isNumeric","rxjs/Observable","rxjs/scheduler/async","rxjs/util/isScheduler","rxjs/util/isDate"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/util/isNumeric"),n=require("rxjs/Observable"),a=require("rxjs/scheduler/async"),u=require("rxjs/util/isScheduler"),c=require("rxjs/util/isDate"),l=function(e){function t(t,r,s){void 0===t&&(t=0),e.call(this),this.period=-1,this.dueTime=0,o.isNumeric(r)?this.period=Number(r)<1&&1||Number(r):u.isScheduler(r)&&(s=r),u.isScheduler(s)||(s=a.async),this.scheduler=s,this.dueTime=c.isDate(t)?+t-this.scheduler.now():t}return i(t,e),t.create=function(e,r,s){return void 0===e&&(e=0),new t(e,r,s)},t.dispatch=function(e){var t=e.index,r=e.period,s=e.subscriber,i=this;if(s.next(t),!s.isUnsubscribed){if(-1===r)return s.complete();e.index=t+1,i.schedule(e,r)}},t.prototype._subscribe=function(e){var r=0,s=this,i=s.period,o=s.dueTime,n=s.scheduler;return n.schedule(t.dispatch,o,{index:r,period:i,subscriber:e})},t}(n.Observable);return e.TimerObservable=l,r.define=s,t.exports}),System.register("rxjs/observable/zip",["rxjs/operator/zip"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/operator/zip");return e.zip=i.zipStatic,r.define=s,t.exports}),System.register("rxjs/observable/dom/ajax",["rxjs/observable/dom/AjaxObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/dom/AjaxObservable");return e.ajax=i.AjaxObservable.create,r.define=s,t.exports}),System.register("rxjs/ReplaySubject",["rxjs/Subject","rxjs/scheduler/queue","rxjs/operator/observeOn"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subject"),n=require("rxjs/scheduler/queue"),a=require("rxjs/operator/observeOn"),u=function(e){function t(t,r,s){void 0===t&&(t=Number.POSITIVE_INFINITY),void 0===r&&(r=Number.POSITIVE_INFINITY),e.call(this),this.scheduler=s,this._events=[],this._bufferSize=1>t?1:t,this._windowTime=1>r?1:r}return i(t,e),t.prototype.next=function(t){var r=this._getNow();this._events.push(new c(r,t)),this._trimBufferThenGetEvents(),e.prototype.next.call(this,t)},t.prototype._subscribe=function(t){var r=this._trimBufferThenGetEvents(),s=this.scheduler;s&&t.add(t=new a.ObserveOnSubscriber(t,s));for(var i=r.length,o=0;i>o&&!t.isUnsubscribed;o++)t.next(r[o].value);return e.prototype._subscribe.call(this,t)},t.prototype._getNow=function(){return(this.scheduler||n.queue).now()},t.prototype._trimBufferThenGetEvents=function(){for(var e=this._getNow(),t=this._bufferSize,r=this._windowTime,s=this._events,i=s.length,o=0;i>o&&!(e-s[o].time<r);)o++;return i>t&&(o=Math.max(o,i-t)),o>0&&s.splice(0,o),s},t}(o.Subject);e.ReplaySubject=u;var c=function(){function e(e,t){this.time=e,this.value=t}return e}();return r.define=s,t.exports}),System.register("rxjs/add/operator/buffer",["rxjs/Observable","rxjs/operator/buffer"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/buffer");return i.Observable.prototype.buffer=o.buffer,r.define=s,t.exports}),System.register("rxjs/add/operator/bufferCount",["rxjs/Observable","rxjs/operator/bufferCount"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/bufferCount");return i.Observable.prototype.bufferCount=o.bufferCount,r.define=s,t.exports}),System.register("rxjs/add/operator/bufferTime",["rxjs/Observable","rxjs/operator/bufferTime"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/bufferTime");return i.Observable.prototype.bufferTime=o.bufferTime,r.define=s,t.exports}),System.register("rxjs/add/operator/bufferToggle",["rxjs/Observable","rxjs/operator/bufferToggle"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/bufferToggle");return i.Observable.prototype.bufferToggle=o.bufferToggle,r.define=s,t.exports}),System.register("rxjs/add/operator/bufferWhen",["rxjs/Observable","rxjs/operator/bufferWhen"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/bufferWhen");return i.Observable.prototype.bufferWhen=o.bufferWhen,r.define=s,t.exports}),System.register("rxjs/add/operator/cache",["rxjs/Observable","rxjs/operator/cache"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/cache");return i.Observable.prototype.cache=o.cache,r.define=s,t.exports}),System.register("rxjs/add/operator/catch",["rxjs/Observable","rxjs/operator/catch"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/catch");return i.Observable.prototype["catch"]=o._catch,r.define=s,t.exports}),System.register("rxjs/add/operator/combineAll",["rxjs/Observable","rxjs/operator/combineAll"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/combineAll");return i.Observable.prototype.combineAll=o.combineAll,r.define=s,t.exports}),System.register("rxjs/add/operator/concatAll",["rxjs/Observable","rxjs/operator/concatAll"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/concatAll");return i.Observable.prototype.concatAll=o.concatAll,r.define=s,t.exports}),System.register("rxjs/operator/concatMap",["rxjs/operator/mergeMap"],!0,function(require,e,t){function r(e,t){return this.lift(new o.MergeMapOperator(e,t,1))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/mergeMap");return e.concatMap=r,s.define=i,t.exports}),System.register("rxjs/operator/concatMapTo",["rxjs/operator/mergeMapTo"],!0,function(require,e,t){function r(e,t){return this.lift(new o.MergeMapToOperator(e,t,1))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/mergeMapTo");return e.concatMapTo=r,s.define=i,t.exports}),System.register("rxjs/add/operator/count",["rxjs/Observable","rxjs/operator/count"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/count");return i.Observable.prototype.count=o.count,r.define=s,t.exports}),System.register("rxjs/add/operator/dematerialize",["rxjs/Observable","rxjs/operator/dematerialize"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/dematerialize");return i.Observable.prototype.dematerialize=o.dematerialize,r.define=s,t.exports}),System.register("rxjs/add/operator/debounce",["rxjs/Observable","rxjs/operator/debounce"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/debounce");return i.Observable.prototype.debounce=o.debounce,r.define=s,t.exports}),System.register("rxjs/add/operator/debounceTime",["rxjs/Observable","rxjs/operator/debounceTime"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/debounceTime");return i.Observable.prototype.debounceTime=o.debounceTime,r.define=s,t.exports}),System.register("rxjs/add/operator/defaultIfEmpty",["rxjs/Observable","rxjs/operator/defaultIfEmpty"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/defaultIfEmpty");return i.Observable.prototype.defaultIfEmpty=o.defaultIfEmpty,r.define=s,t.exports}),System.register("rxjs/add/operator/delay",["rxjs/Observable","rxjs/operator/delay"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/delay");return i.Observable.prototype.delay=o.delay,r.define=s,t.exports}),System.register("rxjs/add/operator/delayWhen",["rxjs/Observable","rxjs/operator/delayWhen"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/delayWhen");return i.Observable.prototype.delayWhen=o.delayWhen,r.define=s,t.exports}),System.register("rxjs/add/operator/distinct",["rxjs/Observable","rxjs/operator/distinct"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/distinct");return i.Observable.prototype.distinct=o.distinct,r.define=s,t.exports}),System.register("rxjs/add/operator/distinctKey",["rxjs/Observable","rxjs/operator/distinctKey"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/distinctKey");return i.Observable.prototype.distinctKey=o.distinctKey,r.define=s,t.exports}),System.register("rxjs/add/operator/distinctUntilChanged",["rxjs/Observable","rxjs/operator/distinctUntilChanged"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/distinctUntilChanged");return i.Observable.prototype.distinctUntilChanged=o.distinctUntilChanged,r.define=s,t.exports}),System.register("rxjs/add/operator/distinctUntilKeyChanged",["rxjs/Observable","rxjs/operator/distinctUntilKeyChanged"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/distinctUntilKeyChanged");return i.Observable.prototype.distinctUntilKeyChanged=o.distinctUntilKeyChanged,r.define=s,t.exports}),System.register("rxjs/add/operator/do",["rxjs/Observable","rxjs/operator/do"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/do");return i.Observable.prototype["do"]=o._do,r.define=s,t.exports}),System.register("rxjs/add/operator/exhaust",["rxjs/Observable","rxjs/operator/exhaust"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/exhaust");return i.Observable.prototype.exhaust=o.exhaust,r.define=s,t.exports}),System.register("rxjs/add/operator/exhaustMap",["rxjs/Observable","rxjs/operator/exhaustMap"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/exhaustMap");return i.Observable.prototype.exhaustMap=o.exhaustMap,r.define=s,t.exports}),System.register("rxjs/add/operator/expand",["rxjs/Observable","rxjs/operator/expand"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/expand");return i.Observable.prototype.expand=o.expand,r.define=s,t.exports}),System.register("rxjs/operator/elementAt",["rxjs/Subscriber","rxjs/util/ArgumentOutOfRangeError"],!0,function(require,e,t){function r(e,t){return this.lift(new u(e,t))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/util/ArgumentOutOfRangeError");e.elementAt=r;var u=function(){function e(e,t){if(this.index=e,this.defaultValue=t,0>e)throw new a.ArgumentOutOfRangeError}return e.prototype.call=function(e,t){
return t._subscribe(new c(e,this.index,this.defaultValue))},e}(),c=function(e){function t(t,r,s){e.call(this,t),this.index=r,this.defaultValue=s}return o(t,e),t.prototype._next=function(e){0===this.index--&&(this.destination.next(e),this.destination.complete())},t.prototype._complete=function(){var e=this.destination;this.index>=0&&("undefined"!=typeof this.defaultValue?e.next(this.defaultValue):e.error(new a.ArgumentOutOfRangeError)),e.complete()},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/add/operator/filter",["rxjs/Observable","rxjs/operator/filter"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/filter");return i.Observable.prototype.filter=o.filter,r.define=s,t.exports}),System.register("rxjs/add/operator/finally",["rxjs/Observable","rxjs/operator/finally"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/finally");return i.Observable.prototype["finally"]=o._finally,r.define=s,t.exports}),System.register("rxjs/add/operator/find",["rxjs/Observable","rxjs/operator/find"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/find");return i.Observable.prototype.find=o.find,r.define=s,t.exports}),System.register("rxjs/add/operator/findIndex",["rxjs/Observable","rxjs/operator/findIndex"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/findIndex");return i.Observable.prototype.findIndex=o.findIndex,r.define=s,t.exports}),System.register("rxjs/operator/first",["rxjs/Subscriber","rxjs/util/EmptyError"],!0,function(require,e,t){function r(e,t,r){return this.lift(new u(e,t,r,this))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/util/EmptyError");e.first=r;var u=function(){function e(e,t,r,s){this.predicate=e,this.resultSelector=t,this.defaultValue=r,this.source=s}return e.prototype.call=function(e,t){return t._subscribe(new c(e,this.predicate,this.resultSelector,this.defaultValue,this.source))},e}(),c=function(e){function t(t,r,s,i,o){e.call(this,t),this.predicate=r,this.resultSelector=s,this.defaultValue=i,this.source=o,this.index=0,this.hasCompleted=!1}return o(t,e),t.prototype._next=function(e){var t=this.index++;this.predicate?this._tryPredicate(e,t):this._emit(e,t)},t.prototype._tryPredicate=function(e,t){var r;try{r=this.predicate(e,t,this.source)}catch(s){return void this.destination.error(s)}r&&this._emit(e,t)},t.prototype._emit=function(e,t){return this.resultSelector?void this._tryResultSelector(e,t):void this._emitFinal(e)},t.prototype._tryResultSelector=function(e,t){var r;try{r=this.resultSelector(e,t)}catch(s){return void this.destination.error(s)}this._emitFinal(r)},t.prototype._emitFinal=function(e){var t=this.destination;t.next(e),t.complete(),this.hasCompleted=!0},t.prototype._complete=function(){var e=this.destination;this.hasCompleted||"undefined"==typeof this.defaultValue?this.hasCompleted||e.error(new a.EmptyError):(e.next(this.defaultValue),e.complete())},t}(n.Subscriber);return s.define=i,t.exports}),System.register("rxjs/util/Map",["rxjs/util/root","rxjs/util/MapPolyfill"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/util/root"),o=require("rxjs/util/MapPolyfill");return e.Map=i.root.Map||function(){return o.MapPolyfill}(),r.define=s,t.exports}),System.register("rxjs/add/operator/ignoreElements",["rxjs/Observable","rxjs/operator/ignoreElements"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/ignoreElements");return i.Observable.prototype.ignoreElements=o.ignoreElements,r.define=s,t.exports}),System.register("rxjs/add/operator/isEmpty",["rxjs/Observable","rxjs/operator/isEmpty"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/isEmpty");return i.Observable.prototype.isEmpty=o.isEmpty,r.define=s,t.exports}),System.register("rxjs/add/operator/audit",["rxjs/Observable","rxjs/operator/audit"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/audit");return i.Observable.prototype.audit=o.audit,r.define=s,t.exports}),System.register("rxjs/add/operator/auditTime",["rxjs/Observable","rxjs/operator/auditTime"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/auditTime");return i.Observable.prototype.auditTime=o.auditTime,r.define=s,t.exports}),System.register("rxjs/add/operator/last",["rxjs/Observable","rxjs/operator/last"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/last");return i.Observable.prototype.last=o.last,r.define=s,t.exports}),System.register("rxjs/add/operator/let",["rxjs/Observable","rxjs/operator/let"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/let");return i.Observable.prototype.let=o.letProto,i.Observable.prototype.letBind=o.letProto,r.define=s,t.exports}),System.register("rxjs/add/operator/every",["rxjs/Observable","rxjs/operator/every"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/every");return i.Observable.prototype.every=o.every,r.define=s,t.exports}),System.register("rxjs/add/operator/map",["rxjs/Observable","rxjs/operator/map"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/map");return i.Observable.prototype.map=o.map,r.define=s,t.exports}),System.register("rxjs/add/operator/mapTo",["rxjs/Observable","rxjs/operator/mapTo"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/mapTo");return i.Observable.prototype.mapTo=o.mapTo,r.define=s,t.exports}),System.register("rxjs/add/operator/materialize",["rxjs/Observable","rxjs/operator/materialize"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/materialize");return i.Observable.prototype.materialize=o.materialize,r.define=s,t.exports}),System.register("rxjs/operator/max",["rxjs/operator/reduce"],!0,function(require,e,t){function r(e){var t="function"==typeof e?e:function(e,t){return e>t?e:t};return this.lift(new o.ReduceOperator(t))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/operator/reduce");return e.max=r,s.define=i,t.exports}),System.register("rxjs/add/operator/mergeScan",["rxjs/Observable","rxjs/operator/mergeScan"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/mergeScan");return i.Observable.prototype.mergeScan=o.mergeScan,r.define=s,t.exports}),System.register("rxjs/add/operator/min",["rxjs/Observable","rxjs/operator/min"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/min");return i.Observable.prototype.min=o.min,r.define=s,t.exports}),System.register("rxjs/operator/multicast",["rxjs/observable/MulticastObservable","rxjs/observable/ConnectableObservable"],!0,function(require,e,t){function r(e,t){var r;r="function"==typeof e?e:function(){return e};var s=new n.ConnectableObservable(this,r);return t?new o.MulticastObservable(this,s,t):s}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/observable/MulticastObservable"),n=require("rxjs/observable/ConnectableObservable");return e.multicast=r,s.define=i,t.exports}),System.register("rxjs/add/operator/pairwise",["rxjs/Observable","rxjs/operator/pairwise"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/pairwise");return i.Observable.prototype.pairwise=o.pairwise,r.define=s,t.exports}),System.register("rxjs/operator/partition",["rxjs/util/not","rxjs/operator/filter"],!0,function(require,e,t){function r(e,t){return[n.filter.call(this,e),n.filter.call(this,o.not(e,t))]}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/util/not"),n=require("rxjs/operator/filter");return e.partition=r,s.define=i,t.exports}),System.register("rxjs/add/operator/pluck",["rxjs/Observable","rxjs/operator/pluck"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/pluck");return i.Observable.prototype.pluck=o.pluck,r.define=s,t.exports}),System.register("rxjs/add/operator/publish",["rxjs/Observable","rxjs/operator/publish"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/publish");return i.Observable.prototype.publish=o.publish,r.define=s,t.exports}),System.register("rxjs/BehaviorSubject",["rxjs/Subject","rxjs/util/throwError","rxjs/util/ObjectUnsubscribedError"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subject"),n=require("rxjs/util/throwError"),a=require("rxjs/util/ObjectUnsubscribedError"),u=function(e){function t(t){e.call(this),this._value=t}return i(t,e),t.prototype.getValue=function(){if(this.hasError)n.throwError(this.thrownError);else{if(!this.isUnsubscribed)return this._value;n.throwError(new a.ObjectUnsubscribedError)}},Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),t.prototype._subscribe=function(t){var r=e.prototype._subscribe.call(this,t);return r&&!r.isUnsubscribed&&t.next(this._value),r},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(o.Subject);return e.BehaviorSubject=u,r.define=s,t.exports}),System.register("rxjs/add/operator/publishReplay",["rxjs/Observable","rxjs/operator/publishReplay"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/publishReplay");return i.Observable.prototype.publishReplay=o.publishReplay,r.define=s,t.exports}),System.register("rxjs/add/operator/publishLast",["rxjs/Observable","rxjs/operator/publishLast"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/publishLast");return i.Observable.prototype.publishLast=o.publishLast,r.define=s,t.exports}),System.register("rxjs/add/operator/repeat",["rxjs/Observable","rxjs/operator/repeat"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/repeat");return i.Observable.prototype.repeat=o.repeat,r.define=s,t.exports}),System.register("rxjs/add/operator/retry",["rxjs/Observable","rxjs/operator/retry"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/retry");return i.Observable.prototype.retry=o.retry,r.define=s,t.exports}),System.register("rxjs/add/operator/retryWhen",["rxjs/Observable","rxjs/operator/retryWhen"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/retryWhen");return i.Observable.prototype.retryWhen=o.retryWhen,r.define=s,t.exports}),System.register("rxjs/add/operator/sample",["rxjs/Observable","rxjs/operator/sample"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/sample");return i.Observable.prototype.sample=o.sample,r.define=s,t.exports}),System.register("rxjs/add/operator/sampleTime",["rxjs/Observable","rxjs/operator/sampleTime"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/sampleTime");return i.Observable.prototype.sampleTime=o.sampleTime,r.define=s,t.exports}),System.register("rxjs/add/operator/scan",["rxjs/Observable","rxjs/operator/scan"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/scan");return i.Observable.prototype.scan=o.scan,r.define=s,t.exports}),System.register("rxjs/add/operator/share",["rxjs/Observable","rxjs/operator/share"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/share");return i.Observable.prototype.share=o.share,r.define=s,t.exports}),System.register("rxjs/add/operator/single",["rxjs/Observable","rxjs/operator/single"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/single");return i.Observable.prototype.single=o.single,r.define=s,t.exports}),System.register("rxjs/add/operator/skip",["rxjs/Observable","rxjs/operator/skip"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/skip");return i.Observable.prototype.skip=o.skip,r.define=s,t.exports}),System.register("rxjs/add/operator/skipUntil",["rxjs/Observable","rxjs/operator/skipUntil"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/skipUntil");return i.Observable.prototype.skipUntil=o.skipUntil,r.define=s,t.exports}),System.register("rxjs/add/operator/skipWhile",["rxjs/Observable","rxjs/operator/skipWhile"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/skipWhile");return i.Observable.prototype.skipWhile=o.skipWhile,r.define=s,t.exports}),System.register("rxjs/add/operator/startWith",["rxjs/Observable","rxjs/operator/startWith"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/startWith");return i.Observable.prototype.startWith=o.startWith,r.define=s,t.exports}),System.register("rxjs/scheduler/AsapAction",["rxjs/util/Immediate","rxjs/scheduler/FutureAction"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/util/Immediate"),n=require("rxjs/scheduler/FutureAction"),a=function(e){function t(){e.apply(this,arguments)}return i(t,e),t.prototype._schedule=function(t,r){if(void 0===r&&(r=0),r>0)return e.prototype._schedule.call(this,t,r);this.delay=r,this.state=t;var s=this.scheduler;return s.actions.push(this),s.scheduledId||(s.scheduledId=o.Immediate.setImmediate(function(){s.scheduledId=null,s.flush()})),this},t.prototype._unsubscribe=function(){var t=this.scheduler,r=t.scheduledId,s=t.actions;e.prototype._unsubscribe.call(this),0===s.length&&(t.active=!1,null!=r&&(t.scheduledId=null,o.Immediate.clearImmediate(r)))},t}(n.FutureAction);return e.AsapAction=a,r.define=s,t.exports}),System.register("rxjs/add/operator/switch",["rxjs/Observable","rxjs/operator/switch"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/switch");return i.Observable.prototype["switch"]=o._switch,r.define=s,t.exports}),System.register("rxjs/add/operator/switchMap",["rxjs/Observable","rxjs/operator/switchMap"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/switchMap");return i.Observable.prototype.switchMap=o.switchMap,r.define=s,t.exports}),System.register("rxjs/add/operator/switchMapTo",["rxjs/Observable","rxjs/operator/switchMapTo"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/switchMapTo");return i.Observable.prototype.switchMapTo=o.switchMapTo,r.define=s,t.exports}),System.register("rxjs/add/operator/take",["rxjs/Observable","rxjs/operator/take"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/take");return i.Observable.prototype.take=o.take,r.define=s,t.exports}),System.register("rxjs/add/operator/takeLast",["rxjs/Observable","rxjs/operator/takeLast"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/takeLast");return i.Observable.prototype.takeLast=o.takeLast,r.define=s,t.exports}),System.register("rxjs/add/operator/takeUntil",["rxjs/Observable","rxjs/operator/takeUntil"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/takeUntil");return i.Observable.prototype.takeUntil=o.takeUntil,r.define=s,t.exports}),System.register("rxjs/add/operator/takeWhile",["rxjs/Observable","rxjs/operator/takeWhile"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/takeWhile");return i.Observable.prototype.takeWhile=o.takeWhile,r.define=s,t.exports}),System.register("rxjs/add/operator/throttle",["rxjs/Observable","rxjs/operator/throttle"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/throttle");return i.Observable.prototype.throttle=o.throttle,r.define=s,t.exports}),System.register("rxjs/add/operator/throttleTime",["rxjs/Observable","rxjs/operator/throttleTime"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/throttleTime");return i.Observable.prototype.throttleTime=o.throttleTime,r.define=s,t.exports}),System.register("rxjs/add/operator/timeInterval",["rxjs/Observable","rxjs/operator/timeInterval"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/timeInterval");return i.Observable.prototype.timeInterval=o.timeInterval,r.define=s,t.exports}),System.register("rxjs/add/operator/timeout",["rxjs/Observable","rxjs/operator/timeout"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/timeout");return i.Observable.prototype.timeout=o.timeout,r.define=s,t.exports}),System.register("rxjs/add/operator/timeoutWith",["rxjs/Observable","rxjs/operator/timeoutWith"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/timeoutWith");return i.Observable.prototype.timeoutWith=o.timeoutWith,r.define=s,t.exports}),System.register("rxjs/add/operator/timestamp",["rxjs/Observable","rxjs/operator/timestamp"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/timestamp");return i.Observable.prototype.timestamp=o.timestamp,r.define=s,t.exports}),System.register("rxjs/add/operator/toArray",["rxjs/Observable","rxjs/operator/toArray"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/toArray");return i.Observable.prototype.toArray=o.toArray,r.define=s,t.exports}),System.register("rxjs/add/operator/toPromise",["rxjs/Observable","rxjs/operator/toPromise"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/toPromise");return i.Observable.prototype.toPromise=o.toPromise,r.define=s,t.exports}),System.register("rxjs/add/operator/window",["rxjs/Observable","rxjs/operator/window"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/window");return i.Observable.prototype.window=o.window,r.define=s,t.exports}),System.register("rxjs/add/operator/windowCount",["rxjs/Observable","rxjs/operator/windowCount"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/windowCount");return i.Observable.prototype.windowCount=o.windowCount,r.define=s,t.exports}),System.register("rxjs/add/operator/windowTime",["rxjs/Observable","rxjs/operator/windowTime"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/windowTime");return i.Observable.prototype.windowTime=o.windowTime,r.define=s,t.exports}),System.register("rxjs/add/operator/windowToggle",["rxjs/Observable","rxjs/operator/windowToggle"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/windowToggle");return i.Observable.prototype.windowToggle=o.windowToggle,r.define=s,t.exports}),System.register("rxjs/add/operator/windowWhen",["rxjs/Observable","rxjs/operator/windowWhen"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/windowWhen");return i.Observable.prototype.windowWhen=o.windowWhen,r.define=s,t.exports}),System.register("rxjs/add/operator/withLatestFrom",["rxjs/Observable","rxjs/operator/withLatestFrom"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/withLatestFrom");return i.Observable.prototype.withLatestFrom=o.withLatestFrom,r.define=s,t.exports}),System.register("rxjs/add/operator/zipAll",["rxjs/Observable","rxjs/operator/zipAll"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/zipAll");return i.Observable.prototype.zipAll=o.zipAll,r.define=s,t.exports}),System.register("rxjs/testing/SubscriptionLoggable",["rxjs/testing/SubscriptionLog"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/testing/SubscriptionLog"),o=function(){function e(){this.subscriptions=[]}return e.prototype.logSubscribedFrame=function(){return this.subscriptions.push(new i.SubscriptionLog(this.scheduler.now())),this.subscriptions.length-1},e.prototype.logUnsubscribedFrame=function(e){var t=this.subscriptions,r=t[e];t[e]=new i.SubscriptionLog(r.subscribedFrame,this.scheduler.now())},e}();return e.SubscriptionLoggable=o,r.define=s,t.exports}),System.register("rxjs/scheduler/AnimationFrameAction",["rxjs/scheduler/FutureAction","rxjs/util/AnimationFrame"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/scheduler/FutureAction"),n=require("rxjs/util/AnimationFrame"),a=function(e){function t(){e.apply(this,arguments)}return i(t,e),t.prototype._schedule=function(t,r){if(void 0===r&&(r=0),r>0)return e.prototype._schedule.call(this,t,r);this.delay=r,this.state=t;var s=this.scheduler;return s.actions.push(this),s.scheduledId||(s.scheduledId=n.AnimationFrame.requestAnimationFrame(function(){s.scheduledId=null,s.flush()})),this},t.prototype._unsubscribe=function(){var t=this.scheduler,r=t.scheduledId,s=t.actions;e.prototype._unsubscribe.call(this),0===s.length&&(t.active=!1,null!=r&&(t.scheduledId=null,n.AnimationFrame.cancelAnimationFrame(r)))},t}(o.FutureAction);return e.AnimationFrameAction=a,r.define=s,t.exports}),System.register("rxjs/Subscription",["rxjs/util/isArray","rxjs/util/isObject","rxjs/util/isFunction","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/util/UnsubscriptionError"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/util/isArray"),o=require("rxjs/util/isObject"),n=require("rxjs/util/isFunction"),a=require("rxjs/util/tryCatch"),u=require("rxjs/util/errorObject"),c=require("rxjs/util/UnsubscriptionError"),l=function(){function e(e){this.isUnsubscribed=!1,e&&(this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var e,t=!1;if(!this.isUnsubscribed){this.isUnsubscribed=!0;var r=this,s=r._unsubscribe,l=r._subscriptions;if(this._subscriptions=null,n.isFunction(s)){var b=a.tryCatch(s).call(this);b===u.errorObject&&(t=!0,(e=e||[]).push(u.errorObject.e))}if(i.isArray(l))for(var p=-1,h=l.length;++p<h;){var d=l[p];if(o.isObject(d)){var b=a.tryCatch(d.unsubscribe).call(d);if(b===u.errorObject){t=!0,e=e||[];var f=u.errorObject.e;f instanceof c.UnsubscriptionError?e=e.concat(f.errors):e.push(f)}}}if(t)throw new c.UnsubscriptionError(e)}},e.prototype.add=function(t){if(t&&t!==this&&t!==e.EMPTY){var r=t;switch(typeof t){case"function":r=new e(t);case"object":if(r.isUnsubscribed||"function"!=typeof r.unsubscribe)break;this.isUnsubscribed?r.unsubscribe():(this._subscriptions||(this._subscriptions=[])).push(r);break;default:throw new Error("Unrecognized teardown "+t+" added to Subscription.")}return r}},e.prototype.remove=function(t){if(null!=t&&t!==this&&t!==e.EMPTY){var r=this._subscriptions;if(r){var s=r.indexOf(t);-1!==s&&r.splice(s,1)}}},e.EMPTY=function(e){return e.isUnsubscribed=!0,e}(new e),e}();return e.Subscription=l,r.define=s,t.exports}),System.register("rxjs/observable/bindCallback",["rxjs/observable/BoundCallbackObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/BoundCallbackObservable");return e.bindCallback=i.BoundCallbackObservable.create,r.define=s,t.exports}),System.register("rxjs/add/observable/bindNodeCallback",["rxjs/Observable","rxjs/observable/bindNodeCallback"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/bindNodeCallback");return i.Observable.bindNodeCallback=o.bindNodeCallback,r.define=s,t.exports}),System.register("rxjs/operator/combineLatest",["rxjs/observable/ArrayObservable","rxjs/util/isArray","rxjs/OuterSubscriber","rxjs/util/subscribeToResult"],!0,function(require,e,t){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=null;return"function"==typeof e[e.length-1]&&(r=e.pop()),1===e.length&&a.isArray(e[0])&&(e=e[0]),e.unshift(this),new n.ArrayObservable(e).lift(new b(r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/observable/ArrayObservable"),a=require("rxjs/util/isArray"),u=require("rxjs/OuterSubscriber"),c=require("rxjs/util/subscribeToResult"),l={};e.combineLatest=r;var b=function(){function e(e){this.project=e}return e.prototype.call=function(e,t){return t._subscribe(new p(e,this.project))},e}();e.CombineLatestOperator=b;var p=function(e){function t(t,r){e.call(this,t),this.project=r,this.active=0,this.values=[],this.observables=[]}return o(t,e),t.prototype._next=function(e){this.values.push(l),this.observables.push(e)},t.prototype._complete=function(){var e=this.observables,t=e.length;if(0===t)this.destination.complete();else{this.active=t,this.toRespond=t;for(var r=0;t>r;r++){var s=e[r];this.add(c.subscribeToResult(this,s,s,r))}}},t.prototype.notifyComplete=function(e){0===(this.active-=1)&&this.destination.complete()},t.prototype.notifyNext=function(e,t,r,s,i){var o=this.values,n=o[r],a=this.toRespond?n===l?--this.toRespond:this.toRespond:0;o[r]=t,0===a&&(this.project?this._tryProject(o):this.destination.next(o))},t.prototype._tryProject=function(e){var t;try{t=this.project.apply(this,e)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(u.OuterSubscriber);return e.CombineLatestSubscriber=p,s.define=i,t.exports}),System.register("rxjs/observable/concat",["rxjs/operator/concat"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/operator/concat");return e.concat=i.concatStatic,r.define=s,t.exports}),System.register("rxjs/add/observable/defer",["rxjs/Observable","rxjs/observable/defer"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/defer");return i.Observable.defer=o.defer,r.define=s,t.exports}),System.register("rxjs/add/observable/forkJoin",["rxjs/Observable","rxjs/observable/forkJoin"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/forkJoin");return i.Observable.forkJoin=o.forkJoin,r.define=s,t.exports}),System.register("rxjs/observable/FromObservable",["rxjs/util/isArray","rxjs/util/isFunction","rxjs/util/isPromise","rxjs/util/isScheduler","rxjs/observable/PromiseObservable","rxjs/observable/IteratorObservable","rxjs/observable/ArrayObservable","rxjs/observable/ArrayLikeObservable","rxjs/symbol/iterator","rxjs/Observable","rxjs/operator/observeOn","symbol-observable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/util/isArray"),n=require("rxjs/util/isFunction"),a=require("rxjs/util/isPromise"),u=require("rxjs/util/isScheduler"),c=require("rxjs/observable/PromiseObservable"),l=require("rxjs/observable/IteratorObservable"),b=require("rxjs/observable/ArrayObservable"),p=require("rxjs/observable/ArrayLikeObservable"),h=require("rxjs/symbol/iterator"),d=require("rxjs/Observable"),f=require("rxjs/operator/observeOn"),v=require("symbol-observable"),x=function(e){return e&&"number"==typeof e.length},y=function(e){function t(t,r){e.call(this,null),this.ish=t,this.scheduler=r}return i(t,e),t.create=function(e,r,s,i){var f=null,y=null;if(n.isFunction(r)?(f=i||null,y=r):u.isScheduler(f)&&(f=r),null!=e){if("function"==typeof e[v])return e instanceof d.Observable&&!f?e:new t(e,f);if(o.isArray(e))return new b.ArrayObservable(e,f);if(a.isPromise(e))return new c.PromiseObservable(e,f);if("function"==typeof e[h.$$iterator]||"string"==typeof e)return new l.IteratorObservable(e,null,null,f);if(x(e))return new p.ArrayLikeObservable(e,y,s,f)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")},t.prototype._subscribe=function(e){var t=this.ish,r=this.scheduler;return null==r?t[v]().subscribe(e):t[v]().subscribe(new f.ObserveOnSubscriber(e,r,0))},t}(d.Observable);return e.FromObservable=y,r.define=s,t.exports}),System.register("rxjs/add/observable/fromEvent",["rxjs/Observable","rxjs/observable/fromEvent"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/fromEvent");return i.Observable.fromEvent=o.fromEvent,r.define=s,t.exports}),System.register("rxjs/add/observable/fromEventPattern",["rxjs/Observable","rxjs/observable/fromEventPattern"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/fromEventPattern");return i.Observable.fromEventPattern=o.fromEventPattern,
r.define=s,t.exports}),System.register("rxjs/add/observable/if",["rxjs/Observable","rxjs/observable/if"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/if");return i.Observable["if"]=o._if,r.define=s,t.exports}),System.register("rxjs/scheduler/AsyncScheduler",["rxjs/scheduler/FutureAction","rxjs/scheduler/QueueScheduler"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/scheduler/FutureAction"),n=require("rxjs/scheduler/QueueScheduler"),a=function(e){function t(){e.apply(this,arguments)}return i(t,e),t.prototype.scheduleNow=function(e,t){return new o.FutureAction(this,e).schedule(t,0)},t}(n.QueueScheduler);return e.AsyncScheduler=a,r.define=s,t.exports}),System.register("rxjs/add/observable/merge",["rxjs/Observable","rxjs/observable/merge"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/merge");return i.Observable.merge=o.merge,r.define=s,t.exports}),System.register("rxjs/observable/never",["rxjs/observable/NeverObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/NeverObservable");return e.never=i.NeverObservable.create,r.define=s,t.exports}),System.register("rxjs/add/observable/range",["rxjs/Observable","rxjs/observable/range"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/range");return i.Observable.range=o.range,r.define=s,t.exports}),System.register("rxjs/add/observable/using",["rxjs/Observable","rxjs/observable/using"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/using");return i.Observable.using=o.using,r.define=s,t.exports}),System.register("rxjs/add/observable/throw",["rxjs/Observable","rxjs/observable/throw"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/throw");return i.Observable["throw"]=o._throw,r.define=s,t.exports}),System.register("rxjs/observable/timer",["rxjs/observable/TimerObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/TimerObservable");return e.timer=i.TimerObservable.create,r.define=s,t.exports}),System.register("rxjs/add/observable/zip",["rxjs/Observable","rxjs/observable/zip"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/zip");return i.Observable.zip=o.zip,r.define=s,t.exports}),System.register("rxjs/add/observable/dom/ajax",["rxjs/Observable","rxjs/observable/dom/ajax"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/dom/ajax");return i.Observable.ajax=o.ajax,r.define=s,t.exports}),System.register("rxjs/observable/dom/WebSocketSubject",["rxjs/Subject","rxjs/Subscriber","rxjs/Observable","rxjs/Subscription","rxjs/util/root","rxjs/ReplaySubject","rxjs/util/tryCatch","rxjs/util/errorObject","rxjs/util/assign"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Subject"),n=require("rxjs/Subscriber"),a=require("rxjs/Observable"),u=require("rxjs/Subscription"),c=require("rxjs/util/root"),l=require("rxjs/ReplaySubject"),b=require("rxjs/util/tryCatch"),p=require("rxjs/util/errorObject"),h=require("rxjs/util/assign"),d=function(e){function t(t,r){if(e.call(this),this._output=new o.Subject,this.WebSocketCtor=c.root.WebSocket,"string"==typeof t?this.url=t:h.assign(this,t),!this.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new l.ReplaySubject}return i(t,e),t.prototype.resultSelector=function(e){return JSON.parse(e.data)},t.create=function(e){return new t(e)},t.prototype.multiplex=function(e,t,r){var s=this;return new a.Observable(function(i){var o=b.tryCatch(e)();o===p.errorObject?i.error(p.errorObject.e):s.next(o);var n=s.subscribe(function(e){var t=b.tryCatch(r)(e);t===p.errorObject?i.error(p.errorObject.e):t&&i.next(e)},function(e){return i.error(e)},function(){return i.complete()});return function(){var e=b.tryCatch(t)();e===p.errorObject?i.error(p.errorObject.e):s.next(e),n.unsubscribe()}})},t.prototype._connectSocket=function(){var e=this,t=this.protocol?new WebSocket(this.url,this.protocol):new WebSocket(this.url);this.socket=t;var r=new u.Subscription(function(){e.socket=null,t&&1===t.readyState&&t.close()}),s=this._output;t.onopen=function(i){var o=e.openObserver;o&&o.next(i);var a=e.destination;e.destination=n.Subscriber.create(function(e){return 1===t.readyState&&t.send(e)},function(r){var i=e.closingObserver;i&&i.next(void 0),r&&r.code?t.close(r.code,r.reason):s.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")),e.destination=new l.ReplaySubject,e.socket=null},function(){var r=e.closingObserver;r&&r.next(void 0),t.close(),e.destination=new l.ReplaySubject,e.socket=null}),a&&a instanceof l.ReplaySubject&&r.add(a.subscribe(e.destination))},t.onerror=function(e){return s.error(e)},t.onclose=function(t){var r=e.closeObserver;r&&r.next(t),t.wasClean?s.complete():s.error(t)},t.onmessage=function(t){var r=b.tryCatch(e.resultSelector)(t);r===p.errorObject?s.error(p.errorObject.e):s.next(r)}},t.prototype._subscribe=function(e){var t=this;this.socket||this._connectSocket();var r=new u.Subscription;return r.add(this._output.subscribe(e)),r.add(function(){var e=t.socket;e&&1===e.readyState&&(e.close(),t.socket=null)}),r},t.prototype.unsubscribe=function(){var t=this.socket;t&&1===t.readyState&&(t.close(),this.socket=null),e.prototype.unsubscribe.call(this),this.destination=new l.ReplaySubject},t}(o.AnonymousSubject);return e.WebSocketSubject=d,r.define=s,t.exports}),System.register("rxjs/add/operator/concatMap",["rxjs/Observable","rxjs/operator/concatMap"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/concatMap");return i.Observable.prototype.concatMap=o.concatMap,r.define=s,t.exports}),System.register("rxjs/add/operator/concatMapTo",["rxjs/Observable","rxjs/operator/concatMapTo"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/concatMapTo");return i.Observable.prototype.concatMapTo=o.concatMapTo,r.define=s,t.exports}),System.register("rxjs/add/operator/elementAt",["rxjs/Observable","rxjs/operator/elementAt"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/elementAt");return i.Observable.prototype.elementAt=o.elementAt,r.define=s,t.exports}),System.register("rxjs/add/operator/first",["rxjs/Observable","rxjs/operator/first"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/first");return i.Observable.prototype.first=o.first,r.define=s,t.exports}),System.register("rxjs/operator/groupBy",["rxjs/Subscriber","rxjs/Subscription","rxjs/Observable","rxjs/Subject","rxjs/util/Map","rxjs/util/FastMap"],!0,function(require,e,t){function r(e,t,r){return this.lift(new p(this,e,t,r))}var s=System.global,i=s.define;s.define=void 0;var o=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},n=require("rxjs/Subscriber"),a=require("rxjs/Subscription"),u=require("rxjs/Observable"),c=require("rxjs/Subject"),l=require("rxjs/util/Map"),b=require("rxjs/util/FastMap");e.groupBy=r;var p=function(){function e(e,t,r,s){this.source=e,this.keySelector=t,this.elementSelector=r,this.durationSelector=s}return e.prototype.call=function(e,t){return t._subscribe(new h(e,this.keySelector,this.elementSelector,this.durationSelector))},e}(),h=function(e){function t(t,r,s,i){e.call(this,t),this.keySelector=r,this.elementSelector=s,this.durationSelector=i,this.groups=null,this.attemptedToUnsubscribe=!1,this.count=0}return o(t,e),t.prototype._next=function(e){var t;try{t=this.keySelector(e)}catch(r){return void this.error(r)}this._group(e,t)},t.prototype._group=function(e,t){var r=this.groups;r||(r=this.groups="string"==typeof t?new b.FastMap:new l.Map);var s,i=r.get(t);if(this.elementSelector)try{s=this.elementSelector(e)}catch(o){this.error(o)}else s=e;if(!i){r.set(t,i=new c.Subject);var n=new f(t,i,this);if(this.destination.next(n),this.durationSelector){var a=void 0;try{a=this.durationSelector(new f(t,i))}catch(o){return void this.error(o)}this.add(a.subscribe(new d(t,i,this)))}}i.isUnsubscribed||i.next(s)},t.prototype._error=function(e){var t=this.groups;t&&(t.forEach(function(t,r){t.error(e)}),t.clear()),this.destination.error(e)},t.prototype._complete=function(){var e=this.groups;e&&(e.forEach(function(e,t){e.complete()}),e.clear()),this.destination.complete()},t.prototype.removeGroup=function(e){this.groups["delete"](e)},t.prototype.unsubscribe=function(){this.isUnsubscribed||this.attemptedToUnsubscribe||(this.attemptedToUnsubscribe=!0,0===this.count&&e.prototype.unsubscribe.call(this))},t}(n.Subscriber),d=function(e){function t(t,r,s){e.call(this),this.key=t,this.group=r,this.parent=s}return o(t,e),t.prototype._next=function(e){this._complete()},t.prototype._error=function(e){var t=this.group;t.isUnsubscribed||t.error(e),this.parent.removeGroup(this.key)},t.prototype._complete=function(){var e=this.group;e.isUnsubscribed||e.complete(),this.parent.removeGroup(this.key)},t}(n.Subscriber),f=function(e){function t(t,r,s){e.call(this),this.key=t,this.groupSubject=r,this.refCountSubscription=s}return o(t,e),t.prototype._subscribe=function(e){var t=new a.Subscription,r=this,s=r.refCountSubscription,i=r.groupSubject;return s&&!s.isUnsubscribed&&t.add(new v(s)),t.add(i.subscribe(e)),t},t}(u.Observable);e.GroupedObservable=f;var v=function(e){function t(t){e.call(this),this.parent=t,t.count++}return o(t,e),t.prototype.unsubscribe=function(){var t=this.parent;t.isUnsubscribed||this.isUnsubscribed||(e.prototype.unsubscribe.call(this),t.count-=1,0===t.count&&t.attemptedToUnsubscribe&&t.unsubscribe())},t}(a.Subscription);return s.define=i,t.exports}),System.register("rxjs/add/operator/max",["rxjs/Observable","rxjs/operator/max"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/max");return i.Observable.prototype.max=o.max,r.define=s,t.exports}),System.register("rxjs/add/operator/multicast",["rxjs/Observable","rxjs/operator/multicast"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/multicast");return i.Observable.prototype.multicast=o.multicast,r.define=s,t.exports}),System.register("rxjs/add/operator/partition",["rxjs/Observable","rxjs/operator/partition"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/partition");return i.Observable.prototype.partition=o.partition,r.define=s,t.exports}),System.register("rxjs/operator/publishBehavior",["rxjs/BehaviorSubject","rxjs/operator/multicast"],!0,function(require,e,t){function r(e){return n.multicast.call(this,new o.BehaviorSubject(e))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/BehaviorSubject"),n=require("rxjs/operator/multicast");return e.publishBehavior=r,s.define=i,t.exports}),System.register("rxjs/scheduler/AsapScheduler",["rxjs/scheduler/AsapAction","rxjs/scheduler/QueueScheduler"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/scheduler/AsapAction"),n=require("rxjs/scheduler/QueueScheduler"),a=function(e){function t(){e.apply(this,arguments)}return i(t,e),t.prototype.scheduleNow=function(e,t){return new o.AsapAction(this,e).schedule(t)},t}(n.QueueScheduler);return e.AsapScheduler=a,r.define=s,t.exports}),System.register("rxjs/testing/ColdObservable",["rxjs/Observable","rxjs/Subscription","rxjs/testing/SubscriptionLoggable","rxjs/util/applyMixins"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/Subscription"),a=require("rxjs/testing/SubscriptionLoggable"),u=require("rxjs/util/applyMixins"),c=function(e){function t(t,r){e.call(this,function(e){var t=this,r=t.logSubscribedFrame();return e.add(new n.Subscription(function(){t.logUnsubscribedFrame(r)})),t.scheduleMessages(e),e}),this.messages=t,this.subscriptions=[],this.scheduler=r}return i(t,e),t.prototype.scheduleMessages=function(e){for(var t=this.messages.length,r=0;t>r;r++){var s=this.messages[r];e.add(this.scheduler.schedule(function(e){var t=e.message,r=e.subscriber;t.notification.observe(r)},s.frame,{message:s,subscriber:e}))}},t}(o.Observable);return e.ColdObservable=c,u.applyMixins(c,[a.SubscriptionLoggable]),r.define=s,t.exports}),System.register("rxjs/scheduler/AnimationFrameScheduler",["rxjs/scheduler/QueueScheduler","rxjs/scheduler/AnimationFrameAction"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/scheduler/QueueScheduler"),n=require("rxjs/scheduler/AnimationFrameAction"),a=function(e){function t(){e.apply(this,arguments)}return i(t,e),t.prototype.scheduleNow=function(e,t){return new n.AnimationFrameAction(this,e).schedule(t)},t}(o.QueueScheduler);return e.AnimationFrameScheduler=a,r.define=s,t.exports}),System.register("rxjs/Subscriber",["rxjs/util/isFunction","rxjs/Subscription","rxjs/Observer","rxjs/symbol/rxSubscriber"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/util/isFunction"),n=require("rxjs/Subscription"),a=require("rxjs/Observer"),u=require("rxjs/symbol/rxSubscriber"),c=function(e){function t(r,s,i){switch(e.call(this),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=a.empty;break;case 1:if(!r){this.destination=a.empty;break}if("object"==typeof r){r instanceof t?(this.destination=r,this.destination.add(this)):(this.syncErrorThrowable=!0,this.destination=new l(this,r));break}default:this.syncErrorThrowable=!0,this.destination=new l(this,r,s,i)}}return i(t,e),t.prototype[u.$$rxSubscriber]=function(){return this},t.create=function(e,r,s){var i=new t(e,r,s);return i.syncErrorThrowable=!1,i},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.isUnsubscribed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t}(n.Subscription);e.Subscriber=c;var l=function(e){function t(t,r,s,i){e.call(this),this._parent=t;var n,a=this;o.isFunction(r)?n=r:r&&(a=r,n=r.next,s=r.error,i=r.complete,o.isFunction(a.unsubscribe)&&this.add(a.unsubscribe.bind(a)),a.unsubscribe=this.unsubscribe.bind(this)),this._context=a,this._next=n,this._error=s,this._complete=i}return i(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parent;t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parent;if(this._error)t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else{if(!t.syncErrorThrowable)throw this.unsubscribe(),e;t.syncErrorValue=e,t.syncErrorThrown=!0,this.unsubscribe()}}},t.prototype.complete=function(){if(!this.isStopped){var e=this._parent;this._complete?e.syncErrorThrowable?(this.__tryOrSetError(e,this._complete),this.unsubscribe()):(this.__tryOrUnsub(this._complete),this.unsubscribe()):this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(r){throw this.unsubscribe(),r}},t.prototype.__tryOrSetError=function(e,t,r){try{t.call(this._context,r)}catch(s){return e.syncErrorValue=s,e.syncErrorThrown=!0,!0}return!1},t.prototype._unsubscribe=function(){var e=this._parent;this._context=null,this._parent=null,e.unsubscribe()},t}(c);return r.define=s,t.exports}),System.register("rxjs/add/observable/bindCallback",["rxjs/Observable","rxjs/observable/bindCallback"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/bindCallback");return i.Observable.bindCallback=o.bindCallback,r.define=s,t.exports}),System.register("rxjs/observable/combineLatest",["rxjs/util/isScheduler","rxjs/util/isArray","rxjs/observable/ArrayObservable","rxjs/operator/combineLatest"],!0,function(require,e,t){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r=null,s=null;return o.isScheduler(e[e.length-1])&&(s=e.pop()),"function"==typeof e[e.length-1]&&(r=e.pop()),1===e.length&&n.isArray(e[0])&&(e=e[0]),new a.ArrayObservable(e,s).lift(new u.CombineLatestOperator(r))}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/util/isScheduler"),n=require("rxjs/util/isArray"),a=require("rxjs/observable/ArrayObservable"),u=require("rxjs/operator/combineLatest");return e.combineLatest=r,s.define=i,t.exports}),System.register("rxjs/add/observable/concat",["rxjs/Observable","rxjs/observable/concat"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/concat");return i.Observable.concat=o.concat,r.define=s,t.exports}),System.register("rxjs/observable/from",["rxjs/observable/FromObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/FromObservable");return e.from=i.FromObservable.create,r.define=s,t.exports}),System.register("rxjs/scheduler/async",["rxjs/scheduler/AsyncScheduler"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/scheduler/AsyncScheduler");return e.async=new i.AsyncScheduler,r.define=s,t.exports}),System.register("rxjs/add/observable/never",["rxjs/Observable","rxjs/observable/never"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/never");return i.Observable.never=o.never,r.define=s,t.exports}),System.register("rxjs/add/observable/timer",["rxjs/Observable","rxjs/observable/timer"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/timer");return i.Observable.timer=o.timer,r.define=s,t.exports}),System.register("rxjs/observable/dom/webSocket",["rxjs/observable/dom/WebSocketSubject"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/dom/WebSocketSubject");return e.webSocket=i.WebSocketSubject.create,r.define=s,t.exports}),System.register("rxjs/add/operator/groupBy",["rxjs/Observable","rxjs/operator/groupBy"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/groupBy");return i.Observable.prototype.groupBy=o.groupBy,r.define=s,t.exports}),System.register("rxjs/add/operator/publishBehavior",["rxjs/Observable","rxjs/operator/publishBehavior"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/publishBehavior");return i.Observable.prototype.publishBehavior=o.publishBehavior,r.define=s,t.exports}),System.register("rxjs/scheduler/asap",["rxjs/scheduler/AsapScheduler"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/scheduler/AsapScheduler");return e.asap=new i.AsapScheduler,r.define=s,t.exports}),System.register("rxjs/testing/TestScheduler",["rxjs/Observable","rxjs/scheduler/VirtualTimeScheduler","rxjs/Notification","rxjs/testing/ColdObservable","rxjs/testing/HotObservable","rxjs/testing/SubscriptionLog"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/scheduler/VirtualTimeScheduler"),a=require("rxjs/Notification"),u=require("rxjs/testing/ColdObservable"),c=require("rxjs/testing/HotObservable"),l=require("rxjs/testing/SubscriptionLog"),b=function(e){function t(t){e.call(this),this.assertDeepEqual=t,this.hotObservables=[],this.coldObservables=[],this.flushTests=[]}return i(t,e),t.prototype.createTime=function(e){var r=e.indexOf("|");if(-1===r)throw new Error('Marble diagram for time should have a completion marker "|"');return r*t.frameTimeFactor},t.prototype.createColdObservable=function(e,r,s){if(-1!==e.indexOf("^"))throw new Error('Cold observable cannot have subscription offset "^"');if(-1!==e.indexOf("!"))throw new Error('Cold observable cannot have unsubscription marker "!"');var i=t.parseMarbles(e,r,s),o=new u.ColdObservable(i,this);return this.coldObservables.push(o),o},t.prototype.createHotObservable=function(e,r,s){if(-1!==e.indexOf("!"))throw new Error('Hot observable cannot have unsubscription marker "!"');var i=t.parseMarbles(e,r,s),o=new c.HotObservable(i,this);return this.hotObservables.push(o),o},t.prototype.materializeInnerObservable=function(e,t){var r=this,s=[];return e.subscribe(function(e){s.push({frame:r.frame-t,notification:a.Notification.createNext(e)})},function(e){s.push({frame:r.frame-t,notification:a.Notification.createError(e)})},function(){s.push({frame:r.frame-t,notification:a.Notification.createComplete()})}),s},t.prototype.expectObservable=function(e,r){var s=this;void 0===r&&(r=null);var i,n=[],u={actual:n,ready:!1},c=t.parseMarblesAsSubscriptions(r).unsubscribedFrame;return this.schedule(function(){i=e.subscribe(function(e){var t=e;e instanceof o.Observable&&(t=s.materializeInnerObservable(t,s.frame)),n.push({frame:s.frame,notification:a.Notification.createNext(t)})},function(e){n.push({frame:s.frame,notification:a.Notification.createError(e)})},function(){n.push({frame:s.frame,notification:a.Notification.createComplete()})})},0),c!==Number.POSITIVE_INFINITY&&this.schedule(function(){return i.unsubscribe()},c),this.flushTests.push(u),{toBe:function(e,r,s){u.ready=!0,u.expected=t.parseMarbles(e,r,s,!0)}}},t.prototype.expectSubscriptions=function(e){var r={actual:e,ready:!1};return this.flushTests.push(r),{toBe:function(e){var s="string"==typeof e?[e]:e;r.ready=!0,r.expected=s.map(function(e){return t.parseMarblesAsSubscriptions(e)})}}},t.prototype.flush=function(){for(var t=this.hotObservables;t.length>0;)t.shift().setup();e.prototype.flush.call(this);for(var r=this.flushTests.filter(function(e){return e.ready});r.length>0;){var s=r.shift();this.assertDeepEqual(s.actual,s.expected)}},t.parseMarblesAsSubscriptions=function(e){if("string"!=typeof e)return new l.SubscriptionLog(Number.POSITIVE_INFINITY);for(var t=e.length,r=-1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,o=0;t>o;o++){var n=o*this.frameTimeFactor,a=e[o];switch(a){case"-":case" ":break;case"(":r=n;break;case")":r=-1;break;case"^":if(s!==Number.POSITIVE_INFINITY)throw new Error("Found a second subscription point '^' in a subscription marble diagram. There can only be one.");s=r>-1?r:n;break;case"!":if(i!==Number.POSITIVE_INFINITY)throw new Error("Found a second subscription point '^' in a subscription marble diagram. There can only be one.");i=r>-1?r:n;break;default:throw new Error("There can only be '^' and '!' markers in a subscription marble diagram. Found instead '"+a+"'.")}}return 0>i?new l.SubscriptionLog(s):new l.SubscriptionLog(s,i)},t.parseMarbles=function(e,t,r,s){if(void 0===s&&(s=!1),-1!==e.indexOf("!"))throw new Error('Conventional marble diagrams cannot have the unsubscription marker "!"');for(var i=e.length,o=[],n=e.indexOf("^"),c=-1===n?0:n*-this.frameTimeFactor,l="object"!=typeof t?function(e){return e}:function(e){return s&&t[e]instanceof u.ColdObservable?t[e].messages:t[e]},b=-1,p=0;i>p;p++){var h=p*this.frameTimeFactor+c,d=void 0,f=e[p];switch(f){case"-":case" ":break;case"(":b=h;break;case")":b=-1;break;case"|":d=a.Notification.createComplete();break;case"^":break;case"#":d=a.Notification.createError(r||"error");break;default:d=a.Notification.createNext(l(f))}d&&o.push({frame:b>-1?b:h,notification:d})}return o},t}(n.VirtualTimeScheduler);return e.TestScheduler=b,r.define=s,t.exports}),System.register("rxjs/scheduler/animationFrame",["rxjs/scheduler/AnimationFrameScheduler"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/scheduler/AnimationFrameScheduler");return e.animationFrame=new i.AnimationFrameScheduler,r.define=s,t.exports}),System.register("rxjs/util/toSubscriber",["rxjs/Subscriber","rxjs/symbol/rxSubscriber"],!0,function(require,e,t){function r(e,t,r){if(e){if(e instanceof o.Subscriber)return e;if(e[n.$$rxSubscriber])return e[n.$$rxSubscriber]()}return e||t||r?new o.Subscriber(e,t,r):new o.Subscriber}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/Subscriber"),n=require("rxjs/symbol/rxSubscriber");return e.toSubscriber=r,s.define=i,t.exports}),System.register("rxjs/add/observable/combineLatest",["rxjs/Observable","rxjs/observable/combineLatest"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/combineLatest");return i.Observable.combineLatest=o.combineLatest,r.define=s,t.exports}),System.register("rxjs/add/observable/from",["rxjs/Observable","rxjs/observable/from"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/from");return i.Observable.from=o.from,r.define=s,t.exports}),System.register("rxjs/observable/IntervalObservable",["rxjs/util/isNumeric","rxjs/Observable","rxjs/scheduler/async"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/util/isNumeric"),n=require("rxjs/Observable"),a=require("rxjs/scheduler/async"),u=function(e){function t(t,r){void 0===t&&(t=0),void 0===r&&(r=a.async),e.call(this),this.period=t,this.scheduler=r,(!o.isNumeric(t)||0>t)&&(this.period=0),r&&"function"==typeof r.schedule||(this.scheduler=a.async)}return i(t,e),t.create=function(e,r){return void 0===e&&(e=0),void 0===r&&(r=a.async),new t(e,r)},t.dispatch=function(e){var t=e.index,r=e.subscriber,s=e.period;r.next(t),r.isUnsubscribed||(e.index+=1,this.schedule(e,s))},t.prototype._subscribe=function(e){var r=0,s=this.period,i=this.scheduler;e.add(i.schedule(t.dispatch,s,{index:r,subscriber:e,period:s}))},t}(n.Observable);return e.IntervalObservable=u,r.define=s,t.exports}),System.register("rxjs/add/observable/dom/webSocket",["rxjs/Observable","rxjs/observable/dom/webSocket"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/dom/webSocket");return i.Observable.webSocket=o.webSocket,r.define=s,t.exports}),System.register("rxjs/observable/SubscribeOnObservable",["rxjs/Observable","rxjs/scheduler/asap","rxjs/util/isNumeric"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/scheduler/asap"),a=require("rxjs/util/isNumeric"),u=function(e){function t(t,r,s){void 0===r&&(r=0),void 0===s&&(s=n.asap),e.call(this),this.source=t,this.delayTime=r,this.scheduler=s,(!a.isNumeric(r)||0>r)&&(this.delayTime=0),s&&"function"==typeof s.schedule||(this.scheduler=n.asap)}return i(t,e),t.create=function(e,r,s){return void 0===r&&(r=0),void 0===s&&(s=n.asap),new t(e,r,s)},t.dispatch=function(e){var t=e.source,r=e.subscriber;return t.subscribe(r)},t.prototype._subscribe=function(e){var r=this.delayTime,s=this.source,i=this.scheduler;return i.schedule(t.dispatch,r,{source:s,subscriber:e})},t}(o.Observable);return e.SubscribeOnObservable=u,r.define=s,t.exports}),System.register("rxjs/Observable",["rxjs/util/root","rxjs/util/toSubscriber","symbol-observable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/util/root"),o=require("rxjs/util/toSubscriber"),n=require("symbol-observable"),a=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var s=this.operator,i=o.toSubscriber(e,t,r);if(s?s.call(i,this):i.add(this._subscribe(i)),i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},e.prototype.forEach=function(e,t){var r=this;if(t||(i.root.Rx&&i.root.Rx.config&&i.root.Rx.config.Promise?t=i.root.Rx.config.Promise:i.root.Promise&&(t=i.root.Promise)),!t)throw new Error("no Promise impl found");return new t(function(t,s){var i=r.subscribe(function(t){if(i)try{e(t)}catch(r){s(r),i.unsubscribe()}else e(t)},s,t)})},e.prototype._subscribe=function(e){return this.source.subscribe(e)},e.prototype[n]=function(){return this},e.create=function(t){return new e(t)},e}();return e.Observable=a,r.define=s,t.exports}),System.register("rxjs/observable/interval",["rxjs/observable/IntervalObservable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/observable/IntervalObservable");return e.interval=i.IntervalObservable.create,r.define=s,t.exports}),System.register("rxjs/operator/subscribeOn",["rxjs/observable/SubscribeOnObservable"],!0,function(require,e,t){function r(e,t){return void 0===t&&(t=0),new o.SubscribeOnObservable(this,t,e)}var s=System.global,i=s.define;s.define=void 0;var o=require("rxjs/observable/SubscribeOnObservable");return e.subscribeOn=r,s.define=i,t.exports}),System.register("rxjs/Subject",["rxjs/Observable","rxjs/Subscriber","rxjs/Subscription","rxjs/util/ObjectUnsubscribedError","rxjs/SubjectSubscription","rxjs/symbol/rxSubscriber"],!0,function(require,e,t){
var r=System.global,s=r.define;r.define=void 0;var i=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},o=require("rxjs/Observable"),n=require("rxjs/Subscriber"),a=require("rxjs/Subscription"),u=require("rxjs/util/ObjectUnsubscribedError"),c=require("rxjs/SubjectSubscription"),l=require("rxjs/symbol/rxSubscriber"),b=function(e){function t(t){e.call(this,t),this.destination=t}return i(t,e),t}(n.Subscriber);e.SubjectSubscriber=b;var p=function(e){function t(){e.call(this),this.observers=[],this.isUnsubscribed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}return i(t,e),t.prototype[l.$$rxSubscriber]=function(){return new b(this)},t.prototype.lift=function(e){var t=new h(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.isUnsubscribed)throw new u.ObjectUnsubscribedError;if(!this.isStopped)for(var t=this.observers,r=t.length,s=t.slice(),i=0;r>i;i++)s[i].next(e)},t.prototype.error=function(e){if(this.isUnsubscribed)throw new u.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,r=t.length,s=t.slice(),i=0;r>i;i++)s[i].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.isUnsubscribed)throw new u.ObjectUnsubscribedError;this.isStopped=!0;for(var e=this.observers,t=e.length,r=e.slice(),s=0;t>s;s++)r[s].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.isUnsubscribed=!0,this.observers=null},t.prototype._subscribe=function(e){if(this.isUnsubscribed)throw new u.ObjectUnsubscribedError;return this.hasError?(e.error(this.thrownError),a.Subscription.EMPTY):this.isStopped?(e.complete(),a.Subscription.EMPTY):(this.observers.push(e),new c.SubjectSubscription(this,e))},t.prototype.asObservable=function(){var e=new o.Observable;return e.source=this,e},t.create=function(e,t){return new h(e,t)},t}(o.Observable);e.Subject=p;var h=function(e){function t(t,r){e.call(this),this.destination=t,this.source=r}return i(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){var t=this.source;return t?this.source.subscribe(e):a.Subscription.EMPTY},t}(p);return e.AnonymousSubject=h,r.define=s,t.exports}),System.register("rxjs/add/observable/interval",["rxjs/Observable","rxjs/observable/interval"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/observable/interval");return i.Observable.interval=o.interval,r.define=s,t.exports}),System.register("rxjs/add/operator/subscribeOn",["rxjs/Observable","rxjs/operator/subscribeOn"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Observable"),o=require("rxjs/operator/subscribeOn");return i.Observable.prototype.subscribeOn=o.subscribeOn,r.define=s,t.exports}),System.register("rxjs/Rx",["rxjs/Subject","rxjs/Observable","rxjs/add/observable/bindCallback","rxjs/add/observable/bindNodeCallback","rxjs/add/observable/combineLatest","rxjs/add/observable/concat","rxjs/add/observable/defer","rxjs/add/observable/empty","rxjs/add/observable/forkJoin","rxjs/add/observable/from","rxjs/add/observable/fromEvent","rxjs/add/observable/fromEventPattern","rxjs/add/observable/fromPromise","rxjs/add/observable/generate","rxjs/add/observable/if","rxjs/add/observable/interval","rxjs/add/observable/merge","rxjs/add/observable/race","rxjs/add/observable/never","rxjs/add/observable/of","rxjs/add/observable/onErrorResumeNext","rxjs/add/observable/range","rxjs/add/observable/using","rxjs/add/observable/throw","rxjs/add/observable/timer","rxjs/add/observable/zip","rxjs/add/observable/dom/ajax","rxjs/add/observable/dom/webSocket","rxjs/add/operator/buffer","rxjs/add/operator/bufferCount","rxjs/add/operator/bufferTime","rxjs/add/operator/bufferToggle","rxjs/add/operator/bufferWhen","rxjs/add/operator/cache","rxjs/add/operator/catch","rxjs/add/operator/combineAll","rxjs/add/operator/combineLatest","rxjs/add/operator/concat","rxjs/add/operator/concatAll","rxjs/add/operator/concatMap","rxjs/add/operator/concatMapTo","rxjs/add/operator/count","rxjs/add/operator/dematerialize","rxjs/add/operator/debounce","rxjs/add/operator/debounceTime","rxjs/add/operator/defaultIfEmpty","rxjs/add/operator/delay","rxjs/add/operator/delayWhen","rxjs/add/operator/distinct","rxjs/add/operator/distinctKey","rxjs/add/operator/distinctUntilChanged","rxjs/add/operator/distinctUntilKeyChanged","rxjs/add/operator/do","rxjs/add/operator/exhaust","rxjs/add/operator/exhaustMap","rxjs/add/operator/expand","rxjs/add/operator/elementAt","rxjs/add/operator/filter","rxjs/add/operator/finally","rxjs/add/operator/find","rxjs/add/operator/findIndex","rxjs/add/operator/first","rxjs/add/operator/groupBy","rxjs/add/operator/ignoreElements","rxjs/add/operator/isEmpty","rxjs/add/operator/audit","rxjs/add/operator/auditTime","rxjs/add/operator/last","rxjs/add/operator/let","rxjs/add/operator/every","rxjs/add/operator/map","rxjs/add/operator/mapTo","rxjs/add/operator/materialize","rxjs/add/operator/max","rxjs/add/operator/merge","rxjs/add/operator/mergeAll","rxjs/add/operator/mergeMap","rxjs/add/operator/mergeMapTo","rxjs/add/operator/mergeScan","rxjs/add/operator/min","rxjs/add/operator/multicast","rxjs/add/operator/observeOn","rxjs/add/operator/onErrorResumeNext","rxjs/add/operator/pairwise","rxjs/add/operator/partition","rxjs/add/operator/pluck","rxjs/add/operator/publish","rxjs/add/operator/publishBehavior","rxjs/add/operator/publishReplay","rxjs/add/operator/publishLast","rxjs/add/operator/race","rxjs/add/operator/reduce","rxjs/add/operator/repeat","rxjs/add/operator/retry","rxjs/add/operator/retryWhen","rxjs/add/operator/sample","rxjs/add/operator/sampleTime","rxjs/add/operator/scan","rxjs/add/operator/share","rxjs/add/operator/single","rxjs/add/operator/skip","rxjs/add/operator/skipUntil","rxjs/add/operator/skipWhile","rxjs/add/operator/startWith","rxjs/add/operator/subscribeOn","rxjs/add/operator/switch","rxjs/add/operator/switchMap","rxjs/add/operator/switchMapTo","rxjs/add/operator/take","rxjs/add/operator/takeLast","rxjs/add/operator/takeUntil","rxjs/add/operator/takeWhile","rxjs/add/operator/throttle","rxjs/add/operator/throttleTime","rxjs/add/operator/timeInterval","rxjs/add/operator/timeout","rxjs/add/operator/timeoutWith","rxjs/add/operator/timestamp","rxjs/add/operator/toArray","rxjs/add/operator/toPromise","rxjs/add/operator/window","rxjs/add/operator/windowCount","rxjs/add/operator/windowTime","rxjs/add/operator/windowToggle","rxjs/add/operator/windowWhen","rxjs/add/operator/withLatestFrom","rxjs/add/operator/zip","rxjs/add/operator/zipAll","rxjs/Operator","rxjs/Subscription","rxjs/Subscriber","rxjs/AsyncSubject","rxjs/ReplaySubject","rxjs/BehaviorSubject","rxjs/observable/MulticastObservable","rxjs/observable/ConnectableObservable","rxjs/Notification","rxjs/util/EmptyError","rxjs/util/ArgumentOutOfRangeError","rxjs/util/ObjectUnsubscribedError","rxjs/util/UnsubscriptionError","rxjs/operator/timeInterval","rxjs/operator/timestamp","rxjs/testing/TestScheduler","rxjs/scheduler/VirtualTimeScheduler","rxjs/observable/dom/AjaxObservable","rxjs/scheduler/asap","rxjs/scheduler/async","rxjs/scheduler/queue","rxjs/scheduler/animationFrame","rxjs/symbol/rxSubscriber","rxjs/symbol/iterator","symbol-observable"],!0,function(require,e,t){var r=System.global,s=r.define;r.define=void 0;var i=require("rxjs/Subject");e.Subject=i.Subject;var o=require("rxjs/Observable");e.Observable=o.Observable,require("rxjs/add/observable/bindCallback"),require("rxjs/add/observable/bindNodeCallback"),require("rxjs/add/observable/combineLatest"),require("rxjs/add/observable/concat"),require("rxjs/add/observable/defer"),require("rxjs/add/observable/empty"),require("rxjs/add/observable/forkJoin"),require("rxjs/add/observable/from"),require("rxjs/add/observable/fromEvent"),require("rxjs/add/observable/fromEventPattern"),require("rxjs/add/observable/fromPromise"),require("rxjs/add/observable/generate"),require("rxjs/add/observable/if"),require("rxjs/add/observable/interval"),require("rxjs/add/observable/merge"),require("rxjs/add/observable/race"),require("rxjs/add/observable/never"),require("rxjs/add/observable/of"),require("rxjs/add/observable/onErrorResumeNext"),require("rxjs/add/observable/range"),require("rxjs/add/observable/using"),require("rxjs/add/observable/throw"),require("rxjs/add/observable/timer"),require("rxjs/add/observable/zip"),require("rxjs/add/observable/dom/ajax"),require("rxjs/add/observable/dom/webSocket"),require("rxjs/add/operator/buffer"),require("rxjs/add/operator/bufferCount"),require("rxjs/add/operator/bufferTime"),require("rxjs/add/operator/bufferToggle"),require("rxjs/add/operator/bufferWhen"),require("rxjs/add/operator/cache"),require("rxjs/add/operator/catch"),require("rxjs/add/operator/combineAll"),require("rxjs/add/operator/combineLatest"),require("rxjs/add/operator/concat"),require("rxjs/add/operator/concatAll"),require("rxjs/add/operator/concatMap"),require("rxjs/add/operator/concatMapTo"),require("rxjs/add/operator/count"),require("rxjs/add/operator/dematerialize"),require("rxjs/add/operator/debounce"),require("rxjs/add/operator/debounceTime"),require("rxjs/add/operator/defaultIfEmpty"),require("rxjs/add/operator/delay"),require("rxjs/add/operator/delayWhen"),require("rxjs/add/operator/distinct"),require("rxjs/add/operator/distinctKey"),require("rxjs/add/operator/distinctUntilChanged"),require("rxjs/add/operator/distinctUntilKeyChanged"),require("rxjs/add/operator/do"),require("rxjs/add/operator/exhaust"),require("rxjs/add/operator/exhaustMap"),require("rxjs/add/operator/expand"),require("rxjs/add/operator/elementAt"),require("rxjs/add/operator/filter"),require("rxjs/add/operator/finally"),require("rxjs/add/operator/find"),require("rxjs/add/operator/findIndex"),require("rxjs/add/operator/first"),require("rxjs/add/operator/groupBy"),require("rxjs/add/operator/ignoreElements"),require("rxjs/add/operator/isEmpty"),require("rxjs/add/operator/audit"),require("rxjs/add/operator/auditTime"),require("rxjs/add/operator/last"),require("rxjs/add/operator/let"),require("rxjs/add/operator/every"),require("rxjs/add/operator/map"),require("rxjs/add/operator/mapTo"),require("rxjs/add/operator/materialize"),require("rxjs/add/operator/max"),require("rxjs/add/operator/merge"),require("rxjs/add/operator/mergeAll"),require("rxjs/add/operator/mergeMap"),require("rxjs/add/operator/mergeMapTo"),require("rxjs/add/operator/mergeScan"),require("rxjs/add/operator/min"),require("rxjs/add/operator/multicast"),require("rxjs/add/operator/observeOn"),require("rxjs/add/operator/onErrorResumeNext"),require("rxjs/add/operator/pairwise"),require("rxjs/add/operator/partition"),require("rxjs/add/operator/pluck"),require("rxjs/add/operator/publish"),require("rxjs/add/operator/publishBehavior"),require("rxjs/add/operator/publishReplay"),require("rxjs/add/operator/publishLast"),require("rxjs/add/operator/race"),require("rxjs/add/operator/reduce"),require("rxjs/add/operator/repeat"),require("rxjs/add/operator/retry"),require("rxjs/add/operator/retryWhen"),require("rxjs/add/operator/sample"),require("rxjs/add/operator/sampleTime"),require("rxjs/add/operator/scan"),require("rxjs/add/operator/share"),require("rxjs/add/operator/single"),require("rxjs/add/operator/skip"),require("rxjs/add/operator/skipUntil"),require("rxjs/add/operator/skipWhile"),require("rxjs/add/operator/startWith"),require("rxjs/add/operator/subscribeOn"),require("rxjs/add/operator/switch"),require("rxjs/add/operator/switchMap"),require("rxjs/add/operator/switchMapTo"),require("rxjs/add/operator/take"),require("rxjs/add/operator/takeLast"),require("rxjs/add/operator/takeUntil"),require("rxjs/add/operator/takeWhile"),require("rxjs/add/operator/throttle"),require("rxjs/add/operator/throttleTime"),require("rxjs/add/operator/timeInterval"),require("rxjs/add/operator/timeout"),require("rxjs/add/operator/timeoutWith"),require("rxjs/add/operator/timestamp"),require("rxjs/add/operator/toArray"),require("rxjs/add/operator/toPromise"),require("rxjs/add/operator/window"),require("rxjs/add/operator/windowCount"),require("rxjs/add/operator/windowTime"),require("rxjs/add/operator/windowToggle"),require("rxjs/add/operator/windowWhen"),require("rxjs/add/operator/withLatestFrom"),require("rxjs/add/operator/zip"),require("rxjs/add/operator/zipAll");var n=require("rxjs/Operator");e.Operator=n.Operator;var a=require("rxjs/Subscription");e.Subscription=a.Subscription;var u=require("rxjs/Subscriber");e.Subscriber=u.Subscriber;var c=require("rxjs/AsyncSubject");e.AsyncSubject=c.AsyncSubject;var l=require("rxjs/ReplaySubject");e.ReplaySubject=l.ReplaySubject;var b=require("rxjs/BehaviorSubject");e.BehaviorSubject=b.BehaviorSubject;var p=require("rxjs/observable/MulticastObservable");e.MulticastObservable=p.MulticastObservable;var h=require("rxjs/observable/ConnectableObservable");e.ConnectableObservable=h.ConnectableObservable;var d=require("rxjs/Notification");e.Notification=d.Notification;var f=require("rxjs/util/EmptyError");e.EmptyError=f.EmptyError;var v=require("rxjs/util/ArgumentOutOfRangeError");e.ArgumentOutOfRangeError=v.ArgumentOutOfRangeError;var x=require("rxjs/util/ObjectUnsubscribedError");e.ObjectUnsubscribedError=x.ObjectUnsubscribedError;var y=require("rxjs/util/UnsubscriptionError");e.UnsubscriptionError=y.UnsubscriptionError;var j=require("rxjs/operator/timeInterval");e.TimeInterval=j.TimeInterval;var m=require("rxjs/operator/timestamp");e.Timestamp=m.Timestamp;var S=require("rxjs/testing/TestScheduler");e.TestScheduler=S.TestScheduler;var O=require("rxjs/scheduler/VirtualTimeScheduler");e.VirtualTimeScheduler=O.VirtualTimeScheduler;var g=require("rxjs/observable/dom/AjaxObservable");e.AjaxResponse=g.AjaxResponse,e.AjaxError=g.AjaxError,e.AjaxTimeoutError=g.AjaxTimeoutError;var w=require("rxjs/scheduler/asap"),_=require("rxjs/scheduler/async"),T=require("rxjs/scheduler/queue"),E=require("rxjs/scheduler/animationFrame"),A=require("rxjs/symbol/rxSubscriber"),C=require("rxjs/symbol/iterator"),I=require("symbol-observable"),P={asap:w.asap,async:_.async,queue:T.queue,animationFrame:E.animationFrame};e.Scheduler=P;var N={rxSubscriber:A.$$rxSubscriber,observable:I,iterator:C.$$iterator};return e.Symbol=N,r.define=s,t.exports});
//# sourceMappingURL=Rx.min.js.map
