function Ju(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(n,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();function Zu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ss={exports:{}},go={},Ns={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var an=Symbol.for("react.element"),qu=Symbol.for("react.portal"),ed=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),nd=Symbol.for("react.provider"),od=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),ad=Symbol.for("react.memo"),sd=Symbol.for("react.lazy"),na=Symbol.iterator;function cd(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var Es={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cs=Object.assign,zs={};function mr(e,t,r){this.props=e,this.context=t,this.refs=zs,this.updater=r||Es}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ps(){}Ps.prototype=mr.prototype;function li(e,t,r){this.props=e,this.context=t,this.refs=zs,this.updater=r||Es}var ii=li.prototype=new Ps;ii.constructor=li;Cs(ii,mr.prototype);ii.isPureReactComponent=!0;var oa=Array.isArray,_s=Object.prototype.hasOwnProperty,ai={current:null},Ls={key:!0,ref:!0,__self:!0,__source:!0};function Rs(e,t,r){var n,o={},l=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)_s.call(t,n)&&!Ls.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:an,type:e,key:l,ref:a,props:o,_owner:ai.current}}function ud(e,t){return{$$typeof:an,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function si(e){return typeof e=="object"&&e!==null&&e.$$typeof===an}function dd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var la=/\/+/g;function Ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dd(""+e.key):t.toString(36)}function Rn(e,t,r,n,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case an:case qu:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+Ao(a,0):n,oa(o)?(r="",e!=null&&(r=e.replace(la,"$&/")+"/"),Rn(o,t,r,"",function(u){return u})):o!=null&&(si(o)&&(o=ud(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(la,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",oa(e))for(var s=0;s<e.length;s++){l=e[s];var c=n+Ao(l,s);a+=Rn(l,t,r,c,o)}else if(c=cd(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=n+Ao(l,s++),a+=Rn(l,t,r,c,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function hn(e,t,r){if(e==null)return e;var n=[],o=0;return Rn(e,n,"","",function(l){return t.call(r,l,o++)}),n}function fd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Tn={transition:null},pd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Tn,ReactCurrentOwner:ai};function Ts(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:hn,forEach:function(e,t,r){hn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return hn(e,function(){t++}),t},toArray:function(e){return hn(e,function(t){return t})||[]},only:function(e){if(!si(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=mr;T.Fragment=ed;T.Profiler=rd;T.PureComponent=li;T.StrictMode=td;T.Suspense=id;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pd;T.act=Ts;T.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Cs({},e.props),o=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=ai.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)_s.call(t,c)&&!Ls.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:an,type:e.type,key:o,ref:l,props:n,_owner:a}};T.createContext=function(e){return e={$$typeof:od,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nd,_context:e},e.Consumer=e};T.createElement=Rs;T.createFactory=function(e){var t=Rs.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:ld,render:e}};T.isValidElement=si;T.lazy=function(e){return{$$typeof:sd,_payload:{_status:-1,_result:e},_init:fd}};T.memo=function(e,t){return{$$typeof:ad,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Tn.transition;Tn.transition={};try{e()}finally{Tn.transition=t}};T.unstable_act=Ts;T.useCallback=function(e,t){return de.current.useCallback(e,t)};T.useContext=function(e){return de.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return de.current.useDeferredValue(e)};T.useEffect=function(e,t){return de.current.useEffect(e,t)};T.useId=function(){return de.current.useId()};T.useImperativeHandle=function(e,t,r){return de.current.useImperativeHandle(e,t,r)};T.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return de.current.useMemo(e,t)};T.useReducer=function(e,t,r){return de.current.useReducer(e,t,r)};T.useRef=function(e){return de.current.useRef(e)};T.useState=function(e){return de.current.useState(e)};T.useSyncExternalStore=function(e,t,r){return de.current.useSyncExternalStore(e,t,r)};T.useTransition=function(){return de.current.useTransition()};T.version="18.3.1";Ns.exports=T;var j=Ns.exports;const md=Zu(j),hd=Ju({__proto__:null,default:md},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=j,vd=Symbol.for("react.element"),yd=Symbol.for("react.fragment"),xd=Object.prototype.hasOwnProperty,wd=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kd={key:!0,ref:!0,__self:!0,__source:!0};function Is(e,t,r){var n,o={},l=null,a=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)xd.call(t,n)&&!kd.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:vd,type:e,key:l,ref:a,props:o,_owner:wd.current}}go.Fragment=yd;go.jsx=Is;go.jsxs=Is;Ss.exports=go;var i=Ss.exports,Ms={exports:{}},je={},As={exports:{}},Os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,_){var L=E.length;E.push(_);e:for(;0<L;){var Q=L-1>>>1,q=E[Q];if(0<o(q,_))E[Q]=_,E[L]=q,L=Q;else break e}}function r(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var _=E[0],L=E.pop();if(L!==_){E[0]=L;e:for(var Q=0,q=E.length,pn=q>>>1;Q<pn;){var jt=2*(Q+1)-1,Mo=E[jt],bt=jt+1,mn=E[bt];if(0>o(Mo,L))bt<q&&0>o(mn,Mo)?(E[Q]=mn,E[bt]=L,Q=bt):(E[Q]=Mo,E[jt]=L,Q=jt);else if(bt<q&&0>o(mn,L))E[Q]=mn,E[bt]=L,Q=bt;else break e}}return _}function o(E,_){var L=E.sortIndex-_.sortIndex;return L!==0?L:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],h=1,m=null,g=3,y=!1,x=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var _=r(u);_!==null;){if(_.callback===null)n(u);else if(_.startTime<=E)n(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=r(u)}}function v(E){if(w=!1,p(E),!x)if(r(c)!==null)x=!0,To(b);else{var _=r(u);_!==null&&Io(v,_.startTime-E)}}function b(E,_){x=!1,w&&(w=!1,f(P),P=-1),y=!0;var L=g;try{for(p(_),m=r(c);m!==null&&(!(m.expirationTime>_)||E&&!_e());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,g=m.priorityLevel;var q=Q(m.expirationTime<=_);_=e.unstable_now(),typeof q=="function"?m.callback=q:m===r(c)&&n(c),p(_)}else n(c);m=r(c)}if(m!==null)var pn=!0;else{var jt=r(u);jt!==null&&Io(v,jt.startTime-_),pn=!1}return pn}finally{m=null,g=L,y=!1}}var C=!1,z=null,P=-1,G=5,I=-1;function _e(){return!(e.unstable_now()-I<G)}function yr(){if(z!==null){var E=e.unstable_now();I=E;var _=!0;try{_=z(!0,E)}finally{_?xr():(C=!1,z=null)}}else C=!1}var xr;if(typeof d=="function")xr=function(){d(yr)};else if(typeof MessageChannel<"u"){var ra=new MessageChannel,Xu=ra.port2;ra.port1.onmessage=yr,xr=function(){Xu.postMessage(null)}}else xr=function(){S(yr,0)};function To(E){z=E,C||(C=!0,xr())}function Io(E,_){P=S(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,To(b))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var L=g;g=_;try{return E()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=g;g=E;try{return _()}finally{g=L}},e.unstable_scheduleCallback=function(E,_,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,E){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=L+q,E={id:h++,callback:_,priorityLevel:E,startTime:L,expirationTime:q,sortIndex:-1},L>Q?(E.sortIndex=L,t(u,E),r(c)===null&&E===r(u)&&(w?(f(P),P=-1):w=!0,Io(v,L-Q))):(E.sortIndex=q,t(c,E),x||y||(x=!0,To(b))),E},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(E){var _=g;return function(){var L=g;g=_;try{return E.apply(this,arguments)}finally{g=L}}}})(Os);As.exports=Os;var jd=As.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=j,ke=jd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ds=new Set,Br={};function Ot(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Br[e]=t,e=0;e<t.length;e++)Ds.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,Sd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},aa={};function Nd(e){return ul.call(aa,e)?!0:ul.call(ia,e)?!1:Sd.test(e)?aa[e]=!0:(ia[e]=!0,!1)}function Ed(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cd(e,t,r,n){if(t===null||typeof t>"u"||Ed(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,r,n,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ci=/[\-:]([a-z])/g;function ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ci,ui);oe[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ci,ui);oe[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ci,ui);oe[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function di(e,t,r,n){var o=oe.hasOwnProperty(t)?oe[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cd(t,r,o,n)&&(r=null),n||o===null?Nd(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var qe=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gn=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),fi=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Fs=Symbol.for("react.provider"),Us=Symbol.for("react.context"),pi=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),mi=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Bs=Symbol.for("react.offscreen"),sa=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Oo;function zr(e){if(Oo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var Do=!1;function Fo(e,t){if(!e||Do)return"";Do=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=n.stack.split(`
`),a=o.length-1,s=l.length-1;1<=a&&0<=s&&o[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==l[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Do=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?zr(e):""}function zd(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=Fo(e.type,!1),e;case 11:return e=Fo(e.type.render,!1),e;case 1:return e=Fo(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Vt:return"Portal";case dl:return"Profiler";case fi:return"StrictMode";case fl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Us:return(e.displayName||"Context")+".Consumer";case Fs:return(e._context.displayName||"Context")+".Provider";case pi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mi:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function Pd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===fi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _d(e){var t=Hs(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vn(e){e._valueTracker||(e._valueTracker=_d(e))}function Vs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Hs(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hl(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ca(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=vt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ws(e,t){t=t.checked,t!=null&&di(e,"checked",t,!1)}function gl(e,t){Ws(e,t);var r=vt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,r):t.hasOwnProperty("defaultValue")&&vl(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ua(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function vl(e,t,r){(t!=="number"||Wn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Pr=Array.isArray;function tr(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+vt(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(k(92));if(Pr(r)){if(1<r.length)throw Error(k(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:vt(r)}}function $s(e,t){var r=vt(t.value),n=vt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yn,Qs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yn=yn||document.createElement("div"),yn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ld=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){Ld.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function Ks(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function Ys(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=Ks(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var Rd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(Rd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,rr=null,nr=null;function pa(e){if(e=un(e)){if(typeof bl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=ko(t),bl(e.stateNode,e.type,t))}}function Xs(e){rr?nr?nr.push(e):nr=[e]:rr=e}function Js(){if(rr){var e=rr,t=nr;if(nr=rr=null,pa(e),t)for(e=0;e<t.length;e++)pa(t[e])}}function Zs(e,t){return e(t)}function qs(){}var Uo=!1;function ec(e,t,r){if(Uo)return e(t,r);Uo=!0;try{return Zs(e,t,r)}finally{Uo=!1,(rr!==null||nr!==null)&&(qs(),Js())}}function Vr(e,t){var r=e.stateNode;if(r===null)return null;var n=ko(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(k(231,t,typeof r));return r}var Sl=!1;if(Ye)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Sl=!1}function Td(e,t,r,n,o,l,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var Tr=!1,$n=null,Gn=!1,Nl=null,Id={onError:function(e){Tr=!0,$n=e}};function Md(e,t,r,n,o,l,a,s,c){Tr=!1,$n=null,Td.apply(Id,arguments)}function Ad(e,t,r,n,o,l,a,s,c){if(Md.apply(this,arguments),Tr){if(Tr){var u=$n;Tr=!1,$n=null}else throw Error(k(198));Gn||(Gn=!0,Nl=u)}}function Dt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function tc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ma(e){if(Dt(e)!==e)throw Error(k(188))}function Od(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var l=o.alternate;if(l===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===r)return ma(o),e;if(l===n)return ma(o),t;l=l.sibling}throw Error(k(188))}if(r.return!==n.return)r=o,n=l;else{for(var a=!1,s=o.child;s;){if(s===r){a=!0,r=o,n=l;break}if(s===n){a=!0,n=o,r=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===r){a=!0,r=l,n=o;break}if(s===n){a=!0,n=l,r=o;break}s=s.sibling}if(!a)throw Error(k(189))}}if(r.alternate!==n)throw Error(k(190))}if(r.tag!==3)throw Error(k(188));return r.stateNode.current===r?e:t}function rc(e){return e=Od(e),e!==null?nc(e):null}function nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nc(e);if(t!==null)return t;e=e.sibling}return null}var oc=ke.unstable_scheduleCallback,ha=ke.unstable_cancelCallback,Dd=ke.unstable_shouldYield,Fd=ke.unstable_requestPaint,K=ke.unstable_now,Ud=ke.unstable_getCurrentPriorityLevel,gi=ke.unstable_ImmediatePriority,lc=ke.unstable_UserBlockingPriority,Qn=ke.unstable_NormalPriority,Bd=ke.unstable_LowPriority,ic=ke.unstable_IdlePriority,vo=null,He=null;function Hd(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:$d,Vd=Math.log,Wd=Math.LN2;function $d(e){return e>>>=0,e===0?32:31-(Vd(e)/Wd|0)|0}var xn=64,wn=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kn(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,l=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~o;s!==0?n=_r(s):(l&=a,l!==0&&(n=_r(l)))}else a=r&~o,a!==0?n=_r(a):l!==0&&(n=_r(l));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ae(t),o=1<<r,n|=e[r],t&=~o;return n}function Gd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Ae(l),s=1<<a,c=o[a];c===-1?(!(s&r)||s&n)&&(o[a]=Gd(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ac(){var e=xn;return xn<<=1,!(xn&4194240)&&(xn=64),e}function Bo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function sn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=r}function Kd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Ae(r),l=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~l}}function vi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ae(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var A=0;function sc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cc,yi,uc,dc,fc,Cl=!1,kn=[],st=null,ct=null,ut=null,Wr=new Map,$r=new Map,nt=[],Yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ga(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function jr(e,t,r,n,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[o]},t!==null&&(t=un(t),t!==null&&yi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Xd(e,t,r,n,o){switch(t){case"focusin":return st=jr(st,e,t,r,n,o),!0;case"dragenter":return ct=jr(ct,e,t,r,n,o),!0;case"mouseover":return ut=jr(ut,e,t,r,n,o),!0;case"pointerover":var l=o.pointerId;return Wr.set(l,jr(Wr.get(l)||null,e,t,r,n,o)),!0;case"gotpointercapture":return l=o.pointerId,$r.set(l,jr($r.get(l)||null,e,t,r,n,o)),!0}return!1}function pc(e){var t=Ct(e.target);if(t!==null){var r=Dt(t);if(r!==null){if(t=r.tag,t===13){if(t=tc(r),t!==null){e.blockedOn=t,fc(e.priority,function(){uc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function In(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);jl=n,r.target.dispatchEvent(n),jl=null}else return t=un(r),t!==null&&yi(t),e.blockedOn=r,!1;t.shift()}return!0}function va(e,t,r){In(e)&&r.delete(t)}function Jd(){Cl=!1,st!==null&&In(st)&&(st=null),ct!==null&&In(ct)&&(ct=null),ut!==null&&In(ut)&&(ut=null),Wr.forEach(va),$r.forEach(va)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Jd)))}function Gr(e){function t(o){return br(o,e)}if(0<kn.length){br(kn[0],e);for(var r=1;r<kn.length;r++){var n=kn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(st!==null&&br(st,e),ct!==null&&br(ct,e),ut!==null&&br(ut,e),Wr.forEach(t),$r.forEach(t),r=0;r<nt.length;r++)n=nt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<nt.length&&(r=nt[0],r.blockedOn===null);)pc(r),r.blockedOn===null&&nt.shift()}var or=qe.ReactCurrentBatchConfig,Yn=!0;function Zd(e,t,r,n){var o=A,l=or.transition;or.transition=null;try{A=1,xi(e,t,r,n)}finally{A=o,or.transition=l}}function qd(e,t,r,n){var o=A,l=or.transition;or.transition=null;try{A=4,xi(e,t,r,n)}finally{A=o,or.transition=l}}function xi(e,t,r,n){if(Yn){var o=zl(e,t,r,n);if(o===null)Jo(e,t,n,Xn,r),ga(e,n);else if(Xd(o,e,t,r,n))n.stopPropagation();else if(ga(e,n),t&4&&-1<Yd.indexOf(e)){for(;o!==null;){var l=un(o);if(l!==null&&cc(l),l=zl(e,t,r,n),l===null&&Jo(e,t,n,Xn,r),l===o)break;o=l}o!==null&&n.stopPropagation()}else Jo(e,t,n,null,r)}}var Xn=null;function zl(e,t,r,n){if(Xn=null,e=hi(n),e=Ct(e),e!==null)if(t=Dt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=tc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xn=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ud()){case gi:return 1;case lc:return 4;case Qn:case Bd:return 16;case ic:return 536870912;default:return 16}default:return 16}}var lt=null,wi=null,Mn=null;function hc(){if(Mn)return Mn;var e,t=wi,r=t.length,n,o="value"in lt?lt.value:lt.textContent,l=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[l-n];n++);return Mn=o.slice(e,1<n?1-n:void 0)}function An(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jn(){return!0}function ya(){return!1}function be(e){function t(r,n,o,l,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?jn:ya,this.isPropagationStopped=ya,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=be(hr),cn=W({},hr,{view:0,detail:0}),ef=be(cn),Ho,Vo,Sr,yo=W({},cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(Ho=e.screenX-Sr.screenX,Vo=e.screenY-Sr.screenY):Vo=Ho=0,Sr=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),xa=be(yo),tf=W({},yo,{dataTransfer:0}),rf=be(tf),nf=W({},cn,{relatedTarget:0}),Wo=be(nf),of=W({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=be(of),af=W({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=be(af),cf=W({},hr,{data:0}),wa=be(cf),uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ff[e])?!!t[e]:!1}function ji(){return pf}var mf=W({},cn,{key:function(e){if(e.key){var t=uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=An(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?An(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?An(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hf=be(mf),gf=W({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ka=be(gf),vf=W({},cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),yf=be(vf),xf=W({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wf=be(xf),kf=W({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jf=be(kf),bf=[9,13,27,32],bi=Ye&&"CompositionEvent"in window,Ir=null;Ye&&"documentMode"in document&&(Ir=document.documentMode);var Sf=Ye&&"TextEvent"in window&&!Ir,gc=Ye&&(!bi||Ir&&8<Ir&&11>=Ir),ja=" ",ba=!1;function vc(e,t){switch(e){case"keyup":return bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Nf(e,t){switch(e){case"compositionend":return yc(t);case"keypress":return t.which!==32?null:(ba=!0,ja);case"textInput":return e=t.data,e===ja&&ba?null:e;default:return null}}function Ef(e,t){if($t)return e==="compositionend"||!bi&&vc(e,t)?(e=hc(),Mn=wi=lt=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gc&&t.locale!=="ko"?null:t.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cf[e.type]:t==="textarea"}function xc(e,t,r,n){Xs(n),t=Jn(t,"onChange"),0<t.length&&(r=new ki("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Mr=null,Qr=null;function zf(e){_c(e,0)}function xo(e){var t=Kt(e);if(Vs(t))return e}function Pf(e,t){if(e==="change")return t}var wc=!1;if(Ye){var $o;if(Ye){var Go="oninput"in document;if(!Go){var Na=document.createElement("div");Na.setAttribute("oninput","return;"),Go=typeof Na.oninput=="function"}$o=Go}else $o=!1;wc=$o&&(!document.documentMode||9<document.documentMode)}function Ea(){Mr&&(Mr.detachEvent("onpropertychange",kc),Qr=Mr=null)}function kc(e){if(e.propertyName==="value"&&xo(Qr)){var t=[];xc(t,Qr,e,hi(e)),ec(zf,t)}}function _f(e,t,r){e==="focusin"?(Ea(),Mr=t,Qr=r,Mr.attachEvent("onpropertychange",kc)):e==="focusout"&&Ea()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Qr)}function Rf(e,t){if(e==="click")return xo(t)}function Tf(e,t){if(e==="input"||e==="change")return xo(t)}function If(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:If;function Kr(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!ul.call(t,o)||!De(e[o],t[o]))return!1}return!0}function Ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var r=Ca(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ca(r)}}function jc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bc(){for(var e=window,t=Wn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Wn(e.document)}return t}function Si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mf(e){var t=bc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&jc(r.ownerDocument.documentElement,r)){if(n!==null&&Si(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,l=Math.min(n.start,o);n=n.end===void 0?l:Math.min(n.end,o),!e.extend&&l>n&&(o=n,n=l,l=o),o=za(r,l);var a=za(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=Ye&&"documentMode"in document&&11>=document.documentMode,Gt=null,Pl=null,Ar=null,_l=!1;function Pa(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_l||Gt==null||Gt!==Wn(n)||(n=Gt,"selectionStart"in n&&Si(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ar&&Kr(Ar,n)||(Ar=n,n=Jn(Pl,"onSelect"),0<n.length&&(t=new ki("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Gt)))}function bn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Qt={animationend:bn("Animation","AnimationEnd"),animationiteration:bn("Animation","AnimationIteration"),animationstart:bn("Animation","AnimationStart"),transitionend:bn("Transition","TransitionEnd")},Qo={},Sc={};Ye&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function wo(e){if(Qo[e])return Qo[e];if(!Qt[e])return e;var t=Qt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Sc)return Qo[e]=t[r];return e}var Nc=wo("animationend"),Ec=wo("animationiteration"),Cc=wo("animationstart"),zc=wo("transitionend"),Pc=new Map,_a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Pc.set(e,t),Ot(t,[e])}for(var Ko=0;Ko<_a.length;Ko++){var Yo=_a[Ko],Of=Yo.toLowerCase(),Df=Yo[0].toUpperCase()+Yo.slice(1);xt(Of,"on"+Df)}xt(Nc,"onAnimationEnd");xt(Ec,"onAnimationIteration");xt(Cc,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(zc,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function La(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ad(n,t,void 0,e),e.currentTarget=null}function _c(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==l&&o.isPropagationStopped())break e;La(o,s,u),l=c}else for(a=0;a<n.length;a++){if(s=n[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==l&&o.isPropagationStopped())break e;La(o,s,u),l=c}}}if(Gn)throw e=Nl,Gn=!1,Nl=null,e}function D(e,t){var r=t[Ml];r===void 0&&(r=t[Ml]=new Set);var n=e+"__bubble";r.has(n)||(Lc(t,e,2,!1),r.add(n))}function Xo(e,t,r){var n=0;t&&(n|=4),Lc(r,e,n,t)}var Sn="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[Sn]){e[Sn]=!0,Ds.forEach(function(r){r!=="selectionchange"&&(Ff.has(r)||Xo(r,!1,e),Xo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sn]||(t[Sn]=!0,Xo("selectionchange",!1,t))}}function Lc(e,t,r,n){switch(mc(t)){case 1:var o=Zd;break;case 4:o=qd;break;default:o=xi}r=o.bind(null,t,r,e),o=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Jo(e,t,r,n,o){var l=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ct(s),a===null)return;if(c=a.tag,c===5||c===6){n=l=a;continue e}s=s.parentNode}}n=n.return}ec(function(){var u=l,h=hi(r),m=[];e:{var g=Pc.get(e);if(g!==void 0){var y=ki,x=e;switch(e){case"keypress":if(An(r)===0)break e;case"keydown":case"keyup":y=hf;break;case"focusin":x="focus",y=Wo;break;case"focusout":x="blur",y=Wo;break;case"beforeblur":case"afterblur":y=Wo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=yf;break;case Nc:case Ec:case Cc:y=lf;break;case zc:y=wf;break;case"scroll":y=ef;break;case"wheel":y=jf;break;case"copy":case"cut":case"paste":y=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ka}var w=(t&4)!==0,S=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Vr(d,f),v!=null&&w.push(Xr(d,v,p)))),S)break;d=d.return}0<w.length&&(g=new y(g,x,null,r,h),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==jl&&(x=r.relatedTarget||r.fromElement)&&(Ct(x)||x[Xe]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=r.relatedTarget||r.toElement,y=u,x=x?Ct(x):null,x!==null&&(S=Dt(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(w=xa,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ka,v="onPointerLeave",f="onPointerEnter",d="pointer"),S=y==null?g:Kt(y),p=x==null?g:Kt(x),g=new w(v,d+"leave",y,r,h),g.target=S,g.relatedTarget=p,v=null,Ct(h)===u&&(w=new w(f,d+"enter",x,r,h),w.target=p,w.relatedTarget=S,v=w),S=v,y&&x)t:{for(w=y,f=x,d=0,p=w;p;p=Ht(p))d++;for(p=0,v=f;v;v=Ht(v))p++;for(;0<d-p;)w=Ht(w),d--;for(;0<p-d;)f=Ht(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Ht(w),f=Ht(f)}w=null}else w=null;y!==null&&Ra(m,g,y,w,!1),x!==null&&S!==null&&Ra(m,S,x,w,!0)}}e:{if(g=u?Kt(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var b=Pf;else if(Sa(g))if(wc)b=Tf;else{b=Lf;var C=_f}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=Rf);if(b&&(b=b(e,u))){xc(m,b,r,h);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&vl(g,"number",g.value)}switch(C=u?Kt(u):window,e){case"focusin":(Sa(C)||C.contentEditable==="true")&&(Gt=C,Pl=u,Ar=null);break;case"focusout":Ar=Pl=Gt=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Pa(m,r,h);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":Pa(m,r,h)}var z;if(bi)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $t?vc(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(gc&&r.locale!=="ko"&&($t||P!=="onCompositionStart"?P==="onCompositionEnd"&&$t&&(z=hc()):(lt=h,wi="value"in lt?lt.value:lt.textContent,$t=!0)),C=Jn(u,P),0<C.length&&(P=new wa(P,e,null,r,h),m.push({event:P,listeners:C}),z?P.data=z:(z=yc(r),z!==null&&(P.data=z)))),(z=Sf?Nf(e,r):Ef(e,r))&&(u=Jn(u,"onBeforeInput"),0<u.length&&(h=new wa("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:u}),h.data=z))}_c(m,t)})}function Xr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Jn(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Vr(e,r),l!=null&&n.unshift(Xr(e,l,o)),l=Vr(e,t),l!=null&&n.push(Xr(e,l,o))),e=e.return}return n}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ra(e,t,r,n,o){for(var l=t._reactName,a=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,o?(c=Vr(r,l),c!=null&&a.unshift(Xr(r,c,s))):o||(c=Vr(r,l),c!=null&&a.push(Xr(r,c,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Uf=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function Ta(e){return(typeof e=="string"?e:""+e).replace(Uf,`
`).replace(Bf,"")}function Nn(e,t,r){if(t=Ta(t),Ta(e)!==t&&r)throw Error(k(425))}function Zn(){}var Ll=null,Rl=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,Ia=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ia<"u"?function(e){return Ia.resolve(null).then(e).catch(Wf)}:Il;function Wf(e){setTimeout(function(){throw e})}function Zo(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Gr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Gr(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),Be="__reactFiber$"+gr,Jr="__reactProps$"+gr,Xe="__reactContainer$"+gr,Ml="__reactEvents$"+gr,$f="__reactListeners$"+gr,Gf="__reactHandles$"+gr;function Ct(e){var t=e[Be];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Xe]||r[Be]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ma(e);e!==null;){if(r=e[Be])return r;e=Ma(e)}return t}e=r,r=e.parentNode}return null}function un(e){return e=e[Be]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ko(e){return e[Jr]||null}var Al=[],Yt=-1;function wt(e){return{current:e}}function F(e){0>Yt||(e.current=Al[Yt],Al[Yt]=null,Yt--)}function O(e,t){Yt++,Al[Yt]=e.current,e.current=t}var yt={},se=wt(yt),he=wt(!1),Rt=yt;function sr(e,t){var r=e.type.contextTypes;if(!r)return yt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in r)o[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ge(e){return e=e.childContextTypes,e!=null}function qn(){F(he),F(se)}function Aa(e,t,r){if(se.current!==yt)throw Error(k(168));O(se,t),O(he,r)}function Rc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(k(108,Pd(e)||"Unknown",o));return W({},r,n)}function eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Rt=se.current,O(se,e),O(he,he.current),!0}function Oa(e,t,r){var n=e.stateNode;if(!n)throw Error(k(169));r?(e=Rc(e,t,Rt),n.__reactInternalMemoizedMergedChildContext=e,F(he),F(se),O(se,e)):F(he),O(he,r)}var $e=null,jo=!1,qo=!1;function Tc(e){$e===null?$e=[e]:$e.push(e)}function Qf(e){jo=!0,Tc(e)}function kt(){if(!qo&&$e!==null){qo=!0;var e=0,t=A;try{var r=$e;for(A=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}$e=null,jo=!1}catch(o){throw $e!==null&&($e=$e.slice(e+1)),oc(gi,kt),o}finally{A=t,qo=!1}}return null}var Xt=[],Jt=0,to=null,ro=0,Se=[],Ne=0,Tt=null,Ge=1,Qe="";function St(e,t){Xt[Jt++]=ro,Xt[Jt++]=to,to=e,ro=t}function Ic(e,t,r){Se[Ne++]=Ge,Se[Ne++]=Qe,Se[Ne++]=Tt,Tt=e;var n=Ge;e=Qe;var o=32-Ae(n)-1;n&=~(1<<o),r+=1;var l=32-Ae(t)+o;if(30<l){var a=o-o%5;l=(n&(1<<a)-1).toString(32),n>>=a,o-=a,Ge=1<<32-Ae(t)+o|r<<o|n,Qe=l+e}else Ge=1<<l|r<<o|n,Qe=e}function Ni(e){e.return!==null&&(St(e,1),Ic(e,1,0))}function Ei(e){for(;e===to;)to=Xt[--Jt],Xt[Jt]=null,ro=Xt[--Jt],Xt[Jt]=null;for(;e===Tt;)Tt=Se[--Ne],Se[Ne]=null,Qe=Se[--Ne],Se[Ne]=null,Ge=Se[--Ne],Se[Ne]=null}var we=null,xe=null,U=!1,Ie=null;function Mc(e,t){var r=Ee(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Da(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,xe=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Tt!==null?{id:Ge,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ee(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,we=e,xe=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(U){var t=xe;if(t){var r=t;if(!Da(e,t)){if(Ol(e))throw Error(k(418));t=dt(r.nextSibling);var n=we;t&&Da(e,t)?Mc(n,r):(e.flags=e.flags&-4097|2,U=!1,we=e)}}else{if(Ol(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,we=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function En(e){if(e!==we)return!1;if(!U)return Fa(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=xe)){if(Ol(e))throw Ac(),Error(k(418));for(;t;)Mc(e,t),t=dt(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){xe=dt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=we?dt(e.stateNode.nextSibling):null;return!0}function Ac(){for(var e=xe;e;)e=dt(e.nextSibling)}function cr(){xe=we=null,U=!1}function Ci(e){Ie===null?Ie=[e]:Ie.push(e)}var Kf=qe.ReactCurrentBatchConfig;function Nr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(k(309));var n=r.stateNode}if(!n)throw Error(k(147,e));var o=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=o.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!r._owner)throw Error(k(290,e))}return e}function Cn(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function Oc(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=ht(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,v){return d===null||d.tag!==6?(d=il(p,f.mode,v),d.return=f,d):(d=o(d,p),d.return=f,d)}function c(f,d,p,v){var b=p.type;return b===Wt?h(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tt&&Ua(b)===d.type)?(v=o(d,p.props),v.ref=Nr(f,d,p),v.return=f,v):(v=Vn(p.type,p.key,p.props,null,f.mode,v),v.ref=Nr(f,d,p),v.return=f,v)}function u(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=al(p,f.mode,v),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function h(f,d,p,v,b){return d===null||d.tag!==7?(d=Lt(p,f.mode,v,b),d.return=f,d):(d=o(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=il(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gn:return p=Vn(d.type,d.key,d.props,null,f.mode,p),p.ref=Nr(f,null,d),p.return=f,p;case Vt:return d=al(d,f.mode,p),d.return=f,d;case tt:var v=d._init;return m(f,v(d._payload),p)}if(Pr(d)||wr(d))return d=Lt(d,f.mode,p,null),d.return=f,d;Cn(f,d)}return null}function g(f,d,p,v){var b=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:s(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gn:return p.key===b?c(f,d,p,v):null;case Vt:return p.key===b?u(f,d,p,v):null;case tt:return b=p._init,g(f,d,b(p._payload),v)}if(Pr(p)||wr(p))return b!==null?null:h(f,d,p,v,null);Cn(f,p)}return null}function y(f,d,p,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(d,f,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gn:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,b);case Vt:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,b);case tt:var C=v._init;return y(f,d,p,C(v._payload),b)}if(Pr(v)||wr(v))return f=f.get(p)||null,h(d,f,v,b,null);Cn(d,v)}return null}function x(f,d,p,v){for(var b=null,C=null,z=d,P=d=0,G=null;z!==null&&P<p.length;P++){z.index>P?(G=z,z=null):G=z.sibling;var I=g(f,z,p[P],v);if(I===null){z===null&&(z=G);break}e&&z&&I.alternate===null&&t(f,z),d=l(I,d,P),C===null?b=I:C.sibling=I,C=I,z=G}if(P===p.length)return r(f,z),U&&St(f,P),b;if(z===null){for(;P<p.length;P++)z=m(f,p[P],v),z!==null&&(d=l(z,d,P),C===null?b=z:C.sibling=z,C=z);return U&&St(f,P),b}for(z=n(f,z);P<p.length;P++)G=y(z,f,P,p[P],v),G!==null&&(e&&G.alternate!==null&&z.delete(G.key===null?P:G.key),d=l(G,d,P),C===null?b=G:C.sibling=G,C=G);return e&&z.forEach(function(_e){return t(f,_e)}),U&&St(f,P),b}function w(f,d,p,v){var b=wr(p);if(typeof b!="function")throw Error(k(150));if(p=b.call(p),p==null)throw Error(k(151));for(var C=b=null,z=d,P=d=0,G=null,I=p.next();z!==null&&!I.done;P++,I=p.next()){z.index>P?(G=z,z=null):G=z.sibling;var _e=g(f,z,I.value,v);if(_e===null){z===null&&(z=G);break}e&&z&&_e.alternate===null&&t(f,z),d=l(_e,d,P),C===null?b=_e:C.sibling=_e,C=_e,z=G}if(I.done)return r(f,z),U&&St(f,P),b;if(z===null){for(;!I.done;P++,I=p.next())I=m(f,I.value,v),I!==null&&(d=l(I,d,P),C===null?b=I:C.sibling=I,C=I);return U&&St(f,P),b}for(z=n(f,z);!I.done;P++,I=p.next())I=y(z,f,P,I.value,v),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?P:I.key),d=l(I,d,P),C===null?b=I:C.sibling=I,C=I);return e&&z.forEach(function(yr){return t(f,yr)}),U&&St(f,P),b}function S(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case gn:e:{for(var b=p.key,C=d;C!==null;){if(C.key===b){if(b=p.type,b===Wt){if(C.tag===7){r(f,C.sibling),d=o(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tt&&Ua(b)===C.type){r(f,C.sibling),d=o(C,p.props),d.ref=Nr(f,C,p),d.return=f,f=d;break e}r(f,C);break}else t(f,C);C=C.sibling}p.type===Wt?(d=Lt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Vn(p.type,p.key,p.props,null,f.mode,v),v.ref=Nr(f,d,p),v.return=f,f=v)}return a(f);case Vt:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=al(p,f.mode,v),d.return=f,f=d}return a(f);case tt:return C=p._init,S(f,d,C(p._payload),v)}if(Pr(p))return x(f,d,p,v);if(wr(p))return w(f,d,p,v);Cn(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(f,d.sibling),d=o(d,p),d.return=f,f=d):(r(f,d),d=il(p,f.mode,v),d.return=f,f=d),a(f)):r(f,d)}return S}var ur=Oc(!0),Dc=Oc(!1),no=wt(null),oo=null,Zt=null,zi=null;function Pi(){zi=Zt=oo=null}function _i(e){var t=no.current;F(no),e._currentValue=t}function Fl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function lr(e,t){oo=e,zi=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(oo===null)throw Error(k(308));Zt=e,oo.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var zt=null;function Li(e){zt===null?zt=[e]:zt.push(e)}function Fc(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Li(t)):(r.next=o.next,o.next=r),t.interleaved=r,Je(e,n)}function Je(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var rt=!1;function Ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,M&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Je(e,r)}return o=n.interleaved,o===null?(t.next=t,Li(n)):(t.next=o.next,o.next=t),n.interleaved=t,Je(e,r)}function On(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,vi(e,r)}}function Ba(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?o=l=a:l=l.next=a,r=r.next}while(r!==null);l===null?o=l=t:l=l.next=t}else o=l=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function lo(e,t,r,n){var o=e.updateQueue;rt=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?l=u:a.next=u,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=c))}if(l!==null){var m=o.baseState;a=0,h=u=c=null,s=l;do{var g=s.lane,y=s.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(g=t,y=r,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(y,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(y,m,g):x,g==null)break e;m=W({},m,g);break e;case 2:rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=y,c=m):h=h.next=y,a|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(h===null&&(c=m),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Mt|=a,e.lanes=a,e.memoizedState=m}}function Ha(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(k(191,o));o.call(n)}}}var dn={},Ve=wt(dn),Zr=wt(dn),qr=wt(dn);function Pt(e){if(e===dn)throw Error(k(174));return e}function Ti(e,t){switch(O(qr,t),O(Zr,e),O(Ve,dn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}F(Ve),O(Ve,t)}function dr(){F(Ve),F(Zr),F(qr)}function Bc(e){Pt(qr.current);var t=Pt(Ve.current),r=xl(t,e.type);t!==r&&(O(Zr,e),O(Ve,r))}function Ii(e){Zr.current===e&&(F(Ve),F(Zr))}var B=wt(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function Mi(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Dn=qe.ReactCurrentDispatcher,tl=qe.ReactCurrentBatchConfig,It=0,V=null,J=null,ee=null,ao=!1,Or=!1,en=0,Yf=0;function le(){throw Error(k(321))}function Ai(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!De(e[r],t[r]))return!1;return!0}function Oi(e,t,r,n,o,l){if(It=l,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dn.current=e===null||e.memoizedState===null?qf:ep,e=r(n,o),Or){l=0;do{if(Or=!1,en=0,25<=l)throw Error(k(301));l+=1,ee=J=null,t.updateQueue=null,Dn.current=tp,e=r(n,o)}while(Or)}if(Dn.current=so,t=J!==null&&J.next!==null,It=0,ee=J=V=null,ao=!1,t)throw Error(k(300));return e}function Di(){var e=en!==0;return en=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function Pe(){if(J===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?V.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function tn(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=Pe(),r=t.queue;if(r===null)throw Error(k(311));r.lastRenderedReducer=e;var n=J,o=n.baseQueue,l=r.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}n.baseQueue=o=l,r.pending=null}if(o!==null){l=o.next,n=n.baseState;var s=a=null,c=null,u=l;do{var h=u.lane;if((It&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=m,a=n):c=c.next=m,V.lanes|=h,Mt|=h}u=u.next}while(u!==null&&u!==l);c===null?a=n:c.next=s,De(n,t.memoizedState)||(me=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do l=o.lane,V.lanes|=l,Mt|=l,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function nl(e){var t=Pe(),r=t.queue;if(r===null)throw Error(k(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,l=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);De(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function Hc(){}function Vc(e,t){var r=V,n=Pe(),o=t(),l=!De(n.memoizedState,o);if(l&&(n.memoizedState=o,me=!0),n=n.queue,Fi(Gc.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(r.flags|=2048,rn(9,$c.bind(null,r,n,o,t),void 0,null),te===null)throw Error(k(349));It&30||Wc(r,t,o)}return o}function Wc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function $c(e,t,r,n){t.value=r,t.getSnapshot=n,Qc(t)&&Kc(e)}function Gc(e,t,r){return r(function(){Qc(t)&&Kc(e)})}function Qc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!De(e,r)}catch{return!0}}function Kc(e){var t=Je(e,1);t!==null&&Oe(t,e,1,-1)}function Va(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:e},t.queue=e,e=e.dispatch=Zf.bind(null,V,e),[t.memoizedState,e]}function rn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Yc(){return Pe().memoizedState}function Fn(e,t,r,n){var o=Ue();V.flags|=e,o.memoizedState=rn(1|t,r,void 0,n===void 0?null:n)}function bo(e,t,r,n){var o=Pe();n=n===void 0?null:n;var l=void 0;if(J!==null){var a=J.memoizedState;if(l=a.destroy,n!==null&&Ai(n,a.deps)){o.memoizedState=rn(t,r,l,n);return}}V.flags|=e,o.memoizedState=rn(1|t,r,l,n)}function Wa(e,t){return Fn(8390656,8,e,t)}function Fi(e,t){return bo(2048,8,e,t)}function Xc(e,t){return bo(4,2,e,t)}function Jc(e,t){return bo(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qc(e,t,r){return r=r!=null?r.concat([e]):null,bo(4,4,Zc.bind(null,t,e),r)}function Ui(){}function eu(e,t){var r=Pe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ai(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function tu(e,t){var r=Pe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ai(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ru(e,t,r){return It&21?(De(r,t)||(r=ac(),V.lanes|=r,Mt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=r)}function Xf(e,t){var r=A;A=r!==0&&4>r?r:4,e(!0);var n=tl.transition;tl.transition={};try{e(!1),t()}finally{A=r,tl.transition=n}}function nu(){return Pe().memoizedState}function Jf(e,t,r){var n=mt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ou(e))lu(t,r);else if(r=Fc(e,t,r,n),r!==null){var o=ue();Oe(r,e,n,o),iu(r,t,n)}}function Zf(e,t,r){var n=mt(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ou(e))lu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,r);if(o.hasEagerState=!0,o.eagerState=s,De(s,a)){var c=t.interleaved;c===null?(o.next=o,Li(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}r=Fc(e,t,o,n),r!==null&&(o=ue(),Oe(r,e,n,o),iu(r,t,n))}}function ou(e){var t=e.alternate;return e===V||t!==null&&t===V}function lu(e,t){Or=ao=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function iu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,vi(e,r)}}var so={readContext:ze,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},qf={readContext:ze,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Wa,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Fn(4194308,4,Zc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Fn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fn(4,2,e,t)},useMemo:function(e,t){var r=Ue();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ue();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Jf.bind(null,V,e),[n.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Va,useDebugValue:Ui,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Va(!1),t=e[0];return e=Xf.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=V,o=Ue();if(U){if(r===void 0)throw Error(k(407));r=r()}else{if(r=t(),te===null)throw Error(k(349));It&30||Wc(n,t,r)}o.memoizedState=r;var l={value:r,getSnapshot:t};return o.queue=l,Wa(Gc.bind(null,n,l,e),[e]),n.flags|=2048,rn(9,$c.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Ue(),t=te.identifierPrefix;if(U){var r=Qe,n=Ge;r=(n&~(1<<32-Ae(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=en++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Yf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ep={readContext:ze,useCallback:eu,useContext:ze,useEffect:Fi,useImperativeHandle:qc,useInsertionEffect:Xc,useLayoutEffect:Jc,useMemo:tu,useReducer:rl,useRef:Yc,useState:function(){return rl(tn)},useDebugValue:Ui,useDeferredValue:function(e){var t=Pe();return ru(t,J.memoizedState,e)},useTransition:function(){var e=rl(tn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Vc,useId:nu,unstable_isNewReconciler:!1},tp={readContext:ze,useCallback:eu,useContext:ze,useEffect:Fi,useImperativeHandle:qc,useInsertionEffect:Xc,useLayoutEffect:Jc,useMemo:tu,useReducer:nl,useRef:Yc,useState:function(){return nl(tn)},useDebugValue:Ui,useDeferredValue:function(e){var t=Pe();return J===null?t.memoizedState=e:ru(t,J.memoizedState,e)},useTransition:function(){var e=nl(tn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Vc,useId:nu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ul(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var So={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ue(),o=mt(e),l=Ke(n,o);l.payload=t,r!=null&&(l.callback=r),t=ft(e,l,o),t!==null&&(Oe(t,e,o,n),On(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ue(),o=mt(e),l=Ke(n,o);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=ft(e,l,o),t!==null&&(Oe(t,e,o,n),On(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ue(),n=mt(e),o=Ke(r,n);o.tag=2,t!=null&&(o.callback=t),t=ft(e,o,n),t!==null&&(Oe(t,e,n,r),On(t,e,n))}};function $a(e,t,r,n,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,a):t.prototype&&t.prototype.isPureReactComponent?!Kr(r,n)||!Kr(o,l):!0}function au(e,t,r){var n=!1,o=yt,l=t.contextType;return typeof l=="object"&&l!==null?l=ze(l):(o=ge(t)?Rt:se.current,n=t.contextTypes,l=(n=n!=null)?sr(e,o):yt),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ga(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function Bl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Ri(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ze(l):(l=ge(t)?Rt:se.current,o.context=sr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ul(e,t,l,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&So.enqueueReplaceState(o,o.state,null),lo(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var r="",n=t;do r+=zd(n),n=n.return;while(n);var o=r}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var rp=typeof WeakMap=="function"?WeakMap:Map;function su(e,t,r){r=Ke(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){uo||(uo=!0,Zl=n),Hl(e,t)},r}function cu(e,t,r){r=Ke(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Hl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Hl(e,t),typeof n!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Qa(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new rp;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=gp.bind(null,e,t,r),t.then(e,e))}function Ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ya(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ke(-1,1),t.tag=2,ft(r,t,1))),r.lanes|=1),e)}var np=qe.ReactCurrentOwner,me=!1;function ce(e,t,r,n){t.child=e===null?Dc(t,null,r,n):ur(t,e.child,r,n)}function Xa(e,t,r,n,o){r=r.render;var l=t.ref;return lr(t,o),n=Oi(e,t,r,n,l,o),r=Di(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(U&&r&&Ni(t),t.flags|=1,ce(e,t,n,o),t.child)}function Ja(e,t,r,n,o){if(e===null){var l=r.type;return typeof l=="function"&&!Ki(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,uu(e,t,l,n,o)):(e=Vn(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var a=l.memoizedProps;if(r=r.compare,r=r!==null?r:Kr,r(a,n)&&e.ref===t.ref)return Ze(e,t,o)}return t.flags|=1,e=ht(l,n),e.ref=t.ref,e.return=t,t.child=e}function uu(e,t,r,n,o){if(e!==null){var l=e.memoizedProps;if(Kr(l,n)&&e.ref===t.ref)if(me=!1,t.pendingProps=n=l,(e.lanes&o)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ze(e,t,o)}return Vl(e,t,r,n,o)}function du(e,t,r){var n=t.pendingProps,o=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(er,ye),ye|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(er,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,O(er,ye),ye|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,O(er,ye),ye|=n;return ce(e,t,o,r),t.child}function fu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,r,n,o){var l=ge(r)?Rt:se.current;return l=sr(t,l),lr(t,o),r=Oi(e,t,r,n,l,o),n=Di(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(U&&n&&Ni(t),t.flags|=1,ce(e,t,r,o),t.child)}function Za(e,t,r,n,o){if(ge(r)){var l=!0;eo(t)}else l=!1;if(lr(t,o),t.stateNode===null)Un(e,t),au(t,r,n),Bl(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=ge(r)?Rt:se.current,u=sr(t,u));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||c!==u)&&Ga(t,a,n,u),rt=!1;var g=t.memoizedState;a.state=g,lo(t,n,a,o),c=t.memoizedState,s!==n||g!==c||he.current||rt?(typeof h=="function"&&(Ul(t,r,h,n),c=t.memoizedState),(s=rt||$a(t,r,s,n,g,c,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=u,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Uc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Re(t.type,s),a.props=u,m=t.pendingProps,g=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=ze(c):(c=ge(r)?Rt:se.current,c=sr(t,c));var y=r.getDerivedStateFromProps;(h=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||g!==c)&&Ga(t,a,n,c),rt=!1,g=t.memoizedState,a.state=g,lo(t,n,a,o);var x=t.memoizedState;s!==m||g!==x||he.current||rt?(typeof y=="function"&&(Ul(t,r,y,n),x=t.memoizedState),(u=rt||$a(t,r,u,n,g,x,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=c,n=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return Wl(e,t,r,n,l,o)}function Wl(e,t,r,n,o,l){fu(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&Oa(t,r,!1),Ze(e,t,l);n=t.stateNode,np.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=ur(t,e.child,null,l),t.child=ur(t,null,s,l)):ce(e,t,s,l),t.memoizedState=n.state,o&&Oa(t,r,!0),t.child}function pu(e){var t=e.stateNode;t.pendingContext?Aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Aa(e,t.context,!1),Ti(e,t.containerInfo)}function qa(e,t,r,n,o){return cr(),Ci(o),t.flags|=256,ce(e,t,r,n),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function mu(e,t,r){var n=t.pendingProps,o=B.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),O(B,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,l?(n=t.mode,l=t.child,a={mode:"hidden",children:a},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Co(a,n,0,null),e=Lt(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Gl(r),t.memoizedState=$l,e):Bi(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return op(e,t,a,n,s,o,r);if(l){l=n.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:n.children};return!(a&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=ht(o,c),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=ht(s,l):(l=Lt(l,a,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,a=e.child.memoizedState,a=a===null?Gl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~r,t.memoizedState=$l,n}return l=e.child,e=l.sibling,n=ht(l,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Bi(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zn(e,t,r,n){return n!==null&&Ci(n),ur(t,e.child,null,r),e=Bi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function op(e,t,r,n,o,l,a){if(r)return t.flags&256?(t.flags&=-257,n=ol(Error(k(422))),zn(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,o=t.mode,n=Co({mode:"visible",children:n.children},o,0,null),l=Lt(l,o,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,t.mode&1&&ur(t,e.child,null,a),t.child.memoizedState=Gl(a),t.memoizedState=$l,l);if(!(t.mode&1))return zn(e,t,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,l=Error(k(419)),n=ol(l,n,void 0),zn(e,t,a,n)}if(s=(a&e.childLanes)!==0,me||s){if(n=te,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|a)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Je(e,o),Oe(n,e,o,-1))}return Qi(),n=ol(Error(k(421))),zn(e,t,a,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=vp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,xe=dt(o.nextSibling),we=t,U=!0,Ie=null,e!==null&&(Se[Ne++]=Ge,Se[Ne++]=Qe,Se[Ne++]=Tt,Ge=e.id,Qe=e.overflow,Tt=t),t=Bi(t,n.children),t.flags|=4096,t)}function es(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Fl(e.return,t,r)}function ll(e,t,r,n,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=o)}function hu(e,t,r){var n=t.pendingProps,o=n.revealOrder,l=n.tail;if(ce(e,t,n.children,r),n=B.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&es(e,r,t);else if(e.tag===19)es(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(O(B,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&io(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),ll(t,!1,o,r,l);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&io(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ll(t,!0,r,null,l);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Un(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,r=ht(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ht(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function lp(e,t,r){switch(t.tag){case 3:pu(t),cr();break;case 5:Bc(t);break;case 1:ge(t.type)&&eo(t);break;case 4:Ti(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;O(no,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(O(B,B.current&1),t.flags|=128,null):r&t.child.childLanes?mu(e,t,r):(O(B,B.current&1),e=Ze(e,t,r),e!==null?e.sibling:null);O(B,B.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return hu(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),O(B,B.current),n)break;return null;case 22:case 23:return t.lanes=0,du(e,t,r)}return Ze(e,t,r)}var gu,Ql,vu,yu;gu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ql=function(){};vu=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Pt(Ve.current);var l=null;switch(r){case"input":o=hl(e,o),n=hl(e,n),l=[];break;case"select":o=W({},o,{value:void 0}),n=W({},n,{value:void 0}),l=[];break;case"textarea":o=yl(e,o),n=yl(e,n),l=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Zn)}wl(r,n);var a;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Br.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in n){var c=n[u];if(s=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(l||(l=[]),l.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Br.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&D("scroll",e),l||s===c||(l=[])):(l=l||[]).push(u,c))}r&&(l=l||[]).push("style",r);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};yu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Er(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function ip(e,t,r){var n=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ge(t.type)&&qn(),ie(t),null;case 3:return n=t.stateNode,dr(),F(he),F(se),Mi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(En(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(ti(Ie),Ie=null))),Ql(e,t),ie(t),null;case 5:Ii(t);var o=Pt(qr.current);if(r=t.type,e!==null&&t.stateNode!=null)vu(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(k(166));return ie(t),null}if(e=Pt(Ve.current),En(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Be]=t,n[Jr]=l,e=(t.mode&1)!==0,r){case"dialog":D("cancel",n),D("close",n);break;case"iframe":case"object":case"embed":D("load",n);break;case"video":case"audio":for(o=0;o<Lr.length;o++)D(Lr[o],n);break;case"source":D("error",n);break;case"img":case"image":case"link":D("error",n),D("load",n);break;case"details":D("toggle",n);break;case"input":ca(n,l),D("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},D("invalid",n);break;case"textarea":da(n,l),D("invalid",n)}wl(r,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?n.textContent!==s&&(l.suppressHydrationWarning!==!0&&Nn(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Nn(n.textContent,s,e),o=["children",""+s]):Br.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&D("scroll",n)}switch(r){case"input":vn(n),ua(n,l,!0);break;case"textarea":vn(n),fa(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Zn)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Be]=t,e[Jr]=n,gu(e,t,!1,!1),t.stateNode=e;e:{switch(a=kl(r,n),r){case"dialog":D("cancel",e),D("close",e),o=n;break;case"iframe":case"object":case"embed":D("load",e),o=n;break;case"video":case"audio":for(o=0;o<Lr.length;o++)D(Lr[o],e);o=n;break;case"source":D("error",e),o=n;break;case"img":case"image":case"link":D("error",e),D("load",e),o=n;break;case"details":D("toggle",e),o=n;break;case"input":ca(e,n),o=hl(e,n),D("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=W({},n,{value:void 0}),D("invalid",e);break;case"textarea":da(e,n),o=yl(e,n),D("invalid",e);break;default:o=n}wl(r,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?Ys(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Qs(e,c)):l==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Hr(e,c):typeof c=="number"&&Hr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Br.hasOwnProperty(l)?c!=null&&l==="onScroll"&&D("scroll",e):c!=null&&di(e,l,c,a))}switch(r){case"input":vn(e),ua(e,n,!1);break;case"textarea":vn(e),fa(e);break;case"option":n.value!=null&&e.setAttribute("value",""+vt(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?tr(e,!!n.multiple,l,!1):n.defaultValue!=null&&tr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)yu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(k(166));if(r=Pt(qr.current),Pt(Ve.current),En(t)){if(n=t.stateNode,r=t.memoizedProps,n[Be]=t,(l=n.nodeValue!==r)&&(e=we,e!==null))switch(e.tag){case 3:Nn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nn(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Be]=t,t.stateNode=n}return ie(t),null;case 13:if(F(B),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&xe!==null&&t.mode&1&&!(t.flags&128))Ac(),cr(),t.flags|=98560,l=!1;else if(l=En(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Be]=t}else cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),l=!1}else Ie!==null&&(ti(Ie),Ie=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):Qi())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return dr(),Ql(e,t),e===null&&Yr(t.stateNode.containerInfo),ie(t),null;case 10:return _i(t.type._context),ie(t),null;case 17:return ge(t.type)&&qn(),ie(t),null;case 19:if(F(B),l=t.memoizedState,l===null)return ie(t),null;if(n=(t.flags&128)!==0,a=l.rendering,a===null)if(n)Er(l,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=io(e),a!==null){for(t.flags|=128,Er(l,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return O(B,B.current&1|2),t.child}e=e.sibling}l.tail!==null&&K()>pr&&(t.flags|=128,n=!0,Er(l,!1),t.lanes=4194304)}else{if(!n)if(e=io(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Er(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!U)return ie(t),null}else 2*K()-l.renderingStartTime>pr&&r!==1073741824&&(t.flags|=128,n=!0,Er(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(r=l.last,r!==null?r.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=K(),t.sibling=null,r=B.current,O(B,n?r&1|2:r&1),t):(ie(t),null);case 22:case 23:return Gi(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ye&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function ap(e,t){switch(Ei(t),t.tag){case 1:return ge(t.type)&&qn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),F(he),F(se),Mi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ii(t),null;case 13:if(F(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(B),null;case 4:return dr(),null;case 10:return _i(t.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var Pn=!1,ae=!1,sp=typeof WeakSet=="function"?WeakSet:Set,N=null;function qt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){$(e,t,n)}else r.current=null}function Kl(e,t,r){try{r()}catch(n){$(e,t,n)}}var ts=!1;function cp(e,t){if(Ll=Yn,e=bc(),Si(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var a=0,s=-1,c=-1,u=0,h=0,m=e,g=null;t:for(;;){for(var y;m!==r||o!==0&&m.nodeType!==3||(s=a+o),m!==l||n!==0&&m.nodeType!==3||(c=a+n),m.nodeType===3&&(a+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===r&&++u===o&&(s=a),g===l&&++h===n&&(c=a),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rl={focusedElem:e,selectionRange:r},Yn=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,S=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Re(t.type,w),S);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){$(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=ts,ts=!1,x}function Dr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Kl(t,r,l)}o=o.next}while(o!==n)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Yl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function xu(e){var t=e.alternate;t!==null&&(e.alternate=null,xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Jr],delete t[Ml],delete t[$f],delete t[Gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wu(e){return e.tag===5||e.tag===3||e.tag===4}function rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Zn));else if(n!==4&&(e=e.child,e!==null))for(Xl(e,t,r),e=e.sibling;e!==null;)Xl(e,t,r),e=e.sibling}function Jl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Jl(e,t,r),e=e.sibling;e!==null;)Jl(e,t,r),e=e.sibling}var re=null,Te=!1;function et(e,t,r){for(r=r.child;r!==null;)ku(e,t,r),r=r.sibling}function ku(e,t,r){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(vo,r)}catch{}switch(r.tag){case 5:ae||qt(r,t);case 6:var n=re,o=Te;re=null,et(e,t,r),re=n,Te=o,re!==null&&(Te?(e=re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):re.removeChild(r.stateNode));break;case 18:re!==null&&(Te?(e=re,r=r.stateNode,e.nodeType===8?Zo(e.parentNode,r):e.nodeType===1&&Zo(e,r),Gr(e)):Zo(re,r.stateNode));break;case 4:n=re,o=Te,re=r.stateNode.containerInfo,Te=!0,et(e,t,r),re=n,Te=o;break;case 0:case 11:case 14:case 15:if(!ae&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Kl(r,t,a),o=o.next}while(o!==n)}et(e,t,r);break;case 1:if(!ae&&(qt(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){$(r,t,s)}et(e,t,r);break;case 21:et(e,t,r);break;case 22:r.mode&1?(ae=(n=ae)||r.memoizedState!==null,et(e,t,r),ae=n):et(e,t,r);break;default:et(e,t,r)}}function ns(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new sp),t.forEach(function(n){var o=yp.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Le(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Te=!1;break e;case 3:re=s.stateNode.containerInfo,Te=!0;break e;case 4:re=s.stateNode.containerInfo,Te=!0;break e}s=s.return}if(re===null)throw Error(k(160));ku(l,a,o),re=null,Te=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){$(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ju(t,e),t=t.sibling}function ju(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Fe(e),n&4){try{Dr(3,e,e.return),No(3,e)}catch(w){$(e,e.return,w)}try{Dr(5,e,e.return)}catch(w){$(e,e.return,w)}}break;case 1:Le(t,e),Fe(e),n&512&&r!==null&&qt(r,r.return);break;case 5:if(Le(t,e),Fe(e),n&512&&r!==null&&qt(r,r.return),e.flags&32){var o=e.stateNode;try{Hr(o,"")}catch(w){$(e,e.return,w)}}if(n&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=r!==null?r.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Ws(o,l),kl(s,a);var u=kl(s,l);for(a=0;a<c.length;a+=2){var h=c[a],m=c[a+1];h==="style"?Ys(o,m):h==="dangerouslySetInnerHTML"?Qs(o,m):h==="children"?Hr(o,m):di(o,h,m,u)}switch(s){case"input":gl(o,l);break;case"textarea":$s(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?tr(o,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?tr(o,!!l.multiple,l.defaultValue,!0):tr(o,!!l.multiple,l.multiple?[]:"",!1))}o[Jr]=l}catch(w){$(e,e.return,w)}}break;case 6:if(Le(t,e),Fe(e),n&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(w){$(e,e.return,w)}}break;case 3:if(Le(t,e),Fe(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(w){$(e,e.return,w)}break;case 4:Le(t,e),Fe(e);break;case 13:Le(t,e),Fe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Wi=K())),n&4&&ns(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(ae=(u=ae)||h,Le(t,e),ae=u):Le(t,e),Fe(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(m=N=h;N!==null;){switch(g=N,y=g.child,g.tag){case 0:case 11:case 14:case 15:Dr(4,g,g.return);break;case 1:qt(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){$(n,r,w)}}break;case 5:qt(g,g.return);break;case 22:if(g.memoizedState!==null){ls(m);continue}}y!==null?(y.return=g,N=y):ls(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Ks("display",a))}catch(w){$(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){$(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),Fe(e),n&4&&ns(e);break;case 21:break;default:Le(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(wu(r)){var n=r;break e}r=r.return}throw Error(k(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Hr(o,""),n.flags&=-33);var l=rs(e);Jl(e,l,o);break;case 3:case 4:var a=n.stateNode.containerInfo,s=rs(e);Xl(e,s,a);break;default:throw Error(k(161))}}catch(c){$(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function up(e,t,r){N=e,bu(e)}function bu(e,t,r){for(var n=(e.mode&1)!==0;N!==null;){var o=N,l=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||Pn;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||ae;s=Pn;var u=ae;if(Pn=a,(ae=c)&&!u)for(N=o;N!==null;)a=N,c=a.child,a.tag===22&&a.memoizedState!==null?is(o):c!==null?(c.return=a,N=c):is(o);for(;l!==null;)N=l,bu(l),l=l.sibling;N=o,Pn=s,ae=u}os(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,N=l):os(e)}}function os(e){for(;N!==null;){var t=N;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||No(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ae)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Re(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ha(t,l,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ha(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Gr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||t.flags&512&&Yl(t)}catch(g){$(t,t.return,g)}}if(t===e){N=null;break}if(r=t.sibling,r!==null){r.return=t.return,N=r;break}N=t.return}}function ls(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var r=t.sibling;if(r!==null){r.return=t.return,N=r;break}N=t.return}}function is(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{No(4,t)}catch(c){$(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(c){$(t,o,c)}}var l=t.return;try{Yl(t)}catch(c){$(t,l,c)}break;case 5:var a=t.return;try{Yl(t)}catch(c){$(t,a,c)}}}catch(c){$(t,t.return,c)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var dp=Math.ceil,co=qe.ReactCurrentDispatcher,Hi=qe.ReactCurrentOwner,Ce=qe.ReactCurrentBatchConfig,M=0,te=null,Y=null,ne=0,ye=0,er=wt(0),Z=0,nn=null,Mt=0,Eo=0,Vi=0,Fr=null,pe=null,Wi=0,pr=1/0,We=null,uo=!1,Zl=null,pt=null,_n=!1,it=null,fo=0,Ur=0,ql=null,Bn=-1,Hn=0;function ue(){return M&6?K():Bn!==-1?Bn:Bn=K()}function mt(e){return e.mode&1?M&2&&ne!==0?ne&-ne:Kf.transition!==null?(Hn===0&&(Hn=ac()),Hn):(e=A,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e):1}function Oe(e,t,r,n){if(50<Ur)throw Ur=0,ql=null,Error(k(185));sn(e,r,n),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Eo|=r),Z===4&&ot(e,ne)),ve(e,n),r===1&&M===0&&!(t.mode&1)&&(pr=K()+500,jo&&kt()))}function ve(e,t){var r=e.callbackNode;Qd(e,t);var n=Kn(e,e===te?ne:0);if(n===0)r!==null&&ha(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ha(r),t===1)e.tag===0?Qf(as.bind(null,e)):Tc(as.bind(null,e)),Vf(function(){!(M&6)&&kt()}),r=null;else{switch(sc(n)){case 1:r=gi;break;case 4:r=lc;break;case 16:r=Qn;break;case 536870912:r=ic;break;default:r=Qn}r=Lu(r,Su.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Su(e,t){if(Bn=-1,Hn=0,M&6)throw Error(k(327));var r=e.callbackNode;if(ir()&&e.callbackNode!==r)return null;var n=Kn(e,e===te?ne:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=po(e,n);else{t=n;var o=M;M|=2;var l=Eu();(te!==e||ne!==t)&&(We=null,pr=K()+500,_t(e,t));do try{mp();break}catch(s){Nu(e,s)}while(!0);Pi(),co.current=l,M=o,Y!==null?t=0:(te=null,ne=0,t=Z)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(n=o,t=ei(e,o))),t===1)throw r=nn,_t(e,0),ot(e,n),ve(e,K()),r;if(t===6)ot(e,n);else{if(o=e.current.alternate,!(n&30)&&!fp(o)&&(t=po(e,n),t===2&&(l=El(e),l!==0&&(n=l,t=ei(e,l))),t===1))throw r=nn,_t(e,0),ot(e,n),ve(e,K()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(k(345));case 2:Nt(e,pe,We);break;case 3:if(ot(e,n),(n&130023424)===n&&(t=Wi+500-K(),10<t)){if(Kn(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Il(Nt.bind(null,e,pe,We),t);break}Nt(e,pe,We);break;case 4:if(ot(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-Ae(n);l=1<<a,a=t[a],a>o&&(o=a),n&=~l}if(n=o,n=K()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*dp(n/1960))-n,10<n){e.timeoutHandle=Il(Nt.bind(null,e,pe,We),n);break}Nt(e,pe,We);break;case 5:Nt(e,pe,We);break;default:throw Error(k(329))}}}return ve(e,K()),e.callbackNode===r?Su.bind(null,e):null}function ei(e,t){var r=Fr;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=po(e,t),e!==2&&(t=pe,pe=r,t!==null&&ti(t)),e}function ti(e){pe===null?pe=e:pe.push.apply(pe,e)}function fp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],l=o.getSnapshot;o=o.value;try{if(!De(l(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~Vi,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ae(t),n=1<<r;e[r]=-1,t&=~n}}function as(e){if(M&6)throw Error(k(327));ir();var t=Kn(e,0);if(!(t&1))return ve(e,K()),null;var r=po(e,t);if(e.tag!==0&&r===2){var n=El(e);n!==0&&(t=n,r=ei(e,n))}if(r===1)throw r=nn,_t(e,0),ot(e,t),ve(e,K()),r;if(r===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,pe,We),ve(e,K()),null}function $i(e,t){var r=M;M|=1;try{return e(t)}finally{M=r,M===0&&(pr=K()+500,jo&&kt())}}function At(e){it!==null&&it.tag===0&&!(M&6)&&ir();var t=M;M|=1;var r=Ce.transition,n=A;try{if(Ce.transition=null,A=1,e)return e()}finally{A=n,Ce.transition=r,M=t,!(M&6)&&kt()}}function Gi(){ye=er.current,F(er)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Hf(r)),Y!==null)for(r=Y.return;r!==null;){var n=r;switch(Ei(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&qn();break;case 3:dr(),F(he),F(se),Mi();break;case 5:Ii(n);break;case 4:dr();break;case 13:F(B);break;case 19:F(B);break;case 10:_i(n.type._context);break;case 22:case 23:Gi()}r=r.return}if(te=e,Y=e=ht(e.current,null),ne=ye=t,Z=0,nn=null,Vi=Eo=Mt=0,pe=Fr=null,zt!==null){for(t=0;t<zt.length;t++)if(r=zt[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,l=r.pending;if(l!==null){var a=l.next;l.next=o,n.next=a}r.pending=n}zt=null}return e}function Nu(e,t){do{var r=Y;try{if(Pi(),Dn.current=so,ao){for(var n=V.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}ao=!1}if(It=0,ee=J=V=null,Or=!1,en=0,Hi.current=null,r===null||r.return===null){Z=1,nn=t,Y=null;break}e:{var l=e,a=r.return,s=r,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Ka(a);if(y!==null){y.flags&=-257,Ya(y,a,s,l,t),y.mode&1&&Qa(l,u,t),t=y,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){Qa(l,u,t),Qi();break e}c=Error(k(426))}}else if(U&&s.mode&1){var S=Ka(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ya(S,a,s,l,t),Ci(fr(c,s));break e}}l=c=fr(c,s),Z!==4&&(Z=2),Fr===null?Fr=[l]:Fr.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=su(l,c,t);Ba(l,f);break e;case 1:s=c;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=cu(l,s,t);Ba(l,v);break e}}l=l.return}while(l!==null)}zu(r)}catch(b){t=b,Y===r&&r!==null&&(Y=r=r.return);continue}break}while(!0)}function Eu(){var e=co.current;return co.current=so,e===null?so:e}function Qi(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(Mt&268435455)&&!(Eo&268435455)||ot(te,ne)}function po(e,t){var r=M;M|=2;var n=Eu();(te!==e||ne!==t)&&(We=null,_t(e,t));do try{pp();break}catch(o){Nu(e,o)}while(!0);if(Pi(),M=r,co.current=n,Y!==null)throw Error(k(261));return te=null,ne=0,Z}function pp(){for(;Y!==null;)Cu(Y)}function mp(){for(;Y!==null&&!Dd();)Cu(Y)}function Cu(e){var t=_u(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?zu(e):Y=t,Hi.current=null}function zu(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=ap(r,t),r!==null){r.flags&=32767,Y=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(r=ip(r,t,ye),r!==null){Y=r;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Z===0&&(Z=5)}function Nt(e,t,r){var n=A,o=Ce.transition;try{Ce.transition=null,A=1,hp(e,t,r,n)}finally{Ce.transition=o,A=n}return null}function hp(e,t,r,n){do ir();while(it!==null);if(M&6)throw Error(k(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Kd(e,l),e===te&&(Y=te=null,ne=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||_n||(_n=!0,Lu(Qn,function(){return ir(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Ce.transition,Ce.transition=null;var a=A;A=1;var s=M;M|=4,Hi.current=null,cp(e,r),ju(r,e),Mf(Rl),Yn=!!Ll,Rl=Ll=null,e.current=r,up(r),Fd(),M=s,A=a,Ce.transition=l}else e.current=r;if(_n&&(_n=!1,it=e,fo=o),l=e.pendingLanes,l===0&&(pt=null),Hd(r.stateNode),ve(e,K()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(uo)throw uo=!1,e=Zl,Zl=null,e;return fo&1&&e.tag!==0&&ir(),l=e.pendingLanes,l&1?e===ql?Ur++:(Ur=0,ql=e):Ur=0,kt(),null}function ir(){if(it!==null){var e=sc(fo),t=Ce.transition,r=A;try{if(Ce.transition=null,A=16>e?16:e,it===null)var n=!1;else{if(e=it,it=null,fo=0,M&6)throw Error(k(331));var o=M;for(M|=4,N=e.current;N!==null;){var l=N,a=l.child;if(N.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(N=u;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Dr(8,h,l)}var m=h.child;if(m!==null)m.return=h,N=m;else for(;N!==null;){h=N;var g=h.sibling,y=h.return;if(xu(h),h===u){N=null;break}if(g!==null){g.return=y,N=g;break}N=y}}}var x=l.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}N=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,N=a;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Dr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,N=f;break e}N=l.return}}var d=e.current;for(N=d;N!==null;){a=N;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,N=p;else e:for(a=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:No(9,s)}}catch(b){$(s,s.return,b)}if(s===a){N=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,N=v;break e}N=s.return}}if(M=o,kt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(vo,e)}catch{}n=!0}return n}finally{A=r,Ce.transition=t}}return!1}function ss(e,t,r){t=fr(r,t),t=su(e,t,1),e=ft(e,t,1),t=ue(),e!==null&&(sn(e,1,t),ve(e,t))}function $(e,t,r){if(e.tag===3)ss(e,e,r);else for(;t!==null;){if(t.tag===3){ss(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pt===null||!pt.has(n))){e=fr(r,e),e=cu(t,e,1),t=ft(t,e,1),e=ue(),t!==null&&(sn(t,1,e),ve(t,e));break}}t=t.return}}function gp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&r,te===e&&(ne&r)===r&&(Z===4||Z===3&&(ne&130023424)===ne&&500>K()-Wi?_t(e,0):Vi|=r),ve(e,t)}function Pu(e,t){t===0&&(e.mode&1?(t=wn,wn<<=1,!(wn&130023424)&&(wn=4194304)):t=1);var r=ue();e=Je(e,t),e!==null&&(sn(e,t,r),ve(e,r))}function vp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Pu(e,r)}function yp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(k(314))}n!==null&&n.delete(t),Pu(e,r)}var _u;_u=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return me=!1,lp(e,t,r);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&Ic(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Un(e,t),e=t.pendingProps;var o=sr(t,se.current);lr(t,r),o=Oi(null,t,n,e,o,r);var l=Di();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(n)?(l=!0,eo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ri(t),o.updater=So,t.stateNode=o,o._reactInternals=t,Bl(t,n,e,r),t=Wl(null,t,n,!0,l,r)):(t.tag=0,U&&l&&Ni(t),ce(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Un(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=wp(n),e=Re(n,e),o){case 0:t=Vl(null,t,n,e,r);break e;case 1:t=Za(null,t,n,e,r);break e;case 11:t=Xa(null,t,n,e,r);break e;case 14:t=Ja(null,t,n,Re(n.type,e),r);break e}throw Error(k(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Re(n,o),Vl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Re(n,o),Za(e,t,n,o,r);case 3:e:{if(pu(t),e===null)throw Error(k(387));n=t.pendingProps,l=t.memoizedState,o=l.element,Uc(e,t),lo(t,n,null,r);var a=t.memoizedState;if(n=a.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=fr(Error(k(423)),t),t=qa(e,t,n,r,o);break e}else if(n!==o){o=fr(Error(k(424)),t),t=qa(e,t,n,r,o);break e}else for(xe=dt(t.stateNode.containerInfo.firstChild),we=t,U=!0,Ie=null,r=Dc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(cr(),n===o){t=Ze(e,t,r);break e}ce(e,t,n,r)}t=t.child}return t;case 5:return Bc(t),e===null&&Dl(t),n=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,Tl(n,o)?a=null:l!==null&&Tl(n,l)&&(t.flags|=32),fu(e,t),ce(e,t,a,r),t.child;case 6:return e===null&&Dl(t),null;case 13:return mu(e,t,r);case 4:return Ti(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ur(t,null,n,r):ce(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Re(n,o),Xa(e,t,n,o,r);case 7:return ce(e,t,t.pendingProps,r),t.child;case 8:return ce(e,t,t.pendingProps.children,r),t.child;case 12:return ce(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,O(no,n._currentValue),n._currentValue=a,l!==null)if(De(l.value,a)){if(l.children===o.children&&!he.current){t=Ze(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(l.tag===1){c=Ke(-1,r&-r),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),Fl(l.return,r,t),s.lanes|=r;break}c=c.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(k(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),Fl(a,r,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ce(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,lr(t,r),o=ze(o),n=n(o),t.flags|=1,ce(e,t,n,r),t.child;case 14:return n=t.type,o=Re(n,t.pendingProps),o=Re(n.type,o),Ja(e,t,n,o,r);case 15:return uu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Re(n,o),Un(e,t),t.tag=1,ge(n)?(e=!0,eo(t)):e=!1,lr(t,r),au(t,n,o),Bl(t,n,o,r),Wl(null,t,n,!0,e,r);case 19:return hu(e,t,r);case 22:return du(e,t,r)}throw Error(k(156,t.tag))};function Lu(e,t){return oc(e,t)}function xp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,r,n){return new xp(e,t,r,n)}function Ki(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wp(e){if(typeof e=="function")return Ki(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pi)return 11;if(e===mi)return 14}return 2}function ht(e,t){var r=e.alternate;return r===null?(r=Ee(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Vn(e,t,r,n,o,l){var a=2;if(n=e,typeof e=="function")Ki(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wt:return Lt(r.children,o,l,t);case fi:a=8,o|=8;break;case dl:return e=Ee(12,r,t,o|2),e.elementType=dl,e.lanes=l,e;case fl:return e=Ee(13,r,t,o),e.elementType=fl,e.lanes=l,e;case pl:return e=Ee(19,r,t,o),e.elementType=pl,e.lanes=l,e;case Bs:return Co(r,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fs:a=10;break e;case Us:a=9;break e;case pi:a=11;break e;case mi:a=14;break e;case tt:a=16,n=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ee(a,r,t,o),t.elementType=e,t.type=n,t.lanes=l,t}function Lt(e,t,r,n){return e=Ee(7,e,n,t),e.lanes=r,e}function Co(e,t,r,n){return e=Ee(22,e,n,t),e.elementType=Bs,e.lanes=r,e.stateNode={isHidden:!1},e}function il(e,t,r){return e=Ee(6,e,null,t),e.lanes=r,e}function al(e,t,r){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kp(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Yi(e,t,r,n,o,l,a,s,c){return e=new kp(e,t,r,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ee(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ri(l),e}function jp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ru(e){if(!e)return yt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var r=e.type;if(ge(r))return Rc(e,r,t)}return t}function Tu(e,t,r,n,o,l,a,s,c){return e=Yi(r,n,!0,e,o,l,a,s,c),e.context=Ru(null),r=e.current,n=ue(),o=mt(r),l=Ke(n,o),l.callback=t??null,ft(r,l,o),e.current.lanes=o,sn(e,o,n),ve(e,n),e}function zo(e,t,r,n){var o=t.current,l=ue(),a=mt(o);return r=Ru(r),t.context===null?t.context=r:t.pendingContext=r,t=Ke(l,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ft(o,t,a),e!==null&&(Oe(e,o,a,l),On(e,o,a)),a}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Xi(e,t){cs(e,t),(e=e.alternate)&&cs(e,t)}function bp(){return null}var Iu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ji(e){this._internalRoot=e}Po.prototype.render=Ji.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));zo(e,t,null,null)};Po.prototype.unmount=Ji.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){zo(null,e,null,null)}),t[Xe]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=dc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<nt.length&&t!==0&&t<nt[r].priority;r++);nt.splice(r,0,e),r===0&&pc(e)}};function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function us(){}function Sp(e,t,r,n,o){if(o){if(typeof n=="function"){var l=n;n=function(){var u=mo(a);l.call(u)}}var a=Tu(t,n,e,0,null,!1,!1,"",us);return e._reactRootContainer=a,e[Xe]=a.current,Yr(e.nodeType===8?e.parentNode:e),At(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var u=mo(c);s.call(u)}}var c=Yi(e,0,!1,null,null,!1,!1,"",us);return e._reactRootContainer=c,e[Xe]=c.current,Yr(e.nodeType===8?e.parentNode:e),At(function(){zo(t,c,r,n)}),c}function Lo(e,t,r,n,o){var l=r._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var s=o;o=function(){var c=mo(a);s.call(c)}}zo(t,a,e,o)}else a=Sp(r,t,e,o,n);return mo(a)}cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=_r(t.pendingLanes);r!==0&&(vi(t,r|1),ve(t,K()),!(M&6)&&(pr=K()+500,kt()))}break;case 13:At(function(){var n=Je(e,1);if(n!==null){var o=ue();Oe(n,e,1,o)}}),Xi(e,1)}};yi=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var r=ue();Oe(t,e,134217728,r)}Xi(e,134217728)}};uc=function(e){if(e.tag===13){var t=mt(e),r=Je(e,t);if(r!==null){var n=ue();Oe(r,e,t,n)}Xi(e,t)}};dc=function(){return A};fc=function(e,t){var r=A;try{return A=e,t()}finally{A=r}};bl=function(e,t,r){switch(t){case"input":if(gl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ko(n);if(!o)throw Error(k(90));Vs(n),gl(n,o)}}}break;case"textarea":$s(e,r);break;case"select":t=r.value,t!=null&&tr(e,!!r.multiple,t,!1)}};Zs=$i;qs=At;var Np={usingClientEntryPoint:!1,Events:[un,Kt,ko,Xs,Js,$i]},Cr={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ep={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rc(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ln=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ln.isDisabled&&Ln.supportsFiber)try{vo=Ln.inject(Ep),He=Ln}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;je.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zi(t))throw Error(k(200));return jp(e,t,null,r)};je.createRoot=function(e,t){if(!Zi(e))throw Error(k(299));var r=!1,n="",o=Iu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Yi(e,1,!1,null,null,r,!1,n,o),e[Xe]=t.current,Yr(e.nodeType===8?e.parentNode:e),new Ji(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=rc(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return At(e)};je.hydrate=function(e,t,r){if(!_o(t))throw Error(k(200));return Lo(null,e,t,!0,r)};je.hydrateRoot=function(e,t,r){if(!Zi(e))throw Error(k(405));var n=r!=null&&r.hydratedSources||null,o=!1,l="",a=Iu;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Tu(t,null,e,1,r??null,o,!1,l,a),e[Xe]=t.current,Yr(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Po(t)};je.render=function(e,t,r){if(!_o(t))throw Error(k(200));return Lo(null,e,t,!1,r)};je.unmountComponentAtNode=function(e){if(!_o(e))throw Error(k(40));return e._reactRootContainer?(At(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};je.unstable_batchedUpdates=$i;je.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!_o(r))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Lo(e,t,r,!1,n)};je.version="18.3.1-next-f1338f8080-20240426";function Mu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mu)}catch(e){console.error(e)}}Mu(),Ms.exports=je;var Cp=Ms.exports,Au,ds=Cp;Au=ds.createRoot,ds.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function on(){return on=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},on.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const fs="popstate";function zp(e){e===void 0&&(e={});function t(n,o){let{pathname:l,search:a,hash:s}=n.location;return ri("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:ho(o)}return _p(t,r,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Pp(){return Math.random().toString(36).substr(2,8)}function ps(e,t){return{usr:e.state,key:e.key,idx:t}}function ri(e,t,r,n){return r===void 0&&(r=null),on({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vr(t):t,{state:r,key:t&&t.key||n||Pp()})}function ho(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function vr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function _p(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:l=!1}=n,a=o.history,s=at.Pop,c=null,u=h();u==null&&(u=0,a.replaceState(on({},a.state,{idx:u}),""));function h(){return(a.state||{idx:null}).idx}function m(){s=at.Pop;let S=h(),f=S==null?null:S-u;u=S,c&&c({action:s,location:w.location,delta:f})}function g(S,f){s=at.Push;let d=ri(w.location,S,f);u=h()+1;let p=ps(d,u),v=w.createHref(d);try{a.pushState(p,"",v)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(v)}l&&c&&c({action:s,location:w.location,delta:1})}function y(S,f){s=at.Replace;let d=ri(w.location,S,f);u=h();let p=ps(d,u),v=w.createHref(d);a.replaceState(p,"",v),l&&c&&c({action:s,location:w.location,delta:0})}function x(S){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof S=="string"?S:ho(S);return d=d.replace(/ $/,"%20"),X(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return s},get location(){return e(o,a)},listen(S){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(fs,m),c=S,()=>{o.removeEventListener(fs,m),c=null}},createHref(S){return t(o,S)},createURL:x,encodeLocation(S){let f=x(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(S){return a.go(S)}};return w}var ms;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ms||(ms={}));function Lp(e,t,r){return r===void 0&&(r="/"),Rp(e,t,r)}function Rp(e,t,r,n){let o=typeof t=="string"?vr(t):t,l=ea(o.pathname||"/",r);if(l==null)return null;let a=Ou(e);Tp(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let u=$p(l);s=Hp(a[c],u)}return s}function Ou(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(l,a,s)=>{let c={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};c.relativePath.startsWith("/")&&(X(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=gt([n,c.relativePath]),h=r.concat(c);l.children&&l.children.length>0&&(X(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ou(l.children,t,h,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Up(u,l.index),routesMeta:h})};return e.forEach((l,a)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))o(l,a);else for(let c of Du(l.path))o(l,a,c)}),t}function Du(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),l=r.replace(/\?$/,"");if(n.length===0)return o?[l,""]:[l];let a=Du(n.join("/")),s=[];return s.push(...a.map(c=>c===""?l:[l,c].join("/"))),o&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Tp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Bp(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Ip=/^:[\w-]+$/,Mp=3,Ap=2,Op=1,Dp=10,Fp=-2,hs=e=>e==="*";function Up(e,t){let r=e.split("/"),n=r.length;return r.some(hs)&&(n+=Fp),t&&(n+=Ap),r.filter(o=>!hs(o)).reduce((o,l)=>o+(Ip.test(l)?Mp:l===""?Op:Dp),n)}function Bp(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Hp(e,t,r){let{routesMeta:n}=e,o={},l="/",a=[];for(let s=0;s<n.length;++s){let c=n[s],u=s===n.length-1,h=l==="/"?t:t.slice(l.length)||"/",m=Vp({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),g=c.route;if(!m)return null;Object.assign(o,m.params),a.push({params:o,pathname:gt([l,m.pathname]),pathnameBase:Xp(gt([l,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(l=gt([l,m.pathnameBase]))}return a}function Vp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Wp(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let l=o[0],a=l.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((u,h,m)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let w=s[m]||"";a=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[m];return y&&!x?u[g]=void 0:u[g]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:a,pattern:e}}function Wp(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),qi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(n.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function $p(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ea(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Gp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qp=e=>Gp.test(e);function Kp(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?vr(e):e,l;if(r)if(Qp(r))l=r;else{if(r.includes("//")){let a=r;r=r.replace(/\/\/+/g,"/"),qi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+r))}r.startsWith("/")?l=gs(r.substring(1),"/"):l=gs(r,t)}else l=t;return{pathname:l,search:Jp(n),hash:Zp(o)}}function gs(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function sl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Fu(e,t){let r=Yp(e);return t?r.map((n,o)=>o===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Uu(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=vr(e):(o=on({},e),X(!o.pathname||!o.pathname.includes("?"),sl("?","pathname","search",o)),X(!o.pathname||!o.pathname.includes("#"),sl("#","pathname","hash",o)),X(!o.search||!o.search.includes("#"),sl("#","search","hash",o)));let l=e===""||o.pathname==="",a=l?"/":o.pathname,s;if(a==null)s=r;else{let m=t.length-1;if(!n&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}s=m>=0?t[m]:"/"}let c=Kp(o,s),u=a&&a!=="/"&&a.endsWith("/"),h=(l||a===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const gt=e=>e.join("/").replace(/\/\/+/g,"/"),Xp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bu=["post","put","patch","delete"];new Set(Bu);const em=["get",...Bu];new Set(em);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ln(){return ln=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ln.apply(this,arguments)}const ta=j.createContext(null),tm=j.createContext(null),Ft=j.createContext(null),Ro=j.createContext(null),Ut=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Hu=j.createContext(null);function rm(e,t){let{relative:r}=t===void 0?{}:t;fn()||X(!1);let{basename:n,navigator:o}=j.useContext(Ft),{hash:l,pathname:a,search:s}=Wu(e,{relative:r}),c=a;return n!=="/"&&(c=a==="/"?n:gt([n,a])),o.createHref({pathname:c,search:s,hash:l})}function fn(){return j.useContext(Ro)!=null}function Bt(){return fn()||X(!1),j.useContext(Ro).location}function Vu(e){j.useContext(Ft).static||j.useLayoutEffect(e)}function nm(){let{isDataRoute:e}=j.useContext(Ut);return e?gm():om()}function om(){fn()||X(!1);let e=j.useContext(ta),{basename:t,future:r,navigator:n}=j.useContext(Ft),{matches:o}=j.useContext(Ut),{pathname:l}=Bt(),a=JSON.stringify(Fu(o,r.v7_relativeSplatPath)),s=j.useRef(!1);return Vu(()=>{s.current=!0}),j.useCallback(function(u,h){if(h===void 0&&(h={}),!s.current)return;if(typeof u=="number"){n.go(u);return}let m=Uu(u,JSON.parse(a),l,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:gt([t,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[t,n,a,l,e])}function Wu(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=j.useContext(Ft),{matches:o}=j.useContext(Ut),{pathname:l}=Bt(),a=JSON.stringify(Fu(o,n.v7_relativeSplatPath));return j.useMemo(()=>Uu(e,JSON.parse(a),l,r==="path"),[e,a,l,r])}function lm(e,t){return im(e,t)}function im(e,t,r,n){fn()||X(!1);let{navigator:o}=j.useContext(Ft),{matches:l}=j.useContext(Ut),a=l[l.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Bt(),h;if(t){var m;let S=typeof t=="string"?vr(t):t;c==="/"||(m=S.pathname)!=null&&m.startsWith(c)||X(!1),h=S}else h=u;let g=h.pathname||"/",y=g;if(c!=="/"){let S=c.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=Lp(e,{pathname:y}),w=dm(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:gt([c,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:gt([c,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,r,n);return t&&w?j.createElement(Ro.Provider,{value:{location:ln({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:at.Pop}},w):w}function am(){let e=hm(),t=qp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),r?j.createElement("pre",{style:o},r):null,null)}const sm=j.createElement(am,null);class cm extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?j.createElement(Ut.Provider,{value:this.props.routeContext},j.createElement(Hu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function um(e){let{routeContext:t,match:r,children:n}=e,o=j.useContext(ta);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(Ut.Provider,{value:t},n)}function dm(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var l;if(!r)return null;if(r.errors)e=r.matches;else if((l=n)!=null&&l.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,s=(o=r)==null?void 0:o.errors;if(s!=null){let h=a.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);h>=0||X(!1),a=a.slice(0,Math.min(a.length,h+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<a.length;h++){let m=a[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=h),m.route.id){let{loaderData:g,errors:y}=r,x=m.route.loader&&g[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((h,m,g)=>{let y,x=!1,w=null,S=null;r&&(y=s&&m.route.id?s[m.route.id]:void 0,w=m.route.errorElement||sm,c&&(u<0&&g===0?(vm("route-fallback"),x=!0,S=null):u===g&&(x=!0,S=m.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,g+1)),d=()=>{let p;return y?p=w:x?p=S:m.route.Component?p=j.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,j.createElement(um,{match:m,routeContext:{outlet:h,matches:f,isDataRoute:r!=null},children:p})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?j.createElement(cm,{location:r.location,revalidation:r.revalidation,component:w,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var $u=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($u||{}),Gu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gu||{});function fm(e){let t=j.useContext(ta);return t||X(!1),t}function pm(e){let t=j.useContext(tm);return t||X(!1),t}function mm(e){let t=j.useContext(Ut);return t||X(!1),t}function Qu(e){let t=mm(),r=t.matches[t.matches.length-1];return r.route.id||X(!1),r.route.id}function hm(){var e;let t=j.useContext(Hu),r=pm(),n=Qu();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function gm(){let{router:e}=fm($u.UseNavigateStable),t=Qu(Gu.UseNavigateStable),r=j.useRef(!1);return Vu(()=>{r.current=!0}),j.useCallback(function(o,l){l===void 0&&(l={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ln({fromRouteId:t},l)))},[e,t])}const vs={};function vm(e,t,r){vs[e]||(vs[e]=!0)}function ym(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Et(e){X(!1)}function xm(e){let{basename:t="/",children:r=null,location:n,navigationType:o=at.Pop,navigator:l,static:a=!1,future:s}=e;fn()&&X(!1);let c=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:c,navigator:l,static:a,future:ln({v7_relativeSplatPath:!1},s)}),[c,s,l,a]);typeof n=="string"&&(n=vr(n));let{pathname:h="/",search:m="",hash:g="",state:y=null,key:x="default"}=n,w=j.useMemo(()=>{let S=ea(h,c);return S==null?null:{location:{pathname:S,search:m,hash:g,state:y,key:x},navigationType:o}},[c,h,m,g,y,x,o]);return w==null?null:j.createElement(Ft.Provider,{value:u},j.createElement(Ro.Provider,{children:r,value:w}))}function wm(e){let{children:t,location:r}=e;return lm(ni(t),r)}new Promise(()=>{});function ni(e,t){t===void 0&&(t=[]);let r=[];return j.Children.forEach(e,(n,o)=>{if(!j.isValidElement(n))return;let l=[...t,o];if(n.type===j.Fragment){r.push.apply(r,ni(n.props.children,l));return}n.type!==Et&&X(!1),!n.props.index||!n.props.children||X(!1);let a={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=ni(n.props.children,l)),r.push(a)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oi.apply(this,arguments)}function km(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,l;for(l=0;l<n.length;l++)o=n[l],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function jm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bm(e,t){return e.button===0&&(!t||t==="_self")&&!jm(e)}const Sm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nm="6";try{window.__reactRouterVersion=Nm}catch{}const Em="startTransition",ys=hd[Em];function Cm(e){let{basename:t,children:r,future:n,window:o}=e,l=j.useRef();l.current==null&&(l.current=zp({window:o,v5Compat:!0}));let a=l.current,[s,c]=j.useState({action:a.action,location:a.location}),{v7_startTransition:u}=n||{},h=j.useCallback(m=>{u&&ys?ys(()=>c(m)):c(m)},[c,u]);return j.useLayoutEffect(()=>a.listen(h),[a,h]),j.useEffect(()=>ym(n),[n]),j.createElement(xm,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:a,future:n})}const zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=j.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:l,replace:a,state:s,target:c,to:u,preventScrollReset:h,viewTransition:m}=t,g=km(t,Sm),{basename:y}=j.useContext(Ft),x,w=!1;if(typeof u=="string"&&Pm.test(u)&&(x=u,zm))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),b=ea(v.pathname,y);v.origin===p.origin&&b!=null?u=b+v.search+v.hash:w=!0}catch{}let S=rm(u,{relative:o}),f=_m(u,{replace:a,state:s,target:c,preventScrollReset:h,relative:o,viewTransition:m});function d(p){n&&n(p),p.defaultPrevented||f(p)}return j.createElement("a",oi({},g,{href:x||S,onClick:w||l?n:d,ref:r,target:c}))});var xs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xs||(xs={}));var ws;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ws||(ws={}));function _m(e,t){let{target:r,replace:n,state:o,preventScrollReset:l,relative:a,viewTransition:s}=t===void 0?{}:t,c=nm(),u=Bt(),h=Wu(e,{relative:a});return j.useCallback(m=>{if(bm(m,r)){m.preventDefault();let g=n!==void 0?n:ho(u)===ho(h);c(e,{replace:g,state:o,preventScrollReset:l,relative:a,viewTransition:s})}},[u,c,h,n,o,r,e,l,a,s])}const H={name:"Satvik Kumar",email:"satvikkumar2101@gmail.com",linkedin:"https://linkedin.com/in/21satvikkumar",github:"https://github.com/21satvik",cvLink:"/pdf/resume.pdf",avatar:"https://avatars.githubusercontent.com/u/68138315?v=4"},Lm={sub:"Analytics & data science — from raw pipelines to the boardroom slide. MSc Business Analytics, UCD Dublin. Graduating 2026. Open to data analyst and strategy roles."},cl={paragraphs:["I have a background in software engineering — real production work at Samsung R&D, research at McGill, mobile apps. Over time I found myself more drawn to the business questions behind the technical ones: what does this data actually mean, and what should we do about it.","That led me to UCD's MSc in Business Analytics, where I've been applying that engineering mindset to data, strategy, and decision-making. I'm comfortable working across both technical and business teams, which tends to be where the most interesting problems live.","Currently based in Dublin, graduating in 2026, and looking for roles in data analytics or strategy."],facts:[{label:"Based in",value:"Dublin, Ireland"},{label:"Currently",value:"MSc Business Analytics, UCD"},{label:"Previously",value:"Samsung · McGill · Canverro"},{label:"Looking for",value:"Data Analyst · Strategy roles in tech or finance"}]},Rm=[{text:"Satvik successfully converted the existing IMAGE project Chrome extension to create a prototype that works on Safari, including iOS. Even after his internship officially ended, he continued to assist with documentation and testing. I appreciated his dedication, and his ability to make progress with limited oversight.",author:"Jeffrey Blum",role:"Mentor, McGill SRL Lab · Mitacs 2023",context:"McGill University",logo:"/images/mcgill.jpeg",avatar:"/images/jeffrey-blum.jpeg"},{text:"I had seen Satvik's work at Samsung Prism Research Internship as I was part of the research as a Professor. While working on this project he has shown extraordinary research skills to come up with proof of concept for the problem which didn't have any prior solution.",author:"Dr. C. Malathy",role:"Professor, SRM Institute of Science & Technology",context:"Samsung Prism Research",logo:"/images/samsung.jpeg",avatar:"/images/malathy.jpeg"},{text:"I first associated with Satvik Kumar when I presented him with a prize in a Hackathon. He has exhibited an excellent set of qualities as a student as well as an individual, with his unique perspective and learning of the subject matter.",author:"Dr. M. Pushpalatha",role:"Head of Department, SRM Institute of Science & Technology",context:"Ultron Hackathon",logo:"/images/srm.jpeg",avatar:null}],Tm=[{num:"3.95/4.2",label:"Business Analytics at UCD"},{num:"9.08/10",label:"Computer Science at SRM"},{num:"3",label:"Countries worked in"},{num:"2026",label:"Graduating in"}],Im=[{company:"University College Dublin",logo:"/images/ucd.jpeg",role:"Tutor",dept:"Business Analytics",period:"Jan 2026 – Present",location:"Dublin",description:"Alongside my MSc, I tutor undergraduate students through analytics projects — covering everything from statistical methods to translating model outputs into business recommendations.",bullets:["Mentored students through end-to-end analytics projects, from data cleaning to stakeholder presentation","Bridged the gap between statistical theory and practical business application"]},{company:"Canverro",logo:"/images/canverro.jpeg",role:"Data Analyst",dept:null,period:"Jun 2024 – Feb 2025",location:"Bengaluru · Remote",description:"Early-stage startup where I owned the analytics function end-to-end — from raw transaction data to dashboards the business actually made decisions from.",bullets:["Identified top-performing products from transaction data → 15% uplift in homepage conversion","Automated dashboards tracking CTR, Bounce Rate, AOV → 150+ hours saved annually","Translated behavioural patterns into actionable marketing strategy across cross-functional teams"]},{company:"McGill University",logo:"/images/mcgill.jpeg",role:"Research Intern",dept:"Mitacs Globalink Scholar",period:"Jun – Sep 2023",location:"Montreal",description:"Spent a summer in Montreal building accessibility tech as a Mitacs Globalink Research Scholar — a competitive international programme drawing thousands of applicants annually. The goal: help visually impaired users interpret charts and graphics on the web.",bullets:["Selected for the Mitacs Globalink scholarship from a large international applicant pool to research at McGill's SRL Lab","Built a mobile browser extension to interpret graphical content for visually impaired users","Integrated voice assistant, haptic feedback, and multi-sensory options into iOS Safari using Swift"]},{company:"Samsung R&D Institute",logo:"/images/samsung.jpeg",role:"R&D Intern",dept:"Prism Programme",period:"Dec 2021 – Oct 2022",location:"Bengaluru",description:"Worked on video processing research at Samsung's R&D division — building systems for stitching and rendering high field-of-view video content.",bullets:["Engineered a video frame stitching system to expand field-of-view for event-based content","Built an interactive player for panning and rendering viewports across stitched frames"]},{company:"DeepKlarity",logo:"/images/deepklarity.jpeg",role:"SDE Intern",dept:null,period:"Apr 2022",location:"Bengaluru · Remote",description:"Built offline-first mobile applications and data collection tooling.",bullets:["Built mobile applications with offline mode using local database access","Developed Python scraping scripts for structured data collection and refinement"]}],Ku=[{slug:"logguard",name:"LogGuard",tagline:"GenAI that reads your logs without reading your data.",year:"2026",status:"Active",category:"RAG · Agentic AI",description:"A RAG-powered log analyser that grounds every response in your actual infrastructure docs — runbooks, past incidents, server contacts. Four specialised agents cross-validate findings before surfacing anything. PII is redacted before any API call.",challenge:"Generic AI gives generic answers. The problem was getting it to respond with your actual infrastructure — the right server, the right contact, the right runbook — not a plausible-sounding guess that wastes time during an incident.",outcome:"A privacy-conscious system where 4 agents reach consensus before surfacing any finding. PII is redacted before any external API call.",tags:["Python","ChromaDB","RAG","Agentic AI","GDPR"],link:"https://github.com/21satvik/RAG_Log_Analyzer",linkLabel:"GitHub"},{slug:"churn",name:"Churn Prediction",tagline:"€556K in revenue at risk. Found it before it walked out the door.",year:"2025",status:"Complete",category:"Predictive Analytics · Strategy",description:"Built a churn prediction model and then made it actually useful — turning 84.6% model accuracy into a board-ready recommendation with €389K saved annually and 1,280% ROI.",challenge:"Most churn models end at the model. This one needed to end at a decision.",outcome:"Month-to-month customers churn at 42% vs 2.8% for long-term. That single finding drove the entire retention strategy.",tags:["Python","XGBoost","Scikit-learn","Logistic Regression","Business Impact Analysis"],link:"https://github.com/21satvik/Customer-Churn-Analysis",linkLabel:"GitHub",report:"/pdf/churn_report.html"},{slug:"urbaneats",name:"UrbanEats Expansion",tagline:"27% of customers were going to the wrong branch. Fixed that.",year:"2025",status:"Complete",category:"Network Optimisation · Strategy",description:"A full three-phase analytics project built for board presentation. Phase 1: descriptive analysis of 4 years of demand data revealed Branch D2 was serving 95,233 customers (27% of its base) in remote districts — operational strain hiding behind good revenue numbers. Phase 2: Holt-Winters forecasting across 10 districts (avg MAPE 6.66%) identified which areas had genuine growth trajectories and which were declining. Phase 3: linear programming optimisation turned those forecasts into a concrete expansion plan — 5 branches, €1.36M investment, €220K under budget.",challenge:"Justify a multi-million euro capital expenditure to a sceptical board — with data at every step, not just the conclusion.",outcome:"5-branch network recommended across D8, D12, D16, D20, D24. 95,082 projected annual customers. €220K contingency maintained. D22 excluded despite pressure — forecasts showed 26% demand decline by 2028.",tags:["Python","Holt-Winters","Linear Programming","Forecasting"],link:"/pdf/urbaneats.pdf",linkLabel:"Report"},{slug:"irish-port",name:"Irish Port Freight Analysis",tagline:"Brexit cut trade with Britain by up to 1,195 tonnes a quarter. The data proved it.",year:"2025",status:"Complete",category:"Statistical Analysis · Policy",description:"Full inferential statistics study on Ireland's maritime freight network using CSO data (2017–2025). Ran t-tests, ANOVA, regression, and confidence intervals to answer six research questions about port dominance, trade balance, seasonality, and the measurable impact of Brexit and COVID-19 on freight volumes.",challenge:"Turn a dataset of port tonnage into statistically defensible answers about Ireland's trade resilience — not just descriptive observations.",outcome:"Brexit finding: trade with Great Britain declined by 245K–1,195K tonnes per quarter (95% CI, p=0.001). COVID finding: no statistically significant long-term decline — the port system recovered fully. Dublin handles 50% of national tonnage but its dominance is stable, not accelerating (regression p=0.259).",tags:["Excel","Statistics","Hypothesis Testing","ANOVA","Regression","CSO Data"],link:"/pdf/irishport.pdf",linkLabel:"Report"},{slug:"enable",name:"enAble",tagline:"Accessibility mapping for people who need it most.",year:"2022",status:"Complete",category:"Mobile · Accessibility",description:"An app for storing and sharing accessibility information about buildings, offices, and public spaces — useful for people with disabilities. Won 1st Runner-up at Ultron 5.0 Hackathon.",challenge:"Build something genuinely useful for accessibility in 48 hours.",outcome:"1st Runner-up, Ultron Hackathon, SRMIST. 5 GitHub stars.",tags:["Flutter","Firebase","Dart","Maps API"],link:"https://github.com/21satvik/enAble-mobile-app",linkLabel:"GitHub"},{slug:"alloys",name:"Production of Alloys",tagline:"Carbon taxes and trade tariffs change the cost structure. The model had to as well.",year:"2025",status:"Complete",category:"Linear Programming · Policy",description:"Started with a classical alloy-blending LP, then extended it into something that reflects how steel producers actually operate today. The model covers two export markets (EU and US), internalises EU ETS/CBAM carbon pricing (€85/tCO₂), and applies destination-specific US Section 232 tariffs (50%). Implemented in FICO Xpress Mosel with external data files for clean scenario switching.",challenge:"Carbon and tariff costs are real — but most production models pretend they don't exist. The challenge was integrating policy into the optimisation without breaking linearity.",outcome:"Six policy scenarios modelled. Key finding: a combined CBAM + high-tariff stress test raises total costs by 38% without changing the underlying material mix at all — meaning policy resilience planning matters more than process efficiency. Decarbonisation hits a hard feasibility ceiling at ~10% reduction due to chemical composition constraints.",tags:["Mosel","Linear Programming","CBAM","Policy Modelling","Xpress"],link:"/pdf/alloyproduction.pdf",linkLabel:"Report"}],Mm={projects:[{name:"IMAGE Project — McGill University",year:"2023",location:"Montreal, Canada",logo:"/images/mcgill.jpeg",siteUrl:"https://image.a11y.mcgill.ca/",sampleImg:"https://image.a11y.mcgill.ca/images/home/sample-rendering.jpg",body:"The IMAGE Project (Internet Multimodal Access to Graphical Exploration) is published, multi-year funded research at McGill's Shared Reality Lab — built to help blind and low-vision users interpret photographs, charts, and maps on the web through spatial audio and haptic feedback. As a Mitacs Globalink Scholar, I ported their Chrome extension to iOS Safari, integrating voice assistant, haptic, and multi-sensory feedback so it worked on mobile for the first time. The project is open source, ACM-published, and partnered with the Canadian Council of the Blind.",quote:"Satvik successfully converted the existing IMAGE project Chrome extension to create a prototype that works on Safari, including iOS. Even after his internship officially ended, he continued to assist with documentation and testing. I appreciated his dedication, and his ability to make progress with limited oversight.",quoteAuthor:"Jeffrey Blum, Mentor — McGill SRL Lab · Mitacs 2023"},{name:"enAble — Accessibility Mapping App",year:"2022",location:"Chennai, India",logo:"/images/srm.jpeg",archUrl:"https://github.com/AishwaryaPai20/ultron/raw/main/assets/videos/assiting%20tool.gif",body:`Finding out whether a building has a ramp, an accessible toilet, or Braille signage shouldn't require a phone call or a wasted journey. That's the problem enAble was built to solve.

The app is a centralised platform for storing and sharing accessibility information about physical spaces — offices, schools, public buildings, marketplaces. Users can search for locations, see exactly what accessibility features are available, and get voice-guided directions to navigate there. Submissions are community-driven, so the information grows over time.

Built in 48 hours with Flutter, Firebase, and Mapbox — mobile app, Firebase authentication, real-time Firestore data, and a companion React web portal, all shipped within the window. Placed 1st Runner-up at Ultron 5.0, SRMIST.`,quote:null,quoteAuthor:null}]},Am={Languages:["Python","SQL","Java","Go","JavaScript","Dart","Swift","NoSQL"],Tools:["Tableau","Power BI","Excel","AWS","Docker","Firebase","GitHub","Linux"],Analytics:["XGBoost","Scikit-learn","Predictive Modelling","Linear Programming","RAG","Agentic AI","Time Series","Statistical Methods"]},Om=[{school:"University College Dublin",logo:"/images/ucd.jpeg",sub:"Smurfit Graduate Business School",degree:"MSc Business Analytics",period:"2025 – 2026",grade:"3.95 GPA",honour:"1st Class Honours",highlights:["Statistical Methods — A+","Optimisation in Business — A","Programming for Analytics — A"],note:"Top of cohort."},{school:"SRM Institute of Science & Technology",logo:"/images/srm.jpeg",sub:"Chennai, India",degree:"BTech Computer Science",period:"2020 – 2024",grade:"9.08 / 10",honour:"Academic Winner · Batch of 2024",highlights:["1st Runner-up, Ultron Hackathon 2022","Mitacs Globalink Scholar 2023","Hackathon Mentor, Hackathon Finalist"],note:"Where I learned to build."}],Dm=[{role:"Associate Technical Lead & Mentor",event:"Open-Source & Technical Events",cause:"Leadership",org:"SRMKzilla",logo:"/images/srmkzilla.jpeg",period:"Oct 2021 – May 2023",description:"Joined SRMKzilla — SRMIST's open-source Mozilla campus club — as a member and worked up to Associate Technical Lead. Led projects end-to-end, ran technical workshops on open-source contribution and web development, and mentored junior members. The role where I learned that leading a team is a different skill from building things."},{role:"Hackathon Mentor",event:"Data Science Hackathons",cause:"Mentoring",org:"Data Science Community SRM",logo:"/images/datasciencecommunitysrm.jpeg",period:"2022 – 2024",description:"Mentored participants during Data Science Community SRM hackathons — helping teams work through problem framing, model selection, and presenting findings clearly under time pressure."}],Yu=[{tag:"Scholarship",title:"Mitacs Globalink Research Scholar",description:"Awarded the Mitacs Globalink scholarship to conduct accessibility research at McGill University, Montreal. One of ~500 international recipients selected annually from thousands of applicants.",issuer:"Mitacs · McGill University",year:"2023",highlight:!0},{tag:"Academic",title:"Academic Winner · Batch of 2024",description:"Recognised as a top academic performer in the BTech Computer Science graduating cohort at SRMIST — awarded at graduation for performance across four years.",issuer:"SRM Institute of Science & Technology",year:"2024",highlight:!0},{tag:"Hackathon",title:"1st Runner-Up · Ultron 5.0",description:"Built enAble — an accessibility mapping app for buildings and public spaces — in 48 hours. Placed 1st runner-up at Ultron 5.0.",issuer:"SRMIST Dept. of Computing Technologies",year:"2022",highlight:!0},{tag:"Challenge",title:"Bloomberg Global Trading Challenge",description:"Competed in Bloomberg's global simulated trading challenge, applying portfolio strategy and market analysis under live market conditions.",issuer:"Bloomberg",year:"2025",highlight:!0},{tag:"Programme",title:"Amazon ML Summer School",description:"Selected for Amazon's invite-only ML Summer School — covering supervised learning, deep learning, and practical NLP with Amazon scientists.",issuer:"Amazon",year:"2022",highlight:!0},{tag:"GPA",title:"3.95 GPA · 1st Class Honours",description:"Achieved 1st Class Honours in MSc Business Analytics at UCD Smurfit, with an A+ in Statistical Methods and A grades across core modules.",issuer:"University College Dublin",year:"2026",highlight:!0},{tag:"ML",title:"Supervised ML: Regression & Classification",issuer:"DeepLearning.AI",year:"2022",highlight:!1,logo:"/images/coursera.jpeg"},{tag:"Database",title:"Oracle Academy Database Foundations",issuer:"Oracle",year:"2023",highlight:!1,logo:"/images/oracle.jpeg"},{tag:"Linux",title:"Red Hat Enterprise Linux",issuer:"Coursera",year:"2023",highlight:!1,logo:"/images/coursera.jpeg"},{tag:"DSA",title:"HackerRank Problem Solving",issuer:"HackerRank",year:"2022",highlight:!1,logo:null}],Fm=`
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  height: 56px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 2.5rem;
  transition: background 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: blur(20px) saturate(1.5);
  border-color: var(--border);
}
.nav-logo {
  font-family: var(--serif); font-size: 1.05rem; color: var(--text);
  letter-spacing: 0.01em; font-style: italic;
  display: flex; align-items: center; gap: 0.65rem; text-decoration: none;
}
.nav-avatar {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1.5px solid var(--a-border); object-fit: cover; display: block;
  transition: border-color 0.2s;
}
.nav-logo:hover .nav-avatar { border-color: var(--a); }
.nav-name span { color: var(--a); font-style: normal; }
.nav-right { display: flex; align-items: center; gap: 2rem; }
.nav-links { display: flex; gap: 1.8rem; list-style: none; }
.nav-links a {
  font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted); transition: color 0.2s;
  position: relative; padding-bottom: 2px;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
  height: 1px; background: var(--a);
  transform: scaleX(0); transform-origin: left; transition: transform 0.25s;
}
.nav-links a:hover { color: var(--text); }
.nav-links a.active { color: var(--a-bright); }
.nav-links a.active::after, .nav-links a:hover::after { transform: scaleX(1); }
.nav-cv {
  font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--a);
  border: 1px solid var(--a-border); padding: 0.35rem 0.85rem; transition: all 0.2s;
  text-decoration: none;
}
.nav-cv:hover { background: var(--a-dim); color: var(--a-bright); }
.nav-burger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.nav-burger span { display: block; width: 20px; height: 1.5px; background: var(--muted); border-radius: 1px; }
.mob-menu {
  display: none; position: fixed; top: 56px; left: 0; right: 0; bottom: 0;
  background: var(--bg);
  border-top: 1px solid var(--border);
  flex-direction: column; justify-content: flex-start; align-items: stretch;
  z-index: 199; overflow-y: auto;
  padding: 1rem 0 2rem;
}
.mob-menu.open { display: flex; }
.mob-menu a {
  font-family: var(--sans); font-size: 1rem; font-weight: 500; font-style: normal;
  color: var(--muted); transition: color 0.2s, background 0.2s; text-decoration: none;
  padding: 1rem 2rem; border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  letter-spacing: 0.02em;
}
.mob-menu a::after { content: '→'; font-size: 0.9rem; color: var(--muted2); transition: transform 0.2s, color 0.2s; }
.mob-menu a:hover, .mob-menu a.active { color: var(--text); background: var(--bg2); }
.mob-menu a.active::after, .mob-menu a:hover::after { color: var(--a); transform: translateX(3px); }
.mob-menu a.active { color: var(--a); }
.mob-cv-row {
  padding: 1.5rem 2rem 0.5rem;
  display: flex; gap: 0.8rem;
}
.mob-cv-btn {
  flex: 1; text-align: center;
  font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 0.75rem 1rem; border: 1px solid var(--a-border); color: var(--a);
  text-decoration: none; transition: all 0.2s;
}
.mob-cv-btn:hover { background: var(--a-dim); }
.nav-theme-btn {
  background: none; border: 1px solid var(--border2);
  color: var(--muted); cursor: pointer; padding: 0.32rem 0.6rem;
  font-size: 0.9rem; line-height: 1; transition: all 0.2s; border-radius: 4px;
  display: flex; align-items: center;
}
.nav-theme-btn:hover { border-color: var(--a-border); color: var(--a); }
@media (max-width: 720px) { .nav-links, .nav-cv { display: none; } .nav-burger { display: flex; } }
@media (max-width: 480px) { .nav { padding: 0 1.2rem; } }
`,ks=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Work",to:"/work"},{label:"Projects",to:"/projects"},{label:"Impact",to:"/impact"},{label:"Contact",to:"/contact"}];function Um(){const[e,t]=j.useState(!1),[r,n]=j.useState(!1),[o,l]=j.useState(()=>localStorage.getItem("theme")||"dark"),{pathname:a}=Bt();j.useEffect(()=>{document.documentElement.setAttribute("data-theme",o),localStorage.setItem("theme",o)},[o]);const s=()=>l(c=>c==="dark"?"light":"dark");return j.useEffect(()=>{const c=()=>t(window.scrollY>20);return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]),j.useEffect(()=>(document.body.style.overflow=r?"hidden":"",()=>{document.body.style.overflow=""}),[r]),j.useEffect(()=>{n(!1)},[a]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Fm}),i.jsxs("nav",{className:`nav${e?" scrolled":""}`,children:[i.jsxs(Me,{to:"/",className:"nav-logo",children:[i.jsx("img",{src:H.avatar,alt:"Satvik",className:"nav-avatar"}),i.jsxs("span",{className:"nav-name",children:[H.name.split(" ")[0]," ",i.jsx("span",{children:H.name.split(" ")[1]})]})]}),i.jsxs("div",{className:"nav-right",children:[i.jsx("ul",{className:"nav-links",children:ks.map(c=>i.jsx("li",{children:i.jsx(Me,{to:c.to,className:a===c.to?"active":"",children:c.label})},c.to))}),i.jsx("a",{href:H.cvLink,target:"_blank",rel:"noopener noreferrer",className:"nav-cv",children:"CV ↗"}),i.jsx("button",{className:"nav-theme-btn",onClick:s,"aria-label":"Toggle theme",children:o==="dark"?"☀️":"🌙"})]}),i.jsxs("button",{className:"nav-burger",onClick:()=>n(c=>!c),"aria-label":"Menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]}),i.jsxs("div",{className:`mob-menu${r?" open":""}`,children:[ks.map(c=>i.jsx(Me,{to:c.to,className:a===c.to?"active":"",children:c.label},c.to)),i.jsx("div",{className:"mob-cv-row",children:i.jsx("a",{href:H.cvLink,target:"_blank",rel:"noopener noreferrer",className:"mob-cv-btn",children:"Download CV ↓"})})]})]})}function Bm(){const[e,t]=j.useState(!1);return j.useEffect(()=>{const r=()=>t(window.innerWidth<=768||/Mobi|Android/i.test(navigator.userAgent));return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e}const Hm=`
.footer {
  border-top: 1px solid var(--border);
  background: var(--bg2);
  padding: 3rem 0 2rem;
}
.footer-inner {
  display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: start; gap: 2rem;
}
.footer-brand {
  display: flex; flex-direction: column; gap: 0.5rem;
}
.footer-name {
  font-family: var(--serif); font-style: italic; font-size: 1.1rem; color: var(--text);
}
.footer-tagline {
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--muted2);
}
.footer-nav {
  display: flex; gap: 2rem; list-style: none;
  justify-content: center; flex-wrap: wrap;
}
.footer-nav a {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted); transition: color 0.2s;
}
.footer-nav a:hover { color: var(--a); }
.footer-right {
  display: flex; flex-direction: column; align-items: flex-end; gap: 0.7rem;
}
.footer-socials {
  display: flex; gap: 1.2rem; align-items: center;
}
.footer-social {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted); transition: color 0.2s;
  display: flex; align-items: center; gap: 0.4rem;
}
.footer-social:hover { color: var(--a); }
.footer-social svg { width: 13px; height: 13px; }
.footer-bottom {
  margin-top: 2.5rem; padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
}
.footer-copy {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.08em;
  color: var(--muted2);
}
.footer-avail {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--a);
}
.footer-avail-dot {
  width: 6px; height: 6px; border-radius: 50%; background: #4ade80;
  box-shadow: 0 0 8px #4ade80; animation: pulseDot 2.5s ease-in-out infinite;
}

