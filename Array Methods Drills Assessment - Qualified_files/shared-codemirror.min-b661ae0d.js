!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.CodeMirror=t()}(this,function(){"use strict"
function e(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function t(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function n(e,n){return t(e).appendChild(n)}function r(e,t,n,r){var i=document.createElement(e)
if(n&&(i.className=n),r&&(i.style.cssText=r),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function i(e,t,n,i){var o=r(e,t,n,i)
return o.setAttribute("role","presentation"),o}function o(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do if(11==t.nodeType&&(t=t.host),t==e)return!0
while(t=t.parentNode)}function a(){var e
try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement
return e}function s(t,n){var r=t.className
e(n).test(r)||(t.className+=(r?" ":"")+n)}function l(t,n){for(var r=t.split(" "),i=0;i<r.length;i++)r[i]&&!e(r[i]).test(n)&&(n+=" "+r[i])
return n}function c(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function u(e,t,n){t||(t={})
for(var r in e)!e.hasOwnProperty(r)||n===!1&&t.hasOwnProperty(r)||(t[r]=e[r])
return t}function d(e,t,n,r,i){null==t&&(t=e.search(/[^\s\u00a0]/),t==-1&&(t=e.length))
for(var o=r||0,a=i||0;;){var s=e.indexOf("\t",o)
if(s<0||s>=t)return a+(t-o)
a+=s-o,a+=n-a%n,o=s+1}}function f(e,t){for(var n=0;n<e.length;++n)if(e[n]==t)return n
return-1}function p(e,t,n){for(var r=0,i=0;;){var o=e.indexOf("\t",r)
o==-1&&(o=e.length)
var a=o-r
if(o==e.length||i+a>=t)return r+Math.min(a,t-i)
if(i+=o-r,i+=n-i%n,r=o+1,i>=t)return r}}function h(e){for(;Qa.length<=e;)Qa.push(m(Qa)+" ")
return Qa[e]}function m(e){return e[e.length-1]}function g(e,t){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r],r)
return n}function v(e,t,n){for(var r=0,i=n(t);r<e.length&&n(e[r])<=i;)r++
e.splice(r,0,t)}function y(){}function b(e,t){var n
return Object.create?n=Object.create(e):(y.prototype=e,n=new y),t&&u(t,n),n}function k(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Ya.test(e))}function x(e,t){return t?!!(t.source.indexOf("\\w")>-1&&k(e))||t.test(e):k(e)}function w(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}function _(e){return e.charCodeAt(0)>=768&&Ja.test(e)}function C(e,t,n){for(;(n<0?t>0:t<e.length)&&_(e.charAt(t));)t+=n
return t}function S(e,t,n){for(var r=t>n?-1:1;;){if(t==n)return t
var i=(t+n)/2,o=r<0?Math.ceil(i):Math.floor(i)
if(o==t)return e(o)?t:n
e(o)?n=o:t=o+r}}function M(e,t,n){var o=this
this.input=n,o.scrollbarFiller=r("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=r("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=i("div",null,"CodeMirror-code"),o.selectionDiv=r("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=r("div",null,"CodeMirror-cursors"),o.measure=r("div",null,"CodeMirror-measure"),o.lineMeasure=r("div",null,"CodeMirror-measure"),o.lineSpace=i("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none")
var a=i("div",[o.lineSpace],"CodeMirror-lines")
o.mover=r("div",[a],null,"position: relative"),o.sizer=r("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=r("div",null,null,"position: absolute; height: "+Ka+"px; width: 1px;"),o.gutters=r("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=r("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=r("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),wa&&_a<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),Ca||ya&&Na||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,n.init(o)}function L(e,t){if(t-=e.first,t<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var n=e;!n.lines;)for(var r=0;;++r){var i=n.children[r],o=i.chunkSize()
if(t<o){n=i
break}t-=o}return n.lines[t]}function T(e,t,n){var r=[],i=t.line
return e.iter(t.line,n.line+1,function(e){var o=e.text
i==n.line&&(o=o.slice(0,n.ch)),i==t.line&&(o=o.slice(t.ch)),r.push(o),++i}),r}function A(e,t,n){var r=[]
return e.iter(t,n,function(e){r.push(e.text)}),r}function E(e,t){var n=t-e.height
if(n)for(var r=e;r;r=r.parent)r.height+=n}function O(e){if(null==e.parent)return null
for(var t=e.parent,n=f(t.lines,e),r=t.parent;r;t=r,r=r.parent)for(var i=0;r.children[i]!=t;++i)n+=r.children[i].chunkSize()
return n+t.first}function z(e,t){var n=e.first
e:do{for(var r=0;r<e.children.length;++r){var i=e.children[r],o=i.height
if(t<o){e=i
continue e}t-=o,n+=i.chunkSize()}return n}while(!e.lines)
for(var a=0;a<e.lines.length;++a){var s=e.lines[a],l=s.height
if(t<l)break
t-=l}return n+a}function N(e,t){return t>=e.first&&t<e.first+e.size}function q(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function F(e,t,n){return void 0===n&&(n=null),this instanceof F?(this.line=e,this.ch=t,void(this.sticky=n)):new F(e,t,n)}function D(e,t){return e.line-t.line||e.ch-t.ch}function I(e,t){return e.sticky==t.sticky&&0==D(e,t)}function P(e){return F(e.line,e.ch)}function R(e,t){return D(e,t)<0?t:e}function j(e,t){return D(e,t)<0?e:t}function B(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function W(e,t){if(t.line<e.first)return F(e.first,0)
var n=e.first+e.size-1
return t.line>n?F(n,L(e,n).text.length):H(t,L(e,t.line).text.length)}function H(e,t){var n=e.ch
return null==n||n>t?F(e.line,t):n<0?F(e.line,0):e}function U(e,t){for(var n=[],r=0;r<t.length;r++)n[r]=W(e,t[r])
return n}function $(){es=!0}function K(){ts=!0}function V(e,t,n){this.marker=e,this.from=t,this.to=n}function G(e,t){if(e)for(var n=0;n<e.length;++n){var r=e[n]
if(r.marker==t)return r}}function Z(e,t){for(var n,r=0;r<e.length;++r)e[r]!=t&&(n||(n=[])).push(e[r])
return n}function X(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function Q(e,t,n){var r
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker,s=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)
if(s||o.from==t&&"bookmark"==a.type&&(!n||!o.marker.insertLeft)){var l=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(r||(r=[])).push(new V(a,o.from,l?null:o.to))}}return r}function Y(e,t,n){var r
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker,s=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)
if(s||o.from==t&&"bookmark"==a.type&&(!n||o.marker.insertLeft)){var l=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(r||(r=[])).push(new V(a,l?null:o.from-t,null==o.to?null:o.to-t))}}return r}function J(e,t){if(t.full)return null
var n=N(e,t.from.line)&&L(e,t.from.line).markedSpans,r=N(e,t.to.line)&&L(e,t.to.line).markedSpans
if(!n&&!r)return null
var i=t.from.ch,o=t.to.ch,a=0==D(t.from,t.to),s=Q(n,i,a),l=Y(r,o,a),c=1==t.text.length,u=m(t.text).length+(c?i:0)
if(s)for(var d=0;d<s.length;++d){var f=s[d]
if(null==f.to){var p=G(l,f.marker)
p?c&&(f.to=null==p.to?null:p.to+u):f.to=i}}if(l)for(var h=0;h<l.length;++h){var g=l[h]
if(null!=g.to&&(g.to+=u),null==g.from){var v=G(s,g.marker)
v||(g.from=u,c&&(s||(s=[])).push(g))}else g.from+=u,c&&(s||(s=[])).push(g)}s&&(s=ee(s)),l&&l!=s&&(l=ee(l))
var y=[s]
if(!c){var b,k=t.text.length-2
if(k>0&&s)for(var x=0;x<s.length;++x)null==s[x].to&&(b||(b=[])).push(new V(s[x].marker,null,null))
for(var w=0;w<k;++w)y.push(b)
y.push(l)}return y}function ee(e){for(var t=0;t<e.length;++t){var n=e[t]
null!=n.from&&n.from==n.to&&n.marker.clearWhenEmpty!==!1&&e.splice(t--,1)}return e.length?e:null}function te(e,t,n){var r=null
if(e.iter(t.line,n.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var n=e.markedSpans[t].marker
!n.readOnly||r&&f(r,n)!=-1||(r||(r=[])).push(n)}}),!r)return null
for(var i=[{from:t,to:n}],o=0;o<r.length;++o)for(var a=r[o],s=a.find(0),l=0;l<i.length;++l){var c=i[l]
if(!(D(c.to,s.from)<0||D(c.from,s.to)>0)){var u=[l,1],d=D(c.from,s.from),p=D(c.to,s.to);(d<0||!a.inclusiveLeft&&!d)&&u.push({from:c.from,to:s.from}),(p>0||!a.inclusiveRight&&!p)&&u.push({from:s.to,to:c.to}),i.splice.apply(i,u),l+=u.length-3}}return i}function ne(e){var t=e.markedSpans
if(t){for(var n=0;n<t.length;++n)t[n].marker.detachLine(e)
e.markedSpans=null}}function re(e,t){if(t){for(var n=0;n<t.length;++n)t[n].marker.attachLine(e)
e.markedSpans=t}}function ie(e){return e.inclusiveLeft?-1:0}function oe(e){return e.inclusiveRight?1:0}function ae(e,t){var n=e.lines.length-t.lines.length
if(0!=n)return n
var r=e.find(),i=t.find(),o=D(r.from,i.from)||ie(e)-ie(t)
if(o)return-o
var a=D(r.to,i.to)||oe(e)-oe(t)
return a?a:t.id-e.id}function se(e,t){var n,r=ts&&e.markedSpans
if(r)for(var i=void 0,o=0;o<r.length;++o)i=r[o],i.marker.collapsed&&null==(t?i.from:i.to)&&(!n||ae(n,i.marker)<0)&&(n=i.marker)
return n}function le(e){return se(e,!0)}function ce(e){return se(e,!1)}function ue(e,t){var n,r=ts&&e.markedSpans
if(r)for(var i=0;i<r.length;++i){var o=r[i]
o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!n||ae(n,o.marker)<0)&&(n=o.marker)}return n}function de(e,t,n,r,i){var o=L(e,t),a=ts&&o.markedSpans
if(a)for(var s=0;s<a.length;++s){var l=a[s]
if(l.marker.collapsed){var c=l.marker.find(0),u=D(c.from,n)||ie(l.marker)-ie(i),d=D(c.to,r)||oe(l.marker)-oe(i)
if(!(u>=0&&d<=0||u<=0&&d>=0)&&(u<=0&&(l.marker.inclusiveRight&&i.inclusiveLeft?D(c.to,n)>=0:D(c.to,n)>0)||u>=0&&(l.marker.inclusiveRight&&i.inclusiveLeft?D(c.from,r)<=0:D(c.from,r)<0)))return!0}}}function fe(e){for(var t;t=le(e);)e=t.find(-1,!0).line
return e}function pe(e){for(var t;t=ce(e);)e=t.find(1,!0).line
return e}function he(e){for(var t,n;t=ce(e);)e=t.find(1,!0).line,(n||(n=[])).push(e)
return n}function me(e,t){var n=L(e,t),r=fe(n)
return n==r?t:O(r)}function ge(e,t){if(t>e.lastLine())return t
var n,r=L(e,t)
if(!ve(e,r))return t
for(;n=ce(r);)r=n.find(1,!0).line
return O(r)+1}function ve(e,t){var n=ts&&t.markedSpans
if(n)for(var r=void 0,i=0;i<n.length;++i)if(r=n[i],r.marker.collapsed){if(null==r.from)return!0
if(!r.marker.widgetNode&&0==r.from&&r.marker.inclusiveLeft&&ye(e,t,r))return!0}}function ye(e,t,n){if(null==n.to){var r=n.marker.find(1,!0)
return ye(e,r.line,G(r.line.markedSpans,n.marker))}if(n.marker.inclusiveRight&&n.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if(i=t.markedSpans[o],i.marker.collapsed&&!i.marker.widgetNode&&i.from==n.to&&(null==i.to||i.to!=n.from)&&(i.marker.inclusiveLeft||n.marker.inclusiveRight)&&ye(e,t,i))return!0}function be(e){e=fe(e)
for(var t=0,n=e.parent,r=0;r<n.lines.length;++r){var i=n.lines[r]
if(i==e)break
t+=i.height}for(var o=n.parent;o;n=o,o=n.parent)for(var a=0;a<o.children.length;++a){var s=o.children[a]
if(s==n)break
t+=s.height}return t}function ke(e){if(0==e.height)return 0
for(var t,n=e.text.length,r=e;t=le(r);){var i=t.find(0,!0)
r=i.from.line,n+=i.from.ch-i.to.ch}for(r=e;t=ce(r);){var o=t.find(0,!0)
n-=r.text.length-o.from.ch,r=o.to.line,n+=r.text.length-o.to.ch}return n}function xe(e){var t=e.display,n=e.doc
t.maxLine=L(n,n.first),t.maxLineLength=ke(t.maxLine),t.maxLineChanged=!0,n.iter(function(e){var n=ke(e)
n>t.maxLineLength&&(t.maxLineLength=n,t.maxLine=e)})}function we(e,t,n,r){if(!e)return r(t,n,"ltr",0)
for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<n&&a.to>t||t==n&&a.to==t)&&(r(Math.max(a.from,t),Math.min(a.to,n),1==a.level?"rtl":"ltr",o),i=!0)}i||r(t,n,"ltr")}function _e(e,t,n){var r
ns=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==n?r=i:ns=i),o.from==t&&(o.from!=o.to&&"before"!=n?r=i:ns=i)}return null!=r?r:ns}function Ce(e,t){var n=e.order
return null==n&&(n=e.order=rs(e.text,t)),n}function Se(e,t){return e._handlers&&e._handlers[t]||is}function Me(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n,!1)
else if(e.detachEvent)e.detachEvent("on"+t,n)
else{var r=e._handlers,i=r&&r[t]
if(i){var o=f(i,n)
o>-1&&(r[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function Le(e,t){var n=Se(e,t)
if(n.length)for(var r=Array.prototype.slice.call(arguments,2),i=0;i<n.length;++i)n[i].apply(null,r)}function Te(e,t,n){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Le(e,n||t.type,e,t),qe(t)||t.codemirrorIgnore}function Ae(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var n=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),r=0;r<t.length;++r)f(n,t[r])==-1&&n.push(t[r])}function Ee(e,t){return Se(e,t).length>0}function Oe(e){e.prototype.on=function(e,t){os(this,e,t)},e.prototype.off=function(e,t){Me(this,e,t)}}function ze(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Ne(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function qe(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Fe(e){ze(e),Ne(e)}function De(e){return e.target||e.srcElement}function Ie(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),qa&&e.ctrlKey&&1==t&&(t=3),t}function Pe(e){if(null==Ua){var t=r("span","​")
n(e,r("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Ua=t.offsetWidth<=1&&t.offsetHeight>2&&!(wa&&_a<8))}var i=Ua?r("span","​"):r("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return i.setAttribute("cm-text",""),i}function Re(e){if(null!=$a)return $a
var r=n(e,document.createTextNode("AخA")),i=Pa(r,0,1).getBoundingClientRect(),o=Pa(r,1,2).getBoundingClientRect()
return t(e),!(!i||i.left==i.right)&&($a=o.right-i.right<3)}function je(e){if(null!=us)return us
var t=n(e,r("span","x")),i=t.getBoundingClientRect(),o=Pa(t,0,1).getBoundingClientRect()
return us=Math.abs(i.left-o.left)>1}function Be(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),ds[e]=t}function We(e,t){fs[e]=t}function He(e){if("string"==typeof e&&fs.hasOwnProperty(e))e=fs[e]
else if(e&&"string"==typeof e.name&&fs.hasOwnProperty(e.name)){var t=fs[e.name]
"string"==typeof t&&(t={name:t}),e=b(t,e),e.name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return He("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return He("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Ue(e,t){t=He(t)
var n=ds[t.name]
if(!n)return Ue(e,"text/plain")
var r=n(e,t)
if(ps.hasOwnProperty(t.name)){var i=ps[t.name]
for(var o in i)i.hasOwnProperty(o)&&(r.hasOwnProperty(o)&&(r["_"+o]=r[o]),r[o]=i[o])}if(r.name=t.name,t.helperType&&(r.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)r[a]=t.modeProps[a]
return r}function $e(e,t){var n=ps.hasOwnProperty(e)?ps[e]:ps[e]={}
u(t,n)}function Ke(e,t){if(t===!0)return t
if(e.copyState)return e.copyState(t)
var n={}
for(var r in t){var i=t[r]
i instanceof Array&&(i=i.concat([])),n[r]=i}return n}function Ve(e,t){for(var n;e.innerMode&&(n=e.innerMode(t),n&&n.mode!=e);)t=n.state,e=n.mode
return n||{mode:e,state:t}}function Ge(e,t,n){return!e.startState||e.startState(t,n)}function Ze(e,t,n,r){var i=[e.state.modeGen],o={}
rt(e,t.text,e.doc.mode,n,function(e,t){return i.push(e,t)},o,r)
for(var a=n.state,s=function(r){n.baseTokens=i
var s=e.state.overlays[r],l=1,c=0
n.state=!0,rt(e,t.text,s.mode,n,function(e,t){for(var n=l;c<e;){var r=i[l]
r>e&&i.splice(l,1,e,i[l+1],r),l+=2,c=Math.min(e,r)}if(t)if(s.opaque)i.splice(n,l-n,e,"overlay "+t),l=n+2
else for(;n<l;n+=2){var o=i[n+1]
i[n+1]=(o?o+" ":"")+"overlay "+t}},o),n.state=a,n.baseTokens=null,n.baseTokenPos=1},l=0;l<e.state.overlays.length;++l)s(l)
return{styles:i,classes:o.bgClass||o.textClass?o:null}}function Xe(e,t,n){if(!t.styles||t.styles[0]!=e.state.modeGen){var r=Qe(e,O(t)),i=t.text.length>e.options.maxHighlightLength&&Ke(e.doc.mode,r.state),o=Ze(e,t,r)
i&&(r.state=i),t.stateAfter=r.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),n===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function Qe(e,t,n){var r=e.doc,i=e.display
if(!r.mode.startState)return new gs(r,(!0),t)
var o=it(e,t,n),a=o>r.first&&L(r,o-1).stateAfter,s=a?gs.fromSaved(r,a,o):new gs(r,Ge(r.mode),o)
return r.iter(o,t,function(n){Ye(e,n.text,s)
var r=s.line
n.stateAfter=r==t-1||r%5==0||r>=i.viewFrom&&r<i.viewTo?s.save():null,s.nextLine()}),n&&(r.modeFrontier=s.line),s}function Ye(e,t,n,r){var i=e.doc.mode,o=new hs(t,e.options.tabSize,n)
for(o.start=o.pos=r||0,""==t&&Je(i,n.state);!o.eol();)et(i,o,n.state),o.start=o.pos}function Je(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var n=Ve(e,t)
return n.mode.blankLine?n.mode.blankLine(n.state):void 0}}function et(e,t,n,r){for(var i=0;i<10;i++){r&&(r[0]=Ve(e,n).mode)
var o=e.token(t,n)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}function tt(e,t,n,r){var i,o=e.doc,a=o.mode
t=W(o,t)
var s,l=L(o,t.line),c=Qe(e,t.line,n),u=new hs(l.text,e.options.tabSize,c)
for(r&&(s=[]);(r||u.pos<t.ch)&&!u.eol();)u.start=u.pos,i=et(a,u,c.state),r&&s.push(new vs(u,i,Ke(o.mode,c.state)))
return r?s:new vs(u,i,c.state)}function nt(e,t){if(e)for(;;){var n=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!n)break
e=e.slice(0,n.index)+e.slice(n.index+n[0].length)
var r=n[1]?"bgClass":"textClass"
null==t[r]?t[r]=n[2]:new RegExp("(?:^|s)"+n[2]+"(?:$|s)").test(t[r])||(t[r]+=" "+n[2])}return e}function rt(e,t,n,r,i,o,a){var s=n.flattenSpans
null==s&&(s=e.options.flattenSpans)
var l,c=0,u=null,d=new hs(t,e.options.tabSize,r),f=e.options.addModeClass&&[null]
for(""==t&&nt(Je(n,r.state),o);!d.eol();){if(d.pos>e.options.maxHighlightLength?(s=!1,a&&Ye(e,t,r,d.pos),d.pos=t.length,l=null):l=nt(et(n,d,r.state,f),o),f){var p=f[0].name
p&&(l="m-"+(l?p+" "+l:p))}if(!s||u!=l){for(;c<d.start;)c=Math.min(d.start,c+5e3),i(c,u)
u=l}d.start=d.pos}for(;c<d.pos;){var h=Math.min(d.pos,c+5e3)
i(h,u),c=h}}function it(e,t,n){for(var r,i,o=e.doc,a=n?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>a;--s){if(s<=o.first)return o.first
var l=L(o,s-1),c=l.stateAfter
if(c&&(!n||s+(c instanceof ms?c.lookAhead:0)<=o.modeFrontier))return s
var u=d(l.text,null,e.options.tabSize);(null==i||r>u)&&(i=s-1,r=u)}return i}function ot(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var n=e.first,r=t-1;r>n;r--){var i=L(e,r).stateAfter
if(i&&(!(i instanceof ms)||r+i.lookAhead<t)){n=r+1
break}}e.highlightFrontier=Math.min(e.highlightFrontier,n)}}function at(e,t,n,r){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),ne(e),re(e,n)
var i=r?r(e):1
i!=e.height&&E(e,i)}function st(e){e.parent=null,ne(e)}function lt(e,t){if(!e||/^\s*$/.test(e))return null
var n=t.addModeClass?xs:ks
return n[e]||(n[e]=e.replace(/\S+/g,"cm-$&"))}function ct(e,t){var n=i("span",null,null,Ca?"padding-right: .1px":null),r={pre:i("pre",[n],"CodeMirror-line"),content:n,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")}
t.measure={}
for(var o=0;o<=(t.rest?t.rest.length:0);o++){var a=o?t.rest[o-1]:t.line,s=void 0
r.pos=0,r.addToken=dt,Re(e.display.measure)&&(s=Ce(a,e.doc.direction))&&(r.addToken=pt(r.addToken,s)),r.map=[]
var c=t!=e.display.externalMeasured&&O(a)
mt(a,r,Xe(e,a,c)),a.styleClasses&&(a.styleClasses.bgClass&&(r.bgClass=l(a.styleClasses.bgClass,r.bgClass||"")),a.styleClasses.textClass&&(r.textClass=l(a.styleClasses.textClass,r.textClass||""))),0==r.map.length&&r.map.push(0,0,r.content.appendChild(Pe(e.display.measure))),0==o?(t.measure.map=r.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(r.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(Ca){var u=r.content.lastChild;(/\bcm-tab\b/.test(u.className)||u.querySelector&&u.querySelector(".cm-tab"))&&(r.content.className="cm-tab-wrap-hack")}return Le(e,"renderLine",e,t.line,r.pre),r.pre.className&&(r.textClass=l(r.pre.className,r.textClass||"")),r}function ut(e){var t=r("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function dt(e,t,n,i,o,a,s){if(t){var l,c=e.splitSpaces?ft(t,e.trailingSpace):t,u=e.cm.state.specialChars,d=!1
if(u.test(t)){l=document.createDocumentFragment()
for(var f=0;;){u.lastIndex=f
var p=u.exec(t),m=p?p.index-f:t.length-f
if(m){var g=document.createTextNode(c.slice(f,f+m))
wa&&_a<9?l.appendChild(r("span",[g])):l.appendChild(g),e.map.push(e.pos,e.pos+m,g),e.col+=m,e.pos+=m}if(!p)break
f+=m+1
var v=void 0
if("\t"==p[0]){var y=e.cm.options.tabSize,b=y-e.col%y
v=l.appendChild(r("span",h(b),"cm-tab")),v.setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=b}else"\r"==p[0]||"\n"==p[0]?(v=l.appendChild(r("span","\r"==p[0]?"␍":"␤","cm-invalidchar")),v.setAttribute("cm-text",p[0]),e.col+=1):(v=e.cm.options.specialCharPlaceholder(p[0]),v.setAttribute("cm-text",p[0]),wa&&_a<9?l.appendChild(r("span",[v])):l.appendChild(v),e.col+=1)
e.map.push(e.pos,e.pos+1,v),e.pos++}}else e.col+=t.length,l=document.createTextNode(c),e.map.push(e.pos,e.pos+t.length,l),wa&&_a<9&&(d=!0),e.pos+=t.length
if(e.trailingSpace=32==c.charCodeAt(t.length-1),n||i||o||d||a){var k=n||""
i&&(k+=i),o&&(k+=o)
var x=r("span",[l],k,a)
if(s)for(var w in s)s.hasOwnProperty(w)&&"style"!=w&&"class"!=w&&x.setAttribute(w,s[w])
return e.content.appendChild(x)}e.content.appendChild(l)}}function ft(e,t){if(e.length>1&&!/  /.test(e))return e
for(var n=t,r="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!n||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),r+=o,n=" "==o}return r}function pt(e,t){return function(n,r,i,o,a,s,l){i=i?i+" cm-force-border":"cm-force-border"
for(var c=n.pos,u=c+r.length;;){for(var d=void 0,f=0;f<t.length&&(d=t[f],!(d.to>c&&d.from<=c));f++);if(d.to>=u)return e(n,r,i,o,a,s,l)
e(n,r.slice(0,d.to-c),i,o,null,s,l),o=null,r=r.slice(d.to-c),c=d.to}}}function ht(e,t,n,r){var i=!r&&n.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!r&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",n.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function mt(e,t,n){var r=e.markedSpans,i=e.text,o=0
if(r)for(var a,s,l,c,u,d,f,p=i.length,h=0,m=1,g="",v=0;;){if(v==h){l=c=u=s="",f=null,d=null,v=1/0
for(var y=[],b=void 0,k=0;k<r.length;++k){var x=r[k],w=x.marker
if("bookmark"==w.type&&x.from==h&&w.widgetNode)y.push(w)
else if(x.from<=h&&(null==x.to||x.to>h||w.collapsed&&x.to==h&&x.from==h)){if(null!=x.to&&x.to!=h&&v>x.to&&(v=x.to,c=""),w.className&&(l+=" "+w.className),w.css&&(s=(s?s+";":"")+w.css),w.startStyle&&x.from==h&&(u+=" "+w.startStyle),w.endStyle&&x.to==v&&(b||(b=[])).push(w.endStyle,x.to),w.title&&((f||(f={})).title=w.title),w.attributes)for(var _ in w.attributes)(f||(f={}))[_]=w.attributes[_]
w.collapsed&&(!d||ae(d.marker,w)<0)&&(d=x)}else x.from>h&&v>x.from&&(v=x.from)}if(b)for(var C=0;C<b.length;C+=2)b[C+1]==v&&(c+=" "+b[C])
if(!d||d.from==h)for(var S=0;S<y.length;++S)ht(t,0,y[S])
if(d&&(d.from||0)==h){if(ht(t,(null==d.to?p+1:d.to)-h,d.marker,null==d.from),null==d.to)return
d.to==h&&(d=!1)}}if(h>=p)break
for(var M=Math.min(p,v);;){if(g){var L=h+g.length
if(!d){var T=L>M?g.slice(0,M-h):g
t.addToken(t,T,a?a+l:l,u,h+T.length==v?c:"",s,f)}if(L>=M){g=g.slice(M-h),h=M
break}h=L,u=""}g=i.slice(o,o=n[m++]),a=lt(n[m++],t.cm.options)}}else for(var A=1;A<n.length;A+=2)t.addToken(t,i.slice(o,o=n[A]),lt(n[A+1],t.cm.options))}function gt(e,t,n){this.line=t,this.rest=he(t),this.size=this.rest?O(m(this.rest))-n+1:1,this.node=this.text=null,this.hidden=ve(e,t)}function vt(e,t,n){for(var r,i=[],o=t;o<n;o=r){var a=new gt(e.doc,L(e.doc,o),o)
r=o+a.size,i.push(a)}return i}function yt(e){ws?ws.ops.push(e):e.ownsGroup=ws={ops:[e],delayedCallbacks:[]}}function bt(e){var t=e.delayedCallbacks,n=0
do{for(;n<t.length;n++)t[n].call(null)
for(var r=0;r<e.ops.length;r++){var i=e.ops[r]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(n<t.length)}function kt(e,t){var n=e.ownsGroup
if(n)try{bt(n)}finally{ws=null,t(n)}}function xt(e,t){var n=Se(e,t)
if(n.length){var r,i=Array.prototype.slice.call(arguments,2)
ws?r=ws.delayedCallbacks:_s?r=_s:(r=_s=[],setTimeout(wt,0))
for(var o=function(e){r.push(function(){return n[e].apply(null,i)})},a=0;a<n.length;++a)o(a)}}function wt(){var e=_s
_s=null
for(var t=0;t<e.length;++t)e[t]()}function _t(e,t,n,r){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?Lt(e,t):"gutter"==o?At(e,t,n,r):"class"==o?Tt(e,t):"widget"==o&&Et(e,t,r)}t.changes=null}function Ct(e){return e.node==e.text&&(e.node=r("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),wa&&_a<8&&(e.node.style.zIndex=2)),e.node}function St(e,t){var n=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass
if(n&&(n+=" CodeMirror-linebackground"),t.background)n?t.background.className=n:(t.background.parentNode.removeChild(t.background),t.background=null)
else if(n){var i=Ct(t)
t.background=i.insertBefore(r("div",null,n),i.firstChild),e.display.input.setUneditable(t.background)}}function Mt(e,t){var n=e.display.externalMeasured
return n&&n.line==t.line?(e.display.externalMeasured=null,t.measure=n.measure,n.built):ct(e,t)}function Lt(e,t){var n=t.text.className,r=Mt(e,t)
t.text==t.node&&(t.node=r.pre),t.text.parentNode.replaceChild(r.pre,t.text),t.text=r.pre,r.bgClass!=t.bgClass||r.textClass!=t.textClass?(t.bgClass=r.bgClass,t.textClass=r.textClass,Tt(e,t)):n&&(t.text.className=n)}function Tt(e,t){St(e,t),t.line.wrapClass?Ct(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="")
var n=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass
t.text.className=n||""}function At(e,t,n,i){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var o=Ct(t)
t.gutterBackground=r("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),o.insertBefore(t.gutterBackground,t.text)}var a=t.line.gutterMarkers
if(e.options.lineNumbers||a){var s=Ct(t),l=t.gutter=r("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(l),s.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=" "+t.line.gutterClass),!e.options.lineNumbers||a&&a["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(r("div",q(e.options,n),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),a)for(var c=0;c<e.options.gutters.length;++c){var u=e.options.gutters[c],d=a.hasOwnProperty(u)&&a[u]
d&&l.appendChild(r("div",[d],"CodeMirror-gutter-elt","left: "+i.gutterLeft[u]+"px; width: "+i.gutterWidth[u]+"px"))}}}function Et(e,t,n){t.alignable&&(t.alignable=null)
for(var r=t.node.firstChild,i=void 0;r;r=i)i=r.nextSibling,"CodeMirror-linewidget"==r.className&&t.node.removeChild(r)
zt(e,t,n)}function Ot(e,t,n,r){var i=Mt(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),Tt(e,t),At(e,t,n,r),zt(e,t,r),t.node}function zt(e,t,n){if(Nt(e,t.line,t,n,!0),t.rest)for(var r=0;r<t.rest.length;r++)Nt(e,t.rest[r],t,n,!1)}function Nt(e,t,n,i,o){if(t.widgets)for(var a=Ct(n),s=0,l=t.widgets;s<l.length;++s){var c=l[s],u=r("div",[c.node],"CodeMirror-linewidget")
c.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),qt(c,u,n,i),e.display.input.setUneditable(u),o&&c.above?a.insertBefore(u,n.gutter||n.text):a.appendChild(u),xt(c,"redraw")}}function qt(e,t,n,r){if(e.noHScroll){(n.alignable||(n.alignable=[])).push(t)
var i=r.wrapperWidth
t.style.left=r.fixedPos+"px",e.coverGutter||(i-=r.gutterTotalWidth,t.style.paddingLeft=r.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-r.gutterTotalWidth+"px"))}function Ft(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!o(document.body,e.node)){var i="position: relative;"
e.coverGutter&&(i+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(i+="width: "+t.display.wrapper.clientWidth+"px;"),n(t.display.measure,r("div",[e.node],null,i))}return e.height=e.node.parentNode.offsetHeight}function Dt(e,t){for(var n=De(t);n!=e.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==e.sizer&&n!=e.mover)return!0}function It(e){return e.lineSpace.offsetTop}function Pt(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Rt(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=n(e.measure,r("pre","x")),i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,o={left:parseInt(i.paddingLeft),right:parseInt(i.paddingRight)}
return isNaN(o.left)||isNaN(o.right)||(e.cachedPaddingH=o),o}function jt(e){return Ka-e.display.nativeBarWidth}function Bt(e){return e.display.scroller.clientWidth-jt(e)-e.display.barWidth}function Wt(e){return e.display.scroller.clientHeight-jt(e)-e.display.barHeight}function Ht(e,t,n){var r=e.options.lineWrapping,i=r&&Bt(e)
if(!t.measure.heights||r&&t.measure.width!=i){var o=t.measure.heights=[]
if(r){t.measure.width=i
for(var a=t.text.firstChild.getClientRects(),s=0;s<a.length-1;s++){var l=a[s],c=a[s+1]
Math.abs(l.bottom-c.bottom)>2&&o.push((l.bottom+c.top)/2-n.top)}}o.push(n.bottom-n.top)}}function Ut(e,t,n){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var r=0;r<e.rest.length;r++)if(e.rest[r]==t)return{map:e.measure.maps[r],cache:e.measure.caches[r]}
for(var i=0;i<e.rest.length;i++)if(O(e.rest[i])>n)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function $t(e,t){t=fe(t)
var r=O(t),i=e.display.externalMeasured=new gt(e.doc,t,r)
i.lineN=r
var o=i.built=ct(e,i)
return i.text=o.pre,n(e.display.lineMeasure,o.pre),i}function Kt(e,t,n,r){return Zt(e,Gt(e,t),n,r)}function Vt(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Ln(e,t)]
var n=e.display.externalMeasured
return n&&t>=n.lineN&&t<n.lineN+n.size?n:void 0}function Gt(e,t){var n=O(t),r=Vt(e,n)
r&&!r.text?r=null:r&&r.changes&&(_t(e,r,n,wn(e)),e.curOp.forceUpdate=!0),r||(r=$t(e,t))
var i=Ut(r,t,n)
return{line:t,view:r,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Zt(e,t,n,r,i){t.before&&(n=-1)
var o,a=n+(r||"")
return t.cache.hasOwnProperty(a)?o=t.cache[a]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(Ht(e,t.view,t.rect),t.hasHeights=!0),o=Yt(e,t,n,r),o.bogus||(t.cache[a]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function Xt(e,t,n){for(var r,i,o,a,s,l,c=0;c<e.length;c+=3)if(s=e[c],l=e[c+1],t<s?(i=0,o=1,a="left"):t<l?(i=t-s,o=i+1):(c==e.length-3||t==l&&e[c+3]>t)&&(o=l-s,i=o-1,t>=l&&(a="right")),null!=i){if(r=e[c+2],s==l&&n==(r.insertLeft?"left":"right")&&(a=n),"left"==n&&0==i)for(;c&&e[c-2]==e[c-3]&&e[c-1].insertLeft;)r=e[(c-=3)+2],a="left"
if("right"==n&&i==l-s)for(;c<e.length-3&&e[c+3]==e[c+4]&&!e[c+5].insertLeft;)r=e[(c+=3)+2],a="right"
break}return{node:r,start:i,end:o,collapse:a,coverStart:s,coverEnd:l}}function Qt(e,t){var n=Cs
if("left"==t)for(var r=0;r<e.length&&(n=e[r]).left==n.right;r++);else for(var i=e.length-1;i>=0&&(n=e[i]).left==n.right;i--);return n}function Yt(e,t,n,r){var i,o=Xt(t.map,n,r),a=o.node,s=o.start,l=o.end,c=o.collapse
if(3==a.nodeType){for(var u=0;u<4;u++){for(;s&&_(t.line.text.charAt(o.coverStart+s));)--s
for(;o.coverStart+l<o.coverEnd&&_(t.line.text.charAt(o.coverStart+l));)++l
if(i=wa&&_a<9&&0==s&&l==o.coverEnd-o.coverStart?a.parentNode.getBoundingClientRect():Qt(Pa(a,s,l).getClientRects(),r),i.left||i.right||0==s)break
l=s,s-=1,c="right"}wa&&_a<11&&(i=Jt(e.display.measure,i))}else{s>0&&(c=r="right")
var d
i=e.options.lineWrapping&&(d=a.getClientRects()).length>1?d["right"==r?d.length-1:0]:a.getBoundingClientRect()}if(wa&&_a<9&&!s&&(!i||!i.left&&!i.right)){var f=a.parentNode.getClientRects()[0]
i=f?{left:f.left,right:f.left+xn(e.display),top:f.top,bottom:f.bottom}:Cs}for(var p=i.top-t.rect.top,h=i.bottom-t.rect.top,m=(p+h)/2,g=t.view.measure.heights,v=0;v<g.length-1&&!(m<g[v]);v++);var y=v?g[v-1]:0,b=g[v],k={left:("right"==c?i.right:i.left)-t.rect.left,right:("left"==c?i.left:i.right)-t.rect.left,top:y,bottom:b}
return i.left||i.right||(k.bogus=!0),e.options.singleCursorHeightPerLine||(k.rtop=p,k.rbottom=h),k}function Jt(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!je(e))return t
var n=screen.logicalXDPI/screen.deviceXDPI,r=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*n,right:t.right*n,top:t.top*r,bottom:t.bottom*r}}function en(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function tn(e){e.display.externalMeasure=null,t(e.display.lineMeasure)
for(var n=0;n<e.display.view.length;n++)en(e.display.view[n])}function nn(e){tn(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function rn(){return Ma&&za?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function on(){return Ma&&za?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function an(e){var t=0
if(e.widgets)for(var n=0;n<e.widgets.length;++n)e.widgets[n].above&&(t+=Ft(e.widgets[n]))
return t}function sn(e,t,n,r,i){if(!i){var o=an(t)
n.top+=o,n.bottom+=o}if("line"==r)return n
r||(r="local")
var a=be(t)
if("local"==r?a+=It(e.display):a-=e.display.viewOffset,"page"==r||"window"==r){var s=e.display.lineSpace.getBoundingClientRect()
a+=s.top+("window"==r?0:on())
var l=s.left+("window"==r?0:rn())
n.left+=l,n.right+=l}return n.top+=a,n.bottom+=a,n}function ln(e,t,n){if("div"==n)return t
var r=t.left,i=t.top
if("page"==n)r-=rn(),i-=on()
else if("local"==n||!n){var o=e.display.sizer.getBoundingClientRect()
r+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect()
return{left:r-a.left,top:i-a.top}}function cn(e,t,n,r,i){return r||(r=L(e.doc,t.line)),sn(e,r,Kt(e,r,t.ch,i),n)}function un(e,t,n,r,i,o){function a(t,a){var s=Zt(e,i,t,a?"right":"left",o)
return a?s.left=s.right:s.right=s.left,sn(e,r,s,n)}function s(e,t,n){var r=l[t],i=1==r.level
return a(n?e-1:e,i!=n)}r=r||L(e.doc,t.line),i||(i=Gt(e,r))
var l=Ce(r,e.doc.direction),c=t.ch,u=t.sticky
if(c>=r.text.length?(c=r.text.length,u="before"):c<=0&&(c=0,u="after"),!l)return a("before"==u?c-1:c,"before"==u)
var d=_e(l,c,u),f=ns,p=s(c,d,"before"==u)
return null!=f&&(p.other=s(c,f,"before"!=u)),p}function dn(e,t){var n=0
t=W(e.doc,t),e.options.lineWrapping||(n=xn(e.display)*t.ch)
var r=L(e.doc,t.line),i=be(r)+It(e.display)
return{left:n,right:n,top:i,bottom:i+r.height}}function fn(e,t,n,r,i){var o=F(e,t,n)
return o.xRel=i,r&&(o.outside=!0),o}function pn(e,t,n){var r=e.doc
if(n+=e.display.viewOffset,n<0)return fn(r.first,0,null,!0,-1)
var i=z(r,n),o=r.first+r.size-1
if(i>o)return fn(r.first+r.size-1,L(r,o).text.length,null,!0,1)
t<0&&(t=0)
for(var a=L(r,i);;){var s=vn(e,a,i,t,n),l=ue(a,s.ch+(s.xRel>0?1:0))
if(!l)return s
var c=l.find(1)
if(c.line==i)return c
a=L(r,i=c.line)}}function hn(e,t,n,r){r-=an(t)
var i=t.text.length,o=S(function(t){return Zt(e,n,t-1).bottom<=r},i,0)
return i=S(function(t){return Zt(e,n,t).top>r},o,i),{begin:o,end:i}}function mn(e,t,n,r){n||(n=Gt(e,t))
var i=sn(e,t,Zt(e,n,r),"line").top
return hn(e,t,n,i)}function gn(e,t,n,r){return!(e.bottom<=n)&&(e.top>n||(r?e.left:e.right)>t)}function vn(e,t,n,r,i){i-=be(t)
var o=Gt(e,t),a=an(t),s=0,l=t.text.length,c=!0,u=Ce(t,e.doc.direction)
if(u){var d=(e.options.lineWrapping?bn:yn)(e,t,n,o,u,r,i)
c=1!=d.level,s=c?d.from:d.to-1,l=c?d.to:d.from-1}var f,p,h=null,m=null,g=S(function(t){var n=Zt(e,o,t)
return n.top+=a,n.bottom+=a,!!gn(n,r,i,!1)&&(n.top<=i&&n.left<=r&&(h=t,m=n),!0)},s,l),v=!1
if(m){var y=r-m.left<m.right-r,b=y==c
g=h+(b?0:1),p=b?"after":"before",f=y?m.left:m.right}else{c||g!=l&&g!=s||g++,p=0==g?"after":g==t.text.length?"before":Zt(e,o,g-(c?1:0)).bottom+a<=i==c?"after":"before"
var k=un(e,F(n,g,p),"line",t,o)
f=k.left,v=i<k.top||i>=k.bottom}return g=C(t.text,g,1),fn(n,g,p,v,r-f)}function yn(e,t,n,r,i,o,a){var s=S(function(s){var l=i[s],c=1!=l.level
return gn(un(e,F(n,c?l.to:l.from,c?"before":"after"),"line",t,r),o,a,!0)},0,i.length-1),l=i[s]
if(s>0){var c=1!=l.level,u=un(e,F(n,c?l.from:l.to,c?"after":"before"),"line",t,r)
gn(u,o,a,!0)&&u.top>a&&(l=i[s-1])}return l}function bn(e,t,n,r,i,o,a){var s=hn(e,t,r,a),l=s.begin,c=s.end;/\s/.test(t.text.charAt(c-1))&&c--
for(var u=null,d=null,f=0;f<i.length;f++){var p=i[f]
if(!(p.from>=c||p.to<=l)){var h=1!=p.level,m=Zt(e,r,h?Math.min(c,p.to)-1:Math.max(l,p.from)).right,g=m<o?o-m+1e9:m-o;(!u||d>g)&&(u=p,d=g)}}return u||(u=i[i.length-1]),u.from<l&&(u={from:l,to:u.to,level:u.level}),u.to>c&&(u={from:u.from,to:c,level:u.level}),u}function kn(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==bs){bs=r("pre")
for(var i=0;i<49;++i)bs.appendChild(document.createTextNode("x")),bs.appendChild(r("br"))
bs.appendChild(document.createTextNode("x"))}n(e.measure,bs)
var o=bs.offsetHeight/50
return o>3&&(e.cachedTextHeight=o),t(e.measure),o||1}function xn(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=r("span","xxxxxxxxxx"),i=r("pre",[t])
n(e.measure,i)
var o=t.getBoundingClientRect(),a=(o.right-o.left)/10
return a>2&&(e.cachedCharWidth=a),a||10}function wn(e){for(var t=e.display,n={},r={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a)n[e.options.gutters[a]]=o.offsetLeft+o.clientLeft+i,r[e.options.gutters[a]]=o.clientWidth
return{fixedPos:_n(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:n,gutterWidth:r,wrapperWidth:t.wrapper.clientWidth}}function _n(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Cn(e){var t=kn(e.display),n=e.options.lineWrapping,r=n&&Math.max(5,e.display.scroller.clientWidth/xn(e.display)-3)
return function(i){if(ve(e.doc,i))return 0
var o=0
if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height)
return n?o+(Math.ceil(i.text.length/r)||1)*t:o+t}}function Sn(e){var t=e.doc,n=Cn(e)
t.iter(function(e){var t=n(e)
t!=e.height&&E(e,t)})}function Mn(e,t,n,r){var i=e.display
if(!n&&"true"==De(t).getAttribute("cm-not-content"))return null
var o,a,s=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-s.left,a=t.clientY-s.top}catch(t){return null}var l,c=pn(e,o,a)
if(r&&1==c.xRel&&(l=L(e.doc,c.line).text).length==c.ch){var u=d(l,l.length,e.options.tabSize)-l.length
c=F(c.line,Math.max(0,Math.round((o-Rt(e.display).left)/xn(e.display))-u))}return c}function Ln(e,t){if(t>=e.display.viewTo)return null
if(t-=e.display.viewFrom,t<0)return null
for(var n=e.display.view,r=0;r<n.length;r++)if(t-=n[r].size,t<0)return r}function Tn(e){e.display.input.showSelection(e.display.input.prepareSelection())}function An(e,t){void 0===t&&(t=!0)
for(var n=e.doc,r={},i=r.cursors=document.createDocumentFragment(),o=r.selection=document.createDocumentFragment(),a=0;a<n.sel.ranges.length;a++)if(t||a!=n.sel.primIndex){var s=n.sel.ranges[a]
if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var l=s.empty();(l||e.options.showCursorWhenSelecting)&&En(e,s.head,i),l||zn(e,s,o)}}return r}function En(e,t,n){var i=un(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),o=n.appendChild(r("div"," ","CodeMirror-cursor"))
if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",i.other){var a=n.appendChild(r("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
a.style.display="",a.style.left=i.other.left+"px",a.style.top=i.other.top+"px",a.style.height=.85*(i.other.bottom-i.other.top)+"px"}}function On(e,t){return e.top-t.top||e.left-t.left}function zn(e,t,n){function i(e,t,n,i){t<0&&(t=0),t=Math.round(t),i=Math.round(i),l.appendChild(r("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==n?d-e:n)+"px;\n                             height: "+(i-t)+"px"))}function o(t,n,r){function o(n,r){return cn(e,F(t,n),"div",p,r)}function a(t,n,r){var i=mn(e,p,null,t),a="ltr"==n==("after"==r)?"left":"right",s="after"==r?i.begin:i.end-(/\s/.test(p.text.charAt(i.end-1))?2:1)
return o(s,a)[a]}var l,c,p=L(s,t),h=p.text.length,m=Ce(p,s.direction)
return we(m,n||0,null==r?h:r,function(e,t,s,p){var g="ltr"==s,v=o(e,g?"left":"right"),y=o(t-1,g?"right":"left"),b=null==n&&0==e,k=null==r&&t==h,x=0==p,w=!m||p==m.length-1
if(y.top-v.top<=3){var _=(f?b:k)&&x,C=(f?k:b)&&w,S=_?u:(g?v:y).left,M=C?d:(g?y:v).right
i(S,v.top,M-S,v.bottom)}else{var L,T,A,E
g?(L=f&&b&&x?u:v.left,T=f?d:a(e,s,"before"),A=f?u:a(t,s,"after"),E=f&&k&&w?d:y.right):(L=f?a(e,s,"before"):u,T=!f&&b&&x?d:v.right,A=!f&&k&&w?u:y.left,E=f?a(t,s,"after"):d),i(L,v.top,T-L,v.bottom),v.bottom<y.top&&i(u,v.bottom,null,y.top),i(A,y.top,E-A,y.bottom)}(!l||On(v,l)<0)&&(l=v),On(y,l)<0&&(l=y),(!c||On(v,c)<0)&&(c=v),On(y,c)<0&&(c=y)}),{start:l,end:c}}var a=e.display,s=e.doc,l=document.createDocumentFragment(),c=Rt(e.display),u=c.left,d=Math.max(a.sizerWidth,Bt(e)-a.sizer.offsetLeft)-c.right,f="ltr"==s.direction,p=t.from(),h=t.to()
if(p.line==h.line)o(p.line,p.ch,h.ch)
else{var m=L(s,p.line),g=L(s,h.line),v=fe(m)==fe(g),y=o(p.line,p.ch,v?m.text.length+1:null).end,b=o(h.line,v?0:null,h.ch).start
v&&(y.top<b.top-2?(i(y.right,y.top,null,y.bottom),i(u,b.top,b.left,b.bottom)):i(y.right,y.top,b.left-y.right,y.bottom)),y.bottom<b.top&&i(u,y.bottom,null,b.top)}n.appendChild(l)}function Nn(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var n=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(n=!n)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function qn(e){e.state.focused||(e.display.input.focus(),Dn(e))}function Fn(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,In(e))},100)}function Dn(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Le(e,"focus",e,t),e.state.focused=!0,s(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),Ca&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Nn(e))}function In(e,t){e.state.delayingBlurEvent||(e.state.focused&&(Le(e,"blur",e,t),e.state.focused=!1,Ba(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Pn(e){for(var t=e.display,n=t.lineDiv.offsetTop,r=0;r<t.view.length;r++){var i=t.view[r],o=e.options.lineWrapping,a=void 0,s=0
if(!i.hidden){if(wa&&_a<8){var l=i.node.offsetTop+i.node.offsetHeight
a=l-n,n=l}else{var c=i.node.getBoundingClientRect()
a=c.bottom-c.top,!o&&i.text.firstChild&&(s=i.text.firstChild.getBoundingClientRect().right-c.left-1)}var u=i.line.height-a
if((u>.005||u<-.005)&&(E(i.line,a),Rn(i.line),i.rest))for(var d=0;d<i.rest.length;d++)Rn(i.rest[d])
if(s>e.display.sizerWidth){var f=Math.ceil(s/xn(e.display))
f>e.display.maxLineLength&&(e.display.maxLineLength=f,e.display.maxLine=i.line,e.display.maxLineChanged=!0)}}}}function Rn(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var n=e.widgets[t],r=n.node.parentNode
r&&(n.height=r.offsetHeight)}}function jn(e,t,n){var r=n&&null!=n.top?Math.max(0,n.top):e.scroller.scrollTop
r=Math.floor(r-It(e))
var i=n&&null!=n.bottom?n.bottom:r+e.wrapper.clientHeight,o=z(t,r),a=z(t,i)
if(n&&n.ensure){var s=n.ensure.from.line,l=n.ensure.to.line
s<o?(o=s,a=z(t,be(L(t,s))+e.wrapper.clientHeight)):Math.min(l,t.lastLine())>=a&&(o=z(t,be(L(t,l))-e.wrapper.clientHeight),a=l)}return{from:o,to:Math.max(a,o+1)}}function Bn(e){var t=e.display,n=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var r=_n(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=r+"px",a=0;a<n.length;a++)if(!n[a].hidden){e.options.fixedGutter&&(n[a].gutter&&(n[a].gutter.style.left=o),n[a].gutterBackground&&(n[a].gutterBackground.style.left=o))
var s=n[a].alignable
if(s)for(var l=0;l<s.length;l++)s[l].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=r+i+"px")}}function Wn(e){if(!e.options.lineNumbers)return!1
var t=e.doc,n=q(e.options,t.first+t.size-1),i=e.display
if(n.length!=i.lineNumChars){var o=i.measure.appendChild(r("div",[r("div",n)],"CodeMirror-linenumber CodeMirror-gutter-elt")),a=o.firstChild.offsetWidth,s=o.offsetWidth-a
return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(a,i.lineGutter.offsetWidth-s)+1,i.lineNumWidth=i.lineNumInnerWidth+s,i.lineNumChars=i.lineNumInnerWidth?n.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",Nr(e),!0}return!1}function Hn(e,t){if(!Te(e,"scrollCursorIntoView")){var n=e.display,i=n.sizer.getBoundingClientRect(),o=null
if(t.top+i.top<0?o=!0:t.bottom+i.top>(window.innerHeight||document.documentElement.clientHeight)&&(o=!1),null!=o&&!Ea){var a=r("div","​",null,"position: absolute;\n                         top: "+(t.top-n.viewOffset-It(e.display))+"px;\n                         height: "+(t.bottom-t.top+jt(e)+n.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;")
e.display.lineSpace.appendChild(a),a.scrollIntoView(o),e.display.lineSpace.removeChild(a)}}}function Un(e,t,n,r){null==r&&(r=0)
var i
e.options.lineWrapping||t!=n||(t=t.ch?F(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t,n="before"==t.sticky?F(t.line,t.ch+1,"before"):t)
for(var o=0;o<5;o++){var a=!1,s=un(e,t),l=n&&n!=t?un(e,n):s
i={left:Math.min(s.left,l.left),top:Math.min(s.top,l.top)-r,right:Math.max(s.left,l.left),bottom:Math.max(s.bottom,l.bottom)+r}
var c=Kn(e,i),u=e.doc.scrollTop,d=e.doc.scrollLeft
if(null!=c.scrollTop&&(Jn(e,c.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(a=!0)),null!=c.scrollLeft&&(tr(e,c.scrollLeft),Math.abs(e.doc.scrollLeft-d)>1&&(a=!0)),!a)break}return i}function $n(e,t){var n=Kn(e,t)
null!=n.scrollTop&&Jn(e,n.scrollTop),null!=n.scrollLeft&&tr(e,n.scrollLeft)}function Kn(e,t){var n=e.display,r=kn(e.display)
t.top<0&&(t.top=0)
var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:n.scroller.scrollTop,o=Wt(e),a={}
t.bottom-t.top>o&&(t.bottom=t.top+o)
var s=e.doc.height+Pt(n),l=t.top<r,c=t.bottom>s-r
if(t.top<i)a.scrollTop=l?0:t.top
else if(t.bottom>i+o){var u=Math.min(t.top,(c?s:t.bottom)-o)
u!=i&&(a.scrollTop=u)}var d=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:n.scroller.scrollLeft,f=Bt(e)-(e.options.fixedGutter?n.gutters.offsetWidth:0),p=t.right-t.left>f
return p&&(t.right=t.left+f),t.left<10?a.scrollLeft=0:t.left<d?a.scrollLeft=Math.max(0,t.left-(p?0:10)):t.right>f+d-3&&(a.scrollLeft=t.right+(p?0:10)-f),a}function Vn(e,t){null!=t&&(Qn(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function Gn(e){Qn(e)
var t=e.getCursor()
e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Zn(e,t,n){null==t&&null==n||Qn(e),null!=t&&(e.curOp.scrollLeft=t),null!=n&&(e.curOp.scrollTop=n)}function Xn(e,t){Qn(e),e.curOp.scrollToPos=t}function Qn(e){var t=e.curOp.scrollToPos
if(t){e.curOp.scrollToPos=null
var n=dn(e,t.from),r=dn(e,t.to)
Yn(e,n,r,t.margin)}}function Yn(e,t,n,r){var i=Kn(e,{left:Math.min(t.left,n.left),top:Math.min(t.top,n.top)-r,right:Math.max(t.right,n.right),bottom:Math.max(t.bottom,n.bottom)+r})
Zn(e,i.scrollLeft,i.scrollTop)}function Jn(e,t){Math.abs(e.doc.scrollTop-t)<2||(ya||Or(e,{top:t}),er(e,t,!0),ya&&Or(e),Cr(e,100))}function er(e,t,n){t=Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t),(e.display.scroller.scrollTop!=t||n)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function tr(e,t,n,r){t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),(n?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!r||(e.doc.scrollLeft=t,Bn(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function nr(e){var t=e.display,n=t.gutters.offsetWidth,r=Math.round(e.doc.height+Pt(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?n:0,docHeight:r,scrollHeight:r+jt(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:n}}function rr(e,t){t||(t=nr(e))
var n=e.display.barWidth,r=e.display.barHeight
ir(e,t)
for(var i=0;i<4&&n!=e.display.barWidth||r!=e.display.barHeight;i++)n!=e.display.barWidth&&e.options.lineWrapping&&Pn(e),ir(e,nr(e)),n=e.display.barWidth,r=e.display.barHeight}function ir(e,t){var n=e.display,r=n.scrollbars.update(t)
n.sizer.style.paddingRight=(n.barWidth=r.right)+"px",n.sizer.style.paddingBottom=(n.barHeight=r.bottom)+"px",n.heightForcer.style.borderBottom=r.bottom+"px solid transparent",r.right&&r.bottom?(n.scrollbarFiller.style.display="block",n.scrollbarFiller.style.height=r.bottom+"px",n.scrollbarFiller.style.width=r.right+"px"):n.scrollbarFiller.style.display="",r.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(n.gutterFiller.style.display="block",n.gutterFiller.style.height=r.bottom+"px",n.gutterFiller.style.width=t.gutterWidth+"px"):n.gutterFiller.style.display=""}function or(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ba(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ls[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),os(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,n){"horizontal"==n?tr(e,t):Jn(e,t)},e),e.display.scrollbars.addClass&&s(e.display.wrapper,e.display.scrollbars.addClass)}function ar(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Ts},yt(e.curOp)}function sr(e){var t=e.curOp
t&&kt(t,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
lr(e)})}function lr(e){for(var t=e.ops,n=0;n<t.length;n++)cr(t[n])
for(var r=0;r<t.length;r++)ur(t[r])
for(var i=0;i<t.length;i++)dr(t[i])
for(var o=0;o<t.length;o++)fr(t[o])
for(var a=0;a<t.length;a++)pr(t[a])}function cr(e){var t=e.cm,n=t.display
Mr(t),e.updateMaxLine&&xe(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<n.viewFrom||e.scrollToPos.to.line>=n.viewTo)||n.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new As(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function ur(e){e.updatedDisplay=e.mustUpdate&&Ar(e.cm,e.update)}function dr(e){var t=e.cm,n=t.display
e.updatedDisplay&&Pn(t),e.barMeasure=nr(t),n.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Kt(t,n.maxLine,n.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(n.scroller.clientWidth,n.sizer.offsetLeft+e.adjustWidthTo+jt(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,n.sizer.offsetLeft+e.adjustWidthTo-Bt(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=n.input.prepareSelection())}function fr(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&tr(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var n=e.focus&&e.focus==a()
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,n),(e.updatedDisplay||e.startHeight!=t.doc.height)&&rr(t,e.barMeasure),e.updatedDisplay&&qr(t,e.barMeasure),e.selectionChanged&&Nn(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),n&&qn(e.cm)}function pr(e){var t=e.cm,n=t.display,r=t.doc
if(e.updatedDisplay&&Er(t,e.update),null==n.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(n.wheelStartX=n.wheelStartY=null),null!=e.scrollTop&&er(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&tr(t,e.scrollLeft,!0,!0),e.scrollToPos){var i=Un(t,W(r,e.scrollToPos.from),W(r,e.scrollToPos.to),e.scrollToPos.margin)
Hn(t,i)}var o=e.maybeHiddenMarkers,a=e.maybeUnhiddenMarkers
if(o)for(var s=0;s<o.length;++s)o[s].lines.length||Le(o[s],"hide")
if(a)for(var l=0;l<a.length;++l)a[l].lines.length&&Le(a[l],"unhide")
n.wrapper.offsetHeight&&(r.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Le(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function hr(e,t){if(e.curOp)return t()
ar(e)
try{return t()}finally{sr(e)}}function mr(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
ar(e)
try{return t.apply(e,arguments)}finally{sr(e)}}}function gr(e){return function(){if(this.curOp)return e.apply(this,arguments)
ar(this)
try{return e.apply(this,arguments)}finally{sr(this)}}}function vr(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
ar(t)
try{return e.apply(this,arguments)}finally{sr(t)}}}function yr(e,t,n,r){null==t&&(t=e.doc.first),null==n&&(n=e.doc.first+e.doc.size),r||(r=0)
var i=e.display
if(r&&n<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)ts&&me(e.doc,t)<i.viewTo&&kr(e)
else if(n<=i.viewFrom)ts&&ge(e.doc,n+r)>i.viewFrom?kr(e):(i.viewFrom+=r,i.viewTo+=r)
else if(t<=i.viewFrom&&n>=i.viewTo)kr(e)
else if(t<=i.viewFrom){var o=xr(e,n,n+r,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=r):kr(e)}else if(n>=i.viewTo){var a=xr(e,t,t,-1)
a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):kr(e)}else{var s=xr(e,t,t,-1),l=xr(e,n,n+r,1)
s&&l?(i.view=i.view.slice(0,s.index).concat(vt(e,s.lineN,l.lineN)).concat(i.view.slice(l.index)),i.viewTo+=r):kr(e)}var c=i.externalMeasured
c&&(n<c.lineN?c.lineN+=r:t<c.lineN+c.size&&(i.externalMeasured=null))}function br(e,t,n){e.curOp.viewChanged=!0
var r=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(r.externalMeasured=null),!(t<r.viewFrom||t>=r.viewTo)){var o=r.view[Ln(e,t)]
if(null!=o.node){var a=o.changes||(o.changes=[])
f(a,n)==-1&&a.push(n)}}}function kr(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function xr(e,t,n,r){var i,o=Ln(e,t),a=e.display.view
if(!ts||n==e.doc.first+e.doc.size)return{index:o,lineN:n}
for(var s=e.display.viewFrom,l=0;l<o;l++)s+=a[l].size
if(s!=t){if(r>0){if(o==a.length-1)return null
i=s+a[o].size-t,o++}else i=s-t
t+=i,n+=i}for(;me(e.doc,n)!=n;){if(o==(r<0?0:a.length-1))return null
n+=r*a[o-(r<0?1:0)].size,o+=r}return{index:o,lineN:n}}function wr(e,t,n){var r=e.display,i=r.view
0==i.length||t>=r.viewTo||n<=r.viewFrom?(r.view=vt(e,t,n),r.viewFrom=t):(r.viewFrom>t?r.view=vt(e,t,r.viewFrom).concat(r.view):r.viewFrom<t&&(r.view=r.view.slice(Ln(e,t))),r.viewFrom=t,r.viewTo<n?r.view=r.view.concat(vt(e,r.viewTo,n)):r.viewTo>n&&(r.view=r.view.slice(0,Ln(e,n)))),r.viewTo=n}function _r(e){for(var t=e.display.view,n=0,r=0;r<t.length;r++){var i=t[r]
i.hidden||i.node&&!i.changes||++n}return n}function Cr(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,c(Sr,e))}function Sr(e){var t=e.doc
if(!(t.highlightFrontier>=e.display.viewTo)){var n=+new Date+e.options.workTime,r=Qe(e,t.highlightFrontier),i=[]
t.iter(r.line,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(r.line>=e.display.viewFrom){var a=o.styles,s=o.text.length>e.options.maxHighlightLength?Ke(t.mode,r.state):null,l=Ze(e,o,r,!0)
s&&(r.state=s),o.styles=l.styles
var c=o.styleClasses,u=l.classes
u?o.styleClasses=u:c&&(o.styleClasses=null)
for(var d=!a||a.length!=o.styles.length||c!=u&&(!c||!u||c.bgClass!=u.bgClass||c.textClass!=u.textClass),f=0;!d&&f<a.length;++f)d=a[f]!=o.styles[f]
d&&i.push(r.line),o.stateAfter=r.save(),r.nextLine()}else o.text.length<=e.options.maxHighlightLength&&Ye(e,o.text,r),o.stateAfter=r.line%5==0?r.save():null,r.nextLine()
if(+new Date>n)return Cr(e,e.options.workDelay),!0}),t.highlightFrontier=r.line,t.modeFrontier=Math.max(t.modeFrontier,r.line),i.length&&hr(e,function(){for(var t=0;t<i.length;t++)br(e,i[t],"text")})}}function Mr(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=jt(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=jt(e)+"px",t.scrollbarsClipped=!0)}function Lr(e){if(e.hasFocus())return null
var t=a()
if(!t||!o(e.display.lineDiv,t))return null
var n={activeElt:t}
if(window.getSelection){var r=window.getSelection()
r.anchorNode&&r.extend&&o(e.display.lineDiv,r.anchorNode)&&(n.anchorNode=r.anchorNode,n.anchorOffset=r.anchorOffset,n.focusNode=r.focusNode,n.focusOffset=r.focusOffset)}return n}function Tr(e){if(e&&e.activeElt&&e.activeElt!=a()&&(e.activeElt.focus(),e.anchorNode&&o(document.body,e.anchorNode)&&o(document.body,e.focusNode))){var t=window.getSelection(),n=document.createRange()
n.setEnd(e.anchorNode,e.anchorOffset),n.collapse(!1),t.removeAllRanges(),t.addRange(n),t.extend(e.focusNode,e.focusOffset)}}function Ar(e,n){var r=e.display,i=e.doc
if(n.editorIsHidden)return kr(e),!1
if(!n.force&&n.visible.from>=r.viewFrom&&n.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==_r(e))return!1
Wn(e)&&(kr(e),n.dims=wn(e))
var o=i.first+i.size,a=Math.max(n.visible.from-e.options.viewportMargin,i.first),s=Math.min(o,n.visible.to+e.options.viewportMargin)
r.viewFrom<a&&a-r.viewFrom<20&&(a=Math.max(i.first,r.viewFrom)),r.viewTo>s&&r.viewTo-s<20&&(s=Math.min(o,r.viewTo)),ts&&(a=me(e.doc,a),s=ge(e.doc,s))
var l=a!=r.viewFrom||s!=r.viewTo||r.lastWrapHeight!=n.wrapperHeight||r.lastWrapWidth!=n.wrapperWidth
wr(e,a,s),r.viewOffset=be(L(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px"
var c=_r(e)
if(!l&&0==c&&!n.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1
var u=Lr(e)
return c>4&&(r.lineDiv.style.display="none"),zr(e,r.updateLineNumbers,n.dims),c>4&&(r.lineDiv.style.display=""),r.renderedView=r.view,Tr(u),t(r.cursorDiv),t(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,l&&(r.lastWrapHeight=n.wrapperHeight,r.lastWrapWidth=n.wrapperWidth,Cr(e,400)),r.updateLineNumbers=null,!0}function Er(e,t){for(var n=t.viewport,r=!0;(r&&e.options.lineWrapping&&t.oldDisplayWidth!=Bt(e)||(n&&null!=n.top&&(n={top:Math.min(e.doc.height+Pt(e.display)-Wt(e),n.top)}),t.visible=jn(e.display,e.doc,n),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&Ar(e,t);r=!1){Pn(e)
var i=nr(e)
Tn(e),rr(e,i),qr(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Or(e,t){var n=new As(e,t)
if(Ar(e,n)){Pn(e),Er(e,n)
var r=nr(e)
Tn(e),rr(e,r),qr(e,r),n.finish()}}function zr(e,n,r){function i(t){var n=t.nextSibling
return Ca&&qa&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),n}for(var o=e.display,a=e.options.lineNumbers,s=o.lineDiv,l=s.firstChild,c=o.view,u=o.viewFrom,d=0;d<c.length;d++){var p=c[d]
if(p.hidden);else if(p.node&&p.node.parentNode==s){for(;l!=p.node;)l=i(l)
var h=a&&null!=n&&n<=u&&p.lineNumber
p.changes&&(f(p.changes,"gutter")>-1&&(h=!1),_t(e,p,u,r)),h&&(t(p.lineNumber),p.lineNumber.appendChild(document.createTextNode(q(e.options,u)))),l=p.node.nextSibling}else{var m=Ot(e,p,u,r)
s.insertBefore(m,l)}u+=p.size}for(;l;)l=i(l)}function Nr(e){var t=e.display.gutters.offsetWidth
e.display.sizer.style.marginLeft=t+"px"}function qr(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+jt(e)+"px"}function Fr(e){var n=e.display.gutters,i=e.options.gutters
t(n)
for(var o=0;o<i.length;++o){var a=i[o],s=n.appendChild(r("div",null,"CodeMirror-gutter "+a))
"CodeMirror-linenumbers"==a&&(e.display.lineGutter=s,s.style.width=(e.display.lineNumWidth||1)+"px")}n.style.display=o?"":"none",Nr(e)}function Dr(e){var t=f(e.gutters,"CodeMirror-linenumbers")
t==-1&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function Ir(e){var t=e.wheelDeltaX,n=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==n&&e.detail&&e.axis==e.VERTICAL_AXIS?n=e.detail:null==n&&(n=e.wheelDelta),{x:t,y:n}}function Pr(e){var t=Ir(e)
return t.x*=Os,t.y*=Os,t}function Rr(e,t){var n=Ir(t),r=n.x,i=n.y,o=e.display,a=o.scroller,s=a.scrollWidth>a.clientWidth,l=a.scrollHeight>a.clientHeight
if(r&&s||i&&l){if(i&&qa&&Ca)e:for(var c=t.target,u=o.view;c!=a;c=c.parentNode)for(var d=0;d<u.length;d++)if(u[d].node==c){e.display.currentWheelTarget=c
break e}if(r&&!ya&&!La&&null!=Os)return i&&l&&Jn(e,Math.max(0,a.scrollTop+i*Os)),tr(e,Math.max(0,a.scrollLeft+r*Os)),(!i||i&&l)&&ze(t),void(o.wheelStartX=null)
if(i&&null!=Os){var f=i*Os,p=e.doc.scrollTop,h=p+o.wrapper.clientHeight
f<0?p=Math.max(0,p+f-50):h=Math.min(e.doc.height,h+f+50),Or(e,{top:p,bottom:h})}Es<20&&(null==o.wheelStartX?(o.wheelStartX=a.scrollLeft,o.wheelStartY=a.scrollTop,o.wheelDX=r,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=a.scrollLeft-o.wheelStartX,t=a.scrollTop-o.wheelStartY,n=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX
o.wheelStartX=o.wheelStartY=null,n&&(Os=(Os*Es+n)/(Es+1),++Es)}},200)):(o.wheelDX+=r,o.wheelDY+=i))}}function jr(e,t,n){var r=e&&e.options.selectionsMayTouch,i=t[n]
t.sort(function(e,t){return D(e.from(),t.from())}),n=f(t,i)
for(var o=1;o<t.length;o++){var a=t[o],s=t[o-1],l=D(s.to(),a.from())
if(r&&!a.empty()?l>0:l>=0){var c=j(s.from(),a.from()),u=R(s.to(),a.to()),d=s.empty()?a.from()==a.head:s.from()==s.head
o<=n&&--n,t.splice(--o,2,new Ns(d?u:c,d?c:u))}}return new zs(t,n)}function Br(e,t){return new zs([new Ns(e,t||e)],0)}function Wr(e){return e.text?F(e.from.line+e.text.length-1,m(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Hr(e,t){if(D(e,t.from)<0)return e
if(D(e,t.to)<=0)return Wr(t)
var n=e.line+t.text.length-(t.to.line-t.from.line)-1,r=e.ch
return e.line==t.to.line&&(r+=Wr(t).ch-t.to.ch),F(n,r)}function Ur(e,t){for(var n=[],r=0;r<e.sel.ranges.length;r++){var i=e.sel.ranges[r]
n.push(new Ns(Hr(i.anchor,t),Hr(i.head,t)))}return jr(e.cm,n,e.sel.primIndex)}function $r(e,t,n){return e.line==t.line?F(n.line,e.ch-t.ch+n.ch):F(n.line+(e.line-t.line),e.ch)}function Kr(e,t,n){for(var r=[],i=F(e.first,0),o=i,a=0;a<t.length;a++){var s=t[a],l=$r(s.from,i,o),c=$r(Wr(s),i,o)
if(i=s.to,o=c,"around"==n){var u=e.sel.ranges[a],d=D(u.head,u.anchor)<0
r[a]=new Ns(d?c:l,d?l:c)}else r[a]=new Ns(l,l)}return new zs(r,e.sel.primIndex)}function Vr(e){e.doc.mode=Ue(e.options,e.doc.modeOption),Gr(e)}function Gr(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,Cr(e,100),e.state.modeGen++,e.curOp&&yr(e)}function Zr(e,t){return 0==t.from.ch&&0==t.to.ch&&""==m(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Xr(e,t,n,r){function i(e){return n?n[e]:null}function o(e,n,i){at(e,n,i,r),xt(e,"change",e,t)}function a(e,t){for(var n=[],o=e;o<t;++o)n.push(new ys(c[o],i(o),r))
return n}var s=t.from,l=t.to,c=t.text,u=L(e,s.line),d=L(e,l.line),f=m(c),p=i(c.length-1),h=l.line-s.line
if(t.full)e.insert(0,a(0,c.length)),e.remove(c.length,e.size-c.length)
else if(Zr(e,t)){var g=a(0,c.length-1)
o(d,d.text,p),h&&e.remove(s.line,h),g.length&&e.insert(s.line,g)}else if(u==d)if(1==c.length)o(u,u.text.slice(0,s.ch)+f+u.text.slice(l.ch),p)
else{var v=a(1,c.length-1)
v.push(new ys(f+u.text.slice(l.ch),p,r)),o(u,u.text.slice(0,s.ch)+c[0],i(0)),e.insert(s.line+1,v)}else if(1==c.length)o(u,u.text.slice(0,s.ch)+c[0]+d.text.slice(l.ch),i(0)),e.remove(s.line+1,h)
else{o(u,u.text.slice(0,s.ch)+c[0],i(0)),o(d,f+d.text.slice(l.ch),p)
var y=a(1,c.length-1)
h>1&&e.remove(s.line+1,h-1),e.insert(s.line+1,y)}xt(e,"change",e,t)}function Qr(e,t,n){function r(e,i,o){if(e.linked)for(var a=0;a<e.linked.length;++a){var s=e.linked[a]
if(s.doc!=i){var l=o&&s.sharedHist
n&&!l||(t(s.doc,l),r(s.doc,e,l))}}}r(e,null,!0)}function Yr(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,Sn(e),Vr(e),Jr(e),e.options.lineWrapping||xe(e),e.options.mode=t.modeOption,yr(e)}function Jr(e){("rtl"==e.doc.direction?s:Ba)(e.display.lineDiv,"CodeMirror-rtl")}function ei(e){hr(e,function(){Jr(e),yr(e)})}function ti(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function ni(e,t){var n={from:P(t.from),to:Wr(t),text:T(e,t.from,t.to)}
return ci(e,n,t.from.line,t.to.line+1),Qr(e,function(e){return ci(e,n,t.from.line,t.to.line+1)},!0),n}function ri(e){for(;e.length;){var t=m(e)
if(!t.ranges)break
e.pop()}}function ii(e,t){return t?(ri(e.done),m(e.done)):e.done.length&&!m(e.done).ranges?m(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),m(e.done)):void 0}function oi(e,t,n,r){var i=e.history
i.undone.length=0
var o,a,s=+new Date
if((i.lastOp==r||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>s-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=ii(i,i.lastOp==r)))a=m(o.changes),0==D(t.from,t.to)&&0==D(t.from,a.to)?a.to=Wr(t):o.changes.push(ni(e,t))
else{var l=m(i.done)
for(l&&l.ranges||li(e.sel,i.done),o={changes:[ni(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(n),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=r,i.lastOrigin=i.lastSelOrigin=t.origin,a||Le(e,"historyAdded")}function ai(e,t,n,r){var i=t.charAt(0)
return"*"==i||"+"==i&&n.ranges.length==r.ranges.length&&n.somethingSelected()==r.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function si(e,t,n,r){var i=e.history,o=r&&r.origin
n==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||ai(e,o,m(i.done),t))?i.done[i.done.length-1]=t:li(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=n,r&&r.clearRedo!==!1&&ri(i.undone)}function li(e,t){var n=m(t)
n&&n.ranges&&n.equals(e)||t.push(e)}function ci(e,t,n,r){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,n),Math.min(e.first+e.size,r),function(n){n.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=n.markedSpans),++o})}function ui(e){if(!e)return null
for(var t,n=0;n<e.length;++n)e[n].marker.explicitlyCleared?t||(t=e.slice(0,n)):t&&t.push(e[n])
return t?t.length?t:null:e}function di(e,t){var n=t["spans_"+e.id]
if(!n)return null
for(var r=[],i=0;i<t.text.length;++i)r.push(ui(n[i]))
return r}function fi(e,t){var n=di(e,t),r=J(e,t)
if(!n)return r
if(!r)return n
for(var i=0;i<n.length;++i){var o=n[i],a=r[i]
if(o&&a)e:for(var s=0;s<a.length;++s){for(var l=a[s],c=0;c<o.length;++c)if(o[c].marker==l.marker)continue e
o.push(l)}else a&&(n[i]=a)}return n}function pi(e,t,n){for(var r=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)r.push(n?zs.prototype.deepCopy.call(o):o)
else{var a=o.changes,s=[]
r.push({changes:s})
for(var l=0;l<a.length;++l){var c=a[l],u=void 0
if(s.push({from:c.from,to:c.to,text:c.text}),t)for(var d in c)(u=d.match(/^spans_(\d+)$/))&&f(t,Number(u[1]))>-1&&(m(s)[d]=c[d],delete c[d])}}}return r}function hi(e,t,n,r){if(r){var i=e.anchor
if(n){var o=D(t,i)<0
o!=D(n,i)<0?(i=t,t=n):o!=D(t,n)<0&&(t=n)}return new Ns(i,t)}return new Ns(n||t,t)}function mi(e,t,n,r,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),xi(e,new zs([hi(e.sel.primary(),t,n,i)],0),r)}function gi(e,t,n){for(var r=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)r[o]=hi(e.sel.ranges[o],t[o],null,i)
var a=jr(e.cm,r,e.sel.primIndex)
xi(e,a,n)}function vi(e,t,n,r){var i=e.sel.ranges.slice(0)
i[t]=n,xi(e,jr(e.cm,i,e.sel.primIndex),r)}function yi(e,t,n,r){xi(e,Br(t,n),r)}function bi(e,t,n){var r={ranges:t.ranges,update:function(t){var n=this
this.ranges=[]
for(var r=0;r<t.length;r++)n.ranges[r]=new Ns(W(e,t[r].anchor),W(e,t[r].head))},origin:n&&n.origin}
return Le(e,"beforeSelectionChange",e,r),e.cm&&Le(e.cm,"beforeSelectionChange",e.cm,r),r.ranges!=t.ranges?jr(e.cm,r.ranges,r.ranges.length-1):t}function ki(e,t,n){var r=e.history.done,i=m(r)
i&&i.ranges?(r[r.length-1]=t,wi(e,t,n)):xi(e,t,n)}function xi(e,t,n){wi(e,t,n),si(e,e.sel,e.cm?e.cm.curOp.id:NaN,n)}function wi(e,t,n){(Ee(e,"beforeSelectionChange")||e.cm&&Ee(e.cm,"beforeSelectionChange"))&&(t=bi(e,t,n))
var r=n&&n.bias||(D(t.primary().head,e.sel.primary().head)<0?-1:1)
_i(e,Si(e,t,r,!0)),n&&n.scroll===!1||!e.cm||Gn(e.cm)}function _i(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,Ae(e.cm)),xt(e,"cursorActivity",e))}function Ci(e){_i(e,Si(e,e.sel,null,!1))}function Si(e,t,n,r){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],l=Li(e,a.anchor,s&&s.anchor,n,r),c=Li(e,a.head,s&&s.head,n,r);(i||l!=a.anchor||c!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new Ns(l,c))}return i?jr(e.cm,i,t.primIndex):t}function Mi(e,t,n,r,i){var o=L(e,t.line)
if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var s=o.markedSpans[a],l=s.marker
if((null==s.from||(l.inclusiveLeft?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(l.inclusiveRight?s.to>=t.ch:s.to>t.ch))){if(i&&(Le(l,"beforeCursorEnter"),l.explicitlyCleared)){if(o.markedSpans){--a
continue}break}if(!l.atomic)continue
if(n){var c=l.find(r<0?1:-1),u=void 0
if((r<0?l.inclusiveRight:l.inclusiveLeft)&&(c=Ti(e,c,-r,c&&c.line==t.line?o:null)),c&&c.line==t.line&&(u=D(c,n))&&(r<0?u<0:u>0))return Mi(e,c,t,r,i)}var d=l.find(r<0?-1:1)
return(r<0?l.inclusiveLeft:l.inclusiveRight)&&(d=Ti(e,d,r,d.line==t.line?o:null)),d?Mi(e,d,t,r,i):null}}return t}function Li(e,t,n,r,i){var o=r||1,a=Mi(e,t,n,o,i)||!i&&Mi(e,t,n,o,!0)||Mi(e,t,n,-o,i)||!i&&Mi(e,t,n,-o,!0)
return a?a:(e.cantEdit=!0,F(e.first,0))}function Ti(e,t,n,r){return n<0&&0==t.ch?t.line>e.first?W(e,F(t.line-1)):null:n>0&&t.ch==(r||L(e,t.line)).text.length?t.line<e.first+e.size-1?F(t.line+1,0):null:new F(t.line,t.ch+n)}function Ai(e){e.setSelection(F(e.firstLine(),0),F(e.lastLine()),Ga)}function Ei(e,t,n){var r={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return r.canceled=!0}}
return n&&(r.update=function(t,n,i,o){t&&(r.from=W(e,t)),n&&(r.to=W(e,n)),i&&(r.text=i),void 0!==o&&(r.origin=o)}),Le(e,"beforeChange",e,r),e.cm&&Le(e.cm,"beforeChange",e.cm,r),r.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:r.from,to:r.to,text:r.text,origin:r.origin}}function Oi(e,t,n){if(e.cm){if(!e.cm.curOp)return mr(e.cm,Oi)(e,t,n)
if(e.cm.state.suppressEdits)return}if(!(Ee(e,"beforeChange")||e.cm&&Ee(e.cm,"beforeChange"))||(t=Ei(e,t,!0))){var r=es&&!n&&te(e,t.from,t.to)
if(r)for(var i=r.length-1;i>=0;--i)zi(e,{from:r[i].from,to:r[i].to,text:i?[""]:t.text,origin:t.origin})
else zi(e,t)}}function zi(e,t){if(1!=t.text.length||""!=t.text[0]||0!=D(t.from,t.to)){var n=Ur(e,t)
oi(e,t,n,e.cm?e.cm.curOp.id:NaN),Fi(e,t,n,J(e,t))
var r=[]
Qr(e,function(e,n){n||f(r,e.history)!=-1||(ji(e.history,t),r.push(e.history)),Fi(e,t,null,J(e,t))})}}function Ni(e,t,n){var r=e.cm&&e.cm.state.suppressEdits
if(!r||n){for(var i,o=e.history,a=e.sel,s="undo"==t?o.done:o.undone,l="undo"==t?o.undone:o.done,c=0;c<s.length&&(i=s[c],n?!i.ranges||i.equals(e.sel):i.ranges);c++);if(c!=s.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(i=s.pop(),!i.ranges){if(r)return void s.push(i)
break}if(li(i,l),n&&!i.equals(e.sel))return void xi(e,i,{clearRedo:!1})
a=i}var u=[]
li(a,l),l.push({changes:u,generation:o.generation}),o.generation=i.generation||++o.maxGeneration
for(var d=Ee(e,"beforeChange")||e.cm&&Ee(e.cm,"beforeChange"),p=function(n){var r=i.changes[n]
if(r.origin=t,d&&!Ei(e,r,!1))return s.length=0,{}
u.push(ni(e,r))
var o=n?Ur(e,r):m(s)
Fi(e,r,o,fi(e,r)),!n&&e.cm&&e.cm.scrollIntoView({from:r.from,to:Wr(r)})
var a=[]
Qr(e,function(e,t){t||f(a,e.history)!=-1||(ji(e.history,r),a.push(e.history)),Fi(e,r,null,fi(e,r))})},h=i.changes.length-1;h>=0;--h){var g=p(h)
if(g)return g.v}}}}function qi(e,t){if(0!=t&&(e.first+=t,e.sel=new zs(g(e.sel.ranges,function(e){return new Ns(F(e.anchor.line+t,e.anchor.ch),F(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){yr(e.cm,e.first,e.first-t,t)
for(var n=e.cm.display,r=n.viewFrom;r<n.viewTo;r++)br(e.cm,r,"gutter")}}function Fi(e,t,n,r){if(e.cm&&!e.cm.curOp)return mr(e.cm,Fi)(e,t,n,r)
if(t.to.line<e.first)return void qi(e,t.text.length-1-(t.to.line-t.from.line))
if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
qi(e,i),t={from:F(e.first,0),to:F(t.to.line+i,t.to.ch),text:[m(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:F(o,L(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=T(e,t.from,t.to),n||(n=Ur(e,t)),e.cm?Di(e.cm,t,r):Xr(e,t,r),wi(e,n,Ga)}}function Di(e,t,n){var r=e.doc,i=e.display,o=t.from,a=t.to,s=!1,l=o.line
e.options.lineWrapping||(l=O(fe(L(r,o.line))),r.iter(l,a.line+1,function(e){if(e==i.maxLine)return s=!0,!0})),r.sel.contains(t.from,t.to)>-1&&Ae(e),Xr(r,t,n,Cn(e)),e.options.lineWrapping||(r.iter(l,o.line+t.text.length,function(e){var t=ke(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0)),ot(r,o.line),Cr(e,400)
var c=t.text.length-(a.line-o.line)-1
t.full?yr(e):o.line!=a.line||1!=t.text.length||Zr(e.doc,t)?yr(e,o.line,a.line+1,c):br(e,o.line,"text")
var u=Ee(e,"changes"),d=Ee(e,"change")
if(d||u){var f={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin}
d&&xt(e,"change",e,f),u&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f)}e.display.selForContextMenu=null}function Ii(e,t,n,r,i){var o
r||(r=n),D(r,n)<0&&(o=[r,n],n=o[0],r=o[1]),"string"==typeof t&&(t=e.splitLines(t)),Oi(e,{from:n,to:r,text:t,origin:i})}function Pi(e,t,n,r){n<e.line?e.line+=r:t<e.line&&(e.line=t,e.ch=0)}function Ri(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i],a=!0
if(o.ranges){o.copied||(o=e[i]=o.deepCopy(),o.copied=!0)
for(var s=0;s<o.ranges.length;s++)Pi(o.ranges[s].anchor,t,n,r),Pi(o.ranges[s].head,t,n,r)}else{for(var l=0;l<o.changes.length;++l){var c=o.changes[l]
if(n<c.from.line)c.from=F(c.from.line+r,c.from.ch),c.to=F(c.to.line+r,c.to.ch)
else if(t<=c.to.line){a=!1
break}}a||(e.splice(0,i+1),i=0)}}}function ji(e,t){var n=t.from.line,r=t.to.line,i=t.text.length-(r-n)-1
Ri(e.done,n,r,i),Ri(e.undone,n,r,i)}function Bi(e,t,n,r){var i=t,o=t
return"number"==typeof t?o=L(e,B(e,t)):i=O(t),null==i?null:(r(o,i)&&e.cm&&br(e.cm,i,n),o)}function Wi(e){var t=this
this.lines=e,this.parent=null
for(var n=0,r=0;r<e.length;++r)e[r].parent=t,n+=e[r].height
this.height=n}function Hi(e){var t=this
this.children=e
for(var n=0,r=0,i=0;i<e.length;++i){var o=e[i]
n+=o.chunkSize(),r+=o.height,o.parent=t}this.size=n,this.height=r,this.parent=null}function Ui(e,t,n){be(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Vn(e,n)}function $i(e,t,n,r){var i=new qs(e,n,r),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),Bi(e,t,"widget",function(t){var n=t.widgets||(t.widgets=[])
if(null==i.insertAt?n.push(i):n.splice(Math.min(n.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!ve(e,t)){var r=be(t)<e.scrollTop
E(t,t.height+Ft(i)),r&&Vn(o,i.height),o.curOp.forceUpdate=!0}return!0}),o&&xt(o,"lineWidgetAdded",o,i,"number"==typeof t?t:O(t)),i}function Ki(e,t,n,r,o){if(r&&r.shared)return Vi(e,t,n,r,o)
if(e.cm&&!e.cm.curOp)return mr(e.cm,Ki)(e,t,n,r,o)
var a=new Ds(e,o),s=D(t,n)
if(r&&u(r,a,!1),s>0||0==s&&a.clearWhenEmpty!==!1)return a
if(a.replacedWith&&(a.collapsed=!0,a.widgetNode=i("span",[a.replacedWith],"CodeMirror-widget"),r.handleMouseEvents||a.widgetNode.setAttribute("cm-ignore-events","true"),r.insertLeft&&(a.widgetNode.insertLeft=!0)),a.collapsed){if(de(e,t.line,t,n,a)||t.line!=n.line&&de(e,n.line,t,n,a))throw new Error("Inserting collapsed marker partially overlapping an existing one")
K()}a.addToHistory&&oi(e,{from:t,to:n,origin:"markText"},e.sel,NaN)
var l,c=t.line,d=e.cm
if(e.iter(c,n.line+1,function(e){d&&a.collapsed&&!d.options.lineWrapping&&fe(e)==d.display.maxLine&&(l=!0),a.collapsed&&c!=t.line&&E(e,0),X(e,new V(a,c==t.line?t.ch:null,c==n.line?n.ch:null)),++c}),a.collapsed&&e.iter(t.line,n.line+1,function(t){ve(e,t)&&E(t,0)}),a.clearOnEnter&&os(a,"beforeCursorEnter",function(){return a.clear()}),a.readOnly&&($(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),a.collapsed&&(a.id=++Fs,a.atomic=!0),d){if(l&&(d.curOp.updateMaxLine=!0),a.collapsed)yr(d,t.line,n.line+1)
else if(a.className||a.startStyle||a.endStyle||a.css||a.attributes||a.title)for(var f=t.line;f<=n.line;f++)br(d,f,"text")
a.atomic&&Ci(d.doc),xt(d,"markerAdded",d,a)}return a}function Vi(e,t,n,r,i){r=u(r),r.shared=!1
var o=[Ki(e,t,n,r,i)],a=o[0],s=r.widgetNode
return Qr(e,function(e){s&&(r.widgetNode=s.cloneNode(!0)),o.push(Ki(e,W(e,t),W(e,n),r,i))
for(var l=0;l<e.linked.length;++l)if(e.linked[l].isParent)return
a=m(o)}),new Is(o,a)}function Gi(e){return e.findMarks(F(e.first,0),e.clipPos(F(e.lastLine())),function(e){return e.parent})}function Zi(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=r.find(),o=e.clipPos(i.from),a=e.clipPos(i.to)
if(D(o,a)){var s=Ki(e,o,a,r.primary,r.primary.type)
r.markers.push(s),s.parent=r}}}function Xi(e){for(var t=function(t){var n=e[t],r=[n.primary.doc]
Qr(n.primary.doc,function(e){return r.push(e)})
for(var i=0;i<n.markers.length;i++){var o=n.markers[i]
f(r,o.doc)==-1&&(o.parent=null,n.markers.splice(i--,1))}},n=0;n<e.length;n++)t(n)}function Qi(e){var t=this
if(eo(t),!Te(t,e)&&!Dt(t.display,e)){ze(e),wa&&(js=+new Date)
var n=Mn(t,e,!0),r=e.dataTransfer.files
if(n&&!t.isReadOnly())if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),a=0,s=function(e,r){if(!t.options.allowDropFileTypes||f(t.options.allowDropFileTypes,e.type)!=-1){var s=new FileReader
s.onload=mr(t,function(){var e=s.result
if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[r]=e,++a==i){n=W(t.doc,n)
var l={from:n,to:n,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"}
Oi(t.doc,l),ki(t.doc,Br(n,Wr(l)))}}),s.readAsText(e)}},l=0;l<i;++l)s(r[l],l)
else{if(t.state.draggingText&&t.doc.sel.contains(n)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20)
try{var c=e.dataTransfer.getData("Text")
if(c){var u
if(t.state.draggingText&&!t.state.draggingText.copy&&(u=t.listSelections()),wi(t.doc,Br(n,n)),u)for(var d=0;d<u.length;++d)Ii(t.doc,"",u[d].anchor,u[d].head,"drag")
t.replaceSelection(c,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Yi(e,t){if(wa&&(!e.state.draggingText||+new Date-js<100))return void Fe(t)
if(!Te(e,t)&&!Dt(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!Ta)){var n=r("img",null,null,"position: fixed; left: 0; top: 0;")
n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",La&&(n.width=n.height=1,e.display.wrapper.appendChild(n),n._top=n.offsetTop),t.dataTransfer.setDragImage(n,0,0),La&&n.parentNode.removeChild(n)}}function Ji(e,t){var i=Mn(e,t)
if(i){var o=document.createDocumentFragment()
En(e,i,o),e.display.dragCursor||(e.display.dragCursor=r("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),n(e.display.dragCursor,o)}}function eo(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function to(e){if(document.getElementsByClassName){for(var t=document.getElementsByClassName("CodeMirror"),n=[],r=0;r<t.length;r++){var i=t[r].CodeMirror
i&&n.push(i)}n.length&&n[0].operation(function(){for(var t=0;t<n.length;t++)e(n[t])})}}function no(){Bs||(ro(),Bs=!0)}function ro(){var e
os(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,to(io)},100))}),os(window,"blur",function(){return to(In)})}function io(e){var t=e.display
t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}function oo(e){var t=e.split(/-(?!$)/)
e=t[t.length-1]
for(var n,r,i,o,a=0;a<t.length-1;a++){var s=t[a]
if(/^(cmd|meta|m)$/i.test(s))o=!0
else if(/^a(lt)?$/i.test(s))n=!0
else if(/^(c|ctrl|control)$/i.test(s))r=!0
else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s)
i=!0}}return n&&(e="Alt-"+e),r&&(e="Ctrl-"+e),o&&(e="Cmd-"+e),i&&(e="Shift-"+e),e}function ao(e){var t={}
for(var n in e)if(e.hasOwnProperty(n)){var r=e[n]
if(/^(name|fallthrough|(de|at)tach)$/.test(n))continue
if("..."==r){delete e[n]
continue}for(var i=g(n.split(" "),oo),o=0;o<i.length;o++){var a=void 0,s=void 0
o==i.length-1?(s=i.join(" "),a=r):(s=i.slice(0,o+1).join(" "),a="...")
var l=t[s]
if(l){if(l!=a)throw new Error("Inconsistent bindings for "+s)}else t[s]=a}delete e[n]}for(var c in t)e[c]=t[c]
return e}function so(e,t,n,r){t=fo(t)
var i=t.call?t.call(e,r):t[e]
if(i===!1)return"nothing"
if("..."===i)return"multi"
if(null!=i&&n(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return so(e,t.fallthrough,n,r)
for(var o=0;o<t.fallthrough.length;o++){var a=so(e,t.fallthrough[o],n,r)
if(a)return a}}}function lo(e){var t="string"==typeof e?e:Ws[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function co(e,t,n){var r=e
return t.altKey&&"Alt"!=r&&(e="Alt-"+e),(Ra?t.metaKey:t.ctrlKey)&&"Ctrl"!=r&&(e="Ctrl-"+e),(Ra?t.ctrlKey:t.metaKey)&&"Cmd"!=r&&(e="Cmd-"+e),!n&&t.shiftKey&&"Shift"!=r&&(e="Shift-"+e),e}function uo(e,t){if(La&&34==e.keyCode&&e["char"])return!1
var n=Ws[e.keyCode]
return null!=n&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(n=e.code),co(n,e,t))}function fo(e){return"string"==typeof e?Ks[e]:e}function po(e,t){for(var n=e.doc.sel.ranges,r=[],i=0;i<n.length;i++){for(var o=t(n[i]);r.length&&D(o.from,m(r).to)<=0;){var a=r.pop()
if(D(a.from,o.from)<0){o.from=a.from
break}}r.push(o)}hr(e,function(){for(var t=r.length-1;t>=0;t--)Ii(e.doc,"",r[t].from,r[t].to,"+delete")
Gn(e)})}function ho(e,t,n){var r=C(e.text,t+n,n)
return r<0||r>e.text.length?null:r}function mo(e,t,n){var r=ho(e,t.ch,n)
return null==r?null:new F(t.line,r,n<0?"after":"before")}function go(e,t,n,r,i){if(e){var o=Ce(n,t.doc.direction)
if(o){var a,s=i<0?m(o):o[0],l=i<0==(1==s.level),c=l?"after":"before"
if(s.level>0||"rtl"==t.doc.direction){var u=Gt(t,n)
a=i<0?n.text.length-1:0
var d=Zt(t,u,a).top
a=S(function(e){return Zt(t,u,e).top==d},i<0==(1==s.level)?s.from:s.to-1,a),"before"==c&&(a=ho(n,a,1))}else a=i<0?s.to:s.from
return new F(r,a,c)}}return new F(r,i<0?n.text.length:0,i<0?"before":"after")}function vo(e,t,n,r){var i=Ce(t,e.doc.direction)
if(!i)return mo(t,n,r)
n.ch>=t.text.length?(n.ch=t.text.length,n.sticky="before"):n.ch<=0&&(n.ch=0,n.sticky="after")
var o=_e(i,n.ch,n.sticky),a=i[o]
if("ltr"==e.doc.direction&&a.level%2==0&&(r>0?a.to>n.ch:a.from<n.ch))return mo(t,n,r)
var s,l=function(e,n){return ho(t,e instanceof F?e.ch:e,n)},c=function(n){return e.options.lineWrapping?(s=s||Gt(e,t),mn(e,t,s,n)):{begin:0,end:t.text.length}},u=c("before"==n.sticky?l(n,-1):n.ch)
if("rtl"==e.doc.direction||1==a.level){var d=1==a.level==r<0,f=l(n,d?1:-1)
if(null!=f&&(d?f<=a.to&&f<=u.end:f>=a.from&&f>=u.begin)){var p=d?"before":"after"
return new F(n.line,f,p)}}var h=function(e,t,r){for(var o=function(e,t){return t?new F(n.line,l(e,1),"before"):new F(n.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],s=t>0==(1!=a.level),c=s?r.begin:l(r.end,-1)
if(a.from<=c&&c<a.to)return o(c,s)
if(c=s?a.from:l(a.to,-1),r.begin<=c&&c<r.end)return o(c,s)}},m=h(o+r,r,u)
if(m)return m
var g=r>0?u.end:l(u.begin,-1)
return null==g||r>0&&g==t.text.length||!(m=h(r>0?0:i.length-1,r,c(g)))?null:m}function yo(e,t){var n=L(e.doc,t),r=fe(n)
return r!=n&&(t=O(r)),go(!0,e,r,t,1)}function bo(e,t){var n=L(e.doc,t),r=pe(n)
return r!=n&&(t=O(r)),go(!0,e,n,t,-1)}function ko(e,t){var n=yo(e,t.line),r=L(e.doc,n.line),i=Ce(r,e.doc.direction)
if(!i||0==i[0].level){var o=Math.max(0,r.text.search(/\S/)),a=t.line==n.line&&t.ch<=o&&t.ch
return F(n.line,a?0:o,n.sticky)}return n}function xo(e,t,n){if("string"==typeof t&&(t=Vs[t],!t))return!1
e.display.input.ensurePolled()
var r=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),n&&(e.display.shift=!1),i=t(e)!=Va}finally{e.display.shift=r,e.state.suppressEdits=!1}return i}function wo(e,t,n){for(var r=0;r<e.state.keyMaps.length;r++){var i=so(t,e.state.keyMaps[r],n,e)
if(i)return i}return e.options.extraKeys&&so(t,e.options.extraKeys,n,e)||so(t,e.options.keyMap,n,e)}function _o(e,t,n,r){var i=e.state.keySeq
if(i){if(lo(t))return"handled"
if(/\'$/.test(t)?e.state.keySeq=null:Gs.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),Co(e,i+" "+t,n,r))return!0}return Co(e,t,n,r)}function Co(e,t,n,r){var i=wo(e,t,r)
return"multi"==i&&(e.state.keySeq=t),"handled"==i&&xt(e,"keyHandled",e,t,n),"handled"!=i&&"multi"!=i||(ze(n),Nn(e)),!!i}function So(e,t){var n=uo(t,!0)
return!!n&&(t.shiftKey&&!e.state.keySeq?_o(e,"Shift-"+n,t,function(t){return xo(e,t,!0)})||_o(e,n,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return xo(e,t)}):_o(e,n,t,function(t){return xo(e,t)}))}function Mo(e,t,n){return _o(e,"'"+n+"'",t,function(t){return xo(e,t,!0)})}function Lo(e){var t=this
if(t.curOp.focus=a(),!Te(t,e)){wa&&_a<11&&27==e.keyCode&&(e.returnValue=!1)
var n=e.keyCode
t.display.shift=16==n||e.shiftKey
var r=So(t,e)
La&&(Zs=r?n:null,!r&&88==n&&!cs&&(qa?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=n||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||To(t)}}function To(e){function t(e){18!=e.keyCode&&e.altKey||(Ba(n,"CodeMirror-crosshair"),Me(document,"keyup",t),Me(document,"mouseover",t))}var n=e.display.lineDiv
s(n,"CodeMirror-crosshair"),os(document,"keyup",t),os(document,"mouseover",t)}function Ao(e){16==e.keyCode&&(this.doc.sel.shift=!1),Te(this,e)}function Eo(e){var t=this
if(!(Dt(t.display,e)||Te(t,e)||e.ctrlKey&&!e.altKey||qa&&e.metaKey)){var n=e.keyCode,r=e.charCode
if(La&&n==Zs)return Zs=null,void ze(e)
if(!La||e.which&&!(e.which<10)||!So(t,e)){var i=String.fromCharCode(null==r?n:r)
"\b"!=i&&(Mo(t,e,i)||t.display.input.onKeyPress(e))}}}function Oo(e,t){var n=+new Date
return Js&&Js.compare(n,e,t)?(Ys=Js=null,"triple"):Ys&&Ys.compare(n,e,t)?(Js=new Qs(n,e,t),Ys=null,"double"):(Ys=new Qs(n,e,t),Js=null,"single")}function zo(e){var t=this,n=t.display
if(!(Te(t,e)||n.activeTouch&&n.input.supportsTouch())){if(n.input.ensurePolled(),n.shift=e.shiftKey,Dt(n,e))return void(Ca||(n.scroller.draggable=!1,setTimeout(function(){return n.scroller.draggable=!0},100)))
if(!Bo(t,e)){var r=Mn(t,e),i=Ie(e),o=r?Oo(r,i):"single"
window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),r&&No(t,i,r,o,e)||(1==i?r?Fo(t,r,o,e):De(e)==n.scroller&&ze(e):2==i?(r&&mi(t.doc,r),setTimeout(function(){return n.input.focus()},20)):3==i&&(ja?t.display.input.onContextMenu(e):Fn(t)))}}}function No(e,t,n,r,i){var o="Click"
return"double"==r?o="Double"+o:"triple"==r&&(o="Triple"+o),o=(1==t?"Left":2==t?"Middle":"Right")+o,_o(e,co(o,i),i,function(t){if("string"==typeof t&&(t=Vs[t]),!t)return!1
var r=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r=t(e,n)!=Va}finally{e.state.suppressEdits=!1}return r})}function qo(e,t,n){var r=e.getOption("configureMouse"),i=r?r(e,t,n):{}
if(null==i.unit){var o=Fa?n.shiftKey&&n.metaKey:n.altKey
i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||n.shiftKey),null==i.addNew&&(i.addNew=qa?n.metaKey:n.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(qa?n.altKey:n.ctrlKey)),i}function Fo(e,t,n,r){wa?setTimeout(c(qn,e),0):e.curOp.focus=a()
var i,o=qo(e,n,r),s=e.doc.sel
e.options.dragDrop&&as&&!e.isReadOnly()&&"single"==n&&(i=s.contains(t))>-1&&(D((i=s.ranges[i]).from(),t)<0||t.xRel>0)&&(D(i.to(),t)>0||t.xRel<0)?Do(e,r,t,o):Po(e,r,t,o)}function Do(e,t,n,r){var i=e.display,o=!1,a=mr(e,function(t){Ca&&(i.scroller.draggable=!1),e.state.draggingText=!1,Me(i.wrapper.ownerDocument,"mouseup",a),Me(i.wrapper.ownerDocument,"mousemove",s),Me(i.scroller,"dragstart",l),Me(i.scroller,"drop",a),o||(ze(t),r.addNew||mi(e.doc,n,null,null,r.extend),Ca||wa&&9==_a?setTimeout(function(){i.wrapper.ownerDocument.body.focus(),i.input.focus()},20):i.input.focus())}),s=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},l=function(){return o=!0}
Ca&&(i.scroller.draggable=!0),e.state.draggingText=a,a.copy=!r.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),os(i.wrapper.ownerDocument,"mouseup",a),os(i.wrapper.ownerDocument,"mousemove",s),os(i.scroller,"dragstart",l),os(i.scroller,"drop",a),Fn(e),setTimeout(function(){return i.input.focus()},20)}function Io(e,t,n){if("char"==n)return new Ns(t,t)
if("word"==n)return e.findWordAt(t)
if("line"==n)return new Ns(F(t.line,0),W(e.doc,F(t.line+1,0)))
var r=n(e,t)
return new Ns(r.from,r.to)}function Po(e,t,n,r){function i(t){if(0!=D(v,t))if(v=t,"rectangle"==r.unit){for(var i=[],o=e.options.tabSize,a=d(L(c,n.line).text,n.ch,o),s=d(L(c,t.line).text,t.ch,o),l=Math.min(a,s),m=Math.max(a,s),g=Math.min(n.line,t.line),y=Math.min(e.lastLine(),Math.max(n.line,t.line));g<=y;g++){var b=L(c,g).text,k=p(b,l,o)
l==m?i.push(new Ns(F(g,k),F(g,k))):b.length>k&&i.push(new Ns(F(g,k),F(g,p(b,m,o))))}i.length||i.push(new Ns(n,n)),xi(c,jr(e,h.ranges.slice(0,f).concat(i),f),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var x,w=u,_=Io(e,t,r.unit),C=w.anchor
D(_.anchor,C)>0?(x=_.head,C=j(w.from(),_.anchor)):(x=_.anchor,C=R(w.to(),_.head))
var S=h.ranges.slice(0)
S[f]=Ro(e,new Ns(W(c,C),x)),xi(c,jr(e,S,f),Za)}}function o(t){var n=++b,s=Mn(e,t,!0,"rectangle"==r.unit)
if(s)if(0!=D(s,v)){e.curOp.focus=a(),i(s)
var u=jn(l,c);(s.line>=u.to||s.line<u.from)&&setTimeout(mr(e,function(){b==n&&o(t)}),150)}else{var d=t.clientY<y.top?-20:t.clientY>y.bottom?20:0
d&&setTimeout(mr(e,function(){b==n&&(l.scroller.scrollTop+=d,o(t))}),50)}}function s(t){e.state.selectingText=!1,b=1/0,ze(t),l.input.focus(),Me(l.wrapper.ownerDocument,"mousemove",k),Me(l.wrapper.ownerDocument,"mouseup",x),c.history.lastSelOrigin=null}var l=e.display,c=e.doc
ze(t)
var u,f,h=c.sel,m=h.ranges
if(r.addNew&&!r.extend?(f=c.sel.contains(n),u=f>-1?m[f]:new Ns(n,n)):(u=c.sel.primary(),f=c.sel.primIndex),"rectangle"==r.unit)r.addNew||(u=new Ns(n,n)),n=Mn(e,t,!0,!0),f=-1
else{var g=Io(e,n,r.unit)
u=r.extend?hi(u,g.anchor,g.head,r.extend):g}r.addNew?f==-1?(f=m.length,xi(c,jr(e,m.concat([u]),f),{scroll:!1,origin:"*mouse"})):m.length>1&&m[f].empty()&&"char"==r.unit&&!r.extend?(xi(c,jr(e,m.slice(0,f).concat(m.slice(f+1)),0),{scroll:!1,origin:"*mouse"}),h=c.sel):vi(c,f,u,Za):(f=0,xi(c,new zs([u],0),Za),h=c.sel)
var v=n,y=l.wrapper.getBoundingClientRect(),b=0,k=mr(e,function(e){0!==e.buttons&&Ie(e)?o(e):s(e)}),x=mr(e,s)
e.state.selectingText=x,os(l.wrapper.ownerDocument,"mousemove",k),os(l.wrapper.ownerDocument,"mouseup",x)}function Ro(e,t){var n=t.anchor,r=t.head,i=L(e.doc,n.line)
if(0==D(n,r)&&n.sticky==r.sticky)return t
var o=Ce(i)
if(!o)return t
var a=_e(o,n.ch,n.sticky),s=o[a]
if(s.from!=n.ch&&s.to!=n.ch)return t
var l=a+(s.from==n.ch==(1!=s.level)?0:1)
if(0==l||l==o.length)return t
var c
if(r.line!=n.line)c=(r.line-n.line)*("ltr"==e.doc.direction?1:-1)>0
else{var u=_e(o,r.ch,r.sticky),d=u-a||(r.ch-n.ch)*(1==s.level?-1:1)
c=u==l-1||u==l?d<0:d>0}var f=o[l+(c?-1:0)],p=c==(1==f.level),h=p?f.from:f.to,m=p?"after":"before"
return n.ch==h&&n.sticky==m?t:new Ns(new F(n.line,h,m),r)}function jo(e,t,n,r){var i,o
if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY
else try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
r&&ze(t)
var a=e.display,s=a.lineDiv.getBoundingClientRect()
if(o>s.bottom||!Ee(e,n))return qe(t)
o-=s.top-a.viewOffset
for(var l=0;l<e.options.gutters.length;++l){var c=a.gutters.childNodes[l]
if(c&&c.getBoundingClientRect().right>=i){var u=z(e.doc,o),d=e.options.gutters[l]
return Le(e,n,e,u,d,t),qe(t)}}}function Bo(e,t){return jo(e,t,"gutterClick",!0)}function Wo(e,t){Dt(e.display,t)||Ho(e,t)||Te(e,t,"contextmenu")||ja||e.display.input.onContextMenu(t)}function Ho(e,t){return!!Ee(e,"gutterContextMenu")&&jo(e,t,"gutterContextMenu",!1)}function Uo(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),nn(e)}function $o(e){function t(t,r,i,o){e.defaults[t]=r,i&&(n[t]=o?function(e,t,n){n!=el&&i(e,t,n)}:i)}var n=e.optionHandlers
e.defineOption=t,e.Init=el,t("value","",function(e,t){return e.setValue(t)},!0),t("mode",null,function(e,t){e.doc.modeOption=t,Vr(e)},!0),t("indentUnit",2,Vr,!0),t("indentWithTabs",!1),t("smartIndent",!0),t("tabSize",4,function(e){Gr(e),nn(e),yr(e)},!0),t("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var n=[],r=e.doc.first
e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(o==-1)break
i=o+t.length,n.push(F(r,o))}r++})
for(var i=n.length-1;i>=0;i--)Ii(e.doc,t,n[i],F(n[i].line,n[i].ch+t.length))}}),t("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,n){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),n!=el&&e.refresh()}),t("specialCharPlaceholder",ut,function(e){return e.refresh()},!0),t("electricChars",!0),t("inputStyle",Na?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),t("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),t("autocorrect",!1,function(e,t){return e.getInputField().autocorrect=t},!0),t("autocapitalize",!1,function(e,t){return e.getInputField().autocapitalize=t},!0),t("rtlMoveVisually",!Da),t("wholeLineUpdateBefore",!0),t("theme","default",function(e){Uo(e),Ko(e)},!0),t("keyMap","default",function(e,t,n){var r=fo(t),i=n!=el&&fo(n)
i&&i.detach&&i.detach(e,r),r.attach&&r.attach(e,i||null)}),t("extraKeys",null),t("configureMouse",null),t("lineWrapping",!1,Go,!0),t("gutters",[],function(e){Dr(e.options),Ko(e)},!0),t("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?_n(e.display)+"px":"0",e.refresh()},!0),t("coverGutterNextToScrollbar",!1,function(e){return rr(e)},!0),t("scrollbarStyle","native",function(e){or(e),rr(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),t("lineNumbers",!1,function(e){Dr(e.options),Ko(e)},!0),t("firstLineNumber",1,Ko,!0),t("lineNumberFormatter",function(e){return e},Ko,!0),t("showCursorWhenSelecting",!1,Tn,!0),t("resetSelectionOnContextMenu",!0),t("lineWiseCopyCut",!0),t("pasteLinesPerSelection",!0),t("selectionsMayTouch",!1),t("readOnly",!1,function(e,t){"nocursor"==t&&(In(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),t("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),t("dragDrop",!0,Vo),t("allowDropFileTypes",null),t("cursorBlinkRate",530),t("cursorScrollMargin",0),t("cursorHeight",1,Tn,!0),t("singleCursorHeightPerLine",!0,Tn,!0),t("workTime",100),t("workDelay",100),t("flattenSpans",!0,Gr,!0),t("addModeClass",!1,Gr,!0),t("pollInterval",100),t("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),t("historyEventDelay",1250),t("viewportMargin",10,function(e){return e.refresh()},!0),t("maxHighlightLength",1e4,Gr,!0),t("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),t("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),t("autofocus",null),t("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0),t("phrases",null)}function Ko(e){Fr(e),yr(e),Bn(e)}function Vo(e,t,n){var r=n&&n!=el
if(!t!=!r){var i=e.display.dragFunctions,o=t?os:Me
o(e.display.scroller,"dragstart",i.start),o(e.display.scroller,"dragenter",i.enter),o(e.display.scroller,"dragover",i.over),o(e.display.scroller,"dragleave",i.leave),o(e.display.scroller,"drop",i.drop)}}function Go(e){e.options.lineWrapping?(s(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ba(e.display.wrapper,"CodeMirror-wrap"),xe(e)),Sn(e),yr(e),nn(e),setTimeout(function(){return rr(e)},100)}function Zo(e,t){var n=this
if(!(this instanceof Zo))return new Zo(e,t)
this.options=t=t?u(t):{},u(tl,t,!1),Dr(t)
var r=t.value
"string"==typeof r?r=new Rs(r,t.mode,null,t.lineSeparator,t.direction):t.mode&&(r.modeOption=t.mode),this.doc=r
var i=new Zo.inputStyles[t.inputStyle](this),o=this.display=new M(e,r,i)
o.wrapper.CodeMirror=this,Fr(this),Uo(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),or(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new Ha,keySeq:null,specialChars:null},t.autofocus&&!Na&&o.input.focus(),wa&&_a<11&&setTimeout(function(){return n.display.input.reset(!0)},20),Xo(this),no(),ar(this),this.curOp.forceUpdate=!0,Yr(this,r),t.autofocus&&!Na||this.hasFocus()?setTimeout(c(Dn,this),20):In(this)
for(var a in nl)nl.hasOwnProperty(a)&&nl[a](n,t[a],el)
Wn(this),t.finishInit&&t.finishInit(this)
for(var s=0;s<rl.length;++s)rl[s](n)
sr(this),Ca&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}function Xo(e){function t(){i.activeTouch&&(o=setTimeout(function(){return i.activeTouch=null},1e3),a=i.activeTouch,a.end=+new Date)}function n(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}function r(e,t){if(null==t.left)return!0
var n=t.left-e.left,r=t.top-e.top
return n*n+r*r>400}var i=e.display
os(i.scroller,"mousedown",mr(e,zo)),wa&&_a<11?os(i.scroller,"dblclick",mr(e,function(t){if(!Te(e,t)){var n=Mn(e,t)
if(n&&!Bo(e,t)&&!Dt(e.display,t)){ze(t)
var r=e.findWordAt(n)
mi(e.doc,r.anchor,r.head)}}})):os(i.scroller,"dblclick",function(t){return Te(e,t)||ze(t)}),os(i.scroller,"contextmenu",function(t){return Wo(e,t)})
var o,a={end:0}
os(i.scroller,"touchstart",function(t){if(!Te(e,t)&&!n(t)&&!Bo(e,t)){i.input.ensurePolled(),clearTimeout(o)
var r=+new Date
i.activeTouch={start:r,moved:!1,prev:r-a.end<=300?a:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY)}}),os(i.scroller,"touchmove",function(){i.activeTouch&&(i.activeTouch.moved=!0)}),os(i.scroller,"touchend",function(n){var o=i.activeTouch
if(o&&!Dt(i,n)&&null!=o.left&&!o.moved&&new Date-o.start<300){var a,s=e.coordsChar(i.activeTouch,"page")
a=!o.prev||r(o,o.prev)?new Ns(s,s):!o.prev.prev||r(o,o.prev.prev)?e.findWordAt(s):new Ns(F(s.line,0),W(e.doc,F(s.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),ze(n)}t()}),os(i.scroller,"touchcancel",t),os(i.scroller,"scroll",function(){i.scroller.clientHeight&&(Jn(e,i.scroller.scrollTop),tr(e,i.scroller.scrollLeft,!0),Le(e,"scroll",e))}),os(i.scroller,"mousewheel",function(t){return Rr(e,t)}),os(i.scroller,"DOMMouseScroll",function(t){return Rr(e,t)}),os(i.wrapper,"scroll",function(){return i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),i.dragFunctions={enter:function(t){Te(e,t)||Fe(t)},over:function(t){Te(e,t)||(Ji(e,t),Fe(t))},start:function(t){return Yi(e,t)},drop:mr(e,Qi),leave:function(t){Te(e,t)||eo(e)}}
var s=i.input.getField()
os(s,"keyup",function(t){return Ao.call(e,t)}),os(s,"keydown",mr(e,Lo)),os(s,"keypress",mr(e,Eo)),os(s,"focus",function(t){return Dn(e,t)}),os(s,"blur",function(t){return In(e,t)})}function Qo(e,t,n,r){var i,o=e.doc
null==n&&(n="add"),"smart"==n&&(o.mode.indent?i=Qe(e,t).state:n="prev")
var a=e.options.tabSize,s=L(o,t),l=d(s.text,null,a)
s.stateAfter&&(s.stateAfter=null)
var c,u=s.text.match(/^\s*/)[0]
if(r||/\S/.test(s.text)){if("smart"==n&&(c=o.mode.indent(i,s.text.slice(u.length),s.text),c==Va||c>150)){if(!r)return
n="prev"}}else c=0,n="not"
"prev"==n?c=t>o.first?d(L(o,t-1).text,null,a):0:"add"==n?c=l+e.options.indentUnit:"subtract"==n?c=l-e.options.indentUnit:"number"==typeof n&&(c=l+n),c=Math.max(0,c)
var f="",p=0
if(e.options.indentWithTabs)for(var m=Math.floor(c/a);m;--m)p+=a,f+="\t"
if(p<c&&(f+=h(c-p)),f!=u)return Ii(o,f,F(t,0),F(t,u.length),"+input"),s.stateAfter=null,!0
for(var g=0;g<o.sel.ranges.length;g++){var v=o.sel.ranges[g]
if(v.head.line==t&&v.head.ch<u.length){var y=F(t,u.length)
vi(o,g,new Ns(y,y))
break}}}function Yo(e){il=e}function Jo(e,t,n,r,i){var o=e.doc
e.display.shift=!1,r||(r=o.sel)
var a=+new Date-200,s="paste"==i||e.state.pasteIncoming>a,l=ss(t),c=null
if(s&&r.ranges.length>1)if(il&&il.text.join("\n")==t){if(r.ranges.length%il.text.length==0){c=[]
for(var u=0;u<il.text.length;u++)c.push(o.splitLines(il.text[u]))}}else l.length==r.ranges.length&&e.options.pasteLinesPerSelection&&(c=g(l,function(e){return[e]}))
for(var d=e.curOp.updateInput,f=r.ranges.length-1;f>=0;f--){var p=r.ranges[f],h=p.from(),v=p.to()
p.empty()&&(n&&n>0?h=F(h.line,h.ch-n):e.state.overwrite&&!s?v=F(v.line,Math.min(L(o,v.line).text.length,v.ch+m(l).length)):s&&il&&il.lineWise&&il.text.join("\n")==t&&(h=v=F(h.line,0)))
var y={from:h,to:v,text:c?c[f%c.length]:l,origin:i||(s?"paste":e.state.cutIncoming>a?"cut":"+input")}
Oi(e.doc,y),xt(e,"inputRead",e,y)}t&&!s&&ta(e,t),Gn(e),e.curOp.updateInput<2&&(e.curOp.updateInput=d),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function ea(e,t){var n=e.clipboardData&&e.clipboardData.getData("Text")
if(n)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||hr(t,function(){return Jo(t,n,0,null,"paste")}),!0}function ta(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var n=e.doc.sel,r=n.ranges.length-1;r>=0;r--){var i=n.ranges[r]
if(!(i.head.ch>100||r&&n.ranges[r-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1
if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){a=Qo(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(L(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=Qo(e,i.head.line,"smart"))
a&&xt(e,"electricInput",e,i.head.line)}}}function na(e){for(var t=[],n=[],r=0;r<e.doc.sel.ranges.length;r++){var i=e.doc.sel.ranges[r].head.line,o={anchor:F(i,0),head:F(i+1,0)}
n.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:n}}function ra(e,t,n,r){e.setAttribute("autocorrect",!!n),e.setAttribute("autocapitalize",!!r),e.setAttribute("spellcheck",!!t)}function ia(){var e=r("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=r("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return Ca?e.style.width="1000px":e.setAttribute("wrap","off"),Oa&&(e.style.border="1px solid black"),ra(e),t}function oa(e){var t=e.optionHandlers,n=e.helpers={}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,n){var r=this.options,i=r[e]
r[e]==n&&"mode"!=e||(r[e]=n,t.hasOwnProperty(e)&&mr(this,t[e])(this,n,i),Le(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](fo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,n=0;n<t.length;++n)if(t[n]==e||t[n].name==e)return t.splice(n,1),!0},addOverlay:gr(function(t,n){var r=t.token?t:e.getMode(this.options,t)
if(r.startState)throw new Error("Overlays may not be stateful.")
v(this.state.overlays,{mode:r,modeSpec:t,opaque:n&&n.opaque,priority:n&&n.priority||0},function(e){return e.priority}),this.state.modeGen++,yr(this)}),removeOverlay:gr(function(e){for(var t=this,n=this.state.overlays,r=0;r<n.length;++r){var i=n[r].modeSpec
if(i==e||"string"==typeof e&&i.name==e)return n.splice(r,1),t.state.modeGen++,void yr(t)}}),indentLine:gr(function(e,t,n){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),N(this.doc,e)&&Qo(this,e,t,n)}),indentSelection:gr(function(e){for(var t=this,n=this.doc.sel.ranges,r=-1,i=0;i<n.length;i++){var o=n[i]
if(o.empty())o.head.line>r&&(Qo(t,o.head.line,e,!0),r=o.head.line,i==t.doc.sel.primIndex&&Gn(t))
else{var a=o.from(),s=o.to(),l=Math.max(r,a.line)
r=Math.min(t.lastLine(),s.line-(s.ch?0:1))+1
for(var c=l;c<r;++c)Qo(t,c,e)
var u=t.doc.sel.ranges
0==a.ch&&n.length==u.length&&u[i].from().ch>0&&vi(t.doc,i,new Ns(a,u[i].to()),Ga)}}}),getTokenAt:function(e,t){return tt(this,e,t)},getLineTokens:function(e,t){return tt(this,F(e),t,!0)},getTokenTypeAt:function(e){e=W(this.doc,e)
var t,n=Xe(this,L(this.doc,e.line)),r=0,i=(n.length-1)/2,o=e.ch
if(0==o)t=n[2]
else for(;;){var a=r+i>>1
if((a?n[2*a-1]:0)>=o)i=a
else{if(!(n[2*a+1]<o)){t=n[2*a+2]
break}r=a+1}}var s=t?t.indexOf("overlay "):-1
return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var n=this.doc.mode
return n.innerMode?e.innerMode(n,this.getTokenAt(t).state).mode:n},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=this,i=[]
if(!n.hasOwnProperty(t))return i
var o=n[t],a=this.getModeAt(e)
if("string"==typeof a[t])o[a[t]]&&i.push(o[a[t]])
else if(a[t])for(var s=0;s<a[t].length;s++){var l=o[a[t][s]]
l&&i.push(l)}else a.helperType&&o[a.helperType]?i.push(o[a.helperType]):o[a.name]&&i.push(o[a.name])
for(var c=0;c<o._global.length;c++){var u=o._global[c]
u.pred(a,r)&&f(i,u.val)==-1&&i.push(u.val)}return i},getStateAfter:function(e,t){var n=this.doc
return e=B(n,null==e?n.first+n.size-1:e),Qe(this,e+1,t).state},cursorCoords:function(e,t){var n,r=this.doc.sel.primary()
return n=null==e?r.head:"object"==typeof e?W(this.doc,e):e?r.from():r.to(),un(this,n,t||"page")},charCoords:function(e,t){return cn(this,W(this.doc,e),t||"page")},coordsChar:function(e,t){return e=ln(this,e,t||"page"),pn(this,e.left,e.top)},lineAtHeight:function(e,t){return e=ln(this,{top:e,left:0},t||"page").top,z(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,n){var r,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),r=L(this.doc,e)}else r=e
return sn(this,r,{top:0,left:0},t||"page",n||i).top+(i?this.doc.height-be(r):0)},defaultTextHeight:function(){return kn(this.display)},defaultCharWidth:function(){return xn(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,n,r,i){var o=this.display
e=un(this,W(this.doc,e))
var a=e.bottom,s=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==r)a=e.top
else if("above"==r||"near"==r){var l=Math.max(o.wrapper.clientHeight,this.doc.height),c=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==r||e.bottom+t.offsetHeight>l)&&e.top>t.offsetHeight?a=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=l&&(a=e.bottom),s+t.offsetWidth>c&&(s=c-t.offsetWidth)}t.style.top=a+"px",t.style.left=t.style.right="","right"==i?(s=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?s=0:"middle"==i&&(s=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=s+"px"),n&&$n(this,{left:s,top:a,right:s+t.offsetWidth,bottom:a+t.offsetHeight})},triggerOnKeyDown:gr(Lo),triggerOnKeyPress:gr(Eo),triggerOnKeyUp:Ao,triggerOnMouseDown:gr(zo),execCommand:function(e){if(Vs.hasOwnProperty(e))return Vs[e].call(null,this)},triggerElectric:gr(function(e){ta(this,e)}),findPosH:function(e,t,n,r){var i=this,o=1
t<0&&(o=-1,t=-t)
for(var a=W(this.doc,e),s=0;s<t&&(a=aa(i.doc,a,o,n,r),!a.hitSide);++s);return a},moveH:gr(function(e,t){var n=this
this.extendSelectionsBy(function(r){return n.display.shift||n.doc.extend||r.empty()?aa(n.doc,r.head,e,t,n.options.rtlMoveVisually):e<0?r.from():r.to()},Xa)}),deleteH:gr(function(e,t){var n=this.doc.sel,r=this.doc
n.somethingSelected()?r.replaceSelection("",null,"+delete"):po(this,function(n){var i=aa(r,n.head,e,t,!1)
return e<0?{from:i,to:n.head}:{from:n.head,to:i}})}),findPosV:function(e,t,n,r){var i=this,o=1,a=r
t<0&&(o=-1,t=-t)
for(var s=W(this.doc,e),l=0;l<t;++l){var c=un(i,s,"div")
if(null==a?a=c.left:c.left=a,s=sa(i,c,o,n),s.hitSide)break}return s},moveV:gr(function(e,t){var n=this,r=this.doc,i=[],o=!this.display.shift&&!r.extend&&r.sel.somethingSelected()
if(r.extendSelectionsBy(function(a){if(o)return e<0?a.from():a.to()
var s=un(n,a.head,"div")
null!=a.goalColumn&&(s.left=a.goalColumn),i.push(s.left)
var l=sa(n,s,e,t)
return"page"==t&&a==r.sel.primary()&&Vn(n,cn(n,l,"div").top-s.top),l},Xa),i.length)for(var a=0;a<r.sel.ranges.length;a++)r.sel.ranges[a].goalColumn=i[a]}),findWordAt:function(e){var t=this.doc,n=L(t,e.line).text,r=e.ch,i=e.ch
if(n){var o=this.getHelper(e,"wordChars")
"before"!=e.sticky&&i!=n.length||!r?++i:--r
for(var a=n.charAt(r),s=x(a,o)?function(e){return x(e,o)}:/\s/.test(a)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!x(e)};r>0&&s(n.charAt(r-1));)--r
for(;i<n.length&&s(n.charAt(i));)++i}return new Ns(F(e.line,r),F(e.line,i))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?s(this.display.cursorDiv,"CodeMirror-overwrite"):Ba(this.display.cursorDiv,"CodeMirror-overwrite"),Le(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==a()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:gr(function(e,t){Zn(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-jt(this)-this.display.barHeight,width:e.scrollWidth-jt(this)-this.display.barWidth,clientHeight:Wt(this),clientWidth:Bt(this)}},scrollIntoView:gr(function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:F(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?Xn(this,e):Yn(this,e.from,e.to,e.margin)}),setSize:gr(function(e,t){var n=this,r=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=r(e)),null!=t&&(this.display.wrapper.style.height=r(t)),this.options.lineWrapping&&tn(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){br(n,i,"widget")
break}++i}),this.curOp.forceUpdate=!0,Le(this,"refresh",this)}),operation:function(e){return hr(this,e)},startOperation:function(){return ar(this)},endOperation:function(){return sr(this)},refresh:gr(function(){var e=this.display.cachedTextHeight
yr(this),this.curOp.forceUpdate=!0,nn(this),Zn(this,this.doc.scrollLeft,this.doc.scrollTop),Nr(this),(null==e||Math.abs(e-kn(this.display))>.5)&&Sn(this),Le(this,"refresh",this)}),swapDoc:gr(function(e){var t=this.doc
return t.cm=null,Yr(this,e),nn(this),this.display.input.reset(),Zn(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,xt(this,"swapDoc",this,t),t}),phrase:function(e){var t=this.options.phrases
return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Oe(e),e.registerHelper=function(t,r,i){n.hasOwnProperty(t)||(n[t]=e[t]={_global:[]}),n[t][r]=i},e.registerGlobalHelper=function(t,r,i,o){e.registerHelper(t,r,o),n[t]._global.push({pred:i,val:o})}}function aa(e,t,n,r,i){function o(){var r=t.line+n
return!(r<e.first||r>=e.first+e.size)&&(t=new F(r,t.ch,t.sticky),c=L(e,r))}function a(r){var a
if(a=i?vo(e.cm,c,t,n):mo(c,t,n),null==a){if(r||!o())return!1
t=go(i,e.cm,c,t.line,n)}else t=a
return!0}var s=t,l=n,c=L(e,t.line)
if("char"==r)a()
else if("column"==r)a(!0)
else if("word"==r||"group"==r)for(var u=null,d="group"==r,f=e.cm&&e.cm.getHelper(t,"wordChars"),p=!0;!(n<0)||a(!p);p=!1){var h=c.text.charAt(t.ch)||"\n",m=x(h,f)?"w":d&&"\n"==h?"n":!d||/\s/.test(h)?null:"p"
if(!d||p||m||(m="s"),u&&u!=m){n<0&&(n=1,a(),t.sticky="after")
break}if(m&&(u=m),n>0&&!a(!p))break}var g=Li(e,t,s,l,!0)
return I(s,g)&&(g.hitSide=!0),g}function sa(e,t,n,r){var i,o=e.doc,a=t.left
if("page"==r){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),l=Math.max(s-.5*kn(e.display),3)
i=(n>0?t.bottom:t.top)+n*l}else"line"==r&&(i=n>0?t.bottom+3:t.top-3)
for(var c;c=pn(e,a,i),c.outside;){if(n<0?i<=0:i>=o.height){c.hitSide=!0
break}i+=5*n}return c}function la(e,t){var n=Vt(e,t.line)
if(!n||n.hidden)return null
var r=L(e.doc,t.line),i=Ut(n,r,t.line),o=Ce(r,e.doc.direction),a="left"
if(o){var s=_e(o,t.ch)
a=s%2?"right":"left"}var l=Xt(i.map,t.ch,a)
return l.offset="right"==l.collapse?l.end:l.start,l}function ca(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0
return!1}function ua(e,t){return t&&(e.bad=!0),e}function da(e,t,n,r,i){function o(e){return function(t){return t.id==e}}function a(){u&&(c+=d,f&&(c+=d),u=f=!1)}function s(e){e&&(a(),c+=e)}function l(t){if(1==t.nodeType){var n=t.getAttribute("cm-text")
if(n)return void s(n)
var c,p=t.getAttribute("cm-marker")
if(p){var h=e.findMarks(F(r,0),F(i+1,0),o(+p))
return void(h.length&&(c=h[0].find(0))&&s(T(e.doc,c.from,c.to).join(d)))}if("false"==t.getAttribute("contenteditable"))return
var m=/^(pre|div|p|li|table|br)$/i.test(t.nodeName)
if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return
m&&a()
for(var g=0;g<t.childNodes.length;g++)l(t.childNodes[g]);/^(pre|p)$/i.test(t.nodeName)&&(f=!0),m&&(u=!0)}else 3==t.nodeType&&s(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(var c="",u=!1,d=e.doc.lineSeparator(),f=!1;l(t),t!=n;)t=t.nextSibling,f=!1
return c}function fa(e,t,n){var r
if(t==e.display.lineDiv){if(r=e.display.lineDiv.childNodes[n],!r)return ua(e.clipPos(F(e.display.viewTo-1)),!0)
t=null,n=0}else for(r=t;;r=r.parentNode){if(!r||r==e.display.lineDiv)return null
if(r.parentNode&&r.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==r)return pa(o,t,n)}}function pa(e,t,n){function r(t,n,r){for(var i=-1;i<(d?d.length:0);i++)for(var o=i<0?u.map:d[i],a=0;a<o.length;a+=3){var s=o[a+2]
if(s==t||s==n){var l=O(i<0?e.line:e.rest[i]),c=o[a]+r
return(r<0||s!=t)&&(c=o[a+(r?1:0)]),F(l,c)}}}var i=e.text.firstChild,a=!1
if(!t||!o(i,t))return ua(F(O(e.line),0),!0)
if(t==i&&(a=!0,t=i.childNodes[n],n=0,!t)){var s=e.rest?m(e.rest):e.line
return ua(F(O(s),s.text.length),a)}var l=3==t.nodeType?t:null,c=t
for(l||1!=t.childNodes.length||3!=t.firstChild.nodeType||(l=t.firstChild,n&&(n=l.nodeValue.length));c.parentNode!=i;)c=c.parentNode
var u=e.measure,d=u.maps,f=r(l,c,n)
if(f)return ua(f,a)
for(var p=c.nextSibling,h=l?l.nodeValue.length-n:0;p;p=p.nextSibling){if(f=r(p,p.firstChild,0))return ua(F(f.line,f.ch-h),a)
h+=p.textContent.length}for(var g=c.previousSibling,v=n;g;g=g.previousSibling){if(f=r(g,g.firstChild,-1))return ua(F(f.line,f.ch+v),a)
v+=g.textContent.length}}function ha(e,t){function n(){e.value=c.getValue()}if(t=t?u(t):{},t.value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var r=a()
t.autofocus=r==e||null!=e.getAttribute("autofocus")&&r==document.body}var i
if(e.form&&(os(e.form,"submit",n),!t.leaveSubmitMethodAlone)){var o=e.form
i=o.submit
try{var s=o.submit=function(){n(),o.submit=i,o.submit(),o.submit=s}}catch(l){}}t.finishInit=function(t){t.save=n,t.getTextArea=function(){return e},t.toTextArea=function(){t.toTextArea=isNaN,n(),e.parentNode.removeChild(t.getWrapperElement()),e.style.display="",e.form&&(Me(e.form,"submit",n),"function"==typeof e.form.submit&&(e.form.submit=i))}},e.style.display="none"
var c=Zo(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t)
return c}function ma(e){e.off=Me,e.on=os,e.wheelEventPixels=Pr,e.Doc=Rs,e.splitLines=ss,e.countColumn=d,e.findColumn=p,e.isWordChar=k,e.Pass=Va,e.signal=Le,e.Line=ys,e.changeEnd=Wr,e.scrollbarModel=Ls,e.Pos=F,e.cmpPos=D,e.modes=ds,e.mimeModes=fs,e.resolveMode=He,e.getMode=Ue,e.modeExtensions=ps,e.extendMode=$e,e.copyState=Ke,e.startState=Ge,e.innerMode=Ve,e.commands=Vs,e.keyMap=Ks,e.keyName=uo,e.isModifierKey=lo,e.lookupKey=so,e.normalizeKeyMap=ao,e.StringStream=hs,e.SharedTextMarker=Is,e.TextMarker=Ds,e.LineWidget=qs,e.e_preventDefault=ze,e.e_stopPropagation=Ne,e.e_stop=Fe,e.addClass=s,e.contains=o,e.rmClass=Ba,e.keyNames=Ws}var ga=navigator.userAgent,va=navigator.platform,ya=/gecko\/\d/i.test(ga),ba=/MSIE \d/.test(ga),ka=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ga),xa=/Edge\/(\d+)/.exec(ga),wa=ba||ka||xa,_a=wa&&(ba?document.documentMode||6:+(xa||ka)[1]),Ca=!xa&&/WebKit\//.test(ga),Sa=Ca&&/Qt\/\d+\.\d+/.test(ga),Ma=!xa&&/Chrome\//.test(ga),La=/Opera\//.test(ga),Ta=/Apple Computer/.test(navigator.vendor),Aa=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ga),Ea=/PhantomJS/.test(ga),Oa=!xa&&/AppleWebKit/.test(ga)&&/Mobile\/\w+/.test(ga),za=/Android/.test(ga),Na=Oa||za||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ga),qa=Oa||/Mac/.test(va),Fa=/\bCrOS\b/.test(ga),Da=/win/i.test(va),Ia=La&&ga.match(/Version\/(\d*\.\d*)/)
Ia&&(Ia=Number(Ia[1])),Ia&&Ia>=15&&(La=!1,Ca=!0)
var Pa,Ra=qa&&(Sa||La&&(null==Ia||Ia<12.11)),ja=ya||wa&&_a>=9,Ba=function(t,n){var r=t.className,i=e(n).exec(r)
if(i){var o=r.slice(i.index+i[0].length)
t.className=r.slice(0,i.index)+(o?i[1]+o:"")}}
Pa=document.createRange?function(e,t,n,r){var i=document.createRange()
return i.setEnd(r||e,n),i.setStart(e,t),i}:function(e,t,n){var r=document.body.createTextRange()
try{r.moveToElementText(e.parentNode)}catch(i){return r}return r.collapse(!0),r.moveEnd("character",n),r.moveStart("character",t),r}
var Wa=function(e){e.select()}
Oa?Wa=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:wa&&(Wa=function(e){try{e.select()}catch(t){}})
var Ha=function(){this.id=null}
Ha.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var Ua,$a,Ka=30,Va={toString:function(){return"CodeMirror.Pass"}},Ga={scroll:!1},Za={origin:"*mouse"},Xa={origin:"+move"},Qa=[""],Ya=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Ja=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,es=!1,ts=!1,ns=null,rs=function(){function e(e){return e<=247?n.charAt(e):1424<=e&&e<=1524?"R":1536<=e&&e<=1785?r.charAt(e-1536):1774<=e&&e<=2220?"r":8192<=e&&e<=8203?"w":8204==e?"b":"L"}function t(e,t,n){this.level=e,this.from=t,this.to=n}var n="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",r="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,a=/[LRr]/,s=/[Lb1n]/,l=/[1n]/
return function(n,r){var c="ltr"==r?"L":"R"
if(0==n.length||"ltr"==r&&!i.test(n))return!1
for(var u=n.length,d=[],f=0;f<u;++f)d.push(e(n.charCodeAt(f)))
for(var p=0,h=c;p<u;++p){var g=d[p]
"m"==g?d[p]=h:h=g}for(var v=0,y=c;v<u;++v){var b=d[v]
"1"==b&&"r"==y?d[v]="n":a.test(b)&&(y=b,"r"==b&&(d[v]="R"))}for(var k=1,x=d[0];k<u-1;++k){var w=d[k]
"+"==w&&"1"==x&&"1"==d[k+1]?d[k]="1":","!=w||x!=d[k+1]||"1"!=x&&"n"!=x||(d[k]=x),x=w}for(var _=0;_<u;++_){var C=d[_]
if(","==C)d[_]="N"
else if("%"==C){var S=void 0
for(S=_+1;S<u&&"%"==d[S];++S);for(var M=_&&"!"==d[_-1]||S<u&&"1"==d[S]?"1":"N",L=_;L<S;++L)d[L]=M
_=S-1}}for(var T=0,A=c;T<u;++T){var E=d[T]
"L"==A&&"1"==E?d[T]="L":a.test(E)&&(A=E)}for(var O=0;O<u;++O)if(o.test(d[O])){var z=void 0
for(z=O+1;z<u&&o.test(d[z]);++z);for(var N="L"==(O?d[O-1]:c),q="L"==(z<u?d[z]:c),F=N==q?N?"L":"R":c,D=O;D<z;++D)d[D]=F
O=z-1}for(var I,P=[],R=0;R<u;)if(s.test(d[R])){var j=R
for(++R;R<u&&s.test(d[R]);++R);P.push(new t(0,j,R))}else{var B=R,W=P.length
for(++R;R<u&&"L"!=d[R];++R);for(var H=B;H<R;)if(l.test(d[H])){B<H&&P.splice(W,0,new t(1,B,H))
var U=H
for(++H;H<R&&l.test(d[H]);++H);P.splice(W,0,new t(2,U,H)),B=H}else++H
B<R&&P.splice(W,0,new t(1,B,R))}return"ltr"==r&&(1==P[0].level&&(I=n.match(/^\s+/))&&(P[0].from=I[0].length,P.unshift(new t(0,0,I[0].length))),1==m(P).level&&(I=n.match(/\s+$/))&&(m(P).to-=I[0].length,P.push(new t(0,u-I[0].length,u)))),"rtl"==r?P.reverse():P}}(),is=[],os=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1)
else if(e.attachEvent)e.attachEvent("on"+t,n)
else{var r=e._handlers||(e._handlers={})
r[t]=(r[t]||is).concat(n)}},as=function(){if(wa&&_a<9)return!1
var e=r("div")
return"draggable"in e||"dragDrop"in e}(),ss=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,n=[],r=e.length;t<=r;){var i=e.indexOf("\n",t)
i==-1&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r")
a!=-1?(n.push(o.slice(0,a)),t+=a+1):(n.push(o),t=i+1)}return n}:function(e){return e.split(/\r\n?|\n/)},ls=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(t){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(n){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},cs=function(){var e=r("div")
return"oncopy"in e||(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),us=null,ds={},fs={},ps={},hs=function(e,t,n){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=n}
hs.prototype.eol=function(){return this.pos>=this.string.length},hs.prototype.sol=function(){return this.pos==this.lineStart},hs.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},hs.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},hs.prototype.eat=function(e){var t,n=this.string.charAt(this.pos)
if(t="string"==typeof e?n==e:n&&(e.test?e.test(n):e(n)))return++this.pos,n},hs.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},hs.prototype.eatSpace=function(){for(var e=this,t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++e.pos
return this.pos>t},hs.prototype.skipToEnd=function(){this.pos=this.string.length},hs.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},hs.prototype.backUp=function(e){this.pos-=e},hs.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=d(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?d(this.string,this.lineStart,this.tabSize):0)},hs.prototype.indentation=function(){return d(this.string,null,this.tabSize)-(this.lineStart?d(this.string,this.lineStart,this.tabSize):0)},hs.prototype.match=function(e,t,n){if("string"!=typeof e){var r=this.string.slice(this.pos).match(e)
return r&&r.index>0?null:(r&&t!==!1&&(this.pos+=r[0].length),r)}var i=function(e){return n?e.toLowerCase():e},o=this.string.substr(this.pos,e.length)
if(i(o)==i(e))return t!==!1&&(this.pos+=e.length),!0},hs.prototype.current=function(){return this.string.slice(this.start,this.pos)},hs.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}},hs.prototype.lookAhead=function(e){var t=this.lineOracle
return t&&t.lookAhead(e)},hs.prototype.baseToken=function(){var e=this.lineOracle
return e&&e.baseToken(this.pos)}
var ms=function(e,t){this.state=e,this.lookAhead=t},gs=function(e,t,n,r){this.state=t,this.doc=e,this.line=n,this.maxLookAhead=r||0,this.baseTokens=null,this.baseTokenPos=1}
gs.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e)
return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},gs.prototype.baseToken=function(e){var t=this
if(!this.baseTokens)return null
for(;this.baseTokens[this.baseTokenPos]<=e;)t.baseTokenPos+=2
var n=this.baseTokens[this.baseTokenPos+1]
return{type:n&&n.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},gs.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},gs.fromSaved=function(e,t,n){return t instanceof ms?new gs(e,Ke(e.mode,t.state),n,t.lookAhead):new gs(e,Ke(e.mode,t),n)},gs.prototype.save=function(e){var t=e!==!1?Ke(this.doc.mode,this.state):this.state
return this.maxLookAhead>0?new ms(t,this.maxLookAhead):t}
var vs=function(e,t,n){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=n},ys=function(e,t,n){this.text=e,re(this,t),this.height=n?n(this):1}
ys.prototype.lineNo=function(){return O(this)},Oe(ys)
var bs,ks={},xs={},ws=null,_s=null,Cs={left:0,right:0,top:0,bottom:0},Ss=function(e,t,n){this.cm=n
var i=this.vert=r("div",[r("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=r("div",[r("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
i.tabIndex=o.tabIndex=-1,e(i),e(o),os(i,"scroll",function(){i.clientHeight&&t(i.scrollTop,"vertical")}),os(o,"scroll",function(){o.clientWidth&&t(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,wa&&_a<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
Ss.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,n=e.scrollHeight>e.clientHeight+1,r=e.nativeBarWidth
if(n){this.vert.style.display="block",this.vert.style.bottom=t?r+"px":"0"
var i=e.viewHeight-(t?r:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=n?r+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(n?r:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==r&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:n?r:0,bottom:t?r:0}},Ss.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Ss.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Ss.prototype.zeroWidthHack=function(){var e=qa&&!Aa?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new Ha,this.disableVert=new Ha},Ss.prototype.enableZeroWidthBar=function(e,t,n){function r(){var i=e.getBoundingClientRect(),o="vert"==n?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1)
o!=e?e.style.pointerEvents="none":t.set(1e3,r)}e.style.pointerEvents="auto",t.set(1e3,r)},Ss.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var Ms=function(){}
Ms.prototype.update=function(){return{bottom:0,right:0}},Ms.prototype.setScrollLeft=function(){},Ms.prototype.setScrollTop=function(){},Ms.prototype.clear=function(){}
var Ls={"native":Ss,"null":Ms},Ts=0,As=function(e,t,n){var r=e.display
this.viewport=t,this.visible=jn(r,e.doc,t),this.editorIsHidden=!r.wrapper.offsetWidth,this.wrapperHeight=r.wrapper.clientHeight,this.wrapperWidth=r.wrapper.clientWidth,this.oldDisplayWidth=Bt(e),this.force=n,this.dims=wn(e),this.events=[]}
As.prototype.signal=function(e,t){Ee(e,t)&&this.events.push(arguments)},As.prototype.finish=function(){for(var e=this,t=0;t<this.events.length;t++)Le.apply(null,e.events[t])}
var Es=0,Os=null
wa?Os=-.53:ya?Os=15:Ma?Os=-.7:Ta&&(Os=-1/3)
var zs=function(e,t){this.ranges=e,this.primIndex=t}
zs.prototype.primary=function(){return this.ranges[this.primIndex]},zs.prototype.equals=function(e){var t=this
if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var n=0;n<this.ranges.length;n++){var r=t.ranges[n],i=e.ranges[n]
if(!I(r.anchor,i.anchor)||!I(r.head,i.head))return!1}return!0},zs.prototype.deepCopy=function(){for(var e=this,t=[],n=0;n<this.ranges.length;n++)t[n]=new Ns(P(e.ranges[n].anchor),P(e.ranges[n].head))
return new zs(t,this.primIndex)},zs.prototype.somethingSelected=function(){for(var e=this,t=0;t<this.ranges.length;t++)if(!e.ranges[t].empty())return!0
return!1},zs.prototype.contains=function(e,t){var n=this
t||(t=e)
for(var r=0;r<this.ranges.length;r++){var i=n.ranges[r]
if(D(t,i.from())>=0&&D(e,i.to())<=0)return r}return-1}
var Ns=function(e,t){this.anchor=e,this.head=t}
Ns.prototype.from=function(){return j(this.anchor,this.head)},Ns.prototype.to=function(){return R(this.anchor,this.head)},Ns.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},Wi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var n=this,r=e,i=e+t;r<i;++r){var o=n.lines[r]
n.height-=o.height,st(o),xt(o,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,n){var r=this
this.height+=n,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var i=0;i<t.length;++i)t[i].parent=r},iterN:function(e,t,n){for(var r=this,i=e+t;e<i;++e)if(n(r.lines[e]))return!0}},Hi.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){var n=this
this.size-=t
for(var r=0;r<this.children.length;++r){var i=n.children[r],o=i.chunkSize()
if(e<o){var a=Math.min(t,o-e),s=i.height
if(i.removeInner(e,a),n.height-=s-i.height,o==a&&(n.children.splice(r--,1),i.parent=null),0==(t-=a))break
e=0}else e-=o}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Wi))){var l=[]
this.collapse(l),this.children=[new Wi(l)],this.children[0].parent=this}},collapse:function(e){for(var t=this,n=0;n<this.children.length;++n)t.children[n].collapse(e)},insertInner:function(e,t,n){var r=this
this.size+=t.length,this.height+=n
for(var i=0;i<this.children.length;++i){var o=r.children[i],a=o.chunkSize()
if(e<=a){if(o.insertInner(e,t,n),o.lines&&o.lines.length>50){for(var s=o.lines.length%25+25,l=s;l<o.lines.length;){var c=new Wi(o.lines.slice(l,l+=25))
o.height-=c.height,r.children.splice(++i,0,c),c.parent=r}o.lines=o.lines.slice(0,s),r.maybeSpill()}break}e-=a}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=e.children.splice(e.children.length-5,5),n=new Hi(t)
if(e.parent){e.size-=n.size,e.height-=n.height
var r=f(e.parent.children,e)
e.parent.children.splice(r+1,0,n)}else{var i=new Hi(e.children)
i.parent=e,e.children=[i,n],e=i}n.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,n){for(var r=this,i=0;i<this.children.length;++i){var o=r.children[i],a=o.chunkSize()
if(e<a){var s=Math.min(t,a-e)
if(o.iterN(e,s,n))return!0
if(0==(t-=s))break
e=0}else e-=a}}}
var qs=function(e,t,n){var r=this
if(n)for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i])
this.doc=e,this.node=t}
qs.prototype.clear=function(){var e=this,t=this.doc.cm,n=this.line.widgets,r=this.line,i=O(r)
if(null!=i&&n){for(var o=0;o<n.length;++o)n[o]==e&&n.splice(o--,1)
n.length||(r.widgets=null)
var a=Ft(this)
E(r,Math.max(0,r.height-a)),t&&(hr(t,function(){Ui(t,r,-a),br(t,i,"widget")}),xt(t,"lineWidgetCleared",t,this,i))}},qs.prototype.changed=function(){var e=this,t=this.height,n=this.doc.cm,r=this.line
this.height=null
var i=Ft(this)-t
i&&(ve(this.doc,r)||E(r,r.height+i),n&&hr(n,function(){n.curOp.forceUpdate=!0,Ui(n,r,i),xt(n,"lineWidgetChanged",n,e,O(r))}))},Oe(qs)
var Fs=0,Ds=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Fs}
Ds.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){var t=this.doc.cm,n=t&&!t.curOp
if(n&&ar(t),Ee(this,"clear")){var r=this.find()
r&&xt(this,"clear",r.from,r.to)}for(var i=null,o=null,a=0;a<this.lines.length;++a){var s=e.lines[a],l=G(s.markedSpans,e)
t&&!e.collapsed?br(t,O(s),"text"):t&&(null!=l.to&&(o=O(s)),null!=l.from&&(i=O(s))),s.markedSpans=Z(s.markedSpans,l),null==l.from&&e.collapsed&&!ve(e.doc,s)&&t&&E(s,kn(t.display))}if(t&&this.collapsed&&!t.options.lineWrapping)for(var c=0;c<this.lines.length;++c){var u=fe(e.lines[c]),d=ke(u)
d>t.display.maxLineLength&&(t.display.maxLine=u,t.display.maxLineLength=d,t.display.maxLineChanged=!0)}null!=i&&t&&this.collapsed&&yr(t,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&Ci(t.doc)),t&&xt(t,"markerCleared",t,this,i,o),n&&sr(t),this.parent&&this.parent.clear()}},Ds.prototype.find=function(e,t){var n=this
null==e&&"bookmark"==this.type&&(e=1)
for(var r,i,o=0;o<this.lines.length;++o){var a=n.lines[o],s=G(a.markedSpans,n)
if(null!=s.from&&(r=F(t?a:O(a),s.from),e==-1))return r
if(null!=s.to&&(i=F(t?a:O(a),s.to),1==e))return i}return r&&{from:r,to:i}},Ds.prototype.changed=function(){var e=this,t=this.find(-1,!0),n=this,r=this.doc.cm
t&&r&&hr(r,function(){var i=t.line,o=O(t.line),a=Vt(r,o)
if(a&&(en(a),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!ve(n.doc,i)&&null!=n.height){var s=n.height
n.height=null
var l=Ft(n)-s
l&&E(i,i.height+l)}xt(r,"markerChanged",r,e)})},Ds.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&f(t.maybeHiddenMarkers,this)!=-1||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},Ds.prototype.detachLine=function(e){if(this.lines.splice(f(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},Oe(Ds)
var Is=function(e,t){var n=this
this.markers=e,this.primary=t
for(var r=0;r<e.length;++r)e[r].parent=n}
Is.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var t=0;t<this.markers.length;++t)e.markers[t].clear()
xt(this,"clear")}},Is.prototype.find=function(e,t){return this.primary.find(e,t)},Oe(Is)
var Ps=0,Rs=function(e,t,n,r,i){if(!(this instanceof Rs))return new Rs(e,t,n,r,i)
null==n&&(n=0),Hi.call(this,[new Wi([new ys("",null)])]),this.first=n,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=n
var o=F(n,0)
this.sel=Br(o),this.history=new ti(null),this.id=++Ps,this.modeOption=t,this.lineSep=r,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Xr(this,{from:o,to:o,text:e}),xi(this,Br(o),Ga)}
Rs.prototype=b(Hi.prototype,{constructor:Rs,iter:function(e,t,n){n?this.iterN(e-this.first,t-e,n):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var n=0,r=0;r<t.length;++r)n+=t[r].height
this.insertInner(e-this.first,t,n)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=A(this,this.first,this.first+this.size)
return e===!1?t:t.join(e||this.lineSeparator())},setValue:vr(function(e){var t=F(this.first,0),n=this.first+this.size-1
Oi(this,{from:t,to:F(n,L(this,n).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Zn(this.cm,0,0),xi(this,Br(t),Ga)}),replaceRange:function(e,t,n,r){t=W(this,t),n=n?W(this,n):t,Ii(this,e,t,n,r)},getRange:function(e,t,n){var r=T(this,W(this,e),W(this,t))
return n===!1?r:r.join(n||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(N(this,e))return L(this,e)},getLineNumber:function(e){return O(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=L(this,e)),fe(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return W(this,e)},getCursor:function(e){var t,n=this.sel.primary()
return t=null==e||"head"==e?n.head:"anchor"==e?n.anchor:"end"==e||"to"==e||e===!1?n.to():n.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:vr(function(e,t,n){yi(this,W(this,"number"==typeof e?F(e,t||0):e),null,n)}),setSelection:vr(function(e,t,n){yi(this,W(this,e),W(this,t||e),n)}),extendSelection:vr(function(e,t,n){mi(this,W(this,e),t&&W(this,t),n)}),extendSelections:vr(function(e,t){gi(this,U(this,e),t)}),extendSelectionsBy:vr(function(e,t){var n=g(this.sel.ranges,e)
gi(this,U(this,n),t)}),setSelections:vr(function(e,t,n){var r=this
if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new Ns(W(r,e[o].anchor),W(r,e[o].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),xi(this,jr(this.cm,i,t),n)}}),addSelection:vr(function(e,t,n){var r=this.sel.ranges.slice(0)
r.push(new Ns(W(this,e),W(this,t||e))),xi(this,jr(this.cm,r,r.length-1),n)}),getSelection:function(e){for(var t,n=this,r=this.sel.ranges,i=0;i<r.length;i++){var o=T(n,r[i].from(),r[i].to())
t=t?t.concat(o):o}return e===!1?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=this,n=[],r=this.sel.ranges,i=0;i<r.length;i++){var o=T(t,r[i].from(),r[i].to())
e!==!1&&(o=o.join(e||t.lineSeparator())),n[i]=o}return n},replaceSelection:function(e,t,n){for(var r=[],i=0;i<this.sel.ranges.length;i++)r[i]=e
this.replaceSelections(r,t,n||"+input")},replaceSelections:vr(function(e,t,n){for(var r=this,i=[],o=this.sel,a=0;a<o.ranges.length;a++){var s=o.ranges[a]
i[a]={from:s.from(),to:s.to(),text:r.splitLines(e[a]),origin:n}}for(var l=t&&"end"!=t&&Kr(this,i,t),c=i.length-1;c>=0;c--)Oi(r,i[c])
l?ki(this,l):this.cm&&Gn(this.cm)}),undo:vr(function(){Ni(this,"undo")}),redo:vr(function(){Ni(this,"redo")}),undoSelection:vr(function(){Ni(this,"undo",!0)}),redoSelection:vr(function(){Ni(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,n=0,r=0;r<e.done.length;r++)e.done[r].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++n
return{undo:t,redo:n}},clearHistory:function(){this.history=new ti(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:pi(this.history.done),undone:pi(this.history.undone)}},setHistory:function(e){var t=this.history=new ti(this.history.maxGeneration)
t.done=pi(e.done.slice(0),null,!0),t.undone=pi(e.undone.slice(0),null,!0)},setGutterMarker:vr(function(e,t,n){return Bi(this,e,"gutter",function(e){var r=e.gutterMarkers||(e.gutterMarkers={})
return r[t]=n,!n&&w(r)&&(e.gutterMarkers=null),!0})}),clearGutter:vr(function(e){var t=this
this.iter(function(n){n.gutterMarkers&&n.gutterMarkers[e]&&Bi(t,n,"gutter",function(){return n.gutterMarkers[e]=null,w(n.gutterMarkers)&&(n.gutterMarkers=null),!0})})}),lineInfo:function(e){var t
if("number"==typeof e){if(!N(this,e))return null
if(t=e,e=L(this,e),!e)return null}else if(t=O(e),null==t)return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:vr(function(t,n,r){return Bi(this,t,"gutter"==n?"gutter":"class",function(t){var i="text"==n?"textClass":"background"==n?"bgClass":"gutter"==n?"gutterClass":"wrapClass"
if(t[i]){if(e(r).test(t[i]))return!1
t[i]+=" "+r}else t[i]=r
return!0})}),removeLineClass:vr(function(t,n,r){return Bi(this,t,"gutter"==n?"gutter":"class",function(t){var i="text"==n?"textClass":"background"==n?"bgClass":"gutter"==n?"gutterClass":"wrapClass",o=t[i]
if(!o)return!1
if(null==r)t[i]=null
else{var a=o.match(e(r))
if(!a)return!1
var s=a.index+a[0].length
t[i]=o.slice(0,a.index)+(a.index&&s!=o.length?" ":"")+o.slice(s)||null}return!0})}),addLineWidget:vr(function(e,t,n){return $i(this,e,t,n)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,n){return Ki(this,W(this,e),W(this,t),n,n&&n.type||"range")},setBookmark:function(e,t){var n={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return e=W(this,e),Ki(this,e,e,n,"bookmark")},findMarksAt:function(e){e=W(this,e)
var t=[],n=L(this,e.line).markedSpans
if(n)for(var r=0;r<n.length;++r){var i=n[r];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,n){e=W(this,e),t=W(this,t)
var r=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var a=o.markedSpans
if(a)for(var s=0;s<a.length;s++){var l=a[s]
null!=l.to&&i==e.line&&e.ch>=l.to||null==l.from&&i!=e.line||null!=l.from&&i==t.line&&l.from>=t.ch||n&&!n(l.marker)||r.push(l.marker.parent||l.marker)}++i}),r},getAllMarks:function(){var e=[]
return this.iter(function(t){var n=t.markedSpans
if(n)for(var r=0;r<n.length;++r)null!=n[r].from&&e.push(n[r].marker)}),e},posFromIndex:function(e){var t,n=this.first,r=this.lineSeparator().length
return this.iter(function(i){var o=i.text.length+r
return o>e?(t=e,!0):(e-=o,void++n)}),W(this,F(n,t))},indexFromPos:function(e){e=W(this,e)
var t=e.ch
if(e.line<this.first||e.ch<0)return 0
var n=this.lineSeparator().length
return this.iter(this.first,e.line,function(e){t+=e.text.length+n}),t},copy:function(e){var t=new Rs(A(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,n=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<n&&(n=e.to)
var r=new Rs(A(this,t,n),e.mode||this.modeOption,t,this.lineSep,this.direction)
return e.sharedHist&&(r.history=this.history),(this.linked||(this.linked=[])).push({doc:r,sharedHist:e.sharedHist}),r.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Zi(r,Gi(this)),r},unlinkDoc:function(e){var t=this
if(e instanceof Zo&&(e=e.doc),this.linked)for(var n=0;n<this.linked.length;++n){var r=t.linked[n]
if(r.doc==e){t.linked.splice(n,1),e.unlinkDoc(t),Xi(Gi(t))
break}}if(e.history==this.history){var i=[e.id]
Qr(e,function(e){return i.push(e.id)},!0),e.history=new ti(null),e.history.done=pi(this.history.done,i),e.history.undone=pi(this.history.undone,i)}},iterLinkedDocs:function(e){Qr(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):ss(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:vr(function(e){"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&ei(this.cm))})}),Rs.prototype.eachLine=Rs.prototype.iter
for(var js=0,Bs=!1,Ws={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Hs=0;Hs<10;Hs++)Ws[Hs+48]=Ws[Hs+96]=String(Hs)
for(var Us=65;Us<=90;Us++)Ws[Us]=String.fromCharCode(Us)
for(var $s=1;$s<=12;$s++)Ws[$s+111]=Ws[$s+63235]="F"+$s
var Ks={}
Ks.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ks.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ks.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ks.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ks["default"]=qa?Ks.macDefault:Ks.pcDefault
var Vs={selectAll:Ai,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Ga)},killLine:function(e){return po(e,function(t){if(t.empty()){var n=L(e.doc,t.head.line).text.length
return t.head.ch==n&&t.head.line<e.lastLine()?{from:t.head,to:F(t.head.line+1,0)}:{from:t.head,to:F(t.head.line,n)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){return po(e,function(t){return{from:F(t.from().line,0),to:W(e.doc,F(t.to().line+1,0))}})},delLineLeft:function(e){return po(e,function(e){return{from:F(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return po(e,function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div")
return{from:r,to:t.from()}})},delWrappedLineRight:function(e){return po(e,function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")
return{from:t.from(),to:r}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(F(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(F(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return yo(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return ko(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return bo(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var n=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")},Xa)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var n=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:n},"div")},Xa)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var n=e.cursorCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div")
return r.ch<e.getLine(r.line).search(/\S/)?ko(e,t.head):r},Xa)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],n=e.listSelections(),r=e.options.tabSize,i=0;i<n.length;i++){var o=n[i].from(),a=d(e.getLine(o.line),o.ch,r)
t.push(h(r-a%r))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return hr(e,function(){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++)if(t[r].empty()){var i=t[r].head,o=L(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new F(i.line,i.ch-1)),i.ch>0)i=new F(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),F(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var a=L(e.doc,i.line-1).text
a&&(i=new F(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),F(i.line-1,a.length-1),i,"+transpose"))}n.push(new Ns(i,i))}e.setSelections(n)})},newlineAndIndent:function(e){return hr(e,function(){for(var t=e.listSelections(),n=t.length-1;n>=0;n--)e.replaceRange(e.doc.lineSeparator(),t[n].anchor,t[n].head,"+input")
t=e.listSelections()
for(var r=0;r<t.length;r++)e.indentLine(t[r].from().line,null,!0)
Gn(e)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}},Gs=new Ha,Zs=null,Xs=400,Qs=function(e,t,n){this.time=e,this.pos=t,this.button=n}
Qs.prototype.compare=function(e,t,n){return this.time+Xs>e&&0==D(t,this.pos)&&n==this.button}
var Ys,Js,el={toString:function(){return"CodeMirror.Init"}},tl={},nl={}
Zo.defaults=tl,Zo.optionHandlers=nl
var rl=[]
Zo.defineInitHook=function(e){return rl.push(e)}
var il=null,ol=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Ha,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
ol.prototype.init=function(e){function t(e){if(!Te(i,e)){if(i.somethingSelected())Yo({lineWise:!1,text:i.getSelections()}),"cut"==e.type&&i.replaceSelection("",null,"cut")
else{if(!i.options.lineWiseCopyCut)return
var t=na(i)
Yo({lineWise:!0,text:t.text}),"cut"==e.type&&i.operation(function(){i.setSelections(t.ranges,0,Ga),i.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData()
var n=il.text.join("\n")
if(e.clipboardData.setData("Text",n),e.clipboardData.getData("Text")==n)return void e.preventDefault()}var a=ia(),s=a.firstChild
i.display.lineSpace.insertBefore(a,i.display.lineSpace.firstChild),s.value=il.text.join("\n")
var l=document.activeElement
Wa(s),setTimeout(function(){i.display.lineSpace.removeChild(a),l.focus(),l==o&&r.showPrimarySelection()},50)}}var n=this,r=this,i=r.cm,o=r.div=e.lineDiv
ra(o,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize),os(o,"paste",function(e){Te(i,e)||ea(e,i)||_a<=11&&setTimeout(mr(i,function(){return n.updateFromDOM()}),20)}),os(o,"compositionstart",function(e){n.composing={data:e.data,done:!1}}),os(o,"compositionupdate",function(e){n.composing||(n.composing={data:e.data,done:!1})}),os(o,"compositionend",function(e){n.composing&&(e.data!=n.composing.data&&n.readFromDOMSoon(),n.composing.done=!0)}),os(o,"touchstart",function(){return r.forceCompositionEnd()}),os(o,"input",function(){n.composing||n.readFromDOMSoon()}),os(o,"copy",t),os(o,"cut",t)},ol.prototype.prepareSelection=function(){var e=An(this.cm,!1)
return e.focus=this.cm.state.focused,e},ol.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},ol.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},ol.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,n=t.doc.sel.primary(),r=n.from(),i=n.to()
if(t.display.viewTo==t.display.viewFrom||r.line>=t.display.viewTo||i.line<t.display.viewFrom)return void e.removeAllRanges()
var o=fa(t,e.anchorNode,e.anchorOffset),a=fa(t,e.focusNode,e.focusOffset)
if(!o||o.bad||!a||a.bad||0!=D(j(o,a),r)||0!=D(R(o,a),i)){var s=t.display.view,l=r.line>=t.display.viewFrom&&la(t,r)||{node:s[0].measure.map[2],offset:0},c=i.line<t.display.viewTo&&la(t,i)
if(!c){var u=s[s.length-1].measure,d=u.maps?u.maps[u.maps.length-1]:u.map
c={node:d[d.length-1],offset:d[d.length-2]-d[d.length-3]}}if(!l||!c)return void e.removeAllRanges()
var f,p=e.rangeCount&&e.getRangeAt(0)
try{f=Pa(l.node,l.offset,c.offset,c.node)}catch(h){}f&&(!ya&&t.state.focused?(e.collapse(l.node,l.offset),f.collapsed||(e.removeAllRanges(),e.addRange(f))):(e.removeAllRanges(),e.addRange(f)),p&&null==e.anchorNode?e.addRange(p):ya&&this.startGracePeriod()),this.rememberSelection()}},ol.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},ol.prototype.showMultipleSelections=function(e){n(this.cm.display.cursorDiv,e.cursors),n(this.cm.display.selectionDiv,e.selection)},ol.prototype.rememberSelection=function(){var e=this.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},ol.prototype.selectionInEditor=function(){var e=this.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return o(this.div,t)},ol.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},ol.prototype.blur=function(){this.div.blur()},ol.prototype.getField=function(){return this.div},ol.prototype.supportsTouch=function(){return!0},ol.prototype.receivedFocus=function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}var t=this
this.selectionInEditor()?this.pollSelection():hr(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,e)},ol.prototype.selectionChanged=function(){var e=this.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},ol.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm
if(za&&Ma&&this.cm.options.gutters.length&&ca(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus()
if(!this.composing){this.rememberSelection()
var n=fa(t,e.anchorNode,e.anchorOffset),r=fa(t,e.focusNode,e.focusOffset)
n&&r&&hr(t,function(){xi(t.doc,Br(n,r),Ga),(n.bad||r.bad)&&(t.curOp.selectionChanged=!0)})}}},ol.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e=this.cm,t=e.display,n=e.doc.sel.primary(),r=n.from(),i=n.to()
if(0==r.ch&&r.line>e.firstLine()&&(r=F(r.line-1,L(e.doc,r.line-1).length)),i.ch==L(e.doc,i.line).text.length&&i.line<e.lastLine()&&(i=F(i.line+1,0)),r.line<t.viewFrom||i.line>t.viewTo-1)return!1
var o,a,s
r.line==t.viewFrom||0==(o=Ln(e,r.line))?(a=O(t.view[0].line),s=t.view[0].node):(a=O(t.view[o].line),s=t.view[o-1].node.nextSibling)
var l,c,u=Ln(e,i.line)
if(u==t.view.length-1?(l=t.viewTo-1,c=t.lineDiv.lastChild):(l=O(t.view[u+1].line)-1,c=t.view[u+1].node.previousSibling),!s)return!1
for(var d=e.doc.splitLines(da(e,s,c,a,l)),f=T(e.doc,F(a,0),F(l,L(e.doc,l).text.length));d.length>1&&f.length>1;)if(m(d)==m(f))d.pop(),f.pop(),l--
else{if(d[0]!=f[0])break
d.shift(),f.shift(),a++}for(var p=0,h=0,g=d[0],v=f[0],y=Math.min(g.length,v.length);p<y&&g.charCodeAt(p)==v.charCodeAt(p);)++p
for(var b=m(d),k=m(f),x=Math.min(b.length-(1==d.length?p:0),k.length-(1==f.length?p:0));h<x&&b.charCodeAt(b.length-h-1)==k.charCodeAt(k.length-h-1);)++h
if(1==d.length&&1==f.length&&a==r.line)for(;p&&p>r.ch&&b.charCodeAt(b.length-h-1)==k.charCodeAt(k.length-h-1);)p--,h++
d[d.length-1]=b.slice(0,b.length-h).replace(/^\u200b+/,""),d[0]=d[0].slice(p).replace(/\u200b+$/,"")
var w=F(a,p),_=F(l,f.length?m(f).length-h:0)
return d.length>1||d[0]||D(w,_)?(Ii(e.doc,d,w,_,"+input"),!0):void 0},ol.prototype.ensurePolled=function(){this.forceCompositionEnd()},ol.prototype.reset=function(){this.forceCompositionEnd()},ol.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},ol.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}e.updateFromDOM()},80))},ol.prototype.updateFromDOM=function(){var e=this
!this.cm.isReadOnly()&&this.pollContent()||hr(this.cm,function(){return yr(e.cm)})},ol.prototype.setUneditable=function(e){e.contentEditable="false"},ol.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||mr(this.cm,Jo)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},ol.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},ol.prototype.onContextMenu=function(){},ol.prototype.resetPosition=function(){},ol.prototype.needsContentAttribute=!0
var al=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new Ha,this.hasSelection=!1,this.composing=null}
al.prototype.init=function(e){function t(e){if(!Te(i,e)){if(i.somethingSelected())Yo({lineWise:!1,text:i.getSelections()})
else{if(!i.options.lineWiseCopyCut)return
var t=na(i)
Yo({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,Ga):(r.prevInput="",o.value=t.text.join("\n"),Wa(o))}"cut"==e.type&&(i.state.cutIncoming=+new Date)}}var n=this,r=this,i=this.cm
this.createField(e)
var o=this.textarea
e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),Oa&&(o.style.width="0px"),os(o,"input",function(){wa&&_a>=9&&n.hasSelection&&(n.hasSelection=null),r.poll()}),os(o,"paste",function(e){Te(i,e)||ea(e,i)||(i.state.pasteIncoming=+new Date,r.fastPoll())}),os(o,"cut",t),os(o,"copy",t),os(e.scroller,"paste",function(t){if(!Dt(e,t)&&!Te(i,t)){if(!o.dispatchEvent)return i.state.pasteIncoming=+new Date,void r.focus()
var n=new Event("paste")
n.clipboardData=t.clipboardData,o.dispatchEvent(n)}}),os(e.lineSpace,"selectstart",function(t){Dt(e,t)||ze(t)}),os(o,"compositionstart",function(){var e=i.getCursor("from")
r.composing&&r.composing.range.clear(),r.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),os(o,"compositionend",function(){r.composing&&(r.poll(),r.composing.range.clear(),r.composing=null)})},al.prototype.createField=function(e){this.wrapper=ia(),this.textarea=this.wrapper.firstChild},al.prototype.prepareSelection=function(){var e=this.cm,t=e.display,n=e.doc,r=An(e)
if(e.options.moveInputWithCursor){var i=un(e,n.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect()
r.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),r.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return r},al.prototype.showSelection=function(e){var t=this.cm,r=t.display
n(r.cursorDiv,e.cursors),n(r.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},al.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm
if(t.somethingSelected()){this.prevInput=""
var n=t.getSelection()
this.textarea.value=n,t.state.focused&&Wa(this.textarea),wa&&_a>=9&&(this.hasSelection=n)}else e||(this.prevInput=this.textarea.value="",wa&&_a>=9&&(this.hasSelection=null))}},al.prototype.getField=function(){return this.textarea},al.prototype.supportsTouch=function(){return!1},al.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!Na||a()!=this.textarea))try{this.textarea.focus()}catch(e){}},al.prototype.blur=function(){this.textarea.blur()},al.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},al.prototype.receivedFocus=function(){this.slowPoll()},al.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},al.prototype.fastPoll=function(){function e(){var r=n.poll()
r||t?(n.pollingFast=!1,n.slowPoll()):(t=!0,n.polling.set(60,e))}var t=!1,n=this
n.pollingFast=!0,n.polling.set(20,e)},al.prototype.poll=function(){var e=this,t=this.cm,n=this.textarea,r=this.prevInput
if(this.contextMenuPending||!t.state.focused||ls(n)&&!r&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=n.value
if(i==r&&!t.somethingSelected())return!1
if(wa&&_a>=9&&this.hasSelection===i||qa&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||r||(r="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var a=0,s=Math.min(r.length,i.length);a<s&&r.charCodeAt(a)==i.charCodeAt(a);)++a
return hr(t,function(){Jo(t,i.slice(a),r.length-a,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?n.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},al.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},al.prototype.onKeyPress=function(){wa&&_a>=9&&(this.hasSelection=null),this.fastPoll()},al.prototype.onContextMenu=function(e){function t(){if(null!=a.selectionStart){var e=i.somethingSelected(),t="​"+(e?a.value:"")
a.value="⇚",a.value=t,r.prevInput=e?"":"​",a.selectionStart=1,a.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function n(){if(r.contextMenuPending==n&&(r.contextMenuPending=!1,r.wrapper.style.cssText=d,a.style.cssText=u,wa&&_a<9&&o.scrollbars.setScrollTop(o.scroller.scrollTop=l),null!=a.selectionStart)){(!wa||wa&&_a<9)&&t()
var e=0,s=function(){o.selForContextMenu==i.doc.sel&&0==a.selectionStart&&a.selectionEnd>0&&"​"==r.prevInput?mr(i,Ai)(i):e++<10?o.detectingSelectAll=setTimeout(s,500):(o.selForContextMenu=null,o.input.reset())}
o.detectingSelectAll=setTimeout(s,200)}}var r=this,i=r.cm,o=i.display,a=r.textarea
r.contextMenuPending&&r.contextMenuPending()
var s=Mn(i,e),l=o.scroller.scrollTop
if(s&&!La){var c=i.options.resetSelectionOnContextMenu
c&&i.doc.sel.contains(s)==-1&&mr(i,xi)(i.doc,Br(s),Ga)
var u=a.style.cssText,d=r.wrapper.style.cssText,f=r.wrapper.offsetParent.getBoundingClientRect()
r.wrapper.style.cssText="position: static",a.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-f.top-5)+"px; left: "+(e.clientX-f.left-5)+"px;\n      z-index: 1000; background: "+(wa?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
var p
if(Ca&&(p=window.scrollY),o.input.focus(),Ca&&window.scrollTo(null,p),o.input.reset(),i.somethingSelected()||(a.value=r.prevInput=" "),r.contextMenuPending=n,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),wa&&_a>=9&&t(),ja){Fe(e)
var h=function(){Me(window,"mouseup",h),setTimeout(n,20)}
os(window,"mouseup",h)}else setTimeout(n,50)}},al.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},al.prototype.setUneditable=function(){},al.prototype.needsContentAttribute=!1,$o(Zo),oa(Zo)
var sl="iter insert remove copy getEditor constructor".split(" ")
for(var ll in Rs.prototype)Rs.prototype.hasOwnProperty(ll)&&f(sl,ll)<0&&(Zo.prototype[ll]=function(e){return function(){return e.apply(this.doc,arguments)}}(Rs.prototype[ll]))
return Oe(Rs),Zo.inputStyles={textarea:al,contenteditable:ol},Zo.defineMode=function(e){Zo.defaults.mode||"null"==e||(Zo.defaults.mode=e),Be.apply(this,arguments)},Zo.defineMIME=We,Zo.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Zo.defineMIME("text/plain","null"),Zo.defineExtension=function(e,t){Zo.prototype[e]=t},Zo.defineDocExtension=function(e,t){Rs.prototype[e]=t},Zo.fromTextArea=ha,ma(Zo),Zo.version="5.45.0",Zo}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){var t=e.search(o)
return t==-1?0:t}function n(e,t,n){return/\bstring\b/.test(e.getTokenTypeAt(a(t.line,0)))&&!/^[\'\"\`]/.test(n)}function r(e,t){var n=e.getMode()
return n.useInnerComments!==!1&&n.innerMode?e.getModeAt(t):n}var i={},o=/[^\s\u00a0]/,a=e.Pos
e.commands.toggleComment=function(e){e.toggleComment()},e.defineExtension("toggleComment",function(e){e||(e=i)
for(var t=this,n=1/0,r=this.listSelections(),o=null,s=r.length-1;s>=0;s--){var l=r[s].from(),c=r[s].to()
l.line>=n||(c.line>=n&&(c=a(n,0)),n=l.line,null==o?t.uncomment(l,c,e)?o="un":(t.lineComment(l,c,e),o="line"):"un"==o?t.uncomment(l,c,e):t.lineComment(l,c,e))}}),e.defineExtension("lineComment",function(e,s,l){l||(l=i)
var c=this,u=r(c,e),d=c.getLine(e.line)
if(null!=d&&!n(c,e,d)){var f=l.lineComment||u.lineComment
if(!f)return void((l.blockCommentStart||u.blockCommentStart)&&(l.fullLines=!0,c.blockComment(e,s,l)))
var p=Math.min(0!=s.ch||s.line==e.line?s.line+1:s.line,c.lastLine()+1),h=null==l.padding?" ":l.padding,m=l.commentBlankLines||e.line==s.line
c.operation(function(){if(l.indent){for(var n=null,r=e.line;r<p;++r){var i=c.getLine(r),s=i.slice(0,t(i));(null==n||n.length>s.length)&&(n=s)}for(var r=e.line;r<p;++r){var i=c.getLine(r),u=n.length;(m||o.test(i))&&(i.slice(0,u)!=n&&(u=t(i)),c.replaceRange(n+f+h,a(r,0),a(r,u)))}}else for(var r=e.line;r<p;++r)(m||o.test(c.getLine(r)))&&c.replaceRange(f+h,a(r,0))})}}),e.defineExtension("blockComment",function(e,t,n){n||(n=i)
var s=this,l=r(s,e),c=n.blockCommentStart||l.blockCommentStart,u=n.blockCommentEnd||l.blockCommentEnd
if(!c||!u)return void((n.lineComment||l.lineComment)&&0!=n.fullLines&&s.lineComment(e,t,n))
if(!/\bcomment\b/.test(s.getTokenTypeAt(a(e.line,0)))){var d=Math.min(t.line,s.lastLine())
d!=e.line&&0==t.ch&&o.test(s.getLine(d))&&--d
var f=null==n.padding?" ":n.padding
e.line>d||s.operation(function(){if(0!=n.fullLines){var r=o.test(s.getLine(d))
s.replaceRange(f+u,a(d)),s.replaceRange(c+f,a(e.line,0))
var i=n.blockCommentLead||l.blockCommentLead
if(null!=i)for(var p=e.line+1;p<=d;++p)(p!=d||r)&&s.replaceRange(i+f,a(p,0))}else s.replaceRange(u,t),s.replaceRange(c,e)})}}),e.defineExtension("uncomment",function(e,t,n){n||(n=i)
var s,l=this,c=r(l,e),u=Math.min(0!=t.ch||t.line==e.line?t.line:t.line-1,l.lastLine()),d=Math.min(e.line,u),f=n.lineComment||c.lineComment,p=[],h=null==n.padding?" ":n.padding
e:if(f){for(var m=d;m<=u;++m){var g=l.getLine(m),v=g.indexOf(f)
if(v>-1&&!/comment/.test(l.getTokenTypeAt(a(m,v+1)))&&(v=-1),v==-1&&o.test(g))break e
if(v>-1&&o.test(g.slice(0,v)))break e
p.push(g)}if(l.operation(function(){for(var e=d;e<=u;++e){var t=p[e-d],n=t.indexOf(f),r=n+f.length
n<0||(t.slice(r,r+h.length)==h&&(r+=h.length),s=!0,l.replaceRange("",a(e,n),a(e,r)))}}),s)return!0}var y=n.blockCommentStart||c.blockCommentStart,b=n.blockCommentEnd||c.blockCommentEnd
if(!y||!b)return!1
var k=n.blockCommentLead||c.blockCommentLead,x=l.getLine(d),w=x.indexOf(y)
if(w==-1)return!1
var _=u==d?x:l.getLine(u),C=_.indexOf(b,u==d?w+y.length:0),S=a(d,w+1),M=a(u,C+1)
if(C==-1||!/comment/.test(l.getTokenTypeAt(S))||!/comment/.test(l.getTokenTypeAt(M))||l.getRange(S,M,"\n").indexOf(b)>-1)return!1
var L=x.lastIndexOf(y,e.ch),T=L==-1?-1:x.slice(0,e.ch).indexOf(b,L+y.length)
if(L!=-1&&T!=-1&&T+b.length!=e.ch)return!1
T=_.indexOf(b,t.ch)
var A=_.slice(t.ch).lastIndexOf(y,T-t.ch)
return L=T==-1||A==-1?-1:t.ch+A,(T==-1||L==-1||L==t.ch)&&(l.operation(function(){l.replaceRange("",a(u,C-(h&&_.slice(C-h.length,C)==h?h.length:0)),a(u,C+b.length))
var e=w+y.length
if(h&&x.slice(e,e+h.length)==h&&(e+=h.length),l.replaceRange("",a(d,w),a(d,e)),k)for(var t=d+1;t<=u;++t){var n=l.getLine(t),r=n.indexOf(k)
if(r!=-1&&!o.test(n.slice(0,r))){var i=r+k.length
h&&n.slice(i,i+h.length)==h&&(i+=h.length),l.replaceRange("",a(t,r),a(t,i))}}}),!0)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(t){if(t.getOption("disableInput"))return e.Pass
for(var r,i=t.listSelections(),o=[],a=0;a<i.length;a++){var s=i[a].head
if(!/\bcomment\b/.test(t.getTokenTypeAt(s)))return e.Pass
var l=t.getModeAt(s)
if(r){if(r!=l)return e.Pass}else r=l
var c=null
if(r.blockCommentStart&&r.blockCommentContinue){var u,d=t.getLine(s.line).slice(0,s.ch),f=d.lastIndexOf(r.blockCommentEnd)
if(f!=-1&&f==s.ch-r.blockCommentEnd.length);else if((u=d.lastIndexOf(r.blockCommentStart))>-1&&u>f){if(c=d.slice(0,u),/\S/.test(c)){c=""
for(var p=0;p<u;++p)c+=" "}}else(u=d.indexOf(r.blockCommentContinue))>-1&&!/\S/.test(d.slice(0,u))&&(c=d.slice(0,u))
null!=c&&(c+=r.blockCommentContinue)}if(null==c&&r.lineComment&&n(t)){var d=t.getLine(s.line),u=d.indexOf(r.lineComment)
u>-1&&(c=d.slice(0,u),/\S/.test(c)?c=null:c+=r.lineComment+d.slice(u+r.lineComment.length).match(/^\s*/)[0])}if(null==c)return e.Pass
o[a]="\n"+c}t.operation(function(){for(var e=i.length-1;e>=0;e--)t.replaceRange(o[e],i[e].from(),i[e].to(),"+insert")})}function n(e){var t=e.getOption("continueComments")
return!t||"object"!=typeof t||t.continueLineComment!==!1}e.defineOption("continueComments",null,function(n,r,i){if(i&&i!=e.Init&&n.removeKeyMap("continueComment"),r){var o="Enter"
"string"==typeof r?o=r:"object"==typeof r&&r.key&&(o=r.key)
var a={name:"continueComment"}
a[o]=t,n.addKeyMap(a)}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(t,n,r){var i,o=t.getWrapperElement()
return i=o.appendChild(document.createElement("div")),r?i.className="CodeMirror-dialog CodeMirror-dialog-bottom":i.className="CodeMirror-dialog CodeMirror-dialog-top","string"==typeof n?i.innerHTML=n:i.appendChild(n),e.addClass(o,"dialog-opened"),i}function n(e,t){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=t}e.defineExtension("openDialog",function(r,i,o){function a(t){if("string"==typeof t)d.value=t
else{if(c)return
c=!0,e.rmClass(l.parentNode,"dialog-opened"),l.parentNode.removeChild(l),u.focus(),o.onClose&&o.onClose(l)}}o||(o={}),n(this,null)
var s,l=t(this,r,o.bottom),c=!1,u=this,d=l.getElementsByTagName("input")[0]
return d?(d.focus(),o.value&&(d.value=o.value,o.selectValueOnOpen!==!1&&d.select()),o.onInput&&e.on(d,"input",function(e){o.onInput(e,d.value,a)}),o.onKeyUp&&e.on(d,"keyup",function(e){o.onKeyUp(e,d.value,a)}),e.on(d,"keydown",function(t){o&&o.onKeyDown&&o.onKeyDown(t,d.value,a)||((27==t.keyCode||o.closeOnEnter!==!1&&13==t.keyCode)&&(d.blur(),e.e_stop(t),a()),13==t.keyCode&&i(d.value,t))}),o.closeOnBlur!==!1&&e.on(d,"blur",a)):(s=l.getElementsByTagName("button")[0])&&(e.on(s,"click",function(){a(),u.focus()}),o.closeOnBlur!==!1&&e.on(s,"blur",a),s.focus()),a}),e.defineExtension("openConfirm",function(r,i,o){function a(){c||(c=!0,e.rmClass(s.parentNode,"dialog-opened"),s.parentNode.removeChild(s),u.focus())}n(this,null)
var s=t(this,r,o&&o.bottom),l=s.getElementsByTagName("button"),c=!1,u=this,d=1
l[0].focus()
for(var f=0;f<l.length;++f){var p=l[f]
!function(t){e.on(p,"click",function(n){e.e_preventDefault(n),a(),t&&t(u)})}(i[f]),e.on(p,"blur",function(){--d,setTimeout(function(){d<=0&&a()},200)}),e.on(p,"focus",function(){++d})}}),e.defineExtension("openNotification",function(r,i){function o(){l||(l=!0,clearTimeout(a),e.rmClass(s.parentNode,"dialog-opened"),s.parentNode.removeChild(s))}n(this,o)
var a,s=t(this,r,i&&i.bottom),l=!1,c=i&&"undefined"!=typeof i.duration?i.duration:5e3
return e.on(s,"click",function(t){e.e_preventDefault(t),o()}),c&&(a=setTimeout(o,c)),o})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function n(e){t(e)
var n=e.state.placeholder=document.createElement("pre")
n.style.cssText="height: 0; overflow: visible",n.style.direction=e.getOption("direction"),n.className="CodeMirror-placeholder"
var r=e.getOption("placeholder")
"string"==typeof r&&(r=document.createTextNode(r)),n.appendChild(r),e.display.lineSpace.insertBefore(n,e.display.lineSpace.firstChild)}function r(e){o(e)&&n(e)}function i(e){var r=e.getWrapperElement(),i=o(e)
r.className=r.className.replace(" CodeMirror-empty","")+(i?" CodeMirror-empty":""),i?n(e):t(e)}function o(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",function(n,o,a){var s=a&&a!=e.Init
if(o&&!s)n.on("blur",r),n.on("change",i),n.on("swapDoc",i),i(n)
else if(!o&&s){n.off("blur",r),n.off("change",i),n.off("swapDoc",i),t(n)
var l=n.getWrapperElement()
l.className=l.className.replace(" CodeMirror-empty","")}o&&!n.hasFocus()&&r(n)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(e,t){return"pairs"==t&&"string"==typeof e?e:"object"==typeof e&&null!=e[t]?e[t]:d[t]}function n(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),i="'"+n+"'"
p[i]||(p[i]=r(n))}}function r(e){return function(t){return l(t,e)}}function i(e){var t=e.state.closeBrackets
if(!t||t.override)return t
var n=e.getModeAt(e.getCursor())
return n.closeBrackets||t}function o(n){var r=i(n)
if(!r||n.getOption("disableInput"))return e.Pass
for(var o=t(r,"pairs"),a=n.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass
var l=c(n,a[s].head)
if(!l||o.indexOf(l)%2!=0)return e.Pass}for(var s=a.length-1;s>=0;s--){var u=a[s].head
n.replaceRange("",f(u.line,u.ch-1),f(u.line,u.ch+1),"+delete")}}function a(n){var r=i(n),o=r&&t(r,"explode")
if(!o||n.getOption("disableInput"))return e.Pass
for(var a=n.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass
var l=c(n,a[s].head)
if(!l||o.indexOf(l)%2!=0)return e.Pass}n.operation(function(){var e=n.lineSeparator()||"\n"
n.replaceSelection(e+e,null),n.execCommand("goCharLeft"),a=n.listSelections()
for(var t=0;t<a.length;t++){var r=a[t].head.line
n.indentLine(r,null,!0),n.indentLine(r+1,null,!0)}})}function s(t){var n=e.cmpPos(t.anchor,t.head)>0
return{anchor:new f(t.anchor.line,t.anchor.ch+(n?-1:1)),head:new f(t.head.line,t.head.ch+(n?1:-1))}}function l(n,r){var o=i(n)
if(!o||n.getOption("disableInput"))return e.Pass
var a=t(o,"pairs"),l=a.indexOf(r)
if(l==-1)return e.Pass
for(var c,d=t(o,"closeBefore"),p=t(o,"triples"),h=a.charAt(l+1)==r,m=n.listSelections(),g=l%2==0,v=0;v<m.length;v++){var y,b=m[v],k=b.head,x=n.getRange(k,f(k.line,k.ch+1))
if(g&&!b.empty())y="surround"
else if(!h&&g||x!=r)if(h&&k.ch>1&&p.indexOf(r)>=0&&n.getRange(f(k.line,k.ch-2),k)==r+r){if(k.ch>2&&/\bstring/.test(n.getTokenTypeAt(f(k.line,k.ch-2))))return e.Pass
y="addFour"}else if(h){var w=0==k.ch?" ":n.getRange(f(k.line,k.ch-1),k)
if(e.isWordChar(x)||w==r||e.isWordChar(w))return e.Pass
y="both"}else{if(!g||!(0===x.length||/\s/.test(x)||d.indexOf(x)>-1))return e.Pass
y="both"}else y=h&&u(n,k)?"both":p.indexOf(r)>=0&&n.getRange(k,f(k.line,k.ch+3))==r+r+r?"skipThree":"skip"
if(c){if(c!=y)return e.Pass}else c=y}var _=l%2?a.charAt(l-1):r,C=l%2?r:a.charAt(l+1)
n.operation(function(){if("skip"==c)n.execCommand("goCharRight")
else if("skipThree"==c)for(var e=0;e<3;e++)n.execCommand("goCharRight")
else if("surround"==c){for(var t=n.getSelections(),e=0;e<t.length;e++)t[e]=_+t[e]+C
n.replaceSelections(t,"around"),t=n.listSelections().slice()
for(var e=0;e<t.length;e++)t[e]=s(t[e])
n.setSelections(t)}else"both"==c?(n.replaceSelection(_+C,null),n.triggerElectric(_+C),n.execCommand("goCharLeft")):"addFour"==c&&(n.replaceSelection(_+_+_+_,"before"),n.execCommand("goCharRight"))})}function c(e,t){var n=e.getRange(f(t.line,t.ch-1),f(t.line,t.ch+1))
return 2==n.length?n:null}function u(e,t){var n=e.getTokenAt(f(t.line,t.ch+1))
return/\bstring/.test(n.type)&&n.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}var d={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},f=e.Pos
e.defineOption("autoCloseBrackets",!1,function(r,i,o){o&&o!=e.Init&&(r.removeKeyMap(p),r.state.closeBrackets=null),i&&(n(t(i,"pairs")),r.state.closeBrackets=i,r.addKeyMap(p))})
var p={Backspace:o,Enter:a}
n(d.pairs+"`")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../fold/xml-fold")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../fold/xml-fold"],e):e(CodeMirror)}(function(e){function t(t){if(t.getOption("disableInput"))return e.Pass
for(var n=t.listSelections(),r=[],l=t.getOption("autoCloseTags"),c=0;c<n.length;c++){if(!n[c].empty())return e.Pass
var u=n[c].head,d=t.getTokenAt(u),f=e.innerMode(t.getMode(),d.state),p=f.state
if("xml"!=f.mode.name||!p.tagName)return e.Pass
var h="html"==f.mode.configuration,m="object"==typeof l&&l.dontCloseTags||h&&a,g="object"==typeof l&&l.indentTags||h&&s,v=p.tagName
d.end>u.ch&&(v=v.slice(0,v.length-d.end+u.ch))
var y=v.toLowerCase()
if(!v||"string"==d.type&&(d.end!=u.ch||!/[\"\']/.test(d.string.charAt(d.string.length-1))||1==d.string.length)||"tag"==d.type&&"closeTag"==p.type||d.string.indexOf("/")==d.string.length-1||m&&i(m,y)>-1||o(t,v,u,p,!0))return e.Pass
var b=g&&i(g,y)>-1
r[c]={indent:b,text:">"+(b?"\n\n":"")+"</"+v+">",newPos:b?e.Pos(u.line+1,0):e.Pos(u.line,u.ch+1)}}for(var k="object"==typeof l&&l.dontIndentOnAutoClose,c=n.length-1;c>=0;c--){var x=r[c]
t.replaceRange(x.text,n[c].head,n[c].anchor,"+insert")
var w=t.listSelections().slice(0)
w[c]={head:x.newPos,anchor:x.newPos},t.setSelections(w),!k&&x.indent&&(t.indentLine(x.newPos.line,null,!0),t.indentLine(x.newPos.line+1,null,!0))}}function n(t,n){for(var r=t.listSelections(),i=[],a=n?"/":"</",s=t.getOption("autoCloseTags"),l="object"==typeof s&&s.dontIndentOnSlash,c=0;c<r.length;c++){if(!r[c].empty())return e.Pass
var u=r[c].head,d=t.getTokenAt(u),f=e.innerMode(t.getMode(),d.state),p=f.state
if(n&&("string"==d.type||"<"!=d.string.charAt(0)||d.start!=u.ch-1))return e.Pass
var h
if("xml"!=f.mode.name)if("htmlmixed"==t.getMode().name&&"javascript"==f.mode.name)h=a+"script"
else{if("htmlmixed"!=t.getMode().name||"css"!=f.mode.name)return e.Pass
h=a+"style"}else{if(!p.context||!p.context.tagName||o(t,p.context.tagName,u,p))return e.Pass
h=a+p.context.tagName}">"!=t.getLine(u.line).charAt(d.end)&&(h+=">"),i[c]=h}if(t.replaceSelections(i),r=t.listSelections(),!l)for(var c=0;c<r.length;c++)(c==r.length-1||r[c].head.line<r[c+1].head.line)&&t.indentLine(r[c].head.line)}function r(t){return t.getOption("disableInput")?e.Pass:n(t,!0)}function i(e,t){if(e.indexOf)return e.indexOf(t)
for(var n=0,r=e.length;n<r;++n)if(e[n]==t)return n
return-1}function o(t,n,r,i,o){if(!e.scanForClosingTag)return!1
var a=Math.min(t.lastLine()+1,r.line+500),s=e.scanForClosingTag(t,r,null,a)
if(!s||s.tag!=n)return!1
for(var l=i.context,c=o?1:0;l&&l.tagName==n;l=l.prev)++c
r=s.to
for(var u=1;u<c;u++){var d=e.scanForClosingTag(t,r,null,a)
if(!d||d.tag!=n)return!1
r=d.to}return!0}e.defineOption("autoCloseTags",!1,function(n,i,o){if(o!=e.Init&&o&&n.removeKeyMap("autoCloseTags"),i){var a={name:"autoCloseTags"};("object"!=typeof i||i.whenClosing)&&(a["'/'"]=function(e){return r(e)}),("object"!=typeof i||i.whenOpening)&&(a["'>'"]=function(e){return t(e)}),n.addKeyMap(a)}})
var a=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],s=["applet","blockquote","body","button","div","dl","fieldset","form","frameset","h1","h2","h3","h4","h5","h6","head","html","iframe","layer","legend","object","ol","p","select","table","ul"]
e.commands.closeTag=function(e){return n(e)}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){var r=t.line,i=0,o=0,a=n.exec(e.getLine(r)),s=a[1]
do{i+=1
var l=r+i,c=e.getLine(l),u=n.exec(c)
if(u){var d=u[1],f=parseInt(a[3],10)+i-o,p=parseInt(u[3],10),h=p
if(s!==d||isNaN(p)){if(s.length>d.length)return
if(s.length<d.length&&1===i)return
o+=1}else f===p&&(h=p+1),f>p&&(h=f+1),e.replaceRange(c.replace(n,d+h+u[4]+u[5]),{line:l,ch:0},{line:l,ch:c.length})}}while(u)}var n=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,r=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,i=/[*+-]\s/
e.commands.newlineAndIndentContinueMarkdownList=function(o){if(o.getOption("disableInput"))return e.Pass
for(var a=o.listSelections(),s=[],l=0;l<a.length;l++){var c=a[l].head,u=o.getStateAfter(c.line),d=o.getMode().innerMode(u)
if("markdown"!==d.mode.name)return void o.execCommand("newlineAndIndent")
u=d.state
var f=u.list!==!1,p=0!==u.quote,h=o.getLine(c.line),m=n.exec(h),g=/^\s*$/.test(h.slice(0,c.ch))
if(!a[l].empty()||!f&&!p||!m||g)return void o.execCommand("newlineAndIndent")
if(r.test(h))/>\s*$/.test(h)||o.replaceRange("",{line:c.line,ch:0},{line:c.line,ch:c.ch+1}),s[l]="\n"
else{var v=m[1],y=m[5],b=!(i.test(m[2])||m[2].indexOf(">")>=0),k=b?parseInt(m[3],10)+1+m[4]:m[2].replace("x"," ")
s[l]="\n"+v+k+y,b&&t(o,c)}}o.replaceSelections(s)}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(e){return e&&e.bracketRegex||/[(){}[\]]/}function n(e,n,i){var o=e.getLineHandle(n.line),a=n.ch-1,c=i&&i.afterCursor
null==c&&(c=/(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className))
var u=t(i),d=!c&&a>=0&&u.test(o.text.charAt(a))&&l[o.text.charAt(a)]||u.test(o.text.charAt(a+1))&&l[o.text.charAt(++a)]
if(!d)return null
var f=">"==d.charAt(1)?1:-1
if(i&&i.strict&&f>0!=(a==n.ch))return null
var p=e.getTokenTypeAt(s(n.line,a+1)),h=r(e,s(n.line,a+(f>0?1:0)),f,p||null,i)
return null==h?null:{from:s(n.line,a),to:h&&h.pos,match:h&&h.ch==d.charAt(0),forward:f>0}}function r(e,n,r,i,o){for(var a=o&&o.maxScanLineLength||1e4,c=o&&o.maxScanLines||1e3,u=[],d=t(o),f=r>0?Math.min(n.line+c,e.lastLine()+1):Math.max(e.firstLine()-1,n.line-c),p=n.line;p!=f;p+=r){var h=e.getLine(p)
if(h){var m=r>0?0:h.length-1,g=r>0?h.length:-1
if(!(h.length>a))for(p==n.line&&(m=n.ch-(r<0?1:0));m!=g;m+=r){var v=h.charAt(m)
if(d.test(v)&&(void 0===i||e.getTokenTypeAt(s(p,m+1))==i)){var y=l[v]
if(y&&">"==y.charAt(1)==r>0)u.push(v)
else{if(!u.length)return{pos:s(p,m),ch:v}
u.pop()}}}}}return p-r!=(r>0?e.lastLine():e.firstLine())&&null}function i(e,t,r){for(var i=e.state.matchBrackets.maxHighlightLineLength||1e3,o=[],l=e.listSelections(),c=0;c<l.length;c++){var u=l[c].empty()&&n(e,l[c].head,r)
if(u&&e.getLine(u.from.line).length<=i){var d=u.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket"
o.push(e.markText(u.from,s(u.from.line,u.from.ch+1),{className:d})),u.to&&e.getLine(u.to.line).length<=i&&o.push(e.markText(u.to,s(u.to.line,u.to.ch+1),{className:d}))}}if(o.length){a&&e.state.focused&&e.focus()
var f=function(){e.operation(function(){for(var e=0;e<o.length;e++)o[e].clear()})}
if(!t)return f
setTimeout(f,800)}}function o(e){e.operation(function(){e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null),e.state.matchBrackets.currentlyHighlighted=i(e,!1,e.state.matchBrackets)})}var a=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),s=e.Pos,l={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"}
e.defineOption("matchBrackets",!1,function(t,n,r){r&&r!=e.Init&&(t.off("cursorActivity",o),t.state.matchBrackets&&t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null)),n&&(t.state.matchBrackets="object"==typeof n?n:{},t.on("cursorActivity",o))}),e.defineExtension("matchBrackets",function(){i(this,!0)}),e.defineExtension("findMatchingBracket",function(e,t,r){return(r||"boolean"==typeof t)&&(r?(r.strict=t,t=r):t=t?{strict:!0}:null),n(this,e,t)}),e.defineExtension("scanForBracket",function(e,t,n,i){return r(this,e,t,n,i)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.registerHelper("fold","brace",function(t,n){function r(r){for(var s=n.ch,l=0;;){var c=s<=0?-1:a.lastIndexOf(r,s-1)
if(c!=-1){if(1==l&&c<n.ch)break
if(i=t.getTokenTypeAt(e.Pos(o,c+1)),!/^(comment|string)/.test(i))return c+1
s=c-1}else{if(1==l)break
l=1,s=a.length}}}var i,o=n.line,a=t.getLine(o),s="{",l="}",c=r("{")
if(null==c&&(s="[",l="]",c=r("[")),null!=c){var u,d,f=1,p=t.lastLine()
e:for(var h=o;h<=p;++h)for(var m=t.getLine(h),g=h==o?c:0;;){var v=m.indexOf(s,g),y=m.indexOf(l,g)
if(v<0&&(v=m.length),y<0&&(y=m.length),g=Math.min(v,y),g==m.length)break
if(t.getTokenTypeAt(e.Pos(h,g+1))==i)if(g==v)++f
else if(!--f){u=h,d=g
break e}++g}if(null!=u&&o!=u)return{from:e.Pos(o,c),to:e.Pos(u,d)}}}),e.registerHelper("fold","import",function(t,n){function r(n){if(n<t.firstLine()||n>t.lastLine())return null
var r=t.getTokenAt(e.Pos(n,1))
if(/\S/.test(r.string)||(r=t.getTokenAt(e.Pos(n,r.end+1))),"keyword"!=r.type||"import"!=r.string)return null
for(var i=n,o=Math.min(t.lastLine(),n+10);i<=o;++i){var a=t.getLine(i),s=a.indexOf(";")
if(s!=-1)return{startCh:r.end,end:e.Pos(i,s)}}}var i,o=n.line,a=r(o)
if(!a||r(o-1)||(i=r(o-2))&&i.end.line==o-1)return null
for(var s=a.end;;){var l=r(s.line+1)
if(null==l)break
s=l.end}return{from:t.clipPos(e.Pos(o,a.startCh+1)),to:s}}),e.registerHelper("fold","include",function(t,n){function r(n){if(n<t.firstLine()||n>t.lastLine())return null
var r=t.getTokenAt(e.Pos(n,1))
return/\S/.test(r.string)||(r=t.getTokenAt(e.Pos(n,r.end+1))),"meta"==r.type&&"#include"==r.string.slice(0,8)?r.start+8:void 0}var i=n.line,o=r(i)
if(null==o||null!=r(i-1))return null
for(var a=i;;){var s=r(a+1)
if(null==s)break;++a}return{from:e.Pos(i,o+1),to:t.clipPos(e.Pos(a))}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.registerGlobalHelper("fold","comment",function(e){return e.blockCommentStart&&e.blockCommentEnd},function(t,n){var r=t.getModeAt(n),i=r.blockCommentStart,o=r.blockCommentEnd
if(i&&o){for(var a,s=n.line,l=t.getLine(s),c=n.ch,u=0;;){var d=c<=0?-1:l.lastIndexOf(i,c-1)
if(d!=-1){if(1==u&&d<n.ch)return
if(/comment/.test(t.getTokenTypeAt(e.Pos(s,d+1)))&&(0==d||l.slice(d-o.length,d)==o||!/comment/.test(t.getTokenTypeAt(e.Pos(s,d))))){a=d+i.length
break}c=d-1}else{if(1==u)return
u=1,c=l.length}}var f,p,h=1,m=t.lastLine()
e:for(var g=s;g<=m;++g)for(var v=t.getLine(g),y=g==s?a:0;;){var b=v.indexOf(i,y),k=v.indexOf(o,y)
if(b<0&&(b=v.length),k<0&&(k=v.length),y=Math.min(b,k),y==v.length)break
if(y==b)++h
else if(!--h){f=g,p=y
break e}++y}if(null!=f&&(s!=f||p!=a))return{from:e.Pos(s,a),to:e.Pos(f,p)}}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(t,i,o,a){function s(e){var n=l(t,i)
if(!n||n.to.line-n.from.line<c)return null
for(var r=t.findMarksAt(n.from),o=0;o<r.length;++o)if(r[o].__isFold&&"fold"!==a){if(!e)return null
n.cleared=!0,r[o].clear()}return n}if(o&&o.call){var l=o
o=null}else var l=r(t,o,"rangeFinder")
"number"==typeof i&&(i=e.Pos(i,0))
var c=r(t,o,"minFoldSize"),u=s(!0)
if(r(t,o,"scanUp"))for(;!u&&i.line>t.firstLine();)i=e.Pos(i.line-1,0),u=s(!1)
if(u&&!u.cleared&&"unfold"!==a){var d=n(t,o)
e.on(d,"mousedown",function(t){f.clear(),e.e_preventDefault(t)})
var f=t.markText(u.from,u.to,{replacedWith:d,clearOnEnter:r(t,o,"clearOnEnter"),__isFold:!0})
f.on("clear",function(n,r){e.signal(t,"unfold",t,n,r)}),e.signal(t,"fold",t,u.from,u.to)}}function n(e,t){var n=r(e,t,"widget")
if("string"==typeof n){var i=document.createTextNode(n)
n=document.createElement("span"),n.appendChild(i),n.className="CodeMirror-foldmarker"}else n&&(n=n.cloneNode(!0))
return n}function r(e,t,n){if(t&&void 0!==t[n])return t[n]
var r=e.options.foldOptions
return r&&void 0!==r[n]?r[n]:i[n]}e.newFoldFunction=function(e,n){return function(r,i){t(r,i,{rangeFinder:e,widget:n})}},e.defineExtension("foldCode",function(e,n,r){t(this,e,n,r)}),e.defineExtension("isFolded",function(e){for(var t=this.findMarksAt(e),n=0;n<t.length;++n)if(t[n].__isFold)return!0}),e.commands.toggleFold=function(e){e.foldCode(e.getCursor())},e.commands.fold=function(e){e.foldCode(e.getCursor(),null,"fold")},e.commands.unfold=function(e){e.foldCode(e.getCursor(),null,"unfold")},e.commands.foldAll=function(t){t.operation(function(){for(var n=t.firstLine(),r=t.lastLine();n<=r;n++)t.foldCode(e.Pos(n,0),null,"fold")})},e.commands.unfoldAll=function(t){t.operation(function(){for(var n=t.firstLine(),r=t.lastLine();n<=r;n++)t.foldCode(e.Pos(n,0),null,"unfold")})},e.registerHelper("fold","combine",function(){var e=Array.prototype.slice.call(arguments,0)
return function(t,n){for(var r=0;r<e.length;++r){var i=e[r](t,n)
if(i)return i}}}),e.registerHelper("fold","auto",function(e,t){for(var n=e.getHelpers(t,"fold"),r=0;r<n.length;r++){var i=n[r](e,t)
if(i)return i}})
var i={rangeFinder:e.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0}
e.defineOption("foldOptions",null),e.defineExtension("foldOption",function(e,t){return r(this,e,t)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./foldcode")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./foldcode"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){this.options=e,this.from=this.to=0}function n(e){return e===!0&&(e={}),null==e.gutter&&(e.gutter="CodeMirror-foldgutter"),null==e.indicatorOpen&&(e.indicatorOpen="CodeMirror-foldgutter-open"),null==e.indicatorFolded&&(e.indicatorFolded="CodeMirror-foldgutter-folded"),e}function r(e,t){for(var n=e.findMarks(d(t,0),d(t+1,0)),r=0;r<n.length;++r)if(n[r].__isFold&&n[r].find().from.line==t)return n[r]}function i(e){if("string"==typeof e){var t=document.createElement("div")
return t.className=e+" CodeMirror-guttermarker-subtle",t}return e.cloneNode(!0)}function o(e,t,n){var o=e.state.foldGutter.options,a=t,s=e.foldOption(o,"minFoldSize"),l=e.foldOption(o,"rangeFinder")
e.eachLine(t,n,function(t){var n=null
if(r(e,a))n=i(o.indicatorFolded)
else{var c=d(a,0),u=l&&l(e,c)
u&&u.to.line-u.from.line>=s&&(n=i(o.indicatorOpen))}e.setGutterMarker(t,o.gutter,n),++a})}function a(e){var t=e.getViewport(),n=e.state.foldGutter
n&&(e.operation(function(){o(e,t.from,t.to)}),n.from=t.from,n.to=t.to)}function s(e,t,n){var i=e.state.foldGutter
if(i){var o=i.options
if(n==o.gutter){var a=r(e,t)
a?a.clear():e.foldCode(d(t,0),o.rangeFinder)}}}function l(e){var t=e.state.foldGutter
if(t){var n=t.options
t.from=t.to=0,clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout(function(){a(e)},n.foldOnChangeTimeSpan||600)}}function c(e){var t=e.state.foldGutter
if(t){var n=t.options
clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout(function(){var n=e.getViewport()
t.from==t.to||n.from-t.to>20||t.from-n.to>20?a(e):e.operation(function(){n.from<t.from&&(o(e,n.from,t.from),t.from=n.from),n.to>t.to&&(o(e,t.to,n.to),t.to=n.to)})},n.updateViewportTimeSpan||400)}}function u(e,t){var n=e.state.foldGutter
if(n){var r=t.line
r>=n.from&&r<n.to&&o(e,r,r+1)}}e.defineOption("foldGutter",!1,function(r,i,o){o&&o!=e.Init&&(r.clearGutter(r.state.foldGutter.options.gutter),r.state.foldGutter=null,r.off("gutterClick",s),r.off("change",l),r.off("viewportChange",c),r.off("fold",u),r.off("unfold",u),r.off("swapDoc",l)),i&&(r.state.foldGutter=new t(n(i)),a(r),r.on("gutterClick",s),r.on("change",l),r.on("viewportChange",c),r.on("fold",u),r.on("unfold",u),r.on("swapDoc",l))})
var d=e.Pos}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){return e.line-t.line||e.ch-t.ch}function n(e,t,n,r){this.line=t,this.ch=n,this.cm=e,this.text=e.getLine(t),this.min=r?Math.max(r.from,e.firstLine()):e.firstLine(),this.max=r?Math.min(r.to-1,e.lastLine()):e.lastLine()}function r(e,t){var n=e.cm.getTokenTypeAt(f(e.line,t))
return n&&/\btag\b/.test(n)}function i(e){if(!(e.line>=e.max))return e.ch=0,e.text=e.cm.getLine(++e.line),!0}function o(e){if(!(e.line<=e.min))return e.text=e.cm.getLine(--e.line),e.ch=e.text.length,!0}function a(e){for(;;){var t=e.text.indexOf(">",e.ch)
if(t==-1){if(i(e))continue
return}{if(r(e,t+1)){var n=e.text.lastIndexOf("/",t),o=n>-1&&!/\S/.test(e.text.slice(n+1,t))
return e.ch=t+1,o?"selfClose":"regular"}e.ch=t+1}}}function s(e){for(;;){var t=e.ch?e.text.lastIndexOf("<",e.ch-1):-1
if(t==-1){if(o(e))continue
return}if(r(e,t+1)){m.lastIndex=t,e.ch=t
var n=m.exec(e.text)
if(n&&n.index==t)return n}else e.ch=t}}function l(e){for(;;){m.lastIndex=e.ch
var t=m.exec(e.text)
if(!t){if(i(e))continue
return}{if(r(e,t.index+1))return e.ch=t.index+t[0].length,t
e.ch=t.index+1}}}function c(e){for(;;){var t=e.ch?e.text.lastIndexOf(">",e.ch-1):-1
if(t==-1){if(o(e))continue
return}{if(r(e,t+1)){var n=e.text.lastIndexOf("/",t),i=n>-1&&!/\S/.test(e.text.slice(n+1,t))
return e.ch=t+1,i?"selfClose":"regular"}e.ch=t}}}function u(e,t){for(var n=[];;){var r,i=l(e),o=e.line,s=e.ch-(i?i[0].length:0)
if(!i||!(r=a(e)))return
if("selfClose"!=r)if(i[1]){for(var c=n.length-1;c>=0;--c)if(n[c]==i[2]){n.length=c
break}if(c<0&&(!t||t==i[2]))return{tag:i[2],from:f(o,s),to:f(e.line,e.ch)}}else n.push(i[2])}}function d(e,t){for(var n=[];;){var r=c(e)
if(!r)return
if("selfClose"!=r){var i=e.line,o=e.ch,a=s(e)
if(!a)return
if(a[1])n.push(a[2])
else{for(var l=n.length-1;l>=0;--l)if(n[l]==a[2]){n.length=l
break}if(l<0&&(!t||t==a[2]))return{tag:a[2],from:f(e.line,e.ch),to:f(i,o)}}}else s(e)}}var f=e.Pos,p="A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",h=p+"-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",m=new RegExp("<(/?)(["+p+"]["+h+"]*)","g")
e.registerHelper("fold","xml",function(e,r){for(var i=new n(e,r.line,0);;){var o=l(i)
if(!o||i.line!=r.line)return
var s=a(i)
if(!s)return
if(!o[1]&&"selfClose"!=s){var c=f(i.line,i.ch),d=u(i,o[2])
return d&&t(d.from,c)>0?{from:c,to:d.from}:null}}}),e.findMatchingTag=function(e,r,i){var o=new n(e,r.line,r.ch,i)
if(o.text.indexOf(">")!=-1||o.text.indexOf("<")!=-1){var l=a(o),c=l&&f(o.line,o.ch),p=l&&s(o)
if(l&&p&&!(t(o,r)>0)){var h={from:f(o.line,o.ch),to:c,tag:p[2]}
return"selfClose"==l?{open:h,close:null,at:"open"}:p[1]?{open:d(o,p[2]),close:h,at:"close"}:(o=new n(e,c.line,c.ch,i),{open:h,close:u(o,p[2]),at:"open"})}}},e.findEnclosingTag=function(e,t,r,i){for(var o=new n(e,t.line,t.ch,r);;){var a=d(o,i)
if(!a)break
var s=new n(e,t.line,t.ch,r),l=u(s,a.tag)
if(l)return{open:a,close:l}}},e.scanForClosingTag=function(e,t,r,i){var o=new n(e,t.line,t.ch,i?{from:0,to:i}:null)
return u(o,r)}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){this.cm=e,this.options=t,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length
var n=this
e.on("cursorActivity",this.activityFunc=function(){n.cursorActivity()})}function n(e,t,n){var r=e.options.hintOptions,i={}
for(var o in h)i[o]=h[o]
if(r)for(var o in r)void 0!==r[o]&&(i[o]=r[o])
if(n)for(var o in n)void 0!==n[o]&&(i[o]=n[o])
return i.hint.resolve&&(i.hint=i.hint.resolve(e,t)),i}function r(e){return"string"==typeof e?e:e.text}function i(e,t){function n(e,n){var i
i="string"!=typeof n?function(e){return n(e,t)}:r.hasOwnProperty(n)?r[n]:n,a[e]=i}var r={Up:function(){t.moveFocus(-1)},Down:function(){t.moveFocus(1)},PageUp:function(){t.moveFocus(-t.menuSize()+1,!0)},PageDown:function(){t.moveFocus(t.menuSize()-1,!0)},Home:function(){t.setFocus(0)},End:function(){t.setFocus(t.length-1)},Enter:t.pick,Tab:t.pick,Esc:t.close},i=/Mac/.test(navigator.platform)
i&&(r["Ctrl-P"]=function(){t.moveFocus(-1)},r["Ctrl-N"]=function(){t.moveFocus(1)})
var o=e.options.customKeys,a=o?{}:r
if(o)for(var s in o)o.hasOwnProperty(s)&&n(s,o[s])
var l=e.options.extraKeys
if(l)for(var s in l)l.hasOwnProperty(s)&&n(s,l[s])
return a}function o(e,t){for(;t&&t!=e;){if("LI"===t.nodeName.toUpperCase()&&t.parentNode==e)return t
t=t.parentNode}}function a(t,n){this.completion=t,this.data=n,this.picked=!1
var a=this,s=t.cm,l=s.getInputField().ownerDocument,c=l.defaultView||l.parentWindow,f=this.hints=l.createElement("ul"),p=t.cm.options.theme
f.className="CodeMirror-hints "+p,this.selectedHint=n.selectedHint||0
for(var h=n.list,m=0;m<h.length;++m){var g=f.appendChild(l.createElement("li")),v=h[m],y=u+(m!=this.selectedHint?"":" "+d)
null!=v.className&&(y=v.className+" "+y),g.className=y,v.render?v.render(g,n,v):g.appendChild(l.createTextNode(v.displayText||r(v))),g.hintId=m}var b=s.cursorCoords(t.options.alignWithWord?n.from:null),k=b.left,x=b.bottom,w=!0
f.style.left=k+"px",f.style.top=x+"px"
var _=c.innerWidth||Math.max(l.body.offsetWidth,l.documentElement.offsetWidth),C=c.innerHeight||Math.max(l.body.offsetHeight,l.documentElement.offsetHeight);(t.options.container||l.body).appendChild(f)
var S=f.getBoundingClientRect(),M=S.bottom-C,L=f.scrollHeight>f.clientHeight+1,T=s.getScrollInfo()
if(M>0){var A=S.bottom-S.top,E=b.top-(b.bottom-S.top)
if(E-A>0)f.style.top=(x=b.top-A)+"px",w=!1
else if(A>C){f.style.height=C-5+"px",f.style.top=(x=b.bottom-S.top)+"px"
var O=s.getCursor()
n.from.ch!=O.ch&&(b=s.cursorCoords(O),f.style.left=(k=b.left)+"px",S=f.getBoundingClientRect())}}var z=S.right-_
if(z>0&&(S.right-S.left>_&&(f.style.width=_-5+"px",z-=S.right-S.left-_),f.style.left=(k=b.left-z)+"px"),L)for(var N=f.firstChild;N;N=N.nextSibling)N.style.paddingRight=s.display.nativeBarWidth+"px"
if(s.addKeyMap(this.keyMap=i(t,{moveFocus:function(e,t){a.changeActive(a.selectedHint+e,t)},setFocus:function(e){a.changeActive(e)},menuSize:function(){return a.screenAmount()},length:h.length,close:function(){t.close()},pick:function(){a.pick()},data:n})),t.options.closeOnUnfocus){var q
s.on("blur",this.onBlur=function(){q=setTimeout(function(){t.close()},100)}),s.on("focus",this.onFocus=function(){clearTimeout(q)})}return s.on("scroll",this.onScroll=function(){var e=s.getScrollInfo(),n=s.getWrapperElement().getBoundingClientRect(),r=x+T.top-e.top,i=r-(c.pageYOffset||(l.documentElement||l.body).scrollTop)
return w||(i+=f.offsetHeight),i<=n.top||i>=n.bottom?t.close():(f.style.top=r+"px",void(f.style.left=k+T.left-e.left+"px"))}),e.on(f,"dblclick",function(e){var t=o(f,e.target||e.srcElement)
t&&null!=t.hintId&&(a.changeActive(t.hintId),a.pick())}),e.on(f,"click",function(e){var n=o(f,e.target||e.srcElement)
n&&null!=n.hintId&&(a.changeActive(n.hintId),t.options.completeOnSingleClick&&a.pick())}),e.on(f,"mousedown",function(){setTimeout(function(){s.focus()},20)}),e.signal(n,"select",h[this.selectedHint],f.childNodes[this.selectedHint]),!0}function s(e,t){if(!e.somethingSelected())return t
for(var n=[],r=0;r<t.length;r++)t[r].supportsSelection&&n.push(t[r])
return n}function l(e,t,n,r){if(e.async)e(t,r,n)
else{var i=e(t,n)
i&&i.then?i.then(r):r(i)}}function c(t,n){var r,i=t.getHelpers(n,"hint")
if(i.length){var o=function(e,t,n){function r(i){return i==o.length?t(null):void l(o[i],e,n,function(e){e&&e.list.length>0?t(e):r(i+1)})}var o=s(e,i)
r(0)}
return o.async=!0,o.supportsSelection=!0,o}return(r=t.getHelper(t.getCursor(),"hintWords"))?function(t){return e.hint.fromList(t,{words:r})}:e.hint.anyword?function(t,n){return e.hint.anyword(t,n)}:function(){}}var u="CodeMirror-hint",d="CodeMirror-hint-active"
e.showHint=function(e,t,n){if(!t)return e.showHint(n)
n&&n.async&&(t.async=!0)
var r={hint:t}
if(n)for(var i in n)r[i]=n[i]
return e.showHint(r)},e.defineExtension("showHint",function(r){r=n(this,this.getCursor("start"),r)
var i=this.listSelections()
if(!(i.length>1)){if(this.somethingSelected()){if(!r.hint.supportsSelection)return
for(var o=0;o<i.length;o++)if(i[o].head.line!=i[o].anchor.line)return}this.state.completionActive&&this.state.completionActive.close()
var a=this.state.completionActive=new t(this,r)
a.options.hint&&(e.signal(this,"startCompletion",this),a.update(!0))}}),e.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()})
var f=window.requestAnimationFrame||function(e){return setTimeout(e,1e3/60)},p=window.cancelAnimationFrame||clearTimeout
t.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&e.signal(this.data,"close"),this.widget&&this.widget.close(),e.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(t,n){var i=t.list[n]
i.hint?i.hint(this.cm,t,i):this.cm.replaceRange(r(i),i.from||t.from,i.to||t.to,"complete"),e.signal(t,"pick",i),this.close()},cursorActivity:function(){this.debounce&&(p(this.debounce),this.debounce=0)
var e=this.cm.getCursor(),t=this.cm.getLine(e.line)
if(e.line!=this.startPos.line||t.length-e.ch!=this.startLen-this.startPos.ch||e.ch<this.startPos.ch||this.cm.somethingSelected()||!e.ch||this.options.closeCharacters.test(t.charAt(e.ch-1)))this.close()
else{var n=this
this.debounce=f(function(){n.update()}),this.widget&&this.widget.disable()}},update:function(e){if(null!=this.tick){var t=this,n=++this.tick
l(this.options.hint,this.cm,this.options,function(r){t.tick==n&&t.finishUpdate(r,e)})}},finishUpdate:function(t,n){this.data&&e.signal(this.data,"update")
var r=this.widget&&this.widget.picked||n&&this.options.completeSingle
this.widget&&this.widget.close(),this.data=t,t&&t.list.length&&(r&&1==t.list.length?this.pick(t,0):(this.widget=new a(this,t),e.signal(t,"shown")))}},a.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap)
var e=this.completion.cm
this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap)
var e=this
this.keyMap={Enter:function(){e.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(t,n){if(t>=this.data.list.length?t=n?this.data.list.length-1:0:t<0&&(t=n?0:this.data.list.length-1),this.selectedHint!=t){var r=this.hints.childNodes[this.selectedHint]
r&&(r.className=r.className.replace(" "+d,"")),r=this.hints.childNodes[this.selectedHint=t],r.className+=" "+d,r.offsetTop<this.hints.scrollTop?this.hints.scrollTop=r.offsetTop-3:r.offsetTop+r.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=r.offsetTop+r.offsetHeight-this.hints.clientHeight+3),e.signal(this.data,"select",this.data.list[this.selectedHint],r)}},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},e.registerHelper("hint","auto",{resolve:c}),e.registerHelper("hint","fromList",function(t,n){var r,i=t.getCursor(),o=t.getTokenAt(i),a=e.Pos(i.line,o.start),s=i
o.start<i.ch&&/\w/.test(o.string.charAt(i.ch-o.start-1))?r=o.string.substr(0,i.ch-o.start):(r="",a=i)
for(var l=[],c=0;c<n.words.length;c++){var u=n.words[c]
u.slice(0,r.length)==r&&l.push(u)}if(l.length)return{list:l,from:a,to:s}}),e.commands.autocomplete=e.showHint
var h={hint:e.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null}
e.defineOption("hintOptions",null)}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../mode/css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/css/css"],e):e(CodeMirror)}(function(e){"use strict"
var t={link:1,visited:1,active:1,hover:1,focus:1,"first-letter":1,"first-line":1,"first-child":1,before:1,after:1,lang:1}
e.registerHelper("hint","css",function(n){function r(e){for(var t in e)c&&0!=t.lastIndexOf(c,0)||d.push(t)}var i=n.getCursor(),o=n.getTokenAt(i),a=e.innerMode(n.getMode(),o.state)
if("css"==a.mode.name){if("keyword"==o.type&&0=="!important".indexOf(o.string))return{list:["!important"],from:e.Pos(i.line,o.start),to:e.Pos(i.line,o.end)}
var s=o.start,l=i.ch,c=o.string.slice(0,l-s);/[^\w$_-]/.test(c)&&(c="",s=l=i.ch)
var u=e.resolveMode("text/css"),d=[],f=a.state.state
return"pseudo"==f||"variable-3"==o.type?r(t):"block"==f||"maybeprop"==f?r(u.propertyKeywords):"prop"==f||"parens"==f||"at"==f||"params"==f?(r(u.valueKeywords),r(u.colorKeywords)):"media"!=f&&"media_parens"!=f||(r(u.mediaTypes),r(u.mediaFeatures)),d.length?{list:d,from:e.Pos(i.line,s),to:e.Pos(i.line,l)}:void 0}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./xml-hint")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./xml-hint"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t in d)d.hasOwnProperty(t)&&(e.attrs[t]=d[t])}function n(t,n){var r={schemaInfo:u}
if(n)for(var i in n)r[i]=n[i]
return e.hint.xml(t,r)}var r="ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu".split(" "),i=["_blank","_self","_top","_parent"],o=["ascii","utf-8","utf-16","latin1","latin1"],a=["get","post","put","delete"],s=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],l=["all","screen","print","embossed","braille","handheld","print","projection","screen","tty","tv","speech","3d-glasses","resolution [>][<][=] [X]","device-aspect-ratio: X/Y","orientation:portrait","orientation:landscape","device-height: [X]","device-width: [X]"],c={attrs:{}},u={a:{attrs:{href:null,ping:null,type:null,media:l,target:i,hreflang:r}},abbr:c,acronym:c,address:c,applet:c,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:l,hreflang:r,type:null,shape:["default","rect","circle","poly"]}},article:c,aside:c,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["","autoplay"],loop:["","loop"],controls:["","controls"]}},b:c,base:{attrs:{href:null,target:i}},basefont:c,bdi:c,bdo:c,big:c,blockquote:{attrs:{cite:null}},body:c,br:c,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["","autofocus"],disabled:["","autofocus"],formenctype:s,formmethod:a,formnovalidate:["","novalidate"],formtarget:i,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:c,center:c,cite:c,code:c,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["","disabled"],checked:["","checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["","disabled"],multiple:["","multiple"]}},datalist:{attrs:{data:null}},dd:c,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["","open"]}},dfn:c,dir:c,div:c,dl:c,dt:c,em:c,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["","disabled"],form:null,name:null}},figcaption:c,figure:c,font:c,footer:c,form:{attrs:{action:null,name:null,"accept-charset":o,autocomplete:["on","off"],enctype:s,method:a,novalidate:["","novalidate"],target:i}},frame:c,frameset:c,h1:c,h2:c,h3:c,h4:c,h5:c,h6:c,head:{attrs:{},children:["title","base","link","style","meta","script","noscript","command"]},header:c,hgroup:c,hr:c,html:{attrs:{manifest:null},children:["head","body"]},i:c,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["","seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["","autofocus"],checked:["","checked"],disabled:["","disabled"],formenctype:s,formmethod:a,formnovalidate:["","novalidate"],formtarget:i,multiple:["","multiple"],readonly:["","readonly"],required:["","required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:c,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["","autofocus"],disabled:["","disabled"],keytype:["RSA"]}},label:{attrs:{"for":null,form:null}},legend:c,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:r,media:l,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:c,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:o,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:c,noframes:c,noscript:c,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["","typemustmatch"]}},ol:{attrs:{reversed:["","reversed"],start:null,type:["1","a","A","i","I"]}},optgroup:{attrs:{disabled:["","disabled"],label:null}},option:{attrs:{disabled:["","disabled"],label:null,selected:["","selected"],value:null}},output:{attrs:{"for":null,form:null,name:null}},p:c,param:{attrs:{name:null,value:null}},pre:c,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:c,rt:c,ruby:c,s:c,samp:c,script:{attrs:{type:["text/javascript"],src:null,async:["","async"],defer:["","defer"],charset:o}},section:c,select:{attrs:{form:null,name:null,size:null,autofocus:["","autofocus"],disabled:["","disabled"],multiple:["","multiple"]}},small:c,source:{attrs:{src:null,type:null,media:null}},span:c,strike:c,strong:c,style:{attrs:{type:["text/css"],media:l,scoped:null}},sub:c,summary:c,sup:c,table:c,tbody:c,td:{attrs:{colspan:null,rowspan:null,headers:null}},textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["","autofocus"],disabled:["","disabled"],readonly:["","readonly"],required:["","required"],wrap:["soft","hard"]}},tfoot:c,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:c,time:{attrs:{datetime:null}},title:c,tr:c,track:{attrs:{src:null,label:null,"default":null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:r}},tt:c,u:c,ul:c,"var":c,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["","autoplay"],mediagroup:["movie"],muted:["","muted"],controls:["","controls"]}},wbr:c},d={accesskey:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],"class":null,contenteditable:["true","false"],contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["en","es"],spellcheck:["true","false"],autocorrect:["true","false"],autocapitalize:["true","false"],style:null,tabindex:["1","2","3","4","5","6","7","8","9"],title:null,translate:["yes","no"],onclick:null,rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"]}
t(c)
for(var f in u)u.hasOwnProperty(f)&&u[f]!=c&&t(u[f])
e.htmlSchema=u,e.registerHelper("hint","html",n)}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(e,t){for(var n=0,r=e.length;n<r;++n)t(e[n])}function n(e,t){if(!Array.prototype.indexOf){for(var n=e.length;n--;)if(e[n]===t)return!0
return!1}return e.indexOf(t)!=-1}function r(t,n,r,i){var o=t.getCursor(),a=r(t,o)
if(!/\b(?:string|comment)\b/.test(a.type)){var s=e.innerMode(t.getMode(),a.state)
if("json"!==s.mode.helperType){a.state=s.state,/^[\w$_]*$/.test(a.string)?a.end>o.ch&&(a.end=o.ch,a.string=a.string.slice(0,o.ch-a.start)):a={start:o.ch,end:o.ch,string:"",state:a.state,type:"."==a.string?"property":null}
for(var u=a;"property"==u.type;){if(u=r(t,c(o.line,u.start)),"."!=u.string)return
if(u=r(t,c(o.line,u.start)),!d)var d=[]
d.push(u)}return{list:l(a,d,n,i),from:c(o.line,a.start),to:c(o.line,a.end)}}}}function i(e,t){return r(e,p,function(e,t){return e.getTokenAt(t)},t)}function o(e,t){var n=e.getTokenAt(t)
return t.ch==n.start+1&&"."==n.string.charAt(0)?(n.end=n.start,n.string=".",n.type="property"):/^\.[\w$_]*$/.test(n.string)&&(n.type="property",n.start++,n.string=n.string.replace(/\./,"")),n}function a(e,t){return r(e,h,o,t)}function s(e,t){if(Object.getOwnPropertyNames&&Object.getPrototypeOf)for(var n=e;n;n=Object.getPrototypeOf(n))Object.getOwnPropertyNames(n).forEach(t)
else for(var r in e)t(r)}function l(e,r,i,o){function a(e){0!=e.lastIndexOf(p,0)||n(c,e)||c.push(e)}function l(e){"string"==typeof e?t(u,a):e instanceof Array?t(d,a):e instanceof Function&&t(f,a),s(e,a)}var c=[],p=e.string,h=o&&o.globalScope||window
if(r&&r.length){var m,g=r.pop()
for(g.type&&0===g.type.indexOf("variable")?(o&&o.additionalContext&&(m=o.additionalContext[g.string]),o&&o.useGlobalScope===!1||(m=m||h[g.string])):"string"==g.type?m="":"atom"==g.type?m=1:"function"==g.type&&(null==h.jQuery||"$"!=g.string&&"jQuery"!=g.string||"function"!=typeof h.jQuery?null!=h._&&"_"==g.string&&"function"==typeof h._&&(m=h._()):m=h.jQuery());null!=m&&r.length;)m=m[r.pop().string]
null!=m&&l(m)}else{for(var v=e.state.localVars;v;v=v.next)a(v.name)
for(var v=e.state.globalVars;v;v=v.next)a(v.name)
o&&o.useGlobalScope===!1||l(h),t(i,a)}return c}var c=e.Pos
e.registerHelper("hint","javascript",i),e.registerHelper("hint","coffeescript",a)
var u="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),d="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),f="prototype apply call bind".split(" "),p="break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield".split(" "),h="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../mode/sql/sql")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){return"[object Array]"==Object.prototype.toString.call(e)}function n(t){var n=t.doc.modeOption
return"sql"===n&&(n="text/x-sql"),e.resolveMode(n).keywords}function r(t){var n=t.doc.modeOption
return"sql"===n&&(n="text/x-sql"),e.resolveMode(n).identifierQuote||"`"}function i(e){return"string"==typeof e?e:e.text}function o(e,n){return t(n)&&(n={columns:n}),n.text||(n.text=e),n}function a(e){var n={}
if(t(e))for(var r=e.length-1;r>=0;r--){var a=e[r]
n[i(a).toUpperCase()]=o(i(a),a)}else if(e)for(var s in e)n[s.toUpperCase()]=o(s,e[s])
return n}function s(e){return g[e.toUpperCase()]}function l(e){var t={}
for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t}function c(e,t){var n=e.length,r=i(t).substr(0,n)
return e.toUpperCase()===r.toUpperCase()}function u(e,n,r,i){if(t(r))for(var o=0;o<r.length;o++)c(n,r[o])&&e.push(i(r[o]))
else for(var a in r)if(r.hasOwnProperty(a)){var s=r[a]
s=s&&s!==!0?s.displayText?{text:s.text,displayText:s.displayText}:s.text:a,c(n,s)&&e.push(i(s))}}function d(e){"."==e.charAt(0)&&(e=e.substr(1))
for(var t=e.split(b+b),n=0;n<t.length;n++)t[n]=t[n].replace(new RegExp(b,"g"),"")
return t.join(b)}function f(e){for(var t=i(e).split("."),n=0;n<t.length;n++)t[n]=b+t[n].replace(new RegExp(b,"g"),b+b)+b
var r=t.join(".")
return"string"==typeof e?r:(e=l(e),e.text=r,e)}function p(e,t,n,r){for(var i=!1,o=[],a=t.start,c=!0;c;)c="."==t.string.charAt(0),i=i||t.string.charAt(0)==b,a=t.start,o.unshift(d(t.string)),t=r.getTokenAt(x(e.line,t.start)),"."==t.string&&(c=!0,t=r.getTokenAt(x(e.line,t.start)))
var p=o.join(".")
u(n,p,g,function(e){return i?f(e):e}),u(n,p,v,function(e){return i?f(e):e}),p=o.pop()
var h=o.join("."),y=!1,k=h
if(!s(h)){var w=h
h=m(h,r),h!==w&&(y=!0)}var _=s(h)
return _&&_.columns&&(_=_.columns),_&&u(n,p,_,function(e){var t=h
return 1==y&&(t=k),"string"==typeof e?e=t+"."+e:(e=l(e),e.text=t+"."+e.text),i?f(e):e}),a}function h(e,t){for(var n=e.split(/\s+/),r=0;r<n.length;r++)n[r]&&t(n[r].replace(/[,;]/g,""))}function m(e,t){for(var n=t.doc,r=n.getValue(),i=e.toUpperCase(),o="",a="",l=[],c={start:x(0,0),end:x(t.lastLine(),t.getLineHandle(t.lastLine()).length)},u=r.indexOf(k.QUERY_DIV);u!=-1;)l.push(n.posFromIndex(u)),u=r.indexOf(k.QUERY_DIV,u+1)
l.unshift(x(0,0)),l.push(x(t.lastLine(),t.getLineHandle(t.lastLine()).text.length))
for(var d=null,f=t.getCursor(),p=0;p<l.length;p++){if((null==d||w(f,d)>0)&&w(f,l[p])<=0){c={start:d,end:l[p]}
break}d=l[p]}if(c.start)for(var m=n.getRange(c.start,c.end,!1),p=0;p<m.length;p++){var g=m[p]
if(h(g,function(e){var t=e.toUpperCase()
t===i&&s(o)&&(a=o),t!==k.ALIAS_KEYWORD&&(o=e)}),a)break}return a}var g,v,y,b,k={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},x=e.Pos,w=e.cmpPos
e.registerHelper("hint","sql",function(e,t){g=a(t&&t.tables)
var i=t&&t.defaultTable,o=t&&t.disableKeywords
v=i&&s(i),y=n(e),b=r(e),i&&!v&&(v=m(i,e)),v=v||[],v.columns&&(v=v.columns)
var l,c,d,f=e.getCursor(),h=[],k=e.getTokenAt(f)
if(k.end>f.ch&&(k.end=f.ch,k.string=k.string.slice(0,f.ch-k.start)),k.string.match(/^[.`"\w@]\w*$/)?(d=k.string,l=k.start,c=k.end):(l=c=f.ch,d=""),"."==d.charAt(0)||d.charAt(0)==b)l=p(f,k,h,e)
else{var w=function(e,t){return"object"==typeof e?e.className=t:e={text:e,className:t},e}
u(h,d,v,function(e){return w(e,"CodeMirror-hint-table CodeMirror-hint-default-table")}),u(h,d,g,function(e){return w(e,"CodeMirror-hint-table")}),o||u(h,d,y,function(e){return w(e.toUpperCase(),"CodeMirror-hint-keyword")})}return{list:h,from:x(f.line,l),to:x(f.line,c)}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n){return n?e.indexOf(t)>=0:0==e.lastIndexOf(t,0)}function n(n,i){var o=i&&i.schemaInfo,a=i&&i.quoteChar||'"',s=i&&i.matchInMiddle
if(o){var l=n.getCursor(),c=n.getTokenAt(l)
c.end>l.ch&&(c.end=l.ch,c.string=c.string.slice(0,l.ch-c.start))
var u=e.innerMode(n.getMode(),c.state)
if("xml"==u.mode.name){var d,f,p=[],h=!1,m=/\btag\b/.test(c.type)&&!/>$/.test(c.string),g=m&&/^\w/.test(c.string)
if(g){var v=n.getLine(l.line).slice(Math.max(0,c.start-2),c.start),y=/<\/$/.test(v)?"close":/<$/.test(v)?"open":null
y&&(f=c.start-("close"==y?2:1))}else m&&"<"==c.string?y="open":m&&"</"==c.string&&(y="close")
if(!m&&!u.state.tagName||y){g&&(d=c.string),h=y
var b=u.state.context,k=b&&o[b.tagName],x=b?k&&k.children:o["!top"]
if(x&&"close"!=y)for(var w=0;w<x.length;++w)d&&!t(x[w],d,s)||p.push("<"+x[w])
else if("close"!=y)for(var _ in o)!o.hasOwnProperty(_)||"!top"==_||"!attrs"==_||d&&!t(_,d,s)||p.push("<"+_)
b&&(!d||"close"==y&&t(b.tagName,d,s))&&p.push("</"+b.tagName+">")}else{var k=o[u.state.tagName],C=k&&k.attrs,S=o["!attrs"]
if(!C&&!S)return
if(C){if(S){var M={}
for(var L in S)S.hasOwnProperty(L)&&(M[L]=S[L])
for(var L in C)C.hasOwnProperty(L)&&(M[L]=C[L])
C=M}}else C=S
if("string"==c.type||"="==c.string){var T,v=n.getRange(r(l.line,Math.max(0,l.ch-60)),r(l.line,"string"==c.type?c.start:c.end)),A=v.match(/([^\s\u00a0=<>\"\']+)=$/)
if(!A||!C.hasOwnProperty(A[1])||!(T=C[A[1]]))return
if("function"==typeof T&&(T=T.call(this,n)),"string"==c.type){d=c.string
var E=0;/['"]/.test(c.string.charAt(0))&&(a=c.string.charAt(0),d=c.string.slice(1),E++)
var O=c.string.length;/['"]/.test(c.string.charAt(O-1))&&(a=c.string.charAt(O-1),d=c.string.substr(E,O-2)),h=!0}for(var w=0;w<T.length;++w)d&&!t(T[w],d,s)||p.push(a+T[w]+a)}else{"attribute"==c.type&&(d=c.string,h=!0)
for(var z in C)!C.hasOwnProperty(z)||d&&!t(z,d,s)||p.push(z)}}return{list:p,from:h?r(l.line,null==f?c.start:f):l,to:h?r(l.line,c.end):l}}}}var r=e.Pos
e.registerHelper("hint","xml",n)}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.overlayMode=function(t,n,r){return{startState:function(){return{base:e.startState(t),overlay:e.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(r){return{base:e.copyState(t,r.base),overlay:e.copyState(n,r.overlay),basePos:r.basePos,baseCur:null,overlayPos:r.overlayPos,overlayCur:null}},token:function(e,i){return(e!=i.streamSeen||Math.min(i.basePos,i.overlayPos)<e.start)&&(i.streamSeen=e,i.basePos=i.overlayPos=e.start),e.start==i.basePos&&(i.baseCur=t.token(e,i.base),i.basePos=e.pos),e.start==i.overlayPos&&(e.pos=e.start,i.overlayCur=n.token(e,i.overlay),i.overlayPos=e.pos),e.pos=Math.min(i.basePos,i.overlayPos),null==i.overlayCur?i.baseCur:null!=i.baseCur&&i.overlay.combineTokens||r&&null==i.overlay.combineTokens?i.baseCur+" "+i.overlayCur:i.overlayCur},indent:t.indent&&function(e,n,r){return t.indent(e.base,n,r)},electricChars:t.electricChars,innerMode:function(e){return{state:e.base,mode:t}},blankLine:function(e){var i,o
return t.blankLine&&(i=t.blankLine(e.base)),n.blankLine&&(o=n.blankLine(e.overlay)),null==o?i:r&&null!=i?i+" "+o:o}}}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/
var n=""
return e instanceof RegExp?(e.ignoreCase&&(n="i"),e=e.source):e=String(e),new RegExp((t===!1?"":"^")+"(?:"+e+")",n)}function r(e){if(!e)return null
if(e.apply)return e
if("string"==typeof e)return e.replace(/\./g," ")
for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "))
return t}function i(e,i){(e.next||e.push)&&t(i,e.next||e.push),this.regex=n(e.regex),this.token=r(e.token),this.data=e}function o(e,t){return function(n,r){if(r.pending){var i=r.pending.shift()
return 0==r.pending.length&&(r.pending=null),n.pos+=i.text.length,i.token}if(r.local){if(r.local.end&&n.match(r.local.end)){var o=r.local.endToken||null
return r.local=r.localState=null,o}var a,o=r.local.mode.token(n,r.localState)
return r.local.endScan&&(a=r.local.endScan.exec(n.current()))&&(n.pos=n.start+a.index),o}for(var l=e[r.state],c=0;c<l.length;c++){var u=l[c],d=(!u.data.sol||n.sol())&&n.match(u.regex)
if(d){u.data.next?r.state=u.data.next:u.data.push?((r.stack||(r.stack=[])).push(r.state),r.state=u.data.push):u.data.pop&&r.stack&&r.stack.length&&(r.state=r.stack.pop()),u.data.mode&&s(t,r,u.data.mode,u.token),u.data.indent&&r.indent.push(n.indentation()+t.indentUnit),u.data.dedent&&r.indent.pop()
var f=u.token
if(f&&f.apply&&(f=f(d)),d.length>2&&u.token&&"string"!=typeof u.token){r.pending=[]
for(var p=2;p<d.length;p++)d[p]&&r.pending.push({text:d[p],token:u.token[p-1]})
return n.backUp(d[0].length-(d[1]?d[1].length:0)),f[0]}return f&&f.join?f[0]:f}}return n.next(),null}}function a(e,t){if(e===t)return!0
if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1
var n=0
for(var r in e)if(e.hasOwnProperty(r)){if(!t.hasOwnProperty(r)||!a(e[r],t[r]))return!1
n++}for(var r in t)t.hasOwnProperty(r)&&n--
return 0==n}function s(t,r,i,o){var s
if(i.persistent)for(var l=r.persistentStates;l&&!s;l=l.next)(i.spec?a(i.spec,l.spec):i.mode==l.mode)&&(s=l)
var c=s?s.mode:i.mode||e.getMode(t,i.spec),u=s?s.state:e.startState(c)
i.persistent&&!s&&(r.persistentStates={mode:c,spec:i.spec,state:u,next:r.persistentStates}),r.localState=u,r.local={mode:c,end:i.end&&n(i.end),endScan:i.end&&i.forceEnd!==!1&&n(i.end,!1),endToken:o&&o.join?o[o.length-1]:o}}function l(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}function c(t,n){return function(r,i,o){if(r.local&&r.local.mode.indent)return r.local.mode.indent(r.localState,i,o)
if(null==r.indent||r.local||n.dontIndentStates&&l(r.state,n.dontIndentStates)>-1)return e.Pass
var a=r.indent.length-1,s=t[r.state]
e:for(;;){for(var c=0;c<s.length;c++){var u=s[c]
if(u.data.dedent&&u.data.dedentIfLineStart!==!1){var d=u.regex.exec(i)
if(d&&d[0]){a--,(u.next||u.push)&&(s=t[u.next||u.push]),i=i.slice(d[0].length)
continue e}}}break}return a<0?0:r.indent[a]}}e.defineSimpleMode=function(t,n){e.defineMode(t,function(t){return e.simpleMode(t,n)})},e.simpleMode=function(n,r){t(r,"start")
var a={},s=r.meta||{},l=!1
for(var u in r)if(u!=s&&r.hasOwnProperty(u))for(var d=a[u]=[],f=r[u],p=0;p<f.length;p++){var h=f[p]
d.push(new i(h,r)),(h.indent||h.dedent)&&(l=!0)}var m={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:l?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)}
t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0))
for(var r=t.persistentStates;r;r=r.next)n.persistentStates={mode:r.mode,spec:r.spec,state:r.state==t.localState?n.localState:e.copyState(r.mode,r.state),next:n.persistentStates}
return n},token:o(a,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:c(a,s)}
if(s)for(var g in s)s.hasOwnProperty(g)&&(m[g]=s[g])
return m}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.multiplexingMode=function(t){function n(e,t,n,r){if("string"==typeof t){var i=e.indexOf(t,n)
return r&&i>-1?i+t.length:i}var o=t.exec(n?e.slice(n):e)
return o?o.index+n+(r?o[0].length:0):-1}var r=Array.prototype.slice.call(arguments,1)
return{startState:function(){return{outer:e.startState(t),innerActive:null,inner:null}},copyState:function(n){return{outer:e.copyState(t,n.outer),innerActive:n.innerActive,inner:n.innerActive&&e.copyState(n.innerActive.mode,n.inner)}},token:function(i,o){if(o.innerActive){var a=o.innerActive,s=i.string
if(!a.close&&i.sol())return o.innerActive=o.inner=null,this.token(i,o)
var l=a.close?n(s,a.close,i.pos,a.parseDelimiters):-1
if(l==i.pos&&!a.parseDelimiters)return i.match(a.close),o.innerActive=o.inner=null,a.delimStyle&&a.delimStyle+" "+a.delimStyle+"-close"
l>-1&&(i.string=s.slice(0,l))
var c=a.mode.token(i,o.inner)
return l>-1&&(i.string=s),l==i.pos&&a.parseDelimiters&&(o.innerActive=o.inner=null),a.innerStyle&&(c=c?c+" "+a.innerStyle:a.innerStyle),c}for(var u=1/0,s=i.string,d=0;d<r.length;++d){var f=r[d],l=n(s,f.open,i.pos)
if(l==i.pos){f.parseDelimiters||i.match(f.open),o.innerActive=f
var p=0
if(t.indent){var h=t.indent(o.outer,"","")
h!==e.Pass&&(p=h)}return o.inner=e.startState(f.mode,p),f.delimStyle&&f.delimStyle+" "+f.delimStyle+"-open"}l!=-1&&l<u&&(u=l)}u!=1/0&&(i.string=s.slice(0,u))
var m=t.token(i,o.outer)
return u!=1/0&&(i.string=s),m},indent:function(n,r,i){var o=n.innerActive?n.innerActive.mode:t
return o.indent?o.indent(n.innerActive?n.inner:n.outer,r,i):e.Pass},blankLine:function(n){var i=n.innerActive?n.innerActive.mode:t
if(i.blankLine&&i.blankLine(n.innerActive?n.inner:n.outer),n.innerActive)"\n"===n.innerActive.close&&(n.innerActive=n.inner=null)
else for(var o=0;o<r.length;++o){var a=r[o]
"\n"===a.open&&(n.innerActive=a,n.inner=e.startState(a.mode,i.indent?i.indent(n.outer,"",""):0))}},electricChars:t.electricChars,innerMode:function(e){return e.inner?{state:e.inner,mode:e.innerActive.mode}:{state:e.outer,mode:t}}}}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../dialog/dialog")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../dialog/dialog"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n,r,i){e.openDialog?e.openDialog(t,i,{value:r,selectValueOnOpen:!0}):i(prompt(n,r))}function n(e){return e.phrase("Jump to line:")+' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use line:column or scroll% syntax)")+"</span>"}function r(e,t){var n=Number(t)
return/^[-+]/.test(t)?e.getCursor().line+n:n-1}e.commands.jumpToLine=function(e){var i=e.getCursor()
t(e,n(e),e.phrase("Jump to line:"),i.line+1+":"+i.ch,function(t){if(t){var n
if(n=/^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(t))e.setCursor(r(e,n[1]),Number(n[2]))
else if(n=/^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(t)){var o=Math.round(e.lineCount()*Number(n[1])/100);/^[-+]/.test(n[1])&&(o=i.line+o+1),e.setCursor(o-1,i.ch)}else(n=/^\s*\:?\s*([\+\-]?\d+)\s*/.exec(t))&&e.setCursor(r(e,n[1]),i.ch)}})},e.keyMap["default"]["Alt-G"]="jumpToLine"}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./searchcursor"),require("../dialog/dialog")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./searchcursor","../dialog/dialog"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){return"string"==typeof e?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),t?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(t){e.lastIndex=t.pos
var n=e.exec(t.string)
return n&&n.index==t.pos?(t.pos+=n[0].length||1,"searching"):void(n?t.pos=n.index:t.skipToEnd())}}}function n(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}function r(e){return e.state.search||(e.state.search=new n)}function i(e){return"string"==typeof e&&e==e.toLowerCase()}function o(e,t,n){return e.getSearchCursor(t,n,{caseFold:i(t),multiline:!0})}function a(e,t,n,r,i){e.openDialog(t,r,{value:n,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){h(e)},onKeyDown:i})}function s(e,t,n,r,i){e.openDialog?e.openDialog(t,i,{value:r,selectValueOnOpen:!0}):i(prompt(n,r))}function l(e,t,n,r){e.openConfirm?e.openConfirm(t,r):confirm(n)&&r[0]()}function c(e){return e.replace(/\\(.)/g,function(e,t){return"n"==t?"\n":"r"==t?"\r":t})}function u(e){var t=e.match(/^\/(.*)\/([a-z]*)$/)
if(t)try{e=new RegExp(t[1],t[2].indexOf("i")==-1?"":"i")}catch(n){}else e=c(e)
return("string"==typeof e?""==e:e.test(""))&&(e=/x^/),e}function d(e,n,r){n.queryText=r,n.query=u(r),e.removeOverlay(n.overlay,i(n.query)),n.overlay=t(n.query,i(n.query)),e.addOverlay(n.overlay),e.showMatchesOnScrollbar&&(n.annotate&&(n.annotate.clear(),n.annotate=null),n.annotate=e.showMatchesOnScrollbar(n.query,i(n.query)))}function f(t,n,i,o){var l=r(t)
if(l.query)return p(t,n)
var c=t.getSelection()||l.lastQuery
if(c instanceof RegExp&&"x^"==c.source&&(c=null),i&&t.openDialog){var u=null,f=function(n,r){e.e_stop(r),n&&(n!=l.queryText&&(d(t,l,n),l.posFrom=l.posTo=t.getCursor()),u&&(u.style.opacity=1),p(t,r.shiftKey,function(e,n){var r
n.line<3&&document.querySelector&&(r=t.display.wrapper.querySelector(".CodeMirror-dialog"))&&r.getBoundingClientRect().bottom-4>t.cursorCoords(n,"window").top&&((u=r).style.opacity=.4)}))}
a(t,m(t),c,f,function(n,i){var o=e.keyName(n),a=t.getOption("extraKeys"),s=a&&a[o]||e.keyMap[t.getOption("keyMap")][o]
"findNext"==s||"findPrev"==s||"findPersistentNext"==s||"findPersistentPrev"==s?(e.e_stop(n),d(t,r(t),i),t.execCommand(s)):"find"!=s&&"findPersistent"!=s||(e.e_stop(n),f(i,n))}),o&&c&&(d(t,l,c),p(t,n))}else s(t,m(t),"Search for:",c,function(e){e&&!l.query&&t.operation(function(){d(t,l,e),l.posFrom=l.posTo=t.getCursor(),p(t,n)})})}function p(t,n,i){t.operation(function(){var a=r(t),s=o(t,a.query,n?a.posFrom:a.posTo);(s.find(n)||(s=o(t,a.query,n?e.Pos(t.lastLine()):e.Pos(t.firstLine(),0)),s.find(n)))&&(t.setSelection(s.from(),s.to()),t.scrollIntoView({from:s.from(),to:s.to()},20),a.posFrom=s.from(),a.posTo=s.to(),i&&i(s.from(),s.to()))})}function h(e){e.operation(function(){var t=r(e)
t.lastQuery=t.query,t.query&&(t.query=t.queryText=null,e.removeOverlay(t.overlay),t.annotate&&(t.annotate.clear(),t.annotate=null))})}function m(e){return'<span class="CodeMirror-search-label">'+e.phrase("Search:")+'</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use /re/ syntax for regexp search)")+"</span>"}function g(e){return' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use /re/ syntax for regexp search)")+"</span>"}function v(e){return'<span class="CodeMirror-search-label">'+e.phrase("With:")+'</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/>'}function y(e){return'<span class="CodeMirror-search-label">'+e.phrase("Replace?")+"</span> <button>"+e.phrase("Yes")+"</button> <button>"+e.phrase("No")+"</button> <button>"+e.phrase("All")+"</button> <button>"+e.phrase("Stop")+"</button> "}function b(e,t,n){e.operation(function(){for(var r=o(e,t);r.findNext();)if("string"!=typeof t){var i=e.getRange(r.from(),r.to()).match(t)
r.replace(n.replace(/\$(\d)/g,function(e,t){return i[t]}))}else r.replace(n)})}function k(e,t){if(!e.getOption("readOnly")){var n=e.getSelection()||r(e).lastQuery,i='<span class="CodeMirror-search-label">'+(t?e.phrase("Replace all:"):e.phrase("Replace:"))+"</span>"
s(e,i+g(e),i,n,function(n){n&&(n=u(n),s(e,v(e),e.phrase("Replace with:"),"",function(r){if(r=c(r),t)b(e,n,r)
else{h(e)
var i=o(e,n,e.getCursor("from")),a=function(){var t,c=i.from()
!(t=i.findNext())&&(i=o(e,n),!(t=i.findNext())||c&&i.from().line==c.line&&i.from().ch==c.ch)||(e.setSelection(i.from(),i.to()),e.scrollIntoView({from:i.from(),to:i.to()}),l(e,y(e),e.phrase("Replace?"),[function(){s(t)},a,function(){b(e,n,r)}]))},s=function(e){i.replace("string"==typeof n?r:r.replace(/\$(\d)/g,function(t,n){return e[n]})),a()}
a()}}))})}}e.commands.find=function(e){h(e),f(e)},e.commands.findPersistent=function(e){h(e),f(e,!1,!0)},e.commands.findPersistentNext=function(e){f(e,!1,!0,!0)},e.commands.findPersistentPrev=function(e){f(e,!0,!0,!0)},e.commands.findNext=f,e.commands.findPrev=function(e){f(e,!0)},e.commands.clearSearch=h,e.commands.replace=k,e.commands.replaceAll=function(e){k(e,!0)}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){var t=e.flags
return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function n(e,n){for(var r=t(e),i=r,o=0;o<n.length;o++)i.indexOf(n.charAt(o))==-1&&(i+=n.charAt(o))
return r==i?e:new RegExp(e.source,i)}function r(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function i(e,t,r){t=n(t,"g")
for(var i=r.line,o=r.ch,a=e.lastLine();i<=a;i++,o=0){t.lastIndex=o
var s=e.getLine(i),l=t.exec(s)
if(l)return{from:m(i,l.index),to:m(i,l.index+l[0].length),match:l}}}function o(e,t,o){if(!r(t))return i(e,t,o)
t=n(t,"gm")
for(var a,s=1,l=o.line,c=e.lastLine();l<=c;){for(var u=0;u<s&&!(l>c);u++){var d=e.getLine(l++)
a=null==a?d:a+"\n"+d}s=2*s,t.lastIndex=o.ch
var f=t.exec(a)
if(f){var p=a.slice(0,f.index).split("\n"),h=f[0].split("\n"),g=o.line+p.length-1,v=p[p.length-1].length
return{from:m(g,v),to:m(g+h.length-1,1==h.length?v+h[0].length:h[h.length-1].length),match:f}}}}function a(e,t){for(var n,r=0;;){t.lastIndex=r
var i=t.exec(e)
if(!i)return n
if(n=i,r=n.index+(n[0].length||1),r==e.length)return n}}function s(e,t,r){t=n(t,"g")
for(var i=r.line,o=r.ch,s=e.firstLine();i>=s;i--,o=-1){var l=e.getLine(i)
o>-1&&(l=l.slice(0,o))
var c=a(l,t)
if(c)return{from:m(i,c.index),to:m(i,c.index+c[0].length),match:c}}}function l(e,t,r){t=n(t,"gm")
for(var i,o=1,s=r.line,l=e.firstLine();s>=l;){for(var c=0;c<o;c++){var u=e.getLine(s--)
i=null==i?u.slice(0,r.ch):u+"\n"+i}o*=2
var d=a(i,t)
if(d){var f=i.slice(0,d.index).split("\n"),p=d[0].split("\n"),h=s+f.length,g=f[f.length-1].length
return{from:m(h,g),to:m(h+p.length-1,1==p.length?g+p[0].length:p[p.length-1].length),match:d}}}}function c(e,t,n,r){if(e.length==t.length)return n
for(var i=0,o=n+Math.max(0,e.length-t.length);;){if(i==o)return i
var a=i+o>>1,s=r(e.slice(0,a)).length
if(s==n)return a
s>n?o=a:i=a+1}}function u(e,t,n,r){if(!t.length)return null
var i=r?p:h,o=i(t).split(/\r|\n\r?/)
e:for(var a=n.line,s=n.ch,l=e.lastLine()+1-o.length;a<=l;a++,s=0){var u=e.getLine(a).slice(s),d=i(u)
if(1==o.length){var f=d.indexOf(o[0])
if(f==-1)continue e
var n=c(u,d,f,i)+s
return{from:m(a,c(u,d,f,i)+s),to:m(a,c(u,d,f+o[0].length,i)+s)}}var g=d.length-o[0].length
if(d.slice(g)==o[0]){for(var v=1;v<o.length-1;v++)if(i(e.getLine(a+v))!=o[v])continue e
var y=e.getLine(a+o.length-1),b=i(y),k=o[o.length-1]
if(b.slice(0,k.length)==k)return{from:m(a,c(u,d,g,i)+s),to:m(a+o.length-1,c(y,b,k.length,i))}}}}function d(e,t,n,r){if(!t.length)return null
var i=r?p:h,o=i(t).split(/\r|\n\r?/)
e:for(var a=n.line,s=n.ch,l=e.firstLine()-1+o.length;a>=l;a--,s=-1){var u=e.getLine(a)
s>-1&&(u=u.slice(0,s))
var d=i(u)
if(1==o.length){var f=d.lastIndexOf(o[0])
if(f==-1)continue e
return{from:m(a,c(u,d,f,i)),to:m(a,c(u,d,f+o[0].length,i))}}var g=o[o.length-1]
if(d.slice(0,g.length)==g){for(var v=1,n=a-o.length+1;v<o.length-1;v++)if(i(e.getLine(n+v))!=o[v])continue e
var y=e.getLine(a+1-o.length),b=i(y)
if(b.slice(b.length-o[0].length)==o[0])return{from:m(a+1-o.length,c(y,b,y.length-o[0].length,i)),to:m(a,c(u,d,g.length,i))}}}}function f(e,t,r,a){this.atOccurrence=!1,this.doc=e,r=r?e.clipPos(r):m(0,0),this.pos={from:r,to:r}
var c
"object"==typeof a?c=a.caseFold:(c=a,a=null),"string"==typeof t?(null==c&&(c=!1),this.matches=function(n,r){return(n?d:u)(e,t,r,c)}):(t=n(t,"gm"),a&&a.multiline===!1?this.matches=function(n,r){return(n?s:i)(e,t,r)}:this.matches=function(n,r){return(n?l:o)(e,t,r)})}var p,h,m=e.Pos
String.prototype.normalize?(p=function(e){return e.normalize("NFD").toLowerCase()},h=function(e){return e.normalize("NFD")}):(p=function(e){return e.toLowerCase()},h=function(e){return e}),f.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){for(var n=this.matches(t,this.doc.clipPos(t?this.pos.from:this.pos.to));n&&0==e.cmpPos(n.from,n.to);)t?n.from.ch?n.from=m(n.from.line,n.from.ch-1):n=n.from.line==this.doc.firstLine()?null:this.matches(t,this.doc.clipPos(m(n.from.line-1))):n.to.ch<this.doc.getLine(n.to.line).length?n.to=m(n.to.line,n.to.ch+1):n=n.to.line==this.doc.lastLine()?null:this.matches(t,m(n.to.line+1,0))
if(n)return this.pos=n,this.atOccurrence=!0,this.pos.match||!0
var r=m(t?this.doc.firstLine():this.doc.lastLine()+1,0)
return this.pos={from:r,to:r},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var r=e.splitLines(t)
this.doc.replaceRange(r,this.pos.from,this.pos.to,n),this.pos.to=m(this.pos.from.line+r.length-1,r[r.length-1].length+(1==r.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",function(e,t,n){return new f(this.doc,e,t,n)}),e.defineDocExtension("getSearchCursor",function(e,t,n){return new f(this,e,t,n)}),e.defineExtension("selectMatches",function(t,n){for(var r=[],i=this.getSearchCursor(t,this.getCursor("from"),n);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)r.push({anchor:i.from(),head:i.to()})
r.length&&this.setSelections(r,0)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t=0;t<e.state.activeLines.length;t++)e.removeLineClass(e.state.activeLines[t],"wrap",o),e.removeLineClass(e.state.activeLines[t],"background",a),e.removeLineClass(e.state.activeLines[t],"gutter",s)}function n(e,t){if(e.length!=t.length)return!1
for(var n=0;n<e.length;n++)if(e[n]!=t[n])return!1
return!0}function r(e,r){for(var i=[],l=0;l<r.length;l++){var c=r[l],u=e.getOption("styleActiveLine")
if("object"==typeof u&&u.nonEmpty?c.anchor.line==c.head.line:c.empty()){var d=e.getLineHandleVisualStart(c.head.line)
i[i.length-1]!=d&&i.push(d)}}n(e.state.activeLines,i)||e.operation(function(){t(e)
for(var n=0;n<i.length;n++)e.addLineClass(i[n],"wrap",o),e.addLineClass(i[n],"background",a),e.addLineClass(i[n],"gutter",s)
e.state.activeLines=i})}function i(e,t){r(e,t.ranges)}var o="CodeMirror-activeline",a="CodeMirror-activeline-background",s="CodeMirror-activeline-gutter"
e.defineOption("styleActiveLine",!1,function(n,o,a){var s=a!=e.Init&&a
o!=s&&(s&&(n.off("beforeSelectionChange",i),t(n),delete n.state.activeLines),o&&(n.state.activeLines=[],r(n,n.listSelections()),n.on("beforeSelectionChange",i)))})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../lib/codemirror")):"function"==typeof define&&define.amd?define(["../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){return e.line==t.line&&e.ch==t.ch}function n(e){q.push(e),q.length>50&&q.shift()}function r(e){return q.length?void(q[q.length-1]+=e):n(e)}function i(e){return q[q.length-(e?Math.min(e,1):1)]||""}function o(){return q.length>1&&q.pop(),i()}function a(e,i,o,a,s){null==s&&(s=e.getRange(i,o)),"grow"==a&&F&&F.cm==e&&t(i,F.pos)&&e.isClean(F.gen)?r(s):a!==!1&&n(s),e.replaceRange("",i,o,"+delete"),F="grow"==a?{cm:e,pos:i,gen:e.changeGeneration()}:null}function s(e,t,n){return e.findPosH(t,n,"char",!0)}function l(e,t,n){return e.findPosH(t,n,"word",!0)}function c(e,t,n){return e.findPosV(t,n,"line",e.doc.sel.goalColumn)}function u(e,t,n){return e.findPosV(t,n,"page",e.doc.sel.goalColumn)}function d(e,t,n){for(var r=t.line,i=e.getLine(r),o=/\S/.test(n<0?i.slice(0,t.ch):i.slice(t.ch)),a=e.firstLine(),s=e.lastLine();;){if(r+=n,r<a||r>s)return e.clipPos(N(r-n,n<0?0:null))
i=e.getLine(r)
var l=/\S/.test(i)
if(l)o=!0
else if(o)return N(r,0)}}function f(e,t,n){for(var r=t.line,i=t.ch,o=e.getLine(t.line),a=!1;;){var s=o.charAt(i+(n<0?-1:0))
if(s){if(a&&/[!?.]/.test(s))return N(r,i+(n>0?1:0))
a||(a=/\w/.test(s)),i+=n}else{if(r==(n<0?e.firstLine():e.lastLine()))return N(r,i)
if(o=e.getLine(r+n),!/\S/.test(o))return N(r,i)
r+=n,i=n<0?o.length:0}}}function p(e,n,r){var i
if(e.findMatchingBracket&&(i=e.findMatchingBracket(n,{strict:!0}))&&i.match&&(i.forward?1:-1)==r)return r>0?N(i.to.line,i.to.ch+1):i.to
for(var o=!0;;o=!1){var a=e.getTokenAt(n),s=N(n.line,r<0?a.start:a.end)
if(!(o&&r>0&&a.end==n.ch)&&/\w/.test(a.string))return s
var l=e.findPosH(s,r,"char")
if(t(s,l))return n
n=l}}function h(e,t){var n=e.state.emacsPrefix
return n?(w(e),"-"==n?-1:Number(n)):t?null:1}function m(e){var t="string"==typeof e?function(t){t.execCommand(e)}:e
return function(e){var n=h(e)
t(e)
for(var r=1;r<n;++r)t(e)}}function g(e,n,r,i){var o=h(e)
o<0&&(i=-i,o=-o)
for(var a=0;a<o;++a){var s=r(e,n,i)
if(t(s,n))break
n=s}return n}function v(e,t){var n=function(n){n.extendSelection(g(n,n.getCursor(),e,t))}
return n.motion=!0,n}function y(e,t,n,r){for(var i,o=e.listSelections(),s=o.length;s--;)i=o[s].head,a(e,i,g(e,i,t,n),r)}function b(e,t){if(e.somethingSelected()){for(var n,r=e.listSelections(),i=r.length;i--;)n=r[i],a(e,n.anchor,n.head,t)
return!0}}function k(e,t){return e.state.emacsPrefix?void("-"!=t&&(e.state.emacsPrefix+=t)):(e.state.emacsPrefix=t,e.on("keyHandled",x),void e.on("inputRead",_))}function x(e,t){e.state.emacsPrefixMap||D.hasOwnProperty(t)||w(e)}function w(e){e.state.emacsPrefix=null,e.off("keyHandled",x),e.off("inputRead",_)}function _(e,t){var n=h(e)
if(n>1&&"+input"==t.origin){for(var r=t.text.join("\n"),i="",o=1;o<n;++o)i+=r
e.replaceSelection(i)}}function C(e){e.state.emacsPrefixMap=!0,e.addKeyMap(P),e.on("keyHandled",S),e.on("inputRead",S)}function S(e,t){("string"!=typeof t||!/^\d$/.test(t)&&"Ctrl-U"!=t)&&(e.removeKeyMap(P),e.state.emacsPrefixMap=!1,e.off("keyHandled",S),e.off("inputRead",S))}function M(e){e.setCursor(e.getCursor()),e.setExtending(!e.getExtending()),e.on("change",function(){e.setExtending(!1)})}function L(e){e.setExtending(!1),e.setCursor(e.getCursor())}function T(e,t,n){e.openDialog?e.openDialog(t+': <input type="text" style="width: 10em"/>',n,{bottom:!0}):n(prompt(t,""))}function A(e,t){var n=e.getCursor(),r=e.findPosH(n,1,"word")
e.replaceRange(t(e.getRange(n,r)),n,r),e.setCursor(r)}function E(e){for(var t=e.getCursor(),n=t.line,r=t.ch,i=[];n>=e.firstLine();){for(var o=e.getLine(n),a=null==r?o.length:r;a>0;){var r=o.charAt(--a)
if(")"==r)i.push("(")
else if("]"==r)i.push("[")
else if("}"==r)i.push("{")
else if(/[\(\{\[]/.test(r)&&(!i.length||i.pop()!=r))return e.extendSelection(N(n,a))}--n,r=null}}function O(e){e.execCommand("clearSearch"),L(e)}function z(e){P[e]=function(t){k(t,e)},I["Ctrl-"+e]=function(t){k(t,e)},D["Ctrl-"+e]=!0}var N=e.Pos,q=[],F=null,D={"Alt-G":!0,"Ctrl-X":!0,"Ctrl-Q":!0,"Ctrl-U":!0}
e.emacs={kill:a,killRegion:b,repeated:m}
for(var I=e.keyMap.emacs=e.normalizeKeyMap({"Ctrl-W":function(e){a(e,e.getCursor("start"),e.getCursor("end"),!0)},"Ctrl-K":m(function(e){var t=e.getCursor(),n=e.clipPos(N(t.line)),r=e.getRange(t,n);/\S/.test(r)||(r+="\n",n=N(t.line+1,0)),a(e,t,n,"grow",r)}),"Alt-W":function(e){n(e.getSelection()),L(e)},"Ctrl-Y":function(e){var t=e.getCursor()
e.replaceRange(i(h(e)),t,t,"paste"),e.setSelection(t,e.getCursor())},"Alt-Y":function(e){e.replaceSelection(o(),"around","paste")},"Ctrl-Space":M,"Ctrl-Shift-2":M,"Ctrl-F":v(s,1),"Ctrl-B":v(s,-1),Right:v(s,1),Left:v(s,-1),"Ctrl-D":function(e){y(e,s,1,!1)},Delete:function(e){b(e,!1)||y(e,s,1,!1)},"Ctrl-H":function(e){y(e,s,-1,!1)},Backspace:function(e){b(e,!1)||y(e,s,-1,!1)},"Alt-F":v(l,1),"Alt-B":v(l,-1),"Alt-Right":v(l,1),"Alt-Left":v(l,-1),"Alt-D":function(e){y(e,l,1,"grow")},"Alt-Backspace":function(e){y(e,l,-1,"grow")},"Ctrl-N":v(c,1),"Ctrl-P":v(c,-1),Down:v(c,1),Up:v(c,-1),"Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd",End:"goLineEnd",Home:"goLineStart","Alt-V":v(u,-1),"Ctrl-V":v(u,1),PageUp:v(u,-1),PageDown:v(u,1),"Ctrl-Up":v(d,-1),"Ctrl-Down":v(d,1),"Alt-A":v(f,-1),"Alt-E":v(f,1),"Alt-K":function(e){y(e,f,1,"grow")},"Ctrl-Alt-K":function(e){y(e,p,1,"grow")},"Ctrl-Alt-Backspace":function(e){y(e,p,-1,"grow")},"Ctrl-Alt-F":v(p,1),"Ctrl-Alt-B":v(p,-1,"grow"),"Shift-Ctrl-Alt-2":function(e){var t=e.getCursor()
e.setSelection(g(e,t,p,1),t)},"Ctrl-Alt-T":function(e){var t=p(e,e.getCursor(),-1),n=p(e,t,1),r=p(e,n,1),i=p(e,r,-1)
e.replaceRange(e.getRange(i,r)+e.getRange(n,i)+e.getRange(t,n),t,r)},"Ctrl-Alt-U":m(E),"Alt-Space":function(e){for(var t=e.getCursor(),n=t.ch,r=t.ch,i=e.getLine(t.line);n&&/\s/.test(i.charAt(n-1));)--n
for(;r<i.length&&/\s/.test(i.charAt(r));)++r
e.replaceRange(" ",N(t.line,n),N(t.line,r))},"Ctrl-O":m(function(e){e.replaceSelection("\n","start")}),"Ctrl-T":m(function(e){e.execCommand("transposeChars")}),"Alt-C":m(function(e){A(e,function(e){var t=e.search(/\w/)
return t==-1?e:e.slice(0,t)+e.charAt(t).toUpperCase()+e.slice(t+1).toLowerCase()})}),"Alt-U":m(function(e){A(e,function(e){return e.toUpperCase()})}),"Alt-L":m(function(e){A(e,function(e){return e.toLowerCase()})}),"Alt-;":"toggleComment","Ctrl-/":m("undo"),"Shift-Ctrl--":m("undo"),"Ctrl-Z":m("undo"),"Cmd-Z":m("undo"),"Shift-Alt-,":"goDocStart","Shift-Alt-.":"goDocEnd","Ctrl-S":"findPersistentNext","Ctrl-R":"findPersistentPrev","Ctrl-G":O,"Shift-Alt-5":"replace","Alt-/":"autocomplete",Enter:"newlineAndIndent","Ctrl-J":m(function(e){e.replaceSelection("\n","end")}),Tab:"indentAuto","Alt-G G":function(e){var t=h(e,!0)
return null!=t&&t>0?e.setCursor(t-1):void T(e,"Goto line",function(t){var n
t&&!isNaN(n=Number(t))&&n==(0|n)&&n>0&&e.setCursor(n-1)})},"Ctrl-X Tab":function(e){e.indentSelection(h(e,!0)||e.getOption("indentUnit"))},"Ctrl-X Ctrl-X":function(e){e.setSelection(e.getCursor("head"),e.getCursor("anchor"))},"Ctrl-X Ctrl-S":"save","Ctrl-X Ctrl-W":"save","Ctrl-X S":"saveAll","Ctrl-X F":"open","Ctrl-X U":m("undo"),"Ctrl-X K":"close","Ctrl-X Delete":function(e){a(e,e.getCursor(),f(e,e.getCursor(),1),"grow")},"Ctrl-X H":"selectAll","Ctrl-Q Tab":m("insertTab"),"Ctrl-U":C}),P={"Ctrl-G":w},R=0;R<10;++R)z(String(R))
z("-")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../lib/codemirror"),require("../addon/search/searchcursor"),require("../addon/dialog/dialog"),require("../addon/edit/matchbrackets.js")):"function"==typeof define&&define.amd?define(["../lib/codemirror","../addon/search/searchcursor","../addon/dialog/dialog","../addon/edit/matchbrackets"],e):e(CodeMirror)}(function(e){"use strict"
var t=[{keys:"<Left>",type:"keyToKey",toKeys:"h"},{keys:"<Right>",type:"keyToKey",toKeys:"l"},{keys:"<Up>",type:"keyToKey",toKeys:"k"},{keys:"<Down>",type:"keyToKey",toKeys:"j"},{keys:"<Space>",type:"keyToKey",toKeys:"l"},{keys:"<BS>",type:"keyToKey",toKeys:"h",context:"normal"},{keys:"<Del>",type:"keyToKey",toKeys:"x",context:"normal"},{keys:"<C-Space>",type:"keyToKey",toKeys:"W"},{keys:"<C-BS>",type:"keyToKey",toKeys:"B",context:"normal"},{keys:"<S-Space>",type:"keyToKey",toKeys:"w"},{keys:"<S-BS>",type:"keyToKey",toKeys:"b",context:"normal"},{keys:"<C-n>",type:"keyToKey",toKeys:"j"},{keys:"<C-p>",type:"keyToKey",toKeys:"k"},{keys:"<C-[>",type:"keyToKey",toKeys:"<Esc>"},{keys:"<C-c>",type:"keyToKey",toKeys:"<Esc>"},{keys:"<C-[>",type:"keyToKey",toKeys:"<Esc>",context:"insert"},{keys:"<C-c>",type:"keyToKey",toKeys:"<Esc>",context:"insert"},{keys:"s",type:"keyToKey",toKeys:"cl",context:"normal"},{keys:"s",type:"keyToKey",toKeys:"c",context:"visual"},{keys:"S",type:"keyToKey",toKeys:"cc",context:"normal"},{keys:"S",type:"keyToKey",toKeys:"VdO",context:"visual"},{keys:"<Home>",type:"keyToKey",toKeys:"0"},{keys:"<End>",type:"keyToKey",toKeys:"$"},{keys:"<PageUp>",type:"keyToKey",toKeys:"<C-b>"},{keys:"<PageDown>",type:"keyToKey",toKeys:"<C-f>"},{keys:"<CR>",type:"keyToKey",toKeys:"j^",context:"normal"},{keys:"<Ins>",type:"action",action:"toggleOverwrite",context:"insert"},{keys:"H",type:"motion",motion:"moveToTopLine",motionArgs:{linewise:!0,toJumplist:!0}},{keys:"M",type:"motion",motion:"moveToMiddleLine",motionArgs:{linewise:!0,toJumplist:!0}},{keys:"L",type:"motion",motion:"moveToBottomLine",motionArgs:{linewise:!0,toJumplist:!0}},{keys:"h",type:"motion",motion:"moveByCharacters",motionArgs:{forward:!1}},{keys:"l",type:"motion",motion:"moveByCharacters",motionArgs:{forward:!0}},{keys:"j",type:"motion",motion:"moveByLines",motionArgs:{forward:!0,linewise:!0}},{keys:"k",type:"motion",motion:"moveByLines",motionArgs:{forward:!1,linewise:!0}},{keys:"gj",type:"motion",motion:"moveByDisplayLines",motionArgs:{forward:!0}},{keys:"gk",type:"motion",motion:"moveByDisplayLines",motionArgs:{forward:!1}},{keys:"w",type:"motion",motion:"moveByWords",motionArgs:{forward:!0,wordEnd:!1}},{keys:"W",type:"motion",motion:"moveByWords",motionArgs:{forward:!0,wordEnd:!1,bigWord:!0}},{keys:"e",type:"motion",motion:"moveByWords",motionArgs:{forward:!0,wordEnd:!0,inclusive:!0}},{keys:"E",type:"motion",motion:"moveByWords",motionArgs:{forward:!0,wordEnd:!0,bigWord:!0,inclusive:!0}},{keys:"b",type:"motion",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!1}},{keys:"B",type:"motion",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!1,bigWord:!0}},{keys:"ge",type:"motion",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!0,inclusive:!0}},{keys:"gE",type:"motion",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!0,bigWord:!0,inclusive:!0}},{keys:"{",type:"motion",motion:"moveByParagraph",motionArgs:{forward:!1,toJumplist:!0}},{keys:"}",type:"motion",motion:"moveByParagraph",motionArgs:{forward:!0,toJumplist:!0}},{keys:"(",type:"motion",motion:"moveBySentence",motionArgs:{forward:!1}},{keys:")",type:"motion",motion:"moveBySentence",motionArgs:{forward:!0}},{keys:"<C-f>",type:"motion",motion:"moveByPage",motionArgs:{forward:!0}},{keys:"<C-b>",type:"motion",motion:"moveByPage",motionArgs:{forward:!1}},{keys:"<C-d>",type:"motion",motion:"moveByScroll",motionArgs:{forward:!0,explicitRepeat:!0}},{keys:"<C-u>",type:"motion",motion:"moveByScroll",motionArgs:{forward:!1,explicitRepeat:!0}},{keys:"gg",type:"motion",motion:"moveToLineOrEdgeOfDocument",motionArgs:{forward:!1,explicitRepeat:!0,linewise:!0,toJumplist:!0}},{keys:"G",type:"motion",motion:"moveToLineOrEdgeOfDocument",motionArgs:{forward:!0,explicitRepeat:!0,linewise:!0,toJumplist:!0}},{keys:"0",type:"motion",motion:"moveToStartOfLine"},{keys:"^",type:"motion",motion:"moveToFirstNonWhiteSpaceCharacter"},{keys:"+",type:"motion",motion:"moveByLines",motionArgs:{forward:!0,toFirstChar:!0}},{keys:"-",type:"motion",motion:"moveByLines",motionArgs:{forward:!1,toFirstChar:!0}},{keys:"_",type:"motion",motion:"moveByLines",motionArgs:{forward:!0,toFirstChar:!0,repeatOffset:-1}},{keys:"$",type:"motion",motion:"moveToEol",motionArgs:{inclusive:!0}},{keys:"%",type:"motion",motion:"moveToMatchedSymbol",motionArgs:{inclusive:!0,toJumplist:!0}},{keys:"f<character>",type:"motion",motion:"moveToCharacter",motionArgs:{forward:!0,inclusive:!0}},{keys:"F<character>",type:"motion",motion:"moveToCharacter",motionArgs:{forward:!1}},{keys:"t<character>",type:"motion",motion:"moveTillCharacter",motionArgs:{forward:!0,inclusive:!0}},{keys:"T<character>",type:"motion",motion:"moveTillCharacter",motionArgs:{forward:!1}},{keys:";",type:"motion",motion:"repeatLastCharacterSearch",motionArgs:{forward:!0}},{keys:",",type:"motion",motion:"repeatLastCharacterSearch",motionArgs:{forward:!1}},{keys:"'<character>",type:"motion",motion:"goToMark",motionArgs:{toJumplist:!0,linewise:!0}},{keys:"`<character>",type:"motion",motion:"goToMark",motionArgs:{toJumplist:!0}},{keys:"]`",type:"motion",motion:"jumpToMark",motionArgs:{forward:!0}},{keys:"[`",type:"motion",motion:"jumpToMark",motionArgs:{forward:!1}},{keys:"]'",type:"motion",motion:"jumpToMark",motionArgs:{forward:!0,linewise:!0}},{keys:"['",type:"motion",motion:"jumpToMark",motionArgs:{forward:!1,linewise:!0}},{keys:"]p",type:"action",action:"paste",isEdit:!0,actionArgs:{after:!0,isEdit:!0,matchIndent:!0}},{keys:"[p",type:"action",action:"paste",isEdit:!0,actionArgs:{after:!1,isEdit:!0,matchIndent:!0}},{keys:"]<character>",type:"motion",motion:"moveToSymbol",motionArgs:{forward:!0,toJumplist:!0}},{keys:"[<character>",type:"motion",motion:"moveToSymbol",motionArgs:{forward:!1,toJumplist:!0}},{keys:"|",type:"motion",motion:"moveToColumn"},{keys:"o",type:"motion",motion:"moveToOtherHighlightedEnd",context:"visual"},{keys:"O",type:"motion",motion:"moveToOtherHighlightedEnd",motionArgs:{sameLine:!0},context:"visual"},{keys:"d",type:"operator",operator:"delete"},{keys:"y",type:"operator",operator:"yank"},{keys:"c",type:"operator",operator:"change"},{keys:"=",type:"operator",operator:"indentAuto"},{keys:">",type:"operator",operator:"indent",operatorArgs:{indentRight:!0}},{keys:"<",type:"operator",operator:"indent",operatorArgs:{indentRight:!1}},{keys:"g~",type:"operator",operator:"changeCase"},{keys:"gu",type:"operator",operator:"changeCase",operatorArgs:{toLower:!0},isEdit:!0},{keys:"gU",type:"operator",operator:"changeCase",operatorArgs:{toLower:!1},isEdit:!0},{keys:"n",type:"motion",motion:"findNext",motionArgs:{forward:!0,toJumplist:!0}},{keys:"N",type:"motion",motion:"findNext",motionArgs:{forward:!1,toJumplist:!0}},{keys:"x",type:"operatorMotion",operator:"delete",motion:"moveByCharacters",motionArgs:{forward:!0},operatorMotionArgs:{visualLine:!1}},{keys:"X",type:"operatorMotion",operator:"delete",motion:"moveByCharacters",motionArgs:{forward:!1},operatorMotionArgs:{visualLine:!0}},{keys:"D",type:"operatorMotion",operator:"delete",motion:"moveToEol",motionArgs:{inclusive:!0},context:"normal"},{keys:"D",type:"operator",operator:"delete",operatorArgs:{linewise:!0},context:"visual"},{keys:"Y",type:"operatorMotion",operator:"yank",motion:"expandToLine",motionArgs:{linewise:!0},context:"normal"},{keys:"Y",type:"operator",operator:"yank",operatorArgs:{linewise:!0},context:"visual"},{keys:"C",type:"operatorMotion",operator:"change",motion:"moveToEol",motionArgs:{inclusive:!0},context:"normal"},{keys:"C",type:"operator",operator:"change",operatorArgs:{linewise:!0},context:"visual"},{keys:"~",type:"operatorMotion",operator:"changeCase",motion:"moveByCharacters",motionArgs:{forward:!0},operatorArgs:{shouldMoveCursor:!0},context:"normal"},{keys:"~",type:"operator",operator:"changeCase",context:"visual"},{keys:"<C-w>",type:"operatorMotion",operator:"delete",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!1},context:"insert"},{keys:"<C-w>",type:"idle",context:"normal"},{keys:"<C-i>",type:"action",action:"jumpListWalk",actionArgs:{forward:!0}},{keys:"<C-o>",type:"action",action:"jumpListWalk",actionArgs:{forward:!1}},{keys:"<C-e>",type:"action",action:"scroll",actionArgs:{forward:!0,linewise:!0}},{keys:"<C-y>",type:"action",action:"scroll",actionArgs:{forward:!1,linewise:!0}},{keys:"a",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"charAfter"},context:"normal"},{keys:"A",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"eol"},context:"normal"},{keys:"A",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"endOfSelectedArea"},context:"visual"},{keys:"i",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"inplace"},context:"normal"},{keys:"I",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"firstNonBlank"},context:"normal"},{keys:"I",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"startOfSelectedArea"},context:"visual"},{keys:"o",type:"action",action:"newLineAndEnterInsertMode",isEdit:!0,interlaceInsertRepeat:!0,actionArgs:{after:!0},context:"normal"},{keys:"O",type:"action",action:"newLineAndEnterInsertMode",isEdit:!0,interlaceInsertRepeat:!0,actionArgs:{after:!1},context:"normal"},{keys:"v",type:"action",action:"toggleVisualMode"},{keys:"V",type:"action",action:"toggleVisualMode",actionArgs:{linewise:!0}},{keys:"<C-v>",type:"action",action:"toggleVisualMode",actionArgs:{blockwise:!0}},{keys:"<C-q>",type:"action",action:"toggleVisualMode",actionArgs:{blockwise:!0}},{keys:"gv",type:"action",action:"reselectLastSelection"},{keys:"J",type:"action",action:"joinLines",isEdit:!0},{keys:"p",type:"action",action:"paste",isEdit:!0,actionArgs:{after:!0,isEdit:!0}},{keys:"P",type:"action",action:"paste",isEdit:!0,actionArgs:{after:!1,isEdit:!0}},{keys:"r<character>",type:"action",action:"replace",isEdit:!0},{keys:"@<character>",type:"action",action:"replayMacro"},{keys:"q<character>",type:"action",action:"enterMacroRecordMode"},{keys:"R",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{replace:!0}},{keys:"u",type:"action",action:"undo",context:"normal"},{keys:"u",type:"operator",operator:"changeCase",operatorArgs:{toLower:!0},context:"visual",isEdit:!0},{keys:"U",type:"operator",operator:"changeCase",operatorArgs:{toLower:!1},context:"visual",isEdit:!0},{keys:"<C-r>",type:"action",action:"redo"},{keys:"m<character>",type:"action",action:"setMark"},{keys:'"<character>',type:"action",action:"setRegister"},{keys:"zz",type:"action",action:"scrollToCursor",actionArgs:{position:"center"}},{keys:"z.",type:"action",action:"scrollToCursor",actionArgs:{position:"center"},motion:"moveToFirstNonWhiteSpaceCharacter"},{keys:"zt",type:"action",action:"scrollToCursor",actionArgs:{position:"top"}},{keys:"z<CR>",type:"action",action:"scrollToCursor",actionArgs:{position:"top"},motion:"moveToFirstNonWhiteSpaceCharacter"},{keys:"z-",type:"action",action:"scrollToCursor",actionArgs:{position:"bottom"}},{keys:"zb",type:"action",action:"scrollToCursor",actionArgs:{position:"bottom"},motion:"moveToFirstNonWhiteSpaceCharacter"},{keys:".",type:"action",action:"repeatLastEdit"},{keys:"<C-a>",type:"action",action:"incrementNumberToken",isEdit:!0,actionArgs:{increase:!0,backtrack:!1}},{keys:"<C-x>",type:"action",action:"incrementNumberToken",isEdit:!0,actionArgs:{increase:!1,backtrack:!1}},{keys:"<C-t>",type:"action",action:"indent",actionArgs:{indentRight:!0},context:"insert"},{keys:"<C-d>",type:"action",action:"indent",actionArgs:{indentRight:!1},context:"insert"},{keys:"a<character>",type:"motion",motion:"textObjectManipulation"},{keys:"i<character>",type:"motion",motion:"textObjectManipulation",motionArgs:{textObjectInner:!0}},{keys:"/",type:"search",searchArgs:{forward:!0,querySrc:"prompt",toJumplist:!0}},{keys:"?",type:"search",searchArgs:{forward:!1,querySrc:"prompt",toJumplist:!0}},{keys:"*",type:"search",searchArgs:{forward:!0,querySrc:"wordUnderCursor",wholeWordOnly:!0,toJumplist:!0}},{keys:"#",type:"search",searchArgs:{forward:!1,querySrc:"wordUnderCursor",wholeWordOnly:!0,toJumplist:!0}},{keys:"g*",type:"search",searchArgs:{forward:!0,querySrc:"wordUnderCursor",toJumplist:!0}},{keys:"g#",type:"search",searchArgs:{forward:!1,querySrc:"wordUnderCursor",toJumplist:!0}},{keys:":",type:"ex"}],n=t.length,r=[{name:"colorscheme",shortName:"colo"},{name:"map"},{name:"imap",shortName:"im"},{name:"nmap",shortName:"nm"},{name:"vmap",shortName:"vm"},{name:"unmap"},{name:"write",shortName:"w"},{name:"undo",shortName:"u"},{name:"redo",shortName:"red"},{name:"set",shortName:"se"},{name:"set",shortName:"se"},{name:"setlocal",shortName:"setl"},{name:"setglobal",shortName:"setg"},{name:"sort",shortName:"sor"},{name:"substitute",shortName:"s",possiblyAsync:!0},{name:"nohlsearch",shortName:"noh"},{name:"yank",shortName:"y"},{name:"delmarks",shortName:"delm"},{name:"registers",shortName:"reg",excludeFromCommandHistory:!0},{name:"global",shortName:"g"}],i=e.Pos,o=function(){function o(t){t.setOption("disableInput",!0),t.setOption("showCursorWhenSelecting",!1),e.signal(t,"vim-mode-change",{mode:"normal"}),t.on("cursorActivity",ut),A(t),e.on(t.getInputField(),"paste",m(t))}function a(t){t.setOption("disableInput",!1),t.off("cursorActivity",ut),e.off(t.getInputField(),"paste",m(t)),t.state.vim=null}function s(t,n){this==e.keyMap.vim&&(e.rmClass(t.getWrapperElement(),"cm-fat-cursor"),"contenteditable"==t.getOption("inputStyle")&&null!=document.body.style.caretColor&&(f(t),t.getInputField().style.caretColor="")),n&&n.attach==l||a(t)}function l(t,n){this==e.keyMap.vim&&(e.addClass(t.getWrapperElement(),"cm-fat-cursor"),"contenteditable"==t.getOption("inputStyle")&&null!=document.body.style.caretColor&&(d(t),t.getInputField().style.caretColor="transparent")),n&&n.attach==l||o(t)}function c(e){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++){var o=t[r]
if(o.empty())if(o.anchor.ch<e.getLine(o.anchor.line).length)n.push(e.markText(o.anchor,i(o.anchor.line,o.anchor.ch+1),{className:"cm-fat-cursor-mark"}))
else{var a=document.createElement("span")
a.textContent=" ",a.className="cm-fat-cursor-mark",n.push(e.setBookmark(o.anchor,{widget:a}))}}return n}function u(e){var t=e.state.fatCursorMarks
if(t)for(var n=0;n<t.length;n++)t[n].clear()
e.state.fatCursorMarks=c(e)}function d(e){e.state.fatCursorMarks=c(e),e.on("cursorActivity",u)}function f(e){var t=e.state.fatCursorMarks
if(t)for(var n=0;n<t.length;n++)t[n].clear()
e.state.fatCursorMarks=null,e.off("cursorActivity",u)}function p(t,n){if(n){if(this[t])return this[t]
var r=h(t)
if(!r)return!1
var i=e.Vim.findKey(n,r)
return"function"==typeof i&&e.signal(n,"vim-keypress",r),i}}function h(e){if("'"==e.charAt(0))return e.charAt(1)
var t=e.split(/-(?!$)/),n=t[t.length-1]
if(1==t.length&&1==t[0].length)return!1
if(2==t.length&&"Shift"==t[0]&&1==n.length)return!1
for(var r=!1,i=0;i<t.length;i++){var o=t[i]
o in vt?t[i]=vt[o]:r=!0,o in yt&&(t[i]=yt[o])}return!!r&&(x(n)&&(t[t.length-1]=n.toLowerCase()),"<"+t.join("-")+">")}function m(e){var t=e.state.vim
return t.onPasteFn||(t.onPasteFn=function(){t.insertMode||(e.setCursor(H(e.getCursor(),0,1)),Dt.enterInsertMode(e,{},t))}),t.onPasteFn}function g(e,t){for(var n=[],r=e;r<e+t;r++)n.push(String.fromCharCode(r))
return n}function v(e,t){return t>=e.firstLine()&&t<=e.lastLine()}function y(e){return/^[a-z]$/.test(e)}function b(e){return"()[]{}".indexOf(e)!=-1}function k(e){return bt.test(e)}function x(e){return/^[A-Z]$/.test(e)}function w(e){return/^\s*$/.test(e)}function _(e){return".?!".indexOf(e)!=-1}function C(e,t){for(var n=0;n<t.length;n++)if(t[n]==e)return!0
return!1}function S(e,t,n,r,i){if(void 0===t&&!i)throw Error("defaultValue is required unless callback is provided")
if(n||(n="string"),Lt[e]={type:n,defaultValue:t,callback:i},r)for(var o=0;o<r.length;o++)Lt[r[o]]=Lt[e]
t&&M(e,t)}function M(e,t,n,r){var i=Lt[e]
r=r||{}
var o=r.scope
if(!i)return new Error("Unknown option: "+e)
if("boolean"==i.type){if(t&&t!==!0)return new Error("Invalid argument: "+e+"="+t)
t!==!1&&(t=!0)}i.callback?("local"!==o&&i.callback(t,void 0),"global"!==o&&n&&i.callback(t,n)):("local"!==o&&(i.value="boolean"==i.type?!!t:t),"global"!==o&&n&&(n.state.vim.options[e]={value:t}))}function L(e,t,n){var r=Lt[e]
n=n||{}
var i=n.scope
if(!r)return new Error("Unknown option: "+e)
{if(!r.callback){var o="global"!==i&&t&&t.state.vim.options[e]
return(o||"local"!==i&&r||{}).value}var o=t&&r.callback(void 0,t)
if("global"!==i&&void 0!==o)return o
if("local"!==i)return r.callback()}}function T(){this.latestRegister=void 0,this.isPlaying=!1,this.isRecording=!1,this.replaySearchQueries=[],this.onRecordingDone=void 0,this.lastInsertModeChanges=At()}function A(e){return e.state.vim||(e.state.vim={inputState:new O,lastEditInputState:void 0,lastEditActionCommand:void 0,lastHPos:-1,lastHSPos:-1,lastMotion:null,marks:{},fakeCursor:null,insertMode:!1,insertModeRepeat:void 0,visualMode:!1,visualLine:!1,visualBlock:!1,lastSelection:null,lastPastedText:null,sel:{},options:{}}),e.state.vim}function E(){Et={searchQuery:null,searchIsReversed:!1,lastSubstituteReplacePart:void 0,jumpList:Tt(),macroModeState:new T,lastCharacterSearch:{increment:0,forward:!0,selectedCharacter:""},registerController:new F({}),searchHistoryController:new D,exCommandHistoryController:new D}
for(var e in Lt){var t=Lt[e]
t.value=t.defaultValue}}function O(){this.prefixRepeat=[],this.motionRepeat=[],this.operator=null,this.operatorArgs=null,this.motion=null,this.motionArgs=null,this.keyBuffer=[],this.registerName=null}function z(t,n){t.state.vim.inputState=new O,e.signal(t,"vim-command-done",n)}function N(e,t,n){this.clear(),this.keyBuffer=[e||""],this.insertModeChanges=[],this.searchQueries=[],this.linewise=!!t,this.blockwise=!!n}function q(e,t){var n=Et.registerController.registers
if(!e||1!=e.length)throw Error("Register name must be 1 character")
if(n[e])throw Error("Register already defined "+e)
n[e]=t,Mt.push(e)}function F(e){this.registers=e,this.unnamedRegister=e['"']=new N,e["."]=new N,e[":"]=new N,e["/"]=new N}function D(){this.historyBuffer=[],this.iterator=0,this.initialPrefix=null}function I(e,t){qt[e]=t}function P(e,t){for(var n=[],r=0;r<t;r++)n.push(e)
return n}function R(e,t){Ft[e]=t}function j(e,t){Dt[e]=t}function B(e,t,n){var r=Math.min(Math.max(e.firstLine(),t.line),e.lastLine()),o=te(e,r)-1
o=n?o+1:o
var a=Math.min(Math.max(0,t.ch),o)
return i(r,a)}function W(e){var t={}
for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t}function H(e,t,n){return"object"==typeof t&&(n=t.ch,t=t.line),i(e.line+t,e.ch+n)}function U(e,t){return{line:t.line-e.line,ch:t.line-e.line}}function $(e,t,n,r){for(var i,o=[],a=[],s=0;s<t.length;s++){var l=t[s]
"insert"==n&&"insert"!=l.context||l.context&&l.context!=n||r.operator&&"action"==l.type||!(i=K(e,l.keys))||("partial"==i&&o.push(l),"full"==i&&a.push(l))}return{partial:o.length&&o,full:a.length&&a}}function K(e,t){if("<character>"==t.slice(-11)){var n=t.length-11,r=e.slice(0,n),i=t.slice(0,n)
return r==i&&e.length>n?"full":0==i.indexOf(r)&&"partial"}return e==t?"full":0==t.indexOf(e)&&"partial"}function V(e){var t=/^.*(<[^>]+>)$/.exec(e),n=t?t[1]:e.slice(-1)
if(n.length>1)switch(n){case"<CR>":n="\n"
break
case"<Space>":n=" "
break
default:n=""}return n}function G(e,t,n){return function(){for(var r=0;r<n;r++)t(e)}}function Z(e){return i(e.line,e.ch)}function X(e,t){return e.ch==t.ch&&e.line==t.line}function Q(e,t){return e.line<t.line||e.line==t.line&&e.ch<t.ch}function Y(e,t){return arguments.length>2&&(t=Y.apply(void 0,Array.prototype.slice.call(arguments,1))),Q(e,t)?e:t}function J(e,t){return arguments.length>2&&(t=J.apply(void 0,Array.prototype.slice.call(arguments,1))),Q(e,t)?t:e}function ee(e,t,n){var r=Q(e,t),i=Q(t,n)
return r&&i}function te(e,t){return e.getLine(t).length}function ne(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function re(e){return e.replace(/([.?*+$\[\]\/\\(){}|\-])/g,"\\$1")}function ie(e,t,n){var r=te(e,t),o=new Array(n-r+1).join(" ")
e.setCursor(i(t,r)),e.replaceRange(o,e.getCursor())}function oe(e,t){var n=[],r=e.listSelections(),o=Z(e.clipPos(t)),a=!X(t,o),s=e.getCursor("head"),l=se(r,s),c=X(r[l].head,r[l].anchor),u=r.length-1,d=u-l>l?u:0,f=r[d].anchor,p=Math.min(f.line,o.line),h=Math.max(f.line,o.line),m=f.ch,g=o.ch,v=r[d].head.ch-m,y=g-m
v>0&&y<=0?(m++,a||g--):v<0&&y>=0?(m--,c||g++):v<0&&y==-1&&(m--,g++)
for(var b=p;b<=h;b++){var k={anchor:new i(b,m),head:new i(b,g)}
n.push(k)}return e.setSelections(n),t.ch=g,f.ch=m,f}function ae(e,t,n){for(var r=[],i=0;i<n;i++){var o=H(t,i,0)
r.push({anchor:o,head:o})}e.setSelections(r,0)}function se(e,t,n){for(var r=0;r<e.length;r++){var i="head"!=n&&X(e[r].anchor,t),o="anchor"!=n&&X(e[r].head,t)
if(i||o)return r}return-1}function le(e,t){var n=t.lastSelection,r=function(){var t=e.listSelections(),n=t[0],r=t[t.length-1],i=Q(n.anchor,n.head)?n.anchor:n.head,o=Q(r.anchor,r.head)?r.head:r.anchor
return[i,o]},o=function(){var t=e.getCursor(),r=e.getCursor(),o=n.visualBlock
if(o){var a=o.width,s=o.height
r=i(t.line+s,t.ch+a)
for(var l=[],c=t.line;c<r.line;c++){var u=i(c,t.ch),d=i(c,r.ch),f={anchor:u,head:d}
l.push(f)}e.setSelections(l)}else{var p=n.anchorMark.find(),h=n.headMark.find(),m=h.line-p.line,g=h.ch-p.ch
r={line:r.line+m,ch:m?r.ch:g+r.ch},n.visualLine&&(t=i(t.line,0),r=i(r.line,te(e,r.line))),e.setSelection(t,r)}return[t,r]}
return t.visualMode?r():o()}function ce(e,t){var n=t.sel.anchor,r=t.sel.head
t.lastPastedText&&(r=e.posFromIndex(e.indexFromPos(n)+t.lastPastedText.length),t.lastPastedText=null),t.lastSelection={anchorMark:e.setBookmark(n),headMark:e.setBookmark(r),anchor:Z(n),head:Z(r),visualMode:t.visualMode,visualLine:t.visualLine,visualBlock:t.visualBlock}}function ue(e,t,n){var r,o=e.state.vim.sel,a=o.head,s=o.anchor
return Q(n,t)&&(r=n,n=t,t=r),Q(a,s)?(a=Y(t,a),s=J(s,n)):(s=Y(t,s),a=J(a,n),a=H(a,0,-1),a.ch==-1&&a.line!=e.firstLine()&&(a=i(a.line-1,te(e,a.line-1)))),[s,a]}function de(e,t,n){var r=e.state.vim
t=t||r.sel
var n=n||r.visualLine?"line":r.visualBlock?"block":"char",i=fe(e,t,n)
e.setSelections(i.ranges,i.primary),dt(e)}function fe(e,t,n,r){var o=Z(t.head),a=Z(t.anchor)
if("char"==n){var s=r||Q(t.head,t.anchor)?0:1,l=Q(t.head,t.anchor)?1:0
return o=H(t.head,0,s),a=H(t.anchor,0,l),{ranges:[{anchor:a,head:o}],primary:0}}if("line"==n){if(Q(t.head,t.anchor))o.ch=0,a.ch=te(e,a.line)
else{a.ch=0
var c=e.lastLine()
o.line>c&&(o.line=c),o.ch=te(e,o.line)}return{ranges:[{anchor:a,head:o}],primary:0}}if("block"==n){for(var u=Math.min(a.line,o.line),d=Math.min(a.ch,o.ch),f=Math.max(a.line,o.line),p=Math.max(a.ch,o.ch)+1,h=f-u+1,m=o.line==u?0:h-1,g=[],v=0;v<h;v++)g.push({anchor:i(u+v,d),head:i(u+v,p)})
return{ranges:g,primary:m}}}function pe(e){var t=e.getCursor("head")
return 1==e.getSelection().length&&(t=Y(t,e.getCursor("anchor"))),t}function he(t,n){var r=t.state.vim
n!==!1&&t.setCursor(B(t,r.sel.head)),ce(t,r),r.visualMode=!1,r.visualLine=!1,r.visualBlock=!1,e.signal(t,"vim-mode-change",{mode:"normal"}),r.fakeCursor&&r.fakeCursor.clear()}function me(e,t,n){var r=e.getRange(t,n)
if(/\n\s*$/.test(r)){var i=r.split("\n")
i.pop()
for(var o,o=i.pop();i.length>0&&o&&w(o);o=i.pop())n.line--,n.ch=0
o?(n.line--,n.ch=te(e,n.line)):n.ch=0}}function ge(e,t,n){t.ch=0,n.ch=0,n.line++}function ve(e){if(!e)return 0
var t=e.search(/\S/)
return t==-1?e.length:t}function ye(e,t,n,r,o){for(var a=pe(e),s=e.getLine(a.line),l=a.ch,c=o?kt[0]:xt[0];!c(s.charAt(l));)if(l++,l>=s.length)return null
r?c=xt[0]:(c=kt[0],c(s.charAt(l))||(c=kt[1]))
for(var u=l,d=l;c(s.charAt(u))&&u<s.length;)u++
for(;c(s.charAt(d))&&d>=0;)d--
if(d++,t){for(var f=u;/\s/.test(s.charAt(u))&&u<s.length;)u++
if(f==u){for(var p=d;/\s/.test(s.charAt(d-1))&&d>0;)d--
d||(d=p)}}return{start:i(a.line,d),end:i(a.line,u)}}function be(e,t,n){X(t,n)||Et.jumpList.add(e,t,n)}function ke(e,t){Et.lastCharacterSearch.increment=e,Et.lastCharacterSearch.forward=t.forward,Et.lastCharacterSearch.selectedCharacter=t.selectedCharacter}function xe(e,t,n,r){var o=Z(e.getCursor()),a=n?1:-1,s=n?e.lineCount():-1,l=o.ch,c=o.line,u=e.getLine(c),d={lineText:u,nextCh:u.charAt(l),lastCh:null,index:l,symb:r,reverseSymb:(n?{")":"(","}":"{"}:{"(":")","{":"}"})[r],forward:n,depth:0,curMoveThrough:!1},f=It[r]
if(!f)return o
var p=Pt[f].init,h=Pt[f].isComplete
for(p&&p(d);c!==s&&t;){if(d.index+=a,d.nextCh=d.lineText.charAt(d.index),!d.nextCh){if(c+=a,d.lineText=e.getLine(c)||"",a>0)d.index=0
else{var m=d.lineText.length
d.index=m>0?m-1:0}d.nextCh=d.lineText.charAt(d.index)}h(d)&&(o.line=c,o.ch=d.index,t--)}return d.nextCh||d.curMoveThrough?i(c,d.index):o}function we(e,t,n,r,i){var o=t.line,a=t.ch,s=e.getLine(o),l=n?1:-1,c=r?xt:kt
if(i&&""==s){if(o+=l,s=e.getLine(o),!v(e,o))return null
a=n?0:s.length}for(;;){if(i&&""==s)return{from:0,to:0,line:o}
for(var u=l>0?s.length:-1,d=u,f=u;a!=u;){for(var p=!1,h=0;h<c.length&&!p;++h)if(c[h](s.charAt(a))){for(d=a;a!=u&&c[h](s.charAt(a));)a+=l
if(f=a,p=d!=f,d==t.ch&&o==t.line&&f==d+l)continue
return{from:Math.min(d,f+1),to:Math.max(d,f),line:o}}p||(a+=l)}if(o+=l,!v(e,o))return null
s=e.getLine(o),a=l>0?0:s.length}}function _e(e,t,n,r,o,a){var s=Z(t),l=[];(r&&!o||!r&&o)&&n++
for(var c=!(r&&o),u=0;u<n;u++){var d=we(e,t,r,a,c)
if(!d){var f=te(e,e.lastLine())
l.push(r?{line:e.lastLine(),from:f,to:f}:{line:0,from:0,to:0})
break}l.push(d),t=i(d.line,r?d.to-1:d.from)}var p=l.length!=n,h=l[0],m=l.pop()
return r&&!o?(p||h.from==s.ch&&h.line==s.line||(m=l.pop()),i(m.line,m.from)):r&&o?i(m.line,m.to-1):!r&&o?(p||h.to==s.ch&&h.line==s.line||(m=l.pop()),i(m.line,m.to)):i(m.line,m.from)}function Ce(e,t,n,r){for(var o,a=e.getCursor(),s=a.ch,l=0;l<t;l++){var c=e.getLine(a.line)
if(o=Le(s,c,r,n,!0),o==-1)return null
s=o}return i(e.getCursor().line,o)}function Se(e,t){var n=e.getCursor().line
return B(e,i(n,t-1))}function Me(e,t,n,r){C(n,St)&&(t.marks[n]&&t.marks[n].clear(),t.marks[n]=e.setBookmark(r))}function Le(e,t,n,r,i){var o
return r?(o=t.indexOf(n,e+1),o==-1||i||(o-=1)):(o=t.lastIndexOf(n,e-1),o==-1||i||(o+=1)),o}function Te(e,t,n,r,o){function a(t){return!e.getLine(t)}function s(e,t,n){return n?a(e)!=a(e+t):!a(e)&&a(e+t)}var l,c,u=t.line,d=e.firstLine(),f=e.lastLine(),p=u
if(r){for(;d<=p&&p<=f&&n>0;)s(p,r)&&n--,p+=r
return new i(p,0)}var h=e.state.vim
if(h.visualLine&&s(u,1,!0)){var m=h.sel.anchor
s(m.line,-1,!0)&&(o&&m.line==u||(u+=1))}var g=a(u)
for(p=u;p<=f&&n;p++)s(p,1,!0)&&(o&&a(p)==g||n--)
for(c=new i(p,0),p>f&&!g?g=!0:o=!1,p=u;p>d&&(o&&a(p)!=g&&p!=u||!s(p,-1,!0));p--);return l=new i(p,0),{start:l,end:c}}function Ae(e,t,n,r){function o(e,t){if(t.pos+t.dir<0||t.pos+t.dir>=t.line.length){if(t.ln+=t.dir,!v(e,t.ln))return t.line=null,t.ln=null,void(t.pos=null)
t.line=e.getLine(t.ln),t.pos=t.dir>0?0:t.line.length-1}else t.pos+=t.dir}function a(e,t,n,r){var i=e.getLine(t),a=""===i,s={line:i,ln:t,pos:n,dir:r},l={ln:s.ln,pos:s.pos},c=""===s.line
for(o(e,s);null!==s.line;){if(l.ln=s.ln,l.pos=s.pos,""===s.line&&!c)return{ln:s.ln,pos:s.pos}
if(a&&""!==s.line&&!w(s.line[s.pos]))return{ln:s.ln,pos:s.pos}
!_(s.line[s.pos])||a||s.pos!==s.line.length-1&&!w(s.line[s.pos+1])||(a=!0),o(e,s)}var i=e.getLine(l.ln)
l.pos=0
for(var u=i.length-1;u>=0;--u)if(!w(i[u])){l.pos=u
break}return l}function s(e,t,n,r){var i=e.getLine(t),a={line:i,ln:t,pos:n,dir:r},s={ln:a.ln,pos:null},l=""===a.line
for(o(e,a);null!==a.line;){if(""===a.line&&!l)return null!==s.pos?s:{ln:a.ln,pos:a.pos}
if(_(a.line[a.pos])&&null!==s.pos&&(a.ln!==s.ln||a.pos+1!==s.pos))return s
""===a.line||w(a.line[a.pos])||(l=!1,s={ln:a.ln,pos:a.pos}),o(e,a)}var i=e.getLine(s.ln)
s.pos=0
for(var c=0;c<i.length;++c)if(!w(i[c])){s.pos=c
break}return s}for(var l={ln:t.line,pos:t.ch};n>0;)l=r<0?s(e,l.ln,l.pos,r):a(e,l.ln,l.pos,r),n--
return i(l.ln,l.pos)}function Ee(e,t,n,r){var o,a,s=t,l={"(":/[()]/,")":/[()]/,"[":/[[\]]/,"]":/[[\]]/,"{":/[{}]/,"}":/[{}]/,"<":/[<>]/,">":/[<>]/}[n],c={"(":"(",")":"(","[":"[","]":"[","{":"{","}":"{","<":"<",">":"<"}[n],u=e.getLine(s.line).charAt(s.ch),d=u===c?1:0
if(o=e.scanForBracket(i(s.line,s.ch+d),-1,void 0,{bracketRegex:l}),a=e.scanForBracket(i(s.line,s.ch+d),1,void 0,{bracketRegex:l}),!o||!a)return{start:s,end:s}
if(o=o.pos,a=a.pos,o.line==a.line&&o.ch>a.ch||o.line>a.line){var f=o
o=a,a=f}return r?a.ch+=1:o.ch+=1,{start:o,end:a}}function Oe(e,t,n,r){var o,a,s,l,c=Z(t),u=e.getLine(c.line),d=u.split(""),f=d.indexOf(n)
if(c.ch<f?c.ch=f:f<c.ch&&d[c.ch]==n&&(a=c.ch,--c.ch),d[c.ch]!=n||a)for(s=c.ch;s>-1&&!o;s--)d[s]==n&&(o=s+1)
else o=c.ch+1
if(o&&!a)for(s=o,l=d.length;s<l&&!a;s++)d[s]==n&&(a=s)
return o&&a?(r&&(--o,++a),{start:i(c.line,o),end:i(c.line,a)}):{start:c,end:c}}function ze(){}function Ne(e){var t=e.state.vim
return t.searchState_||(t.searchState_=new ze)}function qe(e,t,n,r,i){e.openDialog?e.openDialog(t,r,{bottom:!0,value:i.value,onKeyDown:i.onKeyDown,onKeyUp:i.onKeyUp,selectValueOnOpen:!1}):r(prompt(n,""))}function Fe(e){return Ie(e,"/")}function De(e){return Pe(e,"/")}function Ie(e,t){var n=Pe(e,t)||[]
if(!n.length)return[]
var r=[]
if(0===n[0]){for(var i=0;i<n.length;i++)"number"==typeof n[i]&&r.push(e.substring(n[i]+1,n[i+1]))
return r}}function Pe(e,t){t||(t="/")
for(var n=!1,r=[],i=0;i<e.length;i++){var o=e.charAt(i)
n||o!=t||r.push(i),n=!n&&"\\"==o}return r}function Re(e){for(var t="|(){",n="}",r=!1,i=[],o=-1;o<e.length;o++){var a=e.charAt(o)||"",s=e.charAt(o+1)||"",l=s&&t.indexOf(s)!=-1
r?("\\"===a&&l||i.push(a),r=!1):"\\"===a?(r=!0,s&&n.indexOf(s)!=-1&&(l=!0),l&&"\\"!==s||i.push(a)):(i.push(a),l&&"\\"!==s&&i.push("\\"))}return i.join("")}function je(e){for(var t=!1,n=[],r=-1;r<e.length;r++){var i=e.charAt(r)||"",o=e.charAt(r+1)||""
Rt[i+o]?(n.push(Rt[i+o]),r++):t?(n.push(i),t=!1):"\\"===i?(t=!0,k(o)||"$"===o?n.push("$"):"/"!==o&&"\\"!==o&&n.push("\\")):("$"===i&&n.push("$"),n.push(i),"/"===o&&n.push("\\"))}return n.join("")}function Be(t){for(var n=new e.StringStream(t),r=[];!n.eol();){for(;n.peek()&&"\\"!=n.peek();)r.push(n.next())
var i=!1
for(var o in jt)if(n.match(o,!0)){i=!0,r.push(jt[o])
break}i||r.push(n.next())}return r.join("")}function We(e,t,n){var r=Et.registerController.getRegister("/")
if(r.setText(e),e instanceof RegExp)return e
var i,o,a=De(e)
if(a.length){i=e.substring(0,a[0])
var s=e.substring(a[0])
o=s.indexOf("i")!=-1}else i=e
if(!i)return null
L("pcre")||(i=Re(i)),n&&(t=/^[^A-Z]*$/.test(i))
var l=new RegExp(i,t||o?"i":void 0)
return l}function He(e,t){e.openNotification?e.openNotification('<span style="color: red">'+t+"</span>",{bottom:!0,duration:5e3}):alert(t)}function Ue(e,t){var n='<span style="font-family: monospace; white-space: pre">'+(e||"")+'<input type="text"></span>'
return t&&(n+=' <span style="color: #888">'+t+"</span>"),n}function $e(e,t){var n=(t.prefix||"")+" "+(t.desc||""),r=Ue(t.prefix,t.desc)
qe(e,r,n,t.onClose,t)}function Ke(e,t){if(e instanceof RegExp&&t instanceof RegExp){for(var n=["global","multiline","ignoreCase","source"],r=0;r<n.length;r++){var i=n[r]
if(e[i]!==t[i])return!1}return!0}return!1}function Ve(e,t,n,r){if(t){var i=Ne(e),o=We(t,!!n,!!r)
if(o)return Ze(e,o),Ke(o,i.getQuery())?o:(i.setQuery(o),o)}}function Ge(e){if("^"==e.source.charAt(0))var t=!0
return{token:function(n){if(t&&!n.sol())return void n.skipToEnd()
var r=n.match(e,!1)
if(r)return 0==r[0].length?(n.next(),"searching"):n.sol()||(n.backUp(1),e.exec(n.next()+r[0]))?(n.match(e),"searching"):(n.next(),null)
for(;!n.eol()&&(n.next(),!n.match(e,!1)););},query:e}}function Ze(e,t){var n=Ne(e),r=n.getOverlay()
r&&t==r.query||(r&&e.removeOverlay(r),r=Ge(t),e.addOverlay(r),e.showMatchesOnScrollbar&&(n.getScrollbarAnnotate()&&n.getScrollbarAnnotate().clear(),n.setScrollbarAnnotate(e.showMatchesOnScrollbar(t))),n.setOverlay(r))}function Xe(e,t,n,r){return void 0===r&&(r=1),e.operation(function(){for(var o=e.getCursor(),a=e.getSearchCursor(n,o),s=0;s<r;s++){var l=a.find(t)
if(0==s&&l&&X(a.from(),o)&&(l=a.find(t)),!l&&(a=e.getSearchCursor(n,t?i(e.lastLine()):i(e.firstLine(),0)),!a.find(t)))return}return a.from()})}function Qe(e){var t=Ne(e)
e.removeOverlay(Ne(e).getOverlay()),t.setOverlay(null),t.getScrollbarAnnotate()&&(t.getScrollbarAnnotate().clear(),t.setScrollbarAnnotate(null))}function Ye(e,t,n){return"number"!=typeof e&&(e=e.line),t instanceof Array?C(e,t):n?e>=t&&e<=n:e==t}function Je(e){var t=e.getScrollInfo(),n=6,r=10,i=e.coordsChar({left:0,top:n+t.top},"local"),o=t.clientHeight-r+t.top,a=e.coordsChar({left:0,top:o},"local")
return{top:i.line,bottom:a.line}}function et(e,t,n){if("'"==n){var r=e.doc.history.done,i=r[r.length-2]
return i&&i.ranges&&i.ranges[0].head}if("."==n){if(0==e.doc.history.lastModTime)return
var o=e.doc.history.done.filter(function(e){if(void 0!==e.changes)return e})
o.reverse()
var a=o[0].changes[0].to
return a}var s=t.marks[n]
return s&&s.find()}function tt(t,n,r,i,o,a,s,l,c){function u(){t.operation(function(){for(;!m;)d(),f()
p()})}function d(){var e=t.getRange(a.from(),a.to()),n=e.replace(s,l)
a.replace(n)}function f(){for(;a.findNext()&&Ye(a.from(),i,o);)if(r||!g||a.from().line!=g.line)return t.scrollIntoView(a.from(),30),t.setSelection(a.from(),a.to()),g=a.from(),void(m=!1)
m=!0}function p(e){if(e&&e(),t.focus(),g){t.setCursor(g)
var n=t.state.vim
n.exMode=!1,n.lastHPos=n.lastHSPos=g.ch}c&&c()}function h(n,r,i){e.e_stop(n)
var o=e.keyName(n)
switch(o){case"Y":d(),f()
break
case"N":f()
break
case"A":var a=c
c=void 0,t.operation(u),c=a
break
case"L":d()
case"Q":case"Esc":case"Ctrl-C":case"Ctrl-[":p(i)}return m&&p(i),!0}t.state.vim.exMode=!0
var m=!1,g=a.from()
return f(),m?void He(t,"No matches for "+s.source):n?void $e(t,{prefix:"replace with <strong>"+l+"</strong> (y/n/a/q/l)",onKeyDown:h}):(u(),void(c&&c()))}function nt(t){var n=t.state.vim,r=Et.macroModeState,i=Et.registerController.getRegister("."),o=r.isPlaying,a=r.lastInsertModeChanges
o||(t.off("change",ct),e.off(t.getInputField(),"keydown",ht)),!o&&n.insertModeRepeat>1&&(mt(t,n,n.insertModeRepeat-1,!0),n.lastEditInputState.repeatOverride=n.insertModeRepeat),delete n.insertModeRepeat,n.insertMode=!1,t.setCursor(t.getCursor().line,t.getCursor().ch-1),t.setOption("keyMap","vim"),t.setOption("disableInput",!0),t.toggleOverwrite(!1),i.setText(a.changes.join("")),e.signal(t,"vim-mode-change",{mode:"normal"}),r.isRecording&&st(r)}function rt(e){t.unshift(e)}function it(e,t,n,r,i){var o={keys:e,type:t}
o[t]=n,o[t+"Args"]=r
for(var a in i)o[a]=i[a]
rt(o)}function ot(t,n,r,i){var o=Et.registerController.getRegister(i)
if(":"==i)return o.keyBuffer[0]&&Ut.processCommand(t,o.keyBuffer[0]),void(r.isPlaying=!1)
var a=o.keyBuffer,s=0
r.isPlaying=!0,r.replaySearchQueries=o.searchQueries.slice(0)
for(var l=0;l<a.length;l++)for(var c,u,d=a[l];d;)if(c=/<\w+-.+?>|<\w+>|./.exec(d),u=c[0],d=d.substring(c.index+u.length),e.Vim.handleKey(t,u,"macro"),n.insertMode){var f=o.insertModeChanges[s++].changes
Et.macroModeState.lastInsertModeChanges.changes=f,gt(t,f,1),nt(t)}r.isPlaying=!1}function at(e,t){if(!e.isPlaying){var n=e.latestRegister,r=Et.registerController.getRegister(n)
r&&r.pushText(t)}}function st(e){if(!e.isPlaying){var t=e.latestRegister,n=Et.registerController.getRegister(t)
n&&n.pushInsertModeChanges&&n.pushInsertModeChanges(e.lastInsertModeChanges)}}function lt(e,t){if(!e.isPlaying){var n=e.latestRegister,r=Et.registerController.getRegister(n)
r&&r.pushSearchQuery&&r.pushSearchQuery(t)}}function ct(e,t){var n=Et.macroModeState,r=n.lastInsertModeChanges
if(!n.isPlaying)for(;t;){if(r.expectCursorActivityForChange=!0,r.ignoreCount>1)r.ignoreCount--
else if("+input"==t.origin||"paste"==t.origin||void 0===t.origin){var i=e.listSelections().length
i>1&&(r.ignoreCount=i)
var o=t.text.join("\n")
r.maybeReset&&(r.changes=[],r.maybeReset=!1),o&&(e.state.overwrite&&!/\n/.test(o)?r.changes.push([o]):r.changes.push(o))}t=t.next}}function ut(e){var t=e.state.vim
if(t.insertMode){var n=Et.macroModeState
if(n.isPlaying)return
var r=n.lastInsertModeChanges
r.expectCursorActivityForChange?r.expectCursorActivityForChange=!1:r.maybeReset=!0}else e.curOp.isVimOp||ft(e,t)
t.visualMode&&dt(e)}function dt(e){var t=e.state.vim,n=B(e,Z(t.sel.head)),r=H(n,0,1)
t.fakeCursor&&t.fakeCursor.clear(),t.fakeCursor=e.markText(n,r,{className:"cm-animate-fat-cursor"})}function ft(t,n){var r=t.getCursor("anchor"),i=t.getCursor("head")
if(n.visualMode&&!t.somethingSelected()?he(t,!1):n.visualMode||n.insertMode||!t.somethingSelected()||(n.visualMode=!0,n.visualLine=!1,e.signal(t,"vim-mode-change",{mode:"visual"})),n.visualMode){var o=Q(i,r)?0:-1,a=Q(i,r)?-1:0
i=H(i,0,o),r=H(r,0,a),n.sel={anchor:r,head:i},Me(t,n,"<",Y(i,r)),Me(t,n,">",J(i,r))}else n.insertMode||(n.lastHPos=t.getCursor().ch)}function pt(e){this.keyName=e}function ht(t){function n(){return i.maybeReset&&(i.changes=[],i.maybeReset=!1),i.changes.push(new pt(o)),!0}var r=Et.macroModeState,i=r.lastInsertModeChanges,o=e.keyName(t)
o&&(o.indexOf("Delete")==-1&&o.indexOf("Backspace")==-1||e.lookupKey(o,"vim-insert",n))}function mt(e,t,n,r){function i(){s?Nt.processAction(e,t,t.lastEditActionCommand):Nt.evalInput(e,t)}function o(n){if(a.lastInsertModeChanges.changes.length>0){n=t.lastEditActionCommand?n:1
var r=a.lastInsertModeChanges
gt(e,r.changes,n)}}var a=Et.macroModeState
a.isPlaying=!0
var s=!!t.lastEditActionCommand,l=t.inputState
if(t.inputState=t.lastEditInputState,s&&t.lastEditActionCommand.interlaceInsertRepeat)for(var c=0;c<n;c++)i(),o(1)
else r||i(),o(n)
t.inputState=l,t.insertMode&&!r&&nt(e),a.isPlaying=!1}function gt(t,n,r){function i(n){return"string"==typeof n?e.commands[n](t):n(t),!0}var o=t.getCursor("head"),a=Et.macroModeState.lastInsertModeChanges.inVisualBlock
if(a){var s=t.state.vim,l=s.lastSelection,c=U(l.anchor,l.head)
ae(t,o,c.line+1),r=t.listSelections().length,t.setCursor(o)}for(var u=0;u<r;u++){a&&t.setCursor(H(o,u,0))
for(var d=0;d<n.length;d++){var f=n[d]
if(f instanceof pt)e.lookupKey(f.keyName,"vim-insert",i)
else if("string"==typeof f){var p=t.getCursor()
t.replaceRange(f,p,p)}else{var h=t.getCursor(),m=H(h,0,f[0].length)
t.replaceRange(f[0],h,m)}}}a&&t.setCursor(H(o,0,1))}e.defineOption("vimMode",!1,function(t,n,r){n&&"vim"!=t.getOption("keyMap")?t.setOption("keyMap","vim"):!n&&r!=e.Init&&/^vim/.test(t.getOption("keyMap"))&&t.setOption("keyMap","default")})
var vt={Shift:"S",Ctrl:"C",Alt:"A",Cmd:"D",Mod:"A"},yt={Enter:"CR",Backspace:"BS",Delete:"Del",Insert:"Ins"},bt=/[\d]/,kt=[e.isWordChar,function(t){return t&&!e.isWordChar(t)&&!/\s/.test(t)}],xt=[function(e){return/\S/.test(e)}],wt=g(65,26),_t=g(97,26),Ct=g(48,10),St=[].concat(wt,_t,Ct,["<",">"]),Mt=[].concat(wt,_t,Ct,["-",'"',".",":","/"]),Lt={}
S("filetype",void 0,"string",["ft"],function(e,t){if(void 0!==t){if(void 0===e){var n=t.getOption("mode")
return"null"==n?"":n}var n=""==e?"null":e
t.setOption("mode",n)}})
var Tt=function(){function e(e,t,s){function l(t){var i=++r%n,o=a[i]
o&&o.clear(),a[i]=e.setBookmark(t)}var c=r%n,u=a[c]
if(u){var d=u.find()
d&&!X(d,t)&&l(t)}else l(t)
l(s),i=r,o=r-n+1,o<0&&(o=0)}function t(e,t){r+=t,r>i?r=i:r<o&&(r=o)
var s=a[(n+r)%n]
if(s&&!s.find()){var l,c=t>0?1:-1,u=e.getCursor()
do if(r+=c,s=a[(n+r)%n],s&&(l=s.find())&&!X(u,l))break
while(r<i&&r>o)}return s}var n=100,r=-1,i=0,o=0,a=new Array(n)
return{cachedCursor:void 0,add:e,move:t}},At=function(e){return e?{changes:e.changes,expectCursorActivityForChange:e.expectCursorActivityForChange}:{changes:[],expectCursorActivityForChange:!1}}
T.prototype={exitMacroRecordMode:function(){var e=Et.macroModeState
e.onRecordingDone&&e.onRecordingDone(),e.onRecordingDone=void 0,e.isRecording=!1},enterMacroRecordMode:function(e,t){var n=Et.registerController.getRegister(t)
n&&(n.clear(),this.latestRegister=t,e.openDialog&&(this.onRecordingDone=e.openDialog("(recording)["+t+"]",null,{bottom:!0})),this.isRecording=!0)}}
var Et,Ot,zt={buildKeyMap:function(){},getRegisterController:function(){return Et.registerController},resetVimGlobalState_:E,getVimGlobalState_:function(){return Et},maybeInitVimState_:A,suppressErrorLogging:!1,InsertModeKey:pt,map:function(e,t,n){Ut.map(e,t,n)},unmap:function(e,t){Ut.unmap(e,t)},noremap:function(e,r,i){function o(e){return e?[e]:["normal","insert","visual"]}for(var a=o(i),s=t.length,l=n,c=s-l;c<s&&a.length;c++){var u=t[c]
if(!(u.keys!=r||i&&u.context&&u.context!==i||"ex"===u.type.substr(0,2)||"key"===u.type.substr(0,3))){var d={}
for(var f in u)d[f]=u[f]
d.keys=e,i&&!d.context&&(d.context=i),this._mapCommand(d)
var p=o(u.context)
a=a.filter(function(e){return p.indexOf(e)===-1})}}},mapclear:function(e){var r=t.length,i=n,o=t.slice(0,r-i)
if(t=t.slice(r-i),e)for(var a=o.length-1;a>=0;a--){var s=o[a]
if(e!==s.context)if(s.context)this._mapCommand(s)
else{var l=["normal","insert","visual"]
for(var c in l)if(l[c]!==e){var u={}
for(var d in s)u[d]=s[d]
u.context=l[c],this._mapCommand(u)}}}},setOption:M,getOption:L,defineOption:S,defineEx:function(e,t,n){if(t){if(0!==e.indexOf(t))throw new Error('(Vim.defineEx) "'+t+'" is not a prefix of "'+e+'", command not registered')}else t=e
Ht[e]=n,Ut.commandMap_[t]={name:e,shortName:t,type:"api"}},handleKey:function(e,t,n){var r=this.findKey(e,t,n)
if("function"==typeof r)return r()},findKey:function(n,r,i){function o(){var e=Et.macroModeState
if(e.isRecording){if("q"==r)return e.exitMacroRecordMode(),z(n),!0
"mapping"!=i&&at(e,r)}}function a(){if("<Esc>"==r)return z(n),d.visualMode?he(n):d.insertMode&&nt(n),!0}function s(t){for(var i;t;)i=/<\w+-.+?>|<\w+>|./.exec(t),r=i[0],t=t.substring(i.index+r.length),e.Vim.handleKey(n,r,"mapping")}function l(){if(a())return!0
for(var e=d.inputState.keyBuffer=d.inputState.keyBuffer+r,i=1==r.length,o=Nt.matchCommand(e,t,d.inputState,"insert");e.length>1&&"full"!=o.type;){var e=d.inputState.keyBuffer=e.slice(1),s=Nt.matchCommand(e,t,d.inputState,"insert")
"none"!=s.type&&(o=s)}if("none"==o.type)return z(n),!1
if("partial"==o.type)return Ot&&window.clearTimeout(Ot),Ot=window.setTimeout(function(){d.insertMode&&d.inputState.keyBuffer&&z(n)},L("insertModeEscKeysTimeout")),!i
if(Ot&&window.clearTimeout(Ot),i){for(var l=n.listSelections(),c=0;c<l.length;c++){var u=l[c].head
n.replaceRange("",H(u,0,-(e.length-1)),u,"+input")}Et.macroModeState.lastInsertModeChanges.changes.pop()}return z(n),o.command}function c(){if(o()||a())return!0
var e=d.inputState.keyBuffer=d.inputState.keyBuffer+r
if(/^[1-9]\d*$/.test(e))return!0
var i=/^(\d*)(.*)$/.exec(e)
if(!i)return z(n),!1
var s=d.visualMode?"visual":"normal",l=Nt.matchCommand(i[2]||i[1],t,d.inputState,s)
if("none"==l.type)return z(n),!1
if("partial"==l.type)return!0
d.inputState.keyBuffer=""
var i=/^(\d*)(.*)$/.exec(e)
return i[1]&&"0"!=i[1]&&d.inputState.pushRepeatDigit(i[1]),l.command}var u,d=A(n)
return u=d.insertMode?l():c(),u===!1?d.insertMode||1!==r.length?void 0:function(){return!0}:u===!0?function(){return!0}:function(){return n.operation(function(){n.curOp.isVimOp=!0
try{"keyToKey"==u.type?s(u.toKeys):Nt.processCommand(n,d,u)}catch(t){throw n.state.vim=void 0,A(n),e.Vim.suppressErrorLogging||console.log(t),t}return!0})}},handleEx:function(e,t){Ut.processCommand(e,t)},defineMotion:I,defineAction:j,defineOperator:R,mapCommand:it,_mapCommand:rt,defineRegister:q,exitVisualMode:he,exitInsertMode:nt}
O.prototype.pushRepeatDigit=function(e){this.operator?this.motionRepeat=this.motionRepeat.concat(e):this.prefixRepeat=this.prefixRepeat.concat(e)},O.prototype.getRepeat=function(){var e=0
return(this.prefixRepeat.length>0||this.motionRepeat.length>0)&&(e=1,this.prefixRepeat.length>0&&(e*=parseInt(this.prefixRepeat.join(""),10)),this.motionRepeat.length>0&&(e*=parseInt(this.motionRepeat.join(""),10))),e},N.prototype={setText:function(e,t,n){this.keyBuffer=[e||""],this.linewise=!!t,this.blockwise=!!n},pushText:function(e,t){t&&(this.linewise||this.keyBuffer.push("\n"),this.linewise=!0),this.keyBuffer.push(e)},pushInsertModeChanges:function(e){this.insertModeChanges.push(At(e))},pushSearchQuery:function(e){this.searchQueries.push(e)},clear:function(){this.keyBuffer=[],this.insertModeChanges=[],this.searchQueries=[],this.linewise=!1},toString:function(){return this.keyBuffer.join("")}},F.prototype={pushText:function(e,t,n,r,i){r&&"\n"!==n.charAt(n.length-1)&&(n+="\n")
var o=this.isValidRegister(e)?this.getRegister(e):null
if(!o){switch(t){case"yank":this.registers[0]=new N(n,r,i)
break
case"delete":case"change":n.indexOf("\n")==-1?this.registers["-"]=new N(n,r):(this.shiftNumericRegisters_(),this.registers[1]=new N(n,r))}return void this.unnamedRegister.setText(n,r,i)}var a=x(e)
a?o.pushText(n,r):o.setText(n,r,i),this.unnamedRegister.setText(o.toString(),r)},getRegister:function(e){return this.isValidRegister(e)?(e=e.toLowerCase(),this.registers[e]||(this.registers[e]=new N),this.registers[e]):this.unnamedRegister},isValidRegister:function(e){return e&&C(e,Mt)},shiftNumericRegisters_:function(){for(var e=9;e>=2;e--)this.registers[e]=this.getRegister(""+(e-1))}},D.prototype={nextMatch:function(e,t){var n=this.historyBuffer,r=t?-1:1
null===this.initialPrefix&&(this.initialPrefix=e)
for(var i=this.iterator+r;t?i>=0:i<n.length;i+=r)for(var o=n[i],a=0;a<=o.length;a++)if(this.initialPrefix==o.substring(0,a))return this.iterator=i,o
return i>=n.length?(this.iterator=n.length,this.initialPrefix):i<0?e:void 0},pushInput:function(e){var t=this.historyBuffer.indexOf(e)
t>-1&&this.historyBuffer.splice(t,1),e.length&&this.historyBuffer.push(e)},reset:function(){this.initialPrefix=null,this.iterator=this.historyBuffer.length}}
var Nt={matchCommand:function(e,t,n,r){var i=$(e,t,r,n)
if(!i.full&&!i.partial)return{type:"none"}
if(!i.full&&i.partial)return{type:"partial"}
for(var o,a=0;a<i.full.length;a++){var s=i.full[a]
o||(o=s)}if("<character>"==o.keys.slice(-11)){var l=V(e)
if(!l)return{type:"none"}
n.selectedCharacter=l}return{type:"full",command:o}},processCommand:function(e,t,n){switch(t.inputState.repeatOverride=n.repeatOverride,n.type){case"motion":this.processMotion(e,t,n)
break
case"operator":this.processOperator(e,t,n)
break
case"operatorMotion":this.processOperatorMotion(e,t,n)
break
case"action":this.processAction(e,t,n)
break
case"search":this.processSearch(e,t,n)
break
case"ex":case"keyToEx":this.processEx(e,t,n)}},processMotion:function(e,t,n){t.inputState.motion=n.motion,t.inputState.motionArgs=W(n.motionArgs),this.evalInput(e,t)},processOperator:function(e,t,n){var r=t.inputState
if(r.operator){if(r.operator==n.operator)return r.motion="expandToLine",r.motionArgs={linewise:!0},void this.evalInput(e,t)
z(e)}r.operator=n.operator,r.operatorArgs=W(n.operatorArgs),t.visualMode&&this.evalInput(e,t)},processOperatorMotion:function(e,t,n){var r=t.visualMode,i=W(n.operatorMotionArgs)
i&&r&&i.visualLine&&(t.visualLine=!0),this.processOperator(e,t,n),r||this.processMotion(e,t,n)},processAction:function(e,t,n){var r=t.inputState,i=r.getRepeat(),o=!!i,a=W(n.actionArgs)||{}
r.selectedCharacter&&(a.selectedCharacter=r.selectedCharacter),n.operator&&this.processOperator(e,t,n),n.motion&&this.processMotion(e,t,n),(n.motion||n.operator)&&this.evalInput(e,t),a.repeat=i||1,a.repeatIsExplicit=o,a.registerName=r.registerName,z(e),t.lastMotion=null,n.isEdit&&this.recordLastEdit(t,r,n),Dt[n.action](e,a,t)},processSearch:function(t,n,r){function i(e,i,o){Et.searchHistoryController.pushInput(e),Et.searchHistoryController.reset()
try{Ve(t,e,i,o)}catch(a){return He(t,"Invalid regex: "+e),void z(t)}Nt.processMotion(t,n,{type:"motion",motion:"findNext",motionArgs:{forward:!0,toJumplist:r.searchArgs.toJumplist}})}function o(e){t.scrollTo(f.left,f.top),i(e,!0,!0)
var n=Et.macroModeState
n.isRecording&&lt(n,e)}function a(n,r,i){var o,a,s=e.keyName(n)
"Up"==s||"Down"==s?(o="Up"==s,a=n.target?n.target.selectionEnd:0,r=Et.searchHistoryController.nextMatch(r,o)||"",i(r),a&&n.target&&(n.target.selectionEnd=n.target.selectionStart=Math.min(a,n.target.value.length))):"Left"!=s&&"Right"!=s&&"Ctrl"!=s&&"Alt"!=s&&"Shift"!=s&&Et.searchHistoryController.reset()
var c
try{c=Ve(t,r,!0,!0)}catch(n){}c?t.scrollIntoView(Xe(t,!l,c),30):(Qe(t),t.scrollTo(f.left,f.top))}function s(n,r,i){var o=e.keyName(n)
"Esc"==o||"Ctrl-C"==o||"Ctrl-["==o||"Backspace"==o&&""==r?(Et.searchHistoryController.pushInput(r),Et.searchHistoryController.reset(),Ve(t,d),Qe(t),t.scrollTo(f.left,f.top),e.e_stop(n),z(t),i(),t.focus()):"Up"==o||"Down"==o?e.e_stop(n):"Ctrl-U"==o&&(e.e_stop(n),i(""))}if(t.getSearchCursor){var l=r.searchArgs.forward,c=r.searchArgs.wholeWordOnly
Ne(t).setReversed(!l)
var u=l?"/":"?",d=Ne(t).getQuery(),f=t.getScrollInfo()
switch(r.searchArgs.querySrc){case"prompt":var p=Et.macroModeState
if(p.isPlaying){var h=p.replaySearchQueries.shift()
i(h,!0,!1)}else $e(t,{onClose:o,prefix:u,desc:Bt,onKeyUp:a,onKeyDown:s})
break
case"wordUnderCursor":var m=ye(t,!1,!0,!1,!0),g=!0
if(m||(m=ye(t,!1,!0,!1,!1),g=!1),!m)return
var h=t.getLine(m.start.line).substring(m.start.ch,m.end.ch)
h=g&&c?"\\b"+h+"\\b":re(h),Et.jumpList.cachedCursor=t.getCursor(),t.setCursor(m.start),i(h,!0,!1)}}},processEx:function(t,n,r){function i(e){Et.exCommandHistoryController.pushInput(e),Et.exCommandHistoryController.reset(),Ut.processCommand(t,e)}function o(n,r,i){var o,a,s=e.keyName(n);("Esc"==s||"Ctrl-C"==s||"Ctrl-["==s||"Backspace"==s&&""==r)&&(Et.exCommandHistoryController.pushInput(r),Et.exCommandHistoryController.reset(),e.e_stop(n),z(t),i(),t.focus()),"Up"==s||"Down"==s?(e.e_stop(n),o="Up"==s,a=n.target?n.target.selectionEnd:0,r=Et.exCommandHistoryController.nextMatch(r,o)||"",i(r),a&&n.target&&(n.target.selectionEnd=n.target.selectionStart=Math.min(a,n.target.value.length))):"Ctrl-U"==s?(e.e_stop(n),i("")):"Left"!=s&&"Right"!=s&&"Ctrl"!=s&&"Alt"!=s&&"Shift"!=s&&Et.exCommandHistoryController.reset()}"keyToEx"==r.type?Ut.processCommand(t,r.exArgs.input):n.visualMode?$e(t,{onClose:i,prefix:":",value:"'<,'>",onKeyDown:o,selectValueOnOpen:!1}):$e(t,{onClose:i,prefix:":",onKeyDown:o})},evalInput:function(e,t){var n,r,o,a=t.inputState,s=a.motion,l=a.motionArgs||{},c=a.operator,u=a.operatorArgs||{},d=a.registerName,f=t.sel,p=Z(t.visualMode?B(e,f.head):e.getCursor("head")),h=Z(t.visualMode?B(e,f.anchor):e.getCursor("anchor")),m=Z(p),g=Z(h)
if(c&&this.recordLastEdit(t,a),o=void 0!==a.repeatOverride?a.repeatOverride:a.getRepeat(),o>0&&l.explicitRepeat?l.repeatIsExplicit=!0:(l.noRepeat||!l.explicitRepeat&&0===o)&&(o=1,l.repeatIsExplicit=!1),a.selectedCharacter&&(l.selectedCharacter=u.selectedCharacter=a.selectedCharacter),l.repeat=o,z(e),s){var v=qt[s](e,p,l,t)
if(t.lastMotion=qt[s],!v)return
if(l.toJumplist){var y=Et.jumpList,b=y.cachedCursor
b?(be(e,b,v),delete y.cachedCursor):be(e,p,v)}v instanceof Array?(r=v[0],n=v[1]):n=v,n||(n=Z(p)),t.visualMode?(t.visualBlock&&n.ch===1/0||(n=B(e,n,t.visualBlock)),r&&(r=B(e,r,!0)),r=r||g,f.anchor=r,f.head=n,de(e),Me(e,t,"<",Q(r,n)?r:n),Me(e,t,">",Q(r,n)?n:r)):c||(n=B(e,n),e.setCursor(n.line,n.ch))}if(c){if(u.lastSel){r=g
var k=u.lastSel,x=Math.abs(k.head.line-k.anchor.line),w=Math.abs(k.head.ch-k.anchor.ch)
n=k.visualLine?i(g.line+x,g.ch):k.visualBlock?i(g.line+x,g.ch+w):k.head.line==k.anchor.line?i(g.line,g.ch+w):i(g.line+x,g.ch),t.visualMode=!0,t.visualLine=k.visualLine,t.visualBlock=k.visualBlock,f=t.sel={anchor:r,head:n},de(e)}else t.visualMode&&(u.lastSel={anchor:Z(f.anchor),head:Z(f.head),visualBlock:t.visualBlock,visualLine:t.visualLine})
var _,C,S,M,L
if(t.visualMode){if(_=Y(f.head,f.anchor),C=J(f.head,f.anchor),S=t.visualLine||u.linewise,M=t.visualBlock?"block":S?"line":"char",L=fe(e,{anchor:_,head:C},M),S){var T=L.ranges
if("block"==M)for(var A=0;A<T.length;A++)T[A].head.ch=te(e,T[A].head.line)
else"line"==M&&(T[0].head=i(T[0].head.line+1,0))}}else{if(_=Z(r||g),C=Z(n||m),Q(C,_)){var E=_
_=C,C=E}S=l.linewise||u.linewise,S?ge(e,_,C):l.forward&&me(e,_,C),M="char"
var O=!l.inclusive||S
L=fe(e,{anchor:_,head:C},M,O)}e.setSelections(L.ranges,L.primary),t.lastMotion=null,u.repeat=o,u.registerName=d,u.linewise=S
var N=Ft[c](e,u,L.ranges,g,n)
t.visualMode&&he(e,null!=N),N&&e.setCursor(N)}},recordLastEdit:function(e,t,n){var r=Et.macroModeState
r.isPlaying||(e.lastEditInputState=t,e.lastEditActionCommand=n,r.lastInsertModeChanges.changes=[],r.lastInsertModeChanges.expectCursorActivityForChange=!1)}},qt={moveToTopLine:function(e,t,n){var r=Je(e).top+n.repeat-1
return i(r,ve(e.getLine(r)))},moveToMiddleLine:function(e){var t=Je(e),n=Math.floor(.5*(t.top+t.bottom))
return i(n,ve(e.getLine(n)))},moveToBottomLine:function(e,t,n){var r=Je(e).bottom-n.repeat+1
return i(r,ve(e.getLine(r)))},expandToLine:function(e,t,n){var r=t
return i(r.line+n.repeat-1,1/0)},findNext:function(e,t,n){var r=Ne(e),i=r.getQuery()
if(i){var o=!n.forward
return o=r.isReversed()?!o:o,Ze(e,i),Xe(e,o,i,n.repeat)}},goToMark:function(e,t,n,r){var i=et(e,r,n.selectedCharacter)
return i?n.linewise?{line:i.line,ch:ve(e.getLine(i.line))}:i:null},moveToOtherHighlightedEnd:function(e,t,n,r){if(r.visualBlock&&n.sameLine){var o=r.sel
return[B(e,i(o.anchor.line,o.head.ch)),B(e,i(o.head.line,o.anchor.ch))]}return[r.sel.head,r.sel.anchor]},jumpToMark:function(e,t,n,r){for(var o=t,a=0;a<n.repeat;a++){var s=o
for(var l in r.marks)if(y(l)){var c=r.marks[l].find(),u=n.forward?Q(c,s):Q(s,c)
if(!(u||n.linewise&&c.line==s.line)){var d=X(s,o),f=n.forward?ee(s,c,o):ee(o,c,s);(d||f)&&(o=c)}}}return n.linewise&&(o=i(o.line,ve(e.getLine(o.line)))),o},moveByCharacters:function(e,t,n){var r=t,o=n.repeat,a=n.forward?r.ch+o:r.ch-o
return i(r.line,a)},moveByLines:function(e,t,n,r){var o=t,a=o.ch
switch(r.lastMotion){case this.moveByLines:case this.moveByDisplayLines:case this.moveByScroll:case this.moveToColumn:case this.moveToEol:a=r.lastHPos
break
default:r.lastHPos=a}var s=n.repeat+(n.repeatOffset||0),l=n.forward?o.line+s:o.line-s,c=e.firstLine(),u=e.lastLine()
return l<c&&o.line==c?this.moveToStartOfLine(e,t,n,r):l>u&&o.line==u?this.moveToEol(e,t,n,r):(n.toFirstChar&&(a=ve(e.getLine(l)),r.lastHPos=a),r.lastHSPos=e.charCoords(i(l,a),"div").left,i(l,a))},moveByDisplayLines:function(e,t,n,r){var o=t
switch(r.lastMotion){case this.moveByDisplayLines:case this.moveByScroll:case this.moveByLines:case this.moveToColumn:case this.moveToEol:break
default:r.lastHSPos=e.charCoords(o,"div").left}var a=n.repeat,s=e.findPosV(o,n.forward?a:-a,"line",r.lastHSPos)
if(s.hitSide)if(n.forward)var l=e.charCoords(s,"div"),c={top:l.top+8,left:r.lastHSPos},s=e.coordsChar(c,"div")
else{var u=e.charCoords(i(e.firstLine(),0),"div")
u.left=r.lastHSPos,s=e.coordsChar(u,"div")}return r.lastHPos=s.ch,s},moveByPage:function(e,t,n){var r=t,i=n.repeat
return e.findPosV(r,n.forward?i:-i,"page")},moveByParagraph:function(e,t,n){var r=n.forward?1:-1
return Te(e,t,n.repeat,r)},moveBySentence:function(e,t,n){var r=n.forward?1:-1
return Ae(e,t,n.repeat,r)},moveByScroll:function(e,t,n,r){var i=e.getScrollInfo(),o=null,a=n.repeat
a||(a=i.clientHeight/(2*e.defaultTextHeight()))
var s=e.charCoords(t,"local")
n.repeat=a
var o=qt.moveByDisplayLines(e,t,n,r)
if(!o)return null
var l=e.charCoords(o,"local")
return e.scrollTo(null,i.top+l.top-s.top),o},moveByWords:function(e,t,n){return _e(e,t,n.repeat,!!n.forward,!!n.wordEnd,!!n.bigWord)},moveTillCharacter:function(e,t,n){var r=n.repeat,i=Ce(e,r,n.forward,n.selectedCharacter),o=n.forward?-1:1
return ke(o,n),i?(i.ch+=o,i):null},moveToCharacter:function(e,t,n){var r=n.repeat
return ke(0,n),Ce(e,r,n.forward,n.selectedCharacter)||t},moveToSymbol:function(e,t,n){var r=n.repeat
return xe(e,r,n.forward,n.selectedCharacter)||t},moveToColumn:function(e,t,n,r){var i=n.repeat
return r.lastHPos=i-1,r.lastHSPos=e.charCoords(t,"div").left,Se(e,i)},moveToEol:function(e,t,n,r){var o=t
r.lastHPos=1/0
var a=i(o.line+n.repeat-1,1/0),s=e.clipPos(a)
return s.ch--,r.lastHSPos=e.charCoords(s,"div").left,a},moveToFirstNonWhiteSpaceCharacter:function(e,t){var n=t
return i(n.line,ve(e.getLine(n.line)))},moveToMatchedSymbol:function(e,t){for(var n,r=t,o=r.line,a=r.ch,s=e.getLine(o);a<s.length;a++)if(n=s.charAt(a),n&&b(n)){var l=e.getTokenTypeAt(i(o,a+1))
if("string"!==l&&"comment"!==l)break}if(a<s.length){var c="<"===a||">"===a?/[(){}[\]<>]/:/[(){}[\]]/,u=e.findMatchingBracket(i(o,a),{bracketRegex:c})
return u.to}return r},moveToStartOfLine:function(e,t){return i(t.line,0)},moveToLineOrEdgeOfDocument:function(e,t,n){var r=n.forward?e.lastLine():e.firstLine()
return n.repeatIsExplicit&&(r=n.repeat-e.getOption("firstLineNumber")),i(r,ve(e.getLine(r)))},textObjectManipulation:function(e,t,n,r){var i={"(":")",")":"(","{":"}","}":"{","[":"]","]":"[","<":">",">":"<"},o={"'":!0,'"':!0},a=n.selectedCharacter
"b"==a?a="(":"B"==a&&(a="{")
var s,l=!n.textObjectInner
if(i[a])s=Ee(e,t,a,l)
else if(o[a])s=Oe(e,t,a,l)
else if("W"===a)s=ye(e,l,!0,!0)
else if("w"===a)s=ye(e,l,!0,!1)
else{if("p"!==a)return null
if(s=Te(e,t,n.repeat,0,l),n.linewise=!0,r.visualMode)r.visualLine||(r.visualLine=!0)
else{var c=r.inputState.operatorArgs
c&&(c.linewise=!0),s.end.line--}}return e.state.vim.visualMode?ue(e,s.start,s.end):[s.start,s.end]},repeatLastCharacterSearch:function(e,t,n){var r=Et.lastCharacterSearch,i=n.repeat,o=n.forward===r.forward,a=(r.increment?1:0)*(o?-1:1)
e.moveH(-a,"char"),n.inclusive=!!o
var s=Ce(e,i,o,r.selectedCharacter)
return s?(s.ch+=a,s):(e.moveH(a,"char"),t)}},Ft={change:function(t,n,r){var o,a,s=t.state.vim
if(Et.macroModeState.lastInsertModeChanges.inVisualBlock=s.visualBlock,s.visualMode){a=t.getSelection()
var l=P("",r.length)
t.replaceSelections(l),o=Y(r[0].head,r[0].anchor)}else{var c=r[0].anchor,u=r[0].head
a=t.getRange(c,u)
var d=s.lastEditInputState||{}
if("moveByWords"==d.motion&&!w(a)){var f=/\s+$/.exec(a)
f&&d.motionArgs&&d.motionArgs.forward&&(u=H(u,0,-f[0].length),a=a.slice(0,-f[0].length))}var p=new i(c.line-1,Number.MAX_VALUE),h=t.firstLine()==t.lastLine()
u.line>t.lastLine()&&n.linewise&&!h?t.replaceRange("",p,u):t.replaceRange("",c,u),n.linewise&&(h||(t.setCursor(p),e.commands.newlineAndIndent(t)),c.ch=Number.MAX_VALUE),o=c}Et.registerController.pushText(n.registerName,"change",a,n.linewise,r.length>1),Dt.enterInsertMode(t,{head:o},t.state.vim)},"delete":function(e,t,n){var r,o,a=e.state.vim
if(a.visualBlock){o=e.getSelection()
var s=P("",n.length)
e.replaceSelections(s),r=n[0].anchor}else{var l=n[0].anchor,c=n[0].head
t.linewise&&c.line!=e.firstLine()&&l.line==e.lastLine()&&l.line==c.line-1&&(l.line==e.firstLine()?l.ch=0:l=i(l.line-1,te(e,l.line-1))),o=e.getRange(l,c),e.replaceRange("",l,c),r=l,t.linewise&&(r=qt.moveToFirstNonWhiteSpaceCharacter(e,l))}Et.registerController.pushText(t.registerName,"delete",o,t.linewise,a.visualBlock)
var u=a.insertMode
return B(e,r,u)},indent:function(e,t,n){var r=e.state.vim,i=n[0].anchor.line,o=r.visualBlock?n[n.length-1].anchor.line:n[0].head.line,a=r.visualMode?t.repeat:1
t.linewise&&o--
for(var s=i;s<=o;s++)for(var l=0;l<a;l++)e.indentLine(s,t.indentRight)
return qt.moveToFirstNonWhiteSpaceCharacter(e,n[0].anchor)},indentAuto:function(e,t,n){return e.execCommand("indentAuto"),qt.moveToFirstNonWhiteSpaceCharacter(e,n[0].anchor)},changeCase:function(e,t,n,r,i){for(var o=e.getSelections(),a=[],s=t.toLower,l=0;l<o.length;l++){var c=o[l],u=""
if(s===!0)u=c.toLowerCase()
else if(s===!1)u=c.toUpperCase()
else for(var d=0;d<c.length;d++){var f=c.charAt(d)
u+=x(f)?f.toLowerCase():f.toUpperCase()}a.push(u)}return e.replaceSelections(a),t.shouldMoveCursor?i:!e.state.vim.visualMode&&t.linewise&&n[0].anchor.line+1==n[0].head.line?qt.moveToFirstNonWhiteSpaceCharacter(e,r):t.linewise?r:Y(n[0].anchor,n[0].head)},yank:function(e,t,n,r){var i=e.state.vim,o=e.getSelection(),a=i.visualMode?Y(i.sel.anchor,i.sel.head,n[0].head,n[0].anchor):r
return Et.registerController.pushText(t.registerName,"yank",o,t.linewise,i.visualBlock),a}},Dt={jumpListWalk:function(e,t,n){if(!n.visualMode){var r=t.repeat,i=t.forward,o=Et.jumpList,a=o.move(e,i?r:-r),s=a?a.find():void 0
s=s?s:e.getCursor(),e.setCursor(s)}},scroll:function(e,t,n){if(!n.visualMode){var r=t.repeat||1,i=e.defaultTextHeight(),o=e.getScrollInfo().top,a=i*r,s=t.forward?o+a:o-a,l=Z(e.getCursor()),c=e.charCoords(l,"local")
if(t.forward)s>c.top?(l.line+=(s-c.top)/i,l.line=Math.ceil(l.line),e.setCursor(l),c=e.charCoords(l,"local"),e.scrollTo(null,c.top)):e.scrollTo(null,s)
else{var u=s+e.getScrollInfo().clientHeight
u<c.bottom?(l.line-=(c.bottom-u)/i,l.line=Math.floor(l.line),e.setCursor(l),c=e.charCoords(l,"local"),e.scrollTo(null,c.bottom-e.getScrollInfo().clientHeight)):e.scrollTo(null,s)}}},scrollToCursor:function(e,t){var n=e.getCursor().line,r=e.charCoords(i(n,0),"local"),o=e.getScrollInfo().clientHeight,a=r.top,s=r.bottom-a
switch(t.position){case"center":a=a-o/2+s
break
case"bottom":a=a-o+s}e.scrollTo(null,a)},replayMacro:function(e,t,n){var r=t.selectedCharacter,i=t.repeat,o=Et.macroModeState
for("@"==r&&(r=o.latestRegister);i--;)ot(e,n,o,r)},enterMacroRecordMode:function(e,t){var n=Et.macroModeState,r=t.selectedCharacter
Et.registerController.isValidRegister(r)&&n.enterMacroRecordMode(e,r)},toggleOverwrite:function(t){t.state.overwrite?(t.toggleOverwrite(!1),t.setOption("keyMap","vim-insert"),e.signal(t,"vim-mode-change",{mode:"insert"})):(t.toggleOverwrite(!0),t.setOption("keyMap","vim-replace"),e.signal(t,"vim-mode-change",{mode:"replace"}))},enterInsertMode:function(t,n,r){if(!t.getOption("readOnly")){r.insertMode=!0,r.insertModeRepeat=n&&n.repeat||1
var o=n?n.insertAt:null,a=r.sel,s=n.head||t.getCursor("head"),l=t.listSelections().length
if("eol"==o)s=i(s.line,te(t,s.line))
else if("charAfter"==o)s=H(s,0,1)
else if("firstNonBlank"==o)s=qt.moveToFirstNonWhiteSpaceCharacter(t,s)
else if("startOfSelectedArea"==o)r.visualBlock?(s=i(Math.min(a.head.line,a.anchor.line),Math.min(a.head.ch,a.anchor.ch)),l=Math.abs(a.head.line-a.anchor.line)+1):s=a.head.line<a.anchor.line?a.head:i(a.anchor.line,0)
else if("endOfSelectedArea"==o)r.visualBlock?(s=i(Math.min(a.head.line,a.anchor.line),Math.max(a.head.ch+1,a.anchor.ch)),l=Math.abs(a.head.line-a.anchor.line)+1):s=a.head.line>=a.anchor.line?H(a.head,0,1):i(a.anchor.line,0)
else if("inplace"==o&&r.visualMode)return
t.setOption("disableInput",!1),n&&n.replace?(t.toggleOverwrite(!0),t.setOption("keyMap","vim-replace"),e.signal(t,"vim-mode-change",{mode:"replace"})):(t.toggleOverwrite(!1),t.setOption("keyMap","vim-insert"),e.signal(t,"vim-mode-change",{mode:"insert"})),Et.macroModeState.isPlaying||(t.on("change",ct),e.on(t.getInputField(),"keydown",ht)),r.visualMode&&he(t),ae(t,s,l)}},toggleVisualMode:function(t,n,r){var o,a=n.repeat,s=t.getCursor()
r.visualMode?r.visualLine^n.linewise||r.visualBlock^n.blockwise?(r.visualLine=!!n.linewise,r.visualBlock=!!n.blockwise,e.signal(t,"vim-mode-change",{mode:"visual",subMode:r.visualLine?"linewise":r.visualBlock?"blockwise":""}),de(t)):he(t):(r.visualMode=!0,r.visualLine=!!n.linewise,r.visualBlock=!!n.blockwise,o=B(t,i(s.line,s.ch+a-1),!0),r.sel={anchor:s,head:o},e.signal(t,"vim-mode-change",{mode:"visual",subMode:r.visualLine?"linewise":r.visualBlock?"blockwise":""}),de(t),Me(t,r,"<",Y(s,o)),Me(t,r,">",J(s,o)))},reselectLastSelection:function(t,n,r){var i=r.lastSelection
if(r.visualMode&&ce(t,r),i){var o=i.anchorMark.find(),a=i.headMark.find()
if(!o||!a)return
r.sel={anchor:o,head:a},r.visualMode=!0,r.visualLine=i.visualLine,r.visualBlock=i.visualBlock,de(t),Me(t,r,"<",Y(o,a)),Me(t,r,">",J(o,a)),e.signal(t,"vim-mode-change",{mode:"visual",subMode:r.visualLine?"linewise":r.visualBlock?"blockwise":""})}},joinLines:function(e,t,n){var r,o
if(n.visualMode){if(r=e.getCursor("anchor"),o=e.getCursor("head"),Q(o,r)){var a=o
o=r,r=a}o.ch=te(e,o.line)-1}else{var s=Math.max(t.repeat,2)
r=e.getCursor(),o=B(e,i(r.line+s-1,1/0))}for(var l=0,c=r.line;c<o.line;c++){l=te(e,r.line)
var a=i(r.line+1,te(e,r.line+1)),u=e.getRange(r,a)
u=u.replace(/\n\s*/g," "),e.replaceRange(u,r,a)}var d=i(r.line,l)
n.visualMode&&he(e,!1),e.setCursor(d)},newLineAndEnterInsertMode:function(t,n,r){r.insertMode=!0
var o=Z(t.getCursor())
if(o.line!==t.firstLine()||n.after){o.line=n.after?o.line:o.line-1,o.ch=te(t,o.line),t.setCursor(o)
var a=e.commands.newlineAndIndentContinueComment||e.commands.newlineAndIndent
a(t)}else t.replaceRange("\n",i(t.firstLine(),0)),t.setCursor(t.firstLine(),0)
this.enterInsertMode(t,{repeat:n.repeat},r)},paste:function(e,t,n){var r=Z(e.getCursor()),o=Et.registerController.getRegister(t.registerName),a=o.toString()
if(a){if(t.matchIndent){var s=e.getOption("tabSize"),l=function(e){var t=e.split("\t").length-1,n=e.split(" ").length-1
return t*s+1*n},c=e.getLine(e.getCursor().line),u=l(c.match(/^\s*/)[0]),d=a.replace(/\n$/,""),f=a!==d,p=l(a.match(/^\s*/)[0]),a=d.replace(/^\s*/gm,function(t){var n=u+(l(t)-p)
if(n<0)return""
if(e.getOption("indentWithTabs")){var r=Math.floor(n/s)
return Array(r+1).join("\t")}return Array(n+1).join(" ")})
a+=f?"\n":""}if(t.repeat>1)var a=Array(t.repeat+1).join(a)
var h=o.linewise,m=o.blockwise
if(h)n.visualMode?a=n.visualLine?a.slice(0,-1):"\n"+a.slice(0,a.length-1)+"\n":t.after?(a="\n"+a.slice(0,a.length-1),r.ch=te(e,r.line)):r.ch=0
else{if(m){a=a.split("\n")
for(var g=0;g<a.length;g++)a[g]=""==a[g]?" ":a[g]}r.ch+=t.after?1:0}var v,y
if(n.visualMode){n.lastPastedText=a
var b,k=le(e,n),x=k[0],w=k[1],_=e.getSelection(),C=e.listSelections(),S=new Array(C.length).join("1").split("1")
n.lastSelection&&(b=n.lastSelection.headMark.find()),Et.registerController.unnamedRegister.setText(_),m?(e.replaceSelections(S),w=i(x.line+a.length-1,x.ch),e.setCursor(x),oe(e,w),e.replaceSelections(a),v=x):n.visualBlock?(e.replaceSelections(S),e.setCursor(x),e.replaceRange(a,x,x),v=x):(e.replaceRange(a,x,w),v=e.posFromIndex(e.indexFromPos(x)+a.length-1)),b&&(n.lastSelection.headMark=e.setBookmark(b)),h&&(v.ch=0)}else if(m){e.setCursor(r)
for(var g=0;g<a.length;g++){var M=r.line+g
M>e.lastLine()&&e.replaceRange("\n",i(M,0))
var L=te(e,M)
L<r.ch&&ie(e,M,r.ch)}e.setCursor(r),oe(e,i(r.line+a.length-1,r.ch)),e.replaceSelections(a),v=r}else e.replaceRange(a,r),h&&t.after?v=i(r.line+1,ve(e.getLine(r.line+1))):h&&!t.after?v=i(r.line,ve(e.getLine(r.line))):!h&&t.after?(y=e.indexFromPos(r),v=e.posFromIndex(y+a.length-1)):(y=e.indexFromPos(r),v=e.posFromIndex(y+a.length))
n.visualMode&&he(e,!1),e.setCursor(v)}},undo:function(t,n){t.operation(function(){G(t,e.commands.undo,n.repeat)(),t.setCursor(t.getCursor("anchor"))})},redo:function(t,n){G(t,e.commands.redo,n.repeat)()},setRegister:function(e,t,n){n.inputState.registerName=t.selectedCharacter},setMark:function(e,t,n){var r=t.selectedCharacter
Me(e,n,r,e.getCursor())},replace:function(t,n,r){var o,a,s=n.selectedCharacter,l=t.getCursor(),c=t.listSelections()
if(r.visualMode)l=t.getCursor("start"),a=t.getCursor("end")
else{var u=t.getLine(l.line)
o=l.ch+n.repeat,o>u.length&&(o=u.length),a=i(l.line,o)}if("\n"==s)r.visualMode||t.replaceRange("",l,a),(e.commands.newlineAndIndentContinueComment||e.commands.newlineAndIndent)(t)
else{var d=t.getRange(l,a)
if(d=d.replace(/[^\n]/g,s),r.visualBlock){var f=new Array(t.getOption("tabSize")+1).join(" ")
d=t.getSelection(),d=d.replace(/\t/g,f).replace(/[^\n]/g,s).split("\n"),t.replaceSelections(d)}else t.replaceRange(d,l,a)
r.visualMode?(l=Q(c[0].anchor,c[0].head)?c[0].anchor:c[0].head,t.setCursor(l),he(t,!1)):t.setCursor(H(a,0,-1))}},incrementNumberToken:function(e,t){for(var n,r,o,a,s=e.getCursor(),l=e.getLine(s.line),c=/(-?)(?:(0x)([\da-f]+)|(0b|0|)(\d+))/gi;null!==(n=c.exec(l))&&(r=n.index,o=r+n[0].length,!(s.ch<o)););if((t.backtrack||!(o<=s.ch))&&n){var u=n[2]||n[4],d=n[3]||n[5],f=t.increase?1:-1,p={"0b":2,0:8,"":10,"0x":16}[u.toLowerCase()],h=parseInt(n[1]+d,p)+f*t.repeat
a=h.toString(p)
var m=u?new Array(d.length-a.length+1+n[1].length).join("0"):""
a="-"===a.charAt(0)?"-"+u+m+a.substr(1):u+m+a
var g=i(s.line,r),v=i(s.line,o)
e.replaceRange(a,g,v),e.setCursor(i(s.line,r+a.length-1))}},repeatLastEdit:function(e,t,n){var r=n.lastEditInputState
if(r){var i=t.repeat
i&&t.repeatIsExplicit?n.lastEditInputState.repeatOverride=i:i=n.lastEditInputState.repeatOverride||i,mt(e,n,i,!1)}},indent:function(e,t){e.indentLine(e.getCursor().line,t.indentRight)},exitInsertMode:nt},It={"(":"bracket",")":"bracket","{":"bracket","}":"bracket","[":"section","]":"section","*":"comment","/":"comment",m:"method",M:"method","#":"preprocess"},Pt={bracket:{isComplete:function(e){if(e.nextCh===e.symb){if(e.depth++,e.depth>=1)return!0}else e.nextCh===e.reverseSymb&&e.depth--
return!1}},section:{init:function(e){e.curMoveThrough=!0,e.symb=(e.forward?"]":"[")===e.symb?"{":"}"},isComplete:function(e){return 0===e.index&&e.nextCh===e.symb}},comment:{isComplete:function(e){var t="*"===e.lastCh&&"/"===e.nextCh
return e.lastCh=e.nextCh,t}},method:{init:function(e){e.symb="m"===e.symb?"{":"}",e.reverseSymb="{"===e.symb?"}":"{"},isComplete:function(e){return e.nextCh===e.symb}},preprocess:{init:function(e){e.index=0},isComplete:function(e){if("#"===e.nextCh){var t=e.lineText.match(/#(\w+)/)[1]
if("endif"===t){if(e.forward&&0===e.depth)return!0
e.depth++}else if("if"===t){if(!e.forward&&0===e.depth)return!0
e.depth--}if("else"===t&&0===e.depth)return!0}return!1}}}
S("pcre",!0,"boolean"),ze.prototype={getQuery:function(){return Et.query},setQuery:function(e){Et.query=e},getOverlay:function(){return this.searchOverlay},setOverlay:function(e){this.searchOverlay=e},isReversed:function(){return Et.isReversed},setReversed:function(e){Et.isReversed=e},getScrollbarAnnotate:function(){return this.annotate},setScrollbarAnnotate:function(e){this.annotate=e}}
var Rt={"\\n":"\n","\\r":"\r","\\t":"\t"},jt={"\\/":"/","\\\\":"\\","\\n":"\n","\\r":"\r","\\t":"\t"},Bt="(Javascript regexp)",Wt=function(){this.buildCommandMap_()}
Wt.prototype={processCommand:function(e,t,n){var r=this
e.operation(function(){e.curOp.isVimOp=!0,r._processCommand(e,t,n)})},_processCommand:function(t,n,r){var i=t.state.vim,o=Et.registerController.getRegister(":"),a=o.toString()
i.visualMode&&he(t)
var s=new e.StringStream(n)
o.setText(n)
var l=r||{}
l.input=n
try{this.parseInput_(t,s,l)}catch(c){throw He(t,c),c}var u,d
if(l.commandName){if(u=this.matchCommand_(l.commandName)){if(d=u.name,u.excludeFromCommandHistory&&o.setText(a),this.parseCommandArgs_(s,l,u),"exToKey"==u.type){for(var f=0;f<u.toKeys.length;f++)e.Vim.handleKey(t,u.toKeys[f],"mapping")
return}if("exToEx"==u.type)return void this.processCommand(t,u.toInput)}}else void 0!==l.line&&(d="move")
if(!d)return void He(t,'Not an editor command ":'+n+'"')
try{Ht[d](t,l),u&&u.possiblyAsync||!l.callback||l.callback()}catch(c){throw He(t,c),c}},parseInput_:function(e,t,n){t.eatWhile(":"),t.eat("%")?(n.line=e.firstLine(),n.lineEnd=e.lastLine()):(n.line=this.parseLineSpec_(e,t),void 0!==n.line&&t.eat(",")&&(n.lineEnd=this.parseLineSpec_(e,t)))
var r=t.match(/^(\w+)/)
return r?n.commandName=r[1]:n.commandName=t.match(/.*/)[0],n},parseLineSpec_:function(e,t){var n=t.match(/^(\d+)/)
if(n)return parseInt(n[1],10)-1
switch(t.next()){case".":return this.parseLineSpecOffset_(t,e.getCursor().line)
case"$":return this.parseLineSpecOffset_(t,e.lastLine())
case"'":var r=t.next(),i=et(e,e.state.vim,r)
if(!i)throw new Error("Mark not set")
return this.parseLineSpecOffset_(t,i.line)
case"-":case"+":return t.backUp(1),this.parseLineSpecOffset_(t,e.getCursor().line)
default:return void t.backUp(1)}},parseLineSpecOffset_:function(e,t){var n=e.match(/^([+-])?(\d+)/)
if(n){var r=parseInt(n[2],10)
"-"==n[1]?t-=r:t+=r}return t},parseCommandArgs_:function(e,t,n){if(!e.eol()){t.argString=e.match(/.*/)[0]
var r=n.argDelimiter||/\s+/,i=ne(t.argString).split(r)
i.length&&i[0]&&(t.args=i)}},matchCommand_:function(e){for(var t=e.length;t>0;t--){var n=e.substring(0,t)
if(this.commandMap_[n]){var r=this.commandMap_[n]
if(0===r.name.indexOf(e))return r}}return null},buildCommandMap_:function(){this.commandMap_={}
for(var e=0;e<r.length;e++){var t=r[e],n=t.shortName||t.name
this.commandMap_[n]=t}},map:function(e,n,r){if(":"!=e&&":"==e.charAt(0)){if(r)throw Error("Mode not supported for ex mappings")
var i=e.substring(1)
":"!=n&&":"==n.charAt(0)?this.commandMap_[i]={name:i,type:"exToEx",toInput:n.substring(1),user:!0}:this.commandMap_[i]={name:i,type:"exToKey",toKeys:n,user:!0}}else if(":"!=n&&":"==n.charAt(0)){var o={keys:e,type:"keyToEx",exArgs:{input:n.substring(1)}}
r&&(o.context=r),t.unshift(o)}else{var o={keys:e,type:"keyToKey",toKeys:n}
r&&(o.context=r),t.unshift(o)}},unmap:function(e,n){if(":"!=e&&":"==e.charAt(0)){if(n)throw Error("Mode not supported for ex mappings")
var r=e.substring(1)
if(this.commandMap_[r]&&this.commandMap_[r].user)return void delete this.commandMap_[r]}else for(var i=e,o=0;o<t.length;o++)if(i==t[o].keys&&t[o].context===n)return void t.splice(o,1)
throw Error("No such mapping.")}}
var Ht={colorscheme:function(e,t){return!t.args||t.args.length<1?void He(e,e.getOption("theme")):void e.setOption("theme",t.args[0])},map:function(e,t,n){var r=t.args
return!r||r.length<2?void(e&&He(e,"Invalid mapping: "+t.input)):void Ut.map(r[0],r[1],n)},imap:function(e,t){this.map(e,t,"insert")},nmap:function(e,t){this.map(e,t,"normal")},vmap:function(e,t){this.map(e,t,"visual")},unmap:function(e,t,n){var r=t.args
return!r||r.length<1?void(e&&He(e,"No such mapping: "+t.input)):void Ut.unmap(r[0],n)},move:function(e,t){Nt.processCommand(e,e.state.vim,{type:"motion",motion:"moveToLineOrEdgeOfDocument",motionArgs:{forward:!1,explicitRepeat:!0,linewise:!0},repeatOverride:t.line+1})},set:function(e,t){var n=t.args,r=t.setCfg||{}
if(!n||n.length<1)return void(e&&He(e,"Invalid mapping: "+t.input))
var i=n[0].split("="),o=i[0],a=i[1],s=!1
if("?"==o.charAt(o.length-1)){if(a)throw Error("Trailing characters: "+t.argString)
o=o.substring(0,o.length-1),s=!0}void 0===a&&"no"==o.substring(0,2)&&(o=o.substring(2),a=!1)
var l=Lt[o]&&"boolean"==Lt[o].type
if(l&&void 0==a&&(a=!0),!l&&void 0===a||s){var c=L(o,e,r)
c instanceof Error?He(e,c.message):c===!0||c===!1?He(e," "+(c?"":"no")+o):He(e,"  "+o+"="+c)}else{var u=M(o,a,e,r)
u instanceof Error&&He(e,u.message)}},setlocal:function(e,t){t.setCfg={scope:"local"},this.set(e,t)},setglobal:function(e,t){t.setCfg={scope:"global"},this.set(e,t)},registers:function(e,t){var n=t.args,r=Et.registerController.registers,i="----------Registers----------<br><br>"
if(n){var o
n=n.join("")
for(var a=0;a<n.length;a++)if(o=n.charAt(a),Et.registerController.isValidRegister(o)){var s=r[o]||new N
i+='"'+o+"    "+s.toString()+"<br>"}}else for(var o in r){var l=r[o].toString()
l.length&&(i+='"'+o+"    "+l+"<br>")}He(e,i)},sort:function(t,n){function r(){if(n.argString){var t=new e.StringStream(n.argString)
if(t.eat("!")&&(s=!0),t.eol())return
if(!t.eatSpace())return"Invalid arguments"
var r=t.match(/([dinuox]+)?\s*(\/.+\/)?\s*/)
if(!r&&!t.eol())return"Invalid arguments"
if(r[1]){l=r[1].indexOf("i")!=-1,c=r[1].indexOf("u")!=-1
var i=r[1].indexOf("d")!=-1||r[1].indexOf("n")!=-1&&1,o=r[1].indexOf("x")!=-1&&1,a=r[1].indexOf("o")!=-1&&1
if(i+o+a>1)return"Invalid arguments"
u=i&&"decimal"||o&&"hex"||a&&"octal"}r[2]&&(d=new RegExp(r[2].substr(1,r[2].length-2),l?"i":""))}}function o(e,t){if(s){var n
n=e,e=t,t=n}l&&(e=e.toLowerCase(),t=t.toLowerCase())
var r=u&&y.exec(e),i=u&&y.exec(t)
return r?(r=parseInt((r[1]+r[2]).toLowerCase(),b),i=parseInt((i[1]+i[2]).toLowerCase(),b),r-i):e<t?-1:1}function a(e,t){if(s){var n
n=e,e=t,t=n}return l&&(e[0]=e[0].toLowerCase(),t[0]=t[0].toLowerCase()),e[0]<t[0]?-1:1}var s,l,c,u,d,f=r()
if(f)return void He(t,f+": "+n.argString)
var p=n.line||t.firstLine(),h=n.lineEnd||n.line||t.lastLine()
if(p!=h){var m=i(p,0),g=i(h,te(t,h)),v=t.getRange(m,g).split("\n"),y=d?d:"decimal"==u?/(-?)([\d]+)/:"hex"==u?/(-?)(?:0x)?([0-9a-f]+)/i:"octal"==u?/([0-7]+)/:null,b="decimal"==u?10:"hex"==u?16:"octal"==u?8:null,k=[],x=[]
if(u||d)for(var w=0;w<v.length;w++){var _=d?v[w].match(d):null
_&&""!=_[0]?k.push(_):!d&&y.exec(v[w])?k.push(v[w]):x.push(v[w])}else x=v
if(k.sort(d?a:o),d)for(var w=0;w<k.length;w++)k[w]=k[w].input
else u||x.sort(o)
if(v=s?k.concat(x):x.concat(k),c){var C,S=v
v=[]
for(var w=0;w<S.length;w++)S[w]!=C&&v.push(S[w]),C=S[w]}t.replaceRange(v.join("\n"),m,g)}},global:function(e,t){var n=t.argString
if(!n)return void He(e,"Regular Expression missing from global")
var r,i=void 0!==t.line?t.line:e.firstLine(),o=t.lineEnd||t.line||e.lastLine(),a=Fe(n),s=n
if(a.length&&(s=a[0],r=a.slice(1,a.length).join("/")),s)try{Ve(e,s,!0,!0)}catch(l){return void He(e,"Invalid regex: "+s)}for(var c=Ne(e).getQuery(),u=[],d="",f=i;f<=o;f++){var p=c.test(e.getLine(f))
p&&(u.push(f+1),d+=e.getLine(f)+"<br>")}if(!r)return void He(e,d)
var h=0,m=function(){if(h<u.length){var t=u[h]+r
Ut.processCommand(e,t,{callback:m})}h++}
m()},substitute:function(e,t){if(!e.getSearchCursor)throw new Error("Search feature not available. Requires searchcursor.js or any other getSearchCursor implementation.")
var n,r,o,a,s=t.argString,l=s?Ie(s,s[0]):[],c="",u=!1,d=!1
if(l.length)n=l[0],c=l[1],n&&"$"===n[n.length-1]&&(n=n.slice(0,n.length-1)+"\\n",c=c?c+"\n":"\n"),void 0!==c&&(c=L("pcre")?Be(c):je(c),Et.lastSubstituteReplacePart=c),r=l[2]?l[2].split(" "):[]
else if(s&&s.length)return void He(e,"Substitutions should be of the form :s/pattern/replace/")
if(r&&(o=r[0],a=parseInt(r[1]),o&&(o.indexOf("c")!=-1&&(u=!0,o.replace("c","")),o.indexOf("g")!=-1&&(d=!0,o.replace("g","")),n=n.replace(/\//g,"\\/")+"/"+o)),n)try{Ve(e,n,!0,!0)}catch(f){return void He(e,"Invalid regex: "+n)}if(c=c||Et.lastSubstituteReplacePart,void 0===c)return void He(e,"No previous substitute regular expression")
var p=Ne(e),h=p.getQuery(),m=void 0!==t.line?t.line:e.getCursor().line,g=t.lineEnd||m
m==e.firstLine()&&g==e.lastLine()&&(g=1/0),a&&(m=g,g=m+a-1)
var v=B(e,i(m,0)),y=e.getSearchCursor(h,v)
tt(e,u,d,m,g,y,h,c,t.callback)},redo:e.commands.redo,undo:e.commands.undo,write:function(t){e.commands.save?e.commands.save(t):t.save&&t.save()},nohlsearch:function(e){Qe(e)},yank:function(e){var t=Z(e.getCursor()),n=t.line,r=e.getLine(n)
Et.registerController.pushText("0","yank",r,!0,!0)},delmarks:function(t,n){if(!n.argString||!ne(n.argString))return void He(t,"Argument required")
for(var r=t.state.vim,i=new e.StringStream(ne(n.argString));!i.eol();){i.eatSpace()
var o=i.pos
if(!i.match(/[a-zA-Z]/,!1))return void He(t,"Invalid argument: "+n.argString.substring(o))
var a=i.next()
if(i.match("-",!0)){if(!i.match(/[a-zA-Z]/,!1))return void He(t,"Invalid argument: "+n.argString.substring(o))
var s=a,l=i.next()
if(!(y(s)&&y(l)||x(s)&&x(l)))return void He(t,"Invalid argument: "+s+"-")
var c=s.charCodeAt(0),u=l.charCodeAt(0)
if(c>=u)return void He(t,"Invalid argument: "+n.argString.substring(o))
for(var d=0;d<=u-c;d++){var f=String.fromCharCode(c+d)
delete r.marks[f]}}else delete r.marks[a]}}},Ut=new Wt
return e.keyMap.vim={attach:l,detach:s,call:p},S("insertModeEscKeysTimeout",200,"number"),e.keyMap["vim-insert"]={fallthrough:["default"],attach:l,detach:s,call:p},e.keyMap["vim-replace"]={Backspace:"goCharLeft",fallthrough:["vim-insert"],attach:l,detach:s,call:p},E(),zt}
e.Vim=o()}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n,r,i,o){this.indented=e,this.column=t,this.type=n,this.info=r,this.align=i,this.prev=o}function n(e,n,r,i){var o=e.indented
return e.context&&"statement"==e.context.type&&"statement"!=r&&(o=e.context.indented),e.context=new t(o,n,r,i,null,e.context)}function r(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function i(e,t,n){return"variable"==t.prevToken||"type"==t.prevToken||(!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0,n))||(!(!t.typeAtEndOfLine||e.column()!=e.indentation())||void 0))}function o(e){for(;;){if(!e||"top"==e.type)return!0
if("}"==e.type&&"namespace"!=e.prev.info)return!1
e=e.prev}}function a(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}function s(e,t){return"function"==typeof e?e(t):e.propertyIsEnumerable(t)}function l(e){return s(C,e)||/.+_t$/.test(e)}function c(e){return l(e)||s(S,e)}function u(e,t){if(!t.startOfLine)return!1
for(var n,r=null;n=e.peek();){if("\\"==n&&e.match(/^.$/)){r=u
break}if("/"==n&&e.match(/^\/[\/\*]/,!1))break
e.next()}return t.tokenize=r,"meta"}function d(e,t){return"type"==t.prevToken&&"type"}function f(e){return!(!e||e.length<2)&&("_"==e[0]&&("_"==e[1]||e[1]!==e[1].toLowerCase()))}function p(e){return e.eatWhile(/[\w\.']/),"number"}function h(e,t){if(e.backUp(1),e.match(/(R|u8R|uR|UR|LR)/)){var n=e.match(/"([^\s\\()]{0,16})\(/)
return!!n&&(t.cpp11RawStringDelim=n[1],t.tokenize=v,v(e,t))}return e.match(/(u8|u|U|L)/)?!!e.match(/["']/,!1)&&"string":(e.next(),!1)}function m(e){var t=/(\w+)::~?(\w+)$/.exec(e)
return t&&t[1]==t[2]}function g(e,t){for(var n;null!=(n=e.next());)if('"'==n&&!e.eat('"')){t.tokenize=null
break}return"string"}function v(e,t){var n=t.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),r=e.match(new RegExp(".*?\\)"+n+'"'))
return r?t.tokenize=null:e.skipToEnd(),"string"}function y(t,n){function r(e){if(e)for(var t in e)e.hasOwnProperty(t)&&i.push(t)}"string"==typeof t&&(t=[t])
var i=[]
r(n.keywords),r(n.types),r(n.builtin),r(n.atoms),i.length&&(n.helperType=t[0],e.registerHelper("hintWords",t[0],i))
for(var o=0;o<t.length;++o)e.defineMIME(t[o],n)}function b(e,t){for(var n=!1;!e.eol();){if(!n&&e.match('"""')){t.tokenize=null
break}n="\\"==e.next()&&!n}return"string"}function k(e){return function(t,n){for(var r;r=t.next();){if("*"==r&&t.eat("/")){if(1==e){n.tokenize=null
break}return n.tokenize=k(e-1),n.tokenize(t,n)}if("/"==r&&t.eat("*"))return n.tokenize=k(e+1),n.tokenize(t,n)}return"comment"}}function x(e){return function(t,n){for(var r,i=!1,o=!1;!t.eol();){if(!e&&!i&&t.match('"')){o=!0
break}if(e&&t.match('"""')){o=!0
break}r=t.next(),!i&&"$"==r&&t.match("{")&&t.skipTo("}"),i=!i&&"\\"==r&&!e}return!o&&e||(n.tokenize=null),"string"}}function w(e){return function(t,n){for(var r,i=!1,o=!1;!t.eol();){if(!i&&t.match('"')&&("single"==e||t.match('""'))){o=!0
break}if(!i&&t.match("``")){T=w(e),o=!0
break}r=t.next(),i="single"==e&&!i&&"\\"==r}return o&&(n.tokenize=null),"string"}}e.defineMode("clike",function(a,l){function c(e,t){var n=e.next()
if(C[n]){var r=C[n](e,t)
if(r!==!1)return r}if('"'==n||"'"==n)return t.tokenize=u(n),t.tokenize(e,t)
if(A.test(n))return p=n,null
if(E.test(n)){if(e.backUp(1),e.match(O))return"number"
e.next()}if("/"==n){if(e.eat("*"))return t.tokenize=d,d(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"}if(z.test(n)){for(;!e.match(/^\/[\/*]/,!1)&&e.eat(z););return"operator"}if(e.eatWhile(N),T)for(;e.match(T);)e.eatWhile(N)
var i=e.current()
return s(y,i)?(s(x,i)&&(p="newstatement"),s(w,i)&&(h=!0),"keyword"):s(b,i)?"type":s(k,i)||q&&q(i)?(s(x,i)&&(p="newstatement"),"builtin"):s(_,i)?"atom":"variable"}function u(e){return function(t,n){for(var r,i=!1,o=!1;null!=(r=t.next());){if(r==e&&!i){o=!0
break}i=!i&&"\\"==r}return(o||!i&&!S)&&(n.tokenize=null),"string"}}function d(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null
break}r="*"==n}return"comment"}function f(e,t){l.typeFirstDefinitions&&e.eol()&&o(t.context)&&(t.typeAtEndOfLine=i(e,t,e.pos))}var p,h,m=a.indentUnit,g=l.statementIndentUnit||m,v=l.dontAlignCalls,y=l.keywords||{},b=l.types||{},k=l.builtin||{},x=l.blockKeywords||{},w=l.defKeywords||{},_=l.atoms||{},C=l.hooks||{},S=l.multiLineStrings,M=l.indentStatements!==!1,L=l.indentSwitch!==!1,T=l.namespaceSeparator,A=l.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,E=l.numberStart||/[\d\.]/,O=l.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,z=l.isOperatorChar||/[+\-*&%=<>!?|\/]/,N=l.isIdentifierChar||/[\w\$_\xa1-\uffff]/,q=l.isReservedIdentifier||!1
return{startState:function(e){return{tokenize:null,context:new t((e||0)-m,0,"top",null,(!1)),indented:0,startOfLine:!0,prevToken:null}},token:function(e,t){var a=t.context
if(e.sol()&&(null==a.align&&(a.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return f(e,t),null
p=h=null
var s=(t.tokenize||c)(e,t)
if("comment"==s||"meta"==s)return s
if(null==a.align&&(a.align=!0),";"==p||":"==p||","==p&&e.match(/^\s*(?:\/\/.*)?$/,!1))for(;"statement"==t.context.type;)r(t)
else if("{"==p)n(t,e.column(),"}")
else if("["==p)n(t,e.column(),"]")
else if("("==p)n(t,e.column(),")")
else if("}"==p){for(;"statement"==a.type;)a=r(t)
for("}"==a.type&&(a=r(t));"statement"==a.type;)a=r(t)}else p==a.type?r(t):M&&(("}"==a.type||"top"==a.type)&&";"!=p||"statement"==a.type&&"newstatement"==p)&&n(t,e.column(),"statement",e.current())
if("variable"==s&&("def"==t.prevToken||l.typeFirstDefinitions&&i(e,t,e.start)&&o(t.context)&&e.match(/^\s*\(/,!1))&&(s="def"),C.token){var u=C.token(e,t,s)
void 0!==u&&(s=u)}return"def"==s&&l.styleDefs===!1&&(s="variable"),t.startOfLine=!1,t.prevToken=h?"def":s||p,f(e,t),s},indent:function(t,n){if(t.tokenize!=c&&null!=t.tokenize||t.typeAtEndOfLine)return e.Pass
var r=t.context,i=n&&n.charAt(0),o=i==r.type
if("statement"==r.type&&"}"==i&&(r=r.prev),l.dontIndentStatements)for(;"statement"==r.type&&l.dontIndentStatements.test(r.info);)r=r.prev
if(C.indent){var a=C.indent(t,r,n,m)
if("number"==typeof a)return a}var s=r.prev&&"switch"==r.prev.info
if(l.allmanIndentation&&/[{(]/.test(i)){for(;"top"!=r.type&&"}"!=r.type;)r=r.prev
return r.indented}return"statement"==r.type?r.indented+("{"==i?0:g):!r.align||v&&")"==r.type?")"!=r.type||o?r.indented+(o?0:m)+(o||!s||/^(?:case|default)\b/.test(n)?0:m):r.indented+g:r.column+(o?0:1)},electricInput:L?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}})
var _="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",C=a("int long char short double float unsigned signed void bool"),S=a("SEL instancetype id Class Protocol BOOL"),M="case do else for if switch while struct enum union",L="struct enum union"
y(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:a(_),types:l,blockKeywords:a(M),defKeywords:a(L),typeFirstDefinitions:!0,atoms:a("NULL true false"),isReservedIdentifier:f,hooks:{"#":u,"*":d},modeProps:{fold:["brace","include"]}}),y(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:a(_+"alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq"),types:l,blockKeywords:a(M+" class try catch"),defKeywords:a(L+" class namespace"),typeFirstDefinitions:!0,atoms:a("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:f,hooks:{"#":u,"*":d,u:h,U:h,L:h,R:h,0:p,1:p,2:p,3:p,4:p,5:p,6:p,7:p,8:p,9:p,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&m(e.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),y("text/x-java",{name:"clike",keywords:a("abstract assert break case catch class const continue default do else enum extends final finally float for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:a("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:a("catch class do else finally for if switch try while"),defKeywords:a("class interface enum @interface"),typeFirstDefinitions:!0,atoms:a("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(e){return!e.match("interface",!1)&&(e.eatWhile(/[\w\$_]/),"meta")}},modeProps:{fold:["brace","import"]}}),y("text/x-csharp",{name:"clike",keywords:a("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:a("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:a("catch class do else finally for foreach if struct switch try while"),defKeywords:a("class interface namespace struct var"),typeFirstDefinitions:!0,atoms:a("true false null"),hooks:{"@":function(e,t){return e.eat('"')?(t.tokenize=g,g(e,t)):(e.eatWhile(/[\w\$_]/),"meta")}}}),y("text/x-scala",{name:"clike",keywords:a("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:a("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:a("catch class enum do else finally for forSome if match switch try while"),defKeywords:a("class enum def object package trait type val var"),atoms:a("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return!!e.match('""')&&(t.tokenize=b,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},"=":function(e,n){var r=n.context
return!("}"!=r.type||!r.align||!e.eat(">"))&&(n.context=new t(r.indented,r.column,r.type,r.info,null,r.prev),"operator")},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=k(1),t.tokenize(e,t))}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}}),y("text/x-kotlin",{name:"clike",keywords:a("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),types:a("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),intendSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,blockKeywords:a("catch class do else finally for if where try while enum"),defKeywords:a("class val var object interface fun"),atoms:a("true false null this"),hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},"*":function(e,t){return"."==t.prevToken?"variable":"operator"},'"':function(e,t){return t.tokenize=x(e.match('""')),t.tokenize(e,t)},indent:function(e,t,n,r){var i=n&&n.charAt(0)
return"}"!=e.prevToken&&")"!=e.prevToken||""!=n?"operator"==e.prevToken&&"}"!=n||"variable"==e.prevToken&&"."==i||("}"==e.prevToken||")"==e.prevToken)&&"."==i?2*r+t.indented:t.align&&"}"==t.type?t.indented+(e.context.type==(n||"").charAt(0)?0:r):void 0:e.indented}},modeProps:{closeBrackets:{triples:'"'}}}),y(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:a("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:a("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:a("for while do if else struct"),builtin:a("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:a("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":u},modeProps:{fold:["brace","include"]}}),y("text/x-nesc",{name:"clike",keywords:a(_+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:l,blockKeywords:a(M),atoms:a("null true false"),hooks:{"#":u},modeProps:{fold:["brace","include"]}}),y("text/x-objectivec",{name:"clike",keywords:a(_+" bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available"),types:c,builtin:a("FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION NS_RETURNS_RETAINED NS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT"),blockKeywords:a(M+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:a(L+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:a("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:f,hooks:{"#":u,"*":d},modeProps:{fold:["brace","include"]}}),y("text/x-squirrel",{name:"clike",keywords:a("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:l,blockKeywords:a("case catch class else for foreach if switch try while"),defKeywords:a("function local class"),typeFirstDefinitions:!0,atoms:a("true false null"),hooks:{"#":u},modeProps:{fold:["brace","include"]}})
var T=null
y("text/x-ceylon",{name:"clike",keywords:a("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(e){var t=e.charAt(0)
return t===t.toUpperCase()&&t!==t.toLowerCase()},blockKeywords:a("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:a("class dynamic function interface module object package value"),builtin:a("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:a("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return t.tokenize=w(e.match('""')?"triple":"single"),t.tokenize(e,t)},"`":function(e,t){return!(!T||!e.match("`"))&&(t.tokenize=T,T=null,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(e,t,n){if(("variable"==n||"type"==n)&&"."==t.prevToken)return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("clojure",function(t){function n(e,t){if(e.eatSpace())return["space",null]
if(e.match(g))return[null,"number"]
if(e.match(v))return[null,"string-2"]
if(e.eat(/^"/))return(t.tokenize=r)(e,t)
if(e.eat(/^[(\[{]/))return["open","bracket"]
if(e.eat(/^[)\]}]/))return["close","bracket"]
if(e.eat(/^;/))return e.skipToEnd(),["space","comment"]
if(e.eat(/^[#'@^`~]/))return[null,"meta"]
var n=e.match(y),o=n&&n[0]
return o?"comment"===o&&"("===t.lastToken?(t.tokenize=i)(e,t):a(o,d)||":"===o.charAt(0)?["symbol","atom"]:a(o,f)||a(o,p)?["symbol","keyword"]:"("===t.lastToken?["symbol","builtin"]:["symbol","variable"]:(e.next(),e.eatWhile(function(e){return!a(e,m)}),[null,"error"])}function r(e,t){for(var r,i=!1;r=e.next();){if('"'===r&&!i){t.tokenize=n
break}i=!i&&"\\"===r}return[null,"string"]}function i(e,t){for(var r,i=1;r=e.next();)if(")"===r&&i--,"("===r&&i++,0===i){e.backUp(1),t.tokenize=n
break}return["space","comment"]}function o(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0
return t}function a(e,t){return t instanceof RegExp?t.test(e):t instanceof Object?t.propertyIsEnumerable(e):void 0}var s=["false","nil","true"],l=[".","catch","def","do","if","monitor-enter","monitor-exit","new","quote","recur","set!","throw","try","var"],c=["*","*'","*1","*2","*3","*agent*","*allow-unresolved-vars*","*assert*","*clojure-version*","*command-line-args*","*compile-files*","*compile-path*","*compiler-options*","*data-readers*","*default-data-reader-fn*","*e","*err*","*file*","*flush-on-newline*","*fn-loader*","*in*","*math-context*","*ns*","*out*","*print-dup*","*print-length*","*print-level*","*print-meta*","*print-namespace-maps*","*print-readably*","*read-eval*","*reader-resolver*","*source-path*","*suppress-read*","*unchecked-math*","*use-context-classloader*","*verbose-defrecords*","*warn-on-reflection*","+","+'","-","-'","->","->>","->ArrayChunk","->Eduction","->Vec","->VecNode","->VecSeq","-cache-protocol-fn","-reset-methods","..","/","<","<=","=","==",">",">=","EMPTY-NODE","Inst","StackTraceElement->vec","Throwable->map","accessor","aclone","add-classpath","add-watch","agent","agent-error","agent-errors","aget","alength","alias","all-ns","alter","alter-meta!","alter-var-root","amap","ancestors","and","any?","apply","areduce","array-map","as->","aset","aset-boolean","aset-byte","aset-char","aset-double","aset-float","aset-int","aset-long","aset-short","assert","assoc","assoc!","assoc-in","associative?","atom","await","await-for","await1","bases","bean","bigdec","bigint","biginteger","binding","bit-and","bit-and-not","bit-clear","bit-flip","bit-not","bit-or","bit-set","bit-shift-left","bit-shift-right","bit-test","bit-xor","boolean","boolean-array","boolean?","booleans","bound-fn","bound-fn*","bound?","bounded-count","butlast","byte","byte-array","bytes","bytes?","case","cast","cat","char","char-array","char-escape-string","char-name-string","char?","chars","chunk","chunk-append","chunk-buffer","chunk-cons","chunk-first","chunk-next","chunk-rest","chunked-seq?","class","class?","clear-agent-errors","clojure-version","coll?","comment","commute","comp","comparator","compare","compare-and-set!","compile","complement","completing","concat","cond","cond->","cond->>","condp","conj","conj!","cons","constantly","construct-proxy","contains?","count","counted?","create-ns","create-struct","cycle","dec","dec'","decimal?","declare","dedupe","default-data-readers","definline","definterface","defmacro","defmethod","defmulti","defn","defn-","defonce","defprotocol","defrecord","defstruct","deftype","delay","delay?","deliver","denominator","deref","derive","descendants","destructure","disj","disj!","dissoc","dissoc!","distinct","distinct?","doall","dorun","doseq","dosync","dotimes","doto","double","double-array","double?","doubles","drop","drop-last","drop-while","eduction","empty","empty?","ensure","ensure-reduced","enumeration-seq","error-handler","error-mode","eval","even?","every-pred","every?","ex-data","ex-info","extend","extend-protocol","extend-type","extenders","extends?","false?","ffirst","file-seq","filter","filterv","find","find-keyword","find-ns","find-protocol-impl","find-protocol-method","find-var","first","flatten","float","float-array","float?","floats","flush","fn","fn?","fnext","fnil","for","force","format","frequencies","future","future-call","future-cancel","future-cancelled?","future-done?","future?","gen-class","gen-interface","gensym","get","get-in","get-method","get-proxy-class","get-thread-bindings","get-validator","group-by","halt-when","hash","hash-combine","hash-map","hash-ordered-coll","hash-set","hash-unordered-coll","ident?","identical?","identity","if-let","if-not","if-some","ifn?","import","in-ns","inc","inc'","indexed?","init-proxy","inst-ms","inst-ms*","inst?","instance?","int","int-array","int?","integer?","interleave","intern","interpose","into","into-array","ints","io!","isa?","iterate","iterator-seq","juxt","keep","keep-indexed","key","keys","keyword","keyword?","last","lazy-cat","lazy-seq","let","letfn","line-seq","list","list*","list?","load","load-file","load-reader","load-string","loaded-libs","locking","long","long-array","longs","loop","macroexpand","macroexpand-1","make-array","make-hierarchy","map","map-entry?","map-indexed","map?","mapcat","mapv","max","max-key","memfn","memoize","merge","merge-with","meta","method-sig","methods","min","min-key","mix-collection-hash","mod","munge","name","namespace","namespace-munge","nat-int?","neg-int?","neg?","newline","next","nfirst","nil?","nnext","not","not-any?","not-empty","not-every?","not=","ns","ns-aliases","ns-imports","ns-interns","ns-map","ns-name","ns-publics","ns-refers","ns-resolve","ns-unalias","ns-unmap","nth","nthnext","nthrest","num","number?","numerator","object-array","odd?","or","parents","partial","partition","partition-all","partition-by","pcalls","peek","persistent!","pmap","pop","pop!","pop-thread-bindings","pos-int?","pos?","pr","pr-str","prefer-method","prefers","primitives-classnames","print","print-ctor","print-dup","print-method","print-simple","print-str","printf","println","println-str","prn","prn-str","promise","proxy","proxy-call-with-super","proxy-mappings","proxy-name","proxy-super","push-thread-bindings","pvalues","qualified-ident?","qualified-keyword?","qualified-symbol?","quot","rand","rand-int","rand-nth","random-sample","range","ratio?","rational?","rationalize","re-find","re-groups","re-matcher","re-matches","re-pattern","re-seq","read","read-line","read-string","reader-conditional","reader-conditional?","realized?","record?","reduce","reduce-kv","reduced","reduced?","reductions","ref","ref-history-count","ref-max-history","ref-min-history","ref-set","refer","refer-clojure","reify","release-pending-sends","rem","remove","remove-all-methods","remove-method","remove-ns","remove-watch","repeat","repeatedly","replace","replicate","require","reset!","reset-meta!","reset-vals!","resolve","rest","restart-agent","resultset-seq","reverse","reversible?","rseq","rsubseq","run!","satisfies?","second","select-keys","send","send-off","send-via","seq","seq?","seqable?","seque","sequence","sequential?","set","set-agent-send-executor!","set-agent-send-off-executor!","set-error-handler!","set-error-mode!","set-validator!","set?","short","short-array","shorts","shuffle","shutdown-agents","simple-ident?","simple-keyword?","simple-symbol?","slurp","some","some->","some->>","some-fn","some?","sort","sort-by","sorted-map","sorted-map-by","sorted-set","sorted-set-by","sorted?","special-symbol?","spit","split-at","split-with","str","string?","struct","struct-map","subs","subseq","subvec","supers","swap!","swap-vals!","symbol","symbol?","sync","tagged-literal","tagged-literal?","take","take-last","take-nth","take-while","test","the-ns","thread-bound?","time","to-array","to-array-2d","trampoline","transduce","transient","tree-seq","true?","type","unchecked-add","unchecked-add-int","unchecked-byte","unchecked-char","unchecked-dec","unchecked-dec-int","unchecked-divide-int","unchecked-double","unchecked-float","unchecked-inc","unchecked-inc-int","unchecked-int","unchecked-long","unchecked-multiply","unchecked-multiply-int","unchecked-negate","unchecked-negate-int","unchecked-remainder-int","unchecked-short","unchecked-subtract","unchecked-subtract-int","underive","unquote","unquote-splicing","unreduced","unsigned-bit-shift-right","update","update-in","update-proxy","uri?","use","uuid?","val","vals","var-get","var-set","var?","vary-meta","vec","vector","vector-of","vector?","volatile!","volatile?","vreset!","vswap!","when","when-first","when-let","when-not","when-some","while","with-bindings","with-bindings*","with-in-str","with-loading-context","with-local-vars","with-meta","with-open","with-out-str","with-precision","with-redefs","with-redefs-fn","xml-seq","zero?","zipmap"],u=["->","->>","as->","binding","bound-fn","case","catch","comment","cond","cond->","cond->>","condp","def","definterface","defmethod","defn","defmacro","defprotocol","defrecord","defstruct","deftype","do","doseq","dotimes","doto","extend","extend-protocol","extend-type","fn","for","future","if","if-let","if-not","if-some","let","letfn","locking","loop","ns","proxy","reify","struct-map","some->","some->>","try","when","when-first","when-let","when-not","when-some","while","with-bindings","with-bindings*","with-in-str","with-loading-context","with-local-vars","with-meta","with-open","with-out-str","with-precision","with-redefs","with-redefs-fn"]
e.registerHelper("hintWords","clojure",[].concat(s,l,c))
var d=o(s),f=o(l),p=o(c),h=o(u),m=/^(?:[\\\[\]\s"(),;@^`{}~]|$)/,g=/^(?:[+\-]?\d+(?:(?:N|(?:[eE][+\-]?\d+))|(?:\.?\d*(?:M|(?:[eE][+\-]?\d+))?)|\/\d+|[xX][0-9a-fA-F]+|r[0-9a-zA-Z]+)?(?=[\\\[\]\s"#'(),;@^`{}~]|$))/,v=/^(?:\\(?:backspace|formfeed|newline|return|space|tab|o[0-7]{3}|u[0-9A-Fa-f]{4}|x[0-9A-Fa-f]{4}|.)?(?=[\\\[\]\s"(),;@^`{}~]|$))/,y=/^(?:(?:[^\\\/\[\]\d\s"#'(),;@^`{}~][^\\\[\]\s"(),;@^`{}~]*(?:\.[^\\\/\[\]\d\s"#'(),;@^`{}~][^\\\[\]\s"(),;@^`{}~]*)*\/)?(?:\/|[^\\\/\[\]\d\s"#'(),;@^`{}~][^\\\[\]\s"(),;@^`{}~]*)*(?=[\\\[\]\s"(),;@^`{}~]|$))/
return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastToken:null,tokenize:n}},token:function(e,n){e.sol()&&"number"!=typeof n.ctx.indentTo&&(n.ctx.indentTo=n.ctx.start+1)
var r=n.tokenize(e,n),i=r[0],o=r[1],s=e.current()
return"space"!==i&&("("===n.lastToken&&null===n.ctx.indentTo?"symbol"===i&&a(s,h)?n.ctx.indentTo=n.ctx.start+t.indentUnit:n.ctx.indentTo="next":"next"===n.ctx.indentTo&&(n.ctx.indentTo=e.column()),n.lastToken=s),"open"===i?n.ctx={prev:n.ctx,start:e.column(),indentTo:null}:"close"===i&&(n.ctx=n.ctx.prev||n.ctx),o},indent:function(e){var t=e.ctx.indentTo
return"number"==typeof t?t:e.ctx.start+1},closeBrackets:{pairs:'()[]{}""'},lineComment:";;"}}),e.defineMIME("text/x-clojure","clojure"),e.defineMIME("text/x-clojurescript","clojure"),e.defineMIME("application/edn","clojure")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("coffeescript",function(e,t){function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function r(e,t){if(e.sol()){null===t.scope.align&&(t.scope.align=!1)
var n=t.scope.offset
if(e.eatSpace()){var r=e.indentation()
return r>n&&"coffee"==t.scope.type?"indent":r<n?"dedent":null}n>0&&s(e,t)}if(e.eatSpace())return null
var a=e.peek()
if(e.match("####"))return e.skipToEnd(),"comment"
if(e.match("###"))return t.tokenize=o,t.tokenize(e,t)
if("#"===a)return e.skipToEnd(),"comment"
if(e.match(/^-?[0-9\.]/,!1)){var l=!1
if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(l=!0),e.match(/^-?\d+\.\d*/)&&(l=!0),e.match(/^-?\.\d+/)&&(l=!0),l)return"."==e.peek()&&e.backUp(1),"number"
var m=!1
if(e.match(/^-?0x[0-9a-f]+/i)&&(m=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(m=!0),e.match(/^-?0(?![\dx])/i)&&(m=!0),m)return"number"}if(e.match(y))return t.tokenize=i(e.current(),!1,"string"),t.tokenize(e,t)
if(e.match(b)){if("/"!=e.current()||e.match(/^.*\//,!1))return t.tokenize=i(e.current(),!0,"string-2"),t.tokenize(e,t)
e.backUp(1)}return e.match(u)||e.match(h)?"operator":e.match(d)?"punctuation":e.match(x)?"atom":e.match(p)||t.prop&&e.match(f)?"property":e.match(v)?"keyword":e.match(f)?"variable":(e.next(),c)}function i(e,n,i){return function(o,a){for(;!o.eol();)if(o.eatWhile(/[^'"\/\\]/),o.eat("\\")){if(o.next(),n&&o.eol())return i}else{if(o.match(e))return a.tokenize=r,i
o.eat(/['"\/]/)}return n&&(t.singleLineStringErrors?i=c:a.tokenize=r),i}}function o(e,t){for(;!e.eol();){if(e.eatWhile(/[^#]/),e.match("###")){t.tokenize=r
break}e.eatWhile("#")}return"comment"}function a(t,n,r){r=r||"coffee"
for(var i=0,o=!1,a=null,s=n.scope;s;s=s.prev)if("coffee"===s.type||"}"==s.type){i=s.offset+e.indentUnit
break}"coffee"!==r?(o=null,a=t.column()+t.current().length):n.scope.align&&(n.scope.align=!1),n.scope={offset:i,type:r,prev:n.scope,align:o,alignOffset:a}}function s(e,t){if(t.scope.prev){if("coffee"===t.scope.type){for(var n=e.indentation(),r=!1,i=t.scope;i;i=i.prev)if(n===i.offset){r=!0
break}if(!r)return!0
for(;t.scope.prev&&t.scope.offset!==n;)t.scope=t.scope.prev
return!1}return t.scope=t.scope.prev,!1}}function l(e,t){var n=t.tokenize(e,t),r=e.current()
"return"===r&&(t.dedent=!0),(("->"===r||"=>"===r)&&e.eol()||"indent"===n)&&a(e,t)
var i="[({".indexOf(r)
if(i!==-1&&a(e,t,"])}".slice(i,i+1)),m.exec(r)&&a(e,t),"then"==r&&s(e,t),"dedent"===n&&s(e,t))return c
if(i="])}".indexOf(r),i!==-1){for(;"coffee"==t.scope.type&&t.scope.prev;)t.scope=t.scope.prev
t.scope.type==r&&(t.scope=t.scope.prev)}return t.dedent&&e.eol()&&("coffee"==t.scope.type&&t.scope.prev&&(t.scope=t.scope.prev),t.dedent=!1),n}var c="error",u=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,d=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,f=/^[_A-Za-z$][_A-Za-z$0-9]*/,p=/^@[_A-Za-z$][_A-Za-z$0-9]*/,h=n(["and","or","not","is","isnt","in","instanceof","typeof"]),m=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],g=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"],v=n(m.concat(g))
m=n(m)
var y=/^('{3}|\"{3}|['\"])/,b=/^(\/{3}|\/)/,k=["Infinity","NaN","undefined","null","true","false","on","off","yes","no"],x=n(k),w={startState:function(e){return{tokenize:r,scope:{offset:e||0,type:"coffee",prev:null,align:!1},prop:!1,dedent:0}},token:function(e,t){var n=null===t.scope.align&&t.scope
n&&e.sol()&&(n.align=!1)
var r=l(e,t)
return r&&"comment"!=r&&(n&&(n.align=!0),t.prop="punctuation"==r&&"."==e.current()),r},indent:function(e,t){if(e.tokenize!=r)return 0
var n=e.scope,i=t&&"])}".indexOf(t.charAt(0))>-1
if(i)for(;"coffee"==n.type&&n.prev;)n=n.prev
var o=i&&n.type===t.charAt(0)
return n.align?n.alignOffset-(o?1:0):(o?n.prev:n).offset},lineComment:"#",fold:"indent"}
return w}),e.defineMIME("application/vnd.coffeescript","coffeescript"),e.defineMIME("text/x-coffeescript","coffeescript"),e.defineMIME("text/coffeescript","coffeescript")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},n=0;n<e.length;++n)t[e[n].toLowerCase()]=!0
return t}function n(e,t){for(var n,r=!1;null!=(n=e.next());){if(r&&"/"==n){t.tokenize=null
break}r="*"==n}return["comment","comment"]}e.defineMode("css",function(t,n){function r(e,t){return h=t,e}function i(e,t){var n=e.next()
if(v[n]){var i=v[n](e,t)
if(i!==!1)return i}return"@"==n?(e.eatWhile(/[\w\\\-]/),r("def",e.current())):"="==n||("~"==n||"|"==n)&&e.eat("=")?r(null,"compare"):'"'==n||"'"==n?(t.tokenize=o(n),t.tokenize(e,t)):"#"==n?(e.eatWhile(/[\w\\\-]/),r("atom","hash")):"!"==n?(e.match(/^\s*\w*/),r("keyword","important")):/\d/.test(n)||"."==n&&e.eat(/\d/)?(e.eatWhile(/[\w.%]/),r("number","unit")):"-"!==n?/[,+>*\/]/.test(n)?r(null,"select-op"):"."==n&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?r("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(n)?r(null,n):e.match(/[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/.test(e.current().toLowerCase())&&(t.tokenize=a),r("variable callee","variable")):/[\w\\\-]/.test(n)?(e.eatWhile(/[\w\\\-]/),r("property","word")):r(null,null):/[\d.]/.test(e.peek())?(e.eatWhile(/[\w.%]/),r("number","unit")):e.match(/^-[\w\\\-]*/)?(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?r("variable-2","variable-definition"):r("variable-2","variable")):e.match(/^\w+-/)?r("meta","meta"):void 0}function o(e){return function(t,n){for(var i,o=!1;null!=(i=t.next());){if(i==e&&!o){")"==e&&t.backUp(1)
break}o=!o&&"\\"==i}return(i==e||!o&&")"!=e)&&(n.tokenize=null),r("string","string")}}function a(e,t){return e.next(),e.match(/\s*[\"\')]/,!1)?t.tokenize=null:t.tokenize=o(")"),r(null,"(")}function s(e,t,n){this.type=e,this.indent=t,this.prev=n}function l(e,t,n,r){return e.context=new s(n,t.indentation()+(r===!1?0:g),e.context),n}function c(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function u(e,t,n){return O[n.context.type](e,t,n)}function d(e,t,n,r){for(var i=r||1;i>0;i--)n.context=n.context.prev
return u(e,t,n)}function f(e){var t=e.current().toLowerCase()
m=L.hasOwnProperty(t)?"atom":M.hasOwnProperty(t)?"keyword":"variable"}var p=n.inline
n.propertyKeywords||(n=e.resolveMode("text/css"))
var h,m,g=t.indentUnit,v=n.tokenHooks,y=n.documentTypes||{},b=n.mediaTypes||{},k=n.mediaFeatures||{},x=n.mediaValueKeywords||{},w=n.propertyKeywords||{},_=n.nonStandardPropertyKeywords||{},C=n.fontProperties||{},S=n.counterDescriptors||{},M=n.colorKeywords||{},L=n.valueKeywords||{},T=n.allowNested,A=n.lineComment,E=n.supportsAtComponent===!0,O={}
return O.top=function(e,t,n){if("{"==e)return l(n,t,"block")
if("}"==e&&n.context.prev)return c(n)
if(E&&/@component/i.test(e))return l(n,t,"atComponentBlock")
if(/^@(-moz-)?document$/i.test(e))return l(n,t,"documentTypes")
if(/^@(media|supports|(-moz-)?document|import)$/i.test(e))return l(n,t,"atBlock")
if(/^@(font-face|counter-style)/i.test(e))return n.stateArg=e,"restricted_atBlock_before"
if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))return"keyframes"
if(e&&"@"==e.charAt(0))return l(n,t,"at")
if("hash"==e)m="builtin"
else if("word"==e)m="tag"
else{if("variable-definition"==e)return"maybeprop"
if("interpolation"==e)return l(n,t,"interpolation")
if(":"==e)return"pseudo"
if(T&&"("==e)return l(n,t,"parens")}return n.context.type},O.block=function(e,t,n){if("word"==e){var r=t.current().toLowerCase()
return w.hasOwnProperty(r)?(m="property","maybeprop"):_.hasOwnProperty(r)?(m="string-2","maybeprop"):T?(m=t.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(m+=" error","maybeprop")}return"meta"==e?"block":T||"hash"!=e&&"qualifier"!=e?O.top(e,t,n):(m="error","block")},O.maybeprop=function(e,t,n){return":"==e?l(n,t,"prop"):u(e,t,n)},O.prop=function(e,t,n){if(";"==e)return c(n)
if("{"==e&&T)return l(n,t,"propBlock")
if("}"==e||"{"==e)return d(e,t,n)
if("("==e)return l(n,t,"parens")
if("hash"!=e||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())){if("word"==e)f(t)
else if("interpolation"==e)return l(n,t,"interpolation")}else m+=" error"
return"prop"},O.propBlock=function(e,t,n){return"}"==e?c(n):"word"==e?(m="property","maybeprop"):n.context.type},O.parens=function(e,t,n){return"{"==e||"}"==e?d(e,t,n):")"==e?c(n):"("==e?l(n,t,"parens"):"interpolation"==e?l(n,t,"interpolation"):("word"==e&&f(t),"parens")},O.pseudo=function(e,t,n){return"meta"==e?"pseudo":"word"==e?(m="variable-3",n.context.type):u(e,t,n)},O.documentTypes=function(e,t,n){return"word"==e&&y.hasOwnProperty(t.current())?(m="tag",n.context.type):O.atBlock(e,t,n)},O.atBlock=function(e,t,n){if("("==e)return l(n,t,"atBlock_parens")
if("}"==e||";"==e)return d(e,t,n)
if("{"==e)return c(n)&&l(n,t,T?"block":"top")
if("interpolation"==e)return l(n,t,"interpolation")
if("word"==e){var r=t.current().toLowerCase()
m="only"==r||"not"==r||"and"==r||"or"==r?"keyword":b.hasOwnProperty(r)?"attribute":k.hasOwnProperty(r)?"property":x.hasOwnProperty(r)?"keyword":w.hasOwnProperty(r)?"property":_.hasOwnProperty(r)?"string-2":L.hasOwnProperty(r)?"atom":M.hasOwnProperty(r)?"keyword":"error"}return n.context.type},O.atComponentBlock=function(e,t,n){return"}"==e?d(e,t,n):"{"==e?c(n)&&l(n,t,T?"block":"top",!1):("word"==e&&(m="error"),n.context.type)},O.atBlock_parens=function(e,t,n){return")"==e?c(n):"{"==e||"}"==e?d(e,t,n,2):O.atBlock(e,t,n)},O.restricted_atBlock_before=function(e,t,n){return"{"==e?l(n,t,"restricted_atBlock"):"word"==e&&"@counter-style"==n.stateArg?(m="variable","restricted_atBlock_before"):u(e,t,n)},O.restricted_atBlock=function(e,t,n){return"}"==e?(n.stateArg=null,c(n)):"word"==e?(m="@font-face"==n.stateArg&&!C.hasOwnProperty(t.current().toLowerCase())||"@counter-style"==n.stateArg&&!S.hasOwnProperty(t.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},O.keyframes=function(e,t,n){return"word"==e?(m="variable","keyframes"):"{"==e?l(n,t,"top"):u(e,t,n)},O.at=function(e,t,n){return";"==e?c(n):"{"==e||"}"==e?d(e,t,n):("word"==e?m="tag":"hash"==e&&(m="builtin"),"at")},O.interpolation=function(e,t,n){return"}"==e?c(n):"{"==e||";"==e?d(e,t,n):("word"==e?m="variable":"variable"!=e&&"("!=e&&")"!=e&&(m="error"),"interpolation")},{startState:function(e){return{tokenize:null,state:p?"block":"top",stateArg:null,context:new s(p?"block":"top",e||0,null)}},token:function(e,t){if(!t.tokenize&&e.eatSpace())return null
var n=(t.tokenize||i)(e,t)
return n&&"object"==typeof n&&(h=n[1],n=n[0]),m=n,"comment"!=h&&(t.state=O[t.state](h,e,t)),m},indent:function(e,t){var n=e.context,r=t&&t.charAt(0),i=n.indent
return"prop"!=n.type||"}"!=r&&")"!=r||(n=n.prev),n.prev&&("}"!=r||"block"!=n.type&&"top"!=n.type&&"interpolation"!=n.type&&"restricted_atBlock"!=n.type?(")"!=r||"parens"!=n.type&&"atBlock_parens"!=n.type)&&("{"!=r||"at"!=n.type&&"atBlock"!=n.type)||(i=Math.max(0,n.indent-g)):(n=n.prev,i=n.indent)),i},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:A,fold:"brace"}})
var r=["domain","regexp","url","url-prefix"],i=t(r),o=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],a=t(o),s=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],l=t(s),c=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],u=t(c),d=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],f=t(d),p=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],h=t(p),m=["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],g=t(m),v=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],y=t(v),b=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],k=t(b),x=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],w=t(x),_=r.concat(o).concat(s).concat(c).concat(d).concat(p).concat(b).concat(x)
e.registerHelper("hintWords","css",_),e.defineMIME("text/css",{documentTypes:i,mediaTypes:a,mediaFeatures:l,mediaValueKeywords:u,propertyKeywords:f,nonStandardPropertyKeywords:h,fontProperties:g,counterDescriptors:y,colorKeywords:k,valueKeywords:w,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=n,n(e,t))}},name:"css"}),e.defineMIME("text/x-scss",{mediaTypes:a,mediaFeatures:l,mediaValueKeywords:u,propertyKeywords:f,nonStandardPropertyKeywords:h,colorKeywords:k,valueKeywords:w,fontProperties:g,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=n,n(e,t)):["operator","operator"]},":":function(e){return!!e.match(/\s*\{/,!1)&&[null,null]},$:function(e){return e.match(/^[\w-]+/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(e){return!!e.eat("{")&&[null,"interpolation"]}},name:"css",helperType:"scss"}),e.defineMIME("text/x-less",{mediaTypes:a,mediaFeatures:l,mediaValueKeywords:u,propertyKeywords:f,nonStandardPropertyKeywords:h,colorKeywords:k,valueKeywords:w,fontProperties:g,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=n,n(e,t)):["operator","operator"]},"@":function(e){return e.eat("{")?[null,"interpolation"]:!e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)&&(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),e.defineMIME("text/x-gss",{documentTypes:i,mediaTypes:a,mediaFeatures:l,propertyKeywords:f,nonStandardPropertyKeywords:h,fontProperties:g,counterDescriptors:y,colorKeywords:k,valueKeywords:w,supportsAtComponent:!0,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=n,n(e,t))}},name:"css",helperType:"gss"})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMIME("text/x-erlang","erlang"),e.defineMode("erlang",function(t){function n(e,t){if(t.in_string)return t.in_string=!o(e),u(t,e,"string")
if(t.in_atom)return t.in_atom=!a(e),u(t,e,"atom")
if(e.eatSpace())return u(t,e,"whitespace")
if(!h(t)&&e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))return c(e.current(),M)?u(t,e,"type"):u(t,e,"attribute")
var n=e.next()
if("%"==n)return e.skipToEnd(),u(t,e,"comment")
if(":"==n)return u(t,e,"colon")
if("?"==n)return e.eatSpace(),e.eatWhile(R),u(t,e,"macro")
if("#"==n)return e.eatSpace(),e.eatWhile(R),u(t,e,"record")
if("$"==n)return"\\"!=e.next()||e.match(j)?u(t,e,"number"):u(t,e,"error")
if("."==n)return u(t,e,"dot")
if("'"==n){if(!(t.in_atom=!a(e))){if(e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),u(t,e,"fun")
if(e.match(/\s*\(/,!1)||e.match(/\s*:/,!1))return u(t,e,"function")}return u(t,e,"atom")}if('"'==n)return t.in_string=!o(e),u(t,e,"string")
if(/[A-Z_Ø-ÞÀ-Ö]/.test(n))return e.eatWhile(R),u(t,e,"variable")
if(/[a-z_ß-öø-ÿ]/.test(n)){if(e.eatWhile(R),e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),u(t,e,"fun")
var s=e.current()
return c(s,L)?u(t,e,"keyword"):c(s,E)?u(t,e,"operator"):e.match(/\s*\(/,!1)?!c(s,P)||":"==h(t).token&&"erlang"!=h(t,2).token?c(s,I)?u(t,e,"guard"):u(t,e,"function"):u(t,e,"builtin"):":"==l(e)?"erlang"==s?u(t,e,"builtin"):u(t,e,"function"):c(s,["true","false"])?u(t,e,"boolean"):u(t,e,"atom")}var d=/[0-9]/,f=/[0-9a-zA-Z]/
return d.test(n)?(e.eatWhile(d),e.eat("#")?e.eatWhile(f)||e.backUp(1):e.eat(".")&&(e.eatWhile(d)?e.eat(/[eE]/)&&(e.eat(/[-+]/)?e.eatWhile(d)||e.backUp(2):e.eatWhile(d)||e.backUp(1)):e.backUp(1)),u(t,e,"number")):r(e,N,q)?u(t,e,"open_paren"):r(e,F,D)?u(t,e,"close_paren"):i(e,T,A)?u(t,e,"separator"):i(e,O,z)?u(t,e,"operator"):u(t,e,null)}function r(e,t,n){if(1==e.current().length&&t.test(e.current())){for(e.backUp(1);t.test(e.peek());)if(e.next(),c(e.current(),n))return!0
e.backUp(e.current().length-1)}return!1}function i(e,t,n){if(1==e.current().length&&t.test(e.current())){for(;t.test(e.peek());)e.next()
for(;0<e.current().length;){if(c(e.current(),n))return!0
e.backUp(1)}e.next()}return!1}function o(e){return s(e,'"',"\\")}function a(e){return s(e,"'","\\")}function s(e,t,n){for(;!e.eol();){var r=e.next()
if(r==t)return!0
r==n&&e.next()}return!1}function l(e){var t=e.match(/([\n\s]+|%[^\n]*\n)*(.)/,!1)
return t?t.pop():""}function c(e,t){return-1<t.indexOf(e)}function u(e,t,n){switch(m(e,f(n,t)),n){case"atom":return"atom"
case"attribute":return"attribute"
case"boolean":return"atom"
case"builtin":return"builtin"
case"close_paren":return null
case"colon":return null
case"comment":return"comment"
case"dot":return null
case"error":return"error"
case"fun":return"meta"
case"function":return"tag"
case"guard":return"property"
case"keyword":return"keyword"
case"macro":return"variable-2"
case"number":return"number"
case"open_paren":return null
case"operator":return"operator"
case"record":return"bracket"
case"separator":return null
case"string":return"string"
case"type":return"def"
case"variable":return"variable"
default:return null}}function d(e,t,n,r){return{token:e,column:t,indent:n,type:r}}function f(e,t){return d(t.current(),t.column(),t.indentation(),e)}function p(e){return d(e,0,0,e)}function h(e,t){var n=e.tokenStack.length,r=t?t:1
return!(n<r)&&e.tokenStack[n-r]}function m(e,t){"comment"!=t.type&&"whitespace"!=t.type&&(e.tokenStack=g(e.tokenStack,t),e.tokenStack=v(e.tokenStack))}function g(e,t){var n=e.length-1
return 0<n&&"record"===e[n].type&&"dot"===t.type?e.pop():0<n&&"group"===e[n].type?(e.pop(),e.push(t)):e.push(t),e}function v(e){if(!e.length)return e
var t=e.length-1
if("dot"===e[t].type)return[]
if(t>1&&"fun"===e[t].type&&"fun"===e[t-1].token)return e.slice(0,t-1)
switch(e[t].token){case"}":return y(e,{g:["{"]})
case"]":return y(e,{i:["["]})
case")":return y(e,{i:["("]})
case">>":return y(e,{i:["<<"]})
case"end":return y(e,{i:["begin","case","fun","if","receive","try"]})
case",":return y(e,{e:["begin","try","when","->",",","(","[","{","<<"]})
case"->":return y(e,{r:["when"],m:["try","if","case","receive"]})
case";":return y(e,{E:["case","fun","if","receive","try","when"]})
case"catch":return y(e,{e:["try"]})
case"of":return y(e,{e:["case"]})
case"after":return y(e,{e:["receive","try"]})
default:return e}}function y(e,t){for(var n in t)for(var r=e.length-1,i=t[n],o=r-1;-1<o;o--)if(c(e[o].token,i)){var a=e.slice(0,o)
switch(n){case"m":return a.concat(e[o]).concat(e[r])
case"r":return a.concat(e[r])
case"i":return a
case"g":return a.concat(p("group"))
case"E":return a.concat(e[o])
case"e":return a.concat(e[o])}}return"E"==n?[]:e}function b(n,r){var i,o=t.indentUnit,a=k(r),s=h(n,1),l=h(n,2)
return n.in_string||n.in_atom?e.Pass:l?"when"==s.token?s.column+o:"when"===a&&"function"===l.type?l.indent+o:"("===a&&"fun"===s.token?s.column+3:"catch"===a&&(i=_(n,["try"]))?i.column:c(a,["end","after","of"])?(i=_(n,["begin","case","fun","if","receive","try"]),i?i.column:e.Pass):c(a,D)?(i=_(n,q),i?i.column:e.Pass):c(s.token,[",","|","||"])||c(a,[",","|","||"])?(i=x(n),i?i.column+i.token.length:o):"->"==s.token?c(l.token,["receive","case","if","try"])?l.column+o+o:l.column+o:c(s.token,q)?s.column+s.token.length:(i=w(n),S(i)?i.column+o:0):0}function k(e){var t=e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/)
return S(t)&&0===t.index?t[0]:""}function x(e){var t=e.tokenStack.slice(0,-1),n=C(t,"type",["open_paren"])
return!!S(t[n])&&t[n]}function w(e){var t=e.tokenStack,n=C(t,"type",["open_paren","separator","keyword"]),r=C(t,"type",["operator"])
return S(n)&&S(r)&&n<r?t[n+1]:!!S(n)&&t[n]}function _(e,t){var n=e.tokenStack,r=C(n,"token",t)
return!!S(n[r])&&n[r]}function C(e,t,n){for(var r=e.length-1;-1<r;r--)if(c(e[r][t],n))return r
return!1}function S(e){return e!==!1&&null!=e}var M=["-type","-spec","-export_type","-opaque"],L=["after","begin","catch","case","cond","end","fun","if","let","of","query","receive","try","when"],T=/[\->,;]/,A=["->",";",","],E=["and","andalso","band","bnot","bor","bsl","bsr","bxor","div","not","or","orelse","rem","xor"],O=/[\+\-\*\/<>=\|:!]/,z=["=","+","-","*","/",">",">=","<","=<","=:=","==","=/=","/=","||","<-","!"],N=/[<\(\[\{]/,q=["<<","(","[","{"],F=/[>\)\]\}]/,D=["}","]",")",">>"],I=["is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_record","is_reference","is_tuple","atom","binary","bitstring","boolean","function","integer","list","number","pid","port","record","reference","tuple"],P=["abs","adler32","adler32_combine","alive","apply","atom_to_binary","atom_to_list","binary_to_atom","binary_to_existing_atom","binary_to_list","binary_to_term","bit_size","bitstring_to_list","byte_size","check_process_code","contact_binary","crc32","crc32_combine","date","decode_packet","delete_module","disconnect_node","element","erase","exit","float","float_to_list","garbage_collect","get","get_keys","group_leader","halt","hd","integer_to_list","internal_bif","iolist_size","iolist_to_binary","is_alive","is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_process_alive","is_record","is_reference","is_tuple","length","link","list_to_atom","list_to_binary","list_to_bitstring","list_to_existing_atom","list_to_float","list_to_integer","list_to_pid","list_to_tuple","load_module","make_ref","module_loaded","monitor_node","node","node_link","node_unlink","nodes","notalive","now","open_port","pid_to_list","port_close","port_command","port_connect","port_control","pre_loaded","process_flag","process_info","processes","purge_module","put","register","registered","round","self","setelement","size","spawn","spawn_link","spawn_monitor","spawn_opt","split_binary","statistics","term_to_binary","time","throw","tl","trunc","tuple_size","tuple_to_list","unlink","unregister","whereis"],R=/[\w@Ø-ÞÀ-Öß-öø-ÿ]/,j=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/
return{startState:function(){return{tokenStack:[],in_string:!1,in_atom:!1}},token:function(e,t){return n(e,t)},indent:function(e,t){return b(e,t)},lineComment:"%"}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../markdown/markdown"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../markdown/markdown","../../addon/mode/overlay"],e):e(CodeMirror)}(function(e){"use strict"
var t=/^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i
e.defineMode("gfm",function(n,r){function i(e){return e.code=!1,null}var o=0,a={startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(e){return{code:e.code,codeBlock:e.codeBlock,ateSpace:e.ateSpace}},token:function(e,n){if(n.combineTokens=null,n.codeBlock)return e.match(/^```+/)?(n.codeBlock=!1,null):(e.skipToEnd(),null)
if(e.sol()&&(n.code=!1),e.sol()&&e.match(/^```+/))return e.skipToEnd(),n.codeBlock=!0,null
if("`"===e.peek()){e.next()
var i=e.pos
e.eatWhile("`")
var a=1+e.pos-i
return n.code?a===o&&(n.code=!1):(o=a,n.code=!0),null}if(n.code)return e.next(),null
if(e.eatSpace())return n.ateSpace=!0,null
if((e.sol()||n.ateSpace)&&(n.ateSpace=!1,r.gitHubSpice!==!1)){if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/))return n.combineTokens=!0,"link"
if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))return n.combineTokens=!0,"link"}return e.match(t)&&"]("!=e.string.slice(e.start-2,e.start)&&(0==e.start||/\W/.test(e.string.charAt(e.start-1)))?(n.combineTokens=!0,"link"):(e.next(),null)},blankLine:i},s={taskLists:!0,strikethrough:!0,emoji:!0}
for(var l in r)s[l]=r[l]
return s.name="markdown",e.overlayMode(e.getMode(n,s),a)},"markdown"),e.defineMIME("text/x-gfm","gfm")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("go",function(t){function n(e,t){var n=e.next()
if('"'==n||"'"==n||"`"==n)return t.tokenize=r(n),t.tokenize(e,t)
if(/[\d\.]/.test(n))return"."==n?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==n?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number"
if(/[\[\]{}\(\),;\:\.]/.test(n))return l=n,null
if("/"==n){if(e.eat("*"))return t.tokenize=i,i(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"}if(f.test(n))return e.eatWhile(f),"operator"
e.eatWhile(/[\w\$_\xa1-\uffff]/)
var o=e.current()
return u.propertyIsEnumerable(o)?("case"!=o&&"default"!=o||(l="case"),"keyword"):d.propertyIsEnumerable(o)?"atom":"variable"}function r(e){return function(t,r){for(var i,o=!1,a=!1;null!=(i=t.next());){if(i==e&&!o){a=!0
break}o=!o&&"`"!=e&&"\\"==i}return(a||!o&&"`"!=e)&&(r.tokenize=n),"string"}}function i(e,t){for(var r,i=!1;r=e.next();){if("/"==r&&i){t.tokenize=n
break}i="*"==r}return"comment"}function o(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function a(e,t,n){return e.context=new o(e.indented,t,n,null,e.context)}function s(e){if(e.context.prev){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}}var l,c=t.indentUnit,u={"break":!0,"case":!0,chan:!0,"const":!0,"continue":!0,"default":!0,defer:!0,"else":!0,fallthrough:!0,"for":!0,func:!0,go:!0,"goto":!0,"if":!0,"import":!0,"interface":!0,map:!0,"package":!0,range:!0,"return":!0,select:!0,struct:!0,"switch":!0,type:!0,"var":!0,bool:!0,"byte":!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,"int":!0,uint:!0,uintptr:!0,error:!0,rune:!0},d={"true":!0,"false":!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,"delete":!0,imag:!0,len:!0,make:!0,"new":!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},f=/[+\-*&^%:=<>!|\/]/
return{startState:function(e){return{tokenize:null,context:new o((e||0)-c,0,"top",(!1)),indented:0,startOfLine:!0}},token:function(e,t){var r=t.context
if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"case"==r.type&&(r.type="}")),e.eatSpace())return null
l=null
var i=(t.tokenize||n)(e,t)
return"comment"==i?i:(null==r.align&&(r.align=!0),"{"==l?a(t,e.column(),"}"):"["==l?a(t,e.column(),"]"):"("==l?a(t,e.column(),")"):"case"==l?r.type="case":"}"==l&&"}"==r.type?s(t):l==r.type&&s(t),t.startOfLine=!1,i)},indent:function(t,r){if(t.tokenize!=n&&null!=t.tokenize)return e.Pass
var i=t.context,o=r&&r.charAt(0)
if("case"==i.type&&/^(?:case|default)\b/.test(r))return t.context.type="}",i.indented
var a=o==i.type
return i.align?i.column+(a?0:1):i.indented+(a?0:c)},electricChars:"{}):",closeBrackets:"()[]{}''\"\"``",fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-go","go")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("groovy",function(t){function n(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}function r(e,t){var n=e.next()
if('"'==n||"'"==n)return i(n,e,t)
if(/[\[\]{}\(\),;\:\.]/.test(n))return d=n,null
if(/\d/.test(n))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number"
if("/"==n){if(e.eat("*"))return t.tokenize.push(a),a(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"
if(s(t.lastToken,!1))return i(n,e,t)}if("-"==n&&e.eat(">"))return d="->",null
if(/[+\-*&%=<>!?|\/~]/.test(n))return e.eatWhile(/[+\-*&%=<>|~]/),"operator"
if(e.eatWhile(/[\w\$_]/),"@"==n)return e.eatWhile(/[\w\$_\.]/),"meta"
if("."==t.lastToken)return"property"
if(e.eat(":"))return d="proplabel","property"
var r=e.current()
return m.propertyIsEnumerable(r)?"atom":f.propertyIsEnumerable(r)?(p.propertyIsEnumerable(r)?d="newstatement":h.propertyIsEnumerable(r)&&(d="standalone"),"keyword"):"variable"}function i(e,t,n){function r(t,n){for(var r,a=!1,s=!i;null!=(r=t.next());){if(r==e&&!a){if(!i)break
if(t.match(e+e)){s=!0
break}}if('"'==e&&"$"==r&&!a&&t.eat("{"))return n.tokenize.push(o()),"string"
a=!a&&"\\"==r}return s&&n.tokenize.pop(),"string"}var i=!1
if("/"!=e&&t.eat(e)){if(!t.eat(e))return"string"
i=!0}return n.tokenize.push(r),r(t,n)}function o(){function e(e,n){if("}"==e.peek()){if(t--,0==t)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](e,n)}else"{"==e.peek()&&t++
return r(e,n)}var t=1
return e.isBase=!0,e}function a(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize.pop()
break}r="*"==n}return"comment"}function s(e,t){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e||"standalone"==e&&!t}function l(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function c(e,t,n){return e.context=new l(e.indented,t,n,null,e.context)}function u(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}var d,f=n("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"),p=n("catch class def do else enum finally for if interface switch trait try while"),h=n("return break continue"),m=n("null true false this")
return r.isBase=!0,{startState:function(e){return{tokenize:[r],context:new l((e||0)-t.indentUnit,0,"top",(!1)),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var n=t.context
if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"statement"!=n.type||s(t.lastToken,!0)||(u(t),n=t.context)),e.eatSpace())return null
d=null
var r=t.tokenize[t.tokenize.length-1](e,t)
if("comment"==r)return r
if(null==n.align&&(n.align=!0),";"!=d&&":"!=d||"statement"!=n.type)if("->"==d&&"statement"==n.type&&"}"==n.prev.type)u(t),t.context.align=!1
else if("{"==d)c(t,e.column(),"}")
else if("["==d)c(t,e.column(),"]")
else if("("==d)c(t,e.column(),")")
else if("}"==d){for(;"statement"==n.type;)n=u(t)
for("}"==n.type&&(n=u(t));"statement"==n.type;)n=u(t)}else d==n.type?u(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==d)&&c(t,e.column(),"statement")
else u(t)
return t.startOfLine=!1,t.lastToken=d||r,r},indent:function(n,r){if(!n.tokenize[n.tokenize.length-1].isBase)return e.Pass
var i=r&&r.charAt(0),o=n.context
"statement"!=o.type||s(n.lastToken,!0)||(o=o.prev)
var a=i==o.type
return"statement"==o.type?o.indented+("{"==i?0:t.indentUnit):o.align?o.column+(a?0:1):o.indented+(a?0:t.indentUnit)},electricChars:"{}",closeBrackets:{triples:"'\""},fold:"brace"}}),e.defineMIME("text/x-groovy","groovy")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("haskell",function(e,t){function n(e,t,n){return t(n),n(e,t)}function r(e,t){if(e.eatWhile(m))return null
var r=e.next()
if(h.test(r)){if("{"==r&&e.eat("-")){var a="comment"
return e.eat("#")&&(a="meta"),n(e,t,i(a,1))}return null}if("'"==r)return e.eat("\\")?e.next():e.next(),e.eat("'")?"string":"string error"
if('"'==r)return n(e,t,o)
if(l.test(r))return e.eatWhile(f),e.eat(".")?"qualifier":"variable-2"
if(s.test(r))return e.eatWhile(f),"variable"
if(c.test(r)){if("0"==r){if(e.eat(/[xX]/))return e.eatWhile(u),"integer"
if(e.eat(/[oO]/))return e.eatWhile(d),"number"}e.eatWhile(c)
var a="number"
return e.match(/^\.\d+/)&&(a="number"),e.eat(/[eE]/)&&(a="number",e.eat(/[-+]/),e.eatWhile(c)),a}if("."==r&&e.eat("."))return"keyword"
if(p.test(r)){if("-"==r&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(p)))return e.skipToEnd(),"comment"
var a="variable"
return":"==r&&(a="variable-2"),e.eatWhile(p),a}return"error"}function i(e,t){return 0==t?r:function(n,o){for(var a=t;!n.eol();){var s=n.next()
if("{"==s&&n.eat("-"))++a
else if("-"==s&&n.eat("}")&&(--a,0==a))return o(r),e}return o(i(e,a)),e}}function o(e,t){for(;!e.eol();){var n=e.next()
if('"'==n)return t(r),"string"
if("\\"==n){if(e.eol()||e.eat(m))return t(a),"string"
e.eat("&")||e.next()}}return t(r),"string error"}function a(e,t){return e.eat("\\")?n(e,t,o):(e.next(),t(r),"error")}var s=/[a-z_]/,l=/[A-Z]/,c=/\d/,u=/[0-9A-Fa-f]/,d=/[0-7]/,f=/[a-z_A-Z0-9'\xa1-\uffff]/,p=/[-!#$%&*+.\/<=>?@\\^|~:]/,h=/[(),;[\]`{}]/,m=/[ \t\v\f]/,g=function(){function e(e){return function(){for(var t=0;t<arguments.length;t++)n[arguments[t]]=e}}var n={}
e("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),e("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),e("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<*","<=","<$>","<*>","=<<","==",">",">=",">>",">>=","^","^^","||","*","*>","**"),e("builtin")("Applicative","Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),e("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","pure","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3")
var r=t.overrideKeywords
if(r)for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])
return n}()
return{startState:function(){return{f:r}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,function(e){t.f=e}),r=e.current()
return g.hasOwnProperty(r)?g[r]:n},blockCommentStart:"{-",blockCommentEnd:"-}",lineComment:"--"}}),e.defineMIME("text/x-haskell","haskell")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1}
e.defineMode("xml",function(r,i){function o(e,t){function n(n){return t.tokenize=n,n(e,t)}var r=e.next()
if("<"==r)return e.eat("!")?e.eat("[")?e.match("CDATA[")?n(l("atom","]]>")):null:e.match("--")?n(l("comment","-->")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),n(c(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=l("meta","?>"),"meta"):(M=e.eat("/")?"closeTag":"openTag",t.tokenize=a,"tag bracket")
if("&"==r){var i
return i=e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"),i?"atom":"error"}return e.eatWhile(/[^&<]/),null}function a(e,t){var n=e.next()
if(">"==n||"/"==n&&e.eat(">"))return t.tokenize=o,M=">"==n?"endTag":"selfcloseTag","tag bracket"
if("="==n)return M="equals",null
if("<"==n){t.tokenize=o,t.state=p,t.tagName=t.tagStart=null
var r=t.tokenize(e,t)
return r?r+" tag error":"tag error"}return/[\'\"]/.test(n)?(t.tokenize=s(n),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function s(e){var t=function(t,n){for(;!t.eol();)if(t.next()==e){n.tokenize=a
break}return"string"}
return t.isInAttribute=!0,t}function l(e,t){return function(n,r){for(;!n.eol();){if(n.match(t)){r.tokenize=o
break}n.next()}return e}}function c(e){return function(t,n){for(var r;null!=(r=t.next());){if("<"==r)return n.tokenize=c(e+1),n.tokenize(t,n)
if(">"==r){if(1==e){n.tokenize=o
break}return n.tokenize=c(e-1),n.tokenize(t,n)}}return"meta"}}function u(e,t,n){this.prev=e.context,this.tagName=t,this.indent=e.indented,this.startOfLine=n,(_.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function d(e){e.context&&(e.context=e.context.prev)}function f(e,t){for(var n;;){if(!e.context)return
if(n=e.context.tagName,!_.contextGrabbers.hasOwnProperty(n)||!_.contextGrabbers[n].hasOwnProperty(t))return
d(e)}}function p(e,t,n){return"openTag"==e?(n.tagStart=t.column(),h):"closeTag"==e?m:p}function h(e,t,n){return"word"==e?(n.tagName=t.current(),L="tag",y):_.allowMissingTagName&&"endTag"==e?(L="tag bracket",y(e,t,n)):(L="error",h)}function m(e,t,n){if("word"==e){var r=t.current()
return n.context&&n.context.tagName!=r&&_.implicitlyClosed.hasOwnProperty(n.context.tagName)&&d(n),n.context&&n.context.tagName==r||_.matchClosing===!1?(L="tag",g):(L="tag error",v)}return _.allowMissingTagName&&"endTag"==e?(L="tag bracket",g(e,t,n)):(L="error",v)}function g(e,t,n){return"endTag"!=e?(L="error",g):(d(n),p)}function v(e,t,n){return L="error",g(e,t,n)}function y(e,t,n){if("word"==e)return L="attribute",b
if("endTag"==e||"selfcloseTag"==e){var r=n.tagName,i=n.tagStart
return n.tagName=n.tagStart=null,"selfcloseTag"==e||_.autoSelfClosers.hasOwnProperty(r)?f(n,r):(f(n,r),n.context=new u(n,r,i==n.indented)),p}return L="error",y}function b(e,t,n){return"equals"==e?k:(_.allowMissing||(L="error"),y(e,t,n))}function k(e,t,n){return"string"==e?x:"word"==e&&_.allowUnquoted?(L="string",y):(L="error",y(e,t,n))}function x(e,t,n){return"string"==e?x:y(e,t,n)}var w=r.indentUnit,_={},C=i.htmlMode?t:n
for(var S in C)_[S]=C[S]
for(var S in i)_[S]=i[S]
var M,L
return o.isInText=!0,{startState:function(e){var t={tokenize:o,state:p,indented:e||0,tagName:null,tagStart:null,context:null}
return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null
M=null
var n=t.tokenize(e,t)
return(n||M)&&"comment"!=n&&(L=null,t.state=t.state(M||n,e,t),L&&(n="error"==L?n+" error":L)),n},indent:function(t,n,r){var i=t.context
if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+w
if(i&&i.noIndent)return e.Pass
if(t.tokenize!=a&&t.tokenize!=o)return r?r.match(/^(\s*)/)[0].length:0
if(t.tagName)return _.multilineTagIndentPastTag!==!1?t.tagStart+t.tagName.length+2:t.tagStart+w*(_.multilineTagIndentFactor||1)
if(_.alignCDATA&&/<!\[CDATA\[/.test(n))return 0
var s=n&&/^<(\/)?([\w_:\.-]*)/.exec(n)
if(s&&s[1])for(;i;){if(i.tagName==s[2]){i=i.prev
break}if(!_.implicitlyClosed.hasOwnProperty(i.tagName))break
i=i.prev}else if(s)for(;i;){var l=_.contextGrabbers[i.tagName]
if(!l||!l.hasOwnProperty(s[2]))break
i=i.prev}for(;i&&i.prev&&!i.startOfLine;)i=i.prev
return i?i.indent+w:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:_.htmlMode?"html":"xml",helperType:_.htmlMode?"html":"xml",skipAttribute:function(e){e.state==k&&(e.state=y)}}}),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript"),require("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n){var r=e.current(),i=r.search(t)
return i>-1?e.backUp(r.length-i):r.match(/<\/?$/)&&(e.backUp(r.length),e.match(t,!1)||e.match(r)),n}function n(e){var t=l[e]
return t?t:l[e]=new RegExp("\\s+"+e+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*")}function r(e,t){var r=e.match(n(t))
return r?/^\s*(.*?)\s*$/.exec(r[2])[1]:""}function i(e,t){return new RegExp((t?"^":"")+"</s*"+e+"s*>","i")}function o(e,t){for(var n in e)for(var r=t[n]||(t[n]=[]),i=e[n],o=i.length-1;o>=0;o--)r.unshift(i[o])}function a(e,t){for(var n=0;n<e.length;n++){var i=e[n]
if(!i[0]||i[1].test(r(t,i[0])))return i[2]}}var s={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},l={}
e.defineMode("htmlmixed",function(n,r){function l(r,o){var s,d=c.token(r,o.htmlState),f=/\btag\b/.test(d)
if(f&&!/[<>\s\/]/.test(r.current())&&(s=o.htmlState.tagName&&o.htmlState.tagName.toLowerCase())&&u.hasOwnProperty(s))o.inTag=s+" "
else if(o.inTag&&f&&/>$/.test(r.current())){var p=/^([\S]+) (.*)/.exec(o.inTag)
o.inTag=null
var h=">"==r.current()&&a(u[p[1]],p[2]),m=e.getMode(n,h),g=i(p[1],!0),v=i(p[1],!1)
o.token=function(e,n){return e.match(g,!1)?(n.token=l,n.localState=n.localMode=null,null):t(e,v,n.localMode.token(e,n.localState))},o.localMode=m,o.localState=e.startState(m,c.indent(o.htmlState,"",""))}else o.inTag&&(o.inTag+=r.current(),r.eol()&&(o.inTag+=" "))
return d}var c=e.getMode(n,{name:"xml",htmlMode:!0,multilineTagIndentFactor:r.multilineTagIndentFactor,multilineTagIndentPastTag:r.multilineTagIndentPastTag}),u={},d=r&&r.tags,f=r&&r.scriptTypes
if(o(s,u),d&&o(d,u),f)for(var p=f.length-1;p>=0;p--)u.script.unshift(["type",f[p].matches,f[p].mode])
return{startState:function(){var t=e.startState(c)
return{token:l,inTag:null,localMode:null,localState:null,htmlState:t}},copyState:function(t){var n
return t.localState&&(n=e.copyState(t.localMode,t.localState)),{token:t.token,inTag:t.inTag,localMode:t.localMode,localState:n,htmlState:e.copyState(c,t.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(t,n,r){return!t.localMode||/^\s*<\//.test(n)?c.indent(t.htmlState,n,r):t.localMode.indent?t.localMode.indent(t.localState,n,r):e.Pass},innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||c}}}},"xml","javascript","css"),e.defineMIME("text/html","htmlmixed")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/multiplex")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/multiplex"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("htmlembedded",function(t,n){var r=n.closeComment||"--%>"
return e.multiplexingMode(e.getMode(t,"htmlmixed"),{open:n.openComment||"<%--",close:r,delimStyle:"comment",mode:{token:function(e){return e.skipTo(r)||e.skipToEnd(),"comment"}}},{open:n.open||n.scriptStartRegex||"<%",close:n.close||n.scriptEndRegex||"%>",mode:e.getMode(t,n.scriptingModeSpec)})},"htmlmixed"),e.defineMIME("application/x-ejs",{name:"htmlembedded",scriptingModeSpec:"javascript"}),e.defineMIME("application/x-aspx",{name:"htmlembedded",scriptingModeSpec:"text/x-csharp"}),e.defineMIME("application/x-jsp",{name:"htmlembedded",scriptingModeSpec:"text/x-java"}),e.defineMIME("application/x-erb",{name:"htmlembedded",scriptingModeSpec:"ruby"})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("javascript",function(t,n){function r(e){for(var t,n=!1,r=!1;null!=(t=e.next());){if(!n){if("/"==t&&!r)return
"["==t?r=!0:r&&"]"==t&&(r=!1)}n=!n&&"\\"==t}}function i(e,t,n){return Re=e,je=n,t}function o(e,t){var n=e.next()
if('"'==n||"'"==n)return t.tokenize=a(n),t.tokenize(e,t)
if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return i("number","number")
if("."==n&&e.match(".."))return i("spread","meta")
if(/[\[\]{}\(\),;\:\.]/.test(n))return i(n)
if("="==n&&e.eat(">"))return i("=>","operator")
if("0"==n&&e.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i))return i("number","number")
if(/\d/.test(n))return e.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/),i("number","number")
if("/"==n)return e.eat("*")?(t.tokenize=s,s(e,t)):e.eat("/")?(e.skipToEnd(),i("comment","comment")):Pe(e,t,1)?(r(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),i("regexp","string-2")):(e.eat("="),i("operator","operator",e.current()))
if("`"==n)return t.tokenize=l,l(e,t)
if("#"==n)return e.skipToEnd(),i("error","error")
if(Ge.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),i("operator","operator",e.current())
if(Ke.test(n)){e.eatWhile(Ke)
var o=e.current()
if("."!=t.lastType){if(Ve.propertyIsEnumerable(o)){var c=Ve[o]
return i(c.type,c.style,o)}if("async"==o&&e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return i("async","keyword",o)}return i("variable","variable",o)}}function a(e){return function(t,n){var r,a=!1
if(He&&"@"==t.peek()&&t.match(Ze))return n.tokenize=o,i("jsonld-keyword","meta")
for(;null!=(r=t.next())&&(r!=e||a);)a=!a&&"\\"==r
return a||(n.tokenize=o),i("string","string")}}function s(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=o
break}r="*"==n}return i("comment","comment")}function l(e,t){for(var n,r=!1;null!=(n=e.next());){if(!r&&("`"==n||"$"==n&&e.eat("{"))){t.tokenize=o
break}r=!r&&"\\"==n}return i("quasi","string-2",e.current())}function c(e,t){t.fatArrowAt&&(t.fatArrowAt=null)
var n=e.string.indexOf("=>",e.start)
if(!(n<0)){if($e){var r=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,n))
r&&(n=r.index)}for(var i=0,o=!1,a=n-1;a>=0;--a){var s=e.string.charAt(a),l=Xe.indexOf(s)
if(l>=0&&l<3){if(!i){++a
break}if(0==--i){"("==s&&(o=!0)
break}}else if(l>=3&&l<6)++i
else if(Ke.test(s))o=!0
else{if(/["'\/]/.test(s))return
if(o&&!i){++a
break}}}o&&!i&&(t.fatArrowAt=a)}}function u(e,t,n,r,i,o){this.indented=e,this.column=t,this.type=n,this.prev=i,this.info=o,null!=r&&(this.align=r)}function d(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0
for(var r=e.context;r;r=r.prev)for(var n=r.vars;n;n=n.next)if(n.name==t)return!0}function f(e,t,n,r,i){var o=e.cc
for(Ye.state=e,Ye.stream=i,Ye.marked=null,Ye.cc=o,Ye.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var a=o.length?o.pop():Ue?A:L
if(a(n,r)){for(;o.length&&o[o.length-1].lex;)o.pop()()
return Ye.marked?Ye.marked:"variable"==n&&d(e,r)?"variable-2":t}}}function p(){for(var e=arguments.length-1;e>=0;e--)Ye.cc.push(arguments[e])}function h(){return p.apply(null,arguments),!0}function m(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0
return!1}function g(e){var t=Ye.state
if(Ye.marked="def",t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var r=v(e,t.context)
if(null!=r)return void(t.context=r)}else if(!m(e,t.localVars))return void(t.localVars=new k(e,t.localVars))
n.globalVars&&!m(e,t.globalVars)&&(t.globalVars=new k(e,t.globalVars))}function v(e,t){if(t){if(t.block){var n=v(e,t.prev)
return n?n==t.prev?t:new b(n,t.vars,(!0)):null}return m(e,t.vars)?t:new b(t.prev,new k(e,t.vars),(!1))}return null}function y(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function b(e,t,n){this.prev=e,this.vars=t,this.block=n}function k(e,t){this.name=e,this.next=t}function x(){Ye.state.context=new b(Ye.state.context,Ye.state.localVars,(!1)),Ye.state.localVars=Je}function w(){Ye.state.context=new b(Ye.state.context,Ye.state.localVars,(!0)),Ye.state.localVars=null}function _(){Ye.state.localVars=Ye.state.context.vars,Ye.state.context=Ye.state.context.prev}function C(e,t){var n=function(){var n=Ye.state,r=n.indented
if("stat"==n.lexical.type)r=n.lexical.indented
else for(var i=n.lexical;i&&")"==i.type&&i.align;i=i.prev)r=i.indented
n.lexical=new u(r,Ye.stream.column(),e,null,n.lexical,t)}
return n.lex=!0,n}function S(){var e=Ye.state
e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function M(e){function t(n){return n==e?h():";"==e||"}"==n||")"==n||"]"==n?p():h(t)}return t}function L(e,t){return"var"==e?h(C("vardef",t),le,M(";"),S):"keyword a"==e?h(C("form"),O,L,S):"keyword b"==e?h(C("form"),L,S):"keyword d"==e?Ye.stream.match(/^\s*$/,!1)?h():h(C("stat"),N,M(";"),S):"debugger"==e?h(M(";")):"{"==e?h(C("}"),w,X,S,_):";"==e?h():"if"==e?("else"==Ye.state.lexical.info&&Ye.state.cc[Ye.state.cc.length-1]==S&&Ye.state.cc.pop()(),h(C("form"),O,L,S,he)):"function"==e?h(ye):"for"==e?h(C("form"),me,L,S):"class"==e||$e&&"interface"==t?(Ye.marked="keyword",h(C("form","class"==e?e:t),_e,S)):"variable"==e?$e&&"declare"==t?(Ye.marked="keyword",h(L)):$e&&("module"==t||"enum"==t||"type"==t)&&Ye.stream.match(/^\s*\w/,!1)?(Ye.marked="keyword","enum"==t?h(Fe):"type"==t?h(ke,M("operator"),ee,M(";")):h(C("form"),ce,M("{"),C("}"),X,S,S)):$e&&"namespace"==t?(Ye.marked="keyword",h(C("form"),A,L,S)):$e&&"abstract"==t?(Ye.marked="keyword",h(L)):h(C("stat"),H):"switch"==e?h(C("form"),O,M("{"),C("}","switch"),w,X,S,S,_):"case"==e?h(A,M(":")):"default"==e?h(M(":")):"catch"==e?h(C("form"),x,T,L,S,_):"export"==e?h(C("stat"),Le,S):"import"==e?h(C("stat"),Ae,S):"async"==e?h(L):"@"==t?h(A,L):p(C("stat"),A,M(";"),S)}function T(e){if("("==e)return h(xe,M(")"))}function A(e,t){return z(e,t,!1)}function E(e,t){return z(e,t,!0)}function O(e){return"("!=e?p():h(C(")"),A,M(")"),S)}function z(e,t,n){if(Ye.state.fatArrowAt==Ye.stream.start){var r=n?R:P
if("("==e)return h(x,C(")"),G(xe,")"),S,M("=>"),r,_)
if("variable"==e)return p(x,ce,M("=>"),r,_)}var i=n?F:q
return Qe.hasOwnProperty(e)?h(i):"function"==e?h(ye,i):"class"==e||$e&&"interface"==t?(Ye.marked="keyword",h(C("form"),we,S)):"keyword c"==e||"async"==e?h(n?E:A):"("==e?h(C(")"),N,M(")"),S,i):"operator"==e||"spread"==e?h(n?E:A):"["==e?h(C("]"),qe,S,i):"{"==e?Z($,"}",null,i):"quasi"==e?p(D,i):"new"==e?h(j(n)):"import"==e?h(A):h()}function N(e){return e.match(/[;\}\)\],]/)?p():p(A)}function q(e,t){return","==e?h(A):F(e,t,!1)}function F(e,t,n){var r=0==n?q:F,i=0==n?A:E
return"=>"==e?h(x,n?R:P,_):"operator"==e?/\+\+|--/.test(t)||$e&&"!"==t?h(r):$e&&"<"==t&&Ye.stream.match(/^([^>]|<.*?>)*>\s*\(/,!1)?h(C(">"),G(ee,">"),S,r):"?"==t?h(A,M(":"),i):h(i):"quasi"==e?p(D,r):";"!=e?"("==e?Z(E,")","call",r):"."==e?h(U,r):"["==e?h(C("]"),N,M("]"),S,r):$e&&"as"==t?(Ye.marked="keyword",h(ee,r)):"regexp"==e?(Ye.state.lastType=Ye.marked="operator",Ye.stream.backUp(Ye.stream.pos-Ye.stream.start-1),h(i)):void 0:void 0}function D(e,t){return"quasi"!=e?p():"${"!=t.slice(t.length-2)?h(D):h(A,I)}function I(e){if("}"==e)return Ye.marked="string-2",Ye.state.tokenize=l,h(D)}function P(e){return c(Ye.stream,Ye.state),p("{"==e?L:A)}function R(e){return c(Ye.stream,Ye.state),p("{"==e?L:E)}function j(e){return function(t){return"."==t?h(e?W:B):"variable"==t&&$e?h(oe,e?F:q):p(e?E:A)}}function B(e,t){if("target"==t)return Ye.marked="keyword",h(q)}function W(e,t){if("target"==t)return Ye.marked="keyword",h(F)}function H(e){return":"==e?h(S,L):p(q,M(";"),S)}function U(e){if("variable"==e)return Ye.marked="property",h()}function $(e,t){if("async"==e)return Ye.marked="property",h($)
if("variable"==e||"keyword"==Ye.style){if(Ye.marked="property","get"==t||"set"==t)return h(K)
var n
return $e&&Ye.state.fatArrowAt==Ye.stream.start&&(n=Ye.stream.match(/^\s*:\s*/,!1))&&(Ye.state.fatArrowAt=Ye.stream.pos+n[0].length),h(V)}return"number"==e||"string"==e?(Ye.marked=He?"property":Ye.style+" property",h(V)):"jsonld-keyword"==e?h(V):$e&&y(t)?(Ye.marked="keyword",h($)):"["==e?h(A,Q,M("]"),V):"spread"==e?h(E,V):"*"==t?(Ye.marked="keyword",h($)):":"==e?p(V):void 0}function K(e){return"variable"!=e?p(V):(Ye.marked="property",h(ye))}function V(e){return":"==e?h(E):"("==e?p(ye):void 0}function G(e,t,n){function r(i,o){if(n?n.indexOf(i)>-1:","==i){var a=Ye.state.lexical
return"call"==a.info&&(a.pos=(a.pos||0)+1),h(function(n,r){return n==t||r==t?p():p(e)},r)}return i==t||o==t?h():n&&n.indexOf(";")>-1?p(e):h(M(t))}return function(n,i){return n==t||i==t?h():p(e,r)}}function Z(e,t,n){for(var r=3;r<arguments.length;r++)Ye.cc.push(arguments[r])
return h(C(t,n),G(e,t),S)}function X(e){return"}"==e?h():p(L,X)}function Q(e,t){if($e){if(":"==e||"in"==t)return h(ee)
if("?"==t)return h(Q)}}function Y(e){if($e&&":"==e)return Ye.stream.match(/^\s*\w+\s+is\b/,!1)?h(A,J,ee):h(ee)}function J(e,t){if("is"==t)return Ye.marked="keyword",h()}function ee(e,t){return"keyof"==t||"typeof"==t||"infer"==t?(Ye.marked="keyword",h("typeof"==t?E:ee)):"variable"==e||"void"==t?(Ye.marked="type",h(ie)):"|"==t||"&"==t?h(ee):"string"==e||"number"==e||"atom"==e?h(ie):"["==e?h(C("]"),G(ee,"]",","),S,ie):"{"==e?h(C("}"),G(ne,"}",",;"),S,ie):"("==e?h(G(re,")"),te,ie):"<"==e?h(G(ee,">"),ee):void 0}function te(e){if("=>"==e)return h(ee)}function ne(e,t){return"variable"==e||"keyword"==Ye.style?(Ye.marked="property",h(ne)):"?"==t||"number"==e||"string"==e?h(ne):":"==e?h(ee):"["==e?h(M("variable"),Q,M("]"),ne):"("==e?p(be,ne):void 0}function re(e,t){return"variable"==e&&Ye.stream.match(/^\s*[?:]/,!1)||"?"==t?h(re):":"==e?h(ee):"spread"==e?h(re):p(ee)}function ie(e,t){return"<"==t?h(C(">"),G(ee,">"),S,ie):"|"==t||"."==e||"&"==t?h(ee):"["==e?h(ee,M("]"),ie):"extends"==t||"implements"==t?(Ye.marked="keyword",h(ee)):"?"==t?h(ee,M(":"),ee):void 0}function oe(e,t){if("<"==t)return h(C(">"),G(ee,">"),S,ie)}function ae(){return p(ee,se)}function se(e,t){if("="==t)return h(ee)}function le(e,t){return"enum"==t?(Ye.marked="keyword",h(Fe)):p(ce,Q,fe,pe)}function ce(e,t){return $e&&y(t)?(Ye.marked="keyword",h(ce)):"variable"==e?(g(t),h()):"spread"==e?h(ce):"["==e?Z(de,"]"):"{"==e?Z(ue,"}"):void 0}function ue(e,t){return"variable"!=e||Ye.stream.match(/^\s*:/,!1)?("variable"==e&&(Ye.marked="property"),"spread"==e?h(ce):"}"==e?p():"["==e?h(A,M("]"),M(":"),ue):h(M(":"),ce,fe)):(g(t),h(fe))}function de(){return p(ce,fe)}function fe(e,t){if("="==t)return h(E)}function pe(e){if(","==e)return h(le)}function he(e,t){if("keyword b"==e&&"else"==t)return h(C("form","else"),L,S)}function me(e,t){return"await"==t?h(me):"("==e?h(C(")"),ge,S):void 0}function ge(e){return"var"==e?h(le,ve):"variable"==e?h(ve):p(ve)}function ve(e,t){return")"==e?h():";"==e?h(ve):"in"==t||"of"==t?(Ye.marked="keyword",h(A,ve)):p(A,ve)}function ye(e,t){return"*"==t?(Ye.marked="keyword",h(ye)):"variable"==e?(g(t),h(ye)):"("==e?h(x,C(")"),G(xe,")"),S,Y,L,_):$e&&"<"==t?h(C(">"),G(ae,">"),S,ye):void 0}function be(e,t){return"*"==t?(Ye.marked="keyword",h(be)):"variable"==e?(g(t),h(be)):"("==e?h(x,C(")"),G(xe,")"),S,Y,_):$e&&"<"==t?h(C(">"),G(ae,">"),S,be):void 0}function ke(e,t){return"keyword"==e||"variable"==e?(Ye.marked="type",h(ke)):"<"==t?h(C(">"),G(ae,">"),S):void 0}function xe(e,t){return"@"==t&&h(A,xe),"spread"==e?h(xe):$e&&y(t)?(Ye.marked="keyword",h(xe)):$e&&"this"==e?h(Q,fe):p(ce,Q,fe)}function we(e,t){return"variable"==e?_e(e,t):Ce(e,t)}function _e(e,t){if("variable"==e)return g(t),h(Ce)}function Ce(e,t){return"<"==t?h(C(">"),G(ae,">"),S,Ce):"extends"==t||"implements"==t||$e&&","==e?("implements"==t&&(Ye.marked="keyword"),h($e?ee:A,Ce)):"{"==e?h(C("}"),Se,S):void 0}function Se(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||$e&&y(t))&&Ye.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(Ye.marked="keyword",h(Se)):"variable"==e||"keyword"==Ye.style?(Ye.marked="property",h($e?Me:ye,Se)):"number"==e||"string"==e?h($e?Me:ye,Se):"["==e?h(A,Q,M("]"),$e?Me:ye,Se):"*"==t?(Ye.marked="keyword",h(Se)):$e&&"("==e?p(be,Se):";"==e||","==e?h(Se):"}"==e?h():"@"==t?h(A,Se):void 0}function Me(e,t){if("?"==t)return h(Me)
if(":"==e)return h(ee,fe)
if("="==t)return h(E)
var n=Ye.state.lexical.prev,r=n&&"interface"==n.info
return p(r?be:ye)}function Le(e,t){return"*"==t?(Ye.marked="keyword",h(Ne,M(";"))):"default"==t?(Ye.marked="keyword",h(A,M(";"))):"{"==e?h(G(Te,"}"),Ne,M(";")):p(L)}function Te(e,t){return"as"==t?(Ye.marked="keyword",h(M("variable"))):"variable"==e?p(E,Te):void 0}function Ae(e){return"string"==e?h():"("==e?p(A):p(Ee,Oe,Ne)}function Ee(e,t){return"{"==e?Z(Ee,"}"):("variable"==e&&g(t),"*"==t&&(Ye.marked="keyword"),h(ze))}function Oe(e){if(","==e)return h(Ee,Oe)}function ze(e,t){if("as"==t)return Ye.marked="keyword",h(Ee)}function Ne(e,t){if("from"==t)return Ye.marked="keyword",h(A)}function qe(e){return"]"==e?h():p(G(E,"]"))}function Fe(){return p(C("form"),ce,M("{"),C("}"),G(De,"}"),S,S)}function De(){return p(ce,fe)}function Ie(e,t){return"operator"==e.lastType||","==e.lastType||Ge.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}function Pe(e,t,n){return t.tokenize==o&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(n||0)))}var Re,je,Be=t.indentUnit,We=n.statementIndent,He=n.jsonld,Ue=n.json||He,$e=n.typescript,Ke=n.wordCharacters||/[\w$\xa1-\uffff]/,Ve=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),n=e("keyword b"),r=e("keyword c"),i=e("keyword d"),o=e("operator"),a={type:"atom",style:"atom"}
return{"if":e("if"),"while":t,"with":t,"else":n,"do":n,"try":n,"finally":n,"return":i,"break":i,"continue":i,"new":e("new"),"delete":r,"void":r,"throw":r,"debugger":e("debugger"),"var":e("var"),"const":e("var"),"let":e("var"),"function":e("function"),"catch":e("catch"),"for":e("for"),"switch":e("switch"),"case":e("case"),"default":e("default"),"in":o,"typeof":o,"instanceof":o,"true":a,"false":a,"null":a,undefined:a,NaN:a,Infinity:a,"this":e("this"),"class":e("class"),"super":e("atom"),"yield":r,"export":e("export"),"import":e("import"),"extends":r,await:r}}(),Ge=/[+\-*&%=<>!?|~^@]/,Ze=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,Xe="([{}])",Qe={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},Ye={state:null,column:null,marked:null,cc:null},Je=new k("this",new k("arguments",null))
return _.lex=!0,S.lex=!0,{startState:function(e){var t={tokenize:o,lastType:"sof",cc:[],lexical:new u((e||0)-Be,0,"block",(!1)),localVars:n.localVars,context:n.localVars&&new b(null,null,(!1)),indented:e||0}
return n.globalVars&&"object"==typeof n.globalVars&&(t.globalVars=n.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),c(e,t)),t.tokenize!=s&&e.eatSpace())return null
var n=t.tokenize(e,t)
return"comment"==Re?n:(t.lastType="operator"!=Re||"++"!=je&&"--"!=je?Re:"incdec",f(t,n,Re,je,e))},indent:function(t,r){if(t.tokenize==s)return e.Pass
if(t.tokenize!=o)return 0
var i,a=r&&r.charAt(0),l=t.lexical
if(!/^\s*else\b/.test(r))for(var c=t.cc.length-1;c>=0;--c){var u=t.cc[c]
if(u==S)l=l.prev
else if(u!=he)break}for(;("stat"==l.type||"form"==l.type)&&("}"==a||(i=t.cc[t.cc.length-1])&&(i==q||i==F)&&!/^[,\.=+\-*:?[\(]/.test(r));)l=l.prev
We&&")"==l.type&&"stat"==l.prev.type&&(l=l.prev)
var d=l.type,f=a==d
return"vardef"==d?l.indented+("operator"==t.lastType||","==t.lastType?l.info.length+1:0):"form"==d&&"{"==a?l.indented:"form"==d?l.indented+Be:"stat"==d?l.indented+(Ie(t,r)?We||Be:0):"switch"!=l.info||f||0==n.doubleIndentSwitch?l.align?l.column+(f?0:1):l.indented+(f?0:Be):l.indented+(/^(?:case|default)\b/.test(r)?Be:2*Be)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:Ue?null:"/*",blockCommentEnd:Ue?null:"*/",blockCommentContinue:Ue?null:" * ",lineComment:Ue?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:Ue?"json":"javascript",jsonldMode:He,jsonMode:Ue,expressionAllowed:Pe,skipExpression:function(e){var t=e.cc[e.cc.length-1]
t!=A&&t!=E||e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n,r){this.state=e,this.mode=t,this.depth=n,this.prev=r}function n(r){return new t(e.copyState(r.mode,r.state),r.mode,r.depth,r.prev&&n(r.prev))}e.defineMode("jsx",function(r,i){function o(e){var t=e.tagName
e.tagName=null
var n=c.indent(e,"","")
return e.tagName=t,n}function a(e,t){return t.context.mode==c?s(e,t,t.context):l(e,t,t.context)}function s(n,i,s){if(2==s.depth)return n.match(/^.*?\*\//)?s.depth=1:n.skipToEnd(),"comment"
if("{"==n.peek()){c.skipAttribute(s.state)
var l=o(s.state),d=s.state.context
if(d&&n.match(/^[^>]*>\s*$/,!1)){for(;d.prev&&!d.startOfLine;)d=d.prev
d.startOfLine?l-=r.indentUnit:s.prev.state.lexical&&(l=s.prev.state.lexical.indented)}else 1==s.depth&&(l+=r.indentUnit)
return i.context=new t(e.startState(u,l),u,0,i.context),null}if(1==s.depth){if("<"==n.peek())return c.skipAttribute(s.state),i.context=new t(e.startState(c,o(s.state)),c,0,i.context),null
if(n.match("//"))return n.skipToEnd(),"comment"
if(n.match("/*"))return s.depth=2,a(n,i)}var f,p=c.token(n,s.state),h=n.current()
return/\btag\b/.test(p)?/>$/.test(h)?s.state.context?s.depth=0:i.context=i.context.prev:/^</.test(h)&&(s.depth=1):!p&&(f=h.indexOf("{"))>-1&&n.backUp(h.length-f),p}function l(n,r,i){if("<"==n.peek()&&u.expressionAllowed(n,i.state))return u.skipExpression(i.state),r.context=new t(e.startState(c,u.indent(i.state,"","")),c,0,r.context),null
var o=u.token(n,i.state)
if(!o&&null!=i.depth){var a=n.current()
"{"==a?i.depth++:"}"==a&&0==--i.depth&&(r.context=r.context.prev)}return o}var c=e.getMode(r,{name:"xml",allowMissing:!0,multilineTagIndentPastTag:!1,allowMissingTagName:!0}),u=e.getMode(r,i&&i.base||"javascript")
return{startState:function(){return{context:new t(e.startState(u),u)}},copyState:function(e){return{context:n(e.context)}},token:a,indent:function(e,t,n){return e.context.mode.indent(e.context.state,t,n)},innerMode:function(e){return e.context}}},"xml","javascript"),e.defineMIME("text/jsx","jsx"),e.defineMIME("text/typescript-jsx",{name:"jsx",base:{name:"javascript",typescript:!0}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("lua",function(e,t){function n(e){return new RegExp("^(?:"+e.join("|")+")","i")}function r(e){return new RegExp("^(?:"+e.join("|")+")$","i")}function i(e){for(var t=0;e.eat("=");)++t
return e.eat("["),t}function o(e,t){var n=e.next()
return"-"==n&&e.eat("-")?e.eat("[")&&e.eat("[")?(t.cur=a(i(e),"comment"))(e,t):(e.skipToEnd(),"comment"):'"'==n||"'"==n?(t.cur=s(n))(e,t):"["==n&&/[\[=]/.test(e.peek())?(t.cur=a(i(e),"string"))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function a(e,t){return function(n,r){for(var i,a=null;null!=(i=n.next());)if(null==a)"]"==i&&(a=0)
else if("="==i)++a
else{if("]"==i&&a==e){r.cur=o
break}a=null}return t}}function s(e){return function(t,n){for(var r,i=!1;null!=(r=t.next())&&(r!=e||i);)i=!i&&"\\"==r
return i||(n.cur=o),"string"}}var l=e.indentUnit,c=r(t.specials||[]),u=r(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),d=r(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),f=r(["function","if","repeat","do","\\(","{"]),p=r(["end","until","\\)","}"]),h=n(["end","until","\\)","}","else","elseif"])
return{startState:function(e){return{basecol:e||0,indentDepth:0,cur:o}},token:function(e,t){if(e.eatSpace())return null
var n=t.cur(e,t),r=e.current()
return"variable"==n&&(d.test(r)?n="keyword":u.test(r)?n="builtin":c.test(r)&&(n="variable-2")),"comment"!=n&&"string"!=n&&(f.test(r)?++t.indentDepth:p.test(r)&&--t.indentDepth),n},indent:function(e,t){var n=h.test(t)
return e.basecol+l*(e.indentDepth-(n?1:0))},lineComment:"--",blockCommentStart:"--[[",blockCommentEnd:"]]"}}),e.defineMIME("text/x-lua","lua")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../meta")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../meta"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("markdown",function(t,n){function r(n){if(e.findModeByName){var r=e.findModeByName(n)
r&&(n=r.mime||r.mimes[0])}var i=e.getMode(t,n)
return"null"==i.name?null:i}function i(e,t,n){return t.f=t.inline=n,n(e,t)}function o(e,t,n){return t.f=t.block=n,n(e,t)}function a(e){return!e||!/\S/.test(e.string)}function s(t){if(t.linkTitle=!1,t.linkHref=!1,t.linkText=!1,t.em=!1,t.strong=!1,t.strikethrough=!1,t.quote=0,t.indentedCode=!1,t.f==c){var n=x
if(!n){var r=e.innerMode(k,t.htmlState)
n="xml"==r.mode.name&&null===r.state.tagStart&&!r.state.context&&r.state.tokenize.isInText}n&&(t.f=p,t.block=l,t.htmlState=null)}return t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.prevLine=t.thisLine,t.thisLine={stream:null},null}function l(t,o){var s=t.column()===o.indentation,l=a(o.prevLine.stream),c=o.indentedCode,f=o.prevLine.hr,p=o.list!==!1,h=(o.listStack[o.listStack.length-1]||0)+3
o.indentedCode=!1
var m=o.indentation
if(null===o.indentationDiff&&(o.indentationDiff=o.indentation,p)){for(o.em=!1,o.strong=!1,o.code=!1,o.strikethrough=!1,o.list=null;m<o.listStack[o.listStack.length-1];)o.listStack.pop(),o.listStack.length?o.indentation=o.listStack[o.listStack.length-1]:o.list=!1
o.list!==!1&&(o.indentationDiff=m-o.listStack[o.listStack.length-1])}var g=!(l||f||o.prevLine.header||p&&c||o.prevLine.fencedCodeEnd),y=(o.list===!1||f||l)&&o.indentation<=h&&t.match(C),b=null
if(o.indentationDiff>=4&&(c||o.prevLine.fencedCodeEnd||o.prevLine.header||l))return t.skipToEnd(),o.indentedCode=!0,w.code
if(t.eatSpace())return null
if(s&&o.indentation<=h&&(b=t.match(L))&&b[1].length<=6)return o.quote=0,o.header=b[1].length,o.thisLine.header=!0,n.highlightFormatting&&(o.formatting="header"),o.f=o.inline,d(o)
if(o.indentation<=h&&t.eat(">"))return o.quote=s?1:o.quote+1,n.highlightFormatting&&(o.formatting="quote"),t.eatSpace(),d(o)
if(!y&&!o.setext&&s&&o.indentation<=h&&(b=t.match(S))){var k=b[1]?"ol":"ul"
return o.indentation=m+t.current().length,o.list=!0,o.quote=0,o.listStack.push(o.indentation),n.taskLists&&t.match(M,!1)&&(o.taskList=!0),o.f=o.inline,n.highlightFormatting&&(o.formatting=["list","list-"+k]),d(o)}return s&&o.indentation<=h&&(b=t.match(E,!0))?(o.quote=0,o.fencedEndRE=new RegExp(b[1]+"+ *$"),o.localMode=n.fencedCodeBlockHighlighting&&r(b[2]),o.localMode&&(o.localState=e.startState(o.localMode)),o.f=o.block=u,n.highlightFormatting&&(o.formatting="code-block"),o.code=-1,d(o)):o.setext||!(g&&p||o.quote||o.list!==!1||o.code||y||O.test(t.string))&&(b=t.lookAhead(1))&&(b=b.match(T))?(o.setext?(o.header=o.setext,o.setext=0,t.skipToEnd(),n.highlightFormatting&&(o.formatting="header")):(o.header="="==b[0].charAt(0)?1:2,o.setext=o.header),o.thisLine.header=!0,o.f=o.inline,d(o)):y?(t.skipToEnd(),o.hr=!0,o.thisLine.hr=!0,w.hr):"["===t.peek()?i(t,o,v):i(t,o,o.inline)}function c(t,n){var r=k.token(t,n.htmlState)
if(!x){var i=e.innerMode(k,n.htmlState);("xml"==i.mode.name&&null===i.state.tagStart&&!i.state.context&&i.state.tokenize.isInText||n.md_inside&&t.current().indexOf(">")>-1)&&(n.f=p,n.block=l,n.htmlState=null)}return r}function u(e,t){var r=t.listStack[t.listStack.length-1]||0,i=t.indentation<r,a=r+3
if(t.fencedEndRE&&t.indentation<=a&&(i||e.match(t.fencedEndRE))){n.highlightFormatting&&(t.formatting="code-block")
var s
return i||(s=d(t)),t.localMode=t.localState=null,t.block=l,t.f=p,t.fencedEndRE=null,t.code=0,t.thisLine.fencedCodeEnd=!0,i?o(e,t,t.block):s}return t.localMode?t.localMode.token(e,t.localState):(e.skipToEnd(),w.code)}function d(e){var t=[]
if(e.formatting){t.push(w.formatting),"string"==typeof e.formatting&&(e.formatting=[e.formatting])
for(var r=0;r<e.formatting.length;r++)t.push(w.formatting+"-"+e.formatting[r]),"header"===e.formatting[r]&&t.push(w.formatting+"-"+e.formatting[r]+"-"+e.header),"quote"===e.formatting[r]&&(!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(w.formatting+"-"+e.formatting[r]+"-"+e.quote):t.push("error"))}if(e.taskOpen)return t.push("meta"),t.length?t.join(" "):null
if(e.taskClosed)return t.push("property"),t.length?t.join(" "):null
if(e.linkHref?t.push(w.linkHref,"url"):(e.strong&&t.push(w.strong),e.em&&t.push(w.em),e.strikethrough&&t.push(w.strikethrough),e.emoji&&t.push(w.emoji),e.linkText&&t.push(w.linkText),e.code&&t.push(w.code),e.image&&t.push(w.image),e.imageAltText&&t.push(w.imageAltText,"link"),e.imageMarker&&t.push(w.imageMarker)),e.header&&t.push(w.header,w.header+"-"+e.header),e.quote&&(t.push(w.quote),!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(w.quote+"-"+e.quote):t.push(w.quote+"-"+n.maxBlockquoteDepth)),e.list!==!1){var i=(e.listStack.length-1)%3
i?1===i?t.push(w.list2):t.push(w.list3):t.push(w.list1)}return e.trailingSpaceNewLine?t.push("trailing-space-new-line"):e.trailingSpace&&t.push("trailing-space-"+(e.trailingSpace%2?"a":"b")),t.length?t.join(" "):null}function f(e,t){if(e.match(A,!0))return d(t)}function p(t,r){var i=r.text(t,r)
if("undefined"!=typeof i)return i
if(r.list)return r.list=null,d(r)
if(r.taskList){var a=" "===t.match(M,!0)[1]
return a?r.taskOpen=!0:r.taskClosed=!0,n.highlightFormatting&&(r.formatting="task"),r.taskList=!1,d(r)}if(r.taskOpen=!1,r.taskClosed=!1,r.header&&t.match(/^#+$/,!0))return n.highlightFormatting&&(r.formatting="header"),d(r)
var s=t.next()
if(r.linkTitle){r.linkTitle=!1
var l=s
"("===s&&(l=")"),l=(l+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1")
var u="^\\s*(?:[^"+l+"\\\\]+|\\\\\\\\|\\\\.)"+l
if(t.match(new RegExp(u),!0))return w.linkHref}if("`"===s){var f=r.formatting
n.highlightFormatting&&(r.formatting="code"),t.eatWhile("`")
var g=t.current().length
if(0!=r.code||r.quote&&1!=g){if(g==r.code){var v=d(r)
return r.code=0,v}return r.formatting=f,d(r)}return r.code=g,d(r)}if(r.code)return d(r)
if("\\"===s&&(t.next(),n.highlightFormatting)){var y=d(r),b=w.formatting+"-escape"
return y?y+" "+b:b}if("!"===s&&t.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return r.imageMarker=!0,r.image=!0,n.highlightFormatting&&(r.formatting="image"),d(r)
if("["===s&&r.imageMarker&&t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return r.imageMarker=!1,r.imageAltText=!0,n.highlightFormatting&&(r.formatting="image"),d(r)
if("]"===s&&r.imageAltText){n.highlightFormatting&&(r.formatting="image")
var y=d(r)
return r.imageAltText=!1,r.image=!1,r.inline=r.f=m,y}if("["===s&&!r.image)return r.linkText&&t.match(/^.*?\]/)?d(r):(r.linkText=!0,n.highlightFormatting&&(r.formatting="link"),d(r))
if("]"===s&&r.linkText){n.highlightFormatting&&(r.formatting="link")
var y=d(r)
return r.linkText=!1,r.inline=r.f=t.match(/\(.*?\)| ?\[.*?\]/,!1)?m:p,y}if("<"===s&&t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1)){r.f=r.inline=h,n.highlightFormatting&&(r.formatting="link")
var y=d(r)
return y?y+=" ":y="",y+w.linkInline}if("<"===s&&t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1)){r.f=r.inline=h,n.highlightFormatting&&(r.formatting="link")
var y=d(r)
return y?y+=" ":y="",y+w.linkEmail}if(n.xml&&"<"===s&&t.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,!1)){var x=t.string.indexOf(">",t.pos)
if(x!=-1){var _=t.string.substring(t.start,x);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(_)&&(r.md_inside=!0)}return t.backUp(1),r.htmlState=e.startState(k),o(t,r,c)}if(n.xml&&"<"===s&&t.match(/^\/\w*?>/))return r.md_inside=!1,"tag"
if("*"===s||"_"===s){for(var C=1,S=1==t.pos?" ":t.string.charAt(t.pos-2);C<3&&t.eat(s);)C++
var L=t.peek()||" ",T=!/\s/.test(L)&&(!z.test(L)||/\s/.test(S)||z.test(S)),A=!/\s/.test(S)&&(!z.test(S)||/\s/.test(L)||z.test(L)),E=null,O=null
if(C%2&&(r.em||!T||"*"!==s&&A&&!z.test(S)?r.em!=s||!A||"*"!==s&&T&&!z.test(L)||(E=!1):E=!0),C>1&&(r.strong||!T||"*"!==s&&A&&!z.test(S)?r.strong!=s||!A||"*"!==s&&T&&!z.test(L)||(O=!1):O=!0),null!=O||null!=E){n.highlightFormatting&&(r.formatting=null==E?"strong":null==O?"em":"strong em"),E===!0&&(r.em=s),O===!0&&(r.strong=s)
var v=d(r)
return E===!1&&(r.em=!1),O===!1&&(r.strong=!1),v}}else if(" "===s&&(t.eat("*")||t.eat("_"))){if(" "===t.peek())return d(r)
t.backUp(1)}if(n.strikethrough)if("~"===s&&t.eatWhile(s)){if(r.strikethrough){n.highlightFormatting&&(r.formatting="strikethrough")
var v=d(r)
return r.strikethrough=!1,v}if(t.match(/^[^\s]/,!1))return r.strikethrough=!0,n.highlightFormatting&&(r.formatting="strikethrough"),d(r)}else if(" "===s&&t.match(/^~~/,!0)){if(" "===t.peek())return d(r)
t.backUp(2)}if(n.emoji&&":"===s&&t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)){r.emoji=!0,n.highlightFormatting&&(r.formatting="emoji")
var N=d(r)
return r.emoji=!1,N}return" "===s&&(t.match(/^ +$/,!1)?r.trailingSpace++:r.trailingSpace&&(r.trailingSpaceNewLine=!0)),d(r)}function h(e,t){var r=e.next()
if(">"===r){t.f=t.inline=p,n.highlightFormatting&&(t.formatting="link")
var i=d(t)
return i?i+=" ":i="",i+w.linkInline}return e.match(/^[^>]+/,!0),w.linkInline}function m(e,t){if(e.eatSpace())return null
var r=e.next()
return"("===r||"["===r?(t.f=t.inline=g("("===r?")":"]"),n.highlightFormatting&&(t.formatting="link-string"),t.linkHref=!0,d(t)):"error"}function g(e){return function(t,r){var i=t.next()
if(i===e){r.f=r.inline=p,n.highlightFormatting&&(r.formatting="link-string")
var o=d(r)
return r.linkHref=!1,o}return t.match(q[e]),r.linkHref=!0,d(r)}}function v(e,t){return e.match(/^([^\]\\]|\\.)*\]:/,!1)?(t.f=y,e.next(),n.highlightFormatting&&(t.formatting="link"),t.linkText=!0,d(t)):i(e,t,p)}function y(e,t){if(e.match(/^\]:/,!0)){t.f=t.inline=b,n.highlightFormatting&&(t.formatting="link")
var r=d(t)
return t.linkText=!1,r}return e.match(/^([^\]\\]|\\.)+/,!0),w.linkText}function b(e,t){return e.eatSpace()?null:(e.match(/^[^\s]+/,!0),void 0===e.peek()?t.linkTitle=!0:e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),t.f=t.inline=p,w.linkHref+" url")}var k=e.getMode(t,"text/html"),x="null"==k.name
void 0===n.highlightFormatting&&(n.highlightFormatting=!1),void 0===n.maxBlockquoteDepth&&(n.maxBlockquoteDepth=0),void 0===n.taskLists&&(n.taskLists=!1),void 0===n.strikethrough&&(n.strikethrough=!1),void 0===n.emoji&&(n.emoji=!1),void 0===n.fencedCodeBlockHighlighting&&(n.fencedCodeBlockHighlighting=!0),void 0===n.xml&&(n.xml=!0),void 0===n.tokenTypeOverrides&&(n.tokenTypeOverrides={})
var w={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"}
for(var _ in w)w.hasOwnProperty(_)&&n.tokenTypeOverrides[_]&&(w[_]=n.tokenTypeOverrides[_])
var C=/^([*\-_])(?:\s*\1){2,}\s*$/,S=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,M=/^\[(x| )\](?=\s)/i,L=n.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,T=/^ *(?:\={1,}|-{1,})\s*$/,A=/^[^#!\[\]*_\\<>` "'(~:]+/,E=/^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/,O=/^\s*\[[^\]]+?\]:.*$/,z=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,N="    ",q={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/},F={startState:function(){return{f:l,prevLine:{stream:null},thisLine:{stream:null},block:l,htmlState:null,indentation:0,inline:p,text:f,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(t){return{f:t.f,prevLine:t.prevLine,thisLine:t.thisLine,block:t.block,htmlState:t.htmlState&&e.copyState(k,t.htmlState),indentation:t.indentation,localMode:t.localMode,localState:t.localMode?e.copyState(t.localMode,t.localState):null,inline:t.inline,text:t.text,formatting:!1,linkText:t.linkText,linkTitle:t.linkTitle,linkHref:t.linkHref,code:t.code,em:t.em,strong:t.strong,strikethrough:t.strikethrough,emoji:t.emoji,header:t.header,setext:t.setext,hr:t.hr,taskList:t.taskList,list:t.list,listStack:t.listStack.slice(0),quote:t.quote,indentedCode:t.indentedCode,trailingSpace:t.trailingSpace,trailingSpaceNewLine:t.trailingSpaceNewLine,md_inside:t.md_inside,fencedEndRE:t.fencedEndRE}},token:function(e,t){if(t.formatting=!1,e!=t.thisLine.stream){if(t.header=0,t.hr=!1,e.match(/^\s*$/,!0))return s(t),null
if(t.prevLine=t.thisLine,t.thisLine={stream:e},t.taskList=!1,t.trailingSpace=0,t.trailingSpaceNewLine=!1,!t.localState&&(t.f=t.block,t.f!=c)){var n=e.match(/^\s*/,!0)[0].replace(/\t/g,N).length
if(t.indentation=n,t.indentationDiff=null,n>0)return null}}return t.f(e,t)},innerMode:function(e){return e.block==c?{state:e.htmlState,mode:k}:e.localState?{state:e.localState,mode:e.localMode}:{state:e,mode:F}},indent:function(t,n,r){return t.block==c&&k.indent?k.indent(t.htmlState,n,r):t.localState&&t.localMode.indent?t.localMode.indent(t.localState,n,r):e.Pass},blankLine:s,getType:d,blockCommentStart:"<!--",blockCommentEnd:"-->",closeBrackets:"()[]{}''\"\"``",fold:"markdown"}
return F},"xml"),e.defineMIME("text/markdown","markdown"),e.defineMIME("text/x-markdown","markdown")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("mllike",function(t,n){function r(e,t){var r=e.next()
if('"'===r)return t.tokenize=i,t.tokenize(e,t)
if("{"===r&&e.eat("|"))return t.longString=!0,t.tokenize=a,t.tokenize(e,t)
if("("===r&&e.eat("*"))return t.commentLevel++,t.tokenize=o,t.tokenize(e,t)
if("~"===r||"?"===r)return e.eatWhile(/\w/),"variable-2"
if("`"===r)return e.eatWhile(/\w/),"quote"
if("/"===r&&n.slashComments&&e.eat("/"))return e.skipToEnd(),"comment"
if(/\d/.test(r))return"0"===r&&e.eat(/[bB]/)&&e.eatWhile(/[01]/),"0"===r&&e.eat(/[xX]/)&&e.eatWhile(/[0-9a-fA-F]/),"0"===r&&e.eat(/[oO]/)?e.eatWhile(/[0-7]/):(e.eatWhile(/[\d_]/),e.eat(".")&&e.eatWhile(/[\d]/),e.eat(/[eE]/)&&e.eatWhile(/[\d\-+]/)),"number"
if(/[+\-*&%=<>!?|@\.~:]/.test(r))return"operator"
if(/[\w\xa1-\uffff]/.test(r)){e.eatWhile(/[\w\xa1-\uffff]/)
var l=e.current()
return s.hasOwnProperty(l)?s[l]:"variable"}return null}function i(e,t){for(var n,i=!1,o=!1;null!=(n=e.next());){if('"'===n&&!o){i=!0
break}o=!o&&"\\"===n}return i&&!o&&(t.tokenize=r),"string"}function o(e,t){for(var n,i;t.commentLevel>0&&null!=(i=e.next());)"("===n&&"*"===i&&t.commentLevel++,"*"===n&&")"===i&&t.commentLevel--,n=i
return t.commentLevel<=0&&(t.tokenize=r),"comment"}function a(e,t){for(var n,i;t.longString&&null!=(i=e.next());)"|"===n&&"}"===i&&(t.longString=!1),n=i
return t.longString||(t.tokenize=r),"string"}var s={as:"keyword","do":"keyword","else":"keyword",end:"keyword",exception:"keyword",fun:"keyword",functor:"keyword","if":"keyword","in":"keyword",include:"keyword","let":"keyword",of:"keyword",open:"keyword",rec:"keyword",struct:"keyword",then:"keyword",type:"keyword",val:"keyword","while":"keyword","with":"keyword"},l=n.extraWords||{}
for(var c in l)l.hasOwnProperty(c)&&(s[c]=n.extraWords[c])
var u=[]
for(var d in s)u.push(d)
return e.registerHelper("hintWords","mllike",u),{startState:function(){return{tokenize:r,commentLevel:0,longString:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:n.slashComments?"//":null}}),e.defineMIME("text/x-ocaml",{name:"mllike",extraWords:{and:"keyword",assert:"keyword",begin:"keyword","class":"keyword",constraint:"keyword",done:"keyword",downto:"keyword",external:"keyword","function":"keyword",initializer:"keyword",lazy:"keyword",match:"keyword",method:"keyword",module:"keyword",mutable:"keyword","new":"keyword",nonrec:"keyword",object:"keyword","private":"keyword",sig:"keyword",to:"keyword","try":"keyword",value:"keyword",virtual:"keyword",when:"keyword",raise:"builtin",failwith:"builtin","true":"builtin","false":"builtin",asr:"builtin",land:"builtin",lor:"builtin",lsl:"builtin",lsr:"builtin",lxor:"builtin",mod:"builtin",or:"builtin",raise_notrace:"builtin",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin","int":"type","float":"type",bool:"type","char":"type",string:"type",unit:"type",List:"builtin"}}),e.defineMIME("text/x-fsharp",{name:"mllike",extraWords:{"abstract":"keyword",assert:"keyword",base:"keyword",begin:"keyword","class":"keyword","default":"keyword",delegate:"keyword","do!":"keyword",done:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",extern:"keyword","finally":"keyword","for":"keyword","function":"keyword",global:"keyword",inherit:"keyword",inline:"keyword","interface":"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",match:"keyword",member:"keyword",module:"keyword",mutable:"keyword",namespace:"keyword","new":"keyword","null":"keyword",override:"keyword","private":"keyword","public":"keyword","return!":"keyword","return":"keyword",select:"keyword","static":"keyword",to:"keyword","try":"keyword",upcast:"keyword","use!":"keyword",use:"keyword","void":"keyword",when:"keyword","yield!":"keyword","yield":"keyword",atomic:"keyword","break":"keyword",checked:"keyword",component:"keyword","const":"keyword",constraint:"keyword",constructor:"keyword","continue":"keyword",eager:"keyword",event:"keyword",external:"keyword",fixed:"keyword",method:"keyword",mixin:"keyword",object:"keyword",parallel:"keyword",process:"keyword","protected":"keyword",pure:"keyword",sealed:"keyword",tailcall:"keyword",trait:"keyword",virtual:"keyword","volatile":"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",Option:"builtin","int":"builtin",string:"builtin",not:"builtin","true":"builtin","false":"builtin",raise:"builtin",failwith:"builtin"},slashComments:!0}),e.defineMIME("text/x-sml",{name:"mllike",extraWords:{abstype:"keyword",and:"keyword",andalso:"keyword","case":"keyword",datatype:"keyword",fn:"keyword",handle:"keyword",infix:"keyword",infixr:"keyword",local:"keyword",nonfix:"keyword",op:"keyword",orelse:"keyword",raise:"keyword",withtype:"keyword",eqtype:"keyword",sharing:"keyword",sig:"keyword",signature:"keyword",structure:"keyword",where:"keyword","true":"keyword","false":"keyword","int":"builtin",real:"builtin",string:"builtin","char":"builtin",bool:"builtin"},slashComments:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../clike/clike")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../clike/clike"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}function n(e,t,i){return 0==e.length?r(t):function(o,a){for(var s=e[0],l=0;l<s.length;l++)if(o.match(s[l][0]))return a.tokenize=n(e.slice(1),t),s[l][1]
return a.tokenize=r(t,i),"string"}}function r(e,t){return function(n,r){return i(n,r,e,t)}}function i(e,t,r,i){if(i!==!1&&e.match("${",!1)||e.match("{$",!1))return t.tokenize=null,"string"
if(i!==!1&&e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/))return e.match("[",!1)&&(t.tokenize=n([[["[",null]],[[/\d[\w\.]*/,"number"],[/\$[a-zA-Z_][a-zA-Z0-9_]*/,"variable-2"],[/[\w\$]+/,"variable"]],[["]",null]]],r,i)),e.match(/\-\>\w/,!1)&&(t.tokenize=n([[["->",null]],[[/[\w]+/,"variable"]]],r,i)),"variable-2"
for(var o=!1;!e.eol()&&(o||i===!1||!e.match("{$",!1)&&!e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/,!1));){if(!o&&e.match(r)){t.tokenize=null,t.tokStack.pop(),t.tokStack.pop()
break}o="\\"==e.next()&&!o}return"string"}var o="abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally",a="true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__",s="func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count"
e.registerHelper("hintWords","php",[o,a,s].join(" ").split(" ")),e.registerHelper("wordChars","php",/[\w$]/)
var l={name:"clike",helperType:"php",keywords:t(o),blockKeywords:t("catch do else elseif for foreach if switch try while finally"),defKeywords:t("class function interface namespace trait"),atoms:t(a),builtin:t(s),multiLineStrings:!0,hooks:{$:function(e){return e.eatWhile(/[\w\$_]/),"variable-2"},"<":function(e,t){var n
if(n=e.match(/<<\s*/)){var i=e.eat(/['"]/)
e.eatWhile(/[\w\.]/)
var o=e.current().slice(n[0].length+(i?2:1))
if(i&&e.eat(i),o)return(t.tokStack||(t.tokStack=[])).push(o,0),t.tokenize=r(o,"'"!=i),"string"}return!1},"#":function(e){for(;!e.eol()&&!e.match("?>",!1);)e.next()
return"comment"},"/":function(e){if(e.eat("/")){for(;!e.eol()&&!e.match("?>",!1);)e.next()
return"comment"}return!1},'"':function(e,t){return(t.tokStack||(t.tokStack=[])).push('"',0),t.tokenize=r('"'),"string"},"{":function(e,t){return t.tokStack&&t.tokStack.length&&t.tokStack[t.tokStack.length-1]++,!1},"}":function(e,t){return t.tokStack&&t.tokStack.length>0&&!--t.tokStack[t.tokStack.length-1]&&(t.tokenize=r(t.tokStack[t.tokStack.length-2])),!1}}}
e.defineMode("php",function(t,n){function r(t,n){var r=n.curMode==o
if(t.sol()&&n.pending&&'"'!=n.pending&&"'"!=n.pending&&(n.pending=null),r)return r&&null==n.php.tokenize&&t.match("?>")?(n.curMode=i,n.curState=n.html,n.php.context.prev||(n.php=null),"meta"):o.token(t,n.curState)
if(t.match(/^<\?\w*/))return n.curMode=o,n.php||(n.php=e.startState(o,i.indent(n.html,"",""))),n.curState=n.php,"meta"
if('"'==n.pending||"'"==n.pending){for(;!t.eol()&&t.next()!=n.pending;);var a="string"}else if(n.pending&&t.pos<n.pending.end){t.pos=n.pending.end
var a=n.pending.style}else var a=i.token(t,n.curState)
n.pending&&(n.pending=null)
var s,l=t.current(),c=l.search(/<\?/)
return c!=-1&&("string"==a&&(s=l.match(/[\'\"]$/))&&!/\?>/.test(l)?n.pending=s[0]:n.pending={end:t.pos,style:a},t.backUp(l.length-c)),a}var i=e.getMode(t,n&&n.htmlMode||"text/html"),o=e.getMode(t,l)
return{startState:function(){var t=e.startState(i),r=n.startOpen?e.startState(o):null
return{html:t,php:r,curMode:n.startOpen?o:i,curState:n.startOpen?r:t,pending:null}},copyState:function(t){var n,r=t.html,a=e.copyState(i,r),s=t.php,l=s&&e.copyState(o,s)
return n=t.curMode==i?a:l,{html:a,php:l,curMode:t.curMode,curState:n,pending:t.pending}},token:r,indent:function(e,t,n){return e.curMode!=o&&/^\s*<\//.test(t)||e.curMode==o&&/^\?>/.test(t)?i.indent(e.html,t,n):e.curMode.indent(e.curState,t,n)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",innerMode:function(e){return{state:e.curState,mode:e.curMode}}}},"htmlmixed","clike"),e.defineMIME("application/x-httpd-php","php"),e.defineMIME("application/x-httpd-php-open",{name:"php",startOpen:!0}),e.defineMIME("text/x-php",l)}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function n(e){return e.scopes[e.scopes.length-1]}var r=t(["and","or","not","is"]),i=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],o=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"]
e.registerHelper("hintWords","python",i.concat(o)),e.defineMode("python",function(a,s){function l(e,t){var r=e.sol()&&"\\"!=t.lastToken
if(r&&(t.indent=e.indentation()),r&&"py"==n(t).type){var i=n(t).offset
if(e.eatSpace()){var o=e.indentation()
return o>i?f(t):o<i&&h(e,t)&&"#"!=e.peek()&&(t.errorToken=!0),null}var a=c(e,t)
return i>0&&h(e,t)&&(a+=" "+g),a}return c(e,t)}function c(e,t){if(e.eatSpace())return null
if(e.match(/^#.*/))return"comment"
if(e.match(/^[0-9\.]/,!1)){var n=!1
if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(n=!0),e.match(/^[\d_]+\.\d*/)&&(n=!0),e.match(/^\.\d+/)&&(n=!0),n)return e.eat(/J/i),"number"
var i=!1
if(e.match(/^0x[0-9a-f_]+/i)&&(i=!0),e.match(/^0b[01_]+/i)&&(i=!0),e.match(/^0o[0-7_]+/i)&&(i=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),i=!0),e.match(/^0(?![\dx])/i)&&(i=!0),i)return e.eat(/L/i),"number"}if(e.match(S)){var o=e.current().toLowerCase().indexOf("f")!==-1
return o?(t.tokenize=u(e.current(),t.tokenize),t.tokenize(e,t)):(t.tokenize=d(e.current(),t.tokenize),t.tokenize(e,t))}for(var a=0;a<y.length;a++)if(e.match(y[a]))return"operator"
return e.match(v)?"punctuation":"."==t.lastToken&&e.match(C)?"property":e.match(M)||e.match(r)?"keyword":e.match(L)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(C)?"def"==t.lastToken||"class"==t.lastToken?"def":"variable":(e.next(),g)}function u(e,t){function n(e){return function(t,i){var o=c(t,i)
return"punctuation"==o&&("{"==t.current()?i.tokenize=n(e+1):"}"==t.current()&&(e>1?i.tokenize=n(e-1):i.tokenize=r)),o}}function r(r,a){for(;!r.eol();)if(r.eatWhile(/[^'"\{\}\\]/),r.eat("\\")){if(r.next(),i&&r.eol())return o}else{if(r.match(e))return a.tokenize=t,o
if(r.match("{{"))return o
if(r.match("{",!1))return a.tokenize=n(0),r.current()?o:a.tokenize(r,a)
if(r.match("}}"))return o
if(r.match("}"))return g
r.eat(/['"]/)}if(i){if(s.singleLineStringErrors)return g
a.tokenize=t}return o}for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1)
var i=1==e.length,o="string"
return r.isString=!0,r}function d(e,t){function n(n,o){for(;!n.eol();)if(n.eatWhile(/[^'"\\]/),n.eat("\\")){if(n.next(),r&&n.eol())return i}else{if(n.match(e))return o.tokenize=t,i
n.eat(/['"]/)}if(r){if(s.singleLineStringErrors)return g
o.tokenize=t}return i}for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1)
var r=1==e.length,i="string"
return n.isString=!0,n}function f(e){for(;"py"!=n(e).type;)e.scopes.pop()
e.scopes.push({offset:n(e).offset+a.indentUnit,type:"py",align:null})}function p(e,t,n){var r=e.match(/^([\s\[\{\(]|#.*)*$/,!1)?null:e.column()+1
t.scopes.push({offset:t.indent+k,type:n,align:r})}function h(e,t){for(var r=e.indentation();t.scopes.length>1&&n(t).offset>r;){if("py"!=n(t).type)return!0
t.scopes.pop()}return n(t).offset!=r}function m(e,t){e.sol()&&(t.beginningOfLine=!0)
var r=t.tokenize(e,t),i=e.current()
if(t.beginningOfLine&&"@"==i)return e.match(C,!1)?"meta":_?"operator":g
if(/\S/.test(i)&&(t.beginningOfLine=!1),"variable"!=r&&"builtin"!=r||"meta"!=t.lastToken||(r="meta"),"pass"!=i&&"return"!=i||(t.dedent+=1),"lambda"==i&&(t.lambda=!0),":"!=i||t.lambda||"py"!=n(t).type||f(t),1==i.length&&!/string|comment/.test(r)){var o="[({".indexOf(i)
if(o!=-1&&p(e,t,"])}".slice(o,o+1)),o="])}".indexOf(i),o!=-1){if(n(t).type!=i)return g
t.indent=t.scopes.pop().offset-k}}return t.dedent>0&&e.eol()&&"py"==n(t).type&&(t.scopes.length>1&&t.scopes.pop(),t.dedent-=1),r}for(var g="error",v=s.delimiters||s.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,y=[s.singleOperators,s.doubleOperators,s.doubleDelimiters,s.tripleDelimiters,s.operators||/^([-+*\/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@])/],b=0;b<y.length;b++)y[b]||y.splice(b--,1)
var k=s.hangingIndent||a.indentUnit,x=i,w=o
void 0!=s.extra_keywords&&(x=x.concat(s.extra_keywords)),void 0!=s.extra_builtins&&(w=w.concat(s.extra_builtins))
var _=!(s.version&&Number(s.version)<3)
if(_){var C=s.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/
x=x.concat(["nonlocal","False","True","None","async","await"]),w=w.concat(["ascii","bytes","exec","print"])
var S=new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))","i")}else{var C=s.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/
x=x.concat(["exec","print"]),w=w.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"])
var S=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var M=t(x),L=t(w),T={startState:function(e){return{tokenize:l,scopes:[{offset:e||0,type:"py",align:null}],indent:e||0,lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=t.errorToken
n&&(t.errorToken=!1)
var r=m(e,t)
return r&&"comment"!=r&&(t.lastToken="keyword"==r||"punctuation"==r?e.current():r),"punctuation"==r&&(r=null),e.eol()&&t.lambda&&(t.lambda=!1),n?r+" "+g:r},indent:function(t,r){if(t.tokenize!=l)return t.tokenize.isString?e.Pass:0
var i=n(t),o=i.type==r.charAt(0)
return null!=i.align?i.align-(o?1:0):i.offset-(o?k:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"}
return T}),e.defineMIME("text/x-python","python")
var a=function(e){return e.split(" ")}
e.defineMIME("text/x-cython",{name:"python",extra_keywords:a("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.registerHelper("wordChars","r",/[\w.]/),e.defineMode("r",function(t){function n(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0
return t}function r(e,t){f=null
var n=e.next()
if("#"==n)return e.skipToEnd(),"comment"
if("0"==n&&e.eat("x"))return e.eatWhile(/[\da-f]/i),"number"
if("."==n&&e.eat(/\d/))return e.match(/\d*(?:e[+\-]?\d+)?/),"number"
if(/\d/.test(n))return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number"
if("'"==n||'"'==n)return t.tokenize=i(n),"string"
if("`"==n)return e.match(/[^`]+`/),"variable-3"
if("."==n&&e.match(/.[.\d]+/))return"keyword"
if(/[\w\.]/.test(n)&&"_"!=n){e.eatWhile(/[\w\.]/)
var r=e.current()
return p.propertyIsEnumerable(r)?"atom":m.propertyIsEnumerable(r)?(g.propertyIsEnumerable(r)&&!e.match(/\s*if(\s+|$)/,!1)&&(f="block"),"keyword"):h.propertyIsEnumerable(r)?"builtin":"variable"}return"%"==n?(e.skipTo("%")&&e.next(),"operator variable-2"):"<"==n&&e.eat("-")||"<"==n&&e.match("<-")||"-"==n&&e.match(/>>?/)?"operator arrow":"="==n&&t.ctx.argList?"arg-is":v.test(n)?"$"==n?"operator dollar":(e.eatWhile(v),"operator"):/[\(\){}\[\];]/.test(n)?(f=n,";"==n?"semi":null):null}function i(e){return function(t,n){if(t.eat("\\")){var i=t.next()
return"x"==i?t.match(/^[a-f0-9]{2}/i):("u"==i||"U"==i)&&t.eat("{")&&t.skipTo("}")?t.next():"u"==i?t.match(/^[a-f0-9]{4}/i):"U"==i?t.match(/^[a-f0-9]{8}/i):/[0-7]/.test(i)&&t.match(/^[0-7]{1,2}/),"string-2"}for(var o;null!=(o=t.next());){if(o==e){n.tokenize=r
break}if("\\"==o){t.backUp(1)
break}}return"string"}}function o(e,t,n){e.ctx={type:t,indent:e.indent,flags:0,column:n.column(),prev:e.ctx}}function a(e,t){var n=e.ctx
e.ctx={type:n.type,indent:n.indent,flags:n.flags|t,column:n.column,prev:n.prev}}function s(e){e.indent=e.ctx.indent,e.ctx=e.ctx.prev}var l=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","TRUE","FALSE"],c=["list","quote","bquote","eval","return","call","parse","deparse"],u=["if","else","repeat","while","function","for","in","next","break"],d=["if","else","repeat","while","function","for"]
e.registerHelper("hintWords","r",l.concat(c,u))
var f,p=n(l),h=n(c),m=n(u),g=n(d),v=/[+\-*\/^<>=!&|~$:]/,y=1,b=2,k=4
return{startState:function(){return{tokenize:r,ctx:{type:"top",indent:-t.indentUnit,flags:b},indent:0,afterIdent:!1}},token:function(e,t){if(e.sol()&&(0==(3&t.ctx.flags)&&(t.ctx.flags|=b),t.ctx.flags&k&&s(t),t.indent=e.indentation()),e.eatSpace())return null
var n=t.tokenize(e,t)
return"comment"!=n&&0==(t.ctx.flags&b)&&a(t,y),";"!=f&&"{"!=f&&"}"!=f||"block"!=t.ctx.type||s(t),"{"==f?o(t,"}",e):"("==f?(o(t,")",e),t.afterIdent&&(t.ctx.argList=!0)):"["==f?o(t,"]",e):"block"==f?o(t,"block",e):f==t.ctx.type?s(t):"block"==t.ctx.type&&"comment"!=n&&a(t,k),t.afterIdent="variable"==n||"keyword"==n,n},indent:function(e,n){if(e.tokenize!=r)return 0
var i=n&&n.charAt(0),o=e.ctx,a=i==o.type
return o.flags&k&&(o=o.prev),"block"==o.type?o.indent+("{"==i?0:t.indentUnit):o.flags&y?o.column+(a?0:1):o.indent+(a?0:t.indentUnit)},lineComment:"#"}}),e.defineMIME("text/x-rsrc","r")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("ruby",function(t){function n(e){for(var t={},n=0,r=e.length;n<r;++n)t[e[n]]=!0
return t}function r(e,t,n){return n.tokenize.push(e),e(t,n)}function i(e,t){if(e.sol()&&e.match("=begin")&&e.eol())return t.tokenize.push(u),"comment"
if(e.eatSpace())return null
var n,i=e.next()
if("`"==i||"'"==i||'"'==i)return r(l(i,"string",'"'==i||"`"==i),e,t)
if("/"==i)return o(e)?r(l(i,"string-2",!0),e,t):"operator"
if("%"==i){var a="string",s=!0
e.eat("s")?a="atom":e.eat(/[WQ]/)?a="string":e.eat(/[r]/)?a="string-2":e.eat(/[wxq]/)&&(a="string",s=!1)
var f=e.eat(/[^\w\s=]/)
return f?(m.propertyIsEnumerable(f)&&(f=m[f]),r(l(f,a,s,!0),e,t)):"operator"}if("#"==i)return e.skipToEnd(),"comment"
if("<"==i&&(n=e.match(/^<(-)?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return r(c(n[2],n[1]),e,t)
if("0"==i)return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number"
if(/\d/.test(i))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number"
if("?"==i){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}if(":"==i)return e.eat("'")?r(l("'","atom",!1),e,t):e.eat('"')?r(l('"',"atom",!0),e,t):e.eat(/[\<\>]/)?(e.eat(/[\<\>]/),"atom"):e.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":e.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(e.eatWhile(/[\w$\xa1-\uffff]/),e.eat(/[\?\!\=]/),"atom"):"operator"
if("@"==i&&e.match(/^@?[a-zA-Z_\xa1-\uffff]/))return e.eat("@"),e.eatWhile(/[\w\xa1-\uffff]/),"variable-2"
if("$"==i)return e.eat(/[a-zA-Z_]/)?e.eatWhile(/[\w]/):e.eat(/\d/)?e.eat(/\d/):e.next(),"variable-3"
if(/[a-zA-Z_\xa1-\uffff]/.test(i))return e.eatWhile(/[\w\xa1-\uffff]/),e.eat(/[\?\!]/),e.eat(":")?"atom":"ident"
if("|"!=i||!t.varList&&"{"!=t.lastTok&&"do"!=t.lastTok){if(/[\(\)\[\]{}\\;]/.test(i))return d=i,null
if("-"==i&&e.eat(">"))return"arrow"
if(/[=+\-\/*:\.^%<>~|]/.test(i)){var p=e.eatWhile(/[=+\-\/*:\.^%<>~|]/)
return"."!=i||p||(d="."),"operator"}return null}return d="|",null}function o(e){for(var t,n=e.pos,r=0,i=!1,o=!1;null!=(t=e.next());)if(o)o=!1
else{if("[{(".indexOf(t)>-1)r++
else if("]})".indexOf(t)>-1){if(r--,r<0)break}else if("/"==t&&0==r){i=!0
break}o="\\"==t}return e.backUp(e.pos-n),i}function a(e){return e||(e=1),function(t,n){if("}"==t.peek()){if(1==e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)
n.tokenize[n.tokenize.length-1]=a(e-1)}else"{"==t.peek()&&(n.tokenize[n.tokenize.length-1]=a(e+1))
return i(t,n)}}function s(){var e=!1
return function(t,n){return e?(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)):(e=!0,i(t,n))}}function l(e,t,n,r){return function(i,o){var l,c=!1
for("read-quoted-paused"===o.context.type&&(o.context=o.context.prev,i.eat("}"));null!=(l=i.next());){if(l==e&&(r||!c)){o.tokenize.pop()
break}if(n&&"#"==l&&!c){if(i.eat("{")){"}"==e&&(o.context={prev:o.context,type:"read-quoted-paused"}),o.tokenize.push(a())
break}if(/[@\$]/.test(i.peek())){o.tokenize.push(s())
break}}c=!c&&"\\"==l}return t}}function c(e,t){return function(n,r){return t&&n.eatSpace(),n.match(e)?r.tokenize.pop():n.skipToEnd(),"string"}}function u(e,t){return e.sol()&&e.match("=end")&&e.eol()&&t.tokenize.pop(),e.skipToEnd(),"comment"}var d,f=n(["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"]),p=n(["def","class","case","for","while","until","module","then","catch","loop","proc","begin"]),h=n(["end","until"]),m={"[":"]","{":"}","(":")"}
return{startState:function(){return{tokenize:[i],indented:0,context:{type:"top",indented:-t.indentUnit},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,t){d=null,e.sol()&&(t.indented=e.indentation())
var n,r=t.tokenize[t.tokenize.length-1](e,t),i=d
if("ident"==r){var o=e.current()
r="."==t.lastTok?"property":f.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(o)?"tag":"def"==t.lastTok||"class"==t.lastTok||t.varList?"def":"variable","keyword"==r&&(i=o,p.propertyIsEnumerable(o)?n="indent":h.propertyIsEnumerable(o)?n="dedent":"if"!=o&&"unless"!=o||e.column()!=e.indentation()?"do"==o&&t.context.indented<t.indented&&(n="indent"):n="indent")}return(d||r&&"comment"!=r)&&(t.lastTok=i),"|"==d&&(t.varList=!t.varList),"indent"==n||/[\(\[\{]/.test(d)?t.context={prev:t.context,type:d||r,indented:t.indented}:("dedent"==n||/[\)\]\}]/.test(d))&&t.context.prev&&(t.context=t.context.prev),e.eol()&&(t.continuedLine="\\"==d||"operator"==r),r},indent:function(n,r){if(n.tokenize[n.tokenize.length-1]!=i)return e.Pass
var o=r&&r.charAt(0),a=n.context,s=a.type==m[o]||"keyword"==a.type&&/^(?:end|until|else|elsif|when|rescue)\b/.test(r)
return a.indented+(s?0:t.indentUnit)+(n.continuedLine?t.indentUnit:0)},electricInput:/^\s*(?:end|rescue|elsif|else|\})$/,lineComment:"#",fold:"indent"}}),e.defineMIME("text/x-ruby","ruby")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../addon/mode/simple")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../addon/mode/simple"],e):e(CodeMirror)}(function(e){"use strict"
e.defineSimpleMode("rust",{start:[{regex:/b?"/,token:"string",next:"string"},{regex:/b?r"/,token:"string",next:"string_raw"},{regex:/b?r#+"/,token:"string",next:"string_raw_hash"},{regex:/'(?:[^'\\]|\\(?:[nrt0'"]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\}))'/,token:"string-2"},{regex:/b'(?:[^']|\\(?:['\\nrt0]|x[\da-fA-F]{2}))'/,token:"string-2"},{regex:/(?:(?:[0-9][0-9_]*)(?:(?:[Ee][+-]?[0-9_]+)|\.[0-9_]+(?:[Ee][+-]?[0-9_]+)?)(?:f32|f64)?)|(?:0(?:b[01_]+|(?:o[0-7_]+)|(?:x[0-9a-fA-F_]+))|(?:[0-9][0-9_]*))(?:u8|u16|u32|u64|i8|i16|i32|i64|isize|usize)?/,token:"number"},{regex:/(let(?:\s+mut)?|fn|enum|mod|struct|type)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,token:["keyword",null,"def"]},{regex:/(?:abstract|alignof|as|box|break|continue|const|crate|do|else|enum|extern|fn|for|final|if|impl|in|loop|macro|match|mod|move|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|unsafe|unsized|use|virtual|where|while|yield)\b/,token:"keyword"},{regex:/\b(?:Self|isize|usize|char|bool|u8|u16|u32|u64|f16|f32|f64|i8|i16|i32|i64|str|Option)\b/,token:"atom"},{regex:/\b(?:true|false|Some|None|Ok|Err)\b/,token:"builtin"},{regex:/\b(fn)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,token:["keyword",null,"def"]},{regex:/#!?\[.*\]/,token:"meta"},{regex:/\/\/.*/,token:"comment"},{regex:/\/\*/,token:"comment",next:"comment"},{regex:/[-+\/*=<>!]+/,token:"operator"},{regex:/[a-zA-Z_]\w*!/,token:"variable-3"},{regex:/[a-zA-Z_]\w*/,token:"variable"},{regex:/[\{\[\(]/,indent:!0},{regex:/[\}\]\)]/,dedent:!0}],string:[{regex:/"/,token:"string",next:"start"},{regex:/(?:[^\\"]|\\(?:.|$))*/,token:"string"}],string_raw:[{regex:/"/,token:"string",next:"start"},{regex:/[^"]*/,token:"string"}],string_raw_hash:[{regex:/"#+/,token:"string",next:"start"},{regex:/(?:[^"]|"(?!#))*/,token:"string"}],comment:[{regex:/.*?\*\//,token:"comment",next:"start"},{regex:/.*/,token:"comment"}],meta:{dontIndentStates:["comment"],electricInput:/^\s*\}$/,blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}}),e.defineMIME("text/x-rustsrc","rust"),e.defineMIME("text/rust","rust")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("shell",function(){function t(e,t){for(var n=0;n<t.length;n++)a[t[n]]=e}function n(e,t){if(e.eatSpace())return null
var n=e.sol(),i=e.next()
if("\\"===i)return e.next(),null
if("'"===i||'"'===i||"`"===i)return t.tokens.unshift(r(i,"`"===i?"quote":"string")),o(e,t)
if("#"===i)return n&&e.eat("!")?(e.skipToEnd(),"meta"):(e.skipToEnd(),"comment")
if("$"===i)return t.tokens.unshift(u),o(e,t)
if("+"===i||"="===i)return"operator"
if("-"===i)return e.eat("-"),e.eatWhile(/\w/),"attribute"
if(/\d/.test(i)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return"number"
e.eatWhile(/[\w-]/)
var s=e.current()
return"="===e.peek()&&/\w+/.test(s)?"def":a.hasOwnProperty(s)?a[s]:null}function r(e,t){var n="("==e?")":"{"==e?"}":e
return function(a,s){for(var l,c=!1;null!=(l=a.next());){if(l===n&&!c){s.tokens.shift()
break}if("$"===l&&!c&&"'"!==e&&a.peek()!=n){c=!0,a.backUp(1),s.tokens.unshift(u)
break}if(!c&&e!==n&&l===e)return s.tokens.unshift(r(e,t)),o(a,s)
if(!c&&/['"]/.test(l)&&!/['"]/.test(e)){s.tokens.unshift(i(l,"string")),a.backUp(1)
break}c=!c&&"\\"===l}return t}}function i(e,t){return function(n,i){return i.tokens[0]=r(e,t),n.next(),o(n,i)}}function o(e,t){return(t.tokens[0]||n)(e,t)}var a={},s=["true","false"],l=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],c=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"]
e.registerHelper("hintWords","shell",s.concat(l,c)),t("atom",s),t("keyword",l),t("builtin",c)
var u=function(e,t){t.tokens.length>1&&e.eat("$")
var n=e.next()
return/['"({]/.test(n)?(t.tokens[0]=r(n,"("==n?"quote":"{"==n?"def":"string"),o(e,t)):(/\d/.test(n)||e.eatWhile(/\w/),t.tokens.shift(),"def")}
return{startState:function(){return{tokens:[]}},token:function(e,t){return o(e,t)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}}),e.defineMIME("text/x-sh","shell"),e.defineMIME("application/x-sh","shell")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t;null!=(t=e.next());)if("`"==t&&!e.eat("`"))return"variable-2"
return e.backUp(e.current().length-1),e.eatWhile(/\w/)?"variable-2":null}function n(e){for(var t;null!=(t=e.next());)if('"'==t&&!e.eat('"'))return"variable-2"
return e.backUp(e.current().length-1),e.eatWhile(/\w/)?"variable-2":null}function r(e){return e.eat("@")&&(e.match(/^session\./),e.match(/^local\./),e.match(/^global\./)),e.eat("'")?(e.match(/^.*'/),"variable-2"):e.eat('"')?(e.match(/^.*"/),"variable-2"):e.eat("`")?(e.match(/^.*`/),"variable-2"):e.match(/^[0-9a-zA-Z$\.\_]+/)?"variable-2":null}function i(e){return e.eat("N")?"atom":e.match(/^[a-zA-Z.#!?]/)?"variable-2":null}function o(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}e.defineMode("sql",function(t,n){function r(e,t){var n=e.next()
if(v[n]){var r=v[n](e,t)
if(r!==!1)return r}if(g.hexNumber&&("0"==n&&e.match(/^[xX][0-9a-fA-F]+/)||("x"==n||"X"==n)&&e.match(/^'[0-9a-fA-F]+'/)))return"number"
if(g.binaryNumber&&(("b"==n||"B"==n)&&e.match(/^'[01]+'/)||"0"==n&&e.match(/^b[01]+/)))return"number"
if(n.charCodeAt(0)>47&&n.charCodeAt(0)<58)return e.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/),g.decimallessFloat&&e.match(/^\.(?!\.)/),"number"
if("?"==n&&(e.eatSpace()||e.eol()||e.eat(";")))return"variable-3"
if("'"==n||'"'==n&&g.doubleQuote)return t.tokenize=i(n),t.tokenize(e,t)
if((g.nCharCast&&("n"==n||"N"==n)||g.charsetCast&&"_"==n&&e.match(/[a-z][a-z0-9]*/i))&&("'"==e.peek()||'"'==e.peek()))return"keyword"
if(g.commentSlashSlash&&"/"==n&&e.eat("/"))return e.skipToEnd(),"comment"
if(g.commentHash&&"#"==n||"-"==n&&e.eat("-")&&(!g.commentSpaceRequired||e.eat(" ")))return e.skipToEnd(),"comment"
if("/"==n&&e.eat("*"))return t.tokenize=l(1),t.tokenize(e,t)
if("."!=n){if(m.test(n))return e.eatWhile(m),"operator"
if(k.test(n))return"bracket"
if(x.test(n))return e.eatWhile(x),"punctuation"
if("{"==n&&(e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/)||e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/)))return"number"
e.eatWhile(/^[_\w\d]/)
var o=e.current().toLowerCase()
return y.hasOwnProperty(o)&&(e.match(/^( )+'[^']*'/)||e.match(/^( )+"[^"]*"/))?"number":f.hasOwnProperty(o)?"atom":p.hasOwnProperty(o)?"builtin":h.hasOwnProperty(o)?"keyword":d.hasOwnProperty(o)?"string-2":null}return g.zerolessFloat&&e.match(/^(?:\d+(?:e[+-]?\d+)?)/i)?"number":e.match(/^\.+/)?null:g.ODBCdotTable&&e.match(/^[\w\d_]+/)?"variable-2":void 0}function i(e){return function(t,n){for(var i,o=!1;null!=(i=t.next());){if(i==e&&!o){n.tokenize=r
break}o=b&&!o&&"\\"==i}return"string"}}function l(e){return function(t,n){var i=t.match(/^.*?(\/\*|\*\/)/)
return i?"/*"==i[1]?n.tokenize=l(e+1):e>1?n.tokenize=l(e-1):n.tokenize=r:t.skipToEnd(),"comment"}}function c(e,t,n){t.context={prev:t.context,indent:e.indentation(),col:e.column(),type:n}}function u(e){e.indent=e.context.indent,e.context=e.context.prev}var d=n.client||{},f=n.atoms||{"false":!0,"true":!0,"null":!0},p=n.builtin||o(s),h=n.keywords||o(a),m=n.operatorChars||/^[*+\-%<>!=&|~^\/]/,g=n.support||{},v=n.hooks||{},y=n.dateSQL||{date:!0,time:!0,timestamp:!0},b=n.backslashStringEscapes!==!1,k=n.brackets||/^[\{}\(\)\[\]]/,x=n.punctuation||/^[;.,:]/
return{startState:function(){return{tokenize:r,context:null}},token:function(e,t){if(e.sol()&&t.context&&null==t.context.align&&(t.context.align=!1),t.tokenize==r&&e.eatSpace())return null
var n=t.tokenize(e,t)
if("comment"==n)return n
t.context&&null==t.context.align&&(t.context.align=!0)
var i=e.current()
return"("==i?c(e,t,")"):"["==i?c(e,t,"]"):t.context&&t.context.type==i&&u(t),n},indent:function(n,r){var i=n.context
if(!i)return e.Pass
var o=r.charAt(0)==i.type
return i.align?i.col+(o?0:1):i.indent+(o?0:t.indentUnit)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:g.commentSlashSlash?"//":g.commentHash?"#":"--",closeBrackets:"()[]{}''\"\"``"}})
var a="alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ",s="bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric"
e.defineMIME("text/x-sql",{name:"sql",keywords:o(a+"begin"),builtin:o(s),atoms:o("false true null unknown"),dateSQL:o("date time timestamp"),support:o("ODBCdotTable doubleQuote binaryNumber hexNumber")}),e.defineMIME("text/x-mssql",{name:"sql",client:o("$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id"),keywords:o(a+"begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with"),builtin:o("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),atoms:o("is not null like and or in left right between inner outer join all any some cross unpivot pivot exists"),operatorChars:/^[*+\-%<>!=^\&|\/]/,brackets:/^[\{}\(\)]/,punctuation:/^[;.,:\/]/,backslashStringEscapes:!1,dateSQL:o("date datetimeoffset datetime2 smalldatetime datetime time"),hooks:{"@":r}}),e.defineMIME("text/x-mysql",{name:"sql",client:o("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),keywords:o(a+"accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),builtin:o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),atoms:o("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^]/,dateSQL:o("date time timestamp"),support:o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),hooks:{"@":r,"`":t,"\\":i}}),e.defineMIME("text/x-mariadb",{name:"sql",client:o("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),keywords:o(a+"accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),builtin:o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),atoms:o("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^]/,dateSQL:o("date time timestamp"),support:o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),hooks:{"@":r,"`":t,"\\":i}}),e.defineMIME("text/x-sqlite",{name:"sql",client:o("auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"),keywords:o(a+"abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"),builtin:o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"),atoms:o("null current_date current_time current_timestamp"),operatorChars:/^[*+\-%<>!=&|\/~]/,dateSQL:o("date time timestamp datetime"),support:o("decimallessFloat zerolessFloat"),identifierQuote:'"',hooks:{"@":r,":":r,"?":r,$:r,'"':n,"`":t}}),e.defineMIME("text/x-cassandra",{name:"sql",client:{},keywords:o("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),builtin:o("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),atoms:o("false true infinity NaN"),operatorChars:/^[<>=]/,dateSQL:{},support:o("commentSlashSlash decimallessFloat"),hooks:{}}),e.defineMIME("text/x-plsql",{name:"sql",client:o("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),keywords:o("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),builtin:o("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),operatorChars:/^[*\/+\-%<>!=~]/,dateSQL:o("date time timestamp"),support:o("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")}),e.defineMIME("text/x-hive",{name:"sql",keywords:o("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year"),builtin:o("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar"),atoms:o("false true null unknown"),operatorChars:/^[*+\-%<>!=]/,dateSQL:o("date timestamp"),support:o("ODBCdotTable doubleQuote binaryNumber hexNumber")}),e.defineMIME("text/x-pgsql",{name:"sql",client:o("source"),keywords:o(a+"a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone"),builtin:o("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),atoms:o("false true null unknown"),operatorChars:/^[*\/+\-%<>!=&|^\/#@?~]/,dateSQL:o("date time timestamp"),support:o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")}),e.defineMIME("text/x-gql",{name:"sql",keywords:o("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),atoms:o("false true"),builtin:o("blob datetime first key __key__ string integer double boolean null"),operatorChars:/^[*+\-%<>!=]/}),e.defineMIME("text/x-gpsql",{name:"sql",client:o("source"),keywords:o("abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone"),builtin:o("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),atoms:o("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^\/#@?~]/,dateSQL:o("date time timestamp"),support:o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")}),e.defineMIME("text/x-sparksql",{name:"sql",keywords:o("add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases datata dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with"),builtin:o("tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat"),atoms:o("false true null"),operatorChars:/^[*\/+\-%<>!=~&|^]/,dateSQL:o("date time timestamp"),support:o("ODBCdotTable doubleQuote zerolessFloat")}),e.defineMIME("text/x-esper",{name:"sql",client:o("source"),keywords:o("alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"),
builtin:{},atoms:o("false true null"),operatorChars:/^[*+\-%<>!=&|^\/#@?~]/,dateSQL:o("time"),support:o("decimallessFloat zerolessFloat binaryNumber hexNumber")})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0
return t}function n(e,t,n){if(e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null
var r=e.peek()
if("/"==r){if(e.match("//"))return e.skipToEnd(),"comment"
if(e.match("/*"))return t.tokenize.push(o),o(e,t)}if(e.match(x))return"builtin"
if(e.match(w))return"attribute"
if(e.match(m))return"number"
if(e.match(g))return"number"
if(e.match(v))return"number"
if(e.match(y))return"number"
if(e.match(k))return"property"
if(p.indexOf(r)>-1)return e.next(),"operator"
if(h.indexOf(r)>-1)return e.next(),e.match(".."),"punctuation"
if(r=e.match(/("{3}|"|')/)){var a=i(r[0])
return t.tokenize.push(a),a(e,t)}if(e.match(b)){var s=e.current()
return f.hasOwnProperty(s)?"variable-2":d.hasOwnProperty(s)?"atom":c.hasOwnProperty(s)?(u.hasOwnProperty(s)&&(t.prev="define"),"keyword"):"define"==n?"def":"variable"}return e.next(),null}function r(){var e=0
return function(t,r,i){var o=n(t,r,i)
if("punctuation"==o)if("("==t.current())++e
else if(")"==t.current()){if(0==e)return t.backUp(1),r.tokenize.pop(),r.tokenize[r.tokenize.length-1](t,r);--e}return o}}function i(e){var t=1==e.length
return function(n,i){for(var o,a=!1;o=n.next();)if(a){if("("==o)return i.tokenize.push(r()),"string"
a=!1}else{if(n.match(e))return i.tokenize.pop(),"string"
a="\\"==o}return t&&i.tokenize.pop(),"string"}}function o(e,t){for(var n;;){if(e.match(/^[^\/*]+/,!0),n=e.next(),!n)break
"/"===n&&e.eat("*")?t.tokenize.push(o):"*"===n&&e.eat("/")&&t.tokenize.pop()}return"comment"}function a(e,t,n){this.prev=e,this.align=t,this.indented=n}function s(e,t){var n=t.match(/^\s*($|\/[\/\*])/,!1)?null:t.column()+1
e.context=new a(e.context,n,e.indented)}function l(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}var c=t(["_","var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","catch","do","rethrows","throw","throws","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),u=t(["var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),d=t(["true","false","nil","self","super","_"]),f=t(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),p="+-/*%=|&<>~^?!",h=":;,.(){}[]",m=/^\-?0b[01][01_]*/,g=/^\-?0o[0-7][0-7_]*/,v=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,y=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,b=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,k=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,x=/^\#[A-Za-z]+/,w=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/
e.defineMode("swift",function(e){return{startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var r=t.prev
t.prev=null
var i=t.tokenize[t.tokenize.length-1]||n,o=i(e,t,r)
if(o&&"comment"!=o?t.prev||(t.prev=o):t.prev=r,"punctuation"==o){var a=/[\(\[\{]|([\]\)\}])/.exec(e.current())
a&&(a[1]?l:s)(t,e)}return o},indent:function(t,n){var r=t.context
if(!r)return 0
var i=/^[\]\}\)]/.test(n)
return null!=r.align?r.align-(i?1:0):r.indented+(i?0:e.indentUnit)},electricInput:/^\s*[\)\}\]]$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace",closeBrackets:"()[]{}''\"\"``"}}),e.defineMIME("text/x-swift","swift")}),function(e){"use strict"
"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../addon/mode/overlay"),require("../xml/xml"),require("../javascript/javascript"),require("../coffeescript/coffeescript"),require("../css/css"),require("../sass/sass"),require("../stylus/stylus"),require("../pug/pug"),require("../handlebars/handlebars")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../addon/mode/overlay","../xml/xml","../javascript/javascript","../coffeescript/coffeescript","../css/css","../sass/sass","../stylus/stylus","../pug/pug","../handlebars/handlebars"],e):e(CodeMirror)}(function(e){var t={script:[["lang",/coffee(script)?/,"coffeescript"],["type",/^(?:text|application)\/(?:x-)?coffee(?:script)?$/,"coffeescript"],["lang",/^babel$/,"javascript"],["type",/^text\/babel$/,"javascript"],["type",/^text\/ecmascript-\d+$/,"javascript"]],style:[["lang",/^stylus$/i,"stylus"],["lang",/^sass$/i,"sass"],["lang",/^less$/i,"text/x-less"],["lang",/^scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?styl(us)?$/i,"stylus"],["type",/^text\/sass/i,"sass"],["type",/^(text\/)?(x-)?scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?less$/i,"text/x-less"]],template:[["lang",/^vue-template$/i,"vue"],["lang",/^pug$/i,"pug"],["lang",/^handlebars$/i,"handlebars"],["type",/^(text\/)?(x-)?pug$/i,"pug"],["type",/^text\/x-handlebars-template$/i,"handlebars"],[null,null,"vue-template"]]}
e.defineMode("vue-template",function(t,n){var r={token:function(e){if(e.match(/^\{\{.*?\}\}/))return"meta mustache"
for(;e.next()&&!e.match("{{",!1););return null}}
return e.overlayMode(e.getMode(t,n.backdrop||"text/html"),r)}),e.defineMode("vue",function(n){return e.getMode(n,{name:"htmlmixed",tags:t})},"htmlmixed","xml","javascript","coffeescript","css","sass","stylus","pug","handlebars"),e.defineMIME("script/x-vue","vue"),e.defineMIME("text/x-vue","vue")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("yaml",function(){var e=["true","false","on","off","yes","no"],t=new RegExp("\\b(("+e.join(")|(")+"))$","i")
return{token:function(e,n){var r=e.peek(),i=n.escaped
if(n.escaped=!1,"#"==r&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment"
if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string"
if(n.literal&&e.indentation()>n.keyCol)return e.skipToEnd(),"string"
if(n.literal&&(n.literal=!1),e.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,e.match(/---/))return"def"
if(e.match(/\.\.\./))return"def"
if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==r?n.inlinePairs++:"}"==r?n.inlinePairs--:"["==r?n.inlineList++:n.inlineList--,"meta"
if(n.inlineList>0&&!i&&","==r)return e.next(),"meta"
if(n.inlinePairs>0&&!i&&","==r)return n.keyCol=0,n.pair=!1,n.pairStart=!1,e.next(),"meta"
if(n.pairStart){if(e.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta"
if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2"
if(0==n.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number"
if(n.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number"
if(e.match(t))return"keyword"}return!n.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=e.indentation(),"atom"):n.pair&&e.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped="\\"==r,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}}),e.defineMIME("text/x-yaml","yaml"),e.defineMIME("text/yaml","yaml")}),function(){"use strict"
!function(e){e.defineMode("better-markdown",function(t,n){var r=function(e){return e.codeBlock?"line-code-block":null},i={startState:function(){return{codeBlock:!1}},copyState:function(e){return{codeBlock:e.codeBlock}},token:function(e,t){return t.codeBlock?e.match(/^```+/)?(t.codeBlock=!1,"line-code-block-end"):(e.skipToEnd(),r(t)):e.sol()&&e.match(/^```+/)?(e.skipToEnd(),t.codeBlock=!0,"line-code-block-start"):(e.next(),r(t))},blankLine:r},o={highlightFormatting:!0,tokenTypeOverrides:{code:"code"}}
for(var a in n)o[a]=n[a]
return o.name="gfm",e.overlayMode(e.getMode(t,o),i,!0)},"markdown"),e.defineMIME("text/x-better-markdown","better-markdown")}(window.CodeMirror),CodeMirror.defineMode("solidity",function(){var e=["address","bool","string","var","int","int8","int16","int24","int32","int40","int48","int56","int64","int72","int80","int88","int96","int104","int112","int120","int128","int136","int144","int152","int160","int168","int176","int184","int192","int200","int208","int216","int224","int232","int240","int248","int256","uint","uint8","uint16","uint24","uint32","uint40","uint48","uint56","uint64","uint72","uint80","uint88","uint96","uint104","uint112","uint120","uint128","uint136","uint144","uint152","uint160","uint168","uint176","uint184","uint192","uint200","uint208","uint216","uint224","uint232","uint240","uint248","uint256","byte","bytes","bytes1","bytes2","bytes3","bytes4","bytes5","bytes6","bytes7","bytes8","bytes9","bytes10","bytes11","bytes12","bytes13","bytes14","bytes15","bytes16","bytes17","bytes18","bytes19","bytes20","bytes21","bytes22","bytes23","bytes24","bytes25","bytes26","bytes27","bytes28","bytes29","bytes30","bytes31","bytes32","wei","szabo","finney","ether","seconds","minutes","hours","days","weeks","years"],t=["anonymous","as","constant","else","event","external","for","from","if","import","indexed","internal","memory","new","payable","pragma","private","public","pure","require","return","returns","storage","this","view","while"],n=new RegExp("("+e.join("|")+")\\b"),r=new RegExp("("+t.join("|")+")\\b")
return{startState:function(){return{blockDeclaration:!1,variableDeclaration:!1,structVariableDeclaration:!1,insideComment:!1}},copyState:function(e){return{blockDeclaration:e.blockDeclaration,variableDeclaration:e.variableDeclaration,structVariableDeclaration:e.structVariableDeclaration,insideComment:e.insideComment}},token:function(e,t){if(e.match(/\/\*/))return t.insideComment=!0,"comment"
if(t.insideComment)return e.match(/.*?\*\//)?t.insideComment=!1:e.next(),"comment"
if(e.match(/\/\/.*/))return"comment"
if(e.match(/"(?:[^\\]|\\.)*?(?:"|$)/)||e.match(/'(?:[^\\]|\\.)*?(?:'|$)/))return"string"
if("."===e.peek())return t.property=!0,e.next(),null
if(t.structVariableDeclaration&&e.match(/[\w$]+\s*:/))return e.backUp(1),"property"
if(e.match(/\(\s*{/))return t.structVariableDeclaration=!0,null
if(e.match(/}\s*\)/))return t.structVariableDeclaration=!1,null
if(t.property){if(t.property=!1,e.eatWhile(/[a-zA-Z$_][\w$]*/))return"property"
e.next()}if(e.match(n))return t.mappingDeclaration||(t.variableDeclaration=!0),"type"
if(e.match(r))return"keyword"
if(e.match(/mapping\b/))return t.mappingDeclaration=!0,"keyword"
if(e.match(/(contract|modifier|function|library|struct|enum)\b/))return t.blockDeclaration=!0,"keyword"
if(t.variableDeclaration){if(!/[^A-Za-z0-9_$ ]/.test(e.peek()))return e.next(),"variable"
t.variableDeclaration=!1}if(e.match(/[A-Z][a-z_$]*[\w$]*\s*/))return"("===e.peek()?"variable":(t.mappingDeclaration||(t.variableDeclaration=!0),"variable-3")
if(t.mappingDeclaration&&")"===e.peek())return e.next(),t.mappingDeclaration=!1,t.mappingName=!0,null
if(t.mappingName){if(!/[^A-Za-z0-9_$ ]/.test(e.peek()))return e.next(),"variable"
t.mappingName=!1}return e.match(/true|false/)?"atom":t.blockDeclaration&&e.match(/.+?(?=({|\())/)?(t.blockDeclaration=!1,"variable"):e.match(/[a-zA-Z_$][\w$]*/)?"variable":e.match(/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i)?"number":(e.next(),null)}}})}()

//# sourceMappingURL=shared-codemirror.min-b661ae0d.js.map
