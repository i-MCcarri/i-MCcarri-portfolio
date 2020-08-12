!function(t,e,n){"use strict"
function r(t,e){return e=e||Error,function(){var n,r,i=2,o=arguments,a=o[0],s="["+(t?t+":":"")+a+"] ",u=o[1]
for(s+=u.replace(/\{\d+\}/g,function(t){var e=+t.slice(1,-1),n=e+i
return n<o.length?bt(o[n]):t}),s+="\nhttp://errors.angularjs.org/1.5.3/"+(t?t+"/":"")+a,r=i,n="?";r<o.length;r++,n="&")s+=n+"p"+(r-i)+"="+encodeURIComponent(bt(o[r]))
return new e(s)}}function i(t){if(null==t||T(t))return!1
if(Wr(t)||C(t)||Pr&&t instanceof Pr)return!0
var e="length"in Object(t)&&t.length
return S(e)&&(e>=0&&(e-1 in t||t instanceof Array)||"function"==typeof t.item)}function o(t,e,n){var r,a
if(t)if(k(t))for(r in t)"prototype"==r||"length"==r||"name"==r||t.hasOwnProperty&&!t.hasOwnProperty(r)||e.call(n,t[r],r,t)
else if(Wr(t)||i(t)){var s="object"!=typeof t
for(r=0,a=t.length;r<a;r++)(s||r in t)&&e.call(n,t[r],r,t)}else if(t.forEach&&t.forEach!==o)t.forEach(e,n,t)
else if(x(t))for(r in t)e.call(n,t[r],r,t)
else if("function"==typeof t.hasOwnProperty)for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t)
else for(r in t)Or.call(t,r)&&e.call(n,t[r],r,t)
return t}function a(t,e,n){for(var r=Object.keys(t).sort(),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i])
return r}function s(t){return function(e,n){t(n,e)}}function u(){return++zr}function c(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function l(t,e,n){for(var r=t.$$hashKey,i=0,o=e.length;i<o;++i){var a=e[i]
if(w(a)||k(a))for(var s=Object.keys(a),u=0,f=s.length;u<f;u++){var h=s[u],p=a[h]
n&&w(p)?E(p)?t[h]=new Date(p.valueOf()):A(p)?t[h]=new RegExp(p):p.nodeName?t[h]=p.cloneNode(!0):R(p)?t[h]=p.clone():(w(t[h])||(t[h]=Wr(p)?[]:{}),l(t[h],[p],!0)):t[h]=p}}return c(t,r),t}function f(t){return l(t,qr.call(arguments,1),!1)}function h(t){return l(t,qr.call(arguments,1),!0)}function p(t){return parseInt(t,10)}function d(t,e){return f(Object.create(t),e)}function $(){}function v(t){return t}function m(t){return function(){return t}}function g(t){return k(t.toString)&&t.toString!==Lr}function y(t){return"undefined"==typeof t}function b(t){return"undefined"!=typeof t}function w(t){return null!==t&&"object"==typeof t}function x(t){return null!==t&&"object"==typeof t&&!Ur(t)}function C(t){return"string"==typeof t}function S(t){return"number"==typeof t}function E(t){return"[object Date]"===Lr.call(t)}function k(t){return"function"==typeof t}function A(t){return"[object RegExp]"===Lr.call(t)}function T(t){return t&&t.window===t}function O(t){return t&&t.$evalAsync&&t.$watch}function M(t){return"[object File]"===Lr.call(t)}function D(t){return"[object FormData]"===Lr.call(t)}function N(t){return"[object Blob]"===Lr.call(t)}function j(t){return"boolean"==typeof t}function V(t){return t&&k(t.then)}function P(t){return t&&S(t.length)&&Gr.test(Lr.call(t))}function I(t){return"[object ArrayBuffer]"===Lr.call(t)}function R(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function q(t){var e,n={},r=t.split(",")
for(e=0;e<r.length;e++)n[r[e]]=!0
return n}function _(t){return Mr(t.nodeName||t[0]&&t[0].nodeName)}function F(t,e){var n=t.indexOf(e)
return n>=0&&t.splice(n,1),n}function L(t,e){function r(t,e){var n,r=e.$$hashKey
if(Wr(t))for(var o=0,a=t.length;o<a;o++)e.push(i(t[o]))
else if(x(t))for(n in t)e[n]=i(t[n])
else if(t&&"function"==typeof t.hasOwnProperty)for(n in t)t.hasOwnProperty(n)&&(e[n]=i(t[n]))
else for(n in t)Or.call(t,n)&&(e[n]=i(t[n]))
return c(e,r),e}function i(t){if(!w(t))return t
var e=s.indexOf(t)
if(e!==-1)return u[e]
if(T(t)||O(t))throw Hr("cpws","Can't copy! Making copies of Window or Scope instances is not supported.")
var i=!1,o=a(t)
return o===n&&(o=Wr(t)?[]:Object.create(Ur(t)),i=!0),s.push(t),u.push(o),i?r(t,o):o}function a(t){switch(Lr.call(t)){case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return new t.constructor(i(t.buffer))
case"[object ArrayBuffer]":if(!t.slice){var e=new ArrayBuffer(t.byteLength)
return new Uint8Array(e).set(new Uint8Array(t)),e}return t.slice(0)
case"[object Boolean]":case"[object Number]":case"[object String]":case"[object Date]":return new t.constructor(t.valueOf())
case"[object RegExp]":var n=new RegExp(t.source,t.toString().match(/[^\/]*$/)[0])
return n.lastIndex=t.lastIndex,n
case"[object Blob]":return new t.constructor([t],{type:t.type})}if(k(t.cloneNode))return t.cloneNode(!0)}var s=[],u=[]
if(e){if(P(e)||I(e))throw Hr("cpta","Can't copy! TypedArray destination cannot be mutated.")
if(t===e)throw Hr("cpi","Can't copy! Source and destination are identical.")
return Wr(e)?e.length=0:o(e,function(t,n){"$$hashKey"!==n&&delete e[n]}),s.push(t),u.push(e),r(t,e)}return i(t)}function U(t,e){if(Wr(t)){e=e||[]
for(var n=0,r=t.length;n<r;n++)e[n]=t[n]}else if(w(t)){e=e||{}
for(var i in t)"$"===i.charAt(0)&&"$"===i.charAt(1)||(e[i]=t[i])}return e||t}function H(t,e){if(t===e)return!0
if(null===t||null===e)return!1
if(t!==t&&e!==e)return!0
var n,r,i,o=typeof t,a=typeof e
if(o==a&&"object"==o){if(!Wr(t)){if(E(t))return!!E(e)&&H(t.getTime(),e.getTime())
if(A(t))return!!A(e)&&t.toString()==e.toString()
if(O(t)||O(e)||T(t)||T(e)||Wr(e)||E(e)||A(e))return!1
i=mt()
for(r in t)if("$"!==r.charAt(0)&&!k(t[r])){if(!H(t[r],e[r]))return!1
i[r]=!0}for(r in e)if(!(r in i)&&"$"!==r.charAt(0)&&b(e[r])&&!k(e[r]))return!1
return!0}if(!Wr(e))return!1
if((n=t.length)==e.length){for(r=0;r<n;r++)if(!H(t[r],e[r]))return!1
return!0}}return!1}function B(t,e,n){return t.concat(qr.call(e,n))}function z(t,e){return qr.call(t,e||0)}function W(t,e){var n=arguments.length>2?z(arguments,2):[]
return!k(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,B(n,arguments,0)):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function G(t,r){var i=r
return"string"==typeof t&&"$"===t.charAt(0)&&"$"===t.charAt(1)?i=n:T(r)?i="$WINDOW":r&&e===r?i="$DOCUMENT":O(r)&&(i="$SCOPE"),i}function J(t,e){return y(t)?n:(S(e)||(e=e?2:null),JSON.stringify(t,G,e))}function K(t){return C(t)?JSON.parse(t):t}function Y(t,e){t=t.replace(Qr,"")
var n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4
return isNaN(n)?e:n}function Z(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function Q(t,e,n){n=n?-1:1
var r=t.getTimezoneOffset(),i=Y(e,r)
return Z(t,n*(i-r))}function X(t){t=Pr(t).clone()
try{t.empty()}catch(e){}var n=Pr("<div>").append(t).html()
try{return t[0].nodeType===ii?Mr(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(t,e){return"<"+Mr(e)})}catch(e){return Mr(n)}}function tt(t){try{return decodeURIComponent(t)}catch(e){}}function et(t){var e={}
return o((t||"").split("&"),function(t){var n,r,i
t&&(r=t=t.replace(/\+/g,"%20"),n=t.indexOf("="),n!==-1&&(r=t.substring(0,n),i=t.substring(n+1)),r=tt(r),b(r)&&(i=!b(i)||tt(i),Or.call(e,r)?Wr(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i))}),e}function nt(t){var e=[]
return o(t,function(t,n){Wr(t)?o(t,function(t){e.push(it(n,!0)+(t===!0?"":"="+it(t,!0)))}):e.push(it(n,!0)+(t===!0?"":"="+it(t,!0)))}),e.length?e.join("&"):""}function rt(t){return it(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function it(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,e?"%20":"+")}function ot(t,e){var n,r,i=Xr.length
for(r=0;r<i;++r)if(n=Xr[r]+e,C(n=t.getAttribute(n)))return n
return null}function at(t,e){var n,r,i={}
o(Xr,function(e){var i=e+"app"
!n&&t.hasAttribute&&t.hasAttribute(i)&&(n=t,r=t.getAttribute(i))}),o(Xr,function(e){var i,o=e+"app"
!n&&(i=t.querySelector("["+o.replace(":","\\:")+"]"))&&(n=i,r=i.getAttribute(o))}),n&&(i.strictDi=null!==ot(n,"strict-di"),e(n,r?[r]:[],i))}function st(n,r,i){w(i)||(i={})
var a={strictDi:!1}
i=f(a,i)
var s=function(){if(n=Pr(n),n.injector()){var t=n[0]===e?"document":X(n)
throw Hr("btstrpd","App Already Bootstrapped with this Element '{0}'",t.replace(/</,"&lt;").replace(/>/,"&gt;"))}r=r||[],r.unshift(["$provide",function(t){t.value("$rootElement",n)}]),i.debugInfoEnabled&&r.push(["$compileProvider",function(t){t.debugInfoEnabled(!0)}]),r.unshift("ng")
var o=ie(r,i.strictDi)
return o.invoke(["$rootScope","$rootElement","$compile","$injector",function(t,e,n,r){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),o},u=/^NG_ENABLE_DEBUG_INFO!/,c=/^NG_DEFER_BOOTSTRAP!/
return t&&u.test(t.name)&&(i.debugInfoEnabled=!0,t.name=t.name.replace(u,"")),t&&!c.test(t.name)?s():(t.name=t.name.replace(c,""),Br.resumeBootstrap=function(t){return o(t,function(t){r.push(t)}),s()},void(k(Br.resumeDeferredBootstrap)&&Br.resumeDeferredBootstrap()))}function ut(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name,t.location.reload()}function ct(t){var e=Br.element(t).injector()
if(!e)throw Hr("test","no injector found for element argument to getTestability")
return e.get("$$testability")}function lt(t,e){return e=e||"_",t.replace(ti,function(t,n){return(n?e:"")+t.toLowerCase()})}function ft(){var e
if(!ei){var r=Zr()
Ir=y(r)?t.jQuery:r?t[r]:n,Ir&&Ir.fn.on?(Pr=Ir,f(Ir.fn,{scope:Ci.scope,isolateScope:Ci.isolateScope,controller:Ci.controller,injector:Ci.injector,inheritedData:Ci.inheritedData}),e=Ir.cleanData,Ir.cleanData=function(t){for(var n,r,i=0;null!=(r=t[i]);i++)n=Ir._data(r,"events"),n&&n.$destroy&&Ir(r).triggerHandler("$destroy")
e(t)}):Pr=Dt,Br.element=Pr,ei=!0}}function ht(t,e,n){if(!t)throw Hr("areq","Argument '{0}' is {1}",e||"?",n||"required")
return t}function pt(t,e,n){return n&&Wr(t)&&(t=t[t.length-1]),ht(k(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function dt(t,e){if("hasOwnProperty"===t)throw Hr("badname","hasOwnProperty is not a valid {0} name",e)}function $t(t,e,n){if(!e)return t
for(var r,i=e.split("."),o=t,a=i.length,s=0;s<a;s++)r=i[s],t&&(t=(o=t)[r])
return!n&&k(t)?W(o,t):t}function vt(t){for(var e,n=t[0],r=t[t.length-1],i=1;n!==r&&(n=n.nextSibling);i++)(e||t[i]!==n)&&(e||(e=Pr(qr.call(t,0,i))),e.push(n))
return e||t}function mt(){return Object.create(null)}function gt(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=r("$injector"),i=r("ng"),o=e(t,"angular",Object)
return o.$$minErr=o.$$minErr||r,e(o,"module",function(){var t={}
return function(r,o,a){var s=function(t,e){if("hasOwnProperty"===t)throw i("badname","hasOwnProperty is not a valid {0} name",e)}
return s(r,"module"),o&&t.hasOwnProperty(r)&&(t[r]=null),e(t,r,function(){function t(t,e,n,r){return r||(r=i),function(){return r[n||"push"]([t,e,arguments]),l}}function e(t,e){return function(n,o){return o&&k(o)&&(o.$$moduleName=r),i.push([t,e,arguments]),l}}if(!o)throw n("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",r)
var i=[],s=[],u=[],c=t("$injector","invoke","push",s),l={_invokeQueue:i,_configBlocks:s,_runBlocks:u,requires:o,name:r,provider:e("$provide","provider"),factory:e("$provide","factory"),service:e("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),decorator:e("$provide","decorator"),animation:e("$animateProvider","register"),filter:e("$filterProvider","register"),controller:e("$controllerProvider","register"),directive:e("$compileProvider","directive"),component:e("$compileProvider","component"),config:c,run:function(t){return u.push(t),this}}
return a&&c(a),l})}})}function yt(t){var e=[]
return JSON.stringify(t,function(t,n){if(n=G(t,n),w(n)){if(e.indexOf(n)>=0)return"..."
e.push(n)}return n})}function bt(t){return"function"==typeof t?t.toString().replace(/ \{[\s\S]*$/,""):y(t)?"undefined":"string"!=typeof t?yt(t):t}function wt(e){f(e,{bootstrap:st,copy:L,extend:f,merge:h,equals:H,element:Pr,forEach:o,injector:ie,noop:$,bind:W,toJson:J,fromJson:K,identity:v,isUndefined:y,isDefined:b,isString:C,isFunction:k,isObject:w,isNumber:S,isElement:R,isArray:Wr,version:ui,isDate:E,lowercase:Mr,uppercase:Dr,callbacks:{counter:0},getTestability:ct,$$minErr:r,$$csp:Yr,reloadWithDebugInfo:ut}),(Rr=gt(t))("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:Cn}),t.provider("$compile",de).directive({a:Mo,input:Ko,textarea:Ko,form:Po,script:Ba,select:Ga,style:Ka,option:Ja,ngBind:Qo,ngBindHtml:ta,ngBindTemplate:Xo,ngClass:na,ngClassEven:ia,ngClassOdd:ra,ngCloak:oa,ngController:aa,ngForm:Io,ngHide:Ra,ngIf:ca,ngInclude:la,ngInit:ha,ngNonBindable:Ta,ngPluralize:Na,ngRepeat:ja,ngShow:Ia,ngStyle:qa,ngSwitch:_a,ngSwitchWhen:Fa,ngSwitchDefault:La,ngOptions:Da,ngTransclude:Ha,ngModel:Ea,ngList:pa,ngChange:ea,pattern:Za,ngPattern:Za,required:Ya,ngRequired:Ya,minlength:Xa,ngMinlength:Xa,maxlength:Qa,ngMaxlength:Qa,ngValue:Zo,ngModelOptions:Aa}).directive({ngInclude:fa}).directive(Do).directive(sa),t.provider({$anchorScroll:oe,$animate:_i,$animateCss:Ui,$$animateJs:Ri,$$animateQueue:qi,$$AnimateRunner:Li,$$animateAsyncRun:Fi,$browser:fe,$cacheFactory:he,$controller:ye,$document:be,$exceptionHandler:we,$filter:Rn,$$forceReflow:Gi,$interpolate:Pe,$interval:Ie,$http:De,$httpParamSerializer:Ce,$httpParamSerializerJQLike:Se,$httpBackend:je,$xhrFactory:Ne,$location:Ye,$log:Ze,$parse:mn,$rootScope:xn,$q:gn,$$q:yn,$sce:An,$sceDelegate:kn,$sniffer:Tn,$templateCache:pe,$templateRequest:On,$$testability:Mn,$timeout:Dn,$window:Vn,$$rAF:wn,$$jqLite:Qt,$$HashMap:Ai,$$cookieReader:In})}])}function xt(){return++li}function Ct(t){return t.replace(pi,function(t,e,n,r){return r?n.toUpperCase():n}).replace(di,"Moz$1")}function St(t){return!gi.test(t)}function Et(t){var e=t.nodeType
return e===ni||!e||e===ai}function kt(t){for(var e in ci[t.ng339])return!0
return!1}function At(t){for(var e=0,n=t.length;e<n;e++)Pt(t[e])}function Tt(t,e){var n,r,i,a,s=e.createDocumentFragment(),u=[]
if(St(t))u.push(e.createTextNode(t))
else{for(n=n||s.appendChild(e.createElement("div")),r=(yi.exec(t)||["",""])[1].toLowerCase(),i=wi[r]||wi._default,n.innerHTML=i[1]+t.replace(bi,"<$1></$2>")+i[2],a=i[0];a--;)n=n.lastChild
u=B(u,n.childNodes),n=s.firstChild,n.textContent=""}return s.textContent="",s.innerHTML="",o(u,function(t){s.appendChild(t)}),s}function Ot(t,n){n=n||e
var r
return(r=mi.exec(t))?[n.createElement(r[1])]:(r=Tt(t,n))?r.childNodes:[]}function Mt(t,e){var n=t.parentNode
n&&n.replaceChild(e,t),e.appendChild(t)}function Dt(t){if(t instanceof Dt)return t
var e
if(C(t)&&(t=Jr(t),e=!0),!(this instanceof Dt)){if(e&&"<"!=t.charAt(0))throw vi("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element")
return new Dt(t)}e?Lt(this,Ot(t)):Lt(this,t)}function Nt(t){return t.cloneNode(!0)}function jt(t,e){if(e||Pt(t),t.querySelectorAll)for(var n=t.querySelectorAll("*"),r=0,i=n.length;r<i;r++)Pt(n[r])}function Vt(t,e,n,r){if(b(r))throw vi("offargs","jqLite#off() does not support the `selector` argument")
var i=It(t),a=i&&i.events,s=i&&i.handle
if(s)if(e){var u=function(e){var r=a[e]
b(n)&&F(r||[],n),b(n)&&r&&r.length>0||(hi(t,e,s),delete a[e])}
o(e.split(" "),function(t){u(t),$i[t]&&u($i[t])})}else for(e in a)"$destroy"!==e&&hi(t,e,s),delete a[e]}function Pt(t,e){var r=t.ng339,i=r&&ci[r]
if(i){if(e)return void delete i.data[e]
i.handle&&(i.events.$destroy&&i.handle({},"$destroy"),Vt(t)),delete ci[r],t.ng339=n}}function It(t,e){var r=t.ng339,i=r&&ci[r]
return e&&!i&&(t.ng339=r=xt(),i=ci[r]={events:{},data:{},handle:n}),i}function Rt(t,e,n){if(Et(t)){var r=b(n),i=!r&&e&&!w(e),o=!e,a=It(t,!i),s=a&&a.data
if(r)s[e]=n
else{if(o)return s
if(i)return s&&s[e]
f(s,e)}}}function qt(t,e){return!!t.getAttribute&&(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1}function _t(t,e){e&&t.setAttribute&&o(e.split(" "),function(e){t.setAttribute("class",Jr((" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Jr(e)+" "," ")))})}function Ft(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ")
o(e.split(" "),function(t){t=Jr(t),n.indexOf(" "+t+" ")===-1&&(n+=t+" ")}),t.setAttribute("class",Jr(n))}}function Lt(t,e){if(e)if(e.nodeType)t[t.length++]=e
else{var n=e.length
if("number"==typeof n&&e.window!==e){if(n)for(var r=0;r<n;r++)t[t.length++]=e[r]}else t[t.length++]=e}}function Ut(t,e){return Ht(t,"$"+(e||"ngController")+"Controller")}function Ht(t,e,n){t.nodeType==ai&&(t=t.documentElement)
for(var r=Wr(e)?e:[e];t;){for(var i=0,o=r.length;i<o;i++)if(b(n=Pr.data(t,r[i])))return n
t=t.parentNode||t.nodeType===si&&t.host}}function Bt(t){for(jt(t,!0);t.firstChild;)t.removeChild(t.firstChild)}function zt(t,e){e||jt(t)
var n=t.parentNode
n&&n.removeChild(t)}function Wt(e,n){n=n||t,"complete"===n.document.readyState?n.setTimeout(e):Pr(n).on("load",e)}function Gt(t,e){var n=Si[e.toLowerCase()]
return n&&Ei[_(t)]&&n}function Jt(t){return ki[t]}function Kt(t,e){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented}
var i=e[r||n.type],o=i?i.length:0
if(o){if(y(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation
n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0}
var s=i.specialHandlerWrapper||Yt
o>1&&(i=U(i))
for(var u=0;u<o;u++)n.isImmediatePropagationStopped()||s(t,n,i[u])}}
return n.elem=t,n}function Yt(t,e,n){n.call(t,e)}function Zt(t,e,n){var r=e.relatedTarget
r&&(r===t||xi.call(t,r))||n.call(t,e)}function Qt(){this.$get=function(){return f(Dt,{hasClass:function(t,e){return t.attr&&(t=t[0]),qt(t,e)},addClass:function(t,e){return t.attr&&(t=t[0]),Ft(t,e)},removeClass:function(t,e){return t.attr&&(t=t[0]),_t(t,e)}})}}function Xt(t,e){var n=t&&t.$$hashKey
if(n)return"function"==typeof n&&(n=t.$$hashKey()),n
var r=typeof t
return n="function"==r||"object"==r&&null!==t?t.$$hashKey=r+":"+(e||u)():r+":"+t}function te(t,e){if(e){var n=0
this.nextUid=function(){return++n}}o(t,this.put,this)}function ee(t){var e=t.toString().replace(Ni,""),n=e.match(Ti)||e.match(Oi)
return n}function ne(t){var e=ee(t)
return e?"function("+(e[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function re(t,e,n){var r,i,a
if("function"==typeof t){if(!(r=t.$inject)){if(r=[],t.length){if(e)throw C(n)&&n||(n=t.name||ne(t)),ji("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n)
i=ee(t),o(i[1].split(Mi),function(t){t.replace(Di,function(t,e,n){r.push(n)})})}t.$inject=r}}else Wr(t)?(a=t.length-1,pt(t[a],"fn"),r=t.slice(0,a)):pt(t,"fn",!0)
return r}function ie(t,e){function r(t){return function(e,n){return w(e)?void o(e,s(t)):t(e,n)}}function i(t,e){if(dt(t,"service"),(k(e)||Wr(e))&&(e=S.instantiate(e)),!e.$get)throw ji("pget","Provider '{0}' must define $get factory method.",t)
return x[t+v]=e}function a(t,e){return function(){var n=T.invoke(e,this)
if(y(n))throw ji("undef","Provider '{0}' must return a value from $get factory method.",t)
return n}}function u(t,e,n){return i(t,{$get:n!==!1?a(t,e):e})}function c(t,e){return u(t,["$injector",function(t){return t.instantiate(e)}])}function l(t,e){return u(t,m(e),!1)}function f(t,e){dt(t,"constant"),x[t]=e,E[t]=e}function h(t,e){var n=S.get(t+v),r=n.$get
n.$get=function(){var t=T.invoke(r,n)
return T.invoke(e,null,{$delegate:t})}}function p(t){ht(y(t)||Wr(t),"modulesToLoad","not an array")
var e,n=[]
return o(t,function(t){function r(t){var e,n
for(e=0,n=t.length;e<n;e++){var r=t[e],i=S.get(r[0])
i[r[1]].apply(i,r[2])}}if(!b.get(t)){b.put(t,!0)
try{C(t)?(e=Rr(t),n=n.concat(p(e.requires)).concat(e._runBlocks),r(e._invokeQueue),r(e._configBlocks)):k(t)?n.push(S.invoke(t)):Wr(t)?n.push(S.invoke(t)):pt(t,"module")}catch(i){throw Wr(t)&&(t=t[t.length-1]),i.message&&i.stack&&i.stack.indexOf(i.message)==-1&&(i=i.message+"\n"+i.stack),ji("modulerr","Failed to instantiate module {0} due to:\n{1}",t,i.stack||i.message||i)}}}),n}function d(t,n){function r(e,r){if(t.hasOwnProperty(e)){if(t[e]===$)throw ji("cdep","Circular dependency found: {0}",e+" <- "+g.join(" <- "))
return t[e]}try{return g.unshift(e),t[e]=$,t[e]=n(e,r)}catch(i){throw t[e]===$&&delete t[e],i}finally{g.shift()}}function i(t,n,i){for(var o=[],a=ie.$$annotate(t,e,i),s=0,u=a.length;s<u;s++){var c=a[s]
if("string"!=typeof c)throw ji("itkn","Incorrect injection token! Expected service name as string, got {0}",c)
o.push(n&&n.hasOwnProperty(c)?n[c]:r(c,i))}return o}function o(t){return!(Vr<=11)&&("function"==typeof t&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(t)))}function a(t,e,n,r){"string"==typeof n&&(r=n,n=null)
var a=i(t,n,r)
return Wr(t)&&(t=t[t.length-1]),o(t)?(a.unshift(null),new(Function.prototype.bind.apply(t,a))):t.apply(e,a)}function s(t,e,n){var r=Wr(t)?t[t.length-1]:t,o=i(t,e,n)
return o.unshift(null),new(Function.prototype.bind.apply(r,o))}return{invoke:a,instantiate:s,get:r,annotate:ie.$$annotate,has:function(e){return x.hasOwnProperty(e+v)||t.hasOwnProperty(e)}}}e=e===!0
var $={},v="Provider",g=[],b=new te([],(!0)),x={$provide:{provider:r(i),factory:r(u),service:r(c),value:r(l),constant:r(f),decorator:h}},S=x.$injector=d(x,function(t,e){throw Br.isString(e)&&g.push(e),ji("unpr","Unknown provider: {0}",g.join(" <- "))}),E={},A=d(E,function(t,e){var r=S.get(t+v,e)
return T.invoke(r.$get,r,n,t)}),T=A
x["$injector"+v]={$get:m(A)}
var O=p(t)
return T=A.get("$injector"),T.strictDi=e,o(O,function(t){t&&T.invoke(t)}),T}function oe(){var t=!0
this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null
return Array.prototype.some.call(t,function(t){if("a"===_(t))return e=t,!0}),e}function o(){var t=s.yOffset
if(k(t))t=t()
else if(R(t)){var n=t[0],r=e.getComputedStyle(n)
t="fixed"!==r.position?0:n.getBoundingClientRect().bottom}else S(t)||(t=0)
return t}function a(t){if(t){t.scrollIntoView()
var n=o()
if(n){var r=t.getBoundingClientRect().top
e.scrollBy(0,r-n)}}else e.scrollTo(0,0)}function s(t){t=C(t)?t:n.hash()
var e
t?(e=u.getElementById(t))?a(e):(e=i(u.getElementsByName(t)))?a(e):"top"===t&&a(null):a(null)}var u=e.document
return t&&r.$watch(function(){return n.hash()},function(t,e){t===e&&""===t||Wt(function(){r.$evalAsync(s)})}),s}]}function ae(t,e){return t||e?t?e?(Wr(t)&&(t=t.join(" ")),Wr(e)&&(e=e.join(" ")),t+" "+e):t:e:""}function se(t){for(var e=0;e<t.length;e++){var n=t[e]
if(n.nodeType===Pi)return n}}function ue(t){C(t)&&(t=t.split(" "))
var e=mt()
return o(t,function(t){t.length&&(e[t]=!0)}),e}function ce(t){return w(t)?t:{}}function le(t,e,n,r){function i(t){try{t.apply(null,z(arguments,1))}finally{if(m--,0===m)for(;g.length;)try{g.pop()()}catch(e){n.error(e)}}}function a(t){var e=t.indexOf("#")
return e===-1?"":t.substr(e)}function s(){S=null,u(),c()}function u(){b=E(),b=y(b)?null:b,H(b,T)&&(b=T),T=b}function c(){x===l.url()&&w===b||(x=l.url(),w=b,o(k,function(t){t(l.url(),b)}))}var l=this,f=t.location,h=t.history,p=t.setTimeout,d=t.clearTimeout,v={}
l.isMock=!1
var m=0,g=[]
l.$$completeOutstandingRequest=i,l.$$incOutstandingRequestCount=function(){m++},l.notifyWhenNoOutstandingRequests=function(t){0===m?t():g.push(t)}
var b,w,x=f.href,C=e.find("base"),S=null,E=r.history?function(){try{return h.state}catch(t){}}:$
u(),w=b,l.url=function(e,n,i){if(y(i)&&(i=null),f!==t.location&&(f=t.location),h!==t.history&&(h=t.history),e){var o=w===i
if(x===e&&(!r.history||o))return l
var s=x&&Le(x)===Le(e)
return x=e,w=i,!r.history||s&&o?(s&&!S||(S=e),n?f.replace(e):s?f.hash=a(e):f.href=e,f.href!==e&&(S=e)):(h[n?"replaceState":"pushState"](i,"",e),u(),w=b),l}return S||f.href.replace(/%27/g,"'")},l.state=function(){return b}
var k=[],A=!1,T=null
l.onUrlChange=function(e){return A||(r.history&&Pr(t).on("popstate",s),Pr(t).on("hashchange",s),A=!0),k.push(e),e},l.$$applicationDestroyed=function(){Pr(t).off("hashchange popstate",s)},l.$$checkUrlChange=c,l.baseHref=function(){var t=C.attr("href")
return t?t.replace(/^(https?\:)?\/\/[^\/]*/,""):""},l.defer=function(t,e){var n
return m++,n=p(function(){delete v[n],i(t)},e||0),v[n]=!0,n},l.defer.cancel=function(t){return!!v[t]&&(delete v[t],d(t),i($),!0)}}function fe(){this.$get=["$window","$log","$sniffer","$document",function(t,e,n,r){return new le(t,r,e,n)}]}function he(){this.$get=function(){function t(t,n){function i(t){t!=h&&(p?p==t&&(p=t.n):p=t,o(t.n,t.p),o(t,h),h=t,h.n=null)}function o(t,e){t!=e&&(t&&(t.p=e),e&&(e.n=t))}if(t in e)throw r("$cacheFactory")("iid","CacheId '{0}' is already taken!",t)
var a=0,s=f({},n,{id:t}),u=mt(),c=n&&n.capacity||Number.MAX_VALUE,l=mt(),h=null,p=null
return e[t]={put:function(t,e){if(!y(e)){if(c<Number.MAX_VALUE){var n=l[t]||(l[t]={key:t})
i(n)}return t in u||a++,u[t]=e,a>c&&this.remove(p.key),e}},get:function(t){if(c<Number.MAX_VALUE){var e=l[t]
if(!e)return
i(e)}return u[t]},remove:function(t){if(c<Number.MAX_VALUE){var e=l[t]
if(!e)return
e==h&&(h=e.p),e==p&&(p=e.n),o(e.n,e.p),delete l[t]}t in u&&(delete u[t],a--)},removeAll:function(){u=mt(),a=0,l=mt(),h=p=null},destroy:function(){u=null,s=null,l=null,delete e[t]},info:function(){return f({},s,{size:a})}}}var e={}
return t.info=function(){var t={}
return o(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function pe(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function de(t,r){function i(t,e,n){var r=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,i={}
return o(t,function(t,o){if(t in E)return void(i[o]=E[t])
var a=t.match(r)
if(!a)throw Hi("iscp","Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",e,o,t,n?"controller bindings definition":"isolate scope definition")
i[o]={mode:a[1][0],collection:"*"===a[2],optional:"?"===a[3],attrName:a[4]||o},a[4]&&(E[t]=i[o])}),i}function a(t,e){var n={isolateScope:null,bindToController:null}
if(w(t.scope)&&(t.bindToController===!0?(n.bindToController=i(t.scope,e,!0),n.isolateScope={}):n.isolateScope=i(t.scope,e,!1)),w(t.bindToController)&&(n.bindToController=i(t.bindToController,e,!0)),w(n.bindToController)){var r=t.controller,o=t.controllerAs
if(!r)throw Hi("noctrl","Cannot bind to controller without directive '{0}'s controller.",e)
if(!ge(r,o))throw Hi("noident","Cannot bind to controller without identifier for directive '{0}'.",e)}return n}function u(t){var e=t.charAt(0)
if(!e||e!==Mr(e))throw Hi("baddir","Directive/Component name '{0}' is invalid. The first character must be a lowercase letter",t)
if(t!==t.trim())throw Hi("baddir","Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",t)}var c={},l="Directive",h=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,p=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=q("ngSrc,ngSrcset,src,srcset"),x=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,S=/^(on[a-z]+|formaction)$/,E=mt()
this.directive=function M(e,n){return dt(e,"directive"),C(e)?(u(e),ht(n,"directiveFactory"),c.hasOwnProperty(e)||(c[e]=[],t.factory(e+l,["$injector","$exceptionHandler",function(t,n){var r=[]
return o(c[e],function(i,o){try{var a=t.invoke(i)
k(a)?a={compile:m(a)}:!a.compile&&a.link&&(a.compile=m(a.link)),a.priority=a.priority||0,a.index=o,a.name=a.name||e,a.require=a.require||a.controller&&a.name,a.restrict=a.restrict||"EA",a.$$moduleName=i.$$moduleName,r.push(a)}catch(s){n(s)}}),r}])),c[e].push(n)):o(e,s(M)),this},this.component=function(t,e){function n(t){function n(e){return k(e)||Wr(e)?function(n,r){return t.invoke(e,this,{$element:n,$attrs:r})}:e}var i=e.template||e.templateUrl?e.template:""
return{controller:r,controllerAs:ge(e.controller)||e.controllerAs||"$ctrl",template:n(i),templateUrl:n(e.templateUrl),transclude:e.transclude,scope:{},bindToController:e.bindings||{},restrict:"E",require:e.require}}var r=e.controller||$
return o(e,function(t,e){"$"===e.charAt(0)&&(n[e]=t,r[e]=t)}),n.$inject=["$injector"],this.directive(t,n)},this.aHrefSanitizationWhitelist=function(t){return b(t)?(r.aHrefSanitizationWhitelist(t),this):r.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return b(t)?(r.imgSrcSanitizationWhitelist(t),this):r.imgSrcSanitizationWhitelist()}
var A=!0
this.debugInfoEnabled=function(t){return b(t)?(A=t,this):A}
var T=10
this.onChangesTtl=function(t){return arguments.length?(T=t,this):T},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(t,r,i,s,u,m,b,E,M,D){function N(){try{if(!--bt)throw vt=n,Hi("infchng","{0} $onChanges() iterations reached. Aborting!\n",T)
b.$apply(function(){for(var t=0,e=vt.length;t<e;++t)vt[t]()
vt=n})}finally{bt++}}function V(t,e){if(e){var n,r,i,o=Object.keys(e)
for(n=0,r=o.length;n<r;n++)i=o[n],this[i]=e[i]}else this.$attr={}
this.$$element=t}function P(t,e,n){yt.innerHTML="<span "+e+">"
var r=yt.firstChild.attributes,i=r[0]
r.removeNamedItem(i.name),i.value=n,t.attributes.setNamedItem(i)}function I(t,e){try{t.addClass(e)}catch(n){}}function R(t,n,r,i,o){t instanceof Pr||(t=Pr(t))
for(var a=/\S+/,s=0,u=t.length;s<u;s++){var c=t[s]
c.nodeType===ii&&c.nodeValue.match(a)&&Mt(c,t[s]=e.createElement("span"))}var l=L(t,n,t,r,i,o)
R.$$addScopeClass(t)
var f=null
return function(e,n,r){ht(e,"scope"),o&&o.needsNewScope&&(e=e.$parent.$new()),r=r||{}
var i=r.parentBoundTranscludeFn,a=r.transcludeControllers,s=r.futureParentElement
i&&i.$$boundTransclude&&(i=i.$$boundTransclude),f||(f=q(s))
var u
if(u="html"!==f?Pr(st(f,Pr("<div>").append(t).html())):n?Ci.clone.call(t):t,a)for(var c in a)u.data("$"+c+"Controller",a[c].instance)
return R.$$addScopeInfo(u,e),n&&n(u,e),l&&l(e,u,u,i),u}}function q(t){var e=t&&t[0]
return e&&"foreignobject"!==_(e)&&Lr.call(e).match(/SVG/)?"svg":"html"}function L(t,e,r,i,o,a){function s(t,r,i,o){var a,s,u,c,l,f,h,p,v
if(d){var m=r.length
for(v=new Array(m),l=0;l<$.length;l+=3)h=$[l],v[h]=r[h]}else v=r
for(l=0,f=$.length;l<f;)u=v[$[l++]],a=$[l++],s=$[l++],a?(a.scope?(c=t.$new(),R.$$addScopeInfo(Pr(u),c)):c=t,p=a.transcludeOnThisElement?U(t,a.transclude,o):!a.templateOnThisElement&&o?o:!o&&e?U(t,e):null,a(s,c,u,i,p)):s&&s(t,u.childNodes,n,o)}for(var u,c,l,f,h,p,d,$=[],v=0;v<t.length;v++)u=new V,c=B(t[v],[],u,0===v?i:n,o),l=c.length?K(c,t[v],u,e,r,null,[],[],a):null,l&&l.scope&&R.$$addScopeClass(u.$$element),h=l&&l.terminal||!(f=t[v].childNodes)||!f.length?null:L(f,l?(l.transcludeOnThisElement||!l.templateOnThisElement)&&l.transclude:e),(l||h)&&($.push(v,l,h),p=!0,d=d||l),a=null
return p?s:null}function U(t,e,n){function r(r,i,o,a,s){return r||(r=t.$new(!1,s),r.$$transcluded=!0),e(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})}var i=r.$$slots=mt()
for(var o in e.$$slots)e.$$slots[o]?i[o]=U(t,e.$$slots[o],n):i[o]=null
return r}function B(t,e,n,r,i){var o,a,s=t.nodeType,u=n.$attr
switch(s){case ni:tt(e,$e(_(t)),"E",r,i)
for(var c,l,f,d,$,v,m=t.attributes,g=0,y=m&&m.length;g<y;g++){var b=!1,x=!1
c=m[g],l=c.name,$=Jr(c.value),d=$e(l),(v=Et.test(d))&&(l=l.replace(Bi,"").substr(8).replace(/_(.)/g,function(t,e){return e.toUpperCase()}))
var S=d.match(kt)
S&&et(S[1])&&(b=l,x=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6)),f=$e(l.toLowerCase()),u[f]=l,!v&&n.hasOwnProperty(f)||(n[f]=$,Gt(t,f)&&(n[f]=!0)),ct(t,e,$,f,v),tt(e,f,"A",r,i,b,x)}if(a=t.className,w(a)&&(a=a.animVal),C(a)&&""!==a)for(;o=p.exec(a);)f=$e(o[2]),tt(e,f,"C",r,i)&&(n[f]=Jr(o[3])),a=a.substr(o.index+o[0].length)
break
case ii:if(11===Vr)for(;t.parentNode&&t.nextSibling&&t.nextSibling.nodeType===ii;)t.nodeValue=t.nodeValue+t.nextSibling.nodeValue,t.parentNode.removeChild(t.nextSibling)
at(e,t.nodeValue)
break
case oi:try{o=h.exec(t.nodeValue),o&&(f=$e(o[1]),tt(e,f,"M",r,i)&&(n[f]=Jr(o[2])))}catch(E){}}return e.sort(it),e}function W(t,e,n){var r=[],i=0
if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw Hi("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",e,n)
t.nodeType==ni&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(i>0)}else r.push(t)
return Pr(r)}function G(t,e,n){return function(r,i,o,a,s){return i=W(i[0],e,n),t(r,i,o,a,s)}}function J(t,e,n,r,i,o){var a
return t?R(e,n,r,i,o):function(){return a||(a=R(e,n,r,i,o),e=n=o=null),a.apply(this,arguments)}}function K(t,e,r,a,s,u,c,l,h){function p(t,e,n,r){t&&(n&&(t=G(t,n,r)),t.require=$.require,t.directiveName=v,(E===$||$.$$isolateScope)&&(t=pt(t,{isolateScope:!0})),c.push(t)),e&&(n&&(e=G(e,n,r)),e.require=$.require,e.directiveName=v,(E===$||$.$$isolateScope)&&(e=pt(e,{isolateScope:!0})),l.push(e))}function d(t,i,a,s,u){function h(t,e,r,i){var o
if(O(t)||(i=r,r=e,e=t,t=n),N&&(o=g),r||(r=N?x.parent():x),!i)return u(t,e,o,r,F)
var a=u.$$slots[i]
if(a)return a(t,e,o,r,F)
if(y(a))throw Hi("noslot",'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',i,X(x))}var p,d,$,v,m,g,b,x,T,M,D
e===a?(T=r,x=r.$$element):(x=Pr(a),T=new V(x,r)),m=i,E?v=i.$new(!0):C&&(m=i.$parent),u&&(b=h,b.$$boundTransclude=u,b.isSlotFilled=function(t){return!!u.$$slots[t]}),S&&(g=Z(x,T,b,S,v,i,E)),E&&(R.$$addScopeInfo(x,v,!0,!(A&&(A===E||A===E.$$originalDirective))),R.$$addScopeClass(x,!0),v.$$isolateBindings=E.$$isolateBindings,M=$t(i,T,v,v.$$isolateBindings,E),M&&v.$on("$destroy",M))
for(var j in g){var P=S[j],I=g[j],q=P.$$bindings.bindToController
I.identifier&&q&&(D=$t(m,T,I.instance,q,P))
var _=I()
_!==I.instance&&(I.instance=_,x.data("$"+P.name+"Controller",_),D&&D(),D=$t(m,T,I.instance,q,P))}for(o(S,function(t,e){var n=t.require
t.bindToController&&!Wr(n)&&w(n)&&f(g[e].instance,Y(e,n,x,g))}),o(g,function(t){var e=t.instance
k(e.$onInit)&&e.$onInit(),k(e.$onDestroy)&&m.$on("$destroy",function(){e.$onDestroy()})}),p=0,d=c.length;p<d;p++)$=c[p],dt($,$.isolateScope?v:i,x,T,$.require&&Y($.directiveName,$.require,x,g),b)
var F=i
for(E&&(E.template||null===E.templateUrl)&&(F=v),t&&t(F,a.childNodes,n,u),p=l.length-1;p>=0;p--)$=l[p],dt($,$.isolateScope?v:i,x,T,$.require&&Y($.directiveName,$.require,x,g),b)
o(g,function(t){var e=t.instance
k(e.$postLink)&&e.$postLink()})}h=h||{}
for(var $,v,m,g,b,x=-Number.MAX_VALUE,C=h.newScopeDirective,S=h.controllerDirectives,E=h.newIsolateScopeDirective,A=h.templateDirective,T=h.nonTlbTranscludeDirective,M=!1,D=!1,N=h.hasElementTranscludeDirective,j=r.$$element=Pr(e),P=u,I=a,q=!1,F=!1,L=0,U=t.length;L<U;L++){$=t[L]
var H=$.$$start,K=$.$$end
if(H&&(j=W(e,H,K)),m=n,x>$.priority)break
if((b=$.scope)&&($.templateUrl||(w(b)?(ot("new/isolated scope",E||C,$,j),E=$):ot("new/isolated scope",E,$,j)),C=C||$),v=$.name,!q&&($.replace&&($.templateUrl||$.template)||$.transclude&&!$.$$tlb)){for(var tt,et=L+1;tt=t[et++];)if(tt.transclude&&!tt.$$tlb||tt.replace&&(tt.templateUrl||tt.template)){F=!0
break}q=!0}if(!$.templateUrl&&$.controller&&(b=$.controller,S=S||mt(),ot("'"+v+"' controller",S[v],$,j),S[v]=$),b=$.transclude)if(M=!0,$.$$tlb||(ot("transclusion",T,$,j),T=$),"element"==b)N=!0,x=$.priority,m=j,j=r.$$element=Pr(R.$$createComment(v,r[v])),e=j[0],ft(s,z(m),e),m[0].$$parentNode=m[0].parentNode,I=J(F,m,a,x,P&&P.name,{nonTlbTranscludeDirective:T})
else{var it=mt()
if(m=Pr(Nt(e)).contents(),w(b)){m=[]
var at=mt(),ut=mt()
o(b,function(t,e){var n="?"===t.charAt(0)
t=n?t.substring(1):t,at[t]=e,it[e]=null,ut[e]=n}),o(j.contents(),function(t){var e=at[$e(_(t))]
e?(ut[e]=!0,it[e]=it[e]||[],it[e].push(t)):m.push(t)}),o(ut,function(t,e){if(!t)throw Hi("reqslot","Required transclusion slot `{0}` was not filled.",e)})
for(var ct in it)it[ct]&&(it[ct]=J(F,it[ct],a))}j.empty(),I=J(F,m,a,n,n,{needsNewScope:$.$$isolateScope||$.$$newScope}),I.$$slots=it}if($.template)if(D=!0,ot("template",A,$,j),A=$,b=k($.template)?$.template(j,r):$.template,b=Ct(b),$.replace){if(P=$,m=St(b)?[]:me(st($.templateNamespace,Jr(b))),e=m[0],1!=m.length||e.nodeType!==ni)throw Hi("tplrt","Template for directive '{0}' must have exactly one root element. {1}",v,"")
ft(s,j,e)
var lt={$attr:{}},ht=B(e,[],lt),vt=t.splice(L+1,t.length-(L+1));(E||C)&&Q(ht,E,C),t=t.concat(ht).concat(vt),nt(r,lt),U=t.length}else j.html(b)
if($.templateUrl)D=!0,ot("template",A,$,j),A=$,$.replace&&(P=$),d=rt(t.splice(L,t.length-L),j,r,s,M&&I,c,l,{controllerDirectives:S,newScopeDirective:C!==$&&C,newIsolateScopeDirective:E,templateDirective:A,nonTlbTranscludeDirective:T}),U=t.length
else if($.compile)try{g=$.compile(j,r,I),k(g)?p(null,g,H,K):g&&p(g.pre,g.post,H,K)}catch(gt){i(gt,X(j))}$.terminal&&(d.terminal=!0,x=Math.max(x,$.priority))}return d.scope=C&&C.scope===!0,d.transcludeOnThisElement=M,d.templateOnThisElement=D,d.transclude=I,h.hasElementTranscludeDirective=N,d}function Y(t,e,n,r){var i
if(C(e)){var a=e.match(x),s=e.substring(a[0].length),u=a[1]||a[3],c="?"===a[2]
if("^^"===u?n=n.parent():(i=r&&r[s],i=i&&i.instance),!i){var l="$"+s+"Controller"
i=u?n.inheritedData(l):n.data(l)}if(!i&&!c)throw Hi("ctreq","Controller '{0}', required by directive '{1}', can't be found!",s,t)}else if(Wr(e)){i=[]
for(var f=0,h=e.length;f<h;f++)i[f]=Y(t,e[f],n,r)}else w(e)&&(i={},o(e,function(e,o){i[o]=Y(t,e,n,r)}))
return i||null}function Z(t,e,n,r,i,o,a){var s=mt()
for(var u in r){var c=r[u],l={$scope:c===a||c.$$isolateScope?i:o,$element:t,$attrs:e,$transclude:n},f=c.controller
"@"==f&&(f=e[c.name])
var h=m(f,l,!0,c.controllerAs)
s[c.name]=h,t.data("$"+c.name+"Controller",h.instance)}return s}function Q(t,e,n){for(var r=0,i=t.length;r<i;r++)t[r]=d(t[r],{$$isolateScope:e,$$newScope:n})}function tt(e,n,r,o,s,u,f){if(n===s)return null
var h=null
if(c.hasOwnProperty(n))for(var p,$=t.get(n+l),v=0,m=$.length;v<m;v++)try{if(p=$[v],(y(o)||o>p.priority)&&p.restrict.indexOf(r)!=-1){if(u&&(p=d(p,{$$start:u,$$end:f})),!p.$$bindings){var g=p.$$bindings=a(p,p.name)
w(g.isolateScope)&&(p.$$isolateBindings=g.isolateScope)}e.push(p),h=p}}catch(b){i(b)}return h}function et(e){if(c.hasOwnProperty(e))for(var n,r=t.get(e+l),i=0,o=r.length;i<o;i++)if(n=r[i],n.multiElement)return!0
return!1}function nt(t,e){var n=e.$attr,r=t.$attr,i=t.$$element
o(t,function(r,i){"$"!=i.charAt(0)&&(e[i]&&e[i]!==r&&(r+=("style"===i?";":" ")+e[i]),t.$set(i,r,!0,n[i]))}),o(e,function(e,o){"class"==o?(I(i,e),t["class"]=(t["class"]?t["class"]+" ":"")+e):"style"==o?(i.attr("style",i.attr("style")+";"+e),t.style=(t.style?t.style+";":"")+e):"$"==o.charAt(0)||t.hasOwnProperty(o)||(t[o]=e,r[o]=n[o])})}function rt(t,e,n,r,i,a,u,c){var l,f,h=[],p=e[0],$=t.shift(),v=d($,{templateUrl:null,transclude:null,replace:null,$$originalDirective:$}),m=k($.templateUrl)?$.templateUrl(e,n):$.templateUrl,g=$.templateNamespace
return e.empty(),s(m).then(function(s){var d,y,b,x
if(s=Ct(s),$.replace){if(b=St(s)?[]:me(st(g,Jr(s))),d=b[0],1!=b.length||d.nodeType!==ni)throw Hi("tplrt","Template for directive '{0}' must have exactly one root element. {1}",$.name,m)
y={$attr:{}},ft(r,e,d)
var C=B(d,[],y)
w($.scope)&&Q(C,!0),t=C.concat(t),nt(n,y)}else d=p,e.html(s)
for(t.unshift(v),l=K(t,d,n,i,e,$,a,u,c),o(r,function(t,n){t==d&&(r[n]=e[0])}),f=L(e[0].childNodes,i);h.length;){var S=h.shift(),E=h.shift(),k=h.shift(),A=h.shift(),T=e[0]
if(!S.$$destroyed){if(E!==p){var O=E.className
c.hasElementTranscludeDirective&&$.replace||(T=Nt(d)),ft(k,Pr(E),T),I(Pr(T),O)}x=l.transcludeOnThisElement?U(S,l.transclude,A):A,l(f,S,T,r,x)}}h=null}),function(t,e,n,r,i){var o=i
e.$$destroyed||(h?h.push(e,n,r,o):(l.transcludeOnThisElement&&(o=U(e,l.transclude,i)),l(f,e,n,r,o)))}}function it(t,e){var n=e.priority-t.priority
return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function ot(t,e,n,r){function i(t){return t?" (module: "+t+")":""}if(e)throw Hi("multidir","Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",e.name,i(e.$$moduleName),n.name,i(n.$$moduleName),t,X(r))}function at(t,e){var n=r(e,!0)
n&&t.push({priority:0,compile:function(t){var e=t.parent(),r=!!e.length
return r&&R.$$addBindingClass(e),function(t,e){var i=e.parent()
r||R.$$addBindingClass(i),R.$$addBindingInfo(i,n.expressions),t.$watch(n,function(t){e[0].nodeValue=t})}}})}function st(t,n){switch(t=Mr(t||"html")){case"svg":case"math":var r=e.createElement("div")
return r.innerHTML="<"+t+">"+n+"</"+t+">",r.childNodes[0].childNodes
default:return n}}function ut(t,e){if("srcdoc"==e)return E.HTML
var n=_(t)
return"xlinkHref"==e||"form"==n&&"action"==e||"img"!=n&&("src"==e||"ngSrc"==e)?E.RESOURCE_URL:void 0}function ct(t,e,n,i,o){var a=ut(t,i)
o=g[i]||o
var s=r(n,!0,a,o)
if(s){if("multiple"===i&&"select"===_(t))throw Hi("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",X(t))
e.push({priority:100,compile:function(){return{pre:function(t,e,u){var c=u.$$observers||(u.$$observers=mt())
if(S.test(i))throw Hi("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.")
var l=u[i]
l!==n&&(s=l&&r(l,!0,a,o),n=l),s&&(u[i]=s(t),(c[i]||(c[i]=[])).$$inter=!0,(u.$$observers&&u.$$observers[i].$$scope||t).$watch(s,function(t,e){"class"===i&&t!=e?u.$updateClass(t,e):u.$set(i,t)}))}}}})}}function ft(t,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode
if(t)for(i=0,o=t.length;i<o;i++)if(t[i]==a){t[i++]=r
for(var c=i,l=c+s-1,f=t.length;c<f;c++,l++)l<f?t[c]=t[l]:delete t[c]
t.length-=s-1,t.context===a&&(t.context=r)
break}u&&u.replaceChild(r,a)
var h=e.createDocumentFragment()
for(i=0;i<s;i++)h.appendChild(n[i])
for(Pr.hasData(a)&&(Pr.data(r,Pr.data(a)),Pr(a).off("$destroy")),Pr.cleanData(h.querySelectorAll("*")),i=1;i<s;i++)delete n[i]
n[0]=r,n.length=1}function pt(t,e){return f(function(){return t.apply(null,arguments)},t,e)}function dt(t,e,n,r,o,a){try{t(e,n,r,o,a)}catch(s){i(s,X(n))}}function $t(t,e,i,a,s){function c(e,n,r){k(i.$onChanges)&&n!==r&&(vt||(t.$$postDigest(N),vt=[]),f||(f={},vt.push(l)),f[e]&&(r=f[e].previousValue),f[e]={previousValue:r,currentValue:n})}function l(){i.$onChanges(f),f=n}var f,h=[]
return o(a,function(n,o){var a,l,f,p,d,v=n.attrName,m=n.optional,g=n.mode
switch(g){case"@":m||Or.call(e,v)||(i[o]=e[v]=void 0),e.$observe(v,function(t){if(C(t)){var e=i[o]
c(o,t,e),i[o]=t}}),e.$$observers[v].$$scope=t,a=e[v],C(a)?i[o]=r(a)(t):j(a)&&(i[o]=a)
break
case"=":if(!Or.call(e,v)){if(m)break
e[v]=void 0}if(m&&!e[v])break
l=u(e[v]),p=l.literal?H:function(t,e){return t===e||t!==t&&e!==e},f=l.assign||function(){throw a=i[o]=l(t),Hi("nonassign","Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",e[v],v,s.name)},a=i[o]=l(t)
var y=function(e){return p(e,i[o])||(p(e,a)?f(t,e=i[o]):i[o]=e),a=e}
y.$stateful=!0,d=n.collection?t.$watchCollection(e[v],y):t.$watch(u(e[v],y),null,l.literal),h.push(d)
break
case"<":if(!Or.call(e,v)){if(m)break
e[v]=void 0}if(m&&!e[v])break
l=u(e[v]),i[o]=l(t),d=t.$watch(l,function(t){var e=i[o]
c(o,t,e),i[o]=t},l.literal),h.push(d)
break
case"&":if(l=e.hasOwnProperty(v)?u(e[v]):$,l===$&&m)break
i[o]=function(e){return l(t,e)}}}),h.length&&function(){for(var t=0,e=h.length;t<e;++t)h[t]()}}var vt,gt=/^\w/,yt=e.createElement("div"),bt=T
V.prototype={$normalize:$e,$addClass:function(t){t&&t.length>0&&M.addClass(this.$$element,t)},$removeClass:function(t){t&&t.length>0&&M.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=ve(t,e)
n&&n.length&&M.addClass(this.$$element,n)
var r=ve(e,t)
r&&r.length&&M.removeClass(this.$$element,r)},$set:function(t,e,n,r){var a,s=this.$$element[0],u=Gt(s,t),c=Jt(t),l=t
if(u?(this.$$element.prop(t,e),r=u):c&&(this[c]=e,l=c),this[t]=e,r?this.$attr[t]=r:(r=this.$attr[t],r||(this.$attr[t]=r=lt(t,"-"))),a=_(this.$$element),"a"===a&&("href"===t||"xlinkHref"===t)||"img"===a&&"src"===t)this[t]=e=D(e,"src"===t)
else if("img"===a&&"srcset"===t){for(var f="",h=Jr(e),p=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,d=/\s/.test(h)?p:/(,)/,$=h.split(d),v=Math.floor($.length/2),m=0;m<v;m++){var g=2*m
f+=D(Jr($[g]),!0),f+=" "+Jr($[g+1])}var b=Jr($[2*m]).split(/\s/)
f+=D(Jr(b[0]),!0),2===b.length&&(f+=" "+Jr(b[1])),this[t]=e=f}n!==!1&&(null===e||y(e)?this.$$element.removeAttr(r):gt.test(r)?this.$$element.attr(r,e):P(this.$$element[0],r,e))
var w=this.$$observers
w&&o(w[l],function(t){try{t(e)}catch(n){i(n)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers=mt()),i=r[t]||(r[t]=[])
return i.push(e),b.$evalAsync(function(){i.$$inter||!n.hasOwnProperty(t)||y(n[t])||e(n[t])}),function(){F(i,e)}}}
var wt=r.startSymbol(),xt=r.endSymbol(),Ct="{{"==wt&&"}}"==xt?v:function(t){return t.replace(/\{\{/g,wt).replace(/}}/g,xt)},Et=/^ngAttr[A-Z]/,kt=/^(.+)Start$/
return R.$$addBindingInfo=A?function(t,e){var n=t.data("$binding")||[]
Wr(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:$,R.$$addBindingClass=A?function(t){I(t,"ng-binding")}:$,R.$$addScopeInfo=A?function(t,e,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope"
t.data(i,e)}:$,R.$$addScopeClass=A?function(t,e){I(t,e?"ng-isolate-scope":"ng-scope")}:$,R.$$createComment=function(t,n){var r=""
return A&&(r=" "+(t||"")+": "+(n||"")+" "),e.createComment(r)},R}]}function $e(t){return Ct(t.replace(Bi,""))}function ve(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/)
t:for(var o=0;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue t
n+=(n.length>0?" ":"")+a}return n}function me(t){t=Pr(t)
var e=t.length
if(e<=1)return t
for(;e--;){var n=t[e]
n.nodeType===oi&&_r.call(t,e,1)}return t}function ge(t,e){if(e&&C(e))return e
if(C(t)){var n=Wi.exec(t)
if(n)return n[3]}}function ye(){var t={},e=!1
this.has=function(e){return t.hasOwnProperty(e)},this.register=function(e,n){dt(e,"controller"),w(e)?f(t,e):t[e]=n},this.allowGlobals=function(){e=!0},this.$get=["$injector","$window",function(i,o){function a(t,e,n,i){if(!t||!w(t.$scope))throw r("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,e)
t.$scope[e]=n}return function(r,s,u,c){var l,h,p,d
if(u=u===!0,c&&C(c)&&(d=c),C(r)){if(h=r.match(Wi),!h)throw zi("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",r)
p=h[1],d=d||h[3],r=t.hasOwnProperty(p)?t[p]:$t(s.$scope,p,!0)||(e?$t(o,p,!0):n),pt(r,p,!0)}if(u){var $=(Wr(r)?r[r.length-1]:r).prototype
l=Object.create($||null),d&&a(s,d,l,p||r.name)
var v
return v=f(function(){var t=i.invoke(r,l,s,p)
return t!==l&&(w(t)||k(t))&&(l=t,d&&a(s,d,l,p||r.name)),l},{instance:l,identifier:d})}return l=i.instantiate(r,s,p),d&&a(s,d,l,p||r.name),l}}]}function be(){this.$get=["$window",function(t){return Pr(t.document)}]}function we(){this.$get=["$log",function(t){return function(e,n){t.error.apply(t,arguments)}}]}function xe(t){return w(t)?E(t)?t.toISOString():J(t):t}function Ce(){this.$get=function(){return function(t){if(!t)return""
var e=[]
return a(t,function(t,n){null===t||y(t)||(Wr(t)?o(t,function(t){e.push(it(n)+"="+it(xe(t)))}):e.push(it(n)+"="+it(xe(t))))}),e.join("&")}}}function Se(){this.$get=function(){return function(t){function e(t,r,i){null===t||y(t)||(Wr(t)?o(t,function(t,n){e(t,r+"["+(w(t)?n:"")+"]")}):w(t)&&!E(t)?a(t,function(t,n){e(t,r+(i?"":"[")+n+(i?"":"]"))}):n.push(it(r)+"="+it(xe(t))))}if(!t)return""
var n=[]
return e(t,"",!0),n.join("&")}}}function Ee(t,e){if(C(t)){var n=t.replace(Qi,"").trim()
if(n){var r=e("Content-Type");(r&&0===r.indexOf(Ji)||ke(n))&&(t=K(n))}}return t}function ke(t){var e=t.match(Yi)
return e&&Zi[e[0]].test(t)}function Ae(t){function e(t,e){t&&(r[t]=r[t]?r[t]+", "+e:e)}var n,r=mt()
return C(t)?o(t.split("\n"),function(t){n=t.indexOf(":"),e(Mr(Jr(t.substr(0,n))),Jr(t.substr(n+1)))}):w(t)&&o(t,function(t,n){e(Mr(n),Jr(t))}),r}function Te(t){var e
return function(n){if(e||(e=Ae(t)),n){var r=e[Mr(n)]
return void 0===r&&(r=null),r}return e}}function Oe(t,e,n,r){return k(r)?r(t,e,n):(o(r,function(r){t=r(t,e,n)}),t)}function Me(t){return 200<=t&&t<300}function De(){var t=this.defaults={transformResponse:[Ee],transformRequest:[function(t){return!w(t)||M(t)||N(t)||D(t)?t:J(t)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:U(Ki),put:U(Ki),patch:U(Ki)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},e=!1
this.useApplyAsync=function(t){return b(t)?(e=!!t,this):e}
var i=!0
this.useLegacyPromiseExtensions=function(t){return b(t)?(i=!!t,this):i}
var a=this.interceptors=[]
this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(s,u,c,l,h,p){function d(e){function a(t){var e=f({},t)
return e.data=Oe(t.data,t.headers,t.status,c.transformResponse),Me(t.status)?e:h.reject(e)}function s(t,e){var n,r={}
return o(t,function(t,i){k(t)?(n=t(e),null!=n&&(r[i]=n)):r[i]=t}),r}function u(e){var n,r,i,o=t.headers,a=f({},e.headers)
o=f({},o.common,o[Mr(e.method)])
t:for(n in o){r=Mr(n)
for(i in a)if(Mr(i)===r)continue t
a[n]=o[n]}return s(a,U(e))}if(!w(e))throw r("$http")("badreq","Http request configuration must be an object.  Received: {0}",e)
if(!C(e.url))throw r("$http")("badreq","Http request configuration url must be a string.  Received: {0}",e.url)
var c=f({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse,paramSerializer:t.paramSerializer},e)
c.headers=u(e),c.method=Dr(c.method),c.paramSerializer=C(c.paramSerializer)?p.get(c.paramSerializer):c.paramSerializer
var l=function(e){var r=e.headers,i=Oe(e.data,Te(r),n,e.transformRequest)
return y(i)&&o(r,function(t,e){"content-type"===Mr(e)&&delete r[e]}),y(e.withCredentials)&&!y(t.withCredentials)&&(e.withCredentials=t.withCredentials),m(e,i).then(a,a)},d=[l,n],$=h.when(c)
for(o(S,function(t){(t.request||t.requestError)&&d.unshift(t.request,t.requestError),(t.response||t.responseError)&&d.push(t.response,t.responseError)});d.length;){var v=d.shift(),g=d.shift()
$=$.then(v,g)}return i?($.success=function(t){return pt(t,"fn"),$.then(function(e){t(e.data,e.status,e.headers,c)}),$},$.error=function(t){return pt(t,"fn"),$.then(null,function(e){t(e.data,e.status,e.headers,c)}),$}):($.success=to("success"),$.error=to("error")),$}function $(t){o(arguments,function(t){d[t]=function(e,n){return d(f({},n||{},{method:t,url:e}))}})}function v(t){o(arguments,function(t){d[t]=function(e,n,r){return d(f({},r||{},{method:t,url:e,data:n}))}})}function m(r,i){function o(t,n,r,i){function o(){a(n,t,r,i)}p&&(Me(t)?p.put(S,[t,n,Ae(r),i]):p.remove(S)),e?l.$applyAsync(o):(o(),l.$$phase||l.$apply())}function a(t,e,n,i){e=e>=-1?e:0,(Me(e)?v.resolve:v.reject)({data:t,status:e,headers:Te(n),config:r,statusText:i})}function c(t){a(t.data,t.status,U(t.headers()),t.statusText)}function f(){var t=d.pendingRequests.indexOf(r)
t!==-1&&d.pendingRequests.splice(t,1)}var p,$,v=h.defer(),m=v.promise,C=r.headers,S=g(r.url,r.paramSerializer(r.params))
if(d.pendingRequests.push(r),m.then(f,f),!r.cache&&!t.cache||r.cache===!1||"GET"!==r.method&&"JSONP"!==r.method||(p=w(r.cache)?r.cache:w(t.cache)?t.cache:x),p&&($=p.get(S),b($)?V($)?$.then(c,c):Wr($)?a($[1],$[0],U($[2]),$[3]):a($,200,{},"OK"):p.put(S,m)),y($)){var E=jn(r.url)?u()[r.xsrfCookieName||t.xsrfCookieName]:n
E&&(C[r.xsrfHeaderName||t.xsrfHeaderName]=E),s(r.method,S,i,o,C,r.timeout,r.withCredentials,r.responseType)}return m}function g(t,e){return e.length>0&&(t+=(t.indexOf("?")==-1?"?":"&")+e),t}var x=c("$http")
t.paramSerializer=C(t.paramSerializer)?p.get(t.paramSerializer):t.paramSerializer
var S=[]
return o(a,function(t){S.unshift(C(t)?p.get(t):p.invoke(t))}),d.pendingRequests=[],$("get","delete","head","jsonp"),v("post","put","patch"),d.defaults=t,d}]}function Ne(){this.$get=function(){return function(){return new t.XMLHttpRequest}}}function je(){this.$get=["$browser","$window","$document","$xhrFactory",function(t,e,n,r){return Ve(t,r,t.defer,e.angular.callbacks,n[0])}]}function Ve(t,e,n,r,i){function a(t,e,n){var o=i.createElement("script"),a=null
return o.type="text/javascript",o.src=t,o.async=!0,a=function(t){hi(o,"load",a),hi(o,"error",a),i.body.removeChild(o),o=null
var s=-1,u="unknown"
t&&("load"!==t.type||r[e].called||(t={type:"error"}),u=t.type,s="error"===t.type?404:200),n&&n(s,u)},fi(o,"load",a),fi(o,"error",a),i.body.appendChild(o),a}return function(i,s,u,c,l,f,h,p){function d(){g&&g(),w&&w.abort()}function v(e,r,i,o,a){b(S)&&n.cancel(S),g=w=null,e(r,i,o,a),t.$$completeOutstandingRequest($)}if(t.$$incOutstandingRequestCount(),s=s||t.url(),"jsonp"==Mr(i)){var m="_"+(r.counter++).toString(36)
r[m]=function(t){r[m].data=t,r[m].called=!0}
var g=a(s.replace("JSON_CALLBACK","angular.callbacks."+m),m,function(t,e){v(c,t,r[m].data,"",e),r[m]=$})}else{var w=e(i,s)
w.open(i,s,!0),o(l,function(t,e){b(t)&&w.setRequestHeader(e,t)}),w.onload=function(){var t=w.statusText||"",e="response"in w?w.response:w.responseText,n=1223===w.status?204:w.status
0===n&&(n=e?200:"file"==Nn(s).protocol?404:0),v(c,n,e,w.getAllResponseHeaders(),t)}
var x=function(){v(c,-1,null,null,"")}
if(w.onerror=x,w.onabort=x,h&&(w.withCredentials=!0),p)try{w.responseType=p}catch(C){if("json"!==p)throw C}w.send(y(u)?null:u)}if(f>0)var S=n(d,f)
else V(f)&&f.then(d)}}function Pe(){var t="{{",e="}}"
this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(t){return"\\\\\\"+t}function a(n){return n.replace(p,t).replace(d,e)}function s(t){if(null==t)return""
switch(typeof t){case"string":break
case"number":t=""+t
break
default:t=J(t)}return t}function u(t,e,n,r){var i
return i=t.$watch(function(t){return i(),r(t)},e,n)}function c(o,c,p,d){function $(t){try{return t=N(t),d&&!b(t)?t:s(t)}catch(e){r(eo.interr(o,e))}}if(!o.length||o.indexOf(t)===-1){var v
if(!c){var g=a(o)
v=m(g),v.exp=o,v.expressions=[],v.$$watchDelegate=u}return v}d=!!d
for(var w,x,C,S=0,E=[],A=[],T=o.length,O=[],M=[];S<T;){if((w=o.indexOf(t,S))==-1||(x=o.indexOf(e,w+l))==-1){S!==T&&O.push(a(o.substring(S)))
break}S!==w&&O.push(a(o.substring(S,w))),C=o.substring(w+l,x),E.push(C),A.push(n(C,$)),S=x+h,M.push(O.length),O.push("")}if(p&&O.length>1&&eo.throwNoconcat(o),!c||E.length){var D=function(t){for(var e=0,n=E.length;e<n;e++){if(d&&y(t[e]))return
O[M[e]]=t[e]}return O.join("")},N=function(t){return p?i.getTrusted(p,t):i.valueOf(t)}
return f(function(t){var e=0,n=E.length,i=new Array(n)
try{for(;e<n;e++)i[e]=A[e](t)
return D(i)}catch(a){r(eo.interr(o,a))}},{exp:o,expressions:E,$$watchDelegate:function(t,e){var n
return t.$watchGroup(A,function(r,i){var o=D(r)
k(e)&&e.call(this,o,r!==i?n:o,t),n=o})}})}}var l=t.length,h=e.length,p=new RegExp(t.replace(/./g,o),"g"),d=new RegExp(e.replace(/./g,o),"g")
return c.startSymbol=function(){return t},c.endSymbol=function(){return e},c}]}function Ie(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(t,e,n,r,i){function o(o,s,u,c){function l(){f?o.apply(null,h):o($)}var f=arguments.length>4,h=f?z(arguments,4):[],p=e.setInterval,d=e.clearInterval,$=0,v=b(c)&&!c,m=(v?r:n).defer(),g=m.promise
return u=b(u)?u:0,g.$$intervalId=p(function(){v?i.defer(l):t.$evalAsync(l),m.notify($++),u>0&&$>=u&&(m.resolve($),d(g.$$intervalId),delete a[g.$$intervalId]),v||t.$apply()},s),a[g.$$intervalId]=m,g}var a={}
return o.cancel=function(t){return!!(t&&t.$$intervalId in a)&&(a[t.$$intervalId].reject("canceled"),e.clearInterval(t.$$intervalId),delete a[t.$$intervalId],!0)},o}]}function Re(t){for(var e=t.split("/"),n=e.length;n--;)e[n]=rt(e[n])
return e.join("/")}function qe(t,e){var n=Nn(t)
e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=p(n.port)||ro[n.protocol]||null}function _e(t,e){var n="/"!==t.charAt(0)
n&&(t="/"+t)
var r=Nn(t)
e.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),e.$$search=et(r.search),e.$$hash=decodeURIComponent(r.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function Fe(t,e){if(0===e.indexOf(t))return e.substr(t.length)}function Le(t){var e=t.indexOf("#")
return e==-1?t:t.substr(0,e)}function Ue(t){return t.replace(/(#.+)|#$/,"$1")}function He(t){return t.substr(0,Le(t).lastIndexOf("/")+1)}function Be(t){return t.substring(0,t.indexOf("/",t.indexOf("//")+2))}function ze(t,e,n){this.$$html5=!0,n=n||"",qe(t,this),this.$$parse=function(t){var n=Fe(e,t)
if(!C(n))throw io("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',t,e)
_e(n,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=nt(this.$$search),n=this.$$hash?"#"+rt(this.$$hash):""
this.$$url=Re(this.$$path)+(t?"?"+t:"")+n,this.$$absUrl=e+this.$$url.substr(1)},this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0
var o,a,s
return b(o=Fe(t,r))?(a=o,s=b(o=Fe(n,o))?e+(Fe("/",o)||o):t+a):b(o=Fe(e,r))?s=e+o:e==r+"/"&&(s=e),s&&this.$$parse(s),!!s}}function We(t,e,n){qe(t,this),this.$$parse=function(r){function i(t,e,n){var r,i=/^\/[A-Z]:(\/.*)/
return 0===e.indexOf(n)&&(e=e.replace(n,"")),i.exec(e)?t:(r=i.exec(t),r?r[1]:t)}var o,a=Fe(t,r)||Fe(e,r)
y(a)||"#"!==a.charAt(0)?this.$$html5?o=a:(o="",y(a)&&(t=r,this.replace())):(o=Fe(n,a),y(o)&&(o=a)),_e(o,this),this.$$path=i(this.$$path,o,t),this.$$compose()},this.$$compose=function(){var e=nt(this.$$search),r=this.$$hash?"#"+rt(this.$$hash):""
this.$$url=Re(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+(this.$$url?n+this.$$url:"")},this.$$parseLinkUrl=function(e,n){return Le(t)==Le(e)&&(this.$$parse(e),!0)}}function Ge(t,e,n){this.$$html5=!0,We.apply(this,arguments),this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0
var o,a
return t==Le(r)?o=r:(a=Fe(e,r))?o=t+n+a:e===r+"/"&&(o=e),o&&this.$$parse(o),!!o},this.$$compose=function(){var e=nt(this.$$search),r=this.$$hash?"#"+rt(this.$$hash):""
this.$$url=Re(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+n+this.$$url}}function Je(t){return function(){return this[t]}}function Ke(t,e){return function(n){return y(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function Ye(){var t="",e={enabled:!1,requireBase:!0,rewriteLinks:!0}
this.hashPrefix=function(e){return b(e)?(t=e,this):t},this.html5Mode=function(t){return j(t)?(e.enabled=t,this):w(t)?(j(t.enabled)&&(e.enabled=t.enabled),j(t.requireBase)&&(e.requireBase=t.requireBase),j(t.rewriteLinks)&&(e.rewriteLinks=t.rewriteLinks),this):e},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){function s(t,e,n){var i=c.url(),o=c.$$state
try{r.url(t,e,n),c.$$state=r.state()}catch(a){throw c.url(i),c.$$state=o,a}}function u(t,e){n.$broadcast("$locationChangeSuccess",c.absUrl(),t,c.$$state,e)}var c,l,f,h=r.baseHref(),p=r.url()
if(e.enabled){if(!h&&e.requireBase)throw io("nobase","$location in HTML5 mode requires a <base> tag to be present!")
f=Be(p)+(h||"/"),l=i.history?ze:Ge}else f=Le(p),l=We
var d=He(f)
c=new l(f,d,"#"+t),c.$$parseLinkUrl(p,p),c.$$state=r.state()
var $=/^\s*(javascript|mailto):/i
o.on("click",function(t){if(e.rewriteLinks&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&2!=t.which&&2!=t.button){for(var i=Pr(t.target);"a"!==_(i[0]);)if(i[0]===o[0]||!(i=i.parent())[0])return
var s=i.prop("href"),u=i.attr("href")||i.attr("xlink:href")
w(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=Nn(s.animVal).href),$.test(s)||!s||i.attr("target")||t.isDefaultPrevented()||c.$$parseLinkUrl(s,u)&&(t.preventDefault(),c.absUrl()!=r.url()&&(n.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),Ue(c.absUrl())!=Ue(p)&&r.url(c.absUrl(),!0)
var v=!0
return r.onUrlChange(function(t,e){return y(Fe(d,t))?void(a.location.href=t):(n.$evalAsync(function(){var r,i=c.absUrl(),o=c.$$state
t=Ue(t),c.$$parse(t),c.$$state=e,r=n.$broadcast("$locationChangeStart",t,i,e,o).defaultPrevented,c.absUrl()===t&&(r?(c.$$parse(i),c.$$state=o,s(i,!1,o)):(v=!1,u(i,o)))}),void(n.$$phase||n.$digest()))}),n.$watch(function(){var t=Ue(r.url()),e=Ue(c.absUrl()),o=r.state(),a=c.$$replace,l=t!==e||c.$$html5&&i.history&&o!==c.$$state;(v||l)&&(v=!1,n.$evalAsync(function(){var e=c.absUrl(),r=n.$broadcast("$locationChangeStart",e,t,c.$$state,o).defaultPrevented
c.absUrl()===e&&(r?(c.$$parse(t),c.$$state=o):(l&&s(e,a,o===c.$$state?null:c.$$state),u(t,o)))})),c.$$replace=!1}),c}]}function Ze(){var t=!0,e=this
this.debugEnabled=function(e){return b(e)?(t=e,this):t},this.$get=["$window",function(n){function r(t){return t instanceof Error&&(t.stack?t=t.message&&t.stack.indexOf(t.message)===-1?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function i(t){var e=n.console||{},i=e[t]||e.log||$,a=!1
try{a=!!i.apply}catch(s){}return a?function(){var t=[]
return o(arguments,function(e){t.push(r(e))}),i.apply(e,t)}:function(t,e){i(t,null==e?"":e)}}return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug")
return function(){t&&n.apply(e,arguments)}}()}}]}function Qe(t,e){if("__defineGetter__"===t||"__defineSetter__"===t||"__lookupGetter__"===t||"__lookupSetter__"===t||"__proto__"===t)throw ao("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",e)
return t}function Xe(t){return t+""}function tn(t,e){if(t){if(t.constructor===t)throw ao("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e)
if(t.window===t)throw ao("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",e)
if(t.children&&(t.nodeName||t.prop&&t.attr&&t.find))throw ao("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",e)
if(t===Object)throw ao("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",e)}return t}function en(t,e){if(t){if(t.constructor===t)throw ao("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e)
if(t===so||t===uo||t===co)throw ao("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",e)}}function nn(t,e){if(t&&(t===(0).constructor||t===(!1).constructor||t==="".constructor||t==={}.constructor||t===[].constructor||t===Function.constructor))throw ao("isecaf","Assigning to a constructor is disallowed! Expression: {0}",e)}function rn(t,e){return"undefined"!=typeof t?t:e}function on(t,e){return"undefined"==typeof t?e:"undefined"==typeof e?t:t+e}function an(t,e){var n=t(e)
return!n.$stateful}function sn(t,e){var n,r
switch(t.type){case po.Program:n=!0,o(t.body,function(t){sn(t.expression,e),n=n&&t.expression.constant}),t.constant=n
break
case po.Literal:t.constant=!0,t.toWatch=[]
break
case po.UnaryExpression:sn(t.argument,e),t.constant=t.argument.constant,t.toWatch=t.argument.toWatch
break
case po.BinaryExpression:sn(t.left,e),sn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.left.toWatch.concat(t.right.toWatch)
break
case po.LogicalExpression:sn(t.left,e),sn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.constant?[]:[t]
break
case po.ConditionalExpression:sn(t.test,e),sn(t.alternate,e),sn(t.consequent,e),t.constant=t.test.constant&&t.alternate.constant&&t.consequent.constant,t.toWatch=t.constant?[]:[t]
break
case po.Identifier:t.constant=!1,t.toWatch=[t]
break
case po.MemberExpression:sn(t.object,e),t.computed&&sn(t.property,e),t.constant=t.object.constant&&(!t.computed||t.property.constant),t.toWatch=[t]
break
case po.CallExpression:n=!!t.filter&&an(e,t.callee.name),r=[],o(t.arguments,function(t){sn(t,e),n=n&&t.constant,t.constant||r.push.apply(r,t.toWatch)}),t.constant=n,t.toWatch=t.filter&&an(e,t.callee.name)?r:[t]
break
case po.AssignmentExpression:sn(t.left,e),sn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=[t]
break
case po.ArrayExpression:n=!0,r=[],o(t.elements,function(t){sn(t,e),n=n&&t.constant,t.constant||r.push.apply(r,t.toWatch)}),t.constant=n,t.toWatch=r
break
case po.ObjectExpression:n=!0,r=[],o(t.properties,function(t){sn(t.value,e),n=n&&t.value.constant,t.value.constant||r.push.apply(r,t.value.toWatch)}),t.constant=n,t.toWatch=r
break
case po.ThisExpression:t.constant=!1,t.toWatch=[]
break
case po.LocalsExpression:t.constant=!1,t.toWatch=[]}}function un(t){if(1==t.length){var e=t[0].expression,r=e.toWatch
return 1!==r.length?r:r[0]!==e?r:n}}function cn(t){return t.type===po.Identifier||t.type===po.MemberExpression}function ln(t){if(1===t.body.length&&cn(t.body[0].expression))return{type:po.AssignmentExpression,left:t.body[0].expression,right:{type:po.NGValueParameter},operator:"="}}function fn(t){return 0===t.body.length||1===t.body.length&&(t.body[0].expression.type===po.Literal||t.body[0].expression.type===po.ArrayExpression||t.body[0].expression.type===po.ObjectExpression)}function hn(t){return t.constant}function pn(t,e){this.astBuilder=t,this.$filter=e}function dn(t,e){this.astBuilder=t,this.$filter=e}function $n(t){return"constructor"==t}function vn(t){return k(t.valueOf)?t.valueOf():vo.call(t)}function mn(){var t=mt(),e=mt(),r={"true":!0,"false":!1,"null":null,undefined:n}
this.addLiteral=function(t,e){r[t]=e},this.$get=["$filter",function(i){function a(n,r,o){var a,u,d
switch(o=o||g,typeof n){case"string":n=n.trim(),d=n
var y=o?e:t
if(a=y[d],!a){":"===n.charAt(0)&&":"===n.charAt(1)&&(u=!0,n=n.substring(2))
var b=o?m:v,w=new ho(b),x=new $o(w,i,b)
a=x.parse(n),a.constant?a.$$watchDelegate=h:u?a.$$watchDelegate=a.literal?f:l:a.inputs&&(a.$$watchDelegate=c),o&&(a=s(a)),y[d]=a}return p(a,r)
case"function":return p(n,r)
default:return p($,r)}}function s(t){function e(e,n,r,i){var o=g
g=!0
try{return t(e,n,r,i)}finally{g=o}}if(!t)return t
e.$$watchDelegate=t.$$watchDelegate,e.assign=s(t.assign),e.constant=t.constant,e.literal=t.literal
for(var n=0;t.inputs&&n<t.inputs.length;++n)t.inputs[n]=s(t.inputs[n])
return e.inputs=t.inputs,e}function u(t,e){return null==t||null==e?t===e:("object"!=typeof t||(t=vn(t),"object"!=typeof t))&&(t===e||t!==t&&e!==e)}function c(t,e,r,i,o){var a,s=i.inputs
if(1===s.length){var c=u
return s=s[0],t.$watch(function(t){var e=s(t)
return u(e,c)||(a=i(t,n,n,[e]),c=e&&vn(e)),a},e,r,o)}for(var l=[],f=[],h=0,p=s.length;h<p;h++)l[h]=u,f[h]=null
return t.$watch(function(t){for(var e=!1,r=0,o=s.length;r<o;r++){var c=s[r](t);(e||(e=!u(c,l[r])))&&(f[r]=c,l[r]=c&&vn(c))}return e&&(a=i(t,n,n,f)),a},e,r,o)}function l(t,e,n,r){var i,o
return i=t.$watch(function(t){return r(t)},function(t,n,r){o=t,k(e)&&e.apply(this,arguments),b(t)&&r.$$postDigest(function(){b(o)&&i()})},n)}function f(t,e,n,r){function i(t){var e=!0
return o(t,function(t){b(t)||(e=!1)}),e}var a,s
return a=t.$watch(function(t){return r(t)},function(t,n,r){s=t,k(e)&&e.call(this,t,n,r),i(t)&&r.$$postDigest(function(){i(s)&&a()})},n)}function h(t,e,n,r){var i
return i=t.$watch(function(t){return i(),r(t)},e,n)}function p(t,e){if(!e)return t
var n=t.$$watchDelegate,r=!1,i=n!==f&&n!==l,o=i?function(n,i,o,a){var s=r&&a?a[0]:t(n,i,o,a)
return e(s,n,i)}:function(n,r,i,o){var a=t(n,r,i,o),s=e(a,n,r)
return b(a)?s:a}
return t.$$watchDelegate&&t.$$watchDelegate!==c?o.$$watchDelegate=t.$$watchDelegate:e.$stateful||(o.$$watchDelegate=c,r=!t.inputs,o.inputs=t.inputs?t.inputs:[t]),o}var d=Yr().noUnsafeEval,v={csp:d,expensiveChecks:!1,literals:L(r)},m={csp:d,expensiveChecks:!0,literals:L(r)},g=!1
return a.$$runningExpensiveChecks=function(){return g},a}]}function gn(){this.$get=["$rootScope","$exceptionHandler",function(t,e){return bn(function(e){t.$evalAsync(e)},e)}]}function yn(){this.$get=["$browser","$exceptionHandler",function(t,e){return bn(function(e){t.defer(e)},e)}]}function bn(t,e){function i(){this.$$state={status:0}}function a(t,e){return function(n){e.call(t,n)}}function s(t){var r,i,o
o=t.pending,t.processScheduled=!1,t.pending=n
for(var a=0,s=o.length;a<s;++a){i=o[a][0],r=o[a][t.status]
try{k(r)?i.resolve(r(t.value)):1===t.status?i.resolve(t.value):i.reject(t.value)}catch(u){i.reject(u),e(u)}}}function u(e){!e.processScheduled&&e.pending&&(e.processScheduled=!0,t(function(){s(e)}))}function c(){this.promise=new i}function l(t){var e=new c,n=0,r=Wr(t)?[]:{}
return o(t,function(t,i){n++,m(t).then(function(t){r.hasOwnProperty(i)||(r[i]=t,--n||e.resolve(r))},function(t){r.hasOwnProperty(i)||e.reject(t)})}),0===n&&e.resolve(r),e.promise}var h=r("$q",TypeError),p=function(){var t=new c
return t.resolve=a(t,t.resolve),t.reject=a(t,t.reject),t.notify=a(t,t.notify),t}
f(i.prototype,{then:function(t,e,n){if(y(t)&&y(e)&&y(n))return this
var r=new c
return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,t,e,n]),this.$$state.status>0&&u(this.$$state),r.promise},"catch":function(t){return this.then(null,t)},"finally":function(t,e){return this.then(function(e){return v(e,!0,t)},function(e){return v(e,!1,t)},e)}}),f(c.prototype,{resolve:function(t){this.promise.$$state.status||(t===this.promise?this.$$reject(h("qcycle","Expected promise to be resolved with value other than itself '{0}'",t)):this.$$resolve(t))},$$resolve:function(t){function n(t){s||(s=!0,o.$$resolve(t))}function r(t){s||(s=!0,o.$$reject(t))}var i,o=this,s=!1
try{(w(t)||k(t))&&(i=t&&t.then),k(i)?(this.promise.$$state.status=-1,i.call(t,n,r,a(this,this.notify))):(this.promise.$$state.value=t,this.promise.$$state.status=1,u(this.promise.$$state))}catch(c){r(c),e(c)}},reject:function(t){this.promise.$$state.status||this.$$reject(t)},$$reject:function(t){this.promise.$$state.value=t,this.promise.$$state.status=2,u(this.promise.$$state)},notify:function(n){var r=this.promise.$$state.pending
this.promise.$$state.status<=0&&r&&r.length&&t(function(){for(var t,i,o=0,a=r.length;o<a;o++){i=r[o][0],t=r[o][3]
try{i.notify(k(t)?t(n):n)}catch(s){e(s)}}})}})
var d=function(t){var e=new c
return e.reject(t),e.promise},$=function(t,e){var n=new c
return e?n.resolve(t):n.reject(t),n.promise},v=function(t,e,n){var r=null
try{k(n)&&(r=n())}catch(i){return $(i,!1)}return V(r)?r.then(function(){return $(t,e)},function(t){return $(t,!1)}):$(t,e)},m=function(t,e,n,r){var i=new c
return i.resolve(t),i.promise.then(e,n,r)},g=m,b=function(t){function e(t){r.resolve(t)}function n(t){r.reject(t)}if(!k(t))throw h("norslvr","Expected resolverFn, got '{0}'",t)
var r=new c
return t(e,n),r.promise}
return b.prototype=i.prototype,b.defer=p,b.reject=d,b.when=m,b.resolve=g,b.all=l,b}function wn(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame,r=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(t){var e=n(t)
return function(){r(e)}}:function(t){var n=e(t,16.66,!1)
return function(){e.cancel(n)}}
return o.supported=i,o}]}function xn(){function t(t){function e(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=u(),this.$$ChildScope=null}return e.prototype=t,e}var e=10,n=r("$rootScope"),a=null,s=null
this.digestTtl=function(t){return arguments.length&&(e=t),e},this.$get=["$exceptionHandler","$parse","$browser",function(r,c,l){function f(t){t.currentScope.$$destroyed=!0}function h(t){9===Vr&&(t.$$childHead&&h(t.$$childHead),t.$$nextSibling&&h(t.$$nextSibling)),t.$parent=t.$$nextSibling=t.$$prevSibling=t.$$childHead=t.$$childTail=t.$root=t.$$watchers=null}function p(){this.$id=u(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function d(t){if(S.$$phase)throw n("inprog","{0} already in progress",S.$$phase)
S.$$phase=t}function v(){S.$$phase=null}function m(t,e){do t.$$watchersCount+=e
while(t=t.$parent)}function g(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n]
while(t=t.$parent)}function b(){}function x(){for(;T.length;)try{T.shift()()}catch(t){r(t)}s=null}function C(){null===s&&(s=l.defer(function(){S.$apply(x)}))}p.prototype={constructor:p,$new:function(e,n){var r
return n=n||this,e?(r=new p,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=t(this)),r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(e||n!=this)&&r.$on("$destroy",f),r},$watch:function(t,e,n,r){var i=c(t)
if(i.$$watchDelegate)return i.$$watchDelegate(this,e,n,i,t)
var o=this,s=o.$$watchers,u={fn:e,last:b,get:i,exp:r||t,eq:!!n}
return a=null,k(e)||(u.fn=$),s||(s=o.$$watchers=[]),s.unshift(u),m(this,1),function(){F(s,u)>=0&&m(o,-1),a=null}},$watchGroup:function(t,e){function n(){u=!1,c?(c=!1,e(i,i,s)):e(i,r,s)}var r=new Array(t.length),i=new Array(t.length),a=[],s=this,u=!1,c=!0
if(!t.length){var l=!0
return s.$evalAsync(function(){l&&e(i,i,s)}),function(){l=!1}}return 1===t.length?this.$watch(t[0],function(t,n,o){i[0]=t,r[0]=n,e(i,t===n?i:r,o)}):(o(t,function(t,e){var o=s.$watch(t,function(t,o){i[e]=t,r[e]=o,u||(u=!0,s.$evalAsync(n))})
a.push(o)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(t,e){function n(t){o=t
var e,n,r,s,u
if(!y(o)){if(w(o))if(i(o)){a!==p&&(a=p,v=a.length=0,f++),e=o.length,v!==e&&(f++,a.length=v=e)
for(var c=0;c<e;c++)u=a[c],s=o[c],r=u!==u&&s!==s,r||u===s||(f++,a[c]=s)}else{a!==d&&(a=d={},v=0,f++),e=0
for(n in o)Or.call(o,n)&&(e++,s=o[n],u=a[n],n in a?(r=u!==u&&s!==s,r||u===s||(f++,a[n]=s)):(v++,a[n]=s,f++))
if(v>e){f++
for(n in a)Or.call(o,n)||(v--,delete a[n])}}else a!==o&&(a=o,f++)
return f}}function r(){if($?($=!1,e(o,o,u)):e(o,s,u),l)if(w(o))if(i(o)){s=new Array(o.length)
for(var t=0;t<o.length;t++)s[t]=o[t]}else{s={}
for(var n in o)Or.call(o,n)&&(s[n]=o[n])}else s=o}n.$stateful=!0
var o,a,s,u=this,l=e.length>1,f=0,h=c(t,n),p=[],d={},$=!0,v=0
return this.$watch(h,r)},$digest:function(){var t,i,o,u,c,f,h,p,$,m,g,y,w=e,C=this,T=[]
d("$digest"),l.$$checkUrlChange(),this===S&&null!==s&&(l.defer.cancel(s),x()),a=null
do{for(p=!1,m=C;E.length;){try{y=E.shift(),y.scope.$eval(y.expression,y.locals)}catch(O){r(O)}a=null}t:do{if(f=m.$$watchers)for(h=f.length;h--;)try{if(t=f[h])if(c=t.get,(i=c(m))===(o=t.last)||(t.eq?H(i,o):"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))){if(t===a){p=!1
break t}}else p=!0,a=t,t.last=t.eq?L(i,null):i,u=t.fn,u(i,o===b?i:o,m),w<5&&(g=4-w,T[g]||(T[g]=[]),T[g].push({msg:k(t.exp)?"fn: "+(t.exp.name||t.exp.toString()):t.exp,newVal:i,oldVal:o}))}catch(O){r(O)}if(!($=m.$$watchersCount&&m.$$childHead||m!==C&&m.$$nextSibling))for(;m!==C&&!($=m.$$nextSibling);)m=m.$parent}while(m=$)
if((p||E.length)&&!w--)throw v(),n("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",e,T)}while(p||E.length)
for(v();A.length;)try{A.shift()()}catch(O){r(O)}},$destroy:function(){if(!this.$$destroyed){var t=this.$parent
this.$broadcast("$destroy"),this.$$destroyed=!0,this===S&&l.$$applicationDestroyed(),m(this,-this.$$watchersCount)
for(var e in this.$$listenerCount)g(this,this.$$listenerCount[e],e)
t&&t.$$childHead==this&&(t.$$childHead=this.$$nextSibling),t&&t.$$childTail==this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=$,this.$on=this.$watch=this.$watchGroup=function(){return $},this.$$listeners={},this.$$nextSibling=null,h(this)}},$eval:function(t,e){return c(t)(this,e)},$evalAsync:function(t,e){S.$$phase||E.length||l.defer(function(){E.length&&S.$digest()}),E.push({scope:this,expression:c(t),locals:e})},$$postDigest:function(t){A.push(t)},$apply:function(t){try{d("$apply")
try{return this.$eval(t)}finally{v()}}catch(e){r(e)}finally{try{S.$digest()}catch(e){throw r(e),e}}},$applyAsync:function(t){function e(){n.$eval(t)}var n=this
t&&T.push(e),t=c(t),C()},$on:function(t,e){var n=this.$$listeners[t]
n||(this.$$listeners[t]=n=[]),n.push(e)
var r=this
do r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++
while(r=r.$parent)
var i=this
return function(){var r=n.indexOf(e)
r!==-1&&(n[r]=null,g(i,1,t))}},$emit:function(t,e){var n,i,o,a=[],s=this,u=!1,c={name:t,targetScope:s,stopPropagation:function(){u=!0},preventDefault:function(){c.defaultPrevented=!0},defaultPrevented:!1},l=B([c],arguments,1)
do{for(n=s.$$listeners[t]||a,c.currentScope=s,i=0,o=n.length;i<o;i++)if(n[i])try{n[i].apply(null,l)}catch(f){r(f)}else n.splice(i,1),i--,o--
if(u)return c.currentScope=null,c
s=s.$parent}while(s)
return c.currentScope=null,c},$broadcast:function(t,e){var n=this,i=n,o=n,a={name:t,targetScope:n,preventDefault:function(){a.defaultPrevented=!0},defaultPrevented:!1}
if(!n.$$listenerCount[t])return a
for(var s,u,c,l=B([a],arguments,1);i=o;){for(a.currentScope=i,s=i.$$listeners[t]||[],u=0,c=s.length;u<c;u++)if(s[u])try{s[u].apply(null,l)}catch(f){r(f)}else s.splice(u,1),u--,c--
if(!(o=i.$$listenerCount[t]&&i.$$childHead||i!==n&&i.$$nextSibling))for(;i!==n&&!(o=i.$$nextSibling);)i=i.$parent}return a.currentScope=null,a}}
var S=new p,E=S.$$asyncQueue=[],A=S.$$postDigestQueue=[],T=S.$$applyAsyncQueue=[]
return S}]}function Cn(){var t=/^\s*(https?|ftp|mailto|tel|file):/,e=/^\s*((https?|ftp|file|blob):|data:image\/)/
this.aHrefSanitizationWhitelist=function(e){return b(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return b(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i,o=r?e:t
return i=Nn(n).href,""===i||i.match(o)?n:"unsafe:"+i}}}function Sn(t){if("self"===t)return t
if(C(t)){if(t.indexOf("***")>-1)throw mo("iwcard","Illegal sequence *** in string matcher.  String: {0}",t)
return t=Kr(t).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+t+"$")}if(A(t))return new RegExp("^"+t.source+"$")
throw mo("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function En(t){var e=[]
return b(t)&&o(t,function(t){e.push(Sn(t))}),e}function kn(){this.SCE_CONTEXTS=go
var t=["self"],e=[]
this.resourceUrlWhitelist=function(e){return arguments.length&&(t=En(e)),t},this.resourceUrlBlacklist=function(t){return arguments.length&&(e=En(t)),e},this.$get=["$injector",function(n){function r(t,e){return"self"===t?jn(e):!!t.exec(e.href)}function i(n){var i,o,a=Nn(n.toString()),s=!1
for(i=0,o=t.length;i<o;i++)if(r(t[i],a)){s=!0
break}if(s)for(i=0,o=e.length;i<o;i++)if(r(e[i],a)){s=!1
break}return s}function o(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}}
return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}function a(t,e){var n=f.hasOwnProperty(t)?f[t]:null
if(!n)throw mo("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",t,e)
if(null===e||y(e)||""===e)return e
if("string"!=typeof e)throw mo("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",t)
return new n(e)}function s(t){return t instanceof l?t.$$unwrapTrustedValue():t}function u(t,e){if(null===e||y(e)||""===e)return e
var n=f.hasOwnProperty(t)?f[t]:null
if(n&&e instanceof n)return e.$$unwrapTrustedValue()
if(t===go.RESOURCE_URL){if(i(e))return e
throw mo("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",e.toString())}if(t===go.HTML)return c(e)
throw mo("unsafe","Attempting to use an unsafe value in a safe context.")}var c=function(t){throw mo("unsafe","Attempting to use an unsafe value in a safe context.")}
n.has("$sanitize")&&(c=n.get("$sanitize"))
var l=o(),f={}
return f[go.HTML]=o(l),f[go.CSS]=o(l),f[go.URL]=o(l),f[go.JS]=o(l),f[go.RESOURCE_URL]=o(f[go.URL]),{trustAs:a,getTrusted:u,valueOf:s}}]}function An(){var t=!0
this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sceDelegate",function(e,n){if(t&&Vr<8)throw mo("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.")
var r=U(go)
r.isEnabled=function(){return t},r.trustAs=n.trustAs,r.getTrusted=n.getTrusted,r.valueOf=n.valueOf,t||(r.trustAs=r.getTrusted=function(t,e){return e},r.valueOf=v),r.parseAs=function(t,n){var i=e(n)
return i.literal&&i.constant?i:e(n,function(e){return r.getTrusted(t,e)})}
var i=r.parseAs,a=r.getTrusted,s=r.trustAs
return o(go,function(t,e){var n=Mr(e)
r[Ct("parse_as_"+n)]=function(e){return i(t,e)},r[Ct("get_trusted_"+n)]=function(e){return a(t,e)},r[Ct("trust_as_"+n)]=function(e){return s(t,e)}}),r}]}function Tn(){this.$get=["$window","$document",function(t,e){var n,r,i={},o=t.chrome&&t.chrome.app&&t.chrome.app.runtime,a=!o&&t.history&&t.history.pushState,s=p((/android (\d+)/.exec(Mr((t.navigator||{}).userAgent))||[])[1]),u=/Boxee/i.test((t.navigator||{}).userAgent),c=e[0]||{},l=/^(Moz|webkit|ms)(?=[A-Z])/,f=c.body&&c.body.style,h=!1,d=!1
if(f){for(var $ in f)if(r=l.exec($)){n=r[0],n=n.substr(0,1).toUpperCase()+n.substr(1)
break}n||(n="WebkitOpacity"in f&&"webkit"),h=!!("transition"in f||n+"Transition"in f),d=!!("animation"in f||n+"Animation"in f),!s||h&&d||(h=C(f.webkitTransition),d=C(f.webkitAnimation))}return{history:!(!a||s<4||u),hasEvent:function(t){if("input"===t&&Vr<=11)return!1
if(y(i[t])){var e=c.createElement("div")
i[t]="on"+t in e}return i[t]},csp:Yr(),vendorPrefix:n,transitions:h,animations:d,android:s}}]}function On(){var t
this.httpOptions=function(e){return e?(t=e,this):t},this.$get=["$templateCache","$http","$q","$sce",function(e,n,r,i){function o(a,s){function u(t){if(!s)throw yo("tpload","Failed to load template: {0} (HTTP status: {1} {2})",a,t.status,t.statusText)
return r.reject(t)}o.totalPendingRequests++,C(a)&&e.get(a)||(a=i.getTrustedResourceUrl(a))
var c=n.defaults&&n.defaults.transformResponse
return Wr(c)?c=c.filter(function(t){return t!==Ee}):c===Ee&&(c=null),n.get(a,f({cache:e,transformResponse:c},t))["finally"](function(){o.totalPendingRequests--}).then(function(t){return e.put(a,t.data),t.data},u)}return o.totalPendingRequests=0,o}]}function Mn(){this.$get=["$rootScope","$browser","$location",function(t,e,n){var r={}
return r.findBindings=function(t,e,n){var r=t.getElementsByClassName("ng-binding"),i=[]
return o(r,function(t){var r=Br.element(t).data("$binding")
r&&o(r,function(r){if(n){var o=new RegExp("(^|\\s)"+Kr(e)+"(\\s|\\||$)")
o.test(r)&&i.push(t)}else r.indexOf(e)!=-1&&i.push(t)})}),i},r.findModels=function(t,e,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var o=n?"=":"*=",a="["+r[i]+"model"+o+'"'+e+'"]',s=t.querySelectorAll(a)
if(s.length)return s}},r.getLocation=function(){return n.url()},r.setLocation=function(e){e!==n.url()&&(n.url(e),t.$digest())},r.whenStable=function(t){e.notifyWhenNoOutstandingRequests(t)},r}]}function Dn(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(t,e,n,r,i){function o(o,s,u){k(o)||(u=s,s=o,o=$)
var c,l=z(arguments,3),f=b(u)&&!u,h=(f?r:n).defer(),p=h.promise
return c=e.defer(function(){try{h.resolve(o.apply(null,l))}catch(e){h.reject(e),i(e)}finally{delete a[p.$$timeoutId]}f||t.$apply()},s),p.$$timeoutId=c,a[c]=h,p}var a={}
return o.cancel=function(t){return!!(t&&t.$$timeoutId in a)&&(a[t.$$timeoutId].reject("canceled"),delete a[t.$$timeoutId],e.defer.cancel(t.$$timeoutId))},o}]}function Nn(t){var e=t
return Vr&&(bo.setAttribute("href",e),e=bo.href),bo.setAttribute("href",e),{href:bo.href,protocol:bo.protocol?bo.protocol.replace(/:$/,""):"",host:bo.host,search:bo.search?bo.search.replace(/^\?/,""):"",hash:bo.hash?bo.hash.replace(/^#/,""):"",hostname:bo.hostname,port:bo.port,pathname:"/"===bo.pathname.charAt(0)?bo.pathname:"/"+bo.pathname}}function jn(t){var e=C(t)?Nn(t):t
return e.protocol===wo.protocol&&e.host===wo.host}function Vn(){this.$get=m(t)}function Pn(t){function e(t){try{return decodeURIComponent(t)}catch(e){return t}}var n=t[0]||{},r={},i=""
return function(){var t,o,a,s,u,c=n.cookie||""
if(c!==i)for(i=c,t=i.split("; "),r={},a=0;a<t.length;a++)o=t[a],s=o.indexOf("="),s>0&&(u=e(o.substring(0,s)),y(r[u])&&(r[u]=e(o.substring(s+1))))
return r}}function In(){this.$get=Pn}function Rn(t){function e(r,i){if(w(r)){var a={}
return o(r,function(t,n){a[n]=e(n,t)}),a}return t.factory(r+n,i)}var n="Filter"
this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+n)}}],e("currency",Un),e("date",rr),e("filter",qn),e("json",ir),e("limitTo",or),e("lowercase",To),e("number",Hn),e("orderBy",ar),e("uppercase",Oo)}function qn(){return function(t,e,n){if(!i(t)){if(null==t)return t
throw r("filter")("notarray","Expected array but received: {0}",t)}var o,a,s=Ln(e)
switch(s){case"function":o=e
break
case"boolean":case"null":case"number":case"string":a=!0
case"object":o=_n(e,n,a)
break
default:return t}return Array.prototype.filter.call(t,o)}}function _n(t,e,n){var r,i=w(t)&&"$"in t
return e===!0?e=H:k(e)||(e=function(t,e){return!y(t)&&(null===t||null===e?t===e:!(w(e)||w(t)&&!g(t))&&(t=Mr(""+t),e=Mr(""+e),t.indexOf(e)!==-1))}),r=function(r){return i&&!w(r)?Fn(r,t.$,e,!1):Fn(r,t,e,n)}}function Fn(t,e,n,r,i){var o=Ln(t),a=Ln(e)
if("string"===a&&"!"===e.charAt(0))return!Fn(t,e.substring(1),n,r)
if(Wr(t))return t.some(function(t){return Fn(t,e,n,r)})
switch(o){case"object":var s
if(r){for(s in t)if("$"!==s.charAt(0)&&Fn(t[s],e,n,!0))return!0
return!i&&Fn(t,e,n,!1)}if("object"===a){for(s in e){var u=e[s]
if(!k(u)&&!y(u)){var c="$"===s,l=c?t:t[s]
if(!Fn(l,u,n,c,c))return!1}}return!0}return n(t,e)
case"function":return!1
default:return n(t,e)}}function Ln(t){return null===t?"null":typeof t}function Un(t){var e=t.NUMBER_FORMATS
return function(t,n,r){return y(n)&&(n=e.CURRENCY_SYM),y(r)&&(r=e.PATTERNS[1].maxFrac),null==t?t:Wn(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}function Hn(t){var e=t.NUMBER_FORMATS
return function(t,n){return null==t?t:Wn(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function Bn(t){var e,n,r,i,o,a=0
for((n=t.indexOf(Co))>-1&&(t=t.replace(Co,"")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charAt(r)==So;r++);if(r==(o=t.length))e=[0],n=1
else{for(o--;t.charAt(o)==So;)o--
for(n-=r,e=[],i=0;r<=o;r++,i++)e[i]=+t.charAt(r)}return n>xo&&(e=e.splice(0,xo-1),a=n-1,n=1),{d:e,e:a,i:n}}function zn(t,e,n,r){var i=t.d,o=i.length-t.i
e=y(e)?Math.min(Math.max(n,o),r):+e
var a=e+t.i,s=i[a]
if(a>0){i.splice(Math.max(t.i,a))
for(var u=a;u<i.length;u++)i[u]=0}else{o=Math.max(0,o),t.i=1,i.length=Math.max(1,a=e+1),i[0]=0
for(var c=1;c<a;c++)i[c]=0}if(s>=5)if(a-1<0){for(var l=0;l>a;l--)i.unshift(0),t.i++
i.unshift(1),t.i++}else i[a-1]++
for(;o<Math.max(0,e);o++)i.push(0)
var f=i.reduceRight(function(t,e,n,r){return e+=t,r[n]=e%10,Math.floor(e/10)},0)
f&&(i.unshift(f),t.i++)}function Wn(t,e,n,r,i){if(!C(t)&&!S(t)||isNaN(t))return""
var o,a=!isFinite(t),s=!1,u=Math.abs(t)+"",c=""
if(a)c="∞"
else{o=Bn(u),zn(o,i,e.minFrac,e.maxFrac)
var l=o.d,f=o.i,h=o.e,p=[]
for(s=l.reduce(function(t,e){return t&&!e},!0);f<0;)l.unshift(0),f++
f>0?p=l.splice(f):(p=l,l=[0])
var d=[]
for(l.length>=e.lgSize&&d.unshift(l.splice(-e.lgSize).join(""));l.length>e.gSize;)d.unshift(l.splice(-e.gSize).join(""))
l.length&&d.unshift(l.join("")),c=d.join(n),p.length&&(c+=r+p.join("")),h&&(c+="e+"+h)}return t<0&&!s?e.negPre+c+e.negSuf:e.posPre+c+e.posSuf}function Gn(t,e,n,r){var i=""
for((t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,i="-")),t=""+t;t.length<e;)t=So+t
return n&&(t=t.substr(t.length-e)),i+t}function Jn(t,e,n,r,i){return n=n||0,function(o){var a=o["get"+t]()
return(n>0||a>-n)&&(a+=n),0===a&&n==-12&&(a=12),Gn(a,e,r,i)}}function Kn(t,e,n){return function(r,i){var o=r["get"+t](),a=(n?"STANDALONE":"")+(e?"SHORT":""),s=Dr(a+t)
return i[s][o]}}function Yn(t,e,n){var r=-1*n,i=r>=0?"+":""
return i+=Gn(Math[r>0?"floor":"ceil"](r/60),2)+Gn(Math.abs(r%60),2)}function Zn(t){var e=new Date(t,0,1).getDay()
return new Date(t,0,(e<=4?5:12)-e)}function Qn(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function Xn(t){return function(e){var n=Zn(e.getFullYear()),r=Qn(e),i=+r-+n,o=1+Math.round(i/6048e5)
return Gn(o,t)}}function tr(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function er(t,e){return t.getFullYear()<=0?e.ERAS[0]:e.ERAS[1]}function nr(t,e){return t.getFullYear()<=0?e.ERANAMES[0]:e.ERANAMES[1]}function rr(t){function e(t){var e
if(e=t.match(n)){var r=new Date(0),i=0,o=0,a=e[8]?r.setUTCFullYear:r.setFullYear,s=e[8]?r.setUTCHours:r.setHours
e[9]&&(i=p(e[9]+e[10]),o=p(e[9]+e[11])),a.call(r,p(e[1]),p(e[2])-1,p(e[3]))
var u=p(e[4]||0)-i,c=p(e[5]||0)-o,l=p(e[6]||0),f=Math.round(1e3*parseFloat("0."+(e[7]||0)))
return s.call(r,u,c,l,f),r}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
return function(n,r,i){var a,s,u="",c=[]
if(r=r||"mediumDate",r=t.DATETIME_FORMATS[r]||r,C(n)&&(n=Ao.test(n)?p(n):e(n)),S(n)&&(n=new Date(n)),!E(n)||!isFinite(n.getTime()))return n
for(;r;)s=ko.exec(r),s?(c=B(c,s,1),r=c.pop()):(c.push(r),r=null)
var l=n.getTimezoneOffset()
return i&&(l=Y(i,l),n=Q(n,i,!0)),o(c,function(e){a=Eo[e],u+=a?a(n,t.DATETIME_FORMATS,l):"''"===e?"'":e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}}function ir(){return function(t,e){return y(e)&&(e=2),J(t,e)}}function or(){return function(t,e,n){return e=Math.abs(Number(e))===1/0?Number(e):p(e),isNaN(e)?t:(S(t)&&(t=t.toString()),Wr(t)||C(t)?(n=!n||isNaN(n)?0:p(n),n=n<0?Math.max(0,t.length+n):n,e>=0?t.slice(n,n+e):0===n?t.slice(e,t.length):t.slice(Math.max(0,n+e),n)):t)}}function ar(t){function e(e,n){return n=n?-1:1,e.map(function(e){var r=1,i=v
if(k(e))i=e
else if(C(e)&&("+"!=e.charAt(0)&&"-"!=e.charAt(0)||(r="-"==e.charAt(0)?-1:1,e=e.substring(1)),""!==e&&(i=t(e),i.constant))){var o=i()
i=function(t){return t[o]}}return{get:i,descending:r*n}})}function n(t){switch(typeof t){case"number":case"boolean":case"string":return!0
default:return!1}}function o(t,e){return"function"==typeof t.valueOf&&(t=t.valueOf(),n(t))?t:g(t)&&(t=t.toString(),n(t))?t:e}function a(t,e){var n=typeof t
return null===t?(n="string",t="null"):"string"===n?t=t.toLowerCase():"object"===n&&(t=o(t,e)),{value:t,type:n}}function s(t,e){var n=0
return t.type===e.type?t.value!==e.value&&(n=t.value<e.value?-1:1):n=t.type<e.type?-1:1,n}return function(t,n,o){function u(t,e){return{value:t,predicateValues:l.map(function(n){return a(n.get(t),e)})}}function c(t,e){for(var n=0,r=0,i=l.length;r<i&&!(n=s(t.predicateValues[r],e.predicateValues[r])*l[r].descending);++r);return n}if(null==t)return t
if(!i(t))throw r("orderBy")("notarray","Expected array but received: {0}",t)
Wr(n)||(n=[n]),0===n.length&&(n=["+"])
var l=e(n,o)
l.push({get:function(){return{}},descending:o?-1:1})
var f=Array.prototype.map.call(t,u)
return f.sort(c),t=f.map(function(t){return t.value})}}function sr(t){return k(t)&&(t={link:t}),t.restrict=t.restrict||"AC",m(t)}function ur(t,e){t.$name=e}function cr(t,e,r,i,a){var s=this,u=[]
s.$error={},s.$$success={},s.$pending=n,s.$name=a(e.name||e.ngForm||"")(r),s.$dirty=!1,s.$pristine=!0,s.$valid=!0,s.$invalid=!1,s.$submitted=!1,s.$$parentForm=No,s.$rollbackViewValue=function(){o(u,function(t){t.$rollbackViewValue()})},s.$commitViewValue=function(){o(u,function(t){t.$commitViewValue()})},s.$addControl=function(t){dt(t.$name,"input"),u.push(t),t.$name&&(s[t.$name]=t),t.$$parentForm=s},s.$$renameControl=function(t,e){var n=t.$name
s[n]===t&&delete s[n],s[e]=t,t.$name=e},s.$removeControl=function(t){t.$name&&s[t.$name]===t&&delete s[t.$name],o(s.$pending,function(e,n){s.$setValidity(n,null,t)}),o(s.$error,function(e,n){s.$setValidity(n,null,t)}),o(s.$$success,function(e,n){s.$setValidity(n,null,t)}),F(u,t),t.$$parentForm=No},Sr({ctrl:this,$element:t,set:function(t,e,n){var r=t[e]
if(r){var i=r.indexOf(n)
i===-1&&r.push(n)}else t[e]=[n]},unset:function(t,e,n){var r=t[e]
r&&(F(r,n),0===r.length&&delete t[e])},$animate:i}),s.$setDirty=function(){i.removeClass(t,va),i.addClass(t,ma),s.$dirty=!0,s.$pristine=!1,s.$$parentForm.$setDirty()},s.$setPristine=function(){i.setClass(t,va,ma+" "+jo),s.$dirty=!1,s.$pristine=!0,s.$submitted=!1,o(u,function(t){t.$setPristine()})},s.$setUntouched=function(){o(u,function(t){t.$setUntouched()})},s.$setSubmitted=function(){i.addClass(t,jo),s.$submitted=!0,s.$$parentForm.$setSubmitted()}}function lr(t){t.$formatters.push(function(e){return t.$isEmpty(e)?e:e.toString()})}function fr(t,e,n,r,i,o){hr(t,e,n,r,i,o),lr(r)}function hr(t,e,n,r,i,o){var a=Mr(e[0].type)
if(!i.android){var s=!1
e.on("compositionstart",function(){s=!0}),e.on("compositionend",function(){s=!1,c()})}var u,c=function(t){if(u&&(o.defer.cancel(u),u=null),!s){var i=e.val(),c=t&&t.type
"password"===a||n.ngTrim&&"false"===n.ngTrim||(i=Jr(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,c)}}
if(i.hasEvent("input"))e.on("input",c)
else{var l=function(t,e,n){u||(u=o.defer(function(){u=null,e&&e.value===n||c(t)}))}
e.on("keydown",function(t){var e=t.keyCode
91===e||15<e&&e<19||37<=e&&e<=40||l(t,this,this.value)}),i.hasEvent("paste")&&e.on("paste cut",l)}e.on("change",c),Go[a]&&r.$$hasNativeValidators&&a===n.type&&e.on(Wo,function(t){if(!u){var e=this[Tr],n=e.badInput,r=e.typeMismatch
u=o.defer(function(){u=null,e.badInput===n&&e.typeMismatch===r||c(t)})}}),r.$render=function(){var t=r.$isEmpty(r.$viewValue)?"":r.$viewValue
e.val()!==t&&e.val(t)}}function pr(t,e){if(E(t))return t
if(C(t)){Ho.lastIndex=0
var n=Ho.exec(t)
if(n){var r=+n[1],i=+n[2],o=0,a=0,s=0,u=0,c=Zn(r),l=7*(i-1)
return e&&(o=e.getHours(),a=e.getMinutes(),s=e.getSeconds(),u=e.getMilliseconds()),new Date(r,0,c.getDate()+l,o,a,s,u)}}return NaN}function dr(t,e){return function(n,r){var i,a
if(E(n))return n
if(C(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),Ro.test(n))return new Date(n)
if(t.lastIndex=0,i=t.exec(n))return i.shift(),a=r?{yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},o(i,function(t,n){n<e.length&&(a[e[n]]=+t)}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0)}return NaN}}function $r(t,e,r,i){return function(o,a,s,u,c,l,f){function h(t){return t&&!(t.getTime&&t.getTime()!==t.getTime())}function p(t){return b(t)&&!E(t)?r(t)||n:t}vr(o,a,s,u),hr(o,a,s,u,c,l)
var d,$=u&&u.$options&&u.$options.timezone
if(u.$$parserName=t,u.$parsers.push(function(t){if(u.$isEmpty(t))return null
if(e.test(t)){var i=r(t,d)
return $&&(i=Q(i,$)),i}return n}),u.$formatters.push(function(t){if(t&&!E(t))throw Ca("datefmt","Expected `{0}` to be a date",t)
return h(t)?(d=t,d&&$&&(d=Q(d,$,!0)),f("date")(t,i,$)):(d=null,"")}),b(s.min)||s.ngMin){var v
u.$validators.min=function(t){return!h(t)||y(v)||r(t)>=v},s.$observe("min",function(t){v=p(t),u.$validate()})}if(b(s.max)||s.ngMax){var m
u.$validators.max=function(t){return!h(t)||y(m)||r(t)<=m},s.$observe("max",function(t){m=p(t),u.$validate()})}}}function vr(t,e,r,i){var o=e[0],a=i.$$hasNativeValidators=w(o.validity)
a&&i.$parsers.push(function(t){var r=e.prop(Tr)||{}
return r.badInput||r.typeMismatch?n:t})}function mr(t,e,r,i,o,a){if(vr(t,e,r,i),hr(t,e,r,i,o,a),i.$$parserName="number",i.$parsers.push(function(t){return i.$isEmpty(t)?null:Fo.test(t)?parseFloat(t):n}),i.$formatters.push(function(t){if(!i.$isEmpty(t)){if(!S(t))throw Ca("numfmt","Expected `{0}` to be a number",t)
t=t.toString()}return t}),b(r.min)||r.ngMin){var s
i.$validators.min=function(t){return i.$isEmpty(t)||y(s)||t>=s},r.$observe("min",function(t){b(t)&&!S(t)&&(t=parseFloat(t,10)),s=S(t)&&!isNaN(t)?t:n,i.$validate()})}if(b(r.max)||r.ngMax){var u
i.$validators.max=function(t){return i.$isEmpty(t)||y(u)||t<=u},r.$observe("max",function(t){b(t)&&!S(t)&&(t=parseFloat(t,10)),u=S(t)&&!isNaN(t)?t:n,i.$validate()})}}function gr(t,e,n,r,i,o){hr(t,e,n,r,i,o),lr(r),r.$$parserName="url",r.$validators.url=function(t,e){var n=t||e
return r.$isEmpty(n)||qo.test(n)}}function yr(t,e,n,r,i,o){hr(t,e,n,r,i,o),lr(r),r.$$parserName="email",r.$validators.email=function(t,e){var n=t||e
return r.$isEmpty(n)||_o.test(n)}}function br(t,e,n,r){y(n.name)&&e.attr("name",u())
var i=function(t){e[0].checked&&r.$setViewValue(n.value,t&&t.type)}
e.on("click",i),r.$render=function(){var t=n.value
e[0].checked=t==r.$viewValue},n.$observe("value",r.$render)}function wr(t,e,n,r,i){var o
if(b(r)){if(o=t(r),!o.constant)throw Ca("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,r)
return o(e)}return i}function xr(t,e,n,r,i,o,a,s){var u=wr(s,t,"ngTrueValue",n.ngTrueValue,!0),c=wr(s,t,"ngFalseValue",n.ngFalseValue,!1),l=function(t){r.$setViewValue(e[0].checked,t&&t.type)}
e.on("click",l),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return t===!1},r.$formatters.push(function(t){return H(t,u)}),r.$parsers.push(function(t){return t?u:c})}function Cr(t,e){return t="ngClass"+t,["$animate",function(n){function r(t,e){var n=[]
t:for(var r=0;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i==e[o])continue t
n.push(i)}return n}function i(t){var e=[]
return Wr(t)?(o(t,function(t){e=e.concat(i(t))}),e):C(t)?t.split(" "):w(t)?(o(t,function(t,n){t&&(e=e.concat(n.split(" ")))}),e):t}return{restrict:"AC",link:function(a,s,u){function c(t){var e=f(t,1)
u.$addClass(e)}function l(t){var e=f(t,-1)
u.$removeClass(e)}function f(t,e){var n=s.data("$classCounts")||mt(),r=[]
return o(t,function(t){(e>0||n[t])&&(n[t]=(n[t]||0)+e,n[t]===+(e>0)&&r.push(t))}),s.data("$classCounts",n),r.join(" ")}function h(t,e){var i=r(e,t),o=r(t,e)
i=f(i,1),o=f(o,-1),i&&i.length&&n.addClass(s,i),o&&o.length&&n.removeClass(s,o)}function p(t){if(e===!0||a.$index%2===e){var n=i(t||[])
if(d){if(!H(t,d)){var r=i(d)
h(r,n)}}else c(n)}d=U(t)}var d
a.$watch(u[t],p,!0),u.$observe("class",function(e){p(a.$eval(u[t]))}),"ngClass"!==t&&a.$watch("$index",function(n,r){var o=1&n
if(o!==(1&r)){var s=i(a.$eval(u[t]))
o===e?c(s):l(s)}})}}}]}function Sr(t){function e(t,e,u){y(e)?r("$pending",t,u):i("$pending",t,u),j(e)?e?(f(s.$error,t,u),l(s.$$success,t,u)):(l(s.$error,t,u),f(s.$$success,t,u)):(f(s.$error,t,u),f(s.$$success,t,u)),s.$pending?(o(ba,!0),s.$valid=s.$invalid=n,a("",null)):(o(ba,!1),s.$valid=Er(s.$error),s.$invalid=!s.$valid,a("",s.$valid))
var c
c=s.$pending&&s.$pending[t]?n:!s.$error[t]&&(!!s.$$success[t]||null),a(t,c),s.$$parentForm.$setValidity(t,c,s)}function r(t,e,n){s[t]||(s[t]={}),l(s[t],e,n)}function i(t,e,r){s[t]&&f(s[t],e,r),Er(s[t])&&(s[t]=n)}function o(t,e){e&&!c[t]?(h.addClass(u,t),c[t]=!0):!e&&c[t]&&(h.removeClass(u,t),c[t]=!1)}function a(t,e){t=t?"-"+lt(t,"-"):"",o(da+t,e===!0),o($a+t,e===!1)}var s=t.ctrl,u=t.$element,c={},l=t.set,f=t.unset,h=t.$animate
c[$a]=!(c[da]=u.hasClass(da)),s.$setValidity=e}function Er(t){if(t)for(var e in t)if(t.hasOwnProperty(e))return!1
return!0}function kr(t){t[0].hasAttribute("selected")&&(t[0].selected=!0)}var Ar=/^\/(.+)\/([a-z]*)$/,Tr="validity",Or=Object.prototype.hasOwnProperty,Mr=function(t){return C(t)?t.toLowerCase():t},Dr=function(t){return C(t)?t.toUpperCase():t},Nr=function(t){return C(t)?t.replace(/[A-Z]/g,function(t){return String.fromCharCode(32|t.charCodeAt(0))}):t},jr=function(t){return C(t)?t.replace(/[a-z]/g,function(t){return String.fromCharCode(t.charCodeAt(0)&-33)}):t}
"i"!=="I".toLowerCase()&&(Mr=Nr,Dr=jr)
var Vr,Pr,Ir,Rr,qr=[].slice,_r=[].splice,Fr=[].push,Lr=Object.prototype.toString,Ur=Object.getPrototypeOf,Hr=r("ng"),Br=t.angular||(t.angular={}),zr=0
Vr=e.documentMode,$.$inject=[],v.$inject=[]
var Wr=Array.isArray,Gr=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,Jr=function(t){return C(t)?t.trim():t},Kr=function(t){return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Yr=function(){function t(){try{return new Function(""),!1}catch(t){return!0}}if(!b(Yr.rules)){var n=e.querySelector("[ng-csp]")||e.querySelector("[data-ng-csp]")
if(n){var r=n.getAttribute("ng-csp")||n.getAttribute("data-ng-csp")
Yr.rules={noUnsafeEval:!r||r.indexOf("no-unsafe-eval")!==-1,noInlineStyle:!r||r.indexOf("no-inline-style")!==-1}}else Yr.rules={noUnsafeEval:t(),noInlineStyle:!1}}return Yr.rules},Zr=function(){if(b(Zr.name_))return Zr.name_
var t,n,r,i,o=Xr.length
for(n=0;n<o;++n)if(r=Xr[n],t=e.querySelector("["+r.replace(":","\\:")+"jq]")){i=t.getAttribute(r+"jq")
break}return Zr.name_=i},Qr=/:/g,Xr=["ng-","data-ng-","ng:","x-ng-"],ti=/[A-Z]/g,ei=!1,ni=1,ri=2,ii=3,oi=8,ai=9,si=11,ui={full:"1.5.3",major:1,minor:5,dot:3,codeName:"diplohaplontic-meiosis"}
Dt.expando="ng339"
var ci=Dt.cache={},li=1,fi=function(t,e,n){t.addEventListener(e,n,!1)},hi=function(t,e,n){t.removeEventListener(e,n,!1)}
Dt._data=function(t){return this.cache[t[this.expando]]||{}}
var pi=/([\:\-\_]+(.))/g,di=/^moz([A-Z])/,$i={mouseleave:"mouseout",mouseenter:"mouseover"},vi=r("jqLite"),mi=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,gi=/<|&#?\w+;/,yi=/<([\w:-]+)/,bi=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wi={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
wi.optgroup=wi.option,wi.tbody=wi.tfoot=wi.colgroup=wi.caption=wi.thead,wi.th=wi.td
var xi=Node.prototype.contains||function(t){return!!(16&this.compareDocumentPosition(t))},Ci=Dt.prototype={ready:function(n){function r(){i||(i=!0,n())}var i=!1
"complete"===e.readyState?setTimeout(r):(this.on("DOMContentLoaded",r),Dt(t).on("load",r))},toString:function(){var t=[]
return o(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return Pr(t>=0?this[t]:this[this.length+t])},length:0,push:Fr,sort:[].sort,splice:[].splice},Si={}
o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(t){Si[Mr(t)]=t})
var Ei={}
o("input,select,option,textarea,button,form,details".split(","),function(t){Ei[t]=!0})
var ki={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"}
o({data:Rt,removeData:Pt,hasData:kt,cleanData:At},function(t,e){Dt[e]=t}),o({data:Rt,inheritedData:Ht,scope:function(t){return Pr.data(t,"$scope")||Ht(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return Pr.data(t,"$isolateScope")||Pr.data(t,"$isolateScopeNoTemplate")},controller:Ut,injector:function(t){return Ht(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:qt,css:function(t,e,n){return e=Ct(e),b(n)?void(t.style[e]=n):t.style[e]},attr:function(t,e,r){var i=t.nodeType
if(i!==ii&&i!==ri&&i!==oi){var o=Mr(e)
if(Si[o]){if(!b(r))return t[e]||(t.attributes.getNamedItem(e)||$).specified?o:n
r?(t[e]=!0,t.setAttribute(e,o)):(t[e]=!1,t.removeAttribute(o))}else if(b(r))t.setAttribute(e,r)
else if(t.getAttribute){var a=t.getAttribute(e,2)
return null===a?n:a}}},prop:function(t,e,n){return b(n)?void(t[e]=n):t[e]},text:function(){function t(t,e){if(y(e)){var n=t.nodeType
return n===ni||n===ii?t.textContent:""}t.textContent=e}return t.$dv="",t}(),val:function(t,e){if(y(e)){if(t.multiple&&"select"===_(t)){var n=[]
return o(t.options,function(t){t.selected&&n.push(t.value||t.text)}),0===n.length?null:n}return t.value}t.value=e},html:function(t,e){return y(e)?t.innerHTML:(jt(t,!0),void(t.innerHTML=e))},empty:Bt},function(t,e){Dt.prototype[e]=function(e,n){var r,i,o=this.length
if(t!==Bt&&y(2==t.length&&t!==qt&&t!==Ut?e:n)){if(w(e)){for(r=0;r<o;r++)if(t===Rt)t(this[r],e)
else for(i in e)t(this[r],i,e[i])
return this}for(var a=t.$dv,s=y(a)?Math.min(o,1):o,u=0;u<s;u++){var c=t(this[u],e,n)
a=a?a+c:c}return a}for(r=0;r<o;r++)t(this[r],e,n)
return this}}),o({removeData:Pt,on:function(t,e,r,i){if(b(i))throw vi("onargs","jqLite#on() does not support the `selector` or `eventData` parameters")
if(Et(t)){var o=It(t,!0),a=o.events,s=o.handle
s||(s=o.handle=Kt(t,a))
for(var u=e.indexOf(" ")>=0?e.split(" "):[e],c=u.length,l=function(e,n,i){var o=a[e]
o||(o=a[e]=[],o.specialHandlerWrapper=n,"$destroy"===e||i||fi(t,e,s)),o.push(r)};c--;)e=u[c],$i[e]?(l($i[e],Zt),l(e,n,!0)):l(e)}},off:Vt,one:function(t,e,n){t=Pr(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,r=t.parentNode
jt(t),o(new Dt(e),function(e){n?r.insertBefore(e,n.nextSibling):r.replaceChild(e,t),n=e})},children:function(t){var e=[]
return o(t.childNodes,function(t){t.nodeType===ni&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){var n=t.nodeType
if(n===ni||n===si){e=new Dt(e)
for(var r=0,i=e.length;r<i;r++){var o=e[r]
t.appendChild(o)}}},prepend:function(t,e){if(t.nodeType===ni){var n=t.firstChild
o(new Dt(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){Mt(t,Pr(e).eq(0).clone()[0])},remove:zt,detach:function(t){zt(t,!0)},after:function(t,e){var n=t,r=t.parentNode
e=new Dt(e)
for(var i=0,o=e.length;i<o;i++){var a=e[i]
r.insertBefore(a,n.nextSibling),n=a}},addClass:Ft,removeClass:_t,toggleClass:function(t,e,n){e&&o(e.split(" "),function(e){var r=n
y(r)&&(r=!qt(t,e)),(r?Ft:_t)(t,e)})},parent:function(t){var e=t.parentNode
return e&&e.nodeType!==si?e:null},next:function(t){return t.nextElementSibling},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:Nt,triggerHandler:function(t,e,n){var r,i,a,s=e.type||e,u=It(t),c=u&&u.events,l=c&&c[s]
l&&(r={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:$,type:s,target:t},e.type&&(r=f(r,e)),i=U(l),a=n?[r].concat(n):[r],o(i,function(e){r.isImmediatePropagationStopped()||e.apply(t,a)}))}},function(t,e){Dt.prototype[e]=function(e,n,r){for(var i,o=0,a=this.length;o<a;o++)y(i)?(i=t(this[o],e,n,r),b(i)&&(i=Pr(i))):Lt(i,t(this[o],e,n,r))
return b(i)?i:this},Dt.prototype.bind=Dt.prototype.on,Dt.prototype.unbind=Dt.prototype.off}),te.prototype={put:function(t,e){this[Xt(t,this.nextUid)]=e},get:function(t){return this[Xt(t,this.nextUid)]},remove:function(t){var e=this[t=Xt(t,this.nextUid)]
return delete this[t],e}}
var Ai=[function(){this.$get=[function(){return te}]}],Ti=/^([^\(]+?)=>/,Oi=/^[^\(]*\(\s*([^\)]*)\)/m,Mi=/,/,Di=/^\s*(_?)(\S+?)\1\s*$/,Ni=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,ji=r("$injector")
ie.$$annotate=re
var Vi=r("$animate"),Pi=1,Ii="ng-animate",Ri=function(){this.$get=$},qi=function(){var t=new te,e=[]
this.$get=["$$AnimateRunner","$rootScope",function(n,r){function i(t,e,n){var r=!1
return e&&(e=C(e)?e.split(" "):Wr(e)?e:[],o(e,function(e){e&&(r=!0,t[e]=n)})),r}function a(){o(e,function(e){var n=t.get(e)
if(n){var r=ue(e.attr("class")),i="",a=""
o(n,function(t,e){var n=!!r[e]
t!==n&&(t?i+=(i.length?" ":"")+e:a+=(a.length?" ":"")+e)}),o(e,function(t){i&&Ft(t,i),a&&_t(t,a)}),t.remove(e)}}),e.length=0}function s(n,o,s){var u=t.get(n)||{},c=i(u,o,!0),l=i(u,s,!1);(c||l)&&(t.put(n,u),e.push(n),1===e.length&&r.$$postDigest(a))}return{enabled:$,on:$,off:$,pin:$,push:function(t,e,r,i){i&&i(),r=r||{},r.from&&t.css(r.from),r.to&&t.css(r.to),(r.addClass||r.removeClass)&&s(t,r.addClass,r.removeClass)
var o=new n
return o.complete(),o}}}]},_i=["$provide",function(t){var e=this
this.$$registeredAnimations=Object.create(null),this.register=function(n,r){if(n&&"."!==n.charAt(0))throw Vi("notcsel","Expecting class selector starting with '.' got '{0}'.",n)
var i=n+"-animation"
e.$$registeredAnimations[n.substr(1)]=i,t.factory(i,r)},this.classNameFilter=function(t){if(1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null,this.$$classNameFilter)){var e=new RegExp("(\\s+|\\/)"+Ii+"(\\s+|\\/)")
if(e.test(this.$$classNameFilter.toString()))throw Vi("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',Ii)}return this.$$classNameFilter},this.$get=["$$animateQueue",function(t){function e(t,e,n){if(n){var r=se(n)
!r||r.parentNode||r.previousElementSibling||(n=null)}n?n.after(t):e.prepend(t)}return{on:t.on,off:t.off,pin:t.pin,enabled:t.enabled,cancel:function(t){t.end&&t.end()},enter:function(n,r,i,o){return r=r&&Pr(r),i=i&&Pr(i),r=r||i.parent(),e(n,r,i),t.push(n,"enter",ce(o))},move:function(n,r,i,o){return r=r&&Pr(r),i=i&&Pr(i),r=r||i.parent(),e(n,r,i),t.push(n,"move",ce(o))},leave:function(e,n){return t.push(e,"leave",ce(n),function(){e.remove()})},addClass:function(e,n,r){return r=ce(r),r.addClass=ae(r.addclass,n),t.push(e,"addClass",r)},removeClass:function(e,n,r){return r=ce(r),r.removeClass=ae(r.removeClass,n),t.push(e,"removeClass",r)},setClass:function(e,n,r,i){return i=ce(i),i.addClass=ae(i.addClass,n),i.removeClass=ae(i.removeClass,r),t.push(e,"setClass",i)},animate:function(e,n,r,i,o){return o=ce(o),o.from=o.from?f(o.from,n):n,o.to=o.to?f(o.to,r):r,i=i||"ng-inline-animate",o.tempClasses=ae(o.tempClasses,i),t.push(e,"animate",o)}}}]}],Fi=function(){this.$get=["$$rAF",function(t){function e(e){n.push(e),n.length>1||t(function(){for(var t=0;t<n.length;t++)n[t]()
n=[]})}var n=[]
return function(){var t=!1
return e(function(){t=!0}),function(n){t?n():e(n)}}}]},Li=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(t,e,n,r,i){function a(t){this.setHost(t)
var e=n(),o=function(t){i(t,0,!1)}
this._doneCallbacks=[],this._tick=function(t){var n=r[0]
n&&n.hidden?o(t):e(t)},this._state=0}var s=0,u=1,c=2
return a.chain=function(t,e){function n(){return r===t.length?void e(!0):void t[r](function(t){return t===!1?void e(!1):(r++,void n())})}var r=0
n()},a.all=function(t,e){function n(n){i=i&&n,++r===t.length&&e(i)}var r=0,i=!0
o(t,function(t){t.done(n)})},a.prototype={setHost:function(t){this.host=t||{}},done:function(t){this._state===c?t():this._doneCallbacks.push(t)},progress:$,getPromise:function(){if(!this.promise){var e=this
this.promise=t(function(t,n){e.done(function(e){e===!1?n():t()})})}return this.promise},then:function(t,e){return this.getPromise().then(t,e)},"catch":function(t){return this.getPromise()["catch"](t)},"finally":function(t){return this.getPromise()["finally"](t)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(t){var e=this
e._state===s&&(e._state=u,e._tick(function(){e._resolve(t)}))},_resolve:function(t){this._state!==c&&(o(this._doneCallbacks,function(e){e(t)}),this._doneCallbacks.length=0,this._state=c)}},a}]},Ui=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(t,e,n){return function(e,r){function i(){return t(function(){o(),s||u.complete(),s=!0}),u}function o(){a.addClass&&(e.addClass(a.addClass),a.addClass=null),a.removeClass&&(e.removeClass(a.removeClass),a.removeClass=null),a.to&&(e.css(a.to),a.to=null)}var a=r||{}
a.$$prepared||(a=L(a)),a.cleanupStyles&&(a.from=a.to=null),a.from&&(e.css(a.from),a.from=null)
var s,u=new n
return{start:i,end:i}}}]},Hi=r("$compile")
de.$inject=["$provide","$$sanitizeUriProvider"]
var Bi=/^((?:x|data)[\:\-_])/i,zi=r("$controller"),Wi=/^(\S+)(\s+as\s+([\w$]+))?$/,Gi=function(){this.$get=["$document",function(t){return function(e){return e?!e.nodeType&&e instanceof Pr&&(e=e[0]):e=t[0].body,e.offsetWidth+1}}]},Ji="application/json",Ki={"Content-Type":Ji+";charset=utf-8"},Yi=/^\[|^\{(?!\{)/,Zi={"[":/]$/,"{":/}$/},Qi=/^\)\]\}',?\n/,Xi=r("$http"),to=function(t){return function(){throw Xi("legacy","The method `{0}` on the promise returned from `$http` has been disabled.",t)}},eo=Br.$interpolateMinErr=r("$interpolate")
eo.throwNoconcat=function(t){throw eo("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",t)},eo.interr=function(t,e){return eo("interr","Can't interpolate: {0}\n{1}",t,e.toString())}
var no=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ro={http:80,https:443,ftp:21},io=r("$location"),oo={$$html5:!1,$$replace:!1,absUrl:Je("$$absUrl"),url:function(t){if(y(t))return this.$$url
var e=no.exec(t)
return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:Je("$$protocol"),host:Je("$$host"),port:Je("$$port"),path:Ke("$$path",function(t){return t=null!==t?t.toString():"","/"==t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search
case 1:if(C(t)||S(t))t=t.toString(),this.$$search=et(t)
else{if(!w(t))throw io("isrcharg","The first argument of the `$location#search()` call must be a string or an object.")
t=L(t,{}),o(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break
default:y(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:Ke("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}}
o([Ge,We,ze],function(t){t.prototype=Object.create(oo),t.prototype.state=function(e){if(!arguments.length)return this.$$state
if(t!==ze||!this.$$html5)throw io("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API")
return this.$$state=y(e)?null:e,this}})
var ao=r("$parse"),so=Function.prototype.call,uo=Function.prototype.apply,co=Function.prototype.bind,lo=mt()
o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(t){lo[t]=!0})
var fo={n:"\n",f:"\f",r:"\r",t:"\t",v:"\x0B","'":"'",'"':'"'},ho=function(t){this.options=t}
ho.prototype={constructor:ho,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;){var e=this.text.charAt(this.index)
if('"'===e||"'"===e)this.readString(e)
else if(this.isNumber(e)||"."===e&&this.isNumber(this.peek()))this.readNumber()
else if(this.isIdent(e))this.readIdent()
else if(this.is(e,"(){}[].,;:?"))this.tokens.push({index:this.index,text:e}),this.index++
else if(this.isWhitespace(e))this.index++
else{var n=e+this.peek(),r=n+this.peek(2),i=lo[e],o=lo[n],a=lo[r]
if(i||o||a){var s=a?r:o?n:e
this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(t,e){return e.indexOf(t)!==-1},peek:function(t){var e=t||1
return this.index+e<this.text.length&&this.text.charAt(this.index+e)},isNumber:function(t){return"0"<=t&&t<="9"&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"\t"===t||"\n"===t||"\x0B"===t||" "===t},isIdent:function(t){return"a"<=t&&t<="z"||"A"<=t&&t<="Z"||"_"===t||"$"===t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){n=n||this.index
var r=b(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n
throw ao("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",t,r,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=Mr(this.text.charAt(this.index))
if("."==n||this.isNumber(n))t+=n
else{var r=this.peek()
if("e"==n&&this.isExpOperator(r))t+=n
else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==t.charAt(t.length-1))t+=n
else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=t.charAt(t.length-1))break
this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){for(var t=this.index;this.index<this.text.length;){var e=this.text.charAt(this.index)
if(!this.isIdent(e)&&!this.isNumber(e))break
this.index++}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index
this.index++
for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index)
if(r+=o,i){if("u"===o){var a=this.text.substring(this.index+1,this.index+5)
a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,n+=String.fromCharCode(parseInt(a,16))}else{var s=fo[o]
n+=s||o}i=!1}else if("\\"===o)i=!0
else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,constant:!0,value:n})
n+=o}this.index++}this.throwError("Unterminated quote",e)}}
var po=function(t,e){this.lexer=t,this.options=e}
po.Program="Program",po.ExpressionStatement="ExpressionStatement",po.AssignmentExpression="AssignmentExpression",po.ConditionalExpression="ConditionalExpression",po.LogicalExpression="LogicalExpression",po.BinaryExpression="BinaryExpression",po.UnaryExpression="UnaryExpression",po.CallExpression="CallExpression",po.MemberExpression="MemberExpression",po.Identifier="Identifier",po.Literal="Literal",po.ArrayExpression="ArrayExpression",po.Property="Property",po.ObjectExpression="ObjectExpression",po.ThisExpression="ThisExpression",po.LocalsExpression="LocalsExpression",po.NGValueParameter="NGValueParameter",po.prototype={ast:function(t){this.text=t,this.tokens=this.lexer.lex(t)
var e=this.program()
return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),e},program:function(){for(var t=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&t.push(this.expressionStatement()),!this.expect(";"))return{type:po.Program,body:t}},expressionStatement:function(){return{type:po.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var t,e=this.expression();t=this.expect("|");)e=this.filter(e)
return e},expression:function(){return this.assignment()},assignment:function(){var t=this.ternary()
return this.expect("=")&&(t={type:po.AssignmentExpression,left:t,right:this.assignment(),operator:"="}),t},ternary:function(){var t,e,n=this.logicalOR()
return this.expect("?")&&(t=this.expression(),this.consume(":"))?(e=this.expression(),{type:po.ConditionalExpression,test:n,alternate:t,consequent:e}):n},logicalOR:function(){for(var t=this.logicalAND();this.expect("||");)t={type:po.LogicalExpression,operator:"||",left:t,right:this.logicalAND()}
return t},logicalAND:function(){for(var t=this.equality();this.expect("&&");)t={type:po.LogicalExpression,operator:"&&",left:t,right:this.equality()}
return t},equality:function(){for(var t,e=this.relational();t=this.expect("==","!=","===","!==");)e={type:po.BinaryExpression,operator:t.text,left:e,right:this.relational()}
return e},relational:function(){for(var t,e=this.additive();t=this.expect("<",">","<=",">=");)e={type:po.BinaryExpression,operator:t.text,left:e,right:this.additive()}
return e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e={type:po.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()}
return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e={type:po.BinaryExpression,operator:t.text,left:e,right:this.unary()}
return e},unary:function(){var t
return(t=this.expect("+","-","!"))?{type:po.UnaryExpression,operator:t.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var t
this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?t=L(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?t={type:po.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek())
for(var e;e=this.expect("(","[",".");)"("===e.text?(t={type:po.CallExpression,callee:t,arguments:this.parseArguments()},this.consume(")")):"["===e.text?(t={type:po.MemberExpression,object:t,property:this.expression(),computed:!0},this.consume("]")):"."===e.text?t={type:po.MemberExpression,object:t,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE")
return t},filter:function(t){for(var e=[t],n={type:po.CallExpression,callee:this.identifier(),arguments:e,filter:!0};this.expect(":");)e.push(this.expression())
return n},parseArguments:function(){var t=[]
if(")"!==this.peekToken().text)do t.push(this.expression())
while(this.expect(","))
return t},identifier:function(){var t=this.consume()
return t.identifier||this.throwError("is not a valid identifier",t),{type:po.Identifier,name:t.text}},constant:function(){return{type:po.Literal,value:this.consume().value}},arrayDeclaration:function(){var t=[]
if("]"!==this.peekToken().text)do{if(this.peek("]"))break
t.push(this.expression())}while(this.expect(","))
return this.consume("]"),{type:po.ArrayExpression,elements:t}},object:function(){var t,e=[]
if("}"!==this.peekToken().text)do{if(this.peek("}"))break
t={type:po.Property,kind:"init"},this.peek().constant?t.key=this.constant():this.peek().identifier?t.key=this.identifier():this.throwError("invalid key",this.peek()),this.consume(":"),t.value=this.expression(),e.push(t)}while(this.expect(","))
return this.consume("}"),{type:po.ObjectExpression,properties:e}},throwError:function(t,e){throw ao("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",e.text,t,e.index+1,this.text,this.text.substring(e.index))},consume:function(t){if(0===this.tokens.length)throw ao("ueoe","Unexpected end of expression: {0}",this.text)
var e=this.expect(t)
return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},peekToken:function(){if(0===this.tokens.length)throw ao("ueoe","Unexpected end of expression: {0}",this.text)
return this.tokens[0]},peek:function(t,e,n,r){return this.peekAhead(0,t,e,n,r)},peekAhead:function(t,e,n,r,i){if(this.tokens.length>t){var o=this.tokens[t],a=o.text
if(a===e||a===n||a===r||a===i||!e&&!n&&!r&&!i)return o}return!1},expect:function(t,e,n,r){var i=this.peek(t,e,n,r)
return!!i&&(this.tokens.shift(),i)},selfReferential:{"this":{type:po.ThisExpression},$locals:{type:po.LocalsExpression}}},pn.prototype={compile:function(t,e){var r=this,i=this.astBuilder.ast(t)
this.state={nextId:0,filters:{},expensiveChecks:e,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},sn(i,r.$filter)
var a,s=""
if(this.stage="assign",a=ln(i)){this.state.computing="assign"
var u=this.nextId()
this.recurse(a,u),this.return_(u),s="fn.assign="+this.generateFunction("assign","s,v,l")}var c=un(i.body)
r.stage="inputs",o(c,function(t,e){var n="fn"+e
r.state[n]={vars:[],body:[],own:{}},r.state.computing=n
var i=r.nextId()
r.recurse(t,i),r.return_(i),r.state.inputs.push(n),t.watchId=e}),this.state.computing="fn",this.stage="main",this.recurse(i)
var l='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+s+this.watchFns()+"return fn;",f=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",l)(this.$filter,Qe,tn,en,Xe,nn,rn,on,t)
return this.state=this.stage=n,f.literal=fn(i),f.constant=hn(i),f},USE:"use",STRICT:"strict",watchFns:function(){var t=[],e=this.state.inputs,n=this
return o(e,function(e){t.push("var "+e+"="+n.generateFunction(e,"s"))}),e.length&&t.push("fn.inputs=["+e.join(",")+"];"),t.join("")},generateFunction:function(t,e){return"function("+e+"){"+this.varsPrefix(t)+this.body(t)+"};"},filterPrefix:function(){var t=[],e=this
return o(this.state.filters,function(n,r){t.push(n+"=$filter("+e.escape(r)+")")}),t.length?"var "+t.join(",")+";":""},varsPrefix:function(t){return this.state[t].vars.length?"var "+this.state[t].vars.join(",")+";":""},body:function(t){return this.state[t].body.join("")},recurse:function(t,e,r,i,a,s){var u,c,l,f,h=this
if(i=i||$,!s&&b(t.watchId))return e=e||this.nextId(),void this.if_("i",this.lazyAssign(e,this.computedMember("i",t.watchId)),this.lazyRecurse(t,e,r,i,a,!0))
switch(t.type){case po.Program:o(t.body,function(e,r){h.recurse(e.expression,n,n,function(t){c=t}),r!==t.body.length-1?h.current().body.push(c,";"):h.return_(c)})
break
case po.Literal:f=this.escape(t.value),this.assign(e,f),i(f)
break
case po.UnaryExpression:this.recurse(t.argument,n,n,function(t){c=t}),f=t.operator+"("+this.ifDefined(c,0)+")",this.assign(e,f),i(f)
break
case po.BinaryExpression:this.recurse(t.left,n,n,function(t){u=t}),this.recurse(t.right,n,n,function(t){c=t}),f="+"===t.operator?this.plus(u,c):"-"===t.operator?this.ifDefined(u,0)+t.operator+this.ifDefined(c,0):"("+u+")"+t.operator+"("+c+")",this.assign(e,f),i(f)
break
case po.LogicalExpression:e=e||this.nextId(),h.recurse(t.left,e),h.if_("&&"===t.operator?e:h.not(e),h.lazyRecurse(t.right,e)),i(e)
break
case po.ConditionalExpression:e=e||this.nextId(),h.recurse(t.test,e),h.if_(e,h.lazyRecurse(t.alternate,e),h.lazyRecurse(t.consequent,e)),i(e)
break
case po.Identifier:e=e||this.nextId(),r&&(r.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",t.name)+"?l:s"),r.computed=!1,r.name=t.name),Qe(t.name),h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",t.name)),function(){h.if_("inputs"===h.stage||"s",function(){a&&1!==a&&h.if_(h.not(h.nonComputedMember("s",t.name)),h.lazyAssign(h.nonComputedMember("s",t.name),"{}")),h.assign(e,h.nonComputedMember("s",t.name))})},e&&h.lazyAssign(e,h.nonComputedMember("l",t.name))),(h.state.expensiveChecks||$n(t.name))&&h.addEnsureSafeObject(e),i(e)
break
case po.MemberExpression:u=r&&(r.context=this.nextId())||this.nextId(),e=e||this.nextId(),h.recurse(t.object,u,n,function(){h.if_(h.notNull(u),function(){a&&1!==a&&h.addEnsureSafeAssignContext(u),t.computed?(c=h.nextId(),h.recurse(t.property,c),h.getStringValue(c),h.addEnsureSafeMemberName(c),a&&1!==a&&h.if_(h.not(h.computedMember(u,c)),h.lazyAssign(h.computedMember(u,c),"{}")),f=h.ensureSafeObject(h.computedMember(u,c)),h.assign(e,f),r&&(r.computed=!0,r.name=c)):(Qe(t.property.name),a&&1!==a&&h.if_(h.not(h.nonComputedMember(u,t.property.name)),h.lazyAssign(h.nonComputedMember(u,t.property.name),"{}")),f=h.nonComputedMember(u,t.property.name),(h.state.expensiveChecks||$n(t.property.name))&&(f=h.ensureSafeObject(f)),h.assign(e,f),r&&(r.computed=!1,r.name=t.property.name))},function(){h.assign(e,"undefined")}),i(e)},!!a)
break
case po.CallExpression:e=e||this.nextId(),t.filter?(c=h.filter(t.callee.name),l=[],o(t.arguments,function(t){var e=h.nextId()
h.recurse(t,e),l.push(e)}),f=c+"("+l.join(",")+")",h.assign(e,f),i(e)):(c=h.nextId(),u={},l=[],h.recurse(t.callee,c,u,function(){h.if_(h.notNull(c),function(){h.addEnsureSafeFunction(c),o(t.arguments,function(t){h.recurse(t,h.nextId(),n,function(t){l.push(h.ensureSafeObject(t))})}),u.name?(h.state.expensiveChecks||h.addEnsureSafeObject(u.context),f=h.member(u.context,u.name,u.computed)+"("+l.join(",")+")"):f=c+"("+l.join(",")+")",f=h.ensureSafeObject(f),h.assign(e,f)},function(){h.assign(e,"undefined")}),i(e)}))
break
case po.AssignmentExpression:if(c=this.nextId(),u={},!cn(t.left))throw ao("lval","Trying to assign a value to a non l-value")
this.recurse(t.left,n,u,function(){h.if_(h.notNull(u.context),function(){h.recurse(t.right,c),h.addEnsureSafeObject(h.member(u.context,u.name,u.computed)),h.addEnsureSafeAssignContext(u.context),f=h.member(u.context,u.name,u.computed)+t.operator+c,h.assign(e,f),i(e||f)})},1)
break
case po.ArrayExpression:l=[],o(t.elements,function(t){h.recurse(t,h.nextId(),n,function(t){l.push(t)})}),f="["+l.join(",")+"]",this.assign(e,f),i(f)
break
case po.ObjectExpression:l=[],o(t.properties,function(t){h.recurse(t.value,h.nextId(),n,function(e){l.push(h.escape(t.key.type===po.Identifier?t.key.name:""+t.key.value)+":"+e)})}),f="{"+l.join(",")+"}",this.assign(e,f),i(f)
break
case po.ThisExpression:this.assign(e,"s"),i("s")
break
case po.LocalsExpression:this.assign(e,"l"),i("l")
break
case po.NGValueParameter:this.assign(e,"v"),i("v")}},getHasOwnProperty:function(t,e){var n=t+"."+e,r=this.current().own
return r.hasOwnProperty(n)||(r[n]=this.nextId(!1,t+"&&("+this.escape(e)+" in "+t+")")),r[n]},assign:function(t,e){if(t)return this.current().body.push(t,"=",e,";"),t},filter:function(t){return this.state.filters.hasOwnProperty(t)||(this.state.filters[t]=this.nextId(!0)),this.state.filters[t]},ifDefined:function(t,e){return"ifDefined("+t+","+this.escape(e)+")"},plus:function(t,e){return"plus("+t+","+e+")"},return_:function(t){this.current().body.push("return ",t,";")},if_:function(t,e,n){if(t===!0)e()
else{var r=this.current().body
r.push("if(",t,"){"),e(),r.push("}"),n&&(r.push("else{"),n(),r.push("}"))}},not:function(t){return"!("+t+")"},notNull:function(t){return t+"!=null"},nonComputedMember:function(t,e){return t+"."+e},computedMember:function(t,e){return t+"["+e+"]"},member:function(t,e,n){return n?this.computedMember(t,e):this.nonComputedMember(t,e)},addEnsureSafeObject:function(t){this.current().body.push(this.ensureSafeObject(t),";")},addEnsureSafeMemberName:function(t){this.current().body.push(this.ensureSafeMemberName(t),";")},addEnsureSafeFunction:function(t){this.current().body.push(this.ensureSafeFunction(t),";")},addEnsureSafeAssignContext:function(t){this.current().body.push(this.ensureSafeAssignContext(t),";")},ensureSafeObject:function(t){return"ensureSafeObject("+t+",text)"},ensureSafeMemberName:function(t){return"ensureSafeMemberName("+t+",text)"},ensureSafeFunction:function(t){return"ensureSafeFunction("+t+",text)"},getStringValue:function(t){this.assign(t,"getStringValue("+t+")")},ensureSafeAssignContext:function(t){return"ensureSafeAssignContext("+t+",text)"},lazyRecurse:function(t,e,n,r,i,o){var a=this
return function(){a.recurse(t,e,n,r,i,o)}},lazyAssign:function(t,e){var n=this
return function(){n.assign(t,e)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)},escape:function(t){if(C(t))return"'"+t.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'"
if(S(t))return t.toString()
if(t===!0)return"true"
if(t===!1)return"false"
if(null===t)return"null"
if("undefined"==typeof t)return"undefined"
throw ao("esc","IMPOSSIBLE")},nextId:function(t,e){var n="v"+this.state.nextId++
return t||this.current().vars.push(n+(e?"="+e:"")),n},current:function(){return this.state[this.state.computing]}},dn.prototype={compile:function(t,e){var n=this,r=this.astBuilder.ast(t)
this.expression=t,this.expensiveChecks=e,sn(r,n.$filter)
var i,a;(i=ln(r))&&(a=this.recurse(i))
var s,u=un(r.body)
u&&(s=[],o(u,function(t,e){var r=n.recurse(t)
t.input=r,s.push(r),t.watchId=e}))
var c=[]
o(r.body,function(t){c.push(n.recurse(t.expression))})
var l=0===r.body.length?$:1===r.body.length?c[0]:function(t,e){var n
return o(c,function(r){n=r(t,e)}),n}
return a&&(l.assign=function(t,e,n){return a(t,n,e)}),s&&(l.inputs=s),l.literal=fn(r),l.constant=hn(r),l},recurse:function(t,e,r){var i,a,s,u=this
if(t.input)return this.inputs(t.input,t.watchId)
switch(t.type){case po.Literal:return this.value(t.value,e)
case po.UnaryExpression:return a=this.recurse(t.argument),this["unary"+t.operator](a,e)
case po.BinaryExpression:return i=this.recurse(t.left),a=this.recurse(t.right),this["binary"+t.operator](i,a,e)
case po.LogicalExpression:return i=this.recurse(t.left),a=this.recurse(t.right),this["binary"+t.operator](i,a,e)
case po.ConditionalExpression:return this["ternary?:"](this.recurse(t.test),this.recurse(t.alternate),this.recurse(t.consequent),e)
case po.Identifier:return Qe(t.name,u.expression),u.identifier(t.name,u.expensiveChecks||$n(t.name),e,r,u.expression)
case po.MemberExpression:return i=this.recurse(t.object,!1,!!r),t.computed||(Qe(t.property.name,u.expression),a=t.property.name),t.computed&&(a=this.recurse(t.property)),t.computed?this.computedMember(i,a,e,r,u.expression):this.nonComputedMember(i,a,u.expensiveChecks,e,r,u.expression)
case po.CallExpression:return s=[],o(t.arguments,function(t){s.push(u.recurse(t))}),t.filter&&(a=this.$filter(t.callee.name)),t.filter||(a=this.recurse(t.callee,!0)),t.filter?function(t,r,i,o){for(var u=[],c=0;c<s.length;++c)u.push(s[c](t,r,i,o))
var l=a.apply(n,u,o)
return e?{context:n,name:n,value:l}:l}:function(t,n,r,i){var o,c=a(t,n,r,i)
if(null!=c.value){tn(c.context,u.expression),en(c.value,u.expression)
for(var l=[],f=0;f<s.length;++f)l.push(tn(s[f](t,n,r,i),u.expression))
o=tn(c.value.apply(c.context,l),u.expression)}return e?{value:o}:o}
case po.AssignmentExpression:return i=this.recurse(t.left,!0,1),a=this.recurse(t.right),function(t,n,r,o){var s=i(t,n,r,o),c=a(t,n,r,o)
return tn(s.value,u.expression),nn(s.context),s.context[s.name]=c,e?{value:c}:c}
case po.ArrayExpression:return s=[],o(t.elements,function(t){s.push(u.recurse(t))}),function(t,n,r,i){for(var o=[],a=0;a<s.length;++a)o.push(s[a](t,n,r,i))
return e?{value:o}:o}
case po.ObjectExpression:return s=[],o(t.properties,function(t){s.push({key:t.key.type===po.Identifier?t.key.name:""+t.key.value,value:u.recurse(t.value)})}),function(t,n,r,i){for(var o={},a=0;a<s.length;++a)o[s[a].key]=s[a].value(t,n,r,i)
return e?{value:o}:o}
case po.ThisExpression:return function(t){return e?{value:t}:t}
case po.LocalsExpression:return function(t,n){return e?{value:n}:n}
case po.NGValueParameter:return function(t,n,r){return e?{value:r}:r}}},"unary+":function(t,e){return function(n,r,i,o){var a=t(n,r,i,o)
return a=b(a)?+a:0,e?{value:a}:a}},"unary-":function(t,e){return function(n,r,i,o){var a=t(n,r,i,o)
return a=b(a)?-a:0,e?{value:a}:a}},"unary!":function(t,e){return function(n,r,i,o){var a=!t(n,r,i,o)
return e?{value:a}:a}},"binary+":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a),u=e(r,i,o,a),c=on(s,u)
return n?{value:c}:c}},"binary-":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a),u=e(r,i,o,a),c=(b(s)?s:0)-(b(u)?u:0)
return n?{value:c}:c}},"binary*":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)*e(r,i,o,a)
return n?{value:s}:s}},"binary/":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)/e(r,i,o,a)
return n?{value:s}:s}},"binary%":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)%e(r,i,o,a)
return n?{value:s}:s}},"binary===":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)===e(r,i,o,a)
return n?{value:s}:s}},"binary!==":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)!==e(r,i,o,a)
return n?{value:s}:s}},"binary==":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)==e(r,i,o,a)
return n?{value:s}:s}},"binary!=":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)!=e(r,i,o,a)
return n?{value:s}:s}},"binary<":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)<e(r,i,o,a)
return n?{value:s}:s}},"binary>":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)>e(r,i,o,a)
return n?{value:s}:s}},"binary<=":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)<=e(r,i,o,a)
return n?{value:s}:s}},"binary>=":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)>=e(r,i,o,a)
return n?{value:s}:s}},"binary&&":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)&&e(r,i,o,a)
return n?{value:s}:s}},"binary||":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)||e(r,i,o,a)
return n?{value:s}:s}},"ternary?:":function(t,e,n,r){return function(i,o,a,s){var u=t(i,o,a,s)?e(i,o,a,s):n(i,o,a,s)
return r?{value:u}:u}},value:function(t,e){return function(){return e?{context:n,name:n,value:t}:t}},identifier:function(t,e,r,i,o){return function(a,s,u,c){var l=s&&t in s?s:a
i&&1!==i&&l&&!l[t]&&(l[t]={})
var f=l?l[t]:n
return e&&tn(f,o),r?{context:l,name:t,value:f}:f}},computedMember:function(t,e,n,r,i){return function(o,a,s,u){var c,l,f=t(o,a,s,u)
return null!=f&&(c=e(o,a,s,u),c=Xe(c),Qe(c,i),r&&1!==r&&(nn(f),f&&!f[c]&&(f[c]={})),l=f[c],tn(l,i)),n?{context:f,name:c,value:l}:l}},nonComputedMember:function(t,e,r,i,o,a){return function(s,u,c,l){var f=t(s,u,c,l)
o&&1!==o&&(nn(f),f&&!f[e]&&(f[e]={}))
var h=null!=f?f[e]:n
return(r||$n(e))&&tn(h,a),i?{context:f,name:e,value:h}:h}},inputs:function(t,e){return function(n,r,i,o){return o?o[e]:t(n,r,i)}}}
var $o=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n,this.ast=new po(t,n),this.astCompiler=n.csp?new dn(this.ast,e):new pn(this.ast,e)}
$o.prototype={constructor:$o,parse:function(t){return this.astCompiler.compile(t,this.options.expensiveChecks)}}
var vo=Object.prototype.valueOf,mo=r("$sce"),go={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},yo=r("$compile"),bo=e.createElement("a"),wo=Nn(t.location.href)
Pn.$inject=["$document"],Rn.$inject=["$provide"]
var xo=22,Co=".",So="0"
Un.$inject=["$locale"],Hn.$inject=["$locale"]
var Eo={yyyy:Jn("FullYear",4,0,!1,!0),yy:Jn("FullYear",2,0,!0,!0),y:Jn("FullYear",1,0,!1,!0),MMMM:Kn("Month"),MMM:Kn("Month",!0),MM:Jn("Month",2,1),M:Jn("Month",1,1),LLLL:Kn("Month",!1,!0),dd:Jn("Date",2),d:Jn("Date",1),HH:Jn("Hours",2),H:Jn("Hours",1),hh:Jn("Hours",2,-12),h:Jn("Hours",1,-12),mm:Jn("Minutes",2),m:Jn("Minutes",1),ss:Jn("Seconds",2),s:Jn("Seconds",1),sss:Jn("Milliseconds",3),EEEE:Kn("Day"),EEE:Kn("Day",!0),a:tr,Z:Yn,ww:Xn(2),w:Xn(1),G:er,GG:er,GGG:er,GGGG:nr},ko=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Ao=/^\-?\d+$/
rr.$inject=["$locale"]
var To=m(Mr),Oo=m(Dr)
ar.$inject=["$parse"]
var Mo=m({restrict:"E",compile:function(t,e){if(!e.href&&!e.xlinkHref)return function(t,e){if("a"===e[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===Lr.call(e.prop("href"))?"xlink:href":"href"
e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}}),Do={}
o(Si,function(t,e){function n(t,n,i){t.$watch(i[r],function(t){i.$set(e,!!t)})}if("multiple"!=t){var r=$e("ng-"+e),i=n
"checked"===t&&(i=function(t,e,i){i.ngModel!==i[r]&&n(t,e,i)}),Do[r]=function(){return{restrict:"A",priority:100,link:i}}}}),o(ki,function(t,e){Do[e]=function(){return{priority:100,link:function(t,n,r){if("ngPattern"===e&&"/"==r.ngPattern.charAt(0)){var i=r.ngPattern.match(Ar)
if(i)return void r.$set("ngPattern",new RegExp(i[1],i[2]))}t.$watch(r[e],function(t){r.$set(e,t)})}}}}),o(["src","srcset","href"],function(t){var e=$e("ng-"+t)
Do[e]=function(){return{priority:99,link:function(n,r,i){var o=t,a=t
"href"===t&&"[object SVGAnimatedString]"===Lr.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(e){return e?(i.$set(a,e),void(Vr&&o&&r.prop(o,i[a]))):void("href"===t&&i.$set(a,null))})}}}})
var No={$addControl:$,$$renameControl:ur,$removeControl:$,$setValidity:$,$setDirty:$,$setPristine:$,$setSubmitted:$},jo="ng-submitted"
cr.$inject=["$element","$attrs","$scope","$animate","$interpolate"]
var Vo=function(t){return["$timeout","$parse",function(e,r){function i(t){return""===t?r('this[""]').assign:r(t).assign||$}var o={name:"form",restrict:t?"EAC":"E",require:["form","^^?form"],controller:cr,compile:function(r,o){r.addClass(va).addClass(da)
var a=o.name?"name":!(!t||!o.ngForm)&&"ngForm"
return{pre:function(t,r,o,s){var u=s[0]
if(!("action"in o)){var c=function(e){t.$apply(function(){u.$commitViewValue(),u.$setSubmitted()}),e.preventDefault()}
fi(r[0],"submit",c),r.on("$destroy",function(){e(function(){hi(r[0],"submit",c)},0,!1)})}var l=s[1]||u.$$parentForm
l.$addControl(u)
var h=a?i(u.$name):$
a&&(h(t,u),o.$observe(a,function(e){u.$name!==e&&(h(t,n),u.$$parentForm.$$renameControl(u,e),(h=i(u.$name))(t,u))})),r.on("$destroy",function(){u.$$parentForm.$removeControl(u),h(t,n),f(u,No)})}}}}
return o}]},Po=Vo(),Io=Vo(!0),Ro=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,qo=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,_o=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Fo=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Lo=/^(\d{4,})-(\d{2})-(\d{2})$/,Uo=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ho=/^(\d{4,})-W(\d\d)$/,Bo=/^(\d{4,})-(\d\d)$/,zo=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Wo="keydown wheel mousedown",Go=mt()
o("date,datetime-local,month,time,week".split(","),function(t){Go[t]=!0})
var Jo={text:fr,date:$r("date",Lo,dr(Lo,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":$r("datetimelocal",Uo,dr(Uo,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:$r("time",zo,dr(zo,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:$r("week",Ho,pr,"yyyy-Www"),month:$r("month",Bo,dr(Bo,["yyyy","MM"]),"yyyy-MM"),number:mr,url:gr,email:yr,radio:br,checkbox:xr,hidden:$,button:$,submit:$,reset:$,file:$},Ko=["$browser","$sniffer","$filter","$parse",function(t,e,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(Jo[Mr(a.type)]||Jo.text)(i,o,a,s[0],e,t,n,r)}}}}],Yo=/^(true|false|\d+)$/,Zo=function(){return{restrict:"A",priority:100,compile:function(t,e){return Yo.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},Qo=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,n,r){t.$$addBindingInfo(n,r.ngBind),n=n[0],e.$watch(r.ngBind,function(t){n.textContent=y(t)?"":t})}}}}],Xo=["$interpolate","$compile",function(t,e){return{compile:function(n){return e.$$addBindingClass(n),function(n,r,i){var o=t(r.attr(i.$attr.ngBindTemplate))
e.$$addBindingInfo(r,o.expressions),r=r[0],i.$observe("ngBindTemplate",function(t){r.textContent=y(t)?"":t})}}}}],ta=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(r,i){var o=e(i.ngBindHtml),a=e(i.ngBindHtml,function(t){return(t||"").toString()})
return n.$$addBindingClass(r),function(e,r,i){n.$$addBindingInfo(r,i.ngBindHtml),e.$watch(a,function(){r.html(t.getTrustedHtml(o(e))||"")})}}}}],ea=m({restrict:"A",require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),na=Cr("",!0),ra=Cr("Odd",0),ia=Cr("Even",1),oa=sr({compile:function(t,e){e.$set("ngCloak",n),t.removeClass("ng-cloak")}}),aa=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],sa={},ua={blur:!0,focus:!0}
o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=$e("ng-"+t)
sa[e]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,o){var a=n(o[e],null,!0)
return function(e,n){n.on(t,function(n){var i=function(){a(e,{$event:n})}
ua[t]&&r.$$phase?e.$evalAsync(i):e.$apply(i)})}}}}]})
var ca=["$animate","$compile",function(t,e){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c
n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=e.$$createComment("end ngIf",i.ngIf),s={clone:n},t.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),s&&(c=vt(s.clone),t.leave(c).then(function(){c=null}),s=null))})}}}],la=["$templateRequest","$anchorScroll","$animate",function(t,e,n){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Br.noop,compile:function(r,i){var o=i.ngInclude||i.src,a=i.onload||"",s=i.autoscroll
return function(r,i,u,c,l){var f,h,p,d=0,$=function(){h&&(h.remove(),h=null),f&&(f.$destroy(),f=null),p&&(n.leave(p).then(function(){h=null}),h=p,p=null)}
r.$watch(o,function(o){var u=function(){!b(s)||s&&!r.$eval(s)||e()},h=++d
o?(t(o,!0).then(function(t){if(!r.$$destroyed&&h===d){var e=r.$new()
c.template=t
var s=l(e,function(t){$(),n.enter(t,null,i).then(u)})
f=e,p=s,f.$emit("$includeContentLoaded",o),r.$eval(a)}},function(){r.$$destroyed||h===d&&($(),r.$emit("$includeContentError",o))}),r.$emit("$includeContentRequested",o)):($(),c.template=null)})}}}}],fa=["$compile",function(t){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){return Lr.call(r[0]).match(/SVG/)?(r.empty(),void t(Tt(o.template,e).childNodes)(n,function(t){r.append(t)},{futureParentElement:r})):(r.html(o.template),void t(r.contents())(n))}}}],ha=sr({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),pa=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,r,i){var a=e.attr(r.$attr.ngList)||", ",s="false"!==r.ngTrim,u=s?Jr(a):a,c=function(t){if(!y(t)){var e=[]
return t&&o(t.split(u),function(t){t&&e.push(s?Jr(t):t)}),e}}
i.$parsers.push(c),i.$formatters.push(function(t){return Wr(t)?t.join(a):n}),i.$isEmpty=function(t){return!t||!t.length}}}},da="ng-valid",$a="ng-invalid",va="ng-pristine",ma="ng-dirty",ga="ng-untouched",ya="ng-touched",ba="ng-pending",wa="ng-empty",xa="ng-not-empty",Ca=r("ngModel"),Sa=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(t,e,r,i,a,s,u,c,l,f){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=n,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=n,this.$name=f(r.name||"",!1)(t),this.$$parentForm=No
var h,p=a(r.ngModel),d=p.assign,v=p,m=d,g=null,w=this
this.$$setOptions=function(t){if(w.$options=t,t&&t.getterSetter){var e=a(r.ngModel+"()"),n=a(r.ngModel+"($$$p)")
v=function(t){var n=p(t)
return k(n)&&(n=e(t)),n},m=function(t,e){k(p(t))?n(t,{$$$p:e}):d(t,e)}}else if(!p.assign)throw Ca("nonassign","Expression '{0}' is non-assignable. Element: {1}",r.ngModel,X(i))},this.$render=$,this.$isEmpty=function(t){return y(t)||""===t||null===t||t!==t},this.$$updateEmptyClasses=function(t){w.$isEmpty(t)?(s.removeClass(i,xa),s.addClass(i,wa)):(s.removeClass(i,wa),s.addClass(i,xa))}
var x=0
Sr({ctrl:this,$element:i,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]},$animate:s}),this.$setPristine=function(){w.$dirty=!1,w.$pristine=!0,s.removeClass(i,ma),s.addClass(i,va)},this.$setDirty=function(){w.$dirty=!0,w.$pristine=!1,s.removeClass(i,va),s.addClass(i,ma),w.$$parentForm.$setDirty()},this.$setUntouched=function(){w.$touched=!1,w.$untouched=!0,s.setClass(i,ga,ya)},this.$setTouched=function(){w.$touched=!0,w.$untouched=!1,s.setClass(i,ya,ga)},this.$rollbackViewValue=function(){u.cancel(g),w.$viewValue=w.$$lastCommittedViewValue,w.$render()},this.$validate=function(){if(!S(w.$modelValue)||!isNaN(w.$modelValue)){var t=w.$$lastCommittedViewValue,e=w.$$rawModelValue,r=w.$valid,i=w.$modelValue,o=w.$options&&w.$options.allowInvalid
w.$$runValidators(e,t,function(t){o||r===t||(w.$modelValue=t?e:n,w.$modelValue!==i&&w.$$writeModelToScope())})}},this.$$runValidators=function(t,e,r){function i(){var t=w.$$parserName||"parse"
return y(h)?(u(t,null),!0):(h||(o(w.$validators,function(t,e){u(e,null)}),o(w.$asyncValidators,function(t,e){u(e,null)})),u(t,h),h)}function a(){var n=!0
return o(w.$validators,function(r,i){var o=r(t,e)
n=n&&o,u(i,o)}),!!n||(o(w.$asyncValidators,function(t,e){u(e,null)}),!1)}function s(){var r=[],i=!0
o(w.$asyncValidators,function(o,a){var s=o(t,e)
if(!V(s))throw Ca("nopromise","Expected asynchronous validator to return a promise but got '{0}' instead.",s)
u(a,n),r.push(s.then(function(){u(a,!0)},function(){i=!1,u(a,!1)}))}),r.length?l.all(r).then(function(){c(i)},$):c(!0)}function u(t,e){f===x&&w.$setValidity(t,e)}function c(t){f===x&&r(t)}x++
var f=x
return i()&&a()?void s():void c(!1)},this.$commitViewValue=function(){var t=w.$viewValue
u.cancel(g),(w.$$lastCommittedViewValue!==t||""===t&&w.$$hasNativeValidators)&&(w.$$updateEmptyClasses(t),w.$$lastCommittedViewValue=t,w.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function e(){w.$modelValue!==a&&w.$$writeModelToScope()}var r=w.$$lastCommittedViewValue,i=r
if(h=!y(i)||n)for(var o=0;o<w.$parsers.length;o++)if(i=w.$parsers[o](i),y(i)){h=!1
break}S(w.$modelValue)&&isNaN(w.$modelValue)&&(w.$modelValue=v(t))
var a=w.$modelValue,s=w.$options&&w.$options.allowInvalid
w.$$rawModelValue=i,s&&(w.$modelValue=i,e()),w.$$runValidators(i,w.$$lastCommittedViewValue,function(t){s||(w.$modelValue=t?i:n,e())})},this.$$writeModelToScope=function(){m(t,w.$modelValue),o(w.$viewChangeListeners,function(t){try{t()}catch(n){e(n)}})},this.$setViewValue=function(t,e){w.$viewValue=t,w.$options&&!w.$options.updateOnDefault||w.$$debounceViewValueCommit(e)},this.$$debounceViewValueCommit=function(e){var n,r=0,i=w.$options
i&&b(i.debounce)&&(n=i.debounce,S(n)?r=n:S(n[e])?r=n[e]:S(n["default"])&&(r=n["default"])),u.cancel(g),r?g=u(function(){w.$commitViewValue()},r):c.$$phase?w.$commitViewValue():t.$apply(function(){w.$commitViewValue()})},t.$watch(function(){var e=v(t)
if(e!==w.$modelValue&&(w.$modelValue===w.$modelValue||e===e)){w.$modelValue=w.$$rawModelValue=e,h=n
for(var r=w.$formatters,i=r.length,o=e;i--;)o=r[i](o)
w.$viewValue!==o&&(w.$$updateEmptyClasses(o),w.$viewValue=w.$$lastCommittedViewValue=o,w.$render(),w.$$runValidators(e,o,$))}return e})}],Ea=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Sa,priority:1,compile:function(e){return e.addClass(va).addClass(ga).addClass(da),{pre:function(t,e,n,r){var i=r[0],o=r[1]||i.$$parentForm
i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),n.$observe("name",function(t){i.$name!==t&&i.$$parentForm.$$renameControl(i,t)}),t.$on("$destroy",function(){i.$$parentForm.$removeControl(i)})},post:function(e,n,r,i){var o=i[0]
o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(t){o.$$debounceViewValueCommit(t&&t.type)}),n.on("blur",function(){o.$touched||(t.$$phase?e.$evalAsync(o.$setTouched):e.$apply(o.$setTouched))})}}}}}],ka=/(\s+|^)default(\s+|$)/,Aa=function(){return{restrict:"A",controller:["$scope","$attrs",function(t,e){var n=this
this.$options=L(t.$eval(e.ngModelOptions)),b(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=Jr(this.$options.updateOn.replace(ka,function(){return n.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},Ta=sr({terminal:!0,priority:1e3}),Oa=r("ngOptions"),Ma=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Da=["$compile","$parse",function(t,n){function r(t,e,r){function o(t,e,n,r,i){this.selectValue=t,this.viewValue=e,this.label=n,this.group=r,this.disabled=i}function a(t){var e
if(!c&&i(t))e=t
else{e=[]
for(var n in t)t.hasOwnProperty(n)&&"$"!==n.charAt(0)&&e.push(n)}return e}var s=t.match(Ma)
if(!s)throw Oa("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",t,X(e))
var u=s[5]||s[7],c=s[6],l=/ as /.test(s[0])&&s[1],f=s[9],h=n(s[2]?s[1]:u),p=l&&n(l),d=p||h,$=f&&n(f),v=f?function(t,e){return $(r,e)}:function(t){return Xt(t)},m=function(t,e){return v(t,C(t,e))},g=n(s[2]||s[1]),y=n(s[3]||""),b=n(s[4]||""),w=n(s[8]),x={},C=c?function(t,e){return x[c]=e,x[u]=t,x}:function(t){return x[u]=t,x}
return{trackBy:f,getTrackByValue:m,getWatchables:n(w,function(t){var e=[]
t=t||[]
for(var n=a(t),i=n.length,o=0;o<i;o++){var u=t===n?o:n[o],c=t[u],l=C(c,u),f=v(c,l)
if(e.push(f),s[2]||s[1]){var h=g(r,l)
e.push(h)}if(s[4]){var p=b(r,l)
e.push(p)}}return e}),getOptions:function(){for(var t=[],e={},n=w(r)||[],i=a(n),s=i.length,u=0;u<s;u++){var c=n===i?u:i[u],l=n[c],h=C(l,c),p=d(r,h),$=v(p,h),x=g(r,h),S=y(r,h),E=b(r,h),k=new o($,p,x,S,E)
t.push(k),e[$]=k}return{items:t,selectValueMap:e,getOptionFromViewValue:function(t){return e[m(t)]},getViewValueFromOption:function(t){return f?Br.copy(t.viewValue):t.viewValue}}}}}function a(e,n,i,a){function c(t,e){t.element=e,e.disabled=t.disabled,t.label!==e.label&&(e.label=t.label,e.textContent=t.label),t.value!==e.value&&(e.value=t.selectValue)}function l(t,e,n,r){var i
return e&&Mr(e.nodeName)===n?i=e:(i=r.cloneNode(!1),e?t.insertBefore(i,e):t.appendChild(i)),i}function f(t){for(var e;t;)e=t.nextSibling,zt(t),t=e}function h(t){var e=d&&d[0],n=C&&C[0]
if(e||n)for(;t&&(t===e||t===n||t.nodeType===oi||"option"===_(t)&&""===t.value);)t=t.nextSibling
return t}function p(){var t=S&&$.readValue()
S=E.getOptions()
var e={},r=n[0].firstChild
if(x&&n.prepend(d),r=h(r),S.items.forEach(function(t){var i,o,a
b(t.group)?(i=e[t.group],i||(o=l(n[0],r,"optgroup",u),r=o.nextSibling,o.label=t.group,i=e[t.group]={groupElement:o,currentOptionElement:o.firstChild}),a=l(i.groupElement,i.currentOptionElement,"option",s),c(t,a),i.currentOptionElement=a.nextSibling):(a=l(n[0],r,"option",s),c(t,a),r=a.nextSibling)}),Object.keys(e).forEach(function(t){f(e[t].currentOptionElement)}),f(r),v.$render(),!v.$isEmpty(t)){var i=$.readValue(),o=E.trackBy||m;(o?H(t,i):t===i)||(v.$setViewValue(i),v.$render())}}for(var d,$=a[0],v=a[1],m=i.multiple,g=0,y=n.children(),w=y.length;g<w;g++)if(""===y[g].value){d=y.eq(g)
break}var x=!!d,C=Pr(s.cloneNode(!1))
C.val("?")
var S,E=r(i.ngOptions,n,e),k=function(){x||n.prepend(d),n.val(""),d.prop("selected",!0),d.attr("selected",!0)},A=function(){x||d.remove()},T=function(){n.prepend(C),n.val("?"),C.prop("selected",!0),C.attr("selected",!0)},O=function(){C.remove()}
m?(v.$isEmpty=function(t){return!t||0===t.length},$.writeValue=function(t){S.items.forEach(function(t){t.element.selected=!1}),t&&t.forEach(function(t){var e=S.getOptionFromViewValue(t)
e&&!e.disabled&&(e.element.selected=!0)})},$.readValue=function(){var t=n.val()||[],e=[]
return o(t,function(t){var n=S.selectValueMap[t]
n&&!n.disabled&&e.push(S.getViewValueFromOption(n))}),e},E.trackBy&&e.$watchCollection(function(){if(Wr(v.$viewValue))return v.$viewValue.map(function(t){return E.getTrackByValue(t)})},function(){v.$render()})):($.writeValue=function(t){var e=S.getOptionFromViewValue(t)
e&&!e.disabled?(n[0].value!==e.selectValue&&(O(),A(),n[0].value=e.selectValue,e.element.selected=!0),e.element.setAttribute("selected","selected")):null===t||x?(O(),k()):(A(),T())},$.readValue=function(){var t=S.selectValueMap[n.val()]
return t&&!t.disabled?(A(),O(),S.getViewValueFromOption(t)):null},E.trackBy&&e.$watch(function(){return E.getTrackByValue(v.$viewValue)},function(){v.$render()})),x?(d.remove(),t(d)(e),d.removeClass("ng-scope")):d=Pr(s.cloneNode(!1)),p(),e.$watchCollection(E.getWatchables,p)}var s=e.createElement("option"),u=e.createElement("optgroup")
return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(t,e,n,r){r[0].registerOption=$},post:a}}}],Na=["$locale","$interpolate","$log",function(t,e,n){var r=/{}/g,i=/^when(Minus)?(.+)$/
return{link:function(a,s,u){function c(t){s.text(t||"")}var l,f=u.count,h=u.$attr.when&&s.attr(u.$attr.when),p=u.offset||0,d=a.$eval(h)||{},v={},m=e.startSymbol(),g=e.endSymbol(),b=m+f+"-"+p+g,w=Br.noop
o(u,function(t,e){var n=i.exec(e)
if(n){var r=(n[1]?"-":"")+Mr(n[2])
d[r]=s.attr(u.$attr[e])}}),o(d,function(t,n){v[n]=e(t.replace(r,b))}),a.$watch(f,function(e){var r=parseFloat(e),i=isNaN(r)
if(i||r in d||(r=t.pluralCat(r-p)),r!==l&&!(i&&S(l)&&isNaN(l))){w()
var o=v[r]
y(o)?(null!=e&&n.debug("ngPluralize: no rule defined for '"+r+"' in "+h),w=$,c()):w=a.$watch(o,c),l=r}})}}}],ja=["$parse","$animate","$compile",function(t,e,a){var s="$$NG_REMOVED",u=r("ngRepeat"),c=function(t,e,n,r,i,o,a){t[n]=r,i&&(t[i]=o),t.$index=e,t.$first=0===e,t.$last=e===a-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0===(1&e))},l=function(t){return t.clone[0]},f=function(t){return t.clone[t.clone.length-1]}
return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(r,h){var p=h.ngRepeat,d=a.$$createComment("end ngRepeat",p),$=p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/)
if(!$)throw u("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",p)
var v=$[1],m=$[2],g=$[3],y=$[4]
if($=v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),!$)throw u("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",v)
var b=$[3]||$[1],w=$[2]
if(g&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g)))throw u("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",g)
var x,C,S,E,k={$id:Xt}
return y?x=t(y):(S=function(t,e){return Xt(e)},E=function(t){return t}),function(t,r,a,h,$){x&&(C=function(e,n,r){return w&&(k[w]=e),k[b]=n,k.$index=r,x(t,k)})
var v=mt()
t.$watchCollection(m,function(a){var h,m,y,x,k,A,T,O,M,D,N,j,V=r[0],P=mt()
if(g&&(t[g]=a),i(a))M=a,O=C||S
else{O=C||E,M=[]
for(var I in a)Or.call(a,I)&&"$"!==I.charAt(0)&&M.push(I)}for(x=M.length,N=new Array(x),h=0;h<x;h++)if(k=a===M?h:M[h],A=a[k],T=O(k,A,h),v[T])D=v[T],delete v[T],P[T]=D,N[h]=D
else{if(P[T])throw o(N,function(t){t&&t.scope&&(v[t.id]=t)}),u("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",p,T,A)
N[h]={id:T,scope:n,clone:n},P[T]=!0}for(var R in v){if(D=v[R],j=vt(D.clone),e.leave(j),j[0].parentNode)for(h=0,m=j.length;h<m;h++)j[h][s]=!0
D.scope.$destroy()}for(h=0;h<x;h++)if(k=a===M?h:M[h],A=a[k],D=N[h],D.scope){y=V
do y=y.nextSibling
while(y&&y[s])
l(D)!=y&&e.move(vt(D.clone),null,V),V=f(D),c(D.scope,h,b,A,w,k,x)}else $(function(t,n){D.scope=n
var r=d.cloneNode(!1)
t[t.length++]=r,e.enter(t,null,V),V=r,D.clone=t,P[D.id]=D,c(D.scope,h,b,A,w,k,x)})
v=P})}}}}],Va="ng-hide",Pa="ng-hide-animate",Ia=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngShow,function(e){t[e?"removeClass":"addClass"](n,Va,{tempClasses:Pa})})}}}],Ra=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngHide,function(e){t[e?"addClass":"removeClass"](n,Va,{tempClasses:Pa})})}}}],qa=sr(function(t,e,n){t.$watch(n.ngStyle,function(t,n){n&&t!==n&&o(n,function(t,n){e.css(n,"")}),t&&e.css(t)},!0)}),_a=["$animate","$compile",function(t,e){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,r,i,a){var s=i.ngSwitch||i.on,u=[],c=[],l=[],f=[],h=function(t,e){return function(){t.splice(e,1)}}
n.$watch(s,function(n){var r,i
for(r=0,i=l.length;r<i;++r)t.cancel(l[r])
for(l.length=0,r=0,i=f.length;r<i;++r){var s=vt(c[r].clone)
f[r].$destroy()
var p=l[r]=t.leave(s)
p.then(h(l,r))}c.length=0,f.length=0,(u=a.cases["!"+n]||a.cases["?"])&&o(u,function(n){n.transclude(function(r,i){f.push(i)
var o=n.element
r[r.length++]=e.$$createComment("end ngSwitchWhen")
var a={clone:r}
c.push(a),t.enter(r,o.parent(),o)})})})}}}],Fa=sr({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:e})}}),La=sr({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),Ua=r("ngTransclude"),Ha=sr({restrict:"EAC",link:function(t,e,n,r,i){function o(t){t.length&&(e.empty(),e.append(t))}if(n.ngTransclude===n.$attr.ngTransclude&&(n.ngTransclude=""),!i)throw Ua("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",X(e))
var a=n.ngTransclude||n.ngTranscludeSlot
i(o,null,a)}}),Ba=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){if("text/ng-template"==n.type){var r=n.id,i=e[0].text
t.put(r,i)}}}}],za={$setViewValue:$,$render:$},Wa=["$element","$scope",function(t,r){var i=this,o=new te
i.ngModelCtrl=za,i.unknownOption=Pr(e.createElement("option")),i.renderUnknownOption=function(e){var n="? "+Xt(e)+" ?"
i.unknownOption.val(n),t.prepend(i.unknownOption),t.val(n)},r.$on("$destroy",function(){i.renderUnknownOption=$}),i.removeUnknownOption=function(){i.unknownOption.parent()&&i.unknownOption.remove()},i.readValue=function(){return i.removeUnknownOption(),t.val()},i.writeValue=function(e){i.hasOption(e)?(i.removeUnknownOption(),t.val(e),""===e&&i.emptyOption.prop("selected",!0)):null==e&&i.emptyOption?(i.removeUnknownOption(),t.val("")):i.renderUnknownOption(e)},i.addOption=function(t,e){if(e[0].nodeType!==oi){dt(t,'"option value"'),""===t&&(i.emptyOption=e)
var n=o.get(t)||0
o.put(t,n+1),i.ngModelCtrl.$render(),kr(e)}},i.removeOption=function(t){var e=o.get(t)
e&&(1===e?(o.remove(t),""===t&&(i.emptyOption=n)):o.put(t,e-1))},i.hasOption=function(t){return!!o.get(t)},i.registerOption=function(t,e,n,r,o){if(r){var a
n.$observe("value",function(t){b(a)&&i.removeOption(a),a=t,i.addOption(t,e)})}else o?t.$watch(o,function(t,r){n.$set("value",t),r!==t&&i.removeOption(r),i.addOption(t,e)}):i.addOption(n.value,e)
e.on("$destroy",function(){i.removeOption(n.value),i.ngModelCtrl.$render()})}}],Ga=function(){function t(t,e,n,r){var i=r[1]
if(i){var a=r[0]
if(a.ngModelCtrl=i,e.on("change",function(){t.$apply(function(){i.$setViewValue(a.readValue())})}),n.multiple){a.readValue=function(){var t=[]
return o(e.find("option"),function(e){e.selected&&t.push(e.value)}),t},a.writeValue=function(t){var n=new te(t)
o(e.find("option"),function(t){t.selected=b(n.get(t.value))})}
var s,u=NaN
t.$watch(function(){u!==i.$viewValue||H(s,i.$viewValue)||(s=U(i.$viewValue),i.$render()),u=i.$viewValue}),i.$isEmpty=function(t){return!t||0===t.length}}}}function e(t,e,n,r){var i=r[1]
if(i){var o=r[0]
i.$render=function(){o.writeValue(i.$viewValue)}}}return{restrict:"E",require:["select","?ngModel"],controller:Wa,priority:1,link:{pre:t,post:e}}},Ja=["$interpolate",function(t){return{restrict:"E",priority:100,compile:function(e,n){if(b(n.value))var r=t(n.value,!0)
else{var i=t(e.text(),!0)
i||n.$set("value",e.text())}return function(t,e,n){var o="$selectController",a=e.parent(),s=a.data(o)||a.parent().data(o)
s&&s.registerOption(t,e,n,r,i)}}}}],Ka=m({restrict:"E",terminal:!1}),Ya=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){r&&(n.required=!0,r.$validators.required=function(t,e){return!n.required||!r.$isEmpty(e)},n.$observe("required",function(){r.$validate()}))}}},Za=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,i,o){if(o){var a,s=i.ngPattern||i.pattern
i.$observe("pattern",function(t){if(C(t)&&t.length>0&&(t=new RegExp("^"+t+"$")),t&&!t.test)throw r("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",s,t,X(e))
a=t||n,o.$validate()}),o.$validators.pattern=function(t,e){return o.$isEmpty(e)||y(a)||a.test(e)}}}}},Qa=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=-1
n.$observe("maxlength",function(t){var e=p(t)
i=isNaN(e)?-1:e,r.$validate()}),r.$validators.maxlength=function(t,e){return i<0||r.$isEmpty(e)||e.length<=i}}}}},Xa=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=0
n.$observe("minlength",function(t){i=p(t)||0,r.$validate()}),r.$validators.minlength=function(t,e){return r.$isEmpty(e)||e.length>=i}}}}}
return t.angular.bootstrap?void(t.console&&console.log("WARNING: Tried to load angular more than once.")):(ft(),wt(Br),Br.module("ngLocale",[],["$provide",function(t){function e(t){t+=""
var e=t.indexOf(".")
return e==-1?0:t.length-e-1}function r(t,r){var i=r
n===i&&(i=Math.min(e(t),3))
var o=Math.pow(10,i),a=(t*o|0)%o
return{v:i,f:a}}var i={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"}
t.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],STANDALONEMONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(t,e){var n=0|t,o=r(t,e)
return 1==n&&0==o.v?i.ONE:i.OTHER}})}]),void Pr(e).ready(function(){at(e,st)}))}(window,document),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),function(t,e,n){"use strict"
function r(){function t(t,e,r,i){return function(o,s,u){var c=u.$normalize(e)
!n[c]||a(s,r)||u[c]||o.$watch(u[t],function(t){t=i?!t:!!t,s.attr(e,t)})}}var n={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0}
this.config=function(t){n=e.extend(n,t)},this.$get=function(){return{config:function(t){return n[t]},$$watchExpr:t}}}var i=e.module("ngAria",["ng"]).provider("$aria",r),o=["BUTTON","A","INPUT","TEXTAREA","SELECT","DETAILS","SUMMARY"],a=function(t,e){if(e.indexOf(t[0].nodeName)!==-1)return!0}
i.directive("ngShow",["$aria",function(t){return t.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(t){return t.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(t){return t.$$watchExpr("ngValue","aria-checked",o,!1)}]).directive("ngChecked",["$aria",function(t){return t.$$watchExpr("ngChecked","aria-checked",o,!1)}]).directive("ngRequired",["$aria",function(t){return t.$$watchExpr("ngRequired","aria-required",o,!1)}]).directive("ngModel",["$aria",function(t){function e(e,n,r,i){return t.config(n)&&!r.attr(e)&&(i||!a(r,o))}function n(t,e){return!e.attr("role")&&e.attr("type")===t&&"INPUT"!==e[0].nodeName}function r(t,e){var n=t.type,r=t.role
return"checkbox"===(n||r)||"menuitemcheckbox"===r?"checkbox":"radio"===(n||r)||"menuitemradio"===r?"radio":"range"===n||"progressbar"===r||"slider"===r?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(i,o){var a=r(o,i)
return{pre:function(t,e,n,r){"checkbox"===a&&(r.$isEmpty=function(t){return t===!1})},post:function(r,i,o,s){function u(){return s.$modelValue}function c(t){var e=o.value==s.$viewValue
i.attr("aria-checked",e)}function l(){i.attr("aria-checked",!s.$isEmpty(s.$viewValue))}var f=e("tabindex","tabindex",i,!1)
switch(a){case"radio":case"checkbox":n(a,i)&&i.attr("role",a),e("aria-checked","ariaChecked",i,!1)&&r.$watch(u,"radio"===a?c:l),f&&i.attr("tabindex",0)
break
case"range":if(n(a,i)&&i.attr("role","slider"),t.config("ariaValue")){var h=!i.attr("aria-valuemin")&&(o.hasOwnProperty("min")||o.hasOwnProperty("ngMin")),p=!i.attr("aria-valuemax")&&(o.hasOwnProperty("max")||o.hasOwnProperty("ngMax")),d=!i.attr("aria-valuenow")
h&&o.$observe("min",function(t){i.attr("aria-valuemin",t)}),p&&o.$observe("max",function(t){i.attr("aria-valuemax",t)}),d&&r.$watch(u,function(t){i.attr("aria-valuenow",t)})}f&&i.attr("tabindex",0)}!o.hasOwnProperty("ngRequired")&&s.$validators.required&&e("aria-required","ariaRequired",i,!1)&&o.$observe("required",function(){i.attr("aria-required",!!o.required)}),e("aria-invalid","ariaInvalid",i,!0)&&r.$watch(function(){return s.$invalid},function(t){i.attr("aria-invalid",!!t)})}}}}}]).directive("ngDisabled",["$aria",function(t){return t.$$watchExpr("ngDisabled","aria-disabled",o,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(t,e,n,r){e.attr("aria-live")||e.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(t,e){return{restrict:"A",compile:function(n,r){var i=e(r.ngClick,null,!0)
return function(e,n,r){a(n,o)||(t.config("bindRoleForClick")&&!n.attr("role")&&n.attr("role","button"),t.config("tabindex")&&!n.attr("tabindex")&&n.attr("tabindex",0),t.config("bindKeypress")&&!r.ngKeypress&&n.on("keypress",function(t){function n(){i(e,{$event:t})}var r=t.which||t.keyCode
32!==r&&13!==r||e.$apply(n)}))}}}}]).directive("ngDblclick",["$aria",function(t){return function(e,n,r){!t.config("tabindex")||n.attr("tabindex")||a(n,o)||n.attr("tabindex",0)}}])}(window,window.angular),function(t,e,n){"use strict"
function r(){var t=!1
this.$get=["$$sanitizeUri",function(n){return t&&e.extend(C,w),function(t){var e=[]
return a(t,c(e,function(t,e){return!/^unsafe:/.test(n(t,e))})),e.join("")}}],this.enableSvg=function(n){return e.isDefined(n)?(t=n,this):t}}function i(t){var n=[],r=c(n,e.noop)
return r.chars(t),n.join("")}function o(t,n){var r,i={},o=t.split(",")
for(r=0;r<o.length;r++)i[n?e.lowercase(o[r]):o[r]]=!0
return i}function a(t,e){null===t||t===n?t="":"string"!=typeof t&&(t=""+t),f.innerHTML=t
var r=5
do{if(0===r)throw h("uinput","Failed to sanitize html because the input is unstable")
r--,document.documentMode<=11&&l(f),t=f.innerHTML,f.innerHTML=t}while(t!==f.innerHTML)
for(var i=f.firstChild;i;){switch(i.nodeType){case 1:e.start(i.nodeName.toLowerCase(),s(i.attributes))
break
case 3:e.chars(i.textContent)}var o
if(!(o=i.firstChild)&&(1==i.nodeType&&e.end(i.nodeName.toLowerCase()),o=i.nextSibling,!o))for(;null==o&&(i=i.parentNode,i!==f);)o=i.nextSibling,1==i.nodeType&&e.end(i.nodeName.toLowerCase())
i=o}for(;i=f.firstChild;)f.removeChild(i)}function s(t){for(var e={},n=0,r=t.length;n<r;n++){var i=t[n]
e[i.name]=i.value}return e}function u(t){return t.replace(/&/g,"&amp;").replace(p,function(t){var e=t.charCodeAt(0),n=t.charCodeAt(1)
return"&#"+(1024*(e-55296)+(n-56320)+65536)+";"}).replace(d,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c(t,n){var r=!1,i=e.bind(t,t.push)
return{start:function(t,o){t=e.lowercase(t),!r&&x[t]&&(r=t),r||C[t]!==!0||(i("<"),i(t),e.forEach(o,function(r,o){var a=e.lowercase(o),s="img"===t&&"src"===a||"background"===a
A[a]!==!0||S[a]===!0&&!n(r,s)||(i(" "),i(o),i('="'),i(u(r)),i('"'))}),i(">"))},end:function(t){t=e.lowercase(t),r||C[t]!==!0||$[t]===!0||(i("</"),i(t),i(">")),t==r&&(r=!1)},chars:function(t){r||i(u(t))}}}function l(t){if(t.nodeType===Node.ELEMENT_NODE)for(var e=t.attributes,n=0,r=e.length;n<r;n++){var i=e[n],o=i.name.toLowerCase()
"xmlns:ns1"!==o&&0!==o.indexOf("ns1:")||(t.removeAttributeNode(i),n--,r--)}var a=t.firstChild
a&&l(a),a=t.nextSibling,a&&l(a)}var f,h=e.$$minErr("$sanitize"),p=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=/([^\#-~ |!])/g,$=o("area,br,col,hr,img,wbr"),v=o("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),m=o("rp,rt"),g=e.extend({},m,v),y=e.extend({},v,o("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),b=e.extend({},m,o("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),w=o("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),x=o("script,style"),C=e.extend({},$,y,b,g),S=o("background,cite,href,longdesc,src,xlink:href"),E=o("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=o("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),A=e.extend({},S,k,E)
!function(t){var e
if(!t.document||!t.document.implementation)throw h("noinert","Can't create an inert html document")
e=t.document.implementation.createHTMLDocument("inert")
var n=e.documentElement||e.getDocumentElement(),r=n.getElementsByTagName("body")
if(1===r.length)f=r[0]
else{var i=e.createElement("html")
f=e.createElement("body"),i.appendChild(f),e.appendChild(i)}}(t),e.module("ngSanitize",[]).provider("$sanitize",r),e.module("ngSanitize").filter("linky",["$sanitize",function(t){var n=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,r=/^mailto:/i,o=e.$$minErr("linky"),a=e.isString
return function(s,u,c){function l(t){t&&v.push(i(t))}function f(t,n){var r
if(v.push("<a "),e.isFunction(c)&&(c=c(t)),e.isObject(c))for(r in c)v.push(r+'="'+c[r]+'" ')
else c={}
!e.isDefined(u)||"target"in c||v.push('target="',u,'" '),v.push('href="',t.replace(/"/g,"&quot;"),'">'),l(n),v.push("</a>")}if(null==s||""===s)return s
if(!a(s))throw o("notstring","Expected string but received: {0}",s)
for(var h,p,d,$=s,v=[];h=$.match(n);)p=h[0],h[2]||h[4]||(p=(h[3]?"http://":"mailto:")+p),d=h.index,l($.substr(0,d)),f(p,h[0].replace(r,"")),$=$.substring(d+h[0].length)
return l($),t(v.join(""))}}])}(window,window.angular),function(t,e,n){"use strict"
function r(t,e,n){if(!t)throw vt("areq","Argument '{0}' is {1}",e||"?",n||"required")
return t}function i(t,e){return t||e?t?e?(H(t)&&(t=t.join(" ")),H(e)&&(e=e.join(" ")),t+" "+e):t:e:""}function o(t){var e={}
return t&&(t.to||t.from)&&(e.to=t.to,e.from=t.from),e}function a(t,e,n){var r=""
return t=H(t)?t:t&&B(t)&&t.length?t.split(/\s+/):[],U(t,function(t,i){t&&t.length>0&&(r+=i>0?" ":"",r+=n?e+t:t+e)}),r}function s(t,e){var n=t.indexOf(e)
e>=0&&t.splice(n,1)}function u(t){if(t instanceof L)switch(t.length){case 0:return[]
case 1:if(t[0].nodeType===Y)return t
break
default:return L(c(t))}if(t.nodeType===Y)return L(t)}function c(t){if(!t[0])return t
for(var e=0;e<t.length;e++){var n=t[e]
if(n.nodeType==Y)return n}}function l(t,e,n){U(e,function(e){t.addClass(e,n)})}function f(t,e,n){U(e,function(e){t.removeClass(e,n)})}function h(t){return function(e,n){n.addClass&&(l(t,e,n.addClass),n.addClass=null),n.removeClass&&(f(t,e,n.removeClass),n.removeClass=null)}}function p(t){if(t=t||{},!t.$$prepared){var e=t.domOperation||q
t.domOperation=function(){t.$$domOperationFired=!0,e(),e=q},t.$$prepared=!0}return t}function d(t,e){$(t,e),v(t,e)}function $(t,e){e.from&&(t.css(e.from),e.from=null)}function v(t,e){e.to&&(t.css(e.to),e.to=null)}function m(t,e,n){var r=e.options||{},i=n.options||{},o=(r.addClass||"")+" "+(i.addClass||""),a=(r.removeClass||"")+" "+(i.removeClass||""),s=g(t.attr("class"),o,a)
i.preparationClasses&&(r.preparationClasses=E(i.preparationClasses,r.preparationClasses),delete i.preparationClasses)
var u=r.domOperation!==q?r.domOperation:null
return F(r,i),u&&(r.domOperation=u),s.addClass?r.addClass=s.addClass:r.addClass=null,s.removeClass?r.removeClass=s.removeClass:r.removeClass=null,e.addClass=r.addClass,e.removeClass=r.removeClass,r}function g(t,e,n){function r(t){B(t)&&(t=t.split(" "))
var e={}
return U(t,function(t){t.length&&(e[t]=!0)}),e}var i=1,o=-1,a={}
t=r(t),e=r(e),U(e,function(t,e){a[e]=i}),n=r(n),U(n,function(t,e){a[e]=a[e]===i?null:o})
var s={addClass:"",removeClass:""}
return U(a,function(e,n){var r,a
e===i?(r="addClass",a=!t[n]):e===o&&(r="removeClass",a=t[n]),a&&(s[r].length&&(s[r]+=" "),s[r]+=n)}),s}function y(t){return t instanceof e.element?t[0]:t}function b(t,e,n){var r=""
e&&(r=a(e,X,!0)),n.addClass&&(r=E(r,a(n.addClass,Z))),n.removeClass&&(r=E(r,a(n.removeClass,Q))),r.length&&(n.preparationClasses=r,t.addClass(r))}function w(t,e){e.preparationClasses&&(t.removeClass(e.preparationClasses),e.preparationClasses=null),e.activeClasses&&(t.removeClass(e.activeClasses),e.activeClasses=null)}function x(t,e){var n=e?"-"+e+"s":""
return S(t,[dt,n]),[dt,n]}function C(t,e){var n=e?"paused":"",r=I+lt
return S(t,[r,n]),[r,n]}function S(t,e){var n=e[0],r=e[1]
t.style[n]=r}function E(t,e){return t?e?t+" "+e:t:e}function k(t){return[pt,t+"s"]}function A(t,e){var n=e?ht:dt
return[n,t+"s"]}function T(t,e,n){var r=Object.create(null),i=t.getComputedStyle(e)||{}
return U(n,function(t,e){var n=i[t]
if(n){var o=n.charAt(0);("-"===o||"+"===o||o>=0)&&(n=O(n)),0===n&&(n=null),r[e]=n}}),r}function O(t){var e=0,n=t.split(/\s*,\s*/)
return U(n,function(t){"s"==t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t=parseFloat(t)||0,e=e?Math.max(t,e):t}),e}function M(t){return 0===t||null!=t}function D(t,e){var n=V,r=t+"s"
return e?n+=ot:r+=" linear all",[n,r]}function N(){var t=Object.create(null)
return{flush:function(){t=Object.create(null)},count:function(e){var n=t[e]
return n?n.total:0},get:function(e){var n=t[e]
return n&&n.value},put:function(e,n){t[e]?t[e].total++:t[e]={total:1,value:n}}}}function j(t,e,n){U(n,function(n){t[n]=G(t[n])?t[n]:e.style.getPropertyValue(n)})}var V,P,I,R,q=e.noop,_=e.copy,F=e.extend,L=e.element,U=e.forEach,H=e.isArray,B=e.isString,z=e.isObject,W=e.isUndefined,G=e.isDefined,J=e.isFunction,K=e.isElement,Y=1,Z="-add",Q="-remove",X="ng-",tt="-active",et="-prepare",nt="ng-animate",rt="$$ngAnimateChildren",it=""
W(t.ontransitionend)&&G(t.onwebkittransitionend)?(it="-webkit-",V="WebkitTransition",P="webkitTransitionEnd transitionend"):(V="transition",P="transitionend"),W(t.onanimationend)&&G(t.onwebkitanimationend)?(it="-webkit-",I="WebkitAnimation",R="webkitAnimationEnd animationend"):(I="animation",R="animationend")
var ot="Duration",at="Property",st="Delay",ut="TimingFunction",ct="IterationCount",lt="PlayState",ft=9999,ht=I+st,pt=I+ot,dt=V+st,$t=V+ot,vt=e.$$minErr("ng"),mt=["$$rAF",function(t){function e(t){r=r.concat(t),n()}function n(){if(r.length){for(var e=r.shift(),o=0;o<e.length;o++)e[o]()
i||t(function(){i||n()})}}var r,i
return r=e.queue=[],e.waitUntilQuiet=function(e){i&&i(),i=t(function(){i=null,e(),n()})},e}],gt=["$interpolate",function(t){return{link:function(n,r,i){function o(t){t="on"===t||"true"===t,r.data(rt,t)}var a=i.ngAnimateChildren
e.isString(a)&&0===a.length?r.data(rt,!0):(o(t(a)(n)),i.$observe("ngAnimateChildren",o))}}}],yt="$$animateCss",bt=1e3,wt=3,xt=1.5,Ct={transitionDuration:$t,transitionDelay:dt,transitionProperty:V+at,animationDuration:pt,animationDelay:ht,animationIterationCount:I+ct},St={transitionDuration:$t,transitionDelay:dt,animationDuration:pt,animationDelay:ht},Et=["$animateProvider",function(t){var e=N(),n=N()
this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(t,r,i,u,c,l,f,m){function g(t,e){var n="$$ngAnimateParentKey",r=t.parentNode,i=r[n]||(r[n]=++F)
return i+"-"+t.getAttribute("class")+"-"+e}function b(n,r,i,o){var a=e.get(i)
return a||(a=T(t,n,o),"infinite"===a.animationIterationCount&&(a.animationIterationCount=1)),e.put(i,a),a}function w(i,o,s,u){var c
if(e.count(s)>0&&(c=n.get(s),!c)){var l=a(o,"-stagger")
r.addClass(i,l),c=T(t,i,u),c.animationDuration=Math.max(c.animationDuration,0),c.transitionDuration=Math.max(c.transitionDuration,0),r.removeClass(i,l),n.put(s,c)}return c||{}}function E(t){L.push(t),f.waitUntilQuiet(function(){e.flush(),n.flush()
for(var t=c(),r=0;r<L.length;r++)L[r](t)
L.length=0})}function O(t,e,n){var r=b(t,e,n,Ct),i=r.animationDelay,o=r.transitionDelay
return r.maxDelay=i&&o?Math.max(i,o):i||o,r.maxDuration=Math.max(r.animationDuration*r.animationIterationCount,r.transitionDuration),r}var N=h(r),F=0,L=[]
return function(t,n){function c(){h()}function f(){h(!0)}function h(e){if(!(G||K&&J)){G=!0,J=!1,B.$$skipPreparationClasses||r.removeClass(t,gt),r.removeClass(t,Et),C(W,!1),x(W,!1),U(ct,function(t){W.style[t[0]]=""}),N(t,B),d(t,B),Object.keys(z).length&&U(z,function(t,e){t?W.style.setProperty(e,t):W.style.removeProperty(e)}),B.onDone&&B.onDone(),pt&&pt.length&&t.off(pt.join(" "),F)
var n=t.data(yt)
n&&(u.cancel(n[0].timer),t.removeData(yt)),Y&&Y.complete(!e)}}function b(t){_t.blockTransition&&x(W,t),_t.blockKeyframeAnimation&&C(W,!!t)}function T(){return Y=new i({end:c,cancel:f}),E(q),h(),{$$willAnimate:!1,start:function(){return Y},end:c}}function F(t){t.stopPropagation()
var e=t.originalEvent||t,n=e.$manualTimeStamp||Date.now(),r=parseFloat(e.elapsedTime.toFixed(wt))
Math.max(n-st,0)>=rt&&r>=it&&(K=!0,h())}function L(){function e(){if(!G){if(b(!1),U(ct,function(t){var e=t[0],n=t[1]
W.style[e]=n}),N(t,B),r.addClass(t,Et),_t.recalculateTimingStyles){if(Ct=W.className+" "+gt,Tt=g(W,Ct),Rt=O(W,Ct,Tt),qt=Rt.maxDelay,nt=Math.max(qt,0),it=Rt.maxDuration,0===it)return void h()
_t.hasTransitions=Rt.transitionDuration>0,_t.hasAnimations=Rt.animationDuration>0}if(_t.applyAnimationDelay&&(qt="boolean"!=typeof B.delay&&M(B.delay)?parseFloat(B.delay):qt,nt=Math.max(qt,0),Rt.animationDelay=qt,Ft=A(qt,!0),ct.push(Ft),W.style[Ft[0]]=Ft[1]),rt=nt*bt,ot=it*bt,B.easing){var e,i=B.easing
_t.hasTransitions&&(e=V+ut,ct.push([e,i]),W.style[e]=i),_t.hasAnimations&&(e=I+ut,ct.push([e,i]),W.style[e]=i)}Rt.transitionDuration&&pt.push(P),Rt.animationDuration&&pt.push(R),st=Date.now()
var o=rt+xt*ot,a=st+o,s=t.data(yt)||[],c=!0
if(s.length){var l=s[0]
c=a>l.expectedEndTime,c?u.cancel(l.timer):s.push(h)}if(c){var f=u(n,o,!1)
s[0]={timer:f,expectedEndTime:a},s.push(h),t.data(yt,s)}pt.length&&t.on(pt.join(" "),F),B.to&&(B.cleanupStyles&&j(z,W,Object.keys(B.to)),v(t,B))}}function n(){var e=t.data(yt)
if(e){for(var n=1;n<e.length;n++)e[n]()
t.removeData(yt)}}if(!G){if(!W.parentNode)return void h()
var i=function(t){if(K)J&&t&&(J=!1,h())
else if(J=!t,Rt.animationDuration){var e=C(W,J)
J?ct.push(e):s(ct,e)}},o=Pt>0&&(Rt.transitionDuration&&0===Ot.transitionDuration||Rt.animationDuration&&0===Ot.animationDuration)&&Math.max(Ot.animationDelay,Ot.transitionDelay)
o?u(e,Math.floor(o*Pt*bt),!1):e(),et.resume=function(){i(!0)},et.pause=function(){i(!1)}}}var B=n||{}
B.$$prepared||(B=p(_(B)))
var z={},W=y(t)
if(!W||!W.parentNode||!m.enabled())return T()
var G,J,K,Y,et,nt,rt,it,ot,st,ct=[],lt=t.attr("class"),ht=o(B),pt=[]
if(0===B.duration||!l.animations&&!l.transitions)return T()
var dt=B.event&&H(B.event)?B.event.join(" "):B.event,$t=dt&&B.structural,vt="",mt=""
$t?vt=a(dt,X,!0):dt&&(vt=dt),B.addClass&&(mt+=a(B.addClass,Z)),B.removeClass&&(mt.length&&(mt+=" "),mt+=a(B.removeClass,Q)),B.applyClassesEarly&&mt.length&&N(t,B)
var gt=[vt,mt].join(" ").trim(),Ct=lt+" "+gt,Et=a(gt,tt),kt=ht.to&&Object.keys(ht.to).length>0,At=(B.keyframeStyle||"").length>0
if(!At&&!kt&&!gt)return T()
var Tt,Ot
if(B.stagger>0){var Mt=parseFloat(B.stagger)
Ot={transitionDelay:Mt,animationDelay:Mt,transitionDuration:0,animationDuration:0}}else Tt=g(W,Ct),Ot=w(W,gt,Tt,St)
B.$$skipPreparationClasses||r.addClass(t,gt)
var Dt
if(B.transitionStyle){var Nt=[V,B.transitionStyle]
S(W,Nt),ct.push(Nt)}if(B.duration>=0){Dt=W.style[V].length>0
var jt=D(B.duration,Dt)
S(W,jt),ct.push(jt)}if(B.keyframeStyle){var Vt=[I,B.keyframeStyle]
S(W,Vt),ct.push(Vt)}var Pt=Ot?B.staggerIndex>=0?B.staggerIndex:e.count(Tt):0,It=0===Pt
It&&!B.skipBlocking&&x(W,ft)
var Rt=O(W,Ct,Tt),qt=Rt.maxDelay
nt=Math.max(qt,0),it=Rt.maxDuration
var _t={}
if(_t.hasTransitions=Rt.transitionDuration>0,_t.hasAnimations=Rt.animationDuration>0,_t.hasTransitionAll=_t.hasTransitions&&"all"==Rt.transitionProperty,_t.applyTransitionDuration=kt&&(_t.hasTransitions&&!_t.hasTransitionAll||_t.hasAnimations&&!_t.hasTransitions),_t.applyAnimationDuration=B.duration&&_t.hasAnimations,_t.applyTransitionDelay=M(B.delay)&&(_t.applyTransitionDuration||_t.hasTransitions),_t.applyAnimationDelay=M(B.delay)&&_t.hasAnimations,_t.recalculateTimingStyles=mt.length>0,(_t.applyTransitionDuration||_t.applyAnimationDuration)&&(it=B.duration?parseFloat(B.duration):it,_t.applyTransitionDuration&&(_t.hasTransitions=!0,Rt.transitionDuration=it,Dt=W.style[V+at].length>0,ct.push(D(it,Dt))),_t.applyAnimationDuration&&(_t.hasAnimations=!0,Rt.animationDuration=it,ct.push(k(it)))),0===it&&!_t.recalculateTimingStyles)return T()
if(null!=B.delay){var Ft
"boolean"!=typeof B.delay&&(Ft=parseFloat(B.delay),nt=Math.max(Ft,0)),_t.applyTransitionDelay&&ct.push(A(Ft)),_t.applyAnimationDelay&&ct.push(A(Ft,!0))}return null==B.duration&&Rt.transitionDuration>0&&(_t.recalculateTimingStyles=_t.recalculateTimingStyles||It),rt=nt*bt,ot=it*bt,B.skipBlocking||(_t.blockTransition=Rt.transitionDuration>0,_t.blockKeyframeAnimation=Rt.animationDuration>0&&Ot.animationDelay>0&&0===Ot.animationDuration),B.from&&(B.cleanupStyles&&j(z,W,Object.keys(B.from)),$(t,B)),_t.blockTransition||_t.blockKeyframeAnimation?b(it):B.skipBlocking||x(W,!1),{$$willAnimate:!0,end:c,start:function(){if(!G)return et={end:c,cancel:f,resume:null,pause:null},Y=new i(et),E(L),Y}}}}]}],kt=["$$animationProvider",function(t){function e(t){return t.parentNode&&11===t.parentNode.nodeType}t.drivers.push("$$animateCssDriver")
var n="ng-animate-shim",r="ng-anchor",i="ng-anchor-out",o="ng-anchor-in"
this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(t,a,s,u,c,l,f){function p(t){return t.replace(/\bng-\S+\b/g,"")}function d(t,e){return B(t)&&(t=t.split(" ")),B(e)&&(e=e.split(" ")),t.filter(function(t){return e.indexOf(t)===-1}).join(" ")}function $(e,a,u){function c(t){var e={},n=y(t).getBoundingClientRect()
return U(["width","height","top","left"],function(t){var r=n[t]
switch(t){case"top":r+=g.scrollTop
break
case"left":r+=g.scrollLeft}e[t]=Math.floor(r)+"px"}),e}function l(){var e=t(v,{addClass:i,delay:!0,from:c(a)})
return e.$$willAnimate?e:null}function f(t){return t.attr("class")||""}function h(){var e=p(f(u)),n=d(e,m),r=d(m,e),a=t(v,{to:c(u),addClass:o+" "+n,removeClass:i+" "+r,delay:!0})
return a.$$willAnimate?a:null}function $(){v.remove(),a.removeClass(n),u.removeClass(n)}var v=L(y(a).cloneNode(!0)),m=p(f(v))
a.addClass(n),u.addClass(n),v.addClass(r),w.append(v)
var b,x=l()
if(!x&&(b=h(),!b))return $()
var C=x||b
return{start:function(){function t(){n&&n.end()}var e,n=C.start()
return n.done(function(){return n=null,!b&&(b=h())?(n=b.start(),n.done(function(){n=null,$(),e.complete()}),n):($(),void e.complete())}),e=new s({end:t,cancel:t})}}}function v(t,e,n,r){var i=m(t,q),o=m(e,q),a=[]
if(U(r,function(t){var e=t.out,r=t["in"],i=$(n,e,r)
i&&a.push(i)}),i||o||0!==a.length)return{start:function(){function t(){U(e,function(t){t.end()})}var e=[]
i&&e.push(i.start()),o&&e.push(o.start()),U(a,function(t){e.push(t.start())})
var n=new s({end:t,cancel:t})
return s.all(e,function(t){n.complete(t)}),n}}}function m(e){var n=e.element,r=e.options||{}
e.structural&&(r.event=e.event,r.structural=!0,r.applyClassesEarly=!0,"leave"===e.event&&(r.onDone=r.domOperation)),r.preparationClasses&&(r.event=E(r.event,r.preparationClasses))
var i=t(n,r)
return i.$$willAnimate?i:null}if(!c.animations&&!c.transitions)return q
var g=f[0].body,b=y(u),w=L(e(b)||g.contains(b)?b:g)
h(l)
return function(t){return t.from&&t.to?v(t.from,t.to,t.classes,t.anchors):m(t)}}]}],At=["$animateProvider",function(t){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(e,n,r){function i(n){n=H(n)?n:n.split(" ")
for(var r=[],i={},o=0;o<n.length;o++){var a=n[o],s=t.$$registeredAnimations[a]
s&&!i[a]&&(r.push(e.get(s)),i[a]=!0)}return r}var o=h(r)
return function(t,e,r,a){function s(){a.domOperation(),o(t,a)}function u(){h=!0,s(),d(t,a)}function c(t,e,r,i,o){var a
switch(r){case"animate":a=[e,i.from,i.to,o]
break
case"setClass":a=[e,m,g,o]
break
case"addClass":a=[e,m,o]
break
case"removeClass":a=[e,g,o]
break
default:a=[e,o]}a.push(i)
var s=t.apply(t,a)
if(s)if(J(s.start)&&(s=s.start()),s instanceof n)s.done(o)
else if(J(s))return s
return q}function l(t,e,r,i,o){var a=[]
return U(i,function(i){var s=i[o]
s&&a.push(function(){var i,o,a=!1,u=function(t){a||(a=!0,(o||q)(t),i.complete(!t))}
return i=new n({end:function(){u()},cancel:function(){u(!0)}}),o=c(s,t,e,r,function(t){var e=t===!1
u(e)}),i})}),a}function f(t,e,r,i,o){var a=l(t,e,r,i,o)
if(0===a.length){var s,u
"beforeSetClass"===o?(s=l(t,"removeClass",r,i,"beforeRemoveClass"),u=l(t,"addClass",r,i,"beforeAddClass")):"setClass"===o&&(s=l(t,"removeClass",r,i,"removeClass"),u=l(t,"addClass",r,i,"addClass")),s&&(a=a.concat(s)),u&&(a=a.concat(u))}if(0!==a.length)return function(t){var e=[]
return a.length&&U(a,function(t){e.push(t())}),e.length?n.all(e,t):t(),function(t){U(e,function(e){t?e.cancel():e.end()})}}}var h=!1
3===arguments.length&&z(r)&&(a=r,r=null),a=p(a),r||(r=t.attr("class")||"",a.addClass&&(r+=" "+a.addClass),a.removeClass&&(r+=" "+a.removeClass))
var $,v,m=a.addClass,g=a.removeClass,y=i(r)
if(y.length){var b,w
"leave"==e?(w="leave",b="afterLeave"):(w="before"+e.charAt(0).toUpperCase()+e.substr(1),b=e),"enter"!==e&&"move"!==e&&($=f(t,e,a,y,w)),v=f(t,e,a,y,b)}if($||v){var x
return{$$willAnimate:!0,end:function(){return x?x.end():(u(),x=new n,x.complete(!0)),x},start:function(){function t(t){u(t),x.complete(t)}function e(e){h||((r||q)(e),t(e))}if(x)return x
x=new n
var r,i=[]
return $&&i.push(function(t){r=$(t)}),i.length?i.push(function(t){s(),t(!0)}):s(),v&&i.push(function(t){r=v(t)}),x.setHost({end:function(){e()},cancel:function(){e(!0)}}),n.chain(i,t),x}}}}}]}],Tt=["$$animationProvider",function(t){t.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(t,e){function n(e){var n=e.element,r=e.event,i=e.options,o=e.classes
return t(n,r,o,i)}return function(t){if(t.from&&t.to){var r=n(t.from),i=n(t.to)
if(!r&&!i)return
return{start:function(){function t(){return function(){U(o,function(t){t.end()})}}function n(t){a.complete(t)}var o=[]
r&&o.push(r.start()),i&&o.push(i.start()),e.all(o,n)
var a=new e({end:t(),cancel:t()})
return a}}}return n(t)}}]}],Ot="data-ng-animate",Mt="$ngAnimatePin",Dt=["$animateProvider",function(t){function e(t){if(!t)return null
var e=t.split(l),n=Object.create(null)
return U(e,function(t){n[t]=!0}),n}function n(t,n){if(t&&n){var r=e(n)
return t.split(l).some(function(t){return r[t]})}}function i(t,e,n,r){return f[t].some(function(t){return t(e,n,r)})}function o(t,e){var n=(t.addClass||"").length>0,r=(t.removeClass||"").length>0
return e?n&&r:n||r}var a=1,s=2,l=" ",f=this.rules={skip:[],cancel:[],join:[]}
f.join.push(function(t,e,n){return!e.structural&&o(e)}),f.skip.push(function(t,e,n){return!e.structural&&!o(e)}),f.skip.push(function(t,e,n){return"leave"==n.event&&e.structural}),f.skip.push(function(t,e,n){return n.structural&&n.state===s&&!e.structural}),f.cancel.push(function(t,e,n){return n.structural&&e.structural}),f.cancel.push(function(t,e,n){return n.state===s&&e.structural}),f.cancel.push(function(t,e,r){if(r.structural)return!1
var i=e.addClass,o=e.removeClass,a=r.addClass,s=r.removeClass
return!(W(i)&&W(o)||W(a)&&W(s))&&(n(i,s)||n(o,a))}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(e,n,l,f,$,v,g,x,C,S){function E(){var t=!1
return function(e){t?e():n.$$postDigest(function(){t=!0,e()})}}function k(t,e){return m(t,e,{})}function A(t,e,n){var r=y(e),i=y(t),o=[],a=q[n]
return a&&U(a,function(t){X.call(t.node,r)?o.push(t.callback):"leave"===n&&X.call(t.node,i)&&o.push(t.callback)}),o}function T(t,r,c){function l(n,r,i,o){T(function(){var n=A(x,t,r)
n.length&&e(function(){U(n,function(e){e(t,i,o)})})}),n.progress(r,i,o)}function h(e){w(t,C),Q(t,C),d(t,C),C.domOperation(),S.complete(!e)}var $,x,C=_(c)
t=u(t),t&&($=y(t),x=t.parent()),C=p(C)
var S=new g,T=E()
if(H(C.addClass)&&(C.addClass=C.addClass.join(" ")),C.addClass&&!B(C.addClass)&&(C.addClass=null),H(C.removeClass)&&(C.removeClass=C.removeClass.join(" ")),C.removeClass&&!B(C.removeClass)&&(C.removeClass=null),C.from&&!z(C.from)&&(C.from=null),C.to&&!z(C.to)&&(C.to=null),!$)return h(),S
var D=[$.className,C.addClass,C.removeClass].join(" ")
if(!Z(D))return h(),S
var R=["enter","move","leave"].indexOf(r)>=0,q=!I||f[0].hidden||P.get($),F=!q&&V.get($)||{},L=!!F.state
if(q||L&&F.state==a||(q=!N(t,x,r)),q)return h(),S
R&&O(t)
var W={structural:R,element:t,event:r,addClass:C.addClass,removeClass:C.removeClass,close:h,options:C,runner:S}
if(L){var G=i("skip",t,W,F)
if(G)return F.state===s?(h(),S):(m(t,F,W),F.runner)
var J=i("cancel",t,W,F)
if(J)if(F.state===s)F.runner.end()
else{if(!F.structural)return m(t,F,W),F.runner
F.close()}else{var K=i("join",t,W,F)
if(K){if(F.state!==s)return b(t,R?r:null,C),r=W.event=F.event,C=m(t,F,W),F.runner
k(t,W)}}}else k(t,W)
var Y=W.structural
if(Y||(Y="animate"===W.event&&Object.keys(W.options.to||{}).length>0||o(W)),!Y)return h(),M(t),S
var X=(F.counter||0)+1
return W.counter=X,j(t,a,W),n.$$postDigest(function(){var e=V.get($),n=!e
e=e||{}
var i=t.parent()||[],a=i.length>0&&("animate"===e.event||e.structural||o(e))
if(n||e.counter!==X||!a)return n&&(Q(t,C),d(t,C)),(n||R&&e.event!==r)&&(C.domOperation(),S.end()),void(a||M(t))
r=!e.structural&&o(e,!0)?"setClass":e.event,j(t,s)
var u=v(t,r,e.options)
u.done(function(e){h(!e)
var n=V.get($)
n&&n.counter===X&&M(y(t)),l(S,r,"close",{})}),S.setHost(u),l(S,r,"start",{})}),S}function O(t){var e=y(t),n=e.querySelectorAll("["+Ot+"]")
U(n,function(t){var e=parseInt(t.getAttribute(Ot)),n=V.get(t)
if(n)switch(e){case s:n.runner.end()
case a:V.remove(t)}})}function M(t){var e=y(t)
e.removeAttribute(Ot),V.remove(e)}function D(t,e){return y(t)===y(e)}function N(t,e,n){var r,i=L(f[0].body),o=D(t,i)||"HTML"===t[0].nodeName,a=D(t,l),s=!1,u=P.get(y(t)),c=L.data(t[0],Mt)
for(c&&(e=c),e=y(e);e&&(a||(a=D(e,l)),e.nodeType===Y);){var h=V.get(e)||{}
if(!s){var p=P.get(e)
if(p===!0&&u!==!1){u=!0
break}p===!1&&(u=!1),s=h.structural}if(W(r)||r===!0){var d=L.data(e,rt)
G(d)&&(r=d)}if(s&&r===!1)break
if(o||(o=D(e,i)),o&&a)break
e=a||!(c=L.data(e,Mt))?e.parentNode:y(c)}var $=(!s||r)&&u!==!0
return $&&a&&o}function j(t,e,n){n=n||{},n.state=e
var r=y(t)
r.setAttribute(Ot,e)
var i=V.get(r),o=i?F(i,n):n
V.put(r,o)}var V=new $,P=new $,I=null,R=n.$watch(function(){return 0===x.totalPendingRequests},function(t){t&&(R(),n.$$postDigest(function(){n.$$postDigest(function(){null===I&&(I=!0)})}))}),q={},J=t.classNameFilter(),Z=J?function(t){return J.test(t)}:function(){return!0},Q=h(C),X=Node.prototype.contains||function(t){return this===t||!!(16&this.compareDocumentPosition(t))},tt={on:function(t,e,n){var r=c(e)
q[t]=q[t]||[],q[t].push({node:r,callback:n}),L(e).on("$destroy",function(){tt.off(t,e,n)})},off:function(t,e,n){function r(t,e,n){var r=c(e)
return t.filter(function(t){var e=t.node===r&&(!n||t.callback===n)
return!e})}var i=q[t]
i&&(q[t]=1===arguments.length?null:r(i,e,n))},pin:function(t,e){r(K(t),"element","not an element"),r(K(e),"parentElement","not an element"),t.data(Mt,e)},push:function(t,e,n,r){return n=n||{},n.domOperation=r,T(t,e,n)},enabled:function(t,e){var n=arguments.length
if(0===n)e=!!I
else{var r=K(t)
if(r){var i=y(t),o=P.get(i)
1===n?e=!o:P.put(i,!e)}else e=I=!!t}return e}}
return tt}]}],Nt=["$animateProvider",function(t){function e(t,e){t.data(s,e)}function n(t){t.removeData(s)}function r(t){return t.data(s)}var o="ng-animate-ref",a=this.drivers=[],s="$$animationRunner"
this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(t,s,u,c,l,f){function $(t){function e(t){if(t.processed)return t
t.processed=!0
var n=t.domNode,r=n.parentNode
o.put(n,t)
for(var a;r;){if(a=o.get(r)){a.processed||(a=e(a))
break}r=r.parentNode}return(a||i).children.push(t),t}function n(t){var e,n=[],r=[]
for(e=0;e<t.children.length;e++)r.push(t.children[e])
var i=r.length,o=0,a=[]
for(e=0;e<r.length;e++){var s=r[e]
i<=0&&(i=o,o=0,n.push(a),a=[]),a.push(s.fn),s.children.forEach(function(t){o++,r.push(t)}),i--}return a.length&&n.push(a),n}var r,i={children:[]},o=new l
for(r=0;r<t.length;r++){var a=t[r]
o.put(a.domNode,t[r]={domNode:a.domNode,fn:a.fn,children:[]})}for(r=0;r<t.length;r++)e(t[r])
return n(i)}var v=[],m=h(t)
return function(l,h,g){function b(t){var e="["+o+"]",n=t.hasAttribute(o)?[t]:t.querySelectorAll(e),r=[]
return U(n,function(t){var e=t.getAttribute(o)
e&&e.length&&r.push(t)}),r}function w(t){var e=[],n={}
U(t,function(t,r){var i=t.element,a=y(i),s=t.event,u=["enter","move"].indexOf(s)>=0,c=t.structural?b(a):[]
if(c.length){var l=u?"to":"from"
U(c,function(t){var e=t.getAttribute(o)
n[e]=n[e]||{},n[e][l]={animationID:r,element:L(t)}})}else e.push(t)})
var r={},i={}
return U(n,function(n,o){var a=n.from,s=n.to
if(!a||!s){var u=a?a.animationID:s.animationID,c=u.toString()
return void(r[c]||(r[c]=!0,e.push(t[u])))}var l=t[a.animationID],f=t[s.animationID],h=a.animationID.toString()
if(!i[h]){var p=i[h]={structural:!0,beforeStart:function(){l.beforeStart(),f.beforeStart()},close:function(){l.close(),f.close()},classes:x(l.classes,f.classes),from:l,to:f,anchors:[]}
p.classes.length?e.push(p):(e.push(l),e.push(f))}i[h].anchors.push({out:a.element,"in":s.element})}),e}function x(t,e){t=t.split(" "),e=e.split(" ")
for(var n=[],r=0;r<t.length;r++){var i=t[r]
if("ng-"!==i.substring(0,3))for(var o=0;o<e.length;o++)if(i===e[o]){n.push(i)
break}}return n.join(" ")}function C(t){for(var e=a.length-1;e>=0;e--){var n=a[e]
if(u.has(n)){var r=u.get(n),i=r(t)
if(i)return i}}}function S(){l.addClass(nt),D&&t.addClass(l,D),N&&(t.removeClass(l,N),N=null)}function E(t,e){function n(t){r(t).setHost(e)}t.from&&t.to?(n(t.from.element),n(t.to.element)):n(t.element)}function k(){var t=r(l)
!t||"leave"===h&&g.$$domOperationFired||t.end()}function A(e){l.off("$destroy",k),n(l),m(l,g),d(l,g),g.domOperation(),D&&t.removeClass(l,D),l.removeClass(nt),O.complete(!e)}g=p(g)
var T=["enter","move","leave"].indexOf(h)>=0,O=new c({end:function(){A()},cancel:function(){A(!0)}})
if(!a.length)return A(),O
e(l,O)
var M=i(l.attr("class"),i(g.addClass,g.removeClass)),D=g.tempClasses
D&&(M+=" "+D,g.tempClasses=null)
var N
return T&&(N="ng-"+h+et,t.addClass(l,N)),v.push({element:l,classes:M,event:h,structural:T,options:g,beforeStart:S,close:A}),l.on("$destroy",k),v.length>1?O:(s.$$postDigest(function(){var t=[]
U(v,function(e){r(e.element)?t.push(e):e.close()}),v.length=0
var e=w(t),n=[]
U(e,function(t){n.push({domNode:y(t.from?t.from.element:t.element),fn:function(){t.beforeStart()
var e,n=t.close,i=t.anchors?t.from.element||t.to.element:t.element
if(r(i)){var o=C(t)
o&&(e=o.start)}if(e){var a=e()
a.done(function(t){n(!t)}),E(t,a)}else n()}})}),f($(n))}),O)}}]}],jt=["$animate","$rootScope",function(t,e){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(e,n,r,i,o){var a,s
e.$watchCollection(r.ngAnimateSwap||r["for"],function(r){a&&t.leave(a),s&&(s.$destroy(),s=null),(r||0===r)&&(s=e.$new(),o(s,function(e){a=e,t.enter(e,null,n)}))})}}}]
e.module("ngAnimate",[]).directive("ngAnimateSwap",jt).directive("ngAnimateChildren",gt).factory("$$rAFScheduler",mt).provider("$$animateQueue",Dt).provider("$$animation",Nt).provider("$animateCss",Et).provider("$$animateCssDriver",kt).provider("$$animateJs",At).provider("$$animateJsDriver",Tt)}(window,window.angular),function(){"use strict"
function t(e){var r=e.parentNode
return!!r&&(9===r.nodeType||"none"!==n(e,"display")&&"hidden"!==n(e,"visibility")&&t(r))}function e(t,i,o,a,s,u,c,l){var f=t.parentNode,h=2,p=t.offsetParent
if(!r(t))return!1
if(9===f.nodeType)return!0
if("fixed"===n(t,"position"))return!0
if("0"===n(t,"opacity")||"none"===n(t,"display")||"hidden"===n(t,"visibility"))return!1
if(i&&f){void 0!==o&&void 0!==a&&void 0!==s&&void 0!==u&&void 0!==c&&void 0!==l||(o=t.offsetTop,u=t.offsetLeft,s=o+t.offsetHeight,a=u+t.offsetWidth,c=t.offsetWidth,l=t.offsetHeight)
var d=n(f,"overflow")
if("inline"!==n(f,"display")&&("hidden"===d||"scroll"===d||"auto"===d)){var $=0,v=0
if(p!==f&&($=f.offsetLeft,v=f.offsetTop),u+h>$+f.offsetWidth+f.scrollLeft||u+c-h<$+f.scrollLeft||o+h>v+f.offsetHeight+f.scrollTop||o+l-h<v+f.scrollTop)return!1}if(p===f)u+=f.offsetLeft-f.scrollLeft,o+=f.offsetTop-f.scrollTop
else if(p!==f.offsetParent)return u+=p.offsetLeft-p.scrollLeft,o+=p.offsetTop-p.scrollTop,e(p,!0,o,a,s,u,c,l)
return e(f,!0,o,a,s,u,c,l)}return!0}function n(t,e){return 9===t.nodeType?null:window.getComputedStyle?document.defaultView.getComputedStyle(t,null).getPropertyValue(e):t.currentStyle?t.currentStyle[e]:void 0}function r(t){for(;t=t.parentNode;)if(t===document)return!0
return!1}var i=angular.module
angular.module=function(t,e,n){return Array.isArray(e)&&(e=e.map(function(t){return angular.isObject(t)&&t.name?t.name:t})),i(t,e,n)}
window.document
!function(r,i,o){function a(t){return function(){var e=this[0]
return e&&e[t]&&e[t](),this}}var s=r.element.prototype,u=Array.prototype
s.every=function(t){return u.every.call(this,t)},s.some=function(t){return u.some.call(this,t)},s.map=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i]
return u.map.call(this,function(e){var i=r.element(e)
return i[t].apply(i,n)})},s.querySelector=function(t){var e=this[0]
return r.element(e?e.querySelector(t):null)},s.querySelectorAll=function(t){var e=this[0]
return r.element(e?e.querySelectorAll(t):null)},s.focus=a("focus"),s.selectInput=function(t,e){var n=this[0]
return n&&n.select&&n.focus&&(n.focus(),void 0===t?n.select():(void 0===e&&(e=this.val().length),void 0!==n.selectionStart?(n.selectionStart=t,n.selectionEnd=e):n.select())),this},s.isVisible=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
return this.length>0&&this.every(function(r){return"basic"===n?t(r):e(r,n)})},s.isInView=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=this[0]
if(!e)return!1
var n=e.getBoundingClientRect(),o=r.element(i)
return n.top>=t+this.scrollableParent().getFixedNodeOffsets()&&n.left>=t&&n.bottom<=o.offsetHeight()-t&&n.right<=o.offsetWidth()-t},s.getFixedNodeOffsets=function(){var t=0
if(this.length){var e=this[0]
if(e===i&&(e=o),e&&e.querySelectorAll){var n=!1
r.forEach(e.querySelectorAll(".sticky-header, .navbar-fixed-top"),function(e){e.classList.contains("sticky-header")?(t+=n?0:e.offsetHeight,n=!0):t+=e.offsetHeight})}}return t},s.getStyle=function(t){return this[0]?n(this[0],t):null},s.isHidden=function(){return"none"===this.getStyle("display")},s.offsetTop=function(){var t=this[0],e=0
if(t!==i)for(;t&&9!==t.nodeType;)e+=t.offsetTop,t=t.offsetParent
return e},s.offsetLeft=function(){var t=this[0],e=0
if(t!==i)for(;t&&9!==t.nodeType;)e+=t.offsetLeft,t=t.offsetParent
return e},s.offsetHeight=function(){var t=this[0]
return t===i?"innerHeight"in t?t.innerHeight:o.documentElement.offsetHeight:t?t.offsetHeight:0},s.offsetWidth=function(){var t=this[0]
return t===i?"innerWidth"in t?t.innerWidth:o.documentElement.offsetWidth:t?t.offsetWidth:0},s.offset=function(){var t={top:this.offsetTop(),left:this.offsetLeft(),width:this.offsetWidth(),height:this.offsetHeight()}
return t.right=t.left+t.width,t.bottom=t.top+t.height,t},s.scrollTop=function(t){var e=this[0],n=void 0===t
return e?(e===i?void 0===i.scrollY?n?t=o.documentElement.scrollTop:o.documentElement.scrollTop=t:n?t=i.scrollY:i.scrollTo(i.scrollX,t):n?t=e.scrollTop:e.scrollTop=t,t):0},s.isScrollable=function(){if(this[0]===i)return!0
var t=this.getStyle("overflow"),e=this.getStyle("overflow-y")
return"auto"===t||"scroll"===t||"auto"===e||"scroll"===e},s.scrollableParent=function(){for(var t=this.parent();t.length&&!t.isScrollable();)t=t.parent()
return t.length||(t=r.element(i)),t}}(angular,window,document),function(){if(window){var t=window.angular,e=void 0,n={find:function(n){return e||["[ng-app]","body","[ui-view]"].forEach(function(n){e=e||t.element(document.querySelector(n)).injector()}),e.get(n)},$apply:function(t){return n.$rootScope.$apply(t)},changeUrl:function(t){n.$apply(function(){return n.$location.url(t)})},go:function(){var t=arguments
n.$apply(function(){return n.$state.go.apply(n.$state,t)})},$httpGet:function(){return n.$http.get.apply(null,arguments).then(function(t){return console.log(t.data)},function(t){return console.error(t.data)})},$httpPost:function(){return n.$http.post.apply(null,arguments).then(function(t){return console.log(t.data)},function(t){return console.error(t.data)})},scopeFor:function(e){return t.element(e).scope()},directiveCtrl:function(e,n){return t.element(e).data("$"+n+"Controller")},watchers:function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[ng-app]",i=[]
return t.isString(e)&&(e=document.querySelector(e)),e=t.element(e),function n(e){t.forEach(["$scope","$isolateScope"],function(n){e.data()&&e.data().hasOwnProperty(n)&&t.forEach(e.data()[n].$$watchers,function(t){i.indexOf(t)<0&&i.push(t)})}),t.forEach(e.children(),function(e){n(t.element(e))})}(e),i.length},digestRate:function(){var t=void 0
if(n._dgs){var e=(Date.now()-n._dgs)/1e3,r=n._dgc
t="digests/sec: "+Math.round(100*r/e)/100+" | sec: "+Math.round(e)+" | digests: "+r+" | watchers: "+n.watchers()}else{n._dgs=Date.now(),n._dgc=0
var i=n.$rootScope.$watch(function(){n._dgc++})
n.digestRateStop=function(){n._dgs=0,i()},t="Started watcher, stop with Dev.digestRateStop()"}return t}},r={};["$rootScope","$location","$http","$q","$timeout","$state","DS","allModels"].forEach(function(t){r[t]={get:function(){return n.find(t)}}}),r.models=r.allModels,Object.defineProperties(n,r),window.Dev=n}}()}()

//# sourceMappingURL=shared-angular.min-acd15e84.js.map