@media (max-width: 720px) {
  .footer-inner { grid-template-columns: 1fr; gap: 2rem; }
  .footer-right { align-items: flex-start; }
  .footer-nav { justify-content: flex-start; }
}
`,Vm=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Work",to:"/work"},{label:"Projects",to:"/projects"},{label:"Impact",to:"/impact"},{label:"Contact",to:"/contact"}];function Wm(){const e=Bm(),t=e?`mailto:${H.email}`:`https://mail.google.com/mail/?view=cm&to=${H.email}`;return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Hm}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"wrap",children:[i.jsxs("div",{className:"footer-inner",children:[i.jsxs("div",{className:"footer-brand",children:[i.jsx("span",{className:"footer-name",children:H.name}),i.jsx("span",{className:"footer-tagline",children:"Data · Analytics · Strategy"})]}),i.jsx("ul",{className:"footer-nav",children:Vm.map(r=>i.jsx("li",{children:i.jsx(Me,{to:r.to,children:r.label})},r.to))}),i.jsx("div",{className:"footer-right",children:i.jsxs("div",{className:"footer-socials",children:[i.jsxs("a",{href:H.linkedin,target:"_blank",rel:"noopener noreferrer",className:"footer-social",children:[i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})}),"LinkedIn"]}),i.jsxs("a",{href:H.github,target:"_blank",rel:"noopener noreferrer",className:"footer-social",children:[i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"})}),"GitHub"]}),i.jsxs("a",{href:t,target:e?void 0:"_blank",rel:"noopener noreferrer",className:"footer-social",children:[i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"})}),"Email"]})]})})]}),i.jsxs("div",{className:"footer-bottom",children:[i.jsxs("span",{className:"footer-copy",children:["© ",new Date().getFullYear()," ",H.name," · Dublin, Ireland"]}),i.jsxs("span",{className:"footer-avail",children:[i.jsx("span",{className:"footer-avail-dot"}),"Open to opportunities"]})]})]})})]})}function R({children:e,delay:t=0,style:r={},className:n="",stagger:o=!1}){const l=j.useRef(null);return j.useEffect(()=>{const a=l.current;if(!a)return;const s=new IntersectionObserver(([c])=>{c.isIntersecting&&(a.classList.add("in"),s.disconnect())},{threshold:.06});return s.observe(a),()=>s.disconnect()},[]),i.jsx("div",{ref:l,className:`${o?"sr-stagger":"sr"} ${n}`,style:{transitionDelay:`${t}ms`,...r},children:e})}const $m=`
.rec-section { padding: 5rem 0; border-top: 1px solid var(--border); }
.rec-section-head { margin-bottom: 3rem; }
.rec-section-title {
  font-family: var(--serif);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 400; color: var(--text); line-height: 1.1; margin-top: 0.5rem;
}
.rec-section-title em { font-style: italic; color: var(--a); }

.rec-cards {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.rec-card {
  background: var(--bg2); padding: 2.4rem;
  display: flex; flex-direction: column;
  position: relative; transition: background 0.25s; overflow: hidden;
}
.rec-card:hover { background: var(--bg3); }
.rec-card::before {
  content: '“';
  position: absolute; top: 0.8rem; left: 1.6rem;
  font-family: var(--serif); font-size: 5rem;
  color: var(--a-dim); line-height: 1; pointer-events: none;
}
.rec-card::after {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: var(--a);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.rec-card:hover::after { transform: scaleX(1); }

.rec-context {
  font-family: var(--mono); font-size: 0.73rem;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--a); margin-bottom: 1.2rem; padding-top: 2.2rem;
}
.rec-text {
  font-size: 0.96rem; color: var(--muted);
  line-height: 1.85; margin-bottom: 2rem; flex: 1;
}

.rec-footer {
  display: flex; align-items: center; gap: 1rem;
  padding-top: 1.4rem; border-top: 1px solid var(--border);
  margin-top: auto;
}
/* Avatar circle — shown when photo available */
.rec-avatar {
  width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
  object-fit: cover; object-position: center top;
  border: 1.5px solid var(--a-border);
}
/* Org logo fallback — shown when no photo */
.rec-logo-wrap {
  width: 38px; height: 38px; flex-shrink: 0;
  background: white; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  padding: 4px; overflow: hidden;
}
.rec-logo { width: 100%; height: 100%; object-fit: contain; }

.rec-author { font-size: 1rem; font-weight: 600; color: var(--text); margin-bottom: 0.15rem; }
.rec-role { font-family: var(--mono); font-size: 0.71rem; letter-spacing: 0.04em; color: var(--muted2); line-height: 1.5; }

@media (max-width: 900px) { .rec-cards { grid-template-columns: 1fr; } }
`;function Gm(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:$m}),i.jsxs("div",{className:"rec-section",children:[i.jsxs("div",{className:"rec-section-head",children:[i.jsx("span",{className:"eyebrow",children:"Recommendations"}),i.jsxs("h2",{className:"rec-section-title",children:["What people ",i.jsx("em",{children:"say"})]})]}),i.jsx("div",{className:"rec-cards",children:Rm.map((e,t)=>i.jsxs("div",{className:"rec-card",children:[i.jsx("div",{className:"rec-context",children:e.context}),i.jsxs("p",{className:"rec-text",children:["“",e.text,"”"]}),i.jsxs("div",{className:"rec-footer",children:[e.avatar?i.jsx("img",{src:e.avatar,alt:e.author,className:"rec-avatar",onError:r=>{r.target.style.display="none"}}):i.jsx("div",{className:"rec-logo-wrap",children:i.jsx("img",{src:e.logo,alt:e.context,className:"rec-logo",onError:r=>{r.target.style.display="none"}})}),i.jsxs("div",{children:[i.jsx("div",{className:"rec-author",children:e.author}),i.jsx("div",{className:"rec-role",children:e.role})]})]})]},t))})]})]})}const Qm=`
.home { min-height: 100vh; padding-top: 56px; }

/* ── HERO ── */
.h-hero {
  min-height: calc(100vh - 56px);
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 6rem; padding: 5rem 0;
}
.h-pre {
  font-family: var(--mono); font-size: 0.93rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--a); margin-bottom: 2rem;
  display: flex; align-items: center; gap: 0.8rem;
}
.h-pre::before { content: ''; width: 28px; height: 1px; background: var(--a); display: block; }
.h-pre-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 8px #4ade80; animation: pulseDot 2.5s ease-in-out infinite; }

.h-headline {
  font-family: var(--serif);
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 0.95; letter-spacing: -0.02em;
  color: var(--text); margin-bottom: 2rem;
}
.h-headline .l2 { display: block; color: var(--a); font-style: italic; }
.h-headline .cursor {
  display: inline-block; width: 3px; height: 0.85em;
  background: var(--a); margin-left: 4px; vertical-align: middle;
  animation: blink-cursor 1.1s step-end infinite;
}
@keyframes blink-cursor { 0%,100%{opacity:1} 50%{opacity:0} }
.h-typed {
  display: inline-block;
  transition: opacity 0.15s;
}
.h-typed.hide { opacity: 0; }

.h-sub { font-size: 1.02rem; color: var(--muted); max-width: 400px; line-height: 1.75; margin-bottom: 2.5rem; }
.h-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }

/* Social links row */
.h-socials { display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; }
.h-social-link {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted); text-decoration: none;
  transition: color 0.2s; padding-bottom: 1px; border-bottom: 1px solid transparent;
}
.h-social-link:hover { color: var(--a); border-bottom-color: var(--a-border); }
.h-social-link svg { width: 14px; height: 14px; flex-shrink: 0; }

.h-photo-frame { position: relative; max-width: 340px; margin-left: auto; }
.h-photo {
  width: 100%; aspect-ratio: 4/5;
  object-fit: cover; object-position: center top;
  display: block; border: 1px solid var(--border2);
  filter: grayscale(10%) contrast(1.05);
}
.h-photo-border {
  position: absolute; bottom: -10px; right: -10px;
  width: 100%; height: 100%; border: 1px solid var(--a-border); z-index: -1;
}

/* Stats row */
.h-stats-row {
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 1px; background: var(--border);
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.h-stat-cell { background: var(--bg2); padding: 1.6rem 2rem; transition: background 0.25s; }
.h-stat-cell:hover { background: var(--bg3); }
.h-stat-num { font-family: var(--serif); font-size: 2rem; font-style: italic; color: var(--a-bright); display: block; line-height: 1; margin-bottom: 0.3rem; }
.h-stat-lbl { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }

/* Marquee */
.h-strip {
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  overflow: hidden; white-space: nowrap; padding: 0.85rem 0; background: var(--bg2);
}
.h-strip-track { display: inline-flex; gap: 3rem; animation: marquee 22s linear infinite; }
.h-strip-track:hover { animation-play-state: paused; }
@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
.h-strip-item {
  font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted); display: flex; align-items: center; gap: 0.9rem;
}
.h-strip-sep { width: 3px; height: 3px; border-radius: 50%; background: var(--a); flex-shrink: 0; }

/* Sections */
.h-section { padding: 5rem 0; border-top: 1px solid var(--border); }
.h-section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;
}
.h-section-title { font-family: var(--serif); font-size: clamp(1.6rem,3.5vw,2.3rem); font-weight: 400; color: var(--text); line-height: 1.1; }
.h-section-title em { font-style: italic; color: var(--a); }
.h-see-all { font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); display: flex; align-items: center; gap: 0.5rem; transition: color 0.2s; }
.h-see-all:hover { color: var(--a); }

/* Project rows */
.h-proj-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.h-proj-row {
  display: grid; grid-template-columns: 2.5rem 1fr auto;
  align-items: center; gap: 2rem; padding: 1.6rem 1.8rem;
  background: var(--bg2); text-decoration: none; color: inherit;
  transition: background 0.25s; position: relative; overflow: hidden;
}
.h-proj-row::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
  background: var(--a); transform: scaleY(0); transform-origin: top; transition: transform 0.3s;
}
.h-proj-row:hover { background: var(--bg3); }
.h-proj-row:hover::before { transform: scaleY(1); }
.h-proj-idx { font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.08em; color: var(--a); font-weight: 500; }
.h-proj-name { font-family: var(--serif); font-size: 1.15rem; color: var(--text); margin-bottom: 0.15rem; font-weight: 400; }
.h-proj-cat { font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
.h-proj-arrow { font-size: 1.1rem; color: var(--muted2); flex-shrink: 0; transition: transform 0.2s, color 0.2s; }
.h-proj-row:hover .h-proj-arrow { transform: translate(3px,-3px); color: var(--a); }

/* Experience big cards — removed, now on Work page */

/* Worked with */
.h-worked-with {
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  padding: 2.8rem 0; background: var(--bg2);
}
.h-worked-label {
  font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--muted2); text-align: center; margin-bottom: 2.2rem;
}
.h-logo-strip {
  display: flex; align-items: stretch;
  border: 1px solid var(--border);
}
.h-logo-item {
  flex: 1;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 1.4rem 1rem;
  border-right: 1px solid var(--border);
  cursor: default;
  gap: 0.7rem;
  opacity: 0.45;
  filter: grayscale(100%);
  transition: opacity 0.3s, filter 0.3s, flex 0.4s cubic-bezier(0.16,1,0.3,1), background 0.2s;
  overflow: hidden; min-width: 0;
}
.h-logo-item:last-child { border-right: none; }
.h-logo-strip:has(.h-logo-item:hover) .h-logo-item { flex: 0.6; opacity: 0.3; filter: grayscale(100%); }
.h-logo-strip:has(.h-logo-item:hover) .h-logo-item:hover { flex: 2; opacity: 1; filter: grayscale(0%); background: var(--bg3); }
.h-logo-img { height: 38px; width: auto; max-width: 90px; object-fit: contain; display: block; flex-shrink: 0; }
.h-logo-name {
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--a);
  white-space: nowrap; overflow: hidden;
  max-width: 0; opacity: 0;
  transition: max-width 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s;
}
.h-logo-item:hover .h-logo-name { max-width: 200px; opacity: 1; }

/* Countries */
.h-countries {
  border-bottom: 1px solid var(--border);
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border);
}
.h-country-cell {
  background: var(--bg2); padding: 2rem 2.4rem;
  display: flex; align-items: center; gap: 1.4rem;
  transition: background 0.25s;
}
.h-country-cell:hover { background: var(--bg3); }
.h-country-flag { font-size: 2.4rem; line-height: 1; flex-shrink: 0; }
.h-country-info {}
.h-country-name { font-family: var(--serif); font-size: 1.15rem; color: var(--text); margin-bottom: 0.2rem; }
.h-country-detail { font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.08em; color: var(--muted); }

/* Skills grid */
.h-skills-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.h-skill-group {
  background: var(--bg2); padding: 2rem 2.2rem;
  transition: background 0.25s;
}
.h-skill-group:hover { background: var(--bg3); }
.h-skill-group-label {
  font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--a); margin-bottom: 1.2rem;
  display: flex; align-items: center; gap: 0.6rem;
}
.h-skill-group-label::before { content: ''; width: 16px; height: 1px; background: var(--a); display: block; }
.h-skill-tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.h-skill-tag {
  font-family: var(--mono); font-size: 0.77rem; padding: 0.25rem 0.7rem;
  background: var(--bg3); border: 1px solid var(--border2); color: var(--muted);
  transition: all 0.2s;
}
.h-skill-tag:hover { border-color: var(--a-border); color: var(--text); }

/* Currently block */
.h-currently {
  margin-top: 1px; background: var(--bg2);
  padding: 2rem 2.2rem;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
  border: 1px solid var(--border); border-top: none;
}
.h-now-item {}
.h-now-label {
  font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--muted2); margin-bottom: 0.5rem; display: block;
}
.h-now-val { font-size: 1.02rem; color: var(--text); line-height: 1.5; }
.h-creds { padding: 3.5rem 0; border-top: 1px solid var(--border); }
.h-creds-lbl { font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted2); margin-bottom: 1.2rem; }
.h-creds-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.h-cred {
  font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.04em;
  padding: 0.32rem 0.85rem; background: var(--bg2); border: 1px solid var(--border2);
  color: var(--muted); white-space: nowrap; transition: all 0.2s;
  display: inline-flex; align-items: center; gap: 0.5rem;
}
.h-cred:hover { border-color: var(--a-border); color: var(--text); }
.h-cred-issuer { color: var(--muted2); margin-left: 0.4rem; font-size: 0.85rem; }
.h-cred-logo { width: 16px; height: 16px; object-fit: contain; flex-shrink: 0; border-radius: 2px; }

/* Footer CTA */
.h-footer-cta {
  border-top: 1px solid var(--border); padding: 4rem 0;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem;
}
.h-footer-cta-txt { font-family: var(--serif); font-style: italic; font-size: clamp(1.4rem,3vw,1.9rem); color: var(--muted); }
.h-footer-cta-txt span { color: var(--text); }

/* Mobile photo+badge row — hidden on desktop */
.h-hero-top-row {
  display: none;
}
.h-photo-mobile { display: none; }

@media (max-width: 960px) {
  .h-hero { grid-template-columns: 1fr; padding: 3rem 0 2.5rem; gap: 1.5rem; min-height: unset; }
  /* Hide the desktop right-column photo */
  .h-hero-right { display: none; }
  /* Show photo inline with badge at top */
  .h-hero-top-row {
    display: flex; align-items: center; gap: 1.2rem; margin-bottom: 1.6rem;
  }
  .h-photo-mobile {
    display: block; flex-shrink: 0;
  }
  .h-photo-mobile .h-photo {
    border-radius: 12px; aspect-ratio: 3/4; object-position: center top; width: 90px; height: 120px;
  }
  .h-photo-mobile .h-photo-border { display: none; }
  .h-pre { margin-bottom: 0; }
  .h-stats-row { grid-template-columns: repeat(2,1fr); }
  .h-exp-card { padding: 1.6rem; gap: 1.5rem; }
  .h-exp-logo-wrap, .h-exp-logo-fallback { width: 56px; height: 56px; border-radius: 8px; }
  .h-countries { grid-template-columns: 1fr; }
  .h-skills-grid { grid-template-columns: 1fr 1fr; }
  .h-currently { grid-template-columns: 1fr; gap: 1.2rem; }
  .h-section { padding: 3rem 0; }
}
@media (max-width: 600px) {
  .h-hero { padding: 2rem 0; gap: 2rem; }
  .h-pre { font-size: 0.78rem; margin-bottom: 1.2rem; }
  .h-headline { font-size: clamp(2rem, 8vw, 3rem); margin-bottom: 1.2rem; }
  .h-sub { font-size: 0.92rem; margin-bottom: 1.6rem; }
  .h-ctas { flex-direction: column; }
  .h-footer-cta { flex-direction: column; padding: 2.5rem 0; }
  .h-proj-row { grid-template-columns: 2rem 1fr auto; gap: 0.8rem; padding: 1rem 1.2rem; }
  .h-proj-name { font-size: 1rem; }
  .h-proj-cat { font-size: 0.72rem; }
  .h-exp-period-badge { display: none; }
  .h-stats-row { grid-template-columns: 1fr 1fr; }
  .h-stat-cell { padding: 1rem 1.2rem; }
  .h-stat-num { font-size: 1.5rem; }
  .h-section { padding: 2.5rem 0; }
  .h-section-head { margin-bottom: 1.2rem; }
  .h-skills-grid { grid-template-columns: 1fr; }
  .h-currently { padding: 1.5rem; }
  .h-now-val { font-size: 0.9rem; }
  /* Logo strip: wrap on mobile, no expand effect */
  .h-logo-strip { flex-wrap: wrap; border: none; gap: 1px; background: var(--border); }
  .h-logo-item { flex: none; width: calc(33.33% - 1px); opacity: 0.75; filter: grayscale(20%); border: 1px solid var(--border); border-right: none; }
  .h-logo-strip:has(.h-logo-item:hover) .h-logo-item { flex: none; opacity: 0.75; filter: grayscale(20%); }
  .h-logo-strip:has(.h-logo-item:hover) .h-logo-item:hover { flex: none; width: calc(33.33% - 1px); opacity: 1; filter: grayscale(0%); }
  .h-worked-with { padding: 2rem 0; }
  .h-countries { grid-template-columns: 1fr; }
  .h-country-cell { padding: 1.2rem 1.5rem; }
  .h-creds { padding: 2rem 0; }
}
`,Km=["Python","SQL","Machine Learning","RAG","Agentic AI","Tableau","Power BI","PostgreSQL","Go","Flutter","Business Analysis","Research","Computer Vision","NLP","Data Analysis","Microservices","REST APIs","Git","Linux","AWS","Python","SQL","Machine Learning","RAG","Agentic AI","Tableau","Power BI","PostgreSQL","Go","Flutter","Business Analysis","Research","Computer Vision","NLP","Data Analysis","Microservices","REST APIs","Git","Linux","AWS"],js=["decisions.","stories.","strategy.","arguments.","clarity."];function Ym(){const[e,t]=j.useState(0),[r,n]=j.useState(""),[o,l]=j.useState(!1),[a,s]=j.useState(!0);return j.useEffect(()=>{const c=js[e];let u;return!o&&r.length<c.length?u=setTimeout(()=>n(c.slice(0,r.length+1)),60):!o&&r.length===c.length?u=setTimeout(()=>l(!0),2200):o&&r.length>0?u=setTimeout(()=>n(r.slice(0,-1)),35):o&&r.length===0&&(l(!1),t(h=>(h+1)%js.length)),()=>clearTimeout(u)},[r,o,e]),i.jsxs("span",{className:"h-typed",children:[r,i.jsx("span",{className:"cursor"})]})}function Xm(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Qm}),i.jsxs("div",{className:"home",children:[i.jsx("section",{children:i.jsx("div",{className:"wrap",children:i.jsxs("div",{className:"h-hero",children:[i.jsxs("div",{className:"h-hero-left",children:[i.jsxs("div",{className:"h-hero-top-row",children:[i.jsx("div",{className:"h-photo-frame h-photo-mobile",children:i.jsx("img",{src:H.avatar,alt:"Satvik Kumar",className:"h-photo"})}),i.jsxs("div",{className:"h-pre",children:[i.jsx("span",{className:"h-pre-dot"}),"Available · Dublin, Ireland"]})]}),i.jsxs("h1",{className:"h-headline",children:["I turn data into",i.jsx("br",{}),i.jsx("span",{className:"l2",children:i.jsx(Ym,{})})]}),i.jsx("p",{className:"h-sub",children:Lm.sub}),i.jsxs("div",{className:"h-ctas",children:[i.jsx(Me,{to:"/projects",className:"btn-fill",children:"See My Work →"}),i.jsx(Me,{to:"/about",className:"btn-line",children:"About Me"})]}),i.jsxs("div",{className:"h-socials",children:[i.jsxs("a",{href:H.linkedin,target:"_blank",rel:"noopener noreferrer",className:"h-social-link",children:[i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})}),"LinkedIn"]}),i.jsxs("a",{href:H.github,target:"_blank",rel:"noopener noreferrer",className:"h-social-link",children:[i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"})}),"GitHub"]}),i.jsxs("a",{href:H.cvLink,target:"_blank",rel:"noopener noreferrer",className:"h-social-link",children:[i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-5h8v1H8v-1zm0-3h8v1H8v-1zm0-3h4v1H8V9z"})}),"Download CV"]})]})]}),i.jsx("div",{className:"h-hero-right",children:i.jsxs("div",{className:"h-photo-frame",children:[i.jsx("img",{src:H.avatar,alt:"Satvik Kumar",className:"h-photo"}),i.jsx("div",{className:"h-photo-border"})]})})]})})}),i.jsx("section",{className:"h-section",children:i.jsxs("div",{className:"wrap",children:[i.jsx(R,{children:i.jsxs("div",{className:"h-section-head",children:[i.jsxs("h2",{className:"h-section-title",children:["Selected ",i.jsx("em",{children:"projects"})]}),i.jsx(Me,{to:"/projects",className:"h-see-all",children:"All projects →"})]})}),i.jsx(R,{delay:80,stagger:!0,children:i.jsx("div",{className:"h-proj-list",children:Ku.slice(0,4).map((e,t)=>i.jsxs(Me,{to:`/projects#${e.slug}`,className:"h-proj-row",children:[i.jsxs("div",{className:"h-proj-idx",children:["0",t+1]}),i.jsxs("div",{children:[i.jsx("div",{className:"h-proj-name",children:e.name}),i.jsx("div",{className:"h-proj-cat",children:e.category})]}),i.jsx("div",{className:"h-proj-arrow",children:"↗"})]},e.slug))})})]})}),i.jsx("section",{className:"h-section",style:{paddingTop:0},children:i.jsx("div",{className:"wrap",children:i.jsx(R,{children:i.jsx(Gm,{})})})}),i.jsx("section",{className:"h-section",children:i.jsxs("div",{className:"wrap",children:[i.jsx(R,{children:i.jsxs("div",{className:"h-section-head",children:[i.jsxs("h2",{className:"h-section-title",children:["What I ",i.jsx("em",{children:"work with"})]}),i.jsx(Me,{to:"/about",className:"h-see-all",children:"Full background →"})]})}),i.jsxs(R,{delay:80,children:[i.jsx("div",{className:"h-skills-grid",children:[{label:"Data & ML",tags:["Python","SQL","Machine Learning","XGBoost","RAG","Agentic AI","NLP","Computer Vision","Linear Programming"]},{label:"Tools & Infra",tags:["Tableau","Power BI","PostgreSQL","Go","REST APIs","Microservices","AWS","Git","Linux","Firebase"]},{label:"Domain & Soft",tags:["Business Analysis","Research","Team Leadership","Communication","Software Development","Flutter","iOS Dev"]}].map(e=>i.jsxs("div",{className:"h-skill-group",children:[i.jsx("div",{className:"h-skill-group-label",children:e.label}),i.jsx("div",{className:"h-skill-tags",children:e.tags.map(t=>i.jsx("span",{className:"h-skill-tag",children:t},t))})]},e.label))}),i.jsxs("div",{className:"h-currently",children:[i.jsxs("div",{className:"h-now-item",children:[i.jsx("span",{className:"h-now-label",children:"Currently"}),i.jsx("span",{className:"h-now-val",children:"MSc Business Analytics · UCD Dublin"})]}),i.jsxs("div",{className:"h-now-item",children:[i.jsx("span",{className:"h-now-label",children:"Based in"}),i.jsx("span",{className:"h-now-val",children:"Dublin, Ireland"})]}),i.jsxs("div",{className:"h-now-item",children:[i.jsx("span",{className:"h-now-label",children:"Open to"}),i.jsx("span",{className:"h-now-val",children:"Full-time · Internships · Contract"})]})]})]})]})}),i.jsx("div",{className:"h-stats-row",children:Tm.map(e=>i.jsxs("div",{className:"h-stat-cell",children:[i.jsx("span",{className:"h-stat-num",children:e.num}),i.jsx("span",{className:"h-stat-lbl",children:e.label})]},e.label))}),i.jsx("div",{className:"h-worked-with",children:i.jsxs("div",{className:"wrap",children:[i.jsx("div",{className:"h-worked-label",children:"Organisations I've worked with"}),i.jsx("div",{className:"h-logo-strip",children:[{src:"/images/ucd.jpeg",alt:"University College Dublin",name:"UCD Dublin"},{src:"/images/mcgill.jpeg",alt:"McGill University",name:"McGill"},{src:"/images/samsung.jpeg",alt:"Samsung R&D",name:"Samsung R&D"},{src:"/images/canverro.jpeg",alt:"Canverro",name:"Canverro"},{src:"/images/deepklarity.jpeg",alt:"DeepKlarity",name:"DeepKlarity"},{src:"/images/srm.jpeg",alt:"SRM Institute",name:"SRM"}].map(e=>i.jsxs("div",{className:"h-logo-item",children:[i.jsx("img",{src:e.src,alt:e.alt,className:"h-logo-img"}),i.jsx("span",{className:"h-logo-name",children:e.name})]},e.alt))})]})}),i.jsx("div",{className:"h-countries",children:[{flag:"🇮🇪",name:"Ireland",detail:"UCD Dublin · MSc · TA"},{flag:"🇨🇦",name:"Canada",detail:"McGill University · Mitacs Research"},{flag:"🇮🇳",name:"India",detail:"Samsung · Canverro · DeepKlarity"}].map(e=>i.jsxs("div",{className:"h-country-cell",children:[i.jsx("span",{className:"h-country-flag",children:e.flag}),i.jsxs("div",{className:"h-country-info",children:[i.jsx("div",{className:"h-country-name",children:e.name}),i.jsx("div",{className:"h-country-detail",children:e.detail})]})]},e.name))}),i.jsx("div",{className:"h-strip",children:i.jsx("div",{className:"h-strip-track",children:Km.map((e,t)=>i.jsxs("span",{className:"h-strip-item",children:[i.jsx("span",{className:"h-strip-sep"}),e]},t))})}),i.jsx("div",{className:"wrap",children:i.jsx(R,{children:i.jsxs("div",{className:"h-footer-cta",children:[i.jsxs("p",{className:"h-footer-cta-txt",children:["Want to work together?",i.jsx("br",{}),i.jsx("span",{children:"Let's talk."})]}),i.jsx(Me,{to:"/contact",className:"btn-fill",children:"Get in touch →"})]})})})]})]})}const Jm=`
.about-page { padding-top: 56px; min-height: 100vh; }

/* ── HERO ── */
.ab-hero {
  padding: 5.5rem 0 4rem; border-bottom: 1px solid var(--border);
}
.ab-hero-inner {
  display: grid; grid-template-columns: 1.4fr 1fr; gap: 5rem; align-items: start;
}
.ab-opening {
  font-family: var(--serif);
  font-size: clamp(1.7rem, 3.2vw, 2.6rem);
  font-weight: 400; color: var(--text); line-height: 1.2; margin-bottom: 2.2rem;
}
.ab-opening em { font-style: italic; color: var(--a); }
.ab-paras { display: flex; flex-direction: column; gap: 1.4rem; margin-bottom: 2.5rem; }
.ab-paras p { font-size: 1.02rem; color: var(--muted); line-height: 1.85; }
.ab-status {
  display: inline-flex; align-items: center; gap: 0.7rem;
  font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--a);
}

/* Right col */
.ab-right { display: flex; flex-direction: column; gap: 1.5rem; }
.ab-photo-wrap { position: relative; }
.ab-photo {
  width: 100%; aspect-ratio: 4/5;
  object-fit: cover; object-position: center top;
  display: block; border: 1px solid var(--border2);
  filter: grayscale(12%) contrast(1.05);
}
.ab-photo-line {
  position: absolute; bottom: -10px; left: -10px;
  width: 100%; height: 100%; border: 1px solid var(--a-border); z-index: -1;
}
.ab-facts { background: var(--bg2); border: 1px solid var(--border); }
.ab-fact { padding: 0.9rem 1.3rem; border-bottom: 1px solid var(--border); }
.ab-fact:last-child { border-bottom: none; }
.ab-fact-key { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted2); display: block; margin-bottom: 0.2rem; }
.ab-fact-val { font-size: 1.02rem; color: var(--text); }

/* Education */
.ab-edu { padding: 4rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.ab-edu-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.ab-edu-card { background: var(--bg2); padding: 2.2rem; transition: background 0.25s; }
.ab-edu-card:hover { background: var(--bg3); }

.ab-edu-header { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; }
.ab-edu-logo-wrap {
  width: 44px; height: 44px; flex-shrink: 0; background: white;
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  padding: 5px; overflow: hidden;
}
.ab-edu-logo { width: 100%; height: 100%; object-fit: contain; }
.ab-edu-logo-fb {
  width: 44px; height: 44px; flex-shrink: 0; background: var(--bg3);
  border-radius: 8px; border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 0.8rem; color: var(--a);
}
.ab-edu-title-group { flex: 1; }
.ab-edu-school { font-size: 1.05rem; font-weight: 600; color: var(--text); margin-bottom: 0.1rem; }
.ab-edu-sub-text { font-size: 1.07rem; color: var(--muted); }

.ab-edu-note { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted2); margin-bottom: 0.5rem; }
.ab-edu-grade { font-family: var(--serif); font-size: 2.6rem; font-style: italic; color: var(--a-bright); line-height: 1; margin-bottom: 0.3rem; }
.ab-edu-honour { font-size: 1.07rem; color: var(--muted); margin-bottom: 1.2rem; }
.ab-edu-degree { font-size: 1.05rem; font-weight: 600; color: var(--text); margin-bottom: 1rem; }
.ab-edu-list { list-style: none; display: flex; flex-direction: column; gap: 0.45rem; }
.ab-edu-list li { font-size: 0.93rem; color: var(--muted); padding-left: 1.1rem; position: relative; line-height: 1.5; }
.ab-edu-list li::before { content: ''; position: absolute; left: 0; top: 0.6em; width: 4px; height: 4px; border-radius: 50%; background: var(--a); }

/* Skills */
.ab-skills { padding: 4rem 0; border-bottom: 1px solid var(--border); }
.ab-skills-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2.5rem; }
.ab-skill-group {}
.ab-skill-lbl {
  font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--a-bright); margin-bottom: 1.1rem; padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--a-border); display: block;
}
.ab-pills { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.ab-pill {
  font-family: var(--mono); font-size: 0.85rem;
  letter-spacing: 0.04em; padding: 0.35rem 0.85rem;
  background: var(--bg3); border: 1px solid var(--border2);
  color: var(--text); transition: all 0.2s; cursor: default;
}
.ab-pill:hover { border-color: var(--a); color: var(--a-bright); background: var(--a-dim); }

/* Outside work section */
.ab-outside { padding: 4rem 0; border-bottom: 1px solid var(--border); }
.ab-outside-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.ab-outside-card {
  background: var(--bg2); padding: 2.2rem;
  transition: background 0.25s;
}
.ab-outside-card:hover { background: var(--bg3); }
.ab-outside-icon { font-size: 1.8rem; margin-bottom: 1rem; display: block; }
.ab-outside-title {
  font-family: var(--serif); font-size: 1.15rem; color: var(--text);
  margin-bottom: 0.7rem; font-weight: 400;
}
.ab-outside-desc { font-size: 0.98rem; color: var(--muted); line-height: 1.75; }

.ab-cta { padding: 3.5rem 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
.ab-cta-txt { font-family: var(--serif); font-style: italic; font-size: clamp(1.4rem, 3vw, 1.9rem); color: var(--muted); line-height: 1.3; }
.ab-cta-txt span { color: var(--text); }

@media (max-width: 900px) {
  .ab-hero-inner { grid-template-columns: 1fr; gap: 2rem; }
  .ab-right { display: grid; grid-template-columns: auto 1fr; gap: 1.5rem; }
  .ab-photo-wrap { max-width: 180px; }
  .ab-skills-grid { grid-template-columns: 1fr 1fr; }
  .ab-outside-grid { grid-template-columns: 1fr; }
  .ab-hero { padding: 2.5rem 0 2rem; }
  .ab-edu, .ab-skills, .ab-outside { padding: 2.5rem 0; }
}
@media (max-width: 700px) {
  .ab-edu-cards { grid-template-columns: 1fr; }
  .ab-right { grid-template-columns: 1fr; }
  .ab-photo-wrap { max-width: 100%; }
  .ab-skills-grid { grid-template-columns: 1fr; }
  .ab-edu-grade { font-size: 2rem; }
}
@media (max-width: 480px) {
  .ab-hero { padding: 1.8rem 0 1.5rem; }
  .ab-edu, .ab-skills, .ab-outside { padding: 2rem 0; }
}
`;function Zm({logo:e,school:t}){return i.jsx("div",{className:"ab-edu-logo-wrap",children:i.jsx("img",{src:e,alt:t,className:"ab-edu-logo",onError:r=>{const n=document.createElement("div");n.className="ab-edu-logo-fb",n.textContent=t.slice(0,2).toUpperCase(),r.target.closest(".ab-edu-logo-wrap").replaceWith(n)}})})}const qm=[{icon:"♟",title:"Chess",desc:"Around 1000 on Chess.com. I play for the strategy — the need to think several moves ahead maps well to how I approach problems at work."},{icon:"🎵",title:"Music",desc:"I listen for the lyrics. Artist, genre, popularity — none of that matters as much as whether the words actually mean something."},{icon:"✈️",title:"Travelling",desc:"Lived and worked across India, Canada, and Ireland. Each place has given me a different perspective on how people think and collaborate."}];function eh(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Jm}),i.jsxs("div",{className:"about-page",children:[i.jsx("section",{className:"ab-hero",children:i.jsx("div",{className:"wrap",children:i.jsxs("div",{className:"ab-hero-inner",children:[i.jsxs(R,{children:[i.jsx("span",{className:"eyebrow",children:"About"}),i.jsxs("h1",{className:"ab-opening",children:["Technical enough to build it.",i.jsx("br",{}),i.jsx("em",{children:"Analytical enough to question it."})]}),i.jsx("div",{className:"ab-paras",children:cl.paragraphs.map((e,t)=>i.jsx("p",{children:e},t))}),i.jsxs("div",{className:"ab-status",children:[i.jsx("span",{className:"pulse-dot"}),cl.facts[3].value]})]}),i.jsx(R,{delay:120,children:i.jsxs("div",{className:"ab-right",children:[i.jsxs("div",{className:"ab-photo-wrap",children:[i.jsx("img",{src:H.avatar,alt:"Satvik Kumar",className:"ab-photo"}),i.jsx("div",{className:"ab-photo-line"})]}),i.jsx("div",{className:"ab-facts",children:cl.facts.map(e=>i.jsxs("div",{className:"ab-fact",children:[i.jsx("span",{className:"ab-fact-key",children:e.label}),i.jsx("span",{className:"ab-fact-val",children:e.value})]},e.label))})]})})]})})}),i.jsx("section",{className:"ab-edu",children:i.jsxs("div",{className:"wrap",children:[i.jsxs(R,{children:[i.jsx("span",{className:"eyebrow",children:"Education"}),i.jsxs("h2",{style:{fontFamily:"var(--serif)",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:400,color:"var(--text)",marginBottom:"2rem",lineHeight:1.1},children:["Where I ",i.jsx("em",{style:{fontStyle:"italic",color:"var(--a)"},children:"studied"})]})]}),i.jsx(R,{delay:80,stagger:!0,children:i.jsx("div",{className:"ab-edu-cards",children:Om.map((e,t)=>i.jsxs("div",{className:"ab-edu-card",children:[i.jsxs("div",{className:"ab-edu-header",children:[i.jsx(Zm,{logo:e.logo,school:e.school}),i.jsxs("div",{className:"ab-edu-title-group",children:[i.jsx("div",{className:"ab-edu-school",children:e.school}),i.jsxs("div",{className:"ab-edu-sub-text",children:[e.sub," · ",e.period]})]})]}),i.jsx("div",{className:"ab-edu-note",children:e.note}),i.jsx("div",{className:"ab-edu-grade",children:e.grade}),i.jsx("div",{className:"ab-edu-honour",children:e.honour}),i.jsx("div",{className:"ab-edu-degree",children:e.degree}),i.jsx("ul",{className:"ab-edu-list",children:e.highlights.map((r,n)=>i.jsx("li",{children:r},n))})]},t))})})]})}),i.jsx("section",{className:"ab-skills",children:i.jsxs("div",{className:"wrap",children:[i.jsxs(R,{children:[i.jsx("span",{className:"eyebrow",children:"Skills"}),i.jsxs("h2",{style:{fontFamily:"var(--serif)",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:400,color:"var(--text)",marginBottom:"2rem",lineHeight:1.1},children:["Technical ",i.jsx("em",{style:{fontStyle:"italic",color:"var(--a)"},children:"stack"})]})]}),i.jsx("div",{className:"ab-skills-grid",children:Object.entries(Am).map(([e,t],r)=>i.jsx(R,{delay:r*80,children:i.jsxs("div",{className:"ab-skill-group",children:[i.jsx("span",{className:"ab-skill-lbl",children:e}),i.jsx("div",{className:"ab-pills",children:t.map(n=>i.jsx("span",{className:"ab-pill",children:n},n))})]})},e))})]})}),i.jsx("section",{className:"ab-outside",children:i.jsxs("div",{className:"wrap",children:[i.jsxs(R,{children:[i.jsx("span",{className:"eyebrow",children:"Outside work"}),i.jsxs("h2",{style:{fontFamily:"var(--serif)",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:400,color:"var(--text)",marginBottom:"2rem",lineHeight:1.1},children:["What I do when I'm ",i.jsx("em",{style:{fontStyle:"italic",color:"var(--a)"},children:"not working"})]})]}),i.jsx(R,{delay:80,children:i.jsx("div",{className:"ab-outside-grid",children:qm.map(e=>i.jsxs("div",{className:"ab-outside-card",children:[i.jsx("span",{className:"ab-outside-icon",children:e.icon}),i.jsx("div",{className:"ab-outside-title",children:e.title}),i.jsx("p",{className:"ab-outside-desc",children:e.desc})]},e.title))})})]})}),i.jsx("div",{className:"wrap",children:i.jsx(R,{children:i.jsxs("div",{className:"ab-cta",children:[i.jsxs("p",{className:"ab-cta-txt",children:["That's the background.",i.jsx("br",{}),i.jsx("span",{children:"Now see where it's been applied."})]}),i.jsx(Me,{to:"/work",className:"btn-fill",children:"View Experience →"})]})})})]})]})}const th=`
.work-page { padding-top: 56px; min-height: 100vh; }

.work-hero { padding: 5rem 0 4rem; border-bottom: 1px solid var(--border); }
.work-title {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400; line-height: 0.95; letter-spacing: -0.02em; color: var(--text);
}
.work-title em { font-style: italic; color: var(--a); display: block; }
.work-sub { font-size: 1.05rem; color: var(--muted); margin-top: 2rem; max-width: 420px; line-height: 1.75; }

/* Card list */
.work-list { padding: 4rem 0; display: flex; flex-direction: column; gap: 1px; background: var(--border); }

.work-card {
  background: var(--bg2);
  display: grid; grid-template-columns: 260px 1fr;
  position: relative; overflow: hidden; transition: background 0.3s;
}
.work-card:hover { background: var(--bg3); }
.work-card::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--a); transform: scaleY(0); transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.work-card:hover::before { transform: scaleY(1); }

/* Left — logo + meta */
.work-card-left {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 3.5rem 2rem;
  border-right: 1px solid var(--border); gap: 2rem;
  background: var(--bg);
}
.work-logo-wrap {
  width: 120px; height: 120px; flex-shrink: 0;
  background: white; border-radius: 24px;
  display: flex; align-items: center; justify-content: center;
  padding: 14px; overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
}
.work-logo { width: 100%; height: 100%; object-fit: contain; }
.work-logo-fb {
  width: 120px; height: 120px; flex-shrink: 0;
  background: var(--bg3); border-radius: 24px; border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 1.6rem; color: var(--a);
}
.work-card-meta { text-align: center; display: flex; flex-direction: column; gap: 0.4rem; }
.work-period {
  font-family: var(--mono); font-size: 0.82rem; letter-spacing: 0.06em;
  color: var(--a-bright); white-space: nowrap; display: block;
}
.work-loc {
  font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.06em;
  color: var(--muted2); white-space: nowrap; display: block;
}

/* Right — all content */
.work-card-right { padding: 3.5rem 3.5rem; display: flex; flex-direction: column; gap: 2rem; }

/* Header */
.work-card-header { display: flex; flex-direction: column; gap: 0.6rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border); }
.work-company {
  font-family: var(--serif); font-size: 2.4rem; font-weight: 400;
  color: var(--text); line-height: 1;
}
.work-role-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.work-role { font-size: 1.05rem; color: var(--muted); }
.work-dept {
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--a);
  padding: 0.2rem 0.75rem;
  background: var(--a-dim); border: 1px solid var(--a-border);
}

/* Body */
.work-desc {
  font-size: 1.05rem; color: var(--muted); line-height: 1.85;
  font-style: italic;
  border-left: 2px solid var(--a-border); padding-left: 1.3rem;
}
.work-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
.work-bullets li {
  font-size: 1.02rem; color: var(--muted); padding-left: 1.5rem;
  position: relative; line-height: 1.7;
}
.work-bullets li::before {
  content: ''; position: absolute; left: 0; top: 0.68em;
  width: 5px; height: 5px; border-radius: 50%; background: var(--a);
}

/* Tags footer */
.work-tags-footer {
  padding-top: 1.8rem; border-top: 1px solid var(--border);
  display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;
}
.work-tags-lbl {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--muted2); flex-shrink: 0;
}
.work-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.work-tag {
  font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.04em;
  padding: 0.28rem 0.75rem; background: var(--bg3);
  border: 1px solid var(--border2); color: var(--muted);
  transition: all 0.2s;
}
.work-tag:hover { border-color: var(--a-border); color: var(--a); }

/* Footer CTA */
.work-footer-cta {
  border-top: 1px solid var(--border); padding: 4rem 0;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem;
}
.work-footer-cta-txt { font-family: var(--serif); font-style: italic; font-size: clamp(1.4rem,3vw,1.9rem); color: var(--muted); }
.work-footer-cta-txt span { color: var(--text); }

@media (max-width: 900px) {
  .work-card { grid-template-columns: 200px 1fr; }
  .work-card-right { padding: 2.5rem; }
}
@media (max-width: 720px) {
  .work-card { grid-template-columns: 1fr; }
  .work-card-left {
    flex-direction: row; padding: 1.5rem 1.5rem;
    border-right: none; border-bottom: 1px solid var(--border);
    justify-content: flex-start; align-items: center; gap: 1.2rem;
    background: var(--bg);
  }
  .work-logo-wrap, .work-logo-fb { width: 64px; height: 64px; border-radius: 12px; }
  .work-card-meta { text-align: left; }
  .work-card-right { padding: 1.5rem; }
  .work-company { font-size: 1.6rem; }
  .work-list { padding: 2rem 0; }
  .work-footer { padding: 2.5rem 0; flex-direction: column; gap: 1.2rem; }
}
@media (max-width: 480px) {
  .work-card-left { padding: 1.2rem; gap: 1rem; }
  .work-logo-wrap, .work-logo-fb { width: 52px; height: 52px; border-radius: 10px; }
  .work-card-right { padding: 1.2rem; }
  .work-company { font-size: 1.4rem; }
  .work-tag { font-size: 0.7rem; padding: 0.2rem 0.55rem; }
}
`,bs={"University College Dublin":["Excel","Regression","Linear Programming","Time-Series Forecasting","Classification","Clustering","Mentoring"],Canverro:["Python","SQL","Excel","A/B Testing","Tableau","Cross-functional Collaboration","Presentation","Communication"],"McGill University":["Swift","iOS","Safari Extension","Haptic Feedback","Accessibility","Independent Work","Communication"],"Samsung R&D Institute":["Python","C++","OpenCV","Video Processing","Computer Vision","Research","Problem Solving","Communication"],DeepKlarity:["Flutter","Dart","Firebase","Python","Web Scraping"]};function rh({logo:e,company:t}){return i.jsx("div",{className:"work-logo-wrap",children:i.jsx("img",{src:e,alt:t,className:"work-logo",onError:r=>{const n=document.createElement("div");n.className="work-logo-fb",n.textContent=t.slice(0,2).toUpperCase(),r.target.closest(".work-logo-wrap").replaceWith(n)}})})}function nh(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:th}),i.jsxs("div",{className:"work-page",children:[i.jsx("section",{className:"work-hero",children:i.jsx("div",{className:"wrap",children:i.jsxs(R,{children:[i.jsx("span",{className:"eyebrow",children:"Experience"}),i.jsxs("h1",{className:"work-title",children:["Where I've",i.jsx("em",{children:"worked."})]}),i.jsx("p",{className:"work-sub",children:"Five roles across research, enterprise R&D, startups, and academia. Each one taught me something different about what data is actually for."})]})})}),i.jsx("section",{style:{padding:"4rem 0"},children:i.jsx("div",{className:"wrap",children:i.jsx("div",{className:"work-list",children:Im.map((e,t)=>i.jsx(R,{delay:t*60,children:i.jsxs("div",{className:"work-card",children:[i.jsxs("div",{className:"work-card-left",children:[i.jsx(rh,{logo:e.logo,company:e.company}),i.jsxs("div",{className:"work-card-meta",children:[i.jsx("span",{className:"work-period",children:e.period}),i.jsx("span",{className:"work-loc",children:e.location})]})]}),i.jsxs("div",{className:"work-card-right",children:[i.jsxs("div",{className:"work-card-header",children:[i.jsx("div",{className:"work-company",children:e.company}),i.jsxs("div",{className:"work-role-row",children:[i.jsx("span",{className:"work-role",children:e.role}),e.dept&&i.jsx("span",{className:"work-dept",children:e.dept})]})]}),i.jsx("p",{className:"work-desc",children:e.description}),i.jsx("ul",{className:"work-bullets",children:e.bullets.map((r,n)=>i.jsx("li",{children:r},n))}),bs[e.company]&&i.jsxs("div",{className:"work-tags-footer",children:[i.jsx("span",{className:"work-tags-lbl",children:"Stack"}),i.jsx("div",{className:"work-tags",children:bs[e.company].map(r=>i.jsx("span",{className:"work-tag",children:r},r))})]})]})]})},t))})})}),i.jsx("div",{className:"wrap",children:i.jsx(R,{children:i.jsxs("div",{className:"work-footer-cta",children:[i.jsxs("p",{className:"work-footer-cta-txt",children:["Want to see what I've built?",i.jsx("br",{}),i.jsx("span",{children:"Check out my projects."})]}),i.jsx("a",{href:"/projects",className:"btn-fill",children:"View Projects →"})]})})})]})]})}const oh=`
.proj-page { padding-top: 56px; min-height: 100vh; }

.proj-hero { padding: 3.5rem 0 3rem; border-bottom: 1px solid var(--border); }
.proj-title {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400; line-height: 0.95; letter-spacing: -0.02em; color: var(--text);
}
.proj-title em { font-style: italic; color: var(--a); display: block; }
.proj-sub { font-size: 1rem; color: var(--muted); margin-top: 1.4rem; max-width: 420px; line-height: 1.75; }

/* Card list */
.proj-list { padding: 2.5rem 0; display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }

.proj-card {
  background: var(--bg2);
  display: grid;
  grid-template-columns: 160px 1fr;
  position: relative; overflow: hidden;
  transition: background 0.25s;
  scroll-margin-top: 80px;
}
.proj-card:hover { background: var(--bg3); }
.proj-card::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--a); transform: scaleY(0); transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.proj-card:hover::before { transform: scaleY(1); }

/* Left — number column */
.proj-card-left {
  display: flex; flex-direction: column; align-items: center;
  justify-content: flex-start; padding: 2.2rem 1.2rem;
  border-right: 1px solid var(--border); gap: 0.6rem;
}
.proj-card-left-top { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; }
.proj-card-left-bottom { display: flex; flex-direction: column; align-items: stretch; gap: 0.5rem; width: 100%; margin-top: 0.6rem; }
.proj-num {
  font-family: var(--serif); font-size: 3.8rem; font-style: italic; line-height: 1;
  background: linear-gradient(135deg, var(--a) 0%, var(--a-bright) 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
}
.proj-cat {
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--a); text-align: center; line-height: 1.6;
}
.proj-year { font-family: var(--mono); font-size: 0.75rem; color: var(--muted2); white-space: nowrap; }
.proj-status {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-family: var(--mono); font-size: 0.70rem; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted); white-space: nowrap;
}
.proj-left-link {
  display: flex; align-items: center; justify-content: center; gap: 0.4rem;
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--a); border: 1px solid var(--a-border);
  padding: 0.5rem 0.6rem; transition: all 0.2s; text-decoration: none; text-align: center;
}
.proj-left-link:hover { background: var(--a-dim); color: var(--a-bright); }
.proj-sdot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.proj-sdot.active { background: #4ade80; box-shadow: 0 0 8px #4ade80; animation: pulseDot 2.5s ease-in-out infinite; }
.proj-sdot.done { background: var(--muted2); }

/* Right — all content */
.proj-card-right { padding: 2.2rem 2.5rem; }

.proj-name {
  font-family: var(--serif);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 400; color: var(--text); line-height: 1.05; margin-bottom: 0.4rem;
}
.proj-tagline {
  font-family: var(--serif); font-style: italic;
  font-size: 1rem; color: var(--a-bright); margin-bottom: 1.5rem;
}
.proj-card-divider { height: 1px; background: var(--border); margin-bottom: 1.5rem; }

/* Body — single col now that links are in left panel */
.proj-body { display: grid; grid-template-columns: 1fr 300px; gap: 2.5rem; align-items: start; }

.proj-desc { font-size: 1rem; color: var(--muted); line-height: 1.85; margin-top: 1.2rem; margin-bottom: 0; }
.proj-challenge {
  background: var(--bg3); border-left: 2px solid var(--a);
  padding: 0.9rem 1.2rem;
}
.proj-challenge-lbl {
  font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--muted2); margin-bottom: 0.3rem;
}
.proj-challenge-txt { font-size: 0.95rem; color: var(--muted); font-style: italic; line-height: 1.65; }

.proj-outcome {
  padding: 1rem 1.2rem;
  background: var(--a-dim); border: 1px solid var(--a-border);
  font-size: 0.95rem; color: var(--text); line-height: 1.75; margin-bottom: 1rem;
}
.proj-outcome-lbl {
  font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--a); display: block; margin-bottom: 0.4rem;
}
.proj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
.proj-tag {
  font-family: var(--mono); font-size: 0.76rem; letter-spacing: 0.04em;
  padding: 0.25rem 0.65rem; background: var(--bg3); color: var(--text);
  border: 1px solid var(--border2); transition: all 0.2s;
}
.proj-tag:hover { border-color: var(--a-border); color: var(--a); }


/* Page footer CTA */
.proj-footer {
  border-top: 1px solid var(--border);
  padding: 4rem 0;
  display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;
}
.proj-footer-text {
  font-family: var(--serif); font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-style: italic; color: var(--muted); line-height: 1.3;
}
.proj-footer-text strong { color: var(--text); font-style: normal; font-weight: 400; }
.proj-footer-link {
  font-family: var(--mono); font-size: 0.88rem; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--a); border: 1px solid var(--a-border);
  padding: 0.7rem 1.4rem; text-decoration: none; transition: all 0.2s; white-space: nowrap;
}
.proj-footer-link:hover { background: var(--a-dim); color: var(--a-bright); }

@media (max-width: 900px) {
  .proj-card { grid-template-columns: 1fr; }
  .proj-card-left {
    flex-direction: row; padding: 1.2rem 1.5rem;
    border-right: none; border-bottom: 1px solid var(--border);
    align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.8rem;
  }
  .proj-card-left-top { flex-direction: row; gap: 1rem; align-items: center; }
  .proj-card-left-bottom { flex-direction: row; margin-top: 0; width: auto; gap: 0.5rem; }
  .proj-num { font-size: 2.4rem; }
  .proj-cat { text-align: left; }
  .proj-card-right { padding: 1.5rem; }
  .proj-body { grid-template-columns: 1fr; gap: 1.2rem; }
  .proj-footer { flex-direction: column; align-items: flex-start; gap: 1rem; padding: 2.5rem 0; }
  .proj-list { padding: 1.5rem 0; }
}
@media (max-width: 480px) {
  .proj-card-left { padding: 1rem 1.2rem; }
  .proj-card-left-top { gap: 0.7rem; }
  .proj-num { font-size: 2rem; }
  .proj-card-right { padding: 1.2rem; }
  .proj-name { font-size: 1.3rem !important; }
  .proj-tagline { font-size: 0.9rem; margin-bottom: 1rem; }
  .proj-left-link { font-size: 0.68rem; padding: 0.45rem 0.5rem; }
  .proj-challenge { padding: 0.8rem 1rem; }
  .proj-outcome { padding: 0.8rem 1rem; }
}
`;function lh(){const{hash:e}=Bt();return j.useEffect(()=>{if(e){const t=document.getElementById(e.slice(1));t&&setTimeout(()=>t.scrollIntoView({behavior:"smooth",block:"start"}),100)}},[e]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:oh}),i.jsxs("div",{className:"proj-page",children:[i.jsx("section",{className:"proj-hero",children:i.jsx("div",{className:"wrap",children:i.jsxs(R,{children:[i.jsx("span",{className:"eyebrow",children:"Projects"}),i.jsxs("h1",{className:"proj-title",children:["Selected",i.jsx("em",{children:"work."})]}),i.jsx("p",{className:"proj-sub",children:"Six projects. The technical range of an engineer, applied to business problems."})]})})}),i.jsx("section",{children:i.jsxs("div",{className:"wrap",children:[i.jsx("div",{className:"proj-list",children:Ku.map((t,r)=>i.jsx(R,{delay:Math.min(r*40,160),children:i.jsxs("div",{id:t.slug,className:"proj-card",children:[i.jsxs("div",{className:"proj-card-left",children:[i.jsxs("div",{className:"proj-card-left-top",children:[i.jsxs("span",{className:"proj-num",children:["0",r+1]}),i.jsx("span",{className:"proj-cat",children:t.category}),i.jsx("span",{className:"proj-year",children:t.year}),i.jsxs("div",{className:"proj-status",children:[i.jsx("span",{className:`proj-sdot ${t.status==="Active"?"active":"done"}`}),t.status]})]}),i.jsxs("div",{className:"proj-card-left-bottom",children:[i.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"proj-left-link",children:["↗ ",t.linkLabel]}),t.report&&i.jsx("a",{href:t.report,target:"_blank",rel:"noopener noreferrer",className:"proj-left-link",children:"↗ Report"})]})]}),i.jsxs("div",{className:"proj-card-right",children:[i.jsx("h2",{className:"proj-name",children:t.name}),i.jsx("p",{className:"proj-tagline",children:t.tagline}),i.jsx("div",{className:"proj-card-divider"}),i.jsxs("div",{className:"proj-body",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"proj-challenge",children:[i.jsx("div",{className:"proj-challenge-lbl",children:"The problem"}),i.jsx("p",{className:"proj-challenge-txt",children:t.challenge})]}),i.jsx("p",{className:"proj-desc",children:t.description})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"proj-outcome",children:[i.jsx("span",{className:"proj-outcome-lbl",children:"Result"}),t.outcome]}),i.jsx("div",{className:"proj-tags",children:t.tags.map(n=>i.jsx("span",{className:"proj-tag",children:n},n))})]})]})]})]})},t.slug))}),i.jsx(R,{children:i.jsxs("div",{className:"proj-footer",children:[i.jsxs("p",{className:"proj-footer-text",children:["There's more than just projects.",i.jsx("br",{}),i.jsx("strong",{children:"Accessibility work, leadership, recognition."})]}),i.jsx("a",{href:"/impact",className:"proj-footer-link",children:"View Impact →"})]})})]})})]})]})}function ih(){const[e,t]=j.useState(!1);return j.useEffect(()=>{const r=()=>t(window.innerWidth<=768||/Mobi|Android/i.test(navigator.userAgent));return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e}const ah=`
.contact-page { padding-top: 56px; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; }
.contact-inner { padding: 6rem 0; }

.contact-big {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400; line-height: 0.95; letter-spacing: -0.02em; color: var(--text);
  margin-bottom: 3rem;
}
.contact-big em { font-style: italic; color: var(--a); display: block; }

.contact-body { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; margin-bottom: 4rem; }
.contact-body p { font-size: 1rem; color: var(--muted); line-height: 1.85; margin-bottom: 1.1rem; }

.contact-links { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.contact-row {
  display: flex; align-items: center; gap: 1.6rem; padding: 1.5rem 1.8rem;
  background: var(--bg2); text-decoration: none; color: inherit;
  transition: background 0.25s; position: relative; overflow: hidden;
}
.contact-row::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
  background: var(--a); transform: scaleY(0); transform-origin: top; transition: transform 0.3s;
}
.contact-row:hover { background: var(--bg3); }
.contact-row:hover::before { transform: scaleY(1); }

.contact-icon {
  width: 44px; height: 44px; flex-shrink: 0;
  background: var(--bg3); border-radius: 9px; border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center; color: var(--a);
  transition: border-color 0.2s, background 0.2s;
}
.contact-row:hover .contact-icon { border-color: var(--a-border); background: var(--a-dim); }
.contact-icon svg { width: 21px; height: 21px; }

.contact-text { flex: 1; min-width: 0; }
.contact-lbl { font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted2); margin-bottom: 0.3rem; }
.contact-val { font-size: 1.05rem; color: var(--text); }

.contact-arr { font-size: 1rem; color: var(--muted2); flex-shrink: 0; margin-left: auto; transition: transform 0.2s, color 0.2s; }
.contact-row:hover .contact-arr { transform: translate(3px,-3px); color: var(--a); }

.contact-note {
  border-top: 1px solid var(--border); padding-top: 3rem;
  display: flex; align-items: center; gap: 0.7rem;
  font-family: var(--mono); font-size: 0.80rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted2);
}

@media (max-width: 768px) { .contact-body { grid-template-columns: 1fr; gap: 2.5rem; } }
@media (max-width: 480px) { .contact-inner { padding: 4rem 0; } .contact-row { padding: 1.2rem 1.4rem; } }
`;function sh(){const e=ih(),t=e?`mailto:${H.email}`:`https://mail.google.com/mail/?view=cm&to=${H.email}`,r=[{label:"Email",val:H.email,href:t,ext:!e,arr:"↗",icon:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),i.jsx("path",{d:"m2 7 10 7 10-7"})]})},{label:"LinkedIn",val:"linkedin.com/in/21satvikkumar",href:H.linkedin,ext:!0,arr:"↗",icon:i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})})},{label:"GitHub",val:"github.com/21satvik",href:H.github,ext:!0,arr:"↗",icon:i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"})})},{label:"Curriculum Vitae",val:"Download PDF",href:H.cvLink,ext:!1,arr:"↓",icon:i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-5h8v1H8v-1zm0-3h8v1H8v-1zm0-3h4v1H8V9z"})})}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:ah}),i.jsx("div",{className:"contact-page",children:i.jsx("section",{className:"contact-inner",children:i.jsxs("div",{className:"wrap",children:[i.jsxs(R,{children:[i.jsx("span",{className:"eyebrow",children:"Contact"}),i.jsxs("h1",{className:"contact-big",children:["Let's",i.jsx("em",{children:"talk."})]})]}),i.jsxs("div",{className:"contact-body",children:[i.jsx(R,{delay:80,children:i.jsxs("div",{children:[i.jsx("p",{children:"Open to roles in analytics, strategy, and data science — especially where technical and business thinking need to meet."}),i.jsx("p",{children:"If you're working on something interesting, reach out. I respond to emails."})]})}),i.jsx(R,{delay:120,children:i.jsx("div",{className:"contact-links",children:r.map(n=>i.jsxs("a",{href:n.href,target:n.ext?"_blank":void 0,rel:"noopener noreferrer",className:"contact-row",children:[i.jsx("div",{className:"contact-icon",children:n.icon}),i.jsxs("div",{className:"contact-text",children:[i.jsx("div",{className:"contact-lbl",children:n.label}),i.jsx("div",{className:"contact-val",children:n.val})]}),i.jsx("span",{className:"contact-arr",children:n.arr})]},n.label))})})]}),i.jsx(R,{delay:160,children:i.jsxs("div",{className:"contact-note",children:[i.jsx("span",{className:"pulse-dot"}),"Available for opportunities · Usually responds within 24h"]})})]})})})]})}const ch=`
.impact-page { padding-top: 56px; min-height: 100vh; }

/* ── HERO ── */
.impact-hero { padding: 5rem 0 4rem; border-bottom: 1px solid var(--border); }
.impact-title {
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400; line-height: 0.95; letter-spacing: -0.02em; color: var(--text);
}
.impact-title em { font-style: italic; color: var(--a); display: block; }
.impact-sub { font-size: 1.05rem; color: var(--muted); margin-top: 2rem; max-width: 460px; line-height: 1.75; }

/* ── SHARED SECTION WRAPPER ── */
.impact-section { padding: 5rem 0; border-bottom: 1px solid var(--border); }
.impact-section-header { margin-bottom: 3.5rem; }
.impact-section-eyebrow {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--muted2); margin-bottom: 3.5rem;
  display: flex; align-items: center; gap: 1rem;
}
.impact-section-eyebrow::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.impact-section-title {
  font-family: var(--serif);
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 400; color: var(--text); line-height: 1.1;
}
.impact-section-title em { font-style: italic; color: var(--a); }

/* ── ACCESSIBILITY OPENING ── */
.acc-opening-grid {
  display: grid; grid-template-columns: 180px 1fr; gap: 4rem; align-items: start;
  margin-bottom: 4rem;
}
.acc-opening-label {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--muted2); padding-top: 0.3rem;
}
.acc-opening-text {
  font-family: var(--serif);
  font-size: clamp(1.2rem, 2.2vw, 1.75rem);
  font-weight: 400; color: var(--text); line-height: 1.5;
}
.acc-opening-text em { font-style: italic; color: var(--a); }

/* ── ACCESSIBILITY PROJECT CARDS ── */
.acc-project {
  display: grid; grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border); margin-bottom: 1px;
  background: var(--bg2); transition: background 0.3s;
  position: relative; overflow: hidden;
}
.acc-project:last-child { margin-bottom: 0; }
.acc-project:hover { background: var(--bg3); }
.acc-project::after {
  content: ''; position: absolute;
  top: 0; left: 0; bottom: 0; width: 2px;
  background: var(--a);
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
}
.acc-project:hover::after { transform: scaleY(1); }

.acc-project-left {
  padding: 3rem 2.8rem;
  border-right: 1px solid var(--border);
  display: flex; flex-direction: column; justify-content: space-between;
}
.acc-project-num {
  font-family: var(--serif); font-style: italic;
  font-size: 4.5rem; line-height: 1; color: var(--border2);
  margin-bottom: 1.2rem; display: block; transition: color 0.3s;
}
.acc-project:hover .acc-project-num { color: var(--a-border); }
.acc-project-name {
  font-family: var(--serif); font-size: 1.4rem; font-weight: 400;
  color: var(--text); line-height: 1.2; margin-bottom: 0.4rem;
}
.acc-project-meta-row {
  font-family: var(--mono); font-size: 0.77rem; letter-spacing: 0.1em;
  color: var(--muted2); display: flex; gap: 0.8rem; flex-wrap: wrap;
}
.acc-project-logo-row {
  display: flex; align-items: center; gap: 0.8rem; margin-top: 2rem;
}
.acc-logo-sm {
  width: 32px; height: 32px; flex-shrink: 0; background: white;
  border-radius: 6px; display: flex; align-items: center; justify-content: center;
  padding: 3px; overflow: hidden;
}
.acc-logo-sm img { width: 100%; height: 100%; object-fit: contain; }
.acc-org-name {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.08em; color: var(--muted);
}
.acc-tag-row { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 1.5rem; }
.acc-tag {
  font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.06em;
  padding: 0.2rem 0.6rem; background: var(--bg3);
  border: 1px solid var(--border2); color: var(--muted); transition: all 0.2s;
}
.acc-project:hover .acc-tag { border-color: var(--a-border); color: var(--a); }
.acc-site-link {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--a); text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 1rem;
  transition: color 0.2s; border-bottom: 1px solid var(--a-border); padding-bottom: 2px;
}
.acc-site-link:hover { color: var(--a-bright); }

.acc-project-right { padding: 3rem 2.8rem; }
.acc-project-body { font-size: 1rem; color: var(--muted); line-height: 1.85; }

.acc-gif-wrap {
  margin-top: 1.8rem; border: 1px solid var(--border);
  overflow: hidden; background: var(--bg3);
  max-width: 360px;
}
.acc-gif { width: 100%; display: block; }

.acc-quote {
  border-left: 2px solid var(--a-border); padding-left: 1.3rem; margin-top: 1.8rem;
}
.acc-quote-text {
  font-family: var(--serif); font-style: italic;
  font-size: 1rem; color: var(--muted); line-height: 1.75; margin-bottom: 0.7rem;
}
.acc-quote-author {
  font-family: var(--mono); font-size: 0.72rem;
  letter-spacing: 0.1em; color: var(--a); text-transform: uppercase;
}

/* ── CLOSING STATEMENT ── */
.acc-closing {
  display: grid; grid-template-columns: 160px 1fr; gap: 4rem; align-items: center;
  margin-top: 4rem;
}
.acc-closing-line {
  width: 1px; height: 100px;
  background: linear-gradient(to bottom, var(--a), transparent);
  margin: 0 auto;
}
.acc-closing-text {
  font-family: var(--serif); font-size: clamp(1rem, 1.6vw, 1.3rem);
  font-weight: 400; color: var(--muted); line-height: 1.7;
}
.acc-closing-text em { font-style: italic; color: var(--text); }

/* ── VOLUNTEERING TIMELINE ── */
.vol-list { display: flex; flex-direction: column; }
.vol-item {
  display: grid; grid-template-columns: 200px 1fr; gap: 4rem;
  padding: 3rem 0; border-bottom: 1px solid var(--border);
}
.vol-item:first-child { padding-top: 0; }
.vol-item:last-child { border-bottom: none; }
.vol-left { padding-top: 0.2rem; }
.vol-period { font-family: var(--mono); font-size: 0.84rem; letter-spacing: 0.1em; color: var(--a-bright); margin-bottom: 0.4rem; display: block; }
.vol-cause-badge {
  font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.12em;
  text-transform: uppercase; padding: 0.2rem 0.6rem;
  background: var(--a-dim); border: 1px solid var(--a-border); color: var(--a);
  display: inline-block; margin-top: 0.5rem;
}
.vol-right-header { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 0.25rem; }
.vol-logo-wrap {
  width: 38px; height: 38px; flex-shrink: 0; background: white;
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  padding: 4px; overflow: hidden; margin-top: 3px;
}
.vol-logo { width: 100%; height: 100%; object-fit: contain; }
.vol-logo-fb {
  width: 38px; height: 38px; flex-shrink: 0; background: var(--bg3);
  border-radius: 8px; border: 1px solid var(--border2); margin-top: 3px;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 1rem; color: var(--a);
}
.vol-org { font-family: var(--serif); font-size: 1.4rem; font-weight: 400; color: var(--text); margin-bottom: 0.15rem; }
.vol-role-line { font-size: 1rem; color: var(--muted); }
.vol-event { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--a); margin: 0.8rem 0 1rem; }
.vol-desc { font-size: 0.97rem; color: var(--muted); line-height: 1.8; }

/* ── ACHIEVEMENTS ── */
.ach-grid {
  display: grid; grid-template-columns: 1fr 1fr 1fr;
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.ach-card {
  background: var(--bg2); padding: 2rem;
  transition: background 0.25s; position: relative; overflow: hidden;
  display: flex; flex-direction: column; gap: 0.55rem;
}
.ach-card:hover { background: var(--bg3); }
.ach-card::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 2px; background: linear-gradient(90deg, var(--a), transparent);
  transform: scaleX(0); transform-origin: left; transition: transform 0.35s;
}
.ach-card:hover::after { transform: scaleX(1); }
.ach-tag { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--a-bright); display: block; }
.ach-title { font-family: var(--serif); font-size: 1.02rem; font-weight: 400; color: var(--text); line-height: 1.3; }
.ach-desc { font-size: 0.91rem; color: var(--muted); line-height: 1.65; flex: 1; }
.ach-footer { margin-top: auto; padding-top: 0.8rem; border-top: 1px solid var(--border); }
.ach-issuer { font-family: var(--mono); font-size: 0.8rem; letter-spacing: 0.06em; color: var(--muted2); display: block; }
.ach-year { font-family: var(--mono); font-size: 0.8rem; color: var(--muted2); display: block; margin-top: 0.15rem; }

/* ── CERTS ── */
.cert-section { padding: 4.5rem 0; }
.cert-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.cert-row {
  background: var(--bg2); padding: 1rem 1.5rem;
  display: flex; align-items: center; justify-content: space-between;
  gap: 2rem; transition: background 0.2s;
}
.cert-row:hover { background: var(--bg3); }
.cert-row-left { display: flex; align-items: center; gap: 1rem; flex: 1; min-width: 0; }
.cert-logo-wrap {
  width: 26px; height: 26px; flex-shrink: 0; background: white;
  border-radius: 4px; display: flex; align-items: center; justify-content: center;
  padding: 3px; overflow: hidden;
}
.cert-logo { width: 100%; height: 100%; object-fit: contain; }
.cert-logo-fb {
  width: 26px; height: 26px; flex-shrink: 0; background: var(--bg3);
  border-radius: 4px; border: 1px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 0.68rem; color: var(--a);
}
.cert-tag-pill {
  font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.12em;
  text-transform: uppercase; padding: 0.18rem 0.5rem;
  background: var(--bg3); border: 1px solid var(--border2); color: var(--muted2); white-space: nowrap;
}
.cert-title { font-size: 0.95rem; color: var(--text); }
.cert-right { display: flex; align-items: center; gap: 1.5rem; flex-shrink: 0; }
.cert-issuer { font-family: var(--mono); font-size: 0.73rem; letter-spacing: 0.06em; color: var(--muted2); }
.cert-year { font-family: var(--mono); font-size: 0.73rem; color: var(--muted2); }

/* ── LEFT PANEL IMAGE ── */
.acc-left-img-wrap {
  margin: 1.5rem 0; border: 1px solid var(--border);
  overflow: hidden; background: var(--bg3); flex-shrink: 0;
}
.acc-left-img { width: 100%; display: block; }

/* ── LIGHTBOX ── */
.lightbox-overlay {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.92);
  display: flex; align-items: center; justify-content: center;
  padding: 2rem; cursor: zoom-out;
  animation: lb-in 0.2s cubic-bezier(0.16,1,0.3,1);
}
@keyframes lb-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.lightbox-img {
  max-width: 90vw; max-height: 88vh;
  object-fit: contain; display: block;
  box-shadow: 0 40px 120px rgba(0,0,0,0.8);
  animation: lb-scale 0.25s cubic-bezier(0.16,1,0.3,1);
  cursor: default;
}
@keyframes lb-scale {
  from { transform: scale(0.92); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}
.lightbox-close {
  position: fixed; top: 1.5rem; right: 1.5rem;
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 1.1rem; color: rgba(255,255,255,0.7);
  transition: all 0.15s; z-index: 1001;
}
.lightbox-close:hover { background: rgba(255,255,255,0.15); color: #fff; }

/* clickable image cursor */
.acc-left-img-wrap { cursor: zoom-in; }

/* ── RESPONSIVE ── */
@media (max-width: 900px) { .ach-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 860px) {
  .acc-project { grid-template-columns: 1fr; }
  .acc-project-left { border-right: none; border-bottom: 1px solid var(--border); padding: 1.5rem; }
  .acc-project-right { padding: 1.5rem; }
  .acc-project-num { font-size: 2.6rem; }
  .acc-opening-grid { grid-template-columns: 1fr; gap: 1.5rem; }
  .acc-closing { grid-template-columns: 1fr; gap: 2rem; }
  .acc-closing-line { display: none; }
  .impact-section { padding: 2.5rem 0; }
  .impact-section-header { margin-bottom: 2rem; }
}
@media (max-width: 720px) {
  .vol-item { grid-template-columns: 1fr; gap: 1rem; padding: 1.5rem 0; }
  .vol-left { display: flex; flex-wrap: wrap; gap: 0.8rem; align-items: baseline; }
}
@media (max-width: 520px) {
  .ach-grid { grid-template-columns: 1fr; }
  .cert-row { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
  .cert-row-right { width: 100%; justify-content: flex-start; }
  .lightbox-close { width: 44px; height: 44px; font-size: 1.4rem; top: 0.8rem; right: 0.8rem; }
  .impact-section { padding: 2rem 0; }
}
`,uh=[["Swift","iOS Safari","Spatial Audio","Haptics","Computer Vision","Open Source"],["Flutter","Firebase","Maps API","Dart"]],dh=["McGill University · Mitacs Globalink","SRMIST · Ultron 5.0"],fh=Yu.filter(e=>e.highlight),ph=Yu.filter(e=>!e.highlight);function mh({logo:e,org:t}){return i.jsx("div",{className:"vol-logo-wrap",children:i.jsx("img",{src:e,alt:t,className:"vol-logo",onError:r=>{const n=document.createElement("div");n.className="vol-logo-fb",n.textContent=t.slice(0,2).toUpperCase(),r.target.closest(".vol-logo-wrap").replaceWith(n)}})})}function hh({logo:e,issuer:t}){return e?i.jsx("div",{className:"cert-logo-wrap",children:i.jsx("img",{src:e,alt:t,className:"cert-logo",onError:r=>{const n=document.createElement("div");n.className="cert-logo-fb",n.textContent=t.slice(0,2).toUpperCase(),r.target.closest(".cert-logo-wrap").replaceWith(n)}})}):i.jsx("div",{className:"cert-logo-fb",children:t.slice(0,2).toUpperCase()})}function gh(){const[e,t]=j.useState(null);return j.useEffect(()=>{const r=n=>{n.key==="Escape"&&t(null)};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:ch}),e&&i.jsxs("div",{className:"lightbox-overlay",onClick:()=>t(null),children:[i.jsx("button",{className:"lightbox-close",onClick:()=>t(null),children:"✕"}),i.jsx("img",{src:e,className:"lightbox-img",alt:"Enlarged view",onClick:r=>r.stopPropagation()})]}),i.jsxs("div",{className:"impact-page",children:[i.jsx("section",{className:"impact-hero",children:i.jsx("div",{className:"wrap",children:i.jsxs(R,{children:[i.jsx("span",{className:"eyebrow",children:"Impact"}),i.jsxs("h1",{className:"impact-title",children:["Beyond the",i.jsx("em",{children:"day job."})]}),i.jsx("p",{className:"impact-sub",children:"Accessibility work that reached real users. Community leadership. Recognition. The stuff that happens when you're genuinely interested in the field rather than just working in it."})]})})}),i.jsx("section",{className:"impact-section",children:i.jsxs("div",{className:"wrap",children:[i.jsx(R,{children:i.jsx("div",{className:"impact-section-eyebrow",children:"Accessibility"})}),i.jsx(R,{delay:40,children:i.jsxs("div",{className:"acc-opening-grid",children:[i.jsx("span",{className:"acc-opening-label",children:"Why this matters"}),i.jsxs("p",{className:"acc-opening-text",children:["I didn't set out to specialise in accessibility. But two projects brought me there, and both times I found myself"," ",i.jsx("em",{children:"more invested than I expected."})]})]})}),Mm.projects.map((r,n)=>i.jsx(R,{delay:n*80,children:i.jsxs("div",{className:"acc-project",children:[i.jsxs("div",{className:"acc-project-left",children:[i.jsxs("div",{children:[i.jsxs("span",{className:"acc-project-num",children:["0",n+1]}),i.jsx("div",{className:"acc-project-name",children:r.name}),i.jsxs("div",{className:"acc-project-meta-row",children:[i.jsx("span",{children:r.year}),i.jsx("span",{children:"·"}),i.jsx("span",{children:r.location})]}),r.siteUrl&&i.jsx("a",{href:r.siteUrl,target:"_blank",rel:"noopener noreferrer",className:"acc-site-link",children:"image.a11y.mcgill.ca ↗"}),r.archUrl&&i.jsx("a",{href:"https://github.com/21satvik/enAble-mobile-app",target:"_blank",rel:"noopener noreferrer",className:"acc-site-link",children:"github ↗"})]}),r.sampleImg&&i.jsx("div",{className:"acc-left-img-wrap",onClick:()=>t(r.sampleImg),children:i.jsx("img",{src:r.sampleImg,alt:"IMAGE project sample rendering",className:"acc-left-img"})}),r.archUrl&&i.jsx("div",{className:"acc-left-img-wrap",onClick:()=>t(r.archUrl),children:i.jsx("img",{src:r.archUrl,alt:"enAble architecture",className:"acc-left-img"})}),i.jsxs("div",{children:[i.jsx("div",{className:"acc-tag-row",children:uh[n].map(o=>i.jsx("span",{className:"acc-tag",children:o},o))}),i.jsxs("div",{className:"acc-project-logo-row",children:[i.jsx("div",{className:"acc-logo-sm",children:i.jsx("img",{src:r.logo,alt:"",onError:o=>{o.target.style.display="none"}})}),i.jsx("span",{className:"acc-org-name",children:dh[n]})]})]})]}),i.jsxs("div",{className:"acc-project-right",children:[i.jsx("p",{className:"acc-project-body",children:r.body}),r.quote&&i.jsxs("div",{className:"acc-quote",children:[i.jsxs("p",{className:"acc-quote-text",children:["“",r.quote,"”"]}),i.jsxs("span",{className:"acc-quote-author",children:["— ",r.quoteAuthor]})]})]})]})},n)),i.jsx(R,{delay:160,children:i.jsxs("div",{className:"acc-closing",children:[i.jsx("div",{className:"acc-closing-line"}),i.jsxs("p",{className:"acc-closing-text",children:["These two projects aren't the core of what I do professionally. But they shaped how I think about"," ",i.jsx("em",{children:"who gets to use the things we build"})," ","— and that thinking shows up in everything else."]})]})})]})}),i.jsx("section",{className:"impact-section",children:i.jsxs("div",{className:"wrap",children:[i.jsxs(R,{children:[i.jsx("div",{className:"impact-section-eyebrow",children:"Leadership & Community"}),i.jsxs("h2",{className:"impact-section-title",children:["Giving back to the ",i.jsx("em",{children:"community"})]})]}),i.jsx("div",{className:"vol-list",children:Dm.map((r,n)=>i.jsx(R,{delay:n*60,children:i.jsxs("div",{className:"vol-item",children:[i.jsxs("div",{className:"vol-left",children:[i.jsx("span",{className:"vol-period",children:r.period}),i.jsx("span",{className:"vol-cause-badge",children:r.cause})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"vol-right-header",children:[i.jsx(mh,{logo:r.logo,org:r.org}),i.jsxs("div",{children:[i.jsx("div",{className:"vol-org",children:r.org}),i.jsx("div",{className:"vol-role-line",children:r.role})]})]}),i.jsx("div",{className:"vol-event",children:r.event}),i.jsx("p",{className:"vol-desc",children:r.description})]})]})},n))})]})}),i.jsx("section",{className:"impact-section",children:i.jsxs("div",{className:"wrap",children:[i.jsxs(R,{children:[i.jsx("div",{className:"impact-section-eyebrow",children:"Achievements"}),i.jsxs("h2",{className:"impact-section-title",children:["Recognition that ",i.jsx("em",{children:"meant something"})]})]}),i.jsx(R,{delay:80,stagger:!0,children:i.jsx("div",{className:"ach-grid",children:fh.map((r,n)=>i.jsxs("div",{className:"ach-card",children:[i.jsx("span",{className:"ach-tag",children:r.tag}),i.jsx("div",{className:"ach-title",children:r.title}),r.description&&i.jsx("p",{className:"ach-desc",children:r.description}),i.jsxs("div",{className:"ach-footer",children:[i.jsx("span",{className:"ach-issuer",children:r.issuer}),i.jsx("span",{className:"ach-year",children:r.year})]})]},n))})})]})}),i.jsx("section",{className:"cert-section",children:i.jsxs("div",{className:"wrap",children:[i.jsxs(R,{children:[i.jsx("div",{className:"impact-section-eyebrow",children:"Certifications"}),i.jsxs("h2",{className:"impact-section-title",style:{marginBottom:"2rem"},children:["Keeping the ",i.jsx("em",{children:"skills sharp"})]})]}),i.jsx(R,{delay:80,children:i.jsx("div",{className:"cert-list",children:ph.map((r,n)=>i.jsxs("div",{className:"cert-row",children:[i.jsxs("div",{className:"cert-row-left",children:[i.jsx(hh,{logo:r.logo,issuer:r.issuer}),i.jsx("span",{className:"cert-tag-pill",children:r.tag}),i.jsx("span",{className:"cert-title",children:r.title})]}),i.jsxs("div",{className:"cert-right",children:[i.jsx("span",{className:"cert-issuer",children:r.issuer}),i.jsx("span",{className:"cert-year",children:r.year})]})]},n))})})]})}),i.jsx("div",{className:"wrap",children:i.jsx(R,{children:i.jsxs("div",{style:{borderTop:"1px solid var(--border)",padding:"4rem 0",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"2rem"},children:[i.jsxs("p",{style:{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:"clamp(1.4rem, 3vw, 1.9rem)",color:"var(--muted)",lineHeight:1.3},children:["You've seen the work and the story.",i.jsx("br",{}),i.jsx("span",{style:{color:"var(--text)"},children:"If it resonates, let's talk."})]}),i.jsx("a",{href:"/contact",className:"btn-fill",children:"Get in touch →"})]})})})]})]})}function vh(){const{pathname:e}=Bt();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function yh(){return i.jsxs(Cm,{children:[i.jsx(vh,{}),i.jsx(Um,{}),i.jsxs(wm,{children:[i.jsx(Et,{path:"/",element:i.jsx(Xm,{})}),i.jsx(Et,{path:"/about",element:i.jsx(eh,{})}),i.jsx(Et,{path:"/work",element:i.jsx(nh,{})}),i.jsx(Et,{path:"/projects",element:i.jsx(lh,{})}),i.jsx(Et,{path:"/contact",element:i.jsx(sh,{})}),i.jsx(Et,{path:"/impact",element:i.jsx(gh,{})})]}),i.jsx(Wm,{})]})}Au(document.getElementById("root")).render(i.jsx(j.StrictMode,{children:i.jsx(yh,{})}));
